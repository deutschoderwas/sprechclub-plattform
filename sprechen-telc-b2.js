/* ============================================================
   deutschoderwas club — SPRECHEN telc Deutsch B2

   Aufbau nach dem offiziellen telc-Format (telc „Tipps zur
   Prüfungsvorbereitung Deutsch B2", Übungstest 1 und 3, geprüft
   01.11.2026). Alle Texte und Aufgaben eigene, nur das Format
   ist nachgebaut. Erzeugt aus scratchpad/telcb2 mit bau-b2.js.
   ============================================================ */

window.SPRECHEN_TELC_B2 = {
 "niveau": "telcB2",
 "pruefung": "telc Deutsch B2",
 "minuten": 15,
 "punkte": 75,
 "intro": "Die mündliche Prüfung bei telc B2 ist eine Paarprüfung, etwa fünfzehn Minuten, vorher zwanzig Minuten Vorbereitung. Nach einem kurzen Kennenlernen, das nicht bewertet wird, kommen drei Teile mit je 25 Punkten: über eine eigene Erfahrung sprechen (etwa anderthalb Minuten), über einen Text diskutieren und gemeinsam etwas planen. Sprich laut, nimm dich auf und vergleiche mit dem Muster.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Die Bausteine",
   "zeichen": "🧱",
   "was": "Einen Kurzvortrag gliedern, nachfragen und antworten."
  },
  {
   "nr": 2,
   "titel": "Im Gespräch",
   "zeichen": "💬",
   "was": "Diskutieren und verhandeln auf B2."
  },
  {
   "nr": 3,
   "titel": "Die drei Teile",
   "zeichen": "🎯",
   "was": "Erfahrung, Diskussion, Planen — mit Musterlösung zum Anhören."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "Alle drei Teile hintereinander, fünfzehn Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tb2m1",
   "stufe": 1,
   "titel": "Einen Kurzvortrag gliedern",
   "kurz": "Einstieg, Erfahrung, Bewertung, Schluss — in anderthalb Minuten",
   "ziel": "Nach diesem Block baust du einen Kurzvortrag über eine eigene Erfahrung klar auf: mit Einstieg, konkreter Erzählung, eigener Bewertung und einem runden Schluss.",
   "zeichen": "🎤",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Einstieg passt am besten zu einem Kurzvortrag über einen Jobwechsel?",
     "optionen": [
      "Also, ich sage jetzt etwas über Arbeit.",
      "Ich möchte euch von einer Entscheidung erzählen, die mein Berufsleben ziemlich auf den Kopf gestellt hat: mein Wechsel in die Pflege.",
      "Jobwechsel sind ein wichtiges Thema in der heutigen Gesellschaft."
     ],
     "loesung": 1,
     "erklaerung": "Ein guter Einstieg nennt das Thema und macht neugierig. Allgemeine Sätze über „die Gesellschaft\" passen nicht zu einer persönlichen Erfahrung."
    },
    {
     "art": "wahl",
     "frage": "Wie lange soll dein Kurzvortrag in Teil eins ungefähr dauern?",
     "optionen": [
      "Etwa anderthalb Minuten.",
      "So lange wie möglich, mindestens fünf Minuten.",
      "Höchstens zwanzig Sekunden."
     ],
     "loesung": 0,
     "erklaerung": "Rund anderthalb Minuten — danach stellt dir dein Gegenüber noch Fragen."
    },
    {
     "art": "wahl",
     "frage": "Mit welchem Satz leitest du von der Erzählung zur Bewertung über?",
     "optionen": [
      "Und dann bin ich nach Hause gegangen.",
      "Rückblickend muss ich sagen, dass mich diese Zeit stärker gemacht hat.",
      "Das war im Jahr zweitausendneunzehn."
     ],
     "loesung": 1,
     "erklaerung": "„Rückblickend\" signalisiert klar: Jetzt kommt deine Einschätzung, nicht mehr die Handlung."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz zeigt B2-Niveau bei der Beschreibung deiner Gefühle?",
     "optionen": [
      "Ich war traurig.",
      "Es war schlecht für mich.",
      "Anfangs fühlte ich mich ziemlich verloren, weil mir die gewohnte Umgebung fehlte."
     ],
     "loesung": 2,
     "erklaerung": "Präzise Gefühlswörter plus Begründung mit „weil\" — genau das unterscheidet B2 von B1."
    },
    {
     "art": "wahl",
     "frage": "Was ist ein typischer Fehler im Kurzvortrag?",
     "optionen": [
      "Nur Fakten aneinanderreihen, ohne zu sagen, was man daraus gelernt hat.",
      "Ein konkretes Beispiel erzählen.",
      "Am Ende kurz zusammenfassen."
     ],
     "loesung": 0,
     "erklaerung": "Ohne Bewertung bleibt der Vortrag eine Liste. Die Leitfrage „Was hast du gelernt?\" gehört dazu."
    },
    {
     "art": "wahl",
     "frage": "Wie beendest du deinen Vortrag am besten?",
     "optionen": [
      "Fertig.",
      "Kurz gesagt: Ich würde es jederzeit wieder so machen, allerdings mit etwas mehr Geduld.",
      "Ich weiß nicht mehr, was ich sagen soll."
     ],
     "loesung": 1,
     "erklaerung": "Ein Schluss fasst zusammen und gibt eine klare Antwort auf die letzte Leitfrage."
    },
    {
     "art": "wahl",
     "frage": "Du hast in der Vorbereitung zwanzig Minuten. Was notierst du für Teil eins?",
     "optionen": [
      "Den ganzen Vortrag Wort für Wort.",
      "Gar nichts, du sprichst lieber spontan.",
      "Stichpunkte zu den vier Leitfragen und zwei, drei gute Verbindungswörter."
     ],
     "loesung": 2,
     "erklaerung": "Stichpunkte geben Struktur, ohne dass du abliest. Ein vorgelesener Text wirkt unnatürlich."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Einstieg in deinen Vortrag.",
     "teile": [
      "Ich",
      "möchte",
      "heute",
      "von einer Erfahrung",
      "erzählen,",
      "die",
      "mich",
      "sehr geprägt",
      "hat"
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
     "erklaerung": "Im Relativsatz mit „die\" steht das konjugierte Verb „hat\" am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz zur Bewertung.",
     "teile": [
      "Im Nachhinein",
      "bin",
      "ich",
      "froh,",
      "dass",
      "ich",
      "diesen Schritt",
      "gewagt",
      "habe"
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
     "erklaerung": "„Im Nachhinein\" steht auf Position eins, deshalb folgt sofort das Verb „bin\"."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Schlusssatz.",
     "teile": [
      "Wenn",
      "ich",
      "noch einmal",
      "entscheiden",
      "müsste,",
      "würde",
      "ich",
      "es",
      "genauso machen"
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
     "erklaerung": "Konjunktiv II im Bedingungssatz: Der Nebensatz steht vorn, danach direkt „würde\"."
    }
   ]
  },
  {
   "id": "tb2m2",
   "stufe": 1,
   "titel": "Nachfragen stellen und beantworten",
   "kurz": "Interessiert nachfragen und spontan, aber ausführlich antworten",
   "ziel": "Nach diesem Block stellst du nach dem Vortrag deines Gegenübers passende Fragen und antwortest selbst auf Nachfragen mit Begründung und Beispiel.",
   "zeichen": "❓",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Dein Partner hat von seinem Auslandsjahr erzählt. Welche Nachfrage ist am besten?",
     "optionen": [
      "Wie war das Wetter?",
      "Du hast erwähnt, dass du anfangs Heimweh hattest. Was hat dir geholfen, das zu überwinden?",
      "Warst du schon mal in Spanien?"
     ],
     "loesung": 1,
     "erklaerung": "Eine gute Nachfrage greift etwas aus dem Vortrag auf. So zeigst du, dass du wirklich zugehört hast."
    },
    {
     "art": "wahl",
     "frage": "Welche Frage ist für Teil eins zu geschlossen?",
     "optionen": [
      "Hat es dir gefallen?",
      "Was würdest du heute anders machen?",
      "Inwiefern hat sich dein Alltag dadurch verändert?"
     ],
     "loesung": 0,
     "erklaerung": "Auf „Hat es dir gefallen?\" reicht ein „Ja\". Offene W-Fragen bringen das Gespräch weiter."
    },
    {
     "art": "wahl",
     "frage": "Man fragt dich: „Würdest du anderen Leuten dazu raten?\" Welche Antwort ist am stärksten?",
     "optionen": [
      "Ja.",
      "Vielleicht, ich weiß nicht.",
      "Grundsätzlich schon, allerdings nur, wenn man finanziell etwas abgesichert ist. Ich kenne jemanden, der es ohne Ersparnisse versucht hat, und das ging schief."
     ],
     "loesung": 2,
     "erklaerung": "Antwort, Einschränkung und Beispiel — so wird aus einer Nachfrage ein echtes Gespräch."
    },
    {
     "art": "wahl",
     "frage": "Du hast eine Nachfrage nicht genau verstanden. Was sagst du?",
     "optionen": [
      "Ähm … ja, genau.",
      "Meinst du, wie ich mich damals gefühlt habe, oder wie ich heute darüber denke?",
      "Das ist eine schwierige Frage, nächste Frage bitte."
     ],
     "loesung": 1,
     "erklaerung": "Gezielt nachfragen ist auf B2 ein Zeichen von Kommunikationsfähigkeit, kein Fehler."
    },
    {
     "art": "wahl",
     "frage": "Wie viele Sätze sollte deine Antwort auf eine Nachfrage etwa haben?",
     "optionen": [
      "Zwei bis vier Sätze mit Begründung.",
      "Ein Wort reicht.",
      "Eine weitere Minute Vortrag."
     ],
     "loesung": 0,
     "erklaerung": "Ausführlich genug, um etwas zu zeigen, aber kurz genug, damit das Gespräch weitergeht."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz leitet eine höfliche Nachfrage ein?",
     "optionen": [
      "Erklär mir das jetzt.",
      "Das verstehe ich nicht, das ist falsch.",
      "Mich würde interessieren, wie deine Familie darauf reagiert hat."
     ],
     "loesung": 2,
     "erklaerung": "„Mich würde interessieren, …\" ist höflich und klingt sehr natürlich."
    },
    {
     "art": "wahl",
     "frage": "Dein Gegenüber fragt etwas, worüber du nicht sprechen möchtest. Was tust du?",
     "optionen": [
      "Du schweigst.",
      "Du sagst freundlich: „Das ist mir etwas zu privat, aber ich kann gern erzählen, wie es beruflich weiterging.\"",
      "Du antwortest einfach mit „Kein Kommentar\"."
     ],
     "loesung": 1,
     "erklaerung": "Freundlich ablenken und trotzdem weitersprechen — es zählt, dass du sprachlich etwas zeigst."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Nachfrage.",
     "teile": [
      "Was",
      "hat",
      "dich",
      "eigentlich",
      "dazu",
      "bewogen,",
      "die Stelle",
      "zu wechseln"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "erklaerung": "„jemanden zu etwas bewegen\" — hier mit Infinitivsatz „die Stelle zu wechseln\"."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Anfang deiner Antwort.",
     "teile": [
      "Das",
      "ist",
      "eine gute Frage,",
      "über",
      "die",
      "ich",
      "selbst",
      "lange",
      "nachgedacht",
      "habe"
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
     "erklaerung": "Relativsatz mit Präposition: „über die\" — das Verb kommt ganz ans Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Nachfrage mit Bezug auf den Vortrag.",
     "teile": [
      "Du",
      "hast",
      "vorhin",
      "gesagt,",
      "dass",
      "es",
      "anfangs",
      "schwer",
      "war"
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
     "erklaerung": "Mit „Du hast vorhin gesagt, dass …\" knüpfst du direkt an den Vortrag an."
    }
   ]
  },
  {
   "id": "tb2m3",
   "stufe": 2,
   "titel": "Diskutieren auf B2",
   "kurz": "Argumentieren, widersprechen, einschränken und auf den Partner eingehen",
   "ziel": "Nach diesem Block vertrittst du eine Position mit Argumenten, reagierst auf Gegenargumente, schränkst ein und gehst sichtbar auf dein Gegenüber ein.",
   "zeichen": "⚖️",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz bringt ein Argument mit Begründung?",
     "optionen": [
      "Ein Tempolimit ist gut.",
      "Ich bin für ein Tempolimit, weil es die Zahl schwerer Unfälle nachweislich senkt.",
      "Tempolimit, ja oder nein?"
     ],
     "loesung": 1,
     "erklaerung": "Position plus „weil\" plus Begründung — erst dann ist es ein Argument."
    },
    {
     "art": "wahl",
     "frage": "Dein Partner sagt: „Bargeld ist veraltet.\" Wie widersprichst du auf B2-Niveau?",
     "optionen": [
      "Das stimmt nicht.",
      "Du hast keine Ahnung.",
      "Da muss ich dir widersprechen. Für viele ältere Menschen ist Bargeld nach wie vor die einfachste Möglichkeit, den Überblick zu behalten."
     ],
     "loesung": 2,
     "erklaerung": "Höflich einleiten, dann mit einem Argument widersprechen — nicht persönlich werden."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist eine Einschränkung?",
     "optionen": [
      "Das gilt allerdings nur, solange es genug Personal gibt.",
      "Ich bin völlig dafür.",
      "Das ist absolut falsch."
     ],
     "loesung": 0,
     "erklaerung": "„allerdings nur, solange …\" schränkt eine Aussage ein. Solche Nuancen zeigen B2."
    },
    {
     "art": "wahl",
     "frage": "Wie gehst du sichtbar auf dein Gegenüber ein?",
     "optionen": [
      "Ich wiederhole einfach meine Meinung.",
      "Du hast eben das Thema Kosten angesprochen. Das sehe ich ähnlich, aber …",
      "Ich spreche über etwas ganz anderes."
     ],
     "loesung": 1,
     "erklaerung": "Wer das Argument des Partners aufgreift, zeigt Interaktion — ein eigenes Bewertungskriterium."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz verwendet „zwar … aber\" richtig?",
     "optionen": [
      "Zwar ist das teuer, aber lohnt sich.",
      "Zwar das ist teuer, aber es lohnt sich.",
      "Das ist zwar teuer, aber langfristig lohnt es sich."
     ],
     "loesung": 2,
     "erklaerung": "„zwar\" steht im Mittelfeld oder auf Position eins mit Verb danach; nach „aber\" braucht der Satz ein Subjekt."
    },
    {
     "art": "wahl",
     "frage": "Dein Partner spricht schon sehr lange. Wie kommst du höflich zu Wort?",
     "optionen": [
      "Darf ich da kurz einhaken?",
      "Hör auf zu reden!",
      "Du redest zu viel."
     ],
     "loesung": 0,
     "erklaerung": "„Darf ich da kurz einhaken?\" ist höflich und völlig üblich in Diskussionen."
    },
    {
     "art": "wahl",
     "frage": "Was ist in Teil zwei am wichtigsten?",
     "optionen": [
      "Den Text möglichst vollständig nacherzählen.",
      "Am Ende unbedingt recht behalten.",
      "Eine eigene Position begründen und auf die Argumente des Gegenübers reagieren."
     ],
     "loesung": 2,
     "erklaerung": "Der Text ist nur der Ausgangspunkt. Bewertet wird, wie ihr Meinungen austauscht und begründet."
    },
    {
     "art": "ordnen",
     "frage": "Bau das Gegenargument.",
     "teile": [
      "Ich",
      "verstehe",
      "deinen Punkt,",
      "trotzdem",
      "halte",
      "ich",
      "ein Verbot",
      "für",
      "übertrieben"
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
     "erklaerung": "Nach „trotzdem\" auf Position eins folgt sofort das Verb „halte\"."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „je … desto\".",
     "teile": [
      "Je",
      "früher",
      "Kinder",
      "ein Smartphone",
      "bekommen,",
      "desto",
      "schwerer",
      "fällt",
      "es",
      "ihnen,",
      "sich zu konzentrieren"
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
      9,
      10
     ],
     "erklaerung": "Im „je\"-Teil steht das Verb am Ende, im „desto\"-Teil direkt nach dem Adjektiv."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Einschränkung.",
     "teile": [
      "Das",
      "mag",
      "in Großstädten",
      "stimmen,",
      "auf dem Land",
      "sieht",
      "es",
      "allerdings",
      "anders",
      "aus"
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
     "erklaerung": "„Das mag stimmen, … allerdings\" — ein typisches Muster, um teilweise zuzustimmen."
    }
   ]
  },
  {
   "id": "tb2m4",
   "stufe": 2,
   "titel": "Planen und verhandeln",
   "kurz": "Vorschläge abwägen, Bedenken äußern, Kompromisse finden, Ergebnis festhalten",
   "ziel": "Nach diesem Block wägst du Vorschläge ab, äußerst Bedenken höflich, bietest Kompromisse an und hältst am Ende ein klares gemeinsames Ergebnis fest.",
   "zeichen": "🧭",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie machst du auf B2-Niveau einen Vorschlag mit Begründung?",
     "optionen": [
      "Wir machen ein Grillfest.",
      "Grillen!",
      "Ich könnte mir vorstellen, dass ein Grillfest gut ankommt, weil es wenig kostet und alle locker ins Gespräch kommen."
     ],
     "loesung": 2,
     "erklaerung": "„Ich könnte mir vorstellen\" plus Begründung — höflich und überzeugend zugleich."
    },
    {
     "art": "wahl",
     "frage": "Wie äußerst du Bedenken, ohne den Vorschlag einfach abzulehnen?",
     "optionen": [
      "Grundsätzlich gefällt mir die Idee, ich habe nur Bedenken, ob wir das mit dem Budget schaffen.",
      "Nein, das geht nicht.",
      "Schlechte Idee."
     ],
     "loesung": 0,
     "erklaerung": "Erst Wertschätzung, dann die konkrete Sorge — so bleibt das Gespräch konstruktiv."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist ein Kompromissangebot?",
     "optionen": [
      "Wir machen es so, wie ich gesagt habe.",
      "Was hältst du davon, wenn wir dein Konzept nehmen, aber den Termin auf Freitag legen?",
      "Dann machen wir eben gar nichts."
     ],
     "loesung": 1,
     "erklaerung": "Ein Kompromiss verbindet Teile beider Vorschläge."
    },
    {
     "art": "wahl",
     "frage": "Dein Partner schlägt ein teures Restaurant vor. Wie reagierst du am besten?",
     "optionen": [
      "Viel zu teuer.",
      "Okay.",
      "Das klingt verlockend, aber bei zwanzig Leuten würde das unser Budget sprengen. Wie wäre es stattdessen mit einem Caterer?"
     ],
     "loesung": 2,
     "erklaerung": "Reagieren, begründen, Alternative anbieten — so zeigst du Verhandlungsgeschick."
    },
    {
     "art": "wahl",
     "frage": "Wozu dient ein Satz wie „Dann halten wir also fest: …\"?",
     "optionen": [
      "Er fasst das gemeinsame Ergebnis zusammen.",
      "Er beendet die Prüfung sofort.",
      "Er leitet einen neuen Streit ein."
     ],
     "loesung": 0,
     "erklaerung": "Am Ende sollt ihr ein klares Ergebnis haben. Die Zusammenfassung zeigt, dass die Planung gelungen ist."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz verteilt Aufgaben klar und höflich?",
     "optionen": [
      "Du machst alles.",
      "Wäre es für dich in Ordnung, wenn du dich um die Einladungen kümmerst? Dann übernehme ich die Raumsuche.",
      "Irgendwer wird das schon machen."
     ],
     "loesung": 1,
     "erklaerung": "Höfliche Frage im Konjunktiv II und ein eigenes Angebot — so ist die Arbeit fair verteilt."
    },
    {
     "art": "wahl",
     "frage": "Was ist in Teil drei ein typischer Fehler?",
     "optionen": [
      "Vorschläge des Partners aufgreifen.",
      "Alle Punkte der Aufgabe ansprechen.",
      "Nur eigene Ideen aufzählen und nicht auf das Gegenüber reagieren."
     ],
     "loesung": 2,
     "erklaerung": "„Gemeinsam etwas planen\" heißt: verhandeln, nicht monologisieren."
    },
    {
     "art": "ordnen",
     "frage": "Bau das Kompromissangebot.",
     "teile": [
      "Wir",
      "könnten",
      "uns",
      "doch",
      "in der Mitte",
      "treffen"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "„sich in der Mitte treffen\" ist eine feste Wendung für einen Kompromiss."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, mit dem du Bedenken äußerst.",
     "teile": [
      "Ich",
      "gebe",
      "zu bedenken,",
      "dass",
      "viele Kollegen",
      "am Freitag",
      "früher",
      "gehen"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "erklaerung": "„zu bedenken geben\" ist eine elegante B2-Wendung. Im dass-Satz steht das Verb am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der das Ergebnis festhält.",
     "teile": [
      "Dann",
      "halten",
      "wir",
      "fest,",
      "dass",
      "du",
      "den Raum",
      "reservierst"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "erklaerung": "„festhalten, dass …\" — so fasst ihr am Ende verbindlich zusammen, wer was macht."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "erzaehlen",
   "name": "Über Erfahrungen sprechen",
   "kurz": "Kurzvortrag zu einer eigenen Erfahrung, dann Fragen",
   "was": "Du wählst ein Thema und erzählst etwa anderthalb Minuten von einer eigenen Erfahrung. Danach stellt dein Gegenüber Fragen.",
   "tipp": "Gliedere: Was war, wie war es für dich, was hast du daraus gelernt. Ein Beispiel macht den Vortrag lebendig.",
   "zeichen": "🗣️",
   "farbe": "turq",
   "punkte": 25,
   "runden": [
    {
     "id": "tb2m1r1",
     "thema": "Ein Umzug, der mein Leben verändert hat",
     "karten": [
      {
       "kopf": "Teil 1 · Über Erfahrungen sprechen",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Sprich etwa anderthalb Minuten über deine Erfahrung — zu allen Punkten der Karte.",
        "Beantworte danach die Nachfrage deines Gegenübers."
       ],
       "id": "tb2t1k1",
       "thema": "Ein Umzug, der mein Leben verändert hat",
       "punkte": [
        "Was ist passiert?",
        "Wie hast du dich gefühlt?",
        "Was hast du gelernt?",
        "Würdest du es wieder so machen?"
       ],
       "mustervortrag": "Ich möchte euch von meinem Umzug von Lissabon nach Hannover erzählen, der mein Leben ziemlich auf den Kopf gestellt hat. Vor vier Jahren hat mir meine Firma angeboten, in die deutsche Niederlassung zu wechseln. Ich hatte nur drei Wochen Zeit, mich zu entscheiden, und habe ehrlich gesagt aus dem Bauch heraus zugesagt. Die ersten Monate waren hart. Ich kannte niemanden, die Tage im Winter waren unglaublich kurz, und mein Deutsch reichte zwar für die Arbeit, aber nicht für Small Talk in der Kantine. Ich habe mich oft einsam gefühlt und mich gefragt, ob das wirklich die richtige Entscheidung war. Der Wendepunkt kam, als ich mich in einem Ruderverein angemeldet habe. Plötzlich hatte ich feste Termine, Leute, die auf mich warteten, und nach dem Training saßen wir oft noch zusammen. Rückblickend habe ich vor allem gelernt, dass man ein neues Zuhause nicht einfach findet, sondern es sich aktiv aufbauen muss. Niemand klopft an deine Tür, du musst selbst rausgehen. Außerdem bin ich viel geduldiger mit mir selbst geworden. Würde ich es wieder so machen? Ja, auf jeden Fall, allerdings würde ich mir vorher mehr Zeit nehmen und schon vor dem Umzug Kontakt zu Vereinen oder Gruppen suchen. Dann wäre der Anfang sicher leichter gewesen. Heute fühle ich mich in Hannover wirklich zu Hause.",
       "frage": "Hast du nie daran gedacht, wieder nach Portugal zurückzugehen?",
       "musterantwort": "Doch, im ersten Winter fast jeden Tag. Inzwischen habe ich hier aber einen Freundeskreis und eine Stelle, die mir viel Spaß macht. Zurückgehen würde ich höchstens, wenn meine Eltern einmal Unterstützung bräuchten."
      }
     ]
    },
    {
     "id": "tb2m1r2",
     "thema": "Ein beruflicher Neuanfang",
     "karten": [
      {
       "kopf": "Teil 1 · Über Erfahrungen sprechen",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Sprich etwa anderthalb Minuten über deine Erfahrung — zu allen Punkten der Karte.",
        "Beantworte danach die Nachfrage deines Gegenübers."
       ],
       "id": "tb2t1k2",
       "thema": "Ein beruflicher Neuanfang",
       "punkte": [
        "Was ist passiert?",
        "Wie hast du dich gefühlt?",
        "Was hast du gelernt?",
        "Würdest du es wieder so machen?"
       ],
       "mustervortrag": "Ich möchte von meinem beruflichen Neuanfang erzählen. Ich habe zwölf Jahre lang als Bankkauffrau gearbeitet, und von außen sah alles perfekt aus: sicherer Job, gutes Gehalt, nette Kollegen. Aber ich war innerlich immer unzufriedener, weil ich den ganzen Tag nur Zahlen hin und her geschoben habe. Mit achtunddreißig habe ich dann gekündigt und eine Ausbildung zur Erzieherin angefangen. Meine Familie war geschockt, und ehrlich gesagt hatte ich selbst große Angst. Plötzlich verdiente ich nur noch einen Bruchteil von dem, was ich vorher hatte, und saß in der Berufsschule neben Leuten, die zwanzig Jahre jünger waren als ich. Am Anfang habe ich mich ziemlich fehl am Platz gefühlt. Doch schon im ersten Praktikum in einer Kita habe ich gemerkt, dass ich genau das machen möchte. Abends war ich zwar erschöpft, aber zum ersten Mal seit Jahren zufrieden. Gelernt habe ich vor allem, dass Sicherheit nicht alles ist. Es lohnt sich, auf das eigene Gefühl zu hören, auch wenn andere das nicht verstehen. Und ich habe gelernt, mit weniger Geld auszukommen, was erstaunlich gut funktioniert. Würde ich es wieder so machen? Auf jeden Fall, nur vielleicht ein paar Jahre früher. Ich würde allerdings vorher genauer rechnen und mir ein finanzielles Polster anlegen, denn die ersten Monate waren wirklich knapp.",
       "frage": "Wie hat dein Umfeld inzwischen auf deine Entscheidung reagiert?",
       "musterantwort": "Mittlerweile sind alle stolz auf mich, sogar mein Vater, der am Anfang am skeptischsten war. Er hat gesehen, wie viel glücklicher ich bin, und das hat ihn überzeugt."
      }
     ]
    },
    {
     "id": "tb2m1r3",
     "thema": "Eine Reise, die anders verlief als geplant",
     "karten": [
      {
       "kopf": "Teil 1 · Über Erfahrungen sprechen",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Sprich etwa anderthalb Minuten über deine Erfahrung — zu allen Punkten der Karte.",
        "Beantworte danach die Nachfrage deines Gegenübers."
       ],
       "id": "tb2t1k3",
       "thema": "Eine Reise, die anders verlief als geplant",
       "punkte": [
        "Was ist passiert?",
        "Wie hast du dich gefühlt?",
        "Was hast du gelernt?",
        "Würdest du es wieder so machen?"
       ],
       "mustervortrag": "Ich erzähle euch von einer Reise, die völlig anders verlaufen ist als geplant. Vor drei Jahren wollte ich mit einer Freundin zwei Wochen durch Norwegen wandern. Wir hatten alles genau geplant: jede Hütte reserviert, jede Etappe ausgerechnet. Doch schon am zweiten Tag hat sich meine Freundin den Knöchel verstaucht. An Wandern war nicht mehr zu denken. Im ersten Moment war ich furchtbar enttäuscht und, ehrlich gesagt, auch ein bisschen wütend, obwohl sie natürlich nichts dafür konnte. Wir saßen in einem kleinen Fischerdorf fest und wussten nicht, was wir tun sollten. Also haben wir improvisiert. Wir haben uns ein altes Holzhaus am Hafen gemietet, sind mit Fischern aufs Meer gefahren und haben abends mit den Nachbarn gekocht. Am Ende waren das die schönsten zwei Wochen, die ich je auf Reisen erlebt habe, gerade weil nichts nach Plan lief. Ich habe dabei gelernt, dass ich viel zu sehr an Plänen hänge. Manchmal entstehen die besten Erlebnisse genau dann, wenn man die Kontrolle abgibt. Seitdem plane ich meine Reisen viel lockerer und lasse bewusst Tage frei. Würde ich es wieder so machen? Den verstauchten Knöchel natürlich nicht, aber die Offenheit, mit der wir reagiert haben, auf jeden Fall. Und eine Reiseversicherung schließe ich inzwischen immer ab.",
       "frage": "Warst du nicht trotzdem traurig, dass ihr nicht wandern konntet?",
       "musterantwort": "Am Anfang schon, das gebe ich zu. Aber nach ein paar Tagen war die Enttäuschung verflogen. Die Wanderung haben wir übrigens zwei Jahre später nachgeholt, diesmal ohne Unfall."
      }
     ]
    },
    {
     "id": "tb2m1r4",
     "thema": "Eine Zeit, in der ich ehrenamtlich aktiv war",
     "karten": [
      {
       "kopf": "Teil 1 · Über Erfahrungen sprechen",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Sprich etwa anderthalb Minuten über deine Erfahrung — zu allen Punkten der Karte.",
        "Beantworte danach die Nachfrage deines Gegenübers."
       ],
       "id": "tb2t1k4",
       "thema": "Eine Zeit, in der ich ehrenamtlich aktiv war",
       "punkte": [
        "Was ist passiert?",
        "Wie hast du dich gefühlt?",
        "Was hast du gelernt?",
        "Würdest du es wieder so machen?"
       ],
       "mustervortrag": "Ich möchte von meiner Zeit als ehrenamtlicher Lesepate erzählen. Vor zwei Jahren habe ich in der Zeitung gelesen, dass eine Grundschule in meinem Viertel Erwachsene sucht, die mit Kindern lesen üben. Ich arbeite als Ingenieur und hatte eigentlich wenig Zeit, aber ich dachte, eine Stunde pro Woche müsste machbar sein. Ich habe dann ein Jahr lang jeden Mittwoch mit zwei Jungen aus der dritten Klasse gelesen. Beide hatten große Schwierigkeiten, und am Anfang wollten sie überhaupt nicht mit mir sprechen. Ich war ziemlich unsicher, weil ich keine pädagogische Ausbildung habe, und ich hatte oft das Gefühl, dass ich nichts bewirke. Nach ein paar Monaten hat sich das geändert. Einer der Jungen kam plötzlich mit einem Comic, den er zu Hause angefangen hatte, und wollte mir unbedingt das Ende vorlesen. Das war für mich ein unglaublich schöner Moment, und ich bin danach mit einem breiten Lächeln ins Büro gefahren. Gelernt habe ich vor allem Geduld. In meinem Beruf muss alles schnell und effizient gehen, aber Kinder brauchen Zeit und Vertrauen. Außerdem habe ich gemerkt, wie viel man mit wenig Aufwand verändern kann. Ich würde es jederzeit wieder machen. Allerdings würde ich mir am Anfang mehr Unterstützung von den Lehrkräften holen, um besser zu verstehen, wo die Probleme der Kinder genau liegen.",
       "frage": "Hast du noch Kontakt zu den beiden Jungen?",
       "musterantwort": "Leider nur indirekt, weil sie inzwischen auf eine weiterführende Schule gehen. Die Lehrerin hat mir aber erzählt, dass einer von ihnen jetzt sogar in der Schulbibliothek hilft. Darüber habe ich mich riesig gefreut."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "erzaehlen",
   "name": "Diskussion",
   "kurz": "Über einen Text diskutieren, den ihr beide gelesen habt",
   "was": "Ihr lest in der Vorbereitung denselben Text. In der Prüfung diskutiert ihr darüber: eigene Meinung, Argumente, auf den anderen eingehen.",
   "tipp": "Nicht nur Meinung sagen — begründen, ein Beispiel geben und auf das Argument des anderen antworten: „Da hast du recht, aber …\"",
   "zeichen": "⚖️",
   "farbe": "gold",
   "punkte": 25,
   "runden": [
    {
     "id": "tb2m2r1",
     "thema": "Bargeld abschaffen?",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Text für beide",
       "auftrag": [
        "Bezieh Stellung zur These des Textes und begründe deine Meinung.",
        "Geh auf Argumente deines Gegenübers ein — zustimmen, widersprechen, einschränken.",
        "Reagiere auf das Gegenargument."
       ],
       "id": "tb2t2k1",
       "thema": "Bargeld abschaffen?",
       "quelle": "Neue Wirtschaftswoche",
       "text": "Bargeld ist ein Auslaufmodell. Wer heute an der Supermarktkasse noch Münzen zählt, hält nicht nur die Schlange auf, sondern verursacht auch erhebliche Kosten: Banken und Händler geben jedes Jahr Milliarden für Transport, Lagerung und Sicherung von Scheinen aus. Hinzu kommt, dass Bargeld Schwarzarbeit und Steuerhinterziehung erleichtert, weil Zahlungen kaum nachvollziehbar sind. Bargeldlose Zahlungen sind dagegen schnell, hygienisch und lassen sich jederzeit überprüfen. Länder in Skandinavien zeigen längst, dass der Alltag ohne Münzen problemlos funktioniert. Natürlich gibt es Bedenken, etwa beim Datenschutz oder bei älteren Menschen, die mit digitalen Zahlungen weniger vertraut sind. Doch diese Probleme lassen sich durch einfache Bezahlkarten und strenge Datenschutzregeln lösen. Es ist Zeit, dass auch Deutschland den Mut hat, einen festen Termin für das Ende des Bargelds zu beschließen. — Kommentar von Markus Hellwig",
       "punkte": [
        "Position beziehen",
        "Argumente nennen",
        "Auf dein Gegenüber eingehen",
        "Beispiele aus deiner Erfahrung"
       ],
       "mustervortrag": "Der Autor fordert, das Bargeld in Deutschland ganz abzuschaffen. Er argumentiert vor allem mit den Kosten und damit, dass Bargeld Schwarzarbeit erleichtert. Ich kann diese Argumente teilweise nachvollziehen, halte eine vollständige Abschaffung aber für den falschen Weg. Ich zahle selbst fast alles mit Karte oder Handy, weil es schnell und bequem ist. Trotzdem sehe ich in meiner Familie, dass nicht alle so leben können. Meine Großmutter zum Beispiel teilt ihr Geld jeden Monat in Umschläge ein, nur so behält sie den Überblick. Mit einer Karte wäre sie völlig überfordert. Außerdem bin ich beim Thema Datenschutz skeptischer als der Autor. Wenn jede Zahlung gespeichert wird, kann man genau nachvollziehen, wo ich einkaufe, was ich esse und wohin ich reise. Strenge Regeln klingen gut, aber Daten können trotzdem missbraucht werden. Man könnte natürlich einwenden, dass Schwarzarbeit ein großes Problem ist. Das stimmt, aber ich glaube nicht, dass sie ohne Bargeld verschwinden würde, sie würde sich eher andere Wege suchen. Meiner Meinung nach sollte jeder selbst entscheiden dürfen, wie er bezahlt. Digital ja, aber als Angebot und nicht als Pflicht.",
       "frage": "Aber in Schweden funktioniert es doch auch fast ohne Bargeld. Warum sollte das bei uns nicht klappen?",
       "musterantwort": "Das ist ein berechtigter Einwand. Allerdings hat sich das in Schweden über viele Jahre freiwillig entwickelt, und selbst dort gibt es inzwischen Diskussionen, ob man nicht doch ein Recht auf Bargeld braucht. Ein festes Verbot von oben halte ich deshalb weiterhin für zu riskant."
      }
     ]
    },
    {
     "id": "tb2m2r2",
     "thema": "Pflicht-Ehrenamt für junge Leute?",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Text für beide",
       "auftrag": [
        "Bezieh Stellung zur These des Textes und begründe deine Meinung.",
        "Geh auf Argumente deines Gegenübers ein — zustimmen, widersprechen, einschränken.",
        "Reagiere auf das Gegenargument."
       ],
       "id": "tb2t2k2",
       "thema": "Pflicht-Ehrenamt für junge Leute?",
       "quelle": "Gesellschaft heute",
       "text": "Ein verpflichtendes soziales Jahr für alle jungen Menschen nach der Schule wäre ein Gewinn für die ganze Gesellschaft. In Pflegeheimen, Kitas und Sportvereinen fehlen überall helfende Hände, und gleichzeitig wissen viele Schulabgänger nicht, was sie mit ihrem Leben anfangen sollen. Ein Jahr im Dienst anderer würde ihnen Orientierung geben, Verantwortung beibringen und sie mit Menschen zusammenbringen, die sie sonst nie kennengelernt hätten. Kritiker sprechen von Zwang und verlorener Lebenszeit. Doch wer einmal einen alten Menschen gepflegt oder Kinder betreut hat, kommt selten unverändert zurück. Viele entdecken dabei sogar ihren späteren Beruf. Und auch Jugendliche aus sehr unterschiedlichen Familien würden einander endlich auf Augenhöhe begegnen. Natürlich muss ein solcher Dienst fair bezahlt werden. Aber die Idee, dass jeder einmal etwas für die Gemeinschaft tut, verdient eine ernsthafte Debatte. — Kommentar von Anja Brückner",
       "punkte": [
        "Position beziehen",
        "Argumente nennen",
        "Auf dein Gegenüber eingehen",
        "Beispiele aus deiner Erfahrung"
       ],
       "mustervortrag": "Die Autorin schlägt vor, dass alle jungen Leute nach der Schule ein verpflichtendes soziales Jahr machen. Ich finde den Gedanken dahinter sympathisch, bin aber gegen eine Pflicht. Ich habe selbst nach dem Abitur freiwillig ein Jahr in einer Behindertenwerkstatt gearbeitet, und das war eine der wichtigsten Erfahrungen meines Lebens. Gerade deshalb glaube ich aber, dass es freiwillig sein muss. Ich war motiviert, weil ich es selbst gewollt habe. Wenn jemand dazu gezwungen wird, kann das schnell schiefgehen, und darunter leiden am Ende die Menschen, die betreut werden. Ein alter Mensch im Pflegeheim braucht keinen jungen Mann, der nur die Tage zählt. Außerdem befürchte ich, dass man so den Personalmangel in der Pflege billig verdecken will, statt die Berufe endlich besser zu bezahlen. Man könnte einwenden, dass viele junge Leute ohne Druck nie auf die Idee kämen, sich zu engagieren. Das ist sicher richtig. Deshalb wäre ich dafür, die Freiwilligendienste viel attraktiver zu machen, zum Beispiel mit besserer Bezahlung oder mit Vorteilen bei der Studienplatzvergabe. So erreicht man viele, ohne jemanden zu zwingen.",
       "frage": "Aber ohne Pflicht machen doch wieder nur die mit, die sowieso schon engagiert sind, oder?",
       "musterantwort": "Da ist etwas dran, das gebe ich zu. Gerade deshalb müssten die Anreize so gut sein, dass auch Jugendliche mitmachen, die bisher nicht daran gedacht haben. Eine Pflicht würde dieses Problem nur verschieben, aber nicht lösen."
      }
     ]
    },
    {
     "id": "tb2m2r3",
     "thema": "Tempo dreißig in der ganzen Stadt?",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Text für beide",
       "auftrag": [
        "Bezieh Stellung zur These des Textes und begründe deine Meinung.",
        "Geh auf Argumente deines Gegenübers ein — zustimmen, widersprechen, einschränken.",
        "Reagiere auf das Gegenargument."
       ],
       "id": "tb2t2k3",
       "thema": "Tempo dreißig in der ganzen Stadt?",
       "quelle": "Stadtleben aktuell",
       "text": "Tempo dreißig sollte in allen Städten zur Regel werden, nicht zur Ausnahme. Die Vorteile sind eindeutig: Bei niedrigerer Geschwindigkeit verkürzt sich der Bremsweg erheblich, und Unfälle mit Fußgängern oder Radfahrern enden viel seltener tödlich. Gleichzeitig sinkt der Lärm deutlich, was vor allem Anwohnern an großen Straßen zugutekommt. Gegner behaupten, der Verkehr würde dadurch zusammenbrechen. Doch Untersuchungen aus mehreren europäischen Städten zeigen, dass sich die Fahrzeit kaum verlängert, weil man in der Stadt ohnehin ständig an Ampeln steht. Auch Busse kommen bei guter Planung kaum langsamer voran. Und nebenbei sinken Abgase und Spritverbrauch, weil weniger stark gebremst und beschleunigt wird. Wer eine lebenswerte Stadt will, in der Kinder allein zur Schule gehen können, kommt an einem flächendeckenden Tempolimit nicht vorbei. — Kommentar von Jörg Wallner",
       "punkte": [
        "Position beziehen",
        "Argumente nennen",
        "Auf dein Gegenüber eingehen",
        "Beispiele aus deiner Erfahrung"
       ],
       "mustervortrag": "Der Autor fordert, dass in allen Städten grundsätzlich Tempo dreißig gilt. Ich stimme ihm weitgehend zu, wenn auch mit einer Einschränkung. Ich wohne an einer großen Durchgangsstraße, und der Lärm ist manchmal kaum auszuhalten, besonders nachts. Seit dort vor einem Jahr nachts Tempo dreißig gilt, schlafe ich wirklich besser. Auch das Sicherheitsargument überzeugt mich. Mein Sohn fährt mit dem Rad zur Schule, und je langsamer die Autos sind, desto ruhiger bin ich. Allerdings halte ich ein Tempolimit auf wirklich allen Straßen für übertrieben. Auf breiten Hauptstraßen ohne Wohnhäuser, zum Beispiel in Gewerbegebieten, sehe ich keinen großen Nutzen. Dort würde ich bei Tempo fünfzig bleiben. Man könnte natürlich sagen, dass das Autofahrer stärker belastet, vor allem Pendler oder Handwerker, die viel unterwegs sind. Aber ehrlich gesagt verliert man bei Tempo dreißig in der Stadt nur wenige Minuten, weil man ohnehin ständig an der Ampel steht. Insgesamt bin ich also für Tempo dreißig als Regel, aber mit sinnvollen Ausnahmen auf großen Hauptachsen.",
       "frage": "Aber Busse und Rettungswagen werden dadurch doch langsamer. Ist das nicht gefährlich?",
       "musterantwort": "Rettungswagen dürfen im Einsatz ja ohnehin schneller fahren, insofern sehe ich da kein großes Problem. Bei Bussen gebe ich dir recht, aber dafür könnte man eigene Busspuren einrichten. Das wäre ohnehin sinnvoll."
      }
     ]
    },
    {
     "id": "tb2m2r4",
     "thema": "Social Media erst ab sechzehn?",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Text für beide",
       "auftrag": [
        "Bezieh Stellung zur These des Textes und begründe deine Meinung.",
        "Geh auf Argumente deines Gegenübers ein — zustimmen, widersprechen, einschränken.",
        "Reagiere auf das Gegenargument."
       ],
       "id": "tb2t2k4",
       "thema": "Social Media erst ab sechzehn?",
       "quelle": "Familie und Schule",
       "text": "Soziale Netzwerke sollten für Kinder und Jugendliche unter sechzehn Jahren gesetzlich verboten werden. Studien deuten darauf hin, dass gerade junge Mädchen unter dem ständigen Vergleich mit perfekten Bildern leiden und häufiger Angststörungen entwickeln. Hinzu kommen Cybermobbing, gefährliche Mutproben und Algorithmen, die gezielt darauf ausgelegt sind, Nutzer möglichst lange festzuhalten. Viele Eltern fühlen sich machtlos, weil ihr Kind sonst als einziges in der Klasse nicht dabei ist. Ein klares Gesetz würde genau diesen Gruppendruck beenden: Wenn niemand darf, wird auch niemand ausgeschlossen. Kritiker halten ein Verbot für nicht kontrollierbar und verweisen auf die Freiheit der Familien, selbst zu entscheiden. Doch auch bei Alkohol oder Zigaretten akzeptieren wir Altersgrenzen, obwohl sie nicht immer eingehalten werden. Beim Schutz unserer Kinder dürfen wir nicht länger zögern. — Kommentar von Carola Funk, Kinderärztin",
       "punkte": [
        "Position beziehen",
        "Argumente nennen",
        "Auf dein Gegenüber eingehen",
        "Beispiele aus deiner Erfahrung"
       ],
       "mustervortrag": "Die Autorin fordert ein gesetzliches Verbot von sozialen Netzwerken für alle unter sechzehn Jahren. Ich teile ihre Sorgen, halte ein Verbot aber nicht für die beste Lösung. Ich habe eine Tochter, die vierzehn ist, und ich sehe jeden Tag, wie viel Zeit sie am Handy verbringt. Sie vergleicht sich ständig mit anderen, und das macht mir wirklich Sorgen. Insofern hat die Autorin völlig recht, dass die Plattformen ein Risiko sind. Trotzdem glaube ich nicht, dass ein Verbot funktionieren würde. Jugendliche sind technisch oft geschickter als ihre Eltern und würden schnell Wege finden, die Altersgrenze zu umgehen. Dann wären sie heimlich online, und man könnte noch weniger mit ihnen darüber sprechen. Außerdem nutzt meine Tochter soziale Netzwerke auch sinnvoll, zum Beispiel für ihre Zeichnungen, für die sie viel positive Rückmeldung bekommt. Natürlich könnte man einwenden, dass Eltern allein machtlos sind. Das stimmt. Deshalb wäre ich dafür, die Plattformen viel stärker in die Pflicht zu nehmen, etwa mit strengeren Regeln für Algorithmen, und gleichzeitig Medienkompetenz als festes Schulfach einzuführen.",
       "frage": "Aber Medienkompetenz in der Schule reicht doch nicht gegen Algorithmen, die süchtig machen sollen.",
       "musterantwort": "Da hast du recht, allein reicht das sicher nicht. Deshalb finde ich ja, dass die Plattformen selbst stärker reguliert werden müssen. Beides zusammen halte ich für wirksamer als ein Verbot, das niemand kontrollieren kann."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "planen",
   "name": "Gemeinsam etwas planen",
   "kurz": "Vorschlagen, abwägen, einigen",
   "was": "Ihr organisiert gemeinsam etwas. Ihr macht Vorschläge, wägt Bedenken ab und einigt euch.",
   "tipp": "Auf B2 zählt das Verhandeln: Bedenken nennen, Kompromiss anbieten, am Ende klar zusammenfassen.",
   "zeichen": "🤝",
   "farbe": "gruen",
   "punkte": 25,
   "runden": [
    {
     "id": "tb2m3r1",
     "thema": "Ein Betriebsfest mit kleinem Budget",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Wäg Bedenken ab und biete Kompromisse an.",
        "Fasst am Ende das Ergebnis zusammen."
       ],
       "id": "tb2t3k1",
       "thema": "Ein Betriebsfest mit kleinem Budget",
       "aufgabe": "Eure Abteilung hat dreißig Mitarbeiter. Die Geschäftsführung stellt für das Sommerfest nur sechshundert Euro zur Verfügung. Ihr sollt das Fest gemeinsam planen.",
       "punkte": [
        "Ort und Termin?",
        "Essen und Getränke?",
        "Programm?",
        "Wie geht ihr mit dem knappen Budget um?",
        "Wer übernimmt welche Aufgabe?"
       ],
       "mustervorschlag": "Bei sechshundert Euro für dreißig Leute müssen wir ehrlich gesagt kreativ sein. Ein Restaurant kommt deshalb kaum in Frage. Ich würde vorschlagen, dass wir im Innenhof der Firma feiern, dann zahlen wir keine Raummiete. Als Termin fände ich einen Freitagnachmittag ideal, weil viele dann ohnehin früher Schluss machen. Beim Essen schwanke ich noch: Ein Grillbuffet wäre unkompliziert, aber dafür bräuchten wir jemanden, der den ganzen Nachmittag am Grill steht. Alternativ könnte jeder einen Salat oder Nachtisch mitbringen, und wir kaufen nur Fleisch, Brot und Getränke vom Budget. Ich weiß aber, dass du Mitbringbuffets nicht so magst. Wie wäre es mit einem Kompromiss: Wir bestellen das Hauptgericht bei einem Caterer, und nur die Nachspeisen bringen Freiwillige mit? Für das Programm würde ich ein kleines Quiz über die Firma vorschlagen, das kostet nichts. Was meinst du?",
       "mustereinigung": "Dann halten wir fest: Wir feiern am Freitagnachmittag im Innenhof, bestellen das Hauptgericht bei einem Caterer, Freiwillige bringen Nachspeisen mit, du kümmerst dich um die Getränke und ich bereite das Quiz vor."
      }
     ]
    },
    {
     "id": "tb2m3r2",
     "thema": "Ein Willkommenstag für neue Kollegen",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Wäg Bedenken ab und biete Kompromisse an.",
        "Fasst am Ende das Ergebnis zusammen."
       ],
       "id": "tb2t3k2",
       "thema": "Ein Willkommenstag für neue Kollegen",
       "aufgabe": "In eurer Firma fangen nächsten Monat acht neue Kollegen gleichzeitig an. Ihr sollt einen Willkommenstag organisieren, damit sie sich schnell zurechtfinden.",
       "punkte": [
        "Ablauf des Tages?",
        "Wer stellt sich vor?",
        "Wie lernen sie die Kollegen kennen?",
        "Was bekommen sie mit?",
        "Wie bleibt ihr danach in Kontakt?"
       ],
       "mustervorschlag": "Ich fände es wichtig, dass der Tag nicht nur aus Präsentationen besteht, sonst schalten die Neuen nach einer Stunde ab. Mein Vorschlag wäre, dass wir morgens mit einem gemeinsamen Frühstück beginnen und die Abteilungsleiter sich dort ganz kurz vorstellen, jeweils höchstens fünf Minuten. Danach könnten wir einen Rundgang machen, aber nicht als langweilige Führung, sondern als kleine Rallye mit Fragen. Ich habe allerdings Bedenken, ob alle Abteilungen dafür Zeit haben. Vielleicht wäre es realistischer, wenn jede Abteilung nur eine Station übernimmt. Außerdem würde ich jedem neuen Kollegen einen Paten aus dem Team zuordnen, der in den ersten Wochen als Ansprechpartner da ist. Du hattest vorgeschlagen, eine Willkommensmappe zu verteilen. Die Idee finde ich gut, aber wir sollten sie kurz halten. Wie siehst du das?",
       "mustereinigung": "Wir einigen uns also auf ein Frühstück mit kurzer Vorstellung, eine Rallye mit einer Station pro Abteilung, eine schlanke Willkommensmappe, die du zusammenstellst, und ein Patenprogramm, das ich organisiere."
      }
     ]
    },
    {
     "id": "tb2m3r3",
     "thema": "Eine Umweltaktion im Stadtteil",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Wäg Bedenken ab und biete Kompromisse an.",
        "Fasst am Ende das Ergebnis zusammen."
       ],
       "id": "tb2t3k3",
       "thema": "Eine Umweltaktion im Stadtteil",
       "aufgabe": "Euer Stadtteilverein möchte im Frühjahr eine Umweltaktion durchführen, bei der möglichst viele Anwohner mitmachen. Ihr sollt die Aktion planen.",
       "punkte": [
        "Welche Aktion?",
        "Wann und wo?",
        "Wie erreicht ihr die Anwohner?",
        "Was braucht ihr an Material?",
        "Wie belohnt ihr die Helfer?"
       ],
       "mustervorschlag": "Ich schlage vor, dass wir einen großen Aufräumtag im Park und entlang des Flussufers organisieren. Das ist leicht verständlich, man sieht sofort ein Ergebnis, und jeder kann mitmachen, egal wie alt. Als Termin würde ich einen Samstag im April nehmen, da ist es nicht mehr so kalt. Dein Vorschlag, Bäume zu pflanzen, gefällt mir eigentlich auch, aber ich befürchte, dass wir dafür eine Genehmigung der Stadt brauchen, und das kann dauern. Vielleicht könnten wir beides verbinden: Wir räumen auf und pflanzen zusätzlich ein paar Blumenzwiebeln, dafür braucht man keine Genehmigung. Um die Anwohner zu erreichen, würde ich Plakate in den Geschäften aufhängen und die Schulen ansprechen, denn wo Kinder mitmachen, kommen auch die Eltern. Handschuhe und Müllsäcke stellt uns die Stadt sicher zur Verfügung. Was hältst du davon?",
       "mustereinigung": "Gut, wir machen im April einen Aufräumtag mit Blumenzwiebeln, ich frage bei der Stadt nach Handschuhen und Müllsäcken, du sprichst die Schulen an, und am Ende gibt es für alle Helfer eine Suppe im Gemeindehaus."
      }
     ]
    },
    {
     "id": "tb2m3r4",
     "thema": "Ein Infoabend im Sprachkurs",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Wäg Bedenken ab und biete Kompromisse an.",
        "Fasst am Ende das Ergebnis zusammen."
       ],
       "id": "tb2t3k4",
       "thema": "Ein Infoabend im Sprachkurs",
       "aufgabe": "Euer Deutschkurs soll für zukünftige Teilnehmer einen Infoabend gestalten. Die Besucher sollen erfahren, wie der Kurs abläuft und was sie erwartet.",
       "punkte": [
        "Welche Informationen sind wichtig?",
        "Wer spricht?",
        "Wie macht ihr den Abend lebendig?",
        "Wie werbt ihr dafür?",
        "Verpflegung?"
       ],
       "mustervorschlag": "Ich finde, die wichtigsten Informationen sind der Ablauf, die Kosten und wie viel Zeit man zu Hause investieren muss. Das sind genau die Fragen, die ich mir damals auch gestellt habe. Statt dass nur die Kursleiterin spricht, würde ich vorschlagen, dass zwei oder drei von uns kurz von ihren eigenen Erfahrungen erzählen. Das wirkt viel glaubwürdiger. Du hattest die Idee, eine Probestunde anzubieten. Das klingt spannend, aber ich habe Bedenken, ob in einen Abend wirklich beides hineinpasst. Wie wäre es, wenn wir nur eine Mini-Übung von zehn Minuten machen, damit die Besucher einen Eindruck bekommen? Für die Werbung könnten wir Flyer in der Bibliothek und im Bürgeramt auslegen. Und für die Verpflegung reichen meiner Meinung nach Getränke und ein paar Snacks. Was denkst du?",
       "mustereinigung": "Dann halten wir fest: Die Kursleiterin erklärt Ablauf und Kosten, drei Teilnehmer berichten von ihren Erfahrungen, du leitest eine zehnminütige Mini-Übung, und ich kümmere mich um die Flyer und die Snacks."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb2ml1",
   "titel": "Prüfungslauf 1",
   "minuten": 15,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Eine schwierige Entscheidung",
     "karten": [
      {
       "kopf": "Teil 1 · Über Erfahrungen sprechen",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Sprich etwa anderthalb Minuten über deine Erfahrung — zu allen Punkten der Karte.",
        "Beantworte danach die Nachfrage deines Gegenübers."
       ],
       "id": "tb2t1k5",
       "thema": "Eine schwierige Entscheidung",
       "punkte": [
        "Was ist passiert?",
        "Wie hast du dich gefühlt?",
        "Was hast du gelernt?",
        "Würdest du es wieder so machen?"
       ],
       "mustervortrag": "Ich möchte von einer schwierigen Entscheidung erzählen, nämlich von meinem Studienabbruch. Ich habe nach dem Abitur Medizin studiert, vor allem, weil meine Eltern beide Ärzte sind und es irgendwie von mir erwartet wurde. Nach vier Semestern habe ich gemerkt, dass ich zwar gute Noten hatte, mich aber jeden Morgen zur Uni quälen musste. Die Entscheidung, aufzuhören, hat mich monatelang beschäftigt. Ich hatte Angst, meine Eltern zu enttäuschen, und gleichzeitig das Gefühl, versagt zu haben. Ich habe in dieser Zeit schlecht geschlafen und mit kaum jemandem darüber gesprochen. Schließlich habe ich mich an die Studienberatung gewandt, und das war der wichtigste Schritt. Dort habe ich gemerkt, dass ich mit diesem Problem überhaupt nicht allein bin. Die Beraterin hat mir geholfen, meine Stärken und Interessen ganz in Ruhe zu sortieren. Heute studiere ich Landschaftsarchitektur und bin sehr glücklich damit. Gelernt habe ich, dass ein Abbruch kein Scheitern ist, sondern manchmal eine mutige Korrektur. Und ich habe gelernt, dass man früher Hilfe suchen sollte, statt alles mit sich allein auszumachen. Ob ich es wieder so machen würde? Die Entscheidung selbst ja, ohne jeden Zweifel. Ich würde aber nicht mehr so lange warten und viel früher mit meinen Eltern sprechen. Ihre Reaktion war am Ende nämlich viel verständnisvoller, als ich befürchtet hatte.",
       "frage": "Bereust du nicht die vier Semester, die du verloren hast?",
       "musterantwort": "Eigentlich nicht. Ich habe in dieser Zeit viel über mich selbst gelernt, und einiges aus Biologie und Chemie kann ich sogar jetzt noch gebrauchen. Verloren war die Zeit also nicht."
      }
     ]
    },
    {
     "nr": 2,
     "art": "erzaehlen",
     "thema": "Ein Recht auf Homeoffice?",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Text für beide",
       "auftrag": [
        "Bezieh Stellung zur These des Textes und begründe deine Meinung.",
        "Geh auf Argumente deines Gegenübers ein — zustimmen, widersprechen, einschränken.",
        "Reagiere auf das Gegenargument."
       ],
       "id": "tb2t2k5",
       "thema": "Ein Recht auf Homeoffice?",
       "quelle": "Arbeitswelt kompakt",
       "text": "Wer seine Arbeit am Schreibtisch erledigt, sollte einen gesetzlichen Anspruch auf mindestens zwei Tage Homeoffice pro Woche haben. Die Pandemie hat bewiesen, dass viele Tätigkeiten problemlos von zu Hause aus funktionieren. Beschäftigte sparen sich lange Pendelwege, können Familie und Beruf besser vereinbaren und sind laut mehreren Befragungen sogar zufriedener und produktiver. Auch die Umwelt profitiert, wenn täglich Millionen Autofahrten wegfallen. Dennoch holen viele Unternehmen ihre Mitarbeiter inzwischen wieder ins Büro zurück, oft ohne nachvollziehbare Gründe. Hier geht es weniger um Leistung als um Kontrolle. Manche Vorgesetzte trauen ihren Leuten offenbar nur, wenn sie sie sehen können. Natürlich muss es Ausnahmen geben, etwa für neue Mitarbeiter in der Einarbeitung. Doch grundsätzlich sollten nicht Vorgesetzte, sondern klare Regeln entscheiden. — Kommentar von Tobias Engel",
       "punkte": [
        "Position beziehen",
        "Argumente nennen",
        "Auf dein Gegenüber eingehen",
        "Beispiele aus deiner Erfahrung"
       ],
       "mustervortrag": "Der Autor fordert einen gesetzlichen Anspruch auf zwei Tage Homeoffice pro Woche für alle, die am Schreibtisch arbeiten. Grundsätzlich finde ich die Idee richtig. Ich arbeite im Kundenservice einer Versicherung und habe seit drei Jahren zwei Homeoffice-Tage. Ich spare mir an diesen Tagen fast zwei Stunden Fahrt und kann meine Kinder von der Kita abholen. Das hat meinen Alltag enorm entlastet. Trotzdem bin ich bei einem gesetzlichen Anspruch etwas vorsichtig. Jeder Betrieb ist anders, und in kleinen Firmen kann es schwierig sein, wenn plötzlich alle gleichzeitig zu Hause bleiben wollen. Außerdem sollte man die Nachteile nicht unterschätzen. In meinem Team haben wir gemerkt, dass neue Kollegen sich zu Hause schwerer einarbeiten, weil sie nicht einfach kurz am Nachbartisch nachfragen können. Man könnte einwenden, dass Vorgesetzte ohne Gesetz einfach alles verbieten können. Das stimmt leider manchmal. Deshalb fände ich einen Kompromiss sinnvoll: ein Recht darauf, Homeoffice zu beantragen, und die Pflicht für Arbeitgeber, eine Ablehnung gut zu begründen. So hätten Beschäftigte mehr Sicherheit, und Betriebe blieben trotzdem flexibel.",
       "frage": "Aber viele Chefs finden immer einen Grund. Ist eine Begründungspflicht nicht viel zu schwach?",
       "musterantwort": "Das Risiko sehe ich auch. Man könnte deshalb festlegen, welche Gründe überhaupt zulässig sind, zum Beispiel Datenschutz oder Einarbeitung. Dann wäre es nicht mehr so leicht, einfach Nein zu sagen."
      }
     ]
    },
    {
     "nr": 3,
     "art": "planen",
     "thema": "Eine Teamreise",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Wäg Bedenken ab und biete Kompromisse an.",
        "Fasst am Ende das Ergebnis zusammen."
       ],
       "id": "tb2t3k5",
       "thema": "Eine Teamreise",
       "aufgabe": "Euer Team von zwölf Personen darf eine zweitägige Teamreise machen. Die Firma zahlt Übernachtung und Fahrt. Ihr sollt die Reise planen.",
       "punkte": [
        "Wohin?",
        "Wie reist ihr an?",
        "Welche Aktivitäten?",
        "Wie viel Arbeit, wie viel Freizeit?",
        "Wie berücksichtigt ihr unterschiedliche Wünsche?"
       ],
       "mustervorschlag": "Ich würde ein Ziel vorschlagen, das man gut mit der Bahn erreicht, damit niemand fahren muss und wir schon unterwegs ins Gespräch kommen. Eine Stadt am Meer, zum Beispiel an der Ostsee, fände ich schön. Du hast eher an eine Hütte in den Bergen gedacht. Das hat seinen Reiz, aber ich gebe zu bedenken, dass nicht alle im Team gern wandern, und einige Kollegen sind auch nicht so gut zu Fuß. Bei den Aktivitäten fände ich eine Mischung sinnvoll: Am ersten Tag könnten wir vormittags einen Workshop zu unseren Arbeitsabläufen machen und nachmittags etwas Gemeinsames, etwa eine Kanutour für die Sportlichen und eine Stadtführung für die anderen. Am zweiten Tag würde ich gar nichts mehr arbeiten. Wie wäre es, wenn wir vorher eine kurze Umfrage im Team machen? Dann können alle mitentscheiden.",
       "mustereinigung": "Wir machen also eine Umfrage im Team, fahren voraussichtlich mit der Bahn an die Ostsee, haben am ersten Vormittag einen Workshop, danach Kanutour oder Stadtführung zur Wahl, und der zweite Tag bleibt frei."
      }
     ]
    }
   ]
  },
  {
   "id": "tb2ml2",
   "titel": "Prüfungslauf 2",
   "minuten": 15,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Ein Hobby, das ich spät entdeckt habe",
     "karten": [
      {
       "kopf": "Teil 1 · Über Erfahrungen sprechen",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Sprich etwa anderthalb Minuten über deine Erfahrung — zu allen Punkten der Karte.",
        "Beantworte danach die Nachfrage deines Gegenübers."
       ],
       "id": "tb2t1k6",
       "thema": "Ein Hobby, das ich spät entdeckt habe",
       "punkte": [
        "Was ist passiert?",
        "Wie hast du dich gefühlt?",
        "Was hast du gelernt?",
        "Würdest du es wieder so machen?"
       ],
       "mustervortrag": "Ich möchte euch von einem Hobby erzählen, das ich erst mit über fünfzig entdeckt habe: das Töpfern. Eigentlich hat alles mit einem Geschenkgutschein angefangen. Meine Tochter hat mir zum Geburtstag einen Töpferkurs an der Volkshochschule geschenkt, und ich war, ehrlich gesagt, nicht begeistert. Ich dachte, das ist etwas für Kinder oder für Leute mit viel Talent. In der ersten Stunde habe ich mich auch ziemlich ungeschickt angestellt. Meine Schale ist dreimal auf der Drehscheibe zusammengefallen, und alle anderen schienen es sofort zu können. Ich war frustriert und wollte eigentlich nicht mehr hingehen. Meine Tochter hat mich aber überredet, wenigstens die vier Termine zu Ende zu machen. Irgendwann hat es dann klick gemacht. Ich habe gemerkt, wie gut es mir tut, zwei Stunden lang nur mit den Händen zu arbeiten und nicht an die Arbeit zu denken. Inzwischen habe ich eine eigene kleine Drehscheibe im Keller und verbringe dort fast jedes Wochenende ein paar Stunden. Gelernt habe ich, dass man nie zu alt ist, um etwas Neues anzufangen, und dass Anfängerfehler einfach dazugehören. Ich bin heute viel gelassener, auch in anderen Bereichen. Würde ich es wieder so machen? Ja, aber ich würde früher anfangen und mich nicht so schnell von der ersten Enttäuschung entmutigen lassen.",
       "frage": "Verkaufst du deine Sachen inzwischen auch?",
       "musterantwort": "Bisher nicht, ich verschenke das meiste an Freunde und Familie. Eine Nachbarin hat mich aber gefragt, ob ich beim Weihnachtsmarkt einen kleinen Stand machen möchte. Darüber denke ich gerade nach."
      }
     ]
    },
    {
     "nr": 2,
     "art": "erzaehlen",
     "thema": "Eine Steuer auf Fleisch?",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Text für beide",
       "auftrag": [
        "Bezieh Stellung zur These des Textes und begründe deine Meinung.",
        "Geh auf Argumente deines Gegenübers ein — zustimmen, widersprechen, einschränken.",
        "Reagiere auf das Gegenargument."
       ],
       "id": "tb2t2k6",
       "thema": "Eine Steuer auf Fleisch?",
       "quelle": "Umwelt und Verbraucher",
       "text": "Fleisch ist in Deutschland zu billig. Ein Kilo Hähnchen kostet im Supermarkt oft weniger als ein Kilo Äpfel, obwohl die Produktion enorme Folgekosten verursacht: hohe Treibhausgasemissionen, belastetes Grundwasser und Tiere, die unter katastrophalen Bedingungen leben. Diese Kosten trägt bisher die Allgemeinheit, nicht der Verbraucher. Eine Steuer auf Fleisch würde den Preis ehrlicher machen und den Konsum langfristig senken. Gleichzeitig hätten Betriebe mit artgerechter Haltung endlich eine faire Chance im Wettbewerb. Mit den Einnahmen könnte man Landwirte unterstützen, die ihre Ställe tiergerecht umbauen wollen. Kritiker warnen, dass sich Familien mit wenig Geld dann kein Fleisch mehr leisten könnten. Dieses Argument nehme ich ernst. Doch man könnte im Gegenzug die Mehrwertsteuer auf Obst und Gemüse senken. So würde gesunde Ernährung billiger und das Problem nicht auf dem Rücken der Ärmsten gelöst. — Kommentar von Sandra Petersen",
       "punkte": [
        "Position beziehen",
        "Argumente nennen",
        "Auf dein Gegenüber eingehen",
        "Beispiele aus deiner Erfahrung"
       ],
       "mustervortrag": "Die Autorin fordert eine Steuer auf Fleisch, weil Fleisch ihrer Meinung nach zu billig ist und die Folgekosten von der Allgemeinheit getragen werden. Ich finde, sie hat in vielen Punkten recht. Ich esse selbst nur noch ein- oder zweimal pro Woche Fleisch und kaufe es dann bewusst beim Metzger, auch wenn es mehr kostet. Dass ein Kilo Hähnchen billiger ist als Äpfel, finde ich wirklich absurd. Besonders überzeugt mich die Idee, mit dem Geld Landwirte beim Umbau ihrer Ställe zu unterstützen. Ein Nachbar von meinen Eltern hat einen Hof und würde gern mehr für seine Tiere tun, kann es sich aber schlicht nicht leisten. Trotzdem habe ich Bedenken, was die soziale Seite angeht. Familien mit wenig Geld würden die Steuer sofort spüren, während wohlhabende Menschen kaum etwas merken. Die Autorin schlägt zwar vor, Obst und Gemüse billiger zu machen, aber ob das wirklich ausgleicht, bezweifle ich. Man könnte also sagen, dass die Steuer ungerecht ist. Ich wäre trotzdem dafür, allerdings nur zusammen mit einem direkten Ausgleich, zum Beispiel einer Rückzahlung an Haushalte mit niedrigem Einkommen.",
       "frage": "Aber sollte der Staat den Leuten wirklich vorschreiben, was sie essen?",
       "musterantwort": "Vorschreiben würde er ja nichts, jeder darf weiterhin so viel Fleisch essen, wie er will. Es geht nur darum, dass der Preis die echten Kosten zeigt. Bei Zigaretten oder Benzin akzeptieren wir das schließlich auch."
      }
     ]
    },
    {
     "nr": 3,
     "art": "planen",
     "thema": "Ein Nachbarschaftsgarten",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Wäg Bedenken ab und biete Kompromisse an.",
        "Fasst am Ende das Ergebnis zusammen."
       ],
       "id": "tb2t3k6",
       "thema": "Ein Nachbarschaftsgarten",
       "aufgabe": "Hinter eurem Wohnhaus liegt eine ungenutzte Wiese. Der Vermieter erlaubt, dort einen Gemeinschaftsgarten anzulegen. Ihr sollt das Projekt planen.",
       "punkte": [
        "Was wird angebaut?",
        "Wer kümmert sich um die Pflege?",
        "Woher bekommt ihr Geld und Werkzeug?",
        "Welche Regeln braucht ihr?",
        "Wie bindet ihr Kinder ein?"
       ],
       "mustervorschlag": "Ich fände es schön, wenn wir vor allem Gemüse und Kräuter anbauen, also Tomaten, Salat, Zucchini und Basilikum. Das wächst relativ schnell, und man hat bald ein Erfolgserlebnis. Dein Vorschlag mit den Obstbäumen gefällt mir grundsätzlich auch, aber Bäume brauchen Jahre, bis sie Früchte tragen, und sie werfen viel Schatten auf die Beete. Vielleicht könnten wir uns auf zwei kleine Bäume am Rand einigen? Was die Pflege angeht, habe ich Bedenken, dass am Ende wieder nur zwei oder drei Leute alles machen. Deshalb würde ich einen Gießplan vorschlagen, bei dem jede Wohnung eine Woche übernimmt. Werkzeug könnten wir gemeinsam anschaffen, wenn jeder Haushalt zwanzig Euro gibt. Für die Kinder könnten wir ein eigenes kleines Beet anlegen, um das sie sich selbst kümmern. Bist du damit einverstanden?",
       "mustereinigung": "Dann pflanzen wir Gemüse und Kräuter, setzen zwei kleine Obstbäume an den Rand, führen einen wöchentlichen Gießplan ein, jeder Haushalt zahlt zwanzig Euro für Werkzeug, und die Kinder bekommen ihr eigenes Beet."
      }
     ]
    }
   ]
  }
 ]
};
