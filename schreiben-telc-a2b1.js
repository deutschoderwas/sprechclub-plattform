/* ============================================================
   deutschoderwas club — SCHREIBEN telc Deutsch A2·B1

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 Deutsch
   A2·B1, geprüft 02.11.2026). Ergebnis der Prüfung ist A2 oder B1.
   Alle Texte und Aufgaben eigene, nur das Format ist nachgebaut.
   Erzeugt aus scratchpad/telca2b1 mit bau.js.
   ============================================================ */

window.SCHREIBEN_TELC_A2B1 = {
 "niveau": "telcA2B1",
 "pruefung": "telc Deutsch A2·B1",
 "minuten": 45,
 "punkte": 20,
 "intro": "Bei telc A2·B1 schreibst du zweimal: Du beantwortest eine Mail, die du vorher gelesen hast (im Teil „Lesen und Schreiben\"), und du antwortest in zehn Minuten auf eine kurze Nachricht. Wichtig ist, dass du auf alle Fragen und Bitten eingehst. Hier gibt es zu jeder Aufgabe ein Muster und einen Selbstcheck — die Punkte sind Übungspunkte, nicht die telc-Wertung.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Der Rahmen",
   "zeichen": "🖼️",
   "was": "Anrede und Gruß — in der Mail und in der Kurznachricht."
  },
  {
   "nr": 2,
   "titel": "Alles beantworten",
   "zeichen": "✅",
   "was": "Auf jede Frage eingehen — kurz und klar."
  },
  {
   "nr": 3,
   "titel": "Die zwei Aufgaben",
   "zeichen": "✉️",
   "was": "Eine Mail beantworten und auf eine Kurznachricht antworten."
  },
  {
   "nr": 4,
   "titel": "Die Prüfung",
   "zeichen": "⏱️",
   "was": "Mail und Kurznachricht mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tas1",
   "stufe": 1,
   "titel": "Anrede und Gruß in Mail und Nachricht",
   "kurz": "Du oder Sie? Hallo oder Liebe? Der Anfang und das Ende müssen passen",
   "ziel": "Nach diesem Block findest du für jede Nachricht die richtige Anrede und den passenden Gruß.",
   "zeichen": "✉️",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Deine Freundin Lena schreibt dir eine Nachricht. Wie beginnst du deine Antwort?",
     "opt": [
      "Sehr geehrte Lena,",
      "Hallo Lena,",
      "Sehr geehrte Frau Lena,"
     ],
     "loesung": 1,
     "erklaerung": "Unter Freunden schreibst du locker: „Hallo Lena\" oder „Liebe Lena\"."
    },
    {
     "art": "wahl",
     "frage": "Dein Nachbar Herr Krüger siezt dich. Welche Anrede passt?",
     "opt": [
      "Lieber Herr Krüger,",
      "Hallo Krüger,",
      "Lieber Klaus,"
     ],
     "loesung": 0,
     "erklaerung": "„Lieber Herr\" plus Nachname ist freundlich und höflich."
    },
    {
     "art": "wahl",
     "frage": "Welcher Gruß passt am Ende einer Nachricht an einen Freund?",
     "opt": [
      "Mit freundlichen Grüßen",
      "Hochachtungsvoll",
      "Bis bald!"
     ],
     "loesung": 2,
     "erklaerung": "„Bis bald\", „Liebe Grüße\" oder „Viele Grüße\" passen gut unter Freunden."
    },
    {
     "art": "wahl",
     "frage": "Du schreibst an deine Kursleiterin Frau Peters. Welcher Gruß passt?",
     "opt": [
      "Tschüss!",
      "Viele Grüße",
      "Hab dich lieb"
     ],
     "loesung": 1,
     "erklaerung": "„Viele Grüße\" ist höflich und passt gut zu „Liebe Frau Peters\"."
    },
    {
     "art": "wahl",
     "frage": "Du beginnst mit „Lieber Herr Krüger,\". Was ist richtig?",
     "opt": [
      "Kannst du mir den Schlüssel bringen?",
      "Können Sie mir den Schlüssel bringen?",
      "Könnt ihr mir den Schlüssel bringen?"
     ],
     "loesung": 1,
     "erklaerung": "Wer siezt, bleibt beim „Sie\" — bis zum Ende der Nachricht."
    },
    {
     "art": "wahl",
     "frage": "Wie geht es nach der Anrede „Hallo Tom,\" weiter?",
     "opt": [
      "Klar helfe ich dir!",
      "klar helfe ich dir!",
      "Beides ist möglich."
     ],
     "loesung": 2,
     "erklaerung": "Nach dem Komma schreibt man normalerweise klein weiter. Großschreibung wird aber nicht als Fehler gezählt."
    },
    {
     "art": "wahl",
     "frage": "Wie schreibst du die Höflichkeitsform?",
     "opt": [
      "Ich danke Ihnen.",
      "Ich danke ihnen.",
      "Ich danke IHNEN."
     ],
     "loesung": 0,
     "erklaerung": "„Sie\", „Ihnen\" und „Ihr\" schreibt man immer groß, wenn du eine Person höflich ansprichst."
    },
    {
     "art": "wahl",
     "frage": "Du antwortest Frau Wagner, der Mutter von Leon. Wie unterschreibst du?",
     "opt": [
      "Deine Samira",
      "Samira Haddad",
      "Herr Haddad"
     ],
     "loesung": 1,
     "erklaerung": "Bei „Sie\" unterschreibst du mit Vor- und Nachnamen."
    },
    {
     "art": "ordnen",
     "frage": "Bau den ersten Satz der Antwort.",
     "teile": [
      "Vielen Dank",
      "für",
      "deine",
      "Nachricht!"
     ],
     "loesung": [
      0,
      1,
      2,
      3
     ],
     "erklaerung": "Ein Dank ist ein guter Anfang — er zeigt, dass du die Nachricht gelesen hast."
    },
    {
     "art": "ordnen",
     "frage": "Bau den letzten Satz für eine Nachricht an den Nachbarn.",
     "teile": [
      "Ich",
      "wünsche",
      "Ihnen",
      "einen schönen",
      "Urlaub!"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4
     ],
     "erklaerung": "Ein guter Wunsch am Schluss klingt freundlich. Das Verb steht an Position zwei."
    }
   ]
  },
  {
   "id": "tas2",
   "stufe": 1,
   "titel": "Auf alle Fragen antworten",
   "kurz": "Jede Frage in der Nachricht braucht eine Antwort",
   "ziel": "Nach diesem Block findest du alle Fragen in einer Nachricht und beantwortest jede konkret.",
   "zeichen": "❓",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Lena fragt: „Hast du Lust? Kannst du etwas zu essen mitbringen?\" Wie viele Fragen musst du beantworten?",
     "opt": [
      "Eine",
      "Zwei",
      "Keine, es ist nur eine Einladung."
     ],
     "loesung": 1,
     "erklaerung": "Zwei Fragezeichen, zwei Antworten: Kommst du? Und was bringst du mit?"
    },
    {
     "art": "wahl",
     "frage": "Herr Krüger fragt: „Wann darf ich Ihnen den Schlüssel bringen?\" Welche Antwort ist am besten?",
     "opt": [
      "Ja, gern.",
      "Am Sonntag ab neunzehn Uhr bin ich zu Hause.",
      "Irgendwann."
     ],
     "loesung": 1,
     "erklaerung": "Eine Frage mit „wann\" braucht eine Zeit. „Ja, gern\" passt nicht."
    },
    {
     "art": "wahl",
     "frage": "Tom fragt: „Hast du ein Auto?\" Du hast keins. Was schreibst du?",
     "opt": [
      "Nichts, das ist nicht so wichtig.",
      "Ein Auto habe ich leider nicht, aber mein Bruder kann vielleicht helfen.",
      "Nein."
     ],
     "loesung": 1,
     "erklaerung": "Auch ein „nein\" ist eine Antwort. Mit einer kleinen Lösung wirkt sie freundlich und vollständig."
    },
    {
     "art": "wahl",
     "frage": "Marco fragt: „Fleisch, Fisch oder vegetarisch?\" Was ist die beste Antwort?",
     "opt": [
      "Ich nehme den Fisch, weil ich Fisch sehr gern esse.",
      "Das ist mir egal.",
      "Ich esse gern."
     ],
     "loesung": 0,
     "erklaerung": "Eine klare Wahl mit kurzem Grund — so hat Marco die Information, die er braucht."
    },
    {
     "art": "wahl",
     "frage": "Frau Peters fragt: „Passt Ihnen der Termin?\" Er passt nicht. Was fehlt in „Leider nicht.\"?",
     "opt": [
      "Nichts, das reicht.",
      "Ein Grund und vielleicht ein anderer Vorschlag.",
      "Ein langer Text über deine Arbeit."
     ],
     "loesung": 1,
     "erklaerung": "Bei einer Absage gibst du kurz einen Grund und machst am besten einen Gegenvorschlag."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist eine Rückfrage?",
     "opt": [
      "Ich komme gern.",
      "Wo genau treffen wir uns?",
      "Bis Sonntag!"
     ],
     "loesung": 1,
     "erklaerung": "Eine Rückfrage zeigt Interesse und macht deine Antwort lebendig."
    },
    {
     "art": "wahl",
     "frage": "Sabine bittet: „Kannst du meine Schicht übernehmen?\" Was gehört in den ersten Satz nach der Anrede?",
     "opt": [
      "Die Antwort: ja oder nein.",
      "Das Wetter am Samstag.",
      "Eine Frage nach ihrem Urlaub."
     ],
     "loesung": 0,
     "erklaerung": "Das Wichtigste zuerst: Sabine will wissen, ob du hilfst."
    },
    {
     "art": "wahl",
     "frage": "Frau Wagner fragt: „Wann soll sie wieder zu Hause sein?\" Welche Antwort passt?",
     "opt": [
      "Nicht zu spät.",
      "Um achtzehn Uhr, bitte.",
      "Am Donnerstag."
     ],
     "loesung": 1,
     "erklaerung": "„Wann\" fragt hier nach der Uhrzeit. „Am Donnerstag\" ist schon bekannt."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Antwort auf die Bitte.",
     "teile": [
      "Natürlich",
      "helfe",
      "ich",
      "dir",
      "am Samstag."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4
     ],
     "erklaerung": "„Natürlich\" steht vorn, deshalb kommt das Verb direkt danach: helfe ich."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Antwort mit Grund.",
     "teile": [
      "Ich",
      "nehme",
      "das vegetarische Essen,",
      "weil",
      "ich",
      "kein Fleisch",
      "esse."
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
     "erklaerung": "Im Satz mit „weil\" steht das Verb am Ende: … weil ich kein Fleisch esse."
    }
   ]
  },
  {
   "id": "tas3",
   "stufe": 2,
   "titel": "Kurz und klar: Nachrichten auf A2/B1",
   "kurz": "Wenig Zeit, wenige Wörter — aber jeder Satz zählt",
   "ziel": "Nach diesem Block schreibst du in zehn Minuten eine kurze, klare und vollständige Antwort.",
   "zeichen": "⏱️",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie lang sollte deine Antwort auf eine Kurznachricht etwa sein?",
     "opt": [
      "Zwei oder drei Wörter.",
      "Ungefähr dreißig bis fünfzig Wörter.",
      "Mindestens zweihundert Wörter."
     ],
     "loesung": 1,
     "erklaerung": "Kurz, aber vollständig: Anrede, Antworten auf alle Punkte, Gruß."
    },
    {
     "art": "wahl",
     "frage": "Du hast zehn Minuten. Was machst du zuerst?",
     "opt": [
      "Sofort losschreiben.",
      "Die Nachricht genau lesen und die Fragen markieren.",
      "Einen Entwurf auf Englisch schreiben."
     ],
     "loesung": 1,
     "erklaerung": "Wer die Fragen markiert, vergisst keine. Das kostet nur eine Minute."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist für eine kurze Nachricht am besten?",
     "opt": [
      "Ich komme gern, aber erst um eins.",
      "Ich möchte dir mitteilen, dass ich unter Umständen eventuell später erscheinen werde.",
      "Komme später vielleicht."
     ],
     "loesung": 0,
     "erklaerung": "Einfach und klar. Zu kompliziert ist genauso schlecht wie zu kurz."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz verbindet zwei Informationen gut?",
     "opt": [
      "Ich kann nicht. Ich arbeite.",
      "Ich kann leider nicht, denn ich arbeite bis achtzehn Uhr.",
      "Ich kann nicht arbeiten."
     ],
     "loesung": 1,
     "erklaerung": "Mit „denn\" oder „weil\" verbindest du Antwort und Grund — das zeigt B1-Niveau."
    },
    {
     "art": "wahl",
     "frage": "Was ist bei einer Nachricht an einen Freund eher unpassend?",
     "opt": [
      "Viele liebe Grüße",
      "Sehr geehrter Herr Tom,",
      "Bis bald!"
     ],
     "loesung": 1,
     "erklaerung": "„Sehr geehrter\" ist viel zu förmlich für einen Freund."
    },
    {
     "art": "wahl",
     "frage": "Was machst du in der letzten Minute?",
     "opt": [
      "Noch einen neuen Absatz anfangen.",
      "Kontrollieren: Habe ich alle Punkte? Stimmt das Verb an Position zwei?",
      "Nichts, fertig ist fertig."
     ],
     "loesung": 1,
     "erklaerung": "Eine kurze Kontrolle findet oft fehlende Punkte und einfache Fehler."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist richtig?",
     "opt": [
      "Am Samstag ich habe Zeit.",
      "Am Samstag habe ich Zeit.",
      "Am Samstag Zeit habe ich."
     ],
     "loesung": 1,
     "erklaerung": "Das Verb steht immer an Position zwei, auch wenn der Satz mit einer Zeit beginnt."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „deshalb\".",
     "teile": [
      "Ich",
      "arbeite",
      "am Freitag,",
      "deshalb",
      "komme",
      "ich",
      "erst",
      "am Samstag."
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
     "erklaerung": "Nach „deshalb\" kommt sofort das Verb: deshalb komme ich."
    },
    {
     "art": "ordnen",
     "frage": "Bau einen höflichen Gegenvorschlag.",
     "teile": [
      "Wäre",
      "auch",
      "Samstagvormittag",
      "möglich?"
     ],
     "loesung": [
      0,
      1,
      2,
      3
     ],
     "erklaerung": "„Wäre … möglich?\" ist eine höfliche Frage — perfekt für einen anderen Termin."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „aber\".",
     "teile": [
      "Ich",
      "helfe",
      "dir",
      "gern,",
      "aber",
      "ich",
      "komme",
      "erst",
      "um zehn."
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
     "erklaerung": "Nach „aber\" bleibt die normale Wortstellung: aber ich komme."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "mitteilung",
   "name": "Eine Mail beantworten",
   "kurz": "Auf drei Fragen oder Bitten eingehen",
   "was": "Du antwortest auf eine Mail. Drei Dinge musst du beantworten — sie stehen als Fragen oder Bitten in der Mail.",
   "tipp": "Beantworte die Punkte in der Reihenfolge der Mail. Ein, zwei Sätze pro Punkt reichen.",
   "zeichen": "📨",
   "farbe": "turq",
   "punkte": 20,
   "runden": [
    {
     "id": "ta2b1s1r1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "level": "B1",
       "eingang": {
        "von": "Jana",
        "betreff": "Picknick am Sonntag",
        "text": "Hallo!\nAm Sonntag, dem 12. Juni, werde ich dreißig. Ich möchte nicht groß feiern, sondern lieber ein Picknick im Stadtpark machen. Wir treffen uns um zwei Uhr am Spielplatz neben dem See. Kommst du? Jeder bringt etwas zum Essen mit, die Getränke kaufe ich selbst. Was möchtest du mitbringen? Und noch etwas: Ich habe kein Auto, und die Decken und der Grill sind schwer. Kannst du mich vielleicht am Mittag mit deinem Auto abholen?\nIch freue mich auf dich!\nLiebe Grüße\nJana"
       },
       "situation": "Deine Freundin Jana lädt dich zu ihrem Geburtstagspicknick ein. Antworte ihr.",
       "an": "Jana",
       "betreff": "AW: Picknick am Sonntag",
       "sorte": "email",
       "punkte": [
        {
         "nr": 1,
         "was": "Zusage",
         "hinweis": "Sag, ob du zum Picknick kommst."
        },
        {
         "nr": 2,
         "was": "Essen",
         "hinweis": "Schreib, was du mitbringst."
        },
        {
         "nr": 3,
         "was": "Abholen",
         "hinweis": "Antworte auf die Bitte, Jana mit dem Auto abzuholen."
        }
       ],
       "muster": "Liebe Jana,\nvielen Dank für deine Einladung! Natürlich komme ich gern zu deinem Picknick, ich freue mich schon sehr.\nIch bringe einen großen Nudelsalat mit, den mögen doch alle. Wenn du willst, backe ich auch noch ein paar Muffins.\nDich abholen kann ich leider nicht, weil mein Auto gerade in der Werkstatt ist. Aber ich frage meinen Bruder, vielleicht hat er am Sonntag Zeit. Ich sage dir morgen Bescheid.\nBis Sonntag und liebe Grüße\nDeine Mira",
       "woerter": 80,
       "hilfen": [
        "Vielen Dank für deine Einladung!",
        "Natürlich komme ich gern …",
        "Ich bringe … mit.",
        "Leider kann ich …, weil …",
        "Bis Sonntag und liebe Grüße"
       ],
       "erklaerung": "Jana fragt dreimal. Auch ein Nein bei der Bitte ist in Ordnung, aber mit Grund und Alternative."
      },
      {
       "level": "B1",
       "eingang": {
        "von": "Petra Lehmann",
        "betreff": "Neue Wasserzähler",
        "text": "Liebe Frau Ahmadi,\nnächste Woche werden im ganzen Haus die Wasserzähler ausgetauscht. Der Handwerker kommt am Dienstag zwischen acht und zwölf Uhr. Sind Sie an diesem Vormittag zu Hause? Wenn nicht, kann ich auch mit meinem Schlüssel in die Wohnung gehen, aber nur mit Ihrer Erlaubnis. Außerdem möchte ich Sie bitten, den Weg ins Badezimmer frei zu machen, weil der Zähler unter dem Waschbecken ist. Gibt es sonst noch Probleme in der Wohnung? Dann sagen Sie mir bitte Bescheid.\nViele Grüße\nPetra Lehmann"
       },
       "situation": "Ihre Vermieterin, Frau Lehmann, informiert Sie über neue Wasserzähler. Antworten Sie ihr.",
       "an": "Petra Lehmann",
       "betreff": "AW: Neue Wasserzähler",
       "sorte": "email",
       "punkte": [
        {
         "nr": 1,
         "was": "Dienstagvormittag",
         "hinweis": "Sagen Sie, ob Sie zu Hause sind oder ob sie den Schlüssel benutzen darf."
        },
        {
         "nr": 2,
         "was": "Badezimmer",
         "hinweis": "Antworten Sie auf die Bitte, den Weg ins Bad frei zu machen."
        },
        {
         "nr": 3,
         "was": "Andere Probleme",
         "hinweis": "Nennen Sie ein Problem in der Wohnung oder sagen Sie, dass alles in Ordnung ist."
        }
       ],
       "muster": "Liebe Frau Lehmann,\nvielen Dank für Ihre Nachricht. Am Dienstagvormittag muss ich leider arbeiten. Sie dürfen aber gern mit Ihrem Schlüssel in die Wohnung gehen, das ist kein Problem.\nDen Weg ins Badezimmer mache ich am Montagabend frei. Die Wäsche und die Putzsachen stelle ich in die Küche.\nEs gibt tatsächlich noch ein kleines Problem: Das Fenster im Schlafzimmer schließt nicht richtig. Vielleicht kann der Handwerker es sich kurz ansehen?\nViele Grüße\nNadia Ahmadi",
       "woerter": 80,
       "hilfen": [
        "Vielen Dank für Ihre Nachricht.",
        "Am Dienstag … leider …",
        "Sie dürfen gern …",
        "Den Weg ins Bad mache ich …",
        "Es gibt noch ein kleines Problem: …"
       ],
       "erklaerung": "Halbformell bleibt man beim „Sie\". Die Erlaubnis für den Schlüssel muss klar drinstehen."
      }
     ]
    },
    {
     "id": "ta2b1s1r2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "level": "B1",
       "eingang": {
        "von": "Dimitri",
        "betreff": "Deutschkurs – kannst du mir helfen?",
        "text": "Hallo!\nDu hast doch letztes Jahr den Deutschkurs an der Volkshochschule gemacht, oder? Ich möchte jetzt auch einen Kurs anfangen, aber ich weiß nicht, welcher der richtige für mich ist. Wie war dein Kurs? Hat er dir geholfen? Ich arbeite von Montag bis Freitag bis siebzehn Uhr, deshalb kann ich nur abends oder am Wochenende. Weißt du, ob es auch Kurse am Samstag gibt? Und noch eine Bitte: Kannst du mir dein altes Kursbuch leihen? Dann kann ich schon ein bisschen üben.\nViele Grüße\nDimitri"
       },
       "situation": "Dein Freund Dimitri möchte einen Deutschkurs machen und fragt dich um Rat. Antworte ihm.",
       "an": "Dimitri",
       "betreff": "AW: Deutschkurs – kannst du mir helfen?",
       "sorte": "email",
       "punkte": [
        {
         "nr": 1,
         "was": "Dein Kurs",
         "hinweis": "Erzähl, wie dein Kurs war und ob er dir geholfen hat."
        },
        {
         "nr": 2,
         "was": "Samstag",
         "hinweis": "Antworte auf die Frage nach Kursen am Samstag."
        },
        {
         "nr": 3,
         "was": "Kursbuch",
         "hinweis": "Sag, ob du ihm dein Buch leihst und wie er es bekommt."
        }
       ],
       "muster": "Lieber Dimitri,\nschön, dass du einen Deutschkurs machen willst! Mein Kurs an der Volkshochschule war wirklich gut. Die Lehrerin hat viel mit uns gesprochen, und ich habe danach die Prüfung bestanden.\nSoviel ich weiß, gibt es auch Kurse am Samstagvormittag. Schau am besten auf die Internetseite der Volkshochschule, dort findest du alle Termine.\nMein altes Kursbuch leihe ich dir gern. Ich bringe es dir am Wochenende vorbei, dann können wir zusammen einen Kaffee trinken.\nViele Grüße\nDein Samir",
       "woerter": 80,
       "hilfen": [
        "Schön, dass du …!",
        "Mein Kurs war …, weil …",
        "Soviel ich weiß, …",
        "Mein altes Kursbuch leihe ich dir gern.",
        "Ich bringe es dir … vorbei."
       ],
       "erklaerung": "Dimitri will einen Rat. Eine kurze eigene Erfahrung macht die Antwort konkret."
      },
      {
       "level": "B1",
       "eingang": {
        "von": "Sabine Brandt, Kita Pusteblume",
        "betreff": "Sommerfest – wir brauchen Hilfe",
        "text": "Liebe Familie Okafor,\nam Freitag, dem 4. Juli, feiern wir unser Sommerfest im Garten der Kita. Es beginnt um fünfzehn Uhr. Dafür brauchen wir noch Hilfe. Könnten Sie einen Kuchen oder einen Salat mitbringen? Außerdem suchen wir Eltern, die eine Stunde am Getränkestand helfen. Hätten Sie dafür Zeit? Viele Kinder sprechen zu Hause eine andere Sprache, und wir möchten beim Fest Lieder aus verschiedenen Ländern singen. Kennen Sie ein Kinderlied aus Ihrer Heimat, das wir zusammen lernen können?\nFreundliche Grüße\nSabine Brandt"
       },
       "situation": "Die Erzieherin Ihres Sohnes bittet Sie um Hilfe beim Sommerfest der Kita. Antworten Sie ihr.",
       "an": "Sabine Brandt",
       "betreff": "AW: Sommerfest – wir brauchen Hilfe",
       "sorte": "email",
       "punkte": [
        {
         "nr": 1,
         "was": "Essen",
         "hinweis": "Schreiben Sie, ob Sie Kuchen oder Salat mitbringen."
        },
        {
         "nr": 2,
         "was": "Getränkestand",
         "hinweis": "Sagen Sie, ob Sie am Getränkestand helfen können."
        },
        {
         "nr": 3,
         "was": "Kinderlied",
         "hinweis": "Antworten Sie auf die Frage nach einem Lied aus Ihrer Heimat."
        }
       ],
       "muster": "Liebe Frau Brandt,\nvielen Dank für die Einladung zum Sommerfest. Wir kommen sehr gern!\nIch backe einen Apfelkuchen, den mag unser Sohn besonders gern. Am Getränkestand kann ich leider nicht helfen, weil ich bis vierzehn Uhr arbeite und erst später komme. Aber mein Mann hat Zeit und hilft gern eine Stunde mit.\nDie Idee mit den Liedern finde ich wunderbar. Ich kenne ein schönes Kinderlied aus Nigeria. Ich schreibe den Text auf und übe es gern mit den Kindern.\nFreundliche Grüße\nGrace Okafor",
       "woerter": 80,
       "hilfen": [
        "Vielen Dank für die Einladung zum Sommerfest.",
        "Ich backe …",
        "Leider kann ich nicht …, weil …",
        "Aber mein Mann …",
        "Die Idee mit den Liedern finde ich …"
       ],
       "erklaerung": "Drei Bitten, drei klare Antworten. Wer absagt, bietet am besten eine Lösung an."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "mitteilung",
   "name": "Auf eine Kurznachricht antworten",
   "kurz": "Zehn Minuten, kurz und vollständig",
   "was": "Du bekommst eine kurze Nachricht und antwortest darauf. Geh auf die Frage ein und schreib ganze Sätze.",
   "tipp": "Kurz heißt nicht unvollständig: Antwort auf die Frage, ein Grund oder Detail, ein Gruß.",
   "zeichen": "💬",
   "farbe": "gold",
   "punkte": 30,
   "runden": [
    {
     "id": "ta2b1s2r1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "level": "B1",
       "id": "akn1",
       "situation": "Deine Kollegin Sabine fragt, ob du am Samstag mit ihr tauschen kannst.",
       "eingang": {
        "von": "Sabine",
        "betreff": null,
        "text": "Hallo! Ich habe eine große Bitte: Meine Schwester heiratet am Samstag. Kannst du meine Schicht von acht bis vierzehn Uhr übernehmen? Ich arbeite dafür gern an einem anderen Tag für dich. Sabine"
       },
       "sorte": "sms",
       "an": "Sabine",
       "punkte": [
        {
         "nr": 1,
         "was": "Antwort auf die Bitte",
         "hinweis": "Sag klar, ob du die Schicht übernehmen kannst."
        },
        {
         "nr": 2,
         "was": "Grund oder Detail",
         "hinweis": "Erkläre kurz, warum es geht oder nicht geht."
        },
        {
         "nr": 3,
         "was": "Gegenvorschlag",
         "hinweis": "Sag, an welchem Tag sie für dich arbeiten kann."
        }
       ],
       "muster": "Hallo Sabine,\nherzlichen Glückwunsch an deine Schwester! Ja, ich übernehme gern deine Schicht am Samstag. Ich habe an dem Tag nichts vor. Kannst du dafür nächsten Freitag für mich arbeiten? Da hat mein Sohn Geburtstag.\nViele Grüße\nAhmet",
       "woerter": 40,
       "hilfen": [
        "Herzlichen Glückwunsch …",
        "Ja, ich übernehme gern …",
        "Leider kann ich nicht, weil …",
        "Kannst du dafür …?",
        "Viele Grüße"
       ],
       "erklaerung": "Sabine braucht eine klare Antwort: ja oder nein. Danach ein Grund und ein Vorschlag für den Tausch."
      },
      {
       "level": "B1",
       "id": "akn2",
       "situation": "Dein Nachbar Herr Krüger fährt in den Urlaub und schreibt dir eine Nachricht.",
       "eingang": {
        "von": "Herr Krüger",
        "betreff": null,
        "text": "Guten Tag, ich bin ab Montag zwei Wochen im Urlaub. Könnten Sie in dieser Zeit meine Blumen gießen und die Post aus dem Briefkasten holen? Wann darf ich Ihnen den Schlüssel bringen? Viele Grüße, Krüger"
       },
       "sorte": "sms",
       "an": "Herr Krüger",
       "punkte": [
        {
         "nr": 1,
         "was": "Antwort auf die Bitte",
         "hinweis": "Sag, ob du ihm hilfst."
        },
        {
         "nr": 2,
         "was": "Schlüssel",
         "hinweis": "Nenne eine Zeit, wann er den Schlüssel bringen kann."
        },
        {
         "nr": 3,
         "was": "Rückfrage",
         "hinweis": "Frag nach einem Detail, zum Beispiel wie oft du gießen sollst."
        }
       ],
       "muster": "Lieber Herr Krüger,\ndas mache ich gern. Bringen Sie mir den Schlüssel am besten am Sonntagabend vorbei, da bin ich ab sieben Uhr zu Hause. Wie oft soll ich die Blumen gießen? Ich wünsche Ihnen einen schönen Urlaub!\nViele Grüße\nMaria Costa",
       "woerter": 40,
       "hilfen": [
        "Das mache ich gern.",
        "Bringen Sie mir den Schlüssel am besten …",
        "Da bin ich ab … zu Hause.",
        "Wie oft soll ich …?",
        "Ich wünsche Ihnen einen schönen Urlaub!"
       ],
       "erklaerung": "Herr Krüger siezt dich — also bleibst du beim „Sie\". Seine Frage nach dem Schlüssel braucht eine konkrete Zeit."
      },
      {
       "level": "B1",
       "id": "akn3",
       "situation": "Deine Freundin Lena lädt dich zu einem Picknick ein.",
       "eingang": {
        "von": "Lena",
        "betreff": null,
        "text": "Hi! Am Sonntag machen wir ein Picknick im Stadtpark, ab zwölf Uhr. Hast du Lust? Wir sind ungefähr acht Leute. Kannst du vielleicht etwas zu essen mitbringen? Lena"
       },
       "sorte": "sms",
       "an": "Lena",
       "punkte": [
        {
         "nr": 1,
         "was": "Zusage oder Absage",
         "hinweis": "Sag, ob du kommst."
        },
        {
         "nr": 2,
         "was": "Mitbringen",
         "hinweis": "Sag, was du zum Essen mitbringst."
        },
        {
         "nr": 3,
         "was": "Rückfrage",
         "hinweis": "Frag nach dem genauen Treffpunkt oder nach etwas anderem."
        }
       ],
       "muster": "Hallo Lena,\ndanke für die Einladung! Ich komme sehr gern, aber erst gegen eins, weil ich vorher noch beim Sport bin. Ich bringe einen Nudelsalat und Obst mit. Wo genau treffen wir uns im Park?\nBis Sonntag!\nNadia",
       "woerter": 40,
       "hilfen": [
        "Danke für die Einladung!",
        "Ich komme sehr gern, aber …",
        "Ich bringe … mit.",
        "Wo genau treffen wir uns?",
        "Bis Sonntag!"
       ],
       "erklaerung": "Lena fragt zwei Dinge: Hast du Lust? Und: Bringst du etwas mit? Beide Fragen brauchen eine Antwort."
      }
     ]
    },
    {
     "id": "ta2b1s2r2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "level": "B1",
       "id": "akn4",
       "situation": "Deine Kursleiterin Frau Peters schreibt der Gruppe wegen einer Änderung.",
       "eingang": {
        "von": "Frau Peters",
        "betreff": null,
        "text": "Liebe Kursteilnehmer, der Kurs am Mittwoch fällt leider aus. Wir können die Stunde am Freitag um siebzehn Uhr nachholen. Passt Ihnen dieser Termin? Bitte antworten Sie mir kurz. Ihre Anja Peters"
       },
       "sorte": "sms",
       "an": "Frau Peters",
       "punkte": [
        {
         "nr": 1,
         "was": "Termin",
         "hinweis": "Sag, ob dir der Freitag passt."
        },
        {
         "nr": 2,
         "was": "Grund",
         "hinweis": "Erkläre kurz, warum oder warum nicht."
        },
        {
         "nr": 3,
         "was": "Vorschlag",
         "hinweis": "Schlag einen anderen Termin vor oder frag nach Hausaufgaben."
        }
       ],
       "muster": "Liebe Frau Peters,\nvielen Dank für die Information. Leider passt mir der Freitag nicht, denn ich arbeite bis achtzehn Uhr. Wäre auch Samstagvormittag möglich? Sonst mache ich die Übungen zu Hause. Welche Seiten soll ich machen?\nViele Grüße\nIvan Petrov",
       "woerter": 40,
       "hilfen": [
        "Vielen Dank für die Information.",
        "Leider passt mir … nicht, denn …",
        "Wäre auch … möglich?",
        "Welche Seiten soll ich …?",
        "Viele Grüße"
       ],
       "erklaerung": "Frau Peters fragt direkt: Passt Ihnen der Termin? Wer nein sagt, gibt am besten einen Grund und eine Alternative."
      },
      {
       "level": "B1",
       "id": "akn5",
       "situation": "Dein Freund Tom will am Wochenende umziehen und braucht Hilfe.",
       "eingang": {
        "von": "Tom",
        "betreff": null,
        "text": "Hey, am Samstag ziehe ich endlich um! Kannst du mir helfen? Wir fangen um neun Uhr an. Hast du vielleicht auch ein Auto? Ich lade alle zum Mittagessen ein. Tom"
       },
       "sorte": "sms",
       "an": "Tom",
       "punkte": [
        {
         "nr": 1,
         "was": "Hilfe",
         "hinweis": "Sag, ob und wann du helfen kannst."
        },
        {
         "nr": 2,
         "was": "Auto",
         "hinweis": "Beantworte die Frage nach dem Auto."
        },
        {
         "nr": 3,
         "was": "Angebot oder Frage",
         "hinweis": "Biete noch etwas an oder frag nach der neuen Adresse."
        }
       ],
       "muster": "Hallo Tom,\nklar helfe ich dir! Ich kann aber erst um zehn Uhr kommen. Ein Auto habe ich leider nicht, aber mein Bruder hat einen großen Kombi. Ich frage ihn heute Abend. Wie ist deine neue Adresse?\nBis Samstag!\nPaolo",
       "woerter": 40,
       "hilfen": [
        "Klar helfe ich dir!",
        "Ich kann aber erst um … kommen.",
        "Ein Auto habe ich leider nicht, aber …",
        "Wie ist deine neue Adresse?",
        "Bis Samstag!"
       ],
       "erklaerung": "Die Frage nach dem Auto darf nicht fehlen. Auch ein „nein\" ist eine Antwort, wenn du eine Lösung anbietest."
      },
      {
       "level": "B1",
       "id": "akn6",
       "situation": "Die Mutter eines Schulfreundes deiner Tochter schreibt dir.",
       "eingang": {
        "von": "Frau Wagner",
        "betreff": null,
        "text": "Hallo, hier ist Katrin Wagner, die Mutter von Leon. Leon möchte Ihre Tochter Amira am Donnerstag nach der Schule zu uns einladen. Darf sie mitkommen? Und wann soll sie wieder zu Hause sein?"
       },
       "sorte": "sms",
       "an": "Frau Wagner",
       "punkte": [
        {
         "nr": 1,
         "was": "Erlaubnis",
         "hinweis": "Sag, ob Amira mitkommen darf."
        },
        {
         "nr": 2,
         "was": "Uhrzeit",
         "hinweis": "Sag, wann sie zu Hause sein soll."
        },
        {
         "nr": 3,
         "was": "Abholen oder Info",
         "hinweis": "Sag, wer sie abholt, oder gib eine wichtige Information."
        }
       ],
       "muster": "Liebe Frau Wagner,\nvielen Dank für die Einladung! Amira freut sich sicher sehr. Sie darf gern mitkommen. Um achtzehn Uhr soll sie wieder zu Hause sein. Ich hole sie gegen halb sechs bei Ihnen ab. Wie ist Ihre Adresse?\nViele Grüße\nSamira Haddad",
       "woerter": 40,
       "hilfen": [
        "Vielen Dank für die Einladung!",
        "Sie darf gern mitkommen.",
        "Um … soll sie wieder zu Hause sein.",
        "Ich hole sie … ab.",
        "Wie ist Ihre Adresse?"
       ],
       "erklaerung": "Zwei Fragen, zwei Antworten: Darf sie mitkommen? Wann soll sie zurück sein? Die Uhrzeit muss konkret sein."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "ta2b1sl1",
   "titel": "Prüfungslauf 1",
   "minuten": 45,
   "aufgaben": [
    {
     "level": "B1",
     "eingang": {
      "von": "Olga",
      "betreff": "Kleine Bitte für August",
      "text": "Hallo!\nIch fahre vom 3. bis zum 10. August mit meinem Mann nach Polen zu meinen Eltern. Leider kann unsere Katze Mimi nicht mitkommen. Könntest du sie in dieser Zeit einmal am Tag füttern? Das Futter steht in der Küche im Schrank neben dem Kühlschrank. Den Schlüssel bringe ich dir gern vorbei. Wann bist du am Freitag zu Hause? Unsere Tomaten auf dem Balkon sind übrigens gerade reif, du kannst so viele essen, wie du möchtest! Brauchst du aus Polen vielleicht etwas?\nLiebe Grüße\nOlga"
     },
     "situation": "Deine Nachbarin Olga fährt in Urlaub und bittet dich, ihre Katze zu füttern. Antworte ihr.",
     "an": "Olga",
     "betreff": "AW: Kleine Bitte für August",
     "sorte": "email",
     "punkte": [
      {
       "nr": 1,
       "was": "Katze füttern",
       "hinweis": "Sag, ob du Mimi füttern kannst."
      },
      {
       "nr": 2,
       "was": "Schlüssel",
       "hinweis": "Schreib, wann du am Freitag zu Hause bist."
      },
      {
       "nr": 3,
       "was": "Aus Polen",
       "hinweis": "Antworte auf die Frage, ob sie dir etwas mitbringen soll."
      }
     ],
     "muster": "Liebe Olga,\nnatürlich füttere ich Mimi gern, während ihr in Polen seid. Du weißt ja, dass ich Katzen liebe.\nAm Freitag bin ich ab achtzehn Uhr zu Hause. Dann kannst du mir den Schlüssel bringen und mir auch gleich zeigen, wie viel Futter Mimi bekommt.\nVielen Dank für die Tomaten, darauf freue ich mich schon! Aus Polen brauche ich nichts. Aber wenn du willst, bring mir ein paar Kekse von deiner Mutter mit, die sind so lecker.\nGute Reise und liebe Grüße\nDeine Hanna",
     "woerter": 80,
     "hilfen": [
      "Natürlich … ich gern, während …",
      "Am Freitag bin ich ab … zu Hause.",
      "Dann kannst du …",
      "Vielen Dank für …",
      "Gute Reise und liebe Grüße"
     ],
     "erklaerung": "Die Uhrzeit für den Schlüssel muss konkret sein, sonst ist der Punkt nicht erledigt."
    },
    {
     "level": "B1",
     "id": "akn7",
     "situation": "Dein Kollege Marco fragt wegen der Weihnachtsfeier in der Firma.",
     "eingang": {
      "von": "Marco",
      "betreff": null,
      "text": "Hallo, ich organisiere die Weihnachtsfeier am zwölften Dezember. Kommst du? Und möchtest du lieber Fleisch, Fisch oder das vegetarische Essen? Ich brauche die Antwort bis Freitag. Marco"
     },
     "sorte": "sms",
     "an": "Marco",
     "punkte": [
      {
       "nr": 1,
       "was": "Teilnahme",
       "hinweis": "Sag, ob du kommst."
      },
      {
       "nr": 2,
       "was": "Essen",
       "hinweis": "Wähle ein Essen und sag kurz, warum."
      },
      {
       "nr": 3,
       "was": "Angebot oder Frage",
       "hinweis": "Biete Hilfe an oder frag nach einem Detail."
      }
     ],
     "muster": "Hallo Marco,\ndanke, dass du die Feier organisierst! Ich komme gern. Ich nehme das vegetarische Essen, weil ich kein Fleisch esse. Brauchst du noch Hilfe? Ich kann zum Beispiel die Dekoration machen. Wo findet die Feier statt?\nGruß\nElena",
     "woerter": 40,
     "hilfen": [
      "Danke, dass du … organisierst!",
      "Ich komme gern.",
      "Ich nehme …, weil …",
      "Brauchst du noch Hilfe?",
      "Wo findet … statt?"
     ],
     "erklaerung": "Marco braucht zwei Informationen für seine Planung: Kommst du, und welches Essen? Fehlt eine, ist die Aufgabe nicht erfüllt."
    }
   ]
  },
  {
   "id": "ta2b1sl2",
   "titel": "Prüfungslauf 2",
   "minuten": 45,
   "aufgaben": [
    {
     "level": "B1",
     "eingang": {
      "von": "Karin Seidel",
      "betreff": "Abschied von Herrn Wendt",
      "text": "Lieber Herr Novak,\nwie Sie wissen, verlässt uns unser Kollege Herr Wendt Ende Mai, weil er in Rente geht. Wir möchten ihm ein Geschenk von der ganzen Abteilung machen. Jeder gibt zehn Euro. Machen Sie mit? Außerdem planen wir eine kleine Feier am letzten Freitag im Mai nach der Arbeit in der Kantine. Haben Sie eine Idee, was wir ihm schenken könnten? Sie arbeiten ja schon lange mit ihm zusammen. Und könnten Sie bei der Feier eine kurze Rede halten?\nViele Grüße\nKarin Seidel"
     },
     "situation": "Ihre Kollegin Frau Seidel plant den Abschied eines Kollegen. Antworten Sie ihr.",
     "an": "Karin Seidel",
     "betreff": "AW: Abschied von Herrn Wendt",
     "sorte": "email",
     "punkte": [
      {
       "nr": 1,
       "was": "Geld",
       "hinweis": "Sagen Sie, ob Sie beim Geschenk mitmachen."
      },
      {
       "nr": 2,
       "was": "Geschenkidee",
       "hinweis": "Machen Sie einen Vorschlag für ein Geschenk."
      },
      {
       "nr": 3,
       "was": "Rede",
       "hinweis": "Antworten Sie auf die Bitte, eine kurze Rede zu halten."
      }
     ],
     "muster": "Liebe Frau Seidel,\nvielen Dank für Ihre Nachricht. Natürlich mache ich beim Geschenk mit, die zehn Euro gebe ich Ihnen morgen.\nHerr Wendt fährt sehr gern Fahrrad. Vielleicht können wir ihm einen Gutschein für ein Fahrradgeschäft schenken? Dann kann er in der Rente schöne Touren machen.\nEine kurze Rede halte ich gern, auch wenn ich ein bisschen nervös bin. Wir arbeiten seit zwölf Jahren zusammen, da habe ich viel zu erzählen.\nViele Grüße\nJan Novak",
     "woerter": 80,
     "hilfen": [
      "Vielen Dank für Ihre Nachricht.",
      "Natürlich mache ich mit …",
      "Vielleicht können wir ihm … schenken?",
      "Eine kurze Rede halte ich gern, auch wenn …",
      "Viele Grüße"
     ],
     "erklaerung": "Ein Vorschlag mit Grund wirkt viel besser als nur „ein Gutschein\"."
    },
    {
     "level": "B1",
     "id": "akn8",
     "situation": "Deine Freundin Julia ist krank und schreibt dir.",
     "eingang": {
      "von": "Julia",
      "betreff": null,
      "text": "Hallo, ich liege mit Fieber im Bett und kann nicht einkaufen. Mein Kühlschrank ist fast leer. Könntest du mir heute etwas aus dem Supermarkt mitbringen? Das wäre so lieb! Julia"
     },
     "sorte": "sms",
     "an": "Julia",
     "punkte": [
      {
       "nr": 1,
       "was": "Antwort auf die Bitte",
       "hinweis": "Sag, ob und wann du kommst."
      },
      {
       "nr": 2,
       "was": "Einkauf",
       "hinweis": "Frag, was sie genau braucht, oder mach einen Vorschlag."
      },
      {
       "nr": 3,
       "was": "Gute Wünsche",
       "hinweis": "Wünsch ihr gute Besserung oder biete noch etwas an."
      }
     ],
     "muster": "Liebe Julia,\ndu Arme! Natürlich gehe ich für dich einkaufen. Nach der Arbeit, so gegen sechs Uhr, bin ich bei dir. Was brauchst du genau? Ich kann dir auch eine Suppe kochen. Gute Besserung!\nLiebe Grüße\nFatma",
     "woerter": 40,
     "hilfen": [
      "Du Arme!",
      "Natürlich gehe ich für dich einkaufen.",
      "Gegen … bin ich bei dir.",
      "Was brauchst du genau?",
      "Gute Besserung!"
     ],
     "erklaerung": "Bei einer Bitte unter Freunden zählt: klare Zusage, eine Uhrzeit und eine Frage, was genau gebraucht wird."
    }
   ]
  }
 ]
};
