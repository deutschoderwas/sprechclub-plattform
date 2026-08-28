/* ============================================================
   hoeren-c1-neu.js — Hoeren auf C1

   Wird NACH uebungen.js geladen und haengt seine Themen an den
   Bereich "Hoeren" an. Vorher stand auf C1 kein einziges Thema.

   Vier Themen, in denen der Ton mehr traegt als das Wort:
   verhandeln, in der Debatte bestehen, Zahlen im Vortrag pruefen,
   und hoeren, was zwischen den Zeilen gesagt wird.

   Je Thema 16 Woerter, 4 Hoertexte mit Transkript, 16 Wortfragen.
   Die Fragen zielen nicht auf Einzelheiten, sondern auf die
   Absicht: Was wurde zugesagt, was nur angedeutet, wo weicht
   jemand aus. Gesprochen ist alles in Julias eigener Stimme;
   jede Aufnahme wurde vor dem Einbau maschinell abgehoert.
   Gebaut von bau/mach-hoeren-c1.js — nicht von Hand aendern.
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
  "id": "c1-verhandeln",
  "title": "Verhandeln: Spielraum, Zugeständnis, der stille Teil",
  "level": "C1",
  "emoji": "🎧",
  "words": [
   {
    "de": "der Spielraum",
    "info": "wie viel sich noch bewegen lässt",
    "emoji": "↔️"
   },
   {
    "de": "das Zugeständnis",
    "info": "was man nachgibt, um etwas anderes zu bekommen",
    "emoji": "🤲"
   },
   {
    "de": "in Aussicht stellen",
    "info": "etwas andeuten, ohne es zuzusagen",
    "emoji": "🌫️"
   },
   {
    "de": "die Gegenforderung",
    "info": "was man im Tausch verlangt",
    "emoji": "⚖️"
   },
   {
    "de": "hinauszögern",
    "info": "absichtlich Zeit verstreichen lassen",
    "emoji": "🐌"
   },
   {
    "de": "abwägen",
    "info": "Vor- und Nachteile gegeneinanderhalten",
    "emoji": "🧮"
   },
   {
    "de": "sich vertagen",
    "info": "das Gespräch auf später verschieben",
    "emoji": "📅"
   },
   {
    "de": "unter Vorbehalt",
    "info": "nur, wenn eine Bedingung noch erfüllt wird",
    "emoji": "⚠️"
   },
   {
    "de": "das Entgegenkommen",
    "info": "ein Schritt auf den anderen zu",
    "emoji": "🫱"
   },
   {
    "de": "den Rahmen sprengen",
    "info": "über das hinausgehen, was möglich ist",
    "emoji": "💥"
   },
   {
    "de": "sich einigen",
    "info": "zu einem gemeinsamen Ergebnis kommen",
    "emoji": "🤝"
   },
   {
    "de": "nachverhandeln",
    "info": "später noch einmal über dasselbe sprechen",
    "emoji": "🔁"
   },
   {
    "de": "das Signal",
    "info": "ein Hinweis, der nicht ausgesprochen wird",
    "emoji": "📡"
   },
   {
    "de": "vage bleiben",
    "info": "absichtlich ungenau antworten",
    "emoji": "🌁"
   },
   {
    "de": "eine Zusage",
    "info": "das verbindliche Ja",
    "emoji": "✅"
   },
   {
    "de": "belastbar",
    "info": "so verlässlich, dass man sich darauf stützen kann",
    "emoji": "🧱"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "💼 Im Gehaltsgespräch",
    "audioUrl": "ton/hoeren-c1/c1-verhandeln-1.mp3",
    "q": "Was hat die Vorgesetzte zugesagt?",
    "options": [
     "Nichts Verbindliches — nur, im Frühjahr erneut darüber zu sprechen.",
     "Eine Gehaltserhöhung ab dem Frühjahr.",
     "Eine Erhöhung, sobald das Budget freigegeben ist.",
     "Einen neuen Zuschnitt der Stelle im Dezember."
    ],
    "answer": 0,
    "transcript": "Ihre Zahlen sprechen für sich, das will ich gar nicht kleinreden. Nur ist der Zeitpunkt schwierig: Wir haben das Budget für dieses Jahr im Dezember festgezurrt, und da war Ihre Stelle noch anders zugeschnitten. Was ich Ihnen anbieten kann, ist Folgendes — wir schauen im Frühjahr noch einmal darauf, und ich halte fest, worüber wir heute gesprochen haben. Ich möchte Ihnen nichts versprechen, was ich nachher nicht halten kann. Aber ich will auch nicht, dass Sie den Eindruck haben, es interessiert niemanden."
   },
   {
    "type": "listen",
    "label": "☕ Danach in der Teeküche",
    "audioUrl": "ton/hoeren-c1/c1-verhandeln-2.mp3",
    "q": "Warum soll sie eine Mail schreiben?",
    "options": [
     "Damit im Frühjahr schriftlich feststeht, was besprochen wurde.",
     "Weil sie der Vorgesetzten nicht traut.",
     "Um die Vertagung förmlich abzulehnen.",
     "Weil eine Mail die Zusage verbindlich macht."
    ],
    "answer": 0,
    "transcript": "Und? Wie war's? — Schwer zu sagen. Sie war freundlich, hat meine Arbeit gelobt, und am Ende hatte ich trotzdem nichts in der Hand. — Das ist eine Vertagung, keine Ablehnung. Die Frage ist, ob sie etwas notiert hat oder ob das nur so dahingesagt war. — Sie meinte, sie hält es fest. — Dann schick ihr heute noch eine kurze Mail mit dem, was ihr besprochen habt. Freundlich, zwei Sätze. Nicht weil du ihr misstraust, sondern damit im Frühjahr niemand raten muss, was gemeint war."
   },
   {
    "type": "listen",
    "label": "📞 Verhandlung mit einem Dienstleister",
    "audioUrl": "ton/hoeren-c1/c1-verhandeln-3.mp3",
    "q": "Wofür will der Sprecher beim Preis nachgeben?",
    "options": [
     "Für eine Abrechnung pro Quartal und eine Laufzeit von zwei Jahren.",
     "Für eine kürzere Laufzeit von einem Jahr.",
     "Für eine monatliche Abrechnung.",
     "Für eine Entscheidung innerhalb von vier Wochen."
    ],
    "answer": 0,
    "transcript": "Beim Preis sind wir auseinander, das sehen wir beide. Ich könnte mit Ihrem Betrag leben, wenn wir an anderer Stelle etwas ändern: Statt der monatlichen Abrechnung machen wir eine pro Quartal, das spart uns beiden Verwaltung. Und die Laufzeit setzen wir auf zwei Jahre statt auf eines — dann rechnet sich der Rabatt auch für Sie. Wenn Ihnen die Bindung zu lang ist, sagen Sie es jetzt und nicht in vier Wochen, dann suchen wir etwas anderes."
   },
   {
    "type": "listen",
    "label": "🗣️ Ein Rat vom erfahrenen Kollegen",
    "audioUrl": "ton/hoeren-c1/c1-verhandeln-4.mp3",
    "q": "Was rät der Kollege?",
    "options": [
     "Die andere Seite zuerst eine Zahl nennen lassen und nicht sofort zuzusagen.",
     "Möglichst früh die eigene Zahl nennen.",
     "Ein gutes Angebot immer sofort anzunehmen.",
     "Gespräche grundsätzlich auf den nächsten Tag zu verschieben."
    ],
    "answer": 0,
    "transcript": "Der Fehler, den fast alle machen: Sie nennen ihre Zahl zuerst und haben danach nur noch nach unten Platz. Lassen Sie die andere Seite anfangen, auch wenn es unangenehm still wird. Und wenn ein Angebot kommt, sagen Sie nicht sofort ja, selbst wenn es gut ist. Ein Satz genügt: Das klingt vernünftig, ich schaue es mir in Ruhe an und melde mich morgen. Damit verlieren Sie nichts — aber Sie gewinnen die Nacht, in der Sie merken, was Sie überhört haben."
   },
   {
    "type": "choice",
    "audio": "der Spielraum",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie viel sich noch bewegen lässt",
     "Vor- und Nachteile gegeneinanderhalten",
     "über das hinausgehen, was möglich ist",
     "absichtlich ungenau antworten"
    ],
    "answer": 0,
    "w": "der Spielraum",
    "explain": "der Spielraum = wie viel sich noch bewegen lässt."
   },
   {
    "type": "choice",
    "audio": "das Zugeständnis",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "was man nachgibt, um etwas anderes zu bekommen",
     "das Gespräch auf später verschieben",
     "zu einem gemeinsamen Ergebnis kommen",
     "das verbindliche Ja"
    ],
    "answer": 0,
    "w": "das Zugeständnis",
    "explain": "das Zugeständnis = was man nachgibt, um etwas anderes zu bekommen."
   },
   {
    "type": "choice",
    "audio": "in Aussicht stellen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "etwas andeuten, ohne es zuzusagen",
     "nur, wenn eine Bedingung noch erfüllt wird",
     "später noch einmal über dasselbe sprechen",
     "so verlässlich, dass man sich darauf stützen kann"
    ],
    "answer": 0,
    "w": "in Aussicht stellen",
    "explain": "in Aussicht stellen = etwas andeuten, ohne es zuzusagen."
   },
   {
    "type": "choice",
    "audio": "die Gegenforderung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "was man im Tausch verlangt",
     "ein Schritt auf den anderen zu",
     "ein Hinweis, der nicht ausgesprochen wird",
     "wie viel sich noch bewegen lässt"
    ],
    "answer": 0,
    "w": "die Gegenforderung",
    "explain": "die Gegenforderung = was man im Tausch verlangt."
   },
   {
    "type": "choice",
    "audio": "hinauszögern",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "absichtlich Zeit verstreichen lassen",
     "über das hinausgehen, was möglich ist",
     "absichtlich ungenau antworten",
     "was man nachgibt, um etwas anderes zu bekommen"
    ],
    "answer": 0,
    "w": "hinauszögern",
    "explain": "hinauszögern = absichtlich Zeit verstreichen lassen."
   },
   {
    "type": "choice",
    "audio": "abwägen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Vor- und Nachteile gegeneinanderhalten",
     "zu einem gemeinsamen Ergebnis kommen",
     "das verbindliche Ja",
     "etwas andeuten, ohne es zuzusagen"
    ],
    "answer": 0,
    "w": "abwägen",
    "explain": "abwägen = Vor- und Nachteile gegeneinanderhalten."
   },
   {
    "type": "choice",
    "audio": "sich vertagen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Gespräch auf später verschieben",
     "später noch einmal über dasselbe sprechen",
     "so verlässlich, dass man sich darauf stützen kann",
     "was man im Tausch verlangt"
    ],
    "answer": 0,
    "w": "sich vertagen",
    "explain": "sich vertagen = das Gespräch auf später verschieben."
   },
   {
    "type": "choice",
    "audio": "unter Vorbehalt",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "nur, wenn eine Bedingung noch erfüllt wird",
     "ein Hinweis, der nicht ausgesprochen wird",
     "wie viel sich noch bewegen lässt",
     "absichtlich Zeit verstreichen lassen"
    ],
    "answer": 0,
    "w": "unter Vorbehalt",
    "explain": "unter Vorbehalt = nur, wenn eine Bedingung noch erfüllt wird."
   },
   {
    "type": "choice",
    "audio": "das Entgegenkommen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Schritt auf den anderen zu",
     "absichtlich ungenau antworten",
     "was man nachgibt, um etwas anderes zu bekommen",
     "Vor- und Nachteile gegeneinanderhalten"
    ],
    "answer": 0,
    "w": "das Entgegenkommen",
    "explain": "das Entgegenkommen = ein Schritt auf den anderen zu."
   },
   {
    "type": "choice",
    "audio": "den Rahmen sprengen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "über das hinausgehen, was möglich ist",
     "das verbindliche Ja",
     "etwas andeuten, ohne es zuzusagen",
     "das Gespräch auf später verschieben"
    ],
    "answer": 0,
    "w": "den Rahmen sprengen",
    "explain": "den Rahmen sprengen = über das hinausgehen, was möglich ist."
   },
   {
    "type": "choice",
    "audio": "sich einigen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "zu einem gemeinsamen Ergebnis kommen",
     "so verlässlich, dass man sich darauf stützen kann",
     "was man im Tausch verlangt",
     "nur, wenn eine Bedingung noch erfüllt wird"
    ],
    "answer": 0,
    "w": "sich einigen",
    "explain": "sich einigen = zu einem gemeinsamen Ergebnis kommen."
   },
   {
    "type": "choice",
    "audio": "nachverhandeln",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "später noch einmal über dasselbe sprechen",
     "wie viel sich noch bewegen lässt",
     "absichtlich Zeit verstreichen lassen",
     "ein Schritt auf den anderen zu"
    ],
    "answer": 0,
    "w": "nachverhandeln",
    "explain": "nachverhandeln = später noch einmal über dasselbe sprechen."
   },
   {
    "type": "choice",
    "audio": "das Signal",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Hinweis, der nicht ausgesprochen wird",
     "was man nachgibt, um etwas anderes zu bekommen",
     "Vor- und Nachteile gegeneinanderhalten",
     "über das hinausgehen, was möglich ist"
    ],
    "answer": 0,
    "w": "das Signal",
    "explain": "das Signal = ein Hinweis, der nicht ausgesprochen wird."
   },
   {
    "type": "choice",
    "audio": "vage bleiben",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "absichtlich ungenau antworten",
     "etwas andeuten, ohne es zuzusagen",
     "das Gespräch auf später verschieben",
     "zu einem gemeinsamen Ergebnis kommen"
    ],
    "answer": 0,
    "w": "vage bleiben",
    "explain": "vage bleiben = absichtlich ungenau antworten."
   },
   {
    "type": "choice",
    "audio": "eine Zusage",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das verbindliche Ja",
     "was man im Tausch verlangt",
     "nur, wenn eine Bedingung noch erfüllt wird",
     "später noch einmal über dasselbe sprechen"
    ],
    "answer": 0,
    "w": "eine Zusage",
    "explain": "eine Zusage = das verbindliche Ja."
   },
   {
    "type": "choice",
    "audio": "belastbar",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "so verlässlich, dass man sich darauf stützen kann",
     "absichtlich Zeit verstreichen lassen",
     "ein Schritt auf den anderen zu",
     "ein Hinweis, der nicht ausgesprochen wird"
    ],
    "answer": 0,
    "w": "belastbar",
    "explain": "belastbar = so verlässlich, dass man sich darauf stützen kann."
   }
  ]
 },
 {
  "id": "c1-debatte",
  "title": "In der Debatte: Einwand, Zwischenton, Rückzug",
  "level": "C1",
  "emoji": "🎧",
  "words": [
   {
    "de": "der Einwand",
    "info": "ein Gegenargument, sachlich vorgebracht",
    "emoji": "✋"
   },
   {
    "de": "entkräften",
    "info": "ein Argument so beantworten, dass es nicht mehr trägt",
    "emoji": "🪓"
   },
   {
    "de": "unterstellen",
    "info": "jemandem eine Absicht zuschreiben, ohne Beleg",
    "emoji": "👉"
   },
   {
    "de": "relativieren",
    "info": "etwas kleiner machen, ohne es zu bestreiten",
    "emoji": "🔽"
   },
   {
    "de": "einräumen",
    "info": "zugeben, dass die andere Seite in einem Punkt recht hat",
    "emoji": "🚪"
   },
   {
    "de": "die Prämisse",
    "info": "die Annahme, auf der ein Argument aufbaut",
    "emoji": "🧱"
   },
   {
    "de": "ins Feld führen",
    "info": "ein Argument vorbringen",
    "emoji": "🏳️"
   },
   {
    "de": "sich festlegen",
    "info": "klar Position beziehen",
    "emoji": "📍"
   },
   {
    "de": "ausweichen",
    "info": "antworten, ohne die Frage zu beantworten",
    "emoji": "↩️"
   },
   {
    "de": "zuspitzen",
    "info": "schärfer formulieren, als es die Sache hergibt",
    "emoji": "🔺"
   },
   {
    "de": "sachlich bleiben",
    "info": "bei der Sache bleiben statt bei der Person",
    "emoji": "🧊"
   },
   {
    "de": "polemisch",
    "info": "angriffslustig statt argumentierend",
    "emoji": "🌶️"
   },
   {
    "de": "die Schlussfolgerung",
    "info": "was sich aus dem Gesagten ergibt",
    "emoji": "➡️"
   },
   {
    "de": "widerlegen",
    "info": "beweisen, dass etwas nicht stimmt",
    "emoji": "❌"
   },
   {
    "de": "den Punkt machen",
    "info": "das entscheidende Argument setzen",
    "emoji": "🎯"
   },
   {
    "de": "das Totschlagargument",
    "info": "ein Satz, der jede Diskussion beendet",
    "emoji": "🔨"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "🎙️ Auf dem Podium",
    "audioUrl": "ton/hoeren-c1/c1-debatte-1.mp3",
    "q": "Was macht die Sprecherin mit dem Argument der Gegenseite?",
    "options": [
     "Sie gibt die Zahlen zu, greift aber die Annahme dahinter an.",
     "Sie bestreitet die Zahlen der Gegenseite.",
     "Sie stimmt dem Gesetzentwurf ausdrücklich zu.",
     "Sie weicht der Frage aus."
    ],
    "answer": 0,
    "transcript": "Ich räume gern ein, dass die Zahlen in Ihrem ersten Punkt stimmen. Nur führt das nicht zu dem Schluss, den Sie daraus ziehen. Sie setzen voraus, dass die Kosten allein bei den Gemeinden hängen bleiben — genau das ist im Gesetzentwurf aber anders geregelt. Wenn diese Prämisse fällt, fällt auch Ihre Rechnung. Ich sage nicht, dass der Entwurf gut ist. Ich sage, dass er an einer anderen Stelle schwach ist als an der, die Sie kritisieren."
   },
   {
    "type": "listen",
    "label": "📻 Nachgefragt im Interview",
    "audioUrl": "ton/hoeren-c1/c1-debatte-2.mp3",
    "q": "Wie endet der Austausch?",
    "options": [
     "Der Gast legt sich für die jetzige Fassung fest, bleibt für eine überarbeitete offen.",
     "Der Gast weicht bis zum Schluss aus.",
     "Der Gast stimmt der jetzigen Fassung zu.",
     "Die Moderatorin lässt die Frage fallen."
    ],
    "answer": 0,
    "transcript": "Sie haben jetzt dreimal gesagt, es werde geprüft. Meine Frage war eine andere: Sind Sie dafür oder dagegen? — Ich glaube, man muss die Debatte etwas breiter führen als… — Das ist keine Antwort. — Dann sage ich es so: In der jetzigen Fassung würde ich nicht zustimmen. Ob ich einer überarbeiteten zustimme, hängt davon ab, was drinsteht. Das ist keine Ausflucht, das ist die ehrliche Lage."
   },
   {
    "type": "listen",
    "label": "💬 Nach der Veranstaltung",
    "audioUrl": "ton/hoeren-c1/c1-debatte-3.mp3",
    "q": "Was kritisiert die zweite Person?",
    "options": [
     "Dass er das Thema gewechselt hat, statt die Frage zu beantworten.",
     "Dass seine Angaben nachweislich falsch waren.",
     "Dass er zu leise gesprochen hat.",
     "Dass das Publikum nicht applaudiert hat."
    ],
    "answer": 0,
    "transcript": "Ich fand ihn stark. — Rhetorisch ja. Aber ist dir aufgefallen, dass er zweimal etwas beantwortet hat, was niemand gefragt hatte? Beim Thema Finanzierung ist er auf die Moral ausgewichen, und das Publikum hat applaudiert. Das ist der Trick: Man wechselt auf ein Feld, auf dem einem niemand widersprechen will. — Also war alles falsch, was er gesagt hat? — Nein. Es war nur nicht die Antwort auf die Frage."
   },
   {
    "type": "listen",
    "label": "🎓 Aus einem Rhetorik-Seminar",
    "audioUrl": "ton/hoeren-c1/c1-debatte-4.mp3",
    "q": "Wie soll man auf so einen Satz reagieren?",
    "options": [
     "Das Recht auf die Äußerung bestätigen und dann inhaltlich widersprechen.",
     "Den Satz ignorieren und das Thema wechseln.",
     "Dem Gegenüber das Recht auf die Äußerung absprechen.",
     "Mit demselben Satz zurückantworten."
    ],
    "answer": 0,
    "transcript": "Wenn jemand sagt, das kann man doch wohl noch sagen dürfen, dann geht es meistens nicht mehr um die Sache. Der Satz verschiebt die Frage: Aus dem Streit über den Inhalt wird ein Streit über die Erlaubnis. Sie kommen da nur heraus, indem Sie freundlich zurückgehen. Sagen dürfen Sie es, ja. Ich widerspreche Ihnen trotzdem, und zwar aus folgendem Grund. Damit nehmen Sie dem Satz seine Wirkung, ohne dem Gegenüber die Würde zu nehmen."
   },
   {
    "type": "choice",
    "audio": "der Einwand",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Gegenargument, sachlich vorgebracht",
     "die Annahme, auf der ein Argument aufbaut",
     "schärfer formulieren, als es die Sache hergibt",
     "beweisen, dass etwas nicht stimmt"
    ],
    "answer": 0,
    "w": "der Einwand",
    "explain": "der Einwand = ein Gegenargument, sachlich vorgebracht."
   },
   {
    "type": "choice",
    "audio": "entkräften",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Argument so beantworten, dass es nicht mehr trägt",
     "ein Argument vorbringen",
     "bei der Sache bleiben statt bei der Person",
     "das entscheidende Argument setzen"
    ],
    "answer": 0,
    "w": "entkräften",
    "explain": "entkräften = ein Argument so beantworten, dass es nicht mehr trägt."
   },
   {
    "type": "choice",
    "audio": "unterstellen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "jemandem eine Absicht zuschreiben, ohne Beleg",
     "klar Position beziehen",
     "angriffslustig statt argumentierend",
     "ein Satz, der jede Diskussion beendet"
    ],
    "answer": 0,
    "w": "unterstellen",
    "explain": "unterstellen = jemandem eine Absicht zuschreiben, ohne Beleg."
   },
   {
    "type": "choice",
    "audio": "relativieren",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "etwas kleiner machen, ohne es zu bestreiten",
     "antworten, ohne die Frage zu beantworten",
     "was sich aus dem Gesagten ergibt",
     "ein Gegenargument, sachlich vorgebracht"
    ],
    "answer": 0,
    "w": "relativieren",
    "explain": "relativieren = etwas kleiner machen, ohne es zu bestreiten."
   },
   {
    "type": "choice",
    "audio": "einräumen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "zugeben, dass die andere Seite in einem Punkt recht hat",
     "schärfer formulieren, als es die Sache hergibt",
     "beweisen, dass etwas nicht stimmt",
     "ein Argument so beantworten, dass es nicht mehr trägt"
    ],
    "answer": 0,
    "w": "einräumen",
    "explain": "einräumen = zugeben, dass die andere Seite in einem Punkt recht hat."
   },
   {
    "type": "choice",
    "audio": "die Prämisse",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Annahme, auf der ein Argument aufbaut",
     "bei der Sache bleiben statt bei der Person",
     "das entscheidende Argument setzen",
     "jemandem eine Absicht zuschreiben, ohne Beleg"
    ],
    "answer": 0,
    "w": "die Prämisse",
    "explain": "die Prämisse = die Annahme, auf der ein Argument aufbaut."
   },
   {
    "type": "choice",
    "audio": "ins Feld führen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Argument vorbringen",
     "angriffslustig statt argumentierend",
     "ein Satz, der jede Diskussion beendet",
     "etwas kleiner machen, ohne es zu bestreiten"
    ],
    "answer": 0,
    "w": "ins Feld führen",
    "explain": "ins Feld führen = ein Argument vorbringen."
   },
   {
    "type": "choice",
    "audio": "sich festlegen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "klar Position beziehen",
     "was sich aus dem Gesagten ergibt",
     "ein Gegenargument, sachlich vorgebracht",
     "zugeben, dass die andere Seite in einem Punkt recht hat"
    ],
    "answer": 0,
    "w": "sich festlegen",
    "explain": "sich festlegen = klar Position beziehen."
   },
   {
    "type": "choice",
    "audio": "ausweichen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "antworten, ohne die Frage zu beantworten",
     "beweisen, dass etwas nicht stimmt",
     "ein Argument so beantworten, dass es nicht mehr trägt",
     "die Annahme, auf der ein Argument aufbaut"
    ],
    "answer": 0,
    "w": "ausweichen",
    "explain": "ausweichen = antworten, ohne die Frage zu beantworten."
   },
   {
    "type": "choice",
    "audio": "zuspitzen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "schärfer formulieren, als es die Sache hergibt",
     "das entscheidende Argument setzen",
     "jemandem eine Absicht zuschreiben, ohne Beleg",
     "ein Argument vorbringen"
    ],
    "answer": 0,
    "w": "zuspitzen",
    "explain": "zuspitzen = schärfer formulieren, als es die Sache hergibt."
   },
   {
    "type": "choice",
    "audio": "sachlich bleiben",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "bei der Sache bleiben statt bei der Person",
     "ein Satz, der jede Diskussion beendet",
     "etwas kleiner machen, ohne es zu bestreiten",
     "klar Position beziehen"
    ],
    "answer": 0,
    "w": "sachlich bleiben",
    "explain": "sachlich bleiben = bei der Sache bleiben statt bei der Person."
   },
   {
    "type": "choice",
    "audio": "polemisch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "angriffslustig statt argumentierend",
     "ein Gegenargument, sachlich vorgebracht",
     "zugeben, dass die andere Seite in einem Punkt recht hat",
     "antworten, ohne die Frage zu beantworten"
    ],
    "answer": 0,
    "w": "polemisch",
    "explain": "polemisch = angriffslustig statt argumentierend."
   },
   {
    "type": "choice",
    "audio": "die Schlussfolgerung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "was sich aus dem Gesagten ergibt",
     "ein Argument so beantworten, dass es nicht mehr trägt",
     "die Annahme, auf der ein Argument aufbaut",
     "schärfer formulieren, als es die Sache hergibt"
    ],
    "answer": 0,
    "w": "die Schlussfolgerung",
    "explain": "die Schlussfolgerung = was sich aus dem Gesagten ergibt."
   },
   {
    "type": "choice",
    "audio": "widerlegen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "beweisen, dass etwas nicht stimmt",
     "jemandem eine Absicht zuschreiben, ohne Beleg",
     "ein Argument vorbringen",
     "bei der Sache bleiben statt bei der Person"
    ],
    "answer": 0,
    "w": "widerlegen",
    "explain": "widerlegen = beweisen, dass etwas nicht stimmt."
   },
   {
    "type": "choice",
    "audio": "den Punkt machen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das entscheidende Argument setzen",
     "etwas kleiner machen, ohne es zu bestreiten",
     "klar Position beziehen",
     "angriffslustig statt argumentierend"
    ],
    "answer": 0,
    "w": "den Punkt machen",
    "explain": "den Punkt machen = das entscheidende Argument setzen."
   },
   {
    "type": "choice",
    "audio": "das Totschlagargument",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Satz, der jede Diskussion beendet",
     "zugeben, dass die andere Seite in einem Punkt recht hat",
     "antworten, ohne die Frage zu beantworten",
     "was sich aus dem Gesagten ergibt"
    ],
    "answer": 0,
    "w": "das Totschlagargument",
    "explain": "das Totschlagargument = ein Satz, der jede Diskussion beendet."
   }
  ]
 },
 {
  "id": "c1-zahlen-hoeren",
  "title": "Zahlen im Vortrag: was gesagt wird und was nicht",
  "level": "C1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Erhebung",
    "info": "die Untersuchung, aus der die Zahlen stammen",
    "emoji": "📋"
   },
   {
    "de": "die Stichprobe",
    "info": "die Gruppe, die tatsächlich befragt wurde",
    "emoji": "👥"
   },
   {
    "de": "der Zusammenhang",
    "info": "zwei Dinge treten gemeinsam auf",
    "emoji": "🔗"
   },
   {
    "de": "die Ursache",
    "info": "das eine bewirkt das andere",
    "emoji": "🎯"
   },
   {
    "de": "hochrechnen",
    "info": "von wenigen auf alle schließen",
    "emoji": "📈"
   },
   {
    "de": "die Schwankung",
    "info": "das Auf und Ab zwischen den Messungen",
    "emoji": "〰️"
   },
   {
    "de": "der Anteil",
    "info": "wie viel von einem Ganzen",
    "emoji": "🥧"
   },
   {
    "de": "die Tendenz",
    "info": "die Richtung über längere Zeit",
    "emoji": "↗️"
   },
   {
    "de": "aussagekräftig",
    "info": "die Zahl trägt wirklich, was man aus ihr liest",
    "emoji": "💎"
   },
   {
    "de": "verzerren",
    "info": "die Darstellung schief machen",
    "emoji": "🪞"
   },
   {
    "de": "die Momentaufnahme",
    "info": "ein einziger Zeitpunkt, kein Verlauf",
    "emoji": "📸"
   },
   {
    "de": "belastbar",
    "info": "so gesichert, dass man darauf bauen kann",
    "emoji": "🧱"
   },
   {
    "de": "im Schnitt",
    "info": "der Durchschnitt, der Ausreißer versteckt",
    "emoji": "➗"
   },
   {
    "de": "die Fehlerquote",
    "info": "wie stark das Ergebnis danebenliegen kann",
    "emoji": "±"
   },
   {
    "de": "relativ",
    "info": "im Verhältnis zu etwas anderem",
    "emoji": "⚖️"
   },
   {
    "de": "absolut",
    "info": "die nackte Zahl, ohne Verhältnis",
    "emoji": "🔢"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "🎓 Ausschnitt aus einem Vortrag",
    "audioUrl": "ton/hoeren-c1/c1-zahlen-hoeren-1.mp3",
    "q": "Was lässt sich laut Vortragendem NICHT sagen?",
    "options": [
     "Dass der Anstieg durch das eigene Programm verursacht wurde.",
     "Dass die Richtung nach oben zeigt.",
     "Dass dreihundert Personen befragt wurden.",
     "Dass die Erhebung im Frühjahr stattfand."
    ],
    "answer": 0,
    "transcript": "Auf dieser Folie sehen Sie einen Anstieg von zwölf Prozent. Bevor wir uns freuen, zwei Einschränkungen. Erstens: Wir haben dreihundert Personen befragt, nicht dreitausend — die Fehlerquote liegt bei knapp vier Prozentpunkten. Zwölf Prozent können also auch acht sein. Zweitens ist das eine Momentaufnahme aus dem Frühjahr; im Herbst sah es schon einmal anders aus. Was sich sagen lässt: Die Richtung stimmt. Was sich nicht sagen lässt: dass es an unserem Programm liegt."
   },
   {
    "type": "listen",
    "label": "💬 Nachfrage aus dem Publikum",
    "audioUrl": "ton/hoeren-c1/c1-zahlen-hoeren-2.mp3",
    "q": "Worauf zielt die Nachfrage?",
    "options": [
     "Der Durchschnitt kann gegenläufige Entwicklungen verdecken.",
     "Der Durchschnitt wurde falsch berechnet.",
     "Die Zufriedenheit ist in Wahrheit gesunken.",
     "Die Stichprobe war zu klein."
    ],
    "answer": 0,
    "transcript": "Sie sagen, die Zufriedenheit sei im Schnitt gestiegen. Mich würde interessieren, wie sich das auf die Gruppen verteilt. Wenn eine Hälfte deutlich zufriedener ist und die andere unzufriedener, ergibt der Schnitt dasselbe Bild wie eine gleichmäßige Verbesserung — nur ist es ein ganz anderes Ergebnis. Haben Sie die Zahlen aufgeschlüsselt, und wenn ja, würden Sie die auch zeigen?"
   },
   {
    "type": "listen",
    "label": "📻 Zwei Fachleute im Gespräch",
    "audioUrl": "ton/hoeren-c1/c1-zahlen-hoeren-3.mp3",
    "q": "Was ist das Problem an der Schlagzeile?",
    "options": [
     "Aus einem Zusammenhang wird eine Ursache gemacht.",
     "Die Studie ist methodisch wertlos.",
     "Die Studie wurde falsch zitiert.",
     "Die Stichprobe war zu klein."
    ],
    "answer": 0,
    "transcript": "Die Schlagzeile lautete: Wer viel liest, lebt länger. — Das ist der Klassiker. Gefunden wurde ein Zusammenhang, behauptet wird eine Ursache. Es kann genauso gut sein, dass Menschen, die gesünder leben, auch mehr lesen — mehr Zeit, weniger Sorgen, mehr Ruhe. — Also ist die Studie wertlos? — Nein, überhaupt nicht. Sie ist nur eine andere Aussage, als in der Überschrift steht. Das ist meistens der Unterschied zwischen der Studie und dem, was daraus gemacht wird."
   },
   {
    "type": "listen",
    "label": "🗣️ Kurz erklärt in der Redaktion",
    "audioUrl": "ton/hoeren-c1/c1-zahlen-hoeren-4.mp3",
    "q": "Was ist die Empfehlung?",
    "options": [
     "Immer die relative und die absolute Zahl nennen.",
     "Prozentzahlen möglichst weglassen.",
     "Nur die absolute Zahl nennen.",
     "Nur den prozentualen Anstieg nennen."
    ],
    "answer": 0,
    "transcript": "Achtet bei Prozentzahlen immer auf die Bezugsgröße. Ein Anstieg um hundert Prozent klingt gewaltig — bei zwei Fällen sind es dann vier. Umgekehrt verschwindet ein Anstieg von zwölftausend auf dreizehntausend hinter der Zahl acht Komma drei Prozent, obwohl tausend Menschen dahinterstehen. Nennt beides, die relative und die absolute Zahl. Wer nur eine von beiden bringt, hat sich schon entschieden, welchen Eindruck er machen will."
   },
   {
    "type": "choice",
    "audio": "die Erhebung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Untersuchung, aus der die Zahlen stammen",
     "das Auf und Ab zwischen den Messungen",
     "die Darstellung schief machen",
     "wie stark das Ergebnis danebenliegen kann"
    ],
    "answer": 0,
    "w": "die Erhebung",
    "explain": "die Erhebung = die Untersuchung, aus der die Zahlen stammen."
   },
   {
    "type": "choice",
    "audio": "die Stichprobe",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Gruppe, die tatsächlich befragt wurde",
     "wie viel von einem Ganzen",
     "ein einziger Zeitpunkt, kein Verlauf",
     "im Verhältnis zu etwas anderem"
    ],
    "answer": 0,
    "w": "die Stichprobe",
    "explain": "die Stichprobe = die Gruppe, die tatsächlich befragt wurde."
   },
   {
    "type": "choice",
    "audio": "der Zusammenhang",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "zwei Dinge treten gemeinsam auf",
     "die Richtung über längere Zeit",
     "so gesichert, dass man darauf bauen kann",
     "die nackte Zahl, ohne Verhältnis"
    ],
    "answer": 0,
    "w": "der Zusammenhang",
    "explain": "der Zusammenhang = zwei Dinge treten gemeinsam auf."
   },
   {
    "type": "choice",
    "audio": "die Ursache",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das eine bewirkt das andere",
     "die Zahl trägt wirklich, was man aus ihr liest",
     "der Durchschnitt, der Ausreißer versteckt",
     "die Untersuchung, aus der die Zahlen stammen"
    ],
    "answer": 0,
    "w": "die Ursache",
    "explain": "die Ursache = das eine bewirkt das andere."
   },
   {
    "type": "choice",
    "audio": "hochrechnen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "von wenigen auf alle schließen",
     "die Darstellung schief machen",
     "wie stark das Ergebnis danebenliegen kann",
     "die Gruppe, die tatsächlich befragt wurde"
    ],
    "answer": 0,
    "w": "hochrechnen",
    "explain": "hochrechnen = von wenigen auf alle schließen."
   },
   {
    "type": "choice",
    "audio": "die Schwankung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Auf und Ab zwischen den Messungen",
     "ein einziger Zeitpunkt, kein Verlauf",
     "im Verhältnis zu etwas anderem",
     "zwei Dinge treten gemeinsam auf"
    ],
    "answer": 0,
    "w": "die Schwankung",
    "explain": "die Schwankung = das Auf und Ab zwischen den Messungen."
   },
   {
    "type": "choice",
    "audio": "der Anteil",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie viel von einem Ganzen",
     "so gesichert, dass man darauf bauen kann",
     "die nackte Zahl, ohne Verhältnis",
     "das eine bewirkt das andere"
    ],
    "answer": 0,
    "w": "der Anteil",
    "explain": "der Anteil = wie viel von einem Ganzen."
   },
   {
    "type": "choice",
    "audio": "die Tendenz",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Richtung über längere Zeit",
     "der Durchschnitt, der Ausreißer versteckt",
     "die Untersuchung, aus der die Zahlen stammen",
     "von wenigen auf alle schließen"
    ],
    "answer": 0,
    "w": "die Tendenz",
    "explain": "die Tendenz = die Richtung über längere Zeit."
   },
   {
    "type": "choice",
    "audio": "aussagekräftig",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Zahl trägt wirklich, was man aus ihr liest",
     "wie stark das Ergebnis danebenliegen kann",
     "die Gruppe, die tatsächlich befragt wurde",
     "das Auf und Ab zwischen den Messungen"
    ],
    "answer": 0,
    "w": "aussagekräftig",
    "explain": "aussagekräftig = die Zahl trägt wirklich, was man aus ihr liest."
   },
   {
    "type": "choice",
    "audio": "verzerren",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Darstellung schief machen",
     "im Verhältnis zu etwas anderem",
     "zwei Dinge treten gemeinsam auf",
     "wie viel von einem Ganzen"
    ],
    "answer": 0,
    "w": "verzerren",
    "explain": "verzerren = die Darstellung schief machen."
   },
   {
    "type": "choice",
    "audio": "die Momentaufnahme",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein einziger Zeitpunkt, kein Verlauf",
     "die nackte Zahl, ohne Verhältnis",
     "das eine bewirkt das andere",
     "die Richtung über längere Zeit"
    ],
    "answer": 0,
    "w": "die Momentaufnahme",
    "explain": "die Momentaufnahme = ein einziger Zeitpunkt, kein Verlauf."
   },
   {
    "type": "choice",
    "audio": "belastbar",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "so gesichert, dass man darauf bauen kann",
     "die Untersuchung, aus der die Zahlen stammen",
     "von wenigen auf alle schließen",
     "die Zahl trägt wirklich, was man aus ihr liest"
    ],
    "answer": 0,
    "w": "belastbar",
    "explain": "belastbar = so gesichert, dass man darauf bauen kann."
   },
   {
    "type": "choice",
    "audio": "im Schnitt",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Durchschnitt, der Ausreißer versteckt",
     "die Gruppe, die tatsächlich befragt wurde",
     "das Auf und Ab zwischen den Messungen",
     "die Darstellung schief machen"
    ],
    "answer": 0,
    "w": "im Schnitt",
    "explain": "im Schnitt = der Durchschnitt, der Ausreißer versteckt."
   },
   {
    "type": "choice",
    "audio": "die Fehlerquote",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie stark das Ergebnis danebenliegen kann",
     "zwei Dinge treten gemeinsam auf",
     "wie viel von einem Ganzen",
     "ein einziger Zeitpunkt, kein Verlauf"
    ],
    "answer": 0,
    "w": "die Fehlerquote",
    "explain": "die Fehlerquote = wie stark das Ergebnis danebenliegen kann."
   },
   {
    "type": "choice",
    "audio": "relativ",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "im Verhältnis zu etwas anderem",
     "das eine bewirkt das andere",
     "die Richtung über längere Zeit",
     "so gesichert, dass man darauf bauen kann"
    ],
    "answer": 0,
    "w": "relativ",
    "explain": "relativ = im Verhältnis zu etwas anderem."
   },
   {
    "type": "choice",
    "audio": "absolut",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die nackte Zahl, ohne Verhältnis",
     "von wenigen auf alle schließen",
     "die Zahl trägt wirklich, was man aus ihr liest",
     "der Durchschnitt, der Ausreißer versteckt"
    ],
    "answer": 0,
    "w": "absolut",
    "explain": "absolut = die nackte Zahl, ohne Verhältnis."
   }
  ]
 },
 {
  "id": "c1-zwischen-den-zeilen",
  "title": "Zwischen den Zeilen: Andeutung, Ironie, höfliche Absage",
  "level": "C1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Andeutung",
    "info": "etwas sagen, ohne es auszusprechen",
    "emoji": "🌘"
   },
   {
    "de": "durch die Blume sagen",
    "info": "eine unangenehme Sache freundlich verpacken",
    "emoji": "🌷"
   },
   {
    "de": "der Unterton",
    "info": "was in der Stimme mitschwingt",
    "emoji": "🎵"
   },
   {
    "de": "untertreiben",
    "info": "kleiner darstellen, als es ist",
    "emoji": "🔽"
   },
   {
    "de": "beschönigen",
    "info": "schöner darstellen, als es ist",
    "emoji": "🎀"
   },
   {
    "de": "ausweichend",
    "info": "absichtlich unklar",
    "emoji": "🌁"
   },
   {
    "de": "verklausuliert",
    "info": "so umständlich, dass die Aussage fast verschwindet",
    "emoji": "🌀"
   },
   {
    "de": "hellhörig werden",
    "info": "aufmerksam werden, weil etwas nicht passt",
    "emoji": "👂"
   },
   {
    "de": "nachsetzen",
    "info": "noch einmal nachfragen, statt es hinzunehmen",
    "emoji": "🪝"
   },
   {
    "de": "den Wink verstehen",
    "info": "begreifen, was gemeint war",
    "emoji": "🤏"
   },
   {
    "de": "wohlwollend",
    "info": "freundlich gemeint, auch wenn es kritisch ist",
    "emoji": "🫶"
   },
   {
    "de": "süffisant",
    "info": "mit einem feinen Spott in der Stimme",
    "emoji": "😏"
   },
   {
    "de": "in aller Deutlichkeit",
    "info": "ohne jede Verpackung",
    "emoji": "📢"
   },
   {
    "de": "es dabei belassen",
    "info": "nicht weiter nachhaken",
    "emoji": "🤐"
   },
   {
    "de": "die Absage",
    "info": "das Nein, oft freundlich formuliert",
    "emoji": "🚫"
   },
   {
    "de": "zwischen den Zeilen",
    "info": "da, wo nichts steht und trotzdem etwas gemeint ist",
    "emoji": "📖"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📞 Rückmeldung nach dem Vorstellungsgespräch",
    "audioUrl": "ton/hoeren-c1/c1-zwischen-den-zeilen-1.mp3",
    "q": "Was ist die Kernaussage?",
    "options": [
     "Eine Absage für diese Stelle, verbunden mit ernst gemeintem Interesse.",
     "Eine Zusage für eine andere Stelle.",
     "Eine Einladung zu einem zweiten Gespräch.",
     "Eine Absage ohne weiteres Interesse."
    ],
    "answer": 0,
    "transcript": "Wir haben Ihr Gespräch noch einmal ausführlich besprochen, und ich sage Ihnen gleich: Sie haben einen sehr guten Eindruck hinterlassen. Für diese Stelle haben wir uns anders entschieden, weil wir jemanden mit mehr Erfahrung im Projektgeschäft gesucht haben. Ich würde Sie gern in Erinnerung behalten — sollte etwas frei werden, das besser passt, melde ich mich. Ich weiß, das hört man in solchen Gesprächen oft. Bei mir ist es keine Floskel; ich habe mir eine Notiz gemacht."
   },
   {
    "type": "listen",
    "label": "💬 Zwei Kolleginnen lesen eine E-Mail",
    "audioUrl": "ton/hoeren-c1/c1-zwischen-den-zeilen-2.mp3",
    "q": "Was bedeutet die E-Mail tatsächlich?",
    "options": [
     "Der Entwurf ist zu lang und soll deutlich gekürzt werden.",
     "Der Entwurf wird gelobt und bleibt, wie er ist.",
     "Der Termin nächste Woche fällt aus.",
     "Die Kollegin will den Entwurf selbst übernehmen."
    ],
    "answer": 0,
    "transcript": "Hör mal: Vielen Dank für den ausführlichen Entwurf, da steckt viel Arbeit drin. Ich würde vorschlagen, wir setzen uns nächste Woche zusammen und schauen gemeinsam, wie wir das Ganze etwas schlanker bekommen. — Klingt doch nett. — Nett schon. Aber ausführlich heißt hier zu lang, und schlanker heißt, die Hälfte fliegt raus. — Und warum schreibt sie es nicht einfach? — Weil du dann morgen im Termin sitzt und dich verteidigst, statt zu kürzen. So kommst du mit einer Schere."
   },
   {
    "type": "listen",
    "label": "🍽️ Beim Abendessen",
    "audioUrl": "ton/hoeren-c1/c1-zwischen-den-zeilen-3.mp3",
    "q": "Woran merkt die Köchin, dass es nicht schmeckt?",
    "options": [
     "An den ausweichenden Wörtern „interessant“ und „mutig gewürzt“.",
     "Daran, dass der Gast den Teller zurückgeschoben hat.",
     "Daran, dass der Gast gar nichts gesagt hat.",
     "Daran, dass der Gast nach Brot und Käse gefragt hat."
    ],
    "answer": 0,
    "transcript": "Und, wie schmeckt es dir? — Interessant. Wirklich interessant. Also, ich habe das so noch nie gegessen. — Du kannst es ruhig sagen. — Nein, nein, es ist… mutig gewürzt. — Also schlecht. — Ich habe nicht schlecht gesagt. — Du hast interessant gesagt, zweimal, und dann mutig. Ich koche seit dreißig Jahren, ich weiß, was das heißt. Gib her, ich hole uns Brot und Käse."
   },
   {
    "type": "listen",
    "label": "🎓 Aus einem Seminar zur Gesprächsführung",
    "audioUrl": "ton/hoeren-c1/c1-zwischen-den-zeilen-4.mp3",
    "q": "Wie ordnet der Sprecher diese Formulierungen ein?",
    "options": [
     "Als Höflichkeit, die zum Problem wird, wenn man sie als Zusage versteht.",
     "Als bewusste Unehrlichkeit.",
     "Als Zeichen von Unsicherheit.",
     "Als Formulierungen, die man vermeiden sollte."
    ],
    "answer": 0,
    "transcript": "Achten Sie auf drei Signale. Erstens die Einschränkung: Grundsätzlich gern — das Wort grundsätzlich trägt hier ein Nein. Zweitens der Zeitbezug: Nicht in diesem Quartal heißt selten später, meistens heißt es nicht. Und drittens das Lob, das der Kritik vorausgeht; je länger es ausfällt, desto schwerer wiegt, was danach kommt. Nichts davon ist Unehrlichkeit. Es ist Höflichkeit — und es kostet Sie nur dann etwas, wenn Sie sie für eine Zusage halten."
   },
   {
    "type": "choice",
    "audio": "die Andeutung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "etwas sagen, ohne es auszusprechen",
     "absichtlich unklar",
     "begreifen, was gemeint war",
     "nicht weiter nachhaken"
    ],
    "answer": 0,
    "w": "die Andeutung",
    "explain": "die Andeutung = etwas sagen, ohne es auszusprechen."
   },
   {
    "type": "choice",
    "audio": "durch die Blume sagen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "eine unangenehme Sache freundlich verpacken",
     "so umständlich, dass die Aussage fast verschwindet",
     "freundlich gemeint, auch wenn es kritisch ist",
     "das Nein, oft freundlich formuliert"
    ],
    "answer": 0,
    "w": "durch die Blume sagen",
    "explain": "durch die Blume sagen = eine unangenehme Sache freundlich verpacken."
   },
   {
    "type": "choice",
    "audio": "der Unterton",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "was in der Stimme mitschwingt",
     "aufmerksam werden, weil etwas nicht passt",
     "mit einem feinen Spott in der Stimme",
     "da, wo nichts steht und trotzdem etwas gemeint ist"
    ],
    "answer": 0,
    "w": "der Unterton",
    "explain": "der Unterton = was in der Stimme mitschwingt."
   },
   {
    "type": "choice",
    "audio": "untertreiben",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "kleiner darstellen, als es ist",
     "noch einmal nachfragen, statt es hinzunehmen",
     "ohne jede Verpackung",
     "etwas sagen, ohne es auszusprechen"
    ],
    "answer": 0,
    "w": "untertreiben",
    "explain": "untertreiben = kleiner darstellen, als es ist."
   },
   {
    "type": "choice",
    "audio": "beschönigen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "schöner darstellen, als es ist",
     "begreifen, was gemeint war",
     "nicht weiter nachhaken",
     "eine unangenehme Sache freundlich verpacken"
    ],
    "answer": 0,
    "w": "beschönigen",
    "explain": "beschönigen = schöner darstellen, als es ist."
   },
   {
    "type": "choice",
    "audio": "ausweichend",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "absichtlich unklar",
     "freundlich gemeint, auch wenn es kritisch ist",
     "das Nein, oft freundlich formuliert",
     "was in der Stimme mitschwingt"
    ],
    "answer": 0,
    "w": "ausweichend",
    "explain": "ausweichend = absichtlich unklar."
   },
   {
    "type": "choice",
    "audio": "verklausuliert",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "so umständlich, dass die Aussage fast verschwindet",
     "mit einem feinen Spott in der Stimme",
     "da, wo nichts steht und trotzdem etwas gemeint ist",
     "kleiner darstellen, als es ist"
    ],
    "answer": 0,
    "w": "verklausuliert",
    "explain": "verklausuliert = so umständlich, dass die Aussage fast verschwindet."
   },
   {
    "type": "choice",
    "audio": "hellhörig werden",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "aufmerksam werden, weil etwas nicht passt",
     "ohne jede Verpackung",
     "etwas sagen, ohne es auszusprechen",
     "schöner darstellen, als es ist"
    ],
    "answer": 0,
    "w": "hellhörig werden",
    "explain": "hellhörig werden = aufmerksam werden, weil etwas nicht passt."
   },
   {
    "type": "choice",
    "audio": "nachsetzen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "noch einmal nachfragen, statt es hinzunehmen",
     "nicht weiter nachhaken",
     "eine unangenehme Sache freundlich verpacken",
     "absichtlich unklar"
    ],
    "answer": 0,
    "w": "nachsetzen",
    "explain": "nachsetzen = noch einmal nachfragen, statt es hinzunehmen."
   },
   {
    "type": "choice",
    "audio": "den Wink verstehen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "begreifen, was gemeint war",
     "das Nein, oft freundlich formuliert",
     "was in der Stimme mitschwingt",
     "so umständlich, dass die Aussage fast verschwindet"
    ],
    "answer": 0,
    "w": "den Wink verstehen",
    "explain": "den Wink verstehen = begreifen, was gemeint war."
   },
   {
    "type": "choice",
    "audio": "wohlwollend",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "freundlich gemeint, auch wenn es kritisch ist",
     "da, wo nichts steht und trotzdem etwas gemeint ist",
     "kleiner darstellen, als es ist",
     "aufmerksam werden, weil etwas nicht passt"
    ],
    "answer": 0,
    "w": "wohlwollend",
    "explain": "wohlwollend = freundlich gemeint, auch wenn es kritisch ist."
   },
   {
    "type": "choice",
    "audio": "süffisant",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "mit einem feinen Spott in der Stimme",
     "etwas sagen, ohne es auszusprechen",
     "schöner darstellen, als es ist",
     "noch einmal nachfragen, statt es hinzunehmen"
    ],
    "answer": 0,
    "w": "süffisant",
    "explain": "süffisant = mit einem feinen Spott in der Stimme."
   },
   {
    "type": "choice",
    "audio": "in aller Deutlichkeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ohne jede Verpackung",
     "eine unangenehme Sache freundlich verpacken",
     "absichtlich unklar",
     "begreifen, was gemeint war"
    ],
    "answer": 0,
    "w": "in aller Deutlichkeit",
    "explain": "in aller Deutlichkeit = ohne jede Verpackung."
   },
   {
    "type": "choice",
    "audio": "es dabei belassen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "nicht weiter nachhaken",
     "was in der Stimme mitschwingt",
     "so umständlich, dass die Aussage fast verschwindet",
     "freundlich gemeint, auch wenn es kritisch ist"
    ],
    "answer": 0,
    "w": "es dabei belassen",
    "explain": "es dabei belassen = nicht weiter nachhaken."
   },
   {
    "type": "choice",
    "audio": "die Absage",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Nein, oft freundlich formuliert",
     "kleiner darstellen, als es ist",
     "aufmerksam werden, weil etwas nicht passt",
     "mit einem feinen Spott in der Stimme"
    ],
    "answer": 0,
    "w": "die Absage",
    "explain": "die Absage = das Nein, oft freundlich formuliert."
   },
   {
    "type": "choice",
    "audio": "zwischen den Zeilen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "da, wo nichts steht und trotzdem etwas gemeint ist",
     "schöner darstellen, als es ist",
     "noch einmal nachfragen, statt es hinzunehmen",
     "ohne jede Verpackung"
    ],
    "answer": 0,
    "w": "zwischen den Zeilen",
    "explain": "zwischen den Zeilen = da, wo nichts steht und trotzdem etwas gemeint ist."
   }
  ]
 }
];

  NEU.forEach(function(t){
    var pos = -1;
    for(var i=0;i<ho.themes.length;i++){ if(ho.themes[i].id===t.id){ pos=i; break; } }
    if(pos>=0) ho.themes[pos] = t; else ho.themes.push(t);
  });
})();
