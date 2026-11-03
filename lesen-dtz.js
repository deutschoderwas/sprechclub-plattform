/* ============================================================
   deutschoderwas club — LESEN Deutsch-Test für Zuwanderer (DTZ)

   Aufbau nach den offiziellen DTZ-Übungssätzen (g.a.s.t.) und dem
   Modellsatz („Sie hören jeden Text einmal"), geprüft 03.11.2026.
   Alle Texte und Aufgaben eigene. Erzeugt aus scratchpad/dtz.
   ============================================================ */

window.LESEN_TELC_DTZ = {
 "niveau": "telcDTZ",
 "pruefung": "Deutsch-Test für Zuwanderer",
 "minuten": 45,
 "punkte": 25,
 "intro": "Der Lese-Teil im DTZ dauert fünfundvierzig Minuten: ein Wegweiser, Anzeigen, kurze Texte, ein Informationsblatt und ein Brief mit Lücken. Zusammen mit dem Hören gibt es 45 Punkte: ab 20 ist es A2, ab 33 B1.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Schnell finden",
   "zeichen": "🧭",
   "was": "Wegweiser und Anzeigen, jede Bedingung prüfen."
  },
  {
   "nr": 2,
   "titel": "Genau lesen",
   "zeichen": "🔍",
   "was": "Richtig oder falsch, Briefwendungen."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Alle fünf Teile einzeln."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "25 Aufgaben, fünfundvierzig Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tdl1",
   "stufe": 1,
   "titel": "Wegweiser und Anzeigen schnell lesen",
   "kurz": "Erst die Situation, dann das passende Wort suchen",
   "ziel": "Nach diesem Block findest du im Wegweiser und in Anzeigen schnell das Wort, das zur Situation passt.",
   "zeichen": "🗂️",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Sie sind umgezogen und müssen Ihre neue Wohnung anmelden. Welches Wort suchen Sie im Wegweiser vom Rathaus?",
     "opt": [
      "Bürgerbüro",
      "Wohngeldstelle",
      "Bauamt"
     ],
     "loesung": 0,
     "erklaerung": "Die Anmeldung macht das Bürgerbüro. Wohngeld ist Geld für die Miete, das Bauamt ist für neue Häuser."
    },
    {
     "art": "wahl",
     "frage": "Sie haben Ihre Handschuhe im Rathaus liegen lassen. Was suchen Sie im Wegweiser?",
     "opt": [
      "Stadtkasse",
      "Fundbüro",
      "Standesamt"
     ],
     "loesung": 1,
     "erklaerung": "Vergessene und verlorene Sachen landen im Fundbüro."
    },
    {
     "art": "wahl",
     "frage": "Ihre neue Hose ist zu lang. Was suchen Sie im Kaufhaus?",
     "opt": [
      "Reinigung",
      "Damenmode",
      "Änderungsschneiderei"
     ],
     "loesung": 2,
     "erklaerung": "Kleidung kürzer machen: Änderungsschneiderei. Die Reinigung macht Kleidung nur sauber."
    },
    {
     "art": "wahl",
     "frage": "Sie wollen Geld für Ihre Kinder beantragen. Welches Wort passt im Wegweiser vom Jobcenter?",
     "opt": [
      "Kindermode",
      "Familienkasse",
      "Kinderklinik"
     ],
     "loesung": 1,
     "erklaerung": "Kindergeld zahlt die Familienkasse. Die anderen Wörter haben nur „Kind“ gemeinsam."
    },
    {
     "art": "wahl",
     "frage": "Anzeige: „2-Zimmer-Wohnung, 3. Stock ohne Aufzug, 620 Euro warm.“ Was bedeutet „warm“?",
     "opt": [
      "Die Wohnung hat eine gute Heizung.",
      "Die Heizkosten sind im Preis.",
      "Die Wohnung liegt in der Sonne."
     ],
     "loesung": 1,
     "erklaerung": "„Warm“ heißt: Heizung und Nebenkosten sind schon im Preis. „Kalt“ heißt: ohne."
    },
    {
     "art": "wahl",
     "frage": "Anzeige: „Tagesmutter hat Plätze frei für Kinder von 1 bis 3 Jahren.“ Passt das für ein Kind von vier Jahren?",
     "opt": [
      "Ja, Plätze sind frei.",
      "Ja, wenn die Zeiten passen.",
      "Nein, das Kind ist zu alt."
     ],
     "loesung": 2,
     "erklaerung": "Das Alter ist eine Bedingung. Mit vier Jahren ist das Kind zu alt."
    },
    {
     "art": "wahl",
     "frage": "Wie arbeiten Sie im Teil mit dem Wegweiser am besten?",
     "opt": [
      "Zuerst die Situation lesen, dann ein passendes Wort im Wegweiser suchen.",
      "Zuerst den ganzen Wegweiser genau lesen, dann die Situationen.",
      "Nur die Stockwerke ansehen und schnell raten."
     ],
     "loesung": 0,
     "erklaerung": "Mit der Situation im Kopf suchst du gezielt. So sparst du viel Zeit."
    }
   ]
  },
  {
   "id": "tdl2",
   "stufe": 2,
   "titel": "Jede Bedingung prüfen: wann x?",
   "kurz": "Eine Anzeige passt nur, wenn alles stimmt",
   "ziel": "Nach diesem Block prüfst du jede Bedingung einer Situation (Person, Zeit, Ort, Preis) und erkennst, wann keine Anzeige passt.",
   "zeichen": "🔎",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Situation: „Sie suchen einen Schwimmkurs für Ihre Tochter, sechs Jahre alt.“ Anzeige: „Schwimmkurs für Erwachsene, dienstags 19 Uhr.“ Passt die Anzeige?",
     "opt": [
      "Ja, es ist ein Schwimmkurs.",
      "Ja, aber nur dienstags.",
      "Nein, der Kurs ist nur für Erwachsene."
     ],
     "loesung": 2,
     "erklaerung": "Das Wort „Schwimmkurs“ passt, die Person nicht."
    },
    {
     "art": "wahl",
     "frage": "Situation: „Sie suchen eine Arbeit für den Abend.“ Anzeige: „Reinigungskräfte für Büros, Montag bis Freitag 18 bis 21 Uhr.“ Passt die Anzeige?",
     "opt": [
      "Ja, die Zeit passt.",
      "Nein, die Arbeit ist am Morgen.",
      "Nein, nur am Wochenende."
     ],
     "loesung": 0,
     "erklaerung": "18 bis 21 Uhr ist Abend. Hier passt alles."
    },
    {
     "art": "wahl",
     "frage": "Situation: „Ihre Mutter kann keine Treppen steigen.“ Anzeige: „Schöne 2-Zimmer-Wohnung, 4. Stock, Altbau, ruhige Lage.“ Was ist das Problem?",
     "opt": [
      "Die Wohnung ist zu groß.",
      "4. Stock, und ein Aufzug wird nicht genannt.",
      "Die Lage ist zu laut."
     ],
     "loesung": 1,
     "erklaerung": "Steht kein Aufzug in der Anzeige, darfst du keinen annehmen."
    },
    {
     "art": "wahl",
     "frage": "Situation: „Sie sind neu in der Stadt und suchen einen Kinderarzt.“ Anzeige: „Kinderarztpraxis, zurzeit keine Aufnahme neuer Patienten.“ Passt die Anzeige?",
     "opt": [
      "Nein, die Praxis nimmt keine neuen Patienten.",
      "Ja, es ist ein Kinderarzt.",
      "Ja, wenn man vorher anruft."
     ],
     "loesung": 0,
     "erklaerung": "Eine Verneinung in der Anzeige macht sie unpassend, auch wenn das Wort stimmt."
    },
    {
     "art": "wahl",
     "frage": "Eine Situation hat drei Bedingungen: Kind zwei Jahre alt, Betreuung am Vormittag, ab Mai. Eine Anzeige erfüllt nur zwei. Was machen Sie?",
     "opt": [
      "Ich nehme sie, zwei von drei reicht.",
      "Ich nehme die Anzeige mit den meisten gleichen Wörtern.",
      "Ich suche weiter. Passt keine ganz, schreibe ich x."
     ],
     "loesung": 2,
     "erklaerung": "Alle Bedingungen müssen stimmen. Sonst ist es eine Falle."
    },
    {
     "art": "wahl",
     "frage": "Situation: „Sie möchten am Wochenende Fußball spielen.“ Anzeige: „Lauftreff, montags und donnerstags 18.30 Uhr.“ Passt die Anzeige?",
     "opt": [
      "Ja, beides ist Sport.",
      "Nein, anderer Sport und andere Tage.",
      "Ja, weil sie kostenlos ist."
     ],
     "loesung": 1,
     "erklaerung": "Sport allgemein reicht nicht. Sportart und Tage passen nicht."
    },
    {
     "art": "wahl",
     "frage": "Wie oft ist die Lösung x in Teil 2?",
     "opt": [
      "Bei jeder zweiten Situation.",
      "Nie.",
      "Einmal: Für eine Situation passt keine Anzeige."
     ],
     "loesung": 2,
     "erklaerung": "Eine Situation bleibt ohne Anzeige. Hast du schon ein x, prüfe ein zweites genau."
    }
   ]
  },
  {
   "id": "tdl3",
   "stufe": 2,
   "titel": "Richtig oder falsch: genau lesen",
   "kurz": "Kleine Wörter entscheiden: nur, erst, nicht müssen",
   "ziel": "Nach diesem Block erkennst du in Briefen und Infoblättern Ausnahmen, Bedingungen und den Unterschied zwischen „nicht müssen“ und „nicht dürfen“.",
   "zeichen": "📋",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Text: „Ohne Termin können wir Sie nur in Notfällen bedienen.“ Aussage: „Ohne Termin kann man nie kommen.“",
     "opt": [
      "richtig",
      "falsch, im Notfall geht es auch ohne Termin",
      "richtig, man braucht immer einen Termin"
     ],
     "loesung": 1,
     "erklaerung": "„Nur in Notfällen“ ist eine Ausnahme. „Nie“ ist zu stark."
    },
    {
     "art": "wahl",
     "frage": "Text: „Es darf erst wieder kommen, wenn es 48 Stunden ohne Beschwerden war.“ Was bedeutet „erst“ hier?",
     "opt": [
      "nicht früher als",
      "schon vorher",
      "nur einmal"
     ],
     "loesung": 0,
     "erklaerung": "„Erst“ heißt: nicht früher. Vor 48 Stunden darf das Kind nicht kommen."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Verpackungen müssen nicht gespült werden.“ Was bedeutet das?",
     "opt": [
      "Man darf sie nicht spülen.",
      "Man muss sie spülen.",
      "Man braucht sie nicht zu spülen."
     ],
     "loesung": 2,
     "erklaerung": "„Nicht müssen“ heißt: nicht nötig. Ein Verbot wäre „nicht dürfen“."
    },
    {
     "art": "wahl",
     "frage": "Text: „Einwerfen ist nur werktags erlaubt.“ Aussage: „Am Samstag um 10 Uhr darf man Glas einwerfen.“",
     "opt": [
      "richtig, Samstag ist ein Werktag",
      "falsch, Samstag ist Wochenende",
      "falsch, nur am Montag"
     ],
     "loesung": 0,
     "erklaerung": "Werktage sind Montag bis Samstag. Nur Sonntag und Feiertage sind keine Werktage."
    },
    {
     "art": "wahl",
     "frage": "Text: „Eine andere Person kann den Ausweis nur mit einer Vollmacht abholen.“ Aussage: „Ihr Mann kann den Ausweis mit einer Vollmacht für Sie abholen.“",
     "opt": [
      "falsch",
      "richtig",
      "falsch, man muss immer selbst kommen"
     ],
     "loesung": 1,
     "erklaerung": "Mit Vollmacht ist es erlaubt. „Nur mit“ nennt die Bedingung, kein Verbot."
    },
    {
     "art": "wahl",
     "frage": "Welche Wörter in einer Aussage sind oft ein Zeichen für „falsch“?",
     "opt": [
      "und, oder, aber",
      "immer, nie, alle, ganz",
      "heute, morgen, gestern"
     ],
     "loesung": 1,
     "erklaerung": "Steht im Text eine Ausnahme, ist eine Aussage mit „immer“ oder „nie“ meistens falsch."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Kursgebühr buchen wir von Ihrem Konto ab.“ Aussage: „Man bezahlt bar im Kurs.“",
     "opt": [
      "richtig",
      "richtig, wenn man möchte",
      "falsch, das Geld wird vom Konto abgebucht"
     ],
     "loesung": 2,
     "erklaerung": "„Abbuchen“ heißt: Das Geld geht automatisch vom Konto weg."
    }
   ]
  },
  {
   "id": "tdl4",
   "stufe": 2,
   "titel": "Briefwendungen und kleine Wörter",
   "kurz": "Anrede, Gruß, Präpositionen und Konnektoren für Teil 5",
   "ziel": "Nach diesem Block kennst du die festen Wendungen im formellen Brief und wählst die richtige Präposition und den richtigen Konnektor.",
   "zeichen": "✉️",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Sie kennen den Namen nicht. Wie beginnt der formelle Brief?",
     "opt": [
      "Sehr geehrte Damen und Herren,",
      "Liebe Damen und Herren,",
      "Hallo zusammen,"
     ],
     "loesung": 0,
     "erklaerung": "Ohne Namen schreibt man „Sehr geehrte Damen und Herren“."
    },
    {
     "art": "wahl",
     "frage": "Welcher Gruß passt am Ende eines formellen Briefs?",
     "opt": [
      "Bis bald",
      "Liebe Grüße und tschüss",
      "Mit freundlichen Grüßen"
     ],
     "loesung": 2,
     "erklaerung": "„Mit freundlichen Grüßen“ passt immer im formellen Brief."
    },
    {
     "art": "wahl",
     "frage": "„Ich warte __ Ihre Antwort.“",
     "opt": [
      "auf",
      "für",
      "an"
     ],
     "loesung": 0,
     "erklaerung": "Das Verb heißt „warten auf“."
    },
    {
     "art": "wahl",
     "frage": "„Ich kann nicht kommen, __ mein Kind krank ist.“",
     "opt": [
      "denn",
      "deshalb",
      "weil"
     ],
     "loesung": 2,
     "erklaerung": "Das Verb steht am Ende („ist“). Das geht nur mit „weil“."
    },
    {
     "art": "wahl",
     "frage": "„Für Fragen stehe ich Ihnen gern zur __.“",
     "opt": [
      "Verfügung",
      "Hilfe",
      "Frage"
     ],
     "loesung": 0,
     "erklaerung": "Feste Wendung: „zur Verfügung stehen“."
    },
    {
     "art": "wahl",
     "frage": "„Können Sie mir bitte sagen, __ der Kurs noch freie Plätze hat?“",
     "opt": [
      "dass",
      "ob",
      "wenn"
     ],
     "loesung": 1,
     "erklaerung": "Eine Ja/Nein-Frage im Nebensatz beginnt mit „ob“."
    },
    {
     "art": "wahl",
     "frage": "„Der Bus hatte Verspätung, __ kam ich zu spät.“",
     "opt": [
      "trotzdem",
      "deshalb",
      "weil"
     ],
     "loesung": 1,
     "erklaerung": "Die Verspätung ist der Grund, das Zuspätkommen die Folge: „deshalb“."
    },
    {
     "art": "wahl",
     "frage": "„Ich wohne __ März in dieser Wohnung.“",
     "opt": [
      "seit",
      "ab",
      "vor"
     ],
     "loesung": 0,
     "erklaerung": "Es hat im März angefangen und dauert noch: „seit“."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "uebersicht",
   "name": "Lesen: Wegweiser",
   "kurz": "Fünf Situationen, ein Wegweiser mit Stockwerken",
   "was": "Ein Wegweiser im Rathaus, Kaufhaus oder Krankenhaus. Zu jeder Situation suchst du das richtige Stockwerk.",
   "tipp": "Such nicht das gleiche Wort, sondern die passende Stelle: Wer einen Pass braucht, geht zum Bürgerbüro.",
   "zeichen": "🏢",
   "farbe": "turq",
   "punkte": 5,
   "runden": [
    {
     "id": "dzl1s1",
     "tafel": {
      "titel": "Rathaus Neustadt, Wegweiser",
      "zeilen": [
       {
        "k": "Untergeschoss",
        "v": "Fundbüro, Tiefgarage für Besucher, Toiletten"
       },
       {
        "k": "Erdgeschoss",
        "v": "Information, Bürgerbüro (Personalausweis, Reisepass, Anmeldung der Wohnung), Stadtkasse"
       },
       {
        "k": "1. Stock",
        "v": "Standesamt (Geburtsurkunde, Heirat), Ausländerbehörde"
       },
       {
        "k": "2. Stock",
        "v": "Ordnungsamt (Bewohnerparkausweis, Gewerbe anmelden), Wohngeldstelle"
       },
       {
        "k": "3. Stock",
        "v": "Sozialamt, Jugendamt, Elterngeldstelle"
       },
       {
        "k": "4. Stock",
        "v": "Steueramt (Hundesteuer, Grundsteuer), Bauamt, Kantine"
       }
      ]
     },
     "aufgaben": [
      {
       "situation": "Sie haben Ihren Schlüssel auf dem Spielplatz verloren. Vielleicht hat ihn jemand abgegeben.",
       "opt": [
        "Erdgeschoss",
        "Untergeschoss",
        "3. Stock"
       ],
       "loesung": 1,
       "stelle": "Fundbüro",
       "erklaerung": "Verlorene Sachen gibt man im Fundbüro ab. Es ist im Untergeschoss."
      },
      {
       "situation": "Sie sind nach Neustadt umgezogen und müssen Ihre neue Adresse melden.",
       "opt": [
        "Erdgeschoss",
        "2. Stock",
        "1. Stock"
       ],
       "loesung": 0,
       "stelle": "Anmeldung der Wohnung",
       "erklaerung": "Die Anmeldung macht das Bürgerbüro im Erdgeschoss. Die Wohngeldstelle zahlt nur Geld für die Miete."
      },
      {
       "situation": "Ihre Tochter ist im März geboren. Sie bleiben zu Hause bei ihr und wollen dafür Geld beantragen.",
       "opt": [
        "1. Stock",
        "4. Stock",
        "3. Stock"
       ],
       "loesung": 2,
       "stelle": "Elterngeldstelle",
       "erklaerung": "Das Geld heißt Elterngeld. Im Standesamt im 1. Stock bekommen Sie nur die Geburtsurkunde."
      },
      {
       "situation": "Sie haben einen Hund aus dem Tierheim geholt. Für den Hund müssen Sie jedes Jahr Geld an die Stadt zahlen.",
       "opt": [
        "Erdgeschoss",
        "4. Stock",
        "2. Stock"
       ],
       "loesung": 1,
       "stelle": "Hundesteuer",
       "erklaerung": "Für einen Hund zahlt man Hundesteuer. Sie gehört zum Steueramt im 4. Stock, nicht zur Stadtkasse."
      },
      {
       "situation": "Sie wohnen in der Altstadt und möchten Ihr Auto vor Ihrem Haus parken dürfen.",
       "opt": [
        "Untergeschoss",
        "Erdgeschoss",
        "2. Stock"
       ],
       "loesung": 2,
       "stelle": "Bewohnerparkausweis",
       "erklaerung": "Den Bewohnerparkausweis gibt das Ordnungsamt. Die Tiefgarage ist nur für Besucher des Rathauses."
      }
     ]
    },
    {
     "id": "dzl1s2",
     "tafel": {
      "titel": "Kaufhaus Brandt, Wegweiser",
      "zeilen": [
       {
        "k": "Untergeschoss",
        "v": "Lebensmittel, Getränke, Bäckerei, Reinigung"
       },
       {
        "k": "Erdgeschoss",
        "v": "Kosmetik, Uhren und Schmuck, Taschen, Kundenservice (Umtausch und Reklamation)"
       },
       {
        "k": "1. Etage",
        "v": "Damenmode, Damenschuhe, Wäsche"
       },
       {
        "k": "2. Etage",
        "v": "Herrenmode, Herrenschuhe, Sportbekleidung, Änderungsschneiderei"
       },
       {
        "k": "3. Etage",
        "v": "Kindermode, Spielwaren, Schulbedarf, Babyausstattung"
       },
       {
        "k": "4. Etage",
        "v": "Haushaltswaren, Bettwaren, Lampen, Elektrogeräte"
       },
       {
        "k": "5. Etage",
        "v": "Restaurant, Toiletten, Wickelraum"
       }
      ]
     },
     "aufgaben": [
      {
       "situation": "Ihr Sohn kommt im August in die Schule. Sie brauchen Hefte und Stifte.",
       "opt": [
        "3. Etage",
        "4. Etage",
        "Erdgeschoss"
       ],
       "loesung": 0,
       "stelle": "Schulbedarf",
       "erklaerung": "Hefte und Stifte sind Schulbedarf. Er ist in der 3. Etage bei der Kindermode."
      },
      {
       "situation": "Sie haben letzte Woche hier einen Wasserkocher gekauft. Jetzt ist er kaputt, und Sie wollen ihn zurückgeben.",
       "opt": [
        "4. Etage",
        "Erdgeschoss",
        "Untergeschoss"
       ],
       "loesung": 1,
       "stelle": "Umtausch und Reklamation",
       "erklaerung": "Kaputte Ware bringt man zum Kundenservice. In der 4. Etage kauft man nur neue Geräte."
      },
      {
       "situation": "Ihr Wintermantel ist schmutzig. Sie möchten ihn sauber machen lassen.",
       "opt": [
        "2. Etage",
        "1. Etage",
        "Untergeschoss"
       ],
       "loesung": 2,
       "stelle": "Reinigung",
       "erklaerung": "Kleidung sauber machen lassen: Reinigung im Untergeschoss. Die Änderungsschneiderei macht Kleidung kürzer oder enger."
      },
      {
       "situation": "Sie brauchen eine neue Bettdecke für Ihr Gästezimmer.",
       "opt": [
        "1. Etage",
        "4. Etage",
        "3. Etage"
       ],
       "loesung": 1,
       "stelle": "Bettwaren",
       "erklaerung": "Bettdecken sind Bettwaren, 4. Etage. Wäsche in der 1. Etage ist Unterwäsche."
      },
      {
       "situation": "Sie sind mit Ihrem Baby im Kaufhaus. Es braucht eine frische Windel.",
       "opt": [
        "5. Etage",
        "3. Etage",
        "Erdgeschoss"
       ],
       "loesung": 0,
       "stelle": "Wickelraum",
       "erklaerung": "Windeln wechselt man im Wickelraum in der 5. Etage. In der 3. Etage kann man Babysachen nur kaufen."
      }
     ]
    },
    {
     "id": "dzl1s3",
     "tafel": {
      "titel": "Klinikum Bergheim, Wegweiser Haus A",
      "zeilen": [
       {
        "k": "Untergeschoss",
        "v": "Röntgen, MRT, Labor (Blutabnahme)"
       },
       {
        "k": "Erdgeschoss",
        "v": "Anmeldung, Notaufnahme, Cafeteria, Kiosk"
       },
       {
        "k": "1. Etage",
        "v": "Kinderklinik, Geburtsstation, Kreißsaal"
       },
       {
        "k": "2. Etage",
        "v": "Innere Medizin, Herzstation, Diabetesberatung"
       },
       {
        "k": "3. Etage",
        "v": "Chirurgie, Unfallchirurgie, Physiotherapie"
       },
       {
        "k": "4. Etage",
        "v": "Augenklinik, Hals-Nasen-Ohren-Klinik, Hörtest"
       },
       {
        "k": "5. Etage",
        "v": "Verwaltung, Sozialdienst (Hilfe nach dem Krankenhaus), Bibliothek"
       }
      ]
     },
     "aufgaben": [
      {
       "situation": "Sie sind auf der Treppe gestürzt. Ihr Hausarzt schickt Sie mit einer Überweisung zum Röntgen.",
       "opt": [
        "3. Etage",
        "Untergeschoss",
        "Erdgeschoss"
       ],
       "loesung": 1,
       "stelle": "Röntgen",
       "erklaerung": "Gesucht ist das Röntgen im Untergeschoss. Die Unfallchirurgie in der 3. Etage ist eine andere Abteilung."
      },
      {
       "situation": "Ihre Schwester hat gestern ein Baby bekommen. Sie möchten sie besuchen.",
       "opt": [
        "1. Etage",
        "Erdgeschoss",
        "5. Etage"
       ],
       "loesung": 0,
       "stelle": "Geburtsstation",
       "erklaerung": "Mütter mit neuen Babys liegen auf der Geburtsstation in der 1. Etage."
      },
      {
       "situation": "Sie haben Diabetes. Sie möchten lernen, was Sie essen dürfen.",
       "opt": [
        "Erdgeschoss",
        "4. Etage",
        "2. Etage"
       ],
       "loesung": 2,
       "stelle": "Diabetesberatung",
       "erklaerung": "Dafür gibt es die Diabetesberatung in der 2. Etage. Die Cafeteria im Erdgeschoss hat nur mit Essen zu tun."
      },
      {
       "situation": "Ihr Vater kommt nach einer Operation nach Hause. Er braucht dort Hilfe, zum Beispiel einen Pflegedienst.",
       "opt": [
        "3. Etage",
        "5. Etage",
        "Untergeschoss"
       ],
       "loesung": 1,
       "stelle": "Sozialdienst (Hilfe nach dem Krankenhaus)",
       "erklaerung": "Hilfe für die Zeit nach dem Krankenhaus organisiert der Sozialdienst in der 5. Etage."
      },
      {
       "situation": "Ihr Kind hört seit einer Erkältung schlecht. Der Arzt möchte das Hören testen.",
       "opt": [
        "4. Etage",
        "1. Etage",
        "2. Etage"
       ],
       "loesung": 0,
       "stelle": "Hörtest",
       "erklaerung": "Der Hörtest ist in der 4. Etage. Das Wort Kinderklinik passt zum Kind, aber nicht zum Problem."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "anzeigenX",
   "name": "Lesen: Anzeigen",
   "kurz": "Fünf Situationen, acht Anzeigen, einmal passt keine",
   "was": "Fünf Situationen und acht Anzeigen. Jede Anzeige passt höchstens einmal. Passt keine, wählst du x.",
   "tipp": "Prüf jede Bedingung: Zeit, Ort, Preis, für wen. Passt eine Kleinigkeit nicht, ist es die falsche Anzeige.",
   "zeichen": "📰",
   "farbe": "gold",
   "punkte": 5,
   "runden": [
    {
     "id": "dzl2s1",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Schwimmverein Neustadt",
       "zeilen": [
        "Schwimmen lernen ist nie zu spät!",
        "Kurs für Erwachsene ohne Vorkenntnisse, Hallenbad Nord.",
        "Dienstags 19 bis 20 Uhr, 8 Termine, 60 Euro."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "b",
       "quelle": "Nachbarschaftshaus Lindenhof",
       "zeilen": [
        "Fahrrad kaputt? In unserer Werkstatt reparieren Sie Ihr Rad selbst.",
        "Werkzeug ist da, ein Helfer zeigt Ihnen alles.",
        "Samstags 10 bis 14 Uhr, kostenlos, eine kleine Spende freut uns."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "c",
       "quelle": "Volkshochschule Neustadt",
       "zeilen": [
        "Nähen für Anfänger: Wir nähen eine Tasche und eine Kissenhülle.",
        "Mittwochs 9.30 bis 11.30 Uhr.",
        "Für Kinder ab 1 Jahr gibt es eine Betreuung im Nebenraum."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "d",
       "quelle": "Stoffladen Fadenreich",
       "zeilen": [
        "Nähabend für Fortgeschrittene, donnerstags ab 19 Uhr.",
        "Bitte eigene Nähmaschine mitbringen.",
        "Kosten: 12 Euro pro Abend."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "e",
       "quelle": "Volkshochschule Neustadt",
       "zeilen": [
        "Schnell und gesund kochen nach der Arbeit.",
        "Vier Abende, jeweils Donnerstag 18 Uhr, Kochstudio 4. Etage.",
        "45 Euro plus 15 Euro für Lebensmittel."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "f",
       "quelle": "Musikschule Klangwerk",
       "zeilen": [
        "Gitarre für Kinder von 8 bis 12 Jahren.",
        "Kleine Gruppen, Leihgitarren vorhanden.",
        "Probestunde kostenlos."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "g",
       "quelle": "Hallenbad Süd",
       "zeilen": [
        "Schwimmen nur für Frauen, jeden Sonntag 8 bis 10 Uhr.",
        "Nur weibliches Personal.",
        "Eintritt 3,50 Euro."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "h",
       "quelle": "Lauftreff Stadtpark",
       "zeilen": [
        "Laufen in der Gruppe macht mehr Spaß!",
        "Jeden Montag und Donnerstag um 18.30 Uhr am Eingang Stadtpark.",
        "Für alle, auch für Anfänger. Kostenlos, ohne Anmeldung."
       ],
       "motiv": "anzeige"
      }
     ],
     "aufgaben": [
      {
       "situation": "Sie können nicht schwimmen und möchten es lernen. Sie haben nur abends Zeit.",
       "loesung": "a",
       "erklaerung": "Anzeige a ist ein Kurs ohne Vorkenntnisse am Abend. In g kann man nur schwimmen, es ist kein Kurs, und es ist am Sonntagmorgen.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Ihre Nachbarin möchte nähen lernen. Sie hat einen kleinen Sohn und niemanden, der auf ihn aufpasst.",
       "loesung": "c",
       "erklaerung": "Kurs c ist für Anfänger und hat eine Kinderbetreuung. Anzeige d ist für Fortgeschrittene.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Ihr Fahrrad hat einen Platten. Eine Werkstatt ist Ihnen zu teuer.",
       "loesung": "b",
       "erklaerung": "In b repariert man sein Rad selbst und kostenlos.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Sie möchten am Wochenende mit anderen Leuten Fußball spielen.",
       "loesung": "x",
       "erklaerung": "Keine Anzeige bietet Fußball an. Der Lauftreff h ist Sport, aber Laufen und nur an Wochentagen.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Ihr Mann möchte nach der Arbeit Sport machen. Er will dafür aber nichts bezahlen.",
       "loesung": "h",
       "erklaerung": "Der Lauftreff ist am Abend und kostenlos. Schwimmkurs und Frauenschwimmen kosten Geld.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      }
     ]
    },
    {
     "id": "dzl2s2",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Privat",
       "zeilen": [
        "2-Zimmer-Wohnung, 54 m², Innenstadt, 3. Stock ohne Aufzug.",
        "620 Euro warm, frei ab 1. März.",
        "Keine Haustiere."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "b",
       "quelle": "Wohnbau Neustadt",
       "zeilen": [
        "3-Zimmer-Wohnung im Erdgeschoss mit Garten, 78 m², Stadtteil Süd.",
        "Kita und Grundschule in der Nähe.",
        "890 Euro kalt, Haustiere erlaubt."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "c",
       "quelle": "WG Kastanienweg",
       "zeilen": [
        "Zimmer in netter WG frei, 16 m², Küche und Bad zusammen.",
        "Gern für Studenten oder Azubis.",
        "380 Euro warm, Internet inklusive."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "d",
       "quelle": "Apartmenthaus am Bahnhof",
       "zeilen": [
        "Möblierte 1-Zimmer-Apartments für Monteure und Pendler.",
        "Nur befristet, 1 bis 6 Monate.",
        "Ab 750 Euro im Monat."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "e",
       "quelle": "Umzüge Kaya",
       "zeilen": [
        "Wir tragen, Sie entspannen!",
        "Zwei Helfer mit Transporter, auch am Wochenende.",
        "Ab 35 Euro pro Stunde."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "f",
       "quelle": "Autovermietung Mobil",
       "zeilen": [
        "Transporter zu vermieten, fahren mit Führerschein Klasse B.",
        "49 Euro pro Tag, 200 km frei.",
        "Auch samstags geöffnet."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "g",
       "quelle": "Gebrauchtwarenhaus Zweite Hand",
       "zeilen": [
        "Sie brauchen Ihre Möbel nicht mehr?",
        "Wir holen gut erhaltene Möbel kostenlos bei Ihnen ab.",
        "Bitte vorher Fotos per Mail schicken."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "h",
       "quelle": "Privat",
       "zeilen": [
        "Ältere Dame sucht kleine Wohnung im Erdgeschoss.",
        "Biete dafür meine 4-Zimmer-Altbauwohnung im 4. Stock zum Tausch."
       ],
       "motiv": "anzeige"
      }
     ],
     "aufgaben": [
      {
       "situation": "Familie Petrović hat zwei Kinder und einen Hund. Sie sucht eine größere Wohnung, am liebsten mit Garten.",
       "loesung": "b",
       "erklaerung": "Wohnung b hat einen Garten, drei Zimmer und erlaubt Haustiere.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Sie ziehen am Samstag um. Ihre Freunde helfen beim Tragen, aber Sie haben kein großes Auto.",
       "loesung": "f",
       "erklaerung": "Sie brauchen nur ein Auto, keine Helfer. Den Transporter in f kann man mit normalem Führerschein fahren.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Ihre neue Wohnung ist kleiner. Ihr altes Sofa und ein Schrank passen nicht hinein. Sie möchten die Möbel weggeben.",
       "loesung": "g",
       "erklaerung": "Das Gebrauchtwarenhaus holt gute Möbel kostenlos ab.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Herr Osei macht in Neustadt eine Ausbildung. Er sucht ein günstiges Zimmer.",
       "loesung": "c",
       "erklaerung": "Das WG-Zimmer ist günstig und ausdrücklich für Azubis.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Ihre Großmutter kann keine Treppen mehr steigen. Sie sucht eine kleine Wohnung in der Innenstadt.",
       "loesung": "x",
       "erklaerung": "Wohnung a liegt in der Innenstadt, aber im 3. Stock ohne Aufzug. In h sucht jemand selbst eine Wohnung im Erdgeschoss.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      }
     ]
    },
    {
     "id": "dzl2s3",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Zahnarztpraxis Dr. Kowalski",
       "zeilen": [
        "Neue Patienten willkommen.",
        "Wir nehmen uns besonders viel Zeit für Patienten mit Angst.",
        "Termine auch samstags. Wir sprechen Deutsch, Polnisch und Englisch."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "b",
       "quelle": "Kinderarztpraxis Dr. Haddad",
       "zeilen": [
        "Sprechstunde ohne Termin Montag bis Freitag 8 bis 10 Uhr.",
        "Wir nehmen zurzeit leider keine neuen Patienten auf."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "c",
       "quelle": "Kinder- und Jugendarzt Dr. Brenner",
       "zeilen": [
        "Wir freuen uns über neue Patienten.",
        "Abendsprechstunde jeden Donnerstag bis 19 Uhr.",
        "Termine bitte telefonisch."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "d",
       "quelle": "Hausarztpraxis am Markt",
       "zeilen": [
        "Allgemeinmedizin, alle Kassen.",
        "Für ältere und kranke Patienten machen wir Hausbesuche."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "e",
       "quelle": "Praxis für Physiotherapie Lange",
       "zeilen": [
        "Krankengymnastik, Massage, Lymphdrainage.",
        "Alle Kassen, mit Rezept vom Arzt.",
        "Termine Montag bis Freitag von 7 bis 15 Uhr."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "f",
       "quelle": "Krankenkasse Gesund Plus",
       "zeilen": [
        "Rückenschule für unsere Versicherten.",
        "10 Termine, dienstags 10 Uhr, kostenlos."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "g",
       "quelle": "Hebammenpraxis Kugelrund",
       "zeilen": [
        "Kurse zur Geburtsvorbereitung und Rückbildung.",
        "Beratung auch auf Arabisch und Englisch.",
        "Bitte früh anmelden, am besten ab der 12. Woche."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "h",
       "quelle": "Optik Sommer",
       "zeilen": [
        "Sehtest kostenlos.",
        "Brillen schon ab 49 Euro."
       ],
       "motiv": "anzeige"
      }
     ],
     "aufgaben": [
      {
       "situation": "Ihre Familie ist neu in der Stadt. Ihr Sohn ist vier und braucht einen Kinderarzt. Sie arbeiten beide bis 17 Uhr.",
       "loesung": "c",
       "erklaerung": "Dr. Brenner nimmt neue Patienten und hat abends Sprechstunde. Dr. Haddad nimmt niemanden Neues.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Sie haben große Angst vor dem Zahnarzt. Seit Wochen tut ein Zahn weh, aber Sie gehen nicht hin.",
       "loesung": "a",
       "erklaerung": "Praxis a kümmert sich besonders um Patienten mit Angst.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Ihre Mutter ist 82 Jahre alt. Sie kann nicht mehr allein zum Arzt gehen.",
       "loesung": "d",
       "erklaerung": "Die Hausarztpraxis macht Hausbesuche, der Arzt kommt also nach Hause.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Sie bekommen im Sommer ein Baby und möchten sich gut vorbereiten.",
       "loesung": "g",
       "erklaerung": "Die Hebammenpraxis bietet Kurse zur Geburtsvorbereitung.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Ihr Arzt hat Ihnen Krankengymnastik verschrieben. Sie arbeiten bis 17 Uhr und haben erst danach Zeit.",
       "loesung": "x",
       "erklaerung": "Praxis e hat nur bis 15 Uhr Termine. Die Rückenschule f ist ein Kurs am Vormittag.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "textwahl",
   "name": "Lesen: Kurze Texte",
   "kurz": "Drei Texte, je eine Aufgabe richtig/falsch und a/b/c",
   "was": "Drei kurze Texte: eine E-Mail, ein Brief, ein Aushang. Zu jedem Text erst richtig oder falsch, dann eine Aufgabe mit drei Antworten.",
   "tipp": "Lies zuerst die Aufgabe, dann such die Stelle im Text. Achte auf „nicht\", „nur\", „bis\".",
   "zeichen": "✉️",
   "farbe": "rot",
   "punkte": 6,
   "runden": [
    {
     "id": "dzl3s1",
     "aufgaben": [
      {
       "art": "rf",
       "satz": "Am Donnerstag gibt es keinen Unterricht.",
       "loesung": false,
       "stelle": "Der Unterricht fällt aber nicht aus",
       "erklaerung": "Der Unterricht findet statt, nur mit einem anderen Lehrer.",
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Kursleiterin",
        "titel": "Unterricht am Donnerstag",
        "zeilen": [
         "Liebe Teilnehmer,",
         "am Donnerstag, 14. November, bin ich auf einer Fortbildung. Der Unterricht fällt aber nicht aus: Herr Baumann vertritt mich. Wir sind an diesem Tag ausnahmsweise in Raum 204 im zweiten Stock.",
         "Bitte bringen Sie Ihre Hausaufgaben von Seite 46 mit. Herr Baumann sammelt sie ein und gibt sie mir.",
         "Viele Grüße, Sabine Krüger"
        ]
       }
      },
      {
       "frage": "Die Teilnehmer sollen am Donnerstag …",
       "opt": [
        "in einen anderen Raum gehen.",
        "die Hausaufgaben per E-Mail schicken.",
        "Frau Krüger anrufen."
       ],
       "loesung": 0,
       "stelle": "Wir sind an diesem Tag ausnahmsweise in Raum 204",
       "erklaerung": "„Ausnahmsweise“ heißt: nur an diesem Tag anders. Die Hausaufgaben bringen sie mit.",
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Kursleiterin",
        "titel": "Unterricht am Donnerstag",
        "zeilen": [
         "Liebe Teilnehmer,",
         "am Donnerstag, 14. November, bin ich auf einer Fortbildung. Der Unterricht fällt aber nicht aus: Herr Baumann vertritt mich. Wir sind an diesem Tag ausnahmsweise in Raum 204 im zweiten Stock.",
         "Bitte bringen Sie Ihre Hausaufgaben von Seite 46 mit. Herr Baumann sammelt sie ein und gibt sie mir.",
         "Viele Grüße, Sabine Krüger"
        ]
       }
      },
      {
       "art": "rf",
       "satz": "Die Mieter haben am Dienstag den ganzen Tag kein Wasser.",
       "loesung": false,
       "stelle": "Von 8 bis ungefähr 13 Uhr gibt es im ganzen Haus kein Wasser.",
       "erklaerung": "Das Wasser fehlt nur am Vormittag, nicht den ganzen Tag.",
       "text": {
        "sorte": "seite",
        "quelle": "Aushang im Treppenhaus",
        "titel": "Arbeiten an den Wasserleitungen",
        "zeilen": [
         "Liebe Mieter,",
         "am Dienstag, 19. November, werden im Keller neue Wasserleitungen eingebaut. Von 8 bis ungefähr 13 Uhr gibt es im ganzen Haus kein Wasser.",
         "Bitte stellen Sie sich vorher Wasser zum Trinken und Kochen bereit. Nach den Arbeiten kann das Wasser am Anfang etwas braun sein. Lassen Sie es dann zwei Minuten laufen.",
         "Ihre Hausverwaltung Kramer"
        ]
       }
      },
      {
       "frage": "Wenn das Wasser nach den Arbeiten braun ist, sollen die Mieter …",
       "opt": [
        "die Hausverwaltung anrufen.",
        "das Wasser kurz laufen lassen.",
        "kein Wasser mehr trinken."
       ],
       "loesung": 1,
       "stelle": "Lassen Sie es dann zwei Minuten laufen.",
       "erklaerung": "Man lässt das Wasser zwei Minuten laufen, dann ist es wieder klar.",
       "text": {
        "sorte": "seite",
        "quelle": "Aushang im Treppenhaus",
        "titel": "Arbeiten an den Wasserleitungen",
        "zeilen": [
         "Liebe Mieter,",
         "am Dienstag, 19. November, werden im Keller neue Wasserleitungen eingebaut. Von 8 bis ungefähr 13 Uhr gibt es im ganzen Haus kein Wasser.",
         "Bitte stellen Sie sich vorher Wasser zum Trinken und Kochen bereit. Nach den Arbeiten kann das Wasser am Anfang etwas braun sein. Lassen Sie es dann zwei Minuten laufen.",
         "Ihre Hausverwaltung Kramer"
        ]
       }
      },
      {
       "art": "rf",
       "satz": "Herr Haddad muss für die verspäteten Tage etwas bezahlen.",
       "loesung": true,
       "stelle": "Die Gebühr für die letzten Tage müssen Sie aber trotzdem bezahlen.",
       "erklaerung": "Auch wenn er verlängert, zahlt er für die Tage nach dem 4. November.",
       "text": {
        "sorte": "brief",
        "quelle": "Brief der Stadtbibliothek",
        "titel": "Erinnerung: Rückgabe Ihrer Bücher",
        "zeilen": [
         "Sehr geehrter Herr Haddad,",
         "die Leihfrist für zwei Bücher ist am 4. November zu Ende gegangen. Bitte bringen Sie die Bücher bald zurück. Für jeden Tag und jedes Buch kostet es 20 Cent Gebühr.",
         "Sie können die Leihfrist auch online verlängern, wenn kein anderer Leser die Bücher bestellt hat. Die Gebühr für die letzten Tage müssen Sie aber trotzdem bezahlen.",
         "Mit freundlichen Grüßen, Ihre Stadtbibliothek Neustadt"
        ]
       }
      },
      {
       "frage": "Herr Haddad kann die Leihfrist verlängern, …",
       "opt": [
        "wenn er in die Bibliothek kommt.",
        "wenn niemand sonst die Bücher haben möchte.",
        "aber nur bis zum 4. November."
       ],
       "loesung": 1,
       "stelle": "wenn kein anderer Leser die Bücher bestellt hat",
       "erklaerung": "Verlängern geht nur, wenn kein anderer Leser die Bücher bestellt hat. Online geht es auch ohne Besuch.",
       "text": {
        "sorte": "brief",
        "quelle": "Brief der Stadtbibliothek",
        "titel": "Erinnerung: Rückgabe Ihrer Bücher",
        "zeilen": [
         "Sehr geehrter Herr Haddad,",
         "die Leihfrist für zwei Bücher ist am 4. November zu Ende gegangen. Bitte bringen Sie die Bücher bald zurück. Für jeden Tag und jedes Buch kostet es 20 Cent Gebühr.",
         "Sie können die Leihfrist auch online verlängern, wenn kein anderer Leser die Bücher bestellt hat. Die Gebühr für die letzten Tage müssen Sie aber trotzdem bezahlen.",
         "Mit freundlichen Grüßen, Ihre Stadtbibliothek Neustadt"
        ]
       }
      }
     ]
    },
    {
     "id": "dzl3s2",
     "aufgaben": [
      {
       "art": "rf",
       "satz": "Die Kinder essen im Tierpark zu Mittag.",
       "loesung": false,
       "stelle": "Das Mittagessen essen wir zusammen in der Kita",
       "erklaerung": "Im Tierpark gibt es nur das Frühstück von zu Hause. Mittagessen ist in der Kita.",
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Kita Sonnenblume",
        "titel": "Ausflug in den Tierpark",
        "zeilen": [
         "Liebe Eltern,",
         "am Freitag fahren wir mit den Vorschulkindern in den Tierpark. Wir treffen uns um 8.15 Uhr in der Kita, nicht wie sonst um 8.30 Uhr. Bitte geben Sie Ihrem Kind ein Frühstück und etwas zu trinken mit.",
         "Das Mittagessen essen wir zusammen in der Kita, wir sind gegen 12.30 Uhr zurück.",
         "Der Eintritt kostet 3 Euro. Bitte geben Sie das Geld bis Mittwoch in einem Umschlag mit dem Namen Ihres Kindes ab.",
         "Ihr Team der Kita Sonnenblume"
        ]
       }
      },
      {
       "frage": "Die Eltern sollen …",
       "opt": [
        "ihr Kind am Freitag um 8.30 Uhr bringen.",
        "das Geld bis Mittwoch abgeben.",
        "ein Mittagessen mitgeben."
       ],
       "loesung": 1,
       "stelle": "Bitte geben Sie das Geld bis Mittwoch in einem Umschlag",
       "erklaerung": "Am Freitag ist Treffpunkt schon um 8.15 Uhr. Mitgeben soll man nur Frühstück und etwas zu trinken.",
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Kita Sonnenblume",
        "titel": "Ausflug in den Tierpark",
        "zeilen": [
         "Liebe Eltern,",
         "am Freitag fahren wir mit den Vorschulkindern in den Tierpark. Wir treffen uns um 8.15 Uhr in der Kita, nicht wie sonst um 8.30 Uhr. Bitte geben Sie Ihrem Kind ein Frühstück und etwas zu trinken mit.",
         "Das Mittagessen essen wir zusammen in der Kita, wir sind gegen 12.30 Uhr zurück.",
         "Der Eintritt kostet 3 Euro. Bitte geben Sie das Geld bis Mittwoch in einem Umschlag mit dem Namen Ihres Kindes ab.",
         "Ihr Team der Kita Sonnenblume"
        ]
       }
      },
      {
       "art": "rf",
       "satz": "Leere Flaschen kann man zurzeit nicht zurückgeben.",
       "loesung": false,
       "stelle": "Bitte geben Sie leere Flaschen bis dahin an der Kasse ab.",
       "erklaerung": "Nur der Automat ist kaputt. Die Flaschen nimmt die Kasse.",
       "text": {
        "sorte": "seite",
        "quelle": "Aushang im Supermarkt",
        "titel": "Neue Öffnungszeiten",
        "zeilen": [
         "Ab 1. Dezember haben wir Montag bis Samstag von 7 bis 22 Uhr für Sie geöffnet.",
         "Unsere Bäckerei am Eingang öffnet schon um 6.30 Uhr.",
         "Der Pfandautomat ist wegen einer Reparatur bis zum 6. Dezember außer Betrieb. Bitte geben Sie leere Flaschen bis dahin an der Kasse ab."
        ]
       }
      },
      {
       "frage": "Die Bäckerei …",
       "opt": [
        "öffnet früher als der Supermarkt.",
        "hat ab Dezember geschlossen.",
        "ist bis zum 6. Dezember geschlossen."
       ],
       "loesung": 0,
       "stelle": "Unsere Bäckerei am Eingang öffnet schon um 6.30 Uhr.",
       "erklaerung": "Die Bäckerei öffnet um 6.30 Uhr, der Markt erst um 7 Uhr.",
       "text": {
        "sorte": "seite",
        "quelle": "Aushang im Supermarkt",
        "titel": "Neue Öffnungszeiten",
        "zeilen": [
         "Ab 1. Dezember haben wir Montag bis Samstag von 7 bis 22 Uhr für Sie geöffnet.",
         "Unsere Bäckerei am Eingang öffnet schon um 6.30 Uhr.",
         "Der Pfandautomat ist wegen einer Reparatur bis zum 6. Dezember außer Betrieb. Bitte geben Sie leere Flaschen bis dahin an der Kasse ab."
        ]
       }
      },
      {
       "art": "rf",
       "satz": "Frau Kaya soll am Morgen vor dem Termin nichts essen.",
       "loesung": true,
       "stelle": "Bitte kommen Sie nüchtern, also ohne Frühstück",
       "erklaerung": "„Nüchtern“ heißt: ohne Essen. Das ist wichtig für die Blutabnahme.",
       "text": {
        "sorte": "brief",
        "quelle": "Brief der Hausarztpraxis",
        "titel": "Ihr Termin am 21. November",
        "zeilen": [
         "Sehr geehrte Frau Kaya,",
         "Ihr Termin am 21. November um 10 Uhr muss leider verschoben werden, weil Frau Dr. Wolff krank ist. Wir haben für Sie einen neuen Termin am 28. November um 9.30 Uhr reserviert.",
         "Wenn Sie an diesem Tag keine Zeit haben, rufen Sie uns bitte an.",
         "Bitte kommen Sie nüchtern, also ohne Frühstück, weil wir Blut abnehmen.",
         "Mit freundlichen Grüßen, Ihr Praxisteam"
        ]
       }
      },
      {
       "frage": "Wenn Frau Kaya am 28. November nicht kann, …",
       "opt": [
        "soll sie in der Praxis anrufen.",
        "bekommt sie automatisch einen neuen Termin.",
        "kann sie am 21. November kommen."
       ],
       "loesung": 0,
       "stelle": "rufen Sie uns bitte an",
       "erklaerung": "Sie muss selbst anrufen. Der Termin am 21. findet nicht statt.",
       "text": {
        "sorte": "brief",
        "quelle": "Brief der Hausarztpraxis",
        "titel": "Ihr Termin am 21. November",
        "zeilen": [
         "Sehr geehrte Frau Kaya,",
         "Ihr Termin am 21. November um 10 Uhr muss leider verschoben werden, weil Frau Dr. Wolff krank ist. Wir haben für Sie einen neuen Termin am 28. November um 9.30 Uhr reserviert.",
         "Wenn Sie an diesem Tag keine Zeit haben, rufen Sie uns bitte an.",
         "Bitte kommen Sie nüchtern, also ohne Frühstück, weil wir Blut abnehmen.",
         "Mit freundlichen Grüßen, Ihr Praxisteam"
        ]
       }
      }
     ]
    },
    {
     "id": "dzl3s3",
     "aufgaben": [
      {
       "art": "rf",
       "satz": "Herr Pohl gibt Frau Okafor den Schlüssel persönlich.",
       "loesung": false,
       "stelle": "Den Schlüssel werfe ich Ihnen am Freitag in den Briefkasten.",
       "erklaerung": "Der Schlüssel kommt in den Briefkasten, nicht in die Hand.",
       "text": {
        "sorte": "email",
        "quelle": "E-Mail vom Nachbarn",
        "titel": "Kleine Bitte",
        "zeilen": [
         "Hallo Frau Okafor,",
         "ich fahre von Samstag bis Mittwoch zu meiner Tochter nach Hamburg. Könnten Sie meine Blumen auf dem Balkon gießen? Einmal am Tag reicht, am besten abends.",
         "Den Schlüssel werfe ich Ihnen am Freitag in den Briefkasten. Ein Paket für mich kommt wahrscheinlich am Montag. Wenn Sie zu Hause sind, nehmen Sie es bitte an.",
         "Vielen Dank und viele Grüße, Jürgen Pohl"
        ]
       }
      },
      {
       "frage": "Frau Okafor soll …",
       "opt": [
        "die Blumen jeden Morgen gießen.",
        "ein Paket für Herrn Pohl annehmen, wenn sie da ist.",
        "am Montag ein Paket zur Post bringen."
       ],
       "loesung": 1,
       "stelle": "Wenn Sie zu Hause sind, nehmen Sie es bitte an.",
       "erklaerung": "Sie soll das Paket annehmen. Gießen soll sie am besten abends.",
       "text": {
        "sorte": "email",
        "quelle": "E-Mail vom Nachbarn",
        "titel": "Kleine Bitte",
        "zeilen": [
         "Hallo Frau Okafor,",
         "ich fahre von Samstag bis Mittwoch zu meiner Tochter nach Hamburg. Könnten Sie meine Blumen auf dem Balkon gießen? Einmal am Tag reicht, am besten abends.",
         "Den Schlüssel werfe ich Ihnen am Freitag in den Briefkasten. Ein Paket für mich kommt wahrscheinlich am Montag. Wenn Sie zu Hause sind, nehmen Sie es bitte an.",
         "Vielen Dank und viele Grüße, Jürgen Pohl"
        ]
       }
      },
      {
       "art": "rf",
       "satz": "Am Samstag um 20 Uhr dürfen keine Autos durch die Bahnhofstraße fahren.",
       "loesung": true,
       "stelle": "Die Straße ist von 10 bis 23 Uhr für Autos gesperrt.",
       "erklaerung": "20 Uhr liegt zwischen 10 und 23 Uhr. Die Straße ist dann gesperrt.",
       "text": {
        "sorte": "seite",
        "quelle": "Mitteilung der Stadt Neustadt",
        "titel": "Sommerfest: Bahnhofstraße gesperrt",
        "zeilen": [
         "Am Samstag, 7. Juni, feiern wir das Sommerfest in der Bahnhofstraße. Die Straße ist von 10 bis 23 Uhr für Autos gesperrt.",
         "Anwohner können ihre Autos schon am Freitagabend auf dem Parkplatz am Marktplatz kostenlos abstellen.",
         "Die Buslinie 5 fährt an diesem Tag über die Gartenstraße."
        ]
       }
      },
      {
       "frage": "Die Buslinie 5 …",
       "opt": [
        "fährt am Samstag nicht.",
        "fährt am Samstag eine andere Strecke.",
        "hält am Samstag am Marktplatz."
       ],
       "loesung": 1,
       "stelle": "Die Buslinie 5 fährt an diesem Tag über die Gartenstraße.",
       "erklaerung": "Der Bus fährt, aber über eine andere Straße. Der Marktplatz ist für die Autos.",
       "text": {
        "sorte": "seite",
        "quelle": "Mitteilung der Stadt Neustadt",
        "titel": "Sommerfest: Bahnhofstraße gesperrt",
        "zeilen": [
         "Am Samstag, 7. Juni, feiern wir das Sommerfest in der Bahnhofstraße. Die Straße ist von 10 bis 23 Uhr für Autos gesperrt.",
         "Anwohner können ihre Autos schon am Freitagabend auf dem Parkplatz am Marktplatz kostenlos abstellen.",
         "Die Buslinie 5 fährt an diesem Tag über die Gartenstraße."
        ]
       }
      },
      {
       "art": "rf",
       "satz": "Herr Lindqvist muss am 15. Januar unbedingt zu Hause sein.",
       "loesung": false,
       "stelle": "Wenn Sie nicht zu Hause sind, können Sie den Zählerstand auch selbst ablesen.",
       "erklaerung": "Er kann den Zählerstand auch selbst schicken.",
       "text": {
        "sorte": "brief",
        "quelle": "Brief der Stadtwerke",
        "titel": "Ablesung Ihres Stromzählers",
        "zeilen": [
         "Sehr geehrter Herr Lindqvist,",
         "am Mittwoch, 15. Januar, liest unser Mitarbeiter zwischen 8 und 12 Uhr in Ihrem Haus die Stromzähler ab. Bitte sorgen Sie dafür, dass er in den Keller kommen kann.",
         "Wenn Sie nicht zu Hause sind, können Sie den Zählerstand auch selbst ablesen. Teilen Sie ihn uns bis zum 20. Januar online oder mit der Karte im Brief mit. Die Karte müssen Sie nicht frankieren.",
         "Mit freundlichen Grüßen, Ihre Stadtwerke Neustadt"
        ]
       }
      },
      {
       "frage": "Die Karte …",
       "opt": [
        "kostet kein Porto.",
        "muss bis zum 15. Januar bei den Stadtwerken sein.",
        "bringt der Mitarbeiter mit."
       ],
       "loesung": 0,
       "stelle": "Die Karte müssen Sie nicht frankieren.",
       "erklaerung": "„Nicht frankieren“ heißt: keine Briefmarke nötig. Die Frist ist der 20. Januar.",
       "text": {
        "sorte": "brief",
        "quelle": "Brief der Stadtwerke",
        "titel": "Ablesung Ihres Stromzählers",
        "zeilen": [
         "Sehr geehrter Herr Lindqvist,",
         "am Mittwoch, 15. Januar, liest unser Mitarbeiter zwischen 8 und 12 Uhr in Ihrem Haus die Stromzähler ab. Bitte sorgen Sie dafür, dass er in den Keller kommen kann.",
         "Wenn Sie nicht zu Hause sind, können Sie den Zählerstand auch selbst ablesen. Teilen Sie ihn uns bis zum 20. Januar online oder mit der Karte im Brief mit. Die Karte müssen Sie nicht frankieren.",
         "Mit freundlichen Grüßen, Ihre Stadtwerke Neustadt"
        ]
       }
      }
     ]
    }
   ]
  },
  {
   "nr": 4,
   "art": "rf",
   "name": "Lesen: Informationsblatt",
   "kurz": "Eine Broschüre, drei Aussagen richtig/falsch",
   "was": "Ein Informationsblatt, zum Beispiel von der Krankenkasse oder der Volkshochschule. Drei Aussagen: richtig oder falsch?",
   "tipp": "Regeln haben Ausnahmen: „außer\", „nur mit Termin\", „ab sechzehn Jahren\".",
   "zeichen": "📋",
   "farbe": "lila",
   "punkte": 3,
   "runden": [
    {
     "id": "dzl4s1",
     "texte": [
      {
       "sorte": "aushang",
       "von": "Infoblatt des Bürgerbüros Neustadt",
       "betreff": "Personalausweis beantragen",
       "zeilen": [
        "Den Personalausweis beantragen Sie im Bürgerbüro im Rathaus. Bitte machen Sie vorher online oder am Telefon einen Termin. Ohne Termin können wir Sie leider nur in Notfällen bedienen.",
        "Bringen Sie zum Termin Ihren alten Ausweis mit. Wenn er verloren ist, brauchen Sie Ihre Geburtsurkunde oder Ihren Reisepass.",
        "Sie brauchen außerdem ein biometrisches Foto. Das Foto können Sie direkt im Bürgerbüro an unserem Fotoautomaten machen. Es kostet 6 Euro.",
        "Der Ausweis kostet für Personen ab 24 Jahren 37 Euro, für jüngere Personen 22,80 Euro. Sie können bar oder mit Karte bezahlen.",
        "Nach etwa drei bis vier Wochen ist der Ausweis fertig. Sie bekommen dann einen Brief mit Ihrer PIN. Den Ausweis müssen Sie persönlich abholen. Eine andere Person kann ihn nur mit einer Vollmacht von Ihnen abholen.",
        "Brauchen Sie schnell einen Ausweis, zum Beispiel für eine Reise? Dann fragen Sie nach einem vorläufigen Personalausweis. Er ist sofort fertig und kostet 10 Euro."
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Für das Foto müssen Sie nicht in ein Fotostudio gehen.",
       "loesung": true,
       "stelle": "Das Foto können Sie direkt im Bürgerbüro an unserem Fotoautomaten machen.",
       "erklaerung": "Im Bürgerbüro gibt es einen Fotoautomaten."
      },
      {
       "satz": "Der neue Ausweis wird Ihnen mit der Post geschickt.",
       "loesung": false,
       "stelle": "Den Ausweis müssen Sie persönlich abholen.",
       "erklaerung": "Mit der Post kommt nur der Brief mit der PIN. Den Ausweis holt man ab."
      },
      {
       "satz": "Ohne Termin können Sie jederzeit ins Bürgerbüro kommen.",
       "loesung": false,
       "stelle": "Ohne Termin können wir Sie leider nur in Notfällen bedienen.",
       "erklaerung": "Ohne Termin geht es nur im Notfall, nicht jederzeit."
      }
     ]
    },
    {
     "id": "dzl4s2",
     "texte": [
      {
       "sorte": "aushang",
       "von": "Programmheft der Volkshochschule Neustadt",
       "betreff": "Anmeldung und Bezahlung",
       "zeilen": [
        "Sie können sich online, per E-Mail oder persönlich in unserer Geschäftsstelle anmelden. Die Anmeldung ist verbindlich. Sie bekommen danach eine Bestätigung per E-Mail oder per Post.",
        "Die Kursgebühr buchen wir etwa eine Woche vor Kursbeginn von Ihrem Konto ab. Bar bezahlen können Sie nur in der Geschäftsstelle.",
        "Wenn Sie nicht teilnehmen können, melden Sie sich bitte spätestens zehn Tage vor Kursbeginn ab. Dann kostet die Abmeldung nichts. Danach müssen Sie die ganze Gebühr bezahlen, außer jemand anderes übernimmt Ihren Platz.",
        "Kommen weniger als acht Personen zu einem Kurs, kann der Kurs ausfallen. Wir informieren Sie dann spätestens zwei Tage vorher. Geld, das Sie schon bezahlt haben, bekommen Sie zurück.",
        "Menschen mit wenig Geld bekommen 50 Prozent Ermäßigung, zum Beispiel mit dem Neustadt-Pass. Bitte zeigen Sie den Nachweis bei der Anmeldung.",
        "Für Integrationskurse gelten andere Regeln. Bitte lassen Sie sich dazu persönlich in Raum 104 beraten."
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Wer sich eine Woche vor Kursbeginn abmeldet und keinen Ersatz findet, muss die ganze Gebühr bezahlen.",
       "loesung": true,
       "stelle": "Danach müssen Sie die ganze Gebühr bezahlen",
       "erklaerung": "Kostenlos ist die Abmeldung nur bis zehn Tage vorher. Eine Woche ist zu spät."
      },
      {
       "satz": "Wenn ein Kurs ausfällt, bekommt man sein Geld zurück.",
       "loesung": true,
       "stelle": "Geld, das Sie schon bezahlt haben, bekommen Sie zurück.",
       "erklaerung": "Bei einem Ausfall gibt es das Geld zurück."
      },
      {
       "satz": "Die Kursgebühr bezahlt man am ersten Kurstag bar bei der Kursleitung.",
       "loesung": false,
       "stelle": "Die Kursgebühr buchen wir etwa eine Woche vor Kursbeginn von Ihrem Konto ab.",
       "erklaerung": "Das Geld wird vom Konto abgebucht. Bar geht nur in der Geschäftsstelle."
      }
     ]
    },
    {
     "id": "dzl4s3",
     "texte": [
      {
       "sorte": "aushang",
       "von": "Infoblatt der Krankenkasse Gesund Plus",
       "betreff": "Gesunde Zähne: Kontrolle und Bonusheft",
       "zeilen": [
        "Gehen Sie einmal im Jahr zur Kontrolle zum Zahnarzt. Für Erwachsene ist diese Untersuchung kostenlos. Sie brauchen nur Ihre Gesundheitskarte.",
        "Lassen Sie sich jedes Mal einen Stempel in Ihr Bonusheft geben. Das Bonusheft bekommen Sie beim Zahnarzt oder bei uns.",
        "Wenn Sie später Zahnersatz brauchen, zum Beispiel eine Krone, zahlen wir einen festen Betrag dazu. Mit einem vollen Bonusheft über fünf Jahre bekommen Sie mehr Geld, über zehn Jahre noch mehr.",
        "Kinder und Jugendliche zwischen 6 und 18 Jahren sollen zweimal im Jahr zur Kontrolle gehen. Auch für sie ist die Untersuchung kostenlos.",
        "Eine professionelle Zahnreinigung bezahlt die Krankenkasse normalerweise nicht. Wir geben Ihnen aber einmal im Jahr bis zu 40 Euro dazu. Schicken Sie uns dafür die Rechnung.",
        "Haben Sie Ihr Bonusheft verloren? Ihr Zahnarzt kann Ihnen die Termine der letzten Jahre bestätigen."
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Für die Kontrolle beim Zahnarzt müssen Erwachsene nichts bezahlen.",
       "loesung": true,
       "stelle": "Für Erwachsene ist diese Untersuchung kostenlos.",
       "erklaerung": "Die Kontrolle einmal im Jahr ist kostenlos."
      },
      {
       "satz": "Die Krankenkasse bezahlt die ganze Zahnreinigung.",
       "loesung": false,
       "stelle": "Wir geben Ihnen aber einmal im Jahr bis zu 40 Euro dazu.",
       "erklaerung": "Die Kasse gibt nur einen Teil dazu, höchstens 40 Euro."
      },
      {
       "satz": "Wer sein Bonusheft verloren hat, kann beim Zahnarzt Hilfe bekommen.",
       "loesung": true,
       "stelle": "Ihr Zahnarzt kann Ihnen die Termine der letzten Jahre bestätigen.",
       "erklaerung": "Der Zahnarzt bestätigt die alten Termine, so geht der Bonus nicht verloren."
      }
     ]
    }
   ]
  },
  {
   "nr": 5,
   "art": "textwahl",
   "name": "Lesen: Brief mit Lücken",
   "kurz": "Ein formeller Brief, sechs Lücken a/b/c",
   "was": "Ein formeller Brief, zum Beispiel eine Beschwerde oder Kündigung, mit sechs Lücken. Für jede Lücke drei Möglichkeiten.",
   "tipp": "Lies den ganzen Satz. Präposition, Verbform oder feste Wendung: Was passt grammatisch?",
   "zeichen": "🧩",
   "farbe": "turq",
   "punkte": 6,
   "runden": [
    {
     "id": "dzl5s1",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Beschwerde: Schimmel im Badezimmer",
      "zeilen": [
       "Sehr geehrter Herr Schuster,",
       "ich wohne seit März __(1)__ Ihrer Wohnung in der Lindenstraße 12, 2. Stock links. Leider muss ich mich heute bei Ihnen beschweren.",
       "Seit drei Wochen ist im Badezimmer Schimmel an der Wand. Ich lüfte jeden Tag mehrmals, __(2)__ wird es nicht besser. Ich glaube, das Problem kommt von einem kaputten Rohr in der Wand.",
       "Ich habe Sie schon zweimal angerufen, __(3)__ leider nicht erreicht. Deshalb schreibe ich Ihnen jetzt.",
       "Bitte schicken Sie so schnell __(4)__ möglich einen Handwerker. Ich bin montags und mittwochs ab 15 Uhr zu Hause. Sonst kann auch meine Nachbarin die Tür öffnen.",
       "Ich __(5)__ mich über eine baldige Antwort freuen.",
       "__(6)__ freundlichen Grüßen",
       "Amira Haddad"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "in",
        "an",
        "auf"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Man wohnt „in“ einer Wohnung."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "deshalb",
        "trotzdem",
        "obwohl"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Sie lüftet, aber es hilft nicht: Das ist ein Gegensatz, also „trotzdem“. „Obwohl“ braucht das Verb am Ende."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "sondern",
        "oder",
        "aber"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„aber“ zeigt den Gegensatz: angerufen, aber nicht erreicht. „sondern“ steht nur nach einer Verneinung."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "als",
        "wie",
        "so"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Wendung: „so schnell wie möglich“."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "würde",
        "hätte",
        "wäre"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Höfliche Bitte: „Ich würde mich freuen“."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Bei",
        "Von",
        "Mit"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Der Gruß im formellen Brief heißt immer „Mit freundlichen Grüßen“."
      }
     ]
    },
    {
     "id": "dzl5s2",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Kündigung meiner Mitgliedschaft",
      "zeilen": [
       "Sehr geehrte Damen und Herren,",
       "hiermit kündige ich meinen Vertrag mit Ihrem Fitnessstudio __(1)__ 31. Januar. Meine Mitgliedsnummer ist 40817.",
       "Ich ziehe im Februar nach Leipzig, __(2)__ ich dort eine neue Stelle gefunden habe. Leider gibt es in Leipzig kein Studio von Ihnen.",
       "Bitte buchen Sie ab Februar keine Beiträge mehr __(3)__ meinem Konto ab. Meine Mitgliedskarte gebe ich __(4)__ letzten Trainingstag an der Theke zurück.",
       "Bitte __(5)__ Sie mir die Kündigung schriftlich. Eine E-Mail an die Adresse in meinem Vertrag reicht.",
       "Vielen Dank für die schöne Zeit __(6)__ Ihnen.",
       "Mit freundlichen Grüßen",
       "Tomasz Nowak"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "zum",
        "am",
        "seit"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Man kündigt „zum“ Datum: Dann endet der Vertrag."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "denn",
        "weil",
        "deshalb"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Das Verb steht am Ende („gefunden habe“). Das geht nur mit „weil“."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "aus",
        "an",
        "von"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Man bucht Geld „von“ einem Konto ab."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "im",
        "am",
        "um"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Bei Tagen benutzt man „am“: am letzten Trainingstag."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "bestätigen",
        "bestellen",
        "beantworten"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Eine Kündigung lässt man sich „bestätigen“."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "mit",
        "zu",
        "bei"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Man trainiert „bei“ einem Studio, also: die Zeit bei Ihnen."
      }
     ]
    },
    {
     "id": "dzl5s3",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Anfrage: Betreuungsplatz für meinen Sohn",
      "zeilen": [
       "Sehr geehrte Frau Albrecht,",
       "mein Name ist Leyla Aksoy. Ich suche __(1)__ August einen Betreuungsplatz für meinen Sohn Emir. Er ist jetzt zwei Jahre alt.",
       "Ich habe gehört, __(2)__ in Ihrer Kita bald Plätze frei werden. Ab August arbeite ich wieder in einer Apotheke, von Montag bis Freitag __(3)__ 8 bis 14 Uhr.",
       "Könnten Sie mir bitte sagen, __(4)__ Sie noch einen Platz für Emir haben? Außerdem möchte ich wissen, wie viel ein Platz kostet und ob die Kinder in der Kita Mittagessen bekommen.",
       "Gern komme ich auch zu einem Gespräch vorbei. Ich habe dienstags und donnerstags __(5)__ Zeit.",
       "Vielen Dank im __(6)__.",
       "Mit freundlichen Grüßen",
       "Leyla Aksoy"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "seit",
        "ab",
        "vor"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Der Platz soll im August anfangen: „ab August“. „seit“ steht für etwas, das schon begonnen hat."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "dass",
        "ob",
        "wenn"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach „Ich habe gehört“ kommt eine Information: „dass“."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "zwischen",
        "um",
        "von"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Zeitspanne: „von 8 bis 14 Uhr“. „zwischen“ geht nur mit „und“."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "ob",
        "wenn",
        "dass"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Indirekte Ja/Nein-Frage: „ob Sie noch einen Platz haben“."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "damals",
        "nachmittags",
        "morgen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Regelmäßig am Nachmittag: „nachmittags“. „damals“ ist Vergangenheit."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Vorher",
        "Vorbei",
        "Voraus"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Wendung: „Vielen Dank im Voraus“."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tdzll1",
   "titel": "Prüfungslauf 1",
   "minuten": 45,
   "teile": [
    {
     "nr": 1,
     "art": "uebersicht",
     "tafel": {
      "titel": "Agentur für Arbeit und Jobcenter Neustadt, Wegweiser",
      "zeilen": [
       {
        "k": "Untergeschoss",
        "v": "Selbstinformation: Computer für die Jobsuche, Drucker, Kopierer"
       },
       {
        "k": "Erdgeschoss",
        "v": "Empfang, Terminvergabe, Wartebereich"
       },
       {
        "k": "1. Etage",
        "v": "Agentur für Arbeit: Arbeitsvermittlung, Berufsberatung für Erwachsene"
       },
       {
        "k": "2. Etage",
        "v": "Jobcenter: Geldleistungen, Miete und Heizkosten"
       },
       {
        "k": "3. Etage",
        "v": "Jobcenter: Arbeitsvermittlung, Bewerbungstraining"
       },
       {
        "k": "4. Etage",
        "v": "Berufsberatung für Jugendliche, Ausbildungsstellen"
       },
       {
        "k": "5. Etage",
        "v": "Familienkasse (Kindergeld, Kinderzuschlag)"
       }
      ]
     },
     "aufgaben": [
      {
       "situation": "Sie haben Ihren Lebenslauf fertig und möchten ihn ausdrucken.",
       "opt": [
        "3. Etage",
        "Untergeschoss",
        "Erdgeschoss"
       ],
       "loesung": 1,
       "stelle": "Drucker",
       "erklaerung": "Drucker stehen im Untergeschoss. Im Bewerbungstraining übt man, man druckt dort nicht."
      },
      {
       "situation": "Ihr Sohn ist 16 Jahre alt und sucht einen Ausbildungsplatz als Koch.",
       "opt": [
        "1. Etage",
        "4. Etage",
        "3. Etage"
       ],
       "loesung": 1,
       "stelle": "Berufsberatung für Jugendliche",
       "erklaerung": "Für Jugendliche ist die 4. Etage. In der 1. Etage ist die Beratung für Erwachsene."
      },
      {
       "situation": "Sie haben Ihr zweites Kind bekommen und möchten Kindergeld beantragen.",
       "opt": [
        "5. Etage",
        "2. Etage",
        "Erdgeschoss"
       ],
       "loesung": 0,
       "stelle": "Kindergeld",
       "erklaerung": "Kindergeld zahlt die Familienkasse in der 5. Etage."
      },
      {
       "situation": "Sie bekommen Geld vom Jobcenter. Ab Januar wird Ihre Miete teurer.",
       "opt": [
        "3. Etage",
        "Erdgeschoss",
        "2. Etage"
       ],
       "loesung": 2,
       "stelle": "Miete und Heizkosten",
       "erklaerung": "Die Miete gehört zu den Geldleistungen in der 2. Etage. In der 3. Etage geht es um Arbeit."
      },
      {
       "situation": "Sie haben morgen ein Vorstellungsgespräch und möchten vorher mit jemandem üben.",
       "opt": [
        "1. Etage",
        "3. Etage",
        "4. Etage"
       ],
       "loesung": 1,
       "stelle": "Bewerbungstraining",
       "erklaerung": "Üben für das Gespräch heißt hier Bewerbungstraining, 3. Etage."
      }
     ]
    },
    {
     "nr": 2,
     "art": "anzeigenX",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Glanz Gebäudereinigung",
       "zeilen": [
        "Reinigungskräfte für Büros gesucht.",
        "Montag bis Freitag 18 bis 21 Uhr, Minijob.",
        "Deutsch auf A2 reicht."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "b",
       "quelle": "Frischdienst Nord",
       "zeilen": [
        "Fahrer mit Führerschein C für Lieferungen an Supermärkte.",
        "Vollzeit, Arbeitsbeginn 5 Uhr."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "c",
       "quelle": "Restaurant Olivenhain",
       "zeilen": [
        "Küchenhilfe für Samstag und Sonntag gesucht.",
        "Keine Erfahrung nötig, wir lernen Sie an."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "d",
       "quelle": "Bäckerei Krume",
       "zeilen": [
        "Verkäufer für unsere Filiale am Bahnhof.",
        "Teilzeit, Montag bis Freitag 7 bis 12 Uhr.",
        "Erfahrung im Verkauf erwünscht."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "e",
       "quelle": "Seniorenheim Abendsonne",
       "zeilen": [
        "Pflegehelfer gesucht, auch Quereinsteiger.",
        "Später ist eine Ausbildung zur Pflegefachkraft bei uns möglich.",
        "Deutsch auf B1, Schichtdienst."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "f",
       "quelle": "Logistikzentrum Ost",
       "zeilen": [
        "Lagerhelfer in Vollzeit gesucht.",
        "Den Staplerschein machen Sie bei uns, wir bezahlen ihn."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "g",
       "quelle": "Familie Berger",
       "zeilen": [
        "Wir suchen einen Babysitter für unsere Tochter (5).",
        "Dienstags und donnerstags 15 bis 18 Uhr."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "h",
       "quelle": "Hausverwaltung Kramer",
       "zeilen": [
        "Hausmeister für große Wohnanlage gesucht.",
        "Handwerkliche Erfahrung nötig.",
        "Eine Wohnung in der Anlage ist möglich."
       ],
       "motiv": "anzeige"
      }
     ],
     "aufgaben": [
      {
       "situation": "Frau Nguyen hat zwei Schulkinder. Sie möchte nur am Vormittag arbeiten. Früher hat sie in einem Geschäft verkauft.",
       "loesung": "d",
       "erklaerung": "Die Bäckerei sucht vormittags jemanden mit Erfahrung im Verkauf.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Herr Rahimi arbeitet tagsüber in einer Firma. Er sucht einen Nebenjob für den Abend.",
       "loesung": "a",
       "erklaerung": "Reinigung von 18 bis 21 Uhr passt nach der normalen Arbeit.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Frau Silva möchte mit alten Menschen arbeiten und später eine Ausbildung machen.",
       "loesung": "e",
       "erklaerung": "Im Seniorenheim kann sie anfangen und dort später die Ausbildung machen.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Herr Mensah möchte im Lager arbeiten. Er hat aber keinen Staplerschein.",
       "loesung": "f",
       "erklaerung": "In f bekommt er den Staplerschein vom Arbeitgeber.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Sie sind Elektriker und suchen eine Stelle in Ihrem Beruf.",
       "loesung": "x",
       "erklaerung": "Keine Firma sucht einen Elektriker. Der Hausmeister in h braucht Handwerk, ist aber ein anderer Beruf.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "aufgaben": [
      {
       "art": "rf",
       "satz": "Wer eine Schicht tauschen will, sucht selbst einen Kollegen dafür.",
       "loesung": true,
       "stelle": "klärt das bitte selbst mit einem Kollegen",
       "erklaerung": "Den Tausch organisieren die Mitarbeiter selbst und sagen es dann Frau Wenzel.",
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Schichtleiterin",
        "titel": "Schichtplan Dezember",
        "zeilen": [
         "Hallo zusammen,",
         "der Schichtplan für Dezember hängt ab heute im Pausenraum. Wer eine Schicht tauschen möchte, klärt das bitte selbst mit einem Kollegen und sagt mir dann Bescheid.",
         "Wichtig: Urlaubswünsche für die Zeit zwischen Weihnachten und Neujahr müssen bis zum 15. November bei mir sein. Später kann ich sie nicht mehr berücksichtigen.",
         "Gruß, Andrea Wenzel"
        ]
       }
      },
      {
       "frage": "Urlaub zwischen Weihnachten und Neujahr …",
       "opt": [
        "muss man bis Mitte November beantragen.",
        "ist dieses Jahr nicht möglich.",
        "steht schon im Schichtplan."
       ],
       "loesung": 0,
       "stelle": "müssen bis zum 15. November bei mir sein",
       "erklaerung": "Der 15. November ist Mitte November. Danach geht es nicht mehr.",
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Schichtleiterin",
        "titel": "Schichtplan Dezember",
        "zeilen": [
         "Hallo zusammen,",
         "der Schichtplan für Dezember hängt ab heute im Pausenraum. Wer eine Schicht tauschen möchte, klärt das bitte selbst mit einem Kollegen und sagt mir dann Bescheid.",
         "Wichtig: Urlaubswünsche für die Zeit zwischen Weihnachten und Neujahr müssen bis zum 15. November bei mir sein. Später kann ich sie nicht mehr berücksichtigen.",
         "Gruß, Andrea Wenzel"
        ]
       }
      },
      {
       "art": "rf",
       "satz": "Für den Elternabend kann man Hilfe beim Übersetzen bekommen.",
       "loesung": true,
       "stelle": "Wenn Sie Hilfe beim Übersetzen brauchen",
       "erklaerung": "Man muss sich dafür nur bis Freitag im Sekretariat melden.",
       "text": {
        "sorte": "brief",
        "quelle": "Brief der Grundschule am Park",
        "titel": "Einladung zum Elternabend",
        "zeilen": [
         "Liebe Eltern der Klasse 3b,",
         "der Elternabend findet am Dienstag, 12. November, um 19 Uhr im Klassenraum statt.",
         "Themen: die Klassenfahrt im Frühling, neue Regeln für die Hausaufgaben und die Wahl der Elternvertreter. Kinder können leider nicht mitkommen.",
         "Wenn Sie Hilfe beim Übersetzen brauchen, melden Sie sich bitte bis Freitag bei Frau Demir im Sekretariat.",
         "Mit freundlichen Grüßen, Anna Petersen, Klassenlehrerin"
        ]
       }
      },
      {
       "frage": "Ein Thema beim Elternabend ist …",
       "opt": [
        "ein Schulfest im Sommer.",
        "eine Reise der Klasse.",
        "ein neuer Klassenlehrer."
       ],
       "loesung": 1,
       "stelle": "die Klassenfahrt im Frühling",
       "erklaerung": "Eine Klassenfahrt ist eine Reise der Klasse. Ein Fest steht nicht im Brief.",
       "text": {
        "sorte": "brief",
        "quelle": "Brief der Grundschule am Park",
        "titel": "Einladung zum Elternabend",
        "zeilen": [
         "Liebe Eltern der Klasse 3b,",
         "der Elternabend findet am Dienstag, 12. November, um 19 Uhr im Klassenraum statt.",
         "Themen: die Klassenfahrt im Frühling, neue Regeln für die Hausaufgaben und die Wahl der Elternvertreter. Kinder können leider nicht mitkommen.",
         "Wenn Sie Hilfe beim Übersetzen brauchen, melden Sie sich bitte bis Freitag bei Frau Demir im Sekretariat.",
         "Mit freundlichen Grüßen, Anna Petersen, Klassenlehrerin"
        ]
       }
      },
      {
       "art": "rf",
       "satz": "Mit einer Jahreskarte muss man im Hallenbad Süd Eintritt bezahlen.",
       "loesung": false,
       "stelle": "kostenlos ins Hallenbad Süd",
       "erklaerung": "Mit der Jahreskarte ist das Hallenbad Süd kostenlos.",
       "text": {
        "sorte": "seite",
        "quelle": "Aushang am Eingang",
        "titel": "Hallenbad Nord geschlossen",
        "zeilen": [
         "Wegen Reinigung ist das Hallenbad Nord vom 2. bis 13. Dezember geschlossen.",
         "In dieser Zeit können Sie mit Ihrer Jahreskarte kostenlos ins Hallenbad Süd.",
         "Der Kurs Aquafitness fällt in dieser Zeit aus und wird im Januar nachgeholt."
        ]
       }
      },
      {
       "frage": "Der Kurs Aquafitness …",
       "opt": [
        "findet im Hallenbad Süd statt.",
        "wird später nachgeholt.",
        "kostet im Januar weniger."
       ],
       "loesung": 1,
       "stelle": "wird im Januar nachgeholt",
       "erklaerung": "„Nachholen“ heißt: später machen. Der Kurs zieht nicht ins Hallenbad Süd um.",
       "text": {
        "sorte": "seite",
        "quelle": "Aushang am Eingang",
        "titel": "Hallenbad Nord geschlossen",
        "zeilen": [
         "Wegen Reinigung ist das Hallenbad Nord vom 2. bis 13. Dezember geschlossen.",
         "In dieser Zeit können Sie mit Ihrer Jahreskarte kostenlos ins Hallenbad Süd.",
         "Der Kurs Aquafitness fällt in dieser Zeit aus und wird im Januar nachgeholt."
        ]
       }
      }
     ]
    },
    {
     "nr": 4,
     "art": "rf",
     "texte": [
      {
       "sorte": "aushang",
       "von": "Elternbrief der Kita Regenbogen",
       "betreff": "Wichtige Regeln für das neue Kita-Jahr",
       "zeilen": [
        "Liebe Eltern, bringen Sie Ihr Kind bitte bis 9 Uhr. Danach frühstücken wir zusammen, und die Gruppen gehen oft nach draußen.",
        "Wenn Ihr Kind krank ist, rufen Sie uns bitte bis 8.30 Uhr an. Bei Fieber, Erbrechen oder Durchfall muss Ihr Kind zu Hause bleiben. Es darf erst wieder kommen, wenn es 48 Stunden ohne Beschwerden war.",
        "Medikamente geben wir nur, wenn wir eine schriftliche Erklärung vom Arzt haben.",
        "Wer Ihr Kind abholt, muss auf unserer Liste stehen. Wenn einmal eine andere Person kommt, zum Beispiel die Oma, sagen Sie uns das bitte vorher. Die Person muss einen Ausweis zeigen.",
        "Bitte geben Sie Ihrem Kind Kleidung zum Wechseln und Gummistiefel mit. Schreiben Sie den Namen in alle Sachen.",
        "Süßigkeiten sind in der Kita nicht erlaubt. Zum Geburtstag darf Ihr Kind gern einen Kuchen oder Obst für die Gruppe mitbringen."
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Ein Kind mit Durchfall darf am nächsten Tag wieder in die Kita, wenn es ihm besser geht.",
       "loesung": false,
       "stelle": "Es darf erst wieder kommen, wenn es 48 Stunden ohne Beschwerden war.",
       "erklaerung": "Das Kind muss zwei Tage gesund sein. Am nächsten Tag ist zu früh."
      },
      {
       "satz": "Die Oma darf das Kind abholen, wenn die Eltern es vorher sagen.",
       "loesung": true,
       "stelle": "Wenn einmal eine andere Person kommt, zum Beispiel die Oma, sagen Sie uns das bitte vorher.",
       "erklaerung": "Eine andere Person darf kommen, wenn die Eltern Bescheid geben und sie einen Ausweis zeigt."
      },
      {
       "satz": "Zum Geburtstag darf man der Gruppe Schokolade mitbringen.",
       "loesung": false,
       "stelle": "Süßigkeiten sind in der Kita nicht erlaubt.",
       "erklaerung": "Schokolade ist eine Süßigkeit. Erlaubt sind Kuchen oder Obst."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Entschuldigung für meine Fehltage",
      "zeilen": [
       "Sehr geehrter Herr Lorenz,",
       "leider konnte ich letzte Woche von Montag __(1)__ Donnerstag nicht zum Deutschkurs kommen. Dafür möchte ich mich entschuldigen.",
       "Mein Sohn hatte hohes Fieber, und ich musste mit ihm zum Kinderarzt. __(2)__ war er so krank, dass ich ihn nicht allein lassen konnte.",
       "Die Bescheinigung vom Arzt __(3)__ ich Ihnen mit diesem Brief. Ab Montag komme ich wieder in den Kurs.",
       "Könnten Sie mir bitte sagen, welche Hausaufgaben ich machen __(4)__? Ich möchte alles nachholen, __(5)__ ich den Test im nächsten Monat schaffe.",
       "Vielen Dank für Ihr __(6)__.",
       "Mit freundlichen Grüßen",
       "Rashid Karimi"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "zu",
        "nach",
        "bis"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Zeitspanne: „von Montag bis Donnerstag“."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Außerdem",
        "Obwohl",
        "Weil"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach der Lücke steht das Verb direkt („war“). „Obwohl“ und „weil“ brauchen das Verb am Ende."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "schicke",
        "schickt",
        "geschickt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Subjekt „ich“, Präsens: „ich schicke“."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "sollst",
        "soll",
        "sollen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Subjekt „ich“: „ich soll“."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "weil",
        "damit",
        "denn"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Das ist ein Ziel: Er lernt, damit er den Test schafft."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Verstand",
        "Verständigung",
        "Verständnis"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Wendung: „Vielen Dank für Ihr Verständnis“."
      }
     ]
    }
   ]
  },
  {
   "id": "tdzll2",
   "titel": "Prüfungslauf 2",
   "minuten": 45,
   "teile": [
    {
     "nr": 1,
     "art": "uebersicht",
     "tafel": {
      "titel": "Volkshochschule Neustadt, Hauptgebäude",
      "zeilen": [
       {
        "k": "Untergeschoss",
        "v": "Werkstatt (Holz, Nähen), Fahrradraum"
       },
       {
        "k": "Erdgeschoss",
        "v": "Anmeldung und Beratung, Kasse, Cafeteria"
       },
       {
        "k": "1. Etage",
        "v": "Deutsch als Fremdsprache: Integrationskurse, Einstufungstest"
       },
       {
        "k": "2. Etage",
        "v": "Fremdsprachen: Englisch, Spanisch, Türkisch"
       },
       {
        "k": "3. Etage",
        "v": "Computerkurse, Bewerbungen am PC"
       },
       {
        "k": "4. Etage",
        "v": "Gesundheit: Yoga, Rückengymnastik, Kochstudio"
       },
       {
        "k": "5. Etage",
        "v": "Prüfungszentrum (Deutschprüfungen, Ergebnisse), Verwaltung"
       }
      ]
     },
     "aufgaben": [
      {
       "situation": "Sie möchten einen Deutschkurs machen. Sie wissen aber nicht, welches Niveau Sie haben.",
       "opt": [
        "5. Etage",
        "1. Etage",
        "2. Etage"
       ],
       "loesung": 1,
       "stelle": "Einstufungstest",
       "erklaerung": "Mit dem Einstufungstest findet man das richtige Niveau. Im Prüfungszentrum macht man nur die Prüfung am Ende."
      },
      {
       "situation": "Sie haben im Oktober Ihre Prüfung gemacht. Sie möchten fragen, wann das Ergebnis kommt.",
       "opt": [
        "5. Etage",
        "1. Etage",
        "Erdgeschoss"
       ],
       "loesung": 0,
       "stelle": "Prüfungszentrum (Deutschprüfungen, Ergebnisse)",
       "erklaerung": "Ergebnisse gibt das Prüfungszentrum in der 5. Etage."
      },
      {
       "situation": "Sie wollen Vorhänge für das Kinderzimmer selbst machen und suchen einen Kurs.",
       "opt": [
        "4. Etage",
        "Erdgeschoss",
        "Untergeschoss"
       ],
       "loesung": 2,
       "stelle": "Nähen",
       "erklaerung": "Vorhänge muss man nähen. Die Werkstatt ist im Untergeschoss."
      },
      {
       "situation": "Sie sitzen den ganzen Tag im Büro. Ihr Rücken tut oft weh.",
       "opt": [
        "3. Etage",
        "4. Etage",
        "Untergeschoss"
       ],
       "loesung": 1,
       "stelle": "Rückengymnastik",
       "erklaerung": "Gegen Rückenschmerzen hilft Rückengymnastik in der 4. Etage. Im Computerkurs sitzt man wieder."
      },
      {
       "situation": "Sie haben sich für einen Kurs angemeldet und wollen die Gebühr bar bezahlen.",
       "opt": [
        "Erdgeschoss",
        "5. Etage",
        "1. Etage"
       ],
       "loesung": 0,
       "stelle": "Kasse",
       "erklaerung": "Bezahlen kann man an der Kasse im Erdgeschoss. Die Verwaltung in der 5. Etage nimmt kein Geld an."
      }
     ]
    },
    {
     "nr": 2,
     "art": "anzeigenX",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Privat",
       "zeilen": [
        "Kinderwagen mit Babywanne, gut erhalten.",
        "80 Euro, nur Abholung."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "b",
       "quelle": "Privat",
       "zeilen": [
        "Kinderfahrrad 20 Zoll, für 6 bis 8 Jahre.",
        "Neue Bremsen, 40 Euro."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "c",
       "quelle": "Familienzentrum Brücke",
       "zeilen": [
        "Krabbelgruppe für Babys und Kinder bis 3 Jahre mit Mama oder Papa.",
        "Jeden Mittwoch um 10 Uhr, kostenlos.",
        "Bei Kaffee und Tee lernen sich die Eltern kennen."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "d",
       "quelle": "Tagesmutter Ilse Wagner",
       "zeilen": [
        "Ab Mai zwei Plätze frei für Kinder von 1 bis 3 Jahren.",
        "Montag bis Freitag 7.30 bis 14 Uhr.",
        "Mit Garten, Mittagessen inklusive."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "e",
       "quelle": "Lernhilfe Brückenschlag",
       "zeilen": [
        "Hausaufgabenhilfe für Grundschulkinder.",
        "Montag bis Donnerstag 14 bis 16 Uhr in der Stadtbücherei.",
        "Ehrenamtlich und kostenlos."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "f",
       "quelle": "FC Neustadt 1920",
       "zeilen": [
        "Unsere Jugendmannschaft sucht Spieler, Jahrgang 2016 und 2017.",
        "Training dienstags und freitags 17 Uhr."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "g",
       "quelle": "Chor Frohe Stimmen",
       "zeilen": [
        "Wir suchen neue Sänger, auch ohne Erfahrung.",
        "Probe mittwochs 19.30 Uhr im Gemeindehaus."
       ],
       "motiv": "anzeige"
      },
      {
       "b": "h",
       "quelle": "Elternverein Kita Sonnenblume",
       "zeilen": [
        "Kinderflohmarkt am Samstag, 15. März, 9 bis 13 Uhr.",
        "Kleidung, Spielzeug, Bücher.",
        "Stand 5 Euro, Anmeldung bis 1. März."
       ],
       "motiv": "anzeige"
      }
     ],
     "aufgaben": [
      {
       "situation": "Ihre Tochter ist zwei Jahre alt. Sie arbeiten ab Mai wieder von 8 bis 13 Uhr. Die Kita hat erst im Herbst einen Platz.",
       "loesung": "d",
       "erklaerung": "Die Tagesmutter hat ab Mai Plätze für Kinder bis 3 Jahre, und die Zeiten passen.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Ihr Sohn ist in der 2. Klasse. Sie können ihm bei den Hausaufgaben nicht gut helfen.",
       "loesung": "e",
       "erklaerung": "Die Hausaufgabenhilfe ist für Grundschulkinder.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Ihre Kinder sind aus vielen Kleidern und Spielsachen herausgewachsen. Sie möchten die Sachen verkaufen.",
       "loesung": "h",
       "erklaerung": "Auf dem Kinderflohmarkt kann man einen Stand mieten und verkaufen.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Ihr Sohn ist neun Jahre alt und möchte schwimmen lernen.",
       "loesung": "x",
       "erklaerung": "Keine Anzeige bietet Schwimmen an. Der Fußballverein f passt zum Alter, aber nicht zum Sport.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      },
      {
       "situation": "Sie sind mit Ihrem Baby viel allein zu Hause. Sie möchten andere Eltern kennenlernen.",
       "loesung": "c",
       "erklaerung": "In der Krabbelgruppe treffen sich Eltern mit kleinen Kindern.",
       "sitKopf": "Ihre Situation",
       "xText": "Keine Anzeige passt"
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "aufgaben": [
      {
       "art": "rf",
       "satz": "Frau Ivanova muss am Donnerstag nicht unbedingt zu Hause sein.",
       "loesung": true,
       "stelle": "kann Ihr Nachbar Herr Becker ihn in die Wohnung lassen",
       "erklaerung": "Der Nachbar hat einen Schlüssel und kann den Monteur hereinlassen.",
       "text": {
        "sorte": "email",
        "quelle": "Antwort des Vermieters",
        "titel": "Ihre kaputte Heizung",
        "zeilen": [
         "Sehr geehrte Frau Ivanova,",
         "vielen Dank für Ihre Nachricht. Der Monteur kommt am Donnerstag zwischen 8 und 10 Uhr. Wenn Sie arbeiten müssen, kann Ihr Nachbar Herr Becker ihn in die Wohnung lassen. Er hat einen Schlüssel von mir.",
         "Bis dahin stelle ich Ihnen einen kleinen Heizlüfter vor die Tür. Den Strom dafür ziehe ich Ihnen von der nächsten Miete ab.",
         "Mit freundlichen Grüßen, Harald Schuster"
        ]
       }
      },
      {
       "frage": "Den Strom für den Heizlüfter …",
       "opt": [
        "muss Frau Ivanova selbst bezahlen.",
        "bezahlt Herr Becker.",
        "bekommt Frau Ivanova über die Miete zurück."
       ],
       "loesung": 2,
       "stelle": "Den Strom dafür ziehe ich Ihnen von der nächsten Miete ab.",
       "erklaerung": "Die nächste Miete wird billiger. So bezahlt am Ende der Vermieter den Strom.",
       "text": {
        "sorte": "email",
        "quelle": "Antwort des Vermieters",
        "titel": "Ihre kaputte Heizung",
        "zeilen": [
         "Sehr geehrte Frau Ivanova,",
         "vielen Dank für Ihre Nachricht. Der Monteur kommt am Donnerstag zwischen 8 und 10 Uhr. Wenn Sie arbeiten müssen, kann Ihr Nachbar Herr Becker ihn in die Wohnung lassen. Er hat einen Schlüssel von mir.",
         "Bis dahin stelle ich Ihnen einen kleinen Heizlüfter vor die Tür. Den Strom dafür ziehe ich Ihnen von der nächsten Miete ab.",
         "Mit freundlichen Grüßen, Harald Schuster"
        ]
       }
      },
      {
       "art": "rf",
       "satz": "Herr Tesfaye soll Unterlagen zum Termin mitbringen.",
       "loesung": true,
       "stelle": "Bringen Sie bitte Ihren Lebenslauf und Ihre Zeugnisse mit.",
       "erklaerung": "Lebenslauf und Zeugnisse sind Unterlagen.",
       "text": {
        "sorte": "brief",
        "quelle": "Brief vom Jobcenter",
        "titel": "Einladung zu einem Gespräch",
        "zeilen": [
         "Sehr geehrter Herr Tesfaye,",
         "bitte kommen Sie am Montag, 25. November, um 9 Uhr zu einem Gespräch über Ihre berufliche Situation, Zimmer 312.",
         "Bringen Sie bitte Ihren Lebenslauf und Ihre Zeugnisse mit. Wenn Sie krank sind, brauchen wir eine Bescheinigung vom Arzt.",
         "Wenn Sie ohne wichtigen Grund nicht kommen, kann Ihr Geld gekürzt werden.",
         "Mit freundlichen Grüßen, Ihr Jobcenter Neustadt"
        ]
       }
      },
      {
       "frage": "Wenn Herr Tesfaye krank ist, …",
       "opt": [
        "muss er eine Bescheinigung vom Arzt schicken.",
        "bekommt er weniger Geld.",
        "kann er ohne Nachricht zu Hause bleiben."
       ],
       "loesung": 0,
       "stelle": "brauchen wir eine Bescheinigung vom Arzt",
       "erklaerung": "Krankheit ist ein wichtiger Grund, aber das Jobcenter braucht eine Bescheinigung.",
       "text": {
        "sorte": "brief",
        "quelle": "Brief vom Jobcenter",
        "titel": "Einladung zu einem Gespräch",
        "zeilen": [
         "Sehr geehrter Herr Tesfaye,",
         "bitte kommen Sie am Montag, 25. November, um 9 Uhr zu einem Gespräch über Ihre berufliche Situation, Zimmer 312.",
         "Bringen Sie bitte Ihren Lebenslauf und Ihre Zeugnisse mit. Wenn Sie krank sind, brauchen wir eine Bescheinigung vom Arzt.",
         "Wenn Sie ohne wichtigen Grund nicht kommen, kann Ihr Geld gekürzt werden.",
         "Mit freundlichen Grüßen, Ihr Jobcenter Neustadt"
        ]
       }
      },
      {
       "art": "rf",
       "satz": "Am Sonntag darf man in der Waschküche waschen.",
       "loesung": false,
       "stelle": "Waschen ist von 7 bis 21 Uhr erlaubt, sonntags nicht.",
       "erklaerung": "Am Sonntag ist Waschen nicht erlaubt.",
       "text": {
        "sorte": "seite",
        "quelle": "Aushang im Keller",
        "titel": "Regeln für die Waschküche",
        "zeilen": [
         "Bitte tragen Sie sich vorher in die Liste an der Tür ein.",
         "Waschen ist von 7 bis 21 Uhr erlaubt, sonntags nicht.",
         "Nehmen Sie Ihre Wäsche gleich nach dem Waschen aus der Maschine. Das Sieb am Trockner bitte nach jeder Benutzung sauber machen."
        ]
       }
      },
      {
       "frage": "Was muss man vor dem Waschen machen?",
       "opt": [
        "den Hausmeister fragen",
        "sich in eine Liste eintragen",
        "den Trockner sauber machen"
       ],
       "loesung": 1,
       "stelle": "Bitte tragen Sie sich vorher in die Liste an der Tür ein.",
       "erklaerung": "Vorher kommt die Liste. Den Trockner macht man erst nach der Benutzung sauber.",
       "text": {
        "sorte": "seite",
        "quelle": "Aushang im Keller",
        "titel": "Regeln für die Waschküche",
        "zeilen": [
         "Bitte tragen Sie sich vorher in die Liste an der Tür ein.",
         "Waschen ist von 7 bis 21 Uhr erlaubt, sonntags nicht.",
         "Nehmen Sie Ihre Wäsche gleich nach dem Waschen aus der Maschine. Das Sieb am Trockner bitte nach jeder Benutzung sauber machen."
        ]
       }
      }
     ]
    },
    {
     "nr": 4,
     "art": "rf",
     "texte": [
      {
       "sorte": "aushang",
       "von": "Infoblatt der Abfallwirtschaft Neustadt",
       "betreff": "Richtig trennen: Welcher Müll kommt wohin?",
       "zeilen": [
        "In die gelbe Tonne kommen Verpackungen aus Plastik und Metall, zum Beispiel Joghurtbecher, Dosen und Folien. Die Verpackungen müssen nicht gespült werden, sie sollen aber leer sein.",
        "In die blaue Tonne gehören Papier und Pappe. Große Kartons machen Sie bitte vorher klein. Benutzte Taschentücher und Küchenpapier gehören nicht in die blaue Tonne, sondern in den Restmüll.",
        "Essensreste, Schalen von Obst und Gemüse und Kaffeefilter kommen in die braune Biotonne. Bitte keine Plastiktüten, auch keine Tüten mit der Aufschrift „kompostierbar“.",
        "Glas bringen Sie zu den Containern an der Straße, getrennt nach Weiß, Grün und Braun. Blaues Glas kommt zum Grünglas. Einwerfen ist nur werktags von 7 bis 20 Uhr erlaubt.",
        "Batterien und alte Elektrogeräte gehören nie in den Hausmüll. Sie können sie kostenlos im Wertstoffhof oder in vielen Geschäften abgeben.",
        "Für Sperrmüll, zum Beispiel alte Möbel, machen Sie online einen Termin. Zweimal im Jahr holen wir ihn kostenlos bei Ihnen ab."
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Joghurtbecher muss man vor dem Wegwerfen auswaschen.",
       "loesung": false,
       "stelle": "Die Verpackungen müssen nicht gespült werden",
       "erklaerung": "„Nicht müssen“ heißt: Es ist nicht nötig. Die Becher sollen nur leer sein."
      },
      {
       "satz": "Am Sonntag darf man keine Flaschen in den Glascontainer werfen.",
       "loesung": true,
       "stelle": "Einwerfen ist nur werktags von 7 bis 20 Uhr erlaubt.",
       "erklaerung": "Werktage sind Montag bis Samstag. Am Sonntag ist Einwerfen nicht erlaubt."
      },
      {
       "satz": "Gebrauchte Taschentücher kommen in die Papiertonne.",
       "loesung": false,
       "stelle": "Benutzte Taschentücher und Küchenpapier gehören nicht in die blaue Tonne",
       "erklaerung": "Benutzte Taschentücher gehören in den Restmüll, nicht ins Altpapier."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Reklamation: Waschmaschine",
      "zeilen": [
       "Sehr geehrte Damen und Herren,",
       "am 3. Oktober habe ich in Ihrem Onlineshop eine Waschmaschine __(1)__. Die Bestellnummer ist 55201874.",
       "Die Maschine wurde am 10. Oktober geliefert. Leider funktioniert sie nicht richtig. Beim Schleudern ist sie sehr laut, __(2)__ läuft Wasser aus der Tür auf den Boden.",
       "Ich habe die Maschine genau nach der Anleitung angeschlossen. Ein Fehler beim Anschluss ist also nicht der Grund __(3)__ das Problem.",
       "Ich bitte Sie, mir __(4)__ nächsten Freitag eine neue Maschine zu liefern und die alte abzuholen. __(5)__ das nicht möglich ist, möchte ich mein Geld zurück.",
       "Ich bitte __(6)__ eine schnelle Antwort.",
       "Mit freundlichen Grüßen",
       "Svetlana Morozova"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "bestellt",
        "bestellen",
        "bestelle"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Perfekt mit „habe“: „habe … bestellt“."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "außerdem",
        "denn",
        "obwohl"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach der Lücke steht das Verb („läuft“). Das passt zu „außerdem“: Es gibt ein zweites Problem."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "von",
        "für",
        "über"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Man sagt: der Grund „für“ etwas."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "seit",
        "bis",
        "vor"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Eine Frist in der Zukunft: „bis nächsten Freitag“."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Ob",
        "Dass",
        "Falls"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Eine Bedingung: „Falls“ heißt hier „wenn“."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "für",
        "nach",
        "um"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Das Verb heißt „bitten um“."
      }
     ]
    }
   ]
  }
 ]
};
