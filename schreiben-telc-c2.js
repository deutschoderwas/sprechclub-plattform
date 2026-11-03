/* ============================================================
   deutschoderwas club — SCHREIBEN telc Deutsch C2

   Aufbau nach dem offiziellen telc-Format (Tipps zur Prüfungs-
   vorbereitung und Handbuch Deutsch C2, geprüft 03.11.2026). Jede
   Runde hat wie die Prüfung ein Oberthema. Alle Texte eigene.
   Erzeugt aus scratchpad/telcc2 mit bau.js.
   ============================================================ */

window.SCHREIBEN_TELC_C2 = {
 "niveau": "telcC2",
 "pruefung": "telc Deutsch C2",
 "minuten": 150,
 "punkte": 80,
 "intro": "Bei telc C2 schreibst du zwei Texte: erst die Zusammenfassung eines Hörtextes von etwa fünfzehn Minuten (Hörverstehen und Schreiben, sechzig Minuten), dann einen Aufsatz zu einem von drei Aspekten des Oberthemas, in den du mindestens drei der Lese- und Hörtexte einarbeitest (neunzig Minuten). Beide Teile zählen je 40 Punkte.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Zusammenfassen und zitieren",
   "zeichen": "🖼️",
   "was": "Hörtext zusammenfassen, Quellen richtig einarbeiten."
  },
  {
   "nr": 2,
   "titel": "Der Aufsatz",
   "zeichen": "🧩",
   "was": "Gliederung, Kohärenz und Kohäsion auf C2."
  },
  {
   "nr": 3,
   "titel": "Die Aufgaben",
   "zeichen": "✍️",
   "was": "Zusammenfassungen und Aufsätze mit Muster."
  },
  {
   "nr": 4,
   "titel": "Die Prüfung",
   "zeichen": "⏱️",
   "was": "Beide Texte mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tc2s1",
   "stufe": 1,
   "titel": "Quellen einarbeiten",
   "kurz": "Zitieren, sinngemäß wiedergeben, Konjunktiv I: so werden aus Lese- und Hörtexten Belege für deine eigene Argumentation",
   "ziel": "Nach diesem Block baust du wörtliche Zitate grammatisch sauber in deine Sätze ein, kennzeichnest sinngemäße Übernahmen eindeutig und setzt den Konjunktiv I sicher ein.",
   "zeichen": "📚",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz kennzeichnet das Zitat aus dem Interview mit Konrad Assmann korrekt?",
     "opt": [
      "Assmann sagt, Vertrauen ist der Moment, in dem man aufhört nachzufragen.",
      "Konrad Assmann sagt im Interview mit der Zeitschrift Denkraum: „Vertrauen ist der Moment, in dem man aufhört nachzufragen.“",
      "„Vertrauen ist, wenn man nicht mehr fragt“, sagt ein Experte."
     ],
     "loesung": 1,
     "erklaerung": "Wörtlich übernommen, in Anführungszeichen und mit Name und Quelle. Die dritte Fassung verändert den Wortlaut und verschweigt, wer spricht."
    },
    {
     "art": "wahl",
     "frage": "Die Psychologin sagt, Kontrolle ___ teurer als Vertrauen. Welche Form passt in eine Wiedergabe?",
     "opt": [
      "ist",
      "sei",
      "wäre"
     ],
     "loesung": 1,
     "erklaerung": "Der Konjunktiv I „sei“ zeigt, dass du eine fremde Aussage wiedergibst. Mit „ist“ machst du sie zu deiner eigenen Behauptung."
    },
    {
     "art": "wahl",
     "frage": "Assmann berichtet, die Teilnehmer ___ im Schnitt etwas mehr als vier Euro geschickt. Welche Form ist richtig?",
     "opt": [
      "haben",
      "hätten",
      "habe"
     ],
     "loesung": 1,
     "erklaerung": "Der Konjunktiv I „haben“ ist mit dem Indikativ identisch. Deshalb weichst du auf den Konjunktiv II „hätten“ aus. „Habe“ passt nicht zum Plural."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz kennzeichnet eine sinngemäße Übernahme eindeutig?",
     "opt": [
      "Langeweile ist kein Zustand, sondern ein Signal.",
      "Der Psychologin Miriam Talheim zufolge ist Langeweile weniger ein Zustand als ein Signal.",
      "Langeweile ist, wie jeder weiß, eher ein Signal."
     ],
     "loesung": 1,
     "erklaerung": "„Zufolge“, „laut“ oder „nach Ansicht von“ machen eine Übernahme ohne Anführungszeichen sichtbar. Ohne Quellenangabe sieht der Gedanke aus wie deiner."
    },
    {
     "art": "wahl",
     "frage": "Wie viele wörtliche Zitate sind in einem Aufsatz von etwa 650 Wörtern sinnvoll?",
     "opt": [
      "In jedem Absatz mehrere lange Zitate, damit die Quellen gut sichtbar sind",
      "Drei bis fünf kurze, gezielt gesetzte Zitate, alles andere sinngemäß in eigenen Worten",
      "Keine, weil Zitate auf C2 als Abschreiben gelten"
     ],
     "loesung": 1,
     "erklaerung": "Ein Zitat lohnt sich, wenn der Wortlaut selbst treffend ist. Sonst zeigst du mit eigenen Worten besser, dass du den Gedanken verstanden hast."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz baut das Zitat „Ruhe ist ein Luxusgut geworden“ grammatisch sauber ein?",
     "opt": [
      "Aust meint, dass „Ruhe ist ein Luxusgut geworden“.",
      "Für Wendelin Aust steht fest: „Ruhe ist ein Luxusgut geworden.“",
      "Aust sagt Ruhe „ist ein Luxusgut geworden“."
     ],
     "loesung": 1,
     "erklaerung": "Nach einem Doppelpunkt bleibt der Hauptsatz des Zitats unverändert. Nach „dass“ müsste das Verb ans Ende, und das verändert den Wortlaut."
    },
    {
     "art": "wahl",
     "frage": "Ein Sprecher gibt zu, dass ein Teil seiner Beobachtung gegen seine eigene These spricht. Welches Verb gibt das am genauesten wieder?",
     "opt": [
      "Er behauptet, …",
      "Er räumt ein, …",
      "Er fordert, …"
     ],
     "loesung": 1,
     "erklaerung": "„Einräumen“ bezeichnet ein Zugeständnis. Genaue Redeverben wie betonen, einwenden, folgern oder bezweifeln zählen beim Repertoire."
    },
    {
     "art": "wahl",
     "frage": "Was gehört zur ersten Nennung einer Quelle im Aufsatz?",
     "opt": [
      "Name, Textsorte und Ort der Veröffentlichung, etwa: In ihrem Essay in der Zeitschrift Die Lesezeit beschreibt Ruth Ebersbach …",
      "Nur die Nummer der Aufgabe, etwa: Text 2 sagt …",
      "Die genaue Zeilenzahl und das Erscheinungsdatum"
     ],
     "loesung": 0,
     "erklaerung": "Bei der ersten Nennung stellst du die Quelle kurz vor. Danach genügt der Name, etwa „Ebersbach“ oder „die Essayistin“."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der eine Aussage aus dem Vortrag im Konjunktiv I wiedergibt.",
     "teile": [
      "Die",
      "Referentin",
      "betont,",
      "Kontrolle",
      "erfasse",
      "nur,",
      "was",
      "man",
      "vorher",
      "festgelegt",
      "habe."
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
     "erklaerung": "Redeeinleitung mit Komma, danach Hauptsatzstellung mit „erfasse“ an zweiter Stelle. Auch im Nebensatz steht der Konjunktiv I: „habe“."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit einem „wie“-Einschub.",
     "teile": [
      "Wie",
      "Albrecht",
      "in",
      "seinem",
      "Interview",
      "hervorhebt,",
      "wird",
      "die",
      "Grenze",
      "vom",
      "Geldbeutel",
      "überquert."
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
      11
     ],
     "erklaerung": "Nach „wie … hervorhebt“ steht der Indikativ, weil der Satz die Aussage als Beleg übernimmt. Das Verb des Hauptsatzes folgt direkt auf das Komma."
    }
   ]
  },
  {
   "id": "tc2s2",
   "stufe": 1,
   "titel": "Einen Aufsatz gliedern",
   "kurz": "Einleitung mit Fragestellung, Argumentationsgang im Hauptteil, ein Schluss mit Urteil: der Bauplan für den C2-Aufsatz",
   "ziel": "Nach diesem Block wählst du in kurzer Zeit den passenden Aspekt, formulierst eine klare Fragestellung und ordnest deine Quellen nach Argumenten statt nach Texten.",
   "zeichen": "🏛️",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Aspekt: Ersetzen Bewertungsportale das persönliche Vertrauen? Welche Einleitung ist am besten?",
     "opt": [
      "Vertrauen ist ein großes Thema, über das schon sehr viel geschrieben wurde.",
      "Wer eine Ferienwohnung bucht, verlässt sich auf die Sterne von Fremden, dem Nachbarn gibt er dagegen oft nicht einmal den Haustürschlüssel. Ich möchte untersuchen, ob Bewertungsportale persönliches Vertrauen ersetzen können, und stütze mich dabei auf drei der vorliegenden Texte.",
      "In diesem Aufsatz schreibe ich über Vertrauen. Zuerst kommt Text 1, dann Text 2, dann Text 3."
     ],
     "loesung": 1,
     "erklaerung": "Ein konkreter Widerspruch als Einstieg, dann die Fragestellung und ein Hinweis auf die Quellen. So weiß der Leser, worauf der Text hinausläuft."
    },
    {
     "art": "wahl",
     "frage": "Was gehört NICHT in die Einleitung?",
     "opt": [
      "Der Anlass oder ein konkreter Widerspruch, der zur Frage führt",
      "Die Fragestellung, die du im Aufsatz verfolgst",
      "Dein ausführlich begründetes Endurteil mit allen Belegen"
     ],
     "loesung": 2,
     "erklaerung": "Das begründete Urteil ist das Ziel des Textes und steht im Schluss. Eine knappe Andeutung deiner Richtung ist erlaubt, die Begründung nicht."
    },
    {
     "art": "wahl",
     "frage": "Wie organisierst du den Hauptteil am besten?",
     "opt": [
      "Quelle für Quelle: erst alles aus Text 1, dann alles aus Text 2, dann alles aus Text 3",
      "Nach Gesichtspunkten: Jeder Absatz verfolgt ein Argument und zieht dafür die passenden Quellen heran",
      "Zuerst die eigene Meinung, die Quellen kommen gesammelt am Ende"
     ],
     "loesung": 1,
     "erklaerung": "Wer Quelle für Quelle vorgeht, schreibt eine Inhaltsangabe. Verlangt ist eine Erörterung, in der die Quellen deine Argumente stützen oder ihnen widersprechen."
    },
    {
     "art": "wahl",
     "frage": "Du hast nur wenige Minuten, um einen der drei Aspekte zu wählen. Wonach entscheidest du?",
     "opt": [
      "Nach dem Aspekt, zu dem du aus mindestens drei Quellen Belastbares notiert hast",
      "Nach dem Aspekt, der am originellsten klingt",
      "Nach dem Aspekt mit der kürzesten Formulierung"
     ],
     "loesung": 0,
     "erklaerung": "Ohne drei verwertbare Quellen ist die Aufgabe nicht vollständig erfüllt, ganz gleich, wie gut deine eigenen Gedanken sind."
    },
    {
     "art": "wahl",
     "frage": "Du willst am Ende zeigen, dass das Smartphone die Langeweile nicht abgeschafft hat. Welcher Argumentationsgang überzeugt am meisten?",
     "opt": [
      "Die These in jedem Absatz neu behaupten",
      "Erst darstellen, was für die Gegenthese spricht, dann die Belege dagegen, dann eine abwägende eigene Position",
      "Nur die Argumente gegen die eigene These sammeln"
     ],
     "loesung": 1,
     "erklaerung": "Die Seite, die du am Ende vertrittst, steht direkt vor dem Schluss. So führt der Aufbau den Leser zu deinem Urteil."
    },
    {
     "art": "wahl",
     "frage": "Warum gehört ein starkes Gegenargument in deinen Aufsatz?",
     "opt": [
      "Weil die Prüfer längere Texte besser bewerten",
      "Weil eine Position erst dann überzeugt, wenn sie den stärksten Einwand ernst nimmt und ihn entkräftet oder sich durch ihn einschränken lässt",
      "Weil man dann die eigene Meinung nicht mehr sagen muss"
     ],
     "loesung": 1,
     "erklaerung": "Ein Urteil, das den Einwand kennt, wirkt durchdacht. Oft wird die eigene These dadurch genauer, etwa „zugespitzt, aber im Kern berechtigt“."
    },
    {
     "art": "wahl",
     "frage": "Welcher Schluss ist am gelungensten?",
     "opt": [
      "Zusammenfassend kann man sagen, dass das Thema sehr interessant ist und viele Seiten hat.",
      "Ich halte den Begriff Luxusgut deshalb für zugespitzt, aber im Kern für berechtigt. Städte sollten bei jedem Lärmaktionsplan fragen, wer an den lautesten Straßen wohnt.",
      "Zum Schluss noch ein neues Argument: Auch Kirchenglocken sind sehr laut."
     ],
     "loesung": 1,
     "erklaerung": "Der Schluss beantwortet die Frage der Einleitung und zieht eine Folgerung. Neue Argumente haben dort keinen Platz mehr."
    },
    {
     "art": "wahl",
     "frage": "Wie verteilst du ungefähr 650 Wörter?",
     "opt": [
      "Einleitung etwa 80 bis 100 Wörter, Hauptteil etwa 450 bis 500, Schluss etwa 80 bis 100",
      "Einleitung etwa 300 Wörter, damit alle Quellen ausführlich vorgestellt sind",
      "Alle drei Teile gleich lang"
     ],
     "loesung": 0,
     "erklaerung": "Die Argumentation trägt den Aufsatz. Eine kurze Einleitung und ein knapper Schluss lassen ihr den nötigen Raum."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, mit dem die Einleitung zur Fragestellung führt.",
     "teile": [
      "Im",
      "Folgenden",
      "möchte",
      "ich",
      "der",
      "Frage",
      "nachgehen,",
      "ob",
      "eine",
      "Grenze",
      "verschwindet,",
      "wenn",
      "man",
      "sie",
      "öffnet."
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
      14
     ],
     "erklaerung": "„Einer Frage nachgehen“ verlangt den Dativ. Der indirekte Fragesatz mit „ob“ schließt sich direkt an, der „wenn“-Satz ist ihm untergeordnet."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der im Schluss ein abgewogenes Urteil formuliert.",
     "teile": [
      "Alles",
      "in",
      "allem",
      "halte",
      "ich",
      "diese",
      "Einschätzung",
      "für",
      "zugespitzt,",
      "aber",
      "im",
      "Kern",
      "für",
      "berechtigt."
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
      13
     ],
     "erklaerung": "„Etwas für … halten“ trägt das Urteil, „zugespitzt, aber im Kern berechtigt“ zeigt, dass du den Einwand mitgedacht hast."
    }
   ]
  },
  {
   "id": "tc2s3",
   "stufe": 2,
   "titel": "Kohärenz und Kohäsion auf C2",
   "kurz": "Verweise, Konnektoren, Absatzübergänge: Wie aus einzelnen Gedanken ein Text wird, der sich wie aus einem Guss liest",
   "ziel": "Nach diesem Block verknüpfst du Sätze und Absätze so, dass die logische Beziehung jederzeit sichtbar ist, und vermeidest unklare Verweise und bloßes Aneinanderreihen.",
   "zeichen": "🧵",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Der vorige Absatz handelte von den Kosten der Kontrolle. Welches Wort leitet den neuen Absatz am genauesten ein? „___ wiegt allerdings ein zweites Argument, das über das Geld hinausgeht.“",
     "opt": [
      "Schwerer",
      "Außerdem",
      "Trotzdem"
     ],
     "loesung": 0,
     "erklaerung": "„Schwerer“ knüpft an den vorigen Absatz an und gewichtet zugleich: Das neue Argument ist wichtiger. „Außerdem“ würde nur aufzählen."
    },
    {
     "art": "wahl",
     "frage": "Welcher Text enthält einen unklaren Verweis?",
     "opt": [
      "Die Psychologin und die Mitarbeiterin sprechen über Kontrolle. Sie hält sie für zu teuer.",
      "Die Psychologin hält Kontrolle für teuer, weil diese Arbeitszeit bindet.",
      "Die Psychologin spricht über Kontrolle. Diese, so ihre These, sei teurer als Vertrauen."
     ],
     "loesung": 0,
     "erklaerung": "Wer ist „sie“, die Psychologin oder die Mitarbeiterin? „Diese“ und „jene“ helfen, wenn mehrere Bezugswörter infrage kommen."
    },
    {
     "art": "wahl",
     "frage": "„___ der Begriff Luxusgut übertreibt, trifft er doch einen wahren Kern.“ Welcher Konnektor passt?",
     "opt": [
      "Wenngleich",
      "Sofern",
      "Indem"
     ],
     "loesung": 0,
     "erklaerung": "„Wenngleich“ leitet ein Zugeständnis ein und klingt gehobener als „obwohl“. „Sofern“ wäre eine Bedingung, „indem“ ein Mittel."
    },
    {
     "art": "wahl",
     "frage": "„Talheim hält den Zusammenhang zwischen Langeweile und Kreativität für gering. Hellwig ___ sieht in der Langeweile den Ursprung eigenen Spiels.“",
     "opt": [
      "hingegen",
      "folglich",
      "zumal"
     ],
     "loesung": 0,
     "erklaerung": "„Hingegen“ stellt zwei Quellen einander gegenüber und kann im Mittelfeld stehen. So wird aus zwei Meinungen ein Vergleich."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz führt am besten vom Absatz über die Gesundheitsfolgen von Lärm zum Absatz über seine soziale Verteilung?",
     "opt": [
      "Wenn Lärm krank macht, wird seine Verteilung zu einer Frage der Gerechtigkeit.",
      "Jetzt kommt ein anderes Thema.",
      "Lärm ist auch in anderer Hinsicht ein Problem."
     ],
     "loesung": 0,
     "erklaerung": "Der Satz nimmt das Ergebnis des vorigen Absatzes auf und macht daraus die Voraussetzung des nächsten. So entsteht ein roter Faden."
    },
    {
     "art": "wahl",
     "frage": "Wie vermeidest du, zwölfmal „das Smartphone“ zu schreiben, ohne unklar zu werden?",
     "opt": [
      "Du wechselst mit „das Gerät“, „das Telefon“ und Pronomen, solange der Bezug eindeutig bleibt.",
      "Du lässt das Wort einfach weg, der Leser weiß ja, worum es geht.",
      "Du schreibst ab dem zweiten Mal nur noch „es“."
     ],
     "loesung": 0,
     "erklaerung": "Wiederaufnahme durch Synonyme und Oberbegriffe hält den Text zusammen und zeigt Wortschatz. Ein Pronomen allein trägt über mehrere Sätze nicht."
    },
    {
     "art": "wahl",
     "frage": "Wie verbindest du diese beiden Sätze am elegantesten? „Die Kassen stimmen meistens. Auf dem Land kennt fast jeder jeden.“",
     "opt": [
      "Die Kassen stimmen meistens, und auf dem Land kennt fast jeder jeden.",
      "Dass die Kassen meistens stimmen, liegt auch daran, dass auf dem Land fast jeder jeden kennt.",
      "Die Kassen stimmen meistens. Weil auf dem Land kennt fast jeder jeden."
     ],
     "loesung": 1,
     "erklaerung": "Die Konstruktion „Dass …, liegt daran, dass …“ macht den Grund ausdrücklich. „Und“ verbindet nur, ohne die Beziehung zu benennen."
    },
    {
     "art": "wahl",
     "frage": "Ein Absatz beginnt vier Sätze nacheinander mit „Außerdem“, „Darüber hinaus“, „Zudem“ und „Ferner“. Was ist das Problem?",
     "opt": [
      "Der Absatz reiht nur auf und zeigt keine logische Beziehung wie Gegensatz, Folge oder Gewichtung.",
      "Der Absatz ist zu kurz.",
      "Es gibt kein Problem, viele Konnektoren zeigen ein hohes Niveau."
     ],
     "loesung": 0,
     "erklaerung": "Kohärenz entsteht durch die richtige Beziehung, nicht durch die Zahl der Konnektoren. Frag dich bei jedem Übergang: Was folgt woraus?"
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der zwei Quellen zu einer gemeinsamen Folgerung verbindet.",
     "teile": [
      "Daraus",
      "ergibt",
      "sich",
      "eine",
      "unbequeme",
      "Folgerung,",
      "die",
      "beide",
      "Quellen",
      "ziehen."
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
     "erklaerung": "„Daraus“ verweist auf den vorigen Gedanken zurück, der Relativsatz bindet beide Quellen ein."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit einer Proportionalkonstruktion.",
     "teile": [
      "Je",
      "häufiger",
      "wir",
      "eine",
      "Erinnerung",
      "erzählen,",
      "desto",
      "stärker",
      "wird",
      "sie",
      "bearbeitet."
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
     "erklaerung": "„Je …, desto …“: Im ersten Teil steht das Verb am Ende, im zweiten folgt es direkt auf den Komparativ."
    }
   ]
  },
  {
   "id": "tc2s4",
   "stufe": 2,
   "titel": "Einen Hörtext zusammenfassen",
   "kurz": "Eigene Worte, die Hauptpunkte in der Reihenfolge des Hörtextes, keine Wertung: die Sprache der Zusammenfassung",
   "ziel": "Nach diesem Block formulierst du eine Zusammenfassung, die klar sagt, wer spricht, die Gedanken des Hörtextes in eigenen Worten wiedergibt und deine Meinung draußen lässt.",
   "zeichen": "🎧",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz eignet sich als Einleitung der Zusammenfassung?",
     "opt": [
      "In dem Radiointerview erörtert die Entwicklungspsychologin Marlene Hellwig die Frage, ob man Kinder vor Langeweile schützen sollte.",
      "Ich habe ein sehr interessantes Interview über Kinder gehört.",
      "Frau Hellwig hat völlig recht, Kinder brauchen Langeweile."
     ],
     "loesung": 0,
     "erklaerung": "Textsorte, Sprecherin mit Funktion und Thema in einem Satz. Die anderen Sätze sprechen über dich oder bewerten."
    },
    {
     "art": "wahl",
     "frage": "Original: „Das Bewusstsein gewöhnt sich, der Kreislauf gewöhnt sich nicht.“ Welche Fassung gibt das in eigenen Worten wieder?",
     "opt": [
      "Die Referentin erklärt, man nehme Dauerlärm irgendwann nicht mehr bewusst wahr, der Körper reagiere aber weiterhin darauf.",
      "Das Bewusstsein gewöhnt sich, der Kreislauf aber nicht.",
      "Lärm schadet dem Herzen, sagt sie, und das finde ich auch."
     ],
     "loesung": 0,
     "erklaerung": "Gleicher Inhalt, andere Wörter, mit Redeeinleitung und Konjunktiv I. Die zweite Fassung ist fast wörtlich, die dritte enthält eine Wertung."
    },
    {
     "art": "wahl",
     "frage": "Der Rechtspsychologe erzählt, dass er und seine Schwester sich beide erinnern, als Kind von demselben Hund gebissen worden zu sein. Wie gehst du in der Zusammenfassung damit um?",
     "opt": [
      "Du lässt die Anekdote weg oder nennst sie höchstens kurz als Beispiel dafür, dass sich auch nahestehende Menschen verschieden erinnern.",
      "Du erzählst die Geschichte ausführlich nach, weil sie gut im Gedächtnis bleibt.",
      "Du machst sie zu einem eigenen Hauptpunkt."
     ],
     "loesung": 0,
     "erklaerung": "Anekdoten veranschaulichen eine These, sie sind selbst keine. In der Zusammenfassung zählt der Gedanke, den sie stützen."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz gehört NICHT in eine Zusammenfassung?",
     "opt": [
      "Die Sprecherin vertritt die These, Kontrolle sei teurer als Vertrauen.",
      "Die Sprecherin übertreibt maßlos, wenn sie behauptet, Kontrolle sei teurer als Vertrauen.",
      "Als Beleg führt sie eine Studie in einem Softwarehaus an."
     ],
     "loesung": 1,
     "erklaerung": "„Übertreibt maßlos“ ist dein Urteil. Die Zusammenfassung gibt wieder, was gesagt wurde, und überlässt die Bewertung dem Leser."
    },
    {
     "art": "wahl",
     "frage": "Der Sprecher sagt, Zeugen müssten möglichst früh befragt werden. Welche Redeeinleitung trifft seine Absicht am genauesten?",
     "opt": [
      "Er empfiehlt, Zeugen möglichst früh zu befragen.",
      "Er erzählt, Zeugen würden früh befragt.",
      "Er vermutet, man könne Zeugen auch früh befragen."
     ],
     "loesung": 0,
     "erklaerung": "Es geht um einen Rat, also „empfehlen“ oder „fordern“. „Erzählen“ macht daraus einen Bericht, „vermuten“ schwächt die Aussage ab."
    },
    {
     "art": "wahl",
     "frage": "In welchem Tempus schreibst du die Zusammenfassung in der Regel?",
     "opt": [
      "Im Präsens, Vorzeitiges im Perfekt",
      "Im Präteritum, weil der Hörtext vorbei ist",
      "Im Futur, weil die Prüfer den Text erst später lesen"
     ],
     "loesung": 0,
     "erklaerung": "Die Zusammenfassung gibt einen Text wieder, der als Ganzes vorliegt. Dafür ist das Präsens üblich: „Der Referent erläutert …“."
    },
    {
     "art": "wahl",
     "frage": "Wie viele zentrale Gliederungspunkte muss die Zusammenfassung bei telc C2 mindestens enthalten?",
     "opt": [
      "Fünf",
      "Zwei",
      "Zehn"
     ],
     "loesung": 0,
     "erklaerung": "Mindestens fünf Hauptpunkte. Für den Inhalt gibt es je Hauptpunkt einen Punkt und für zehn Unterpunkte je zwei Punkte."
    },
    {
     "art": "wahl",
     "frage": "Musst du in der Zusammenfassung jeden einzelnen Satz in den Konjunktiv I setzen?",
     "opt": [
      "Nein. Wichtig ist, dass jederzeit klar ist, wer spricht. Redeeinleitungen, Konjunktiv I und Wendungen wie „nach Ansicht der Referentin“ wechseln sich ab.",
      "Ja, jeder Satz ohne Konjunktiv I führt zu Punktabzug.",
      "Nein, auf C2 verwendet man den Konjunktiv I gar nicht mehr."
     ],
     "loesung": 0,
     "erklaerung": "Abwechslung ist erwünscht. Eintönige Reihen aus „Sie sagt, … Sie sagt, …“ schwächen die Sprache, fehlende Kennzeichnung schwächt den Inhalt."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der den letzten Hauptpunkt eines Vortrags wiedergibt.",
     "teile": [
      "Abschließend",
      "fordert",
      "die",
      "Referentin,",
      "ruhige",
      "Orte",
      "systematisch",
      "zu",
      "erfassen",
      "und",
      "zu",
      "schützen."
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
      11
     ],
     "erklaerung": "„Abschließend“ signalisiert den letzten Punkt, das Redeverb „fordern“ trifft die Absicht, der Infinitiv mit „zu“ trägt den Inhalt."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, mit dem der erste Hauptpunkt eingeleitet wird.",
     "teile": [
      "Zunächst",
      "erläutert",
      "der",
      "Sprecher,",
      "dass",
      "Erinnern",
      "eine",
      "Rekonstruktion",
      "sei."
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
     "erklaerung": "„Zunächst“ ordnet den Punkt ein, „erläutern“ zeigt, dass etwas erklärt wird, und „sei“ markiert die Wiedergabe."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "mitteilung",
   "name": "Hören und Zusammenfassen",
   "kurz": "Ein Hörtext, nur einmal, dann eine Zusammenfassung",
   "was": "Du hörst einen Vortrag oder ein Interview von etwa fünfzehn Minuten, nur einmal, und machst Notizen. Danach schreibst du eine Zusammenfassung mit mindestens fünf Hauptpunkten.",
   "tipp": "Notizen in zwei Spalten: links die Hauptpunkte, rechts die Details. Beim Schreiben die Reihenfolge des Hörtextes beibehalten.",
   "zeichen": "🎧",
   "farbe": "turq",
   "punkte": 40,
   "runden": [
    {
     "id": "tc2s1r1",
     "titel": "Vertrauen",
     "aufgaben": [
      {
       "id": "tc2z1",
       "sorte": "aufsatz",
       "an": "",
       "hoertext": {
        "titel": "Vortrag: Wie Vertrauen in Organisationen entsteht und zerbricht",
        "wer": "Frau",
        "text": "Guten Abend, meine Damen und Herren, und danke, dass Sie nach einem langen Arbeitstag noch hierhergekommen sind. Ich sehe einige bekannte Gesichter aus der Personalarbeit, und ich sehe, dass die hinteren Reihen besser besetzt sind als die vorderen. Das ist bei Vorträgen über Vertrauen übrigens immer so, ich habe aufgehört, das persönlich zu nehmen. Sie werden sich vielleicht fragen, was eine Wirtschaftspsychologin über Vertrauen sagen kann, das nicht schon in jedem Führungsratgeber steht. Ich will es versuchen, und ich fange mit einer Definition an, weil man im Alltag unter Vertrauen meistens ein warmes Gefühl versteht. In der Forschung ist Vertrauen etwas Nüchterneres. Es ist eine Vorleistung. Wer vertraut, macht sich verletzbar, obwohl er nicht weiß, wie der andere sich verhalten wird. Ich gebe meiner Kollegin einen halbfertigen Entwurf und rechne damit, dass sie ihn nicht in der nächsten Sitzung gegen mich verwendet. Ich erzähle meinem Chef von einem Fehler, den außer mir noch niemand bemerkt hat. Wenn ich wüsste, was passiert, bräuchte ich kein Vertrauen, dann hätte ich Gewissheit. Vertrauen ist also immer eine Wette auf das Verhalten eines anderen, und das ist der erste Gedanke, den Sie bitte mitnehmen. Nun gibt es einen Satz, den Sie alle kennen und den man gern einem russischen Revolutionär zuschreibt, obwohl er ihn so wahrscheinlich nie gesagt hat: Vertrauen ist gut, Kontrolle ist besser. Ich halte diesen Satz für betriebswirtschaftlich falsch. Und zwar nicht aus moralischen Gründen, sondern aus ganz praktischen. Kontrolle kostet. Das wird gern vergessen, weil diese Kosten in keiner Bilanz als eigener Posten auftauchen. Sie verstecken sich in den Arbeitstagen von Leuten, die eigentlich etwas anderes tun sollten. Jede Freigabe, jede zweite Unterschrift, jeder Bericht, den jemand schreibt, damit ein anderer ihn abheftet, kostet Arbeitszeit. Ein Kollege von mir hat in einem mittelständischen Maschinenbauunternehmen einmal ausgerechnet, wie viele Stunden im Jahr allein dafür verwendet wurden, Reisekostenabrechnungen unter fünfzig Euro doppelt zu prüfen. Ich verrate Ihnen die Zahl nicht, sonst gibt es morgen in Ihren Häusern Unruhe. Nur so viel: Die entdeckten Fehler hätten diese Stunden nicht annähernd bezahlt. Und Kontrolle hat noch einen zweiten Haken. Sie erfasst nur, was man vorher festgelegt hat. Was niemand vorhergesehen hat, also gerade die heiklen Fälle, rutscht durch. Vertrauen ist deshalb nicht die naive Alternative zur Kontrolle. Es macht eine Organisation überhaupt erst handlungsfähig, weil man nie alles kontrollieren kann. Kontrolle ist teurer, und sie ersetzt Vertrauen nicht. Damit komme ich zum zweiten Teil. Woran machen wir eigentlich fest, ob wir jemandem vertrauen? Die Forschung unterscheidet seit Langem drei Quellen, und ich finde diese Einteilung bis heute sehr brauchbar. Die erste ist Kompetenz: Kann der andere, was er verspricht? Die zweite ist Wohlwollen: Meint er es gut mit mir, oder bin ich ihm gleichgültig? Und die dritte ist Integrität: Hält er sich an Grundsätze, die ich nachvollziehen kann, auch wenn es ihm gerade nicht nützt? Kompetenz, Wohlwollen, Integrität. Wenn Sie sich heute Abend nur drei Wörter merken, dann diese. Interessant ist, wie unterschiedlich die drei in Unternehmen gewichtet werden. Bei der Auswahl von Führungskräften schauen wir fast nur auf Kompetenz. Fachwissen, Erfolge, Kennzahlen. In unseren Befragungen zeigt sich aber, dass Kompetenz allein kaum Vertrauen in eine Vorgesetzte oder einen Vorgesetzten erzeugt. Man hält sie dann für fähig, aber man erzählt ihnen nichts. Eine Teilnehmerin hat das in einem Interview sehr schön formuliert. Sie sagte über ihren Abteilungsleiter: Der weiß alles, aber ich weiß nicht, ob er auf meiner Seite steht. Genau das ist der Unterschied zwischen Kompetenz und Wohlwollen. Die dritte Quelle, die Integrität, ist die heikelste. Sie wird nämlich fast nie an den großen Entscheidungen gemessen, sondern an Kleinigkeiten. Ich gebe Ihnen ein Beispiel aus einem Krankenhausverbund, den wir zwei Jahre lang begleitet haben. Die Geschäftsführung hatte ein Sparprogramm aufgelegt, und das wurde, wie Sie sich vorstellen können, nicht begeistert aufgenommen. Es gab weniger Fortbildungen, frei werdende Stellen wurden nicht nachbesetzt, und auf den Stationen wurde es enger. Trotzdem haben die Leute es eine ganze Weile mitgetragen, weil die Begründung nachvollziehbar war. Gekippt ist die Stimmung an einem einzigen Tag im Frühjahr, und zwar wegen eines Dienstwagens. Ein neuer, ziemlich großer Dienstwagen für ein Mitglied der Geschäftsführung, der eines Morgens auf dem Parkplatz vor der Notaufnahme stand. Finanziell spielte das für das Sparprogramm überhaupt keine Rolle. Aber jeder, der morgens zur Schicht kam, ging an diesem Auto vorbei. Und jeder hat sich gefragt: Gilt das, was die uns erzählen, eigentlich auch für sie selbst? Sie sehen, Integrität ist kein abstrakter Wert. Menschen prüfen sie an kleinen Widersprüchen zwischen dem, was gesagt wird, und dem, was sie sehen. Und diese Widersprüche merken sie sich sehr lange. Das bringt mich zum dritten Punkt, und der ist vielleicht der unbequemste. Vertrauen entsteht langsam, aber es bricht schnell. In der Fachliteratur spricht man von einer Asymmetrie. Wenn Sie einen neuen Kollegen bekommen, tasten Sie sich vor. Sie geben ihm eine kleine Aufgabe, dann eine größere, Sie erzählen ihm etwas Persönliches und schauen, was er damit macht. Das dauert Monate, manchmal Jahre. Und oft merken Sie gar nicht, dass Sie gerade jemandem Vertrauen schenken, so selbstverständlich geschieht das. Zerstört wird dasselbe Vertrauen dagegen in einem Augenblick. Wir haben das in Laborversuchen ganz gut abbilden können. Versuchspersonen spielen dabei mit einem Partner, den sie nicht sehen, um kleine Geldbeträge, und der Partner hält sich mal an Absprachen und mal nicht. Ein einziger Bruch einer Absprache hatte ungefähr dasselbe Gewicht wie zehn eingehaltene. Man könnte also sagen, ein gebrochenes Versprechen wiegt so schwer wie zehn gehaltene, manchmal schwerer. Das ist übrigens kein Fehler unserer Wahrnehmung. Evolutionär ergibt das durchaus Sinn. Wer einem Betrüger zu schnell verzeiht, verliert mehr als jemand, der einem ehrlichen Partner etwas zu lange misstraut. Für Führungskräfte heißt das allerdings: Ihre gehaltenen Versprechen sind sozusagen die Grundausstattung. Jedes gebrochene kostet Sie sehr viel. Besonders gefährlich ist diese Asymmetrie in Zeiten der Veränderung, also bei Umstrukturierungen, Fusionen oder beim Wechsel an der Spitze. Ich erzähle Ihnen kurz von einem Versicherungsunternehmen, das zwei Standorte zusammenlegen wollte. Die Entscheidung war im Vorstand gefallen, aber man wollte sie erst verkünden, wenn alle Einzelheiten geklärt waren. Das klingt verantwortungsvoll. Es hat aber dazu geführt, dass die Belegschaft sechs Wochen lang wusste, dass etwas im Busch war, und nicht wusste, was. Und was passiert in so einem Fall? Die Leute reden. In der Kantine, auf dem Flur, in der Raucherecke. Am Ende dieser sechs Wochen kursierten drei verschiedene Versionen, von denen die harmloseste den Abbau von einem Drittel aller Stellen vorsah. Tatsächlich ging es um sehr viel weniger. Am Ende fielen an beiden Standorten zusammen kaum zwei Dutzend Stellen weg, und das fast nur durch den Ruhestand. Aber als die offizielle Mitteilung kam, hat ihr niemand mehr geglaubt. Man hat sie als Beschönigung gelesen. Die Lehre daraus ist einfach, und sie wird trotzdem ständig missachtet: Jede Lücke in der Information wird mit Gerüchten gefüllt, und Gerüchte sind fast immer schlimmer als die Wahrheit. Es ist besser zu sagen: Wir wissen noch nicht alles, aber das hier wissen wir schon. Ich komme zum vierten Punkt, und hier muss ich ein wenig gegen den Zeitgeist sprechen. Wir leben in einer Zeit, in der man fast alles messen kann, was Menschen bei der Arbeit tun. Tastenanschläge, Antwortzeiten, Anwesenheit im Netzwerk. Ich habe neulich ein Programm gesehen, das sogar auswertet, wie lange jemand für eine Antwort im Chat braucht, und daraus eine Art Engagementwert berechnet. Ich gebe zu, ich musste zweimal hinschauen. Und viele Unternehmen tun es auch, oft mit der besten Absicht. Man möchte gerecht sein, man möchte Leistung sichtbar machen. Mein Punkt ist: Solche Kontrollsysteme können genau das Vertrauen zerstören, von dem eine Organisation lebt. Warum? Weil Kontrolle eine Botschaft hat. Wer jemanden überwacht, sagt ihm damit: Ich gehe davon aus, dass du dich ohne Aufsicht nicht anständig verhältst. Und Menschen reagieren auf diese Botschaft. Nicht unbedingt mit Protest. Viel häufiger reagieren sie, indem sie genau das tun, was gemessen wird, und keinen Handgriff mehr. Das nennt man im Deutschen sehr treffend Dienst nach Vorschrift. Die Kollegin, die früher abends noch schnell einen Kunden zurückgerufen hat, ohne dass es irgendwo stand, tut das nicht mehr. Warum auch? Es wird ja nicht gezählt. Und dann wundert man sich, dass die Kennzahlen stimmen und die Kunden trotzdem unzufrieden sind. Wir haben das vor zwei Jahren in einer Studie mit einem Softwarehaus genauer untersucht. Das Unternehmen hatte in der Zeit, in der fast alle von zu Hause gearbeitet haben, eine Software eingeführt, die alle paar Minuten erfasst, ob jemand am Rechner aktiv ist. Wir konnten zwei Abteilungen vergleichen, die sich ansonsten sehr ähnlich waren. Die eine bekam die Software sofort, die andere, aus organisatorischen Gründen, erst ein halbes Jahr später. Die Arbeitszeit, die gemessen wurde, war in beiden Abteilungen ungefähr gleich. Was sich aber deutlich unterschied, war alles, was nicht gemessen wurde. In der überwachten Abteilung haben die Leute seltener freiwillig Kollegen geholfen, seltener Verbesserungsvorschläge gemacht und seltener an Treffen teilgenommen, die keine Pflicht waren. Ein Teilnehmer hat uns auf die Frage, warum, nur geantwortet: Ich werde ja jetzt dafür bezahlt, dass sich meine Maus bewegt. Ich finde, in dieser ironischen Antwort steckt die ganze Sache. Das freiwillige Engagement, also das, was man in keinen Arbeitsvertrag schreiben kann, ist zurückgegangen. Und das, meine Damen und Herren, ist genau der Teil der Arbeit, von dem gute Unternehmen leben. Ich will Sie aber nicht ganz ohne Hoffnung nach Hause schicken. Der letzte Teil meines Vortrags beschäftigt sich deshalb mit der Frage, wie man verlorenes Vertrauen zurückgewinnt. Denn das ist möglich, nur eben mühsam. Am Anfang steht fast immer eine Entschuldigung, und über Entschuldigungen in Unternehmen könnte ich einen eigenen Abend lang reden. Die meisten sind nämlich keine. Sie kennen das: Es tut uns leid, falls sich jemand verletzt gefühlt hat. Oder: Es wurden Fehler gemacht. Achten Sie einmal auf die Grammatik solcher Sätze. Sie sind so gebaut, dass niemand etwas getan hat. Es wurden Fehler gemacht, aber von wem? Sie finden diese Sätze in fast jeder Pressemitteilung, wenn ein Unternehmen in Schwierigkeiten ist. Ich sammle sie inzwischen, meine Studierenden finden das sehr unterhaltsam. Unsere Daten zeigen recht eindeutig, dass solche Formulierungen eher schaden als nützen. Eine Entschuldigung wirkt nur, wenn sie konkret sagt, was falsch war, und wenn jemand die Verantwortung dafür übernimmt, mit Namen und Funktion. Das fällt Führungskräften enorm schwer, weil sie fürchten, damit angreifbar zu werden. Aber denken Sie an meine Definition vom Anfang. Wer vertrauen will, muss sich verletzbar machen. Das gilt eben auch für den, der Vertrauen zurückgewinnen will. Die Entschuldigung ist allerdings nur der Anfang. Danach beginnt der langweilige Teil, und der ist der wichtigere. Erinnern Sie sich an die Asymmetrie: Ein Bruch wiegt schwer, also braucht es viele gehaltene Zusagen, um ihn auszugleichen. Unsere Empfehlung an das Krankenhaus, von dem ich vorhin erzählt habe, war deshalb nicht, ein großes Leitbild zu verfassen. Davon hatten die schon zwei. Wir haben vorgeschlagen, kleine Zusagen zu machen, die man überprüfen kann. Zum Beispiel: Jede Anfrage aus den Stationen wird innerhalb einer Woche beantwortet, und jeden Monat wird veröffentlicht, wie oft das geklappt hat. Das klingt unspektakulär, und genau darum geht es. Große Worte kann man nicht überprüfen, eine Woche schon. Vertrauen kommt nicht durch große Worte zurück, sondern durch viele kleine Belege, über Monate hinweg. Nach etwa einem Jahr waren die Werte in den Befragungen wieder dort, wo sie vor dem Sparprogramm gewesen waren. Vom Dienstwagen spricht man dort übrigens bis heute, aber inzwischen eher als Anekdote. Damit bin ich am Ende. Ich danke Ihnen für Ihre Aufmerksamkeit, auch in den hinteren Reihen, und freue mich jetzt auf Ihre Fragen."
       },
       "situation": "Oberthema „Vertrauen\". Du hörst einen Vortrag von etwa fünfzehn Minuten, nur einmal. Mach beim Hören Notizen. Schreib danach eine Zusammenfassung in eigenen Worten mit mindestens fünf zentralen Gliederungspunkten.",
       "punkteText": "Darauf kommt es an",
       "punkte": [
        {
         "nr": 1,
         "was": "Mindestens fünf zentrale Gliederungspunkte",
         "hinweis": "Die Hauptgedanken in der Reihenfolge des Hörtextes."
        },
        {
         "nr": 2,
         "was": "Zu jedem Punkt die wichtigsten Details",
         "hinweis": "Beispiele, Gründe, Folgen, die den Punkt stützen."
        },
        {
         "nr": 3,
         "was": "Eigene Worte, sachlich, ohne eigene Wertung",
         "hinweis": "Indirekte Rede oder „laut der Referentin …\"."
        }
       ],
       "hilfen": [
        "Zunächst geht es um …",
        "Anschließend wird erläutert, dass …",
        "Ein weiterer zentraler Punkt ist …",
        "Als Beispiel wird … genannt.",
        "Abschließend wird betont, dass …"
       ],
       "muster": "In ihrem Vortrag erläutert eine Wirtschaftspsychologin, wie Vertrauen in Organisationen entsteht, wodurch es verloren geht und wie es sich zurückgewinnen lässt.\nZunächst definiert sie Vertrauen nicht als Gefühl, sondern als riskante Vorleistung. Wer vertraue, mache sich verletzbar, ohne zu wissen, wie sich das Gegenüber verhalten werde. Kontrolle sei dafür kein gleichwertiger Ersatz, denn sie verursache erhebliche Kosten und erfasse nur, was man vorhergesehen habe. Vertrauen sei daher keine naive Alternative, sondern die Voraussetzung dafür, dass eine Organisation überhaupt handeln könne.\nAnschließend stellt die Referentin drei Grundlagen von Vertrauen vor: Kompetenz, Wohlwollen und Integrität. Bei der Auswahl von Führungskräften werde vor allem auf Kompetenz geachtet, doch Fachwissen allein führe nicht dazu, dass sich Mitarbeiter ihren Vorgesetzten anvertrauen. Integrität werde an kleinen Widersprüchen zwischen Worten und Taten gemessen, wie das Beispiel eines neuen Dienstwagens während eines Sparprogramms in einem Krankenhausverbund zeige. Ein solcher Widerspruch habe dort die Zustimmung zu dem Sparprogramm kippen lassen.\nIm dritten Teil beschreibt sie eine Asymmetrie: Vertrauen baue sich langsam auf, gehe aber schnell verloren. In Experimenten habe ein einziger Bruch einer Absprache etwa so viel gezählt wie zehn eingehaltene. Bei Umstrukturierungen sei das besonders gefährlich, weil fehlende Informationen sofort durch Gerüchte ersetzt würden, die meist dramatischer seien als die Wirklichkeit. Sie empfiehlt deshalb, auch unvollständige Informationen früh weiterzugeben.\nDer vierte Punkt betrifft digitale Kontrollsysteme. Nach Ansicht der Referentin vermittelt Überwachung den Beschäftigten Misstrauen, worauf diese mit Dienst nach Vorschrift reagierten. Sie erledigten dann nur noch, was gemessen werde. Eine Studie in einem Softwareunternehmen habe gezeigt, dass die Messung der Aktivität am Rechner während der Arbeit von zu Hause die erfasste Arbeitszeit zwar nicht verändert, das freiwillige Engagement aber deutlich verringert habe.\nAbschließend erklärt sie, wie sich verlorenes Vertrauen wiederherstellen lässt. Eine Entschuldigung müsse den Fehler konkret benennen, und eine verantwortliche Person müsse dafür einstehen. Darauf müssten über viele Monate kleine, überprüfbare Zusagen folgen, deren Einhaltung offen dokumentiert werde. Große Leitbilder hält sie dagegen für wirkungslos. Im Fall des Krankenhauses hätten sich die Werte in den Befragungen auf diese Weise nach etwa einem Jahr erholt.",
       "rubrik": [
        {
         "t": "Hauptpunkt 1: Vertrauen ist eine riskante Vorleistung, kein Gefühl",
         "h": "Details: Wer vertraut, macht sich trotz Ungewissheit verletzbar · Kontrolle ersetzt Vertrauen nicht und ist teurer",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "Punkt und beide Details"
          },
          {
           "w": 3,
           "t": "B",
           "d": "Punkt und ein Detail"
          },
          {
           "w": 1,
           "t": "C",
           "d": "nur der Punkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "fehlt"
          }
         ]
        },
        {
         "t": "Hauptpunkt 2: Drei Quellen: Kompetenz, Wohlwollen und Integrität",
         "h": "Details: Kompetenz allein schafft bei Vorgesetzten kein Vertrauen · Integrität wird an kleinen Widersprüchen gemessen",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "Punkt und beide Details"
          },
          {
           "w": 3,
           "t": "B",
           "d": "Punkt und ein Detail"
          },
          {
           "w": 1,
           "t": "C",
           "d": "nur der Punkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "fehlt"
          }
         ]
        },
        {
         "t": "Hauptpunkt 3: Vertrauen wächst langsam und bricht schnell",
         "h": "Details: Ein Bruch wiegt so schwer wie zehn gehaltene Absprachen · Bei Umstrukturierungen füllen Gerüchte jede Informationslücke",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "Punkt und beide Details"
          },
          {
           "w": 3,
           "t": "B",
           "d": "Punkt und ein Detail"
          },
          {
           "w": 1,
           "t": "C",
           "d": "nur der Punkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "fehlt"
          }
         ]
        },
        {
         "t": "Hauptpunkt 4: Kontrollsysteme können Vertrauen in Organisationen zerstören",
         "h": "Details: Überwachung signalisiert Misstrauen und führt zu Dienst nach Vorschrift · Aktivitätsmessung im Homeoffice senkte das freiwillige Engagement",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "Punkt und beide Details"
          },
          {
           "w": 3,
           "t": "B",
           "d": "Punkt und ein Detail"
          },
          {
           "w": 1,
           "t": "C",
           "d": "nur der Punkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "fehlt"
          }
         ]
        },
        {
         "t": "Hauptpunkt 5: Wie man verlorenes Vertrauen zurückgewinnen kann",
         "h": "Details: Eine Entschuldigung muss konkret sein und Verantwortung übernehmen · Danach zählen kleine, überprüfbare Zusagen über viele Monate",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "Punkt und beide Details"
          },
          {
           "w": 3,
           "t": "B",
           "d": "Punkt und ein Detail"
          },
          {
           "w": 1,
           "t": "C",
           "d": "nur der Punkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "fehlt"
          }
         ]
        },
        {
         "t": "Sprache",
         "h": "Genau, abwechslungsreich, gut verknüpft, kaum Fehler?",
         "stufen": [
          {
           "w": 15,
           "t": "A",
           "d": "durchgehend C2"
          },
          {
           "w": 10,
           "t": "B",
           "d": "weitgehend C2"
          },
          {
           "w": 5,
           "t": "C",
           "d": "oft eingeschränkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht angemessen"
          }
         ]
        }
       ],
       "max": 40,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 330,
       "platzhalter": "Schreib hier deine Zusammenfassung …",
       "rubrikTitel": "Bewerte deine Zusammenfassung",
       "rubrikHinweis": "Inhalt wie bei telc: je Hauptpunkt 1 Punkt, je Detail 2 Punkte, zusammen 25. Die Sprache bewertet telc als Ganzes mit bis zu 15 Punkten; die Stufen hier sind eine Übungsschätzung. telc nennt keine Wortzahl."
      }
     ]
    },
    {
     "id": "tc2s1r2",
     "titel": "Langeweile",
     "aufgaben": [
      {
       "id": "tc2z2",
       "sorte": "aufsatz",
       "an": "",
       "hoertext": {
        "titel": "Radiointerview: Muss man Kinder vor Langeweile schützen?",
        "zeilen": [
         {
          "wer": "Mann",
          "text": "Guten Abend und willkommen zu unserer Sendung über Familie und Erziehung. Heute geht es um ein Gefühl, das jeder kennt und das niemand mag, nämlich die Langeweile. Bei mir im Studio ist die Entwicklungspsychologin Marlene Hellwig, die in Kassel lehrt und gerade ein Buch über Langeweile in der Kindheit veröffentlicht hat. Frau Hellwig, schön, dass Sie da sind."
         },
         {
          "wer": "Frau",
          "text": "Ich freue mich, danke für die Einladung."
         },
         {
          "wer": "Mann",
          "text": "Ich fange mit einer persönlichen Beobachtung an. Wenn meine Tochter sagt, ihr sei langweilig, dann springe ich fast reflexartig auf und schlage ihr irgendetwas vor. Bin ich da eine Ausnahme?"
         },
         {
          "wer": "Frau",
          "text": "Nein, ganz und gar nicht, und damit sind wir eigentlich schon beim Kern meines Buches. Eltern fürchten die Langeweile ihrer Kinder heute viel stärker als früher. Wir haben für eine Untersuchung die Wochenpläne von Grundschulkindern in mehreren Städten ausgewertet, und manche dieser Pläne sahen aus wie der Kalender einer Managerin. Montag Schwimmen, Dienstag Geige, Mittwoch Englisch für Kinder, Donnerstag Fußball, und am Freitag ist dann noch ein Kindergeburtstag. Freie, ungeplante Zeit kam bei vielen Kindern an manchen Tagen gar nicht mehr vor. Und das übrigens quer durch alle Schichten, das hat uns selbst überrascht."
         },
         {
          "wer": "Mann",
          "text": "Aber ist das denn so schlimm? Die Kinder lernen ja etwas dabei."
         },
         {
          "wer": "Frau",
          "text": "Sie lernen sicher etwas, das will ich gar nicht kleinreden. Mich interessiert eher, warum diese Pläne so voll sind. Und da haben wir in Gesprächen mit Eltern etwas gefunden, das mich wirklich überrascht hat. Viele Mütter und Väter empfinden es als persönliches Versagen, wenn sich ihr Kind langweilt. So, als hätten sie ihre Aufgabe nicht erfüllt."
         },
         {
          "wer": "Mann",
          "text": "Versagen ist ein starkes Wort."
         },
         {
          "wer": "Frau",
          "text": "Es ist das Wort, das die Eltern selbst benutzt haben. Eine Mutter hat mir erzählt, dass sie sich geschämt hat, als ihr Sohn bei einer Freundin zu Besuch war und dort gesagt hat, zu Hause sei es immer langweilig. Sie hat danach tatsächlich noch einen Kurs für ihn gesucht. Dahinter steckt die Vorstellung, dass gute Eltern ihre Kinder ständig fördern müssen. Und ein gelangweiltes Kind wirkt dann wie ein Beweis dafür, dass man zu wenig getan hat."
         },
         {
          "wer": "Mann",
          "text": "Woher kommt diese Vorstellung? Unsere Eltern hatten sie offenbar nicht. Meine Mutter hat auf so einen Satz immer nur gesagt: Dann räum dein Zimmer auf."
         },
         {
          "wer": "Frau",
          "text": "Das haben viele gehört, ja. Ich glaube, es hat mit dem Druck zu tun, der heute auf der Bildung lastet. Wenn Eltern das Gefühl haben, jede Stunde zähle für die Zukunft, dann erscheint eine leere Stunde als verschenkt."
         },
         {
          "wer": "Mann",
          "text": "Lassen Sie uns einen Schritt zurückgehen. Was ist Langeweile eigentlich, psychologisch gesehen?"
         },
         {
          "wer": "Frau",
          "text": "Für mich ist Langeweile in erster Linie ein Signal, kein Defekt. Das ist vielleicht die wichtigste Botschaft, die ich habe. Wir behandeln Langeweile oft wie eine kleine Krankheit, gegen die man schnell etwas unternehmen muss. Dabei ist sie eher mit Hunger vergleichbar. Hunger sagt mir, dass ich etwas essen sollte. Langeweile sagt mir, dass das, was ich gerade tue, für mich keinen Sinn mehr hat oder keine Herausforderung mehr bietet."
         },
         {
          "wer": "Mann",
          "text": "Also eine Art innerer Wecker?"
         },
         {
          "wer": "Frau",
          "text": "So könnte man es sagen. Sie meldet sich, wenn die Aufmerksamkeit nichts mehr findet, woran sie sich festhalten kann. Und das ist ein durchaus nützliches Signal, denn es treibt uns dazu, etwas anderes zu suchen. Menschen, die nie Langeweile empfänden, würden vermutlich stundenlang dasselbe tun, auch wenn es zu nichts mehr führt."
         },
         {
          "wer": "Mann",
          "text": "Gibt es dafür Belege, oder ist das eher eine Theorie?"
         },
         {
          "wer": "Frau",
          "text": "Es gibt eine ganze Reihe von Untersuchungen. In einem bekannten Versuch sollten Erwachsene eine Viertelstunde allein in einem Raum sitzen, ohne Handy, ohne Buch. Ziemlich viele haben es vorgezogen, sich selbst einen leichten elektrischen Schlag zu geben, statt einfach nur dazusitzen. So unangenehm ist dieses Signal."
         },
         {
          "wer": "Mann",
          "text": "Das klingt jetzt fast so, als sollten wir uns alle öfter langweilen. Aber es gibt doch auch Menschen, für die Langeweile ein echtes Problem ist."
         },
         {
          "wer": "Frau",
          "text": "Unbedingt, und das möchte ich auch nicht verharmlosen. Man muss zwei Dinge unterscheiden. Das eine ist die vorübergehende Leere, die wir alle kennen, am Sonntagnachmittag, im Wartezimmer, in einer zähen Sitzung. Die geht vorbei, und sie ist, wie gesagt, oft sogar nützlich. Das andere ist eine chronische Langeweile, also ein Zustand, in dem einem Menschen über Wochen und Monate nichts mehr sinnvoll vorkommt. Das ist etwas ganz anderes. Chronische Langeweile hängt eng mit Niedergeschlagenheit zusammen, manchmal ist sie sogar ein frühes Anzeichen für eine Depression."
         },
         {
          "wer": "Mann",
          "text": "Woran erkennen Eltern denn den Unterschied?"
         },
         {
          "wer": "Frau",
          "text": "Vor allem daran, wie lange es dauert und ob das Kind noch an irgendetwas Freude hat. Ein Kind, das sich an einem verregneten Ferientag beklagt und am nächsten Tag begeistert mit Freunden draußen spielt, macht mir keine Sorgen. Wenn ein Jugendlicher aber über lange Zeit an nichts mehr Interesse zeigt, auch nicht an Dingen, die ihm früher wichtig waren, dann sollte man aufmerksam werden und vielleicht auch Hilfe suchen."
         },
         {
          "wer": "Mann",
          "text": "Kommen wir zurück zu den gesünderen Formen. Sie schreiben in Ihrem Buch, dass Langeweile kreativ macht. Das liest man inzwischen ziemlich oft. Ist das nicht ein bisschen romantisch?"
         },
         {
          "wer": "Frau",
          "text": "Es wird manchmal romantisch erzählt, das stimmt. Als ob jedes gelangweilte Kind anschließend eine Symphonie komponiert. Aber im Kern ist es richtig. Aus Langeweile entstehen eigenes Spiel und eigene Fantasie. Wir haben in Kindergärten und in Familien beobachtet, was passiert, wenn Kinder wirklich nichts vorgegeben bekommen. Und es gibt da ein ziemlich regelmäßiges Muster."
         },
         {
          "wer": "Mann",
          "text": "Nämlich?"
         },
         {
          "wer": "Frau",
          "text": "Zuerst kommt das Quengeln. Mir ist langweilig, was soll ich machen, das ist doof hier. Diese Phase dauert erstaunlich gleichbleibend etwa zehn Minuten. Und wenn die Erwachsenen sie aushalten, dann beginnen die Kinder fast immer von selbst etwas. Sie bauen aus Sofakissen eine Höhle, sie erfinden ein Spiel mit Regeln, die kein Erwachsener versteht, sie fangen an, einen Käfer im Garten zu beobachten. Das Wichtige daran ist, dass es ihre eigene Idee ist. Niemand hat sie ihnen vorgeschlagen."
         },
         {
          "wer": "Mann",
          "text": "Zehn Minuten können lang sein, wenn man danebensteht."
         },
         {
          "wer": "Frau",
          "text": "Sehr lang, ich kenne das aus eigener Erfahrung. Ich habe zwei Söhne, und ich habe auch nicht immer durchgehalten. Aber genau hier liegt das Problem, über das wir am Anfang gesprochen haben. Wenn Eltern die Leere sofort füllen, mit einem Vorschlag, einem Spiel, einem Film, dann unterbrechen sie den Vorgang genau an der Stelle, an der er unangenehm ist. Das Kind lernt dann: Wenn mir langweilig ist, kommt jemand und löst das für mich. Es lernt nicht, dass es selbst etwas gegen dieses Gefühl tun kann."
         },
         {
          "wer": "Mann",
          "text": "Was raten Sie also? Einfach gar nichts tun?"
         },
         {
          "wer": "Frau",
          "text": "Nicht ganz nichts. Man kann dem Kind zeigen, dass man es ernst nimmt. Ich verstehe, dass dir langweilig ist, das ist ein blödes Gefühl. Aber dann sollte man die Verantwortung für die Lösung beim Kind lassen. Es hilft, wenn Material da ist, mit dem man etwas anfangen kann, also Papier, Pappkartons, Stifte, etwas Werkzeug. Aber kein fertiges Programm."
         },
         {
          "wer": "Mann",
          "text": "Und wenn das Kind dann einfach zwei Stunden auf dem Sofa liegt?"
         },
         {
          "wer": "Frau",
          "text": "Dann liegt es eben zwei Stunden auf dem Sofa. Auch Herumliegen und an die Decke Starren ist nicht verschwendet. Da passiert im Kopf mehr, als man von außen sieht."
         },
         {
          "wer": "Mann",
          "text": "Jetzt muss ich das Thema ansprechen, auf das viele Hörer wahrscheinlich schon warten. Heute liegt ja nicht mehr nur das Kind auf dem Sofa, sondern daneben das Smartphone. Ändert das etwas?"
         },
         {
          "wer": "Frau",
          "text": "Es ändert sehr viel, und das ist einer der Gründe, warum ich das Buch überhaupt geschrieben habe. Das Smartphone verhindert genau die produktive Phase der Langeweile. Erinnern Sie sich an die zehn Minuten Quengeln? Mit einem Bildschirm in der Hand kommen die gar nicht mehr zustande. Die Langeweile wird unterbrochen, noch bevor sie ihre Wirkung entfalten kann. Das dauert dann keine zehn Minuten mehr, sondern drei Sekunden. Ich habe das bei meinen eigenen Söhnen beobachtet, und ehrlich gesagt auch bei mir selbst."
         },
         {
          "wer": "Mann",
          "text": "Aber die Langeweile wird dadurch doch beseitigt. Ist das nicht im Sinne des Kindes?"
         },
         {
          "wer": "Frau",
          "text": "Kurzfristig schon. Aber das Gerät beseitigt nicht die Ursache, es betäubt nur das Signal. Und es tut das auf eine besondere Weise. Die meisten Angebote sind so gebaut, dass sie nie zu Ende sind. Es gibt immer noch ein Video, noch eine Nachricht. Das heißt, das Kind erlebt nicht, wie aus einem unangenehmen Zustand etwas Eigenes entsteht. Es erlebt nur, wie der unangenehme Zustand verschwindet, solange der Bildschirm leuchtet. Und sobald er aus ist, ist die Langeweile wieder da, oft sogar stärker als vorher."
         },
         {
          "wer": "Mann",
          "text": "Merken Sie das auch bei Jugendlichen? Die sind ja noch mehr am Handy als die Kleinen."
         },
         {
          "wer": "Frau",
          "text": "Bei Jugendlichen ist es sogar deutlicher. Eine Kollegin von mir hat Schüler zwischen vierzehn und sechzehn Jahren gebeten, eine Woche lang aufzuschreiben, wann sie sich gelangweilt haben. Das Ergebnis war fast komisch. Viele haben geschrieben, sie hätten sich nie gelangweilt. Und dann haben sie in Gesprächen erzählt, dass sie an der Bushaltestelle, in der Pause, sogar beim Zähneputzen aufs Handy schauen. Sie hatten also gar keine Gelegenheit mehr, sich zu langweilen."
         },
         {
          "wer": "Mann",
          "text": "Das klingt doch eigentlich gut."
         },
         {
          "wer": "Frau",
          "text": "Bis man sie bittet, das Handy einmal für eine halbe Stunde wegzulegen. Dann zeigt sich, dass viele Jugendliche Leerlauf kaum noch aushalten. Sie werden unruhig, gereizt, manche sagen, sie bekämen fast Angst. Das ist kein Vorwurf an die Jugendlichen, wir Erwachsenen sind keinen Deut besser. Schauen Sie sich mal in einem Wartezimmer um. Aber bei Jugendlichen ist das Gehirn noch in einer Phase, in der es lernt, mit inneren Zuständen umzugehen. Und wenn es diesen einen Zustand nie aushalten muss, dann lernt es auch nicht, damit umzugehen."
         },
         {
          "wer": "Mann",
          "text": "Ich möchte zum Schluss noch auf einen Ort kommen, an dem Langeweile nicht so positiv gesehen wird, nämlich die Schule. Ist Langeweile im Unterricht auch ein nützliches Signal?"
         },
         {
          "wer": "Frau",
          "text": "Da muss man tatsächlich anders urteilen. Langeweile in der Schule ist etwas anderes als Langeweile am freien Nachmittag. Zu Hause kann das Kind selbst entscheiden, was es mit dem Signal anfängt. Im Unterricht kann es das nicht, es muss sitzen bleiben. Es kann nicht aufstehen und eine Höhle aus Sofakissen bauen. Und das macht die Langeweile dort zu einem echten Problem für das Lernen."
         },
         {
          "wer": "Mann",
          "text": "Langweilen sich in der Schule nicht vor allem die Kinder, denen alles zu leicht ist?"
         },
         {
          "wer": "Frau",
          "text": "Das ist die verbreitete Annahme, und sie stimmt nur zur Hälfte. Natürlich langweilen sich unterforderte Kinder. Aber die Forschung zeigt, dass sich überforderte Kinder fast genauso stark langweilen. Wer dem Stoff nicht mehr folgen kann, für den verliert der Unterricht ebenfalls jeden Sinn. Von außen sehen die beiden gleich aus, sie starren aus dem Fenster oder malen auf den Rand des Heftes. Aber die Ursachen sind entgegengesetzt."
         },
         {
          "wer": "Mann",
          "text": "Das heißt, ein Lehrer kann an einem gelangweilten Gesicht gar nicht ablesen, was los ist."
         },
         {
          "wer": "Frau",
          "text": "Genau. Und deshalb halte ich es für falsch, Langeweile im Unterricht zu bestrafen, etwa mit einer Ermahnung oder einer Strafarbeit. Damit lernt das Kind nur, sich besser zu verstellen. Viel sinnvoller ist es, die Langeweile anzusprechen. Ein Lehrer kann zum Beispiel fragen: Ist dir das gerade zu leicht oder zu schwer? Kinder können das erstaunlich genau sagen, wenn sie merken, dass die Frage ernst gemeint ist und keine Falle."
         },
         {
          "wer": "Mann",
          "text": "Das kostet aber Zeit, die Lehrer oft nicht haben."
         },
         {
          "wer": "Frau",
          "text": "Das ist richtig, und ich will auch nicht so tun, als ließe sich das in einer Klasse mit achtundzwanzig Kindern immer umsetzen. Aber schon die Haltung macht einen Unterschied. Wenn Lehrer Langeweile als Hinweis verstehen und nicht als Frechheit, dann ändert sich das Klima in einer Klasse."
         },
         {
          "wer": "Mann",
          "text": "Frau Hellwig, wenn Sie den Eltern, die uns heute zuhören, nur eine einzige Sache mitgeben könnten?"
         },
         {
          "wer": "Frau",
          "text": "Halten Sie die zehn Minuten aus. Und gönnen Sie sich selbst auch mal welche."
         },
         {
          "wer": "Mann",
          "text": "Das nehme ich mir zu Herzen, versprochen. Vielen Dank für das Gespräch."
         },
         {
          "wer": "Frau",
          "text": "Ich danke Ihnen."
         }
        ]
       },
       "situation": "Oberthema „Langeweile\". Du hörst ein Interview von etwa fünfzehn Minuten, nur einmal. Mach beim Hören Notizen. Schreib danach eine Zusammenfassung in eigenen Worten mit mindestens fünf zentralen Gliederungspunkten.",
       "punkteText": "Darauf kommt es an",
       "punkte": [
        {
         "nr": 1,
         "was": "Mindestens fünf zentrale Gliederungspunkte",
         "hinweis": "Die Hauptgedanken in der Reihenfolge des Hörtextes."
        },
        {
         "nr": 2,
         "was": "Zu jedem Punkt die wichtigsten Details",
         "hinweis": "Beispiele, Gründe, Folgen, die den Punkt stützen."
        },
        {
         "nr": 3,
         "was": "Eigene Worte, sachlich, ohne eigene Wertung",
         "hinweis": "Indirekte Rede oder „laut der Referentin …\"."
        }
       ],
       "hilfen": [
        "Zunächst geht es um …",
        "Anschließend wird erläutert, dass …",
        "Ein weiterer zentraler Punkt ist …",
        "Als Beispiel wird … genannt.",
        "Abschließend wird betont, dass …"
       ],
       "muster": "In einem Radiogespräch erläutert eine Entwicklungspsychologin, welche Bedeutung Langeweile für Kinder und Jugendliche hat und wie Erwachsene damit umgehen sollten.\nZu Beginn stellt sie fest, dass Eltern die Langeweile ihrer Kinder heute weit mehr fürchten als frühere Generationen. Die Wochenpläne vieler Grundschulkinder seien so dicht wie die Terminkalender von Führungskräften. Viele Eltern empfänden die Langeweile ihres Kindes sogar als eigenes Versagen, weil sie glaubten, ihr Kind ständig fördern zu müssen. Dahinter stehe der Druck, der heute auf der Bildung laste, sodass jede ungenutzte Stunde als verloren gelte.\nPsychologisch betrachtet sei Langeweile jedoch kein Defekt, sondern ein Signal. Ähnlich wie Hunger zeige sie an, dass die gegenwärtige Beschäftigung ihren Sinn verloren habe. Dieses Signal sei nützlich, weil es dazu antreibe, sich etwas Neuem zuzuwenden. Davon abzugrenzen sei allerdings eine chronische Langeweile, die über Wochen anhalte und auf eine Depression hindeuten könne. Eltern sollten vor allem darauf achten, ob ein Kind noch an irgendetwas Freude habe.\nIm Weiteren betont die Expertin, dass aus Langeweile eigenes Spiel und Fantasie entstünden. Nach einer Phase des Quengelns von etwa zehn Minuten fingen Kinder in der Regel von sich aus etwas an. Eltern sollten diese Leere deshalb nicht sofort mit Vorschlägen oder Medien füllen, sondern die Verantwortung beim Kind lassen. Hilfreich sei einfaches Material, aber kein fertiges Programm.\nAls besonderes Problem sieht sie das Smartphone, weil es die produktive Phase der Langeweile verhindere. Der Bildschirm unterbreche das unangenehme Gefühl, bevor daraus etwas Eigenes entstehen könne. Da digitale Angebote nie endeten, kehre die Langeweile nach dem Ausschalten oft verstärkt zurück. Bei Jugendlichen zeige sich die Folge besonders deutlich: Viele könnten Leerlauf kaum noch ertragen und reagierten ohne Handy unruhig oder gereizt.\nAbschließend unterscheidet sie die Langeweile in der Schule von der in der Freizeit, da Schüler im Unterricht nicht selbst auf das Signal reagieren könnten. Dort langweilten sich überforderte Kinder ebenso wie unterforderte. Lehrer sollten Langeweile deshalb nicht bestrafen, sondern ansprechen und nach ihrer Ursache fragen. Schon diese Haltung verändere das Klima in einer Klasse.",
       "rubrik": [
        {
         "t": "Hauptpunkt 1: Eltern fürchten die Langeweile ihrer Kinder stärker als früher",
         "h": "Details: Wochenpläne von Grundschulkindern gleichen Terminkalendern von Managern · Langeweile des Kindes gilt als Versagen der Eltern",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "Punkt und beide Details"
          },
          {
           "w": 3,
           "t": "B",
           "d": "Punkt und ein Detail"
          },
          {
           "w": 1,
           "t": "C",
           "d": "nur der Punkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "fehlt"
          }
         ]
        },
        {
         "t": "Hauptpunkt 2: Langeweile ist ein Signal und kein Defekt",
         "h": "Details: Sie zeigt, dass die Tätigkeit keinen Sinn mehr hat · Kurze Leere ist von chronischer Langeweile zu unterscheiden",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "Punkt und beide Details"
          },
          {
           "w": 3,
           "t": "B",
           "d": "Punkt und ein Detail"
          },
          {
           "w": 1,
           "t": "C",
           "d": "nur der Punkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "fehlt"
          }
         ]
        },
        {
         "t": "Hauptpunkt 3: Aus Langeweile entstehen eigenes Spiel und Fantasie",
         "h": "Details: Nach etwa zehn Minuten Quengeln beginnen Kinder selbst etwas · Eltern sollten die Leere nicht sofort füllen",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "Punkt und beide Details"
          },
          {
           "w": 3,
           "t": "B",
           "d": "Punkt und ein Detail"
          },
          {
           "w": 1,
           "t": "C",
           "d": "nur der Punkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "fehlt"
          }
         ]
        },
        {
         "t": "Hauptpunkt 4: Das Smartphone verhindert die produktive Phase der Langeweile",
         "h": "Details: Der Bildschirm unterbricht die Langeweile, bevor sie wirkt · Viele Jugendliche halten Leerlauf kaum noch aus",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "Punkt und beide Details"
          },
          {
           "w": 3,
           "t": "B",
           "d": "Punkt und ein Detail"
          },
          {
           "w": 1,
           "t": "C",
           "d": "nur der Punkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "fehlt"
          }
         ]
        },
        {
         "t": "Hauptpunkt 5: Langeweile in der Schule ist anders zu bewerten",
         "h": "Details: Unterforderte und überforderte Kinder langweilen sich gleichermaßen · Lehrer sollten Langeweile ansprechen, statt sie zu bestrafen",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "Punkt und beide Details"
          },
          {
           "w": 3,
           "t": "B",
           "d": "Punkt und ein Detail"
          },
          {
           "w": 1,
           "t": "C",
           "d": "nur der Punkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "fehlt"
          }
         ]
        },
        {
         "t": "Sprache",
         "h": "Genau, abwechslungsreich, gut verknüpft, kaum Fehler?",
         "stufen": [
          {
           "w": 15,
           "t": "A",
           "d": "durchgehend C2"
          },
          {
           "w": 10,
           "t": "B",
           "d": "weitgehend C2"
          },
          {
           "w": 5,
           "t": "C",
           "d": "oft eingeschränkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht angemessen"
          }
         ]
        }
       ],
       "max": 40,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 330,
       "platzhalter": "Schreib hier deine Zusammenfassung …",
       "rubrikTitel": "Bewerte deine Zusammenfassung",
       "rubrikHinweis": "Inhalt wie bei telc: je Hauptpunkt 1 Punkt, je Detail 2 Punkte, zusammen 25. Die Sprache bewertet telc als Ganzes mit bis zu 15 Punkten; die Stufen hier sind eine Übungsschätzung. telc nennt keine Wortzahl."
      }
     ]
    },
    {
     "id": "tc2s1r3",
     "titel": "Erinnern und Vergessen",
     "aufgaben": [
      {
       "id": "tc2z3",
       "sorte": "aufsatz",
       "an": "",
       "hoertext": {
        "titel": "Vortrag: Wie zuverlässig sind Zeugen? Erinnerungen vor Gericht",
        "wer": "Mann",
        "text": "Meine Damen und Herren, ich freue mich, dass Sie so zahlreich gekommen sind, obwohl draußen das schönste Wetter ist. Ich vermute, einige von Ihnen haben schon einmal als Schöffe an einem Gericht gesessen oder waren selbst Zeuge in einem Verfahren. Dann kennen Sie die Situation: Man sitzt da, wird gefragt, was man gesehen hat, und ist sich eigentlich ziemlich sicher. Heute Abend möchte ich diese Sicherheit ein wenig erschüttern. Ich arbeite seit über zwanzig Jahren als Rechtspsychologe und schreibe Gutachten über die Glaubhaftigkeit von Aussagen. Und das Erste, was ich in diesem Beruf lernen musste, ist: Unser Gedächtnis funktioniert nicht wie eine Kamera. Es ist keine Aufzeichnung, die man abspielt, wenn man sich erinnert. Erinnern ist eine Rekonstruktion. Jedes Mal, wenn Sie sich an etwas erinnern, setzen Sie das Erlebnis neu zusammen, aus Bruchstücken, aus Wissen, aus Erwartungen. Man kann sich das ein bisschen vorstellen wie ein Gericht, das man jedes Mal neu kocht, ohne Rezept. Es schmeckt ungefähr gleich, aber nie ganz genau so. Und dann wird die Erinnerung neu abgespeichert, aber nicht unbedingt so, wie sie vorher war. Das heißt: Jedes Erinnern verändert die Erinnerung ein kleines Stück. Ausgerechnet die Erlebnisse, an die wir am häufigsten denken, sind deshalb oft nicht die genauesten. Ich will Ihnen ein kleines Beispiel geben, das Sie gleich an sich selbst ausprobieren können. Denken Sie an das letzte Mal, als Sie in einem Restaurant gegessen haben. Sehen Sie es vor sich? Gut. Und jetzt beantworten Sie für sich, ohne zu schummeln: Lag auf dem Tisch eine Tischdecke? Stand dort ein Salzstreuer? Die meisten Menschen haben auf diese Fragen eine Antwort, und viele sind sich ziemlich sicher. Aber die wenigsten haben in dem Moment wirklich auf den Salzstreuer geachtet. Was passiert also? Ihr Gedächtnis füllt die Lücke mit dem, was in einem Restaurant wahrscheinlich ist. Und das geschieht, ohne dass Sie es bemerken. Sie haben nicht das Gefühl zu raten, Sie haben das Gefühl, sich zu erinnern. Im Alltag ist das außerordentlich praktisch. Es wäre ja furchtbar mühsam, jedes Detail speichern zu müssen. Vor Gericht kann genau das aber zum Problem werden. Wenn eine Zeugin aussagt, der Täter habe eine Waffe in der Hand gehabt, dann ist die Frage: Hat sie die Waffe gesehen, oder hat ihr Gedächtnis die Waffe ergänzt, weil zu einem Überfall eben eine Waffe gehört? Damit bin ich beim zweiten Punkt. Wenn unser Gedächtnis so formbar ist, dann liegt die Frage nahe, wer oder was es formt. Und eine sehr wirksame Kraft sind ausgerechnet die Fragen, die wir Zeugen stellen. Fragen können Erinnerungen verfälschen. Es gibt dazu einen klassischen Versuch aus den Siebzigerjahren, den manche von Ihnen vielleicht kennen. Er gehört zu den meistzitierten Versuchen der ganzen Gedächtnisforschung, und er ist so einfach, dass man ihn fast am Küchentisch nachmachen könnte. Versuchspersonen sahen einen Film von einem Autounfall. Danach wurden sie gefragt, wie schnell die Autos ungefähr gefahren seien. Der Unterschied lag in einem einzigen Wort. Die einen wurden gefragt, wie schnell die Autos waren, als sie sich berührten. Die anderen, wie schnell sie waren, als sie ineinanderkrachten. Und raten Sie, was passiert ist. Die zweite Gruppe hat die Geschwindigkeit deutlich höher geschätzt. Nun könnte man sagen, gut, das ist eine Schätzung, die ist sowieso unsicher. Aber es kommt noch besser. Eine Woche später wurden dieselben Leute gefragt, ob sie im Film zerbrochenes Glas gesehen hätten. Es gab in dem Film kein zerbrochenes Glas. Trotzdem haben in der Gruppe mit dem Wort ineinanderkrachen ungefähr doppelt so viele Personen gesagt, sie hätten Glas gesehen. Sie sehen, es geht nicht bloß um die Antwort auf die Frage. Die Frage selbst wird zu einem Teil der Erinnerung. Und das gilt für alle Informationen, die nach einem Ereignis zu uns kommen. Wir nennen das in der Fachsprache den Fehlinformationseffekt. Das klingt technisch, ist aber im Alltag allgegenwärtig. Stellen Sie sich vor, Sie haben einen Unfall an einer Kreuzung beobachtet. Am Abend lesen Sie in der Lokalzeitung einen Bericht darüber, in dem steht, der Radfahrer habe keinen Helm getragen. Oder Sie unterhalten sich mit einem anderen Zeugen, der sicher ist, dass die Ampel rot war. Ein paar Wochen später werden Sie vor Gericht befragt, und Sie erinnern sich an einen Radfahrer ohne Helm und an eine rote Ampel. Sie wissen aber nicht mehr, woher dieses Wissen stammt. Ob Sie es selbst gesehen oder später gehört haben, das ist in Ihrem Kopf längst verschmolzen. Wir sagen, die Quelle der Erinnerung geht verloren, während der Inhalt bleibt. Das ist übrigens einer der Gründe, warum Zeugen vor einer Verhandlung möglichst nicht miteinander über den Fall sprechen sollten. Ich weiß, das ist in der Praxis schwer durchzusetzen. Mein dritter Punkt betrifft etwas, das vor Gericht eine enorme Rolle spielt, nämlich die Sicherheit eines Zeugen. Sie kennen das: Ein Zeuge sagt, ich bin mir absolut sicher, das war der Mann. Und ein anderer sagt, ich glaube, er war es, aber ich will mich nicht festlegen. Wem glauben Sie mehr? Die allermeisten Menschen glauben dem ersten. Und das ist nachvollziehbar, aber es ist leider oft falsch. Die Sicherheit, mit der ein Zeuge aussagt, sagt erstaunlich wenig über die Richtigkeit seiner Aussage. Zumindest dann, wenn wir diese Sicherheit erst vor Gericht messen. Warum ist das so? Weil die Sicherheit mit jeder Wiederholung wächst. Ein Zeuge erzählt seine Geschichte zuerst der Polizei, dann seiner Familie, dann den Kollegen, dann vielleicht einem Anwalt. Bei jedem Erzählen wird die Geschichte flüssiger, runder, die Zweifel fallen weg. Wenn er nach einem Jahr vor Gericht steht, hat er sie vielleicht zwanzigmal erzählt. Und dann fühlt sie sich an wie eine Tatsache. Dazu kommt, dass ihm unterwegs niemand widersprochen hat. Die Familie glaubt ihm, die Kollegen auch, und jedes Nicken bestärkt ihn. Interessant ist: Die Sicherheit beim allerersten Mal, also direkt nach der Tat, ist durchaus aussagekräftig. Deshalb sollte man sie sofort festhalten. Das Problem ist, dass Richter, Schöffen und Anwälte auch nur Menschen sind. Sie lassen sich von Sicherheit beeindrucken, so wie wir alle. In Ländern, in denen Laien als Geschworene über die Schuld entscheiden, hat man das sehr gründlich untersucht. Man hat Testpersonen Videoaufnahmen von Zeugen gezeigt und sie gebeten zu beurteilen, ob die Zeugen richtig liegen. Die Testpersonen konnten das kaum besser als durch Zufall. Sie hätten genauso gut eine Münze werfen können. Was ihr Urteil aber stark beeinflusst hat, war, wie selbstbewusst ein Zeuge auftrat. Ein ruhiger, sicherer Zeuge, der sich irrte, wurde eher geglaubt als ein zögernder Zeuge, der recht hatte. Sie werden jetzt vielleicht einwenden, dass Berufsrichter darauf trainiert sind, so etwas zu durchschauen. Ich habe mit vielen Richtern gearbeitet, und ich schätze die meisten sehr. Aber die Forschung gibt keinen Anlass zu glauben, dass sie dagegen gefeit sind. Und es gibt eine bittere Bilanz dazu. In den Vereinigten Staaten hat man Hunderte von Fällen untersucht, in denen Verurteilte später durch Genanalysen entlastet wurden. In etwa drei Vierteln dieser Fälle hatte eine falsche Zeugenaussage zur Verurteilung beigetragen, oft von einem sehr sicheren Zeugen. Bisher habe ich von Erinnerungen gesprochen, die leicht verändert werden. Ein Detail kommt hinzu, eine Farbe ändert sich. Jetzt gehe ich einen Schritt weiter, und das ist der Teil meines Vortrags, bei dem das Publikum meistens unruhig wird. Man kann falsche Erinnerungen nicht bloß verändern, man kann sie auch vollständig erzeugen. Wieder ein bekanntes Experiment. Forscherinnen haben Erwachsenen vier kurze Geschichten aus ihrer Kindheit vorgelegt, angeblich von Verwandten erzählt. Drei davon waren wahr, eine war erfunden: Man habe sich als Kind in einem großen Einkaufszentrum verlaufen, sei weinend von einer älteren Frau gefunden und zu den Eltern zurückgebracht worden. Die Teilnehmer sollten aufschreiben, woran sie sich zu jeder Geschichte noch erinnerten. Und ungefähr ein Viertel hat sich nach einigen Gesprächen an das erfundene Erlebnis erinnert, teilweise mit Einzelheiten, die in der Vorlage gar nicht standen. Wie die Frau aussah, was sie gesagt hat. Ein Teilnehmer wusste sogar noch, dass die Frau eine blaue Strickjacke getragen habe. Spätere Untersuchungen haben das mit noch unwahrscheinlicheren Ereignissen wiederholt, etwa mit einer Ballonfahrt, die nie stattgefunden hat. Man hat den Leuten dafür ein bearbeitetes Kinderfoto gezeigt, und auch da haben viele angefangen, sich zu erinnern. Jetzt werden Sie sich fragen: Kann man eine falsche Erinnerung denn nicht von einer echten unterscheiden? Das wäre ja das Naheliegende. Leider nein, jedenfalls nicht von innen. Eine falsche Erinnerung fühlt sich genauso an wie eine echte. Sie hat Bilder, sie hat Gefühle, manchmal sogar Gerüche. Die Menschen in diesen Experimenten haben nicht gelogen. Viele waren regelrecht verstört, als man ihnen am Ende erklärt hat, dass die Geschichte erfunden war. Eine Teilnehmerin soll gesagt haben: Aber ich sehe die Frau doch vor mir. Das ist die eigentliche Lehre aus diesem Teil der Forschung, und sie gilt weit über das Gericht hinaus: Das Gefühl, dass eine Erinnerung echt ist, ist kein Beweis dafür, dass sie es auch ist. Ich sage das nicht, um Sie zu verunsichern. Die meisten Ihrer Erinnerungen sind im Großen und Ganzen zuverlässig, sonst kämen wir im Leben gar nicht zurecht. Aber bei Einzelheiten und bei Erinnerungen, über die viel geredet wurde, sollten wir bescheidener sein. Ich selbst habe übrigens eine lebhafte Erinnerung an einen Hund, der mich als Kind gebissen hat. Meine Schwester behauptet, sie sei gebissen worden. Wir haben uns nie geeinigt. Was folgt nun aus alldem? Soll man Zeugen überhaupt noch glauben? Natürlich soll man das. Ohne Zeugen wäre ein großer Teil der Rechtsprechung gar nicht möglich. Aber man muss sie anders befragen, und damit komme ich zum letzten Teil, zu den praktischen Folgen für die Befragung. Die erste Folge ist zeitlich. Zeugen sollten so früh wie möglich befragt werden, bevor sie ihre Geschichte zwanzigmal erzählt und die Zeitung gelesen haben. Die zweite betrifft die Art der Fragen. Am Anfang sollte immer ein freier Bericht stehen. Erzählen Sie bitte alles, woran Sie sich erinnern, auch Kleinigkeiten. Wer befragt, hört zu und unterbricht nicht, auch wenn es ihm zu lange dauert. Erst danach stellt man offene Fragen, und Suggestivfragen, also Fragen, in denen die Antwort schon steckt, sollte man ganz vermeiden. Also nicht: Hatte er eine Waffe? Sondern: Was hatte er in den Händen? Und die dritte Folge ist: Zeugen sollten einzeln befragt werden, getrennt voneinander, damit sie ihre Erinnerungen nicht gegenseitig angleichen. Das alles klingt selbstverständlich. Sie wären überrascht, wie oft in der Praxis davon abgewichen wird, meistens nicht aus böser Absicht, sondern aus Zeitnot. Eine letzte Empfehlung betrifft die Gegenüberstellung, also den Moment, in dem ein Zeuge einen Verdächtigen erkennen soll. Früher stellte man meistens mehrere Personen nebeneinander auf, oder man legte Fotos gleichzeitig vor. Das Problem dabei ist: Der Zeuge vergleicht dann und wählt den, der seiner Erinnerung am ähnlichsten ist, auch wenn der Täter gar nicht dabei ist. Besser ist es, die Personen oder Fotos nacheinander zu zeigen, und zwar so, dass der Zeuge bei jedem einzeln entscheidet. Und noch wichtiger: Die Gegenüberstellung sollte von jemandem durchgeführt werden, der selbst nicht weiß, wer der Verdächtige ist. Sie werden lachen, aber Ermittler verraten durch ein Nicken, ein Zögern oder einen Blick oft ungewollt, auf wen sie hoffen. Und Zeugen sind in so einer Situation sehr empfänglich für solche Zeichen. Sie wollen helfen, sie wollen nichts falsch machen, und sie suchen nach jedem Hinweis, ob sie auf dem richtigen Weg sind. In der Medizin ist dieses Verfahren bei Studien längst selbstverständlich, bei Gegenüberstellungen leider noch nicht überall. Ich komme zum Schluss. Unser Gedächtnis ist kein Archiv, es ist eher ein Erzähler, der es mit der Wahrheit nicht immer ganz genau nimmt. Wenn wir das wissen, können wir besser mit ihm umgehen. Vielen Dank."
       },
       "situation": "Oberthema „Erinnern und Vergessen\". Du hörst einen Vortrag von etwa fünfzehn Minuten, nur einmal. Mach beim Hören Notizen. Schreib danach eine Zusammenfassung in eigenen Worten mit mindestens fünf zentralen Gliederungspunkten.",
       "punkteText": "Darauf kommt es an",
       "punkte": [
        {
         "nr": 1,
         "was": "Mindestens fünf zentrale Gliederungspunkte",
         "hinweis": "Die Hauptgedanken in der Reihenfolge des Hörtextes."
        },
        {
         "nr": 2,
         "was": "Zu jedem Punkt die wichtigsten Details",
         "hinweis": "Beispiele, Gründe, Folgen, die den Punkt stützen."
        },
        {
         "nr": 3,
         "was": "Eigene Worte, sachlich, ohne eigene Wertung",
         "hinweis": "Indirekte Rede oder „laut der Referentin …\"."
        }
       ],
       "hilfen": [
        "Zunächst geht es um …",
        "Anschließend wird erläutert, dass …",
        "Ein weiterer zentraler Punkt ist …",
        "Als Beispiel wird … genannt.",
        "Abschließend wird betont, dass …"
       ],
       "muster": "Ein Rechtspsychologe erklärt in seinem Vortrag, warum Zeugenaussagen weniger zuverlässig sind, als vor Gericht meist angenommen wird, und was daraus für die Praxis folgt.\nAls Grundlage beschreibt er das Gedächtnis nicht als Aufzeichnung, sondern als Rekonstruktion. Bei jedem Abruf werde eine Erinnerung neu zusammengesetzt und dabei leicht verändert. Gerade häufig erinnerte Erlebnisse seien deshalb oft nicht die genauesten. Fehlende Einzelheiten ergänze das Gedächtnis unbemerkt durch das, was in einer Situation wahrscheinlich sei. Vor Gericht könne das bedeuten, dass ein Zeuge etwa eine Waffe erinnere, die er nie gesehen habe.\nIm zweiten Teil zeigt er, dass Fragen Erinnerungen verfälschen können. In einem Experiment habe allein die Wortwahl einer Frage dazu geführt, dass die Geschwindigkeit von Unfallfahrzeugen höher eingeschätzt und sogar nicht vorhandenes Glas erinnert worden sei. Allgemein würden Informationen, die man nach einem Ereignis erhalte, in die Erinnerung eingebaut, wobei man ihre Herkunft vergesse. Deshalb sollten Zeugen vor der Verhandlung möglichst nicht miteinander sprechen.\nDrittens warnt der Referent davor, die Sicherheit eines Zeugen als Beleg für die Richtigkeit seiner Aussage zu werten. Diese Sicherheit nehme mit jeder Wiederholung der Geschichte zu. Aussagekräftig sei allenfalls die Sicherheit unmittelbar nach der Tat. Dennoch ließen sich Richter, Schöffen und Geschworene stark von selbstbewusst auftretenden Zeugen beeinflussen, was bei vielen später aufgedeckten Fehlurteilen eine Rolle gespielt habe.\nDarüber hinaus legt er dar, dass sich falsche Erinnerungen sogar vollständig erzeugen lassen. In einem Versuch habe sich etwa ein Viertel der Teilnehmer an ein erfundenes Kindheitserlebnis erinnert. Da sich falsche Erinnerungen ebenso echt anfühlten wie wahre, sei das Gefühl der Echtheit kein Beweis. Bei Einzelheiten und bei Erlebnissen, über die viel gesprochen worden sei, sei daher Bescheidenheit angebracht.\nZum Schluss leitet er Empfehlungen für Befragungen ab. Zeugen sollten möglichst früh, zunächst in einem freien Bericht und mit offenen Fragen sowie getrennt voneinander befragt werden. Bei Gegenüberstellungen sollten die Personen nacheinander gezeigt werden, und zwar von jemandem, der selbst nicht weiß, wer verdächtigt wird. Andernfalls verrieten Ermittler den Zeugen oft unbewusst, auf wen sie hofften.",
       "rubrik": [
        {
         "t": "Hauptpunkt 1: Erinnern ist Rekonstruktion, keine Aufzeichnung",
         "h": "Details: Jedes Erinnern verändert die Erinnerung ein wenig · Lücken werden unbemerkt mit Wahrscheinlichem gefüllt",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "Punkt und beide Details"
          },
          {
           "w": 3,
           "t": "B",
           "d": "Punkt und ein Detail"
          },
          {
           "w": 1,
           "t": "C",
           "d": "nur der Punkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "fehlt"
          }
         ]
        },
        {
         "t": "Hauptpunkt 2: Fragen können die Erinnerungen von Zeugen verfälschen",
         "h": "Details: Ein Wort in der Frage verändert die geschätzte Geschwindigkeit · Spätere Informationen werden ohne Quelle in die Erinnerung eingebaut",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "Punkt und beide Details"
          },
          {
           "w": 3,
           "t": "B",
           "d": "Punkt und ein Detail"
          },
          {
           "w": 1,
           "t": "C",
           "d": "nur der Punkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "fehlt"
          }
         ]
        },
        {
         "t": "Hauptpunkt 3: Die Sicherheit eines Zeugen sagt wenig über die Richtigkeit",
         "h": "Details: Die Sicherheit wächst mit jeder Wiederholung der Aussage · Gerichte lassen sich von sicher auftretenden Zeugen beeindrucken",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "Punkt und beide Details"
          },
          {
           "w": 3,
           "t": "B",
           "d": "Punkt und ein Detail"
          },
          {
           "w": 1,
           "t": "C",
           "d": "nur der Punkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "fehlt"
          }
         ]
        },
        {
         "t": "Hauptpunkt 4: Falsche Erinnerungen lassen sich vollständig erzeugen",
         "h": "Details: Etwa ein Viertel erinnerte sich an ein erfundenes Kindheitserlebnis · Das Gefühl der Echtheit ist kein Beweis",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "Punkt und beide Details"
          },
          {
           "w": 3,
           "t": "B",
           "d": "Punkt und ein Detail"
          },
          {
           "w": 1,
           "t": "C",
           "d": "nur der Punkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "fehlt"
          }
         ]
        },
        {
         "t": "Hauptpunkt 5: Praktische Folgen für die Befragung von Zeugen",
         "h": "Details: Zeugen früh, offen und einzeln befragen · Gegenüberstellung nacheinander und durch eine nicht eingeweihte Person",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "Punkt und beide Details"
          },
          {
           "w": 3,
           "t": "B",
           "d": "Punkt und ein Detail"
          },
          {
           "w": 1,
           "t": "C",
           "d": "nur der Punkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "fehlt"
          }
         ]
        },
        {
         "t": "Sprache",
         "h": "Genau, abwechslungsreich, gut verknüpft, kaum Fehler?",
         "stufen": [
          {
           "w": 15,
           "t": "A",
           "d": "durchgehend C2"
          },
          {
           "w": 10,
           "t": "B",
           "d": "weitgehend C2"
          },
          {
           "w": 5,
           "t": "C",
           "d": "oft eingeschränkt"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht angemessen"
          }
         ]
        }
       ],
       "max": 40,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 330,
       "platzhalter": "Schreib hier deine Zusammenfassung …",
       "rubrikTitel": "Bewerte deine Zusammenfassung",
       "rubrikHinweis": "Inhalt wie bei telc: je Hauptpunkt 1 Punkt, je Detail 2 Punkte, zusammen 25. Die Sprache bewertet telc als Ganzes mit bis zu 15 Punkten; die Stufen hier sind eine Übungsschätzung. telc nennt keine Wortzahl."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "mitteilung",
   "name": "Aufsatz mit Quellen",
   "kurz": "Ein Aspekt, mindestens drei Quellen",
   "was": "Du schreibst einen Aufsatz zu einem von drei Aspekten des Oberthemas und arbeitest mindestens drei der Lese- und Hörtexte ein. Zitate stehen in Anführungszeichen, mit Quelle.",
   "tipp": "Plane zehn Minuten: These, drei Quellen mit je einem Gedanken, Gegenposition, Fazit. Zitate sparsam, aber genau.",
   "zeichen": "🖋️",
   "farbe": "gold",
   "punkte": 40,
   "runden": [
    {
     "id": "tc2s2r1",
     "titel": "Vertrauen",
     "aufgaben": [
      {
       "id": "tc2a1",
       "oberthema": "Vertrauen",
       "sorte": "aufsatz",
       "an": "",
       "situation": "Oberthema „Vertrauen“. Schreiben Sie in neunzig Minuten einen Aufsatz zu einem der drei Aspekte. Beziehen Sie sich auf mindestens drei der Lese- und Hörtexte; kennzeichnen Sie Zitate und Übernahmen.",
       "punkte": [
        {
         "nr": 1,
         "was": "Vertrauen ist gut, Kontrolle ist besser: Stimmt dieser Satz?",
         "hinweis": "Erörtern Sie, ob Kontrolle Vertrauen sinnvoll ergänzt oder es eher untergräbt."
        },
        {
         "nr": 2,
         "was": "Ersetzen Bewertungen im Netz das persönliche Vertrauen?",
         "hinweis": "Vergleichen Sie Systemvertrauen über Plattformen mit dem Vertrauen zwischen Menschen, die sich kennen."
        },
        {
         "nr": 3,
         "was": "Lässt sich verlorenes Vertrauen zurückgewinnen?",
         "hinweis": "Zeigen Sie, was nach einem Vertrauensbruch hilft und was eher schadet."
        }
       ],
       "eingang": {
        "von": "Deine Quellen",
        "betreff": "Oberthema: Vertrauen",
        "text": "Lesen Teil 1: „Die Dose am Feldrand“, Kommentar von Henrike Ostendorf in der Landpost am Wochenende. Familie Lüttjohann verkauft in Wehrenbrook seit elf Jahren unbewacht Gemüse gegen eine Blechdose. Es fehlen nur zwei bis vier Prozent der Einnahmen, und auch Fremde, die nie wiederkommen, zahlen. Vertrauen sei eine Vorleistung, die den anderen in die Pflicht nehme.\nLesen Teil 2: „Wir öffnen die Tür lieber einem Fremden mit Sternen“, Interview von Paula Rehbein mit dem Leipziger Wirtschaftssoziologen Konrad Assmann in Denkraum. Magazin für Gesellschaft. Im Netz vertrauen wir weniger dem Menschen als der Plattform, die bewertet und absichert. Bewertungen sind durch Höflichkeit verzerrt, fünf Sterne sagen kaum noch etwas. Nur 41 Prozent der Städter würden einem Nachbarn den Schlüssel geben, weil eine Enttäuschung dort sozial teuer wäre.\nLesen Teil 3: „Die Kasse steht im Schuppen“, Reportage von Henrike Albrecht in der Märkischen Wochenschau. Gisela und Bernd Hartung verkaufen in Kleinow ohne Verkäufer und lehnen Kamera und Kartenleser ab. Die Soziologin Annegret Wiesner spricht von Vertrauen mit niedriger Fallhöhe, warnt aber, dass dahinter auch soziale Kontrolle stecke.\nHörtext: „Wie Vertrauen in Organisationen entsteht und zerbricht“, Vortrag einer Wirtschaftspsychologin vor Personalverantwortlichen. Kontrolle sei teurer als Vertrauen und ersetze es nicht. Vertrauen beruhe auf Kompetenz, Wohlwollen und Integrität, wachse langsam und breche schnell. Überwachung führe zu Dienst nach Vorschrift; verlorenes Vertrauen komme nur durch konkrete Entschuldigungen und viele kleine, überprüfbare Zusagen zurück."
       },
       "muster": "Vertrauen ist gut, Kontrolle ist besser. Kaum ein Satz wird in deutschen Büros so gern zitiert, und kaum einer wird so selten überprüft. Er klingt nach Lebenserfahrung, nach jemandem, der schon einmal hereingelegt worden ist und daraus gelernt hat. Wer ihn ausspricht, hält sich für einen Realisten. Ich möchte im Folgenden der Frage nachgehen, ob Kontrolle das Vertrauen tatsächlich sinnvoll ergänzt oder ob sie es eher untergräbt. Dabei stütze ich mich auf den Vortrag einer Wirtschaftspsychologin über Vertrauen in Organisationen, auf die Reportage „Die Kasse steht im Schuppen“ von Henrike Albrecht und auf ein Interview mit dem Leipziger Soziologen Konrad Assmann.\nZunächst lohnt ein nüchterner Blick auf die Kosten. Die Wirtschaftspsychologin hält den bekannten Satz für betriebswirtschaftlich falsch, und zwar nicht aus moralischen, sondern aus praktischen Gründen. Kontrolle verursache Arbeit, die in keiner Bilanz auftauche, weil sie sich in den Arbeitstagen von Menschen verstecke, die eigentlich anderes zu tun hätten. Zudem erfasse sie nur, was man vorher festgelegt habe, während gerade die unvorhergesehenen Fälle durchrutschten. Ihr Fazit lautet: „Kontrolle ist teurer, und sie ersetzt Vertrauen nicht.“ Ein Landwirt aus Kleinow kommt auf ganz anderem Weg zum selben Ergebnis. Bernd Hartung, der seit elf Jahren Eier und Kartoffeln in einem unbewachten Schuppen verkauft, verliert nach eigener Rechnung vielleicht vierzig Euro im Jahr. Dafür, sagt er, bezahle er keinen Menschen, der dort sitze. Wer alles absichern will, zahlt am Ende mehr, als er je verlieren könnte.\nSchwerer wiegt allerdings ein zweites Argument, das über das Geld hinausgeht. Kontrolle, so die Referentin, sende eine Botschaft. Wer jemanden überwache, teile ihm mit, dass er ihm ohne Aufsicht kein anständiges Verhalten zutraue. Die Betroffenen reagierten darauf selten mit offenem Protest, häufiger mit Dienst nach Vorschrift. In einem Softwarehaus, das im Homeoffice die Aktivität am Rechner erfassen ließ, sei die gemessene Arbeitszeit gleich geblieben, das freiwillige Engagement aber zurückgegangen. Ein Mitarbeiter fasste das bitter zusammen: „Ich werde ja jetzt dafür bezahlt, dass sich meine Maus bewegt.“ Bernd Hartung argumentiert, ohne je eine solche Studie gelesen zu haben, ganz ähnlich. Eine Kamera sei „eine Unterstellung, die man den ehrlichen Leuten jeden Tag ins Gesicht halte“, während sich die Unehrlichen einfach eine Kapuze aufsetzten. Hier liegt für mich der Kern des Problems. Kontrolle trifft zuerst die Ehrlichen, weil nur sie sich von ihr gemeint fühlen.\nMan würde es sich jedoch zu leicht machen, wollte man daraus schließen, Vertrauen komme ganz ohne Absicherung aus. Die Soziologin Annegret Wiesner, die in der Reportage zu Wort kommt, warnt ausdrücklich vor einer romantischen Lesart. Dass die Kassen auf dem Land meistens stimmen, liege auch daran, dass dort fast jeder damit rechnen müsse, erkannt zu werden. Das Vertrauen der Hartungs sei zum Teil gut versteckte soziale Kontrolle. Bernd bestätigt das unfreiwillig, wenn er von dem Sommer erzählt, in dem eine Umleitung fremden Verkehr durch das Dorf führte und plötzlich regelmäßig Geld fehlte. Auch Assmann zeigt, dass das scheinbar arglose Vertrauen unter Fremden auf Sicherungen beruht. Wer im Netz bei einem Unbekannten übernachtet, vertraut nach seiner Darstellung weniger dem Menschen als der Plattform, die bewertet, die Zahlung zurückhält und im Streitfall schlichtet. Kontrolle ist also selten ganz abwesend. Sie hat sich nur verlagert, vom Aufseher in die Nachbarschaft oder in die Software.\nWas folgt daraus? Ich halte den alten Satz trotzdem für falsch, allerdings aus einem anderen Grund, als man zunächst vermuten würde. Die Frage ist nicht, ob es Kontrolle gibt, sondern wie sie sich anfühlt und wen sie trifft. Eine Kontrolle, die im Hintergrund bleibt und sich erst im Streitfall meldet, lässt Raum für Vertrauen. Eine Kontrolle, die jeden Tag sichtbar misst und zählt, verdrängt es. Die dünne Kette, mit der Bernd Hartung seine Kassette nach dem einzigen Diebstahl an der Wand befestigt hat, ist dafür ein treffendes Bild. Sie würde keinen Dieb aufhalten. „Die ist nicht für die Diebe“, sagt seine Frau, und dann: „Die ist für ihn.“ So verstehe ich Kontrolle in einer Organisation, die von Vertrauen lebt: als Beruhigung für den Fall der Enttäuschung, nicht als täglichen Generalverdacht. Für Assmann ist Vertrauen „der Moment, in dem man aufhört nachzufragen“. Eine Organisation, die nie damit aufhört, bekommt genau das, was sie misst, und keinen Handgriff mehr.",
       "woerter": 650,
       "hilfen": [
        "Ich möchte im Folgenden der Frage nachgehen, ob …",
        "Dabei stütze ich mich auf …",
        "Die Referentin hält … für …, und zwar nicht aus …, sondern aus … Gründen.",
        "Schwerer wiegt allerdings ein zweites Argument: …",
        "Man würde es sich jedoch zu leicht machen, wollte man daraus schließen, …",
        "Die Frage ist nicht, ob …, sondern wie …"
       ],
       "erklaerung": "Der Aufsatz ordnet die drei Quellen nach Argumenten statt nach Texten, lässt den Vortrag und den Bauern einander bestätigen und nimmt mit der Soziologin den stärksten Einwand ernst. Das Urteil am Schluss ist dadurch genauer als die Ausgangsfrage.",
       "punkteText": "Wähle einen dieser drei Aspekte",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Ein Aspekt klar bearbeitet? Mindestens drei Quellen eingearbeitet und als fremde Meinung gekennzeichnet?",
         "stufen": [
          {
           "w": 10,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 7,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 3,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        },
        {
         "t": "Kohärenz und Kohäsion",
         "h": "Leserfreundlich gegliedert, Absätze und Gedanken gut verknüpft?",
         "stufen": [
          {
           "w": 10,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 7,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 3,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung durchgehend auf C2?",
         "stufen": [
          {
           "w": 10,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 7,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 3,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        },
        {
         "t": "Repertoire",
         "h": "Breiter, präziser Wortschatz, vielfältige Strukturen, kaum Wiederholungen?",
         "stufen": [
          {
           "w": 10,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 7,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 3,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        }
       ],
       "max": 40,
       "keineKI": true,
       "ohneWortzahl": true,
       "platzhalter": "Schreib hier deinen Aufsatz …",
       "rubrikTitel": "Bewerte dich nach den vier telc-Kriterien",
       "rubrikHinweis": "Vier Kriterien wie bei telc C2, je A = 10, B = 7, C = 3, D = 0 Punkte. Für A bei der Aufgabengerechtheit brauchst du mindestens drei Quellen. telc nennt keine Wortzahl."
      }
     ]
    },
    {
     "id": "tc2s2r2",
     "titel": "Langeweile",
     "aufgaben": [
      {
       "id": "tc2a2",
       "oberthema": "Langeweile",
       "sorte": "aufsatz",
       "an": "",
       "situation": "Oberthema „Langeweile“. Schreiben Sie in neunzig Minuten einen Aufsatz zu einem der drei Aspekte. Beziehen Sie sich auf mindestens drei der Lese- und Hörtexte; kennzeichnen Sie Zitate und Übernahmen.",
       "punkte": [
        {
         "nr": 1,
         "was": "Hat das Smartphone die Langeweile abgeschafft?",
         "hinweis": "Prüfen Sie, ob das Gerät Langeweile beseitigt, verändert oder nur verdeckt, und ob ihr Verschwinden ein Gewinn wäre."
        },
        {
         "nr": 2,
         "was": "Sollten Eltern ihre Kinder vor Langeweile schützen?",
         "hinweis": "Wägen Sie ab, wann Langeweile Kindern nützt und wann sie ein Warnsignal ist."
        },
        {
         "nr": 3,
         "was": "Unterforderung im Beruf: Wird Langeweile am Arbeitsplatz unterschätzt?",
         "hinweis": "Erörtern Sie, warum über Langeweile im Beruf kaum gesprochen wird und welche Folgen das hat."
        }
       ],
       "eingang": {
        "von": "Deine Quellen",
        "betreff": "Oberthema: Langeweile",
        "text": "Lesen Teil 1: „Platz sieben“, Glosse von Matthias Brenneke im Wochenblatt. Mit leerem Akku im Wartezimmer löst der Autor zusammen mit einem älteren Herrn ein Kreuzworträtsel und ist beinahe enttäuscht, als er aufgerufen wird. Er fragt sich, ob Langeweile das Gegenteil von Unterhaltung oder eher ihr Vorzimmer sei.\nLesen Teil 2: „Zwanzig Minuten mit sich allein“, Wissenschaftsreportage von Tobias Leverkus in Forschung und Gesellschaft. Die Psychologin Miriam Talheim versteht Langeweile als Signal, dass das, was man tut, nicht zu dem passt, was man will. Ihre Daten zeigen, dass Langeweile weder sicher kreativ macht noch durch das Smartphone verschwindet; das Telefon zerstückle sie nur. Unterforderung im Beruf, der Boreout, erschöpfe ähnlich wie Überlastung.\nLesen Teil 3: „Zwanzig Minuten mit dem Gummibaum“, Glosse von Jens Ruhland in der Kolumne Nebensachen des Abendkuriers. Der Autor verbringt eine Woche lang jede Wartezeit ohne Telefon, beobachtet einen Gummibaum und einen alten Herrn und hält am fünften Tag nicht mehr durch. An die Woche ohne Telefon erinnert er sich genau, an die Woche davor kaum.\nHörtext: „Muss man Kinder vor Langeweile schützen?“, Radiointerview mit der Kasseler Entwicklungspsychologin Marlene Hellwig in einer Sendung über Familie und Erziehung. Viele Eltern empfänden die Langeweile ihrer Kinder als eigenes Versagen und verplanten jede Stunde. Nach etwa zehn Minuten Quengeln entstehe eigenes Spiel; das Smartphone unterbreche genau diese Phase. Chronische Langeweile und Langeweile im Unterricht seien dagegen ernst zu nehmen."
       },
       "muster": "Wer heute in einem Wartezimmer sitzt, sieht dasselbe Bild wie in der Straßenbahn oder an der Supermarktkasse: Gesichter, die von unten bläulich beleuchtet werden. Die Hersteller der Geräte werben sogar damit, dass niemand mehr eine Minute verschwenden müsse. Man könnte daraus schließen, das Smartphone habe eine der ältesten Plagen des Alltags beseitigt, die Langeweile. Ob das stimmt und ob es überhaupt wünschenswert wäre, möchte ich im Folgenden erörtern. Ich beziehe mich dabei auf die Wissenschaftsreportage von Tobias Leverkus über die Psychologin Miriam Talheim, auf ein Radiointerview mit der Entwicklungspsychologin Marlene Hellwig und auf zwei Glossen, deren Autoren das Thema am eigenen Leib erprobt haben.\nAuf den ersten Blick spricht einiges für die These vom Ende der Langeweile. Eine Leerlaufzeit von mehr als ein paar Sekunden kommt im Alltag vieler Menschen kaum noch vor. Hellwig berichtet von einer Untersuchung, in der Jugendliche zwischen vierzehn und sechzehn Jahren eine Woche lang notieren sollten, wann sie sich gelangweilt hätten. Viele gaben an, sich nie gelangweilt zu haben, erzählten später aber, dass sie selbst beim Zähneputzen auf ihr Handy schauten. Sie hatten, so Hellwig, gar keine Gelegenheit mehr dazu. Außerdem ist das Telefon in manchen Lagen eine echte Erleichterung. Talheim nennt ausdrücklich Menschen, die im Krankenhaus liegen oder lange Pendelstrecken zurücklegen müssen. Wer das Gerät pauschal verdammt, macht es sich zu bequem.\nBei genauerem Hinsehen zeigt sich allerdings, dass die Langeweile nicht verschwunden ist, sondern ihre Gestalt verändert hat. In Talheims Tagebuchstudie gaben Teilnehmer, die gerade durch Kurzvideos oder Nachrichten scrollten, im Durchschnitt keine geringere Langeweile an als jene, die nichts taten, teilweise sogar eine höhere. Talheim folgert daraus, das Telefon vertreibe die Langeweile nicht, es zerstückle sie: „Wir langweilen uns jetzt in Portionen von acht Sekunden.“ Hellwig kommt aus der Sicht der Entwicklungspsychologie zu einem verwandten Ergebnis. Für sie ist Langeweile ein Signal, vergleichbar mit Hunger, das anzeigt, dass eine Tätigkeit ihren Sinn verloren hat. Das Smartphone löse dieses Problem nicht, denn „das Gerät beseitigt nicht die Ursache, es betäubt nur das Signal“. Sobald der Bildschirm erlösche, sei die Langeweile wieder da, oft stärker als vorher. Abgeschafft ist sie also nicht. Sie wird nur ständig unterbrochen, bevor sie etwas ausrichten kann.\nWas dabei verloren geht, beschreiben die beiden Glossen anschaulicher als jede Studie. Jens Ruhland hat eine Woche lang jede Wartezeit ohne Telefon verbracht. Im Bürgeramt zählte er Deckenplatten und entdeckte einen Gummibaum, über dessen unbekannten Pfleger er sich Geschichten ausdachte. An diese Woche erinnert er sich genau, an die Woche davor kaum, obwohl er sie gründlich mit Informationen verbracht habe. Sein Fazit lautet: „Langeweile ist offenbar ein schlechter Zeitvertreib, aber ein gutes Gedächtnis.“ Matthias Brenneke wiederum löste im Wartezimmer mit leerem Akku gemeinsam mit einem fremden älteren Herrn ein Kreuzworträtsel und war beinahe enttäuscht, als man ihn aufrief. Seither fragt er sich, „ob Langeweile wirklich das Gegenteil von Unterhaltung ist oder nicht eher ihr Vorzimmer“. In beiden Texten entsteht aus der unfreiwilligen Leere etwas, das kein Gerät hätte liefern können: ein Gedanke, eine Begegnung, eine Erinnerung.\nIch halte die These vom Ende der Langeweile deshalb für falsch, und zwar in doppelter Hinsicht. Das Smartphone hat die Langeweile nicht abgeschafft, und es wäre auch kein Gewinn, wenn es das könnte. Vor einer Verklärung sollte man sich allerdings hüten, und Ruhland warnt selbst davor. Nicht jede Wartezeit bringt einen Gummibaum hervor, manche gehen einfach nur vorbei. Auch Talheims eigene Versuche zeigen, dass der Zusammenhang zwischen Langeweile und Kreativität schwächer ist, als Ratgeber behaupten. Worauf es ankommt, ist bescheidener. Wer die ersten Minuten der Leere aushält, gibt sich die Möglichkeit, die Frage zu hören, die die Langeweile nach Talheim eigentlich stellt: ob man das, was man gerade tut, wirklich will. Hellwig rät Eltern, die zehn Minuten des Quengelns bei ihren Kindern auszuhalten. Ich würde diesen Rat auf Erwachsene ausdehnen. Das Telefon muss dafür nicht verschwinden. Es reicht, wenn es gelegentlich in der Tasche bleibt.",
       "woerter": 650,
       "hilfen": [
        "Man könnte daraus schließen, dass …",
        "Auf den ersten Blick spricht einiges für die These, …",
        "Bei genauerem Hinsehen zeigt sich allerdings, dass …",
        "X folgert daraus, …",
        "Was dabei verloren geht, beschreibt … anschaulicher als …",
        "Ich halte diese These deshalb für falsch, und zwar in doppelter Hinsicht."
       ],
       "erklaerung": "Der Aufsatz stellt zuerst ehrlich dar, was für die Gegenthese spricht, belegt dann mit den Daten aus Reportage und Interview das Gegenteil und nutzt die Glossen als anschauliche Gegenprobe. Der Schluss schränkt die eigene Position ein und vermeidet so die bequeme Verklärung.",
       "punkteText": "Wähle einen dieser drei Aspekte",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Ein Aspekt klar bearbeitet? Mindestens drei Quellen eingearbeitet und als fremde Meinung gekennzeichnet?",
         "stufen": [
          {
           "w": 10,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 7,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 3,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        },
        {
         "t": "Kohärenz und Kohäsion",
         "h": "Leserfreundlich gegliedert, Absätze und Gedanken gut verknüpft?",
         "stufen": [
          {
           "w": 10,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 7,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 3,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung durchgehend auf C2?",
         "stufen": [
          {
           "w": 10,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 7,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 3,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        },
        {
         "t": "Repertoire",
         "h": "Breiter, präziser Wortschatz, vielfältige Strukturen, kaum Wiederholungen?",
         "stufen": [
          {
           "w": 10,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 7,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 3,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        }
       ],
       "max": 40,
       "keineKI": true,
       "ohneWortzahl": true,
       "platzhalter": "Schreib hier deinen Aufsatz …",
       "rubrikTitel": "Bewerte dich nach den vier telc-Kriterien",
       "rubrikHinweis": "Vier Kriterien wie bei telc C2, je A = 10, B = 7, C = 3, D = 0 Punkte. Für A bei der Aufgabengerechtheit brauchst du mindestens drei Quellen. telc nennt keine Wortzahl."
      }
     ]
    },
    {
     "id": "tc2s2r3",
     "titel": "Erinnern und Vergessen",
     "aufgaben": [
      {
       "id": "tc2a3",
       "oberthema": "Erinnern und Vergessen",
       "sorte": "aufsatz",
       "an": "",
       "situation": "Oberthema „Erinnern und Vergessen“. Schreiben Sie in neunzig Minuten einen Aufsatz zu einem der drei Aspekte. Beziehen Sie sich auf mindestens drei der Lese- und Hörtexte; kennzeichnen Sie Zitate und Übernahmen.",
       "punkte": [
        {
         "nr": 1,
         "was": "Wie verlässlich ist unser Gedächtnis?",
         "hinweis": "Erörtern Sie, wie Erinnerungen sich verändern und was daraus für den Alltag und für Gerichte folgt."
        },
        {
         "nr": 2,
         "was": "Brauchen wir ein Recht auf Vergessen?",
         "hinweis": "Wägen Sie das Interesse des Einzelnen gegen die Pflicht einer Gesellschaft zur Erinnerung ab."
        },
        {
         "nr": 3,
         "was": "Wer bewahrt die Erinnerungen einer Familie?",
         "hinweis": "Diskutieren Sie, was mit Familiengeschichten geschieht, wenn niemand mehr erzählt."
        }
       ],
       "eingang": {
        "von": "Deine Quellen",
        "betreff": "Oberthema: Erinnern und Vergessen",
        "text": "Lesen Teil 1: „Salz wie bei Tante Gerda“, Essay von Annegret Sommerfeld in den Heften für Gegenwart. Das Kochheft der Großmutter enthält kaum Mengenangaben. Mutter, Tante und Cousin erinnern sich an drei verschiedene Fassungen der Rouladen; die Autorin hält gerade diesen Streit für die eigentliche Überlieferung.\nLesen Teil 2: „Was wir nicht behalten“, Essay von Ruth Ebersbach in Die Lesezeit. Zweimonatsschrift für Literatur und Debatte. Ihre wichtigste Erinnerung, der Auszug des Vaters, steht im Tagebuch ganz anders. Nach dem Neurologen Daniel Wendt wird jede Erinnerung beim Abrufen neu geformt, und Vergessen ist ein aktiver, notwendiger Vorgang. Die Autorin verteidigt das Recht auf Vergessenwerden, nicht aber das Vergessen gesellschaftlicher Schuld.\nLesen Teil 3: „Der Mann mit den fremden Alben“, Porträt von Lea Brandstätter im Magazin Stadtland. Der Duisburger Haushaltsauflöser Ralf Kowalczyk bewahrt über tausend Fotoalben auf, die Erben nicht haben wollten. Die Kulturwissenschaftlerin Dörte Lindqvist meint, Vergessen beginne an dem Tag, an dem niemand mehr fragt.\nHörtext: „Wie zuverlässig sind Zeugen? Erinnerungen vor Gericht“, Vortrag eines Rechtspsychologen. Erinnern sei Rekonstruktion; Fragen und spätere Informationen könnten Erinnerungen verfälschen, und falsche Erinnerungen ließen sich sogar erzeugen. Die Sicherheit eines Zeugen wachse mit jeder Wiederholung, sage aber wenig über die Richtigkeit. Zeugen sollten früh, offen und einzeln befragt werden."
       },
       "muster": "Die meisten Menschen besitzen ein paar Erinnerungen, für die sie die Hand ins Feuer legen würden. Sie sehen die Szene vor sich, kennen das Wetter, die Farbe eines Mantels, den Satz, der damals gefallen ist. Gerade diese Gewissheit möchte ich im Folgenden befragen: Wie verlässlich ist unser Gedächtnis, und was folgt daraus, wenn es weniger verlässlich ist, als wir glauben? Ich stütze mich dabei auf den Essay „Was wir nicht behalten“ von Ruth Ebersbach, auf den Vortrag eines Rechtspsychologen über Zeugenaussagen vor Gericht und auf Annegret Sommerfelds Essay über das Kochheft ihrer Großmutter.\nEbersbach erzählt eine Geschichte, die man so schnell nicht vergisst. Dreißig Jahre lang hat sie von dem Tag berichtet, an dem ihr Vater die Familie verließ: Regen, ein roter Koffer, die schweigende Mutter, sie selbst im Türrahmen. Als sie ihre alten Tagebücher las, fand sie eine andere Version. Es war ein sonniger Junitag, sie war im Freibad, und als sie heimkam, war der Vater bereits fort. Der Neurologe Daniel Wendt, mit dem sie für ihren Text sprach, erklärt das damit, dass eine Erinnerung bei jedem Abruf wieder formbar werde und neu abgespeichert werden müsse. Er bringt es auf eine Formel: „Erinnern heißt, ein Original abzuschreiben und dann das Original wegzuwerfen.“ Der Rechtspsychologe beschreibt denselben Vorgang mit einem anderen Bild. Erinnern sei wie ein Gericht, das man jedes Mal ohne Rezept neu koche; es schmecke ungefähr gleich, aber nie genau so. Beide Quellen ziehen daraus eine unbequeme Folgerung: Gerade die Erlebnisse, die wir am häufigsten erzählen, sind am stärksten bearbeitet. Ebersbach sagt über ihre Küchenszene: „Dass sie mir so lebendig vorkommt, ist kein Beweis für ihre Wahrheit, eher ein Hinweis auf ihren Gebrauch.“\nBesonders folgenreich ist diese Formbarkeit dort, wo von einer Erinnerung viel abhängt, nämlich vor Gericht. Der Vortragende berichtet von einem klassischen Versuch, in dem ein einziges Wort in der Frage genügte, damit Zeugen eine höhere Geschwindigkeit schätzten und eine Woche später sogar zerbrochenes Glas gesehen haben wollten, das es im Film nie gegeben hatte. In anderen Experimenten erinnerte sich etwa ein Viertel der Teilnehmer an ein erfundenes Kindheitserlebnis, teils mit Einzelheiten wie einer blauen Strickjacke. Hinzu kommt, dass die Sicherheit eines Zeugen mit jeder Wiederholung wächst, ohne dass seine Aussage dadurch genauer würde. Beunruhigend ist vor allem, dass sich falsche Erinnerungen von innen nicht von echten unterscheiden lassen. Der Rechtspsychologe formuliert daraus eine Lehre, die ausdrücklich über das Gericht hinaus gelten soll: „Das Gefühl, dass eine Erinnerung echt ist, ist kein Beweis dafür, dass sie es auch ist.“ Wie ernst das ist, zeigt seine Angabe, dass in den Vereinigten Staaten in etwa drei Vierteln der Fälle, in denen Verurteilte später durch Genanalysen entlastet wurden, eine falsche Zeugenaussage zur Verurteilung beigetragen habe.\nMan könnte aus alldem schließen, dem Gedächtnis sei grundsätzlich nicht zu trauen. Diesen Schluss halte ich für übereilt, und auch der Vortragende zieht ihn nicht. Die meisten Erinnerungen seien im Großen und Ganzen zuverlässig, sonst käme man im Leben nicht zurecht; unsicher würden sie vor allem bei Einzelheiten und bei Geschichten, über die viel geredet wurde. Zudem erfüllt das Gedächtnis Aufgaben, bei denen Genauigkeit gar nicht das Wichtigste ist. Annegret Sommerfeld beschreibt, wie sich ihre Mutter, ihre Tante und ein Cousin an drei verschiedene Fassungen der großmütterlichen Rouladen erinnern. Zuerst hielt sie den Streit für ein Ärgernis, dann änderte sie ihre Meinung: „Inzwischen glaube ich, dass er die eigentliche Überlieferung ist.“ Die Familie kocht seither abwechselnd nach allen drei Fassungen. Ähnlich halten es Ebersbach und ihr Bruder, die sich nach einem langen Streit über den Auszug des Vaters darauf einigen, sich nicht zu einigen.\nMein Urteil fällt deshalb zweigeteilt aus. Als Beweismittel ist das Gedächtnis weit weniger verlässlich, als wir im Alltag annehmen, und wo über Schuld und Freiheit entschieden wird, muss man daraus Konsequenzen ziehen. Der Rechtspsychologe nennt sie: Zeugen früh, einzeln und ohne Suggestivfragen befragen. Als Grundlage einer Lebensgeschichte oder einer Familie dagegen muss das Gedächtnis gar nicht im strengen Sinn verlässlich sein. Dort genügt es, dass es uns etwas bedeutet, und die abweichenden Fassungen der anderen sind eher Ergänzung als Angriff. Ich nehme aus diesen Texten vor allem eine gewisse Bescheidenheit mit. Wer das nächste Mal mit großer Sicherheit erzählt, wie es damals wirklich war, sollte bedenken, wie oft er die Geschichte schon erzählt hat. Unser Gedächtnis ist nach den Worten des Vortragenden „eher ein Erzähler, der es mit der Wahrheit nicht immer ganz genau nimmt“. Mit einem solchen Erzähler lässt es sich gut leben, solange man nicht vergisst, dass er erzählt.",
       "woerter": 650,
       "hilfen": [
        "Gerade diese Gewissheit möchte ich im Folgenden befragen: …",
        "X erklärt das damit, dass …",
        "Beide Quellen ziehen daraus eine unbequeme Folgerung: …",
        "Besonders folgenreich ist …, wo …",
        "Diesen Schluss halte ich für übereilt, und auch X zieht ihn nicht.",
        "Mein Urteil fällt deshalb zweigeteilt aus."
       ],
       "erklaerung": "Der Aufsatz verbindet einen Essay und einen Fachvortrag über dasselbe Phänomen und zeigt, wo sie sich gegenseitig stützen. Das zweigeteilte Urteil unterscheidet sauber zwischen dem Gedächtnis als Beweismittel und als Grundlage einer Familiengeschichte.",
       "punkteText": "Wähle einen dieser drei Aspekte",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Ein Aspekt klar bearbeitet? Mindestens drei Quellen eingearbeitet und als fremde Meinung gekennzeichnet?",
         "stufen": [
          {
           "w": 10,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 7,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 3,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        },
        {
         "t": "Kohärenz und Kohäsion",
         "h": "Leserfreundlich gegliedert, Absätze und Gedanken gut verknüpft?",
         "stufen": [
          {
           "w": 10,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 7,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 3,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung durchgehend auf C2?",
         "stufen": [
          {
           "w": 10,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 7,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 3,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        },
        {
         "t": "Repertoire",
         "h": "Breiter, präziser Wortschatz, vielfältige Strukturen, kaum Wiederholungen?",
         "stufen": [
          {
           "w": 10,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 7,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 3,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        }
       ],
       "max": 40,
       "keineKI": true,
       "ohneWortzahl": true,
       "platzhalter": "Schreib hier deinen Aufsatz …",
       "rubrikTitel": "Bewerte dich nach den vier telc-Kriterien",
       "rubrikHinweis": "Vier Kriterien wie bei telc C2, je A = 10, B = 7, C = 3, D = 0 Punkte. Für A bei der Aufgabengerechtheit brauchst du mindestens drei Quellen. telc nennt keine Wortzahl."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tc2sl1",
   "titel": "Prüfungslauf 1 · Grenzen",
   "minuten": 150,
   "aufgaben": [
    {
     "id": "tc2z4",
     "sorte": "aufsatz",
     "an": "",
     "hoertext": {
      "titel": "Radiointerview: Die Grenze im Kopf. Leben in einer geteilten Stadt",
      "zeilen": [
       {
        "wer": "Frau",
        "text": "Willkommen zu unserem Wochenendgespräch. Mein Gast ist heute der Kulturgeograph Jonas Albrecht. Er hat drei Jahre lang in einer Doppelstadt an der deutsch-polnischen Grenze gelebt und geforscht, in Kallweit auf der deutschen und Kalwice auf der polnischen Seite. Herr Albrecht, guten Tag."
       },
       {
        "wer": "Mann",
        "text": "Guten Tag, ich freue mich."
       },
       {
        "wer": "Frau",
        "text": "Man könnte ja meinen, seit es dort keine Kontrollen mehr gibt, ist die Grenze im Grunde verschwunden. Ist sie das?"
       },
       {
        "wer": "Mann",
        "text": "Das ist die Erwartung, mit der ich selbst dorthin gefahren bin, ehrlich gesagt. Und das Erste, was ich lernen musste, war: Eine offene Grenze verschwindet nicht einfach. Sie verändert nur ihre Form. Die beiden Stadtteile sind durch eine Brücke verbunden, vielleicht zweihundert Meter lang. Es gibt keinen Schlagbaum mehr, kein Häuschen, nur noch ein kleines blaues Schild. Viele Touristen fahren darüber, ohne es überhaupt zu bemerken. Und trotzdem ist diese Brücke für viele Leute eine Schwelle geblieben."
       },
       {
        "wer": "Frau",
        "text": "Eine Schwelle, das müssen Sie erklären."
       },
       {
        "wer": "Mann",
        "text": "Na ja, man überlegt es sich, bevor man hinübergeht. Es ist nicht wie der Weg in den Nachbarstadtteil, es ist ein kleiner Entschluss. Ein älterer Herr hat mir in einem Gespräch gesagt: Ich war seit Jahren nicht drüben, ich hatte da nichts zu tun. Und der wohnt keine zehn Minuten von der Brücke entfernt."
       },
       {
        "wer": "Frau",
        "text": "Das ist ja ein bemerkenswerter Satz: Ich hatte da nichts zu tun. Ist das typisch?"
       },
       {
        "wer": "Mann",
        "text": "Sehr typisch. Wir haben an vierzehn Tagen zu verschiedenen Uhrzeiten gezählt, wer die Brücke überquert, und die Leute dann kurz angesprochen. Die allermeisten, die hinübergehen, haben einen ganz bestimmten Zweck: tanken, Zigaretten kaufen, zum Zahnarzt, zur Arbeit. Nur ein kleiner Teil, ich glaube, es war nicht einmal jeder Zehnte, ging hinüber, ohne einen bestimmten Grund zu nennen. Einfach spazieren, sich etwas ansehen, sich in ein Café setzen. Auf der eigenen Seite flaniert man, auf der anderen erledigt man etwas."
       },
       {
        "wer": "Frau",
        "text": "Gilt das für beide Seiten gleichermaßen?"
       },
       {
        "wer": "Mann",
        "text": "Erstaunlich gleichmäßig, ja. Die Gründe sind unterschiedlich. Die Deutschen fahren eher zum Einkaufen und Tanken hinüber, die Polen eher zur Arbeit. Aber das Muster ist dasselbe. Die andere Seite ist ein Ort für Besorgungen, nicht ein Ort zum Leben."
       },
       {
        "wer": "Frau",
        "text": "Sie sagen das so neutral. Hat Sie das enttäuscht?"
       },
       {
        "wer": "Mann",
        "text": "Am Anfang schon, das gebe ich zu. Ich hatte, ein bisschen naiv, eine Art europäisches Musterstädtchen erwartet. Inzwischen sehe ich das gelassener. Grenzen, die über Jahrhunderte gewachsen sind, verschwinden eben nicht in zwei Jahrzehnten."
       },
       {
        "wer": "Frau",
        "text": "Wenn die Grenze nicht mehr an der Brücke steht, wo steht sie dann?"
       },
       {
        "wer": "Mann",
        "text": "Sie entsteht im Alltag immer wieder neu, durch Sprache und durch Gewohnheiten. Das ist eigentlich die zentrale These meiner Arbeit. Die alte Grenze war eine Linie auf der Landkarte, mit Zöllnern. Die neue Grenze ist unsichtbar, sie verläuft durch die Köpfe und durch die Gewohnheiten der Leute. Und das Erste, woran man sie bemerkt, ist die Sprache."
       },
       {
        "wer": "Frau",
        "text": "Weil man sich nicht versteht?"
       },
       {
        "wer": "Mann",
        "text": "Weil man sich ungleich versteht. Das ist ein wichtiger Unterschied. Auf der polnischen Seite spricht ein großer Teil der jüngeren Leute recht ordentlich Deutsch, viele haben es in der Schule gelernt, manche arbeiten auf der deutschen Seite. Auf der deutschen Seite dagegen spricht kaum jemand Polnisch. In unserer Befragung waren es weniger als fünf von hundert. Das heißt, wenn sich zwei Leute auf der Brücke begegnen, wird fast immer Deutsch gesprochen."
       },
       {
        "wer": "Frau",
        "text": "Ist das nicht einfach praktisch?"
       },
       {
        "wer": "Mann",
        "text": "Praktisch schon. Aber es hat eine Wirkung, über die man nachdenken sollte. Wer immer in der Sprache des anderen sprechen muss, ist im Gespräch ein wenig unterlegen. Ein polnischer Gesprächspartner hat zu mir gesagt: Ich bin in meiner eigenen Stadt immer der Gast."
       },
       {
        "wer": "Frau",
        "text": "Sie haben auch von Gewohnheiten gesprochen. Was meinen Sie damit?"
       },
       {
        "wer": "Mann",
        "text": "Ganz alltägliche Dinge. Wo man einkauft, zu welchem Arzt man geht, wo die Kinder Sport treiben, in welchem Lokal man Geburtstag feiert. Und da sieht man, dass die Leute die andere Seite fast nur dann nutzen, wenn es einen Preisunterschied gibt. Benzin ist auf der einen Seite billiger, also fährt man dorthin. Ein Haarschnitt kostet drüben die Hälfte, also lässt man sich drüben die Haare schneiden. Aber sobald der Preisunterschied verschwindet, verschwindet auch der Besuch."
       },
       {
        "wer": "Frau",
        "text": "Haben Sie dafür ein Beispiel?"
       },
       {
        "wer": "Mann",
        "text": "Ein sehr schönes sogar. Während meiner Zeit dort hat sich der Wechselkurs für ein paar Monate deutlich verschoben, und das Einkaufen auf der polnischen Seite war plötzlich kaum noch günstiger. Innerhalb weniger Wochen standen die Parkplätze vor den Supermärkten drüben halb leer. Niemand hat gesagt: Ich fahre trotzdem hin, weil ich die Bäckerei so mag oder weil ich die Verkäuferin kenne. Es gab keine Bindung, die über den Preis hinausging. Und als sich der Kurs wieder drehte, waren die Parkplätze nach ein paar Wochen wieder voll."
       },
       {
        "wer": "Frau",
        "text": "Das klingt fast ein bisschen traurig."
       },
       {
        "wer": "Mann",
        "text": "Es ist zumindest ehrlich. Die Grenze wird nicht von Gefühlen überquert, sondern vom Geldbeutel."
       },
       {
        "wer": "Frau",
        "text": "Sie sagen das ohne jeden Vorwurf. Man hört ja oft, Grenzen seien vor allem ein Hindernis. Sehen Sie das anders?"
       },
       {
        "wer": "Mann",
        "text": "Ich sehe, dass Grenzen für die Bewohner auch Vorteile haben, und das wird in der politischen Debatte gern übersehen. Wir sprechen immer davon, Grenzen abzubauen, als wäre das für alle Beteiligten ein Gewinn. Vor Ort sieht das komplizierter aus. Nehmen Sie die Tankstellen auf der polnischen Seite, die Friseursalons, die Zigarettenläden direkt hinter der Brücke. Ganze Straßenzüge leben davon, dass auf der einen Seite etwas billiger ist als auf der anderen. Wenn Sie dort an einem Samstagvormittag entlanggehen, hören Sie fast nur Deutsch."
       },
       {
        "wer": "Frau",
        "text": "Sie leben also vom Unterschied."
       },
       {
        "wer": "Mann",
        "text": "Genau, vom Unterschied. Und dasselbe gilt in die andere Richtung für die Arbeitsplätze. Viele Polen arbeiten in Kallweit, in der Pflege, auf dem Bau, in einem großen Logistiklager am Stadtrand, weil die Löhne dort höher sind. Wenn die Unterschiede eines Tages ganz verschwinden, was ja politisch gewollt ist, dann verschwindet ein guter Teil dieser Wirtschaft. Ein Tankstellenbesitzer hat mir lachend gesagt: Europa ist gut, aber bitte nicht zu viel davon. Das war natürlich ein Scherz, aber es steckte etwas Wahres darin."
       },
       {
        "wer": "Frau",
        "text": "Gibt es außer den wirtschaftlichen noch andere Vorteile?"
       },
       {
        "wer": "Mann",
        "text": "Ja, und das ist der Teil, der mich am meisten beschäftigt hat. Grenzen stiften Identität. Das klingt vielleicht altmodisch, aber man sollte es nicht unterschätzen. Ein Gefühl dafür, wer wir sind, entsteht fast immer dadurch, dass man sich von anderen abgrenzt. In Kallweit gibt es zum Beispiel einen Heimatverein, der jedes Jahr ein großes Stadtfest organisiert. Als ich die Mitglieder gefragt habe, was eigentlich typisch für ihre Stadt sei, kamen viele Antworten, die in Wahrheit Vergleiche waren. Bei uns ist es ordentlicher, bei uns ist der Bürgermeister nahbarer, bei uns schmeckt das Bier besser."
       },
       {
        "wer": "Frau",
        "text": "Und auf der anderen Seite?"
       },
       {
        "wer": "Mann",
        "text": "Genau dasselbe in Spiegelschrift. Bei uns ist man herzlicher, bei uns ist man nicht so steif. Die beiden Städte brauchen einander gewissermaßen, um zu wissen, wer sie sind."
       },
       {
        "wer": "Frau",
        "text": "Ist das nicht gefährlich? So fangen ja auch Vorurteile an."
       },
       {
        "wer": "Mann",
        "text": "Natürlich kann das kippen, gerade in Krisenzeiten. Aber ich halte es für falsch, jede Form von Abgrenzung gleich als Vorurteil zu betrachten. Man kann wissen, wer man ist, ohne den anderen abzuwerten. Die meisten Menschen dort tun genau das."
       },
       {
        "wer": "Frau",
        "text": "Die beiden Städte versuchen trotzdem seit Jahren, enger zusammenzuarbeiten. Es gibt gemeinsame Projekte, Fördergelder aus Brüssel. Funktioniert das?"
       },
       {
        "wer": "Mann",
        "text": "Teils, teils. Die gemeinsamen Projekte zeigen sehr gut, was möglich ist und wo die Grenzen der Zusammenarbeit liegen. Ich nenne Ihnen ein gelungenes und ein gescheitertes Beispiel. Das gelungene ist ein zweisprachiger Kindergarten auf der deutschen Seite. Die Erzieherinnen kommen von beiden Seiten, gesprochen wird Deutsch und Polnisch, und ungefähr die Hälfte der Kinder kommt aus Kalwice."
       },
       {
        "wer": "Frau",
        "text": "Warum funktioniert gerade das?"
       },
       {
        "wer": "Mann",
        "text": "Ich glaube, weil es für die Eltern einen ganz konkreten Nutzen hat. Die polnischen Eltern wollen, dass ihre Kinder früh gut Deutsch lernen. Und interessanterweise gibt es inzwischen auch deutsche Eltern, die ihre Kinder gezielt dort anmelden, damit sie Polnisch lernen. Das sind noch nicht viele, aber es werden mehr. Im letzten Jahr gab es zum ersten Mal eine Warteliste. Und dort passiert etwas, das ich sonst in der Stadt kaum beobachtet habe: Die Eltern lernen sich kennen. Sie stehen morgens zusammen an der Garderobe, sie laden sich gegenseitig zu Kindergeburtstagen ein. Über die Kinder entsteht eine Verbindung, die über den Benzinpreis hinausgeht."
       },
       {
        "wer": "Frau",
        "text": "Und das gescheiterte Beispiel?"
       },
       {
        "wer": "Mann",
        "text": "Das ist eine Buslinie. Eigentlich eine ganz naheliegende Idee: ein Bus, der alle zwanzig Minuten durch beide Stadtteile fährt, über die Brücke hin und zurück. Alle waren dafür, beide Bürgermeister, die Vereine, die Bewohner. Und trotzdem hat es fast sieben Jahre gedauert, bis überhaupt ein Probebetrieb begonnen hat. Nach zwei Jahren wurde er wieder eingestellt. Heute fahren wieder zwei getrennte Linien, die jeweils an der Brücke enden, und man geht zu Fuß hinüber und steigt um."
       },
       {
        "wer": "Frau",
        "text": "Woran ist es gescheitert?"
       },
       {
        "wer": "Mann",
        "text": "An Vorschriften, ganz banal. Die Fahrer brauchten eine Genehmigung für beide Länder, die Fahrkarten mussten in zwei Währungen verkauft werden, es gab unterschiedliche Regeln für die Sicherheit der Fahrzeuge, für die Ruhezeiten der Fahrer, für die Versicherung. Jedes Problem für sich war lösbar, aber zusammen haben sie das Projekt so teuer gemacht, dass keiner der beiden Landkreise es auf Dauer bezahlen wollte."
       },
       {
        "wer": "Frau",
        "text": "Da ist die Grenze also doch wieder ganz handfest."
       },
       {
        "wer": "Mann",
        "text": "Ja, und zwar in Form von Papier. Ich sage meinen Studenten immer: Wenn ihr wissen wollt, wo eine Grenze wirklich verläuft, dann schaut nicht auf die Landkarte, sondern in die Verordnungen. Dort ist sie viel genauer eingezeichnet als irgendwo sonst."
       },
       {
        "wer": "Frau",
        "text": "Sie haben vorhin gesagt, die Abgrenzung kann in Krisenzeiten kippen. Haben Sie das selbst erlebt?"
       },
       {
        "wer": "Mann",
        "text": "Leider ja. Ich war gerade ein knappes Jahr dort, als die Pandemie begann. Und da habe ich gesehen, wie schnell Krisen Grenzen zurückbringen. Innerhalb von zwei Tagen stand an der Brücke wieder Polizei, mit Absperrgittern. Die Grenze, über die wir die ganze Zeit so theoretisch gesprochen haben, war plötzlich wieder aus Metall."
       },
       {
        "wer": "Frau",
        "text": "Wie haben die Menschen reagiert?"
       },
       {
        "wer": "Mann",
        "text": "Es war ein Schock, für beide Seiten. Am schlimmsten war es für die Pendler. Pflegekräfte aus Kalwice, die seit Jahren in einem Altenheim in Kallweit arbeiteten, durften nicht mehr hinüber, oder nur mit Bescheinigungen, die sich alle paar Tage änderten. Manche haben wochenlang in Pensionen auf der deutschen Seite übernachtet, getrennt von ihren Familien, die sie von der Brücke aus fast sehen konnten. Ich erinnere mich an ein Paar, er auf der einen Seite, sie auf der anderen, die sich jeden Abend am Fluss gegenübergestanden und telefoniert haben. Das stand damals sogar in der Lokalzeitung. Solche Bilder vergisst man in so einer kleinen Stadt nicht."
       },
       {
        "wer": "Frau",
        "text": "Was ist von dieser Zeit geblieben, jetzt, wo die Brücke wieder offen ist?"
       },
       {
        "wer": "Mann",
        "text": "Zwei Dinge, die eigentlich nicht zusammenpassen. Einerseits ist vielen erst durch die Schließung bewusst geworden, wie sehr die beiden Städte voneinander abhängen. Das Altenheim in Kallweit stand kurz davor, Bewohner verlegen zu müssen, weil das Personal fehlte. Den Händlern drüben sind die Kunden weggebrochen. Das hat man vorher gewusst, aber nicht gespürt. Ein Händler hat mir gesagt, er habe in diesen Wochen zum ersten Mal verstanden, dass seine Kundschaft zur Hälfte von drüben kommt. Andererseits ist auch Misstrauen geblieben. In der Zeit der Schließung sind Gerüchte entstanden, wer das Virus eingeschleppt habe, und solche Sätze verschwinden nicht einfach, wenn die Gitter abgebaut werden."
       },
       {
        "wer": "Frau",
        "text": "Also ein gemischtes Fazit."
       },
       {
        "wer": "Mann",
        "text": "Ja. Ich würde sagen, die Grenze ist seitdem weniger selbstverständlich geworden, in beide Richtungen. Die Leute wissen besser, was sie an der offenen Brücke haben, und sie wissen auch, dass sie über Nacht wieder zugehen kann."
       },
       {
        "wer": "Frau",
        "text": "Herr Albrecht, zum Schluss: Gehen Sie selbst noch manchmal einfach so hinüber?"
       },
       {
        "wer": "Mann",
        "text": "Jedes Mal, wenn ich dort bin. Ich trinke meinen Kaffee in Kalwice. Ich bin, wenn Sie so wollen, die Ausnahme in meiner eigenen Statistik."
       },
       {
        "wer": "Frau",
        "text": "Vielen Dank für das Gespräch."
       }
      ]
     },
     "situation": "Oberthema „Grenzen\". Du hörst ein Interview von etwa fünfzehn Minuten, nur einmal. Mach beim Hören Notizen. Schreib danach eine Zusammenfassung in eigenen Worten mit mindestens fünf zentralen Gliederungspunkten.",
     "punkteText": "Darauf kommt es an",
     "punkte": [
      {
       "nr": 1,
       "was": "Mindestens fünf zentrale Gliederungspunkte",
       "hinweis": "Die Hauptgedanken in der Reihenfolge des Hörtextes."
      },
      {
       "nr": 2,
       "was": "Zu jedem Punkt die wichtigsten Details",
       "hinweis": "Beispiele, Gründe, Folgen, die den Punkt stützen."
      },
      {
       "nr": 3,
       "was": "Eigene Worte, sachlich, ohne eigene Wertung",
       "hinweis": "Indirekte Rede oder „laut der Referentin …\"."
      }
     ],
     "hilfen": [
      "Zunächst geht es um …",
      "Anschließend wird erläutert, dass …",
      "Ein weiterer zentraler Punkt ist …",
      "Als Beispiel wird … genannt.",
      "Abschließend wird betont, dass …"
     ],
     "muster": "In einem Rundfunkinterview berichtet ein Kulturgeograph von seiner Forschung in einer Doppelstadt an der deutsch-polnischen Grenze und erläutert, welche Rolle die Grenze dort heute noch spielt.\nSeine erste Erkenntnis lautet, dass eine offene Grenze nicht einfach verschwindet. Obwohl es an der Brücke zwischen den beiden Stadtteilen keine Kontrollen mehr gebe, bleibe sie für viele Bewohner eine Schwelle. Zählungen hätten ergeben, dass kaum jemand ohne einen konkreten Zweck auf die andere Seite gehe. Auf der eigenen Seite gehe man spazieren, auf der anderen erledige man Besorgungen.\nAnschließend legt er dar, dass Grenzen im Alltag durch Sprache und Gewohnheiten immer wieder neu entstünden. Die Sprachkenntnisse seien sehr ungleich verteilt, da viele Polen Deutsch sprächen, aber kaum Deutsche Polnisch. Wer stets die Sprache des anderen sprechen müsse, fühle sich im Gespräch leicht unterlegen. Außerdem nutzten die Bewohner die andere Seite fast nur wegen günstigerer Preise, was sich bei einer Verschiebung des Wechselkurses deutlich gezeigt habe.\nDer Wissenschaftler betont zudem, dass Grenzen den Menschen vor Ort auch Vorteile brächten. Zahlreiche Geschäfte und Arbeitsplätze lebten gerade vom Preis- und Lohngefälle. Ein vollständiger Abbau der Unterschiede würde daher einen Teil der örtlichen Wirtschaft gefährden. Zudem trage die Abgrenzung vom Nachbarn dazu bei, eine eigene Identität auszubilden, ohne dass daraus zwangsläufig Vorurteile entstehen müssten.\nAn zwei Projekten veranschaulicht er die Möglichkeiten und Grenzen der Zusammenarbeit. Ein zweisprachiger Kindergarten habe sich bewährt und auch Kontakte zwischen den Eltern gefördert. Erfolgreich sei er vor allem, weil er den Familien einen konkreten Nutzen biete. Eine gemeinsame Buslinie sei dagegen an unterschiedlichen Vorschriften und den daraus folgenden Kosten gescheitert. Wo eine Grenze tatsächlich verlaufe, zeige sich daher eher in Verordnungen als auf der Landkarte.\nSchließlich beschreibt er, wie rasch Krisen Grenzen zurückbringen könnten. Die Schließung der Grenze in der Pandemie sei für beide Seiten ein Schock gewesen, besonders für die Pendler in der Pflege. Innerhalb weniger Tage hätten an der Brücke wieder Polizisten und Absperrgitter gestanden. Seitdem sei man sich der gegenseitigen Abhängigkeit stärker bewusst, zugleich sei aber auch Misstrauen zurückgeblieben.",
     "rubrik": [
      {
       "t": "Hauptpunkt 1: Eine offene Grenze verschwindet nicht einfach",
       "h": "Details: Die Brücke ohne Kontrollen bleibt für viele eine Schwelle · Kaum jemand geht ohne bestimmten Zweck hinüber",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "Punkt und beide Details"
        },
        {
         "w": 3,
         "t": "B",
         "d": "Punkt und ein Detail"
        },
        {
         "w": 1,
         "t": "C",
         "d": "nur der Punkt"
        },
        {
         "w": 0,
         "t": "D",
         "d": "fehlt"
        }
       ]
      },
      {
       "t": "Hauptpunkt 2: Grenzen entstehen im Alltag neu durch Sprache und Gewohnheit",
       "h": "Details: Sprachkenntnisse sind auf beiden Seiten sehr ungleich verteilt · Man nutzt die andere Seite fast nur wegen der Preise",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "Punkt und beide Details"
        },
        {
         "w": 3,
         "t": "B",
         "d": "Punkt und ein Detail"
        },
        {
         "w": 1,
         "t": "C",
         "d": "nur der Punkt"
        },
        {
         "w": 0,
         "t": "D",
         "d": "fehlt"
        }
       ]
      },
      {
       "t": "Hauptpunkt 3: Grenzen bringen den Bewohnern auch Vorteile",
       "h": "Details: Geschäfte und Arbeitsplätze leben vom Preis- und Lohngefälle · Abgrenzung vom Nachbarn stiftet eine eigene Identität",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "Punkt und beide Details"
        },
        {
         "w": 3,
         "t": "B",
         "d": "Punkt und ein Detail"
        },
        {
         "w": 1,
         "t": "C",
         "d": "nur der Punkt"
        },
        {
         "w": 0,
         "t": "D",
         "d": "fehlt"
        }
       ]
      },
      {
       "t": "Hauptpunkt 4: Gemeinsame Projekte zeigen Möglichkeiten und Grenzen der Zusammenarbeit",
       "h": "Details: Ein zweisprachiger Kindergarten ist ein gelungenes Beispiel · Eine gemeinsame Buslinie scheiterte an unterschiedlichen Vorschriften",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "Punkt und beide Details"
        },
        {
         "w": 3,
         "t": "B",
         "d": "Punkt und ein Detail"
        },
        {
         "w": 1,
         "t": "C",
         "d": "nur der Punkt"
        },
        {
         "w": 0,
         "t": "D",
         "d": "fehlt"
        }
       ]
      },
      {
       "t": "Hauptpunkt 5: Krisen bringen Grenzen schnell zurück",
       "h": "Details: Die Grenzschließung in der Pandemie war ein Schock · Danach mehr Bewusstsein für Abhängigkeit, aber auch Misstrauen",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "Punkt und beide Details"
        },
        {
         "w": 3,
         "t": "B",
         "d": "Punkt und ein Detail"
        },
        {
         "w": 1,
         "t": "C",
         "d": "nur der Punkt"
        },
        {
         "w": 0,
         "t": "D",
         "d": "fehlt"
        }
       ]
      },
      {
       "t": "Sprache",
       "h": "Genau, abwechslungsreich, gut verknüpft, kaum Fehler?",
       "stufen": [
        {
         "w": 15,
         "t": "A",
         "d": "durchgehend C2"
        },
        {
         "w": 10,
         "t": "B",
         "d": "weitgehend C2"
        },
        {
         "w": 5,
         "t": "C",
         "d": "oft eingeschränkt"
        },
        {
         "w": 0,
         "t": "D",
         "d": "nicht angemessen"
        }
       ]
      }
     ],
     "max": 40,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 330,
     "platzhalter": "Schreib hier deine Zusammenfassung …",
     "rubrikTitel": "Bewerte deine Zusammenfassung",
     "rubrikHinweis": "Inhalt wie bei telc: je Hauptpunkt 1 Punkt, je Detail 2 Punkte, zusammen 25. Die Sprache bewertet telc als Ganzes mit bis zu 15 Punkten; die Stufen hier sind eine Übungsschätzung. telc nennt keine Wortzahl."
    },
    {
     "id": "tc2a4",
     "oberthema": "Grenzen",
     "sorte": "aufsatz",
     "an": "",
     "situation": "Oberthema „Grenzen“. Schreiben Sie in neunzig Minuten einen Aufsatz zu einem der drei Aspekte. Beziehen Sie sich auf mindestens drei der Lese- und Hörtexte; kennzeichnen Sie Zitate und Übernahmen.",
     "punkte": [
      {
       "nr": 1,
       "was": "Verschwindet eine Grenze, wenn man sie öffnet?",
       "hinweis": "Untersuchen Sie, in welcher Form Grenzen auch ohne Kontrollen weiterbestehen."
      },
      {
       "nr": 2,
       "was": "Brauchen Menschen Grenzen, um zu wissen, wer sie sind?",
       "hinweis": "Diskutieren Sie, ob Abgrenzung Identität stiftet oder vor allem Vorurteile nährt."
      },
      {
       "nr": 3,
       "was": "Sind Grenzkontrollen innerhalb Europas gerechtfertigt?",
       "hinweis": "Wägen Sie Sicherheitsargumente gegen die Folgen für Pendler, Händler und Nachbarschaft ab."
      }
     ],
     "eingang": {
      "von": "Deine Quellen",
      "betreff": "Oberthema: Grenzen",
      "text": "Lesen Teil 1: „Johannisbeeren“, Kolumne von Jörg Wettstein in der Stadtzeitung Mittelrhein. Ein neuer Nachbar lässt die Grundstücksgrenze vermessen, die gemeinsam abgeernteten Sträucher werden halbiert, schließlich steht ein Zaun. Eine Grenze beende keinen Streit, sie mache ihn bloß überflüssig.\nLesen Teil 2: „Die Stadt mit dem Fluss in der Mitte“, Reportage von Lena Hofbauer in Ostwärts. Magazin für Mitteleuropa. Kerzdorf und Kierzów an der Neiße waren bis 1945 eine Stadt. Heute gibt es gemeinsame Buslinie, Kläranlage und Feuerwehr, doch die Sprache trennt in eine Richtung stärker als in die andere. Die Schließung 2020 und die Kontrollen seit 2023 zeigen, wie schnell die Grenze zurückkehrt.\nLesen Teil 3: „Fünfhundert Schritte über die Neiße“, Erfahrungsbericht von Katrin Seidel im Monatsheft Nachbarschaften. Die Physiotherapeutin wohnt in Zgorzelec und arbeitet in Görlitz. Die beiden Städte lägen nebeneinander, sie flössen nicht ineinander. Erschreckt habe sie 2020 vor allem, wie schnell die geschlossene Grenze normal wurde.\nHörtext: „Die Grenze im Kopf. Leben in einer geteilten Stadt“, Radiointerview mit dem Kulturgeographen Jonas Albrecht in einem Wochenendgespräch. Eine offene Grenze verändere nur ihre Form: Man überquere sie fast nur aus Preisgründen, Polnisch spreche auf deutscher Seite kaum jemand, und gemeinsame Projekte scheiterten oft an Vorschriften. Grenzen stifteten zugleich Identität und hätten wirtschaftliche Vorteile."
     },
     "muster": "Seit Dezember 2007 kann man an der Neiße zwischen Deutschland und Polen die Brücken überqueren, ohne einen Ausweis zu zeigen. Für viele war das der Moment, in dem eine Grenze mit schwerer Geschichte ihre Härte verlor. Fast zwei Jahrzehnte später lohnt die Frage, ob eine Grenze tatsächlich verschwindet, wenn man die Schlagbäume abbaut. Ich gehe ihr anhand von drei Quellen nach: einer Reportage von Lena Hofbauer über die geteilte Stadt Kerzdorf und Kierzów, einem Erfahrungsbericht der Physiotherapeutin Katrin Seidel, die in Zgorzelec wohnt und in Görlitz arbeitet, sowie einem Radiointerview mit dem Kulturgeographen Jonas Albrecht.\nZunächst ist festzuhalten, dass sich an der Neiße tatsächlich viel verändert hat. Hofbauer beschreibt eine gemeinsame Buslinie, eine gemeinsame Kläranlage und eine Vereinbarung, nach der bei Bränden die Feuerwehr ausrückt, die schneller vor Ort ist. Im Kreiskrankenhaus von Kerzdorf arbeiten 46 Pflegekräfte, die in Polen wohnen; ohne sie, so der Pflegedirektor, könne man die chirurgische Station schließen. Katrin Seidel erzählt, sie habe die Linie im Pflaster der Brücke schon nach einem Monat nicht mehr bemerkt. Gemessen an einer Zeit, in der es zwischen den beiden Hälften von Kerzdorf fast zwanzig Jahre lang keine Brücke gab, ist das ein gewaltiger Fortschritt.\nTrotzdem zeigen alle drei Quellen, dass die Grenze nicht verschwunden ist, sondern sich verlagert hat. Albrecht fasst seine Beobachtungen in zwei Sätzen zusammen: „Eine offene Grenze verschwindet nicht einfach. Sie verändert nur ihre Form.“ Nach seinen Zählungen überquert nicht einmal jeder Zehnte die Brücke ohne bestimmten Zweck. Man tankt drüben, lässt sich die Haare schneiden oder geht zur Arbeit, aber man bummelt nicht: „Auf der eigenen Seite flaniert man, auf der anderen erledigt man etwas.“ Wie dünn diese Verbindung ist, zeigte sich, als sich der Wechselkurs für einige Monate verschob und die Parkplätze vor den polnischen Supermärkten innerhalb weniger Wochen halb leer standen. Albrechts trockenes Urteil lautet, die Grenze werde „nicht von Gefühlen überquert, sondern vom Geldbeutel“. Seidel bestätigt das aus der Innensicht. Görlitz und Zgorzelec flössen nicht ineinander, sie lägen nebeneinander, und in neun Jahren hätten sie genau zweimal deutsche Kollegen zu Hause besucht.\nAm deutlichsten verläuft die neue Grenze durch die Sprache. Auf der polnischen Seite spricht ein großer Teil der Jüngeren Deutsch, auf der deutschen Seite beherrschen nach Albrechts Befragung weniger als fünf von hundert Menschen Polnisch. Hofbauer berichtet von einem Gymnasium mit über sechshundert Schülern, an dem sich elf für den Polnischkurs angemeldet haben. Der Lehrer, selbst aus Kierzów, kommentiert das ohne Empörung: „Es ist einfach so, dass die Grenze in eine Richtung durchlässiger ist als in die andere.“ Daneben lebt die Grenze in Vorschriften fort. In der Doppelstadt, die Albrecht untersucht hat, scheiterte eine gemeinsame Buslinie an Genehmigungen, zwei Währungen und Versicherungsfragen, und eine Kita in Kerzdorf braucht für ein polnisches Kind drei Dokumente mehr als für ein deutsches. Schließlich hat die Pandemie gezeigt, wie schnell die alte Grenze zurückkehren kann. Im März 2020 standen wieder Polizisten auf den Brücken, Familien winkten einander über den Fluss zu, und Seidel erschrak, wie sie schreibt, vor allem darüber, wie rasch dieser Zustand normal wurde.\nMein Fazit lautet deshalb: Eine Grenze verschwindet nicht, wenn man sie öffnet, aber sie wird zu etwas, das man gestalten kann. Die alte Grenze bestand aus Schlagbäumen, Visa und Kontrollen, gegen die der Einzelne machtlos war. Die neue besteht aus Gewohnheiten, Sprachkenntnissen und Formularen, und diese lassen sich ändern, wenn auch langsam. Am überzeugendsten finde ich die Fälle, in denen ein konkreter Nutzen Menschen zusammenbringt, etwa die zweisprachige Kita, in der sich nach Albrecht die Eltern morgens an der Garderobe kennenlernen. Dass die Grenze im Kopf weiterbesteht, halte ich nicht für ein Scheitern Europas. Sie erinnert vielmehr daran, dass Offenheit nichts Selbstverständliches ist. Gerhard Pilz, der als Kind sein Elternhaus jenseits des Flusses verlassen musste, sagt in Hofbauers Reportage, man merke erst, was man hatte, „wenn einer wieder einen Tisch hinstellt und fragt, wo man hin will“. Katrin Seidel zieht einen ähnlichen Schluss, dem ich mich anschließe: „Man kann sich an sie gewöhnen. Man sollte es nur nicht ganz.“",
     "woerter": 650,
     "hilfen": [
      "Ich gehe dieser Frage anhand von drei Quellen nach: …",
      "Zunächst ist festzuhalten, dass …",
      "Trotzdem zeigen alle drei Quellen, dass …",
      "X bestätigt das aus der Innensicht.",
      "Daneben lebt … in … fort.",
      "Mein Fazit lautet deshalb: …"
     ],
     "erklaerung": "Der Aufsatz erkennt zuerst an, was sich wirklich geändert hat, und zeigt dann mit Zahlen und Beispielen aus allen drei Quellen, wo die Grenze weiterlebt. Das Fazit beantwortet die Frage nicht mit Ja oder Nein, sondern verschiebt sie auf eine genauere Ebene.",
     "punkteText": "Wähle einen dieser drei Aspekte",
     "rubrik": [
      {
       "t": "Aufgabengerechtheit",
       "h": "Ein Aspekt klar bearbeitet? Mindestens drei Quellen eingearbeitet und als fremde Meinung gekennzeichnet?",
       "stufen": [
        {
         "w": 10,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 7,
         "t": "B",
         "d": "weitgehend"
        },
        {
         "w": 3,
         "t": "C",
         "d": "teilweise"
        },
        {
         "w": 0,
         "t": "D",
         "d": "kaum"
        }
       ]
      },
      {
       "t": "Kohärenz und Kohäsion",
       "h": "Leserfreundlich gegliedert, Absätze und Gedanken gut verknüpft?",
       "stufen": [
        {
         "w": 10,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 7,
         "t": "B",
         "d": "weitgehend"
        },
        {
         "w": 3,
         "t": "C",
         "d": "teilweise"
        },
        {
         "w": 0,
         "t": "D",
         "d": "kaum"
        }
       ]
      },
      {
       "t": "Korrektheit",
       "h": "Grammatik und Rechtschreibung durchgehend auf C2?",
       "stufen": [
        {
         "w": 10,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 7,
         "t": "B",
         "d": "weitgehend"
        },
        {
         "w": 3,
         "t": "C",
         "d": "teilweise"
        },
        {
         "w": 0,
         "t": "D",
         "d": "kaum"
        }
       ]
      },
      {
       "t": "Repertoire",
       "h": "Breiter, präziser Wortschatz, vielfältige Strukturen, kaum Wiederholungen?",
       "stufen": [
        {
         "w": 10,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 7,
         "t": "B",
         "d": "weitgehend"
        },
        {
         "w": 3,
         "t": "C",
         "d": "teilweise"
        },
        {
         "w": 0,
         "t": "D",
         "d": "kaum"
        }
       ]
      }
     ],
     "max": 40,
     "keineKI": true,
     "ohneWortzahl": true,
     "platzhalter": "Schreib hier deinen Aufsatz …",
     "rubrikTitel": "Bewerte dich nach den vier telc-Kriterien",
     "rubrikHinweis": "Vier Kriterien wie bei telc C2, je A = 10, B = 7, C = 3, D = 0 Punkte. Für A bei der Aufgabengerechtheit brauchst du mindestens drei Quellen. telc nennt keine Wortzahl."
    }
   ]
  },
  {
   "id": "tc2sl2",
   "titel": "Prüfungslauf 2 · Stille und Lärm",
   "minuten": 150,
   "aufgaben": [
    {
     "id": "tc2z5",
     "sorte": "aufsatz",
     "an": "",
     "hoertext": {
      "titel": "Vortrag: Leise Städte planen. Warum Lärmschutz mehr ist als Dezibel",
      "wer": "Frau",
      "text": "Guten Abend, meine Damen und Herren. Bevor ich anfange, möchte ich Sie um etwas bitten. Seien Sie bitte einmal zehn Sekunden ganz still und hören Sie, was Sie hören. Danke. Was haben Sie gehört? Ich habe das Summen der Lüftung gehört, jemand in der dritten Reihe hat mit einem Bonbonpapier geraschelt, und von draußen kam die Straßenbahn. Dieser Saal gilt übrigens als ruhig. Er wurde vor ein paar Jahren sogar eigens schallgedämmt, das hat mir der Hausmeister vorhin stolz erzählt. Ich bin Akustikerin und berate seit vielen Jahren Städte, die ihre Lärmaktionspläne aufstellen müssen, und ich bin heute hier, weil Ihre Stadt gerade einen solchen Plan erarbeitet. Ich will mit einer Behauptung beginnen, die vielen übertrieben vorkommt: Lärm ist eines der am stärksten unterschätzten Gesundheitsrisiken, die wir haben. Wir halten Lärm für eine Belästigung, für etwas Ärgerliches. Dass er krank machen kann, wird oft belächelt. Dabei arbeitet unser Gehör ununterbrochen, auch nachts. Die Augen können wir schließen, die Ohren nicht. Wenn nachts ein Lastwagen vorbeifährt, reagiert der Körper, auch wenn Sie nicht aufwachen. Der Puls steigt, Stresshormone werden ausgeschüttet. Am nächsten Morgen wissen Sie nichts davon, aber Ihr Körper hat eine unruhige Nacht hinter sich. Nun könnte man sagen, eine unruhige Nacht hat jeder mal. Das stimmt. Problematisch wird es, wenn sie zur Regel wird. Und für sehr viele Menschen, die an großen Straßen, an Bahnstrecken oder in den Einflugschneisen von Flughäfen wohnen, ist sie die Regel. Es gibt inzwischen eine ganze Reihe großer Studien dazu, mit Zehntausenden von Teilnehmern, und die Ergebnisse weisen alle in dieselbe Richtung. Wer über Jahre dauerhaftem Verkehrslärm ausgesetzt ist, hat ein deutlich erhöhtes Risiko für Bluthochdruck und für Herzkrankheiten, bis hin zum Herzinfarkt. Die Weltgesundheitsorganisation schätzt, dass in Westeuropa jedes Jahr über eine Million gesunde Lebensjahre durch Lärm verloren gehen. Ich gebe zu, das ist eine abstrakte Zahl. Lassen Sie es mich konkreter sagen. Ich habe vor einigen Jahren mit einer Frau gesprochen, die seit dreißig Jahren direkt an einer Bundesstraße wohnte. Sie sagte mir: Ich höre den Verkehr gar nicht mehr, ich habe mich daran gewöhnt. Das ist ein Satz, den ich oft höre, und er ist leider ein Irrtum. Das Bewusstsein gewöhnt sich, der Kreislauf gewöhnt sich nicht. Das ist vielleicht das Tückische am Lärm. Er schadet gerade dort, wo man ihn nicht mehr bemerkt. Damit komme ich zum zweiten Punkt, und hier wird es für uns Fachleute ein wenig unbequem. Wir messen Lärm in Dezibel, und alle Grenzwerte in unseren Vorschriften sind in Dezibel angegeben. Das ist sinnvoll, man braucht eine Zahl. Aber die gemessene Lautstärke erklärt erstaunlich schlecht, was Menschen tatsächlich stört. Probieren Sie es selbst aus. Ein Springbrunnen auf einem Platz kann genauso laut sein wie eine stark befahrene Straße. Den Brunnen empfinden die meisten als angenehm, die Straße nicht. Oder denken Sie an Kinderlärm. Ein Kindergarten im Nachbarhaus erreicht am Vormittag durchaus Werte, die bei einer Fabrik schon zu Beschwerden führen würden. Manche Nachbarn stört das sehr, andere sagen, sie hören die Kinder gern. Die Messgeräte zeigen in beiden Fällen dasselbe. Und ich darf Ihnen verraten, dass Beschwerden über Kindergärten zu den hartnäckigsten gehören, mit denen Städte zu tun haben. Wir haben in einem Projekt einmal Anwohner gebeten, eine Woche lang aufzuschreiben, wann sie sich durch Geräusche gestört fühlten, und gleichzeitig gemessen. Die Übereinstimmung zwischen den lautesten Momenten und den Momenten, die als störend notiert wurden, war, vorsichtig gesagt, bescheiden. Gleich laute Geräusche werden also ganz verschieden empfunden. Bleibt die Frage, warum. Die Forschung hat darauf inzwischen recht gute Antworten. Zwei Faktoren spielen eine besonders große Rolle, und ich nenne sie Kontrolle und Bedeutung. Zuerst zur Kontrolle. Ein Geräusch, das ich selbst verursache oder beenden kann, stört mich viel weniger als eines, dem ich ausgeliefert bin. Ihr eigener Rasenmäher kommt Ihnen leiser vor als der Ihres Nachbarn, auch wenn er in Wahrheit lauter ist. Das ist keine Einbildung im abwertenden Sinn, das ist Psychologie. Wir kennen das alle von Musik. Die eigene Lieblingsmusik ist nie zu laut, die des Nachbarn fast immer. Und dann die Bedeutung. Wir hören nie bloß Schall, wir hören immer auch, was er bedeutet. Wenn ich ein Flugzeug höre und weiß, dass der Flughafen gerade gegen den Willen der Anwohner erweitert wurde, dann höre ich in jedem Flugzeug auch diese Niederlage. Untersuchungen an Flughäfen haben gezeigt, dass die Belästigung nach einer Erweiterung stärker steigt, als es die zusätzlichen Flüge allein erklären würden. Für die Planung heißt das übrigens etwas sehr Praktisches. Wer die Menschen früh beteiligt, ihnen erklärt, was passiert, und ihnen echte Mitsprache gibt, der verringert die Belästigung, ohne dass dafür ein einziges Dezibel weniger gemessen werden muss. Jetzt könnten Sie sagen: Gut, dann ist das Ziel eben möglichst viel Stille. Und hier möchte ich Ihnen widersprechen, das ist mein dritter Punkt. Absolute Stille ist weder möglich noch wünschenswert. Ich habe in meinem Studium einmal eine halbe Stunde in einem sogenannten schalltoten Raum verbracht. Das ist ein Raum, dessen Wände, Decke und Boden so verkleidet sind, dass kein Schall zurückgeworfen wird. Sie werden vielleicht denken: herrlich, endlich Ruhe. Es war das Gegenteil. Nach ein paar Minuten hörte ich meinen eigenen Herzschlag, dann das Rauschen meines Blutes, dann ein leises Pfeifen, von dem ich bis heute nicht weiß, woher es kam. Ich hatte das Gefühl, das Gleichgewicht zu verlieren, und war, ehrlich gesagt, sehr froh, als die schwere Tür wieder aufging. Die meisten Menschen halten es in so einem Raum nicht lange aus. In einem solchen Labor in Amerika soll der Rekord bei unter einer Stunde liegen, wobei ich nicht weiß, wer so etwas eigentlich misst. Unser Gehör ist dafür gemacht, die Umgebung zu überwachen, und wenn die Umgebung nichts mehr meldet, wird das Gehirn unruhig. Wir brauchen also nicht die Abwesenheit von Geräuschen. Was wir suchen, wenn wir von Stille sprechen, ist etwas anderes. Wenn Menschen in unseren Befragungen beschreiben, wo sie Ruhe finden, dann nennen sie fast nie Orte, an denen nichts zu hören ist. Sie nennen einen Park, in dem Vögel singen, ein Ufer, an dem Wasser plätschert, einen Friedhof mit alten Bäumen, durch die der Wind geht. An all diesen Orten ist es gar nicht so leise. Ein Bach kann erstaunlich laut sein. Wenn Sie mit einem Messgerät an einen Wasserfall gehen, kommen Sie auf Werte wie an einer Bundesstraße. Aber die Geräusche sind angenehm, sie sind natürlich, und vor allem verlangen sie nichts von uns. Niemand will etwas von mir, wenn ein Bach rauscht. Ruhe heißt also nicht, dass es still ist, sondern dass keine Geräusche da sind, die unsere Aufmerksamkeit erzwingen. Das Ziel der Planung ist deshalb nicht ein Ort ohne Geräusche, sondern ein Ort mit den richtigen Geräuschen. Ein Kollege aus den Niederlanden hat an einer viel befahrenen Straße eine Wand gebaut, die abschirmt und an der zugleich Wasser herunterläuft. Die Messwerte hinter der Wand haben sich kaum verändert. Die Zufriedenheit der Anwohner aber sehr. Das Rauschen des Wassers überdeckt das Rauschen des Verkehrs, und es ist eben ein freundlicheres Rauschen. Kommen wir zu Ihrer Stadt und zu der Frage, was Planung konkret tun kann. Ich will mich auf zwei Maßnahmen beschränken, die wir in vielen Städten geprüft haben. Die erste ist unspektakulär und wird trotzdem immer wieder heftig umkämpft, nämlich Tempo dreißig in der Nacht auf Hauptstraßen, an denen viele Menschen wohnen. Wenn ein Auto statt fünfzig nur dreißig fährt, sinkt der Lärm um etwa zwei bis drei Dezibel. Das klingt nach wenig, ich weiß. Aber drei Dezibel weniger entsprechen ungefähr dem, was man erreichen würde, wenn man den Verkehr halbiert. Und nachts kommt noch etwas hinzu. Es sind vor allem die einzelnen lauten Ereignisse, die uns wecken, also das beschleunigende Motorrad oder der Lieferwagen, der über eine Kante rumpelt. Bei geringerer Geschwindigkeit werden diese Spitzen deutlich seltener. Und genau diese Spitzen spürt man am nächsten Morgen. Ich weiß, dass es in Ihrer Stadt dazu gerade eine Debatte gibt. Ich will mich da nicht einmischen, ich bin ja nicht gewählt. Aber ich kann Ihnen sagen, dass die Fahrzeit auf einer typischen Strecke von zwei Kilometern nachts um weniger als eine Minute steigt. Das sollte man gegen eine Nacht ohne Aufwachen abwägen. Die zweite Maßnahme betrifft die Art, wie wir bauen. Man kann eine laute Straße nicht immer leiser machen. Man kann aber dafür sorgen, dass jede Wohnung eine ruhige Seite hat. Das ist ein Gedanke, der in Skandinavien schon lange zur Planung gehört und bei uns erst langsam ankommt. In Stockholm zum Beispiel ist es seit Jahren üblich, Baugenehmigungen an eine solche ruhige Seite zu knüpfen. Wenn Häuser geschlossen an der Straße stehen, also als durchgehende Zeile, dann schirmen sie den Lärm ab, und dahinter entsteht ein ruhiger Hof. Wenn man die Wohnungen dann so schneidet, dass die Schlafzimmer zum Hof liegen und die Küche oder das Treppenhaus zur Straße, dann ist für den Schlaf schon sehr viel gewonnen. Untersuchungen aus Schweden zeigen, dass Menschen mit einer solchen ruhigen Seite deutlich weniger über Lärm klagen, selbst wenn die Straßenseite sehr laut ist. Ich habe in Ihrer Stadt gestern einen Spaziergang gemacht und mehrere Neubauten gesehen, bei denen die Schlafzimmer zur Hauptstraße zeigen und die Balkone zum stillen Hof. Ich verstehe, warum man das macht, die Balkone sollen ja schön liegen. Aber die Nacht dauert nun einmal länger als der Feierabend auf dem Balkon. Mein letzter Punkt ist mir besonders wichtig. Wir reden beim Lärm fast immer nur darüber, wie wir die lauten Orte leiser machen. Mindestens genauso wichtig ist es, die ruhigen Orte zu schützen und sie für alle zugänglich zu machen. Das klingt selbstverständlich, wird aber selten getan. Ruhige Orte verschwinden nämlich leise, wenn Sie mir das Wortspiel erlauben. Ein Park bekommt eine neue Straße am Rand, ein stilles Ufer wird zur Partymeile, ein Friedhof wird von einer Umgehungsstraße angeschnitten. Jede einzelne Entscheidung hat gute Gründe. Und keine einzelne macht den Ort kaputt. Es ist die Summe. Aber am Ende hat die Stadt keinen Ort mehr, an dem man eine halbe Stunde lang kein Motorengeräusch hört. Die Vorschriften erlauben es inzwischen, solche Orte in den Lärmaktionsplänen als ruhige Gebiete festzulegen. Einige Städte haben deshalb begonnen, ihre ruhigen Inseln systematisch zu erfassen und in Karten zu verzeichnen, oft gemeinsam mit den Bewohnern, die ihre Lieblingsorte melden. Das hat einen doppelten Nutzen. Die Orte sind dann bei jeder Planung sichtbar und schwerer zu opfern. Und viele Menschen erfahren überhaupt erst, dass es in ihrer Nähe einen solchen Ort gibt. Und damit komme ich zu einer letzten Beobachtung, über die man in Bürgerforen nicht so gern spricht. Lärm ist ungleich verteilt. In fast allen Städten, deren Daten ich kenne, wohnen Menschen mit geringem Einkommen deutlich häufiger an den lauten Straßen. Das ist kein Zufall. Wohnungen an lauten Straßen sind billiger, und wer es sich leisten kann, zieht weg. Zurück bleiben die, die keine Wahl haben. Dazu kommt, dass gerade diese Menschen seltener einen Garten haben, seltener ein Wochenendhaus, seltener Zeit und Geld, um am Wochenende aufs Land zu fahren. Die ruhigen Orte in der Stadt sind für sie also noch wichtiger als für andere, und sie liegen oft weiter weg. Wenn Ihre Stadt ihren Lärmaktionsplan aufstellt, dann bitte ich Sie, darauf zu achten. Fragen Sie dabei, wo es am lautesten ist, und fragen Sie auch, wer dort wohnt und wie weit es von dort bis zum nächsten ruhigen Ort ist. Ich danke Ihnen für Ihre Aufmerksamkeit. Und jetzt dürfen Sie auch gern wieder mit dem Bonbonpapier rascheln, ich freue mich auf Ihre Fragen."
     },
     "situation": "Oberthema „Stille und Lärm\". Du hörst einen Vortrag von etwa fünfzehn Minuten, nur einmal. Mach beim Hören Notizen. Schreib danach eine Zusammenfassung in eigenen Worten mit mindestens fünf zentralen Gliederungspunkten.",
     "punkteText": "Darauf kommt es an",
     "punkte": [
      {
       "nr": 1,
       "was": "Mindestens fünf zentrale Gliederungspunkte",
       "hinweis": "Die Hauptgedanken in der Reihenfolge des Hörtextes."
      },
      {
       "nr": 2,
       "was": "Zu jedem Punkt die wichtigsten Details",
       "hinweis": "Beispiele, Gründe, Folgen, die den Punkt stützen."
      },
      {
       "nr": 3,
       "was": "Eigene Worte, sachlich, ohne eigene Wertung",
       "hinweis": "Indirekte Rede oder „laut der Referentin …\"."
      }
     ],
     "hilfen": [
      "Zunächst geht es um …",
      "Anschließend wird erläutert, dass …",
      "Ein weiterer zentraler Punkt ist …",
      "Als Beispiel wird … genannt.",
      "Abschließend wird betont, dass …"
     ],
     "muster": "Auf einem Bürgerforum, das der Vorbereitung eines städtischen Lärmaktionsplans dient, spricht eine Akustikerin über die Wirkung von Lärm und darüber, wie Städte ruhiger geplant werden können.\nZunächst bezeichnet sie Lärm als ein weithin unterschätztes Gesundheitsrisiko. Da das Gehör auch im Schlaf aktiv bleibe, reagiere der Körper nachts auf Geräusche mit erhöhtem Puls und Stresshormonen. Wer dauerhaft Verkehrslärm ausgesetzt sei, habe nach großen Studien ein deutlich höheres Risiko für Bluthochdruck und Herzkrankheiten, auch wenn er glaube, sich an den Lärm gewöhnt zu haben. Das Bewusstsein gewöhne sich an den Lärm, der Kreislauf dagegen nicht.\nIm zweiten Teil erklärt sie, dass die gemessene Lautstärke wenig darüber aussage, was Menschen als störend empfinden. Gleich laute Geräusche würden sehr unterschiedlich bewertet, wie der Vergleich eines Brunnens mit einer Straße zeige. Ausschlaggebend seien vielmehr die Kontrolle über ein Geräusch und seine Bedeutung für die Betroffenen. Wer Anwohner früh beteilige und ihnen Mitsprache einräume, könne die Belästigung daher verringern, ohne die gemessene Lautstärke zu senken.\nDrittens hält die Referentin fest, dass vollkommene Stille weder erreichbar noch erstrebenswert sei. In einem schalltoten Raum hielten es die meisten Menschen nur kurz aus. Ruhe bedeute vielmehr, dass keine Geräusche die Aufmerksamkeit erzwängen. Ziel müssten deshalb ruhige Orte mit angenehmen, etwa natürlichen Geräuschen sein.\nAls konkrete Maßnahmen der Stadtplanung empfiehlt sie zum einen nächtliches Tempo dreißig auf Hauptstraßen, das den Lärm und vor allem laute Einzelereignisse verringere. Die längere Fahrzeit sei dabei gering. Zum anderen sollten Gebäude so angeordnet und Wohnungen so geschnitten werden, dass jede Wohnung eine ruhige Seite habe, zu der die Schlafzimmer liegen.\nZuletzt fordert sie, ruhige Orte zu schützen und allen zugänglich zu machen. Sinnvoll sei es, solche ruhigen Inseln gemeinsam mit den Bewohnern zu erfassen und in Karten einzutragen. So würden sie bei künftigen Planungen sichtbar und seien schwerer zu opfern. Dabei müsse man berücksichtigen, dass Menschen mit geringem Einkommen häufiger an lauten Straßen wohnten und daher besonders auf ruhige Orte angewiesen seien.",
     "rubrik": [
      {
       "t": "Hauptpunkt 1: Lärm ist ein stark unterschätztes Gesundheitsrisiko",
       "h": "Details: Nachts reagiert der Körper auf Lärm, auch im Schlaf · Dauerhafter Verkehrslärm erhöht das Risiko für Herzkrankheiten",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "Punkt und beide Details"
        },
        {
         "w": 3,
         "t": "B",
         "d": "Punkt und ein Detail"
        },
        {
         "w": 1,
         "t": "C",
         "d": "nur der Punkt"
        },
        {
         "w": 0,
         "t": "D",
         "d": "fehlt"
        }
       ]
      },
      {
       "t": "Hauptpunkt 2: Die gemessene Lautstärke erklärt nicht, was Menschen stört",
       "h": "Details: Gleich laute Geräusche werden ganz verschieden empfunden · Kontrolle und Bedeutung bestimmen, wie sehr Lärm stört",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "Punkt und beide Details"
        },
        {
         "w": 3,
         "t": "B",
         "d": "Punkt und ein Detail"
        },
        {
         "w": 1,
         "t": "C",
         "d": "nur der Punkt"
        },
        {
         "w": 0,
         "t": "D",
         "d": "fehlt"
        }
       ]
      },
      {
       "t": "Hauptpunkt 3: Absolute Stille ist weder möglich noch wünschenswert",
       "h": "Details: Ein schalltoter Raum wird schnell unerträglich · Ziel sind ruhige Orte mit angenehmen Geräuschen",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "Punkt und beide Details"
        },
        {
         "w": 3,
         "t": "B",
         "d": "Punkt und ein Detail"
        },
        {
         "w": 1,
         "t": "C",
         "d": "nur der Punkt"
        },
        {
         "w": 0,
         "t": "D",
         "d": "fehlt"
        }
       ]
      },
      {
       "t": "Hauptpunkt 4: Konkrete Maßnahmen der Stadtplanung gegen Lärm",
       "h": "Details: Nachts Tempo dreißig senkt den Lärm und laute Spitzen · Gebäude so planen, dass jede Wohnung eine ruhige Seite hat",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "Punkt und beide Details"
        },
        {
         "w": 3,
         "t": "B",
         "d": "Punkt und ein Detail"
        },
        {
         "w": 1,
         "t": "C",
         "d": "nur der Punkt"
        },
        {
         "w": 0,
         "t": "D",
         "d": "fehlt"
        }
       ]
      },
      {
       "t": "Hauptpunkt 5: Ruhige Orte schützen und für alle zugänglich machen",
       "h": "Details: Ruhige Inseln erfassen und in Karten verzeichnen · Menschen mit wenig Geld wohnen häufiger an lauten Straßen",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "Punkt und beide Details"
        },
        {
         "w": 3,
         "t": "B",
         "d": "Punkt und ein Detail"
        },
        {
         "w": 1,
         "t": "C",
         "d": "nur der Punkt"
        },
        {
         "w": 0,
         "t": "D",
         "d": "fehlt"
        }
       ]
      },
      {
       "t": "Sprache",
       "h": "Genau, abwechslungsreich, gut verknüpft, kaum Fehler?",
       "stufen": [
        {
         "w": 15,
         "t": "A",
         "d": "durchgehend C2"
        },
        {
         "w": 10,
         "t": "B",
         "d": "weitgehend C2"
        },
        {
         "w": 5,
         "t": "C",
         "d": "oft eingeschränkt"
        },
        {
         "w": 0,
         "t": "D",
         "d": "nicht angemessen"
        }
       ]
      }
     ],
     "max": 40,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 330,
     "platzhalter": "Schreib hier deine Zusammenfassung …",
     "rubrikTitel": "Bewerte deine Zusammenfassung",
     "rubrikHinweis": "Inhalt wie bei telc: je Hauptpunkt 1 Punkt, je Detail 2 Punkte, zusammen 25. Die Sprache bewertet telc als Ganzes mit bis zu 15 Punkten; die Stufen hier sind eine Übungsschätzung. telc nennt keine Wortzahl."
    },
    {
     "id": "tc2a5",
     "oberthema": "Stille und Lärm",
     "sorte": "aufsatz",
     "an": "",
     "situation": "Oberthema „Stille und Lärm“. Schreiben Sie in neunzig Minuten einen Aufsatz zu einem der drei Aspekte. Beziehen Sie sich auf mindestens drei der Lese- und Hörtexte; kennzeichnen Sie Zitate und Übernahmen.",
     "punkte": [
      {
       "nr": 1,
       "was": "Ist Ruhe ein Luxusgut geworden?",
       "hinweis": "Erörtern Sie, wie Lärm und Ruhe verteilt sind und was daraus für Städte folgt."
      },
      {
       "nr": 2,
       "was": "Was meinen wir eigentlich, wenn wir Stille suchen?",
       "hinweis": "Zeigen Sie, warum Ruhe nicht dasselbe ist wie die Abwesenheit von Geräuschen."
      },
      {
       "nr": 3,
       "was": "Wie viel Lärm dürfen Nachbarn einander zumuten?",
       "hinweis": "Diskutieren Sie, warum gleich laute Geräusche so verschieden stören und wie man Konflikte lösen kann."
      }
     ],
     "eingang": {
      "von": "Deine Quellen",
      "betreff": "Oberthema: Stille und Lärm",
      "text": "Lesen Teil 1: „Herbst mit Nebengeräusch“, Feuilleton von Clara Imhof in der Rundschau Nord. In einer Straße besitzen sieben von elf Haushalten einen Laubbläser. Eine Nachbarin schlägt vor, nur noch gemeinsam zwischen zehn und zwölf zu blasen; seitdem ist es zwei Stunden lang unerträglich laut und den Rest des Tages still.\nLesen Teil 2: „Der Mann, der die Viertelstunde sucht“, Porträt von Felix Arnsberger in der Wochenendbeilage Der Sonntagsbote. Der frühere Tonmeister Wendelin Aust sucht Orte, an denen eine Viertelstunde lang kein menschengemachtes Geräusch zu hören ist, und hat sie in sechs Jahren neunmal gefunden. Lärm sei ein sozialer Begriff, er mache krank, und Ruhe sei ein Luxusgut geworden.\nLesen Teil 3: „Und jetzt dürfen Sie laut sein“, Abschiedsrede der Bibliothekarin Hannelore Brück aus der Stadtbücherei Lindenau, gekürzt im Gemeindeblatt. Die alte, bewachte Stille habe viele ausgeschlossen. Der neue freiwillige Stillraum sei täglich voll, gerade mit Menschen, die sonst keinen ruhigen Ort haben, und dürfe nicht als ungenutzt vermietet werden.\nHörtext: „Leise Städte planen. Warum Lärmschutz mehr ist als Dezibel“, Vortrag einer Akustikerin vor Bürgern einer Stadt, die einen Lärmaktionsplan aufstellt. Dauerlärm erhöhe das Risiko für Herzkrankheiten, auch wenn man ihn nicht mehr bemerke. Wie sehr ein Geräusch störe, hänge von Kontrolle und Bedeutung ab. Sie empfiehlt Tempo dreißig in der Nacht, Wohnungen mit ruhiger Seite und den Schutz ruhiger Orte und betont, dass Lärm ungleich verteilt sei."
     },
     "muster": "Lärm galt lange als Ärgernis, über das man sich beim Nachbarn beschwert, nicht als soziale Frage. Diese Sicht ist bequem, aber sie greift zu kurz. In den Texten, die ich für diesen Aufsatz herangezogen habe, taucht immer wieder derselbe Gedanke auf, wenn auch in sehr verschiedenen Tonlagen: Ruhe ist ungleich verteilt, und wer sie haben will, muss zunehmend dafür bezahlen. Ich möchte prüfen, ob es berechtigt ist, Ruhe als Luxusgut zu bezeichnen. Meine Quellen sind das Porträt des früheren Tonmeisters Wendelin Aust von Felix Arnsberger, der Vortrag einer Akustikerin über Lärmschutz in der Stadtplanung und die Abschiedsrede der Bibliothekarin Hannelore Brück.\nDass es überhaupt um mehr geht als um Bequemlichkeit, liegt an den gesundheitlichen Folgen. Die Akustikerin hält Lärm für eines der am stärksten unterschätzten Gesundheitsrisiken. Auch nachts reagiere der Körper auf jeden vorbeifahrenden Lastwagen mit steigendem Puls und Stresshormonen, selbst wenn man nicht aufwache. Wer über Jahre dauerhaftem Verkehrslärm ausgesetzt sei, habe ein deutlich erhöhtes Risiko für Bluthochdruck und Herzkrankheiten. Besonders aufschlussreich finde ich ihre Antwort auf einen Satz, den sie oft höre, nämlich dass man sich an den Verkehr längst gewöhnt habe: „Das Bewusstsein gewöhnt sich, der Kreislauf gewöhnt sich nicht.“ Lärm schadet demnach gerade dort, wo man ihn nicht mehr bemerkt. Aust bestätigt diese Befunde, und an dieser Stelle wird der sonst so ironische Mann ernst.\nWenn Lärm krank macht, wird seine Verteilung zu einer Frage der Gerechtigkeit. Hier stimmen die Quellen auffallend überein. Aust, der nach dreißig Berufsjahren im Funkhaus nach einer Viertelstunde ohne menschengemachte Geräusche sucht, bringt es auf den Punkt: „Ruhe ist ein Luxusgut geworden“, sagt er. „Wer Geld hat, wohnt im Grünen und schläft nach hinten raus.“ Die Akustikerin stützt diese Beobachtung mit Daten. In fast allen Städten, die sie kenne, wohnten Menschen mit geringem Einkommen deutlich häufiger an lauten Straßen, weil die Wohnungen dort billiger seien und wegziehe, wer es sich leisten könne. „Zurück bleiben die, die keine Wahl haben.“ Hinzu komme, dass gerade diese Menschen seltener einen Garten besäßen oder die Mittel hätten, am Wochenende aufs Land zu fahren. Die Ungleichheit verdoppelt sich also: Wer zu Hause mehr Lärm ertragen muss, hat zugleich weniger Möglichkeiten, ihm zu entkommen.\nUmso wichtiger sind Orte, an denen Ruhe nichts kostet. Hannelore Brück beschreibt einen solchen Ort. Nach dem Umbau der Stadtbücherei Lindenau, der aus einem stillen Haus einen lebendigen Treffpunkt machte, wurde der Lesesaal im zweiten Stock wieder als Stillraum ausgewiesen. Erwartet habe man zehn oder zwölf Leser, heute kämen oft vierzig: Studentinnen, die zu Hause zu viert in einer Küche sitzen, Männer aus einer Unterkunft, Schüler vor Prüfungen. Brück nennt die Bibliothek einen der letzten Orte der Stadt, „an denen man nichts kaufen muss, um bleiben zu dürfen“, und fügt hinzu: „Für Stille, meine Damen und Herren, muss man sonst inzwischen bezahlen.“ Ausgerechnet dieser Raum soll nun als Veranstaltungsraum vermietet werden, weil er angeblich ungenutzt sei. Die Akustikerin beschreibt denselben Vorgang auf der Ebene der Stadtplanung. Ruhige Orte verschwänden leise, durch viele einzelne Entscheidungen, von denen keine für sich den Ort zerstöre. Austs bissige Bemerkung über seine Heimatstadt, die als einziges ruhiges Gebiet den Waldfriedhof gemeldet habe, passt dazu nur zu gut.\nMan kann einwenden, der Begriff Luxusgut übertreibe. Ein Spaziergang im Park kostet nichts, und die Akustikerin betont selbst, dass Ruhe nicht die Abwesenheit aller Geräusche bedeute, sondern die Abwesenheit von Geräuschen, die unsere Aufmerksamkeit erzwingen. Ein Bach oder ein Park voller Vogelstimmen könne laut und trotzdem erholsam sein. Dieser Einwand trifft jedoch nur zur Hälfte. Wer nachts an einer Bundesstraße schläft, hat vom Park am Sonntag wenig, und für die lauten Viertel liegt der nächste ruhige Ort oft besonders weit entfernt. Ich halte die Bezeichnung deshalb für zugespitzt, aber im Kern für berechtigt. Daraus folgt für mich vor allem eine politische Aufgabe. Städte sollten bei jedem Lärmaktionsplan fragen, wo es am lautesten ist, und ebenso, wer dort wohnt und wie weit der Weg zum nächsten ruhigen Ort ist. Und ein Lesesaal, in dem vierzig Menschen still sitzen, ist, wie Brück zu Recht sagt, keineswegs ungenutzt. Wer ihn vermietet, verkauft ein Stück Ruhe an jene, die sie sich ohnehin leisten können.",
     "woerter": 650,
     "hilfen": [
      "Diese Sicht ist bequem, aber sie greift zu kurz.",
      "Besonders aufschlussreich finde ich …",
      "Wenn …, wird … zu einer Frage der Gerechtigkeit.",
      "Hier stimmen die Quellen auffallend überein.",
      "Man kann einwenden, … Dieser Einwand trifft jedoch nur zur Hälfte.",
      "Ich halte die Bezeichnung deshalb für zugespitzt, aber im Kern für berechtigt."
     ],
     "erklaerung": "Der Aufsatz baut Schritt für Schritt auf: erst die Gesundheitsfolgen, dann die ungleiche Verteilung, dann die bedrohten ruhigen Orte. Die Absatzübergänge nehmen jeweils das Ergebnis des vorigen Absatzes auf, und der Einwand am Ende macht das Urteil glaubwürdiger.",
     "punkteText": "Wähle einen dieser drei Aspekte",
     "rubrik": [
      {
       "t": "Aufgabengerechtheit",
       "h": "Ein Aspekt klar bearbeitet? Mindestens drei Quellen eingearbeitet und als fremde Meinung gekennzeichnet?",
       "stufen": [
        {
         "w": 10,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 7,
         "t": "B",
         "d": "weitgehend"
        },
        {
         "w": 3,
         "t": "C",
         "d": "teilweise"
        },
        {
         "w": 0,
         "t": "D",
         "d": "kaum"
        }
       ]
      },
      {
       "t": "Kohärenz und Kohäsion",
       "h": "Leserfreundlich gegliedert, Absätze und Gedanken gut verknüpft?",
       "stufen": [
        {
         "w": 10,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 7,
         "t": "B",
         "d": "weitgehend"
        },
        {
         "w": 3,
         "t": "C",
         "d": "teilweise"
        },
        {
         "w": 0,
         "t": "D",
         "d": "kaum"
        }
       ]
      },
      {
       "t": "Korrektheit",
       "h": "Grammatik und Rechtschreibung durchgehend auf C2?",
       "stufen": [
        {
         "w": 10,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 7,
         "t": "B",
         "d": "weitgehend"
        },
        {
         "w": 3,
         "t": "C",
         "d": "teilweise"
        },
        {
         "w": 0,
         "t": "D",
         "d": "kaum"
        }
       ]
      },
      {
       "t": "Repertoire",
       "h": "Breiter, präziser Wortschatz, vielfältige Strukturen, kaum Wiederholungen?",
       "stufen": [
        {
         "w": 10,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 7,
         "t": "B",
         "d": "weitgehend"
        },
        {
         "w": 3,
         "t": "C",
         "d": "teilweise"
        },
        {
         "w": 0,
         "t": "D",
         "d": "kaum"
        }
       ]
      }
     ],
     "max": 40,
     "keineKI": true,
     "ohneWortzahl": true,
     "platzhalter": "Schreib hier deinen Aufsatz …",
     "rubrikTitel": "Bewerte dich nach den vier telc-Kriterien",
     "rubrikHinweis": "Vier Kriterien wie bei telc C2, je A = 10, B = 7, C = 3, D = 0 Punkte. Für A bei der Aufgabengerechtheit brauchst du mindestens drei Quellen. telc nennt keine Wortzahl."
    }
   ]
  }
 ]
};
