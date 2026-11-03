/* ============================================================
   deutschoderwas club — LESEN + SPRACHBAUSTEINE telc Deutsch C1 Beruf

   Aufbau nach dem offiziellen telc-Format (Handbuch C1 Beruf und
   Übungstest 1 C1 Beruf, geprüft 03.11.2026). Alle Texte und
   Aufgaben eigene, Kontext Wirtschaft und Arbeitswelt.
   Erzeugt aus scratchpad/telcc1b mit bau.js.
   ============================================================ */

window.LESEN_TELC_C1B = {
 "niveau": "telcC1B",
 "pruefung": "telc Deutsch C1 Beruf",
 "minuten": 90,
 "punkte": 70,
 "intro": "Leseverstehen und Sprachbausteine dauern bei telc C1 Beruf zusammen neunzig Minuten: ein Wirtschaftsartikel mit Lücken, fünf Forenbeiträge, eine E-Mail mit langem Fachtext und ein Rundschreiben mit 22 Lücken. In der Prüfung zählen die Leseaufgaben je zwei Punkte, die Sprachbausteine je einen.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Texte verstehen",
   "zeichen": "🧭",
   "was": "Verweiswörter, Beiträge gezielt durchsuchen."
  },
  {
   "nr": 2,
   "titel": "Wirtschaftssprache",
   "zeichen": "💼",
   "was": "Lange Texte mit Anlass, Wortschatz für die Sprachbausteine."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Alle vier Teile einzeln."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "46 Aufgaben, neunzig Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tc1bl1",
   "stufe": 1,
   "titel": "Textrekonstruktion: Verweiswörter verfolgen",
   "kurz": "Worauf „dieser“, „darauf“ und „seitdem“ zurückgreifen",
   "ziel": "Nach diesem Block erkennst du in Wirtschaftsartikeln, worauf sich ein Satz zurückbezieht, und findest so die zwei Sätze, die nirgends passen.",
   "zeichen": "🔗",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "„Der Umsatz stieg im dritten Quartal um vier Prozent. … ist vor allem dem Exportgeschäft zu verdanken.“ Was passt in die Lücke?",
     "opt": [
      "Dieser Anstieg",
      "Diese Kunden",
      "Dieses Quartal"
     ],
     "loesung": 0,
     "erklaerung": "„Dieser Anstieg“ fasst „Der Umsatz stieg“ in einem Nomen zusammen; der Export erklärt ihn."
    },
    {
     "art": "wahl",
     "frage": "„Die Geschäftsführung kündigte an, zwei Filialen zu schließen. … stieß beim Betriebsrat auf heftigen Widerstand.“ Welcher Satzanfang passt?",
     "opt": [
      "Diese Filialen",
      "Dieser Plan",
      "Diesen Plan"
     ],
     "loesung": 1,
     "erklaerung": "„Dieser Plan“ (Nominativ) greift die Ankündigung auf; Filialen stoßen nicht auf Widerstand."
    },
    {
     "art": "wahl",
     "frage": "„Im Frühjahr fielen zwei Maschinen aus. ___ Seitdem wird jede Anlage einmal im Monat geprüft.“ Welcher Satz passt in die Lücke?",
     "opt": [
      "Die Produktion lief trotzdem ohne Unterbrechung weiter.",
      "Die Werksleitung zog daraus Konsequenzen.",
      "Neue Maschinen sind sehr teuer."
     ],
     "loesung": 1,
     "erklaerung": "„daraus“ greift den Ausfall auf, „Seitdem“ beschreibt die Konsequenz."
    },
    {
     "art": "wahl",
     "frage": "„Frau Reimann leitet den Einkauf, Herr Okonkwo den Vertrieb. Während Erstere auf niedrige Kosten drängt, setzt Letzterer auf neue Märkte.“ Wer setzt auf neue Märkte?",
     "opt": [
      "Frau Reimann",
      "beide gemeinsam",
      "Herr Okonkwo"
     ],
     "loesung": 2,
     "erklaerung": "„Letzterer“ meint die zuletzt genannte Person, also Herrn Okonkwo."
    },
    {
     "art": "wahl",
     "frage": "Ein Satz in der Auswahl beginnt mit „Allerdings …“. Was muss direkt davor im Text stehen?",
     "opt": [
      "eine Aussage, die der Satz einschränkt",
      "eine Frage an den Leser",
      "der Name einer Person"
     ],
     "loesung": 0,
     "erklaerung": "„Allerdings“ schränkt das Vorhergehende ein; ohne eine solche Aussage passt der Satz nicht."
    },
    {
     "art": "wahl",
     "frage": "Ein Satz passt inhaltlich gut zum Thema, widerspricht aber einer Zahl, die später im Text steht. Was gilt für die Textrekonstruktion?",
     "opt": [
      "Er kann trotzdem in eine Lücke passen.",
      "Er gehört zu den Sätzen, die übrig bleiben.",
      "Er gehört an den Anfang des Textes."
     ],
     "loesung": 1,
     "erklaerung": "Ablenker klingen passend, widersprechen aber oft Fakten im Text. Ein Widerspruch schließt den Satz aus."
    },
    {
     "art": "wahl",
     "frage": "„Die Löhne wurden um drei Prozent erhöht. ___ fiel die Steigerung damit geringer aus als in den Vorjahren.“ Welches Wort passt?",
     "opt": [
      "Allerdings",
      "Deshalb",
      "Außerdem"
     ],
     "loesung": 0,
     "erklaerung": "Die Erhöhung wird relativiert: „Allerdings“ leitet die Einschränkung ein."
    }
   ]
  },
  {
   "id": "tc1bl2",
   "stufe": 1,
   "titel": "Beiträge gezielt durchsuchen: Mehrfachzuordnung",
   "kurz": "Sechs Aufgaben, fünf Beiträge, nicht jeder wird gebraucht",
   "ziel": "Nach diesem Block suchst du in Forenbeiträgen gezielt nach Umschreibungen, erkennst Fallen mit gleichen Stichwörtern und weißt, dass ein Beitrag mehrfach und einer gar nicht passen kann.",
   "zeichen": "🔎",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Womit fangen Sie in Leseverstehen Teil 2 am besten an?",
     "opt": [
      "Sie lesen alle fünf Beiträge Wort für Wort.",
      "Sie lesen die sechs Aufgaben und markieren, worauf es jeweils ankommt.",
      "Sie lesen nur den ersten und den letzten Beitrag."
     ],
     "loesung": 1,
     "erklaerung": "Wer die Aufgaben kennt, liest die Beiträge gezielt und spart Zeit."
    },
    {
     "art": "wahl",
     "frage": "Aufgabe: „In welchem Beitrag wird eine Maßnahme beschrieben, deren Wirkung noch offen ist?“ Welche Textstelle passt?",
     "opt": [
      "„Seitdem ist die Quote deutlich gesunken.“",
      "„Ob sich das auszahlt, wissen wir noch nicht.“",
      "„Wir haben die Maßnahme wieder abgeschafft.“"
     ],
     "loesung": 1,
     "erklaerung": "Nur hier ist das Ergebnis noch unbekannt; die anderen Stellen nennen ein Ergebnis."
    },
    {
     "art": "wahl",
     "frage": "Zwei Beiträge erwähnen eine Zulage. Aufgabe: „… eine zu niedrige Zulage hat zu Problemen geführt.“ Worauf achten Sie?",
     "opt": [
      "Auf das Wort „Zulage“ in beiden Beiträgen.",
      "Darauf, in welchem Beitrag die Höhe der Zahlung als Ursache für Schwierigkeiten genannt wird.",
      "Auf die Berufsbezeichnung der Verfasser."
     ],
     "loesung": 1,
     "erklaerung": "Das gleiche Stichwort in zwei Beiträgen ist eine typische Falle. Es kommt auf die Aussage an: zu niedrig und mit Folgen."
    },
    {
     "art": "wahl",
     "frage": "Sie haben Beitrag C schon einer Aufgabe zugeordnet. Bei einer weiteren Aufgabe passt wieder C. Was tun Sie?",
     "opt": [
      "Sie ordnen C noch einmal zu.",
      "Sie suchen einen anderen Beitrag, weil jeder Buchstabe nur einmal vorkommen darf.",
      "Sie lassen die Aufgabe frei."
     ],
     "loesung": 0,
     "erklaerung": "Ein Beitrag kann zu mehreren Aufgaben passen; Buchstaben werden nicht gestrichen."
    },
    {
     "art": "wahl",
     "frage": "Aufgabe: „Beschäftigte haben sich ohne jede Vorgabe auf Bürotage geeinigt.“ Beitrag C: „Die Betriebsvereinbarung schreibt zwei Teamtage vor, die Teams wählen sie selbst.“ Passt C?",
     "opt": [
      "Ja, denn die Teams wählen selbst.",
      "Nein, denn die zwei Tage sind vorgeschrieben.",
      "Ja, denn es geht um Teamtage."
     ],
     "loesung": 1,
     "erklaerung": "„ohne jede Vorgabe“ ist der Schlüssel: Die Zahl der Tage ist in C festgelegt."
    },
    {
     "art": "wahl",
     "frage": "In der Aufgabe steht „Ein Beitrag warnt vor …“. Im Text steht: „Ich kann nur davon abraten, …“. Passt das zusammen?",
     "opt": [
      "Nein, „abraten“ und „warnen“ bedeuten etwas anderes.",
      "Ja, „abraten von“ ist eine Umschreibung von „warnen vor“.",
      "Nur, wenn das Wort „Gefahr“ vorkommt."
     ],
     "loesung": 1,
     "erklaerung": "Aufgaben und Texte verwenden selten dieselben Wörter. Achte auf Umschreibungen mit gleicher Bedeutung."
    },
    {
     "art": "wahl",
     "frage": "Für eine Aufgabe finden Sie beim ersten Lesen keinen passenden Beitrag. Was ist sinnvoll?",
     "opt": [
      "Sie lassen sie zunächst aus und lösen erst die anderen Aufgaben.",
      "Sie nehmen den Beitrag, der noch nicht verwendet wurde.",
      "Sie wählen immer Beitrag A."
     ],
     "loesung": 0,
     "erklaerung": "Ein Beitrag bleibt ohnehin übrig. „Noch nicht verwendet“ ist darum kein Hinweis auf die Lösung."
    }
   ]
  },
  {
   "id": "tc1bl3",
   "stufe": 2,
   "titel": "Lange Texte mit E-Mail-Anlass lesen",
   "kurz": "Erst der Anlass, dann der Artikel: Aufgabe für Aufgabe",
   "ziel": "Nach diesem Block nutzt du die E-Mail als Leseauftrag, gehst den langen Artikel Abschnitt für Abschnitt durch und erkennst Antworten, die nur fast stimmen.",
   "zeichen": "📧",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Warum lesen Sie in Teil 3 zuerst die E-Mail?",
     "opt": [
      "Weil sie länger ist als der Artikel.",
      "Weil sie den Anlass erklärt und sich die ersten Aufgaben auf sie beziehen.",
      "Weil im Artikel nichts Wichtiges steht."
     ],
     "loesung": 1,
     "erklaerung": "Die E-Mail sagt, warum und mit welcher Frage der Artikel gelesen wird."
    },
    {
     "art": "wahl",
     "frage": "In welcher Reihenfolge stehen die Aufgaben zum Artikel?",
     "opt": [
      "in der Reihenfolge des Textes",
      "alphabetisch nach Stichwörtern",
      "ohne feste Reihenfolge"
     ],
     "loesung": 0,
     "erklaerung": "Die Aufgaben folgen dem Text. Wenn Aufgabe 6 in Absatz 4 steht, steht Aufgabe 7 danach."
    },
    {
     "art": "wahl",
     "frage": "In der E-Mail steht: „Es reicht völlig, wenn Sie mir bis Freitag ein paar Stichpunkte schicken.“ Was erwartet die Schreiberin?",
     "opt": [
      "einen ausführlichen Bericht",
      "eine kurze Einschätzung",
      "einen Anruf am Freitag"
     ],
     "loesung": 1,
     "erklaerung": "„ein paar Stichpunkte“ = eine kurze, formlose Rückmeldung."
    },
    {
     "art": "wahl",
     "frage": "Text: „Viele Firmen schließen Führungskräfte aus. Bei Krüger dürfen dagegen alle mitmachen, außer denen, die über Einstellungen entscheiden.“ Warum ist die Antwort „Bei Krüger sind alle Führungskräfte ausgeschlossen“ falsch?",
     "opt": [
      "Weil sie die Regel vieler Firmen beschreibt, nicht die von Krüger.",
      "Weil Krüger keine Führungskräfte hat.",
      "Weil Führungskräfte im Text nicht vorkommen."
     ],
     "loesung": 0,
     "erklaerung": "Typische Falle: Die Antwort steht im Text, gehört aber zu einer anderen Gruppe."
    },
    {
     "art": "wahl",
     "frage": "Eine Antwort enthält fast genau dieselben Wörter wie eine Stelle im Text. Was gilt?",
     "opt": [
      "Sie ist auf jeden Fall richtig.",
      "Sie kann eine Falle sein; prüfen Sie, ob der Sinn stimmt.",
      "Sie ist immer falsch."
     ],
     "loesung": 1,
     "erklaerung": "Ablenker nehmen oft Wörter aus dem Text auf und ändern Zahl, Zeit oder Verneinung."
    },
    {
     "art": "wahl",
     "frage": "Text: „Einige Unternehmen haben ihre Vorräte wieder abgebaut. Hellwig gehört nicht dazu.“ Was bedeutet der zweite Satz?",
     "opt": [
      "Hellwig hat die Vorräte ebenfalls abgebaut.",
      "Hellwig hatte nie Vorräte.",
      "Hellwig behält seine Vorräte."
     ],
     "loesung": 2,
     "erklaerung": "„nicht dazu“ verneint die Zugehörigkeit zu denen, die abgebaut haben."
    },
    {
     "art": "wahl",
     "frage": "Teil 3 hat über tausend Wörter und zwölf Aufgaben. Wie gehen Sie am sinnvollsten vor?",
     "opt": [
      "Den ganzen Text zweimal lesen, bevor Sie die Aufgaben ansehen.",
      "Aufgabe für Aufgabe vorgehen und den passenden Abschnitt genau lesen.",
      "Nur die erste Zeile jedes Absatzes lesen."
     ],
     "loesung": 1,
     "erklaerung": "Da die Aufgaben der Reihenfolge folgen, liest man jeweils nur den nächsten Abschnitt genau."
    },
    {
     "art": "wahl",
     "frage": "Ein Absatz beginnt mit: „Billig ist das Modell allerdings nicht.“ Was folgt wahrscheinlich?",
     "opt": [
      "eine Aufzählung von Kosten",
      "ein Lob der Teilnehmer",
      "eine Statistik über Bewerbungen"
     ],
     "loesung": 0,
     "erklaerung": "Der erste Satz kündigt das Thema des Absatzes an: hier die Kosten."
    }
   ]
  },
  {
   "id": "tc1bl4",
   "stufe": 2,
   "titel": "Wirtschaftssprache für die Sprachbausteine",
   "kurz": "Feste Verbindungen aus Rundschreiben und Mitteilungen",
   "ziel": "Nach diesem Block erkennst du typische Nomen-Verb-Verbindungen und feste Präpositionen aus innerbetrieblichen Schreiben und wählst sicher die passende Form.",
   "zeichen": "🧩",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "„Die neue Richtlinie tritt am 1. Januar in … .“",
     "opt": [
      "Kraft",
      "Geltung",
      "Wirkung"
     ],
     "loesung": 0,
     "erklaerung": "Feste Verbindung: „in Kraft treten“ = gültig werden."
    },
    {
     "art": "wahl",
     "frage": "„Wir möchten Sie über die Änderungen in … setzen.“",
     "opt": [
      "Wissen",
      "Kenntnis",
      "Information"
     ],
     "loesung": 1,
     "erklaerung": "Feste Verbindung: „jemanden in Kenntnis setzen“ = informieren."
    },
    {
     "art": "wahl",
     "frage": "„Bei Fragen steht Ihnen Frau Kraus gern zur … .“",
     "opt": [
      "Hilfe",
      "Verfügung",
      "Lage"
     ],
     "loesung": 1,
     "erklaerung": "Feste Verbindung: „zur Verfügung stehen“."
    },
    {
     "art": "wahl",
     "frage": "„Der Betriebsrat muss der Einführung des Systems … .“",
     "opt": [
      "zustimmen",
      "bestimmen",
      "abstimmen"
     ],
     "loesung": 0,
     "erklaerung": "„einer Sache zustimmen“ (Dativ) = einverstanden sein."
    },
    {
     "art": "wahl",
     "frage": "„Die Geschäftsführung hat ihre Entscheidung … Rücksicht auf die Kunden getroffen.“",
     "opt": [
      "mit",
      "unter",
      "aus"
     ],
     "loesung": 0,
     "erklaerung": "Feste Wendung: „mit Rücksicht auf“ = weil man an jemanden denkt."
    },
    {
     "art": "wahl",
     "frage": "„Belege müssen innerhalb von vier Wochen … werden.“",
     "opt": [
      "eingereicht",
      "eingelöst",
      "eingenommen"
     ],
     "loesung": 0,
     "erklaerung": "Unterlagen werden „eingereicht“ = offiziell abgegeben."
    },
    {
     "art": "wahl",
     "frage": "„… der schwierigen Marktlage haben wir unseren Umsatz gesteigert.“",
     "opt": [
      "Wegen",
      "Trotz",
      "Statt"
     ],
     "loesung": 1,
     "erklaerung": "Gegensatz zwischen schwieriger Lage und Erfolg: „trotz“ + Genitiv."
    },
    {
     "art": "wahl",
     "frage": "„Die Kosten werden vom Arbeitgeber in voller Höhe … .“",
     "opt": [
      "erstattet",
      "erstellt",
      "erteilt"
     ],
     "loesung": 0,
     "erklaerung": "Kosten werden „erstattet“ = zurückgezahlt."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "textwahl",
   "name": "Lesen: Textrekonstruktion",
   "kurz": "Sechs Lücken, acht Sätze, zwei passen nirgends",
   "was": "Aus einem Wirtschaftsartikel fehlen sechs Sätze. Du setzt aus acht Sätzen die passenden ein. Zwei bleiben übrig. In der Prüfung zählt jede Lösung zwei Punkte.",
   "tipp": "Der Satz muss nach vorne und nach hinten passen: Worauf verweist „dies\", „diese Zahl\", „dagegen\"?",
   "zeichen": "🧱",
   "farbe": "turq",
   "punkte": 12,
   "runden": [
    {
     "id": "c1bl1s1",
     "text": {
      "sorte": "zeitung",
      "quelle": "Neue Lahntaler Zeitung, Wirtschaft",
      "titel": "Die Firma gehört jetzt der Belegschaft",
      "zeilen": [
       "Als Gerhard Wilms vor drei Jahren seinen siebzigsten Geburtstag feierte, stand die Zukunft seiner Firma auf der Kippe. Die Wilms Pumpentechnik GmbH aus Ebersfeld beschäftigt 140 Menschen und setzt im Jahr knapp 23 Millionen Euro um. Seine beiden Töchter hatten längst andere Berufe ergriffen und kein Interesse, den Betrieb zu übernehmen. __(1)__ Am Ende entschied sich Wilms für einen Weg, den bisher nur wenige Unternehmer gehen: Er verkaufte die Firma an seine eigenen Mitarbeiter.",
       "Seit Januar gehören 74 Prozent der Anteile einer Beteiligungsgesellschaft, an der sich bislang 96 Beschäftigte beteiligt haben. Die übrigen 26 Prozent hält Wilms vorerst selbst. __(2)__ Wer mitmachen wollte, musste mindestens 5 000 Euro einbringen. Nach oben war der Betrag auf 40 000 Euro begrenzt, damit kein Einzelner zu viel Einfluss erhält. Den größten Teil des Kaufpreises finanzierte die Gesellschaft über einen Kredit der örtlichen Sparkasse, der aus den Gewinnen der kommenden zwölf Jahre getilgt werden soll.",
       "Für viele Beschäftigte war die Entscheidung, Geld in den eigenen Arbeitgeber zu stecken, keine leichte. Monteur Kemal Arslan, seit neunzehn Jahren im Betrieb, hat 12 000 Euro investiert, fast seine gesamten Ersparnisse. __(3)__ „Aber wenn ich der Firma nicht vertraue, wem dann?“, sagt er. Andere blieben vorsichtiger. Etwa ein Drittel der Belegschaft hat sich bislang nicht beteiligt, darunter viele jüngere Kollegen, die sich ihre berufliche Zukunft nicht an einem einzigen Ort vorstellen können.",
       "Im Alltag hat sich seit dem Eigentümerwechsel weniger verändert, als manche erwartet hatten. Die Geschäftsführung liegt weiterhin bei Petra Hainz, die das Unternehmen schon unter Wilms geleitet hat. __(4)__ Neu ist dagegen eine Versammlung der Anteilseigner, die zweimal im Jahr über die Verwendung der Gewinne abstimmt. Bei der ersten Versammlung im Frühjahr beschloss die Mehrheit, ein Drittel des Überschusses auszuschütten und den Rest in eine neue Fertigungslinie zu stecken.",
       "Fachleute beobachten das Modell mit einer gewissen Skepsis. Nach Zahlen des Instituts für Mittelstandsfragen in Wedenau haben im Bezirk der dortigen Industrie- und Handelskammer im vergangenen Jahr nur vier von rund 300 übergebenen Betrieben den Weg über die Belegschaft gewählt. __(5)__ Zum einen fehlt vielen Beschäftigten das nötige Kapital, zum anderen scheuen Banken das Risiko, wenn kein einzelner Unternehmer mit seinem Vermögen haftet.",
       "In Ebersfeld ist man trotzdem zuversichtlich. Der Umsatz stieg im ersten Jahr nach dem Verkauf um sechs Prozent, die Zahl der Krankheitstage sank leicht. __(6)__ Gerhard Wilms kommt noch ab und zu in die Halle, trinkt einen Kaffee mit den Monteuren und fährt dann wieder nach Hause. Einmischen, sagt er, wolle er sich nicht mehr: „Die Firma gehört jetzt denen, die hier jeden Tag arbeiten.“"
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Satz gehört in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Über Einstellungen, Preise und Investitionen bis zu einer Million Euro entscheidet sie wie bisher allein.",
        "Seine Töchter sollten das Unternehmen deshalb gemeinsam übernehmen.",
        "Zwei Angebote von Finanzinvestoren lagen auf dem Tisch, doch beide hätten nach seiner Einschätzung Arbeitsplätze gekostet.",
        "Ob das an den neuen Eigentumsverhältnissen liegt, will Geschäftsführerin Hainz allerdings nicht beurteilen.",
        "Er will sie in den nächsten fünf Jahren schrittweise abgeben, sodass am Ende die Belegschaft allein bestimmt.",
        "Auch der Betriebsrat sitzt seitdem mit am Tisch, wenn über Preise und Einstellungen verhandelt wird.",
        "Die Gründe für diese Zurückhaltung liegen vor allem in der Finanzierung.",
        "Seine Frau sei anfangs alles andere als begeistert gewesen, gibt er zu."
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Nach dem Ausscheiden der Töchter folgen die verworfenen Alternativen; „Am Ende entschied sich Wilms“ schließt die Abwägung ab."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Über Einstellungen, Preise und Investitionen bis zu einer Million Euro entscheidet sie wie bisher allein.",
        "Seine Töchter sollten das Unternehmen deshalb gemeinsam übernehmen.",
        "Zwei Angebote von Finanzinvestoren lagen auf dem Tisch, doch beide hätten nach seiner Einschätzung Arbeitsplätze gekostet.",
        "Ob das an den neuen Eigentumsverhältnissen liegt, will Geschäftsführerin Hainz allerdings nicht beurteilen.",
        "Er will sie in den nächsten fünf Jahren schrittweise abgeben, sodass am Ende die Belegschaft allein bestimmt.",
        "Auch der Betriebsrat sitzt seitdem mit am Tisch, wenn über Preise und Einstellungen verhandelt wird.",
        "Die Gründe für diese Zurückhaltung liegen vor allem in der Finanzierung.",
        "Seine Frau sei anfangs alles andere als begeistert gewesen, gibt er zu."
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„sie“ greift „Die übrigen 26 Prozent“ auf; der Satz erklärt, was mit dem Rest der Anteile geschieht."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Über Einstellungen, Preise und Investitionen bis zu einer Million Euro entscheidet sie wie bisher allein.",
        "Seine Töchter sollten das Unternehmen deshalb gemeinsam übernehmen.",
        "Zwei Angebote von Finanzinvestoren lagen auf dem Tisch, doch beide hätten nach seiner Einschätzung Arbeitsplätze gekostet.",
        "Ob das an den neuen Eigentumsverhältnissen liegt, will Geschäftsführerin Hainz allerdings nicht beurteilen.",
        "Er will sie in den nächsten fünf Jahren schrittweise abgeben, sodass am Ende die Belegschaft allein bestimmt.",
        "Auch der Betriebsrat sitzt seitdem mit am Tisch, wenn über Preise und Einstellungen verhandelt wird.",
        "Die Gründe für diese Zurückhaltung liegen vor allem in der Finanzierung.",
        "Seine Frau sei anfangs alles andere als begeistert gewesen, gibt er zu."
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Das „Aber“ im Zitat danach antwortet auf einen Einwand: die Skepsis seiner Frau."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Über Einstellungen, Preise und Investitionen bis zu einer Million Euro entscheidet sie wie bisher allein.",
        "Seine Töchter sollten das Unternehmen deshalb gemeinsam übernehmen.",
        "Zwei Angebote von Finanzinvestoren lagen auf dem Tisch, doch beide hätten nach seiner Einschätzung Arbeitsplätze gekostet.",
        "Ob das an den neuen Eigentumsverhältnissen liegt, will Geschäftsführerin Hainz allerdings nicht beurteilen.",
        "Er will sie in den nächsten fünf Jahren schrittweise abgeben, sodass am Ende die Belegschaft allein bestimmt.",
        "Auch der Betriebsrat sitzt seitdem mit am Tisch, wenn über Preise und Einstellungen verhandelt wird.",
        "Die Gründe für diese Zurückhaltung liegen vor allem in der Finanzierung.",
        "Seine Frau sei anfangs alles andere als begeistert gewesen, gibt er zu."
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sie“ meint Petra Hainz; „Neu ist dagegen“ setzt das Unveränderte vom Neuen ab."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Über Einstellungen, Preise und Investitionen bis zu einer Million Euro entscheidet sie wie bisher allein.",
        "Seine Töchter sollten das Unternehmen deshalb gemeinsam übernehmen.",
        "Zwei Angebote von Finanzinvestoren lagen auf dem Tisch, doch beide hätten nach seiner Einschätzung Arbeitsplätze gekostet.",
        "Ob das an den neuen Eigentumsverhältnissen liegt, will Geschäftsführerin Hainz allerdings nicht beurteilen.",
        "Er will sie in den nächsten fünf Jahren schrittweise abgeben, sodass am Ende die Belegschaft allein bestimmt.",
        "Auch der Betriebsrat sitzt seitdem mit am Tisch, wenn über Preise und Einstellungen verhandelt wird.",
        "Die Gründe für diese Zurückhaltung liegen vor allem in der Finanzierung.",
        "Seine Frau sei anfangs alles andere als begeistert gewesen, gibt er zu."
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "„diese Zurückhaltung“ fasst die geringe Zahl von vier Betrieben zusammen; „Zum einen … zum anderen“ nennt die Gründe."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Über Einstellungen, Preise und Investitionen bis zu einer Million Euro entscheidet sie wie bisher allein.",
        "Seine Töchter sollten das Unternehmen deshalb gemeinsam übernehmen.",
        "Zwei Angebote von Finanzinvestoren lagen auf dem Tisch, doch beide hätten nach seiner Einschätzung Arbeitsplätze gekostet.",
        "Ob das an den neuen Eigentumsverhältnissen liegt, will Geschäftsführerin Hainz allerdings nicht beurteilen.",
        "Er will sie in den nächsten fünf Jahren schrittweise abgeben, sodass am Ende die Belegschaft allein bestimmt.",
        "Auch der Betriebsrat sitzt seitdem mit am Tisch, wenn über Preise und Einstellungen verhandelt wird.",
        "Die Gründe für diese Zurückhaltung liegen vor allem in der Finanzierung.",
        "Seine Frau sei anfangs alles andere als begeistert gewesen, gibt er zu."
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„das“ bezieht sich auf die genannten Zahlen zu Umsatz und Krankheitstagen; der Satz schränkt den Erfolg vorsichtig ein."
      }
     ]
    },
    {
     "id": "c1bl1s2",
     "text": {
      "sorte": "zeitung",
      "quelle": "Magazin Büro & Betrieb",
      "titel": "Wenn der Schreibtisch niemandem mehr gehört",
      "zeilen": [
       "Im dritten Stock der Versicherungsgruppe Albrecht & Kerner in Hallstadt stehen seit dem Frühjahr 310 Schreibtische für 480 Mitarbeiter. Namensschilder gibt es keine mehr, Familienfotos und Topfpflanzen ebenso wenig. Wer morgens kommt, bucht über eine App einen freien Platz und räumt ihn abends wieder leer. __(1)__ Das Unternehmen spart damit nach eigenen Angaben rund 1,4 Millionen Euro Miete im Jahr, weil zwei Etagen an eine Anwaltskanzlei untervermietet werden konnten.",
       "Albrecht & Kerner ist kein Einzelfall. Nach einer Umfrage des Verbands der Büroimmobilienwirtschaft unter 650 Unternehmen planen 38 Prozent, ihre Büroflächen in den nächsten drei Jahren zu verkleinern. __(2)__ An normalen Tagen ist in vielen Verwaltungen kaum mehr als die Hälfte der Plätze besetzt, montags und freitags oft sogar weniger als ein Drittel. Für Arbeitgeber liegt es da nahe, nicht länger für leere Stühle zu bezahlen.",
       "Ganz so einfach, wie es klingt, ist die Umstellung allerdings nicht. Wer Schreibtische teilt, braucht mehr Besprechungsräume, ruhige Einzelkabinen für Telefonate und eine verlässliche Technik. __(3)__ In Hallstadt hat man deshalb einen Teil der eingesparten Miete in neue Möbel, Bildschirme und schallschluckende Wände gesteckt. Unterm Strich bleiben nach Berechnung der Firma immer noch gut 900 000 Euro im Jahr übrig.",
       "Bei den Beschäftigten sind die Meinungen geteilt. In einer internen Befragung nach sechs Monaten gaben 52 Prozent an, mit dem neuen Modell zufrieden oder sehr zufrieden zu sein. __(4)__ Kritisiert wird vor allem, dass man morgens Zeit mit der Suche nach einem Platz verliert und Kollegen aus dem eigenen Team nur noch zufällig trifft. Sachbearbeiterin Ilona Pietsch erzählt, dass sie inzwischen häufiger zu Hause bleibe, „weil ich im Büro sowieso neben Leuten sitze, mit denen ich nichts zu tun habe“.",
       "Arbeitspsychologen sehen genau hier ein Risiko. __(5)__ Wenn Mitarbeiter das Büro meiden, weil es ihnen fremd geworden ist, fehlen die kurzen Gespräche auf dem Flur, in denen Probleme oft schneller gelöst werden als in jeder Videokonferenz. Die Arbeitswissenschaftlerin Johanna Brockhoff von der Hochschule Lennetal empfiehlt deshalb, Schreibtische nicht im ganzen Haus, sondern innerhalb fester Teamzonen zu vergeben. So wisse jeder, wo er seine Kollegen findet.",
       "Albrecht & Kerner hat die Anregung aufgegriffen. Seit September sind die Etagen nach Abteilungen aufgeteilt, und jedes Team hat feste Tage, an denen möglichst alle vor Ort sind. __(6)__ Ob sich damit auch die Zufriedenheit verbessert, soll eine zweite Befragung im kommenden Frühjahr zeigen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Satz gehört in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Die Kanzlei hat ihren Mietvertrag inzwischen allerdings wieder gekündigt.",
        "Ein Büro, in dem sich niemand mehr zu Hause fühlt, verliert leicht seine wichtigste Aufgabe: Menschen zusammenzubringen.",
        "Der Grund liegt auf der Hand: Seit sich das Arbeiten von zu Hause durchgesetzt hat, stehen viele Schreibtische einen großen Teil der Woche leer.",
        "Fast jeder Dritte äußerte sich dagegen unzufrieden.",
        "Deshalb hat die Geschäftsführung beschlossen, zu festen Arbeitsplätzen zurückzukehren.",
        "Persönliche Dinge kommen in einen abschließbaren Schrank im Flur.",
        "Erste Rückmeldungen deuten darauf hin, dass an diesen Tagen deutlich mehr Plätze belegt sind als zuvor.",
        "Diese Umbauten kosten Geld, das von der Ersparnis zunächst wieder abgeht."
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Nach Fotos und Pflanzen, die verschwunden sind, und dem leer geräumten Platz klärt der Satz, wohin die persönlichen Sachen kommen."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Die Kanzlei hat ihren Mietvertrag inzwischen allerdings wieder gekündigt.",
        "Ein Büro, in dem sich niemand mehr zu Hause fühlt, verliert leicht seine wichtigste Aufgabe: Menschen zusammenzubringen.",
        "Der Grund liegt auf der Hand: Seit sich das Arbeiten von zu Hause durchgesetzt hat, stehen viele Schreibtische einen großen Teil der Woche leer.",
        "Fast jeder Dritte äußerte sich dagegen unzufrieden.",
        "Deshalb hat die Geschäftsführung beschlossen, zu festen Arbeitsplätzen zurückzukehren.",
        "Persönliche Dinge kommen in einen abschließbaren Schrank im Flur.",
        "Erste Rückmeldungen deuten darauf hin, dass an diesen Tagen deutlich mehr Plätze belegt sind als zuvor.",
        "Diese Umbauten kosten Geld, das von der Ersparnis zunächst wieder abgeht."
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Der Satz begründet die geplante Verkleinerung; die folgenden Zahlen zur Auslastung belegen die leeren Plätze."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Die Kanzlei hat ihren Mietvertrag inzwischen allerdings wieder gekündigt.",
        "Ein Büro, in dem sich niemand mehr zu Hause fühlt, verliert leicht seine wichtigste Aufgabe: Menschen zusammenzubringen.",
        "Der Grund liegt auf der Hand: Seit sich das Arbeiten von zu Hause durchgesetzt hat, stehen viele Schreibtische einen großen Teil der Woche leer.",
        "Fast jeder Dritte äußerte sich dagegen unzufrieden.",
        "Deshalb hat die Geschäftsführung beschlossen, zu festen Arbeitsplätzen zurückzukehren.",
        "Persönliche Dinge kommen in einen abschließbaren Schrank im Flur.",
        "Erste Rückmeldungen deuten darauf hin, dass an diesen Tagen deutlich mehr Plätze belegt sind als zuvor.",
        "Diese Umbauten kosten Geld, das von der Ersparnis zunächst wieder abgeht."
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "„Diese Umbauten“ fasst Räume, Kabinen und Technik zusammen; „deshalb“ im nächsten Satz zeigt, wofür die Miete ausgegeben wurde."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Die Kanzlei hat ihren Mietvertrag inzwischen allerdings wieder gekündigt.",
        "Ein Büro, in dem sich niemand mehr zu Hause fühlt, verliert leicht seine wichtigste Aufgabe: Menschen zusammenzubringen.",
        "Der Grund liegt auf der Hand: Seit sich das Arbeiten von zu Hause durchgesetzt hat, stehen viele Schreibtische einen großen Teil der Woche leer.",
        "Fast jeder Dritte äußerte sich dagegen unzufrieden.",
        "Deshalb hat die Geschäftsführung beschlossen, zu festen Arbeitsplätzen zurückzukehren.",
        "Persönliche Dinge kommen in einen abschließbaren Schrank im Flur.",
        "Erste Rückmeldungen deuten darauf hin, dass an diesen Tagen deutlich mehr Plätze belegt sind als zuvor.",
        "Diese Umbauten kosten Geld, das von der Ersparnis zunächst wieder abgeht."
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„dagegen“ stellt der Zufriedenheit die Unzufriedenen gegenüber; danach folgt, was kritisiert wird."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Die Kanzlei hat ihren Mietvertrag inzwischen allerdings wieder gekündigt.",
        "Ein Büro, in dem sich niemand mehr zu Hause fühlt, verliert leicht seine wichtigste Aufgabe: Menschen zusammenzubringen.",
        "Der Grund liegt auf der Hand: Seit sich das Arbeiten von zu Hause durchgesetzt hat, stehen viele Schreibtische einen großen Teil der Woche leer.",
        "Fast jeder Dritte äußerte sich dagegen unzufrieden.",
        "Deshalb hat die Geschäftsführung beschlossen, zu festen Arbeitsplätzen zurückzukehren.",
        "Persönliche Dinge kommen in einen abschließbaren Schrank im Flur.",
        "Erste Rückmeldungen deuten darauf hin, dass an diesen Tagen deutlich mehr Plätze belegt sind als zuvor.",
        "Diese Umbauten kosten Geld, das von der Ersparnis zunächst wieder abgeht."
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Der Satz benennt das Risiko, auf das „genau hier“ verweist; der nächste Satz erklärt es mit den fehlenden Gesprächen."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Die Kanzlei hat ihren Mietvertrag inzwischen allerdings wieder gekündigt.",
        "Ein Büro, in dem sich niemand mehr zu Hause fühlt, verliert leicht seine wichtigste Aufgabe: Menschen zusammenzubringen.",
        "Der Grund liegt auf der Hand: Seit sich das Arbeiten von zu Hause durchgesetzt hat, stehen viele Schreibtische einen großen Teil der Woche leer.",
        "Fast jeder Dritte äußerte sich dagegen unzufrieden.",
        "Deshalb hat die Geschäftsführung beschlossen, zu festen Arbeitsplätzen zurückzukehren.",
        "Persönliche Dinge kommen in einen abschließbaren Schrank im Flur.",
        "Erste Rückmeldungen deuten darauf hin, dass an diesen Tagen deutlich mehr Plätze belegt sind als zuvor.",
        "Diese Umbauten kosten Geld, das von der Ersparnis zunächst wieder abgeht."
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "„an diesen Tagen“ greift die festen Teamtage auf; die Befragung im Frühjahr soll das Ergebnis noch bestätigen."
      }
     ]
    },
    {
     "id": "c1bl1s3",
     "text": {
      "sorte": "zeitung",
      "quelle": "Fachzeitschrift Klinik heute",
      "titel": "Von Manila nach Wesselbrück",
      "zeilen": [
       "Als die ersten elf Pflegekräfte von den Philippinen vor zwei Jahren am Klinikum Wesselbrück ankamen, standen die Stationsleitungen mit Blumensträußen am Eingang. Die Erleichterung war groß: Im Klinikverbund Nordheide, zu dem das Haus gehört, waren damals 86 von rund 1 200 Pflegestellen unbesetzt. __(1)__ Inzwischen arbeiten 64 Fachkräfte aus sechs Ländern in den drei Kliniken des Verbunds, und die Zahl der offenen Stellen ist auf 31 gesunken.",
       "Der Weg dorthin war teurer und langwieriger, als die Geschäftsführung anfangs angenommen hatte. Für jede Pflegekraft rechnet der Verbund mit Kosten von rund 14 000 Euro, die sich aus Vermittlungsgebühren, Sprachkursen, Flügen und der ersten Unterkunft zusammensetzen. __(2)__ Vom Vorstellungsgespräch per Video bis zum ersten Arbeitstag vergehen im Durchschnitt elf Monate.",
       "Ein großer Teil dieser Zeit entfällt auf die Anerkennung der ausländischen Abschlüsse. Die Bewerber müssen nachweisen, dass ihre Ausbildung der deutschen gleichwertig ist, und dafür Unterlagen einreichen, übersetzen und beglaubigen lassen. __(3)__ In Wesselbrück arbeiten die Neuen bis dahin als Pflegehelfer und bereiten sich in einem Kurs auf die Kenntnisprüfung vor.",
       "Die größte Hürde ist aber meist die Sprache. Verlangt wird das Niveau B2, doch zwischen einem bestandenen Sprachtest und dem Alltag auf einer chirurgischen Station liegen Welten. __(4)__ Pflegedirektorin Annette Sörensen hat deshalb jedem Neuankömmling einen Paten aus dem Team zur Seite gestellt, der in den ersten sechs Monaten bei Fragen hilft und auch mal erklärt, was mit „Die Sieben hat geklingelt“ eigentlich gemeint ist.",
       "Die Bilanz nach zwei Jahren fällt gemischt aus. Von den 64 angeworbenen Fachkräften haben neun den Verbund wieder verlassen, die meisten in Richtung größerer Städte. __(5)__ Personalleiter Bernd Kowalczyk nimmt das gelassen: „Wir wissen, dass wir in der Kleinstadt um diese Leute kämpfen müssen. Bezahlbare Wohnungen helfen dabei mehr als jedes Begrüßungsgeschenk.“ Der Verbund hat deshalb zwölf Wohnungen in der Nähe des Klinikums angemietet, die er günstig weitervermietet.",
       "Ganz ohne Kritik bleibt das Modell nicht. Gewerkschaftsvertreter weisen darauf hin, dass auch in den Herkunftsländern Pflegepersonal gebraucht wird. __(6)__ Der Verbund arbeitet deshalb nur mit Agenturen zusammen, die sich an die Regeln des staatlichen Gütesiegels für faire Anwerbung halten und von den Bewerbern selbst keine Gebühren verlangen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Satz gehört in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Fehlen einzelne Inhalte, wird die Anerkennung zunächst nur unter Auflagen erteilt.",
        "Zudem berichten Fachkräfte immer wieder von Vermittlern, die hohe Summen von den Bewerbern selbst verlangen.",
        "Englisch reicht auf den Stationen deshalb in der Regel völlig aus.",
        "Mehrere Stationen mussten deshalb zeitweise Betten sperren, weil für die Nachtdienste nicht genug Personal da war.",
        "Dort locken höhere Zuschläge und eine größere Gemeinschaft von Landsleuten.",
        "Noch stärker als das Geld fällt allerdings die Zeit ins Gewicht.",
        "Die meisten von ihnen haben inzwischen ihre Familien nachgeholt und ein Haus gekauft.",
        "Übergaben in schnellem Deutsch, Abkürzungen in der Patientenakte und der Dialekt mancher älterer Patienten bereiten selbst gut vorbereiteten Kräften Schwierigkeiten."
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„deshalb“ knüpft an die 86 unbesetzten Stellen an; „Inzwischen“ beschreibt danach die Verbesserung."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Fehlen einzelne Inhalte, wird die Anerkennung zunächst nur unter Auflagen erteilt.",
        "Zudem berichten Fachkräfte immer wieder von Vermittlern, die hohe Summen von den Bewerbern selbst verlangen.",
        "Englisch reicht auf den Stationen deshalb in der Regel völlig aus.",
        "Mehrere Stationen mussten deshalb zeitweise Betten sperren, weil für die Nachtdienste nicht genug Personal da war.",
        "Dort locken höhere Zuschläge und eine größere Gemeinschaft von Landsleuten.",
        "Noch stärker als das Geld fällt allerdings die Zeit ins Gewicht.",
        "Die meisten von ihnen haben inzwischen ihre Familien nachgeholt und ein Haus gekauft.",
        "Übergaben in schnellem Deutsch, Abkürzungen in der Patientenakte und der Dialekt mancher älterer Patienten bereiten selbst gut vorbereiteten Kräften Schwierigkeiten."
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Nach den Kosten leitet der Satz zur Dauer über, die der nächste Satz mit elf Monaten beziffert."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Fehlen einzelne Inhalte, wird die Anerkennung zunächst nur unter Auflagen erteilt.",
        "Zudem berichten Fachkräfte immer wieder von Vermittlern, die hohe Summen von den Bewerbern selbst verlangen.",
        "Englisch reicht auf den Stationen deshalb in der Regel völlig aus.",
        "Mehrere Stationen mussten deshalb zeitweise Betten sperren, weil für die Nachtdienste nicht genug Personal da war.",
        "Dort locken höhere Zuschläge und eine größere Gemeinschaft von Landsleuten.",
        "Noch stärker als das Geld fällt allerdings die Zeit ins Gewicht.",
        "Die meisten von ihnen haben inzwischen ihre Familien nachgeholt und ein Haus gekauft.",
        "Übergaben in schnellem Deutsch, Abkürzungen in der Patientenakte und der Dialekt mancher älterer Patienten bereiten selbst gut vorbereiteten Kräften Schwierigkeiten."
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Die Auflagen erklären „bis dahin“: Bis zur Kenntnisprüfung arbeiten die Neuen als Pflegehelfer."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Fehlen einzelne Inhalte, wird die Anerkennung zunächst nur unter Auflagen erteilt.",
        "Zudem berichten Fachkräfte immer wieder von Vermittlern, die hohe Summen von den Bewerbern selbst verlangen.",
        "Englisch reicht auf den Stationen deshalb in der Regel völlig aus.",
        "Mehrere Stationen mussten deshalb zeitweise Betten sperren, weil für die Nachtdienste nicht genug Personal da war.",
        "Dort locken höhere Zuschläge und eine größere Gemeinschaft von Landsleuten.",
        "Noch stärker als das Geld fällt allerdings die Zeit ins Gewicht.",
        "Die meisten von ihnen haben inzwischen ihre Familien nachgeholt und ein Haus gekauft.",
        "Übergaben in schnellem Deutsch, Abkürzungen in der Patientenakte und der Dialekt mancher älterer Patienten bereiten selbst gut vorbereiteten Kräften Schwierigkeiten."
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Der Satz konkretisiert die „Welten“ zwischen Test und Station; „deshalb“ führt zur Patenlösung."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Fehlen einzelne Inhalte, wird die Anerkennung zunächst nur unter Auflagen erteilt.",
        "Zudem berichten Fachkräfte immer wieder von Vermittlern, die hohe Summen von den Bewerbern selbst verlangen.",
        "Englisch reicht auf den Stationen deshalb in der Regel völlig aus.",
        "Mehrere Stationen mussten deshalb zeitweise Betten sperren, weil für die Nachtdienste nicht genug Personal da war.",
        "Dort locken höhere Zuschläge und eine größere Gemeinschaft von Landsleuten.",
        "Noch stärker als das Geld fällt allerdings die Zeit ins Gewicht.",
        "Die meisten von ihnen haben inzwischen ihre Familien nachgeholt und ein Haus gekauft.",
        "Übergaben in schnellem Deutsch, Abkürzungen in der Patientenakte und der Dialekt mancher älterer Patienten bereiten selbst gut vorbereiteten Kräften Schwierigkeiten."
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„Dort“ verweist auf die größeren Städte und nennt die Gründe für die Abwanderung."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Fehlen einzelne Inhalte, wird die Anerkennung zunächst nur unter Auflagen erteilt.",
        "Zudem berichten Fachkräfte immer wieder von Vermittlern, die hohe Summen von den Bewerbern selbst verlangen.",
        "Englisch reicht auf den Stationen deshalb in der Regel völlig aus.",
        "Mehrere Stationen mussten deshalb zeitweise Betten sperren, weil für die Nachtdienste nicht genug Personal da war.",
        "Dort locken höhere Zuschläge und eine größere Gemeinschaft von Landsleuten.",
        "Noch stärker als das Geld fällt allerdings die Zeit ins Gewicht.",
        "Die meisten von ihnen haben inzwischen ihre Familien nachgeholt und ein Haus gekauft.",
        "Übergaben in schnellem Deutsch, Abkürzungen in der Patientenakte und der Dialekt mancher älterer Patienten bereiten selbst gut vorbereiteten Kräften Schwierigkeiten."
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Der zweite Kritikpunkt erklärt das „deshalb“: Der Verbund wählt nur Agenturen ohne Gebühren für Bewerber."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "textwahl",
   "name": "Lesen: In welchem Beitrag?",
   "kurz": "Sechs Fragen, fünf Beiträge",
   "was": "Fünf Beiträge aus einem Fachforum. Zu sechs Fragen suchst du den Beitrag, in dem die Antwort steht. Ein Beitrag kann mehrmals passen, ein anderer gar nicht.",
   "tipp": "Die Fragen umschreiben den Text. Lies zuerst alle Fragen, dann such im Beitrag nach dem Inhalt, nicht nach gleichen Wörtern.",
   "zeichen": "🗂️",
   "farbe": "gold",
   "punkte": 12,
   "runden": [
    {
     "id": "c1bl2s1",
     "text": {
      "sorte": "seite",
      "quelle": "Forum „Führung im Mittelstand“",
      "titel": "Das jährliche Mitarbeitergespräch: abschaffen oder behalten?",
      "zeilen": [
       "Beitrag A · Ralf Dittmer, Geschäftsführer einer Spedition: Wir haben das jährliche Mitarbeitergespräch vor zwei Jahren abgeschafft, und ich vermisse es keine Minute. Bei uns war das am Ende ein Ritual: Formular ausfüllen, eine Stunde reden, Formular abheften. Ehrlich gesagt hat sich keiner der Beteiligten darauf gefreut, ich am allerwenigsten.",
       "Stattdessen setze ich mich mit jedem Disponenten einmal im Monat für eine Viertelstunde zusammen. Ohne Formular, meistens mit einem Kaffee. Die Leute sagen mir da Dinge, die sie früher nie in ein offizielles Gespräch eingebracht hätten. Probleme kommen dadurch auf den Tisch, solange sie noch klein sind.",
       "Natürlich hat das einen Haken: Ich muss mir die Zeit wirklich nehmen, auch in Wochen, in denen bei uns alles brennt. Zwei-, dreimal habe ich Termine verschoben, und prompt kam die Frage, ob das neue System schon wieder eingeschlafen sei. Seitdem stehen die Gespräche fest im Kalender und fallen nur noch bei Krankheit aus. Für einen Betrieb mit dreißig Leuten in der Disposition funktioniert das gut. Ob es bei dreihundert noch klappt, weiß ich nicht.",
       "Beitrag B · Sabine Lohrmann, Personalleiterin in einem Maschinenbaubetrieb: Ich kann vor einer völligen Abschaffung nur warnen. Kurze Gespräche zwischendurch sind gut, aber sie ersetzen nicht den einen Termin im Jahr, an dem man in Ruhe zurückblickt und Ziele festlegt. Gerade wer Gehaltserhöhungen oder Weiterbildungen begründen will, braucht etwas Schriftliches.",
       "Bei uns hängt die jährliche Prämie zum Teil an vereinbarten Zielen. Ohne dokumentiertes Gespräch hätten wir bei jeder Auszahlung Streit, und der Betriebsrat würde uns zu Recht aufs Dach steigen.",
       "Hinzu kommt die rechtliche Seite. Wenn es einmal zu einer Trennung kommt, hilft es, wenn Leistungsprobleme schon früher angesprochen und festgehalten wurden. Das klingt hart, gehört aber dazu. Ich würde deshalb eher das Formular verbessern als das Gespräch abschaffen. Unseres hatte früher sechs Seiten, heute sind es zwei, und die Führungskräfte füllen es deutlich lieber aus.",
       "Beitrag C · Tobias Engel, Teamleiter im Kundenservice: Ich führe die Gespräche, weil ich muss, und bin ehrlich gesagt nie richtig darauf vorbereitet. Ich habe vierzehn Leute im Team, und im Januar sitze ich zwei Wochen lang fast nur in Gesprächen. Das Tagesgeschäft bleibt liegen, und die letzten Termine führe ich meistens unter Zeitdruck.",
       "Geschult wurde ich dafür übrigens nie. Man hat mir das Formular gegeben und gesagt, ich solle es eben machen. Ich glaube, vielen Führungskräften im Mittelstand geht es genauso, und daran liegt es eher als am Gespräch selbst.",
       "Was mir helfen würde, wäre eine Verteilung über das ganze Jahr. Wenn ich jeden Monat zwei oder drei Gespräche führe, kann ich mich auf jedes richtig vorbereiten und muss nicht im Januar alles auf einmal erledigen. Unsere Personalabteilung besteht aber auf dem festen Zeitraum, weil sie die Ergebnisse gesammelt für die Gehaltsrunde braucht. Ich verstehe das, aber für die Qualität der Gespräche ist es schlecht.",
       "Beitrag D · Merve Aksoy, Sachbearbeiterin in der Buchhaltung: Mal die Sicht von der anderen Seite: Ich habe das jährliche Gespräch immer gemocht. Es ist der einzige Termin, an dem meine Chefin wirklich eine Stunde nur für mich da ist. Im Alltag sind es Flurgespräche zwischen zwei Telefonaten.",
       "Was mich allerdings stört: Die Ziele, die wir vereinbaren, werden im Lauf des Jahres nie wieder angeschaut. Ein kurzer Zwischenstand im Sommer würde schon viel helfen.",
       "Ich weiß, dass viele Kollegen das anders sehen und das Gespräch eher als Pflichttermin betrachten. Bei uns liegt es vielleicht auch daran, dass sich meine Chefin gut vorbereitet. Sie hat Notizen aus dem ganzen Jahr dabei und weiß genau, woran ich gearbeitet habe. Daran merke ich, dass meine Arbeit wahrgenommen wird. Wenn das Gespräch wegfiele, hätte ich ehrlich gesagt Angst, dass genau das verloren geht.",
       "Beitrag E · Holger Brandt, Unternehmensberater: Aus meiner Erfahrung in rund vierzig Betrieben: Das Problem ist selten das Format, sondern der Inhalt. Wo das Gespräch vor allem zur Bewertung dient, sitzen die Mitarbeiter in einer Verteidigungshaltung und sagen nur das Nötigste.",
       "Ich empfehle meinen Kunden deshalb, Bewertung und Entwicklung zu trennen. Das eine Gespräch klärt Leistung und Geld, ein zweites, ein paar Monate später, dreht sich nur darum, wohin sich jemand beruflich entwickeln möchte. Die Rückmeldungen aus den Betrieben sind fast immer besser als vorher.",
       "Ein zweiter Punkt betrifft die Vorbereitung. In vielen Firmen bekommt der Mitarbeiter den Fragebogen erst am Tag vorher, manchmal gar nicht. Wer sich nicht vorbereiten kann, wird im Gespräch auch nichts Wesentliches sagen. Ich rate dazu, die Fragen mindestens eine Woche vorher zu verschicken und ausdrücklich darum zu bitten, eigene Themen mitzubringen."
      ]
     },
     "aufgaben": [
      {
       "frage": "In welchem Beitrag fühlt sich eine Führungskraft für die Gespräche nicht ausreichend ausgebildet?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Geschult wurde ich dafür übrigens nie",
       "erklaerung": "Engel hat nie eine Schulung bekommen, nur das Formular."
      },
      {
       "frage": "In welchem Beitrag haben häufige kurze Treffen das formelle Gespräch ersetzt?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "einmal im Monat für eine Viertelstunde zusammen",
       "erklaerung": "Statt eines Jahresgesprächs gibt es monatliche Kurzgespräche ohne Formular."
      },
      {
       "frage": "In welchem Beitrag leidet die übrige Arbeit eines Teams unter der Gesprächsphase?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Das Tagesgeschäft bleibt liegen",
       "erklaerung": "Zwei Wochen voller Gespräche bedeuten, dass die normale Arbeit liegen bleibt."
      },
      {
       "frage": "In welchem Beitrag würde es ohne schriftliche Grundlage bei Sonderzahlungen zu Konflikten kommen?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Ohne dokumentiertes Gespräch hätten wir bei jeder Auszahlung Streit",
       "erklaerung": "Die Prämie hängt an Zielen; ohne Dokumentation gäbe es Streit. D spricht zwar von Zielen, aber nicht von Geld."
      },
      {
       "frage": "In welchem Beitrag wird empfohlen, zwei Gespräche mit unterschiedlichem Zweck zu führen?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "Bewertung und Entwicklung zu trennen",
       "erklaerung": "Ein Gespräch für Leistung und Geld, ein zweites nur für die Entwicklung."
      },
      {
       "frage": "In welchem Beitrag erfährt ein Vorgesetzter durch die neue Form früher von Schwierigkeiten?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "Probleme kommen dadurch auf den Tisch, solange sie noch klein sind",
       "erklaerung": "Durch die monatlichen Gespräche werden Probleme früh sichtbar."
      }
     ]
    },
    {
     "id": "c1bl2s2",
     "text": {
      "sorte": "seite",
      "quelle": "Forum „Personal & Praxis“",
      "titel": "Drei Tage Präsenz: Wie setzt ihr die Rückkehr ins Büro um?",
      "zeilen": [
       "Beitrag A · Kerstin Vogt, Personalreferentin in einer Softwarefirma: Bei uns gilt seit Oktober: Dienstag bis Donnerstag ist Bürotag, Montag und Freitag darf jeder arbeiten, wo er will. Angekündigt hat die Geschäftsführung das per Rundmail, ohne vorher mit irgendwem zu sprechen. Entsprechend war die Stimmung.",
       "Drei Entwickler haben inzwischen gekündigt, alle drei wohnen über eine Stunde entfernt. Ersetzt haben wir bisher keinen. Wer so eine Regel durchziehen will, sollte vorher sehr genau wissen, wen er damit verlieren könnte.",
       "Was mich als Personalerin besonders ärgert: Wir haben vor zwei Jahren in unseren Stellenanzeigen ausdrücklich mit flexiblem Arbeiten geworben. Viele, die damals gekommen sind, haben sich genau deshalb für uns entschieden und fühlen sich jetzt verständlicherweise getäuscht. In Vorstellungsgesprächen werde ich inzwischen fast jedes Mal gefragt, ob es bei drei Tagen bleibt oder ob noch weitere dazukommen.",
       "Ich selbst finde drei Tage übrigens gar nicht zu viel. Mir geht es um die Art, wie die Regel eingeführt wurde.",
       "Beitrag B · Andreas Hufnagel, Abteilungsleiter bei einer Versicherung: Ich verstehe den Ärger, halte Präsenztage aber für richtig. Seit zwei Jahren arbeite ich fast nur noch mit Leuten, die ich vom Bildschirm kenne. Die Einarbeitung neuer Kollegen über Videokonferenzen funktioniert einfach schlecht. Unsere Azubis haben im ersten Jahr kaum etwas mitbekommen, weil niemand da war, dem sie über die Schulter schauen konnten.",
       "Allerdings muss das Büro dann auch etwas bieten. Wer an Präsenztagen den ganzen Tag in Videokonferenzen sitzt, hätte genauso gut zu Hause bleiben können.",
       "Bei uns gibt es deshalb an den Bürotagen feste Zeiten ohne Termine, in denen man sich austauscht, gemeinsam an schwierigen Fällen arbeitet oder einfach zusammen Mittag isst. Am Anfang wurde das belächelt. Inzwischen machen fast alle mit, und ich habe den Eindruck, dass wir manches Problem schneller lösen als vorher mit drei Videokonferenzen.",
       "Beitrag C · Nadine Kurz, Betriebsrätin in einem Logistikunternehmen: Kurzer Hinweis aus Sicht des Betriebsrats: Ob und wie viel mobil gearbeitet wird, ist bei uns in einer Betriebsvereinbarung geregelt. Die Geschäftsführung kann das nicht einfach per E-Mail ändern. Ich würde jedem raten, erst einmal nachzusehen, was bei euch schriftlich vereinbart ist.",
       "Wir haben die Vereinbarung übrigens gerade neu verhandelt. Herausgekommen sind zwei feste Teamtage pro Woche, die jedes Team selbst festlegt. Das war ein Kompromiss, mit dem am Ende beide Seiten leben können.",
       "Wichtig war uns dabei, Ausnahmen klar zu regeln. Wer Angehörige pflegt oder aus gesundheitlichen Gründen nicht täglich pendeln kann, kann bei der Personalabteilung eine andere Lösung beantragen. Bisher wurden fast alle Anträge genehmigt, und es hat sich auch niemand beschwert, dass das ungerecht sei.",
       "Beitrag D · Florian Weise, Controller in einem Handelsunternehmen: Ich arbeite gern im Büro, das sage ich ganz offen. Zu Hause habe ich zwei kleine Kinder und kein eigenes Zimmer, und am Küchentisch lässt sich keine Monatsabrechnung machen. Mir hat in der Diskussion bisher gefehlt, dass es auch Leute gibt, für die das Homeoffice eher eine Belastung ist.",
       "Was mich stört, ist etwas anderes: Seit wir uns die Schreibtische teilen, finde ich an Bürotagen oft keinen Platz in der Nähe meines Teams. Dann sitze ich zwischen Fremden und telefoniere mit meinen Kollegen, die zwei Stockwerke höher sitzen.",
       "Mein Vorschlag wäre, dass jedes Team an seinen Bürotagen einen festen Bereich bekommt. Das haben wir der Hausverwaltung schon zweimal vorgeschlagen, bisher ohne Antwort. Solange sich daran nichts ändert, verstehe ich jeden, der lieber zu Hause bleibt, auch wenn ich selbst anders entscheide.",
       "Vielleicht bin ich da altmodisch, aber ich trenne Arbeit und Familie gern auch räumlich. Wenn ich abends nach Hause komme, ist Feierabend.",
       "Beitrag E · Jana Petrović, Teamleiterin in einer Werbeagentur: Wir haben es andersherum gemacht und das Team selbst entscheiden lassen. Ergebnis: Die meisten kommen zweimal pro Woche, und zwar an denselben Tagen, weil sie sich sehen wollen. Ich musste gar nichts anordnen.",
       "Ein Problem gibt es aber: Neue Mitarbeiter wissen anfangs nicht, wann die anderen da sind, und sitzen dann allein im Büro. Wir haben jetzt einen gemeinsamen Kalender eingeführt, in den jeder seine Bürotage einträgt.",
       "Ich gebe zu, dass das bei uns auch deshalb gut klappt, weil wir nur zwölf Leute sind und alle in derselben Stadt wohnen. In einem Konzern mit Standorten in mehreren Ländern könnte ich mir das nicht so einfach vorstellen. Da braucht es wahrscheinlich doch eine Regel von oben, sonst sieht man sich am Ende gar nicht mehr."
      ]
     },
     "aufgaben": [
      {
       "frage": "In welchem Beitrag wird darauf hingewiesen, dass die Regelung nicht einseitig geändert werden darf?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Die Geschäftsführung kann das nicht einfach per E-Mail ändern",
       "erklaerung": "Die Betriebsvereinbarung bindet beide Seiten; eine Rundmail reicht nicht."
      },
      {
       "frage": "In welchem Beitrag hat eine neue Regel dazu geführt, dass Personal verloren ging?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "Drei Entwickler haben inzwischen gekündigt",
       "erklaerung": "Nach der Einführung der Bürotage kündigten drei Entwickler mit langem Arbeitsweg."
      },
      {
       "frage": "In welchem Beitrag wird beklagt, dass der Nachwuchs zu wenig lernen konnte?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Unsere Azubis haben im ersten Jahr kaum etwas mitbekommen",
       "erklaerung": "Ohne Kollegen vor Ort fehlte den Azubis das Lernen durch Zuschauen."
      },
      {
       "frage": "In welchem Beitrag haben sich Beschäftigte ohne jede Vorgabe auf gemeinsame Bürotage geeinigt?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "Die meisten kommen zweimal pro Woche, und zwar an denselben Tagen",
       "erklaerung": "Das Team hat selbst entschieden. In C gibt die Betriebsvereinbarung zwei Tage vor: Das ist eine Vorgabe."
      },
      {
       "frage": "In welchem Beitrag wird gefordert, die Tage im Büro auch sinnvoll zu nutzen?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Wer an Präsenztagen den ganzen Tag in Videokonferenzen sitzt",
       "erklaerung": "Das Büro muss etwas bieten; nur Videokonferenzen könnte man auch zu Hause führen."
      },
      {
       "frage": "In welchem Beitrag wird beschrieben, wie man ein Problem neuer Kollegen gelöst hat?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "Wir haben jetzt einen gemeinsamen Kalender eingeführt",
       "erklaerung": "Neue wussten nicht, wann die anderen kommen; der Kalender schafft Abhilfe."
      }
     ]
    },
    {
     "id": "c1bl2s3",
     "text": {
      "sorte": "seite",
      "quelle": "Forum „Pflege im Gespräch“",
      "titel": "Springerpool: Entlastung oder Notlösung?",
      "zeilen": [
       "Beitrag A · Stefanie Raab, Pflegedienstleitung in einem Kreiskrankenhaus: Wir haben vor anderthalb Jahren einen Springerpool mit acht Vollzeitstellen eingerichtet. Die Pflegekräfte im Pool haben feste Arbeitszeiten, erfahren aber erst am Vortag, auf welcher Station sie eingesetzt werden. Dafür bekommen sie eine Zulage von 250 Euro im Monat.",
       "Seitdem müssen wir deutlich seltener Leute aus dem Frei holen. Früher habe ich an manchen Wochenenden fünf, sechs Kollegen an ihrem freien Tag anrufen müssen. Heute kommt das vielleicht einmal im Monat vor.",
       "Natürlich ist der Pool nicht umsonst. Die acht Stellen mussten wir zusätzlich schaffen, und die Geschäftsführung hat lange gezögert. Überzeugt hat sie am Ende die Rechnung, was uns Leiharbeitskräfte vorher gekostet haben. Die waren nämlich fast doppelt so teuer wie unsere eigenen Leute und kannten das Haus noch weniger.",
       "Ein Nachteil ist, dass die Poolkräfte kaum Nachtdienste übernehmen wollen. Das müssen wir noch lösen.",
       "Beitrag B · Daniel Mertens, Krankenpfleger auf einer Intensivstation: Ich war ein halbes Jahr im Pool und bin dann wieder zurück auf meine Station gegangen. Das ständige Wechseln hat mich mehr Kraft gekostet, als ich gedacht hatte. Jede Station hat ihre eigenen Abläufe, ihre eigenen Medikamentenschränke, ihre eigenen Gewohnheiten.",
       "Hinzu kam, dass man im Pool nie richtig dazugehört. Auf der Station bist du der, der heute aushilft, und bei der Weihnachtsfeier weiß keiner, wo er dich hinsetzen soll. Das klingt vielleicht kleinlich, aber auf Dauer macht es etwas mit einem.",
       "Ich will den Pool damit nicht schlechtreden. Für jüngere Kollegen ohne Familie kann das eine gute Erfahrung sein, man lernt in kurzer Zeit sehr viele Bereiche kennen und weiß danach viel besser, wo man eigentlich hinwill. Für mich war es nach einem halben Jahr aber genug.",
       "Inzwischen arbeite ich wieder fest auf der Intensivstation und bin damit zufrieden. Aber ich verstehe jeden, der den Pool ausprobieren will.",
       "Beitrag C · Beate Lindqvist, Pflegewissenschaftlerin: Aus Untersuchungen wissen wir, dass Springerpools die Zahl der kurzfristigen Ausfälle verringern können, allerdings nur unter bestimmten Bedingungen. Der Pool muss groß genug sein, damit er nicht selbst ständig unterbesetzt ist. Als Faustregel gelten etwa fünf Prozent der Pflegestellen eines Hauses.",
       "Ebenso wichtig ist die Einarbeitung. Wer auf mehreren Stationen eingesetzt wird, sollte jede davon vorher einige Tage gezielt kennenlernen. In vielen Häusern wird genau an dieser Stelle gespart, und dann wundert man sich über die Unzufriedenheit.",
       "Ein dritter Punkt wird oft vergessen: Die Springer brauchen eine feste Ansprechperson in der Pflegedirektion, die ihre Einsätze plant und sich um ihre Anliegen kümmert. Wo das fehlt, landen alle Beschwerden bei den Stationsleitungen, die dafür weder Zeit noch Zuständigkeit haben.",
       "In Häusern, die diese Punkte beachten, bleiben die Springer im Schnitt deutlich länger im Pool als anderswo.",
       "Beitrag D · Olga Schreiner, Stationsleitung in der Geriatrie: Bei uns gibt es keinen Pool, sondern ein Modell mit Wunschdienstplan. Jeder trägt zwei Monate im Voraus ein, an welchen Tagen er auf keinen Fall arbeiten kann. Diese Tage sind dann tabu, egal was passiert.",
       "Seitdem ist die Zahl der Krankmeldungen auf unserer Station um ein Viertel gesunken. Ich glaube, das liegt daran, dass die Leute wieder verlässlich planen können: Arzttermine, Kinderbetreuung, Geburtstage.",
       "Natürlich klappt das nicht immer. Wenn drei Leute gleichzeitig krank sind, muss trotzdem jemand einspringen. Dann fragen wir zuerst die, die für diese Tage nichts eingetragen haben. Aber das kommt viel seltener vor als früher, und die Leute sagen auch eher Ja, weil sie wissen, dass ihre freien Tage sonst respektiert werden.",
       "Die Dienstplanung ist dadurch natürlich aufwendiger geworden. Ich sitze jeden Monat einen halben Tag länger daran als früher.",
       "Beitrag E · Marcel König, Personalrat an einer Universitätsklinik: Wir haben dem Pool damals im Personalrat nur unter einer Bedingung zugestimmt: Niemand wird gegen seinen Willen hineinversetzt. Das hat sich bewährt. Die Leute im Pool sind dort, weil sie die Abwechslung mögen.",
       "Was wir allerdings unterschätzt haben, ist die Bezahlung. Die Zulage ist bei uns so gering, dass sich der Wechsel finanziell kaum lohnt. Inzwischen sind von zwölf Stellen nur noch neun besetzt.",
       "Wir verhandeln gerade mit der Klinikleitung über eine höhere Zulage. Mein Eindruck ist, dass man dort inzwischen verstanden hat, dass ein halb leerer Pool niemandem hilft. Ich rechne damit, dass wir bis zum Frühjahr eine Lösung haben.",
       "Ein Pool funktioniert eben nur, wenn die Leute auch etwas davon haben. Sonst bleibt am Ende niemand freiwillig dort."
      ]
     },
     "aufgaben": [
      {
       "frage": "In welchem Beitrag hat sich die Zahl der Krankmeldungen spürbar verringert?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "die Zahl der Krankmeldungen auf unserer Station um ein Viertel gesunken",
       "erklaerung": "Durch den Wunschdienstplan sanken die Krankmeldungen um ein Viertel. A spricht von Anrufen im Frei, nicht von Krankmeldungen."
      },
      {
       "frage": "In welchem Beitrag hat jemand die Zugehörigkeit zu einem festen Team vermisst?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "dass man im Pool nie richtig dazugehört",
       "erklaerung": "Mertens beschreibt, dass man als Springer nirgends richtig dazugehört."
      },
      {
       "frage": "In welchem Beitrag wird eine Richtgröße für den Umfang eines Pools genannt?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Als Faustregel gelten etwa fünf Prozent der Pflegestellen",
       "erklaerung": "Fünf Prozent der Pflegestellen sind die Faustregel für die Größe."
      },
      {
       "frage": "In welchem Beitrag wird kritisiert, dass Krankenhäuser bei der Vorbereitung der Springer sparen?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "In vielen Häusern wird genau an dieser Stelle gespart",
       "erklaerung": "Gemeint ist die Einarbeitung auf den einzelnen Stationen."
      },
      {
       "frage": "In welchem Beitrag wird Freiwilligkeit als Bedingung für das Gelingen genannt?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "Niemand wird gegen seinen Willen hineinversetzt",
       "erklaerung": "Der Personalrat stimmte nur zu, weil niemand gezwungen wird; das hat sich bewährt."
      },
      {
       "frage": "In welchem Beitrag hat eine zu geringe Zulage dazu geführt, dass Stellen frei bleiben?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "Inzwischen sind von zwölf Stellen nur noch neun besetzt",
       "erklaerung": "Weil sich der Wechsel finanziell kaum lohnt, sind drei Stellen unbesetzt. A nennt zwar eine Zulage, aber keine Probleme."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "textwahl",
   "name": "Lesen: E-Mail und Fachtext",
   "kurz": "Ein langer Text mit E-Mail, zwölf Aufgaben a/b/c",
   "was": "Eine E-Mail gibt den Anlass, dazu ein langer Fachtext. Zwölf Aufgaben mit je drei Antworten.",
   "tipp": "Erst die E-Mail genau lesen: Was will die Person wissen? Danach den Text Absatz für Absatz mit den Aufgaben abgleichen.",
   "zeichen": "📧",
   "farbe": "rot",
   "punkte": 24,
   "runden": [
    {
     "id": "c1bl3s1",
     "text": {
      "sorte": "zeitung",
      "quelle": "Fachzeitschrift Personal heute",
      "titel": "Wenn Mitarbeiter zu Personalvermittlern werden",
      "zeilen": [
       "E-Mail von Carina Weber, Personalreferentin an Thomas Lenz, Leiter Technischer Kundendienst · Betreff: Artikel zu Empfehlungsprämien: Ihre Einschätzung bis Freitag?",
       "Hallo Herr Lenz, ich hoffe, die Woche läuft bei Ihnen ruhiger als bei uns. Wie Sie wissen, haben wir im Kundendienst immer noch vier offene Stellen für Servicetechniker, zwei davon seit über einem Jahr. Die Anzeigen auf den üblichen Portalen bringen kaum noch Bewerbungen, und die Personalvermittlung, mit der wir es im Frühjahr versucht haben, war teuer und hat am Ende nur einen Kandidaten geschickt, der nach drei Wochen wieder weg war.",
       "Herr Dr. Albers hat mich deshalb gebeten, bis zur Sitzung der Geschäftsleitung am 14. November einen Vorschlag für ein Empfehlungsprogramm auszuarbeiten. Im Anhang finden Sie einen Artikel, den ich zu dem Thema gefunden habe. Er beschreibt ziemlich genau die Fragen, die wir uns auch stellen müssen: Wie hoch soll die Prämie sein, wann wird sie ausgezahlt, und wer darf überhaupt mitmachen?",
       "Bevor ich etwas Konkretes aufschreibe, wäre mir Ihre Meinung wichtig. Sie kennen Ihre Techniker besser als ich. Würden die Kollegen überhaupt Leute aus ihrem Bekanntenkreis empfehlen? Und wäre es aus Ihrer Sicht ein Problem, wenn Führungskräfte von der Prämie ausgeschlossen werden, wie es laut dem Artikel viele Firmen machen? Ich denke dabei auch an Ihre beiden Gruppenleiter, die ja viele Leute in der Branche kennen.",
       "Es reicht völlig, wenn Sie mir bis Freitag ein paar Stichpunkte schicken. Gern können wir auch kurz telefonieren, ich bin am Donnerstag ab 14 Uhr erreichbar.",
       "Viele Grüße, Carina Weber",
       "Der Artikel im Anhang: Wenn Mitarbeiter zu Personalvermittlern werden",
       "Als die Firma Krüger Kältetechnik aus Beelitz im vergangenen Jahr dringend Monteure suchte, griff Personalchefin Anja Schulte zu einem Mittel, das sie lange für überholt gehalten hatte. Sie hängte im Pausenraum ein Plakat auf: 2 000 Euro für jeden Mitarbeiter, der einen neuen Kollegen wirbt. Innerhalb von sechs Monaten kamen auf diesem Weg elf Einstellungen zustande, mehr als über alle Stellenanzeigen zusammen. „Ich hätte nicht gedacht, dass es so einfach sein kann“, sagt Schulte.",
       "Empfehlungsprogramme sind keineswegs neu, doch angesichts des Fachkräftemangels erleben sie gerade eine Wiederbelebung. Nach einer Befragung des Instituts für Personalforschung in Gießbach unter 1 100 Unternehmen nutzen inzwischen 43 Prozent der mittelständischen Betriebe solche Programme, vor fünf Jahren waren es noch 27 Prozent. Besonders verbreitet sind sie im Handwerk, in der Pflege und in der IT, also dort, wo Bewerber knapp sind.",
       "Der Reiz liegt auf der Hand. Wer einen Bekannten empfiehlt, kennt den Betrieb von innen und weiß, wer dort hineinpasst. Bewerber, die auf diesem Weg kommen, haben meist schon ein realistisches Bild von der Arbeit. Untersuchungen deuten darauf hin, dass sie seltener in der Probezeit kündigen und länger im Unternehmen bleiben. Hinzu kommen die Kosten: Selbst eine großzügige Prämie liegt meist deutlich unter dem Honorar einer Personalvermittlung, das oft zwanzig bis dreißig Prozent eines Jahresgehalts beträgt.",
       "Dass der Ansatz funktioniert, zeigt auch das Beispiel des Pflegedienstes Sonnenhof in Elsdorf. Dort meldeten sich nach Einführung einer Prämie von 1 000 Euro innerhalb eines Jahres 23 Pflegekräfte, von denen 17 eingestellt wurden. Pflegedienstleiterin Martina Ruf berichtet, dass vor allem jüngere Mitarbeiter Bekannte aus ihrer früheren Ausbildungsklasse angesprochen hätten. „Die wussten genau, wie es bei uns läuft, und kamen trotzdem. Das sagt viel“, meint sie.",
       "Bei der Höhe der Prämie gehen die Meinungen allerdings auseinander. Die meisten Betriebe zahlen zwischen 500 und 3 000 Euro, einige wenige deutlich mehr. Personalberater Jens Ottmann warnt davor, die Summe zu hoch anzusetzen. „Ab einem bestimmten Betrag empfehlen Leute auch Bekannte, die sie selbst nicht einstellen würden“, sagt er. Wichtiger als die Höhe sei, dass die Regeln klar und für alle nachvollziehbar seien.",
       "Dazu gehört vor allem die Frage, wann die Prämie fließt. Bewährt hat sich nach Ottmanns Erfahrung eine Auszahlung in zwei Schritten: die erste Hälfte bei Arbeitsbeginn, die zweite nach bestandener Probezeit. So hat der Empfehlende ein Interesse daran, dass der neue Kollege bleibt, und kümmert sich in den ersten Wochen oft ganz von selbst um ihn. Bei Krüger Kältetechnik wird der gesamte Betrag erst nach sechs Monaten ausgezahlt, was nach Schultes Angaben bisher niemanden abgeschreckt hat.",
       "Umstritten ist, wer an einem solchen Programm teilnehmen darf. Viele Unternehmen schließen Führungskräfte und Mitarbeiter der Personalabteilung aus. Begründet wird das damit, dass die Personalsuche ohnehin zu ihren Aufgaben gehöre und sie zudem Einfluss auf die Auswahl hätten. Kritiker halten dagegen, dass gerade Teamleiter oft die besten Kontakte in ihre Branche haben. Bei Krüger dürfen deshalb alle mitmachen, mit einer Ausnahme: Wer selbst über die Einstellung entscheidet, bekommt keine Prämie.",
       "Arbeitsrechtlich gibt es ebenfalls einiges zu beachten. Die Prämie ist steuer- und sozialversicherungspflichtig, wovon manche Beschäftigte bei der ersten Abrechnung unangenehm überrascht werden. Gibt es einen Betriebsrat, hat er bei der Ausgestaltung eines solchen Programms in aller Regel mitzubestimmen. Die Fachanwältin Doris Klemm empfiehlt, die Regeln schriftlich festzuhalten, etwa in einer Betriebsvereinbarung, um späteren Streit zu vermeiden.",
       "Wichtig ist außerdem, dass die Belegschaft überhaupt von dem Programm erfährt. Ein Hinweis im Intranet reicht nach Ottmanns Erfahrung nicht aus. Besser seien regelmäßige Erinnerungen, etwa in Teambesprechungen, und eine Liste der offenen Stellen, die jeder kennt. Bei Krüger hängt sie inzwischen neben der Stempeluhr und wird jeden Montag aktualisiert. Wer eine Empfehlung abgibt, bekommt innerhalb einer Woche Bescheid, ob der Kandidat eingeladen wird.",
       "Ganz ohne Schattenseiten sind Empfehlungsprogramme nicht. Weil Menschen vor allem Leute empfehlen, die ihnen ähnlich sind, kann die Belegschaft mit der Zeit einseitiger werden. Wer überwiegend Männer zwischen dreißig und fünfzig beschäftigt, wird über Empfehlungen vor allem weitere Männer zwischen dreißig und fünfzig finden. Ottmann rät deshalb, Empfehlungen als einen Weg unter mehreren zu betrachten und die klassische Ausschreibung nicht aufzugeben.",
       "Ein weiteres Risiko betrifft das Betriebsklima. Wird ein empfohlener Bewerber abgelehnt, kann das beim Empfehlenden für Verstimmung sorgen, vor allem, wenn er keine Begründung erhält. Schulte hat sich deshalb angewöhnt, jedem Mitarbeiter persönlich zu erklären, warum es mit seinem Kandidaten nicht geklappt hat. „Das dauert fünf Minuten und erspart mir wochenlangen Ärger“, sagt sie.",
       "Für die Zukunft plant Krüger Kältetechnik, das Programm auszuweiten. Künftig sollen auch ehemalige Mitarbeiter, die im Guten gegangen sind, Kandidaten vorschlagen dürfen. Ob das funktioniert, ist offen. Schulte ist trotzdem zuversichtlich: „Wer gern bei uns gearbeitet hat, erzählt das auch weiter. Warum sollte er dafür nicht belohnt werden?“"
      ]
     },
     "aufgaben": [
      {
       "frage": "Frau Weber schreibt Herrn Lenz, weil …",
       "opt": [
        "die Geschäftsleitung von ihr einen Vorschlag zur Personalgewinnung erwartet.",
        "Herr Lenz eine Prämie für einen Bekannten beantragt hat.",
        "die Personalvermittlung neue Kandidaten angekündigt hat."
       ],
       "loesung": 0,
       "stelle": "einen Vorschlag für ein Empfehlungsprogramm auszuarbeiten",
       "erklaerung": "Dr. Albers hat sie gebeten, einen Vorschlag für die Sitzung vorzubereiten."
      },
      {
       "frage": "Über die bisherige Personalvermittlung erfährt man, dass …",
       "opt": [
        "sie mehrere geeignete Techniker vermittelt hat.",
        "sie vor allem Bürokräfte gesucht hat.",
        "ihr einziger Kandidat das Unternehmen schnell wieder verlassen hat."
       ],
       "loesung": 2,
       "stelle": "nur einen Kandidaten geschickt, der nach drei Wochen wieder weg war",
       "erklaerung": "Nur ein Kandidat kam, und er ging nach drei Wochen wieder."
      },
      {
       "frage": "Von Herrn Lenz möchte Frau Weber …",
       "opt": [
        "bis Donnerstag einen fertigen Entwurf.",
        "eine kurze Einschätzung aus Sicht seiner Abteilung.",
        "eine Liste möglicher Bewerber aus seinem Bekanntenkreis."
       ],
       "loesung": 1,
       "stelle": "Es reicht völlig, wenn Sie mir bis Freitag ein paar Stichpunkte schicken",
       "erklaerung": "Stichpunkte bis Freitag genügen; Donnerstag ist nur der Termin für ein mögliches Telefonat."
      },
      {
       "frage": "Bei Krüger Kältetechnik führte das Plakat im Pausenraum dazu, dass …",
       "opt": [
        "mehr Stellen besetzt wurden als über Anzeigen.",
        "die Personalchefin keine Stellenanzeigen mehr schaltete.",
        "sich elf Mitarbeiter intern auf neue Stellen bewarben."
       ],
       "loesung": 0,
       "stelle": "mehr als über alle Stellenanzeigen zusammen",
       "erklaerung": "Elf Einstellungen über Empfehlungen waren mehr als über alle Anzeigen."
      },
      {
       "frage": "Laut der Befragung in Gießbach …",
       "opt": [
        "nutzen die meisten Großunternehmen Empfehlungsprogramme.",
        "hat der Anteil der Betriebe mit Empfehlungsprogramm deutlich zugenommen.",
        "sind Empfehlungsprogramme in der IT kaum bekannt."
       ],
       "loesung": 1,
       "stelle": "vor fünf Jahren waren es noch 27 Prozent",
       "erklaerung": "Von 27 auf 43 Prozent der mittelständischen Betriebe: ein deutlicher Anstieg."
      },
      {
       "frage": "Bewerber, die über eine Empfehlung kommen, …",
       "opt": [
        "verlangen meist ein höheres Gehalt.",
        "werden schneller eingearbeitet als andere.",
        "bleiben nach bisherigen Erkenntnissen länger im Betrieb."
       ],
       "loesung": 2,
       "stelle": "seltener in der Probezeit kündigen und länger im Unternehmen bleiben",
       "erklaerung": "Untersuchungen deuten auf eine längere Betriebszugehörigkeit hin."
      },
      {
       "frage": "Jens Ottmann hält eine sehr hohe Prämie für problematisch, weil …",
       "opt": [
        "dann auch weniger geeignete Personen empfohlen werden.",
        "sie die Kosten einer Personalvermittlung übersteigt.",
        "die Mitarbeiter dann keine anderen Prämien mehr bekommen."
       ],
       "loesung": 0,
       "stelle": "empfehlen Leute auch Bekannte, die sie selbst nicht einstellen würden",
       "erklaerung": "Bei zu viel Geld zählt die Prämie mehr als die Eignung des Bekannten."
      },
      {
       "frage": "Eine Auszahlung in zwei Schritten hat nach Ottmann den Vorteil, dass …",
       "opt": [
        "das Unternehmen Steuern spart.",
        "sich der Empfehlende um den neuen Kollegen kümmert.",
        "der neue Mitarbeiter schneller eingestellt werden kann."
       ],
       "loesung": 1,
       "stelle": "kümmert sich in den ersten Wochen oft ganz von selbst um ihn",
       "erklaerung": "Weil die zweite Hälfte erst nach der Probezeit kommt, hilft der Empfehlende beim Ankommen."
      },
      {
       "frage": "Bei Krüger Kältetechnik erhalten keine Prämie: …",
       "opt": [
        "alle Führungskräfte.",
        "die Mitarbeiter der Personalabteilung.",
        "Personen, die über Einstellungen entscheiden."
       ],
       "loesung": 2,
       "stelle": "Wer selbst über die Einstellung entscheidet, bekommt keine Prämie",
       "erklaerung": "Führungskräfte auszuschließen ist die Regel vieler Firmen, nicht die von Krüger."
      },
      {
       "frage": "Die Fachanwältin Doris Klemm rät, …",
       "opt": [
        "die Regeln schriftlich zu vereinbaren.",
        "den Betriebsrat erst nachträglich zu informieren.",
        "die Prämie steuerfrei auszuzahlen."
       ],
       "loesung": 0,
       "stelle": "die Regeln schriftlich festzuhalten",
       "erklaerung": "Eine schriftliche Regelung, etwa eine Betriebsvereinbarung, soll Streit verhindern."
      },
      {
       "frage": "Eine Gefahr von Empfehlungsprogrammen besteht darin, dass …",
       "opt": [
        "klassische Ausschreibungen nicht mehr erlaubt sind.",
        "die Belegschaft weniger vielfältig wird.",
        "ältere Bewerber gezielt ausgeschlossen werden."
       ],
       "loesung": 1,
       "stelle": "kann die Belegschaft mit der Zeit einseitiger werden",
       "erklaerung": "Menschen empfehlen Leute, die ihnen ähneln; so wird die Belegschaft einseitiger."
      },
      {
       "frage": "Anja Schulte erklärt abgelehnte Empfehlungen persönlich, um …",
       "opt": [
        "rechtliche Probleme zu vermeiden.",
        "die Bewerber für andere Stellen zu gewinnen.",
        "Unmut im Betrieb zu verhindern."
       ],
       "loesung": 2,
       "stelle": "erspart mir wochenlangen Ärger",
       "erklaerung": "Die kurze Erklärung verhindert Verstimmung beim Empfehlenden."
      }
     ]
    },
    {
     "id": "c1bl3s2",
     "text": {
      "sorte": "zeitung",
      "quelle": "Fachzeitschrift Beschaffung aktuell",
      "titel": "Das Lager kehrt zurück",
      "zeilen": [
       "E-Mail von Martin Gruber, Leiter Einkauf an Sevgi Arslan, Disposition · Betreff: Lagerbestände Kunststoffteile: Artikel und Bitte um Ihre Meinung",
       "Liebe Frau Arslan, nach unserem Gespräch in der Montagsrunde habe ich noch einmal über die Frage nachgedacht, ob wir unsere Lagerbestände bei den Kunststoffteilen wieder aufstocken sollten. Die Lieferprobleme im Sommer haben uns zwei Wochen Stillstand an der Linie drei gekostet, und das möchte ich nicht noch einmal erleben. Herr Feldmann hat mich in der letzten Woche gleich zweimal darauf angesprochen.",
       "Gestern bin ich auf den angehängten Artikel gestoßen. Er beschreibt, wie andere Mittelständler nach den Erfahrungen der letzten Jahre mit ihren Lagern umgehen. Einiges davon finde ich überzeugend, bei anderem bin ich skeptisch, vor allem, was die Kosten für zusätzliche Lagerfläche angeht. Unsere Halle in Brunnhofen ist schon jetzt fast voll, und eine weitere Fläche anzumieten, würde unser Budget sprengen.",
       "Sie haben in der Disposition den besten Überblick darüber, welche Teile in den vergangenen zwei Jahren knapp waren und bei welchen Lieferanten es immer wieder Verzögerungen gab. Könnten Sie den Artikel lesen und mir sagen, welche der beschriebenen Maßnahmen Sie für uns für sinnvoll halten? Eine Liste der zehn kritischsten Teile wäre außerdem sehr hilfreich.",
       "Ich würde das Thema gern in der Budgetrunde am 21. November ansprechen. Wenn Sie es bis dahin nicht schaffen, ist das auch kein Drama, dann verschieben wir es auf Januar.",
       "Viele Grüße, Martin Gruber",
       "Der Artikel im Anhang: Das Lager kehrt zurück",
       "Jahrzehntelang galt in der deutschen Industrie ein einfaches Prinzip: Was im Lager liegt, kostet Geld. Material sollte möglichst genau dann eintreffen, wenn es in der Produktion gebraucht wird, nicht eine Woche früher und schon gar nicht einen Monat. Wer dieses Prinzip beherrschte, sparte Lagerfläche, Kapital und Personal. Seit einigen Jahren gerät es jedoch ins Wanken.",
       "Der Grund sind die wiederholten Störungen in den Lieferketten. Gesperrte Häfen, fehlende Container und Engpässe bei Halbleitern haben vielen Betrieben vor Augen geführt, wie verwundbar eine Produktion ist, die ohne Puffer auskommen muss. Nach einer Erhebung der Wirtschaftsakademie Raunfeld, die in diesem Sommer unter 780 Unternehmen durchgeführt wurde, haben 61 Prozent ihre Sicherheitsbestände bei wichtigen Teilen erhöht, im Durchschnitt um ein Drittel.",
       "Ein Beispiel ist die Hellwig Elektronik GmbH aus Ortenstedt, die Steuerungen für Landmaschinen herstellt. Vor einigen Jahren musste das Unternehmen seine Fertigung für fast sieben Wochen herunterfahren, weil ein einziger Chip fehlte, der weniger als zwei Euro kostet. „Wir hatten alles da, die Gehäuse, die Kabel, die Platinen, nur dieses eine Teil nicht“, erinnert sich Geschäftsführer Ralf Hellwig. Der Schaden ging in die Millionen. Heute lagert die Firma für alle elektronischen Bauteile einen Vorrat für sechs Monate.",
       "Ähnliche Erfahrungen haben viele Betriebe gemacht. In der Befragung gaben 38 Prozent der Unternehmen an, in den vergangenen drei Jahren mindestens einmal wegen fehlender Teile die Produktion unterbrochen zu haben. Bei Betrieben mit weniger als 250 Beschäftigten lag der Anteil sogar bei 44 Prozent. Kleine Firmen trifft es härter, weil sie bei knapper Ware oft als Letzte beliefert werden.",
       "Die Kehrseite liegt auf der Hand: Lager kosten Geld. Hellwig hat eine zusätzliche Halle angemietet, zwei Lagerarbeiter eingestellt und rund 4,5 Millionen Euro in Vorräten gebunden, die früher für Investitionen zur Verfügung standen. Hinzu kommt das Risiko, dass Teile veralten, bevor sie verbaut werden. Gerade in der Elektronik wechseln die Modelle schnell, und ein Chip, der heute gefragt ist, wird in zwei Jahren womöglich nicht mehr gebraucht.",
       "Fachleute raten deshalb davon ab, die Bestände pauschal zu erhöhen. „Es bringt nichts, von allem mehr hinzulegen“, sagt Katrin Ebeling, die an der Hochschule Raunfeld Logistik lehrt. Sinnvoller sei es, zunächst zu ermitteln, welche Teile wirklich kritisch sind. Kritisch ist ein Teil nach ihrer Definition dann, wenn es nur bei einem einzigen Lieferanten erhältlich ist, lange Lieferzeiten hat und die Produktion ohne es stillsteht. Erfahrungsgemäß treffen diese drei Bedingungen nur auf einen kleinen Teil des Sortiments zu, oft auf weniger als fünf Prozent der Artikel.",
       "Für diese Teile empfiehlt Ebeling größere Sicherheitsbestände, für alle anderen könne man beim bisherigen Verfahren bleiben. Ergänzend sollten Unternehmen versuchen, für kritische Teile einen zweiten Lieferanten aufzubauen, möglichst in einer anderen Weltregion. Das sei zwar mühsam, weil neue Lieferanten geprüft und ihre Teile getestet werden müssten, schütze aber langfristig besser als jedes Lager.",
       "Einen anderen Weg geht die Firma Strobel Haustechnik in Wendelsheim. Statt selbst mehr zu lagern, hat sie mit ihren wichtigsten Lieferanten Verträge geschlossen, nach denen diese eine bestimmte Menge für Strobel vorrätig halten müssen. Dafür zahlt Strobel einen Aufschlag von drei bis fünf Prozent auf den Einkaufspreis. „Das Lager steht dann eben beim Lieferanten“, sagt Einkaufsleiterin Melanie Vogt. Für kleinere Abnehmer ist dieses Modell allerdings schwer durchzusetzen, weil ihnen die Verhandlungsmacht fehlt.",
       "Manche Betriebe gehen noch weiter und holen Teile der Fertigung zurück, die sie vor Jahren ins Ausland verlagert hatten. Die Kunststoffspritzerei Bauer in Lindach etwa stellt einfache Gehäuse inzwischen wieder selbst her, statt sie aus Asien zu beziehen. Die Stückkosten sind dadurch um etwa ein Fünftel gestiegen. Dafür hat Geschäftsführer Tobias Bauer die Lieferzeit von zwölf Wochen auf zehn Tage verkürzt und kann auf Sonderwünsche seiner Kunden schneller reagieren. Ob sich das auf Dauer rechnet, will er in zwei Jahren entscheiden.",
       "Eine wichtige Rolle spielt auch die Technik. Moderne Planungsprogramme können Verbrauch, Lieferzeiten und Bestände miteinander verknüpfen und frühzeitig melden, wenn ein Engpass droht. Viele Mittelständler arbeiten jedoch noch mit Tabellen, die von einzelnen Mitarbeitern gepflegt werden. Fällt einer von ihnen aus, weiß oft niemand mehr genau, was wann bestellt wurde. Ebeling rät deshalb, dieses Wissen auf mehrere Schultern zu verteilen und schriftlich festzuhalten.",
       "Nicht zu unterschätzen ist schließlich der Austausch mit den Lieferanten selbst. Ebeling beobachtet, dass Unternehmen, die ihre Lieferanten regelmäßig über ihre Planung informieren, in Krisen häufiger bevorzugt beliefert werden. „Wer seinen Lieferanten nur anruft, wenn es brennt, darf sich nicht wundern, wenn er dann hinten in der Schlange steht.“",
       "Ob die höheren Bestände auf Dauer bleiben, ist offen. Einige Unternehmen haben ihre Vorräte bereits wieder abgebaut, seit sich die Lage auf den Weltmärkten beruhigt hat. Ralf Hellwig gehört nicht dazu. „Die sieben Wochen Stillstand haben uns mehr gekostet als zehn Jahre Lagermiete“, sagt er. „Das passiert mir nicht noch einmal.“"
      ]
     },
     "aufgaben": [
      {
       "frage": "Herr Gruber denkt über höhere Lagerbestände nach, weil …",
       "opt": [
        "ein Kunde größere Mengen bestellt hat.",
        "Lieferprobleme zu einem Produktionsausfall geführt haben.",
        "die Halle in Brunnhofen erweitert wird."
       ],
       "loesung": 1,
       "stelle": "uns zwei Wochen Stillstand an der Linie drei gekostet",
       "erklaerung": "Wegen der Lieferprobleme stand eine Linie zwei Wochen still."
      },
      {
       "frage": "Was den Artikel betrifft, ist Herr Gruber …",
       "opt": [
        "vor allem wegen der Lagerkosten zurückhaltend.",
        "von allen Vorschlägen überzeugt.",
        "der Meinung, dass er nicht zum Unternehmen passt."
       ],
       "loesung": 0,
       "stelle": "vor allem, was die Kosten für zusätzliche Lagerfläche angeht",
       "erklaerung": "Einiges überzeugt ihn, skeptisch ist er vor allem bei den Kosten für Fläche."
      },
      {
       "frage": "Wenn Frau Arslan bis zur Budgetrunde keine Zeit hat, …",
       "opt": [
        "soll sie einen Kollegen beauftragen.",
        "entscheidet Herr Gruber allein.",
        "wird das Thema später besprochen."
       ],
       "loesung": 2,
       "stelle": "dann verschieben wir es auf Januar",
       "erklaerung": "Das Thema wird dann im Januar behandelt."
      },
      {
       "frage": "Früher wollten viele Industriebetriebe …",
       "opt": [
        "Material ohne Vorrat genau zum Zeitpunkt des Bedarfs erhalten.",
        "für jedes Teil einen Vorrat von mehreren Monaten anlegen.",
        "ihre Lagerflächen an andere Firmen vermieten."
       ],
       "loesung": 0,
       "stelle": "genau dann eintreffen, wenn es in der Produktion gebraucht wird",
       "erklaerung": "Das alte Prinzip: Material kommt genau dann, wenn es gebraucht wird."
      },
      {
       "frage": "Laut der Erhebung haben die meisten befragten Unternehmen …",
       "opt": [
        "ihre Lieferanten gewechselt.",
        "mehr Vorräte bei wichtigen Teilen angelegt.",
        "ihre Produktion ins Inland verlagert."
       ],
       "loesung": 1,
       "stelle": "haben 61 Prozent ihre Sicherheitsbestände bei wichtigen Teilen erhöht",
       "erklaerung": "61 Prozent sind die Mehrheit; sie haben ihre Sicherheitsbestände erhöht."
      },
      {
       "frage": "Bei Hellwig Elektronik stand die Produktion still, weil …",
       "opt": [
        "ein Lieferant zahlungsunfähig war.",
        "die Gehäuse nicht geliefert wurden.",
        "ein einzelnes günstiges Bauteil fehlte."
       ],
       "loesung": 2,
       "stelle": "weil ein einziger Chip fehlte, der weniger als zwei Euro kostet",
       "erklaerung": "Alles war da, nur ein Chip für unter zwei Euro fehlte."
      },
      {
       "frage": "Ein Nachteil großer Vorräte in der Elektronik ist, dass …",
       "opt": [
        "Bauteile nicht mehr gebraucht werden, bevor man sie nutzt.",
        "die Lagerarbeiter besonders geschult sein müssen.",
        "Chips bei längerer Lagerung beschädigt werden."
       ],
       "loesung": 0,
       "stelle": "dass Teile veralten, bevor sie verbaut werden",
       "erklaerung": "Modelle wechseln schnell, gelagerte Chips können überflüssig werden."
      },
      {
       "frage": "Katrin Ebeling empfiehlt, zuerst …",
       "opt": [
        "alle Bestände um ein Drittel zu erhöhen.",
        "herauszufinden, welche Teile wirklich gefährdet sind.",
        "die Zahl der Artikel im Sortiment zu verringern."
       ],
       "loesung": 1,
       "stelle": "zunächst zu ermitteln, welche Teile wirklich kritisch sind",
       "erklaerung": "Erst die kritischen Teile bestimmen, dann gezielt Bestände aufbauen."
      },
      {
       "frage": "Einen zweiten Lieferanten aufzubauen, ist nach Ebeling …",
       "opt": [
        "für mittelständische Betriebe zu teuer.",
        "nur innerhalb Europas sinnvoll.",
        "aufwendig, aber auf Dauer wirksamer als Vorräte."
       ],
       "loesung": 2,
       "stelle": "schütze aber langfristig besser als jedes Lager",
       "erklaerung": "Mühsam wegen Prüfung und Tests, aber langfristig der bessere Schutz."
      },
      {
       "frage": "Das Modell von Strobel Haustechnik …",
       "opt": [
        "eignet sich weniger für kleine Firmen.",
        "senkt die Einkaufspreise um drei bis fünf Prozent.",
        "wurde von den Lieferanten vorgeschlagen."
       ],
       "loesung": 0,
       "stelle": "Für kleinere Abnehmer ist dieses Modell allerdings schwer durchzusetzen",
       "erklaerung": "Kleinen Abnehmern fehlt die Verhandlungsmacht. Die drei bis fünf Prozent sind ein Aufschlag, keine Ersparnis."
      },
      {
       "frage": "Ein Problem vieler Mittelständler bei der Planung ist, dass …",
       "opt": [
        "ihre Software zu teuer ist.",
        "das Wissen über Bestellungen bei wenigen Personen liegt.",
        "sie keine Daten über Lieferzeiten haben."
       ],
       "loesung": 1,
       "stelle": "Fällt einer von ihnen aus, weiß oft niemand mehr genau",
       "erklaerung": "Tabellen werden von Einzelnen gepflegt; fallen sie aus, fehlt das Wissen."
      },
      {
       "frage": "Ralf Hellwig will seine Vorräte …",
       "opt": [
        "abbauen, sobald sich die Märkte beruhigen.",
        "an andere Unternehmen verkaufen.",
        "weiterhin auf dem jetzigen Stand halten."
       ],
       "loesung": 2,
       "stelle": "Ralf Hellwig gehört nicht dazu",
       "erklaerung": "Er gehört nicht zu denen, die ihre Vorräte wieder abgebaut haben."
      }
     ]
    },
    {
     "id": "c1bl3s3",
     "text": {
      "sorte": "zeitung",
      "quelle": "Magazin Handel & Kunde",
      "titel": "Fünf Sterne oder keiner",
      "zeilen": [
       "E-Mail von Jonas Becker, Onlinemarketing an Ingrid Hollmann, Leiterin Kundenservice · Betreff: Bewertungen im Netz: Artikel und ein Vorschlag",
       "Liebe Frau Hollmann, Sie haben es sicher schon gesehen: Unsere Durchschnittsbewertung auf den gängigen Bewertungsportalen ist in den letzten drei Monaten von 4,4 auf 3,9 Sterne gefallen. Fast alle schlechten Bewertungen betreffen die Werkstatt in der Filiale am Südring, vor allem lange Wartezeiten bei Reparaturen. Über die Beratung im Laden oder unsere Preise beschwert sich dagegen kaum jemand.",
       "Ich habe dazu einen Artikel gefunden, den ich Ihnen gern weiterleiten möchte. Er zeigt ziemlich gut, wie stark Bewertungen inzwischen Kaufentscheidungen beeinflussen und was Unternehmen tun können, ohne gleich eine Agentur zu beauftragen. Besonders der Teil über Antworten auf Kritik hat mich zum Nachdenken gebracht, denn bisher reagieren wir auf negative Bewertungen überhaupt nicht.",
       "Mein Vorschlag wäre, dass künftig Ihr Team die Antworten schreibt, weil Sie die einzelnen Fälle kennen. Ich würde vorher gern mit Ihnen klären, ob das zeitlich überhaupt machbar ist. Ich schätze den Aufwand auf etwa zwei Stunden pro Woche, aber das können Sie sicher besser beurteilen. Falls es bei Ihnen eng wird, könnte ich die ersten Wochen auch selbst übernehmen und Ihr Team nur bei schwierigen Fällen fragen.",
       "Hätten Sie nächste Woche eine halbe Stunde Zeit, um darüber zu sprechen? Dienstag oder Mittwoch Vormittag würde bei mir gut passen. Die Werkstattleitung möchte ich erst einbeziehen, wenn wir beide uns einig sind.",
       "Viele Grüße, Jonas Becker",
       "Der Artikel im Anhang: Fünf Sterne oder keiner",
       "Bevor Patrick Neumann eine Autowerkstatt, ein Restaurant oder einen Handwerker auswählt, liest er Bewertungen im Internet. Mindestens zehn, sagt der 34-jährige Vertriebsmitarbeiter aus Gerdingen, und zwar gerade auch die schlechten. „Unter vier Sternen gehe ich eigentlich nirgendwo mehr hin.“ Neumann ist damit kein Sonderfall. Für viele Verbraucher sind Bewertungsportale zur wichtigsten Informationsquelle geworden, noch vor Empfehlungen von Freunden und Bekannten.",
       "Nach einer Umfrage des Instituts für Handelsforschung in Kemnath unter 2 000 Verbrauchern lesen 78 Prozent vor einem Kauf oder einer Buchung Bewertungen im Internet. Knapp die Hälfte gibt an, einen Anbieter schon einmal allein wegen schlechter Bewertungen gemieden zu haben. Besonders stark ist der Einfluss bei Dienstleistungen, deren Qualität man vorher kaum prüfen kann, etwa bei Werkstätten, Handwerkern oder Arztpraxen.",
       "Dabei lesen die meisten Verbraucher nicht alle Bewertungen gleich aufmerksam. Nach der Umfrage achten viele vor allem auf die neuesten und auf die schlechtesten Einträge. Bewertungen, die älter als ein Jahr sind, spielen für zwei Drittel der Befragten kaum noch eine Rolle. Für Betriebe ist das eine gute Nachricht: Wer seine Probleme behebt, kann seinen Ruf relativ schnell verbessern. Einzelne schlechte Bewertungen schrecken dagegen kaum ab, solange das Gesamtbild stimmt.",
       "Für Unternehmen bedeutet das: Ein Durchschnittswert von 3,8 statt 4,5 Sternen kann spürbar Umsatz kosten. Gerade kleine und mittlere Betriebe tun sich aber schwer mit dem Thema. Viele lesen ihre Bewertungen kaum, andere reagieren gereizt auf jede Kritik. Beides sei ein Fehler, sagt die Beraterin Miriam Haas, die Händler und Dienstleister im Umgang mit Rückmeldungen von Kunden schult.",
       "Haas rät vor allem dazu, auf negative Bewertungen öffentlich zu antworten. Dabei gehe es weniger darum, den unzufriedenen Kunden umzustimmen, als um die vielen anderen, die die Antwort später lesen. „Wer sieht, dass ein Betrieb sachlich auf Kritik eingeht und eine Lösung anbietet, verzeiht auch mal eine schlechte Erfahrung“, sagt sie. Untersuchungen zeigen, dass Anbieter, die regelmäßig antworten, im Durchschnitt besser bewertet werden als solche, die schweigen.",
       "Wie eine gute Antwort aussieht, lässt sich nach Haas in wenigen Regeln zusammenfassen. Sie sollte innerhalb von zwei bis drei Tagen erscheinen, auf den konkreten Fall eingehen und keine Textbausteine enthalten. Rechtfertigungen und Schuldzuweisungen sind tabu, selbst wenn der Kunde im Unrecht ist. Stattdessen empfiehlt sie, sich für die Rückmeldung zu bedanken, das Problem kurz anzuerkennen und einen direkten Kontakt anzubieten, über den sich die Sache klären lässt.",
       "Wer antwortet, ist ebenfalls nicht gleichgültig. In vielen Betrieben übernimmt das die Marketingabteilung, weil sie für den Auftritt im Internet zuständig ist. Haas hält das für wenig sinnvoll. Besser sei es, wenn Mitarbeiter antworten, die den Fall kennen oder zumindest nachvollziehen können, was passiert ist. Allgemeine Entschuldigungen ohne Bezug zum Problem wirkten auf Leser oft schlimmer als gar keine Antwort.",
       "Ein heikles Thema sind gefälschte Bewertungen. Manche Unternehmen kaufen positive Bewertungen bei Agenturen, andere werden Opfer von Konkurrenten, die gezielt schlechte Bewertungen schreiben. Gekaufte Bewertungen sind rechtlich riskant, da sie als irreführende Werbung gelten und Abmahnungen nach sich ziehen können. Gegen falsche negative Bewertungen kann man sich dagegen wehren, indem man das Portal auffordert, den Beitrag zu prüfen. Die Betreiber müssen solchen Hinweisen nachgehen und löschen Bewertungen, wenn der Verfasser keinen Kundenkontakt nachweisen kann.",
       "Mindestens ebenso wichtig wie die Reaktion auf Kritik ist es, zufriedene Kunden zum Schreiben zu bewegen. Denn wer verärgert ist, greift deutlich häufiger zur Tastatur als jemand, der einfach gut bedient wurde. Haas empfiehlt, Kunden nach einem gelungenen Auftrag direkt anzusprechen, etwa mit einer kurzen E-Mail oder einer Karte mit einem Code, der direkt zum Bewertungsportal führt. Belohnungen für positive Bewertungen, etwa Rabatte, seien dagegen unzulässig.",
       "Wie viel Zeit die Pflege der Bewertungen kostet, hängt von der Größe des Betriebs ab. Haas rechnet bei einem Händler mit mehreren Filialen mit etwa zwei bis drei Stunden pro Woche. Wichtig sei, die Aufgabe fest zu verteilen und nicht nebenbei zu erledigen. Sonst blieben Antworten liegen, und genau das wirke auf Leser, als sei dem Unternehmen die Meinung seiner Kunden gleichgültig. Viele Betriebe unterschätzten diesen Aufwand und gäben nach wenigen Wochen auf.",
       "Ein Beispiel dafür, wie sich Bewertungen nutzen lassen, liefert das Autohaus Dietrich in Wernau. Als sich dort die Klagen über lange Wartezeiten in der Werkstatt häuften, nahm Geschäftsführer Stefan Dietrich die Kritik zum Anlass, die Terminplanung umzustellen. Kunden erhalten jetzt eine verbindliche Uhrzeit für die Abholung und eine Nachricht, falls sich etwas verzögert. Die Durchschnittsbewertung stieg innerhalb eines Jahres von 3,6 auf 4,3 Sterne.",
       "Dietrich sieht die Portale inzwischen gelassener als früher. „Am Anfang habe ich jede schlechte Bewertung persönlich genommen“, sagt er. „Heute sehe ich das als kostenlose Kundenbefragung. Man muss nur bereit sein, auch das zu lesen, was einem nicht gefällt.“"
      ]
     },
     "aufgaben": [
      {
       "frage": "Die schlechteren Bewertungen betreffen vor allem …",
       "opt": [
        "die Beratung im Laden.",
        "die Reparaturen in einer bestimmten Filiale.",
        "die Preise des Unternehmens."
       ],
       "loesung": 1,
       "stelle": "betreffen die Werkstatt in der Filiale am Südring",
       "erklaerung": "Es geht um lange Wartezeiten in der Werkstatt am Südring; über Beratung und Preise klagt kaum jemand."
      },
      {
       "frage": "Herr Becker schlägt vor, dass …",
       "opt": [
        "der Kundenservice die Antworten auf Bewertungen übernimmt.",
        "eine Agentur die Bewertungen auswertet.",
        "die Werkstattleitung sofort informiert wird."
       ],
       "loesung": 0,
       "stelle": "dass künftig Ihr Team die Antworten schreibt",
       "erklaerung": "Das Team von Frau Hollmann soll antworten; die Werkstatt kommt erst später dazu."
      },
      {
       "frage": "Patrick Neumann …",
       "opt": [
        "liest ausschließlich negative Bewertungen.",
        "verlässt sich vor allem auf Empfehlungen von Freunden.",
        "meidet Anbieter mit eher mäßigen Bewertungen."
       ],
       "loesung": 2,
       "stelle": "Unter vier Sternen gehe ich eigentlich nirgendwo mehr hin",
       "erklaerung": "Anbieter unter vier Sternen kommen für ihn nicht infrage. Er liest gute und schlechte Bewertungen."
      },
      {
       "frage": "Laut der Umfrage haben fast fünfzig Prozent der Verbraucher …",
       "opt": [
        "wegen schlechter Bewertungen auf einen Anbieter verzichtet.",
        "selbst schon eine Bewertung geschrieben.",
        "Bewertungen von Arztpraxen gelesen."
       ],
       "loesung": 0,
       "stelle": "einen Anbieter schon einmal allein wegen schlechter Bewertungen gemieden",
       "erklaerung": "Knapp die Hälfte hat einen Anbieter wegen schlechter Bewertungen gemieden."
      },
      {
       "frage": "Viele kleinere Betriebe …",
       "opt": [
        "beauftragen Agenturen mit ihren Bewertungen.",
        "gehen ungeschickt mit Bewertungen um.",
        "haben überdurchschnittlich gute Bewertungen."
       ],
       "loesung": 1,
       "stelle": "Viele lesen ihre Bewertungen kaum, andere reagieren gereizt",
       "erklaerung": "Ignorieren oder gereizt reagieren: Beides nennt Haas einen Fehler."
      },
      {
       "frage": "Öffentliche Antworten auf Kritik richten sich nach Haas vor allem an …",
       "opt": [
        "den Kunden, der die Kritik geschrieben hat.",
        "die Betreiber des Portals.",
        "spätere Leser der Bewertungen."
       ],
       "loesung": 2,
       "stelle": "als um die vielen anderen, die die Antwort später lesen",
       "erklaerung": "Es geht weniger um den Verfasser als um alle, die die Antwort später sehen."
      },
      {
       "frage": "In einer guten Antwort sollte man …",
       "opt": [
        "dem Kunden einen direkten Kontakt anbieten.",
        "erklären, warum der Kunde im Unrecht ist.",
        "einen einheitlichen Text für alle Fälle verwenden."
       ],
       "loesung": 0,
       "stelle": "einen direkten Kontakt anzubieten",
       "erklaerung": "Bedanken, anerkennen, Kontakt anbieten; Rechtfertigungen und Textbausteine sind tabu."
      },
      {
       "frage": "Haas meint, Antworten auf Bewertungen sollten …",
       "opt": [
        "grundsätzlich von der Geschäftsführung kommen.",
        "von Mitarbeitern mit Kenntnis des Falls geschrieben werden.",
        "von der Marketingabteilung verfasst werden."
       ],
       "loesung": 1,
       "stelle": "wenn Mitarbeiter antworten, die den Fall kennen",
       "erklaerung": "Das Marketing antwortet in vielen Betrieben, Haas hält das aber für wenig sinnvoll."
      },
      {
       "frage": "Gegen eine falsche negative Bewertung kann ein Unternehmen …",
       "opt": [
        "nur mit einem Anwalt vorgehen.",
        "nichts unternehmen.",
        "beim Portal eine Überprüfung verlangen."
       ],
       "loesung": 2,
       "stelle": "indem man das Portal auffordert, den Beitrag zu prüfen",
       "erklaerung": "Das Portal muss den Hinweis prüfen und löscht im Zweifel die Bewertung."
      },
      {
       "frage": "Um mehr positive Bewertungen zu bekommen, sollte man …",
       "opt": [
        "zufriedene Kunden gezielt um eine Bewertung bitten.",
        "Kunden einen Rabatt für eine gute Bewertung geben.",
        "Bewertungen bei einer Agentur kaufen."
       ],
       "loesung": 0,
       "stelle": "Kunden nach einem gelungenen Auftrag direkt anzusprechen",
       "erklaerung": "Direkt ansprechen ist erlaubt; Rabatte und gekaufte Bewertungen sind unzulässig bzw. riskant."
      },
      {
       "frage": "Das Autohaus Dietrich reagierte auf die Kritik, indem es …",
       "opt": [
        "mehr Mechaniker einstellte.",
        "die Vergabe der Termine veränderte.",
        "die Preise in der Werkstatt senkte."
       ],
       "loesung": 1,
       "stelle": "die Terminplanung umzustellen",
       "erklaerung": "Verbindliche Abholzeiten und Nachrichten bei Verzögerung: Die Terminplanung wurde umgestellt."
      },
      {
       "frage": "Heute betrachtet Stefan Dietrich Bewertungen als …",
       "opt": [
        "persönlichen Angriff.",
        "Aufgabe der Marketingabteilung.",
        "nützliche Rückmeldung der Kunden."
       ],
       "loesung": 2,
       "stelle": "Heute sehe ich das als kostenlose Kundenbefragung",
       "erklaerung": "Früher nahm er Kritik persönlich, heute sieht er darin eine kostenlose Befragung."
      }
     ]
    }
   ]
  },
  {
   "nr": 4,
   "art": "textwahl",
   "name": "Sprachbausteine",
   "kurz": "Ein Rundschreiben, 22 Lücken, je vier Möglichkeiten",
   "was": "Ein innerbetriebliches Rundschreiben mit 22 Lücken. Für jede Lücke vier Möglichkeiten, vor allem Wortschatz, dazu Grammatik.",
   "tipp": "Feste Verbindungen erkennen: „in Kraft treten\", „zur Verfügung stellen\", „Rücksprache halten\". Und den Kasus nach der Präposition prüfen.",
   "zeichen": "🧩",
   "farbe": "lila",
   "punkte": 22,
   "runden": [
    {
     "id": "c1bsbs1",
     "text": {
      "sorte": "brief",
      "quelle": "Rundschreiben der Geschäftsführung an alle Mitarbeiter der Hoffmann & Rieger Spedition GmbH",
      "titel": "Umzug in das neue Bürogebäude",
      "zeilen": [
       "Liebes Team, wie Sie wissen, ziehen die Verwaltung und der Vertrieb im Frühjahr in das neue Bürogebäude an der Hafenstraße. Nach mehreren Verzögerungen __(1)__ die Bauarbeiten nun planmäßig voran, sodass wir den Umzug für das Wochenende vom 13. bis 15. März __(2)__ Auge gefasst haben. Mit diesem Schreiben möchten wir Sie über die wichtigsten Schritte __(3)__ Kenntnis setzen.",
       "Jede Abteilung erhält in den nächsten Tagen Umzugskartons, die bitte bis Donnerstag, 12. März, gepackt und mit Ihrem Namen sowie der neuen Raumnummer __(4)__ werden. Akten, die nicht mehr benötigt werden, sollten Sie schon vorher __(5)__ Archiv geben oder datenschutzgerecht vernichten lassen. Für vertrauliche Unterlagen stehen ab dem 2. März verschließbare Behälter __(6)__ Verfügung.",
       "Am Freitag, 13. März, bleiben die Büros ab 12 Uhr geschlossen. Bitte richten Sie eine Abwesenheitsnotiz ein und leiten Sie Ihr Telefon auf die Zentrale __(7)__, damit keine Kundenanfragen verloren gehen. Die Kollegen aus der IT werden am Wochenende sämtliche Rechner __(8)__ und am neuen Standort wieder anschließen. Ab Montag, 16. März, sollten alle Arbeitsplätze voll __(9)__ sein.",
       "Feste Arbeitsplätze wird es auch im neuen Gebäude geben, __(10)__ sie werden in Teamzonen angeordnet. Daneben stehen Besprechungsräume und ruhige Einzelbüros bereit, die __(11)__ das Buchungssystem reserviert werden können. Eine kurze Einführung in das System __(12)__ in der Woche vor dem Umzug in jeder Abteilung statt.",
       "Uns ist klar, dass ein Umzug für alle Beteiligten mit zusätzlicher Arbeit __(13)__ ist. Wir haben uns deshalb dazu __(14)__, die Woche nach dem Umzug von internen Terminen weitgehend freizuhalten. Sollten am neuen Arbeitsplatz Mängel __(15)__, wenden Sie sich bitte an Frau Szymańska aus dem Gebäudemanagement, die __(16)__ diese Fragen zuständig ist.",
       "Wir bitten Sie, auch am neuen Standort __(17)__ Ordnung in den gemeinsam genutzten Bereichen zu achten, damit wir uns dort von Anfang an wohl __(18)__. Für Ihre Geduld in den vergangenen Monaten danken wir Ihnen herzlich. Wir __(19)__ uns darauf, die neuen Räume im April mit einem kleinen Fest gemeinsam __(20)__ Betrieb zu nehmen. Fragen, __(21)__ in diesem Schreiben offen bleiben, richten Sie bitte an die Personalabteilung, die Ihnen gern __(22)__ Seite steht.",
       "Mit freundlichen Grüßen, Karin Hoffmann und Uwe Rieger, Geschäftsführung"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "schreiten",
        "treten",
        "stehen",
        "fallen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Die Arbeiten schreiten voran“ = sie kommen gut vorwärts."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "im",
        "ins",
        "vor",
        "unter"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Wendung: „etwas ins Auge fassen“ = etwas planen."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "zur",
        "mit",
        "in",
        "auf"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Verbindung: „jemanden in Kenntnis setzen“ = informieren."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "beschrieben",
        "unterschrieben",
        "verschrieben",
        "beschriftet"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Kartons werden mit Namen „beschriftet“; „beschreiben“ heißt etwas schildern."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "im",
        "ins",
        "zum",
        "beim"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Richtung (Akkusativ): „etwas ins Archiv geben“."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "zur",
        "zum",
        "in",
        "auf"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Verbindung: „zur Verfügung stehen“."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "an",
        "zu",
        "aus",
        "um"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„umleiten“ = auf ein anderes Ziel lenken; das Präfix steht am Satzende."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "ausbauen",
        "umbauen",
        "abbauen",
        "aufbauen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Vor dem Umzug werden die Rechner „abgebaut“, danach wieder angeschlossen."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "funktional",
        "fähig",
        "funktionsfähig",
        "tätig"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„voll funktionsfähig“ = alles läuft wieder."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "sondern",
        "denn",
        "sodass",
        "aber"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Gegensatz nach positivem Satz: „aber“; „sondern“ nur nach einer Verneinung."
      },
      {
       "frage": "Was passt in Lücke 11?",
       "luecke": 11,
       "opt": [
        "über",
        "an",
        "bei",
        "zu"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„über das Buchungssystem“ = mithilfe des Systems."
      },
      {
       "frage": "Was passt in Lücke 12?",
       "luecke": 12,
       "opt": [
        "gibt",
        "findet",
        "läuft",
        "hält"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„stattfinden“: Das Präfix „statt“ steht am Satzende."
      },
      {
       "frage": "Was passt in Lücke 13?",
       "luecke": 13,
       "opt": [
        "gebunden",
        "verknüpft",
        "beladen",
        "verbunden"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Wendung: „mit Arbeit verbunden sein“."
      },
      {
       "frage": "Was passt in Lücke 14?",
       "luecke": 14,
       "opt": [
        "beschlossen",
        "entschlossen",
        "bestimmt",
        "gefasst"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„sich zu etwas entschließen“ ist reflexiv; „beschließen“ nicht."
      },
      {
       "frage": "Was passt in Lücke 15?",
       "luecke": 15,
       "opt": [
        "auftreten",
        "aufstellen",
        "auftragen",
        "aufheben"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Mängel treten auf“ = sie zeigen sich."
      },
      {
       "frage": "Was passt in Lücke 16?",
       "luecke": 16,
       "opt": [
        "um",
        "über",
        "für",
        "von"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„zuständig für etwas sein“."
      },
      {
       "frage": "Was passt in Lücke 17?",
       "luecke": 17,
       "opt": [
        "an",
        "auf",
        "um",
        "für"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„auf etwas achten“."
      },
      {
       "frage": "Was passt in Lücke 18?",
       "luecke": 18,
       "opt": [
        "finden",
        "spüren",
        "fühlen",
        "befinden"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„sich wohlfühlen“ ist die feste Verbindung."
      },
      {
       "frage": "Was passt in Lücke 19?",
       "luecke": 19,
       "opt": [
        "erfreuen",
        "freut",
        "gefreut",
        "freuen"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„Wir freuen uns auf …“: Verbform passend zu „wir“."
      },
      {
       "frage": "Was passt in Lücke 20?",
       "luecke": 20,
       "opt": [
        "in",
        "im",
        "zum",
        "außer"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„etwas in Betrieb nehmen“ = zum ersten Mal benutzen."
      },
      {
       "frage": "Was passt in Lücke 21?",
       "luecke": 21,
       "opt": [
        "die",
        "denen",
        "deren",
        "welcher"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Relativpronomen im Nominativ Plural: „Fragen, die offen bleiben“."
      },
      {
       "frage": "Was passt in Lücke 22?",
       "luecke": 22,
       "opt": [
        "an",
        "zur",
        "auf",
        "neben"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Wendung: „jemandem zur Seite stehen“ = helfen."
      }
     ]
    },
    {
     "id": "c1bsbs2",
     "text": {
      "sorte": "brief",
      "quelle": "Mitteilung der Geschäftsführung im Intranet der Pohl Baustoffhandel GmbH",
      "titel": "Einführung der neuen Warenwirtschaft",
      "zeilen": [
       "Liebes Team, nach langer Vorbereitung ist es so weit: Zum 1. Februar __(1)__ wir unsere bisherige Warenwirtschaft durch ein neues System ab. Das alte Programm ist seit über fünfzehn Jahren im Einsatz und __(2)__ den heutigen Anforderungen schon lange nicht mehr gerecht. Vor allem die Verbindung zum Onlineshop und zur Buchhaltung __(3)__ immer wieder zu Fehlern geführt.",
       "Die Umstellung erfolgt __(4)__ mehreren Schritten. Ab dem 8. Januar werden alle Kunden- und Artikeldaten in das neue System __(5)__. In dieser Zeit kann es __(6)__ kurzen Unterbrechungen kommen, für die wir Sie schon jetzt um Verständnis bitten. Bitte nehmen Sie in diesen Tagen keine größeren Änderungen an Stammdaten vor, __(7)__ es nicht unbedingt notwendig ist.",
       "Alle Mitarbeiter, die mit der Software arbeiten, nehmen vorher an einer Schulung __(8)__. Die Termine werden von den Abteilungsleitern __(9)__ und Ihnen bis Ende Dezember mitgeteilt. Wer an dem vorgesehenen Termin verhindert ist, sollte sich bitte __(10)__ bei Frau Lindemann melden.",
       "In den ersten zwei Wochen nach dem Start steht Ihnen ein Mitarbeiter des Softwareanbieters vor Ort zur __(11)__. Außerdem haben wir in jeder Abteilung eine Ansprechperson __(12)__, die bei Fragen weiterhelfen kann. Diese Kollegen wurden bereits im Herbst geschult und kennen das System __(13)__ als die meisten von uns.",
       "Uns ist bewusst, dass die Umstellung in der Anfangszeit einen gewissen __(14)__ bedeutet. Abläufe, die bisher reibungslos funktioniert haben, werden anfangs vielleicht länger dauern. Wir bitten Sie deshalb, Liefertermine in den ersten Wochen __(15)__ großzügiger zu planen. Sollten Ihnen Fehler im System __(16)__, melden Sie diese bitte über das Formular im Intranet.",
       "Wir sind überzeugt, dass sich der Aufwand lohnt. Das neue System wird uns viele Arbeitsschritte __(17)__, etwa bei der Erstellung von Angeboten oder der Kontrolle der Bestände. Zudem können unsere Außendienstmitarbeiter künftig auch unterwegs auf aktuelle Lagerbestände __(18)__. Damit __(19)__ wir unseren Kunden schnellere und verlässlichere Auskünfte geben.",
       "Für Ihre Unterstützung __(20)__ wir uns schon jetzt herzlich. Bei Fragen wenden Sie sich bitte an die Projektleitung, die Sie __(21)__ der Durchwahl 214 erreichen. Über den weiteren Verlauf halten wir Sie auf dem __(22)__.",
       "Ihre Geschäftsführung"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "setzen",
        "lösen",
        "stellen",
        "legen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„etwas durch etwas ablösen“ = ersetzen; „ab“ steht am Satzende."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "ist",
        "hat",
        "wird",
        "macht"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Verbindung: „einer Sache gerecht werden“."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "ist",
        "wurde",
        "wird",
        "hat"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Perfekt von „führen“ mit „haben“: „hat zu Fehlern geführt“."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "in",
        "mit",
        "nach",
        "auf"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„in mehreren Schritten“ erfolgen."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "übersetzt",
        "überwiesen",
        "übertragen",
        "übergeben"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Daten werden in ein System „übertragen“."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "in",
        "zu",
        "an",
        "bei"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„es kommt zu etwas“ = etwas geschieht."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "sofern",
        "obwohl",
        "damit",
        "indem"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Bedingung: „sofern“ = wenn, unter der Bedingung, dass."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "mit",
        "an",
        "bei",
        "teil"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„an etwas teilnehmen“; „teil“ steht am Satzende."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "festgestellt",
        "festgehalten",
        "festgenommen",
        "festgelegt"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Termine werden „festgelegt“ = bestimmt."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "rechtzeitig",
        "gleichzeitig",
        "zeitweise",
        "vorzeitig"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„rechtzeitig“ = früh genug, bevor es zu spät ist."
      },
      {
       "frage": "Was passt in Lücke 11?",
       "luecke": 11,
       "opt": [
        "Hilfe",
        "Verfügung",
        "Hand",
        "Stelle"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Verbindung: „zur Verfügung stehen“."
      },
      {
       "frage": "Was passt in Lücke 12?",
       "luecke": 12,
       "opt": [
        "bekannt",
        "verkannt",
        "benannt",
        "benommen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„jemanden benennen“ = für eine Aufgabe bestimmen."
      },
      {
       "frage": "Was passt in Lücke 13?",
       "luecke": 13,
       "opt": [
        "besser",
        "gut",
        "am besten",
        "gute"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Komparativ vor „als“: „besser als“."
      },
      {
       "frage": "Was passt in Lücke 14?",
       "luecke": 14,
       "opt": [
        "Überstunde",
        "Zusatz",
        "Mehraufwand",
        "Aufschlag"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„einen gewissen Mehraufwand bedeuten“ = zusätzliche Arbeit."
      },
      {
       "frage": "Was passt in Lücke 15?",
       "luecke": 15,
       "opt": [
        "einige",
        "etwas",
        "manche",
        "viel"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„etwas“ vor einem Komparativ = ein wenig: „etwas großzügiger“."
      },
      {
       "frage": "Was passt in Lücke 16?",
       "luecke": 16,
       "opt": [
        "einfallen",
        "ausfallen",
        "zufallen",
        "auffallen"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„Fehler fallen Ihnen auf“ = Sie bemerken sie."
      },
      {
       "frage": "Was passt in Lücke 17?",
       "luecke": 17,
       "opt": [
        "annehmen",
        "aufnehmen",
        "abnehmen",
        "vornehmen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„jemandem Arbeit abnehmen“ = sie für ihn erledigen."
      },
      {
       "frage": "Was passt in Lücke 18?",
       "luecke": 18,
       "opt": [
        "eingreifen",
        "angreifen",
        "übergreifen",
        "zugreifen"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„auf Daten zugreifen“."
      },
      {
       "frage": "Was passt in Lücke 19?",
       "luecke": 19,
       "opt": [
        "können",
        "kann",
        "könnt",
        "konnten"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Modalverb im Präsens passend zu „wir“."
      },
      {
       "frage": "Was passt in Lücke 20?",
       "luecke": 20,
       "opt": [
        "danken",
        "bedanken",
        "verdanken",
        "danke"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Reflexiv: „sich für etwas bedanken“; „danken“ ist nicht reflexiv."
      },
      {
       "frage": "Was passt in Lücke 21?",
       "luecke": 21,
       "opt": [
        "mit",
        "unter",
        "bei",
        "über"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„unter einer Nummer erreichbar sein“."
      },
      {
       "frage": "Was passt in Lücke 22?",
       "luecke": 22,
       "opt": [
        "Laufende",
        "Lauf",
        "Laufenden",
        "Gelaufenen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Wendung: „jemanden auf dem Laufenden halten“."
      }
     ]
    },
    {
     "id": "c1bsbs3",
     "text": {
      "sorte": "brief",
      "quelle": "Rundschreiben der Finanzabteilung an alle Mitarbeiter der Brandt Medizintechnik AG",
      "titel": "Neue Reisekostenrichtlinie ab 1. Januar",
      "zeilen": [
       "Liebes Team, zum 1. Januar __(1)__ eine überarbeitete Reisekostenrichtlinie in Kraft. Die bisherige Fassung stammte aus dem Jahr 2017 und war in vielen Punkten nicht mehr __(2)__ dem neuesten Stand. Mit diesem Schreiben möchten wir Sie über die wichtigsten Änderungen __(3)__.",
       "Dienstreisen müssen künftig grundsätzlich vorab über das Reiseportal __(4)__ werden. Die Genehmigung erteilt wie bisher die direkte Führungskraft, bei Reisen ins Ausland zusätzlich die Abteilungsleitung. Reisen, __(5)__ ohne vorherige Genehmigung angetreten werden, können nicht erstattet werden.",
       "Bei Strecken unter 400 Kilometern ist der Bahn grundsätzlich der __(6)__ zu geben. Fahrten in der ersten Klasse sind ab einer Fahrzeit von drei Stunden __(7)__. Wer aus wichtigen Gründen __(8)__ das eigene Auto zurückgreift, erhält wie bisher 30 Cent pro Kilometer.",
       "Für Übernachtungen gelten neue Höchstbeträge, die sich __(9)__ der jeweiligen Stadt richten. In den meisten Städten liegt die Grenze bei 120 Euro pro Nacht, in München, Hamburg und Frankfurt bei 160 Euro. Höhere Kosten werden nur übernommen, __(10)__ nachweislich kein günstigeres Hotel verfügbar war.",
       "Die Abrechnung erfolgt ab sofort ausschließlich digital. Belege müssen spätestens vier Wochen nach Ende der Dienstreise über die App __(11)__ werden. Papierbelege __(12)__ Sie bitte noch sechs Monate auf, da sie bei einer Prüfung durch das Finanzamt angefordert werden können. Verspätet eingereichte Abrechnungen können nicht mehr __(13)__ werden.",
       "Neu ist außerdem, dass die Bewirtung von Kunden nur noch bis zu einem Betrag von 70 Euro pro Person __(14)__ wird. Bei __(15)__ Beträgen ist vorher die Zustimmung der Geschäftsführung einzuholen. Auf der Rechnung müssen der Anlass der Bewirtung __(16)__ die Namen aller Teilnehmer vermerkt sein.",
       "Wir sind __(17)__ bewusst, dass einige Regeln strenger sind als bisher. Die Änderungen sind jedoch notwendig, um die Kosten im Blick zu __(18)__ und die Vorgaben des Finanzamts einzuhalten. Die vollständige Richtlinie finden Sie ab dem 15. Dezember im Intranet. Am 18. Dezember bieten wir außerdem eine Sprechstunde per Video an, in __(19)__ wir Ihre Fragen beantworten. Bitte melden Sie sich dafür bis zum 16. Dezember __(20)__ Frau Petersen an.",
       "Für Rückfragen stehen wir Ihnen gern zur __(21)__. Wir danken Ihnen für Ihr Verständnis und Ihre Mithilfe bei der __(22)__.",
       "Ihre Finanzabteilung"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "kommt",
        "geht",
        "tritt",
        "setzt"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Verbindung: „in Kraft treten“ = gültig werden."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "an",
        "im",
        "zum",
        "auf"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Wendung: „auf dem neuesten Stand sein“."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "informieren",
        "mitteilen",
        "berichten",
        "erzählen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„jemanden über etwas informieren“; „mitteilen“ braucht ein Dativobjekt und kein „über“."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "bestellt",
        "beantragt",
        "verlangt",
        "gefordert"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Eine Dienstreise wird „beantragt“, dann genehmigt."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "denen",
        "deren",
        "der",
        "die"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Relativpronomen im Nominativ Plural, Bezugswort „Reisen“."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Vorteil",
        "Vorsprung",
        "Vorzug",
        "Vorwand"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Verbindung: „einer Sache den Vorzug geben“ = sie bevorzugen."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "zuständig",
        "zulässig",
        "zutreffend",
        "zuverlässig"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„zulässig“ = erlaubt."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "auf",
        "an",
        "zu",
        "nach"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„auf etwas zurückgreifen“."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "nach",
        "an",
        "von",
        "mit"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sich nach etwas richten“ = davon abhängen."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "als",
        "wenn",
        "ob",
        "damit"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Bedingung in der Gegenwart: „wenn“; „als“ nur für einmalige Vergangenheit."
      },
      {
       "frage": "Was passt in Lücke 11?",
       "luecke": 11,
       "opt": [
        "eingeholt",
        "eingelöst",
        "eingereicht",
        "eingenommen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Belege werden „eingereicht“ = abgegeben."
      },
      {
       "frage": "Was passt in Lücke 12?",
       "luecke": 12,
       "opt": [
        "behalten",
        "bewachen",
        "bestehen",
        "bewahren"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„etwas aufbewahren“; „auf“ steht am Satzende."
      },
      {
       "frage": "Was passt in Lücke 13?",
       "luecke": 13,
       "opt": [
        "beabsichtigt",
        "berücksichtigt",
        "berichtigt",
        "beaufsichtigt"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„berücksichtigen“ = beachten, einbeziehen."
      },
      {
       "frage": "Was passt in Lücke 14?",
       "luecke": 14,
       "opt": [
        "erstellt",
        "erteilt",
        "erstanden",
        "erstattet"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Kosten werden „erstattet“ = zurückgezahlt."
      },
      {
       "frage": "Was passt in Lücke 15?",
       "luecke": 15,
       "opt": [
        "höhere",
        "höherer",
        "höheren",
        "höheres"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Adjektiv nach „bei“ (Dativ Plural) ohne Artikel: „bei höheren Beträgen“."
      },
      {
       "frage": "Was passt in Lücke 16?",
       "luecke": 16,
       "opt": [
        "sowie",
        "sowohl",
        "weder",
        "entweder"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sowie“ = und; „sowohl“ bräuchte „als auch“."
      },
      {
       "frage": "Was passt in Lücke 17?",
       "luecke": 17,
       "opt": [
        "sich",
        "wir",
        "unser",
        "uns"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„sich einer Sache bewusst sein“, hier mit „wir“: „Wir sind uns bewusst“."
      },
      {
       "frage": "Was passt in Lücke 18?",
       "luecke": 18,
       "opt": [
        "behalten",
        "bekommen",
        "bringen",
        "stellen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Wendung: „etwas im Blick behalten“."
      },
      {
       "frage": "Was passt in Lücke 19?",
       "luecke": 19,
       "opt": [
        "die",
        "der",
        "dem",
        "denen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„in der“: Relativpronomen Dativ Singular, Bezugswort „Sprechstunde“."
      },
      {
       "frage": "Was passt in Lücke 20?",
       "luecke": 20,
       "opt": [
        "an",
        "zu",
        "bei",
        "mit"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„sich bei jemandem anmelden“."
      },
      {
       "frage": "Was passt in Lücke 21?",
       "luecke": 21,
       "opt": [
        "Bereitschaft",
        "Vorsorge",
        "Verfügung",
        "Auswahl"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Verbindung: „zur Verfügung stehen“."
      },
      {
       "frage": "Was passt in Lücke 22?",
       "luecke": 22,
       "opt": [
        "Umsatz",
        "Umsicht",
        "Umgebung",
        "Umsetzung"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„Umsetzung“ = Anwendung der Regeln in der Praxis."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tc1bll1",
   "titel": "Prüfungslauf 1",
   "minuten": 90,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Wirtschaftszeitung Mittelstand aktuell",
      "titel": "Das Geschäft mit der zweiten Chance",
      "zeilen": [
       "Jahrelang war das Ersatzteillager der Firma Lindner Hausgeräte in Steinbergen ein ungeliebter Kostenfaktor. Auf 2 400 Quadratmetern lagerten Pumpen, Heizstäbe und Türdichtungen für Waschmaschinen, die zum Teil seit zwanzig Jahren nicht mehr gebaut werden. __(1)__ Heute gehört das Lager zu den Bereichen, die im Unternehmen am schnellsten wachsen.",
       "Der Umschwung begann vor vier Jahren mit einer einfachen Beobachtung. Im Kundendienst häuften sich Anrufe von Kunden, die ihre Geräte selbst reparieren wollten und dafür nach Anleitungen und Teilen fragten. __(2)__ Lindner stellte daraufhin Reparaturvideos ins Internet und richtete einen Onlineshop ein, in dem Privatkunden Ersatzteile direkt bestellen können. Im ersten Jahr wurden darüber knapp 18 000 Bestellungen abgewickelt, im vergangenen Jahr waren es bereits 71 000.",
       "Auch wirtschaftlich rechnet sich das Geschäft. Der Umsatz mit Ersatzteilen und Reparaturen hat sich in vier Jahren auf 9,3 Millionen Euro mehr als verdreifacht und macht inzwischen rund elf Prozent des Gesamtumsatzes aus. __(3)__ „Bei einem neuen Gerät kämpfen wir mit Billiganbietern um jeden Euro, bei einem passenden Ersatzteil fragt kaum jemand nach dem Preis“, sagt Vertriebsleiter Marco Steffens. Er rechnet damit, dass der Anteil in fünf Jahren bei einem Fünftel liegen könnte.",
       "Den Ausschlag für den weiteren Ausbau gaben schließlich neue Vorschriften. Hersteller müssen Ersatzteile für viele Haushaltsgeräte inzwischen über mehrere Jahre nach dem Verkaufsende bereithalten. __(4)__ Lindner verspricht seinen Kunden sogar fünfzehn Jahre und wirbt damit offensiv in Prospekten und auf den Verpackungen. Andere Hersteller haben nach Angaben ihres Branchenverbands Mühe, diese Fristen überhaupt einzuhalten, weil sie ihre Ersatzteile über Jahrzehnte nicht systematisch gelagert haben.",
       "Für die Mitarbeiter hat die Neuausrichtung spürbare Folgen. Im Lager und im angeschlossenen Reparaturservice arbeiten heute 46 Menschen statt 19, darunter mehrere ehemalige Monteure, die Kunden am Telefon durch eine Reparatur lotsen. __(5)__ Gleichzeitig musste die Konstruktionsabteilung umdenken. Neue Geräte werden so entworfen, dass sich Verschleißteile ohne Spezialwerkzeug austauschen lassen, statt sie zu verkleben oder fest zu verschweißen.",
       "Nicht alle in der Branche sind von dem Modell überzeugt. Wettbewerber verweisen darauf, dass jedes reparierte Gerät ein nicht verkauftes neues bedeutet. __(6)__ Steffens hält dagegen: Kunden, die mit einer Reparatur gute Erfahrungen gemacht hätten, kauften beim nächsten Mal mit großer Wahrscheinlichkeit wieder bei Lindner. Belegen lässt sich das bislang allerdings nur mit Umfragen, nicht mit Verkaufszahlen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Satz gehört in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Wer mit Schraubenzieher und Anleitung allein nicht weiterkommt, kann sich dort per Videoanruf helfen lassen.",
        "Mehr als einmal hatte der Vorstand überlegt, den Bestand zu verkaufen und die Abteilung aufzulösen.",
        "Seitdem bietet Lindner keine neuen Waschmaschinen mehr an.",
        "Die Gewinnspanne liegt dabei deutlich höher als beim Verkauf neuer Maschinen.",
        "Langfristig, so ihre Befürchtung, schade sich ein Hersteller damit selbst.",
        "Für Waschmaschinen und Geschirrspüler gilt eine Frist von bis zu zehn Jahren.",
        "Für diesen Service zahlen die Kunden eine monatliche Gebühr.",
        "Bis dahin hatte man solche Anfragen grundsätzlich an Fachbetriebe weitergeleitet."
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Der Satz setzt den „ungeliebten Kostenfaktor“ fort; „Heute“ stellt die Wende dagegen."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Wer mit Schraubenzieher und Anleitung allein nicht weiterkommt, kann sich dort per Videoanruf helfen lassen.",
        "Mehr als einmal hatte der Vorstand überlegt, den Bestand zu verkaufen und die Abteilung aufzulösen.",
        "Seitdem bietet Lindner keine neuen Waschmaschinen mehr an.",
        "Die Gewinnspanne liegt dabei deutlich höher als beim Verkauf neuer Maschinen.",
        "Langfristig, so ihre Befürchtung, schade sich ein Hersteller damit selbst.",
        "Für Waschmaschinen und Geschirrspüler gilt eine Frist von bis zu zehn Jahren.",
        "Für diesen Service zahlen die Kunden eine monatliche Gebühr.",
        "Bis dahin hatte man solche Anfragen grundsätzlich an Fachbetriebe weitergeleitet."
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "„solche Anfragen“ greift die Anrufe der Kunden auf; „daraufhin“ zeigt die neue Reaktion."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Wer mit Schraubenzieher und Anleitung allein nicht weiterkommt, kann sich dort per Videoanruf helfen lassen.",
        "Mehr als einmal hatte der Vorstand überlegt, den Bestand zu verkaufen und die Abteilung aufzulösen.",
        "Seitdem bietet Lindner keine neuen Waschmaschinen mehr an.",
        "Die Gewinnspanne liegt dabei deutlich höher als beim Verkauf neuer Maschinen.",
        "Langfristig, so ihre Befürchtung, schade sich ein Hersteller damit selbst.",
        "Für Waschmaschinen und Geschirrspüler gilt eine Frist von bis zu zehn Jahren.",
        "Für diesen Service zahlen die Kunden eine monatliche Gebühr.",
        "Bis dahin hatte man solche Anfragen grundsätzlich an Fachbetriebe weitergeleitet."
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Der Satz erklärt, warum sich das Geschäft rechnet; das Zitat begründet die höhere Spanne mit dem Preisdruck bei Neugeräten."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Wer mit Schraubenzieher und Anleitung allein nicht weiterkommt, kann sich dort per Videoanruf helfen lassen.",
        "Mehr als einmal hatte der Vorstand überlegt, den Bestand zu verkaufen und die Abteilung aufzulösen.",
        "Seitdem bietet Lindner keine neuen Waschmaschinen mehr an.",
        "Die Gewinnspanne liegt dabei deutlich höher als beim Verkauf neuer Maschinen.",
        "Langfristig, so ihre Befürchtung, schade sich ein Hersteller damit selbst.",
        "Für Waschmaschinen und Geschirrspüler gilt eine Frist von bis zu zehn Jahren.",
        "Für diesen Service zahlen die Kunden eine monatliche Gebühr.",
        "Bis dahin hatte man solche Anfragen grundsätzlich an Fachbetriebe weitergeleitet."
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Die Frist konkretisiert „über mehrere Jahre“; „sogar fünfzehn Jahre“ geht darüber hinaus."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Wer mit Schraubenzieher und Anleitung allein nicht weiterkommt, kann sich dort per Videoanruf helfen lassen.",
        "Mehr als einmal hatte der Vorstand überlegt, den Bestand zu verkaufen und die Abteilung aufzulösen.",
        "Seitdem bietet Lindner keine neuen Waschmaschinen mehr an.",
        "Die Gewinnspanne liegt dabei deutlich höher als beim Verkauf neuer Maschinen.",
        "Langfristig, so ihre Befürchtung, schade sich ein Hersteller damit selbst.",
        "Für Waschmaschinen und Geschirrspüler gilt eine Frist von bis zu zehn Jahren.",
        "Für diesen Service zahlen die Kunden eine monatliche Gebühr.",
        "Bis dahin hatte man solche Anfragen grundsätzlich an Fachbetriebe weitergeleitet."
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„dort“ bezieht sich auf den Reparaturservice mit den ehemaligen Monteuren am Telefon."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Wer mit Schraubenzieher und Anleitung allein nicht weiterkommt, kann sich dort per Videoanruf helfen lassen.",
        "Mehr als einmal hatte der Vorstand überlegt, den Bestand zu verkaufen und die Abteilung aufzulösen.",
        "Seitdem bietet Lindner keine neuen Waschmaschinen mehr an.",
        "Die Gewinnspanne liegt dabei deutlich höher als beim Verkauf neuer Maschinen.",
        "Langfristig, so ihre Befürchtung, schade sich ein Hersteller damit selbst.",
        "Für Waschmaschinen und Geschirrspüler gilt eine Frist von bis zu zehn Jahren.",
        "Für diesen Service zahlen die Kunden eine monatliche Gebühr.",
        "Bis dahin hatte man solche Anfragen grundsätzlich an Fachbetriebe weitergeleitet."
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„ihre“ meint die Wettbewerber; „Steffens hält dagegen“ antwortet auf diese Befürchtung."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "seite",
      "quelle": "Forum „Vertrieb & Messe“",
      "titel": "Lohnt sich ein eigener Messestand noch?",
      "zeilen": [
       "Beitrag A · Jörg Albers, Vertriebsleiter bei einem Hersteller von Industrieventilen: Wir waren dieses Jahr zum ersten Mal seit zwanzig Jahren nicht auf unserer wichtigsten Fachmesse. Rechnet man Standmiete, Aufbau, Hotel und Arbeitszeit zusammen, kam uns jeder Auftritt auf rund 180 000 Euro. Am Ende konnten wir kaum einen Auftrag direkt auf die Messe zurückführen.",
       "Das Geld stecken wir jetzt in Besuche bei unseren zwanzig wichtigsten Kunden, mit einem Techniker im Gepäck. Die Gespräche sind intensiver, und wir haben im ersten Halbjahr zwei große Aufträge daraus gewonnen.",
       "Ganz verabschiedet haben wir uns von Messen allerdings nicht. Auf zwei kleineren regionalen Fachmessen sind wir weiterhin mit einem Gemeinschaftsstand vertreten, den wir uns mit drei anderen Firmen teilen. Das kostet einen Bruchteil und reicht, um in der Branche sichtbar zu bleiben.",
       "Wir beobachten die Entwicklung natürlich weiter. Sollten die Neukunden ausbleiben, kehren wir vielleicht zurück, aber im Moment sieht es nicht danach aus.",
       "Beitrag B · Svenja Ohlsen, Marketingleiterin bei einem Anbieter von Laborgeräten: Ich halte es für einen Fehler, Messen nur nach direkten Aufträgen zu bewerten. Auf einer Messe lernt man Leute kennen, die man sonst nie getroffen hätte, und viele davon kaufen erst zwei oder drei Jahre später.",
       "Wir erfassen deshalb jeden Kontakt am Stand und verfolgen im Kundensystem, was daraus wird. Nach unseren Zahlen gehen etwa vierzig Prozent unserer Neukunden auf einen Messekontakt zurück, auch wenn der erste Auftrag oft erst viel später kam.",
       "Ohne diese Auswertung hätten wir die großen Messen vermutlich längst gestrichen. Mit ihr ist klar, dass sich der Aufwand für uns lohnt. Ich kann jedem nur empfehlen, sich die Mühe zu machen, auch wenn es anfangs lästig ist, jede Visitenkarte einzutragen.",
       "Bei uns ist die Messe deshalb fest im Budget eingeplant, auch in schwierigen Jahren.",
       "Beitrag C · Uwe Hartung, Inhaber einer kleinen Messebaufirma: Aus Sicht eines Messebauers: Die Firmen planen heute kleiner und kurzfristiger. Wo früher zweistöckige Stände mit eigener Bar standen, sehen wir heute oft zwanzig Quadratmeter mit zwei Stehtischen. Das muss kein Nachteil sein.",
       "Was ich allerdings oft erlebe: Man spart am Stand und schickt dann Mitarbeiter hin, die keine Lust haben und den ganzen Tag aufs Handy schauen. Ein kleiner Stand mit gut vorbereiteten Leuten bringt mehr als ein großer mit gelangweilten.",
       "Ich rate meinen Kunden deshalb, das Standpersonal vorher zu schulen: Wie spreche ich Besucher an, ohne aufdringlich zu sein? Wie erkenne ich, ob jemand wirklich Interesse hat oder nur Kugelschreiber sammelt? Das klingt selbstverständlich, wird aber in den meisten Firmen nie geübt.",
       "Übrigens sehe ich auch, dass viele Aussteller ihre Stände heute mehrfach verwenden. Das spart Kosten und schont die Umwelt.",
       "Beitrag D · Leyla Demir, Außendienst für Verpackungsmaschinen: Ich stehe jedes Jahr auf drei Messen und finde, sie gehören zum Besten, was der Vertrieb hat. Wo sonst kann ein Kunde eine Maschine im Betrieb sehen, anfassen und gleich mit dem Konstrukteur sprechen?",
       "Anstrengend ist es trotzdem. Zehn Stunden stehen, danach Abendessen mit Kunden, am nächsten Morgen wieder um acht am Stand. Ich wünsche mir, dass die Firma die Messetage besser ausgleicht. Bisher gibt es dafür nicht einmal einen freien Tag.",
       "Was ich mir außerdem wünsche: dass die Gespräche vom Stand besser weiterverfolgt werden. Ich habe schon erlebt, dass Kunden ein halbes Jahr nach der Messe bei uns angerufen haben, weil sich bis dahin niemand bei ihnen gemeldet hatte. So etwas darf eigentlich nicht passieren.",
       "Die Messe bringt mir mehr Termine als zwei Monate Kaltakquise am Telefon. Das sollte die Firma bei der Planung der Arbeitszeit auch berücksichtigen.",
       "Beitrag E · Paul Reinecke, Geschäftsführer eines Softwarehauses: Für uns hat sich die Frage mit einer Onlinemesse erledigt, die wir selbst veranstalten. Zweimal im Jahr zeigen wir an einem Nachmittag unsere Neuheiten, Kunden können sich in Fachvorträge einwählen und Fragen stellen.",
       "Die Zahl der Teilnehmer liegt inzwischen bei über 900. Ehrlich gesagt ersetzt das aber nicht das persönliche Gespräch. Deshalb laden wir die interessantesten Kontakte danach zu einem Workshop zu uns ins Haus ein.",
       "Für ein kleines Softwarehaus wie uns ist das ideal. Ein Stand auf einer großen Messe hätte uns mehr gekostet als das gesamte Marketingbudget eines Jahres, und unsere Kunden sitzen ohnehin über ganz Europa verteilt.",
       "Die Workshops sind meistens schnell ausgebucht, obwohl wir nur zwölf Plätze anbieten."
      ]
     },
     "aufgaben": [
      {
       "frage": "In welchem Beitrag wird betont, dass Messekontakte oft erst mit Verzögerung zu Geschäften führen?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "viele davon kaufen erst zwei oder drei Jahre später",
       "erklaerung": "Ohlsen betont, dass Käufe oft Jahre nach dem Messekontakt kommen."
      },
      {
       "frage": "In welchem Beitrag hat ein Unternehmen das Geld für die Messe in Kundenbesuche umgeschichtet?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "Das Geld stecken wir jetzt in Besuche bei unseren zwanzig wichtigsten Kunden",
       "erklaerung": "Statt der Messe besucht der Vertrieb die wichtigsten Kunden direkt."
      },
      {
       "frage": "In welchem Beitrag wird bemängelt, dass die Belastung am Messestand nicht ausgeglichen wird?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "Bisher gibt es dafür nicht einmal einen freien Tag",
       "erklaerung": "Demir wünscht sich einen Ausgleich für lange Messetage, bekommt aber keinen."
      },
      {
       "frage": "In welchem Beitrag wird hervorgehoben, dass Kunden ein Produkt in Aktion erleben können?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "eine Maschine im Betrieb sehen, anfassen",
       "erklaerung": "Auf der Messe läuft die Maschine, der Kunde kann sie sehen und anfassen."
      },
      {
       "frage": "In welchem Beitrag wird ein eigenes Onlineformat durch ein Treffen vor Ort ergänzt?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "zu einem Workshop zu uns ins Haus ein",
       "erklaerung": "Nach der Onlinemesse werden interessante Kontakte persönlich eingeladen."
      },
      {
       "frage": "In welchem Beitrag wird der Erfolg von Messen systematisch gemessen?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "jeden Kontakt am Stand und verfolgen im Kundensystem",
       "erklaerung": "Jeder Kontakt wird erfasst und bis zum Auftrag verfolgt. A schätzt den Erfolg nur grob ein."
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Wirtschaftsmagazin Betrieb & Bildung",
      "titel": "Die Schule im eigenen Haus",
      "zeilen": [
       "E-Mail von Susanne Brockmann, Geschäftsführerin an Abteilungsleiter der Ostermann Kunststofftechnik GmbH · Betreff: Weiterbildung: Artikel zur Vorbereitung der Klausurtagung",
       "Guten Morgen zusammen, in der letzten Führungsrunde haben einige von Ihnen bemängelt, dass unsere Weiterbildungen zu zufällig verteilt werden. Wer laut genug fragt, bekommt ein Seminar, andere warten jahrelang. Gleichzeitig haben wir im vergangenen Jahr 186 000 Euro für externe Schulungen ausgegeben, ohne genau zu wissen, was davon im Alltag angekommen ist.",
       "Ich habe den beigefügten Artikel über eine betriebseigene Akademie bei einem Zulieferer gelesen und finde den Ansatz bedenkenswert. Mir ist aber klar, dass wir mit unseren 320 Mitarbeitern nicht einfach kopieren können, was ein Betrieb mit 2 000 Leuten aufbaut. Deshalb möchte ich vor einer Entscheidung von jedem von Ihnen hören, wie Sie die Sache sehen. Hinzu kommt, dass ein großer Teil unseres Fachwissens bei wenigen erfahrenen Kollegen liegt, die in den nächsten Jahren in Rente gehen. Dieses Wissen sollten wir rechtzeitig weitergeben.",
       "Konkret interessiert mich: Gibt es in Ihrer Abteilung Mitarbeiter, die ihr Wissen an andere weitergeben könnten und das auch wollten? Und welche Themen müssten Ihrer Meinung nach weiterhin von externen Trainern abgedeckt werden?",
       "Bitte bringen Sie Ihre Überlegungen zur Klausurtagung am 3. Dezember mit. Eine schriftliche Ausarbeitung erwarte ich ausdrücklich nicht, ein paar Notizen genügen. Wer an dem Termin verhindert ist, kann mir seine Gedanken gern vorher schicken.",
       "Mit freundlichen Grüßen, Susanne Brockmann",
       "Der Artikel im Anhang: Die Schule im eigenen Haus",
       "Montagmorgen, kurz nach sieben, im Schulungsraum der Kerber Fahrzeugteile AG in Talbach. Zwölf Mitarbeiter aus Produktion, Einkauf und Qualitätssicherung sitzen vor einem Bildschirm, auf dem ein Diagramm zu sehen ist. Vorn steht kein externer Trainer, sondern Holger Strauß, Schichtleiter in der Gießerei. Er erklärt, wie man an Messdaten erkennt, dass eine Maschine bald ausfallen wird. Vor zwei Jahren hätte er sich das nicht zugetraut. Heute unterrichtet er einmal im Monat.",
       "Strauß ist einer von 64 Mitarbeitern, die bei Kerber als sogenannte Lernbegleiter ihr Wissen an Kollegen weitergeben. Das Unternehmen, das rund 2 000 Menschen beschäftigt, hat vor drei Jahren eine eigene Akademie gegründet. Inzwischen werden dort rund 140 Kurse angeboten, von Tabellenkalkulation über Gesprächsführung bis zur Wartung bestimmter Anlagen. Mehr als zwei Drittel davon werden von eigenen Mitarbeitern geleitet.",
       "Den Anstoß gab eine ernüchternde Auswertung. Personalchefin Daniela Fuchs hatte untersuchen lassen, wie viele der externen Seminare tatsächlich zu Veränderungen im Arbeitsalltag geführt hatten. Das Ergebnis: Bei weniger als einem Drittel konnten die Vorgesetzten eine Wirkung erkennen. „Die Leute kamen motiviert zurück, und nach zwei Wochen war alles wie vorher“, sagt Fuchs. Viele Seminare seien zu allgemein gewesen und hätten mit den Abläufen im Werk wenig zu tun gehabt.",
       "Interne Kurse haben in dieser Hinsicht einen klaren Vorteil. Die Lernbegleiter kennen die Maschinen, die Software und die typischen Probleme aus eigener Erfahrung. Beispiele stammen aus dem eigenen Werk, und wer nach dem Kurs Fragen hat, weiß, wo er den Kursleiter findet. Nach einer internen Befragung bewerten die Teilnehmer die Kurse der Akademie im Schnitt deutlich besser als die früheren externen Angebote.",
       "Auch für die Lernbegleiter selbst hat das Modell Folgen. Viele berichten, dass sie ihre eigene Arbeit besser verstehen, seit sie sie anderen erklären müssen. Einige haben über ihre Tätigkeit in der Akademie den Sprung in eine Führungsposition geschafft. Personalchefin Fuchs sieht darin einen willkommenen Nebeneffekt: „Wir erkennen jetzt viel früher, wer Talent hat, anderen etwas beizubringen.“ Zwei der Lernbegleiter leiten heute selbst eine Abteilung.",
       "Billig ist das Modell allerdings nicht. Kerber hat zwei Schulungsräume eingerichtet, eine Lernplattform angeschafft und vier Vollzeitstellen für die Organisation geschaffen. Die Lernbegleiter werden für ihre Kurse von ihrer eigentlichen Arbeit freigestellt, was in den Abteilungen nicht immer auf Begeisterung stößt. Unterm Strich gibt das Unternehmen nach eigenen Angaben heute etwa so viel für Weiterbildung aus wie vor der Gründung der Akademie, erreicht damit aber mehr als doppelt so viele Mitarbeiter.",
       "Nicht jeder gute Fachmann ist automatisch ein guter Lehrer. Kerber schickt alle künftigen Lernbegleiter deshalb zunächst in eine dreitägige Schulung, in der sie lernen, einen Kurs aufzubauen, Inhalte verständlich zu erklären und mit schwierigen Teilnehmern umzugehen. Wer danach unterrichtet, bekommt regelmäßig Rückmeldungen und kann sich mit anderen Lernbegleitern austauschen. Für ihren Einsatz erhalten sie keine zusätzliche Bezahlung, wohl aber Punkte, die bei der jährlichen Beurteilung berücksichtigt werden.",
       "Diese Regelung ist im Betrieb nicht unumstritten. Der Betriebsrat hatte sich für eine finanzielle Zulage ausgesprochen, konnte sich damit aber nicht durchsetzen. „Wer zusätzlich unterrichtet, leistet zusätzliche Arbeit, und die muss bezahlt werden“, sagt der Betriebsratsvorsitzende Erwin Kaya. Die Geschäftsführung argumentiert dagegen, die Tätigkeit solle freiwillig bleiben und nicht aus finanziellen Gründen übernommen werden.",
       "Schwierig ist bisweilen auch die Planung. Weil viele Lernbegleiter im Schichtdienst arbeiten, müssen Kurse oft in Randzeiten gelegt werden, frühmorgens oder am späten Nachmittag. Für Teilnehmer aus der Verwaltung ist das nicht immer bequem. Die Akademie bietet deshalb inzwischen einen Teil der Kurse zusätzlich als kurze Lernvideos an, die man sich am Arbeitsplatz ansehen kann. Die Zahl der Teilnehmer ist dadurch noch einmal deutlich gestiegen.",
       "Fachleute für betriebliche Bildung halten interne Akademien grundsätzlich für sinnvoll, warnen aber vor einer zu starken Abschottung. „Wer nur noch von den eigenen Leuten lernt, bekommt keine neuen Ideen mehr von außen“, sagt Andrea Lorenz vom Institut für Berufsbildung in Hamelstedt. Gerade bei Themen wie Führung, neuen Technologien oder rechtlichen Änderungen seien externe Fachleute oft unverzichtbar. Kerber trägt dem Rechnung, indem knapp ein Drittel der Kurse weiterhin von Externen gehalten wird.",
       "Auch für kleinere Unternehmen kann sich ein solcher Ansatz lohnen, wenn er bescheidener ausfällt. Lorenz rät Betrieben mit wenigen hundert Mitarbeitern, nicht gleich eine Akademie zu gründen, sondern mit einigen wenigen Kursen zu beginnen, für die es im Haus besonders gefragtes Wissen gibt. Wichtig sei, die Ergebnisse von Anfang an zu überprüfen, etwa durch kurze Gespräche mit den Vorgesetzten einige Wochen nach dem Kurs.",
       "Holger Strauß jedenfalls möchte das Unterrichten nicht mehr missen. Am meisten freut er sich, wenn ihn ein Kollege Wochen später an der Maschine anspricht und ihm zeigt, dass er etwas aus dem Kurs umgesetzt hat. „Das ist mir mehr wert als jede Zulage“, sagt er."
      ]
     },
     "aufgaben": [
      {
       "frage": "Frau Brockmann schreibt, dass in ihrem Unternehmen …",
       "opt": [
        "zu wenig Geld für Weiterbildung ausgegeben wird.",
        "die Verteilung der Weiterbildungen als ungerecht empfunden wird.",
        "externe Schulungen abgeschafft werden sollen."
       ],
       "loesung": 1,
       "stelle": "Wer laut genug fragt, bekommt ein Seminar",
       "erklaerung": "Einige bekommen Seminare, andere warten jahrelang: Die Verteilung gilt als zufällig."
      },
      {
       "frage": "Das Modell aus dem Artikel will Frau Brockmann …",
       "opt": [
        "nicht ohne Anpassung übernehmen.",
        "ab Dezember einführen.",
        "gemeinsam mit einem anderen Betrieb aufbauen."
       ],
       "loesung": 0,
       "stelle": "nicht einfach kopieren können",
       "erklaerung": "Mit 320 Mitarbeitern kann man das Modell eines großen Betriebs nicht einfach kopieren."
      },
      {
       "frage": "Zur Klausurtagung sollen die Abteilungsleiter …",
       "opt": [
        "einen ausführlichen Bericht vorlegen.",
        "geeignete externe Trainer vorschlagen.",
        "erste Überlegungen mitbringen."
       ],
       "loesung": 2,
       "stelle": "ein paar Notizen genügen",
       "erklaerung": "Eine schriftliche Ausarbeitung wird ausdrücklich nicht erwartet."
      },
      {
       "frage": "Holger Strauß …",
       "opt": [
        "arbeitet als externer Trainer für Kerber.",
        "unterrichtet neben seiner Arbeit als Schichtleiter.",
        "hat schon immer gern unterrichtet."
       ],
       "loesung": 1,
       "stelle": "sondern Holger Strauß, Schichtleiter in der Gießerei",
       "erklaerung": "Er ist Schichtleiter und unterrichtet einmal im Monat; früher hätte er sich das nicht zugetraut."
      },
      {
       "frage": "In der Akademie von Kerber …",
       "opt": [
        "wird die Mehrheit der Kurse von Beschäftigten des Unternehmens geleitet.",
        "gibt es ausschließlich Kurse zu technischen Themen.",
        "unterrichten 140 Lernbegleiter."
       ],
       "loesung": 0,
       "stelle": "Mehr als zwei Drittel davon werden von eigenen Mitarbeitern geleitet",
       "erklaerung": "Über zwei Drittel der Kurse leiten eigene Leute. 140 ist die Zahl der Kurse, nicht der Lernbegleiter."
      },
      {
       "frage": "Die Auswertung der externen Seminare ergab, dass …",
       "opt": [
        "die Teilnehmer unzufrieden waren.",
        "die Seminare zu teuer waren.",
        "die meisten kaum Wirkung im Arbeitsalltag zeigten."
       ],
       "loesung": 2,
       "stelle": "Bei weniger als einem Drittel konnten die Vorgesetzten eine Wirkung erkennen",
       "erklaerung": "Bei über zwei Dritteln war im Alltag keine Wirkung zu sehen."
      },
      {
       "frage": "Ein Vorteil interner Kurse liegt darin, dass …",
       "opt": [
        "sie sich auf den eigenen Betriebsalltag beziehen.",
        "sie kürzer sind als externe Seminare.",
        "die Teilnehmer danach eine Prüfung ablegen."
       ],
       "loesung": 0,
       "stelle": "Beispiele stammen aus dem eigenen Werk",
       "erklaerung": "Die Lernbegleiter kennen Maschinen und Probleme, die Beispiele kommen aus dem Werk."
      },
      {
       "frage": "Seit der Gründung der Akademie …",
       "opt": [
        "gibt Kerber deutlich weniger für Weiterbildung aus.",
        "erreicht Kerber mit ähnlichen Kosten mehr Beschäftigte.",
        "wurden vier Abteilungen zusammengelegt."
       ],
       "loesung": 1,
       "stelle": "erreicht damit aber mehr als doppelt so viele Mitarbeiter",
       "erklaerung": "Die Ausgaben sind etwa gleich geblieben, die Zahl der Teilnehmer hat sich mehr als verdoppelt."
      },
      {
       "frage": "Die künftigen Lernbegleiter …",
       "opt": [
        "müssen eine pädagogische Prüfung bestehen.",
        "werden von externen Trainern begleitet.",
        "werden vorher auf ihre Aufgabe vorbereitet."
       ],
       "loesung": 2,
       "stelle": "zunächst in eine dreitägige Schulung",
       "erklaerung": "Eine dreitägige Schulung bereitet sie auf das Unterrichten vor."
      },
      {
       "frage": "Der Betriebsrat …",
       "opt": [
        "wollte, dass die Lernbegleiter zusätzlich bezahlt werden.",
        "lehnte die Akademie insgesamt ab.",
        "setzte durch, dass die Tätigkeit freiwillig bleibt."
       ],
       "loesung": 0,
       "stelle": "hatte sich für eine finanzielle Zulage ausgesprochen",
       "erklaerung": "Er forderte eine Zulage, konnte sich aber nicht durchsetzen. Die Freiwilligkeit betont die Geschäftsführung."
      },
      {
       "frage": "Andrea Lorenz warnt davor, dass …",
       "opt": [
        "interne Kurse auf Dauer zu teuer werden.",
        "Unternehmen ganz ohne Anregungen von außen auskommen wollen.",
        "Lernbegleiter ihre eigentliche Arbeit vernachlässigen."
       ],
       "loesung": 1,
       "stelle": "bekommt keine neuen Ideen mehr von außen",
       "erklaerung": "Sie warnt vor Abschottung: Wer nur intern lernt, bekommt keine neuen Ideen."
      },
      {
       "frage": "Kleineren Betrieben rät Lorenz, …",
       "opt": [
        "eine gemeinsame Akademie mit anderen Firmen zu gründen.",
        "ganz auf interne Kurse zu verzichten.",
        "zunächst klein anzufangen und die Wirkung zu prüfen."
       ],
       "loesung": 2,
       "stelle": "mit einigen wenigen Kursen zu beginnen",
       "erklaerung": "Wenige Kurse mit gefragtem Wissen, Ergebnisse von Anfang an überprüfen."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Information der Geschäftsführung an alle Mitarbeiter der Seidel Maschinenbau GmbH",
      "titel": "Inventur und Betriebsruhe zum Jahreswechsel",
      "zeilen": [
       "Liebes Team, das Jahr neigt sich dem __(1)__ zu, und wie in jedem Jahr möchten wir Sie rechtzeitig über die Abläufe zwischen den Feiertagen informieren. Unser Werk bleibt vom 24. Dezember bis einschließlich 3. Januar geschlossen. Für diese Zeit werden jedem Mitarbeiter vier Urlaubstage __(2)__. __(3)__ für den Notdienst eingeteilt ist, erhält gesondert Bescheid.",
       "Am 22. und 23. Dezember findet die jährliche Inventur statt. An diesen beiden Tagen ruht die Produktion, damit alle Bestände vollständig __(4)__ werden können. Die Einteilung der Zählteams __(5)__ die Meister vor, die Listen hängen ab dem 15. Dezember am Schwarzen Brett aus. Bitte sorgen Sie dafür, dass Ihr Arbeitsbereich bis zum 21. Dezember aufgeräumt ist und keine Materialien __(6)__ falschen Platz liegen.",
       "Die Inventur bildet die Grundlage __(7)__ den Jahresabschluss und zeigt uns, wo im Laufe des Jahres Differenzen __(8)__ sind. Im vergangenen Jahr __(9)__ wir auf diese Weise fehlerhafte Buchungen im Wert von rund 40 000 Euro aufdecken. Wir bitten Sie daher, die Zählung mit der __(10)__ Sorgfalt durchzuführen.",
       "Neu ist in diesem Jahr der Einsatz von Handscannern, mit __(11)__ die Bestände direkt ins System übertragen werden. Damit __(12)__ das bisherige Abtippen der Zähllisten, das in der Vergangenheit häufig zu Fehlern geführt hat. Eine kurze Einweisung in die Geräte erhalten alle Zählteams am 19. Dezember __(13)__ 14 Uhr in der Kantine.",
       "Nach der Betriebsruhe nehmen wir die Arbeit am 4. Januar wieder __(14)__. Aufträge, die über den Jahreswechsel fertig sein müssen, sollten bis Mitte Dezember mit der Produktionsplanung __(15)__ werden. Unsere Kunden haben wir bereits Anfang November über die Betriebsruhe in __(16)__ gesetzt.",
       "Das zu Ende gehende Jahr war __(17)__ der schwierigen Lage in unserer Branche ein erfolgreiches. Unser Umsatz ist um sieben Prozent gestiegen, und wir haben elf neue Kollegen __(18)__ können. Das ist in erster __(19)__ Ihr Verdienst. Als Zeichen unserer Anerkennung zahlen wir __(20)__ dem Dezembergehalt eine einmalige Prämie von 500 Euro aus. Wir freuen uns __(21)__ die weitere Zusammenarbeit und wünschen Ihnen und Ihren Familien erholsame Feiertage und einen guten __(22)__ ins neue Jahr.",
       "Ihre Geschäftsführung"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Schluss",
        "Abschluss",
        "Rest",
        "Ende"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Wendung: „sich dem Ende zuneigen“."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "angerechnet",
        "angerichtet",
        "ausgerechnet",
        "eingerichtet"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Urlaubstage werden auf den Jahresurlaub „angerechnet“."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Der",
        "Wer",
        "Welcher",
        "Was"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Verallgemeinerndes Relativpronomen ohne Bezugswort: „Wer …, erhält …“."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "aufgefasst",
        "verfasst",
        "erfasst",
        "gefasst"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Bestände werden „erfasst“ = gezählt und festgehalten."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "nehmen",
        "machen",
        "treffen",
        "führen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„etwas vornehmen“ = durchführen; „vor“ steht am Satzende."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "im",
        "beim",
        "zum",
        "am"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„am falschen Platz“: „an“ + Dativ für eine Position."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "zu",
        "über",
        "für",
        "um"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„die Grundlage für etwas bilden“."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "bestanden",
        "entstanden",
        "verstanden",
        "überstanden"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Differenzen „entstehen“ = kommen zustande."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "können",
        "konnten",
        "könnten",
        "gekonnt"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Präteritum wegen „Im vergangenen Jahr“."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "nötige",
        "nötiger",
        "nötigen",
        "nötig"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Adjektiv nach bestimmtem Artikel im Dativ: „mit der nötigen Sorgfalt“."
      },
      {
       "frage": "Was passt in Lücke 11?",
       "luecke": 11,
       "opt": [
        "die",
        "deren",
        "welche",
        "denen"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„mit“ verlangt den Dativ Plural: „mit denen“."
      },
      {
       "frage": "Was passt in Lücke 12?",
       "luecke": 12,
       "opt": [
        "entfällt",
        "verfällt",
        "zerfällt",
        "befällt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„entfallen“ = wegfallen, nicht mehr nötig sein."
      },
      {
       "frage": "Was passt in Lücke 13?",
       "luecke": 13,
       "opt": [
        "am",
        "zu",
        "um",
        "bei"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Uhrzeit: „um 14 Uhr“."
      },
      {
       "frage": "Was passt in Lücke 14?",
       "luecke": 14,
       "opt": [
        "auf",
        "an",
        "ein",
        "vor"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„die Arbeit wieder aufnehmen“ = weiterarbeiten."
      },
      {
       "frage": "Was passt in Lücke 15?",
       "luecke": 15,
       "opt": [
        "abgegeben",
        "abgesagt",
        "angestimmt",
        "abgestimmt"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„etwas mit jemandem abstimmen“ = sich einigen."
      },
      {
       "frage": "Was passt in Lücke 16?",
       "luecke": 16,
       "opt": [
        "Wissen",
        "Kenntnis",
        "Kunde",
        "Ahnung"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Verbindung: „jemanden in Kenntnis setzen“."
      },
      {
       "frage": "Was passt in Lücke 17?",
       "luecke": 17,
       "opt": [
        "trotz",
        "wegen",
        "statt",
        "infolge"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Gegensatz: schwierige Lage, aber erfolgreiches Jahr."
      },
      {
       "frage": "Was passt in Lücke 18?",
       "luecke": 18,
       "opt": [
        "vorstellen",
        "einstellen",
        "darstellen",
        "feststellen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Neue Mitarbeiter werden „eingestellt“."
      },
      {
       "frage": "Was passt in Lücke 19?",
       "luecke": 19,
       "opt": [
        "Reihe",
        "Stelle",
        "Linie",
        "Hinsicht"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Wendung: „in erster Linie“ = vor allem."
      },
      {
       "frage": "Was passt in Lücke 20?",
       "luecke": 20,
       "opt": [
        "bei",
        "zu",
        "an",
        "mit"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„mit dem Gehalt auszahlen“ = zusammen mit dem Gehalt."
      },
      {
       "frage": "Was passt in Lücke 21?",
       "luecke": 21,
       "opt": [
        "an",
        "über",
        "für",
        "auf"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„sich auf etwas Kommendes freuen“."
      },
      {
       "frage": "Was passt in Lücke 22?",
       "luecke": 22,
       "opt": [
        "Rutsch",
        "Sprung",
        "Lauf",
        "Fall"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Wendung: „einen guten Rutsch ins neue Jahr“."
      }
     ]
    }
   ]
  },
  {
   "id": "tc1bll2",
   "titel": "Prüfungslauf 2",
   "minuten": 90,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Hellweger Tageblatt, Wirtschaft",
      "titel": "Weniger in der Tonne, mehr auf dem Teller",
      "zeilen": [
       "In der Werkskantine des Autozulieferers Brenner Antriebstechnik in Kirchhausen werden jeden Tag rund 1 900 Mittagessen ausgegeben. Bis vor zwei Jahren landete davon ein beträchtlicher Teil im Abfall: Nach einer Messung über vier Wochen waren es im Schnitt 210 Kilogramm am Tag. __(1)__ Für Küchenchef Thorsten Wendel war die Zahl ein Schock. „Ich wusste, dass wir zu viel wegwerfen. Aber nicht, dass es so viel ist.“",
       "Die Ursachen ließen sich schnell ausmachen. Zum einen wurde zu viel gekocht, weil die Küche nie genau wusste, wie viele Mitarbeiter tatsächlich zum Essen kommen würden. __(2)__ Zum anderen waren die Portionen für viele schlicht zu groß, vor allem für die Beschäftigten in der Verwaltung, die den ganzen Tag am Schreibtisch sitzen. Viele ließen deshalb die Beilagen liegen oder aßen nur die Hälfte.",
       "Wendel und sein Team setzten an beiden Stellen an. Seit dem vergangenen Jahr können die Mitarbeiter ihr Essen bis neun Uhr morgens über das Intranet vorbestellen. __(3)__ Die Vorbestellungen geben der Küche eine verlässliche Grundlage, auf der sie die Mengen für spontane Gäste schätzen kann. Außerdem gibt es jedes Gericht nun in zwei Größen, wobei die kleine Portion 1,20 Euro weniger kostet.",
       "Die Ergebnisse können sich sehen lassen. Die Abfallmenge sank innerhalb eines Jahres auf durchschnittlich 85 Kilogramm am Tag, also um knapp sechzig Prozent. __(4)__ Die Kantine spart nach eigener Rechnung rund 120 000 Euro im Jahr beim Wareneinsatz, ohne die Preise erhöht zu haben. Zugleich müssen weniger Abfallbehälter abgeholt werden, was die Entsorgungskosten um weitere 9 000 Euro senkt.",
       "Was trotzdem übrig bleibt, wird nicht mehr automatisch entsorgt. __(5)__ Was sich auch dann nicht verkaufen lässt, holt zweimal pro Woche ein Verein ab, der damit eine Tafel in der Kreisstadt beliefert. Die Lebensmittelaufsicht hat das Verfahren geprüft und genehmigt, nachdem die Küche ein lückenloses Protokoll über Kühltemperaturen und Ausgabezeiten eingeführt hatte.",
       "Ganz reibungslos lief die Umstellung allerdings nicht. Vor allem in der Produktion gab es anfangs Beschwerden, weil Schichtarbeiter ohne Zugang zum Intranet nicht vorbestellen konnten. __(6)__ Wendel ist überzeugt, dass sich das Modell auf andere Betriebsrestaurants übertragen lässt. Mehrere Firmen aus der Region haben sich bereits angemeldet, um sich das System in Kirchhausen anzusehen. Wendel selbst will als Nächstes die Speisepläne gemeinsam mit den Mitarbeitern abstimmen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Satz gehört in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Seit ein Teil der Belegschaft regelmäßig von zu Hause arbeitet, schwankt die Zahl der Gäste von Tag zu Tag erheblich.",
        "Die Preise mussten deshalb für alle Gerichte um zehn Prozent angehoben werden.",
        "Auch finanziell hat sich der Aufwand gelohnt.",
        "Aufs Jahr hochgerechnet waren das mehr als fünfzig Tonnen Lebensmittel.",
        "Seit im Pausenraum der Fertigung ein Terminal steht, ist das Problem behoben.",
        "Wer nicht vorbestellt, bekommt seitdem kein warmes Essen mehr.",
        "Inzwischen nutzen rund sechzig Prozent der Kantinengäste dieses Angebot.",
        "Ab vierzehn Uhr werden Reste in Mehrwegboxen zum halben Preis an Mitarbeiter der Spätschicht abgegeben."
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Die Hochrechnung führt die Zahl von 210 Kilogramm weiter; danach folgt die Reaktion auf „die Zahl“."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Seit ein Teil der Belegschaft regelmäßig von zu Hause arbeitet, schwankt die Zahl der Gäste von Tag zu Tag erheblich.",
        "Die Preise mussten deshalb für alle Gerichte um zehn Prozent angehoben werden.",
        "Auch finanziell hat sich der Aufwand gelohnt.",
        "Aufs Jahr hochgerechnet waren das mehr als fünfzig Tonnen Lebensmittel.",
        "Seit im Pausenraum der Fertigung ein Terminal steht, ist das Problem behoben.",
        "Wer nicht vorbestellt, bekommt seitdem kein warmes Essen mehr.",
        "Inzwischen nutzen rund sechzig Prozent der Kantinengäste dieses Angebot.",
        "Ab vierzehn Uhr werden Reste in Mehrwegboxen zum halben Preis an Mitarbeiter der Spätschicht abgegeben."
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Der Satz erklärt, warum die Küche die Zahl der Gäste nicht kennt; „Zum anderen“ folgt als zweite Ursache."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Seit ein Teil der Belegschaft regelmäßig von zu Hause arbeitet, schwankt die Zahl der Gäste von Tag zu Tag erheblich.",
        "Die Preise mussten deshalb für alle Gerichte um zehn Prozent angehoben werden.",
        "Auch finanziell hat sich der Aufwand gelohnt.",
        "Aufs Jahr hochgerechnet waren das mehr als fünfzig Tonnen Lebensmittel.",
        "Seit im Pausenraum der Fertigung ein Terminal steht, ist das Problem behoben.",
        "Wer nicht vorbestellt, bekommt seitdem kein warmes Essen mehr.",
        "Inzwischen nutzen rund sechzig Prozent der Kantinengäste dieses Angebot.",
        "Ab vierzehn Uhr werden Reste in Mehrwegboxen zum halben Preis an Mitarbeiter der Spätschicht abgegeben."
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "„dieses Angebot“ meint die Vorbestellung; die übrigen sind die spontanen Gäste im nächsten Satz."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Seit ein Teil der Belegschaft regelmäßig von zu Hause arbeitet, schwankt die Zahl der Gäste von Tag zu Tag erheblich.",
        "Die Preise mussten deshalb für alle Gerichte um zehn Prozent angehoben werden.",
        "Auch finanziell hat sich der Aufwand gelohnt.",
        "Aufs Jahr hochgerechnet waren das mehr als fünfzig Tonnen Lebensmittel.",
        "Seit im Pausenraum der Fertigung ein Terminal steht, ist das Problem behoben.",
        "Wer nicht vorbestellt, bekommt seitdem kein warmes Essen mehr.",
        "Inzwischen nutzen rund sechzig Prozent der Kantinengäste dieses Angebot.",
        "Ab vierzehn Uhr werden Reste in Mehrwegboxen zum halben Preis an Mitarbeiter der Spätschicht abgegeben."
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Nach der Abfallmenge leitet „Auch finanziell“ zu den eingesparten 120 000 Euro über."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Seit ein Teil der Belegschaft regelmäßig von zu Hause arbeitet, schwankt die Zahl der Gäste von Tag zu Tag erheblich.",
        "Die Preise mussten deshalb für alle Gerichte um zehn Prozent angehoben werden.",
        "Auch finanziell hat sich der Aufwand gelohnt.",
        "Aufs Jahr hochgerechnet waren das mehr als fünfzig Tonnen Lebensmittel.",
        "Seit im Pausenraum der Fertigung ein Terminal steht, ist das Problem behoben.",
        "Wer nicht vorbestellt, bekommt seitdem kein warmes Essen mehr.",
        "Inzwischen nutzen rund sechzig Prozent der Kantinengäste dieses Angebot.",
        "Ab vierzehn Uhr werden Reste in Mehrwegboxen zum halben Preis an Mitarbeiter der Spätschicht abgegeben."
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Der Satz zeigt, was statt der Entsorgung geschieht; „auch dann nicht“ setzt diesen ersten Schritt voraus."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Seit ein Teil der Belegschaft regelmäßig von zu Hause arbeitet, schwankt die Zahl der Gäste von Tag zu Tag erheblich.",
        "Die Preise mussten deshalb für alle Gerichte um zehn Prozent angehoben werden.",
        "Auch finanziell hat sich der Aufwand gelohnt.",
        "Aufs Jahr hochgerechnet waren das mehr als fünfzig Tonnen Lebensmittel.",
        "Seit im Pausenraum der Fertigung ein Terminal steht, ist das Problem behoben.",
        "Wer nicht vorbestellt, bekommt seitdem kein warmes Essen mehr.",
        "Inzwischen nutzen rund sechzig Prozent der Kantinengäste dieses Angebot.",
        "Ab vierzehn Uhr werden Reste in Mehrwegboxen zum halben Preis an Mitarbeiter der Spätschicht abgegeben."
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„das Problem“ greift den fehlenden Zugang zum Intranet auf; das Terminal ist die Lösung."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "seite",
      "quelle": "Forum „Ausbildung im Betrieb“",
      "titel": "Ausbildungsabbrüche: Was hilft wirklich?",
      "zeilen": [
       "Beitrag A · Heike Sommer, Ausbildungsleiterin in einem Elektrobetrieb: Wir hatten vor drei Jahren eine Abbruchquote von fast einem Drittel, das war ein Weckruf. In den Gesprächen mit den Abbrechern kam fast immer dasselbe heraus: Sie hatten sich den Beruf ganz anders vorgestellt.",
       "Seitdem nehmen wir niemanden mehr ohne ein einwöchiges Praktikum vorher. Das kostet uns Zeit, aber die Quote liegt inzwischen bei unter zehn Prozent.",
       "Außerdem laden wir die Eltern der neuen Azubis inzwischen zu einem Nachmittag in den Betrieb ein. Viele wissen gar nicht, was ihr Kind bei uns eigentlich lernt. Wenn sie es einmal gesehen haben, stehen sie auch in schwierigen Phasen eher hinter der Ausbildung.",
       "Natürlich springt auch bei uns noch der eine oder andere ab. Das sind heute aber Ausnahmen, und meistens kennen wir die Gründe schon vorher, weil wir regelmäßig mit den Azubis sprechen.",
       "Beitrag B · Kevin Jansen, Auszubildender zum Industriekaufmann: Ich habe selbst schon einmal abgebrochen, in einem Hotel. Nicht wegen der Arbeit, sondern weil sich niemand für uns zuständig gefühlt hat. Der Ausbilder war gleichzeitig Küchenchef und hatte nie Zeit.",
       "In meinem jetzigen Betrieb gibt es jede Woche ein festes Gespräch mit der Ausbilderin, und wenn es Ärger in der Berufsschule gibt, ruft sie selbst dort an. Das klingt banal, aber genau das hat mir beim ersten Mal gefehlt.",
       "Ich glaube, viele Betriebe unterschätzen, wie wichtig so eine feste Bezugsperson ist. Mit sechzehn oder siebzehn traut man sich nicht, von selbst zum Chef zu gehen und zu sagen, dass etwas nicht stimmt. Man wartet, bis es nicht mehr geht, und dann ist es oft zu spät.",
       "Meine Ausbilderin sagt immer, sie sei lieber einmal zu viel ansprechbar als einmal zu wenig. Das merkt man.",
       "Beitrag C · Ulrike Brandes, Lehrerin an einer Berufsschule: Aus Sicht der Berufsschule sehe ich einen Punkt, der oft übersehen wird: Viele Abbrüche haben mit Geld zu tun. Wer mit 700 Euro Ausbildungsvergütung in einer Stadt mit hohen Mieten allein wohnen muss, hält das nicht lange durch.",
       "Einige Betriebe in unserer Region zahlen inzwischen einen Mietzuschuss oder stellen Zimmer in Wohngemeinschaften zur Verfügung. Dort beobachte ich deutlich weniger Abbrüche als bei vergleichbaren Betrieben ohne solche Angebote.",
       "Mir ist klar, dass sich nicht jeder kleine Betrieb so etwas leisten kann. Aber manchmal reicht schon ein Hinweis auf staatliche Unterstützung, die viele Auszubildende gar nicht kennen. Ich erlebe jedes Jahr Schüler, die davon erst im dritten Lehrjahr erfahren.",
       "Hinzu kommt, dass viele Auszubildende neben der Ausbildung jobben müssen, um über die Runden zu kommen. Das geht auf Kosten der Erholung und am Ende auch der Noten.",
       "Beitrag D · Matthias Kühn, Inhaber einer Bäckerei mit sechs Filialen: Ich will ehrlich sein: Ich habe lange gedacht, die jungen Leute halten heute einfach nichts mehr aus. Dann hat mir eine Auszubildende beim Abschlussgespräch gesagt, sie sei in zwei Jahren kein einziges Mal gelobt worden.",
       "Das hat gesessen. Seitdem bekommen unsere Azubis nach jedem Monat eine kurze Rückmeldung, was gut lief und was nicht. Ob das die Abbrüche senkt, kann ich noch nicht sagen. Die Stimmung in der Backstube ist jedenfalls besser geworden.",
       "Ich habe außerdem angefangen, einmal in der Woche nach der Nachtschicht mit den Azubis zu frühstücken. Da erfahre ich mehr als in jedem offiziellen Gespräch, zum Beispiel, wer gerade Ärger zu Hause hat oder mit welchem Gesellen es nicht klappt.",
       "Mein Rat an andere Inhaber: Fragt eure Leute, wie es ihnen geht, und zwar bevor sie gehen und nicht erst beim Abschied.",
       "Beitrag E · Frank Eilers, Ausbildungsberater bei der Handwerkskammer: Wir bieten seit einigen Jahren eine kostenlose Beratung an, wenn eine Ausbildung zu scheitern droht. Leider melden sich die meisten erst, wenn die Kündigung schon geschrieben ist. Dann ist kaum noch etwas zu retten.",
       "Mein Rat an die Betriebe: Holt uns früh dazu, schon bei den ersten Fehlzeiten oder schlechten Noten. In etwa der Hälfte der Fälle, in denen wir rechtzeitig eingebunden waren, wurde die Ausbildung erfolgreich fortgesetzt, manchmal auch in einem anderen Betrieb.",
       "Viele Betriebe scheuen sich, die Kammer einzuschalten, weil sie glauben, wir würden dann kontrollieren oder Ärger machen. Das ist nicht unsere Aufgabe. Wir vermitteln zwischen den Beteiligten und suchen nach Lösungen, mit denen beide Seiten leben können.",
       "Im vergangenen Jahr haben wir auf diese Weise 61 Ausbildungen begleitet."
      ]
     },
     "aufgaben": [
      {
       "frage": "In welchem Beitrag wird die finanzielle Lage der Auszubildenden als Ursache genannt?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Viele Abbrüche haben mit Geld zu tun",
       "erklaerung": "Niedrige Vergütung und hohe Mieten führen zu Abbrüchen."
      },
      {
       "frage": "In welchem Beitrag wird eine Maßnahme beschrieben, deren Wirkung auf die Abbrüche noch offen ist?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "Ob das die Abbrüche senkt, kann ich noch nicht sagen",
       "erklaerung": "Kühn sieht eine bessere Stimmung, aber noch keinen Effekt auf die Abbrüche. A und C nennen bereits Ergebnisse."
      },
      {
       "frage": "In welchem Beitrag muss man den Beruf vor Beginn der Ausbildung im Betrieb kennenlernen?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "ohne ein einwöchiges Praktikum vorher",
       "erklaerung": "Das Praktikum ist jetzt Voraussetzung für einen Ausbildungsplatz."
      },
      {
       "frage": "In welchem Beitrag wird bedauert, dass Hilfe zu spät in Anspruch genommen wird?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "Leider melden sich die meisten erst, wenn die Kündigung schon geschrieben ist",
       "erklaerung": "Die Beratung kommt meist erst, wenn es zu spät ist."
      },
      {
       "frage": "In welchem Beitrag hat eine kritische Rückmeldung zu einem Umdenken geführt?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "sie sei in zwei Jahren kein einziges Mal gelobt worden",
       "erklaerung": "Die Aussage der Auszubildenden hat Kühn dazu gebracht, monatliche Rückmeldungen einzuführen."
      },
      {
       "frage": "In welchem Beitrag kann eine gefährdete Ausbildung auch durch einen Wechsel des Betriebs gerettet werden?",
       "opt": [
        "Beitrag A",
        "Beitrag B",
        "Beitrag C",
        "Beitrag D",
        "Beitrag E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "manchmal auch in einem anderen Betrieb",
       "erklaerung": "Ein Teil der geretteten Ausbildungen wurde in einem anderen Betrieb fortgesetzt. B hat zwar gewechselt, aber erst nach einem Abbruch."
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Fachzeitschrift Arbeit & Recht im Betrieb",
      "titel": "Die Stechuhr kehrt zurück, nur anders",
      "zeilen": [
       "E-Mail von Nicole Hartmann, Personalleiterin an Peter Wendt, Vorsitzender des Betriebsrats · Betreff: Erfassung der Arbeitszeit: Artikel und Vorschlag für ein erstes Treffen",
       "Lieber Herr Wendt, wie in unserem letzten Monatsgespräch angekündigt, müssen wir uns in den kommenden Monaten mit der Erfassung der Arbeitszeit beschäftigen. Bisher arbeiten bei Kessler Datensysteme rund 150 der 210 Beschäftigten in Vertrauensarbeitszeit, ohne dass irgendwo festgehalten wird, wann sie anfangen und aufhören. Unsere Rechtsabteilung hat mir klargemacht, dass das so nicht bleiben kann.",
       "Ich schicke Ihnen einen Artikel mit, der die Lage aus meiner Sicht gut zusammenfasst und auch Beispiele aus anderen Betrieben enthält. Besonders interessant finde ich den Abschnitt über die Firma, die ihre Vertrauensarbeitszeit trotz Erfassung behalten hat. So etwas würde ich mir auch für uns wünschen.",
       "Mir ist bewusst, dass das Thema in der Belegschaft auf Skepsis stoßen wird. Gerade die Entwickler befürchten, dass man ihnen künftig jede Minute nachrechnet. Umso wichtiger ist es mir, dass wir die Regelung gemeinsam mit dem Betriebsrat entwickeln und nicht einfach ein fertiges System einführen. Auch die Kollegen im Kundendienst, die oft abends noch Anfragen beantworten, haben schon nachgefragt, ob diese Zeiten künftig als Überstunden zählen.",
       "Könnten Sie den Artikel im Betriebsrat besprechen und mir mitteilen, welche Punkte Ihnen besonders wichtig sind? Einen ersten gemeinsamen Termin schlage ich für die zweite Dezemberwoche vor. Bis dahin sollten wir auch klären, ob wir externe Beratung brauchen.",
       "Beste Grüße, Nicole Hartmann",
       "Der Artikel im Anhang: Die Stechuhr kehrt zurück, nur anders",
       "Jahrelang galt die Stechuhr als Symbol einer vergangenen Arbeitswelt. In Büros, Agenturen und Softwarefirmen setzte sich stattdessen die Vertrauensarbeitszeit durch: Die Beschäftigten erledigen ihre Aufgaben, wann und wie lange sie es für richtig halten, und niemand schreibt mit. Nun steht dieses Modell auf dem Prüfstand. Seit das Bundesarbeitsgericht im Jahr 2022 entschieden hat, dass Arbeitgeber die Arbeitszeit ihrer Beschäftigten systematisch erfassen müssen, suchen viele Unternehmen nach einer Lösung.",
       "Was genau erfasst werden muss, ist allerdings bis heute nicht in allen Einzelheiten geregelt. Klar ist nach Auffassung der meisten Arbeitsrechtler, dass Beginn, Ende und Dauer der täglichen Arbeitszeit festgehalten werden müssen, einschließlich der Überstunden. Offen ist dagegen, in welcher Form das zu geschehen hat. „Eine elektronische Erfassung ist praktisch, aber nach derzeitigem Stand nicht zwingend“, sagt die Fachanwältin für Arbeitsrecht Sabine Kroll. Auch handschriftliche Listen seien grundsätzlich möglich, solange sie vollständig und überprüfbar seien.",
       "Viele Beschäftigte sehen die Pflicht mit gemischten Gefühlen. In einer Umfrage des Instituts für Arbeitsforschung in Lindenau gaben 58 Prozent der Befragten an, die Erfassung grundsätzlich zu begrüßen, weil sie Überstunden sichtbar mache. Gleichzeitig befürchtet fast jeder Dritte, dass Vorgesetzte die Daten nutzen könnten, um die Leistung einzelner Mitarbeiter zu kontrollieren. Besonders ausgeprägt ist diese Sorge in Berufen, in denen bisher viel Freiheit herrschte.",
       "Wie unterschiedlich die Betriebe mit der neuen Pflicht umgehen, zeigt ein Blick in die Praxis. Während große Unternehmen häufig fertige Programme einkaufen, behelfen sich viele kleine Firmen mit Tabellen, in die die Beschäftigten ihre Zeiten am Monatsende nachtragen. Arbeitsrechtler sehen das kritisch, denn wer erst nach Wochen aufschreibt, wann er gearbeitet hat, verlässt sich allein auf sein Gedächtnis. Fehler und Lücken sind dann kaum zu vermeiden.",
       "Ganz unbegründet ist diese Befürchtung nicht. Moderne Zeiterfassungssysteme können weit mehr als Kommen und Gehen aufzeichnen, etwa, an welchem Projekt jemand wie lange gearbeitet hat. Ob solche Daten zur Kontrolle der Leistung genutzt werden dürfen, ist allerdings eng begrenzt. Hat ein Betrieb einen Betriebsrat, muss dieser der Einführung eines elektronischen Systems zustimmen, weil es dazu geeignet ist, das Verhalten der Beschäftigten zu überwachen.",
       "Dass Erfassung und Vertrauen sich nicht ausschließen müssen, zeigt die Softwarefirma Nordlicht Systems in Meerbach. Dort tragen die 85 Beschäftigten ihre Zeiten am Ende des Tages selbst in eine App ein. Vorgesetzte sehen nur die Summe der Wochenstunden, nicht die einzelnen Zeiten. Erst wenn jemand drei Wochen hintereinander mehr als 45 Stunden arbeitet, bekommt die Teamleitung einen Hinweis und soll das Gespräch suchen.",
       "„Wir wollten kein Kontrollinstrument, sondern ein Frühwarnsystem“, sagt Geschäftsführer Malte Jessen. Tatsächlich habe die Erfassung etwas ans Licht gebracht, was vorher niemand so genau gewusst habe: Einige Entwickler arbeiteten regelmäßig über fünfzig Stunden pro Woche, ohne dass es jemandem aufgefallen war. Zwei von ihnen seien kurz davor gewesen, wegen Überlastung zu kündigen. Heute werden die Aufgaben in solchen Fällen umverteilt.",
       "Ganz ohne Aufwand ging die Umstellung auch bei Nordlicht nicht. Die Einführung dauerte fast ein Jahr, weil Geschäftsführung und Betriebsrat sich zunächst auf eine Betriebsvereinbarung einigen mussten. Strittig war vor allem, wer Zugriff auf welche Daten erhält und wie lange sie gespeichert werden. Am Ende einigte man sich darauf, die Einzeldaten nach sechs Monaten zu löschen.",
       "Bei der Wahl des Systems sollten Unternehmen auch an den Datenschutz denken. Zeitdaten sind personenbezogene Daten und dürfen grundsätzlich nur für den Zweck verwendet werden, für den sie erhoben wurden. Wer sie später für andere Zwecke auswerten möchte, etwa für eine Beurteilung, braucht dafür eine eigene rechtliche Grundlage. Kroll empfiehlt, in der Betriebsvereinbarung genau festzulegen, wer welche Auswertungen machen darf und wer nicht.",
       "Arbeitsrechtler weisen darauf hin, dass die Erfassung für Unternehmen auch Risiken birgt. Wenn sichtbar wird, dass Beschäftigte regelmäßig die gesetzliche Höchstarbeitszeit überschreiten oder Ruhezeiten nicht einhalten, steht der Arbeitgeber in der Pflicht, etwas zu ändern. Wer die Daten erhebt, aber nicht handelt, kann sich nicht mehr darauf berufen, von nichts gewusst zu haben. Kroll rät deshalb, vor der Einführung klar festzulegen, was bei Verstößen geschieht.",
       "Für die Beschäftigten kann die Erfassung dagegen ein Vorteil sein, wenn es um Überstunden geht. Wer seine Mehrarbeit dokumentiert hat, kann sie leichter durch Freizeit ausgleichen oder sich auszahlen lassen. Bisher ging in der Vertrauensarbeitszeit vieles schlicht verloren, weil niemand nachweisen konnte, wie viel tatsächlich gearbeitet worden war. Gerade in Teams mit vielen Überstunden kann das im Jahr mehrere Wochen ausmachen.",
       "Ob die Vertrauensarbeitszeit dadurch verschwindet, ist umstritten. Viele Fachleute meinen, sie werde sich eher verändern als verschwinden. Wichtiger als die Frage, ob Zeiten aufgeschrieben werden, sei die Frage, was mit den Zahlen geschieht. Malte Jessen sieht es ähnlich: „Bei uns kann immer noch jeder anfangen und aufhören, wann er will. Wir schreiben es jetzt eben auf.“"
      ]
     },
     "aufgaben": [
      {
       "frage": "Frau Hartmann schreibt, dass bei Kessler Datensysteme bisher …",
       "opt": [
        "alle Beschäftigten ihre Zeiten von Hand notieren.",
        "die meisten Beschäftigten ohne Erfassung ihrer Arbeitszeit arbeiten.",
        "nur die Entwickler Vertrauensarbeitszeit haben."
       ],
       "loesung": 1,
       "stelle": "ohne dass irgendwo festgehalten wird, wann sie anfangen und aufhören",
       "erklaerung": "150 von 210 Beschäftigten arbeiten ohne jede Aufzeichnung."
      },
      {
       "frage": "An dem Artikel gefällt Frau Hartmann besonders …",
       "opt": [
        "das Beispiel eines Unternehmens, das flexible Arbeitszeiten beibehalten hat.",
        "die Beschreibung der rechtlichen Lage.",
        "die Ergebnisse der Umfrage unter Beschäftigten."
       ],
       "loesung": 0,
       "stelle": "trotz Erfassung behalten hat",
       "erklaerung": "Sie hebt die Firma hervor, die trotz Erfassung bei der Vertrauensarbeitszeit geblieben ist."
      },
      {
       "frage": "Frau Hartmann möchte die neue Regelung …",
       "opt": [
        "bis zur zweiten Dezemberwoche einführen.",
        "von der Rechtsabteilung ausarbeiten lassen.",
        "zusammen mit dem Betriebsrat erarbeiten."
       ],
       "loesung": 2,
       "stelle": "dass wir die Regelung gemeinsam mit dem Betriebsrat entwickeln",
       "erklaerung": "Die Dezemberwoche ist nur der Termin für ein erstes Treffen."
      },
      {
       "frage": "Seit dem Urteil des Bundesarbeitsgerichts …",
       "opt": [
        "müssen Arbeitgeber die Arbeitszeiten erfassen.",
        "ist Vertrauensarbeitszeit verboten.",
        "müssen alle Firmen eine elektronische Stechuhr anschaffen."
       ],
       "loesung": 0,
       "stelle": "dass Arbeitgeber die Arbeitszeit ihrer Beschäftigten systematisch erfassen müssen",
       "erklaerung": "Das Gericht hat eine Pflicht zur Erfassung festgestellt, aber keine bestimmte Form vorgeschrieben."
      },
      {
       "frage": "Laut Sabine Kroll …",
       "opt": [
        "ist nur eine elektronische Erfassung zulässig.",
        "können unter Umständen auch Listen auf Papier ausreichen.",
        "müssen Überstunden nicht erfasst werden."
       ],
       "loesung": 1,
       "stelle": "Auch handschriftliche Listen seien grundsätzlich möglich",
       "erklaerung": "Elektronisch ist praktisch, aber nicht zwingend; vollständige Listen reichen."
      },
      {
       "frage": "Laut der Umfrage …",
       "opt": [
        "lehnt die Mehrheit die Erfassung ab.",
        "befürchten die meisten mehr Überstunden.",
        "sieht die Mehrheit in der Erfassung einen Vorteil."
       ],
       "loesung": 2,
       "stelle": "58 Prozent der Befragten an, die Erfassung grundsätzlich zu begrüßen",
       "erklaerung": "58 Prozent begrüßen sie; die Sorge vor Kontrolle hat nur knapp ein Drittel."
      },
      {
       "frage": "Der Betriebsrat muss einem elektronischen System zustimmen, weil …",
       "opt": [
        "es zur Überwachung der Beschäftigten genutzt werden könnte.",
        "es Kosten für die Beschäftigten verursacht.",
        "es die Arbeitszeit verlängert."
       ],
       "loesung": 0,
       "stelle": "weil es dazu geeignet ist, das Verhalten der Beschäftigten zu überwachen",
       "erklaerung": "Schon die Eignung zur Überwachung löst die Zustimmungspflicht aus."
      },
      {
       "frage": "Bei Nordlicht Systems sehen Vorgesetzte …",
       "opt": [
        "die genauen Anfangs- und Endzeiten jedes Mitarbeiters.",
        "nur die gesamte Arbeitszeit einer Woche.",
        "keinerlei Daten zur Arbeitszeit."
       ],
       "loesung": 1,
       "stelle": "Vorgesetzte sehen nur die Summe der Wochenstunden",
       "erklaerung": "Einzelne Zeiten bleiben verborgen, sichtbar ist nur die Wochensumme."
      },
      {
       "frage": "Durch die Erfassung stellte sich bei Nordlicht heraus, dass …",
       "opt": [
        "viele Entwickler zu wenig arbeiteten.",
        "zwei Entwickler bereits gekündigt hatten.",
        "einige Beschäftigte deutlich zu viel arbeiteten."
       ],
       "loesung": 2,
       "stelle": "Einige Entwickler arbeiteten regelmäßig über fünfzig Stunden pro Woche",
       "erklaerung": "Zwei waren kurz vor einer Kündigung, hatten aber noch nicht gekündigt."
      },
      {
       "frage": "Die Einführung bei Nordlicht dauerte lange, weil …",
       "opt": [
        "man sich mit dem Betriebsrat über den Umgang mit den Daten einigen musste.",
        "die App erst entwickelt werden musste.",
        "die Beschäftigten das System ablehnten."
       ],
       "loesung": 0,
       "stelle": "Strittig war vor allem, wer Zugriff auf welche Daten erhält",
       "erklaerung": "Die Verhandlungen über Zugriff und Speicherdauer dauerten fast ein Jahr."
      },
      {
       "frage": "Für Arbeitgeber kann die Erfassung riskant sein, weil …",
       "opt": [
        "die Daten oft fehlerhaft sind.",
        "sie bei festgestellten Verstößen handeln müssen.",
        "die Beschäftigten mehr Lohn verlangen."
       ],
       "loesung": 1,
       "stelle": "steht der Arbeitgeber in der Pflicht, etwas zu ändern",
       "erklaerung": "Wer Verstöße sieht und nicht handelt, kann sich nicht mehr auf Unwissen berufen."
      },
      {
       "frage": "Für die Beschäftigten bringt die Erfassung den Vorteil, dass …",
       "opt": [
        "sie weniger arbeiten müssen.",
        "sie früher nach Hause gehen dürfen.",
        "sie Mehrarbeit besser nachweisen können."
       ],
       "loesung": 2,
       "stelle": "Wer seine Mehrarbeit dokumentiert hat",
       "erklaerung": "Dokumentierte Überstunden lassen sich ausgleichen oder auszahlen."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Mitteilung der Geschäftsführung an alle Mitarbeiter der Lorenz Versandhandel GmbH",
      "titel": "Ergebnisse der Mitarbeiterbefragung und nächste Schritte",
      "zeilen": [
       "Liebes Team, im September haben wir Sie gebeten, an unserer ersten Mitarbeiterbefragung __(1)__ fünf Jahren teilzunehmen. Mit 71 Prozent war die Beteiligung erfreulich hoch, und wir möchten uns bei allen __(2)__, die sich die Zeit genommen haben. Heute möchten wir Ihnen die wichtigsten Ergebnisse __(3)__ und darlegen, welche __(4)__ wir daraus ziehen.",
       "Besonders positiv bewertet wurden das Verhältnis zu den direkten Kollegen und die Sicherheit des Arbeitsplatzes. Auch die Arbeitszeiten und die Ausstattung der Arbeitsplätze erhielten überwiegend gute Noten. 84 Prozent __(5)__ Befragten gaben an, gern im Team zu arbeiten. Kritischer fielen die Antworten zur internen Kommunikation __(6)__. Viele von Ihnen haben angemerkt, dass Entscheidungen der Geschäftsführung zu spät oder gar nicht __(7)__ Belegschaft weitergegeben werden. Diese Kritik nehmen wir __(8)__.",
       "Auch die Möglichkeiten zur Weiterbildung wurden __(9)__ unzureichend eingeschätzt. Rund die Hälfte der Befragten wünscht sich mehr Unterstützung bei der beruflichen Entwicklung. Wir werden deshalb ab dem kommenden Jahr für jede Abteilung ein festes Budget für Weiterbildung __(10)__. Über die Verwendung __(11)__ die Abteilungsleiter gemeinsam mit ihren Teams.",
       "Um die Kommunikation zu verbessern, führen wir ab Januar eine monatliche Betriebsversammlung im __(12)__ von dreißig Minuten ein. Dort berichtet die Geschäftsführung über aktuelle Entwicklungen und __(13)__ Fragen aus der Belegschaft. Wer nicht persönlich teilnehmen kann, hat die Möglichkeit, sich online __(14)__. Zusätzlich erscheint ab Februar ein Newsletter, __(15)__ Sie alle zwei Wochen per E-Mail erhalten.",
       "Ein weiteres Ergebnis betrifft die Arbeitsbelastung. In einigen Abteilungen, vor allem im Kundenservice, gaben viele an, regelmäßig unter Zeitdruck zu __(16)__. Wir werden die Personalplanung dort gemeinsam mit dem Betriebsrat __(17)__ den Prüfstand stellen. Erste Gespräche haben bereits __(18)__. Bis zum Frühjahr sollen dort außerdem zwei zusätzliche Stellen besetzt werden.",
       "Natürlich lassen sich nicht alle Wünsche sofort __(19)__. Wir haben uns aber vorgenommen, in einem Jahr erneut eine Befragung __(20)__, um zu sehen, ob die Maßnahmen wirken. Die ausführlichen Ergebnisse können Sie ab sofort im Intranet __(21)__. Für Rückfragen stehen Ihnen Ihre Vorgesetzten und die Personalabteilung jederzeit __(22)__ Verfügung. Vielen Dank für Ihre Offenheit.",
       "Ihre Geschäftsführung"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "seit",
        "vor",
        "nach",
        "ab"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Zeitraum bis heute: „die erste Befragung seit fünf Jahren“."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "danken",
        "bedanken",
        "verdanken",
        "bedankt"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Reflexiv: „sich bei jemandem bedanken“; Infinitiv nach „möchten“."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "vorwerfen",
        "vorbeugen",
        "vorstellen",
        "vorenthalten"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Ergebnisse werden „vorgestellt“ = präsentiert."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Beschlüsse",
        "Abschlüsse",
        "Verschlüsse",
        "Schlüsse"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Verbindung: „Schlüsse aus etwas ziehen“."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "die",
        "der",
        "den",
        "des"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Genitiv Plural nach Prozentangabe: „84 Prozent der Befragten“."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "aus",
        "an",
        "auf",
        "ab"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Antworten fallen kritisch aus“ = sie sind kritisch."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "zur",
        "bei der",
        "für die",
        "an die"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„etwas an jemanden weitergeben“: Akkusativ, „an die Belegschaft“."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "schwer",
        "wichtig",
        "ernst",
        "genau"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Verbindung: „etwas ernst nehmen“."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "wie",
        "für",
        "als",
        "so"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„etwas als unzureichend einschätzen“."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "darstellen",
        "herstellen",
        "zustellen",
        "bereitstellen"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Ein Budget wird „bereitgestellt“ = zur Verfügung gestellt."
      },
      {
       "frage": "Was passt in Lücke 11?",
       "luecke": 11,
       "opt": [
        "entscheiden",
        "entschließen",
        "scheiden",
        "bescheiden"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„über etwas entscheiden“."
      },
      {
       "frage": "Was passt in Lücke 12?",
       "luecke": 12,
       "opt": [
        "Umkreis",
        "Umfang",
        "Umlauf",
        "Umgang"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„im Umfang von dreißig Minuten“ = dreißig Minuten lang."
      },
      {
       "frage": "Was passt in Lücke 13?",
       "luecke": 13,
       "opt": [
        "antwortet",
        "verantwortet",
        "überantwortet",
        "beantwortet"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„Fragen beantworten“ mit Akkusativ; „antworten“ bräuchte „auf“."
      },
      {
       "frage": "Was passt in Lücke 14?",
       "luecke": 14,
       "opt": [
        "abzuschalten",
        "zuzuschalten",
        "umzuschalten",
        "auszuschalten"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„sich online zuschalten“ = per Video teilnehmen."
      },
      {
       "frage": "Was passt in Lücke 15?",
       "luecke": 15,
       "opt": [
        "den",
        "der",
        "dem",
        "das"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Relativpronomen im Akkusativ Maskulin: „den Newsletter erhalten“."
      },
      {
       "frage": "Was passt in Lücke 16?",
       "luecke": 16,
       "opt": [
        "stellen",
        "legen",
        "stehen",
        "setzen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Verbindung: „unter Zeitdruck stehen“."
      },
      {
       "frage": "Was passt in Lücke 17?",
       "luecke": 17,
       "opt": [
        "an",
        "auf",
        "vor",
        "in"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Wendung: „etwas auf den Prüfstand stellen“ = prüfen."
      },
      {
       "frage": "Was passt in Lücke 18?",
       "luecke": 18,
       "opt": [
        "stattgegeben",
        "standgehalten",
        "stattgefunden",
        "teilgenommen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„Gespräche haben stattgefunden“."
      },
      {
       "frage": "Was passt in Lücke 19?",
       "luecke": 19,
       "opt": [
        "umsteigen",
        "umfallen",
        "umgehen",
        "umsetzen"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Wünsche werden „umgesetzt“ = verwirklicht."
      },
      {
       "frage": "Was passt in Lücke 20?",
       "luecke": 20,
       "opt": [
        "durchzuführen",
        "durchführen",
        "durchgeführt",
        "durchzuführt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach „sich vornehmen“ folgt „zu“ + Infinitiv; bei trennbaren Verben steht „zu“ in der Mitte."
      },
      {
       "frage": "Was passt in Lücke 21?",
       "luecke": 21,
       "opt": [
        "einsehen",
        "einschätzen",
        "einsetzen",
        "eingehen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Unterlagen einsehen“ = lesen, Einblick nehmen."
      },
      {
       "frage": "Was passt in Lücke 22?",
       "luecke": 22,
       "opt": [
        "zu",
        "zur",
        "in",
        "bei"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Verbindung: „zur Verfügung stehen“."
      }
     ]
    }
   ]
  }
 ]
};
