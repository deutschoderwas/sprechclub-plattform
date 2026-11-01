/* ============================================================
   deutschoderwas club — SCHREIBEN telc Deutsch B1

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 Zertifikat
   Deutsch, geprüft 01.11.2026): 30 Minuten, eine E-Mail als Antwort
   auf eine erhaltene Mail, vier Leitpunkte, keine Wahl.

   Bewertung (telc=true, max=45): I Aufgabenbewältigung (Leitpunkte),
   II Kommunikative Gestaltung, III Formale Richtigkeit — je A=5,
   B=3, C=1, D=0, Summe mal drei. pruefung-schreiben.js zeigt dafür
   einen eigenen Selbstcheck, api/ai-schreiben.js (schema telc_b1)
   bewertet genauso.

   eingang = die E-Mail, auf die man antwortet. Alle Texte eigene.
   ============================================================ */

window.SCHREIBEN_TELC_B1 = {
 "niveau": "telcB1",
 "pruefung": "telc Deutsch B1",
 "minuten": 30,
 "punkte": 45,
 "intro": "Bei telc B1 schreibst du eine einzige E-Mail: eine Antwort auf eine Mail, die du bekommen hast — informell oder halbformell. Vier Leitpunkte müssen drin sein. Bewertet wird nach drei Kriterien (Leitpunkte, Gestaltung, Richtigkeit), je A bis D, zusammen höchstens 45 Punkte. Wir bauen es in vier Stufen auf: erst Anrede, Einleitung und Schluss, dann das Verbinden der Punkte, dann beide E-Mail-Arten, zuletzt eine E-Mail mit Uhr — 30 Minuten wie am Prüfungstag.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Der Rahmen",
   "zeichen": "🖼️",
   "was": "Betreff, Anrede, Einleitung, Schluss und Gruß — passend zu du oder Sie."
  },
  {
   "nr": 2,
   "titel": "Die vier Punkte",
   "zeichen": "🧩",
   "was": "Leitpunkte wirklich behandeln und gut verbinden."
  },
  {
   "nr": 3,
   "titel": "Die zwei E-Mail-Arten",
   "zeichen": "✉️",
   "was": "Informell und halbformell — mit Musterlösung und Bewertung nach telc."
  },
  {
   "nr": 4,
   "titel": "Die Prüfung",
   "zeichen": "⏱️",
   "was": "Eine E-Mail, 30 Minuten mit Uhr, Bewertung bis 45 Punkte."
  }
 ],
 "bloecke": [
  {
   "id": "tb1s1",
   "stufe": 1,
   "titel": "Betreff, Anrede, Gruß",
   "kurz": "Informell oder halbformell? Der Rahmen entscheidet über den Ton",
   "ziel": "Nach diesem Block weißt du sofort, wie du antwortest — an die Freundin genauso wie an die Hausverwaltung.",
   "zeichen": "✉️",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Du antwortest auf eine E-Mail mit dem Betreff „Grillfest am Samstag\". Welcher Betreff passt?",
     "opt": [
      "Antwort",
      "AW: Grillfest am Samstag",
      "Hallo!"
     ],
     "loesung": 1,
     "erklaerung": "Bei einer Antwort übernimmst du den Betreff mit „AW:\" — so weiß jeder sofort, worum es geht."
    },
    {
     "art": "wahl",
     "frage": "Deine Vermieterin, Frau Hoffmann, hat dir geschrieben. Ihr siezt euch, kennt euch aber gut. Welche Anrede passt?",
     "opt": [
      "Liebe Frau Hoffmann,",
      "Hallo Hoffmann,",
      "Liebe Ingrid,"
     ],
     "loesung": 0,
     "erklaerung": "„Liebe Frau\" plus Nachname ist freundlich und trotzdem respektvoll — typisch für halbformelle E-Mails."
    },
    {
     "art": "wahl",
     "frage": "Du schreibst an den Verein und kennst den Namen der Person nicht.",
     "opt": [
      "Liebe Leute,",
      "Sehr geehrte Damen und Herren,",
      "Hallo Verein,"
     ],
     "loesung": 1,
     "erklaerung": "Ohne Namen bleibt nur die neutrale Standardform."
    },
    {
     "art": "wahl",
     "frage": "Dein Kursleiter heißt Herr Brandt. Welche Anrede ist halbformell richtig?",
     "opt": [
      "Sehr geehrter Herr Brandt,",
      "Lieber Brandt,",
      "Hi Herr Brandt!"
     ],
     "loesung": 0,
     "erklaerung": "„Sehr geehrter Herr Brandt\" ist immer sicher. „Lieber Brandt\" ohne „Herr\" klingt unhöflich."
    },
    {
     "art": "wahl",
     "frage": "Deine Schwester hat dir gemailt. Welcher Gruß passt am Ende?",
     "opt": [
      "Mit freundlichen Grüßen",
      "Hochachtungsvoll",
      "Viele liebe Grüße"
     ],
     "loesung": 2,
     "erklaerung": "In der Familie schreibst du locker: „Liebe Grüße\", „Viele liebe Grüße\", „Bis bald\"."
    },
    {
     "art": "wahl",
     "frage": "Welcher Gruß passt zu „Liebe Frau Hoffmann,\"?",
     "opt": [
      "Viele Grüße",
      "Tschüss",
      "Hochachtungsvoll"
     ],
     "loesung": 0,
     "erklaerung": "„Viele Grüße\" oder „Freundliche Grüße\" passt zur halbformellen Anrede. „Tschüss\" ist zu locker."
    },
    {
     "art": "wahl",
     "frage": "Du hast mit „Sehr geehrte Frau Yilmaz,\" begonnen. Was passt im Text?",
     "opt": [
      "Kannst du mir sagen, wann ich anfangen soll?",
      "Können Sie mir sagen, wann ich anfangen soll?",
      "Könnt ihr mir sagen, wann ich anfangen soll?"
     ],
     "loesung": 1,
     "erklaerung": "Wer mit „Sehr geehrte\" beginnt, bleibt bis zum Schluss beim „Sie\" — ein Wechsel kostet Punkte."
    },
    {
     "art": "wahl",
     "frage": "Dein Freund Jonas schreibt dir. Wie unterschreibst du?",
     "opt": [
      "Dein Ali",
      "Ali Demir, Mieter",
      "Mit freundlichen Grüßen Herr Demir"
     ],
     "loesung": 0,
     "erklaerung": "Unter einer privaten E-Mail reicht „Dein/Deine\" plus Vorname."
    },
    {
     "art": "wahl",
     "frage": "Wie schreibst du unter eine E-Mail an die Hausverwaltung deinen Namen?",
     "opt": [
      "Nur den Vornamen.",
      "Vor- und Nachnamen.",
      "Gar keinen Namen."
     ],
     "loesung": 1,
     "erklaerung": "Halbformell unterschreibst du mit vollem Namen — die Hausverwaltung kennt viele Mieter."
    },
    {
     "art": "wahl",
     "frage": "Welche Regel stimmt für „Sie\" und „Ihnen\" in einer E-Mail an die Kursleitung?",
     "opt": [
      "Immer großschreiben.",
      "Immer kleinschreiben.",
      "Nur am Satzanfang groß."
     ],
     "loesung": 0,
     "erklaerung": "Die Höflichkeitsform schreibt man immer groß: Sie, Ihnen, Ihr."
    }
   ]
  },
  {
   "id": "tb1s2",
   "stufe": 1,
   "titel": "Einleitung und Schluss",
   "kurz": "Der erste Satz zeigt, dass du die E-Mail gelesen hast",
   "ziel": "Nach diesem Block beginnst du jede Antwort mit einem klaren Bezug und beendest sie rund.",
   "zeichen": "🚪",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Du antwortest deiner Freundin Marianne. Welcher erste Satz passt am besten?",
     "opt": [
      "vielen Dank für deine Mail, ich habe mich sehr darüber gefreut!",
      "Ich schreibe Ihnen wegen Ihrer Anfrage.",
      "Ich heiße Clara und bin 32 Jahre alt."
     ],
     "loesung": 0,
     "erklaerung": "Ein Dank für die Mail ist der perfekte Bezug — und klein weiter nach der Anrede."
    },
    {
     "art": "wahl",
     "frage": "Du antwortest der Hausverwaltung. Welcher Einstieg passt?",
     "opt": [
      "na, wie geht’s?",
      "vielen Dank für Ihre E-Mail vom 3. März.",
      "Hier ist meine Antwort."
     ],
     "loesung": 1,
     "erklaerung": "Der Dank mit Datum zeigt halbformell und klar, auf welche E-Mail du antwortest."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz nennt den Grund deiner E-Mail an die Kursleitung?",
     "opt": [
      "Ich schreibe Ihnen, weil ich eine Frage zum neuen Kursplan habe.",
      "Ich schreibe, weil.",
      "Frage zum Kurs!"
     ],
     "loesung": 0,
     "erklaerung": "„Ich schreibe Ihnen, weil …\" sagt sofort, worum es geht — ein vollständiger Satz mit Verb am Ende."
    },
    {
     "art": "wahl",
     "frage": "Dein Bruder hat dich um Hilfe gebeten. Welcher Einstieg reagiert direkt darauf?",
     "opt": [
      "Natürlich helfe ich dir beim Umzug, das ist doch klar!",
      "Sehr geehrter Bruder,",
      "Ich hoffe, das Wetter ist gut."
     ],
     "loesung": 0,
     "erklaerung": "Gleich auf die Bitte reagieren wirkt natürlich und zeigt, dass du die Mail verstanden hast."
    },
    {
     "art": "wahl",
     "frage": "Welcher Einstieg passt, wenn du eine Einladung absagen musst?",
     "opt": [
      "Leider habe ich keine Zeit, tschüss.",
      "Vielen Dank für die schöne Einladung — leider muss ich dir absagen.",
      "Ich komme nicht."
     ],
     "loesung": 1,
     "erklaerung": "Erst danken, dann absagen — so bleibt die Absage freundlich."
    },
    {
     "art": "wahl",
     "frage": "Welcher Schlusssatz passt in eine private E-Mail?",
     "opt": [
      "Ich freue mich schon auf deine Antwort!",
      "Ich bitte um baldige Rückmeldung.",
      "Hochachtungsvoll verbleibe ich."
     ],
     "loesung": 0,
     "erklaerung": "Locker, aber vollständig — so endet eine Mail an Freunde."
    },
    {
     "art": "wahl",
     "frage": "Welcher Schlusssatz passt an die Vermieterin?",
     "opt": [
      "Meld dich!",
      "Ich freue mich auf Ihre Antwort.",
      "Bis dann, Süße!"
     ],
     "loesung": 1,
     "erklaerung": "„Ich freue mich auf Ihre Antwort\" ist der Klassiker für halbformelle E-Mails."
    },
    {
     "art": "wahl",
     "frage": "Was ist ein guter Schluss, wenn du noch etwas offen lässt?",
     "opt": [
      "Wenn Sie noch Fragen haben, können Sie mich gern anrufen.",
      "Schluss.",
      "Das war alles."
     ],
     "loesung": 0,
     "erklaerung": "Ein Angebot zum Weiterreden rundet die E-Mail höflich ab."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Einleitungssatz.",
     "teile": [
      "Ich",
      "schreibe",
      "Ihnen,",
      "weil",
      "ich",
      "den Kurs",
      "wechseln",
      "möchte"
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
     "erklaerung": "Im weil-Satz stehen beide Verben am Ende, das gebeugte ganz hinten: … wechseln möchte."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Schlusssatz für eine private E-Mail.",
     "teile": [
      "Ich",
      "freue",
      "mich",
      "schon",
      "sehr",
      "auf",
      "deinen",
      "Besuch"
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
     "erklaerung": "„sich freuen auf\" plus Akkusativ — ein Satz, der in fast jede private Antwort passt."
    }
   ]
  },
  {
   "id": "tb1s3",
   "stufe": 2,
   "titel": "Leitpunkte verbinden",
   "kurz": "außerdem, deshalb, trotzdem, weil, zum Schluss",
   "ziel": "Nach diesem Block klingen deine vier Punkte wie ein Text — nicht wie eine Liste.",
   "zeichen": "🔗",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Du kommst zum nächsten Punkt und fügst etwas hinzu. „Ich bringe Salat mit. ___ kann ich Getränke kaufen.\"",
     "opt": [
      "Außerdem",
      "Trotzdem",
      "Weil"
     ],
     "loesung": 0,
     "erklaerung": "„außerdem\" fügt einen weiteren Punkt hinzu — ideal, um zum nächsten Leitpunkt zu gehen."
    },
    {
     "art": "wahl",
     "frage": "„Ich muss am Samstag arbeiten. ___ kann ich leider nicht zur Hochzeit kommen.\"",
     "opt": [
      "Obwohl",
      "Deshalb",
      "Außerdem"
     ],
     "loesung": 1,
     "erklaerung": "„deshalb\" zeigt die Folge. Danach steht sofort das Verb."
    },
    {
     "art": "wahl",
     "frage": "„Die Wohnung ist klein. ___ kannst du gern bei mir schlafen.\"",
     "opt": [
      "Trotzdem",
      "Deshalb",
      "Weil"
     ],
     "loesung": 0,
     "erklaerung": "„trotzdem\" zeigt einen Gegensatz: klein, aber es geht."
    },
    {
     "art": "wahl",
     "frage": "„Ich kann den Kurs am Abend nicht besuchen, ___ ich bis neunzehn Uhr arbeite.\"",
     "opt": [
      "deshalb",
      "weil",
      "trotzdem"
     ],
     "loesung": 1,
     "erklaerung": "„weil\" nennt den Grund. Das Verb geht ans Ende: … arbeite."
    },
    {
     "art": "wahl",
     "frage": "Womit leitest du den letzten Leitpunkt ein?",
     "opt": [
      "Zuerst",
      "Zum Schluss",
      "Erstens"
     ],
     "loesung": 1,
     "erklaerung": "„Zum Schluss\" oder „Zuletzt\" zeigt dem Leser: Jetzt kommt der letzte Punkt."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz verbindet zwei Leitpunkte am besten?",
     "opt": [
      "Ich komme am Freitag. Ich habe ein Auto.",
      "Ich komme schon am Freitag, und weil ich ein Auto habe, kann ich Kartons mitbringen.",
      "Freitag. Auto. Kartons."
     ],
     "loesung": 1,
     "erklaerung": "Mit „und\" und „weil\" werden aus zwei Punkten ein zusammenhängender Gedanke."
    },
    {
     "art": "wahl",
     "frage": "Du willst zu einer Frage überleiten. Was passt halbformell?",
     "opt": [
      "Noch eine Frage zum Schluss: Gibt es einen Parkplatz?",
      "Parkplatz???",
      "Und? Parkplatz?"
     ],
     "loesung": 0,
     "erklaerung": "Eine kurze Überleitung macht die Frage höflich und klar."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „deshalb\".",
     "teile": [
      "Mein Sohn",
      "hat",
      "eine Nussallergie,",
      "deshalb",
      "darf",
      "er",
      "keinen Kuchen",
      "essen"
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
     "erklaerung": "Nach „deshalb\" kommt sofort das Verb, das zweite Verb steht am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „trotzdem\".",
     "teile": [
      "Ich",
      "habe",
      "wenig Zeit,",
      "trotzdem",
      "helfe",
      "ich",
      "gern",
      "beim Fest"
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
     "erklaerung": "„trotzdem\" steht auf Position eins, dann Verb, dann Subjekt."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „außerdem\".",
     "teile": [
      "Außerdem",
      "könnten",
      "Sie",
      "mir",
      "die Unterlagen",
      "per E-Mail",
      "schicken"
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
     "erklaerung": "„Außerdem\" am Anfang, dann das Verb — und „schicken\" ganz ans Ende."
    }
   ]
  },
  {
   "id": "tb1s4",
   "stufe": 2,
   "titel": "Alle vier Punkte drin?",
   "kurz": "Erwähnt ist nicht behandelt",
   "ziel": "Nach diesem Block prüfst du selbst, ob ein Satz den Leitpunkt wirklich erfüllt — so holst du die volle Punktzahl.",
   "zeichen": "✅",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Leitpunkt: „Schlag vor, was ihr zusammen unternehmt.\" Satz: „Am Samstag könnten wir zum See fahren und abends grillen.\"",
     "opt": [
      "Punkt behandelt.",
      "Nur erwähnt, nicht behandelt.",
      "Falsches Register."
     ],
     "loesung": 0,
     "erklaerung": "Ein konkreter Vorschlag mit Tag und Aktivität — genau das verlangt der Punkt."
    },
    {
     "art": "wahl",
     "frage": "Leitpunkt: „Nenne einen Termin für den Handwerker.\" Satz: „Wegen des Termins für den Handwerker melde ich mich noch.\"",
     "opt": [
      "Punkt behandelt.",
      "Nur erwähnt, kein Termin genannt.",
      "Falsche Person angeredet."
     ],
     "loesung": 1,
     "erklaerung": "Das Wort „Termin\" steht da, aber kein Tag, keine Uhrzeit. Der Punkt ist nicht erfüllt."
    },
    {
     "art": "wahl",
     "frage": "Antwort an die Vermieterin. Leitpunkt: „Bedanke dich.\" Satz: „Danke dir, du bist echt super!\"",
     "opt": [
      "Punkt behandelt, alles gut.",
      "Inhalt ok, aber Register gewechselt: „du\" an die Vermieterin.",
      "Punkt fehlt ganz."
     ],
     "loesung": 1,
     "erklaerung": "Der Dank ist da, aber halbformell muss es „Vielen Dank, das ist sehr freundlich von Ihnen\" heißen."
    },
    {
     "art": "wahl",
     "frage": "Antwort an die Freundin Sophie. Leitpunkt: „Gratuliere zur Hochzeit.\" Satz: „Ich gratuliere deinem Verlobten herzlich zu seiner neuen Stelle.\"",
     "opt": [
      "Punkt behandelt.",
      "Falsche Person und falscher Anlass — Sophie und die Hochzeit fehlen.",
      "Nur zu kurz."
     ],
     "loesung": 1,
     "erklaerung": "Der Satz gratuliert jemand anderem zu etwas anderem. Der Leitpunkt zählt nicht."
    },
    {
     "art": "wahl",
     "frage": "Leitpunkt: „Erkläre, warum du den Kurs wechseln möchtest.\" Satz: „Ich möchte wechseln, weil ich ab Mai im Schichtdienst arbeite und abends nicht kommen kann.\"",
     "opt": [
      "Punkt behandelt.",
      "Nur erwähnt.",
      "Falsches Register."
     ],
     "loesung": 0,
     "erklaerung": "Ein klarer Grund mit Erklärung — so wird ein Leitpunkt voll erfüllt."
    },
    {
     "art": "wahl",
     "frage": "Leitpunkt: „Frag nach den Arbeitszeiten im Praktikum.\" Satz: „Die Arbeitszeiten sind mir wichtig.\"",
     "opt": [
      "Punkt behandelt.",
      "Keine Frage gestellt — nur das Thema erwähnt.",
      "Falsche Person angeredet."
     ],
     "loesung": 1,
     "erklaerung": "Der Leitpunkt verlangt eine Frage: „Könnten Sie mir sagen, wann ich morgens anfange?\""
    },
    {
     "art": "wahl",
     "frage": "Antwort an die Hausverwaltung. Leitpunkt: „Mach einen Vorschlag.\" Satz: „Vielleicht könnte man im Hof einen Fahrradständer aufstellen?\"",
     "opt": [
      "Punkt behandelt.",
      "Nur erwähnt.",
      "Falsches Register."
     ],
     "loesung": 0,
     "erklaerung": "Ein konkreter, höflicher Vorschlag — „könnte\" macht ihn genau richtig."
    },
    {
     "art": "wahl",
     "frage": "Antwort an Tante Renate. Leitpunkt: „Schreib, was sie bei den Kindern beachten muss.\" Satz: „Bitte beachten Sie, dass die Kinder um acht Uhr ins Bett gehen.\"",
     "opt": [
      "Punkt behandelt, alles gut.",
      "Inhalt ok, aber Register falsch: „Sie\" an die Tante.",
      "Punkt fehlt."
     ],
     "loesung": 1,
     "erklaerung": "Die Familie duzt man. Richtig wäre: „Bitte denk daran, dass die Kinder um acht ins Bett gehen.\""
    },
    {
     "art": "wahl",
     "frage": "Leitpunkt: „Sag, was du zum Fest mitbringst.\" Satz: „Beim Fest wird es bestimmt viel zu essen geben.\"",
     "opt": [
      "Punkt behandelt.",
      "Thema getroffen, aber du sagst nicht, was du mitbringst.",
      "Falsches Register."
     ],
     "loesung": 1,
     "erklaerung": "Der Satz redet über Essen allgemein. Gefragt ist dein Beitrag: „Ich bringe einen Apfelkuchen mit.\""
    },
    {
     "art": "wahl",
     "frage": "Antwort an Herrn Brandt, Kursleiter. Leitpunkt: „Frag nach den Kosten.\" Satz: „Herr Brandt, was kostet der neue Kurs eigentlich, und muss ich die Differenz bezahlen?\"",
     "opt": [
      "Punkt behandelt.",
      "Nur erwähnt.",
      "Falsche Person angeredet."
     ],
     "loesung": 0,
     "erklaerung": "Direkte, klare Frage an die richtige Person — der Punkt ist voll erfüllt."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "mitteilung",
   "name": "Informelle E-Mail",
   "kurz": "Antwort an Freunde oder Familie, vier Leitpunkte",
   "was": "Du bekommst eine E-Mail von einer Freundin, einem Freund oder aus der Familie und antwortest darauf. Vier Punkte sind vorgegeben — alle vier müssen in deiner Antwort vorkommen.",
   "tipp": "Plane zuerst: Betreff, Anrede, ein Satz zur erhaltenen Mail, dann die vier Punkte in einer sinnvollen Reihenfolge, Schluss, Gruß. Für jeden fehlenden Punkt verlierst du in der Prüfung sechs Punkte.",
   "zeichen": "💌",
   "farbe": "turq",
   "punkte": 45,
   "runden": [
    {
     "id": "tb1s1r1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "id": "tb1sa1",
       "typ": "informell",
       "situation": "Deine Freundin Marianne möchte dich im Sommer besuchen. Antworte ihr auf ihre E-Mail.",
       "eingang": {
        "von": "Marianne",
        "betreff": "Besuch im Sommer",
        "text": "Hallo!\nStell dir vor: Ich habe im August endlich zwei Wochen Urlaub! Ich würde dich so gern besuchen, wir haben uns ja schon über ein Jahr nicht gesehen.\nPasst dir das überhaupt? Und kann ich bei dir übernachten, oder soll ich lieber ein Hotel suchen? Ich möchte dir keine Umstände machen.\nIch habe übrigens keine Ahnung, was man bei dir in der Gegend machen kann. Hast du Ideen?\nSag mir auch, ob ich dir etwas mitbringen soll.\nLiebe Grüße\nMarianne"
       },
       "sorte": "email",
       "an": "Marianne",
       "betreff": "AW: Besuch im Sommer",
       "punkte": [
        {
         "nr": 1,
         "was": "Zeitraum",
         "hinweis": "Sag, wann der Besuch für dich gut passt."
        },
        {
         "nr": 2,
         "was": "Übernachtung",
         "hinweis": "Beantworte die Frage nach Übernachtung oder Hotel."
        },
        {
         "nr": 3,
         "was": "Programm",
         "hinweis": "Schlag vor, was ihr zusammen macht."
        },
        {
         "nr": 4,
         "was": "Mitbringen",
         "hinweis": "Sag, ob sie etwas mitbringen soll."
        }
       ],
       "muster": "Liebe Marianne,\nvielen Dank für deine Mail, ich habe mich riesig gefreut! Natürlich passt mir dein Besuch. Am besten kommst du in der zweiten Augusthälfte, weil ich dann auch eine Woche Urlaub habe.\nEin Hotel brauchst du nicht. Meine Wohnung ist zwar klein, trotzdem kannst du gern bei mir schlafen. Das Sofa im Wohnzimmer ist sehr bequem, und ich habe extra Decken und Kissen.\nIn meiner Gegend gibt es viel zu tun. Wir könnten mit dem Fahrrad zum See fahren und dort schwimmen. Außerdem gibt es jeden Samstag einen schönen Markt in der Altstadt. Wenn es regnet, gehen wir ins Museum oder ins Kino.\nZum Schluss deine letzte Frage: Du musst wirklich nichts mitbringen. Nur gute Laune und vielleicht deine Wanderschuhe, denn ich möchte dir unbedingt den Aussichtsturm zeigen.\nIch freue mich schon sehr auf dich!\nLiebe Grüße\nDeine Clara",
       "woerter": 150,
       "hilfen": [
        "Vielen Dank für deine Mail, ich habe mich riesig gefreut!",
        "Am besten kommst du …, weil …",
        "Ein Hotel brauchst du nicht, …",
        "Wir könnten …",
        "Außerdem …",
        "Ich freue mich schon sehr auf dich!"
       ],
       "erklaerung": "Marianne stellt mehrere Fragen — jede braucht eine konkrete Antwort, nicht nur ein „ja\".",
       "telc": true,
       "max": 45
      },
      {
       "id": "tb1sa2",
       "typ": "informell",
       "situation": "Dein Bruder Kemal zieht um und bittet dich um Hilfe. Antworte ihm.",
       "eingang": {
        "von": "Kemal",
        "betreff": "Umzug – brauche Hilfe!",
        "text": "Hi,\nes ist so weit: Am 15. Oktober ziehe ich in die neue Wohnung in der Lindenstraße! Sie hat drei Zimmer und einen Balkon, endlich habe ich mehr Platz.\nAber ich brauche Hilfe. Kannst du an dem Tag kommen? Und hast du noch dein großes Auto? Das wäre super für die Möbel.\nDie Wohnung zeige ich dir dann natürlich auch.\nAls Dank lade ich alle Helfer am Abend zum Essen ein. Hast du einen Wunsch?\nBis bald\nKemal"
       },
       "sorte": "email",
       "an": "Kemal",
       "betreff": "AW: Umzug – brauche Hilfe!",
       "punkte": [
        {
         "nr": 1,
         "was": "Zusage",
         "hinweis": "Sag, ob und wann du kommen kannst."
        },
        {
         "nr": 2,
         "was": "Auto",
         "hinweis": "Beantworte die Frage nach dem Auto."
        },
        {
         "nr": 3,
         "was": "Neue Wohnung",
         "hinweis": "Frag etwas über die neue Wohnung."
        },
        {
         "nr": 4,
         "was": "Essen",
         "hinweis": "Sag, was du am Abend essen möchtest."
        }
       ],
       "muster": "Lieber Kemal,\nherzlichen Glückwunsch zur neuen Wohnung! Natürlich helfe ich dir beim Umzug. Am 15. Oktober habe ich frei, deshalb kann ich schon um acht Uhr morgens bei dir sein.\nDas große Auto habe ich leider nicht mehr, ich habe es im Frühling verkauft. Aber mein Nachbar hat einen Transporter, und er leiht ihn mir bestimmt für einen Tag. Ich frage ihn heute Abend und sage dir dann sofort Bescheid.\nDrei Zimmer und ein Balkon, das klingt toll! Wie ist denn die Küche? Musst du eine neue kaufen, oder ist schon eine drin? Und wie lange brauchst du von dort zur Arbeit?\nZum Schluss zum Essen: Nach so einem Tag habe ich bestimmt großen Hunger. Am liebsten möchte ich Pizza, die kann man auch gut zwischen den Kartons essen.\nBis zum 15.!\nDein Murat",
       "woerter": 150,
       "hilfen": [
        "Natürlich helfe ich dir …",
        "Am … habe ich frei, deshalb …",
        "Leider …, aber …",
        "Wie ist denn …?",
        "Zum Schluss zum Essen: …",
        "Bis bald!"
       ],
       "erklaerung": "Auch eine schlechte Nachricht (kein Auto) zählt als Antwort — mit einer Lösung wirkt sie besonders gut.",
       "telc": true,
       "max": 45
      }
     ]
    },
    {
     "id": "tb1s1r2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "id": "tb1sa3",
       "typ": "informell",
       "situation": "Deine Freundin Sophie lädt dich zu ihrer Hochzeit ein, aber du kannst nicht kommen. Antworte ihr.",
       "eingang": {
        "von": "Sophie",
        "betreff": "Wir heiraten!",
        "text": "Hallo, meine Liebe,\njetzt ist es offiziell: Daniel und ich heiraten am 21. Juni! Die Feier ist in einem kleinen Gasthof am Waldrand, mit Musik, Tanz und viel gutem Essen.\nEs wäre so schön, wenn du dabei bist. Du warst schließlich dabei, als wir uns kennengelernt haben!\nBitte sag mir bis Ende April Bescheid, ob du kommst.\nWir wünschen uns übrigens keine Geschenke, aber wir sparen für eine Reise nach Portugal.\nGanz liebe Grüße\nSophie"
       },
       "sorte": "email",
       "an": "Sophie",
       "betreff": "AW: Wir heiraten!",
       "punkte": [
        {
         "nr": 1,
         "was": "Glückwunsch",
         "hinweis": "Gratuliere Sophie und Daniel."
        },
        {
         "nr": 2,
         "was": "Absage",
         "hinweis": "Sag ab und erkläre den Grund."
        },
        {
         "nr": 3,
         "was": "Geschenk",
         "hinweis": "Schreib, was du ihnen schenken möchtest."
        },
        {
         "nr": 4,
         "was": "Treffen",
         "hinweis": "Schlag ein Treffen nach der Hochzeit vor."
        }
       ],
       "muster": "Liebe Sophie,\nwas für eine wunderbare Nachricht! Ich gratuliere dir und Daniel von ganzem Herzen. Ich habe immer gewusst, dass ihr zusammengehört.\nLeider muss ich dir trotzdem absagen, und das tut mir wirklich sehr leid. Meine Schwester bekommt Ende Juni ihr Baby, und ich habe ihr versprochen, dass ich dann bei ihr bin und mich um ihren älteren Sohn kümmere.\nWeil ihr für Portugal spart, möchte ich euch gern etwas für die Reise schenken. Ich schicke euch Geld für ein schönes Abendessen in Lissabon, dann denkt ihr dort ein bisschen an mich.\nAber ich will euch natürlich trotzdem feiern! Wie wäre es, wenn wir uns nach eurer Reise zu dritt treffen? Ich koche für euch, und ihr zeigt mir die Fotos von der Hochzeit.\nIch wünsche euch einen traumhaften Tag!\nGanz liebe Grüße\nDeine Anja",
       "woerter": 150,
       "hilfen": [
        "Ich gratuliere dir und Daniel von ganzem Herzen.",
        "Leider muss ich dir absagen, weil …",
        "Das tut mir wirklich sehr leid.",
        "Weil ihr für … spart, möchte ich …",
        "Wie wäre es, wenn wir uns … treffen?",
        "Ich wünsche euch …"
       ],
       "erklaerung": "Eine Absage braucht einen echten Grund und einen freundlichen Ausgleich — sonst wirkt sie kalt.",
       "telc": true,
       "max": 45
      },
      {
       "id": "tb1sa4",
       "typ": "informell",
       "situation": "Deine Tante Renate bietet an, in den Herbstferien auf deine Kinder aufzupassen. Antworte ihr.",
       "eingang": {
        "von": "Tante Renate",
        "betreff": "Herbstferien",
        "text": "Hallo, mein Schatz,\ndeine Mutter hat mir erzählt, dass du in den Herbstferien arbeiten musst und niemand für die Kinder da ist.\nIch habe eine Idee: Die beiden können gern ein paar Tage zu mir aufs Land kommen. Onkel Werner freut sich auch schon, er will mit ihnen die Hühner füttern.\nSchreib mir, welche Tage am besten passen. Und gibt es etwas, worauf ich achten muss?\nWir würden uns sehr freuen!\nDeine Tante Renate"
       },
       "sorte": "email",
       "an": "Tante Renate",
       "betreff": "AW: Herbstferien",
       "punkte": [
        {
         "nr": 1,
         "was": "Dank",
         "hinweis": "Bedanke dich für das Angebot."
        },
        {
         "nr": 2,
         "was": "Tage",
         "hinweis": "Schreib, an welchen Tagen die Kinder kommen."
        },
        {
         "nr": 3,
         "was": "Wichtiges",
         "hinweis": "Erkläre, worauf sie achten muss."
        },
        {
         "nr": 4,
         "was": "Gegenbesuch",
         "hinweis": "Lade Renate und Werner zu dir ein."
        }
       ],
       "muster": "Liebe Tante Renate,\nvielen Dank für dein tolles Angebot! Du hast mir wirklich sehr geholfen, ich wusste schon nicht mehr, was ich machen soll.\nAm meisten Arbeit habe ich in der ersten Ferienwoche. Deshalb würde ich die Kinder gern am Sonntag, dem 18. Oktober, zu euch bringen und am Donnerstag wieder abholen. Passt euch das?\nEin paar Dinge sind wichtig: Lina hat eine Nussallergie, deshalb darf sie keinen Kuchen mit Nüssen essen. Ich packe ihr Notfallmedikament ein und zeige dir, wie es funktioniert. Außerdem schläft Ben ohne seinen Teddy nicht ein. Normalerweise gehen beide um acht Uhr ins Bett, aber in den Ferien darf es ruhig etwas später werden.\nAls Dank möchte ich euch beide im November zu uns einladen. Ich koche euer Lieblingsessen, und die Kinder zeigen euch ihre Schule.\nGanz liebe Grüße, auch an Onkel Werner\nDeine Sandra",
       "woerter": 150,
       "hilfen": [
        "Vielen Dank für dein tolles Angebot!",
        "Deshalb würde ich die Kinder gern am … bringen.",
        "Passt euch das?",
        "Ein paar Dinge sind wichtig: …",
        "Außerdem …",
        "Als Dank möchte ich euch … einladen."
       ],
       "erklaerung": "Bei Familie bleibst du durchgehend beim „du\" — und bei den Kindern zählen konkrete Details.",
       "telc": true,
       "max": 45
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "mitteilung",
   "name": "Halbformelle E-Mail",
   "kurz": "Antwort an Vermieter, Kursleitung, Verein, Firma",
   "was": "Du antwortest einer Person, die du siezt: der Vermieterin, der Kursleitung, dem Verein oder einer Firma. Vier Punkte sind vorgegeben — alle vier müssen vorkommen.",
   "tipp": "Bleib beim „Sie\" — von der Anrede bis zum Gruß. „Liebe Frau …\" ist halbformell und passt, „Hallo\" nicht.",
   "zeichen": "📨",
   "farbe": "gold",
   "punkte": 45,
   "runden": [
    {
     "id": "tb1s2r1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "id": "tb1sa6",
       "typ": "halbformell",
       "situation": "Deine Vermieterin, Frau Kaiser, schreibt dir wegen einer Reparatur der Heizung. Antworte ihr.",
       "eingang": {
        "von": "Frau Kaiser",
        "betreff": "Reparatur Heizung",
        "text": "Liebe Frau Petrović, lieber Herr Petrović,\nvielen Dank für Ihre Nachricht wegen der Heizung im Bad. Ich habe sofort die Firma angerufen. Ein Techniker kann nächste Woche kommen, am Dienstag oder am Donnerstag, jeweils vormittags.\nBitte teilen Sie mir mit, welcher Tag Ihnen besser passt. Falls Sie nicht zu Hause sind, kann der Techniker vielleicht auch einen Schlüssel bekommen.\nGibt es sonst noch etwas in der Wohnung, das repariert werden muss? Dann kann er das gleich mit erledigen.\nViele Grüße\nGabriele Kaiser"
       },
       "sorte": "email",
       "an": "Frau Kaiser",
       "betreff": "AW: Reparatur Heizung",
       "punkte": [
        {
         "nr": 1,
         "was": "Dank",
         "hinweis": "Bedanke dich für die schnelle Hilfe."
        },
        {
         "nr": 2,
         "was": "Termin",
         "hinweis": "Nenne den passenden Tag und eine Uhrzeit."
        },
        {
         "nr": 3,
         "was": "Schlüssel",
         "hinweis": "Erkläre, wie der Techniker in die Wohnung kommt."
        },
        {
         "nr": 4,
         "was": "Weiteres Problem",
         "hinweis": "Beschreibe ein anderes Problem in der Wohnung."
        }
       ],
       "muster": "Liebe Frau Kaiser,\nvielen Dank für Ihre schnelle Antwort. Es ist sehr freundlich, dass Sie sich so schnell um die Heizung gekümmert haben, denn im Bad ist es morgens wirklich kalt.\nDer Donnerstag passt uns besser. Der Techniker kann gern ab neun Uhr kommen.\nLeider sind mein Mann und ich an diesem Vormittag beide bei der Arbeit. Deshalb würde ich unseren Schlüssel bei Frau Berger im Erdgeschoss abgeben. Sie ist fast immer zu Hause und kann dem Techniker die Tür öffnen. Ich habe schon mit ihr gesprochen, und sie hat zugestimmt.\nAußerdem gibt es noch ein kleines Problem: Das Fenster im Schlafzimmer schließt nicht mehr richtig, und bei Wind wird es laut und kalt. Vielleicht kann der Techniker sich das auch ansehen, oder Sie schicken jemand anderen.\nIch freue mich auf Ihre Antwort.\nViele Grüße\nJelena Petrović",
       "woerter": 150,
       "hilfen": [
        "Vielen Dank für Ihre schnelle Antwort.",
        "Der … passt uns besser.",
        "Deshalb würde ich …",
        "Außerdem gibt es noch ein kleines Problem: …",
        "Vielleicht könnte …",
        "Ich freue mich auf Ihre Antwort."
       ],
       "erklaerung": "Ein Termin ohne Uhrzeit oder ein Schlüssel ohne Lösung ist zu vage — die Vermieterin muss danach planen können.",
       "telc": true,
       "max": 45
      },
      {
       "id": "tb1sa7",
       "typ": "halbformell",
       "situation": "Dein Kursleiter, Herr Brandt, informiert über neue Kurszeiten. Du möchtest den Kurs wechseln. Antworte ihm.",
       "eingang": {
        "von": "Herr Brandt",
        "betreff": "Neue Kurszeiten ab Mai",
        "text": "Liebe Kursteilnehmer,\nab dem 4. Mai findet unser Deutschkurs nicht mehr am Montag und Mittwoch um achtzehn Uhr statt, sondern am Dienstag und Donnerstag um neunzehn Uhr dreißig. Der Grund ist ein Raumwechsel in der Volkshochschule.\nWer mit der neuen Zeit Probleme hat, kann in einen anderen Kurs auf demselben Niveau wechseln. Es gibt einen Vormittagskurs und einen Samstagskurs.\nBitte schreiben Sie mir bis zum 20. April, ob Sie wechseln möchten.\nFreundliche Grüße\nStefan Brandt"
       },
       "sorte": "email",
       "an": "Herr Brandt",
       "betreff": "AW: Neue Kurszeiten ab Mai",
       "punkte": [
        {
         "nr": 1,
         "was": "Problem",
         "hinweis": "Erkläre, warum die neue Zeit für dich nicht passt."
        },
        {
         "nr": 2,
         "was": "Wunschkurs",
         "hinweis": "Sag, in welchen Kurs du wechseln möchtest und warum."
        },
        {
         "nr": 3,
         "was": "Kosten",
         "hinweis": "Frag, ob der Wechsel etwas kostet."
        },
        {
         "nr": 4,
         "was": "Dank",
         "hinweis": "Bedanke dich für den Kurs bei ihm."
        }
       ],
       "muster": "Sehr geehrter Herr Brandt,\nvielen Dank für Ihre Information zu den neuen Kurszeiten. Ich schreibe Ihnen, weil ich leider wechseln muss.\nAm Dienstag und Donnerstag passt es für mich nicht, weil ich an diesen Tagen bis zwanzig Uhr in einer Bäckerei arbeite. Ich könnte also erst kommen, wenn der Kurs fast vorbei ist.\nDeshalb möchte ich gern in den Samstagskurs wechseln. Am Wochenende habe ich immer frei, und ich bin morgens am konzentriertesten. Den Vormittagskurs kann ich leider nicht besuchen, weil ich dann meine Tochter in den Kindergarten bringe.\nIch habe noch eine Frage: Kostet der Samstagskurs genauso viel, oder muss ich etwas dazubezahlen? Brauche ich auch ein neues Buch?\nZum Schluss möchte ich mich herzlich bei Ihnen bedanken. Ihr Unterricht hat mir sehr viel Spaß gemacht, und ich habe viel gelernt. Schade, dass es jetzt so endet.\nMit freundlichen Grüßen\nAmira Haddad",
       "woerter": 150,
       "hilfen": [
        "Ich schreibe Ihnen, weil …",
        "Am … passt es für mich nicht, weil …",
        "Deshalb möchte ich gern …",
        "Ich habe noch eine Frage: …",
        "Zum Schluss möchte ich mich herzlich bei Ihnen bedanken.",
        "Mit freundlichen Grüßen"
       ],
       "erklaerung": "Beim Kurswechsel muss klar werden, welchen Kurs du willst — „einen anderen\" reicht nicht.",
       "telc": true,
       "max": 45
      }
     ]
    },
    {
     "id": "tb1s2r2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "id": "tb1sa8",
       "typ": "halbformell",
       "situation": "Der Gartenverein sucht Helfer für sein Sommerfest. Frau Ostermann vom Vorstand hat allen Mitgliedern geschrieben. Antworte ihr.",
       "eingang": {
        "von": "Frau Ostermann",
        "betreff": "Sommerfest – Helfer gesucht",
        "text": "Liebe Mitglieder,\nam Samstag, dem 12. Juli, feiern wir wieder unser Sommerfest auf dem Vereinsgelände. Es gibt Musik, einen Flohmarkt und ein Programm für Kinder.\nDafür brauchen wir Ihre Hilfe! Wir suchen Leute für den Aufbau am Vormittag, für den Kuchenstand und für das Aufräumen am Abend.\nWer helfen möchte, schreibt mir bitte, was er machen kann und wann er Zeit hat. Fragen beantworte ich natürlich gern.\nViele Grüße\nPetra Ostermann\nVorstand Gartenverein Sonnenwiese"
       },
       "sorte": "email",
       "an": "Frau Ostermann",
       "betreff": "AW: Sommerfest – Helfer gesucht",
       "punkte": [
        {
         "nr": 1,
         "was": "Zusage",
         "hinweis": "Sag, dass du helfen möchtest."
        },
        {
         "nr": 2,
         "was": "Aufgabe",
         "hinweis": "Schreib, was du machen kannst."
        },
        {
         "nr": 3,
         "was": "Zeit",
         "hinweis": "Sag genau, wann du Zeit hast."
        },
        {
         "nr": 4,
         "was": "Frage",
         "hinweis": "Stell eine Frage zur Organisation."
        }
       ],
       "muster": "Liebe Frau Ostermann,\nvielen Dank für Ihre E-Mail. Ich freue mich schon auf das Sommerfest und helfe sehr gern mit, denn letztes Jahr hat es mir dort wirklich gut gefallen.\nAm liebsten würde ich beim Kuchenstand helfen. Ich backe gern und könnte zwei Kuchen mitbringen, zum Beispiel einen Apfelkuchen und einen Schokoladenkuchen. Außerdem kann ich gut mit Geld umgehen, weil ich im Supermarkt an der Kasse arbeite. Deshalb könnte ich auch die Kasse am Stand übernehmen.\nAm Vormittag kann ich leider nicht, weil mein Sohn ein Fußballspiel hat. Ich habe aber von vierzehn bis achtzehn Uhr Zeit. Wenn noch Leute fehlen, bleibe ich auch gern zum Aufräumen.\nNoch eine Frage: Gibt es auf dem Gelände einen Kühlschrank? Ein Kuchen hat nämlich Sahne, und im Juli ist es oft sehr heiß.\nViele Grüße\nNatascha Weber, Garten 14",
       "woerter": 150,
       "hilfen": [
        "Ich helfe sehr gern mit, denn …",
        "Am liebsten würde ich …",
        "Außerdem kann ich …",
        "Am Vormittag kann ich leider nicht, weil …",
        "Ich habe aber von … bis … Zeit.",
        "Noch eine Frage: …"
       ],
       "erklaerung": "Bei „Zeit\" erwartet der Verein eine genaue Angabe — ein Zeitfenster mit Uhrzeit erfüllt den Punkt.",
       "telc": true,
       "max": 45
      },
      {
       "id": "tb1sa9",
       "typ": "halbformell",
       "situation": "Die Hausverwaltung bittet alle Mieter, ihre Fahrräder aus dem Treppenhaus zu entfernen. Herr Lindner hat geschrieben. Antworte ihm.",
       "eingang": {
        "von": "Herr Lindner",
        "betreff": "Fahrräder im Treppenhaus",
        "text": "Sehr geehrte Mieter,\nleider stehen im Treppenhaus der Gartenstraße 8 immer wieder Fahrräder und Kinderwagen. Das ist gefährlich, denn bei einem Feuer ist der Weg nach draußen blockiert. Außerdem wurden die Wände schon mehrmals beschädigt.\nBitte bringen Sie Ihre Fahrräder bis zum 30. September in den Keller oder in den Hof. Danach müssen wir sie leider entfernen lassen.\nWenn Sie Fragen oder Ideen haben, schreiben Sie mir gern.\nMit freundlichen Grüßen\nMarkus Lindner\nHausverwaltung"
       },
       "sorte": "email",
       "an": "Herr Lindner",
       "betreff": "AW: Fahrräder im Treppenhaus",
       "punkte": [
        {
         "nr": 1,
         "was": "Verständnis",
         "hinweis": "Zeig Verständnis für das Problem."
        },
        {
         "nr": 2,
         "was": "Eigene Situation",
         "hinweis": "Erkläre, warum es für dich schwierig ist."
        },
        {
         "nr": 3,
         "was": "Vorschlag",
         "hinweis": "Mach einen Vorschlag für eine Lösung."
        },
        {
         "nr": 4,
         "was": "Kinderwagen",
         "hinweis": "Frag, wo du den Kinderwagen abstellen kannst."
        }
       ],
       "muster": "Sehr geehrter Herr Lindner,\nvielen Dank für Ihre Information. Ich verstehe das Problem gut, denn auch ich finde es gefährlich, wenn das Treppenhaus voll ist. Sicherheit ist natürlich wichtig.\nFür mich ist es aber leider schwierig. Mein Kellerraum ist sehr klein und schon voll mit Möbeln. Außerdem ist die Kellertreppe steil, deshalb kann ich mein schweres Fahrrad nicht jeden Tag hinunter- und wieder hinauftragen.\nIch hätte einen Vorschlag: Im Hof ist neben den Mülltonnen noch viel Platz. Könnte man dort nicht einen Fahrradständer mit Dach aufstellen? Ich glaube, viele Mieter würden dafür auch gern einen kleinen Betrag bezahlen.\nZum Schluss habe ich noch eine Frage: Wo darf ich den Kinderwagen abstellen? Meine Tochter ist erst sechs Monate alt, und ich kann den Wagen nicht in den dritten Stock tragen.\nIch freue mich auf Ihre Antwort.\nMit freundlichen Grüßen\nDavid Okafor, 3. Stock links",
       "woerter": 150,
       "hilfen": [
        "Ich verstehe das Problem gut, denn …",
        "Für mich ist es aber leider schwierig, weil …",
        "Ich hätte einen Vorschlag: …",
        "Könnte man nicht …?",
        "Zum Schluss habe ich noch eine Frage: …",
        "Ich freue mich auf Ihre Antwort."
       ],
       "erklaerung": "Erst Verständnis, dann das eigene Problem — so bleibt die Antwort höflich, auch wenn du nicht einverstanden bist.",
       "telc": true,
       "max": 45
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb1sl1",
   "titel": "Prüfungslauf 1 — informell",
   "minuten": 30,
   "aufgaben": [
    {
     "id": "tb1sa5",
     "typ": "informell",
     "situation": "Dein Freund Jonas plant eine Radtour und fragt, ob du mitkommst. Antworte ihm.",
     "eingang": {
      "von": "Jonas",
      "betreff": "Radtour im Mai?",
      "text": "Hey,\nich habe eine Idee für das lange Wochenende im Mai: eine Radtour am Fluss entlang, zwei Tage, mit Übernachtung in einer Jugendherberge. Ein paar Leute aus dem Büro kommen auch mit.\nHast du Lust? Du kannst auch gern sagen, wenn dir die Strecke zu lang ist. Wir wollen ungefähr sechzig Kilometer am Tag fahren.\nIch weiß noch nicht, wo wir uns treffen. Hast du einen Vorschlag?\nSag bald Bescheid!\nJonas"
     },
     "sorte": "email",
     "an": "Jonas",
     "betreff": "AW: Radtour im Mai?",
     "punkte": [
      {
       "nr": 1,
       "was": "Zusage",
       "hinweis": "Sag, dass du mitkommst."
      },
      {
       "nr": 2,
       "was": "Strecke",
       "hinweis": "Sag deine Meinung zur Länge der Strecke."
      },
      {
       "nr": 3,
       "was": "Fahrrad",
       "hinweis": "Erkläre ein Problem mit deinem Fahrrad."
      },
      {
       "nr": 4,
       "was": "Treffpunkt",
       "hinweis": "Schlag Treffpunkt und Uhrzeit vor."
      }
     ],
     "muster": "Lieber Jonas,\ndanke für deine Mail, die Idee finde ich super! Natürlich komme ich mit, ich war schon lange nicht mehr richtig draußen.\nSechzig Kilometer am Tag sind für mich ein bisschen viel, weil ich nicht so oft Fahrrad fahre. Trotzdem möchte ich es versuchen. Vielleicht können wir unterwegs ein paar Pausen mehr machen? Dann schaffe ich das bestimmt.\nEin Problem gibt es leider: Mein altes Fahrrad ist kaputt, die Bremsen funktionieren nicht mehr. Ich bringe es nächste Woche in die Werkstatt. Wenn es bis Mai nicht fertig ist, leihe ich mir eins im Fahrradladen am Bahnhof, dort kann man Räder für ein Wochenende mieten.\nAls Treffpunkt schlage ich den Bahnhof vor, weil dort alle gut hinkommen. Wie wäre es mit Samstag um neun Uhr vor dem Haupteingang?\nIch freue mich schon!\nViele Grüße\nDein Tomasz",
     "woerter": 150,
     "hilfen": [
      "Die Idee finde ich super!",
      "… ist für mich ein bisschen viel, weil …",
      "Trotzdem möchte ich …",
      "Ein Problem gibt es leider: …",
      "Als Treffpunkt schlage ich … vor.",
      "Wie wäre es mit …?"
     ],
     "erklaerung": "Die Meinung zur Strecke muss begründet sein — „ok\" allein erfüllt den Leitpunkt nicht.",
     "telc": true,
     "max": 45
    }
   ]
  },
  {
   "id": "tb1sl2",
   "titel": "Prüfungslauf 2 — halbformell",
   "minuten": 30,
   "aufgaben": [
    {
     "id": "tb1sa10",
     "typ": "halbformell",
     "situation": "Frau Yilmaz von einer Firma bietet dir einen Praktikumsplatz an. Antworte ihr.",
     "eingang": {
      "von": "Frau Yilmaz",
      "betreff": "Ihr Praktikum bei uns",
      "text": "Sehr geehrte Frau Nowak,\nvielen Dank für Ihre Bewerbung und das nette Gespräch letzte Woche. Ich freue mich, Ihnen mitzuteilen, dass wir Ihnen gern einen Praktikumsplatz in unserer Abteilung Kundenservice anbieten.\nDas Praktikum dauert drei Monate. Wir könnten am 1. oder am 15. März beginnen. Welcher Termin passt Ihnen besser?\nBitte schicken Sie uns außerdem noch eine Kopie Ihres Sprachzertifikats.\nWenn Sie Fragen haben, melden Sie sich gern.\nMit freundlichen Grüßen\nDilek Yilmaz\nPersonalabteilung"
     },
     "sorte": "email",
     "an": "Frau Yilmaz",
     "betreff": "AW: Ihr Praktikum bei uns",
     "punkte": [
      {
       "nr": 1,
       "was": "Zusage",
       "hinweis": "Nimm das Angebot an und bedanke dich."
      },
      {
       "nr": 2,
       "was": "Beginn",
       "hinweis": "Sag, wann du anfangen möchtest, und begründe."
      },
      {
       "nr": 3,
       "was": "Arbeitszeiten",
       "hinweis": "Frag nach den Arbeitszeiten."
      },
      {
       "nr": 4,
       "was": "Zertifikat",
       "hinweis": "Schreib, wann du das Zertifikat schickst."
      }
     ],
     "muster": "Sehr geehrte Frau Yilmaz,\nvielen Dank für Ihre E-Mail und das freundliche Angebot. Ich habe mich sehr darüber gefreut und nehme den Praktikumsplatz gern an. Der Kundenservice interessiert mich besonders, weil ich gern mit Menschen arbeite.\nAm liebsten würde ich am 15. März beginnen. Bis Anfang März besuche ich noch einen Deutschkurs, und die letzte Prüfung ist am 6. März. Danach kann ich mich ganz auf das Praktikum konzentrieren.\nIch habe außerdem eine Frage zu den Arbeitszeiten: Wann beginnt der Arbeitstag, und arbeite ich auch am Samstag? Ich muss nämlich meine Busverbindung planen, weil ich etwas außerhalb wohne.\nDas Sprachzertifikat schicke ich Ihnen gern zu. Ich habe es im Moment leider nicht zu Hause, aber ich bekomme die Kopie am Freitag. Dann schicke ich sie Ihnen sofort per E-Mail.\nIch freue mich auf die Zusammenarbeit.\nMit freundlichen Grüßen\nKatarzyna Nowak",
     "woerter": 150,
     "hilfen": [
      "Vielen Dank für Ihre E-Mail und das freundliche Angebot.",
      "Ich nehme … gern an.",
      "Am liebsten würde ich am … beginnen, weil …",
      "Ich habe außerdem eine Frage zu …",
      "… schicke ich Ihnen am … zu.",
      "Ich freue mich auf die Zusammenarbeit."
     ],
     "erklaerung": "Im Kontakt mit einem Arbeitgeber zählt ein konsequentes „Sie\" und eine klare Zusage ohne Umwege.",
     "telc": true,
     "max": 45
    }
   ]
  }
 ]
};
