/* ============================================================
   deutschoderwas club — SPRECHEN telc Deutsch C2

   Aufbau nach dem offiziellen telc-Format (Tipps zur Prüfungs-
   vorbereitung und Handbuch Deutsch C2, geprüft 03.11.2026). Jede
   Runde hat wie die Prüfung ein Oberthema. Alle Texte eigene.
   Erzeugt aus scratchpad/telcc2 mit bau.js.
   ============================================================ */

window.SPRECHEN_TELC_C2 = {
 "niveau": "telcC2",
 "pruefung": "telc Deutsch C2",
 "minuten": 16,
 "punkte": 40,
 "intro": "Die mündliche Prüfung bei telc C2 ist eine Einzelprüfung. Nach zwanzig Minuten Vorbereitung hältst du eine Präsentation von sechs bis acht Minuten zu einem von zwei Themen; danach folgt ein vertiefendes Gespräch mit den Prüfenden von sieben bis neun Minuten. Von 40 Punkten gibt es je 8 für die beiden Teile und 24 für Flüssigkeit, Repertoire, Richtigkeit und Aussprache. Unter vier Minuten reicht die Präsentation nicht mehr für C2.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Lang und frei sprechen",
   "zeichen": "🎤",
   "was": "Eine lange Präsentation gliedern und frei halten."
  },
  {
   "nr": 2,
   "titel": "Im Gespräch bestehen",
   "zeichen": "💬",
   "was": "Kritische Nachfragen, C2-Repertoire."
  },
  {
   "nr": 3,
   "titel": "Die zwei Teile",
   "zeichen": "🎯",
   "was": "Präsentation und vertiefendes Gespräch mit Musterlösung zum Anhören."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "Beides hintereinander, etwa sechzehn Minuten."
  }
 ],
 "bloecke": [
  {
   "id": "tc2m1",
   "stufe": 1,
   "titel": "Eine lange Präsentation gliedern",
   "kurz": "Sechs bis acht Minuten tragen: Einstieg, Leitfrage, drei Hauptteile, Gegenposition, Fazit",
   "ziel": "Nach diesem Block baust du eine Präsentation von sechs bis acht Minuten so auf, dass die Prüfenden jederzeit wissen, wo du stehst, und dein Fazit wirklich auf deine Leitfrage antwortet.",
   "zeichen": "🎤",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie viele Hauptteile passen in eine Präsentation von sechs bis acht Minuten?",
     "opt": [
      "Drei, jeder mit einem eigenen konkreten Beispiel",
      "Zehn kurze Punkte, damit nichts fehlt",
      "Einer, den man dafür sehr ausführlich behandelt"
     ],
     "loesung": 0,
     "erklaerung": "Drei Teile mit je einem Beispiel füllen die Zeit, ohne dass der Vortrag zur Aufzählung wird."
    },
    {
     "art": "wahl",
     "frage": "Was gehört in die Einleitung einer C2-Präsentation?",
     "opt": [
      "Eine Definition aus dem Lexikon und ein paar Sätze zum eigenen Lebenslauf",
      "Ein konkreter Einstieg, die Leitfrage und ein Satz zur Gliederung",
      "Gleich das Fazit, damit die Prüfenden wissen, worauf es hinausläuft"
     ],
     "loesung": 1,
     "erklaerung": "Ein anschaulicher Anfang weckt Interesse, die Leitfrage gibt die Richtung vor, die Gliederung gibt Orientierung."
    },
    {
     "art": "wahl",
     "frage": "Thema: „Gehört das Bargeld abgeschafft?\" Welcher Einstieg ist am stärksten?",
     "opt": [
      "Seit Anbeginn der Menschheit tauschen Menschen Waren gegen Geld.",
      "Ich habe dieses Thema gewählt, weil mir das andere zu schwierig war.",
      "Neulich stand ich in einer Bäckerei hinter einer älteren Dame, die mit Münzen bezahlen wollte, und der Verkäufer zeigte nur auf ein Schild: Nur Kartenzahlung."
     ],
     "loesung": 2,
     "erklaerung": "Eine kleine, genau beobachtete Szene führt mitten ins Problem. Menschheitsgeschichte und Ausreden verschenken den Anfang."
    },
    {
     "art": "wahl",
     "frage": "Wo platzierst du die Gegenposition am besten?",
     "opt": [
      "Im Hauptteil, wenn deine eigene Position klar ist, und vor dem Fazit",
      "Ganz am Anfang, noch vor der Leitfrage",
      "Gar nicht, sie schwächt nur die eigene Meinung"
     ],
     "loesung": 0,
     "erklaerung": "Erst wenn deine Position steht, kannst du einen Einwand ernst nehmen und zeigen, warum du trotzdem bei deiner Sicht bleibst oder sie einschränkst."
    },
    {
     "art": "wahl",
     "frage": "Wie verteilst du sieben Minuten sinnvoll?",
     "opt": [
      "Drei Minuten Einleitung, drei Minuten Hauptteil, eine Minute Schluss",
      "Etwa eine Minute Einleitung, gut fünf Minuten Hauptteil, knapp eine Minute Schluss",
      "Fünf Minuten für das erste Argument, der Rest ergibt sich"
     ],
     "loesung": 1,
     "erklaerung": "Der Hauptteil trägt die Präsentation. Einleitung und Schluss sind kurz, aber nie weggelassen."
    },
    {
     "art": "wahl",
     "frage": "Wozu formulierst du am Anfang eine Leitfrage?",
     "opt": [
      "Damit der Vortrag eine Richtung hat und das Fazit auf etwas antworten kann",
      "Weil die Prüfenden sonst eine Frage stellen",
      "Um Zeit zu gewinnen"
     ],
     "loesung": 0,
     "erklaerung": "Die Leitfrage ist der rote Faden. Am Ende greifst du sie wieder auf und beantwortest sie."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, mit dem du die Gliederung ankündigst.",
     "teile": [
      "Ich",
      "gehe",
      "zunächst",
      "auf",
      "die",
      "Ursachen",
      "ein,",
      "wende",
      "mich",
      "dann",
      "den",
      "Folgen",
      "zu",
      "und",
      "schließe",
      "mit",
      "einem",
      "Vorschlag."
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
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17
     ],
     "erklaerung": "Drei Schritte in einem Satz, verbunden durch zunächst, dann und und. So hört man die Gliederung."
    },
    {
     "art": "wahl",
     "frage": "Du merkst nach vier Minuten, dass du mit allem fertig bist. Was tust du?",
     "opt": [
      "Aufhören und um Fragen bitten",
      "Den Anfang noch einmal mit anderen Worten wiederholen",
      "Ein weiteres Beispiel ausführen oder die Gegenposition gründlicher prüfen"
     ],
     "loesung": 2,
     "erklaerung": "Zu kurz ist ein Fehler bei der Aufgabenerfüllung. Ein zusätzliches Beispiel oder ein genauer geprüfter Einwand füllt die Zeit mit Substanz."
    },
    {
     "art": "wahl",
     "frage": "Was leistet ein gutes Fazit?",
     "opt": [
      "Es fasst jedes Beispiel noch einmal einzeln zusammen.",
      "Es greift die Leitfrage auf, beantwortet sie abgewogen und schließt mit einem Gedanken, der hängen bleibt.",
      "Es bringt ein ganz neues Argument, damit es interessant bleibt."
     ],
     "loesung": 1,
     "erklaerung": "Das Fazit beantwortet die Leitfrage. Eine kleine Pointe oder ein Rückgriff auf den Einstieg rundet den Vortrag ab."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, mit dem du zum letzten Hauptteil überleitest.",
     "teile": [
      "Damit",
      "komme",
      "ich",
      "zum",
      "dritten",
      "und",
      "letzten",
      "Teil",
      "meines",
      "Vortrags."
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
     "erklaerung": "Damit fasst das Vorige zusammen, dritten und letzten zeigt den Prüfenden, dass das Ende naht."
    }
   ]
  },
  {
   "id": "tc2m2",
   "stufe": 1,
   "titel": "Frei sprechen statt ablesen",
   "kurz": "Stichwortzettel, Überleitungen, Pausen: so klingt ein Vortrag gesprochen und nicht vorgelesen",
   "ziel": "Nach diesem Block nutzt du die zwanzig Minuten Vorbereitung für einen Stichwortzettel, mit dem du frei, flüssig und mit Blickkontakt sprichst.",
   "zeichen": "🗒️",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Was gehört auf deinen Stichwortzettel?",
     "opt": [
      "Der ganze Vortrag in vollständigen Sätzen",
      "Schlüsselwörter, die Beispiele und die Überleitungen, gut lesbar in wenigen Zeilen",
      "Nichts, du sollst alles auswendig können"
     ],
     "loesung": 1,
     "erklaerung": "Stichworte geben Halt, ohne dass du abliest. Ganze Sätze verführen zum Vorlesen."
    },
    {
     "art": "wahl",
     "frage": "Wie nutzt du die zwanzig Minuten Vorbereitung am besten?",
     "opt": [
      "Zehn Minuten überlegen, welches der beiden Themen besser ist",
      "Den Vortrag Wort für Wort ausformulieren",
      "Schnell ein Thema wählen, Gliederung und Beispiele sammeln, Einstieg und Schlusssatz ausformulieren"
     ],
     "loesung": 2,
     "erklaerung": "Die Themenwahl darf nur wenige Minuten kosten. Die Zeit gehört der Gliederung und den Beispielen."
    },
    {
     "art": "wahl",
     "frage": "Welche Sätze darfst du vorher wörtlich ausformulieren?",
     "opt": [
      "Den ersten und den letzten Satz",
      "Alle Sätze mit Fachwörtern",
      "Keinen einzigen"
     ],
     "loesung": 0,
     "erklaerung": "Ein sicherer Anfang nimmt die Nervosität, ein fertiger Schlusssatz verhindert, dass der Vortrag ausfranst."
    },
    {
     "art": "wahl",
     "frage": "Du verlierst mitten im Vortrag den Faden. Was tust du?",
     "opt": [
      "Dich entschuldigen und abbrechen",
      "Kurz zusammenfassen, was du bisher gesagt hast, und dabei auf den Zettel schauen",
      "Schweigen, bis es dir wieder einfällt"
     ],
     "loesung": 1,
     "erklaerung": "Eine Zusammenfassung klingt geplant und verschafft dir die Sekunden, die du brauchst."
    },
    {
     "art": "wahl",
     "frage": "Welche Überleitung klingt gesprochen und natürlich?",
     "opt": [
      "Im Folgenden wird nunmehr der zweite Aspekt erörtert.",
      "Nächster Punkt.",
      "So viel zu den Kosten. Aber Geld ist ja nicht alles, und das bringt mich zu den Menschen, die dort wohnen."
     ],
     "loesung": 2,
     "erklaerung": "Die Überleitung schließt ab, stellt eine Verbindung her und kündigt das Neue an, in einem Ton, den man hören möchte."
    },
    {
     "art": "wahl",
     "frage": "Wohin schaust du während der Präsentation?",
     "opt": [
      "Zu den Prüfenden und nur kurz auf den Zettel, um den nächsten Punkt zu holen",
      "Auf den Zettel, damit dir nichts entgeht",
      "An die Wand hinter den Prüfenden"
     ],
     "loesung": 0,
     "erklaerung": "Blickkontakt zeigt, dass du frei sprichst und dein Publikum erreichst."
    },
    {
     "art": "wahl",
     "frage": "Wie wirkt eine kurze Pause vor einem wichtigen Punkt?",
     "opt": [
      "Unsicher, man sollte ohne Unterbrechung sprechen",
      "Souverän, die Zuhörer bekommen Zeit, und der Punkt wird betont",
      "Unhöflich gegenüber den Prüfenden"
     ],
     "loesung": 1,
     "erklaerung": "Gezielte Pausen sind ein Zeichen von Sicherheit, nicht von Unsicherheit."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, mit dem du ein Beispiel einleitest.",
     "teile": [
      "Lassen",
      "Sie",
      "mich",
      "das",
      "an",
      "einem",
      "Beispiel",
      "aus",
      "meinem",
      "Alltag",
      "zeigen."
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
     "erklaerung": "Lassen Sie mich ist höflich und gesprochen. Ein Beispiel aus dem eigenen Alltag wirkt glaubwürdig."
    },
    {
     "art": "wahl",
     "frage": "Was ist besser als ein langes Äh?",
     "opt": [
      "Ein schnelles also, also, also",
      "Eine kurze stille Pause oder eine kleine Formel wie wie soll ich sagen",
      "Ein Wort auf Englisch"
     ],
     "loesung": 1,
     "erklaerung": "Stille wirkt ruhiger als Füllgeräusche. Kleine Formeln geben Zeit und klingen natürlich."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, mit dem du zur Gegenposition überleitest.",
     "teile": [
      "Bevor",
      "ich",
      "zum",
      "Schluss",
      "komme,",
      "möchte",
      "ich",
      "einen",
      "Einwand",
      "ernst",
      "nehmen."
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
     "erklaerung": "Der Nebensatz mit bevor kündigt das Ende an, der Hauptsatz zeigt, dass du die Gegenseite fair behandelst."
    }
   ]
  },
  {
   "id": "tc2m3",
   "stufe": 2,
   "titel": "Auf kritische Nachfragen reagieren",
   "kurz": "Im vertiefenden Gespräch Position halten, differenzieren, Einwände aufnehmen",
   "ziel": "Nach diesem Block reagierst du auf kritische und provozierende Fragen der Prüfenden ruhig, differenziert und mit Beispielen, statt dich zu verteidigen oder einzuknicken.",
   "zeichen": "🛡️",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Die Prüferin fragt: „Ist das nicht ein bisschen naiv?\" Welche Reaktion passt?",
     "opt": [
      "Nein, überhaupt nicht.",
      "Vielleicht haben Sie recht, ich weiß es auch nicht.",
      "Naiv wäre es, wenn ich die Kosten verschweigen würde. Ich halte es eher für realistisch, und zwar aus folgendem Grund."
     ],
     "loesung": 2,
     "erklaerung": "Du greifst das Wort der Prüferin auf, grenzt dich ab und kündigst eine Begründung an."
    },
    {
     "art": "wahl",
     "frage": "Ein Einwand der Prüfenden trifft zu. Was tust du?",
     "opt": [
      "Zugeben, was stimmt, und zeigen, warum deine Position trotzdem trägt oder wie du sie einschränkst",
      "Das Thema wechseln",
      "Deine Meinung sofort vollständig aufgeben"
     ],
     "loesung": 0,
     "erklaerung": "Auf C2 zeigt sich Souveränität darin, dass man Einwände anerkennt und die eigene Position präzisiert."
    },
    {
     "art": "wahl",
     "frage": "Du verstehst nicht genau, worauf eine Frage zielt. Was sagst du?",
     "opt": [
      "Können Sie das wiederholen?",
      "Meinen Sie damit eher die Kosten für die Stadt oder die Belastung für die Familien?",
      "Dazu kann ich leider nichts sagen."
     ],
     "loesung": 1,
     "erklaerung": "Eine gezielte Rückfrage zeigt, dass du mitdenkst, und schärft die Frage."
    },
    {
     "art": "wahl",
     "frage": "Wie gewinnst du elegant ein paar Sekunden Zeit?",
     "opt": [
      "Gute Frage!",
      "Längeres Schweigen",
      "Darüber habe ich, ehrlich gesagt, so noch nicht nachgedacht. Ich würde spontan sagen, dass"
     ],
     "loesung": 2,
     "erklaerung": "Ehrlich und gesprochen. Gute Frage ist abgenutzt, wenn man es mehrmals sagt."
    },
    {
     "art": "wahl",
     "frage": "Der Prüfer provoziert: „Dann schaffen wir den Fußball doch gleich ab.\" Wie reagierst du?",
     "opt": [
      "Das habe ich nicht gesagt!",
      "Das wäre das Kind mit dem Bade ausschütten. Mir geht es um Regeln für das Geld, nicht um das Spiel.",
      "Ja, vielleicht wäre das besser."
     ],
     "loesung": 1,
     "erklaerung": "Du nimmst die Zuspitzung gelassen, zeigst mit einer Redewendung, wo sie überzieht, und stellst deine Position klar."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz zeigt Differenzierung?",
     "opt": [
      "Das ist überall so.",
      "Das gilt für die Großstädte, auf dem Land sieht es ganz anders aus.",
      "Das kann man so oder so sehen."
     ],
     "loesung": 1,
     "erklaerung": "Du unterscheidest Fälle und machst deine Aussage dadurch genauer, nicht schwächer."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, mit dem du einem Einwand teilweise zustimmst.",
     "teile": [
      "Da",
      "muss",
      "ich",
      "Ihnen",
      "teilweise",
      "recht",
      "geben,",
      "aber",
      "eben",
      "nur",
      "teilweise."
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
     "erklaerung": "Die Wiederholung von teilweise mit eben nur macht die Einschränkung hörbar und klingt gelassen."
    },
    {
     "art": "wahl",
     "frage": "Die Prüferin fragt nach einem Beispiel. Was überzeugt am meisten?",
     "opt": [
      "Ein konkreter Fall mit Ort und Person, kurz erzählt",
      "Eine allgemeine Aussage wie das sieht man ja überall",
      "Der Verweis auf Studien, ohne sie zu nennen"
     ],
     "loesung": 0,
     "erklaerung": "Ein konkretes Beispiel macht die Aussage überprüfbar und lebendig."
    },
    {
     "art": "wahl",
     "frage": "Ein Argument der Prüfenden bringt dich wirklich ins Grübeln. Was ist auf C2 angemessen?",
     "opt": [
      "Trotzdem stur bei der ursprünglichen Meinung bleiben",
      "Offen sagen, dass dich das Argument nachdenklich macht, und deine Position genauer fassen",
      "Lachen und nichts sagen"
     ],
     "loesung": 1,
     "erklaerung": "Ein Gespräch auf hohem Niveau darf Bewegung zeigen. Wer präzisiert, wirkt souverän."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, mit dem du eine Frage zusammenfasst, bevor du antwortest.",
     "teile": [
      "Wenn",
      "ich",
      "Sie",
      "richtig",
      "verstehe,",
      "zweifeln",
      "Sie",
      "an",
      "der",
      "Finanzierung."
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
     "erklaerung": "Wer die Frage mit eigenen Worten wiedergibt, zeigt Verständnis und gewinnt Zeit."
    }
   ]
  },
  {
   "id": "tc2m4",
   "stufe": 2,
   "titel": "C2-Repertoire: Nuancen und Idiomatik",
   "kurz": "Einschränken, zugestehen, Distanz zeigen, pointiert schließen",
   "ziel": "Nach diesem Block setzt du Konzessionen, Einschränkungen, Redewendungen und vorsichtige Formulierungen so ein, dass dein Deutsch präzise und natürlich klingt.",
   "zeichen": "🗝️",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz ist eine echte Konzession?",
     "opt": [
      "Die Mieten steigen, und das ist schlecht.",
      "Zugegeben, die Mieten steigen. Daraus folgt aber noch nicht, dass man jede Brache bebauen muss.",
      "Die Mieten steigen nicht."
     ],
     "loesung": 1,
     "erklaerung": "Zugegeben räumt einen Punkt ein, aber führt zur Gegenbehauptung. So wird ein Argument stärker."
    },
    {
     "art": "wahl",
     "frage": "„Das ist ein Tropfen auf den heißen Stein.\" Was bedeutet das?",
     "opt": [
      "Das reicht bei Weitem nicht.",
      "Das ist gefährlich.",
      "Das kommt genau zur richtigen Zeit."
     ],
     "loesung": 0,
     "erklaerung": "Ein Tropfen verdampft sofort auf einem heißen Stein: Die Maßnahme ist viel zu klein für das Problem."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz schränkt eine Behauptung präzise ein?",
     "opt": [
      "Das stimmt total.",
      "Das trifft allenfalls auf einige Großstädte zu.",
      "Das ist halt so."
     ],
     "loesung": 1,
     "erklaerung": "Allenfalls bedeutet höchstens. Die Aussage wird auf wenige Fälle begrenzt."
    },
    {
     "art": "wahl",
     "frage": "„Das ist nicht unproblematisch.\" Wie ist das gemeint?",
     "opt": [
      "Das ist ganz einfach.",
      "Das ist durchaus problematisch, nur vorsichtig formuliert.",
      "Das ist gar kein Problem."
     ],
     "loesung": 1,
     "erklaerung": "Die doppelte Verneinung ist eine typische Abschwächung im gehobenen Deutsch. Gemeint ist Kritik."
    },
    {
     "art": "wahl",
     "frage": "„Das Kind mit dem Bade ausschütten\" bedeutet:",
     "opt": [
      "Mit dem Schlechten auch das Gute beseitigen",
      "Sich um Kinder kümmern",
      "Zu viel Wasser verbrauchen"
     ],
     "loesung": 0,
     "erklaerung": "Die Redewendung warnt vor übertriebenen Maßnahmen, die auch das Wertvolle zerstören."
    },
    {
     "art": "wahl",
     "frage": "In welchem Satz steht wenngleich richtig?",
     "opt": [
      "Wenngleich das Projekt ein Erfolg, es wurde teurer.",
      "Das Projekt war ein Erfolg, wenngleich es teurer wurde als geplant.",
      "Das Projekt war wenngleich ein Erfolg."
     ],
     "loesung": 1,
     "erklaerung": "Wenngleich leitet einen Nebensatz ein wie obwohl, das Verb steht am Ende. Es klingt gehobener."
    },
    {
     "art": "ordnen",
     "frage": "Bau einen Satz, der eine Sache relativiert.",
     "teile": [
      "So",
      "gesehen",
      "ist",
      "die",
      "Sache",
      "weniger",
      "eindeutig,",
      "als",
      "sie",
      "zunächst",
      "scheint."
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
     "erklaerung": "So gesehen knüpft an das Vorige an, weniger als zunächst relativiert den ersten Eindruck."
    },
    {
     "art": "wahl",
     "frage": "„Die Stadt will das Problem bis zum Sommer gelöst haben.\" Was drückt will hier aus?",
     "opt": [
      "Einen Wunsch der Stadt für die Zukunft",
      "Eine Behauptung der Stadt, an der der Sprecher zweifelt",
      "Einen Befehl"
     ],
     "loesung": 1,
     "erklaerung": "Wollen mit Infinitiv Perfekt gibt eine Behauptung wieder und zeigt Distanz."
    },
    {
     "art": "wahl",
     "frage": "Welcher Schlusssatz hat eine Pointe und bleibt hängen?",
     "opt": [
      "Zusammenfassend lässt sich sagen, dass das Thema wichtig ist.",
      "Das Geld liegt eben nicht auf der Straße. Es parkt dort.",
      "Das war mein Vortrag, danke."
     ],
     "loesung": 1,
     "erklaerung": "Die Pointe spielt mit einer bekannten Redewendung und fasst die Kritik an parkenden Autos in zwei Sätzen."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, mit dem du einem Einzelfall die Beweiskraft absprichst.",
     "teile": [
      "Das",
      "mag",
      "im",
      "Einzelfall",
      "stimmen,",
      "als",
      "Regel",
      "taugt",
      "es",
      "jedoch",
      "kaum."
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
     "erklaerung": "Mag räumt ein, jedoch schränkt ein. Taugen ist gehoben und sehr präzise."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "erzaehlen",
   "name": "Präsentation",
   "kurz": "Sechs bis acht Minuten frei",
   "was": "Du präsentierst ein gesellschaftliches oder kulturelles Thema sechs bis acht Minuten lang, frei und gut gegliedert, mit Beispielen und Gegenposition.",
   "tipp": "Nur Stichworte auf den Zettel. Kündige die Gliederung an und fasse am Ende in zwei Sätzen zusammen.",
   "zeichen": "🎤",
   "farbe": "turq",
   "punkte": 8,
   "runden": [
    {
     "id": "tc2m1r1",
     "thema": "Brauchen Städte mehr Platz für Kinder?",
     "karten": [
      {
       "kopf": "Teil 1 · Präsentation",
       "kopfb": "Dein Thema",
       "auftrag": [
        "Präsentiere sechs bis acht Minuten frei, mit klarer Gliederung.",
        "Bring Beispiele und eine Gegenposition.",
        "Beantworte danach die Nachfrage."
       ],
       "id": "tc2m1k1",
       "thema": "Brauchen Städte mehr Platz für Kinder?",
       "punkte": [
        "Wo Kinder heute in der Stadt vorkommen",
        "Was ihnen fehlt und warum",
        "Gelungene Beispiele",
        "Einwände: Wohnungsbau, Lärm, Verkehr",
        "Fazit und Vorschlag"
       ],
       "mustervortrag": "Als ich vor ein paar Jahren mit meiner Nichte durch die Leipziger Südvorstadt gelaufen bin, hat sie mich etwas gefragt, das mich bis heute beschäftigt. Sie war damals sieben, zeigte auf eine Reihe parkender Autos und wollte wissen, warum die Autos so viel Platz bekommen und sie selbst nur den schmalen Streifen daneben. Ich hatte keine gute Antwort. Und genau um diese Frage soll es heute gehen: Brauchen unsere Städte mehr Platz für Kinder? Ich sage gleich vorweg, dass ich die Frage mit Ja beantworte, aber nicht ganz so, wie man vielleicht erwartet. Ich gehe in drei Schritten vor. Zuerst schaue ich mir an, wo Kinder heute in der Stadt überhaupt vorkommen. Dann frage ich, was ihnen fehlt und warum. Und schließlich nehme ich die Einwände ernst, bevor ich zu einem Vorschlag komme. Fangen wir mit dem Bestand an. Wenn man Stadtplaner fragt, wo Kinder in der Stadt ihren Platz haben, bekommt man fast immer dieselbe Antwort: auf dem Spielplatz. Der Spielplatz ist so etwas wie das Reservat der Kindheit. Eingezäunt, mit Fallschutzmatten, einem Schild mit Altersangaben und einer Bank für die Eltern. Ich will Spielplätze nicht schlechtreden, ich habe als Kind selbst ganze Nachmittage auf einem Klettergerüst verbracht. Aber wenn das die einzige Antwort ist, dann heißt das im Umkehrschluss: Überall sonst sind Kinder eigentlich nicht vorgesehen. Auf dem Gehweg stören sie, auf dem Platz vor der Kirche ist Ballspielen verboten, und auf der Straße ist es schlicht gefährlich. Damit bin ich beim zweiten Punkt, nämlich bei dem, was fehlt. Was fehlt, ist weniger Fläche als Bewegungsfreiheit. Eine Verkehrsforscherin aus Kassel, Ulrike Brandes, hat vor einigen Jahren untersucht, wie weit sich Grundschulkinder allein von ihrer Wohnung entfernen dürfen. Ihr Ergebnis war ziemlich ernüchternd. Die Großeltern dieser Kinder durften im selben Alter noch durch halbe Stadtviertel streifen, die Kinder von heute kommen im Schnitt kaum bis zur nächsten Straßenecke. Das liegt nicht daran, dass die Eltern ängstlicher geworden wären, jedenfalls nicht nur. Es liegt daran, dass die Wege tatsächlich gefährlicher sind. Mehr Autos, breitere Fahrbahnen, kürzere Grünphasen. Ein Kind, das allein zum Bäcker gehen will, muss heute oft an drei Ampeln vorbei, an denen es selbst Erwachsene eilig haben. Was bedeutet das? Kinder lernen ihre Umgebung nicht mehr selbst kennen, sie sitzen auf dem Rücksitz. Sie werden zum Fußball gefahren, zur Musikschule, zur Freundin zwei Straßen weiter. Eine Freundin von mir in Köln fährt ihren Sohn jeden Morgen achthundert Meter zur Schule, nicht aus Bequemlichkeit, sondern weil sie der Kreuzung vor dem Schultor nicht traut. Und damit trägt sie natürlich selbst zu dem Verkehr bei, vor dem sie ihr Kind schützen will. Das ist ein Teufelskreis, den keine einzelne Familie durchbrechen kann. Es gibt aber Beispiele dafür, dass es anders geht. Im spanischen Pontevedra hat man die Innenstadt weitgehend für Autos gesperrt, und plötzlich sieht man dort wieder Kinder, die allein unterwegs sind. Näher liegt ein Beispiel aus Hamburg: In einigen Vierteln werden die Straßen vor Grundschulen morgens für eine halbe Stunde gesperrt. Das kostet fast nichts, ein paar Schilder und ein paar engagierte Eltern, und die Wirkung ist erstaunlich. Jetzt höre ich schon die Einwände, und sie sind nicht dumm. Der erste lautet: Wir haben Wohnungsnot, jeder freie Quadratmeter wird für Wohnungen gebraucht. Das stimmt. Nur geht es mir gar nicht um neue Flächen, sondern darum, Flächen umzuverteilen, die es schon gibt. Ein geparktes Auto steht den größten Teil des Tages still und belegt dabei ungefähr so viel Raum wie ein Kinderzimmer. Der zweite Einwand ist der Lärm. Wer schon einmal neben einem Bolzplatz gewohnt hat, weiß, wovon ich rede, und ich gebe zu, dass Kinderlärm anstrengend sein kann. Aber eine Stadt, in der man keine Kinder mehr hört, ist auch keine besonders lebendige Stadt. Der dritte Einwand betrifft Handwerker, Pflegedienste und Lieferverkehr. Da bin ich ganz pragmatisch: Es geht nicht darum, jede Straße zu sperren, sondern darum, in jedem Viertel einige Wege so zu gestalten, dass ein Kind sie allein gehen kann. Ich komme zum Schluss. Brauchen Städte mehr Platz für Kinder? Ja, aber wir sollten aufhören, diesen Platz nur als eingezäunten Spielplatz zu denken. Eine kinderfreundliche Stadt ist eine, in der ein Achtjähriger allein zum Bäcker gehen kann und auf dem Rückweg noch fünf Minuten auf einer Mauer sitzen darf. Davon profitieren übrigens auch ältere Menschen, die langsamer gehen, und Leute im Rollstuhl. Meine Nichte ist inzwischen vierzehn. Neulich hat sie mir erzählt, dass ihre Straße jetzt eine Spielstraße ist. Auf meine Frage, ob das etwas geändert hat, kam eine Antwort, die typisch für ihr Alter war: Zu spät für mich, aber für die Kleinen super. Ich finde, das ist kein schlechtes Fazit.",
       "frage": "Sie sprechen von Umverteilung. Ist es nicht ziemlich bequem, das Auto zum Feindbild zu machen, wenn viele Menschen beruflich darauf angewiesen sind?",
       "musterantwort": "Den Vorwurf nehme ich ernst, denn ich fahre selbst Auto, wenn ich meine Mutter im Westerwald besuche. Ein Feindbild ist das Auto für mich nicht. Mein Punkt ist bescheidener: Wir haben uns daran gewöhnt, dass öffentlicher Raum zuerst dem Abstellen von Fahrzeugen dient, und wir fragen kaum noch, ob das sinnvoll ist. Wer beruflich auf das Auto angewiesen ist, der Handwerker oder die Pflegekraft, profitiert sogar davon, wenn weniger Leute für kurze Wege fahren. Er kommt schneller durch und findet eher einen Parkplatz. Ich würde also sagen, es geht nicht gegen das Auto, sondern gegen die Selbstverständlichkeit, mit der wir ihm die Straße überlassen."
      }
     ]
    },
    {
     "id": "tc2m1r2",
     "thema": "Sollte ehrenamtliches Engagement stärker belohnt werden?",
     "karten": [
      {
       "kopf": "Teil 1 · Präsentation",
       "kopfb": "Dein Thema",
       "auftrag": [
        "Präsentiere sechs bis acht Minuten frei, mit klarer Gliederung.",
        "Bring Beispiele und eine Gegenposition.",
        "Beantworte danach die Nachfrage."
       ],
       "id": "tc2m1k2",
       "thema": "Sollte ehrenamtliches Engagement stärker belohnt werden?",
       "punkte": [
        "Was das Ehrenamt heute leistet",
        "Probleme: Nachwuchs, Bürokratie, Zeit",
        "Formen der Belohnung",
        "Gegenposition: Verliert das Ehrenamt seinen Charakter?",
        "Fazit"
       ],
       "mustervortrag": "Ich möchte mit einer kleinen Rechnung anfangen, die mir ein Freund von der freiwilligen Feuerwehr in meinem Heimatdorf in der Eifel einmal aufgemacht hat. Er ist seit über zwanzig Jahren dabei, und er hat ausgerechnet, dass er in dieser Zeit ungefähr ein ganzes Arbeitsjahr mit Einsätzen, Übungen und Lehrgängen verbracht hat. Unbezahlt, versteht sich. Als ich ihn gefragt habe, ob ihn das ärgert, hat er gelacht und gesagt: Mich nicht, aber meine Frau. Diese Antwort trifft ziemlich genau das Thema, über das ich heute sprechen möchte, nämlich die Frage, ob ehrenamtliches Engagement stärker belohnt werden sollte. Ich gliedere meinen Vortrag in vier Teile. Zuerst sage ich etwas dazu, was das Ehrenamt eigentlich leistet. Dann geht es um die Probleme, die Vereine und Initiativen im Moment haben. Im dritten Teil stelle ich verschiedene Formen der Belohnung vor, und am Ende frage ich, ob Belohnung das Ehrenamt nicht gerade zerstört. Also zuerst: Was leistet das Ehrenamt? Man vergisst es leicht, weil es so selbstverständlich ist. Der Trainer, der dienstags die Jugendmannschaft betreut, die Frau, die bei der Tafel Lebensmittel sortiert, die Leute vom Rettungsdienst, die Lesepaten in den Grundschulen, die Schöffen am Gericht. Ungefähr jeder dritte Erwachsene engagiert sich irgendwo freiwillig. Müsste man diese Arbeit bezahlen, könnte kein Haushalt die Kosten stemmen. In vielen Dörfern gäbe es schlicht keine Feuerwehr mehr, denn Berufsfeuerwehren gibt es nur in größeren Städten. Damit komme ich zu den Problemen. Die Zahl der Engagierten ist gar nicht so stark gesunken, wie oft behauptet wird. Verändert hat sich vor allem die Art des Engagements. Viele Menschen setzen sich lieber für ein konkretes Projekt ein, für ein halbes Jahr, für eine geflüchtete Familie, für ein Sommerfest, als sich für zwanzig Jahre an einen Vorstandsposten zu binden. Ich habe das selbst erlebt. In unserem Chor in Bonn suchen wir seit zwei Jahren einen Kassenwart. Alle singen gern, niemand will die Steuererklärung des Vereins machen. Und wer kann es ihnen verdenken? Die Bürokratie ist enorm gewachsen, von Datenschutzregeln bis zu Hygienevorschriften beim Kuchenverkauf. Hinzu kommt die Zeit. Wer Vollzeit arbeitet, Kinder hat und vielleicht noch einen Elternteil pflegt, hat abends einfach keine Kraft mehr für die Jahreshauptversammlung. Wie könnte man nun belohnen? Es gibt mehrere Ideen, und sie unterscheiden sich ziemlich stark. Die naheliegende ist Geld, etwa eine höhere steuerfreie Ehrenamtspauschale. Eine zweite Idee kommt aus der Rentenpolitik: Wer zum Beispiel zehn Jahre bei der Feuerwehr oder im Katastrophenschutz war, bekommt zusätzliche Rentenpunkte. Eine dritte Möglichkeit sind Vergünstigungen, also eine Ehrenamtskarte, mit der man günstiger ins Schwimmbad oder ins Museum kommt. Und schließlich gibt es die Anerkennung im Beruf, etwa wenn ein Arbeitgeber für Einsätze freistellt oder wenn ehrenamtliche Erfahrung bei einer Bewerbung zählt. Jetzt zur Gegenposition, und die lässt sich nicht so leicht vom Tisch wischen. Ehrenamt heißt ja gerade, dass man etwas ohne Gegenleistung tut. Psychologen sprechen vom Verdrängungseffekt: Wer für eine Sache, die er aus Überzeugung tut, plötzlich Geld bekommt, verliert unter Umständen seine innere Motivation. Es gibt dazu ein berühmtes Experiment mit Kindergärten, in denen man Eltern eine kleine Strafe für verspätetes Abholen auferlegt hat. Das Ergebnis: Die Eltern kamen noch später, weil sie die Verspätung nun als bezahlte Dienstleistung betrachteten. Übertragen auf das Ehrenamt hieße das: Wenn ich für meine Stunden bei der Tafel fünf Euro bekomme, fange ich vielleicht an zu rechnen, ob sich das lohnt. Und dann lohnt es sich natürlich nicht. Ich halte diesen Einwand für berechtigt, aber er betrifft vor allem eine Form der Belohnung, nämlich das direkte Geld. Bei den anderen Formen sehe ich die Gefahr viel weniger. Niemand geht zur Feuerwehr, nur weil er dafür in dreißig Jahren ein paar Euro mehr Rente bekommt. Aber wer ohnehin überlegt, gibt sich vielleicht eher einen Ruck. Und vor allem: Die wirksamste Belohnung wäre vermutlich gar keine Prämie, sondern Entlastung. Weniger Formulare, eine Beratungsstelle für Vereinsvorstände, Arbeitgeber, die einen Einsatz nicht als Fehltag betrachten. Mein Fazit lautet deshalb: Ja, das Ehrenamt sollte stärker belohnt werden, aber nicht in erster Linie mit Geld. Was die Menschen brauchen, ist das Gefühl, dass ihr Engagement gesehen wird und dass man ihnen keine Steine in den Weg legt. Mein Freund von der Feuerwehr hat übrigens neulich gesagt, er wünsche sich gar keine Prämie. Er wünsche sich nur, dass sein Chef nicht jedes Mal die Augen verdreht, wenn der Piepser losgeht. Ich glaube, damit hat er mehr über das Thema gesagt als manches Gutachten.",
       "frage": "Wenn der Staat das Ehrenamt belohnt, entlastet er sich dann nicht auf Kosten der Freiwilligen? Müsste er diese Aufgaben nicht selbst bezahlen?",
       "musterantwort": "Das ist der heikelste Punkt, und ich habe darauf keine glatte Antwort. Es gibt tatsächlich Bereiche, in denen Ehrenamtliche Lücken füllen, die eigentlich der Staat schließen müsste. Wenn bei der Tafel Rentner Lebensmittel an andere Rentner verteilen, weil die Grundsicherung nicht reicht, dann ist das kein schönes Zeichen von Gemeinsinn, sondern ein Armutszeugnis. Dort würde ich sagen: Belohnung darf kein Ersatz für eine ordentliche Sozialpolitik sein. Beim Sportverein, beim Chor oder beim Heimatmuseum sehe ich das anders. Das sind keine Aufgaben, die der Staat übernehmen sollte, sondern Dinge, die eine Gesellschaft aus eigenem Antrieb trägt. Die muss man nicht verstaatlichen, man muss sie nur gut behandeln."
      }
     ]
    },
    {
     "id": "tc2m1r3",
     "thema": "Ist Mehrsprachigkeit in der Familie ein Geschenk oder eine Last?",
     "karten": [
      {
       "kopf": "Teil 1 · Präsentation",
       "kopfb": "Dein Thema",
       "auftrag": [
        "Präsentiere sechs bis acht Minuten frei, mit klarer Gliederung.",
        "Bring Beispiele und eine Gegenposition.",
        "Beantworte danach die Nachfrage."
       ],
       "id": "tc2m1k3",
       "thema": "Ist Mehrsprachigkeit in der Familie ein Geschenk oder eine Last?",
       "punkte": [
        "Persönlicher Zugang und Begriffsklärung",
        "Vorteile: Sprache, Denken, Zugehörigkeit",
        "Schwierigkeiten: Druck, Scham, Sprachverlust",
        "Rolle von Schule und Gesellschaft",
        "Fazit"
       ],
       "mustervortrag": "Bei uns zu Hause gab es eine Regel, die meine Mutter aufgestellt hatte und an die sich keiner von uns Kindern gehalten hat. Sie lautete: Mit Mama wird Portugiesisch gesprochen, mit Papa Deutsch, und beim Abendessen darf jeder sprechen, wie er will. In der Praxis haben mein Bruder und ich spätestens ab der dritten Klasse nur noch Deutsch geredet, auch mit meiner Mutter, und sie hat geduldig auf Portugiesisch geantwortet. Ich erzähle das, weil es zeigt, wie wenig sich Mehrsprachigkeit planen lässt, und weil es mich direkt zu meiner Frage führt: Ist es ein Geschenk oder eine Last, wenn Kinder in einer Familie mit mehreren Sprachen aufwachsen? Ich möchte zuerst kurz klären, wovon ich spreche. Danach gehe ich auf die Vorteile ein, dann auf die Schwierigkeiten, und zum Schluss frage ich, welche Rolle Schule und Gesellschaft dabei spielen. Mit Mehrsprachigkeit in der Familie meine ich nicht den Fall, dass wohlhabende Eltern ihr Kind in eine englischsprachige Kita schicken. Ich meine Familien, in denen zu Hause eine andere Sprache gesprochen wird als draußen, oder in denen die Eltern verschiedene Sprachen mitbringen. In Deutschland betrifft das inzwischen ungefähr jedes dritte Kind unter sechs Jahren, in manchen Stadtteilen von Offenbach oder Duisburg ist es die große Mehrheit. Zu den Vorteilen. Der offensichtlichste ist, dass ein Kind zwei oder drei Sprachen ohne Vokabelheft lernt. Ich habe Portugiesisch nie gepaukt, ich kann es einfach, wenn auch mit einem Wortschatz, der eher in die Küche passt als in den Hörsaal. Weniger offensichtlich, aber gut belegt ist der Vorteil beim Denken. Kinder, die ständig zwischen Sprachen wechseln, lernen früh, dass ein Ding mehrere Namen haben kann und dass Sprache etwas Gemachtes ist. Sprachwissenschaftler nennen das metasprachliches Bewusstsein. Ich nenne es lieber den Moment, in dem ein Fünfjähriger merkt, dass die Oma einen Witz nicht versteht, weil er auf Deutsch nicht funktioniert. Und dann ist da noch die Zugehörigkeit. Wer die Sprache seiner Großeltern spricht, kann mit ihnen über ihr Leben reden. Meine Großmutter in Porto hat mir Geschichten aus der Zeit der Diktatur erzählt, die sie meinem Vater nie hätte erzählen können, einfach weil er sie nicht verstanden hätte. Damit bin ich bei den Schwierigkeiten, und die will ich nicht kleinreden. Die erste ist der Druck auf die Eltern. Viele Eltern haben Angst, dass ihr Kind keine Sprache richtig lernt, wenn es zwei hört. Diese Angst ist wissenschaftlich weitgehend unbegründet, aber sie ist real, und sie wurde jahrzehntelang sogar von Kinderärzten genährt. Eine türkische Bekannte hat mir erzählt, dass man ihr in den achtziger Jahren geraten hat, mit ihrem Sohn nur noch Deutsch zu sprechen. Ihr Deutsch war damals holprig. Das Ergebnis war, dass der Sohn mit seiner Mutter in einer Sprache aufwuchs, die keiner der beiden wirklich beherrschte. Die zweite Schwierigkeit ist die Scham. Kinder wollen nicht auffallen. Wenn die Herkunftssprache in der Schule als Problem gilt und nicht als Fähigkeit, dann wollen sie sie irgendwann nicht mehr sprechen. Das habe ich bei meinem Bruder erlebt. Und die dritte Schwierigkeit ist der schleichende Verlust. In der dritten Generation besteht die Familiensprache oft nur noch aus ein paar Liedern und Schimpfwörtern. Was bedeutet das für Schule und Gesellschaft? Hier liegt, glaube ich, der eigentliche Hebel. Es gibt nämlich eine merkwürdige Rangordnung der Sprachen. Ein Kind, das Englisch und Deutsch spricht, gilt als begabt. Ein Kind, das Arabisch und Deutsch spricht, gilt als förderbedürftig. Dabei ist die geistige Leistung dieselbe. Ein Gymnasium in Mannheim bietet seit einigen Jahren Türkisch als zweite Fremdsprache bis zum Abitur an, und die Lehrerin dort hat mir erzählt, dass manche Schüler zum ersten Mal stolz auf etwas waren, das sie bis dahin eher versteckt hatten. Nun könnte man einwenden, dass die Schule genug damit zu tun hat, allen Kindern ordentliches Deutsch beizubringen. Das ist richtig, und ich würde nie behaupten, dass Deutsch zweitrangig ist. Wer hier lebt, braucht die Landessprache, um mitreden zu können, im wörtlichen und im übertragenen Sinn. Aber das ist kein Gegensatz. Kinder, die ihre Erstsprache gut beherrschen, lernen nach allem, was wir wissen, auch die Zweitsprache besser. Mein Fazit fällt also eindeutig aus, wenn auch mit Einschränkungen. Mehrsprachigkeit ist ein Geschenk, allerdings eines, das man pflegen muss, sonst geht es kaputt. Zur Last wird sie, wenn Familien damit allein gelassen werden oder wenn man ihnen einredet, ihre Sprache sei weniger wert. Meine Mutter hat übrigens am Ende gewonnen. Mit dreißig habe ich angefangen, mit ihr Portugiesisch zu sprechen. Sie hat so getan, als sei das nichts Besonderes, und nach dem Telefonat hat sie geweint, wie mir mein Vater später verraten hat.",
       "frage": "Sie sprechen von Ihrer eigenen Familie. Ist das nicht ein ziemlich privilegierter Fall? Portugiesisch hat ja ein anderes Ansehen als manche anderen Sprachen.",
       "musterantwort": "Da haben Sie völlig recht, und ich habe das als Kind auch gespürt, wenn auch eher indirekt. Portugiesisch war in meiner Grundschule exotisch, aber nie verdächtig. Eine Klassenkameradin, deren Familie Kurdisch sprach, hat ihre Sprache dagegen regelrecht versteckt. Mein Beispiel ist also eher der günstige Fall, und gerade deshalb finde ich es aufschlussreich. Wenn selbst unter guten Bedingungen die Familiensprache so leicht verloren geht, wie viel schwerer muss es dann sein, wenn die Umgebung sie abwertet? Insofern spricht mein Fall eher für das, was ich über die Rangordnung der Sprachen gesagt habe, als dagegen."
      }
     ]
    },
    {
     "id": "tc2m1r4",
     "thema": "Wie wollen wir im Alter wohnen?",
     "karten": [
      {
       "kopf": "Teil 1 · Präsentation",
       "kopfb": "Dein Thema",
       "auftrag": [
        "Präsentiere sechs bis acht Minuten frei, mit klarer Gliederung.",
        "Bring Beispiele und eine Gegenposition.",
        "Beantworte danach die Nachfrage."
       ],
       "id": "tc2m1k4",
       "thema": "Wie wollen wir im Alter wohnen?",
       "punkte": [
        "Ausgangslage: viel Platz am falschen Ort",
        "Das eigene Zuhause als Ideal und seine Grenzen",
        "Alternativen: Wohngemeinschaft, Mehrgenerationenhaus, Wohnungstausch",
        "Einwände: Kosten und Eigenheiten",
        "Fazit"
       ],
       "mustervortrag": "Meine Tante Hildegard wohnt seit dreiundfünfzig Jahren in einem Reihenhaus in Gelsenkirchen. Sie ist sechsundachtzig, ihr Mann ist vor zwölf Jahren gestorben, die Kinder leben in München und Hamburg, und von den hundertvierzig Quadratmetern nutzt sie eigentlich nur noch die Küche, das Wohnzimmer und das kleine Bad im Erdgeschoss. Ins Schlafzimmer im ersten Stock geht sie nicht mehr, seit sie auf der Treppe gestürzt ist. Sie schläft auf dem Sofa. Wenn man sie fragt, ob sie nicht umziehen möchte, sagt sie: Hier trägt man mich mal raus, aber vorher nicht. Ich glaube, viele von uns kennen eine solche Tante, und viele von uns werden selbst einmal so eine Tante sein. Deshalb möchte ich heute über die Frage sprechen, wie wir im Alter wohnen wollen. Ich gehe in vier Schritten vor. Zuerst skizziere ich die Ausgangslage. Danach frage ich, warum das eigene Zuhause für so viele Menschen das Ideal ist und wo dieses Ideal an Grenzen stößt. Im dritten Teil stelle ich Alternativen vor, und schließlich bespreche ich die Einwände, bevor ich zu einem Fazit komme. Die Ausgangslage ist schnell beschrieben. In den nächsten fünfzehn Jahren gehen die geburtenstarken Jahrgänge in Rente, und viele von ihnen leben in Wohnungen und Häusern, die für Familien gebaut wurden. Gleichzeitig suchen junge Familien in den Städten verzweifelt nach genau solchen Wohnungen. Wir haben also auf der einen Seite zu viel Platz und auf der anderen zu wenig, und zwar oft in derselben Straße. Hinzu kommt, dass kaum eine dieser Wohnungen barrierefrei ist. Schwellen, enge Bäder, Treppen ohne Aufzug. Warum wollen trotzdem so viele Menschen in ihrer Wohnung bleiben? Ich glaube, es geht weniger um Quadratmeter als um Geschichte. In einem Haus, in dem man vierzig Jahre gelebt hat, hängt an jeder Wand eine Erinnerung. Meine Tante kann zu jedem Kratzer im Türrahmen erzählen, welches Kind ihn verursacht hat. Und es geht um Selbstbestimmung. Wer zu Hause wohnt, entscheidet selbst, wann er aufsteht und was er isst. Das Pflegeheim dagegen steht für viele für das Gegenteil, für Mittagessen um halb zwölf und Besuch nach Plan. Insofern ist der Wunsch, zu bleiben, völlig verständlich. Nur hat das Ideal eine Schattenseite, und die heißt Einsamkeit. Eine Untersuchung der Universität Hildesheim hat gezeigt, dass viele Hochbetagte, die allein leben, an manchen Tagen mit keinem einzigen Menschen sprechen. Meine Tante redet morgens mit der Verkäuferin in der Bäckerei und abends mit mir am Telefon. Dazwischen läuft der Fernseher. Was wären die Alternativen? Die erste, die in den letzten Jahren viel Aufmerksamkeit bekommen hat, ist die Wohngemeinschaft im Alter. Mehrere ältere Menschen mieten gemeinsam eine große Wohnung, jeder hat sein eigenes Zimmer, Küche und Wohnzimmer werden geteilt, und oft teilt man sich auch einen Pflegedienst. Ich habe eine solche Wohngemeinschaft in Freiburg besucht. Fünf Frauen und ein Mann, alle über siebzig, und der Mann hatte, wie er mir lachend erzählte, mit dreiundsiebzig endlich gelernt, eine Spülmaschine richtig einzuräumen. Die zweite Alternative ist das Mehrgenerationenhaus, in dem Familien, Alleinstehende und Ältere unter einem Dach leben und sich gegenseitig helfen. Der Rentner holt die Kinder vom Kindergarten ab, die Studentin trägt ihm dafür die Getränkekisten hoch. Und dann gibt es noch eine ganz nüchterne Lösung, den Wohnungstausch. Einige Genossenschaften bieten älteren Mietern an, ihre große Wohnung gegen eine kleinere im selben Viertel zu tauschen, ohne dass die Miete steigt. Natürlich gibt es Einwände. Der erste ist das Geld. Barrierefreie Neubauten sind teuer, und wer eine kleine Rente hat, kann sich die hübsche Wohngemeinschaft in Freiburg nicht leisten. Das stimmt, und gerade deshalb halte ich den Wohnungstausch für unterschätzt, weil er fast nichts kostet. Der zweite Einwand ist grundsätzlicher. Nicht jeder Mensch ist für das Zusammenleben gemacht. Wer sein Leben lang allein gewohnt hat, will mit achtzig nicht plötzlich über den Putzplan diskutieren. Das sehe ich genauso, und ich würde niemanden in eine Gemeinschaft drängen wollen. Es geht mir nicht um ein neues Ideal, das für alle gilt, sondern um Wahlmöglichkeiten, die es heute schlicht nicht gibt. Damit bin ich bei meinem Fazit. Wie wollen wir im Alter wohnen? Die ehrliche Antwort lautet wohl: so selbstbestimmt wie möglich und so wenig allein wie nötig. Dafür brauchen wir mehr als die Wahl zwischen dem viel zu großen Haus und dem Pflegeheim. Und wir sollten uns die Frage stellen, solange wir noch Treppen steigen können. Meine Tante hat sich übrigens inzwischen eine Untermieterin genommen, eine junge Pflegeschülerin aus Kerala. Sie wohnt im ersten Stock, zahlt wenig Miete und trinkt abends mit meiner Tante Tee. Umgezogen ist meine Tante also nicht. Aber allein ist sie auch nicht mehr.",
       "frage": "Sie sagen, man sollte sich die Frage früh stellen. Aber wer mit sechzig über das Wohnen im Alter nachdenkt, fühlt sich doch sofort alt. Ist das realistisch?",
       "musterantwort": "Vermutlich nicht, und ehrlich gesagt verdränge ich das Thema für mich selbst auch ziemlich erfolgreich. Ich glaube aber, dass man die Frage anders stellen muss. Wer mit sechzig überlegt, ob er das Bad ohne Schwelle umbauen lässt oder ob er später mit Freunden zusammenziehen könnte, denkt ja nicht über das Pflegeheim nach. Er denkt darüber nach, wie er möglichst lange gut leben kann. Das ist eher Lebensplanung als Abschied. Vielleicht hilft auch die Erfahrung mit den eigenen Eltern. Wer miterlebt hat, wie schwer ein Umzug mit fünfundachtzig ist, plant oft ganz von allein etwas früher."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "erzaehlen",
   "name": "Vertiefendes Gespräch",
   "kurz": "Sieben bis neun Minuten Fragen und Diskussion",
   "was": "Die Prüfenden fragen nach, hinterfragen deine Position und bringen neue Aspekte. Du antwortest differenziert und spontan.",
   "tipp": "Einwände nicht abwehren: „Da haben Sie einen Punkt, nur …\". Und ruhig zugeben, wo eine Frage offen bleibt.",
   "zeichen": "💬",
   "farbe": "gold",
   "punkte": 8,
   "runden": [
    {
     "id": "tc2m2r1",
     "thema": "Brauchen Städte mehr Platz für Kinder?",
     "karten": [
      {
       "kopf": "Teil 2 · Vertiefendes Gespräch",
       "kopfb": "Fragen der Prüfenden",
       "auftrag": [
        "Antworte auf die Fragen ausführlich und differenziert.",
        "Halte deine Position, nimm Einwände auf.",
        "Reagiere spontan auf neue Fragen."
       ],
       "id": "tc2m2k1",
       "thema": "Brauchen Städte mehr Platz für Kinder?",
       "text": "Spielen Kinder heute nicht ohnehin lieber am Bildschirm als draußen?\nWer soll über die Gestaltung von Plätzen bestimmen: die Planer, die Eltern oder die Kinder selbst?\nWie war das in Ihrer eigenen Kindheit, und verklären wir die Vergangenheit nicht ein wenig?",
       "quelle": "Fragen der Prüfenden",
       "punkte": [
        "Position halten und differenzieren",
        "Beispiele geben",
        "Einwände aufnehmen",
        "Spontan und flüssig reagieren"
       ],
       "mustervortrag": "Das Bild vom Kind, das lieber am Bildschirm sitzt, halte ich für halb richtig. Natürlich ziehen Tablets Kinder an. Aber ich bin nicht sicher, ob da Ursache und Wirkung nicht vertauscht sind. Wenn draußen nichts los ist und kein anderes Kind auf der Straße spielt, dann ist der Bildschirm eben die bequemere Wahl. Ich habe letzten Sommer bei Freunden in einer autofreien Siedlung in Tübingen gewohnt, und dort waren die Kinder abends kaum ins Haus zu bekommen. Dieselben Kinder schauen in ihrer alten Stadtwohnung stundenlang Videos, hat mir die Mutter erzählt. Wer soll bestimmen? Ich würde sagen, die Kinder sollen mitreden, aber nicht allein entscheiden. In einigen Gemeinden gibt es Kinderparlamente, und die Erfahrungen sind gemischt. Manchmal wünschen sich Kinder einfach ein riesiges Trampolin, was verständlich ist, aber noch keine Stadtplanung ersetzt. Was Kinder dagegen sehr gut können, ist zeigen, wo sie sich unsicher fühlen. Wenn man mit einer Grundschulklasse den Schulweg abläuft und die Kinder die gefährlichen Stellen markieren lässt, lernen Planer in einer Stunde mehr als aus mancher Verkehrszählung. Und zur dritten Frage: Ja, wir verklären unsere Kindheit, das gebe ich gern zu. Ich bin in einem Dorf im Sauerland aufgewachsen, und wenn ich davon erzähle, klingt es nach Bullerbü. Wir waren den ganzen Nachmittag im Wald, und niemand wusste, wo wir waren. Was ich dabei gern weglasse: Ein Junge aus meiner Klasse ist auf der Landstraße von einem Traktor erfasst worden und hatte großes Glück, dass er überlebt hat. Die gute alte Zeit war also alles andere als ungefährlich. Trotzdem steckt in der Erinnerung etwas Wahres. Wir hatten Räume, die nicht für uns gemacht waren und die wir uns trotzdem genommen haben. Eine Baulücke, einen Bach, einen Schuppen, den keiner mehr brauchte. Genau das fehlt Kindern in der Stadt heute. Nicht der perfekt gestaltete Spielplatz, sondern ein Ort, an dem ihnen niemand sagt, wie man ihn benutzen soll.",
       "frage": "Angenommen, Sie dürften in einer Großstadt über ein einziges Projekt entscheiden. Welches wäre das?",
       "musterantwort": "Ich würde die Straßen vor allen Grundschulen umbauen, und zwar so, dass morgens und mittags kein Auto mehr bis vor das Tor fahren kann. Das klingt bescheiden, hätte aber eine große Wirkung. Kinder könnten wieder allein zur Schule gehen, die Eltern müssten sie nicht mehr bringen, und damit fiele ein guter Teil genau des Verkehrs weg, vor dem die Kinder geschützt werden sollen. Außerdem ist so ein Projekt sichtbar. Wenn die Leute sehen, dass es funktioniert und dass niemand im Stau verhungert, wächst die Bereitschaft für den nächsten Schritt."
      }
     ]
    },
    {
     "id": "tc2m2r2",
     "thema": "Sollte ehrenamtliches Engagement stärker belohnt werden?",
     "karten": [
      {
       "kopf": "Teil 2 · Vertiefendes Gespräch",
       "kopfb": "Fragen der Prüfenden",
       "auftrag": [
        "Antworte auf die Fragen ausführlich und differenziert.",
        "Halte deine Position, nimm Einwände auf.",
        "Reagiere spontan auf neue Fragen."
       ],
       "id": "tc2m2k2",
       "thema": "Sollte ehrenamtliches Engagement stärker belohnt werden?",
       "text": "Sollte es ein soziales Pflichtjahr für junge Menschen geben?\nWarum engagieren sich manche Menschen und andere nicht?\nKann Engagement im Internet, zum Beispiel eine Unterschrift unter einer Petition, das klassische Ehrenamt ersetzen?",
       "quelle": "Fragen der Prüfenden",
       "punkte": [
        "Position halten und differenzieren",
        "Beispiele geben",
        "Einwände aufnehmen",
        "Spontan und flüssig reagieren"
       ],
       "mustervortrag": "Beim Pflichtjahr bin ich hin und her gerissen. Auf der einen Seite habe ich nach dem Abitur Zivildienst in einem Altenheim in Siegen gemacht, und das waren vermutlich die lehrreichsten Monate meines Lebens. Ich habe gelernt, einen Menschen zu waschen, der sich dafür schämt, und ich habe begriffen, wie viel Pflegekräfte leisten. Auf der anderen Seite war ich damals nicht freiwillig dort, und ich habe auch Zivis erlebt, die ihre Zeit nur abgesessen haben. Für die Bewohner war das nicht gut, denn alte Menschen merken sehr genau, ob jemand gern bei ihnen ist oder nur auf die Uhr schaut. Ich würde deshalb eher ein Angebot machen, das so attraktiv ist, dass man es kaum ablehnen will, mit ordentlicher Bezahlung und mit Vorteilen beim Studium oder in der Ausbildung. Warum engagieren sich manche und andere nicht? Nach allem, was ich weiß, spielt die Herkunft eine große Rolle. Wer aus einer Familie kommt, in der die Eltern im Verein waren, landet selbst eher dort. Es ist also auch eine Frage von Bildung und Geld, was mich ehrlich gesagt etwas ernüchtert. Und dann ist da die ganz simple Frage, ob man gefragt wird. Die meisten Ehrenamtlichen, die ich kenne, sind nicht von selbst gekommen. Jemand hat sie angesprochen. Mich übrigens auch, zum Chor hat mich eine Nachbarin regelrecht geschleppt. Ohne sie würde ich heute noch allein unter der Dusche singen. Und das Engagement im Internet? Ich will es nicht verachten. Eine Petition kann etwas bewirken, und Leute, die nachts Artikel in einem freien Online-Lexikon korrigieren, leisten echte Arbeit. Aber ersetzen kann das das klassische Ehrenamt nicht, weil dort etwas passiert, was online selten passiert: Man begegnet Menschen, die man sich nicht ausgesucht hat. Bei der Tafel in meiner Stadt steht ein pensionierter Richter neben einem jungen Mann, der gerade aus der Haft entlassen wurde, und beide sortieren Tomaten. Eine Unterschrift unter einer Petition kostet dreißig Sekunden. Diese Begegnung kostet einen Samstagvormittag, und gerade deshalb ist sie mehr wert.",
       "frage": "Haben Sie selbst schon einmal ein Ehrenamt aufgegeben? Warum?",
       "musterantwort": "Ja, und ich bin nicht stolz darauf. Ich war ein paar Jahre Lesepate an einer Grundschule in Bonn und habe jeden Donnerstag mit zwei Kindern gelesen. Als ich die Stelle gewechselt habe, passte der Donnerstag nicht mehr, und ich habe es einfach auslaufen lassen. Erst später habe ich erfahren, dass einer der beiden Jungen die Lehrerin wochenlang gefragt hat, wann ich wiederkomme. Das hat mich beschämt. Seitdem glaube ich, dass Verlässlichkeit im Ehrenamt fast wichtiger ist als Begeisterung. Lieber eine Stunde im Monat, auf die man sich verlassen kann, als drei Stunden pro Woche, die irgendwann einfach wegfallen."
      }
     ]
    },
    {
     "id": "tc2m2r3",
     "thema": "Ist Mehrsprachigkeit in der Familie ein Geschenk oder eine Last?",
     "karten": [
      {
       "kopf": "Teil 2 · Vertiefendes Gespräch",
       "kopfb": "Fragen der Prüfenden",
       "auftrag": [
        "Antworte auf die Fragen ausführlich und differenziert.",
        "Halte deine Position, nimm Einwände auf.",
        "Reagiere spontan auf neue Fragen."
       ],
       "id": "tc2m2k3",
       "thema": "Ist Mehrsprachigkeit in der Familie ein Geschenk oder eine Last?",
       "text": "Sollten Kinder schon im Kindergarten eine Fremdsprache lernen?\nVerändert sich ein Mensch, wenn er die Sprache wechselt?\nWas halten Sie davon, dass Englisch in Wissenschaft und Unternehmen das Deutsche immer mehr verdrängt?",
       "quelle": "Fragen der Prüfenden",
       "punkte": [
        "Position halten und differenzieren",
        "Beispiele geben",
        "Einwände aufnehmen",
        "Spontan und flüssig reagieren"
       ],
       "mustervortrag": "Bei der Fremdsprache im Kindergarten bin ich skeptischer, als man nach meinem Vortrag vielleicht denkt. Kinder lernen Sprachen dann gut, wenn sie sie brauchen, wenn also ein Mensch, den sie mögen, in dieser Sprache mit ihnen redet. Eine halbe Stunde Englisch pro Woche mit Liedern über Farben ist nett, aber sie macht aus niemandem einen zweisprachigen Menschen. Wenn ein Kindergarten das Geld hat, würde ich es lieber in eine Erzieherin stecken, die selbst zweisprachig ist und den ganzen Tag in ihrer Sprache spricht. Ob sich ein Mensch verändert, wenn er die Sprache wechselt? Darauf habe ich eine sehr persönliche Antwort. Auf Portugiesisch bin ich lauter, ich rede mehr mit den Händen, und ich bin, wie meine Freunde behaupten, deutlich charmanter. Auf Deutsch bin ich genauer und, nun ja, etwas pedantischer. Ich glaube nicht, dass das zwei verschiedene Persönlichkeiten sind. Aber jede Sprache bringt ihre eigenen Gewohnheiten mit, ihre Höflichkeitsformen, ihren Humor. Meine Mutter sagt immer, auf Portugiesisch könne man sich viel schöner streiten, weil man dabei nie ganz ernst sein müsse. Auf Deutsch dagegen sei ein Streit gleich eine Grundsatzfrage. Ich fürchte, sie hat recht, und ich fürchte auch, dass ich beim Streiten meistens ins Deutsche wechsle. Zur Rolle des Englischen habe ich eine gemischte Haltung. Dass Forscher auf Englisch veröffentlichen, finde ich vernünftig. Eine Biologin in Göttingen will von ihren Kollegen in Seoul gelesen werden. Schwierig wird es, wenn ganze Studiengänge nur noch auf Englisch angeboten werden und das Deutsche als Wissenschaftssprache verkümmert. Dann können wir über manche Dinge irgendwann nicht mehr in unserer eigenen Sprache nachdenken, und die Öffentlichkeit wird von der Forschung abgeschnitten. Ein Arzt muss einer Patientin ihre Diagnose schließlich auf Deutsch erklären können und nicht in dem Englisch, in dem er sie gelernt hat. Ich würde also sagen: Englisch für den Austausch, ja, aber nicht als Ersatz für alles andere.",
       "frage": "Glauben Sie, dass Übersetzungsprogramme das Sprachenlernen in zwanzig Jahren überflüssig machen?",
       "musterantwort": "Für bestimmte Zwecke sicherlich. Wer im Urlaub eine Speisekarte lesen will, braucht dafür schon heute keine Sprachkenntnisse mehr. Aber ich glaube nicht, dass das Lernen überflüssig wird, eher dass sich sein Sinn verschiebt. Man lernt eine Sprache ja nicht nur, um Informationen auszutauschen, sondern um mit Menschen zu reden, ohne dass ein Gerät dazwischen steht. Ich kann mir nicht vorstellen, mit meiner Großmutter über ein Programm zu sprechen. Und ein Witz, der erst übersetzt werden muss, ist meistens schon tot, bevor er ankommt."
      }
     ]
    },
    {
     "id": "tc2m2r4",
     "thema": "Wie wollen wir im Alter wohnen?",
     "karten": [
      {
       "kopf": "Teil 2 · Vertiefendes Gespräch",
       "kopfb": "Fragen der Prüfenden",
       "auftrag": [
        "Antworte auf die Fragen ausführlich und differenziert.",
        "Halte deine Position, nimm Einwände auf.",
        "Reagiere spontan auf neue Fragen."
       ],
       "id": "tc2m2k4",
       "thema": "Wie wollen wir im Alter wohnen?",
       "text": "Sind Kinder verpflichtet, ihre alten Eltern selbst zu pflegen?\nWie könnten Städte und Gemeinden das Wohnen im Alter besser unterstützen?\nWerden in Zukunft Roboter die Pflege übernehmen, und wäre das schlimm?",
       "quelle": "Fragen der Prüfenden",
       "punkte": [
        "Position halten und differenzieren",
        "Beispiele geben",
        "Einwände aufnehmen",
        "Spontan und flüssig reagieren"
       ],
       "mustervortrag": "Verpflichtet? Moralisch vielleicht in einem gewissen Maß, aber ich würde mich hüten, daraus eine allgemeine Regel zu machen. Ich kenne Familien, in denen die Tochter ihre Mutter jahrelang gepflegt hat und darüber selbst krank geworden ist. Das ist irgendwann keine Fürsorge mehr, das ist Selbstaufgabe. Und es gibt Eltern, die ihren Kindern so viel angetan haben, dass man von diesen Kindern keine Pflege verlangen kann. Ich würde eher sagen: Kinder sind verpflichtet, sich zu kümmern, also dafür zu sorgen, dass die Eltern gut versorgt sind. Das heißt nicht, dass sie selbst waschen und kochen müssen. Manchmal ist es sogar liebevoller, die Pflege Fachleuten zu überlassen und als Tochter oder Sohn einfach zum Kaffee zu kommen. Was könnten die Gemeinden tun? Da fällt mir einiges ein. Erstens Beratung. Meine Cousine hat für ihren Vater wochenlang herausfinden müssen, welche Zuschüsse es für den Umbau eines Bades gibt. Eine einzige Anlaufstelle im Rathaus würde vielen Familien enorm helfen. Zweitens die Bauplanung. Wenn eine Gemeinde ein neues Baugebiet ausweist, könnte sie vorschreiben, dass ein Teil der Wohnungen klein und barrierefrei ist, damit ältere Leute in ihrem Viertel umziehen können. Und drittens die Dinge des Alltags: Bänke, öffentliche Toiletten, Busse, die auch abends noch fahren. Das klingt banal, aber für jemanden mit Rollator hängt an einer fehlenden Bank, ob er den Weg zum Markt noch schafft. Zu den Robotern: In Japan werden solche Geräte schon eingesetzt, zum Beispiel Hebehilfen oder kleine Roboterrobben, die demenzkranke Menschen beruhigen sollen. Ich finde die Vorstellung zunächst befremdlich. Aber wenn ich ehrlich bin, hätte meine Tante wahrscheinlich nichts gegen einen Roboter, der ihr aus der Badewanne hilft. Vor einem fremden Pfleger schämt sie sich, vor einer Maschine vermutlich nicht. Schlimm wäre es erst, wenn Maschinen das Gespräch ersetzen sollen, weil man sich die Menschen sparen will. Der Roboter darf heben. Reden sollte jemand anders.",
       "frage": "Würden Sie selbst gern in einer Wohngemeinschaft im Alter leben?",
       "musterantwort": "Die ehrliche Antwort ist: Ich weiß es nicht, und ich finde die Frage unangenehmer, als ich gedacht hätte. Im Prinzip ja. Ich habe im Studium in Köln in einer Wohngemeinschaft gewohnt und fand das wunderbar. Aber damals war ich zweiundzwanzig, und das größte Problem war, wer den Müll runterbringt. Mit achtzig hat man festere Gewohnheiten und vielleicht weniger Geduld. Ich glaube, ich würde es versuchen, aber nur mit Menschen, die ich schon lange kenne. Mit drei alten Freundinnen in einer Wohnung, das kann ich mir gut vorstellen. Mit Fremden eher nicht."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tc2ml1",
   "titel": "Prüfungslauf 1",
   "minuten": 16,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Zerstört der Tourismus, was er liebt?",
     "karten": [
      {
       "kopf": "Teil 1 · Präsentation",
       "kopfb": "Dein Thema",
       "auftrag": [
        "Präsentiere sechs bis acht Minuten frei, mit klarer Gliederung.",
        "Bring Beispiele und eine Gegenposition.",
        "Beantworte danach die Nachfrage."
       ],
       "id": "tc2m1k5",
       "thema": "Zerstört der Tourismus, was er liebt?",
       "punkte": [
        "Beobachtungen aus beliebten Reisezielen",
        "Wirtschaftliche Bedeutung des Tourismus",
        "Folgen: Mieten, Umwelt, Alltag der Bewohner",
        "Gegenmaßnahmen und ihre Grenzen",
        "Fazit: Wie wir reisen könnten"
       ],
       "mustervortrag": "Vor drei Jahren saß ich im Oktober in einem kleinen Café in der Alfama in Lissabon, und neben mir unterhielten sich zwei ältere Männer. Der eine erzählte, dass in seinem Haus nur noch er und seine Frau dauerhaft wohnen. Alle anderen Wohnungen würden an Touristen vermietet. Dann sagte er einen Satz, den ich mir auf eine Serviette geschrieben habe: Früher kannte ich meine Nachbarn, heute kenne ich ihre Rollkoffer. Ich gestehe, dass ich in dieser Woche selbst in einer solchen Ferienwohnung gewohnt habe. Damit bin ich mitten in meinem Thema, nämlich in der Frage, ob der Tourismus genau das zerstört, was er liebt. Ich werde zuerst einige Beobachtungen schildern, dann die wirtschaftliche Seite beleuchten, danach auf die Folgen eingehen und schließlich fragen, was man dagegen tun kann und wo die Grenzen solcher Maßnahmen liegen. Die Beobachtungen kennt jeder, der in den letzten Jahren in Venedig, Dubrovnik oder Barcelona war. Gassen, durch die man sich nur noch im Gänsemarsch schiebt. Bäckereien, aus denen Andenkenläden geworden sind. In Hallstatt in Österreich, einem Ort mit knapp achthundert Einwohnern, kommen an manchen Tagen zehntausend Besucher, viele nur für ein einziges Foto. Die Gemeinde hat irgendwann einen Bauzaun aufgestellt, damit die Leute nicht mehr an einer bestimmten Stelle stehen bleiben. Das ist eine ziemlich absurde Lage: Ein Ort wird so beliebt, dass er sich vor seinen Bewunderern verstecken muss. Nun wäre es aber zu einfach, den Tourismus nur als Plage zu beschreiben. Für viele Regionen ist er die wichtigste Einnahmequelle überhaupt. Auf Mallorca hängt ein großer Teil der Arbeitsplätze direkt oder indirekt an den Gästen. Ich habe dort mit einer Hotelfachfrau gesprochen, die mir sehr klar gesagt hat: Ihr Deutschen beschwert euch über den Massentourismus und bucht dann trotzdem wieder. Aber wenn ihr nicht mehr kommt, kann ich meine Wohnung nicht bezahlen. Auch im Bayerischen Wald oder an der Ostsee wären manche Dörfer ohne Urlauber längst ausgestorben. Der Tourismus bringt Geld in Gegenden, in denen es sonst kaum Industrie gibt. Die Frage ist also nicht, ob Tourismus gut oder schlecht ist, sondern ab wann er kippt. Und da sehe ich vor allem drei Folgen. Die erste betrifft die Mieten. Wenn sich mit einer Ferienwohnung in einer Woche so viel verdienen lässt wie mit einer normalen Vermietung in einem Monat, dann verschwinden die normalen Wohnungen. Die Einheimischen ziehen an den Stadtrand, und die Altstadt wird zur Kulisse. Die zweite Folge betrifft die Umwelt, vom Flugverkehr über die Kreuzfahrtschiffe bis zum Wasserverbrauch in Gegenden, in denen das Wasser im Sommer ohnehin knapp ist. Die dritte ist, wenn man so will, kultureller Natur. Wenn ein Ort sich nur noch danach richtet, was Besucher erwarten, dann spielt er irgendwann eine Rolle, statt er selbst zu sein. Das Fest, das früher für das Dorf gefeiert wurde, findet jetzt für die Reisebusse statt. Was kann man tun? Einige Städte haben gehandelt. Venedig verlangt an bestimmten Tagen Eintritt von Tagesbesuchern, Amsterdam hat die Zahl der Nächte begrenzt, in denen man eine Wohnung an Urlauber vermieten darf, und Barcelona will Ferienwohnungen in der Stadt ganz abschaffen. Das sind sinnvolle Schritte, aber sie haben Grenzen. Eintrittsgelder machen das Reisen zu einem Vorrecht derer, die es sich leisten können. Und Verbote verlagern das Problem oft nur ins nächste Dorf. Als Dubrovnik die Zahl der Kreuzfahrtschiffe begrenzt hat, sind manche Reedereien einfach ein paar Buchten weiter ausgewichen, in Orte, die auf diesen Ansturm noch viel schlechter vorbereitet waren. Ein Einwand, den man häufig hört, lautet, dass der Einzelne ohnehin nichts ändern kann. Ich halte das für eine bequeme Ausrede, und ich nehme mich da selbst nicht aus. Natürlich löst meine Entscheidung, im November statt im August nach Lissabon zu fahren, kein strukturelles Problem. Aber wenn viele Menschen außerhalb der Saison reisen, länger an einem Ort bleiben und bei Einheimischen essen statt in der Kette am Hafen, dann verändert das die Rechnung durchaus. Mein Fazit lautet also: Der Tourismus zerstört nicht zwangsläufig, was er liebt, aber er tut es, wenn niemand eine Grenze zieht. Diese Grenze müssen in erster Linie die Städte und Regionen ziehen, und dafür brauchen sie Mittel und Rückendeckung. Wir als Reisende könnten uns dabei eine einfache Frage stellen: Würde ich auch dann hinfahren, wenn ich dort kein Foto machen dürfte? Ich habe das für mich ausprobiert. Bei Lissabon lautet meine Antwort Ja. Bei Hallstatt war ich, ehrlich gesagt, nicht mehr ganz so sicher.",
       "frage": "Ist Ihr Vorschlag, außerhalb der Saison zu reisen, nicht ein Luxus für Menschen ohne Kinder und mit flexiblen Arbeitszeiten?",
       "musterantwort": "Ja, das ist er, und das hätte ich im Vortrag deutlicher sagen sollen. Eine Familie mit schulpflichtigen Kindern hat schlicht keine Wahl, sie fährt in den Ferien oder gar nicht. Deshalb kann die Antwort auch nicht allein beim Einzelnen liegen. Wenn die Bundesländer ihre Sommerferien stärker staffeln würden, wäre schon einiges gewonnen. Und Familien haben andere Möglichkeiten. Sie können zum Beispiel eine Woche an einem Ort bleiben, statt in sieben Tagen fünf Städte abzuhaken. Wer länger bleibt, gibt sein Geld eher im Ort aus und verursacht pro Tag weniger Verkehr. Das ist kein Verzicht, das ist eigentlich der schönere Urlaub."
      }
     ]
    },
    {
     "nr": 2,
     "art": "erzaehlen",
     "thema": "Zerstört der Tourismus, was er liebt?",
     "karten": [
      {
       "kopf": "Teil 2 · Vertiefendes Gespräch",
       "kopfb": "Fragen der Prüfenden",
       "auftrag": [
        "Antworte auf die Fragen ausführlich und differenziert.",
        "Halte deine Position, nimm Einwände auf.",
        "Reagiere spontan auf neue Fragen."
       ],
       "id": "tc2m2k5",
       "thema": "Zerstört der Tourismus, was er liebt?",
       "text": "Sollten Kreuzfahrtschiffe in bestimmten Häfen verboten werden?\nIst Reisen heute überhaupt noch mit dem Klimaschutz vereinbar?\nWas haben Sie auf Reisen gelernt, das Sie zu Hause nicht hätten lernen können?",
       "quelle": "Fragen der Prüfenden",
       "punkte": [
        "Position halten und differenzieren",
        "Beispiele geben",
        "Einwände aufnehmen",
        "Spontan und flüssig reagieren"
       ],
       "mustervortrag": "Bei den Kreuzfahrtschiffen habe ich eine ziemlich klare Meinung. In Städten wie Venedig oder Dubrovnik, wo an einem Vormittag mehrere tausend Passagiere gleichzeitig an Land gehen, halte ich Beschränkungen für vernünftig. Diese Gäste lassen vergleichsweise wenig Geld im Ort, weil sie an Bord essen und schlafen, aber sie verstopfen die Gassen und belasten die Luft. Ein allgemeines Verbot würde ich trotzdem nicht fordern. In Kiel oder Rostock bringen die Schiffe Arbeitsplätze, und die Häfen sind dafür gebaut. Es kommt also sehr auf den Ort an, und ich finde, die Städte sollten das selbst entscheiden dürfen, statt dass es in Brüssel geregelt wird. Ob Reisen mit dem Klimaschutz vereinbar ist? Da muss ich zugeben, dass meine eigene Bilanz nicht gut aussieht. Ich fliege ungefähr zweimal im Jahr, und jedes Mal habe ich ein schlechtes Gewissen, das mich aber offenbar nicht vom Buchen abhält. Die ehrliche Antwort lautet wohl: Reisen, wie wir es gewohnt waren, mit dem Wochenendflug nach Barcelona, ist mit Klimaschutz kaum vereinbar. Reisen an sich schon. Ich bin letztes Jahr mit dem Nachtzug nach Wien gefahren, und das war eine der schönsten Anreisen, die ich je hatte. Man steigt abends in Köln ein und frühstückt am nächsten Morgen in einem Wiener Kaffeehaus. Das ist langsamer, aber man hat das Gefühl, wirklich unterwegs gewesen zu sein. Und was ich auf Reisen gelernt habe? Vor allem, wie wenig selbstverständlich meine eigenen Gewohnheiten sind. Als ich mit Anfang zwanzig ein halbes Jahr in Neapel gelebt habe, hat mich die Unordnung dort anfangs wahnsinnig gemacht. Die Busse kamen, wann sie wollten, und auf dem Amt erklärte mir ein Beamter, das Formular gebe es leider nur dienstags. Nach drei Monaten hatte ich verstanden, dass man dort mit Beziehungen und Geduld genauso weit kommt wie bei uns mit Terminen. Zurück in Deutschland kam mir dann unsere Pünktlichkeit plötzlich ein bisschen komisch vor. Das lernt man in keinem Buch, und ehrlich gesagt hat es mich ein wenig gelassener gemacht, vor allem auf deutschen Bahnsteigen.",
       "frage": "Würden Sie Menschen dafür bezahlen lassen, dass sie eine Stadt besichtigen, so wie in Venedig?",
       "musterantwort": "Für einige wenige, völlig überlaufene Orte ja, aber nur als Notlösung. Mich stört an der Idee, dass eine Stadt damit zum Museum erklärt wird. Wer Eintritt zahlt, betrachtet die Altstadt wie eine Ausstellung, und die Menschen, die dort wohnen, werden zu Statisten. Außerdem trifft eine Gebühr von ein paar Euro die Falschen. Der Kreuzfahrtgast zahlt sie mit einem Achselzucken, die Schulklasse aus Padua überlegt es sich zweimal. Sinnvoller fände ich es, die Zahl der Ferienwohnungen und der Schiffe zu begrenzen. Das setzt an der Ursache an und nicht am Symptom."
      }
     ]
    }
   ]
  },
  {
   "id": "tc2ml2",
   "titel": "Prüfungslauf 2",
   "minuten": 16,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Verdirbt das Geld den Sport?",
     "karten": [
      {
       "kopf": "Teil 1 · Präsentation",
       "kopfb": "Dein Thema",
       "auftrag": [
        "Präsentiere sechs bis acht Minuten frei, mit klarer Gliederung.",
        "Bring Beispiele und eine Gegenposition.",
        "Beantworte danach die Nachfrage."
       ],
       "id": "tc2m1k6",
       "thema": "Verdirbt das Geld den Sport?",
       "punkte": [
        "Woher das Geld im Sport kommt",
        "Was das Geld dem Sport gebracht hat",
        "Folgen: Wettbewerb, Fans, Breitensport",
        "Gegenposition: Sport war schon immer ein Geschäft",
        "Fazit und Vorschläge"
       ],
       "mustervortrag": "Als ich zwölf war, hat mein Fußballverein in einem Vorort von Bielefeld neue Trikots bekommen. Gesponsert von der Fleischerei Wiegand, deren Name in großen roten Buchstaben auf unserer Brust stand. Wir fanden das großartig. Herr Wiegand stand bei jedem Heimspiel am Spielfeldrand, und nach Siegen gab es Würstchen für alle. Heute gehören einige der erfolgreichsten Vereine Europas Investoren und sogar Staatsfonds, Spieler wechseln für Summen, von denen man ein Krankenhaus bauen könnte, und Weltmeisterschaften werden dort ausgetragen, wo am meisten bezahlt wird. Irgendwo zwischen der Fleischerei Wiegand und dem Staatsfonds liegt die Frage, um die es heute gehen soll: Verdirbt das Geld den Sport? Ich möchte so vorgehen: Zuerst zeige ich, woher das große Geld im Sport kommt. Dann frage ich, was dieses Geld dem Sport gebracht hat, denn das ist nicht wenig. Danach komme ich zu den Folgen, die ich problematisch finde, und zum Schluss setze ich mich mit der Ansicht auseinander, dass Kommerz im Sport ganz normal ist. Woher also kommt das Geld? Im Wesentlichen aus drei Quellen. Erstens aus den Fernsehrechten, die für die großen Fußballligen inzwischen für Milliarden versteigert werden. Zweitens aus dem Sponsoring, also von Unternehmen, die mit dem Sport ihr Image pflegen. Und drittens, das ist die neuere Entwicklung, von Investoren, die ganze Vereine kaufen. Manche davon sind Geschäftsleute, manche sind Staaten, die mit dem Sport ihr Ansehen in der Welt aufpolieren wollen. Dafür gibt es inzwischen sogar ein eigenes Wort, Sportswashing. Was hat das Geld gebracht? Das muss man fairerweise zuerst sagen. Die Athleten sind heute besser trainiert, besser medizinisch betreut und besser abgesichert als je zuvor. Der Frauenfußball ist ein gutes Beispiel. Vor zwanzig Jahren mussten Nationalspielerinnen nebenher als Bürokauffrau oder Physiotherapeutin arbeiten. Dass heute einige von ihnen vom Sport leben können, liegt an Sponsoren und Fernsehverträgen. Auch die Stadien sind sicherer geworden, und wer sich an die alten Stehplatztribünen der achtziger Jahre erinnert, weiß, dass Romantik und Sicherheit nicht immer zusammenpassen. Trotzdem sehe ich drei Folgen, die mich beunruhigen. Die erste betrifft den Wettbewerb selbst. Sport lebt von der Ungewissheit. Wenn aber in einer Liga immer dieselbe Mannschaft Meister wird, weil sie ein Vielfaches an Geld hat, dann wird der Ausgang vorhersehbar. In der Bundesliga hat ein Verein mehr als ein Jahrzehnt lang jede Meisterschaft gewonnen. Das hat mit Zufall wenig zu tun. Die zweite Folge betrifft die Fans. Die Eintrittspreise sind gestiegen, die Anstoßzeiten richten sich nach den Fernsehmärkten in Asien, und ein Spiel am Freitagabend in München ist für jemanden aus Rostock kaum zu schaffen. Ein Freund von mir hatte vierzig Jahre lang eine Dauerkarte und hat sie letztes Jahr zurückgegeben. Er sagte, er fühle sich nicht mehr als Fan, sondern als Statist in einer Fernsehproduktion. Die dritte Folge betrifft den Breitensport. Das Geld oben kommt unten kaum an. Mein alter Verein bei Bielefeld hat inzwischen keine eigene Jugendmannschaft mehr, weil sich keine Trainer finden, und der Platz wird nur noch zweimal im Jahr gemäht. Nun gibt es eine Gegenposition, und die vertreten nicht nur Funktionäre. Sie lautet ungefähr so: Sport war schon immer ein Geschäft. Schon in der Antike bekamen Olympiasieger Geld und Privilegien, und der Amateurgedanke des neunzehnten Jahrhunderts diente in Wahrheit dazu, Arbeiter vom Spitzensport fernzuhalten, weil die es sich nicht leisten konnten, umsonst zu trainieren. Das ist historisch richtig, und es hat mich, als ich es zum ersten Mal gelesen habe, ziemlich nachdenklich gemacht. Die Vorstellung vom reinen, unbezahlten Sport ist also selbst eine Art Mythos, den sich vor allem diejenigen leisten konnten, die ohnehin genug Geld hatten. Und doch überzeugt mich diese Gegenposition nur halb. Dass Sportler bezahlt werden, ist kein Problem. Das Problem entsteht, wenn das Geld die Regeln des Wettbewerbs aushebelt und wenn diejenigen, für die der Sport eigentlich da ist, die Spieler und die Zuschauer, nur noch Mittel zum Zweck sind. Mein Fazit lautet deshalb: Geld verdirbt den Sport nicht an sich, aber ungezähmtes Geld tut es. Es braucht Regeln, etwa Obergrenzen für die Gehaltssumme eines Vereins, wie es sie im amerikanischen Football längst gibt, eine gerechtere Verteilung der Fernsehgelder und eine Abgabe für den Breitensport. Herr Wiegand hat seine Fleischerei übrigens längst verkauft. Aber ich glaube, er hat damals mehr vom Sport verstanden als mancher Investor heute. Er wollte den Verein nicht besitzen. Er wollte nur dabei sein, wenn wir gewinnen.",
       "frage": "Sie fordern Obergrenzen für Gehälter. Würden dann nicht die besten Spieler einfach in Ligen ohne solche Regeln abwandern?",
       "musterantwort": "Das ist das stärkste Argument gegen meinen Vorschlag, und ich gebe zu, dass es nationale Alleingänge ziemlich schwierig macht. Wenn nur die Bundesliga eine Obergrenze einführt, spielen die Stars eben in England. Deshalb müsste so etwas mindestens auf europäischer Ebene geregelt werden. Ich bin da nicht naiv, die großen Vereine würden sich mit Händen und Füßen wehren. Trotzdem halte ich die Angst vor der Abwanderung für etwas übertrieben. Die amerikanischen Profiligen haben solche Grenzen seit Jahrzehnten, und die besten Basketballspieler der Welt wollen trotzdem genau dort spielen. Ein offener Wettbewerb zieht offenbar auch Stars an."
      }
     ]
    },
    {
     "nr": 2,
     "art": "erzaehlen",
     "thema": "Verdirbt das Geld den Sport?",
     "karten": [
      {
       "kopf": "Teil 2 · Vertiefendes Gespräch",
       "kopfb": "Fragen der Prüfenden",
       "auftrag": [
        "Antworte auf die Fragen ausführlich und differenziert.",
        "Halte deine Position, nimm Einwände auf.",
        "Reagiere spontan auf neue Fragen."
       ],
       "id": "tc2m2k6",
       "thema": "Verdirbt das Geld den Sport?",
       "text": "Sollten Spitzensportler Vorbilder sein, auch bei politischen Fragen?\nSollen Steuergelder in große Sportereignisse wie Olympische Spiele fließen?\nWelche Rolle spielt Sport in Ihrem eigenen Leben?",
       "quelle": "Fragen der Prüfenden",
       "punkte": [
        "Position halten und differenzieren",
        "Beispiele geben",
        "Einwände aufnehmen",
        "Spontan und flüssig reagieren"
       ],
       "mustervortrag": "Bei der Vorbildfunktion bin ich zwiegespalten. Einerseits finde ich es bewundernswert, wenn ein Sportler seine Bekanntheit nutzt, um auf ein Unrecht hinzuweisen, und dafür Nachteile in Kauf nimmt. Andererseits finde ich es unfair, von einem dreiundzwanzigjährigen Fußballer zu verlangen, dass er sich zur Lage der Menschenrechte in einem Land äußert, in das sein Verband das Turnier vergeben hat. Das ist Aufgabe der Verbände und der Politik, nicht des Spielers, der dort nur antreten soll. Ich würde sagen: Sportler dürfen Vorbilder sein, aber wir sollten es nicht von ihnen verlangen. Vorbild sein heißt für mich ohnehin vor allem, fair zu spielen und nach einer Niederlage dem Gegner die Hand zu geben. Das sehen Kinder auf dem Bolzplatz, und das ahmen sie nach, nicht die Pressekonferenz. Bei den Olympischen Spielen bin ich skeptisch, und zwar aus Erfahrung. Viele Austragungsorte sitzen heute auf Stadien, die niemand mehr braucht, und auf Schulden, die noch Jahrzehnte abbezahlt werden. In Athen verfallen manche Sportstätten der Spiele von zweitausendvier bis heute. Hamburg hat vor einigen Jahren in einer Volksabstimmung gegen eine Bewerbung gestimmt, und ich glaube, die Bürger hatten gute Gründe. Wenn öffentliches Geld in den Sport fließen soll, dann lieber in Schwimmbäder. In Deutschland können immer weniger Kinder sicher schwimmen, weil Bäder geschlossen werden. Für das Geld eines olympischen Stadions könnte man in vielen Städten die Lehrschwimmbecken retten. Und mein eigenes Verhältnis zum Sport? Ich laufe, ziemlich langsam und ziemlich regelmäßig, dreimal in der Woche am Rhein entlang. Ich mache das nicht, um schneller zu werden, sondern weil ich danach klarer denken kann. Viele Ideen für meine Arbeit sind mir beim Laufen gekommen, übrigens auch der Schluss meines Vortrags vorhin. Und ich schaue gern Fußball, mit wachsendem schlechten Gewissen, wie Sie gemerkt haben. Vielleicht ist das die ehrlichste Antwort auf die Frage nach dem Geld im Sport: Man schimpft darüber und schaltet trotzdem ein.",
       "frage": "Gibt es eine Sportart, die Ihrer Meinung nach noch nicht vom Geld verdorben ist?",
       "musterantwort": "Ich glaube, das Geld richtet überall dort weniger Schaden an, wo es wenig Fernsehpublikum gibt. Ich denke an Orientierungslauf oder an Faustball, das in Deutschland kaum jemand kennt, obwohl wir darin regelmäßig Weltmeister werden. Da kennen sich die Spieler, die Zuschauer sind meistens Verwandte, und nach dem Turnier wird zusammen gegrillt. Allerdings muss man ehrlich sein: Diese Sportler würden sich über etwas mehr Geld sehr freuen. Die meisten zahlen ihre Fahrten zu Weltmeisterschaften selbst. Unverdorben heißt hier also oft auch unterfinanziert. Vielleicht ist das der Preis der Unschuld."
      }
     ]
    }
   ]
  }
 ]
};
