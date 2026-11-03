/* ============================================================
   deutschoderwas club — HÖREN telc Deutsch B2·C1 Beruf

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B2·C1 Beruf,
   geprüft 03.11.2026). Alle Texte und Aufgaben eigene, Kontext
   Arbeitswelt. Erzeugt aus scratchpad/telcb2c1 mit bau.js.
   ============================================================ */

window.HOEREN_TELC_B2C1 = {
 "niveau": "telcB2C1",
 "pruefung": "telc Deutsch B2·C1 Beruf",
 "minuten": 40,
 "punkte": 25,
 "intro": "Der Hören-Teil bei telc B2·C1 Beruf dauert vierzig Minuten, und du hörst jeden Text nur einmal: zwei Gespräche, einen Vortrag, Meinungen von fünf Personen und eine Besprechung. Nach jeder Antwort siehst du den Text mit der entscheidenden Stelle.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Genau hören",
   "zeichen": "👂",
   "was": "Kurze Gespräche und richtig/falsch."
  },
  {
   "nr": 2,
   "titel": "Lange Texte",
   "zeichen": "🪤",
   "was": "Vortrag, Meinungen, Besprechung."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Alle vier Teile einzeln, alles nur einmal."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "25 Aufgaben, vierzig Minuten."
  }
 ],
 "bloecke": [
  {
   "id": "tbc1h1",
   "stufe": 1,
   "titel": "Kurze Gespräche: richtig oder falsch?",
   "zeichen": "💬",
   "farbe": "turq",
   "mal": 1,
   "kurz": "„nein, Moment\", „nur\", „wenn\", „ich glaube\": Kleine Wörter entscheiden, ob eine Aussage stimmt.",
   "ziel": "Nach diesem Block prüfst du Aussagen zu kurzen Gesprächen am Arbeitsplatz Wort für Wort und erkennst die typischen Fallen.",
   "aufgaben": [
    {
     "art": "gespraech",
     "ort": "Im Lager",
     "zeilen": [
      {
       "wer": "Frau",
       "text": "Die Lieferung aus Polen kommt am Dienstag, nein, Moment, Mittwoch. Dienstag war die aus Tschechien."
      },
      {
       "wer": "Mann",
       "text": "Also Mittwoch. Gut, dann plane ich die Leute so ein."
      }
     ],
     "satz": "Die Lieferung aus Polen kommt am Dienstag.",
     "loesung": false,
     "stelle": "am Dienstag, nein, Moment, Mittwoch",
     "erklaerung": "„nein, Moment\" macht die erste Angabe ungültig. Achte immer auf Selbstkorrekturen."
    },
    {
     "art": "gespraech",
     "ort": "Auf dem Flur",
     "zeilen": [
      {
       "wer": "Mann",
       "text": "Weißt du, ob Herr Wolf morgen wieder da ist?"
      },
      {
       "wer": "Frau",
       "text": "Keine Ahnung. Ich glaube, er ist noch krankgeschrieben, aber sicher bin ich mir nicht."
      }
     ],
     "satz": "Die Frau weiß sicher, dass Herr Wolf morgen fehlt.",
     "loesung": false,
     "stelle": "aber sicher bin ich mir nicht",
     "erklaerung": "„Ich glaube\" ist eine Vermutung, kein Wissen."
    },
    {
     "art": "gespraech",
     "ort": "Im Sekretariat",
     "zeilen": [
      {
       "wer": "Frau",
       "text": "Können wir den Besprechungsraum im dritten Stock auch für die Schulung nehmen?"
      },
      {
       "wer": "Mann",
       "text": "Nur vormittags. Ab eins ist der für die Geschäftsleitung reserviert."
      }
     ],
     "satz": "Der Raum steht nur am Vormittag zur Verfügung.",
     "loesung": true,
     "stelle": "Ab eins ist der für die Geschäftsleitung reserviert",
     "erklaerung": "„Nur vormittags\" ist eine Einschränkung, die die Aussage genau wiedergibt."
    },
    {
     "art": "gespraech",
     "ort": "In der Buchhaltung",
     "zeilen": [
      {
       "wer": "Mann",
       "text": "Ich schick die Rechnung an den Kunden, oder machst du das?"
      },
      {
       "wer": "Frau",
       "text": "Nee, mach du das. Ich ruf ihn aber vorher an und sag Bescheid, dass sie kommt."
      }
     ],
     "satz": "Die Frau schickt die Rechnung.",
     "loesung": false,
     "stelle": "Nee, mach du das",
     "erklaerung": "Sie ruft nur an. Die Rechnung schickt der Mann. Frag dich immer: Wer macht was?"
    },
    {
     "art": "gespraech",
     "ort": "Am Telefon",
     "zeilen": [
      {
       "wer": "Frau",
       "text": "Sie haben die Unterlagen also nicht bekommen?"
      },
      {
       "wer": "Mann",
       "text": "Doch, doch, die sind gestern gekommen. Ich hatte nur noch keine Zeit, sie durchzusehen."
      }
     ],
     "satz": "Der Mann hat die Unterlagen erhalten, aber noch nicht gelesen.",
     "loesung": true,
     "stelle": "Ich hatte nur noch keine Zeit, sie durchzusehen",
     "erklaerung": "„Doch\" widerspricht einer verneinten Frage: Er hat sie bekommen."
    },
    {
     "art": "gespraech",
     "ort": "Im Büro der Abteilungsleitung",
     "zeilen": [
      {
       "wer": "Mann",
       "text": "Können Sie die Präsentation bis morgen früh fertig machen?"
      },
      {
       "wer": "Frau",
       "text": "Na ja, theoretisch schon. Aber dann sitze ich bis Mitternacht hier, und die Zahlen vom Controlling hab ich auch noch nicht."
      }
     ],
     "satz": "Die Frau sagt ohne Bedenken zu.",
     "loesung": false,
     "stelle": "Aber dann sitze ich bis Mitternacht hier",
     "erklaerung": "„theoretisch schon. Aber\" ist eine höfliche Form von Ablehnung."
    },
    {
     "art": "gespraech",
     "ort": "Im Versand",
     "zeilen": [
      {
       "wer": "Frau",
       "text": "Wie viele Kartons brauchen wir?"
      },
      {
       "wer": "Mann",
       "text": "Zweihundert, hab ich gedacht. Aber nimm lieber zweihundertfünfzig, falls was kaputtgeht."
      },
      {
       "wer": "Frau",
       "text": "Okay, zweihundertfünfzig."
      }
     ],
     "satz": "Am Ende werden zweihundertfünfzig Kartons bestellt.",
     "loesung": true,
     "stelle": "Aber nimm lieber zweihundertfünfzig",
     "erklaerung": "Die erste Zahl ist nur der alte Gedanke. Zählt, was am Ende gilt."
    },
    {
     "art": "gespraech",
     "ort": "In der Montage",
     "zeilen": [
      {
       "wer": "Mann",
       "text": "Kommt der Kunde nächste Woche zur Abnahme?"
      },
      {
       "wer": "Frau",
       "text": "Wenn die Maschine bis Freitag läuft, ja. Sonst verschieben wir auf Dezember."
      }
     ],
     "satz": "Die Abnahme ist fest für nächste Woche vereinbart.",
     "loesung": false,
     "stelle": "Wenn die Maschine bis Freitag läuft, ja",
     "erklaerung": "„Wenn\" macht aus einer Zusage eine Bedingung. „fest\" passt deshalb nicht."
    },
    {
     "art": "gespraech",
     "ort": "Nach einem Vorstellungsgespräch",
     "zeilen": [
      {
       "wer": "Frau",
       "text": "Und, wie war der Bewerber?"
      },
      {
       "wer": "Mann",
       "text": "Fachlich top, wirklich. Nur im Team, da hab ich so meine Zweifel. Der hat die ganze Zeit nur von sich geredet."
      }
     ],
     "satz": "Der Mann hat Bedenken, ob der Bewerber ins Team passt.",
     "loesung": true,
     "stelle": "Nur im Team, da hab ich so meine Zweifel",
     "erklaerung": "„Zweifel\" wird in der Aussage mit „Bedenken\" umschrieben."
    }
   ]
  },
  {
   "id": "tbc1h2",
   "stufe": 1,
   "titel": "Einem Vortrag folgen",
   "zeichen": "🎤",
   "farbe": "gold",
   "mal": 1,
   "kurz": "„zuerst\", „bevor ich zu … komme\", „um es zusammenzufassen\": Diese Signale zeigen dir, wo du im Vortrag gerade bist.",
   "ziel": "Nach diesem Block nutzt du Gliederungssignale, um einem längeren Vortrag nach einmaligem Hören zu folgen.",
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Einleitung",
     "wer": "Frau",
     "text": "Ich möchte heute über drei Dinge sprechen: zuerst über die Zahlen aus dem letzten Jahr, dann über die Probleme im Versand und zum Schluss über unsere Pläne für das Frühjahr.",
     "frage": "Worüber spricht die Rednerin als Letztes?",
     "opt": [
      "Über die Zahlen aus dem letzten Jahr.",
      "Über die Pläne für das Frühjahr.",
      "Über die Probleme im Versand."
     ],
     "loesung": 1,
     "stelle": "zum Schluss über unsere Pläne für das Frühjahr",
     "erklaerung": "„zuerst, dann, zum Schluss\" ist der Fahrplan des Vortrags. Notiere ihn dir."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Übergang",
     "wer": "Mann",
     "text": "Bevor ich zu den Kosten komme, noch ein Wort zu den Lieferzeiten. Die haben sich im Herbst deutlich verbessert, von fünf auf drei Tage.",
     "frage": "Worüber spricht der Redner direkt danach?",
     "opt": [
      "Noch einmal über die Lieferzeiten.",
      "Über neue Lieferanten.",
      "Über die Kosten."
     ],
     "loesung": 2,
     "stelle": "Bevor ich zu den Kosten komme",
     "erklaerung": "„Bevor ich zu … komme\" kündigt das nächste Thema an. Die Lieferzeiten sind nur ein Einschub."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Homeoffice",
     "wer": "Frau",
     "text": "Man hört ja oft, dass Homeoffice die Produktivität senkt. Unsere eigenen Daten zeigen allerdings etwas anderes: Die Teams mit zwei Tagen zu Hause haben genauso viele Fälle abgeschlossen wie vorher.",
     "frage": "Was zeigen die Daten der Firma?",
     "opt": [
      "Homeoffice senkt die Produktivität.",
      "Die Produktivität ist gleich geblieben.",
      "Zu Hause wird mehr geschafft."
     ],
     "loesung": 1,
     "stelle": "genauso viele Fälle abgeschlossen wie vorher",
     "erklaerung": "„Man hört ja oft\" leitet eine fremde Meinung ein, „allerdings\" die eigene."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Arbeitsschutz",
     "wer": "Mann",
     "text": "Lassen Sie mich das an einem Beispiel zeigen. In unserem Werk in Kassel haben wir die Pausen anders gelegt, und die Zahl der kleinen Unfälle ist um ein Drittel zurückgegangen.",
     "frage": "Wozu dient das Beispiel aus Kassel?",
     "opt": [
      "Es soll eine Aussage anschaulich belegen.",
      "Es leitet ein ganz neues Thema ein.",
      "Es zeigt ein gescheitertes Projekt."
     ],
     "loesung": 0,
     "stelle": "Lassen Sie mich das an einem Beispiel zeigen",
     "erklaerung": "Nach „an einem Beispiel zeigen\" kommt ein Beleg für das, was vorher gesagt wurde."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Rückgriff",
     "wer": "Frau",
     "text": "Ich komme noch mal kurz auf die Frage von vorhin zurück, die mit den Überstunden. Da habe ich mich unklar ausgedrückt. Überstunden werden nicht ausbezahlt, sondern auf dem Zeitkonto gutgeschrieben.",
     "frage": "Was macht die Rednerin hier?",
     "opt": [
      "Sie beginnt ein neues Thema.",
      "Sie beantwortet eine neue Frage aus dem Publikum.",
      "Sie korrigiert eine frühere Aussage."
     ],
     "loesung": 2,
     "stelle": "Da habe ich mich unklar ausgedrückt",
     "erklaerung": "„Ich komme noch mal auf … zurück\" plus „unklar ausgedrückt\" bedeutet: Korrektur."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Neue Anlage",
     "wer": "Mann",
     "text": "Das klingt alles sehr positiv, ich weiß. Aber es gibt einen Haken, und den will ich Ihnen nicht verschweigen: Die neue Anlage braucht deutlich mehr Wartung als die alte.",
     "frage": "Was folgt auf den positiven Teil?",
     "opt": [
      "Ein Nachteil der neuen Anlage.",
      "Eine weitere Stärke der Anlage.",
      "Eine Zusammenfassung."
     ],
     "loesung": 0,
     "stelle": "Aber es gibt einen Haken",
     "erklaerung": "„einen Haken\" ist ein umgangssprachliches Wort für einen Nachteil."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Fazit",
     "wer": "Frau",
     "text": "Um es kurz zusammenzufassen: weniger Papier, schnellere Freigaben, aber am Anfang mehr Aufwand für die Schulung.",
     "frage": "Welcher Nachteil wird in der Zusammenfassung genannt?",
     "opt": [
      "Mehr Papier.",
      "Mehr Aufwand für die Schulung am Anfang.",
      "Langsamere Freigaben."
     ],
     "loesung": 1,
     "stelle": "aber am Anfang mehr Aufwand für die Schulung",
     "erklaerung": "In Zusammenfassungen steht der Nachteil oft nach einem „aber\" am Ende."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Ein letzter Punkt",
     "wer": "Mann",
     "text": "Ein Punkt noch, den ich fast vergessen hätte, und eigentlich ist er mir der wichtigste: Wer eine Maschine umbaut, muss das ab sofort im Schichtbuch eintragen. Ohne Ausnahme.",
     "frage": "Was betont der Redner besonders?",
     "opt": [
      "Dass er etwas vergessen hat.",
      "Dass Umbauten künftig eingetragen werden müssen.",
      "Dass es beim Schichtbuch Ausnahmen gibt."
     ],
     "loesung": 1,
     "stelle": "muss das ab sofort im Schichtbuch eintragen",
     "erklaerung": "„der wichtigste\" ist ein Signal: Jetzt kommt die Hauptsache."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Drei Vorteile",
     "wer": "Frau",
     "text": "Erstens sparen wir Platz im Lager. Zweitens, und das hat uns überrascht, sind die Fahrer zufriedener, weil sie weniger warten müssen. Drittens sinken natürlich die Kosten.",
     "frage": "Welcher Vorteil war für die Firma überraschend?",
     "opt": [
      "Weniger Platzbedarf im Lager.",
      "Niedrigere Kosten.",
      "Zufriedenere Fahrer."
     ],
     "loesung": 2,
     "stelle": "und das hat uns überrascht, sind die Fahrer zufriedener",
     "erklaerung": "Der Einschub „und das hat uns überrascht\" gehört zum zweiten Punkt."
    }
   ]
  },
  {
   "id": "tbc1h3",
   "stufe": 2,
   "titel": "Meinungen und Haltungen zuordnen",
   "zeichen": "⚖️",
   "farbe": "lila",
   "mal": 1,
   "kurz": "„grundsätzlich ja, nur …\", „ich will mich ja nicht beschweren, aber …\": Die eigentliche Meinung steht oft im zweiten Teil.",
   "ziel": "Nach diesem Block erkennst du die Haltung einer Person zu einem Arbeitsthema, auch wenn sie zuerst die Gegenseite nennt.",
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Diskussion: Vier-Tage-Woche",
     "wer": "Mann",
     "text": "Grundsätzlich finde ich die Idee gut, keine Frage. Nur, bei uns in der Pflege? Da muss jemand am Freitag die Patienten versorgen. Für Büros ja, für uns sehe ich das ehrlich gesagt nicht.",
     "frage": "Welche Haltung hat der Mann?",
     "opt": [
      "Er findet sie gut, aber nicht für seinen Bereich.",
      "Er lehnt die Vier-Tage-Woche ganz ab.",
      "Er will sie sofort in der Pflege einführen."
     ],
     "loesung": 0,
     "stelle": "für uns sehe ich das ehrlich gesagt nicht",
     "erklaerung": "„Grundsätzlich gut, nur\" heißt: Zustimmung mit Einschränkung."
    },
    {
     "art": "hoerwahl",
     "ort": "Umfrage: Offene Gehälter",
     "wer": "Frau",
     "text": "Viele sagen, wenn alle wissen, was die anderen verdienen, gibt es Neid. Ich sehe das umgekehrt. Neid gibt es gerade dann, wenn keiner was weiß und alle nur vermuten.",
     "frage": "Was meint die Frau?",
     "opt": [
      "Gerade das Nichtwissen über Gehälter führt zu Neid.",
      "Offene Gehälter führen zu Neid.",
      "Über Gehälter sollte man nicht sprechen."
     ],
     "loesung": 0,
     "stelle": "Neid gibt es gerade dann, wenn keiner was weiß",
     "erklaerung": "„Viele sagen\" ist die fremde Meinung, „Ich sehe das umgekehrt\" ihre eigene."
    },
    {
     "art": "hoerwahl",
     "ort": "Diskussion: Neue Programme im Büro",
     "wer": "Mann",
     "text": "Ich will da gar nicht schwarzmalen. Die Programme nehmen uns lästige Arbeit ab, Protokolle, Zusammenfassungen. Aber wer prüft am Ende, ob das stimmt? Das kann nur jemand, der das Fach versteht.",
     "frage": "Was ist dem Mann wichtig?",
     "opt": [
      "Dass Programme keine Protokolle schreiben.",
      "Dass Fachleute die Ergebnisse kontrollieren.",
      "Dass die Programme bald alle Arbeit übernehmen."
     ],
     "loesung": 1,
     "stelle": "Das kann nur jemand, der das Fach versteht",
     "erklaerung": "Er sieht den Nutzen, betont aber die Kontrolle durch Fachleute."
    },
    {
     "art": "hoerwahl",
     "ort": "Betriebsversammlung: Kantine",
     "wer": "Frau",
     "text": "Also, ich will mich ja nicht beschweren, aber dass das Essen schon wieder teurer wird, ohne dass sich irgendwas an der Qualität ändert, das versteht bei uns in der Abteilung keiner.",
     "frage": "Wie steht die Frau zur Preiserhöhung?",
     "opt": [
      "Sie findet sie verständlich.",
      "Sie ist ihr egal.",
      "Sie ärgert sich darüber."
     ],
     "loesung": 2,
     "stelle": "das versteht bei uns in der Abteilung keiner",
     "erklaerung": "„ich will mich ja nicht beschweren, aber\" leitet fast immer eine Beschwerde ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Teamrunde: Weiterbildung",
     "wer": "Mann",
     "text": "Ob der Kurs etwas bringt? Schwer zu sagen. Ich war zwei Tage weg, und hier ist die Arbeit liegen geblieben. Fragen Sie mich in einem halben Jahr noch mal.",
     "frage": "Wie bewertet der Mann den Kurs?",
     "opt": [
      "Sehr positiv.",
      "Er kann es noch nicht beurteilen.",
      "Eindeutig negativ."
     ],
     "loesung": 1,
     "stelle": "Fragen Sie mich in einem halben Jahr noch mal",
     "erklaerung": "Die liegen gebliebene Arbeit ist ein Ärgernis, aber kein Urteil über den Kurs."
    },
    {
     "art": "hoerwahl",
     "ort": "Diskussion: Zeiterfassung",
     "wer": "Frau",
     "text": "Ich war am Anfang wirklich dagegen, das muss ich zugeben. Aber seit ich sehe, wie viele Überstunden ich eigentlich mache, hab ich meine Meinung geändert.",
     "frage": "Wie hat sich die Haltung der Frau entwickelt?",
     "opt": [
      "Sie war dagegen und ist jetzt dafür.",
      "Sie war dagegen und ist es noch.",
      "Sie war immer dafür."
     ],
     "loesung": 0,
     "stelle": "hab ich meine Meinung geändert",
     "erklaerung": "„am Anfang\" und „seit\" zeigen eine Entwicklung der Meinung."
    },
    {
     "art": "hoerwahl",
     "ort": "Podiumsgespräch: Fachkräfte aus dem Ausland",
     "wer": "Mann",
     "text": "Natürlich brauchen wir die Leute, das bestreitet doch keiner. Die Frage ist nur, warum es dann ein Jahr dauert, bis ein Zeugnis anerkannt ist.",
     "frage": "Was kritisiert der Mann?",
     "opt": [
      "Dass Fachkräfte aus dem Ausland kommen.",
      "Dass Zeugnisse zu schnell anerkannt werden.",
      "Dass die Anerkennung so lange dauert."
     ],
     "loesung": 2,
     "stelle": "warum es dann ein Jahr dauert",
     "erklaerung": "„Die Frage ist nur\" leitet die eigentliche Kritik ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Teamrunde: Neues Programm",
     "wer": "Frau",
     "text": "Na ja, das Programm ist halt neu. Am Anfang war ich auch genervt, aber ehrlich gesagt geht vieles inzwischen schneller als mit dem alten. Nur die Suche, die ist eine Katastrophe.",
     "frage": "Wie beurteilt die Frau das neue Programm?",
     "opt": [
      "Insgesamt eher positiv, mit einer Schwäche.",
      "Durchweg schlecht.",
      "Ohne jede Schwäche."
     ],
     "loesung": 0,
     "stelle": "Nur die Suche, die ist eine Katastrophe",
     "erklaerung": "Ein starkes Wort wie „Katastrophe\" betrifft hier nur einen Teil."
    },
    {
     "art": "hoerwahl",
     "ort": "Diskussion: Mitarbeiter bewerten Chefs",
     "wer": "Mann",
     "text": "Dass Mitarbeiter ihre Chefs bewerten, halte ich für richtig. Aber anonym? Dann schreibt jeder, was er will, und keiner muss es begründen. Ich würde die Leute mit Namen unterschreiben lassen.",
     "frage": "Was schlägt der Mann vor?",
     "opt": [
      "Gar keine Bewertung der Chefs.",
      "Eine anonyme Bewertung.",
      "Eine Bewertung mit Namen."
     ],
     "loesung": 2,
     "stelle": "Ich würde die Leute mit Namen unterschreiben lassen",
     "erklaerung": "Er ist für die Bewertung, aber gegen die Anonymität."
    }
   ]
  },
  {
   "id": "tbc1h4",
   "stufe": 2,
   "titel": "Besprechungen: Wer will was?",
   "zeichen": "🗂️",
   "farbe": "rot",
   "mal": 1,
   "kurz": "Vorschlag, Einwand, Beschluss: In Besprechungen zählt, was am Ende gilt und wer es übernimmt.",
   "ziel": "Nach diesem Block unterscheidest du in Besprechungen Vorschläge von Beschlüssen und erkennst, wer welche Aufgabe übernimmt.",
   "aufgaben": [
    {
     "art": "gespraech",
     "ort": "Besprechung im Einkauf",
     "zeilen": [
      {
       "wer": "Frau",
       "text": "Ich wäre dafür, dass wir bei Firma Kroll bleiben. Die sind teurer, aber zuverlässig."
      },
      {
       "wer": "Mann",
       "text": "Herr Lenz aus dem Controlling sieht das anders, der will den günstigsten."
      },
      {
       "wer": "Frau",
       "text": "Herr Lenz muss ja auch nicht die Bänder anhalten, wenn nichts kommt."
      }
     ],
     "frage": "Was will die Frau?",
     "opt": [
      "Den günstigsten Lieferanten.",
      "Beim bisherigen Lieferanten bleiben.",
      "Herrn Lenz entscheiden lassen."
     ],
     "loesung": 1,
     "stelle": "dass wir bei Firma Kroll bleiben",
     "erklaerung": "Den günstigsten will Herr Lenz. Sie hält Zuverlässigkeit für wichtiger."
    },
    {
     "art": "gespraech",
     "ort": "Projektbesprechung",
     "zeilen": [
      {
       "wer": "Mann",
       "text": "Gut, dann ist das beschlossen: Der Testlauf startet am zwölften."
      },
      {
       "wer": "Frau",
       "text": "Moment, beschlossen würde ich das noch nicht nennen. Die Freigabe vom Datenschutz fehlt noch."
      },
      {
       "wer": "Mann",
       "text": "Stimmt. Dann sagen wir: am zwölften, wenn die Freigabe bis dahin da ist."
      }
     ],
     "satz": "Der Testlauf beginnt auf jeden Fall am zwölften.",
     "loesung": false,
     "stelle": "am zwölften, wenn die Freigabe bis dahin da ist",
     "erklaerung": "Der Beschluss wird nach dem Einwand an eine Bedingung geknüpft."
    },
    {
     "art": "gespraech",
     "ort": "Teambesprechung",
     "zeilen": [
      {
       "wer": "Frau",
       "text": "Wer übernimmt heute das Protokoll?"
      },
      {
       "wer": "Mann",
       "text": "Ich hab das letzte Mal gemacht. Vielleicht Frau Kraft?"
      },
      {
       "wer": "Frau",
       "text": "Frau Kraft ist heute nicht da. Dann mache ich es eben selbst."
      }
     ],
     "satz": "Frau Kraft schreibt heute das Protokoll.",
     "loesung": false,
     "stelle": "Frau Kraft ist heute nicht da",
     "erklaerung": "Ein Vorschlag ist noch keine Entscheidung. Am Ende schreibt die Leiterin."
    },
    {
     "art": "gespraech",
     "ort": "Abteilungsbesprechung",
     "zeilen": [
      {
       "wer": "Mann",
       "text": "Ich schlage vor, wir verschieben die Entscheidung auf nächste Woche, bis wir die Zahlen haben."
      },
      {
       "wer": "Frau",
       "text": "Einverstanden. Aber dann wirklich nächste Woche, nicht wieder in einem Monat."
      },
      {
       "wer": "Mann",
       "text": "Versprochen."
      }
     ],
     "frage": "Was wird beschlossen?",
     "opt": [
      "Es wird sofort entschieden.",
      "Die Entscheidung wird um einen Monat verschoben.",
      "Die Entscheidung wird um eine Woche verschoben."
     ],
     "loesung": 2,
     "stelle": "wir verschieben die Entscheidung auf nächste Woche",
     "erklaerung": "„einem Monat\" ist das, was die Frau ausdrücklich nicht will."
    },
    {
     "art": "gespraech",
     "ort": "Besprechung zur Messe",
     "zeilen": [
      {
       "wer": "Frau",
       "text": "Herr Yilmaz, Sie wollten doch unbedingt einen größeren Stand."
      },
      {
       "wer": "Mann",
       "text": "Wollte ich, ja. Aber nachdem ich die Preise gesehen hab, bin ich mit dem kleinen ganz zufrieden. Lieber geben wir das Geld für gute Prospekte aus."
      }
     ],
     "satz": "Herr Yilmaz will inzwischen keinen größeren Stand mehr.",
     "loesung": true,
     "stelle": "bin ich mit dem kleinen ganz zufrieden",
     "erklaerung": "„Wollte ich, ja. Aber\" zeigt, dass er seine Meinung geändert hat."
    },
    {
     "art": "gespraech",
     "ort": "Besprechung in der Verwaltung",
     "zeilen": [
      {
       "wer": "Mann",
       "text": "Können wir uns darauf einigen, dass Anfragen von Bürgern innerhalb von drei Tagen beantwortet werden?"
      },
      {
       "wer": "Frau",
       "text": "Drei Tage ist sportlich. Ich würde fünf Arbeitstage sagen, das schaffen wir auch in der Urlaubszeit."
      },
      {
       "wer": "Mann",
       "text": "Gut, fünf Arbeitstage. Aber dann ohne Ausnahme."
      }
     ],
     "frage": "Worauf einigt man sich?",
     "opt": [
      "Auf drei Tage.",
      "Auf fünf Arbeitstage.",
      "Auf andere Fristen in der Urlaubszeit."
     ],
     "loesung": 1,
     "stelle": "Gut, fünf Arbeitstage. Aber dann ohne Ausnahme",
     "erklaerung": "„sportlich\" heißt hier: zu knapp. Der Mann übernimmt den Gegenvorschlag."
    },
    {
     "art": "gespraech",
     "ort": "Besprechung im Lager",
     "zeilen": [
      {
       "wer": "Frau",
       "text": "Wer ist eigentlich zuständig, wenn der Gabelstapler wieder kaputt ist?"
      },
      {
       "wer": "Mann",
       "text": "Bisher hat das immer Herr Klein gemacht, aber der ist ja seit Oktober in Rente."
      },
      {
       "wer": "Frau",
       "text": "Dann machen wir es so: Sie rufen den Service an, und ich unterschreibe die Rechnung."
      }
     ],
     "satz": "Künftig ruft die Frau den Service an.",
     "loesung": false,
     "stelle": "Sie rufen den Service an, und ich unterschreibe die Rechnung",
     "erklaerung": "Sie verteilt die Aufgaben: Anrufen macht der Mann, sie unterschreibt nur."
    },
    {
     "art": "gespraech",
     "ort": "Besprechung zur Weihnachtsfeier",
     "zeilen": [
      {
       "wer": "Mann",
       "text": "Also, ich höre heraus, dass die meisten lieber ein Essen im Restaurant wollen als die Feier hier in der Kantine."
      },
      {
       "wer": "Frau",
       "text": "Die meisten ja. Nur die Spätschicht hat Bedenken, die kommen abends nicht weg."
      },
      {
       "wer": "Mann",
       "text": "Dann machen wir es mittags. Dann können alle."
      }
     ],
     "satz": "Die Feier findet mittags in einem Restaurant statt.",
     "loesung": true,
     "stelle": "Dann machen wir es mittags",
     "erklaerung": "Ort und Zeit ergeben sich aus zwei Stellen im Gespräch."
    },
    {
     "art": "gespraech",
     "ort": "Besprechung mit dem Betriebsrat",
     "zeilen": [
      {
       "wer": "Frau",
       "text": "Wir können der Regelung grundsätzlich zustimmen. Unter einer Bedingung: Die Zuschläge für Samstag bleiben."
      },
      {
       "wer": "Mann",
       "text": "Darüber müssen wir noch reden, das kann ich heute nicht zusagen."
      },
      {
       "wer": "Frau",
       "text": "Dann stimmen wir heute auch nicht zu."
      }
     ],
     "frage": "Wie endet das Gespräch?",
     "opt": [
      "Ohne Einigung, weil eine Bedingung offen ist.",
      "Mit einer Einigung.",
      "Mit einer Zusage zu den Zuschlägen."
     ],
     "loesung": 0,
     "stelle": "Dann stimmen wir heute auch nicht zu",
     "erklaerung": "„grundsätzlich\" ist noch keine Zustimmung, wenn eine Bedingung offen bleibt."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "gespraech",
   "name": "Hören: Zwei Gespräche",
   "kurz": "Zwei Gespräche, nur EINMAL hören",
   "was": "Zwei Gespräche am Arbeitsplatz, in Abschnitten. Vier Aussagen richtig oder falsch und zwei Aufgaben a/b/c. Du hörst alles nur einmal.",
   "tipp": "Lies die Aussage vor dem Abschnitt. Achte auf Einschränkungen: „erst\", „nur noch\", „doch nicht\".",
   "zeichen": "💬",
   "farbe": "turq",
   "punkte": 6,
   "mal": 1,
   "runden": [
    {
     "id": "bc1h1s1",
     "titel": "Lieferung an der Grenze · Neue Kollegin in der Buchhaltung",
     "aufgaben": [
      {
       "ort": "Gespräch 1 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Frau Wendt, haben Sie einen Moment? Es geht um die Lieferung aus Tschechien."
        },
        {
         "wer": "Frau",
         "text": "Die Glasplatten? Die sollten doch um sieben Uhr hier sein."
        },
        {
         "wer": "Mann",
         "text": "Eben. Der Fahrer hat gerade angerufen, er steht seit zwei Stunden an der Grenze, irgendwas mit den Papieren. Er meint, vor Mittag wird das nichts."
        },
        {
         "wer": "Frau",
         "text": "Na toll. Und wir haben die Leute von der Frühschicht extra für die Entladung eingeteilt."
        }
       ],
       "satz": "Die Lieferung verspätet sich wegen eines Problems mit Dokumenten.",
       "loesung": true,
       "stelle": "er steht seit zwei Stunden an der Grenze, irgendwas mit den Papieren",
       "erklaerung": "„Papieren\" meint hier Dokumente. Deshalb steht der Fahrer an der Grenze fest."
      },
      {
       "ort": "Gespräch 1 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ich hab mir schon überlegt, ob wir die Leute erst mal auf die Retouren setzen. Da stehen noch, ich weiß nicht, vierzig Paletten oder so."
        },
        {
         "wer": "Frau",
         "text": "Vierzig? Ich dachte, die hat Herr Brandl letzte Woche abgearbeitet."
        },
        {
         "wer": "Mann",
         "text": "Hat er auch, zum Teil. Aber am Freitag kam ja noch die große Rücksendung vom Baumarkt in Fulda."
        },
        {
         "wer": "Frau",
         "text": "Stimmt, die hatte ich ganz vergessen. Gut, machen wir so. Aber sagen Sie den Leuten bitte selbst Bescheid, ich muss gleich in die Besprechung mit dem Einkauf."
        }
       ],
       "satz": "Die Frau will die Mitarbeiter selbst über die neue Aufgabe informieren.",
       "loesung": false,
       "stelle": "sagen Sie den Leuten bitte selbst Bescheid",
       "erklaerung": "Sie bittet den Mann, das zu übernehmen, weil sie selbst in eine Besprechung muss."
      },
      {
       "ort": "Gespräch 1 — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Mach ich. Und was ist mit dem Kunden? Der wartet doch auf die Platten."
        },
        {
         "wer": "Frau",
         "text": "Moment, welcher Kunde war das noch mal? Ach ja, die Glaserei Hoffmann. Die brauchen die Ware erst übermorgen, das ist also nicht so dramatisch. Rufen Sie da trotzdem an, bevor die bei uns anrufen. Das kommt immer besser an."
        },
        {
         "wer": "Mann",
         "text": "Und wenn der Fahrer heute gar nicht mehr kommt?"
        },
        {
         "wer": "Frau",
         "text": "Dann reden wir am Nachmittag noch mal. Erst mal abwarten."
        }
       ],
       "frage": "Warum soll der Mann die Glaserei anrufen?",
       "opt": [
        "Weil die Glaserei die Ware noch heute braucht.",
        "Weil die Lieferung wahrscheinlich ganz ausfällt.",
        "Weil es besser ist, sich zu melden, bevor der Kunde nachfragt."
       ],
       "loesung": 2,
       "stelle": "Rufen Sie da trotzdem an, bevor die bei uns anrufen",
       "erklaerung": "Die Ware wird erst übermorgen gebraucht. Der Anruf ist reine Höflichkeit gegenüber dem Kunden."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Aydin, gut, dass ich Sie treffe. Am Montag fängt doch Frau Lindqvist bei uns in der Buchhaltung an."
        },
        {
         "wer": "Mann",
         "text": "Ja, genau. Ist so weit alles vorbereitet?"
        },
        {
         "wer": "Frau",
         "text": "Fast. Der Laptop ist da, aber die Zugänge für das Buchhaltungsprogramm fehlen noch. Herr Kunze von der Systembetreuung sagt, das dauert bis Mittwoch."
        },
        {
         "wer": "Mann",
         "text": "Bis Mittwoch? Dann sitzt sie ja zwei Tage nur rum."
        }
       ],
       "satz": "Die neue Kollegin kann vom ersten Tag an mit dem Buchhaltungsprogramm arbeiten.",
       "loesung": false,
       "stelle": "die Zugänge für das Buchhaltungsprogramm fehlen noch",
       "erklaerung": "Die Zugänge kommen erst am Mittwoch, sie fängt aber am Montag an."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Na ja, rumsitzen nicht. Ich dachte, sie könnte die ersten Tage bei Frau Petrović mitlaufen. Die macht ja genau das, was Frau Lindqvist später übernimmt, die Reisekosten."
        },
        {
         "wer": "Mann",
         "text": "Hat Frau Petrović da überhaupt Zeit? Die steckt doch mitten im Monatsabschluss."
        },
        {
         "wer": "Frau",
         "text": "Hab ich sie gefragt. Sie meint, gerade deshalb. Da sieht die Neue gleich, wie es bei uns wirklich läuft, wenn es eng wird, und nicht nur, wie es im Handbuch steht."
        }
       ],
       "satz": "Frau Petrović findet es sinnvoll, dass die neue Kollegin in einer stressigen Phase zuschaut.",
       "loesung": true,
       "stelle": "Sie meint, gerade deshalb",
       "erklaerung": "„gerade deshalb\" heißt: wegen des Monatsabschlusses ist es eine gute Gelegenheit."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gut. Und am ersten Tag, wer holt sie am Empfang ab?"
        },
        {
         "wer": "Frau",
         "text": "Eigentlich wollte ich das machen, aber ich hab um neun einen Termin beim Steuerberater, der lässt sich nicht schieben. Könnten Sie das übernehmen? Nur kurz begrüßen, Ausweis abholen, Büro zeigen. Um elf bin ich zurück, dann gehe ich mit ihr die Unterlagen durch."
        },
        {
         "wer": "Mann",
         "text": "Klar, mach ich. Ich bin ab acht im Haus."
        }
       ],
       "frage": "Was soll der Mann am Montag tun?",
       "opt": [
        "Die neue Kollegin empfangen und ihr das Büro zeigen.",
        "Mit der neuen Kollegin die Unterlagen durchgehen.",
        "Für die Frau zum Steuerberater gehen."
       ],
       "loesung": 0,
       "stelle": "Nur kurz begrüßen, Ausweis abholen, Büro zeigen",
       "erklaerung": "Die Unterlagen macht die Frau selbst ab elf Uhr."
      }
     ]
    },
    {
     "id": "bc1h1s2",
     "titel": "Stillstand an Linie drei · Tausch im Dienstplan",
     "aufgaben": [
      {
       "ort": "Gespräch 1 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Lorenz, Linie drei steht schon wieder. Haben Sie das mitbekommen?"
        },
        {
         "wer": "Mann",
         "text": "Ja, seit zwanzig Minuten. Das ist wieder der Sensor an der Verpackungsmaschine, der meldet einen Fehler, obwohl gar keiner da ist. Das hatten wir letzte Woche zweimal."
        },
        {
         "wer": "Frau",
         "text": "Und der Hersteller? Die wollten doch jemanden schicken."
        },
        {
         "wer": "Mann",
         "text": "Wollten sie, ja. Der Techniker kommt aber frühestens Donnerstag."
        }
       ],
       "satz": "Der Fehler an der Maschine ist diese Woche zum ersten Mal aufgetreten.",
       "loesung": false,
       "stelle": "Das hatten wir letzte Woche zweimal",
       "erklaerung": "Der Fehler ist schon letzte Woche zweimal vorgekommen, er ist also nicht neu."
      },
      {
       "ort": "Gespräch 1 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Donnerstag ist zu spät. Wir haben den Auftrag für die Kühlboxen, der muss Freitag raus."
        },
        {
         "wer": "Mann",
         "text": "Weiß ich. Ich könnte den Sensor überbrücken, dann läuft die Linie wieder. Aber ehrlich gesagt, wohl ist mir dabei nicht. Wenn dann wirklich mal was klemmt, merkt es keiner."
        },
        {
         "wer": "Frau",
         "text": "Nee, das lassen wir. Wenn da was passiert, bin ich dran. Und Sie auch."
        }
       ],
       "satz": "Die Frau ist dagegen, den Sensor auszuschalten.",
       "loesung": true,
       "stelle": "Nee, das lassen wir",
       "erklaerung": "Der Mann schlägt die Überbrückung vor, die Frau lehnt sie wegen der Sicherheit ab."
      },
      {
       "ort": "Gespräch 1 — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Dann bleibt eigentlich nur Linie fünf. Die ist langsamer, aber die könnte die Kühlboxen auch verpacken."
        },
        {
         "wer": "Frau",
         "text": "Und was läuft da gerade?"
        },
        {
         "wer": "Mann",
         "text": "Die Musterteile für den neuen Kunden aus Linz. Die sind nicht eilig, die könnten wir auf nächste Woche schieben. Ich müsste nur vorher kurz mit dem Vertrieb reden, nicht dass die dem Kunden schon einen Termin versprochen haben."
        },
        {
         "wer": "Frau",
         "text": "Machen Sie das. Und geben Sie mir bis zehn Bescheid."
        }
       ],
       "frage": "Was will der Mann vor dem Umplanen noch klären?",
       "opt": [
        "Ob Linie fünf schnell genug ist.",
        "Ob der Vertrieb dem Kunden schon einen Termin zugesagt hat.",
        "Ob der Techniker früher kommen kann."
       ],
       "loesung": 1,
       "stelle": "nicht dass die dem Kunden schon einen Termin versprochen haben",
       "erklaerung": "Er will die Musterteile verschieben, aber nur, wenn der Vertrieb nichts versprochen hat."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Jonas, hast du kurz? Ich hab eine Bitte wegen dem Dienstplan."
        },
        {
         "wer": "Mann",
         "text": "Wenn es nicht wieder Weihnachten ist, gern."
        },
        {
         "wer": "Frau",
         "text": "Nein, keine Sorge. Es geht um nächsten Samstag. Da hab ich Frühdienst, und meine Schwester heiratet. Ich hab das echt verschwitzt, als ich meine Wünsche eingetragen hab."
        },
        {
         "wer": "Mann",
         "text": "Ach so, und jetzt suchst du jemanden."
        }
       ],
       "satz": "Die Frau hat den Samstag rechtzeitig als freien Tag gewünscht.",
       "loesung": false,
       "stelle": "Ich hab das echt verschwitzt, als ich meine Wünsche eingetragen hab",
       "erklaerung": "„verschwitzt\" heißt vergessen. Sie hat den Wunsch eben nicht eingetragen."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Also Samstag früh, das ginge bei mir. Ich hab da Spätdienst, und ehrlich gesagt ist mir früh sogar lieber, dann hab ich den Abend frei."
        },
        {
         "wer": "Frau",
         "text": "Echt? Dann würde ich deinen Spätdienst übernehmen?"
        },
        {
         "wer": "Mann",
         "text": "Nee, warte. Den Spätdienst brauchst du ja nicht, du willst ja den ganzen Tag weg. Nimm lieber meinen Sonntag, da hab ich nämlich auch Spätdienst."
        }
       ],
       "satz": "Der Mann schlägt vor, dass die Frau einen Dienst an einem anderen Tag übernimmt.",
       "loesung": true,
       "stelle": "Nimm lieber meinen Sonntag",
       "erklaerung": "Er korrigiert sich selbst: Am Samstag soll sie gar nicht arbeiten, deshalb der Sonntag."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Super, danke dir. Muss ich das jetzt irgendwo eintragen?"
        },
        {
         "wer": "Mann",
         "text": "Du schreibst Frau Albers eine kurze Mail, dass wir tauschen, und ich setz mich in Kopie. Mündlich reicht ihr nicht, das hat sie schon zigmal gesagt."
        },
        {
         "wer": "Frau",
         "text": "Ach ja, stimmt, nach dem Ärger im Sommer."
        },
        {
         "wer": "Mann",
         "text": "Genau. Und mach es heute noch, der Plan geht morgen raus."
        }
       ],
       "frage": "Wie wird der Tausch geregelt?",
       "opt": [
        "Die Frau sagt der Stationsleitung mündlich Bescheid.",
        "Die Frau schreibt eine Mail an Frau Albers.",
        "Der Mann trägt den Tausch selbst in den Plan ein."
       ],
       "loesung": 1,
       "stelle": "Du schreibst Frau Albers eine kurze Mail",
       "erklaerung": "Ein mündlicher Hinweis reicht Frau Albers ausdrücklich nicht."
      }
     ]
    },
    {
     "id": "bc1h1s3",
     "titel": "Eine Reklamation · Der Umzug ins neue Gebäude",
     "aufgaben": [
      {
       "ort": "Gespräch 1 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Frau Seidel, ich hab hier eine Reklamation von der Firma Kranich, die Bürostühle."
        },
        {
         "wer": "Frau",
         "text": "Schon wieder die Rollen?"
        },
        {
         "wer": "Mann",
         "text": "Nein, diesmal nicht. Diesmal ist es die Farbe. Die haben anthrazit bestellt, und gekommen ist schwarz. Bei sechzig Stühlen."
        },
        {
         "wer": "Frau",
         "text": "Oh je. Haben wir das falsch erfasst, oder hat das Lager falsch gepackt?"
        }
       ],
       "satz": "Der Kunde beschwert sich über ein technisches Problem.",
       "loesung": false,
       "stelle": "Diesmal ist es die Farbe",
       "erklaerung": "Die Rollen waren das alte Problem. Jetzt geht es nur um die falsche Farbe."
      },
      {
       "ort": "Gespräch 1 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ich hab nachgeschaut. In der Auftragsbestätigung steht schwarz. Also der Fehler liegt bei uns, nicht beim Lager."
        },
        {
         "wer": "Frau",
         "text": "Und der Kunde hat die Bestätigung unterschrieben?"
        },
        {
         "wer": "Mann",
         "text": "Ja, hat er. Theoretisch könnten wir also sagen, Pech gehabt. Aber das ist unser größter Kunde in Thüringen, und die bestellen nächsten Monat für ihr neues Gebäude."
        },
        {
         "wer": "Frau",
         "text": "Eben. Da fangen wir jetzt keinen Streit an."
        }
       ],
       "satz": "Formal hätte die Firma einen Grund, die Reklamation abzulehnen.",
       "loesung": true,
       "stelle": "Theoretisch könnten wir also sagen, Pech gehabt",
       "erklaerung": "Der Kunde hat die falsche Bestätigung unterschrieben. Trotzdem will die Firma kulant sein."
      },
      {
       "ort": "Gespräch 1 — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was schlagen Sie vor? Alle sechzig tauschen?"
        },
        {
         "wer": "Mann",
         "text": "Das wird teuer, die Fracht allein. Ich würde anbieten, dass sie die schwarzen behalten, mit fünfzehn Prozent Nachlass. Und wenn sie das nicht wollen, tauschen wir. Aber ich glaube, die nehmen den Rabatt. Am Telefon klang die Dame eher entspannt."
        },
        {
         "wer": "Frau",
         "text": "Gut. Aber rufen Sie erst an, bevor Sie was schriftlich machen."
        }
       ],
       "frage": "Was will der Mann dem Kunden zuerst anbieten?",
       "opt": [
        "Die Stühle sofort kostenlos auszutauschen.",
        "Einen Rabatt auf die nächste Bestellung.",
        "Einen Preisnachlass, wenn der Kunde die Stühle behält."
       ],
       "loesung": 2,
       "stelle": "dass sie die schwarzen behalten, mit fünfzehn Prozent Nachlass",
       "erklaerung": "Der Tausch kommt nur, wenn der Kunde den Nachlass ablehnt."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Sag mal, Katrin, weißt du schon, wo wir im neuen Gebäude sitzen?"
        },
        {
         "wer": "Frau",
         "text": "Zweiter Stock, auf der Seite zum Parkplatz. Ich hab den Plan gestern bei der Teamleitung gesehen."
        },
        {
         "wer": "Mann",
         "text": "Parkplatzseite. Hm. Ich hatte gehofft, wir kriegen die Seite zum Park."
        },
        {
         "wer": "Frau",
         "text": "Ja, ich auch. Die hat aber das Controlling bekommen. Die haben wohl früher gefragt."
        }
       ],
       "satz": "Die Frau hat den Raumplan schon gesehen.",
       "loesung": true,
       "stelle": "Ich hab den Plan gestern bei der Teamleitung gesehen",
       "erklaerung": "Sie weiß es aus dem Plan, den sie gestern gesehen hat."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und stimmt das, dass es keine festen Plätze mehr gibt?"
        },
        {
         "wer": "Frau",
         "text": "Für uns nicht, nein. Für jeweils zehn Leute gibt es acht Schreibtische, weil ja eh immer jemand im Homeoffice ist. Wer zuerst kommt, sucht sich einen aus."
        },
        {
         "wer": "Mann",
         "text": "Na, dann bin ich gespannt, wie das montags aussieht. Montags sind ja alle da."
        },
        {
         "wer": "Frau",
         "text": "Das hab ich auch gesagt. Die Antwort war, dann müssen wir uns eben absprechen."
        }
       ],
       "satz": "Im neuen Gebäude hat jeder Mitarbeiter einen eigenen Schreibtisch.",
       "loesung": false,
       "stelle": "Für jeweils zehn Leute gibt es acht Schreibtische",
       "erklaerung": "Es gibt weniger Tische als Personen und keine festen Plätze."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und unsere Ordner? Ich hab da drei Schränke voll mit Verträgen."
        },
        {
         "wer": "Frau",
         "text": "Die müssen bis Ende des Monats eingescannt sein, hat es geheißen. Papier zieht nur mit, was gesetzlich im Original aufbewahrt werden muss, und das kommt ins Archiv im Keller."
        },
        {
         "wer": "Mann",
         "text": "Bis Ende des Monats? Das schaffe ich nie allein."
        },
        {
         "wer": "Frau",
         "text": "Musst du auch nicht. Es gibt zwei Werkstudenten, die nur das machen. Du musst sie nur rechtzeitig anfragen."
        }
       ],
       "frage": "Was passiert mit den Verträgen in Papierform?",
       "opt": [
        "Sie werden digitalisiert, und nur bestimmte Originale kommen ins Archiv.",
        "Der Mann muss alle Verträge allein einscannen.",
        "Sie kommen vollständig mit an die neuen Arbeitsplätze."
       ],
       "loesung": 0,
       "stelle": "Papier zieht nur mit, was gesetzlich im Original aufbewahrt werden muss",
       "erklaerung": "Alles wird eingescannt. Allein muss er es nicht machen, es gibt Werkstudenten dafür."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "vortrag",
   "name": "Hören: Vortrag",
   "kurz": "Ein Vortrag, acht Aufgaben a/b/c",
   "was": "Ein Vortrag auf einer Fachtagung oder Betriebsversammlung, in acht Abschnitten. Zu jedem Abschnitt eine Aufgabe mit drei Antworten. Nur einmal hören.",
   "tipp": "Gliederungssignale helfen: „zunächst\", „ein zweiter Punkt\", „daraus folgt\", „abschließend\".",
   "zeichen": "🎤",
   "farbe": "gold",
   "punkte": 8,
   "mal": 1,
   "runden": [
    {
     "id": "bc1h2s1",
     "titel": "Betriebsversammlung: Das neue Schichtmodell",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Mann",
       "text": "Guten Morgen zusammen. Ich weiß, die Kantine ist nicht der gemütlichste Ort für eine Betriebsversammlung, aber in die Halle hätten wir heute nicht alle reingepasst, da steht ja noch die neue Presse rum. Also, ich komme gleich zur Sache. Viele von Ihnen haben in den letzten Wochen gehört, dass wir die Nachtschicht abschaffen. Das stimmt so nicht. Wir schaffen sie nicht ab, wir ändern sie. Und wie genau, das will ich Ihnen heute erklären, bevor Sie es wieder von irgendwem auf dem Parkplatz erfahren.",
       "frage": "Warum spricht der Werksleiter heute zu den Mitarbeitern?",
       "opt": [
        "Um ein falsches Gerücht über die Nachtschicht richtigzustellen.",
        "Um die Abschaffung der Nachtschicht anzukündigen.",
        "Um die neue Presse in der Halle vorzustellen."
       ],
       "loesung": 0,
       "stelle": "Wir schaffen sie nicht ab, wir ändern sie",
       "erklaerung": "Die Abschaffung ist das Gerücht. Er stellt klar: Die Nachtschicht wird nur verändert."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Mann",
       "text": "Erst mal zum Hintergrund. Wir haben seit drei Jahren das klassische Modell, früh, spät, nachts, jede Woche wechselnd. Auf dem Papier ist das gerecht, jeder macht alles. In der Praxis haben wir aber ein Problem, und das sieht man an den Zahlen vom Betriebsarzt. Die Krankmeldungen in der Woche nach der Nachtschicht sind fast doppelt so hoch wie sonst. Und, das hat mich ehrlich gesagt überrascht, nicht bei den Älteren, sondern bei den Kollegen unter dreißig. Die schlafen nach der Nachtwoche offenbar am schlechtesten, wahrscheinlich, weil am Wochenende gleich wieder das normale Leben weitergeht.",
       "frage": "Was hat den Werksleiter an den Zahlen des Betriebsarztes überrascht?",
       "opt": [
        "Dass es in der Nachtschicht mehr Unfälle gibt.",
        "Dass ältere Kollegen am häufigsten krankgeschrieben sind.",
        "Dass vor allem jüngere Mitarbeiter nach der Nachtschicht krank werden."
       ],
       "loesung": 2,
       "stelle": "nicht bei den Älteren, sondern bei den Kollegen unter dreißig",
       "erklaerung": "Erwartet hätte man die Älteren. Betroffen sind aber vor allem die unter Dreißigjährigen."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Mann",
       "text": "Was also tun? Wir haben uns mit dem Betriebsrat zusammengesetzt, und ich sag es ganz offen, das waren keine einfachen Gespräche. Herausgekommen ist ein Modell mit schnellerer Rotation. Statt einer ganzen Woche Nacht am Stück gibt es künftig höchstens zwei Nächte hintereinander. Dann kommen zwei Tage frei, dann geht es mit Frühschicht weiter. Die Arbeitsmediziner sagen, dass sich der Körper so gar nicht erst richtig auf die Nacht umstellt, und dass das gesünder ist, als sich jede Woche komplett umzugewöhnen. Ich bin kein Mediziner, ich gebe das so weiter, wie es mir erklärt wurde.",
       "frage": "Was ändert sich am Schichtplan?",
       "opt": [
        "Nachtarbeit gibt es nur noch in kurzen Blöcken.",
        "Die Nachtschicht dauert künftig zwei Wochen am Stück.",
        "Nach jeder Nachtschicht folgt eine Woche frei."
       ],
       "loesung": 0,
       "stelle": "gibt es künftig höchstens zwei Nächte hintereinander",
       "erklaerung": "Zwei Nächte, dann zwei freie Tage. Von zwei Wochen oder einer freien Woche ist nicht die Rede."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Mann",
       "text": "Jetzt kommt der Teil, der Sie wahrscheinlich am meisten interessiert, nämlich das Geld. Die Nachtzuschläge bleiben, wie sie sind, fünfundzwanzig Prozent. Daran ändert sich nichts. Was sich ändert: Weil die Nächte jetzt anders verteilt sind, wird es Monate geben, in denen Sie weniger Nächte haben als bisher, und dafür andere mit mehr. Über das Jahr gerechnet kommt jeder auf ungefähr gleich viele Nachtschichten wie heute. Wer also seinen Haushalt jeden Monat genau plant, sollte sich den neuen Plan gut anschauen. Das Lohnbüro rechnet Ihnen das gern einzeln aus.",
       "frage": "Was sagt der Werksleiter über die Bezahlung?",
       "opt": [
        "Die Nachtzuschläge werden erhöht.",
        "Über das Jahr verdient man weniger als bisher.",
        "Der Verdienst kann von Monat zu Monat stärker schwanken."
       ],
       "loesung": 2,
       "stelle": "wird es Monate geben, in denen Sie weniger Nächte haben",
       "erklaerung": "Zuschläge und Jahressumme bleiben gleich. Nur die Verteilung auf die Monate ändert sich."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Mann",
       "text": "Ein Punkt, über den wir lange gestritten haben, sind die Kollegen, die heute freiwillig Dauernacht machen. Das sind bei uns, ich hab nachgezählt, vierzehn Leute, die meisten in der Instandhaltung. Manche machen das seit zwanzig Jahren und wollen gar nichts anderes. Der Betriebsrat wollte, dass die das weiter dürfen. Ich war erst dagegen, weil es den Plan kompliziert macht. Am Ende haben wir uns geeinigt: Wer heute Dauernacht hat, darf dabei bleiben. Neu einsteigen in die Dauernacht kann aber niemand mehr.",
       "frage": "Was gilt künftig für die Dauernachtschicht?",
       "opt": [
        "Sie wird für alle abgeschafft.",
        "Wer sie heute schon macht, darf sie behalten.",
        "Jeder kann sich künftig freiwillig dafür melden."
       ],
       "loesung": 1,
       "stelle": "Wer heute Dauernacht hat, darf dabei bleiben",
       "erklaerung": "Bestehende Dauernachtarbeit bleibt erlaubt, neue kommt nicht mehr dazu."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Mann",
       "text": "Wann geht es los? Geplant war eigentlich der erste Januar. Das haben wir verschoben, und zwar auf den ersten März. Der Grund ist ganz banal: Im Januar und Februar haben wir die Inventur und die Wartung der Linien, da läuft eh alles anders. Ein neues Modell in so einer Phase zu starten, wäre unklug. Die Pläne für März hängen ab Mitte Januar aus, am schwarzen Brett und in der App. Und wer für März schon Urlaub eingereicht hat, keine Sorge, der Urlaub gilt natürlich.",
       "frage": "Warum beginnt das neue Modell später als geplant?",
       "opt": [
        "Weil der Betriebsrat noch nicht zugestimmt hat.",
        "Weil viele Mitarbeiter im März Urlaub eingereicht haben.",
        "Weil am Jahresanfang wegen Inventur und Wartung ohnehin vieles anders läuft."
       ],
       "loesung": 2,
       "stelle": "Im Januar und Februar haben wir die Inventur und die Wartung",
       "erklaerung": "Der Urlaub im März wird nur erwähnt, weil er gültig bleibt. Er ist nicht der Grund."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Mann",
       "text": "Damit wir sehen, ob das Ganze funktioniert, gibt es eine Probephase von einem halben Jahr. Im September setzen wir uns mit dem Betriebsrat wieder zusammen und schauen auf drei Dinge: die Krankmeldungen, die Unfälle und, ganz wichtig, Ihre Rückmeldung. Dafür gibt es im Sommer eine kurze Befragung, anonym, zehn Fragen, mehr nicht. Und ich sag Ihnen gleich: Wenn das neue Modell nichts bringt, gehen wir zurück. Ich hab kein Problem damit, mich zu irren. Ich hab ein Problem damit, wenn wir es gar nicht erst ausprobieren.",
       "frage": "Was passiert im September?",
       "opt": [
        "Das neue Modell wird ohne weitere Prüfung endgültig eingeführt.",
        "Die Erfahrungen werden ausgewertet, notfalls kehrt man zum alten Modell zurück.",
        "Die Mitarbeiter werden zum ersten Mal gefragt, ob sie das Modell wollen."
       ],
       "loesung": 1,
       "stelle": "Wenn das neue Modell nichts bringt, gehen wir zurück",
       "erklaerung": "Die Befragung ist schon im Sommer. Im September wird ausgewertet."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Mann",
       "text": "So, das war es von meiner Seite. Ich weiß, dass einige von Ihnen Fragen zu ganz persönlichen Situationen haben, Kinderbetreuung, Pflege von Angehörigen, Fahrgemeinschaften. Die können wir hier vor zweihundert Leuten nicht klären. Deshalb bieten der Betriebsrat und die Personalabteilung ab nächster Woche Sprechstunden an, dienstags und donnerstags, jeweils eine Stunde vor und nach dem Schichtwechsel, damit auch die Nachtleute kommen können. Und jetzt mache ich Platz für Frau Graf vom Betriebsrat, die noch etwas zum Weihnachtsessen sagen möchte.",
       "frage": "Wie werden persönliche Fragen geklärt?",
       "opt": [
        "In Sprechstunden rund um den Schichtwechsel.",
        "Direkt nach der Versammlung in der Kantine.",
        "Schriftlich über die App."
       ],
       "loesung": 0,
       "stelle": "jeweils eine Stunde vor und nach dem Schichtwechsel",
       "erklaerung": "Vor zweihundert Leuten will er persönliche Fragen ausdrücklich nicht klären."
      }
     ]
    },
    {
     "id": "bc1h2s2",
     "titel": "Fachtagung Pflege: Pflegekräfte aus dem Ausland einarbeiten",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Frau",
       "text": "Vielen Dank für die Einladung und, Moment, ich muss kurz das Mikrofon, so, jetzt geht es. Ich bin Pflegedirektorin im Klinikum Altenbach, wir sind ein Haus mit knapp vierhundert Betten. Als ich gefragt wurde, ob ich hier über unsere Erfahrungen mit Pflegekräften aus dem Ausland spreche, war mein erster Gedanke: Wollen die wirklich hören, was alles schiefgegangen ist? Denn ehrlich gesagt, am Anfang ist bei uns einiges schiefgegangen. Aber genau deshalb, glaube ich, kann ich Ihnen heute etwas Brauchbares erzählen und nicht nur eine Erfolgsgeschichte.",
       "frage": "Was kündigt die Rednerin an?",
       "opt": [
        "Sie will vor allem über Erfolge berichten.",
        "Sie will die Anwerbung im Ausland grundsätzlich kritisieren.",
        "Sie will auch über Fehler aus der Anfangszeit sprechen."
       ],
       "loesung": 2,
       "stelle": "am Anfang ist bei uns einiges schiefgegangen",
       "erklaerung": "„nicht nur eine Erfolgsgeschichte\" heißt: auch Fehler kommen vor."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Frau",
       "text": "Wir haben vor vier Jahren die ersten zwölf Pflegekräfte von den Philippinen geholt. Alle gut ausgebildet, alle mit Studium, viele mit mehr Berufserfahrung als manche unserer Stationsleitungen. Und wir haben sie, das muss ich so sagen, wie Hilfskräfte behandelt. Nicht absichtlich. Aber solange die Anerkennung nicht durch war, durften sie bei uns nur grundpflegerische Aufgaben übernehmen, also waschen, Essen reichen, Betten machen. Nach drei Monaten hatten wir die ersten zwei Kündigungen. Eine Kollegin hat mir damals gesagt: Ich habe auf der Intensivstation gearbeitet, und hier darf ich nicht mal Blutdruck messen.",
       "frage": "Warum haben die ersten Pflegekräfte gekündigt?",
       "opt": [
        "Weil sie weit unter ihrer Qualifikation arbeiten mussten.",
        "Weil sie schlecht bezahlt wurden.",
        "Weil sie mit den Stationsleitungen Streit hatten."
       ],
       "loesung": 0,
       "stelle": "wir haben sie, das muss ich so sagen, wie Hilfskräfte behandelt",
       "erklaerung": "Die Stationsleitungen werden nur zum Vergleich der Berufserfahrung genannt."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Frau",
       "text": "Was haben wir geändert? Als Erstes haben wir für die Zeit bis zur Anerkennung einen eigenen Plan gemacht. Die neuen Kollegen arbeiten jetzt von Anfang an an der Seite einer erfahrenen Pflegekraft, und sie übernehmen alles, was rechtlich unter Aufsicht möglich ist. Und das ist, wenn man genau hinschaut, eine ganze Menge mehr, als wir anfangs dachten. Das hat uns übrigens unsere Rechtsabteilung erst gesagt, nachdem wir nachgefragt hatten. Vorher hat einfach jeder angenommen, dass es nicht geht. Ich glaube, das passiert in vielen Häusern.",
       "frage": "Was hat das Krankenhaus herausgefunden?",
       "opt": [
        "Dass vor der Anerkennung gar keine Fachaufgaben erlaubt sind.",
        "Dass unter Aufsicht deutlich mehr erlaubt ist, als man geglaubt hatte.",
        "Dass die Rechtsabteilung die Einarbeitung lange blockiert hatte."
       ],
       "loesung": 1,
       "stelle": "eine ganze Menge mehr, als wir anfangs dachten",
       "erklaerung": "Die Rechtsabteilung hat nichts blockiert, man hatte sie nur nicht gefragt."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Frau",
       "text": "Der zweite Punkt ist die Sprache. Die meisten kommen mit einem Zertifikat auf mittlerem Niveau, und das reicht im Alltag auch. Was es nicht abdeckt, ist der Stationsjargon. Wenn bei der Übergabe jemand sagt, der Herr in Zimmer zwölf ist heute ein bisschen neben der Spur, dann steht das in keinem Lehrbuch. Wir haben deshalb einmal in der Woche eine Stunde Sprachtraining eingeführt, während der Arbeitszeit, und zwar mit echten Übergabeprotokollen von unseren Stationen, natürlich ohne Namen. Das hat mehr gebracht als jeder Kurs, den wir vorher eingekauft hatten.",
       "frage": "Was ist das Besondere am Sprachtraining?",
       "opt": [
        "Es findet nach Feierabend statt.",
        "Es arbeitet mit Material aus dem echten Stationsalltag.",
        "Es wird von einer externen Sprachschule angeboten."
       ],
       "loesung": 1,
       "stelle": "mit echten Übergabeprotokollen von unseren Stationen",
       "erklaerung": "Es läuft während der Arbeitszeit. Eingekaufte Kurse gab es vorher."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Frau",
       "text": "Dritter Punkt, und der wird oft vergessen: die Teams, die schon da sind. Wir haben am Anfang die Neuen gut vorbereitet, aber den Stationen haben wir im Grunde nur gesagt, nächste Woche kommen zwei neue Kollegen, seid nett. Das war zu wenig. Auf manchen Stationen gab es Unmut, weil die Einarbeitung natürlich Zeit kostet, und diese Zeit hat ihnen niemand angerechnet. Heute bekommt jede Pflegekraft, die jemanden einarbeitet, dafür zwei Stunden pro Woche im Dienstplan. Das klingt wenig. Aber es ist ein Signal, dass wir diese Arbeit sehen.",
       "frage": "Warum gab es auf manchen Stationen Unmut?",
       "opt": [
        "Weil die Teams keine neuen Kollegen wollten.",
        "Weil die Stationen zu spät informiert wurden.",
        "Weil der Aufwand für die Einarbeitung nicht berücksichtigt wurde."
       ],
       "loesung": 2,
       "stelle": "diese Zeit hat ihnen niemand angerechnet",
       "erklaerung": "Der Ärger galt der unbezahlten Zusatzarbeit, nicht den neuen Kollegen."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Frau",
       "text": "Jetzt fragen Sie sich vielleicht, was das alles kostet. Ich will Ihnen keine Zahlen um die Ohren hauen, nur so viel: Die Sprachstunden und die Zeit für die Einarbeitung kosten pro Person im ersten Jahr ungefähr so viel, wie wir früher in zwei Monaten für Leiharbeitskräfte ausgegeben haben. Und Leiharbeitskräfte brauchen wir auf den Stationen mit internationalen Kollegen heute kaum noch. Das hat unsere Geschäftsführung überzeugt, deutlich mehr als jedes Argument über Integration. Das muss man ehrlich sagen.",
       "frage": "Was hat die Geschäftsführung überzeugt?",
       "opt": [
        "Die Einsparungen bei den Leiharbeitskräften.",
        "Die Argumente zur Integration.",
        "Die Zufriedenheit der Patienten."
       ],
       "loesung": 0,
       "stelle": "Das hat unsere Geschäftsführung überzeugt",
       "erklaerung": "Integration hat laut Rednerin weniger gezählt als das Geld."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Frau",
       "text": "Wo stehen wir heute? Von den ersten zwölf sind noch sieben bei uns. Insgesamt haben wir inzwischen achtundvierzig internationale Pflegekräfte, und bei ihnen liegt die Kündigungsquote mittlerweile niedriger als bei den deutschen Kollegen. Das hätte ich vor vier Jahren nicht geglaubt. Zwei aus der ersten Gruppe sind inzwischen sogar stellvertretende Stationsleitungen. Eine davon ist übrigens genau die Kollegin, die damals keinen Blutdruck messen durfte. Sie sitzt heute hier im Saal, und sie hat mir erlaubt, das zu erzählen.",
       "frage": "Was sagt die Rednerin über die Kündigungen heute?",
       "opt": [
        "Internationale Pflegekräfte kündigen inzwischen seltener als deutsche.",
        "Von den ersten zwölf hat inzwischen die Mehrheit gekündigt.",
        "Die Kündigungsquote ist bei allen Pflegekräften gleich hoch."
       ],
       "loesung": 0,
       "stelle": "bei ihnen liegt die Kündigungsquote mittlerweile niedriger",
       "erklaerung": "Sieben von zwölf sind geblieben, also nicht die Mehrheit gegangen."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Frau",
       "text": "Zum Schluss noch eine Bitte an die Kollegen aus der Politik, die heute auch hier sind. Die Anerkennungsverfahren dauern bei uns im Schnitt immer noch elf Monate. Das liegt nicht an den Pflegekräften, und meistens auch nicht an den Sachbearbeitern, die sind genauso überlastet wie wir. Es liegt daran, dass jedes Bundesland eigene Regeln hat und Unterlagen dreimal geprüft werden. Wenn Sie da etwas tun können, tun Sie es. Das würde uns mehr helfen als jede neue Anwerbekampagne. Vielen Dank.",
       "frage": "Was wünscht sich die Rednerin von der Politik?",
       "opt": [
        "Mehr Geld für Anwerbekampagnen im Ausland.",
        "Einfachere und einheitlichere Anerkennungsverfahren.",
        "Mehr Personal in den Anerkennungsbehörden."
       ],
       "loesung": 1,
       "stelle": "jedes Bundesland eigene Regeln hat und Unterlagen dreimal geprüft werden",
       "erklaerung": "Die Sachbearbeiter sind überlastet, aber die Ursache sind die uneinheitlichen Regeln."
      }
     ]
    },
    {
     "id": "bc1h2s3",
     "titel": "Weiterbildung: Datenschutz im Büroalltag",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Mann",
       "text": "Schönen guten Abend. Ich sehe, einige von Ihnen haben schon die Arme verschränkt, und ich kann das verstehen. Datenschutz, das klingt nach Formularen und nach Leuten wie mir, die immer sagen, was alles nicht geht. Ich verspreche Ihnen, heute geht es nicht um Paragrafen. Ich bin seit neun Jahren Datenschutzbeauftragter für mehrere mittelständische Betriebe, und ich erzähle Ihnen einfach, was in diesen Betrieben tatsächlich passiert ist. Die Namen ändere ich natürlich, sonst wäre ich ja meinen Job los.",
       "frage": "Wie will der Redner vorgehen?",
       "opt": [
        "Er erklärt die wichtigsten Gesetze.",
        "Er stellt neue Formulare vor.",
        "Er berichtet von echten Fällen aus Betrieben."
       ],
       "loesung": 2,
       "stelle": "ich erzähle Ihnen einfach, was in diesen Betrieben tatsächlich passiert ist",
       "erklaerung": "Paragrafen und Formulare nennt er gerade als das, was heute nicht kommt."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Mann",
       "text": "Fall Nummer eins, und das ist mit Abstand der häufigste: die falsche Mail. Eine Sachbearbeiterin in einem Autohaus wollte einem Kunden seine Rechnung schicken. Das Mailprogramm hat beim Tippen den Namen automatisch ergänzt, und zwar mit einem anderen Kunden, der genauso hieß. Angehängt war nicht nur die Rechnung, sondern die komplette Kundenakte mit Bankverbindung. Das Problem war gar nicht so sehr der Fehler selbst. Das Problem war, dass sie sich geschämt und es drei Wochen lang niemandem erzählt hat.",
       "frage": "Was war laut dem Redner das eigentliche Problem?",
       "opt": [
        "Dass die Mail an den falschen Kunden ging.",
        "Dass die Mitarbeiterin den Fehler zu lange verschwiegen hat.",
        "Dass das Mailprogramm fehlerhaft war."
       ],
       "loesung": 1,
       "stelle": "Das Problem war, dass sie sich geschämt",
       "erklaerung": "„nicht so sehr der Fehler selbst\" schließt die erste Antwort aus."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Mann",
       "text": "Denn, und das wissen viele nicht: Wenn so etwas passiert, hat der Betrieb nur zweiundsiebzig Stunden Zeit, die Panne der Aufsichtsbehörde zu melden. Drei Tage, nicht drei Wochen. Wer das verpasst, riskiert ein Bußgeld, und zwar nicht wegen der Mail, sondern wegen der verspäteten Meldung. Ich sage deshalb in jedem Betrieb dasselbe: Wenn Ihnen so etwas passiert, gehen Sie sofort zu Ihrem Chef oder rufen Sie mich an. Niemand wird wegen einer falsch adressierten Mail entlassen. Aber Schweigen kann wirklich teuer werden.",
       "frage": "Wofür droht dem Betrieb ein Bußgeld?",
       "opt": [
        "Für eine zu späte Meldung der Panne.",
        "Für jede falsch verschickte Mail.",
        "Für Mitarbeiter, die Fehler machen."
       ],
       "loesung": 0,
       "stelle": "nicht wegen der Mail, sondern wegen der verspäteten Meldung",
       "erklaerung": "Der Fehler selbst wird nicht bestraft, die verspätete Meldung schon."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Mann",
       "text": "Fall zwei ist ein Klassiker aus dem Handwerk. Ein Sanitärbetrieb, sehr ordentlich geführt, hatte eine Chatgruppe auf dem Handy für alle Monteure. Praktisch, klar. Da gingen Adressen von Kunden rein, Fotos von Badezimmern, manchmal sogar Schlüsselcodes für Häuser, deren Besitzer im Urlaub waren. Dann hat ein Monteur gekündigt und ist zur Konkurrenz gewechselt. Und, na ja, niemand hat daran gedacht, ihn aus der Gruppe zu nehmen. Er war noch vier Monate drin. Ich will ihm gar nichts unterstellen. Aber er hätte es gekonnt.",
       "frage": "Was war das Problem in dem Sanitärbetrieb?",
       "opt": [
        "Die Chatgruppe wurde von außen angegriffen.",
        "Ein Monteur hat Kundendaten an die Konkurrenz verkauft.",
        "Ein ehemaliger Mitarbeiter hatte noch lange Zugang zu Kundendaten."
       ],
       "loesung": 2,
       "stelle": "niemand hat daran gedacht, ihn aus der Gruppe zu nehmen",
       "erklaerung": "„Ich will ihm gar nichts unterstellen\" heißt: Ein Missbrauch ist nicht bewiesen."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Mann",
       "text": "Was kann man da machen? Ich sage nicht, schafft die Chatgruppen ab, das wäre weltfremd. Aber zwei Dinge sind wirklich nicht schwer. Erstens: Schlüsselcodes, Passwörter und Kontodaten gehören nie in eine Gruppe, auch nicht kurz. Zweitens: Wenn jemand den Betrieb verlässt, gibt es eine Liste, was alles abgemeldet werden muss. Das Firmenhandy, die Gruppen, der Zugang zum Kundenprogramm. In dem Betrieb hängt diese Liste jetzt bei der Chefin am Kühlschrank. Kein schönes Design, aber es funktioniert.",
       "frage": "Was empfiehlt der Redner?",
       "opt": [
        "Eine feste Liste für das Abmelden ausscheidender Mitarbeiter.",
        "Chatgruppen im Betrieb ganz zu verbieten.",
        "Passwörter nur noch kurz in Chatgruppen zu verschicken."
       ],
       "loesung": 0,
       "stelle": "gibt es eine Liste, was alles abgemeldet werden muss",
       "erklaerung": "Ein Verbot hält er für weltfremd. Passwörter gehören nie in eine Gruppe."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Mann",
       "text": "Der dritte Fall ist mir selbst ein bisschen peinlich, weil ich ihn fast übersehen hätte. Eine Steuerkanzlei, alles vorbildlich, verschlüsselte Rechner, Schulungen, das volle Programm. Aber im Flur stand ein Drucker, den alle benutzt haben, auch die Putzfirma am Abend und die Mandanten, die im Wartebereich saßen. Und wenn jemand vergessen hat, seinen Ausdruck abzuholen, lag da manchmal den ganzen Nachmittag eine Steuererklärung im Ausgabefach. Ich bin bei der ersten Prüfung dreimal an diesem Drucker vorbeigelaufen und hab nichts gemerkt.",
       "frage": "Warum ist dem Redner der dritte Fall peinlich?",
       "opt": [
        "Weil er selbst Unterlagen im Drucker vergessen hat.",
        "Weil die Kanzlei seine Schulungen abgelehnt hat.",
        "Weil er das Problem bei seiner Prüfung zunächst nicht bemerkt hat."
       ],
       "loesung": 2,
       "stelle": "Ich bin bei der ersten Prüfung dreimal an diesem Drucker vorbeigelaufen",
       "erklaerung": "Peinlich ist ihm, dass er den Drucker übersehen hat."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Mann",
       "text": "Was lerne ich daraus? Technik ist selten das Problem. Die Kanzlei hatte die beste Verschlüsselung, die man kaufen kann. Die Lücken entstehen da, wo Menschen ihren Alltag organisieren: im Flur, in der Chatgruppe, beim schnellen Mailen kurz vor Feierabend. Deshalb bringt eine Schulung einmal im Jahr mit hundert Folien auch so wenig. Was hilft, ist, dass jemand mit offenen Augen durch den eigenen Betrieb geht und fragt: Wo liegen bei uns eigentlich Daten herum? Das kann jeder von Ihnen morgen früh machen.",
       "frage": "Was ist die Hauptaussage dieses Abschnitts?",
       "opt": [
        "Betriebe sollten mehr Geld in Verschlüsselung stecken.",
        "Die meisten Lücken entstehen im Arbeitsalltag, nicht bei der Technik.",
        "Eine jährliche Schulung ist die beste Vorbeugung."
       ],
       "loesung": 1,
       "stelle": "Technik ist selten das Problem",
       "erklaerung": "Die jährliche Schulung mit vielen Folien bringt laut Redner wenig."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Mann",
       "text": "So, ich habe noch zehn Minuten. Ich hab Ihnen vorhin einen Zettel ausgeteilt, da stehen zwölf Fragen drauf, ganz einfache, zum Beispiel: Wer in Ihrem Betrieb weiß, wie man eine Datenpanne meldet? Nehmen Sie den bitte mit, beantworten Sie ihn in den nächsten zwei Wochen für Ihren eigenen Arbeitsplatz, und dann treffen wir uns am achtzehnten noch mal hier. Dann sprechen wir über das, was Sie gefunden haben. Und jetzt gern Ihre Fragen, auch die unangenehmen.",
       "frage": "Was sollen die Teilnehmer bis zum nächsten Treffen tun?",
       "opt": [
        "Dem Redner zwölf Fragen schicken.",
        "Eine Datenpanne an die Behörde melden.",
        "Den Fragebogen für ihren eigenen Arbeitsplatz beantworten."
       ],
       "loesung": 2,
       "stelle": "beantworten Sie ihn in den nächsten zwei Wochen für Ihren eigenen Arbeitsplatz",
       "erklaerung": "Die zwölf Fragen stehen auf dem Zettel, den sie selbst beantworten sollen."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "diskussion",
   "name": "Hören: Meinungen",
   "kurz": "Fünf Personen, zehn Aussagen",
   "was": "Fünf Personen äußern sich zu einem Arbeitsthema. Zu jeder Person passt eine von zehn Aussagen, fünf bleiben übrig.",
   "tipp": "Hör auf die Haltung und den Grund. Die übrigen Aussagen greifen oft Wörter aus dem Gesagten auf.",
   "zeichen": "🗣️",
   "farbe": "rot",
   "punkte": 5,
   "mal": 1,
   "runden": [
    {
     "id": "bc1h3s1",
     "titel": "Vertrauensarbeitszeit",
     "aufgaben": [
      {
       "von": "Person 1 — Frau Demir, Personalleiterin in einem Krankenhaus",
       "wer": "Frau",
       "text": "Bei uns im Haus wird das immer wieder mal gefordert, meistens aus der Verwaltung. Und für die Verwaltung kann ich mir das auch vorstellen. Aber auf den Stationen? Da fängt der Frühdienst um sechs an, und um sechs ist auch die Übergabe. Wenn da jemand sagt, ich komm heute mal um halb acht, ich vertraue mir ja selbst, dann stehen die Kollegen vom Nachtdienst da und können nicht nach Hause. In einem Betrieb, wo einer den anderen ablöst, geht das einfach nicht. Die Stempeluhr hat bei uns übrigens nichts mit Misstrauen zu tun, die brauchen wir für die Zuschläge. Ohne die könnten wir gar nicht richtig abrechnen.",
       "loesung": 2,
       "stelle": "In einem Betrieb, wo einer den anderen ablöst, geht das einfach nicht",
       "erklaerung": "Sie meint den Schichtdienst auf den Stationen. Misstrauen weist sie ausdrücklich zurück.",
       "frage": "Welche Aussage passt zu Frau Demir?",
       "opt": [
        "Ohne Zeiterfassung arbeiten viele Beschäftigte mehr, als sie müssten.",
        "Vertrauensarbeitszeit funktioniert nur, wenn die Ziele klar abgesprochen sind.",
        "Für Betriebe mit Schichtdienst ist Vertrauensarbeitszeit ungeeignet.",
        "Die Zeiterfassung ist ohnehin gesetzlich vorgeschrieben.",
        "Vertrauensarbeitszeit macht Führung schwieriger, aber besser.",
        "Wer seine Zeit frei einteilt, kann Familie und Beruf leichter verbinden.",
        "Eine Stempeluhr ist vor allem ein Zeichen von Misstrauen.",
        "Neue Mitarbeiter brauchen am Anfang feste Arbeitszeiten.",
        "Vertrauensarbeitszeit spart der Firma Verwaltungskosten.",
        "Ohne Uhr kontrollieren sich die Kollegen gegenseitig umso mehr."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Herr Albrecht, Betriebsrat in einem Softwarehaus",
       "wer": "Mann",
       "text": "Ich bin ja nicht grundsätzlich dagegen. Wir haben das seit sechs Jahren, und am Anfang fanden es alle toll. Dann haben wir als Betriebsrat mal eine freiwillige Umfrage gemacht, da haben die Leute zwei Wochen lang ihre echten Zeiten aufgeschrieben. Im Schnitt kamen da pro Woche gut vier Stunden mehr raus, als im Vertrag steht. Bezahlt hat die natürlich niemand. Und das Verrückte ist, die meisten haben es selbst gar nicht gemerkt. Man schaut abends noch mal kurz in die Mails, man macht am Sonntag noch schnell was fertig. Das läppert sich. Deshalb wollen wir jetzt wenigstens eine einfache Erfassung, nicht um zu kontrollieren, sondern damit die Leute es selbst sehen.",
       "loesung": 0,
       "stelle": "Im Schnitt kamen da pro Woche gut vier Stunden mehr raus",
       "erklaerung": "Die Umfrage zeigt unbezahlte Mehrarbeit, die den Leuten selbst nicht auffällt.",
       "frage": "Welche Aussage passt zu Herr Albrecht?",
       "opt": [
        "Ohne Zeiterfassung arbeiten viele Beschäftigte mehr, als sie müssten.",
        "Vertrauensarbeitszeit funktioniert nur, wenn die Ziele klar abgesprochen sind.",
        "Für Betriebe mit Schichtdienst ist Vertrauensarbeitszeit ungeeignet.",
        "Die Zeiterfassung ist ohnehin gesetzlich vorgeschrieben.",
        "Vertrauensarbeitszeit macht Führung schwieriger, aber besser.",
        "Wer seine Zeit frei einteilt, kann Familie und Beruf leichter verbinden.",
        "Eine Stempeluhr ist vor allem ein Zeichen von Misstrauen.",
        "Neue Mitarbeiter brauchen am Anfang feste Arbeitszeiten.",
        "Vertrauensarbeitszeit spart der Firma Verwaltungskosten.",
        "Ohne Uhr kontrollieren sich die Kollegen gegenseitig umso mehr."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Frau Brenner, Teamleiterin in einer Versicherung",
       "wer": "Frau",
       "text": "Ich leite ein Team von elf Leuten, und wir arbeiten seit drei Jahren ohne Stechuhr. Ob das klappt, hängt meiner Erfahrung nach an einer einzigen Sache: Wissen alle, was bis wann erledigt sein muss? Wenn ich am Montag mit jedem bespreche, welche Fälle diese Woche abgeschlossen werden, dann ist mir völlig egal, ob jemand das morgens um sieben macht oder abends. Wenn das aber unklar bleibt, dann fängt das Misstrauen an, und dann schaut man doch wieder, wer wann online ist. Das gilt bei uns übrigens auch für Neue. Die bekommen vom ersten Tag an dieselbe Freiheit, nur die Absprachen am Anfang sind etwas enger.",
       "loesung": 1,
       "stelle": "Wissen alle, was bis wann erledigt sein muss",
       "erklaerung": "Feste Zeiten für Neue lehnt sie ab. Für sie zählen klare Absprachen über die Aufgaben.",
       "frage": "Welche Aussage passt zu Frau Brenner?",
       "opt": [
        "Ohne Zeiterfassung arbeiten viele Beschäftigte mehr, als sie müssten.",
        "Vertrauensarbeitszeit funktioniert nur, wenn die Ziele klar abgesprochen sind.",
        "Für Betriebe mit Schichtdienst ist Vertrauensarbeitszeit ungeeignet.",
        "Die Zeiterfassung ist ohnehin gesetzlich vorgeschrieben.",
        "Vertrauensarbeitszeit macht Führung schwieriger, aber besser.",
        "Wer seine Zeit frei einteilt, kann Familie und Beruf leichter verbinden.",
        "Eine Stempeluhr ist vor allem ein Zeichen von Misstrauen.",
        "Neue Mitarbeiter brauchen am Anfang feste Arbeitszeiten.",
        "Vertrauensarbeitszeit spart der Firma Verwaltungskosten.",
        "Ohne Uhr kontrollieren sich die Kollegen gegenseitig umso mehr."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Herr Mensah, Ingenieur in einem Planungsbüro",
       "wer": "Mann",
       "text": "Für mich war das ehrlich gesagt der Hauptgrund, warum ich vor zwei Jahren hier angefangen habe. Ich hab zwei Kinder, die Kleine ist drei, und meine Frau arbeitet im Krankenhaus im Schichtdienst. Bei meinem alten Arbeitgeber musste ich um acht da sein und durfte nicht vor halb fünf gehen. Das war jeden Tag ein Kampf mit dem Kindergarten. Heute bringe ich die Kinder morgens weg, arbeite bis zwei, hole sie ab und setze mich abends noch mal zwei Stunden hin, wenn sie schlafen. Klar, manchmal ist das anstrengend. Aber ohne diese Freiheit hätte einer von uns beiden kürzertreten müssen, und das wäre wahrscheinlich wieder meine Frau gewesen.",
       "loesung": 5,
       "stelle": "ohne diese Freiheit hätte einer von uns beiden kürzertreten müssen",
       "erklaerung": "Er erzählt, wie er dank freier Zeiteinteilung Kinder und Arbeit unter einen Hut bekommt.",
       "frage": "Welche Aussage passt zu Herr Mensah?",
       "opt": [
        "Ohne Zeiterfassung arbeiten viele Beschäftigte mehr, als sie müssten.",
        "Vertrauensarbeitszeit funktioniert nur, wenn die Ziele klar abgesprochen sind.",
        "Für Betriebe mit Schichtdienst ist Vertrauensarbeitszeit ungeeignet.",
        "Die Zeiterfassung ist ohnehin gesetzlich vorgeschrieben.",
        "Vertrauensarbeitszeit macht Führung schwieriger, aber besser.",
        "Wer seine Zeit frei einteilt, kann Familie und Beruf leichter verbinden.",
        "Eine Stempeluhr ist vor allem ein Zeichen von Misstrauen.",
        "Neue Mitarbeiter brauchen am Anfang feste Arbeitszeiten.",
        "Vertrauensarbeitszeit spart der Firma Verwaltungskosten.",
        "Ohne Uhr kontrollieren sich die Kollegen gegenseitig umso mehr."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Frau Kühn, Inhaberin einer Werbeagentur",
       "wer": "Frau",
       "text": "Wir haben bei uns in der Agentur die Zeiterfassung vor vier Jahren abgeschafft. Ich hatte gedacht, das spart uns auch Arbeit in der Buchhaltung, aber da hat sich kaum was geändert, die Projektzeiten müssen wir für die Kunden ja trotzdem aufschreiben. Was mich wirklich überrascht hat: Die Leute schauen jetzt viel genauer aufeinander. Wer um drei geht, wird von den anderen beobachtet, auch wenn er morgens schon um sechs angefangen hat. Das bekommt nur keiner mit. Dann gibt es Sprüche, Halbtagsjob oder so. Früher hat die Uhr das neutral festgehalten, heute macht das das Team, und zwar viel strenger und viel ungerechter.",
       "loesung": 9,
       "stelle": "heute macht das das Team, und zwar viel strenger",
       "erklaerung": "Die Ersparnis in der Verwaltung ist ausgeblieben. Ihr Punkt ist die Kontrolle durch die Kollegen.",
       "frage": "Welche Aussage passt zu Frau Kühn?",
       "opt": [
        "Ohne Zeiterfassung arbeiten viele Beschäftigte mehr, als sie müssten.",
        "Vertrauensarbeitszeit funktioniert nur, wenn die Ziele klar abgesprochen sind.",
        "Für Betriebe mit Schichtdienst ist Vertrauensarbeitszeit ungeeignet.",
        "Die Zeiterfassung ist ohnehin gesetzlich vorgeschrieben.",
        "Vertrauensarbeitszeit macht Führung schwieriger, aber besser.",
        "Wer seine Zeit frei einteilt, kann Familie und Beruf leichter verbinden.",
        "Eine Stempeluhr ist vor allem ein Zeichen von Misstrauen.",
        "Neue Mitarbeiter brauchen am Anfang feste Arbeitszeiten.",
        "Vertrauensarbeitszeit spart der Firma Verwaltungskosten.",
        "Ohne Uhr kontrollieren sich die Kollegen gegenseitig umso mehr."
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "bc1h3s2",
     "titel": "Großraumbüro",
     "aufgaben": [
      {
       "von": "Person 1 — Herr Kaya, Betriebsrat in einer Bank",
       "wer": "Mann",
       "text": "Als bei uns vor zwei Jahren umgebaut wurde, hieß es in jeder Präsentation, es gehe um Kommunikation, um kurze Wege, um neue Formen der Zusammenarbeit. Ich sitze im Betriebsrat, ich habe auch die Unterlagen gesehen, die nicht in der Präsentation waren. Da ging es um Quadratmeter. Die Bank hat zwei Etagen im alten Gebäude aufgegeben und spart damit jedes Jahr eine Summe, über die ich hier nicht reden darf, aber sie ist nicht klein. Das ist ja auch legitim, eine Firma muss rechnen. Was mich ärgert, ist nur, dass man es den Leuten nicht ehrlich sagt. Dann wären viele auch weniger enttäuscht, dass sich an der Zusammenarbeit kaum etwas geändert hat.",
       "loesung": 2,
       "stelle": "Da ging es um Quadratmeter",
       "erklaerung": "Hinter dem Gerede von Kommunikation stand laut ihm die Einsparung von Fläche.",
       "frage": "Welche Aussage passt zu Herr Kaya?",
       "opt": [
        "Im Großraumbüro wird mehr geredet, aber weniger konzentriert gearbeitet.",
        "Ohne genügend Rückzugsräume funktioniert ein offenes Büro nicht.",
        "Offene Büros werden vor allem eingeführt, um Kosten zu sparen.",
        "Für Tätigkeiten mit viel Telefon ist das Großraumbüro ungeeignet.",
        "Im Großraumbüro lernen neue Kollegen schneller.",
        "Mit gemeinsamen Regeln bekommt man den Lärm in den Griff.",
        "Ältere Mitarbeiter lehnen das Großraumbüro meistens ab.",
        "Im Großraumbüro entstehen leichter Konflikte zwischen Abteilungen.",
        "Ein Großraumbüro schadet auf Dauer der Gesundheit.",
        "Wer viel zu Hause arbeitet, sucht im Büro vor allem die Gemeinschaft."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Frau Wolff, Teamleiterin im telefonischen Kundendienst",
       "wer": "Frau",
       "text": "Ich leite ein Team im telefonischen Kundendienst, wir sind vierzehn Leute in einem Raum, und alle telefonieren fast den ganzen Tag. Als ich das am Anfang gehört habe, dachte ich, das kann nicht gehen. Es geht aber, wenn man ein paar Dinge festlegt und sich auch daran hält. Bei uns telefoniert jeder mit Headset und gedämpfter Stimme, Rückfragen an Kollegen gehen über den Chat und nicht quer durch den Raum, und wer länger etwas besprechen will, geht in eine der zwei Kabinen. Wir haben das zusammen im Team aufgeschrieben und an die Wand gehängt. Das klingt nach Kindergarten, ich weiß. Aber seitdem beschwert sich kaum noch jemand.",
       "loesung": 5,
       "stelle": "wenn man ein paar Dinge festlegt und sich auch daran hält",
       "erklaerung": "Trotz Telefonarbeit klappt es bei ihr, weil das Team feste Regeln hat.",
       "frage": "Welche Aussage passt zu Frau Wolff?",
       "opt": [
        "Im Großraumbüro wird mehr geredet, aber weniger konzentriert gearbeitet.",
        "Ohne genügend Rückzugsräume funktioniert ein offenes Büro nicht.",
        "Offene Büros werden vor allem eingeführt, um Kosten zu sparen.",
        "Für Tätigkeiten mit viel Telefon ist das Großraumbüro ungeeignet.",
        "Im Großraumbüro lernen neue Kollegen schneller.",
        "Mit gemeinsamen Regeln bekommt man den Lärm in den Griff.",
        "Ältere Mitarbeiter lehnen das Großraumbüro meistens ab.",
        "Im Großraumbüro entstehen leichter Konflikte zwischen Abteilungen.",
        "Ein Großraumbüro schadet auf Dauer der Gesundheit.",
        "Wer viel zu Hause arbeitet, sucht im Büro vor allem die Gemeinschaft."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Herr Lindner, Innenarchitekt für Büroplanung",
       "wer": "Mann",
       "text": "Ich plane seit fünfzehn Jahren Büros, und die meisten Großraumbüros, die schlecht funktionieren, haben dasselbe Problem. Man hat die Wände rausgenommen, aber vergessen, dass Menschen manchmal allein sein müssen. Wer ein schwieriges Gespräch mit einem Kunden führt oder eine Präsentation vorbereitet, braucht einen Ort, an dem er die Tür zumachen kann. Meine Faustregel ist: Auf zehn Arbeitsplätze im offenen Bereich kommen mindestens zwei kleine Räume. Und die dürfen nicht dauernd für Besprechungen gebucht sein. Wenn das fehlt, können Sie die schönsten Möbel kaufen, die Leute sind trotzdem unzufrieden, und meistens zu Recht.",
       "loesung": 1,
       "stelle": "aber vergessen, dass Menschen manchmal allein sein müssen",
       "erklaerung": "Seine Faustregel verlangt kleine Räume, in die man sich zurückziehen kann.",
       "frage": "Welche Aussage passt zu Herr Lindner?",
       "opt": [
        "Im Großraumbüro wird mehr geredet, aber weniger konzentriert gearbeitet.",
        "Ohne genügend Rückzugsräume funktioniert ein offenes Büro nicht.",
        "Offene Büros werden vor allem eingeführt, um Kosten zu sparen.",
        "Für Tätigkeiten mit viel Telefon ist das Großraumbüro ungeeignet.",
        "Im Großraumbüro lernen neue Kollegen schneller.",
        "Mit gemeinsamen Regeln bekommt man den Lärm in den Griff.",
        "Ältere Mitarbeiter lehnen das Großraumbüro meistens ab.",
        "Im Großraumbüro entstehen leichter Konflikte zwischen Abteilungen.",
        "Ein Großraumbüro schadet auf Dauer der Gesundheit.",
        "Wer viel zu Hause arbeitet, sucht im Büro vor allem die Gemeinschaft."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Frau Schäfer, Sachbearbeiterin in einer Stadtverwaltung",
       "wer": "Frau",
       "text": "Ich bin seit über dreißig Jahren in dieser Verwaltung, und als das mit dem offenen Büro kam, war ich ehrlich gesagt die Erste, die geschimpft hat. Ich hatte zwanzig Jahre mein eigenes Zimmer mit meinen Pflanzen. Inzwischen sehe ich das anders, und zwar aus einem Grund, mit dem ich nicht gerechnet hätte. Letztes Jahr haben drei junge Kollegen bei uns angefangen. Die sitzen jetzt nicht mehr allein in einem Zimmer am Ende des Flurs und trauen sich nicht zu fragen. Die hören einfach mit, wie ich ein schwieriges Telefonat mit einem Bürger führe, und fragen dann kurz nach. Die waren nach drei Monaten so weit wie wir früher nach einem Jahr.",
       "loesung": 4,
       "stelle": "Die waren nach drei Monaten so weit",
       "erklaerung": "Sie war als Ältere zuerst dagegen, ist jetzt aber wegen der Neuen überzeugt.",
       "frage": "Welche Aussage passt zu Frau Schäfer?",
       "opt": [
        "Im Großraumbüro wird mehr geredet, aber weniger konzentriert gearbeitet.",
        "Ohne genügend Rückzugsräume funktioniert ein offenes Büro nicht.",
        "Offene Büros werden vor allem eingeführt, um Kosten zu sparen.",
        "Für Tätigkeiten mit viel Telefon ist das Großraumbüro ungeeignet.",
        "Im Großraumbüro lernen neue Kollegen schneller.",
        "Mit gemeinsamen Regeln bekommt man den Lärm in den Griff.",
        "Ältere Mitarbeiter lehnen das Großraumbüro meistens ab.",
        "Im Großraumbüro entstehen leichter Konflikte zwischen Abteilungen.",
        "Ein Großraumbüro schadet auf Dauer der Gesundheit.",
        "Wer viel zu Hause arbeitet, sucht im Büro vor allem die Gemeinschaft."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Herr Petersen, Abteilungsleiter in einem Softwarehaus",
       "wer": "Mann",
       "text": "Bei uns ist die Frage eigentlich eine ganz andere als vor zehn Jahren. Die meisten in meiner Abteilung sind drei Tage die Woche zu Hause. Da wird konzentriert programmiert, da ist es ruhig, da stört keiner. Wenn die Leute dann ins Büro kommen, wollen sie nicht wieder allein in einem Zimmer sitzen, dann könnten sie auch gleich zu Hause bleiben. Sie kommen, um sich zu sehen, um zusammen an der Tafel etwas aufzumalen, um mittags zusammen zu essen. Deshalb finde ich die Diskussion, ob man im Großraum konzentriert arbeiten kann, ein bisschen von gestern. Das Büro ist heute der Ort für das Miteinander, nicht für die Stillarbeit.",
       "loesung": 9,
       "stelle": "Das Büro ist heute der Ort für das Miteinander",
       "erklaerung": "Konzentriert gearbeitet wird zu Hause, ins Büro kommt man wegen der Kollegen.",
       "frage": "Welche Aussage passt zu Herr Petersen?",
       "opt": [
        "Im Großraumbüro wird mehr geredet, aber weniger konzentriert gearbeitet.",
        "Ohne genügend Rückzugsräume funktioniert ein offenes Büro nicht.",
        "Offene Büros werden vor allem eingeführt, um Kosten zu sparen.",
        "Für Tätigkeiten mit viel Telefon ist das Großraumbüro ungeeignet.",
        "Im Großraumbüro lernen neue Kollegen schneller.",
        "Mit gemeinsamen Regeln bekommt man den Lärm in den Griff.",
        "Ältere Mitarbeiter lehnen das Großraumbüro meistens ab.",
        "Im Großraumbüro entstehen leichter Konflikte zwischen Abteilungen.",
        "Ein Großraumbüro schadet auf Dauer der Gesundheit.",
        "Wer viel zu Hause arbeitet, sucht im Büro vor allem die Gemeinschaft."
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "bc1h3s3",
     "titel": "Duzen im Betrieb",
     "aufgaben": [
      {
       "von": "Person 1 — Frau Aksoy, Personalreferentin in einem Möbelhaus",
       "wer": "Frau",
       "text": "Bei uns duzen sich alle Mitarbeiter, vom Lager bis zur Geschäftsleitung, das ist seit der Gründung so. Für neue Kollegen ist das manchmal komisch, gerade wenn sie vorher in einer Behörde waren. Aber nach zwei Wochen hat sich das meistens eingespielt. Wo wir allerdings sehr streng sind, ist auf der Verkaufsfläche. Da wird der Kunde gesiezt, Punkt. Wir hatten mal einen jungen Verkäufer, der hat eine ältere Dame mit hallo, was suchst du denn angesprochen. Die hat sich hinterher schriftlich beschwert, und ich kann sie verstehen. Intern ist das Du ein Zeichen von Zusammenhalt. Bei Kunden kann es schnell respektlos wirken, und das will ich nicht riskieren.",
       "loesung": 1,
       "stelle": "Da wird der Kunde gesiezt, Punkt",
       "erklaerung": "Intern duzt man sich, gegenüber Kunden besteht sie auf dem Sie.",
       "frage": "Welche Aussage passt zu Frau Aksoy?",
       "opt": [
        "Jüngere Mitarbeiter erwarten heute, dass man sich duzt.",
        "Im Umgang mit Kunden sollte man beim Sie bleiben.",
        "In Handwerksbetrieben hat man sich schon immer geduzt.",
        "Mit dem Du verschwinden Hierarchien nicht, man sieht sie nur schlechter.",
        "Das Du sollte immer von der ranghöheren Person angeboten werden.",
        "Ein Du, das von oben angeordnet wird, wirkt gezwungen.",
        "Wer einmal das Du angeboten hat, kann es kaum zurücknehmen.",
        "Wenn man sich duzt, fällt es schwerer, Kritik zu äußern.",
        "Das Sie schützt vor zu viel Nähe am Arbeitsplatz.",
        "In Teams aus vielen Ländern ist das Du einfach praktischer."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Herr Brandt, Werkstattmeister in einem Autohaus",
       "wer": "Mann",
       "text": "Als ich vor dreißig Jahren als Lehrling angefangen hab, haben wir den Meister natürlich gesiezt, das war gar keine Frage. Heute bin ich selbst Meister, und bei uns duzen sich alle, auch die Lehrlinge mit mir. Ich hab da nichts dagegen, im Gegenteil. Aber eins merke ich: Wenn ich jemandem sagen muss, dass er Mist gebaut hat, dann fällt mir das schwerer als früher. Wenn man mittags zusammen sein Brot isst und über Fußball redet, und nachmittags muss man dann sagen, die Bremse hast du falsch eingebaut, das darf so nicht noch mal passieren, dann ist das komisch. Da muss ich mir jedes Mal richtig einen Ruck geben.",
       "loesung": 7,
       "stelle": "dann fällt mir das schwerer als früher",
       "erklaerung": "Er mag das Du, aber Kritik an Kollegen fällt ihm damit schwerer. Früher wurde in der Werkstatt gesiezt.",
       "frage": "Welche Aussage passt zu Herr Brandt?",
       "opt": [
        "Jüngere Mitarbeiter erwarten heute, dass man sich duzt.",
        "Im Umgang mit Kunden sollte man beim Sie bleiben.",
        "In Handwerksbetrieben hat man sich schon immer geduzt.",
        "Mit dem Du verschwinden Hierarchien nicht, man sieht sie nur schlechter.",
        "Das Du sollte immer von der ranghöheren Person angeboten werden.",
        "Ein Du, das von oben angeordnet wird, wirkt gezwungen.",
        "Wer einmal das Du angeboten hat, kann es kaum zurücknehmen.",
        "Wenn man sich duzt, fällt es schwerer, Kritik zu äußern.",
        "Das Sie schützt vor zu viel Nähe am Arbeitsplatz.",
        "In Teams aus vielen Ländern ist das Du einfach praktischer."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Frau Hartmann, Sachbearbeiterin in einem Versicherungskonzern",
       "wer": "Frau",
       "text": "Bei uns kam vor zwei Jahren eine Mail vom Vorstand: Ab sofort duzen wir uns alle. Einfach so, von einem Tag auf den anderen. Und das war ehrlich gesagt ziemlich peinlich. Ich habe einen Abteilungsleiter, den ich seit fünfzehn Jahren sieze und der mich siezt, und plötzlich sollten wir uns mit Vornamen anreden. Wir haben uns im Aufzug getroffen, beide nicht gewusst, was wir sagen sollen, und dann gar nichts gesagt. Ich hab nichts gegen das Du. In meinem Team duzen wir uns seit Jahren, aber das ist von allein entstanden. Wenn so etwas von oben angeordnet wird, dann fühlt es sich an wie eine Uniform, die nicht passt.",
       "loesung": 5,
       "stelle": "Wenn so etwas von oben angeordnet wird",
       "erklaerung": "Gegen das Du an sich hat sie nichts, nur gegen die Anordnung durch den Vorstand.",
       "frage": "Welche Aussage passt zu Frau Hartmann?",
       "opt": [
        "Jüngere Mitarbeiter erwarten heute, dass man sich duzt.",
        "Im Umgang mit Kunden sollte man beim Sie bleiben.",
        "In Handwerksbetrieben hat man sich schon immer geduzt.",
        "Mit dem Du verschwinden Hierarchien nicht, man sieht sie nur schlechter.",
        "Das Du sollte immer von der ranghöheren Person angeboten werden.",
        "Ein Du, das von oben angeordnet wird, wirkt gezwungen.",
        "Wer einmal das Du angeboten hat, kann es kaum zurücknehmen.",
        "Wenn man sich duzt, fällt es schwerer, Kritik zu äußern.",
        "Das Sie schützt vor zu viel Nähe am Arbeitsplatz.",
        "In Teams aus vielen Ländern ist das Du einfach praktischer."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Herr Ito, Projektleiter in einem Ingenieurbüro",
       "wer": "Mann",
       "text": "In meinem Team arbeiten Leute aus sieben Ländern, und die Arbeitssprache ist meistens Englisch. Da gibt es das Problem gar nicht, da gibt es nur eine Anrede. Wenn wir aber auf Deutsch wechseln, zum Beispiel weil ein deutscher Kunde dabei ist, dann wird es kompliziert. Meine Kollegin aus Brasilien hat am Anfang einfach alle geduzt, auch den Chef, weil sie mit dem Sie unsicher war. Ein anderer Kollege hat aus Unsicherheit alle gesiezt, sogar die Praktikanten. Irgendwann haben wir gesagt, intern duzen wir uns alle, das ist für alle einfacher und keiner muss mehr überlegen. Die Jüngeren fanden das sowieso normal, aber darum ging es eigentlich gar nicht.",
       "loesung": 9,
       "stelle": "das ist für alle einfacher und keiner muss mehr überlegen",
       "erklaerung": "Der Grund ist die Unsicherheit im gemischten Team, nicht das Alter.",
       "frage": "Welche Aussage passt zu Herr Ito?",
       "opt": [
        "Jüngere Mitarbeiter erwarten heute, dass man sich duzt.",
        "Im Umgang mit Kunden sollte man beim Sie bleiben.",
        "In Handwerksbetrieben hat man sich schon immer geduzt.",
        "Mit dem Du verschwinden Hierarchien nicht, man sieht sie nur schlechter.",
        "Das Du sollte immer von der ranghöheren Person angeboten werden.",
        "Ein Du, das von oben angeordnet wird, wirkt gezwungen.",
        "Wer einmal das Du angeboten hat, kann es kaum zurücknehmen.",
        "Wenn man sich duzt, fällt es schwerer, Kritik zu äußern.",
        "Das Sie schützt vor zu viel Nähe am Arbeitsplatz.",
        "In Teams aus vielen Ländern ist das Du einfach praktischer."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Frau Lehmann, Geschäftsführerin eines Pflegedienstes",
       "wer": "Frau",
       "text": "Wir sind ein kleiner Betrieb, zweiundzwanzig Leute, und wir duzen uns alle, auch mich. Das habe ich damals selbst angeboten, und ich würde es auch nicht zurücknehmen. Aber man sollte sich nichts vormachen. Am Ende des Monats bin ich die, die die Dienstpläne macht, die Gehälter verhandelt und im schlimmsten Fall kündigt. Daran ändert das Du gar nichts. Ich habe manchmal den Eindruck, dass gerade neue Kollegen das vergessen und dann enttäuscht sind, wenn ich eine Entscheidung treffe, die ihnen nicht gefällt. Das Du klingt nach gleicher Augenhöhe, aber die gibt es in einem Betrieb nun mal nicht ganz. Das sollte man offen sagen.",
       "loesung": 3,
       "stelle": "Daran ändert das Du gar nichts",
       "erklaerung": "Sie bleibt die Chefin. Das Du lässt das nur weniger sichtbar erscheinen.",
       "frage": "Welche Aussage passt zu Frau Lehmann?",
       "opt": [
        "Jüngere Mitarbeiter erwarten heute, dass man sich duzt.",
        "Im Umgang mit Kunden sollte man beim Sie bleiben.",
        "In Handwerksbetrieben hat man sich schon immer geduzt.",
        "Mit dem Du verschwinden Hierarchien nicht, man sieht sie nur schlechter.",
        "Das Du sollte immer von der ranghöheren Person angeboten werden.",
        "Ein Du, das von oben angeordnet wird, wirkt gezwungen.",
        "Wer einmal das Du angeboten hat, kann es kaum zurücknehmen.",
        "Wenn man sich duzt, fällt es schwerer, Kritik zu äußern.",
        "Das Sie schützt vor zu viel Nähe am Arbeitsplatz.",
        "In Teams aus vielen Ländern ist das Du einfach praktischer."
       ],
       "fest": true
      }
     ]
    }
   ]
  },
  {
   "nr": 4,
   "art": "gespraech",
   "name": "Hören: Besprechung",
   "kurz": "Eine Besprechung, sechs Aussagen",
   "was": "Eine Besprechung mit drei oder vier Personen, in sechs Abschnitten. Zu jedem Abschnitt eine Aussage: richtig oder falsch? Nur einmal hören.",
   "tipp": "Wer schlägt was vor, und was wird am Ende beschlossen? Ein Vorschlag ist noch kein Beschluss.",
   "zeichen": "🏢",
   "farbe": "lila",
   "punkte": 6,
   "mal": 1,
   "runden": [
    {
     "id": "bc1h4s1",
     "titel": "Lager: Planung für das Weihnachtsgeschäft",
     "aufgaben": [
      {
       "ort": "Besprechung — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "So, dann fangen wir an. Herr Engel kommt etwas später, der hängt noch am Telefon mit einem Spediteur. Thema ist das Weihnachtsgeschäft. Herr Kaiser, wie sieht es mit den Mengen aus?"
        },
        {
         "wer": "Mann",
         "text": "Also, laut Prognose vom Vertrieb rechnen wir ab Mitte November mit einem Drittel mehr Sendungen als letztes Jahr. Das ist ordentlich."
        },
        {
         "wer": "Frau",
         "text": "Ein Drittel mehr? Letztes Jahr waren wir doch schon am Limit."
        },
        {
         "wer": "Mann",
         "text": "Eben. Und letztes Jahr hatten wir dreißig Leute von der Zeitarbeit. Ich weiß nicht, ob die Agentur uns diesmal überhaupt so viele schicken kann."
        }
       ],
       "satz": "Für das Weihnachtsgeschäft wird mit deutlich mehr Sendungen gerechnet als im Vorjahr.",
       "loesung": true,
       "stelle": "rechnen wir ab Mitte November mit einem Drittel mehr Sendungen",
       "erklaerung": "Ein Drittel mehr als letztes Jahr ist deutlich mehr."
      },
      {
       "ort": "Besprechung — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Entschuldigung, Frau Albers, bin schon da. Worum geht es gerade?"
        },
        {
         "wer": "Frau",
         "text": "Um die Zeitarbeit. Herr Kaiser meint, die Agentur kann vielleicht nicht genug Leute liefern."
        },
        {
         "wer": "Mann",
         "text": "Ach, das kann ich gleich beantworten, da hab ich letzte Woche angerufen. Die können uns höchstens zwanzig zusagen, mehr nicht. Die haben dieses Jahr zwei neue Großkunden in der Gegend."
        },
        {
         "wer": "Mann",
         "text": "Zwanzig. Das reicht hinten und vorne nicht, Herr Engel."
        }
       ],
       "satz": "Die Zeitarbeitsfirma kann so viele Leute schicken wie im letzten Jahr.",
       "loesung": false,
       "stelle": "Die können uns höchstens zwanzig zusagen, mehr nicht",
       "erklaerung": "Letztes Jahr waren es dreißig, jetzt höchstens zwanzig."
      },
      {
       "ort": "Besprechung — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut, dann brauchen wir einen Plan B. Was ist mit Sonderschichten am Samstag?"
        },
        {
         "wer": "Mann",
         "text": "Das geht nur mit dem Betriebsrat, und der hat letztes Jahr schon gesagt, mehr als zwei Samstage im Monat machen sie nicht mit."
        },
        {
         "wer": "Frau",
         "text": "Zwei Samstage im Monat wären ja schon was. Ich red mit Frau Hoffmann vom Betriebsrat, die ist eigentlich immer gesprächsbereit, wenn man früh genug kommt."
        },
        {
         "wer": "Mann",
         "text": "Und wenn wir die Samstage mit Freiwilligen besetzen? Da gibt es ja immer ein paar, die das Geld gut gebrauchen können."
        },
        {
         "wer": "Frau",
         "text": "Das wäre mir sowieso am liebsten."
        }
       ],
       "satz": "Frau Albers will selbst mit dem Betriebsrat über die Samstage sprechen.",
       "loesung": true,
       "stelle": "Ich red mit Frau Hoffmann vom Betriebsrat",
       "erklaerung": "Frau Hoffmann ist die Ansprechpartnerin im Betriebsrat, Frau Albers geht selbst zu ihr."
      },
      {
       "ort": "Besprechung — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Noch was anderes. Nach Weihnachten kommen immer die meisten Rücksendungen. Letztes Jahr hatten wir im Januar einen Rückstau bis Mitte Februar."
        },
        {
         "wer": "Mann",
         "text": "Bis Ende Februar, Herr Engel, wenn ich mich richtig erinnere."
        },
        {
         "wer": "Mann",
         "text": "Ja gut, Ende Februar. Mein Vorschlag wäre, dass wir die Retouren dieses Jahr an einen Dienstleister geben, zumindest für Januar. Ich hab da ein Angebot aus Kassel, das klingt vernünftig."
        },
        {
         "wer": "Frau",
         "text": "Das ist aber nicht billig, oder?"
        },
        {
         "wer": "Mann",
         "text": "Billig nicht. Aber billiger als zwei Monate Chaos."
        }
       ],
       "satz": "Herr Engel möchte die Rücksendungen im Januar im eigenen Lager bearbeiten lassen.",
       "loesung": false,
       "stelle": "dass wir die Retouren dieses Jahr an einen Dienstleister geben",
       "erklaerung": "Er will die Arbeit an eine externe Firma abgeben."
      },
      {
       "ort": "Besprechung — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Schicken Sie mir das Angebot bitte bis Freitag, dann schau ich es mir an. Aber ich sag gleich, ohne Herrn Brückner aus der Geschäftsführung geht da nichts, das ist über meinem Budget."
        },
        {
         "wer": "Mann",
         "text": "Klar, bekommen Sie."
        },
        {
         "wer": "Mann",
         "text": "Wäre es nicht gut, wenn wir das Herrn Brückner zusammen vorstellen? Der fragt bei so was immer nach den Zahlen vom Lager, und die hab ich im Kopf."
        },
        {
         "wer": "Frau",
         "text": "Gute Idee, Herr Kaiser. Dann machen wir einen Termin zu dritt."
        }
       ],
       "satz": "Über den Auftrag an den Dienstleister kann Frau Albers allein entscheiden.",
       "loesung": false,
       "stelle": "das ist über meinem Budget",
       "erklaerung": "Sie braucht die Zustimmung der Geschäftsführung."
      },
      {
       "ort": "Besprechung — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut, fassen wir zusammen. Herr Engel schickt das Angebot, ich kläre die Samstage mit dem Betriebsrat, und Herr Kaiser, Sie fragen bitte noch mal bei einer zweiten Zeitarbeitsfirma nach."
        },
        {
         "wer": "Mann",
         "text": "Die in Baunatal? Mit denen hatten wir vor zwei Jahren Ärger, die Leute kamen ohne Sicherheitsschuhe."
        },
        {
         "wer": "Frau",
         "text": "Dann eben eine andere. Hauptsache, wir haben bis Ende Oktober eine Zusage über zehn weitere Leute."
        },
        {
         "wer": "Mann",
         "text": "Und wann sehen wir uns wieder?"
        },
        {
         "wer": "Frau",
         "text": "Gleiche Zeit in zwei Wochen."
        }
       ],
       "satz": "Herr Kaiser soll bei einer weiteren Zeitarbeitsfirma anfragen.",
       "loesung": true,
       "stelle": "Sie fragen bitte noch mal bei einer zweiten Zeitarbeitsfirma nach",
       "erklaerung": "Die Firma in Baunatal kommt nicht in Frage, aber eine andere soll angefragt werden."
      }
     ]
    },
    {
     "id": "bc1h4s2",
     "titel": "Projekt: Neue Software für Reisekosten",
     "aufgaben": [
      {
       "ort": "Besprechung — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Danke, dass Sie alle da sind. Ich will heute klären, ob wir mit der neuen Reisekostensoftware wie geplant im Januar starten können. Herr Demir, Sie hatten ja die Testphase in der Buchhaltung."
        },
        {
         "wer": "Mann",
         "text": "Genau. Also, um es kurz zu machen: Die Software selbst läuft stabil. Das Problem sind die Belege."
        },
        {
         "wer": "Frau",
         "text": "Die Belege? Inwiefern?"
        },
        {
         "wer": "Mann",
         "text": "Die Leute sollen die Quittungen ja mit dem Handy fotografieren. Und die Hälfte der Fotos ist unscharf, schief oder abgeschnitten. Dann können wir sie nicht anerkennen und müssen nachfragen. Das kostet uns im Moment mehr Zeit als vorher."
        }
       ],
       "satz": "In der Testphase gab es vor allem technische Probleme mit der Software.",
       "loesung": false,
       "stelle": "Die Software selbst läuft stabil",
       "erklaerung": "Das Problem sind die schlechten Fotos der Belege, nicht das Programm."
      },
      {
       "ort": "Besprechung — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Darf ich da kurz einhaken? Ich bin ja für den Personalrat hier. Bei uns haben sich mehrere Kollegen gemeldet, die gar kein Diensthandy haben. Die sollen das mit ihrem privaten Handy machen, und das wollen einige nicht."
        },
        {
         "wer": "Frau",
         "text": "Das ist ein berechtigter Punkt, Frau Weiß. Herr Demir, geht das auch anders?"
        },
        {
         "wer": "Mann",
         "text": "Man kann die Belege auch einscannen und am Rechner hochladen. Das ist nur umständlicher."
        },
        {
         "wer": "Frau",
         "text": "Umständlicher ist in Ordnung. Wichtig ist, dass niemand gezwungen wird, sein privates Gerät zu benutzen."
        }
       ],
       "satz": "Der Personalrat will sicherstellen, dass niemand sein privates Handy verwenden muss.",
       "loesung": true,
       "stelle": "dass niemand gezwungen wird, sein privates Gerät zu benutzen",
       "erklaerung": "Frau Weiß akzeptiert den umständlicheren Weg, solange er freiwillig bleibt."
      },
      {
       "ort": "Besprechung — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut, das nehmen wir so auf. Zurück zu den unscharfen Fotos. Was schlagen Sie vor, Herr Demir?"
        },
        {
         "wer": "Mann",
         "text": "Eine kurze Schulung. Keine große Sache, eine halbe Stunde online, wie man einen Beleg richtig fotografiert. Klingt banal, ich weiß."
        },
        {
         "wer": "Frau",
         "text": "Banal nicht. Aber eine halbe Stunde für alle sechshundert Mitarbeiter, das ist schon was."
        },
        {
         "wer": "Mann",
         "text": "Nein, nicht für alle. Nur für die, die regelmäßig reisen, das sind vielleicht hundertachtzig. Die anderen bekommen eine Anleitung mit Bildern."
        }
       ],
       "satz": "Herr Demir möchte alle Mitarbeiter online schulen lassen.",
       "loesung": false,
       "stelle": "Nur für die, die regelmäßig reisen",
       "erklaerung": "Die Schulung ist nur für die Vielreisenden, die anderen bekommen eine Anleitung."
      },
      {
       "ort": "Besprechung — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und schaffen wir das bis Januar?"
        },
        {
         "wer": "Mann",
         "text": "Ehrlich gesagt, knapp. Im Dezember ist bei uns Jahresabschluss, da kann ich niemanden für Schulungen abstellen."
        },
        {
         "wer": "Frau",
         "text": "Muss es denn unbedingt Januar sein? Was spricht gegen Februar?"
        },
        {
         "wer": "Frau",
         "text": "Na ja, der Vertrag mit dem alten Anbieter läuft Ende Januar aus. Wenn wir verlängern, dann gleich um ein ganzes Jahr, das war deren Bedingung."
        },
        {
         "wer": "Mann",
         "text": "Das wäre natürlich ärgerlich."
        }
       ],
       "satz": "Der alte Vertrag kann nur um ein ganzes Jahr verlängert werden.",
       "loesung": true,
       "stelle": "Wenn wir verlängern, dann gleich um ein ganzes Jahr",
       "erklaerung": "Deshalb ist ein späterer Start im Februar teuer."
      },
      {
       "ort": "Besprechung — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und wenn wir in zwei Schritten starten? Erst im Januar mit einer Abteilung, die viel reist, und dann nach und nach die anderen."
        },
        {
         "wer": "Frau",
         "text": "Hm. Das hieße, dass wir eine Zeit lang zwei Systeme parallel haben."
        },
        {
         "wer": "Mann",
         "text": "Das wäre für die Buchhaltung kein Problem, Frau Roth, das kriegen wir hin. Was noch auf Papier kommt, machen wir eben wie früher von Hand."
        },
        {
         "wer": "Frau",
         "text": "Gut, dann klingt das machbar."
        }
       ],
       "satz": "Herr Demir befürchtet, dass zwei Systeme gleichzeitig die Buchhaltung überlasten.",
       "loesung": false,
       "stelle": "Das wäre für die Buchhaltung kein Problem",
       "erklaerung": "Er sieht keine Schwierigkeit und unterstützt den Vorschlag."
      },
      {
       "ort": "Besprechung — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Dann halten wir fest: Wir starten im Januar mit dem Vertrieb, der reist am meisten. Herr Demir organisiert die Schulung für den Vertrieb noch im November, also vor dem Jahresabschluss. Und Frau Weiß, Sie formulieren bitte einen Satz für die Anleitung, dass das private Handy freiwillig ist."
        },
        {
         "wer": "Frau",
         "text": "Mach ich. Den schicke ich Ihnen vorher zur Abstimmung."
        },
        {
         "wer": "Mann",
         "text": "Und wann sind die anderen Abteilungen dran?"
        },
        {
         "wer": "Frau",
         "text": "Das entscheiden wir im März, wenn wir sehen, wie es im Vertrieb läuft."
        }
       ],
       "satz": "Die Schulung für den Vertrieb soll noch vor dem Jahresabschluss stattfinden.",
       "loesung": true,
       "stelle": "organisiert die Schulung für den Vertrieb noch im November",
       "erklaerung": "Der Jahresabschluss ist im Dezember, die Schulung schon im November."
      }
     ]
    },
    {
     "id": "bc1h4s3",
     "titel": "Hotel: Vorbereitung einer Firmentagung",
     "aufgaben": [
      {
       "ort": "Besprechung — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Also, Tagung der Firma Bergmann, nächsten Donnerstag und Freitag, hundertvierzig Teilnehmer. Das ist für unser Haus eine der größten Veranstaltungen in diesem Jahr. Frau Ivanova, wie sieht es mit den Zimmern aus?"
        },
        {
         "wer": "Frau",
         "text": "Wir haben hundertzehn Zimmer für die Gruppe reserviert. Gestern kam aber eine Mail, dass noch zwölf Personen dazukommen. Und am Donnerstag sind wir praktisch voll, wegen der Hochzeit am Wochenende reisen einige Gäste schon Donnerstag an."
        },
        {
         "wer": "Frau",
         "text": "Und was machen wir mit den zwölf?"
        },
        {
         "wer": "Frau",
         "text": "Ich hab beim Hotel am Bahnhof angefragt, die hätten noch Platz. Wir müssten nur einen Fahrdienst organisieren."
        }
       ],
       "satz": "Alle Tagungsgäste können im eigenen Hotel übernachten.",
       "loesung": false,
       "stelle": "Ich hab beim Hotel am Bahnhof angefragt, die hätten noch Platz",
       "erklaerung": "Zwölf Gäste müssen in einem anderen Hotel unterkommen."
      },
      {
       "ort": "Besprechung — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Darf ich was zum Essen sagen? Die haben ja für Donnerstagabend ein Buffet bestellt. Jetzt kam eine Liste mit Unverträglichkeiten, und das sind ziemlich viele. Achtzehn vegetarisch, sieben vegan, fünf ohne Gluten und einer mit Nussallergie, und zwar schwer."
        },
        {
         "wer": "Frau",
         "text": "Schwer heißt?"
        },
        {
         "wer": "Mann",
         "text": "Schwer heißt, bei einem Buffet kann ich nicht garantieren, dass nicht irgendwer mit dem Löffel von der Nusssoße in die Kartoffeln geht. Für den Herrn mache ich ein eigenes Gericht, das wird ihm direkt an den Platz gebracht."
        }
       ],
       "satz": "Der Koch will für einen Gast mit Allergie gesondert kochen.",
       "loesung": true,
       "stelle": "Für den Herrn mache ich ein eigenes Gericht",
       "erklaerung": "Wegen der schweren Nussallergie bekommt der Gast ein eigenes Essen an den Platz."
      },
      {
       "ort": "Besprechung — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Dann zur Technik. Die wollen im großen Saal zwei Leinwände und eine Liveübertragung für Kollegen, die nicht anreisen können."
        },
        {
         "wer": "Frau",
         "text": "Eine Liveübertragung? Davon stand im Vertrag nichts."
        },
        {
         "wer": "Mann",
         "text": "Nein, das kam letzte Woche telefonisch dazu. Technisch ist das kein Problem, unser Internet im Saal reicht dafür. Aber ich brauche dann jemanden, der zwei Tage lang nur Kamera und Ton betreut. Das kann ich nicht nebenbei machen, ich hab am Freitag noch die Vorbereitung für die Hochzeit."
        },
        {
         "wer": "Frau",
         "text": "Verstehe. Dann muss das extra berechnet werden."
        }
       ],
       "satz": "Der Techniker hält die Liveübertragung für technisch nicht machbar.",
       "loesung": false,
       "stelle": "Technisch ist das kein Problem",
       "erklaerung": "Das Problem ist das Personal, nicht die Technik."
      },
      {
       "ort": "Besprechung — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ich ruf heute noch bei Frau Bergmann an und sag ihr, dass die Übertragung und der Fahrdienst zusätzlich kosten. Herr Kessler, können Sie mir bis Mittag sagen, was ein externer Techniker für zwei Tage kostet?"
        },
        {
         "wer": "Mann",
         "text": "Bis Mittag wird knapp, ich muss erst bei der Firma in Gießen anrufen. Sagen wir drei Uhr?"
        },
        {
         "wer": "Frau",
         "text": "Drei Uhr ist auch in Ordnung."
        },
        {
         "wer": "Frau",
         "text": "Und den Fahrdienst rechne ich aus. Ich hab noch ungefähre Zahlen vom letzten Mal."
        }
       ],
       "satz": "Herr Kessler kann die Kosten für den Techniker bis Mittag nennen.",
       "loesung": false,
       "stelle": "Bis Mittag wird knapp",
       "erklaerung": "Man einigt sich auf drei Uhr nachmittags."
      },
      {
       "ort": "Besprechung — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Eine Sache noch zum Frühstück am Freitag. Die Tagung beginnt um acht. Wenn hundertvierzig Leute zwischen sieben und halb acht frühstücken wollen, plus unsere normalen Hotelgäste, dann wird das im Frühstücksraum eng."
        },
        {
         "wer": "Frau",
         "text": "Wie eng?"
        },
        {
         "wer": "Mann",
         "text": "Na ja, Schlange bis in die Lobby. Ich würde vorschlagen, dass wir für die Tagungsgäste ein zweites Buffet im Foyer vor dem Saal aufbauen. Kaffee, Brötchen, Obst, nichts Großes."
        },
        {
         "wer": "Frau",
         "text": "Gute Idee, Herr Moreau. Machen wir."
        }
       ],
       "satz": "Für die Tagungsgäste gibt es am Freitag ein zusätzliches Frühstück vor dem Saal.",
       "loesung": true,
       "stelle": "ein zweites Buffet im Foyer vor dem Saal aufbauen",
       "erklaerung": "Der Vorschlag des Kochs wird sofort angenommen."
      },
      {
       "ort": "Besprechung — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut. Dann treffen wir uns am Mittwoch um vier noch mal kurz und gehen den Ablauf Stunde für Stunde durch."
        },
        {
         "wer": "Frau",
         "text": "Mittwoch um vier bin ich allein an der Rezeption, da kann ich nicht weg."
        },
        {
         "wer": "Frau",
         "text": "Ach so, Frau Ivanova, stimmt. Dann machen wir es um halb sechs, nach der Schichtübergabe. Passt das allen?"
        },
        {
         "wer": "Mann",
         "text": "Bei mir ja, solange es nicht länger als eine halbe Stunde dauert, dann geht das Abendgeschäft los."
        },
        {
         "wer": "Mann",
         "text": "Passt."
        }
       ],
       "satz": "Das nächste Treffen wird wegen Frau Ivanova später angesetzt.",
       "loesung": true,
       "stelle": "Dann machen wir es um halb sechs",
       "erklaerung": "Frau Ivanova ist um vier allein an der Rezeption, deshalb wird verschoben."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tbc1hl1",
   "titel": "Prüfungslauf 1",
   "minuten": 40,
   "teile": [
    {
     "nr": 1,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Gespräch 1 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Nowak, ich hab das Angebot von dem neuen Verpackungslieferanten durchgerechnet."
        },
        {
         "wer": "Mann",
         "text": "Und? Sind die wirklich so viel günstiger?"
        },
        {
         "wer": "Frau",
         "text": "Pro Karton ja, knapp elf Prozent. Aber die liefern nur ab einer Mindestmenge von zwanzigtausend Stück. Das heißt, wir bräuchten mehr Lagerfläche, und die haben wir im Moment nicht."
        },
        {
         "wer": "Mann",
         "text": "Hm. Das hatten die am Telefon so nicht gesagt."
        }
       ],
       "satz": "Der neue Lieferant ist zwar billiger, hat aber eine Bedingung, die schwierig ist.",
       "loesung": true,
       "stelle": "die liefern nur ab einer Mindestmenge von zwanzigtausend Stück",
       "erklaerung": "Wegen der Mindestmenge bräuchte die Firma mehr Lagerplatz."
      },
      {
       "ort": "Gespräch 1 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und wenn wir das Lager in Hallstadt mitbenutzen? Da ist doch seit dem Frühjahr Platz frei."
        },
        {
         "wer": "Frau",
         "text": "Daran hab ich auch gedacht. Aber dann kommen die Fahrten dazu, zwei, dreimal die Woche hin und her. Wenn ich das mitrechne, bleiben von den elf Prozent vielleicht noch drei übrig."
        },
        {
         "wer": "Mann",
         "text": "Drei Prozent. Dafür der ganze Aufwand?"
        }
       ],
       "satz": "Mit dem zusätzlichen Lager in Hallstadt würde die Firma elf Prozent sparen.",
       "loesung": false,
       "stelle": "bleiben von den elf Prozent vielleicht noch drei übrig",
       "erklaerung": "Die Fahrten fressen den größten Teil der Ersparnis auf."
      },
      {
       "ort": "Gespräch 1 — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Na ja, ganz so schnell würde ich es nicht abhaken. Unser jetziger Lieferant war dieses Jahr dreimal zu spät, und einmal stand deshalb die Abfüllung einen halben Tag."
        },
        {
         "wer": "Mann",
         "text": "Stimmt, das war im Juli."
        },
        {
         "wer": "Frau",
         "text": "Ich würde mit den Neuen erst mal über die Mindestmenge reden. Vielleicht gehen die auf zehntausend runter, wenn wir uns für zwei Jahre binden."
        },
        {
         "wer": "Mann",
         "text": "Gut, versuchen Sie es. Aber nichts unterschreiben, bevor ich es gesehen hab."
        }
       ],
       "frage": "Was will die Frau als Nächstes tun?",
       "opt": [
        "Mit dem neuen Lieferanten über eine kleinere Mindestmenge verhandeln.",
        "Den Vertrag mit dem neuen Lieferanten sofort abschließen.",
        "Den jetzigen Lieferanten wegen der Verspätungen kündigen."
       ],
       "loesung": 0,
       "stelle": "Ich würde mit den Neuen erst mal über die Mindestmenge reden",
       "erklaerung": "Unterschreiben darf sie noch nichts. Erst wird verhandelt."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Frau Okoye, ich wollte nur sagen, die Staplerunterweisung am Dienstag, die findet nicht in der Halle statt."
        },
        {
         "wer": "Frau",
         "text": "Nicht? Wo dann?"
        },
        {
         "wer": "Mann",
         "text": "Im Schulungsraum über der Kantine. In der Halle wird nächste Woche der Boden neu versiegelt, da darf keiner rein."
        },
        {
         "wer": "Frau",
         "text": "Ach so. Und die praktische Übung?"
        }
       ],
       "satz": "Die Unterweisung wird verlegt, weil der Hallenboden bearbeitet wird.",
       "loesung": true,
       "stelle": "In der Halle wird nächste Woche der Boden neu versiegelt",
       "erklaerung": "Wegen der Bodenarbeiten darf niemand in die Halle."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Die machen wir auf dem Hof hinten bei der Rampe. Wenn es nicht gerade schüttet."
        },
        {
         "wer": "Frau",
         "text": "Und wenn es schüttet?"
        },
        {
         "wer": "Mann",
         "text": "Dann holen wir die Praxis nach, sobald die Halle wieder frei ist. Die Theorie zählt trotzdem. Also wer am Dienstag fehlt, muss im Januar komplett noch mal kommen, nicht nur zur Übung."
        }
       ],
       "satz": "Wer die Unterweisung am Dienstag verpasst, muss im Januar nur noch die praktische Übung machen.",
       "loesung": false,
       "stelle": "muss im Januar komplett noch mal kommen, nicht nur zur Übung",
       "erklaerung": "„komplett\" heißt: Theorie und Praxis. Die Satzaussage dreht das um."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut. Bei mir sind zwei Neue im Team, Herr Haddad und Herr Kraus. Die müssen ja auf jeden Fall hin."
        },
        {
         "wer": "Mann",
         "text": "Genau. Und bitte sagen Sie denen, dass sie Sicherheitsschuhe mitbringen. Letztes Mal standen drei Leute in Turnschuhen da, und die durften dann nicht auf den Stapler."
        },
        {
         "wer": "Frau",
         "text": "Mach ich. Bekommen die das schriftlich?"
        },
        {
         "wer": "Mann",
         "text": "Die Einladung ist schon raus, da steht es auch drin. Aber Sie wissen ja, wie das mit dem Lesen ist."
        }
       ],
       "frage": "Worum bittet der Mann die Frau?",
       "opt": [
        "Die Einladung an die neuen Kollegen zu verschicken.",
        "Die neuen Kollegen auf die richtigen Schuhe hinzuweisen.",
        "Sicherheitsschuhe für die neuen Kollegen zu bestellen."
       ],
       "loesung": 1,
       "stelle": "bitte sagen Sie denen, dass sie Sicherheitsschuhe mitbringen",
       "erklaerung": "Die Einladung ist schon verschickt. Er will nur, dass die Frau zusätzlich daran erinnert."
      }
     ]
    },
    {
     "nr": 2,
     "art": "vortrag",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Frau",
       "text": "Guten Tag, meine Damen und Herren. Ich leite bei einem Paketdienst die Zustellung in der Innenstadt von Freiburg, und wir haben vor zwei Jahren angefangen, einen Teil der Pakete nicht mehr mit Transportern, sondern mit Lastenrädern auszuliefern. Ich wurde gebeten, Ihnen eine Bilanz vorzustellen. Ich sag gleich vorweg: Wer heute eine Werbeveranstaltung für Lastenräder erwartet, wird enttäuscht. Es funktioniert, aber nicht überall und nicht so, wie wir uns das am Anfang vorgestellt haben.",
       "frage": "Welche Haltung kündigt die Rednerin an?",
       "opt": [
        "Sie will Lastenräder ohne Einschränkung empfehlen.",
        "Sie will eine Bilanz mit Vor- und Nachteilen ziehen.",
        "Sie will erklären, warum das Projekt gescheitert ist."
       ],
       "loesung": 1,
       "stelle": "Es funktioniert, aber nicht überall",
       "erklaerung": "Keine Werbung, aber auch kein Scheitern: Es funktioniert mit Einschränkungen."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Frau",
       "text": "Wie sieht das konkret aus? Wir haben am Stadtrand ein Depot, dort werden die Pakete sortiert. Früher fuhr von da jeder Transporter direkt in die Altstadt. Heute bringen zwei große Lastwagen die Pakete morgens zu sogenannten Mikrodepots, das sind im Grunde Container auf zwei Parkplätzen, die uns die Stadt zur Verfügung stellt. Und von dort aus fahren elf Räder die letzten Kilometer. Jedes Rad schafft, je nach Tag, zwischen sechzig und achtzig Stopps. Ein Transporter kommt bei uns in der Altstadt auf etwa hundertzwanzig.",
       "frage": "Was sind die Mikrodepots?",
       "opt": [
        "Container in der Stadt, von denen aus die Räder starten.",
        "Große Lagerhallen am Stadtrand.",
        "Besondere Parkplätze für die Transporter."
       ],
       "loesung": 0,
       "stelle": "das sind im Grunde Container auf zwei Parkplätzen",
       "erklaerung": "Am Stadtrand ist das große Depot. Die Mikrodepots stehen auf Parkplätzen in der Stadt."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Frau",
       "text": "Jetzt denken Sie sicher, sechzig bis achtzig gegen hundertzwanzig, das ist ja deutlich schlechter. Auf den ersten Blick ja. Aber man muss sehen, wie viel Zeit der Transporter in der Altstadt verliert. Unsere Fahrer haben früher im Schnitt zwanzig Minuten pro Stunde mit Parkplatzsuche verbracht, oder sie haben in zweiter Reihe gehalten und Strafzettel kassiert. Die Strafzettel haben uns übrigens im Jahr mehr gekostet, als wir für die Miete der Mikrodepots zahlen. Das hat im Haus kaum jemand gewusst, bis wir es zusammengerechnet haben.",
       "frage": "Was hat die Firma beim Nachrechnen festgestellt?",
       "opt": [
        "Dass die Mikrodepots teurer sind als erwartet.",
        "Dass die Transporter insgesamt schneller sind als die Räder.",
        "Dass die Strafzettel mehr gekostet haben als die Miete der Mikrodepots."
       ],
       "loesung": 2,
       "stelle": "Die Strafzettel haben uns übrigens im Jahr mehr gekostet",
       "erklaerung": "Der Vergleich der Stopps täuscht, weil die Transporter viel Zeit verlieren."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Frau",
       "text": "Wo funktioniert es nicht? Erstens bei schweren Sendungen. Getränkekisten, Möbel in Teilen, Druckerpapier für Büros, das bleibt auf dem Transporter, da hat das Rad keine Chance. Zweitens bei Steigungen. Freiburg ist ja nicht flach, und in die Viertel am Hang fahren wir nach wie vor mit dem Auto. Wir haben das am Anfang probiert, mit stärkeren Motoren, aber die Akkus waren dann mittags leer. Drittens, und das hat uns überrascht, bei Geschäftskunden mit festen Annahmezeiten. Da ist das Rad einfach nicht flexibel genug.",
       "frage": "Was hat die Firma überrascht?",
       "opt": [
        "Dass die Räder bei Geschäftskunden mit festen Zeiten schlecht funktionieren.",
        "Dass die Akkus auch bei Steigungen gut halten.",
        "Dass schwere Sendungen problemlos aufs Rad passen."
       ],
       "loesung": 0,
       "stelle": "und das hat uns überrascht, bei Geschäftskunden mit festen Annahmezeiten",
       "erklaerung": "Gewicht und Steigungen waren erwartbare Probleme, die Geschäftskunden nicht."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Frau",
       "text": "Ein Thema, das ich unbedingt ansprechen will, ist das Personal. Am Anfang haben wir gedacht, wir nehmen einfach unsere Fahrer und setzen sie aufs Rad. Das war naiv. Ein Teil der Kollegen wollte das auf keinen Fall, vor allem die Älteren, und das muss man respektieren. Bei anderen war es genau umgekehrt. Einer unserer Fahrer, der seit fünfzehn Jahren im Transporter saß, hat nach drei Monaten auf dem Rad zu mir gesagt, er hat seit Jahren nicht mehr so gut geschlafen. Heute fahren bei uns nur Freiwillige.",
       "frage": "Wie hat die Firma die Frage des Personals gelöst?",
       "opt": [
        "Alle Fahrer müssen abwechselnd Rad fahren.",
        "Auf den Rädern fahren nur noch Leute, die das wollen.",
        "Für die Räder wurden nur junge Leute eingestellt."
       ],
       "loesung": 1,
       "stelle": "Heute fahren bei uns nur Freiwillige",
       "erklaerung": "Dass die Älteren oft nicht wollten, heißt nicht, dass man nur Junge eingestellt hat."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Frau",
       "text": "Kommen wir zum Wetter, darauf werde ich nämlich immer angesprochen. Ja, wir fahren auch im Winter. Wir haben gute Kleidung angeschafft, wirklich gute, nicht die billigste, und das hat sich gelohnt. Was wir gelernt haben: Regen ist kein großes Problem. Schnee und vor allem Glatteis schon. An solchen Tagen, das waren letzten Winter elf Tage, steigen wir komplett auf Transporter um. Dafür halten wir im Depot zwei Fahrzeuge in Reserve. Das kostet natürlich, aber anders geht es nicht.",
       "frage": "Was macht die Firma bei Glatteis?",
       "opt": [
        "Sie liefert an solchen Tagen gar nicht aus.",
        "Sie setzt Reservefahrzeuge statt der Räder ein.",
        "Sie gibt den Fahrern wärmere Kleidung."
       ],
       "loesung": 1,
       "stelle": "steigen wir komplett auf Transporter um",
       "erklaerung": "Die Kleidung hilft bei Regen, bei Glatteis fahren Transporter."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Frau",
       "text": "Und die Umwelt? Natürlich sparen wir Diesel, das ist klar. Aber ehrlich gesagt war das für unsere Kunden in der Altstadt gar nicht das Wichtigste. Was wir in den Rückmeldungen am häufigsten lesen, ist etwas anderes: dass die Straßen ruhiger sind und dass die Fahrer mehr Zeit für ein kurzes Gespräch haben. Ein Buchhändler hat uns geschrieben, unser Fahrer weiß inzwischen, wann er Mittagspause macht, und klingelt dann bei der Nachbarin. So etwas steht in keiner Bilanz, aber es bindet Kunden.",
       "frage": "Was schätzen die Kunden laut den Rückmeldungen am meisten?",
       "opt": [
        "Den geringeren Dieselverbrauch.",
        "Die schnellere Lieferung.",
        "Mehr Ruhe und einen persönlicheren Kontakt."
       ],
       "loesung": 2,
       "stelle": "dass die Straßen ruhiger sind",
       "erklaerung": "Den Diesel nennt die Rednerin, für die Kunden ist er aber nicht das Wichtigste."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Frau",
       "text": "Mein Fazit, und dann freue ich mich auf Ihre Fragen. Lastenräder lohnen sich, wenn drei Dinge zusammenkommen: eine dichte Innenstadt, eine Stadt, die Flächen für Mikrodepots hergibt, und Fahrer, die es freiwillig machen. Fehlt eines davon, würde ich die Finger davon lassen. Wir weiten das Projekt im Frühjahr auf einen zweiten Stadtteil aus, aber nicht auf ganz Freiburg. Und wer sich das anschauen will, kann gern mal einen Vormittag mitfahren. Wir haben ein Rad mit Beifahrersitz, nur für Besucher.",
       "frage": "Was plant die Firma für das Frühjahr?",
       "opt": [
        "Das Projekt auf einen weiteren Stadtteil auszudehnen.",
        "Die Räder in ganz Freiburg einzusetzen.",
        "Ein zweites Rad mit Beifahrersitz zu kaufen."
       ],
       "loesung": 0,
       "stelle": "Wir weiten das Projekt im Frühjahr auf einen zweiten Stadtteil aus",
       "erklaerung": "„aber nicht auf ganz Freiburg\" schließt die erste Antwort aus."
      }
     ]
    },
    {
     "nr": 3,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Frau Becker, Abteilungsleiterin in einem Bauamt",
       "wer": "Frau",
       "text": "Ich leite die Abteilung für Bauanträge zusammen mit einer Kollegin, jede von uns hat eine Stelle mit zwanzig Stunden. Ich bin montags bis mittwochs da, sie mittwochs bis freitags. Der Mittwoch ist unser gemeinsamer Tag, da machen wir die Übergabe und besprechen alles, was größer ist. Am Anfang hat die Amtsleitung gefragt, wer denn nun eigentlich verantwortlich ist. Die Antwort ist: wir beide. Und ganz ehrlich, ich glaube, die Abteilung ist dadurch besser geworden. Zwei Köpfe sehen mehr als einer, und wenn eine von uns krank ist oder Urlaub hat, läuft trotzdem alles weiter. Ich würde dieses Modell jedem empfehlen, der über Teilzeit nachdenkt.",
       "loesung": 1,
       "stelle": "Zwei Köpfe sehen mehr als einer",
       "erklaerung": "Sie teilt sich die Leitung mit einer Kollegin und hält das für ein gutes Modell.",
       "frage": "Welche Aussage passt zu Frau Becker?",
       "opt": [
        "Führen in Teilzeit ist nur in kleinen Teams möglich.",
        "Eine Führungsaufgabe kann man gut mit einer zweiten Person teilen.",
        "Wer in Teilzeit führt, arbeitet oft mehr, als bezahlt wird.",
        "Mitarbeiter haben anfangs Vorbehalte gegen eine Chefin in Teilzeit.",
        "Wer in Teilzeit führt, muss lernen, Aufgaben abzugeben.",
        "In der Produktion ist Führen in Teilzeit schwerer als im Büro.",
        "Führen in Teilzeit sollte nicht nur für Eltern selbstverständlich sein.",
        "Teilzeit in einer Führungsposition schadet der Karriere.",
        "Die Geschäftsleitung muss Teilzeit in Führung aktiv fördern.",
        "Mit festen Zeiten für die Erreichbarkeit lässt sich alles gut organisieren."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Herr Okonkwo, Schichtleiter in einem Chemiewerk",
       "wer": "Mann",
       "text": "Im Büro kann ich mir das gut vorstellen, das sehe ich bei meiner Frau, die macht das seit Jahren. Aber bei uns in der Produktion? Ich habe pro Schicht achtzehn Leute, und wenn um drei Uhr nachts eine Anlage Probleme macht, dann muss jemand vor Ort entscheiden, ob abgeschaltet wird oder nicht. Das kann ich nicht am nächsten Tag per Mail klären. Wir haben es mal versucht, dass sich zwei Schichtleiter eine Stelle teilen. Das ging, solange alles ruhig lief. Beim ersten richtigen Störfall wusste die halbe Mannschaft nicht, wen sie anrufen soll. Ich sage nicht, dass es unmöglich ist. Aber es ist eine ganz andere Nummer als in der Verwaltung.",
       "loesung": 5,
       "stelle": "es ist eine ganz andere Nummer als in der Verwaltung",
       "erklaerung": "Das geteilte Modell ist bei ihm gerade gescheitert. Sein Punkt ist der Unterschied zum Büro.",
       "frage": "Welche Aussage passt zu Herr Okonkwo?",
       "opt": [
        "Führen in Teilzeit ist nur in kleinen Teams möglich.",
        "Eine Führungsaufgabe kann man gut mit einer zweiten Person teilen.",
        "Wer in Teilzeit führt, arbeitet oft mehr, als bezahlt wird.",
        "Mitarbeiter haben anfangs Vorbehalte gegen eine Chefin in Teilzeit.",
        "Wer in Teilzeit führt, muss lernen, Aufgaben abzugeben.",
        "In der Produktion ist Führen in Teilzeit schwerer als im Büro.",
        "Führen in Teilzeit sollte nicht nur für Eltern selbstverständlich sein.",
        "Teilzeit in einer Führungsposition schadet der Karriere.",
        "Die Geschäftsleitung muss Teilzeit in Führung aktiv fördern.",
        "Mit festen Zeiten für die Erreichbarkeit lässt sich alles gut organisieren."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Frau Richter, Teamleiterin im Einkauf",
       "wer": "Frau",
       "text": "Ich habe einen Vertrag über dreißig Stunden, und ich schreibe meine Zeiten auf, einfach für mich. Letzten Monat waren es im Schnitt sechsunddreißig. Das liegt nicht daran, dass mir jemand Druck macht, mein Chef ist da sehr fair. Aber die Termine richten sich halt nicht nach meinem Vertrag. Wenn der Lieferant aus Shanghai nur um siebzehn Uhr kann, dann bin ich um siebzehn Uhr dabei. Und meine Leute haben ein Recht darauf, dass ich ansprechbar bin, wenn es brennt. Ich mache das gern, ich will mich auch gar nicht beschweren. Aber wer glaubt, eine Teamleitung in Teilzeit sei ein Halbtagsjob, der irrt sich gewaltig. Die Stunden darüber bezahlt einem niemand.",
       "loesung": 2,
       "stelle": "Die Stunden darüber bezahlt einem niemand",
       "erklaerung": "Sie arbeitet regelmäßig sechs Stunden mehr pro Woche als vereinbart.",
       "frage": "Welche Aussage passt zu Frau Richter?",
       "opt": [
        "Führen in Teilzeit ist nur in kleinen Teams möglich.",
        "Eine Führungsaufgabe kann man gut mit einer zweiten Person teilen.",
        "Wer in Teilzeit führt, arbeitet oft mehr, als bezahlt wird.",
        "Mitarbeiter haben anfangs Vorbehalte gegen eine Chefin in Teilzeit.",
        "Wer in Teilzeit führt, muss lernen, Aufgaben abzugeben.",
        "In der Produktion ist Führen in Teilzeit schwerer als im Büro.",
        "Führen in Teilzeit sollte nicht nur für Eltern selbstverständlich sein.",
        "Teilzeit in einer Führungsposition schadet der Karriere.",
        "Die Geschäftsleitung muss Teilzeit in Führung aktiv fördern.",
        "Mit festen Zeiten für die Erreichbarkeit lässt sich alles gut organisieren."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Herr Vogel, Bereichsleiter in einer Spedition",
       "wer": "Mann",
       "text": "Ich habe vor einem Jahr auf achtundzwanzig Stunden reduziert, weil mein Vater pflegebedürftig geworden ist. Und ich habe gemerkt, wie ungewöhnlich das immer noch ist. In unserem Haus gibt es sechs Führungskräfte in Teilzeit, fünf davon sind Frauen mit kleinen Kindern, und dann ich. Als ich es beantragt habe, hat die Personalabteilung zweimal nachgefragt, ob ich das wirklich will, so nach dem Motto, das ist doch eher was für junge Mütter. Ich finde, da muss sich etwas in den Köpfen ändern. Es gibt so viele Gründe, warum jemand weniger arbeiten will, Pflege, Gesundheit, ein Ehrenamt, ein Studium nebenbei. Die sollten alle genauso selbstverständlich sein.",
       "loesung": 6,
       "stelle": "Die sollten alle genauso selbstverständlich sein",
       "erklaerung": "Er kritisiert, dass Teilzeit in Führung fast nur mit kleinen Kindern verbunden wird.",
       "frage": "Welche Aussage passt zu Herr Vogel?",
       "opt": [
        "Führen in Teilzeit ist nur in kleinen Teams möglich.",
        "Eine Führungsaufgabe kann man gut mit einer zweiten Person teilen.",
        "Wer in Teilzeit führt, arbeitet oft mehr, als bezahlt wird.",
        "Mitarbeiter haben anfangs Vorbehalte gegen eine Chefin in Teilzeit.",
        "Wer in Teilzeit führt, muss lernen, Aufgaben abzugeben.",
        "In der Produktion ist Führen in Teilzeit schwerer als im Büro.",
        "Führen in Teilzeit sollte nicht nur für Eltern selbstverständlich sein.",
        "Teilzeit in einer Führungsposition schadet der Karriere.",
        "Die Geschäftsleitung muss Teilzeit in Führung aktiv fördern.",
        "Mit festen Zeiten für die Erreichbarkeit lässt sich alles gut organisieren."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Frau Nguyen, Teamleiterin im Kundenservice eines Energieversorgers",
       "wer": "Frau",
       "text": "Als ich nach der Elternzeit mit fünfundzwanzig Stunden zurückkam, hatte ich am Anfang den Ehrgeiz, alles genauso zu machen wie vorher, nur schneller. Das hat genau drei Wochen geklappt. Dann war ich völlig erschöpft. Geholfen hat dann ehrlich gesagt eine Notlösung: Ich musste Aufgaben abgeben, weil ich sie einfach nicht mehr geschafft habe. Die Urlaubsplanung macht jetzt eine Kollegin, die Einarbeitung der Neuen ein Kollege, der seit zehn Jahren dabei ist. Und das Verrückte ist, die beiden machen das besser als ich früher. Ich hätte das schon viel eher tun sollen. Wer in Teilzeit führt, kann nicht mehr alles selbst in der Hand haben, und das ist gar nicht schlimm.",
       "loesung": 4,
       "stelle": "Ich musste Aufgaben abgeben",
       "erklaerung": "Sie hat gelernt, Verantwortung an Kollegen abzugeben, und findet das inzwischen gut.",
       "frage": "Welche Aussage passt zu Frau Nguyen?",
       "opt": [
        "Führen in Teilzeit ist nur in kleinen Teams möglich.",
        "Eine Führungsaufgabe kann man gut mit einer zweiten Person teilen.",
        "Wer in Teilzeit führt, arbeitet oft mehr, als bezahlt wird.",
        "Mitarbeiter haben anfangs Vorbehalte gegen eine Chefin in Teilzeit.",
        "Wer in Teilzeit führt, muss lernen, Aufgaben abzugeben.",
        "In der Produktion ist Führen in Teilzeit schwerer als im Büro.",
        "Führen in Teilzeit sollte nicht nur für Eltern selbstverständlich sein.",
        "Teilzeit in einer Führungsposition schadet der Karriere.",
        "Die Geschäftsleitung muss Teilzeit in Führung aktiv fördern.",
        "Mit festen Zeiten für die Erreichbarkeit lässt sich alles gut organisieren."
       ],
       "fest": true
      }
     ]
    },
    {
     "nr": 4,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Besprechung — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ich hab Sie beide hergebeten, weil wir ein Problem mit der Firma Haller haben. Die haben letzte Woche vierzig Pumpen von uns eingebaut, und bei sechs davon tritt Öl aus."
        },
        {
         "wer": "Mann",
         "text": "Sechs von vierzig. Das ist ja fast jede siebte."
        },
        {
         "wer": "Frau",
         "text": "Genau. Herr Polat, ich hab mir die zurückgeschickten Pumpen angeschaut. Es ist bei allen dieselbe Stelle, die Dichtung am Gehäusedeckel."
        },
        {
         "wer": "Mann",
         "text": "Am Deckel? Komisch, da hatten wir seit Jahren keine Probleme."
        }
       ],
       "satz": "Bei den beanstandeten Pumpen tritt das Öl an unterschiedlichen Stellen aus.",
       "loesung": false,
       "stelle": "Es ist bei allen dieselbe Stelle",
       "erklaerung": "Bei allen Pumpen ist die Dichtung am Gehäusedeckel betroffen."
      },
      {
       "ort": "Besprechung — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Moment, wann wurden die gebaut? Haben Sie die Seriennummern?"
        },
        {
         "wer": "Frau",
         "text": "Hab ich. Alle aus derselben Woche, Ende Juli."
        },
        {
         "wer": "Mann",
         "text": "Ende Juli. Da hatten wir die neuen Dichtungen vom anderen Lieferanten. Die sollten eigentlich baugleich sein."
        },
        {
         "wer": "Frau",
         "text": "Sollten. Ich hab sie messen lassen, die sind zwei Zehntelmillimeter dünner."
        }
       ],
       "satz": "Die Dichtungen aus dieser Woche kamen von einem anderen Lieferanten.",
       "loesung": true,
       "stelle": "Da hatten wir die neuen Dichtungen vom anderen Lieferanten",
       "erklaerung": "Herr Polat erinnert sich an den Wechsel des Lieferanten Ende Juli."
      },
      {
       "ort": "Besprechung — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was sage ich jetzt dem Kunden? Herr Haller hat mich heute schon zweimal angerufen, der ist ziemlich sauer."
        },
        {
         "wer": "Frau",
         "text": "Erst mal die Wahrheit, Herr Jansen. Dass wir die Ursache gefunden haben und dass wir die Pumpen tauschen."
        },
        {
         "wer": "Mann",
         "text": "Nur die sechs, oder alle vierzig?"
        },
        {
         "wer": "Frau",
         "text": "Alle aus dieser Woche. Bei Haller sind das, Moment, achtzehn Stück. Die anderen zweiundzwanzig sind aus einer älteren Serie, die sind in Ordnung."
        }
       ],
       "satz": "Der Kunde bekommt alle vierzig Pumpen ersetzt.",
       "loesung": false,
       "stelle": "Alle aus dieser Woche",
       "erklaerung": "Getauscht werden achtzehn Pumpen, nicht alle vierzig."
      },
      {
       "ort": "Besprechung — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Achtzehn Pumpen tauschen, das schaffen wir in der Produktion nicht nebenher. Wir sind bis Mitte Dezember ausgebucht."
        },
        {
         "wer": "Mann",
         "text": "Herr Polat, die müssen aber schnell raus. Bei Haller steht sonst eine Anlage."
        },
        {
         "wer": "Mann",
         "text": "Ich weiß. Dann müssten wir eben am Samstag ran. Das muss aber die Werksleitung freigeben, und die Leute müssen ein paar Tage vorher Bescheid wissen."
        },
        {
         "wer": "Frau",
         "text": "Ich kläre das heute noch mit Herrn Stein von der Werksleitung."
        }
       ],
       "satz": "Für den Austausch soll möglicherweise am Wochenende gearbeitet werden.",
       "loesung": true,
       "stelle": "Dann müssten wir eben am Samstag ran",
       "erklaerung": "Die Samstagsschicht ist geplant, muss aber noch freigegeben werden."
      },
      {
       "ort": "Besprechung — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und die anderen Kunden? Wenn die Dichtungen Ende Juli drin waren, dann hat doch nicht nur Haller Pumpen aus der Woche bekommen."
        },
        {
         "wer": "Frau",
         "text": "Richtig, das hab ich schon geprüft. Aus dieser Woche sind insgesamt hundertzwanzig Pumpen rausgegangen, an fünf Kunden. Bisher hat sich nur Haller gemeldet."
        },
        {
         "wer": "Mann",
         "text": "Sollen wir die anderen von uns aus informieren? Ich meine, bevor die sich melden."
        },
        {
         "wer": "Frau",
         "text": "Unbedingt. Lieber jetzt ein unangenehmes Telefonat als später eine Klage."
        }
       ],
       "satz": "Frau Krüger will abwarten, ob sich die anderen Kunden melden.",
       "loesung": false,
       "stelle": "Lieber jetzt ein unangenehmes Telefonat als später eine Klage",
       "erklaerung": "Sie will die anderen Kunden sofort selbst informieren."
      },
      {
       "ort": "Besprechung — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und für die Zukunft: Herr Polat, ich möchte, dass wir Teile von einem neuen Lieferanten nicht mehr ohne Prüfung einbauen. Die ersten hundert Stück werden gemessen, bevor sie in die Montage gehen."
        },
        {
         "wer": "Mann",
         "text": "Das kostet uns jedes Mal einen Tag."
        },
        {
         "wer": "Frau",
         "text": "Das weiß ich. Aber diese Sache hier kostet uns gerade deutlich mehr als einen Tag."
        },
        {
         "wer": "Mann",
         "text": "Ja, da haben Sie recht."
        }
       ],
       "satz": "Herr Polat ist am Ende mit der zusätzlichen Prüfung einverstanden.",
       "loesung": true,
       "stelle": "Ja, da haben Sie recht",
       "erklaerung": "Erst wendet er den Zeitaufwand ein, dann stimmt er zu."
      }
     ]
    }
   ]
  },
  {
   "id": "tbc1hl2",
   "titel": "Prüfungslauf 2",
   "minuten": 40,
   "teile": [
    {
     "nr": 1,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Gespräch 1 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Miriam, schlechte Nachrichten. Die Leute von der Stadtsparkasse haben unseren Termin am Donnerstag abgesagt."
        },
        {
         "wer": "Frau",
         "text": "Was? Wir haben die Präsentation doch fast fertig."
        },
        {
         "wer": "Mann",
         "text": "Ich weiß. Bei denen ist wohl intern was los, der Abteilungsleiter ist krank, und ohne ihn wollen sie nicht entscheiden."
        },
        {
         "wer": "Frau",
         "text": "Haben sie einen neuen Termin vorgeschlagen?"
        }
       ],
       "satz": "Der Kunde hat abgesagt, weil er sich für ein anderes Angebot entschieden hat.",
       "loesung": false,
       "stelle": "der Abteilungsleiter ist krank, und ohne ihn wollen sie nicht entscheiden",
       "erklaerung": "Grund ist die Krankheit des Abteilungsleiters, nicht ein anderes Angebot."
      },
      {
       "ort": "Gespräch 1 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Noch nicht konkret. Irgendwann Anfang Dezember, haben sie gesagt."
        },
        {
         "wer": "Frau",
         "text": "Anfang Dezember, da bin ich zwei Wochen in Lissabon bei dem Projekt."
        },
        {
         "wer": "Mann",
         "text": "Mist, stimmt ja. Dann müsste ich es allein machen. Oder wir schalten dich per Video dazu."
        },
        {
         "wer": "Frau",
         "text": "Ehrlich gesagt lieber nicht. Den Technikteil kannst du genauso gut erklären wie ich. Ich schick dir meine Notizen."
        }
       ],
       "satz": "Die Frau möchte, dass der Mann die Präsentation ohne sie hält.",
       "loesung": true,
       "stelle": "Den Technikteil kannst du genauso gut erklären wie ich",
       "erklaerung": "Sie lehnt die Videoschaltung ab und traut ihm ihren Teil zu."
      },
      {
       "ort": "Gespräch 1 — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Okay. Und was machen wir jetzt mit dem Donnerstag? Den haben wir uns ja komplett freigehalten."
        },
        {
         "wer": "Frau",
         "text": "Da könnten wir endlich die Testumgebung für den Kunden in Erfurt aufsetzen. Die schieben wir seit Wochen vor uns her."
        },
        {
         "wer": "Mann",
         "text": "Gute Idee. Dann sag ich Herrn Pohl, dass wir doch Zeit haben. Er hat letzte Woche schon zweimal gefragt."
        }
       ],
       "frage": "Was machen die beiden am Donnerstag?",
       "opt": [
        "Sie arbeiten weiter an der Präsentation für die Sparkasse.",
        "Sie bereiten die Reise nach Lissabon vor.",
        "Sie erledigen eine Aufgabe, die lange liegen geblieben ist."
       ],
       "loesung": 2,
       "stelle": "Die schieben wir seit Wochen vor uns her",
       "erklaerung": "„vor sich herschieben\" bedeutet: lange nicht erledigen."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Schulte, haben Sie schon von dem neuen Terminsystem gehört? Ab Januar sollen die Bürger ihre Termine nur noch online buchen."
        },
        {
         "wer": "Mann",
         "text": "Nur noch online? Das kann doch nicht sein. Was ist mit den älteren Leuten?"
        },
        {
         "wer": "Frau",
         "text": "Für die gibt es weiterhin eine Telefonnummer. Aber spontan vorbeikommen, so wie jetzt am Donnerstagvormittag, das fällt weg."
        }
       ],
       "satz": "Ab Januar kann man nur noch über das Internet einen Termin bekommen.",
       "loesung": false,
       "stelle": "Für die gibt es weiterhin eine Telefonnummer",
       "erklaerung": "Telefonisch geht es weiterhin. Was wegfällt, ist das Kommen ohne Termin."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Na ja, ehrlich gesagt, der Donnerstag war auch immer Chaos. Fünfzig Leute im Flur, die Hälfte ohne die richtigen Unterlagen."
        },
        {
         "wer": "Frau",
         "text": "Genau das ist ja das Argument. Bei der Onlinebuchung muss man vorher angeben, worum es geht, und das System sagt einem dann, was man mitbringen muss."
        },
        {
         "wer": "Mann",
         "text": "Wenn die Leute das dann auch lesen."
        }
       ],
       "satz": "Der Mann sieht das Ende der offenen Sprechstunde nicht nur negativ.",
       "loesung": true,
       "stelle": "der Donnerstag war auch immer Chaos",
       "erklaerung": "Erst ist er skeptisch, dann gibt er zu, dass der Donnerstag schlecht lief."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und wer bringt uns das System bei?"
        },
        {
         "wer": "Frau",
         "text": "Es gibt im Dezember zwei Schulungen, je drei Stunden. Man muss sich bis Freitag im Intranet anmelden. Ich hab mich schon für den Termin am zehnten eingetragen, der am Siebzehnten ist ziemlich voll."
        },
        {
         "wer": "Mann",
         "text": "Dann nehme ich auch den zehnten. Am Siebzehnten hab ich eh Urlaub."
        }
       ],
       "frage": "Was erfährt der Mann über die Schulung?",
       "opt": [
        "Die Frau hat ihn schon für den zehnten angemeldet.",
        "Er muss sich bis Freitag selbst anmelden.",
        "Es gibt nur noch Plätze am Siebzehnten."
       ],
       "loesung": 1,
       "stelle": "Man muss sich bis Freitag im Intranet anmelden",
       "erklaerung": "Die Frau hat nur sich selbst eingetragen. Der Termin am Siebzehnten ist voll, nicht der am zehnten."
      }
     ]
    },
    {
     "nr": 2,
     "art": "vortrag",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Frau",
       "text": "Hallo zusammen, auch an alle, die heute von zu Hause zugeschaltet sind. Ich hoffe, Sie hören mich, ich sehe im Chat schon, dass es beim Ton gerade hakt. Okay, jetzt scheint es zu gehen. Im Sommer haben wir die Mitarbeiterbefragung gemacht, und viele von Ihnen haben gefragt, was eigentlich mit den Ergebnissen passiert. Berechtigte Frage, denn bei der letzten Befragung vor drei Jahren ist, ganz ehrlich, nicht viel passiert. Das soll diesmal anders laufen. Deshalb stelle ich Ihnen die Ergebnisse heute vor, bevor die Geschäftsführung darüber entscheidet, und nicht danach.",
       "frage": "Warum stellt die Rednerin die Ergebnisse gerade jetzt vor?",
       "opt": [
        "Damit die Mitarbeiter vor den Entscheidungen Bescheid wissen.",
        "Weil die Geschäftsführung schon entschieden hat.",
        "Weil die letzte Befragung so erfolgreich war."
       ],
       "loesung": 0,
       "stelle": "bevor die Geschäftsführung darüber entscheidet, und nicht danach",
       "erklaerung": "Nach der letzten Befragung ist wenig passiert. Deshalb will sie es diesmal früher zeigen."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Frau",
       "text": "Zuerst zur Beteiligung. Mitgemacht haben einundsiebzig Prozent, das ist deutlich mehr als letztes Mal. Allerdings, und das muss ich dazusagen, ist die Beteiligung sehr ungleich verteilt. In der Verwaltung und in der Entwicklung waren es über achtzig Prozent, in der Montage nur knapp die Hälfte. Wir haben nachgefragt, woran das liegt, und die Antwort war ziemlich einfach: Der Fragebogen lief nur am Computer, und in der Montage hat nicht jeder einen. Das war ein Fehler von uns, den machen wir beim nächsten Mal nicht wieder.",
       "frage": "Warum haben in der Montage weniger Leute mitgemacht?",
       "opt": [
        "Weil sie kein Interesse an der Befragung hatten.",
        "Weil sie keinen einfachen Zugang zum Fragebogen hatten.",
        "Weil die Befragung in der Urlaubszeit lag."
       ],
       "loesung": 1,
       "stelle": "Der Fragebogen lief nur am Computer",
       "erklaerung": "Die Rednerin gibt zu, dass der Fehler bei der Firma lag."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Frau",
       "text": "Jetzt zu den Ergebnissen. Fangen wir mit dem Positiven an. Sehr gut bewertet wurde die Zusammenarbeit im eigenen Team. Fast neun von zehn sagen, dass sie sich auf ihre direkten Kollegen verlassen können. Auch die Arbeitszeitregelung kommt gut an, also Gleitzeit und die zwei Tage mobiles Arbeiten. Das war vor drei Jahren noch ein großer Kritikpunkt. Ich sag das bewusst zuerst, weil man bei solchen Präsentationen schnell nur noch über die Probleme redet und vergisst, was eigentlich gut läuft.",
       "frage": "Was wurde besonders positiv bewertet?",
       "opt": [
        "Die Information durch die Geschäftsführung.",
        "Die Bezahlung.",
        "Das Verhältnis zu den direkten Kollegen."
       ],
       "loesung": 2,
       "stelle": "dass sie sich auf ihre direkten Kollegen verlassen können",
       "erklaerung": "Neben der Arbeitszeit wird vor allem das eigene Team gelobt."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Frau",
       "text": "So, und jetzt die weniger schönen Punkte. Der mit Abstand schlechteste Wert betrifft die Information über Entscheidungen. Viele schreiben, dass sie von wichtigen Änderungen erst erfahren, wenn sie schon beschlossen sind, und zwar oft über den Flurfunk statt von ihrer Führungskraft. Einen Kommentar möchte ich wörtlich zitieren, weil er es auf den Punkt bringt: Ich habe von der Umstrukturierung meiner Abteilung aus der Zeitung erfahren. Ich habe nachgeprüft, das ist leider tatsächlich so passiert, im Frühjahr, bei der Logistik.",
       "frage": "Was kritisieren viele Mitarbeiter?",
       "opt": [
        "Dass sie mit Informationen überhäuft werden.",
        "Dass sie von Entscheidungen zu spät und auf falschem Weg erfahren.",
        "Dass die Zeitung falsch über die Firma berichtet hat."
       ],
       "loesung": 1,
       "stelle": "erst erfahren, wenn sie schon beschlossen sind",
       "erklaerung": "Die Zeitung hat nicht falsch berichtet, sie war nur schneller als die Firma."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Frau",
       "text": "Ein zweiter Punkt, der viele beschäftigt, ist die Weiterbildung. Das Budget dafür ist da, es wird aber nur zu etwa einem Drittel genutzt. Wir haben uns gefragt, warum. Die Antworten in der Befragung zeigen: Am Interesse liegt es nicht. Viele wissen schlicht nicht, dass es das Budget gibt, oder sie trauen sich nicht, nach einem Kurs zu fragen, weil im Team gerade sowieso viel los ist. Das heißt, das Problem ist weniger das Geld als die Zeit, und vielleicht auch ein bisschen der Mut.",
       "frage": "Warum wird das Geld für Weiterbildung kaum genutzt?",
       "opt": [
        "Weil viele es nicht kennen oder wegen der Arbeit nicht fragen.",
        "Weil die Mitarbeiter keine Weiterbildung wollen.",
        "Weil das Budget für Kurse zu klein ist."
       ],
       "loesung": 0,
       "stelle": "Viele wissen schlicht nicht, dass es das Budget gibt",
       "erklaerung": "„Am Interesse liegt es nicht\" schließt die zweite Antwort aus."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Frau",
       "text": "Und dann gab es ein Ergebnis, mit dem wir so nicht gerechnet hatten. Wir hatten eine offene Frage gestellt: Was würden Sie als Erstes ändern? Erwartet hatten wir Antworten zu Gehalt oder Homeoffice. Die häufigste Antwort war aber die Kantine, genauer gesagt die Öffnungszeiten. Die Kantine schließt um halb zwei, und die Spätschicht in der Montage hat damit praktisch keine warme Mahlzeit. Das klingt nach einer Kleinigkeit, aber für die Leute ist es offenbar eine Frage von Wertschätzung.",
       "frage": "Was war das unerwartete Ergebnis der offenen Frage?",
       "opt": [
        "Die meisten wollen mehr Homeoffice.",
        "Die Gehälter wurden am häufigsten genannt.",
        "Viele wünschen sich andere Öffnungszeiten der Kantine."
       ],
       "loesung": 2,
       "stelle": "Die häufigste Antwort war aber die Kantine",
       "erklaerung": "Gehalt und Homeoffice hatte man erwartet, genannt wurde vor allem die Kantine."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Frau",
       "text": "Was machen wir jetzt damit? Wir bilden drei kleine Arbeitsgruppen zu den drei Themen, über die ich gerade gesprochen habe: Information, Weiterbildung, Kantine. In jeder Gruppe sitzen Leute aus verschiedenen Abteilungen, auch aus der Montage, und zwar nicht nur Führungskräfte. Wer mitmachen will, meldet sich bis Ende des Monats bei mir oder beim Betriebsrat. Die Gruppen treffen sich während der Arbeitszeit, ungefähr alle zwei Wochen, und sollen bis März konkrete Vorschläge machen.",
       "frage": "Wer kann in den Arbeitsgruppen mitarbeiten?",
       "opt": [
        "Mitarbeiter aus allen Abteilungen, die sich melden.",
        "Nur Mitglieder des Betriebsrats.",
        "Nur Führungskräfte aus verschiedenen Abteilungen."
       ],
       "loesung": 0,
       "stelle": "und zwar nicht nur Führungskräfte",
       "erklaerung": "Beim Betriebsrat kann man sich nur anmelden. Mitmachen dürfen alle."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Frau",
       "text": "Eine Sache noch zur Kantine, weil ich weiß, dass das nicht bis März warten kann. Ab dem ersten Dezember gibt es eine Übergangslösung: Für die Spätschicht werden Mahlzeiten vorbereitet, die man sich in der Kantine aufwärmen kann, bis zwanzig Uhr. Das ist keine Dauerlösung und auch kein Ersatz für ein frisches Essen, das ist uns klar. Aber wir wollten nicht so tun, als bräuchte man für so etwas erst eine Arbeitsgruppe. Gut, und damit gebe ich weiter an Herrn Becker, der noch etwas zum neuen Parkhaus sagt.",
       "frage": "Was ändert sich ab Dezember bei der Kantine?",
       "opt": [
        "Sie bietet bis zwanzig Uhr frisches Essen an.",
        "Eine Arbeitsgruppe legt neue Öffnungszeiten fest.",
        "Für die Spätschicht gibt es vorbereitete Mahlzeiten zum Aufwärmen."
       ],
       "loesung": 2,
       "stelle": "Für die Spätschicht werden Mahlzeiten vorbereitet",
       "erklaerung": "„kein Ersatz für ein frisches Essen\" schließt die erste Antwort aus."
      }
     ]
    },
    {
     "nr": 3,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Herr Schröder, Servicetechniker bei einem Aufzugshersteller",
       "wer": "Mann",
       "text": "Ich bin den ganzen Tag unterwegs, von einer Anlage zur nächsten. Früher habe ich alles über mein privates Handy gemacht, weil die Firma meinte, das sei doch einfacher. War es auch, bis die Kunden meine Nummer hatten. Dann rief mich an einem Sonntagmorgen ein Hausmeister an, weil der Aufzug in seinem Haus quietscht. Am Sonntag. Auf meinem privaten Handy. Seit letztem Jahr habe ich ein Diensthandy, und das liegt nach Feierabend in der Schublade. Wenn ich am Wochenende Bereitschaft habe, nehme ich es raus, sonst nicht. Seitdem schlafe ich besser. Ich finde, die Arbeit gehört auf ein Gerät und das Private auf ein anderes, sonst hört die Arbeit nie auf.",
       "loesung": 1,
       "stelle": "die Arbeit gehört auf ein Gerät und das Private auf ein anderes",
       "erklaerung": "Erst das zweite Gerät hat ihm eine klare Grenze zur Freizeit gebracht.",
       "frage": "Welche Aussage passt zu Herr Schröder?",
       "opt": [
        "Mit einem Firmenhandy wird erwartet, dass man auch in der Freizeit erreichbar ist.",
        "Dienstliches und Privates sollte man auf zwei Geräten trennen.",
        "Firmenhandys sind für viele Betriebe zu teuer geworden.",
        "Private Handys haben in bestimmten Bereichen aus Sicherheitsgründen nichts zu suchen.",
        "Die Firma sollte zahlen, wenn private Geräte dienstlich genutzt werden.",
        "Ein gemeinsames Handy für die Bereitschaft ist die beste Lösung.",
        "Ein Firmenhandy ist für viele ein Zeichen von Anerkennung.",
        "Mit einem Firmenhandy verliert man die Kontrolle über seine Daten.",
        "Viele Mitarbeiter wollen gar kein zweites Gerät.",
        "Abends und am Wochenende sollte das Firmenhandy automatisch stumm sein."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Frau Pohl, zuständig für Informationssicherheit in einem Chemieunternehmen",
       "wer": "Frau",
       "text": "In unseren Produktionsbereichen sind private Handys seit drei Jahren verboten, und darüber gab es am Anfang heftigen Streit. Ich verstehe das. Das Handy ist heute für viele so etwas wie die Brieftasche. Aber wir hatten einen Fall, da hat ein Mitarbeiter ein Foto von einer neuen Anlage gemacht, ganz harmlos, um es seinem Sohn zu zeigen. Das Foto ist dann irgendwie in einem Forum gelandet, mit allen Details der Steuerung im Hintergrund. Seitdem ist für mich klar: Wo vertrauliche Technik steht, bleiben private Geräte draußen. Die Leute können sie im Spind lassen und in der Pause benutzen. Wer dienstlich telefonieren muss, bekommt ein geschütztes Firmengerät.",
       "loesung": 3,
       "stelle": "Wo vertrauliche Technik steht, bleiben private Geräte draußen",
       "erklaerung": "Das Verbot gilt nur in den Produktionsbereichen, wegen der Gefahr für vertrauliche Technik.",
       "frage": "Welche Aussage passt zu Frau Pohl?",
       "opt": [
        "Mit einem Firmenhandy wird erwartet, dass man auch in der Freizeit erreichbar ist.",
        "Dienstliches und Privates sollte man auf zwei Geräten trennen.",
        "Firmenhandys sind für viele Betriebe zu teuer geworden.",
        "Private Handys haben in bestimmten Bereichen aus Sicherheitsgründen nichts zu suchen.",
        "Die Firma sollte zahlen, wenn private Geräte dienstlich genutzt werden.",
        "Ein gemeinsames Handy für die Bereitschaft ist die beste Lösung.",
        "Ein Firmenhandy ist für viele ein Zeichen von Anerkennung.",
        "Mit einem Firmenhandy verliert man die Kontrolle über seine Daten.",
        "Viele Mitarbeiter wollen gar kein zweites Gerät.",
        "Abends und am Wochenende sollte das Firmenhandy automatisch stumm sein."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Herr Wagner, Betriebsrat bei den Stadtwerken",
       "wer": "Mann",
       "text": "Bei uns gab es vor ein paar Jahren die Idee, allen Technikern ein Firmenhandy zu geben, damit man sie bei Störungen jederzeit erreicht. Wir als Betriebsrat waren dagegen, und zwar nicht wegen der Geräte, sondern wegen dem jederzeit. Vereinbart haben wir stattdessen ein Bereitschaftshandy. Das ist ein einziges Gerät pro Bereich, und das bekommt immer der, der gerade Bereitschaft hat. Am Montagmorgen wird es übergeben, mit einem kurzen Protokoll. Wer keine Bereitschaft hat, ist auch nicht erreichbar, und das weiß jeder. Das funktioniert jetzt seit vier Jahren ohne nennenswerten Ärger. Für Betriebe mit Störungsdienst kenne ich ehrlich gesagt nichts Besseres.",
       "loesung": 5,
       "stelle": "Für Betriebe mit Störungsdienst kenne ich ehrlich gesagt nichts Besseres",
       "erklaerung": "Ein Gerät, das weitergegeben wird, statt eines Handys für jeden Techniker.",
       "frage": "Welche Aussage passt zu Herr Wagner?",
       "opt": [
        "Mit einem Firmenhandy wird erwartet, dass man auch in der Freizeit erreichbar ist.",
        "Dienstliches und Privates sollte man auf zwei Geräten trennen.",
        "Firmenhandys sind für viele Betriebe zu teuer geworden.",
        "Private Handys haben in bestimmten Bereichen aus Sicherheitsgründen nichts zu suchen.",
        "Die Firma sollte zahlen, wenn private Geräte dienstlich genutzt werden.",
        "Ein gemeinsames Handy für die Bereitschaft ist die beste Lösung.",
        "Ein Firmenhandy ist für viele ein Zeichen von Anerkennung.",
        "Mit einem Firmenhandy verliert man die Kontrolle über seine Daten.",
        "Viele Mitarbeiter wollen gar kein zweites Gerät.",
        "Abends und am Wochenende sollte das Firmenhandy automatisch stumm sein."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Frau Krämer, Vertriebsleiterin bei einem Hersteller von Küchengeräten",
       "wer": "Frau",
       "text": "Man unterschätzt das. Als wir letztes Jahr die Regel geändert haben, dass auch die Leute im Innendienst ein Firmenhandy bekommen, hatte ich mit Begeisterung ehrlich gesagt nicht gerechnet. Es ging uns eher um praktische Gründe, Rückrufe an Kunden von unterwegs und so. Aber eine junge Kollegin hat mir danach gesagt, sie habe das Gefühl, jetzt gehöre sie richtig dazu. Bis dahin hatten nur der Außendienst und die Leitung eins, und der Innendienst fühlte sich ein bisschen wie die zweite Reihe. Ein Handy ist nur ein Handy, klar. Aber für viele ist es ein Signal, dass ihre Arbeit genauso zählt. Gerade solche kleinen Dinge sollte man nicht unterschätzen.",
       "loesung": 6,
       "stelle": "sie habe das Gefühl, jetzt gehöre sie richtig dazu",
       "erklaerung": "Für den Innendienst war das Handy vor allem ein Zeichen der Wertschätzung.",
       "frage": "Welche Aussage passt zu Frau Krämer?",
       "opt": [
        "Mit einem Firmenhandy wird erwartet, dass man auch in der Freizeit erreichbar ist.",
        "Dienstliches und Privates sollte man auf zwei Geräten trennen.",
        "Firmenhandys sind für viele Betriebe zu teuer geworden.",
        "Private Handys haben in bestimmten Bereichen aus Sicherheitsgründen nichts zu suchen.",
        "Die Firma sollte zahlen, wenn private Geräte dienstlich genutzt werden.",
        "Ein gemeinsames Handy für die Bereitschaft ist die beste Lösung.",
        "Ein Firmenhandy ist für viele ein Zeichen von Anerkennung.",
        "Mit einem Firmenhandy verliert man die Kontrolle über seine Daten.",
        "Viele Mitarbeiter wollen gar kein zweites Gerät.",
        "Abends und am Wochenende sollte das Firmenhandy automatisch stumm sein."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Herr Ahmadi, Sachbearbeiter in der Buchhaltung eines Möbelhändlers",
       "wer": "Mann",
       "text": "Mir wurde letztes Jahr ein Firmenhandy angeboten, und ich habe abgelehnt. Ich will einfach nicht mit zwei Geräten herumlaufen, die ich beide laden muss und die beide piepen. In meiner Abteilung haben das übrigens fast alle so gemacht, von zwölf Leuten haben nur drei eins genommen. Wir lesen unsere Mails auf dem eigenen Handy in einer extra App, die die Firma eingerichtet hat, und gut ist. Die Kosten für den Vertrag zahle ich selbst, das ist für mich in Ordnung, ich telefoniere dienstlich ja kaum. Ich glaube, die Firma hat einfach angenommen, dass sich alle über ein neues Gerät freuen. Gefragt hat uns vorher niemand.",
       "loesung": 8,
       "stelle": "von zwölf Leuten haben nur drei eins genommen",
       "erklaerung": "Er und fast seine ganze Abteilung wollten kein zusätzliches Gerät. Die Kosten stören ihn nicht.",
       "frage": "Welche Aussage passt zu Herr Ahmadi?",
       "opt": [
        "Mit einem Firmenhandy wird erwartet, dass man auch in der Freizeit erreichbar ist.",
        "Dienstliches und Privates sollte man auf zwei Geräten trennen.",
        "Firmenhandys sind für viele Betriebe zu teuer geworden.",
        "Private Handys haben in bestimmten Bereichen aus Sicherheitsgründen nichts zu suchen.",
        "Die Firma sollte zahlen, wenn private Geräte dienstlich genutzt werden.",
        "Ein gemeinsames Handy für die Bereitschaft ist die beste Lösung.",
        "Ein Firmenhandy ist für viele ein Zeichen von Anerkennung.",
        "Mit einem Firmenhandy verliert man die Kontrolle über seine Daten.",
        "Viele Mitarbeiter wollen gar kein zweites Gerät.",
        "Abends und am Wochenende sollte das Firmenhandy automatisch stumm sein."
       ],
       "fest": true
      }
     ]
    },
    {
     "nr": 4,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Besprechung — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut, dann sind wir vollzählig. Es geht um die neue Regel zum mobilen Arbeiten, die ab Januar gelten soll. Die Geschäftsführung will, dass alle mindestens drei Tage pro Woche im Büro sind. Bisher waren es ja zwei."
        },
        {
         "wer": "Mann",
         "text": "Drei Tage? Das wird in meinem Team nicht gut ankommen. Zwei von meinen Leuten wohnen über eine Stunde entfernt."
        },
        {
         "wer": "Frau",
         "text": "Das weiß ich, Herr Bauer. Ich gebe es auch erst mal nur so weiter, wie es mir gesagt wurde."
        }
       ],
       "satz": "Künftig sollen die Mitarbeiter öfter im Büro arbeiten als bisher.",
       "loesung": true,
       "stelle": "mindestens drei Tage pro Woche im Büro sind",
       "erklaerung": "Statt zwei sollen es künftig drei Tage im Büro sein."
      },
      {
       "ort": "Besprechung — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Darf ich da kurz was sagen, Frau Schuster? Für den Betriebsrat ist das so nicht umsetzbar. Die zwei Tage stehen in der Betriebsvereinbarung, und die gilt bis Ende nächsten Jahres."
        },
        {
         "wer": "Frau",
         "text": "Das heißt, die Geschäftsführung kann das gar nicht allein ändern, Frau Kaminski?"
        },
        {
         "wer": "Frau",
         "text": "Nicht ohne uns, nein. Wir sind gesprächsbereit, aber dann muss man uns auch erklären, warum."
        }
       ],
       "satz": "Laut Frau Kaminski kann die Geschäftsführung die Regel ohne den Betriebsrat ändern.",
       "loesung": false,
       "stelle": "Nicht ohne uns, nein",
       "erklaerung": "Die Betriebsvereinbarung gilt noch, ohne den Betriebsrat geht nichts."
      },
      {
       "ort": "Besprechung — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Darf ich als Neuer auch was sagen? Ich bin ja erst seit September hier, und ich finde mehr Bürotage ehrlich gesagt gar nicht so schlecht. Ich hab die ersten Wochen viel zu Hause gesessen und hatte das Gefühl, ich krieg gar nicht mit, wie hier was läuft."
        },
        {
         "wer": "Mann",
         "text": "Das versteh ich, Herr Möller. Aber das ist ja eher eine Frage der Einarbeitung, nicht der Regel für alle."
        },
        {
         "wer": "Mann",
         "text": "Ja, vielleicht."
        }
       ],
       "satz": "Herr Möller hätte in seiner Anfangszeit gern mehr im Büro gearbeitet.",
       "loesung": true,
       "stelle": "ich krieg gar nicht mit, wie hier was läuft",
       "erklaerung": "Zu Hause hat er als Neuer zu wenig mitbekommen."
      },
      {
       "ort": "Besprechung — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ich will mal versuchen zu verstehen, worum es der Geschäftsführung eigentlich geht. Ich vermute, der Anlass ist die Mitarbeiterbefragung. Da kam ja raus, dass viele sich über schlechte Abstimmung zwischen den Abteilungen beschweren."
        },
        {
         "wer": "Frau",
         "text": "Ja, aber das liegt doch nicht daran, dass die Leute zu Hause sind. Das lag vorher auch schon im Argen."
        },
        {
         "wer": "Mann",
         "text": "Stimmt. Ich bin seit acht Jahren hier, und die Abstimmung mit dem Einkauf war schon immer schwierig, auch als alle jeden Tag im Büro saßen."
        }
       ],
       "satz": "Herr Bauer meint, die Probleme bei der Abstimmung sind erst durch das mobile Arbeiten entstanden.",
       "loesung": false,
       "stelle": "auch als alle jeden Tag im Büro saßen",
       "erklaerung": "Die Probleme gab es nach seiner Erfahrung schon vorher."
      },
      {
       "ort": "Besprechung — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was wäre denn Ihr Vorschlag? Ich muss der Geschäftsführung ja irgendwas mitbringen."
        },
        {
         "wer": "Mann",
         "text": "Wie wäre es mit festen Teamtagen? Jedes Team legt einen Tag fest, an dem alle da sind, und an dem Tag machen wir auch die Abstimmung mit den anderen Abteilungen. Dann bleibt es bei zwei Tagen insgesamt, aber die sind sinnvoll genutzt."
        },
        {
         "wer": "Frau",
         "text": "Damit könnte der Betriebsrat gut leben."
        },
        {
         "wer": "Mann",
         "text": "Und für Neue vielleicht in den ersten drei Monaten mehr Bürotage, freiwillig."
        },
        {
         "wer": "Frau",
         "text": "Das finde ich gut, Herr Möller."
        }
       ],
       "satz": "Nach dem Vorschlag von Herrn Bauer sollen alle künftig drei Tage ins Büro kommen.",
       "loesung": false,
       "stelle": "Dann bleibt es bei zwei Tagen insgesamt",
       "erklaerung": "Er schlägt feste Teamtage vor, aber bei zwei Bürotagen."
      },
      {
       "ort": "Besprechung — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut, dann nehme ich das so mit. Ich schreibe es bis Freitag zusammen und schicke es Ihnen allen, bevor ich es der Geschäftsführung gebe. Frau Kaminski, könnten Sie vorher mit dem Betriebsratsvorsitzenden sprechen, damit ich sagen kann, dass der Betriebsrat dahintersteht?"
        },
        {
         "wer": "Frau",
         "text": "Mach ich. Der ist aber bis Mittwoch im Urlaub."
        },
        {
         "wer": "Frau",
         "text": "Das reicht ja, wenn er es bis Donnerstag weiß."
        }
       ],
       "satz": "Frau Schuster will den Vorschlag zuerst den Teilnehmern schicken und dann der Geschäftsführung geben.",
       "loesung": true,
       "stelle": "schicke es Ihnen allen, bevor ich es der Geschäftsführung gebe",
       "erklaerung": "Die Runde bekommt den Text vor der Geschäftsführung."
      }
     ]
    }
   ]
  }
 ]
};
