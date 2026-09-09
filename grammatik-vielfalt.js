/* grammatik-vielfalt.js — erzeugt von bau/mach-grammatik-vielfalt.js
   Nicht von Hand aendern: der naechste Lauf ueberschreibt die Datei.
   Merkkarten, Fehlersuchen und Zuordnen fuer den Bereich Grammatik.
   Erzeugt am 2026-09-09. */
(function () {
  var Z = {
 "adjektivdeklination": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📐",
   "wort": "Das Adjektiv ergänzt, was der Artikel nicht sagt",
   "info": "Steht ein klarer Artikel davor (der, die, das), reicht dem Adjektiv ein leises -e oder -en. Fehlt der Artikel, muss das Adjektiv die Arbeit übernehmen und die Endung des Artikels tragen.",
   "beispiele": [
    {
     "satz": "der alte Mann — ein alter Mann",
     "warum": "ohne klaren Artikel trägt das Adjektiv -er"
    },
    {
     "satz": "das kleine Kind — ein kleines Kind",
     "warum": "dasselbe Spiel mit -es"
    },
    {
     "satz": "Starker Kaffee schmeckt morgens super.",
     "warum": "gar kein Artikel: volle Endung"
    }
   ]
  },
  {
   "type": "fehler",
   "satz": "Ich sehe einen großer Hund.",
   "falsch": "großer",
   "richtig": "großen",
   "explain": "einen (Akk. mask.) → -en: einen großen Hund."
  },
  {
   "type": "fehler",
   "satz": "Starke Kaffee schmeckt morgens super.",
   "falsch": "Starke",
   "richtig": "Starker",
   "explain": "Ohne Artikel zeigt das Adjektiv das Genus: Starker Kaffee (mask.)."
  },
  {
   "type": "fehler",
   "satz": "Ich kaufe ein neuer Auto.",
   "falsch": "neuer",
   "richtig": "neues",
   "explain": "ein + neutral → -es: ein neues Auto."
  },
  {
   "type": "fehler",
   "satz": "Das ist der alter Mann.",
   "falsch": "alter",
   "richtig": "alte",
   "explain": "der + Nominativ → -e: der alte Mann."
  },
  {
   "type": "match",
   "intro": "Welche Form gehört in welchen Satz?",
   "pairs": [
    {
     "l": "Eine _____ Idee!",
     "r": "gute"
    },
    {
     "l": "Ich sehe einen _____ Hund.",
     "r": "großen"
    },
    {
     "l": "_____ Kaffee schmeckt morgens super.",
     "r": "Starker"
    },
    {
     "l": "Ich kaufe ein _____ Auto.",
     "r": "neues"
    }
   ]
  },
  {
   "type": "match",
   "intro": "Welche Form gehört in welchen Satz?",
   "pairs": [
    {
     "l": "Das ist der _____ Mann.",
     "r": "alte"
    },
    {
     "l": "Das sind _____ Schuhe.",
     "r": "bequeme"
    },
    {
     "l": "Wir wohnen in der _____ Straße.",
     "r": "ruhigen"
    },
    {
     "l": "Ich suche eine _____ Wohnung.",
     "r": "günstige"
    }
   ]
  }
 ],
 "genitiv": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📐",
   "wort": "Der Genitiv sagt, wem etwas gehört",
   "info": "Maskulin und neutral heißt es des und das Nomen bekommt ein -s. Feminin und Plural heißt es der, ohne Anhängsel. Gesprochen weicht man oft auf von + Dativ aus — geschrieben bleibt der Genitiv.",
   "beispiele": [
    {
     "satz": "das Auto des Mannes",
     "warum": "maskulin: des + -es"
    },
    {
     "satz": "die Farbe der Tür",
     "warum": "feminin: der, kein -s"
    },
    {
     "satz": "wegen des schlechten Wetters",
     "warum": "wegen, trotz, während nehmen den Genitiv"
    }
   ]
  },
  {
   "type": "fehler",
   "satz": "Die Farbe des Tür gefällt mir.",
   "falsch": "des",
   "richtig": "der",
   "explain": "feminin Genitiv → der Tür."
  },
  {
   "type": "fehler",
   "satz": "Das ist das Auto der Mannes.",
   "falsch": "der",
   "richtig": "des",
   "explain": "maskulin Genitiv → des Mannes."
  },
  {
   "type": "fehler",
   "satz": "Am Ende des Woche fahren wir weg.",
   "falsch": "des",
   "richtig": "der",
   "explain": "die Woche ist feminin: der Woche."
  }
 ],
 "indirekte-rede": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📐",
   "wort": "Wer wiedergibt, was ein anderer sagte, nimmt Konjunktiv I",
   "info": "In Nachrichten und Berichten zeigt der Konjunktiv I: Das sind nicht meine Worte. Er entsteht aus dem Verbstamm plus -e. Klingt die Form genauso wie der Indikativ, weicht man auf den Konjunktiv II aus.",
   "beispiele": [
    {
     "satz": "Er sagt, er sei krank.",
     "warum": "sein wird zu sei"
    },
    {
     "satz": "Sie sagt, sie habe keine Zeit.",
     "warum": "haben wird zu habe"
    },
    {
     "satz": "Sie sagen, sie kämen später.",
     "warum": "kommen klänge gleich — also Konjunktiv II"
    }
   ]
  }
 ],
 "konjunktiv2": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📐",
   "wort": "Konjunktiv II ist die Form für alles, was nicht ist",
   "info": "Wünsche, Vorstellungen, höfliche Bitten. Bei sein, haben und den Modalverben gibt es eine eigene Form: wäre, hätte, könnte, müsste. Bei allen anderen Verben nimmt man würde plus Infinitiv — das ist kein Notbehelf, sondern der Normalfall.",
   "beispiele": [
    {
     "satz": "Ich wäre jetzt gern im Urlaub.",
     "warum": "sein hat eine eigene Form"
    },
    {
     "satz": "Könnten Sie mir bitte helfen?",
     "warum": "höflich statt können"
    },
    {
     "satz": "Ich würde gern früher anfangen.",
     "warum": "alle anderen Verben: würde"
    }
   ]
  }
 ],
 "konnektoren": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📐",
   "wort": "Deshalb, trotzdem, außerdem — und das Verb bleibt auf Platz zwei",
   "info": "Diese Wörter verbinden zwei Hauptsätze. Sie besetzen selbst den ersten Platz, deshalb rückt das Subjekt hinter das Verb. Kein Nebensatz, keine Endstellung — nur die Umkehrung.",
   "beispiele": [
    {
     "satz": "Es regnet. Deshalb bleiben wir zu Hause.",
     "warum": "Grund vorher, Folge danach"
    },
    {
     "satz": "Es regnet. Trotzdem gehen wir spazieren.",
     "warum": "Gegensatz: es passiert doch"
    },
    {
     "satz": "Die Wohnung ist günstig. Außerdem ist sie hell.",
     "warum": "ein zweites Argument"
    }
   ]
  }
 ],
 "nebensaetze": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📐",
   "wort": "Der Nebensatz stellt das Verb hinten an",
   "info": "Im Hauptsatz steht das Verb auf Platz zwei. Im Nebensatz steht es am Ende. Wenn der Nebensatz vorne steht, ist er selbst das erste Satzglied — dann kommt gleich danach das Verb des Hauptsatzes.",
   "beispiele": [
    {
     "satz": "Ich komme später, weil der Zug Verspätung hat.",
     "warum": "hat steht ganz hinten"
    },
    {
     "satz": "Obwohl es spät war, sind wir noch losgefahren.",
     "warum": "Nebensatz vorn, dann sofort das Verb"
    },
    {
     "satz": "Er sagt, dass er morgen anrufen will.",
     "warum": "Modalverb hinter dem Infinitiv"
    }
   ]
  }
 ],
 "passiv-praesens": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📐",
   "wort": "Im Passiv zählt die Handlung, nicht der Täter",
   "info": "werden plus Partizip II. Wer es tut, darf ganz wegbleiben — genau dafür gibt es das Passiv. Soll der Täter doch genannt werden, kommt er mit von + Dativ dazu.",
   "beispiele": [
    {
     "satz": "Das Brot wird jeden Morgen gebacken.",
     "warum": "wer backt, ist egal"
    },
    {
     "satz": "Die Pakete werden heute ausgeliefert.",
     "warum": "Plural: werden"
    },
    {
     "satz": "Der Antrag wird vom Amt geprüft.",
     "warum": "von + Dativ nennt den Täter"
    }
   ]
  },
  {
   "type": "fehler",
   "satz": "Wann werdet die Pakete ausgeliefert?",
   "falsch": "werdet",
   "richtig": "werden",
   "explain": "Das Subjekt ist Plural, also werden."
  }
 ],
 "passiv-vergangenheit": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📐",
   "wort": "wurde gebaut oder ist gebaut worden?",
   "info": "Im Präteritum heißt es wurde plus Partizip II — das ist die Form für Texte. Gesprochen nimmt man das Perfekt: ist … worden. Das worden am Ende hat kein ge-, das ist der häufigste Fehler.",
   "beispiele": [
    {
     "satz": "Die Kirche wurde im 12. Jahrhundert gebaut.",
     "warum": "Präteritum Passiv"
    },
    {
     "satz": "Mein Fahrrad ist gestern repariert worden.",
     "warum": "Perfekt Passiv, eher gesprochen"
    },
    {
     "satz": "nicht: ist geworden — sondern: ist worden",
     "warum": "im Passiv fällt das ge- weg"
    }
   ]
  }
 ],
 "perfekt-praeteritum": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📐",
   "wort": "Gesprochen Perfekt, geschrieben Präteritum — mit Ausnahmen",
   "info": "Im Gespräch erzählt man im Perfekt. In Texten und Berichten steht das Präteritum. Sein, haben und die Modalverben halten sich nicht daran: die sagt man auch im Gespräch im Präteritum.",
   "beispiele": [
    {
     "satz": "Gestern bin ich ins Kino gegangen.",
     "warum": "gesprochen: Perfekt"
    },
    {
     "satz": "Ich hatte keine Zeit.",
     "warum": "haben trotzdem im Präteritum"
    },
    {
     "satz": "Er ging zum Fenster und öffnete es.",
     "warum": "geschrieben: Präteritum"
    }
   ]
  }
 ],
 "relativsaetze": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📐",
   "wort": "Der Relativsatz erklärt ein Wort, das schon dasteht",
   "info": "Das Relativpronomen holt sein Geschlecht und seine Zahl beim Wort davor ab. Welchen Fall es bekommt, entscheidet aber der Relativsatz selbst: Wer dort etwas tut, steht im Nominativ; wen es trifft, im Akkusativ.",
   "beispiele": [
    {
     "satz": "Das ist die Frau, die nebenan wohnt.",
     "warum": "sie wohnt — Nominativ"
    },
    {
     "satz": "Das ist der Film, den ich gesehen habe.",
     "warum": "ich sah ihn — Akkusativ"
    },
    {
     "satz": "Das ist das Kind, dem ich geholfen habe.",
     "warum": "helfen verlangt den Dativ"
    }
   ]
  },
  {
   "type": "fehler",
   "satz": "Das ist das Kind, den ich ein Buch gebe.",
   "falsch": "den",
   "richtig": "dem",
   "explain": "ich gebe ihm (wem?) → Dativ neutral = dem."
  },
  {
   "type": "fehler",
   "satz": "Das ist der Kollege, mit den ich das Projekt mache.",
   "falsch": "den",
   "richtig": "dem",
   "explain": "mit + Dativ, maskulin Singular → dem."
  },
  {
   "type": "fehler",
   "satz": "Der Chef, von den ich viel gelernt habe, geht in Rente.",
   "falsch": "den",
   "richtig": "dem",
   "explain": "von + Dativ, maskulin → dem."
  },
  {
   "type": "fehler",
   "satz": "Das Werkzeug, mit der man das repariert, ist teuer.",
   "falsch": "der",
   "richtig": "dem",
   "explain": "mit + Dativ, Neutrum → dem."
  },
  {
   "type": "match",
   "intro": "Welche Form gehört in welchen Satz?",
   "pairs": [
    {
     "l": "Das ist das Kind, _____ ich ein Buch gebe.",
     "r": "dem"
    },
    {
     "l": "Das ist der Film, _____ ich gestern gesehen habe.",
     "r": "den"
    },
    {
     "l": "„Das ist der Nachbar, _____ WG ich oft besuche.“",
     "r": "dessen"
    },
    {
     "l": "„Die Kollegen, mit _____ ich arbeite, sind sehr nett.“",
     "r": "denen"
    }
   ]
  }
 ],
 "temporale-nebensaetze": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📐",
   "wort": "Bevor, während, nachdem — drei Wörter für drei Zeitpunkte",
   "info": "Sie sagen, wann etwas passiert: davor, gleichzeitig oder danach. Nach nachdem verschiebt sich die Zeit um eine Stufe zurück — Perfekt trifft Präsens, Plusquamperfekt trifft Präteritum.",
   "beispiele": [
    {
     "satz": "Bevor ich gehe, schließe ich das Fenster.",
     "warum": "erst das, dann jenes"
    },
    {
     "satz": "Während ich koche, höre ich Podcasts.",
     "warum": "beides zur selben Zeit"
    },
    {
     "satz": "Nachdem ich gegessen hatte, ging ich spazieren.",
     "warum": "danach — mit Zeitstufe zurück"
    }
   ]
  }
 ],
 "wechselpraepositionen": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📐",
   "wort": "Wohin? nimmt den Akkusativ, Wo? den Dativ",
   "info": "Neun Präpositionen können beides: in, an, auf, über, unter, vor, hinter, neben, zwischen. Die Frage entscheidet. Bewegt sich etwas an einen neuen Ort, steht der Akkusativ. Bleibt es, wo es ist, steht der Dativ.",
   "beispiele": [
    {
     "satz": "Ich lege das Buch auf den Tisch.",
     "warum": "Wohin? — Akkusativ"
    },
    {
     "satz": "Das Buch liegt auf dem Tisch.",
     "warum": "Wo? — Dativ"
    },
    {
     "satz": "stellen, legen, setzen, hängen = Bewegung",
     "warum": "stehen, liegen, sitzen, hängen = Ort"
    }
   ]
  },
  {
   "type": "match",
   "intro": "Welche Form gehört in welchen Satz?",
   "pairs": [
    {
     "l": "Ich lege das Buch _____ Tisch.",
     "r": "auf den"
    },
    {
     "l": "Das Buch liegt _____ Tisch.",
     "r": "auf dem"
    },
    {
     "l": "Häng die Jacke _____ Haken.",
     "r": "an den"
    },
    {
     "l": "Das Bild hängt _____ Sofa.",
     "r": "über dem"
    }
   ]
  }
 ],
 "nominalisierung": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📝",
   "wort": "Vier Paare — und alle mit Genitiv",
   "info": "Diese vier decken fast alles ab, was in Briefen, Berichten und Prüfungstexten vorkommt. Alle stehen mit dem Genitiv; im gesprochenen Deutsch hört man daneben oft den Dativ, geschrieben gilt er als Fehler.",
   "beispiele": [
    {
     "satz": "Wegen der Verspätung kam er zu spät.",
     "warum": "wegen"
    },
    {
     "satz": "Trotz des Regens sind wir gelaufen.",
     "warum": "trotz"
    },
    {
     "satz": "Während der Sitzung war er still.",
     "warum": "während"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Und wann man es besser lässt",
   "info": "Nominalisierung macht einen Text sachlich — und ab einer bestimmten Dichte unlesbar. Diese drei Hinweise entscheiden darüber, ob es gut oder nach Amt klingt.",
   "beispiele": [
    {
     "satz": "pro Satz — Ein oder zwei Nomen machen den Satz präzise. Ab dem dritten verliert der Leser den Anfang: Zur Sicherstellung der Bearbeitung der Anträge …",
     "warum": "Höchstens zwei"
    },
    {
     "satz": "ein echtes — Wenn am Ende nur noch erfolgt, besteht oder ist steht, hast du zu viel umgeformt. Ein Satz braucht ein Verb mit Inhalt.",
     "warum": "Das Verb muss bleiben"
    },
    {
     "satz": "wieder Nebensatz — Beim Sprechen dreht man es um: Wegen des Regens wird wieder zu weil es geregnet hat. Beide Richtungen zu können, ist das eigentliche Ziel.",
     "warum": "Gesprochen zurück"
    }
   ]
  }
 ],
 "a1-artikel": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📐",
   "wort": "Es gibt keine Logik — aber es gibt Endungen",
   "info": "Der Artikel hat mit dem Ding selbst nichts zu tun: das Mädchen ist sächlich, obwohl ein Mädchen ein Mensch ist. Aber die Endung eines Wortes verrät den Artikel sehr oft. Diese Endungen sind zuverlässig — sie decken einen großen Teil des Wortschatzes ab.",
   "beispiele": [
    {
     "satz": "die Wohnung, die Freiheit, die Nation",
     "warum": "die"
    },
    {
     "satz": "das Mädchen, das Dokument",
     "warum": "das"
    },
    {
     "satz": "der Lehrer, der Frühling",
     "warum": "der"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Und wie lernt man den Rest?",
   "info": "Für alles, was keine verräterische Endung hat, hilft nur ein System. Diese drei funktionieren wirklich — such dir eines aus und bleib dabei.",
   "beispiele": [
    {
     "satz": "drei Stifte — Schreib der blau, die rot, das grün. Nach ein paar Wochen siehst du den Artikel vor dir, bevor du ihn weißt.",
     "warum": "Farben"
    },
    {
     "satz": "nie einzeln — Lern nicht Tisch, sondern Der Tisch steht in der Küche. Im Satz merkt sich das Gehirn den Artikel automatisch mit.",
     "warum": "Ganze Sätze"
    },
    {
     "satz": "was zusammengehört — Tage, Monate, Jahreszeiten und Wetter sind fast alle der: der Montag, der Mai, der Sommer, der Regen.",
     "warum": "Gruppen"
    }
   ]
  },
  {
   "type": "fehler",
   "satz": "Ich habe ein Hund.",
   "falsch": "ein",
   "richtig": "einen",
   "explain": "haben braucht den Akkusativ. Maskulin: der Hund → einen Hund."
  },
  {
   "type": "fehler",
   "satz": "Das ist eine Auto.",
   "falsch": "eine",
   "richtig": "ein",
   "explain": "das Auto ist neutrum → ein Auto. Nach sein steht kein Akkusativ, sondern der Nominativ."
  },
  {
   "type": "fehler",
   "satz": "Ich brauche ein Stift.",
   "falsch": "ein",
   "richtig": "einen",
   "explain": "brauchen braucht den Akkusativ, der Stift ist maskulin → einen Stift."
  }
 ],
 "a1-praesens": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔤",
   "wort": "Sechs Endungen — und drei klingen gleich",
   "info": "Das ist die ganze Tabelle. Sieh dir wir, sie und Sie an: Alle drei sind gleich wie der Infinitiv. Damit musst du dir eigentlich nur vier Formen merken.",
   "beispiele": [
    {
     "satz": "ich komme",
     "warum": "-e"
    },
    {
     "satz": "du kommst",
     "warum": "-st"
    },
    {
     "satz": "er kommt",
     "warum": "-t"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Die drei Fälle, die anders sind",
   "info": "Neben den regelmäßigen Verben gibt es genau drei Gruppen, die etwas Eigenes machen. Alle drei betreffen nur du und er/sie/es.",
   "beispiele": [
    {
     "satz": "fahren → du fährst — Nur bei du und er/sie/es: schlafen → sie schläft, fahren → du fährst. Sonst bleibt alles normal.",
     "warum": "a wird ä"
    },
    {
     "satz": "sprechen → du sprichst — Ebenfalls nur in diesen beiden Formen: essen → er isst, nehmen → du nimmst, lesen → sie liest.",
     "warum": "e wird i"
    },
    {
     "satz": "ich bin, ich habe — Die zwei wichtigsten Verben sind unregelmäßig: ich bin, du bist, er ist · ich habe, du hast, er hat.",
     "warum": "sein und haben"
    }
   ]
  },
  {
   "type": "fehler",
   "satz": "Er stehe jeden Tag um sechs auf.",
   "falsch": "stehe",
   "richtig": "steht",
   "explain": "er/sie/es + t: er steht auf. Das Präfix auf steht am Satzende."
  },
  {
   "type": "fehler",
   "satz": "Ihr hat heute keine Zeit.",
   "falsch": "hat",
   "richtig": "habt",
   "explain": "haben ist unregelmäßig: ich habe, du hast, er hat, wir haben, ihr habt, sie haben."
  },
  {
   "type": "fehler",
   "satz": "Seit ihr aus Deutschland?",
   "falsch": "Seit",
   "richtig": "Seid",
   "explain": "ihr seid. Vorsicht: seit mit t ist eine Zeitangabe, kein Verb."
  },
  {
   "type": "fehler",
   "satz": "Wir wohnt in Hamburg.",
   "falsch": "wohnt",
   "richtig": "wohnen",
   "explain": "wir + Infinitiv-Form: wir wohnen."
  },
  {
   "type": "match",
   "intro": "Welche Form gehört in welchen Satz?",
   "pairs": [
    {
     "l": "Er _____ jeden Tag um sechs auf.",
     "r": "steht"
    },
    {
     "l": "Ihr _____ heute keine Zeit.",
     "r": "habt"
    },
    {
     "l": "_____ ihr aus Deutschland?",
     "r": "Seid"
    },
    {
     "l": "Wir _____ in Hamburg.",
     "r": "wohnen"
    }
   ]
  }
 ],
 "a1-akkusativ": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🎯",
   "wort": "Wen oder was? Das ist die Frage",
   "info": "Du findest das Akkusativobjekt, indem du nach dem Verb wen oder was? fragst. Ich kaufe … was? … den Tee. Das Wort, das antwortet, steht im Akkusativ.",
   "beispiele": [
    {
     "satz": "den Tee, einen Tee",
     "warum": "der Tee, ein Tee"
    },
    {
     "satz": "die Milch, eine Milch",
     "warum": "die Milch, eine Milch"
    },
    {
     "satz": "das Brot, ein Brot",
     "warum": "das Brot, ein Brot"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Wo du ihn jeden Tag brauchst",
   "info": "Der Akkusativ ist kein Prüfungsthema — er steckt in fast jedem Satz, den du im Alltag sagst. Diese drei Stellen kommen am häufigsten vor.",
   "beispiele": [
    {
     "satz": "Ich nehme den … — Ich nehme den Mantel. · Ich hätte gern einen Kaffee. — hier hörst du den Akkusativ am öftesten.",
     "warum": "Einkaufen"
    },
    {
     "satz": "Ich habe einen … — Ich habe einen Termin. · Ich brauche einen Ausweis. — nach haben und brauchen steht immer der Akkusativ.",
     "warum": "Haben und brauchen"
    },
    {
     "satz": "Ich habe keinen … — Ich habe keinen Hunger. · Ich habe keinen Termin. — kein verhält sich genau wie ein.",
     "warum": "Verneinen"
    }
   ]
  },
  {
   "type": "fehler",
   "satz": "Ich sehe der Mann.",
   "falsch": "der",
   "richtig": "den",
   "explain": "Maskulin im Akkusativ: der → den. Nur diese eine Form ändert sich."
  },
  {
   "type": "fehler",
   "satz": "Ich brauche ein neuen Stuhl.",
   "falsch": "ein",
   "richtig": "einen",
   "explain": "ein → einen bei maskulin im Akkusativ. Das Adjektiv bekommt dann -en: einen neuen Stuhl."
  },
  {
   "type": "fehler",
   "satz": "Sie sucht ein Wohnung.",
   "falsch": "ein",
   "richtig": "eine",
   "explain": "die Wohnung ist feminin → eine, im Nominativ wie im Akkusativ."
  },
  {
   "type": "fehler",
   "satz": "Ich möchte ein Kaffee, bitte.",
   "falsch": "ein",
   "richtig": "einen",
   "explain": "der Kaffee ist maskulin, möchten braucht den Akkusativ → einen Kaffee."
  },
  {
   "type": "match",
   "intro": "Welche Form gehört in welchen Satz?",
   "pairs": [
    {
     "l": "Ich sehe _____ Mann.",
     "r": "den"
    },
    {
     "l": "Ich brauche _____ neuen Stuhl.",
     "r": "einen"
    },
    {
     "l": "Sie sucht _____ Wohnung.",
     "r": "eine"
    },
    {
     "l": "Das Kind isst _____ Brötchen.",
     "r": "ein"
    }
   ]
  }
 ],
 "a1-fragen": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "❓",
   "wort": "Zwei Bauweisen — mehr gibt es nicht",
   "info": "Vergleich die drei Zeilen. Im Aussagesatz steht das Subjekt vorn. In der Ja-Nein-Frage tauschen Verb und Subjekt einfach die Plätze. In der W-Frage schiebt sich das W-Wort davor.",
   "beispiele": [
    {
     "satz": "Position 2",
     "warum": "Du kommst um acht."
    },
    {
     "satz": "Position 1",
     "warum": "Kommst du um acht?"
    },
    {
     "satz": "Position 2",
     "warum": "Wann kommst du?"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "wo, woher oder wohin?",
   "info": "Drei W-Wörter sehen sich ähnlich und werden ständig verwechselt. Der Unterschied ist die Richtung.",
   "beispiele": [
    {
     "satz": "wo — Wo du gerade bist. Wo wohnst du? — In Hagen.",
     "warum": "der Ort"
    },
    {
     "satz": "woher — Wo du herkommst. Woher kommst du? — Aus Polen.",
     "warum": "der Anfang"
    },
    {
     "satz": "wohin — Wo du hingehst. Wohin gehst du? — Nach Hause.",
     "warum": "das Ziel"
    }
   ]
  },
  {
   "type": "fehler",
   "satz": "Woher gehst du am Wochenende?",
   "falsch": "Woher",
   "richtig": "Wohin",
   "explain": "wohin fragt nach dem Ziel einer Bewegung: Wohin gehst du?"
  }
 ],
 "modalverben": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔑",
   "wort": "Die Satzklammer: vorn gebeugt, hinten im Infinitiv",
   "info": "Modalverb und Infinitiv bilden eine Klammer um den Satz. Alles, was dazugehört — wen, wann, wo —, steht dazwischen. Je länger der Satz, desto weiter liegen die beiden Teile auseinander.",
   "beispiele": [
    {
     "satz": "Ich kann gut schwimmen.",
     "warum": "Fähigkeit oder Möglichkeit"
    },
    {
     "satz": "Ich muss um sieben aufstehen.",
     "warum": "notwendig, es geht nicht anders"
    },
    {
     "satz": "Hier darf man parken.",
     "warum": "Erlaubnis"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "müssen, sollen, dürfen — wer will das eigentlich?",
   "info": "Drei Verben sagen, dass etwas zu tun ist. Der Unterschied liegt darin, von wem es kommt.",
   "beispiele": [
    {
     "satz": "müssen — Es geht nicht anders. Ich muss heute zum Amt, sonst ist die Frist vorbei.",
     "warum": "Notwendig"
    },
    {
     "satz": "sollen — Ein anderer findet es richtig. Der Arzt sagt, ich soll mich ausruhen.",
     "warum": "Ein Rat"
    },
    {
     "satz": "dürfen — Es ist erlaubt. Im Hof darf man parken, auf dem Gehweg nicht.",
     "warum": "Erlaubt"
    }
   ]
  }
 ],
 "trennbare-verben": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "✂️",
   "wort": "Die Vorsilbe wandert ans Ende",
   "info": "Das Verb hat zwei Teile: die Vorsilbe (auf-, ein-, an-, ab-, mit-) und den Stamm (stehen, kaufen, rufen). Im Hauptsatz trennen sie sich. Alles, was dazugehört, steht dazwischen.",
   "beispiele": [
    {
     "satz": "Ich stehe um sechs auf.",
     "warum": "aus dem Bett kommen"
    },
    {
     "satz": "Wir kaufen am Samstag ein.",
     "warum": "Lebensmittel besorgen"
    },
    {
     "satz": "Sie ruft ihre Mutter an.",
     "warum": "telefonieren"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Getrennt oder zusammen?",
   "info": "Es gibt nur drei Fälle. Wenn du sie einmal nebeneinander siehst, verwechselst du sie kaum noch.",
   "beispiele": [
    {
     "satz": "getrennt — Die Vorsilbe geht ans Satzende. Ich stehe jeden Tag um sechs auf.",
     "warum": "Normaler Satz"
    },
    {
     "satz": "zusammen — Später lernst du: Im Nebensatz bleibt alles in einem Wort. …, weil ich um sechs aufstehe.",
     "warum": "Nach weil, dass, wenn"
    },
    {
     "satz": "zusammen — Nach einem Modalverb bleibt das Verb ganz. Ich muss um sechs aufstehen.",
     "warum": "Nach muss, kann, will"
    }
   ]
  }
 ],
 "perfekt-bilden": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "⏮️",
   "wort": "Zwei Teile, eine Klammer",
   "info": "Das gebeugte Verb steht an zweiter Stelle, das Partizip ganz am Ende. Dazwischen kommt alles andere. Beim Sprechen erzählt man auf Deutsch fast immer im Perfekt — das Präteritum liest man eher in Büchern.",
   "beispiele": [
    {
     "satz": "machen → gemacht",
     "warum": "ge…t"
    },
    {
     "satz": "sehen → gesehen",
     "warum": "ge…en"
    },
    {
     "satz": "einkaufen → eingekauft",
     "warum": "Vorsilbe + ge + Rest"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Wann nimmst du sein?",
   "info": "Nur drei Gruppen bekommen sein. Es sind wenige Verben, aber sehr häufige.",
   "beispiele": [
    {
     "satz": "von A nach B — gehen, fahren, fliegen, kommen, laufen, reisen. Ich bin zur Arbeit gelaufen.",
     "warum": "Bewegung"
    },
    {
     "satz": "ein Zustand kippt — aufstehen, einschlafen, aufwachen, passieren. Er ist spät aufgewacht.",
     "warum": "Veränderung"
    },
    {
     "satz": "sein, bleiben, werden — Sie merkt man sich extra. Ich bin zu Hause geblieben.",
     "warum": "Drei Einzelne"
    }
   ]
  }
 ],
 "dativ": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🎁",
   "wort": "der wird dem, die wird der",
   "info": "Im Dativ ändern sich die Artikel nach einem festen Muster. Zwei Dinge muss man wissen: die wird zu der — das verwirrt am meisten —, und im Plural bekommt auch das Nomen ein -n.",
   "beispiele": [
    {
     "satz": "Ich helfe dem Mann.",
     "warum": "der Mann"
    },
    {
     "satz": "Ich helfe der Frau.",
     "warum": "die Frau"
    },
    {
     "satz": "Ich helfe dem Kind.",
     "warum": "das Kind"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Diese Verben wollen immer den Dativ",
   "info": "Bei den meisten Verben fragst du Wen oder was? Bei dieser kleinen Gruppe aber immer Wem? — auch wenn es in anderen Sprachen anders ist.",
   "beispiele": [
    {
     "satz": "helfen, danken — Ich helfe dir. Ich danke Ihnen. Nie ich helfe dich.",
     "warum": "Hilfe und Dank"
    },
    {
     "satz": "gehören — Das Buch gehört meiner Schwester.",
     "warum": "Besitz"
    },
    {
     "satz": "gefallen, schmecken — Die Wohnung gefällt mir. Die Suppe schmeckt ihm.",
     "warum": "Gefühl"
    }
   ]
  }
 ],
 "possessivartikel": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔐",
   "wort": "Die Endung kommt vom Wort danach",
   "info": "Erst fragst du: Wer besitzt? Das gibt dir das Wort — mein, dein, sein. Dann fragst du: Was ist das Nomen? Das gibt dir die Endung.",
   "beispiele": [
    {
     "satz": "meine Eltern",
     "warum": "mein Vater"
    },
    {
     "satz": "deine Eltern",
     "warum": "dein Vater"
    },
    {
     "satz": "seine Eltern",
     "warum": "sein Vater"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "ihr, ihr oder Ihr?",
   "info": "Drei Wörter klingen gleich und bedeuten Verschiedenes. Im Gespräch hilft der Zusammenhang, im Schriftlichen der große Buchstabe.",
   "beispiele": [
    {
     "satz": "ihr — Es gehört einer Frau. Anna und ihr Bruder.",
     "warum": "von ihr"
    },
    {
     "satz": "ihr — Es gehört mehreren. Die Nachbarn und ihr Hund.",
     "warum": "von ihnen"
    },
    {
     "satz": "Ihr — Die höfliche Form — immer groß. Ist das Ihr Mantel?",
     "warum": "von Ihnen"
    }
   ]
  }
 ],
 "negation": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🚫",
   "wort": "kein ersetzt ein — nicht macht den Rest",
   "info": "kein ist einfach ein mit einem k davor. Es hat dieselben Endungen und steht dort, wo sonst ein stünde — oder wo gar kein Artikel steht. nicht verneint alles andere: Verben, Adjektive, Namen und Sätze mit der, die, das.",
   "beispiele": [
    {
     "satz": "kein ersetzt ein",
     "warum": "Ich habe kein Auto."
    },
    {
     "satz": "Nomen ganz ohne Artikel",
     "warum": "Ich habe keine Zeit."
    },
    {
     "satz": "bestimmter Artikel → nicht",
     "warum": "Ich kenne den Mann nicht."
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Und wo steht das nicht?",
   "info": "Bei kein ist die Stelle klar — direkt vor dem Nomen. Bei nicht gibt es drei Regeln, die im Alltag reichen.",
   "beispiele": [
    {
     "satz": "nicht ans Ende — Wenn du den ganzen Satz verneinst. Ich komme heute nicht.",
     "warum": "Ganzer Satz"
    },
    {
     "satz": "nicht davor — Steht hinten noch ein Verbteil, kommt nicht davor. Ich kann heute nicht kommen.",
     "warum": "Zweiter Verbteil"
    },
    {
     "satz": "nicht direkt davor — Wenn nur ein Wort verneint wird. Ich komme nicht heute, sondern morgen.",
     "warum": "Einzelnes Wort"
    }
   ]
  }
 ],
 "imperativ": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "👉",
   "wort": "So bildest du die drei Formen",
   "info": "Alle drei kommen aus der normalen Gegenwart. Bei du streichst du das -st und das Wort du. Drei Dinge weichen ab: Der Umlaut a → ä fällt weg (du fährst → fahr!), nach -t und -d kommt ein -e dazu (warte!, rede!), und sein hat eine eigene Form (sei!). Bei ihr bleibt die Form gleich, nur ihr fällt weg. Bei Sie bleibt alles, aber die Reihenfolge dreht sich.",
   "beispiele": [
    {
     "satz": "Kommen Sie!",
     "warum": "Komm!"
    },
    {
     "satz": "Warten Sie!",
     "warum": "Warte!"
    },
    {
     "satz": "Sprechen Sie!",
     "warum": "Sprich!"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Befehl oder Bitte?",
   "info": "Dieselbe Form kann hart oder freundlich klingen. Es liegt nicht am Imperativ, sondern an den kleinen Wörtern drum herum.",
   "beispiele": [
    {
     "satz": "nackt — Nur das Verb. Warte! Klingt nach Anweisung — im Notfall richtig, sonst selten.",
     "warum": "Hart"
    },
    {
     "satz": "+ bitte, doch, mal — Warte doch mal kurz, bitte. Dieselbe Form, ganz anderer Ton.",
     "warum": "Freundlich"
    },
    {
     "satz": "als Frage — Könnten Sie bitte kurz warten? Kein Imperativ mehr — die höflichste Variante.",
     "warum": "Sehr höflich"
    }
   ]
  }
 ],
 "komparativ": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📊",
   "wort": "-er und am …sten",
   "info": "Die Steigerung hängt man einfach an. Kurze Wörter mit a, o oder u bekommen dabei meist einen Umlaut: alt → älter, groß → größer, jung → jünger. Und vier sehr häufige Wörter machen es ganz anders.",
   "beispiele": [
    {
     "satz": "ganz normal",
     "warum": "kleiner"
    },
    {
     "satz": "Umlaut",
     "warum": "älter"
    },
    {
     "satz": "Umlaut",
     "warum": "größer"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "als, wie — und je … desto",
   "info": "Drei Muster decken fast jeden Vergleich ab, den du im Alltag brauchst.",
   "beispiele": [
    {
     "satz": "als — Nach der Vergleichsform. Der Zug ist schneller als der Bus.",
     "warum": "Unterschied"
    },
    {
     "satz": "so … wie — Mit so oder genauso davor. Heute ist es genauso warm wie gestern.",
     "warum": "Gleichheit"
    },
    {
     "satz": "immer + Vergleich — Schritt für Schritt mehr. Es wird immer teurer. · Sie spricht immer besser Deutsch.",
     "warum": "Es verändert sich"
    }
   ]
  }
 ],
 "reflexive-verben": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔄",
   "wort": "mich, dich, sich — und wo sie stehen",
   "info": "Das Reflexivpronomen richtet sich nach der Person. In der ich- und du-Form sieht es aus wie der Akkusativ, ab er/sie/es heißt es einfach immer sich. Im Satz steht es so weit vorn wie möglich: direkt hinter dem gebeugten Verb — und wenn das Subjekt hinter dem Verb steht, gleich dahinter: Freust du dich?",
   "beispiele": [
    {
     "satz": "Ich freue mich.",
     "warum": "mich"
    },
    {
     "satz": "Freust du dich?",
     "warum": "dich"
    },
    {
     "satz": "Er ärgert sich.",
     "warum": "sich"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Immer reflexiv oder nur manchmal?",
   "info": "Manche Verben gibt es ohne Rückwort gar nicht. Andere ändern damit einfach ihre Bedeutung.",
   "beispiele": [
    {
     "satz": "sich beeilen — Ohne Rückwort existiert es nicht. Ebenso: sich erholen, sich verspäten, sich bedanken.",
     "warum": "Immer reflexiv"
    },
    {
     "satz": "waschen — Ich wasche das Auto. gegen Ich wasche mich. — dasselbe Verb, anderes Ziel.",
     "warum": "Beides möglich"
    },
    {
     "satz": "sich freuen auf — sich freuen auf (Zukunft) gegen sich freuen über (etwas Geschehenes).",
     "warum": "Mit Präposition"
    }
   ]
  }
 ],
 "weil-dass-wenn": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔗",
   "wort": "Nach weil, dass und wenn rutscht das Verb ans Ende",
   "info": "Diese drei Wörter öffnen einen Nebensatz. Und im Nebensatz steht das gebeugte Verb ganz hinten — immer, ohne Ausnahme. Vor dem Nebensatz steht ein Komma.",
   "beispiele": [
    {
     "satz": "Ich bleibe zu Hause, weil ich krank bin.",
     "warum": "weil nennt den Grund"
    },
    {
     "satz": "Ich hoffe, dass du bald kommst.",
     "warum": "dass hängt einen ganzen Satz an"
    },
    {
     "satz": "Wenn es regnet, nehme ich den Bus.",
     "warum": "wenn nennt die Bedingung"
    }
   ]
  }
 ],
 "praepositionen-dativ": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🧭",
   "wort": "Nach diesen sieben immer Dativ",
   "info": "Der Artikel dahinter steht im Dativ: dem (männlich und sächlich), der (weiblich), den plus -n (Plural). Vier Verbindungen zieht man dabei fast immer zusammen.",
   "beispiele": [
    {
     "satz": "Ich komme aus der Türkei.",
     "warum": "Herkunft, von innen heraus"
    },
    {
     "satz": "Ich wohne bei meinen Eltern.",
     "warum": "bei jemandem, an einem Ort"
    },
    {
     "satz": "Ich fahre mit dem Rad.",
     "warum": "zusammen, Verkehrsmittel"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "zum, zur, beim, vom — die Kurzformen",
   "info": "Vier Verbindungen spricht kaum jemand getrennt aus. Man zieht sie zusammen — und schreibt sie auch so.",
   "beispiele": [
    {
     "satz": "zum — Ich gehe zum Arzt. Im Alltag zieht man immer zusammen — zu dem Arzt sagt man nur, wenn man betont, welcher gemeint ist.",
     "warum": "zu + dem"
    },
    {
     "satz": "zur — Ich fahre zur Arbeit. Weiblich, deshalb zur.",
     "warum": "zu + der"
    },
    {
     "satz": "beim — Ich war beim Zahnarzt.",
     "warum": "bei + dem"
    }
   ]
  }
 ],
 "praeteritum-sein-haben": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🕰️",
   "wort": "Drei Reihen, und du bist durch",
   "info": "Es sind wirklich nur drei Muster. sein ist unregelmäßig, haben fast regelmäßig, und alle Modalverben folgen demselben Bauplan: Stamm ohne Umlaut plus -te.",
   "beispiele": [
    {
     "satz": "musste",
     "warum": "war"
    },
    {
     "satz": "musstest",
     "warum": "warst"
    },
    {
     "satz": "musste",
     "warum": "war"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Perfekt oder Präteritum?",
   "info": "Beim Sprechen entscheidet nicht die Grammatik, sondern die Gewohnheit. Drei Fälle reichen als Faustregel.",
   "beispiele": [
    {
     "satz": "Perfekt — Für fast alle Verben. Ich habe gestern lange gearbeitet.",
     "warum": "Beim Sprechen"
    },
    {
     "satz": "war, hatte, konnte — sein, haben und die Modalverben. Ich war müde und musste früh ins Bett.",
     "warum": "Immer Präteritum"
    },
    {
     "satz": "Präteritum — In Büchern, Berichten und Nachrichten steht es auch bei allen anderen Verben. Er ging zur Tür.",
     "warum": "Im Text"
    }
   ]
  }
 ],
 "passiv-b2": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔄",
   "wort": "Das Passiv hat mehr Formen, als man denkt",
   "info": "Mit Modalverb heißt es werden im Infinitiv am Ende. Und es gibt zwei Sorten: das Vorgangspassiv mit werden beschreibt, was gerade geschieht; das Zustandspassiv mit sein beschreibt das Ergebnis.",
   "beispiele": [
    {
     "satz": "Der Antrag muss bis Freitag bearbeitet werden.",
     "warum": "Modalverb plus werden"
    },
    {
     "satz": "Das Fenster wird geöffnet.",
     "warum": "Vorgang: es passiert jetzt"
    },
    {
     "satz": "Das Fenster ist geöffnet.",
     "warum": "Zustand: es ist das Ergebnis"
    }
   ]
  }
 ],
 "konjunktiv2-vergangenheit": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🕰️",
   "wort": "Zwei Bausteine — und ein Sonderfall",
   "info": "Die Grundform ist unkompliziert. Interessant wird es erst mit einem Modalverb: Dann stehen am Satzende zwei Infinitive, und hätte rutscht bei Nebensätzen sogar davor.",
   "beispiele": [
    {
     "satz": "Bedauern",
     "warum": "Ich hätte mehr gelernt."
    },
    {
     "satz": "verpasste Gelegenheit",
     "warum": "Ich wäre gern mitgekommen."
    },
    {
     "satz": "Vorwurf",
     "warum": "Du hättest anrufen können."
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Drei Töne, dieselbe Form",
   "info": "Was dieselbe Grammatik ausdrückt, hängt ganz davon ab, über wen du sprichst. Diese drei Verwendungen solltest du bewusst trennen — die mittlere kann verletzen.",
   "beispiele": [
    {
     "satz": "Bedauern — Ich hätte früher fragen sollen. — nimmt Verantwortung und wirkt souverän.",
     "warum": "Über dich"
    },
    {
     "satz": "Vorwurf — Du hättest Bescheid sagen können. — das ist ein Vorwurf, auch wenn der Ton freundlich ist. Bewusst einsetzen.",
     "warum": "Über andere"
    },
    {
     "satz": "Das wäre nicht nötig gewesen. — Der Standardsatz, wenn jemand etwas Nettes tut: dankbar und bescheiden zugleich.",
     "warum": "Höflich ablehnen"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🕰️",
   "wort": "Was hätte sein können, aber nicht war",
   "info": "Es gibt nur eine Vergangenheitsform: hätte oder wäre plus Partizip II. Damit sagt man, was anders hätte laufen können — der Klassiker für Bedauern und für gute Ratschläge im Nachhinein.",
   "beispiele": [
    {
     "satz": "Ich hätte früher losfahren sollen.",
     "warum": "Bedauern über das Eigene"
    },
    {
     "satz": "Wenn ich das gewusst hätte, wäre ich gekommen.",
     "warum": "irreale Bedingung in der Vergangenheit"
    },
    {
     "satz": "Das wäre fast schiefgegangen.",
     "warum": "beinahe — es ist nicht passiert"
    }
   ]
  }
 ],
 "genitiv-b2": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔖",
   "wort": "Vier reichen — aber es gibt vierzehn",
   "info": "Für den Alltag genügen wegen, trotz, während und statt. Wer Verträge und Bescheide lesen will, braucht die zweite Reihe dazu. Sie kommen alle in denselben Textsorten vor.",
   "beispiele": [
    {
     "satz": "wegen des Umzugs",
     "warum": "Grund"
    },
    {
     "satz": "trotz der Frist",
     "warum": "Gegengrund"
    },
    {
     "satz": "während der Laufzeit",
     "warum": "Zeitraum"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Geschrieben so, gesprochen anders",
   "info": "Der Unterschied zwischen den beiden Registern ist real — und beide zu beherrschen ist das Ziel, nicht eines davon zu verurteilen.",
   "beispiele": [
    {
     "satz": "wegen des Lärms — In Briefen, Anträgen, Zeitungen und Prüfungen. Hier gilt der Genitiv als richtig, alles andere als Fehler.",
     "warum": "Geschrieben"
    },
    {
     "satz": "wegen dem Lärm — Hört man täglich, auch von Muttersprachlern. Niemand korrigiert es — es klingt nur nicht schriftlich.",
     "warum": "Gesprochen"
    },
    {
     "satz": "von + Dativ — Beim Besitz geht immer von: die Miete von der Wohnung. Nach wegen und trotz allerdings nicht.",
     "warum": "Der Notausgang"
    }
   ]
  }
 ],
 "gegensatz-konnektoren": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "⚖️",
   "wort": "Nebensatz, Hauptsatz oder Nomen",
   "info": "Die Tabelle zeigt denselben Inhalt viermal. Achte nur auf eines: wo das Verb steht. Genau das unterscheidet die vier — nicht die Bedeutung.",
   "beispiele": [
    {
     "satz": "Obwohl es regnete, sind wir gelaufen.",
     "warum": "Nebensatz-Konnektor"
    },
    {
     "satz": "Es regnete. Trotzdem sind wir gelaufen.",
     "warum": "Adverb im Hauptsatz"
    },
    {
     "satz": "Es regnete; dennoch sind wir gelaufen.",
     "warum": "Adverb, schriftlicher"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Und wo genau steht trotzdem?",
   "info": "trotzdem ist ein Adverb und darf deshalb an verschiedenen Stellen stehen. Alle drei Varianten sind richtig — sie betonen nur Verschiedenes.",
   "beispiele": [
    {
     "satz": "Trotzdem sind wir … — Am stärksten betont. Das Verb rutscht direkt dahinter, das Subjekt danach.",
     "warum": "Ganz vorn"
    },
    {
     "satz": "Wir sind trotzdem … — Der neutrale Platz. So sagt man es im Alltag am häufigsten.",
     "warum": "Nach dem Subjekt"
    },
    {
     "satz": "dennoch, gleichwohl — dennoch ist die geschriebene Variante, gleichwohl die sehr förmliche. Beide funktionieren wie trotzdem.",
     "warum": "Schriftlicher"
    }
   ]
  }
 ],
 "verben-mit-praeposition": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔗",
   "wort": "Die Präposition bringt ihren Fall mit",
   "info": "Nach dem Verb steht die Präposition, und die bestimmt den Fall — nicht das Verb. Bei an, auf, in und über muss man ihn mitlernen, weil sie beides können.",
   "beispiele": [
    {
     "satz": "Ich warte auf den Bescheid.",
     "warum": "Akkusativ"
    },
    {
     "satz": "Ich freue mich über die Nachricht. (jetzt)",
     "warum": "Akkusativ"
    },
    {
     "satz": "Ich freue mich auf den Urlaub. (später)",
     "warum": "Akkusativ"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Fragen und verweisen",
   "info": "Sobald ein Verb eine feste Präposition hat, ändert sich auch, wie man danach fragt und wie man zurückverweist. Beides folgt einer einzigen Regel: Person oder Sache?",
   "beispiele": [
    {
     "satz": "Worauf wartest du? — Bei Sachen verschmilzt das Fragewort mit der Präposition: worauf, worüber, womit, woran.",
     "warum": "Nach Sachen fragen"
    },
    {
     "satz": "Auf wen wartest du? — Bei Personen bleibt die Präposition getrennt: auf wen, über wen, mit wem, an wen.",
     "warum": "Nach Personen fragen"
    },
    {
     "satz": "Ich warte darauf. — Statt die Sache zu wiederholen: darauf, darüber, damit, daran. Bei Personen: auf ihn, über sie.",
     "warum": "Zurückverweisen"
    }
   ]
  }
 ],
 "adjektivendungen": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "✏️",
   "wort": "Wer die Arbeit macht, Artikel oder Adjektiv",
   "info": "Im Deutschen muss irgendetwas im Satz Fall und Geschlecht zeigen. Macht es der Artikel, hat das Adjektiv frei. Macht er es nicht, übernimmt das Adjektiv seine Endung.",
   "beispiele": [
    {
     "satz": "der warme Mantel",
     "warum": "nur -e oder -en"
    },
    {
     "satz": "ein warmer Mantel",
     "warum": "Adjektiv übernimmt"
    },
    {
     "satz": "eine warme Jacke",
     "warum": "nur -e"
    }
   ]
  },
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Wo es ohne Artikel wirklich vorkommt",
   "info": "Die Form ohne Artikel wirkt exotisch, steht aber genau dort, wo man täglich spricht: bei Mengen, Materialien und in Aufzählungen.",
   "beispiele": [
    {
     "satz": "frischer Salat — frischer Salat, kaltes Wasser, heiße Suppe — hier trägt das Adjektiv den Fall allein.",
     "warum": "Speisekarte"
    },
    {
     "satz": "mit heißem Wasser — Nach mit, aus, bei ohne Artikel: mit heißem Wasser, aus dunklem Holz.",
     "warum": "Mengen"
    },
    {
     "satz": "viele gute Gründe — Nach viele, einige, mehrere steht die volle Endung: viele gute Gründe.",
     "warum": "Nach viele, einige"
    }
   ]
  }
 ],
 "konjunktiv1": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🗞️",
   "wort": "Konjunktiv I hält Distanz",
   "info": "Er ist die Form der Presse und der Protokolle: Ich gebe wieder, ich behaupte nicht. Gebildet wird er aus dem Infinitivstamm plus -e, -est, -e, -en, -et, -en. Nur die dritte Person Singular sieht wirklich anders aus als der Indikativ — deshalb erkennt man ihn dort am besten.",
   "beispiele": [
    {
     "satz": "Der Sprecher erklärte, die Lage sei stabil.",
     "warum": "sei — die klarste Form"
    },
    {
     "satz": "Sie betonte, man müsse jetzt handeln.",
     "warum": "Modalverb im Konjunktiv I"
    },
    {
     "satz": "Er sagte, er werde am Montag zurückkommen.",
     "warum": "Zukunft in der indirekten Rede"
    }
   ]
  }
 ],
 "partizipialattribut": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📐",
   "wort": "Ein ganzer Nebensatz, zusammengefaltet vor das Nomen",
   "info": "Aus dem Relativsatz wird ein Partizip, das wie ein Adjektiv vor dem Nomen steht — mit allem, was dazugehört. Partizip I heißt aktiv und gleichzeitig, Partizip II heißt passiv oder abgeschlossen.",
   "beispiele": [
    {
     "satz": "der auf dem Tisch liegende Brief",
     "warum": "Partizip I: er liegt gerade"
    },
    {
     "satz": "der gestern verschickte Antrag",
     "warum": "Partizip II: er wurde verschickt"
    },
    {
     "satz": "die seit Jahren steigenden Kosten",
     "warum": "so schreibt die Zeitung"
    }
   ]
  }
 ],
 "nominalstil": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🏛️",
   "wort": "Das Verb wird zum Nomen, der Satz wird kürzer",
   "info": "Behörden, Berichte und Fachtexte packen Handlungen in Nomen: nicht weil geprüft wird, sondern nach Prüfung. Der Satz wird dichter — und schwerer. Verstehen muss man ihn, schreiben muss man ihn nur, wo er hingehört.",
   "beispiele": [
    {
     "satz": "nach der Prüfung der Unterlagen",
     "warum": "statt: nachdem die Unterlagen geprüft wurden"
    },
    {
     "satz": "wegen des starken Regens",
     "warum": "statt: weil es stark regnete"
    },
    {
     "satz": "trotz mehrfacher Nachfrage",
     "warum": "statt: obwohl mehrfach nachgefragt wurde"
    }
   ]
  }
 ],
 "passiv-ersatz": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🧩",
   "wort": "Passiv ohne Passiv: man, sich lassen, sein zu",
   "info": "Im gesprochenen und im gehobenen Deutsch weicht man dem Passiv gern aus. Drei Wege führen daran vorbei — und alle drei klingen leichter als werden plus Partizip.",
   "beispiele": [
    {
     "satz": "Das kann man leicht reparieren.",
     "warum": "man statt Passiv, im Alltag"
    },
    {
     "satz": "Das lässt sich leicht reparieren.",
     "warum": "sich lassen: es ist möglich"
    },
    {
     "satz": "Der Antrag ist bis Freitag einzureichen.",
     "warum": "sein + zu: es ist nötig, sehr formell"
    }
   ]
  }
 ],
 "zweiteilige-konnektoren": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🪢",
   "wort": "Zwei Teile, ein Gedanke",
   "info": "entweder … oder, weder … noch, nicht nur … sondern auch, zwar … aber. Beide Teile müssen dieselbe Art von Satzglied verbinden — sonst kippt der Satz. Nach weder … noch folgt kein zweites nicht: die Verneinung steckt schon drin.",
   "beispiele": [
    {
     "satz": "Entweder wir fahren jetzt oder wir bleiben.",
     "warum": "eins von beiden"
    },
    {
     "satz": "Er spricht weder Englisch noch Französisch.",
     "warum": "beides nicht — ohne zusätzliches nicht"
    },
    {
     "satz": "Sie ist nicht nur schnell, sondern auch genau.",
     "warum": "Steigerung: und obendrein"
    }
   ]
  }
 ],
 "modalverben-subjektiv": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🕵️",
   "wort": "Modalverben sagen auch, wie sicher man sich ist",
   "info": "Neben ihrer normalen Bedeutung haben müssen, dürfte, können und wollen eine zweite: Sie bewerten eine Vermutung. Von fast sicher bis deutlich bezweifelt — mit einem einzigen Wort.",
   "beispiele": [
    {
     "satz": "Er muss zu Hause sein, das Licht brennt.",
     "warum": "sehr sicher"
    },
    {
     "satz": "Sie dürfte etwa vierzig sein.",
     "warum": "vorsichtige Schätzung"
    },
    {
     "satz": "Er will nichts davon gewusst haben.",
     "warum": "er behauptet es — ich glaube es nicht"
    }
   ]
  }
 ],
 "modalpartikeln": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "💬",
   "wort": "doch, mal, ja, eben — die kleinen Wörter machen den Ton",
   "info": "Sie ändern nichts an der Bedeutung und lassen sich kaum übersetzen. Aber sie entscheiden, ob ein Satz freundlich, ungeduldig oder überrascht klingt. Ohne sie klingt Deutsch korrekt und trotzdem fremd.",
   "beispiele": [
    {
     "satz": "Komm doch mal vorbei!",
     "warum": "aus der Aufforderung wird eine Einladung"
    },
    {
     "satz": "Das ist ja interessant!",
     "warum": "ja zeigt Überraschung"
    },
    {
     "satz": "Das ist eben so.",
     "warum": "eben: da kann man nichts machen"
    }
   ]
  }
 ],
 "praepositionaladverbien": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔗",
   "wort": "Bei Sachen heißt es darauf, nicht auf das",
   "info": "Verben mit fester Präposition brauchen für Dinge ein da-Wort: darauf, davon, darüber. Bei Personen bleibt die Präposition mit dem Pronomen stehen. In der Frage wird aus da- ein wo-: worauf, wovon, worüber.",
   "beispiele": [
    {
     "satz": "Ich freue mich darauf.",
     "warum": "auf eine Sache"
    },
    {
     "satz": "Ich freue mich auf ihn.",
     "warum": "auf eine Person"
    },
    {
     "satz": "Worüber habt ihr gesprochen?",
     "warum": "die Frage nach der Sache"
    }
   ]
  },
  {
   "type": "fehler",
   "satz": "Wir haben lange über den Plan gesprochen. — Wir haben lange daran gesprochen.",
   "falsch": "daran",
   "richtig": "darüber",
   "explain": "sprechen über wird zu darüber."
  }
 ],
 "n-deklination": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🧩",
   "wort": "Ein paar Maskulina hängen überall ein -n an",
   "info": "Der Kollege, der Kunde, der Student, der Nachbar, der Mensch, der Herr: Diese Wörter stehen nur im Nominativ Singular blank. In jedem anderen Fall kommt ein -n oder -en dazu — auch im Akkusativ, wo man es am leichtesten vergisst.",
   "beispiele": [
    {
     "satz": "Ich kenne den Kollegen gut.",
     "warum": "Akkusativ: Kollegen, nicht Kollege"
    },
    {
     "satz": "Ich helfe dem Studenten.",
     "warum": "Dativ mit -en"
    },
    {
     "satz": "Der Kunde wartet schon.",
     "warum": "nur hier ohne -n"
    }
   ]
  }
 ],
 "lassen": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🤝",
   "wort": "lassen heißt: ein anderer macht es",
   "info": "Man tut es nicht selbst, man veranlasst es. Am Satzende stehen zwei Infinitive, und im Perfekt wird aus dem Partizip wieder ein lassen — nicht gelassen.",
   "beispiele": [
    {
     "satz": "Ich lasse mir die Haare schneiden.",
     "warum": "jemand anders schneidet"
    },
    {
     "satz": "Ich habe das Auto reparieren lassen.",
     "warum": "Perfekt: lassen, nicht gelassen"
    },
    {
     "satz": "Das lässt sich machen.",
     "warum": "sich lassen: es ist möglich"
    }
   ]
  }
 ],
 "gerundivum": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📐",
   "wort": "zu plus Partizip I: was getan werden muss",
   "info": "Die Form steht vor dem Nomen und heißt immer zweierlei zugleich: passiv und notwendig. Sie ersetzt einen ganzen Relativsatz mit müssen oder können — und kommt fast nur in Amts- und Fachsprache vor.",
   "beispiele": [
    {
     "satz": "die zu prüfenden Unterlagen",
     "warum": "die geprüft werden müssen"
    },
    {
     "satz": "der zu zahlende Betrag",
     "warum": "der gezahlt werden muss"
    },
    {
     "satz": "eine nicht zu unterschätzende Gefahr",
     "warum": "die man nicht unterschätzen darf"
    }
   ]
  }
 ],
 "uneingeleitete-nebensaetze": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔀",
   "wort": "Ein Nebensatz ganz ohne wenn",
   "info": "Bedingungssätze kommen auch ohne Einleitewort aus. Dann rückt das Verb an den Anfang, und der Hauptsatz beginnt gern mit so oder dann. Sehr schriftlich, sehr elegant — und in Verträgen überall.",
   "beispiele": [
    {
     "satz": "Hätte ich das gewusst, wäre ich gekommen.",
     "warum": "statt: Wenn ich das gewusst hätte"
    },
    {
     "satz": "Kommen Sie zu spät, verfällt der Anspruch.",
     "warum": "Verb ganz vorn"
    },
    {
     "satz": "Sollten Sie Fragen haben, melden Sie sich gern.",
     "warum": "die höfliche Standardformel"
    }
   ]
  }
 ],
 "korrelate": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔗",
   "wort": "Das da- weist voraus auf den Satz, der noch kommt",
   "info": "Wenn nach dem Verb ein ganzer Nebensatz folgt, kündigt ein Korrelat ihn an: darauf, dass … · davon, dass … Es steht im Hauptsatz und hält den Platz frei. Weglassen kann man es nur selten, und es klingt sofort holprig.",
   "beispiele": [
    {
     "satz": "Ich freue mich darauf, dass du kommst.",
     "warum": "darauf zeigt auf den dass-Satz"
    },
    {
     "satz": "Es hängt davon ab, wie das Wetter wird.",
     "warum": "auch vor indirekten Fragen"
    },
    {
     "satz": "Ich erinnere mich daran, ihn getroffen zu haben.",
     "warum": "auch vor einem Infinitivsatz"
    }
   ]
  }
 ],
 "funktionsverbgefuege": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🏛️",
   "wort": "Nomen und Verb, die nur zusammen etwas bedeuten",
   "info": "in Anspruch nehmen, zur Verfügung stellen, Bezug nehmen auf. Das Verb allein sagt fast nichts; die Bedeutung sitzt im Nomen. Diese Verbindungen sind fest — man kann kein Wort tauschen und keinen Artikel dazuerfinden.",
   "beispiele": [
    {
     "satz": "Wir nehmen Ihr Angebot in Anspruch.",
     "warum": "nicht: benutzen"
    },
    {
     "satz": "Die Unterlagen stehen zur Verfügung.",
     "warum": "feste Wendung mit zur"
    },
    {
     "satz": "Ich nehme Bezug auf Ihr Schreiben.",
     "warum": "der Standardanfang im Brief"
    }
   ]
  }
 ],
 "irreale-vergleiche": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🎭",
   "wort": "als ob und als wenn: es sieht so aus, ist aber nicht so",
   "info": "Nach als ob steht der Konjunktiv, und das Verb rutscht ans Ende. Man kann das ob auch weglassen — dann steht das Verb direkt hinter als. Beide Formen sind richtig, die zweite klingt gehobener.",
   "beispiele": [
    {
     "satz": "Er tut so, als ob er alles wüsste.",
     "warum": "Konjunktiv, Verb am Ende"
    },
    {
     "satz": "Er tut so, als wüsste er alles.",
     "warum": "ohne ob: Verb sofort danach"
    },
    {
     "satz": "Es sieht aus, als hätte es geregnet.",
     "warum": "Vergangenheit mit hätte"
    }
   ]
  }
 ],
 "praepositionen-gehoben": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "📜",
   "wort": "Präpositionen, die man schreibt und selten sagt",
   "info": "hinsichtlich, bezüglich, mittels, infolge, anlässlich, seitens. Fast alle verlangen den Genitiv. Sie machen einen Text sachlich und knapp — und im Gespräch klingen sie steif. Deshalb: erkennen ja, benutzen mit Maß.",
   "beispiele": [
    {
     "satz": "hinsichtlich der Kosten",
     "warum": "was die Kosten angeht"
    },
    {
     "satz": "infolge des Unfalls",
     "warum": "als Folge davon"
    },
    {
     "satz": "seitens der Behörde",
     "warum": "von der Behörde aus"
    }
   ]
  }
 ],
 "nominalisierte-adjektive": [
  {
   "type": "karte",
   "regel": true,
   "emoji": "🔤",
   "wort": "Aus einem Adjektiv wird eine Person oder eine Sache",
   "info": "Groß geschrieben und trotzdem wie ein Adjektiv gebeugt: der Angestellte, ein Angestellter, die Angestellten. Nach etwas, nichts, viel und wenig wird das Adjektiv ebenfalls zum Nomen — dann mit -es.",
   "beispiele": [
    {
     "satz": "der Angestellte — ein Angestellter",
     "warum": "die Endung folgt dem Artikel"
    },
    {
     "satz": "Ich habe etwas Wichtiges vergessen.",
     "warum": "nach etwas: groß und mit -es"
    },
    {
     "satz": "Er erzählt nichts Neues.",
     "warum": "dasselbe nach nichts"
    }
   ]
  }
 ]
};
  var U = window.UEBUNGEN; if (!U || !U.skills) return;
  var sk = U.skills.filter(function (s) { return s.id === 'grammatik'; })[0];
  if (!sk) return;
  (sk.themes || []).forEach(function (t) {
    var z = Z[t.id]; if (!z || !z.length) return;
    t.exercises = (t.exercises || []).concat(z);
  });
})();
