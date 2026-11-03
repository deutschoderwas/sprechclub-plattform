/* ============================================================
   deutschoderwas club — LESEN + SPRACHBAUSTEINE telc Deutsch B2+ Beruf

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B2+ Beruf,
   geprüft 03.11.2026). Alle Texte und Aufgaben eigene, Kontext
   Geschäftskommunikation. Erzeugt aus scratchpad/telcb2b mit bau.js.
   ============================================================ */

window.LESEN_TELC_B2B = {
 "niveau": "telcB2B",
 "pruefung": "telc Deutsch B2+ Beruf",
 "minuten": 90,
 "punkte": 40,
 "stufen": [
  {
   "nr": 1,
   "titel": "Geschäftstexte erfassen",
   "zeichen": "🧭",
   "was": "E-Mails, Listen und Mitteilungen schnell und genau lesen."
  },
  {
   "nr": 2,
   "titel": "Sprachbausteine",
   "zeichen": "🧩",
   "was": "Richtig oder falsch? Und die Sprache von Verträgen und AGB."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Fünf Leseteile und zwei Teile Sprachbausteine."
  },
  {
   "nr": 4,
   "titel": "Lesen und Sprachbausteine am Stück",
   "zeichen": "⏱️",
   "was": "40 Aufgaben mit Uhr — in der Prüfung: Lesen 60 und Sprachbausteine 30 Minuten."
  }
 ],
 "bloecke": [
  {
   "id": "tbb2l1",
   "stufe": 1,
   "titel": "Geschäfts-E-Mails schnell erfassen",
   "kurz": "Wer will was bis wann?",
   "ziel": "Nach diesem Block findest du in jeder Geschäfts-E-Mail sofort Absender, Anliegen und Frist.",
   "zeichen": "📧",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "E-Mail: „Hallo Herr Petrović, könnten Sie mir bis Mittwochmittag die aktualisierte Kundenliste schicken? Ich brauche sie für das Gespräch mit der Geschäftsleitung am Donnerstag. Gruß, Anja Wenzel“ Was soll Herr Petrović tun?",
     "opt": [
      "Am Donnerstag mit der Geschäftsleitung sprechen.",
      "Die Kundenliste bis Mittwochmittag senden.",
      "Frau Wenzel am Mittwoch anrufen."
     ],
     "loesung": 1,
     "erklaerung": "Die Bitte steht im ersten Satz; der Donnerstag ist der Termin von Frau Wenzel."
    },
    {
     "art": "wahl",
     "frage": "E-Mail: „Liebes Team, die Abgabefrist für die Quartalsberichte wird um eine Woche verschoben. Neuer Termin ist der achtzehnte. Bitte schicken Sie die Berichte wie bisher an Frau Okoye. Viele Grüße, Lars Brandt“ Was ist neu?",
     "opt": [
      "Die Berichte sind eine Woche später fällig.",
      "Die Berichte gehen jetzt an Frau Okoye.",
      "Die Berichte sollen kürzer werden."
     ],
     "loesung": 0,
     "erklaerung": "„Wie bisher“ zeigt: Die Empfängerin bleibt gleich, nur der Termin ändert sich."
    },
    {
     "art": "wahl",
     "frage": "E-Mail: „Sehr geehrte Frau Lindqvist, leider können wir die bestellten Ersatzteile erst in drei Wochen liefern. Bitte teilen Sie uns bis Freitag mit, ob Sie eine Teillieferung wünschen.“ Was erwartet der Absender bis Freitag?",
     "opt": [
      "Eine neue Bestellung.",
      "Die Bezahlung der Ersatzteile.",
      "Eine Entscheidung über eine Teillieferung."
     ],
     "loesung": 2,
     "erklaerung": "Die Frist „bis Freitag“ gehört zur Frage nach der Teillieferung."
    },
    {
     "art": "wahl",
     "frage": "E-Mail: „Herr Yilmaz bittet Sie im Auftrag von Frau Dr. Hesse, die Präsentation bis morgen früh zu kürzen.“ Wer möchte eigentlich die kürzere Präsentation?",
     "opt": [
      "Frau Dr. Hesse.",
      "Herr Yilmaz.",
      "Der Empfänger der E-Mail."
     ],
     "loesung": 0,
     "erklaerung": "„Im Auftrag von“ heißt: Herr Yilmaz gibt nur weiter, was Frau Dr. Hesse will."
    },
    {
     "art": "wahl",
     "frage": "E-Mail: „Die Rechnung vom dritten März ist leider noch offen. Wir bitten Sie, den Betrag innerhalb von sieben Tagen zu überweisen. Sollten Sie inzwischen gezahlt haben, betrachten Sie dieses Schreiben bitte als gegenstandslos.“ Was für eine E-Mail ist das?",
     "opt": [
      "Eine Auftragsbestätigung.",
      "Eine Zahlungserinnerung.",
      "Eine Reklamation."
     ],
     "loesung": 1,
     "erklaerung": "Offene Rechnung plus Zahlungsfrist: typische Zahlungserinnerung."
    },
    {
     "art": "wahl",
     "frage": "E-Mail: „Bitte halten Sie sich den Nachmittag des zweiten Juni frei. Die genaue Uhrzeit und den Raum gebe ich Ihnen nächste Woche bekannt.“ Was weiß der Empfänger schon?",
     "opt": [
      "Die Uhrzeit des Termins.",
      "Den Raum des Termins.",
      "Den Tag des Termins."
     ],
     "loesung": 2,
     "erklaerung": "Nur das Datum steht fest; Uhrzeit und Raum kommen später."
    },
    {
     "art": "wahl",
     "frage": "Abwesenheitsnotiz: „Ich bin vom fünften bis zum neunzehnten August nicht im Büro. In dringenden Fällen wenden Sie sich bitte an Herrn Castro. Alle anderen Anfragen beantworte ich nach meiner Rückkehr.“ Ihre Frage ist nicht dringend. Was gilt?",
     "opt": [
      "Sie schreiben Herrn Castro.",
      "Sie bekommen nach dem neunzehnten August eine Antwort.",
      "Sie schicken die Anfrage am fünften August noch einmal."
     ],
     "loesung": 1,
     "erklaerung": "Herr Castro ist nur für dringende Fälle zuständig."
    },
    {
     "art": "wahl",
     "frage": "E-Mail: „Könnten Sie das Angebot noch einmal prüfen? Der Kunde hat angemerkt, dass die Versandkosten fehlen. Eine korrigierte Fassung bräuchte ich spätestens übermorgen.“ Was fehlt im Angebot?",
     "opt": [
      "Die Versandkosten.",
      "Der Rabatt für den Kunden.",
      "Das Lieferdatum."
     ],
     "loesung": 0,
     "erklaerung": "Der Kunde vermisst ausdrücklich die Versandkosten."
    },
    {
     "art": "wahl",
     "frage": "E-Mail: „Wie besprochen sende ich Ihnen anbei den Vertragsentwurf. Änderungswünsche schicken Sie bitte direkt an unsere Rechtsabteilung, nicht an mich.“ An wen gehen Änderungswünsche?",
     "opt": [
      "An den Absender der E-Mail.",
      "An den Kunden.",
      "An die Rechtsabteilung."
     ],
     "loesung": 2,
     "erklaerung": "„Nicht an mich“ schließt den Absender ausdrücklich aus."
    },
    {
     "art": "wahl",
     "frage": "E-Mail: „Die Schulung am Montag fällt wegen Krankheit des Trainers aus. Ein Ersatztermin steht noch nicht fest. Ihre Anmeldung bleibt gültig.“ Was müssen die Teilnehmer jetzt tun?",
     "opt": [
      "Sich für den Ersatztermin neu anmelden.",
      "Nichts, die Anmeldung gilt weiter.",
      "Den Trainer anrufen."
     ],
     "loesung": 1,
     "erklaerung": "Die Anmeldung bleibt gültig, also ist keine Handlung nötig."
    }
   ]
  },
  {
   "id": "tbb2l2",
   "stufe": 1,
   "titel": "Listen und Übersichten vergleichen",
   "kurz": "Alle Bedingungen prüfen, nicht nur die erste",
   "ziel": "Nach diesem Block vergleichst du Angebote und Übersichten Punkt für Punkt und findest das einzige, das wirklich passt.",
   "zeichen": "📋",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Kurs A „Excel für Fortgeschrittene“: online, dienstags 18–20 Uhr. Kurs B „Excel kompakt“: Präsenz, zwei Samstage. Kurs C „Tabellen im Team“: online, freitags vormittags. Sie arbeiten montags bis freitags bis 17 Uhr und haben samstags keine Zeit. Welcher Kurs passt?",
     "opt": [
      "Kurs A",
      "Kurs B",
      "Kurs C"
     ],
     "loesung": 0,
     "erklaerung": "B fällt wegen Samstag weg, C wegen der Arbeitszeit am Vormittag."
    },
    {
     "art": "wahl",
     "frage": "Druckerpapier, Preis pro Paket: Firma Lenz 3,90 €, Versand 6 € pauschal. Firma Ott 4,00 €, versandkostenfrei ab 50 €. Firma Weiß 4,20 €, ab 20 Paketen 10 % Rabatt, Versand frei. Sie bestellen 20 Pakete. Welches Angebot ist am günstigsten?",
     "opt": [
      "Firma Lenz",
      "Firma Ott",
      "Firma Weiß"
     ],
     "loesung": 2,
     "erklaerung": "Weiß: 84 € minus 10 % = 75,60 €. Lenz: 78 € plus 6 € = 84 €. Ott: 80 €."
    },
    {
     "art": "wahl",
     "frage": "Hotel Seeblick: 2 km vom Bahnhof, Tagungsraum für 25 Personen. Hotel Linde: 12 km vom Bahnhof, Tagungsraum für 40 Personen. Hotel Park: 1 km vom Bahnhof, Tagungsraum für 60 Personen, nur am Wochenende. Sie brauchen an einem Mittwoch einen Raum für 30 Personen, gern nah am Bahnhof.",
     "opt": [
      "Hotel Seeblick",
      "Hotel Linde",
      "Hotel Park"
     ],
     "loesung": 1,
     "erklaerung": "Seeblick ist zu klein, Park nur am Wochenende frei. „Gern nah“ ist nur ein Wunsch."
    },
    {
     "art": "wahl",
     "frage": "Dienstplan Empfang: Mo Frau Arslan, Di Herr Vogt, Mi Frau Arslan, Do Frau Beck, Fr Herr Vogt. Frau Beck tauscht ihren Tag mit dem Dienstag von Herrn Vogt. Wer sitzt am Donnerstag am Empfang?",
     "opt": [
      "Frau Beck",
      "Frau Arslan",
      "Herr Vogt"
     ],
     "loesung": 2,
     "erklaerung": "Durch den Tausch arbeitet Frau Beck am Dienstag und Herr Vogt am Donnerstag."
    },
    {
     "art": "wahl",
     "frage": "Tarif S: 10 GB, 15 € im Monat, 24 Monate Laufzeit. Tarif M: 20 GB, 22 €, monatlich kündbar. Tarif L: unbegrenzt, 30 €, 24 Monate Laufzeit. Die Firma braucht mindestens 15 GB und will sich nicht lange binden.",
     "opt": [
      "Tarif M",
      "Tarif S",
      "Tarif L"
     ],
     "loesung": 0,
     "erklaerung": "S hat zu wenig Datenvolumen, L bindet für zwei Jahre."
    },
    {
     "art": "wahl",
     "frage": "Seminar 1 „Konflikte im Team lösen“: zwei Tage, mit Zertifikat. Seminar 2 „Verhandeln mit Kunden“: ein Tag, ohne Zertifikat. Seminar 3 „Erfolgreich verhandeln“: zwei Tage, mit Zertifikat. Ihr Chef möchte, dass Sie besser verhandeln lernen und einen Nachweis mitbringen.",
     "opt": [
      "Seminar 1",
      "Seminar 2",
      "Seminar 3"
     ],
     "loesung": 2,
     "erklaerung": "Seminar 2 hat das richtige Thema, aber kein Zertifikat; Seminar 1 das falsche Thema."
    },
    {
     "art": "wahl",
     "frage": "Lieferant Nord: 3 Werktage, Mindestbestellwert 200 €. Lieferant West: 2 Werktage, Mindestbestellwert 100 €. Lieferant Süd: 5 Werktage, kein Mindestbestellwert. Sie brauchen Material für 120 € innerhalb von vier Werktagen.",
     "opt": [
      "Lieferant Nord",
      "Lieferant West",
      "Lieferant Süd"
     ],
     "loesung": 1,
     "erklaerung": "Bei Nord ist der Bestellwert zu klein, Süd liefert zu spät."
    },
    {
     "art": "wahl",
     "frage": "Raum 1: 8 Plätze, Beamer, frei 9–12 Uhr. Raum 2: 14 Plätze, kein Beamer, ganztags frei. Raum 3: 16 Plätze, Beamer, frei ab 13 Uhr. Sie brauchen am Nachmittag einen Raum mit Beamer für 12 Personen.",
     "opt": [
      "Raum 3",
      "Raum 2",
      "Raum 1"
     ],
     "loesung": 0,
     "erklaerung": "Raum 1 ist zu klein und nur vormittags frei, Raum 2 hat keinen Beamer."
    },
    {
     "art": "wahl",
     "frage": "Firma Klar: reinigt täglich, auch Fenster, 1.200 € im Monat. Firma Glanz: reinigt täglich, ohne Fenster, 950 €. Firma Blitz: reinigt dreimal pro Woche, ohne Fenster, 700 €. Das Büro soll täglich gereinigt werden; die Fenster putzt bereits die Hausverwaltung. Welches Angebot ist am sinnvollsten?",
     "opt": [
      "Firma Klar",
      "Firma Glanz",
      "Firma Blitz"
     ],
     "loesung": 1,
     "erklaerung": "Blitz reinigt nicht täglich; bei Klar würden Sie für Fenster doppelt zahlen."
    },
    {
     "art": "wahl",
     "frage": "Anbieter A: Gruppen bis 12 Personen, abends. Anbieter B: Einzelunterricht, flexible Zeiten. Anbieter C: Gruppen bis 6 Personen, vormittags im Betrieb. Eine Kollegin aus der Spätschicht hat nur vormittags Zeit und möchte in einer kleinen Gruppe lernen.",
     "opt": [
      "Anbieter A",
      "Anbieter B",
      "Anbieter C"
     ],
     "loesung": 2,
     "erklaerung": "A ist abends, B ist keine Gruppe. Nur C erfüllt beide Bedingungen."
    }
   ]
  },
  {
   "id": "tbb2l3",
   "stufe": 2,
   "titel": "Sprachbausteine: Ist das Wort richtig?",
   "kurz": "Kasus, Präposition, Konnektor und Verbform im Geschäftsbrief",
   "ziel": "Nach diesem Block erkennst du, ob ein markiertes Wort im Geschäftsbrief stimmt, und weißt, was stattdessen hingehört.",
   "zeichen": "🔍",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "„Wir bedanken uns für Ihr Interesse [an] unseren Produkten.“ Ist das Wort in Klammern richtig?",
     "opt": [
      "an (richtig)",
      "für",
      "auf"
     ],
     "loesung": 0,
     "erklaerung": "Es heißt „Interesse an + Dativ“."
    },
    {
     "art": "wahl",
     "frage": "„Wir beziehen uns [an] Ihr Schreiben vom zwölften Mai.“ Ist das Wort in Klammern richtig?",
     "opt": [
      "an (richtig)",
      "auf",
      "über"
     ],
     "loesung": 1,
     "erklaerung": "Feste Verbindung: „sich beziehen auf + Akkusativ“."
    },
    {
     "art": "wahl",
     "frage": "„Wir freuen uns [über] eine baldige Antwort.“ Ist das Wort in Klammern richtig?",
     "opt": [
      "über (richtig)",
      "an",
      "auf"
     ],
     "loesung": 2,
     "erklaerung": "Etwas in der Zukunft: „sich freuen auf“. „Freuen über“ gilt für Vergangenes."
    },
    {
     "art": "wahl",
     "frage": "„Leider müssen wir Ihnen mitteilen, [dass] sich die Lieferung verzögert.“ Ist das Wort in Klammern richtig?",
     "opt": [
      "dass (richtig)",
      "ob",
      "damit"
     ],
     "loesung": 0,
     "erklaerung": "Nach „mitteilen“ folgt eine Tatsache, also „dass“."
    },
    {
     "art": "wahl",
     "frage": "„Die Rechnung liegt [dieses] Schreiben bei.“ Ist das Wort in Klammern richtig?",
     "opt": [
      "dieses (richtig)",
      "diesem",
      "diesen"
     ],
     "loesung": 1,
     "erklaerung": "„beiliegen“ verlangt den Dativ: „diesem Schreiben“."
    },
    {
     "art": "wahl",
     "frage": "„Sollten Sie Fragen haben, [stehen] Ihnen unser Kundenservice gern zur Verfügung.“ Ist das Wort in Klammern richtig?",
     "opt": [
      "stehen (richtig)",
      "steht",
      "stand"
     ],
     "loesung": 1,
     "erklaerung": "Subjekt ist „unser Kundenservice“, also Singular und Präsens: „steht“."
    },
    {
     "art": "wahl",
     "frage": "„Wir konnten die Ware nicht liefern, [weil] sie war nicht auf Lager.“ Ist das Wort in Klammern richtig?",
     "opt": [
      "weil (richtig)",
      "obwohl",
      "denn"
     ],
     "loesung": 2,
     "erklaerung": "Das Verb steht an zweiter Stelle, also Hauptsatz: „denn“. Mit „weil“ müsste das Verb ans Ende."
    },
    {
     "art": "wahl",
     "frage": "„[Trotz] des Streiks konnten wir pünktlich liefern.“ Ist das Wort in Klammern richtig?",
     "opt": [
      "Trotz (richtig)",
      "Obwohl",
      "Wegen"
     ],
     "loesung": 0,
     "erklaerung": "Präposition mit Genitiv und Gegensatz: „trotz“. „Obwohl“ leitet einen Nebensatz ein."
    },
    {
     "art": "wahl",
     "frage": "„Die Lieferung ist gestern bei uns [eingegangen].“ Ist das Wort in Klammern richtig?",
     "opt": [
      "eingegangen (richtig)",
      "eingeht",
      "eingegeben"
     ],
     "loesung": 0,
     "erklaerung": "Perfekt mit „ist“ und Partizip II von „eingehen“."
    },
    {
     "art": "wahl",
     "frage": "„Wir weisen Sie darauf hin, [das] die Frist am Freitag endet.“ Ist das Wort in Klammern richtig?",
     "opt": [
      "das (richtig)",
      "was",
      "dass"
     ],
     "loesung": 2,
     "erklaerung": "Hier beginnt ein Inhaltssatz, kein Relativsatz: „dass“ mit Doppel-s."
    }
   ]
  },
  {
   "id": "tbb2l4",
   "stufe": 2,
   "titel": "Wortschatz in Verträgen und AGB",
   "kurz": "Juristische Formulierungen sicher verstehen",
   "ziel": "Nach diesem Block verstehst du typische Wendungen aus Verträgen und Geschäftsbedingungen und weißt, was sie praktisch bedeuten.",
   "zeichen": "📜",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "In den AGB steht: „Die Ware bleibt bis zur vollständigen Bezahlung Eigentum des Verkäufers.“ Was bedeutet das?",
     "opt": [
      "Der Käufer darf die Ware erst nach der Zahlung benutzen.",
      "Bis alles bezahlt ist, gehört die Ware rechtlich noch dem Verkäufer.",
      "Der Verkäufer liefert erst nach der Zahlung."
     ],
     "loesung": 1,
     "erklaerung": "Das ist der Eigentumsvorbehalt: Besitz ja, Eigentum erst nach Zahlung."
    },
    {
     "art": "wahl",
     "frage": "„Die Gewährleistungsfrist beträgt zwei Jahre.“ Was ist damit geregelt?",
     "opt": [
      "Wie lange der Verkäufer für Mängel einstehen muss.",
      "Wie lange die Lieferung dauern darf.",
      "Wie lange man den Vertrag kündigen kann."
     ],
     "loesung": 0,
     "erklaerung": "Gewährleistung betrifft Mängel an der Ware."
    },
    {
     "art": "wahl",
     "frage": "„Der Vertrag verlängert sich stillschweigend um ein weiteres Jahr, sofern er nicht drei Monate vor Ablauf gekündigt wird.“ „Stillschweigend“ bedeutet hier:",
     "opt": [
      "nur nach einem Gespräch",
      "nur mit schriftlicher Zustimmung",
      "automatisch, ohne dass jemand etwas tun muss"
     ],
     "loesung": 2,
     "erklaerung": "Wer nicht kündigt, ist automatisch ein weiteres Jahr gebunden."
    },
    {
     "art": "wahl",
     "frage": "„Die Rechnung ist innerhalb von vierzehn Tagen ohne Abzug zahlbar.“ „Ohne Abzug“ heißt:",
     "opt": [
      "ohne Mehrwertsteuer",
      "den vollen Betrag, ohne Skonto oder Rabatt",
      "ohne Versandkosten"
     ],
     "loesung": 1,
     "erklaerung": "„Abzug“ meint hier einen Nachlass wie Skonto."
    },
    {
     "art": "wahl",
     "frage": "„Bei Zahlung innerhalb von sieben Tagen gewähren wir zwei Prozent Skonto.“ Welches Verb hat die gleiche Bedeutung wie „gewähren“?",
     "opt": [
      "einräumen",
      "verlangen",
      "berechnen"
     ],
     "loesung": 0,
     "erklaerung": "„Gewähren“ und „einräumen“ heißen: dem Kunden etwas zugestehen."
    },
    {
     "art": "wahl",
     "frage": "„Der Auftragnehmer haftet nicht für Schäden, die durch unsachgemäße Nutzung entstehen.“ Wann muss der Auftragnehmer nicht zahlen?",
     "opt": [
      "Wenn die Lieferung verspätet ist.",
      "Wenn der Schaden durch einen Produktfehler entsteht.",
      "Wenn der Kunde das Gerät falsch benutzt hat."
     ],
     "loesung": 2,
     "erklaerung": "„Unsachgemäß“ bedeutet: nicht so, wie es vorgesehen ist."
    },
    {
     "art": "wahl",
     "frage": "„Die Kündigung bedarf der Schriftform.“ Was ist gemeint?",
     "opt": [
      "Man muss schriftlich kündigen.",
      "Man muss einen Grund für die Kündigung nennen.",
      "Man kann nur zum Jahresende kündigen."
     ],
     "loesung": 0,
     "erklaerung": "„Bedürfen“ heißt „brauchen“: Die Kündigung braucht die schriftliche Form."
    },
    {
     "art": "wahl",
     "frage": "„Mündliche Nebenabreden bestehen nicht.“ Was bedeutet das?",
     "opt": [
      "Mündliche Absprachen sind grundsätzlich verboten.",
      "Es gibt keine zusätzlichen Vereinbarungen außerhalb des schriftlichen Vertrags.",
      "Der Vertrag darf nicht mündlich geschlossen werden."
     ],
     "loesung": 1,
     "erklaerung": "Die Klausel stellt fest, dass nur gilt, was im Vertrag steht."
    },
    {
     "art": "wahl",
     "frage": "„Sollte eine Bestimmung dieses Vertrages unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.“ Was folgt daraus?",
     "opt": [
      "Der ganze Vertrag ist dann ungültig.",
      "Der Vertrag muss neu verhandelt werden.",
      "Der Rest des Vertrages gilt weiter."
     ],
     "loesung": 2,
     "erklaerung": "„Unberührt“ heißt: Die anderen Regeln gelten unverändert weiter."
    },
    {
     "art": "wahl",
     "frage": "„Der Kunde kann binnen vierzehn Tagen ohne Angabe von Gründen vom Vertrag zurücktreten.“ „Binnen“ bedeutet:",
     "opt": [
      "nach",
      "innerhalb von",
      "ab"
     ],
     "loesung": 1,
     "erklaerung": "„Binnen“ ist ein formelles Wort für „innerhalb von“."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "textwahl",
   "name": "Lesen: Interne E-Mail",
   "kurz": "Eine Geschäfts-E-Mail, fünf Fragen a/b/c",
   "was": "Eine interne E-Mail, zum Beispiel über eine verspätete Lieferung. Fünf Fragen mit je drei Antworten.",
   "tipp": "Frag dich bei jeder Mail: Wer will was von wem, bis wann — und was ist schon erledigt?",
   "zeichen": "📧",
   "farbe": "turq",
   "punkte": 5,
   "runden": [
    {
     "id": "b2bbb1s1",
     "text": {
      "sorte": "email",
      "quelle": "Interne E-Mail",
      "titel": "Verzögerung bei der Lieferung der Steuerplatinen",
      "zeilen": [
       "Von: Tobias Krämer, Einkauf — An: Team Montage, Team Vertrieb, Kundenservice",
       "Hallo zusammen,",
       "leider muss ich euch mitteilen, dass sich die Lieferung der Steuerplatinen für die Baureihe T40 erheblich verzögert. Unser Zulieferer in Tschechien hat uns gestern Nachmittag informiert, dass in seinem Werk eine Beschichtungsanlage ausgefallen ist. Die Reparatur soll etwa zehn Tage dauern. Statt am 14. März erwarten wir die Platinen nun frühestens am 28. März. Eine verbindliche Zusage gibt es allerdings noch nicht, der Lieferant will sich bis Freitag noch einmal melden.",
       "Was bedeutet das für uns? Der aktuelle Bestand reicht nach meiner Rechnung für rund 60 Geräte, also etwa bis Mitte nächster Woche. Danach steht die Endmontage der T40 still, wenn wir nichts unternehmen. Ich habe deshalb bereits mit einem zweiten Anbieter in Augsburg gesprochen, der uns 150 Platinen innerhalb von fünf Arbeitstagen liefern könnte. Der Stückpreis liegt dort zwar rund zwölf Prozent höher, aber ein Stillstand der Montage würde uns deutlich mehr kosten. Die Geschäftsleitung hat der Bestellung heute Morgen zugestimmt.",
       "Für die Montage heißt das: Bitte zieht die Aufträge für die Baureihe T20 vor, für die alle Teile vorhanden sind. Frau Okafor plant die Schichten entsprechend um und bespricht die Details am Donnerstag in der Frühbesprechung mit euch. Überstunden sind im Moment nicht vorgesehen.",
       "An Vertrieb und Kundenservice: Bitte sagt Kunden, die eine T40 bestellt haben, noch keine neuen Liefertermine zu. Sobald die Ersatzplatinen geprüft sind, schicke ich euch eine Liste mit realistischen Terminen. Bis dahin genügt der Hinweis, dass es zu einer Verzögerung von voraussichtlich ein bis zwei Wochen kommen kann. Bei Großkunden wie den Stadtwerken Brandau meldet sich bitte die zuständige Kundenbetreuung telefonisch, nicht nur per E-Mail.",
       "Bei Fragen erreicht ihr mich bis Mittwoch unter der Durchwahl 214, danach bin ich auf Dienstreise und nur per E-Mail erreichbar.",
       "Viele Grüße, Tobias Krämer"
      ]
     },
     "aufgaben": [
      {
       "frage": "Warum verzögert sich die Lieferung?",
       "opt": [
        "Der Zulieferer hat zu viele Aufträge angenommen.",
        "Im Werk des Zulieferers ist eine Anlage ausgefallen.",
        "Die Platinen wurden auf dem Transport beschädigt."
       ],
       "loesung": 1,
       "stelle": "in seinem Werk eine Beschichtungsanlage ausgefallen ist",
       "erklaerung": "Ursache ist die defekte Beschichtungsanlage; von Überlastung oder Transportschäden ist keine Rede."
      },
      {
       "frage": "Was gilt für den neuen Liefertermin?",
       "opt": [
        "Die Platinen kommen sicher am 28. März.",
        "Der Lieferant meldet sich erst nach der Reparatur wieder.",
        "Der Lieferant hat den Termin noch nicht fest zugesagt."
       ],
       "loesung": 2,
       "stelle": "Eine verbindliche Zusage gibt es allerdings noch nicht",
       "erklaerung": "Der 28. März ist nur „frühestens“ und unverbindlich; melden will sich der Lieferant schon bis Freitag."
      },
      {
       "frage": "Was ist mit dem Angebot aus Augsburg?",
       "opt": [
        "Die Platinen werden dort bestellt, obwohl sie teurer sind.",
        "Man verzichtet darauf, weil der Preis zu hoch ist.",
        "Die Geschäftsleitung muss der Bestellung noch zustimmen."
       ],
       "loesung": 0,
       "stelle": "Die Geschäftsleitung hat der Bestellung heute Morgen zugestimmt",
       "erklaerung": "Die Zustimmung liegt bereits vor; der höhere Preis ist günstiger als ein Stillstand."
      },
      {
       "frage": "Was soll die Montage jetzt tun?",
       "opt": [
        "Überstunden für die Baureihe T40 einplanen.",
        "Zuerst Aufträge der Baureihe T20 bearbeiten.",
        "Am Donnerstag die Schichtpläne selbst ändern."
       ],
       "loesung": 1,
       "stelle": "Bitte zieht die Aufträge für die Baureihe T20 vor",
       "erklaerung": "Die T20 wird vorgezogen; die Schichten plant Frau Okafor, Überstunden sind nicht vorgesehen."
      },
      {
       "frage": "Wie sollen Vertrieb und Kundenservice mit den Kunden umgehen?",
       "opt": [
        "Sie sollen allen Kunden sofort neue Liefertermine nennen.",
        "Sie sollen Großkunden nur schriftlich informieren.",
        "Sie sollen vorerst nur auf eine mögliche Verzögerung hinweisen."
       ],
       "loesung": 2,
       "stelle": "genügt der Hinweis, dass es zu einer Verzögerung",
       "erklaerung": "Neue Termine kommen erst später; Großkunden sollen gerade telefonisch informiert werden."
      }
     ]
    },
    {
     "id": "b2bbb1s2",
     "text": {
      "sorte": "email",
      "quelle": "Interne E-Mail",
      "titel": "Umstellung auf das neue Warenwirtschaftssystem am Wochenende",
      "zeilen": [
       "Von: Sandra Wieland, IT-Koordination — An: alle Mitarbeiter am Standort Lindenhof",
       "Liebes Team,",
       "wie bereits auf der Betriebsversammlung angekündigt, stellen wir am kommenden Wochenende von unserem bisherigen Warenwirtschaftsprogramm auf das neue System um. Die Umstellung beginnt am Freitag um 16 Uhr und soll bis Sonntagabend abgeschlossen sein. In dieser Zeit sind weder Bestellungen noch Buchungen möglich. Bitte erledigt deshalb alle offenen Eingaben bis Freitag, 15 Uhr. Was danach noch im alten System steht, wird zwar übernommen, kann aber erst ab Montag weiterbearbeitet werden.",
       "Am Montag selbst rechnen wir mit Anlaufschwierigkeiten. Damit niemand allein vor einem Problem sitzt, sind von 7 bis 18 Uhr zwei Mitarbeiter des Softwareanbieters bei uns vor Ort. Ihr findet sie im Besprechungsraum im Erdgeschoss. Bitte ruft in der ersten Woche nicht direkt bei der IT-Abteilung an, sondern nutzt das Ticketsystem, damit wir die Anfragen nach Dringlichkeit sortieren können.",
       "Eure Zugangsdaten bleiben dieselben, nur das Passwort müsst ihr bei der ersten Anmeldung ändern. Wer an der Schulung im Februar nicht teilnehmen konnte, sollte sich bis Donnerstag die Lernvideos im Intranet ansehen. Sie dauern zusammen etwa vierzig Minuten. Eine Nachschulung bieten wir erst Ende des Monats an, wenn die ersten Erfahrungen ausgewertet sind.",
       "Für das Lager gilt eine Sonderregel: Da am Samstag Ware angeliefert wird, nimmt das Lagerteam die Lieferscheine an diesem Tag auf Papier entgegen. Herr Yilmaz trägt sie am Montag gemeinsam mit einem Mitarbeiter des Anbieters nach. Bitte legt die Lieferscheine gesammelt in das graue Fach im Lagerbüro.",
       "Ich weiß, dass so eine Umstellung zusätzliche Arbeit bedeutet, und bedanke mich schon jetzt für eure Geduld. Wenn alles läuft, werden wir viele Abläufe deutlich schneller erledigen können als bisher.",
       "Beste Grüße, Sandra Wieland"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passiert mit Eingaben, die nach Freitag, 15 Uhr, noch im alten System stehen?",
       "opt": [
        "Sie gehen bei der Umstellung verloren.",
        "Sie werden übernommen, sind aber erst ab Montag bearbeitbar.",
        "Sie müssen am Wochenende auf Papier notiert werden."
       ],
       "loesung": 1,
       "stelle": "kann aber erst ab Montag weiterbearbeitet werden",
       "erklaerung": "Die Daten werden übernommen; nur die Weiterbearbeitung wartet bis Montag."
      },
      {
       "frage": "Wie sollen die Mitarbeiter in der ersten Woche Hilfe holen?",
       "opt": [
        "Über das Ticketsystem oder bei den Mitarbeitern des Anbieters vor Ort.",
        "Telefonisch direkt bei der IT-Abteilung.",
        "Telefonisch beim Softwareanbieter."
       ],
       "loesung": 0,
       "stelle": "nutzt das Ticketsystem, damit wir die Anfragen nach Dringlichkeit sortieren können",
       "erklaerung": "Direkte Anrufe bei der IT sollen gerade vermieden werden; Hilfe gibt es vor Ort und per Ticket."
      },
      {
       "frage": "Was gilt für die erste Anmeldung im neuen System?",
       "opt": [
        "Alle bekommen neue Zugangsdaten.",
        "Alle müssen vorher die Lernvideos ansehen.",
        "Man muss ein neues Passwort festlegen."
       ],
       "loesung": 2,
       "stelle": "nur das Passwort müsst ihr bei der ersten Anmeldung ändern",
       "erklaerung": "Die Zugangsdaten bleiben; die Videos sind nur für Mitarbeiter ohne Schulung gedacht."
      },
      {
       "frage": "Was sollen Mitarbeiter tun, die die Schulung im Februar verpasst haben?",
       "opt": [
        "An einer Nachschulung in dieser Woche teilnehmen.",
        "Eine Einzelschulung beim Anbieter vereinbaren.",
        "Sich bis Donnerstag Lernvideos ansehen."
       ],
       "loesung": 2,
       "stelle": "sollte sich bis Donnerstag die Lernvideos im Intranet ansehen",
       "erklaerung": "Eine Nachschulung gibt es erst Ende des Monats, bis dahin helfen die Videos."
      },
      {
       "frage": "Was geschieht am Samstag im Lager?",
       "opt": [
        "Das Lager nimmt keine Ware an.",
        "Lieferscheine werden zunächst auf Papier angenommen.",
        "Herr Yilmaz trägt die Lieferungen sofort ins neue System ein."
       ],
       "loesung": 1,
       "stelle": "nimmt das Lagerteam die Lieferscheine an diesem Tag auf Papier entgegen",
       "erklaerung": "Die Ware kommt an, aber eingetragen wird erst am Montag."
      }
     ]
    },
    {
     "id": "b2bbb1s3",
     "text": {
      "sorte": "email",
      "quelle": "Interne E-Mail",
      "titel": "Reklamation der Hotelgruppe Seebrise — dringende Abstimmung",
      "zeilen": [
       "Von: Markus Feldhaus, Leiter Kundenbetreuung — An: Qualitätssicherung, Produktion, Vertriebsleitung",
       "Hallo zusammen,",
       "die Hotelgruppe Seebrise, einer unserer drei größten Kunden, hat gestern eine umfangreiche Reklamation eingereicht. Es geht um die Lieferung von 2.400 Bettbezügen aus dem Januar. Nach Angaben des Kunden sind die Bezüge nach der ersten Wäsche um mehrere Zentimeter eingelaufen und passen nicht mehr auf die Decken. Betroffen ist laut Kunde ungefähr ein Drittel der Ware, vor allem in den Häusern an der Ostsee.",
       "Ich habe noch am Abend mit der Einkaufsleiterin, Frau Brandt, telefoniert. Sie war verärgert, aber sachlich. Wichtig ist ihr vor allem, dass die Hotels bis Ostern wieder ausreichend Bettwäsche haben, denn dann beginnt die Hauptsaison. Eine Preisminderung allein reicht ihr nicht. Sie hat außerdem angedeutet, dass die Gruppe den Rahmenvertrag im Sommer neu ausschreiben will. Wir sollten die Sache also sehr ernst nehmen.",
       "Ich schlage folgendes Vorgehen vor: Die Qualitätssicherung lässt sich bis Mittwoch Muster aus den betroffenen Hotels schicken und prüft, ob der Fehler am Stoff oder an der Waschtemperatur in den Hotels liegt. Unabhängig vom Ergebnis bitte ich die Produktion zu klären, ob wir bis Ende März 800 Ersatzbezüge herstellen können. Wenn das nicht klappt, müssten wir auf Lagerware aus der Serie „Komfort“ ausweichen, die etwas teurer ist. Den Preisunterschied würden wir in diesem Fall selbst tragen.",
       "Bitte gebt gegenüber dem Kunden vorerst keine Aussagen zur Ursache ab, solange die Prüfung läuft. Alle Gespräche mit Seebrise laufen in den nächsten Wochen über mich oder meine Stellvertreterin, Frau Nowak.",
       "Für Donnerstag um 10 Uhr habe ich einen Termin im kleinen Konferenzraum eingetragen. Bis dahin sollten die ersten Prüfergebnisse und eine Einschätzung der Produktion vorliegen. Wer an dem Termin nicht teilnehmen kann, schickt bitte eine Vertretung.",
       "Viele Grüße, Markus Feldhaus"
      ]
     },
     "aufgaben": [
      {
       "frage": "Worüber beschwert sich der Kunde?",
       "opt": [
        "Die Lieferung kam erst im Januar statt im Dezember.",
        "Ein Teil der Bezüge ist nach dem Waschen zu klein geworden.",
        "Alle Bezüge haben nach der ersten Wäsche die Farbe verloren."
       ],
       "loesung": 1,
       "stelle": "nach der ersten Wäsche um mehrere Zentimeter eingelaufen",
       "erklaerung": "Die Bezüge sind eingelaufen, und zwar etwa ein Drittel, nicht alle."
      },
      {
       "frage": "Was ist Frau Brandt am wichtigsten?",
       "opt": [
        "Dass die Hotels vor der Saison genug Bettwäsche haben.",
        "Dass sie eine deutliche Preisminderung bekommt.",
        "Dass der Rahmenvertrag sofort verlängert wird."
       ],
       "loesung": 0,
       "stelle": "dass die Hotels bis Ostern wieder ausreichend Bettwäsche haben",
       "erklaerung": "Eine Preisminderung allein reicht ihr nicht; der Vertrag soll eher neu ausgeschrieben werden."
      },
      {
       "frage": "Was soll die Qualitätssicherung tun?",
       "opt": [
        "Neue Bezüge aus einem anderen Stoff herstellen.",
        "Den Hotels eine niedrigere Waschtemperatur empfehlen.",
        "Herausfinden, ob der Stoff oder das Waschen den Fehler verursacht hat."
       ],
       "loesung": 2,
       "stelle": "ob der Fehler am Stoff oder an der Waschtemperatur",
       "erklaerung": "Die Qualitätssicherung prüft die Ursache; die Herstellung ist Aufgabe der Produktion."
      },
      {
       "frage": "Was geschieht, wenn die Produktion die Ersatzbezüge nicht rechtzeitig schafft?",
       "opt": [
        "Der Kunde erhält teurere Lagerware ohne Aufpreis.",
        "Der Kunde muss den Preisunterschied zahlen.",
        "Die Lieferung wird auf die Zeit nach Ostern verschoben."
       ],
       "loesung": 0,
       "stelle": "Den Preisunterschied würden wir in diesem Fall selbst tragen",
       "erklaerung": "„Wir“ ist die eigene Firma, also zahlt nicht der Kunde die Differenz."
      },
      {
       "frage": "Was sollen die Empfänger im Kontakt mit dem Kunden beachten?",
       "opt": [
        "Sie sollen dem Kunden die Ursache des Fehlers sofort erklären.",
        "Sie sollen die Gespräche Herrn Feldhaus oder Frau Nowak überlassen.",
        "Sie sollen Frau Brandt zur Besprechung am Donnerstag einladen."
       ],
       "loesung": 1,
       "stelle": "Alle Gespräche mit Seebrise laufen in den nächsten Wochen über mich",
       "erklaerung": "Zur Ursache soll gerade nichts gesagt werden; der Kontakt läuft nur über zwei Personen."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "textwahl",
   "name": "Lesen: Übersicht",
   "kurz": "Eine Liste, vier Fragen a/b/c",
   "was": "Eine Übersicht, zum Beispiel vier Weiterbildungskurse. Vier Fragen — manchmal passen zwei Einträge zusammen.",
   "tipp": "Vergleiche Zeile für Zeile: Zielgruppe, Termin, Voraussetzung, Kosten.",
   "zeichen": "📋",
   "farbe": "gold",
   "punkte": 4,
   "runden": [
    {
     "id": "b2bbb2s1",
     "text": {
      "sorte": "seite",
      "quelle": "Weiterbildungsprogramm des Klinikums Am Rosenberg",
      "titel": "Fortbildungen für Pflege und Verwaltung im Herbst",
      "zeilen": [
       "Wenn nicht anders angegeben, finden alle Kurse im Bildungszentrum, Haus C, statt. Für Beschäftigte des Klinikums ist die Teilnahme kostenlos und gilt als Arbeitszeit, sofern die Stationsleitung zustimmt. Anmeldung über das Intranet spätestens zwei Wochen vor Kursbeginn.",
       "Kurs 1 — Deeskalation im Klinikalltag. Zielgruppe: Pflegekräfte der Notaufnahme und der Psychiatrie. Termin: 14. und 15. Oktober, jeweils 9 bis 16 Uhr. Dauer: zwei Tage. Voraussetzung: mindestens ein Jahr Berufserfahrung. Kosten: für externe Teilnehmer 280 Euro.",
       "Kurs 2 — Digitale Pflegedokumentation für Einsteiger. Zielgruppe: alle Pflegekräfte, die noch nicht mit dem neuen Dokumentationssystem arbeiten. Termin: jeden Dienstag im November, 14 bis 16 Uhr. Dauer: vier Nachmittage. Voraussetzung: keine. Kosten: nur für Beschäftigte des Klinikums, keine externen Teilnehmer.",
       "Kurs 3 — Gesprächsführung mit Angehörigen. Zielgruppe: Pflegekräfte und Stationssekretariate. Termin: 6. November, 9 bis 13 Uhr, Wiederholung am 4. Dezember. Dauer: ein Vormittag. Voraussetzung: keine. Kosten: für externe Teilnehmer 90 Euro.",
       "Kurs 4 — Abrechnung nach Fallpauschalen für Fortgeschrittene. Zielgruppe: Mitarbeiter der Patientenverwaltung und des Medizincontrollings. Termin: 20. bis 22. November, online. Dauer: drei Tage. Voraussetzung: Teilnahme am Grundkurs oder zwei Jahre Erfahrung in der Abrechnung. Kosten: für externe Teilnehmer 450 Euro."
      ]
     },
     "aufgaben": [
      {
       "frage": "Eine Pflegekraft aus der Notaufnahme arbeitet seit acht Monaten im Beruf und möchte lernen, mit aggressiven Patienten umzugehen. Was stimmt?",
       "opt": [
        "Sie kann sich für Kurs 1 anmelden.",
        "Sie erfüllt die Voraussetzung für Kurs 1 noch nicht.",
        "Sie muss für Kurs 1 280 Euro bezahlen."
       ],
       "loesung": 1,
       "stelle": "mindestens ein Jahr Berufserfahrung",
       "erklaerung": "Acht Monate reichen nicht; die 280 Euro gelten außerdem nur für Externe."
      },
      {
       "frage": "Eine Stationssekretärin möchte eine Fortbildung besuchen, hat aber im November keine Zeit. Was passt?",
       "opt": [
        "Kurs 3 am Termin im Dezember.",
        "Es gibt für sie keinen passenden Kurs.",
        "Kurs 2 im Dezember."
       ],
       "loesung": 0,
       "stelle": "Wiederholung am 4. Dezember",
       "erklaerung": "Kurs 3 richtet sich auch an Sekretariate und wird im Dezember wiederholt."
      },
      {
       "frage": "Eine Pflegekraft aus einem anderen Krankenhaus interessiert sich für die digitale Dokumentation. Was gilt?",
       "opt": [
        "Sie zahlt für Kurs 2 einen Beitrag.",
        "Sie kann Kurs 2 kostenlos besuchen.",
        "Sie kann an Kurs 2 nicht teilnehmen."
       ],
       "loesung": 2,
       "stelle": "nur für Beschäftigte des Klinikums, keine externen Teilnehmer",
       "erklaerung": "Kurs 2 ist nur für Beschäftigte des eigenen Klinikums offen."
      },
      {
       "frage": "Für welche Kurse braucht man keine Vorkenntnisse oder Berufserfahrung?",
       "opt": [
        "Kurs 1 und 4",
        "Kurs 2 und 3",
        "Kurs 3 und 4"
       ],
       "loesung": 1,
       "stelle": "Voraussetzung: keine. Kosten: nur für Beschäftigte des Klinikums",
       "erklaerung": "Nur bei Kurs 2 und 3 steht „Voraussetzung: keine“; Kurs 1 und 4 verlangen Erfahrung."
      }
     ]
    },
    {
     "id": "b2bbb2s2",
     "text": {
      "sorte": "seite",
      "quelle": "Schulungskalender der Spedition Hartwig Logistik",
      "titel": "Interne Schulungen im ersten Quartal",
      "zeilen": [
       "Die Schulungen richten sich an Beschäftigte aller Standorte. Die Kosten übernimmt die Firma, wenn die Schulung für die aktuelle Tätigkeit notwendig ist; andernfalls ist ein Eigenanteil von 50 Prozent zu zahlen. Anmeldung über die jeweilige Niederlassungsleitung.",
       "Kurs 1 — Ladungssicherung kompakt. Zielgruppe: Fahrer und Lagermitarbeiter, die Fahrzeuge beladen. Termin: 18. Januar, 7 bis 15 Uhr, Standort Nord. Dauer: ein Tag. Voraussetzung: keine. Kosten: 190 Euro pro Person, für Fahrer Pflichtschulung.",
       "Kurs 2 — Staplerschein. Zielgruppe: Lagermitarbeiter ohne Fahrerlaubnis für Gabelstapler. Termin: 5. bis 7. Februar, Standort Süd. Dauer: drei Tage mit praktischer Prüfung am letzten Tag. Voraussetzung: Mindestalter 18 Jahre, ärztliche Untersuchung nicht älter als sechs Monate. Kosten: 420 Euro pro Person.",
       "Kurs 3 — Gefahrgut für Disponenten. Zielgruppe: Mitarbeiter der Disposition. Termin: 26. Februar, online, 9 bis 12 Uhr. Dauer: ein halber Tag. Voraussetzung: Grundkenntnisse im Transportrecht. Kosten: 140 Euro pro Person.",
       "Kurs 4 — Englisch für den Kundenkontakt. Zielgruppe: Disponenten und Mitarbeiter im Kundenservice. Termin: ab 4. März zehnmal mittwochs, 16 bis 17.30 Uhr, online. Dauer: zehn Abende. Voraussetzung: Sprachniveau A2, Einstufungstest vor Kursbeginn. Kosten: 380 Euro pro Person."
      ]
     },
     "aufgaben": [
      {
       "frage": "Ein Lagermitarbeiter möchte den Staplerschein machen. Seine letzte ärztliche Untersuchung war vor einem Jahr. Was gilt?",
       "opt": [
        "Er kann sich sofort für Kurs 2 anmelden.",
        "Er braucht vorher eine neue Untersuchung.",
        "Er muss zuerst Kurs 1 besuchen."
       ],
       "loesung": 1,
       "stelle": "ärztliche Untersuchung nicht älter als sechs Monate",
       "erklaerung": "Eine Untersuchung von vor einem Jahr ist zu alt."
      },
      {
       "frage": "Welche Schulungen kann eine Disponentin besuchen, ohne an einen Standort zu fahren?",
       "opt": [
        "Kurs 1 und 3",
        "Kurs 2 und 4",
        "Kurs 3 und 4"
       ],
       "loesung": 2,
       "stelle": "Termin: 26. Februar, online",
       "erklaerung": "Kurs 3 und 4 finden online statt und richten sich beide an Disponenten."
      },
      {
       "frage": "Eine Mitarbeiterin im Kundenservice hat nur Anfängerkenntnisse in Englisch (A1). Was gilt für Kurs 4?",
       "opt": [
        "Sie muss einen Test machen und erreicht das nötige Niveau voraussichtlich nicht.",
        "Sie kann ohne Test teilnehmen.",
        "Der Kurs ist nur für Disponenten."
       ],
       "loesung": 0,
       "stelle": "Sprachniveau A2, Einstufungstest vor Kursbeginn",
       "erklaerung": "Verlangt wird A2 und ein Test; der Kundenservice gehört zur Zielgruppe."
      },
      {
       "frage": "Ein Fahrer nimmt an Kurs 1 teil. Wer trägt die Kosten?",
       "opt": [
        "Er zahlt 95 Euro selbst.",
        "Die Firma übernimmt die Kosten vollständig.",
        "Er zahlt die vollen 190 Euro."
       ],
       "loesung": 1,
       "stelle": "190 Euro pro Person, für Fahrer Pflichtschulung",
       "erklaerung": "Pflichtschulungen sind für die Tätigkeit notwendig, also zahlt die Firma; kein Eigenanteil."
      }
     ]
    },
    {
     "id": "b2bbb2s3",
     "text": {
      "sorte": "seite",
      "quelle": "Fortbildungsangebot der Stadtverwaltung Ebersfeld",
      "titel": "Seminare für Beschäftigte im Bürgerservice",
      "zeilen": [
       "Die Seminare sind für Beschäftigte der Stadtverwaltung kostenfrei. Beschäftigte anderer Kommunen zahlen den angegebenen Betrag. Die Teilnehmerzahl ist auf zwölf Personen pro Seminar begrenzt.",
       "Kurs 1 — Schwierige Situationen am Schalter. Zielgruppe: Beschäftigte mit direktem Bürgerkontakt. Termin: 9. März, 8.30 bis 15 Uhr. Dauer: ein Tag. Voraussetzung: keine. Kosten: 160 Euro.",
       "Kurs 2 — Verständliche Sprache in Bescheiden und Briefen. Zielgruppe: Sachbearbeiter, die Bescheide verfassen. Termin: 16. und 23. März, jeweils vormittags. Dauer: zwei halbe Tage. Voraussetzung: Bitte zwei eigene Musterschreiben mitbringen. Kosten: 140 Euro.",
       "Kurs 3 — Interkulturelle Kompetenz im Amt. Zielgruppe: Beschäftigte im Bürgerservice und in der Ausländerbehörde. Termin: 2. April, 9 bis 16 Uhr. Dauer: ein Tag. Voraussetzung: keine. Kosten: 160 Euro.",
       "Kurs 4 — Neues Meldeverfahren, Aufbaukurs. Zielgruppe: Beschäftigte der Meldestelle. Termin: 20. April, online, 13 bis 16 Uhr. Dauer: drei Stunden. Voraussetzung: Teilnahme an der Grundschulung im Januar. Kosten: nur für interne Teilnehmer."
      ]
     },
     "aufgaben": [
      {
       "frage": "Ein Sachbearbeiter möchte lernen, verständlichere Bescheide zu schreiben. Was muss er beachten?",
       "opt": [
        "Er muss eigene Schreiben als Beispiele mitbringen.",
        "Er muss an beiden Terminen ganztags teilnehmen.",
        "Er braucht vorher eine Grundschulung."
       ],
       "loesung": 0,
       "stelle": "Bitte zwei eigene Musterschreiben mitbringen",
       "erklaerung": "Kurs 2 läuft an zwei halben Tagen; eine Grundschulung verlangt nur Kurs 4."
      },
      {
       "frage": "Welche Seminare passen für eine Mitarbeiterin am Schalter des Bürgerservice?",
       "opt": [
        "Kurs 1 und 4",
        "Kurs 2 und 4",
        "Kurs 1 und 3"
       ],
       "loesung": 2,
       "stelle": "Beschäftigte im Bürgerservice und in der Ausländerbehörde",
       "erklaerung": "Kurs 1 ist für Bürgerkontakt, Kurs 3 nennt den Bürgerservice ausdrücklich."
      },
      {
       "frage": "Ein Mitarbeiter einer Nachbargemeinde möchte Kurs 3 besuchen. Was gilt?",
       "opt": [
        "Er kann kostenlos teilnehmen.",
        "Er zahlt 160 Euro.",
        "Er kann nicht teilnehmen."
       ],
       "loesung": 1,
       "stelle": "Beschäftigte anderer Kommunen zahlen den angegebenen Betrag",
       "erklaerung": "Kostenlos ist es nur für die eigene Stadtverwaltung; Kurs 3 kostet 160 Euro."
      },
      {
       "frage": "Eine Kollegin aus der Meldestelle hat die Grundschulung im Januar verpasst. Was gilt?",
       "opt": [
        "Sie kann trotzdem online am Aufbaukurs teilnehmen.",
        "Sie muss für Kurs 4 bezahlen.",
        "Sie kann Kurs 4 noch nicht besuchen."
       ],
       "loesung": 2,
       "stelle": "Teilnahme an der Grundschulung im Januar",
       "erklaerung": "Die Grundschulung ist Voraussetzung; bezahlen müssen Interne ohnehin nichts."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "textwahl",
   "name": "Lesen: Interne E-Mail II",
   "kurz": "Noch eine Geschäfts-E-Mail, fünf Fragen",
   "was": "Eine weitere interne E-Mail, zum Beispiel über eine Vertretung auf einer Messe.",
   "tipp": "Aufgaben und Zuständigkeiten ändern sich in der Mail — das Letzte gilt.",
   "zeichen": "✉️",
   "farbe": "rot",
   "punkte": 5,
   "runden": [
    {
     "id": "b2bbb3s1",
     "text": {
      "sorte": "email",
      "quelle": "Interne E-Mail",
      "titel": "Messe „Bau & Raum“ in Leipzig — Übergabe an dich",
      "zeilen": [
       "Von: Claudia Hensel, Vertrieb Süd — An: Daniel Petrović",
       "Hallo Daniel,",
       "wie du vielleicht schon gehört hast, muss ich nächste Woche kurzfristig ins Krankenhaus. Es ist nichts Schlimmes, aber ich werde voraussichtlich zehn Tage ausfallen. Damit fehle ich auch auf der Messe „Bau & Raum“ in Leipzig. Herr Lindner hat vorgeschlagen, dass du mich dort vertrittst, und ich freue mich sehr, dass du zugesagt hast. Hier das Wichtigste in Kürze.",
       "Die Messe läuft von Dienstag bis Freitag. Das Hotel war auf meinen Namen gebucht; ich habe die Reservierung schon auf dich umschreiben lassen, du musst also nichts mehr tun. Die Bahnfahrkarte bekommst du dagegen nicht automatisch. Bitte buche sie selbst über das Reiseportal und gib als Kostenstelle die Nummer 4470 an. Am Montagabend ist der Stand aufgebaut, die Technik prüft Ivana Kovač vom Standbau-Team.",
       "Am Stand bist du nicht allein: Mit dir sind Frau Seidel aus der Anwendungstechnik und unser Auszubildender Leon da. Frau Seidel übernimmt alle technischen Fragen, du kümmerst dich um die Gespräche mit Händlern und Architekten. Für Mittwoch um 14 Uhr habe ich einen Termin mit Herrn Aydın von der Firma Raumform vereinbart. Er interessiert sich für unsere neuen Akustikplatten und möchte über Mengenrabatte sprechen. Zusagen über Rabatte von mehr als acht Prozent darfst du nicht allein machen; in diesem Fall stimmst du dich bitte telefonisch mit Herrn Lindner ab.",
       "Die Gesprächsnotizen tragt ihr bitte jeden Abend in das Formular auf dem Tablet ein. So gehen keine Kontakte verloren, und ich kann nach meiner Rückkehr direkt nachfassen. Visitenkarten und Prospekte liegen in zwei Kartons im Kofferraum des Firmenwagens, mit dem Leon nach Leipzig fährt.",
       "Ich danke dir sehr und wünsche dir eine erfolgreiche Messe!",
       "Liebe Grüße, Claudia"
      ]
     },
     "aufgaben": [
      {
       "frage": "Warum braucht Claudia eine Vertretung?",
       "opt": [
        "Sie hat zur selben Zeit einen anderen Kundentermin.",
        "Sie fällt wegen eines Krankenhausaufenthalts aus.",
        "Herr Lindner möchte, dass Daniel Messeerfahrung sammelt."
       ],
       "loesung": 1,
       "stelle": "muss ich nächste Woche kurzfristig ins Krankenhaus",
       "erklaerung": "Herr Lindner hat Daniel nur vorgeschlagen; der Grund ist Claudias Krankenhausaufenthalt."
      },
      {
       "frage": "Was muss Daniel für die Reise selbst organisieren?",
       "opt": [
        "Die Zugfahrt.",
        "Das Hotelzimmer.",
        "Den Firmenwagen."
       ],
       "loesung": 0,
       "stelle": "Bitte buche sie selbst über das Reiseportal",
       "erklaerung": "Das Hotel ist schon umgeschrieben; den Firmenwagen fährt Leon."
      },
      {
       "frage": "Wofür ist Daniel am Stand zuständig?",
       "opt": [
        "Für technische Fragen zu den Produkten.",
        "Für die Prüfung der Standtechnik.",
        "Für Gespräche mit Händlern und Architekten."
       ],
       "loesung": 2,
       "stelle": "du kümmerst dich um die Gespräche mit Händlern und Architekten",
       "erklaerung": "Technische Fragen übernimmt Frau Seidel, die Standtechnik prüft Frau Kovač."
      },
      {
       "frage": "Was gilt für das Gespräch mit Herrn Aydın?",
       "opt": [
        "Daniel darf ihm keinen Rabatt anbieten.",
        "Bei mehr als acht Prozent Rabatt muss Daniel Rücksprache halten.",
        "Herr Lindner führt das Gespräch am Mittwoch selbst."
       ],
       "loesung": 1,
       "stelle": "Rabatte von mehr als acht Prozent darfst du nicht allein machen",
       "erklaerung": "Bis acht Prozent entscheidet Daniel selbst; darüber hinaus ruft er Herrn Lindner an."
      },
      {
       "frage": "Was soll das Messeteam jeden Abend tun?",
       "opt": [
        "Die Gesprächsnotizen ins Tablet eintragen.",
        "Claudia telefonisch über alle Kontakte informieren.",
        "Visitenkarten und Prospekte nachbestellen."
       ],
       "loesung": 0,
       "stelle": "jeden Abend in das Formular auf dem Tablet ein",
       "erklaerung": "Claudia fasst erst nach ihrer Rückkehr nach; täglich sind nur die Notizen gefragt."
      }
     ]
    },
    {
     "id": "b2bbb3s2",
     "text": {
      "sorte": "email",
      "quelle": "Interne E-Mail",
      "titel": "Einarbeitung von Herrn Okonkwo ab 1. April",
      "zeilen": [
       "Von: Sabine Roth, Teamleitung Debitorenbuchhaltung — An: Team Buchhaltung",
       "Liebes Team,",
       "am 1. April beginnt Herr Emeka Okonkwo bei uns in der Debitorenbuchhaltung. Er hat zuletzt fünf Jahre in der Buchhaltung eines Logistikunternehmens gearbeitet und kennt sich mit dem Mahnwesen bereits gut aus. Unsere Software ist für ihn allerdings neu. Damit er gut ankommt, habe ich für die ersten drei Wochen einen Einarbeitungsplan erstellt, den ihr im Anhang findet.",
       "In der ersten Woche begleitet ihn Katrin. Sie zeigt ihm die Abläufe beim Rechnungseingang und erklärt ihm unsere Ablage. Ab der zweiten Woche übernimmt Herr Okonkwo schrittweise eigene Kunden, zunächst die Postleitzahlbereiche 7 und 8. Katrin bleibt in dieser Zeit seine erste Ansprechpartnerin. Nur während ihres Urlaubs ab Mittwoch der zweiten Woche springt Ali für sie ein.",
       "Am ersten Tag treffen wir uns um 9 Uhr zu einem gemeinsamen Frühstück im Teamraum, damit sich alle kennenlernen. Ich bringe Brötchen mit; wer möchte, kann gern etwas dazu beitragen. Bitte tragt euch dafür in die Liste an der Küchentür ein, damit wir nicht fünfmal Obstsalat haben. Laptop und Zugangsdaten sind bei der IT bereits beantragt. Sollte am ersten Tag noch etwas fehlen, kann Herr Okonkwo vorübergehend am Arbeitsplatz von Frau Demir arbeiten, die bis Mai in Elternzeit ist.",
       "Ein Punkt ist mir besonders wichtig: Bitte gebt Herrn Okonkwo in den ersten Wochen keine Kunden aus euren eigenen Bereichen ab, auch wenn ihr gerade viel zu tun habt. Er soll sich zuerst in Ruhe einarbeiten. Wenn ihr Entlastung braucht, sprecht bitte direkt mich an.",
       "Nach drei Wochen führe ich ein erstes Feedbackgespräch mit ihm. Eure Eindrücke dazu sind mir willkommen, gern auch kurz per E-Mail.",
       "Viele Grüße, Sabine Roth"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was erfährt man über die Vorkenntnisse von Herrn Okonkwo?",
       "opt": [
        "Er kennt das Mahnwesen, aber nicht die Software der Firma.",
        "Er hat schon mit derselben Software gearbeitet.",
        "Er hat noch keine Erfahrung in der Buchhaltung."
       ],
       "loesung": 0,
       "stelle": "Unsere Software ist für ihn allerdings neu",
       "erklaerung": "Er hat fünf Jahre Buchhaltungserfahrung, nur die Software kennt er nicht."
      },
      {
       "frage": "Wer betreut Herrn Okonkwo ab der zweiten Woche?",
       "opt": [
        "Ali, weil Katrin ab dann im Urlaub ist.",
        "Katrin, außer während ihres Urlaubs.",
        "Frau Roth persönlich."
       ],
       "loesung": 1,
       "stelle": "Nur während ihres Urlaubs ab Mittwoch der zweiten Woche",
       "erklaerung": "Ali vertritt nur für die Urlaubstage; sonst bleibt Katrin zuständig."
      },
      {
       "frage": "Worum bittet Frau Roth im Zusammenhang mit dem Frühstück?",
       "opt": [
        "Alle sollen Brötchen mitbringen.",
        "Alle sollen Obstsalat mitbringen.",
        "Wer etwas mitbringt, soll sich in eine Liste eintragen."
       ],
       "loesung": 2,
       "stelle": "Bitte tragt euch dafür in die Liste an der Küchentür ein",
       "erklaerung": "Die Brötchen bringt Frau Roth selbst; die Liste soll doppelte Mitbringsel verhindern."
      },
      {
       "frage": "Was passiert, wenn am ersten Tag die Technik noch fehlt?",
       "opt": [
        "Herr Okonkwo beginnt erst im Mai.",
        "Herr Okonkwo nutzt vorübergehend einen anderen Arbeitsplatz.",
        "Frau Demir kommt früher aus der Elternzeit zurück."
       ],
       "loesung": 1,
       "stelle": "vorübergehend am Arbeitsplatz von Frau Demir arbeiten",
       "erklaerung": "Er nutzt den freien Platz von Frau Demir, die bis Mai in Elternzeit bleibt."
      },
      {
       "frage": "Was sollen die Kollegen in den ersten Wochen vermeiden?",
       "opt": [
        "Eigene Kunden an Herrn Okonkwo abzugeben.",
        "Frau Roth um Entlastung zu bitten.",
        "Ihre Eindrücke per E-Mail zu schicken."
       ],
       "loesung": 0,
       "stelle": "keine Kunden aus euren eigenen Bereichen ab",
       "erklaerung": "Um Entlastung sollen sie gerade Frau Roth bitten, und Rückmeldungen sind willkommen."
      }
     ]
    },
    {
     "id": "b2bbb3s3",
     "text": {
      "sorte": "email",
      "quelle": "Interne E-Mail",
      "titel": "Umzug der Personalabteilung in den Neubau",
      "zeilen": [
       "Von: Gabriele Engel, Gebäudemanagement — An: alle Mitarbeiter der Personalabteilung",
       "Hallo zusammen,",
       "der Neubau an der Westseite des Geländes ist fertig, und eure Abteilung zieht als erste ein. Der Umzug findet am Donnerstag und Freitag, dem 12. und 13. Oktober, statt. An beiden Tagen ist die Personalabteilung telefonisch nur eingeschränkt erreichbar. Bitte informiert eure Ansprechpartner in den anderen Abteilungen rechtzeitig und richtet für diese Tage eine Abwesenheitsnotiz ein. Dringende Anfragen nimmt in dieser Zeit die Zentrale entgegen.",
       "Jeder von euch bekommt bis Montag fünf Umzugskartons und Aufkleber in drei Farben. Bitte packt eure persönlichen Unterlagen und Arbeitsmaterialien bis Mittwochabend selbst ein und beschriftet jeden Karton mit eurem Namen und der neuen Zimmernummer. Möbel, Computer und Drucker transportiert die Umzugsfirma; daran bitte nichts abbauen. Die Personalakten bleiben in den verschlossenen Schränken und werden von zwei Mitarbeitern der Firma unter Aufsicht von Herrn Kaiser transportiert.",
       "Ein Hinweis zu den neuen Räumen: Im Neubau gibt es keine Einzelbüros mehr, sondern ein offenes Büro mit festen Arbeitsplätzen und drei kleinen Räumen für vertrauliche Gespräche. Diese Räume könnt ihr über den Kalender buchen. Wer bei Bewerbungs- oder Mitarbeitergesprächen auf einen Raum angewiesen ist, sollte ihn möglichst früh reservieren, denn die Nachfrage wird anfangs groß sein.",
       "Am Montag nach dem Umzug ist ab 8 Uhr ein Techniker vor Ort, der prüft, ob alle Geräte funktionieren. Fehler meldet ihr bitte direkt bei ihm und nicht über die allgemeine IT-Hotline. Leere Kartons stellt ihr einfach in den Flur, sie werden am Dienstag abgeholt.",
       "Falls ihr aus gesundheitlichen Gründen nicht selbst packen könnt, sagt mir bitte bis Freitag Bescheid. Dann organisieren wir Unterstützung.",
       "Viele Grüße, Gabriele Engel"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was sollen die Mitarbeiter für die Umzugstage vorbereiten?",
       "opt": [
        "Eine Abwesenheitsnotiz einrichten und Kollegen informieren.",
        "Ihre Telefone selbst auf die Zentrale umstellen.",
        "Alle Anfragen vor dem Umzug abschließen."
       ],
       "loesung": 0,
       "stelle": "richtet für diese Tage eine Abwesenheitsnotiz ein",
       "erklaerung": "Die Zentrale nimmt dringende Anfragen an; umstellen müssen die Mitarbeiter nichts."
      },
      {
       "frage": "Was müssen die Mitarbeiter selbst einpacken?",
       "opt": [
        "Ihre Computer und Drucker.",
        "Die Personalakten aus den Schränken.",
        "Ihre eigenen Unterlagen und Arbeitsmaterialien."
       ],
       "loesung": 2,
       "stelle": "packt eure persönlichen Unterlagen und Arbeitsmaterialien bis Mittwochabend selbst ein",
       "erklaerung": "Geräte und Akten transportiert die Umzugsfirma."
      },
      {
       "frage": "Was erfährt man über die neuen Räume?",
       "opt": [
        "Jeder Mitarbeiter bekommt ein eigenes Büro.",
        "Für vertrauliche Gespräche gibt es Räume, die man buchen kann.",
        "Die Arbeitsplätze werden jeden Tag neu verteilt."
       ],
       "loesung": 1,
       "stelle": "drei kleinen Räumen für vertrauliche Gespräche",
       "erklaerung": "Einzelbüros gibt es nicht mehr, die Arbeitsplätze sind aber fest."
      },
      {
       "frage": "Wie sollen technische Probleme nach dem Umzug gemeldet werden?",
       "opt": [
        "Über die allgemeine IT-Hotline.",
        "Per E-Mail an Frau Engel.",
        "Direkt beim Techniker vor Ort."
       ],
       "loesung": 2,
       "stelle": "Fehler meldet ihr bitte direkt bei ihm",
       "erklaerung": "Die Hotline soll gerade nicht genutzt werden."
      },
      {
       "frage": "Was sollen Mitarbeiter tun, die aus gesundheitlichen Gründen nicht packen können?",
       "opt": [
        "Sich bis Freitag bei Frau Engel melden.",
        "Einen Kollegen um Hilfe bitten.",
        "Die Umzugsfirma direkt beauftragen."
       ],
       "loesung": 0,
       "stelle": "sagt mir bitte bis Freitag Bescheid",
       "erklaerung": "Frau Engel organisiert dann die Unterstützung."
      }
     ]
    }
   ]
  },
  {
   "nr": 4,
   "art": "textwahl",
   "name": "Lesen: Merkblatt",
   "kurz": "Eine Richtlinie oder Anleitung, vier Fragen",
   "was": "Ein Merkblatt oder eine Richtlinie, zum Beispiel zu Rechnungen oder Reisekosten. Vier Fragen.",
   "tipp": "Achte auf Bedingungen und Ausnahmen: „nur wenn\", „spätestens\", „ausgenommen\".",
   "zeichen": "📑",
   "farbe": "lila",
   "punkte": 4,
   "runden": [
    {
     "id": "b2bbb4s1",
     "text": {
      "sorte": "seite",
      "quelle": "Merkblatt",
      "titel": "Merkblatt für freie Mitarbeiter: Rechnungen per E-Mail",
      "zeilen": [
       "Seit dem ersten März nimmt die Buchhaltung der Lindmark Verlagsgruppe Rechnungen von freien Mitarbeitern nur noch elektronisch entgegen. Papierrechnungen, die nach diesem Datum per Post eingehen, werden nicht mehr bearbeitet, sondern mit einem Hinweis an den Absender zurückgeschickt. Bitte beachten Sie die folgenden Punkte, damit Ihre Zahlung ohne Verzögerung erfolgt.",
       "1. Senden Sie Ihre Rechnung ausschließlich an das zentrale Rechnungspostfach, dessen Adresse Sie in Ihrem Rahmenvertrag finden. Rechnungen, die an Redakteure oder an das Sekretariat gehen, müssen erst weitergeleitet werden und verzögern die Auszahlung um mindestens eine Woche.",
       "2. Jede Rechnung muss als eigene PDF-Datei angehängt werden. Fassen Sie bitte nicht mehrere Rechnungen in einem Dokument zusammen. Dagegen dürfen Sie mehrere Dateien in einer einzigen E-Mail verschicken, sofern es sich um Aufträge desselben Monats handelt.",
       "3. Geben Sie in der Betreffzeile Ihre Lieferantennummer und die Auftragsnummer an. Fehlt die Auftragsnummer, kann die Rechnung keinem Projekt zugeordnet werden. In diesem Fall meldet sich die Buchhaltung bei Ihnen, und die Zahlungsfrist beginnt erst, wenn die vollständigen Angaben vorliegen.",
       "4. Neben den gesetzlichen Pflichtangaben benötigen wir Ihre Steuernummer und Ihre aktuelle Bankverbindung. Falls sich Ihr Konto ändert, teilen Sie uns dies bitte nicht in der Rechnung mit, sondern mit dem Formular „Stammdatenänderung“, das vom zuständigen Redakteur unterschrieben werden muss.",
       "5. Rechnungen werden innerhalb von dreißig Tagen nach Eingang bezahlt. Wer einen Rabatt für schnelle Zahlung anbieten möchte, sollte dies deutlich auf der ersten Seite vermerken; eine Zahlung innerhalb von zehn Tagen ist dann in der Regel möglich.",
       "Nach dem Versand erhalten Sie automatisch eine Eingangsbestätigung. Bleibt diese aus, prüfen Sie bitte zuerst Ihren Spam-Ordner, bevor Sie die Rechnung ein zweites Mal schicken. Doppelt eingereichte Rechnungen führen häufig zu Rückfragen und verlängern die Bearbeitung."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passiert mit einer Rechnung, die nach dem ersten März per Post ankommt?",
       "opt": [
        "Sie wird mit einigen Tagen Verzögerung bearbeitet.",
        "Sie wird an den Absender zurückgeschickt.",
        "Sie wird eingescannt und an die Buchhaltung weitergeleitet."
       ],
       "loesung": 1,
       "stelle": "mit einem Hinweis an den Absender zurückgeschickt",
       "erklaerung": "Papierrechnungen werden nicht mehr bearbeitet, sondern zurückgeschickt. „Weiterleiten“ gilt nur für E-Mails an Redakteure."
      },
      {
       "frage": "Mehrere Rechnungen …",
       "opt": [
        "müssen in einem gemeinsamen PDF-Dokument stehen.",
        "dürfen in einer E-Mail kommen, wenn sie aus demselben Monat stammen.",
        "müssen jeweils mit einer eigenen E-Mail verschickt werden."
       ],
       "loesung": 1,
       "stelle": "sofern es sich um Aufträge desselben Monats handelt",
       "erklaerung": "Ein gemeinsames Dokument ist verboten, eine gemeinsame E-Mail aber erlaubt, wenn der Monat derselbe ist."
      },
      {
       "frage": "Wenn Sie eine neue Bankverbindung haben, …",
       "opt": [
        "füllen Sie ein Formular aus, das ein Redakteur unterschreibt.",
        "schreiben Sie sie deutlich auf die nächste Rechnung.",
        "schicken Sie sie direkt an das Rechnungspostfach."
       ],
       "loesung": 0,
       "stelle": "das vom zuständigen Redakteur unterschrieben werden muss",
       "erklaerung": "Die Änderung gehört ausdrücklich „nicht in der Rechnung“, sondern in das Formular mit Unterschrift."
      },
      {
       "frage": "Was sollten Sie tun, wenn keine Eingangsbestätigung kommt?",
       "opt": [
        "Die Rechnung sofort ein zweites Mal senden.",
        "Den zuständigen Redakteur informieren.",
        "Zuerst im Spam-Ordner nachsehen."
       ],
       "loesung": 2,
       "stelle": "prüfen Sie bitte zuerst Ihren Spam-Ordner",
       "erklaerung": "Erst den Spam-Ordner prüfen; doppelte Rechnungen verlängern die Bearbeitung."
      }
     ]
    },
    {
     "id": "b2bbb4s2",
     "text": {
      "sorte": "seite",
      "quelle": "Richtlinie",
      "titel": "Richtlinie zur Reisekostenabrechnung (Inland)",
      "zeilen": [
       "Diese Richtlinie gilt für alle Dienstreisen der Beschäftigten der Hartwig Anlagenbau GmbH innerhalb Deutschlands. Für Reisen ins Ausland gelten gesonderte Regeln, die Sie im Intranet unter „Auslandsreisen“ finden. Ziel ist es, Reisekosten einheitlich und nachvollziehbar abzurechnen. Bei Fragen hilft Ihnen das Team Reisemanagement in der Personalabteilung gern weiter, am besten per E-Mail.",
       "Genehmigung: Jede Dienstreise muss vor Antritt von der direkten Führungskraft genehmigt werden. Bei Reisen, die länger als drei Tage dauern oder deren Kosten voraussichtlich fünfhundert Euro übersteigen, ist zusätzlich die Zustimmung der Abteilungsleitung erforderlich.",
       "Verkehrsmittel: Grundsätzlich ist die Bahn in der zweiten Klasse zu nutzen. Die erste Klasse wird nur erstattet, wenn die Fahrt länger als vier Stunden dauert. Ein Mietwagen ist nur dann erlaubt, wenn das Ziel mit öffentlichen Verkehrsmitteln nicht in angemessener Zeit erreichbar ist. Wer seinen privaten Pkw nutzt, erhält dreißig Cent pro gefahrenem Kilometer.",
       "Übernachtung: Hotels sollen über das firmeninterne Buchungsportal reserviert werden, da dort Sonderpreise gelten. Bucht ein Mitarbeiter selbst, werden höchstens hundertzwanzig Euro pro Nacht erstattet. Das Frühstück ist in diesem Betrag enthalten; wird es extra berechnet, wird die Verpflegungspauschale entsprechend gekürzt.",
       "Abrechnung: Die Reisekostenabrechnung ist spätestens vier Wochen nach Ende der Reise über das Formular im Personalportal einzureichen. Alle Belege müssen im Original vorliegen; Fotos von Quittungen werden nur akzeptiert, wenn das Original nachweislich verloren gegangen ist. Später eingereichte Abrechnungen können nicht mehr berücksichtigt werden.",
       "Vorschuss: Bei längeren Reisen kann ein Vorschuss von bis zu achtzig Prozent der erwarteten Kosten beantragt werden. Der Antrag muss mindestens eine Woche vor Reisebeginn bei der Personalabteilung eingehen. Nicht verbrauchte Beträge werden mit der nächsten Gehaltsabrechnung verrechnet."
      ]
     },
     "aufgaben": [
      {
       "frage": "Wann braucht man zusätzlich die Zustimmung der Abteilungsleitung?",
       "opt": [
        "Bei jeder Reise ins Ausland.",
        "Wenn die Reise mehr als drei Tage dauert.",
        "Wenn man mit dem eigenen Auto fährt."
       ],
       "loesung": 1,
       "stelle": "Bei Reisen, die länger als drei Tage dauern",
       "erklaerung": "Mehr als drei Tage oder mehr als fünfhundert Euro: dann braucht man beide Zustimmungen."
      },
      {
       "frage": "Die erste Klasse der Bahn …",
       "opt": [
        "wird bei Fahrten über vier Stunden bezahlt.",
        "ist für Führungskräfte immer erlaubt.",
        "muss vorher von der Abteilungsleitung genehmigt werden."
       ],
       "loesung": 0,
       "stelle": "wenn die Fahrt länger als vier Stunden dauert",
       "erklaerung": "Einzige Bedingung für die erste Klasse ist die Fahrtdauer von mehr als vier Stunden."
      },
      {
       "frage": "Was gilt, wenn man das Hotel selbst bucht?",
       "opt": [
        "Man muss die Buchung vorher im Portal melden.",
        "Das Frühstück wird zusätzlich erstattet.",
        "Die Firma zahlt höchstens hundertzwanzig Euro pro Nacht."
       ],
       "loesung": 2,
       "stelle": "werden höchstens hundertzwanzig Euro pro Nacht erstattet",
       "erklaerung": "Das Frühstück ist im Höchstbetrag enthalten, es wird also nicht zusätzlich erstattet."
      },
      {
       "frage": "Fotos von Quittungen …",
       "opt": [
        "werden grundsätzlich akzeptiert.",
        "müssen innerhalb einer Woche eingereicht werden.",
        "reichen nur, wenn das Original nachweislich fehlt."
       ],
       "loesung": 2,
       "stelle": "wenn das Original nachweislich verloren gegangen ist",
       "erklaerung": "Normal sind Originalbelege; Fotos sind nur die Ausnahme bei nachgewiesenem Verlust."
      }
     ]
    },
    {
     "id": "b2bbb4s3",
     "text": {
      "sorte": "seite",
      "quelle": "Leitfaden",
      "titel": "Datenschutz im Büroalltag: Die wichtigsten Regeln",
      "zeilen": [
       "Personenbezogene Daten von Kunden, Lieferanten und Kollegen sind besonders zu schützen. Dieser Leitfaden fasst die wichtigsten Regeln für den Büroalltag zusammen. Er ergänzt die Datenschutzschulung, die jeder neue Mitarbeiter in den ersten drei Monaten absolvieren muss. Bei Unsicherheiten wenden Sie sich bitte an Ihre Führungskraft oder direkt an den Datenschutzbeauftragten.",
       "1. Bildschirm und Arbeitsplatz: Sperren Sie Ihren Computer jedes Mal, wenn Sie den Platz verlassen, auch wenn es nur für wenige Minuten ist. Unterlagen mit Kundendaten dürfen nach Feierabend nicht offen auf dem Schreibtisch liegen bleiben, sondern gehören in einen abschließbaren Schrank.",
       "2. Passwörter: Ein Passwort muss mindestens zwölf Zeichen haben und darf nicht für private Konten verwendet werden. Geben Sie Ihr Passwort niemals weiter, auch nicht an Kollegen aus der IT-Abteilung. Diese fragen grundsätzlich nicht nach Ihrem Passwort; wer es trotzdem verlangt, ist vermutlich ein Betrüger.",
       "3. E-Mails: Versenden Sie Dateien mit personenbezogenen Daten an externe Empfänger nur verschlüsselt. Wenn Sie eine E-Mail an mehrere externe Empfänger schicken, setzen Sie die Adressen in das Feld „Bcc“, damit die Empfänger einander nicht sehen.",
       "4. Papier und Datenträger: Ausdrucke mit vertraulichen Inhalten werfen Sie nicht in den Papierkorb, sondern in die verschlossenen Datenschutzbehälter auf jeder Etage. USB-Sticks dürfen nur benutzt werden, wenn sie von der IT-Abteilung ausgegeben wurden.",
       "5. Datenpannen: Wenn Sie bemerken, dass Daten an einen falschen Empfänger gegangen sind oder ein Gerät verloren wurde, melden Sie dies unverzüglich dem Datenschutzbeauftragten. Das Unternehmen ist gesetzlich verpflichtet, schwere Fälle innerhalb von zweiundsiebzig Stunden der Aufsichtsbehörde zu melden. Versuchen Sie nicht, den Fehler zunächst selbst zu beheben, denn jede Verzögerung kann zu hohen Bußgeldern führen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Wann soll man den Computer sperren?",
       "opt": [
        "Immer, wenn man den Arbeitsplatz verlässt.",
        "Nur am Ende des Arbeitstages.",
        "Nur wenn man länger als ein paar Minuten weg ist."
       ],
       "loesung": 0,
       "stelle": "jedes Mal, wenn Sie den Platz verlassen",
       "erklaerung": "„Auch wenn es nur für wenige Minuten ist“ schließt die dritte Antwort aus."
      },
      {
       "frage": "Was gilt für Passwörter?",
       "opt": [
        "Man darf sie der IT-Abteilung auf Nachfrage mitteilen.",
        "Man darf sie auch für private Konten verwenden.",
        "Man darf sie an niemanden weitergeben."
       ],
       "loesung": 2,
       "stelle": "Geben Sie Ihr Passwort niemals weiter",
       "erklaerung": "Auch die IT-Abteilung bekommt das Passwort nicht; private Nutzung ist verboten."
      },
      {
       "frage": "Ausdrucke mit vertraulichen Inhalten …",
       "opt": [
        "kommen in spezielle verschlossene Behälter.",
        "werden von der IT-Abteilung abgeholt.",
        "dürfen in den Papierkorb, wenn sie zerrissen sind."
       ],
       "loesung": 0,
       "stelle": "in die verschlossenen Datenschutzbehälter auf jeder Etage",
       "erklaerung": "Der Papierkorb ist ausdrücklich ausgeschlossen; die IT-Abteilung ist nur für USB-Sticks zuständig."
      },
      {
       "frage": "Wenn eine E-Mail an einen falschen Empfänger gegangen ist, …",
       "opt": [
        "sollte man den Fehler zuerst selbst korrigieren.",
        "muss man sofort den Datenschutzbeauftragten informieren.",
        "muss man selbst innerhalb von zweiundsiebzig Stunden die Behörde anrufen."
       ],
       "loesung": 1,
       "stelle": "melden Sie dies unverzüglich dem Datenschutzbeauftragten",
       "erklaerung": "Die Meldung an die Behörde macht das Unternehmen, nicht der einzelne Mitarbeiter."
      }
     ]
    }
   ]
  },
  {
   "nr": 5,
   "art": "textwahl",
   "name": "Lesen: Mitteilungen",
   "kurz": "Zwei kurze Mitteilungen, je ein passender Betreff",
   "was": "Zwei kurze interne Mitteilungen. Zu jeder wählst du den passenden Betreff aus drei.",
   "tipp": "Der Betreff fasst den Zweck zusammen, nicht ein Detail.",
   "zeichen": "📌",
   "farbe": "turq",
   "punkte": 2,
   "runden": [
    {
     "id": "b2bbb5s1",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu Mitteilung 1?",
       "opt": [
        "Neue Öffnungszeiten der Kantine ab Juni",
        "Kantine geschlossen – Zuschuss für die Verpflegung",
        "Umbau im Erdgeschoss: Besprechungsräume verlegt"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung der Geschäftsleitung",
        "titel": "Mitteilung 1",
        "zeilen": [
         "Wegen der Umbauarbeiten im Erdgeschoss bleibt die Kantine vom zehnten bis zum einundzwanzigsten Juni geschlossen.",
         "In dieser Zeit stellen wir im Besprechungsraum drei einen Kühlschrank und eine Mikrowelle zur Verfügung.",
         "Zusätzlich erhält jeder Mitarbeiter für diese zwei Wochen einen Essenszuschuss von fünf Euro pro Arbeitstag, der mit dem Juligehalt ausgezahlt wird."
        ]
       },
       "stelle": "einen Essenszuschuss von fünf Euro pro Arbeitstag",
       "erklaerung": "Es geht um die Schließung und den Ausgleich dafür; neue Öffnungszeiten oder verlegte Räume werden nicht genannt."
      },
      {
       "frage": "Welcher Betreff passt zu Mitteilung 2?",
       "opt": [
        "Urlaubsanträge künftig nur noch digital",
        "Neue Urlaubsregelung: mehr freie Tage",
        "Personalportal vorübergehend nicht erreichbar"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Rundschreiben der Personalabteilung",
        "titel": "Mitteilung 2",
        "zeilen": [
         "Ab dem kommenden Monat werden Urlaubsanträge nicht mehr auf Papier, sondern ausschließlich über das Personalportal gestellt.",
         "Die Genehmigung durch die Führungskraft erfolgt ebenfalls dort, und Sie werden per E-Mail über die Entscheidung informiert.",
         "Bereits genehmigte Anträge auf Papier bleiben selbstverständlich gültig und müssen nicht neu eingereicht werden, auch wenn der Urlaub erst im Herbst beginnt."
        ]
       },
       "stelle": "ausschließlich über das Personalportal gestellt",
       "erklaerung": "Nur der Weg des Antrags ändert sich, nicht die Zahl der Urlaubstage."
      }
     ]
    },
    {
     "id": "b2bbb5s2",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu Mitteilung 1?",
       "opt": [
        "Neue Diensthandys für den Wochenenddienst",
        "Störung der Telefonanlage behoben",
        "Umstellung der Telefonanlage am Samstag"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung der IT-Abteilung",
        "titel": "Mitteilung 1",
        "zeilen": [
         "Am Samstag, dem vierzehnten, wird zwischen acht und vierzehn Uhr die Telefonanlage auf ein neues System umgestellt.",
         "In dieser Zeit sind die Festnetzanschlüsse nicht erreichbar; Kunden werden automatisch auf eine Ansage umgeleitet.",
         "Kollegen mit Wochenenddienst nutzen bitte ihr Diensthandy und prüfen am Montag gleich nach Arbeitsbeginn, ob ihr Apparat wieder funktioniert."
        ]
       },
       "stelle": "die Telefonanlage auf ein neues System umgestellt",
       "erklaerung": "Die Umstellung ist geplant und steht noch bevor; von neuen Handys oder einer behobenen Störung ist keine Rede."
      },
      {
       "frage": "Welcher Betreff passt zu Mitteilung 2?",
       "opt": [
        "Wechsel in der Vertriebsleitung",
        "Neues Büro in Hamburg eröffnet",
        "Abschiedsfeier für Herrn Albers"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Information der Geschäftsleitung",
        "titel": "Mitteilung 2",
        "zeilen": [
         "Unser langjähriger Vertriebsleiter Herr Albers geht Ende März in den Ruhestand.",
         "Seine Nachfolge übernimmt Frau Demir, die bisher unser Büro in Hamburg geleitet hat.",
         "Für die Übergabe der Kundenkontakte arbeiten beide bis Ende März zusammen; bitte wenden Sie sich bei Fragen zu laufenden Angeboten und neuen Aufträgen bereits jetzt an Frau Demir."
        ]
       },
       "stelle": "Seine Nachfolge übernimmt Frau Demir",
       "erklaerung": "Kern ist der Personalwechsel; das Büro in Hamburg gibt es schon, eine Feier wird nicht erwähnt."
      }
     ]
    },
    {
     "id": "b2bbb5s3",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu Mitteilung 1?",
       "opt": [
        "Ergebnisse der Mitarbeiterbefragung liegen vor",
        "Einladung zur Betriebsversammlung",
        "Neue Schichtzeiten ab Oktober"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung des Betriebsrats",
        "titel": "Mitteilung 1",
        "zeilen": [
         "Die diesjährige Betriebsversammlung findet am Donnerstag, dem zwölften Oktober, um zehn Uhr in der Werkshalle zwei statt.",
         "Die Teilnahme gilt selbstverständlich als Arbeitszeit, auch für Kollegen aus der Nachtschicht.",
         "Auf der Tagesordnung stehen unter anderem die neue Schichtplanung und die Ergebnisse der Mitarbeiterbefragung; Fragen können Sie vorab anonym in den Briefkasten vor dem Betriebsratsbüro werfen."
        ]
       },
       "stelle": "Die diesjährige Betriebsversammlung findet am Donnerstag",
       "erklaerung": "Befragung und Schichtplanung sind nur Punkte der Tagesordnung, nicht das Thema der Mitteilung."
      },
      {
       "frage": "Welcher Betreff passt zu Mitteilung 2?",
       "opt": [
        "Neuer Empfang im Erdgeschoss",
        "Mitarbeiterausweise werden ausgetauscht",
        "Neue Regeln für Besucher"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Hinweis der Verwaltung",
        "titel": "Mitteilung 2",
        "zeilen": [
         "Aus Sicherheitsgründen werden ab dem ersten November alle Besucher am Empfang registriert und erhalten einen Besucherausweis.",
         "Bitte melden Sie erwartete Gäste spätestens am Vortag über das Formular im Intranet an.",
         "Besucher dürfen sich im Gebäude nur in Begleitung eines Mitarbeiters bewegen und geben den Ausweis beim Verlassen wieder am Empfang ab. Für Handwerker und Lieferanten gilt dieselbe Regel."
        ]
       },
       "stelle": "alle Besucher am Empfang registriert",
       "erklaerung": "Die Ausweise sind für Besucher, nicht für Mitarbeiter; der Empfang selbst ist nicht neu."
      }
     ]
    }
   ]
  },
  {
   "nr": 6,
   "art": "textwahl",
   "name": "Sprachbausteine: richtig oder falsch?",
   "kurz": "Ein Geschäftsbrief, zehn markierte Stellen",
   "was": "Ein Geschäftsbrief mit zehn markierten Stellen. Ist das Wort richtig (a) — oder passt b oder c?",
   "tipp": "Etwa jede dritte Stelle ist schon richtig. Prüf Kasus, Präposition und Verbform, bevor du änderst.",
   "zeichen": "🧩",
   "farbe": "gold",
   "punkte": 10,
   "runden": [
    {
     "id": "b2bbbsb1s1",
     "text": {
      "sorte": "brief",
      "quelle": "Geschäftsbrief",
      "titel": "Kündigung einer Betriebshaftpflichtversicherung",
      "zeilen": [
       "Kündigung der Betriebshaftpflichtversicherung, Vertragsnummer BH-4471-22",
       "Sehr geehrte Damen und Herren,",
       "hiermit kündigen wir den oben genannten Vertrag fristgerecht [[1:zum]] 31. Dezember dieses Jahres.",
       "Wie Sie wissen, haben wir unseren Betrieb im Sommer [[2:auf]] eine größere Halle in Neuenkirchen verlegt. Da sich dadurch auch die Zahl unserer Mitarbeiter fast [[3:verdoppelt]] hat, mussten wir unseren Versicherungsschutz grundsätzlich überprüfen. Inzwischen haben wir einen Rahmenvertrag mit einem anderen Anbieter abgeschlossen, [[4:den]] alle Risiken unseres Unternehmens in einem einzigen Paket abdeckt.",
       "Wir bitten Sie, uns den Eingang dieser Kündigung schriftlich zu [[5:bestätigt]] und uns mitzuteilen, [[6:ob]] von unserer Seite noch Unterlagen benötigt werden.",
       "Für die gute Zusammenarbeit in den vergangenen acht Jahren möchten wir uns ausdrücklich bei Ihnen bedanken. Besonders bei der Regulierung [[7:dem]] Wasserschadens im letzten Frühjahr haben Sie uns schnell und unkompliziert geholfen. Diese Unterstützung haben wir sehr [[8:schätzen]] gelernt.",
       "Bei Rückfragen erreichen Sie unsere Buchhaltung [[9:unter]] der Telefonnummer 0421 558930. Ihre Ansprechpartnerin ist Frau Lindqvist, [[10:deren]] Sie montags bis donnerstags von 9 bis 15 Uhr erreichen.",
       "Mit freundlichen Grüßen",
       "Hendrik Albers",
       "Geschäftsführer, Albers Metallbau GmbH"
      ]
     },
     "aufgaben": [
      {
       "frage": "Stelle 1: Ist „zum\" richtig — oder b oder c?",
       "luecke": 1,
       "opt": [
        "zum",
        "am",
        "bis"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Eine Kündigung erfolgt „zum\" Stichtag; „am\" nennt nur den Tag, an dem man kündigt."
      },
      {
       "frage": "Stelle 2: Ist „auf\" richtig — oder b oder c?",
       "luecke": 2,
       "opt": [
        "auf",
        "in",
        "an"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Man verlegt einen Betrieb „in eine Halle\" (Richtung, Akkusativ); „auf\" passt zu Flächen wie Gelände."
      },
      {
       "frage": "Stelle 3: Ist „verdoppelt\" richtig — oder b oder c?",
       "luecke": 3,
       "opt": [
        "verdoppelt",
        "verdoppeln",
        "verdoppelte"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Perfekt mit „hat\" verlangt das Partizip II „verdoppelt\"."
      },
      {
       "frage": "Stelle 4: Ist „den\" richtig — oder b oder c?",
       "luecke": 4,
       "opt": [
        "den",
        "der",
        "dem"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Das Relativpronomen ist Subjekt im Nebensatz („… abdeckt\"), also Nominativ maskulin: „der\"."
      },
      {
       "frage": "Stelle 5: Ist „bestätigt\" richtig — oder b oder c?",
       "luecke": 5,
       "opt": [
        "bestätigt",
        "bestätigen",
        "bestätigte"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Nach „zu\" steht der Infinitiv: „zu bestätigen\"."
      },
      {
       "frage": "Stelle 6: Ist „ob\" richtig — oder b oder c?",
       "luecke": 6,
       "opt": [
        "ob",
        "dass",
        "wenn"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Es ist offen, ob Unterlagen fehlen – eine indirekte Ja/Nein-Frage braucht „ob\"."
      },
      {
       "frage": "Stelle 7: Ist „dem\" richtig — oder b oder c?",
       "luecke": 7,
       "opt": [
        "dem",
        "des",
        "den"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„die Regulierung des Schadens\": Genitivattribut, maskulin „des Wasserschadens\"."
      },
      {
       "frage": "Stelle 8: Ist „schätzen\" richtig — oder b oder c?",
       "luecke": 8,
       "opt": [
        "schätzen",
        "geschätzt",
        "zu schätzen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Wendung „etwas zu schätzen lernen/wissen\" mit „zu\" + Infinitiv."
      },
      {
       "frage": "Stelle 9: Ist „unter\" richtig — oder b oder c?",
       "luecke": 9,
       "opt": [
        "unter",
        "mit",
        "bei"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Erreichbarkeit: „unter der Telefonnummer\" ist die feste Präposition."
      },
      {
       "frage": "Stelle 10: Ist „deren\" richtig — oder b oder c?",
       "luecke": 10,
       "opt": [
        "deren",
        "die",
        "der"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„Sie erreichen Frau Lindqvist\": Akkusativobjekt, feminin, also „die\"; „deren\" ist Genitiv."
      }
     ]
    },
    {
     "id": "b2bbbsb1s2",
     "text": {
      "sorte": "brief",
      "quelle": "Geschäftsbrief",
      "titel": "Reklamation einer Möbellieferung",
      "zeilen": [
       "Reklamation zu unserer Bestellung vom 14. Oktober, Auftragsnummer 88-2051",
       "Sehr geehrter Herr Okafor,",
       "am 14. Oktober haben wir bei Ihnen zwanzig höhenverstellbare Schreibtische [[1:bestellt]], die laut Auftragsbestätigung bis Ende Oktober geliefert werden sollten. Die Lieferung ist zwar pünktlich eingetroffen, [[2:denn]] bei der Kontrolle haben wir leider mehrere Mängel festgestellt.",
       "Bei vier Tischen [[3:funktioniert]] der Motor nicht, sodass sich die Höhe nicht verstellen lässt. Zwei weitere Tische haben deutliche Kratzer auf [[4:der]] Tischplatte. Fotos der [[5:beschädigte]] Tische finden Sie im Anhang.",
       "Da wir die neuen Arbeitsplätze ab dem 10. November dringend brauchen, bitten wir Sie, die mangelhaften Tische [[6:innerhalb]] von zehn Tagen auszutauschen. Bitte nennen Sie uns einen Termin, [[7:in]] dem Ihr Techniker vorbeikommen kann. Sollte ein Austausch in dieser Zeit nicht möglich sein, erwarten wir eine Gutschrift [[8:für]] Höhe des Kaufpreises für die sechs betroffenen Tische.",
       "Wir gehen außerdem davon aus, [[9:ob]] Sie die Kosten für den Rücktransport übernehmen. Da wir seit vielen Jahren gern mit Ihnen [[10:zusammenarbeitet]], sind wir sicher, dass wir eine gute Lösung finden werden.",
       "Mit freundlichen Grüßen",
       "Carola Wendt",
       "Einkauf, Wendt & Partner Steuerberatung"
      ]
     },
     "aufgaben": [
      {
       "frage": "Stelle 1: Ist „bestellt\" richtig — oder b oder c?",
       "luecke": 1,
       "opt": [
        "bestellt",
        "bestellen",
        "bestellte"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Perfekt mit „haben\" braucht das Partizip II „bestellt\"."
      },
      {
       "frage": "Stelle 2: Ist „denn\" richtig — oder b oder c?",
       "luecke": 2,
       "opt": [
        "denn",
        "aber",
        "sondern"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Verbindung „zwar … aber\"; „sondern\" steht nur nach einer Verneinung."
      },
      {
       "frage": "Stelle 3: Ist „funktioniert\" richtig — oder b oder c?",
       "luecke": 3,
       "opt": [
        "funktioniert",
        "funktionieren",
        "funktionierend"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Subjekt ist „der Motor\" (Singular), also „funktioniert\"."
      },
      {
       "frage": "Stelle 4: Ist „der\" richtig — oder b oder c?",
       "luecke": 4,
       "opt": [
        "der",
        "die",
        "den"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Ort, an dem sich die Kratzer befinden: „auf\" + Dativ, feminin „der\"."
      },
      {
       "frage": "Stelle 5: Ist „beschädigte\" richtig — oder b oder c?",
       "luecke": 5,
       "opt": [
        "beschädigte",
        "beschädigten",
        "beschädigter"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Nach dem bestimmten Artikel im Genitiv Plural („der\") endet das Adjektiv auf „-en\"."
      },
      {
       "frage": "Stelle 6: Ist „innerhalb\" richtig — oder b oder c?",
       "luecke": 6,
       "opt": [
        "innerhalb",
        "während",
        "seit"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Eine Frist wird mit „innerhalb von\" angegeben; „während\" verlangt Genitiv ohne „von\"."
      },
      {
       "frage": "Stelle 7: Ist „in\" richtig — oder b oder c?",
       "luecke": 7,
       "opt": [
        "in",
        "an",
        "bis"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Bei Tagen und Terminen steht „an\": „an dem Termin\" – „an dem\" ist hier richtig."
      },
      {
       "frage": "Stelle 8: Ist „für\" richtig — oder b oder c?",
       "luecke": 8,
       "opt": [
        "für",
        "in",
        "auf"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Wendung „in Höhe von\" bzw. „in Höhe des Kaufpreises\"."
      },
      {
       "frage": "Stelle 9: Ist „ob\" richtig — oder b oder c?",
       "luecke": 9,
       "opt": [
        "ob",
        "dass",
        "weil"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„davon ausgehen, dass …\": Man nimmt etwas als sicher an, deshalb „dass\", nicht „ob\"."
      },
      {
       "frage": "Stelle 10: Ist „zusammenarbeitet\" richtig — oder b oder c?",
       "luecke": 10,
       "opt": [
        "zusammenarbeitet",
        "zusammenarbeiten",
        "zusammengearbeitet"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Subjekt ist „wir\", also Verb im Plural: „zusammenarbeiten\"."
      }
     ]
    },
    {
     "id": "b2bbbsb1s3",
     "text": {
      "sorte": "brief",
      "quelle": "Geschäftsbrief",
      "titel": "Angebot für ein Firmenseminar",
      "zeilen": [
       "Ihre Anfrage vom 3. März: Angebot Seminar „Konfliktmanagement im Team\"",
       "Sehr geehrte Frau Brandt,",
       "vielen Dank für Ihre Anfrage vom 3. März und [[1:Ihren]] Interesse an unseren Seminaren. Gern [[2:unterbreiten]] wir Ihnen folgendes Angebot für ein zweitägiges Seminar zum Thema „Konfliktmanagement im Team\".",
       "Das Seminar richtet sich an Führungskräfte, [[3:die]] erst seit Kurzem ein Team leiten. Es wird von zwei erfahrenen [[4:Trainer]] geleitet und kann [[5:sowohl]] in Ihren Räumen oder in unserem Schulungszentrum in Kassel stattfinden. Im Mittelpunkt stehen praktische Übungen, Rollenspiele und die Arbeit an konkreten Fällen aus dem Alltag der Teilnehmer.",
       "Der Preis [[6:beträgt]] 3.400 Euro zuzüglich Mehrwertsteuer für bis zu zwölf Teilnehmer. Darin [[7:ist]] die Seminarunterlagen sowie ein Teilnahmezertifikat enthalten. Falls das Seminar bei uns stattfindet, kommen pro Person und Tag 35 Euro [[8:für]] Verpflegung hinzu.",
       "[[9:Wegen]] Sie sich bis zum 31. März verbindlich anmelden, erhalten Sie einen Frühbucherrabatt von zehn Prozent. Für Fragen stehen wir Ihnen jederzeit gern zur Verfügung.",
       "Wir würden uns freuen, Sie und Ihr Team bald bei uns [[10:begrüßt]] zu dürfen.",
       "Mit freundlichen Grüßen",
       "Tobias Reinholz",
       "Seminarberatung, Reinholz Akademie"
      ]
     },
     "aufgaben": [
      {
       "frage": "Stelle 1: Ist „Ihren\" richtig — oder b oder c?",
       "luecke": 1,
       "opt": [
        "Ihren",
        "Ihr",
        "Ihrem"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„für … Ihr Interesse\": Akkusativ, neutral – daher „Ihr\"."
      },
      {
       "frage": "Stelle 2: Ist „unterbreiten\" richtig — oder b oder c?",
       "luecke": 2,
       "opt": [
        "unterbreiten",
        "unterbreitet",
        "unterbreitete"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Subjekt ist „wir\", Präsens Plural: „unterbreiten\"."
      },
      {
       "frage": "Stelle 3: Ist „die\" richtig — oder b oder c?",
       "luecke": 3,
       "opt": [
        "die",
        "denen",
        "deren"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Das Relativpronomen ist Subjekt („… ein Team leiten\"), Nominativ Plural: „die\"."
      },
      {
       "frage": "Stelle 4: Ist „Trainer\" richtig — oder b oder c?",
       "luecke": 4,
       "opt": [
        "Trainer",
        "Trainern",
        "Trainers"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Nach „von\" steht Dativ; im Dativ Plural bekommt das Nomen ein „-n\": „Trainern\"."
      },
      {
       "frage": "Stelle 5: Ist „sowohl\" richtig — oder b oder c?",
       "luecke": 5,
       "opt": [
        "sowohl",
        "entweder",
        "weder"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Zu „oder\" gehört „entweder\"; „sowohl\" braucht „als auch\"."
      },
      {
       "frage": "Stelle 6: Ist „beträgt\" richtig — oder b oder c?",
       "luecke": 6,
       "opt": [
        "beträgt",
        "betragen",
        "betrug"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Subjekt „der Preis\" ist Singular, Präsens: „beträgt\"."
      },
      {
       "frage": "Stelle 7: Ist „ist\" richtig — oder b oder c?",
       "luecke": 7,
       "opt": [
        "ist",
        "sind",
        "wird"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Subjekt sind „die Seminarunterlagen sowie ein Zertifikat\" (Plural), also „sind\"."
      },
      {
       "frage": "Stelle 8: Ist „für\" richtig — oder b oder c?",
       "luecke": 8,
       "opt": [
        "für",
        "von",
        "über"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Kosten „für\" etwas: „35 Euro für Verpflegung\"."
      },
      {
       "frage": "Stelle 9: Ist „Wegen\" richtig — oder b oder c?",
       "luecke": 9,
       "opt": [
        "Wegen",
        "Wenn",
        "Ob"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Bedingung mit Verb am Ende braucht die Konjunktion „wenn\"; „wegen\" ist eine Präposition."
      },
      {
       "frage": "Stelle 10: Ist „begrüßt\" richtig — oder b oder c?",
       "luecke": 10,
       "opt": [
        "begrüßt",
        "begrüßen",
        "begrüßend"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Vor „zu dürfen\" steht der Infinitiv: „begrüßen zu dürfen\"."
      }
     ]
    }
   ]
  },
  {
   "nr": 7,
   "art": "textwahl",
   "name": "Sprachbausteine: Wortschatz",
   "kurz": "AGB oder Vertrag, zehn Lücken, fünfzehn Wörter",
   "was": "Ein Auszug aus AGB, einem Vertrag oder einer Hausordnung mit zehn Lücken und fünfzehn Wörtern.",
   "tipp": "Vertragssprache ist formelhaft: „in Rechnung stellen\", „schriftlich anzeigen\", „Anspruch auf\".",
   "zeichen": "🔤",
   "farbe": "rot",
   "punkte": 10,
   "runden": [
    {
     "id": "b2bbbsb2s1",
     "text": {
      "sorte": "seite",
      "quelle": "Auszug",
      "titel": "Auszug aus den AGB eines Büromaterial-Versands",
      "zeilen": [
       "Allgemeine Geschäftsbedingungen der Ostmann Bürobedarf GmbH – Auszug",
       "§ 4 Lieferung und Versand",
       "(1) Die Lieferung __(1)__ ausschließlich an Geschäftskunden mit Sitz in Deutschland.",
       "(2) Die angegebenen Lieferzeiten sind unverbindlich, __(2)__ nicht ausdrücklich ein fester Liefertermin vereinbart wurde.",
       "(3) Teillieferungen sind zulässig, soweit sie dem Kunden __(3)__ sind.",
       "(4) Die Versandkosten richten sich __(4)__ dem Gewicht der Bestellung. Ab einem Warenwert von 250 Euro liefern wir innerhalb Deutschlands versandkostenfrei. Expresslieferungen werden nach Aufwand gesondert berechnet.",
       "§ 5 Gefahrübergang und Prüfung der Ware",
       "(1) Die Gefahr __(5)__ zufälligen Untergangs geht mit der Übergabe an das Transportunternehmen auf den Kunden über.",
       "(2) Der Kunde ist __(6)__, die Ware unverzüglich nach Erhalt auf sichtbare Schäden zu prüfen. Offensichtliche Mängel __(7)__ innerhalb von sieben Tagen schriftlich angezeigt werden. Andernfalls __(8)__ alle Ansprüche wegen dieser Mängel.",
       "§ 6 Zahlung",
       "(1) Rechnungen sind innerhalb von 14 Tagen ohne __(9)__ zahlbar. Bei Zahlung innerhalb von sieben Tagen gewähren wir zwei Prozent Skonto. Maßgeblich ist der Tag, an dem der Betrag auf unserem Konto gutgeschrieben wird.",
       "(2) Gerät der Kunde in Zahlungsverzug, sind wir berechtigt, Verzugszinsen in gesetzlicher Höhe __(10)__ verlangen und weitere Lieferungen nur noch gegen Vorkasse auszuführen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "erfolgt",
        "erfolgen",
        "sofern",
        "zumutbar",
        "zumutbare",
        "nach",
        "des",
        "verpflichtet",
        "Pflicht",
        "müssen",
        "muss",
        "erlöschen",
        "erlischt",
        "Abzug",
        "zu"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Die Lieferung\" ist Singular („erfolgt\"), „Mängel\" und „Ansprüche\" sind Plural („müssen\", „erlöschen\"). Typische Vertragswendungen: „sich richten nach\", „ohne Abzug zahlbar\", „verpflichtet sein, … zu\"."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "erfolgt",
        "erfolgen",
        "sofern",
        "zumutbar",
        "zumutbare",
        "nach",
        "des",
        "verpflichtet",
        "Pflicht",
        "müssen",
        "muss",
        "erlöschen",
        "erlischt",
        "Abzug",
        "zu"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „sofern\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "erfolgt",
        "erfolgen",
        "sofern",
        "zumutbar",
        "zumutbare",
        "nach",
        "des",
        "verpflichtet",
        "Pflicht",
        "müssen",
        "muss",
        "erlöschen",
        "erlischt",
        "Abzug",
        "zu"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „zumutbar\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "erfolgt",
        "erfolgen",
        "sofern",
        "zumutbar",
        "zumutbare",
        "nach",
        "des",
        "verpflichtet",
        "Pflicht",
        "müssen",
        "muss",
        "erlöschen",
        "erlischt",
        "Abzug",
        "zu"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „nach\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "erfolgt",
        "erfolgen",
        "sofern",
        "zumutbar",
        "zumutbare",
        "nach",
        "des",
        "verpflichtet",
        "Pflicht",
        "müssen",
        "muss",
        "erlöschen",
        "erlischt",
        "Abzug",
        "zu"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „des\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "erfolgt",
        "erfolgen",
        "sofern",
        "zumutbar",
        "zumutbare",
        "nach",
        "des",
        "verpflichtet",
        "Pflicht",
        "müssen",
        "muss",
        "erlöschen",
        "erlischt",
        "Abzug",
        "zu"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Richtig ist „verpflichtet\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "erfolgt",
        "erfolgen",
        "sofern",
        "zumutbar",
        "zumutbare",
        "nach",
        "des",
        "verpflichtet",
        "Pflicht",
        "müssen",
        "muss",
        "erlöschen",
        "erlischt",
        "Abzug",
        "zu"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „müssen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "erfolgt",
        "erfolgen",
        "sofern",
        "zumutbar",
        "zumutbare",
        "nach",
        "des",
        "verpflichtet",
        "Pflicht",
        "müssen",
        "muss",
        "erlöschen",
        "erlischt",
        "Abzug",
        "zu"
       ],
       "loesung": 11,
       "fest": true,
       "erklaerung": "Richtig ist „erlöschen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "erfolgt",
        "erfolgen",
        "sofern",
        "zumutbar",
        "zumutbare",
        "nach",
        "des",
        "verpflichtet",
        "Pflicht",
        "müssen",
        "muss",
        "erlöschen",
        "erlischt",
        "Abzug",
        "zu"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Richtig ist „Abzug\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "erfolgt",
        "erfolgen",
        "sofern",
        "zumutbar",
        "zumutbare",
        "nach",
        "des",
        "verpflichtet",
        "Pflicht",
        "müssen",
        "muss",
        "erlöschen",
        "erlischt",
        "Abzug",
        "zu"
       ],
       "loesung": 14,
       "fest": true,
       "erklaerung": "Richtig ist „zu\". Jedes Wort passt nur einmal."
      }
     ]
    },
    {
     "id": "b2bbbsb2s2",
     "text": {
      "sorte": "seite",
      "quelle": "Auszug",
      "titel": "Auszug aus einem Wartungsvertrag",
      "zeilen": [
       "Wartungsvertrag für Klima- und Lüftungsanlagen – Auszug",
       "§ 2 Leistungsumfang",
       "Der Auftragnehmer __(1)__ die im Anhang aufgeführten Anlagen zweimal jährlich, und zwar jeweils im Frühjahr und im Herbst. Die genauen Termine werden mindestens zwei Wochen im __(2)__ mit dem Auftraggeber abgestimmt. Zur Wartung gehören insbesondere die Reinigung der Filter, die Prüfung der elektrischen Bauteile __(3)__ ein kurzer Funktionstest. Verschleißteile, __(4)__ Austausch während der Wartung notwendig wird, werden gesondert berechnet. Nach jeder Wartung erhält der Auftraggeber ein schriftliches Protokoll mit allen festgestellten Mängeln und Empfehlungen.",
       "§ 3 Störungen",
       "Bei einer Störung ist der Auftragnehmer verpflichtet, __(5)__ von 24 Stunden nach Eingang der Meldung mit der Reparatur zu beginnen. Der Auftraggeber __(6)__ dafür, dass die Techniker ungehinderten Zugang zu den Anlagen haben. Eingriffe durch Dritte sind nur nach vorheriger __(7)__ mit dem Auftragnehmer zulässig. Für Schäden, die durch solche Eingriffe entstehen, übernimmt der Auftragnehmer keine Haftung.",
       "§ 4 Laufzeit und Kündigung",
       "Der Vertrag wird für zwei Jahre geschlossen. Er __(8)__ sich automatisch um ein weiteres Jahr, wenn er nicht spätestens drei Monate vor Ablauf schriftlich __(9)__ wird. Das Recht beider Vertragsparteien zur außerordentlichen Kündigung aus wichtigem Grund bleibt davon __(10)__."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "wartet",
        "warten",
        "Voraus",
        "sowie",
        "deren",
        "dessen",
        "innerhalb",
        "während",
        "sorgt",
        "kümmert",
        "Absprache",
        "verlängert",
        "verlängern",
        "gekündigt",
        "unberührt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Verschleißteile\" ist Plural, daher „deren\"; man „sorgt dafür\", aber „kümmert sich darum\". Feste Wendungen: „im Voraus\", „innerhalb von\", „bleibt unberührt\"."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "wartet",
        "warten",
        "Voraus",
        "sowie",
        "deren",
        "dessen",
        "innerhalb",
        "während",
        "sorgt",
        "kümmert",
        "Absprache",
        "verlängert",
        "verlängern",
        "gekündigt",
        "unberührt"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „Voraus\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "wartet",
        "warten",
        "Voraus",
        "sowie",
        "deren",
        "dessen",
        "innerhalb",
        "während",
        "sorgt",
        "kümmert",
        "Absprache",
        "verlängert",
        "verlängern",
        "gekündigt",
        "unberührt"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „sowie\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "wartet",
        "warten",
        "Voraus",
        "sowie",
        "deren",
        "dessen",
        "innerhalb",
        "während",
        "sorgt",
        "kümmert",
        "Absprache",
        "verlängert",
        "verlängern",
        "gekündigt",
        "unberührt"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „deren\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "wartet",
        "warten",
        "Voraus",
        "sowie",
        "deren",
        "dessen",
        "innerhalb",
        "während",
        "sorgt",
        "kümmert",
        "Absprache",
        "verlängert",
        "verlängern",
        "gekündigt",
        "unberührt"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „innerhalb\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "wartet",
        "warten",
        "Voraus",
        "sowie",
        "deren",
        "dessen",
        "innerhalb",
        "während",
        "sorgt",
        "kümmert",
        "Absprache",
        "verlängert",
        "verlängern",
        "gekündigt",
        "unberührt"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „sorgt\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "wartet",
        "warten",
        "Voraus",
        "sowie",
        "deren",
        "dessen",
        "innerhalb",
        "während",
        "sorgt",
        "kümmert",
        "Absprache",
        "verlängert",
        "verlängern",
        "gekündigt",
        "unberührt"
       ],
       "loesung": 10,
       "fest": true,
       "erklaerung": "Richtig ist „Absprache\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "wartet",
        "warten",
        "Voraus",
        "sowie",
        "deren",
        "dessen",
        "innerhalb",
        "während",
        "sorgt",
        "kümmert",
        "Absprache",
        "verlängert",
        "verlängern",
        "gekündigt",
        "unberührt"
       ],
       "loesung": 11,
       "fest": true,
       "erklaerung": "Richtig ist „verlängert\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "wartet",
        "warten",
        "Voraus",
        "sowie",
        "deren",
        "dessen",
        "innerhalb",
        "während",
        "sorgt",
        "kümmert",
        "Absprache",
        "verlängert",
        "verlängern",
        "gekündigt",
        "unberührt"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Richtig ist „gekündigt\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "wartet",
        "warten",
        "Voraus",
        "sowie",
        "deren",
        "dessen",
        "innerhalb",
        "während",
        "sorgt",
        "kümmert",
        "Absprache",
        "verlängert",
        "verlängern",
        "gekündigt",
        "unberührt"
       ],
       "loesung": 14,
       "fest": true,
       "erklaerung": "Richtig ist „unberührt\". Jedes Wort passt nur einmal."
      }
     ]
    },
    {
     "id": "b2bbbsb2s3",
     "text": {
      "sorte": "seite",
      "quelle": "Auszug",
      "titel": "Hausordnung eines Produktionsbetriebs",
      "zeilen": [
       "Hausordnung der Kessler Kunststofftechnik GmbH – Auszug",
       "1. Zutritt",
       "Das Betriebsgelände darf nur mit einem gültigen Firmenausweis betreten werden. Besucher melden sich am Empfang an und __(1)__ während ihres gesamten Aufenthalts von einem Mitarbeiter begleitet. Der Ausweis ist __(2)__ gut sichtbar zu tragen.",
       "2. Sicherheit",
       "In den Produktionshallen __(3)__ Sicherheitsschuhe und Gehörschutz getragen werden. Fluchtwege und Notausgänge müssen jederzeit frei __(4)__. Wer einen Unfall oder einen Schaden bemerkt, meldet diesen unverzüglich __(5)__ zuständigen Schichtleiter.",
       "3. Rauchen und Pausen",
       "Das Rauchen ist auf dem gesamten Gelände __(6)__. Ausgenommen sind nur die gekennzeichneten Raucherbereiche, die sich hinter Halle zwei und neben dem Parkplatz befinden. Pausen werden in den dafür vorgesehenen Räumen verbracht, __(7)__ in der Kantine oder im Aufenthaltsraum. Speisen und Getränke dürfen __(8)__ an den Maschinen noch in den Lagerräumen verzehrt werden.",
       "4. Ordnung und Sauberkeit",
       "Jeder Mitarbeiter ist für die Ordnung an seinem Arbeitsplatz selbst __(9)__. Abfälle sind nach Wertstoffen getrennt in den entsprechenden Behältern zu __(10)__. Verstöße gegen diese Hausordnung können arbeitsrechtliche Folgen haben. Fragen zur Hausordnung beantwortet Ihnen gern die Abteilung Arbeitssicherheit."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "werden",
        "wird",
        "stets",
        "müssen",
        "muss",
        "bleiben",
        "dem",
        "den",
        "untersagt",
        "beispielsweise",
        "weder",
        "entweder",
        "verantwortlich",
        "Verantwortung",
        "entsorgen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Besucher\" und „Sicherheitsschuhe und Gehörschutz\" sind Plural („werden\", „müssen\"); „jemandem etwas melden\" verlangt Dativ („dem\"). Zu „noch\" gehört „weder\"."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "werden",
        "wird",
        "stets",
        "müssen",
        "muss",
        "bleiben",
        "dem",
        "den",
        "untersagt",
        "beispielsweise",
        "weder",
        "entweder",
        "verantwortlich",
        "Verantwortung",
        "entsorgen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „stets\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "werden",
        "wird",
        "stets",
        "müssen",
        "muss",
        "bleiben",
        "dem",
        "den",
        "untersagt",
        "beispielsweise",
        "weder",
        "entweder",
        "verantwortlich",
        "Verantwortung",
        "entsorgen"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „müssen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "werden",
        "wird",
        "stets",
        "müssen",
        "muss",
        "bleiben",
        "dem",
        "den",
        "untersagt",
        "beispielsweise",
        "weder",
        "entweder",
        "verantwortlich",
        "Verantwortung",
        "entsorgen"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „bleiben\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "werden",
        "wird",
        "stets",
        "müssen",
        "muss",
        "bleiben",
        "dem",
        "den",
        "untersagt",
        "beispielsweise",
        "weder",
        "entweder",
        "verantwortlich",
        "Verantwortung",
        "entsorgen"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „dem\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "werden",
        "wird",
        "stets",
        "müssen",
        "muss",
        "bleiben",
        "dem",
        "den",
        "untersagt",
        "beispielsweise",
        "weder",
        "entweder",
        "verantwortlich",
        "Verantwortung",
        "entsorgen"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „untersagt\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "werden",
        "wird",
        "stets",
        "müssen",
        "muss",
        "bleiben",
        "dem",
        "den",
        "untersagt",
        "beispielsweise",
        "weder",
        "entweder",
        "verantwortlich",
        "Verantwortung",
        "entsorgen"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „beispielsweise\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "werden",
        "wird",
        "stets",
        "müssen",
        "muss",
        "bleiben",
        "dem",
        "den",
        "untersagt",
        "beispielsweise",
        "weder",
        "entweder",
        "verantwortlich",
        "Verantwortung",
        "entsorgen"
       ],
       "loesung": 10,
       "fest": true,
       "erklaerung": "Richtig ist „weder\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "werden",
        "wird",
        "stets",
        "müssen",
        "muss",
        "bleiben",
        "dem",
        "den",
        "untersagt",
        "beispielsweise",
        "weder",
        "entweder",
        "verantwortlich",
        "Verantwortung",
        "entsorgen"
       ],
       "loesung": 12,
       "fest": true,
       "erklaerung": "Richtig ist „verantwortlich\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "werden",
        "wird",
        "stets",
        "müssen",
        "muss",
        "bleiben",
        "dem",
        "den",
        "untersagt",
        "beispielsweise",
        "weder",
        "entweder",
        "verantwortlich",
        "Verantwortung",
        "entsorgen"
       ],
       "loesung": 14,
       "fest": true,
       "erklaerung": "Richtig ist „entsorgen\". Jedes Wort passt nur einmal."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb2bll1",
   "titel": "Prüfungslauf 1",
   "minuten": 90,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "text": {
      "sorte": "email",
      "quelle": "Interne E-Mail",
      "titel": "Kürzung des Abteilungsbudgets im zweiten Halbjahr",
      "zeilen": [
       "Von: Dr. Elena Wagner, Leiterin Marketing — An: Team Marketing",
       "Liebes Team,",
       "in der Sitzung der Geschäftsleitung am Montag wurde beschlossen, die Budgets aller Abteilungen für das zweite Halbjahr zu kürzen. Grund ist der deutliche Umsatzrückgang im Exportgeschäft, vor allem in Skandinavien. Für uns im Marketing bedeutet das eine Kürzung um 18 Prozent. Das ist schmerzhaft, aber weniger als zunächst befürchtet: Im ersten Entwurf war noch von einem Viertel die Rede.",
       "Ich habe mir in den letzten Tagen alle geplanten Maßnahmen angesehen. Die Teilnahme an der Fachmesse in Hannover bleibt, weil dort traditionell die meisten Neukunden auf uns aufmerksam werden. Allerdings werden wir einen kleineren Stand mieten und mit vier statt sechs Personen fahren. Die geplante Imagekampagne im Fernsehen streichen wir dagegen vollständig. Stattdessen investieren wir einen Teil des Geldes in Online-Werbung, deren Wirkung wir besser messen können.",
       "Auch die Zusammenarbeit mit externen Agenturen müssen wir einschränken. Die Gestaltung des neuen Produktkatalogs übernehmen wir deshalb selbst. Jana und Piotr haben sich bereit erklärt, das Projekt zu leiten. Wer dabei mithelfen kann, meldet sich bitte bei den beiden. Der Erscheinungstermin verschiebt sich dadurch von September auf Oktober.",
       "Was nicht betroffen ist: Eure Weiterbildungen, die bereits genehmigt sind, finden wie geplant statt. Neue Anträge kann ich allerdings bis Jahresende nur noch in Ausnahmefällen bewilligen. Auch die Stelle von Frau Schuster, die im Juli in Rente geht, wird nachbesetzt. Darauf habe ich in der Sitzung ausdrücklich bestanden.",
       "Ich möchte die Einzelheiten gern mit euch gemeinsam besprechen und habe dafür am Freitag eine Stunde nach der Teamrunde reserviert. Wenn ihr Ideen habt, wo wir sonst noch sparen können, ohne an Wirkung zu verlieren, bringt sie bitte mit.",
       "Herzliche Grüße, Elena"
      ]
     },
     "aufgaben": [
      {
       "frage": "Warum werden die Budgets gekürzt?",
       "opt": [
        "Weil im Ausland weniger verkauft wurde.",
        "Weil die Marketingkosten zu stark gestiegen sind.",
        "Weil ein Viertel der Kunden abgesprungen ist."
       ],
       "loesung": 0,
       "stelle": "der deutliche Umsatzrückgang im Exportgeschäft",
       "erklaerung": "Exportgeschäft heißt Verkauf ins Ausland; „ein Viertel“ bezieht sich auf den ersten Kürzungsentwurf."
      },
      {
       "frage": "Was passiert mit der Messe in Hannover?",
       "opt": [
        "Die Firma nimmt in diesem Jahr nicht teil.",
        "Die Firma ist dort mit weniger Aufwand vertreten.",
        "Sechs Mitarbeiter betreuen einen kleineren Stand."
       ],
       "loesung": 1,
       "stelle": "einen kleineren Stand mieten und mit vier statt sechs Personen",
       "erklaerung": "Die Messe bleibt, aber mit kleinerem Stand und nur vier Personen."
      },
      {
       "frage": "Was gilt für die Fernsehwerbung?",
       "opt": [
        "Sie wird gekürzt und durch Online-Werbung ergänzt.",
        "Sie wird auf das nächste Jahr verschoben.",
        "Sie fällt ganz weg."
       ],
       "loesung": 2,
       "stelle": "Die geplante Imagekampagne im Fernsehen streichen wir dagegen vollständig",
       "erklaerung": "„Vollständig streichen“ bedeutet, dass nichts davon übrig bleibt."
      },
      {
       "frage": "Was ändert sich beim Produktkatalog?",
       "opt": [
        "Eine Agentur gestaltet ihn günstiger als geplant.",
        "Das Team gestaltet ihn selbst, er erscheint später.",
        "Jana und Piotr gestalten ihn allein bis September."
       ],
       "loesung": 1,
       "stelle": "Die Gestaltung des neuen Produktkatalogs übernehmen wir deshalb selbst",
       "erklaerung": "Das Team macht ihn selbst, Hilfe ist erwünscht, und er erscheint erst im Oktober."
      },
      {
       "frage": "Was bleibt trotz der Kürzung unverändert?",
       "opt": [
        "Bereits genehmigte Weiterbildungen finden statt.",
        "Neue Anträge auf Weiterbildung werden normal bewilligt.",
        "Frau Schuster bleibt über Juli hinaus im Team."
       ],
       "loesung": 0,
       "stelle": "die bereits genehmigt sind, finden wie geplant statt",
       "erklaerung": "Neue Anträge gibt es nur noch in Ausnahmefällen; Frau Schusters Stelle wird nachbesetzt."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "seite",
      "quelle": "Kursprogramm des Bildungszentrums Weidenau",
      "titel": "Kurse für Betriebe im Sanitär- und Heizungshandwerk",
      "zeilen": [
       "Alle Kurse finden im Schulungszentrum Weidenau statt. Mitgliedsbetriebe der Innung erhalten 20 Prozent Ermäßigung. Bei einer Abmeldung später als eine Woche vor Kursbeginn wird die volle Gebühr fällig.",
       "Kurs 1 — Wärmepumpen in Bestandsgebäuden. Zielgruppe: Gesellen und Meister im Heizungsbau. Termin: 10. bis 12. Juni. Dauer: drei Tage. Voraussetzung: abgeschlossene Ausbildung im Sanitär- und Heizungshandwerk. Kosten: 690 Euro.",
       "Kurs 2 — Kundengespräche beim Hausbesuch. Zielgruppe: Monteure und Kundendiensttechniker. Termin: 17. Juni, 8 bis 16 Uhr. Dauer: ein Tag. Voraussetzung: keine. Kosten: 210 Euro.",
       "Kurs 3 — Förderanträge richtig stellen. Zielgruppe: Büroangestellte und Inhaber kleiner Betriebe. Termin: 24. Juni, 17 bis 20 Uhr. Dauer: ein Abend. Voraussetzung: keine. Kosten: 95 Euro.",
       "Kurs 4 — Trinkwasserhygiene mit Zertifikat. Zielgruppe: Fachkräfte, die Trinkwasseranlagen planen oder warten. Termin: 1. und 2. Juli. Dauer: zwei Tage mit schriftlicher Prüfung. Voraussetzung: mindestens zwei Jahre Berufserfahrung nach der Ausbildung. Kosten: 540 Euro, Prüfungsgebühr zusätzlich 80 Euro."
      ]
     },
     "aufgaben": [
      {
       "frage": "Ein Auszubildender im dritten Lehrjahr möchte mehr über Wärmepumpen lernen. Was gilt?",
       "opt": [
        "Er kann Kurs 1 sofort besuchen.",
        "Er kann Kurs 1 erst nach der Ausbildung besuchen.",
        "Für ihn kommt nur Kurs 4 infrage."
       ],
       "loesung": 1,
       "stelle": "abgeschlossene Ausbildung im Sanitär- und Heizungshandwerk",
       "erklaerung": "Kurs 1 setzt eine abgeschlossene Ausbildung voraus; Kurs 4 sogar zwei Jahre Erfahrung danach."
      },
      {
       "frage": "Eine Büroangestellte arbeitet tagsüber und hat keine Vorkenntnisse. Welcher Kurs passt?",
       "opt": [
        "Nur Kurs 3",
        "Kurs 2 und 3",
        "Kurs 3 und 4"
       ],
       "loesung": 0,
       "stelle": "Termin: 24. Juni, 17 bis 20 Uhr",
       "erklaerung": "Nur Kurs 3 ist abends und für Büroangestellte; Kurs 2 ist tagsüber und für Monteure."
      },
      {
       "frage": "Wie viel kostet Kurs 4 mit Prüfung für einen Betrieb, der kein Mitglied der Innung ist?",
       "opt": [
        "540 Euro",
        "460 Euro",
        "620 Euro"
       ],
       "loesung": 2,
       "stelle": "Prüfungsgebühr zusätzlich 80 Euro",
       "erklaerung": "540 Euro plus 80 Euro Prüfungsgebühr; die Ermäßigung gilt nur für Mitglieder."
      },
      {
       "frage": "Ein Monteur meldet sich drei Tage vor Kurs 2 ab. Was passiert?",
       "opt": [
        "Er bekommt die Gebühr zurück.",
        "Der Betrieb muss die ganze Gebühr bezahlen.",
        "Der Betrieb zahlt die Hälfte."
       ],
       "loesung": 1,
       "stelle": "wird die volle Gebühr fällig",
       "erklaerung": "Drei Tage sind weniger als eine Woche vor Kursbeginn."
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "text": {
      "sorte": "email",
      "quelle": "Interne E-Mail",
      "titel": "Besuch unseres neuen Vertriebspartners vom 6. bis 8. Mai",
      "zeilen": [
       "Von: Ralf Steiner, Exportleitung — An: Empfang, Produktionsleitung, Anwendungstechnik",
       "Hallo zusammen,",
       "vom 6. bis 8. Mai besucht uns eine Delegation unseres neuen Vertriebspartners aus Ho-Chi-Minh-Stadt. Die Firma vertreibt Verpackungsmaschinen in ganz Südostasien und möchte unsere Etikettiergeräte ab dem kommenden Jahr in ihr Programm aufnehmen. Der Besuch ist für uns deshalb sehr wichtig. Zur Gruppe gehören der Geschäftsführer, Herr Nguyen, zwei Techniker und eine Dolmetscherin.",
       "Die Gäste landen am Montagabend in Frankfurt und werden von unserem Fahrdienst abgeholt. Am Dienstag um 9 Uhr empfangen wir sie hier im Haus. Liebes Empfangsteam, bitte haltet Besucherausweise für vier Personen bereit und bestellt für die Mittagessen ein Menü mit mehreren Gerichten, darunter auch ein vegetarisches, da einer der Techniker kein Fleisch isst.",
       "Den Dienstag verbringen die Gäste vor allem in der Produktion. Herr Wolff, bitte plant eine Führung von etwa zwei Stunden ein, bei der die Endmontage der Etikettierer im Mittelpunkt steht. Fotografieren ist in der Halle wie immer nicht erlaubt. Ich habe das den Gästen bereits mitgeteilt, bitte weist aber vor Beginn der Führung noch einmal freundlich darauf hin.",
       "Am Mittwoch zeigt die Anwendungstechnik die Geräte im Vorführraum. Die Techniker möchten vor allem sehen, wie sich die Maschinen an verschiedene Flaschenformen anpassen lassen. Frau Hoang aus unserem Team spricht Vietnamesisch und wird an diesem Tag zusätzlich dabei sein, obwohl die Dolmetscherin anwesend ist. Am Donnerstagvormittag führen wir in kleiner Runde die Vertragsgespräche; dafür brauche ich niemanden aus euren Abteilungen.",
       "Am Dienstagabend gibt es ein gemeinsames Abendessen im Restaurant Lindenkrug. Wer daran teilnehmen möchte, gibt mir bitte bis Ende der Woche Bescheid; wir haben Platz für acht weitere Personen.",
       "Viele Grüße, Ralf Steiner"
      ]
     },
     "aufgaben": [
      {
       "frage": "Warum ist der Besuch für die Firma wichtig?",
       "opt": [
        "Die Gäste wollen die Etikettiergeräte künftig verkaufen.",
        "Die Gäste wollen eine eigene Maschinenfabrik gründen.",
        "Die Firma will Verpackungsmaschinen aus Südostasien kaufen."
       ],
       "loesung": 0,
       "stelle": "möchte unsere Etikettiergeräte ab dem kommenden Jahr in ihr Programm aufnehmen",
       "erklaerung": "„In ihr Programm aufnehmen“ heißt, dass der Partner die Geräte verkaufen will."
      },
      {
       "frage": "Was soll der Empfang vorbereiten?",
       "opt": [
        "Den Transport vom Flughafen.",
        "Ausweise und ein Mittagessen mit vegetarischer Auswahl.",
        "Ein Abendessen für vier Personen."
       ],
       "loesung": 1,
       "stelle": "haltet Besucherausweise für vier Personen bereit",
       "erklaerung": "Den Transport macht der Fahrdienst, das Abendessen organisiert Herr Steiner."
      },
      {
       "frage": "Was soll Herr Wolff vor der Führung tun?",
       "opt": [
        "Eine Erlaubnis zum Fotografieren einholen.",
        "Den Gästen die Regeln der Halle zum ersten Mal erklären.",
        "Noch einmal daran erinnern, dass man nicht fotografieren darf."
       ],
       "loesung": 2,
       "stelle": "bitte weist aber vor Beginn der Führung noch einmal freundlich darauf hin",
       "erklaerung": "Die Gäste wissen es schon; Herr Wolff soll nur noch einmal daran erinnern."
      },
      {
       "frage": "Warum ist Frau Hoang am Mittwoch dabei?",
       "opt": [
        "Weil die Dolmetscherin an diesem Tag fehlt.",
        "Weil sie zusätzlich Vietnamesisch sprechen kann.",
        "Weil sie die Vertragsgespräche leitet."
       ],
       "loesung": 1,
       "stelle": "spricht Vietnamesisch und wird an diesem Tag zusätzlich dabei sein",
       "erklaerung": "Die Dolmetscherin ist anwesend; die Vertragsgespräche sind erst am Donnerstag."
      },
      {
       "frage": "Was gilt für das Abendessen?",
       "opt": [
        "Alle Empfänger der E-Mail nehmen daran teil.",
        "Es findet nach den Vertragsgesprächen am Donnerstag statt.",
        "Wer teilnehmen möchte, soll sich bis Ende der Woche melden."
       ],
       "loesung": 2,
       "stelle": "gibt mir bitte bis Ende der Woche Bescheid",
       "erklaerung": "Die Teilnahme ist freiwillig, und das Essen ist schon am Dienstagabend."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "seite",
      "quelle": "Dienstvereinbarung",
      "titel": "Dienstvereinbarung zum Arbeiten im Homeoffice",
      "zeilen": [
       "Die folgende Vereinbarung regelt das Arbeiten von zu Hause für alle Beschäftigten der Verwaltung der Stadtwerke Talheim. Sie tritt am ersten Januar in Kraft und ersetzt alle bisherigen Einzelabsprachen. Ein Anspruch auf Homeoffice besteht nur für Tätigkeiten, die sich ohne Nachteile für den Betrieb von zu Hause erledigen lassen.",
       "1. Umfang: Mitarbeiter in Vollzeit können bis zu zwei Tage pro Woche im Homeoffice arbeiten. Für Teilzeitkräfte gilt ein Tag pro Woche. Nicht genutzte Tage können nicht auf die folgende Woche übertragen werden. Der Dienstag ist für alle Teams ein fester Bürotag, an dem Besprechungen vor Ort stattfinden.",
       "2. Antrag: Wer im Homeoffice arbeiten möchte, stellt einen schriftlichen Antrag bei der Führungskraft. Diese kann den Antrag nur aus betrieblichen Gründen ablehnen, zum Beispiel wenn die Erreichbarkeit für Bürger nicht gesichert ist. Eine Ablehnung ist schriftlich zu begründen.",
       "3. Erreichbarkeit: Im Homeoffice gelten dieselben Kernzeiten wie im Büro, also von neun bis fünfzehn Uhr. In dieser Zeit müssen Sie telefonisch und per Chat erreichbar sein. Außerhalb der Kernzeit wird keine Erreichbarkeit erwartet.",
       "4. Ausstattung: Die Stadtwerke stellen einen Laptop, ein Headset und auf Wunsch einen zweiten Bildschirm zur Verfügung. Kosten für Internet und Strom werden nicht erstattet. Private Geräte dürfen für dienstliche Aufgaben nicht genutzt werden.",
       "5. Datenschutz: Der Arbeitsplatz zu Hause muss so eingerichtet sein, dass Unbefugte keinen Einblick in dienstliche Unterlagen haben. Ausdrucke sind möglichst zu vermeiden und dürfen nur im Büro vernichtet werden.",
       "6. Beendigung: Beide Seiten können die Vereinbarung mit einer Frist von einem Monat zum Monatsende kündigen. Bei wiederholten Verstößen gegen die Erreichbarkeit kann die Führungskraft das Homeoffice ohne Frist beenden."
      ]
     },
     "aufgaben": [
      {
       "frage": "Eine Mitarbeiterin in Teilzeit …",
       "opt": [
        "kann einen Tag pro Woche zu Hause arbeiten.",
        "kann bis zu zwei Tage pro Woche zu Hause arbeiten.",
        "kann nicht genutzte Tage in die nächste Woche mitnehmen."
       ],
       "loesung": 0,
       "stelle": "Für Teilzeitkräfte gilt ein Tag pro Woche.",
       "erklaerung": "Zwei Tage gelten nur für Vollzeit; Übertragen ist ausdrücklich nicht möglich."
      },
      {
       "frage": "Die Führungskraft darf einen Antrag ablehnen, …",
       "opt": [
        "ohne einen Grund zu nennen.",
        "wenn die Bürger den Mitarbeiter dann nicht zuverlässig erreichen können.",
        "wenn der Mitarbeiter erst kurz bei den Stadtwerken arbeitet."
       ],
       "loesung": 1,
       "stelle": "wenn die Erreichbarkeit für Bürger nicht gesichert ist",
       "erklaerung": "Nur betriebliche Gründe zählen, und eine Ablehnung muss schriftlich begründet werden."
      },
      {
       "frage": "Was stellen die Stadtwerke zur Verfügung?",
       "opt": [
        "Einen Zuschuss zu den Stromkosten.",
        "Die Kosten für den Internetanschluss.",
        "Einen zusätzlichen Bildschirm, wenn man ihn möchte."
       ],
       "loesung": 2,
       "stelle": "auf Wunsch einen zweiten Bildschirm zur Verfügung",
       "erklaerung": "Internet und Strom werden ausdrücklich nicht erstattet."
      },
      {
       "frage": "Wann kann das Homeoffice ohne Frist beendet werden?",
       "opt": [
        "Wenn jemand mehrfach nicht erreichbar war.",
        "Wenn ein Mitarbeiter es zum Monatsende kündigt.",
        "Wenn der Arbeitsplatz zu Hause zu klein ist."
       ],
       "loesung": 0,
       "stelle": "Bei wiederholten Verstößen gegen die Erreichbarkeit",
       "erklaerung": "Die normale Kündigung hat eine Frist von einem Monat; ohne Frist nur bei wiederholten Verstößen."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu Mitteilung 1?",
       "opt": [
        "Preiserhöhung zum ersten April",
        "Lieferverzögerungen bei Rohstoffen",
        "Rabattaktion für Stammkunden"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung der Geschäftsleitung",
        "titel": "Mitteilung 1",
        "zeilen": [
         "Aufgrund deutlich gestiegener Rohstoffpreise passen wir zum ersten April unsere Listenpreise um durchschnittlich vier Prozent an.",
         "Bereits bestätigte Aufträge werden noch zu den alten Preisen geliefert, auch wenn die Lieferung erst nach dem Stichtag erfolgt.",
         "Der Vertrieb wird gebeten, Stammkunden bis Ende Februar persönlich zu informieren und die neue Preisliste mitzuschicken."
        ]
       },
       "stelle": "unsere Listenpreise um durchschnittlich vier Prozent an",
       "erklaerung": "Rohstoffe sind nur der Grund, und Stammkunden werden informiert, nicht mit Rabatt bedacht."
      },
      {
       "frage": "Welcher Betreff passt zu Mitteilung 2?",
       "opt": [
        "Neuer Betriebsarzt ab sofort",
        "Zuschuss zum Fitnessstudio",
        "Gesundheitstag im Mai"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung der Personalabteilung",
        "titel": "Mitteilung 2",
        "zeilen": [
         "Auch in diesem Jahr möchten wir die Gesundheit unserer Mitarbeiter fördern und Bewegung im Alltag stärker unterstützen.",
         "Ab sofort übernimmt das Unternehmen deshalb die Hälfte der Kosten für eine Mitgliedschaft in einem Fitnessstudio, höchstens jedoch zwanzig Euro im Monat.",
         "Den Antrag und eine Liste der Partnerstudios finden Sie im Intranet unter „Gesundheit“."
        ]
       },
       "stelle": "die Hälfte der Kosten für eine Mitgliedschaft in einem Fitnessstudio",
       "erklaerung": "„Gesundheit“ ist nur der Rahmen; konkret geht es um die Beteiligung an den Studiokosten."
      }
     ]
    },
    {
     "nr": 6,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Geschäftsbrief",
      "titel": "Einladung zur Hausmesse",
      "zeilen": [
       "Einladung zu unserer Hausmesse am 15. Mai",
       "Sehr geehrter Herr Marković,",
       "[[1:anlässlich]] unseres 25-jährigen Firmenjubiläums laden wir Sie herzlich zu unserer Hausmesse ein. Sie findet am 15. Mai von 10 bis 17 Uhr [[2:auf]] unserem Werksgelände in Lohfelden statt.",
       "Wir stellen Ihnen dort unsere neuen Verpackungsmaschinen vor, [[3:deren]] deutlich weniger Energie verbrauchen als die Vorgängermodelle. Außerdem können Sie sich [[4:von]] unseren Technikern individuell beraten lassen und einen Blick hinter die [[5:Kulisse]] unserer Produktion werfen. Für das leibliche Wohl ist selbstverständlich [[6:gesorgt]].",
       "Um 14 Uhr hält unser Geschäftsführer [[7:ein]] kurzen Vortrag über die Entwicklung des Unternehmens und die Pläne für die kommenden Jahre. Im Anschluss daran haben Sie Gelegenheit, ihm und unserem Vertriebsteam Ihre Fragen zu stellen.",
       "Damit wir besser planen können, bitten wir Sie [[8:für]] eine kurze Rückmeldung bis zum 30. April. Geben Sie dabei bitte auch an, wie viele Personen Sie [[9:begleitet]]. Kostenlose Parkplätze stehen direkt vor dem Haupteingang zur Verfügung.",
       "Wir freuen uns schon jetzt sehr [[10:über]] Ihren Besuch.",
       "Mit freundlichen Grüßen",
       "Anja Pfeiffer",
       "Vertriebsleitung, Pfeiffer Verpackungstechnik GmbH"
      ]
     },
     "aufgaben": [
      {
       "frage": "Stelle 1: Ist „anlässlich\" richtig — oder b oder c?",
       "luecke": 1,
       "opt": [
        "anlässlich",
        "trotz",
        "statt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„anlässlich\" + Genitiv nennt den Grund einer Feier; „trotz\" und „statt\" ergeben keinen Sinn."
      },
      {
       "frage": "Stelle 2: Ist „auf\" richtig — oder b oder c?",
       "luecke": 2,
       "opt": [
        "auf",
        "an",
        "über"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Auf einer Fläche: „auf dem Werksgelände\" (Dativ, Ort)."
      },
      {
       "frage": "Stelle 3: Ist „deren\" richtig — oder b oder c?",
       "luecke": 3,
       "opt": [
        "deren",
        "die",
        "denen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Das Relativpronomen ist Subjekt („… verbrauchen\"), Nominativ Plural: „die\"."
      },
      {
       "frage": "Stelle 4: Ist „von\" richtig — oder b oder c?",
       "luecke": 4,
       "opt": [
        "von",
        "mit",
        "bei"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sich von jemandem beraten lassen\": Der Handelnde steht mit „von\"."
      },
      {
       "frage": "Stelle 5: Ist „Kulisse\" richtig — oder b oder c?",
       "luecke": 5,
       "opt": [
        "Kulisse",
        "Kulissen",
        "Kulissens"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Wendung „einen Blick hinter die Kulissen werfen\" – immer Plural."
      },
      {
       "frage": "Stelle 6: Ist „gesorgt\" richtig — oder b oder c?",
       "luecke": 6,
       "opt": [
        "gesorgt",
        "sorgen",
        "gesorgte"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Zustandspassiv „ist gesorgt\" mit Partizip II; feste Wendung „für das leibliche Wohl ist gesorgt\"."
      },
      {
       "frage": "Stelle 7: Ist „ein\" richtig — oder b oder c?",
       "luecke": 7,
       "opt": [
        "ein",
        "einen",
        "einem"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„einen Vortrag halten\": Akkusativ maskulin, also „einen kurzen Vortrag\"."
      },
      {
       "frage": "Stelle 8: Ist „für\" richtig — oder b oder c?",
       "luecke": 8,
       "opt": [
        "für",
        "um",
        "nach"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„jemanden um etwas bitten\" – die Präposition ist „um\"."
      },
      {
       "frage": "Stelle 9: Ist „begleitet\" richtig — oder b oder c?",
       "luecke": 9,
       "opt": [
        "begleitet",
        "begleiten",
        "begleitest"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Subjekt ist „wie viele Personen\" (Plural), „Sie\" ist Objekt: „begleiten\"."
      },
      {
       "frage": "Stelle 10: Ist „über\" richtig — oder b oder c?",
       "luecke": 10,
       "opt": [
        "über",
        "auf",
        "an"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Der Besuch liegt in der Zukunft: „sich freuen auf\"; „über\" für schon Geschehenes."
      }
     ]
    },
    {
     "nr": 7,
     "art": "textwahl",
     "text": {
      "sorte": "seite",
      "quelle": "Auszug",
      "titel": "Datenschutzhinweis für Bewerber",
      "zeilen": [
       "Datenschutzhinweise für Bewerber",
       "Wir freuen uns über Ihr Interesse an einer Tätigkeit in unserem Unternehmen. Im Folgenden informieren wir Sie darüber, __(1)__ wir mit Ihren personenbezogenen Daten umgehen.",
       "Zweck der Verarbeitung",
       "Wir verarbeiten Ihre Daten ausschließlich __(2)__ Durchführung des Bewerbungsverfahrens. Eine Weitergabe an Dritte findet nicht statt, es __(3)__ denn, Sie haben ausdrücklich eingewilligt. Innerhalb des Unternehmens erhalten nur die Personalabteilung und die zuständige Fachabteilung Zugriff auf Ihre Unterlagen.",
       "Speicherdauer",
       "Kommt kein Arbeitsverhältnis __(4)__, löschen wir Ihre Unterlagen spätestens sechs Monate nach Abschluss des Verfahrens. Möchten Sie in unseren Bewerberpool aufgenommen werden, benötigen wir dafür Ihre schriftliche __(5)__. In diesem Fall speichern wir Ihre Daten für __(6)__ zwei Jahre.",
       "Ihre Rechte",
       "Sie haben jederzeit das Recht, Auskunft über die __(7)__ Ihrer Person gespeicherten Daten zu verlangen. Außerdem können Sie die Berichtigung falscher Daten oder die Löschung Ihrer Daten __(8)__. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft __(9)__. Bei Fragen wenden Sie sich bitte an unseren Datenschutzbeauftragten, __(10)__ Kontaktdaten Sie im Impressum unserer Internetseite finden. Außerdem haben Sie das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "wie",
        "was",
        "zur",
        "zum",
        "sei",
        "ist",
        "zustande",
        "Einwilligung",
        "zustimmen",
        "maximal",
        "zu",
        "beantragen",
        "widerrufen",
        "dessen",
        "deren"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„die Durchführung\" ist feminin („zur\"), „der Datenschutzbeauftragte\" maskulin („dessen\"). Feste Wendungen: „es sei denn\", „zustande kommen\", „eine Einwilligung widerrufen\"."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "wie",
        "was",
        "zur",
        "zum",
        "sei",
        "ist",
        "zustande",
        "Einwilligung",
        "zustimmen",
        "maximal",
        "zu",
        "beantragen",
        "widerrufen",
        "dessen",
        "deren"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „zur\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "wie",
        "was",
        "zur",
        "zum",
        "sei",
        "ist",
        "zustande",
        "Einwilligung",
        "zustimmen",
        "maximal",
        "zu",
        "beantragen",
        "widerrufen",
        "dessen",
        "deren"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „sei\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "wie",
        "was",
        "zur",
        "zum",
        "sei",
        "ist",
        "zustande",
        "Einwilligung",
        "zustimmen",
        "maximal",
        "zu",
        "beantragen",
        "widerrufen",
        "dessen",
        "deren"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „zustande\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "wie",
        "was",
        "zur",
        "zum",
        "sei",
        "ist",
        "zustande",
        "Einwilligung",
        "zustimmen",
        "maximal",
        "zu",
        "beantragen",
        "widerrufen",
        "dessen",
        "deren"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Richtig ist „Einwilligung\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "wie",
        "was",
        "zur",
        "zum",
        "sei",
        "ist",
        "zustande",
        "Einwilligung",
        "zustimmen",
        "maximal",
        "zu",
        "beantragen",
        "widerrufen",
        "dessen",
        "deren"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „maximal\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "wie",
        "was",
        "zur",
        "zum",
        "sei",
        "ist",
        "zustande",
        "Einwilligung",
        "zustimmen",
        "maximal",
        "zu",
        "beantragen",
        "widerrufen",
        "dessen",
        "deren"
       ],
       "loesung": 10,
       "fest": true,
       "erklaerung": "Richtig ist „zu\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "wie",
        "was",
        "zur",
        "zum",
        "sei",
        "ist",
        "zustande",
        "Einwilligung",
        "zustimmen",
        "maximal",
        "zu",
        "beantragen",
        "widerrufen",
        "dessen",
        "deren"
       ],
       "loesung": 11,
       "fest": true,
       "erklaerung": "Richtig ist „beantragen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "wie",
        "was",
        "zur",
        "zum",
        "sei",
        "ist",
        "zustande",
        "Einwilligung",
        "zustimmen",
        "maximal",
        "zu",
        "beantragen",
        "widerrufen",
        "dessen",
        "deren"
       ],
       "loesung": 12,
       "fest": true,
       "erklaerung": "Richtig ist „widerrufen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "wie",
        "was",
        "zur",
        "zum",
        "sei",
        "ist",
        "zustande",
        "Einwilligung",
        "zustimmen",
        "maximal",
        "zu",
        "beantragen",
        "widerrufen",
        "dessen",
        "deren"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Richtig ist „dessen\". Jedes Wort passt nur einmal."
      }
     ]
    }
   ]
  },
  {
   "id": "tb2bll2",
   "titel": "Prüfungslauf 2",
   "minuten": 90,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "text": {
      "sorte": "email",
      "quelle": "Interne E-Mail",
      "titel": "Qualitätsabweichung bei Dichtungsringen — Sperrung der Charge 2291",
      "zeilen": [
       "Von: Henrik Bauer, Qualitätsmanagement — An: Fertigung Halle 2, Wareneingang, Versand",
       "Hallo zusammen,",
       "bei der Routinekontrolle am Dienstag sind uns bei den Dichtungsringen der Charge 2291 Abweichungen aufgefallen. Bei mehreren Stichproben war der Innendurchmesser um wenige Zehntelmillimeter zu groß. Mit bloßem Auge erkennt man das nicht, im eingebauten Zustand kann es aber dazu führen, dass die Pumpen unter hohem Druck undicht werden. Bisher hat sich noch kein Kunde beschwert, und wir wollen, dass das so bleibt.",
       "Ich habe die gesamte Charge deshalb ab sofort gesperrt. Die betroffenen Kisten sind mit einem roten Aufkleber markiert und stehen im abgetrennten Bereich neben dem Wareneingang. Bitte entnehmt dort auf keinen Fall Material, auch nicht für Muster oder Versuche. Für die laufende Fertigung in Halle 2 stehen noch Ringe aus der vorherigen Charge zur Verfügung, die geprüft und einwandfrei sind. Sie reichen voraussichtlich bis Ende nächster Woche.",
       "Kritischer ist die Frage, ob bereits fehlerhafte Ringe verbaut wurden. Nach den Unterlagen wurden aus Charge 2291 seit dem 3. Juni etwa 300 Ringe entnommen. Die damit gebauten Pumpen sind zum Teil schon ausgeliefert. Ich bitte den Versand, mir bis morgen Mittag eine Liste aller Aufträge zu schicken, in denen Pumpen mit Produktionsdatum ab dem 3. Juni enthalten sind. Pumpen, die noch im Lager stehen, werden nicht verschickt, bis wir sie nachgeprüft haben.",
       "Den Lieferanten habe ich bereits informiert. Er hat zugesagt, bis Freitag einen Prüfbericht zu schicken und bis dahin Ersatzware bereitzustellen. Ob wir diese annehmen oder vorübergehend bei einem anderen Hersteller bestellen, entscheiden wir, wenn der Bericht vorliegt.",
       "Bitte informiert eure Schichten heute noch mündlich. Den schriftlichen Aushang hänge ich morgen früh an die Infotafeln.",
       "Gruß, Henrik Bauer"
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Problem wurde festgestellt?",
       "opt": [
        "Einige Ringe sind sichtbar beschädigt.",
        "Die Ringe sind etwas zu groß und könnten Pumpen undicht machen.",
        "Ein Kunde hat sich über undichte Pumpen beschwert."
       ],
       "loesung": 1,
       "stelle": "der Innendurchmesser um wenige Zehntelmillimeter zu groß",
       "erklaerung": "Der Fehler ist mit bloßem Auge nicht sichtbar, und bisher gibt es keine Beschwerde."
      },
      {
       "frage": "Was gilt für die gesperrten Kisten?",
       "opt": [
        "Man darf sie nur noch für Muster verwenden.",
        "Sie werden sofort an den Lieferanten zurückgeschickt.",
        "Niemand darf daraus Material nehmen."
       ],
       "loesung": 2,
       "stelle": "Bitte entnehmt dort auf keinen Fall Material",
       "erklaerung": "Auch für Muster und Versuche ist die Entnahme ausdrücklich verboten."
      },
      {
       "frage": "Wie geht die Fertigung in Halle 2 weiter?",
       "opt": [
        "Mit geprüften Ringen aus einer älteren Charge.",
        "Sie wird bis zum Prüfbericht unterbrochen.",
        "Mit Ersatzware vom Lieferanten ab Montag."
       ],
       "loesung": 0,
       "stelle": "stehen noch Ringe aus der vorherigen Charge zur Verfügung",
       "erklaerung": "Die vorherige Charge ist geprüft und reicht bis Ende nächster Woche."
      },
      {
       "frage": "Was soll der Versand tun?",
       "opt": [
        "Alle seit dem 3. Juni gelieferten Pumpen zurückholen.",
        "Aufträge mit Pumpen ab einem bestimmten Produktionsdatum auflisten.",
        "Die Pumpen im Lager sofort an die Kunden schicken."
       ],
       "loesung": 1,
       "stelle": "eine Liste aller Aufträge zu schicken",
       "erklaerung": "Gefordert ist zuerst nur eine Liste; Pumpen im Lager bleiben vorerst dort."
      },
      {
       "frage": "Was ist über die weitere Bestellung der Ringe bekannt?",
       "opt": [
        "Man bestellt ab sofort bei einem anderen Hersteller.",
        "Der Lieferant liefert keine Ersatzware mehr.",
        "Die Entscheidung fällt erst nach dem Prüfbericht."
       ],
       "loesung": 2,
       "stelle": "entscheiden wir, wenn der Bericht vorliegt",
       "erklaerung": "Der Lieferant bietet Ersatzware an; ob man sie nimmt, ist noch offen."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "seite",
      "quelle": "Personalentwicklung der Versicherungsgruppe Nordlicht",
      "titel": "Seminarangebot für Innendienst und Vertrieb",
      "zeilen": [
       "Die Anmeldung erfolgt über die Führungskraft im Weiterbildungsportal. Alle Seminare sind für Beschäftigte kostenlos; bei unentschuldigtem Fehlen wird jedoch eine Ausfallgebühr von 100 Euro der Kostenstelle der Abteilung belastet.",
       "Kurs 1 — Präsentieren vor Kunden. Zielgruppe: Außendienstmitarbeiter mit weniger als drei Jahren im Vertrieb. Termin: 8. und 9. September, Präsenz in Hamburg. Dauer: zwei Tage. Voraussetzung: keine. Kosten: keine, die Übernachtung bucht die Firma.",
       "Kurs 2 — Tabellenkalkulation in der Schadensbearbeitung. Zielgruppe: Sachbearbeiter im Innendienst. Termin: 15. September, online, 9 bis 15 Uhr. Dauer: ein Tag. Voraussetzung: Grundkenntnisse in Tabellenkalkulation. Kosten: keine.",
       "Kurs 3 — Führen ohne Vorgesetztenfunktion. Zielgruppe: Projektleiter und Teamkoordinatoren aus allen Bereichen. Termin: 29. September und 13. Oktober, Präsenz in Hamburg. Dauer: zwei einzelne Tage. Voraussetzung: Projektverantwortung seit mindestens sechs Monaten. Kosten: keine.",
       "Kurs 4 — Telefonische Beratung von Privatkunden. Zielgruppe: Mitarbeiter im Kundenservice und im Innendienst. Termin: 6. Oktober, online, 13 bis 17 Uhr. Dauer: ein halber Tag. Voraussetzung: keine. Kosten: keine."
      ]
     },
     "aufgaben": [
      {
       "frage": "Ein Vertriebsmitarbeiter mit fünf Jahren Erfahrung möchte besser präsentieren. Was gilt?",
       "opt": [
        "Kurs 1 passt genau zu ihm.",
        "Kurs 1 ist nicht für ihn gedacht.",
        "Er muss die Übernachtung selbst buchen."
       ],
       "loesung": 1,
       "stelle": "mit weniger als drei Jahren im Vertrieb",
       "erklaerung": "Kurs 1 richtet sich an Einsteiger im Vertrieb; die Übernachtung bucht ohnehin die Firma."
      },
      {
       "frage": "Welche Seminare kann eine Sachbearbeiterin aus dem Innendienst von zu Hause aus besuchen?",
       "opt": [
        "Kurs 2 und 4",
        "Kurs 1 und 2",
        "Kurs 3 und 4"
       ],
       "loesung": 0,
       "stelle": "Termin: 15. September, online",
       "erklaerung": "Kurs 2 und 4 sind online und nennen den Innendienst; Kurs 1 und 3 sind in Hamburg."
      },
      {
       "frage": "Was passiert, wenn jemand ohne Entschuldigung nicht zum Seminar kommt?",
       "opt": [
        "Er muss 100 Euro selbst bezahlen.",
        "Er darf kein weiteres Seminar besuchen.",
        "Seine Abteilung muss 100 Euro tragen."
       ],
       "loesung": 2,
       "stelle": "der Kostenstelle der Abteilung belastet",
       "erklaerung": "Die Gebühr geht an die Abteilung, nicht an die Person."
      },
      {
       "frage": "Eine Teamkoordinatorin leitet seit vier Monaten ihr erstes Projekt. Was gilt für Kurs 3?",
       "opt": [
        "Sie kann ihn schon jetzt besuchen.",
        "Sie erfüllt die Voraussetzung noch nicht.",
        "Sie muss ihn selbst bezahlen."
       ],
       "loesung": 1,
       "stelle": "Projektverantwortung seit mindestens sechs Monaten",
       "erklaerung": "Vier Monate sind weniger als die verlangten sechs."
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "text": {
      "sorte": "email",
      "quelle": "Interne E-Mail",
      "titel": "Neue Gleitzeitregelung ab 1. Juli",
      "zeilen": [
       "Von: Petra Lorenz, Personalabteilung — An: alle Mitarbeiter der Verwaltung",
       "Guten Tag zusammen,",
       "nach langen Gesprächen haben sich Geschäftsleitung und Betriebsrat auf eine neue Arbeitszeitregelung für die Verwaltung geeinigt. Sie gilt ab dem 1. Juli und ersetzt die bisherigen festen Arbeitszeiten von 8 bis 16.30 Uhr. Für die Mitarbeiter in Produktion und Lager ändert sich vorerst nichts; für diese Bereiche wird eine eigene Lösung erarbeitet.",
       "Künftig gilt eine Kernarbeitszeit von 9.30 bis 14 Uhr. In dieser Zeit sollen alle anwesend oder im Homeoffice erreichbar sein. Davor und danach könnt ihr Beginn und Ende selbst bestimmen, frühestens ab 6.30 Uhr und spätestens bis 19 Uhr. Freitags endet die Kernarbeitszeit bereits um 12 Uhr. Wichtig ist, dass jede Abteilung zwischen 8 und 17 Uhr telefonisch erreichbar bleibt. Wie ihr das organisiert, sprecht ihr bitte im Team ab.",
       "Plus- und Minusstunden werden auf einem Zeitkonto gesammelt. Ihr dürft bis zu 40 Plusstunden und bis zu 10 Minusstunden ansammeln. Plusstunden können in Absprache mit der Teamleitung als ganze oder halbe freie Tage genommen werden, höchstens zwei Tage im Monat. Was über 40 Stunden hinausgeht, verfällt am Monatsende, es sei denn, die Überstunden wurden vorher von der Abteilungsleitung angeordnet.",
       "Die Zeiterfassung erfolgt ab Juli nicht mehr auf Papier, sondern über die App auf dem Diensthandy oder über das Terminal am Haupteingang. Eine kurze Einführung gibt es am 24. Juni in der Kantine, zweimal hintereinander um 11 und um 13 Uhr. Die Teilnahme ist freiwillig, wir empfehlen sie aber allen, die noch nicht mit der App gearbeitet haben.",
       "Die Regelung gilt zunächst für ein Jahr. Danach werten wir gemeinsam mit dem Betriebsrat aus, ob sie sich bewährt hat. Eure Rückmeldungen nehmen wir jederzeit gern entgegen.",
       "Freundliche Grüße, Petra Lorenz"
      ]
     },
     "aufgaben": [
      {
       "frage": "Für wen gilt die neue Regelung?",
       "opt": [
        "Für alle Beschäftigten des Unternehmens.",
        "Nur für die Verwaltung.",
        "Zunächst für Produktion und Lager."
       ],
       "loesung": 1,
       "stelle": "Für die Mitarbeiter in Produktion und Lager ändert sich vorerst nichts",
       "erklaerung": "Produktion und Lager bekommen später eine eigene Lösung."
      },
      {
       "frage": "Was müssen die Teams selbst organisieren?",
       "opt": [
        "Dass die Abteilung zwischen 8 und 17 Uhr telefonisch erreichbar ist.",
        "Wann die Kernarbeitszeit beginnt und endet.",
        "Wer freitags bis 19 Uhr arbeitet."
       ],
       "loesung": 0,
       "stelle": "Wie ihr das organisiert, sprecht ihr bitte im Team ab",
       "erklaerung": "Die Kernarbeitszeit ist festgelegt; offen ist nur, wie die Erreichbarkeit gesichert wird."
      },
      {
       "frage": "Was passiert mit Plusstunden über 40 Stunden?",
       "opt": [
        "Sie werden automatisch ausgezahlt.",
        "Sie können als zusätzliche freie Tage genommen werden.",
        "Sie verfallen, wenn sie nicht vorher angeordnet wurden."
       ],
       "loesung": 2,
       "stelle": "Was über 40 Stunden hinausgeht, verfällt am Monatsende",
       "erklaerung": "Nur angeordnete Überstunden über 40 bleiben erhalten; von Auszahlung ist keine Rede."
      },
      {
       "frage": "Was gilt für die Einführung in die neue Zeiterfassung?",
       "opt": [
        "Alle Mitarbeiter müssen daran teilnehmen.",
        "Sie wird zweimal angeboten und ist freiwillig.",
        "Sie findet am Haupteingang statt."
       ],
       "loesung": 1,
       "stelle": "Die Teilnahme ist freiwillig",
       "erklaerung": "Am Haupteingang steht nur das Terminal; die Einführung ist in der Kantine."
      },
      {
       "frage": "Wie lange gilt die Regelung zunächst?",
       "opt": [
        "Ein Jahr, danach wird sie überprüft.",
        "Bis der Betriebsrat neu gewählt wird.",
        "Unbefristet, solange es keine Beschwerden gibt."
       ],
       "loesung": 0,
       "stelle": "Die Regelung gilt zunächst für ein Jahr",
       "erklaerung": "Nach einem Jahr wird gemeinsam mit dem Betriebsrat ausgewertet."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "seite",
      "quelle": "Betriebsanweisung",
      "titel": "Betriebsanweisung: Sicher arbeiten im Zentrallager",
      "zeilen": [
       "Diese Betriebsanweisung gilt für alle Personen, die im Zentrallager der Brenner Logistik arbeiten, auch für Leiharbeiter und Aushilfen. Sie ist bei Arbeitsbeginn zu lesen und durch Unterschrift zu bestätigen. Die Schichtleitung führt außerdem jedes halbe Jahr eine Unterweisung durch, an der alle Beschäftigten teilnehmen müssen.",
       "1. Schutzkleidung: Sicherheitsschuhe und eine Warnweste sind im gesamten Lagerbereich Pflicht, auch bei kurzen Wegen. Handschuhe müssen nur beim Umgang mit scharfkantigen Verpackungen und Paletten getragen werden. Die Schutzkleidung wird vom Betrieb gestellt und bei Beschädigung kostenlos ersetzt.",
       "2. Fahrzeuge: Gabelstapler dürfen nur von Personen bedient werden, die einen gültigen Staplerschein besitzen und vom Betrieb schriftlich beauftragt wurden. Der Staplerschein allein reicht also nicht aus. Elektrische Hubwagen ohne Fahrersitz dürfen nach einer kurzen Einweisung durch die Schichtleitung benutzt werden.",
       "3. Verkehrswege: Fußgänger benutzen ausschließlich die grün markierten Wege. Notausgänge und Feuerlöscher müssen jederzeit frei zugänglich sein; Waren dürfen dort auch kurzfristig nicht abgestellt werden, selbst wenn sonst kein Platz mehr frei ist.",
       "4. Regale: Schwere Waren gehören in die unteren Fächer. Beschädigte Regale dürfen nicht weiter beladen werden. Melden Sie Schäden sofort der Schichtleitung und markieren Sie das Regal mit dem roten Sperrband, bis es repariert ist.",
       "5. Unfälle: Jeder Unfall, auch eine kleine Verletzung, wird in das Verbandbuch eingetragen. Dies ist wichtig, falls später Beschwerden auftreten und die Berufsgenossenschaft einen Nachweis verlangt. Ersthelfer erkennen Sie an dem grünen Aufkleber auf dem Helm. Bei schweren Unfällen rufen Sie zuerst den Notruf und informieren danach die Schichtleitung. Verstöße gegen diese Anweisung können arbeitsrechtliche Folgen haben, bis hin zur Abmahnung."
      ]
     },
     "aufgaben": [
      {
       "frage": "Handschuhe muss man tragen, …",
       "opt": [
        "im gesamten Lagerbereich.",
        "wenn man mit scharfkantigen Verpackungen arbeitet.",
        "nur bei der Arbeit mit dem Gabelstapler."
       ],
       "loesung": 1,
       "stelle": "beim Umgang mit scharfkantigen Verpackungen und Paletten",
       "erklaerung": "Im ganzen Lager gilt die Pflicht nur für Schuhe und Warnweste, nicht für Handschuhe."
      },
      {
       "frage": "Wer darf einen Gabelstapler fahren?",
       "opt": [
        "Jeder, der einen Staplerschein hat.",
        "Alle Mitarbeiter nach einer kurzen Einweisung.",
        "Nur wer einen Staplerschein hat und schriftlich beauftragt ist."
       ],
       "loesung": 2,
       "stelle": "vom Betrieb schriftlich beauftragt wurden",
       "erklaerung": "„Der Staplerschein allein reicht also nicht aus.“ Die kurze Einweisung gilt nur für Hubwagen."
      },
      {
       "frage": "Was soll man bei einem beschädigten Regal tun?",
       "opt": [
        "Den Schaden melden und das Regal absperren.",
        "Die schweren Waren in die unteren Fächer räumen.",
        "Das Regal nur noch leicht beladen."
       ],
       "loesung": 0,
       "stelle": "markieren Sie das Regal mit dem roten Sperrband",
       "erklaerung": "Beschädigte Regale dürfen gar nicht mehr beladen werden, auch nicht leicht."
      },
      {
       "frage": "Warum sollen auch kleine Verletzungen eingetragen werden?",
       "opt": [
        "Weil die Schichtleitung sonst keinen Ersthelfer schickt.",
        "Weil kleine Verletzungen sonst nicht behandelt werden.",
        "Damit später ein Nachweis vorhanden ist."
       ],
       "loesung": 2,
       "stelle": "die Berufsgenossenschaft einen Nachweis verlangt",
       "erklaerung": "Der Eintrag dient als Beleg, falls später Beschwerden auftreten."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu Mitteilung 1?",
       "opt": [
        "Neuer Spediteur ab nächstem Monat",
        "Kunden beschweren sich über Lieferungen",
        "Mögliche Lieferverzögerungen durch Streik"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Rundschreiben der Logistikabteilung",
        "titel": "Mitteilung 1",
        "zeilen": [
         "Wegen eines Streiks bei einem unserer Transportdienstleister kann es in der kommenden Woche zu Verzögerungen bei Lieferungen nach Süddeutschland kommen.",
         "Wir haben bereits einen zweiten Spediteur beauftragt, der einen Teil der Sendungen übernimmt, können aber nicht alle Termine garantieren.",
         "Bitte informieren Sie betroffene Kunden rechtzeitig und nennen Sie vorsichtshalber einen um zwei Tage späteren Liefertermin."
        ]
       },
       "stelle": "Wegen eines Streiks bei einem unserer Transportdienstleister",
       "erklaerung": "Der zweite Spediteur hilft nur vorübergehend; Beschwerden gibt es noch keine."
      },
      {
       "frage": "Welcher Betreff passt zu Mitteilung 2?",
       "opt": [
        "Jobticket für Auszubildende jetzt kostenlos",
        "Neue Ausbildungsplätze im Herbst",
        "Parkplätze für Mitarbeiter werden knapp"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung der Geschäftsleitung",
        "titel": "Mitteilung 2",
        "zeilen": [
         "Ab dem kommenden Quartal erhalten alle Auszubildenden ein Jobticket für Bus und Bahn, das vollständig vom Unternehmen bezahlt wird.",
         "Für die übrigen Mitarbeiter übernehmen wir weiterhin die Hälfte des Preises.",
         "Wer bereits ein Jobticket besitzt, muss nichts tun; die Umstellung erfolgt automatisch mit der nächsten Gehaltsabrechnung, ein neuer Antrag ist also nicht nötig."
        ]
       },
       "stelle": "das vollständig vom Unternehmen bezahlt wird",
       "erklaerung": "Neu ist nur die volle Übernahme für Auszubildende; für alle anderen bleibt es bei der Hälfte."
      }
     ]
    },
    {
     "nr": 6,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Geschäftsbrief",
      "titel": "Zahlungserinnerung an eine Kundin",
      "zeilen": [
       "Zahlungserinnerung zu unserer Rechnung Nr. 2026-0815",
       "Sehr geehrte Frau Haddad,",
       "sicher [[1:haben]] Sie es in der Hektik des Tagesgeschäfts übersehen: Unsere Rechnung Nr. 2026-0815 vom 2. September für die Lieferung von Etikettendruckern ist noch nicht beglichen. Der Betrag [[2:in]] Höhe von 2.860 Euro war am 2. Oktober fällig.",
       "[[3:Trotz]] wir Sie bereits am 10. Oktober per E-Mail an die Zahlung erinnert haben, ist bis heute kein Geld bei uns eingegangen. Wir bitten Sie daher, den offenen Betrag [[4:spätestens]] bis zum 14. November auf das unten genannte Konto zu überweisen. Sollte sich Ihre Zahlung mit diesem Schreiben [[5:überschnitten]] haben, betrachten Sie es bitte als gegenstandslos.",
       "Falls es Schwierigkeiten mit der Rechnung [[6:geben]], melden Sie sich bitte bei unserer Buchhaltung, [[7:dem]] Sie unter der Durchwahl 214 erreichen. Wir sind gern bereit, mit Ihnen über eine [[8:monatlicher]] Ratenzahlung zu sprechen.",
       "Wir weisen Sie jedoch darauf hin, [[9:ob]] wir nach Ablauf dieser Frist leider ein Inkassobüro einschalten müssen. Wir hoffen weiterhin [[10:an]] eine gute Zusammenarbeit.",
       "Mit freundlichen Grüßen",
       "Malte Strohmeier",
       "Debitorenbuchhaltung, Strohmeier Bürosysteme KG"
      ]
     },
     "aufgaben": [
      {
       "frage": "Stelle 1: Ist „haben\" richtig — oder b oder c?",
       "luecke": 1,
       "opt": [
        "haben",
        "sind",
        "werden"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„übersehen\" bildet das Perfekt mit „haben\": „Sie haben es übersehen\"."
      },
      {
       "frage": "Stelle 2: Ist „in\" richtig — oder b oder c?",
       "luecke": 2,
       "opt": [
        "in",
        "von",
        "mit"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Wendung „in Höhe von\"."
      },
      {
       "frage": "Stelle 3: Ist „Trotz\" richtig — oder b oder c?",
       "luecke": 3,
       "opt": [
        "Trotz",
        "Obwohl",
        "Weil"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Nebensatz mit Verb am Ende braucht die Konjunktion „obwohl\"; „trotz\" ist eine Präposition."
      },
      {
       "frage": "Stelle 4: Ist „spätestens\" richtig — oder b oder c?",
       "luecke": 4,
       "opt": [
        "spätestens",
        "frühestens",
        "mindestens"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Bei einer Zahlungsfrist ist der letzte mögliche Tag gemeint: „spätestens bis zum\"."
      },
      {
       "frage": "Stelle 5: Ist „überschnitten\" richtig — oder b oder c?",
       "luecke": 5,
       "opt": [
        "überschnitten",
        "überschneiden",
        "überschneidet"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Perfekt Infinitiv „sich überschnitten haben\" braucht das Partizip II."
      },
      {
       "frage": "Stelle 6: Ist „geben\" richtig — oder b oder c?",
       "luecke": 6,
       "opt": [
        "geben",
        "gibt",
        "gegeben"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Subjekt ist das unpersönliche „es\": „falls es Schwierigkeiten gibt\"."
      },
      {
       "frage": "Stelle 7: Ist „dem\" richtig — oder b oder c?",
       "luecke": 7,
       "opt": [
        "dem",
        "die",
        "der"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„die Buchhaltung\" ist feminin und hier Akkusativobjekt („Sie erreichen sie\"): „die\"."
      },
      {
       "frage": "Stelle 8: Ist „monatlicher\" richtig — oder b oder c?",
       "luecke": 8,
       "opt": [
        "monatlicher",
        "monatliche",
        "monatlichen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Nach „über eine\" (Akkusativ feminin) endet das Adjektiv auf „-e\"."
      },
      {
       "frage": "Stelle 9: Ist „ob\" richtig — oder b oder c?",
       "luecke": 9,
       "opt": [
        "ob",
        "dass",
        "wenn"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„darauf hinweisen, dass …\" leitet eine feste Information ein, keine offene Frage."
      },
      {
       "frage": "Stelle 10: Ist „an\" richtig — oder b oder c?",
       "luecke": 10,
       "opt": [
        "an",
        "auf",
        "für"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„hoffen auf\" + Akkusativ ist die feste Präposition."
      }
     ]
    },
    {
     "nr": 7,
     "art": "textwahl",
     "text": {
      "sorte": "seite",
      "quelle": "Auszug",
      "titel": "Lieferbedingungen eines Getränkegroßhandels",
      "zeilen": [
       "Lieferbedingungen der Getränkegroßhandlung Brückner",
       "1. Bestellungen",
       "Bestellungen, die bis 12 Uhr bei uns __(1)__, werden in der Regel am folgenden Werktag ausgeliefert. Für Bestellungen __(2)__ 150 Euro Warenwert berechnen wir eine Anfahrtspauschale von 15 Euro.",
       "2. Anlieferung",
       "Die Ware wird bis __(3)__ Bordsteinkante geliefert. Ist eine Lieferung bis in die Lagerräume gewünscht, muss dies bei der Bestellung __(4)__ vereinbart werden. Der Kunde stellt sicher, dass zum vereinbarten Zeitpunkt eine __(5)__ Person vor Ort ist, die die Ware entgegennimmt und den Lieferschein unterschreibt.",
       "3. Leergut",
       "Leergut wird bei der nächsten Lieferung zurückgenommen. Der Pfandbetrag wird __(6)__ der folgenden Rechnung verrechnet. Beschädigte Kisten können wir leider nicht annehmen. Fremdes Leergut, das wir nicht im Sortiment führen, wird ebenfalls nicht zurückgenommen.",
       "4. Verzögerungen",
       "Kann ein Liefertermin aus Gründen, die wir nicht zu __(7)__ haben, nicht eingehalten werden, informieren wir den Kunden umgehend. Dazu __(8)__ beispielsweise Streiks, extreme Wetterlagen oder Störungen bei unseren Vorlieferanten. Schadensersatzansprüche sind in diesen Fällen __(9)__. Der Kunde kann jedoch vom Vertrag __(10)__, wenn sich die Lieferung um mehr als zwei Wochen verzögert. Bereits geleistete Zahlungen erstatten wir in diesem Fall innerhalb von 14 Tagen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "eingehen",
        "eingeht",
        "unter",
        "zur",
        "zum",
        "gesondert",
        "befugte",
        "befugt",
        "mit",
        "vertreten",
        "zählen",
        "zählt",
        "ausgeschlossen",
        "zurücktreten",
        "austreten"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Bestellungen\" und „Streiks, Wetterlagen …\" sind Plural („eingehen\", „zählen\"); „die Bordsteinkante\" ist feminin („zur\"). Fachwendungen: „etwas zu vertreten haben\", „vom Vertrag zurücktreten\"."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "eingehen",
        "eingeht",
        "unter",
        "zur",
        "zum",
        "gesondert",
        "befugte",
        "befugt",
        "mit",
        "vertreten",
        "zählen",
        "zählt",
        "ausgeschlossen",
        "zurücktreten",
        "austreten"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „unter\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "eingehen",
        "eingeht",
        "unter",
        "zur",
        "zum",
        "gesondert",
        "befugte",
        "befugt",
        "mit",
        "vertreten",
        "zählen",
        "zählt",
        "ausgeschlossen",
        "zurücktreten",
        "austreten"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „zur\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "eingehen",
        "eingeht",
        "unter",
        "zur",
        "zum",
        "gesondert",
        "befugte",
        "befugt",
        "mit",
        "vertreten",
        "zählen",
        "zählt",
        "ausgeschlossen",
        "zurücktreten",
        "austreten"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „gesondert\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "eingehen",
        "eingeht",
        "unter",
        "zur",
        "zum",
        "gesondert",
        "befugte",
        "befugt",
        "mit",
        "vertreten",
        "zählen",
        "zählt",
        "ausgeschlossen",
        "zurücktreten",
        "austreten"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „befugte\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "eingehen",
        "eingeht",
        "unter",
        "zur",
        "zum",
        "gesondert",
        "befugte",
        "befugt",
        "mit",
        "vertreten",
        "zählen",
        "zählt",
        "ausgeschlossen",
        "zurücktreten",
        "austreten"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „mit\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "eingehen",
        "eingeht",
        "unter",
        "zur",
        "zum",
        "gesondert",
        "befugte",
        "befugt",
        "mit",
        "vertreten",
        "zählen",
        "zählt",
        "ausgeschlossen",
        "zurücktreten",
        "austreten"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „vertreten\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "eingehen",
        "eingeht",
        "unter",
        "zur",
        "zum",
        "gesondert",
        "befugte",
        "befugt",
        "mit",
        "vertreten",
        "zählen",
        "zählt",
        "ausgeschlossen",
        "zurücktreten",
        "austreten"
       ],
       "loesung": 10,
       "fest": true,
       "erklaerung": "Richtig ist „zählen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "eingehen",
        "eingeht",
        "unter",
        "zur",
        "zum",
        "gesondert",
        "befugte",
        "befugt",
        "mit",
        "vertreten",
        "zählen",
        "zählt",
        "ausgeschlossen",
        "zurücktreten",
        "austreten"
       ],
       "loesung": 12,
       "fest": true,
       "erklaerung": "Richtig ist „ausgeschlossen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "eingehen",
        "eingeht",
        "unter",
        "zur",
        "zum",
        "gesondert",
        "befugte",
        "befugt",
        "mit",
        "vertreten",
        "zählen",
        "zählt",
        "ausgeschlossen",
        "zurücktreten",
        "austreten"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Richtig ist „zurücktreten\". Jedes Wort passt nur einmal."
      }
     ]
    }
   ]
  }
 ]
};
