/* ============================================================
   grammatik-neu.js — die Bausteine von A1 bis C1

   Erst fehlte A2: vier Themen auf A1, dreizehn auf B1/B2 und
   dazwischen nichts, genau dort, wo die meisten stehen.
   Dann fehlte das obere Ende: auf B2 zwei Themen, auf C1 keins —
   wer die Prüfung machen will, fand nichts zum Üben.

   Neu auf B2: Passiv, Konjunktiv II der Vergangenheit, Genitiv,
   obwohl/trotzdem, Verben mit fester Präposition,
   Adjektivendungen.
   Neu auf C1: indirekte Rede mit Konjunktiv I, Partizip als
   Attribut, Nominalstil, Passiv-Ersatzformen, zweiteilige
   Konnektoren, Modalverben in ihrer subjektiven Bedeutung.

   Zwoelf neue Themen: Modalverben, trennbare Verben, Perfekt mit
   haben und sein, Dativ, Possessivartikel, Negation, Imperativ,
   Vergleiche, reflexive Verben, weil/dass/wenn, Praepositionen mit
   Dativ und die Vergangenheit zum Sprechen (war, hatte, konnte).

   Je Aufgabe steht eine Erklärung in einem Satz dabei — nicht die
   Regel aus dem Buch, sondern der Grund, warum es hier so ist.

   Wird NACH uebungen.js geladen und hängt seine Themen an den
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
 },
 {
  "id": "passiv-b2",
  "title": "Passiv weitergedacht — worden, Modalverb, Zustandspassiv",
  "level": "B2",
  "emoji": "🔄",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Der Antrag ___ gestern geprüft.",
    "answer": "wurde",
    "alts": [
     "wurde"
    ],
    "explain": "Passiv im Präteritum: wurde + Partizip II."
   },
   {
    "type": "gap",
    "text": "Die Rechnung ___ noch heute bezahlt.",
    "answer": "wird",
    "alts": [
     "wird"
    ],
    "explain": "Passiv im Präsens: wird + Partizip II."
   },
   {
    "type": "gap",
    "text": "Das Formular ___ von der Sachbearbeiterin unterschrieben.",
    "answer": "wird",
    "alts": [
     "wird",
     "wurde"
    ],
    "explain": "Wer es tut, steht mit von — nötig ist das aber selten."
   },
   {
    "type": "gap",
    "text": "Die Wohnung ist letzte Woche renoviert ___.",
    "answer": "worden",
    "alts": [
     "worden"
    ],
    "explain": "Passiv im Perfekt endet auf worden, nicht auf geworden."
   },
   {
    "type": "gap",
    "text": "In diesem Raum ___ nicht geraucht.",
    "answer": "wird",
    "alts": [
     "wird",
     "darf"
    ],
    "explain": "Ohne handelnde Person: das unpersönliche Passiv."
   },
   {
    "type": "gap",
    "text": "Der Termin muss leider ___ werden.",
    "answer": "verschoben",
    "alts": [
     "verschoben"
    ],
    "explain": "Modalverb + Partizip II + werden."
   },
   {
    "type": "gap",
    "text": "Die Unterlagen ___ bis Freitag eingereicht werden.",
    "answer": "müssen",
    "alts": [
     "müssen",
     "sollen"
    ],
    "explain": "Konjugiert wird das Modalverb, nicht werden."
   },
   {
    "type": "gap",
    "text": "Das Paket ___ morgen früh geliefert.",
    "answer": "wird",
    "alts": [
     "wird"
    ],
    "explain": "Zukunft im Passiv steht meist einfach im Präsens."
   },
   {
    "type": "gap",
    "text": "Nach dem Unfall ___ die Straße für zwei Stunden gesperrt.",
    "answer": "wurde",
    "alts": [
     "wurde",
     "war"
    ],
    "explain": "Der Vorgang liegt in der Vergangenheit: wurde."
   },
   {
    "type": "gap",
    "text": "Die Ergebnisse ___ nächste Woche bekannt gegeben.",
    "answer": "werden",
    "alts": [
     "werden"
    ],
    "explain": "Plural: werden + Partizip II."
   },
   {
    "type": "choice",
    "q": "Welcher Satz ist richtig?",
    "options": [
     "Das Fenster ist geöffnet worden.",
     "Das Fenster ist geöffnet geworden.",
     "Das Fenster hat geöffnet worden.",
     "Das Fenster wurde geöffnet geworden."
    ],
    "answer": 0,
    "explain": "Im Passiv Perfekt heißt das Partizip von werden: worden."
   },
   {
    "type": "choice",
    "q": "„Man repariert den Aufzug.“ Wie heißt das im Passiv?",
    "options": [
     "Der Aufzug wird repariert.",
     "Der Aufzug ist repariert.",
     "Der Aufzug hat repariert.",
     "Der Aufzug wurde reparieren."
    ],
    "answer": 0,
    "explain": "man + Verb wird zu wird + Partizip II."
   },
   {
    "type": "choice",
    "q": "Wann nimmt man das Passiv?",
    "options": [
     "Wenn die Handlung wichtiger ist als die Person.",
     "Wenn man höflich bitten möchte.",
     "Wenn etwas in der Zukunft passiert.",
     "Wenn man einen Wunsch ausdrückt."
    ],
    "answer": 0,
    "explain": "Das Passiv rückt den Vorgang nach vorn — wer handelt, tritt zurück."
   },
   {
    "type": "choice",
    "q": "Was ist der Unterschied? „Die Tür wird geschlossen.“ – „Die Tür ist geschlossen.“",
    "options": [
     "Erstens der Vorgang, zweitens der Zustand.",
     "Erstens die Zukunft, zweitens die Gegenwart.",
     "Kein Unterschied.",
     "Erstens höflich, zweitens direkt."
    ],
    "answer": 0,
    "explain": "wird = es passiert gerade. ist = es ist schon so (Zustandspassiv)."
   }
  ]
 },
 {
  "id": "konjunktiv2-vergangenheit",
  "title": "Hätte, wäre — über das reden, was nicht passiert ist",
  "level": "B2",
  "emoji": "🕰️",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Wenn ich das früher gewusst ___, wäre ich nicht gekommen.",
    "answer": "hätte",
    "alts": [
     "hätte"
    ],
    "explain": "Konjunktiv II der Vergangenheit: hätte / wäre + Partizip II."
   },
   {
    "type": "gap",
    "text": "Ich ___ gern mitgekommen, aber ich musste arbeiten.",
    "answer": "wäre",
    "alts": [
     "wäre"
    ],
    "explain": "Bewegungsverben bilden es mit wäre."
   },
   {
    "type": "gap",
    "text": "Du ___ mir das ruhig sagen können.",
    "answer": "hättest",
    "alts": [
     "hättest"
    ],
    "explain": "Mit Modalverb: hätte + Infinitiv + Modalverb im Infinitiv."
   },
   {
    "type": "gap",
    "text": "An deiner Stelle ___ ich das nicht gemacht.",
    "answer": "hätte",
    "alts": [
     "hätte"
    ],
    "explain": "An deiner Stelle … — der klassische Rat im Rückblick."
   },
   {
    "type": "gap",
    "text": "Beinahe ___ ich den Zug verpasst.",
    "answer": "hätte",
    "alts": [
     "hätte"
    ],
    "explain": "beinahe / fast + Konjunktiv II: es ist gerade noch gut gegangen."
   },
   {
    "type": "gap",
    "text": "Wenn wir früher losgefahren ___, wären wir jetzt schon da.",
    "answer": "wären",
    "alts": [
     "wären"
    ],
    "explain": "Bedingung in der Vergangenheit, Folge in der Gegenwart."
   },
   {
    "type": "gap",
    "text": "Ich ___ nie gedacht, dass das so lange dauert.",
    "answer": "hätte",
    "alts": [
     "hätte"
    ],
    "explain": "hätte gedacht — der überraschte Rückblick."
   },
   {
    "type": "gap",
    "text": "Das ___ nicht nötig gewesen.",
    "answer": "wäre",
    "alts": [
     "wäre"
    ],
    "explain": "sein + Adjektiv im Rückblick: wäre … gewesen."
   },
   {
    "type": "choice",
    "q": "Welcher Satz sagt: es ist nicht passiert?",
    "options": [
     "Ich hätte dich angerufen.",
     "Ich habe dich angerufen.",
     "Ich rufe dich an.",
     "Ich werde dich anrufen."
    ],
    "answer": 0,
    "explain": "Der Konjunktiv II zeigt: die Sache ist gedacht, nicht geschehen."
   },
   {
    "type": "choice",
    "q": "„Du hättest fragen sollen.“ Was steckt dahinter?",
    "options": [
     "Ein Vorwurf im Rückblick.",
     "Eine höfliche Bitte.",
     "Ein Vorschlag für morgen.",
     "Eine Frage."
    ],
    "answer": 0,
    "explain": "hättest … sollen ist der sanfte Vorwurf über etwas Vergangenes."
   },
   {
    "type": "choice",
    "q": "Welche Form ist richtig?",
    "options": [
     "Ich wäre gern gekommen.",
     "Ich hätte gern gekommen.",
     "Ich würde gern gekommen.",
     "Ich wäre gern kommen."
    ],
    "answer": 0,
    "explain": "kommen bildet das Perfekt mit sein — also wäre gekommen."
   },
   {
    "type": "gap",
    "text": "Wenn es nicht geregnet ___, wären wir spazieren gegangen.",
    "answer": "hätte",
    "alts": [
     "hätte"
    ],
    "explain": "regnen bildet das Perfekt mit haben."
   },
   {
    "type": "gap",
    "text": "Ohne deine Hilfe ___ ich das nie geschafft.",
    "answer": "hätte",
    "alts": [
     "hätte"
    ],
    "explain": "Ohne … — die Bedingung steht ohne wenn."
   },
   {
    "type": "gap",
    "text": "Es ___ auch ganz anders kommen können.",
    "answer": "hätte",
    "alts": [
     "hätte"
    ],
    "explain": "hätte … können: die Möglichkeit, die es nicht geworden ist."
   }
  ]
 },
 {
  "id": "genitiv-b2",
  "title": "Genitiv im Schriftdeutsch — wegen, trotz, während, innerhalb",
  "level": "B2",
  "emoji": "🔖",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Das ist das Auto ___ Nachbarn.",
    "answer": "des",
    "alts": [
     "des"
    ],
    "explain": "Maskulin und Neutrum im Genitiv: des + Endung -s oder -en."
   },
   {
    "type": "gap",
    "text": "Die Farbe ___ Wand gefällt mir nicht.",
    "answer": "der",
    "alts": [
     "der"
    ],
    "explain": "Feminin im Genitiv: der."
   },
   {
    "type": "gap",
    "text": "Wegen ___ Wetters bleiben wir zu Hause.",
    "answer": "des",
    "alts": [
     "des"
    ],
    "explain": "wegen steht mit Genitiv."
   },
   {
    "type": "gap",
    "text": "Trotz ___ Verspätung waren wir pünktlich.",
    "answer": "der",
    "alts": [
     "der"
    ],
    "explain": "trotz steht mit Genitiv, hier feminin."
   },
   {
    "type": "gap",
    "text": "Während ___ Sitzung klingelte dreimal das Telefon.",
    "answer": "der",
    "alts": [
     "der"
    ],
    "explain": "während steht mit Genitiv."
   },
   {
    "type": "gap",
    "text": "Innerhalb ___ Frist müssen Sie widersprechen.",
    "answer": "der",
    "alts": [
     "der"
    ],
    "explain": "innerhalb steht mit Genitiv."
   },
   {
    "type": "gap",
    "text": "Das Ende ___ Films hat mich überrascht.",
    "answer": "des",
    "alts": [
     "des"
    ],
    "explain": "Maskulin: des Films."
   },
   {
    "type": "gap",
    "text": "Die Rechte ___ Kinder sind gesetzlich geschützt.",
    "answer": "der",
    "alts": [
     "der"
    ],
    "explain": "Plural im Genitiv: der."
   },
   {
    "type": "choice",
    "q": "Welche Form ist richtig?",
    "options": [
     "das Büro des Chefs",
     "das Büro dem Chef",
     "das Büro den Chef",
     "das Büro der Chef"
    ],
    "answer": 0,
    "explain": "Wem gehört es? Genitiv: des Chefs."
   },
   {
    "type": "choice",
    "q": "Wie sagt man dasselbe umgangssprachlich?",
    "options": [
     "das Auto von meinem Bruder",
     "das Auto mit meinem Bruder",
     "das Auto zu meinem Bruder",
     "das Auto für meinen Bruder"
    ],
    "answer": 0,
    "explain": "Im Alltag ersetzt von + Dativ oft den Genitiv — schriftlich bleibt der Genitiv."
   },
   {
    "type": "choice",
    "q": "Welche Präposition steht NICHT mit Genitiv?",
    "options": [
     "mit",
     "wegen",
     "trotz",
     "während"
    ],
    "answer": 0,
    "explain": "mit steht immer mit Dativ."
   },
   {
    "type": "gap",
    "text": "Aufgrund ___ hohen Nachfrage ist der Kurs voll.",
    "answer": "der",
    "alts": [
     "der"
    ],
    "explain": "aufgrund steht mit Genitiv."
   },
   {
    "type": "gap",
    "text": "Die Hälfte ___ Teilnehmer war zu spät.",
    "answer": "der",
    "alts": [
     "der"
    ],
    "explain": "Mengenangabe + Genitiv Plural."
   },
   {
    "type": "gap",
    "text": "Statt ___ Briefes schickte er eine Mail.",
    "answer": "des",
    "alts": [
     "des"
    ],
    "explain": "statt steht mit Genitiv."
   }
  ]
 },
 {
  "id": "gegensatz-konnektoren",
  "title": "Gegensätze — obwohl, trotzdem, trotz, dennoch",
  "level": "B2",
  "emoji": "⚖️",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "___ es regnete, sind wir spazieren gegangen.",
    "answer": "Obwohl",
    "alts": [
     "Obwohl"
    ],
    "explain": "obwohl leitet einen Nebensatz ein — das Verb rutscht ans Ende."
   },
   {
    "type": "gap",
    "text": "Es regnete. ___ sind wir spazieren gegangen.",
    "answer": "Trotzdem",
    "alts": [
     "Trotzdem",
     "Dennoch"
    ],
    "explain": "trotzdem steht im Hauptsatz, das Verb folgt direkt."
   },
   {
    "type": "gap",
    "text": "Er hat wenig Erfahrung, ___ hat er die Stelle bekommen.",
    "answer": "trotzdem",
    "alts": [
     "trotzdem",
     "dennoch"
    ],
    "explain": "Der Gegensatz nach dem Komma: trotzdem oder dennoch."
   },
   {
    "type": "gap",
    "text": "___ der langen Fahrt war sie gut gelaunt.",
    "answer": "Trotz",
    "alts": [
     "Trotz"
    ],
    "explain": "trotz ist eine Präposition mit Genitiv — danach kommt kein Satz."
   },
   {
    "type": "gap",
    "text": "Sie hat zugesagt, ___ sie eigentlich keine Zeit hat.",
    "answer": "obwohl",
    "alts": [
     "obwohl"
    ],
    "explain": "obwohl kann auch hinten stehen."
   },
   {
    "type": "gap",
    "text": "Das Angebot klingt gut. ___ bin ich skeptisch.",
    "answer": "Dennoch",
    "alts": [
     "Dennoch",
     "Trotzdem"
    ],
    "explain": "dennoch ist etwas gehobener als trotzdem."
   },
   {
    "type": "gap",
    "text": "Er ist zwar jung, ___ sehr erfahren.",
    "answer": "aber",
    "alts": [
     "aber",
     "jedoch"
    ],
    "explain": "zwar … aber ist das eingespielte Paar."
   },
   {
    "type": "choice",
    "q": "Welcher Satz ist richtig gebaut?",
    "options": [
     "Obwohl er müde war, kam er zur Sitzung.",
     "Obwohl er war müde, kam er zur Sitzung.",
     "Obwohl war er müde, kam er zur Sitzung.",
     "Obwohl er müde war, er kam zur Sitzung."
    ],
    "answer": 0,
    "explain": "Nach obwohl steht das Verb am Ende, danach beginnt der Hauptsatz mit dem Verb."
   },
   {
    "type": "choice",
    "q": "Was passt: „___ des schlechten Wetters fand das Fest statt.“",
    "options": [
     "Trotz",
     "Obwohl",
     "Trotzdem",
     "Dennoch"
    ],
    "answer": 0,
    "explain": "Vor einem Nomen im Genitiv steht die Präposition trotz."
   },
   {
    "type": "choice",
    "q": "Welches Wort leitet einen Nebensatz ein?",
    "options": [
     "obwohl",
     "trotzdem",
     "dennoch",
     "jedoch"
    ],
    "answer": 0,
    "explain": "Nur obwohl ist eine Konjunktion für den Nebensatz."
   },
   {
    "type": "gap",
    "text": "Die Preise steigen, ___ kaufen die Leute weiter.",
    "answer": "dennoch",
    "alts": [
     "dennoch",
     "trotzdem"
    ],
    "explain": "Der Hauptsatz nach dem Komma beginnt mit dem Verbindungswort."
   },
   {
    "type": "gap",
    "text": "___ ich es dreimal erklärt habe, hat er es nicht verstanden.",
    "answer": "Obwohl",
    "alts": [
     "Obwohl"
    ],
    "explain": "obwohl + Verb am Satzende."
   },
   {
    "type": "gap",
    "text": "Sie war krank und ist ___ zur Arbeit gegangen.",
    "answer": "trotzdem",
    "alts": [
     "trotzdem",
     "dennoch"
    ],
    "explain": "trotzdem kann auch mitten im Satz stehen."
   },
   {
    "type": "choice",
    "q": "Welcher Satz sagt dasselbe wie „Obwohl es teuer war, hat sie es gekauft“?",
    "options": [
     "Es war teuer. Trotzdem hat sie es gekauft.",
     "Es war teuer, deshalb hat sie es gekauft.",
     "Es war teuer, weil sie es gekauft hat.",
     "Es war teuer, damit sie es kauft."
    ],
    "answer": 0,
    "explain": "obwohl und trotzdem drücken denselben Gegensatz aus — nur mit anderem Satzbau."
   }
  ]
 },
 {
  "id": "verben-mit-praeposition",
  "title": "Verben mit fester Präposition — warten auf, sich freuen über",
  "level": "B2",
  "emoji": "🔗",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Ich warte ___ den Bus.",
    "answer": "auf",
    "alts": [
     "auf"
    ],
    "explain": "warten auf + Akkusativ."
   },
   {
    "type": "gap",
    "text": "Wir freuen uns ___ das Wochenende.",
    "answer": "auf",
    "alts": [
     "auf"
    ],
    "explain": "sich freuen auf = etwas kommt noch."
   },
   {
    "type": "gap",
    "text": "Ich freue mich ___ dein Geschenk.",
    "answer": "über",
    "alts": [
     "über"
    ],
    "explain": "sich freuen über = es ist schon da."
   },
   {
    "type": "gap",
    "text": "Sie interessiert sich ___ Architektur.",
    "answer": "für",
    "alts": [
     "für"
    ],
    "explain": "sich interessieren für + Akkusativ."
   },
   {
    "type": "gap",
    "text": "Er hat sich ___ die Stelle beworben.",
    "answer": "um",
    "alts": [
     "um"
    ],
    "explain": "sich bewerben um + Akkusativ."
   },
   {
    "type": "gap",
    "text": "Wir müssen ___ dem Chef darüber sprechen.",
    "answer": "mit",
    "alts": [
     "mit"
    ],
    "explain": "sprechen mit + Dativ."
   },
   {
    "type": "gap",
    "text": "Denkst du noch ___ den Termin?",
    "answer": "an",
    "alts": [
     "an"
    ],
    "explain": "denken an + Akkusativ."
   },
   {
    "type": "gap",
    "text": "Das hängt ___ Wetter ab.",
    "answer": "vom",
    "alts": [
     "vom",
     "von dem"
    ],
    "explain": "abhängen von + Dativ."
   },
   {
    "type": "gap",
    "text": "Ich ärgere mich ___ den Lärm.",
    "answer": "über",
    "alts": [
     "über"
    ],
    "explain": "sich ärgern über + Akkusativ."
   },
   {
    "type": "gap",
    "text": "Sie hat sich ___ die Verspätung entschuldigt.",
    "answer": "für",
    "alts": [
     "für"
    ],
    "explain": "sich entschuldigen für + Akkusativ."
   },
   {
    "type": "choice",
    "q": "Wie fragt man nach einer Sache? „Ich warte auf den Bus.“",
    "options": [
     "Worauf wartest du?",
     "Auf was wartest du?",
     "Wofür wartest du?",
     "Woran wartest du?"
    ],
    "answer": 0,
    "explain": "Bei Sachen: wo + r + Präposition. Bei Personen: Auf wen wartest du?"
   },
   {
    "type": "choice",
    "q": "Was ist richtig?",
    "options": [
     "Ich freue mich über deinen Anruf.",
     "Ich freue mich für deinen Anruf.",
     "Ich freue mich an deinen Anruf.",
     "Ich freue mich zu deinem Anruf."
    ],
    "answer": 0,
    "explain": "Der Anruf war schon — deshalb über."
   },
   {
    "type": "choice",
    "q": "„Ich denke ___ dich.“",
    "options": [
     "an",
     "auf",
     "über",
     "für"
    ],
    "answer": 0,
    "explain": "denken an — die Präposition gehört fest zum Verb."
   },
   {
    "type": "gap",
    "text": "Er hat sich ___ das Thema noch nicht entschieden.",
    "answer": "für",
    "alts": [
     "für"
    ],
    "explain": "sich entscheiden für + Akkusativ."
   }
  ]
 },
 {
  "id": "adjektivendungen",
  "title": "Adjektivendungen sicher — mit der, mit ein, ohne Artikel",
  "level": "B2",
  "emoji": "✏️",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Ich hätte gern einen ___ Kaffee. (stark)",
    "answer": "starken",
    "alts": [
     "starken"
    ],
    "explain": "ein + Maskulin Akkusativ: die Endung -en."
   },
   {
    "type": "gap",
    "text": "Der ___ Mantel gefällt mir. (blau)",
    "answer": "blaue",
    "alts": [
     "blaue"
    ],
    "explain": "Nach der steht im Nominativ die Endung -e."
   },
   {
    "type": "gap",
    "text": "Ich suche eine ___ Wohnung. (ruhig)",
    "answer": "ruhige",
    "alts": [
     "ruhige"
    ],
    "explain": "eine + Feminin: die Endung -e."
   },
   {
    "type": "gap",
    "text": "Wir wohnen in einem ___ Haus. (alt)",
    "answer": "alten",
    "alts": [
     "alten"
    ],
    "explain": "Nach einem im Dativ: -en."
   },
   {
    "type": "gap",
    "text": "Das ist ___ Wasser. (kalt)",
    "answer": "kaltes",
    "alts": [
     "kaltes"
    ],
    "explain": "Ohne Artikel trägt das Adjektiv das Signal: -es für Neutrum."
   },
   {
    "type": "gap",
    "text": "Sie trinkt gern ___ Tee. (grün)",
    "answer": "grünen",
    "alts": [
     "grünen"
    ],
    "explain": "Ohne Artikel, Maskulin Akkusativ: -en."
   },
   {
    "type": "gap",
    "text": "Mit ___ Grüßen",
    "answer": "freundlichen",
    "alts": [
     "freundlichen"
    ],
    "explain": "Ohne Artikel im Dativ Plural: -en. Der Briefschluss, den jeder braucht."
   },
   {
    "type": "gap",
    "text": "Die ___ Kollegen sind schon da. (neu)",
    "answer": "neuen",
    "alts": [
     "neuen"
    ],
    "explain": "Nach die im Plural: -en."
   },
   {
    "type": "choice",
    "q": "Was ist richtig?",
    "options": [
     "ein guter Freund",
     "ein gute Freund",
     "ein gutes Freund",
     "ein guten Freund"
    ],
    "answer": 0,
    "explain": "ein trägt keine Endung — also übernimmt das Adjektiv das -er."
   },
   {
    "type": "choice",
    "q": "„Ich habe ___ Zeit.“ (wenig, keine Endung nötig?)",
    "options": [
     "wenig Zeit",
     "weniges Zeit",
     "wenige Zeit",
     "wenigen Zeit"
    ],
    "answer": 0,
    "explain": "wenig bleibt vor unzählbaren Nomen ohne Endung."
   },
   {
    "type": "choice",
    "q": "Welche Endung fehlt: „Er hat einen ___ Tag gehabt.“ (lang)",
    "options": [
     "langen",
     "lange",
     "langer",
     "langes"
    ],
    "answer": 0,
    "explain": "einen + Maskulin Akkusativ: -en."
   },
   {
    "type": "gap",
    "text": "Nach einem ___ Tag schlafe ich gut. (lang)",
    "answer": "langen",
    "alts": [
     "langen"
    ],
    "explain": "Dativ nach einem: -en."
   },
   {
    "type": "gap",
    "text": "Das ist die Wohnung meiner ___ Schwester. (klein)",
    "answer": "kleinen",
    "alts": [
     "kleinen"
    ],
    "explain": "Nach meiner im Genitiv: -en."
   },
   {
    "type": "gap",
    "text": "Wir hatten ___ Wetter. (schön)",
    "answer": "schönes",
    "alts": [
     "schönes"
    ],
    "explain": "Ohne Artikel, Neutrum: -es."
   }
  ]
 },
 {
  "id": "konjunktiv1",
  "title": "Konjunktiv I — indirekte Rede in Bericht und Protokoll",
  "level": "C1",
  "emoji": "🗞️",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Er sagte, er ___ krank.",
    "answer": "sei",
    "alts": [
     "sei"
    ],
    "explain": "Konjunktiv I von sein: sei. Der Ton bleibt neutral — man gibt nur wieder."
   },
   {
    "type": "gap",
    "text": "Sie erklärte, sie ___ den Termin vergessen.",
    "answer": "habe",
    "alts": [
     "habe"
    ],
    "explain": "Konjunktiv I von haben: habe."
   },
   {
    "type": "gap",
    "text": "Der Minister betonte, die Lage ___ sich verbessert.",
    "answer": "habe",
    "alts": [
     "habe"
    ],
    "explain": "Perfekt in der indirekten Rede: habe + Partizip II."
   },
   {
    "type": "gap",
    "text": "Die Zeugin sagte aus, sie ___ nichts gesehen.",
    "answer": "habe",
    "alts": [
     "habe"
    ],
    "explain": "Auch vor Gericht ist das die übliche Form."
   },
   {
    "type": "gap",
    "text": "Er meinte, er ___ morgen wieder da.",
    "answer": "sei",
    "alts": [
     "sei",
     "werde"
    ],
    "explain": "Zukunft: sei oder werde … sein."
   },
   {
    "type": "gap",
    "text": "Sie schrieb, sie ___ sich später melden.",
    "answer": "werde",
    "alts": [
     "werde"
    ],
    "explain": "werde + Infinitiv für das, was noch kommt."
   },
   {
    "type": "gap",
    "text": "Die Sprecherin sagte, die Zahlen ___ falsch.",
    "answer": "seien",
    "alts": [
     "seien"
    ],
    "explain": "Plural: seien."
   },
   {
    "type": "gap",
    "text": "Er behauptet, er ___ nichts davon gewusst.",
    "answer": "habe",
    "alts": [
     "habe"
    ],
    "explain": "behaupten + Konjunktiv I: der Autor distanziert sich."
   },
   {
    "type": "choice",
    "q": "Wozu dient der Konjunktiv I?",
    "options": [
     "Man gibt wieder, was jemand gesagt hat, ohne selbst dafür zu bürgen.",
     "Man drückt einen Wunsch aus.",
     "Man bittet höflich.",
     "Man erzählt eine Vergangenheit."
    ],
    "answer": 0,
    "explain": "Er ist die Form der Distanz — deshalb steht er in Nachrichten und Protokollen."
   },
   {
    "type": "choice",
    "q": "Was macht man, wenn Konjunktiv I wie der Indikativ aussieht?",
    "options": [
     "Man weicht auf Konjunktiv II aus (sie hätten statt sie haben).",
     "Man lässt ihn weg.",
     "Man schreibt dass davor.",
     "Man benutzt das Passiv."
    ],
    "answer": 0,
    "explain": "Bei sie haben = sie haben hilft nur würde/hätte."
   },
   {
    "type": "choice",
    "q": "Welcher Satz ist indirekte Rede?",
    "options": [
     "Er sagte, er komme später.",
     "Er sagte: „Ich komme später.“",
     "Er kommt später.",
     "Komm später!"
    ],
    "answer": 0,
    "explain": "Ohne Anführungszeichen und mit Konjunktiv I."
   },
   {
    "type": "gap",
    "text": "Sie fragte, ob ich Zeit ___.",
    "answer": "hätte",
    "alts": [
     "hätte",
     "habe"
    ],
    "explain": "In der Frage ist Konjunktiv II oft die klarere Form."
   },
   {
    "type": "gap",
    "text": "Der Arzt sagte, ich ___ mich schonen.",
    "answer": "solle",
    "alts": [
     "solle"
    ],
    "explain": "Konjunktiv I von sollen: solle."
   },
   {
    "type": "gap",
    "text": "Er erklärte, das Problem ___ gelöst worden.",
    "answer": "sei",
    "alts": [
     "sei"
    ],
    "explain": "Passiv Perfekt in der indirekten Rede: sei … worden."
   }
  ]
 },
 {
  "id": "partizipialattribut",
  "title": "Das Partizip als Attribut — der gerade eingegangene Antrag",
  "level": "C1",
  "emoji": "📐",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Der gestern ___ Antrag wird heute geprüft. (eingehen)",
    "answer": "eingegangene",
    "alts": [
     "eingegangene"
    ],
    "explain": "Partizip II als Attribut: passiv und abgeschlossen."
   },
   {
    "type": "gap",
    "text": "Die ___ Kinder sollten leise sein. (spielen)",
    "answer": "spielenden",
    "alts": [
     "spielenden"
    ],
    "explain": "Partizip I als Attribut: aktiv und gleichzeitig."
   },
   {
    "type": "gap",
    "text": "Das ___ Problem betrifft alle Abteilungen. (beschreiben)",
    "answer": "beschriebene",
    "alts": [
     "beschriebene"
    ],
    "explain": "Partizip II: es wurde beschrieben."
   },
   {
    "type": "gap",
    "text": "Die ___ Zahlen stimmen nicht. (nennen)",
    "answer": "genannten",
    "alts": [
     "genannten"
    ],
    "explain": "die genannten Zahlen = die Zahlen, die genannt wurden."
   },
   {
    "type": "gap",
    "text": "Der von allen ___ Vorschlag wurde angenommen. (unterstützen)",
    "answer": "unterstützte",
    "alts": [
     "unterstützte"
    ],
    "explain": "Wer handelt, steht mit von — wie im Passiv."
   },
   {
    "type": "gap",
    "text": "Eine ___ Frage blieb offen. (bleiben)",
    "answer": "bleibende",
    "alts": [
     "bleibende"
    ],
    "explain": "Partizip I von bleiben: bleibend."
   },
   {
    "type": "choice",
    "q": "„Der zu prüfende Antrag“ — was heißt das?",
    "options": [
     "Der Antrag, der geprüft werden muss.",
     "Der Antrag, der geprüft wurde.",
     "Der Antrag, der prüft.",
     "Der Antrag, den man geprüft hat."
    ],
    "answer": 0,
    "explain": "zu + Partizip I trägt die Bedeutung müssen oder können im Passiv."
   },
   {
    "type": "choice",
    "q": "Was bedeutet „die einzureichenden Unterlagen“?",
    "options": [
     "Die Unterlagen, die eingereicht werden müssen.",
     "Die Unterlagen, die eingereicht wurden.",
     "Die Unterlagen, die einreichen.",
     "Die Unterlagen ohne Frist."
    ],
    "answer": 0,
    "explain": "Wieder zu + Partizip I: eine Pflicht in einem Wort."
   },
   {
    "type": "choice",
    "q": "Welches Partizip ist aktiv und gleichzeitig?",
    "options": [
     "die lachenden Kinder",
     "die gelachten Kinder",
     "die gelachte Runde",
     "die zu lachenden Kinder"
    ],
    "answer": 0,
    "explain": "Partizip I (-end) heißt: es passiert gerade und sie tun es selbst."
   },
   {
    "type": "gap",
    "text": "Die im letzten Jahr ___ Regel gilt weiter. (beschließen)",
    "answer": "beschlossene",
    "alts": [
     "beschlossene"
    ],
    "explain": "beschließen → beschlossen → die beschlossene Regel."
   },
   {
    "type": "gap",
    "text": "Ein ständig ___ Telefon stört die Arbeit. (klingeln)",
    "answer": "klingelndes",
    "alts": [
     "klingelndes"
    ],
    "explain": "Partizip I, Neutrum ohne Artikel: -es."
   },
   {
    "type": "gap",
    "text": "Die ___ Frist läuft am Montag ab. (setzen)",
    "answer": "gesetzte",
    "alts": [
     "gesetzte"
    ],
    "explain": "Partizip II als Attribut."
   },
   {
    "type": "choice",
    "q": "Wie schreibt man das als Relativsatz? „Der gerade eingetroffene Zug“",
    "options": [
     "Der Zug, der gerade eingetroffen ist.",
     "Der Zug, der gerade eintrifft.",
     "Der Zug, den man eingetroffen hat.",
     "Der Zug, der einzutreffen ist."
    ],
    "answer": 0,
    "explain": "Das Partizip II von eintreffen steht für die abgeschlossene Handlung."
   },
   {
    "type": "gap",
    "text": "Die ___ Stellen werden im Intranet veröffentlicht. (ausschreiben)",
    "answer": "ausgeschriebenen",
    "alts": [
     "ausgeschriebenen"
    ],
    "explain": "ausschreiben → ausgeschrieben, Plural nach die: -en."
   }
  ]
 },
 {
  "id": "nominalstil",
  "title": "Vom Nebensatz zum Nomen — der Amtsstil",
  "level": "C1",
  "emoji": "🏛️",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Nach der ___ des Antrags erhalten Sie Bescheid. (prüfen)",
    "answer": "Prüfung",
    "alts": [
     "Prüfung"
    ],
    "explain": "prüfen → die Prüfung. Der Nominalstil ist die Sprache der Ämter."
   },
   {
    "type": "gap",
    "text": "Bei ___ des Vertrags gilt eine Frist von vier Wochen. (kündigen)",
    "answer": "Kündigung",
    "alts": [
     "Kündigung",
     "der Kündigung"
    ],
    "explain": "kündigen → die Kündigung."
   },
   {
    "type": "gap",
    "text": "Vor ___ bitte die Anleitung lesen. (benutzen)",
    "answer": "Benutzung",
    "alts": [
     "Benutzung",
     "der Benutzung"
    ],
    "explain": "benutzen → die Benutzung."
   },
   {
    "type": "gap",
    "text": "Die ___ der Preise war zu erwarten. (erhöhen)",
    "answer": "Erhöhung",
    "alts": [
     "Erhöhung"
    ],
    "explain": "erhöhen → die Erhöhung."
   },
   {
    "type": "gap",
    "text": "Trotz mehrfacher ___ kam keine Antwort. (nachfragen)",
    "answer": "Nachfrage",
    "alts": [
     "Nachfrage"
    ],
    "explain": "nachfragen → die Nachfrage."
   },
   {
    "type": "choice",
    "q": "„Weil das Wetter schlecht war, fiel das Fest aus.“ Im Nominalstil:",
    "options": [
     "Wegen des schlechten Wetters fiel das Fest aus.",
     "Obwohl des schlechten Wetters fiel das Fest aus.",
     "Weil des schlechten Wetters fiel das Fest aus.",
     "Trotz des schlechten Wetters fiel das Fest aus."
    ],
    "answer": 0,
    "explain": "Der Nebensatz mit weil wird zu wegen + Genitiv."
   },
   {
    "type": "choice",
    "q": "„Nachdem er angekommen war, rief er an.“ Im Nominalstil:",
    "options": [
     "Nach seiner Ankunft rief er an.",
     "Bei seiner Ankunft rief er an.",
     "Vor seiner Ankunft rief er an.",
     "Während seiner Ankunft rief er an."
    ],
    "answer": 0,
    "explain": "nachdem → nach + Nomen."
   },
   {
    "type": "choice",
    "q": "„Wenn Sie unterschreiben, wird der Vertrag gültig.“ Im Nominalstil:",
    "options": [
     "Mit Ihrer Unterschrift wird der Vertrag gültig.",
     "Ohne Ihre Unterschrift wird der Vertrag gültig.",
     "Trotz Ihrer Unterschrift wird der Vertrag gültig.",
     "Vor Ihrer Unterschrift wird der Vertrag gültig."
    ],
    "answer": 0,
    "explain": "wenn → mit oder bei + Nomen."
   },
   {
    "type": "choice",
    "q": "Wo ist der Nominalstil zu Hause?",
    "options": [
     "In Ämtern, Verträgen und Fachtexten.",
     "Im Gespräch unter Freunden.",
     "In Kinderbüchern.",
     "In Liedtexten."
    ],
    "answer": 0,
    "explain": "Er macht Texte kurz und unpersönlich — deshalb liest man ihn dort und spricht ihn kaum."
   },
   {
    "type": "gap",
    "text": "Die ___ der Ergebnisse erfolgt am Freitag. (bekannt geben)",
    "answer": "Bekanntgabe",
    "alts": [
     "Bekanntgabe"
    ],
    "explain": "bekannt geben → die Bekanntgabe."
   },
   {
    "type": "gap",
    "text": "Zur ___ Ihrer Daten brauchen wir Ihre Einwilligung. (verarbeiten)",
    "answer": "Verarbeitung",
    "alts": [
     "Verarbeitung"
    ],
    "explain": "verarbeiten → die Verarbeitung."
   },
   {
    "type": "gap",
    "text": "Bei ___ der Frist verfällt der Anspruch. (versäumen)",
    "answer": "Versäumnis",
    "alts": [
     "Versäumnis",
     "Versäumen"
    ],
    "explain": "versäumen → das Versäumnis."
   },
   {
    "type": "gap",
    "text": "Nach ___ des Kurses erhalten Sie ein Zertifikat. (abschließen)",
    "answer": "Abschluss",
    "alts": [
     "Abschluss",
     "dem Abschluss"
    ],
    "explain": "abschließen → der Abschluss."
   },
   {
    "type": "choice",
    "q": "Was ist der Nachteil des Nominalstils?",
    "options": [
     "Man erfährt oft nicht, wer etwas tut.",
     "Er ist immer falsch.",
     "Er ist zu lang.",
     "Er klingt zu freundlich."
    ],
    "answer": 0,
    "explain": "Die handelnde Person verschwindet — genau wie im Passiv."
   }
  ]
 },
 {
  "id": "passiv-ersatz",
  "title": "Statt Passiv — lässt sich, ist zu, -bar",
  "level": "C1",
  "emoji": "🧩",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Das Problem ___ sich schnell lösen.",
    "answer": "lässt",
    "alts": [
     "lässt"
    ],
    "explain": "sich lassen + Infinitiv = kann gelöst werden."
   },
   {
    "type": "gap",
    "text": "Die Tür ___ sich nicht öffnen.",
    "answer": "lässt",
    "alts": [
     "lässt"
    ],
    "explain": "Die verbreitetste Ersatzform im Alltag."
   },
   {
    "type": "gap",
    "text": "Der Antrag ___ bis Freitag einzureichen.",
    "answer": "ist",
    "alts": [
     "ist"
    ],
    "explain": "sein + zu + Infinitiv = muss eingereicht werden."
   },
   {
    "type": "gap",
    "text": "Diese Regel ___ leicht zu verstehen.",
    "answer": "ist",
    "alts": [
     "ist"
    ],
    "explain": "sein + zu + Infinitiv kann auch kann heißen."
   },
   {
    "type": "gap",
    "text": "Der Fehler ist ___. (beheben + -bar)",
    "answer": "behebbar",
    "alts": [
     "behebbar"
    ],
    "explain": "beheben + -bar = kann behoben werden."
   },
   {
    "type": "choice",
    "q": "„Das kann man reparieren.“ Welche Ersatzform passt?",
    "options": [
     "Das lässt sich reparieren.",
     "Das ist repariert.",
     "Das wird repariert.",
     "Das hat sich repariert."
    ],
    "answer": 0,
    "explain": "sich lassen + Infinitiv trägt die Bedeutung können."
   },
   {
    "type": "choice",
    "q": "„Die Formulare müssen ausgefüllt werden.“ Welche Ersatzform passt?",
    "options": [
     "Die Formulare sind auszufüllen.",
     "Die Formulare lassen sich ausfüllen.",
     "Die Formulare sind ausgefüllt.",
     "Die Formulare werden ausgefüllt."
    ],
    "answer": 0,
    "explain": "sein + zu + Infinitiv trägt hier die Bedeutung müssen."
   },
   {
    "type": "choice",
    "q": "Was heißt „unverzichtbar“?",
    "options": [
     "Man kann darauf nicht verzichten.",
     "Man muss darauf verzichten.",
     "Man hat darauf verzichtet.",
     "Man verzichtet gern."
    ],
    "answer": 0,
    "explain": "un- + Stamm + -bar: die Verneinung der Möglichkeit."
   },
   {
    "type": "choice",
    "q": "Welche Form drückt eine Pflicht aus?",
    "options": [
     "Die Rechnung ist bis Montag zu bezahlen.",
     "Die Rechnung lässt sich bezahlen.",
     "Die Rechnung ist bezahlbar.",
     "Die Rechnung wird bezahlt."
    ],
    "answer": 0,
    "explain": "sein + zu + Infinitiv heißt hier: es muss sein."
   },
   {
    "type": "gap",
    "text": "Der Termin ___ sich leider nicht verschieben.",
    "answer": "lässt",
    "alts": [
     "lässt"
    ],
    "explain": "Verneint heißt es: es geht nicht."
   },
   {
    "type": "gap",
    "text": "Diese Software ist auch ohne Vorkenntnisse ___. (bedienen + -bar)",
    "answer": "bedienbar",
    "alts": [
     "bedienbar"
    ],
    "explain": "bedienen + -bar = kann bedient werden."
   },
   {
    "type": "gap",
    "text": "Die Unterlagen ___ vollständig einzureichen.",
    "answer": "sind",
    "alts": [
     "sind"
    ],
    "explain": "Plural: sind … zu + Infinitiv."
   },
   {
    "type": "choice",
    "q": "Warum benutzt man diese Formen?",
    "options": [
     "Sie sind kürzer als das Passiv mit Modalverb.",
     "Sie sind höflicher.",
     "Sie klingen mündlicher.",
     "Sie sind die einzige Möglichkeit."
    ],
    "answer": 0,
    "explain": "„Das lässt sich machen“ ist kürzer als „Das kann gemacht werden“."
   },
   {
    "type": "gap",
    "text": "Der Text ist gut ___. (lesen + -bar)",
    "answer": "lesbar",
    "alts": [
     "lesbar"
    ],
    "explain": "lesen + -bar = kann gelesen werden."
   }
  ]
 },
 {
  "id": "zweiteilige-konnektoren",
  "title": "Nicht nur … sondern auch — zweiteilige Verbindungen",
  "level": "C1",
  "emoji": "🪢",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Sie spricht nicht nur Deutsch, ___ auch Arabisch und Französisch.",
    "answer": "sondern",
    "alts": [
     "sondern"
    ],
    "explain": "nicht nur … sondern auch: es kommt noch etwas dazu."
   },
   {
    "type": "gap",
    "text": "___ die Miete noch die Nebenkosten sind gestiegen.",
    "answer": "Weder",
    "alts": [
     "Weder"
    ],
    "explain": "weder … noch verneint beide Teile — ohne ein weiteres nicht."
   },
   {
    "type": "gap",
    "text": "Entweder wir fahren heute, ___ wir bleiben ganz zu Hause.",
    "answer": "oder",
    "alts": [
     "oder"
    ],
    "explain": "entweder … oder: genau eine der beiden Möglichkeiten."
   },
   {
    "type": "gap",
    "text": "Je länger die Sitzung dauerte, ___ unruhiger wurden alle.",
    "answer": "desto",
    "alts": [
     "desto",
     "umso"
    ],
    "explain": "je + Komparativ, desto + Komparativ."
   },
   {
    "type": "gap",
    "text": "Sowohl die Kollegen ___ auch die Kundschaft waren zufrieden.",
    "answer": "als",
    "alts": [
     "als"
    ],
    "explain": "sowohl … als auch: beide zusammen."
   },
   {
    "type": "gap",
    "text": "Zwar ist die Wohnung klein, ___ liegt sie sehr zentral.",
    "answer": "aber",
    "alts": [
     "aber",
     "dafür"
    ],
    "explain": "zwar … aber: erst das Zugeständnis, dann der Gegensatz."
   },
   {
    "type": "choice",
    "q": "Welcher Satz ist richtig?",
    "options": [
     "Er hat weder angerufen noch geschrieben.",
     "Er hat weder nicht angerufen noch geschrieben.",
     "Er hat weder angerufen oder geschrieben.",
     "Er hat nicht weder angerufen noch geschrieben."
    ],
    "answer": 0,
    "explain": "weder … noch trägt die Verneinung schon in sich."
   },
   {
    "type": "choice",
    "q": "„Je mehr ich lerne, ___ sicherer werde ich.“",
    "options": [
     "desto",
     "als",
     "so",
     "wie"
    ],
    "answer": 0,
    "explain": "je … desto — beide Teile mit Komparativ."
   },
   {
    "type": "choice",
    "q": "Was ist bei „je … desto“ besonders?",
    "options": [
     "Nach je steht das Verb am Ende, nach desto kommt es direkt.",
     "Beide Teile sind Hauptsätze.",
     "Beide Teile sind Nebensätze.",
     "Das Verb steht immer am Anfang."
    ],
    "answer": 0,
    "explain": "Der je-Teil ist ein Nebensatz, der desto-Teil ein Hauptsatz."
   },
   {
    "type": "gap",
    "text": "Nicht nur die Preise, ___ auch die Erwartungen sind gestiegen.",
    "answer": "sondern",
    "alts": [
     "sondern"
    ],
    "explain": "Das Paar bleibt zusammen, auch wenn dazwischen viel steht."
   },
   {
    "type": "gap",
    "text": "Weder der Chef ___ die Kollegin wusste Bescheid.",
    "answer": "noch",
    "alts": [
     "noch"
    ],
    "explain": "weder … noch."
   },
   {
    "type": "gap",
    "text": "Je früher du anfängst, ___ leichter fällt es dir.",
    "answer": "desto",
    "alts": [
     "desto",
     "umso"
    ],
    "explain": "je … desto."
   },
   {
    "type": "choice",
    "q": "Welche Verbindung schließt beide Möglichkeiten aus?",
    "options": [
     "weder … noch",
     "sowohl … als auch",
     "nicht nur … sondern auch",
     "entweder … oder"
    ],
    "answer": 0,
    "explain": "weder … noch heißt: keins von beiden."
   },
   {
    "type": "gap",
    "text": "Sowohl schriftlich ___ auch mündlich muss die Prüfung bestanden werden.",
    "answer": "als",
    "alts": [
     "als"
    ],
    "explain": "sowohl … als auch."
   }
  ]
 },
 {
  "id": "modalverben-subjektiv",
  "title": "Er soll krank sein — Modalverben, die nichts befehlen",
  "level": "C1",
  "emoji": "🕵️",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Er ___ krank sein — so hat man es mir gesagt.",
    "answer": "soll",
    "alts": [
     "soll"
    ],
    "explain": "sollen subjektiv: andere behaupten es, ich weiß es nicht."
   },
   {
    "type": "gap",
    "text": "Sie ___ das Geld gefunden haben, sagt sie jedenfalls selbst.",
    "answer": "will",
    "alts": [
     "will"
    ],
    "explain": "wollen subjektiv: die Person behauptet es über sich."
   },
   {
    "type": "gap",
    "text": "Das ___ stimmen, ich bin mir aber nicht sicher.",
    "answer": "könnte",
    "alts": [
     "könnte",
     "kann"
    ],
    "explain": "können subjektiv: eine von mehreren Möglichkeiten."
   },
   {
    "type": "gap",
    "text": "Er ___ jetzt zu Hause sein, er ist vor zwei Stunden losgefahren.",
    "answer": "müsste",
    "alts": [
     "müsste",
     "muss"
    ],
    "explain": "müssen subjektiv: sehr wahrscheinlich."
   },
   {
    "type": "gap",
    "text": "Sie ___ das gewusst haben — anders lässt es sich nicht erklären.",
    "answer": "muss",
    "alts": [
     "muss"
    ],
    "explain": "muss + Perfekt-Infinitiv: die einzig logische Erklärung."
   },
   {
    "type": "gap",
    "text": "Das ___ nicht sein Ernst gewesen sein.",
    "answer": "kann",
    "alts": [
     "kann"
    ],
    "explain": "kann nicht: ich halte es für ausgeschlossen."
   },
   {
    "type": "gap",
    "text": "Das Restaurant ___ sehr gut sein, habe ich gehört.",
    "answer": "soll",
    "alts": [
     "soll"
    ],
    "explain": "Die Empfehlung aus zweiter Hand."
   },
   {
    "type": "choice",
    "q": "„Er will nichts gewusst haben.“ Was heißt das?",
    "options": [
     "Er behauptet, nichts gewusst zu haben.",
     "Er möchte nichts wissen.",
     "Er soll nichts wissen.",
     "Er wird nichts wissen."
    ],
    "answer": 0,
    "explain": "wollen subjektiv gibt eine Selbstaussage wieder, an der man zweifeln darf."
   },
   {
    "type": "choice",
    "q": "„Sie soll in Berlin wohnen.“ Wer sagt das?",
    "options": [
     "Andere Leute — ich gebe es nur weiter.",
     "Sie selbst.",
     "Ich, ich bin sicher.",
     "Niemand, es ist ein Befehl."
    ],
    "answer": 0,
    "explain": "sollen subjektiv = Gerücht oder Hörensagen."
   },
   {
    "type": "choice",
    "q": "Welche Form drückt die stärkste Vermutung aus?",
    "options": [
     "Er muss zu Hause sein.",
     "Er könnte zu Hause sein.",
     "Er dürfte zu Hause sein.",
     "Er kann zu Hause sein."
    ],
    "answer": 0,
    "explain": "müssen steht für: es gibt keine andere Erklärung."
   },
   {
    "type": "gap",
    "text": "Sie ___ inzwischen angekommen sein, der Flug war pünktlich.",
    "answer": "dürfte",
    "alts": [
     "dürfte",
     "müsste"
    ],
    "explain": "dürfte: eine vorsichtige, aber begründete Vermutung."
   },
   {
    "type": "gap",
    "text": "Er ___ zwanzig Sprachen sprechen, sagt er.",
    "answer": "will",
    "alts": [
     "will"
    ],
    "explain": "wollen subjektiv — mit einem leisen Zweifel."
   },
   {
    "type": "choice",
    "q": "Woran erkennt man das subjektive Modalverb?",
    "options": [
     "Es sagt nichts über Erlaubnis oder Pflicht, sondern über Sicherheit.",
     "Es steht immer am Satzende.",
     "Es steht immer im Konjunktiv.",
     "Es braucht immer ein Passiv."
    ],
    "answer": 0,
    "explain": "Dieselben Wörter, eine ganz andere Aufgabe: sie bewerten, wie sicher etwas ist."
   },
   {
    "type": "gap",
    "text": "Der Termin ___ verschoben worden sein, ich habe nichts Genaues gehört.",
    "answer": "soll",
    "alts": [
     "soll"
    ],
    "explain": "sollen + Passiv-Perfekt-Infinitiv: Hörensagen über etwas Vergangenes."
   }
  ]
 },
 {
  "id": "modalpartikeln",
  "title": "Modalpartikeln — doch, mal, ja, eben",
  "level": "B1",
  "emoji": "💬",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Komm ___ her, ich zeig dir was.",
    "answer": "mal",
    "alts": [
     "mal"
    ],
    "explain": "mal macht die Aufforderung klein und freundlich. Ohne mal klingt derselbe Satz wie ein Befehl."
   },
   {
    "type": "gap",
    "text": "Das ist ___ nicht so schlimm!",
    "answer": "doch",
    "alts": [
     "doch"
    ],
    "explain": "doch widerspricht einer Sorge, die die andere Person gerade hat."
   },
   {
    "type": "gap",
    "text": "Du weißt ___, wie das hier läuft.",
    "answer": "ja",
    "alts": [
     "ja"
    ],
    "explain": "ja heißt: Das wissen wir beide schon, ich sage nichts Neues."
   },
   {
    "type": "gap",
    "text": "Dann fahren wir ___ mit dem Bus.",
    "answer": "eben",
    "alts": [
     "eben",
     "halt"
    ],
    "explain": "eben und halt sagen: Es ist, wie es ist — da kann man nichts machen."
   },
   {
    "type": "gap",
    "text": "Was machst du ___ heute Abend?",
    "answer": "denn",
    "alts": [
     "denn"
    ],
    "explain": "denn macht die Frage interessiert statt prüfend. Ohne denn klingt sie nach Kontrolle."
   },
   {
    "type": "gap",
    "text": "Er wird ___ im Stau stehen.",
    "answer": "wohl",
    "alts": [
     "wohl"
    ],
    "explain": "wohl drückt eine Vermutung aus, ohne dass man vermuten sagen muss."
   },
   {
    "type": "gap",
    "text": "Setz dich ___ hin, du stehst da schon zehn Minuten.",
    "answer": "doch",
    "alts": [
     "doch",
     "mal"
    ],
    "explain": "doch und mal machen aus der Aufforderung eine Einladung."
   },
   {
    "type": "gap",
    "text": "Das habe ich dir ___ gesagt.",
    "answer": "doch",
    "alts": [
     "doch",
     "ja"
    ],
    "explain": "Hier erinnert doch an etwas, das schon einmal gesagt wurde."
   },
   {
    "type": "gap",
    "text": "Ruf mich ___ an, wenn du da bist.",
    "answer": "einfach",
    "alts": [
     "einfach",
     "mal"
    ],
    "explain": "einfach nimmt der Bitte das Schwere: Es ist kein Aufwand."
   },
   {
    "type": "gap",
    "text": "Das war ___ klar!",
    "answer": "ja",
    "alts": [
     "ja",
     "doch"
    ],
    "explain": "ja betont: Genau das war zu erwarten."
   },
   {
    "type": "choice",
    "q": "Was ändert sich an „Komm her!“ durch „Komm mal her!“?",
    "options": [
     "Es klingt freundlicher und weniger nach Befehl.",
     "Es wird höflicher, weil mal ein Konjunktiv ist.",
     "Es heißt, dass man nur ein einziges Mal kommen soll.",
     "Die Handlung rückt in die Zukunft."
    ],
    "answer": 0,
    "explain": "Modalpartikeln ändern nicht die Information, sondern den Ton."
   },
   {
    "type": "choice",
    "q": "„Das ist ja interessant!“ — was sagt das ja?",
    "options": [
     "Ich merke das gerade erst und bin überrascht.",
     "Ich stimme dir zu.",
     "Ich frage nach.",
     "Ich bin unsicher."
    ],
    "answer": 0,
    "explain": "ja drückt hier Überraschung über etwas Neues aus."
   },
   {
    "type": "choice",
    "q": "Wo stehen Modalpartikeln im Satz?",
    "options": [
     "Im Mittelfeld, nach dem Verb und nach den Pronomen.",
     "Immer auf Position 1.",
     "Immer am Satzende.",
     "Direkt vor dem Subjekt."
    ],
    "answer": 0,
    "explain": "Sie stehen nie auf Position 1 und tragen nie den Satzakzent."
   },
   {
    "type": "choice",
    "q": "Welcher Satz kommt ohne Modalpartikel aus?",
    "options": [
     "Der Zug fährt um 8 Uhr 14 ab.",
     "Komm her.",
     "Das ist nicht schlimm.",
     "Was machst du am Wochenende?"
    ],
    "answer": 0,
    "explain": "Reine Sachinformation braucht keine. Sobald eine Haltung mitschwingt, wirkt der Satz ohne Partikel schroff."
   }
  ]
 },
 {
  "id": "praepositionaladverbien",
  "title": "darauf, worauf, damit — die da-Wörter",
  "level": "B1",
  "emoji": "🔗",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Ich warte auf den Bus. — Ich warte ___.",
    "answer": "darauf",
    "alts": [
     "darauf"
    ],
    "explain": "Sache → da + Präposition. Vor einem Vokal kommt ein r dazwischen: darauf."
   },
   {
    "type": "gap",
    "text": "___ wartest du?",
    "answer": "Worauf",
    "alts": [
     "Worauf"
    ],
    "explain": "Die Frage nach einer Sache: wo + r + auf."
   },
   {
    "type": "gap",
    "text": "Er denkt an den Termin. — Er denkt ___.",
    "answer": "daran",
    "alts": [
     "daran"
    ],
    "explain": "an + Sache → daran."
   },
   {
    "type": "gap",
    "text": "___ denkst du gerade?",
    "answer": "Woran",
    "alts": [
     "Woran"
    ],
    "explain": "Frage nach einer Sache: woran. Bei einer Person hieße es: An wen denkst du?"
   },
   {
    "type": "gap",
    "text": "Sie freut sich über das Geschenk. — Sie freut sich ___.",
    "answer": "darüber",
    "alts": [
     "darüber"
    ],
    "explain": "über + Sache → darüber."
   },
   {
    "type": "gap",
    "text": "Ich bin ___ einverstanden, dass wir später anfangen.",
    "answer": "damit",
    "alts": [
     "damit"
    ],
    "explain": "Das da-Wort kündigt den dass-Satz an: Ich bin damit einverstanden, dass …"
   },
   {
    "type": "gap",
    "text": "___ hast du das aufgemacht? — Mit dem Messer.",
    "answer": "Womit",
    "alts": [
     "Womit"
    ],
    "explain": "mit + Sache in der Frage → womit."
   },
   {
    "type": "gap",
    "text": "Ich habe Angst vor großen Hunden. — Ich habe Angst ___.",
    "answer": "davor",
    "alts": [
     "davor"
    ],
    "explain": "vor + Sache → davor."
   },
   {
    "type": "gap",
    "text": "Wir sprechen über das Projekt. — Wir sprechen ___.",
    "answer": "darüber",
    "alts": [
     "darüber"
    ],
    "explain": "Auch hier eine Sache, also darüber. Über meinen Chef spricht man dagegen: über ihn."
   },
   {
    "type": "choice",
    "q": "Ich warte auf meine Schwester. Wie geht es weiter: Ich warte …",
    "options": [
     "auf sie",
     "darauf",
     "worauf",
     "auf ihr"
    ],
    "answer": 0,
    "explain": "Bei Personen bleibt die Präposition und es folgt ein Pronomen. Nur Sachen bekommen ein da-Wort."
   },
   {
    "type": "choice",
    "q": "Warum heißt es „darauf“ und nicht „daauf“?",
    "options": [
     "Weil vor einem Vokal ein r eingeschoben wird.",
     "Weil auf immer ein r verlangt.",
     "Weil es zwei getrennte Wörter sind.",
     "Weil der Akkusativ ein r braucht."
    ],
    "answer": 0,
    "explain": "da + r + auf. Genauso: woran, darüber, worüber."
   },
   {
    "type": "choice",
    "q": "„Ich freue mich darauf, dich zu sehen.“ Wozu dient darauf?",
    "options": [
     "Es kündigt an, worauf sich die Freude bezieht.",
     "Es ersetzt das Subjekt.",
     "Es macht den Satz höflicher.",
     "Es zeigt die Vergangenheit an."
    ],
    "answer": 0,
    "explain": "Das da-Wort steht als Platzhalter für den Satz, der danach kommt."
   },
   {
    "type": "choice",
    "q": "Welche Form passt: „Ich interessiere mich ___ Geschichte.“",
    "options": [
     "für",
     "dafür",
     "wofür",
     "davon"
    ],
    "answer": 0,
    "explain": "Vor dem Nomen steht die Präposition selbst. Das da-Wort ersetzt das Nomen, es steht nicht davor."
   },
   {
    "type": "choice",
    "q": "Welcher Satz ist richtig?",
    "options": [
     "Ich erinnere mich gut daran.",
     "Ich erinnere mich gut an das.",
     "Ich erinnere mich gut davon.",
     "Ich erinnere mich gut worüber."
    ],
    "answer": 0,
    "explain": "an + das wird im Deutschen zu daran zusammengezogen."
   }
  ]
 },
 {
  "id": "n-deklination",
  "title": "Die n-Deklination — den Studenten, Herrn Meier",
  "level": "B1",
  "emoji": "🧩",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Ich habe mit dem ___ gesprochen. (der Student)",
    "answer": "Studenten",
    "alts": [
     "Studenten"
    ],
    "explain": "Maskuline Wörter auf -ent bekommen in allen Fällen außer dem Nominativ ein -en."
   },
   {
    "type": "gap",
    "text": "Kennst du den ___? (der Nachbar)",
    "answer": "Nachbarn",
    "alts": [
     "Nachbarn"
    ],
    "explain": "der Nachbar → den Nachbarn. Im Akkusativ kommt das -n dazu."
   },
   {
    "type": "gap",
    "text": "Guten Tag, ___ Meier!",
    "answer": "Herr",
    "alts": [
     "Herr"
    ],
    "explain": "Die Anrede steht im Nominativ: Herr Meier."
   },
   {
    "type": "gap",
    "text": "Ich schreibe ___ Meier gleich eine Mail.",
    "answer": "Herrn",
    "alts": [
     "Herrn"
    ],
    "explain": "Nach schreiben folgt der Dativ: Herrn Meier. Herr ist das kürzeste Wort der n-Deklination."
   },
   {
    "type": "gap",
    "text": "Der Chef hat einen neuen ___ eingestellt. (der Kollege)",
    "answer": "Kollegen",
    "alts": [
     "Kollegen"
    ],
    "explain": "der Kollege → den Kollegen."
   },
   {
    "type": "gap",
    "text": "Das ist die Meinung des ___. (der Experte)",
    "answer": "Experten",
    "alts": [
     "Experten"
    ],
    "explain": "Im Genitiv steht hier kein -s, sondern -n: des Experten."
   },
   {
    "type": "gap",
    "text": "Wir helfen dem ___. (der Junge)",
    "answer": "Jungen",
    "alts": [
     "Jungen"
    ],
    "explain": "helfen verlangt den Dativ: dem Jungen."
   },
   {
    "type": "gap",
    "text": "Wie ist Ihr ___, bitte? (der Name)",
    "answer": "Name",
    "alts": [
     "Name"
    ],
    "explain": "Im Nominativ bleibt es Name. Aber: Ich kenne den Namen nicht."
   },
   {
    "type": "gap",
    "text": "Der Hund gehört dem ___ nebenan. (der Mensch)",
    "answer": "Menschen",
    "alts": [
     "Menschen"
    ],
    "explain": "der Mensch → dem Menschen."
   },
   {
    "type": "gap",
    "text": "Sie hat den ___ um Hilfe gebeten. (der Polizist)",
    "answer": "Polizisten",
    "alts": [
     "Polizisten"
    ],
    "explain": "Wörter auf -ist gehören dazu: der Polizist, den Polizisten."
   },
   {
    "type": "choice",
    "q": "Welche Wörter gehören zur n-Deklination?",
    "options": [
     "Maskuline Wörter, oft für Personen: Student, Kollege, Nachbar, Junge.",
     "Alle Wörter, die auf -e enden.",
     "Alle femininen Wörter.",
     "Alle Wörter im Plural."
    ],
    "answer": 0,
    "explain": "Fast immer maskulin, sehr oft Personen. Feminine Wörter machen das nie."
   },
   {
    "type": "choice",
    "q": "„Ich sehe der Student.“ Was ist falsch?",
    "options": [
     "Es muss den Studenten heißen — Akkusativ mit -en.",
     "Es muss die Studentin heißen.",
     "Es muss dem Student heißen.",
     "Der Satz ist richtig."
    ],
    "answer": 0,
    "explain": "Im Akkusativ ändern sich beide Teile: den + Studenten."
   },
   {
    "type": "choice",
    "q": "Wo steht bei „der Herr“ das -n?",
    "options": [
     "In allen Fällen außer im Nominativ Singular.",
     "Nur im Genitiv.",
     "Nur im Plural.",
     "Nie."
    ],
    "answer": 0,
    "explain": "Herr, Herrn, Herrn, Herrn — und im Plural die Herren."
   },
   {
    "type": "choice",
    "q": "Warum heißt es „Sehr geehrter Herr Weber“, aber „Ich schreibe Herrn Weber“?",
    "options": [
     "Die Anrede steht im Nominativ, nach schreiben folgt der Dativ.",
     "Herr wird nur in Briefen dekliniert.",
     "Der Name Weber verlangt den Dativ.",
     "Beides ist gleich richtig."
    ],
    "answer": 0,
    "explain": "Über die Endung entscheidet der Fall, nicht die Höflichkeit."
   }
  ]
 },
 {
  "id": "lassen",
  "title": "lassen — machen lassen, erlauben, möglich sein",
  "level": "B1",
  "emoji": "🤝",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Mein Auto ist kaputt. Ich ___ es reparieren.",
    "answer": "lasse",
    "alts": [
     "lasse"
    ],
    "explain": "lassen + Infinitiv: Ich mache es nicht selbst, ich beauftrage jemanden."
   },
   {
    "type": "gap",
    "text": "Meine Eltern ___ mich abends nicht mehr allein weggehen.",
    "answer": "lassen",
    "alts": [
     "lassen"
    ],
    "explain": "Hier heißt lassen: erlauben — oder eben nicht erlauben."
   },
   {
    "type": "gap",
    "text": "Das Fenster ___ sich nicht öffnen.",
    "answer": "lässt",
    "alts": [
     "lässt"
    ],
    "explain": "sich lassen + Infinitiv heißt: Es ist nicht möglich. Ersatz für: kann nicht geöffnet werden."
   },
   {
    "type": "gap",
    "text": "Ich habe meinen Schlüssel zu Hause ___.",
    "answer": "gelassen",
    "alts": [
     "gelassen"
    ],
    "explain": "Ohne zweites Verb heißt das Partizip gelassen."
   },
   {
    "type": "gap",
    "text": "Ich habe mir die Haare schneiden ___.",
    "answer": "lassen",
    "alts": [
     "lassen"
    ],
    "explain": "Steht ein zweites Verb dabei, heißt es im Perfekt lassen statt gelassen."
   },
   {
    "type": "gap",
    "text": "___ uns morgen eine Stunde früher anfangen!",
    "answer": "Lass",
    "alts": [
     "Lass",
     "Lasst"
    ],
    "explain": "Lass uns … ist der Vorschlag an eine Person, Lasst uns … an mehrere."
   },
   {
    "type": "gap",
    "text": "Der Fehler ___ sich leicht erklären.",
    "answer": "lässt",
    "alts": [
     "lässt"
    ],
    "explain": "sich lassen: Das kann man leicht erklären."
   },
   {
    "type": "gap",
    "text": "Bitte ___ Sie mich kurz ausreden.",
    "answer": "lassen",
    "alts": [
     "lassen"
    ],
    "explain": "Höfliche Bitte um Erlaubnis: Erlauben Sie mir, zu Ende zu sprechen."
   },
   {
    "type": "gap",
    "text": "Wir ___ die Wohnung streichen, bevor wir einziehen.",
    "answer": "lassen",
    "alts": [
     "lassen"
    ],
    "explain": "Auch hier: Wir machen es nicht selbst, wir geben es in Auftrag."
   },
   {
    "type": "gap",
    "text": "Lass das ___!",
    "answer": "sein",
    "alts": [
     "sein"
    ],
    "explain": "Lass das sein heißt: Hör bitte damit auf."
   },
   {
    "type": "choice",
    "q": "„Ich lasse mir die Haare schneiden.“ Wer schneidet?",
    "options": [
     "Jemand anderes, zum Beispiel die Friseurin.",
     "Ich selbst.",
     "Niemand.",
     "Das bleibt offen."
    ],
    "answer": 0,
    "explain": "lassen sagt: Ich veranlasse es, ich tue es nicht selbst."
   },
   {
    "type": "choice",
    "q": "Was bedeutet „Das lässt sich machen“?",
    "options": [
     "Das ist möglich.",
     "Das ist verboten.",
     "Das ist schon fertig.",
     "Das muss man machen."
    ],
    "answer": 0,
    "explain": "sich lassen ersetzt das Passiv mit können: Das kann gemacht werden."
   },
   {
    "type": "choice",
    "q": "Warum heißt es „Ich habe ihn warten lassen“ und nicht „gelassen“?",
    "options": [
     "Weil ein zweites Verb dabeisteht — dann steht lassen im Infinitiv.",
     "Weil lassen unregelmäßig ist.",
     "Weil warten trennbar ist.",
     "Weil der Satz im Passiv steht."
    ],
    "answer": 0,
    "explain": "Das nennt man den Ersatzinfinitiv. Genauso bei sehen und hören."
   },
   {
    "type": "choice",
    "q": "In welchem Satz heißt lassen „erlauben“?",
    "options": [
     "Meine Mutter lässt mich nicht ins Kino gehen.",
     "Ich lasse mein Fahrrad reparieren.",
     "Das Fenster lässt sich nicht schließen.",
     "Ich habe die Tasche im Bus gelassen."
    ],
    "answer": 0,
    "explain": "Hier geht es um Erlaubnis, nicht um einen Auftrag und nicht um Möglichkeit."
   }
  ]
 },
 {
  "id": "gerundivum",
  "title": "Der zu prüfende Antrag — das Partizip mit zu",
  "level": "C1",
  "emoji": "📐",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Der zu ___ Antrag liegt seit Montag beim Sachbearbeiter.",
    "answer": "prüfende",
    "alts": [
     "prüfende"
    ],
    "explain": "zu + Partizip I + Adjektivendung: der Antrag, der geprüft werden muss."
   },
   {
    "type": "gap",
    "text": "Die zu ___ Frist endet am 30. September.",
    "answer": "beachtende",
    "alts": [
     "beachtende"
    ],
    "explain": "die Frist, die beachtet werden muss — in vier Wörtern statt in acht."
   },
   {
    "type": "gap",
    "text": "Der zu ___ Betrag beträgt 249 Euro.",
    "answer": "zahlende",
    "alts": [
     "zahlende"
    ],
    "explain": "der Betrag, der zu zahlen ist. Diese Form steht in fast jeder Rechnung."
   },
   {
    "type": "gap",
    "text": "Die noch zu ___ Unterlagen schicke ich Ihnen morgen.",
    "answer": "ergänzenden",
    "alts": [
     "ergänzenden"
    ],
    "explain": "Plural mit Artikel: die Endung ist -en. noch macht deutlich, dass es aussteht."
   },
   {
    "type": "gap",
    "text": "Das ist eine kaum zu ___ Aufgabe.",
    "answer": "lösende",
    "alts": [
     "lösende"
    ],
    "explain": "kaum zu lösen heißt: fast unmöglich. Mit kaum, nicht oder schwer wird aus dem Müssen ein Können."
   },
   {
    "type": "gap",
    "text": "Die zu treffende Entscheidung ist die Entscheidung, die getroffen werden ___.",
    "answer": "muss",
    "alts": [
     "muss"
    ],
    "explain": "Die Form trägt immer ein müssen oder können in sich — sichtbar wird es erst beim Auflösen."
   },
   {
    "type": "gap",
    "text": "Die zu ___ Kosten übernimmt die Versicherung.",
    "answer": "erstattenden",
    "alts": [
     "erstattenden"
    ],
    "explain": "die Kosten, die erstattet werden müssen. Nach die im Plural steht -en."
   },
   {
    "type": "gap",
    "text": "Vor dem Partizip steht in dieser Form immer die Präposition ___.",
    "answer": "zu",
    "alts": [
     "zu"
    ],
    "explain": "Ohne zu wäre es ein gewöhnliches Partizip: der prüfende Beamte prüft selbst, der zu prüfende Antrag wird geprüft."
   },
   {
    "type": "gap",
    "text": "Ein nicht zu ___ Risiko sollte man ernst nehmen.",
    "answer": "unterschätzendes",
    "alts": [
     "unterschätzendes"
    ],
    "explain": "Neutrum ohne Artikel: die Endung ist -es. ein nicht zu unterschätzendes Risiko."
   },
   {
    "type": "choice",
    "q": "Was bedeutet „die zu prüfenden Anträge“?",
    "options": [
     "Anträge, die geprüft werden müssen",
     "Anträge, die schon geprüft wurden",
     "Anträge, die sich selbst prüfen"
    ],
    "answer": 0,
    "explain": "zu + Partizip I ist immer passiv und immer noch offen — die Arbeit steht bevor."
   },
   {
    "type": "choice",
    "q": "Welche Form ist richtig?",
    "options": [
     "der zu zahlende Betrag",
     "der zu zahlender Betrag",
     "der zu zahlen Betrag"
    ],
    "answer": 0,
    "explain": "Nach dem bestimmten Artikel im Nominativ Maskulinum steht -e: der zu zahlende Betrag."
   },
   {
    "type": "choice",
    "q": "Woraus besteht diese Form?",
    "options": [
     "zu + Partizip I + Adjektivendung",
     "zu + Partizip II",
     "um … zu + Infinitiv"
    ],
    "answer": 0,
    "explain": "prüfen → prüfend → der zu prüfende Antrag. Das Partizip II wäre geprüft und hieße: schon fertig."
   },
   {
    "type": "choice",
    "q": "Welcher Satz sagt dasselbe wie „die zu erledigenden Aufgaben“?",
    "options": [
     "die Aufgaben, die erledigt werden müssen",
     "die Aufgaben, die erledigt worden sind",
     "die Aufgaben, die jemand erledigen wollte"
    ],
    "answer": 0,
    "explain": "Der Unterschied ist die Zeit: zu erledigen steht noch aus, erledigt worden ist vorbei."
   },
   {
    "type": "choice",
    "q": "Wo begegnet dir diese Form am häufigsten?",
    "options": [
     "In Verträgen, Bescheiden und Bedienungsanleitungen",
     "In Gesprächen unter Freunden",
     "In Zeitungsüberschriften"
    ],
    "answer": 0,
    "explain": "Sie spart Platz und klingt sachlich — genau das, was Schriftdeutsch will. Gesprochen sagt man lieber: der Antrag, den wir noch prüfen müssen."
   }
  ]
 },
 {
  "id": "uneingeleitete-nebensaetze",
  "title": "Sollten Sie Fragen haben — Nebensätze ohne wenn",
  "level": "C1",
  "emoji": "🔀",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "___ Sie Fragen haben, melden Sie sich gern.",
    "answer": "Sollten",
    "alts": [
     "Sollten"
    ],
    "explain": "Ohne wenn rückt das Verb ganz nach vorn. Sollten ist die häufigste Form in Briefen."
   },
   {
    "type": "gap",
    "text": "___ ich das gewusst, wäre ich früher gekommen.",
    "answer": "Hätte",
    "alts": [
     "Hätte"
    ],
    "explain": "Wenn ich das gewusst hätte → Hätte ich das gewusst. Das Verb übernimmt den Platz von wenn."
   },
   {
    "type": "gap",
    "text": "Im uneingeleiteten Bedingungssatz steht das Verb an ___ Stelle.",
    "answer": "erster",
    "alts": [
     "erster"
    ],
    "explain": "Sonst steht es im Nebensatz am Ende. Fällt wenn weg, muss etwas den Anfang markieren — das übernimmt das Verb."
   },
   {
    "type": "gap",
    "text": "___ es am Samstag regnen, fällt das Fest aus.",
    "answer": "Sollte",
    "alts": [
     "Sollte"
    ],
    "explain": "sollte steht für einen Fall, mit dem man rechnet, aber nicht sicher. Höflicher und offener als wenn."
   },
   {
    "type": "gap",
    "text": "___ Sie mit der Entscheidung nicht einverstanden, können Sie Widerspruch einlegen.",
    "answer": "Sind",
    "alts": [
     "Sind"
    ],
    "explain": "Auch der Indikativ geht: Sind Sie nicht einverstanden … Das klingt sachlicher als Sollten Sie."
   },
   {
    "type": "gap",
    "text": "Wenn ich Zeit hätte, käme ich mit. — ___ ich Zeit, käme ich mit.",
    "answer": "Hätte",
    "alts": [
     "Hätte"
    ],
    "explain": "Beide Sätze sagen dasselbe. Die Form ohne wenn wirkt gehobener und etwas knapper."
   },
   {
    "type": "gap",
    "text": "___ Sie weitere Unterlagen benötigen, teilen Sie uns das bitte mit.",
    "answer": "Sollten",
    "alts": [
     "Sollten"
    ],
    "explain": "Der Standardsatz am Ende jedes Behördenbriefs — jetzt weißt du, warum er so gebaut ist."
   },
   {
    "type": "gap",
    "text": "___ der Zug Verspätung, rufen Sie bitte kurz an.",
    "answer": "Hat",
    "alts": [
     "Hat"
    ],
    "explain": "Auch mit einem gewöhnlichen Verb möglich: Hat der Zug Verspätung … Nur das Verb wandert nach vorn."
   },
   {
    "type": "gap",
    "text": "Nach dem vorangestellten Bedingungssatz beginnt der Hauptsatz mit dem ___.",
    "answer": "Verb",
    "alts": [
     "Verb"
    ],
    "explain": "Der ganze Nebensatz füllt das Vorfeld. Danach folgt sofort das gebeugte Verb: … , melden Sie sich."
   },
   {
    "type": "choice",
    "q": "Wie lautet „Wenn Sie Fragen haben“ ohne wenn?",
    "options": [
     "Sollten Sie Fragen haben",
     "Sie sollten Fragen haben",
     "Fragen haben sollten Sie"
    ],
    "answer": 0,
    "explain": "Das Verb springt an die erste Stelle, alles andere bleibt in der Reihenfolge stehen."
   },
   {
    "type": "choice",
    "q": "Welcher Satz ist richtig gebaut?",
    "options": [
     "Hätte ich das gewusst, wäre ich gekommen.",
     "Hätte ich das gewusst, ich wäre gekommen.",
     "Ich hätte das gewusst, wäre ich gekommen."
    ],
    "answer": 0,
    "explain": "Der Nebensatz steht im Vorfeld, deshalb beginnt der Hauptsatz mit wäre — nicht mit ich."
   },
   {
    "type": "choice",
    "q": "Warum steht in Briefen „Sollten Sie …“ statt „Wenn Sie …“?",
    "options": [
     "Es klingt höflicher und lässt den Fall offener",
     "Es zeigt, dass der Fall sicher eintritt",
     "Es ist die einzige korrekte Form"
    ],
    "answer": 0,
    "explain": "wenn behauptet, dass der Fall vorkommt. sollten stellt ihn nur in den Raum — das ist zurückhaltender."
   },
   {
    "type": "choice",
    "q": "Was fehlt: „___ Sie Fragen, rufen Sie uns an.“",
    "options": [
     "Haben",
     "Sie haben",
     "Wenn haben"
    ],
    "answer": 0,
    "explain": "Auch ohne sollten geht es: Haben Sie Fragen, rufen Sie an. Verb vorn, fertig."
   },
   {
    "type": "choice",
    "q": "Welcher Hauptsatz passt zu „Sollte das Paket nicht ankommen,“?",
    "options": [
     "melden Sie sich bitte innerhalb von zehn Tagen.",
     "Sie melden sich bitte innerhalb von zehn Tagen.",
     "bitte Sie sich innerhalb von zehn Tagen melden."
    ],
    "answer": 0,
    "explain": "Nach dem Komma steht das gebeugte Verb: melden Sie sich."
   }
  ]
 },
 {
  "id": "korrelate",
  "title": "Ich freue mich darauf, dass — das Wort, das den Satz ankündigt",
  "level": "C1",
  "emoji": "🔗",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Ich freue mich ___, dass du kommst.",
    "answer": "darauf",
    "alts": [
     "darauf"
    ],
    "explain": "sich freuen auf — vor einem dass-Satz wird aus auf das Wort darauf. Es hält der Präposition den Platz frei."
   },
   {
    "type": "gap",
    "text": "Wir rechnen ___, dass die Frist verlängert wird.",
    "answer": "damit",
    "alts": [
     "damit"
    ],
    "explain": "rechnen mit → damit. Die Präposition bleibt dieselbe, nur da- kommt davor."
   },
   {
    "type": "gap",
    "text": "Sie hat sich ___ beschwert, dass niemand geantwortet hat.",
    "answer": "darüber",
    "alts": [
     "darüber"
    ],
    "explain": "sich beschweren über → darüber. Das r steht dazwischen, weil über mit einem Vokal beginnt."
   },
   {
    "type": "gap",
    "text": "Es hängt ___ ab, wie viele Leute kommen.",
    "answer": "davon",
    "alts": [
     "davon"
    ],
    "explain": "abhängen von → davon. Auch vor einer indirekten Frage steht das Korrelat."
   },
   {
    "type": "gap",
    "text": "Ich bin ___ überzeugt, dass es funktioniert.",
    "answer": "davon",
    "alts": [
     "davon"
    ],
    "explain": "überzeugt sein von → davon. Ohne das Korrelat fehlt dem Satz ein Bein."
   },
   {
    "type": "gap",
    "text": "Denk bitte ___, den Müll rauszubringen.",
    "answer": "daran",
    "alts": [
     "daran"
    ],
    "explain": "denken an → daran. Auch vor einem Infinitivsatz mit zu steht es."
   },
   {
    "type": "gap",
    "text": "Zwischen da- und der Präposition steht ein ___, wenn diese mit einem Vokal beginnt.",
    "answer": "r",
    "alts": [
     "r"
    ],
    "explain": "darauf, darüber, daran, darin — aber damit, davon, dazu. Das r ist nur eine Sprechhilfe."
   },
   {
    "type": "gap",
    "text": "Wir warten ___, dass die Bestätigung kommt.",
    "answer": "darauf",
    "alts": [
     "darauf"
    ],
    "explain": "warten auf → darauf. Im gesprochenen Deutsch fällt es oft weg; geschrieben gehört es hin."
   },
   {
    "type": "gap",
    "text": "___ ärgert mich, dass niemand Bescheid gesagt hat.",
    "answer": "Es",
    "alts": [
     "Es"
    ],
    "explain": "Hier hält es den Platz des Subjekts frei, bis der dass-Satz kommt. Ein anderes Korrelat, dieselbe Aufgabe."
   },
   {
    "type": "choice",
    "q": "Welcher Satz ist richtig?",
    "options": [
     "Ich freue mich darauf, dich zu sehen.",
     "Ich freue mich auf, dich zu sehen.",
     "Ich freue mich, dich zu sehen darauf."
    ],
    "answer": 0,
    "explain": "Die nackte Präposition kann nicht allein vor einem Nebensatz stehen — sie braucht das da-."
   },
   {
    "type": "choice",
    "q": "Warum heißt es darauf und nicht daauf?",
    "options": [
     "Weil vor einem Vokal ein r eingeschoben wird",
     "Weil auf immer mit r verbunden wird",
     "Weil es zwei getrennte Wörter sind"
    ],
    "answer": 0,
    "explain": "Dieselbe Regel wie bei worauf und woran. Zwei Vokale nebeneinander vermeidet das Deutsche hier."
   },
   {
    "type": "choice",
    "q": "Wofür steht das da- in „Sie hat sich darüber beschwert, dass …“?",
    "options": [
     "Für den ganzen Nebensatz, der gleich kommt",
     "Für eine Person",
     "Für einen Ort"
    ],
    "answer": 0,
    "explain": "Es zeigt nach vorn: Gleich kommt der Inhalt. Deshalb heißt es Korrelat — es hat einen Partner im Satz."
   },
   {
    "type": "choice",
    "q": "Welches Korrelat gehört zu „sich erinnern“?",
    "options": [
     "daran",
     "darauf",
     "damit"
    ],
    "answer": 0,
    "explain": "sich erinnern an → daran. Die Präposition steht am Verb fest, das Korrelat übernimmt sie."
   },
   {
    "type": "choice",
    "q": "Was ist das es in „Es freut mich, dass du da bist“?",
    "options": [
     "Ein Platzhalter für den dass-Satz",
     "Das Subjekt, das sich freut",
     "Ein Fehler, dort müsste das stehen"
    ],
    "answer": 0,
    "explain": "Der dass-Satz ist das eigentliche Subjekt. Weil er hinten steht, hält es vorn den Platz."
   }
  ]
 }
];

  var da = {};
  g.themes.forEach(function (t) { da[t.id] = 1; });
  NEU.forEach(function (t) { if (!da[t.id]) g.themes.push(t); });
})();
