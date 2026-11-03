/* ============================================================
   deutschoderwas club — LESEN + SPRACHBAUSTEINE telc Deutsch B1·B2 Pflege

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B1·B2 Pflege
   und Tipps zur Prüfungsvorbereitung, geprüft 03.11.2026). Alle Texte
   eigene, Kontext Pflegealltag. Erzeugt aus scratchpad/pflege mit bau.js.
   ============================================================ */

window.LESEN_TELC_PFL = {
 "niveau": "telcPfl",
 "pruefung": "telc Deutsch B1·B2 Pflege",
 "minuten": 60,
 "punkte": 36,
 "intro": "Lesen und Sprachbausteine dauern bei telc B1·B2 Pflege zusammen sechzig Minuten: E-Mails mit Betreffzeilen, eine Pflegeplanung, Beipackzettel und Regeln, ein Infotext und zwei Berichte mit Lücken. Zusammen mit dem Hören zählen sie als ein Block: B1 ab 27, B2 ab 43 von 59 Punkten.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Worum geht es?",
   "zeichen": "🧭",
   "was": "Betreffzeilen und Pflegeplanung lesen."
  },
  {
   "nr": 2,
   "titel": "Genau lesen",
   "zeichen": "💊",
   "was": "Beipackzettel, Regeln, Berichtssprache."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Alle sechs Teile einzeln."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "36 Aufgaben, sechzig Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tpl1",
   "stufe": 1,
   "titel": "Betreffzeilen: Wer schreibt, was soll ich tun?",
   "kurz": "Ein guter Betreff sagt, worum es geht und was der Leser tun soll",
   "ziel": "Nach diesem Block erkennst du in einer Mail aus dem Pflegealltag das eigentliche Anliegen und fällst nicht auf Wörter herein, die nur nebenbei vorkommen.",
   "zeichen": "✉️",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Nachricht: „Hallo Station 3A, die Infusionspumpe aus Zimmer 4 ist repariert. Ihr könnt sie ab 14 Uhr bei der Medizintechnik im Keller abholen.“ Welcher Betreff passt?",
     "opt": [
      "Infusionspumpe in Zimmer 4 defekt",
      "Reparierte Infusionspumpe abholen",
      "Neue Infusionspumpen für Station 3A"
     ],
     "loesung": 1,
     "erklaerung": "Die Pumpe ist schon repariert, die Station soll sie abholen. Neue Pumpen gibt es nicht."
    },
    {
     "art": "wahl",
     "frage": "Nachricht: „Liebe Kollegen, Frau Yildiz aus Zimmer 9 bekommt ab heute keine Tabletten gegen Übelkeit mehr. Der Arzt hat sie bei der Visite abgesetzt. Bitte im Medikamentenplan streichen.“ Welcher Betreff passt?",
     "opt": [
      "Frau Yildiz: Mittel gegen Übelkeit abgesetzt",
      "Frau Yildiz: Übelkeit nach dem Essen",
      "Visite heute später"
     ],
     "loesung": 0,
     "erklaerung": "Neu ist, dass das Medikament wegfällt. Die Übelkeit ist nicht das Thema."
    },
    {
     "art": "wahl",
     "frage": "Welche Wörter zeigen in einer Mail meistens, dass du etwas tun sollst?",
     "opt": [
      "„zur Information“, „zur Kenntnis“",
      "„Bitte bis …“, „Rückmeldung“, „Könnten Sie …?“",
      "„Mit freundlichen Grüßen“"
     ],
     "loesung": 1,
     "erklaerung": "Bitte, Frist und Frage zeigen einen Auftrag. „Zur Kenntnis“ heißt: nur lesen."
    },
    {
     "art": "wahl",
     "frage": "Nachricht: „Sehr geehrte Damen und Herren, der Toilettenstuhl für Frau Hartmann ist bestellt. Leider kann der Hersteller erst nächste Woche liefern. Bis dahin können Sie bei uns ein Leihgerät abholen.“ Wer schreibt hier wahrscheinlich?",
     "opt": [
      "die Apotheke",
      "der Hausarzt",
      "das Sanitätshaus"
     ],
     "loesung": 2,
     "erklaerung": "Hilfsmittel wie Toilettenstuhl, Rollator oder Pflegebett liefert das Sanitätshaus."
    },
    {
     "art": "wahl",
     "frage": "Nachricht: „Hallo Team, wegen Glatteis kommen heute viele Kollegen später. Die Übergabe ist deshalb um 6.30 Uhr statt um 6 Uhr, der Nachtdienst bleibt so lange.“ Welcher Betreff ist eine Falle?",
     "opt": [
      "Übergabe heute erst um 6.30 Uhr",
      "Glatteis auf dem Parkplatz: bitte streuen",
      "Nachtdienst bleibt heute länger"
     ],
     "loesung": 1,
     "erklaerung": "„Glatteis“ steht in der Mail, ist aber nur der Grund. Um das Streuen geht es gar nicht."
    },
    {
     "art": "wahl",
     "frage": "Nachricht: „Guten Tag, meine Mutter, Frau Weber aus Zimmer 12, hat am Freitag einen Termin beim Augenarzt. Ich hole sie um 9 Uhr ab. Könnten Sie dafür sorgen, dass sie bis dahin gefrühstückt hat?“ Welcher Betreff passt?",
     "opt": [
      "Frau Weber: Augenarzttermin abgesagt",
      "Neue Brille für Frau Weber",
      "Frau Weber: am Freitag vor 9 Uhr frühstücken"
     ],
     "loesung": 2,
     "erklaerung": "Die Tochter bittet um ein frühes Frühstück. Der Termin findet statt, von einer Brille ist keine Rede."
    },
    {
     "art": "wahl",
     "frage": "Du hast vier Mails und sechs Betreffzeilen. Wie gehst du am besten vor?",
     "opt": [
      "Ich suche in jeder Mail die gleichen Wörter wie im Betreff.",
      "Ich lese eine Mail und sage in einem Satz, wer schreibt und was er will. Dann vergleiche ich.",
      "Ich ordne zuerst die zwei Betreffzeilen zu, die übrig bleiben."
     ],
     "loesung": 1,
     "erklaerung": "Gleiche Wörter sind oft die Falle. Erst das Anliegen verstehen, dann den Betreff wählen."
    }
   ]
  },
  {
   "id": "tpl2",
   "stufe": 1,
   "titel": "Eine Pflegeplanung lesen: Problem, Ziel, Maßnahme",
   "kurz": "Jede Zeile hat einen AEDL-Bereich und drei Teile",
   "ziel": "Nach diesem Block findest du in einer Pflegeplanung schnell die Zeile, die zu einer Beobachtung oder Frage aus dem Dienst passt, und erkennst, wann keine Zeile passt.",
   "zeichen": "🗂️",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Was steht in einer Pflegeplanung bei „Problem“?",
     "opt": [
      "was die Pflegekraft tun soll",
      "wobei der Bewohner Hilfe braucht oder welches Risiko besteht",
      "was der Bewohner in einigen Wochen erreicht haben soll"
     ],
     "loesung": 1,
     "erklaerung": "Das Problem beschreibt den Hilfebedarf oder ein Risiko. Das Tun steht bei der Maßnahme, das Ergebnis beim Ziel."
    },
    {
     "art": "wahl",
     "frage": "Was ist eine „Ressource“?",
     "opt": [
      "eine Fähigkeit, die der Bewohner noch hat, zum Beispiel „isst mit der linken Hand selbstständig“",
      "ein Hilfsmittel aus dem Sanitätshaus",
      "ein Problem, das neu aufgetreten ist"
     ],
     "loesung": 0,
     "erklaerung": "Ressourcen sind Fähigkeiten und Stärken des Bewohners, die die Pflege nutzt."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung ist ein Ziel?",
     "opt": [
      "Blutdruck morgens und abends messen",
      "Bluthochdruck seit zehn Jahren",
      "Blutdruck liegt unter 140 zu 90 mmHg"
     ],
     "loesung": 2,
     "erklaerung": "Ein Ziel beschreibt einen Zustand, den man prüfen kann. Messen ist eine Maßnahme, Bluthochdruck das Problem."
    },
    {
     "art": "wahl",
     "frage": "Zeile: „Problem: Verschluckt sich bei dünnflüssigen Getränken.“ Welche Maßnahme passt fachlich?",
     "opt": [
      "Getränke andicken und aufrecht sitzen lassen",
      "Getränke im Liegen mit dem Strohhalm geben",
      "Trinkmenge auf einen Liter begrenzen"
     ],
     "loesung": 0,
     "erklaerung": "Angedickte Getränke und aufrechtes Sitzen verringern die Gefahr des Verschluckens."
    },
    {
     "art": "wahl",
     "frage": "Aussage: „Frau M. hat sich beim Trinken verschluckt und lange gehustet.“ In welchem AEDL-Bereich suchst du zuerst?",
     "opt": [
      "Sich bewegen",
      "Essen und trinken",
      "Kommunizieren"
     ],
     "loesung": 1,
     "erklaerung": "Schlucken und Trinken gehören zu „Essen und trinken“."
    },
    {
     "art": "wahl",
     "frage": "Aussage: „Herr P. steht nachts allein auf und ist schon zweimal gestürzt.“ Welche Bereiche können passen?",
     "opt": [
      "Sich kleiden oder Sich pflegen",
      "Soziale Bereiche oder Kommunizieren",
      "Sich bewegen oder Für eine sichere Umgebung sorgen"
     ],
     "loesung": 2,
     "erklaerung": "Sturzgefahr steht oft bei „Sich bewegen“ oder „Für eine sichere Umgebung sorgen“. Prüfe dann die Maßnahme genau."
    },
    {
     "art": "wahl",
     "frage": "Aussage: „Herr K. hat seit drei Tagen keinen Stuhlgang.“ In der Planung steht bei „Ausscheiden“ nur: „Findet die Toilette nachts nicht.“ Was ist richtig?",
     "opt": [
      "Die Zeile „Ausscheiden“ passt, weil der Bereich gleich ist.",
      "Keine Zeile passt, also ist die Lösung x.",
      "Man nimmt die Zeile, in der das Wort „nachts“ vorkommt."
     ],
     "loesung": 1,
     "erklaerung": "Der gleiche Bereich reicht nicht. Problem und Maßnahme müssen zur Aussage passen, sonst ist es x."
    }
   ]
  },
  {
   "id": "tpl3",
   "stufe": 2,
   "titel": "Beipackzettel und Regeln genau lesen",
   "kurz": "Zahlen, Fristen und kleine Wörter wie „nur“, „erst“, „es sei denn“ entscheiden",
   "ziel": "Nach diesem Block liest du Dosierungen, Fristen und Ausnahmen in Beipackzetteln, Hygieneregeln und Infotexten genau und rechnest Zeiten richtig.",
   "zeichen": "💊",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Beipackzettel: „Nehmen Sie nicht mehr als 3 Tabletten in 24 Stunden ein.“ Ein Bewohner hat heute um 7, 13 und 19 Uhr eine Tablette bekommen. Darf er um 23 Uhr noch eine bekommen?",
     "opt": [
      "Ja, wenn die Schmerzen stark sind.",
      "Nein, er hat die Höchstmenge schon erreicht.",
      "Ja, weil der Tag um 24 Uhr zu Ende ist."
     ],
     "loesung": 1,
     "erklaerung": "Drei Tabletten in 24 Stunden sind die Höchstmenge, egal wie stark die Schmerzen sind."
    },
    {
     "art": "wahl",
     "frage": "„Vor dem Öffnen im Kühlschrank aufbewahren.“ Was sagt dieser Satz über eine geöffnete Flasche?",
     "opt": [
      "Sie muss auch im Kühlschrank bleiben.",
      "Sie darf nicht in den Kühlschrank.",
      "Nichts. Man muss weiterlesen, was nach dem Öffnen gilt."
     ],
     "loesung": 2,
     "erklaerung": "Der Satz gilt nur für die ungeöffnete Flasche. Für die offene steht meist ein eigener Satz im Text."
    },
    {
     "art": "wahl",
     "frage": "„Mitarbeiter dürfen erst 48 Stunden nach dem Ende der Beschwerden wieder arbeiten.“ Eine Kollegin hatte bis Montag 20 Uhr Durchfall. Wann darf sie frühestens wieder arbeiten?",
     "opt": [
      "am Dienstag im Frühdienst",
      "am Mittwoch ab 20 Uhr",
      "am Donnerstag ab 20 Uhr"
     ],
     "loesung": 1,
     "erklaerung": "Montag 20 Uhr plus 48 Stunden ergibt Mittwoch 20 Uhr."
    },
    {
     "art": "wahl",
     "frage": "Welcher Ausdruck leitet in einer Regel eine Ausnahme ein?",
     "opt": [
      "„jeweils“",
      "„es sei denn“",
      "„in jedem Fall“"
     ],
     "loesung": 1,
     "erklaerung": "„es sei denn“ heißt: außer wenn. Danach steht der Fall, in dem die Regel nicht gilt."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Teilnahme ist kostenlos, die Kurszeit gilt aber nicht als Arbeitszeit.“ Aussage: „Die Zeit im Kurs wird bezahlt.“",
     "opt": [
      "richtig, denn der Kurs ist kostenlos",
      "falsch, denn kostenlos heißt nicht, dass die Zeit bezahlt wird",
      "Das steht nicht im Text."
     ],
     "loesung": 1,
     "erklaerung": "Kostenlos heißt: Man bezahlt nichts. Ob die Zeit bezahlt wird, sagt der zweite Teil, und der verneint es."
    },
    {
     "art": "wahl",
     "frage": "Hygieneordnung: „Bewohner mit MRSA dürfen am Gemeinschaftsleben teilnehmen, wenn Wunden abgedeckt sind.“ Aussage: „Bewohner mit MRSA dürfen nicht in den Speisesaal.“",
     "opt": [
      "richtig",
      "falsch",
      "Das hängt von den Besuchszeiten ab."
     ],
     "loesung": 1,
     "erklaerung": "Gemeinschaftsleben ist erlaubt, wenn die Bedingung erfüllt ist. Ein allgemeines Verbot steht nicht im Text."
    },
    {
     "art": "wahl",
     "frage": "Wie findest du in Teil 3 die richtige Stelle im Text am schnellsten?",
     "opt": [
      "Ich lese die Aufgabe, markiere ein Schlüsselwort wie eine Zahl, eine Zeit oder einen Ort und suche diese Information im Text.",
      "Ich lese zuerst alle drei Texte langsam Wort für Wort.",
      "Ich nehme die Antwort, die die meisten Wörter aus dem Text enthält."
     ],
     "loesung": 0,
     "erklaerung": "Schlüsselwörter führen zur Stelle. Dort liest du genau. Viele gleiche Wörter sind oft eine Falle."
    }
   ]
  },
  {
   "id": "tpl4",
   "stufe": 2,
   "titel": "Berichtssprache für die Sprachbausteine",
   "kurz": "Feste Verbindungen und Konnektoren aus Pflegeberichten",
   "ziel": "Nach diesem Block kennst du typische Verben und Verbindungen aus Pflegeberichten und wählst den passenden Konnektor nach der Stellung des Verbs.",
   "zeichen": "📝",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz klingt wie ein Pflegebericht?",
     "opt": [
      "Frau B. hat heute echt super gegessen.",
      "Frau B. hat die Hälfte der Portion gegessen.",
      "Frau B. hat, glaube ich, ganz gut gegessen."
     ],
     "loesung": 1,
     "erklaerung": "Ein Pflegebericht ist sachlich und genau: Menge statt Gefühl oder Vermutung."
    },
    {
     "art": "wahl",
     "frage": "„Der Hausarzt wurde telefonisch ___.“",
     "opt": [
      "benachrichtigt",
      "berichtet",
      "beauftragt"
     ],
     "loesung": 0,
     "erklaerung": "Jemanden „benachrichtigen“ heißt ihn informieren."
    },
    {
     "art": "wahl",
     "frage": "„Herr K. hat über Schmerzen im Rücken ___.“",
     "opt": [
      "gesagt",
      "geklagt",
      "gesprochen"
     ],
     "loesung": 1,
     "erklaerung": "Feste Verbindung im Bericht: „über Schmerzen klagen“."
    },
    {
     "art": "wahl",
     "frage": "„Herr K. hat das Frühstück abgelehnt, ___ ihm übel war.“",
     "opt": [
      "weil",
      "deshalb",
      "trotzdem"
     ],
     "loesung": 0,
     "erklaerung": "Das Verb steht am Ende („übel war“), also braucht man einen Nebensatz-Konnektor: „weil“."
    },
    {
     "art": "wahl",
     "frage": "„Er hatte 38,6 Grad Fieber, ___ wurde der Bereitschaftsarzt informiert.“",
     "opt": [
      "weil",
      "obwohl",
      "deshalb"
     ],
     "loesung": 2,
     "erklaerung": "Nach der Lücke steht das Verb an Position zwei („wurde“), und es folgt eine Folge: „deshalb“."
    },
    {
     "art": "wahl",
     "frage": "„___ dem Mittagessen wurde der Blutzucker gemessen.“",
     "opt": [
      "Bevor",
      "Vor",
      "Vorher"
     ],
     "loesung": 1,
     "erklaerung": "Vor einem Nomen mit Artikel steht die Präposition „vor“. „Bevor“ braucht einen Nebensatz."
    },
    {
     "art": "wahl",
     "frage": "„Der Bewohner hat seine Tabletten selbstständig ___.“",
     "opt": [
      "angenommen",
      "eingenommen",
      "aufgenommen"
     ],
     "loesung": 1,
     "erklaerung": "Medikamente werden „eingenommen“."
    },
    {
     "art": "wahl",
     "frage": "In Sprachbausteine Teil 1 steht vor der Lücke ein Komma, danach endet der Satzteil mit dem Verb. Was prüfst du zuerst?",
     "opt": [
      "Ob ein Wort wie „weil“, „obwohl“ oder „nachdem“ passt, denn „deshalb“ und „trotzdem“ brauchen das Verb an Position zwei.",
      "Ob das Wort groß geschrieben ist.",
      "Welches Wort am kürzesten ist."
     ],
     "loesung": 0,
     "erklaerung": "Die Stellung des Verbs zeigt, ob ein Nebensatz-Konnektor oder ein Adverb wie „deshalb“ passt."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "textwahl",
   "name": "Lesen: Betreffzeilen",
   "kurz": "Vier E-Mails, sechs Betreffzeilen",
   "was": "Vier E-Mails aus dem Pflegealltag ohne Betreff, zum Beispiel von der Apotheke, vom Hausarzt oder von Angehörigen. Zu jeder passt eine Betreffzeile, zwei bleiben übrig.",
   "tipp": "Der Betreff sagt, worum es geht und was zu tun ist. Ein Wort aus der Mail im Betreff heißt noch nicht, dass er passt.",
   "zeichen": "✉️",
   "farbe": "turq",
   "punkte": 4,
   "runden": [
    {
     "id": "pfl1s1",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu E-Mail 1?",
       "opt": [
        "Frau Schuster: Insulin ab morgen höher dosieren",
        "Pflichtschulung Sturzprophylaxe: bitte in die Liste eintragen",
        "Neue Tabletten für Herrn Köhler: gleicher Wirkstoff, andere Farbe",
        "Frau Schuster: eine Woche lang Blutzucker messen",
        "Blutdruckmittel bei Herrn Köhler abgesetzt",
        "Anfrage: Geburtstagskaffee im Gemeinschaftsraum"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Rosen-Apotheke an den Wohnbereich 2",
        "titel": "E-Mail 1",
        "zeilen": [
         "Guten Tag,",
         "das Blutdruckmittel von Herrn Köhler ist beim Hersteller im Moment nicht lieferbar. Wir haben deshalb ein Präparat mit demselben Wirkstoff und derselben Stärke von einer anderen Firma geliefert.",
         "Die Tabletten sind weiß und rund, die alten waren gelb und länglich. Bitte erklären Sie das Herrn Köhler, damit er sich nicht wundert. Am Medikamentenplan ändert sich nichts.",
         "Freundliche Grüße, Ihre Rosen-Apotheke"
        ]
       },
       "stelle": "ein Präparat mit demselben Wirkstoff und derselben Stärke",
       "erklaerung": "Das Mittel wird nicht abgesetzt. Nur die Tabletten sehen anders aus, der Plan bleibt gleich."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 2?",
       "opt": [
        "Frau Schuster: Insulin ab morgen höher dosieren",
        "Pflichtschulung Sturzprophylaxe: bitte in die Liste eintragen",
        "Neue Tabletten für Herrn Köhler: gleicher Wirkstoff, andere Farbe",
        "Frau Schuster: eine Woche lang Blutzucker messen",
        "Blutdruckmittel bei Herrn Köhler abgesetzt",
        "Anfrage: Geburtstagskaffee im Gemeinschaftsraum"
       ],
       "loesung": 3,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Dr. Martin Brandt, Hausarzt, an die Pflege",
        "titel": "E-Mail 2",
        "zeilen": [
         "Sehr geehrte Damen und Herren,",
         "bei Frau Schuster war der Langzeitzucker im letzten Labor etwas erhöht. Bevor ich die Therapie ändere, brauche ich genauere Werte.",
         "Bitte messen Sie ab morgen sieben Tage lang den Blutzucker vor dem Frühstück und vor dem Abendessen und dokumentieren Sie die Werte. Schicken Sie mir die Liste dann am nächsten Montag per Fax.",
         "Mit freundlichen Grüßen, Dr. Martin Brandt"
        ]
       },
       "stelle": "sieben Tage lang den Blutzucker vor dem Frühstück und vor dem Abendessen",
       "erklaerung": "Der Arzt will erst Messwerte sehen. Von einer höheren Insulindosis steht nichts in der Mail."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 3?",
       "opt": [
        "Frau Schuster: Insulin ab morgen höher dosieren",
        "Pflichtschulung Sturzprophylaxe: bitte in die Liste eintragen",
        "Neue Tabletten für Herrn Köhler: gleicher Wirkstoff, andere Farbe",
        "Frau Schuster: eine Woche lang Blutzucker messen",
        "Blutdruckmittel bei Herrn Köhler abgesetzt",
        "Anfrage: Geburtstagskaffee im Gemeinschaftsraum"
       ],
       "loesung": 5,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Anke Petersen, Tochter einer Bewohnerin",
        "titel": "E-Mail 3",
        "zeilen": [
         "Liebes Team vom Wohnbereich 2,",
         "meine Mutter wird am Samstag 85 Jahre alt. Wir möchten mit ihr am Nachmittag gern Kaffee trinken, wir sind ungefähr zehn Personen. In ihrem Zimmer ist dafür zu wenig Platz.",
         "Wäre der Gemeinschaftsraum von 15 bis 17 Uhr frei? Kuchen und Geschirr bringen wir selbst mit.",
         "Viele Grüße, Anke Petersen"
        ]
       },
       "stelle": "Wäre der Gemeinschaftsraum von 15 bis 17 Uhr frei?",
       "erklaerung": "Die Tochter fragt, ob die Familie den Raum für die Feier benutzen kann."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 4?",
       "opt": [
        "Frau Schuster: Insulin ab morgen höher dosieren",
        "Pflichtschulung Sturzprophylaxe: bitte in die Liste eintragen",
        "Neue Tabletten für Herrn Köhler: gleicher Wirkstoff, andere Farbe",
        "Frau Schuster: eine Woche lang Blutzucker messen",
        "Blutdruckmittel bei Herrn Köhler abgesetzt",
        "Anfrage: Geburtstagskaffee im Gemeinschaftsraum"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Pflegedienstleitung an alle Pflegekräfte",
        "titel": "E-Mail 4",
        "zeilen": [
         "Liebe Kollegen,",
         "nach den drei Stürzen im letzten Monat wiederholen wir die Schulung zum Expertenstandard Sturzprophylaxe. Die Teilnahme ist für alle Pflegekräfte Pflicht und zählt als Arbeitszeit.",
         "Es gibt zwei Termine: Dienstag, 10. März, und Donnerstag, 12. März, jeweils von 14 bis 15.30 Uhr. Bitte tragt euch bis Freitag in die Liste im Dienstzimmer ein.",
         "Viele Grüße, Sabine Wolff, Pflegedienstleitung"
        ]
       },
       "stelle": "Bitte tragt euch bis Freitag in die Liste im Dienstzimmer ein.",
       "erklaerung": "Es geht um die Pflichtschulung und die Anmeldung. Die Stürze sind nur der Anlass."
      }
     ]
    },
    {
     "id": "pfl1s2",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu E-Mail 1?",
       "opt": [
        "Pflegebett für Herrn Wagner: Lieferung verschoben",
        "Dienst am Sonntag tauschen?",
        "Herr Lange im Krankenhaus: Einsätze bis auf Weiteres aussetzen",
        "Neue Verordnung: Kompressionsstrümpfe bei Frau Demir",
        "Pflegebett von Herrn Wagner wird abgeholt",
        "Herr Lange: Entlassung aus dem Krankenhaus am Montag"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail des Sanitätshauses Bergmann an den Pflegedienst",
        "titel": "E-Mail 1",
        "zeilen": [
         "Sehr geehrte Damen und Herren,",
         "das Pflegebett für Herrn Wagner sollte am Mittwoch geliefert werden. Leider ist die Matratze noch nicht bei uns angekommen.",
         "Wir können das Bett deshalb erst am Freitagvormittag bringen und aufbauen. Bitte sagen Sie uns, ob dann jemand vom Pflegedienst oder von der Familie da ist.",
         "Mit freundlichen Grüßen, Sanitätshaus Bergmann"
        ]
       },
       "stelle": "Wir können das Bett deshalb erst am Freitagvormittag bringen",
       "erklaerung": "Das Bett kommt später. Es wird nicht abgeholt, es wurde ja noch gar nicht geliefert."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 2?",
       "opt": [
        "Pflegebett für Herrn Wagner: Lieferung verschoben",
        "Dienst am Sonntag tauschen?",
        "Herr Lange im Krankenhaus: Einsätze bis auf Weiteres aussetzen",
        "Neue Verordnung: Kompressionsstrümpfe bei Frau Demir",
        "Pflegebett von Herrn Wagner wird abgeholt",
        "Herr Lange: Entlassung aus dem Krankenhaus am Montag"
       ],
       "loesung": 3,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Dr. Claudia Weber, Hausärztin, an den Pflegedienst",
        "titel": "E-Mail 2",
        "zeilen": [
         "Guten Tag,",
         "Frau Demir hat seit einigen Wochen geschwollene Beine. Ich habe ihr Kompressionsstrümpfe verschrieben, die sie aber nicht selbst anziehen kann.",
         "Die Verordnung für häusliche Krankenpflege für das An- und Ausziehen liegt ab morgen bei uns an der Anmeldung. Bitte holen Sie sie dort ab und reichen Sie sie bei der Krankenkasse ein.",
         "Freundliche Grüße, Dr. Claudia Weber"
        ]
       },
       "stelle": "Die Verordnung für häusliche Krankenpflege für das An- und Ausziehen",
       "erklaerung": "Die Ärztin hat eine Verordnung für die Strümpfe ausgestellt. Der Pflegedienst soll sie abholen."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 3?",
       "opt": [
        "Pflegebett für Herrn Wagner: Lieferung verschoben",
        "Dienst am Sonntag tauschen?",
        "Herr Lange im Krankenhaus: Einsätze bis auf Weiteres aussetzen",
        "Neue Verordnung: Kompressionsstrümpfe bei Frau Demir",
        "Pflegebett von Herrn Wagner wird abgeholt",
        "Herr Lange: Entlassung aus dem Krankenhaus am Montag"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Marta Kowalczyk, Kollegin im Pflegedienst",
        "titel": "E-Mail 3",
        "zeilen": [
         "Hallo Jana,",
         "ich habe am Sonntag Frühdienst, aber meine Schwester heiratet an dem Tag, und ich habe es leider zu spät erfahren. Du hast doch am Samstag Frühdienst.",
         "Könnten wir tauschen? Dann mache ich deinen Samstag und du meinen Sonntag. Die Tour ist fast gleich, nur Frau Krüger kommt am Sonntag noch dazu. Wenn es geht, sage ich der Pflegedienstleitung Bescheid.",
         "Liebe Grüße, Marta"
        ]
       },
       "stelle": "Könnten wir tauschen? Dann mache ich deinen Samstag",
       "erklaerung": "Marta bittet um einen Diensttausch. Die Hochzeit ist nur der Grund."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 4?",
       "opt": [
        "Pflegebett für Herrn Wagner: Lieferung verschoben",
        "Dienst am Sonntag tauschen?",
        "Herr Lange im Krankenhaus: Einsätze bis auf Weiteres aussetzen",
        "Neue Verordnung: Kompressionsstrümpfe bei Frau Demir",
        "Pflegebett von Herrn Wagner wird abgeholt",
        "Herr Lange: Entlassung aus dem Krankenhaus am Montag"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Thomas Lange, Sohn eines Patienten",
        "titel": "E-Mail 4",
        "zeilen": [
         "Sehr geehrte Frau Hoffmann,",
         "mein Vater ist gestern Abend gestürzt und liegt jetzt mit einem Oberschenkelhalsbruch im Krankenhaus. Er wird morgen operiert.",
         "Bitte kommen Sie bis auf Weiteres nicht mehr zu ihm nach Hause. Wann er entlassen wird, weiß noch niemand. Ich melde mich, sobald wir mehr wissen.",
         "Mit freundlichen Grüßen, Thomas Lange"
        ]
       },
       "stelle": "Bitte kommen Sie bis auf Weiteres nicht mehr zu ihm nach Hause.",
       "erklaerung": "Die Einsätze sollen pausieren. Einen Entlassungstermin gibt es noch nicht."
      }
     ]
    },
    {
     "id": "pfl1s3",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu E-Mail 1?",
       "opt": [
        "Hörgerät von Herrn Becker vermisst",
        "Zimmer 12: Patient ab Mitternacht nüchtern",
        "Wochenbestellung kommt einen Tag später",
        "Hygienekontrolle am Dienstag: Händedesinfektion",
        "Neues Hörgerät für Herrn Becker bestellt",
        "Infusionen auf Station ausgegangen"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Krankenhausapotheke an Station 4B",
        "titel": "E-Mail 1",
        "zeilen": [
         "Liebes Team der Station 4B,",
         "wegen des Feiertags kommt Ihre Wochenbestellung diesmal nicht am Mittwoch, sondern erst am Donnerstag gegen 10 Uhr.",
         "Bitte prüfen Sie heute noch, ob Ihr Vorrat an Infusionen und Verbandsmaterial bis dahin reicht. Wenn Ihnen vorher etwas fehlt, rufen Sie uns unter der Durchwahl 4410 an, dann bringen wir es sofort.",
         "Mit freundlichen Grüßen, Ihre Krankenhausapotheke"
        ]
       },
       "stelle": "sondern erst am Donnerstag gegen 10 Uhr",
       "erklaerung": "Die Lieferung kommt später. Dass Infusionen fehlen, ist nur eine Möglichkeit, keine Tatsache."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 2?",
       "opt": [
        "Hörgerät von Herrn Becker vermisst",
        "Zimmer 12: Patient ab Mitternacht nüchtern",
        "Wochenbestellung kommt einen Tag später",
        "Hygienekontrolle am Dienstag: Händedesinfektion",
        "Neues Hörgerät für Herrn Becker bestellt",
        "Infusionen auf Station ausgegangen"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Ingrid Becker, Ehefrau eines Patienten",
        "titel": "E-Mail 2",
        "zeilen": [
         "Sehr geehrte Damen und Herren,",
         "mein Mann Klaus Becker liegt seit Montag in Zimmer 7. Als ich ihn gestern besucht habe, hatte er sein Hörgerät nicht mehr. Es ist das rechte, hautfarben, in einem kleinen grauen Etui.",
         "Vielleicht ist es bei der Untersuchung am Dienstag liegen geblieben. Könnten Sie bitte einmal nachsehen? Ohne das Gerät versteht er die Ärzte kaum.",
         "Vielen Dank, Ingrid Becker"
        ]
       },
       "stelle": "hatte er sein Hörgerät nicht mehr",
       "erklaerung": "Das Gerät ist verschwunden, Frau Becker bittet um Suche. Ein neues wird nicht bestellt."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 3?",
       "opt": [
        "Hörgerät von Herrn Becker vermisst",
        "Zimmer 12: Patient ab Mitternacht nüchtern",
        "Wochenbestellung kommt einen Tag später",
        "Hygienekontrolle am Dienstag: Händedesinfektion",
        "Neues Hörgerät für Herrn Becker bestellt",
        "Infusionen auf Station ausgegangen"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Lena Fischer, Kollegin aus dem Spätdienst",
        "titel": "E-Mail 3",
        "zeilen": [
         "Hallo Nachtdienst,",
         "das habe ich bei der Übergabe vergessen: Herr Okafor in Zimmer 12 bekommt morgen um 8 Uhr eine Magenspiegelung. Er darf ab 0 Uhr nichts mehr essen und trinken.",
         "Bitte erinnert ihn noch einmal daran und hängt das Schild „nüchtern“ an sein Bett. Seine Tabletten von morgen früh bekommt er erst nach der Untersuchung.",
         "Danke und eine ruhige Nacht, Lena"
        ]
       },
       "stelle": "Er darf ab 0 Uhr nichts mehr essen und trinken.",
       "erklaerung": "Der Nachtdienst soll darauf achten, dass der Patient nüchtern bleibt. Die Untersuchung ist der Grund."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 4?",
       "opt": [
        "Hörgerät von Herrn Becker vermisst",
        "Zimmer 12: Patient ab Mitternacht nüchtern",
        "Wochenbestellung kommt einen Tag später",
        "Hygienekontrolle am Dienstag: Händedesinfektion",
        "Neues Hörgerät für Herrn Becker bestellt",
        "Infusionen auf Station ausgegangen"
       ],
       "loesung": 3,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Pflegedienstleitung an alle Stationen",
        "titel": "E-Mail 4",
        "zeilen": [
         "Liebe Kollegen,",
         "am kommenden Dienstag beobachtet das Hygieneteam auf allen Stationen, wie die Händedesinfektion durchgeführt wird. Die Beobachtung ist anonym, es werden keine Namen notiert.",
         "Bitte achtet darauf, dass an jedem Bett und an jedem Verbandswagen ein voller Spender hängt. Fehlende Spender meldet ihr bitte bis Montag bei der Haustechnik.",
         "Viele Grüße, Michael Kraus, Pflegedienstleitung"
        ]
       },
       "stelle": "beobachtet das Hygieneteam auf allen Stationen, wie die Händedesinfektion durchgeführt wird",
       "erklaerung": "Thema ist die Kontrolle der Händedesinfektion am Dienstag."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "anzeigenX",
   "name": "Lesen: Pflegeplanung",
   "kurz": "Acht Zeilen einer Pflegeplanung, fünf Aussagen",
   "was": "Ein Ausschnitt aus einer Pflegeplanung mit acht Zeilen nach AEDL. Zu jeder Aussage suchst du die passende Zeile. Eine Aussage passt zu keiner: X.",
   "tipp": "Lies Problem, Ziel und Maßnahme zusammen. Die Aussage passt nur, wenn alles stimmt, nicht nur der Bereich.",
   "zeichen": "📋",
   "farbe": "gold",
   "punkte": 5,
   "runden": [
    {
     "id": "pfl2s1",
     "titel": "Pflegeplanung Frau Hildegard Krause (84 Jahre, Schlaganfall mit Lähmung der rechten Seite)",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Kommunizieren",
       "zeilen": [
        "Problem: Findet seit dem Schlaganfall oft die Wörter nicht. Ressource: Versteht kurze Sätze gut, kann nicken und den Kopf schütteln.",
        "Ziel: Frau K. kann ihre Wünsche und Beschwerden mitteilen.",
        "Maßnahme: Kurze Fragen stellen, die sie mit Ja oder Nein beantworten kann. Bildkarten auf dem Nachttisch bereitlegen."
       ],
       "motiv": "praxis"
      },
      {
       "b": "b",
       "quelle": "Sich bewegen",
       "zeilen": [
        "Problem: Rechte Körperseite gelähmt, kann nicht allein aufstehen. Ressource: Sitzt mit Hilfe sicher an der Bettkante.",
        "Ziel: Frau K. sitzt zu jeder Mahlzeit im Rollstuhl am Tisch.",
        "Maßnahme: Dreimal täglich in den Rollstuhl mobilisieren, Transfer immer über die gesunde linke Seite."
       ],
       "motiv": "praxis"
      },
      {
       "b": "c",
       "quelle": "Vitale Funktionen aufrechterhalten",
       "zeilen": [
        "Problem: Bluthochdruck, Gefahr eines neuen Schlaganfalls.",
        "Ziel: Blutdruck liegt unter 140 zu 90 mmHg.",
        "Maßnahme: Blutdruck morgens und abends messen und dokumentieren. Werte über 160 zu 100 mmHg sofort dem Hausarzt melden."
       ],
       "motiv": "praxis"
      },
      {
       "b": "d",
       "quelle": "Essen und trinken",
       "zeilen": [
        "Problem: Verschluckt sich bei dünnflüssigen Getränken. Ressource: Isst mit der linken Hand selbstständig.",
        "Ziel: Frau K. trinkt 1,5 Liter am Tag, ohne sich zu verschlucken.",
        "Maßnahme: Alle Getränke andicken, beim Essen und Trinken aufrecht sitzen lassen, nach dem Essen 30 Minuten nicht hinlegen."
       ],
       "motiv": "praxis"
      },
      {
       "b": "e",
       "quelle": "Sich pflegen",
       "zeilen": [
        "Problem: Kann sich nur mit der linken Hand waschen. Ressource: Möchte so viel wie möglich selbst machen.",
        "Ziel: Frau K. wäscht Gesicht, Hände und Oberkörper weiter selbst.",
        "Maßnahme: Waschschüssel und Waschlappen links bereitstellen, Rücken, Beine und rechten Arm übernehmen, Zeit lassen."
       ],
       "motiv": "praxis"
      },
      {
       "b": "f",
       "quelle": "Sich kleiden",
       "zeilen": [
        "Problem: Kann sich nicht allein anziehen. Ressource: Hilft beim Anziehen aktiv mit.",
        "Ziel: Frau K. zieht ihr Oberteil mit Anleitung selbst an.",
        "Maßnahme: Beim Anziehen zuerst den gelähmten rechten Arm in den Ärmel führen, beim Ausziehen zuerst den linken. Weite Kleidung mit Knöpfen vorne."
       ],
       "motiv": "praxis"
      },
      {
       "b": "g",
       "quelle": "Ausscheiden",
       "zeilen": [
        "Problem: Merkt den Harndrang spät, gelegentlich nass.",
        "Ziel: Frau K. bleibt tagsüber trocken.",
        "Maßnahme: Alle drei Stunden und vor dem Schlafengehen den Toilettengang anbieten, nachts Inkontinenzvorlage."
       ],
       "motiv": "praxis"
      },
      {
       "b": "h",
       "quelle": "Sich beschäftigen",
       "zeilen": [
        "Problem: Ist oft traurig, weil sie nicht mehr im Garten arbeiten kann. Ressource: Freut sich über Pflanzen und Besuch der Enkelin.",
        "Ziel: Frau K. nimmt einmal pro Woche an einem Gruppenangebot teil.",
        "Maßnahme: Zur Gartengruppe am Hochbeet begleiten, Gespräche über ihren Garten anbieten."
       ],
       "motiv": "praxis"
      }
     ],
     "aufgaben": [
      {
       "situation": "Beim Frühstück hustet Frau Krause lange, nachdem sie einen Schluck Kaffee getrunken hat. Die Aushilfe hatte den Kaffee direkt aus der Kanne eingeschenkt.",
       "loesung": "d",
       "erklaerung": "Husten nach einem dünnflüssigen Getränk: Laut Zeile d müssen alle Getränke angedickt werden.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Ein neuer Kollege fragt: „Mit welchem Arm fange ich an, wenn ich Frau Krause die Bluse anziehe?“",
       "loesung": "f",
       "erklaerung": "Zeile f: Beim Anziehen kommt zuerst der gelähmte rechte Arm in den Ärmel.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Bei der Übergabe sagt die Kollegin, dass Frau Krause am Steiß eine gerötete Stelle hat, die nicht weggeht.",
       "loesung": "x",
       "erklaerung": "Keine Zeile beschreibt Hautschutz oder Dekubitusprophylaxe. Zeile b geht nur um Aufstehen und Transfer.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Im Spätdienst misst du bei Frau Krause einen Blutdruck von 172 zu 104 mmHg.",
       "loesung": "c",
       "erklaerung": "Laut Zeile c müssen Werte über 160 zu 100 sofort dem Hausarzt gemeldet werden.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Frau Krause zeigt auf ihr Knie und verzieht das Gesicht. Du möchtest herausfinden, ob sie Schmerzen hat.",
       "loesung": "a",
       "erklaerung": "Zeile a: Fragen so stellen, dass sie mit Ja oder Nein antworten kann.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      }
     ]
    },
    {
     "id": "pfl2s2",
     "titel": "Pflegeplanung Herr Josef Reiter (79 Jahre, Demenz im mittleren Stadium)",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Kommunizieren",
       "zeilen": [
        "Problem: Vergisst Gesprächsinhalte nach wenigen Minuten, stellt dieselbe Frage oft. Ressource: Erinnert sich gut an seine Zeit als Busfahrer.",
        "Ziel: Herr R. fühlt sich verstanden und bleibt ruhig.",
        "Maßnahme: Jede Frage geduldig beantworten, ihn nicht korrigieren, Gespräche über seine frühere Arbeit anbieten."
       ],
       "motiv": "praxis"
      },
      {
       "b": "b",
       "quelle": "Ruhen und schlafen",
       "zeilen": [
        "Problem: Tag-Nacht-Rhythmus gestört, läuft nachts über den Flur.",
        "Ziel: Herr R. schläft nachts mindestens fünf Stunden am Stück.",
        "Maßnahme: Tagsüber Beschäftigung und Spaziergang anbieten, Mittagsschlaf höchstens 30 Minuten, abends gedämpftes Licht."
       ],
       "motiv": "praxis"
      },
      {
       "b": "c",
       "quelle": "Für eine sichere Umgebung sorgen",
       "zeilen": [
        "Problem: Hinlauftendenz, hat das Haus schon zweimal allein verlassen.",
        "Ziel: Herr R. verlässt das Haus nicht ohne Begleitung.",
        "Maßnahme: Foto am Empfang, Notfallkarte mit Telefonnummer des Hauses in der Jackentasche. Wenn er nicht auffindbar ist, sofort die Wohnbereichsleitung informieren."
       ],
       "motiv": "praxis"
      },
      {
       "b": "d",
       "quelle": "Essen und trinken",
       "zeilen": [
        "Problem: Vergisst zu essen, isst nur, wenn jemand dabei sitzt. Ressource: Isst gern mit den Fingern.",
        "Ziel: Gewicht bleibt bei 68 kg.",
        "Maßnahme: Brot in mundgerechten Stücken anbieten, bei den Mahlzeiten dabei sitzen, einmal pro Woche wiegen."
       ],
       "motiv": "praxis"
      },
      {
       "b": "e",
       "quelle": "Sich kleiden",
       "zeilen": [
        "Problem: Zieht mehrere Hosen und Pullover übereinander an. Ressource: Kann sich allein anziehen.",
        "Ziel: Herr R. ist passend zum Wetter gekleidet.",
        "Maßnahme: Abends die Kleidung für den nächsten Tag in der richtigen Reihenfolge auf den Stuhl legen, die übrige Kleidung im Schrank lassen."
       ],
       "motiv": "praxis"
      },
      {
       "b": "f",
       "quelle": "Ausscheiden",
       "zeilen": [
        "Problem: Findet die Toilette nicht immer.",
        "Ziel: Herr R. benutzt die Toilette selbstständig.",
        "Maßnahme: Toilettentür mit einem großen Bild kennzeichnen, nachts Licht im Bad anlassen."
       ],
       "motiv": "praxis"
      },
      {
       "b": "g",
       "quelle": "Sich beschäftigen",
       "zeilen": [
        "Problem: Wirkt am Nachmittag unruhig und hat keine Aufgabe. Ressource: Sortiert gern Dinge.",
        "Ziel: Herr R. nimmt täglich an einer Beschäftigung teil.",
        "Maßnahme: Schrauben und Muttern zum Sortieren geben, Teilnahme an der Männerrunde am Donnerstag."
       ],
       "motiv": "praxis"
      },
      {
       "b": "h",
       "quelle": "Soziale Bereiche des Lebens sichern",
       "zeilen": [
        "Problem: Ehefrau ist mit der Situation überfordert und weint oft bei Besuchen.",
        "Ziel: Ehefrau weiß, wo sie Unterstützung bekommt.",
        "Maßnahme: Gespräch mit der Wohnbereichsleitung anbieten, Flyer der Angehörigengruppe weitergeben."
       ],
       "motiv": "praxis"
      }
     ],
     "aufgaben": [
      {
       "situation": "Herr Reiter hatte seit Freitag keinen Stuhlgang. Heute ist Montag, und er drückt beim Mittagessen auf seinen Bauch.",
       "loesung": "x",
       "erklaerung": "Zeile f geht nur darum, die Toilette zu finden. Zu Verstopfung steht nichts in der Planung.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Herr Reiter ist nach dem Mittagessen im Sessel eingeschlafen. Eine Kollegin fragt, wie lange man ihn schlafen lassen soll.",
       "loesung": "b",
       "erklaerung": "Zeile b: Der Mittagsschlaf soll höchstens 30 Minuten dauern, damit er nachts schläft.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Beim Rundgang um 15 Uhr ist Herr Reiter nicht in seinem Zimmer, und am Empfang hat ihn auch niemand gesehen.",
       "loesung": "c",
       "erklaerung": "Zeile c: Wenn er nicht auffindbar ist, muss sofort die Wohnbereichsleitung informiert werden.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Frau Reiter sagt beim Besuch: „Ich schaffe das alles nicht mehr. Wer kann mir denn helfen?“",
       "loesung": "h",
       "erklaerung": "Zeile h betrifft die überforderte Ehefrau und nennt Gespräch und Angehörigengruppe.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Es sind 28 Grad draußen. Herr Reiter sitzt im Garten und trägt zwei Pullover und eine Winterjacke.",
       "loesung": "e",
       "erklaerung": "Zeile e: Er soll passend zum Wetter gekleidet sein, die Kleidung wird abends vorbereitet.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      }
     ]
    },
    {
     "id": "pfl2s3",
     "titel": "Pflegeplanung Herr Walter Neumann (72 Jahre, Diabetes Typ 2, offenes Bein, in der Kurzzeitpflege)",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Essen und trinken",
       "zeilen": [
        "Problem: Diabetes mellitus Typ 2, isst gern Kuchen und trinkt viel Saft. Ressource: Kennt seine Erkrankung.",
        "Ziel: Blutzucker vor den Mahlzeiten zwischen 100 und 180 mg/dl.",
        "Maßnahme: Blutzucker vor den Hauptmahlzeiten messen, Insulin nach ärztlichem Plan spritzen, über Zucker in Kuchen und Saft beraten."
       ],
       "motiv": "praxis"
      },
      {
       "b": "b",
       "quelle": "Sich pflegen",
       "zeilen": [
        "Problem: Ulcus cruris venosum am linken Unterschenkel, 3 x 2 cm.",
        "Ziel: Die Wunde wird kleiner und bleibt ohne Infektion.",
        "Maßnahme: Verbandswechsel nach Wundplan montags, mittwochs und freitags unter sterilen Bedingungen, Wunde einmal pro Woche ausmessen und fotografieren."
       ],
       "motiv": "praxis"
      },
      {
       "b": "c",
       "quelle": "Sich bewegen",
       "zeilen": [
        "Problem: Geht wegen der Schmerzen im Bein wenig. Ressource: Läuft mit dem Rollator sicher.",
        "Ziel: Herr N. geht dreimal täglich zum Speisesaal.",
        "Maßnahme: Kompressionsverband morgens vor dem Aufstehen anlegen, zum Gehen motivieren, im Sitzen die Beine hochlegen."
       ],
       "motiv": "praxis"
      },
      {
       "b": "d",
       "quelle": "Vitale Funktionen aufrechterhalten",
       "zeilen": [
        "Problem: Gefahr der Unterzuckerung, merkt die Zeichen selbst spät.",
        "Ziel: Eine Unterzuckerung wird früh erkannt.",
        "Maßnahme: Auf Schwitzen, Zittern, Blässe und Verwirrtheit achten. Bei Blutzucker unter 70 mg/dl sofort Traubenzucker geben und nach 15 Minuten nachmessen."
       ],
       "motiv": "praxis"
      },
      {
       "b": "e",
       "quelle": "Ruhen und schlafen",
       "zeilen": [
        "Problem: Wacht nachts wegen Schmerzen im Bein auf.",
        "Ziel: Herr N. schläft mindestens sechs Stunden.",
        "Maßnahme: Schmerzmittel nach Plan um 21 Uhr geben, Schmerzen mit der Skala von 0 bis 10 abfragen, bei Wert über 4 Bedarfsmedikation nach Anordnung."
       ],
       "motiv": "praxis"
      },
      {
       "b": "f",
       "quelle": "Sich kleiden",
       "zeilen": [
        "Problem: Kann Strümpfe und Schuhe nicht allein anziehen. Ressource: Zieht den Oberkörper selbst an.",
        "Ziel: Herr N. trägt passende Schuhe ohne Druckstellen.",
        "Maßnahme: Beim Anziehen von Strümpfen und Schuhen helfen, Füße täglich auf Druckstellen und kleine Verletzungen kontrollieren."
       ],
       "motiv": "praxis"
      },
      {
       "b": "g",
       "quelle": "Kommunizieren",
       "zeilen": [
        "Problem: Hört auf dem linken Ohr sehr schlecht. Ressource: Trägt rechts ein Hörgerät.",
        "Ziel: Herr N. versteht die Informationen zu seiner Therapie.",
        "Maßnahme: Von rechts ansprechen, Hörgerät morgens einsetzen, Batterie jeden Montag wechseln."
       ],
       "motiv": "praxis"
      },
      {
       "b": "h",
       "quelle": "Soziale Bereiche des Lebens sichern",
       "zeilen": [
        "Problem: Lebt seit dem Tod seiner Frau allein und möchte wieder nach Hause.",
        "Ziel: Die Rückkehr nach Hause mit einem ambulanten Pflegedienst ist organisiert.",
        "Maßnahme: Sozialdienst einschalten, Kontakt zu einem Pflegedienst in seinem Wohnort herstellen."
       ],
       "motiv": "praxis"
      }
     ],
     "aufgaben": [
      {
       "situation": "Um 11 Uhr ist Herr Neumann blass, schwitzt stark und seine Hände zittern.",
       "loesung": "d",
       "erklaerung": "Das sind Zeichen einer Unterzuckerung. Zeile d sagt, was dann zu tun ist.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Es ist Mittwoch. Die Auszubildende fragt, ob heute bei Herrn Neumanns Bein noch etwas Besonderes zu tun ist.",
       "loesung": "b",
       "erklaerung": "Am Mittwoch ist laut Zeile b Verbandswechsel. Der Kompressionsverband aus Zeile c ist täglich.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Herr Neumann sagt im Nachtdienst, dass ihm das Bein weh tut. Auf der Skala zeigt er eine 6.",
       "loesung": "e",
       "erklaerung": "Zeile e: Bei einem Wert über 4 gibt es Bedarfsmedikation nach Anordnung.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Herr Neumann hat seine Brille verlegt und kann die Zeitung nicht mehr lesen.",
       "loesung": "x",
       "erklaerung": "Zeile g geht um das Hörgerät, nicht um die Brille. Zu diesem Problem gibt es keine Zeile.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Du sprichst Herrn Neumann von links an und fragst, ob er Tee möchte. Er reagiert nicht.",
       "loesung": "g",
       "erklaerung": "Zeile g: Er hört links schlecht und soll von rechts angesprochen werden.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "textwahl",
   "name": "Lesen: Beipackzettel, Rundschreiben, Regeln",
   "kurz": "Drei Texte, je zwei Aufgaben a/b/c",
   "was": "Drei verschiedene Texte, zum Beispiel ein Beipackzettel, ein Rundschreiben der Heimleitung und ein Auszug aus der Hygieneordnung. Je zwei Aufgaben mit drei Antworten.",
   "tipp": "Bei Beipackzetteln zählen Mengen, Zeiten und Ausnahmen: „nicht zusammen mit\", „höchstens\", „bei Kindern\".",
   "zeichen": "💊",
   "farbe": "rot",
   "punkte": 6,
   "runden": [
    {
     "id": "pfl3s1",
     "aufgaben": [
      {
       "frage": "Ein Bewohner hat um 8 Uhr eine Tablette bekommen. Die nächste darf er …",
       "opt": [
        "schon um 12 Uhr bekommen, wenn die Schmerzen stark sind.",
        "frühestens um 14 Uhr bekommen.",
        "erst am nächsten Morgen bekommen."
       ],
       "loesung": 1,
       "stelle": "Zwischen zwei Einnahmen müssen mindestens 6 Stunden liegen.",
       "erklaerung": "8 Uhr plus mindestens 6 Stunden ergibt frühestens 14 Uhr. Starke Schmerzen ändern daran nichts.",
       "text": {
        "sorte": "aushang",
        "quelle": "Beipackzettel: Auszug",
        "titel": "Gebrauchsinformation Schmerztabletten 400 mg: Einnahme",
        "zeilen": [
         "Erwachsene nehmen bei Bedarf 1 Tablette ein. Zwischen zwei Einnahmen müssen mindestens 6 Stunden liegen. Nehmen Sie nicht mehr als 3 Tabletten in 24 Stunden ein.",
         "Nehmen Sie die Tabletten mit einem Glas Wasser während oder nach einer Mahlzeit ein. Bei empfindlichem Magen sollen sie nicht auf nüchternen Magen genommen werden.",
         "Ältere Patienten haben ein höheres Risiko für Nebenwirkungen an Magen, Darm und Nieren. Bei ihnen soll die niedrigste wirksame Dosis über einen möglichst kurzen Zeitraum gegeben werden.",
         "Nehmen Sie das Arzneimittel ohne ärztlichen Rat nicht länger als 4 Tage gegen Schmerzen ein."
        ]
       }
      },
      {
       "frage": "Für ältere Menschen gilt laut Beipackzettel: …",
       "opt": [
        "Sie dürfen das Mittel nicht nehmen.",
        "Sie brauchen eine höhere Dosis.",
        "Sie sollen möglichst wenig und möglichst kurz behandelt werden."
       ],
       "loesung": 2,
       "stelle": "die niedrigste wirksame Dosis über einen möglichst kurzen Zeitraum",
       "erklaerung": "Das Mittel ist erlaubt, aber in niedriger Dosis und nur kurz, weil das Risiko höher ist.",
       "text": {
        "sorte": "aushang",
        "quelle": "Beipackzettel: Auszug",
        "titel": "Gebrauchsinformation Schmerztabletten 400 mg: Einnahme",
        "zeilen": [
         "Erwachsene nehmen bei Bedarf 1 Tablette ein. Zwischen zwei Einnahmen müssen mindestens 6 Stunden liegen. Nehmen Sie nicht mehr als 3 Tabletten in 24 Stunden ein.",
         "Nehmen Sie die Tabletten mit einem Glas Wasser während oder nach einer Mahlzeit ein. Bei empfindlichem Magen sollen sie nicht auf nüchternen Magen genommen werden.",
         "Ältere Patienten haben ein höheres Risiko für Nebenwirkungen an Magen, Darm und Nieren. Bei ihnen soll die niedrigste wirksame Dosis über einen möglichst kurzen Zeitraum gegeben werden.",
         "Nehmen Sie das Arzneimittel ohne ärztlichen Rat nicht länger als 4 Tage gegen Schmerzen ein."
        ]
       }
      },
      {
       "frage": "Die Bewohner des Wohnbereichs 3 essen im Februar …",
       "opt": [
        "zu anderen Zeiten als sonst.",
        "im Mehrzweckraum.",
        "in ihrem Aufenthaltsraum."
       ],
       "loesung": 2,
       "stelle": "die Bewohner des Wohnbereichs 3 essen in ihrem eigenen Aufenthaltsraum",
       "erklaerung": "Im Mehrzweckraum essen nur die Wohnbereiche 1 und 2. Die Essenszeiten bleiben gleich.",
       "text": {
        "sorte": "brief",
        "quelle": "Rundschreiben der Heimleitung",
        "titel": "Renovierung des Speisesaals im Haus Lindenhof",
        "zeilen": [
         "Liebe Bewohner, liebe Angehörige, liebe Mitarbeiter,",
         "vom 3. bis 28. Februar wird unser Speisesaal im Erdgeschoss renoviert. In dieser Zeit essen die Bewohner der Wohnbereiche 1 und 2 im Mehrzweckraum, die Bewohner des Wohnbereichs 3 essen in ihrem eigenen Aufenthaltsraum.",
         "Die Essenszeiten bleiben gleich. Wegen der Bauarbeiten ist der Haupteingang an Werktagen von 7 bis 16 Uhr geschlossen. Besucher kommen bitte in dieser Zeit über den Seiteneingang am Parkplatz ins Haus.",
         "Der Seiteneingang hat eine Klingel. Bitte nehmen Sie keine Bewohner mit nach draußen, auch wenn sie Sie freundlich darum bitten.",
         "Mit freundlichen Grüßen, Gerhard Linke, Heimleitung"
        ]
       }
      },
      {
       "frage": "Ein Besucher kommt an einem Dienstag um 10 Uhr. Er …",
       "opt": [
        "klingelt am Haupteingang.",
        "benutzt den Seiteneingang.",
        "kann das Haus nicht betreten."
       ],
       "loesung": 1,
       "stelle": "Besucher kommen bitte in dieser Zeit über den Seiteneingang am Parkplatz ins Haus.",
       "erklaerung": "Dienstag ist ein Werktag, der Haupteingang ist dann bis 16 Uhr zu.",
       "text": {
        "sorte": "brief",
        "quelle": "Rundschreiben der Heimleitung",
        "titel": "Renovierung des Speisesaals im Haus Lindenhof",
        "zeilen": [
         "Liebe Bewohner, liebe Angehörige, liebe Mitarbeiter,",
         "vom 3. bis 28. Februar wird unser Speisesaal im Erdgeschoss renoviert. In dieser Zeit essen die Bewohner der Wohnbereiche 1 und 2 im Mehrzweckraum, die Bewohner des Wohnbereichs 3 essen in ihrem eigenen Aufenthaltsraum.",
         "Die Essenszeiten bleiben gleich. Wegen der Bauarbeiten ist der Haupteingang an Werktagen von 7 bis 16 Uhr geschlossen. Besucher kommen bitte in dieser Zeit über den Seiteneingang am Parkplatz ins Haus.",
         "Der Seiteneingang hat eine Klingel. Bitte nehmen Sie keine Bewohner mit nach draußen, auch wenn sie Sie freundlich darum bitten.",
         "Mit freundlichen Grüßen, Gerhard Linke, Heimleitung"
        ]
       }
      },
      {
       "frage": "Die Hände werden laut Hygieneordnung gewaschen, …",
       "opt": [
        "vor jedem Kontakt mit Bewohnern.",
        "statt sie zu desinfizieren.",
        "zum Beispiel nach dem Toilettengang."
       ],
       "loesung": 2,
       "stelle": "nach dem Toilettengang und bei sichtbarer Verschmutzung",
       "erklaerung": "Vor dem Bewohnerkontakt wird desinfiziert. Waschen ersetzt die Desinfektion nicht.",
       "text": {
        "sorte": "aushang",
        "quelle": "Auszug aus der Hygieneordnung",
        "titel": "Händehygiene",
        "zeilen": [
         "Eine hygienische Händedesinfektion ist durchzuführen vor jedem direkten Kontakt mit Bewohnern, vor aseptischen Tätigkeiten, nach Kontakt mit Körperflüssigkeiten, nach Bewohnerkontakt und nach Kontakt mit der direkten Umgebung des Bewohners.",
         "Das Desinfektionsmittel wird auf die trockenen Hände gegeben und mindestens 30 Sekunden eingerieben, bis die Hände vollständig trocken sind.",
         "Händewaschen ersetzt die Desinfektion nicht. Gewaschen werden die Hände bei Dienstbeginn, nach dem Toilettengang und bei sichtbarer Verschmutzung.",
         "An Händen und Unterarmen werden keine Ringe, Uhren oder Armbänder getragen. Fingernägel sind kurz und rund geschnitten, künstliche oder lackierte Nägel sind nicht erlaubt."
        ]
       }
      },
      {
       "frage": "Was ist im Dienst erlaubt?",
       "opt": [
        "ein schmaler Ehering",
        "eine Uhr am Handgelenk",
        "kurze, nicht lackierte Fingernägel"
       ],
       "loesung": 2,
       "stelle": "Fingernägel sind kurz und rund geschnitten",
       "erklaerung": "Ringe und Uhren sind verboten, auch ein Ehering. Kurze Nägel ohne Lack sind Vorschrift.",
       "text": {
        "sorte": "aushang",
        "quelle": "Auszug aus der Hygieneordnung",
        "titel": "Händehygiene",
        "zeilen": [
         "Eine hygienische Händedesinfektion ist durchzuführen vor jedem direkten Kontakt mit Bewohnern, vor aseptischen Tätigkeiten, nach Kontakt mit Körperflüssigkeiten, nach Bewohnerkontakt und nach Kontakt mit der direkten Umgebung des Bewohners.",
         "Das Desinfektionsmittel wird auf die trockenen Hände gegeben und mindestens 30 Sekunden eingerieben, bis die Hände vollständig trocken sind.",
         "Händewaschen ersetzt die Desinfektion nicht. Gewaschen werden die Hände bei Dienstbeginn, nach dem Toilettengang und bei sichtbarer Verschmutzung.",
         "An Händen und Unterarmen werden keine Ringe, Uhren oder Armbänder getragen. Fingernägel sind kurz und rund geschnitten, künstliche oder lackierte Nägel sind nicht erlaubt."
        ]
       }
      }
     ]
    },
    {
     "id": "pfl3s2",
     "aufgaben": [
      {
       "frage": "Frau Berg hat ihre Morgentablette vergessen. Es ist 11 Uhr, die Abendtablette bekommt sie um 20 Uhr. Was ist richtig?",
       "opt": [
        "Die Morgentablette fällt heute weg.",
        "Sie bekommt um 20 Uhr zwei Tabletten.",
        "Sie bekommt die vergessene Tablette jetzt."
       ],
       "loesung": 2,
       "stelle": "nehmen Sie die Tablette ein, sobald Sie es bemerken",
       "erklaerung": "Die Tablette wird nachgeholt, sobald man es merkt. Die doppelte Menge ist verboten.",
       "text": {
        "sorte": "aushang",
        "quelle": "Beipackzettel: Auszug",
        "titel": "Gebrauchsinformation Tabletten zur Blutverdünnung: Wichtige Hinweise",
        "zeilen": [
         "Die Tabletten werden zweimal täglich im Abstand von etwa 12 Stunden eingenommen.",
         "Wenn Sie eine Einnahme vergessen haben, nehmen Sie die Tablette ein, sobald Sie es bemerken. Nehmen Sie aber nie die doppelte Menge ein, um eine vergessene Tablette auszugleichen.",
         "Achten Sie auf Zeichen einer Blutung: Nasenbluten, Zahnfleischbluten, blaue Flecken ohne Grund, roter oder schwarzer Stuhl, Blut im Urin. Informieren Sie in diesem Fall sofort einen Arzt.",
         "Sagen Sie vor jeder Operation und vor jeder Zahnbehandlung, dass Sie dieses Mittel einnehmen.",
         "Nehmen Sie ohne Rücksprache mit Ihrem Arzt keine Schmerzmittel wie Acetylsalicylsäure oder Ibuprofen ein, weil diese das Blutungsrisiko erhöhen."
        ]
       }
      },
      {
       "frage": "Ein Bewohner hat schwarzen Stuhl. Was soll man laut Beipackzettel tun?",
       "opt": [
        "sofort einen Arzt informieren",
        "die nächste Tablette weglassen",
        "mehr trinken lassen und abwarten"
       ],
       "loesung": 0,
       "stelle": "Informieren Sie in diesem Fall sofort einen Arzt.",
       "erklaerung": "Schwarzer Stuhl kann ein Zeichen einer Blutung sein, dann muss sofort ein Arzt informiert werden.",
       "text": {
        "sorte": "aushang",
        "quelle": "Beipackzettel: Auszug",
        "titel": "Gebrauchsinformation Tabletten zur Blutverdünnung: Wichtige Hinweise",
        "zeilen": [
         "Die Tabletten werden zweimal täglich im Abstand von etwa 12 Stunden eingenommen.",
         "Wenn Sie eine Einnahme vergessen haben, nehmen Sie die Tablette ein, sobald Sie es bemerken. Nehmen Sie aber nie die doppelte Menge ein, um eine vergessene Tablette auszugleichen.",
         "Achten Sie auf Zeichen einer Blutung: Nasenbluten, Zahnfleischbluten, blaue Flecken ohne Grund, roter oder schwarzer Stuhl, Blut im Urin. Informieren Sie in diesem Fall sofort einen Arzt.",
         "Sagen Sie vor jeder Operation und vor jeder Zahnbehandlung, dass Sie dieses Mittel einnehmen.",
         "Nehmen Sie ohne Rücksprache mit Ihrem Arzt keine Schmerzmittel wie Acetylsalicylsäure oder Ibuprofen ein, weil diese das Blutungsrisiko erhöhen."
        ]
       }
      },
      {
       "frage": "Wie bezahlen Bewohner ab April den Friseur?",
       "opt": [
        "über die Pflegekräfte im Wohnbereich",
        "über ihr Konto in der Verwaltung",
        "bar beim Friseur"
       ],
       "loesung": 1,
       "stelle": "Friseur und Fußpflege rechnen wir direkt über das Konto ab",
       "erklaerung": "Für Friseur und Fußpflege brauchen die Bewohner kein Bargeld mehr, es geht über das Konto.",
       "text": {
        "sorte": "email",
        "quelle": "Rundschreiben der Heimleitung",
        "titel": "Neue Regelung für das Taschengeld der Bewohner",
        "zeilen": [
         "Liebe Mitarbeiter,",
         "ab 1. April wird das Taschengeld der Bewohner nicht mehr in den Wohnbereichen aufbewahrt. Jeder Bewohner, der kein eigenes Geld bei sich haben möchte, bekommt ein Barbetragskonto in der Verwaltung.",
         "Bewohner oder Angehörige können dort montags bis freitags von 9 bis 12 Uhr Geld einzahlen oder abheben. Friseur und Fußpflege rechnen wir direkt über das Konto ab, die Bewohner brauchen dafür kein Bargeld mehr.",
         "Pflegekräfte dürfen ab April kein Geld mehr von Bewohnern annehmen oder für sie aufbewahren, auch nicht für kurze Zeit. Bitte geben Sie das Geld, das noch in den Wohnbereichen liegt, bis 31. März gegen Quittung in der Verwaltung ab.",
         "Mit freundlichen Grüßen, Renate Albers, Heimleitung"
        ]
       }
      },
      {
       "frage": "Ein Bewohner möchte einer Pflegekraft im Mai 20 Euro geben, damit sie ihm etwas vom Markt mitbringt. …",
       "opt": [
        "Die Pflegekraft darf das Geld nicht annehmen.",
        "Die Pflegekraft bringt das Geld bis 12 Uhr in die Verwaltung.",
        "Die Pflegekraft gibt ihm eine Quittung."
       ],
       "loesung": 0,
       "stelle": "Pflegekräfte dürfen ab April kein Geld mehr von Bewohnern annehmen",
       "erklaerung": "Ab April gilt: kein Geld annehmen, auch nicht für kurze Zeit. Die Quittung gilt nur für die Abgabe bis 31. März.",
       "text": {
        "sorte": "email",
        "quelle": "Rundschreiben der Heimleitung",
        "titel": "Neue Regelung für das Taschengeld der Bewohner",
        "zeilen": [
         "Liebe Mitarbeiter,",
         "ab 1. April wird das Taschengeld der Bewohner nicht mehr in den Wohnbereichen aufbewahrt. Jeder Bewohner, der kein eigenes Geld bei sich haben möchte, bekommt ein Barbetragskonto in der Verwaltung.",
         "Bewohner oder Angehörige können dort montags bis freitags von 9 bis 12 Uhr Geld einzahlen oder abheben. Friseur und Fußpflege rechnen wir direkt über das Konto ab, die Bewohner brauchen dafür kein Bargeld mehr.",
         "Pflegekräfte dürfen ab April kein Geld mehr von Bewohnern annehmen oder für sie aufbewahren, auch nicht für kurze Zeit. Bitte geben Sie das Geld, das noch in den Wohnbereichen liegt, bis 31. März gegen Quittung in der Verwaltung ab.",
         "Mit freundlichen Grüßen, Renate Albers, Heimleitung"
        ]
       }
      },
      {
       "frage": "Ein Bewohner mit MRSA möchte zum Kaffeetrinken in den Aufenthaltsraum. …",
       "opt": [
        "Das ist möglich, wenn seine Wunde abgedeckt ist.",
        "Das geht nur, wenn er einen Schutzkittel trägt.",
        "Das ist grundsätzlich verboten."
       ],
       "loesung": 0,
       "stelle": "wenn Wunden abgedeckt sind",
       "erklaerung": "Gemeinschaftsleben ist erlaubt, wenn Wunden abgedeckt sind. Den Kittel tragen nur die Pflegekräfte.",
       "text": {
        "sorte": "aushang",
        "quelle": "Auszug aus der Hygieneordnung",
        "titel": "Bewohner mit MRSA",
        "zeilen": [
         "Bewohner mit MRSA dürfen am Gemeinschaftsleben teilnehmen, wenn Wunden abgedeckt sind und die Bewohner die Händedesinfektion durchführen können.",
         "Bei pflegerischen Tätigkeiten mit engem Körperkontakt, zum Beispiel beim Waschen, beim Lagern oder beim Verbandswechsel, tragen Pflegekräfte zusätzlich einen Schutzkittel und Einmalhandschuhe.",
         "Schutzkittel werden im Zimmer angezogen und vor dem Verlassen des Zimmers abgelegt. Sie werden nach jeder Benutzung entsorgt.",
         "Blutdruckmanschette, Stethoskop und Fieberthermometer bleiben im Zimmer und werden nicht bei anderen Bewohnern benutzt."
        ]
       }
      },
      {
       "frage": "Den Schutzkittel …",
       "opt": [
        "trägt man bei jedem Besuch im Zimmer.",
        "zieht man aus, bevor man das Zimmer verlässt.",
        "hängt man nach der Pflege an die Zimmertür."
       ],
       "loesung": 1,
       "stelle": "vor dem Verlassen des Zimmers abgelegt",
       "erklaerung": "Der Kittel wird vor dem Verlassen ausgezogen und entsorgt, nicht wieder benutzt.",
       "text": {
        "sorte": "aushang",
        "quelle": "Auszug aus der Hygieneordnung",
        "titel": "Bewohner mit MRSA",
        "zeilen": [
         "Bewohner mit MRSA dürfen am Gemeinschaftsleben teilnehmen, wenn Wunden abgedeckt sind und die Bewohner die Händedesinfektion durchführen können.",
         "Bei pflegerischen Tätigkeiten mit engem Körperkontakt, zum Beispiel beim Waschen, beim Lagern oder beim Verbandswechsel, tragen Pflegekräfte zusätzlich einen Schutzkittel und Einmalhandschuhe.",
         "Schutzkittel werden im Zimmer angezogen und vor dem Verlassen des Zimmers abgelegt. Sie werden nach jeder Benutzung entsorgt.",
         "Blutdruckmanschette, Stethoskop und Fieberthermometer bleiben im Zimmer und werden nicht bei anderen Bewohnern benutzt."
        ]
       }
      }
     ]
    },
    {
     "id": "pfl3s3",
     "aufgaben": [
      {
       "frage": "Frau Kaya bekommt noch andere Augentropfen. Was gilt?",
       "opt": [
        "Die anderen Tropfen gibt man nur am Morgen.",
        "Zwischen den beiden Tropfen müssen mindestens 5 Minuten liegen.",
        "Man gibt beide Tropfen direkt nacheinander."
       ],
       "loesung": 1,
       "stelle": "warten Sie zwischen den beiden Mitteln mindestens 5 Minuten",
       "erklaerung": "Zwischen zwei Augentropfen muss man mindestens 5 Minuten warten.",
       "text": {
        "sorte": "aushang",
        "quelle": "Beipackzettel: Auszug",
        "titel": "Gebrauchsinformation Augentropfen gegen grünen Star: Anwendung",
        "zeilen": [
         "Geben Sie einmal täglich am Abend einen Tropfen in jedes erkrankte Auge.",
         "Waschen Sie sich vorher die Hände. Berühren Sie mit der Tropfflasche nicht das Auge oder die Wimpern, damit die Lösung sauber bleibt.",
         "Wenn Sie noch andere Augentropfen benutzen, warten Sie zwischen den beiden Mitteln mindestens 5 Minuten.",
         "Vor dem Öffnen im Kühlschrank aufbewahren. Nach dem Öffnen kann die Flasche bei Raumtemperatur stehen und muss nach 4 Wochen weggeworfen werden."
        ]
       }
      },
      {
       "frage": "Eine geöffnete Flasche …",
       "opt": [
        "darf nach 4 Wochen nicht mehr benutzt werden.",
        "muss weiter im Kühlschrank stehen.",
        "kann bis zum Datum auf der Packung benutzt werden."
       ],
       "loesung": 0,
       "stelle": "muss nach 4 Wochen weggeworfen werden",
       "erklaerung": "Der Kühlschrank gilt nur vor dem Öffnen. Nach dem Öffnen ist die Flasche 4 Wochen haltbar.",
       "text": {
        "sorte": "aushang",
        "quelle": "Beipackzettel: Auszug",
        "titel": "Gebrauchsinformation Augentropfen gegen grünen Star: Anwendung",
        "zeilen": [
         "Geben Sie einmal täglich am Abend einen Tropfen in jedes erkrankte Auge.",
         "Waschen Sie sich vorher die Hände. Berühren Sie mit der Tropfflasche nicht das Auge oder die Wimpern, damit die Lösung sauber bleibt.",
         "Wenn Sie noch andere Augentropfen benutzen, warten Sie zwischen den beiden Mitteln mindestens 5 Minuten.",
         "Vor dem Öffnen im Kühlschrank aufbewahren. Nach dem Öffnen kann die Flasche bei Raumtemperatur stehen und muss nach 4 Wochen weggeworfen werden."
        ]
       }
      },
      {
       "frage": "Angehörige, die zum Fest kommen möchten, …",
       "opt": [
        "melden sich bis 13. Juni am Empfang an.",
        "melden sich bei Frau Demir an.",
        "bezahlen nichts für das Essen."
       ],
       "loesung": 0,
       "stelle": "melden Sie sich bitte bis 13. Juni am Empfang an",
       "erklaerung": "Anmeldung am Empfang. Bei Frau Demir melden sich nur Helfer.",
       "text": {
        "sorte": "brief",
        "quelle": "Rundschreiben der Heimleitung",
        "titel": "Einladung zum Sommerfest am 21. Juni",
        "zeilen": [
         "Liebe Bewohner, liebe Angehörige,",
         "am Samstag, 21. Juni, feiern wir ab 14 Uhr unser Sommerfest im Garten. Bei Regen findet das Fest im Speisesaal statt.",
         "Angehörige sind herzlich eingeladen. Damit die Küche planen kann, melden Sie sich bitte bis 13. Juni am Empfang an und sagen Sie, wie viele Personen kommen. Für Angehörige kostet das Essen 8 Euro, für Bewohner ist es kostenlos.",
         "Bewohner, die nicht in den Garten kommen können, besucht unser Chor um 16 Uhr in den Wohnbereichen. Wer beim Aufbau und Abbau helfen möchte, meldet sich bitte bei Frau Demir vom Sozialen Dienst.",
         "Herzliche Grüße, Uwe Fiedler, Heimleitung"
        ]
       }
      },
      {
       "frage": "Bewohner, die im Bett bleiben müssen, …",
       "opt": [
        "hören den Chor in ihrem Wohnbereich.",
        "können das Fest im Speisesaal besuchen.",
        "bekommen das Essen um 16 Uhr."
       ],
       "loesung": 0,
       "stelle": "besucht unser Chor um 16 Uhr in den Wohnbereichen",
       "erklaerung": "Für Bewohner, die nicht in den Garten können, singt der Chor im Wohnbereich.",
       "text": {
        "sorte": "brief",
        "quelle": "Rundschreiben der Heimleitung",
        "titel": "Einladung zum Sommerfest am 21. Juni",
        "zeilen": [
         "Liebe Bewohner, liebe Angehörige,",
         "am Samstag, 21. Juni, feiern wir ab 14 Uhr unser Sommerfest im Garten. Bei Regen findet das Fest im Speisesaal statt.",
         "Angehörige sind herzlich eingeladen. Damit die Küche planen kann, melden Sie sich bitte bis 13. Juni am Empfang an und sagen Sie, wie viele Personen kommen. Für Angehörige kostet das Essen 8 Euro, für Bewohner ist es kostenlos.",
         "Bewohner, die nicht in den Garten kommen können, besucht unser Chor um 16 Uhr in den Wohnbereichen. Wer beim Aufbau und Abbau helfen möchte, meldet sich bitte bei Frau Demir vom Sozialen Dienst.",
         "Herzliche Grüße, Uwe Fiedler, Heimleitung"
        ]
       }
      },
      {
       "frage": "Nach dem Insulinspritzen …",
       "opt": [
        "steckt man die Kappe wieder auf die Nadel.",
        "sammelt man die Nadeln auf dem Pflegewagen.",
        "wirft man die Nadel sofort in den Abwurfbehälter."
       ],
       "loesung": 2,
       "stelle": "sofort nach der Benutzung in einen durchstichsicheren Abwurfbehälter gegeben",
       "erklaerung": "Die Kappe darf nicht zurückgesteckt werden. Die Nadel kommt sofort in den Abwurfbehälter.",
       "text": {
        "sorte": "aushang",
        "quelle": "Auszug aus der Hygieneordnung",
        "titel": "Umgang mit spitzen und scharfen Gegenständen",
        "zeilen": [
         "Benutzte Kanülen werden nicht in die Schutzkappe zurückgesteckt.",
         "Spitze und scharfe Gegenstände werden sofort nach der Benutzung in einen durchstichsicheren Abwurfbehälter gegeben. Der Behälter wird höchstens bis zur Markierung gefüllt.",
         "Wo es möglich ist, werden Sicherheitsprodukte benutzt, zum Beispiel Kanülen und Pen-Nadeln mit Schutzmechanismus.",
         "Nach einer Stichverletzung lassen Sie die Wunde bluten, desinfizieren sie und melden den Unfall sofort der Wohnbereichsleitung. Anschließend stellen Sie sich beim Durchgangsarzt vor."
        ]
       }
      },
      {
       "frage": "Nach einer Stichverletzung muss die Pflegekraft …",
       "opt": [
        "zuerst den Hausarzt des Bewohners anrufen.",
        "den Unfall melden und zum Durchgangsarzt gehen.",
        "die Wunde sofort fest abbinden."
       ],
       "loesung": 1,
       "stelle": "Anschließend stellen Sie sich beim Durchgangsarzt vor.",
       "erklaerung": "Bluten lassen, desinfizieren, melden und dann zum Durchgangsarzt. Vom Hausarzt steht nichts im Text.",
       "text": {
        "sorte": "aushang",
        "quelle": "Auszug aus der Hygieneordnung",
        "titel": "Umgang mit spitzen und scharfen Gegenständen",
        "zeilen": [
         "Benutzte Kanülen werden nicht in die Schutzkappe zurückgesteckt.",
         "Spitze und scharfe Gegenstände werden sofort nach der Benutzung in einen durchstichsicheren Abwurfbehälter gegeben. Der Behälter wird höchstens bis zur Markierung gefüllt.",
         "Wo es möglich ist, werden Sicherheitsprodukte benutzt, zum Beispiel Kanülen und Pen-Nadeln mit Schutzmechanismus.",
         "Nach einer Stichverletzung lassen Sie die Wunde bluten, desinfizieren sie und melden den Unfall sofort der Wohnbereichsleitung. Anschließend stellen Sie sich beim Durchgangsarzt vor."
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
   "name": "Lesen: Informationstext",
   "kurz": "Ein Infotext, drei Aussagen richtig/falsch",
   "was": "Ein halbformeller Informationstext, zum Beispiel über eine Fortbildung oder neue Dienstplanregeln. Drei Aussagen: richtig oder falsch?",
   "tipp": "Achte auf „nur\", „spätestens\", „außer\": Die Ausnahme entscheidet.",
   "zeichen": "📄",
   "farbe": "lila",
   "punkte": 3,
   "runden": [
    {
     "id": "pfl4s1",
     "texte": [
      {
       "sorte": "regel",
       "motiv": "praxis",
       "von": "Fortbildungsprogramm, Seniorenzentrum Am Mühlbach",
       "betreff": "Pflichtfortbildungen und freiwillige Kurse",
       "zeilen": [
        "Für alle Pflegekräfte sind jedes Jahr drei Fortbildungen Pflicht: Hygiene, Brandschutz und Erste Hilfe mit Reanimation. Diese Termine finden während der Arbeitszeit statt und werden im Dienstplan eingeplant.",
        "Daneben bieten wir freiwillige Kurse an, zum Beispiel zu Wundversorgung, Kinästhetik und Palliativpflege. Wer an einem freiwilligen Kurs in seiner Freizeit teilnimmt, bekommt die Zeit als Plusstunden gutgeschrieben.",
        "Die Anmeldung für alle Kurse läuft über die Wohnbereichsleitung, spätestens vier Wochen vor dem Termin. Die Wohnbereichsleitung prüft, ob der Dienstplan die Teilnahme erlaubt.",
        "Für externe Fortbildungen mit Kosten über 200 Euro ist ein schriftlicher Antrag bei der Pflegedienstleitung nötig. Wer das Haus innerhalb von zwölf Monaten nach einer solchen Fortbildung verlässt, muss die Kosten anteilig zurückzahlen.",
        "Jede Teilnahme wird mit einer Bescheinigung in der Personalakte dokumentiert. Wer eine Pflichtfortbildung verpasst hat, wird automatisch für den nächsten Termin eingeteilt."
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Für die Brandschutzschulung muss man einen freien Tag nehmen.",
       "loesung": false,
       "stelle": "Diese Termine finden während der Arbeitszeit statt",
       "erklaerung": "Pflichtfortbildungen wie Brandschutz liegen in der Arbeitszeit."
      },
      {
       "satz": "Wer in der Freizeit einen Kurs zur Palliativpflege besucht, bekommt dafür Plusstunden.",
       "loesung": true,
       "stelle": "bekommt die Zeit als Plusstunden gutgeschrieben",
       "erklaerung": "Palliativpflege ist ein freiwilliger Kurs, die Freizeit wird als Plusstunden gutgeschrieben."
      },
      {
       "satz": "Wer nach einer teuren externen Fortbildung bald kündigt, muss eventuell einen Teil der Kosten bezahlen.",
       "loesung": true,
       "stelle": "muss die Kosten anteilig zurückzahlen",
       "erklaerung": "Anteilig zurückzahlen heißt einen Teil bezahlen, wenn man innerhalb von zwölf Monaten geht."
      }
     ]
    },
    {
     "id": "pfl4s2",
     "texte": [
      {
       "sorte": "regel",
       "motiv": "praxis",
       "von": "Information der Pflegedienstleitung, Ambulanter Pflegedienst Elbufer",
       "betreff": "Neue Pflegedokumentation auf dem Tablet",
       "zeilen": [
        "Ab dem 1. März dokumentieren alle Pflegekräfte die Einsätze auf dem Tablet. Die Papiermappen bei den Patienten werden bis Ende März eingesammelt und im Büro archiviert.",
        "Jede Pflegekraft bekommt einen eigenen Zugang mit Passwort. Das Passwort darf nicht weitergegeben werden, auch nicht an Kollegen aus derselben Tour.",
        "Die Leistungen werden direkt beim Patienten abgehakt. Den Pflegebericht kann man auch nach dem Einsatz im Auto schreiben, er muss aber spätestens am Ende der Tour im System sein.",
        "Ohne Internetverbindung speichert das Tablet die Daten und überträgt sie automatisch, sobald wieder Netz da ist.",
        "Für alle Mitarbeiter gibt es eine Schulung von zwei Stunden, die Termine stehen im Dienstplan. Bei Problemen mit dem Gerät hilft die Hotline, die täglich von 6 bis 22 Uhr erreichbar ist."
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Bis Ende März dokumentiert man noch in den Papiermappen.",
       "loesung": false,
       "stelle": "Ab dem 1. März dokumentieren alle Pflegekräfte die Einsätze auf dem Tablet.",
       "erklaerung": "Ab 1. März wird auf dem Tablet dokumentiert. Bis Ende März werden die Mappen nur eingesammelt."
      },
      {
       "satz": "Den Pflegebericht darf man auch nach dem Besuch beim Patienten schreiben.",
       "loesung": true,
       "stelle": "Den Pflegebericht kann man auch nach dem Einsatz im Auto schreiben",
       "erklaerung": "Der Bericht darf später geschrieben werden, spätestens bis zum Ende der Tour."
      },
      {
       "satz": "Ohne Internet kann man auf dem Tablet nicht dokumentieren.",
       "loesung": false,
       "stelle": "Ohne Internetverbindung speichert das Tablet die Daten",
       "erklaerung": "Das Tablet speichert die Daten und schickt sie später automatisch."
      }
     ]
    },
    {
     "id": "pfl4s3",
     "texte": [
      {
       "sorte": "regel",
       "motiv": "praxis",
       "von": "Information des Betriebsärztlichen Dienstes, Klinikum Rheinhausen",
       "betreff": "Grippeschutzimpfung für Mitarbeiter",
       "zeilen": [
        "Auch in diesem Jahr bietet der Betriebsärztliche Dienst allen Mitarbeitern eine kostenlose Grippeschutzimpfung an. Die Ständige Impfkommission empfiehlt die Impfung jedes Jahr für alle Beschäftigten im Gesundheitswesen.",
        "Geimpft wird vom 14. Oktober bis 8. November in Raum 0.12 neben der Cafeteria, montags bis freitags von 7.30 bis 9 Uhr und von 13 bis 14.30 Uhr. Ein Termin ist nicht nötig.",
        "Für Mitarbeiter im Nachtdienst kommt eine Betriebsärztin an zwei Abenden auf die Stationen. Die Daten werden per Aushang bekannt gegeben.",
        "Die Impfung ist freiwillig und zählt als Arbeitszeit. Bitte bringen Sie Ihren Impfpass mit. Wer keinen Impfpass hat, bekommt eine Bescheinigung.",
        "Wer am Impftag Fieber hat, wird nicht geimpft und kommt bitte an einem späteren Tag. Ein leichter Schnupfen ist kein Grund, die Impfung zu verschieben."
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Für die Impfung muss man vorher einen Termin vereinbaren.",
       "loesung": false,
       "stelle": "Ein Termin ist nicht nötig.",
       "erklaerung": "Man kann in den genannten Zeiten ohne Termin kommen."
      },
      {
       "satz": "Mitarbeiter mit einem leichten Schnupfen können trotzdem geimpft werden.",
       "loesung": true,
       "stelle": "Ein leichter Schnupfen ist kein Grund, die Impfung zu verschieben.",
       "erklaerung": "Nur Fieber ist ein Grund zu warten, ein leichter Schnupfen nicht."
      },
      {
       "satz": "Die Impfung ist für alle Mitarbeiter im Krankenhaus Pflicht.",
       "loesung": false,
       "stelle": "Die Impfung ist freiwillig und zählt als Arbeitszeit.",
       "erklaerung": "Die Impfung wird empfohlen, aber sie ist freiwillig."
      }
     ]
    }
   ]
  },
  {
   "nr": 5,
   "art": "textwahl",
   "name": "Sprachbausteine: Wörter einsetzen",
   "kurz": "Ein Bericht, acht Lücken, zehn Wörter",
   "was": "Ein Pflegebericht mit acht Lücken und zehn Wörtern. Jedes Wort passt höchstens einmal, zwei bleiben übrig.",
   "tipp": "Zeit und Grund verbinden: „nachdem\", „weil\", „deshalb\", „danach\". Lies den Satz bis zum Ende.",
   "zeichen": "🧩",
   "farbe": "turq",
   "punkte": 8,
   "runden": [
    {
     "id": "pfsb1s1",
     "text": {
      "sorte": "brief",
      "quelle": "Bericht",
      "titel": "Pflegebericht Frühdienst: Frau Margarete Lenz",
      "zeilen": [
       "Pflegebericht Frühdienst, 12.03., Frau Margarete Lenz, Zimmer 14",
       "Frau Lenz hat in der Nacht unruhig geschlafen, __(1)__ sie um 6.30 Uhr noch sehr müde war. Sie wollte zuerst nicht aufstehen. __(2)__ wir ihr etwas Zeit gelassen hatten, hat sie sich mit Unterstützung am Waschbecken gewaschen. Rücken und Füße hat die Pflegekraft übernommen, __(3)__ Frau Lenz sich nicht weit genug bücken kann.",
       "Beim Frühstück hat sie nur eine halbe Scheibe Brot gegessen, __(4)__ hat sie zwei Tassen Kaffee und ein Glas Saft getrunken. __(5)__ dem Frühstück lag der Blutdruck bei 150 zu 90 mmHg. __(6)__ Frau Lenz keine Beschwerden hatte, wurde der Hausarzt nicht informiert. Der Wert wird am Nachmittag noch einmal kontrolliert.",
       "Um 10 Uhr hat sie an der Gymnastikgruppe teilgenommen, __(7)__ sie zuerst keine Lust hatte. __(8)__ hat sie bis zum Mittagessen in ihrem Zimmer geschlafen.",
       "Handzeichen: A. K."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "denn",
        "Nachdem",
        "dafür",
        "weil",
        "Danach",
        "sodass",
        "Bevor",
        "Da",
        "obwohl",
        "Nach"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "„sodass“ nennt eine Folge, „weil“ und „Da“ nennen einen Grund. Vor einem Nebensatz mit Verb am Ende („keine Lust hatte“) passt „obwohl“, nicht „denn“. „Bevor“ ergibt zeitlich keinen Sinn."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "denn",
        "Nachdem",
        "dafür",
        "weil",
        "Danach",
        "sodass",
        "Bevor",
        "Da",
        "obwohl",
        "Nach"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Richtig ist „Nachdem\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "denn",
        "Nachdem",
        "dafür",
        "weil",
        "Danach",
        "sodass",
        "Bevor",
        "Da",
        "obwohl",
        "Nach"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „weil\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "denn",
        "Nachdem",
        "dafür",
        "weil",
        "Danach",
        "sodass",
        "Bevor",
        "Da",
        "obwohl",
        "Nach"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „dafür\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "denn",
        "Nachdem",
        "dafür",
        "weil",
        "Danach",
        "sodass",
        "Bevor",
        "Da",
        "obwohl",
        "Nach"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „Nach\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "denn",
        "Nachdem",
        "dafür",
        "weil",
        "Danach",
        "sodass",
        "Bevor",
        "Da",
        "obwohl",
        "Nach"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Richtig ist „Da\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "denn",
        "Nachdem",
        "dafür",
        "weil",
        "Danach",
        "sodass",
        "Bevor",
        "Da",
        "obwohl",
        "Nach"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „obwohl\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "denn",
        "Nachdem",
        "dafür",
        "weil",
        "Danach",
        "sodass",
        "Bevor",
        "Da",
        "obwohl",
        "Nach"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „Danach\". Jedes Wort passt nur einmal."
      }
     ]
    },
    {
     "id": "pfsb1s2",
     "text": {
      "sorte": "brief",
      "quelle": "Bericht",
      "titel": "Übergabe Spätdienst an Nachtdienst: Herr Peter Kraus",
      "zeilen": [
       "Übergabe Spätdienst an Nachtdienst, Station 3A, Zimmer 8, Herr Peter Kraus, 67 Jahre",
       "Herr Kraus hat heute Vormittag eine neue Hüfte bekommen. __(1)__ er um 14 Uhr aus dem Aufwachraum kam, waren die Vitalzeichen stabil. Er hat starke Schmerzen in der Hüfte angegeben, __(2)__ er um 16 Uhr das Schmerzmittel nach Anordnung bekommen hat. __(3)__ einer halben Stunde lag der Wert auf der Schmerzskala nur noch bei 3.",
       "Der Verband ist trocken, die Drainage hat bis 20 Uhr 80 ml gefördert. Herr Kraus darf heute noch nicht aufstehen, __(4)__ er wurde zweimal im Bett gelagert. Er hat Tee und Suppe gut vertragen, __(5)__ ihm am Nachmittag kurz übel war.",
       "Bitte in der Nacht alle zwei Stunden Blutdruck und Puls messen, __(6)__ er bei der Operation viel Blut verloren hat. __(7)__ der systolische Blutdruck unter 100 mmHg fällt, sofort den diensthabenden Arzt informieren. Der Blasenkatheter bleibt liegen, __(8)__ der Arzt ihn morgen bei der Visite entfernen lässt.",
       "Übergeben von: S. Becker"
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "weil",
        "Seit",
        "aber",
        "bis",
        "Als",
        "denn",
        "obwohl",
        "Nach",
        "weshalb",
        "Falls"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„Als“ steht bei einem einmaligen Ereignis in der Vergangenheit. „denn“ passt nicht vor „er bei der Operation viel Blut verloren hat“, weil das Verb am Ende steht. „Seit einer halben Stunde“ passt nicht zur Vergangenheit „lag“."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "weil",
        "Seit",
        "aber",
        "bis",
        "Als",
        "denn",
        "obwohl",
        "Nach",
        "weshalb",
        "Falls"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „weshalb\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "weil",
        "Seit",
        "aber",
        "bis",
        "Als",
        "denn",
        "obwohl",
        "Nach",
        "weshalb",
        "Falls"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Richtig ist „Nach\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "weil",
        "Seit",
        "aber",
        "bis",
        "Als",
        "denn",
        "obwohl",
        "Nach",
        "weshalb",
        "Falls"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „aber\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "weil",
        "Seit",
        "aber",
        "bis",
        "Als",
        "denn",
        "obwohl",
        "Nach",
        "weshalb",
        "Falls"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „obwohl\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "weil",
        "Seit",
        "aber",
        "bis",
        "Als",
        "denn",
        "obwohl",
        "Nach",
        "weshalb",
        "Falls"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Richtig ist „weil\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "weil",
        "Seit",
        "aber",
        "bis",
        "Als",
        "denn",
        "obwohl",
        "Nach",
        "weshalb",
        "Falls"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „Falls\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "weil",
        "Seit",
        "aber",
        "bis",
        "Als",
        "denn",
        "obwohl",
        "Nach",
        "weshalb",
        "Falls"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „bis\". Jedes Wort passt nur einmal."
      }
     ]
    },
    {
     "id": "pfsb1s3",
     "text": {
      "sorte": "brief",
      "quelle": "Bericht",
      "titel": "Sturzprotokoll: Herr Anton Weiß",
      "zeilen": [
       "Sturzprotokoll, Wohnbereich 2, Herr Anton Weiß, 81 Jahre",
       "Datum und Uhrzeit: 04.11., ca. 2.40 Uhr",
       "Herr Weiß wollte in der Nacht allein zur Toilette gehen, __(1)__ zu klingeln. Er hat den Rollator nicht benutzt, __(2)__ dieser am Fenster stand. __(3)__ er aus dem Bett aufgestanden ist, hat er kein Licht eingeschaltet. Auf dem Weg ins Bad ist er auf dem Teppich ausgerutscht und auf die linke Seite gefallen.",
       "Die Nachtwache hat ihn um 2.45 Uhr auf dem Boden gefunden, __(4)__ sie ein Geräusch gehört hatte. Herr Weiß war wach und orientiert. Er klagte über leichte Schmerzen in der linken Hüfte, __(5)__ konnte er das Bein normal bewegen. Eine Verletzung war nicht zu sehen. __(6)__ der Untersuchung wurde er von zwei Pflegekräften zurück ins Bett gebracht.",
       "Der Bereitschaftsarzt wurde informiert, __(7)__ er über ein Schmerzmittel und eine Röntgenaufnahme entscheiden konnte. __(8)__ wird Herr Weiß bis zum Morgen stündlich kontrolliert.",
       "Maßnahmen: Teppich entfernt, Rollator ans Bett gestellt, Nachtlicht eingeschaltet."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "nachdem",
        "Außerdem",
        "ohne",
        "damit",
        "obwohl",
        "trotzdem",
        "weil",
        "Nach",
        "Als",
        "wenn"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„ohne … zu“ steht mit Infinitiv. „trotzdem“ steht im Hauptsatz mit Verb an Position zwei („trotzdem konnte er“), „obwohl“ bräuchte das Verb am Ende. „wenn“ passt nicht für ein einmaliges Ereignis in der Vergangenheit."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "nachdem",
        "Außerdem",
        "ohne",
        "damit",
        "obwohl",
        "trotzdem",
        "weil",
        "Nach",
        "Als",
        "wenn"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „weil\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "nachdem",
        "Außerdem",
        "ohne",
        "damit",
        "obwohl",
        "trotzdem",
        "weil",
        "Nach",
        "Als",
        "wenn"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „Als\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "nachdem",
        "Außerdem",
        "ohne",
        "damit",
        "obwohl",
        "trotzdem",
        "weil",
        "Nach",
        "Als",
        "wenn"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Richtig ist „nachdem\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "nachdem",
        "Außerdem",
        "ohne",
        "damit",
        "obwohl",
        "trotzdem",
        "weil",
        "Nach",
        "Als",
        "wenn"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „trotzdem\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "nachdem",
        "Außerdem",
        "ohne",
        "damit",
        "obwohl",
        "trotzdem",
        "weil",
        "Nach",
        "Als",
        "wenn"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Richtig ist „Nach\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "nachdem",
        "Außerdem",
        "ohne",
        "damit",
        "obwohl",
        "trotzdem",
        "weil",
        "Nach",
        "Als",
        "wenn"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „damit\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "nachdem",
        "Außerdem",
        "ohne",
        "damit",
        "obwohl",
        "trotzdem",
        "weil",
        "Nach",
        "Als",
        "wenn"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Richtig ist „Außerdem\". Jedes Wort passt nur einmal."
      }
     ]
    }
   ]
  },
  {
   "nr": 6,
   "art": "textwahl",
   "name": "Sprachbausteine: Berichtssprache",
   "kurz": "Ein Bericht, zehn Lücken a/b/c",
   "was": "Ein Bericht mit zehn Lücken und je drei Möglichkeiten: Verben, Präpositionen, ähnliche Fachwörter.",
   "tipp": "Im Bericht stehen feste Verbindungen: „Blutdruck messen\", „Wunde versorgen\", „zur Toilette begleiten\".",
   "zeichen": "🔤",
   "farbe": "gold",
   "punkte": 10,
   "runden": [
    {
     "id": "pfsb2s1",
     "text": {
      "sorte": "brief",
      "quelle": "Bericht",
      "titel": "Pflegebericht: Herr Friedrich Wendt, Wohnbereich 1",
      "zeilen": [
       "Frühdienst, 18.02.",
       "Herr Wendt wurde um 7 Uhr geweckt und hat sich mit Unterstützung am Waschbecken gewaschen. Dabei hat er über Schmerzen im rechten Knie __(1)__.",
       "Das Knie war leicht geschwollen und warm. Die Pflegekraft hat es mit einem kühlen Umschlag __(2)__ und das Bein hochgelagert. Der Hausarzt wurde um 9 Uhr telefonisch __(3)__, er kommt am Nachmittag zur Visite.",
       "Nach dem Frühstück wurde Herr Wendt im Rollstuhl in den Aufenthaltsraum __(4)__, weil er heute nicht laufen wollte. Beim Mittagessen hat er die Hälfte der Portion __(5)__. Die Trinkmenge lag bis 13 Uhr bei 800 ml.",
       "Das Schmerzmittel wurde nach ärztlicher __(6)__ um 12 Uhr gegeben. Der Blutdruck lag um 12 Uhr __(7)__ 135 zu 85 mmHg.",
       "Herr Wendt __(8)__ den Wunsch, den Nachmittag in seinem Zimmer zu verbringen. Bei der Visite um 15 Uhr hat der Arzt das Knie __(9)__ und eine Salbe verordnet.",
       "Bitte im Spätdienst auf Schwellung und Schmerzen __(10)__ und den Verlauf dokumentieren."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "gesagt",
        "geklagt",
        "gesprochen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Verbindung: „über Schmerzen klagen“."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "versorgt",
        "gelegt",
        "gemacht"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„etwas mit einem Umschlag versorgen“ ist Berichtssprache. „legen“ bräuchte eine Richtung."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "berichtet",
        "beauftragt",
        "benachrichtigt"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Den Arzt „benachrichtigen“ heißt ihn informieren. „berichten“ braucht ein Objekt wie „etwas“."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "gegangen",
        "gefahren",
        "gelaufen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Im Rollstuhl wird man „gefahren“. Gehen und laufen passen nicht ins Passiv."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "eingenommen",
        "gegessen",
        "eingesetzt"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Essen wird „gegessen“. „eingenommen“ sagt man bei Medikamenten."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Zuordnung",
        "Einordnung",
        "Anordnung"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Verbindung: „nach ärztlicher Anordnung“."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "bei",
        "an",
        "zu"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Ein Wert „liegt bei“ einer Zahl."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "meldete",
        "äußerte",
        "sagte"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Verbindung: „einen Wunsch äußern“."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "untersucht",
        "besucht",
        "versucht"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Der Arzt „untersucht“ das Knie. „besuchen“ kann man nur Personen oder Orte."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "beobachten",
        "betrachten",
        "achten"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„auf etwas achten“ steht mit „auf“. „beobachten“ hat ein direktes Objekt ohne Präposition."
      }
     ]
    },
    {
     "id": "pfsb2s2",
     "text": {
      "sorte": "brief",
      "quelle": "Bericht",
      "titel": "Wundbericht: Frau Hedwig Brunner, Dekubitus am Steiß",
      "zeilen": [
       "Verbandswechsel am 22.05. im Frühdienst",
       "Bei Frau Brunner besteht seit dem 2. Mai ein Dekubitus der Kategorie 2 am Steiß. Die Wunde wurde heute nach dem Wundplan __(1)__.",
       "Der alte Verband ließ sich ohne Schmerzen __(2)__, er war nur leicht mit Wundsekret durchfeuchtet. Die Wunde misst 2,0 x 1,5 cm und ist damit seit der letzten Messung __(3)__ geworden.",
       "Der Wundgrund ist rosig und sauber, es gibt keine __(4)__ einer Infektion. Der Wundrand ist intakt, die Haut um die Wunde ist nicht __(5)__.",
       "Die Wunde wurde mit Wundspüllösung __(6)__ und mit einem Schaumverband abgedeckt. Frau Brunner wird weiterhin alle zwei Stunden __(7)__, die Wechseldruckmatratze funktioniert. Sie hat beim Verbandswechsel gut __(8)__.",
       "Nächster Verbandswechsel am 25.05. Ist der Verband vorher durchnässt, wird er __(9)__ gewechselt.",
       "Die Wunde wird einmal pro Woche mit Foto __(10)__."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "besorgt",
        "versorgt",
        "gesorgt"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Eine Wunde wird „versorgt“. „besorgen“ heißt kaufen oder holen."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "entfernen",
        "entfallen",
        "entlassen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Einen Verband „entfernen“ heißt ihn abnehmen."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "weniger",
        "kleiner",
        "geringer"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Für die Größe einer Wunde sagt man „kleiner“."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Bezeichnungen",
        "Zeiger",
        "Zeichen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Verbindung: „Zeichen einer Infektion“."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "errötet",
        "gebräunt",
        "gerötet"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Haut ist „gerötet“. „erröten“ sagt man, wenn jemand vor Scham rot wird."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "gereinigt",
        "gereicht",
        "gerettet"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Mit Spüllösung wird die Wunde „gereinigt“."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "gelegt",
        "gelagert",
        "gelegen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Fachwort: Bewohner werden „gelagert“, das gehört zur Dekubitusprophylaxe."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "mitgeteilt",
        "mitgenommen",
        "mitgemacht"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„gut mitmachen“ heißt kooperieren."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "sofort",
        "sonst",
        "selten"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Ein durchnässter Verband wird „sofort“ gewechselt, nicht erst am geplanten Tag."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "diktiert",
        "dokumentiert",
        "dekoriert"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Der Verlauf wird mit Foto „dokumentiert“."
      }
     ]
    },
    {
     "id": "pfsb2s3",
     "text": {
      "sorte": "brief",
      "quelle": "Bericht",
      "titel": "Bericht an die Pflegedienstleitung: Fehler bei der Medikamentengabe",
      "zeilen": [
       "Sehr geehrte Frau Wolff,",
       "hiermit __(1)__ ich Ihnen einen Vorfall aus dem Spätdienst vom 9. Oktober. Bei der Medikamentengabe um 18 Uhr hat Frau Lehmann aus Zimmer 5 __(2)__ die Tabletten von Frau Lemke aus Zimmer 6 bekommen.",
       "Der Fehler ist mir __(3)__, als ich Frau Lemke ihre Tabletten geben wollte und ihr Becher fehlte. Ich habe sofort den Bereitschaftsarzt __(4)__ und die Vitalzeichen von Frau Lehmann gemessen.",
       "Der Arzt hat angeordnet, den Blutdruck bis 22 Uhr stündlich zu __(5)__. Die Werte waren die ganze Zeit __(6)__, Frau Lehmann hatte keine Beschwerden. Frau Lemke hat ihre Tabletten um 18.30 Uhr __(7)__ bekommen.",
       "Die Tochter von Frau Lehmann wurde __(8)__ informiert. Der Vorfall ist im Pflegebericht und im Fehlerprotokoll __(9)__.",
       "Ich schlage vor, auf den Dispensern in Zukunft zusätzlich ein Foto der Bewohner __(10)__.",
       "Mit freundlichen Grüßen, Jana Petrović"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "zeige",
        "melde",
        "sage"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Einen Vorfall „melden“ ist der feste Ausdruck im Bericht."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "versehentlich",
        "absichtlich",
        "vorsichtig"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„versehentlich“ heißt aus Versehen, ohne Absicht."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "eingefallen",
        "ausgefallen",
        "aufgefallen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Ein Fehler „fällt auf“. „einfallen“ benutzt man für Ideen und Erinnerungen."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "abgerufen",
        "angerufen",
        "aufgerufen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Den Arzt „anrufen“ heißt telefonieren."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "konsumieren",
        "korrigieren",
        "kontrollieren"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Blutdruck wird „kontrolliert“."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "unauffällig",
        "unaufhörlich",
        "unbeständig"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Fachsprache: Werte sind „unauffällig“, also normal."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "vorläufig",
        "nachträglich",
        "nachdenklich"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„nachträglich“ heißt später als geplant."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "damit",
        "dabei",
        "darüber"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„jemanden über etwas informieren“ wird zu „darüber informieren“."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "dokumentiert",
        "diskutiert",
        "definiert"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Ein Vorfall wird im Bericht „dokumentiert“."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "anzunehmen",
        "anzubringen",
        "anzustellen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Ein Foto wird auf etwas „angebracht“, also befestigt."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tpfll1",
   "titel": "Prüfungslauf 1",
   "minuten": 60,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu E-Mail 1?",
       "opt": [
        "Rollstuhl von Frau Nowak: Anpassung am Donnerstag",
        "Herr Schmitt: Antibiotikum und Trinkprotokoll",
        "Neuer Rollstuhl für Frau Nowak bestellt",
        "Kleidung von Frau Graf fehlt",
        "Teambesprechung diese Woche schon am Mittwoch",
        "Herr Schmitt: Einweisung ins Krankenhaus wegen Fieber"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail des Sanitätshauses Lehmann an den Wohnbereich 1",
        "titel": "E-Mail 1",
        "zeilen": [
         "Guten Tag,",
         "Sie haben uns mitgeteilt, dass bei dem neuen Rollstuhl von Frau Nowak die Fußstützen zu tief sind und sie nach einer Stunde Sitzen Rückenschmerzen bekommt.",
         "Unser Techniker kommt am Donnerstag um 10 Uhr ins Haus und stellt Fußstützen und Rückenlehne neu ein. Bitte sorgen Sie dafür, dass Frau Nowak dann im Zimmer ist und sich in den Rollstuhl setzen kann.",
         "Mit freundlichen Grüßen, Sanitätshaus Lehmann"
        ]
       },
       "stelle": "stellt Fußstützen und Rückenlehne neu ein",
       "erklaerung": "Der Rollstuhl ist schon da. Er wird nur an Frau Nowak angepasst."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 2?",
       "opt": [
        "Rollstuhl von Frau Nowak: Anpassung am Donnerstag",
        "Herr Schmitt: Antibiotikum und Trinkprotokoll",
        "Neuer Rollstuhl für Frau Nowak bestellt",
        "Kleidung von Frau Graf fehlt",
        "Teambesprechung diese Woche schon am Mittwoch",
        "Herr Schmitt: Einweisung ins Krankenhaus wegen Fieber"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Dr. Peter Huber, Hausarzt, an den Wohnbereich 1",
        "titel": "E-Mail 2",
        "zeilen": [
         "Sehr geehrte Damen und Herren,",
         "der Urin von Herrn Schmitt zeigt einen Harnwegsinfekt. Ich habe ein Antibiotikum für sieben Tage verordnet, die Apotheke liefert es heute Nachmittag.",
         "Bitte geben Sie es morgens und abends und achten Sie darauf, dass Herr Schmitt mindestens 1,5 Liter am Tag trinkt. Führen Sie dazu bitte ein Trinkprotokoll. Wenn er Fieber über 38,5 Grad bekommt, rufen Sie mich an.",
         "Mit freundlichen Grüßen, Dr. Peter Huber"
        ]
       },
       "stelle": "Führen Sie dazu bitte ein Trinkprotokoll.",
       "erklaerung": "Neu sind das Antibiotikum und das Trinkprotokoll. Fieber ist nur ein möglicher Fall."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 3?",
       "opt": [
        "Rollstuhl von Frau Nowak: Anpassung am Donnerstag",
        "Herr Schmitt: Antibiotikum und Trinkprotokoll",
        "Neuer Rollstuhl für Frau Nowak bestellt",
        "Kleidung von Frau Graf fehlt",
        "Teambesprechung diese Woche schon am Mittwoch",
        "Herr Schmitt: Einweisung ins Krankenhaus wegen Fieber"
       ],
       "loesung": 3,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Petra Graf, Tochter einer Bewohnerin",
        "titel": "E-Mail 3",
        "zeilen": [
         "Hallo zusammen,",
         "ich habe meiner Mutter vor vier Wochen drei neue Nachthemden und eine blaue Strickjacke gebracht. Heute habe ich im Schrank nur noch ein Nachthemd gefunden, die Jacke ist auch weg.",
         "Ich habe alle Sachen mit Namensschildern versehen. Können Sie bitte in der Wäscherei fragen, ob sie dort liegen geblieben sind?",
         "Danke und viele Grüße, Petra Graf"
        ]
       },
       "stelle": "Heute habe ich im Schrank nur noch ein Nachthemd gefunden",
       "erklaerung": "Die Tochter vermisst Kleidung und bittet um Nachfrage in der Wäscherei."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 4?",
       "opt": [
        "Rollstuhl von Frau Nowak: Anpassung am Donnerstag",
        "Herr Schmitt: Antibiotikum und Trinkprotokoll",
        "Neuer Rollstuhl für Frau Nowak bestellt",
        "Kleidung von Frau Graf fehlt",
        "Teambesprechung diese Woche schon am Mittwoch",
        "Herr Schmitt: Einweisung ins Krankenhaus wegen Fieber"
       ],
       "loesung": 4,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Olga Schreiber, Kollegin im Wohnbereich 1",
        "titel": "E-Mail 4",
        "zeilen": [
         "Hallo ihr Lieben,",
         "unsere Teambesprechung ist normalerweise am Donnerstag. Diese Woche kommt aber am Donnerstag der Techniker für den Rollstuhl von Frau Nowak, und ich muss dabei sein.",
         "Deshalb treffen wir uns schon am Mittwoch um 13.30 Uhr im Dienstzimmer, also direkt nach der Übergabe. Themen sind die Urlaubsplanung und das Sommerfest.",
         "Bis dann, Olga"
        ]
       },
       "stelle": "Deshalb treffen wir uns schon am Mittwoch um 13.30 Uhr",
       "erklaerung": "Die Besprechung wird vorverlegt. Der Techniker ist nur der Grund dafür."
      }
     ]
    },
    {
     "nr": 2,
     "art": "anzeigenX",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Vitale Funktionen aufrechterhalten",
       "zeilen": [
        "Problem: Herzinsuffizienz, Wasser in den Beinen, Atemnot bei Belastung.",
        "Ziel: Das Gewicht bleibt stabil.",
        "Maßnahme: Jeden Morgen nach dem Toilettengang wiegen. Eine Zunahme von mehr als 1 kg an einem Tag oder 2 kg in drei Tagen dem Hausarzt melden."
       ],
       "motiv": "praxis"
      },
      {
       "b": "b",
       "quelle": "Essen und trinken",
       "zeilen": [
        "Problem: Trinkmenge ärztlich auf 1,5 Liter am Tag begrenzt, hat oft Durst. Ressource: Trinkt gern Tee.",
        "Ziel: Frau S. trinkt 1,5 Liter am Tag, nicht mehr.",
        "Maßnahme: Trinkprotokoll führen, kleine Tassen benutzen, gegen das Durstgefühl Mundpflege anbieten."
       ],
       "motiv": "praxis"
      },
      {
       "b": "c",
       "quelle": "Sich bewegen",
       "zeilen": [
        "Problem: Unsicherer Gang seit dem Sturz, Angst vor einem neuen Sturz. Ressource: Läuft mit dem Rollator.",
        "Ziel: Frau S. geht mit dem Rollator sicher zur Toilette und zum Speisesaal.",
        "Maßnahme: Gehtraining mit der Physiotherapie zweimal pro Woche, Hüftprotektor und feste Schuhe tragen."
       ],
       "motiv": "praxis"
      },
      {
       "b": "d",
       "quelle": "Für eine sichere Umgebung sorgen",
       "zeilen": [
        "Problem: Steht nachts allein auf, ohne zu klingeln.",
        "Ziel: Frau S. stürzt nicht.",
        "Maßnahme: Bett in die niedrigste Position stellen, Nachtlicht anlassen, Klingel in Reichweite legen, Stolperfallen entfernen."
       ],
       "motiv": "praxis"
      },
      {
       "b": "e",
       "quelle": "Ruhen und schlafen",
       "zeilen": [
        "Problem: Bekommt im flachen Liegen schlecht Luft und schläft deshalb schlecht.",
        "Ziel: Frau S. kann nachts ausreichend schlafen.",
        "Maßnahme: Kopfteil des Bettes hochstellen, Oberkörper mit einem zusätzlichen Kissen hoch lagern."
       ],
       "motiv": "praxis"
      },
      {
       "b": "f",
       "quelle": "Ausscheiden",
       "zeilen": [
        "Problem: Muss nach der Wassertablette oft und schnell zur Toilette.",
        "Ziel: Frau S. erreicht die Toilette rechtzeitig.",
        "Maßnahme: Wassertablette morgens um 8 Uhr geben, nicht am Abend. Am Vormittag regelmäßig Begleitung zur Toilette anbieten."
       ],
       "motiv": "praxis"
      },
      {
       "b": "g",
       "quelle": "Sich pflegen",
       "zeilen": [
        "Problem: Kann wegen der Atemnot nicht lange am Waschbecken stehen. Ressource: Wäscht sich im Sitzen selbst.",
        "Ziel: Frau S. wäscht sich selbst, ohne außer Atem zu kommen.",
        "Maßnahme: Stuhl ans Waschbecken stellen, Pausen einplanen, Rücken und Füße übernehmen."
       ],
       "motiv": "praxis"
      },
      {
       "b": "h",
       "quelle": "Mit existenziellen Erfahrungen des Lebens umgehen",
       "zeilen": [
        "Problem: Spricht oft vom Sterben, hat Angst, nachts allein zu sein. Ressource: Ist gläubig und geht gern zum Gottesdienst.",
        "Ziel: Frau S. fühlt sich sicher und begleitet.",
        "Maßnahme: Zeit für Gespräche nehmen, Kontakt zur Seelsorge anbieten, nachts die Zimmertür einen Spalt offen lassen."
       ],
       "motiv": "praxis"
      }
     ],
     "aufgaben": [
      {
       "situation": "Frau Sommer wog gestern früh 64,2 kg. Heute Morgen zeigt die Waage 65,6 kg.",
       "loesung": "a",
       "erklaerung": "Mehr als 1 kg an einem Tag: Laut Zeile a muss das dem Hausarzt gemeldet werden.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Frau Sommer hat Schmerzen in der Hüfte, auf die sie vor drei Wochen gefallen ist, und bittet um eine Tablette.",
       "loesung": "x",
       "erklaerung": "Keine Zeile behandelt Schmerzen. Zeile c nennt den Sturz, aber nur wegen des Gehens.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Beim Abendessen bittet Frau Sommer um eine große Kanne Tee. Laut Protokoll hat sie heute schon 1,4 Liter getrunken.",
       "loesung": "b",
       "erklaerung": "Zeile b: Die Trinkmenge ist auf 1,5 Liter begrenzt, gegen den Durst hilft Mundpflege.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Die Nachtwache findet Frau Sommer um 3 Uhr auf der Bettkante. Sie will allein ins Bad gehen und hat nicht geklingelt.",
       "loesung": "d",
       "erklaerung": "Zeile d beschreibt das Aufstehen in der Nacht ohne Klingeln. Zeile f gilt für den Vormittag.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Frau Sommer sagt: „Wenn ich ganz flach liege, bekomme ich keine Luft.“",
       "loesung": "e",
       "erklaerung": "Zeile e: Kopfteil hochstellen und Oberkörper hoch lagern.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "aufgaben": [
      {
       "frage": "Ein Bewohner hat das Pulver heute Morgen zum ersten Mal bekommen. Am Abend hatte er noch keinen Stuhlgang. …",
       "opt": [
        "Man muss sofort den Arzt informieren.",
        "Das Pulver wirkt bei ihm nicht.",
        "Das ist normal, die Wirkung kommt oft später."
       ],
       "loesung": 2,
       "stelle": "Die Wirkung tritt meist nach 1 bis 2 Tagen ein.",
       "erklaerung": "Das Mittel wirkt meist erst nach 1 bis 2 Tagen, am ersten Abend ist das also normal.",
       "text": {
        "sorte": "aushang",
        "quelle": "Beipackzettel: Auszug",
        "titel": "Gebrauchsinformation Pulver gegen Verstopfung: Dosierung",
        "zeilen": [
         "Lösen Sie den Inhalt eines Beutels in 125 ml Wasser auf und trinken Sie die Lösung. Erwachsene nehmen 1 bis 3 Beutel am Tag.",
         "Die Wirkung tritt meist nach 1 bis 2 Tagen ein.",
         "Trinken Sie während der Behandlung ausreichend.",
         "Bei Durchfall die Dosis verringern. Ohne ärztlichen Rat nicht länger als 2 Wochen anwenden."
        ]
       }
      },
      {
       "frage": "Was tut man, wenn der Bewohner Durchfall bekommt?",
       "opt": [
        "Man gibt weniger Pulver.",
        "Man gibt das Pulver mit weniger Wasser.",
        "Man setzt das Pulver für 2 Wochen ab."
       ],
       "loesung": 0,
       "stelle": "Bei Durchfall die Dosis verringern.",
       "erklaerung": "Dosis verringern heißt weniger Pulver geben. Die 2 Wochen sind die längste Anwendungsdauer.",
       "text": {
        "sorte": "aushang",
        "quelle": "Beipackzettel: Auszug",
        "titel": "Gebrauchsinformation Pulver gegen Verstopfung: Dosierung",
        "zeilen": [
         "Lösen Sie den Inhalt eines Beutels in 125 ml Wasser auf und trinken Sie die Lösung. Erwachsene nehmen 1 bis 3 Beutel am Tag.",
         "Die Wirkung tritt meist nach 1 bis 2 Tagen ein.",
         "Trinken Sie während der Behandlung ausreichend.",
         "Bei Durchfall die Dosis verringern. Ohne ärztlichen Rat nicht länger als 2 Wochen anwenden."
        ]
       }
      },
      {
       "frage": "Mitarbeiter dürfen ab Oktober …",
       "opt": [
        "nur im Pavillon hinter dem Wirtschaftsgebäude rauchen.",
        "vor dem Haupteingang rauchen.",
        "auf der Terrasse von Wohnbereich 1 rauchen."
       ],
       "loesung": 0,
       "stelle": "nur noch im Raucherpavillon hinter dem Wirtschaftsgebäude erlaubt",
       "erklaerung": "Die Terrasse ist für rauchende Bewohner. Mitarbeiter rauchen nur im Pavillon.",
       "text": {
        "sorte": "email",
        "quelle": "Rundschreiben der Heimleitung",
        "titel": "Rauchen auf dem Gelände",
        "zeilen": [
         "Liebe Mitarbeiter,",
         "wir haben in den letzten Wochen mehrere Beschwerden von Bewohnern und Nachbarn bekommen, weil vor dem Haupteingang geraucht wurde.",
         "Ab dem 1. Oktober ist das Rauchen für Mitarbeiter nur noch im Raucherpavillon hinter dem Wirtschaftsgebäude erlaubt. Rauchpausen gelten nicht als Arbeitszeit, bitte stempeln Sie dafür aus.",
         "Bewohner, die rauchen, dürfen weiter auf der Terrasse von Wohnbereich 1 rauchen. Bitte begleiten Sie Bewohner, die unsicher sind oder nicht mehr sicher mit Feuer umgehen können.",
         "Mit freundlichen Grüßen, Dieter Kühn, Heimleitung"
        ]
       }
      },
      {
       "frage": "Für Rauchpausen gilt: …",
       "opt": [
        "Sie werden als Arbeitszeit gerechnet.",
        "Man muss dafür ausstempeln.",
        "Sie sind ab Oktober verboten."
       ],
       "loesung": 1,
       "stelle": "bitte stempeln Sie dafür aus",
       "erklaerung": "Rauchpausen sind keine Arbeitszeit, deshalb stempelt man aus. Verboten sind sie nicht.",
       "text": {
        "sorte": "email",
        "quelle": "Rundschreiben der Heimleitung",
        "titel": "Rauchen auf dem Gelände",
        "zeilen": [
         "Liebe Mitarbeiter,",
         "wir haben in den letzten Wochen mehrere Beschwerden von Bewohnern und Nachbarn bekommen, weil vor dem Haupteingang geraucht wurde.",
         "Ab dem 1. Oktober ist das Rauchen für Mitarbeiter nur noch im Raucherpavillon hinter dem Wirtschaftsgebäude erlaubt. Rauchpausen gelten nicht als Arbeitszeit, bitte stempeln Sie dafür aus.",
         "Bewohner, die rauchen, dürfen weiter auf der Terrasse von Wohnbereich 1 rauchen. Bitte begleiten Sie Bewohner, die unsicher sind oder nicht mehr sicher mit Feuer umgehen können.",
         "Mit freundlichen Grüßen, Dieter Kühn, Heimleitung"
        ]
       }
      },
      {
       "frage": "Eine Bewohnerin hatte bis gestern Abend Durchfall. Heute geht es ihr gut. Darf sie heute in die Singgruppe?",
       "opt": [
        "Nein, frühestens 48 Stunden nach dem Ende der Beschwerden.",
        "Ja, weil sie keine Beschwerden mehr hat.",
        "Ja, wenn sie einen Mund-Nasen-Schutz trägt."
       ],
       "loesung": 0,
       "stelle": "bis mindestens 48 Stunden nach dem Ende der Beschwerden nicht an Gruppenangeboten teil",
       "erklaerung": "Seit dem Ende der Beschwerden sind noch keine 48 Stunden vergangen.",
       "text": {
        "sorte": "aushang",
        "quelle": "Auszug aus der Hygieneordnung",
        "titel": "Verhalten bei Magen-Darm-Infektionen durch Noroviren",
        "zeilen": [
         "Haben zwei oder mehr Bewohner eines Wohnbereichs innerhalb von 48 Stunden Erbrechen oder Durchfall, wird sofort die Hygienebeauftragte informiert.",
         "Erkrankte Bewohner bleiben in ihrem Zimmer und bekommen das Essen dort. Sie nehmen bis mindestens 48 Stunden nach dem Ende der Beschwerden nicht an Gruppenangeboten teil.",
         "Bei der Pflege tragen Mitarbeiter Schutzkittel, Handschuhe und, wenn Erbrechen möglich ist, einen Mund-Nasen-Schutz. Für die Händedesinfektion wird ein Mittel benutzt, das gegen Noroviren wirkt.",
         "Mitarbeiter mit Erbrechen oder Durchfall dürfen erst 48 Stunden nach dem Ende der Beschwerden wieder arbeiten."
        ]
       }
      },
      {
       "frage": "Wann tragen Mitarbeiter zusätzlich einen Mund-Nasen-Schutz?",
       "opt": [
        "immer im Wohnbereich",
        "wenn der Bewohner erbrechen könnte",
        "nur bei der Essensausgabe"
       ],
       "loesung": 1,
       "stelle": "wenn Erbrechen möglich ist, einen Mund-Nasen-Schutz",
       "erklaerung": "Der Mund-Nasen-Schutz ist nötig, wenn Erbrechen möglich ist.",
       "text": {
        "sorte": "aushang",
        "quelle": "Auszug aus der Hygieneordnung",
        "titel": "Verhalten bei Magen-Darm-Infektionen durch Noroviren",
        "zeilen": [
         "Haben zwei oder mehr Bewohner eines Wohnbereichs innerhalb von 48 Stunden Erbrechen oder Durchfall, wird sofort die Hygienebeauftragte informiert.",
         "Erkrankte Bewohner bleiben in ihrem Zimmer und bekommen das Essen dort. Sie nehmen bis mindestens 48 Stunden nach dem Ende der Beschwerden nicht an Gruppenangeboten teil.",
         "Bei der Pflege tragen Mitarbeiter Schutzkittel, Handschuhe und, wenn Erbrechen möglich ist, einen Mund-Nasen-Schutz. Für die Händedesinfektion wird ein Mittel benutzt, das gegen Noroviren wirkt.",
         "Mitarbeiter mit Erbrechen oder Durchfall dürfen erst 48 Stunden nach dem Ende der Beschwerden wieder arbeiten."
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
       "sorte": "regel",
       "motiv": "praxis",
       "von": "Dienstvereinbarung zur Dienstplanung, Seniorenresidenz Parkblick",
       "betreff": "Regeln für Dienstplan, Tausch und Einspringen",
       "zeilen": [
        "Der Dienstplan wird spätestens vier Wochen vor Monatsbeginn veröffentlicht. Danach sind Änderungen nur noch mit Zustimmung der betroffenen Mitarbeiter möglich.",
        "Dienste dürfen untereinander getauscht werden, wenn beide Mitarbeiter dieselbe Qualifikation haben. Ein Tausch muss vorher von der Wohnbereichsleitung im Plan abgezeichnet werden.",
        "Zwischen dem Ende eines Dienstes und dem Beginn des nächsten müssen mindestens 11 Stunden Ruhezeit liegen. Ein Spätdienst bis 21 Uhr und ein Frühdienst ab 6 Uhr am nächsten Tag sind deshalb nicht erlaubt.",
        "Wer an einem freien Tag einspringt, bekommt einen Zuschlag von 25 Euro pro Dienst. Niemand ist verpflichtet, an freien Tagen ans Telefon zu gehen.",
        "Jeder Mitarbeiter hat im Monat mindestens zwei freie Wochenenden."
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Zwei Pflegefachkräfte dürfen ihre Dienste ohne Rücksprache tauschen.",
       "loesung": false,
       "stelle": "Ein Tausch muss vorher von der Wohnbereichsleitung im Plan abgezeichnet werden.",
       "erklaerung": "Gleiche Qualifikation reicht nicht, die Wohnbereichsleitung muss den Tausch vorher abzeichnen."
      },
      {
       "satz": "Nach einem Spätdienst bis 21 Uhr darf man am nächsten Morgen nicht um 6 Uhr anfangen.",
       "loesung": true,
       "stelle": "ein Frühdienst ab 6 Uhr am nächsten Tag sind deshalb nicht erlaubt",
       "erklaerung": "Von 21 bis 6 Uhr sind es nur 9 Stunden, nötig sind mindestens 11."
      },
      {
       "satz": "Mitarbeiter müssen an freien Tagen telefonisch erreichbar sein.",
       "loesung": false,
       "stelle": "Niemand ist verpflichtet, an freien Tagen ans Telefon zu gehen.",
       "erklaerung": "An freien Tagen muss niemand ans Telefon gehen. Wer einspringt, tut das freiwillig."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Bericht",
      "titel": "Pflegebericht ambulant: Frau Irmgard Schäfer",
      "zeilen": [
       "Pflegebericht, Ambulanter Pflegedienst, Frau Irmgard Schäfer, Einsatz am Abend",
       "Ich bin um 18.10 Uhr bei Frau Schäfer angekommen. Sie saß im Sessel und war gut gelaunt, __(1)__ ihre Tochter am Nachmittag zu Besuch war. __(2)__ ich die Kompressionsstrümpfe ausgezogen hatte, habe ich die Beine kontrolliert. Die Haut war intakt, __(3)__ waren die Knöchel leicht geschwollen.",
       "Das Abendessen stand noch unberührt im Kühlschrank, __(4)__ Frau Schäfer hatte keinen Hunger. Ich habe ihr ein Brot geschmiert, __(5)__ sie wenigstens etwas isst. Sie hat die Hälfte gegessen. __(6)__ hat sie ihre Abendtabletten unter Aufsicht genommen.",
       "__(7)__ sie in den letzten Tagen wenig getrunken hat, habe ich ihr ein großes Glas Wasser an das Bett gestellt. Die Tochter wurde gebeten, auf die Trinkmenge zu achten, __(8)__ wir morgen früh wiederkommen.",
       "Handzeichen: M. Y."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Anschließend",
        "denn",
        "sodass",
        "bis",
        "allerdings",
        "Da",
        "deshalb",
        "weil",
        "damit",
        "Nachdem"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Nach „denn“ steht das Verb an Position zwei („denn Frau Schäfer hatte“). „deshalb“ nennt eine Folge, hier steht aber der Grund. „damit“ nennt ein Ziel: Sie soll etwas essen."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Anschließend",
        "denn",
        "sodass",
        "bis",
        "allerdings",
        "Da",
        "deshalb",
        "weil",
        "damit",
        "Nachdem"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „Nachdem\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Anschließend",
        "denn",
        "sodass",
        "bis",
        "allerdings",
        "Da",
        "deshalb",
        "weil",
        "damit",
        "Nachdem"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „allerdings\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Anschließend",
        "denn",
        "sodass",
        "bis",
        "allerdings",
        "Da",
        "deshalb",
        "weil",
        "damit",
        "Nachdem"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Richtig ist „denn\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Anschließend",
        "denn",
        "sodass",
        "bis",
        "allerdings",
        "Da",
        "deshalb",
        "weil",
        "damit",
        "Nachdem"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „damit\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Anschließend",
        "denn",
        "sodass",
        "bis",
        "allerdings",
        "Da",
        "deshalb",
        "weil",
        "damit",
        "Nachdem"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Richtig ist „Anschließend\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "Anschließend",
        "denn",
        "sodass",
        "bis",
        "allerdings",
        "Da",
        "deshalb",
        "weil",
        "damit",
        "Nachdem"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „Da\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "Anschließend",
        "denn",
        "sodass",
        "bis",
        "allerdings",
        "Da",
        "deshalb",
        "weil",
        "damit",
        "Nachdem"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „bis\". Jedes Wort passt nur einmal."
      }
     ]
    },
    {
     "nr": 6,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Bericht",
      "titel": "Pflegebericht ambulant: Herr Rudolf Hahn, Einsatz am Morgen",
      "zeilen": [
       "Einsatz am 03.12., 7.15 bis 7.50 Uhr",
       "Herr Hahn hat die Tür erst nach mehrmaligem Klingeln __(1)__. Er wirkte verwirrt und konnte nicht sagen, welcher Tag heute ist. Gestern war er noch zeitlich und örtlich __(2)__.",
       "Der Blutzucker lag bei 54 mg/dl. Ich habe ihm sofort ein Glas Orangensaft __(3)__. __(4)__ 15 Minuten lag der Wert bei 98 mg/dl, Herr Hahn war danach wieder __(5)__ ansprechbar.",
       "Er hat erzählt, dass er gestern Abend nach dem Insulin nichts mehr __(6)__ hat. Die Insulindosis von heute Morgen wurde in __(7)__ mit der Hausärztin reduziert.",
       "Herr Hahn hat dann ein Brot mit Käse gegessen. Er wurde noch einmal über die Zeichen einer Unterzuckerung __(8)__. Seine Tochter wurde telefonisch informiert und schaut heute Mittag __(9)__ ihm vorbei.",
       "Beim Einsatz am Abend bitte den Blutzucker vor dem Essen messen und den Wert im Bericht __(10)__."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "eröffnet",
        "geöffnet",
        "offen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Eine Tür wird „geöffnet“. „eröffnen“ sagt man bei Geschäften oder Sitzungen."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "informiert",
        "organisiert",
        "orientiert"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Fachausdruck: „zeitlich und örtlich orientiert“."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "gegeben",
        "genommen",
        "gekostet"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„jemandem etwas geben“, hier mit Dativ „ihm“."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Seit",
        "Vor",
        "Nach"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Die zweite Messung kam „nach“ 15 Minuten."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "gern",
        "gut",
        "gleich"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„gut ansprechbar“ heißt, er reagiert normal."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "gegessen",
        "gegeben",
        "gemessen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Er hat nichts „gegessen“, deshalb kam die Unterzuckerung."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "Aussprache",
        "Absprache",
        "Ansprache"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Verbindung: „in Absprache mit“ der Ärztin."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "aufgeführt",
        "aufgehalten",
        "aufgeklärt"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Einen Patienten „über etwas aufklären“ heißt ihn informieren."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "bei",
        "zu",
        "an"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Verbindung: „bei jemandem vorbeischauen“."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "einräumen",
        "eintragen",
        "eintreten"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Einen Wert im Bericht „eintragen“ heißt ihn aufschreiben."
      }
     ]
    }
   ]
  },
  {
   "id": "tpfll2",
   "titel": "Prüfungslauf 2",
   "minuten": 60,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu E-Mail 1?",
       "opt": [
        "Dienstplanwünsche bis zum 15. eintragen",
        "Rezept für die Augentropfen fehlt",
        "Termin mit dem Gutachter: Bitte um Unterstützung",
        "Neuer Pflegegrad für Frau Ziegler bewilligt",
        "Herr Bauer: Verband nur noch alle zwei Tage wechseln",
        "Dienstplan für Juli ist fertig"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Linden-Apotheke an den Pflegedienst",
        "titel": "E-Mail 1",
        "zeilen": [
         "Guten Tag,",
         "für Frau Ziegler sollen wir morgen wieder die Augentropfen gegen grünen Star liefern. Leider haben wir von der Arztpraxis noch kein neues Rezept bekommen, und die Tropfen sind verschreibungspflichtig.",
         "Könnten Sie bitte in der Praxis nachfragen, ob das E-Rezept heute noch ausgestellt wird? Sonst können wir erst übermorgen liefern.",
         "Freundliche Grüße, Linden-Apotheke"
        ]
       },
       "stelle": "haben wir von der Arztpraxis noch kein neues Rezept bekommen",
       "erklaerung": "Ohne Rezept kann die Apotheke nicht liefern und bittet den Pflegedienst um Hilfe."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 2?",
       "opt": [
        "Dienstplanwünsche bis zum 15. eintragen",
        "Rezept für die Augentropfen fehlt",
        "Termin mit dem Gutachter: Bitte um Unterstützung",
        "Neuer Pflegegrad für Frau Ziegler bewilligt",
        "Herr Bauer: Verband nur noch alle zwei Tage wechseln",
        "Dienstplan für Juli ist fertig"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Pflegedienstleitung an alle Mitarbeiter",
        "titel": "E-Mail 2",
        "zeilen": [
         "Liebe Kollegen,",
         "ab sofort gilt für die Dienstplanung eine neue Regel: Wünsche für freie Tage tragt ihr bitte bis zum 15. des Vormonats in das Wunschbuch im Büro ein.",
         "Was später kommt, kann ich leider nicht mehr berücksichtigen, weil der Plan dann schon fertig ist. Pro Monat sind bis zu drei Wunschtage möglich.",
         "Danke und viele Grüße, Katrin Vogel, Pflegedienstleitung"
        ]
       },
       "stelle": "bis zum 15. des Vormonats in das Wunschbuch im Büro ein",
       "erklaerung": "Es geht um eine Frist für Wünsche. Ein fertiger Dienstplan wird nicht verschickt."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 3?",
       "opt": [
        "Dienstplanwünsche bis zum 15. eintragen",
        "Rezept für die Augentropfen fehlt",
        "Termin mit dem Gutachter: Bitte um Unterstützung",
        "Neuer Pflegegrad für Frau Ziegler bewilligt",
        "Herr Bauer: Verband nur noch alle zwei Tage wechseln",
        "Dienstplan für Juli ist fertig"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Werner Ziegler, Ehemann einer Patientin",
        "titel": "E-Mail 3",
        "zeilen": [
         "Sehr geehrte Frau Vogel,",
         "meine Frau braucht seit dem Schlaganfall viel mehr Hilfe. Wir haben deshalb einen höheren Pflegegrad beantragt. Am 8. Mai um 10 Uhr kommt der Gutachter vom Medizinischen Dienst zu uns.",
         "Wäre es möglich, dass die Pflegekraft vom Frühdienst an diesem Tag dabei ist? Sie kann viel besser erklären, wobei meine Frau Hilfe braucht.",
         "Mit freundlichen Grüßen, Werner Ziegler"
        ]
       },
       "stelle": "Wäre es möglich, dass die Pflegekraft vom Frühdienst an diesem Tag dabei ist?",
       "erklaerung": "Der höhere Pflegegrad ist erst beantragt, nicht bewilligt. Herr Ziegler bittet um Begleitung beim Termin."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 4?",
       "opt": [
        "Dienstplanwünsche bis zum 15. eintragen",
        "Rezept für die Augentropfen fehlt",
        "Termin mit dem Gutachter: Bitte um Unterstützung",
        "Neuer Pflegegrad für Frau Ziegler bewilligt",
        "Herr Bauer: Verband nur noch alle zwei Tage wechseln",
        "Dienstplan für Juli ist fertig"
       ],
       "loesung": 4,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Dr. Sven Krämer, Hausarzt, an den Pflegedienst",
        "titel": "E-Mail 4",
        "zeilen": [
         "Guten Tag,",
         "ich war heute bei Herrn Bauer. Die Wunde an der rechten Ferse ist kleiner geworden, aber noch nicht geschlossen.",
         "Bitte wechseln Sie den Verband ab jetzt nur noch alle zwei Tage statt täglich. Fotografieren Sie die Wunde einmal pro Woche mit Maßband und legen Sie das Foto in die Wunddokumentation.",
         "Mit freundlichen Grüßen, Dr. Sven Krämer"
        ]
       },
       "stelle": "Bitte wechseln Sie den Verband ab jetzt nur noch alle zwei Tage statt täglich.",
       "erklaerung": "Neu ist der seltenere Verbandswechsel. Die Wunde ist noch offen."
      }
     ]
    },
    {
     "nr": 2,
     "art": "anzeigenX",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Sich bewegen",
       "zeilen": [
        "Problem: Macht kleine Schritte und bleibt beim Gehen plötzlich stehen. Ressource: Geht mit dem Rollator.",
        "Ziel: Herr A. bewegt sich sicher in der Wohnung.",
        "Maßnahme: Wenn er stehen bleibt, laut im Takt zählen. Familie bitten, lose Teppiche zu entfernen."
       ],
       "motiv": "praxis"
      },
      {
       "b": "b",
       "quelle": "Vitale Funktionen aufrechterhalten",
       "zeilen": [
        "Problem: Die Wirkung der Parkinsontabletten lässt vor der nächsten Einnahme nach.",
        "Ziel: Herr A. ist tagsüber gut beweglich.",
        "Maßnahme: Tabletten genau zu den Uhrzeiten im Plan geben, mindestens 30 Minuten vor einer eiweißreichen Mahlzeit."
       ],
       "motiv": "praxis"
      },
      {
       "b": "c",
       "quelle": "Essen und trinken",
       "zeilen": [
        "Problem: Isst wegen des Zitterns sehr langsam, das Essen wird kalt. Ressource: Isst selbst mit Spezialbesteck.",
        "Ziel: Herr A. nimmt nicht ab.",
        "Maßnahme: Besteck mit dickem Griff und Warmhalteteller benutzen, Zeit lassen, einmal pro Woche wiegen."
       ],
       "motiv": "praxis"
      },
      {
       "b": "d",
       "quelle": "Kommunizieren",
       "zeilen": [
        "Problem: Spricht sehr leise und undeutlich. Ressource: Seine Frau versteht ihn gut.",
        "Ziel: Herr A. kann sich verständlich machen.",
        "Maßnahme: Logopädie zweimal pro Woche, nachfragen statt raten, ihm Zeit zum Antworten lassen."
       ],
       "motiv": "praxis"
      },
      {
       "b": "e",
       "quelle": "Sich kleiden",
       "zeilen": [
        "Problem: Braucht für Knöpfe sehr lange. Ressource: Möchte sich selbst anziehen.",
        "Ziel: Herr A. zieht sich mit wenig Hilfe selbst an.",
        "Maßnahme: Kleidung mit Reißverschluss oder Klettverschluss empfehlen, beim Anziehen sitzen lassen."
       ],
       "motiv": "praxis"
      },
      {
       "b": "f",
       "quelle": "Ausscheiden",
       "zeilen": [
        "Problem: Verstopfung, Stuhlgang nur etwa alle vier Tage.",
        "Ziel: Stuhlgang mindestens jeden zweiten Tag.",
        "Maßnahme: Ballaststoffreiche Kost, Trinkmenge 1,5 bis 2 Liter, morgens ein Glas warmes Wasser, Stuhlgang im Bericht dokumentieren."
       ],
       "motiv": "praxis"
      },
      {
       "b": "g",
       "quelle": "Ruhen und schlafen",
       "zeilen": [
        "Problem: Kann sich nachts im Bett nicht allein umdrehen.",
        "Ziel: Herr A. liegt bequem und bekommt kein Druckgeschwür.",
        "Maßnahme: Satinbettlaken empfehlen, damit er sich leichter drehen kann. Ehefrau zeigen, wie sie ihm beim Drehen hilft."
       ],
       "motiv": "praxis"
      },
      {
       "b": "h",
       "quelle": "Soziale Bereiche des Lebens sichern",
       "zeilen": [
        "Problem: Ehefrau pflegt ihn fast rund um die Uhr und ist erschöpft. Ressource: Der Sohn wohnt in der Nähe.",
        "Ziel: Die Ehefrau hat einen freien Nachmittag pro Woche.",
        "Maßnahme: Über Tagespflege und Verhinderungspflege informieren, Gespräch mit Ehefrau und Sohn anbieten."
       ],
       "motiv": "praxis"
      }
     ],
     "aufgaben": [
      {
       "situation": "Frau Arslan erzählt: „Gestern ist er im Flur einfach stehen geblieben und kam fast eine Minute nicht weiter.“",
       "loesung": "a",
       "erklaerung": "Zeile a beschreibt das plötzliche Stehenbleiben und das Zählen im Takt.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Um 7.30 Uhr möchte Herr Arslan zuerst Quark und ein Ei frühstücken und die Tabletten danach nehmen.",
       "loesung": "b",
       "erklaerung": "Zeile b: Die Tabletten kommen mindestens 30 Minuten vor einer eiweißreichen Mahlzeit.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Frau Arslan sagt, sie hat seit Wochen keine Zeit mehr für sich und schläft selbst kaum noch.",
       "loesung": "h",
       "erklaerung": "Es geht um die erschöpfte Ehefrau, also Zeile h. Zeile g betrifft den Schlaf von Herrn Arslan.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Herr Arslan sagt, dass er seit Freitag keinen Stuhlgang hatte. Heute ist Dienstag.",
       "loesung": "f",
       "erklaerung": "Zeile f behandelt die Verstopfung und nennt Ernährung, Trinken und Dokumentation.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      },
      {
       "situation": "Herr Arslan hat Angst, in der Dusche auszurutschen, und möchte deshalb nicht mehr duschen.",
       "loesung": "x",
       "erklaerung": "Zur Dusche gibt es keine Zeile. Zeile a nennt nur Teppiche in der Wohnung.",
       "sitKopf": "Die Aussage",
       "xText": "Keine Zeile passt"
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "aufgaben": [
      {
       "frage": "Wo bewahrt man den Pen auf, den der Bewohner gerade benutzt?",
       "opt": [
        "direkt neben dem Gefrierfach",
        "im Kühlschrank",
        "bei Raumtemperatur"
       ],
       "loesung": 2,
       "stelle": "Er kann bis zu 4 Wochen bei Raumtemperatur unter 30 Grad gelagert werden.",
       "erklaerung": "In den Kühlschrank kommen nur ungeöffnete Pens. Der benutzte Pen bleibt bei Raumtemperatur.",
       "text": {
        "sorte": "aushang",
        "quelle": "Beipackzettel: Auszug",
        "titel": "Gebrauchsinformation Insulin im Fertigpen: Aufbewahrung und Anwendung",
        "zeilen": [
         "Ungeöffnete Pens im Kühlschrank bei 2 bis 8 Grad aufbewahren. Nicht einfrieren und nicht direkt neben das Gefrierfach legen.",
         "Den Pen, der gerade benutzt wird, nicht im Kühlschrank aufbewahren. Er kann bis zu 4 Wochen bei Raumtemperatur unter 30 Grad gelagert werden.",
         "Vor jeder Injektion eine neue Nadel aufsetzen und einen Sicherheitstest mit 2 Einheiten machen.",
         "Die Einstichstelle bei jeder Injektion wechseln, um Verhärtungen der Haut zu vermeiden."
        ]
       }
      },
      {
       "frage": "Warum soll man die Einstichstelle wechseln?",
       "opt": [
        "damit das Insulin schneller wirkt",
        "damit die Nadel länger hält",
        "damit die Haut nicht hart wird"
       ],
       "loesung": 2,
       "stelle": "um Verhärtungen der Haut zu vermeiden",
       "erklaerung": "Verhärtungen sind harte Stellen in der Haut. Die Nadel wird ohnehin jedes Mal gewechselt.",
       "text": {
        "sorte": "aushang",
        "quelle": "Beipackzettel: Auszug",
        "titel": "Gebrauchsinformation Insulin im Fertigpen: Aufbewahrung und Anwendung",
        "zeilen": [
         "Ungeöffnete Pens im Kühlschrank bei 2 bis 8 Grad aufbewahren. Nicht einfrieren und nicht direkt neben das Gefrierfach legen.",
         "Den Pen, der gerade benutzt wird, nicht im Kühlschrank aufbewahren. Er kann bis zu 4 Wochen bei Raumtemperatur unter 30 Grad gelagert werden.",
         "Vor jeder Injektion eine neue Nadel aufsetzen und einen Sicherheitstest mit 2 Einheiten machen.",
         "Die Einstichstelle bei jeder Injektion wechseln, um Verhärtungen der Haut zu vermeiden."
        ]
       }
      },
      {
       "frage": "Neue Kleidung für Bewohner …",
       "opt": [
        "legen Angehörige direkt in den Schrank.",
        "bringen Angehörige selbst in die Wäscherei.",
        "geben Angehörige im Dienstzimmer ab."
       ],
       "loesung": 2,
       "stelle": "sondern im Dienstzimmer ab",
       "erklaerung": "Neue Kleidung kommt ins Dienstzimmer, damit sie ein Etikett bekommt.",
       "text": {
        "sorte": "brief",
        "quelle": "Rundschreiben der Heimleitung",
        "titel": "Namen in der Kleidung",
        "zeilen": [
         "Liebe Angehörige,",
         "immer wieder gehen Kleidungsstücke in der Wäscherei verloren, weil sie keinen Namen haben. Ab dem 1. Mai wäscht unsere Wäscherei deshalb nur noch Kleidung, die mit einem Namensetikett gekennzeichnet ist.",
         "Das Einnähen der Etiketten übernimmt die Wäscherei für 1,50 Euro pro Stück. Geben Sie neue Kleidung bitte nicht direkt in den Schrank, sondern im Dienstzimmer ab.",
         "Wollsachen und Kleidung, die man nicht bei 40 Grad waschen kann, nehmen Sie bitte weiterhin selbst zum Waschen mit nach Hause.",
         "Mit freundlichen Grüßen, Karin Schulte, Heimleitung"
        ]
       }
      },
      {
       "frage": "Ein Wollpullover …",
       "opt": [
        "wird nur mit Etikett in der Wäscherei gewaschen.",
        "wird für 1,50 Euro gewaschen.",
        "wird von den Angehörigen gewaschen."
       ],
       "loesung": 2,
       "stelle": "nehmen Sie bitte weiterhin selbst zum Waschen mit nach Hause",
       "erklaerung": "Wollsachen wäscht die Wäscherei gar nicht. Die 1,50 Euro kostet das Etikett.",
       "text": {
        "sorte": "brief",
        "quelle": "Rundschreiben der Heimleitung",
        "titel": "Namen in der Kleidung",
        "zeilen": [
         "Liebe Angehörige,",
         "immer wieder gehen Kleidungsstücke in der Wäscherei verloren, weil sie keinen Namen haben. Ab dem 1. Mai wäscht unsere Wäscherei deshalb nur noch Kleidung, die mit einem Namensetikett gekennzeichnet ist.",
         "Das Einnähen der Etiketten übernimmt die Wäscherei für 1,50 Euro pro Stück. Geben Sie neue Kleidung bitte nicht direkt in den Schrank, sondern im Dienstzimmer ab.",
         "Wollsachen und Kleidung, die man nicht bei 40 Grad waschen kann, nehmen Sie bitte weiterhin selbst zum Waschen mit nach Hause.",
         "Mit freundlichen Grüßen, Karin Schulte, Heimleitung"
        ]
       }
      },
      {
       "frage": "Ein Toilettenstuhl wird von zwei Bewohnern benutzt. …",
       "opt": [
        "Er wird nach jedem Gebrauch desinfiziert.",
        "Er muss nicht desinfiziert werden.",
        "Er wird einmal am Tag desinfiziert."
       ],
       "loesung": 0,
       "stelle": "oder nach jedem Gebrauch desinfiziert",
       "erklaerung": "Wenn ein Hilfsmittel nicht nur für einen Bewohner ist, wird es nach jedem Gebrauch desinfiziert.",
       "text": {
        "sorte": "aushang",
        "quelle": "Auszug aus der Hygieneordnung",
        "titel": "Flächendesinfektion und Pflegehilfsmittel",
        "zeilen": [
         "Pflegehilfsmittel wie Waschschüsseln und Toilettenstühle werden nur für einen Bewohner benutzt oder nach jedem Gebrauch desinfiziert.",
         "Flächen werden durch Wischen desinfiziert. Das Mittel wird nicht gesprüht, weil sich dabei Tröpfchen in der Luft verteilen.",
         "Eine desinfizierte Fläche darf erst wieder benutzt werden, wenn sie sichtbar trocken ist.",
         "Spenderboxen mit Desinfektionstüchern werden beim Öffnen mit dem Datum beschriftet und nur so lange benutzt, wie der Hersteller angibt."
        ]
       }
      },
      {
       "frage": "Warum soll man das Flächendesinfektionsmittel nicht sprühen?",
       "opt": [
        "weil man dann mehr Mittel braucht",
        "weil es dann zu schnell trocknet",
        "weil sich Tröpfchen in der Luft verteilen"
       ],
       "loesung": 2,
       "stelle": "weil sich dabei Tröpfchen in der Luft verteilen",
       "erklaerung": "Beim Sprühen kommen Tröpfchen in die Luft, deshalb wird gewischt.",
       "text": {
        "sorte": "aushang",
        "quelle": "Auszug aus der Hygieneordnung",
        "titel": "Flächendesinfektion und Pflegehilfsmittel",
        "zeilen": [
         "Pflegehilfsmittel wie Waschschüsseln und Toilettenstühle werden nur für einen Bewohner benutzt oder nach jedem Gebrauch desinfiziert.",
         "Flächen werden durch Wischen desinfiziert. Das Mittel wird nicht gesprüht, weil sich dabei Tröpfchen in der Luft verteilen.",
         "Eine desinfizierte Fläche darf erst wieder benutzt werden, wenn sie sichtbar trocken ist.",
         "Spenderboxen mit Desinfektionstüchern werden beim Öffnen mit dem Datum beschriftet und nur so lange benutzt, wie der Hersteller angibt."
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
       "sorte": "regel",
       "motiv": "praxis",
       "von": "Information der Personalabteilung, Pflegezentrum Lindental",
       "betreff": "Betriebliches Gesundheitsmanagement: Angebote für Mitarbeiter",
       "zeilen": [
        "Pflege ist körperlich anstrengend. Deshalb bieten wir allen Mitarbeitern ab Januar verschiedene Angebote für ihre Gesundheit an.",
        "Jeden Dienstag und Donnerstag findet nach dem Frühdienst um 14.15 Uhr ein Rückenkurs mit einer Physiotherapeutin statt. Die Teilnahme ist kostenlos, die Kurszeit gilt aber nicht als Arbeitszeit.",
        "Für ein Fitnessstudio übernimmt das Haus die Hälfte des Monatsbeitrags, höchstens aber 20 Euro im Monat. Den Vertrag schließt jeder selbst ab, die Quittung reicht man in der Personalabteilung ein.",
        "Wer innerhalb von zwölf Monaten länger als sechs Wochen krank war, bekommt ein Gespräch zum betrieblichen Eingliederungsmanagement angeboten. Dieses Gespräch ist freiwillig.",
        "Bei beruflichen oder privaten Belastungen können sich alle Mitarbeiter anonym und kostenlos an eine externe Beratungsstelle wenden. Die Telefonnummer steht im Intranet."
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Die Zeit im Rückenkurs wird als Arbeitszeit bezahlt.",
       "loesung": false,
       "stelle": "die Kurszeit gilt aber nicht als Arbeitszeit",
       "erklaerung": "Der Kurs ist kostenlos, aber die Zeit zählt nicht als Arbeitszeit."
      },
      {
       "satz": "Bei einem Monatsbeitrag von 50 Euro bezahlt das Haus 25 Euro.",
       "loesung": false,
       "stelle": "höchstens aber 20 Euro im Monat",
       "erklaerung": "Die Hälfte wären 25 Euro, das Haus zahlt aber höchstens 20 Euro."
      },
      {
       "satz": "Nach langer Krankheit muss man an dem Gespräch nicht teilnehmen.",
       "loesung": true,
       "stelle": "Dieses Gespräch ist freiwillig.",
       "erklaerung": "Das Gespräch wird angeboten, die Teilnahme ist freiwillig."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Bericht",
      "titel": "Übergabe Nachtdienst an Frühdienst: Wohnbereich 3",
      "zeilen": [
       "Übergabe Nachtdienst an Frühdienst, Wohnbereich 3",
       "Zimmer 21, Herr Georg Brandl: Er hat ab 23 Uhr gut geschlafen, __(1)__ er am Abend das Schlafmittel abgelehnt hatte. __(2)__ der Lagerung um 1 Uhr und um 4 Uhr ist er nicht aufgewacht. Die Haut am Steiß ist weiter gerötet, __(3)__ bitte heute den Hausarzt informieren.",
       "Zimmer 23, Frau Olga Petrow: Sie hat um 3 Uhr geklingelt, __(4)__ ihr übel war. Sie hat einmal erbrochen. __(5)__ hat sie Tee bekommen und wieder geschlafen. Die Temperatur lag um 3.15 Uhr bei 37,2 Grad. Bitte heute Morgen noch einmal Temperatur messen, __(6)__ sie frühstückt.",
       "Zimmer 24, Herr Kurt Mayer: __(7)__ seine Frau vor zwei Monaten gestorben ist, ist er nachts oft unruhig. Heute hat er ab 2 Uhr mehrmals nach ihr gerufen. Ich habe mich eine Weile zu ihm gesetzt, __(8)__ er sich beruhigt hat."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "bis",
        "damit",
        "Während",
        "obwohl",
        "weil",
        "Seit",
        "deshalb",
        "trotzdem",
        "bevor",
        "Danach"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Der Bewohner hat gut geschlafen, obwohl er kein Schlafmittel genommen hat: ein Gegensatz mit Verb am Ende. Die Temperatur soll vor dem Frühstück gemessen werden, also „bevor“. „trotzdem“ und „damit“ passen in keine Lücke."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "bis",
        "damit",
        "Während",
        "obwohl",
        "weil",
        "Seit",
        "deshalb",
        "trotzdem",
        "bevor",
        "Danach"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „Während\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "bis",
        "damit",
        "Während",
        "obwohl",
        "weil",
        "Seit",
        "deshalb",
        "trotzdem",
        "bevor",
        "Danach"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „deshalb\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "bis",
        "damit",
        "Während",
        "obwohl",
        "weil",
        "Seit",
        "deshalb",
        "trotzdem",
        "bevor",
        "Danach"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „weil\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "bis",
        "damit",
        "Während",
        "obwohl",
        "weil",
        "Seit",
        "deshalb",
        "trotzdem",
        "bevor",
        "Danach"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „Danach\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "bis",
        "damit",
        "Während",
        "obwohl",
        "weil",
        "Seit",
        "deshalb",
        "trotzdem",
        "bevor",
        "Danach"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „bevor\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "bis",
        "damit",
        "Während",
        "obwohl",
        "weil",
        "Seit",
        "deshalb",
        "trotzdem",
        "bevor",
        "Danach"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „Seit\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "bis",
        "damit",
        "Während",
        "obwohl",
        "weil",
        "Seit",
        "deshalb",
        "trotzdem",
        "bevor",
        "Danach"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Richtig ist „bis\". Jedes Wort passt nur einmal."
      }
     ]
    },
    {
     "nr": 6,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Bericht",
      "titel": "Bericht an die Pflegedienstleitung: Gespräch mit einer Angehörigen",
      "zeilen": [
       "Sehr geehrter Herr Kraus,",
       "am 14. Januar hat Frau Seidel, die Tochter von Herrn Seidel aus Zimmer 31, um ein Gespräch __(1)__. Sie hat sich darüber __(2)__, dass ihr Vater bei ihren Besuchen oft noch im Schlafanzug ist.",
       "Ich habe ihr erklärt, dass Herr Seidel die Pflege am Morgen oft __(3)__ und erst gegen Mittag angezogen werden möchte. Wir respektieren diesen Wunsch, weil er zu seinem früheren Tagesablauf __(4)__. Laut Biografiebogen hat Herr Seidel viele Jahre in der Nachtschicht __(5)__.",
       "Frau Seidel war mit dieser Erklärung nicht ganz __(6)__. Sie wünscht sich, dass ihr Vater an den Besuchstagen, also mittwochs und sonntags, bis 14 Uhr angezogen ist. Wir haben __(7)__, Herrn Seidel an diesen Tagen am Vormittag zu fragen und ihn zu motivieren. Wenn er die Pflege ablehnt, wird das im Pflegebericht __(8)__.",
       "Ich bitte Sie, den Fall in der nächsten Teambesprechung zu __(9)__, damit alle Kollegen Bescheid wissen. Für Rückfragen stehe ich Ihnen gern zur __(10)__.",
       "Mit freundlichen Grüßen, Aylin Korkmaz, Wohnbereich 3"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "gefragt",
        "gebeten",
        "gebetet"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Verbindung: „um etwas bitten“. „fragen“ steht mit „nach“."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "beschwert",
        "beschäftigt",
        "bedankt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sich über etwas beschweren“ passt zur Kritik der Tochter."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "abgibt",
        "absagt",
        "ablehnt"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Pflege „ablehnen“ heißt, er will sie nicht."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "fehlt",
        "passt",
        "fasst"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Etwas „passt zu“ etwas, wenn es zusammengehört."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "gearbeitet",
        "bearbeitet",
        "erarbeitet"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„in der Nachtschicht arbeiten“. „bearbeiten“ braucht ein Objekt."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "verständlich",
        "übereinstimmend",
        "einverstanden"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Verbindung: „mit etwas einverstanden sein“."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "vereinfacht",
        "vereinbart",
        "verhindert"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„etwas vereinbaren“ heißt etwas gemeinsam abmachen."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "festgestellt",
        "festgelegt",
        "festgehalten"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Im Bericht wird etwas „festgehalten“, also aufgeschrieben."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "besprechen",
        "bestehen",
        "bestellen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Einen Fall im Team „besprechen“."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "Verbindung",
        "Verfügung",
        "Vorstellung"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Wendung: „zur Verfügung stehen“."
      }
     ]
    }
   ]
  }
 ]
};
