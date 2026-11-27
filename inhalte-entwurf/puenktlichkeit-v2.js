/* Emilia · Pünktlichkeit · Gerüst v2 · 27.11.2026 – gleiches Format wie duzen-muster-v2.js */
stufe('puenktlichkeit','ab',{
 "titel": "Pünktlichkeit",
 "emoji": "⏰",
 "bereich": "Landeskunde DACH",
 "intro": "Wie wichtig ist die Uhrzeit in Deutschland? Und was sagt man, wenn man zu spät kommt?",
 "einstieg": {
  "bild": "bilder/landeskunde/puenktlich-einstieg.webp",
  "frage": "Du hast um 10 Uhr einen Termin beim Arzt. Wann bist du da?",
  "o": ["um 9:55 Uhr", "um 10:15 Uhr", "irgendwann am Vormittag"],
  "r": 0,
  "aufloesung": "In Deutschland ist man zu Terminen pünktlich oder ein paar Minuten früher da. 15 Minuten zu spät ist schon unhöflich."
 },
 "glossar": {
  "Termin": {"e": "📅", "t": "eine feste Zeit, zu der man sich trifft, z. B. beim Arzt oder beim Amt."},
  "sich verspäten": {"e": "🐌", "t": "später kommen als geplant."},
  "Bescheid sagen": {"e": "📱", "t": "jemandem eine Information geben, z. B.: „Ich komme später.“"}
 },
 "dach": [
  "Bei einem <g>Termin</g> (Arzt, Amt, Arbeit) ist man pünktlich – oder fünf Minuten früher.",
  "Kommt man zu spät, muss man vorher <g>Bescheid sagen</g>: anrufen oder schreiben, dass man <g>sich verspäten</g> wird.",
  "Bei Freunden ist es lockerer: 10 Minuten später ist meistens okay.",
  "Bei einer Party zu Hause kommt man oft ein bisschen später – aber nicht eine Stunde.",
  "Busse und Züge haben feste Zeiten. Die Bahn ist aber oft zu spät – darüber ärgern sich viele."
 ],
 "skala": {
  "titel": "⏰ Wie pünktlich muss ich sein?",
  "legende": "Rot: ganz pünktlich &nbsp; Gelb: ein bisschen später okay &nbsp; Grün: locker. Und wie ist das in eurem Land?"
 },
 "situationen": [
  {"o": "Arzt & Amt", "ic": "🏥", "s": 3, "meter": 95, "w": "pünktlich", "t": "Hier ist man pünktlich oder ein paar Minuten früher da."},
  {"o": "Treffen mit Freunden", "ic": "☕", "s": 2, "meter": 50, "w": "5–10 Min. okay", "t": "Ein bisschen später ist okay – aber kurz Bescheid sagen."},
  {"o": "Party zu Hause", "ic": "🎉", "s": 1, "meter": 20, "w": "locker", "t": "Man kommt oft etwas später. Ganz pünktlich ist fast zu früh."}
 ],
 "redemittel": [
  {"funktion": "Bescheid sagen", "farbe": "gold", "items": [
   {"s": "Ich komme <m>ein paar Minuten später</m>.", "bsp": "Sorry, ich komme ein paar Minuten später. Der Bus ist weg."},
   {"s": "Ich bin <m>in zehn Minuten</m> da.", "bsp": "Ich stehe im Stau. Ich bin in zehn Minuten da."},
   {"s": "<m>Ich schaffe es nicht pünktlich</m>.", "bsp": "Tut mir leid, ich schaffe es heute nicht pünktlich."},
   {"s": "<m>Fangt schon mal ohne mich an</m>.", "bsp": "Ich bin noch im Zug. Fangt schon mal ohne mich an!"}
  ]},
  {"funktion": "Sich entschuldigen", "farbe": "tuerkis", "items": [
   {"s": "<m>Entschuldigung, dass ich zu spät bin</m>.", "bsp": "Entschuldigung, dass ich zu spät bin. Die U-Bahn war voll."},
   {"s": "<m>Tut mir leid, der Bus</m> ist nicht gekommen.", "bsp": "Tut mir leid, der Bus ist einfach nicht gekommen."},
   {"s": "<m>Das kommt nicht wieder vor</m>.", "bsp": "Ich war heute zu spät. Das kommt nicht wieder vor."},
   {"s": "<m>Habt ihr lange gewartet</m>?", "bsp": "Oh nein, habt ihr lange gewartet?"}
  ]},
  {"funktion": "Vergleichen", "farbe": "lila", "items": [
   {"s": "<m>Bei uns</m> ist das lockerer.", "bsp": "Bei uns ist das lockerer. Eine halbe Stunde später ist normal."},
   {"s": "<m>In meinem Land</m> kommt man …", "bsp": "In meinem Land kommt man zu einer Party oft eine Stunde später."},
   {"s": "<m>Das finde ich</m> gut / schwierig.", "bsp": "Die deutsche Pünktlichkeit finde ich gut. Man kann gut planen."},
   {"s": "<m>Am Anfang war das</m> neu für mich.", "bsp": "Am Anfang war das neu für mich: Alle waren schon fünf Minuten früher da!"}
  ]}
 ],
 "dialog": {
  "situation": "Lena wartet im Café auf ihren Freund Omar. Es ist 15:10 Uhr. Sie wollten sich um 15 Uhr treffen.",
  "zeilen": [
   {"wer": "B", "t": "(per Nachricht) Hey Lena, <m>ich komme ein paar Minuten später</m>. Der Bus ist weg!"},
   {"wer": "A", "t": "Kein Problem. Ich habe schon einen Kaffee."},
   {"wer": "B", "t": "Super. <m>Ich bin in zehn Minuten da</m>."},
   {"wer": "B", "t": "(im Café) Hallo! <m>Entschuldigung, dass ich zu spät bin</m>. <m>Hast du lange gewartet</m>?"},
   {"wer": "A", "t": "Nein, alles gut. Danke, dass du Bescheid gesagt hast."},
   {"wer": "B", "t": "Na klar. <m>Bei uns</m> in Syrien ist das <m>lockerer</m>. Aber hier schreibe ich immer kurz."}
  ]
 },
 "wassagen": [
  {"situation": "Du hast um 9 Uhr einen Termin beim Amt. Der Bus ist zu spät. Was machst du?", "o": ["Nichts. Ich komme einfach später.", "Ich rufe an und sage Bescheid.", "Ich gehe nach Hause."], "r": 1, "warum": "Wenn man sich verspätet, sagt man vorher Bescheid."},
  {"situation": "Deine Freundin lädt dich zu einer Party um 20 Uhr ein. Wann kommst du?", "o": ["um 19:30 Uhr", "zwischen 20 und 20:30 Uhr", "um 23 Uhr"], "r": 1, "warum": "Bei einer Party zu Hause ist ein bisschen später okay – aber nicht viel später."},
  {"situation": "Du kommst 20 Minuten zu spät zur Arbeit. Was sagst du?", "o": ["„Hallo!“ – und sonst nichts.", "„Entschuldigung, dass ich zu spät bin. Das kommt nicht wieder vor.“", "„Die Uhr ist falsch.“"], "r": 1, "warum": "Bei der Arbeit entschuldigt man sich kurz und nennt vielleicht den Grund."},
  {"situation": "Du triffst einen Freund im Park. Er ist 5 Minuten zu spät. Was sagst du?", "o": ["„Kein Problem!“", "„Das ist sehr unhöflich!“", "„Ich gehe jetzt.“"], "r": 0, "warum": "Bei Freunden sind 5 Minuten meistens kein Problem."},
  {"situation": "Dein Zug hat 30 Minuten Verspätung. Wie finden das viele Deutsche?", "o": ["Normal und egal.", "Ärgerlich – sie schimpfen oft über die Bahn.", "Schön, dann haben sie mehr Zeit."], "r": 1, "warum": "Viele Deutsche ärgern sich über die Bahn, weil sie Pünktlichkeit wichtig finden."}
 ],
 "puzzle": [
  ["Ich komme", "ein paar Minuten später."],
  ["Entschuldigung,", "dass ich zu spät bin."],
  ["Fangt schon mal", "ohne mich an."],
  ["Das kommt", "nicht wieder vor."],
  ["Bei uns", "ist das lockerer."],
  ["Am Anfang war das", "neu für mich."]
 ],
 "luecken": {
  "zeilen": [
   {"wer": "B", "t": "Hallo Lena, ich komme ein paar Minuten ___.", "loes": "später"},
   {"wer": "A", "t": "Kein ___! Ich warte im Café.", "loes": "Problem"},
   {"wer": "B", "t": "Entschuldigung, ___ ich zu spät bin.", "loes": "dass"},
   {"wer": "A", "t": "Alles gut. Danke, dass du Bescheid ___ hast.", "loes": "gesagt"},
   {"wer": "B", "t": "Das kommt nicht ___ vor.", "loes": "wieder"}
  ],
  "woerter": ["später", "Problem", "dass", "gesagt", "wieder"]
 },
 "rollen": [
  {"titel": "Zu spät zum Arzt", "bild": "bilder/landeskunde/puenktlich-rp-arzt.webp",
   "a": "Du hast um 10 Uhr einen Termin. Du rufst um 9:50 Uhr an: Der Bus ist zu spät.",
   "b": "Du arbeitest in der Praxis. Du bist freundlich. Frag: Wann ist er/sie da?",
   "ziel": "Findet eine Lösung: später kommen oder einen neuen Termin machen.",
   "hilfe": ["Ich schaffe es nicht pünktlich.", "Ich bin in 15 Minuten da.", "Geht das noch?", "Dann machen wir einen neuen Termin."],
   "beispiel": [
    {"wer": "A", "t": "Guten Tag, hier ist Jana Kowalski. Ich habe um 10 Uhr einen Termin. Ich schaffe es nicht pünktlich, der Bus ist zu spät."},
    {"wer": "B", "t": "Okay, danke für den Anruf. Wann sind Sie da?"},
    {"wer": "A", "t": "In 15 Minuten. Geht das noch?"},
    {"wer": "B", "t": "Ja, das geht. Bis gleich!"}
   ]},
  {"titel": "Treffen mit Freunden", "bild": "bilder/landeskunde/puenktlich-rp-freunde.webp",
   "a": "Du bist 20 Minuten zu spät. Schreib/sag Bescheid und entschuldige dich.",
   "b": "Du wartest schon. Du bist ein bisschen sauer, aber nett.",
   "ziel": "Am Ende ist alles wieder gut.",
   "hilfe": ["Sorry, ich komme später!", "Hast du lange gewartet?", "Kein Problem, aber …", "Nächstes Mal sag früher Bescheid."],
   "beispiel": [
    {"wer": "A", "t": "Sorry, sorry! Hast du lange gewartet?"},
    {"wer": "B", "t": "Zwanzig Minuten. Nächstes Mal sag bitte früher Bescheid."},
    {"wer": "A", "t": "Du hast recht. Das kommt nicht wieder vor. Ich bezahle den Kaffee!"},
    {"wer": "B", "t": "Okay, dann ist alles gut."}
   ]},
  {"titel": "Die Einladung zum Essen", "bild": "bilder/landeskunde/puenktlich-rp-essen.webp",
   "a": "Du lädst Freunde um 19 Uhr zum Essen ein. Erkläre: Wann sollen sie kommen?",
   "b": "Du bist neu in Deutschland. Frag: Muss ich ganz pünktlich sein?",
   "ziel": "Klärt: Wann ist zu früh, wann zu spät?",
   "hilfe": ["Muss ich ganz pünktlich sein?", "Komm so um sieben.", "Zehn Minuten später ist okay.", "Bei uns ist das lockerer."],
   "beispiel": [
    {"wer": "B", "t": "Muss ich um 19 Uhr ganz pünktlich sein?"},
    {"wer": "A", "t": "Komm so um sieben. Zehn Minuten später ist auch okay – das Essen ist dann fertig."},
    {"wer": "B", "t": "Gut zu wissen. Bei uns ist das lockerer."}
   ]},
  {"titel": "Zu spät zum Kurs", "bild": "bilder/landeskunde/puenktlich-rp-kurs.webp",
   "a": "Du kommst 15 Minuten zu spät in den Deutschkurs. Entschuldige dich und erkläre den Grund.",
   "b": "Du bist die Lehrerin. Du bist freundlich, aber du erklärst die Regel.",
   "ziel": "Sprecht über die Regel im Kurs.",
   "hilfe": ["Entschuldigung, dass ich zu spät bin.", "Die U-Bahn …", "Bitte sag kurz Bescheid.", "Das kommt nicht wieder vor."],
   "beispiel": [
    {"wer": "A", "t": "Entschuldigung, dass ich zu spät bin. Die U-Bahn hatte eine Störung."},
    {"wer": "B", "t": "Kein Problem. Aber schreib mir bitte kurz eine Nachricht, wenn das passiert."},
    {"wer": "A", "t": "Mache ich. Das kommt nicht wieder vor."}
   ]}
 ],
 "fragen": [
  {"q": "Bist du ein pünktlicher Mensch?", "folge": ["Wann warst du das letzte Mal zu spät?", "Was war der Grund?"], "antw": ["Ja, ich bin meistens fünf Minuten früher da.", "Ehrlich gesagt bin ich oft ein bisschen zu spät.", "Das kommt darauf an: Bei der Arbeit ja, bei Freunden nicht."]},
  {"q": "Wie ist Pünktlichkeit in deinem Land?", "folge": ["Bei der Arbeit genauso wie bei Freunden?", "Wie spät kommt man zu einer Party?"], "antw": ["Bei uns ist das lockerer.", "In meinem Land kommt man zu einer Party eine Stunde später.", "Bei uns ist es wie in Deutschland."]},
  {"q": "Was machst du, wenn jemand zu spät kommt?", "folge": ["Wie lange wartest du?", "Wirst du sauer?"], "antw": ["Ich warte zehn Minuten, dann schreibe ich.", "Ich lese etwas auf dem Handy.", "Wenn er nicht Bescheid sagt, werde ich sauer."]}
 ],
 "challenge": [
  {"frage": "Erzähl: Wann warst du einmal richtig zu spät?", "hilfe": ["der Bus", "verschlafen", "Bescheid sagen", "entschuldigen"]},
  {"frage": "Erkläre einem Freund aus deinem Land: Wie pünktlich muss man in Deutschland sein?", "hilfe": ["Termin", "Arzt", "Party", "Freunde"]},
  {"frage": "Was ist für dich schlimmer: zu früh oder zu spät?", "hilfe": ["warten", "unhöflich", "Stress", "planen"]}
 ],
 "quiz": [
  {"q": "Du hast einen Termin beim Amt um 8 Uhr. Wann bist du da?", "o": ["um 7:55 Uhr", "um 8:20 Uhr", "um 9 Uhr"], "r": 0, "anschluss": "Wann warst du das letzte Mal bei einem Amt?"},
  {"q": "Was sagt man, wenn man später kommt?", "o": ["„Ich komme ein paar Minuten später.“", "„Ich bin pünktlich.“", "„Ich warte auf dich.“"], "r": 0, "anschluss": "Wem hast du zuletzt so eine Nachricht geschrieben?"},
  {"q": "Was bedeutet „Bescheid sagen“?", "o": ["jemandem eine Information geben", "jemandem etwas schenken", "laut schreien"], "r": 0, "anschluss": "Wem sagst du Bescheid, wenn du später nach Hause kommst?"},
  {"q": "Wie spät darf man bei Freunden ungefähr kommen?", "o": ["5–10 Minuten", "2 Stunden", "gar nicht – immer 10 Minuten früher"], "r": 0, "anschluss": "Wie lange wartest du auf Freunde?"},
  {"q": "Worüber ärgern sich viele Deutsche?", "o": ["über Verspätungen der Bahn", "über pünktliche Busse", "über frühe Termine beim Arzt"], "r": 0, "anschluss": "Wie pünktlich sind Busse und Züge in deinem Land?"}
 ],
 "merk": "Pünktlich sein ist in Deutschland wichtig. Und wenn man sich verspätet: kurz Bescheid sagen!",
 "tipp": "Eine kurze Nachricht wie „Ich komme 10 Minuten später, sorry!“ macht fast alles wieder gut.",
 "simulator": {
  "intro": "Ihr seid neu in Deutschland. Heute ist ein voller Tag. Diskutiert und entscheidet zusammen!",
  "start": "s1",
  "szenen": {
   "s1": {"bild": "bilder/landeskunde/puenktlich-sim-bus.webp", "text": "8:40 Uhr. Ihr habt um 9 Uhr einen Termin beim Bürgeramt. Der Bus kommt nicht.", "optionen": [
    {"t": "Ihr ruft beim Amt an und sagt Bescheid.", "folge": "Die Frau am Telefon sagt: „Danke! Kommen Sie, so schnell es geht.“", "punkte": 3, "next": "s2"},
    {"t": "Ihr wartet einfach und sagt nichts.", "folge": "Ihr kommt um 9:25 Uhr. Euer Termin ist weg.", "punkte": 0, "next": "s2"},
    {"t": "Ihr nehmt ein Taxi – teuer, aber pünktlich.", "folge": "Ihr seid um 8:58 Uhr da. Pünktlich, aber 18 Euro weniger im Portemonnaie.", "punkte": 2, "next": "s2"}]},
   "s2": {"bild": "bilder/landeskunde/puenktlich-sim-cafe.webp", "text": "15 Uhr. Ihr trefft eine neue Freundin im Café. Ihr seid um 14:50 Uhr da. Sie kommt um 15:07 Uhr.", "optionen": [
    {"t": "„Kein Problem!“", "folge": "Sie lächelt. Sieben Minuten sind bei Freunden ganz normal.", "punkte": 3, "next": "s3"},
    {"t": "„Du bist zu spät!“", "folge": "Sie schaut überrascht. Das war ein bisschen zu streng.", "punkte": 0, "next": "s3"},
    {"t": "Ihr geht um 15:05 Uhr nach Hause.", "folge": "Sie schreibt: „Wo seid ihr?“ – schade!", "punkte": 0, "next": "s3"}]},
   "s3": {"bild": "bilder/landeskunde/puenktlich-sim-party.webp", "text": "Am Abend: Geburtstagsparty bei einem Kollegen. Auf der Einladung steht „ab 19 Uhr“.", "optionen": [
    {"t": "Ihr kommt um 18:45 Uhr.", "folge": "Der Kollege ist noch im Bad. Etwas peinlich!", "punkte": 0, "next": "s4"},
    {"t": "Ihr kommt um 19:20 Uhr.", "folge": "Perfekt. Die ersten Gäste sind da, es gibt schon Getränke.", "punkte": 3, "next": "s4"},
    {"t": "Ihr kommt um 22 Uhr.", "folge": "Das Essen ist schon weg. Aber die Stimmung ist gut.", "punkte": 1, "next": "s4"}]},
   "s4": {"bild": "bilder/landeskunde/puenktlich-sim-arbeit.webp", "text": "Nächster Morgen. Ihr habt verschlafen! Die Arbeit beginnt in 10 Minuten.", "optionen": [
    {"t": "Ihr schreibt dem Chef: „Ich komme 20 Minuten später, tut mir leid!“", "folge": "Der Chef antwortet: „Danke für die Info.“ Alles gut.", "punkte": 3, "next": "ende"},
    {"t": "Ihr sagt: „Ich bin krank.“", "folge": "Eine Lüge … und morgen müsst ihr erklären, warum es euch wieder gut geht.", "punkte": 0, "next": "ende"},
    {"t": "Ihr kommt einfach später und sagt nichts.", "folge": "Die Kollegen haben sich Sorgen gemacht.", "punkte": 0, "next": "ende"}]}
  },
  "ende": [
   {"ab": 10, "text": "Super! Ihr wisst genau, wann man pünktlich sein muss – und wie man Bescheid sagt."},
   {"ab": 5, "text": "Gar nicht schlecht! Aber denkt dran: Termin = pünktlich, Party = etwas später."},
   {"ab": 0, "text": "Oje, das war ein schwieriger Tag. Lest noch einmal die Tipps – nächstes Mal klappt’s!"}
  ]
 }
});

stufe('puenktlichkeit','bb',{
 "titel": "Pünktlichkeit",
 "emoji": "⏰",
 "bereich": "Landeskunde DACH",
 "intro": "Fünf Minuten vor der Zeit … Wie pünktlich ist man im Beruf, in der Uni und im Alltag – und was, wenn die Bahn nicht mitspielt?",
 "einstieg": {
  "bild": "bilder/landeskunde/puenktlich-einstieg.webp",
  "frage": "Ein deutsches Sprichwort sagt: „Fünf Minuten vor der Zeit ist die …“",
  "o": ["deutsche Pünktlichkeit", "wahre Höflichkeit", "beste Gelegenheit"],
  "r": 0,
  "aufloesung": "„Fünf Minuten vor der Zeit ist die deutsche Pünktlichkeit.“ Viele kommen lieber etwas früher als zu spät – vor allem im Beruf."
 },
 "glossar": {
  "das akademische Viertel": {"e": "🎓", "t": "an der Uni beginnt eine Veranstaltung oft 15 Minuten später als angegeben, z. B. „10 Uhr c. t.“ = 10:15 Uhr."},
  "Verspätung": {"e": "🚆", "t": "die Zeit, die jemand oder etwas zu spät ist."},
  "Gleitzeit": {"e": "🕘", "t": "man kann selbst entscheiden, wann man mit der Arbeit anfängt, z. B. zwischen 7 und 10 Uhr."}
 },
 "dach": [
  "Im Beruf gilt: Zu Meetings und Vorstellungsgesprächen kommt man pünktlich – lieber fünf Minuten früher.",
  "Viele Firmen haben <g>Gleitzeit</g>. Dann ist der Arbeitsbeginn flexibel, aber Meetings sind trotzdem pünktlich.",
  "An der Uni gibt es <g>das akademische Viertel</g>: „c. t.“ heißt 15 Minuten später, „s. t.“ heißt ganz pünktlich.",
  "Die Deutsche Bahn hat oft <g>Verspätung</g>. In der Schweiz sind die Züge viel pünktlicher – darauf ist man dort stolz.",
  "In Österreich ist man im Alltag oft etwas entspannter als in Deutschland – im Beruf aber genauso pünktlich."
 ],
 "skala": {
  "titel": "⏰ Wie pünktlich muss ich sein?",
  "legende": "Rot: auf die Minute &nbsp; Gelb: ein bisschen Spielraum &nbsp; Grün: locker. Und wie ist das in eurem Land?"
 },
 "situationen": [
  {"o": "Vorstellungsgespräch", "ic": "💼", "s": 3, "meter": 98, "w": "5–10 Min. früher", "t": "Zu spät kommen ist hier fast ein K.-o.-Kriterium."},
  {"o": "Vorlesung (c. t.)", "ic": "🎓", "s": 2, "meter": 55, "w": "akademisches Viertel", "t": "„10 Uhr c. t.“ – es geht um 10:15 Uhr los."},
  {"o": "Grillen im Park", "ic": "🌭", "s": 1, "meter": 15, "w": "ganz locker", "t": "„So ab sechs“ heißt: irgendwann am Abend."}
 ],
 "redemittel": [
  {"funktion": "Eine Verspätung ankündigen", "farbe": "gold", "items": [
   {"s": "<m>Ich verspäte mich leider</m> um etwa zehn Minuten.", "bsp": "Ich verspäte mich leider um etwa zehn Minuten – mein Zug steht."},
   {"s": "<m>Mein Zug hat Verspätung</m>.", "bsp": "Mein Zug hat 20 Minuten Verspätung. Ich melde mich, wenn ich da bin."},
   {"s": "<m>Wäre es möglich, dass wir</m> später anfangen?", "bsp": "Wäre es möglich, dass wir das Meeting um 9:15 Uhr anfangen?"},
   {"s": "<m>Ich gebe Bescheid, sobald</m> ich da bin.", "bsp": "Ich gebe Bescheid, sobald ich am Bahnhof bin."}
  ]},
  {"funktion": "Sich entschuldigen und erklären", "farbe": "tuerkis", "items": [
   {"s": "<m>Entschuldigen Sie bitte die Verspätung</m>.", "bsp": "Entschuldigen Sie bitte die Verspätung. Es gab einen Unfall auf der Autobahn."},
   {"s": "<m>Es gab ein Problem mit</m> der S-Bahn.", "bsp": "Es gab ein Problem mit der S-Bahn, sie ist ausgefallen."},
   {"s": "<m>Ich hätte früher losfahren sollen</m>.", "bsp": "Das ist meine Schuld – ich hätte früher losfahren sollen."},
   {"s": "<m>Danke für Ihr Verständnis</m>.", "bsp": "Danke für Ihr Verständnis. Das nächste Mal plane ich mehr Zeit ein."}
  ]},
  {"funktion": "Reagieren", "farbe": "rot", "items": [
   {"s": "<m>Kein Problem, das kann passieren</m>.", "bsp": "Kein Problem, das kann passieren. Wir haben gerade erst angefangen."},
   {"s": "<m>Danke, dass du Bescheid gesagt hast</m>.", "bsp": "Danke, dass du Bescheid gesagt hast. Dann warten wir noch."},
   {"s": "<m>Das ist jetzt schon das dritte Mal</m>.", "bsp": "Ehrlich gesagt: Das ist jetzt schon das dritte Mal diese Woche."},
   {"s": "<m>Es wäre schön, wenn</m> du früher schreibst.", "bsp": "Es wäre schön, wenn du nächstes Mal früher schreibst."}
  ]},
  {"funktion": "Vergleichen", "farbe": "lila", "items": [
   {"s": "<m>Bei uns nimmt man das nicht so genau</m>.", "bsp": "Bei uns nimmt man das mit der Uhrzeit nicht so genau."},
   {"s": "<m>Im Vergleich zu</m> Deutschland …", "bsp": "Im Vergleich zu Deutschland sind bei uns die Busse pünktlicher!"},
   {"s": "<m>Daran musste ich mich erst gewöhnen</m>.", "bsp": "An die pünktlichen Meetings musste ich mich erst gewöhnen."},
   {"s": "<m>Ein Klischee ist</m>, dass …", "bsp": "Ein Klischee ist, dass alle Deutschen pünktlich sind – die Bahn zeigt das Gegenteil."}
  ]}
 ],
 "dialog": {
  "situation": "Herr Okafor hat um 9 Uhr ein Vorstellungsgespräch. Um 8:40 Uhr steht seine S-Bahn.",
  "zeilen": [
   {"wer": "A", "t": "(am Telefon) Guten Morgen, Frau Weber, hier spricht Daniel Okafor. <m>Ich verspäte mich leider</m> um etwa 15 Minuten. <m>Es gab ein Problem mit</m> der S-Bahn."},
   {"wer": "B", "t": "Oh, danke für den Anruf, Herr Okafor. <m>Das kann passieren</m>."},
   {"wer": "A", "t": "<m>Wäre es möglich, dass wir</m> um 9:15 Uhr anfangen?"},
   {"wer": "B", "t": "Ja, das passt. Ich sage den Kollegen Bescheid."},
   {"wer": "A", "t": "Vielen Dank. <m>Ich gebe Bescheid, sobald</m> ich im Gebäude bin."},
   {"wer": "A", "t": "(später, im Büro) <m>Entschuldigen Sie bitte die Verspätung</m>. <m>Ich hätte früher losfahren sollen</m>."},
   {"wer": "B", "t": "Alles gut. Sie haben ja angerufen – das zeigt uns, dass Sie zuverlässig sind."}
  ]
 },
 "wassagen": [
  {"situation": "Auf der Uni-Webseite steht: „Vorlesung 14 Uhr c. t.“ Wann beginnt sie?", "o": ["um 13:45 Uhr", "um 14:15 Uhr", "um 14 Uhr ganz genau"], "r": 1, "warum": "„c. t.“ = mit dem akademischen Viertel, also 15 Minuten später."},
  {"situation": "Dein Vorstellungsgespräch ist um 10 Uhr. Wann bist du da?", "o": ["um 9:50 Uhr", "um 10:05 Uhr", "um 10:15 Uhr"], "r": 0, "warum": "Beim Vorstellungsgespräch kommt man ein paar Minuten früher."},
  {"situation": "Deine Firma hat Gleitzeit. Das Team-Meeting ist um 9:30 Uhr. Du kommst um 9:40 Uhr.", "o": ["Kein Problem – Gleitzeit!", "Problem: Meetings sind trotzdem pünktlich.", "Egal, Meetings sind nicht wichtig."], "r": 1, "warum": "Gleitzeit gilt für den Arbeitsbeginn, nicht für feste Termine."},
  {"situation": "Ein Kollege kommt zum dritten Mal zu spät ins Meeting. Was sagst du?", "o": ["„Du bist immer zu spät, das ist unmöglich!“", "„Es wäre schön, wenn du nächstes Mal pünktlich bist – wir warten sonst alle.“", "Nichts, ich schaue nur böse."], "r": 1, "warum": "Man sagt es klar, aber höflich – mit einem Grund."},
  {"situation": "Ein Freund aus der Schweiz sagt: „Bei uns kommt der Zug auf die Minute.“ Was antwortest du?", "o": ["„Im Vergleich zur Schweiz hat die Deutsche Bahn oft Verspätung.“", "„Bei uns auch, immer.“", "„Züge gibt es nicht.“"], "r": 0, "warum": "Die Schweizer Bahn ist bekannt für ihre Pünktlichkeit – die Deutsche Bahn eher nicht."}
 ],
 "puzzle": [
  ["Ich verspäte mich leider", "um etwa zehn Minuten."],
  ["Wäre es möglich, dass wir", "später anfangen?"],
  ["Ich gebe Bescheid,", "sobald ich da bin."],
  ["Ich hätte früher", "losfahren sollen."],
  ["Danke, dass du", "Bescheid gesagt hast."],
  ["Daran musste ich", "mich erst gewöhnen."]
 ],
 "luecken": {
  "zeilen": [
   {"wer": "A", "t": "Guten Morgen, ich ___ mich leider um zehn Minuten.", "loes": "verspäte"},
   {"wer": "A", "t": "Mein Zug hat ___.", "loes": "Verspätung"},
   {"wer": "B", "t": "Kein Problem, das kann ___.", "loes": "passieren"},
   {"wer": "A", "t": "Ich gebe Bescheid, ___ ich da bin.", "loes": "sobald"},
   {"wer": "A", "t": "Danke für Ihr ___.", "loes": "Verständnis"}
  ],
  "woerter": ["verspäte", "Verspätung", "passieren", "sobald", "Verständnis"]
 },
 "rollen": [
  {"titel": "Das Vorstellungsgespräch", "bild": "bilder/landeskunde/puenktlich-rp-bewerbung.webp",
   "a": "Du hast um 10 Uhr ein Vorstellungsgespräch. Dein Zug steht. Ruf an.",
   "b": "Du arbeitest in der Personalabteilung. Du hast um 11 Uhr den nächsten Termin.",
   "ziel": "Findet eine neue Uhrzeit.",
   "hilfe": ["Ich verspäte mich leider …", "Wäre es möglich, dass …?", "Um 11 Uhr habe ich …", "Danke für Ihr Verständnis."],
   "beispiel": [
    {"wer": "A", "t": "Guten Tag, hier ist Sara Nowak. Ich verspäte mich leider – mein Zug steht vor Köln."},
    {"wer": "B", "t": "Danke für den Anruf. Um 11 Uhr habe ich allerdings den nächsten Termin."},
    {"wer": "A", "t": "Wäre es möglich, dass wir um 10:20 Uhr anfangen und es etwas kürzer machen?"},
    {"wer": "B", "t": "Ja, das geht. Bis gleich!"},
    {"wer": "A", "t": "Danke für Ihr Verständnis!"}
   ]},
  {"titel": "Der Kollege ist immer zu spät", "bild": "bilder/landeskunde/puenktlich-rp-meeting.webp",
   "a": "Ein Kollege kommt jede Woche zu spät ins Meeting. Sprich ihn an – freundlich, aber klar.",
   "b": "Du bist der Kollege. Du hast Gründe (Kita, Bahn …). Findet eine Lösung.",
   "ziel": "Ihr findet eine Lösung, mit der beide leben können.",
   "hilfe": ["Das ist jetzt schon das dritte Mal.", "Es wäre schön, wenn …", "Das Problem ist, dass …", "Was hältst du davon, wenn …?"],
   "beispiel": [
    {"wer": "A", "t": "Du, kann ich kurz mit dir sprechen? Das ist jetzt schon das dritte Mal, dass wir auf dich warten."},
    {"wer": "B", "t": "Ich weiß, sorry. Das Problem ist, dass ich mein Kind erst um acht in die Kita bringen kann."},
    {"wer": "A", "t": "Ach so. Was hältst du davon, wenn wir das Meeting auf 9:30 Uhr legen?"},
    {"wer": "B", "t": "Das wäre super, danke!"}
   ]},
  {"titel": "Erstes Seminar an der Uni", "bild": "bilder/landeskunde/puenktlich-rp-uni.webp",
   "a": "Du bist neu an der Uni und um 10:00 Uhr im Raum – allein. Frag eine Studentin, die um 10:12 Uhr kommt.",
   "b": "Du studierst schon lange. Erkläre das akademische Viertel.",
   "ziel": "Am Ende weiß A, was „c. t.“ und „s. t.“ bedeuten.",
   "hilfe": ["Fängt das Seminar nicht um zehn an?", "Das heißt „c. t.“ …", "Und was bedeutet „s. t.“?", "Daran muss ich mich erst gewöhnen."],
   "beispiel": [
    {"wer": "A", "t": "Hallo! Fängt das Seminar nicht um zehn an?"},
    {"wer": "B", "t": "Doch, aber „c. t.“ – also erst um Viertel nach. Das ist das akademische Viertel."},
    {"wer": "A", "t": "Und was bedeutet „s. t.“?"},
    {"wer": "B", "t": "„Sine tempore“ – ohne Viertel, also ganz pünktlich."}
   ]},
  {"titel": "Die Bahn hat Verspätung", "bild": "bilder/landeskunde/puenktlich-rp-bahn.webp",
   "a": "Dein Zug hat 50 Minuten Verspätung. Du verpasst deinen Anschluss. Frag am Info-Schalter.",
   "b": "Du arbeitest am Info-Schalter. Du bist gestresst, aber hilfsbereit.",
   "ziel": "A bekommt eine neue Verbindung und weiß, ob es Geld zurück gibt.",
   "hilfe": ["Mein Zug hatte Verspätung …", "Ich habe meinen Anschluss verpasst.", "Bekomme ich Geld zurück?", "Ab 60 Minuten …"],
   "beispiel": [
    {"wer": "A", "t": "Entschuldigung, mein Zug hatte 50 Minuten Verspätung. Ich habe meinen Anschluss nach Hamburg verpasst."},
    {"wer": "B", "t": "Der nächste Zug fährt um 14:12 Uhr. Ihr Ticket gilt auch dafür."},
    {"wer": "A", "t": "Und bekomme ich Geld zurück?"},
    {"wer": "B", "t": "Ab 60 Minuten Verspätung am Ziel bekommen Sie einen Teil zurück. Das können Sie online beantragen."}
   ]}
 ],
 "fragen": [
  {"q": "Was ist für dich „zu spät“ – bei der Arbeit, bei Freunden, bei einer Party?", "folge": ["Ändert sich das, wenn man vorher Bescheid sagt?", "Wie lange wartest du maximal?"], "antw": ["Bei der Arbeit sind schon fünf Minuten zu spät.", "Bei Freunden ist eine Viertelstunde okay, wenn man schreibt.", "Bei einer Party gibt es eigentlich kein „zu spät“."]},
  {"q": "Ist Pünktlichkeit wirklich typisch deutsch?", "folge": ["Kennst du unpünktliche Deutsche?", "Was ist in deinem Land typisch?"], "antw": ["Ein Klischee ist, dass alle Deutschen pünktlich sind.", "Im Vergleich zu meinem Land sind die Deutschen schon sehr pünktlich.", "Die Bahn ist der beste Beweis, dass das nicht stimmt."]},
  {"q": "Wie reagierst du, wenn jemand ohne Nachricht zu spät kommt?", "folge": ["Sagst du etwas oder bleibst du ruhig?", "Gibt es Personen, bei denen es dir egal ist?"], "antw": ["Ich sage ehrlich, dass mich das stört.", "Ich bleibe ruhig, aber beim dritten Mal sage ich etwas.", "Bei meiner besten Freundin bin ich daran gewöhnt."]}
 ],
 "challenge": [
  {"frage": "Erkläre jemandem, der neu in Deutschland ist: Wann muss man pünktlich sein und wann nicht?", "hilfe": ["Vorstellungsgespräch", "Gleitzeit", "akademisches Viertel", "Party"]},
  {"frage": "Erzähl von einer Verspätung, die richtig peinlich war.", "hilfe": ["verpassen", "Bescheid geben", "sich entschuldigen", "Schuld"]},
  {"frage": "Vergleiche: Wie pünktlich sind Menschen und Busse in deinem Land und in Deutschland?", "hilfe": ["im Vergleich zu", "Klischee", "gewöhnen", "lockerer"]}
 ],
 "quiz": [
  {"q": "Was bedeutet „14 Uhr s. t.“?", "o": ["genau um 14 Uhr", "um 14:15 Uhr", "irgendwann am Nachmittag"], "r": 0, "anschluss": "Gibt es bei euch an der Uni auch so eine Regel?"},
  {"q": "Was ist Gleitzeit?", "o": ["Man kann den Arbeitsbeginn selbst wählen.", "Man arbeitet auf dem Eis.", "Man hat keine Pause."], "r": 0, "anschluss": "Hättest du lieber Gleitzeit oder feste Zeiten?"},
  {"q": "Welcher Satz ist am höflichsten?", "o": ["„Entschuldigen Sie bitte die Verspätung.“", "„Bin spät, sorry.“", "„Die Bahn ist schuld, nicht ich.“"], "r": 0, "anschluss": "Wann musstest du dich zuletzt für eine Verspätung entschuldigen?"},
  {"q": "In welchem DACH-Land sind die Züge am pünktlichsten?", "o": ["in der Schweiz", "in Deutschland", "überall gleich"], "r": 0, "anschluss": "Wie pünktlich sind die Züge in deinem Land?"},
  {"q": "„Ich hätte früher losfahren sollen.“ Was zeigt dieser Satz?", "o": ["Man übernimmt selbst die Verantwortung.", "Man ist sauer auf die Bahn.", "Man kommt morgen nicht."], "r": 0, "anschluss": "Wofür hättest du diese Woche mehr Zeit einplanen sollen?"}
 ],
 "merk": "Im Beruf ist Pünktlichkeit Pflicht. Wenn es doch passiert: früh Bescheid sagen, kurz erklären, Verantwortung übernehmen.",
 "tipp": "Plane bei der Bahn immer 20–30 Minuten Puffer ein – besonders bei wichtigen Terminen.",
 "simulator": {
  "intro": "Ihr habt einen neuen Job in Frankfurt. Heute ist eure erste Woche. Jede Entscheidung hat Folgen – diskutiert und einigt euch!",
  "start": "s1",
  "szenen": {
   "s1": {"bild": "bilder/landeskunde/puenktlich-sim-bahnsteig.webp", "text": "Montag, 8:30 Uhr. Euer erster Arbeitstag beginnt um 9 Uhr. Auf der Anzeige: „S-Bahn fällt aus“.", "optionen": [
    {"t": "Ihr ruft sofort die Chefin an und nehmt die nächste Bahn.", "folge": "Die Chefin sagt: „Danke! Wir fangen mit der Begrüßung etwas später an.“", "punkte": 3, "next": "s2"},
    {"t": "Ihr schreibt erst, wenn ihr da seid.", "folge": "Um 9:10 Uhr ruft die Chefin an: „Ist alles okay?“ Kein guter Start.", "punkte": 1, "next": "s2"},
    {"t": "Ihr lauft schnell los – 4 km zu Fuß.", "folge": "Pünktlich, aber völlig verschwitzt. Na ja …", "punkte": 1, "next": "s2"}]},
   "s2": {"bild": "bilder/landeskunde/puenktlich-sim-meeting.webp", "text": "Dienstag. Ihr habt Gleitzeit. Um 9:30 Uhr ist das wöchentliche Team-Meeting. Wann kommt ihr?", "optionen": [
    {"t": "Um 8 Uhr – dann habt ihr Zeit für alles.", "folge": "Gute Planung. Ihr seid entspannt im Meeting.", "punkte": 3, "next": "s3"},
    {"t": "Um 9:40 Uhr – es ist ja Gleitzeit.", "folge": "Alle schauen euch an. Gleitzeit gilt nicht für Meetings!", "punkte": 0, "next": "s3"},
    {"t": "Um 9:29 Uhr – auf die Minute.", "folge": "Geschafft! Aber ganz schön stressig.", "punkte": 2, "next": "s3"}]},
   "s3": {"bild": "bilder/landeskunde/puenktlich-sim-kollege.webp", "text": "Mittwoch. Ein Kollege kommt jeden Tag zu spät ins Meeting. Das Team ist genervt. Die Chefin fragt euch: „Wie seht ihr das?“", "optionen": [
    {"t": "„Vielleicht hat er einen Grund. Wir könnten ihn einfach fragen.“", "folge": "Es stellt sich heraus: Er bringt morgens sein Kind in die Kita. Das Meeting wird auf 9:45 Uhr verlegt.", "punkte": 3, "next": "s4"},
    {"t": "„Das ist total unprofessionell.“", "folge": "Der Kollege hört es später. Die Stimmung ist schlecht.", "punkte": 0, "next": "s4"},
    {"t": "„Keine Ahnung.“", "folge": "Die Chefin wirkt enttäuscht. Sie hatte auf eure Meinung gehofft.", "punkte": 1, "next": "s4"}]},
   "s4": {"bild": "bilder/landeskunde/puenktlich-sim-grillen.webp", "text": "Freitag. Das Team grillt im Park: „So ab 17 Uhr“. Wann kommt ihr?", "optionen": [
    {"t": "Um 16:55 Uhr.", "folge": "Ihr helft beim Aufbauen. Die Kollegen freuen sich – aber es war nicht nötig.", "punkte": 2, "next": "ende"},
    {"t": "Zwischen 17:15 und 17:45 Uhr.", "folge": "Perfekt. „So ab“ bedeutet genau das: locker.", "punkte": 3, "next": "ende"},
    {"t": "Um 21 Uhr.", "folge": "Der Grill ist schon kalt. Schade!", "punkte": 0, "next": "ende"}]}
  },
  "ende": [
   {"ab": 10, "text": "Stark! Ihr kennt den Unterschied zwischen Termin, Gleitzeit und „so ab“ – und reagiert diplomatisch."},
   {"ab": 5, "text": "Solide Woche! Merkt euch: Gleitzeit ja, aber Meetings sind pünktlich."},
   {"ab": 0, "text": "Eine anstrengende Woche … Lest noch einmal die Redemittel – nächste Woche wird besser!"}
  ]
 }
});

stufe('puenktlichkeit','bc',{
 "titel": "Pünktlichkeit",
 "emoji": "⏰",
 "bereich": "Landeskunde DACH",
 "intro": "Tugend, Zwang oder Klischee? Wir diskutieren, was Pünktlichkeit über eine Kultur verrät – und wie man Kritik an Unpünktlichkeit diplomatisch äußert.",
 "einstieg": {
  "bild": "bilder/landeskunde/puenktlich-einstieg.webp",
  "frage": "Laut Umfragen finden die meisten Deutschen Pünktlichkeit „wichtig“ oder „sehr wichtig“. Gleichzeitig kommt ein großer Teil der Fernzüge zu spät. Wie passt das zusammen?",
  "o": ["Gar nicht – das ist ein Widerspruch.", "Gerade weil Pünktlichkeit so wichtig ist, ärgern sich alle über die Bahn.", "Die Umfragen sind falsch."],
  "r": 1,
  "aufloesung": "Pünktlichkeit ist ein Wert, kein Naturgesetz. Weil die Erwartung so hoch ist, wird jede Verspätung zum Thema – die Bahn ist ein Dauerbrenner in Gesprächen."
 },
 "glossar": {
  "Sekundärtugend": {"e": "🏅", "t": "eine Eigenschaft wie Pünktlichkeit, Fleiß oder Ordnung – nützlich, aber nicht automatisch moralisch gut."},
  "monochron": {"e": "📏", "t": "Zeit wird als Linie gesehen: eins nach dem anderen, Termine sind fest."},
  "polychron": {"e": "🔄", "t": "Zeit ist flexibel: mehrere Dinge gleichzeitig, Beziehungen sind wichtiger als der Plan."}
 },
 "dach": [
  "Pünktlichkeit gilt als typisch deutsche <g>Sekundärtugend</g> – zusammen mit Fleiß und Ordnung. Der Begriff ist seit den 1980er-Jahren auch kritisch gemeint.",
  "Der Anthropologe Edward T. Hall unterscheidet Kulturen, die Zeit <g>monochron</g> erleben, und Kulturen, die sie <g>polychron</g> erleben. Deutschland, Österreich und die Schweiz gelten als stark monochron.",
  "Wer zu spät kommt, signalisiert in DACH schnell: „Deine Zeit ist mir nicht wichtig.“ Unpünktlichkeit wird oft persönlich genommen.",
  "Die Schweiz macht Pünktlichkeit zur Marke: Bahnhofsuhren und Züge auf die Minute gehören zum Selbstbild.",
  "Gleichzeitig wandelt sich die Arbeitswelt: Gleitzeit, Homeoffice und Vertrauensarbeitszeit machen feste Uhrzeiten weniger wichtig – Ergebnisse zählen mehr."
 ],
 "skala": {
  "titel": "⏰ Wie viel Spielraum gibt es?",
  "legende": "Rot: null Toleranz &nbsp; Gelb: Toleranz mit Ankündigung &nbsp; Grün: Zeit ist Verhandlungssache. Und wie ist das in eurem Land?"
 },
 "situationen": [
  {"o": "Kundentermin & Gericht", "ic": "⚖️", "s": 3, "meter": 98, "w": "null Toleranz", "t": "Hier entscheidet Pünktlichkeit über Vertrauen und Ruf."},
  {"o": "Vertrauensarbeitszeit", "ic": "💻", "s": 2, "meter": 45, "w": "Ergebnis zählt", "t": "Niemand kontrolliert die Uhrzeit – aber Deadlines sind heilig."},
  {"o": "WG-Abendessen", "ic": "🍝", "s": 1, "meter": 20, "w": "Verhandlungssache", "t": "„So gegen acht“ – und dann wird es neun."}
 ],
 "redemittel": [
  {"funktion": "Kritik diplomatisch äußern", "farbe": "rot", "items": [
   {"s": "<m>Mir ist aufgefallen, dass</m> wir in letzter Zeit oft warten.", "bsp": "Mir ist aufgefallen, dass wir in letzter Zeit oft auf dich warten. Ist alles in Ordnung?"},
   {"s": "<m>Ich möchte das nicht überbewerten, aber</m> …", "bsp": "Ich möchte das nicht überbewerten, aber für den Kunden wirkt das unzuverlässig."},
   {"s": "<m>Für mich fühlt es sich so an, als ob</m> …", "bsp": "Für mich fühlt es sich so an, als ob meine Zeit weniger wert wäre."},
   {"s": "<m>Wie können wir das künftig lösen</m>?", "bsp": "Wie können wir das künftig lösen, damit niemand warten muss?"}
  ]},
  {"funktion": "Sich rechtfertigen, ohne Ausreden", "farbe": "tuerkis", "items": [
   {"s": "<m>Das lag ganz klar an mir</m>.", "bsp": "Das lag ganz klar an mir – ich habe die Fahrzeit unterschätzt."},
   {"s": "<m>Ich verstehe, dass das ärgerlich ist</m>.", "bsp": "Ich verstehe, dass das ärgerlich ist, wenn alle auf mich warten."},
   {"s": "<m>In Zukunft werde ich</m> einen Puffer einplanen.", "bsp": "In Zukunft werde ich mindestens 20 Minuten Puffer einplanen."},
   {"s": "<m>Ohne mich herausreden zu wollen</m>: …", "bsp": "Ohne mich herausreden zu wollen: Die Strecke war wegen Bauarbeiten gesperrt."}
  ]},
  {"funktion": "Abwägen", "farbe": "gold", "items": [
   {"s": "<m>Einerseits</m> … <m>andererseits</m> …", "bsp": "Einerseits schafft Pünktlichkeit Verlässlichkeit, andererseits kann sie zu Stress führen."},
   {"s": "<m>Man darf nicht vergessen, dass</m> …", "bsp": "Man darf nicht vergessen, dass nicht jeder seine Zeit frei planen kann."},
   {"s": "<m>Das hängt stark davon ab, ob</m> …", "bsp": "Das hängt stark davon ab, ob es um einen Kundentermin oder ein Treffen unter Freunden geht."},
   {"s": "<m>Unterm Strich</m> …", "bsp": "Unterm Strich finde ich: Respekt zeigt sich nicht nur an der Uhrzeit."}
  ]},
  {"funktion": "Kulturen vergleichen", "farbe": "lila", "items": [
   {"s": "<m>In meiner Kultur gilt</m> eher …", "bsp": "In meiner Kultur gilt eher: Wer pünktlich zur Party kommt, ist zu früh."},
   {"s": "<m>Das wird bei uns ganz anders bewertet</m>.", "bsp": "Fünfzehn Minuten zu spät? Das wird bei uns ganz anders bewertet."},
   {"s": "<m>Ich würde das nicht pauschalisieren</m>.", "bsp": "Ich würde das nicht pauschalisieren – auch in Deutschland gibt es Chaoten."},
   {"s": "<m>Dahinter steckt</m> ein anderes Zeitverständnis.", "bsp": "Dahinter steckt ein anderes Zeitverständnis: Beziehungen gehen vor dem Plan."}
  ]}
 ],
 "dialog": {
  "situation": "Projektleiterin Anja spricht mit ihrem Kollegen Marco, der zum dritten Mal zu spät zum Kundentermin kam.",
  "zeilen": [
   {"wer": "A", "t": "Marco, hast du kurz Zeit? <m>Mir ist aufgefallen, dass</m> du bei den letzten drei Kundenterminen später warst."},
   {"wer": "B", "t": "Ja, ich weiß. <m>Ohne mich herausreden zu wollen</m>: Ich muss morgens noch meine Mutter zum Arzt fahren."},
   {"wer": "A", "t": "Das wusste ich nicht. <m>Ich möchte das nicht überbewerten, aber</m> der Kunde hat es angesprochen."},
   {"wer": "B", "t": "<m>Ich verstehe, dass das ärgerlich ist</m>. <m>Das lag ganz klar an mir</m> – ich hätte es früher sagen müssen."},
   {"wer": "A", "t": "Danke für die Offenheit. <m>Wie können wir das künftig lösen</m>?"},
   {"wer": "B", "t": "<m>In Zukunft werde ich</m> die Morgentermine tauschen – und Kundentermine erst ab zehn legen."},
   {"wer": "A", "t": "Klingt gut. <m>Unterm Strich</m> geht es mir ja nicht um die Minuten, sondern um den Eindruck beim Kunden."}
  ]
 },
 "wassagen": [
  {"situation": "Eine Kollegin kommt seit Wochen zu spät. Du willst es ansprechen. Wie beginnst du?", "o": ["„Du bist echt immer zu spät.“", "„Mir ist aufgefallen, dass wir oft warten – ist alles in Ordnung?“", "Du schreibst es anonym an die Chefin."], "r": 1, "warum": "Eine Ich-Beobachtung plus Frage öffnet das Gespräch statt anzuklagen."},
  {"situation": "Du kommst zu spät zu einem wichtigen Termin. Welche Reaktion wirkt am professionellsten?", "o": ["„Die Bahn ist schuld.“", "„Das lag an mir, ich habe die Fahrzeit unterschätzt. In Zukunft plane ich einen Puffer ein.“", "Nichts sagen und sofort anfangen."], "r": 1, "warum": "Verantwortung übernehmen und eine Lösung nennen wirkt souverän."},
  {"situation": "Jemand sagt: „Alle Deutschen sind pünktlich.“ Wie reagierst du differenziert?", "o": ["„Stimmt genau.“", "„Ich würde das nicht pauschalisieren – es hängt stark von der Situation ab.“", "„Quatsch!“"], "r": 1, "warum": "Man widerspricht Klischees am besten mit Differenzierung."},
  {"situation": "In deinem Team gilt Vertrauensarbeitszeit. Ein Kollege kommt täglich um 11 Uhr. Ist das ein Problem?", "o": ["Ja, immer.", "Nur, wenn Termine oder Ergebnisse darunter leiden.", "Nein, Meetings sind dann egal."], "r": 1, "warum": "Bei Vertrauensarbeitszeit zählen Ergebnisse und Absprachen, nicht die Uhrzeit."},
  {"situation": "Was meint Edward T. Hall mit „polychron“?", "o": ["Zeit ist flexibel, mehrere Dinge laufen parallel.", "Man hat viele Uhren.", "Man ist immer zu früh."], "r": 0, "warum": "Polychrone Kulturen sehen Zeit flexibel – Beziehungen sind oft wichtiger als der Plan."}
 ],
 "puzzle": [
  ["Mir ist aufgefallen,", "dass wir oft warten."],
  ["Ich möchte das nicht überbewerten,", "aber es wirkt unzuverlässig."],
  ["Ohne mich herausreden zu wollen:", "Die Strecke war gesperrt."],
  ["In Zukunft werde ich", "einen Puffer einplanen."],
  ["Das hängt stark davon ab,", "ob es ein Kundentermin ist."],
  ["Dahinter steckt", "ein anderes Zeitverständnis."]
 ],
 "luecken": {
  "zeilen": [
   {"wer": "A", "t": "Mir ist ___, dass du oft später kommst.", "loes": "aufgefallen"},
   {"wer": "B", "t": "Ohne mich ___ zu wollen: Ich muss morgens noch jemanden fahren.", "loes": "herausreden"},
   {"wer": "A", "t": "Ich möchte das nicht ___, aber der Kunde hat es bemerkt.", "loes": "überbewerten"},
   {"wer": "B", "t": "In ___ werde ich die Termine später legen.", "loes": "Zukunft"},
   {"wer": "A", "t": "Unterm ___ geht es mir um den Eindruck beim Kunden.", "loes": "Strich"}
  ],
  "woerter": ["aufgefallen", "herausreden", "überbewerten", "Zukunft", "Strich"]
 },
 "rollen": [
  {"titel": "Das Kritikgespräch", "bild": "bilder/landeskunde/puenktlich-rp-kritik.webp",
   "a": "Du leitest ein Team. Ein Mitarbeiter kommt ständig zu spät zu Kundenterminen. Sprich es diplomatisch an.",
   "b": "Du hast private Gründe, die niemand kennt. Bleib professionell und biete eine Lösung an.",
   "ziel": "Ihr vereinbart eine konkrete Lösung.",
   "hilfe": ["Mir ist aufgefallen, dass …", "Für mich fühlt es sich so an, als ob …", "Ohne mich herausreden zu wollen …", "In Zukunft werde ich …"],
   "beispiel": [
    {"wer": "A", "t": "Mir ist aufgefallen, dass du bei Kundenterminen oft später kommst. Was ist da los?"},
    {"wer": "B", "t": "Ohne mich herausreden zu wollen: Ich pflege gerade meinen Vater. Das lag aber an mir, ich hätte es früher sagen sollen."},
    {"wer": "A", "t": "Danke, dass du das erzählst. Wie können wir das künftig lösen?"},
    {"wer": "B", "t": "In Zukunft werde ich Kundentermine erst ab zehn Uhr annehmen."}
   ]},
  {"titel": "Pünktlichkeit – Tugend oder Zwang?", "bild": "bilder/landeskunde/puenktlich-rp-debatte.webp",
   "a": "⏱️ Für dich ist Pünktlichkeit eine Frage des Respekts. Nenne zwei Argumente.",
   "b": "Für dich ist strenge Pünktlichkeit Stress und unnötiger Druck. Nenne zwei Argumente.",
   "ziel": "Findet am Ende einen gemeinsamen Satz, dem beide zustimmen.",
   "hilfe": ["Einerseits … andererseits …", "Man darf nicht vergessen, dass …", "Das hängt stark davon ab, ob …", "Unterm Strich …"],
   "beispiel": [
    {"wer": "A", "t": "Wer pünktlich ist, zeigt: Deine Zeit ist mir wichtig."},
    {"wer": "B", "t": "Einerseits ja, andererseits macht diese Erwartung viele Menschen total gestresst."},
    {"wer": "A", "t": "Man darf aber nicht vergessen, dass ohne Pünktlichkeit kein Zug und kein Meeting funktioniert."},
    {"wer": "B", "t": "Unterm Strich: Bei Terminen ja, bei Freunden darf es lockerer sein."}
   ]},
  {"titel": "Interkulturelles Missverständnis", "bild": "bilder/landeskunde/puenktlich-rp-missverstaendnis.webp",
   "a": "Du hast Kollegen um 19 Uhr eingeladen. Ein Gast kam um 18:55 Uhr, einer um 21 Uhr. Du bist irritiert.",
   "b": "Du bist der Gast, der um 21 Uhr kam. In deiner Kultur ist das völlig normal. Erkläre es.",
   "ziel": "Versteht das Zeitverständnis des anderen.",
   "hilfe": ["In meiner Kultur gilt eher …", "Das wird bei uns ganz anders bewertet.", "Dahinter steckt …", "Ich würde das nicht pauschalisieren."],
   "beispiel": [
    {"wer": "A", "t": "Ehrlich gesagt war ich etwas irritiert, dass du erst um neun kamst."},
    {"wer": "B", "t": "Oh, das tut mir leid! In meiner Kultur gilt eher: Wer pünktlich kommt, setzt den Gastgeber unter Druck."},
    {"wer": "A", "t": "Interessant – das wird bei uns ganz anders bewertet."},
    {"wer": "B", "t": "Dahinter steckt wohl ein anderes Zeitverständnis. Nächstes Mal frage ich einfach nach."}
   ]},
  {"titel": "Homeoffice-Streit", "bild": "bilder/landeskunde/puenktlich-rp-homeoffice.webp",
   "a": "Du bist Abteilungsleiter und möchtest wieder feste Kernzeiten (9–15 Uhr) einführen.",
   "b": "Du arbeitest im Homeoffice am liebsten abends. Deine Ergebnisse sind sehr gut.",
   "ziel": "Findet einen Kompromiss.",
   "hilfe": ["Mir ist wichtig, dass …", "Das hängt stark davon ab, ob …", "Man darf nicht vergessen, dass …", "Was hältst du von einem Kompromiss?"],
   "beispiel": [
    {"wer": "A", "t": "Mir ist wichtig, dass das Team tagsüber erreichbar ist. Deshalb möchte ich Kernzeiten."},
    {"wer": "B", "t": "Man darf nicht vergessen, dass meine Ergebnisse gerade abends am besten sind."},
    {"wer": "A", "t": "Was hältst du von einem Kompromiss: Kernzeit von 10 bis 13 Uhr, der Rest flexibel?"},
    {"wer": "B", "t": "Damit kann ich gut leben."}
   ]}
 ],
 "fragen": [
  {"q": "Ist Unpünktlichkeit respektlos – oder einfach eine andere Kultur?", "folge": ["Wo ist für dich die Grenze?", "Ändert eine Nachricht vorher etwas?"], "antw": ["Ich finde, es hängt stark davon ab, ob man Bescheid sagt.", "Für mich fühlt es sich respektlos an, wenn jemand ohne Nachricht eine halbe Stunde zu spät kommt.", "Dahinter steckt oft einfach ein anderes Zeitverständnis."]},
  {"q": "Sollten Firmen feste Arbeitszeiten ganz abschaffen?", "folge": ["Was passiert mit Meetings?", "Wer profitiert, wer verliert?"], "antw": ["Einerseits gibt es mehr Freiheit, andererseits verschwimmen Arbeit und Freizeit.", "Man darf nicht vergessen, dass nicht jeder Job flexibel sein kann.", "Unterm Strich zählen Ergebnisse mehr als Anwesenheit."]},
  {"q": "Was verrät der Umgang mit Zeit über eine Gesellschaft?", "folge": ["Monochron oder polychron – was passt zu dir?", "Kann man sein Zeitgefühl ändern?"], "antw": ["Ich würde das nicht pauschalisieren, aber Planung hat in DACH einen hohen Stellenwert.", "In meiner Kultur gilt eher: Menschen vor dem Terminplan.", "Ich habe mich inzwischen an die deutsche Pünktlichkeit gewöhnt."]}
 ],
 "debatte": {
  "these": "Pünktlichkeit wird überschätzt – Ergebnisse zählen, nicht Uhrzeiten.",
  "pro": ["Moderne Arbeit (Homeoffice, Gleitzeit) funktioniert ohne feste Uhrzeiten.", "Strenge Pünktlichkeit erzeugt unnötigen Stress.", "In vielen Kulturen funktionieren Beziehungen auch ohne exakte Zeitplanung."],
  "contra": ["Ohne Pünktlichkeit funktionieren Züge, Schulen und Krankenhäuser nicht.", "Wer wartet, verliert Zeit – Unpünktlichkeit ist unfair.", "Pünktlichkeit schafft Vertrauen, besonders mit Kunden."]
 },
 "challenge": [
  {"frage": "Pünktlichkeit – Tugend oder Zwang? Wäge ab und komm zu einem Fazit.", "hilfe": ["Sekundärtugend", "einerseits", "Respekt", "unterm Strich"]},
  {"frage": "Wie würdest du einem Freund diplomatisch sagen, dass seine Unpünktlichkeit dich stört?", "hilfe": ["mir ist aufgefallen", "Ich-Botschaft", "Lösung", "nicht überbewerten"]},
  {"frage": "Monochron oder polychron: Beschreibe dein eigenes Zeitverständnis mit einem Beispiel.", "hilfe": ["Zeitverständnis", "Termine", "Beziehungen", "pauschalisieren"]}
 ],
 "quiz": [
  {"q": "Was ist eine „Sekundärtugend“?", "o": ["eine nützliche, aber nicht automatisch moralische Eigenschaft", "eine Tugend zweiter Klasse ohne Wert", "eine Regel aus dem Grundgesetz"], "r": 0, "anschluss": "Welche Sekundärtugend ist dir selbst wichtig?"},
  {"q": "Welcher Satz übernimmt Verantwortung?", "o": ["„Das lag ganz klar an mir.“", "„Da kann ich nichts dafür.“", "„Das passiert jedem.“"], "r": 0, "anschluss": "Wann hast du zuletzt so einen Satz gesagt?"},
  {"q": "Was bedeutet „Ich möchte das nicht überbewerten, aber …“?", "o": ["Man schwächt Kritik ab, äußert sie aber trotzdem.", "Man lobt jemanden.", "Man ändert das Thema."], "r": 0, "anschluss": "In welcher Situation könntest du diesen Satz gebrauchen?"},
  {"q": "Vertrauensarbeitszeit bedeutet …", "o": ["Niemand kontrolliert die Arbeitszeit – das Ergebnis zählt.", "Man arbeitet nur mit Freunden.", "Man muss jede Minute dokumentieren."], "r": 0, "anschluss": "Würdest du gern mit Vertrauensarbeitszeit arbeiten?"},
  {"q": "Warum ist die Bahn ein Dauerthema in Deutschland?", "o": ["Weil Pünktlichkeit hoch bewertet wird und die Bahn oft zu spät ist.", "Weil es keine Autos gibt.", "Weil Bahnfahren verboten ist."], "r": 0, "anschluss": "Worüber beschweren sich Menschen in deinem Land am liebsten?"}
 ],
 "merk": "Pünktlichkeit ist in DACH mehr als eine Uhrzeit: Sie signalisiert Respekt und Verlässlichkeit. Wer sich verspätet, übernimmt Verantwortung – ohne Ausreden.",
 "tipp": "Kritik an Unpünktlichkeit wirkt am besten als Beobachtung plus Frage: „Mir ist aufgefallen … – ist alles in Ordnung?“",
 "simulator": {
  "intro": "Ihr leitet ein internationales Projekt in Zürich. Euer Team kommt aus fünf Ländern. Jede Entscheidung hat Folgen – diskutiert, einigt euch, begründet!",
  "start": "s1",
  "szenen": {
   "s1": {"bild": "bilder/landeskunde/puenktlich-sim-zuerich.webp", "text": "Kick-off-Meeting um 9 Uhr. Um 9:00 Uhr sind drei von acht Leuten da. Die Schweizer Kundin schaut auf die Uhr.", "optionen": [
    {"t": "Ihr fangt pünktlich an und fasst später für die anderen zusammen.", "folge": "Die Kundin nickt anerkennend. Die Nachzügler sind etwas verlegen – aber sie haben die Botschaft verstanden.", "punkte": 3, "next": "s2"},
    {"t": "Ihr wartet, bis alle da sind (9:25 Uhr).", "folge": "Die Kundin sagt kühl: „Wir hatten 9 Uhr vereinbart.“", "punkte": 0, "next": "s2"},
    {"t": "Ihr macht Smalltalk und beginnt um 9:10 Uhr.", "folge": "Ein Kompromiss – aber die Kundin wirkt ungeduldig.", "punkte": 1, "next": "s2"}]},
   "s2": {"bild": "bilder/landeskunde/puenktlich-sim-teamregeln.webp", "text": "Ein Kollege aus einer polychronen Kultur sagt: „Bei uns sind Beziehungen wichtiger als die Uhr. Ich fühle mich hier ständig kontrolliert.“", "optionen": [
    {"t": "Ihr erarbeitet gemeinsam Teamregeln: Kundentermine pünktlich, interne Treffen mit 5 Minuten Toleranz.", "folge": "Alle fühlen sich gehört. Die Regeln werden akzeptiert.", "punkte": 3, "next": "s3"},
    {"t": "„Wir sind hier in der Schweiz. Da gelten unsere Regeln.“", "folge": "Formal korrekt – aber der Kollege zieht sich zurück.", "punkte": 1, "next": "s3"},
    {"t": "Ihr ignoriert das Thema.", "folge": "Die Spannungen wachsen. Zwei Wochen später eskaliert ein Meeting.", "punkte": 0, "next": "s3"}]},
   "s3": {"bild": "bilder/landeskunde/puenktlich-sim-verspaetung.webp", "text": "Ihr selbst kommt zur wichtigen Präsentation 15 Minuten zu spät – ein Zugausfall. Die Kundin wartet.", "optionen": [
    {"t": "„Entschuldigen Sie, das lag an mir – ich hätte einen früheren Zug nehmen sollen.“", "folge": "Die Kundin schätzt die Ehrlichkeit. Die Präsentation läuft gut.", "punkte": 3, "next": "s4"},
    {"t": "„Die SBB hatte leider eine Störung.“", "folge": "Die Kundin hebt die Augenbraue: Die SBB ist ihr Stolz. Peinlich.", "punkte": 1, "next": "s4"},
    {"t": "Ihr erwähnt es gar nicht.", "folge": "Die Kundin notiert sich etwas. Kein gutes Zeichen.", "punkte": 0, "next": "s4"}]},
   "s4": {"bild": "bilder/landeskunde/puenktlich-sim-abschluss.webp", "text": "Projektende. Die Geschäftsleitung fragt euch: „Sollen wir in allen Teams strenge Pünktlichkeitsregeln einführen?“", "optionen": [
    {"t": "„Das hängt stark von der Situation ab: Extern strikt, intern mit klaren, gemeinsam vereinbarten Spielregeln.“", "folge": "Differenziert und praxisnah. Die Geschäftsleitung übernimmt euren Vorschlag.", "punkte": 3, "next": "ende"},
    {"t": "„Ja, null Toleranz für alle.“", "folge": "Kurzfristig klappt es – aber die internationalen Talente fühlen sich unwohl.", "punkte": 1, "next": "ende"},
    {"t": "„Nein, Pünktlichkeit ist veraltet.“", "folge": "Die Kunden sehen das anders. Der Vorschlag wird abgelehnt.", "punkte": 0, "next": "ende"}]}
  },
  "ende": [
   {"ab": 10, "text": "Hervorragend! Ihr verbindet DACH-Pünktlichkeit mit interkultureller Sensibilität – genau das braucht ein internationales Team."},
   {"ab": 5, "text": "Gute Arbeit! An manchen Stellen hätte mehr Diplomatie oder mehr Klarheit geholfen."},
   {"ab": 0, "text": "Ein holpriges Projekt … Schaut euch die Redemittel zum diplomatischen Kritisieren noch einmal an."}
  ]
 }
});
