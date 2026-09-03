/* ============================================================
   grammatik-b1-mehr.js — mehr Übung auf B1

   Erzeugt von bau/mach-grammatik-b1.js aus
   bau/grammatik-b1-mehr.json. Nicht von Hand ändern.

   Grammatik B1 hatte fünfzehn Themen, aber nur 214 Aufgaben — zehn
   der klassischen Themen kamen auf ganze zehn Stück. Wer zweimal
   übte, bekam dieselben Sätze wieder. Diese Datei hängt an jedes
   dieser Themen so viele Aufgaben an, dass es auf rund zwei Dutzend
   kommt, so viel wie auf A2, B2 und C1 auch.

   Sie legt keine neuen Themen an, sondern ergänzt vorhandene.
   Deshalb muss sie NACH grammatik-neu.js geladen werden.
   ============================================================ */
(function () {
  if (!window.UEBUNGEN || !window.UEBUNGEN.skills) return;
  var g = null, s = window.UEBUNGEN.skills;
  for (var i = 0; i < s.length; i++) { if (s[i].id === 'grammatik') { g = s[i]; break; } }
  if (!g || !g.themes) return;

  var MEHR = {
 "adjektivdeklination": [
  {
   "type": "gap",
   "text": "Ich helfe der ___ Frau. (alt)",
   "answer": "alten",
   "alts": [],
   "explain": "Im Dativ hinter dem bestimmten Artikel endet das Adjektiv immer auf -en."
  },
  {
   "type": "gap",
   "text": "Wir haben mit den ___ Kollegen gesprochen. (neu)",
   "answer": "neuen",
   "alts": [],
   "explain": "Im Dativ Plural endet das Adjektiv immer auf -en."
  },
  {
   "type": "choice",
   "q": "Das sind ___ Schuhe. (bequem, ohne Artikel)",
   "options": [
    "bequeme",
    "bequemen",
    "bequemer"
   ],
   "answer": 0,
   "explain": "Ohne Artikel muss das Adjektiv selbst zeigen, dass es Plural ist: -e."
  },
  {
   "type": "gap",
   "text": "Sie trägt einen ___ Mantel. (dunkelblau)",
   "answer": "dunkelblauen",
   "alts": [],
   "explain": "Akkusativ maskulin: hinter einen endet das Adjektiv auf -en."
  },
  {
   "type": "choice",
   "q": "Ich habe keinen ___ Hunger. (groß)",
   "options": [
    "großer",
    "großen",
    "großes"
   ],
   "answer": 1,
   "explain": "kein verhält sich wie ein — im Akkusativ maskulin folgt -en."
  },
  {
   "type": "gap",
   "text": "Mein ___ Bruder wohnt in Hamburg. (klein)",
   "answer": "kleiner",
   "alts": [],
   "explain": "mein zeigt keine Endung, deshalb übernimmt das Adjektiv sie: -er."
  },
  {
   "type": "choice",
   "q": "Wir wohnen in der ___ Straße. (ruhig)",
   "options": [
    "ruhige",
    "ruhigen",
    "ruhiger"
   ],
   "answer": 1,
   "explain": "Dativ feminin hinter der: -en."
  },
  {
   "type": "gap",
   "text": "Das ist ein Zimmer mit einem ___ Fenster. (groß)",
   "answer": "großen",
   "alts": [],
   "explain": "Dativ neutrum hinter einem: -en."
  },
  {
   "type": "choice",
   "q": "Ich suche eine ___ Wohnung. (günstig)",
   "options": [
    "günstige",
    "günstigen",
    "günstiger"
   ],
   "answer": 0,
   "explain": "Im Femininen sehen Nominativ und Akkusativ gleich aus: -e."
  },
  {
   "type": "gap",
   "text": "Die ___ Kinder spielen draußen. (klein)",
   "answer": "kleinen",
   "alts": [],
   "explain": "Im Plural hinter die endet das Adjektiv immer auf -en."
  },
  {
   "type": "choice",
   "q": "Zum Frühstück gibt es ___ Brötchen. (frisch, ohne Artikel)",
   "options": [
    "frische",
    "frischen",
    "frisches"
   ],
   "answer": 0,
   "explain": "Ohne Artikel im Plural: -e."
  },
  {
   "type": "gap",
   "text": "Nach einem ___ Tag schlafe ich sofort ein. (lang)",
   "answer": "langen",
   "alts": [],
   "explain": "Dativ maskulin hinter einem: -en."
  },
  {
   "type": "choice",
   "q": "Das war ein ___ Film! (spannend)",
   "options": [
    "spannender",
    "spannende",
    "spannendes"
   ],
   "answer": 0,
   "explain": "ein zeigt nicht, dass es maskulin ist — also zeigt es das Adjektiv: -er."
  },
  {
   "type": "gap",
   "text": "Ich hätte gern ein ___ Wasser. (still)",
   "answer": "stilles",
   "alts": [],
   "explain": "Neutrum hinter ein: -es."
  }
 ],
 "genitiv": [
  {
   "type": "choice",
   "q": "___ des schlechten Wetters findet das Fest statt.",
   "options": [
    "Wegen",
    "Trotz",
    "Während"
   ],
   "answer": 1,
   "explain": "trotz sagt: etwas spricht dagegen, es passiert trotzdem."
  },
  {
   "type": "gap",
   "text": "Das Dach ___ Hauses muss repariert werden.",
   "answer": "des",
   "alts": [],
   "explain": "Maskulin und neutrum haben im Genitiv den Artikel des."
  },
  {
   "type": "gap",
   "text": "___ des Kaffees trinke ich heute Tee.",
   "answer": "Statt",
   "alts": [],
   "explain": "statt nennt das, was an die Stelle von etwas anderem tritt."
  },
  {
   "type": "choice",
   "q": "Der Titel ___ Buches ist lang.",
   "options": [
    "des",
    "der",
    "dem"
   ],
   "answer": 0,
   "explain": "das Buch ist neutrum, im Genitiv also des Buches."
  },
  {
   "type": "gap",
   "text": "Die Eltern ___ Schülerin sind da.",
   "answer": "der",
   "alts": [],
   "explain": "Feminine Nomen haben im Genitiv den Artikel der."
  },
  {
   "type": "choice",
   "q": "Am Ende ___ Woche fahren wir weg.",
   "options": [
    "des",
    "der",
    "den"
   ],
   "answer": 1,
   "explain": "die Woche ist feminin: der Woche."
  },
  {
   "type": "gap",
   "text": "Der Anfang ___ Films war spannend.",
   "answer": "des",
   "alts": [],
   "explain": "der Film ist maskulin: des Films."
  },
  {
   "type": "choice",
   "q": "Wie heißt der Genitiv von „das Kind“?",
   "options": [
    "des Kindes",
    "dem Kind",
    "der Kinder"
   ],
   "answer": 0,
   "explain": "Einsilbige Nomen bekommen meist -es: des Kindes."
  },
  {
   "type": "gap",
   "text": "Wir treffen uns trotz ___ Regens.",
   "answer": "des",
   "alts": [],
   "explain": "trotz verlangt den Genitiv: trotz des Regens."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist richtig?",
   "options": [
    "Das ist das Auto meines Bruders.",
    "Das ist das Auto mein Bruder.",
    "Das ist das Auto meinem Bruder."
   ],
   "answer": 0,
   "explain": "Der Besitzer steht im Genitiv: meines Bruders."
  },
  {
   "type": "gap",
   "text": "___ der Woche arbeite ich, am Wochenende nicht.",
   "answer": "Während",
   "alts": [],
   "explain": "während nennt den Zeitraum und verlangt den Genitiv."
  },
  {
   "type": "choice",
   "q": "Nomen auf -s, -ß oder -x bekommen im Genitiv …",
   "options": [
    "-s",
    "-es",
    "keine Endung"
   ],
   "answer": 1,
   "explain": "Sonst könnte man es nicht aussprechen: das Haus wird zu des Hauses."
  },
  {
   "type": "gap",
   "text": "Das ist die Wohnung ___ Nachbarn. (Plural)",
   "answer": "der",
   "alts": [],
   "explain": "Im Plural heißt der Genitiv-Artikel immer der."
  },
  {
   "type": "choice",
   "q": "Im Gespräch sagt man statt „das Auto des Vaters“ meistens …",
   "options": [
    "das Auto vom Vater",
    "das Auto dem Vater",
    "das Auto den Vater"
   ],
   "answer": 0,
   "explain": "Gesprochen ersetzt von + Dativ den Genitiv."
  }
 ],
 "konjunktiv2": [
  {
   "type": "gap",
   "text": "Wenn ich mehr Geld ___, würde ich reisen. (haben)",
   "answer": "hätte",
   "alts": [],
   "explain": "haben bildet den Konjunktiv II mit Umlaut: hätte."
  },
  {
   "type": "choice",
   "q": "Höfliche Frage im Restaurant: „___ ich bitte die Karte haben?“",
   "options": [
    "Darf",
    "Dürfte",
    "Durfte"
   ],
   "answer": 1,
   "explain": "dürfte klingt zurückhaltender als darf."
  },
  {
   "type": "gap",
   "text": "Wenn wir Zeit ___, kämen wir gern vorbei. (haben)",
   "answer": "hätten",
   "alts": [],
   "explain": "Plural von hätte: hätten."
  },
  {
   "type": "choice",
   "q": "„Du ___ dich mal ausruhen.“ (Ratschlag)",
   "options": [
    "musst",
    "müsstest",
    "musstest"
   ],
   "answer": 1,
   "explain": "Der Konjunktiv II macht aus dem Befehl einen Rat."
  },
  {
   "type": "gap",
   "text": "___ du mir kurz helfen? (können, höflich)",
   "answer": "Könntest",
   "alts": [],
   "explain": "können wird zu könnte — das ist die höfliche Form."
  },
  {
   "type": "gap",
   "text": "Wenn ich du wäre, ___ ich noch einmal nachfragen.",
   "answer": "würde",
   "alts": [],
   "explain": "Für die meisten Verben nimmt man würde + Infinitiv."
  },
  {
   "type": "choice",
   "q": "Welche Form ist höflicher?",
   "options": [
    "Ich will einen Kaffee.",
    "Ich hätte gern einen Kaffee."
   ],
   "answer": 1,
   "explain": "hätte gern ist die übliche höfliche Bestellung."
  },
  {
   "type": "gap",
   "text": "Es ___ schön, wenn du mitkommst. (sein)",
   "answer": "wäre",
   "alts": [],
   "explain": "sein wird im Konjunktiv II zu wäre."
  },
  {
   "type": "choice",
   "q": "„Wenn das Wetter besser ___, gingen wir schwimmen.“",
   "options": [
    "ist",
    "wäre",
    "war"
   ],
   "answer": 1,
   "explain": "Der irreale Bedingungssatz braucht den Konjunktiv II."
  },
  {
   "type": "gap",
   "text": "Ihr ___ öfter Pausen machen. (sollen, Ratschlag)",
   "answer": "solltet",
   "alts": [],
   "explain": "sollte ist die häufigste Form für einen Rat."
  },
  {
   "type": "choice",
   "q": "Wozu benutzt man „würde + Infinitiv“ meistens?",
   "options": [
    "für Verben ohne eigene Konjunktiv-Form",
    "für die Vergangenheit",
    "für Befehle"
   ],
   "answer": 0,
   "explain": "Nur wenige Verben haben eine eigene Form — der Rest nimmt würde."
  },
  {
   "type": "gap",
   "text": "___ Sie so freundlich, das Fenster zu schließen? (sein)",
   "answer": "Wären",
   "alts": [],
   "explain": "Wären Sie so freundlich … ist eine sehr höfliche Bitte."
  },
  {
   "type": "choice",
   "q": "„Ich ___ dir gern helfen, aber ich habe keine Zeit.“",
   "options": [
    "werde",
    "würde",
    "wurde"
   ],
   "answer": 1,
   "explain": "würde zeigt: es ist nur gedacht, nicht wirklich."
  },
  {
   "type": "gap",
   "text": "Wenn er nicht so müde ___, würde er mitkommen. (sein)",
   "answer": "wäre",
   "alts": [],
   "explain": "Im wenn-Satz steht der Konjunktiv II, im Hauptsatz oft würde."
  }
 ],
 "nebensaetze": [
  {
   "type": "gap",
   "text": "Ich gehe raus, ___ es regnet.",
   "answer": "obwohl",
   "alts": [],
   "explain": "obwohl zeigt: es passiert, obwohl etwas dagegen spricht."
  },
  {
   "type": "choice",
   "q": "Was bedeutet „obwohl“?",
   "options": [
    "einen Grund",
    "einen Gegensatz zum Erwarteten",
    "eine Bedingung"
   ],
   "answer": 1,
   "explain": "Man erwartet das Gegenteil — und es passiert trotzdem."
  },
  {
   "type": "gap",
   "text": "Ich weiß nicht, ___ er heute kommt.",
   "answer": "ob",
   "alts": [],
   "explain": "Bei einer Frage ohne Fragewort steht ob, nicht dass."
  },
  {
   "type": "choice",
   "q": "„Ich frage dich, ___ du Zeit hast.“",
   "options": [
    "dass",
    "ob",
    "weil"
   ],
   "answer": 1,
   "explain": "Die Frage „Hast du Zeit?“ wird im Nebensatz zu ob."
  },
  {
   "type": "gap",
   "text": "Ich lerne viel, ___ ich die Prüfung bestehe.",
   "answer": "damit",
   "alts": [],
   "explain": "damit nennt das Ziel einer Handlung."
  },
  {
   "type": "choice",
   "q": "Wohin kommt das Verb, wenn der Nebensatz vorn steht?",
   "options": [
    "Der Hauptsatz beginnt mit dem Verb.",
    "Der Hauptsatz beginnt mit dem Subjekt."
   ],
   "answer": 0,
   "explain": "Weil ich krank bin, bleibe ich zu Hause — das Verb rutscht nach vorn."
  },
  {
   "type": "gap",
   "text": "Weil ich müde bin, ___ ich früh ins Bett.",
   "answer": "gehe",
   "alts": [],
   "explain": "Der Nebensatz besetzt Platz eins, also folgt sofort das Verb."
  },
  {
   "type": "choice",
   "q": "Wo steht ein trennbares Verb im Nebensatz?",
   "options": [
    "getrennt: …, weil ich früh stehe auf.",
    "zusammen: …, weil ich früh aufstehe."
   ],
   "answer": 1,
   "explain": "Am Satzende wächst das trennbare Verb wieder zusammen."
  },
  {
   "type": "gap",
   "text": "Ruf mich an, ___ du angekommen bist.",
   "answer": "wenn",
   "alts": [],
   "explain": "wenn nennt den Zeitpunkt oder die Bedingung."
  },
  {
   "type": "choice",
   "q": "„Ich bleibe zu Hause, ___ ich noch arbeiten muss.“",
   "options": [
    "weil",
    "dass",
    "damit"
   ],
   "answer": 0,
   "explain": "weil nennt den Grund."
  },
  {
   "type": "gap",
   "text": "Er sagt, ___ er später kommt.",
   "answer": "dass",
   "alts": [],
   "explain": "Nach sagen, denken, hoffen folgt der dass-Satz."
  },
  {
   "type": "choice",
   "q": "Wo steht das Modalverb im Nebensatz?",
   "options": [
    "vor dem Infinitiv",
    "ganz am Ende",
    "auf Position 2"
   ],
   "answer": 1,
   "explain": "…, weil ich arbeiten muss — das Modalverb steht hinter dem Infinitiv."
  },
  {
   "type": "gap",
   "text": "Ich spare Geld, ___ ich im Sommer verreisen kann.",
   "answer": "damit",
   "alts": [],
   "explain": "damit nennt das Ziel: wozu spare ich?"
  },
  {
   "type": "choice",
   "q": "Welcher Satz stimmt?",
   "options": [
    "Obwohl es kalt ist, gehen wir spazieren.",
    "Obwohl es kalt ist, wir gehen spazieren."
   ],
   "answer": 0,
   "explain": "Nach dem Nebensatz kommt zuerst das Verb, dann das Subjekt."
  }
 ],
 "passiv-praesens": [
  {
   "type": "gap",
   "text": "In der Kantine ___ jeden Tag frisch gekocht.",
   "answer": "wird",
   "alts": [],
   "explain": "Ohne Subjekt steht das Passiv in der Form für es: wird."
  },
  {
   "type": "choice",
   "q": "Wann ___ die Pakete ausgeliefert?",
   "options": [
    "wird",
    "werden",
    "werdet"
   ],
   "answer": 1,
   "explain": "Das Subjekt ist Plural, also werden."
  },
  {
   "type": "gap",
   "text": "Die Fenster ___ zweimal im Jahr geputzt.",
   "answer": "werden",
   "alts": [],
   "explain": "Plural: werden + Partizip II."
  },
  {
   "type": "choice",
   "q": "Aktiv: „Die Firma prüft den Antrag.“ → Passiv:",
   "options": [
    "Der Antrag wird von der Firma geprüft.",
    "Der Antrag wird die Firma geprüft.",
    "Der Antrag ist von der Firma geprüft."
   ],
   "answer": 0,
   "explain": "Das Akkusativobjekt wird zum Subjekt, der Täter steht mit von."
  },
  {
   "type": "gap",
   "text": "Ihr ___ nachher am Bahnhof abgeholt.",
   "answer": "werdet",
   "alts": [],
   "explain": "ihr braucht die Form werdet."
  },
  {
   "type": "choice",
   "q": "Wozu benutzt man das Passiv?",
   "options": [
    "Die Handlung ist wichtiger als der Täter.",
    "Der Täter ist immer wichtig.",
    "Es klingt höflicher als eine Frage."
   ],
   "answer": 0,
   "explain": "Im Passiv geht es darum, was gemacht wird — nicht, wer es macht."
  },
  {
   "type": "gap",
   "text": "Das Formular ___ online ausgefüllt.",
   "answer": "wird",
   "alts": [],
   "explain": "Singular: wird + Partizip II."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist Passiv?",
   "options": [
    "Das Zimmer wird gestrichen.",
    "Das Zimmer ist grün.",
    "Das Zimmer wird grün."
   ],
   "answer": 0,
   "explain": "Nur hier steht werden zusammen mit einem Partizip II."
  },
  {
   "type": "gap",
   "text": "Die Türen ___ um 20 Uhr geschlossen.",
   "answer": "werden",
   "alts": [],
   "explain": "Plural: werden."
  }
 ],
 "passiv-vergangenheit": [
  {
   "type": "gap",
   "text": "Die Straße ___ letztes Jahr saniert.",
   "answer": "wurde",
   "alts": [],
   "explain": "Präteritum Passiv im Singular: wurde + Partizip II."
  },
  {
   "type": "choice",
   "q": "Wann ___ dieses Haus gebaut?",
   "options": [
    "wurde",
    "wird",
    "ist"
   ],
   "answer": 0,
   "explain": "Es geht um die Vergangenheit, also wurde."
  },
  {
   "type": "gap",
   "text": "Wir ___ gestern nicht informiert.",
   "answer": "wurden",
   "alts": [],
   "explain": "Plural im Präteritum: wurden."
  },
  {
   "type": "choice",
   "q": "Perfekt Passiv im Plural: „Die Briefe ___ verschickt worden.“",
   "options": [
    "ist",
    "sind",
    "haben"
   ],
   "answer": 1,
   "explain": "Das Perfekt Passiv bildet man immer mit sein."
  },
  {
   "type": "gap",
   "text": "Der Termin ist gestern ___. (absagen)",
   "answer": "abgesagt worden",
   "alts": [],
   "explain": "Perfekt Passiv: sein + Partizip II + worden."
  },
  {
   "type": "choice",
   "q": "Warum heißt es „worden“ und nicht „geworden“?",
   "options": [
    "Im Passiv fällt das ge- weg.",
    "Das ist ein Schreibfehler.",
    "Beides ist gleich richtig."
   ],
   "answer": 0,
   "explain": "geworden gehört zum Vollverb werden, worden nur zum Passiv."
  },
  {
   "type": "gap",
   "text": "Das Paket ___ von der Nachbarin angenommen.",
   "answer": "wurde",
   "alts": [],
   "explain": "Präteritum Passiv Singular: wurde."
  },
  {
   "type": "gap",
   "text": "Die Fenster ___ im Frühling gestrichen.",
   "answer": "wurden",
   "alts": [],
   "explain": "Plural im Präteritum: wurden."
  },
  {
   "type": "choice",
   "q": "Welche Form benutzt man eher beim Erzählen im Alltag?",
   "options": [
    "Es ist repariert worden.",
    "Es wurde repariert."
   ],
   "answer": 0,
   "explain": "Gesprochen nimmt man meist das Perfekt."
  },
  {
   "type": "gap",
   "text": "Ich ___ zum Gespräch eingeladen worden.",
   "answer": "bin",
   "alts": [],
   "explain": "Perfekt Passiv mit sein: ich bin … worden."
  },
  {
   "type": "choice",
   "q": "„Der Vertrag ___ vom Chef unterschrieben.“ (Präteritum)",
   "options": [
    "wurde",
    "wurden",
    "ist"
   ],
   "answer": 0,
   "explain": "Ein Vertrag ist Singular: wurde."
  },
  {
   "type": "gap",
   "text": "Wir sind gestern am Bahnhof ___. (abholen)",
   "answer": "abgeholt worden",
   "alts": [],
   "explain": "Partizip II plus worden bilden das Perfekt Passiv."
  },
  {
   "type": "choice",
   "q": "Aktiv: „Man hat das Museum renoviert.“ → Perfekt Passiv:",
   "options": [
    "Das Museum ist renoviert worden.",
    "Das Museum hat renoviert worden.",
    "Das Museum wurde renoviert worden."
   ],
   "answer": 0,
   "explain": "sein + Partizip II + worden — man fällt weg."
  },
  {
   "type": "gap",
   "text": "Die Ergebnisse ___ erst gestern veröffentlicht.",
   "answer": "wurden",
   "alts": [],
   "explain": "Plural im Präteritum: wurden."
  }
 ],
 "perfekt-praeteritum": [
  {
   "type": "choice",
   "q": "„Ich ___ gestern nicht kommen.“ (können, gesprochen)",
   "options": [
    "habe gekonnt",
    "konnte",
    "bin gekonnt"
   ],
   "answer": 1,
   "explain": "Modalverben stehen auch im Gespräch fast immer im Präteritum."
  },
  {
   "type": "gap",
   "text": "Wir ___ mit dem Zug gefahren.",
   "answer": "sind",
   "alts": [],
   "explain": "fahren ist eine Bewegung von A nach B — Perfekt mit sein."
  },
  {
   "type": "gap",
   "text": "Sie ___ den ganzen Tag zu Hause geblieben.",
   "answer": "ist",
   "alts": [],
   "explain": "bleiben bildet das Perfekt mit sein, obwohl nichts sich bewegt."
  },
  {
   "type": "choice",
   "q": "Wie heißt das Partizip II von „telefonieren“?",
   "options": [
    "telefoniert",
    "getelefoniert",
    "telefonieren"
   ],
   "answer": 0,
   "explain": "Verben auf -ieren bekommen kein ge-."
  },
  {
   "type": "gap",
   "text": "Zum Glück ___ mir nichts passiert.",
   "answer": "ist",
   "alts": [],
   "explain": "passieren beschreibt eine Veränderung — Perfekt mit sein."
  },
  {
   "type": "choice",
   "q": "Welche Verben bilden das Perfekt mit „sein“?",
   "options": [
    "Verben der Bewegung und der Veränderung",
    "alle Verben mit Akkusativ",
    "nur trennbare Verben"
   ],
   "answer": 0,
   "explain": "gehen, fahren, aufstehen, einschlafen, passieren — dazu sein und bleiben."
  },
  {
   "type": "gap",
   "text": "Ich ___ das Buch schon gelesen.",
   "answer": "habe",
   "alts": [],
   "explain": "lesen hat ein Akkusativobjekt — Perfekt mit haben."
  },
  {
   "type": "gap",
   "text": "Als ich klein ___, wohnten wir auf dem Land. (sein)",
   "answer": "war",
   "alts": [],
   "explain": "sein steht auch im Gespräch im Präteritum: war."
  },
  {
   "type": "choice",
   "q": "Wie heißt das Partizip II von „mitbringen“?",
   "options": [
    "mitgebracht",
    "gemitbracht",
    "mitbringt"
   ],
   "answer": 0,
   "explain": "Bei trennbaren Verben steht das ge- in der Mitte."
  },
  {
   "type": "gap",
   "text": "Wir ___ letzten Sommer nach Italien geflogen.",
   "answer": "sind",
   "alts": [],
   "explain": "fliegen ist eine Bewegung — Perfekt mit sein."
  },
  {
   "type": "choice",
   "q": "„Er ___ mir gestern geholfen.“",
   "options": [
    "hat",
    "ist",
    "war"
   ],
   "answer": 0,
   "explain": "helfen bildet das Perfekt mit haben, auch wenn ein Dativ folgt."
  },
  {
   "type": "gap",
   "text": "Früher ___ ich jeden Tag Klavier. (spielen, geschrieben)",
   "answer": "spielte",
   "alts": [],
   "explain": "Im geschriebenen Text steht das Präteritum: spielte."
  },
  {
   "type": "choice",
   "q": "In welcher Textsorte steht meist das Präteritum?",
   "options": [
    "im Zeitungsbericht",
    "in der Sprachnachricht",
    "im Gespräch am Telefon"
   ],
   "answer": 0,
   "explain": "Geschriebene Texte erzählen im Präteritum, gesprochene im Perfekt."
  },
  {
   "type": "gap",
   "text": "Ich ___ dich gestern nicht erreichen. (können)",
   "answer": "konnte",
   "alts": [],
   "explain": "Modalverben nimmt man in der Vergangenheit im Präteritum."
  }
 ],
 "temporale-nebensaetze": [
  {
   "type": "choice",
   "q": "___ ich zehn war, zogen wir um.",
   "options": [
    "Als",
    "Wenn",
    "Während"
   ],
   "answer": 0,
   "explain": "als steht für ein einziges Ereignis in der Vergangenheit."
  },
  {
   "type": "choice",
   "q": "Immer ___ es regnete, blieben wir drinnen.",
   "options": [
    "als",
    "wenn",
    "bevor"
   ],
   "answer": 1,
   "explain": "wenn steht, wenn sich etwas wiederholt hat."
  },
  {
   "type": "gap",
   "text": "___ ich in Deutschland wohne, verstehe ich viel mehr.",
   "answer": "Seit",
   "alts": [
    "Seitdem"
   ],
   "explain": "seit nennt den Anfangspunkt eines Zeitraums, der noch dauert."
  },
  {
   "type": "gap",
   "text": "Warte bitte, ___ ich fertig bin.",
   "answer": "bis",
   "alts": [],
   "explain": "bis nennt den Endpunkt."
  },
  {
   "type": "choice",
   "q": "___ ich zu Hause bin, rufe ich dich an.",
   "options": [
    "Sobald",
    "Während",
    "Bevor"
   ],
   "answer": 0,
   "explain": "sobald heißt: sofort, wenn es so weit ist."
  },
  {
   "type": "gap",
   "text": "___ ich das erste Mal in Berlin war, hat mir die Stadt sofort gefallen.",
   "answer": "Als",
   "alts": [],
   "explain": "Ein einmaliges Erlebnis in der Vergangenheit bekommt als."
  },
  {
   "type": "choice",
   "q": "Welcher Satz stimmt?",
   "options": [
    "Als ich Kind war, spielte ich viel draußen.",
    "Wenn ich Kind war, spielte ich viel draußen."
   ],
   "answer": 0,
   "explain": "Kindheit gab es nur einmal — also als."
  },
  {
   "type": "gap",
   "text": "Ich melde mich, ___ ich mehr weiß.",
   "answer": "sobald",
   "alts": [],
   "explain": "sobald zeigt, dass es unmittelbar danach passiert."
  },
  {
   "type": "choice",
   "q": "Was bedeutet „solange“?",
   "options": [
    "für die ganze Zeit, in der etwas gilt",
    "danach",
    "vorher"
   ],
   "answer": 0,
   "explain": "solange nennt einen Zeitraum, der parallel läuft."
  },
  {
   "type": "gap",
   "text": "___ ich krank war, hat mir meine Nachbarin geholfen.",
   "answer": "Als",
   "alts": [],
   "explain": "Ein abgeschlossener Zeitraum in der Vergangenheit: als."
  },
  {
   "type": "choice",
   "q": "„___ ich das Formular abgeschickt hatte, kam die Antwort schnell.“",
   "options": [
    "Nachdem",
    "Bevor",
    "Während"
   ],
   "answer": 0,
   "explain": "Zuerst das Formular, dann die Antwort — nachdem."
  },
  {
   "type": "gap",
   "text": "___ ich koche, hört mein Sohn Musik.",
   "answer": "Während",
   "alts": [],
   "explain": "Beides passiert gleichzeitig."
  },
  {
   "type": "choice",
   "q": "Welcher Satz ist richtig?",
   "options": [
    "Sobald ich Zeit habe, melde ich mich.",
    "Sobald ich habe Zeit, melde ich mich."
   ],
   "answer": 0,
   "explain": "Im Nebensatz steht das Verb am Ende."
  },
  {
   "type": "gap",
   "text": "___ du das Haus verlässt, mach bitte das Licht aus.",
   "answer": "Bevor",
   "alts": [],
   "explain": "bevor nennt, was vorher passiert."
  }
 ],
 "wechselpraepositionen": [
  {
   "type": "choice",
   "q": "Das Bild hängt ___ Sofa. (über)",
   "options": [
    "über das",
    "über dem"
   ],
   "answer": 1,
   "explain": "hängen ohne Bewegung fragt Wo? — also Dativ."
  },
  {
   "type": "gap",
   "text": "Häng das Bild bitte ___ Sofa. (über)",
   "answer": "über das",
   "alts": [
    "übers"
   ],
   "explain": "Hier bewegt sich etwas: Wohin? — also Akkusativ."
  },
  {
   "type": "choice",
   "q": "Ich sitze ___ dir. (neben)",
   "options": [
    "neben dich",
    "neben dir"
   ],
   "answer": 1,
   "explain": "sitzen nennt den Ort — Dativ."
  },
  {
   "type": "gap",
   "text": "Setz dich ___ mich. (neben)",
   "answer": "neben mich",
   "alts": [],
   "explain": "sich setzen ist eine Bewegung — Akkusativ."
  },
  {
   "type": "choice",
   "q": "Der Stift liegt ___ Büchern. (zwischen)",
   "options": [
    "zwischen die",
    "zwischen den"
   ],
   "answer": 1,
   "explain": "liegen fragt Wo? — Dativ Plural heißt den."
  },
  {
   "type": "gap",
   "text": "Stell den Stuhl ___ Tisch. (hinter)",
   "answer": "hinter den",
   "alts": [],
   "explain": "stellen ist eine Bewegung — Akkusativ."
  },
  {
   "type": "choice",
   "q": "Die Kinder verstecken sich ___ Schrank. (hinter)",
   "options": [
    "hinter den",
    "hinter dem"
   ],
   "answer": 1,
   "explain": "Sie sind schon dort — Wo? — Dativ."
  },
  {
   "type": "gap",
   "text": "Ich stecke den Schlüssel ___ Tasche. (in)",
   "answer": "in die",
   "alts": [],
   "explain": "stecken mit Bewegung: Wohin? — Akkusativ."
  },
  {
   "type": "choice",
   "q": "Welches Verb zeigt eine Bewegung?",
   "options": [
    "stellen",
    "stehen",
    "liegen"
   ],
   "answer": 0,
   "explain": "stellen, legen, setzen und hängen mit Bewegung nehmen den Akkusativ."
  },
  {
   "type": "gap",
   "text": "Der Schlüssel steckt ___ Tür. (in)",
   "answer": "in der",
   "alts": [],
   "explain": "Er steckt schon dort: Wo? — Dativ."
  },
  {
   "type": "choice",
   "q": "Auf welche Frage antwortet der Dativ?",
   "options": [
    "Wohin?",
    "Wo?"
   ],
   "answer": 1,
   "explain": "Wo? = Ort = Dativ. Wohin? = Bewegung = Akkusativ."
  },
  {
   "type": "gap",
   "text": "Wir treffen uns ___ Bahnhof. (an)",
   "answer": "am",
   "alts": [
    "an dem"
   ],
   "explain": "Ein fester Treffpunkt ist ein Ort — Dativ, kurz am."
  },
  {
   "type": "choice",
   "q": "Wir gehen ___ Berge. (in)",
   "options": [
    "in die",
    "in den"
   ],
   "answer": 0,
   "explain": "Wohin? — Akkusativ, im Plural heißt der Artikel die."
  },
  {
   "type": "gap",
   "text": "Das Fahrrad steht ___ Haus. (neben)",
   "answer": "neben dem",
   "alts": [],
   "explain": "stehen nennt den Ort — Dativ."
  }
 ],
 "konnektoren": [
  {
   "type": "gap",
   "text": "Er ist noch jung, ___ hat er schon viel erreicht.",
   "answer": "dennoch",
   "alts": [
    "trotzdem"
   ],
   "explain": "dennoch zeigt: es passiert, obwohl man das Gegenteil erwartet."
  },
  {
   "type": "choice",
   "q": "Was bedeutet „dennoch“?",
   "options": [
    "trotzdem",
    "deshalb",
    "außerdem"
   ],
   "answer": 0,
   "explain": "dennoch und trotzdem sagen dasselbe, dennoch klingt schriftlicher."
  },
  {
   "type": "gap",
   "text": "Wir müssen sparen. ___ fahren wir dieses Jahr nicht weg.",
   "answer": "Darum",
   "alts": [
    "Deshalb",
    "Deswegen"
   ],
   "explain": "darum, deshalb und deswegen nennen alle die Folge."
  },
  {
   "type": "choice",
   "q": "„Ich komme mit, ___ ich muss vorher noch etwas erledigen.“",
   "options": [
    "allerdings",
    "deshalb",
    "außerdem"
   ],
   "answer": 0,
   "explain": "allerdings schränkt das ein, was gerade gesagt wurde."
  }
 ],
 "praepositionaladverbien": [
  {
   "type": "choice",
   "q": "Wir haben lange über den Plan gesprochen. — Wir haben lange ___ gesprochen.",
   "options": [
    "darüber",
    "davon",
    "daran"
   ],
   "answer": 0,
   "explain": "sprechen über wird zu darüber."
  },
  {
   "type": "gap",
   "text": "___ freust du dich am meisten?",
   "answer": "Worauf",
   "alts": [],
   "explain": "In der Frage steht wo- statt da-: worauf."
  },
  {
   "type": "choice",
   "q": "Ich kümmere mich um die Anmeldung. — Ich kümmere mich ___.",
   "options": [
    "darum",
    "dafür",
    "damit"
   ],
   "answer": 0,
   "explain": "sich kümmern um wird zu darum."
  },
  {
   "type": "gap",
   "text": "Sie ärgert sich über den Lärm. — Sie ärgert sich ___.",
   "answer": "darüber",
   "alts": [],
   "explain": "Auch hier wird über zu darüber."
  },
  {
   "type": "choice",
   "q": "Ich denke an meine Schwester. Wie geht es weiter: Ich denke …",
   "options": [
    "daran",
    "an sie",
    "damit"
   ],
   "answer": 1,
   "explain": "Bei Personen bleibt die Präposition mit dem Pronomen — nur Sachen bekommen da-."
  },
  {
   "type": "choice",
   "q": "___ hast du so lange gewartet?",
   "options": [
    "Worauf",
    "Wofür",
    "Wovon"
   ],
   "answer": 0,
   "explain": "warten auf wird in der Frage zu worauf."
  },
  {
   "type": "choice",
   "q": "„Ich rechne ___, dass es klappt.“",
   "options": [
    "damit",
    "darauf",
    "daran"
   ],
   "answer": 0,
   "explain": "rechnen mit — also damit."
  },
  {
   "type": "gap",
   "text": "Er hat sich über das Lob gefreut. — Er hat sich sehr ___ gefreut.",
   "answer": "darüber",
   "alts": [],
   "explain": "sich freuen über wird zu darüber."
  }
 ]
};

  /* Ein Schlüssel je Aufgabe, damit ein zweiter Lauf nichts doppelt
     anhängt — und damit eine Aufgabe, die es schon gibt, nicht noch
     einmal auftaucht. */
  function schluessel(e) {
    return (e.type || '') + '|' + String(e.text || e.q || '').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  var idx = {}, k;
  for (k = 0; k < g.themes.length; k++) idx[g.themes[k].id] = g.themes[k];

  Object.keys(MEHR).forEach(function (id) {
    var t = idx[id];
    if (!t) return;                       // Thema gibt es nicht -> still übergehen
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
