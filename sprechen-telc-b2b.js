/* ============================================================
   deutschoderwas club — SPRECHEN telc Deutsch B2+ Beruf

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B2+ Beruf,
   geprüft 03.11.2026). Alle Texte und Aufgaben eigene, Kontext
   Geschäftskommunikation. Erzeugt aus scratchpad/telcb2b mit bau.js.
   ============================================================ */

window.SPRECHEN_TELC_B2B = {
 "niveau": "telcB2B",
 "pruefung": "telc Deutsch B2+ Beruf",
 "minuten": 18,
 "punkte": 25,
 "intro": "Die mündliche Prüfung bei telc B2+ Beruf dauert etwa siebzehn bis achtzehn Minuten zu zweit, vorher zwanzig Minuten Vorbereitung. Nach einer kurzen Einleitung, die nicht bewertet wird: präsentieren (etwa zweieinhalb Minuten), über einen Zeitungstext diskutieren und mit einer Rollenkarte verhandeln.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Präsentieren",
   "zeichen": "🎤",
   "was": "Kurz und klar präsentieren."
  },
  {
   "nr": 2,
   "titel": "Diskutieren und verhandeln",
   "zeichen": "🤝",
   "was": "Position beziehen, Kompromisse finden."
  },
  {
   "nr": 3,
   "titel": "Die drei Teile",
   "zeichen": "🎯",
   "was": "Präsentieren, Diskutieren, Verhandeln — mit Musterlösung zum Anhören."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "Alle drei Teile hintereinander."
  }
 ],
 "bloecke": [
  {
   "id": "tbb2m1",
   "stufe": 1,
   "titel": "Kurz präsentieren",
   "kurz": "Zweieinhalb Minuten über deinen Beruf — klar gegliedert",
   "ziel": "Nach diesem Block baust du eine kurze Präsentation über ein berufliches Thema auf: mit Einleitung, zwei, drei Aspekten, einem Beispiel aus der Praxis und einem klaren Schluss.",
   "zeichen": "🎤",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie lange dauert deine Präsentation in Teil 1 ungefähr?",
     "optionen": [
      "Etwa dreißig Sekunden",
      "Etwa zweieinhalb Minuten",
      "Mindestens zehn Minuten"
     ],
     "loesung": 1,
     "erklaerung": "Rund zweieinhalb Minuten — danach stellt dir dein Gegenüber Fragen."
    },
    {
     "art": "wahl",
     "frage": "Welcher Einstieg passt am besten zum Thema „Mein Arbeitsplatz und meine Aufgaben“?",
     "optionen": [
      "Arbeit ist ein wichtiges Thema in unserer Gesellschaft.",
      "Also, ich fange mal an.",
      "Ich möchte euch heute zeigen, wie ein typischer Tag in einer Logistikabteilung aussieht — und warum er nie ganz typisch ist."
     ],
     "loesung": 2,
     "erklaerung": "Ein guter Einstieg nennt das Thema und macht neugierig. Allgemeine Sätze über „die Gesellschaft“ wirken leer."
    },
    {
     "art": "wahl",
     "frage": "Wie kündigst du den Aufbau deiner Präsentation an?",
     "optionen": [
      "Ich werde zuerst meine Aufgaben beschreiben, dann auf die Zusammenarbeit im Team eingehen und zum Schluss ein Beispiel erzählen.",
      "Ich sage einfach, was mir einfällt.",
      "Das wird kurz."
     ],
     "loesung": 0,
     "erklaerung": "Ein kurzer Fahrplan hilft dem Publikum und dir selbst — du verlierst den roten Faden nicht."
    },
    {
     "art": "wahl",
     "frage": "Mit welchem Satz leitest du zum Beispiel aus der Praxis über?",
     "optionen": [
      "Und so weiter.",
      "Ein Beispiel aus meinem Arbeitsalltag macht das deutlich:",
      "Beispiele gibt es viele."
     ],
     "loesung": 1,
     "erklaerung": "Ein konkretes Beispiel macht die Präsentation lebendig. Die Überleitung kündigt es klar an."
    },
    {
     "art": "wahl",
     "frage": "Was ist ein typischer Fehler in Teil 1?",
     "optionen": [
      "Einen vorbereiteten Text Wort für Wort ablesen",
      "Ein Beispiel aus dem eigenen Beruf nennen",
      "Am Ende kurz zusammenfassen"
     ],
     "loesung": 0,
     "erklaerung": "Abgelesene Texte klingen unnatürlich. Arbeite mit Stichpunkten und sprich frei."
    },
    {
     "art": "wahl",
     "frage": "Wie beendest du die Präsentation am besten?",
     "optionen": [
      "Das war es, glaube ich.",
      "Fertig.",
      "Zusammenfassend kann ich sagen, dass mein Beruf viel Abwechslung bietet. Gibt es dazu Fragen?"
     ],
     "loesung": 2,
     "erklaerung": "Ein Schluss fasst zusammen und öffnet das Gespräch für Fragen — das ist der Übergang zum zweiten Teil der Aufgabe."
    },
    {
     "art": "wahl",
     "frage": "Dein Gegenüber fragt etwas, das du nicht genau verstanden hast. Was sagst du?",
     "optionen": [
      "Wie bitte?",
      "Habe ich dich richtig verstanden, dass du wissen möchtest, wie wir Überstunden ausgleichen?",
      "Das weiß ich nicht."
     ],
     "loesung": 1,
     "erklaerung": "Nachfragen mit eigener Umschreibung zeigt, dass du mitdenkst — und verschafft dir etwas Zeit."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Einstiegssatz.",
     "teile": [
      "In meiner Präsentation",
      "geht es",
      "um",
      "meine Aufgaben",
      "als",
      "Teamleiter",
      "im Lager."
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
     "erklaerung": "„In meiner Präsentation“ steht auf Position eins, danach folgt das Verb „geht“."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Überleitung zum zweiten Aspekt.",
     "teile": [
      "Damit",
      "komme",
      "ich",
      "zu",
      "meinem",
      "zweiten",
      "Punkt:",
      "der",
      "Zusammenarbeit",
      "im Team."
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
     "erklaerung": "„Damit komme ich zu …“ ist die klassische Überleitung in einer Präsentation."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Schlusssatz.",
     "teile": [
      "Zum Schluss",
      "möchte",
      "ich",
      "noch",
      "einmal",
      "betonen,",
      "wie wichtig",
      "gute Planung",
      "ist."
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
     "erklaerung": "Im indirekten Fragesatz mit „wie wichtig“ steht das Verb „ist“ am Ende."
    }
   ]
  },
  {
   "id": "tbb2m2",
   "stufe": 2,
   "titel": "Über einen Zeitungstext diskutieren",
   "kurz": "These verstehen, Stellung nehmen, aufeinander eingehen",
   "ziel": "Nach diesem Block gibst du die These eines Zeitungstextes kurz wieder, beziehst begründet Position und reagierst auf die Argumente deines Gegenübers.",
   "zeichen": "📰",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Womit beginnst du am besten in Teil 2?",
     "optionen": [
      "Mit der eigenen Meinung, ohne den Text zu erwähnen",
      "Mit einer kurzen Wiedergabe der These: Der Autor fordert, dass …",
      "Mit einer Geschichte aus dem Urlaub"
     ],
     "loesung": 1,
     "erklaerung": "Zuerst zeigst du, dass du den Text verstanden hast. Danach nimmst du Stellung."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz gibt die Position des Autors neutral wieder?",
     "optionen": [
      "Der Autor hat total unrecht.",
      "Der Autor ist der Meinung, dass Großraumbüros die Zusammenarbeit fördern.",
      "Großraumbüros sind schlecht."
     ],
     "loesung": 1,
     "erklaerung": "Bei der Wiedergabe bleibst du neutral: „Der Autor ist der Meinung, dass …“."
    },
    {
     "art": "wahl",
     "frage": "Wie beziehst du differenziert Position?",
     "optionen": [
      "Ich kann das Argument teilweise nachvollziehen, sehe aber vor allem ein Problem: …",
      "Das ist alles falsch.",
      "Ich habe keine Meinung."
     ],
     "loesung": 0,
     "erklaerung": "Eine differenzierte Meinung erkennt Gegenargumente an und setzt dann einen eigenen Schwerpunkt — typisch für B2."
    },
    {
     "art": "wahl",
     "frage": "Wie gehst du auf dein Gegenüber ein?",
     "optionen": [
      "Jetzt rede ich.",
      "Du hast vorhin gesagt, dass die Kosten sinken würden. Da stimme ich dir zu, allerdings …",
      "Egal."
     ],
     "loesung": 1,
     "erklaerung": "Wer das Argument des Gegenübers aufgreift, zeigt echtes Zuhören — darauf achten die Prüfer."
    },
    {
     "art": "wahl",
     "frage": "Wie widersprichst du höflich?",
     "optionen": [
      "Das ist Quatsch.",
      "Da muss ich dir leider widersprechen. Meiner Erfahrung nach …",
      "Nein."
     ],
     "loesung": 1,
     "erklaerung": "Ein höflicher Widerspruch nennt sofort einen Grund oder eine Erfahrung."
    },
    {
     "art": "wahl",
     "frage": "Wie bringst du ein Beispiel aus der Praxis ein?",
     "optionen": [
      "Bei uns in der Firma haben wir genau das vor zwei Jahren ausprobiert, und …",
      "Beispiele sind wichtig.",
      "Ich kenne kein Beispiel."
     ],
     "loesung": 0,
     "erklaerung": "Ein eigenes Beispiel macht dein Argument glaubwürdig und bringt Leben in die Diskussion."
    },
    {
     "art": "wahl",
     "frage": "Dein Gegenüber spricht sehr lange. Wie kommst du höflich zu Wort?",
     "optionen": [
      "Sei mal still!",
      "Darf ich kurz einhaken? Zu diesem Punkt habe ich eine ganz andere Erfahrung gemacht.",
      "Ich warte einfach bis zum Ende der Prüfung."
     ],
     "loesung": 1,
     "erklaerung": "„Darf ich kurz einhaken?“ ist eine höfliche Formel, um das Wort zu ergreifen."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz zur Wiedergabe der These.",
     "teile": [
      "Die Autorin",
      "vertritt",
      "die Ansicht,",
      "dass",
      "Gehälter",
      "offengelegt",
      "werden",
      "sollten."
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
     "erklaerung": "Im Nebensatz mit „dass“ steht das konjugierte Verb „sollten“ ganz am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der auf dein Gegenüber eingeht.",
     "teile": [
      "Ich",
      "verstehe",
      "deinen",
      "Punkt,",
      "aber",
      "ich",
      "sehe",
      "das",
      "etwas",
      "anders."
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
     "erklaerung": "Erst Verständnis zeigen, dann mit „aber“ widersprechen — eine typische Diskussionsstruktur."
    },
    {
     "art": "ordnen",
     "frage": "Bau den abschließenden Satz.",
     "teile": [
      "Alles in allem",
      "halte",
      "ich",
      "eine",
      "Vier-Tage-Woche",
      "für",
      "sinnvoll."
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
     "erklaerung": "„Etwas für sinnvoll halten“ — nach „Alles in allem“ steht das Verb direkt auf Position zwei."
    }
   ]
  },
  {
   "id": "tbb2m3",
   "stufe": 2,
   "titel": "Verhandeln und Kompromisse finden",
   "kurz": "Position vertreten, nachgeben, sich einigen",
   "ziel": "Nach diesem Block vertrittst du in Teil 3 deine Rolle überzeugend, gehst auf Gegenargumente ein und findest mit deinem Gegenüber einen Kompromiss.",
   "zeichen": "🤝",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Was ist das Ziel in Teil 3?",
     "optionen": [
      "Unbedingt gewinnen und keinen Millimeter nachgeben",
      "Die eigene Position vertreten und am Ende gemeinsam eine Lösung finden",
      "Möglichst wenig sprechen"
     ],
     "loesung": 1,
     "erklaerung": "Verhandeln heißt: Position vertreten, zuhören, nachgeben, wo es geht — und sich am Ende einigen."
    },
    {
     "art": "wahl",
     "frage": "Wie stellst du deine Position zu Beginn klar dar?",
     "optionen": [
      "Aus Sicht der Vertriebsabteilung ist es mir besonders wichtig, dass wir nah an den Kunden bleiben.",
      "Ich will das so.",
      "Mir ist alles egal."
     ],
     "loesung": 0,
     "erklaerung": "Rolle nennen, Hauptanliegen nennen — so weiß dein Gegenüber sofort, worum es dir geht."
    },
    {
     "art": "wahl",
     "frage": "Wie gehst du auf ein Gegenargument ein?",
     "optionen": [
      "Das stimmt nicht.",
      "Ich verstehe, dass die Kosten für dich wichtig sind. Gleichzeitig sollten wir bedenken, dass …",
      "Darüber rede ich nicht."
     ],
     "loesung": 1,
     "erklaerung": "Das Gegenargument anerkennen und dann ergänzen: So bleibt die Verhandlung konstruktiv."
    },
    {
     "art": "wahl",
     "frage": "Wie bietest du einen Kompromiss an?",
     "optionen": [
      "Wie wäre es, wenn wir uns in der Mitte treffen: Ich verzichte auf …, dafür …",
      "Na gut, dann eben deine Idee.",
      "Dann machen wir gar nichts."
     ],
     "loesung": 0,
     "erklaerung": "Ein Kompromiss braucht ein Geben und Nehmen: Ich verzichte auf etwas, dafür bekomme ich etwas."
    },
    {
     "art": "wahl",
     "frage": "Wie lehnst du einen Vorschlag höflich ab?",
     "optionen": [
      "Nie im Leben.",
      "Das wäre für meine Abteilung leider schwierig, weil … Könnten wir stattdessen …?",
      "Schlechte Idee."
     ],
     "loesung": 1,
     "erklaerung": "Eine höfliche Ablehnung nennt einen Grund und bietet sofort eine Alternative an."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung schwächt eine Forderung höflich ab?",
     "optionen": [
      "Ich verlange …",
      "Es wäre für uns sehr hilfreich, wenn …",
      "Ihr müsst …"
     ],
     "loesung": 1,
     "erklaerung": "Der Konjunktiv II macht aus einer Forderung eine Bitte — in Verhandlungen meist wirkungsvoller."
    },
    {
     "art": "wahl",
     "frage": "Wie fasst du das Ergebnis am Ende zusammen?",
     "optionen": [
      "Ok, tschüss.",
      "Dann halten wir fest: … Sind wir uns da einig?",
      "Mal sehen, was passiert."
     ],
     "loesung": 1,
     "erklaerung": "„Dann halten wir fest“ sichert das Ergebnis — und die Rückfrage holt die Zustimmung ein."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Kompromissvorschlag.",
     "teile": [
      "Wie wäre es,",
      "wenn",
      "wir",
      "das Budget",
      "zur Hälfte",
      "aufteilen",
      "würden?"
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
     "erklaerung": "Nach „wenn“ steht das Verb am Ende — hier die Konjunktivform „würden“."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der ein Gegenargument anerkennt.",
     "teile": [
      "Ich",
      "kann",
      "deine",
      "Bedenken",
      "gut",
      "nachvollziehen,",
      "aber",
      "…"
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
     "erklaerung": "Modalverb „kann“ auf Position zwei, der Infinitiv „nachvollziehen“ am Satzende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit dem Ergebnis.",
     "teile": [
      "Dann",
      "halten",
      "wir",
      "fest,",
      "dass",
      "die Abteilung",
      "im Frühjahr",
      "umzieht."
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
     "erklaerung": "„Dann halten wir fest“ — und im dass-Satz rutscht das Verb „umzieht“ ans Ende."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "erzaehlen",
   "name": "Präsentieren",
   "kurz": "Etwa zweieinhalb Minuten, dann Fragen",
   "was": "Du präsentierst ein berufliches Thema, das du in der Vorbereitung gewählt hast. Danach stellt dein Gegenüber Fragen.",
   "tipp": "Einleitung, zwei, drei Punkte, Beispiel aus deinem Beruf, Schluss — und auf die Zeit achten.",
   "zeichen": "🎤",
   "farbe": "turq",
   "punkte": 25,
   "runden": [
    {
     "id": "tb2bm1r1",
     "thema": "Mein Arbeitsplatz und meine Aufgaben",
     "karten": [
      {
       "kopf": "Teil 1 · Präsentieren",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Präsentiere etwa zweieinhalb Minuten.",
        "Beantworte danach die Frage deines Gegenübers."
       ],
       "id": "tbb2t1k1",
       "thema": "Mein Arbeitsplatz und meine Aufgaben",
       "punkte": [
        "Einleitung",
        "Zwei, drei Aspekte",
        "Beispiel aus dem Beruf",
        "Schluss"
       ],
       "mustervortrag": "In meiner Präsentation möchte ich euch meinen Arbeitsplatz und meine wichtigsten Aufgaben vorstellen. Ich arbeite seit drei Jahren als Disponentin bei einer Spedition in Duisburg. Zuerst erzähle ich kurz, was eine Disponentin eigentlich macht, dann gehe ich auf die Zusammenarbeit mit den Fahrern ein, und zum Schluss gebe ich euch ein Beispiel aus meinem Alltag.\nMeine Hauptaufgabe ist es, die Touren für unsere rund vierzig Lastwagen zu planen. Das bedeutet: Ich entscheide, welcher Fahrer welche Ladung abholt, in welcher Reihenfolge er die Kunden anfährt und wann er seine Pausen machen muss. Dabei muss ich viele Dinge gleichzeitig im Blick behalten, zum Beispiel die gesetzlichen Lenkzeiten, die Wünsche der Kunden und natürlich die Kosten.\nDer zweite Aspekt, der mir sehr wichtig ist, ist die Zusammenarbeit mit den Fahrern. Ich sitze zwar im Büro, aber ich telefoniere jeden Tag mit fast allen Fahrern. Wenn jemand im Stau steht oder ein Kunde die Ware nicht annimmt, muss ich schnell eine Lösung finden. Dafür braucht man gute Nerven und ein freundliches, aber klares Auftreten. Außerdem arbeite ich eng mit unserem Lager zusammen, denn nur wenn die Ware rechtzeitig bereitsteht, kann der Fahrer pünktlich losfahren.\nEin Beispiel aus meinem Alltag macht das deutlich: Letzten Winter hat es an einem Montagmorgen plötzlich stark geschneit. Innerhalb einer Stunde waren drei wichtige Autobahnen gesperrt. Ich musste fast alle Touren neu planen, die Kunden über die Verspätungen informieren und gleichzeitig dafür sorgen, dass keiner der Fahrer seine Arbeitszeit überschreitet. Am Ende des Tages war ich völlig erschöpft, aber auch ein bisschen stolz, denn alle Lieferungen sind noch am selben Tag angekommen.\nZusammenfassend kann ich sagen, dass mein Arbeitsplatz zwar oft stressig ist, aber nie langweilig. Kein Tag ist wie der andere, und genau das gefällt mir an meinem Beruf. Natürlich gibt es auch Dinge, die ich gern ändern würde, zum Beispiel die vielen Anrufe nach Feierabend. Insgesamt bin ich aber sehr zufrieden. Habt ihr dazu Fragen?",
       "frage": "Wie schaffst du es, nach so einem stressigen Tag abzuschalten?",
       "musterantwort": "Ehrlich gesagt ist das nicht immer leicht. Was mir hilft, ist mein Arbeitsweg: Ich fahre mit dem Fahrrad, etwa zwanzig Minuten am Rhein entlang. Danach bin ich meistens wieder ruhig. Außerdem habe ich mir angewöhnt, das Diensthandy nach Feierabend in die Schublade zu legen."
      }
     ]
    },
    {
     "id": "tb2bm1r2",
     "thema": "Wie ich mich beruflich weiterbilde",
     "karten": [
      {
       "kopf": "Teil 1 · Präsentieren",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Präsentiere etwa zweieinhalb Minuten.",
        "Beantworte danach die Frage deines Gegenübers."
       ],
       "id": "tbb2t1k2",
       "thema": "Wie ich mich beruflich weiterbilde",
       "punkte": [
        "Einleitung",
        "Zwei, drei Aspekte",
        "Beispiel aus dem Beruf",
        "Schluss"
       ],
       "mustervortrag": "Ich möchte heute über ein Thema sprechen, das in meinem Beruf immer wichtiger wird, nämlich die Weiterbildung. Ich bin Pflegefachmann in einem Krankenhaus in Kassel, und in der Pflege verändert sich ständig etwas: neue Medikamente, neue Geräte, neue Vorschriften. Ich werde zuerst erklären, welche Formen der Weiterbildung es bei uns gibt, dann erzähle ich, wie ich selbst lerne, und am Ende berichte ich von einer Fortbildung, die mir besonders viel gebracht hat.\nIn unserem Krankenhaus gibt es grundsätzlich zwei Arten von Weiterbildung. Erstens die Pflichtschulungen, zum Beispiel zu Hygiene oder Brandschutz. Diese finden einmal im Jahr statt und sind meistens online. Zweitens gibt es freiwillige Fortbildungen, etwa zur Wundversorgung oder zur Betreuung von Menschen mit Demenz. Für diese Kurse bekommen wir bis zu fünf Tage Bildungsurlaub im Jahr, und das Krankenhaus übernimmt einen Teil der Kosten.\nNeben den offiziellen Kursen lerne ich aber auch viel im Alltag. Wir haben auf unserer Station eine Regel: Wer an einer Fortbildung teilgenommen hat, stellt das Wichtigste danach in einer Teambesprechung vor. So lernen alle voneinander, und das Wissen bleibt nicht bei einer Person. Außerdem lese ich regelmäßig eine Fachzeitschrift, auch wenn ich ehrlich gesagt nicht jeden Artikel schaffe. Manchmal schaue ich mir auch kurze Lernvideos an, zum Beispiel in der Pause oder auf dem Weg zur Arbeit.\nEin Beispiel: Vor zwei Jahren habe ich eine sechsmonatige Weiterbildung zum Praxisanleiter gemacht. Seitdem betreue ich Auszubildende auf unserer Station. Am Anfang war das eine große Umstellung, weil ich plötzlich nicht nur meine eigene Arbeit machen, sondern auch erklären und bewerten musste. Heute ist es der Teil meiner Arbeit, der mir am meisten Freude macht.\nZum Schluss möchte ich betonen: Weiterbildung kostet Zeit und manchmal auch Nerven, besonders wenn man im Schichtdienst arbeitet. Trotzdem lohnt sie sich, denn sie macht die Arbeit abwechslungsreicher und eröffnet neue Möglichkeiten. Mein nächstes Ziel ist eine Fortbildung zur Stationsleitung. Vielen Dank fürs Zuhören.",
       "frage": "Würdest du auch eine Weiterbildung machen, wenn du sie selbst bezahlen müsstest?",
       "musterantwort": "Das kommt auf die Kosten an. Für einen kurzen Kurs würde ich auf jeden Fall selbst bezahlen. Bei einer teuren Weiterbildung, die mehrere Monate dauert, würde ich aber vorher mit meiner Chefin sprechen. Schließlich profitiert auch das Krankenhaus davon, wenn ich mehr kann."
      }
     ]
    },
    {
     "id": "tb2bm1r3",
     "thema": "Ein Projekt, auf das ich stolz bin",
     "karten": [
      {
       "kopf": "Teil 1 · Präsentieren",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Präsentiere etwa zweieinhalb Minuten.",
        "Beantworte danach die Frage deines Gegenübers."
       ],
       "id": "tbb2t1k3",
       "thema": "Ein Projekt, auf das ich stolz bin",
       "punkte": [
        "Einleitung",
        "Zwei, drei Aspekte",
        "Beispiel aus dem Beruf",
        "Schluss"
       ],
       "mustervortrag": "In meiner kurzen Präsentation geht es um ein Projekt, auf das ich wirklich stolz bin. Ich arbeite als Sachbearbeiterin in der Verwaltung einer mittelgroßen Stadt, und im letzten Jahr durfte ich die Einführung eines digitalen Terminsystems im Bürgerbüro mitgestalten. Ich erzähle zuerst, warum wir das Projekt gestartet haben, danach, wie wir vorgegangen sind, und schließlich, was ich persönlich daraus gelernt habe.\nDer Ausgangspunkt war ein bekanntes Problem: Die Bürger mussten oft stundenlang im Wartebereich sitzen, nur um einen neuen Personalausweis zu beantragen. Die Stimmung war schlecht, und zwar auf beiden Seiten des Schreibtischs. Deshalb hat die Amtsleitung beschlossen, ein System einzuführen, mit dem man online einen Termin buchen kann.\nUnser Projektteam bestand aus fünf Personen aus verschiedenen Abteilungen. Besonders wichtig war uns, dass auch ältere Menschen ohne Internet weiterhin einen Termin bekommen. Deshalb haben wir zusätzlich eine Telefonhotline eingerichtet und einige Termine jeden Tag für spontane Besucher frei gehalten. Ich war vor allem für die Schulung meiner Kollegen zuständig. Dafür habe ich eine kurze Anleitung geschrieben und in jeder Abteilung kleine Übungsrunden organisiert, damit sich alle in Ruhe mit dem neuen Programm vertraut machen konnten.\nEin Beispiel zeigt, wie schwierig das manchmal war: Am ersten Tag nach dem Start ist das System zwei Stunden lang ausgefallen. Draußen standen über dreißig Menschen mit Terminbestätigung, und niemand konnte die Daten aufrufen. Wir haben dann ganz klassisch mit Papierlisten gearbeitet und uns bei jedem Einzelnen entschuldigt. Erstaunlicherweise waren die meisten Bürger sehr verständnisvoll, und einige haben uns sogar Kaffee aus der Bäckerei gegenüber gebracht.\nHeute, ein Jahr später, liegt die durchschnittliche Wartezeit bei unter zehn Minuten, und die Beschwerden sind deutlich zurückgegangen. Ich habe aus dem Projekt vor allem gelernt, wie wichtig ein Plan B ist und dass man Veränderungen gemeinsam mit den Kollegen gestalten muss, nicht gegen sie. Deshalb bin ich stolz darauf, dass am Ende fast das ganze Team hinter dem neuen System stand. Habt ihr Fragen dazu?",
       "frage": "Gab es Kollegen, die gegen das neue System waren?",
       "musterantwort": "Ja, am Anfang schon. Einige ältere Kollegen hatten Angst, dass sie mit der Technik nicht zurechtkommen. Wir haben deshalb kleine Schulungen in Zweiergruppen angeboten, ohne Zeitdruck. Nach ein paar Wochen waren gerade diese Kollegen oft die größten Fans des Systems."
      }
     ]
    },
    {
     "id": "tb2bm1r4",
     "thema": "Mein Unternehmen und seine Produkte",
     "karten": [
      {
       "kopf": "Teil 1 · Präsentieren",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Präsentiere etwa zweieinhalb Minuten.",
        "Beantworte danach die Frage deines Gegenübers."
       ],
       "id": "tbb2t1k4",
       "thema": "Mein Unternehmen und seine Produkte",
       "punkte": [
        "Einleitung",
        "Zwei, drei Aspekte",
        "Beispiel aus dem Beruf",
        "Schluss"
       ],
       "mustervortrag": "Ich möchte euch heute das Unternehmen vorstellen, in dem ich arbeite, und euch zeigen, was wir eigentlich herstellen. Ich bin Industriemechaniker bei einem Familienbetrieb in der Nähe von Stuttgart. Die Firma gibt es seit fast siebzig Jahren, und heute arbeiten dort rund zweihundertfünfzig Menschen. Ich spreche zuerst über unsere Produkte, dann über unsere Kunden und zum Schluss über die Frage, was unser Unternehmen besonders macht.\nWir stellen Pumpen her, genauer gesagt Pumpen für Kläranlagen und für die Landwirtschaft. Das klingt vielleicht nicht besonders spannend, aber ohne solche Pumpen würde in keiner Stadt das Abwasser richtig gereinigt. Unsere Pumpen sind sehr robust und laufen oft zwanzig Jahre oder länger. Ein großer Teil meiner Arbeit besteht darin, die Pumpen zu montieren und vor der Auslieferung zu testen.\nUnsere Kunden sind hauptsächlich Stadtwerke und große landwirtschaftliche Betriebe, inzwischen auch im Ausland. Etwa die Hälfte unserer Produkte geht nach Osteuropa und nach Skandinavien. Deshalb fahre ich manchmal auch selbst zu Kunden, um bei der Installation zu helfen oder eine Pumpe zu reparieren. Für mich ist das eine schöne Abwechslung zur Arbeit in der Halle, auch wenn die Reisen manchmal anstrengend sind.\nEin Beispiel aus dem letzten Sommer: In einer kleinen Stadt in Polen ist während eines Unwetters eine unserer Pumpen ausgefallen. Der Kunde hat am Freitagabend angerufen, und ich bin mit einem Kollegen noch in der Nacht losgefahren. Am Samstagmittag lief die Anlage wieder. Der Bürgermeister hat sich später sogar mit einem Brief bei uns bedankt, der heute in unserer Kantine hängt.\nWas unser Unternehmen besonders macht, ist meiner Meinung nach die Mischung aus Tradition und moderner Technik. Wir sind ein Familienbetrieb, in dem der Chef noch jeden Mitarbeiter mit Namen kennt und bei Problemen selbst in die Halle kommt. Gleichzeitig investieren wir viel in neue, energiesparende Modelle. Deshalb arbeite ich gern dort und kann mir gut vorstellen, noch lange zu bleiben. Vielen Dank für eure Aufmerksamkeit.",
       "frage": "Was würdest du in deiner Firma gern verbessern?",
       "musterantwort": "Gute Frage. Ich würde mir wünschen, dass wir mehr mit digitalen Unterlagen arbeiten. Im Moment drucken wir viele Pläne und Prüfprotokolle noch auf Papier aus. Das kostet Zeit und ist unpraktisch, vor allem wenn man beim Kunden ist und schnell etwas nachschauen möchte."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "erzaehlen",
   "name": "Diskutieren",
   "kurz": "Über einen Zeitungstext diskutieren",
   "was": "Ihr diskutiert über einen kurzen Zeitungstext aus der Arbeitswelt: Position, Argumente, auf den anderen eingehen.",
   "tipp": "„Der Text vertritt die These, dass … Ich sehe das …, weil …\" — und ein Beispiel aus der Praxis.",
   "zeichen": "📰",
   "farbe": "gold",
   "punkte": 25,
   "runden": [
    {
     "id": "tb2bm2r1",
     "thema": "Großraumbüro für alle?",
     "karten": [
      {
       "kopf": "Teil 2 · Diskutieren",
       "kopfb": "Zeitungstext",
       "auftrag": [
        "Bezieh Stellung zum Text und begründe deine Meinung.",
        "Geh auf dein Gegenüber ein.",
        "Reagiere auf den Einwand."
       ],
       "id": "tbb2t2k1",
       "thema": "Großraumbüro für alle?",
       "quelle": "Rheinische Wirtschaftsrundschau",
       "text": "Das Einzelbüro hat ausgedient. Immer mehr Unternehmen reißen Wände ein und setzen auf offene Großraumbüros, und das aus gutem Grund. Wer im selben Raum arbeitet, spricht häufiger miteinander, teilt Wissen schneller und löst Probleme gemeinsam statt per E-Mail. Hinzu kommt der wirtschaftliche Vorteil: Offene Flächen sparen Miete und lassen sich flexibel umgestalten, wenn ein Team wächst oder schrumpft. Natürlich klagen manche Mitarbeiter über Lärm und fehlende Rückzugsmöglichkeiten. Doch dafür gibt es längst Lösungen wie Ruheräume, Telefonkabinen und gute Kopfhörer. Und wer wirklich ungestört sein muss, kann ja auch einmal von zu Hause aus arbeiten. Unternehmen, die heute noch an langen Fluren mit geschlossenen Türen festhalten, bremsen ihre eigene Innovationskraft. — Kommentar von Bernd Lohmeier",
       "punkte": [
        "Position beziehen",
        "Argumente",
        "Auf dein Gegenüber eingehen",
        "Beispiel aus der Praxis"
       ],
       "mustervortrag": "Der Autor ist der Meinung, dass Einzelbüros überholt sind und Großraumbüros die Zusammenarbeit fördern. Außerdem betont er, dass Firmen damit Miete sparen. Ich kann das Argument mit der Kommunikation teilweise nachvollziehen, sehe Großraumbüros aber insgesamt eher kritisch. Meiner Erfahrung nach leidet vor allem die Konzentration. Wer komplizierte Aufgaben hat, zum Beispiel eine Kalkulation oder einen langen Bericht, wird ständig durch Telefonate und Gespräche der Kollegen unterbrochen. Bei uns in der Firma wurde vor drei Jahren ein Großraumbüro eingeführt. In den ersten Monaten haben viele Kollegen mit Kopfhörern gearbeitet, und die Stimmung war eher schlechter als vorher, weil gar keiner mehr miteinander gesprochen hat. Erst als wir zusätzlich kleine Besprechungsräume und eine ruhige Zone bekommen haben, wurde es besser. Deshalb denke ich, dass eine Mischung am sinnvollsten ist: offene Bereiche für Teamarbeit und ruhige Räume für konzentriertes Arbeiten. Dass Firmen dabei auch Geld sparen wollen, verstehe ich, aber das darf nicht das wichtigste Argument sein. Wie siehst du das, arbeitest du lieber allein oder mit anderen in einem Raum?",
       "frage": "Aber findest du nicht, dass man im Großraumbüro schneller Hilfe von Kollegen bekommt?",
       "musterantwort": "Da hast du recht, das ist ein echter Vorteil. Gerade neue Kollegen profitieren davon, wenn sie einfach kurz fragen können. Allerdings gilt das auch für ein Büro mit zwei, drei Personen. Dafür braucht man nicht gleich einen Raum mit fünfzig Arbeitsplätzen."
      }
     ]
    },
    {
     "id": "tb2bm2r2",
     "thema": "Lieber mehr Geld oder mehr Freizeit?",
     "karten": [
      {
       "kopf": "Teil 2 · Diskutieren",
       "kopfb": "Zeitungstext",
       "auftrag": [
        "Bezieh Stellung zum Text und begründe deine Meinung.",
        "Geh auf dein Gegenüber ein.",
        "Reagiere auf den Einwand."
       ],
       "id": "tbb2t2k2",
       "thema": "Lieber mehr Geld oder mehr Freizeit?",
       "quelle": "Der Arbeitsmarkt kompakt",
       "text": "Bei Tarifverhandlungen ging es jahrzehntelang vor allem um eines: mehr Lohn. Doch das ändert sich. In einer aktuellen Umfrage erklärt fast jeder zweite Beschäftigte, er würde auf eine Gehaltserhöhung verzichten, wenn er dafür zusätzliche Urlaubstage bekäme. Für Unternehmen klingt das zunächst verlockend, schließlich kostet Freizeit kein Geld. Das ist allerdings ein Irrtum. Jeder freie Tag muss von Kollegen aufgefangen werden, und in Zeiten des Fachkräftemangels ist das kaum zu schaffen. Zudem warnen Fachleute: Wer heute auf Gehalt verzichtet, bekommt später auch weniger Rente. Freizeit ist wertvoll, aber sie sollte nicht zur neuen Währung der Arbeitswelt werden. — Kommentar von Petra Ilgner",
       "punkte": [
        "Position beziehen",
        "Argumente",
        "Auf dein Gegenüber eingehen",
        "Beispiel aus der Praxis"
       ],
       "mustervortrag": "Die Autorin beschreibt, dass immer mehr Beschäftigte lieber mehr Freizeit als mehr Geld hätten. Sie selbst sieht diese Entwicklung kritisch, weil Kollegen die Arbeit auffangen müssen und weil man später weniger Rente bekommt. Ich sehe das anders. Für mich persönlich wäre mehr Freizeit eindeutig wichtiger als ein paar Prozent mehr Gehalt. Ich habe zwei kleine Kinder, und jeder zusätzliche freie Tag bedeutet für unsere Familie weniger Stress. Das Rentenargument verstehe ich zwar, aber bei einer kleinen Gehaltserhöhung ist der Unterschied später wirklich gering. In meiner Firma gibt es seit letztem Jahr ein Wahlmodell: Man kann sich entweder mehr Geld auszahlen lassen oder sechs zusätzliche Urlaubstage nehmen. Ungefähr die Hälfte meiner Kollegen hat sich für die Urlaubstage entschieden, und ich habe nicht den Eindruck, dass die Arbeit darunter leidet. Im Gegenteil, die Leute sind erholter und seltener krank. Deshalb finde ich, dass Firmen ihren Mitarbeitern die Wahl lassen sollten. Und ganz nebenbei spart die Firma Geld, weil weniger Leute ausfallen. Was würdest du denn wählen?",
       "frage": "Und was ist mit Kollegen, die wenig verdienen und jeden Euro brauchen?",
       "musterantwort": "Das ist ein wichtiger Punkt. Für sie wäre eine Pflicht zu mehr Freizeit natürlich unfair. Genau deshalb finde ich ein Wahlmodell so gut: Wer das Geld braucht, nimmt das Geld. Wer es sich leisten kann, nimmt die freien Tage. So hat jeder die Möglichkeit, selbst zu entscheiden."
      }
     ]
    },
    {
     "id": "tb2bm2r3",
     "thema": "Die Vier-Tage-Woche",
     "karten": [
      {
       "kopf": "Teil 2 · Diskutieren",
       "kopfb": "Zeitungstext",
       "auftrag": [
        "Bezieh Stellung zum Text und begründe deine Meinung.",
        "Geh auf dein Gegenüber ein.",
        "Reagiere auf den Einwand."
       ],
       "id": "tbb2t2k3",
       "thema": "Die Vier-Tage-Woche",
       "quelle": "Mittelstand heute",
       "text": "Vier Tage arbeiten, drei Tage frei, bei vollem Lohn: Was wie ein Traum klingt, testen inzwischen zahlreiche Betriebe. Die ersten Ergebnisse sind erstaunlich. Mitarbeiter sind motivierter, melden sich seltener krank, und die Produktivität bleibt in vielen Fällen gleich. Für Firmen, die händeringend Personal suchen, kann die Vier-Tage-Woche ein entscheidender Vorteil sein. Trotzdem ist Vorsicht geboten. In der Pflege, im Handwerk oder im Einzelhandel lässt sich die Arbeit nicht einfach verdichten. Wer dort einen Tag streicht, braucht mehr Personal, das es nicht gibt. Die Vier-Tage-Woche ist ein gutes Modell für manche Büros, aber keine Lösung für die ganze Wirtschaft. — Kommentar von Thomas Grieger",
       "punkte": [
        "Position beziehen",
        "Argumente",
        "Auf dein Gegenüber eingehen",
        "Beispiel aus der Praxis"
       ],
       "mustervortrag": "Der Autor findet die Vier-Tage-Woche grundsätzlich interessant, weil Mitarbeiter motivierter sind und seltener krank werden. Er warnt aber, dass sie in Berufen wie der Pflege oder im Handwerk kaum umsetzbar ist. Ich stimme ihm in diesem Punkt weitgehend zu. Ich arbeite selbst im Einzelhandel, und ich kann mir nicht vorstellen, wie das bei uns funktionieren soll. Der Laden ist sechs Tage pro Woche geöffnet, und wir suchen schon jetzt seit Monaten Verstärkung. Wenn jeder nur noch vier Tage arbeitet, müssten wir entweder die Öffnungszeiten kürzen oder noch mehr Leute einstellen, die es auf dem Markt nicht gibt. Andererseits sehe ich bei meinem Bruder, der in einer Werbeagentur arbeitet, dass es durchaus klappen kann. Seine Firma hat das Modell vor einem Jahr eingeführt, und er sagt, die Besprechungen seien kürzer und viel effektiver geworden. Deshalb denke ich, dass jede Branche selbst entscheiden sollte. Eine gesetzliche Pflicht für alle halte ich für falsch, weil die Unterschiede zwischen den Branchen einfach zu groß sind. Siehst du das ähnlich?",
       "frage": "Könnte man im Einzelhandel nicht mit flexiblen Schichten arbeiten?",
       "musterantwort": "Theoretisch ja. Man könnte zum Beispiel längere Schichten an vier Tagen planen. Aber zehn Stunden an der Kasse oder im Lager sind körperlich sehr anstrengend. Ich glaube, viele Kollegen würden dann zwar einen freien Tag mehr haben, ihn aber vor allem zum Erholen brauchen."
      }
     ]
    },
    {
     "id": "tb2bm2r4",
     "thema": "Duzen im Betrieb",
     "karten": [
      {
       "kopf": "Teil 2 · Diskutieren",
       "kopfb": "Zeitungstext",
       "auftrag": [
        "Bezieh Stellung zum Text und begründe deine Meinung.",
        "Geh auf dein Gegenüber ein.",
        "Reagiere auf den Einwand."
       ],
       "id": "tbb2t2k4",
       "thema": "Duzen im Betrieb",
       "quelle": "Personal und Führung",
       "text": "Vom Praktikanten bis zur Geschäftsführerin: In immer mehr deutschen Unternehmen duzen sich alle. Was in der Werbebranche und in jungen Firmen schon lange üblich ist, erreicht nun auch Banken, Versicherungen und Behörden. Befürworter versprechen sich davon flachere Hierarchien und eine offenere Kultur. Doch das Du hat auch Schattenseiten. Kritik wird nicht freundlicher, nur weil man sich beim Vornamen nennt, und klare Grenzen werden manchmal unscharf. Gerade ältere Beschäftigte fühlen sich zum Du gedrängt, obwohl sie lieber beim Sie bleiben würden. Respekt entsteht nicht durch die Anrede, sondern durch den Umgang miteinander. Firmen sollten das Du anbieten, aber nicht verordnen. — Kommentar von Ute Brackmann",
       "punkte": [
        "Position beziehen",
        "Argumente",
        "Auf dein Gegenüber eingehen",
        "Beispiel aus der Praxis"
       ],
       "mustervortrag": "Die Autorin stellt fest, dass sich in immer mehr Firmen alle duzen. Sie meint aber, dass das Du nicht automatisch zu mehr Respekt führt, und fordert, dass Firmen es nur anbieten, nicht vorschreiben. Ich finde diese Position sehr vernünftig. In meiner ersten Stelle in Deutschland habe ich in einem großen Versicherungsunternehmen gearbeitet, und dort hat die Geschäftsführung eines Tages beschlossen, dass sich ab sofort alle duzen. Für mich war das ehrlich gesagt eine Erleichterung, weil ich mir beim Sie oft unsicher war. Aber mehrere ältere Kollegen fanden es unangenehm, ihren Chef plötzlich mit dem Vornamen anzusprechen. Einer hat mir erzählt, dass er sich dadurch nicht freier, sondern eher kontrolliert fühlt. Außerdem habe ich gemerkt, dass sich an den Hierarchien eigentlich nichts geändert hat. Die Entscheidungen wurden genauso getroffen wie vorher, nur eben mit Vornamen. Deshalb glaube ich, dass die Autorin recht hat: Entscheidend ist, wie man miteinander umgeht, nicht ob man Du oder Sie sagt. Wie ist das bei dir in der Firma?",
       "frage": "Ist das Du nicht gerade für Leute, die neu in Deutschland sind, viel einfacher?",
       "musterantwort": "Sprachlich auf jeden Fall, das habe ich ja selbst erlebt. Trotzdem sollte es meiner Meinung nach freiwillig bleiben. Man kann auch in einer Firma mit Sie sehr freundlich miteinander umgehen. Und wer neu ist, lernt ohnehin schnell, wie es in seinem Team üblich ist."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "planen",
   "name": "Verhandeln",
   "kurz": "Mit Rollenkarte eine Lösung aushandeln",
   "was": "Jede Person hat eine Rollenkarte mit einer Position. Ihr verhandelt und findet einen Kompromiss.",
   "tipp": "Position klar vertreten, aber zuhören — und am Ende das Ergebnis festhalten.",
   "zeichen": "🤝",
   "farbe": "gruen",
   "punkte": 25,
   "runden": [
    {
     "id": "tb2bm3r1",
     "thema": "Umzug der Abteilung",
     "karten": [
      {
       "kopf": "Teil 3 · Verhandeln",
       "auftrag": [
        "Vertritt die Position auf deiner Rollenkarte und begründe sie.",
        "Geh auf die Argumente deines Gegenübers ein.",
        "Findet gemeinsam eine Lösung."
       ],
       "id": "tbb2t3k1",
       "thema": "Umzug der Abteilung",
       "aufgabe": "Eure Firma zieht in ein neues Gebäude. Es gibt zwei freie Etagen: das Erdgeschoss direkt neben dem Kundeneingang und den vierten Stock mit Blick über die Stadt. Du leitest den Kundenservice und möchtest unbedingt ins Erdgeschoss. Dein Gegenüber leitet die Buchhaltung.",
       "punkte": [
        "Kunden finden den Service sofort",
        "Kurze Wege für Paketannahme und Reklamationen",
        "Mitarbeiter mit Kunden brauchen keinen ruhigen Ausblick",
        "Buchhaltung braucht keinen Kundenkontakt"
       ],
       "mustervorschlag": "Ich verstehe, dass der vierte Stock mit dem schönen Ausblick für beide Abteilungen attraktiv ist. Aus Sicht des Kundenservice ist das Erdgeschoss aber eindeutig die bessere Lösung. Unsere Kunden kommen täglich mit Reklamationen und Rücksendungen ins Haus, oft mit schweren Paketen. Wenn wir im vierten Stock sitzen, müssen sie erst den Aufzug suchen, und das sorgt für Ärger. Du hast vorhin gesagt, dass die Buchhaltung Ruhe zum Arbeiten braucht. Genau deshalb wäre der vierte Stock für euch doch ideal, weil dort kein Publikumsverkehr ist. Mir ist klar, dass ihr im Erdgeschoss den direkten Zugang zum Archiv im Keller hättet. Wie wäre es, wenn wir euch dafür im Erdgeschoss einen kleinen Archivraum abgeben? Dann müsstet ihr nicht ständig durchs ganze Haus laufen. Außerdem könnten wir die Dachterrasse im vierten Stock zum Pausenraum für alle machen.",
       "mustereinigung": "Dann halten wir fest: Der Kundenservice zieht ins Erdgeschoss, die Buchhaltung in den vierten Stock und bekommt im Erdgeschoss einen eigenen Archivraum."
      }
     ]
    },
    {
     "id": "tb2bm3r2",
     "thema": "Den Neujahrsempfang planen",
     "karten": [
      {
       "kopf": "Teil 3 · Verhandeln",
       "auftrag": [
        "Vertritt die Position auf deiner Rollenkarte und begründe sie.",
        "Geh auf die Argumente deines Gegenübers ein.",
        "Findet gemeinsam eine Lösung."
       ],
       "id": "tbb2t3k2",
       "thema": "Den Neujahrsempfang planen",
       "aufgabe": "Ihr sollt gemeinsam den Neujahrsempfang für Kunden und Mitarbeiter planen. Das Budget ist knapp. Du arbeitest im Marketing und möchtest die Veranstaltung in einem schicken Restaurant in der Innenstadt feiern, um bei den Kunden einen guten Eindruck zu machen. Dein Gegenüber aus dem Einkauf möchte lieber in der eigenen Firmenhalle feiern.",
       "punkte": [
        "Wichtige Kunden kommen lieber in ein schönes Restaurant",
        "Gute Werbung für die Firma",
        "Restaurant übernimmt Service und Aufräumen",
        "Mitarbeiter haben keine zusätzliche Arbeit"
       ],
       "mustervorschlag": "Ich verstehe, dass die Feier in unserer Halle günstiger wäre, und das Budget ist ja tatsächlich knapp. Trotzdem sollten wir bedenken, dass der Neujahrsempfang vor allem für unsere Kunden gedacht ist. Ein schönes Restaurant in der Innenstadt zeigt, dass wir sie wertschätzen, und das ist auch Werbung für uns. Außerdem kümmert sich das Restaurant um alles, vom Service bis zum Aufräumen. In der Halle müssten unsere eigenen Leute Tische tragen und am Ende putzen, und das an einem Arbeitstag. Andererseits sehe ich auch, dass ein komplettes Menü im Restaurant zu teuer wäre. Mein Vorschlag wäre deshalb: Wir mieten nur den kleinen Saal und bieten statt eines Menüs ein Fingerfood-Buffet an. Und wenn du ein günstiges Restaurant mit gutem Ruf kennst, bin ich gern offen dafür.",
       "mustereinigung": "Wir feiern im kleinen Saal eines Restaurants in der Innenstadt, bieten ein Fingerfood-Buffet statt eines Menüs an, und du holst bis Freitag drei Vergleichsangebote ein."
      }
     ]
    },
    {
     "id": "tb2bm3r3",
     "thema": "Budget für Weiterbildung verteilen",
     "karten": [
      {
       "kopf": "Teil 3 · Verhandeln",
       "auftrag": [
        "Vertritt die Position auf deiner Rollenkarte und begründe sie.",
        "Geh auf die Argumente deines Gegenübers ein.",
        "Findet gemeinsam eine Lösung."
       ],
       "id": "tbb2t3k3",
       "thema": "Budget für Weiterbildung verteilen",
       "aufgabe": "Euer Bereich hat in diesem Jahr zwölftausend Euro für Weiterbildung. Ihr sollt euch einigen, wie das Geld zwischen zwei Abteilungen verteilt wird. Du leitest die IT-Abteilung, in der dringend Schulungen zu Datensicherheit nötig sind. Dein Gegenüber leitet den Vertrieb.",
       "punkte": [
        "Neue Vorschriften zur Datensicherheit ab dem Sommer",
        "Ohne Schulung drohen hohe Strafen",
        "IT-Kurse sind teuer, weil Spezialwissen nötig ist",
        "Ein Teil der Inhalte ist auch für den Vertrieb nützlich"
       ],
       "mustervorschlag": "Mir ist bewusst, dass der Vertrieb seine Verkaufstrainings ebenfalls dringend braucht. Trotzdem muss ich darauf hinweisen, dass ab dem Sommer neue Vorschriften zur Datensicherheit gelten. Wenn wir die nicht einhalten, drohen der Firma hohe Strafen, und das würde am Ende uns allen schaden. Spezialkurse in diesem Bereich sind leider teuer, deshalb bräuchten wir eigentlich zwei Drittel des Budgets. Ich verstehe aber, dass das für dich schwer zu akzeptieren ist. Lass uns überlegen, wo wir zusammenarbeiten können. Ein Teil unserer Schulung behandelt den sicheren Umgang mit Kundendaten, und genau das betrifft auch deine Mitarbeiter. Wenn wir diesen Teil gemeinsam für beide Abteilungen buchen, sparen wir Geld. Mein Vorschlag wäre: Die IT bekommt siebentausend Euro, der Vertrieb fünftausend, und die Datenschutzschulung zahlen wir aus dem IT-Anteil für alle.",
       "mustereinigung": "Die IT erhält siebentausend Euro und bezahlt davon eine gemeinsame Datenschutzschulung für beide Abteilungen, der Vertrieb bekommt fünftausend Euro für Verkaufstrainings."
      }
     ]
    },
    {
     "id": "tb2bm3r4",
     "thema": "Urlaubssperre im Sommer",
     "karten": [
      {
       "kopf": "Teil 3 · Verhandeln",
       "auftrag": [
        "Vertritt die Position auf deiner Rollenkarte und begründe sie.",
        "Geh auf die Argumente deines Gegenübers ein.",
        "Findet gemeinsam eine Lösung."
       ],
       "id": "tbb2t3k4",
       "thema": "Urlaubssperre im Sommer",
       "aufgabe": "Wegen eines Großauftrags soll es im August eine Urlaubssperre geben. Du vertrittst den Betriebsrat und findest eine komplette Sperre unfair, besonders für Eltern mit Schulkindern. Dein Gegenüber ist Produktionsleiter und muss die Lieferung pünktlich schaffen.",
       "punkte": [
        "Eltern können nur in den Schulferien Urlaub machen",
        "Viele haben ihren Urlaub schon gebucht",
        "Erholte Mitarbeiter machen weniger Fehler",
        "Mögliche Lösungen: Aushilfen, Überstunden im Juli"
       ],
       "mustervorschlag": "Ich verstehe natürlich, dass der Großauftrag für die Firma sehr wichtig ist und pünktlich geliefert werden muss. Eine komplette Urlaubssperre im August halte ich aber für unfair. Viele Kollegen mit Schulkindern können nur in den Ferien Urlaub nehmen, und einige haben ihre Reise bereits gebucht und bezahlt. Du sagst, dass ohne die volle Mannschaft die Lieferung gefährdet ist. Das nehme ich ernst. Gleichzeitig sollten wir bedenken, dass erschöpfte Mitarbeiter mehr Fehler machen, und das kann teuer werden. Wie wäre es mit folgendem Kompromiss: Wer schon gebucht hat, darf fahren. Alle anderen verschieben ihren Urlaub freiwillig in den September und bekommen dafür einen zusätzlichen freien Tag. Außerdem könnten wir für die Lücken Aushilfen einstellen und im Juli schon etwas vorarbeiten.",
       "mustereinigung": "Bereits gebuchter Urlaub bleibt bestehen, alle anderen verschieben ihren Urlaub in den September und erhalten einen zusätzlichen freien Tag, und für August werden Aushilfen eingestellt."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb2bml1",
   "titel": "Prüfungslauf 1",
   "minuten": 18,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Teamarbeit in meinem Beruf",
     "karten": [
      {
       "kopf": "Teil 1 · Präsentieren",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Präsentiere etwa zweieinhalb Minuten.",
        "Beantworte danach die Frage deines Gegenübers."
       ],
       "id": "tbb2t1k5",
       "thema": "Teamarbeit in meinem Beruf",
       "punkte": [
        "Einleitung",
        "Zwei, drei Aspekte",
        "Beispiel aus dem Beruf",
        "Schluss"
       ],
       "mustervortrag": "Das Thema meiner Präsentation ist die Teamarbeit in meinem Beruf. Ich arbeite als Softwareentwicklerin in einer Firma, die Programme für Arztpraxen herstellt. Viele denken, dass Programmierer den ganzen Tag allein vor dem Bildschirm sitzen, aber das stimmt nicht. Ich möchte euch zeigen, wie unser Team organisiert ist, welche Vorteile und Schwierigkeiten es gibt, und euch ein Beispiel aus unserem Alltag geben.\nUnser Team besteht aus sieben Personen: vier Entwicklern, einer Designerin, einem Tester und einer Produktverantwortlichen. Wir arbeiten in sogenannten Sprints, das heißt, wir planen immer zwei Wochen im Voraus, was wir schaffen wollen. Jeden Morgen treffen wir uns für fünfzehn Minuten und erzählen kurz, woran wir arbeiten und wo wir Hilfe brauchen.\nDer größte Vorteil dieser Arbeitsweise ist, dass Probleme sehr früh sichtbar werden. Wenn jemand nicht weiterkommt, sagt er es am nächsten Morgen, und ein Kollege hilft. Die Schwierigkeit liegt allerdings darin, dass wir zur Hälfte im Homeoffice arbeiten. Spontane Gespräche an der Kaffeemaschine fallen dann weg, und man muss sich bewusst Zeit füreinander nehmen. Deshalb treffen wir uns einmal im Monat alle im Büro, gehen zusammen essen und besprechen in Ruhe, was gut läuft und was nicht.\nEin Beispiel: Im Frühjahr hatten wir eine neue Funktion für die Terminplanung entwickelt. Technisch war alles perfekt, aber bei den ersten Tests in einer Praxis kamen die Arzthelferinnen überhaupt nicht damit zurecht. Statt uns gegenseitig Vorwürfe zu machen, haben wir uns zu dritt einen ganzen Tag in die Praxis gesetzt und zugeschaut. Danach haben wir die Funktion gemeinsam umgebaut, und jetzt gehört sie zu den beliebtesten im ganzen Programm.\nAbschließend kann ich sagen, dass gute Teamarbeit für mich vor allem eine Frage des Vertrauens ist. Man muss Fehler offen zugeben können, ohne Angst zu haben, dafür kritisiert zu werden. In unserem Team klappt das zum Glück sehr gut, auch wenn wir natürlich nicht immer einer Meinung sind. Ich freue mich auf eure Fragen.",
       "frage": "Was machst du, wenn es im Team einen Konflikt gibt?",
       "musterantwort": "Ich versuche zuerst, direkt mit der Person zu sprechen, und zwar möglichst bald und unter vier Augen. Meistens ist es ein Missverständnis. Wenn wir uns nicht einigen können, bitten wir unsere Teamleiterin, das Gespräch zu moderieren. Das kommt aber zum Glück selten vor."
      }
     ]
    },
    {
     "nr": 2,
     "art": "erzaehlen",
     "thema": "Sollen Gehälter offengelegt werden?",
     "karten": [
      {
       "kopf": "Teil 2 · Diskutieren",
       "kopfb": "Zeitungstext",
       "auftrag": [
        "Bezieh Stellung zum Text und begründe deine Meinung.",
        "Geh auf dein Gegenüber ein.",
        "Reagiere auf den Einwand."
       ],
       "id": "tbb2t2k5",
       "thema": "Sollen Gehälter offengelegt werden?",
       "quelle": "Neue Zeitung für Arbeit und Beruf",
       "text": "Über Geld spricht man nicht, heißt es in Deutschland. Doch genau dieses Schweigen schadet vielen Beschäftigten. Wer nicht weiß, was Kollegen in derselben Position verdienen, kann bei Gehaltsverhandlungen kaum mitreden. Besonders Frauen werden dadurch häufig schlechter bezahlt, ohne es zu merken. In skandinavischen Ländern sind Einkommen teilweise öffentlich, und die Unterschiede sind dort deutlich kleiner. Kritiker befürchten Neid und Streit im Team und sehen die Privatsphäre in Gefahr. Doch Neid entsteht vor allem dort, wo Gehälter willkürlich festgelegt werden. Wer faire Regeln hat, muss Transparenz nicht fürchten. Deutsche Unternehmen sollten verpflichtet werden, alle Gehälter intern offenzulegen. — Kommentar von Sinan Kaplan",
       "punkte": [
        "Position beziehen",
        "Argumente",
        "Auf dein Gegenüber eingehen",
        "Beispiel aus der Praxis"
       ],
       "mustervortrag": "Der Autor fordert, dass Unternehmen alle Gehälter intern offenlegen müssen. Er argumentiert, dass Schweigen über Geld vor allem denen schadet, die ohnehin schlechter bezahlt werden. Ich finde, er hat in vielen Punkten recht, würde aber nicht ganz so weit gehen. Eine Pflicht, jedes einzelne Gehalt mit Namen zu veröffentlichen, halte ich für problematisch, weil Gehalt auch etwas Privates ist. Sinnvoller fände ich, wenn Firmen die Gehaltsspannen für jede Position offenlegen, also zum Beispiel: Ein Sachbearbeiter verdient bei uns zwischen so viel und so viel. Bei meinem letzten Arbeitgeber habe ich durch Zufall erfahren, dass ein Kollege, der zur gleichen Zeit angefangen hat und die gleiche Arbeit macht, fast vierhundert Euro mehr im Monat bekam. Er hatte einfach besser verhandelt. Das hat mich damals sehr geärgert, und ich habe kurz danach gekündigt. Mit klaren Gehaltsspannen wäre das wahrscheinlich nicht passiert, und die Firma hätte eine gute Mitarbeiterin behalten. Ich glaube, viele Menschen würden sich dann auch trauen, selbstbewusster zu verhandeln. Was meinst du, würdest du dein Gehalt deinen Kollegen sagen?",
       "frage": "Glaubst du nicht, dass es dann im Team mehr Streit gibt?",
       "musterantwort": "Am Anfang vielleicht schon, weil plötzlich Unterschiede sichtbar werden. Aber langfristig glaube ich eher an das Gegenteil. Wenn die Regeln klar sind, muss niemand mehr spekulieren. Streit entsteht doch vor allem dann, wenn man das Gefühl hat, ungerecht behandelt zu werden."
      }
     ]
    },
    {
     "nr": 3,
     "art": "planen",
     "thema": "Ein neues Schichtmodell",
     "karten": [
      {
       "kopf": "Teil 3 · Verhandeln",
       "auftrag": [
        "Vertritt die Position auf deiner Rollenkarte und begründe sie.",
        "Geh auf die Argumente deines Gegenübers ein.",
        "Findet gemeinsam eine Lösung."
       ],
       "id": "tbb2t3k5",
       "thema": "Ein neues Schichtmodell",
       "aufgabe": "In eurem Lager soll ein neues Schichtmodell eingeführt werden. Die Geschäftsleitung möchte eine zusätzliche Nachtschicht. Du bist Schichtleiterin und sprichst für die Mitarbeiter, die lieber bei zwei Schichten bleiben möchten. Dein Gegenüber ist der Lagerleiter.",
       "punkte": [
        "Nachtarbeit belastet Gesundheit und Familie",
        "Mehr Unfälle in der Nacht",
        "Viele Mitarbeiter würden kündigen",
        "Alternative: längere Spätschicht, Samstagsarbeit freiwillig"
       ],
       "mustervorschlag": "Ich weiß, dass die Bestellungen stark gestiegen sind und wir mehr Kapazität brauchen. Trotzdem sind meine Kollegen gegen eine feste Nachtschicht, und das hat gute Gründe. Nachtarbeit belastet die Gesundheit und das Familienleben enorm. Außerdem passieren nachts im Lager nachweislich mehr Unfälle, weil die Konzentration nachlässt. Ich habe in meinem Team gefragt, und mindestens vier Leute haben gesagt, dass sie bei einer Nachtschicht kündigen würden. Das können wir uns bei der aktuellen Personallage nicht leisten. Du hast recht, dass wir eine Lösung brauchen. Wie wäre es, wenn wir die Spätschicht um zwei Stunden verlängern und dafür einen Zuschlag zahlen? Zusätzlich könnten wir eine freiwillige Samstagsschicht anbieten. Und wenn das nach drei Monaten nicht reicht, sprechen wir noch einmal über eine Nachtschicht, dann aber nur mit Freiwilligen.",
       "mustereinigung": "Zunächst wird die Spätschicht mit Zuschlag um zwei Stunden verlängert und eine freiwillige Samstagsschicht angeboten, nach drei Monaten prüfen wir gemeinsam, ob das reicht."
      }
     ]
    }
   ]
  },
  {
   "id": "tb2bml2",
   "titel": "Prüfungslauf 2",
   "minuten": 18,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Digitalisierung an meinem Arbeitsplatz",
     "karten": [
      {
       "kopf": "Teil 1 · Präsentieren",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Präsentiere etwa zweieinhalb Minuten.",
        "Beantworte danach die Frage deines Gegenübers."
       ],
       "id": "tbb2t1k6",
       "thema": "Digitalisierung an meinem Arbeitsplatz",
       "punkte": [
        "Einleitung",
        "Zwei, drei Aspekte",
        "Beispiel aus dem Beruf",
        "Schluss"
       ],
       "mustervortrag": "Heute möchte ich darüber sprechen, wie die Digitalisierung meinen Arbeitsplatz verändert hat. Ich bin gelernte Bürokauffrau und arbeite seit zehn Jahren in der Buchhaltung eines Großhandels für Elektroartikel. Als ich angefangen habe, gab es bei uns noch Regale voller Ordner. Ich erzähle euch zuerst, was sich konkret verändert hat, dann spreche ich über Vorteile und Nachteile, und am Ende gebe ich euch ein Beispiel.\nDie größte Veränderung betrifft die Rechnungen. Früher kamen fast alle Rechnungen mit der Post. Wir haben sie gestempelt, abgeheftet und von Hand ins System eingetippt. Heute erhalten wir über neunzig Prozent der Rechnungen digital. Ein Programm liest die wichtigsten Daten automatisch aus, und ich kontrolliere nur noch, ob alles stimmt. Außerdem arbeiten wir seit der Umstellung zwei Tage pro Woche im Homeoffice, was früher undenkbar gewesen wäre.\nDie Vorteile liegen auf der Hand: Wir sparen Zeit, Papier und Platz, und ich kann von überall auf die Unterlagen zugreifen. Es gibt aber auch Nachteile. Manche Kollegen fühlen sich von der Technik überfordert, und wenn das System ausfällt, können wir praktisch gar nichts mehr machen. Außerdem habe ich manchmal das Gefühl, dass der persönliche Kontakt zu den Lieferanten weniger geworden ist. Früher hat man öfter zum Telefon gegriffen, heute schreibt man fast nur noch E-Mails oder Nachrichten im Kundenportal.\nEin Beispiel aus dem letzten Jahr: Ein Programm hat bei einer Rechnung den Betrag falsch erkannt und statt zweihundert Euro zwanzigtausend Euro eingetragen. Zum Glück ist mir das bei der Kontrolle aufgefallen, bevor das Geld überwiesen wurde. Seitdem weiß ich: Die Technik macht vieles leichter, aber sie ersetzt nicht den gesunden Menschenverstand.\nZusammenfassend würde ich sagen, dass die Digitalisierung meine Arbeit insgesamt verbessert hat. Ich mache weniger langweilige Routinearbeit und habe mehr Zeit für schwierige Fälle, zum Beispiel für Gespräche mit Kunden, die ihre Rechnungen nicht bezahlen können. Wichtig ist allerdings, dass alle Mitarbeiter gut geschult werden und niemand zurückbleibt. Vielen Dank, ich bin gespannt auf eure Fragen.",
       "frage": "Hast du Angst, dass dein Arbeitsplatz irgendwann ganz von Programmen ersetzt wird?",
       "musterantwort": "Ein bisschen schon, ehrlich gesagt. Die einfachen Aufgaben werden sicher immer mehr automatisiert. Ich glaube aber, dass es weiterhin Menschen braucht, die kontrollieren, Fehler finden und mit Kunden sprechen. Deshalb bilde ich mich gerade im Bereich Controlling weiter."
      }
     ]
    },
    {
     "nr": 2,
     "art": "erzaehlen",
     "thema": "Dienstwagen abschaffen?",
     "karten": [
      {
       "kopf": "Teil 2 · Diskutieren",
       "kopfb": "Zeitungstext",
       "auftrag": [
        "Bezieh Stellung zum Text und begründe deine Meinung.",
        "Geh auf dein Gegenüber ein.",
        "Reagiere auf den Einwand."
       ],
       "id": "tbb2t2k6",
       "thema": "Dienstwagen abschaffen?",
       "quelle": "Umwelt und Wirtschaft aktuell",
       "text": "Der Dienstwagen ist in Deutschland immer noch ein Statussymbol. Hunderttausende Beschäftigte fahren ein Auto, das ihr Arbeitgeber bezahlt, und nutzen es auch privat, oft sogar für den Urlaub. Den Staat kostet das jedes Jahr Milliarden an Steuervorteilen. Für das Klima ist das ebenfalls eine schlechte Nachricht: Wer kein eigenes Geld für Benzin ausgibt, fährt mehr und wählt häufig größere Modelle. Moderne Unternehmen sollten deshalb umdenken. Statt eines Firmenwagens könnten sie ihren Mitarbeitern ein Budget für Bahn, Fahrrad und Carsharing anbieten. Für Außendienstmitarbeiter auf dem Land mag das Auto unverzichtbar sein. Für den Abteilungsleiter in der Großstadt ist es nur ein teures Privileg. — Kommentar von Lisa Fernández",
       "punkte": [
        "Position beziehen",
        "Argumente",
        "Auf dein Gegenüber eingehen",
        "Beispiel aus der Praxis"
       ],
       "mustervortrag": "Die Autorin kritisiert, dass viele Beschäftigte einen Dienstwagen haben, obwohl sie ihn eigentlich nicht brauchen. Sie schlägt vor, stattdessen ein Budget für Bahn, Fahrrad und Carsharing anzubieten. Ich finde den Vorschlag grundsätzlich gut, sehe aber auch praktische Probleme. Ich arbeite im technischen Außendienst und betreue Kunden in einem großen Gebiet in Niedersachsen. Ohne Auto könnte ich meine Arbeit überhaupt nicht machen, weil ich schweres Werkzeug und Ersatzteile dabeihabe und viele Kunden auf dem Land sitzen, wo kaum ein Bus fährt. Insofern bin ich froh, dass die Autorin diese Ausnahme selbst erwähnt. Bei den Kollegen in der Zentrale sieht das allerdings anders aus. Einige von ihnen haben einen großen Dienstwagen, der die ganze Woche in der Tiefgarage steht. Unsere Firma hat letztes Jahr ein Jobrad eingeführt, und erstaunlich viele haben ihren Wagen dafür abgegeben. Manche fahren seitdem sogar das ganze Jahr mit dem Rad ins Büro. Deshalb denke ich, Firmen sollten den Dienstwagen nicht verbieten, aber attraktive Alternativen anbieten. Wie siehst du das?",
       "frage": "Wäre ein Elektroauto als Dienstwagen nicht ein guter Kompromiss?",
       "musterantwort": "Für Außendienstler wie mich auf jeden Fall, vorausgesetzt, es gibt genug Ladestationen auf dem Land. Für Leute in der Stadt löst ein Elektroauto aber nur einen Teil des Problems. Auch ein Elektroauto braucht Platz und steht im Stau. Da wäre ein Fahrrad oft die bessere Lösung."
      }
     ]
    },
    {
     "nr": 3,
     "art": "planen",
     "thema": "Auswahl eines Lieferanten",
     "karten": [
      {
       "kopf": "Teil 3 · Verhandeln",
       "auftrag": [
        "Vertritt die Position auf deiner Rollenkarte und begründe sie.",
        "Geh auf die Argumente deines Gegenübers ein.",
        "Findet gemeinsam eine Lösung."
       ],
       "id": "tbb2t3k6",
       "thema": "Auswahl eines Lieferanten",
       "aufgabe": "Eure Firma braucht einen neuen Lieferanten für Verpackungsmaterial. Es gibt zwei Angebote: eine günstige Firma aus Asien und einen etwas teureren regionalen Anbieter. Du arbeitest in der Produktion und bevorzugst den regionalen Anbieter. Dein Gegenüber aus dem Einkauf möchte das günstigere Angebot.",
       "punkte": [
        "Kurze Lieferzeiten, auch bei Eilbestellungen",
        "Weniger Risiko bei Lieferproblemen",
        "Besserer persönlicher Kontakt",
        "Umweltfreundlicher wegen kurzer Transportwege"
       ],
       "mustervorschlag": "Ich verstehe gut, dass der Einkauf auf die Kosten achten muss, und das günstigere Angebot ist auf den ersten Blick wirklich attraktiv. Aus Sicht der Produktion spricht aber viel für den regionalen Anbieter. Er liefert innerhalb von zwei Tagen, auch bei Eilbestellungen. Bei der Firma aus Asien sind es mehrere Wochen, und wir müssten ein großes Lager anlegen, was ebenfalls Geld kostet. Du erinnerst dich sicher an letztes Jahr, als ein Container im Hafen festhing und wir fast eine Woche nicht verpacken konnten. Das hat uns mehr gekostet als jeder Preisvorteil. Trotzdem möchte ich nicht einfach auf den höheren Preis bestehen. Mein Vorschlag wäre, dass du mit dem regionalen Anbieter über einen Rabatt für einen Vertrag über zwei Jahre verhandelst. Wenn er nur fünf Prozent nachlässt, ist der Unterschied kaum noch spürbar.",
       "mustereinigung": "Wir entscheiden uns für den regionalen Anbieter, sofern er bei einem Vertrag über zwei Jahre mindestens fünf Prozent Rabatt gewährt, sonst prüfen wir das andere Angebot noch einmal."
      }
     ]
    }
   ]
  }
 ]
};
