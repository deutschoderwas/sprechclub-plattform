/* ============================================================
   grammatik-b2c1-mehr.js — mehr Übung auf B2 und C1

   Erzeugt von bau/mach-grammatik-b2c1.js aus
   bau/grammatik-b2-mehr.json und bau/grammatik-c1-mehr.json.
   Nicht von Hand ändern.

   Grammatik B2 kam auf 225 Aufgaben in elf Themen, C1 auf 212 in
   zehn — je Thema also zwischen zehn und sechsundzwanzig. Wer
   zweimal übte, bekam dieselben Sätze wieder, und das ausgerechnet
   auf den Stufen, auf denen für Goethe und telc geübt wird.

   Diese Datei legt keine neuen Themen an, sondern ergänzt vorhandene.
   Deshalb muss sie NACH grammatik-neu.js und grammatik-c1-neu.js
   geladen werden.
   ============================================================ */
(function () {
  if (!window.UEBUNGEN || !window.UEBUNGEN.skills) return;
  var g = null, s = window.UEBUNGEN.skills;
  for (var i = 0; i < s.length; i++) { if (s[i].id === 'grammatik') { g = s[i]; break; } }
  if (!g || !g.themes) return;

  var MEHR = {
 "indirekte-rede": [
  {
   "type": "gap",
   "text": "Die Nachbarin erzählte, sie ___ jeden Morgen um sechs aus dem Haus. (gehen)",
   "answer": "gehe",
   "alts": [],
   "explain": "In der indirekten Rede steht der Konjunktiv I: sie geht → sie gehe."
  },
  {
   "type": "gap",
   "text": "Der Kollege behauptete, er ___ von der Änderung nichts. (wissen)",
   "answer": "wisse",
   "alts": [],
   "explain": "wissen im Konjunktiv I: er weiß → er wisse."
  },
  {
   "type": "gap",
   "text": "Man teilte uns mit, der Antrag ___ nächste Woche bearbeitet. (werden)",
   "answer": "werde",
   "alts": [],
   "explain": "Auch das Passiv steht in der indirekten Rede im Konjunktiv I: wird → werde."
  },
  {
   "type": "gap",
   "text": "Sie sagte, sie ___ den Termin unbedingt einhalten. (wollen)",
   "answer": "wolle",
   "alts": [],
   "explain": "wollen im Konjunktiv I: sie will → sie wolle."
  },
  {
   "type": "gap",
   "text": "Er meinte, die Unterlagen ___ vollständig. (sein, Plural)",
   "answer": "seien",
   "alts": [],
   "explain": "Der Plural von sei ist seien — die Form, die man sich extra merken muss."
  },
  {
   "type": "gap",
   "text": "Die Ärztin sagte, ich ___ mich mehr bewegen. (sollen)",
   "answer": "solle",
   "alts": [],
   "explain": "sollen im Konjunktiv I: ich soll → ich solle."
  },
  {
   "type": "gap",
   "text": "Der Vermieter sagte, er ___ die Wohnung erst nächste Woche zeigen. (dürfen)",
   "answer": "dürfe",
   "alts": [],
   "explain": "dürfen im Konjunktiv I: er darf → er dürfe."
  },
  {
   "type": "choice",
   "q": "Wann nimmt man in der indirekten Rede den Konjunktiv II?",
   "options": [
    "Immer, der Konjunktiv I ist veraltet.",
    "Wenn der Konjunktiv I genauso aussieht wie der Indikativ.",
    "Nur nach dass.",
    "Nur in der Zeitung."
   ],
   "answer": 1,
   "explain": "sie haben → sie haben: da sieht man den Unterschied nicht. Deshalb sagt man sie hätten."
  },
  {
   "type": "choice",
   "q": "„Ich habe den Brief abgeschickt\", sagte sie. Wie lautet die indirekte Rede?",
   "options": [
    "Sie sagte, sie hat den Brief abgeschickt.",
    "Sie sagte, sie habe den Brief abgeschickt.",
    "Sie sagte, sie hätte den Brief abschicken.",
    "Sie sagte, sie sei den Brief abgeschickt."
   ],
   "answer": 1,
   "explain": "Das Perfekt bleibt Perfekt, nur haben wird zum Konjunktiv I: habe abgeschickt."
  },
  {
   "type": "choice",
   "q": "„Kommen Sie morgen?\" Wie berichtet man diese Frage?",
   "options": [
    "Er fragte, ob wir morgen kämen.",
    "Er fragte, dass wir morgen kommen.",
    "Er fragte, wir kommen morgen.",
    "Er fragte, kommen wir morgen."
   ],
   "answer": 0,
   "explain": "Fragen ohne Fragewort werden mit ob angeschlossen, und das Verb steht am Ende."
  },
  {
   "type": "choice",
   "q": "Warum steht in Zeitungsberichten und Protokollen so oft der Konjunktiv I?",
   "options": [
    "Weil er höflicher klingt.",
    "Weil er zeigt: Das ist nicht meine Behauptung, ich gebe sie nur wieder.",
    "Weil er kürzer ist.",
    "Weil er in der Vergangenheit steht."
   ],
   "answer": 1,
   "explain": "Der Konjunktiv I nimmt Abstand. Wer ihn weglässt, macht die fremde Aussage zur eigenen."
  },
  {
   "type": "order",
   "answer": "Der Sachbearbeiter sagte, der Bescheid sei bereits unterwegs",
   "hint": "Beginne mit „Der Sachbearbeiter\".",
   "explain": "Nach dem Komma folgt ein Hauptsatz — sei bleibt an zweiter Stelle."
  },
  {
   "type": "order",
   "answer": "Sie fragte, ob ich die Unterlagen mitgebracht hätte",
   "hint": "Beginne mit „Sie\".",
   "explain": "Nach ob steht das Verb am Ende: mitgebracht hätte."
  },
  {
   "type": "order",
   "answer": "Er erklärte, er könne den Termin leider nicht wahrnehmen",
   "hint": "Beginne mit „Er\".",
   "explain": "könne steht an zweiter Stelle des Nebensatzes, der Infinitiv ganz hinten."
  }
 ],
 "nominalisierung": [
  {
   "type": "gap",
   "text": "___ des schlechten Wetters fiel das Fest aus.",
   "answer": "Aufgrund",
   "alts": [
    "aufgrund"
   ],
   "explain": "aufgrund + Genitiv: aufgrund des Wetters. Im Gespräch sagt man eher wegen."
  },
  {
   "type": "gap",
   "text": "Vor ___ des Vertrags solltest du jede Zeile lesen.",
   "answer": "Unterzeichnung",
   "alts": [],
   "explain": "vor + Dativ: vor der Unterzeichnung. Aus unterschreiben wird die Unterzeichnung."
  },
  {
   "type": "gap",
   "text": "Bei ___ der Frist verfällt der Anspruch.",
   "answer": "Überschreitung",
   "alts": [],
   "explain": "Aus die Frist überschreiten wird bei Überschreitung der Frist."
  },
  {
   "type": "gap",
   "text": "Trotz ___ aller Unterlagen wurde der Antrag abgelehnt.",
   "answer": "Vorlage",
   "alts": [],
   "explain": "Aus obwohl er alle Unterlagen vorgelegt hat wird trotz Vorlage aller Unterlagen."
  },
  {
   "type": "gap",
   "text": "Nach ___ der Prüfung bekommst du dein Zeugnis.",
   "answer": "Bestehen",
   "alts": [],
   "explain": "Auch ein Verb kann als Nomen stehen: das Bestehen. Nach dem Bestehen, hier ohne Artikel."
  },
  {
   "type": "gap",
   "text": "Zur ___ Ihrer Anmeldung schicken wir Ihnen eine E-Mail.",
   "answer": "Bestätigung",
   "alts": [],
   "explain": "zur = zu der. Aus damit wir bestätigen wird zur Bestätigung."
  },
  {
   "type": "gap",
   "text": "Seit ___ der neuen Regel ist alles komplizierter.",
   "answer": "Einführung",
   "alts": [],
   "explain": "seit + Dativ: seit der Einführung. Aus seit die Regel eingeführt wurde."
  },
  {
   "type": "choice",
   "q": "Wie heißt „Weil es geregnet hat, blieben wir zu Hause\" im Nominalstil?",
   "options": [
    "Wegen des Regens blieben wir zu Hause.",
    "Wegen dem Regen blieben wir zu Hause.",
    "Weil des Regens blieben wir zu Hause.",
    "Aus Regen blieben wir zu Hause."
   ],
   "answer": 0,
   "explain": "Im Schriftdeutsch steht wegen mit Genitiv: wegen des Regens."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist der Nominalstil von „Bevor Sie unterschreiben, prüfen Sie den Vertrag\"?",
   "options": [
    "Vor der Unterschrift prüfen Sie den Vertrag.",
    "Vor dem Unterschreiben Sie prüfen den Vertrag.",
    "Bevor der Unterschrift prüfen Sie den Vertrag.",
    "Nach der Unterschrift prüfen Sie den Vertrag."
   ],
   "answer": 0,
   "explain": "bevor → vor + Nomen im Dativ. Die Reihenfolge im Hauptsatz bleibt: Verb an zweiter Stelle."
  },
  {
   "type": "choice",
   "q": "Wo begegnet dir der Nominalstil am häufigsten?",
   "options": [
    "Im Gespräch mit Freunden.",
    "In Briefen von Behörden und in Verträgen.",
    "In Liedern.",
    "In Kinderbüchern."
   ],
   "answer": 1,
   "explain": "Der Nominalstil packt viel in wenige Wörter. Das ist knapp, aber schwer zu lesen — deshalb steht er in Ämtern und Verträgen."
  },
  {
   "type": "choice",
   "q": "„Während der Bearbeitung\" — welcher Nebensatz steckt dahinter?",
   "options": [
    "Während bearbeitet wird.",
    "Während wir bearbeiten werden.",
    "Nachdem bearbeitet wurde.",
    "Bevor bearbeitet wird."
   ],
   "answer": 0,
   "explain": "während bleibt während. Nur das Verb wird zum Nomen: bearbeiten → die Bearbeitung."
  },
  {
   "type": "order",
   "answer": "Nach Prüfung Ihrer Unterlagen melden wir uns bei Ihnen",
   "hint": "Beginne mit „Nach\".",
   "explain": "Steht die Angabe vorn, rückt das Verb an die zweite Stelle: melden wir."
  },
  {
   "type": "order",
   "answer": "Wegen des starken Schneefalls fällt der Unterricht heute aus",
   "hint": "Beginne mit „Wegen\".",
   "explain": "ausfallen ist trennbar: das aus steht ganz hinten."
  }
 ],
 "passiv-b2": [
  {
   "type": "gap",
   "text": "Das Paket ist gestern zugestellt ___.",
   "answer": "worden",
   "alts": [],
   "explain": "Im Passiv Perfekt heißt es worden, nicht geworden."
  },
  {
   "type": "gap",
   "text": "Es ___ gestern bis spät in die Nacht gearbeitet.",
   "answer": "wurde",
   "alts": [],
   "explain": "Ein Passiv ohne Handelnden. Das es steht nur da, damit der Satz einen Anfang hat."
  },
  {
   "type": "gap",
   "text": "Der Fehler hätte leicht vermieden ___ können.",
   "answer": "werden",
   "alts": [],
   "explain": "Passiv mit Modalverb in der Vergangenheit: hätte vermieden werden können — drei Verben am Ende."
  },
  {
   "type": "gap",
   "text": "Nach dem Umbau ist die Halle wieder ___. (öffnen)",
   "answer": "geöffnet",
   "alts": [],
   "explain": "Zustandspassiv: sein + Partizip. Es beschreibt das Ergebnis, nicht den Vorgang."
  },
  {
   "type": "gap",
   "text": "Die Rechnung ist bereits ___. (bezahlen)",
   "answer": "bezahlt",
   "alts": [],
   "explain": "ist bezahlt = der Zustand. wird bezahlt wäre der Vorgang."
  },
  {
   "type": "gap",
   "text": "Das Formular kann auch online ___ werden.",
   "answer": "ausgefüllt",
   "alts": [],
   "explain": "Passiv mit Modalverb: kann ausgefüllt werden. Das Partizip steht vor werden."
  },
  {
   "type": "gap",
   "text": "Ihm ___ bis heute nicht geantwortet worden.",
   "answer": "ist",
   "alts": [],
   "explain": "antworten steht mit Dativ. Im Passiv bleibt der Dativ, ein Subjekt gibt es nicht."
  },
  {
   "type": "choice",
   "q": "Was ist der Unterschied zwischen „Die Tür wird geschlossen\" und „Die Tür ist geschlossen\"?",
   "options": [
    "Das Erste beschreibt den Vorgang, das Zweite den Zustand.",
    "Beides ist dasselbe.",
    "Das Erste steht in der Vergangenheit.",
    "Das Zweite ist Aktiv."
   ],
   "answer": 0,
   "explain": "werden = etwas passiert gerade. sein = so ist es jetzt."
  },
  {
   "type": "choice",
   "q": "Wie heißt „Man hat den Termin verschoben\" im Passiv?",
   "options": [
    "Der Termin ist verschoben worden.",
    "Der Termin ist verschoben geworden.",
    "Der Termin wurde verschoben werden.",
    "Der Termin hat verschoben worden."
   ],
   "answer": 0,
   "explain": "Im Passiv verliert werden sein ge-: worden."
  },
  {
   "type": "choice",
   "q": "„Der Antrag muss geprüft werden.\" Wo steht das Modalverb?",
   "options": [
    "An zweiter Stelle, der Rest geht ans Ende.",
    "Ganz am Ende.",
    "Vor dem Subjekt.",
    "Es entfällt im Passiv."
   ],
   "answer": 0,
   "explain": "muss steht an Position zwei, geprüft werden bildet die Klammer am Satzende."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist richtig?",
   "options": [
    "Mir wurde geholfen.",
    "Ich wurde geholfen.",
    "Mich wurde geholfen.",
    "Mir wurde geholft."
   ],
   "answer": 0,
   "explain": "helfen steht mit Dativ. Im Passiv bleibt der Dativ stehen — der Satz hat gar kein Subjekt."
  },
  {
   "type": "order",
   "answer": "Der Termin hätte längst verschoben werden müssen",
   "hint": "Beginne mit „Der\".",
   "explain": "Drei Verben am Ende, und zwar in dieser Reihenfolge: Partizip, werden, Modalverb."
  },
  {
   "type": "order",
   "answer": "Über den Antrag ist bis heute nicht entschieden worden",
   "hint": "Beginne mit „Über\".",
   "explain": "Steht die Angabe vorn, rückt ist an die zweite Stelle."
  }
 ],
 "konjunktiv2-vergangenheit": [
  {
   "type": "gap",
   "text": "Wenn ich das gewusst ___, wäre ich früher losgefahren.",
   "answer": "hätte",
   "alts": [],
   "explain": "Konjunktiv II der Vergangenheit: hätte + Partizip."
  },
  {
   "type": "gap",
   "text": "Ohne deine Hilfe ___ ich das nie geschafft.",
   "answer": "hätte",
   "alts": [],
   "explain": "Auch ohne wenn steht der Konjunktiv II: hätte geschafft."
  },
  {
   "type": "gap",
   "text": "Beinahe ___ ich den Zug verpasst.",
   "answer": "hätte",
   "alts": [],
   "explain": "beinahe oder fast + Konjunktiv II: es ist gerade nicht passiert."
  },
  {
   "type": "gap",
   "text": "Wenn wir pünktlich losgefahren ___, wären wir jetzt schon da.",
   "answer": "wären",
   "alts": [],
   "explain": "fahren bildet das Perfekt mit sein, deshalb wären gefahren."
  },
  {
   "type": "gap",
   "text": "Du ___ mich ruhig anrufen können.",
   "answer": "hättest",
   "alts": [],
   "explain": "Modalverb in der Vergangenheit: hättest anrufen können — zwei Infinitive am Ende."
  },
  {
   "type": "gap",
   "text": "Das ___ nicht passieren dürfen.",
   "answer": "hätte",
   "alts": [],
   "explain": "Auch dürfen bildet die Vergangenheit mit hätte + zwei Infinitiven."
  },
  {
   "type": "gap",
   "text": "An deiner Stelle ___ ich sofort widersprochen.",
   "answer": "hätte",
   "alts": [],
   "explain": "An deiner Stelle … — der klassische Rat im Konjunktiv II."
  },
  {
   "type": "choice",
   "q": "Was drückt „Ich hätte den Antrag früher stellen sollen\" aus?",
   "options": [
    "Einen Plan für morgen.",
    "Ein Bedauern über etwas, das nicht passiert ist.",
    "Eine höfliche Bitte.",
    "Eine Vermutung über die Zukunft."
   ],
   "answer": 1,
   "explain": "Der Konjunktiv II der Vergangenheit redet über das, was hätte sein können — und nicht war."
  },
  {
   "type": "choice",
   "q": "Wie lautet die Vergangenheit von „Ich könnte dir helfen\"?",
   "options": [
    "Ich hätte dir helfen können.",
    "Ich könnte dir geholfen haben.",
    "Ich hätte dir geholfen können.",
    "Ich wäre dir helfen können."
   ],
   "answer": 0,
   "explain": "Bei Modalverben stehen am Ende zwei Infinitive: helfen können. Nicht geholfen."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist richtig?",
   "options": [
    "Wenn er gekommen wäre, hätten wir angefangen.",
    "Wenn er gekommen hätte, wären wir angefangen.",
    "Wenn er kommen wäre, hätten wir angefangen.",
    "Wenn er gekommen wäre, wären wir angefangen."
   ],
   "answer": 0,
   "explain": "kommen nimmt sein (wäre), anfangen nimmt haben (hätten). Jedes Verb behält sein Hilfsverb."
  },
  {
   "type": "choice",
   "q": "„Fast wäre der Vertrag geplatzt.\" Was ist passiert?",
   "options": [
    "Der Vertrag ist geplatzt.",
    "Der Vertrag ist nicht geplatzt.",
    "Der Vertrag wird bald platzen.",
    "Der Vertrag wurde unterschrieben und wieder aufgelöst."
   ],
   "answer": 1,
   "explain": "fast oder beinahe mit Konjunktiv II heißt: Es hätte passieren können, ist aber nicht passiert."
  },
  {
   "type": "order",
   "answer": "An deiner Stelle hätte ich das Angebot sofort angenommen",
   "hint": "Beginne mit „An\".",
   "explain": "Steht die Angabe vorn, rückt hätte an die zweite Stelle."
  },
  {
   "type": "order",
   "answer": "Ohne den Stau wären wir längst angekommen",
   "hint": "Beginne mit „Ohne\".",
   "explain": "ankommen nimmt sein: wären angekommen."
  }
 ],
 "genitiv-b2": [
  {
   "type": "gap",
   "text": "Innerhalb ___ nächsten Woche bekommen Sie Bescheid.",
   "answer": "der",
   "alts": [],
   "explain": "innerhalb + Genitiv. Bei feminin heißt der Genitiv der."
  },
  {
   "type": "gap",
   "text": "Außerhalb ___ Öffnungszeiten erreichen Sie uns per Mail.",
   "answer": "der",
   "alts": [],
   "explain": "Plural im Genitiv ist immer der: der Öffnungszeiten."
  },
  {
   "type": "gap",
   "text": "Anstelle ___ Chefs kam seine Vertretung.",
   "answer": "des",
   "alts": [],
   "explain": "anstelle + Genitiv, maskulin: des Chefs. Das Nomen bekommt zusätzlich ein -s."
  },
  {
   "type": "gap",
   "text": "Angesichts ___ Lage haben wir den Termin verschoben.",
   "answer": "der",
   "alts": [],
   "explain": "angesichts + Genitiv: angesichts der Lage."
  },
  {
   "type": "gap",
   "text": "Er wurde wegen ___ Verspätung ermahnt.",
   "answer": "der",
   "alts": [],
   "explain": "wegen + Genitiv. Im Gespräch hört man auch wegen dem — geschrieben gilt der Genitiv."
  },
  {
   "type": "gap",
   "text": "Trotz ___ Warnung ist er losgefahren.",
   "answer": "der",
   "alts": [],
   "explain": "trotz + Genitiv: trotz der Warnung."
  },
  {
   "type": "gap",
   "text": "Während ___ Umbaus bleibt das Büro geschlossen.",
   "answer": "des",
   "alts": [],
   "explain": "während + Genitiv, maskulin: des Umbaus."
  },
  {
   "type": "choice",
   "q": "Welche Präposition steht NICHT mit Genitiv?",
   "options": [
    "während",
    "trotz",
    "seit",
    "innerhalb"
   ],
   "answer": 2,
   "explain": "seit steht immer mit Dativ: seit dem Umzug, seit einem Jahr."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist im Schriftdeutsch richtig?",
   "options": [
    "Wegen des Regens fiel das Spiel aus.",
    "Wegen dem Regen fiel das Spiel aus.",
    "Wegen der Regen fiel das Spiel aus.",
    "Wegen den Regen fiel das Spiel aus."
   ],
   "answer": 0,
   "explain": "Geschrieben gilt der Genitiv: wegen des Regens."
  },
  {
   "type": "choice",
   "q": "„Der Antrag des Mieters\" — was zeigt das -s?",
   "options": [
    "Den Plural.",
    "Den Genitiv bei maskulinen und neutralen Nomen.",
    "Den Dativ.",
    "Eine Verkleinerung."
   ],
   "answer": 1,
   "explain": "Maskulin und neutral bekommen im Genitiv Singular ein -s oder -es: des Mieters, des Kindes."
  },
  {
   "type": "choice",
   "q": "Wann sagt man „wegen mir\" statt „meinetwegen\"?",
   "options": [
    "Nie, meinetwegen ist die richtige Form.",
    "Immer, beides ist gleich.",
    "Nur in Verträgen.",
    "Nur in der Schriftsprache."
   ],
   "answer": 0,
   "explain": "Bei Personalpronomen gibt es eigene Formen: meinetwegen, deinetwegen, unseretwegen."
  },
  {
   "type": "order",
   "answer": "Innerhalb der nächsten vierzehn Tage erhalten Sie unseren Bescheid",
   "hint": "Beginne mit „Innerhalb\".",
   "explain": "Steht die Angabe vorn, rückt erhalten an die zweite Stelle."
  },
  {
   "type": "order",
   "answer": "Während des laufenden Verfahrens dürfen wir keine Auskunft geben",
   "hint": "Beginne mit „Während\".",
   "explain": "dürfen steht an zweiter Stelle, geben ganz hinten."
  }
 ],
 "gegensatz-konnektoren": [
  {
   "type": "gap",
   "text": "___ er sich beeilt hat, kam er zu spät.",
   "answer": "Obwohl",
   "alts": [
    "obwohl"
   ],
   "explain": "obwohl leitet einen Nebensatz ein — das Verb steht am Ende: beeilt hat."
  },
  {
   "type": "gap",
   "text": "Er hat sich beeilt. ___ kam er zu spät.",
   "answer": "Trotzdem",
   "alts": [
    "trotzdem"
   ],
   "explain": "trotzdem steht im Hauptsatz an erster Stelle, das Verb folgt sofort: kam er."
  },
  {
   "type": "gap",
   "text": "___ des Regens sind wir spazieren gegangen.",
   "answer": "Trotz",
   "alts": [
    "trotz"
   ],
   "explain": "trotz ist eine Präposition und steht mit Genitiv, nicht mit einem Satz."
  },
  {
   "type": "gap",
   "text": "Die Miete ist hoch, ___ nehme ich die Wohnung.",
   "answer": "trotzdem",
   "alts": [],
   "explain": "Nach dem Komma ein Hauptsatz: trotzdem nehme ich — das Verb bleibt an zweiter Stelle."
  },
  {
   "type": "gap",
   "text": "Er ist der Beste, ___ hat er die Stelle nicht bekommen.",
   "answer": "dennoch",
   "alts": [],
   "explain": "dennoch ist die etwas gehobenere Schwester von trotzdem."
  },
  {
   "type": "gap",
   "text": "Sie hatte kaum geübt. ___ hat sie bestanden.",
   "answer": "Dennoch",
   "alts": [
    "dennoch"
   ],
   "explain": "dennoch am Satzanfang: das Verb kommt sofort danach."
  },
  {
   "type": "gap",
   "text": "Ich mag ihn, ___ verstehe ich seine Entscheidung nicht.",
   "answer": "trotzdem",
   "alts": [],
   "explain": "Zwei Hauptsätze, verbunden mit trotzdem. Danach steht das Verb."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist richtig?",
   "options": [
    "Obwohl es regnete, gingen wir los.",
    "Obwohl regnete es, gingen wir los.",
    "Obwohl es regnete, wir gingen los.",
    "Trotzdem es regnete, gingen wir los."
   ],
   "answer": 0,
   "explain": "Nach obwohl steht das Verb am Ende, im Hauptsatz danach direkt vorn."
  },
  {
   "type": "choice",
   "q": "Was folgt auf „trotz\"?",
   "options": [
    "Ein ganzer Satz.",
    "Ein Nomen im Genitiv.",
    "Ein Infinitiv mit zu.",
    "Ein Adjektiv."
   ],
   "answer": 1,
   "explain": "trotz ist eine Präposition: trotz des Regens. Für einen ganzen Satz braucht man obwohl."
  },
  {
   "type": "choice",
   "q": "„Er hat wenig Zeit. ___ hilft er jedem.\" Was passt nicht?",
   "options": [
    "Trotzdem",
    "Dennoch",
    "Obwohl",
    "Gleichwohl"
   ],
   "answer": 2,
   "explain": "obwohl leitet einen Nebensatz ein und kann nicht allein einen Hauptsatz beginnen."
  },
  {
   "type": "choice",
   "q": "Welcher Unterschied besteht zwischen aber und trotzdem?",
   "options": [
    "aber verbindet nur, trotzdem betont den Widerspruch.",
    "Es gibt keinen Unterschied.",
    "aber steht immer am Satzanfang.",
    "trotzdem braucht den Genitiv."
   ],
   "answer": 0,
   "explain": "aber stellt nebeneinander, trotzdem sagt: obwohl das eine gilt, kommt das andere."
  },
  {
   "type": "order",
   "answer": "Obwohl der Antrag vollständig war wurde er abgelehnt",
   "hint": "Beginne mit „Obwohl\".",
   "explain": "Im Nebensatz steht das Verb am Ende, danach folgt der Hauptsatz mit dem Verb vorn."
  },
  {
   "type": "order",
   "answer": "Trotz mehrfacher Nachfrage haben wir keine Antwort bekommen",
   "hint": "Beginne mit „Trotz\".",
   "explain": "trotz + Genitiv, danach das Verb an zweiter Stelle: haben wir."
  }
 ],
 "verben-mit-praeposition": [
  {
   "type": "gap",
   "text": "Ich bewerbe mich ___ eine Stelle als Pflegefachkraft.",
   "answer": "um",
   "alts": [],
   "explain": "sich bewerben um + Akkusativ. Nicht für."
  },
  {
   "type": "gap",
   "text": "Wir müssen uns ___ die Prüfung vorbereiten.",
   "answer": "auf",
   "alts": [],
   "explain": "sich vorbereiten auf + Akkusativ."
  },
  {
   "type": "gap",
   "text": "Sie leidet ___ starken Kopfschmerzen.",
   "answer": "unter",
   "alts": [],
   "explain": "leiden unter + Dativ, wenn es um eine Belastung geht."
  },
  {
   "type": "gap",
   "text": "Es hängt ___ Wetter ab, ob wir fahren.",
   "answer": "vom",
   "alts": [],
   "explain": "abhängen von + Dativ. von dem wird zu vom."
  },
  {
   "type": "gap",
   "text": "Ich zweifle ___ seiner Aussage.",
   "answer": "an",
   "alts": [],
   "explain": "zweifeln an + Dativ."
  },
  {
   "type": "gap",
   "text": "Bitte achten Sie ___ die Frist.",
   "answer": "auf",
   "alts": [],
   "explain": "achten auf + Akkusativ."
  },
  {
   "type": "gap",
   "text": "Er hat sich ___ dem Verlust nie erholt.",
   "answer": "von",
   "alts": [],
   "explain": "sich erholen von + Dativ."
  },
  {
   "type": "choice",
   "q": "Welche Präposition gehört zu „sich kümmern\"?",
   "options": [
    "um",
    "für",
    "auf",
    "über"
   ],
   "answer": 0,
   "explain": "sich kümmern um + Akkusativ: Ich kümmere mich um die Anmeldung."
  },
  {
   "type": "choice",
   "q": "„Ich erinnere mich ___ den Tag.\" Was passt?",
   "options": [
    "an",
    "auf",
    "über",
    "für"
   ],
   "answer": 0,
   "explain": "sich erinnern an + Akkusativ. Achtung: erinnern nimmt an, nicht auf."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist richtig?",
   "options": [
    "Ich freue mich auf den Urlaub.",
    "Ich freue mich für den Urlaub.",
    "Ich freue mich über den Urlaub, der nächste Woche kommt.",
    "Ich freue mich an den Urlaub."
   ],
   "answer": 0,
   "explain": "sich freuen auf = etwas kommt noch. sich freuen über = es ist schon passiert."
  },
  {
   "type": "choice",
   "q": "Wie fragt man nach „Ich warte auf den Bus\"?",
   "options": [
    "Worauf wartest du?",
    "Auf was wartest du gerade nicht?",
    "Wofür wartest du?",
    "Woran wartest du?"
   ],
   "answer": 0,
   "explain": "Bei Sachen: wo + Präposition. Bei Personen: Auf wen wartest du?"
  },
  {
   "type": "order",
   "answer": "Auf deine Antwort warte ich schon seit einer Woche",
   "hint": "Beginne mit „Auf\".",
   "explain": "Steht die Ergänzung vorn, rückt das Verb an die zweite Stelle: warte ich."
  },
  {
   "type": "order",
   "answer": "Über die Verzögerung haben wir uns beim Amt beschwert",
   "hint": "Beginne mit „Über\".",
   "explain": "sich beschweren über + Akkusativ, im Perfekt steht beschwert ganz hinten."
  }
 ],
 "adjektivendungen": [
  {
   "type": "gap",
   "text": "Mit ___ Grüßen (freundlich)",
   "answer": "freundlichen",
   "alts": [],
   "explain": "Ohne Artikel im Dativ Plural endet das Adjektiv auf -en. Der Standardschluss jeder Mail."
  },
  {
   "type": "gap",
   "text": "Wir suchen eine ___ Wohnung. (ruhig)",
   "answer": "ruhige",
   "alts": [],
   "explain": "Nach ein bei feminin im Akkusativ: -e."
  },
  {
   "type": "gap",
   "text": "Er trinkt ___ Kaffee. (schwarz, ohne Artikel)",
   "answer": "schwarzen",
   "alts": [],
   "explain": "Ohne Artikel im Akkusativ maskulin muss das Adjektiv selbst den Fall zeigen: -en."
  },
  {
   "type": "gap",
   "text": "Das ist ein ___ Argument. (gut)",
   "answer": "gutes",
   "alts": [],
   "explain": "Nach ein bei neutral: -es. Der Artikel zeigt hier nichts, also zeigt es das Adjektiv."
  },
  {
   "type": "gap",
   "text": "In dem ___ Haus wohnt niemand mehr. (alt)",
   "answer": "alten",
   "alts": [],
   "explain": "Nach dem bestimmten Artikel im Dativ immer -en."
  },
  {
   "type": "gap",
   "text": "Sie hat ___ Erfahrung mitgebracht. (viel, ohne Artikel)",
   "answer": "viel",
   "alts": [],
   "explain": "viel bleibt vor einem nicht zählbaren Nomen im Singular ohne Endung."
  },
  {
   "type": "gap",
   "text": "Trotz ___ Wetters gingen wir los. (schlecht)",
   "answer": "schlechten",
   "alts": [],
   "explain": "Genitiv maskulin oder neutral: -en. Das -s trägt schon das Nomen."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist richtig?",
   "options": [
    "Ich habe einen neuen Vertrag.",
    "Ich habe einen neuer Vertrag.",
    "Ich habe ein neuen Vertrag.",
    "Ich habe einen neue Vertrag."
   ],
   "answer": 0,
   "explain": "Akkusativ maskulin: einen neuen Vertrag."
  },
  {
   "type": "choice",
   "q": "„___ Menschen warten draußen.\" (viele) Welche Endung?",
   "options": [
    "Viele",
    "Vielen",
    "Vieler",
    "Viel"
   ],
   "answer": 0,
   "explain": "Im Plural Nominativ ohne Artikel: -e."
  },
  {
   "type": "choice",
   "q": "Warum heißt es „ein guter Freund\", aber „der gute Freund\"?",
   "options": [
    "Weil ein den Fall nicht zeigt, muss das Adjektiv es tun.",
    "Weil gut unregelmäßig ist.",
    "Weil Freund maskulin ist.",
    "Weil der Genitiv anders funktioniert."
   ],
   "answer": 0,
   "explain": "der zeigt schon Nominativ maskulin. ein zeigt nichts — also übernimmt das Adjektiv die Arbeit."
  },
  {
   "type": "choice",
   "q": "Welche Endung steht nach „diese\", „jede\", „welche\"?",
   "options": [
    "Dieselbe wie nach dem bestimmten Artikel.",
    "Dieselbe wie nach ein.",
    "Immer -en.",
    "Gar keine."
   ],
   "answer": 0,
   "explain": "diese, jede, welche verhalten sich wie der, die, das: dieses neue Auto."
  },
  {
   "type": "order",
   "answer": "Mit den neuen Kolleginnen komme ich gut zurecht",
   "hint": "Beginne mit „Mit\".",
   "explain": "Dativ Plural nach dem bestimmten Artikel: -en. Danach steht das Verb an zweiter Stelle."
  },
  {
   "type": "order",
   "answer": "Ein vollständig ausgefülltes Formular spart allen viel Zeit",
   "hint": "Beginne mit „Ein\".",
   "explain": "Nach ein bei neutral: -es. Das Adverb vollständig bleibt endungslos."
  }
 ],
 "partizipialattribut": [
  {
   "type": "gap",
   "text": "Der gerade ___ Zug fährt nach Köln. (einfahren)",
   "answer": "einfahrende",
   "alts": [],
   "explain": "Partizip I + Endung: das Verb passiert gerade. Der Zug fährt gerade ein."
  },
  {
   "type": "gap",
   "text": "Die ___ Frist kann nicht verlängert werden. (ablaufen)",
   "answer": "ablaufende",
   "alts": [],
   "explain": "Partizip I: die Frist läuft gerade ab."
  },
  {
   "type": "gap",
   "text": "Das im Mai ___ Gesetz gilt ab Juli. (beschließen)",
   "answer": "beschlossene",
   "alts": [],
   "explain": "Partizip II: das Gesetz wurde beschlossen. Es ist schon passiert."
  },
  {
   "type": "gap",
   "text": "Der von uns ___ Termin steht fest. (vereinbaren)",
   "answer": "vereinbarte",
   "alts": [],
   "explain": "Partizip II mit einem Zusatz davor: der von uns vereinbarte Termin."
  },
  {
   "type": "gap",
   "text": "Die vor drei Wochen ___ Rechnung ist noch offen. (schicken)",
   "answer": "geschickte",
   "alts": [],
   "explain": "Partizip II von schicken: geschickt, plus Adjektivendung -e."
  },
  {
   "type": "gap",
   "text": "Ein ständig ___ Telefon macht das Arbeiten schwer. (klingeln)",
   "answer": "klingelndes",
   "alts": [],
   "explain": "Partizip I bei neutral nach ein: -es."
  },
  {
   "type": "gap",
   "text": "Die dort ___ Kinder sind aus der Nachbarschaft. (spielen)",
   "answer": "spielenden",
   "alts": [],
   "explain": "Partizip I im Plural nach dem bestimmten Artikel: -en."
  },
  {
   "type": "choice",
   "q": "Was ist der Unterschied zwischen „der lesende Mann\" und „das gelesene Buch\"?",
   "options": [
    "Partizip I: er tut es. Partizip II: es wurde damit getan.",
    "Es ist dasselbe in zwei Zeiten.",
    "Partizip I steht nur im Plural.",
    "Partizip II gibt es nur bei Personen."
   ],
   "answer": 0,
   "explain": "Partizip I ist aktiv und gleichzeitig, Partizip II meist passiv und schon abgeschlossen."
  },
  {
   "type": "choice",
   "q": "Wie löst man „der zu prüfende Antrag\" in einen Nebensatz auf?",
   "options": [
    "Der Antrag, der geprüft werden muss.",
    "Der Antrag, der geprüft hat.",
    "Der Antrag, der prüft.",
    "Der Antrag, den man prüfte."
   ],
   "answer": 0,
   "explain": "zu + Partizip I heißt: es muss oder kann gemacht werden."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist richtig?",
   "options": [
    "Die im Bescheid genannten Fristen gelten.",
    "Die im Bescheid genannte Fristen gelten.",
    "Die im Bescheid nennende Fristen gelten.",
    "Die im Bescheid genannt Fristen gelten."
   ],
   "answer": 0,
   "explain": "Plural nach dem bestimmten Artikel: -en. Und genannt, weil jemand sie genannt hat."
  },
  {
   "type": "choice",
   "q": "Warum steht das Partizipialattribut so oft in Amtstexten?",
   "options": [
    "Weil es einen ganzen Relativsatz in ein Wort packt.",
    "Weil es höflicher ist.",
    "Weil es leichter zu lesen ist.",
    "Weil es Pflicht ist."
   ],
   "answer": 0,
   "explain": "Der eingegangene Antrag statt der Antrag, der eingegangen ist — kürzer, aber dichter."
  },
  {
   "type": "order",
   "answer": "Der am Montag eingegangene Antrag wird zuerst bearbeitet",
   "hint": "Beginne mit „Der\".",
   "explain": "Alles zwischen Artikel und Nomen gehört zum Attribut, das Verb folgt danach."
  },
  {
   "type": "order",
   "answer": "Alle noch offenen Fragen besprechen wir am Freitag",
   "hint": "Beginne mit „Alle\".",
   "explain": "Steht das Objekt vorn, rückt das Verb an die zweite Stelle: besprechen wir."
  }
 ],
 "nominalstil": [
  {
   "type": "gap",
   "text": "Nach ___ des Antrags erhalten Sie einen Bescheid. (eingehen)",
   "answer": "Eingang",
   "alts": [],
   "explain": "Aus nachdem der Antrag eingegangen ist wird nach Eingang des Antrags."
  },
  {
   "type": "gap",
   "text": "Bei ___ des Passworts wenden Sie sich an den Support. (verlieren)",
   "answer": "Verlust",
   "alts": [],
   "explain": "Manche Nomen sehen dem Verb nicht ähnlich: verlieren → der Verlust."
  },
  {
   "type": "gap",
   "text": "Vor ___ der Wohnung wird ein Protokoll erstellt. (übergeben)",
   "answer": "Übergabe",
   "alts": [],
   "explain": "übergeben → die Übergabe."
  },
  {
   "type": "gap",
   "text": "Zur ___ des Schadens brauchen wir Fotos. (feststellen)",
   "answer": "Feststellung",
   "alts": [],
   "explain": "feststellen → die Feststellung."
  },
  {
   "type": "gap",
   "text": "Bei ___ der Miete fällt eine Mahngebühr an. (verspäten)",
   "answer": "Verspätung",
   "alts": [],
   "explain": "sich verspäten → die Verspätung."
  },
  {
   "type": "gap",
   "text": "Nach ___ der Unterlagen melden wir uns. (durchsehen)",
   "answer": "Durchsicht",
   "alts": [],
   "explain": "durchsehen → die Durchsicht. Kein -ung, sondern eine eigene Form."
  },
  {
   "type": "gap",
   "text": "Um ___ wird gebeten. (antworten)",
   "answer": "Antwort",
   "alts": [],
   "explain": "Der knappste Amtssatz überhaupt: Um Antwort wird gebeten."
  },
  {
   "type": "choice",
   "q": "Was ist der Nominalstil von „Weil der Antrag zu spät kam, wurde er abgelehnt\"?",
   "options": [
    "Wegen verspäteten Eingangs wurde der Antrag abgelehnt.",
    "Weil verspäteter Eingang wurde der Antrag abgelehnt.",
    "Wegen der Antrag zu spät kam, wurde er abgelehnt.",
    "Verspätet der Antrag wurde abgelehnt."
   ],
   "answer": 0,
   "explain": "weil → wegen + Genitiv, das Verb wird zum Nomen."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist leichter zu verstehen?",
   "options": [
    "Nach Prüfung der Sachlage und Anhörung der Beteiligten ergeht folgender Bescheid.",
    "Wir haben die Sache geprüft und mit allen gesprochen. Deshalb entscheiden wir so.",
    "Beide sind gleich.",
    "Der erste, weil er kürzer ist."
   ],
   "answer": 1,
   "explain": "Der Nominalstil ist knapp, aber schwer. Wer verstanden werden will, löst ihn auf."
  },
  {
   "type": "choice",
   "q": "„Bei Nichtbeachtung der Vorschrift\" — was heißt das im Klartext?",
   "options": [
    "Wenn man sich nicht daran hält.",
    "Wenn man die Vorschrift liest.",
    "Bevor die Vorschrift gilt.",
    "Weil die Vorschrift gilt."
   ],
   "answer": 0,
   "explain": "Nicht + Nomen ist typisch für Ämter: Nichtbeachtung, Nichteinhaltung, Nichtzahlung."
  },
  {
   "type": "choice",
   "q": "Wozu ist es gut, den Nominalstil zu erkennen?",
   "options": [
    "Um Bescheide und Verträge zu verstehen und selbst einfach schreiben zu können.",
    "Um im Gespräch damit zu beeindrucken.",
    "Um kürzere E-Mails zu schreiben.",
    "Um Prüfungen schneller zu bestehen."
   ],
   "answer": 0,
   "explain": "Lesen musst du ihn — schreiben musst du meistens klar. Beides zu können, ist das Ziel."
  },
  {
   "type": "order",
   "answer": "Nach Eingang Ihrer Unterlagen prüfen wir den Antrag umgehend",
   "hint": "Beginne mit „Nach\".",
   "explain": "Die Angabe steht vorn, das Verb rückt an die zweite Stelle: prüfen wir."
  },
  {
   "type": "order",
   "answer": "Bei Nichteinhaltung der Frist erlischt Ihr Anspruch",
   "hint": "Beginne mit „Bei\".",
   "explain": "bei + Dativ. Danach steht das Verb: erlischt."
  }
 ],
 "passiv-ersatz": [
  {
   "type": "gap",
   "text": "Das Problem ___ sich in fünf Minuten lösen.",
   "answer": "lässt",
   "alts": [],
   "explain": "sich lassen + Infinitiv ersetzt kann … werden: kann gelöst werden."
  },
  {
   "type": "gap",
   "text": "Die Bedienungsanleitung ist gut ___. (verstehen, mit -lich)",
   "answer": "verständlich",
   "alts": [],
   "explain": "-lich und -bar machen aus dem Verb ein Adjektiv: kann verstanden werden."
  },
  {
   "type": "gap",
   "text": "Der Fehler ist leicht ___. (beheben, mit -bar)",
   "answer": "behebbar",
   "alts": [],
   "explain": "-bar sagt: es kann gemacht werden."
  },
  {
   "type": "gap",
   "text": "Diese Frist ___ nicht zu verlängern.",
   "answer": "ist",
   "alts": [],
   "explain": "sein + zu + Infinitiv heißt hier: kann nicht verlängert werden."
  },
  {
   "type": "gap",
   "text": "Die Formulare ___ bis Freitag einzureichen.",
   "answer": "sind",
   "alts": [],
   "explain": "Im Plural: sind einzureichen = müssen eingereicht werden."
  },
  {
   "type": "gap",
   "text": "Das Fenster ___ sich nicht mehr schließen.",
   "answer": "lässt",
   "alts": [],
   "explain": "sich lassen im Verneinten: kann nicht geschlossen werden."
  },
  {
   "type": "gap",
   "text": "Der Text ist ohne Brille kaum ___. (lesen, mit -bar)",
   "answer": "lesbar",
   "alts": [],
   "explain": "lesen → lesbar. Achtung: nicht leserlich, das heißt gut geschrieben."
  },
  {
   "type": "choice",
   "q": "„Der Antrag ist bis Montag einzureichen.\" Was heißt das?",
   "options": [
    "Er muss bis Montag eingereicht werden.",
    "Er kann bis Montag eingereicht werden.",
    "Er wurde am Montag eingereicht.",
    "Er darf nicht eingereicht werden."
   ],
   "answer": 0,
   "explain": "sein + zu + Infinitiv heißt meistens müssen, manchmal können — der Zusammenhang entscheidet."
  },
  {
   "type": "choice",
   "q": "Welcher Satz sagt dasselbe wie „Das kann repariert werden\"?",
   "options": [
    "Das lässt sich reparieren.",
    "Das ist zu reparieren gewesen.",
    "Das hat sich repariert.",
    "Das wird sich reparieren."
   ],
   "answer": 0,
   "explain": "sich lassen + Infinitiv ist die häufigste Ersatzform für kann … werden."
  },
  {
   "type": "choice",
   "q": "Warum benutzt man diese Ersatzformen überhaupt?",
   "options": [
    "Sie klingen leichter und stehen oft in Anleitungen und Verträgen.",
    "Sie sind grammatisch einfacher.",
    "Sie sind nur in der Schweiz üblich.",
    "Sie ersetzen den Konjunktiv."
   ],
   "answer": 0,
   "explain": "Ein Text voller wird … werden liest sich schwer. Die Ersatzformen machen ihn beweglicher."
  },
  {
   "type": "choice",
   "q": "Welches Wort passt nicht zu dieser Gruppe?",
   "options": [
    "machbar",
    "lesbar",
    "wunderbar",
    "vermeidbar"
   ],
   "answer": 2,
   "explain": "wunderbar kommt nicht von einem Verb — bar heißt hier nicht kann gemacht werden."
  },
  {
   "type": "order",
   "answer": "Diese Unterlagen sind vollständig und fristgerecht einzureichen",
   "hint": "Beginne mit „Diese\".",
   "explain": "sein + zu + Infinitiv: einzureichen steht ganz am Ende."
  },
  {
   "type": "order",
   "answer": "Der Schaden lässt sich ohne größeren Aufwand beheben",
   "hint": "Beginne mit „Der\".",
   "explain": "sich steht direkt nach lässt, der Infinitiv beheben ganz hinten."
  }
 ],
 "konjunktiv1": [
  {
   "type": "gap",
   "text": "Der Zeuge gab an, er ___ nichts gesehen. (haben)",
   "answer": "habe",
   "alts": [],
   "explain": "Konjunktiv I von haben: er hat → er habe. Im Protokoll die Normalform."
  },
  {
   "type": "gap",
   "text": "Die Verteidigung führte an, der Angeklagte ___ zur Tatzeit im Ausland gewesen. (sein)",
   "answer": "sei",
   "alts": [],
   "explain": "Perfekt in der indirekten Rede: sei gewesen."
  },
  {
   "type": "gap",
   "text": "Es heißt, die Regelung ___ zum Jahresende außer Kraft. (treten)",
   "answer": "trete",
   "alts": [],
   "explain": "Konjunktiv I bei starken Verben ohne Umlaut: er tritt → er trete."
  },
  {
   "type": "gap",
   "text": "Der Bericht hält fest, die Zahlen ___ nicht vergleichbar. (sein, Plural)",
   "answer": "seien",
   "alts": [],
   "explain": "Der Plural seien ist die einzige Pluralform, die sich klar vom Indikativ unterscheidet."
  },
  {
   "type": "gap",
   "text": "Sie erklärte, sie ___ die Unterlagen bereits übermittelt. (haben)",
   "answer": "habe",
   "alts": [],
   "explain": "habe übermittelt — das Perfekt bleibt, nur haben wird Konjunktiv I."
  },
  {
   "type": "gap",
   "text": "Die Behörde teilte mit, der Bescheid ___ am Montag zugestellt worden. (sein)",
   "answer": "sei",
   "alts": [],
   "explain": "Passiv Perfekt in der indirekten Rede: sei zugestellt worden."
  },
  {
   "type": "gap",
   "text": "Die Gutachter meinten, das Verfahren ___ zu lange. (dauern, Plural nicht möglich)",
   "answer": "dauere",
   "alts": [],
   "explain": "dauern: es dauert → es dauere."
  },
  {
   "type": "choice",
   "q": "Warum steht in Nachrichtentexten der Konjunktiv I und nicht der Indikativ?",
   "options": [
    "Weil er höflicher klingt.",
    "Weil er die Aussage als fremde Aussage kennzeichnet, für die niemand haftet.",
    "Weil er die Vergangenheit ausdrückt.",
    "Weil er kürzer ist."
   ],
   "answer": 1,
   "explain": "Der Konjunktiv I ist ein Distanzzeichen. Ohne ihn übernimmt der Berichtende die Behauptung."
  },
  {
   "type": "choice",
   "q": "Wann weicht man auf den Konjunktiv II aus?",
   "options": [
    "Wenn der Konjunktiv I mit dem Indikativ zusammenfällt.",
    "Immer im Plural.",
    "Nur bei Modalverben.",
    "Nur in der Vergangenheit."
   ],
   "answer": 0,
   "explain": "sie haben (Indikativ) = sie haben (Konjunktiv I). Also: sie hätten."
  },
  {
   "type": "choice",
   "q": "„Er sagte, er werde kommen.\" Was drückt werde aus?",
   "options": [
    "Die Zukunft in der indirekten Rede.",
    "Ein Passiv.",
    "Eine Bitte.",
    "Eine Vergangenheit."
   ],
   "answer": 0,
   "explain": "wird kommen → werde kommen. Das Futur bleibt erhalten."
  },
  {
   "type": "choice",
   "q": "Welcher Satz gehört in ein Protokoll?",
   "options": [
    "Herr Weber erklärte, die Frist sei eingehalten worden.",
    "Herr Weber hat gesagt, dass die Frist eingehalten wurde, glaube ich.",
    "Herr Weber: Frist eingehalten!",
    "Die Frist ist eingehalten worden, sagt Herr Weber ja."
   ],
   "answer": 0,
   "explain": "Im Protokoll steht die Aussage im Konjunktiv I, ohne eigene Bewertung."
  },
  {
   "type": "order",
   "answer": "Der Vorsitzende stellte fest die Sitzung sei beschlussfähig",
   "hint": "Beginne mit „Der\".",
   "explain": "Nach dem Hauptsatz folgt die indirekte Rede als Hauptsatz — sei bleibt an zweiter Stelle."
  },
  {
   "type": "order",
   "answer": "Die Klägerin trug vor sie habe den Mangel rechtzeitig angezeigt",
   "hint": "Beginne mit „Die Klägerin\".",
   "explain": "vortragen ist trennbar: vor steht am Ende des ersten Satzteils."
  }
 ],
 "zweiteilige-konnektoren": [
  {
   "type": "gap",
   "text": "Sie ist ___ nur Ärztin, sondern auch Ausbilderin.",
   "answer": "nicht",
   "alts": [],
   "explain": "nicht nur … sondern auch — das häufigste Paar in Bewerbungen."
  },
  {
   "type": "gap",
   "text": "Entweder wir einigen uns heute, ___ wir vertagen den Punkt.",
   "answer": "oder",
   "alts": [],
   "explain": "entweder … oder: genau zwei Möglichkeiten, eine davon gilt."
  },
  {
   "type": "gap",
   "text": "Weder die Miete ___ die Nebenkosten wurden bezahlt.",
   "answer": "noch",
   "alts": [],
   "explain": "weder … noch verneint beides auf einmal — ein zweites nicht wäre falsch."
  },
  {
   "type": "gap",
   "text": "Je genauer der Antrag ausgefüllt ist, ___ schneller wird er bearbeitet.",
   "answer": "desto",
   "alts": [],
   "explain": "je + Komparativ im Nebensatz, desto + Komparativ im Hauptsatz."
  },
  {
   "type": "gap",
   "text": "Das Verfahren ist ___ langwierig als auch teuer.",
   "answer": "sowohl",
   "alts": [],
   "explain": "sowohl … als auch verbindet zwei Eigenschaften, die beide gelten."
  },
  {
   "type": "gap",
   "text": "Er hat ___ nicht abgesagt, aber er kam auch nicht.",
   "answer": "zwar",
   "alts": [],
   "explain": "zwar … aber räumt zuerst ein und stellt dann dagegen."
  },
  {
   "type": "gap",
   "text": "Die Frist ist ___ abgelaufen, sondern verlängert worden.",
   "answer": "nicht",
   "alts": [],
   "explain": "nicht … sondern korrigiert: das eine gilt nicht, das andere schon."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist richtig?",
   "options": [
    "Weder er noch sie war anwesend.",
    "Weder er noch sie waren nicht anwesend.",
    "Weder er oder sie war anwesend.",
    "Nicht er noch sie war anwesend."
   ],
   "answer": 0,
   "explain": "weder … noch verneint schon. Ein zweites nicht macht daraus eine doppelte Verneinung."
  },
  {
   "type": "choice",
   "q": "„Je länger das Verfahren dauert, ___ teurer wird es.\"",
   "options": [
    "desto",
    "je",
    "umso mehr",
    "als"
   ],
   "answer": 0,
   "explain": "je … desto oder je … umso. Beides ist richtig, desto ist häufiger."
  },
  {
   "type": "choice",
   "q": "Wo steht das Verb im je-Satz?",
   "options": [
    "An zweiter Stelle.",
    "Am Ende, denn je leitet einen Nebensatz ein.",
    "Ganz vorn.",
    "Es entfällt."
   ],
   "answer": 1,
   "explain": "Je genauer du liest, desto weniger Fehler machst du — im ersten Teil steht liest am Ende."
  },
  {
   "type": "choice",
   "q": "Was ist der Unterschied zwischen „zwar … aber\" und „nicht nur … sondern auch\"?",
   "options": [
    "zwar … aber schränkt ein, nicht nur … sondern auch fügt hinzu.",
    "Es gibt keinen Unterschied.",
    "zwar … aber steht nur im Schriftlichen.",
    "nicht nur … sondern auch verneint."
   ],
   "answer": 0,
   "explain": "Zwar teuer, aber gut — die Einschränkung. Nicht nur teuer, sondern auch schlecht — die Steigerung."
  },
  {
   "type": "order",
   "answer": "Je früher Sie den Widerspruch einlegen desto besser sind Ihre Aussichten",
   "hint": "Beginne mit „Je\".",
   "explain": "Im je-Teil steht das Verb am Ende, im desto-Teil direkt nach desto + Komparativ."
  },
  {
   "type": "order",
   "answer": "Sie überzeugte sowohl durch ihre Erfahrung als auch durch ihre Ruhe",
   "hint": "Beginne mit „Sie\".",
   "explain": "sowohl … als auch verbindet hier zwei gleichartige Angaben."
  }
 ],
 "modalverben-subjektiv": [
  {
   "type": "gap",
   "text": "Er ___ das Haus geerbt haben, sagen die Nachbarn.",
   "answer": "soll",
   "alts": [],
   "explain": "sollen subjektiv: andere behaupten es, ich gebe es nur weiter."
  },
  {
   "type": "gap",
   "text": "Sie ___ das ganz allein geschafft haben — das glaube ich ihr nicht.",
   "answer": "will",
   "alts": [],
   "explain": "wollen subjektiv: die Person behauptet es über sich selbst, und man zweifelt."
  },
  {
   "type": "gap",
   "text": "Das ___ stimmen, sicher bin ich mir aber nicht.",
   "answer": "mag",
   "alts": [],
   "explain": "mögen subjektiv drückt ein zurückhaltendes Zugeständnis aus: es ist möglich."
  },
  {
   "type": "gap",
   "text": "Er ___ inzwischen angekommen sein, der Zug war pünktlich.",
   "answer": "dürfte",
   "alts": [],
   "explain": "dürfte ist die höflichste Vermutung: ziemlich sicher, aber ohne Beweis."
  },
  {
   "type": "gap",
   "text": "Sie ___ krank sein, anders kann ich mir das Fehlen nicht erklären.",
   "answer": "muss",
   "alts": [],
   "explain": "müssen subjektiv: der einzige Schluss, der übrig bleibt."
  },
  {
   "type": "gap",
   "text": "Der Termin ___ auch verschoben worden sein, ich weiß es nicht genau.",
   "answer": "kann",
   "alts": [],
   "explain": "können subjektiv: eine von mehreren Möglichkeiten."
  },
  {
   "type": "gap",
   "text": "Nach den Zahlen ___ das Projekt teurer werden als geplant.",
   "answer": "könnte",
   "alts": [],
   "explain": "könnte ist vorsichtiger als kann — die Möglichkeit steht offen."
  },
  {
   "type": "choice",
   "q": "„Er soll sehr streng sein.\" Wer sagt das?",
   "options": [
    "Andere Leute.",
    "Er selbst.",
    "Der Sprecher aus eigener Erfahrung.",
    "Niemand, es ist ein Befehl."
   ],
   "answer": 0,
   "explain": "sollen subjektiv gibt fremdes Hörensagen wieder."
  },
  {
   "type": "choice",
   "q": "„Sie will drei Sprachen fließend sprechen.\" Was schwingt mit?",
   "options": [
    "Ein Wunsch für die Zukunft.",
    "Eine eigene Behauptung, an der der Sprecher zweifelt.",
    "Eine Verpflichtung.",
    "Eine höfliche Bitte."
   ],
   "answer": 1,
   "explain": "wollen subjektiv: sie sagt es über sich — der Ton lässt offen, ob es stimmt."
  },
  {
   "type": "choice",
   "q": "Welche Reihenfolge geht von sicher zu unsicher?",
   "options": [
    "muss – dürfte – könnte",
    "könnte – dürfte – muss",
    "dürfte – muss – könnte",
    "muss – könnte – dürfte"
   ],
   "answer": 0,
   "explain": "muss ist der zwingende Schluss, dürfte eine begründete Annahme, könnte eine bloße Möglichkeit."
  },
  {
   "type": "choice",
   "q": "Wie erkennt man die subjektive Bedeutung an der Form?",
   "options": [
    "Sie steht oft mit dem Infinitiv Perfekt: muss gewesen sein.",
    "Sie steht immer im Plural.",
    "Sie braucht immer dass.",
    "Sie steht nie in der Vergangenheit."
   ],
   "answer": 0,
   "explain": "Er muss krank gewesen sein — der Infinitiv Perfekt ist ein sicheres Zeichen für die Vermutung."
  },
  {
   "type": "order",
   "answer": "Die Unterlagen dürften inzwischen bei Ihnen eingegangen sein",
   "hint": "Beginne mit „Die Unterlagen\".",
   "explain": "Infinitiv Perfekt im Passiv: eingegangen sein steht ganz am Ende."
  },
  {
   "type": "order",
   "answer": "Er will von der Änderung nichts gewusst haben",
   "hint": "Beginne mit „Er\".",
   "explain": "gewusst haben ist der Infinitiv Perfekt — er behauptet es über die Vergangenheit."
  }
 ],
 "gerundivum": [
  {
   "type": "gap",
   "text": "Die zu ___ Fristen stehen im Bescheid. (beachten)",
   "answer": "beachtenden",
   "alts": [],
   "explain": "zu + Partizip I + Endung. Plural nach dem bestimmten Artikel: -en."
  },
  {
   "type": "gap",
   "text": "Der zu ___ Betrag ist im Anhang aufgeführt. (erstatten)",
   "answer": "erstattende",
   "alts": [],
   "explain": "Der Betrag, der erstattet werden muss."
  },
  {
   "type": "gap",
   "text": "Eine nicht zu ___ Frage. (unterschätzen)",
   "answer": "unterschätzende",
   "alts": [],
   "explain": "Nach eine bei feminin: -e. Die Verneinung steht vor dem zu."
  },
  {
   "type": "gap",
   "text": "Die noch zu ___ Punkte notieren wir. (klären)",
   "answer": "klärenden",
   "alts": [],
   "explain": "Plural nach die: -en. Es sind die Punkte, die noch geklärt werden müssen."
  },
  {
   "type": "gap",
   "text": "Das zu ___ Formular liegt bei. (unterschreiben)",
   "answer": "unterschreibende",
   "alts": [],
   "explain": "Neutral nach dem bestimmten Artikel: -e."
  },
  {
   "type": "gap",
   "text": "Ein nicht zu ___ Risiko. (vermeiden)",
   "answer": "vermeidendes",
   "alts": [],
   "explain": "Nach ein bei neutral: -es."
  },
  {
   "type": "gap",
   "text": "Bei einem zu ___ Antrag hilft die Beratungsstelle. (stellen)",
   "answer": "stellenden",
   "alts": [],
   "explain": "Dativ maskulin nach ein: -en."
  },
  {
   "type": "choice",
   "q": "Wie löst man „der zu prüfende Antrag\" auf?",
   "options": [
    "Der Antrag, der geprüft werden muss.",
    "Der Antrag, der geprüft hat.",
    "Der Antrag, der prüfen wird.",
    "Der Antrag, den man geprüft hat."
   ],
   "answer": 0,
   "explain": "zu + Partizip I heißt passiv und notwendig: muss oder kann gemacht werden."
  },
  {
   "type": "choice",
   "q": "Was unterscheidet „das lesende Kind\" von „der zu lesende Text\"?",
   "options": [
    "Beim ersten handelt jemand, beim zweiten muss etwas gemacht werden.",
    "Nur die Endung.",
    "Das erste ist Vergangenheit.",
    "Das zweite steht nur im Plural."
   ],
   "answer": 0,
   "explain": "Ohne zu ist das Partizip I aktiv. Mit zu wird es passiv und drückt eine Notwendigkeit aus."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist richtig?",
   "options": [
    "Die zu ergänzenden Angaben sind gelb markiert.",
    "Die zu ergänzende Angaben sind gelb markiert.",
    "Die zu ergänzten Angaben sind gelb markiert.",
    "Die zu ergänzen Angaben sind gelb markiert."
   ],
   "answer": 0,
   "explain": "Plural nach die verlangt -en, und ergänzend ist das Partizip I."
  },
  {
   "type": "choice",
   "q": "Wo begegnet dir das Gerundivum am ehesten?",
   "options": [
    "In Bescheiden, Verträgen und Bedienungsanleitungen.",
    "In Gesprächen unter Freunden.",
    "In Liedtexten.",
    "In Kochrezepten für Kinder."
   ],
   "answer": 0,
   "explain": "Es ist eine sehr dichte Form — sie spart einen ganzen Nebensatz und steht deshalb in Fachtexten."
  },
  {
   "type": "order",
   "answer": "Die noch zu erbringenden Nachweise sind im Anhang aufgelistet",
   "hint": "Beginne mit „Die\".",
   "explain": "Alles zwischen Artikel und Nomen gehört zum Attribut."
  },
  {
   "type": "order",
   "answer": "Über den zu erstattenden Betrag informieren wir Sie gesondert",
   "hint": "Beginne mit „Über\".",
   "explain": "Steht die Angabe vorn, rückt informieren an die zweite Stelle."
  }
 ],
 "uneingeleitete-nebensaetze": [
  {
   "type": "gap",
   "text": "___ Sie weitere Fragen, rufen Sie uns gern an.",
   "answer": "Haben",
   "alts": [],
   "explain": "Statt Wenn Sie Fragen haben steht das Verb ganz vorn."
  },
  {
   "type": "gap",
   "text": "___ die Unterlagen vollständig, bearbeiten wir den Antrag sofort.",
   "answer": "Sind",
   "alts": [],
   "explain": "Statt Wenn die Unterlagen vollständig sind — sind rückt an die erste Stelle."
  },
  {
   "type": "gap",
   "text": "___ er nicht so gezögert, wäre die Wohnung noch frei.",
   "answer": "Hätte",
   "alts": [],
   "explain": "Statt Wenn er nicht gezögert hätte. Der Konjunktiv II steht vorn."
  },
  {
   "type": "gap",
   "text": "___ Sie Widerspruch einlegen, beachten Sie bitte die Frist.",
   "answer": "Wollen",
   "alts": [],
   "explain": "Auch Modalverben können den Satz eröffnen: Wenn Sie einlegen wollen."
  },
  {
   "type": "gap",
   "text": "___ sich etwas ändern, melden wir uns umgehend.",
   "answer": "Sollte",
   "alts": [],
   "explain": "sollte in dieser Form heißt: falls es passiert. Sehr häufig in Geschäftsbriefen."
  },
  {
   "type": "gap",
   "text": "___ Sie an einem Termin verhindert, sagen Sie bitte rechtzeitig ab.",
   "answer": "Sind",
   "alts": [],
   "explain": "Statt Wenn Sie verhindert sind."
  },
  {
   "type": "gap",
   "text": "___ der Bescheid bis Freitag nicht da, hake ich nach.",
   "answer": "Ist",
   "alts": [],
   "explain": "Statt Wenn der Bescheid nicht da ist."
  },
  {
   "type": "choice",
   "q": "Was macht den uneingeleiteten Nebensatz aus?",
   "options": [
    "Das Verb steht an erster Stelle, wenn oder falls fällt weg.",
    "Er hat kein Verb.",
    "Er steht immer hinten.",
    "Er braucht immer den Konjunktiv."
   ],
   "answer": 0,
   "explain": "Sollten Sie Fragen haben statt Wenn Sie Fragen haben sollten."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist richtig gebildet?",
   "options": [
    "Sollten Sie Einwände haben, teilen Sie uns diese mit.",
    "Sollten Sie haben Einwände, teilen Sie uns diese mit.",
    "Sollten haben Sie Einwände, teilen Sie uns mit diese.",
    "Sie sollten Einwände haben, teilen Sie uns diese mit."
   ],
   "answer": 0,
   "explain": "Das Verb sollten steht vorn, der Rest bleibt in der normalen Reihenfolge, haben ganz hinten."
  },
  {
   "type": "choice",
   "q": "Welchen Ton hat diese Form?",
   "options": [
    "Sie klingt förmlich und gehört in Briefe und Verträge.",
    "Sie klingt salopp.",
    "Sie klingt wütend.",
    "Sie ist umgangssprachlich."
   ],
   "answer": 0,
   "explain": "Im Gespräch sagt man wenn. Geschrieben wirkt der uneingeleitete Satz knapp und gepflegt."
  },
  {
   "type": "choice",
   "q": "„Wäre ich an Ihrer Stelle, würde ich widersprechen.\" Was fehlt hier gegenüber der normalen Form?",
   "options": [
    "Das wenn.",
    "Das Subjekt.",
    "Das Verb.",
    "Das Komma."
   ],
   "answer": 0,
   "explain": "Aus Wenn ich an Ihrer Stelle wäre wird Wäre ich an Ihrer Stelle."
  },
  {
   "type": "order",
   "answer": "Sollten Sie mit der Entscheidung nicht einverstanden sein können Sie widersprechen",
   "hint": "Beginne mit „Sollten\".",
   "explain": "Das Verb eröffnet den Nebensatz, im Hauptsatz danach steht können vorn."
  },
  {
   "type": "order",
   "answer": "Hätten wir das früher gewusst hätten wir anders geplant",
   "hint": "Beginne mit „Hätten\".",
   "explain": "Beide Teile beginnen mit dem Verb — der zweite, weil der erste die erste Stelle besetzt."
  }
 ],
 "korrelate": [
  {
   "type": "gap",
   "text": "Ich verlasse mich ___, dass Sie die Frist einhalten.",
   "answer": "darauf",
   "alts": [],
   "explain": "sich verlassen auf → darauf, dass."
  },
  {
   "type": "gap",
   "text": "Wir gehen ___ aus, dass der Antrag bewilligt wird.",
   "answer": "davon",
   "alts": [],
   "explain": "ausgehen von → davon, dass."
  },
  {
   "type": "gap",
   "text": "Sie hat sich ___ beschwert, dass niemand geantwortet hat.",
   "answer": "darüber",
   "alts": [],
   "explain": "sich beschweren über → darüber, dass."
  },
  {
   "type": "gap",
   "text": "Es hängt ___ ab, ob die Mittel bewilligt werden.",
   "answer": "davon",
   "alts": [],
   "explain": "abhängen von → davon, ob. Bei einer offenen Frage steht ob statt dass."
  },
  {
   "type": "gap",
   "text": "Ich zweifle ___, dass das rechtzeitig fertig wird.",
   "answer": "daran",
   "alts": [],
   "explain": "zweifeln an → daran, dass."
  },
  {
   "type": "gap",
   "text": "Wir rechnen ___, dass sich das Verfahren hinzieht.",
   "answer": "damit",
   "alts": [],
   "explain": "rechnen mit → damit, dass."
  },
  {
   "type": "gap",
   "text": "___ freut mich, dass Sie zugesagt haben.",
   "answer": "Es",
   "alts": [],
   "explain": "Steht der dass-Satz hinten, hält es vorn den Platz des Subjekts frei."
  },
  {
   "type": "choice",
   "q": "Wozu dient das Korrelat wie darauf oder damit?",
   "options": [
    "Es kündigt den folgenden Nebensatz an und trägt die Präposition des Verbs.",
    "Es ersetzt das Subjekt.",
    "Es macht den Satz höflicher.",
    "Es ist reine Gewohnheit ohne Funktion."
   ],
   "answer": 0,
   "explain": "warten auf verlangt auf. Weil vor dass keine Präposition stehen darf, springt darauf ein."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist richtig?",
   "options": [
    "Ich freue mich darauf, dich zu sehen.",
    "Ich freue mich auf, dass ich dich sehe.",
    "Ich freue mich das, dich zu sehen.",
    "Ich freue mich darauf dich zu sehen, dass."
   ],
   "answer": 0,
   "explain": "darauf trägt die Präposition, danach folgt der Infinitivsatz mit zu."
  },
  {
   "type": "choice",
   "q": "Wann steht „ob\" statt „dass\" nach dem Korrelat?",
   "options": [
    "Wenn offen ist, ob es zutrifft.",
    "Immer im Schriftlichen.",
    "Nur nach damit.",
    "Nur bei Personen."
   ],
   "answer": 0,
   "explain": "Es hängt davon ab, ob … — die Sache ist noch nicht entschieden."
  },
  {
   "type": "choice",
   "q": "„Ich denke oft ___, wie es damals war.\"",
   "options": [
    "daran",
    "darauf",
    "davon",
    "darüber"
   ],
   "answer": 0,
   "explain": "denken an → daran. Vor einem Fragewort steht das Korrelat genauso."
  },
  {
   "type": "order",
   "answer": "Wir bestehen darauf dass die Zusage schriftlich erfolgt",
   "hint": "Beginne mit „Wir\".",
   "explain": "bestehen auf → darauf, dass. Im dass-Satz steht das Verb am Ende."
  },
  {
   "type": "order",
   "answer": "Es kommt darauf an ob die Frist eingehalten wurde",
   "hint": "Beginne mit „Es\".",
   "explain": "ankommen auf ist trennbar: an steht vor dem Nebensatz."
  }
 ],
 "funktionsverbgefuege": [
  {
   "type": "gap",
   "text": "Wir ziehen Ihren Vorschlag in ___.",
   "answer": "Betracht",
   "alts": [],
   "explain": "in Betracht ziehen = erwägen. Der Sinn steckt im Nomen, nicht im Verb."
  },
  {
   "type": "gap",
   "text": "Der Bescheid ist gestern in ___ getreten.",
   "answer": "Kraft",
   "alts": [],
   "explain": "in Kraft treten = ab jetzt gelten. Das Gegenteil: außer Kraft treten."
  },
  {
   "type": "gap",
   "text": "Wir stellen Ihnen einen Leihwagen zur ___.",
   "answer": "Verfügung",
   "alts": [],
   "explain": "zur Verfügung stellen = bereitstellen."
  },
  {
   "type": "gap",
   "text": "Die Kommission hat eine Entscheidung ___.",
   "answer": "getroffen",
   "alts": [],
   "explain": "eine Entscheidung treffen — nicht machen und nicht nehmen."
  },
  {
   "type": "gap",
   "text": "Bitte nehmen Sie zu dem Vorwurf ___.",
   "answer": "Stellung",
   "alts": [],
   "explain": "Stellung nehmen zu = sich äußern. Sehr häufig in Bescheiden."
  },
  {
   "type": "gap",
   "text": "Der Antrag wurde in ___ genommen und geprüft.",
   "answer": "Empfang",
   "alts": [],
   "explain": "in Empfang nehmen = entgegennehmen."
  },
  {
   "type": "gap",
   "text": "Wir setzen Sie über den weiteren Verlauf in ___.",
   "answer": "Kenntnis",
   "alts": [],
   "explain": "in Kenntnis setzen = informieren."
  },
  {
   "type": "choice",
   "q": "Was ist typisch für ein Funktionsverbgefüge?",
   "options": [
    "Das Verb ist fast leer, die Bedeutung steckt im Nomen.",
    "Es besteht nur aus einem Verb.",
    "Es steht immer im Passiv.",
    "Es braucht immer den Genitiv."
   ],
   "answer": 0,
   "explain": "In Betracht ziehen: ziehen sagt nichts, Betracht sagt alles."
  },
  {
   "type": "choice",
   "q": "Welcher Ausdruck ist richtig?",
   "options": [
    "eine Entscheidung treffen",
    "eine Entscheidung machen",
    "eine Entscheidung nehmen",
    "eine Entscheidung tun"
   ],
   "answer": 0,
   "explain": "Die Verbindung ist fest. Wer sie anders bildet, wird verstanden, klingt aber übersetzt."
  },
  {
   "type": "choice",
   "q": "„Der Vertrag tritt außer Kraft.\" Was heißt das?",
   "options": [
    "Er gilt ab sofort nicht mehr.",
    "Er wird gerade unterschrieben.",
    "Er gilt ab morgen.",
    "Er wird verlängert."
   ],
   "answer": 0,
   "explain": "in Kraft treten und außer Kraft treten sind das Paar für gelten und nicht mehr gelten."
  },
  {
   "type": "choice",
   "q": "Warum stehen diese Wendungen so oft in Amtstexten?",
   "options": [
    "Sie klingen sachlich und lassen offen, wer handelt.",
    "Sie sind kürzer.",
    "Sie sind leichter zu verstehen.",
    "Sie sind grammatisch einfacher."
   ],
   "answer": 0,
   "explain": "Eine Entscheidung wurde getroffen sagt nicht, wer sie getroffen hat. Genau das ist der Zweck."
  },
  {
   "type": "order",
   "answer": "Wir werden Ihren Einwand in Betracht ziehen und uns melden",
   "hint": "Beginne mit „Wir\".",
   "explain": "werden steht an zweiter Stelle, ziehen als Infinitiv am Ende des ersten Teils."
  },
  {
   "type": "order",
   "answer": "Die Behörde setzt Sie über das Ergebnis in Kenntnis",
   "hint": "Beginne mit „Die Behörde\".",
   "explain": "in Kenntnis setzen: das Nomen bleibt vor dem trennbaren Rest."
  }
 ],
 "irreale-vergleiche": [
  {
   "type": "gap",
   "text": "Er tut so, als ___ er von nichts wüsste.",
   "answer": "ob",
   "alts": [],
   "explain": "als ob + Konjunktiv II. Es sieht so aus, ist aber nicht so."
  },
  {
   "type": "gap",
   "text": "Sie sieht aus, als ___ sie die ganze Nacht gearbeitet.",
   "answer": "hätte",
   "alts": [],
   "explain": "als + Konjunktiv II ohne ob — dann steht das Verb direkt nach als."
  },
  {
   "type": "gap",
   "text": "Es klingt, als ___ da jemand an der Tür.",
   "answer": "wäre",
   "alts": [],
   "explain": "als wäre: ein Eindruck, keine Feststellung."
  },
  {
   "type": "gap",
   "text": "Er redet, als ___ er der Chef.",
   "answer": "wäre",
   "alts": [],
   "explain": "als wäre er der Chef — er ist es nicht."
  },
  {
   "type": "gap",
   "text": "Sie tat, als ___ sie mich nicht gehört.",
   "answer": "hätte",
   "alts": [],
   "explain": "als hätte sie — die Vergangenheit im irrealen Vergleich."
  },
  {
   "type": "gap",
   "text": "Mir ist, als ___ ich das schon einmal erlebt.",
   "answer": "hätte",
   "alts": [],
   "explain": "Mir ist, als … — eine feste, etwas gehobene Wendung für ein Gefühl."
  },
  {
   "type": "gap",
   "text": "Er ging weiter, als ___ nichts geschehen.",
   "answer": "wäre",
   "alts": [],
   "explain": "geschehen bildet das Perfekt mit sein: als wäre nichts geschehen."
  },
  {
   "type": "choice",
   "q": "Wo steht das Verb nach „als ob\"?",
   "options": [
    "Am Ende, denn als ob leitet einen Nebensatz ein.",
    "Direkt nach als ob.",
    "An zweiter Stelle.",
    "Es entfällt."
   ],
   "answer": 0,
   "explain": "Er tut so, als ob er nichts wüsste — wüsste steht hinten."
  },
  {
   "type": "choice",
   "q": "Wie ändert sich der Satz, wenn das ob wegfällt?",
   "options": [
    "Das Verb rückt direkt hinter als.",
    "Der Satz wird ungrammatisch.",
    "Man braucht den Indikativ.",
    "Man braucht ein Komma weniger."
   ],
   "answer": 0,
   "explain": "als ob er nichts wüsste = als wüsste er nichts. Beides ist richtig."
  },
  {
   "type": "choice",
   "q": "„Sie tut, als ob sie krank ist.\" Was stimmt daran nicht?",
   "options": [
    "Nach als ob steht der Konjunktiv II: wäre.",
    "als ob ist veraltet.",
    "Das Komma fehlt.",
    "krank braucht eine Endung."
   ],
   "answer": 0,
   "explain": "Der irreale Vergleich verlangt den Konjunktiv II — sonst behauptet der Satz, sie sei wirklich krank."
  },
  {
   "type": "choice",
   "q": "Welchen Ton hat „als ob\" oft im Gespräch?",
   "options": [
    "Es kann Zweifel oder leichten Spott ausdrücken.",
    "Es klingt immer freundlich.",
    "Es ist rein sachlich.",
    "Es ist eine Bitte."
   ],
   "answer": 0,
   "explain": "Als ob ich das nicht wüsste! — allein gesagt heißt das: natürlich weiß ich es."
  },
  {
   "type": "order",
   "answer": "Er verhielt sich als wäre nichts vorgefallen",
   "hint": "Beginne mit „Er\".",
   "explain": "Ohne ob steht das Verb direkt nach als: als wäre nichts vorgefallen."
  },
  {
   "type": "order",
   "answer": "Sie erklärte es so genau als ob wir nie davon gehört hätten",
   "hint": "Beginne mit „Sie\".",
   "explain": "Nach als ob steht das Verb am Ende: gehört hätten."
  }
 ],
 "praepositionen-gehoben": [
  {
   "type": "gap",
   "text": "___ der neuen Rechtslage prüfen wir den Fall erneut.",
   "answer": "Aufgrund",
   "alts": [
    "aufgrund"
   ],
   "explain": "aufgrund + Genitiv nennt den Grund. Sachlicher als wegen."
  },
  {
   "type": "gap",
   "text": "___ Ihrer Anfrage teilen wir Ihnen Folgendes mit.",
   "answer": "Bezüglich",
   "alts": [
    "bezüglich"
   ],
   "explain": "bezüglich + Genitiv = was … betrifft. Sehr häufig in Geschäftsbriefen."
  },
  {
   "type": "gap",
   "text": "___ der Kosten müssen wir noch sprechen.",
   "answer": "Hinsichtlich",
   "alts": [
    "hinsichtlich"
   ],
   "explain": "hinsichtlich + Genitiv grenzt ein: in dieser einen Frage."
  },
  {
   "type": "gap",
   "text": "___ ausreichender Nachweise wurde der Antrag abgelehnt.",
   "answer": "Mangels",
   "alts": [
    "mangels"
   ],
   "explain": "mangels + Genitiv = weil etwas fehlt. Sehr knapp und sehr amtlich."
  },
  {
   "type": "gap",
   "text": "___ des Jubiläums lädt die Firma alle ein.",
   "answer": "Anlässlich",
   "alts": [
    "anlässlich"
   ],
   "explain": "anlässlich + Genitiv nennt den Anlass eines Ereignisses."
  },
  {
   "type": "gap",
   "text": "___ der Umbauarbeiten bleibt der Zugang gesperrt.",
   "answer": "Während",
   "alts": [
    "während"
   ],
   "explain": "während + Genitiv im gehobenen Stil: während der Arbeiten."
  },
  {
   "type": "gap",
   "text": "___ eines Nachweises können wir nichts erstatten.",
   "answer": "Ohne",
   "alts": [
    "ohne"
   ],
   "explain": "ohne steht mit Akkusativ, nicht mit Genitiv — der Klassiker unter den Verwechslungen."
  },
  {
   "type": "choice",
   "q": "Welche Präposition steht NICHT mit Genitiv?",
   "options": [
    "angesichts",
    "hinsichtlich",
    "entsprechend",
    "mangels"
   ],
   "answer": 2,
   "explain": "entsprechend steht mit Dativ: entsprechend Ihrem Wunsch."
  },
  {
   "type": "choice",
   "q": "Was heißt „mangels Beweisen\" im Klartext?",
   "options": [
    "Weil es keine Beweise gab.",
    "Obwohl es Beweise gab.",
    "Trotz der Beweise.",
    "Mit vielen Beweisen."
   ],
   "answer": 0,
   "explain": "mangels nennt ein Fehlen als Grund. Im Alltag: weil nichts vorlag."
  },
  {
   "type": "choice",
   "q": "Welcher Satz passt in einen Geschäftsbrief?",
   "options": [
    "Bezüglich Ihrer Anfrage vom 3. Mai teilen wir Ihnen mit …",
    "Wegen Ihrer Anfrage, die Sie geschickt haben, sagen wir …",
    "Zu Ihrer Anfrage von neulich: also …",
    "Über Ihre Anfrage reden wir mal."
   ],
   "answer": 0,
   "explain": "bezüglich + Genitiv plus Datum ist die übliche Eröffnung."
  },
  {
   "type": "choice",
   "q": "Warum benutzt man diese Präpositionen überhaupt?",
   "options": [
    "Sie fassen einen ganzen Nebensatz in zwei Wörter.",
    "Sie sind höflicher.",
    "Sie sind Pflicht in Prüfungen.",
    "Sie sind leichter zu lesen."
   ],
   "answer": 0,
   "explain": "Angesichts der Lage statt Weil die Lage so ist, wie sie ist — knapp, aber dicht."
  },
  {
   "type": "order",
   "answer": "Angesichts der langen Bearbeitungszeit bitten wir um Verständnis",
   "hint": "Beginne mit „Angesichts\".",
   "explain": "Steht die Angabe vorn, rückt bitten an die zweite Stelle."
  },
  {
   "type": "order",
   "answer": "Hinsichtlich der Kostenübernahme wenden Sie sich bitte an die Krankenkasse",
   "hint": "Beginne mit „Hinsichtlich\".",
   "explain": "sich wenden an: das Reflexivpronomen steht direkt nach dem Verb."
  }
 ],
 "nominalisierte-adjektive": [
  {
   "type": "gap",
   "text": "Der ___ hat drei Wochen Zeit für den Widerspruch. (betroffen)",
   "answer": "Betroffene",
   "alts": [],
   "explain": "Nach dem bestimmten Artikel im Nominativ: -e. Aus dem Adjektiv wird ein Nomen."
  },
  {
   "type": "gap",
   "text": "Wir suchen einen ___ für die Nachtschicht. (freiwillig)",
   "answer": "Freiwilligen",
   "alts": [],
   "explain": "Nach einen im Akkusativ maskulin: -en."
  },
  {
   "type": "gap",
   "text": "Das ___ ist, dass alle rechtzeitig informiert werden. (wichtig)",
   "answer": "Wichtigste",
   "alts": [],
   "explain": "Nach das im Superlativ: das Wichtigste. Groß geschrieben, weil es ein Nomen ist."
  },
  {
   "type": "gap",
   "text": "Sie hat mir nichts ___ erzählt. (neu)",
   "answer": "Neues",
   "alts": [],
   "explain": "Nach nichts, etwas, viel steht die Endung -es: nichts Neues, etwas Neues."
  },
  {
   "type": "gap",
   "text": "Die ___ warten seit einer Stunde. (anwesend)",
   "answer": "Anwesenden",
   "alts": [],
   "explain": "Plural nach die: -en."
  },
  {
   "type": "gap",
   "text": "Ein ___ meldete den Vorfall. (angestellt)",
   "answer": "Angestellter",
   "alts": [],
   "explain": "Nach ein im Nominativ maskulin: -er. Das Adjektiv zeigt den Fall, weil ein es nicht tut."
  },
  {
   "type": "gap",
   "text": "Wir haben etwas ___ probiert. (ähnlich)",
   "answer": "Ähnliches",
   "alts": [],
   "explain": "etwas + Adjektiv auf -es, groß geschrieben."
  },
  {
   "type": "choice",
   "q": "Warum heißt es „ein Angestellter\", aber „der Angestellte\"?",
   "options": [
    "Weil das Wort ein Adjektiv bleibt und die Endung mitmacht.",
    "Weil es zwei verschiedene Wörter sind.",
    "Weil ein immer -er verlangt.",
    "Weil der Angestellte Plural ist."
   ],
   "answer": 0,
   "explain": "Nominalisierte Adjektive werden weiter dekliniert wie Adjektive — nur groß geschrieben."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist richtig?",
   "options": [
    "Ich habe mit einem Bekannten gesprochen.",
    "Ich habe mit einem Bekannter gesprochen.",
    "Ich habe mit einem Bekannte gesprochen.",
    "Ich habe mit ein Bekannten gesprochen."
   ],
   "answer": 0,
   "explain": "Dativ maskulin nach einem: -en."
  },
  {
   "type": "choice",
   "q": "„Nichts ___\" — welche Endung?",
   "options": [
    "Gutes",
    "Guten",
    "Gute",
    "Gut"
   ],
   "answer": 0,
   "explain": "Nach nichts, etwas, viel, wenig steht -es und Großschreibung."
  },
  {
   "type": "choice",
   "q": "Was ist an „Deutsche lieben Regeln\" grammatisch bemerkenswert?",
   "options": [
    "Deutsche ist ein nominalisiertes Adjektiv und wird weiter dekliniert.",
    "Es ist ein Rechtschreibfehler.",
    "Deutsche ist ein normales Nomen.",
    "Es fehlt ein Artikel."
   ],
   "answer": 0,
   "explain": "Deshalb heißt es die Deutschen, ein Deutscher, mit einem Deutschen — nie die Deutsche für einen Mann."
  },
  {
   "type": "order",
   "answer": "Alle Beteiligten wurden über das Ergebnis schriftlich informiert",
   "hint": "Beginne mit „Alle\".",
   "explain": "Nach alle steht die Pluralendung -en: alle Beteiligten."
  },
  {
   "type": "order",
   "answer": "Dem Betroffenen steht ein Widerspruchsrecht zu",
   "hint": "Beginne mit „Dem\".",
   "explain": "zustehen ist trennbar: das zu steht ganz am Ende."
  }
 ]
};

  /* Ein Schlüssel je Aufgabe, damit ein zweiter Lauf nichts doppelt
     anhängt — und damit eine Aufgabe, die es schon gibt, nicht noch
     einmal auftaucht. */
  function schluessel(e) {
    return (e.type || '') + '|' +
      String(e.text || e.q || e.answer || '').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  var idx = {}, k;
  for (k = 0; k < g.themes.length; k++) idx[g.themes[k].id] = g.themes[k];

  Object.keys(MEHR).forEach(function (id) {
    var t = idx[id];
    if (!t) return;                       // beim Bauen geprüft, hier nur zur Sicherheit
    if (!t.exercises) t.exercises = [];
    var da = {};
    t.exercises.forEach(function (e) { da[schluessel(e)] = 1; });
    MEHR[id].forEach(function (e) {
      var s2 = schluessel(e);
      if (da[s2]) return;
      da[s2] = 1;
      t.exercises.push(e);
    });
  });
})();
