/* Emilia · Dialekte in DACH · Gerüst v2 · 27.11.2026 – gleiches Format wie duzen-muster-v2.js · für Di 01.12. (Julia: statt Duzen) */
stufe('dialekte','ab',{
 "titel": "Dialekte",
 "emoji": "🗣️",
 "bereich": "Landeskunde DACH",
 "intro": "Moin, Servus, Grüezi! In Deutschland, Österreich und der Schweiz klingt Deutsch überall ein bisschen anders.",
 "einstieg": {
  "bild": "bilder/landeskunde/dialekte-einstieg.webp",
  "frage": "Du bist in Hamburg beim Bäcker. Die Verkäuferin sagt: „Moin!“ Was bedeutet das?",
  "o": ["„Guten Morgen“ – aber nur am Morgen", "„Hallo“ – den ganzen Tag", "„Tschüss“"],
  "r": 1,
  "aufloesung": "„Moin“ sagt man in Norddeutschland den ganzen Tag – auch am Abend. Es heißt einfach „Hallo“."
 },
 "glossar": {
  "Dialekt": {"e": "🗺️", "t": "die Sprache einer Region: andere Wörter und eine andere Aussprache."},
  "Hochdeutsch": {"e": "📰", "t": "das Deutsch, das man in der Schule lernt und in den Nachrichten hört."},
  "die Semmel": {"e": "🥖", "t": "so sagt man in Bayern und Österreich zum Brötchen."}
 },
 "dach": [
  "In Deutschland, Österreich und der Schweiz gibt es viele Dialekte. Jede Region klingt anders.",
  "In der Schule, im Radio und in den Nachrichten spricht man meistens <g>Hochdeutsch</g>.",
  "Zur Begrüßung sagt man im Norden „Moin“, in Bayern und Österreich „Servus“ oder „Grüß Gott“ und in der Schweiz „Grüezi“.",
  "Auch Essen hat andere Namen: Das Brötchen heißt in Berlin „Schrippe“ und in Bayern und Österreich <g>die Semmel</g>.",
  "In der Schweiz spricht man im Alltag fast immer Schweizerdeutsch – das ist ein starker <g>Dialekt</g>. Geschrieben wird aber Hochdeutsch."
 ],
 "karte": {"titel": "So sagt man Hallo – und Brötchen", "hinweis": "Punkte auf einer schlichten DACH-Karte (x/y in % der Kartenbreite/-höhe).", "punkte": [{"ort": "Hamburg", "x": 37, "y": 17, "gruss": "Moin", "broetchen": "Rundstück"}, {"ort": "Berlin", "x": 67, "y": 28, "gruss": "Tach", "broetchen": "Schrippe"}, {"ort": "Köln", "x": 10, "y": 45, "gruss": "Tach", "broetchen": "Brötchen"}, {"ort": "Stuttgart", "x": 30, "y": 68, "gruss": "Grüß Gott", "broetchen": "Weckle"}, {"ort": "München", "x": 51, "y": 75, "gruss": "Servus", "broetchen": "Semmel"}, {"ort": "Wien", "x": 93, "y": 74, "gruss": "Servus", "broetchen": "Semmel"}, {"ort": "Zürich", "x": 24, "y": 83, "gruss": "Grüezi", "broetchen": "Weggli"}]},
 "skala": {
  "titel": "Wie viel Dialekt hört man?",
  "legende": "Rot: fast nur Dialekt &nbsp; Gelb: manchmal Dialekt &nbsp; Grün: meistens Hochdeutsch. Und wie ist das in eurem Land?"
 },
 "situationen": [
  {"o": "Schweiz im Alltag", "bild": "bilder/landeskunde/dialekte-sit-schweiz.webp", "ic": "🇨🇭", "s": 3, "meter": 95, "w": "fast nur Dialekt", "t": "Beim Bäcker, im Bus, bei Freunden: Schweizerdeutsch."},
  {"o": "Dorf in Bayern", "bild": "bilder/landeskunde/dialekte-sit-bayern.webp", "ic": "🍺", "s": 2, "meter": 60, "w": "oft Dialekt", "t": "Viele sprechen Bairisch – mit Fremden oft Hochdeutsch."},
  {"o": "Nachrichten & Schule", "bild": "bilder/landeskunde/dialekte-sit-nachrichten.webp", "ic": "📺", "s": 1, "meter": 10, "w": "Hochdeutsch", "t": "Hier spricht man Hochdeutsch, damit alle es verstehen."}
 ],
 "redemittel": [
  {"funktion": "Nachfragen, wenn man nichts versteht", "farbe": "gold", "items": [
   {"s": "<m>Entschuldigung, das habe ich nicht verstanden</m>.", "bsp": "Entschuldigung, das habe ich nicht verstanden. Sprechen Sie Dialekt?"},
   {"s": "<m>Können Sie das bitte noch einmal sagen</m>?", "bsp": "Können Sie das bitte noch einmal sagen – ein bisschen langsamer?"},
   {"s": "<m>Was bedeutet</m> „Servus“?", "bsp": "Was bedeutet „Servus“? Hallo oder Tschüss?"},
   {"s": "<m>Wie sagt man das auf Hochdeutsch</m>?", "bsp": "„Semmel“? Wie sagt man das auf Hochdeutsch?"}
  ]},
  {"funktion": "Über Dialekte sprechen", "farbe": "tuerkis", "items": [
   {"s": "<m>Hier sagt man</m> „Moin“.", "bsp": "In Hamburg sagt man den ganzen Tag „Moin“."},
   {"s": "<m>Das klingt</m> lustig / schön.", "bsp": "Schweizerdeutsch klingt für mich sehr schön."},
   {"s": "<m>Den Dialekt verstehe ich</m> (fast) nicht.", "bsp": "Den Dialekt von meinem Nachbarn verstehe ich fast nicht."},
   {"s": "<m>Das Wort kenne ich nicht</m>.", "bsp": "„Schrippe“? Das Wort kenne ich nicht."}
  ]},
  {"funktion": "Vergleichen", "farbe": "lila", "items": [
   {"s": "<m>Bei uns gibt es auch</m> Dialekte.", "bsp": "Bei uns gibt es auch viele Dialekte – im Norden und im Süden."},
   {"s": "<m>In meiner Sprache sagt man</m> …", "bsp": "In meiner Sprache sagt man im Süden ganz andere Wörter."},
   {"s": "<m>Das ist ähnlich wie</m> bei uns.", "bsp": "Das ist ähnlich wie bei uns: Die Leute aus den Bergen sprechen anders."},
   {"s": "<m>Ich komme aus</m> … <m>dort spricht man</m> …", "bsp": "Ich komme aus Andalusien, dort spricht man sehr schnell."}
  ]}
 ],
 "dialog": {
  "situation": "Amira ist zum ersten Mal in München. Sie kauft beim Bäcker ein.",
  "zeilen": [
   {"wer": "B", "t": "Servus! Wos mogst?"},
   {"wer": "A", "t": "Äh … <m>Entschuldigung, das habe ich nicht verstanden</m>."},
   {"wer": "B", "t": "Ah, Verzeihung! Was möchten Sie?"},
   {"wer": "A", "t": "Zwei Brötchen, bitte."},
   {"wer": "B", "t": "Zwei Semmeln, gern. Sonst noch was?"},
   {"wer": "A", "t": "Semmeln? <m>Wie sagt man das auf Hochdeutsch</m>?"},
   {"wer": "B", "t": "Brötchen! <m>Hier sagt man</m> halt Semmel. Pfiat di – also: Tschüss!"},
   {"wer": "A", "t": "Tschüss! (lacht) <m>Das klingt</m> lustig!"}
  ]
 },
 "wassagen": [
  {"bild": "bilder/landeskunde/dialekte-sim-hamburg.webp", "situation": "Du bist in Hamburg. Es ist 19 Uhr. Ein Mann sagt: „Moin!“ Was antwortest du?", "o": ["„Guten Abend, es ist doch nicht Morgen!“", "„Moin!“", "Nichts."], "r": 1, "warum": "„Moin“ sagt man im Norden den ganzen Tag."},
  {"bild": "bilder/landeskunde/dialekte-ws-wien.webp", "situation": "In Wien sagt eine Freundin zum Abschied: „Servus!“ Was bedeutet das hier?", "o": ["Hallo", "Tschüss", "Danke"], "r": 1, "warum": "„Servus“ heißt in Bayern und Österreich Hallo UND Tschüss."},
  {"bild": "bilder/landeskunde/dialekte-ws-zuerich.webp", "situation": "Du verstehst eine Verkäuferin in Zürich nicht. Was sagst du?", "o": ["„Sprechen Sie bitte richtig Deutsch!“", "„Können Sie das bitte noch einmal sagen?“", "Du gehst weg."], "r": 1, "warum": "Freundlich nachfragen ist immer gut. Viele sprechen dann Hochdeutsch."},
  {"bild": "bilder/landeskunde/dialekte-sim-berlin.webp", "situation": "In Berlin möchtest du Brötchen kaufen. Welches Wort hörst du dort oft?", "o": ["Schrippe", "Semmel", "Weggli"], "r": 0, "warum": "In Berlin heißt das Brötchen „Schrippe“."},
  {"bild": "bilder/landeskunde/dialekte-sit-nachrichten.webp", "situation": "In welcher Sprache sind die Nachrichten im deutschen Fernsehen?", "o": ["auf Bairisch", "auf Hochdeutsch", "auf Schweizerdeutsch"], "r": 1, "warum": "In den Nachrichten spricht man Hochdeutsch, damit alle es verstehen."}
 ],
 "puzzle": [
  ["Entschuldigung, das habe ich", "nicht verstanden."],
  ["Können Sie das bitte", "noch einmal sagen?"],
  ["Wie sagt man das", "auf Hochdeutsch?"],
  ["In Hamburg sagt man", "den ganzen Tag „Moin“."],
  ["Den Dialekt verstehe ich", "fast nicht."],
  ["Bei uns gibt es", "auch viele Dialekte."]
 ],
 "luecken": {
  "zeilen": [
   {"wer": "A", "t": "Entschuldigung, das habe ich nicht ___.", "loes": "verstanden"},
   {"wer": "B", "t": "Ach so! Hier ___ man „Semmel“.", "loes": "sagt"},
   {"wer": "A", "t": "Wie sagt man das auf ___?", "loes": "Hochdeutsch"},
   {"wer": "B", "t": "Brötchen! Möchten Sie noch ___?", "loes": "etwas"},
   {"wer": "A", "t": "Nein, danke. Ihr Dialekt ___ schön!", "loes": "klingt"}
  ],
  "woerter": ["verstanden", "sagt", "Hochdeutsch", "etwas", "klingt"]
 },
 "rollen": [
  {"titel": "Beim Bäcker in München", "bild": "bilder/landeskunde/dialekte-rp-baecker.webp",
   "a": "Du möchtest Brötchen und eine Brezel kaufen. Du verstehst den Dialekt nicht gut.",
   "b": "Du arbeitest beim Bäcker in München. Sag „Servus“ und „Semmel“. Erkläre die Wörter.",
   "ziel": "A bekommt, was er/sie möchte – und lernt zwei neue Wörter.",
   "hilfe": ["Servus!", "Können Sie das noch einmal sagen?", "Was bedeutet …?", "Hier sagt man …"],
   "beispiel": [
    {"wer": "B", "t": "Servus! Was darf’s sein?"},
    {"wer": "A", "t": "Hallo! Zwei Brötchen, bitte."},
    {"wer": "B", "t": "Zwei Semmeln – hier sagt man Semmel. Noch was?"},
    {"wer": "A", "t": "Ja, eine Brezel. Und was bedeutet „Servus“?"},
    {"wer": "B", "t": "Hallo – und auch Tschüss! Also: Servus!"}
   ]},
  {"titel": "Moin in Hamburg", "bild": "bilder/landeskunde/dialekte-rp-hamburg.webp",
   "a": "Du bist Tourist in Hamburg. Frag nach dem Weg zum Hafen.",
   "b": "Du wohnst in Hamburg. Sag „Moin“ und erkläre den Weg.",
   "ziel": "A findet den Weg und weiß, was „Moin“ bedeutet.",
   "hilfe": ["Moin!", "Wie komme ich zum Hafen?", "Geradeaus und dann links.", "Sagt man das auch am Abend?"],
   "beispiel": [
    {"wer": "B", "t": "Moin!"},
    {"wer": "A", "t": "Guten Abend! Äh, moin? Wie komme ich zum Hafen?"},
    {"wer": "B", "t": "Immer geradeaus und dann links. Zehn Minuten zu Fuß."},
    {"wer": "A", "t": "Danke! Sagt man „Moin“ auch am Abend?"},
    {"wer": "B", "t": "Klar, den ganzen Tag!"}
   ]},
  {"titel": "Der neue Nachbar spricht Dialekt", "bild": "bilder/landeskunde/dialekte-rp-nachbar.webp",
   "a": "Du bist neu im Haus. Dein Nachbar spricht starken Dialekt. Frag freundlich nach.",
   "b": "Du sprichst gern Dialekt. Wenn A nichts versteht, sprichst du langsam Hochdeutsch.",
   "ziel": "Ihr lernt euch kennen und versteht euch am Ende gut.",
   "hilfe": ["Entschuldigung, wie bitte?", "Können Sie langsamer sprechen?", "Den Dialekt verstehe ich nicht.", "Kein Problem!"],
   "beispiel": [
    {"wer": "B", "t": "Grüß Gott! Sie san die Neue, gell?"},
    {"wer": "A", "t": "Entschuldigung, wie bitte? Können Sie langsamer sprechen?"},
    {"wer": "B", "t": "Natürlich! Sie sind die Neue, oder?"},
    {"wer": "A", "t": "Ja, ich bin Amira. Den Dialekt verstehe ich noch nicht so gut."},
    {"wer": "B", "t": "Kein Problem, das lernen Sie schnell!"}
   ]},
  {"titel": "Dialekte in meinem Land", "bild": "bilder/landeskunde/dialekte-rp-vergleich.webp",
   "a": "Erzähl: Gibt es in deinem Land Dialekte? Wo spricht man anders?",
   "b": "Stell Fragen: Verstehst du alle Dialekte? Welcher klingt schön?",
   "ziel": "Findet etwas, das bei euch ähnlich ist wie in Deutschland.",
   "hilfe": ["Bei uns gibt es auch …", "Im Süden spricht man …", "Das ist ähnlich wie …", "Welcher Dialekt klingt schön?"],
   "beispiel": [
    {"wer": "B", "t": "Gibt es in deinem Land auch Dialekte?"},
    {"wer": "A", "t": "Ja, viele! Im Norden spricht man ganz anders als im Süden."},
    {"wer": "B", "t": "Verstehst du alle?"},
    {"wer": "A", "t": "Nein, nicht alle. Das ist ähnlich wie in Deutschland!"}
   ]}
 ],
 "fragen": [
  {"q": "Welche deutschen Dialekte hast du schon gehört?", "folge": ["Wo war das?", "Hast du etwas verstanden?"], "antw": ["In Bayern habe ich „Servus“ gehört.", "Mein Kollege spricht Schwäbisch – das verstehe ich fast nicht.", "Ich habe noch keinen Dialekt gehört, nur Hochdeutsch."]},
  {"q": "Gibt es in deinem Land Dialekte?", "folge": ["Sprichst du selbst einen Dialekt?", "Welcher Dialekt ist bei euch bekannt?"], "antw": ["Ja, bei uns gibt es auch viele Dialekte.", "In meiner Sprache sagt man im Süden andere Wörter.", "Ich spreche zu Hause Dialekt und in der Schule die Standardsprache."]},
  {"q": "Welches Wort aus einem Dialekt findest du lustig oder schön?", "folge": ["Warum?", "Benutzt du das Wort auch?"], "antw": ["„Moin“ finde ich super – kurz und freundlich.", "„Servus“ klingt schön.", "„Schrippe“ finde ich lustig."]}
 ],
 "challenge": [
  {"frage": "Erkläre: Was sagt man wo zur Begrüßung in Deutschland, Österreich und der Schweiz?", "hilfe": ["Moin", "Servus", "Grüß Gott", "Grüezi"]},
  {"frage": "Erzähl: Wann hast du jemanden einmal gar nicht verstanden?", "hilfe": ["Dialekt", "nachfragen", "langsam", "verstehen"]},
  {"frage": "Erzähl von den Dialekten in deinem Land.", "hilfe": ["im Norden", "im Süden", "anders", "ähnlich wie"]}
 ],
 "quiz": [
  {"q": "Wo sagt man „Grüezi“?", "o": ["in der Schweiz", "in Hamburg", "in Berlin"], "r": 0, "anschluss": "Wie begrüßt man sich in deiner Stadt?"},
  {"q": "Was bedeutet „Servus“ in Bayern und Österreich?", "o": ["Hallo und Tschüss", "Danke", "Guten Appetit"], "r": 0, "anschluss": "Welches Wort sagst du am liebsten zur Begrüßung?"},
  {"q": "Wie heißt das Brötchen in Bayern und Österreich?", "o": ["Semmel", "Schrippe", "Brezel"], "r": 0, "anschluss": "Was isst du am liebsten zum Frühstück?"},
  {"q": "Was ist Hochdeutsch?", "o": ["das Deutsch aus Schule und Nachrichten", "der Dialekt in den Bergen", "Deutsch mit sehr lauter Stimme"], "r": 0, "anschluss": "Wo hörst du im Alltag Hochdeutsch?"},
  {"q": "Wann sagt man in Norddeutschland „Moin“?", "o": ["den ganzen Tag", "nur am Morgen", "nur am Wochenende"], "r": 0, "anschluss": "Welche Begrüßung möchtest du ab heute ausprobieren?"}
 ],
 "merk": "Deutsch klingt in jeder Region anders. Wenn du jemanden nicht verstehst: freundlich nachfragen – fast alle können auch Hochdeutsch.",
 "tipp": "Wenn du „Moin“, „Servus“ oder „Grüezi“ sagst, freuen sich die Leute – das ist ein super Gesprächsanfang!",
 "anwenden": {"einstieg": ["Wie begrüßt man sich in deiner Stadt? Jeder zeigt es vor und erklärt: „Bei uns sagt man …“", "Welche deutsche Begrüßung möchtest du ab heute benutzen – Moin, Servus oder Grüezi? Warum?"], "dach": ["Welche Information war neu für dich? Jeder sagt: „Ich wusste nicht, dass …“", "Gibt es in deinem Land auch Wörter, die nur in einer Region benutzt werden? Erzähl ein Beispiel."], "karte": ["Wohin in DACH möchtest du gern reisen? Wie begrüßt du die Leute dort?", "Fragt euch gegenseitig: „Wie heißt das Brötchen in …?“ – wer weiß es ohne Karte?"], "situationen": ["Wo hörst du in deinem Alltag Dialekt – im Bus, bei der Arbeit, im Fernsehen?", "Sprichst du in deiner Muttersprache auch einen Dialekt? Wann und mit wem?"], "redemittel": ["Wann hast du jemanden zuletzt nicht verstanden? Was hast du gesagt? Benutzt ein Redemittel.", "Partner A sagt ein Dialektwort, Partner B fragt nach: „Was bedeutet …?“ – dann tauscht ihr."], "dialog": ["Spielt den Dialog beim Bäcker nach – aber in Hamburg oder in Wien. Was ändert sich?", "Was ist dir schon einmal beim Einkaufen in Deutschland passiert, weil du ein Wort nicht kanntest?"], "wassagen": ["Welche Situation war für dich am schwierigsten? Warum?", "Erzähl: Hat schon einmal jemand mit dir Dialekt gesprochen? Was hast du gemacht?"], "puzzle": ["Jeder nimmt einen Satz aus dem Puzzle und erzählt damit etwas Echtes aus seinem Leben."], "luecken": ["Lest den Dialog zu zweit und ändert ihn: anderer Ort, anderes Dialektwort."], "quiz": ["Welches Dialektwort findest du am lustigsten? Sag es laut und erkläre es den anderen.", "Bringt den anderen ein Wort aus eurer Muttersprache bei, das nur in einer Region benutzt wird."], "simulator": ["Welche Stadt aus der Reise möchtest du wirklich besuchen? Warum?", "Was machst du im echten Leben, wenn du einen Dialekt gar nicht verstehst?"]},
 "simulator": {
  "intro": "Ihr macht eine Reise durch Deutschland, Österreich und die Schweiz. Überall klingt Deutsch anders. Entscheidet zusammen!",
  "start": "s1",
  "szenen": {
   "s1": {"bild": "bilder/landeskunde/dialekte-sim-hamburg.webp", "text": "Hamburg, 18 Uhr. Ein Fischverkäufer sagt: „Moin! Wat darf’s sein?“ Was sagt ihr?", "optionen": [
    {"t": "„Moin! Zwei Fischbrötchen, bitte.“", "folge": "Er lacht: „Ihr lernt schnell!“", "punkte": 3, "next": "s2"},
    {"t": "„Es ist doch Abend, nicht Morgen!“", "folge": "Er erklärt freundlich: „Moin sagt man hier immer.“", "punkte": 1, "next": "s2"},
    {"t": "Ihr sagt nichts und zeigt auf den Fisch.", "folge": "Das klappt – aber ein Gespräch wäre schöner gewesen.", "punkte": 1, "next": "s2"}]},
   "s2": {"bild": "bilder/landeskunde/dialekte-sim-berlin.webp", "text": "Berlin, am Morgen. Ihr wollt Brötchen kaufen. Auf der Tafel stehen nur Bilder – die Verkäuferin fragt: „Schrippe?“", "optionen": [
    {"t": "„Ja, zwei Schrippen, bitte!“", "folge": "Richtig – Schrippe heißt in Berlin Brötchen.", "punkte": 3, "next": "s3"},
    {"t": "„Nein danke, ich möchte Brötchen.“", "folge": "Sie lacht: „Dit is’ dasselbe!“", "punkte": 1, "next": "s3"},
    {"t": "„Was bedeutet Schrippe?“", "folge": "Gute Idee: Nachfragen ist immer richtig. Jetzt wisst ihr es!", "punkte": 2, "next": "s3"}]},
   "s3": {"bild": "bilder/landeskunde/dialekte-sim-wien.webp", "text": "Wien. Im Café sagt der Kellner zum Abschied: „Servus!“ Was macht ihr?", "optionen": [
    {"t": "Ihr setzt euch wieder hin – er hat ja „Hallo“ gesagt.", "folge": "Er schaut verwirrt. „Servus“ heißt hier auch Tschüss!", "punkte": 0, "next": "s4"},
    {"t": "Ihr sagt auch „Servus!“ und geht.", "folge": "Perfekt! So verabschiedet man sich in Wien.", "punkte": 3, "next": "s4"},
    {"t": "Ihr sagt „Moin!“", "folge": "Er lacht: „Ah, aus dem Norden?“", "punkte": 1, "next": "s4"}]},
   "s4": {"bild": "bilder/landeskunde/dialekte-sim-zuerich.webp", "text": "Zürich. Eine Frau am Bahnhof sagt etwas auf Schweizerdeutsch. Ihr versteht kein Wort.", "optionen": [
    {"t": "„Entschuldigung, können Sie bitte Hochdeutsch sprechen?“", "folge": "Sie sagt: „Natürlich!“ und erklärt euch den Weg.", "punkte": 3, "next": "ende"},
    {"t": "Ihr nickt und lächelt.", "folge": "Sie wollte euch sagen, dass euer Zug auf Gleis 7 fährt … Ihr verpasst ihn fast.", "punkte": 0, "next": "ende"},
    {"t": "Ihr antwortet auf Englisch.", "folge": "Das geht auch – aber ihr wolltet doch Deutsch üben!", "punkte": 1, "next": "ende"}]}
  },
  "ende": [
   {"ab": 10, "text": "Super Reise! Ihr versteht die wichtigsten Wörter – und wisst, wie man nachfragt."},
   {"ab": 5, "text": "Gute Reise! Ein paar Wörter waren neu – jetzt kennt ihr sie."},
   {"ab": 0, "text": "Eine verwirrende Reise … Lest noch einmal die Begrüßungen – beim nächsten Mal klappt’s!"}
  ]
 }
});

stufe('dialekte','bb',{
 "titel": "Dialekte",
 "emoji": "🗣️",
 "bereich": "Landeskunde DACH",
 "intro": "Paradeiser, Velo, Schrippe – gleiche Sprache, andere Wörter. Und welcher Dialekt ist eigentlich am beliebtesten?",
 "einstieg": {
  "bild": "bilder/landeskunde/dialekte-einstieg.webp",
  "frage": "Baden-Württemberg wirbt seit Jahren mit einem frechen Spruch. Welcher ist es?",
  "o": ["„Wir können alles. Außer Hochdeutsch.“", "„Wir sprechen das beste Deutsch.“", "„Hier versteht dich jeder.“"],
  "r": 0,
  "aufloesung": "„Wir können alles. Außer Hochdeutsch.“ – mit diesem Spruch zeigt das Bundesland stolz und mit Humor seinen Dialekt."
 },
 "glossar": {
  "Klischee": {"e": "🎭", "t": "eine einfache, oft übertriebene Meinung über eine Gruppe, z. B.: „Alle Bayern trinken Bier.“"},
  "Schweizerdeutsch": {"e": "🇨🇭", "t": "die Dialekte in der deutschsprachigen Schweiz – im Alltag spricht man fast nur so."},
  "Österreichisch": {"e": "🇦🇹", "t": "das Deutsch in Österreich, mit eigenen Wörtern wie Jänner oder Paradeiser."}
 },
 "dach": [
  "Viele Wörter sind regional: Brötchen heißt Schrippe (Berlin), Semmel (Bayern, Österreich), Weckle (Schwaben) oder Weggli (Schweiz).",
  "Auf <g>Österreichisch</g> sagt man Jänner statt Januar, Paradeiser statt Tomate und Erdapfel statt Kartoffel.",
  "In der Schweiz sagt man Velo statt Fahrrad und oft „merci“ statt „danke“. Und: Im Schweizer Hochdeutsch gibt es kein ß.",
  "In <g>Schweizerdeutsch</g> sprechen in der Schweiz alle – vom Bauarbeiter bis zur Ministerin. Dialekt hat dort einen hohen Status.",
  "Über Dialekte gibt es viele Vorurteile. Ein typisches <g>Klischee</g>: Bairisch klingt gemütlich, Sächsisch klingt ungebildet – das ist natürlich unfair."
 ],
 "karte": {"titel": "Typische Wörter in DACH", "hinweis": "Punkte auf einer schlichten DACH-Karte (x/y in % der Kartenbreite/-höhe).", "punkte": [{"ort": "Hamburg", "x": 37, "y": 17, "gruss": "Moin", "broetchen": "Rundstück", "wort": "Moin moin = Hallo"}, {"ort": "Berlin", "x": 67, "y": 28, "gruss": "Tach", "broetchen": "Schrippe", "wort": "Pfannkuchen = Berliner"}, {"ort": "Köln", "x": 10, "y": 45, "gruss": "Tach", "broetchen": "Brötchen", "wort": "Tschö = Tschüss"}, {"ort": "Stuttgart", "x": 30, "y": 68, "gruss": "Grüß Gott", "broetchen": "Weckle", "wort": "schaffe = arbeiten"}, {"ort": "München", "x": 51, "y": 75, "gruss": "Servus", "broetchen": "Semmel", "wort": "Pfiat di = Tschüss"}, {"ort": "Wien", "x": 93, "y": 74, "gruss": "Servus", "broetchen": "Semmel", "wort": "Paradeiser = Tomate"}, {"ort": "Zürich", "x": 24, "y": 83, "gruss": "Grüezi", "broetchen": "Weggli", "wort": "Velo = Fahrrad"}]},
 "skala": {
  "titel": "Dialekt oder Hochdeutsch?",
  "legende": "Rot: Dialekt ist normal &nbsp; Gelb: kommt darauf an &nbsp; Grün: eher Hochdeutsch. Und wie ist das in eurem Land?"
 },
 "situationen": [
  {"o": "Meeting in Zürich", "bild": "bilder/landeskunde/dialekte-sim-schweiz.webp", "ic": "💼", "s": 3, "meter": 85, "w": "Dialekt normal", "t": "Auch im Büro spricht man Schweizerdeutsch – mit Gästen Hochdeutsch."},
  {"o": "Familienfeier in Bayern", "bild": "bilder/landeskunde/dialekte-sit-familie.webp", "ic": "👨‍👩‍👧", "s": 2, "meter": 60, "w": "kommt darauf an", "t": "Die Großeltern sprechen Bairisch, die Enkel oft weniger."},
  {"o": "Vorstellungsgespräch in Hamburg", "bild": "bilder/landeskunde/dialekte-sit-bewerbung.webp", "ic": "📋", "s": 1, "meter": 15, "w": "Hochdeutsch", "t": "Hier spricht man meistens Hochdeutsch."}
 ],
 "redemittel": [
  {"funktion": "Regionale Wörter erklären", "farbe": "gold", "items": [
   {"s": "<m>In Österreich sagt man dazu</m> Paradeiser.", "bsp": "Eine Tomate? In Österreich sagt man dazu Paradeiser."},
   {"s": "<m>Das ist ein anderes Wort für</m> Fahrrad.", "bsp": "„Velo“ ist ein anderes Wort für Fahrrad – so sagt man in der Schweiz."},
   {"s": "<m>Das sagt man vor allem im</m> Süden.", "bsp": "„Grüß Gott“ sagt man vor allem im Süden."},
   {"s": "<m>Bei uns im Norden heißt das</m> …", "bsp": "Bei uns im Norden heißt das einfach Brötchen."}
  ]},
  {"funktion": "Höflich um Hochdeutsch bitten", "farbe": "tuerkis", "items": [
   {"s": "<m>Könnten Sie vielleicht etwas langsamer sprechen</m>?", "bsp": "Könnten Sie vielleicht etwas langsamer sprechen? Ich lerne noch."},
   {"s": "<m>Würde es Ihnen etwas ausmachen</m>, Hochdeutsch zu sprechen?", "bsp": "Würde es Ihnen etwas ausmachen, Hochdeutsch zu sprechen? Den Dialekt verstehe ich noch nicht."},
   {"s": "<m>Ich habe nur die Hälfte verstanden</m>.", "bsp": "Entschuldigung, ich habe nur die Hälfte verstanden."},
   {"s": "<m>Meinten Sie</m> …?", "bsp": "Meinten Sie „Januar“? Sie haben „Jänner“ gesagt."}
  ]},
  {"funktion": "Meinung zu Dialekten sagen", "farbe": "rot", "items": [
   {"s": "<m>Für mich klingt</m> Schwäbisch sehr gemütlich.", "bsp": "Für mich klingt Schwäbisch sehr gemütlich."},
   {"s": "<m>Ich finde es schade, dass</m> …", "bsp": "Ich finde es schade, dass junge Leute weniger Dialekt sprechen."},
   {"s": "<m>Das ist doch nur ein Klischee</m>.", "bsp": "Alle Bayern tragen Lederhosen? Das ist doch nur ein Klischee."},
   {"s": "<m>Mir gefällt besonders</m> …", "bsp": "Mir gefällt besonders, wie melodisch Schweizerdeutsch klingt."}
  ]},
  {"funktion": "Vergleichen", "farbe": "lila", "items": [
   {"s": "<m>Bei uns ist das ähnlich</m>: …", "bsp": "Bei uns ist das ähnlich: Die Leute in der Hauptstadt sprechen anders als auf dem Land."},
   {"s": "<m>Im Unterschied zu</m> Deutschland …", "bsp": "Im Unterschied zu Deutschland gibt es bei uns kaum Dialekte."},
   {"s": "<m>Wenn ich Dialekt spreche, denken die Leute</m> …", "bsp": "Wenn ich Dialekt spreche, denken die Leute, ich komme vom Dorf."},
   {"s": "<m>Ein typisches Wort aus meiner Region ist</m> …", "bsp": "Ein typisches Wort aus meiner Region ist „yalla“ – das heißt „los, komm“."}
  ]}
 ],
 "dialog": {
  "situation": "Lukas aus Hamburg ist auf Geschäftsreise in Wien. Er bestellt im Restaurant.",
  "zeilen": [
   {"wer": "B", "t": "Grüß Gott! Was darf’s sein?"},
   {"wer": "A", "t": "Ich hätte gern einen Salat mit Tomaten."},
   {"wer": "B", "t": "Gern, einen Salat mit Paradeisern. Und als Hauptspeise? Wir haben heute Erdäpfel mit Fisch."},
   {"wer": "A", "t": "Erdäpfel? <m>Meinten Sie</m> Kartoffeln?"},
   {"wer": "B", "t": "Genau! <m>In Österreich sagt man dazu</m> Erdäpfel. Und Paradeiser sind Tomaten."},
   {"wer": "A", "t": "Ach so! <m>Bei uns im Norden heißt das</m> ganz anders. <m>Mir gefällt besonders</m> „Paradeiser“ – klingt nach Paradies."},
   {"wer": "B", "t": "(lacht) Das sagen viele Deutsche. Also: einmal Salat und einmal Fisch mit Erdäpfeln!"}
  ]
 },
 "wassagen": [
  {"bild": "bilder/landeskunde/dialekte-ws-email.webp", "situation": "Ein Kollege aus Wien schreibt: „Das Meeting ist am 15. Jänner.“ Welcher Monat ist das?", "o": ["Juni", "Januar", "Juli"], "r": 1, "warum": "In Österreich sagt man Jänner statt Januar."},
  {"bild": "bilder/landeskunde/dialekte-ws-velo.webp", "situation": "Eine Schweizerin sagt: „Ich komme mit dem Velo.“ Womit kommt sie?", "o": ["mit dem Auto", "mit dem Fahrrad", "mit dem Zug"], "r": 1, "warum": "„Velo“ ist das Schweizer Wort für Fahrrad."},
  {"bild": "bilder/landeskunde/dialekte-rp-schwaben.webp", "situation": "Du verstehst deinen neuen Chef in Stuttgart nur zur Hälfte. Was sagst du?", "o": ["„Sprechen Sie bitte normal!“", "„Würde es Ihnen etwas ausmachen, etwas langsamer zu sprechen?“", "Nichts – du nickst einfach."], "r": 1, "warum": "Höflich nachfragen ist besser als nicken und etwas falsch machen."},
  {"bild": "bilder/landeskunde/dialekte-sim-mittag.webp", "situation": "Jemand sagt: „Sachsen klingen dumm.“ Wie reagierst du?", "o": ["„Stimmt.“", "„Das ist doch nur ein Klischee.“", "„Alle Dialekte sind dumm.“"], "r": 1, "warum": "Ein Dialekt sagt nichts über die Intelligenz – das ist ein Vorurteil."},
  {"bild": "bilder/landeskunde/dialekte-ws-brief.webp", "situation": "Du schreibst einen Brief in der Schweiz. Wie schreibst du „Straße“?", "o": ["Straße", "Strasse", "Strase"], "r": 1, "warum": "In der Schweiz gibt es kein ß – man schreibt ss."}
 ],
 "puzzle": [
  ["In Österreich", "sagt man dazu Paradeiser."],
  ["Das ist ein anderes Wort", "für Fahrrad."],
  ["Würde es Ihnen etwas ausmachen,", "Hochdeutsch zu sprechen?"],
  ["Ich habe nur", "die Hälfte verstanden."],
  ["Das ist doch", "nur ein Klischee."],
  ["Im Unterschied zu Deutschland", "gibt es bei uns kaum Dialekte."]
 ],
 "luecken": {
  "zeilen": [
   {"wer": "B", "t": "Wir haben heute Erdäpfel mit Fisch. – ___ Sie Kartoffeln?", "loes": "Meinten"},
   {"wer": "B", "t": "Genau! In Österreich sagt man ___ Erdäpfel.", "loes": "dazu"},
   {"wer": "A", "t": "Bei uns im Norden ___ das ganz anders.", "loes": "heißt"},
   {"wer": "A", "t": "Ich habe leider nur die ___ verstanden.", "loes": "Hälfte"},
   {"wer": "B", "t": "Kein Problem! Das ist ein anderes Wort ___ Tomate.", "loes": "für"}
  ],
  "woerter": ["Meinten", "dazu", "heißt", "Hälfte", "für"]
 },
 "rollen": [
  {"titel": "Im Wiener Restaurant", "bild": "bilder/landeskunde/dialekte-rp-wien.webp",
   "a": "Du bist aus Deutschland und bestellst in Wien. Du kennst die österreichischen Wörter nicht.",
   "b": "Du bist Kellner in Wien. Benutze Paradeiser, Erdäpfel und Schlagobers (= Sahne). Erkläre, wenn nötig.",
   "ziel": "A bestellt ein Menü und lernt drei österreichische Wörter.",
   "hilfe": ["Meinten Sie …?", "Was ist denn …?", "In Österreich sagt man dazu …", "Das ist ein anderes Wort für …"],
   "beispiel": [
    {"wer": "B", "t": "Grüß Gott! Zum Kaffee vielleicht einen Apfelstrudel mit Schlagobers?"},
    {"wer": "A", "t": "Gern! Aber was ist denn Schlagobers?"},
    {"wer": "B", "t": "Das ist ein anderes Wort für Sahne – in Österreich sagt man dazu Schlagobers."},
    {"wer": "A", "t": "Ah, dann bitte mit viel Schlagobers!"}
   ]},
  {"titel": "Der neue Chef spricht Schwäbisch", "bild": "bilder/landeskunde/dialekte-rp-schwaben.webp",
   "a": "Erster Tag in Stuttgart. Dein Chef spricht Schwäbisch, du verstehst wenig. Frag höflich nach.",
   "b": "Du bist der Chef und sprichst gern Schwäbisch („schaffe“ = arbeiten, „Häusle“ = Haus). Du bist freundlich.",
   "ziel": "A versteht die wichtigsten Infos für den ersten Tag.",
   "hilfe": ["Ich habe nur die Hälfte verstanden.", "Würde es Ihnen etwas ausmachen …?", "Was bedeutet „schaffe“?", "Bei uns ist das ähnlich."],
   "beispiel": [
    {"wer": "B", "t": "So, heut schaffe mer zusamme im Büro!"},
    {"wer": "A", "t": "Entschuldigung, ich habe nur die Hälfte verstanden. Was bedeutet „schaffe“?"},
    {"wer": "B", "t": "Ah, „arbeiten“! Heute arbeiten wir zusammen im Büro."},
    {"wer": "A", "t": "Danke! Würde es Ihnen etwas ausmachen, am Anfang etwas langsamer zu sprechen?"},
    {"wer": "B", "t": "Gar ned – also: gar nicht!"}
   ]},
  {"titel": "Klischee-Alarm", "bild": "bilder/landeskunde/dialekte-rp-klischee.webp",
   "a": "Du erzählst Klischees über Dialekte („Bayern trinken nur Bier“, „Sächsisch klingt doof“).",
   "b": "Du widersprichst freundlich, aber klar. Du kommst aus Sachsen.",
   "ziel": "Am Ende sieht A ein, dass es Klischees sind.",
   "hilfe": ["Das ist doch nur ein Klischee.", "Ich finde es schade, dass …", "Für mich klingt …", "Wenn ich Dialekt spreche, denken die Leute …"],
   "beispiel": [
    {"wer": "A", "t": "Sächsisch klingt irgendwie lustig, findest du nicht?"},
    {"wer": "B", "t": "Ich komme aus Leipzig! Wenn ich Dialekt spreche, denken die Leute oft, ich bin nicht so schlau."},
    {"wer": "A", "t": "Oh, das tut mir leid. Das ist natürlich nur ein Klischee."},
    {"wer": "B", "t": "Genau. Und Bayern trinken auch nicht nur Bier!"}
   ]},
  {"titel": "Wörter-Tausch", "bild": "bilder/landeskunde/dialekte-rp-woerter.webp",
   "a": "Du kommst aus Berlin. Erkläre deine Wörter: Schrippe, Pfannkuchen (= Berliner), „icke“ (= ich).",
   "b": "Du kommst aus Zürich. Erkläre deine Wörter: Velo, Weggli, „merci“.",
   "ziel": "Jeder lernt drei neue Wörter. Wer kann sie am Ende richtig benutzen?",
   "hilfe": ["Bei uns heißt das …", "Das ist ein anderes Wort für …", "Das sagt man vor allem …", "Mir gefällt besonders …"],
   "beispiel": [
    {"wer": "A", "t": "Bei uns in Berlin heißt das Brötchen Schrippe."},
    {"wer": "B", "t": "Lustig! Bei uns heißt ein kleines Brötchen Weggli."},
    {"wer": "A", "t": "Und was ist ein Velo?"},
    {"wer": "B", "t": "Das ist ein anderes Wort für Fahrrad. Ich fahre jeden Tag mit dem Velo zur Arbeit."}
   ]}
 ],
 "fragen": [
  {"q": "Welcher deutsche Dialekt gefällt dir – und welcher nicht?", "folge": ["Warum?", "Hast du schon mal versucht, ihn nachzumachen?"], "antw": ["Für mich klingt Schweizerdeutsch sehr melodisch.", "Bairisch finde ich gemütlich, aber schwer zu verstehen.", "Ehrlich gesagt verstehe ich noch keinen Dialekt."]},
  {"q": "Sollte man beim Deutschlernen auch einen Dialekt lernen?", "folge": ["Wann wäre das sinnvoll?", "Welchen würdest du wählen?"], "antw": ["Wenn man in Bayern lebt, hilft es sehr.", "Ich finde, zuerst Hochdeutsch, dann ein paar Wörter.", "Ich möchte gern Schweizerdeutsch verstehen, weil ich in Zürich arbeite."]},
  {"q": "Wie werden Dialekte in deinem Land gesehen?", "folge": ["Gibt es einen Dialekt mit schlechtem Ruf?", "Spricht man im Beruf Dialekt?"], "antw": ["Bei uns ist das ähnlich: Ein Dialekt hat einen schlechten Ruf.", "Im Unterschied zu Deutschland spricht man bei uns auch im Fernsehen Dialekt.", "Wenn ich Dialekt spreche, denken die Leute, ich komme vom Land."]}
 ],
 "challenge": [
  {"frage": "Erkläre drei Wörter, die in Deutschland, Österreich und der Schweiz verschieden sind.", "hilfe": ["Brötchen", "Tomate", "Fahrrad", "In … sagt man dazu …"]},
  {"frage": "Erzähl von einem Missverständnis wegen eines Dialekts oder eines regionalen Wortes.", "hilfe": ["verstehen", "meinten Sie", "lustig", "peinlich"]},
  {"frage": "Gibt es in deinem Land einen Dialekt mit einem Klischee? Erkläre es.", "hilfe": ["Klischee", "Ruf", "unfair", "Wenn ich … spreche"]}
 ],
 "quiz": [
  {"q": "Was ist ein Paradeiser?", "o": ["eine Tomate", "ein Paradies", "eine Kartoffel"], "r": 0, "anschluss": "Welches Gemüse isst du am liebsten?"},
  {"q": "Wie heißt der Januar in Österreich?", "o": ["Jänner", "Jenner", "Januari"], "r": 0, "anschluss": "Was machst du gern im Januar?"},
  {"q": "Was gibt es im Schweizer Hochdeutsch nicht?", "o": ["das ß", "das ü", "das Wort „Velo“"], "r": 0, "anschluss": "Welcher deutsche Buchstabe ist für dich am schwierigsten?"},
  {"q": "Welcher Satz bittet am höflichsten um Hochdeutsch?", "o": ["„Würde es Ihnen etwas ausmachen, Hochdeutsch zu sprechen?“", "„Sprechen Sie richtig!“", "„Was?“"], "r": 0, "anschluss": "Wann hast du zuletzt jemanden gebeten, langsamer zu sprechen?"},
  {"q": "„Wir können alles. Außer Hochdeutsch.“ – Welches Bundesland wirbt so?", "o": ["Baden-Württemberg", "Hamburg", "Berlin"], "r": 0, "anschluss": "Mit welchem Spruch würdest du für deine Heimat werben?"}
 ],
 "merk": "Deutsch hat viele regionale Wörter – in Österreich und der Schweiz sogar eigene Standardwörter. Wer höflich nachfragt, lernt schnell dazu.",
 "tipp": "Lerne für deine Region drei typische Wörter (z. B. Semmel, Servus, Grüß Gott) – damit gewinnst du sofort Sympathie.",
 "anwenden": {"einstieg": ["Wie würdest du deine Heimatregion mit einem frechen Spruch bewerben – wie „Wir können alles. Außer Hochdeutsch.“?", "Gibt es in deinem Land einen Dialekt, auf den die Leute stolz sind? Erzähl."], "dach": ["Welche österreichischen oder Schweizer Wörter kanntest du schon? Woher?", "Welche Klischees über Regionen gibt es in deinem Land? Sind sie fair?"], "karte": ["Wählt ein Wort von der Karte und benutzt es in einem eigenen Satz.", "Welche Region in DACH kennst du schon? Was ist dort typisch – außer der Sprache?"], "situationen": ["Würdest du in einem Vorstellungsgespräch Dialekt sprechen? Warum (nicht)?", "In welchen Situationen sprichst du selbst anders – bei der Familie, bei der Arbeit, mit Freunden?"], "redemittel": ["Erklärt euch gegenseitig ein Wort aus eurer Muttersprache mit „Das ist ein anderes Wort für …“.", "Sagt eure Meinung zu einem Dialekt, den ihr kennt: „Für mich klingt … – mir gefällt besonders …“"], "dialog": ["Spielt die Szene im Restaurant nach – diesmal in Zürich mit Schweizer Wörtern.", "Welches Missverständnis wegen eines Wortes hast du schon erlebt – auf Deutsch oder in einer anderen Sprache?"], "wassagen": ["Wie reagierst du, wenn jemand ein Klischee über deine Herkunft sagt?", "Welche Antwort hat dich überrascht? Diskutiert kurz."], "puzzle": ["Jeder wählt einen Satz und erzählt damit eine echte Geschichte – die anderen stellen eine Frage."], "luecken": ["Lest den Dialog zu zweit und ersetzt die österreichischen Wörter durch Wörter aus eurer Region."], "quiz": ["Welches regionale Wort möchtest du dir merken? Benutze es in einem Satz.", "Stellt euch gegenseitig eine eigene Quizfrage zu Wörtern aus eurem Land."], "simulator": ["Wie hättest du auf den Witz über Sachsen reagiert – ehrlich?", "Was würdest du einer Freundin raten, die in Stuttgart oder Zürich neu anfängt?"]},
 "simulator": {
  "intro": "Ihr zieht für einen neuen Job nach Stuttgart – und habt viele Termine in Wien und Zürich. Jede Entscheidung hat Folgen. Diskutiert und einigt euch!",
  "start": "s1",
  "szenen": {
   "s1": {"bild": "bilder/landeskunde/dialekte-sim-stuttgart.webp", "text": "Erster Arbeitstag in Stuttgart. Der Teamleiter sagt: „Grüß Gott! Heut schaffe mer am neue Projekt.“ Ihr versteht nur die Hälfte.", "optionen": [
    {"t": "„Entschuldigung, ich habe nur die Hälfte verstanden. Was bedeutet „schaffe“?“", "folge": "Er lacht: „Arbeiten! Gut, dass Sie fragen.“", "punkte": 3, "next": "s2"},
    {"t": "Ihr nickt und lächelt.", "folge": "Später merkt ihr: Ihr habt eine wichtige Aufgabe nicht verstanden.", "punkte": 0, "next": "s2"},
    {"t": "„Bitte sprechen Sie normales Deutsch.“", "folge": "Er schaut kurz beleidigt. „Normal“ ist für ihn Schwäbisch …", "punkte": 1, "next": "s2"}]},
   "s2": {"bild": "bilder/landeskunde/dialekte-sim-mittag.webp", "text": "Mittagspause. Ein Kollege macht einen Witz über Sachsen und ihren Dialekt. Eine Kollegin aus Dresden wird still.", "optionen": [
    {"t": "„Das ist doch nur ein Klischee. Ich finde Sächsisch übrigens sympathisch.“", "folge": "Die Kollegin lächelt dankbar. Der Kollege sagt: „Stimmt, war nicht so gemeint.“", "punkte": 3, "next": "s3"},
    {"t": "Ihr lacht mit.", "folge": "Die Kollegin geht früher zurück an ihren Platz.", "punkte": 0, "next": "s3"},
    {"t": "Ihr wechselt schnell das Thema.", "folge": "Die Situation ist vorbei – aber nicht wirklich gelöst.", "punkte": 1, "next": "s3"}]},
   "s3": {"bild": "bilder/landeskunde/dialekte-sim-wien.webp", "text": "Geschäftsessen in Wien. Der Kunde empfiehlt: „Nehmen Sie den Tafelspitz mit Erdäpfeln und zum Dessert Palatschinken mit Schlagobers!“", "optionen": [
    {"t": "„Klingt gut! Meinten Sie mit Schlagobers Sahne?“", "folge": "Der Kunde freut sich über euer Interesse. Gute Stimmung!", "punkte": 3, "next": "s4"},
    {"t": "„Bei uns sagt man aber Kartoffeln und Sahne.“", "folge": "Der Kunde antwortet kühl: „Wir sind hier in Österreich.“", "punkte": 0, "next": "s4"},
    {"t": "Ihr bestellt einfach, ohne zu fragen.", "folge": "Das Essen schmeckt – aber eine Chance für Smalltalk ist weg.", "punkte": 1, "next": "s4"}]},
   "s4": {"bild": "bilder/landeskunde/dialekte-sim-zuerich.webp", "text": "Meeting in Zürich. Die Schweizer Kollegen sprechen untereinander Schweizerdeutsch. Ihr versteht wenig.", "optionen": [
    {"t": "„Würde es Ihnen etwas ausmachen, Hochdeutsch zu sprechen, damit ich alles verstehe?“", "folge": "„Selbstverständlich!“ Alle wechseln sofort – das ist in der Schweiz ganz normal.", "punkte": 3, "next": "ende"},
    {"t": "Ihr sagt nichts und fragt später per E-Mail.", "folge": "Es klappt, aber ihr habt im Meeting nichts beigetragen.", "punkte": 1, "next": "ende"},
    {"t": "Ihr sprecht ab jetzt Englisch.", "folge": "Möglich – aber die Kollegen wundern sich: Ihr sprecht doch Deutsch.", "punkte": 1, "next": "ende"}]}
  },
  "ende": [
   {"ab": 10, "text": "Großartig! Ihr fragt höflich nach, kennt regionale Wörter und lasst Klischees nicht einfach stehen."},
   {"ab": 5, "text": "Gut gemacht! Mit ein bisschen mehr Mut zum Nachfragen klappt es noch besser."},
   {"ab": 0, "text": "Ein schwieriger Start … Übt die Redemittel zum höflichen Nachfragen – dann wird es leichter."}
  ]
 }
});

stufe('dialekte','bc',{
 "titel": "Dialekte",
 "emoji": "🗣️",
 "bereich": "Landeskunde DACH",
 "intro": "Heimat, Identität oder Karrierebremse? Wir diskutieren, was Dialekte über Menschen verraten – und warum Deutsch nicht nur eine Standardsprache hat.",
 "einstieg": {
  "bild": "bilder/landeskunde/dialekte-einstieg.webp",
  "frage": "Österreichisches Deutsch – ist das ein Dialekt?",
  "o": ["Ja, ein Dialekt des „richtigen“ Deutsch.", "Nein, es ist eine eigene Standardvarietät – genauso korrekt wie das Deutsch in Deutschland.", "Nein, es ist eine eigene Sprache."],
  "r": 1,
  "aufloesung": "Deutsch ist eine plurizentrische Sprache: Es gibt ein deutsches, ein österreichisches und ein Schweizer Standarddeutsch. „Jänner“ ist also kein Fehler, sondern korrektes Standarddeutsch in Österreich."
 },
 "glossar": {
  "plurizentrisch": {"e": "🎯", "t": "eine Sprache mit mehreren gleichberechtigten Standards, z. B. Deutsch, Englisch oder Spanisch."},
  "Diglossie": {"e": "🔀", "t": "zwei Sprachformen mit klar getrennten Rollen – in der Schweiz: Dialekt zum Sprechen, Hochdeutsch zum Schreiben."},
  "Prestige": {"e": "👑", "t": "das Ansehen, das etwas in der Gesellschaft hat."}
 },
 "dach": [
  "Deutsch ist <g>plurizentrisch</g>: Deutschland, Österreich und die Schweiz haben jeweils ihr eigenes Standarddeutsch mit eigenen Wörtern und Regeln.",
  "In der Deutschschweiz herrscht <g>Diglossie</g>: Gesprochen wird fast immer Dialekt – auch im Parlament oder im Büro –, geschrieben wird Standarddeutsch.",
  "In Deutschland hat Dialekt je nach Region ein sehr unterschiedliches <g>Prestige</g>: In Bayern ist er oft ein Zeichen von Heimatstolz, anderswo wird er eher versteckt.",
  "Untersuchungen deuten darauf hin, dass Menschen mit bestimmten Dialekten in Bewerbungsgesprächen manchmal schlechter bewertet werden – ein Vorurteil, über das man selten spricht.",
  "Viele Dialekte verlieren Sprecher, weil junge Menschen mobiler sind und Medien vor allem Standarddeutsch verwenden. Gleichzeitig erleben Dialekte in Musik und Social Media ein Comeback."
 ],
 "skala": {
  "titel": "Welches Prestige hat Dialekt?",
  "legende": "Rot: Dialekt = Identität und Stolz &nbsp; Gelb: gemischt &nbsp; Grün: Dialekt wird eher versteckt. Und wie ist das in eurem Land?"
 },
 "situationen": [
  {"o": "Deutschschweiz", "bild": "bilder/landeskunde/dialekte-rp-schweiz.webp", "ic": "🇨🇭", "s": 3, "meter": 95, "w": "Identität", "t": "Dialekt spricht man überall – er verbindet alle Schichten."},
  {"o": "Bayern & Österreich", "bild": "bilder/landeskunde/dialekte-sit-bayern.webp", "ic": "⛰️", "s": 2, "meter": 60, "w": "Stolz mit Grenzen", "t": "Im Alltag beliebt, in manchen Berufen wird umgeschaltet."},
  {"o": "Karriere in Großstädten", "bild": "bilder/landeskunde/dialekte-sit-grossstadt.webp", "ic": "🏙️", "s": 1, "meter": 25, "w": "eher versteckt", "t": "Viele glätten ihren Dialekt im Beruf – aus Angst vor Vorurteilen."}
 ],
 "redemittel": [
  {"funktion": "Differenziert argumentieren", "farbe": "gold", "items": [
   {"s": "<m>Man muss hier unterscheiden zwischen</m> … <m>und</m> …", "bsp": "Man muss hier unterscheiden zwischen einem Dialekt und einem Akzent."},
   {"s": "<m>Das lässt sich nicht pauschal beantworten</m>.", "bsp": "Ob Dialekt im Beruf schadet, lässt sich nicht pauschal beantworten."},
   {"s": "<m>Studien deuten darauf hin, dass</m> …", "bsp": "Studien deuten darauf hin, dass manche Dialekte mit Vorurteilen verbunden sind."},
   {"s": "<m>Unterm Strich</m> …", "bsp": "Unterm Strich ist Dialekt für mich eher eine Bereicherung als ein Nachteil."}
  ]},
  {"funktion": "Vorurteile ansprechen", "farbe": "rot", "items": [
   {"s": "<m>Dahinter steckt oft ein unbewusstes Vorurteil</m>.", "bsp": "Wenn Sächsisch belächelt wird, steckt dahinter oft ein unbewusstes Vorurteil."},
   {"s": "<m>Das sagt mehr über den Zuhörer aus als über den Sprecher</m>.", "bsp": "Wer Dialekt mit Dummheit verbindet – das sagt mehr über den Zuhörer aus als über den Sprecher."},
   {"s": "<m>Ich halte das für problematisch, weil</m> …", "bsp": "Ich halte das für problematisch, weil Menschen nach ihrer Herkunft beurteilt werden."},
   {"s": "<m>Man sollte nicht vergessen, dass</m> …", "bsp": "Man sollte nicht vergessen, dass auch Hochdeutsch einmal ein Dialekt war."}
  ]},
  {"funktion": "Über Identität sprechen", "farbe": "tuerkis", "items": [
   {"s": "<m>Für viele ist Dialekt ein Stück Heimat</m>.", "bsp": "Für viele ist Dialekt ein Stück Heimat, das sie nicht verlieren wollen."},
   {"s": "<m>Ich fühle mich</m> … <m>wenn ich</m> …", "bsp": "Ich fühle mich sofort zu Hause, wenn ich meinen Dialekt höre."},
   {"s": "<m>Je nach Situation wechsle ich</m> …", "bsp": "Je nach Situation wechsle ich zwischen Dialekt und Standardsprache."},
   {"s": "<m>Das gehört zu meiner Identität</m>.", "bsp": "Mein Akzent gehört zu meiner Identität – ich will ihn nicht verstecken."}
  ]},
  {"funktion": "Kulturen vergleichen", "farbe": "lila", "items": [
   {"s": "<m>In meinem Herkunftsland ist das genau umgekehrt</m>.", "bsp": "In meinem Herkunftsland ist das genau umgekehrt: Dialekt hat dort ein hohes Prestige."},
   {"s": "<m>Das erinnert mich an</m> …", "bsp": "Die Schweizer Diglossie erinnert mich an die Situation im Arabischen."},
   {"s": "<m>Im Gegensatz dazu</m> …", "bsp": "Im Gegensatz dazu spricht man bei uns im Fernsehen ganz selbstverständlich Dialekt."},
   {"s": "<m>Ich würde das nicht pauschalisieren</m>.", "bsp": "Ich würde das nicht pauschalisieren – auch in Bayern sprechen viele junge Leute kaum Dialekt."}
  ]}
 ],
 "dialog": {
  "situation": "Nach einem Vorstellungsgespräch in Frankfurt sprechen zwei Bewerber im Café.",
  "zeilen": [
   {"wer": "A", "t": "Ich hatte das Gefühl, der Personaler hat bei meinem Sächsisch kurz die Augenbrauen hochgezogen."},
   {"wer": "B", "t": "Echt? <m>Studien deuten darauf hin, dass</m> so etwas tatsächlich passiert."},
   {"wer": "A", "t": "<m>Ich halte das für problematisch, weil</m> es ja nichts über meine Kompetenz sagt."},
   {"wer": "B", "t": "Genau. <m>Das sagt mehr über den Zuhörer aus als über den Sprecher</m>. Versteckst du deinen Dialekt sonst?"},
   {"wer": "A", "t": "<m>Je nach Situation wechsle ich</m>. Aber eigentlich <m>gehört</m> er <m>zu meiner Identität</m>."},
   {"wer": "B", "t": "<m>In meinem Herkunftsland ist das genau umgekehrt</m>: Dort wirkt man mit Dialekt sympathisch und bodenständig."},
   {"wer": "A", "t": "Spannend. <m>Unterm Strich</m> wünsche ich mir einfach, dass man nach dem Inhalt beurteilt wird."}
  ]
 },
 "wassagen": [
  {"bild": "bilder/landeskunde/dialekte-rp-wien.webp", "situation": "Ein Freund sagt: „Österreicher sprechen falsches Deutsch.“ Wie antwortest du sachlich?", "o": ["„Stimmt, „Jänner“ ist ein Fehler.“", "„Deutsch ist plurizentrisch – das österreichische Standarddeutsch ist genauso korrekt.“", "„Österreicher sprechen gar kein Deutsch.“"], "r": 1, "warum": "Es gibt mehrere gleichberechtigte Standards des Deutschen."},
  {"bild": "bilder/landeskunde/dialekte-rp-schweiz.webp", "situation": "Wie nennt man die Situation in der Deutschschweiz: Dialekt sprechen, Hochdeutsch schreiben?", "o": ["Diglossie", "Dialektik", "Bilingualismus"], "r": 0, "warum": "Diglossie = zwei Sprachformen mit getrennten Rollen."},
  {"bild": "bilder/landeskunde/dialekte-ws-kollegin.webp", "situation": "Eine Kollegin versteckt im Job ihren Dialekt. Wie sprichst du das an?", "o": ["„Warum sprichst du so komisch normal?“", "„Mir ist aufgefallen, dass du privat ganz anders sprichst – ist das eine bewusste Entscheidung?“", "Gar nicht, das ist peinlich."], "r": 1, "warum": "Eine offene Frage ohne Wertung lädt zum Gespräch ein."},
  {"bild": "bilder/landeskunde/dialekte-rp-klischee.webp", "situation": "Jemand meint: „Dialekt ist einfach schlechtes Deutsch.“ Welches Argument passt am besten dagegen?", "o": ["„Auch Hochdeutsch hat sich aus Dialekten entwickelt.“", "„Hochdeutsch ist hässlich.“", "„Dialekte sind lauter.“"], "r": 0, "warum": "Das Standarddeutsch ist historisch aus verschiedenen Dialekten entstanden."},
  {"bild": "bilder/landeskunde/dialekte-rp-vergleich.webp", "situation": "Was ist der Unterschied zwischen Dialekt und Akzent?", "o": ["Ein Dialekt hat eigene Wörter und Grammatik, ein Akzent betrifft vor allem die Aussprache.", "Es gibt keinen Unterschied.", "Ein Akzent ist immer ausländisch."], "r": 0, "warum": "Dialekt = eigene Sprachform; Akzent = Klangfärbung der Aussprache."}
 ],
 "puzzle": [
  ["Man muss hier unterscheiden", "zwischen Dialekt und Akzent."],
  ["Das lässt sich", "nicht pauschal beantworten."],
  ["Dahinter steckt oft", "ein unbewusstes Vorurteil."],
  ["Für viele ist Dialekt", "ein Stück Heimat."],
  ["Je nach Situation wechsle ich", "zwischen Dialekt und Standardsprache."],
  ["In meinem Herkunftsland", "ist das genau umgekehrt."]
 ],
 "luecken": {
  "zeilen": [
   {"wer": "B", "t": "Studien ___ darauf hin, dass so etwas tatsächlich passiert.", "loes": "deuten"},
   {"wer": "A", "t": "Ich halte das für ___, weil es nichts über meine Kompetenz sagt.", "loes": "problematisch"},
   {"wer": "B", "t": "Das sagt mehr über den ___ aus als über den Sprecher.", "loes": "Zuhörer"},
   {"wer": "A", "t": "Je nach Situation ___ ich zwischen Dialekt und Hochdeutsch.", "loes": "wechsle"},
   {"wer": "B", "t": "In meinem Herkunftsland ist das genau ___.", "loes": "umgekehrt"}
  ],
  "woerter": ["deuten", "problematisch", "Zuhörer", "wechsle", "umgekehrt"]
 },
 "rollen": [
  {"titel": "Dialekt im Vorstellungsgespräch", "bild": "bilder/landeskunde/dialekte-rp-bewerbung.webp",
   "a": "Du bewirbst dich als Moderatorin beim Radio und sprichst starken Dialekt. Verteidige deinen Dialekt als Stärke.",
   "b": "Du leitest den Sender. Du hast Bedenken: Versteht das Publikum im ganzen Land sie?",
   "ziel": "Findet eine Lösung, mit der beide leben können.",
   "hilfe": ["Das gehört zu meiner Identität.", "Das lässt sich nicht pauschal beantworten.", "Je nach Situation wechsle ich …", "Unterm Strich …"],
   "beispiel": [
    {"wer": "B", "t": "Ihr Dialekt ist sympathisch, aber versteht man Sie auch in Hamburg?"},
    {"wer": "A", "t": "Das lässt sich nicht pauschal beantworten. Je nach Sendung wechsle ich – Nachrichten auf Hochdeutsch, die Morgenshow mit Dialekt."},
    {"wer": "B", "t": "Interessant. Das könnte sogar ein Markenzeichen werden."},
    {"wer": "A", "t": "Genau. Unterm Strich hören die Leute lieber einen echten Menschen als eine glatte Stimme."}
   ]},
  {"titel": "Dialekt in der Schule?", "bild": "bilder/landeskunde/dialekte-rp-schule.webp",
   "a": "Du bist Lehrer in Bayern und möchtest Dialekt im Unterricht fördern (Lieder, Geschichten).",
   "b": "Du bist Vater eines Kindes, das gerade erst Deutsch lernt. Du hast Bedenken.",
   "ziel": "Findet einen Kompromiss.",
   "hilfe": ["Für viele ist Dialekt ein Stück Heimat.", "Man sollte nicht vergessen, dass …", "Ich halte das für problematisch, weil …", "Was halten Sie von …?"],
   "beispiel": [
    {"wer": "A", "t": "Für viele Kinder hier ist Dialekt ein Stück Heimat. Ich möchte das nicht verlieren."},
    {"wer": "B", "t": "Verstehe ich. Aber man sollte nicht vergessen, dass mein Sohn erst seit einem Jahr Deutsch lernt."},
    {"wer": "A", "t": "Was halten Sie davon: Unterricht auf Hochdeutsch, aber einmal im Monat ein Dialekt-Projekt?"},
    {"wer": "B", "t": "Damit kann ich gut leben – das ist sogar spannend."}
   ]},
  {"titel": "Die Schweizer Diglossie", "bild": "bilder/landeskunde/dialekte-rp-schweiz.webp",
   "a": "Du lebst in Bern und erklärst einem neuen Kollegen, warum alle Dialekt sprechen, aber Hochdeutsch schreiben.",
   "b": "Du bist neu und findest das anstrengend. Stell kritische Fragen und vergleiche mit deiner Heimat.",
   "ziel": "B versteht das System – und ihr findet Parallelen zu anderen Sprachen.",
   "hilfe": ["Man muss hier unterscheiden zwischen …", "Das erinnert mich an …", "Im Gegensatz dazu …", "Dahinter steckt …"],
   "beispiel": [
    {"wer": "B", "t": "Warum sprechen hier alle Dialekt, schreiben aber Hochdeutsch? Das ist doch kompliziert."},
    {"wer": "A", "t": "Man muss unterscheiden zwischen Sprechen und Schreiben. Dialekt ist bei uns die Sprache der Nähe, Hochdeutsch die der Schrift."},
    {"wer": "B", "t": "Das erinnert mich an das Arabische: Zu Hause Dialekt, in der Zeitung Hocharabisch."},
    {"wer": "A", "t": "Genau so! Dann kennst du das Prinzip schon."}
   ]},
  {"titel": "Stirbt der Dialekt aus?", "bild": "bilder/landeskunde/dialekte-rp-generationen.webp",
   "a": "Du bist Großmutter und traurig, dass deine Enkel kaum noch Dialekt sprechen.",
   "b": "Du bist der Enkel. Für dich ist Hochdeutsch praktischer – aber Dialekt-Rap findest du cool.",
   "ziel": "Findet heraus, wie der Dialekt in der Familie weiterleben könnte.",
   "hilfe": ["Ich fühle mich … wenn ich …", "Für viele ist Dialekt …", "Ich würde das nicht pauschalisieren.", "Unterm Strich …"],
   "beispiel": [
    {"wer": "A", "t": "Ich fühle mich ein bisschen traurig, wenn ich höre, dass ihr nur noch Hochdeutsch sprecht."},
    {"wer": "B", "t": "Ich würde das nicht pauschalisieren, Oma – ich höre sogar Rap auf Bairisch!"},
    {"wer": "A", "t": "Wirklich? Dann bring mir das mal bei!"},
    {"wer": "B", "t": "Und du mir die alten Wörter. Unterm Strich lernen wir beide was."}
   ]}
 ],
 "fragen": [
  {"q": "Sollte man seinen Dialekt im Beruf ablegen?", "folge": ["In welchen Berufen ist Dialekt ein Vorteil?", "Hast du selbst schon mal deine Sprache angepasst?"], "antw": ["Das lässt sich nicht pauschal beantworten – im Handwerk ist Dialekt oft ein Plus.", "Ich halte es für problematisch, wenn Menschen sich verstellen müssen.", "Je nach Situation wechsle ich auch zwischen verschiedenen Sprechweisen."]},
  {"q": "Ist Dialekt Heimat – oder Abgrenzung?", "folge": ["Kann Dialekt auch ausschließen?", "Wie fühlen sich Zugezogene dabei?"], "antw": ["Für viele ist Dialekt ein Stück Heimat.", "Man sollte nicht vergessen, dass Dialekt Neue auch ausschließen kann.", "Unterm Strich hängt es davon ab, wie offen die Leute sind."]},
  {"q": "Wie ist das Verhältnis von Dialekt und Standardsprache in deinem Land?", "folge": ["Gibt es eine Diglossie wie in der Schweiz?", "Welcher Dialekt hat das höchste Prestige?"], "antw": ["In meinem Herkunftsland ist das genau umgekehrt.", "Das erinnert mich an die Schweiz: Wir sprechen anders, als wir schreiben.", "Im Gegensatz dazu gibt es bei uns kaum Dialekte."]}
 ],
 "debatte": {
  "these": "Dialekte sollten in Schulen aktiv gefördert werden.",
  "pro": ["Dialekte sind kulturelles Erbe und Teil der regionalen Identität.", "Kinder, die Dialekt und Standardsprache sprechen, wachsen quasi zweisprachig auf.", "Wer früh lernt, Dialekte zu schätzen, hat später weniger Vorurteile."],
  "contra": ["Schule muss allen Kindern gute Chancen geben – dafür braucht man Standarddeutsch.", "Kinder mit anderer Muttersprache werden zusätzlich belastet.", "Sprache verändert sich natürlich; man kann Dialekte nicht künstlich am Leben halten."]
 },
 "challenge": [
  {"frage": "Dialekt: Heimat oder Karrierebremse? Wäge ab und komm zu einem Fazit.", "hilfe": ["Prestige", "Vorurteil", "Identität", "unterm Strich"]},
  {"frage": "Erkläre, was „plurizentrisch“ bedeutet – mit Beispielen aus DACH und einer anderen Sprache.", "hilfe": ["Standardvarietät", "Jänner", "gleichberechtigt", "Englisch/Spanisch"]},
  {"frage": "Erzähl von einer Situation, in der du deine Sprechweise bewusst angepasst hast.", "hilfe": ["je nach Situation", "Eindruck", "wechseln", "Identität"]}
 ],
 "quiz": [
  {"q": "Was bedeutet „plurizentrisch“?", "o": ["eine Sprache mit mehreren gleichberechtigten Standards", "eine Sprache mit vielen Dialekten ohne Standard", "eine Sprache, die in vielen Städten gesprochen wird"], "r": 0, "anschluss": "Ist deine Muttersprache auch plurizentrisch?"},
  {"q": "Was ist typisch für die Diglossie in der Deutschschweiz?", "o": ["Man spricht Dialekt und schreibt Standarddeutsch.", "Man spricht und schreibt nur Dialekt.", "Man spricht nur Französisch."], "r": 0, "anschluss": "Sprichst du anders, als du schreibst?"},
  {"q": "„Das sagt mehr über den Zuhörer aus als über den Sprecher.“ Was kritisiert man damit?", "o": ["ein Vorurteil des Zuhörers", "die Aussprache des Sprechers", "die Lautstärke"], "r": 0, "anschluss": "Wann hast du zuletzt ein Vorurteil bei dir selbst bemerkt?"},
  {"q": "Wo erleben Dialekte gerade ein Comeback?", "o": ["in Musik und Social Media", "in Gesetzestexten", "in Nachrichtensendungen"], "r": 0, "anschluss": "Kennst du Musik in einem Dialekt?"},
  {"q": "Welcher Ausdruck leitet eine Differenzierung ein?", "o": ["„Man muss hier unterscheiden zwischen … und …“", "„Das ist halt so.“", "„Ganz klar!“"], "r": 0, "anschluss": "Bei welchem Thema muss man deiner Meinung nach besonders differenzieren?"}
 ],
 "merk": "Deutsch hat nicht nur viele Dialekte, sondern auch mehrere Standards. Wie ein Dialekt bewertet wird, sagt oft mehr über Vorurteile aus als über die Sprache.",
 "tipp": "Wenn jemand Dialekt abwertet, hilft ein sachlicher Hinweis: Auch Hochdeutsch ist aus Dialekten entstanden.",
 "anwenden": {"einstieg": ["Ist deine Muttersprache auch plurizentrisch? Welche Standards gibt es?", "Hast du schon einmal gehört, jemand spreche „falsches“ Deutsch oder „falsches“ Spanisch, Arabisch …? Wie siehst du das?"], "dach": ["Welche These hat dich am meisten zum Nachdenken gebracht? Begründe.", "Gibt es in deinem Land eine Diglossie wie in der Schweiz? Beschreibe sie."], "situationen": ["Sollte man seinen Dialekt im Beruf verstecken? Wäge ab: „Einerseits …, andererseits …“", "Welchen Status haben Dialekte in deinem Land – Stolz oder Scham?"], "redemittel": ["Formuliere mit einem Redemittel eine differenzierte Meinung zu: „Dialekt gehört nicht ins Büro.“", "Erzähl, wie du je nach Situation deine Sprache wechselst – mit „Je nach Situation …“."], "dialog": ["Hast du schon einmal erlebt, dass jemand wegen seiner Sprache anders behandelt wurde? Erzähl.", "Wie würdest du Bewerber A beraten?"], "wassagen": ["Welche Situation kennst du aus deinem Leben? Wie hast du reagiert?", "Wo verläuft für dich die Grenze zwischen Witz und Vorurteil?"], "puzzle": ["Jeder nimmt einen Satz und baut daraus ein kurzes Argument zu einem aktuellen Thema."], "luecken": ["Führt das Gespräch der beiden Bewerber frei weiter: Was raten sie sich gegenseitig?"], "quiz": ["Welcher Begriff (plurizentrisch, Diglossie, Prestige) passt am besten zu deinem Land? Erkläre.", "Stellt eine eigene Frage, über die die Gruppe abstimmen soll."], "simulator": ["Welche Sprachpolitik würdest du für einen Sender in deinem Land vorschlagen?", "Welche Entscheidung war am schwierigsten? Was hätte euch geholfen?"]},
 "simulator": {
  "intro": "Ihr leitet einen neuen Radiosender für ganz Deutschland, Österreich und die Schweiz. Jede Entscheidung hat Folgen – diskutiert, einigt euch, begründet!",
  "start": "s1",
  "szenen": {
   "s1": {"bild": "bilder/landeskunde/dialekte-sim-radio.webp", "text": "Ihr sucht eine Stimme für die Morgenshow. Die beste Bewerberin spricht starkes Bairisch. Ein Investor sagt: „Das versteht im Norden keiner.“", "optionen": [
    {"t": "Ihr nehmt sie – mit der Absprache, dass sie Nachrichten auf Hochdeutsch liest.", "folge": "Ein Kompromiss mit Charme: Die Hörer lieben die echte Stimme, Infos bleiben verständlich.", "punkte": 3, "next": "s2"},
    {"t": "Ihr nehmt eine glatte Hochdeutsch-Stimme.", "folge": "Professionell, aber austauschbar. Die Quote bleibt mittelmäßig.", "punkte": 1, "next": "s2"},
    {"t": "Ihr verlangt, dass sie ihren Dialekt komplett ablegt.", "folge": "Sie lehnt ab: „Das gehört zu meiner Identität.“ Ihr verliert die beste Kandidatin.", "punkte": 0, "next": "s2"}]},
   "s2": {"bild": "bilder/landeskunde/dialekte-sim-kommentare.webp", "text": "In den Kommentaren macht sich jemand über einen sächsischen Anrufer lustig. Andere lachen mit.", "optionen": [
    {"t": "Ihr reagiert öffentlich: „Bei uns zählt, was jemand sagt – nicht, wie es klingt.“", "folge": "Viele Hörer applaudieren. Der Sender gewinnt Sympathie.", "punkte": 3, "next": "s3"},
    {"t": "Ihr löscht den Kommentar kommentarlos.", "folge": "Ruhig gelöst, aber eine Chance für eine klare Haltung ist vertan.", "punkte": 1, "next": "s3"},
    {"t": "Ihr ignoriert es.", "folge": "Der Anrufer meldet sich enttäuscht. Die Debatte wird größer.", "punkte": 0, "next": "s3"}]},
   "s3": {"bild": "bilder/landeskunde/dialekte-sim-schweiz.webp", "text": "Ihr wollt in die Schweiz expandieren. Die Schweizer Partner fragen: „Sendet ihr auf Schweizerdeutsch oder auf Hochdeutsch?“", "optionen": [
    {"t": "Moderation auf Schweizerdeutsch, Nachrichten auf Schweizer Standarddeutsch – wie dort üblich.", "folge": "Die Partner sind begeistert: Ihr habt die Diglossie verstanden.", "punkte": 3, "next": "s4"},
    {"t": "Alles auf deutschem Hochdeutsch.", "folge": "Die Partner zögern: „Das wirkt bei uns schnell distanziert.“", "punkte": 1, "next": "s4"},
    {"t": "Alles auf Englisch.", "folge": "Die Partner sind irritiert. Der Deal platzt fast.", "punkte": 0, "next": "s4"}]},
   "s4": {"bild": "bilder/landeskunde/dialekte-sim-jubilaeum.webp", "text": "Ein Jahr später. Die Geschäftsführung fragt: „Wie definieren wir unsere Sprachpolitik für die Zukunft?“", "optionen": [
    {"t": "„Vielfalt hörbar machen: Dialekt und Standard je nach Format – und null Toleranz für Spott.“", "folge": "Differenziert und mutig. Euer Sender wird zum Vorbild der Branche.", "punkte": 3, "next": "ende"},
    {"t": "„Nur noch Standarddeutsch – das ist am sichersten.“", "folge": "Sicher, aber ohne Profil. Ein Teil der Hörer wandert ab.", "punkte": 1, "next": "ende"},
    {"t": "„Nur noch Dialekt – das ist authentisch.“", "folge": "Authentisch, aber viele verstehen nichts mehr. Die Quote sinkt.", "punkte": 0, "next": "ende"}]}
  },
  "ende": [
   {"ab": 10, "text": "Hervorragend! Ihr verbindet Vielfalt mit Verständlichkeit und zeigt klare Haltung gegen Vorurteile."},
   {"ab": 5, "text": "Gute Arbeit! An einigen Stellen hätte mehr Mut oder mehr Kenntnis über DACH geholfen."},
   {"ab": 0, "text": "Ein schwieriges Jahr für den Sender … Schaut euch die Infos zu Diglossie und Prestige noch einmal an."}
  ]
 }
});
