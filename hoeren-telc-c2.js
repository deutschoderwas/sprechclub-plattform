/* ============================================================
   deutschoderwas club — HÖREN telc Deutsch C2

   Aufbau nach dem offiziellen telc-Format (Tipps zur Prüfungs-
   vorbereitung und Handbuch Deutsch C2, geprüft 03.11.2026). Jede
   Runde hat wie die Prüfung ein Oberthema. Alle Texte eigene.
   Erzeugt aus scratchpad/telcc2 mit bau.js.
   ============================================================ */

window.HOEREN_TELC_C2 = {
 "niveau": "telcC2",
 "pruefung": "telc Deutsch C2",
 "minuten": 20,
 "punkte": 10,
 "intro": "Bei telc C2 hörst du einen Vortrag, ein Interview oder ein Podiumsgespräch von etwa fünfzehn Minuten, nur einmal, und machst Notizen. Danach schreibst du eine Zusammenfassung. Hier übst du das Mitschreiben Abschnitt für Abschnitt; die Zusammenfassung schreibst du im Teil Schreiben, dort läuft der ganze Text am Stück.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Struktur hören",
   "zeichen": "👂",
   "was": "Gliederungssignale, Hauptpunkt oder Detail."
  },
  {
   "nr": 2,
   "titel": "Notieren und zusammenfassen",
   "zeichen": "📝",
   "was": "Kurz notieren, danach in eigenen Worten zusammenfassen."
  },
  {
   "nr": 3,
   "titel": "Mitschreiben",
   "zeichen": "🎯",
   "was": "Drei Hörtexte, Abschnitt für Abschnitt."
  },
  {
   "nr": 4,
   "titel": "Am Stück",
   "zeichen": "⏱️",
   "was": "Ein ganzer Hörtext mit Notizen, nur einmal."
  }
 ],
 "bloecke": [
  {
   "id": "tc2h1",
   "stufe": 1,
   "titel": "Gliederungssignale im Vortrag",
   "kurz": "Wer die Wegweiser hört, weiß beim einmaligen Hören, wo ein neuer Punkt beginnt und wo nur ein Beispiel oder ein Umweg kommt.",
   "ziel": "Nach diesem Block erkennst du an typischen Wendungen, ob ein Sprecher einen neuen Hauptpunkt ankündigt, zusammenfasst, abschweift, einen Einwand aufgreift oder zurückverweist.",
   "zeichen": "🧭",
   "farbe": "turq",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Arbeitszeit",
     "wer": "Frau",
     "text": "So viel zur Geschichte des Begriffs. Ich möchte jetzt zu der Frage kommen, die Sie wahrscheinlich am meisten interessiert, nämlich was das alles für Ihren Arbeitsalltag bedeutet.",
     "frage": "Was macht die Sprecherin an dieser Stelle?",
     "opt": [
      "Sie schließt einen Teil ab und kündigt einen neuen an.",
      "Sie fasst den gesamten Vortrag zusammen.",
      "Sie beantwortet eine Frage aus dem Publikum."
     ],
     "loesung": 0,
     "stelle": "Ich möchte jetzt zu der Frage kommen",
     "erklaerung": "„So viel zu …“ schließt ab, „Ich möchte jetzt zu … kommen“ öffnet den nächsten Gliederungspunkt."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Zeugenaussagen",
     "wer": "Mann",
     "text": "Ich erlaube mir hier einen kleinen Umweg. Mein Großvater hat sein Leben lang Tagebuch geführt, und als wir die Hefte nach seinem Tod gelesen haben, stand dort über manche Familienfeste etwas ganz anderes, als wir alle in Erinnerung hatten. Aber zurück zu den Zeugenaussagen.",
     "frage": "Welche Funktion hat die Geschichte über den Großvater?",
     "opt": [
      "Sie ist ein neuer Hauptpunkt des Vortrags.",
      "Sie ist eine Abschweifung, die einen Gedanken veranschaulicht.",
      "Sie widerlegt das, was vorher gesagt wurde."
     ],
     "loesung": 1,
     "stelle": "Aber zurück zu den Zeugenaussagen",
     "erklaerung": "„Einen kleinen Umweg“ und „Aber zurück zu“ rahmen eine Abschweifung. Sie gehört nicht als Hauptpunkt auf den Zettel."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Vertrauen in Betrieben",
     "wer": "Frau",
     "text": "Sie werden jetzt vielleicht einwenden, dass das nur für große Konzerne gilt. Dieser Einwand ist berechtigt, und ich nehme ihn ernst. Trotzdem zeigen die Zahlen aus kleinen Handwerksbetrieben genau dasselbe Bild.",
     "frage": "Was macht die Sprecherin?",
     "opt": [
      "Sie gibt ihre These auf.",
      "Sie beginnt ein neues Thema.",
      "Sie greift einen möglichen Einwand auf und weist ihn zurück."
     ],
     "loesung": 2,
     "stelle": "Sie werden jetzt vielleicht einwenden",
     "erklaerung": "Erst wird der Einwand vorweggenommen, mit „Trotzdem“ hält sie an ihrer These fest."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Verkehrslärm",
     "wer": "Mann",
     "text": "Wenn ich das bisher Gesagte in einem Satz bündeln darf: Nicht die Lautstärke allein macht krank, sondern die fehlende Erholung. Und genau hier setzt der zweite Teil an.",
     "frage": "Was signalisiert der Sprecher?",
     "opt": [
      "Er fasst zusammen und leitet zum nächsten Teil über.",
      "Er beendet den Vortrag.",
      "Er nennt ein Beispiel für den ersten Teil."
     ],
     "loesung": 0,
     "stelle": "in einem Satz bündeln darf",
     "erklaerung": "Eine Zwischenbilanz liefert oft den Hauptpunkt fast wörtlich. „Der zweite Teil“ kündigt den nächsten an."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Langeweile in der Grundschule",
     "wer": "Frau",
     "text": "Ein Beispiel, damit das nicht zu abstrakt bleibt. In einer Grundschule in Bremen haben die Lehrerinnen eine Woche lang auf jede Form von Beschäftigungsblatt verzichtet, und die Kinder mussten selbst entscheiden, womit sie die freie Zeit füllen.",
     "frage": "Was folgt auf diese Ankündigung?",
     "opt": [
      "eine Zusammenfassung des bisher Gesagten",
      "die Veranschaulichung eines Gedankens",
      "ein Gegenargument"
     ],
     "loesung": 1,
     "stelle": "Ein Beispiel, damit das nicht zu abstrakt bleibt",
     "erklaerung": "Ein angekündigtes Beispiel stützt einen Punkt. Notiere höchstens ein Stichwort dazu."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Erinnerungskultur",
     "wer": "Mann",
     "text": "Damit sind wir beim eigentlichen Kern. Alles, was ich bisher erzählt habe, war gewissermaßen Vorgeschichte.",
     "frage": "Was bedeutet diese Äußerung für deine Notizen?",
     "opt": [
      "Das Folgende ist weniger wichtig als das Bisherige.",
      "Der Vortrag ist gleich zu Ende.",
      "Jetzt kommt der zentrale Gedanke, er gehört unbedingt auf den Zettel."
     ],
     "loesung": 2,
     "stelle": "Damit sind wir beim eigentlichen Kern",
     "erklaerung": "„Der eigentliche Kern“ markiert den wichtigsten Punkt. Das Bisherige wird als Vorgeschichte eingeordnet."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Kennzahlen in Unternehmen",
     "wer": "Frau",
     "text": "Erstens wird weniger gemessen, als man gemeinhin denkt. Zweitens, und das ist der wichtigere Punkt, wird das Gemessene oft falsch gedeutet.",
     "frage": "Welchen Punkt hält die Sprecherin für wichtiger?",
     "opt": [
      "den ersten Punkt",
      "den zweiten Punkt",
      "Sie gewichtet beide gleich."
     ],
     "loesung": 1,
     "stelle": "und das ist der wichtigere Punkt",
     "erklaerung": "Der Einschub hebt den zweiten Punkt ausdrücklich hervor."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Grenzregionen",
     "wer": "Mann",
     "text": "Ich komme zum Schluss. Und ich möchte mit einer Frage enden, auf die ich selbst keine fertige Antwort habe.",
     "frage": "Wo im Vortrag befinden wir uns?",
     "opt": [
      "am Ende",
      "in der Einleitung",
      "in der Mitte, vor einem Beispiel"
     ],
     "loesung": 0,
     "stelle": "Ich komme zum Schluss",
     "erklaerung": "Eine offene Schlussfrage ist kein neuer Hauptpunkt, sie rundet den Vortrag ab."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Vertrauen",
     "wer": "Frau",
     "text": "Lassen Sie mich kurz einen Schritt zurückgehen. Ich habe vorhin von Vertrauen als Vorleistung gesprochen. Diesen Gedanken brauchen wir jetzt noch einmal.",
     "frage": "Was macht die Sprecherin?",
     "opt": [
      "Sie korrigiert einen Fehler.",
      "Sie wechselt zu einem ganz neuen Thema.",
      "Sie verweist auf einen früheren Punkt, um darauf aufzubauen."
     ],
     "loesung": 2,
     "stelle": "Ich habe vorhin von Vertrauen als Vorleistung gesprochen",
     "erklaerung": "„Vorhin“ verweist zurück. Verbinde in deinen Notizen den neuen Punkt mit dem alten, zum Beispiel mit einem Pfeil."
    }
   ]
  },
  {
   "id": "tc2h2",
   "stufe": 1,
   "titel": "Hauptpunkt oder Detail?",
   "kurz": "Auf den Zettel gehört zuerst die Aussage, nicht das Beispiel. Details stützen sie, Hauptpunkte tragen den Text.",
   "ziel": "Nach diesem Block unterscheidest du beim Hören die allgemeine Aussage eines Abschnitts von Beispielen, Zahlen und Belegen und formulierst sie knapp.",
   "zeichen": "🎯",
   "farbe": "gold",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Vortrag über das Gedächtnis im Alter",
     "wer": "Mann",
     "text": "Lange Zeit dachte man, dass das Gedächtnis im Alter vor allem deshalb nachlässt, weil Nervenzellen absterben. Heute wissen wir, dass die Verbindungen zwischen den Zellen wichtiger sind. Bei Ratten, die in einem Käfig mit Spielzeug lebten, bildeten sich deutlich mehr solcher Verbindungen als bei Tieren in leeren Käfigen.",
     "frage": "Was gehört als Hauptpunkt auf den Notizzettel?",
     "opt": [
      "Ratten mit Spielzeug bilden mehr Verbindungen.",
      "Verbindungen zwischen Zellen sind wichtiger als ihre Zahl.",
      "Im Alter sterben keine Nervenzellen ab."
     ],
     "loesung": 1,
     "stelle": "Heute wissen wir, dass die Verbindungen zwischen den Zellen wichtiger sind",
     "erklaerung": "Die Ratten sind nur der Beleg. Die dritte Aussage behauptet mehr, als gesagt wurde."
    },
    {
     "art": "hoerwahl",
     "ort": "Interview über Erreichbarkeit",
     "wer": "Frau",
     "text": "Die Grenzen zwischen Arbeit und Freizeit verschwimmen, sobald das Diensthandy abends auf dem Küchentisch liegt. In einem Automobilwerk hat man deshalb die Server so eingestellt, dass nach Feierabend keine Nachrichten mehr zugestellt werden. Die Leute fühlten sich danach vor allem nicht mehr verpflichtet, ständig nachzuschauen.",
     "frage": "Was ist der Hauptpunkt dieses Abschnitts?",
     "opt": [
      "Ständige Erreichbarkeit lässt Arbeit und Freizeit verschwimmen.",
      "Ein Werk stellt nach Feierabend keine Nachrichten zu.",
      "Diensthandys sollten verboten werden."
     ],
     "loesung": 0,
     "stelle": "Die Grenzen zwischen Arbeit und Freizeit verschwimmen",
     "erklaerung": "Das Automobilwerk ist ein Beispiel. Ein Verbot fordert die Sprecherin nicht."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Arbeit im Büro",
     "wer": "Mann",
     "text": "Warum langweilen sich Menschen im Büro? Die übliche Antwort lautet: zu wenig zu tun. Doch in unseren Befragungen nannten die meisten etwas anderes, nämlich Aufgaben, deren Sinn sie nicht erkennen konnten. Ein Sachbearbeiter erzählte, er fülle seit Jahren ein Formular aus, von dem niemand wisse, wer es liest.",
     "frage": "Was gehört als Hauptpunkt auf den Notizzettel?",
     "opt": [
      "Menschen im Büro haben zu wenig zu tun.",
      "Ein Sachbearbeiter füllt ein ungelesenes Formular aus.",
      "Langeweile im Büro entsteht vor allem durch sinnlose Aufgaben."
     ],
     "loesung": 2,
     "stelle": "Aufgaben, deren Sinn sie nicht erkennen konnten",
     "erklaerung": "Die erste Aussage ist die übliche Antwort, die der Sprecher zurückweist. Das Formular ist ein Beispiel."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch über Musik",
     "wer": "Frau",
     "text": "Stille hat in der Musik eine eigene Aufgabe. Eine Pause ist kein Loch, sie gibt dem vorherigen Ton Raum. Mein Lehrer am Konservatorium ließ uns deshalb Stücke üben, in denen wir nur die Pausen zählen durften.",
     "frage": "Was ist der Hauptpunkt?",
     "opt": [
      "Pausen geben in der Musik dem Ton Raum.",
      "Der Lehrer ließ nur Pausen zählen.",
      "Musik besteht vor allem aus Stille."
     ],
     "loesung": 0,
     "stelle": "Eine Pause ist kein Loch",
     "erklaerung": "Die Erinnerung an den Lehrer ist eine persönliche Anekdote. Die dritte Aussage übertreibt."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Teamarbeit",
     "wer": "Mann",
     "text": "Viele Unternehmen setzen beim Vertrauen auf Teamevents, Kletterwald, gemeinsames Kochen. Ich halte davon wenig. Das Vertrauen im Team entsteht im Arbeitsalltag, wenn jemand einen Fehler zugibt und dafür nicht bestraft wird. Ein Kochkurs ändert daran gar nichts.",
     "frage": "Was gehört als Hauptpunkt auf den Notizzettel?",
     "opt": [
      "Kletterwald und Kochkurs als Teamevents",
      "Vertrauen entsteht im Alltag, wenn Fehler nicht bestraft werden.",
      "Teamevents schaden dem Vertrauen."
     ],
     "loesung": 1,
     "stelle": "Das Vertrauen im Team entsteht im Arbeitsalltag",
     "erklaerung": "Der Sprecher hält Teamevents für nutzlos, aber nicht für schädlich."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Archive",
     "wer": "Frau",
     "text": "Auch Archive vergessen. Papier zerfällt, wenn es säurehaltig ist, und das betrifft fast alle Bücher, die zwischen etwa achtzehnhundertfünfzig und neunzehnhundertneunzig gedruckt wurden. Bei uns im Landesarchiv werden jedes Jahr mehrere Tonnen davon entsäuert, das ist aber nur ein Bruchteil des Bestands.",
     "frage": "Was ist der Hauptpunkt?",
     "opt": [
      "Jährlich werden mehrere Tonnen Papier entsäuert.",
      "Bücher nach neunzehnhundertneunzig zerfallen.",
      "Säurehaltiges Papier bedroht einen großen Teil der Archivbestände."
     ],
     "loesung": 2,
     "stelle": "Papier zerfällt, wenn es säurehaltig ist",
     "erklaerung": "Die Tonnen sind ein Detail. Die zweite Aussage verdreht den genannten Zeitraum."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Lärm und Schlaf",
     "wer": "Mann",
     "text": "Wenn ich die Ergebnisse der drei Studien vergleiche, dann sind die Zahlen unterschiedlich, mal zwölf, mal achtzehn Prozent. Aber die Richtung ist überall dieselbe: Wer nachts bei offenem Fenster an einer Hauptstraße schläft, schläft schlechter, und zwar messbar.",
     "frage": "Was gehört als Hauptpunkt auf den Notizzettel?",
     "opt": [
      "Lärm an Hauptstraßen verschlechtert messbar den Schlaf.",
      "Die Studien kommen auf zwölf bis achtzehn Prozent.",
      "Die drei Studien widersprechen einander."
     ],
     "loesung": 0,
     "stelle": "Aber die Richtung ist überall dieselbe",
     "erklaerung": "Nach „Aber“ kommt die gemeinsame Aussage. Die Prozentzahlen sind Details."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Rechtsgeschichte",
     "wer": "Frau",
     "text": "Ein Grenzstein ist eigentlich unscheinbar, ein behauener Block mit zwei Buchstaben. Aber wer ihn versetzte, wurde früher hart bestraft, in manchen Gegenden sogar mit dem Tod. Grenzen waren also nie bloße Linien, sie waren eine Ordnung, deren Verletzung als schweres Unrecht galt.",
     "frage": "Was ist der Hauptpunkt?",
     "opt": [
      "Grenzsteine tragen zwei Buchstaben.",
      "Wer Grenzsteine versetzte, wurde manchmal hingerichtet.",
      "Grenzen galten als Ordnung, deren Verletzung schweres Unrecht war."
     ],
     "loesung": 2,
     "stelle": "Grenzen waren also nie bloße Linien",
     "erklaerung": "„Also“ leitet die Schlussfolgerung ein. Die Strafe ist der Beleg dafür."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Zeugenaussagen",
     "wer": "Mann",
     "text": "Ich habe vorhin drei Gründe genannt, warum Zeugen sich irren. Der wichtigste davon ist sicher der Stress. Unter starker Angst richtet sich die Aufmerksamkeit auf die Waffe, nicht auf das Gesicht. Man spricht vom Waffenfokus.",
     "frage": "Was gehört als Hauptpunkt auf den Notizzettel?",
     "opt": [
      "Es gibt genau drei Gründe.",
      "Stress ist der wichtigste Grund für Irrtümer von Zeugen.",
      "Waffenfokus bedeutet, dass Zeugen eine Waffe übersehen."
     ],
     "loesung": 1,
     "stelle": "Der wichtigste davon ist sicher der Stress",
     "erklaerung": "Der Waffenfokus ist das Detail zum Stress und bedeutet das Gegenteil von Übersehen."
    }
   ]
  },
  {
   "id": "tc2h3",
   "stufe": 2,
   "titel": "Notizen machen: Abkürzungen, Symbole, Weglassen",
   "kurz": "Gute Notizen sind kurz, aber eindeutig: Pfeile, Zeichen und Abkürzungen sparen Zeit, solange die Richtung stimmt.",
   "ziel": "Nach diesem Block wählst du beim Hören knappe Notizen mit Symbolen wie ↑ ↓ → ≠, behältst Zahlen und Gegensätze und lässt Anekdoten und Wiederholungen weg.",
   "zeichen": "📝",
   "farbe": "lila",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Nachbarschaftslärm",
     "wer": "Frau",
     "text": "Die Zahl der Beschwerden über Nachbarschaftslärm ist in den letzten zehn Jahren um ungefähr ein Drittel gestiegen, obwohl die Wohnungen heute besser gedämmt sind als früher.",
     "frage": "Welche Notiz hält das Wichtigste am besten fest?",
     "opt": [
      "Beschwerden Nachbarlärm ↑ ca. ⅓ in 10 J., trotz besserer Dämmung",
      "Die Zahl der Beschwerden über Nachbarschaftslärm ist gestiegen",
      "Dämmung ↓ → Beschwerden ↑"
     ],
     "loesung": 0,
     "stelle": "obwohl die Wohnungen heute besser gedämmt sind",
     "erklaerung": "Die erste Notiz ist knapp und enthält Zahl und Gegensatz. Die dritte dreht die Dämmung um."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag eines Gutachters",
     "wer": "Mann",
     "text": "Was ich Ihnen jetzt erzähle, ist eine kleine Anekdote am Rande. Als ich mein erstes Gutachten geschrieben habe, war ich so nervös, dass ich den Namen des Richters falsch geschrieben habe. Er hat es zum Glück mit Humor genommen.",
     "frage": "Was solltest du dir hier notieren?",
     "opt": [
      "Erstes Gutachten: Name des Richters falsch",
      "Nervosität beim ersten Gutachten → Fehler",
      "Nichts, es ist eine angekündigte Anekdote am Rande."
     ],
     "loesung": 2,
     "stelle": "eine kleine Anekdote am Rande",
     "erklaerung": "Was der Sprecher selbst als Anekdote ankündigt, kostet nur Zeit beim Mitschreiben."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Vertrauen",
     "wer": "Frau",
     "text": "Vertrauen beruht auf drei Säulen: Kompetenz, Wohlwollen und Integrität. Wobei die Integrität, also das Handeln nach erkennbaren Grundsätzen, in Krisen am stärksten auf die Probe gestellt wird.",
     "frage": "Welche Notiz ist am sinnvollsten?",
     "opt": [
      "Vertrauen: Kompetenz, Wohlwollen, Integrität; in Krisen v. a. Integrität geprüft",
      "Vertrauen = Kompetenz + Wohlwollen; Integrität ≠ wichtig",
      "Vertrauen beruht auf drei Säulen, Integrität bedeutet das Handeln nach erkennbaren Grundsätzen"
     ],
     "loesung": 0,
     "stelle": "in Krisen am stärksten auf die Probe gestellt",
     "erklaerung": "Die dritte Notiz schreibt fast wörtlich mit und vergisst die Krise. Die zweite ist falsch."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Langeweile",
     "wer": "Mann",
     "text": "Die Langeweile ist, anders als oft behauptet, nicht die Folge von zu wenig Reizen. Sie entsteht vielmehr, wenn die Reize keine Bedeutung für uns haben.",
     "frage": "Welche Notiz gibt die Aussage richtig und knapp wieder?",
     "opt": [
      "Langeweile ← zu wenig Reize",
      "Langeweile ← Reize ohne Bedeutung, nicht Reizmangel",
      "Langeweile ist nicht die Folge von zu wenig Reizen, wie oft behauptet wird"
     ],
     "loesung": 1,
     "stelle": "wenn die Reize keine Bedeutung für uns haben",
     "erklaerung": "Die erste Notiz hält die zurückgewiesene Meinung fest. Die dritte ist zu lang und lässt die eigentliche Ursache weg."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Lärmstudien",
     "wer": "Frau",
     "text": "Ich muss mich hier korrigieren. Ich habe vorhin gesagt, die Studie stamme aus Dänemark. Tatsächlich wurde sie in Norwegen durchgeführt, mit gut zweitausend Teilnehmern.",
     "frage": "Wie passt du deine Notiz an?",
     "opt": [
      "Studie: Dänemark, 2000 TN",
      "Studie aus Dänemark und Norwegen",
      "Korrektur: Studie aus Norwegen, ca. 2000 TN"
     ],
     "loesung": 2,
     "stelle": "Tatsächlich wurde sie in Norwegen durchgeführt",
     "erklaerung": "Bei einer Korrektur streichst du die alte Angabe. TN ist eine übliche Abkürzung für Teilnehmer."
    },
    {
     "art": "hoerwahl",
     "ort": "Interview über eine Grenzregion",
     "wer": "Mann",
     "text": "Die Grenzschließung hat dazu geführt, dass die Pflegeheime auf der deutschen Seite innerhalb von zwei Wochen fast ein Viertel ihres Personals verloren haben.",
     "frage": "Welche Notiz ist richtig und knapp?",
     "opt": [
      "Grenzschl. → Pflegeheime DE: fast ¼ Personal weg in 2 Wo.",
      "Pflegeheime → Grenzschließung",
      "Personal ↑ ¼ nach Grenzschließung"
     ],
     "loesung": 0,
     "stelle": "fast ein Viertel ihres Personals verloren",
     "erklaerung": "Der Pfeil zeigt die Folge. Die zweite Notiz dreht Ursache und Wirkung um, die dritte die Richtung."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über das Gedächtnis",
     "wer": "Frau",
     "text": "Ein Gedächtnis, das alles behält, ist kein Segen. Es gibt sehr wenige Menschen, die sich an jeden Tag ihres Lebens erinnern können, und viele von ihnen beschreiben das als Last, weil sie auch Kränkungen nicht vergessen können.",
     "frage": "Welche Notiz ist am sinnvollsten?",
     "opt": [
      "Totales Gedächtnis = Segen",
      "Wenige Menschen erinnern sich an jeden Tag ihres Lebens, viele beschreiben es als Last",
      "Alles behalten ≠ Segen: Betroffene erleben es als Last, Kränkungen bleiben"
     ],
     "loesung": 2,
     "stelle": "weil sie auch Kränkungen nicht vergessen können",
     "erklaerung": "Das Zeichen ≠ fasst die These zusammen. Die zweite Notiz ist zu lang und ohne Begründung."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Kreativität",
     "wer": "Mann",
     "text": "Und jetzt kommt das Überraschende. In der Gruppe ohne Smartphone waren die Ideen zahlreicher, und sie wurden von unabhängigen Gutachtern außerdem als origineller bewertet.",
     "frage": "Welche Notiz hält das Ergebnis vollständig fest?",
     "opt": [
      "Gruppe ohne Smartphone: Ideen zahlreicher",
      "ohne Handy: Ideen zahlreicher + origineller",
      "mit Handy → originellere Ideen"
     ],
     "loesung": 1,
     "stelle": "außerdem als origineller bewertet",
     "erklaerung": "Das Pluszeichen hält beide Ergebnisse fest. Die erste Notiz ist unvollständig, die dritte falsch."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Konzentration",
     "wer": "Frau",
     "text": "Sie fragen sich vielleicht, was ich mit all dem meine. Ganz einfach: Stille ist kein Luxus, sondern eine Voraussetzung für Konzentration.",
     "frage": "Welche Notiz hält das Wichtigste fest?",
     "opt": [
      "Konzentration → Luxus",
      "Stille = Voraussetzung f. Konzentration, kein Luxus",
      "Frage ans Publikum: Was ist Stille?"
     ],
     "loesung": 1,
     "stelle": "Stille ist kein Luxus",
     "erklaerung": "Die rhetorische Frage gehört nicht in die Notiz, die Antwort darauf schon."
    }
   ]
  },
  {
   "id": "tc2h4",
   "stufe": 2,
   "titel": "Aus Notizen eine Zusammenfassung bauen",
   "kurz": "Die Zusammenfassung gibt wieder, was gesagt wurde: in eigenen Worten, in der dritten Person, ohne eigene Wertung und in der Reihenfolge des Hörtextes.",
   "ziel": "Nach diesem Block formulierst du aus deinen Notizen sachliche Sätze mit indirekter Rede und Redeeinleitungen und verbindest die Hauptpunkte in der richtigen Reihenfolge.",
   "zeichen": "🧩",
   "farbe": "rot",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Kindheit",
     "wer": "Frau",
     "text": "Ich bin fest davon überzeugt, dass wir Kinder viel zu sehr verplanen. Jede Stunde ist belegt, und dann wundern wir uns, dass sie nichts mehr mit sich anzufangen wissen.",
     "frage": "Welcher Satz eignet sich für die Zusammenfassung?",
     "opt": [
      "Die Referentin kritisiert, dass Kinder zu stark verplant würden und deshalb nicht mehr lernten, sich selbst zu beschäftigen.",
      "Die Referentin hat völlig recht, dass Kinder viel zu sehr verplant werden.",
      "Ich bin überzeugt, dass wir Kinder viel zu sehr verplanen."
     ],
     "loesung": 0,
     "stelle": "dass wir Kinder viel zu sehr verplanen",
     "erklaerung": "Dritte Person, indirekte Rede, keine eigene Bewertung. Der dritte Satz übernimmt nur das Original."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Zeugenaussagen",
     "wer": "Mann",
     "text": "Zeugen irren sich nicht, weil sie lügen. Sie irren sich, weil das Gedächtnis Lücken mit Wahrscheinlichem füllt, ohne dass sie es merken.",
     "frage": "Welcher Satz eignet sich für die Zusammenfassung?",
     "opt": [
      "Leider irren sich Zeugen ständig, was die Justiz dringend ändern müsste.",
      "Der Vortragende erklärt Irrtümer von Zeugen damit, dass das Gedächtnis Lücken unbemerkt mit Wahrscheinlichem ergänze.",
      "Zeugen irren sich nicht, weil sie lügen."
     ],
     "loesung": 1,
     "stelle": "weil das Gedächtnis Lücken mit Wahrscheinlichem füllt",
     "erklaerung": "Der erste Satz wertet und erfindet eine Forderung, der dritte nennt nur den verneinten Grund."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Stadtplanung",
     "wer": "Frau",
     "text": "Ein Beispiel: In unserer Nachbarstadt hat man an der Ringstraße eine Wasserwand gebaut. Die Messwerte haben sich kaum verändert, die Zufriedenheit der Anwohner aber sehr.",
     "frage": "Wie gibst du dieses Beispiel in der Zusammenfassung am besten wieder?",
     "opt": [
      "Eine Wasserwand an der Ringstraße sei toll, das sollten alle Städte machen.",
      "Das Beispiel ist unwichtig und gehört nicht in die Zusammenfassung.",
      "Als Beleg nennt sie eine Wasserwand, die zwar kaum leiser mache, die Anwohner aber zufriedener gestimmt habe."
     ],
     "loesung": 2,
     "stelle": "Die Messwerte haben sich kaum verändert",
     "erklaerung": "Ein Beispiel, das einen Unterpunkt belegt, darf knapp vorkommen, aber ohne eigene Begeisterung."
    },
    {
     "art": "hoerwahl",
     "ort": "Interview über Grenzen",
     "wer": "Mann",
     "text": "Zum Schluss möchte ich noch einmal festhalten: Grenzen verschwinden nicht durch offene Schlagbäume, sie wandern in die Köpfe und in die Verordnungen.",
     "frage": "Welcher Satz eignet sich als Schluss der Zusammenfassung?",
     "opt": [
      "Abschließend hält der Gesprächspartner fest, dass Grenzen trotz offener Übergänge im Denken und in Vorschriften fortbestünden.",
      "Abschließend sagt er, die Schlagbäume seien geöffnet worden.",
      "Zum Schluss möchte ich festhalten, dass Grenzen in die Köpfe wandern."
     ],
     "loesung": 0,
     "stelle": "sie wandern in die Köpfe und in die Verordnungen",
     "erklaerung": "Der richtige Satz formuliert das Bild in eigenen Worten um. Der zweite verfehlt die Aussage."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Kontrolle in Unternehmen",
     "wer": "Frau",
     "text": "Kontrolle ist teuer. Jede zweite Unterschrift kostet Arbeitszeit, und die Fehler, die man damit findet, bezahlen diese Zeit nicht.",
     "frage": "Welcher Satz eignet sich für die Zusammenfassung?",
     "opt": [
      "Kontrolle ist teuer, jede zweite Unterschrift kostet Arbeitszeit.",
      "Nach Ansicht der Referentin verursacht Kontrolle Kosten, die durch die gefundenen Fehler nicht aufgewogen würden.",
      "Die Referentin übertreibt, wenn sie behauptet, Kontrolle lohne sich nicht."
     ],
     "loesung": 1,
     "stelle": "die Fehler, die man damit findet, bezahlen diese Zeit nicht",
     "erklaerung": "Der erste Satz ist abgeschrieben, der dritte enthält eine eigene Wertung."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über das Gedächtnis",
     "wer": "Mann",
     "text": "Zuerst habe ich Ihnen erklärt, wie Erinnerungen entstehen, dann, wie Fragen sie verändern. Jetzt geht es um die Folgen für die Praxis.",
     "frage": "Welche Überleitung passt an dieser Stelle in die Zusammenfassung?",
     "opt": [
      "Außerdem gibt es noch Folgen für die Praxis, die auch interessant sind.",
      "Ganz am Anfang spricht er über die Folgen für die Praxis.",
      "Nachdem er die Entstehung von Erinnerungen und den Einfluss von Fragen erläutert hat, wendet er sich den praktischen Folgen zu."
     ],
     "loesung": 2,
     "stelle": "Jetzt geht es um die Folgen für die Praxis",
     "erklaerung": "Die Überleitung hält die Reihenfolge des Vortrags ein und verknüpft die Teile."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Verkehrslärm",
     "wer": "Frau",
     "text": "Ich gebe zu, dass Tempo dreißig nachts die Fahrzeit verlängert. Aber auf einer Strecke von zwei Kilometern ist das weniger als eine Minute.",
     "frage": "Wie gibst du dieses Zugeständnis sachlich wieder?",
     "opt": [
      "Sie räumt ein, dass Tempo dreißig die Fahrzeit verlängere, wenn auch nur geringfügig.",
      "Sie gibt zu, dass Tempo dreißig eigentlich nichts bringt.",
      "Tempo dreißig ist natürlich die beste Lösung."
     ],
     "loesung": 0,
     "stelle": "Ich gebe zu, dass Tempo dreißig nachts die Fahrzeit verlängert",
     "erklaerung": "„Einräumen“ ist das passende Verb für ein Zugeständnis. Der zweite Satz verdreht die Aussage."
    },
    {
     "art": "hoerwahl",
     "ort": "Interview über Jugendliche",
     "wer": "Mann",
     "text": "Viele glauben, Jugendliche langweilten sich heute weniger, weil sie das Handy haben. Ich sehe das umgekehrt. Sie haben nur verlernt, die Langeweile auszuhalten.",
     "frage": "Welcher Satz eignet sich für die Zusammenfassung?",
     "opt": [
      "Jugendliche langweilen sich heute weniger, weil sie das Handy haben.",
      "Er widerspricht der Annahme, das Handy verringere die Langeweile Jugendlicher, vielmehr hätten sie verlernt, sie auszuhalten.",
      "Er meint, Handys seien schuld an allem, was bei Jugendlichen schiefläuft."
     ],
     "loesung": 1,
     "stelle": "Sie haben nur verlernt, die Langeweile auszuhalten",
     "erklaerung": "Der erste Satz gibt die Meinung wieder, der der Sprecher widerspricht. Der dritte verallgemeinert."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag über Vertrauen",
     "wer": "Frau",
     "text": "Ich habe Ihnen heute drei Dinge gezeigt. Erstens, Vertrauen ist eine Vorleistung. Zweitens, es bricht schneller, als es wächst. Drittens, man kann es zurückgewinnen, aber nur mit Geduld.",
     "frage": "Welche Einleitung der Zusammenfassung ist am besten?",
     "opt": [
      "Im Vortrag geht es um Vertrauen, ein sehr wichtiges und interessantes Thema.",
      "Ich fasse zusammen, was die Referentin über Vertrauen sagt, weil ich es wichtig finde.",
      "Die Referentin erläutert, was Vertrauen ausmacht, wie es verloren geht und wie es sich zurückgewinnen lässt."
     ],
     "loesung": 2,
     "stelle": "man kann es zurückgewinnen, aber nur mit Geduld",
     "erklaerung": "Eine gute Einleitung nennt Sprecher und Gliederung, ohne Füllwörter und ohne Ich-Perspektive."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "vortrag",
   "name": "Hören: Vortrag oder Interview mitschreiben",
   "kurz": "Etwa fünfzehn Minuten, zehn Notizen, nur EINMAL",
   "was": "Ein Vortrag oder Interview zum Oberthema, in Abschnitten. Zu jedem Abschnitt ergänzt du deine Notiz: die Hauptpunkte und die wichtigsten Details.",
   "tipp": "Hör auf Gliederungssignale: „Ich komme zu meinem zweiten Punkt\", „Was heißt das konkret?\". Hauptpunkte groß notieren, Details darunter.",
   "zeichen": "🎙️",
   "farbe": "turq",
   "punkte": 10,
   "mal": 1,
   "runden": [
    {
     "id": "c2hs1",
     "titel": "Vertrauen: Vortrag: Wie Vertrauen in Organisationen entsteht und zerbricht",
     "aufgaben": [
      {
       "ort": "Vortrag, Abschnitt 1",
       "wer": "Frau",
       "text": "Guten Abend, meine Damen und Herren, und danke, dass Sie nach einem langen Arbeitstag noch hierhergekommen sind. Ich sehe einige bekannte Gesichter aus der Personalarbeit, und ich sehe, dass die hinteren Reihen besser besetzt sind als die vorderen. Das ist bei Vorträgen über Vertrauen übrigens immer so, ich habe aufgehört, das persönlich zu nehmen. Sie werden sich vielleicht fragen, was eine Wirtschaftspsychologin über Vertrauen sagen kann, das nicht schon in jedem Führungsratgeber steht. Ich will es versuchen, und ich fange mit einer Definition an, weil man im Alltag unter Vertrauen meistens ein warmes Gefühl versteht. In der Forschung ist Vertrauen etwas Nüchterneres. Es ist eine Vorleistung. Wer vertraut, macht sich verletzbar, obwohl er nicht weiß, wie der andere sich verhalten wird. Ich gebe meiner Kollegin einen halbfertigen Entwurf und rechne damit, dass sie ihn nicht in der nächsten Sitzung gegen mich verwendet. Ich erzähle meinem Chef von einem Fehler, den außer mir noch niemand bemerkt hat. Wenn ich wüsste, was passiert, bräuchte ich kein Vertrauen, dann hätte ich Gewissheit. Vertrauen ist also immer eine Wette auf das Verhalten eines anderen, und das ist der erste Gedanke, den Sie bitte mitnehmen.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 1",
        "zeilen": [
         "Abendvortrag vor Personalverantwortlichen",
         "Detail: Wer vertraut, macht sich trotz Ungewissheit verletzbar"
        ],
        "feld": "Hauptpunkt 1:",
        "frei": true,
        "muster": "Vertrauen ist eine riskante Vorleistung, kein Gefühl",
        "loesungen": [
         "Vorleistung",
         "riskante Vorleistung",
         "Vertrauen als Vorleistung",
         "Vertrauen ist kein Gefühl",
         "Wette auf das Verhalten anderer",
         "Definition von Vertrauen"
        ]
       },
       "stelle": "Es ist eine Vorleistung",
       "erklaerung": "Die Rednerin grenzt das Alltagsverständnis, ein warmes Gefühl, ausdrücklich von der Definition der Forschung ab.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 2",
       "wer": "Frau",
       "text": "Nun gibt es einen Satz, den Sie alle kennen und den man gern einem russischen Revolutionär zuschreibt, obwohl er ihn so wahrscheinlich nie gesagt hat: Vertrauen ist gut, Kontrolle ist besser. Ich halte diesen Satz für betriebswirtschaftlich falsch. Und zwar nicht aus moralischen Gründen, sondern aus ganz praktischen. Kontrolle kostet. Das wird gern vergessen, weil diese Kosten in keiner Bilanz als eigener Posten auftauchen. Sie verstecken sich in den Arbeitstagen von Leuten, die eigentlich etwas anderes tun sollten. Jede Freigabe, jede zweite Unterschrift, jeder Bericht, den jemand schreibt, damit ein anderer ihn abheftet, kostet Arbeitszeit. Ein Kollege von mir hat in einem mittelständischen Maschinenbauunternehmen einmal ausgerechnet, wie viele Stunden im Jahr allein dafür verwendet wurden, Reisekostenabrechnungen unter fünfzig Euro doppelt zu prüfen. Ich verrate Ihnen die Zahl nicht, sonst gibt es morgen in Ihren Häusern Unruhe. Nur so viel: Die entdeckten Fehler hätten diese Stunden nicht annähernd bezahlt. Und Kontrolle hat noch einen zweiten Haken. Sie erfasst nur, was man vorher festgelegt hat. Was niemand vorhergesehen hat, also gerade die heiklen Fälle, rutscht durch. Vertrauen ist deshalb nicht die naive Alternative zur Kontrolle. Es macht eine Organisation überhaupt erst handlungsfähig, weil man nie alles kontrollieren kann. Kontrolle ist teurer, und sie ersetzt Vertrauen nicht.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 1, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 1: Vertrauen ist eine riskante Vorleistung, kein Gefühl",
         "Kritik am Satz „Vertrauen ist gut, Kontrolle ist besser“"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Kontrolle ersetzt Vertrauen nicht und ist teurer",
        "loesungen": [
         "Kontrolle ist teurer",
         "Kontrolle kostet Arbeitszeit",
         "Kontrolle ersetzt Vertrauen nicht",
         "Kontrolle teuer, erfasst nur Vorhergesehenes",
         "Kontrolle lohnt sich nicht"
        ]
       },
       "stelle": "Kontrolle ist teurer, und sie ersetzt Vertrauen nicht",
       "erklaerung": "Die Rednerin argumentiert praktisch, nicht moralisch: Kontrolle kostet Zeit und erfasst nur Vorhersehbares.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 3",
       "wer": "Frau",
       "text": "Damit komme ich zum zweiten Teil. Woran machen wir eigentlich fest, ob wir jemandem vertrauen? Die Forschung unterscheidet seit Langem drei Quellen, und ich finde diese Einteilung bis heute sehr brauchbar. Die erste ist Kompetenz: Kann der andere, was er verspricht? Die zweite ist Wohlwollen: Meint er es gut mit mir, oder bin ich ihm gleichgültig? Und die dritte ist Integrität: Hält er sich an Grundsätze, die ich nachvollziehen kann, auch wenn es ihm gerade nicht nützt? Kompetenz, Wohlwollen, Integrität. Wenn Sie sich heute Abend nur drei Wörter merken, dann diese. Interessant ist, wie unterschiedlich die drei in Unternehmen gewichtet werden. Bei der Auswahl von Führungskräften schauen wir fast nur auf Kompetenz. Fachwissen, Erfolge, Kennzahlen. In unseren Befragungen zeigt sich aber, dass Kompetenz allein kaum Vertrauen in eine Vorgesetzte oder einen Vorgesetzten erzeugt. Man hält sie dann für fähig, aber man erzählt ihnen nichts. Eine Teilnehmerin hat das in einem Interview sehr schön formuliert. Sie sagte über ihren Abteilungsleiter: Der weiß alles, aber ich weiß nicht, ob er auf meiner Seite steht. Genau das ist der Unterschied zwischen Kompetenz und Wohlwollen.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 2",
        "zeilen": [
         "Zitat einer Mitarbeiterin: „Der weiß alles, aber ist er auf meiner Seite?“",
         "Detail: Kompetenz allein schafft bei Vorgesetzten kein Vertrauen"
        ],
        "feld": "Hauptpunkt 2:",
        "frei": true,
        "muster": "Drei Quellen: Kompetenz, Wohlwollen und Integrität",
        "loesungen": [
         "drei Quellen",
         "Kompetenz, Wohlwollen, Integrität",
         "drei Quellen des Vertrauens",
         "Grundlagen von Vertrauen",
         "woran man Vertrauen festmacht"
        ]
       },
       "stelle": "Die Forschung unterscheidet seit Langem drei Quellen",
       "erklaerung": "Die drei Begriffe werden ausdrücklich als Merkwörter wiederholt, ein klares Zeichen für einen Hauptpunkt.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 4",
       "wer": "Frau",
       "text": "Die dritte Quelle, die Integrität, ist die heikelste. Sie wird nämlich fast nie an den großen Entscheidungen gemessen, sondern an Kleinigkeiten. Ich gebe Ihnen ein Beispiel aus einem Krankenhausverbund, den wir zwei Jahre lang begleitet haben. Die Geschäftsführung hatte ein Sparprogramm aufgelegt, und das wurde, wie Sie sich vorstellen können, nicht begeistert aufgenommen. Es gab weniger Fortbildungen, frei werdende Stellen wurden nicht nachbesetzt, und auf den Stationen wurde es enger. Trotzdem haben die Leute es eine ganze Weile mitgetragen, weil die Begründung nachvollziehbar war. Gekippt ist die Stimmung an einem einzigen Tag im Frühjahr, und zwar wegen eines Dienstwagens. Ein neuer, ziemlich großer Dienstwagen für ein Mitglied der Geschäftsführung, der eines Morgens auf dem Parkplatz vor der Notaufnahme stand. Finanziell spielte das für das Sparprogramm überhaupt keine Rolle. Aber jeder, der morgens zur Schicht kam, ging an diesem Auto vorbei. Und jeder hat sich gefragt: Gilt das, was die uns erzählen, eigentlich auch für sie selbst? Sie sehen, Integrität ist kein abstrakter Wert. Menschen prüfen sie an kleinen Widersprüchen zwischen dem, was gesagt wird, und dem, was sie sehen. Und diese Widersprüche merken sie sich sehr lange.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 2, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 2: Drei Quellen: Kompetenz, Wohlwollen und Integrität",
         "Beispiel: Krankenhausverbund mit Sparprogramm, neuer Dienstwagen"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Integrität wird an kleinen Widersprüchen gemessen",
        "loesungen": [
         "kleine Widersprüche",
         "Integrität an Kleinigkeiten gemessen",
         "Widerspruch zwischen Worten und Taten",
         "an kleinen Widersprüchen gemessen",
         "Dienstwagen als Widerspruch"
        ]
       },
       "stelle": "Menschen prüfen sie an kleinen Widersprüchen",
       "erklaerung": "Der Dienstwagen ist nur das Beispiel, der allgemeine Gedanke ist der Widerspruch zwischen Reden und Handeln.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 5",
       "wer": "Frau",
       "text": "Das bringt mich zum dritten Punkt, und der ist vielleicht der unbequemste. Vertrauen entsteht langsam, aber es bricht schnell. In der Fachliteratur spricht man von einer Asymmetrie. Wenn Sie einen neuen Kollegen bekommen, tasten Sie sich vor. Sie geben ihm eine kleine Aufgabe, dann eine größere, Sie erzählen ihm etwas Persönliches und schauen, was er damit macht. Das dauert Monate, manchmal Jahre. Und oft merken Sie gar nicht, dass Sie gerade jemandem Vertrauen schenken, so selbstverständlich geschieht das. Zerstört wird dasselbe Vertrauen dagegen in einem Augenblick. Wir haben das in Laborversuchen ganz gut abbilden können. Versuchspersonen spielen dabei mit einem Partner, den sie nicht sehen, um kleine Geldbeträge, und der Partner hält sich mal an Absprachen und mal nicht. Ein einziger Bruch einer Absprache hatte ungefähr dasselbe Gewicht wie zehn eingehaltene. Man könnte also sagen, ein gebrochenes Versprechen wiegt so schwer wie zehn gehaltene, manchmal schwerer. Das ist übrigens kein Fehler unserer Wahrnehmung. Evolutionär ergibt das durchaus Sinn. Wer einem Betrüger zu schnell verzeiht, verliert mehr als jemand, der einem ehrlichen Partner etwas zu lange misstraut. Für Führungskräfte heißt das allerdings: Ihre gehaltenen Versprechen sind sozusagen die Grundausstattung. Jedes gebrochene kostet Sie sehr viel.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 3",
        "zeilen": [
         "Laborversuch: Spiel um kleine Geldbeträge mit unsichtbarem Partner",
         "Detail: Ein Bruch wiegt so schwer wie zehn gehaltene Absprachen"
        ],
        "feld": "Hauptpunkt 3:",
        "frei": true,
        "muster": "Vertrauen wächst langsam und bricht schnell",
        "loesungen": [
         "Asymmetrie",
         "wächst langsam, bricht schnell",
         "entsteht langsam, bricht schnell",
         "langsamer Aufbau, schneller Verlust",
         "schnell zerstört"
        ]
       },
       "stelle": "Vertrauen entsteht langsam, aber es bricht schnell",
       "erklaerung": "Der Fachbegriff Asymmetrie fasst den Hauptpunkt zusammen, der Laborversuch liefert das Detail.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 6",
       "wer": "Frau",
       "text": "Besonders gefährlich ist diese Asymmetrie in Zeiten der Veränderung, also bei Umstrukturierungen, Fusionen oder beim Wechsel an der Spitze. Ich erzähle Ihnen kurz von einem Versicherungsunternehmen, das zwei Standorte zusammenlegen wollte. Die Entscheidung war im Vorstand gefallen, aber man wollte sie erst verkünden, wenn alle Einzelheiten geklärt waren. Das klingt verantwortungsvoll. Es hat aber dazu geführt, dass die Belegschaft sechs Wochen lang wusste, dass etwas im Busch war, und nicht wusste, was. Und was passiert in so einem Fall? Die Leute reden. In der Kantine, auf dem Flur, in der Raucherecke. Am Ende dieser sechs Wochen kursierten drei verschiedene Versionen, von denen die harmloseste den Abbau von einem Drittel aller Stellen vorsah. Tatsächlich ging es um sehr viel weniger. Am Ende fielen an beiden Standorten zusammen kaum zwei Dutzend Stellen weg, und das fast nur durch den Ruhestand. Aber als die offizielle Mitteilung kam, hat ihr niemand mehr geglaubt. Man hat sie als Beschönigung gelesen. Die Lehre daraus ist einfach, und sie wird trotzdem ständig missachtet: Jede Lücke in der Information wird mit Gerüchten gefüllt, und Gerüchte sind fast immer schlimmer als die Wahrheit. Es ist besser zu sagen: Wir wissen noch nicht alles, aber das hier wissen wir schon.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 3, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 3: Vertrauen wächst langsam und bricht schnell",
         "Beispiel: Versicherung legt Standorte zusammen, sechs Wochen Schweigen"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Bei Umstrukturierungen füllen Gerüchte jede Informationslücke",
        "loesungen": [
         "Gerüchte füllen Informationslücken",
         "Lücken werden mit Gerüchten gefüllt",
         "Gerüchte schlimmer als die Wahrheit",
         "früh informieren statt schweigen",
         "Schweigen erzeugt Gerüchte"
        ]
       },
       "stelle": "Jede Lücke in der Information wird mit Gerüchten gefüllt",
       "erklaerung": "Das Beispiel der Versicherung führt zu der allgemeinen Lehre, die als Detail notiert werden soll.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 7",
       "wer": "Frau",
       "text": "Ich komme zum vierten Punkt, und hier muss ich ein wenig gegen den Zeitgeist sprechen. Wir leben in einer Zeit, in der man fast alles messen kann, was Menschen bei der Arbeit tun. Tastenanschläge, Antwortzeiten, Anwesenheit im Netzwerk. Ich habe neulich ein Programm gesehen, das sogar auswertet, wie lange jemand für eine Antwort im Chat braucht, und daraus eine Art Engagementwert berechnet. Ich gebe zu, ich musste zweimal hinschauen. Und viele Unternehmen tun es auch, oft mit der besten Absicht. Man möchte gerecht sein, man möchte Leistung sichtbar machen. Mein Punkt ist: Solche Kontrollsysteme können genau das Vertrauen zerstören, von dem eine Organisation lebt. Warum? Weil Kontrolle eine Botschaft hat. Wer jemanden überwacht, sagt ihm damit: Ich gehe davon aus, dass du dich ohne Aufsicht nicht anständig verhältst. Und Menschen reagieren auf diese Botschaft. Nicht unbedingt mit Protest. Viel häufiger reagieren sie, indem sie genau das tun, was gemessen wird, und keinen Handgriff mehr. Das nennt man im Deutschen sehr treffend Dienst nach Vorschrift. Die Kollegin, die früher abends noch schnell einen Kunden zurückgerufen hat, ohne dass es irgendwo stand, tut das nicht mehr. Warum auch? Es wird ja nicht gezählt. Und dann wundert man sich, dass die Kennzahlen stimmen und die Kunden trotzdem unzufrieden sind.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 4",
        "zeilen": [
         "messbar: Tastenanschläge, Antwortzeiten, Anwesenheit im Netzwerk",
         "Detail: Überwachung signalisiert Misstrauen und führt zu Dienst nach Vorschrift"
        ],
        "feld": "Hauptpunkt 4:",
        "frei": true,
        "muster": "Kontrollsysteme können Vertrauen in Organisationen zerstören",
        "loesungen": [
         "Kontrollsysteme zerstören Vertrauen",
         "Kontrolle zerstört Vertrauen",
         "Überwachung schadet dem Vertrauen",
         "Messen und Überwachen schadet",
         "Kontrolle als Botschaft des Misstrauens"
        ]
       },
       "stelle": "Solche Kontrollsysteme können genau das Vertrauen zerstören",
       "erklaerung": "Mit „Mein Punkt ist“ formuliert die Rednerin ihre These. Dienst nach Vorschrift ist die Folge, also ein Detail.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 8",
       "wer": "Frau",
       "text": "Wir haben das vor zwei Jahren in einer Studie mit einem Softwarehaus genauer untersucht. Das Unternehmen hatte in der Zeit, in der fast alle von zu Hause gearbeitet haben, eine Software eingeführt, die alle paar Minuten erfasst, ob jemand am Rechner aktiv ist. Wir konnten zwei Abteilungen vergleichen, die sich ansonsten sehr ähnlich waren. Die eine bekam die Software sofort, die andere, aus organisatorischen Gründen, erst ein halbes Jahr später. Die Arbeitszeit, die gemessen wurde, war in beiden Abteilungen ungefähr gleich. Was sich aber deutlich unterschied, war alles, was nicht gemessen wurde. In der überwachten Abteilung haben die Leute seltener freiwillig Kollegen geholfen, seltener Verbesserungsvorschläge gemacht und seltener an Treffen teilgenommen, die keine Pflicht waren. Ein Teilnehmer hat uns auf die Frage, warum, nur geantwortet: Ich werde ja jetzt dafür bezahlt, dass sich meine Maus bewegt. Ich finde, in dieser ironischen Antwort steckt die ganze Sache. Das freiwillige Engagement, also das, was man in keinen Arbeitsvertrag schreiben kann, ist zurückgegangen. Und das, meine Damen und Herren, ist genau der Teil der Arbeit, von dem gute Unternehmen leben.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 4, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 4: Kontrollsysteme können Vertrauen in Organisationen zerstören",
         "Studie: zwei Abteilungen eines Softwarehauses, Arbeit von zu Hause"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Aktivitätsmessung im Homeoffice senkte das freiwillige Engagement",
        "loesungen": [
         "freiwilliges Engagement sank",
         "weniger freiwilliges Engagement",
         "weniger Hilfe und Vorschläge",
         "gemessene Zeit gleich, Engagement gesunken",
         "weniger Einsatz über die Pflicht hinaus"
        ]
       },
       "stelle": "seltener freiwillig Kollegen geholfen, seltener Verbesserungsvorschläge gemacht",
       "erklaerung": "Die gemessene Arbeitszeit blieb gleich. Zurückgegangen ist nur, was nicht gemessen wurde.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 9",
       "wer": "Frau",
       "text": "Ich will Sie aber nicht ganz ohne Hoffnung nach Hause schicken. Der letzte Teil meines Vortrags beschäftigt sich deshalb mit der Frage, wie man verlorenes Vertrauen zurückgewinnt. Denn das ist möglich, nur eben mühsam. Am Anfang steht fast immer eine Entschuldigung, und über Entschuldigungen in Unternehmen könnte ich einen eigenen Abend lang reden. Die meisten sind nämlich keine. Sie kennen das: Es tut uns leid, falls sich jemand verletzt gefühlt hat. Oder: Es wurden Fehler gemacht. Achten Sie einmal auf die Grammatik solcher Sätze. Sie sind so gebaut, dass niemand etwas getan hat. Es wurden Fehler gemacht, aber von wem? Sie finden diese Sätze in fast jeder Pressemitteilung, wenn ein Unternehmen in Schwierigkeiten ist. Ich sammle sie inzwischen, meine Studierenden finden das sehr unterhaltsam. Unsere Daten zeigen recht eindeutig, dass solche Formulierungen eher schaden als nützen. Eine Entschuldigung wirkt nur, wenn sie konkret sagt, was falsch war, und wenn jemand die Verantwortung dafür übernimmt, mit Namen und Funktion. Das fällt Führungskräften enorm schwer, weil sie fürchten, damit angreifbar zu werden. Aber denken Sie an meine Definition vom Anfang. Wer vertrauen will, muss sich verletzbar machen. Das gilt eben auch für den, der Vertrauen zurückgewinnen will.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 5",
        "zeilen": [
         "typische Scheinentschuldigung: „Es wurden Fehler gemacht“",
         "Detail: Eine Entschuldigung muss konkret sein und Verantwortung übernehmen"
        ],
        "feld": "Hauptpunkt 5:",
        "frei": true,
        "muster": "Wie man verlorenes Vertrauen zurückgewinnen kann",
        "loesungen": [
         "Vertrauen zurückgewinnen",
         "verlorenes Vertrauen wiederherstellen",
         "Wiederaufbau von Vertrauen",
         "Vertrauen zurückgewinnen ist möglich, aber mühsam"
        ]
       },
       "stelle": "wie man verlorenes Vertrauen zurückgewinnt",
       "erklaerung": "„Der letzte Teil meines Vortrags“ kündigt den fünften Hauptpunkt an.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 10",
       "wer": "Frau",
       "text": "Die Entschuldigung ist allerdings nur der Anfang. Danach beginnt der langweilige Teil, und der ist der wichtigere. Erinnern Sie sich an die Asymmetrie: Ein Bruch wiegt schwer, also braucht es viele gehaltene Zusagen, um ihn auszugleichen. Unsere Empfehlung an das Krankenhaus, von dem ich vorhin erzählt habe, war deshalb nicht, ein großes Leitbild zu verfassen. Davon hatten die schon zwei. Wir haben vorgeschlagen, kleine Zusagen zu machen, die man überprüfen kann. Zum Beispiel: Jede Anfrage aus den Stationen wird innerhalb einer Woche beantwortet, und jeden Monat wird veröffentlicht, wie oft das geklappt hat. Das klingt unspektakulär, und genau darum geht es. Große Worte kann man nicht überprüfen, eine Woche schon. Vertrauen kommt nicht durch große Worte zurück, sondern durch viele kleine Belege, über Monate hinweg. Nach etwa einem Jahr waren die Werte in den Befragungen wieder dort, wo sie vor dem Sparprogramm gewesen waren. Vom Dienstwagen spricht man dort übrigens bis heute, aber inzwischen eher als Anekdote. Damit bin ich am Ende. Ich danke Ihnen für Ihre Aufmerksamkeit, auch in den hinteren Reihen, und freue mich jetzt auf Ihre Fragen.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 5, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 5: Wie man verlorenes Vertrauen zurückgewinnen kann",
         "Beispiel Krankenhaus: Anfragen innerhalb einer Woche beantworten"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Danach zählen kleine, überprüfbare Zusagen über viele Monate",
        "loesungen": [
         "kleine überprüfbare Zusagen",
         "überprüfbare Zusagen",
         "viele kleine Belege über Monate",
         "Zusagen halten und veröffentlichen",
         "kein Leitbild, sondern kleine Zusagen"
        ]
       },
       "stelle": "kleine Zusagen zu machen, die man überprüfen kann",
       "erklaerung": "Ein Leitbild wird ausdrücklich abgelehnt. Es geht um kleine, nachprüfbare Zusagen über lange Zeit.",
       "frage": "Ergänze deine Notiz."
      }
     ]
    },
    {
     "id": "c2hs2",
     "titel": "Langeweile: Radiointerview: Muss man Kinder vor Langeweile schützen?",
     "aufgaben": [
      {
       "ort": "Interview, Abschnitt 1",
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 1",
        "zeilen": [
         "Gast: Entwicklungspsychologin, Buch über Langeweile in der Kindheit",
         "Detail: Wochenpläne von Grundschulkindern gleichen Terminkalendern von Managern"
        ],
        "feld": "Hauptpunkt 1:",
        "frei": true,
        "muster": "Eltern fürchten die Langeweile ihrer Kinder stärker als früher",
        "loesungen": [
         "Eltern fürchten Langeweile",
         "Angst der Eltern vor Langeweile",
         "Eltern fürchten Langeweile stärker als früher",
         "Kinder werden verplant",
         "Langeweile wird heute mehr gefürchtet"
        ]
       },
       "stelle": "Eltern fürchten die Langeweile ihrer Kinder heute viel stärker als früher",
       "erklaerung": "Die Psychologin nennt dies selbst den Kern ihres Buches. Die vollen Wochenpläne sind das Beispiel dazu.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 2",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 1, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 1: Eltern fürchten die Langeweile ihrer Kinder stärker als früher",
         "Beispiel: Mutter schämt sich und sucht noch einen Kurs"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Langeweile des Kindes gilt als Versagen der Eltern",
        "loesungen": [
         "Versagen der Eltern",
         "persönliches Versagen",
         "Eltern schämen sich",
         "Langeweile als Beweis für zu wenig Förderung",
         "Eltern fühlen sich schuldig"
        ]
       },
       "stelle": "als persönliches Versagen, wenn sich ihr Kind langweilt",
       "erklaerung": "Der Moderator greift das Wort Versagen auf, die Psychologin bestätigt, dass die Eltern es selbst benutzen.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 3",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 2",
        "zeilen": [
         "Vergleich: Langeweile ist wie Hunger",
         "Detail: Sie zeigt, dass die Tätigkeit keinen Sinn mehr hat"
        ],
        "feld": "Hauptpunkt 2:",
        "frei": true,
        "muster": "Langeweile ist ein Signal und kein Defekt",
        "loesungen": [
         "Signal, kein Defekt",
         "Langeweile als Signal",
         "Langeweile ist ein Signal",
         "keine Krankheit, sondern ein Signal",
         "innerer Wecker"
        ]
       },
       "stelle": "Langeweile in erster Linie ein Signal, kein Defekt",
       "erklaerung": "Sie nennt es „die wichtigste Botschaft“. Hunger und der Versuch mit dem Stromschlag veranschaulichen den Punkt.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 4",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 2, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 2: Langeweile ist ein Signal und kein Defekt",
         "Beispiele: Sonntagnachmittag, Wartezimmer, zähe Sitzung"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Kurze Leere ist von chronischer Langeweile zu unterscheiden",
        "loesungen": [
         "vorübergehende und chronische Langeweile",
         "chronische Langeweile unterscheiden",
         "kurze Leere und dauerhafte Langeweile",
         "chronische Langeweile kann auf Depression hinweisen",
         "Unterschied: vorübergehend oder dauerhaft"
        ]
       },
       "stelle": "Das andere ist eine chronische Langeweile",
       "erklaerung": "Der Moderator hakt nach, und sie schränkt ihre These ein: Dauerhafte Langeweile ist ein Warnzeichen.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 5",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 3",
        "zeilen": [
         "Beobachtungen in Kindergärten und Familien",
         "Detail: Nach etwa zehn Minuten Quengeln beginnen Kinder selbst etwas"
        ],
        "feld": "Hauptpunkt 3:",
        "frei": true,
        "muster": "Aus Langeweile entstehen eigenes Spiel und Fantasie",
        "loesungen": [
         "Langeweile fördert Spiel und Fantasie",
         "eigenes Spiel und Fantasie",
         "Langeweile macht kreativ",
         "aus Langeweile entsteht Kreativität",
         "Kinder erfinden eigene Spiele"
        ]
       },
       "stelle": "Aus Langeweile entstehen eigenes Spiel und eigene Fantasie",
       "erklaerung": "Die Psychologin weist die romantische Übertreibung zurück, bestätigt aber den Kern der Aussage.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 6",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 3, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 3: Aus Langeweile entstehen eigenes Spiel und Fantasie",
         "Rat: Material bereitstellen, kein fertiges Programm"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Eltern sollten die Leere nicht sofort füllen",
        "loesungen": [
         "Leere nicht sofort füllen",
         "Eltern sollen nicht sofort eingreifen",
         "Verantwortung beim Kind lassen",
         "Langeweile aushalten",
         "keine schnelle Lösung anbieten"
        ]
       },
       "stelle": "Wenn Eltern die Leere sofort füllen",
       "erklaerung": "Wer die Leere sofort füllt, nimmt dem Kind die Chance, selbst eine Lösung zu finden.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 7",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 4",
        "zeilen": [
         "Angebote auf dem Handy sind nie zu Ende",
         "Detail: Der Bildschirm unterbricht die Langeweile, bevor sie wirkt"
        ],
        "feld": "Hauptpunkt 4:",
        "frei": true,
        "muster": "Das Smartphone verhindert die produktive Phase der Langeweile",
        "loesungen": [
         "Smartphone verhindert produktive Langeweile",
         "Handy verhindert die produktive Phase",
         "Bildschirm verhindert produktive Langeweile",
         "Smartphone als Problem",
         "Handy betäubt das Signal"
        ]
       },
       "stelle": "Das Smartphone verhindert genau die produktive Phase der Langeweile",
       "erklaerung": "Sie verknüpft den neuen Punkt mit den zehn Minuten Quengeln aus dem vorigen Teil.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 8",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 4, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 4: Das Smartphone verhindert die produktive Phase der Langeweile",
         "Tagebuch-Studie mit Schülern von vierzehn bis sechzehn"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Viele Jugendliche halten Leerlauf kaum noch aus",
        "loesungen": [
         "Jugendliche halten Leerlauf nicht aus",
         "Jugendliche ertragen Langeweile kaum",
         "ohne Handy unruhig und gereizt",
         "Jugendliche verlernen Langeweile",
         "keine Gelegenheit zur Langeweile mehr"
        ]
       },
       "stelle": "viele Jugendliche Leerlauf kaum noch aushalten",
       "erklaerung": "Dass sich die Jugendlichen angeblich nie langweilen, ist nur der erste Eindruck. Ohne Handy zeigt sich das Gegenteil.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 9",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 5",
        "zeilen": [
         "Unterschied: Im Unterricht kann das Kind nicht selbst reagieren",
         "Detail: Unterforderte und überforderte Kinder langweilen sich gleichermaßen"
        ],
        "feld": "Hauptpunkt 5:",
        "frei": true,
        "muster": "Langeweile in der Schule ist anders zu bewerten",
        "loesungen": [
         "Langeweile in der Schule anders bewerten",
         "Schule ist ein Sonderfall",
         "Langeweile im Unterricht ist ein Problem",
         "Schule: kein nützliches Signal",
         "Langeweile in der Schule"
        ]
       },
       "stelle": "Langeweile in der Schule ist etwas anderes als Langeweile am freien Nachmittag",
       "erklaerung": "Der Moderator leitet „zum Schluss“ ein neues Thema ein, die Psychologin grenzt es vom Bisherigen ab.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 10",
       "zeilen": [
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
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 5, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 5: Langeweile in der Schule ist anders zu bewerten",
         "mögliche Frage des Lehrers: zu leicht oder zu schwer?"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Lehrer sollten Langeweile ansprechen, statt sie zu bestrafen",
        "loesungen": [
         "ansprechen statt bestrafen",
         "Langeweile ansprechen",
         "nicht bestrafen",
         "Lehrer sollen nach der Ursache fragen",
         "Langeweile als Hinweis verstehen"
        ]
       },
       "stelle": "Viel sinnvoller ist es, die Langeweile anzusprechen",
       "erklaerung": "Strafe lehrt nur Verstellung. Das Ansprechen klärt, ob das Kind unter- oder überfordert ist.",
       "frage": "Ergänze deine Notiz."
      }
     ]
    },
    {
     "id": "c2hs3",
     "titel": "Erinnern und Vergessen: Vortrag: Wie zuverlässig sind Zeugen? Erinnerungen vor Gericht",
     "aufgaben": [
      {
       "ort": "Vortrag, Abschnitt 1",
       "wer": "Mann",
       "text": "Meine Damen und Herren, ich freue mich, dass Sie so zahlreich gekommen sind, obwohl draußen das schönste Wetter ist. Ich vermute, einige von Ihnen haben schon einmal als Schöffe an einem Gericht gesessen oder waren selbst Zeuge in einem Verfahren. Dann kennen Sie die Situation: Man sitzt da, wird gefragt, was man gesehen hat, und ist sich eigentlich ziemlich sicher. Heute Abend möchte ich diese Sicherheit ein wenig erschüttern. Ich arbeite seit über zwanzig Jahren als Rechtspsychologe und schreibe Gutachten über die Glaubhaftigkeit von Aussagen. Und das Erste, was ich in diesem Beruf lernen musste, ist: Unser Gedächtnis funktioniert nicht wie eine Kamera. Es ist keine Aufzeichnung, die man abspielt, wenn man sich erinnert. Erinnern ist eine Rekonstruktion. Jedes Mal, wenn Sie sich an etwas erinnern, setzen Sie das Erlebnis neu zusammen, aus Bruchstücken, aus Wissen, aus Erwartungen. Man kann sich das ein bisschen vorstellen wie ein Gericht, das man jedes Mal neu kocht, ohne Rezept. Es schmeckt ungefähr gleich, aber nie ganz genau so. Und dann wird die Erinnerung neu abgespeichert, aber nicht unbedingt so, wie sie vorher war. Das heißt: Jedes Erinnern verändert die Erinnerung ein kleines Stück. Ausgerechnet die Erlebnisse, an die wir am häufigsten denken, sind deshalb oft nicht die genauesten.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 1",
        "zeilen": [
         "Redner: Rechtspsychologe, schreibt Gutachten über Aussagen",
         "Detail: Jedes Erinnern verändert die Erinnerung ein wenig"
        ],
        "feld": "Hauptpunkt 1:",
        "frei": true,
        "muster": "Erinnern ist Rekonstruktion, keine Aufzeichnung",
        "loesungen": [
         "Erinnern ist Rekonstruktion",
         "Gedächtnis ist keine Kamera",
         "Rekonstruktion statt Aufzeichnung",
         "Gedächtnis rekonstruiert",
         "keine Aufzeichnung"
        ]
       },
       "stelle": "Erinnern ist eine Rekonstruktion",
       "erklaerung": "Das Bild der Kamera wird verneint, der Gegenbegriff Rekonstruktion ist der Hauptpunkt.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 2",
       "wer": "Mann",
       "text": "Ich will Ihnen ein kleines Beispiel geben, das Sie gleich an sich selbst ausprobieren können. Denken Sie an das letzte Mal, als Sie in einem Restaurant gegessen haben. Sehen Sie es vor sich? Gut. Und jetzt beantworten Sie für sich, ohne zu schummeln: Lag auf dem Tisch eine Tischdecke? Stand dort ein Salzstreuer? Die meisten Menschen haben auf diese Fragen eine Antwort, und viele sind sich ziemlich sicher. Aber die wenigsten haben in dem Moment wirklich auf den Salzstreuer geachtet. Was passiert also? Ihr Gedächtnis füllt die Lücke mit dem, was in einem Restaurant wahrscheinlich ist. Und das geschieht, ohne dass Sie es bemerken. Sie haben nicht das Gefühl zu raten, Sie haben das Gefühl, sich zu erinnern. Im Alltag ist das außerordentlich praktisch. Es wäre ja furchtbar mühsam, jedes Detail speichern zu müssen. Vor Gericht kann genau das aber zum Problem werden. Wenn eine Zeugin aussagt, der Täter habe eine Waffe in der Hand gehabt, dann ist die Frage: Hat sie die Waffe gesehen, oder hat ihr Gedächtnis die Waffe ergänzt, weil zu einem Überfall eben eine Waffe gehört?",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 1, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 1: Erinnern ist Rekonstruktion, keine Aufzeichnung",
         "Selbstversuch: Tischdecke und Salzstreuer im Restaurant"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Lücken werden unbemerkt mit Wahrscheinlichem gefüllt",
        "loesungen": [
         "Lücken werden mit Wahrscheinlichem gefüllt",
         "Gedächtnis ergänzt Lücken",
         "unbemerkte Ergänzung",
         "Wahrscheinliches statt Erlebtes",
         "Lücken unbemerkt gefüllt"
        ]
       },
       "stelle": "Ihr Gedächtnis füllt die Lücke",
       "erklaerung": "Restaurant und Waffe sind Beispiele, der Mechanismus ist das unbemerkte Ergänzen.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 3",
       "wer": "Mann",
       "text": "Damit bin ich beim zweiten Punkt. Wenn unser Gedächtnis so formbar ist, dann liegt die Frage nahe, wer oder was es formt. Und eine sehr wirksame Kraft sind ausgerechnet die Fragen, die wir Zeugen stellen. Fragen können Erinnerungen verfälschen. Es gibt dazu einen klassischen Versuch aus den Siebzigerjahren, den manche von Ihnen vielleicht kennen. Er gehört zu den meistzitierten Versuchen der ganzen Gedächtnisforschung, und er ist so einfach, dass man ihn fast am Küchentisch nachmachen könnte. Versuchspersonen sahen einen Film von einem Autounfall. Danach wurden sie gefragt, wie schnell die Autos ungefähr gefahren seien. Der Unterschied lag in einem einzigen Wort. Die einen wurden gefragt, wie schnell die Autos waren, als sie sich berührten. Die anderen, wie schnell sie waren, als sie ineinanderkrachten. Und raten Sie, was passiert ist. Die zweite Gruppe hat die Geschwindigkeit deutlich höher geschätzt. Nun könnte man sagen, gut, das ist eine Schätzung, die ist sowieso unsicher. Aber es kommt noch besser. Eine Woche später wurden dieselben Leute gefragt, ob sie im Film zerbrochenes Glas gesehen hätten. Es gab in dem Film kein zerbrochenes Glas. Trotzdem haben in der Gruppe mit dem Wort ineinanderkrachen ungefähr doppelt so viele Personen gesagt, sie hätten Glas gesehen.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 2",
        "zeilen": [
         "klassischer Versuch: Film von einem Autounfall",
         "Detail: Ein Wort in der Frage verändert die geschätzte Geschwindigkeit"
        ],
        "feld": "Hauptpunkt 2:",
        "frei": true,
        "muster": "Fragen können die Erinnerungen von Zeugen verfälschen",
        "loesungen": [
         "Fragen verfälschen Erinnerungen",
         "Einfluss von Fragen",
         "Fragen formen das Gedächtnis",
         "Wortwahl in Fragen verändert Erinnerung",
         "Fragen beeinflussen Zeugen"
        ]
       },
       "stelle": "Fragen können Erinnerungen verfälschen",
       "erklaerung": "„Damit bin ich beim zweiten Punkt“ kündigt den neuen Hauptpunkt an, danach folgt der Versuch als Beleg.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 4",
       "wer": "Mann",
       "text": "Sie sehen, es geht nicht bloß um die Antwort auf die Frage. Die Frage selbst wird zu einem Teil der Erinnerung. Und das gilt für alle Informationen, die nach einem Ereignis zu uns kommen. Wir nennen das in der Fachsprache den Fehlinformationseffekt. Das klingt technisch, ist aber im Alltag allgegenwärtig. Stellen Sie sich vor, Sie haben einen Unfall an einer Kreuzung beobachtet. Am Abend lesen Sie in der Lokalzeitung einen Bericht darüber, in dem steht, der Radfahrer habe keinen Helm getragen. Oder Sie unterhalten sich mit einem anderen Zeugen, der sicher ist, dass die Ampel rot war. Ein paar Wochen später werden Sie vor Gericht befragt, und Sie erinnern sich an einen Radfahrer ohne Helm und an eine rote Ampel. Sie wissen aber nicht mehr, woher dieses Wissen stammt. Ob Sie es selbst gesehen oder später gehört haben, das ist in Ihrem Kopf längst verschmolzen. Wir sagen, die Quelle der Erinnerung geht verloren, während der Inhalt bleibt. Das ist übrigens einer der Gründe, warum Zeugen vor einer Verhandlung möglichst nicht miteinander über den Fall sprechen sollten. Ich weiß, das ist in der Praxis schwer durchzusetzen.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 2, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 2: Fragen können die Erinnerungen von Zeugen verfälschen",
         "Fachbegriff: Fehlinformationseffekt"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Spätere Informationen werden ohne Quelle in die Erinnerung eingebaut",
        "loesungen": [
         "spätere Informationen werden eingebaut",
         "Fehlinformationseffekt",
         "Quelle geht verloren, Inhalt bleibt",
         "nachträgliche Informationen verändern Erinnerung",
         "Zeitung und andere Zeugen beeinflussen Erinnerung"
        ]
       },
       "stelle": "die Quelle der Erinnerung geht verloren, während der Inhalt bleibt",
       "erklaerung": "Helm und Ampel sind ausgedachte Beispiele. Wichtig ist, dass man später Gehörtes für selbst Gesehenes hält.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 5",
       "wer": "Mann",
       "text": "Mein dritter Punkt betrifft etwas, das vor Gericht eine enorme Rolle spielt, nämlich die Sicherheit eines Zeugen. Sie kennen das: Ein Zeuge sagt, ich bin mir absolut sicher, das war der Mann. Und ein anderer sagt, ich glaube, er war es, aber ich will mich nicht festlegen. Wem glauben Sie mehr? Die allermeisten Menschen glauben dem ersten. Und das ist nachvollziehbar, aber es ist leider oft falsch. Die Sicherheit, mit der ein Zeuge aussagt, sagt erstaunlich wenig über die Richtigkeit seiner Aussage. Zumindest dann, wenn wir diese Sicherheit erst vor Gericht messen. Warum ist das so? Weil die Sicherheit mit jeder Wiederholung wächst. Ein Zeuge erzählt seine Geschichte zuerst der Polizei, dann seiner Familie, dann den Kollegen, dann vielleicht einem Anwalt. Bei jedem Erzählen wird die Geschichte flüssiger, runder, die Zweifel fallen weg. Wenn er nach einem Jahr vor Gericht steht, hat er sie vielleicht zwanzigmal erzählt. Und dann fühlt sie sich an wie eine Tatsache. Dazu kommt, dass ihm unterwegs niemand widersprochen hat. Die Familie glaubt ihm, die Kollegen auch, und jedes Nicken bestärkt ihn. Interessant ist: Die Sicherheit beim allerersten Mal, also direkt nach der Tat, ist durchaus aussagekräftig. Deshalb sollte man sie sofort festhalten.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 3",
        "zeilen": [
         "Polizei, Familie, Kollegen, Anwalt: Geschichte oft erzählt",
         "Detail: Die Sicherheit wächst mit jeder Wiederholung der Aussage"
        ],
        "feld": "Hauptpunkt 3:",
        "frei": true,
        "muster": "Die Sicherheit eines Zeugen sagt wenig über die Richtigkeit",
        "loesungen": [
         "Sicherheit sagt wenig über Richtigkeit",
         "sichere Zeugen nicht unbedingt richtig",
         "Sicherheit ist kein Beweis",
         "Selbstsicherheit von Zeugen täuscht",
         "Sicherheit des Zeugen"
        ]
       },
       "stelle": "sagt erstaunlich wenig über die Richtigkeit seiner Aussage",
       "erklaerung": "Achte auf die Einschränkung: Nur die Sicherheit direkt nach der Tat ist aussagekräftig.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 6",
       "wer": "Mann",
       "text": "Das Problem ist, dass Richter, Schöffen und Anwälte auch nur Menschen sind. Sie lassen sich von Sicherheit beeindrucken, so wie wir alle. In Ländern, in denen Laien als Geschworene über die Schuld entscheiden, hat man das sehr gründlich untersucht. Man hat Testpersonen Videoaufnahmen von Zeugen gezeigt und sie gebeten zu beurteilen, ob die Zeugen richtig liegen. Die Testpersonen konnten das kaum besser als durch Zufall. Sie hätten genauso gut eine Münze werfen können. Was ihr Urteil aber stark beeinflusst hat, war, wie selbstbewusst ein Zeuge auftrat. Ein ruhiger, sicherer Zeuge, der sich irrte, wurde eher geglaubt als ein zögernder Zeuge, der recht hatte. Sie werden jetzt vielleicht einwenden, dass Berufsrichter darauf trainiert sind, so etwas zu durchschauen. Ich habe mit vielen Richtern gearbeitet, und ich schätze die meisten sehr. Aber die Forschung gibt keinen Anlass zu glauben, dass sie dagegen gefeit sind. Und es gibt eine bittere Bilanz dazu. In den Vereinigten Staaten hat man Hunderte von Fällen untersucht, in denen Verurteilte später durch Genanalysen entlastet wurden. In etwa drei Vierteln dieser Fälle hatte eine falsche Zeugenaussage zur Verurteilung beigetragen, oft von einem sehr sicheren Zeugen.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 3, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 3: Die Sicherheit eines Zeugen sagt wenig über die Richtigkeit",
         "Untersuchung mit Videoaufnahmen von Zeugen"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Gerichte lassen sich von sicher auftretenden Zeugen beeindrucken",
        "loesungen": [
         "Gerichte lassen sich von Sicherheit beeindrucken",
         "sichere Zeugen werden eher geglaubt",
         "Richter durch Selbstbewusstsein beeinflusst",
         "selbstbewusste Zeugen überzeugen mehr",
         "Fehlurteile durch sichere Zeugen"
        ]
       },
       "stelle": "Sie lassen sich von Sicherheit beeindrucken",
       "erklaerung": "Der mögliche Einwand zu Berufsrichtern wird erwähnt und zurückgewiesen.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 7",
       "wer": "Mann",
       "text": "Bisher habe ich von Erinnerungen gesprochen, die leicht verändert werden. Ein Detail kommt hinzu, eine Farbe ändert sich. Jetzt gehe ich einen Schritt weiter, und das ist der Teil meines Vortrags, bei dem das Publikum meistens unruhig wird. Man kann falsche Erinnerungen nicht bloß verändern, man kann sie auch vollständig erzeugen. Wieder ein bekanntes Experiment. Forscherinnen haben Erwachsenen vier kurze Geschichten aus ihrer Kindheit vorgelegt, angeblich von Verwandten erzählt. Drei davon waren wahr, eine war erfunden: Man habe sich als Kind in einem großen Einkaufszentrum verlaufen, sei weinend von einer älteren Frau gefunden und zu den Eltern zurückgebracht worden. Die Teilnehmer sollten aufschreiben, woran sie sich zu jeder Geschichte noch erinnerten. Und ungefähr ein Viertel hat sich nach einigen Gesprächen an das erfundene Erlebnis erinnert, teilweise mit Einzelheiten, die in der Vorlage gar nicht standen. Wie die Frau aussah, was sie gesagt hat. Ein Teilnehmer wusste sogar noch, dass die Frau eine blaue Strickjacke getragen habe. Spätere Untersuchungen haben das mit noch unwahrscheinlicheren Ereignissen wiederholt, etwa mit einer Ballonfahrt, die nie stattgefunden hat. Man hat den Leuten dafür ein bearbeitetes Kinderfoto gezeigt, und auch da haben viele angefangen, sich zu erinnern.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 4",
        "zeilen": [
         "Experiment: vier Kindheitsgeschichten, eine davon erfunden",
         "Detail: Etwa ein Viertel erinnerte sich an ein erfundenes Kindheitserlebnis"
        ],
        "feld": "Hauptpunkt 4:",
        "frei": true,
        "muster": "Falsche Erinnerungen lassen sich vollständig erzeugen",
        "loesungen": [
         "falsche Erinnerungen erzeugen",
         "falsche Erinnerungen lassen sich erzeugen",
         "ganze Erinnerungen können erfunden werden",
         "künstliche Erinnerungen",
         "Erinnerungen vollständig erzeugbar"
        ]
       },
       "stelle": "man kann sie auch vollständig erzeugen",
       "erklaerung": "„Jetzt gehe ich einen Schritt weiter“ markiert die Steigerung: nicht verändern, sondern neu erzeugen.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 8",
       "wer": "Mann",
       "text": "Jetzt werden Sie sich fragen: Kann man eine falsche Erinnerung denn nicht von einer echten unterscheiden? Das wäre ja das Naheliegende. Leider nein, jedenfalls nicht von innen. Eine falsche Erinnerung fühlt sich genauso an wie eine echte. Sie hat Bilder, sie hat Gefühle, manchmal sogar Gerüche. Die Menschen in diesen Experimenten haben nicht gelogen. Viele waren regelrecht verstört, als man ihnen am Ende erklärt hat, dass die Geschichte erfunden war. Eine Teilnehmerin soll gesagt haben: Aber ich sehe die Frau doch vor mir. Das ist die eigentliche Lehre aus diesem Teil der Forschung, und sie gilt weit über das Gericht hinaus: Das Gefühl, dass eine Erinnerung echt ist, ist kein Beweis dafür, dass sie es auch ist. Ich sage das nicht, um Sie zu verunsichern. Die meisten Ihrer Erinnerungen sind im Großen und Ganzen zuverlässig, sonst kämen wir im Leben gar nicht zurecht. Aber bei Einzelheiten und bei Erinnerungen, über die viel geredet wurde, sollten wir bescheidener sein. Ich selbst habe übrigens eine lebhafte Erinnerung an einen Hund, der mich als Kind gebissen hat. Meine Schwester behauptet, sie sei gebissen worden. Wir haben uns nie geeinigt.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 4, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 4: Falsche Erinnerungen lassen sich vollständig erzeugen",
         "Teilnehmerin: „Aber ich sehe die Frau doch vor mir“"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Das Gefühl der Echtheit ist kein Beweis",
        "loesungen": [
         "Gefühl der Echtheit ist kein Beweis",
         "falsche Erinnerungen fühlen sich echt an",
         "Echtheitsgefühl beweist nichts",
         "von innen nicht unterscheidbar",
         "falsch und echt fühlen sich gleich an"
        ]
       },
       "stelle": "ist kein Beweis dafür, dass sie es auch ist",
       "erklaerung": "Die Anekdote mit dem Hund ist eine persönliche Abschweifung, die den Punkt nur illustriert.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 9",
       "wer": "Mann",
       "text": "Was folgt nun aus alldem? Soll man Zeugen überhaupt noch glauben? Natürlich soll man das. Ohne Zeugen wäre ein großer Teil der Rechtsprechung gar nicht möglich. Aber man muss sie anders befragen, und damit komme ich zum letzten Teil, zu den praktischen Folgen für die Befragung. Die erste Folge ist zeitlich. Zeugen sollten so früh wie möglich befragt werden, bevor sie ihre Geschichte zwanzigmal erzählt und die Zeitung gelesen haben. Die zweite betrifft die Art der Fragen. Am Anfang sollte immer ein freier Bericht stehen. Erzählen Sie bitte alles, woran Sie sich erinnern, auch Kleinigkeiten. Wer befragt, hört zu und unterbricht nicht, auch wenn es ihm zu lange dauert. Erst danach stellt man offene Fragen, und Suggestivfragen, also Fragen, in denen die Antwort schon steckt, sollte man ganz vermeiden. Also nicht: Hatte er eine Waffe? Sondern: Was hatte er in den Händen? Und die dritte Folge ist: Zeugen sollten einzeln befragt werden, getrennt voneinander, damit sie ihre Erinnerungen nicht gegenseitig angleichen. Das alles klingt selbstverständlich. Sie wären überrascht, wie oft in der Praxis davon abgewichen wird, meistens nicht aus böser Absicht, sondern aus Zeitnot.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 5",
        "zeilen": [
         "drei Folgen: zeitlich, Art der Fragen, getrennt",
         "Detail: Zeugen früh, offen und einzeln befragen"
        ],
        "feld": "Hauptpunkt 5:",
        "frei": true,
        "muster": "Praktische Folgen für die Befragung von Zeugen",
        "loesungen": [
         "praktische Folgen für Befragungen",
         "Konsequenzen für die Befragung",
         "Zeugen anders befragen",
         "Empfehlungen für Befragungen",
         "Folgen für die Praxis"
        ]
       },
       "stelle": "zu den praktischen Folgen für die Befragung",
       "erklaerung": "„Damit komme ich zum letzten Teil“ kündigt den fünften Hauptpunkt an, danach werden die Folgen aufgezählt.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 10",
       "wer": "Mann",
       "text": "Eine letzte Empfehlung betrifft die Gegenüberstellung, also den Moment, in dem ein Zeuge einen Verdächtigen erkennen soll. Früher stellte man meistens mehrere Personen nebeneinander auf, oder man legte Fotos gleichzeitig vor. Das Problem dabei ist: Der Zeuge vergleicht dann und wählt den, der seiner Erinnerung am ähnlichsten ist, auch wenn der Täter gar nicht dabei ist. Besser ist es, die Personen oder Fotos nacheinander zu zeigen, und zwar so, dass der Zeuge bei jedem einzeln entscheidet. Und noch wichtiger: Die Gegenüberstellung sollte von jemandem durchgeführt werden, der selbst nicht weiß, wer der Verdächtige ist. Sie werden lachen, aber Ermittler verraten durch ein Nicken, ein Zögern oder einen Blick oft ungewollt, auf wen sie hoffen. Und Zeugen sind in so einer Situation sehr empfänglich für solche Zeichen. Sie wollen helfen, sie wollen nichts falsch machen, und sie suchen nach jedem Hinweis, ob sie auf dem richtigen Weg sind. In der Medizin ist dieses Verfahren bei Studien längst selbstverständlich, bei Gegenüberstellungen leider noch nicht überall. Ich komme zum Schluss. Unser Gedächtnis ist kein Archiv, es ist eher ein Erzähler, der es mit der Wahrheit nicht immer ganz genau nimmt. Wenn wir das wissen, können wir besser mit ihm umgehen. Vielen Dank.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 5, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 5: Praktische Folgen für die Befragung von Zeugen",
         "früher: mehrere Personen oder Fotos gleichzeitig"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Gegenüberstellung nacheinander und durch eine nicht eingeweihte Person",
        "loesungen": [
         "nacheinander zeigen, Leiter kennt Verdächtigen nicht",
         "Gegenüberstellung nacheinander",
         "durchführende Person weiß nichts",
         "nicht gleichzeitig, sondern einzeln zeigen",
         "Ermittler sollen nicht eingeweiht sein"
        ]
       },
       "stelle": "der selbst nicht weiß, wer der Verdächtige ist",
       "erklaerung": "Zwei Empfehlungen gehören zusammen: nacheinander zeigen und von einer nicht eingeweihten Person durchführen lassen.",
       "frage": "Ergänze deine Notiz."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tc2hl1",
   "titel": "Prüfungslauf 1 · Grenzen",
   "minuten": 20,
   "teile": [
    {
     "nr": 1,
     "art": "vortrag",
     "aufgaben": [
      {
       "ort": "Interview, Abschnitt 1",
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 1",
        "zeilen": [
         "Doppelstadt Kallweit und Kalwice, verbunden durch eine Brücke",
         "Detail: Die Brücke ohne Kontrollen bleibt für viele eine Schwelle"
        ],
        "feld": "Hauptpunkt 1:",
        "frei": true,
        "muster": "Eine offene Grenze verschwindet nicht einfach",
        "loesungen": [
         "offene Grenze verschwindet nicht",
         "Grenze bleibt trotz offener Übergänge",
         "Grenze verändert nur ihre Form",
         "Grenze ist nicht verschwunden",
         "Grenze besteht weiter"
        ]
       },
       "stelle": "Eine offene Grenze verschwindet nicht einfach",
       "erklaerung": "Der Gast widerspricht der Erwartung der Moderatorin. Die Brücke als Schwelle ist das erste Detail dazu.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 2",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 1, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 1: Eine offene Grenze verschwindet nicht einfach",
         "Zählung an vierzehn Tagen auf der Brücke"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Kaum jemand geht ohne bestimmten Zweck hinüber",
        "loesungen": [
         "kaum jemand ohne Zweck auf der anderen Seite",
         "nur mit bestimmtem Zweck hinüber",
         "weniger als jeder Zehnte ohne Grund",
         "drüben erledigt man nur etwas",
         "andere Seite nur für Besorgungen"
        ]
       },
       "stelle": "ging hinüber, ohne einen bestimmten Grund zu nennen",
       "erklaerung": "Die Zählung belegt das Detail: Hinüber geht man für Besorgungen, nicht zum Bummeln.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 3",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 2",
        "zeilen": [
         "Zitat: „Ich bin in meiner eigenen Stadt immer der Gast“",
         "Detail: Sprachkenntnisse sind auf beiden Seiten sehr ungleich verteilt"
        ],
        "feld": "Hauptpunkt 2:",
        "frei": true,
        "muster": "Grenzen entstehen im Alltag neu durch Sprache und Gewohnheit",
        "loesungen": [
         "Grenze entsteht im Alltag neu",
         "Sprache und Gewohnheiten",
         "unsichtbare Grenze im Alltag",
         "Grenze in Köpfen und Gewohnheiten",
         "neue Grenze durch Sprache und Gewohnheit"
        ]
       },
       "stelle": "Sie entsteht im Alltag immer wieder neu",
       "erklaerung": "Er nennt es selbst „die zentrale These meiner Arbeit“. Die ungleichen Sprachkenntnisse sind das erste Detail.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 4",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 2, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 2: Grenzen entstehen im Alltag neu durch Sprache und Gewohnheit",
         "Beispiel: Wechselkurs verschiebt sich, Parkplätze halb leer"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Man nutzt die andere Seite fast nur wegen der Preise",
        "loesungen": [
         "nur wegen der Preise",
         "Preisunterschied als einziger Grund",
         "Einkaufen drüben nur, wenn billiger",
         "keine Bindung über den Preis hinaus",
         "Geldbeutel statt Gefühl"
        ]
       },
       "stelle": "fast nur dann nutzen, wenn es einen Preisunterschied gibt",
       "erklaerung": "Das Beispiel mit dem Wechselkurs zeigt: Ohne Preisvorteil bleiben die Besucher weg.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 5",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 3",
        "zeilen": [
         "Tankstellen, Friseure, Zigarettenläden direkt hinter der Brücke",
         "Detail: Geschäfte und Arbeitsplätze leben vom Preis- und Lohngefälle"
        ],
        "feld": "Hauptpunkt 3:",
        "frei": true,
        "muster": "Grenzen bringen den Bewohnern auch Vorteile",
        "loesungen": [
         "Grenzen haben Vorteile",
         "Vorteile der Grenze",
         "Grenzen nützen den Bewohnern auch",
         "nicht nur Hindernis",
         "Bewohner profitieren von der Grenze"
        ]
       },
       "stelle": "dass Grenzen für die Bewohner auch Vorteile haben",
       "erklaerung": "Der Gast stellt seine Sicht der verbreiteten Meinung gegenüber, Grenzen seien nur ein Hindernis.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 6",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 3, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 3: Grenzen bringen den Bewohnern auch Vorteile",
         "Heimatverein: „Bei uns ist es ordentlicher …“"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Abgrenzung vom Nachbarn stiftet eine eigene Identität",
        "loesungen": [
         "Abgrenzung stiftet Identität",
         "Identität durch Abgrenzung",
         "Grenzen stiften Identität",
         "Selbstbild durch Vergleich mit Nachbarn",
         "Wir-Gefühl durch Abgrenzung"
        ]
       },
       "stelle": "entsteht fast immer dadurch, dass man sich von anderen abgrenzt",
       "erklaerung": "Die Rückfrage nach Vorurteilen wird beantwortet: Abgrenzung muss nicht Abwertung bedeuten.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 7",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 4",
        "zeilen": [
         "ein gelungenes und ein gescheitertes Beispiel angekündigt",
         "Detail: Ein zweisprachiger Kindergarten ist ein gelungenes Beispiel"
        ],
        "feld": "Hauptpunkt 4:",
        "frei": true,
        "muster": "Gemeinsame Projekte zeigen Möglichkeiten und Grenzen der Zusammenarbeit",
        "loesungen": [
         "gemeinsame Projekte",
         "Möglichkeiten und Grenzen der Zusammenarbeit",
         "Zusammenarbeit: teils erfolgreich, teils nicht",
         "Erfolge und Misserfolge gemeinsamer Projekte",
         "grenzüberschreitende Projekte"
        ]
       },
       "stelle": "wo die Grenzen der Zusammenarbeit liegen",
       "erklaerung": "Die Ankündigung „ein gelungenes und ein gescheitertes Beispiel“ verrät, dass gleich zwei Details folgen.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 8",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 4, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 4: Gemeinsame Projekte zeigen Möglichkeiten und Grenzen der Zusammenarbeit",
         "Bus alle zwanzig Minuten, Probebetrieb nach fast sieben Jahren"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Eine gemeinsame Buslinie scheiterte an unterschiedlichen Vorschriften",
        "loesungen": [
         "Buslinie scheiterte an Vorschriften",
         "Vorschriften verhinderten den Bus",
         "unterschiedliche Regeln machten Bus zu teuer",
         "Bus gescheitert: Bürokratie",
         "Grenze in Verordnungen"
        ]
       },
       "stelle": "An Vorschriften, ganz banal",
       "erklaerung": "Nicht der fehlende Wille, sondern die Summe der Vorschriften und Kosten ließ die Buslinie scheitern.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 9",
       "zeilen": [
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
        }
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 5",
        "zeilen": [
         "innerhalb von zwei Tagen Polizei und Absperrgitter",
         "Detail: Die Grenzschließung in der Pandemie war ein Schock"
        ],
        "feld": "Hauptpunkt 5:",
        "frei": true,
        "muster": "Krisen bringen Grenzen schnell zurück",
        "loesungen": [
         "Krisen bringen Grenzen zurück",
         "Grenze kehrt in Krisen zurück",
         "in Krisen wird die Grenze wieder real",
         "Krisen machen Grenzen wieder sichtbar",
         "Rückkehr der Grenze in der Krise"
        ]
       },
       "stelle": "wie schnell Krisen Grenzen zurückbringen",
       "erklaerung": "Die Moderatorin greift eine frühere Bemerkung auf, der Gast macht daraus den letzten Hauptpunkt.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Interview, Abschnitt 10",
       "zeilen": [
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
       ],
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 5, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 5: Krisen bringen Grenzen schnell zurück",
         "Fazit: einerseits, andererseits"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Danach mehr Bewusstsein für Abhängigkeit, aber auch Misstrauen",
        "loesungen": [
         "mehr Bewusstsein für Abhängigkeit, aber Misstrauen",
         "Abhängigkeit bewusst, Misstrauen geblieben",
         "gemischtes Fazit",
         "gegenseitige Abhängigkeit und Misstrauen",
         "Gerüchte und Misstrauen geblieben"
        ]
       },
       "stelle": "Andererseits ist auch Misstrauen geblieben",
       "erklaerung": "Einerseits und andererseits gliedern das Fazit in zwei gegensätzliche Folgen, beide gehören in die Notiz.",
       "frage": "Ergänze deine Notiz."
      }
     ]
    }
   ]
  },
  {
   "id": "tc2hl2",
   "titel": "Prüfungslauf 2 · Stille und Lärm",
   "minuten": 20,
   "teile": [
    {
     "nr": 1,
     "art": "vortrag",
     "aufgaben": [
      {
       "ort": "Vortrag, Abschnitt 1",
       "wer": "Frau",
       "text": "Guten Abend, meine Damen und Herren. Bevor ich anfange, möchte ich Sie um etwas bitten. Seien Sie bitte einmal zehn Sekunden ganz still und hören Sie, was Sie hören. Danke. Was haben Sie gehört? Ich habe das Summen der Lüftung gehört, jemand in der dritten Reihe hat mit einem Bonbonpapier geraschelt, und von draußen kam die Straßenbahn. Dieser Saal gilt übrigens als ruhig. Er wurde vor ein paar Jahren sogar eigens schallgedämmt, das hat mir der Hausmeister vorhin stolz erzählt. Ich bin Akustikerin und berate seit vielen Jahren Städte, die ihre Lärmaktionspläne aufstellen müssen, und ich bin heute hier, weil Ihre Stadt gerade einen solchen Plan erarbeitet. Ich will mit einer Behauptung beginnen, die vielen übertrieben vorkommt: Lärm ist eines der am stärksten unterschätzten Gesundheitsrisiken, die wir haben. Wir halten Lärm für eine Belästigung, für etwas Ärgerliches. Dass er krank machen kann, wird oft belächelt. Dabei arbeitet unser Gehör ununterbrochen, auch nachts. Die Augen können wir schließen, die Ohren nicht. Wenn nachts ein Lastwagen vorbeifährt, reagiert der Körper, auch wenn Sie nicht aufwachen. Der Puls steigt, Stresshormone werden ausgeschüttet. Am nächsten Morgen wissen Sie nichts davon, aber Ihr Körper hat eine unruhige Nacht hinter sich.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 1",
        "zeilen": [
         "Bürgerforum zum Lärmaktionsplan, Rednerin ist Akustikerin",
         "Detail: Nachts reagiert der Körper auf Lärm, auch im Schlaf"
        ],
        "feld": "Hauptpunkt 1:",
        "frei": true,
        "muster": "Lärm ist ein stark unterschätztes Gesundheitsrisiko",
        "loesungen": [
         "Lärm unterschätztes Gesundheitsrisiko",
         "Lärm macht krank",
         "Lärm als Gesundheitsrisiko",
         "Lärm ist mehr als Belästigung",
         "gesundheitliche Gefahr durch Lärm"
        ]
       },
       "stelle": "Lärm ist eines der am stärksten unterschätzten Gesundheitsrisiken",
       "erklaerung": "Die Rednerin kündigt eine „Behauptung“ an. Die Reaktion des Körpers im Schlaf ist das erste Detail.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 2",
       "wer": "Frau",
       "text": "Nun könnte man sagen, eine unruhige Nacht hat jeder mal. Das stimmt. Problematisch wird es, wenn sie zur Regel wird. Und für sehr viele Menschen, die an großen Straßen, an Bahnstrecken oder in den Einflugschneisen von Flughäfen wohnen, ist sie die Regel. Es gibt inzwischen eine ganze Reihe großer Studien dazu, mit Zehntausenden von Teilnehmern, und die Ergebnisse weisen alle in dieselbe Richtung. Wer über Jahre dauerhaftem Verkehrslärm ausgesetzt ist, hat ein deutlich erhöhtes Risiko für Bluthochdruck und für Herzkrankheiten, bis hin zum Herzinfarkt. Die Weltgesundheitsorganisation schätzt, dass in Westeuropa jedes Jahr über eine Million gesunde Lebensjahre durch Lärm verloren gehen. Ich gebe zu, das ist eine abstrakte Zahl. Lassen Sie es mich konkreter sagen. Ich habe vor einigen Jahren mit einer Frau gesprochen, die seit dreißig Jahren direkt an einer Bundesstraße wohnte. Sie sagte mir: Ich höre den Verkehr gar nicht mehr, ich habe mich daran gewöhnt. Das ist ein Satz, den ich oft höre, und er ist leider ein Irrtum. Das Bewusstsein gewöhnt sich, der Kreislauf gewöhnt sich nicht. Das ist vielleicht das Tückische am Lärm. Er schadet gerade dort, wo man ihn nicht mehr bemerkt.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 1, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 1: Lärm ist ein stark unterschätztes Gesundheitsrisiko",
         "Anwohnerin an einer Bundesstraße: „Ich habe mich daran gewöhnt“"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Dauerhafter Verkehrslärm erhöht das Risiko für Herzkrankheiten",
        "loesungen": [
         "höheres Risiko für Herzkrankheiten",
         "Verkehrslärm schadet Herz und Kreislauf",
         "Bluthochdruck und Herzinfarkt",
         "Dauerlärm erhöht Herzrisiko",
         "Kreislauf gewöhnt sich nicht"
        ]
       },
       "stelle": "ein deutlich erhöhtes Risiko für Bluthochdruck und für Herzkrankheiten",
       "erklaerung": "Die Gewöhnung betrifft nur das Bewusstsein. Der Körper leidet weiter.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 3",
       "wer": "Frau",
       "text": "Damit komme ich zum zweiten Punkt, und hier wird es für uns Fachleute ein wenig unbequem. Wir messen Lärm in Dezibel, und alle Grenzwerte in unseren Vorschriften sind in Dezibel angegeben. Das ist sinnvoll, man braucht eine Zahl. Aber die gemessene Lautstärke erklärt erstaunlich schlecht, was Menschen tatsächlich stört. Probieren Sie es selbst aus. Ein Springbrunnen auf einem Platz kann genauso laut sein wie eine stark befahrene Straße. Den Brunnen empfinden die meisten als angenehm, die Straße nicht. Oder denken Sie an Kinderlärm. Ein Kindergarten im Nachbarhaus erreicht am Vormittag durchaus Werte, die bei einer Fabrik schon zu Beschwerden führen würden. Manche Nachbarn stört das sehr, andere sagen, sie hören die Kinder gern. Die Messgeräte zeigen in beiden Fällen dasselbe. Und ich darf Ihnen verraten, dass Beschwerden über Kindergärten zu den hartnäckigsten gehören, mit denen Städte zu tun haben. Wir haben in einem Projekt einmal Anwohner gebeten, eine Woche lang aufzuschreiben, wann sie sich durch Geräusche gestört fühlten, und gleichzeitig gemessen. Die Übereinstimmung zwischen den lautesten Momenten und den Momenten, die als störend notiert wurden, war, vorsichtig gesagt, bescheiden. Gleich laute Geräusche werden also ganz verschieden empfunden. Bleibt die Frage, warum.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 2",
        "zeilen": [
         "Beispiele: Springbrunnen und Straße, Kindergarten",
         "Detail: Gleich laute Geräusche werden ganz verschieden empfunden"
        ],
        "feld": "Hauptpunkt 2:",
        "frei": true,
        "muster": "Die gemessene Lautstärke erklärt nicht, was Menschen stört",
        "loesungen": [
         "Lautstärke erklärt Störung nicht",
         "Dezibel sagen wenig über Belästigung",
         "Messwerte und Empfinden passen nicht zusammen",
         "Lautstärke allein erklärt die Störung nicht",
         "Messung erklärt Empfinden schlecht"
        ]
       },
       "stelle": "die gemessene Lautstärke erklärt erstaunlich schlecht, was Menschen tatsächlich stört",
       "erklaerung": "„Damit komme ich zum zweiten Punkt“ leitet die These ein, Brunnen und Kindergarten sind Belege.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 4",
       "wer": "Frau",
       "text": "Die Forschung hat darauf inzwischen recht gute Antworten. Zwei Faktoren spielen eine besonders große Rolle, und ich nenne sie Kontrolle und Bedeutung. Zuerst zur Kontrolle. Ein Geräusch, das ich selbst verursache oder beenden kann, stört mich viel weniger als eines, dem ich ausgeliefert bin. Ihr eigener Rasenmäher kommt Ihnen leiser vor als der Ihres Nachbarn, auch wenn er in Wahrheit lauter ist. Das ist keine Einbildung im abwertenden Sinn, das ist Psychologie. Wir kennen das alle von Musik. Die eigene Lieblingsmusik ist nie zu laut, die des Nachbarn fast immer. Und dann die Bedeutung. Wir hören nie bloß Schall, wir hören immer auch, was er bedeutet. Wenn ich ein Flugzeug höre und weiß, dass der Flughafen gerade gegen den Willen der Anwohner erweitert wurde, dann höre ich in jedem Flugzeug auch diese Niederlage. Untersuchungen an Flughäfen haben gezeigt, dass die Belästigung nach einer Erweiterung stärker steigt, als es die zusätzlichen Flüge allein erklären würden. Für die Planung heißt das übrigens etwas sehr Praktisches. Wer die Menschen früh beteiligt, ihnen erklärt, was passiert, und ihnen echte Mitsprache gibt, der verringert die Belästigung, ohne dass dafür ein einziges Dezibel weniger gemessen werden muss.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 2, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 2: Die gemessene Lautstärke erklärt nicht, was Menschen stört",
         "Beispiele: eigener Rasenmäher, Flughafenerweiterung"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Kontrolle und Bedeutung bestimmen, wie sehr Lärm stört",
        "loesungen": [
         "Kontrolle und Bedeutung",
         "Kontrolle über das Geräusch und seine Bedeutung",
         "zwei Faktoren: Kontrolle, Bedeutung",
         "Ausgeliefertsein und Bedeutung",
         "Belästigung hängt von Kontrolle und Bedeutung ab"
        ]
       },
       "stelle": "ich nenne sie Kontrolle und Bedeutung",
       "erklaerung": "Zwei Faktoren werden angekündigt und dann nacheinander erklärt.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 5",
       "wer": "Frau",
       "text": "Jetzt könnten Sie sagen: Gut, dann ist das Ziel eben möglichst viel Stille. Und hier möchte ich Ihnen widersprechen, das ist mein dritter Punkt. Absolute Stille ist weder möglich noch wünschenswert. Ich habe in meinem Studium einmal eine halbe Stunde in einem sogenannten schalltoten Raum verbracht. Das ist ein Raum, dessen Wände, Decke und Boden so verkleidet sind, dass kein Schall zurückgeworfen wird. Sie werden vielleicht denken: herrlich, endlich Ruhe. Es war das Gegenteil. Nach ein paar Minuten hörte ich meinen eigenen Herzschlag, dann das Rauschen meines Blutes, dann ein leises Pfeifen, von dem ich bis heute nicht weiß, woher es kam. Ich hatte das Gefühl, das Gleichgewicht zu verlieren, und war, ehrlich gesagt, sehr froh, als die schwere Tür wieder aufging. Die meisten Menschen halten es in so einem Raum nicht lange aus. In einem solchen Labor in Amerika soll der Rekord bei unter einer Stunde liegen, wobei ich nicht weiß, wer so etwas eigentlich misst. Unser Gehör ist dafür gemacht, die Umgebung zu überwachen, und wenn die Umgebung nichts mehr meldet, wird das Gehirn unruhig. Wir brauchen also nicht die Abwesenheit von Geräuschen. Was wir suchen, wenn wir von Stille sprechen, ist etwas anderes.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 3",
        "zeilen": [
         "eigene Erfahrung: halbe Stunde im schalltoten Raum",
         "Detail: Ein schalltoter Raum wird schnell unerträglich"
        ],
        "feld": "Hauptpunkt 3:",
        "frei": true,
        "muster": "Absolute Stille ist weder möglich noch wünschenswert",
        "loesungen": [
         "absolute Stille nicht möglich und nicht wünschenswert",
         "Stille nicht das Ziel",
         "völlige Stille ist unerträglich",
         "keine absolute Stille",
         "Stille weder möglich noch erwünscht"
        ]
       },
       "stelle": "Absolute Stille ist weder möglich noch wünschenswert",
       "erklaerung": "Die Rednerin widerspricht einem möglichen Einwand des Publikums und belegt das mit eigener Erfahrung.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 6",
       "wer": "Frau",
       "text": "Wenn Menschen in unseren Befragungen beschreiben, wo sie Ruhe finden, dann nennen sie fast nie Orte, an denen nichts zu hören ist. Sie nennen einen Park, in dem Vögel singen, ein Ufer, an dem Wasser plätschert, einen Friedhof mit alten Bäumen, durch die der Wind geht. An all diesen Orten ist es gar nicht so leise. Ein Bach kann erstaunlich laut sein. Wenn Sie mit einem Messgerät an einen Wasserfall gehen, kommen Sie auf Werte wie an einer Bundesstraße. Aber die Geräusche sind angenehm, sie sind natürlich, und vor allem verlangen sie nichts von uns. Niemand will etwas von mir, wenn ein Bach rauscht. Ruhe heißt also nicht, dass es still ist, sondern dass keine Geräusche da sind, die unsere Aufmerksamkeit erzwingen. Das Ziel der Planung ist deshalb nicht ein Ort ohne Geräusche, sondern ein Ort mit den richtigen Geräuschen. Ein Kollege aus den Niederlanden hat an einer viel befahrenen Straße eine Wand gebaut, die abschirmt und an der zugleich Wasser herunterläuft. Die Messwerte hinter der Wand haben sich kaum verändert. Die Zufriedenheit der Anwohner aber sehr. Das Rauschen des Wassers überdeckt das Rauschen des Verkehrs, und es ist eben ein freundlicheres Rauschen.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 3, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 3: Absolute Stille ist weder möglich noch wünschenswert",
         "Beispiel: Wasserwand an einer Straße in den Niederlanden"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Ziel sind ruhige Orte mit angenehmen Geräuschen",
        "loesungen": [
         "ruhige Orte mit angenehmen Geräuschen",
         "richtige Geräusche statt keine",
         "Ruhe heißt angenehme Geräusche",
         "natürliche Geräusche statt Stille",
         "Orte mit den richtigen Geräuschen"
        ]
       },
       "stelle": "nicht ein Ort ohne Geräusche, sondern ein Ort mit den richtigen Geräuschen",
       "erklaerung": "Ruhe bedeutet hier: keine Geräusche, die Aufmerksamkeit erzwingen. Die Wasserwand ist das Beispiel.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 7",
       "wer": "Frau",
       "text": "Kommen wir zu Ihrer Stadt und zu der Frage, was Planung konkret tun kann. Ich will mich auf zwei Maßnahmen beschränken, die wir in vielen Städten geprüft haben. Die erste ist unspektakulär und wird trotzdem immer wieder heftig umkämpft, nämlich Tempo dreißig in der Nacht auf Hauptstraßen, an denen viele Menschen wohnen. Wenn ein Auto statt fünfzig nur dreißig fährt, sinkt der Lärm um etwa zwei bis drei Dezibel. Das klingt nach wenig, ich weiß. Aber drei Dezibel weniger entsprechen ungefähr dem, was man erreichen würde, wenn man den Verkehr halbiert. Und nachts kommt noch etwas hinzu. Es sind vor allem die einzelnen lauten Ereignisse, die uns wecken, also das beschleunigende Motorrad oder der Lieferwagen, der über eine Kante rumpelt. Bei geringerer Geschwindigkeit werden diese Spitzen deutlich seltener. Und genau diese Spitzen spürt man am nächsten Morgen. Ich weiß, dass es in Ihrer Stadt dazu gerade eine Debatte gibt. Ich will mich da nicht einmischen, ich bin ja nicht gewählt. Aber ich kann Ihnen sagen, dass die Fahrzeit auf einer typischen Strecke von zwei Kilometern nachts um weniger als eine Minute steigt. Das sollte man gegen eine Nacht ohne Aufwachen abwägen.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 4",
        "zeilen": [
         "Fahrzeit auf zwei Kilometern: weniger als eine Minute länger",
         "Detail: Nachts Tempo dreißig senkt den Lärm und laute Spitzen"
        ],
        "feld": "Hauptpunkt 4:",
        "frei": true,
        "muster": "Konkrete Maßnahmen der Stadtplanung gegen Lärm",
        "loesungen": [
         "Maßnahmen der Stadtplanung",
         "was Planung tun kann",
         "konkrete Maßnahmen gegen Lärm",
         "zwei Maßnahmen der Planung",
         "Lärmschutz durch Stadtplanung"
        ]
       },
       "stelle": "was Planung konkret tun kann",
       "erklaerung": "Die Rednerin kündigt „zwei Maßnahmen“ an. Tempo dreißig ist die erste und damit ein Detail.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 8",
       "wer": "Frau",
       "text": "Die zweite Maßnahme betrifft die Art, wie wir bauen. Man kann eine laute Straße nicht immer leiser machen. Man kann aber dafür sorgen, dass jede Wohnung eine ruhige Seite hat. Das ist ein Gedanke, der in Skandinavien schon lange zur Planung gehört und bei uns erst langsam ankommt. In Stockholm zum Beispiel ist es seit Jahren üblich, Baugenehmigungen an eine solche ruhige Seite zu knüpfen. Wenn Häuser geschlossen an der Straße stehen, also als durchgehende Zeile, dann schirmen sie den Lärm ab, und dahinter entsteht ein ruhiger Hof. Wenn man die Wohnungen dann so schneidet, dass die Schlafzimmer zum Hof liegen und die Küche oder das Treppenhaus zur Straße, dann ist für den Schlaf schon sehr viel gewonnen. Untersuchungen aus Schweden zeigen, dass Menschen mit einer solchen ruhigen Seite deutlich weniger über Lärm klagen, selbst wenn die Straßenseite sehr laut ist. Ich habe in Ihrer Stadt gestern einen Spaziergang gemacht und mehrere Neubauten gesehen, bei denen die Schlafzimmer zur Hauptstraße zeigen und die Balkone zum stillen Hof. Ich verstehe, warum man das macht, die Balkone sollen ja schön liegen. Aber die Nacht dauert nun einmal länger als der Feierabend auf dem Balkon.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 4, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 4: Konkrete Maßnahmen der Stadtplanung gegen Lärm",
         "Untersuchungen aus Schweden, Neubauten in der Stadt als Gegenbeispiel"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Gebäude so planen, dass jede Wohnung eine ruhige Seite hat",
        "loesungen": [
         "jede Wohnung eine ruhige Seite",
         "ruhige Seite für jede Wohnung",
         "Schlafzimmer zum Hof",
         "geschlossene Bauweise mit ruhigem Hof",
         "Bauweise mit ruhiger Rückseite"
        ]
       },
       "stelle": "dass jede Wohnung eine ruhige Seite hat",
       "erklaerung": "Die Neubauten mit Schlafzimmern zur Straße sind ein Gegenbeispiel, keine Empfehlung.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 9",
       "wer": "Frau",
       "text": "Mein letzter Punkt ist mir besonders wichtig. Wir reden beim Lärm fast immer nur darüber, wie wir die lauten Orte leiser machen. Mindestens genauso wichtig ist es, die ruhigen Orte zu schützen und sie für alle zugänglich zu machen. Das klingt selbstverständlich, wird aber selten getan. Ruhige Orte verschwinden nämlich leise, wenn Sie mir das Wortspiel erlauben. Ein Park bekommt eine neue Straße am Rand, ein stilles Ufer wird zur Partymeile, ein Friedhof wird von einer Umgehungsstraße angeschnitten. Jede einzelne Entscheidung hat gute Gründe. Und keine einzelne macht den Ort kaputt. Es ist die Summe. Aber am Ende hat die Stadt keinen Ort mehr, an dem man eine halbe Stunde lang kein Motorengeräusch hört. Die Vorschriften erlauben es inzwischen, solche Orte in den Lärmaktionsplänen als ruhige Gebiete festzulegen. Einige Städte haben deshalb begonnen, ihre ruhigen Inseln systematisch zu erfassen und in Karten zu verzeichnen, oft gemeinsam mit den Bewohnern, die ihre Lieblingsorte melden. Das hat einen doppelten Nutzen. Die Orte sind dann bei jeder Planung sichtbar und schwerer zu opfern. Und viele Menschen erfahren überhaupt erst, dass es in ihrer Nähe einen solchen Ort gibt.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 5",
        "zeilen": [
         "ruhige Orte verschwinden: Park, Ufer, Friedhof",
         "Detail: Ruhige Inseln erfassen und in Karten verzeichnen"
        ],
        "feld": "Hauptpunkt 5:",
        "frei": true,
        "muster": "Ruhige Orte schützen und für alle zugänglich machen",
        "loesungen": [
         "ruhige Orte schützen",
         "ruhige Orte schützen und zugänglich machen",
         "Schutz ruhiger Orte",
         "ruhige Gebiete erhalten",
         "stille Orte für alle"
        ]
       },
       "stelle": "die ruhigen Orte zu schützen und sie für alle zugänglich zu machen",
       "erklaerung": "„Mein letzter Punkt“ kündigt den Hauptpunkt an. Die Karten sind die erste konkrete Maßnahme dazu.",
       "frage": "Ergänze deine Notiz."
      },
      {
       "ort": "Vortrag, Abschnitt 10",
       "wer": "Frau",
       "text": "Und damit komme ich zu einer letzten Beobachtung, über die man in Bürgerforen nicht so gern spricht. Lärm ist ungleich verteilt. In fast allen Städten, deren Daten ich kenne, wohnen Menschen mit geringem Einkommen deutlich häufiger an den lauten Straßen. Das ist kein Zufall. Wohnungen an lauten Straßen sind billiger, und wer es sich leisten kann, zieht weg. Zurück bleiben die, die keine Wahl haben. Dazu kommt, dass gerade diese Menschen seltener einen Garten haben, seltener ein Wochenendhaus, seltener Zeit und Geld, um am Wochenende aufs Land zu fahren. Die ruhigen Orte in der Stadt sind für sie also noch wichtiger als für andere, und sie liegen oft weiter weg. Wenn Ihre Stadt ihren Lärmaktionsplan aufstellt, dann bitte ich Sie, darauf zu achten. Fragen Sie dabei, wo es am lautesten ist, und fragen Sie auch, wer dort wohnt und wie weit es von dort bis zum nächsten ruhigen Ort ist. Ich danke Ihnen für Ihre Aufmerksamkeit. Und jetzt dürfen Sie auch gern wieder mit dem Bonbonpapier rascheln, ich freue mich auf Ihre Fragen.",
       "notiz": {
        "titel": "Notizzettel: Gliederungspunkt 5, weiteres Detail",
        "zeilen": [
         "Hauptpunkt 5: Ruhige Orte schützen und für alle zugänglich machen",
         "Bitte an die Stadt: auch fragen, wer an lauten Straßen wohnt"
        ],
        "feld": "Detail:",
        "frei": true,
        "muster": "Menschen mit wenig Geld wohnen häufiger an lauten Straßen",
        "loesungen": [
         "Ärmere wohnen an lauten Straßen",
         "Lärm ist ungleich verteilt",
         "geringes Einkommen, mehr Lärm",
         "soziale Ungleichheit beim Lärm",
         "arme Menschen wohnen lauter"
        ]
       },
       "stelle": "wohnen Menschen mit geringem Einkommen deutlich häufiger an den lauten Straßen",
       "erklaerung": "Daraus folgt, dass ruhige Orte für diese Menschen besonders wichtig sind.",
       "frage": "Ergänze deine Notiz."
      }
     ]
    }
   ]
  }
 ]
};
