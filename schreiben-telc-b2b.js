/* ============================================================
   deutschoderwas club — SCHREIBEN telc Deutsch B2+ Beruf

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B2+ Beruf,
   geprüft 03.11.2026). Alle Texte und Aufgaben eigene, Kontext
   Geschäftskommunikation. Erzeugt aus scratchpad/telcb2b mit bau.js.
   ============================================================ */

window.SCHREIBEN_TELC_B2B = {
 "niveau": "telcB2B",
 "pruefung": "telc Deutsch B2+ Beruf",
 "minuten": 60,
 "punkte": 25,
 "intro": "Bei telc B2+ Beruf schreibst du zwei Texte: einen Geschäftsbrief oder Bericht mit 180 bis 200 Wörtern und sechs Leitpunkten (20 Punkte) und eine kurze E-Mail oder Notiz mit 60 bis 80 Wörtern (5 Punkte). Hier bewertest du dich selbst nach den telc-Kriterien und vergleichst mit dem Muster.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Der Geschäftsbrief",
   "zeichen": "🖼️",
   "was": "Betreff, Anrede, Bezug, Schluss — und Antworten auf Anfragen."
  },
  {
   "nr": 2,
   "titel": "Sechs Punkte, kurze Notizen",
   "zeichen": "🧩",
   "was": "Punkte ordnen und verbinden; kurz und vollständig schreiben."
  },
  {
   "nr": 3,
   "titel": "Die zwei Aufgaben",
   "zeichen": "✉️",
   "was": "Brief mit sechs Leitpunkten und kurze Nachricht."
  },
  {
   "nr": 4,
   "titel": "Die Prüfung",
   "zeichen": "⏱️",
   "was": "Beide Texte mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tbb2s1",
   "stufe": 1,
   "titel": "Geschäftsbrief: Betreff, Anrede, Bezug, Schluss",
   "kurz": "Der Rahmen eines Geschäftsbriefs sitzt, bevor der Inhalt kommt",
   "ziel": "Nach diesem Block baust du Betreff, Anrede, Bezugssatz und Schluss eines Geschäftsbriefs sicher und ohne Nachdenken.",
   "zeichen": "✉️",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Ein Kunde hat nach Ersatzteilen für eine Maschine gefragt. Welcher Betreff passt zu deiner Antwort?",
     "opt": [
      "Antwort auf Ihre Mail",
      "Ersatzteile!!!",
      "Ihre Anfrage vom 12. März – Ersatzteile für die Verpackungsanlage VX 300"
     ],
     "loesung": 2,
     "erklaerung": "Ein geschäftlicher Betreff nennt Bezug und Gegenstand. So kann der Kunde die Antwort sofort zuordnen."
    },
    {
     "art": "wahl",
     "frage": "Wo steht der Betreff in einem Geschäftsbrief?",
     "opt": [
      "Über der Anrede, ohne das Wort „Betreff:“",
      "Direkt nach der Grußformel",
      "Im ersten Satz des Textes"
     ],
     "loesung": 0,
     "erklaerung": "Der Betreff steht vor der Anrede. Das Wort „Betreff:“ schreibt man heute nicht mehr davor."
    },
    {
     "art": "wahl",
     "frage": "Du schreibst an die Personalabteilung einer Firma und kennst keinen Namen. Welche Anrede wählst du?",
     "opt": [
      "Hallo Personalabteilung,",
      "Sehr geehrte Damen und Herren,",
      "Liebes Team,"
     ],
     "loesung": 1,
     "erklaerung": "Ohne Namen ist „Sehr geehrte Damen und Herren,“ die sichere Standardanrede im Geschäftsbrief."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz stellt den Bezug zu einer Kundenanfrage am besten her?",
     "opt": [
      "Ihre Mail habe ich bekommen.",
      "wir haben viele Schulungen im Angebot.",
      "vielen Dank für Ihre Anfrage vom vergangenen Freitag, in der Sie sich nach unseren Schulungen erkundigen."
     ],
     "loesung": 2,
     "erklaerung": "Der Bezugssatz nennt Datum und Thema der Anfrage und bedankt sich. Nach der Anrede geht es klein weiter."
    },
    {
     "art": "wahl",
     "frage": "Du hast mit einer Kundin telefoniert und schickst jetzt Unterlagen. Wie beginnst du?",
     "opt": [
      "wie telefonisch besprochen, sende ich Ihnen anbei unser aktuelles Angebot.",
      "ich wollte nur mal was schicken.",
      "hier ist das Angebot, schauen Sie mal."
     ],
     "loesung": 0,
     "erklaerung": "„Wie telefonisch besprochen“ verbindet den Brief mit dem Gespräch. „Anbei“ kündigt den Anhang an."
    },
    {
     "art": "wahl",
     "frage": "Welcher Schlusssatz passt in einen Geschäftsbrief?",
     "opt": [
      "Melden Sie sich halt, wenn was ist.",
      "Für Rückfragen stehe ich Ihnen gern zur Verfügung.",
      "Fragen Sie, wenn Sie wollen."
     ],
     "loesung": 1,
     "erklaerung": "Ein klassischer, höflicher Schluss: Er bietet Hilfe an, ohne umständlich zu sein."
    },
    {
     "art": "wahl",
     "frage": "Was gehört unter die Grußformel „Mit freundlichen Grüßen“?",
     "opt": [
      "Nur der Vorname",
      "Vorname, Nachname und Funktion oder Abteilung",
      "Ein kurzer Satz zum Wetter"
     ],
     "loesung": 1,
     "erklaerung": "Name und Funktion zeigen dem Empfänger, wer schreibt und an wen er sich wenden kann."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Bezugssatz.",
     "teile": [
      "vielen Dank",
      "für",
      "Ihre",
      "Anfrage",
      "vom",
      "vergangenen",
      "Montag."
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
     "erklaerung": "Nach der Anrede mit Komma schreibst du klein weiter: „vielen Dank für …“."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Schlusssatz.",
     "teile": [
      "Für",
      "Rückfragen",
      "stehe",
      "ich",
      "Ihnen",
      "gern",
      "zur Verfügung."
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
     "erklaerung": "„Für Rückfragen“ steht auf Position eins, deshalb folgt sofort das Verb „stehe“."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Einstieg mit Bezug auf ein Telefonat.",
     "teile": [
      "wie",
      "telefonisch",
      "besprochen,",
      "sende",
      "ich",
      "Ihnen",
      "anbei",
      "unser",
      "aktuelles",
      "Angebot."
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
      8,
      9
     ],
     "erklaerung": "Der Nebensatz „wie telefonisch besprochen“ steht vorn, danach kommt direkt das Verb „sende“."
    }
   ]
  },
  {
   "id": "tbb2s2",
   "stufe": 1,
   "titel": "Angebote und Antworten auf Anfragen",
   "kurz": "Preis, Lieferung, Bedingungen — vollständig und verbindlich",
   "ziel": "Nach diesem Block formulierst du ein vollständiges Angebot und antwortest auf Kundenanfragen genau, freundlich und verbindlich.",
   "zeichen": "💼",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Mit welchem Satz leitest du ein Angebot ein?",
     "opt": [
      "Wir können Ihnen was anbieten.",
      "Kaufen Sie bei uns!",
      "Gern unterbreiten wir Ihnen folgendes Angebot:"
     ],
     "loesung": 2,
     "erklaerung": "„Ein Angebot unterbreiten“ ist die feste Wendung im Geschäftsbrief."
    },
    {
     "art": "wahl",
     "frage": "Welche Preisangabe ist für ein Angebot richtig formuliert?",
     "opt": [
      "Der Preis beträgt pro Teilnehmer 320 Euro zuzüglich Mehrwertsteuer.",
      "Das kostet so ungefähr 300 Euro, glaube ich.",
      "Preis: günstig."
     ],
     "loesung": 0,
     "erklaerung": "Ein Angebot ist verbindlich: genauer Betrag, Bezugsgröße und Hinweis auf die Mehrwertsteuer."
    },
    {
     "art": "wahl",
     "frage": "Was gehört in ein vollständiges Angebot?",
     "opt": [
      "Nur der Preis",
      "Preis, Lieferzeit, Zahlungsbedingungen und Gültigkeit",
      "Eine Liste aller Mitarbeiter"
     ],
     "loesung": 1,
     "erklaerung": "Erst mit Lieferzeit, Zahlungsbedingungen und Gültigkeit kann der Kunde wirklich entscheiden."
    },
    {
     "art": "wahl",
     "frage": "Wie bietest du einen Mengenrabatt an?",
     "opt": [
      "Wenn Sie viel kaufen, wird es vielleicht billiger.",
      "Bei einer Bestellung ab hundert Stück gewähren wir Ihnen einen Rabatt von fünf Prozent.",
      "Rabatt gibt es immer irgendwie."
     ],
     "loesung": 1,
     "erklaerung": "„Einen Rabatt gewähren“ plus genaue Bedingung: So klingt ein seriöses Angebot."
    },
    {
     "art": "wahl",
     "frage": "Der Kunde wünscht eine Lieferung in drei Tagen. Das ist nicht möglich. Was schreibst du?",
     "opt": [
      "Drei Tage? Das ist unmöglich.",
      "Das geht leider nicht.",
      "Leider ist eine Lieferung innerhalb von drei Tagen nicht möglich. Wir können Ihnen jedoch die Lieferung bis Ende nächster Woche zusagen."
     ],
     "loesung": 2,
     "erklaerung": "Eine gute Absage nennt immer eine Alternative. „Jedoch“ leitet den Lösungsvorschlag ein."
    },
    {
     "art": "wahl",
     "frage": "Das gewünschte Modell ist ausverkauft. Welche Antwort ist kundenorientiert?",
     "opt": [
      "Gern bieten wir Ihnen alternativ das Nachfolgemodell an, das zum gleichen Preis erhältlich ist.",
      "Das Modell gibt es nicht mehr, tut uns leid.",
      "Schauen Sie doch mal bei der Konkurrenz."
     ],
     "loesung": 0,
     "erklaerung": "Statt nur abzusagen, bietest du eine Alternative an — so bleibt der Kunde bei dir."
    },
    {
     "art": "wahl",
     "frage": "Wie kündigst du einen Anhang an?",
     "opt": [
      "Im Anhang ist was dabei.",
      "Katalog siehe irgendwo.",
      "Anbei erhalten Sie unseren aktuellen Katalog mit allen Preisen."
     ],
     "loesung": 2,
     "erklaerung": "„Anbei erhalten Sie …“ ist die übliche Formulierung für Anlagen."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Einleitungssatz eines Angebots.",
     "teile": [
      "Gern",
      "unterbreiten",
      "wir",
      "Ihnen",
      "folgendes",
      "Angebot:"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "„Gern“ auf Position eins, danach das Verb „unterbreiten“, dann Subjekt und Objekte."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz zur Lieferzeit.",
     "teile": [
      "Die",
      "Lieferung",
      "erfolgt",
      "innerhalb",
      "von",
      "zehn",
      "Werktagen",
      "nach",
      "Auftragseingang."
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
     "erklaerung": "„Die Lieferung erfolgt …“ ist typischer Geschäftsstil. „Nach Auftragseingang“ nennt den Startpunkt."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Schlusssatz an einen Neukunden.",
     "teile": [
      "Wir",
      "würden",
      "uns",
      "freuen,",
      "Sie",
      "bald",
      "als",
      "Kunden",
      "begrüßen",
      "zu",
      "dürfen."
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
      8,
      9,
      10
     ],
     "erklaerung": "Konjunktiv II „würden uns freuen“ plus Infinitiv mit „zu“ — höflich und verbindlich zugleich."
    }
   ]
  },
  {
   "id": "tbb2s3",
   "stufe": 2,
   "titel": "Sechs Leitpunkte ordnen und verbinden",
   "kurz": "Alle sechs Punkte unterbringen — in einem Brief, der fließt",
   "ziel": "Nach diesem Block bearbeitest du alle sechs Leitpunkte in sinnvoller Reihenfolge und verbindest sie mit passenden Überleitungen.",
   "zeichen": "🔗",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "In Teil 1 gibt es sechs Leitpunkte. Wie gehst du vor?",
     "opt": [
      "Du wählst drei Punkte und schreibst ausführlich.",
      "Du bearbeitest alle sechs Punkte, jeweils in zwei, drei Sätzen.",
      "Du schreibst nur über die Punkte, die dir leichtfallen."
     ],
     "loesung": 1,
     "erklaerung": "Jeder fehlende Leitpunkt kostet Punkte bei der Aufgabenbewältigung. Also: alle sechs, aber knapp."
    },
    {
     "art": "wahl",
     "frage": "Du hast etwa 190 Wörter für sechs Leitpunkte. Wie viele Wörter bleiben pro Punkt?",
     "opt": [
      "Etwa hundert",
      "Etwa fünf",
      "Etwa fünfundzwanzig bis dreißig"
     ],
     "loesung": 2,
     "erklaerung": "Rechne Anrede, Bezug und Schluss ab — dann bleiben pro Leitpunkt rund zwei bis drei Sätze."
    },
    {
     "art": "wahl",
     "frage": "Darfst du die Reihenfolge der Leitpunkte ändern?",
     "opt": [
      "Ja, wenn der Brief dadurch logischer wird.",
      "Nein, niemals.",
      "Ja, aber nur alphabetisch."
     ],
     "loesung": 0,
     "erklaerung": "Die Leitpunkte sind ein Inhaltsplan, keine feste Reihenfolge. Wichtig ist ein logischer Aufbau."
    },
    {
     "art": "wahl",
     "frage": "Welcher Übergang leitet elegant zum Punkt „Lieferzeit“ über?",
     "opt": [
      "Jetzt zur Lieferzeit.",
      "Was die Lieferzeit betrifft, so können wir Ihnen eine Lieferung bis Monatsende zusagen.",
      "Und noch was: Lieferzeit."
     ],
     "loesung": 1,
     "erklaerung": "„Was … betrifft“ ist die klassische Überleitung zu einem neuen Thema im Geschäftsbrief."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz verbindet Problem und Lösung am besten?",
     "opt": [
      "Die Lieferung war spät. Wir haben was gemacht.",
      "Die Lieferung war spät, deshalb nicht.",
      "Zwar hat sich die Lieferung verzögert, jedoch konnten wir die Ware inzwischen vollständig versenden."
     ],
     "loesung": 2,
     "erklaerung": "„Zwar … jedoch“ stellt Problem und Lösung gegenüber und macht den Text zusammenhängend."
    },
    {
     "art": "wahl",
     "frage": "Welches Wort drückt eine Folge aus?",
     "opt": [
      "trotzdem",
      "infolgedessen",
      "obwohl"
     ],
     "loesung": 1,
     "erklaerung": "„Infolgedessen“ bedeutet „deshalb“. „Trotzdem“ und „obwohl“ drücken einen Gegensatz aus."
    },
    {
     "art": "wahl",
     "frage": "Was steht sinnvollerweise am Ende, kurz vor dem Gruß?",
     "opt": [
      "Ein ganz neues Thema",
      "Ein Satz, der den nächsten Schritt nennt oder um eine Rückmeldung bittet",
      "Die Wiederholung des Betreffs"
     ],
     "loesung": 1,
     "erklaerung": "Der Schluss bündelt und zeigt, wie es weitergeht — so wirkt der Brief abgeschlossen."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Überleitung zum Punkt „Kosten“.",
     "teile": [
      "Was",
      "die",
      "Kosten",
      "betrifft,",
      "so",
      "übernimmt",
      "unsere",
      "Firma",
      "die",
      "Hälfte."
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
      8,
      9
     ],
     "erklaerung": "Nach „Was … betrifft,“ kann „so“ stehen — danach folgt sofort das Verb."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der einen neuen Punkt anschließt.",
     "teile": [
      "Darüber hinaus",
      "möchte",
      "ich",
      "Sie",
      "über",
      "den",
      "aktuellen",
      "Stand",
      "informieren."
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
     "erklaerung": "„Darüber hinaus“ fügt einen weiteren Punkt hinzu und steht auf Position eins."
    },
    {
     "art": "ordnen",
     "frage": "Bau den abschließenden Satz.",
     "teile": [
      "Abschließend",
      "bitte",
      "ich",
      "Sie,",
      "mir",
      "den",
      "Termin",
      "kurz",
      "zu",
      "bestätigen."
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
      8,
      9
     ],
     "erklaerung": "„Abschließend“ kündigt das Ende an. „Jemanden bitten, etwas zu tun“ braucht den Infinitiv mit „zu“."
    }
   ]
  },
  {
   "id": "tbb2s4",
   "stufe": 2,
   "titel": "Kurze Notizen und E-Mails: knapp und vollständig",
   "kurz": "Sechzig bis achtzig Wörter — alles drin, nichts zu viel",
   "ziel": "Nach diesem Block schreibst du kurze interne Nachrichten, die in wenigen Sätzen alle wichtigen Informationen enthalten.",
   "zeichen": "📝",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie lang soll die kurze Mitteilung in Teil 2 sein?",
     "opt": [
      "Etwa zehn Wörter",
      "Hundertachtzig bis zweihundert Wörter",
      "Sechzig bis achtzig Wörter"
     ],
     "loesung": 2,
     "erklaerung": "Teil 2 ist kurz: sechzig bis achtzig Wörter. Zu lange Texte kosten Zeit und wirken umständlich."
    },
    {
     "art": "wahl",
     "frage": "Du schreibst einer Kollegin, mit der du dich duzt. Welche Anrede passt?",
     "opt": [
      "Hallo Svenja,",
      "Sehr geehrte Frau Kaya,",
      "Werte Svenja,"
     ],
     "loesung": 0,
     "erklaerung": "Unter Kollegen mit Du reicht „Hallo“ plus Vorname. „Sehr geehrte“ wäre hier zu förmlich."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist knapp und vollständig?",
     "opt": [
      "Wegen der Besprechung gibt es eine Änderung, mehr später.",
      "Die Besprechung am Donnerstag beginnt erst um 14 Uhr, der Raum bleibt gleich.",
      "Besprechung anders."
     ],
     "loesung": 1,
     "erklaerung": "Was, wann, wo — alles in einem Satz. Die anderen Varianten lassen wichtige Fragen offen."
    },
    {
     "art": "wahl",
     "frage": "Was gehört NICHT in eine kurze interne Notiz?",
     "opt": [
      "Was, wann und wer",
      "Eine klare Bitte",
      "Lange Entschuldigungen und die ganze Vorgeschichte"
     ],
     "loesung": 2,
     "erklaerung": "Kurze Notizen kommen schnell zum Punkt. Vorgeschichte und lange Erklärungen lässt du weg."
    },
    {
     "art": "wahl",
     "frage": "Wie bittest du einen Kollegen höflich um eine Erledigung?",
     "opt": [
      "Könntest du bitte bis Freitag die Zahlen an Herrn Lindqvist schicken?",
      "Zahlen vielleicht irgendwann schicken.",
      "Du musst die Zahlen schicken!!!"
     ],
     "loesung": 0,
     "erklaerung": "Konjunktiv II, eine klare Frist und ein klarer Empfänger: höflich und eindeutig."
    },
    {
     "art": "wahl",
     "frage": "Du vertrittst eine Kollegin. Was schreibst du einem Kunden?",
     "opt": [
      "Frau Okafor ist nicht da.",
      "Frau Okafor ist bis zum zwölften November im Urlaub. Ich vertrete sie und kümmere mich gern um Ihr Anliegen.",
      "Schreiben Sie später noch mal."
     ],
     "loesung": 1,
     "erklaerung": "Wie lange abwesend, wer vertritt, was passiert jetzt — drei Informationen in zwei Sätzen."
    },
    {
     "art": "wahl",
     "frage": "Welche Grußformel passt in eine kurze interne E-Mail an Kollegen?",
     "opt": [
      "Hochachtungsvoll",
      "Viele Grüße",
      "Mit vorzüglicher Hochachtung"
     ],
     "loesung": 1,
     "erklaerung": "Intern und kollegial ist „Viele Grüße“ üblich. „Hochachtungsvoll“ ist veraltet und viel zu steif."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Bitte um Rückmeldung.",
     "teile": [
      "Kannst",
      "du",
      "mir",
      "bitte",
      "bis",
      "morgen",
      "Mittag",
      "Bescheid",
      "geben?"
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
     "erklaerung": "Ja-Nein-Frage: Das Verb steht vorn, „Bescheid geben“ bildet die Satzklammer am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz zu deiner Rückkehr.",
     "teile": [
      "Ich",
      "bin",
      "ab",
      "Montag",
      "wieder",
      "im",
      "Büro",
      "und",
      "melde",
      "mich",
      "dann."
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
      8,
      9,
      10
     ],
     "erklaerung": "Zwei Hauptsätze mit „und“ verbunden — das Subjekt „ich“ muss nicht wiederholt werden."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Erinnerung an einen Kollegen.",
     "teile": [
      "Bitte",
      "denk",
      "daran,",
      "den",
      "Besprechungsraum",
      "rechtzeitig",
      "zu",
      "reservieren."
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
     "erklaerung": "„Denk daran, … zu reservieren“: Nach „daran“ folgt ein Infinitiv mit „zu“."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "mitteilung",
   "name": "Teil 1: Geschäftsbrief",
   "kurz": "180–200 Wörter, sechs Leitpunkte",
   "was": "Du antwortest auf eine Anfrage, einen Auftrag oder eine Beschwerde — mit allen sechs Leitpunkten, Betreff, Anrede und Schluss.",
   "tipp": "Plane die Reihenfolge der sechs Punkte, bevor du schreibst. Ein Punkt — ein Absatz oder zwei Sätze.",
   "zeichen": "💼",
   "farbe": "turq",
   "punkte": 20,
   "runden": [
    {
     "id": "tb2bs1r1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "id": "bbsa1",
       "situation": "Sie arbeiten im Vertrieb der Firma Lumora Bürosysteme. Ein Interessent hat Ihnen eine Anfrage geschickt. Antworten Sie ihm mit einem Geschäftsbrief und gehen Sie auf alle sechs Leitpunkte ein.",
       "eingang": {
        "von": "Tobias Renner, Kanzlei Renner und Aksoy",
        "betreff": "Anfrage: höhenverstellbare Schreibtische",
        "text": "Sehr geehrte Damen und Herren, unsere Steuerkanzlei zieht im Frühjahr in neue Büroräume. Für zwölf Arbeitsplätze suchen wir höhenverstellbare Schreibtische, auf denen auch zwei große Bildschirme Platz haben. Auf Ihrer Internetseite habe ich gesehen, dass Sie verschiedene Modelle anbieten. Könnten Sie mir mitteilen, welche Modelle Sie empfehlen und worin sie sich unterscheiden? Außerdem interessiert uns, wie lange die Lieferung dauert und ob Sie die Tische auch aufbauen. Gibt es die Möglichkeit, ein Modell vorher zu testen? Über eine baldige Antwort würde ich mich freuen. Mit freundlichen Grüßen, Tobias Renner"
       },
       "sorte": "email",
       "an": "Herr Tobias Renner, Kanzlei Renner und Aksoy",
       "betreff": "Ihre Anfrage zu höhenverstellbaren Schreibtischen",
       "punkte": [
        {
         "nr": 1,
         "was": "Dank und Bezug",
         "hinweis": "Bedanken Sie sich für die Anfrage und nehmen Sie Bezug darauf."
        },
        {
         "nr": 2,
         "was": "Empfohlene Modelle",
         "hinweis": "Nennen Sie ein oder zwei passende Modelle."
        },
        {
         "nr": 3,
         "was": "Unterschiede",
         "hinweis": "Erklären Sie, worin sich die Modelle unterscheiden."
        },
        {
         "nr": 4,
         "was": "Lieferzeit",
         "hinweis": "Geben Sie an, wann geliefert werden kann."
        },
        {
         "nr": 5,
         "was": "Aufbau",
         "hinweis": "Informieren Sie über den Aufbauservice."
        },
        {
         "nr": 6,
         "was": "Testmöglichkeit",
         "hinweis": "Schlagen Sie vor, wie der Kunde ein Modell testen kann."
        }
       ],
       "muster": "Sehr geehrter Herr Renner,\nvielen Dank für Ihre Anfrage vom vergangenen Dienstag und Ihr Interesse an unseren Büromöbeln. Gern beantworte ich Ihre Fragen und freue mich, dass Sie bei der Einrichtung Ihrer neuen Räume an uns denken.\nFür Ihre Kanzlei empfehle ich Ihnen zwei Modelle: „Arbeo Basic“ und „Arbeo Pro“. Beide lassen sich elektrisch in der Höhe verstellen, sind sehr stabil und tragen problemlos zwei große Bildschirme.\nDer wichtigste Unterschied liegt in der Ausstattung. Das Modell „Pro“ hat eine Speicherfunktion für vier Höhen, einen Kabelkanal und eine etwas größere Tischplatte. Dafür ist es pro Tisch rund hundertzwanzig Euro teurer.\nWas die Lieferzeit betrifft, so können wir beide Modelle innerhalb von drei Wochen nach Auftragseingang liefern. Selbstverständlich übernimmt unser Montageteam auch den Aufbau. Bei zwölf Tischen ist dieser Service für Sie kostenlos.\nGern können Sie beide Modelle vorher in unserem Ausstellungsraum in der Hafenstraße testen. Alternativ bringen wir Ihnen ein Modell für eine Woche in Ihr Büro, damit Ihre Mitarbeiter es im Alltag ausprobieren können.\nAnbei erhalten Sie unseren aktuellen Katalog mit allen Preisen. Für Rückfragen stehe ich Ihnen jederzeit gern zur Verfügung.\nMit freundlichen Grüßen\nLena Hoffmeister\nVertrieb, Lumora Bürosysteme",
       "woerter": 190,
       "hilfen": [
        "vielen Dank für Ihre Anfrage vom …",
        "Für Ihre Zwecke empfehle ich Ihnen …",
        "Der wichtigste Unterschied liegt in …",
        "Was die Lieferzeit betrifft, so …",
        "Selbstverständlich übernehmen wir auch …",
        "Für Rückfragen stehe ich Ihnen gern zur Verfügung."
       ],
       "erklaerung": "Das Muster beantwortet alle sechs Leitpunkte der Reihe nach und nennt jeweils eine konkrete Angabe statt allgemeiner Versprechen. Der Anhang und das Angebot zum Nachfragen runden den Brief ab.",
       "rubrik": [
        {
         "t": "Inhalt: die sechs Leitpunkte",
         "h": "Sind alle sechs Punkte behandelt — mit Betreff, Anrede und Schluss?",
         "stufen": [
          {
           "w": 4,
           "t": "A",
           "d": "alle Punkte"
          },
          {
           "w": 3,
           "t": "B",
           "d": "fast alle"
          },
          {
           "w": 1,
           "t": "C",
           "d": "die Hälfte"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        },
        {
         "t": "Kommunikative Angemessenheit",
         "h": "Passt der Ton zum Geschäftsbrief? Ist der Text gut aufgebaut und verknüpft?",
         "stufen": [
          {
           "w": 8,
           "t": "A",
           "d": "voll angemessen"
          },
          {
           "w": 5,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 2,
           "t": "C",
           "d": "ansatzweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "Sprachliche Angemessenheit",
         "h": "Grammatik und Rechtschreibung — vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 8,
           "t": "A",
           "d": "kaum Fehler"
          },
          {
           "w": 5,
           "t": "B",
           "d": "einige Fehler"
          },
          {
           "w": 2,
           "t": "C",
           "d": "viele Fehler"
          },
          {
           "w": 0,
           "t": "D",
           "d": "schwer verständlich"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "platzhalter": "Schreib hier deinen Geschäftsbrief …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Drei Kriterien wie bei telc (Inhalt 4, Kommunikation 8, Sprache 8 Punkte). Die Stufen B und C sind eine Übungsschätzung."
      },
      {
       "id": "bbsa2",
       "situation": "Sie arbeiten bei der Firma Tafelwerk Catering. Ihre Chefin hat Ihnen eine Notiz geschrieben. Schreiben Sie das Angebot an die neue Kundin und gehen Sie auf alle sechs Leitpunkte ein.",
       "eingang": {
        "von": "Miriam Sandhoff, Geschäftsführung Tafelwerk Catering",
        "betreff": "Neukundin Frau Brenner – bitte Angebot schicken",
        "text": "Hallo, auf der Gewerbeschau am Wochenende hat Frau Brenner von Kessler Logistik lange mit mir an unserem Stand gesprochen. Die Firma hat keine eigene Kantine und sucht für ihre rund achtzig Mitarbeiter eine tägliche Lieferung von Mittagessen. Wichtig sind ihr Abwechslung, ein vegetarisches Gericht pro Tag und ein fairer Preis. Bitte schick ihr bis Mittwoch ein Angebot. Du kannst ihr bei einem Vertrag über ein Jahr zehn Prozent Rabatt anbieten und gern ein kostenloses Probeessen vorschlagen. Danke! Miriam"
       },
       "sorte": "email",
       "an": "Frau Anja Brenner, Kessler Logistik",
       "betreff": "Ihr Angebot für die tägliche Mittagsversorgung",
       "punkte": [
        {
         "nr": 1,
         "was": "Bezug auf das Gespräch",
         "hinweis": "Erinnern Sie an das Gespräch auf der Gewerbeschau."
        },
        {
         "nr": 2,
         "was": "Leistungen",
         "hinweis": "Beschreiben Sie, was Ihre Firma täglich anbietet."
        },
        {
         "nr": 3,
         "was": "Preis und Rabatt",
         "hinweis": "Nennen Sie den Preis und den Rabatt."
        },
        {
         "nr": 4,
         "was": "Lieferung",
         "hinweis": "Erklären Sie, wann und wie geliefert wird."
        },
        {
         "nr": 5,
         "was": "Probeessen",
         "hinweis": "Schlagen Sie ein kostenloses Probeessen vor."
        },
        {
         "nr": 6,
         "was": "Gültigkeit und Rückmeldung",
         "hinweis": "Nennen Sie die Gültigkeit und bitten Sie um eine Antwort."
        }
       ],
       "muster": "Sehr geehrte Frau Brenner,\nvielen Dank für das freundliche Gespräch an unserem Stand auf der Gewerbeschau. Wie besprochen, unterbreiten wir Ihnen gern ein Angebot für die tägliche Mittagsversorgung Ihrer Mitarbeiter.\nWir bieten jeden Tag zwei frisch gekochte Hauptgerichte an, davon immer eines vegetarisch, dazu einen Salat und ein Dessert. Unser Speiseplan wechselt wöchentlich, sodass sich kein Gericht innerhalb eines Monats wiederholt. Alle Speisen kochen wir täglich frisch in unserer eigenen Küche, überwiegend mit Zutaten aus der Region.\nDer Preis beträgt sieben Euro achtzig pro Mahlzeit. Bei einem Vertrag über ein Jahr gewähren wir Ihnen einen Rabatt von zehn Prozent. Die Abrechnung erfolgt monatlich.\nDie Lieferung erfolgt montags bis freitags zwischen elf Uhr dreißig und zwölf Uhr in Warmhalteboxen. Die Bestellung für die folgende Woche geben Sie bequem bis Donnerstag über unser Bestellportal auf.\nDamit Sie sich selbst von unserer Qualität überzeugen können, laden wir Sie zu einem kostenlosen Probeessen für zehn Personen ein. Einen passenden Termin stimmen wir gern telefonisch ab.\nDieses Angebot ist bis zum Ende des Monats gültig. Wir würden uns freuen, bald von Ihnen zu hören.\nMit freundlichen Grüßen\nJonas Albrecht\nKundenbetreuung, Tafelwerk Catering",
       "woerter": 190,
       "hilfen": [
        "Wie besprochen, unterbreiten wir Ihnen gern …",
        "Wir bieten jeden Tag …",
        "Der Preis beträgt …",
        "Bei einem Vertrag über … gewähren wir Ihnen …",
        "Die Lieferung erfolgt …",
        "Dieses Angebot ist bis … gültig."
       ],
       "erklaerung": "Ein Angebot an Neukunden muss verbindlich sein: genauer Preis, genaue Lieferzeiten und eine Frist. Das Muster greift die Wünsche der Kundin auf — Abwechslung, vegetarisch, fairer Preis — und zeigt so, dass zugehört wurde.",
       "rubrik": [
        {
         "t": "Inhalt: die sechs Leitpunkte",
         "h": "Sind alle sechs Punkte behandelt — mit Betreff, Anrede und Schluss?",
         "stufen": [
          {
           "w": 4,
           "t": "A",
           "d": "alle Punkte"
          },
          {
           "w": 3,
           "t": "B",
           "d": "fast alle"
          },
          {
           "w": 1,
           "t": "C",
           "d": "die Hälfte"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        },
        {
         "t": "Kommunikative Angemessenheit",
         "h": "Passt der Ton zum Geschäftsbrief? Ist der Text gut aufgebaut und verknüpft?",
         "stufen": [
          {
           "w": 8,
           "t": "A",
           "d": "voll angemessen"
          },
          {
           "w": 5,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 2,
           "t": "C",
           "d": "ansatzweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "Sprachliche Angemessenheit",
         "h": "Grammatik und Rechtschreibung — vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 8,
           "t": "A",
           "d": "kaum Fehler"
          },
          {
           "w": 5,
           "t": "B",
           "d": "einige Fehler"
          },
          {
           "w": 2,
           "t": "C",
           "d": "viele Fehler"
          },
          {
           "w": 0,
           "t": "D",
           "d": "schwer verständlich"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "platzhalter": "Schreib hier deinen Geschäftsbrief …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Drei Kriterien wie bei telc (Inhalt 4, Kommunikation 8, Sprache 8 Punkte). Die Stufen B und C sind eine Übungsschätzung."
      }
     ]
    },
    {
     "id": "tb2bs1r2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "id": "bbsa3",
       "situation": "Sie haben für Ihre Firma an einer Fachmesse teilgenommen. Ihr Abteilungsleiter bittet Sie um einen Bericht. Schreiben Sie ihm und gehen Sie auf alle sechs Leitpunkte ein.",
       "eingang": {
        "von": "Henrik Falk, Leitung Vertrieb",
        "betreff": "Bericht Fachmesse Gebäudetechnik",
        "text": "Hallo Frau Mendes, danke, dass Sie letzte Woche kurzfristig für Herrn Ott auf der Fachmesse eingesprungen sind. Ich muss der Geschäftsführung nächste Woche sagen, ob wir im kommenden Jahr wieder mit einem eigenen Stand teilnehmen. Bitte schicken Sie mir bis Freitag einen kurzen Bericht: Wie war die Messe insgesamt, mit wem haben Sie gesprochen, was hat die Konkurrenz gezeigt und gab es Probleme? Ihre persönliche Empfehlung interessiert mich besonders. Viele Grüße, Henrik Falk"
       },
       "sorte": "email",
       "an": "Herr Henrik Falk, Leitung Vertrieb",
       "betreff": "Bericht über die Fachmesse Gebäudetechnik",
       "punkte": [
        {
         "nr": 1,
         "was": "Allgemeiner Eindruck",
         "hinweis": "Beschreiben Sie die Messe insgesamt."
        },
        {
         "nr": 2,
         "was": "Gespräche mit Kunden",
         "hinweis": "Berichten Sie, mit wem Sie gesprochen haben."
        },
        {
         "nr": 3,
         "was": "Neue Kontakte",
         "hinweis": "Nennen Sie konkrete Ergebnisse."
        },
        {
         "nr": 4,
         "was": "Konkurrenz",
         "hinweis": "Was haben andere Firmen gezeigt?"
        },
        {
         "nr": 5,
         "was": "Probleme am Stand",
         "hinweis": "Gab es Schwierigkeiten?"
        },
        {
         "nr": 6,
         "was": "Empfehlung",
         "hinweis": "Sollte die Firma nächstes Jahr wieder teilnehmen?"
        }
       ],
       "muster": "Sehr geehrter Herr Falk,\nwie gewünscht sende ich Ihnen meinen Bericht über die Fachmesse Gebäudetechnik.\nInsgesamt war die Messe gut organisiert und deutlich besser besucht als im Vorjahr. Besonders am zweiten Tag war unser Stand fast durchgehend voll, sodass wir kaum Zeit für Pausen hatten.\nIch habe vor allem mit Planungsbüros und Hausverwaltungen gesprochen. Viele Besucher interessierten sich für unsere neue Steuerung für Heizungsanlagen, die sich per App bedienen lässt. Einige bestehende Kunden haben uns außerdem gutes Feedback zu unserem Service gegeben.\nKonkret haben wir siebenunddreißig neue Kontakte gewonnen. Drei Firmen haben bereits um ein Angebot gebeten, darunter eine große Wohnungsgesellschaft aus Bremen.\nWas die Konkurrenz betrifft, so fiel mir auf, dass fast alle Anbieter ihre Geräte mit Energiesparfunktionen bewerben. Einige boten außerdem kostenlose Schulungen für Handwerker an.\nLeider gab es auch Probleme: Unser Bildschirm fiel am ersten Tag mehrere Stunden aus, und mit nur zwei Personen war der Stand zeitweise unterbesetzt.\nIch empfehle daher, im nächsten Jahr wieder teilzunehmen, allerdings mit drei Mitarbeitern und einem technischen Notfallplan. Der Aufwand hat sich meiner Meinung nach eindeutig gelohnt.\nFür Fragen stehe ich Ihnen gern zur Verfügung.\nMit freundlichen Grüßen\nCarla Mendes\nVertrieb Innendienst",
       "woerter": 190,
       "hilfen": [
        "wie gewünscht sende ich Ihnen …",
        "Insgesamt war die Messe …",
        "Konkret haben wir … gewonnen.",
        "Was die Konkurrenz betrifft, so fiel mir auf, dass …",
        "Leider gab es auch Probleme: …",
        "Ich empfehle daher, …"
       ],
       "erklaerung": "Ein Bericht ist sachlich und konkret: Zahlen, Beispiele, Probleme. Die Empfehlung am Ende ist begründet und enthält einen Verbesserungsvorschlag — genau das braucht der Vorgesetzte für seine Entscheidung.",
       "rubrik": [
        {
         "t": "Inhalt: die sechs Leitpunkte",
         "h": "Sind alle sechs Punkte behandelt — mit Betreff, Anrede und Schluss?",
         "stufen": [
          {
           "w": 4,
           "t": "A",
           "d": "alle Punkte"
          },
          {
           "w": 3,
           "t": "B",
           "d": "fast alle"
          },
          {
           "w": 1,
           "t": "C",
           "d": "die Hälfte"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        },
        {
         "t": "Kommunikative Angemessenheit",
         "h": "Passt der Ton zum Geschäftsbrief? Ist der Text gut aufgebaut und verknüpft?",
         "stufen": [
          {
           "w": 8,
           "t": "A",
           "d": "voll angemessen"
          },
          {
           "w": 5,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 2,
           "t": "C",
           "d": "ansatzweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "Sprachliche Angemessenheit",
         "h": "Grammatik und Rechtschreibung — vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 8,
           "t": "A",
           "d": "kaum Fehler"
          },
          {
           "w": 5,
           "t": "B",
           "d": "einige Fehler"
          },
          {
           "w": 2,
           "t": "C",
           "d": "viele Fehler"
          },
          {
           "w": 0,
           "t": "D",
           "d": "schwer verständlich"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "platzhalter": "Schreib hier deinen Geschäftsbrief …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Drei Kriterien wie bei telc (Inhalt 4, Kommunikation 8, Sprache 8 Punkte). Die Stufen B und C sind eine Übungsschätzung."
      },
      {
       "id": "bbsa4",
       "situation": "Sie arbeiten im Kundenservice der Firma Wollenhaus Textil, die Bettwaren an Hotels liefert. Ein Kunde hat sich beschwert. Antworten Sie ihm und gehen Sie auf alle sechs Leitpunkte ein.",
       "eingang": {
        "von": "Stefan Akhtar, Hotel Lindenblick",
        "betreff": "Reklamation Auftrag Bettdecken",
        "text": "Sehr geehrte Damen und Herren, am Montag haben wir endlich die vierzig Bettdecken erhalten, die wir vor fünf Wochen bestellt hatten. Leider ist die Lieferung nicht nur zehn Tage zu spät gekommen, sondern auch falsch: Statt Decken in Übergröße haben wir Standardmaße bekommen. Da am Wochenende eine große Reisegruppe anreist, brauchen wir die richtigen Decken dringend. Ich erwarte eine schnelle Lösung und eine Erklärung, wie es zu diesem Fehler kommen konnte. Mit freundlichen Grüßen, Stefan Akhtar, Hausdirektor"
       },
       "sorte": "email",
       "an": "Herr Stefan Akhtar, Hotel Lindenblick",
       "betreff": "Ihre Reklamation zur Lieferung der Bettdecken",
       "punkte": [
        {
         "nr": 1,
         "was": "Entschuldigung",
         "hinweis": "Entschuldigen Sie sich für Verspätung und Fehler."
        },
        {
         "nr": 2,
         "was": "Ursache",
         "hinweis": "Erklären Sie, wie es zu dem Fehler kam."
        },
        {
         "nr": 3,
         "was": "Ersatzlieferung",
         "hinweis": "Nennen Sie eine schnelle Lösung."
        },
        {
         "nr": 4,
         "was": "Rücksendung",
         "hinweis": "Erklären Sie, was mit der falschen Ware passiert."
        },
        {
         "nr": 5,
         "was": "Entschädigung",
         "hinweis": "Bieten Sie dem Kunden etwas als Ausgleich an."
        },
        {
         "nr": 6,
         "was": "Ausblick",
         "hinweis": "Versichern Sie, dass sich der Fehler nicht wiederholt."
        }
       ],
       "muster": "Sehr geehrter Herr Akhtar,\nvielen Dank für Ihre Nachricht. Es tut uns sehr leid, dass die Bettdecken nicht nur verspätet, sondern auch in der falschen Größe bei Ihnen angekommen sind. Wir verstehen Ihren Ärger vollkommen, zumal Sie die Decken für eine große Reisegruppe dringend benötigen.\nNach unserer Prüfung ist der Fehler bei der Erfassung Ihres Auftrags entstanden: Ein Mitarbeiter hat versehentlich die Artikelnummer der Standardgröße eingegeben. Die Verspätung war die Folge eines Engpasses bei unserem Lieferanten.\nDie richtigen Decken in Übergröße sind bereits verpackt. Wir schicken sie heute noch per Expresslieferung, sodass Sie sie spätestens am Donnerstag erhalten, also rechtzeitig vor der Anreise Ihrer Gruppe.\nDie falschen Decken holt unser Fahrer bei der Lieferung direkt wieder ab. Sie müssen sie also weder verpacken noch selbst zurückschicken. Für Sie entstehen dabei selbstverständlich keine Kosten.\nAls kleine Entschädigung für die Unannehmlichkeiten schreiben wir Ihnen fünfzehn Prozent des Rechnungsbetrags gut.\nUm solche Fehler in Zukunft zu vermeiden, prüfen wir Großaufträge ab sofort zu zweit, bevor sie ins Lager gehen.\nWir hoffen, dass Sie uns weiterhin Ihr Vertrauen schenken.\nMit freundlichen Grüßen\nDaniela Kraus\nKundenservice, Wollenhaus Textil",
       "woerter": 190,
       "hilfen": [
        "Es tut uns sehr leid, dass …",
        "Nach unserer Prüfung ist der Fehler … entstanden.",
        "Wir schicken Ihnen umgehend …",
        "Für Sie entstehen dabei keine Kosten.",
        "Als kleine Entschädigung …",
        "Um solche Fehler in Zukunft zu vermeiden, …"
       ],
       "erklaerung": "Bei einer Reklamation zählt die Reihenfolge: erst Verständnis zeigen, dann sachlich erklären, dann eine konkrete Lösung mit Datum. Ausreden oder Schuldzuweisungen an den Kunden haben hier keinen Platz.",
       "rubrik": [
        {
         "t": "Inhalt: die sechs Leitpunkte",
         "h": "Sind alle sechs Punkte behandelt — mit Betreff, Anrede und Schluss?",
         "stufen": [
          {
           "w": 4,
           "t": "A",
           "d": "alle Punkte"
          },
          {
           "w": 3,
           "t": "B",
           "d": "fast alle"
          },
          {
           "w": 1,
           "t": "C",
           "d": "die Hälfte"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        },
        {
         "t": "Kommunikative Angemessenheit",
         "h": "Passt der Ton zum Geschäftsbrief? Ist der Text gut aufgebaut und verknüpft?",
         "stufen": [
          {
           "w": 8,
           "t": "A",
           "d": "voll angemessen"
          },
          {
           "w": 5,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 2,
           "t": "C",
           "d": "ansatzweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "Sprachliche Angemessenheit",
         "h": "Grammatik und Rechtschreibung — vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 8,
           "t": "A",
           "d": "kaum Fehler"
          },
          {
           "w": 5,
           "t": "B",
           "d": "einige Fehler"
          },
          {
           "w": 2,
           "t": "C",
           "d": "viele Fehler"
          },
          {
           "w": 0,
           "t": "D",
           "d": "schwer verständlich"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "platzhalter": "Schreib hier deinen Geschäftsbrief …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Drei Kriterien wie bei telc (Inhalt 4, Kommunikation 8, Sprache 8 Punkte). Die Stufen B und C sind eine Übungsschätzung."
      }
     ]
    },
    {
     "id": "tb2bs1r3",
     "titel": "Runde 3",
     "aufgaben": [
      {
       "id": "bbsa5",
       "situation": "Sie arbeiten in der Personalabteilung der Firma Bergmann Haustechnik. Die Geschäftsführung hat Ihnen einen Auftrag gegeben. Schreiben Sie die Einladung an alle Teamleiter und gehen Sie auf alle sechs Leitpunkte ein.",
       "eingang": {
        "von": "Volker Bergmann, Geschäftsführung",
        "betreff": "Schulung neue Zeiterfassung",
        "text": "Hallo Frau Nowak, ab dem ersten Februar arbeiten wir mit dem neuen digitalen System für die Zeiterfassung. Damit die Umstellung klappt, sollen zuerst alle Teamleiter geschult werden. Der Anbieter schickt am vierundzwanzigsten Januar eine Trainerin zu uns. Bitte laden Sie alle Teamleiter ein, organisieren Sie den großen Besprechungsraum und kümmern Sie sich um das Mittagessen. Die Teilnahme ist Pflicht. Wer an dem Tag wirklich nicht kann, soll sich direkt bei Ihnen melden. Danke und viele Grüße, Volker Bergmann"
       },
       "sorte": "email",
       "an": "alle Teamleiter der Firma Bergmann Haustechnik",
       "betreff": "Einladung zur Schulung „Neue Zeiterfassung“ am 24. Januar",
       "punkte": [
        {
         "nr": 1,
         "was": "Anlass",
         "hinweis": "Erklären Sie, warum die Schulung stattfindet."
        },
        {
         "nr": 2,
         "was": "Termin und Ort",
         "hinweis": "Nennen Sie Datum, Uhrzeit und Raum."
        },
        {
         "nr": 3,
         "was": "Inhalte",
         "hinweis": "Was lernen die Teilnehmer?"
        },
        {
         "nr": 4,
         "was": "Vorbereitung",
         "hinweis": "Was sollen die Teilnehmer mitbringen?"
        },
        {
         "nr": 5,
         "was": "Verpflegung",
         "hinweis": "Informieren Sie über das Essen."
        },
        {
         "nr": 6,
         "was": "Verhinderung",
         "hinweis": "Was tun, wenn jemand nicht kommen kann?"
        }
       ],
       "muster": "Liebe Teamleiter,\nwie Sie bereits wissen, stellen wir ab dem ersten Februar auf ein neues digitales System für die Zeiterfassung um. Damit die Umstellung reibungslos gelingt, laden wir alle Teamleiter zu einer Schulung ein.\nDie Schulung findet am vierundzwanzigsten Januar von neun bis sechzehn Uhr im großen Besprechungsraum im ersten Stock statt. Sie wird von einer Trainerin des Softwareanbieters geleitet.\nSie lernen, wie Sie Arbeitszeiten Ihres Teams prüfen, Urlaubsanträge freigeben und Fehler korrigieren. Am Nachmittag üben wir typische Fälle aus dem Alltag, zum Beispiel Überstunden und Krankmeldungen. Außerdem bleibt genug Zeit für Ihre Fragen.\nBitte bringen Sie Ihren Dienstlaptop mit und melden Sie sich vorher einmal mit den Zugangsdaten an, die Sie nächste Woche per E-Mail erhalten.\nFür das Mittagessen ist gesorgt. Wenn Sie vegetarisch essen oder eine Unverträglichkeit haben, geben Sie mir bitte bis Freitag Bescheid.\nDie Teilnahme ist für alle Teamleiter verpflichtend, da Sie das neue System später an Ihre Teams weitergeben. Falls Sie an diesem Tag aus wichtigen Gründen verhindert sind, melden Sie sich bitte direkt bei mir, damit wir einen Ersatztermin finden.\nIch freue mich auf einen gelungenen Schulungstag.\nViele Grüße\nAgnieszka Nowak\nPersonalabteilung",
       "woerter": 190,
       "hilfen": [
        "Wie Sie bereits wissen, …",
        "Damit die Umstellung reibungslos gelingt, …",
        "Die Schulung findet am … statt.",
        "Bitte bringen Sie … mit.",
        "Für das Mittagessen ist gesorgt.",
        "Falls Sie verhindert sind, …"
       ],
       "erklaerung": "Eine Einladung muss alle praktischen Fragen beantworten: wann, wo, was, was mitbringen, was tun bei Verhinderung. Weil es eine interne Rundmail ist, passt die persönlichere Anrede „Liebe Teamleiter“ und der Gruß „Viele Grüße“.",
       "rubrik": [
        {
         "t": "Inhalt: die sechs Leitpunkte",
         "h": "Sind alle sechs Punkte behandelt — mit Betreff, Anrede und Schluss?",
         "stufen": [
          {
           "w": 4,
           "t": "A",
           "d": "alle Punkte"
          },
          {
           "w": 3,
           "t": "B",
           "d": "fast alle"
          },
          {
           "w": 1,
           "t": "C",
           "d": "die Hälfte"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        },
        {
         "t": "Kommunikative Angemessenheit",
         "h": "Passt der Ton zum Geschäftsbrief? Ist der Text gut aufgebaut und verknüpft?",
         "stufen": [
          {
           "w": 8,
           "t": "A",
           "d": "voll angemessen"
          },
          {
           "w": 5,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 2,
           "t": "C",
           "d": "ansatzweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "Sprachliche Angemessenheit",
         "h": "Grammatik und Rechtschreibung — vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 8,
           "t": "A",
           "d": "kaum Fehler"
          },
          {
           "w": 5,
           "t": "B",
           "d": "einige Fehler"
          },
          {
           "w": 2,
           "t": "C",
           "d": "viele Fehler"
          },
          {
           "w": 0,
           "t": "D",
           "d": "schwer verständlich"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "platzhalter": "Schreib hier deinen Geschäftsbrief …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Drei Kriterien wie bei telc (Inhalt 4, Kommunikation 8, Sprache 8 Punkte). Die Stufen B und C sind eine Übungsschätzung."
      },
      {
       "id": "bbsa6",
       "situation": "Sie leiten bei der Firma Nordlicht Handel das Projekt „Neues Kassensystem“ für die Filialen. Ein Mitglied der Geschäftsführung bittet um einen Bericht über den Stand. Schreiben Sie ihr und gehen Sie auf alle sechs Leitpunkte ein.",
       "eingang": {
        "von": "Dr. Katrin Wolters, Geschäftsführung",
        "betreff": "Stand Projekt Kassensystem?",
        "text": "Hallo Herr Petrović, nächste Woche trifft sich der Aufsichtsrat, und ich möchte dort über unser Projekt „Neues Kassensystem“ berichten. Bitte schicken Sie mir eine kurze Zusammenfassung: Was ist bisher passiert, wo stehen wir, und gibt es Probleme? Mich interessiert natürlich auch, ob wir im Budget bleiben und wann alle Filialen umgestellt sein werden. Wenn Sie Unterstützung brauchen, sagen Sie es bitte offen. Ich möchte im Aufsichtsrat ein realistisches Bild zeichnen. Viele Grüße, Katrin Wolters"
       },
       "sorte": "email",
       "an": "Frau Dr. Katrin Wolters, Geschäftsführung",
       "betreff": "Projektstand „Neues Kassensystem“",
       "punkte": [
        {
         "nr": 1,
         "was": "Bisheriger Verlauf",
         "hinweis": "Fassen Sie zusammen, was bisher passiert ist."
        },
        {
         "nr": 2,
         "was": "Erreichte Ziele",
         "hinweis": "Was funktioniert schon?"
        },
        {
         "nr": 3,
         "was": "Schwierigkeiten",
         "hinweis": "Welche Probleme gibt es?"
        },
        {
         "nr": 4,
         "was": "Kosten",
         "hinweis": "Bleibt das Projekt im Budget?"
        },
        {
         "nr": 5,
         "was": "Nächste Schritte",
         "hinweis": "Was passiert als Nächstes?"
        },
        {
         "nr": 6,
         "was": "Unterstützung und Abschluss",
         "hinweis": "Wann ist das Projekt fertig, und was brauchen Sie dafür?"
        }
       ],
       "muster": "Sehr geehrte Frau Dr. Wolters,\ngern gebe ich Ihnen einen Überblick über den aktuellen Stand unseres Projekts.\nNach der Auswahl des Anbieters im Frühjahr haben wir das neue Kassensystem zunächst in zwei Testfilialen eingeführt. Seit September läuft es dort im normalen Betrieb.\nDie Ergebnisse sind sehr positiv: Der Bezahlvorgang ist im Durchschnitt deutlich schneller, und die Tagesabrechnung dauert nur noch wenige Minuten statt einer halben Stunde. Inzwischen sind elf von insgesamt achtzehn Filialen umgestellt, und auch die Rückmeldungen der Mitarbeiter sind überwiegend positiv.\nSchwierigkeiten gab es vor allem bei der Verbindung mit unserem alten Warenwirtschaftsprogramm. Dadurch hat sich die Umstellung um etwa drei Wochen verzögert.\nWas die Kosten betrifft, so liegen wir trotz der Verzögerung noch im Rahmen des Budgets, da die Schulungen günstiger waren als geplant.\nAls Nächstes stellen wir die übrigen sieben Filialen um, jeweils zwei pro Woche. Parallel schulen wir die Mitarbeiter vor Ort, jeweils einen Tag vor der Umstellung.\nWenn alles nach Plan läuft, ist das Projekt Mitte Dezember abgeschlossen. Dafür wäre es hilfreich, wenn mich die IT-Abteilung in dieser Zeit mit einer zusätzlichen Person unterstützen könnte.\nMit freundlichen Grüßen\nMarko Petrović\nProjektleitung",
       "woerter": 190,
       "hilfen": [
        "gern gebe ich Ihnen einen Überblick über …",
        "Nach … haben wir zunächst …",
        "Die Ergebnisse sind …",
        "Schwierigkeiten gab es vor allem bei …",
        "Was die Kosten betrifft, so …",
        "Wenn alles nach Plan läuft, …"
       ],
       "erklaerung": "Ein Projektbericht folgt der Zeit: Rückblick, Gegenwart, Ausblick. Das Muster nennt auch Probleme offen und verbindet sie gleich mit einer Lösung und einer konkreten Bitte — so wirkt der Bericht ehrlich und professionell.",
       "rubrik": [
        {
         "t": "Inhalt: die sechs Leitpunkte",
         "h": "Sind alle sechs Punkte behandelt — mit Betreff, Anrede und Schluss?",
         "stufen": [
          {
           "w": 4,
           "t": "A",
           "d": "alle Punkte"
          },
          {
           "w": 3,
           "t": "B",
           "d": "fast alle"
          },
          {
           "w": 1,
           "t": "C",
           "d": "die Hälfte"
          },
          {
           "w": 0,
           "t": "D",
           "d": "kaum"
          }
         ]
        },
        {
         "t": "Kommunikative Angemessenheit",
         "h": "Passt der Ton zum Geschäftsbrief? Ist der Text gut aufgebaut und verknüpft?",
         "stufen": [
          {
           "w": 8,
           "t": "A",
           "d": "voll angemessen"
          },
          {
           "w": 5,
           "t": "B",
           "d": "weitgehend"
          },
          {
           "w": 2,
           "t": "C",
           "d": "ansatzweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "Sprachliche Angemessenheit",
         "h": "Grammatik und Rechtschreibung — vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 8,
           "t": "A",
           "d": "kaum Fehler"
          },
          {
           "w": 5,
           "t": "B",
           "d": "einige Fehler"
          },
          {
           "w": 2,
           "t": "C",
           "d": "viele Fehler"
          },
          {
           "w": 0,
           "t": "D",
           "d": "schwer verständlich"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "platzhalter": "Schreib hier deinen Geschäftsbrief …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Drei Kriterien wie bei telc (Inhalt 4, Kommunikation 8, Sprache 8 Punkte). Die Stufen B und C sind eine Übungsschätzung."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "mitteilung",
   "name": "Teil 2: Kurze Nachricht",
   "kurz": "60–80 Wörter, kurz und vollständig",
   "was": "Eine kurze E-Mail oder Notiz an einen Kollegen oder Dienstleister: drei Dinge müssen drin sein.",
   "tipp": "Knapp heißt nicht unhöflich: Dank, Anliegen, Frist.",
   "zeichen": "📝",
   "farbe": "gold",
   "punkte": 5,
   "runden": [
    {
     "id": "tb2bs2r1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "id": "bbsk1",
       "situation": "Ein Kollege bittet Sie, für ihn einen Kundentermin zu übernehmen. Antworten Sie ihm kurz.",
       "eingang": {
        "von": "Lukas Brandt",
        "betreff": "Kannst du Donnerstag übernehmen?",
        "text": "Hi, ich muss Donnerstag spontan zu einer Baustelle nach Hamm. Könntest du um zehn Uhr die Präsentation bei Firma Ostermann für mich übernehmen? Die Folien liegen im Projektordner. Sag mir bitte bis morgen Bescheid. Danke, Lukas"
       },
       "sorte": "email",
       "an": "Lukas Brandt",
       "betreff": "Re: Kannst du Donnerstag übernehmen?",
       "punkte": [
        {
         "nr": 1,
         "was": "Zusage",
         "hinweis": "Sagen Sie zu."
        },
        {
         "nr": 2,
         "was": "Vorbereitung",
         "hinweis": "Wann bereiten Sie sich vor?"
        },
        {
         "nr": 3,
         "was": "Rückfrage",
         "hinweis": "Fragen Sie nach einer wichtigen Information."
        }
       ],
       "muster": "Hallo Lukas,\nkein Problem, ich übernehme die Präsentation am Donnerstag bei Ostermann gern. Ich schaue mir die Folien morgen Nachmittag in Ruhe an und melde mich, falls etwas unklar ist. Eine Frage habe ich noch: Wer nimmt auf Kundenseite teil, und gibt es ein Thema, bei dem ich vorsichtig sein sollte? Dann kann ich mich besser vorbereiten.\nViel Erfolg auf der Baustelle!\nViele Grüße\nNadine",
       "woerter": 70,
       "hilfen": [
        "kein Problem, ich übernehme …",
        "Ich schaue mir … an.",
        "Eine Frage habe ich noch: …",
        "Dann kann ich mich besser vorbereiten."
       ],
       "erklaerung": "Drei Leitpunkte, drei kurze Absätze: Zusage, Plan, Rückfrage. Unter Kollegen mit Du darf der Ton locker sein, aber die Information muss vollständig sein.",
       "rubrik": [
        {
         "t": "Gesamteindruck",
         "h": "Ist die Nachricht vollständig (alle Punkte), knapp, freundlich und sprachlich in Ordnung?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 3,
           "t": "B",
           "d": "erfüllt"
          },
          {
           "w": 1,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 5,
       "keineKI": true,
       "rubrikTitel": "Bewerte deine Nachricht",
       "rubrikHinweis": "Bei telc wird Teil 2 als Ganzes bewertet: A = 5, B = 3, C = 1, D = 0 Punkte."
      },
      {
       "id": "bbsk2",
       "situation": "Sie sind krank und können morgen nicht arbeiten. Schreiben Sie Ihrer Kollegin, die Sie vertreten soll.",
       "eingang": {
        "von": "Teamkalender",
        "betreff": "Ihre Termine morgen",
        "text": "Neun Uhr: Telefonat mit Herrn Jablonski, Rechnung Nummer achtzehn. Elf Uhr: Teambesprechung. Vierzehn Uhr: Angebot Firma Kunert fertigstellen, Frist morgen. Sechzehn Uhr: Bewerbungsgespräch, abgesagt. Notiz: Unterlagen Jablonski und Entwurf Kunert liegen im Ordner „Kunden aktuell“."
       },
       "sorte": "email",
       "an": "Ihre Kollegin Mira Hartmann",
       "betreff": "Krankmeldung – bitte übernimm morgen zwei Dinge",
       "punkte": [
        {
         "nr": 1,
         "was": "Information",
         "hinweis": "Teilen Sie mit, dass Sie krank sind."
        },
        {
         "nr": 2,
         "was": "Dringende Aufgaben",
         "hinweis": "Was muss morgen unbedingt erledigt werden?"
        },
        {
         "nr": 3,
         "was": "Unterlagen",
         "hinweis": "Wo findet die Kollegin alles?"
        }
       ],
       "muster": "Hallo Mira,\nleider habe ich Fieber und bleibe morgen zu Hause. Könntest du bitte zwei Dinge für mich übernehmen? Um neun Uhr ruft Herr Jablonski wegen seiner Rechnung an. Und das Angebot für Firma Kunert muss morgen raus. Die Rechnung und den fast fertigen Entwurf findest du im Ordner „Kunden aktuell“. Die Teambesprechung lasse ich ausfallen.\nVielen Dank und viele Grüße\nTarek",
       "woerter": 70,
       "hilfen": [
        "leider bin ich krank und …",
        "Könntest du bitte … übernehmen?",
        "… muss morgen unbedingt raus.",
        "Die Unterlagen findest du …"
       ],
       "erklaerung": "Aus der Terminliste wählt das Muster nur das Dringende aus. Genau das ist die Kunst in Teil 2: knapp bleiben und trotzdem nichts Wichtiges vergessen.",
       "rubrik": [
        {
         "t": "Gesamteindruck",
         "h": "Ist die Nachricht vollständig (alle Punkte), knapp, freundlich und sprachlich in Ordnung?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 3,
           "t": "B",
           "d": "erfüllt"
          },
          {
           "w": 1,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 5,
       "keineKI": true,
       "rubrikTitel": "Bewerte deine Nachricht",
       "rubrikHinweis": "Bei telc wird Teil 2 als Ganzes bewertet: A = 5, B = 3, C = 1, D = 0 Punkte."
      }
     ]
    },
    {
     "id": "tb2bs2r2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "id": "bbsk3",
       "situation": "Ihr Kollege ist in einem Termin. In dieser Zeit ruft ein Kunde an. Schreiben Sie ihm eine Telefonnotiz.",
       "eingang": {
        "von": "Andreas Kühn",
        "betreff": "Bin bis zwei Uhr im Termin",
        "text": "Hallo, ich bin bis vierzehn Uhr beim Lieferanten. Falls Herr Yilmaz von der Druckerei Sommerfeld anruft: Es geht um die Broschüren für die Messe. Notier mir bitte, was er will. Danke!"
       },
       "sorte": "email",
       "an": "Andreas Kühn",
       "betreff": "Anruf Herr Yilmaz, Druckerei Sommerfeld",
       "punkte": [
        {
         "nr": 1,
         "was": "Wer und wann",
         "hinweis": "Wer hat wann angerufen?"
        },
        {
         "nr": 2,
         "was": "Anliegen",
         "hinweis": "Was war das Problem?"
        },
        {
         "nr": 3,
         "was": "Rückruf",
         "hinweis": "Was soll der Kollege tun?"
        }
       ],
       "muster": "Hallo Andreas,\nHerr Yilmaz von der Druckerei Sommerfeld hat um halb zwölf angerufen. Bei den Messebroschüren gibt es ein Problem: Das Papier, das wir ausgesucht haben, ist erst in zwei Wochen lieferbar. Er schlägt eine etwas dünnere Sorte vor, damit die Broschüren rechtzeitig fertig werden. Bitte ruf ihn heute bis siebzehn Uhr zurück, sonst verschiebt sich der Druck um eine Woche.\nViele Grüße\nPaula",
       "woerter": 70,
       "hilfen": [
        "… hat um … angerufen.",
        "Es geht um …",
        "Er schlägt vor, …",
        "Bitte ruf ihn bis … zurück."
       ],
       "erklaerung": "Eine Telefonnotiz beantwortet vier Fragen: Wer, wann, worum geht es und was ist zu tun. Die Frist am Ende macht die Notiz handlungsfähig.",
       "rubrik": [
        {
         "t": "Gesamteindruck",
         "h": "Ist die Nachricht vollständig (alle Punkte), knapp, freundlich und sprachlich in Ordnung?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 3,
           "t": "B",
           "d": "erfüllt"
          },
          {
           "w": 1,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 5,
       "keineKI": true,
       "rubrikTitel": "Bewerte deine Nachricht",
       "rubrikHinweis": "Bei telc wird Teil 2 als Ganzes bewertet: A = 5, B = 3, C = 1, D = 0 Punkte."
      },
      {
       "id": "bbsk4",
       "situation": "Die Büroleitung bittet Sie, Ihr Team über neue Regeln in der Teeküche zu informieren. Schreiben Sie eine kurze Rundmail.",
       "eingang": {
        "von": "Gisela Hornbach, Büroleitung",
        "betreff": "Teeküche",
        "text": "Liebe Teamleiter, leider sieht die Teeküche oft schlimm aus. Ab nächster Woche gilt: benutztes Geschirr in die Spülmaschine, Kühlschrank jeden Freitag leeren, Spülmaschine abwechselnd ausräumen. Bitte informiert eure Teams und erstellt einen Plan. Danke!"
       },
       "sorte": "email",
       "an": "Ihr Team",
       "betreff": "Neue Regeln für die Teeküche ab Montag",
       "punkte": [
        {
         "nr": 1,
         "was": "Anlass",
         "hinweis": "Warum gibt es neue Regeln?"
        },
        {
         "nr": 2,
         "was": "Regeln",
         "hinweis": "Nennen Sie die wichtigsten Regeln."
        },
        {
         "nr": 3,
         "was": "Plan",
         "hinweis": "Wie wird die Arbeit verteilt?"
        }
       ],
       "muster": "Hallo zusammen,\ndie Büroleitung hat uns gebeten, besser auf die Teeküche zu achten. Ab Montag gelten deshalb drei Regeln: Benutztes Geschirr kommt direkt in die Spülmaschine, der Kühlschrank wird jeden Freitag geleert, und wir räumen die Spülmaschine abwechselnd aus. Den Plan, wer in welcher Woche mit dem Ausräumen dran ist, hänge ich morgen an die Kühlschranktür. Danke fürs Mitmachen!\nViele Grüße\nOlga",
       "woerter": 70,
       "hilfen": [
        "die Büroleitung hat uns gebeten, …",
        "Ab Montag gelten deshalb …",
        "Den Plan hänge ich …",
        "Danke fürs Mitmachen!"
       ],
       "erklaerung": "Das Muster bündelt die Regeln in einem Satz mit Doppelpunkt. So bleibt die Rundmail kurz und trotzdem vollständig.",
       "rubrik": [
        {
         "t": "Gesamteindruck",
         "h": "Ist die Nachricht vollständig (alle Punkte), knapp, freundlich und sprachlich in Ordnung?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 3,
           "t": "B",
           "d": "erfüllt"
          },
          {
           "w": 1,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 5,
       "keineKI": true,
       "rubrikTitel": "Bewerte deine Nachricht",
       "rubrikHinweis": "Bei telc wird Teil 2 als Ganzes bewertet: A = 5, B = 3, C = 1, D = 0 Punkte."
      }
     ]
    },
    {
     "id": "tb2bs2r3",
     "titel": "Runde 3",
     "aufgaben": [
      {
       "id": "bbsk5",
       "situation": "Sie müssen eine Besprechung verschieben. Schreiben Sie den Teilnehmern eine kurze E-Mail.",
       "eingang": {
        "von": "Ihr Kalender",
        "betreff": "Konflikt",
        "text": "Mittwoch, zehn Uhr: Abstimmung Marketingplan, Raum Elbe, fünf Teilnehmer. Mittwoch, neun Uhr dreißig bis elf Uhr: Audit durch den Kunden Brockmann, Ihre Teilnahme ist Pflicht. Mittwoch, vierzehn Uhr: frei. Donnerstag: ganztägig frei."
       },
       "sorte": "email",
       "an": "Die Teilnehmer der Abstimmung Marketingplan",
       "betreff": "Verschiebung: Abstimmung Marketingplan",
       "punkte": [
        {
         "nr": 1,
         "was": "Grund",
         "hinweis": "Warum müssen Sie verschieben?"
        },
        {
         "nr": 2,
         "was": "Neuer Termin",
         "hinweis": "Schlagen Sie einen neuen Termin vor."
        },
        {
         "nr": 3,
         "was": "Bitte",
         "hinweis": "Worum bitten Sie die Teilnehmer?"
        }
       ],
       "muster": "Hallo zusammen,\nleider muss ich unsere Abstimmung zum Marketingplan am Mittwoch verschieben, weil ich zur gleichen Zeit beim Audit des Kunden Brockmann dabei sein muss. Als neuen Termin schlage ich Mittwoch um vierzehn Uhr vor, wieder im Raum Elbe. Bitte gebt mir bis morgen Mittag kurz Bescheid, ob euch das passt. Sonst suchen wir gemeinsam einen Termin am Donnerstag.\nDanke für euer Verständnis!\nBenedikt",
       "woerter": 70,
       "hilfen": [
        "leider muss ich … verschieben, weil …",
        "Als neuen Termin schlage ich … vor.",
        "Bitte gebt mir bis … Bescheid, ob …",
        "Danke für euer Verständnis!"
       ],
       "erklaerung": "Grund, Alternative, Bitte um Rückmeldung — und für den Notfall ein Plan B. So muss niemand nachfragen.",
       "rubrik": [
        {
         "t": "Gesamteindruck",
         "h": "Ist die Nachricht vollständig (alle Punkte), knapp, freundlich und sprachlich in Ordnung?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 3,
           "t": "B",
           "d": "erfüllt"
          },
          {
           "w": 1,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 5,
       "keineKI": true,
       "rubrikTitel": "Bewerte deine Nachricht",
       "rubrikHinweis": "Bei telc wird Teil 2 als Ganzes bewertet: A = 5, B = 3, C = 1, D = 0 Punkte."
      },
      {
       "id": "bbsk6",
       "situation": "Sie haben eine Einladung zum Betriebsausflug bekommen. Antworten Sie kurz.",
       "eingang": {
        "von": "Betriebsrat",
        "betreff": "Betriebsausflug am 6. September",
        "text": "Wir fahren mit dem Schiff nach Königswinter, danach gibt es ein Grillbuffet. Bitte meldet euch bis Ende Juli an und sagt uns, ob ihr besondere Wünsche beim Essen habt. Wer mit dem Auto zur Anlegestelle kommt, kann gern andere mitnehmen."
       },
       "sorte": "email",
       "an": "Den Betriebsrat",
       "betreff": "Anmeldung Betriebsausflug",
       "punkte": [
        {
         "nr": 1,
         "was": "Anmeldung",
         "hinweis": "Melden Sie sich an."
        },
        {
         "nr": 2,
         "was": "Essen",
         "hinweis": "Nennen Sie einen Wunsch beim Essen."
        },
        {
         "nr": 3,
         "was": "Fahrgemeinschaft",
         "hinweis": "Bieten Sie eine Mitfahrgelegenheit an oder fragen Sie danach."
        }
       ],
       "muster": "Liebes Betriebsratsteam,\nvielen Dank für die Einladung, ich bin sehr gern beim Ausflug dabei! Da ich mich vegetarisch ernähre, wäre es schön, wenn es beim Grillbuffet auch Gemüsespieße oder Grillkäse gäbe. Außerdem komme ich mit dem Auto zur Anlegestelle und habe noch drei freie Plätze. Wer aus dem Lager oder der Buchhaltung mitfahren möchte, kann sich gern direkt bei mir melden.\nViele Grüße\nDominik",
       "woerter": 70,
       "hilfen": [
        "vielen Dank für die Einladung, ich bin gern dabei.",
        "Da ich …, wäre es schön, wenn …",
        "Ich habe noch … freie Plätze.",
        "Wer mitfahren möchte, kann sich …"
       ],
       "erklaerung": "Alle drei Punkte werden mit einem Satz plus kurzer Begründung beantwortet. Der Konjunktiv „wäre es schön, wenn“ macht den Wunsch höflich.",
       "rubrik": [
        {
         "t": "Gesamteindruck",
         "h": "Ist die Nachricht vollständig (alle Punkte), knapp, freundlich und sprachlich in Ordnung?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "voll erfüllt"
          },
          {
           "w": 3,
           "t": "B",
           "d": "erfüllt"
          },
          {
           "w": 1,
           "t": "C",
           "d": "teilweise"
          },
          {
           "w": 0,
           "t": "D",
           "d": "nicht erfüllt"
          }
         ]
        }
       ],
       "max": 5,
       "keineKI": true,
       "rubrikTitel": "Bewerte deine Nachricht",
       "rubrikHinweis": "Bei telc wird Teil 2 als Ganzes bewertet: A = 5, B = 3, C = 1, D = 0 Punkte."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb2bsl1",
   "titel": "Prüfungslauf 1",
   "minuten": 60,
   "aufgaben": [
    {
     "id": "bbsa7",
     "situation": "Sie arbeiten bei der Möbelfabrik Haselbach. Ein wichtiger Kunde beschwert sich über einen Lieferverzug. Nehmen Sie Stellung und gehen Sie auf alle sechs Leitpunkte ein.",
     "eingang": {
      "von": "Ingrid Sørensen, Einkauf Wohnhaus Kerner",
      "betreff": "Lieferverzug Auftrag Esszimmerstühle",
      "text": "Sehr geehrte Damen und Herren, laut Auftragsbestätigung hätten wir die zweihundert Esszimmerstühle des Modells „Lina“ bereits Anfang des Monats erhalten sollen. Bis heute ist nichts angekommen, und auf zwei Anrufe hat niemand reagiert. Unsere Herbstaktion beginnt in drei Wochen, die Werbung ist schon gedruckt. Ich bitte Sie um eine Erklärung und einen verbindlichen Liefertermin. Sollten wir die Stühle nicht rechtzeitig erhalten, müssen wir den Auftrag leider stornieren. Mit freundlichen Grüßen, Ingrid Sørensen"
     },
     "sorte": "email",
     "an": "Frau Ingrid Sørensen, Einkauf Wohnhaus Kerner",
     "betreff": "Ihr Auftrag Esszimmerstühle „Lina“ – Stellungnahme und neuer Liefertermin",
     "punkte": [
      {
       "nr": 1,
       "was": "Bedauern",
       "hinweis": "Entschuldigen Sie sich für die Verspätung und die fehlende Rückmeldung."
      },
      {
       "nr": 2,
       "was": "Grund",
       "hinweis": "Erklären Sie, warum es zu der Verzögerung kam."
      },
      {
       "nr": 3,
       "was": "Neuer Liefertermin",
       "hinweis": "Nennen Sie einen verbindlichen Termin."
      },
      {
       "nr": 4,
       "was": "Teillieferung",
       "hinweis": "Bieten Sie eine schnellere Teillieferung an."
      },
      {
       "nr": 5,
       "was": "Entgegenkommen",
       "hinweis": "Bieten Sie einen Ausgleich an."
      },
      {
       "nr": 6,
       "was": "Bitte",
       "hinweis": "Bitten Sie die Kundin, den Auftrag nicht zu stornieren."
      }
     ],
     "muster": "Sehr geehrte Frau Sørensen,\nzunächst möchte ich mich bei Ihnen aufrichtig für die verspätete Lieferung entschuldigen. Ebenso bedauern wir, dass Sie auf Ihre Anrufe keine Antwort erhalten haben. Das hätte nicht passieren dürfen.\nGrund für die Verzögerung ist ein Ausfall bei unserem Holzlieferanten. Wegen eines Brandes in seinem Sägewerk konnte er uns mehrere Wochen lang kein Buchenholz liefern. Inzwischen haben wir einen zweiten Lieferanten gefunden, und die Produktion läuft wieder mit voller Kraft, auch am Wochenende.\nIch kann Ihnen verbindlich zusagen, dass alle zweihundert Stühle bis spätestens zum fünfzehnten des Monats bei Ihnen eintreffen.\nDa Ihre Herbstaktion bald beginnt, bieten wir Ihnen außerdem eine Teillieferung an: Achtzig Stühle könnten wir bereits Anfang nächster Woche schicken.\nAls Ausgleich für die Unannehmlichkeiten übernehmen wir die Lieferkosten vollständig und gewähren Ihnen auf diesen Auftrag einen Nachlass von acht Prozent.\nWir schätzen die langjährige Zusammenarbeit mit Ihrem Haus sehr. Deshalb bitte ich Sie, den Auftrag nicht zu stornieren und uns die Gelegenheit zu geben, unser Versprechen einzuhalten.\nFür Rückfragen erreichen Sie mich ab sofort direkt unter meiner Durchwahl.\nMit freundlichen Grüßen\nRalf Ehrlich\nLeitung Kundenservice",
     "woerter": 190,
     "hilfen": [
      "Zunächst möchte ich mich aufrichtig entschuldigen für …",
      "Grund für die Verzögerung ist …",
      "Ich kann Ihnen verbindlich zusagen, dass …",
      "Wir bieten Ihnen außerdem an, …",
      "Als Ausgleich für die Unannehmlichkeiten …",
      "Deshalb bitte ich Sie, …"
     ],
     "erklaerung": "Eine Stellungnahme erklärt, ohne sich herauszureden. Das Muster nimmt die Drohung mit der Stornierung ernst und macht ein Angebot, das genau auf das Problem der Kundin passt: die Herbstaktion in drei Wochen.",
     "rubrik": [
      {
       "t": "Inhalt: die sechs Leitpunkte",
       "h": "Sind alle sechs Punkte behandelt — mit Betreff, Anrede und Schluss?",
       "stufen": [
        {
         "w": 4,
         "t": "A",
         "d": "alle Punkte"
        },
        {
         "w": 3,
         "t": "B",
         "d": "fast alle"
        },
        {
         "w": 1,
         "t": "C",
         "d": "die Hälfte"
        },
        {
         "w": 0,
         "t": "D",
         "d": "kaum"
        }
       ]
      },
      {
       "t": "Kommunikative Angemessenheit",
       "h": "Passt der Ton zum Geschäftsbrief? Ist der Text gut aufgebaut und verknüpft?",
       "stufen": [
        {
         "w": 8,
         "t": "A",
         "d": "voll angemessen"
        },
        {
         "w": 5,
         "t": "B",
         "d": "weitgehend"
        },
        {
         "w": 2,
         "t": "C",
         "d": "ansatzweise"
        },
        {
         "w": 0,
         "t": "D",
         "d": "nicht"
        }
       ]
      },
      {
       "t": "Sprachliche Angemessenheit",
       "h": "Grammatik und Rechtschreibung — vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 8,
         "t": "A",
         "d": "kaum Fehler"
        },
        {
         "w": 5,
         "t": "B",
         "d": "einige Fehler"
        },
        {
         "w": 2,
         "t": "C",
         "d": "viele Fehler"
        },
        {
         "w": 0,
         "t": "D",
         "d": "schwer verständlich"
        }
       ]
      }
     ],
     "max": 20,
     "keineKI": true,
     "platzhalter": "Schreib hier deinen Geschäftsbrief …",
     "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
     "rubrikHinweis": "Drei Kriterien wie bei telc (Inhalt 4, Kommunikation 8, Sprache 8 Punkte). Die Stufen B und C sind eine Übungsschätzung."
    },
    {
     "id": "bbsk7",
     "situation": "Eine Kollegin hat Ihnen eine Liste mit Büromaterial geschickt. Schreiben Sie eine kurze Bestellung an die Einkaufsabteilung.",
     "eingang": {
      "von": "Elif Arslan",
      "betreff": "Material für die neuen Kollegen",
      "text": "Kannst du bitte bestellen? Für die drei Neuen ab dem Ersten: drei Headsets, drei Dockingstationen, Notizblöcke, Kugelschreiber. Ganz wichtig: Die Headsets brauchen sie schon am ersten Tag wegen der Hotline-Schulung."
     },
     "sorte": "email",
     "an": "Einkaufsabteilung",
     "betreff": "Bestellung Büromaterial für drei neue Mitarbeiter",
     "punkte": [
      {
       "nr": 1,
       "was": "Anlass",
       "hinweis": "Für wen und wofür wird bestellt?"
      },
      {
       "nr": 2,
       "was": "Bestellung",
       "hinweis": "Was genau brauchen Sie?"
      },
      {
       "nr": 3,
       "was": "Termin",
       "hinweis": "Bis wann muss was da sein?"
      }
     ],
     "muster": "Hallo liebes Einkaufsteam,\nzum Ersten fangen bei uns im Kundenservice drei neue Mitarbeiter an. Für ihre Arbeitsplätze bräuchten wir bitte drei Headsets und drei Dockingstationen, außerdem Notizblöcke und Kugelschreiber. Besonders wichtig sind die Headsets: Die neuen Kollegen haben gleich am ersten Tag eine Schulung an der Hotline. Wäre eine Lieferung bis zum Freitag davor möglich?\nVielen Dank und viele Grüße\nHannes",
     "woerter": 70,
     "hilfen": [
      "Zum … fangen … an.",
      "Für … bräuchten wir bitte …",
      "Besonders wichtig ist …",
      "Wäre eine Lieferung bis … möglich?"
     ],
     "erklaerung": "Das Muster macht aus der Stichwortliste ganze Sätze und hebt das Dringende hervor. Der Konjunktiv „bräuchten“ und „wäre … möglich“ wirkt höflich, ohne lang zu werden.",
     "rubrik": [
      {
       "t": "Gesamteindruck",
       "h": "Ist die Nachricht vollständig (alle Punkte), knapp, freundlich und sprachlich in Ordnung?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 3,
         "t": "B",
         "d": "erfüllt"
        },
        {
         "w": 1,
         "t": "C",
         "d": "teilweise"
        },
        {
         "w": 0,
         "t": "D",
         "d": "nicht erfüllt"
        }
       ]
      }
     ],
     "max": 5,
     "keineKI": true,
     "rubrikTitel": "Bewerte deine Nachricht",
     "rubrikHinweis": "Bei telc wird Teil 2 als Ganzes bewertet: A = 5, B = 3, C = 1, D = 0 Punkte."
    }
   ]
  },
  {
   "id": "tb2bsl2",
   "titel": "Prüfungslauf 2",
   "minuten": 60,
   "aufgaben": [
    {
     "id": "bbsa8",
     "situation": "Sie arbeiten im Sekretariat der Firma Weidner Software. Ihre Chefin hat Sie gebeten, ein Hotel für eine Firmenveranstaltung anzufragen. Schreiben Sie an das Hotel und gehen Sie auf alle sechs Leitpunkte ein.",
     "eingang": {
      "von": "Sabine Weidner, Geschäftsführung",
      "betreff": "Klausurtagung im Oktober",
      "text": "Hallo Herr Demir, wir planen für unser Leitungsteam eine zweitägige Klausurtagung, am liebsten Mitte Oktober. Wir sind fünfundzwanzig Personen und brauchen Einzelzimmer für eine Nacht. Kannst du beim Hotel Seeblick am Mühlensee anfragen? Wir brauchen einen Tagungsraum mit Beamer und zwei kleinere Räume für Gruppenarbeit. Vollpension wäre ideal, am ersten Abend gern ein gemeinsames Abendessen auf der Terrasse. Bitte frag auch nach dem Preis pro Person und ob es genug Parkplätze gibt. Das Angebot brauche ich bis Ende des Monats. Danke! Sabine"
     },
     "sorte": "email",
     "an": "Hotel Seeblick, Bankettabteilung",
     "betreff": "Anfrage für eine Klausurtagung im Oktober",
     "punkte": [
      {
       "nr": 1,
       "was": "Firma und Anlass",
       "hinweis": "Stellen Sie Ihre Firma und den Anlass kurz vor."
      },
      {
       "nr": 2,
       "was": "Zeitraum und Personenzahl",
       "hinweis": "Nennen Sie Termin und Teilnehmerzahl."
      },
      {
       "nr": 3,
       "was": "Zimmer",
       "hinweis": "Welche Zimmer brauchen Sie?"
      },
      {
       "nr": 4,
       "was": "Tagungsräume und Technik",
       "hinweis": "Beschreiben Sie, welche Räume Sie benötigen."
      },
      {
       "nr": 5,
       "was": "Verpflegung",
       "hinweis": "Welche Verpflegung wünschen Sie?"
      },
      {
       "nr": 6,
       "was": "Angebot",
       "hinweis": "Bitten Sie um ein Angebot bis zu einem bestimmten Datum."
      }
     ],
     "muster": "Sehr geehrte Damen und Herren,\nwir sind ein Softwareunternehmen mit Sitz in Lüneburg und planen für unser Leitungsteam eine zweitägige Klausurtagung. Auf der Suche nach einem ruhigen Ort in der Natur sind wir auf Ihr Hotel aufmerksam geworden, das uns von Geschäftspartnern empfohlen wurde.\nDie Tagung soll Mitte Oktober stattfinden, idealerweise von Dienstag bis Mittwoch. Wir sind insgesamt fünfundzwanzig Personen. Falls dieser Zeitraum nicht möglich ist, sind wir auch für die Folgewoche offen.\nFür alle Teilnehmer benötigen wir Einzelzimmer für eine Nacht. Einige Kollegen reisen mit dem Auto an, deshalb wären Parkplätze am Hotel hilfreich.\nAußerdem brauchen wir einen Tagungsraum für alle Personen mit Beamer, Leinwand und zuverlässigem Internet sowie zwei kleinere Räume für die Gruppenarbeit.\nWas die Verpflegung betrifft, wünschen wir uns Vollpension einschließlich Kaffeepausen. Am ersten Abend würden wir gern gemeinsam auf Ihrer Terrasse essen, sofern das Wetter es erlaubt.\nKönnten Sie uns bitte bis Ende des Monats ein Angebot mit dem Preis pro Person schicken? Bitte teilen Sie uns auch mit, bis wann eine kostenlose Stornierung möglich ist.\nFür Rückfragen erreichen Sie mich gern telefonisch.\nMit freundlichen Grüßen\nEmre Demir\nSekretariat der Geschäftsführung, Weidner Software",
     "woerter": 190,
     "hilfen": [
      "wir sind ein … und planen …",
      "Die Tagung soll … stattfinden.",
      "Für alle Teilnehmer benötigen wir …",
      "Außerdem brauchen wir …",
      "Was die Verpflegung betrifft, …",
      "Könnten Sie uns bitte bis … ein Angebot schicken?"
     ],
     "erklaerung": "Eine gute Anfrage ist so genau, dass das Hotel sofort ein Angebot schreiben kann. Das Muster nennt alle Wünsche der Chefin, setzt eine Frist und fragt zusätzlich nach den Stornobedingungen — ein Zeichen für professionelles Arbeiten.",
     "rubrik": [
      {
       "t": "Inhalt: die sechs Leitpunkte",
       "h": "Sind alle sechs Punkte behandelt — mit Betreff, Anrede und Schluss?",
       "stufen": [
        {
         "w": 4,
         "t": "A",
         "d": "alle Punkte"
        },
        {
         "w": 3,
         "t": "B",
         "d": "fast alle"
        },
        {
         "w": 1,
         "t": "C",
         "d": "die Hälfte"
        },
        {
         "w": 0,
         "t": "D",
         "d": "kaum"
        }
       ]
      },
      {
       "t": "Kommunikative Angemessenheit",
       "h": "Passt der Ton zum Geschäftsbrief? Ist der Text gut aufgebaut und verknüpft?",
       "stufen": [
        {
         "w": 8,
         "t": "A",
         "d": "voll angemessen"
        },
        {
         "w": 5,
         "t": "B",
         "d": "weitgehend"
        },
        {
         "w": 2,
         "t": "C",
         "d": "ansatzweise"
        },
        {
         "w": 0,
         "t": "D",
         "d": "nicht"
        }
       ]
      },
      {
       "t": "Sprachliche Angemessenheit",
       "h": "Grammatik und Rechtschreibung — vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 8,
         "t": "A",
         "d": "kaum Fehler"
        },
        {
         "w": 5,
         "t": "B",
         "d": "einige Fehler"
        },
        {
         "w": 2,
         "t": "C",
         "d": "viele Fehler"
        },
        {
         "w": 0,
         "t": "D",
         "d": "schwer verständlich"
        }
       ]
      }
     ],
     "max": 20,
     "keineKI": true,
     "platzhalter": "Schreib hier deinen Geschäftsbrief …",
     "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
     "rubrikHinweis": "Drei Kriterien wie bei telc (Inhalt 4, Kommunikation 8, Sprache 8 Punkte). Die Stufen B und C sind eine Übungsschätzung."
    },
    {
     "id": "bbsk8",
     "situation": "Sie gehen morgen für zwei Wochen in den Urlaub. Schreiben Sie Ihrer Vertretung eine kurze Übergabenotiz.",
     "eingang": {
      "von": "Ihre Aufgabenliste",
      "betreff": "Offen",
      "text": "Kunde Haberland: wartet auf Lieferschein, Kopie liegt im Postfach. Rechnungen Oktober: erledigt. Reklamation Pfeiffer: Ersatzteil kommt am Dienstag, danach Kunden anrufen. Monatsbericht: erst nach dem Urlaub. Vertretung: Jens Okonkwo, bitte bis heute Abend informieren."
     },
     "sorte": "email",
     "an": "Ihren Kollegen Jens Okonkwo",
     "betreff": "Übergabe für die nächsten zwei Wochen",
     "punkte": [
      {
       "nr": 1,
       "was": "Zeitraum",
       "hinweis": "Wie lange sind Sie weg?"
      },
      {
       "nr": 2,
       "was": "Offene Aufgaben",
       "hinweis": "Was muss die Vertretung erledigen?"
      },
      {
       "nr": 3,
       "was": "Erreichbarkeit",
       "hinweis": "Sind Sie im Notfall erreichbar?"
      }
     ],
     "muster": "Hallo Jens,\nich bin ab morgen zwei Wochen im Urlaub und am Montag danach wieder da. Zwei Dinge sind noch offen: Herr Haberland wartet auf seinen Lieferschein, die Kopie liegt in meinem Postfach. Und bei der Reklamation Pfeiffer kommt am Dienstag das Ersatzteil. Ruf den Kunden dann bitte kurz an. Alles andere hat Zeit. In Notfällen erreichst du mich per Handy.\nDanke dir!\nSandra",
     "woerter": 70,
     "hilfen": [
      "ich bin ab … im Urlaub und …",
      "Zwei Dinge sind noch offen: …",
      "Ruf … bitte kurz an.",
      "In Notfällen erreichst du mich …"
     ],
     "erklaerung": "Eine Übergabe nennt nur, was die Vertretung wirklich tun muss. Erledigte Aufgaben und der Monatsbericht bleiben draußen — das spart Wörter.",
     "rubrik": [
      {
       "t": "Gesamteindruck",
       "h": "Ist die Nachricht vollständig (alle Punkte), knapp, freundlich und sprachlich in Ordnung?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "voll erfüllt"
        },
        {
         "w": 3,
         "t": "B",
         "d": "erfüllt"
        },
        {
         "w": 1,
         "t": "C",
         "d": "teilweise"
        },
        {
         "w": 0,
         "t": "D",
         "d": "nicht erfüllt"
        }
       ]
      }
     ],
     "max": 5,
     "keineKI": true,
     "rubrikTitel": "Bewerte deine Nachricht",
     "rubrikHinweis": "Bei telc wird Teil 2 als Ganzes bewertet: A = 5, B = 3, C = 1, D = 0 Punkte."
    }
   ]
  }
 ]
};
