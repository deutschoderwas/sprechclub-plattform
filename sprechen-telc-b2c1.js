/* ============================================================
   deutschoderwas club — SPRECHEN telc Deutsch B2·C1 Beruf

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B2·C1 Beruf,
   geprüft 03.11.2026). Alle Texte und Aufgaben eigene, Kontext
   Arbeitswelt. Erzeugt aus scratchpad/telcb2c1 mit bau.js.
   ============================================================ */

window.SPRECHEN_TELC_B2C1 = {
 "niveau": "telcB2C1",
 "pruefung": "telc Deutsch B2·C1 Beruf",
 "minuten": 20,
 "punkte": 100,
 "intro": "Der Mündliche Ausdruck bei telc B2·C1 Beruf ist eine Paarprüfung von etwa zwanzig Minuten. Teil 1: Small Talk zu einem Foto aus der Arbeitswelt. Teil 2: eine Präsentation von etwa drei Minuten, frei gesprochen und zu Hause vorbereitet, dann Rückfragen. Teil 3: eine Diskussion über zwei gegensätzliche Aussagen. Von 100 Punkten gibt es 50 für die Aufgaben und 50 für Aussprache, Flüssigkeit, Korrektheit und Wortschatz. B2 ab 35, C1 ab 75. Wer die Präsentation abliest, bekommt dafür sehr wenig.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Die Bausteine",
   "zeichen": "🧱",
   "was": "Small Talk im Beruf, frei präsentieren."
  },
  {
   "nr": 2,
   "titel": "Rückfragen und Diskussion",
   "zeichen": "💬",
   "was": "Auf Fragen antworten, kontrovers diskutieren."
  },
  {
   "nr": 3,
   "titel": "Die drei Teile",
   "zeichen": "🎯",
   "was": "Small Talk, Präsentation, Diskussion mit Musterlösung zum Anhören."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "Alle drei Teile hintereinander, zwanzig Minuten."
  }
 ],
 "bloecke": [
  {
   "id": "tbc1m1",
   "stufe": 1,
   "titel": "Small Talk im Beruf: reagieren, nachfragen, erzählen",
   "kurz": "Auf ein Foto und eine Frage locker und ausführlich antworten",
   "ziel": "Nach diesem Block steigst du mit einem Satz zum Foto ins Gespräch ein, erzählst von deiner eigenen Erfahrung mit einem konkreten Beispiel, reagierst auf dein Gegenüber und hältst das Gespräch mit Gegenfragen am Laufen.",
   "zeichen": "☕",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Dein Gegenüber sagt: „Ich bleibe abends oft noch länger im Büro.“ Wie reagierst du passend?",
     "optionen": [
      "Aha.",
      "Das kenne ich. Bei uns ist das vor allem am Monatsende so. Wie lange wird es denn bei Ihnen meistens?",
      "Das ist falsch, man sollte pünktlich nach Hause gehen."
     ],
     "loesung": 1,
     "erklaerung": "Reagieren, kurz etwas Eigenes erzählen und eine Gegenfrage stellen: So bleibt das Gespräch in Bewegung."
    },
    {
     "art": "wahl",
     "frage": "Wie steigst du mit dem Foto ins Gespräch ein?",
     "optionen": [
      "Das Foto zeigt, was es zeigt.",
      "Auf dem Foto sitzt ein Mann abends allein im Büro, und das erinnert mich ehrlich gesagt an meine erste Stelle.",
      "Foto, Büro, Abend."
     ],
     "loesung": 1,
     "erklaerung": "Ein, zwei Sätze zum Foto reichen. Dann gehst du zu deiner Erfahrung über, denn darum geht es eigentlich."
    },
    {
     "art": "wahl",
     "frage": "Was ist im Small Talk auf B2·C1 NICHT gefragt?",
     "optionen": [
      "eine lange Bildbeschreibung mit jedem kleinen Detail",
      "eigene Erfahrungen und Beispiele",
      "auf das Gegenüber eingehen und nachfragen"
     ],
     "loesung": 0,
     "erklaerung": "Teil eins ist ein Gespräch über ein Arbeitsthema. Das Foto ist nur der Anlass, keine Beschreibungsaufgabe."
    },
    {
     "art": "wahl",
     "frage": "Wie fragst du nach, wenn du etwas genauer wissen willst?",
     "optionen": [
      "Wie meinen Sie das genau? Geht es bei Ihnen eher um die lange Fahrzeit oder um die vollen Züge?",
      "Was?",
      "Erzählen Sie mal alles."
     ],
     "loesung": 0,
     "erklaerung": "Eine gezielte Nachfrage zeigt, dass du zugehört hast, und gibt deinem Gegenüber eine Richtung."
    },
    {
     "art": "wahl",
     "frage": "Wie leitest du ein Beispiel natürlich ein?",
     "optionen": [
      "Beispiel: Arbeit.",
      "Bei uns in der Firma war das letztes Jahr so: Da haben wir …",
      "Ein Beispiel wäre theoretisch auch möglich."
     ],
     "loesung": 1,
     "erklaerung": "Ein konkretes Erlebnis mit Ort und Zeit wirkt echt und zeigt dein Sprachniveau."
    },
    {
     "art": "wahl",
     "frage": "Dein Gegenüber erzählt von einem Problem bei der Arbeit. Welche Reaktion zeigt echtes Interesse?",
     "optionen": [
      "Ja, ja.",
      "Mir ist so etwas noch nie passiert.",
      "Das ist ja ärgerlich. Und wie haben Sie das dann gelöst?"
     ],
     "loesung": 2,
     "erklaerung": "Erst kurz Mitgefühl zeigen, dann eine offene Frage stellen: So bekommt dein Gegenüber wieder das Wort."
    },
    {
     "art": "wahl",
     "frage": "Wie sagst du vorsichtig deine Meinung?",
     "optionen": [
      "Feste Pausen, sonst nichts.",
      "Ich bin mir nicht ganz sicher, aber ich glaube, dass feste Pausenzeiten auf Dauer besser sind.",
      "Meine Meinung ist egal."
     ],
     "loesung": 1,
     "erklaerung": "Abschwächungen wie „ich bin mir nicht ganz sicher“ klingen im Small Talk natürlich und höflich."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist richtig?",
     "optionen": [
      "Ehrlich gesagt arbeite ich lieber im Büro, weil ich dort die Kollegen sehe.",
      "Ehrlich gesagt ich arbeite lieber im Büro, weil ich sehe dort die Kollegen.",
      "Ehrlich gesagt arbeite ich lieber im Büro, weil sehe ich dort die Kollegen."
     ],
     "loesung": 0,
     "erklaerung": "„Ehrlich gesagt“ steht auf Position eins, dann folgt das Verb. Im Nebensatz mit „weil“ steht das Verb am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Gegenfrage.",
     "teile": [
      "Und",
      "wie",
      "ist",
      "das",
      "eigentlich",
      "bei Ihnen",
      "in der Firma?"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6
     ],
     "erklaerung": "Mit „Und wie ist das bei Ihnen?“ gibst du das Wort elegant zurück."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Reaktion.",
     "teile": [
      "Das",
      "geht",
      "mir",
      "ganz ähnlich,",
      "vor allem",
      "im Winter."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "„Das geht mir ähnlich“ zeigt Zustimmung und leitet zu deiner eigenen Erfahrung über."
    }
   ]
  },
  {
   "id": "tbc1m2",
   "stufe": 1,
   "titel": "Eine Präsentation frei halten",
   "kurz": "Gliederung, Überleitungen und Stichwortzettel statt Ablesen",
   "ziel": "Nach diesem Block hältst du eine Präsentation von etwa drei Minuten frei: mit einem Einstieg, der dich und dein Thema vorstellt, einer angekündigten Gliederung, klaren Überleitungen, konkreten Zahlen und einem Schluss.",
   "zeichen": "🎤",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie beginnst du deine Präsentation?",
     "optionen": [
      "Ja, also, ich fange einfach mal an.",
      "Ich arbeite als Disponent in einer Spedition und möchte Ihnen heute ein Projekt vorstellen, das unseren Alltag ziemlich verändert hat.",
      "Mein Thema steht ja auf dem Zettel."
     ],
     "loesung": 1,
     "erklaerung": "Kurz sagen, wer du bist und worum es geht. Das gibt dem Vortrag einen Rahmen und macht neugierig."
    },
    {
     "art": "wahl",
     "frage": "Wie kündigst du die Gliederung an?",
     "optionen": [
      "Ich erzähle einfach alles nacheinander.",
      "Es gibt viele Punkte.",
      "Zuerst erkläre ich kurz die Ausgangslage, dann gehe ich auf die Umsetzung ein, und zum Schluss sage ich, was wir daraus gelernt haben."
     ],
     "loesung": 2,
     "erklaerung": "Wenn die Zuhörer die Reihenfolge kennen, können sie dir leichter folgen."
    },
    {
     "art": "wahl",
     "frage": "Welche Überleitung passt zwischen zwei Teilen?",
     "optionen": [
      "Das war das.",
      "Soweit zur Ausgangslage. Jetzt möchte ich darauf eingehen, wie wir das Projekt umgesetzt haben.",
      "Nächster Punkt, weiter."
     ],
     "loesung": 1,
     "erklaerung": "Eine gute Überleitung schließt den einen Teil ab und kündigt den nächsten an."
    },
    {
     "art": "wahl",
     "frage": "Was gehört auf deinen Zettel für die Prüfung?",
     "optionen": [
      "der ganze Vortrag in ganzen Sätzen",
      "gar nichts, du sprichst völlig ohne Hilfe",
      "Stichworte zur Gliederung, ein paar Zahlen und deine Überleitungen"
     ],
     "loesung": 2,
     "erklaerung": "Wer abliest, verliert den Blickkontakt und wirkt unsicher. Stichworte helfen dir, frei zu bleiben."
    },
    {
     "art": "wahl",
     "frage": "Du hast mitten im Vortrag den Faden verloren. Was machst du?",
     "optionen": [
      "Ich schweige, bis mir wieder etwas einfällt.",
      "Moment, wo war ich? Genau, bei den Kosten.",
      "Entschuldigung, ich höre jetzt lieber auf."
     ],
     "loesung": 1,
     "erklaerung": "So etwas passiert auch Muttersprachlern. Ein kurzer Satz wie „Wo war ich?“ klingt natürlich und gibt dir Zeit."
    },
    {
     "art": "wahl",
     "frage": "Wie machst du eine Aussage anschaulich?",
     "optionen": [
      "Das ist sehr wichtig für alle.",
      "Das ist irgendwie besser geworden.",
      "Vorher haben die Fahrer im Schnitt eine Stunde an der Rampe gewartet, heute sind es noch etwa zwanzig Minuten."
     ],
     "loesung": 2,
     "erklaerung": "Konkrete Zahlen und ein Vorher und Nachher überzeugen mehr als allgemeine Wörter."
    },
    {
     "art": "wahl",
     "frage": "Wie lange sprichst du in Teil zwei ungefähr allein?",
     "optionen": [
      "etwa eine Minute",
      "etwa drei Minuten, danach kommen Rückfragen",
      "so lange, wie du möchtest"
     ],
     "loesung": 1,
     "erklaerung": "Übe zu Hause mit der Uhr. Drei Minuten sind länger, als man denkt, aber auch schnell vorbei."
    },
    {
     "art": "wahl",
     "frage": "Wie beendest du die Präsentation?",
     "optionen": [
      "Zusammenfassend kann man sagen, dass sich der Aufwand gelohnt hat. Ich beantworte gern Ihre Fragen.",
      "Fertig, danke.",
      "Das war es eigentlich schon, mehr fällt mir nicht ein."
     ],
     "loesung": 0,
     "erklaerung": "Ein Satz als Fazit und eine Einladung zu Fragen: So weiß jeder, dass du fertig bist."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Überleitung.",
     "teile": [
      "Damit",
      "komme",
      "ich",
      "zum",
      "zweiten",
      "Teil",
      "meiner Präsentation."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6
     ],
     "erklaerung": "„Damit“ steht auf Position eins, deshalb folgt sofort das Verb „komme“."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Schluss.",
     "teile": [
      "Zusammenfassend",
      "lässt sich",
      "sagen,",
      "dass",
      "sich",
      "die Umstellung",
      "gelohnt hat."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6
     ],
     "erklaerung": "Im Nebensatz mit „dass“ steht das konjugierte Verb „hat“ ganz am Ende."
    }
   ]
  },
  {
   "id": "tbc1m3",
   "stufe": 2,
   "titel": "Auf Rückfragen antworten",
   "kurz": "Zeit gewinnen, genau antworten, auch mal Nichtwissen zugeben",
   "ziel": "Nach diesem Block beantwortest du Rückfragen zu deiner Präsentation sicher: Du klärst, was gemeint ist, gewinnst einen Moment Zeit, antwortest mit Begründung oder Beispiel und gibst offen zu, wenn du etwas nicht genau weißt.",
   "zeichen": "💬",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Du hast die Frage nicht ganz verstanden. Was sagst du?",
     "optionen": [
      "Das habe ich doch schon gesagt.",
      "Habe ich Sie richtig verstanden, dass Sie wissen möchten, wie viel das Projekt gekostet hat?",
      "Nächste Frage, bitte."
     ],
     "loesung": 1,
     "erklaerung": "Mit einer Rückversicherung klärst du die Frage und gewinnst gleichzeitig ein paar Sekunden."
    },
    {
     "art": "wahl",
     "frage": "Du brauchst einen Moment zum Nachdenken. Was klingt natürlich?",
     "optionen": [
      "Äh. Äh. Äh.",
      "Keine Ahnung.",
      "Gute Frage, darüber habe ich ehrlich gesagt noch gar nicht so genau nachgedacht. Ich würde sagen …"
     ],
     "loesung": 2,
     "erklaerung": "Solche Sätze verschaffen dir Zeit und klingen trotzdem souverän."
    },
    {
     "art": "wahl",
     "frage": "Du kennst die genaue Zahl nicht. Wie reagierst du?",
     "optionen": [
      "Das weiß ich nicht genau, aber es waren ungefähr dreißig Leute, eher mehr.",
      "Fünfhundertdreiundvierzig, ganz sicher.",
      "Dazu sage ich nichts."
     ],
     "loesung": 0,
     "erklaerung": "Ehrlich sein und eine Schätzung geben ist besser, als eine Zahl zu erfinden."
    },
    {
     "art": "wahl",
     "frage": "Frage: „Würden Sie das Projekt noch einmal genauso machen?“ Welche Antwort ist am besten aufgebaut?",
     "optionen": [
      "Ja.",
      "Das Projekt war gut und schlecht und eigentlich ganz normal.",
      "Im Großen und Ganzen ja. Nur die Schulungen würde ich früher ansetzen, weil viele Kollegen am Anfang ziemlich überfordert waren."
     ],
     "loesung": 2,
     "erklaerung": "Kurze Antwort, Einschränkung, Begründung: Das ist auf B2·C1 genau richtig."
    },
    {
     "art": "wahl",
     "frage": "Die Frage geht etwas an deinem Thema vorbei. Was sagst du?",
     "optionen": [
      "Das gehört nicht zu meinem Thema.",
      "Das ist ein etwas anderer Punkt, aber ich kann kurz etwas dazu sagen.",
      "Fragen Sie da lieber jemand anderen."
     ],
     "loesung": 1,
     "erklaerung": "Du zeigst, dass du den Unterschied bemerkst, und antwortest trotzdem höflich."
    },
    {
     "art": "wahl",
     "frage": "Wie greifst du die Frage am Anfang deiner Antwort auf?",
     "optionen": [
      "Was die Kosten angeht, so waren die am Ende etwas höher als geplant.",
      "Kosten, ja.",
      "Ich weiß nicht, warum Sie das fragen."
     ],
     "loesung": 0,
     "erklaerung": "„Was … angeht“ oder „Zu Ihrer Frage nach …“: So zeigst du, dass du genau zugehört hast."
    },
    {
     "art": "wahl",
     "frage": "Wie lang sollte deine Antwort auf eine Rückfrage sein?",
     "optionen": [
      "ein Wort",
      "drei bis fünf Sätze, mit Begründung oder Beispiel",
      "noch einmal der ganze Vortrag"
     ],
     "loesung": 1,
     "erklaerung": "Ausführlich genug, um etwas zu zeigen, aber kurz genug, dass ein Gespräch entsteht."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist richtig?",
     "optionen": [
      "Darauf habe ich in meiner Präsentation nur kurz eingegangen.",
      "Darauf bin ich in meiner Präsentation nur kurz eingegangen.",
      "Dafür bin ich in meiner Präsentation nur kurz eingegangen."
     ],
     "loesung": 1,
     "erklaerung": "„Eingehen auf“ bildet das Perfekt mit „sein“, und die Präposition „auf“ steckt in „darauf“."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Rückversicherung.",
     "teile": [
      "Wenn",
      "ich",
      "Sie",
      "richtig",
      "verstanden habe,",
      "geht",
      "es",
      "Ihnen",
      "um die Kosten."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
     ],
     "erklaerung": "Der Nebensatz mit „wenn“ steht vorne, deshalb beginnt der Hauptsatz mit dem Verb „geht“."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Antwort.",
     "teile": [
      "Darauf",
      "bin",
      "ich",
      "vorhin",
      "nur",
      "kurz",
      "eingegangen."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6
     ],
     "erklaerung": "Hilfsverb auf Position zwei, das Partizip „eingegangen“ am Ende."
    }
   ]
  },
  {
   "id": "tbc1m4",
   "stufe": 2,
   "titel": "Kontrovers diskutieren auf C1",
   "kurz": "Widersprechen, einschränken und am Ende einen Kompromiss finden",
   "ziel": "Nach diesem Block vertrittst du in einer Diskussion eine klare Position, widersprichst höflich, aber deutlich, schränkst Argumente ein, gehst auf dein Gegenüber ein und führst das Gespräch zu einem gemeinsamen Ergebnis.",
   "zeichen": "⚖️",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie widersprichst du höflich, aber klar?",
     "optionen": [
      "Das ist Quatsch.",
      "Da muss ich Ihnen widersprechen. Bei uns hat genau das Gegenteil funktioniert.",
      "Hm, vielleicht, ich weiß nicht."
     ],
     "loesung": 1,
     "erklaerung": "Klarer Widerspruch plus eigene Erfahrung: Das ist deutlich, ohne unhöflich zu sein."
    },
    {
     "art": "wahl",
     "frage": "Wie schränkst du ein Argument ein?",
     "optionen": [
      "Das stimmt zwar für große Firmen, aber in einem Betrieb mit zwanzig Leuten sieht das anders aus.",
      "Das stimmt, aber nein.",
      "Das stimmt immer."
     ],
     "loesung": 0,
     "erklaerung": "„Das stimmt zwar …, aber …“ erkennt den Punkt an und setzt trotzdem eine Grenze."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz zeigt C1-Niveau beim Abwägen?",
     "optionen": [
      "Homeoffice ist gut und schlecht.",
      "Ich finde Homeoffice okay.",
      "Einerseits spart man sich den Arbeitsweg, andererseits fehlt der kurze Austausch auf dem Flur, und den halte ich für wichtiger, als viele denken."
     ],
     "loesung": 2,
     "erklaerung": "Zwei Seiten nennen und dann selbst gewichten: Das ist echtes Abwägen."
    },
    {
     "art": "wahl",
     "frage": "Dein Partner bringt ein gutes Gegenargument. Wie reagierst du?",
     "optionen": [
      "Nein, ich habe recht.",
      "Das ist ein guter Punkt, den ich so noch nicht gesehen habe. Trotzdem bleibe ich dabei, dass …",
      "Ja, dann haben Sie recht, ich sage nichts mehr."
     ],
     "loesung": 1,
     "erklaerung": "Ein Argument anerkennen und bei der eigenen Position bleiben, das wirkt souverän."
    },
    {
     "art": "wahl",
     "frage": "Wie lenkst du die Diskussion zu einem Ergebnis?",
     "optionen": [
      "Ich habe gewonnen.",
      "Lassen wir das lieber.",
      "Können wir uns vielleicht darauf einigen, dass es stark auf die Abteilung ankommt?"
     ],
     "loesung": 2,
     "erklaerung": "In Teil drei sollt ihr zu einem Ergebnis kommen. Ein Kompromissvorschlag zeigt, dass du das Gespräch steuern kannst."
    },
    {
     "art": "wahl",
     "frage": "Was ist in Teil drei NICHT sinnvoll?",
     "optionen": [
      "lange allein sprechen und den Partner nicht zu Wort kommen lassen",
      "Fragen an den Partner stellen",
      "auf seine Argumente eingehen"
     ],
     "loesung": 0,
     "erklaerung": "Bewertet wird auch, wie ihr miteinander sprecht. Ein Monolog kostet Punkte."
    },
    {
     "art": "wahl",
     "frage": "Wie fragst du nach der Meinung des Partners?",
     "optionen": [
      "Sie sind dran.",
      "Wie sehen Sie das denn aus Ihrer Erfahrung?",
      "Sagen Sie jetzt mal was."
     ],
     "loesung": 1,
     "erklaerung": "Eine offene Frage mit Bezug auf die Erfahrung lädt zu einer echten Antwort ein."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist richtig?",
     "optionen": [
      "Ich gebe Ihnen insofern recht, als die Kosten tatsächlich steigen.",
      "Ich gebe Ihnen insofern recht, dass die Kosten steigen tatsächlich.",
      "Ich gebe Ihnen recht insofern, als steigen die Kosten."
     ],
     "loesung": 0,
     "erklaerung": "„Insofern …, als …“ ist eine typische C1-Wendung zum Einschränken. Im Nebensatz steht das Verb am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Widerspruch.",
     "teile": [
      "Da",
      "muss",
      "ich",
      "Ihnen",
      "entschieden",
      "widersprechen."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "„Da“ auf Position eins, das Modalverb auf Position zwei, der Infinitiv am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Einschränkung.",
     "teile": [
      "Das",
      "mag",
      "zwar",
      "stimmen,",
      "aber",
      "in der Praxis",
      "sieht",
      "es",
      "anders",
      "aus."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
     ],
     "erklaerung": "Nach „aber“ beginnt ein neuer Hauptsatz: „in der Praxis“ auf Position eins, dann das Verb „sieht“."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "erzaehlen",
   "name": "Small Talk",
   "kurz": "Ein Foto, eigene Erfahrungen, etwa vier Minuten",
   "was": "Ihr sprecht über ein Foto aus der Arbeitswelt: was man sieht, welche Erfahrungen ihr damit habt und wie ihr darüber denkt. Ohne Vorbereitung.",
   "tipp": "Das Foto ist nur der Anfang. Schnell zu eigenen Beispielen kommen und das Gegenüber etwas fragen.",
   "zeichen": "📷",
   "farbe": "turq",
   "punkte": 10,
   "runden": [
    {
     "id": "tbc1m1r1",
     "thema": "Arbeitszeit und Überstunden",
     "karten": [
      {
       "kopf": "Teil 1 · Small Talk",
       "kopfb": "Bildimpuls",
       "auftrag": [
        "Sprich über das Foto und über deine eigenen Erfahrungen.",
        "Sag, wie du darüber denkst, und gib Beispiele.",
        "Reagiere auf die Frage deines Gegenübers."
       ],
       "id": "tbc1m1k1",
       "foto": "abends",
       "thema": "Arbeitszeit und Überstunden",
       "bild": "Ein Mann sitzt abends allein in einem dunklen Büro am Schreibtisch. Nur seine Schreibtischlampe und der Bildschirm leuchten, draußen ist es dunkel.",
       "punkte": [
        "Was sehen Sie?",
        "Welche Erfahrungen haben Sie damit?",
        "Wie denken Sie darüber? Geben Sie Beispiele."
       ],
       "frage": "Sollten Überstunden immer bezahlt werden, oder ist Freizeitausgleich besser?",
       "mustervortrag": "Auf dem Foto sitzt ein Mann abends allein in einem dunklen Büro am Schreibtisch. Nur seine Schreibtischlampe und der Bildschirm leuchten, draußen ist es schon dunkel. Ich vermute, die anderen sind längst nach Hause gegangen und er muss noch etwas fertig machen. Also, das Bild kenne ich ehrlich gesagt sehr gut. Ich arbeite in der Lohnbuchhaltung, und am Monatsende sitze ich auch oft bis acht oder neun im Büro, weil die Abrechnungen bis zum Fünfundzwanzigsten raus müssen. Am Anfang fand ich das gar nicht schlimm, man ist ja motiviert. Aber nach einem Jahr habe ich gemerkt, dass ich am nächsten Morgen viel langsamer bin und mehr Fehler mache. Bei uns in der Firma gibt es inzwischen ein Arbeitszeitkonto. Jede Überstunde wird aufgeschrieben, und im Sommer kann ich sie abbauen, letztes Jahr waren das immerhin vier freie Tage. Ich finde, Überstunden sind in Ordnung, wenn sie die Ausnahme bleiben. Wenn aber jemand jeden Abend so allein im Büro sitzt wie der Mann auf dem Foto, dann stimmt meiner Meinung nach etwas mit der Planung nicht.",
       "musterantwort": "Für mich persönlich ist Freizeit wichtiger als Geld. Wenn ich im Februar viel gearbeitet habe, nehme ich lieber im März ein paar Tage frei, dann erhole ich mich wirklich. Aber ich verstehe auch Kollegen mit Familie, die das Geld dringend brauchen. Am besten wäre es, wenn jeder das selbst entscheiden kann."
      }
     ]
    },
    {
     "id": "tbc1m1r2",
     "thema": "Arbeiten im Homeoffice",
     "karten": [
      {
       "kopf": "Teil 1 · Small Talk",
       "kopfb": "Bildimpuls",
       "auftrag": [
        "Sprich über das Foto und über deine eigenen Erfahrungen.",
        "Sag, wie du darüber denkst, und gib Beispiele.",
        "Reagiere auf die Frage deines Gegenübers."
       ],
       "id": "tbc1m1k2",
       "foto": "homeoffice",
       "thema": "Arbeiten im Homeoffice",
       "bild": "Eine Frau mit langen Haaren sitzt an einem Holztisch am Fenster und tippt auf einem Laptop. Neben ihr steht eine Tasse auf einer Untertasse, daneben liegt eine Brille.",
       "punkte": [
        "Was sehen Sie?",
        "Welche Erfahrungen haben Sie damit?",
        "Wie denken Sie darüber? Geben Sie Beispiele."
       ],
       "frage": "Wie trennen Sie zu Hause Arbeit und Freizeit?",
       "mustervortrag": "Auf dem Foto sieht man eine Frau mit langen Haaren, die an einem Holztisch am Fenster sitzt und auf einem Laptop tippt. Neben ihr steht eine Tasse auf einer Untertasse, daneben liegt eine Brille. Wahrscheinlich arbeitet sie von zu Hause aus, nach einem Büro sieht es jedenfalls nicht aus. So sitze ich auch zweimal in der Woche, nur dass bei mir manchmal die Katze über die Tastatur läuft. Ich bin Sachbearbeiterin bei einer Krankenkasse, und seit drei Jahren dürfen wir an zwei Tagen im Homeoffice arbeiten. Ehrlich gesagt schaffe ich zu Hause mehr, weil keiner vorbeikommt und fragt, ob ich mal eben helfen kann. Und ich spare mir jeden Tag fast eine Stunde Fahrt. Andererseits fehlt mir manchmal der Kontakt. Wenn ich einen schwierigen Fall habe, frage ich im Büro einfach meine Kollegin am Nachbartisch. Zu Hause muss ich anrufen oder eine Nachricht schreiben, und dann dauert alles länger. Deshalb finde ich die Mischung am besten, also ein paar Tage zu Hause und ein paar Tage im Büro.",
       "musterantwort": "Das war am Anfang wirklich schwierig. Inzwischen habe ich eine feste Regel: Um fünf klappe ich den Laptop zu und stelle ihn in den Schrank. Dann sehe ich ihn nicht mehr und denke auch nicht mehr an die Arbeit. Und ich ziehe mich morgens ganz normal an, also nicht im Schlafanzug an den Schreibtisch."
      }
     ]
    },
    {
     "id": "tbc1m1r3",
     "thema": "Der Weg zur Arbeit",
     "karten": [
      {
       "kopf": "Teil 1 · Small Talk",
       "kopfb": "Bildimpuls",
       "auftrag": [
        "Sprich über das Foto und über deine eigenen Erfahrungen.",
        "Sag, wie du darüber denkst, und gib Beispiele.",
        "Reagiere auf die Frage deines Gegenübers."
       ],
       "id": "tbc1m1k3",
       "foto": "pendeln",
       "thema": "Der Weg zur Arbeit",
       "bild": "Eine volle Bahn von innen: Viele Menschen stehen dicht nebeneinander und halten sich an Griffen fest.",
       "punkte": [
        "Was sehen Sie?",
        "Welche Erfahrungen haben Sie damit?",
        "Wie denken Sie darüber? Geben Sie Beispiele."
       ],
       "frage": "Würden Sie für einen kürzeren Arbeitsweg auch weniger Gehalt akzeptieren?",
       "mustervortrag": "Auf dem Foto sieht man eine volle Bahn von innen. Viele Menschen stehen dicht nebeneinander und halten sich an Griffen fest. Ich nehme an, das ist morgens im Berufsverkehr, so sieht es bei uns jedenfalls auch um halb acht aus. Ich pendle jeden Tag von Bergisch Gladbach nach Köln, das sind mit der Bahn ungefähr vierzig Minuten, wenn alles klappt. Und es klappt leider oft nicht. Letzten Winter ist meine Bahn zwei Wochen lang fast jeden Morgen ausgefallen oder kam zu spät, und ich musste meinem Chef ständig schreiben, dass ich später komme. Trotzdem fahre ich lieber Bahn als Auto. Im Auto stehe ich im Stau und kann nichts machen, in der Bahn lese ich oder beantworte schon die ersten Mails, wenn ich einen Sitzplatz habe. Ich finde, Firmen sollten das Pendeln stärker unterstützen, zum Beispiel mit einem Zuschuss zum Monatsticket oder mit flexiblen Anfangszeiten. Dann müssten auch nicht alle zur gleichen Zeit in so einer vollen Bahn stehen wie die Leute auf dem Foto.",
       "musterantwort": "Gute Frage. Ein bisschen weniger vielleicht schon, wenn ich dafür mit dem Fahrrad zur Arbeit fahren könnte. Jeden Tag achtzig Minuten hin und zurück, das ist im Jahr eine Menge Zeit. Aber viel weniger Geld ginge nicht, dafür sind die Mieten in der Stadt einfach zu hoch."
      }
     ]
    },
    {
     "id": "tbc1m1r4",
     "thema": "Pausen und Mittagessen im Betrieb",
     "karten": [
      {
       "kopf": "Teil 1 · Small Talk",
       "kopfb": "Bildimpuls",
       "auftrag": [
        "Sprich über das Foto und über deine eigenen Erfahrungen.",
        "Sag, wie du darüber denkst, und gib Beispiele.",
        "Reagiere auf die Frage deines Gegenübers."
       ],
       "id": "tbc1m1k4",
       "foto": "mittagspause",
       "thema": "Pausen und Mittagessen im Betrieb",
       "bild": "In einem hellen Büroraum mit großen Fenstern sitzen etwa acht Kollegen an einem langen Holztisch und essen zusammen zu Mittag. Sie unterhalten sich.",
       "punkte": [
        "Was sehen Sie?",
        "Welche Erfahrungen haben Sie damit?",
        "Wie denken Sie darüber? Geben Sie Beispiele."
       ],
       "frage": "Reden Sie in der Pause auch über die Arbeit, oder ist das bei Ihnen tabu?",
       "mustervortrag": "Auf dem Foto sitzen etwa acht Kollegen an einem langen Holztisch in einem hellen Büroraum mit großen Fenstern. Sie essen zusammen zu Mittag und unterhalten sich, die Stimmung wirkt entspannt. Vielleicht ist das eine kleinere Firma, in der alle gemeinsam Pause machen. Bei uns sieht das leider ganz anders aus. Ich arbeite als technischer Zeichner in einem Ingenieurbüro, und die meisten Kollegen essen am Schreibtisch, mit einer Hand an der Maus. Ich habe das auch lange so gemacht, bis ich gemerkt habe, dass ich nachmittags ständig müde war. Seit dem Frühjahr gehen wir zu viert zweimal pro Woche in die Kantine einer Nachbarfirma, da dürfen wir mitessen. Das ist für mich die beste halbe Stunde des Tages. Man redet über andere Sachen als über die Arbeit, und ehrlich gesagt lösen sich dabei manchmal auch Probleme, für die man sonst drei Mails gebraucht hätte. Ich finde, Pausen sollten wirklich Pausen sein. Ein gemeinsamer Tisch wie auf dem Foto ist eine gute Idee, auch wenn es dafür natürlich Platz braucht.",
       "musterantwort": "Tabu ist es nicht, aber wir versuchen es zu vermeiden. Meistens geht es um Fußball, um den nächsten Urlaub oder um die Kinder. Wenn doch einer mit einem Projekt anfängt, sagt ein Kollege jedes Mal: Das klären wir um eins. Dann lachen alle, und wir wechseln das Thema."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "erzaehlen",
   "name": "Präsentation",
   "kurz": "Etwa drei Minuten frei, dann Rückfragen",
   "was": "Du präsentierst ein Thema mit Bezug zu deinem Beruf, etwa drei Minuten, frei gesprochen. Danach stellt dein Gegenüber Fragen.",
   "tipp": "Nur Stichworte auf dem Zettel, ganze Sätze im Kopf. Am Anfang sagen, was kommt, am Ende kurz zusammenfassen.",
   "zeichen": "🎤",
   "farbe": "gold",
   "punkte": 20,
   "runden": [
    {
     "id": "tbc1m2r1",
     "thema": "Ein Projekt aus meinem Arbeitsalltag",
     "karten": [
      {
       "kopf": "Teil 2 · Präsentation",
       "kopfb": "Dein Thema",
       "auftrag": [
        "Präsentiere etwa drei Minuten frei, nicht vom Blatt.",
        "Gliedere: Einleitung, Hauptpunkte, Schluss.",
        "Beantworte danach die Rückfrage."
       ],
       "id": "tbc1m2k1",
       "thema": "Ein Projekt aus meinem Arbeitsalltag",
       "punkte": [
        "Ihr Beruf und Ihr Arbeitsplatz",
        "Ausgangslage: Was war das Problem?",
        "Wie lief das Projekt ab?",
        "Schwierigkeiten unterwegs",
        "Ergebnis und was Sie daraus mitnehmen"
       ],
       "mustervortrag": "Guten Tag. Ich arbeite seit sechs Jahren als Disponent bei einer Spedition in Duisburg, und ich möchte Ihnen heute ein Projekt vorstellen, das unseren Alltag ziemlich verändert hat: die Einführung von festen Zeitfenstern an unserer Laderampe. Zuerst erkläre ich kurz, wo das Problem lag, dann erzähle ich, wie wir vorgegangen sind und was dabei schiefgelaufen ist, und zum Schluss komme ich zum Ergebnis.\nAlso, zur Ausgangslage. Wir haben ein Lager mit acht Toren, und früher kamen die Lastwagen einfach, wann sie wollten. Morgens zwischen sechs und neun standen manchmal fünfzehn Fahrzeuge auf dem Hof und auf der Straße davor, die Fahrer haben teilweise zwei Stunden gewartet, und nachmittags war es dann fast leer. Die Nachbarn haben sich beschwert, die Fahrer auch, und unsere Lagerleute waren morgens völlig im Stress. Einmal hat sogar die Polizei angerufen, weil ein Lastwagen die Einfahrt einer Tankstelle blockiert hat.\nDamit komme ich zum Projekt selbst. Wir haben ein Buchungssystem eingeführt, in dem jeder Spediteur vorher ein Zeitfenster von dreißig Minuten reservieren muss. Ich war im Projektteam für die Abstimmung mit den Kunden und den Subunternehmern zuständig. Im Februar haben wir mit zwei Toren getestet und das System dann bis Mai auf alle acht Tore ausgeweitet. Parallel dazu haben wir die Schichten im Lager angepasst, damit morgens nicht mehr alle gleichzeitig gebraucht werden.\nNatürlich lief nicht alles glatt. Das größte Problem waren am Anfang Fahrer, die weder Deutsch noch Englisch sprechen. Die konnten mit den Buchungsbestätigungen nichts anfangen. Wir haben dann kurze Anleitungen in fünf Sprachen gemacht, mit vielen Bildern, und ein Kollege aus Polen hat uns dabei sehr geholfen. Ein zweites Problem: Manche Kunden haben einfach weiter ohne Buchung geschickt. Da mussten wir irgendwann ziemlich deutlich werden. Wer ohne Zeitfenster kommt, wird jetzt erst am Ende der Schicht entladen.\nJetzt zum Ergebnis. Die durchschnittliche Wartezeit ist von etwa achtzig auf ungefähr zwanzig Minuten gesunken. Auf der Straße vor dem Hof steht morgens kaum noch jemand, und die Lagerleute können ihre Arbeit viel besser planen. Was ich persönlich mitnehme: Die Technik war eigentlich das kleinste Problem. Viel wichtiger war es, mit den Leuten zu reden, die das System am Ende benutzen müssen, also mit den Fahrern und den Kollegen an der Rampe. Wenn ich so ein Projekt noch einmal machen würde, würde ich die viel früher einbinden.\nDas war meine Präsentation, vielen Dank fürs Zuhören. Ich beantworte gern Ihre Fragen.",
       "frage": "Wie haben die Fahrer selbst auf die Zeitfenster reagiert?",
       "musterantwort": "Am Anfang ziemlich skeptisch, ehrlich gesagt. Viele dachten, das ist nur zusätzliche Bürokratie. Ein Fahrer hat mir in der ersten Woche gesagt, er kommt sowieso, wann er will. Aber nach ein paar Wochen haben die meisten gemerkt, dass sie nicht mehr stundenlang auf dem Hof stehen. Inzwischen fragen manche sogar von sich aus, ob sie ein früheres Zeitfenster bekommen können."
      }
     ]
    },
    {
     "id": "tbc1m2r2",
     "thema": "Digitalisierung in meiner Branche",
     "karten": [
      {
       "kopf": "Teil 2 · Präsentation",
       "kopfb": "Dein Thema",
       "auftrag": [
        "Präsentiere etwa drei Minuten frei, nicht vom Blatt.",
        "Gliedere: Einleitung, Hauptpunkte, Schluss.",
        "Beantworte danach die Rückfrage."
       ],
       "id": "tbc1m2k2",
       "thema": "Digitalisierung in meiner Branche",
       "punkte": [
        "Ihre Branche und Ihr Arbeitsplatz",
        "Was hat sich durch die Digitalisierung verändert?",
        "Vorteile im Arbeitsalltag",
        "Probleme und Grenzen",
        "Ihre Einschätzung für die Zukunft"
       ],
       "mustervortrag": "Ich bin Pflegefachkraft auf einer internistischen Station in einem Krankenhaus in Kassel, und in meiner Präsentation geht es um die Digitalisierung in der Pflege. Ich spreche zuerst darüber, was sich bei uns konkret verändert hat, dann über die Vorteile und die Probleme, und am Ende sage ich, wie ich die Zukunft sehe.\nAls ich vor elf Jahren angefangen habe, war fast alles auf Papier. Jeder Patient hatte eine Kurve, also eine Mappe, in die wir Blutdruck, Medikamente und Beobachtungen eingetragen haben. Seit zwei Jahren arbeiten wir mit einer elektronischen Patientenakte. Jede Pflegekraft hat einen Wagen mit Laptop, und die Medikamente werden über einen Scanner am Armband des Patienten kontrolliert. Auch die Übergabe zwischen Frühdienst und Spätdienst machen wir inzwischen am Bildschirm und nicht mehr mit Zetteln in der Kitteltasche.\nKommen wir zu den Vorteilen. Der größte Vorteil ist für mich die Sicherheit. Früher konnte man eine Handschrift falsch lesen, und dann bekam jemand vielleicht fünf Milligramm statt einem Milligramm. Bei uns ist das zum Glück nie passiert, aber knapp war es schon einmal. Heute warnt das System, wenn eine Dosis nicht passt oder zwei Medikamente sich nicht vertragen. Außerdem kann der Arzt die Werte sofort sehen, auch wenn er gerade auf einer anderen Station ist.\nAber es gibt auch Probleme, und die möchte ich nicht verschweigen. Erstens fällt das System ab und zu aus, letzten Herbst einmal für fast drei Stunden. Dann müssen wir alles auf Papier dokumentieren und später nachtragen, das ist doppelte Arbeit. Zweitens hatten gerade ältere Kollegen am Anfang große Schwierigkeiten. Eine Kollegin, die seit dreißig Jahren in der Pflege arbeitet, hat mir gesagt, sie habe das Gefühl, mehr auf den Bildschirm zu schauen als auf den Patienten. Und ehrlich gesagt kann ich das manchmal nachvollziehen, vor allem, wenn ein Patient gerade Angst hat und ich eigentlich zuhören sollte.\nDamit komme ich zu meiner Einschätzung. Ich glaube, dass sich die Digitalisierung in der Pflege nicht mehr aufhalten lässt und dass sie, richtig eingesetzt, viel Zeit sparen kann. Bei uns wird gerade getestet, dass die Messgeräte ihre Werte direkt in die Akte übertragen. Das wäre eine echte Entlastung. Was ich mir aber wünsche: dass die gesparte Zeit wirklich bei den Patienten ankommt und nicht einfach dazu führt, dass weniger Personal eingeplant wird. Davor haben viele bei uns auf der Station Angst.\nVielen Dank. Wenn Sie Fragen haben, gern.",
       "frage": "Bekommen Sie für die neuen Systeme genug Schulungen?",
       "musterantwort": "Am Anfang gab es eine Schulung von einem halben Tag, und das war ehrlich gesagt viel zu wenig. Die meisten haben es dann im Alltag von Kollegen gelernt. Inzwischen gibt es auf jeder Station zwei Ansprechpartner, die sich besonders gut auskennen. Ich bin eine davon, und ich werde fast jeden Tag irgendetwas gefragt, meistens in der Nachtschicht, wenn sonst niemand da ist."
      }
     ]
    },
    {
     "id": "tbc1m2r3",
     "thema": "Wie man neue Kollegen gut einarbeitet",
     "karten": [
      {
       "kopf": "Teil 2 · Präsentation",
       "kopfb": "Dein Thema",
       "auftrag": [
        "Präsentiere etwa drei Minuten frei, nicht vom Blatt.",
        "Gliedere: Einleitung, Hauptpunkte, Schluss.",
        "Beantworte danach die Rückfrage."
       ],
       "id": "tbc1m2k3",
       "thema": "Wie man neue Kollegen gut einarbeitet",
       "punkte": [
        "Ihre Rolle im Unternehmen",
        "Typische Fehler bei der Einarbeitung",
        "Wie die erste Woche aussehen sollte",
        "Die Rolle eines festen Ansprechpartners",
        "Ihr Fazit"
       ],
       "mustervortrag": "Ich leite seit vier Jahren ein Team im Kundenservice der Stadtwerke in Münster. Wir sind vierzehn Leute, und pro Jahr fangen bei uns etwa drei neue Kollegen an. Deshalb möchte ich heute darüber sprechen, wie man neue Mitarbeiter gut einarbeitet. Ich beginne mit typischen Fehlern, dann zeige ich, wie bei uns die erste Woche aussieht, danach gehe ich auf die Rolle eines festen Ansprechpartners ein, und zum Schluss ziehe ich ein kurzes Fazit.\nFangen wir mit den Fehlern an. Den häufigsten Fehler habe ich selbst erlebt, als ich damals angefangen habe. Am ersten Tag war mein Computer nicht eingerichtet, niemand wusste so richtig, dass ich komme, und ich habe drei Stunden in der Kaffeeküche gesessen und Broschüren gelesen. Der zweite typische Fehler ist das Gegenteil, nämlich zu viel auf einmal. Wenn jemand in der ersten Woche fünf Programme, alle Tarife und dazu noch zwanzig Kollegen kennenlernen soll, bleibt am Ende fast nichts hängen. Und dann traut sich der Neue nach drei Wochen nicht mehr zu sagen, dass er die Hälfte nicht verstanden hat.\nDamit komme ich zu unserer ersten Woche. Bei uns sind Laptop, Telefon und Zugänge spätestens am Freitag vorher fertig, das kontrolliere ich selbst. Am ersten Tag gibt es ein gemeinsames Frühstück mit dem Team und danach einen Rundgang durchs Haus. Ab dem zweiten Tag sitzt der neue Kollege neben jemandem und hört bei echten Kundengesprächen mit. Ab Mittwoch übernimmt er einfache Anfragen selbst, zum Beispiel Zählerstände oder Adressänderungen, und jemand hört zu. Am Freitag setzen wir uns eine halbe Stunde zusammen, und er erzählt mir, was gut lief und was ihm noch unklar ist.\nEin Punkt ist mir besonders wichtig, und das ist der feste Ansprechpartner. Jeder Neue bekommt bei uns für die ersten drei Monate einen Paten aus dem Team. Das ist bewusst nicht die Chefin, also nicht ich, sondern ein Kollege auf Augenhöhe. Viele trauen sich nämlich nicht, die Vorgesetzte fünfmal am Tag dasselbe zu fragen. Den Paten fragen sie schon. Der Pate bekommt dafür übrigens in dieser Zeit weniger Anrufe zugeteilt, sonst funktioniert das nicht.\nZum Schluss mein Fazit. Eine gute Einarbeitung kostet am Anfang Zeit, das lässt sich nicht schönreden. Aber seit wir es so machen, ist in den letzten drei Jahren niemand mehr in der Probezeit gegangen. Vorher ist das fast jedes Jahr einmal passiert, und dann fängt man komplett von vorne an. Vielen Dank, ich bin gespannt auf Ihre Fragen.",
       "frage": "Und was machen Sie, wenn es zwischen dem Neuen und seinem Paten nicht passt?",
       "musterantwort": "Das kommt zum Glück selten vor, aber es ist schon passiert. Nach ungefähr zwei Wochen frage ich jeden Neuen in einem kurzen Gespräch unter vier Augen, wie es läuft. Wenn ich merke, dass es nicht passt, wechseln wir den Paten, ohne großes Drama. Einmal hat ein Neuer einfach besser zu einer Kollegin gepasst, die auch aus der Gastronomie kam. Wichtig ist nur, dass das niemand als Kritik versteht, weder der Neue noch der Pate."
      }
     ]
    },
    {
     "id": "tbc1m2r4",
     "thema": "Ein Fehler, aus dem mein Team gelernt hat",
     "karten": [
      {
       "kopf": "Teil 2 · Präsentation",
       "kopfb": "Dein Thema",
       "auftrag": [
        "Präsentiere etwa drei Minuten frei, nicht vom Blatt.",
        "Gliedere: Einleitung, Hauptpunkte, Schluss.",
        "Beantworte danach die Rückfrage."
       ],
       "id": "tbc1m2k4",
       "thema": "Ein Fehler, aus dem mein Team gelernt hat",
       "punkte": [
        "Ihr Arbeitsbereich",
        "Was ist passiert?",
        "Wie wurde der Fehler bemerkt und behoben?",
        "Was hat sich danach geändert?",
        "Ihr Rat an andere"
       ],
       "mustervortrag": "Ich arbeite in der Kreditorenbuchhaltung eines Möbelherstellers in Ostwestfalen, das heißt, ich bin dafür zuständig, dass unsere Lieferanten ihr Geld bekommen. In meiner Präsentation erzähle ich von einem Fehler, der uns ziemlich viel Ärger gemacht hat, aus dem wir als Team aber wirklich etwas gelernt haben. Ich erkläre zuerst, was passiert ist, dann, wie wir das gelöst haben, und zum Schluss, was sich seitdem geändert hat.\nAlso, was ist passiert? Vor zwei Jahren, kurz vor Weihnachten, haben wir eine Rechnung von einem Holzlieferanten doppelt bezahlt, und zwar über achtundvierzigtausend Euro. Die Rechnung kam einmal per Post und einmal per E-Mail, und zwei Kolleginnen haben sie unabhängig voneinander gebucht. Eine von beiden war krank gewesen, die andere hatte ihre Fälle übernommen, und keiner hat gemerkt, dass die Rechnungsnummer schon im System war. Das System hat zwar gewarnt, aber solche Warnungen kamen bei uns so oft, dass sie niemand mehr ernst genommen hat.\nBemerkt haben wir das erst im Januar beim Monatsabschluss, als die Summe auf dem Lieferantenkonto nicht stimmte. Ich habe dann sofort beim Lieferanten angerufen. Zum Glück arbeiten wir mit der Firma seit Jahren zusammen, und sie haben das Geld innerhalb einer Woche zurücküberwiesen. Bei einem kleinen Betrieb, der selbst gerade Geldsorgen hat, hätten wir das Geld vielleicht nie wiedergesehen. Ich musste die ganze Sache dann auch noch dem Geschäftsführer erklären, und das war ehrlich gesagt kein angenehmes Gespräch.\nWas hat sich danach geändert? Erstens haben wir uns die Warnungen im System genauer angesehen. Fast neunzig Prozent davon waren unnötig, und die haben wir zusammen mit der IT-Abteilung abgeschaltet. Jetzt warnt das System seltener, aber wenn es warnt, schaut auch jeder hin. Zweitens gilt bei uns ab fünftausend Euro das Vier-Augen-Prinzip, eine zweite Person muss also jede größere Zahlung freigeben. Und drittens, das finde ich fast am wichtigsten, sprechen wir offener über Fehler. Nach dem Vorfall hat unser Abteilungsleiter nicht gefragt, wer schuld ist. Er hat gefragt, wie das passieren konnte. Das hat die Stimmung im Team verändert. Heute sagt jemand eher: Ich glaube, da habe ich was falsch gemacht, und dann schauen wir gemeinsam drauf.\nDamit komme ich zum Schluss. Was ich anderen rate: Fehler passieren, gerade unter Zeitdruck. Statt nach Schuldigen zu suchen, sollte man die Stelle im Ablauf finden, an der es schiefgegangen ist. Und man sollte regelmäßig prüfen, ob die Kontrollen im Alltag überhaupt noch funktionieren. Danke schön, haben Sie noch Fragen?",
       "frage": "Hatten die beiden Kolleginnen danach Konsequenzen zu befürchten?",
       "musterantwort": "Nein, und das war mir auch sehr wichtig. Natürlich haben sich beide ziemlich schlecht gefühlt. Eine hat mir erzählt, dass sie über Weihnachten kaum geschlafen hat, als sie davon gehört hat. Aber der eigentliche Fehler lag im Ablauf, und das hat unser Abteilungsleiter auch genau so gesagt, vor dem ganzen Team. Eine Abmahnung oder so etwas gab es nicht. Beide arbeiten übrigens heute noch bei uns."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "erzaehlen",
   "name": "Diskussion",
   "kurz": "Zwei Aussagen, Meinung und Argumente",
   "was": "Ihr diskutiert über zwei gegensätzliche Aussagen zu einem Arbeitsthema. Meinung sagen, mit Argumenten und Beispielen begründen, auf das Gegenüber eingehen.",
   "tipp": "Widersprechen, aber höflich: „Das sehe ich anders, weil …\", „Da haben Sie zwar recht, aber …\".",
   "zeichen": "⚖️",
   "farbe": "gruen",
   "punkte": 20,
   "runden": [
    {
     "id": "tbc1m3r1",
     "thema": "Teamarbeit oder allein arbeiten?",
     "karten": [
      {
       "kopf": "Teil 3 · Diskussion",
       "kopfb": "Zwei Aussagen",
       "auftrag": [
        "Sag deine Meinung und begründe sie mit Argumenten und Beispielen.",
        "Geh auf die Argumente deines Gegenübers ein.",
        "Versucht, zu einem Ergebnis zu kommen."
       ],
       "id": "tbc1m3k1",
       "thema": "Teamarbeit oder allein arbeiten?",
       "text": "„Aussage A: Im Team entstehen bessere Lösungen als allein.“\n„Aussage B: Wer allein arbeitet, arbeitet konzentrierter und schneller.“",
       "quelle": "Zwei Aussagen zum Thema",
       "punkte": [
        "Meinung äußern",
        "Argumente und Beispiele",
        "Auf das Gegenüber reagieren",
        "Zu einem Ergebnis kommen"
       ],
       "mustervortrag": "Ich sehe das ehrlich gesagt eher wie Aussage A, allerdings mit einer Einschränkung. Für komplizierte Aufgaben, bei denen man unterschiedliches Wissen braucht, ist ein Team einfach besser. Ich arbeite als Bauingenieurin, und wenn wir ein Gebäude planen, bringt der Statiker etwas anderes ein als die Kollegin aus der Haustechnik. Allein würde ich viele Fehler gar nicht sehen. Letztes Jahr hat uns ein Elektriker in einer Besprechung darauf hingewiesen, dass ein Schacht zu klein geplant war. Das hätte uns auf der Baustelle mehrere Wochen gekostet.\nMein zweites Argument ist die Verantwortung. Wenn ein Team ein Ergebnis gemeinsam trägt, steht nicht eine Person allein da, wenn etwas schiefgeht. Das nimmt Druck raus, und man traut sich auch eher, einen Vorschlag zu machen.\nJetzt kann man natürlich sagen, dass Teamarbeit viel Zeit kostet. Das stimmt zwar, aber meistens liegt das an schlechten Besprechungen und nicht am Team. Wenn sechs Leute zwei Stunden zusammensitzen und keiner weiß, was am Ende rauskommen soll, dann ist das verschwendete Zeit, das gebe ich zu. Und in einem Punkt hat Aussage B auch recht: Für bestimmte Aufgaben, zum Beispiel einen Bericht schreiben oder eine Berechnung prüfen, braucht man Ruhe, und da arbeitet man allein besser.\nMein Fazit wäre also: gemeinsam planen und entscheiden, aber die einzelnen Aufgaben dann in Ruhe allein erledigen. Wie sehen Sie das, arbeiten Sie in Ihrem Beruf eher allein oder im Team?",
       "frage": "Aber im Team versteckt sich doch immer jemand hinter den anderen und macht kaum etwas.",
       "musterantwort": "Da haben Sie einen Punkt, das habe ich auch schon erlebt. Ich glaube aber, das ist eher eine Frage der Organisation. Wenn am Ende jeder Besprechung klar ist, wer bis wann was macht, kann sich niemand verstecken. Bei uns steht das im Protokoll, mit Namen und Datum. Wer seine Aufgabe dann zweimal nicht erledigt, fällt sofort auf, und darüber muss man dann eben offen sprechen."
      }
     ]
    },
    {
     "id": "tbc1m3r2",
     "thema": "Homeoffice: Pflicht oder Ausnahme?",
     "karten": [
      {
       "kopf": "Teil 3 · Diskussion",
       "kopfb": "Zwei Aussagen",
       "auftrag": [
        "Sag deine Meinung und begründe sie mit Argumenten und Beispielen.",
        "Geh auf die Argumente deines Gegenübers ein.",
        "Versucht, zu einem Ergebnis zu kommen."
       ],
       "id": "tbc1m3k2",
       "thema": "Homeoffice: Pflicht oder Ausnahme?",
       "text": "„Aussage A: Firmen sollten Homeoffice für alle Bürojobs verpflichtend anbieten.“\n„Aussage B: Mitarbeiter gehören ins Büro, nur dort entsteht echte Zusammenarbeit.“",
       "quelle": "Zwei Aussagen zum Thema",
       "punkte": [
        "Meinung äußern",
        "Argumente und Beispiele",
        "Auf das Gegenüber reagieren",
        "Zu einem Ergebnis kommen"
       ],
       "mustervortrag": "Also, ich arbeite in der Personalabteilung eines Maschinenbauunternehmens, und dieses Thema diskutieren wir bei uns seit Monaten. Meine Position liegt ehrlich gesagt näher an Aussage A. Ich bin der Meinung, dass Firmen Homeoffice für Bürojobs anbieten sollten, allerdings nicht für jeden Tag.\nMein erstes Argument sind die Bewerber. Wir suchen zum Beispiel seit über einem Jahr einen Lohnbuchhalter. In fast jedem Vorstellungsgespräch kommt die Frage nach Homeoffice, und zwei gute Kandidaten haben wir verloren, weil sie fünf Tage pro Woche ins Büro kommen sollten. Mein zweites Argument ist die Zufriedenheit. Seit wir zwei Tage Homeoffice erlauben, gibt es in der Verwaltung spürbar weniger Krankmeldungen. Eine Kollegin mit zwei kleinen Kindern hat mir gesagt, ohne diese Regelung hätte sie gekündigt.\nAussage B hat aber durchaus etwas für sich. Neue Kollegen lernen im Büro deutlich schneller, weil sie mitbekommen, wie andere arbeiten und Probleme lösen. Trotzdem muss ich widersprechen, wenn behauptet wird, dass echte Zusammenarbeit nur im Büro entsteht. Unser Einkauf arbeitet mit Kollegen in Polen und Tschechien zusammen, und das läuft seit Jahren nur über Videokonferenzen, und zwar gut. Die Kollegen haben sich in der ganzen Zeit nur zweimal persönlich gesehen.\nDeshalb wäre mein Fazit: keine Pflicht in die eine oder die andere Richtung, sondern ein Angebot mit klaren Regeln, zum Beispiel feste Bürotage, an denen das ganze Team da ist. Was halten Sie von solchen festen Teamtagen?",
       "frage": "Aber wer zu Hause arbeitet, ist doch schwer zu kontrollieren. Woher weiß der Chef, ob jemand wirklich arbeitet?",
       "musterantwort": "Das höre ich oft, aber ehrlich gesagt kann man auch im Büro acht Stunden vor dem Bildschirm sitzen und wenig schaffen. Ich finde, man sollte Ergebnisse kontrollieren, nicht die Anwesenheit. Bei uns hat jeder seine Aufgaben für die Woche, und am Freitag sieht man, was erledigt ist. Wer das dauerhaft nicht schafft, fällt auf, egal ob zu Hause oder im Büro."
      }
     ]
    },
    {
     "id": "tbc1m3r3",
     "thema": "Die Vier-Tage-Woche",
     "karten": [
      {
       "kopf": "Teil 3 · Diskussion",
       "kopfb": "Zwei Aussagen",
       "auftrag": [
        "Sag deine Meinung und begründe sie mit Argumenten und Beispielen.",
        "Geh auf die Argumente deines Gegenübers ein.",
        "Versucht, zu einem Ergebnis zu kommen."
       ],
       "id": "tbc1m3k3",
       "thema": "Die Vier-Tage-Woche",
       "text": "„Aussage A: Die Vier-Tage-Woche bei vollem Lohn macht Mitarbeiter gesünder und produktiver.“\n„Aussage B: Die Vier-Tage-Woche können sich nur wenige Branchen leisten, für die meisten Betriebe ist sie unrealistisch.“",
       "quelle": "Zwei Aussagen zum Thema",
       "punkte": [
        "Meinung äußern",
        "Argumente und Beispiele",
        "Auf das Gegenüber reagieren",
        "Zu einem Ergebnis kommen"
       ],
       "mustervortrag": "Ich tendiere bei diesem Thema eher zu Aussage B, auch wenn mir die Idee persönlich natürlich gefällt. Wer hätte nicht gern jede Woche einen Tag mehr frei? Aber ich bin Schichtleiter in einer Großbäckerei, und bei uns sehe ich ehrlich gesagt nicht, wie das funktionieren soll.\nMein erstes Argument ist der Personalmangel. Wir suchen seit Monaten Leute für die Nachtschicht und finden kaum jemanden. Wenn jeder nur noch vier Tage arbeitet, brauchen wir ungefähr ein Fünftel mehr Mitarbeiter, und die gibt es auf dem Arbeitsmarkt einfach nicht. Die Brötchen müssen trotzdem jeden Morgen um vier fertig sein, die Filialen warten nicht.\nMein zweites Argument sind die Kosten. Bei vollem Lohn und mehr Personal steigen die Lohnkosten deutlich, und am Ende zahlt das der Kunde, also wir alle beim Bäcker.\nNatürlich gibt es Studien, nach denen Leute in vier Tagen genauso viel schaffen wie in fünf. Das stimmt zwar für viele Bürojobs, aber an einer Teigmaschine kann ich nicht schneller arbeiten, nur weil ich ausgeruhter bin. Die Maschine läuft so schnell, wie sie läuft.\nWas ich mir allerdings vorstellen kann, ist eine flexiblere Lösung. Bei uns haben zwei Kollegen ihre Stunden auf vier längere Schichten verteilt, und das klappt gut. Mein Fazit wäre also: die Vier-Tage-Woche als Angebot, wo es passt, aber nicht als Regel für alle. Wie ist das denn in Ihrer Branche, könnten Sie sich das vorstellen?",
       "frage": "Aber gerade weil Sie keine Leute finden, könnte die Vier-Tage-Woche doch neue Bewerber anlocken.",
       "musterantwort": "Das ist ein gutes Argument, das muss ich zugeben. Eine Bäckerei bei uns in der Nähe wirbt tatsächlich damit, und sie bekommt angeblich wieder mehr Bewerbungen. Trotzdem bleibt die Frage, ob sich das auf Dauer rechnet. Wenn irgendwann alle Betriebe in der Region die Vier-Tage-Woche anbieten, ist der Vorteil wieder weg, die Kosten aber bleiben. Und davon hat dann am Ende niemand etwas."
      }
     ]
    },
    {
     "id": "tbc1m3r4",
     "thema": "Duzen im Betrieb",
     "karten": [
      {
       "kopf": "Teil 3 · Diskussion",
       "kopfb": "Zwei Aussagen",
       "auftrag": [
        "Sag deine Meinung und begründe sie mit Argumenten und Beispielen.",
        "Geh auf die Argumente deines Gegenübers ein.",
        "Versucht, zu einem Ergebnis zu kommen."
       ],
       "id": "tbc1m3k4",
       "thema": "Duzen im Betrieb",
       "text": "„Aussage A: Im Betrieb sollten sich alle duzen, vom Auszubildenden bis zur Geschäftsführung, das schafft eine offene Atmosphäre.“\n„Aussage B: Das Siezen sorgt für eine professionelle Distanz, die im Arbeitsleben wichtig ist.“",
       "quelle": "Zwei Aussagen zum Thema",
       "punkte": [
        "Meinung äußern",
        "Argumente und Beispiele",
        "Auf das Gegenüber reagieren",
        "Zu einem Ergebnis kommen"
       ],
       "mustervortrag": "Ich möchte mit einer kleinen Geschichte anfangen. Als ich vor drei Jahren zu meiner jetzigen Firma gewechselt bin, einem Hersteller von Medizintechnik, hat mir der Geschäftsführer am ersten Tag die Hand gegeben und gesagt: Ich bin der Thomas. Ich war ehrlich gesagt erst mal irritiert, weil ich aus einem sehr traditionellen Betrieb kam.\nInzwischen sehe ich das Duzen aber positiv, also eher wie Aussage A. Erstens senkt es die Hemmschwelle. Wenn ich ein Problem habe, gehe ich direkt zum Abteilungsleiter und spreche es an, ohne lange zu überlegen, wie ich das jetzt höflich formuliere. Zweitens gehen viele Abläufe schneller. Bei uns ruft man kurz an, statt eine förmliche Mail zu schreiben.\nIch muss aber auch zugeben, dass Aussage B einen wichtigen Punkt trifft. Duzen heißt nicht, dass es keine Hierarchie mehr gibt. Wenn der Chef dich duzt und dir trotzdem eine Abmahnung gibt, fühlt sich das fast noch unangenehmer an. Und manche Kollegen, gerade ältere, fühlen sich mit dem Du einfach nicht wohl. Ich kenne einen Kollegen, der seit Jahren alle siezt, und das respektieren wir.\nIm Vertrieb ist es noch einmal anders. Unsere Kunden sind oft Ärzte oder Klinikleitungen, und die sieze ich grundsätzlich, bis sie mir selbst das Du anbieten.\nMein Fazit: Das Du kann die Zusammenarbeit wirklich erleichtern, aber man sollte es niemandem aufzwingen. Wichtiger als die Anrede ist, wie man miteinander umgeht. Wie halten Sie es denn in Ihrer Firma?",
       "frage": "Ich finde, mit dem Du verschwimmen die Grenzen. Kritik ist dann viel schwerer anzunehmen.",
       "musterantwort": "Da muss ich Ihnen teilweise widersprechen. Ich habe eher die Erfahrung gemacht, dass Kritik mit dem Du direkter, aber auch ehrlicher ist. Man redet nicht so lange um den heißen Brei herum. Allerdings gebe ich Ihnen insofern recht, als es sehr auf den Ton ankommt. Wenn jemand das Du ausnutzt, um unfreundlich zu werden, hilft auch die lockerste Firmenkultur nichts."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tbc1ml1",
   "titel": "Prüfungslauf 1",
   "minuten": 20,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Das Großraumbüro",
     "karten": [
      {
       "kopf": "Teil 1 · Small Talk",
       "kopfb": "Bildimpuls",
       "auftrag": [
        "Sprich über das Foto und über deine eigenen Erfahrungen.",
        "Sag, wie du darüber denkst, und gib Beispiele.",
        "Reagiere auf die Frage deines Gegenübers."
       ],
       "id": "tbc1m1k5",
       "foto": "grossraum",
       "thema": "Das Großraumbüro",
       "bild": "Ein großes, helles Großraumbüro mit langen Reihen von Schreibtischen, Bildschirmen und Bürostühlen. Einige Leute arbeiten an ihren Plätzen, viele Plätze sind leer.",
       "punkte": [
        "Was sehen Sie?",
        "Welche Erfahrungen haben Sie damit?",
        "Wie denken Sie darüber? Geben Sie Beispiele."
       ],
       "frage": "Was würden Sie in Ihrem Büro ändern, wenn Sie könnten?",
       "mustervortrag": "Auf dem Foto sieht man ein großes, helles Großraumbüro mit langen Reihen von Schreibtischen, Bildschirmen und Bürostühlen. Einige Leute arbeiten an ihren Plätzen, aber viele Plätze sind leer. Ich vermute, dass ein Teil der Mitarbeiter im Homeoffice ist, oder das Foto wurde früh am Morgen gemacht. Ich arbeite selbst in so einem Büro, in der Kundenbetreuung einer Versicherung, mit ungefähr sechzig Arbeitsplätzen auf einer Etage. Was mich am meisten stört, ist der Lärm. Wenn drei Kollegen gleichzeitig telefonieren, kann ich mich kaum auf einen schwierigen Fall konzentrieren. Deshalb trage ich oft Kopfhörer, obwohl ich gar keine Musik höre. Auf der anderen Seite bekommt man vieles mit. Wenn ein Kunde zum Beispiel wegen einer neuen Regelung anruft, hatte die Kollegin zwei Tische weiter das am selben Tag schon dreimal und kann mir sofort helfen. Seit letztem Jahr gibt es bei uns keine festen Plätze mehr, man sucht sich also morgens einen Tisch. Das finde ich ehrlich gesagt eher schlecht, weil man nie weiß, neben wem man sitzt.",
       "musterantwort": "Ich hätte gern mehr kleine Räume, in die man sich für eine Stunde zurückziehen kann. Wir haben auf der ganzen Etage genau zwei, und die sind immer belegt. Außerdem würde ich die Telefonplätze von den ruhigen Plätzen trennen. Das kostet nicht viel, würde aber eine Menge bringen."
      }
     ]
    },
    {
     "nr": 2,
     "art": "erzaehlen",
     "thema": "Arbeitsschutz in meinem Beruf",
     "karten": [
      {
       "kopf": "Teil 2 · Präsentation",
       "kopfb": "Dein Thema",
       "auftrag": [
        "Präsentiere etwa drei Minuten frei, nicht vom Blatt.",
        "Gliedere: Einleitung, Hauptpunkte, Schluss.",
        "Beantworte danach die Rückfrage."
       ],
       "id": "tbc1m2k5",
       "thema": "Arbeitsschutz in meinem Beruf",
       "punkte": [
        "Ihr Beruf und Ihre Tätigkeit",
        "Gefahren im Arbeitsalltag",
        "Schutzmaßnahmen im Betrieb",
        "Ein Erlebnis aus Ihrer Praxis",
        "Was noch besser werden könnte"
       ],
       "mustervortrag": "Ich bin Industriemechaniker und arbeite seit neun Jahren in einem Werk in Niederbayern, in dem Teile für Landmaschinen hergestellt werden. Ich bin für die Wartung und Reparatur der Maschinen zuständig, und genau deshalb ist Arbeitsschutz bei mir jeden Tag ein Thema. In meiner Präsentation spreche ich zuerst über die Gefahren, dann über die Schutzmaßnahmen bei uns im Betrieb, danach erzähle ich ein Erlebnis, und am Ende sage ich, was man noch verbessern könnte.\nFangen wir mit den Gefahren an. In der Halle ist es laut, an manchen Pressen sind es über neunzig Dezibel. Dazu kommen schwere Teile, Öl auf dem Boden und natürlich die Maschinen selbst. Wenn ich etwas repariere, muss ich oft genau an die Stellen, wo sonst niemand hinkommt, also an bewegliche Teile. Und manchmal liege ich dabei auf dem Rücken unter der Maschine, mit einer Taschenlampe im Mund.\nDamit komme ich zu den Schutzmaßnahmen. Sicherheitsschuhe und Gehörschutz sind in der Halle Pflicht, das kontrolliert auch der Meister. Das Wichtigste bei meiner Arbeit ist aber die Freischaltung. Bevor ich an eine Maschine gehe, schalte ich sie am Hauptschalter aus und hänge mein eigenes Schloss daran. Den Schlüssel habe ich in der Tasche. So kann niemand die Maschine einschalten, während ich drinnen arbeite. Außerdem haben wir einmal im Jahr eine Unterweisung, und alle paar Monate geht die Fachkraft für Arbeitssicherheit durch die Halle und schaut sich alles an.\nJetzt zu meinem Erlebnis. In meinem ersten Jahr wollte ich eine kleine Störung schnell beheben. Es war Freitagnachmittag, und die Schicht war fast vorbei. Ich habe das Schloss weggelassen, weil ich dachte, das dauert ja nur zwei Minuten. Ein Kollege hat die Maschine dann vom anderen Ende aus gestartet, weil er dachte, sie sei wieder in Ordnung. Ich habe die Hand gerade noch rechtzeitig weggezogen. Seitdem habe ich das Schloss nie wieder vergessen, auch nicht für zwei Minuten. Diese Geschichte erzähle ich heute jedem Auszubildenden in der ersten Woche.\nZum Schluss: Was könnte besser werden? Ehrlich gesagt sind die Regeln bei uns gut, das Problem ist eher der Zeitdruck. Wenn eine Maschine steht, ruft der Schichtleiter alle zehn Minuten an und fragt, wann es weitergeht. Da ist die Versuchung groß, eine Abkürzung zu nehmen. Ich wünsche mir, dass die Vorgesetzten klarer sagen: Sicherheit geht vor, auch wenn die Produktion dann eine halbe Stunde länger steht. Vielen Dank für Ihre Aufmerksamkeit.",
       "frage": "Tragen Ihre Kollegen den Gehörschutz denn wirklich immer?",
       "musterantwort": "Ehrlich gesagt nicht immer. Gerade die Älteren sagen oft, sie hören dann nicht, ob die Maschine richtig läuft. Und manche finden ihn einfach unbequem, vor allem im Sommer, wenn es in der Halle heiß ist. Wir haben jetzt angepassten Gehörschutz bekommen, der genau ins Ohr passt. Seitdem tragen ihn deutlich mehr Leute, aber eben noch nicht alle. Der Meister spricht das jetzt jedes Mal direkt an."
      }
     ]
    },
    {
     "nr": 3,
     "art": "erzaehlen",
     "thema": "Bewerbung ohne Anschreiben",
     "karten": [
      {
       "kopf": "Teil 3 · Diskussion",
       "kopfb": "Zwei Aussagen",
       "auftrag": [
        "Sag deine Meinung und begründe sie mit Argumenten und Beispielen.",
        "Geh auf die Argumente deines Gegenübers ein.",
        "Versucht, zu einem Ergebnis zu kommen."
       ],
       "id": "tbc1m3k5",
       "thema": "Bewerbung ohne Anschreiben",
       "text": "„Aussage A: Das Anschreiben ist überflüssig, Lebenslauf und ein kurzes Gespräch reichen völlig.“\n„Aussage B: Ohne Anschreiben erfährt man nichts über die Motivation und die Persönlichkeit eines Bewerbers.“",
       "quelle": "Zwei Aussagen zum Thema",
       "punkte": [
        "Meinung äußern",
        "Argumente und Beispiele",
        "Auf das Gegenüber reagieren",
        "Zu einem Ergebnis kommen"
       ],
       "mustervortrag": "Ich habe einen Elektrobetrieb mit zwölf Mitarbeitern, und ich lese jede Bewerbung selbst. Deshalb stehe ich bei diesem Thema ziemlich klar auf der Seite von Aussage A.\nMein erstes Argument ist ganz praktisch: Die meisten Anschreiben, die ich bekomme, sagen mir nichts. Da steht dann, dass jemand teamfähig, belastbar und zuverlässig ist. Das schreibt jeder, und viele haben es irgendwo abgeschrieben. Ob jemand wirklich zuverlässig ist, merke ich nach drei Tagen auf der Baustelle, nicht nach einer Seite Text.\nZweitens schreckt das Anschreiben gerade die Leute ab, die ich suche. Viele gute Handwerker schreiben nicht gern, und manche haben Deutsch erst als Erwachsene gelernt. Seit auf unserer Internetseite steht, dass ein Lebenslauf reicht und man auch einfach anrufen kann, bekommen wir ungefähr doppelt so viele Bewerbungen. Einen meiner besten Gesellen hätte ich mit Anschreiben wahrscheinlich nie kennengelernt.\nJetzt kann man einwenden, dass man ohne Anschreiben nichts über die Motivation erfährt. Das stimmt zwar, aber dafür gibt es ja das Gespräch. Ich frage dann direkt: Warum wollen Sie zu uns? Und an der Antwort merke ich mehr als an jedem Brief.\nIch gebe allerdings zu, dass das in anderen Bereichen anders sein kann. In einer Werbeagentur oder in der Pressestelle gehört Schreiben zum Beruf, da ist ein Anschreiben auch eine Arbeitsprobe. Mein Fazit: Für die meisten Stellen reicht ein Lebenslauf, für Berufe mit viel Text kann ein Anschreiben sinnvoll bleiben. Wie sehen Sie das?",
       "frage": "Aber ohne Anschreiben bekommen Sie doch massenhaft Bewerbungen von Leuten, die gar nicht wirklich interessiert sind.",
       "musterantwort": "Das habe ich am Anfang auch befürchtet. Und ja, es kommen jetzt mehr Bewerbungen, bei denen schnell klar ist, dass es nicht passt. Aber einen Lebenslauf habe ich in einer Minute gelesen, ein Anschreiben dauert deutlich länger. Unterm Strich spare ich also sogar Zeit. Und die wirklich Interessierten melden sich meistens sowieso noch einmal am Telefon und fragen nach, wie es weitergeht."
      }
     ]
    }
   ]
  },
  {
   "id": "tbc1ml2",
   "titel": "Prüfungslauf 2",
   "minuten": 20,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Besprechungen und Workshops",
     "karten": [
      {
       "kopf": "Teil 1 · Small Talk",
       "kopfb": "Bildimpuls",
       "auftrag": [
        "Sprich über das Foto und über deine eigenen Erfahrungen.",
        "Sag, wie du darüber denkst, und gib Beispiele.",
        "Reagiere auf die Frage deines Gegenübers."
       ],
       "id": "tbc1m1k6",
       "foto": "workshop",
       "thema": "Besprechungen und Workshops",
       "bild": "In einem Raum mit Backsteinwand steht ein Mann an einem Whiteboard voller gelber Haftnotizen und erklärt etwas. Drei Kollegen sitzen mit Laptops auf einem blauen Sofa und auf Stühlen und hören zu.",
       "punkte": [
        "Was sehen Sie?",
        "Welche Erfahrungen haben Sie damit?",
        "Wie denken Sie darüber? Geben Sie Beispiele."
       ],
       "frage": "Wie viel Zeit verbringen Sie pro Woche in Besprechungen?",
       "mustervortrag": "Auf dem Foto sieht man einen Raum mit einer Backsteinwand. Ein Mann steht an einem Whiteboard voller gelber Haftnotizen und erklärt etwas. Drei Kollegen sitzen mit Laptops auf einem blauen Sofa und auf Stühlen und hören ihm zu. Das sieht nach einem Workshop aus, vielleicht in einer jungen Firma, die Einrichtung wirkt jedenfalls ziemlich locker. Solche Workshops mache ich als Produktmanagerin bei einem Hersteller von Haushaltsgeräten auch regelmäßig. Ehrlich gesagt bin ich da zwiegespalten. Wenn sie gut vorbereitet sind, kommt in zwei Stunden mehr heraus als in drei Wochen E-Mails. Ich erinnere mich an einen Workshop zu einer neuen Kaffeemaschine, da hatte ein Kollege aus dem Kundendienst die beste Idee des ganzen Tages, und die hätten wir sonst nie gehört. Aber ich habe auch schon viele Besprechungen erlebt, nach denen niemand wusste, wer was machen soll. Am Ende hingen hundert bunte Zettel an der Wand, und passiert ist nichts. Deshalb finde ich, jede Besprechung braucht ein klares Ziel und am Schluss eine Liste, wer bis wann was erledigt.",
       "musterantwort": "Zu viel, ehrlich gesagt. Ich habe es letzten Monat mal gezählt und kam auf ungefähr zwölf Stunden pro Woche. Das ist fast ein Drittel meiner Arbeitszeit. Seitdem sage ich öfter Termine ab, bei denen ich nur zuhören würde, und lasse mir lieber hinterher das Protokoll schicken."
      }
     ]
    },
    {
     "nr": 2,
     "art": "erzaehlen",
     "thema": "Mein Beruf in zehn Jahren",
     "karten": [
      {
       "kopf": "Teil 2 · Präsentation",
       "kopfb": "Dein Thema",
       "auftrag": [
        "Präsentiere etwa drei Minuten frei, nicht vom Blatt.",
        "Gliedere: Einleitung, Hauptpunkte, Schluss.",
        "Beantworte danach die Rückfrage."
       ],
       "id": "tbc1m2k6",
       "thema": "Mein Beruf in zehn Jahren",
       "punkte": [
        "Ihr Beruf heute",
        "Was sich gerade verändert",
        "Welche Fähigkeiten in Zukunft wichtig sind",
        "Chancen und Risiken",
        "Ihre persönlichen Pläne"
       ],
       "mustervortrag": "Ich arbeite als Mechatroniker in einer freien Autowerkstatt in Leipzig, wir sind sechs Leute, und mein Thema heute ist: Wie sieht mein Beruf in zehn Jahren aus? Ich beschreibe kurz, wie mein Arbeitsalltag heute aussieht, dann spreche ich über die Veränderungen und über die Fähigkeiten, die man in Zukunft braucht, und am Ende erzähle ich, was ich selbst vorhabe.\nHeute machen wir zu einem großen Teil noch das, was man klassisch unter Werkstatt versteht: Ölwechsel, Bremsen, Reifen, Auspuff. Aber schon jetzt hängt bei fast jedem Auto als Erstes ein Diagnosegerät dran. Ein Kunde kommt rein und sagt, da leuchtet eine Lampe, und dann sitze ich erst mal zwanzig Minuten am Laptop, bevor ich überhaupt einen Schraubenschlüssel in die Hand nehme. Viele Kunden wundern sich dann, warum auf der Rechnung eine halbe Stunde Diagnose steht.\nDamit bin ich beim zweiten Punkt, den Veränderungen. Der größte Wandel ist natürlich das Elektroauto. Ein Elektroauto braucht keinen Ölwechsel, hat keinen Auspuff und keine Kupplung. Bei uns machen solche Arbeiten im Moment ungefähr ein Drittel vom Umsatz aus. In zehn Jahren fällt davon ein großer Teil weg. Dazu kommt, dass die Hersteller immer mehr Daten selbst behalten. Für manche Modelle brauchen wir inzwischen einen kostenpflichtigen Zugang, nur um einen Fehler auslesen zu dürfen.\nWelche Fähigkeiten braucht man also in Zukunft? Ich glaube, Elektrik und Software werden viel wichtiger als heute. Wer an einem Elektroauto arbeitet, braucht eine Hochvoltschulung, sonst darf er gar nicht ran. Ich habe die letztes Jahr gemacht, eine Woche in Dresden, und ehrlich gesagt war das die schwierigste Fortbildung, die ich je hatte.\nKommen wir zu Chancen und Risiken. Das Risiko ist klar: Kleine Werkstätten, die nicht investieren, werden es schwer haben. Unser Chef hat letztes Jahr für eine neue Hebebühne und Werkzeug für Elektroautos fast vierzigtausend Euro ausgegeben, das kann nicht jeder. Die Chance gibt es aber auch. Gute Leute, die sich mit Mechanik und mit Elektronik auskennen, werden gesucht wie nie. Ich bekomme schon jetzt ab und zu Angebote von Autohäusern, obwohl ich gar nicht suche.\nZum Schluss zu meinen Plänen. Ich möchte in den nächsten drei Jahren meinen Meister machen und mich auf Elektro und Hybrid spezialisieren. Ob es meinen Beruf in zehn Jahren noch unter diesem Namen gibt, weiß ich nicht. Aber Autos, die kaputtgehen, wird es bestimmt noch geben. Vielen Dank, Ihre Fragen beantworte ich gern.",
       "frage": "Haben Sie keine Angst, dass Werkstätten irgendwann ganz überflüssig werden?",
       "musterantwort": "Ein bisschen schon, das gebe ich zu. Aber ich glaube nicht, dass es so schnell geht. Auf unseren Straßen fahren noch sehr viele ältere Autos mit Verbrennungsmotor, und die werden ja nicht alle in fünf Jahren verschrottet. Auch ein Elektroauto braucht Reifen, Bremsen und neue Scheibenwischer. Ganz überflüssig werden wir also nicht, wir werden nur anders arbeiten, mehr am Laptop und weniger mit Öl an den Händen."
      }
     ]
    },
    {
     "nr": 3,
     "art": "erzaehlen",
     "thema": "Künstliche Intelligenz im Büro",
     "karten": [
      {
       "kopf": "Teil 3 · Diskussion",
       "kopfb": "Zwei Aussagen",
       "auftrag": [
        "Sag deine Meinung und begründe sie mit Argumenten und Beispielen.",
        "Geh auf die Argumente deines Gegenübers ein.",
        "Versucht, zu einem Ergebnis zu kommen."
       ],
       "id": "tbc1m3k6",
       "thema": "Künstliche Intelligenz im Büro",
       "text": "„Aussage A: Künstliche Intelligenz nimmt uns im Büro lästige Routinearbeit ab und lässt mehr Zeit für die eigentliche Arbeit.“\n„Aussage B: Wer sich im Büro auf künstliche Intelligenz verlässt, macht mehr Fehler und verlernt wichtige Fähigkeiten.“",
       "quelle": "Zwei Aussagen zum Thema",
       "punkte": [
        "Meinung äußern",
        "Argumente und Beispiele",
        "Auf das Gegenüber reagieren",
        "Zu einem Ergebnis kommen"
       ],
       "mustervortrag": "Ich arbeite als Steuerfachangestellte in einer Kanzlei in Freiburg, und bei uns ist künstliche Intelligenz schon jetzt Alltag. Ich sehe sie grundsätzlich positiv, also eher wie Aussage A, aber mit klaren Grenzen.\nMein erstes Argument: Die Routinearbeit wird wirklich weniger. Früher habe ich im Januar und Februar tagelang Belege abgetippt, Tankquittungen, Rechnungen, Kontoauszüge. Heute liest ein Programm die meisten Belege selbst ein und schlägt die Buchung vor. Ich kontrolliere nur noch. Dadurch habe ich mehr Zeit für die Mandanten, zum Beispiel für Rückfragen am Telefon, und genau dafür bin ich eigentlich Steuerfachangestellte geworden.\nZweitens hilft sie bei Texten. Wenn ich einem Mandanten ein kompliziertes Schreiben vom Finanzamt erklären muss, lasse ich mir manchmal einen Entwurf machen und überarbeite ihn dann selbst.\nAussage B hat aber einen wahren Kern, und das habe ich selbst erlebt. Das Programm hat letztes Jahr eine Rechnung über Büromöbel falsch zugeordnet, und eine junge Kollegin hat das einfach übernommen, weil sie dachte, das System wird schon recht haben. Wer nie gelernt hat, wie man richtig bucht, merkt solche Fehler nicht. Deshalb bestehen wir darauf, dass unsere Auszubildenden im ersten Jahr vieles noch von Hand machen.\nMein Fazit ist also: Künstliche Intelligenz ist ein gutes Werkzeug, aber die Verantwortung bleibt beim Menschen. Wer unterschreibt, muss verstehen, was er unterschreibt. Wie wird das bei Ihnen im Betrieb gehandhabt?",
       "frage": "Und was ist mit dem Datenschutz? Sie geben da doch sehr sensible Daten Ihrer Mandanten ein.",
       "musterantwort": "Das ist ein berechtigter Einwand, und den nehmen wir sehr ernst. Wir nutzen nur Programme, deren Server in Deutschland stehen und die extra für Kanzleien entwickelt wurden. Frei verfügbare Programme aus dem Internet dürfen wir für Mandantendaten gar nicht verwenden, das steht so in unserer internen Richtlinie. Und daran halten sich auch alle, soweit ich das beurteilen kann. Das wird auch regelmäßig kontrolliert."
      }
     ]
    }
   ]
  }
 ]
};
