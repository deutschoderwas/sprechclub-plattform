/* ============================================================
   aussprache-neu.js — Aussprache von A1 bis C1

   Wird NACH uebungen.js geladen und haengt seine Themen an den
   Bereich "Aussprache" an. Vorher lagen dort acht Themen, alle
   auf A2 — fuer den Anfaenger zu frueh, fuer C1 zu wenig.

   Je Thema: 6 Karten zum Nachsprechen, 2 zum Shadowing (hoeren,
   selbst aufnehmen, vergleichen) und 5 Fragen zur Regel.
   Gesprochen ist alles in Julias eigener Stimme.

   Jede Aufnahme wurde vor dem Einbau maschinell abgehoert und mit
   dem Soll-Text verglichen. Die Stimme hat bei Minimalpaaren in
   einem Zug oft zweimal dasselbe Wort gesagt ("koennen, koennen") —
   solche Dateien sind aussortiert und durch Kontrastsaetze ersetzt.
   Gebaut von bau/mach-aussprache.js — nicht von Hand aendern.
   ============================================================ */
(function(){
  var U = window.UEBUNGEN;
  if(!U || !U.skills) return;
  var sk = null;
  for(var i=0;i<U.skills.length;i++){ if(U.skills[i].id==='aussprache'){ sk=U.skills[i]; break; } }
  if(!sk) return;
  if(!sk.themes) sk.themes = [];

  var NEU = [
 {
  "id": "sch-st-sp",
  "title": "Sch, St und Sp am Wortanfang",
  "level": "A1",
  "emoji": "🔊",
  "words": [
   {
    "de": "die Straße",
    "info": "gesprochen: Schtraße",
    "emoji": "🛣️"
   },
   {
    "de": "der Sport",
    "info": "gesprochen: Schport",
    "emoji": "⚽"
   },
   {
    "de": "das Stück",
    "info": "gesprochen: Schtück",
    "emoji": "🍰"
   },
   {
    "de": "spielen",
    "info": "gesprochen: schpielen",
    "emoji": "🎲"
   },
   {
    "de": "der Student",
    "info": "gesprochen: Schtudent",
    "emoji": "🎓"
   },
   {
    "de": "die Sprache",
    "info": "gesprochen: Schprache",
    "emoji": "💬"
   }
  ],
  "exercises": [
   {
    "type": "speak",
    "word": "die Straße",
    "tip": "gesprochen: Schtraße",
    "audioUrl": "ton/aussprache/sch-st-sp-p1.mp3"
   },
   {
    "type": "speak",
    "word": "der Sport",
    "tip": "gesprochen: Schport",
    "audioUrl": "ton/aussprache/sch-st-sp-p2.mp3"
   },
   {
    "type": "speak",
    "word": "das Stück",
    "tip": "gesprochen: Schtück",
    "audioUrl": "ton/aussprache/sch-st-sp-p3.mp3"
   },
   {
    "type": "speak",
    "word": "spielen",
    "tip": "gesprochen: schpielen",
    "audioUrl": "ton/aussprache/sch-st-sp-p4.mp3"
   },
   {
    "type": "speak",
    "word": "der Student",
    "tip": "gesprochen: Schtudent",
    "audioUrl": "ton/aussprache/sch-st-sp-p5.mp3"
   },
   {
    "type": "speak",
    "word": "die Sprache",
    "tip": "gesprochen: Schprache",
    "audioUrl": "ton/aussprache/sch-st-sp-p6.mp3"
   },
   {
    "type": "shadow",
    "level": "A1",
    "text": "Sprechen Sie bitte etwas langsamer.",
    "tip": "Sprechen beginnt mit schp-.",
    "audioUrl": "ton/aussprache/sch-st-sp-s1.mp3"
   },
   {
    "type": "shadow",
    "level": "A1",
    "text": "Die Straßenbahn steht schon an der Haltestelle.",
    "tip": "Straßenbahn und steht: beide mit scht-.",
    "audioUrl": "ton/aussprache/sch-st-sp-s2.mp3"
   },
   {
    "type": "choice",
    "q": "Wie beginnt das Wort „Straße“, wenn man es spricht?",
    "options": [
     "wie schtr-",
     "wie str- mit einem scharfen s",
     "wie schr-",
     "wie sr-"
    ],
    "answer": 0,
    "explain": "St und Sp klingen am Wortanfang wie „scht“ und „schp“ — auch wenn man es nicht so schreibt."
   },
   {
    "type": "choice",
    "q": "Welches Wort beginnt NICHT mit einem sch-Klang?",
    "options": [
     "spielen",
     "das Haus",
     "der Sport",
     "der Student"
    ],
    "answer": 1,
    "explain": "St und Sp klingen am Wortanfang wie „scht“ und „schp“ — auch wenn man es nicht so schreibt."
   },
   {
    "type": "choice",
    "q": "„Ich spreche Deutsch.“ Wie klingt „spreche“?",
    "options": [
     "schpreche",
     "freche",
     "zpreche",
     "spreche wie das s in Sonne"
    ],
    "answer": 0,
    "explain": "St und Sp klingen am Wortanfang wie „scht“ und „schp“ — auch wenn man es nicht so schreibt."
   },
   {
    "type": "choice",
    "q": "Wo gilt die Regel nicht?",
    "options": [
     "am Anfang von „die Stadt“",
     "mitten im Wort, wie in „die Wespe“",
     "am Anfang von „der Stuhl“",
     "am Anfang von „die Sprache“"
    ],
    "answer": 1,
    "explain": "St und Sp klingen am Wortanfang wie „scht“ und „schp“ — auch wenn man es nicht so schreibt."
   },
   {
    "type": "choice",
    "q": "Wie spricht man „das Stück“?",
    "options": [
     "das Sstück mit langem s",
     "das Tück",
     "das Schtück",
     "das Schück"
    ],
    "answer": 2,
    "explain": "St und Sp klingen am Wortanfang wie „scht“ und „schp“ — auch wenn man es nicht so schreibt."
   }
  ]
 },
 {
  "id": "oe-ue",
  "title": "Ö und Ü — die Laute, die es nur hier gibt",
  "level": "A2",
  "emoji": "👄",
  "words": [
   {
    "de": "schön – schon",
    "info": "schön ↔ schon: bei ö sind die Lippen rund und die Zunge vorn",
    "emoji": "✨"
   },
   {
    "de": "können – kennen",
    "info": "können ↔ kennen: nur die Lippen ändern sich",
    "emoji": "🔑"
   },
   {
    "de": "die Küche – die Kirche",
    "info": "Küche ↔ Kirche: ü und i sind zwei ganz verschiedene Orte im Mund",
    "emoji": "🍽️"
   },
   {
    "de": "die Tür – das Tier",
    "info": "Tür ↔ Tier: ü mit runden Lippen, ie mit breiten",
    "emoji": "🚪"
   },
   {
    "de": "die Bühne – die Biene",
    "info": "Bühne ↔ Biene: derselbe Unterschied wie bei Tür und Tier",
    "emoji": "🎭"
   },
   {
    "de": "fühlen – fielen",
    "info": "fühlen ↔ fielen: ü und ie klingen nur ähnlich, wenn man die Lippen vergisst",
    "emoji": "🤲"
   }
  ],
  "exercises": [
   {
    "type": "speak",
    "word": "Das ist schön. — Das ist schon fertig.",
    "tip": "schön ↔ schon: bei ö sind die Lippen rund und die Zunge vorn",
    "audioUrl": "ton/aussprache/oe-ue-p1.mp3"
   },
   {
    "type": "speak",
    "word": "Wir können das. — Wir kennen das.",
    "tip": "können ↔ kennen: nur die Lippen ändern sich",
    "audioUrl": "ton/aussprache/oe-ue-p2.mp3"
   },
   {
    "type": "speak",
    "word": "Ich koche in der Küche. — Ich singe in der Kirche.",
    "tip": "Küche ↔ Kirche: ü und i sind zwei ganz verschiedene Orte im Mund",
    "audioUrl": "ton/aussprache/oe-ue-p3.mp3"
   },
   {
    "type": "speak",
    "word": "Die Tür ist offen. — Das Tier ist müde.",
    "tip": "Tür ↔ Tier: ü mit runden Lippen, ie mit breiten",
    "audioUrl": "ton/aussprache/oe-ue-p4.mp3"
   },
   {
    "type": "speak",
    "word": "Auf der Bühne steht ein Klavier. — Im Garten summt eine Biene.",
    "tip": "Bühne ↔ Biene: derselbe Unterschied wie bei Tür und Tier",
    "audioUrl": "ton/aussprache/oe-ue-p5.mp3"
   },
   {
    "type": "speak",
    "word": "Ich fühle mich gut. — Die Blätter fielen.",
    "tip": "fühlen ↔ fielen: ü und ie klingen nur ähnlich, wenn man die Lippen vergisst",
    "audioUrl": "ton/aussprache/oe-ue-p6.mp3"
   },
   {
    "type": "shadow",
    "level": "A2",
    "text": "Könnten Sie das bitte wiederholen?",
    "tip": "Das ö in „könnten“ — die Lippen rund halten.",
    "audioUrl": "ton/aussprache/oe-ue-s1.mp3"
   },
   {
    "type": "shadow",
    "level": "A2",
    "text": "Ich würde gern früher gehen.",
    "tip": "Zwei ü hintereinander: würde, früher.",
    "audioUrl": "ton/aussprache/oe-ue-s2.mp3"
   },
   {
    "type": "choice",
    "q": "Was machen die Lippen beim ö?",
    "options": [
     "Sie liegen fest zusammen.",
     "Sie bleiben ganz flach.",
     "Sie werden rund wie beim o.",
     "Sie werden breit wie beim i."
    ],
    "answer": 2,
    "explain": "Lippen rund wie bei O oder U — aber die Zunge liegt vorne wie bei E oder I."
   },
   {
    "type": "choice",
    "q": "Wie findet man das ü am leichtesten?",
    "options": [
     "a sagen und den Mund weit öffnen",
     "u sagen und die Zunge nach hinten ziehen",
     "i sagen und dabei die Lippen rund machen",
     "e sagen und dabei lächeln"
    ],
    "answer": 2,
    "explain": "Lippen rund wie bei O oder U — aber die Zunge liegt vorne wie bei E oder I."
   },
   {
    "type": "choice",
    "q": "Welches Paar unterscheidet sich nur durch ü und i?",
    "options": [
     "schön – schon",
     "der Hund – bunt",
     "der Ofen – offen",
     "die Küche – die Kirche"
    ],
    "answer": 3,
    "explain": "Lippen rund wie bei O oder U — aber die Zunge liegt vorne wie bei E oder I."
   },
   {
    "type": "choice",
    "q": "Was ist bei „schon“ anders als bei „schön“?",
    "options": [
     "Bei „schon“ liegt die Zunge hinten.",
     "„schon“ ist immer lauter.",
     "Es gibt keinen Unterschied.",
     "Bei „schon“ sind die Lippen breit."
    ],
    "answer": 0,
    "explain": "Lippen rund wie bei O oder U — aber die Zunge liegt vorne wie bei E oder I."
   },
   {
    "type": "choice",
    "q": "„Ich kann kommen.“ – „Ich könnte kommen.“ Was hört man?",
    "options": [
     "Bei „könnte“ geht die Zunge nach hinten.",
     "Bei „könnte“ sind die Lippen rund.",
     "Der ganze Satz wird lauter.",
     "Man hört keinen Unterschied."
    ],
    "answer": 1,
    "explain": "Lippen rund wie bei O oder U — aber die Zunge liegt vorne wie bei E oder I."
   }
  ]
 },
 {
  "id": "endungen-schwa",
  "title": "Die Endungen -e, -en und -er",
  "level": "A2",
  "emoji": "🎚️",
  "words": [
   {
    "de": "der Lehrer",
    "info": "-er klingt wie ein kurzes, dunkles a",
    "emoji": "👨‍🏫"
   },
   {
    "de": "die Butter",
    "info": "Butter und wieder: beide Male dasselbe dunkle -er",
    "emoji": "🧈"
   },
   {
    "de": "wieder",
    "info": "-er ohne gerolltes r",
    "emoji": "🔁"
   },
   {
    "de": "haben",
    "info": "haben klingt fast wie „habm“, geschlafen wie „geschlafn“",
    "emoji": "🤝"
   },
   {
    "de": "sprechen",
    "info": "das -en wird kurz und leise",
    "emoji": "🗣️"
   },
   {
    "de": "die Blume",
    "info": "-e ganz leise, nicht wie „eh“",
    "emoji": "🌷"
   }
  ],
  "exercises": [
   {
    "type": "speak",
    "word": "der Lehrer",
    "tip": "-er klingt wie ein kurzes, dunkles a",
    "audioUrl": "ton/aussprache/endungen-schwa-p1.mp3"
   },
   {
    "type": "speak",
    "word": "Die Butter steht wieder im Kühlschrank.",
    "tip": "Butter und wieder: beide Male dasselbe dunkle -er",
    "audioUrl": "ton/aussprache/endungen-schwa-p2.mp3"
   },
   {
    "type": "speak",
    "word": "wieder",
    "tip": "-er ohne gerolltes r",
    "audioUrl": "ton/aussprache/endungen-schwa-p3.mp3"
   },
   {
    "type": "speak",
    "word": "Wir haben lange geschlafen.",
    "tip": "haben klingt fast wie „habm“, geschlafen wie „geschlafn“",
    "audioUrl": "ton/aussprache/endungen-schwa-p4.mp3"
   },
   {
    "type": "speak",
    "word": "sprechen",
    "tip": "das -en wird kurz und leise",
    "audioUrl": "ton/aussprache/endungen-schwa-p5.mp3"
   },
   {
    "type": "speak",
    "word": "die Blume",
    "tip": "-e ganz leise, nicht wie „eh“",
    "audioUrl": "ton/aussprache/endungen-schwa-p6.mp3"
   },
   {
    "type": "shadow",
    "level": "A2",
    "text": "Wir haben gestern lange gesprochen.",
    "tip": "haben, gesprochen: die Endungen kurz halten.",
    "audioUrl": "ton/aussprache/endungen-schwa-s1.mp3"
   },
   {
    "type": "shadow",
    "level": "A2",
    "text": "Der Lehrer kommt später wieder.",
    "tip": "Drei Mal -er: Lehrer, später, wieder.",
    "audioUrl": "ton/aussprache/endungen-schwa-s2.mp3"
   },
   {
    "type": "choice",
    "q": "Wie klingt „-er“ am Wortende, zum Beispiel in „Lehrer“?",
    "options": [
     "wie ein langes e",
     "wie ein i",
     "wie ein rollendes r",
     "wie ein kurzes, dunkles a"
    ],
    "answer": 3,
    "explain": "Am Wortende wird es leise: -er klingt fast wie ein kurzes a, -en verschluckt man oft."
   },
   {
    "type": "choice",
    "q": "Wie spricht man „haben“ im Alltag oft?",
    "options": [
     "ha-ben, beide Silben gleich stark",
     "habm",
     "haben mit langem e",
     "hab-en mit kleiner Pause"
    ],
    "answer": 1,
    "explain": "Am Wortende wird es leise: -er klingt fast wie ein kurzes a, -en verschluckt man oft."
   },
   {
    "type": "choice",
    "q": "Welche Silbe ist in „die Blume“ betont?",
    "options": [
     "die erste: Blu-",
     "beide gleich stark",
     "die zweite: -me",
     "keine von beiden"
    ],
    "answer": 0,
    "explain": "Am Wortende wird es leise: -er klingt fast wie ein kurzes a, -en verschluckt man oft."
   },
   {
    "type": "choice",
    "q": "Warum sind die Endungen so leise?",
    "options": [
     "Weil man am Wortende Luft holt.",
     "Das ist nur in Liedern so.",
     "Weil die Wörter dann kürzer werden.",
     "Die Betonung liegt vorn im Wort."
    ],
    "answer": 3,
    "explain": "Am Wortende wird es leise: -er klingt fast wie ein kurzes a, -en verschluckt man oft."
   },
   {
    "type": "choice",
    "q": "Was passiert mit „-en“ nach b, p oder m?",
    "options": [
     "Es fällt ganz weg.",
     "Es wird betont.",
     "Es klingt wie -m, zum Beispiel „habm“.",
     "Es wird zu -ung."
    ],
    "answer": 2,
    "explain": "Am Wortende wird es leise: -er klingt fast wie ein kurzes a, -en verschluckt man oft."
   }
  ]
 },
 {
  "id": "auslaut",
  "title": "Hart am Wortende: Hund, Tag, halb",
  "level": "A2",
  "emoji": "🔚",
  "words": [
   {
    "de": "der Hund – die Hunde",
    "info": "Hunt ↔ Hunde: am Wortende wird d zu t",
    "emoji": "🐕"
   },
   {
    "de": "der Tag – die Tage",
    "info": "Tak ↔ Tage: am Wortende wird g zu k",
    "emoji": "☀️"
   },
   {
    "de": "halb – halbe",
    "info": "halp ↔ halbe: am Wortende wird b zu p",
    "emoji": "🕗"
   },
   {
    "de": "das Rad – die Räder",
    "info": "Rat ↔ Räder: mit Endung ist das weiche d wieder da",
    "emoji": "🚲"
   },
   {
    "de": "der Berg – die Berge",
    "info": "Berk ↔ Berge",
    "emoji": "⛰️"
   },
   {
    "de": "gelb – gelbe",
    "info": "gelp ↔ gelbe",
    "emoji": "💛"
   }
  ],
  "exercises": [
   {
    "type": "speak",
    "word": "Das ist der Hund. — Das sind die Hunde.",
    "tip": "Hunt ↔ Hunde: am Wortende wird d zu t",
    "audioUrl": "ton/aussprache/auslaut-p1.mp3"
   },
   {
    "type": "speak",
    "word": "Guten Tag! — Wir bleiben zwei Tage.",
    "tip": "Tak ↔ Tage: am Wortende wird g zu k",
    "audioUrl": "ton/aussprache/auslaut-p2.mp3"
   },
   {
    "type": "speak",
    "word": "Es ist halb acht. — Ich warte eine halbe Stunde.",
    "tip": "halp ↔ halbe: am Wortende wird b zu p",
    "audioUrl": "ton/aussprache/auslaut-p3.mp3"
   },
   {
    "type": "speak",
    "word": "Das Rad ist kaputt. — Die Räder sind neu.",
    "tip": "Rat ↔ Räder: mit Endung ist das weiche d wieder da",
    "audioUrl": "ton/aussprache/auslaut-p4.mp3"
   },
   {
    "type": "speak",
    "word": "Der Berg ist hoch. — Die Berge sind schön.",
    "tip": "Berk ↔ Berge",
    "audioUrl": "ton/aussprache/auslaut-p5.mp3"
   },
   {
    "type": "speak",
    "word": "Der Stift ist gelb. — Ich nehme die gelbe Karte.",
    "tip": "gelp ↔ gelbe",
    "audioUrl": "ton/aussprache/auslaut-p6.mp3"
   },
   {
    "type": "shadow",
    "level": "A2",
    "text": "Am Abend gehe ich mit dem Hund raus.",
    "tip": "Abend endet auf t, Hund auf t.",
    "audioUrl": "ton/aussprache/auslaut-s1.mp3"
   },
   {
    "type": "shadow",
    "level": "A2",
    "text": "Der Zug fährt jeden Tag um halb acht.",
    "tip": "Zug wie Zuk, Tag wie Tak, halb wie halp.",
    "audioUrl": "ton/aussprache/auslaut-s2.mp3"
   },
   {
    "type": "choice",
    "q": "Wie endet „der Hund“, wenn man es spricht?",
    "options": [
     "mit einem s-Laut",
     "mit einem weichen d-Laut",
     "mit einem n-Laut",
     "mit einem t-Laut"
    ],
    "answer": 3,
    "explain": "Am Wortende wird b zu p, d zu t und g zu k. Kommt eine Endung dazu, ist der weiche Laut wieder da."
   },
   {
    "type": "choice",
    "q": "Und wie endet die Mehrzahl „die Hunde“?",
    "options": [
     "mit einem weichen d-Laut",
     "mit einem k-Laut",
     "ohne Konsonanten",
     "mit einem harten t-Laut"
    ],
    "answer": 0,
    "explain": "Am Wortende wird b zu p, d zu t und g zu k. Kommt eine Endung dazu, ist der weiche Laut wieder da."
   },
   {
    "type": "choice",
    "q": "Welcher Laut steht am Ende von „der Tag“?",
    "options": [
     "gar keiner",
     "ein g wie in „gehen“",
     "ein k",
     "ein ch"
    ],
    "answer": 2,
    "explain": "Am Wortende wird b zu p, d zu t und g zu k. Kommt eine Endung dazu, ist der weiche Laut wieder da."
   },
   {
    "type": "choice",
    "q": "Warum sagt man „halp“, obwohl man „halb“ schreibt?",
    "options": [
     "Weil das Wort so kurz ist.",
     "Am Wortende werden b, d und g hart.",
     "Weil es ein Adjektiv ist.",
     "Das ist ein Fehler."
    ],
    "answer": 1,
    "explain": "Am Wortende wird b zu p, d zu t und g zu k. Kommt eine Endung dazu, ist der weiche Laut wieder da."
   },
   {
    "type": "choice",
    "q": "Wo hört man das weiche b in „halb“ wieder?",
    "options": [
     "nur beim Schreiben",
     "nirgends",
     "in „halb sechs“",
     "in „eine halbe Stunde“"
    ],
    "answer": 3,
    "explain": "Am Wortende wird b zu p, d zu t und g zu k. Kommt eine Endung dazu, ist der weiche Laut wieder da."
   }
  ]
 },
 {
  "id": "satzakzent",
  "title": "Satzakzent — welches Wort ist wichtig?",
  "level": "B1",
  "emoji": "📣",
  "words": [
   {
    "de": "ICH habe das gesagt.",
    "info": "Betonung auf ich: nicht jemand anders",
    "emoji": "🙋"
   },
   {
    "de": "Ich habe das GESAGT.",
    "info": "Betonung auf gesagt: nicht geschrieben",
    "emoji": "💬"
   },
   {
    "de": "Ich habe DAS gesagt.",
    "info": "Betonung auf das: nicht etwas anderes",
    "emoji": "👉"
   },
   {
    "de": "Das war NICHT so gemeint.",
    "info": "Betonung auf nicht — die Verneinung trägt den Ton",
    "emoji": "🚫"
   },
   {
    "de": "Können Sie mir BITTE helfen?",
    "info": "Betonung auf bitte: höflicher Nachdruck",
    "emoji": "🙏"
   },
   {
    "de": "Der Termin ist am MONTAG.",
    "info": "Betonung auf die neue Information am Satzende",
    "emoji": "🗓️"
   }
  ],
  "exercises": [
   {
    "type": "speak",
    "word": "ICH habe das gesagt.",
    "tip": "Betonung auf ich: nicht jemand anders",
    "audioUrl": "ton/aussprache/satzakzent-p1.mp3"
   },
   {
    "type": "speak",
    "word": "Ich habe das GESAGT.",
    "tip": "Betonung auf gesagt: nicht geschrieben",
    "audioUrl": "ton/aussprache/satzakzent-p2.mp3"
   },
   {
    "type": "speak",
    "word": "Ich habe DAS gesagt.",
    "tip": "Betonung auf das: nicht etwas anderes",
    "audioUrl": "ton/aussprache/satzakzent-p3.mp3"
   },
   {
    "type": "speak",
    "word": "Das war NICHT so gemeint.",
    "tip": "Betonung auf nicht — die Verneinung trägt den Ton",
    "audioUrl": "ton/aussprache/satzakzent-p4.mp3"
   },
   {
    "type": "speak",
    "word": "Können Sie mir BITTE helfen?",
    "tip": "Betonung auf bitte: höflicher Nachdruck",
    "audioUrl": "ton/aussprache/satzakzent-p5.mp3"
   },
   {
    "type": "speak",
    "word": "Der Termin ist am MONTAG.",
    "tip": "Betonung auf die neue Information am Satzende",
    "audioUrl": "ton/aussprache/satzakzent-p6.mp3"
   },
   {
    "type": "shadow",
    "level": "B1",
    "text": "Nicht ich habe angerufen, sondern meine Kollegin.",
    "tip": "Der Kontrast trägt den Ton: nicht ich — sondern sie.",
    "audioUrl": "ton/aussprache/satzakzent-s1.mp3"
   },
   {
    "type": "shadow",
    "level": "B1",
    "text": "Das Paket kommt heute, nicht morgen.",
    "tip": "Betone heute und morgen, den Rest leise.",
    "audioUrl": "ton/aussprache/satzakzent-s2.mp3"
   },
   {
    "type": "choice",
    "q": "Wozu dient der Satzakzent?",
    "options": [
     "Er macht den Satz länger.",
     "Er zeigt, was neu oder wichtig ist.",
     "Er ersetzt die Grammatik.",
     "Er zeigt die Zeitform an."
    ],
    "answer": 1,
    "explain": "Im Deutschen betont man das Wort, auf das es ankommt. Derselbe Satz kann so drei Bedeutungen haben."
   },
   {
    "type": "choice",
    "q": "„Ich fahre morgen nach Berlin.“ Der Tag ist wichtig. Was betont man?",
    "options": [
     "Berlin",
     "ich",
     "fahre",
     "morgen"
    ],
    "answer": 3,
    "explain": "Im Deutschen betont man das Wort, auf das es ankommt. Derselbe Satz kann so drei Bedeutungen haben."
   },
   {
    "type": "choice",
    "q": "„Nicht ICH habe angerufen.“ Was sagt die Betonung?",
    "options": [
     "Ich habe stattdessen geschrieben.",
     "Jemand anderes hat angerufen.",
     "Der Anruf kam zu spät.",
     "Es hat gar niemand angerufen."
    ],
    "answer": 1,
    "explain": "Im Deutschen betont man das Wort, auf das es ankommt. Derselbe Satz kann so drei Bedeutungen haben."
   },
   {
    "type": "choice",
    "q": "Wie viele Wörter tragen in einem kurzen Satz meist den Hauptton?",
    "options": [
     "mindestens drei",
     "alle",
     "eines",
     "keines"
    ],
    "answer": 2,
    "explain": "In einem kurzen Satz trägt meist genau ein Wort den Hauptton. Alles andere ordnet sich diesem einen Wort unter."
   },
   {
    "type": "choice",
    "q": "Was passiert mit den unbetonten Wörtern?",
    "options": [
     "Sie werden lauter.",
     "Sie fallen ganz weg.",
     "Sie werden kürzer und leiser.",
     "Sie werden gedehnt."
    ],
    "answer": 2,
    "explain": "Unbetonte Wörter werden kürzer, leiser und undeutlicher — sie verschwinden aber nicht. Genau dieser Unterschied macht den deutschen Rhythmus aus."
   }
  ]
 },
 {
  "id": "cluster",
  "title": "Konsonanten am Stück: Herbst, sprichst, Angst",
  "level": "B2",
  "emoji": "🧗",
  "words": [
   {
    "de": "der Herbst",
    "info": "Herbst: rbst am Ende, ohne Vokal dazwischen",
    "emoji": "🍂"
   },
   {
    "de": "du sprichst",
    "info": "chst in einem Zug",
    "emoji": "🗣️"
   },
   {
    "de": "die Angst",
    "info": "ngst ohne Pause",
    "emoji": "😰"
   },
   {
    "de": "du wächst",
    "info": "chst wie in sprichst",
    "emoji": "📏"
   },
   {
    "de": "das Selbstvertrauen",
    "info": "lbstv — erst langsam, dann schneller",
    "emoji": "💪"
   },
   {
    "de": "pünktlich",
    "info": "pünktlich: nktl sind vier Laute in einer Bewegung",
    "emoji": "⏱️"
   }
  ],
  "exercises": [
   {
    "type": "speak",
    "word": "Im Herbst wird es früh dunkel.",
    "tip": "Herbst: rbst am Ende, ohne Vokal dazwischen",
    "audioUrl": "ton/aussprache/cluster-p1.mp3"
   },
   {
    "type": "speak",
    "word": "du sprichst",
    "tip": "chst in einem Zug",
    "audioUrl": "ton/aussprache/cluster-p2.mp3"
   },
   {
    "type": "speak",
    "word": "die Angst",
    "tip": "ngst ohne Pause",
    "audioUrl": "ton/aussprache/cluster-p3.mp3"
   },
   {
    "type": "speak",
    "word": "du wächst",
    "tip": "chst wie in sprichst",
    "audioUrl": "ton/aussprache/cluster-p4.mp3"
   },
   {
    "type": "speak",
    "word": "das Selbstvertrauen",
    "tip": "lbstv — erst langsam, dann schneller",
    "audioUrl": "ton/aussprache/cluster-p5.mp3"
   },
   {
    "type": "speak",
    "word": "Sei bitte pünktlich um acht.",
    "tip": "pünktlich: nktl sind vier Laute in einer Bewegung",
    "audioUrl": "ton/aussprache/cluster-p6.mp3"
   },
   {
    "type": "shadow",
    "level": "B2",
    "text": "Im Herbst schmeckt der Kürbis am besten.",
    "tip": "Herbst und schmeckt stoßen direkt aneinander.",
    "audioUrl": "ton/aussprache/cluster-s1.mp3"
   },
   {
    "type": "shadow",
    "level": "B2",
    "text": "Du sprichst schon sehr deutlich.",
    "tip": "sprichst schon: zwei sch-Laute hintereinander.",
    "audioUrl": "ton/aussprache/cluster-s2.mp3"
   },
   {
    "type": "choice",
    "q": "Wie spricht man „du sprichst“?",
    "options": [
     "sprichs-t getrennt",
     "chst in einem Zug, ohne Vokal dazwischen",
     "sprich-est mit einem kurzen e",
     "sprich-st mit kleiner Pause"
    ],
    "answer": 1,
    "explain": "Deutsch stellt viele Konsonanten hintereinander. Nicht trennen und keinen Vokal einschieben — in einer Bewegung sprechen."
   },
   {
    "type": "choice",
    "q": "Was soll man bei „Herbst“ NICHT tun?",
    "options": [
     "die erste Silbe betonen",
     "das r schwach sprechen",
     "einen Vokal zwischen b und s schieben",
     "das t am Ende mitsprechen"
    ],
    "answer": 2,
    "explain": "Deutsch stellt viele Konsonanten hintereinander. Nicht trennen und keinen Vokal einschieben — in einer Bewegung sprechen."
   },
   {
    "type": "choice",
    "q": "Wie übt man lange Konsonantenketten am besten?",
    "options": [
     "in Silben zerteilen und Pausen lassen",
     "nur ganz schnell",
     "gar nicht, das kommt von allein",
     "erst langsam, dann immer schneller"
    ],
    "answer": 3,
    "explain": "Deutsch stellt viele Konsonanten hintereinander. Nicht trennen und keinen Vokal einschieben — in einer Bewegung sprechen."
   },
   {
    "type": "choice",
    "q": "Welches Wort hat die längste Konsonantenkette?",
    "options": [
     "spielen",
     "die Blume",
     "das Selbstvertrauen",
     "die Angst"
    ],
    "answer": 2,
    "explain": "Deutsch stellt viele Konsonanten hintereinander. Nicht trennen und keinen Vokal einschieben — in einer Bewegung sprechen."
   },
   {
    "type": "choice",
    "q": "Wie endet „die Angst“?",
    "options": [
     "ngst ohne Pause",
     "ng-st mit kleiner Pause",
     "anst ohne g",
     "ang-est"
    ],
    "answer": 0,
    "explain": "Deutsch stellt viele Konsonanten hintereinander. Nicht trennen und keinen Vokal einschieben — in einer Bewegung sprechen."
   }
  ]
 },
 {
  "id": "knacklaut",
  "title": "Der Knacklaut — der kleine Stopp vor dem Vokal",
  "level": "C1",
  "emoji": "🪓",
  "words": [
   {
    "de": "Er ist in Österreich angekommen.",
    "info": "Fünf Vokalanfänge, fünf kleine Stopps: er, ist, in, Österreich, angekommen",
    "emoji": "🇦🇹"
   },
   {
    "de": "be·obachten",
    "info": "zwei Stopps hintereinander",
    "emoji": "🔭"
   },
   {
    "de": "die Un·ordnung",
    "info": "vor jedem Vokalanfang ein Stopp",
    "emoji": "🧺"
   },
   {
    "de": "der Theater·abend",
    "info": "der Stopp trennt die beiden Teile",
    "emoji": "🎭"
   },
   {
    "de": "über·all",
    "info": "auch mitten im Wort steht ein Stopp",
    "emoji": "🌍"
   },
   {
    "de": "ein einziger Abend",
    "info": "drei Vokalanfänge, drei Stopps",
    "emoji": "🌙"
   }
  ],
  "exercises": [
   {
    "type": "speak",
    "word": "Er ist in Österreich angekommen.",
    "tip": "Vier Vokalanfänge, vier kleine Stopps: er, ist, Österreich, angekommen",
    "audioUrl": "ton/aussprache/knacklaut-p1.mp3"
   },
   {
    "type": "speak",
    "word": "be·obachten",
    "tip": "zwei Stopps hintereinander",
    "audioUrl": "ton/aussprache/knacklaut-p2.mp3"
   },
   {
    "type": "speak",
    "word": "die Un·ordnung",
    "tip": "vor jedem Vokalanfang ein Stopp",
    "audioUrl": "ton/aussprache/knacklaut-p3.mp3"
   },
   {
    "type": "speak",
    "word": "der Theater·abend",
    "tip": "der Stopp trennt die beiden Teile",
    "audioUrl": "ton/aussprache/knacklaut-p4.mp3"
   },
   {
    "type": "speak",
    "word": "über·all",
    "tip": "auch mitten im Wort steht ein Stopp",
    "audioUrl": "ton/aussprache/knacklaut-p5.mp3"
   },
   {
    "type": "speak",
    "word": "ein einziger Abend",
    "tip": "drei Vokalanfänge, drei Stopps",
    "audioUrl": "ton/aussprache/knacklaut-p6.mp3"
   },
   {
    "type": "shadow",
    "level": "C1",
    "text": "Am Abend erinnere ich mich an alles.",
    "tip": "Vier Vokalanfänge — vor jedem ein kleiner Stopp.",
    "audioUrl": "ton/aussprache/knacklaut-s1.mp3"
   },
   {
    "type": "shadow",
    "level": "C1",
    "text": "Er arbeitet ohne Unterbrechung an einem Artikel.",
    "tip": "Ohne die Stopps klingt der Satz wie ein einziges Wort.",
    "audioUrl": "ton/aussprache/knacklaut-s2.mp3"
   },
   {
    "type": "choice",
    "q": "Was ist der Knacklaut?",
    "options": [
     "ein hartes k am Wortende",
     "ein besonders langer Vokal",
     "ein winziger Stopp vor einem Vokal",
     "ein rollendes r"
    ],
    "answer": 2,
    "explain": "Vor einem betonten Vokal setzt das Deutsche neu an — ein winziger Stopp. Er trennt Wörter, die sonst ineinanderlaufen."
   },
   {
    "type": "choice",
    "q": "Was unterscheidet „vereist“ von „verreist“?",
    "options": [
     "Bei „vereist“ steht ein Stopp vor „eist“.",
     "Nur die Schreibweise.",
     "Die Betonung liegt auf einer anderen Silbe.",
     "„verreist“ ist deutlich länger."
    ],
    "answer": 0,
    "explain": "Vor einem betonten Vokal setzt das Deutsche neu an — ein winziger Stopp. Er trennt Wörter, die sonst ineinanderlaufen."
   },
   {
    "type": "choice",
    "q": "Wo steht im Deutschen ein Knacklaut?",
    "options": [
     "nur direkt nach Konsonanten",
     "nur am Satzende",
     "vor einem betonten Vokalanfang",
     "nur in Fragen"
    ],
    "answer": 2,
    "explain": "Vor einem betonten Vokal setzt das Deutsche neu an — ein winziger Stopp. Er trennt Wörter, die sonst ineinanderlaufen."
   },
   {
    "type": "choice",
    "q": "Wie klingt es ohne Knacklaut?",
    "options": [
     "Man spricht deutlicher.",
     "Es klingt genau gleich.",
     "Der Satz wird kürzer.",
     "Die Wörter verschmelzen und klingen fremd."
    ],
    "answer": 3,
    "explain": "Vor einem betonten Vokal setzt das Deutsche neu an — ein winziger Stopp. Er trennt Wörter, die sonst ineinanderlaufen."
   },
   {
    "type": "choice",
    "q": "Wo sitzt in „am Abend“ der Stopp?",
    "options": [
     "mitten in „Abend“",
     "zwischen „am“ und „Abend“",
     "es gibt dort keinen",
     "am Ende von „Abend“"
    ],
    "answer": 1,
    "explain": "Vor einem betonten Vokal setzt das Deutsche neu an — ein winziger Stopp. Er trennt Wörter, die sonst ineinanderlaufen."
   }
  ]
 }
];

  NEU.slice().reverse().forEach(function(t){
    var pos = -1;
    for(var i=0;i<sk.themes.length;i++){ if(sk.themes[i].id===t.id){ pos=i; break; } }
    if(pos>=0) sk.themes.splice(pos,1);
    sk.themes.unshift(t);
  });
})();
