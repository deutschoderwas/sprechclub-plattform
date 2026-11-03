/* ============================================================
   deutschoderwas club — SCHREIBEN telc Deutsch B2·C1 Beruf

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B2·C1 Beruf,
   geprüft 03.11.2026). Alle Texte und Aufgaben eigene, Kontext
   Arbeitswelt. Erzeugt aus scratchpad/telcb2c1 mit bau.js.
   ============================================================ */

window.SCHREIBEN_TELC_B2C1 = {
 "niveau": "telcB2C1",
 "pruefung": "telc Deutsch B2·C1 Beruf",
 "minuten": 60,
 "punkte": 42,
 "intro": "Beim Schriftlichen Ausdruck von telc B2·C1 Beruf schreibst du in sechzig Minuten drei Texte: eine kurze informelle E-Mail an Kollegen (etwa zehn Minuten), eine formelle Antwort nach außen (etwa fünfzehn Minuten) und eine Diskussionsvorlage für die Geschäftsleitung (etwa fünfunddreißig Minuten). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Drei Textsorten",
   "zeichen": "🖼️",
   "was": "Informell an Kollegen, formell nach außen, Vorlage nach oben."
  },
  {
   "nr": 2,
   "titel": "Abwägen und empfehlen",
   "zeichen": "🧩",
   "was": "Die Diskussionsvorlage aufbauen, auf C1 begründen."
  },
  {
   "nr": 3,
   "titel": "Die drei Aufgaben",
   "zeichen": "✉️",
   "was": "Jede Textsorte einzeln, mit Muster."
  },
  {
   "nr": 4,
   "titel": "Die Prüfung",
   "zeichen": "⏱️",
   "was": "Alle drei Texte, sechzig Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tbc1s1",
   "stufe": 1,
   "titel": "Du-Mail an Kollegen: schnell und klar",
   "kurz": "In zehn Minuten eine kurze Mail an die IT, die Haustechnik oder das Nachbarteam, die sofort verstanden wird",
   "ziel": "Nach diesem Block schreibst du eine kurze Mail an Kollegen mit Du: ein Betreff, der das Problem nennt, ein direkter Einstieg, eine klare Bitte mit Termin und ein freundlicher Schluss.",
   "zeichen": "💬",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Du schreibst Timo aus der IT, weil der Drucker bei euch nicht mehr richtig druckt. Welcher Betreff ist am besten?",
     "opt": [
      "Problem",
      "Drucker im 2. OG druckt seit heute früh nur leere Seiten",
      "HILFE!!! Dringend!!!"
     ],
     "loesung": 1,
     "erklaerung": "Timo sieht im Posteingang sofort, welches Gerät, wo und was los ist. So kann er die Mail richtig einordnen."
    },
    {
     "art": "wahl",
     "frage": "Du schreibst Jens aus der Haustechnik. Ihr kennt euch aus der Kantine. Wie beginnst du nach „Hallo Jens,“?",
     "opt": [
      "ich wende mich heute mit folgendem Anliegen an dich.",
      "bei uns im Besprechungsraum 3.12 ist seit gestern die Heizung aus, und morgen um neun kommt ein Kunde.",
      "wie geht es dir, und was machst du am Wochenende?"
     ],
     "loesung": 1,
     "erklaerung": "Unter Kollegen geht man gleich zur Sache: Ort, Problem, warum es eilt. Der erste Satz ist zu steif, der dritte lenkt ab."
    },
    {
     "art": "wahl",
     "frage": "Welche Bitte ist klar formuliert?",
     "opt": [
      "Vielleicht könntest du irgendwann mal schauen.",
      "Mach das bitte sofort.",
      "Kannst du bis Donnerstagmittag jemanden schicken? Ab 14 Uhr sitzt dort die Schulungsgruppe."
     ],
     "loesung": 2,
     "erklaerung": "Eine gute Bitte hat einen Termin und einen Grund. „Irgendwann“ ist zu vage, „sofort“ klingt wie ein Befehl."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz bleibt richtig in der Du-Form?",
     "opt": [
      "Könntest du mir bis Freitag sagen, ob ihr das schafft?",
      "Könnten Sie mir bis Freitag sagen, ob ihr das schafft?",
      "Könntest du mir bis Freitag sagen, ob Sie das schaffen?"
     ],
     "loesung": 0,
     "erklaerung": "„du“ für die Person, „ihr“ für ihr Team. Ein Wechsel zwischen du und Sie im selben Satz kostet Punkte."
    },
    {
     "art": "wahl",
     "frage": "Die Aufgabe nennt drei Inhaltspunkte. Was machst du damit?",
     "opt": [
      "Ich schreibe nur über die Punkte, die mir leichtfallen.",
      "Ich bearbeite jeden Punkt mit ein bis zwei Sätzen, am besten in der Reihenfolge der Aufgabe.",
      "Ich packe alle drei Punkte in einen langen Satz."
     ],
     "loesung": 1,
     "erklaerung": "Jeder fehlende Punkt kostet Punkte. Mit der Reihenfolge der Aufgabe vergisst du keinen."
    },
    {
     "art": "wahl",
     "frage": "Welcher Schluss passt in eine Mail an einen Kollegen?",
     "opt": [
      "Ich verbleibe mit vorzüglicher Hochachtung",
      "Danke dir schon mal! Ich bin heute bis 16 Uhr unter der 214 erreichbar.",
      "Ende der Nachricht."
     ],
     "loesung": 1,
     "erklaerung": "Ein kurzer Dank und ein Weg, dich zu erreichen. Danach nur noch „Viele Grüße“ und dein Vorname."
    },
    {
     "art": "wahl",
     "frage": "Für Teil 1 hast du etwa zehn Minuten. Wie lang sollte die Mail sein?",
     "opt": [
      "Eine Wortzahl ist nicht vorgegeben. Rund 70 bis 100 Wörter passen gut, wenn alle drei Punkte drin sind.",
      "Mindestens 250 Wörter, sonst gibt es keine Punkte.",
      "Zwei Sätze reichen, Kollegen lesen sowieso nicht viel."
     ],
     "loesung": 0,
     "erklaerung": "Kurz, aber vollständig. Die Zeit, die du hier sparst, brauchst du für die Diskussionsvorlage in Teil 3."
    },
    {
     "art": "wahl",
     "frage": "Das Nachbarteam hat seit Montag euren Beamer. Welcher Satz ist locker, aber deutlich?",
     "opt": [
      "Ihr habt schon wieder unseren Beamer! So geht das nicht.",
      "Es wäre unter Umständen eventuell möglich, dass der Beamer vielleicht zurückkommt.",
      "Ich glaube, unser Beamer steht noch bei euch. Wir brauchen ihn morgen um zehn, könnt ihr ihn bis dahin rüberbringen?"
     ],
     "loesung": 2,
     "erklaerung": "Freundlich, ohne Vorwurf, und trotzdem mit Uhrzeit. Der erste Satz klingt nach Streit, der zweite sagt gar nichts."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Bitte an die IT.",
     "teile": [
      "Kannst du",
      "bis Donnerstag",
      "kurz",
      "nach dem Drucker",
      "schauen?"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4
     ],
     "erklaerung": "Bei der Ja/Nein-Frage steht das Verb vorn, „schauen“ kommt ans Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit Grund.",
     "teile": [
      "Weil",
      "morgen",
      "Kundenbesuch ist,",
      "brauchen",
      "wir",
      "den Raum",
      "ab neun."
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
     "erklaerung": "Der Nebensatz mit „weil“ steht vorn, deshalb kommt im Hauptsatz das Verb „brauchen“ direkt danach."
    }
   ]
  },
  {
   "id": "tbc1s2",
   "stufe": 1,
   "titel": "Formelle Antwort nach außen: Termine, Bedingungen, Kosten",
   "kurz": "Bewerber, Kunden, Lieferanten und Referenten wollen genaue Angaben, keine schönen Worte",
   "ziel": "Nach diesem Block antwortest du Bewerbern, Kunden, Lieferanten und Referenten in der Sie-Form mit genauen Terminen, klaren Bedingungen, Kosten und einer Frist.",
   "zeichen": "✉️",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Du lädst einen Bewerber zum Gespräch ein. Welcher Betreff passt?",
     "opt": [
      "Einladung",
      "AW: Ihre Bewerbung als Industriemechaniker, Kennziffer 24-117",
      "Bewerbung"
     ],
     "loesung": 1,
     "erklaerung": "Mit „AW:“ und der Kennziffer sieht der Bewerber sofort, dass es um seine Bewerbung geht."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz lädt richtig zum Vorstellungsgespräch ein?",
     "opt": [
      "Wir würden uns freuen, Sie bald kennenzulernen.",
      "Kommen Sie doch mal vorbei.",
      "Wir laden Sie zu einem Vorstellungsgespräch am Dienstag, dem 24. November, um 10 Uhr in unser Werk in der Gutenbergstraße 12 ein."
     ],
     "loesung": 2,
     "erklaerung": "Tag, Datum, Uhrzeit und Ort gehören in einen Satz. Ohne Termin kann der Bewerber nicht planen."
    },
    {
     "art": "wahl",
     "frage": "Wie nennst du die Ansprechpartnerin vor Ort?",
     "opt": [
      "Bitte melden Sie sich am Empfang. Frau Okafor aus der Personalabteilung holt Sie dort ab.",
      "Irgendjemand wird Sie schon finden.",
      "Fragen Sie sich einfach durch."
     ],
     "loesung": 0,
     "erklaerung": "Name, Abteilung und Treffpunkt nehmen der Person die Unsicherheit am ersten Besuch."
    },
    {
     "art": "wahl",
     "frage": "Ein Kunde fragt nach einer Expresslieferung. Wie nennst du Bedingung und Kosten?",
     "opt": [
      "Express geht, kostet aber extra.",
      "Eine Expresslieferung ist möglich, wenn Ihre Bestellung bis Donnerstag, 12 Uhr, bei uns eingeht. Dafür berechnen wir einmalig 45 Euro netto.",
      "Das ist leider schwierig."
     ],
     "loesung": 1,
     "erklaerung": "Bedingung mit „wenn“ plus genauer Betrag: So muss der Kunde nicht noch einmal nachfragen."
    },
    {
     "art": "wahl",
     "frage": "Du musst einem Kunden eine Preiserhöhung mitteilen. Welche Version ist am besten?",
     "opt": [
      "Leider müssen wir unsere Preise erhöhen. Wir bitten um Ihr Verständnis.",
      "Die Preise steigen, das ist im Moment überall so.",
      "Ab dem 1. Januar kostet das Gehäuse 4,10 Euro statt 3,80 Euro. Grund ist der höhere Aluminiumpreis. Bestellungen bis zum 31. Dezember berechnen wir noch zum alten Preis."
     ],
     "loesung": 2,
     "erklaerung": "Alter und neuer Preis, ein sachlicher Grund und ein kleines Entgegenkommen machen die Nachricht annehmbar."
    },
    {
     "art": "wahl",
     "frage": "Ein Lieferant hat beschädigte Teile geliefert. Wie setzt du eine Frist?",
     "opt": [
      "Bitte schicken Sie uns bis spätestens 20. November Ersatz für die 40 beschädigten Gehäuse.",
      "Bitte schicken Sie irgendwann Ersatz.",
      "Wir erwarten sofort neue Ware, sonst schalten wir unseren Anwalt ein."
     ],
     "loesung": 0,
     "erklaerung": "Bestimmt, aber sachlich: Datum und Menge. Drohungen gehören nicht in die erste Reklamation."
    },
    {
     "art": "wahl",
     "frage": "Ein Kunde möchte 15 Prozent Rabatt. Das geht nicht. Wie sagst du es?",
     "opt": [
      "Nein, das machen wir nicht.",
      "Einen Rabatt von 15 Prozent können wir Ihnen leider nicht geben. Ab einer Abnahme von 500 Stück sind aber 5 Prozent möglich.",
      "Rabatte gibt es bei uns grundsätzlich nicht, das ist Firmenpolitik."
     ],
     "loesung": 1,
     "erklaerung": "Eine Absage mit Gegenangebot hält den Kunden im Gespräch. „Leider“ macht das Nein höflich."
    },
    {
     "art": "wahl",
     "frage": "Eine Referentin fragt nach Honorar und Fahrtkosten. Welche Antwort ist vollständig?",
     "opt": [
      "Darüber reden wir dann vor Ort.",
      "Wir zahlen natürlich etwas.",
      "Wir zahlen ein Honorar von 400 Euro. Ihre Fahrtkosten erstatten wir gegen Beleg, bei Anreise mit der Bahn in der 2. Klasse."
     ],
     "loesung": 2,
     "erklaerung": "Geld klärt man vorher und schriftlich, mit Betrag und Regel für die Erstattung."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Bitte um Bestätigung.",
     "teile": [
      "Bitte bestätigen Sie",
      "uns",
      "den Termin",
      "bis",
      "Freitag,",
      "den 20. November."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "Am Ende einer formellen Antwort steht oft eine Bitte mit Frist. So weißt du, bis wann du planen kannst."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Schlusssatz.",
     "teile": [
      "Für Rückfragen",
      "erreichen",
      "Sie",
      "mich",
      "unter",
      "0711 39 48 220."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "„Für Rückfragen“ steht auf Position eins, das Verb „erreichen“ folgt direkt danach."
    }
   ]
  },
  {
   "id": "tbc1s3",
   "stufe": 2,
   "titel": "Diskussionsvorlage aufbauen: Ausgangslage, zwei Möglichkeiten, Empfehlung",
   "kurz": "Eine Vorlage für die Geschäftsleitung hat eine feste Ordnung. Wer sie kennt, schreibt schneller",
   "ziel": "Nach diesem Block gliederst du eine innerbetriebliche Diskussionsvorlage in Ausgangslage, Möglichkeit 1, Möglichkeit 2 und Empfehlung und weißt, was in jeden Abschnitt gehört.",
   "zeichen": "📋",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Was gehört in die Ausgangslage?",
     "opt": [
      "Das Problem in zwei, drei Sätzen mit Zahlen: Was läuft nicht, seit wann, was kostet es?",
      "Deine Meinung über die Geschäftsleitung",
      "Eine Begrüßung aller Leser"
     ],
     "loesung": 0,
     "erklaerung": "Die Ausgangslage zeigt, warum überhaupt entschieden werden muss. Zahlen machen das Problem greifbar."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz eignet sich für die Ausgangslage?",
     "opt": [
      "Die Kantine ist einfach schlecht organisiert.",
      "Seit März bleiben in der Kantine im Schnitt 40 Essen pro Tag übrig, das sind rund 900 Euro im Monat.",
      "Viele Leute sagen, dass man da was machen müsste."
     ],
     "loesung": 1,
     "erklaerung": "Seit wann, wie viel, was kostet es: Damit kann die Leitung das Problem einschätzen."
    },
    {
     "art": "wahl",
     "frage": "Wie stellst du eine Möglichkeit dar?",
     "opt": [
      "Möglichkeit 1 ist natürlich die beste.",
      "Möglichkeit 1 ist teuer und bringt nichts.",
      "Möglichkeit 1 sieht vor, ein neues Kassensystem einzuführen. Die Kosten liegen bei etwa 12.000 Euro, die Umstellung dauert drei Monate."
     ],
     "loesung": 2,
     "erklaerung": "Bei den Möglichkeiten bleibst du neutral: was, wie teuer, wie lange. Deine Bewertung kommt erst in der Empfehlung."
    },
    {
     "art": "wahl",
     "frage": "Nennst du auch Nachteile der Möglichkeit, die du empfiehlst?",
     "opt": [
      "Nein, sonst wirkt die Empfehlung schwach.",
      "Ja, kurz. Wer die Nachteile kennt und trotzdem begründet empfiehlt, wirkt glaubwürdiger.",
      "Nur wenn die Aufgabe es ausdrücklich verlangt."
     ],
     "loesung": 1,
     "erklaerung": "Die Leitung kennt die Nachteile meist ohnehin. Wenn du sie selbst nennst und einordnest, überzeugst du mehr."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz leitet die Empfehlung gut ein?",
     "opt": [
      "Ich empfehle Möglichkeit 2, weil sie das Problem dauerhaft löst und nach zwei Jahren günstiger ist.",
      "Vielleicht könnte man eventuell Möglichkeit 2 nehmen.",
      "Möglichkeit 2!!!"
     ],
     "loesung": 0,
     "erklaerung": "Eine Empfehlung ist eindeutig und hat sofort einen Grund. Zu viel Vorsicht klingt unsicher."
    },
    {
     "art": "wahl",
     "frage": "Welche Begründung ist am stärksten?",
     "opt": [
      "Möglichkeit 2 ist einfach besser.",
      "Ich persönlich finde Möglichkeit 2 sympathischer.",
      "Die Anschaffung ist zwar teurer, durch die geringeren Wartungskosten hat sie sich aber nach etwa zwei Jahren bezahlt gemacht."
     ],
     "loesung": 2,
     "erklaerung": "Ein guter Vorteil ist messbar: Kosten, Zeit, Qualität, Sicherheit. Geschmack ist kein Argument."
    },
    {
     "art": "wahl",
     "frage": "Wie sieht der Rahmen einer Diskussionsvorlage aus?",
     "opt": [
      "„Liebe Kollegen,“ am Anfang und „Liebe Grüße“ am Ende",
      "Ein Titel, kurze Zwischenüberschriften, am Ende Name, Abteilung und Datum",
      "„Sehr geehrte Damen und Herren,“ und „Hochachtungsvoll“"
     ],
     "loesung": 1,
     "erklaerung": "Eine Vorlage ist kein Brief. Titel und Zwischenüberschriften helfen der Leitung, sich schnell zurechtzufinden."
    },
    {
     "art": "wahl",
     "frage": "Du hast für Teil 3 etwa 35 Minuten. Wie teilst du sie ein?",
     "opt": [
      "Ich fange sofort an und schreibe einfach drauflos.",
      "Ich schreibe zuerst alles vor und schreibe es dann noch einmal ab.",
      "Fünf Minuten Stichpunkte zu beiden Möglichkeiten, 25 Minuten schreiben, fünf Minuten Fehler suchen."
     ],
     "loesung": 2,
     "erklaerung": "Mit Stichpunkten weißt du vorher, wohin die Empfehlung geht. Zum Abschreiben reicht die Zeit nicht."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz für die Empfehlung.",
     "teile": [
      "Aus diesen Gründen",
      "empfehle",
      "ich,",
      "Möglichkeit 2",
      "ab Januar",
      "umzusetzen."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "„Aus diesen Gründen“ steht vorn, also folgt das Verb. Der Infinitiv mit „zu“ steht am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz zu einem Vorteil.",
     "teile": [
      "Für Möglichkeit 1",
      "spricht,",
      "dass",
      "sie",
      "sofort",
      "umgesetzt werden kann."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "„Für … spricht, dass …“ ist eine typische Formel zum Abwägen. Im dass-Satz steht das Verb am Ende."
    }
   ]
  },
  {
   "id": "tbc1s4",
   "stufe": 2,
   "titel": "Abwägen auf C1: Nominalstil und Konnektoren",
   "kurz": "„zwar … jedoch“, „demgegenüber“, „insofern“ und ein paar Nomen statt Nebensätzen heben deine Vorlage auf C1",
   "ziel": "Nach diesem Block wägst du zwei Möglichkeiten sachlich gegeneinander ab, nutzt Konnektoren wie „zwar … jedoch“, „demgegenüber“ und „insofern“ und formst Nebensätze in Nominalstil um.",
   "zeichen": "⚖️",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz ist die Nominalform von „Wenn wir das Lager erweitern, entstehen Kosten von rund 80.000 Euro.“?",
     "opt": [
      "Bei einer Erweiterung des Lagers entstehen Kosten von rund 80.000 Euro.",
      "Das Lager wird erweitert und das kostet Geld.",
      "Erweiterung Lager 80.000."
     ],
     "loesung": 0,
     "erklaerung": "„wenn wir erweitern“ wird zu „bei einer Erweiterung“. Danach folgt ein Genitiv: „des Lagers“."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz nutzt „zwar … jedoch“ richtig?",
     "opt": [
      "Zwar ist die externe Lösung günstiger, weil sie weniger kostet.",
      "Zwar ist die externe Lösung günstiger, jedoch geht damit Fachwissen im eigenen Haus verloren.",
      "Die externe Lösung ist zwar, jedoch günstiger."
     ],
     "loesung": 1,
     "erklaerung": "Mit „zwar“ gibst du einen Vorteil zu, mit „jedoch“ kommt das Gegenargument, das dir wichtiger ist."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz verwendet „demgegenüber“ richtig?",
     "opt": [
      "Demgegenüber ich finde das gut.",
      "Wir machen demgegenüber eine Pause.",
      "Möglichkeit 1 kostet einmalig 20.000 Euro. Demgegenüber stehen Einsparungen von rund 8.000 Euro im Jahr."
     ],
     "loesung": 2,
     "erklaerung": "„Demgegenüber“ stellt zwei Seiten gegeneinander. Es steht auf Position eins, danach folgt direkt das Verb."
    },
    {
     "art": "wahl",
     "frage": "Wo passt „insofern“?",
     "opt": [
      "Die Software läuft bereits in zwei Filialen ohne Probleme. Insofern ist das Risiko bei der Einführung überschaubar.",
      "Insofern ich heute Urlaub habe.",
      "Die Software insofern läuft."
     ],
     "loesung": 0,
     "erklaerung": "„Insofern“ zieht eine Folgerung aus dem Satz davor, ähnlich wie „deshalb“, aber gehobener."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung ist sachlich genug für eine Vorlage?",
     "opt": [
      "Diese Lösung ist eine Katastrophe.",
      "Diese Lösung birgt das Risiko, dass sich die Lieferzeiten im Winter verlängern.",
      "Diese Lösung finde ich total daneben."
     ],
     "loesung": 1,
     "erklaerung": "In einer Vorlage beschreibst du Risiken nüchtern und konkret. Starke Wertungen wirken unprofessionell."
    },
    {
     "art": "wahl",
     "frage": "Wie lautet die Nominalform von „Die Kosten sinken, weil weniger Ausschuss entsteht.“?",
     "opt": [
      "Aufgrund der geringere Ausschuss sinken die Kosten.",
      "Aufgrund des geringeren Ausschusses sinken die Kosten.",
      "Aufgrund dem geringeren Ausschuss sinken die Kosten."
     ],
     "loesung": 1,
     "erklaerung": "„Aufgrund“ verlangt den Genitiv: „des geringeren Ausschusses“. Mit dem Dativ klingt es nach Umgangssprache."
    },
    {
     "art": "wahl",
     "frage": "„Möglichkeit 1 ist schneller umsetzbar, Möglichkeit 2 langfristig günstiger. Letztere empfehle ich.“ Was empfiehlt die Person?",
     "opt": [
      "Möglichkeit 1",
      "Möglichkeit 2",
      "Beide Möglichkeiten"
     ],
     "loesung": 1,
     "erklaerung": "„Letztere“ meint das zuletzt Genannte, „Erstere“ das zuerst Genannte. So vermeidest du Wiederholungen."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz wägt am besten ab?",
     "opt": [
      "Beide Möglichkeiten haben Vor- und Nachteile.",
      "Möglichkeit 2 ist gut, weil sie gut ist.",
      "Die höheren Anfangskosten fallen kaum ins Gewicht, da die Lieferzeit um zwei Tage sinkt und wir damit die Vorgaben unserer Großkunden erfüllen."
     ],
     "loesung": 2,
     "erklaerung": "Abwägen heißt: Nachteil nennen, dann zeigen, warum der Vorteil schwerer wiegt."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „zwar … jedoch“.",
     "teile": [
      "Zwar",
      "ist",
      "die Schulung",
      "zeitaufwendig,",
      "jedoch",
      "lohnt",
      "sie sich",
      "langfristig."
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
     "erklaerung": "Nach „zwar“ auf Position eins folgt das Verb. Nach „jedoch“ am Satzanfang folgt ebenfalls direkt das Verb."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz im Nominalstil.",
     "teile": [
      "Angesichts",
      "der steigenden",
      "Energiekosten",
      "ist",
      "eine schnelle",
      "Lösung",
      "notwendig."
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
     "erklaerung": "„Angesichts“ steht mit Genitiv und ersetzt einen ganzen Nebensatz wie „weil die Energiekosten steigen“."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "mitteilung",
   "name": "E-Mail an Kollegen",
   "kurz": "Informell, etwa zehn Minuten",
   "was": "Eine kurze E-Mail an eine Kollegin oder einen Kollegen, zum Beispiel an die IT oder die Haustechnik. Drei Punkte, dazu Betreff, Anrede, Einleitung und Schluss.",
   "tipp": "Kurz heißt nicht unvollständig: Was ist los, warum eilt es, was brauchst du bis wann?",
   "zeichen": "💬",
   "farbe": "turq",
   "punkte": 8,
   "runden": [
    {
     "id": "tbc1s1r1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "id": "bc1a1",
       "typ": "informell",
       "situation": "Sie arbeiten in der Buchhaltung der Hollmann Haustechnik GmbH in Kassel. Gestern haben Sie einen neuen Laptop bekommen. Das Buchhaltungsprogramm startet darauf nicht. Am Freitag ist der Monatsabschluss. Schreiben Sie Ihrem Kollegen Timo aus der IT.",
       "sorte": "email",
       "an": "Timo, IT",
       "betreff": "Neuer Laptop, Buchhaltungsprogramm startet nicht",
       "punkte": [
        {
         "nr": 1,
         "was": "Problem",
         "hinweis": "Beschreiben Sie genau, was passiert, wenn Sie das Programm öffnen."
        },
        {
         "nr": 2,
         "was": "Dringlichkeit",
         "hinweis": "Erklären Sie, warum Sie das Programm bald brauchen."
        },
        {
         "nr": 3,
         "was": "Termin",
         "hinweis": "Schlagen Sie vor, wann und wie Timo helfen kann."
        }
       ],
       "muster": "Betreff: Neuer Laptop, Buchhaltungsprogramm startet nicht\nHallo Timo,\ndanke noch mal für den neuen Laptop, der läuft richtig schnell. Nur das Buchhaltungsprogramm macht Ärger: Wenn ich es öffne, kommt die Meldung „Lizenz nicht gefunden“, und nach ein paar Sekunden schließt es sich wieder.\nDas ist gerade ungünstig, weil am Freitag der Monatsabschluss fällig ist und ich bis dahin noch rund 60 Eingangsrechnungen buchen muss.\nKannst du morgen früh kurz vorbeikommen? Ich bin ab halb acht da, Zimmer 2.14. Wenn das nicht klappt, geht es bestimmt auch per Fernwartung.\nViele Grüße\nSandra",
       "hilfen": [
        "danke noch mal für …",
        "Nur … macht Ärger: Wenn ich …, kommt die Meldung …",
        "Das ist gerade ungünstig, weil …",
        "Kannst du morgen früh kurz vorbeikommen?",
        "Wenn das nicht klappt, geht es bestimmt auch …"
       ],
       "erklaerung": "Die Fehlermeldung im Wortlaut hilft der IT mehr als „geht nicht“. Grund und Frist zeigen, warum es eilt, ohne zu drängeln.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "III Korrektheit (Anteil)",
         "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "IV Wortschatz (Anteil)",
         "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 8,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 70,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
      },
      {
       "id": "bc1a2",
       "typ": "informell",
       "situation": "Sie leiten ein Team im Kundenservice einer Versicherung in Münster. Im Großraumbüro im dritten Stock bläst die Klimaanlage seit Montag kalte Luft. Am Fenster sind es morgens nur 18 Grad. Schreiben Sie Ihrem Kollegen Jens aus der Haustechnik.",
       "sorte": "email",
       "an": "Jens, Haustechnik",
       "betreff": "Klimaanlage im Großraumbüro, 3. OG",
       "punkte": [
        {
         "nr": 1,
         "was": "Problem",
         "hinweis": "Beschreiben Sie, was mit der Klimaanlage los ist und seit wann."
        },
        {
         "nr": 2,
         "was": "Folgen",
         "hinweis": "Erklären Sie, was das für Ihr Team bedeutet."
        },
        {
         "nr": 3,
         "was": "Bitte",
         "hinweis": "Bitten Sie um Hilfe und nennen Sie einen Zeitraum."
        }
       ],
       "muster": "Betreff: Klimaanlage im Großraumbüro, 3. OG\nHallo Jens,\nbei uns im Großraumbüro im dritten Stock bläst die Klimaanlage seit Montag ununterbrochen kalte Luft, vor allem an den Plätzen am Fenster. Heute früh hatten wir dort 18 Grad.\nZwei Kollegen sitzen schon mit Jacke am Telefon, und eine Kollegin hat sich gestern mit Halsschmerzen krankgemeldet. Auf Dauer geht das so nicht.\nKönntest du oder jemand aus deinem Team bis Donnerstag mal draufschauen? Ich bin den ganzen Tag im Büro, ruf einfach unter der 318 an.\nDanke dir!\nPetra",
       "hilfen": [
        "bei uns im … läuft seit Montag …",
        "Heute früh hatten wir dort …",
        "Auf Dauer geht das so nicht.",
        "Könntest du … bis Donnerstag mal draufschauen?",
        "ruf einfach unter der … an."
       ],
       "erklaerung": "Ort, Temperatur und die Folgen für das Team machen klar, dass es mehr als eine Kleinigkeit ist. Die Bitte bleibt trotzdem freundlich.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "III Korrektheit (Anteil)",
         "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "IV Wortschatz (Anteil)",
         "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 8,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 70,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
      }
     ]
    },
    {
     "id": "tbc1s1r2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "id": "bc1a3",
       "typ": "informell",
       "situation": "Sie arbeiten im Vertriebsinnendienst eines Pumpenherstellers in Schweinfurt. Ihr Kollege Lukas aus dem Marketing bereitet den Messestand vor und braucht Verkaufszahlen. Die Zahlen für Oktober sind noch nicht vollständig. Antworten Sie Lukas.",
       "eingang": {
        "von": "Lukas Brenner, Marketing",
        "betreff": "Zahlen für die Messe in Nürnberg",
        "text": "Hi,\nfür unseren Stand in Nürnberg bauen wir gerade die Präsentation. Könntest du mir die Verkaufszahlen für die Pumpenreihe HX schicken, am besten nach Ländern? Ich bräuchte sie bis Mittwoch, weil die Druckerei am Donnerstag die Plakate macht.\nDanke und Gruß\nLukas"
       },
       "sorte": "email",
       "an": "Lukas Brenner, Marketing",
       "betreff": "AW: Zahlen für die Messe in Nürnberg",
       "punkte": [
        {
         "nr": 1,
         "was": "Zusage",
         "hinweis": "Sagen Sie, welche Zahlen Sie schicken können."
        },
        {
         "nr": 2,
         "was": "Einschränkung",
         "hinweis": "Erklären Sie das Problem mit den Oktoberzahlen."
        },
        {
         "nr": 3,
         "was": "Vorschlag",
         "hinweis": "Schlagen Sie vor, wie Sie die Zahlen vor dem Druck abstimmen."
        }
       ],
       "muster": "Betreff: AW: Zahlen für die Messe in Nürnberg\nHallo Lukas,\nklar, die Zahlen für die HX-Reihe kann ich dir geben. Ich schicke dir eine Tabelle mit Stückzahlen und Umsatz für Deutschland, Österreich, Polen und Tschechien, jeweils von Januar bis September.\nDer Oktober ist leider noch nicht abgeschlossen, weil zwei große Aufträge aus Polen erst nächste Woche gebucht werden. Für die Plakate würde ich deshalb nur bis September nehmen.\nWollen wir morgen um elf kurz telefonieren? Dann gehen wir die Tabelle zusammen durch, bevor sie zur Druckerei geht.\nViele Grüße\nAyşe",
       "hilfen": [
        "klar, … kann ich dir geben.",
        "Ich schicke dir eine Tabelle mit …",
        "… ist leider noch nicht abgeschlossen, weil …",
        "Für … würde ich deshalb nur … nehmen.",
        "Wollen wir morgen um … kurz telefonieren?"
       ],
       "erklaerung": "Das Muster sagt zu, nennt die Grenze offen und macht einen Vorschlag. So landen keine falschen Zahlen auf einem Plakat.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "III Korrektheit (Anteil)",
         "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "IV Wortschatz (Anteil)",
         "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 8,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 70,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
      },
      {
       "id": "bc1a4",
       "typ": "informell",
       "situation": "Sie leiten den Wareneingang in einem Logistikzentrum. Am Montag fängt ein neuer Kollege bei Ihnen an. Seine Zugangskarte ist noch nicht da, und für die Sicherheitsschuhe fehlt seine Schuhgröße. Schreiben Sie Ihrer Kollegin Nadine aus der Personalabteilung.",
       "sorte": "email",
       "an": "Nadine, Personalabteilung",
       "betreff": "Start von Marek Kowalczyk am Montag",
       "punkte": [
        {
         "nr": 1,
         "was": "Was fehlt",
         "hinweis": "Nennen Sie, was für den ersten Tag noch fehlt, und bitten Sie um Hilfe."
        },
        {
         "nr": 2,
         "was": "Erster Tag",
         "hinweis": "Sagen Sie, wann und wo Sie den neuen Kollegen abholen."
        },
        {
         "nr": 3,
         "was": "Unterweisung",
         "hinweis": "Fragen Sie nach dem Termin für die Sicherheitsunterweisung."
        }
       ],
       "muster": "Betreff: Start von Marek Kowalczyk am Montag\nHallo Nadine,\nam Montag fängt ja Marek Kowalczyk bei uns im Wareneingang an. Seine Zugangskarte ist noch nicht bei mir angekommen, und für die Sicherheitsschuhe fehlt mir seine Schuhgröße. Kannst du beides für mich klären?\nAm ersten Tag hole ich ihn um sieben an der Pforte ab, das kannst du ihm gern so schreiben.\nUnd noch eine Frage: Ist die Sicherheitsunterweisung wieder dienstags um neun bei Herrn Albers? Dann plane ich ihn dafür ein.\nDanke dir und viele Grüße\nStefan",
       "hilfen": [
        "am Montag fängt ja … bei uns an.",
        "… ist noch nicht bei mir angekommen.",
        "Kannst du beides für mich klären?",
        "das kannst du ihm gern so schreiben.",
        "Und noch eine Frage: …"
       ],
       "erklaerung": "Drei Punkte, drei kurze Absätze. Nadine weiß sofort, was sie besorgen und was sie dem neuen Kollegen mitteilen soll.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "III Korrektheit (Anteil)",
         "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "IV Wortschatz (Anteil)",
         "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
         "stufen": [
          {
           "w": 2,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 1,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 0,
           "t": "C",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 8,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 70,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "mitteilung",
   "name": "Formelle Antwort",
   "kurz": "Nach außen, etwa fünfzehn Minuten",
   "was": "Eine formelle Antwort an eine Bewerberin, einen Kunden oder einen Lieferanten. Alle Punkte mit konkreten Angaben: Termin, Ansprechpartner, Frist, Kosten.",
   "tipp": "Erst Dank und Bezug, dann die Punkte in einer klaren Reihenfolge, am Ende die Bitte um Rückmeldung.",
   "zeichen": "💼",
   "farbe": "gold",
   "punkte": 14,
   "runden": [
    {
     "id": "tbc1s2r1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "id": "bc1b1",
       "typ": "formell",
       "situation": "Sie arbeiten in der Personalabteilung der Ostermann Logistik GmbH in Dortmund. Frau Natalia Weber hat sich vor drei Wochen als Disponentin beworben und fragt nach. Sie möchten sie einladen: Dienstag, 24. November, 10 Uhr, Niederlassung Kanalstraße 40. Am Gespräch nehmen der Niederlassungsleiter Herr Kaya und Sie teil. Antworten Sie Frau Weber.",
       "eingang": {
        "von": "Natalia Weber",
        "betreff": "Bewerbung als Disponentin, Kennziffer DO-318",
        "text": "Sehr geehrte Damen und Herren,\nvor drei Wochen habe ich mich bei Ihnen als Disponentin im Nahverkehr beworben. Bisher habe ich keine Rückmeldung bekommen. Ist meine Bewerbung angekommen, und wissen Sie schon, wie es weitergeht?\nBei meinem jetzigen Arbeitgeber habe ich eine Kündigungsfrist von vier Wochen zum Monatsende.\nMit freundlichen Grüßen\nNatalia Weber"
       },
       "sorte": "email",
       "an": "Frau Natalia Weber",
       "betreff": "AW: Bewerbung als Disponentin, Kennziffer DO-318",
       "punkte": [
        {
         "nr": 1,
         "was": "Eingang und Entschuldigung",
         "hinweis": "Bestätigen Sie den Eingang der Bewerbung und entschuldigen Sie die lange Wartezeit."
        },
        {
         "nr": 2,
         "was": "Einladung",
         "hinweis": "Laden Sie Frau Weber mit Termin und Ort ein."
        },
        {
         "nr": 3,
         "was": "Ablauf",
         "hinweis": "Erklären Sie, wer dabei ist, wie lange es dauert und was sie mitbringen soll."
        },
        {
         "nr": 4,
         "was": "Bestätigung",
         "hinweis": "Gehen Sie auf die Kündigungsfrist ein und bitten Sie um Bestätigung bis zu einer Frist."
        }
       ],
       "muster": "Betreff: AW: Bewerbung als Disponentin, Kennziffer DO-318\nSehr geehrte Frau Weber,\nvielen Dank für Ihre Nachfrage. Ihre Bewerbung ist bei uns angekommen, und es tut mir leid, dass Sie so lange auf eine Antwort warten mussten. Auf die Stelle haben sich sehr viele Personen beworben.\nIhr Profil passt gut zu uns, deshalb laden wir Sie zu einem Vorstellungsgespräch ein: am Dienstag, dem 24. November, um 10 Uhr in unserer Niederlassung in der Kanalstraße 40 in Dortmund. Bitte melden Sie sich an der Pforte, ich hole Sie dort ab.\nAm Gespräch nehmen Herr Kaya, unser Niederlassungsleiter, und ich teil. Wir planen etwa eine Stunde ein, danach zeigen wir Ihnen die Disposition. Bitte bringen Sie Ihre Zeugnisse im Original mit.\nIhre Kündigungsfrist ist für uns kein Problem, ein Start am 1. Januar wäre gut möglich.\nBitte bestätigen Sie mir den Termin bis Freitag, den 20. November.\nMit freundlichen Grüßen\nMelanie Hoffmann\nPersonalabteilung, Ostermann Logistik GmbH",
       "hilfen": [
        "Ihre Bewerbung ist bei uns angekommen, und es tut mir leid, dass …",
        "deshalb laden wir Sie zu einem Vorstellungsgespräch ein: am …",
        "Bitte melden Sie sich an der Pforte, ich hole Sie dort ab.",
        "Am Gespräch nehmen … und ich teil.",
        "Bitte bringen Sie … mit.",
        "Bitte bestätigen Sie mir den Termin bis …"
       ],
       "erklaerung": "Die Bewerberin bekommt alles, was sie zum Planen braucht: Termin, Ort, Personen, Dauer, Unterlagen und eine Frist. Auch ihre Frage zur Kündigungsfrist geht nicht verloren.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 4,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 3,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 2,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 1,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "E",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
         "stufen": [
          {
           "w": 4,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 3,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 2,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 1,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "E",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "III Korrektheit (Anteil)",
         "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 3,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 2,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 1,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "IV Wortschatz (Anteil)",
         "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
         "stufen": [
          {
           "w": 3,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 2,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 1,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 14,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 130,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
      },
      {
       "id": "bc1b2",
       "typ": "formell",
       "situation": "Sie arbeiten in der Auftragsabwicklung der Feldmann Kunststofftechnik in Lüdenscheid. Ein Kunde fragt, ob sein Liefertermin am 27. November sicher ist. Wegen eines Schadens an einem Spritzgusswerkzeug können Sie bis dahin nur 5.000 von 12.000 Griffen liefern. Die restlichen 7.000 sind am 9. Dezember fertig. Antworten Sie Herrn Jansen.",
       "eingang": {
        "von": "Henrik Jansen, Einkauf, Jansen Küchenmöbel",
        "betreff": "Auftrag 77-4120, Griffe Modell Linea",
        "text": "Guten Tag,\nunser Auftrag über 12.000 Griffe „Linea“ in Schwarz matt ist laut Auftragsbestätigung für den 27. November geplant. Können Sie diesen Termin sicher halten? Wir starten am 1. Dezember mit einer neuen Küchenserie und haben nur noch Griffe für etwa drei Produktionstage.\nBitte geben Sie mir kurz Bescheid.\nMit freundlichen Grüßen\nHenrik Jansen"
       },
       "sorte": "email",
       "an": "Herr Henrik Jansen, Jansen Küchenmöbel",
       "betreff": "AW: Auftrag 77-4120, Griffe Modell Linea",
       "punkte": [
        {
         "nr": 1,
         "was": "Verzögerung",
         "hinweis": "Teilen Sie mit, dass der Termin nicht ganz zu halten ist, und nennen Sie den Grund."
        },
        {
         "nr": 2,
         "was": "Teillieferung",
         "hinweis": "Bieten Sie eine Teillieferung mit genauen Mengen und Terminen an."
        },
        {
         "nr": 3,
         "was": "Kosten",
         "hinweis": "Sagen Sie, wer die zusätzlichen Frachtkosten trägt."
        },
        {
         "nr": 4,
         "was": "Alternative",
         "hinweis": "Machen Sie ein zusätzliches Angebot und nennen Sie eine Frist für die Rückmeldung."
        }
       ],
       "muster": "Betreff: AW: Auftrag 77-4120, Griffe Modell Linea\nSehr geehrter Herr Jansen,\nvielen Dank für Ihre Nachfrage. Leider können wir den Termin am 27. November nicht vollständig halten. Bei einem unserer Spritzgusswerkzeuge ist letzte Woche ein Formeinsatz gerissen. Das Ersatzteil ist bestellt, kommt aber erst Ende November.\nBis zum 27. November liefern wir Ihnen 5.000 Griffe. Damit können Sie mit der neuen Serie wie geplant starten. Die restlichen 7.000 Stück schicken wir Ihnen am 9. Dezember.\nDie Frachtkosten für die zweite Lieferung übernehmen wir selbstverständlich.\nFalls Sie einen Teil der Griffe noch früher brauchen, können wir 2.000 Stück bereits am 20. November per Express schicken, ebenfalls ohne Aufpreis. Geben Sie mir dazu bitte bis Montag Bescheid.\nIch weiß, dass das für Ihre Planung nicht ideal ist. Sie erreichen mich direkt unter 02351 88 47 13.\nMit freundlichen Grüßen\nCarina Löffler\nAuftragsabwicklung, Feldmann Kunststofftechnik",
       "hilfen": [
        "Leider können wir den Termin am … nicht vollständig halten.",
        "Bei … ist letzte Woche … gerissen.",
        "Bis zum … liefern wir Ihnen …",
        "Die Frachtkosten … übernehmen wir selbstverständlich.",
        "Falls Sie … früher brauchen, können wir …",
        "Geben Sie mir dazu bitte bis … Bescheid."
       ],
       "erklaerung": "Schlechte Nachrichten kommen früh und mit Grund. Danach zeigt das Muster sofort, was trotzdem geht, und nimmt dem Kunden die Zusatzkosten ab.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 4,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 3,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 2,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 1,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "E",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
         "stufen": [
          {
           "w": 4,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 3,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 2,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 1,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "E",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "III Korrektheit (Anteil)",
         "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 3,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 2,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 1,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "IV Wortschatz (Anteil)",
         "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
         "stufen": [
          {
           "w": 3,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 2,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 1,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 14,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 130,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
      }
     ]
    },
    {
     "id": "tbc1s2r2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "id": "bc1b3",
       "typ": "formell",
       "situation": "Sie arbeiten bei Kessler Heizung und Sanitär in Bremen. Eine Hausverwaltung möchte die Wartung von 14 Gasheizungen für 2027 wieder bei Ihnen beauftragen. Ab Januar kostet die Wartung 209 Euro netto pro Anlage statt 189 Euro. Wer bis zum 15. Dezember bestätigt, zahlt 2027 einmalig 199 Euro. Antworten Sie Frau Schoppe.",
       "eingang": {
        "von": "Birgit Schoppe, Hausverwaltung Schoppe",
        "betreff": "Wartung Gasheizungen 2027",
        "text": "Sehr geehrter Herr Kessler,\nwie jedes Jahr möchten wir die Wartung der Gasheizungen in unseren 14 Mehrfamilienhäusern in Findorff bei Ihnen beauftragen. Bleibt es bei den Konditionen von diesem Jahr? Und könnten Sie die Wartungen wieder im Mai und Juni machen? Im Herbst haben sich einige Mieter über zu kurzfristige Termine beschwert.\nMit freundlichen Grüßen\nBirgit Schoppe"
       },
       "sorte": "email",
       "an": "Frau Birgit Schoppe, Hausverwaltung Schoppe",
       "betreff": "AW: Wartung Gasheizungen 2027",
       "punkte": [
        {
         "nr": 1,
         "was": "Dank",
         "hinweis": "Bedanken Sie sich für den Auftrag."
        },
        {
         "nr": 2,
         "was": "Neuer Preis",
         "hinweis": "Nennen Sie den neuen Preis und begründen Sie die Erhöhung."
        },
        {
         "nr": 3,
         "was": "Angebot",
         "hinweis": "Machen Sie ein Angebot bei schneller Bestätigung."
        },
        {
         "nr": 4,
         "was": "Termine",
         "hinweis": "Gehen Sie auf die Terminwünsche und die Beschwerden der Mieter ein."
        }
       ],
       "muster": "Betreff: AW: Wartung Gasheizungen 2027\nSehr geehrte Frau Schoppe,\nvielen Dank für Ihre Anfrage und dafür, dass Sie uns auch im nächsten Jahr beauftragen möchten.\nBei den Konditionen gibt es leider eine Änderung. Ab dem 1. Januar 2027 kostet die Wartung pro Anlage 209 Euro netto statt bisher 189 Euro. Grund sind die neuen Tariflöhne im Handwerk und die gestiegenen Kosten für unsere Fahrzeuge. Bei 14 Anlagen sind das 280 Euro mehr im Jahr.\nWenn Sie den Auftrag bis zum 15. Dezember bestätigen, berechnen wir Ihnen für 2027 einmalig 199 Euro pro Anlage.\nDie Wartungen planen wir gern wieder im Mai und Juni. Damit es keinen Ärger mit den Mietern gibt, schicken wir Ihnen alle Termine bis Mitte März. So können Sie die Aushänge in den Häusern mit drei Wochen Vorlauf machen.\nMit freundlichen Grüßen\nThomas Kessler\nKessler Heizung und Sanitär",
       "hilfen": [
        "Bei den Konditionen gibt es leider eine Änderung.",
        "Ab dem … kostet … statt bisher …",
        "Grund sind …",
        "Wenn Sie den Auftrag bis zum … bestätigen, berechnen wir Ihnen …",
        "Damit es keinen Ärger mit … gibt, …"
       ],
       "erklaerung": "Die Preiserhöhung wird nicht versteckt, sondern mit Zahlen und Grund genannt. Das Entgegenkommen und die Lösung für die Mieter halten die Kundin.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 4,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 3,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 2,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 1,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "E",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
         "stufen": [
          {
           "w": 4,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 3,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 2,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 1,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "E",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "III Korrektheit (Anteil)",
         "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 3,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 2,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 1,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "IV Wortschatz (Anteil)",
         "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
         "stufen": [
          {
           "w": 3,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 2,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 1,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 14,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 130,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
      },
      {
       "id": "bc1b4",
       "typ": "formell",
       "situation": "Sie arbeiten im Einkauf der Velomann Fahrradwerk GmbH in Göttingen. Dorn Elektrotechnik hat Ihnen am 2. Oktober 2.000 Kabelsätze für E-Bikes geliefert. Bei der Eingangsprüfung waren 260 Stück fehlerhaft. Deshalb haben Sie die Rechnung noch nicht bezahlt. Jetzt kommt eine Zahlungserinnerung. Antworten Sie Herrn Dorn.",
       "eingang": {
        "von": "Wolfgang Dorn, Dorn Elektrotechnik",
        "betreff": "Rechnung 2026-1187, Zahlungserinnerung",
        "text": "Sehr geehrte Damen und Herren,\nunsere Rechnung 2026-1187 über 31.400 Euro vom 2. Oktober war am 1. November fällig. Bisher können wir keinen Zahlungseingang feststellen. Bitte überweisen Sie den Betrag bis zum 14. November oder teilen Sie uns mit, ob es Unklarheiten gibt.\nMit freundlichen Grüßen\nWolfgang Dorn\nGeschäftsführung"
       },
       "sorte": "email",
       "an": "Herr Wolfgang Dorn, Dorn Elektrotechnik",
       "betreff": "AW: Rechnung 2026-1187, Zahlungserinnerung",
       "punkte": [
        {
         "nr": 1,
         "was": "Mängel",
         "hinweis": "Erklären Sie, warum die Rechnung noch offen ist, und beschreiben Sie die Mängel."
        },
        {
         "nr": 2,
         "was": "Ersatz",
         "hinweis": "Fordern Sie Ersatz mit einer Frist."
        },
        {
         "nr": 3,
         "was": "Zahlung",
         "hinweis": "Sagen Sie, welchen Betrag Sie wann bezahlen."
        },
        {
         "nr": 4,
         "was": "Künftig",
         "hinweis": "Machen Sie einen Vorschlag, wie man solche Fehler künftig vermeidet."
        }
       ],
       "muster": "Betreff: AW: Rechnung 2026-1187, Zahlungserinnerung\nSehr geehrter Herr Dorn,\nvielen Dank für Ihre Nachricht. Wir haben die Rechnung bewusst noch nicht bezahlt, weil die Lieferung vom 2. Oktober Mängel hat. Bei unserer Eingangsprüfung waren 260 von 2.000 Kabelsätzen fehlerhaft: Meistens sitzt der Stecker zum Motor locker, bei 40 Stück ist zusätzlich die Isolierung eingerissen. Fotos und Prüfprotokoll finden Sie im Anhang.\nBitte liefern Sie uns bis spätestens 20. November 260 einwandfreie Kabelsätze. Die fehlerhaften Teile kann Ihre Spedition bei der Anlieferung mitnehmen.\nDen Betrag für die 1.740 einwandfreien Kabelsätze, also 27.318 Euro, überweisen wir noch diese Woche. Den Rest zahlen wir nach Eingang der Ersatzlieferung.\nAußerdem schlagen wir vor, die Stecker künftig vor dem Versand stichprobenartig zu prüfen. Das besprechen wir gern in einem kurzen Termin mit unserer Qualitätssicherung.\nMit freundlichen Grüßen\nJana Petrović\nEinkauf, Velomann Fahrradwerk GmbH",
       "hilfen": [
        "Wir haben die Rechnung bewusst noch nicht bezahlt, weil …",
        "Bei unserer Eingangsprüfung waren … fehlerhaft: …",
        "Bitte liefern Sie uns bis spätestens …",
        "Den Betrag für …, also … Euro, überweisen wir …",
        "Den Rest zahlen wir nach Eingang der Ersatzlieferung.",
        "Außerdem schlagen wir vor, …"
       ],
       "erklaerung": "Bestimmt, aber fair: Die Mängel sind belegt, die Frist ist klar, und der Lieferant bekommt das Geld für die guten Teile sofort.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 4,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 3,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 2,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 1,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "E",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
         "stufen": [
          {
           "w": 4,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 3,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 2,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 1,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "E",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "III Korrektheit (Anteil)",
         "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 3,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 2,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 1,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "IV Wortschatz (Anteil)",
         "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
         "stufen": [
          {
           "w": 3,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 2,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 1,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 14,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 130,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "mitteilung",
   "name": "Diskussionsvorlage",
   "kurz": "Zwei Möglichkeiten, eine Empfehlung, etwa 35 Minuten",
   "was": "Eine formelle Vorlage für die Geschäftsleitung: zwei Möglichkeiten erläutern, eine empfehlen und die Vorteile begründen. In der Prüfung wählst du eins von zwei Themen.",
   "tipp": "Gliedere sichtbar: Ausgangslage, Möglichkeit 1, Möglichkeit 2, Empfehlung. Nenne auch den Nachteil deiner Empfehlung und warum er tragbar ist.",
   "zeichen": "📑",
   "farbe": "rot",
   "punkte": 20,
   "runden": [
    {
     "id": "tbc1s3r1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "id": "bc1c1",
       "typ": "formell",
       "situation": "Sie arbeiten in der Lagerleitung der Kranich Versandlogistik GmbH in Kamen. Die Fehlerquote beim Kommissionieren ist seit Jahresbeginn von 0,4 auf 1,1 Prozent gestiegen, das sind rund 70 fehlerhafte Sendungen pro Woche. Jede Reklamation kostet im Schnitt 38 Euro. Die Geschäftsleitung möchte eine Entscheidung. Schreiben Sie eine Diskussionsvorlage.\nMöglichkeit 1: Pick-by-Voice, Kommissionieren mit Headset und Sprachansage. Anschaffung ca. 65.000 Euro, Wartung 9.000 Euro im Jahr, Einführung drei Monate, Schulung aller 34 Mitarbeiter.\nMöglichkeit 2: zusätzliche Kontrollstation vor dem Packplatz mit zwei neuen Mitarbeitern. Umsetzung in zwei Wochen, Personalkosten ca. 90.000 Euro im Jahr, längere Durchlaufzeit.",
       "sorte": "vorlage",
       "an": "Geschäftsleitung",
       "betreff": "Weniger Fehler bei der Kommissionierung",
       "punkte": [
        {
         "nr": 1,
         "was": "Möglichkeiten erläutern",
         "hinweis": "Stellen Sie Pick-by-Voice und die Kontrollstation mit Kosten, Zeitaufwand und Nachteilen dar."
        },
        {
         "nr": 2,
         "was": "Eine Möglichkeit empfehlen",
         "hinweis": "Entscheiden Sie sich klar für eine der beiden Lösungen."
        },
        {
         "nr": 3,
         "was": "Vorteile begründen",
         "hinweis": "Begründen Sie mit Kosten, Wirkung und Folgen für den Betrieb."
        }
       ],
       "muster": "Weniger Fehler bei der Kommissionierung\nAusgangslage\nIm Zentrallager in Kamen ist die Fehlerquote bei der Kommissionierung seit Jahresbeginn von 0,4 auf 1,1 Prozent gestiegen. Das entspricht rund 70 falschen oder unvollständigen Sendungen pro Woche. Jede Reklamation kostet uns durch Rückversand, Neuversand und Bearbeitung im Schnitt 38 Euro, im Jahr also etwa 138.000 Euro. Zwei Großkunden haben bereits schriftlich Nachbesserung verlangt.\nMöglichkeit 1: Pick-by-Voice\nDie Kommissionierer hören über ein Headset, welcher Artikel in welcher Menge aus welchem Fach zu entnehmen ist, und bestätigen jeden Schritt per Sprachbefehl. Die Anschaffung kostet rund 65.000 Euro, hinzu kommen 9.000 Euro Wartung pro Jahr. Die Einführung dauert etwa drei Monate. In dieser Zeit ist mit einer geringeren Leistung zu rechnen, da alle 34 Mitarbeiter geschult werden müssen.\nMöglichkeit 2: Zusätzliche Kontrollstation\nVor dem Packplatz wird eine Station eingerichtet, an der zwei zusätzliche Mitarbeiter jede Sendung mit dem Lieferschein abgleichen. Diese Lösung ließe sich innerhalb von zwei Wochen umsetzen. Demgegenüber stehen laufende Personalkosten von etwa 90.000 Euro im Jahr. Außerdem verlängert sich die Durchlaufzeit jeder Sendung, was bei Aufträgen nach 15 Uhr den Versand am selben Tag gefährdet.\nEmpfehlung\nIch empfehle Möglichkeit 1. Zwar sind die Anfangskosten höher und die Umstellung bindet im ersten Quartal Kapazitäten, jedoch setzt Pick-by-Voice an der Ursache an: Fehler entstehen gar nicht erst, statt erst am Ende gefunden zu werden. Bereits im zweiten Jahr ist diese Lösung günstiger als eine dauerhaft besetzte Kontrollstation. Hinzu kommt, dass die Mitarbeiter beide Hände frei haben, was erfahrungsgemäß auch das Arbeitstempo erhöht. Die Schulungen sollten im Januar und Februar stattfinden, da das Auftragsvolumen dann am niedrigsten ist.\nDaniel Reuter, Lagerleitung, 3. November 2026",
       "hilfen": [
        "Das entspricht rund … pro Woche.",
        "Die Anschaffung kostet rund …, hinzu kommen …",
        "In dieser Zeit ist mit … zu rechnen, da …",
        "Demgegenüber stehen laufende Kosten von …",
        "Zwar …, jedoch setzt … an der Ursache an.",
        "Bereits im zweiten Jahr ist diese Lösung günstiger als …"
       ],
       "erklaerung": "Die Ausgangslage rechnet das Problem in Euro um, beide Möglichkeiten werden neutral beschrieben. Die Empfehlung nennt den Nachteil und zeigt, warum der Vorteil auf Dauer schwerer wiegt.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "III Korrektheit (Anteil)",
         "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "IV Wortschatz (Anteil)",
         "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 250,
       "platzhalter": "Schreib hier deine Diskussionsvorlage: Ausgangslage, Möglichkeit 1, Möglichkeit 2, Empfehlung …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
      },
      {
       "id": "bc1c2",
       "typ": "formell",
       "situation": "Sie arbeiten im Büromanagement des Ingenieurbüros Reinholz Planung in Hannover. Das Büro hat 62 Mitarbeiter, bis zum Sommer kommen acht neue dazu. Schon jetzt sind alle Arbeitsplätze vergeben, obwohl im Schnitt ein Drittel der Belegschaft im Homeoffice arbeitet. Schreiben Sie eine Diskussionsvorlage für die Geschäftsführung.\nMöglichkeit 1: zusätzliche Etage im Nachbarhaus anmieten. 420 Quadratmeter, Miete ca. 5.200 Euro im Monat, Vertrag mindestens fünf Jahre, Einrichtung ca. 60.000 Euro, frei ab April.\nMöglichkeit 2: Desk-Sharing mit Buchungssystem. Umbau mit Ruheräumen und Schließfächern ca. 45.000 Euro, Software 180 Euro im Monat, Umsetzung in sechs Wochen, keine festen Plätze mehr.",
       "sorte": "vorlage",
       "an": "Geschäftsführung",
       "betreff": "Arbeitsplätze für das wachsende Team",
       "punkte": [
        {
         "nr": 1,
         "was": "Möglichkeiten erläutern",
         "hinweis": "Stellen Sie die neue Etage und das Desk-Sharing mit Kosten, Zeit und Nachteilen dar."
        },
        {
         "nr": 2,
         "was": "Eine Möglichkeit empfehlen",
         "hinweis": "Entscheiden Sie sich für eine Lösung."
        },
        {
         "nr": 3,
         "was": "Vorteile begründen",
         "hinweis": "Begründen Sie Ihre Wahl und gehen Sie auf mögliche Bedenken der Mitarbeiter ein."
        }
       ],
       "muster": "Arbeitsplätze für das wachsende Team\nAusgangslage\nIn unseren Büroräumen gibt es 62 feste Arbeitsplätze, die alle vergeben sind. Bis zum Sommer stellen wir acht weitere Ingenieure und Zeichner ein. Gleichzeitig zeigt die Auswertung der letzten drei Monate, dass im Schnitt ein Drittel der Plätze leer steht, weil die Kollegen im Homeoffice oder auf Baustellen sind.\nMöglichkeit 1: Zusätzliche Etage im Nachbarhaus\nIm Nachbarhaus wird ab April eine Etage mit 420 Quadratmetern frei. Die Miete liegt bei rund 5.200 Euro im Monat, der Vermieter verlangt einen Vertrag über mindestens fünf Jahre. Für Möbel, Technik und Netzwerk wären etwa 60.000 Euro nötig. Nachteilig ist, dass einzelne Teams auf zwei Gebäude verteilt würden.\nMöglichkeit 2: Desk-Sharing mit Buchungssystem\nDie Mitarbeiter hätten keinen festen Platz mehr, sondern buchen ihren Arbeitsplatz vorher über eine Software. Für den Umbau mit zwei Ruheräumen und Schließfächern rechnen wir mit 45.000 Euro, die Software kostet 180 Euro im Monat. Die Umstellung wäre in sechs Wochen abgeschlossen. Erfahrungsgemäß stößt der Verlust des eigenen Schreibtischs jedoch zunächst auf Widerstand.\nEmpfehlung\nIch empfehle Möglichkeit 2. Die Zahlen zeigen, dass wir nicht zu wenig Fläche haben, sondern unsere Fläche schlecht nutzen. Mit Desk-Sharing reichen die vorhandenen Räume auch für 70 Mitarbeiter, und die Kosten liegen schon im ersten Jahr bei weniger als der Hälfte von Möglichkeit 1. Insofern vermeiden wir eine langfristige Bindung an einen Mietvertrag, die bei einer schwächeren Auftragslage zur Belastung werden könnte. Den Bedenken der Kollegen sollten wir mit einer Testphase in einem Team und festen Plätzen für Kollegen mit besonderen Anforderungen begegnen, etwa für die CAD-Arbeitsplätze mit großen Bildschirmen.\nLena Wiegand, Büromanagement, 3. November 2026",
       "hilfen": [
        "Gleichzeitig zeigt die Auswertung …, dass …",
        "Nachteilig ist, dass …",
        "Erfahrungsgemäß stößt … jedoch zunächst auf Widerstand.",
        "Die Zahlen zeigen, dass wir nicht …, sondern …",
        "Insofern vermeiden wir …",
        "Den Bedenken … sollten wir mit … begegnen."
       ],
       "erklaerung": "Stark ist die Ausgangslage: Sie zeigt schon, dass Platz da ist, aber schlecht genutzt wird. Die Empfehlung nimmt den Widerstand ernst und macht einen konkreten Vorschlag dazu.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "III Korrektheit (Anteil)",
         "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "IV Wortschatz (Anteil)",
         "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 250,
       "platzhalter": "Schreib hier deine Diskussionsvorlage: Ausgangslage, Möglichkeit 1, Möglichkeit 2, Empfehlung …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
      }
     ]
    },
    {
     "id": "tbc1s3r2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "id": "bc1c3",
       "typ": "formell",
       "situation": "Sie arbeiten in der IT des Elektrogroßhandels Mertens in Augsburg. Das Warenwirtschaftssystem ist 14 Jahre alt, stürzt mehrmals im Monat ab und lässt sich nicht an den geplanten Onlineshop anbinden. Der Hersteller beendet den Support Ende 2027. Schreiben Sie eine Diskussionsvorlage für die Geschäftsleitung.\nMöglichkeit 1: Update auf die neue Version desselben Herstellers. Kosten ca. 48.000 Euro, Umstellung drei Monate, Schnittstelle zum Onlineshop 15.000 Euro extra, Support bis 2031.\nMöglichkeit 2: neue Cloud-Software. Einführung ca. 90.000 Euro, monatlich 1.900 Euro, Projektdauer acht Monate, Schulung aller 70 Nutzer, Onlineshop-Anbindung inklusive.",
       "sorte": "vorlage",
       "an": "Geschäftsleitung",
       "betreff": "Zukunft unseres Warenwirtschaftssystems",
       "punkte": [
        {
         "nr": 1,
         "was": "Möglichkeiten erläutern",
         "hinweis": "Stellen Sie das Update und die Cloud-Software mit Kosten, Dauer und Nachteilen dar."
        },
        {
         "nr": 2,
         "was": "Eine Möglichkeit empfehlen",
         "hinweis": "Entscheiden Sie sich für eine Lösung."
        },
        {
         "nr": 3,
         "was": "Vorteile begründen",
         "hinweis": "Begründen Sie Ihre Wahl mit Blick auf die nächsten Jahre und den Onlineshop."
        }
       ],
       "muster": "Zukunft unseres Warenwirtschaftssystems\nAusgangslage\nUnser Warenwirtschaftssystem ist seit 14 Jahren im Einsatz. Allein im Oktober ist es viermal abgestürzt, an einem Vormittag konnten die Kollegen im Verkauf zwei Stunden lang keine Aufträge erfassen. Für den Onlineshop, der im nächsten Herbst starten soll, fehlt eine Schnittstelle. Der Hersteller beendet den Support Ende 2027. Danach erhalten wir weder Sicherheitsupdates noch Hilfe bei Störungen.\nMöglichkeit 1: Update beim bisherigen Hersteller\nDie neue Version kostet rund 48.000 Euro, die Umstellung dauert etwa drei Monate. Die Oberfläche bleibt weitgehend gleich, sodass kaum Schulungsaufwand entsteht. Für die Anbindung des Onlineshops fallen allerdings weitere 15.000 Euro an. Der Support ist nur bis 2031 zugesagt, danach stünde dieselbe Frage erneut an.\nMöglichkeit 2: Umstieg auf eine Cloud-Software\nDie Einführung kostet etwa 90.000 Euro, hinzu kommen monatlich 1.900 Euro. Das Projekt würde acht Monate dauern, alle 70 Nutzer müssten geschult werden. Auch die Übernahme der Kundendaten ist aufwendig. Demgegenüber sind die Anbindung an den Onlineshop, regelmäßige Updates und der Zugriff für den Außendienst bereits im Preis enthalten.\nEmpfehlung\nIch empfehle Möglichkeit 2. Zwar ist der Umstieg teurer und aufwendiger, jedoch lösen wir mit dem Update nur das Problem der nächsten vier Jahre. Mit der Cloud-Software entfallen außerdem eigene Serverkosten von derzeit rund 8.000 Euro im Jahr, was die monatliche Gebühr teilweise ausgleicht. Ein weiterer Vorteil ist, dass der Außendienst Lagerbestände künftig direkt beim Kunden prüfen kann, statt im Innendienst anzurufen. Um den Starttermin des Onlineshops zu halten, sollte die Entscheidung bis Ende Dezember fallen. Die Schulungen könnten wir in kleinen Gruppen während der ruhigeren Sommermonate durchführen.\nMarkus Albrecht, IT, 3. November 2026",
       "hilfen": [
        "Allein im Oktober ist es …",
        "Für … fallen allerdings weitere … an.",
        "danach stünde dieselbe Frage erneut an.",
        "Demgegenüber sind … bereits im Preis enthalten.",
        "Zwar …, jedoch lösen wir mit … nur …",
        "Ein weiterer Vorteil ist, dass …"
       ],
       "erklaerung": "Die Vorlage denkt über die Anschaffung hinaus: Laufzeit, eingesparte Serverkosten und Nutzen für den Außendienst. So wird die teurere Lösung nachvollziehbar.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "III Korrektheit (Anteil)",
         "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "IV Wortschatz (Anteil)",
         "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 250,
       "platzhalter": "Schreib hier deine Diskussionsvorlage: Ausgangslage, Möglichkeit 1, Möglichkeit 2, Empfehlung …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
      },
      {
       "id": "bc1c4",
       "typ": "formell",
       "situation": "Sie arbeiten als Pflegedienstleitung im Seniorenzentrum Am Lindenhof in Gera mit 96 Bewohnern. Im Nachtdienst fehlen dauerhaft zwei Pflegefachkräfte. Das Stammteam hat 1.900 Überstunden, der Krankenstand steigt. Schreiben Sie eine Diskussionsvorlage für die Heimleitung.\nMöglichkeit 1: Pflegefachkräfte aus der Zeitarbeit. Sofort verfügbar, Stundensatz ca. 68 Euro statt 36 Euro intern, Mehrkosten ca. 230.000 Euro im Jahr, oft wechselnde Kräfte.\nMöglichkeit 2: vier Pflegefachkräfte aus dem Ausland über eine Vermittlungsagentur. Kosten ca. 11.000 Euro pro Person für Vermittlung, Sprachkurs und Anerkennung, 10 bis 14 Monate bis zum vollen Einsatz, Wohnungssuche und Einarbeitung nötig.",
       "sorte": "vorlage",
       "an": "Heimleitung",
       "betreff": "Personalengpass im Nachtdienst",
       "punkte": [
        {
         "nr": 1,
         "was": "Möglichkeiten erläutern",
         "hinweis": "Stellen Sie Zeitarbeit und Anwerbung aus dem Ausland mit Kosten, Zeit und Nachteilen dar."
        },
        {
         "nr": 2,
         "was": "Eine Möglichkeit empfehlen",
         "hinweis": "Entscheiden Sie sich für eine Lösung und sagen Sie, was bis dahin passieren soll."
        },
        {
         "nr": 3,
         "was": "Vorteile begründen",
         "hinweis": "Begründen Sie Ihre Wahl mit Folgen für Bewohner, Team und Kosten."
        }
       ],
       "muster": "Personalengpass im Nachtdienst\nAusgangslage\nIm Nachtdienst sind seit dem Frühjahr zwei Stellen für Pflegefachkräfte unbesetzt. Die Lücken werden derzeit vom Stammteam geschlossen, das inzwischen rund 1.900 Überstunden angesammelt hat. Der Krankenstand ist im dritten Quartal auf neun Prozent gestiegen, zwei Kolleginnen haben angekündigt, ihre Stunden zu reduzieren. Mehrfach war nachts nur eine Fachkraft für zwei Wohnbereiche zuständig.\nMöglichkeit 1: Zeitarbeit\nÜber eine Zeitarbeitsfirma könnten wir die Nachtdienste ab sofort besetzen. Der Stundensatz liegt bei etwa 68 Euro, intern rechnen wir mit 36 Euro. Daraus ergeben sich Mehrkosten von rund 230.000 Euro im Jahr. Hinzu kommt, dass die Kräfte häufig wechseln und unsere Bewohner nicht kennen, was gerade bei Menschen mit Demenz nachts zu Unruhe führt.\nMöglichkeit 2: Anwerbung aus dem Ausland\nÜber eine Vermittlungsagentur könnten wir vier Pflegefachkräfte gewinnen. Pro Person fallen etwa 11.000 Euro für Vermittlung, Sprachkurs und Anerkennung an. Bis zum vollen Einsatz vergehen allerdings 10 bis 14 Monate. Außerdem müssten wir bei der Wohnungssuche helfen und eine sorgfältige Einarbeitung sicherstellen. Es besteht zudem das Risiko, dass einzelne Kräfte nach der Anerkennung in eine Klinik wechseln.\nEmpfehlung\nIch empfehle Möglichkeit 2. Zwar löst sie das Problem nicht sofort, jedoch gewinnen wir feste Pflegekräfte, die bleiben und die Bewohner kennenlernen. Die einmaligen Kosten von rund 44.000 Euro liegen deutlich unter den jährlichen Mehrkosten der Zeitarbeit. Für die Übergangszeit schlage ich vor, Zeitarbeit gezielt nur für zwei Nächte pro Woche einzusetzen, um das Stammteam spürbar zu entlasten. Insofern verbinden wir eine schnelle Entlastung mit einer dauerhaften Lösung. Für die Einarbeitung sollten wir zwei erfahrene Kolleginnen als feste Ansprechpartnerinnen benennen.\nSilke Brandner, Pflegedienstleitung, 3. November 2026",
       "hilfen": [
        "Die Lücken werden derzeit vom … geschlossen.",
        "Daraus ergeben sich Mehrkosten von …",
        "Hinzu kommt, dass …",
        "Bis zum vollen Einsatz vergehen allerdings …",
        "Zwar löst sie das Problem nicht sofort, jedoch …",
        "Für die Übergangszeit schlage ich vor, …"
       ],
       "erklaerung": "Die Empfehlung ist eindeutig, sagt aber ehrlich, dass sie Zeit braucht, und plant die Übergangszeit mit ein. Kosten werden direkt gegeneinander gerechnet.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "III Korrektheit (Anteil)",
         "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        },
        {
         "t": "IV Wortschatz (Anteil)",
         "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "gut erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "überwiegend"
          },
          {
           "w": 2,
           "t": "D",
           "d": "teilweise"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 250,
       "platzhalter": "Schreib hier deine Diskussionsvorlage: Ausgangslage, Möglichkeit 1, Möglichkeit 2, Empfehlung …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tbc1sl1",
   "titel": "Prüfungslauf 1",
   "minuten": 60,
   "aufgaben": [
    {
     "id": "bc1a5",
     "typ": "informell",
     "situation": "Sie arbeiten als Pflegefachkraft auf der Station 3B einer Klinik in Freiburg. Die Station 4A hat sich vor einer Woche Ihr mobiles EKG-Gerät ausgeliehen. Ab Donnerstag brauchen Sie es selbst. Schreiben Sie Andreas, dem Stationsleiter der 4A.",
     "sorte": "email",
     "an": "Andreas, Station 4A",
     "betreff": "Unser mobiles EKG",
     "punkte": [
      {
       "nr": 1,
       "was": "Gerät",
       "hinweis": "Erinnern Sie an die Ausleihe und fragen Sie nach dem Gerät."
      },
      {
       "nr": 2,
       "was": "Grund",
       "hinweis": "Erklären Sie, warum Sie das Gerät ab Donnerstag brauchen."
      },
      {
       "nr": 3,
       "was": "Vorschlag",
       "hinweis": "Machen Sie einen Vorschlag, wie man Ausleihen künftig besser regelt."
      }
     ],
     "muster": "Betreff: Unser mobiles EKG\nHallo Andreas,\nihr habt euch letzten Dienstag unser mobiles EKG ausgeliehen. Ist es bei euch noch im Einsatz?\nWir brauchen es ab Donnerstag zurück, weil wir dann drei Patienten nach einer Herz-OP von der Intensivstation übernehmen. Die brauchen mehrmals am Tag ein EKG, und das große Gerät steht im Untersuchungsraum.\nDamit wir nicht jedes Mal suchen müssen: Wie wäre es mit einer Ausleihliste direkt am Gerät? Name, Station, Datum, fertig. Ich hänge eine dran, sobald es wieder bei uns ist.\nDanke dir und viele Grüße\nMirela",
     "hilfen": [
      "ihr habt euch letzten … ausgeliehen.",
      "Ist es bei euch noch im Einsatz?",
      "Wir brauchen es ab … zurück, weil …",
      "Damit wir nicht jedes Mal suchen müssen: …",
      "Wie wäre es mit …?"
     ],
     "erklaerung": "Eine Frage statt eines Vorwurfs hält die Stimmung zwischen den Stationen gut. Der Vorschlag am Ende löst das Problem auch für später.",
     "rubrik": [
      {
       "t": "I Aufgabenbewältigung",
       "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
       "stufen": [
        {
         "w": 2,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 1,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 0,
         "t": "C",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "II Kommunikative Gestaltung",
       "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
       "stufen": [
        {
         "w": 2,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 1,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 0,
         "t": "C",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "III Korrektheit (Anteil)",
       "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 2,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 1,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 0,
         "t": "C",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "IV Wortschatz (Anteil)",
       "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
       "stufen": [
        {
         "w": 2,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 1,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 0,
         "t": "C",
         "d": "nicht erfüllt"
        }
       ]
      }
     ],
     "max": 8,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 70,
     "platzhalter": "Schreib hier deine E-Mail …",
     "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
     "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
    },
    {
     "id": "bc1b5",
     "typ": "formell",
     "situation": "Sie arbeiten in der Personalabteilung der Brinkhoff Getränkelogistik in Hamm. Beim Gesundheitstag am Donnerstag, dem 11. März 2027, hält die Arbeitsmedizinerin Dr. Sabine Roth einen Vortrag über Rückengesundheit. Sie hat zugesagt und stellt Fragen. Antworten Sie ihr.",
     "eingang": {
      "von": "Dr. Sabine Roth",
      "betreff": "Vortrag beim Gesundheitstag",
      "text": "Sehr geehrte Frau Aydın,\nüber Ihre Anfrage habe ich mich gefreut, ich übernehme den Vortrag zur Rückengesundheit gern. Damit ich mich vorbereiten kann, hätte ich noch einige Fragen: Wie viel Zeit habe ich, und wer sitzt im Publikum? Gibt es einen Beamer, und kann ich meinen eigenen Laptop anschließen? Und wie regeln Sie Honorar und Fahrtkosten? Ich komme mit dem Auto aus Münster.\nMit freundlichen Grüßen\nSabine Roth"
     },
     "sorte": "email",
     "an": "Frau Dr. Sabine Roth",
     "betreff": "AW: Vortrag beim Gesundheitstag",
     "punkte": [
      {
       "nr": 1,
       "was": "Zeit und Publikum",
       "hinweis": "Nennen Sie Ort, Uhrzeit, Dauer und wer zuhört."
      },
      {
       "nr": 2,
       "was": "Technik",
       "hinweis": "Beantworten Sie die Fragen zur Technik und schlagen Sie einen Test vor."
      },
      {
       "nr": 3,
       "was": "Honorar und Fahrtkosten",
       "hinweis": "Nennen Sie Honorar und Erstattung der Fahrtkosten."
      },
      {
       "nr": 4,
       "was": "Anfahrt",
       "hinweis": "Geben Sie einen Hinweis zum Parken."
      }
     ],
     "muster": "Betreff: AW: Vortrag beim Gesundheitstag\nSehr geehrte Frau Dr. Roth,\nvielen Dank für Ihre Zusage, darüber freuen wir uns sehr.\nDer Gesundheitstag findet in unserer Kantine statt. Ihr Vortrag beginnt um 13:30 Uhr, direkt nach der Mittagspause. Sie haben 45 Minuten, davon gern 15 Minuten für Fragen. Im Publikum sitzen etwa 80 Kollegen, vor allem Fahrer und Lagerarbeiter, die jeden Tag Kisten heben.\nEin Beamer mit HDMI-Anschluss und ein Mikrofon sind vorhanden. Wenn Sie gegen 13 Uhr kommen, testen wir Ihren Laptop zusammen mit unserem Haustechniker.\nWir zahlen ein Honorar von 400 Euro. Ihre Fahrtkosten erstatten wir mit 30 Cent pro gefahrenem Kilometer.\nParken können Sie direkt vor dem Verwaltungsgebäude in der Lippestraße 8. Ich reserviere Ihnen dort einen Platz, bitte melden Sie sich danach am Empfang.\nMit freundlichen Grüßen\nDerya Aydın\nPersonalabteilung, Brinkhoff Getränkelogistik",
     "hilfen": [
      "Ihr Vortrag beginnt um …, direkt nach …",
      "Im Publikum sitzen etwa …, vor allem …",
      "… ist vorhanden. Wenn Sie gegen … kommen, testen wir …",
      "Wir zahlen ein Honorar von …",
      "Ihre Fahrtkosten erstatten wir mit …",
      "Ich reserviere Ihnen dort einen Platz."
     ],
     "erklaerung": "Jede Frage der Referentin bekommt eine genaue Antwort. Der Hinweis auf das Publikum hilft ihr, den Vortrag passend vorzubereiten.",
     "rubrik": [
      {
       "t": "I Aufgabenbewältigung",
       "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
       "stufen": [
        {
         "w": 4,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 3,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 2,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 1,
         "t": "D",
         "d": "teilweise"
        },
        {
         "w": 0,
         "t": "E",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "II Kommunikative Gestaltung",
       "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
       "stufen": [
        {
         "w": 4,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 3,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 2,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 1,
         "t": "D",
         "d": "teilweise"
        },
        {
         "w": 0,
         "t": "E",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "III Korrektheit (Anteil)",
       "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 3,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 2,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 1,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 0,
         "t": "D",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "IV Wortschatz (Anteil)",
       "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
       "stufen": [
        {
         "w": 3,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 2,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 1,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 0,
         "t": "D",
         "d": "nicht erfüllt"
        }
       ]
      }
     ],
     "max": 14,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 130,
     "platzhalter": "Schreib hier deine E-Mail …",
     "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
     "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
    },
    {
     "id": "bc1c5",
     "typ": "formell",
     "situation": "Sie arbeiten in der Produktionsleitung der Lindauer Präzisionsteile GmbH in Pforzheim. In den letzten sechs Monaten sind die CNC-Fräszentren dreimal ausgefallen, jeweils für etwa zwei Tage. Ein Tag Stillstand kostet rund 9.000 Euro. Der einzige Instandhalter geht im Juni in Rente. Schreiben Sie eine Diskussionsvorlage für die Geschäftsführung.\nMöglichkeit 1: Wartungsvertrag mit dem Maschinenhersteller. 32.000 Euro im Jahr, zwei Wartungen pro Jahr, Reaktionszeit 48 Stunden, das Wissen bleibt beim Hersteller.\nMöglichkeit 2: neuen Instandhalter einstellen. Gehalt mit Nebenkosten ca. 62.000 Euro im Jahr, Herstellerschulung 7.000 Euro, Stellenbesetzung dauert vier bis sechs Monate.",
     "sorte": "vorlage",
     "an": "Geschäftsführung",
     "betreff": "Instandhaltung der CNC-Fräszentren",
     "punkte": [
      {
       "nr": 1,
       "was": "Möglichkeiten erläutern",
       "hinweis": "Stellen Sie den Wartungsvertrag und die Neueinstellung mit Kosten, Zeit und Nachteilen dar."
      },
      {
       "nr": 2,
       "was": "Eine Möglichkeit empfehlen",
       "hinweis": "Entscheiden Sie sich für eine Lösung."
      },
      {
       "nr": 3,
       "was": "Vorteile begründen",
       "hinweis": "Begründen Sie Ihre Wahl mit Ausfallzeiten, Kosten und Wissen im Betrieb."
      }
     ],
     "muster": "Instandhaltung der CNC-Fräszentren\nAusgangslage\nIn den letzten sechs Monaten sind unsere CNC-Fräszentren dreimal für jeweils rund zwei Tage ausgefallen. Bei Kosten von etwa 9.000 Euro pro Stillstandstag entspricht das einem Schaden von 54.000 Euro. Zusätzlich geht unser einziger Instandhalter, Herr Kübler, im Juni in Rente. Ohne Nachfolge fehlt uns ab dem Sommer jede eigene Kompetenz für Reparaturen.\nMöglichkeit 1: Wartungsvertrag mit dem Hersteller\nDer Hersteller bietet einen Vertrag für 32.000 Euro im Jahr an. Er umfasst zwei planmäßige Wartungen und eine Reaktionszeit von 48 Stunden bei Störungen. Diese Lösung wäre kurzfristig verfügbar und erfordert keinen Aufwand für die Personalsuche. Nachteilig ist, dass ein Techniker frühestens nach zwei Tagen vor Ort ist und das Wissen über unsere Maschinen beim Hersteller bleibt.\nMöglichkeit 2: Einstellung eines neuen Instandhalters\nEin Industriemechaniker oder Mechatroniker kostet uns einschließlich Nebenkosten rund 62.000 Euro im Jahr, hinzu kommt eine Herstellerschulung für 7.000 Euro. Angesichts des Fachkräftemangels ist mit einer Besetzungsdauer von vier bis sechs Monaten zu rechnen. Bei Urlaub oder Krankheit des Instandhalters wären wir weiterhin auf den Hersteller angewiesen.\nEmpfehlung\nIch empfehle Möglichkeit 2. Zwar sind die jährlichen Kosten fast doppelt so hoch wie beim Wartungsvertrag, jedoch ist ein eigener Instandhalter bei einer Störung innerhalb einer Stunde an der Maschine. Bereits ein einziger vermiedener Stillstandstag spart 9.000 Euro. Darüber hinaus kann er kleinere Verschleißteile vorbeugend tauschen und unsere Bediener im Umgang mit den Maschinen schulen. Wichtig ist außerdem die Übergabe: Wenn wir die Stelle jetzt ausschreiben, kann Herr Kübler seinen Nachfolger noch einige Wochen einarbeiten. Dieses Wissen über unsere älteren Maschinen ginge sonst verloren.\nTobias Lenz, Produktionsleitung, 3. November 2026",
     "hilfen": [
      "Bei Kosten von … entspricht das einem Schaden von …",
      "Ohne Nachfolge fehlt uns ab …",
      "Nachteilig ist, dass …",
      "Angesichts des Fachkräftemangels ist mit … zu rechnen.",
      "Zwar …, jedoch ist ein eigener … innerhalb einer Stunde …",
      "Darüber hinaus kann er …"
     ],
     "erklaerung": "Die Vorlage rechnet die Ausfälle in Geld um und zeigt damit, dass die teurere Lösung sich lohnt. Die geplante Übergabe ist ein starkes, konkretes Argument.",
     "rubrik": [
      {
       "t": "I Aufgabenbewältigung",
       "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 2,
         "t": "D",
         "d": "teilweise"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "II Kommunikative Gestaltung",
       "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 2,
         "t": "D",
         "d": "teilweise"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "III Korrektheit (Anteil)",
       "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 2,
         "t": "D",
         "d": "teilweise"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "IV Wortschatz (Anteil)",
       "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 2,
         "t": "D",
         "d": "teilweise"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht erfüllt"
        }
       ]
      }
     ],
     "max": 20,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 250,
     "platzhalter": "Schreib hier deine Diskussionsvorlage: Ausgangslage, Möglichkeit 1, Möglichkeit 2, Empfehlung …",
     "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
     "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
    }
   ]
  },
  {
   "id": "tbc1sl2",
   "titel": "Prüfungslauf 2",
   "minuten": 60,
   "aufgaben": [
    {
     "id": "bc1a6",
     "typ": "informell",
     "situation": "Sie arbeiten im Einkauf einer Bäckereikette mit zwölf Filialen in Leipzig. Ab Montag sind Sie zwei Wochen im Urlaub. Ihre Kollegin Katrin vertritt Sie und hat Ihnen geschrieben. Antworten Sie ihr.",
     "eingang": {
      "von": "Katrin Seidel, Einkauf",
      "betreff": "Deine Vertretung",
      "text": "Hallo Olga,\nab Montag bin ich ja deine Vertretung. Gibt es irgendwas, das gerade offen ist? Und wo finde ich deine Unterlagen? Ich will dich im Urlaub möglichst nicht stören, aber falls es brennt: Darf ich dich anrufen?\nViele Grüße\nKatrin"
     },
     "sorte": "email",
     "an": "Katrin Seidel, Einkauf",
     "betreff": "AW: Deine Vertretung",
     "punkte": [
      {
       "nr": 1,
       "was": "Offene Aufgabe",
       "hinweis": "Erklären Sie, welche Sache gerade offen ist."
      },
      {
       "nr": 2,
       "was": "Unterlagen",
       "hinweis": "Sagen Sie, wo Katrin alles findet."
      },
      {
       "nr": 3,
       "was": "Erreichbarkeit",
       "hinweis": "Schreiben Sie, ob und wann man Sie im Urlaub erreichen kann."
      }
     ],
     "muster": "Betreff: AW: Deine Vertretung\nHallo Katrin,\ndanke, dass du mich die zwei Wochen vertrittst. Offen ist eigentlich nur eine Sache: Die Mühle Brandt hat für Dezember einen höheren Mehlpreis angekündigt, vier Euro mehr pro Doppelzentner. Ich habe um ein neues Angebot gebeten, es sollte bis Mittwoch kommen.\nAlle Unterlagen liegen auf dem Laufwerk im Ordner „Lieferanten 2026“, die Mails mit Brandt habe ich dir weitergeleitet.\nWenn es brennt, ruf mich am Freitag, dem 13., vormittags auf dem Handy an. Sonst entscheidest du einfach, ich vertraue dir da völlig.\nLiebe Grüße\nOlga",
     "hilfen": [
      "danke, dass du mich … vertrittst.",
      "Offen ist eigentlich nur eine Sache: …",
      "Alle Unterlagen liegen …",
      "Wenn es brennt, ruf mich … an.",
      "Sonst entscheidest du einfach."
     ],
     "erklaerung": "Alle drei Fragen aus Katrins Mail werden beantwortet, und die Erreichbarkeit ist klar begrenzt. So muss niemand im Urlaub raten.",
     "rubrik": [
      {
       "t": "I Aufgabenbewältigung",
       "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
       "stufen": [
        {
         "w": 2,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 1,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 0,
         "t": "C",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "II Kommunikative Gestaltung",
       "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
       "stufen": [
        {
         "w": 2,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 1,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 0,
         "t": "C",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "III Korrektheit (Anteil)",
       "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 2,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 1,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 0,
         "t": "C",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "IV Wortschatz (Anteil)",
       "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
       "stufen": [
        {
         "w": 2,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 1,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 0,
         "t": "C",
         "d": "nicht erfüllt"
        }
       ]
      }
     ],
     "max": 8,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 70,
     "platzhalter": "Schreib hier deine E-Mail …",
     "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
     "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
    },
    {
     "id": "bc1b6",
     "typ": "formell",
     "situation": "Sie arbeiten bei Vogt IT-Service in Bremen. Eine Zahnarztpraxis möchte im Januar einen neuen Server, darf aber keinen Tag schließen. Sie schlagen Samstag, den 16. Januar 2027, vor. Der Server kostet 3.900 Euro netto, dazu etwa zehn Stunden Arbeit zu je 95 Euro. Ansprechpartner ist Ihr Techniker Herr Lindner. Antworten Sie Herrn Dr. Arslan.",
     "eingang": {
      "von": "Dr. Mehmet Arslan, Zahnarztpraxis Arslan",
      "betreff": "Neuer Server für unsere Praxis",
      "text": "Sehr geehrte Damen und Herren,\nunser Server ist inzwischen sieben Jahre alt und wird immer langsamer. Wir möchten ihn im Januar austauschen lassen. Wichtig ist uns, dass die Praxis dafür nicht geschlossen werden muss, unsere Termine sind auf Wochen ausgebucht. Was würde das kosten, und was müssten wir vorbereiten?\nMit freundlichen Grüßen\nDr. Mehmet Arslan"
     },
     "sorte": "email",
     "an": "Herr Dr. Mehmet Arslan, Zahnarztpraxis Arslan",
     "betreff": "AW: Neuer Server für unsere Praxis",
     "punkte": [
      {
       "nr": 1,
       "was": "Termin",
       "hinweis": "Schlagen Sie einen Termin vor, der den Praxisbetrieb nicht stört."
      },
      {
       "nr": 2,
       "was": "Kosten",
       "hinweis": "Nennen Sie die Kosten für Gerät und Arbeit."
      },
      {
       "nr": 3,
       "was": "Vorbereitung",
       "hinweis": "Erklären Sie, was die Praxis vorbereiten muss."
      },
      {
       "nr": 4,
       "was": "Ansprechpartner",
       "hinweis": "Nennen Sie einen Ansprechpartner mit Telefonnummer."
      }
     ],
     "muster": "Betreff: AW: Neuer Server für unsere Praxis\nSehr geehrter Herr Dr. Arslan,\nvielen Dank für Ihre Anfrage. Wir machen die Umstellung gern so, dass Ihre Praxis keinen Tag schließen muss.\nWir schlagen Samstag, den 16. Januar 2027, vor. Unser Techniker beginnt um 8 Uhr, bis zum Nachmittag sind alle Daten übertragen. Am Montag ist er ab 7:30 Uhr in der Praxis, falls beim Start noch etwas hakt.\nDer neue Server kostet 3.900 Euro netto. Für Einrichtung und Datenübernahme rechnen wir mit etwa zehn Stunden zu je 95 Euro. Einen Zuschlag für den Samstag berechnen wir nicht.\nBitte sorgen Sie dafür, dass am Freitagabend alle Rechner heruntergefahren sind. Außerdem sollte jemand aus Ihrem Team am Samstag gegen 14 Uhr für eine Stunde vorbeikommen und die Abrechnungssoftware testen.\nIhr Ansprechpartner ist Herr Lindner, Sie erreichen ihn unter 0421 22 06 51.\nMit freundlichen Grüßen\nKatharina Vogt\nVogt IT-Service",
     "hilfen": [
      "Wir machen die Umstellung gern so, dass …",
      "Wir schlagen Samstag, den …, vor.",
      "Für Einrichtung und Datenübernahme rechnen wir mit …",
      "Einen Zuschlag für … berechnen wir nicht.",
      "Bitte sorgen Sie dafür, dass …",
      "Ihr Ansprechpartner ist …, Sie erreichen ihn unter …"
     ],
     "erklaerung": "Der Kunde hat zwei Fragen gestellt: Kosten und Vorbereitung. Das Muster beantwortet beide und löst nebenbei sein eigentliches Problem, den Praxisbetrieb.",
     "rubrik": [
      {
       "t": "I Aufgabenbewältigung",
       "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
       "stufen": [
        {
         "w": 4,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 3,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 2,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 1,
         "t": "D",
         "d": "teilweise"
        },
        {
         "w": 0,
         "t": "E",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "II Kommunikative Gestaltung",
       "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
       "stufen": [
        {
         "w": 4,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 3,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 2,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 1,
         "t": "D",
         "d": "teilweise"
        },
        {
         "w": 0,
         "t": "E",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "III Korrektheit (Anteil)",
       "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 3,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 2,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 1,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 0,
         "t": "D",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "IV Wortschatz (Anteil)",
       "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
       "stufen": [
        {
         "w": 3,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 2,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 1,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 0,
         "t": "D",
         "d": "nicht erfüllt"
        }
       ]
      }
     ],
     "max": 14,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 130,
     "platzhalter": "Schreib hier deine E-Mail …",
     "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
     "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
    },
    {
     "id": "bc1c6",
     "typ": "formell",
     "situation": "Sie arbeiten im Vertrieb der Wendt Fördertechnik GmbH in Bielefeld. Seit zwei Jahren gewinnt die Firma kaum neue Kunden, 85 Prozent des Umsatzes kommen von Bestandskunden. Für Veranstaltungen im nächsten Jahr stehen 60.000 Euro zur Verfügung. Schreiben Sie eine Diskussionsvorlage für die Geschäftsleitung.\nMöglichkeit 1: Stand auf der großen Logistikfachmesse in Stuttgart im März. Ca. 48.000 Euro mit Standbau, vier Messetage, fünf Mitarbeiter aus Vertrieb und Technik gebunden, viele Kontakte, aber nicht alle passend.\nMöglichkeit 2: eigener Kundentag im Werk. Ca. 16.000 Euro, etwa 120 Gäste, Anlagen live in Betrieb, vor allem Bestandskunden, wenige neue Kontakte.",
     "sorte": "vorlage",
     "an": "Geschäftsleitung",
     "betreff": "Messe oder Kundentag 2027",
     "punkte": [
      {
       "nr": 1,
       "was": "Möglichkeiten erläutern",
       "hinweis": "Stellen Sie Messe und Kundentag mit Kosten, Aufwand und Nachteilen dar."
      },
      {
       "nr": 2,
       "was": "Eine Möglichkeit empfehlen",
       "hinweis": "Entscheiden Sie sich für eine Möglichkeit."
      },
      {
       "nr": 3,
       "was": "Vorteile begründen",
       "hinweis": "Begründen Sie Ihre Wahl mit Blick auf das Ziel, neue Kunden zu gewinnen."
      }
     ],
     "muster": "Messe oder Kundentag 2027\nAusgangslage\nSeit zwei Jahren gewinnen wir kaum noch neue Kunden. Rund 85 Prozent unseres Umsatzes stammen inzwischen von Bestandskunden, drei davon machen allein ein Drittel aus. Fällt einer dieser Kunden weg, hätten wir ein ernstes Problem. Für Veranstaltungen stehen im nächsten Jahr 60.000 Euro zur Verfügung.\nMöglichkeit 1: Stand auf der Logistikfachmesse in Stuttgart\nEin Stand mit 40 Quadratmetern kostet einschließlich Standbau, Fahrt und Hotel rund 48.000 Euro. Während der vier Messetage fehlen fünf Kollegen aus Vertrieb und Technik im Tagesgeschäft. Erfahrungsgemäß sind nicht alle Kontakte für uns relevant, da viele Besucher eher kleine Lager betreiben.\nMöglichkeit 2: Kundentag im eigenen Werk\nEin Kundentag in Bielefeld würde etwa 16.000 Euro kosten. Wir könnten rund 120 Gäste empfangen und unsere Anlagen im laufenden Betrieb zeigen. Der Aufwand für die Organisation ist überschaubar. Allerdings kommen erfahrungsgemäß vor allem Kunden, die wir bereits kennen.\nEmpfehlung\nIch empfehle Möglichkeit 1. Zwar ist die Messe fast dreimal so teuer und bindet mehr Personal, jedoch erreichen wir dort genau die Zielgruppe, die uns fehlt: Logistikleiter mittelgroßer Unternehmen, die uns bisher nicht kennen. Ein Kundentag stärkt demgegenüber Beziehungen, die ohnehin stabil sind, und löst unser eigentliches Problem nicht. Um die Messe gut zu nutzen, sollten wir vorab gezielt 200 Unternehmen einladen und am Stand nur Gespräche mit Terminvereinbarung zählen. Wenn bereits ein mittlerer Auftrag zustande kommt, haben sich die Kosten gelohnt. Mit den verbleibenden 12.000 Euro ließe sich im Herbst zusätzlich ein kleinerer Kundentag für Bestandskunden finanzieren.\nKerstin Wendt, Vertrieb, 3. November 2026",
     "hilfen": [
      "Fällt einer dieser Kunden weg, hätten wir …",
      "Erfahrungsgemäß sind nicht alle Kontakte …",
      "Allerdings kommen erfahrungsgemäß vor allem …",
      "Zwar …, jedoch erreichen wir dort genau die Zielgruppe, die uns fehlt.",
      "… stärkt demgegenüber …, löst aber …",
      "Mit den verbleibenden … ließe sich …"
     ],
     "erklaerung": "Die Empfehlung misst beide Möglichkeiten am Ziel aus der Ausgangslage: neue Kunden. Der Vorschlag für das Restbudget zeigt, dass auch die andere Seite bedacht ist.",
     "rubrik": [
      {
       "t": "I Aufgabenbewältigung",
       "h": "Sind alle Punkte drin, ausführlich genug, mit passendem Betreff, Anrede, Einleitung und Schluss?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 2,
         "t": "D",
         "d": "teilweise"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "II Kommunikative Gestaltung",
       "h": "Passt das Register (du oder Sie, informell oder formell)? Ist der Text klar aufgebaut und gut verbunden?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 2,
         "t": "D",
         "d": "teilweise"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "III Korrektheit (Anteil)",
       "h": "Grammatik, Rechtschreibung, Satzbau. Vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 2,
         "t": "D",
         "d": "teilweise"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht erfüllt"
        }
       ]
      },
      {
       "t": "IV Wortschatz (Anteil)",
       "h": "Treffende, abwechslungsreiche Wörter und Wendungen aus dem Beruf.",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "gut erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "überwiegend"
        },
        {
         "w": 2,
         "t": "D",
         "d": "teilweise"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht erfüllt"
        }
       ]
      }
     ],
     "max": 20,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 250,
     "platzhalter": "Schreib hier deine Diskussionsvorlage: Ausgangslage, Möglichkeit 1, Möglichkeit 2, Empfehlung …",
     "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
     "rubrikHinweis": "Kriterium I und II wie bei telc. Korrektheit und Wortschatz bewertet telc einmal für alle drei Texte (je bis 10 Punkte); hier sind sie als Übungsschätzung auf die Teile verteilt (2, 3 und 5 Punkte). Zusammen höchstens 42 Punkte: B2 ab 18, C1 ab 34. telc nennt keine Wortzahl."
    }
   ]
  }
 ]
};
