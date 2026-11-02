/* ============================================================
   deutschoderwas club — HÖREN telc Deutsch B2

   Aufbau nach dem offiziellen telc-Format (telc „Tipps zur
   Prüfungsvorbereitung Deutsch B2", Übungstest 1 und 3, geprüft
   01.11.2026). Alle Texte und Aufgaben eigene, nur das Format
   ist nachgebaut. Erzeugt aus scratchpad/telcb2 mit bau-b2.js.
   ============================================================ */

window.HOEREN_TELC_B2 = {
 "niveau": "telcB2",
 "pruefung": "telc Deutsch B2",
 "minuten": 20,
 "punkte": 20,
 "intro": "Bei telc B2 hörst du jeden Text nur EINMAL — Nachrichten, ein Interview und Durchsagen, zusammen etwa zwanzig Minuten. Darum üben wir zuerst, beim ersten Hören das Wichtige zu erfassen, dann die typischen Fallen, dann die drei Teile einzeln, zuletzt die ganze Prüfung mit Uhr. Nach jeder Antwort siehst du den Text mit der entscheidenden Stelle.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Beim ersten Mal verstehen",
   "zeichen": "👂",
   "was": "Nachrichten und Details — ohne zweite Chance."
  },
  {
   "nr": 2,
   "titel": "Die Fallen kennen",
   "zeichen": "🪤",
   "was": "Meinung, Einschränkung, Zitat Dritter — und die Richtig/Falsch-Fallen auf B2."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Nachrichten, Interview, Durchsagen — jeder Teil einzeln."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "20 Aufgaben am Stück, etwa zwanzig Minuten, alles nur einmal."
  }
 ],
 "bloecke": [
  {
   "id": "tb2h1",
   "stufe": 1,
   "titel": "Nachrichten: Worum geht es?",
   "kurz": "Radionachrichten einmal hören und die Kernaussage erkennen — Details sind oft nur Beiwerk.",
   "ziel": "Nach diesem Block erkennst du in einer kurzen Radionachricht sofort die Hauptaussage und lässt dich von Nebeninformationen nicht ablenken.",
   "zeichen": "📻",
   "farbe": "turq",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Radionachricht — Wirtschaft",
     "wer": "Mann",
     "text": "Die Molkerei Bergquell aus Tannrode verlegt ihre Verwaltung in die Landeshauptstadt. Die Produktion bleibt aber am bisherigen Standort, alle Arbeitsplätze in der Herstellung sind gesichert.",
     "frage": "Worum geht es in der Nachricht?",
     "opt": [
      "Die Molkerei schließt ihr Werk in Tannrode.",
      "Die Molkerei baut neue Arbeitsplätze in der Produktion auf.",
      "Nur die Verwaltung der Molkerei zieht um."
     ],
     "loesung": 2,
     "stelle": "Die Produktion bleibt aber am bisherigen Standort",
     "erklaerung": "Nur die Verwaltung zieht um. Das „aber\" sichert die Produktion am alten Ort."
    },
    {
     "art": "hoerwahl",
     "ort": "Radionachricht — Verkehr",
     "wer": "Frau",
     "text": "Ab Dezember fahren die Busse in Altwiesen auch nachts. Die neuen Nachtlinien verkehren am Wochenende stündlich, unter der Woche gibt es zunächst nur zwei Fahrten nach Mitternacht.",
     "frage": "Was ist die Hauptaussage?",
     "opt": [
      "Die Busse fahren in Altwiesen jede Nacht stündlich.",
      "Die Buspreise in Altwiesen steigen ab Dezember.",
      "In Altwiesen gibt es künftig ein Nachtbusangebot."
     ],
     "loesung": 2,
     "stelle": "Ab Dezember fahren die Busse in Altwiesen auch nachts.",
     "erklaerung": "Kern: Es gibt neue Nachtbusse. Stündlich fahren sie nur am Wochenende — das ist ein Detail."
    },
    {
     "art": "hoerwahl",
     "ort": "Radionachricht — Wissenschaft",
     "wer": "Mann",
     "text": "Kinder, die viel Zeit draußen verbringen, werden seltener kurzsichtig. Das zeigt eine Untersuchung der Augenklinik Felden. Wie viel Zeit am Bildschirm sie verbringen, spielte dagegen eine geringere Rolle als bisher angenommen.",
     "frage": "Was hat die Untersuchung vor allem gezeigt?",
     "opt": [
      "Zeit im Freien schützt Kinder vor Kurzsichtigkeit.",
      "Kinder sitzen heute mehr vor dem Bildschirm als früher.",
      "Bildschirmzeit ist der Hauptgrund für Kurzsichtigkeit."
     ],
     "loesung": 0,
     "stelle": "werden seltener kurzsichtig",
     "erklaerung": "Hauptergebnis: Draußen sein hilft. Der Bildschirm spielte eine geringere Rolle als gedacht."
    },
    {
     "art": "hoerwahl",
     "ort": "Radionachricht — Kultur",
     "wer": "Frau",
     "text": "Das Open-Air-Konzert im Schlosspark von Gerstein findet trotz der Unwetterwarnung statt. Die Veranstalter haben die Bühne zusätzlich gesichert. Bei Gewitter wird das Konzert allerdings unterbrochen.",
     "frage": "Worum geht es in der Meldung?",
     "opt": [
      "Das Konzert soll trotz Warnung stattfinden.",
      "Das Konzert wird in eine Halle verlegt.",
      "Das Konzert wird wegen des Wetters abgesagt."
     ],
     "loesung": 0,
     "stelle": "findet trotz der Unwetterwarnung statt",
     "erklaerung": "„trotz der Unwetterwarnung\" — es findet statt. Eine Unterbrechung ist nur möglich."
    },
    {
     "art": "hoerwahl",
     "ort": "Radionachricht — Kommunales",
     "wer": "Mann",
     "text": "Der Gemeinderat von Lindach hat den Bau eines neuen Hallenbads abgelehnt. Stattdessen soll das alte Bad für rund vier Millionen Euro saniert werden. Es bleibt dafür etwa ein Jahr geschlossen.",
     "frage": "Was hat der Gemeinderat beschlossen?",
     "opt": [
      "Ein neues Hallenbad wird gebaut.",
      "Das alte Hallenbad wird renoviert.",
      "Das Hallenbad wird für immer geschlossen."
     ],
     "loesung": 1,
     "stelle": "soll das alte Bad für rund vier Millionen Euro saniert werden",
     "erklaerung": "Neubau abgelehnt, „stattdessen\" Sanierung. Die Schließung ist nur vorübergehend."
    },
    {
     "art": "hoerwahl",
     "ort": "Radionachricht — Sport",
     "wer": "Frau",
     "text": "Die Fußballerinnen des FC Hollbach haben ihr Heimspiel gegen Rotenfels mit drei zu null gewonnen. Damit steht fest: Der Verein steigt in der nächsten Saison in die zweite Liga auf.",
     "frage": "Was ist die wichtigste Information?",
     "opt": [
      "Der FC Hollbach hat sein erstes Spiel gewonnen.",
      "Der FC Hollbach hat gegen Rotenfels verloren.",
      "Der FC Hollbach spielt bald in einer höheren Liga."
     ],
     "loesung": 2,
     "stelle": "Der Verein steigt in der nächsten Saison in die zweite Liga auf.",
     "erklaerung": "„Damit steht fest\" leitet die eigentliche Nachricht ein: der Aufstieg."
    },
    {
     "art": "hoerwahl",
     "ort": "Radionachricht — Gesundheit",
     "wer": "Mann",
     "text": "Apotheken im Landkreis Morsbach dürfen ab sofort auch gegen Grippe impfen. Bisher war das nur in Arztpraxen möglich. Die Impfung ist für Versicherte weiterhin kostenlos.",
     "frage": "Was ist neu?",
     "opt": [
      "Die Grippeimpfung kostet jetzt Geld.",
      "Arztpraxen dürfen nicht mehr impfen.",
      "Man kann sich jetzt auch in der Apotheke impfen lassen."
     ],
     "loesung": 2,
     "stelle": "dürfen ab sofort auch gegen Grippe impfen",
     "erklaerung": "„auch\" zeigt: zusätzlich zu den Praxen. Kosten ändern sich nicht."
    },
    {
     "art": "hoerwahl",
     "ort": "Radionachricht — Umwelt",
     "wer": "Frau",
     "text": "In der Innenstadt von Sonnberg gilt ab Juli auf allen Straßen Tempo dreißig. Ausgenommen ist nur die Ringstraße. Die Stadt erhofft sich weniger Lärm und mehr Sicherheit für Radfahrer.",
     "frage": "Worum geht es?",
     "opt": [
      "Die Ringstraße wird für Autos gesperrt.",
      "In Sonnberg werden neue Radwege gebaut.",
      "Sonnberg führt eine neue Geschwindigkeitsbegrenzung ein."
     ],
     "loesung": 2,
     "stelle": "gilt ab Juli auf allen Straßen Tempo dreißig",
     "erklaerung": "Hauptaussage: Tempo dreißig. Die Ringstraße ist nur die Ausnahme."
    },
    {
     "art": "hoerwahl",
     "ort": "Radionachricht — Bildung",
     "wer": "Mann",
     "text": "Die Volkshochschule Erlental bietet im kommenden Semester deutlich weniger Kurse an als bisher. Grund sind gestiegene Raumkosten. Sprachkurse sind davon aber nicht betroffen, sie werden sogar ausgebaut.",
     "frage": "Was erfährt man über die Volkshochschule?",
     "opt": [
      "Sie streicht vor allem Sprachkurse.",
      "Sie zieht in neue Räume um.",
      "Sie bietet insgesamt weniger Kurse an."
     ],
     "loesung": 2,
     "stelle": "deutlich weniger Kurse an als bisher",
     "erklaerung": "Insgesamt weniger Kurse — Sprachkurse sind die Ausnahme und werden ausgebaut."
    },
    {
     "art": "hoerwahl",
     "ort": "Radionachricht — Digitales",
     "wer": "Frau",
     "text": "Bewohner von Hagelstein können ihren Personalausweis künftig online beantragen. Zum Abholen müssen sie allerdings weiterhin persönlich ins Bürgeramt kommen.",
     "frage": "Was ändert sich in Hagelstein?",
     "opt": [
      "Der Antrag für den Ausweis geht jetzt über das Internet.",
      "Der Ausweis wird nach Hause geschickt.",
      "Man muss gar nicht mehr ins Bürgeramt."
     ],
     "loesung": 0,
     "stelle": "künftig online beantragen",
     "erklaerung": "Neu ist nur der Online-Antrag. Abholen muss man ihn weiterhin selbst."
    }
   ]
  },
  {
   "id": "tb2h2",
   "stufe": 1,
   "titel": "Einmal hören — Details sofort erfassen",
   "kurz": "Durchsagen und Ansagen hört man nur einmal. Vorher die Aufgabe lesen, dann gezielt zuhören.",
   "ziel": "Nach diesem Block weißt du vor dem Hören, auf welches Detail es ankommt, und erfasst Zeiten, Orte und Ausnahmen beim ersten Mal.",
   "zeichen": "⏱️",
   "farbe": "gold",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Durchsage am Flughafen",
     "wer": "Frau",
     "text": "Der Flug nach Lissera startet heute nicht von Terminal eins, sondern von Terminal zwei. Bitte nehmen Sie den kostenlosen Pendelzug, die Fahrt dauert etwa vier Minuten.",
     "frage": "Wo startet der Flug?",
     "opt": [
      "Vom Bahnhof am Flughafen.",
      "Von Terminal zwei.",
      "Von Terminal eins."
     ],
     "loesung": 1,
     "stelle": "sondern von Terminal zwei",
     "erklaerung": "Nach „nicht … sondern\" kommt die gültige Information."
    },
    {
     "art": "hoerwahl",
     "ort": "Ansage im Museum",
     "wer": "Mann",
     "text": "Am ersten Sonntag im Monat ist der Eintritt in unser Haus frei. Für die Sonderausstellung zahlen Sie an diesem Tag allerdings den halben Preis.",
     "frage": "Was kostet die Sonderausstellung am ersten Sonntag im Monat?",
     "opt": [
      "Sie kostet den vollen Preis.",
      "Sie kostet die Hälfte.",
      "Sie ist kostenlos."
     ],
     "loesung": 1,
     "stelle": "zahlen Sie an diesem Tag allerdings den halben Preis",
     "erklaerung": "„allerdings\" schränkt den freien Eintritt für die Sonderausstellung ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Bandansage einer Behörde",
     "wer": "Frau",
     "text": "Das Standesamt ist am Freitag nur bis zwölf Uhr geöffnet. Termine für Eheschließungen am Samstag finden wie geplant statt.",
     "frage": "Was gilt für Freitag?",
     "opt": [
      "Das Standesamt ist nur am Vormittag geöffnet.",
      "Es finden keine Hochzeiten statt.",
      "Das Standesamt ist geschlossen."
     ],
     "loesung": 0,
     "stelle": "am Freitag nur bis zwölf Uhr geöffnet",
     "erklaerung": "„nur bis zwölf Uhr\" heißt: vormittags offen, nachmittags zu."
    },
    {
     "art": "hoerwahl",
     "ort": "Verkehrsfunk im Radio",
     "wer": "Mann",
     "text": "Auf der Autobahn Richtung Nordhain ist nach einer Panne die rechte Spur blockiert. Es staut sich auf drei Kilometern. In Richtung Süden läuft alles frei.",
     "frage": "Wo gibt es Stau?",
     "opt": [
      "In beiden Richtungen.",
      "In Richtung Nordhain.",
      "In Richtung Süden."
     ],
     "loesung": 1,
     "stelle": "Richtung Nordhain ist nach einer Panne die rechte Spur blockiert",
     "erklaerung": "Nur Richtung Nordhain staut es sich, Richtung Süden ist frei."
    },
    {
     "art": "hoerwahl",
     "ort": "Durchsage im Kaufhaus",
     "wer": "Frau",
     "text": "Unsere Kundentoilette im Erdgeschoss ist leider außer Betrieb. Bitte benutzen Sie die Toiletten im zweiten Obergeschoss neben dem Restaurant.",
     "frage": "Wo kann man die Toilette benutzen?",
     "opt": [
      "Im zweiten Obergeschoss.",
      "Im Erdgeschoss.",
      "Im Restaurant gegenüber."
     ],
     "loesung": 0,
     "stelle": "im zweiten Obergeschoss neben dem Restaurant",
     "erklaerung": "„neben dem Restaurant\" ist eine Ortsangabe im zweiten Stock, nicht im Restaurant selbst."
    },
    {
     "art": "hoerwahl",
     "ort": "Durchsage im Bahnhof",
     "wer": "Mann",
     "text": "Der Intercity nach Brennstadt hat heute etwa fünfundzwanzig Minuten Verspätung. Reisende nach Ellwangen nutzen bitte die Regionalbahn um elf Uhr zehn von Gleis acht.",
     "frage": "Wie sollen Reisende nach Ellwangen fahren?",
     "opt": [
      "Mit dem verspäteten Intercity.",
      "Mit der Regionalbahn um elf Uhr zehn.",
      "Mit einem Ersatzbus."
     ],
     "loesung": 1,
     "stelle": "nutzen bitte die Regionalbahn um elf Uhr zehn",
     "erklaerung": "Für Ellwangen gibt es eine konkrete Empfehlung: die Regionalbahn."
    },
    {
     "art": "hoerwahl",
     "ort": "Ansage auf einer Messe",
     "wer": "Frau",
     "text": "Der Eingang Nord ist heute wegen Bauarbeiten geschlossen. Bitte benutzen Sie den Eingang West. Von dort fährt alle fünf Minuten ein Shuttle zu den Hallen.",
     "frage": "Welchen Eingang soll man benutzen?",
     "opt": [
      "Den Eingang am Parkplatz.",
      "Den Eingang West.",
      "Den Eingang Nord."
     ],
     "loesung": 1,
     "stelle": "Bitte benutzen Sie den Eingang West.",
     "erklaerung": "Nord ist geschlossen, West ist offen."
    },
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter einer Praxis",
     "wer": "Mann",
     "text": "Praxis Doktor Yilmaz, guten Tag. Rezepte können Sie ab sofort nur noch über unsere Internetseite bestellen, nicht mehr telefonisch. Die Abholung ist am nächsten Werktag ab zehn Uhr möglich.",
     "frage": "Wie kann man ein Rezept bestellen?",
     "opt": [
      "Über die Internetseite.",
      "Am Telefon.",
      "Nur persönlich in der Praxis."
     ],
     "loesung": 0,
     "stelle": "nur noch über unsere Internetseite bestellen",
     "erklaerung": "„nur noch … nicht mehr telefonisch\": Das Telefon fällt weg."
    },
    {
     "art": "hoerwahl",
     "ort": "Ansage im Zoo",
     "wer": "Frau",
     "text": "Liebe Besucher, die Fütterung der Seelöwen findet heute ausnahmsweise nicht um fünfzehn Uhr, sondern schon um vierzehn Uhr dreißig statt.",
     "frage": "Wann ist die Fütterung heute?",
     "opt": [
      "Um vierzehn Uhr dreißig.",
      "Um fünfzehn Uhr.",
      "Um fünfzehn Uhr dreißig."
     ],
     "loesung": 0,
     "stelle": "sondern schon um vierzehn Uhr dreißig statt",
     "erklaerung": "„schon\" zeigt: früher als sonst. Die gültige Zeit steht nach „sondern\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Durchsage am Flughafen",
     "wer": "Mann",
     "text": "Fluggäste mit Ziel Cardona: Ihr Gepäck kommt nicht an Band drei, sondern an Band sechs an. Sperrgepäck wie Fahrräder erhalten Sie am Sonderschalter neben Band eins.",
     "frage": "Wo bekommt man ein Fahrrad zurück?",
     "opt": [
      "An Band sechs.",
      "An Band drei.",
      "Am Sonderschalter neben Band eins."
     ],
     "loesung": 2,
     "stelle": "am Sonderschalter neben Band eins",
     "erklaerung": "Normales Gepäck an Band sechs, Fahrräder als Sperrgepäck am Sonderschalter."
    }
   ]
  },
  {
   "id": "tb2h3",
   "stufe": 2,
   "titel": "Interview: Meinung, Einschränkung, Zitat",
   "kurz": "Wer sagt was? Eigene Meinung, zitierte Meinung anderer und „zwar … aber\" sauber trennen.",
   "ziel": "Nach diesem Block unterscheidest du im Interview die Meinung des Gastes von der Meinung anderer und erkennst Einschränkungen.",
   "zeichen": "🎙️",
   "farbe": "rot",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einer Stadtplanerin",
     "wer": "Frau",
     "text": "Viele Kollegen halten autofreie Innenstädte für die Lösung schlechthin. Ich sehe das differenzierter. Für ältere Menschen und Handwerker braucht es weiterhin Zufahrten.",
     "frage": "Was meint die Stadtplanerin?",
     "opt": [
      "Innenstädte sollten komplett autofrei sein.",
      "Autofreie Innenstädte brauchen Ausnahmen.",
      "Ihre Kollegen sind gegen autofreie Innenstädte."
     ],
     "loesung": 1,
     "stelle": "Ich sehe das differenzierter.",
     "erklaerung": "Die Kollegen sind dafür, sie selbst will Zufahrten für bestimmte Gruppen."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einem Gründer",
     "wer": "Mann",
     "text": "Meine Eltern sagten damals, ein eigenes Unternehmen sei viel zu riskant. Ehrlich gesagt hatten sie in den ersten zwei Jahren auch recht. Heute bin ich trotzdem froh, dass ich es gewagt habe.",
     "frage": "Wie bewertet der Gründer seine Entscheidung heute?",
     "opt": [
      "Er ist zufrieden, dass er gegründet hat.",
      "Er findet, seine Eltern hatten bis heute recht.",
      "Er bereut die Gründung."
     ],
     "loesung": 0,
     "stelle": "Heute bin ich trotzdem froh, dass ich es gewagt habe.",
     "erklaerung": "Die Eltern hatten nur am Anfang recht. Gefragt ist seine heutige Bewertung."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einer Ärztin",
     "wer": "Frau",
     "text": "Zwar können Fitness-Apps motivieren, aber sie ersetzen keine ärztliche Beratung. Gerade bei Herzproblemen sollte man nicht einfach den Werten auf dem Handy vertrauen.",
     "frage": "Was sagt die Ärztin über Fitness-Apps?",
     "opt": [
      "Sie sieht Vorteile, aber auch klare Grenzen.",
      "Sie empfiehlt sie besonders bei Herzproblemen.",
      "Sie hält sie für völlig nutzlos."
     ],
     "loesung": 0,
     "stelle": "aber sie ersetzen keine ärztliche Beratung",
     "erklaerung": "„Zwar … aber\": ein Vorteil, dann die Einschränkung. Nutzlos sagt sie nicht."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einem Lehrer",
     "wer": "Mann",
     "text": "Der Schulleiter meint, Handys sollten im Unterricht komplett verboten werden. Ich persönlich würde sie lieber gezielt einsetzen, zum Beispiel für Recherchen.",
     "frage": "Wer ist für ein komplettes Handyverbot?",
     "opt": [
      "Der Lehrer.",
      "Der Schulleiter.",
      "Beide."
     ],
     "loesung": 1,
     "stelle": "Der Schulleiter meint, Handys sollten im Unterricht komplett verboten werden.",
     "erklaerung": "Meinung eines Dritten: Der Schulleiter will das Verbot, der Lehrer nicht."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einer Landwirtin",
     "wer": "Frau",
     "text": "Es heißt immer, Bio sei nur etwas für Großstädter mit viel Geld. Das stimmt so nicht. Unsere Kunden im Hofladen kommen aus allen Schichten, auch viele junge Familien.",
     "frage": "Was sagt die Landwirtin über ihre Kunden?",
     "opt": [
      "Junge Familien kaufen kaum Bio.",
      "Ihre Kunden sind sehr unterschiedlich.",
      "Vor allem reiche Großstädter kaufen bei ihr."
     ],
     "loesung": 1,
     "stelle": "Unsere Kunden im Hofladen kommen aus allen Schichten",
     "erklaerung": "„Es heißt immer\" leitet ein Vorurteil ein, das sie dann widerlegt."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einem Wissenschaftler",
     "wer": "Mann",
     "text": "Ich würde nicht sagen, dass die Vier-Tage-Woche für alle Branchen funktioniert. In der Pflege zum Beispiel wäre das schwierig. Aber in vielen Büros spricht wenig dagegen.",
     "frage": "Wie sieht der Wissenschaftler die Vier-Tage-Woche?",
     "opt": [
      "Er hält sie besonders in der Pflege für sinnvoll.",
      "Er hält sie überall für unmöglich.",
      "Er hält sie für einige Bereiche für geeignet."
     ],
     "loesung": 2,
     "stelle": "Aber in vielen Büros spricht wenig dagegen.",
     "erklaerung": "Nicht für alle, aber für viele Büros — eine eingeschränkte Zustimmung."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einer Autorin",
     "wer": "Frau",
     "text": "Mein Verlag wollte unbedingt, dass das Buch ein glückliches Ende hat. Ich hätte es lieber offen gelassen, aber am Ende habe ich nachgegeben.",
     "frage": "Was stimmt über das Ende des Buches?",
     "opt": [
      "Das Buch hat ein offenes Ende.",
      "Das Ende entspricht dem Wunsch des Verlags.",
      "Die Autorin hat das Ende so geschrieben, wie sie es wollte."
     ],
     "loesung": 1,
     "stelle": "am Ende habe ich nachgegeben",
     "erklaerung": "„Ich hätte lieber\" ist Konjunktiv — ihr Wunsch, nicht die Realität. Sie hat nachgegeben."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einem Hotelier",
     "wer": "Mann",
     "text": "Laut unserem Branchenverband sind die Übernachtungszahlen im Sommer gestiegen. Bei uns im Haus kann ich das leider nicht bestätigen, wir hatten eher weniger Gäste.",
     "frage": "Wie lief der Sommer für das Hotel des Mannes?",
     "opt": [
      "Das Hotel hatte mehr Gäste als sonst.",
      "Das Hotel war ausgebucht.",
      "Das Hotel hatte weniger Gäste."
     ],
     "loesung": 2,
     "stelle": "wir hatten eher weniger Gäste",
     "erklaerung": "„Laut unserem Branchenverband\" ist die allgemeine Zahl. Für sein Haus gilt das Gegenteil."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einer Musikerin",
     "wer": "Frau",
     "text": "Kritiker schreiben oft, mein neues Album sei ruhiger als die alten. Dem kann ich eigentlich nur zustimmen. Ich bin älter geworden, und das hört man.",
     "frage": "Was denkt die Musikerin über die Kritik?",
     "opt": [
      "Sie findet die Kritik falsch.",
      "Sie stimmt den Kritikern zu.",
      "Sie hat die Kritiken nicht gelesen."
     ],
     "loesung": 1,
     "stelle": "Dem kann ich eigentlich nur zustimmen.",
     "erklaerung": "Hier widerspricht sie dem Zitat nicht — sie bestätigt es. Nicht jedes Zitat ist eine Falle."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einem Bürgermeister",
     "wer": "Mann",
     "text": "Das neue Radwegenetz ist sicher nicht perfekt. Einige Strecken sind noch zu schmal. Insgesamt bin ich aber überzeugt, dass wir auf dem richtigen Weg sind.",
     "frage": "Wie bewertet der Bürgermeister das Radwegenetz insgesamt?",
     "opt": [
      "Er findet es perfekt.",
      "Er hält es für gescheitert.",
      "Er ist trotz Mängeln überzeugt davon."
     ],
     "loesung": 2,
     "stelle": "Insgesamt bin ich aber überzeugt",
     "erklaerung": "„Insgesamt … aber\" fasst die Haltung zusammen: positiv trotz einzelner Mängel."
    }
   ]
  },
  {
   "id": "tb2h4",
   "stufe": 2,
   "titel": "Richtig oder falsch? Fallen auf B2",
   "kurz": "Konjunktiv statt Fakt, „zwar … aber\", Plan statt Ergebnis, alle statt einige — die feinen Fallen.",
   "ziel": "Nach diesem Block erkennst du die feinen B2-Fallen: Wunsch oder Wirklichkeit, Einschränkung, Mengenangaben und geänderte Pläne.",
   "zeichen": "⚖️",
   "farbe": "lila",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Radionachricht",
     "wer": "Frau",
     "text": "Die Stadt Kornau würde gern eine neue Sporthalle bauen. Bisher fehlt dafür aber das Geld, ein Zuschuss vom Land wurde abgelehnt.",
     "frage": "Kornau baut eine neue Sporthalle.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "Bisher fehlt dafür aber das Geld",
     "erklaerung": "Konjunktiv-Falle: „würde gern\" ist ein Wunsch, kein Fakt. Gebaut wird nicht."
    },
    {
     "art": "hoerwahl",
     "ort": "Durchsage im Bahnhof",
     "wer": "Mann",
     "text": "Die Regionalbahn nach Steinfurt fährt heute pünktlich, allerdings nur mit zwei statt vier Wagen. Bitte verteilen Sie sich auf den gesamten Zug.",
     "frage": "Der Zug nach Steinfurt fährt heute pünktlich.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "fährt heute pünktlich",
     "erklaerung": "Die Einschränkung betrifft nur die Wagen, nicht die Pünktlichkeit."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview",
     "wer": "Frau",
     "text": "Einige unserer Mitarbeiter arbeiten inzwischen ganz von zu Hause. Die meisten kommen aber mindestens drei Tage pro Woche ins Büro.",
     "frage": "Die meisten Mitarbeiter arbeiten nur noch von zu Hause.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "Die meisten kommen aber mindestens drei Tage pro Woche ins Büro.",
     "erklaerung": "Mengen-Falle: „einige\" arbeiten zu Hause, „die meisten\" kommen ins Büro."
    },
    {
     "art": "hoerwahl",
     "ort": "Radionachricht",
     "wer": "Mann",
     "text": "Ursprünglich sollte das neue Kulturzentrum in Feldau im Frühjahr eröffnen. Wegen Lieferproblemen wird es nun erst im Herbst so weit sein.",
     "frage": "Das Kulturzentrum eröffnet im Frühjahr.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "wird es nun erst im Herbst so weit sein",
     "erklaerung": "Plan-Falle: „Ursprünglich\" nennt den alten Plan. Gültig ist der Herbst."
    },
    {
     "art": "hoerwahl",
     "ort": "Ansage im Museum",
     "wer": "Frau",
     "text": "Für Schüler und Studenten ist der Eintritt ermäßigt. Bitte zeigen Sie dazu an der Kasse einen gültigen Ausweis vor.",
     "frage": "Studenten bekommen mit Ausweis einen günstigeren Eintritt.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "ist der Eintritt ermäßigt",
     "erklaerung": "Umschreibung: „ermäßigt\" bedeutet „günstiger\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview",
     "wer": "Mann",
     "text": "Zwar ist unser Umsatz im letzten Jahr gestiegen, aber der Gewinn ist wegen der hohen Energiekosten gesunken.",
     "frage": "Das Unternehmen hat im letzten Jahr mehr Gewinn gemacht.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "aber der Gewinn ist wegen der hohen Energiekosten gesunken",
     "erklaerung": "„Zwar … aber\": Der Umsatz ist gestiegen, der Gewinn aber gesunken. Umsatz ist nicht Gewinn."
    },
    {
     "art": "hoerwahl",
     "ort": "Bandansage einer Behörde",
     "wer": "Frau",
     "text": "Anträge auf Wohngeld können Sie nicht nur schriftlich, sondern auch online einreichen. Eine persönliche Vorsprache ist nicht erforderlich.",
     "frage": "Für den Wohngeldantrag muss man persönlich zur Behörde gehen.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "Eine persönliche Vorsprache ist nicht erforderlich.",
     "erklaerung": "„nicht erforderlich\" heißt: nicht nötig. Man kann schriftlich oder online beantragen."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview",
     "wer": "Mann",
     "text": "Mein Kollege glaubt, dass die Mieten in der Stadt weiter steigen werden. Ich halte das für übertrieben, ich rechne eher mit einer Stagnation.",
     "frage": "Der Mann erwartet, dass die Mieten weiter steigen.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "ich rechne eher mit einer Stagnation",
     "erklaerung": "Personen-Falle: Der Kollege erwartet steigende Mieten, der Sprecher nicht."
    },
    {
     "art": "hoerwahl",
     "ort": "Durchsage am Flughafen",
     "wer": "Frau",
     "text": "Wegen Nebels kommt es heute zu Verspätungen. Annullierungen sind bisher nicht geplant. Bitte informieren Sie sich regelmäßig auf den Anzeigetafeln.",
     "frage": "Heute fallen keine Flüge aus, es gibt aber Verspätungen.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "Annullierungen sind bisher nicht geplant",
     "erklaerung": "Fachwort-Falle: „Annullierung\" heißt, ein Flug fällt aus. Das ist nicht geplant."
    },
    {
     "art": "hoerwahl",
     "ort": "Radionachricht",
     "wer": "Mann",
     "text": "Nicht nur die Bibliothek, sondern auch das Stadtarchiv von Weilheim bleibt in den Ferien geöffnet, allerdings mit verkürzten Öffnungszeiten.",
     "frage": "Auch das Stadtarchiv ist in den Ferien geöffnet.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "Nicht nur die Bibliothek, sondern auch das Stadtarchiv",
     "erklaerung": "„nicht nur … sondern auch\" heißt: beide sind geöffnet — nur kürzer."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "ansage",
   "name": "Hörverstehen: Nachrichten",
   "kurz": "Kurze Radionachrichten — nur EINMAL hören",
   "was": "Du hörst kurze Nachrichten aus dem Radio. Zu jeder Meldung gibt es eine Aussage: richtig oder falsch? Jede Meldung hörst du nur einmal.",
   "tipp": "Es geht um die Kernaussage der Meldung: Was ist passiert, was wurde beschlossen? Lies die Aussage, bevor die Meldung beginnt.",
   "zeichen": "📻",
   "farbe": "turq",
   "punkte": 5,
   "mal": 1,
   "runden": [
    {
     "id": "b2th1s1",
     "titel": "Nachrichten am Mittag",
     "aufgaben": [
      {
       "von": "Nachricht 1 — Wirtschaft",
       "wer": "Mann",
       "text": "Der Fahrradhersteller Velotec aus Halmstedt baut seine Produktion aus. Wie das Unternehmen heute mitteilte, sollen bis Ende nächsten Jahres rund zweihundert neue Arbeitsplätze entstehen. Grund sei die stark gestiegene Nachfrage nach Lastenrädern, vor allem aus dem Ausland. Die Gewerkschaft begrüßte die Pläne, kritisierte aber, dass ein Großteil der neuen Stellen zunächst befristet sein soll. Die Stadt Halmstedt hat bereits ein Grundstück neben dem bisherigen Werk zur Verfügung gestellt.",
       "satz": "Ein Fahrradhersteller will wegen hoher Nachfrage zusätzliche Mitarbeiter einstellen.",
       "loesung": true,
       "stelle": "sollen bis Ende nächsten Jahres rund zweihundert neue Arbeitsplätze entstehen",
       "erklaerung": "Die Hauptaussage: zweihundert neue Stellen wegen der Nachfrage nach Lastenrädern. Die Kritik ist nur ein Nebenaspekt."
      },
      {
       "von": "Nachricht 2 — Verkehr",
       "wer": "Frau",
       "text": "Autofahrer in Kronberg müssen sich ab Montag auf Behinderungen einstellen. Die Brücke über die Lanne wird für voraussichtlich sechs Wochen saniert. Anders als zunächst geplant bleibt sie aber nicht vollständig gesperrt: In jede Richtung steht eine Fahrspur zur Verfügung. Für Lastwagen über siebeneinhalb Tonnen gilt allerdings ein Durchfahrtsverbot. Die Stadt empfiehlt Pendlern, in dieser Zeit auf Bus und Bahn umzusteigen.",
       "satz": "Die Brücke in Kronberg wird während der Bauarbeiten komplett gesperrt.",
       "loesung": false,
       "stelle": "bleibt sie aber nicht vollständig gesperrt",
       "erklaerung": "„Anders als zunächst geplant\": Eine Spur pro Richtung bleibt offen, nur Lastwagen dürfen nicht durch."
      },
      {
       "von": "Nachricht 3 — Wissenschaft",
       "wer": "Mann",
       "text": "Forscher der Universität Elbingen haben herausgefunden, dass Stadtbäume die Temperatur in Wohnstraßen deutlich senken können. In Straßen mit dichtem Baumbestand war es im Sommer bis zu vier Grad kühler als in Straßen ohne Bäume. Die Wissenschaftler betonen jedoch, dass junge Bäume diesen Effekt erst nach etwa fünfzehn Jahren erreichen. Sie fordern die Städte deshalb auf, bestehende alte Bäume besser zu schützen, statt sie für Bauprojekte zu fällen.",
       "satz": "Laut der Studie kühlen neu gepflanzte Bäume die Straßen sofort spürbar ab.",
       "loesung": false,
       "stelle": "diesen Effekt erst nach etwa fünfzehn Jahren erreichen",
       "erklaerung": "Junge Bäume brauchen etwa fünfzehn Jahre. Darum sollen alte Bäume geschützt werden."
      },
      {
       "von": "Nachricht 4 — Kultur",
       "wer": "Frau",
       "text": "Das Stadttheater Wernau bleibt trotz knapper Kassen geöffnet. Nach monatelangen Verhandlungen haben sich Stadt und Land darauf geeinigt, die Kosten für die nächsten drei Jahre gemeinsam zu tragen. Im Gegenzug muss das Theater seine Eintrittspreise leicht erhöhen und mehr Vorstellungen für Schulklassen anbieten. Der Intendant zeigte sich erleichtert. Er sprach von einem guten Tag für die Kultur in der Region.",
       "satz": "Die Zukunft des Theaters in Wernau ist vorerst gesichert.",
       "loesung": true,
       "stelle": "die Kosten für die nächsten drei Jahre gemeinsam zu tragen",
       "erklaerung": "Stadt und Land finanzieren das Theater drei Jahre lang — also „vorerst gesichert\"."
      },
      {
       "von": "Nachricht 5 — Sport",
       "wer": "Mann",
       "text": "Der Handballverein Eintracht Sollbach hat überraschend seinen Trainer entlassen. Dabei steht die Mannschaft in der Tabelle auf einem guten vierten Platz. Nach Angaben des Vereins habe es aber seit Wochen Spannungen zwischen dem Trainer und mehreren Spielern gegeben. Ein Nachfolger soll bereits in den nächsten Tagen vorgestellt werden. Bis dahin übernimmt der bisherige Co-Trainer das Training.",
       "satz": "Der Trainer musste wegen schlechter Ergebnisse gehen.",
       "loesung": false,
       "stelle": "seit Wochen Spannungen zwischen dem Trainer und mehreren Spielern",
       "erklaerung": "Die Mannschaft ist Vierter. Grund waren Spannungen im Team, nicht die Ergebnisse."
      }
     ]
    },
    {
     "id": "b2th1s2",
     "titel": "Nachrichten am Abend",
     "aufgaben": [
      {
       "von": "Nachricht 1 — Gesellschaft",
       "wer": "Frau",
       "text": "In Rosenfeld können Bürger ab sofort online mitentscheiden, wofür ein Teil des städtischen Haushalts ausgegeben wird. Insgesamt stehen fünfhunderttausend Euro zur Verfügung. Vorschläge können bis Ende März eingereicht werden, anschließend wird abgestimmt. Mitmachen dürfen alle Einwohner ab vierzehn Jahren. Wer keinen Internetzugang hat, kann seine Stimme auch im Bürgerbüro abgeben. Ähnliche Modelle gibt es bereits in mehreren Nachbarstädten.",
       "satz": "Die Einwohner von Rosenfeld dürfen über die Verwendung eines Teils des städtischen Geldes mitbestimmen.",
       "loesung": true,
       "stelle": "online mitentscheiden, wofür ein Teil des städtischen Haushalts ausgegeben wird",
       "erklaerung": "Hauptaussage: Bürgerbeteiligung beim Haushalt. Online ist nur ein Weg, das Bürgerbüro ein anderer."
      },
      {
       "von": "Nachricht 2 — Wirtschaft",
       "wer": "Mann",
       "text": "Die Lebensmittelpreise in der Region sind im vergangenen Monat leicht gesunken. Das geht aus Zahlen des Statistischen Landesamts hervor. Vor allem Obst und Gemüse wurden günstiger, was die Fachleute mit der guten Ernte erklären. Teurer geworden sind dagegen Milchprodukte und Kaffee. Insgesamt liegen die Preise aber immer noch deutlich über dem Niveau von vor drei Jahren.",
       "satz": "Lebensmittel sind inzwischen wieder so günstig wie vor drei Jahren.",
       "loesung": false,
       "stelle": "immer noch deutlich über dem Niveau von vor drei Jahren",
       "erklaerung": "Die Preise sind zwar leicht gesunken, liegen aber noch deutlich höher als vor drei Jahren."
      },
      {
       "von": "Nachricht 3 — Gesundheit",
       "wer": "Frau",
       "text": "Die Kreisklinik Altmoor will dem Mangel an Pflegekräften mit einem neuen Arbeitszeitmodell begegnen. Ab Januar können Pflegekräfte wählen, ob sie vier längere oder fünf kürzere Schichten pro Woche arbeiten. Die Klinikleitung hofft, so neue Mitarbeiter zu gewinnen und die bisherigen zu halten. Ein ähnliches Modell war in einer Testphase auf zwei Stationen sehr gut angenommen worden.",
       "satz": "Die Klinik bietet ihren Pflegekräften mehr Wahlmöglichkeiten bei der Arbeitszeit an.",
       "loesung": true,
       "stelle": "ob sie vier längere oder fünf kürzere Schichten pro Woche arbeiten",
       "erklaerung": "Kern der Meldung ist das neue Modell mit zwei Varianten zur Auswahl."
      },
      {
       "von": "Nachricht 4 — Umwelt",
       "wer": "Mann",
       "text": "Der Badesee bei Grünwalde bleibt in diesem Sommer geschlossen. Bei Messungen wurden erhöhte Werte von Blaualgen festgestellt, die bei Menschen Hautreizungen auslösen können. Spaziergänge rund um den See sind weiterhin erlaubt, Hunde dürfen aber nicht ins Wasser. Das Gesundheitsamt will die Wasserqualität jede Woche kontrollieren. Ob der See im nächsten Jahr wieder öffnen kann, ist noch unklar.",
       "satz": "Der Bereich um den See ist für Besucher komplett gesperrt.",
       "loesung": false,
       "stelle": "Spaziergänge rund um den See sind weiterhin erlaubt",
       "erklaerung": "Nur das Baden ist verboten. Spazierengehen ist weiterhin erlaubt."
      },
      {
       "von": "Nachricht 5 — Kultur",
       "wer": "Frau",
       "text": "Das Filmfestival in Seehausen hat einen neuen Besucherrekord gemeldet. An den fünf Festivaltagen kamen mehr als vierzigtausend Gäste, so viele wie nie zuvor. Die Veranstalter führen das vor allem auf die neuen Freiluftvorführungen am Hafen zurück, die kostenlos waren. Der Hauptpreis ging an einen Dokumentarfilm über eine Familie von Schäfern. Das nächste Festival soll um zwei Tage verlängert werden.",
       "satz": "Das Filmfestival war so gut besucht wie noch nie.",
       "loesung": true,
       "stelle": "so viele wie nie zuvor",
       "erklaerung": "„Besucherrekord\" und „so viele wie nie zuvor\" — das ist die Hauptaussage."
      }
     ]
    },
    {
     "id": "b2th1s3",
     "titel": "Nachrichten am Morgen",
     "aufgaben": [
      {
       "von": "Nachricht 1 — Bildung",
       "wer": "Mann",
       "text": "An den Grundschulen im Landkreis Ebersfeld fehlen zum neuen Schuljahr rund sechzig Lehrkräfte. Das Schulamt will die Lücke zunächst mit Quereinsteigern und pensionierten Lehrern schließen. Unterricht soll nach Angaben der Behörde nicht ausfallen, allerdings könnten die Klassen in einigen Schulen größer werden. Elternvertreter zeigten sich besorgt und fordern langfristige Lösungen statt kurzfristiger Notmaßnahmen.",
       "satz": "Wegen des Lehrermangels wird an einigen Grundschulen Unterricht gestrichen.",
       "loesung": false,
       "stelle": "Unterricht soll nach Angaben der Behörde nicht ausfallen",
       "erklaerung": "Es fällt kein Unterricht aus — die Klassen werden eventuell größer. Das ist ein Unterschied."
      },
      {
       "von": "Nachricht 2 — Verkehr",
       "wer": "Frau",
       "text": "Die Verkehrsbetriebe von Neustrand testen ab nächster Woche einen selbstfahrenden Kleinbus. Er fährt zunächst auf einer kurzen Strecke zwischen dem Bahnhof und dem Krankenhaus. Aus Sicherheitsgründen ist in der Testphase immer ein Mitarbeiter an Bord, der im Notfall eingreifen kann. Die Fahrt ist kostenlos. Wenn der Test erfolgreich verläuft, soll das Angebot im nächsten Jahr auf weitere Stadtteile ausgeweitet werden.",
       "satz": "In Neustrand wird ein fahrerloser Bus auf einer Teststrecke erprobt.",
       "loesung": true,
       "stelle": "testen ab nächster Woche einen selbstfahrenden Kleinbus",
       "erklaerung": "Hauptaussage: Testbetrieb eines selbstfahrenden Busses. Dass ein Mitarbeiter mitfährt, ändert daran nichts."
      },
      {
       "von": "Nachricht 3 — Wirtschaft",
       "wer": "Mann",
       "text": "Immer mehr Geschäfte in der Innenstadt von Talheim stehen leer. Nach einer Erhebung der Handelskammer ist inzwischen fast jedes fünfte Ladenlokal ungenutzt. Die Stadt will nun gegensteuern: Gründer sollen leere Läden für ein Jahr zu stark reduzierter Miete nutzen können. Die Hausbesitzer erhalten dafür einen Zuschuss. Erste Interessenten, darunter eine Fahrradwerkstatt und ein Café, haben sich bereits gemeldet.",
       "satz": "Die Stadt Talheim möchte mit einem Förderprogramm gegen leere Geschäfte vorgehen.",
       "loesung": true,
       "stelle": "Gründer sollen leere Läden für ein Jahr zu stark reduzierter Miete nutzen können",
       "erklaerung": "Die Stadt „will gegensteuern\": günstige Mieten für Gründer, Zuschuss für Besitzer."
      },
      {
       "von": "Nachricht 4 — Wissenschaft",
       "wer": "Frau",
       "text": "Ein Forschungsteam am Institut für Meereskunde in Nordhafen hat eine neue Methode entwickelt, um Mikroplastik im Wasser schneller nachzuweisen. Bisher dauerte eine Analyse mehrere Tage, mit dem neuen Verfahren sind es nur noch wenige Stunden. Ob sich die Methode auch für große Gewässer eignet, muss allerdings noch geprüft werden. Bislang wurde sie nur in Laborversuchen getestet.",
       "satz": "Die neue Methode wird bereits erfolgreich in großen Gewässern eingesetzt.",
       "loesung": false,
       "stelle": "Bislang wurde sie nur in Laborversuchen getestet.",
       "erklaerung": "Die Eignung für große Gewässer „muss noch geprüft werden\". Bisher gibt es nur Laborversuche."
      },
      {
       "von": "Nachricht 5 — Sport",
       "wer": "Mann",
       "text": "Der Stadtlauf in Bergheim findet in diesem Jahr nicht wie gewohnt im Mai, sondern erst im September statt. Grund sind Bauarbeiten auf dem Marktplatz, wo sonst Start und Ziel liegen. Die Strecke bleibt ansonsten unverändert. Bereits angemeldete Läufer müssen nichts unternehmen, ihre Anmeldung gilt automatisch für den neuen Termin. Wer im September nicht kann, bekommt die Startgebühr zurück.",
       "satz": "Der Stadtlauf wird verschoben, weil die Laufstrecke geändert werden muss.",
       "loesung": false,
       "stelle": "Die Strecke bleibt ansonsten unverändert.",
       "erklaerung": "Grund sind Bauarbeiten am Marktplatz. Die Strecke selbst ändert sich nicht."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "interview",
   "name": "Hörverstehen: Interview",
   "kurz": "Ein Radiointerview, zehn Aussagen — nur EINMAL hören",
   "was": "Du hörst ein Radiointerview in Abschnitten. Zu jedem Abschnitt eine Aussage: richtig oder falsch? Auf B2 hörst du das Interview nur einmal.",
   "tipp": "Unterscheide: Was ist Fakt, was ist die Meinung des Gastes, was sagen andere? Und was war früher, was ist heute?",
   "zeichen": "🎤",
   "farbe": "gold",
   "punkte": 10,
   "mal": 1,
   "runden": [
    {
     "id": "b2th2s1",
     "titel": "Im Gespräch: Eine Innenstadt ohne Autos (Sendung „Stadtgespräch\" auf Radio Rheinbogen)",
     "aufgaben": [
      {
       "ort": "Radiointerview — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Morgen und willkommen beim „Stadtgespräch\". Bei mir im Studio ist Doktor Miriam Kessler, Stadtplanerin in Lindenau. Frau Kessler, Ihre Stadt hat vor zwei Jahren die Altstadt komplett für Autos gesperrt. Stimmt das so?"
        },
        {
         "wer": "Frau",
         "text": "Nicht ganz. Gesperrt ist nur der innere Ring rund um den Marktplatz, also etwa ein Drittel der Altstadt. Lieferverkehr ist morgens bis zehn Uhr erlaubt, und Anwohner mit Behinderung dürfen weiterhin bis vor die Haustür fahren. Ganz autofrei sind wir also noch lange nicht."
        }
       ],
       "satz": "In Lindenau dürfen in der gesamten Altstadt keine Autos mehr fahren.",
       "loesung": false,
       "stelle": "Gesperrt ist nur der innere Ring rund um den Marktplatz",
       "erklaerung": "Der Moderator sagt „komplett\", aber sie korrigiert: Nur der innere Ring ist gesperrt, und es gibt Ausnahmen."
      },
      {
       "ort": "Radiointerview — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wie kam es überhaupt zu dieser Entscheidung?"
        },
        {
         "wer": "Frau",
         "text": "Den Anstoß gab eigentlich keine Umweltdebatte, sondern ein ganz praktisches Problem. Die Straßen in der Altstadt sind schmal, und Rettungswagen kamen bei Stau oft nicht durch. Nach einem Unfall, bei dem ein Krankenwagen fast zwanzig Minuten feststeckte, hat der Stadtrat das Thema dann ernsthaft auf die Tagesordnung gesetzt."
        }
       ],
       "satz": "Auslöser für die Sperrung waren vor allem Probleme mit Rettungsfahrzeugen.",
       "loesung": true,
       "stelle": "Rettungswagen kamen bei Stau oft nicht durch",
       "erklaerung": "Nicht die Umwelt, sondern blockierte Rettungswagen gaben den Anstoß."
      },
      {
       "ort": "Radiointerview — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ich kann mir vorstellen, dass die Geschäftsleute nicht gerade begeistert waren."
        },
        {
         "wer": "Frau",
         "text": "Das ist noch freundlich ausgedrückt. Der Einzelhandelsverband hat damals Unterschriften gesammelt und mit einer Klage gedroht. Die Händler befürchteten, dass ihre Kunden lieber ins Einkaufszentrum am Stadtrand fahren. Am Ende wurde aber nicht geklagt, weil wir uns auf eine einjährige Testphase geeinigt hatten."
        }
       ],
       "satz": "Der Einzelhandelsverband hat gegen die Stadt vor Gericht geklagt.",
       "loesung": false,
       "stelle": "Am Ende wurde aber nicht geklagt",
       "erklaerung": "Der Verband hat nur mit einer Klage gedroht — geklagt wurde nicht."
      },
      {
       "ort": "Radiointerview — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und wie sieht es heute aus? Haben die Läden tatsächlich Kunden verloren?"
        },
        {
         "wer": "Frau",
         "text": "Die Zahlen sind gemischt. Cafés und Restaurants machen deutlich mehr Umsatz, weil sie jetzt Tische auf die Straße stellen können. Bei den Bekleidungsgeschäften ist der Umsatz dagegen leicht gesunken. Ob das an der Sperrung liegt oder am Onlinehandel, kann allerdings niemand genau sagen."
        }
       ],
       "satz": "Alle Geschäfte in der Innenstadt haben seit der Sperrung mehr Umsatz.",
       "loesung": false,
       "stelle": "Bei den Bekleidungsgeschäften ist der Umsatz dagegen leicht gesunken",
       "erklaerung": "Nur Gastronomie profitiert, Bekleidungsgeschäfte haben etwas weniger Umsatz."
      },
      {
       "ort": "Radiointerview — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was hat sich für die Menschen verändert, die in der Altstadt wohnen?"
        },
        {
         "wer": "Frau",
         "text": "Wir haben vorher und nachher Lärm gemessen. In den gesperrten Straßen ist es nachts im Durchschnitt um etwa acht Dezibel leiser geworden. Das klingt nach wenig, aber für das menschliche Ohr bedeutet das fast eine Halbierung des Lärms. Viele Anwohner schreiben uns, dass sie zum ersten Mal bei offenem Fenster schlafen können."
        }
       ],
       "satz": "Messungen haben gezeigt, dass es in den gesperrten Straßen ruhiger geworden ist.",
       "loesung": true,
       "stelle": "Wir haben vorher und nachher Lärm gemessen",
       "erklaerung": "Es gibt Messungen vorher und nachher: nachts etwa acht Dezibel leiser."
      },
      {
       "ort": "Radiointerview — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Kritiker sagen, der Verkehr verschwinde nicht, er verlagere sich nur in die Nachbarviertel."
        },
        {
         "wer": "Frau",
         "text": "Diese Sorge hatten wir auch. Tatsächlich gab es in den ersten Monaten mehr Verkehr auf der Ringstraße. Inzwischen hat sich das aber eingependelt. Ein Teil der Leute fährt jetzt mit dem Bus oder dem Fahrrad, und manche Fahrten finden einfach gar nicht mehr statt."
        }
       ],
       "satz": "Auf der Ringstraße gibt es heute dauerhaft deutlich mehr Verkehr als vor der Sperrung.",
       "loesung": false,
       "stelle": "Inzwischen hat sich das aber eingependelt",
       "erklaerung": "Mehr Verkehr gab es nur in den ersten Monaten; heute hat es sich eingependelt."
      },
      {
       "ort": "Radiointerview — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was war aus Ihrer Sicht der größte Fehler bei der Umsetzung?"
        },
        {
         "wer": "Frau",
         "text": "Ganz klar die Kommunikation mit älteren Menschen. Wir haben fast alles über die Website und soziale Medien erklärt. Viele Senioren wussten deshalb nicht, wo die neuen Haltestellen sind oder wie der Shuttlebus funktioniert. Heute würde ich von Anfang an Informationsabende in den Stadtteilen anbieten."
        }
       ],
       "satz": "Frau Kessler findet, dass ältere Menschen anfangs nicht gut genug informiert wurden.",
       "loesung": true,
       "stelle": "Ganz klar die Kommunikation mit älteren Menschen",
       "erklaerung": "Sie nennt die Kommunikation mit älteren Menschen als größten Fehler."
      },
      {
       "ort": "Radiointerview — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Sie haben den Shuttlebus erwähnt. Wie wird der angenommen?"
        },
        {
         "wer": "Frau",
         "text": "Besser als erwartet. Er fährt alle zehn Minuten vom Parkhaus am Bahnhof zum Marktplatz und ist kostenlos. Ursprünglich wollten wir einen Euro pro Fahrt verlangen, aber der Stadtrat hat sich am Ende dagegen entschieden, damit niemand wegen des Preises wieder ins Auto steigt."
        }
       ],
       "satz": "Für den Shuttlebus muss man einen Euro pro Fahrt bezahlen.",
       "loesung": false,
       "stelle": "Ursprünglich wollten wir einen Euro pro Fahrt verlangen",
       "erklaerung": "Ein Euro war nur geplant; der Bus ist kostenlos."
      },
      {
       "ort": "Radiointerview — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Würden Sie anderen Städten empfehlen, Ihrem Beispiel zu folgen?"
        },
        {
         "wer": "Frau",
         "text": "Grundsätzlich ja, aber nicht als Kopie. Jede Stadt hat eine andere Struktur. In Lindenau hatten wir den Vorteil, dass es schon eine gute Busverbindung gab. Wo der öffentliche Nahverkehr schwach ist, sollte man zuerst dort investieren, bevor man Straßen sperrt. Sonst fühlen sich die Leute nur bestraft."
        }
       ],
       "satz": "Frau Kessler meint, dass ein guter Nahverkehr eine Voraussetzung für die Sperrung ist.",
       "loesung": true,
       "stelle": "sollte man zuerst dort investieren, bevor man Straßen sperrt",
       "erklaerung": "Erst den Nahverkehr verbessern, dann sperren — sonst fühlen sich die Leute bestraft."
      },
      {
       "ort": "Radiointerview — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Zum Schluss: Wie geht es in Lindenau weiter?"
        },
        {
         "wer": "Frau",
         "text": "Der Stadtrat diskutiert gerade, ob die Zone auf die ganze Altstadt ausgeweitet wird. Entschieden ist noch nichts, die Abstimmung ist für das Frühjahr geplant. Ich persönlich bin vorsichtig optimistisch."
        },
        {
         "wer": "Mann",
         "text": "Dann drücken wir die Daumen. Frau Kessler, vielen Dank für das Gespräch."
        },
        {
         "wer": "Frau",
         "text": "Sehr gern."
        }
       ],
       "satz": "Der Stadtrat hat bereits beschlossen, die autofreie Zone zu vergrößern.",
       "loesung": false,
       "stelle": "Entschieden ist noch nichts",
       "erklaerung": "Es wird nur diskutiert; die Abstimmung kommt erst im Frühjahr."
      }
     ]
    },
    {
     "id": "b2th2s2",
     "titel": "Im Gespräch: Die Vier-Tage-Woche (Sendung „Arbeit und Leben\" auf Radio Nordwelle)",
     "aufgaben": [
      {
       "ort": "Radiointerview — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Willkommen bei „Arbeit und Leben\". Unser Gast ist heute Professor Jonas Bergmann, Arbeitspsychologe an der Hochschule Wendhausen. Herr Bergmann, Sie haben zwei Jahre lang Betriebe begleitet, die die Vier-Tage-Woche eingeführt haben. Wie viele waren das?"
        },
        {
         "wer": "Mann",
         "text": "Angefangen haben wir mit einundvierzig Unternehmen. Bis zum Ende dabei geblieben sind dreiunddreißig. Die anderen sind aus ganz unterschiedlichen Gründen ausgestiegen, zum Beispiel wegen eines Eigentümerwechsels. Mit der Arbeitszeit selbst hatte das in den meisten Fällen nichts zu tun."
        }
       ],
       "satz": "Alle Unternehmen haben bis zum Ende an der Studie teilgenommen.",
       "loesung": false,
       "stelle": "Bis zum Ende dabei geblieben sind dreiunddreißig",
       "erklaerung": "Von einundvierzig sind nur dreiunddreißig bis zum Ende dabei geblieben."
      },
      {
       "ort": "Radiointerview — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was genau bedeutet Vier-Tage-Woche in Ihrer Studie? Arbeiten die Leute dann an vier Tagen jeweils zehn Stunden?"
        },
        {
         "wer": "Mann",
         "text": "Nein, genau das wollten wir nicht untersuchen. In unserem Modell arbeiten die Beschäftigten etwa zweiunddreißig Stunden statt vierzig, bekommen aber weiterhin das volle Gehalt. Die Arbeit wird also nicht einfach auf weniger Tage gepresst. Welcher Tag frei ist, konnten die Teams übrigens selbst festlegen, meistens war es der Freitag."
        }
       ],
       "satz": "In der Studie haben die Beschäftigten weniger Stunden bei gleichem Lohn gearbeitet.",
       "loesung": true,
       "stelle": "bekommen aber weiterhin das volle Gehalt",
       "erklaerung": "Zweiunddreißig statt vierzig Stunden, aber volles Gehalt."
      },
      {
       "ort": "Radiointerview — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und was ist mit der Leistung? Schaffen die Leute in weniger Zeit genauso viel?"
        },
        {
         "wer": "Mann",
         "text": "In den meisten Betrieben ja. Das hat uns selbst überrascht. Allerdings muss ich einschränken: Die Produktivität haben die Unternehmen selbst gemessen, mit ihren eigenen Kennzahlen. Eine unabhängige Kontrolle gab es nicht. Man sollte die Ergebnisse also mit einer gewissen Vorsicht lesen."
        }
       ],
       "satz": "Die Produktivität wurde von unabhängigen Fachleuten überprüft.",
       "loesung": false,
       "stelle": "Eine unabhängige Kontrolle gab es nicht",
       "erklaerung": "Die Firmen haben selbst gemessen; eine unabhängige Kontrolle fehlte."
      },
      {
       "ort": "Radiointerview — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie haben die Betriebe das geschafft?"
        },
        {
         "wer": "Mann",
         "text": "Vor allem durch weniger Besprechungen. Viele Teams haben ihre Meetings auf maximal dreißig Minuten begrenzt und feste Zeiten eingeführt, in denen niemand gestört werden darf. Ein Geschäftsführer hat mir erzählt, dass er erst durch das Experiment gemerkt hat, wie viel Zeit vorher einfach verschwendet wurde."
        }
       ],
       "satz": "Kürzere und seltenere Besprechungen haben geholfen, Zeit zu sparen.",
       "loesung": true,
       "stelle": "Vor allem durch weniger Besprechungen",
       "erklaerung": "Weniger und kürzere Meetings waren der wichtigste Grund."
      },
      {
       "ort": "Radiointerview — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie ging es den Beschäftigten selbst?"
        },
        {
         "wer": "Mann",
         "text": "Fast alle berichten, dass sie sich erholter fühlen und besser schlafen. Die Krankmeldungen sind zwar zurückgegangen, aber nur leicht, und wir wissen nicht, ob das wirklich an der kürzeren Woche lag. In dem Zeitraum gab es zum Beispiel auch eine deutlich schwächere Grippewelle als im Jahr davor."
        }
       ],
       "satz": "Laut Herrn Bergmann ist sicher, dass die Vier-Tage-Woche die Krankmeldungen reduziert hat.",
       "loesung": false,
       "stelle": "wir wissen nicht, ob das wirklich an der kürzeren Woche lag",
       "erklaerung": "Weniger Krankmeldungen ja, aber der Grund ist unklar — vielleicht die schwache Grippewelle."
      },
      {
       "ort": "Radiointerview — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gab es auch Branchen, in denen es nicht funktioniert hat?"
        },
        {
         "wer": "Mann",
         "text": "Ja, besonders dort, wo Menschen direkt vor Ort sein müssen, etwa in der Pflege oder im Einzelhandel. Wenn eine Pflegekraft einen Tag weniger da ist, muss jemand anderes diese Schicht übernehmen. Dafür braucht man zusätzliches Personal, und das ist im Moment kaum zu finden."
        }
       ],
       "satz": "In der Pflege ist die Vier-Tage-Woche schwer umzusetzen, weil Personal fehlt.",
       "loesung": true,
       "stelle": "Dafür braucht man zusätzliches Personal",
       "erklaerung": "Fehlende Schichten müssen andere übernehmen — dafür fehlt Personal."
      },
      {
       "ort": "Radiointerview — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Viele Arbeitgeber fürchten, dass sie die Arbeit dann einfach nicht mehr schaffen. Halten Sie diese Sorge für berechtigt?"
        },
        {
         "wer": "Mann",
         "text": "Ich halte sie für verständlich, aber oft für übertrieben. Interessant ist: Bevor das Experiment begann, waren fast zwei Drittel der Führungskräfte skeptisch. Am Ende wollten die meisten nicht mehr zurück, und einige sind heute die größten Fürsprecher des Modells. Nur in vier Betrieben hat man das alte Modell wieder eingeführt."
        }
       ],
       "satz": "Die meisten Führungskräfte waren schon vor dem Experiment von der Idee überzeugt.",
       "loesung": false,
       "stelle": "waren fast zwei Drittel der Führungskräfte skeptisch",
       "erklaerung": "Vorher waren die meisten skeptisch, überzeugt waren sie erst am Ende."
      },
      {
       "ort": "Radiointerview — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was würden Sie einem Unternehmen raten, das es ausprobieren möchte?"
        },
        {
         "wer": "Mann",
         "text": "Nicht alles auf einmal umstellen. Am besten beginnt man mit einem einzelnen Team und einer klaren Testphase von sechs Monaten. Wichtig ist außerdem, die Beschäftigten von Anfang an mitplanen zu lassen. Wenn die Regeln nur von oben kommen, scheitert es fast immer."
        }
       ],
       "satz": "Herr Bergmann empfiehlt, die Vier-Tage-Woche sofort im ganzen Unternehmen einzuführen.",
       "loesung": false,
       "stelle": "Am besten beginnt man mit einem einzelnen Team",
       "erklaerung": "Er rät zu einem einzelnen Team und einer Testphase, nicht zu allem auf einmal."
      },
      {
       "ort": "Radiointerview — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gibt es auch Nachteile für die Beschäftigten?"
        },
        {
         "wer": "Mann",
         "text": "Durchaus. Manche erleben die vier Tage als sehr dicht, weil kaum noch Zeit für kurze Gespräche oder eine Kaffeepause bleibt. Einige vermissen genau diesen Austausch mit den Kollegen. Man muss also aufpassen, dass die Arbeit nicht zwar kürzer, aber dafür viel anstrengender wird."
        }
       ],
       "satz": "Einige Beschäftigte empfinden die Arbeitstage als intensiver als früher.",
       "loesung": true,
       "stelle": "Manche erleben die vier Tage als sehr dicht",
       "erklaerung": "Die Tage sind „sehr dicht\", es bleibt kaum Zeit für Pausen."
      },
      {
       "ort": "Radiointerview — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Glauben Sie, dass die Vier-Tage-Woche in zehn Jahren Standard sein wird?"
        },
        {
         "wer": "Mann",
         "text": "Für Büroberufe halte ich das für wahrscheinlich, für die ganze Arbeitswelt eher nicht. Ich würde mir aber wünschen, dass mehr Betriebe es zumindest ausprobieren, statt es von vornherein abzulehnen."
        },
        {
         "wer": "Frau",
         "text": "Herr Bergmann, herzlichen Dank."
        },
        {
         "wer": "Mann",
         "text": "Ich danke Ihnen."
        }
       ],
       "satz": "Herr Bergmann erwartet, dass in zehn Jahren alle Branchen nur noch vier Tage arbeiten.",
       "loesung": false,
       "stelle": "für die ganze Arbeitswelt eher nicht",
       "erklaerung": "Nur für Büroberufe hält er es für wahrscheinlich, nicht für alle Branchen."
      }
     ]
    },
    {
     "id": "b2th2s3",
     "titel": "Im Gespräch: Eine App gegen Lebensmittelverschwendung (Sendung „Gründerzeit\" auf Radio Weserland)",
     "aufgaben": [
      {
       "ort": "Radiointerview — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hallo und willkommen bei „Gründerzeit\". Mein Gast heute ist Tarek Wiesner. Er hat die App „Restlos\" entwickelt, mit der Bäckereien, Restaurants und Supermärkte übrig gebliebenes Essen günstig verkaufen können. Herr Wiesner, wie sind Sie auf die Idee gekommen?"
        },
        {
         "wer": "Mann",
         "text": "Während des Studiums habe ich abends in einer Bäckerei gejobbt. Jeden Abend mussten wir säckeweise Brot und Brötchen wegwerfen, die völlig in Ordnung waren. Das hat mich so geärgert, dass ich irgendwann mit zwei Freunden angefangen habe, an einer Lösung zu basteln. Die erste Version der App haben wir übrigens in einer Studentenküche programmiert, ganz ohne Geld von außen."
        }
       ],
       "satz": "Die Idee für die App entstand durch Herrn Wiesners Erfahrungen bei einem Nebenjob.",
       "loesung": true,
       "stelle": "Während des Studiums habe ich abends in einer Bäckerei gejobbt",
       "erklaerung": "In seinem Studentenjob in der Bäckerei sah er, wie viel weggeworfen wurde."
      },
      {
       "ort": "Radiointerview — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie funktioniert die App genau?"
        },
        {
         "wer": "Mann",
         "text": "Die Betriebe stellen am Nachmittag ein, was voraussichtlich übrig bleibt. Kunden reservieren eine Überraschungstüte, meistens für drei bis fünf Euro, und holen sie kurz vor Ladenschluss ab. Was genau in der Tüte ist, weiß man vorher nicht. Das gehört zum Konzept, weil die Läden ja selbst nicht genau wissen, was am Ende übrig bleibt."
        }
       ],
       "satz": "Die Kunden können in der App genau auswählen, welche Produkte sie bekommen.",
       "loesung": false,
       "stelle": "Was genau in der Tüte ist, weiß man vorher nicht",
       "erklaerung": "Es ist eine Überraschungstüte — den Inhalt kennt man vorher nicht."
      },
      {
       "ort": "Radiointerview — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Der Anfang war vermutlich nicht leicht."
        },
        {
         "wer": "Mann",
         "text": "Überhaupt nicht. Wir hatten gehofft, im ersten Jahr zweihundert Partnerbetriebe zu gewinnen. Tatsächlich waren es gerade mal fünfzig. Viele Bäcker hatten Angst, dass Kunden dann nur noch abends kommen und tagsüber nichts mehr zum vollen Preis kaufen."
        }
       ],
       "satz": "Im ersten Jahr hat das Team sein Ziel bei den Partnerbetrieben erreicht.",
       "loesung": false,
       "stelle": "Tatsächlich waren es gerade mal fünfzig",
       "erklaerung": "Geplant waren zweihundert Betriebe, erreicht nur fünfzig."
      },
      {
       "ort": "Radiointerview — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hat sich diese Angst bestätigt?"
        },
        {
         "wer": "Mann",
         "text": "Nein, im Gegenteil. Wir haben gemeinsam mit einer Hochschule Daten ausgewertet. Viele Leute, die zum ersten Mal mit einer Tüte in einen Laden kommen, werden dort später Stammkunden und kaufen auch tagsüber ein. Die App ist für die Betriebe also auch eine Art Werbung."
        }
       ],
       "satz": "Die Betriebe verlieren durch die App Kunden, die sonst tagsüber einkaufen würden.",
       "loesung": false,
       "stelle": "werden dort später Stammkunden und kaufen auch tagsüber ein",
       "erklaerung": "Die Angst hat sich nicht bestätigt: Viele werden Stammkunden."
      },
      {
       "ort": "Radiointerview — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie verdienen Sie eigentlich Geld?"
        },
        {
         "wer": "Mann",
         "text": "Wir bekommen von jedem verkauften Paket eine kleine Gebühr, etwa einen Euro. Der Rest geht an den Betrieb. Für die Kunden ist die App kostenlos. Wir haben lange überlegt, ob wir ein Abo einführen sollen, uns aber dagegen entschieden, weil es junge Leute und Familien mit wenig Geld abschrecken würde."
        }
       ],
       "satz": "Wer die App nutzt, muss dafür ein monatliches Abonnement abschließen.",
       "loesung": false,
       "stelle": "Für die Kunden ist die App kostenlos",
       "erklaerung": "Ein Abo wurde nur überlegt, aber abgelehnt; die App ist kostenlos."
      },
      {
       "ort": "Radiointerview — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Können Sie sagen, wie viel Essen Sie schon gerettet haben?"
        },
        {
         "wer": "Mann",
         "text": "Nach unserer eigenen Rechnung sind es inzwischen etwa vierhunderttausend Mahlzeiten. Ich sage aber ehrlich dazu, dass das eine Schätzung ist. Wir gehen davon aus, dass eine Tüte ungefähr einer Mahlzeit entspricht. Manche Tüten sind natürlich größer, manche kleiner."
        }
       ],
       "satz": "Die Zahl der geretteten Mahlzeiten beruht auf einer Schätzung.",
       "loesung": true,
       "stelle": "dass das eine Schätzung ist",
       "erklaerung": "Er sagt selbst, dass die Zahl geschätzt ist: eine Tüte gleich eine Mahlzeit."
      },
      {
       "ort": "Radiointerview — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Es gibt auch Kritik an Ihrem Modell. Manche sagen, die App löse das Problem nicht, sondern verschiebe es nur."
        },
        {
         "wer": "Mann",
         "text": "Diese Kritik nehme ich ernst. Am besten wäre natürlich, wenn gar nicht erst so viel zu viel produziert würde. Deshalb bieten wir den Betrieben seit Kurzem eine Auswertung an, die zeigt, an welchen Tagen besonders viel übrig bleibt. Damit können sie ihre Mengen besser planen. Wenn am Ende weniger übrig bleibt und wir dadurch weniger verdienen, dann ist das für mich trotzdem ein Erfolg."
        }
       ],
       "satz": "Herr Wiesner weist die Kritik an seiner App als unbegründet zurück.",
       "loesung": false,
       "stelle": "Diese Kritik nehme ich ernst",
       "erklaerung": "Er nimmt die Kritik ernst und reagiert mit einem neuen Angebot."
      },
      {
       "ort": "Radiointerview — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie groß ist Ihr Team heute?"
        },
        {
         "wer": "Mann",
         "text": "Wir sind zweiundzwanzig Leute, die meisten arbeiten in Bremen. Seit diesem Jahr haben wir auch zwei Kolleginnen in Wien, weil wir nach Österreich expandieren. Die Schweiz war ebenfalls im Gespräch, aber das haben wir erst einmal verschoben. Wir wollen lieber langsam und solide wachsen, statt uns zu übernehmen."
        }
       ],
       "satz": "Das Unternehmen ist inzwischen auch in Österreich aktiv.",
       "loesung": true,
       "stelle": "weil wir nach Österreich expandieren",
       "erklaerung": "Es gibt Kolleginnen in Wien; die Schweiz wurde dagegen verschoben."
      },
      {
       "ort": "Radiointerview — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was war der schwierigste Moment in all den Jahren?"
        },
        {
         "wer": "Mann",
         "text": "Das zweite Jahr. Uns ist fast das Geld ausgegangen, und einer meiner Mitgründer ist ausgestiegen, weil er eine sichere Stelle angenommen hat. Ich war damals kurz davor aufzugeben. Gerettet hat uns ein Förderprogramm des Landes, das wir buchstäblich in letzter Minute bekommen haben."
        }
       ],
       "satz": "Im zweiten Jahr hätte Herr Wiesner beinahe aufgegeben.",
       "loesung": true,
       "stelle": "Ich war damals kurz davor aufzugeben",
       "erklaerung": "„Kurz davor aufzugeben\" heißt: beinahe aufgegeben, aber nicht wirklich."
      },
      {
       "ort": "Radiointerview — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Zum Schluss: Was raten Sie jungen Leuten, die selbst gründen möchten?"
        },
        {
         "wer": "Mann",
         "text": "Nicht zu lange planen. Wir haben den ersten Prototyp nach drei Wochen getestet, obwohl er voller Fehler war. Das Feedback der Nutzer war viel wertvoller als jeder Businessplan."
        },
        {
         "wer": "Frau",
         "text": "Herr Wiesner, vielen Dank und weiterhin viel Erfolg."
        },
        {
         "wer": "Mann",
         "text": "Danke schön."
        }
       ],
       "satz": "Herr Wiesner rät Gründern, zuerst einen ausführlichen Businessplan zu schreiben.",
       "loesung": false,
       "stelle": "Das Feedback der Nutzer war viel wertvoller als jeder Businessplan",
       "erklaerung": "Er rät, früh zu testen; Nutzer-Feedback ist ihm wichtiger als ein Businessplan."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "durchsage",
   "name": "Hörverstehen: Durchsagen",
   "kurz": "Fünf kurze Durchsagen — nur EINMAL hören",
   "was": "Du hörst fünf kurze Durchsagen und Ansagen. Zu jeder eine Aussage: richtig oder falsch?",
   "tipp": "Ein Detail entscheidet: Uhrzeit, Ort, Bedingung. Oft wird eine Angabe im selben Satz korrigiert.",
   "zeichen": "📢",
   "farbe": "rot",
   "punkte": 5,
   "mal": 1,
   "runden": [
    {
     "id": "b2th3s1",
     "titel": "Fünf Durchsagen",
     "aufgaben": [
      {
       "von": "Durchsage am Flughafen",
       "wer": "Frau",
       "text": "Sehr geehrte Fluggäste des Fluges nach Valbonne, bitte beachten Sie: Der Abflug verschiebt sich wegen eines technischen Problems um etwa fünfundvierzig Minuten. Das Boarding beginnt nicht wie angegeben an Ausgang zweiundzwanzig, sondern an Ausgang achtundzwanzig. Fluggäste mit Anschlussflügen wenden sich bitte an den Schalter unserer Fluggesellschaft im Bereich B. Wir bitten um Ihr Verständnis.",
       "satz": "Das Boarding findet an Ausgang zweiundzwanzig statt.",
       "loesung": false,
       "stelle": "sondern an Ausgang achtundzwanzig",
       "erklaerung": "Ausgang zweiundzwanzig war geplant. Neu ist Ausgang achtundzwanzig."
      },
      {
       "von": "Ansage im Museum",
       "wer": "Mann",
       "text": "Liebe Besucher, wir möchten Sie darauf hinweisen, dass das Museum heute bereits um siebzehn Uhr schließt. Die Kasse schließt eine halbe Stunde früher. Die Sonderausstellung im zweiten Stock ist wegen Umbauarbeiten bis Freitag geschlossen. Die Dauerausstellung im Erdgeschoss und im ersten Stock können Sie wie gewohnt besuchen. Wir wünschen Ihnen einen schönen Aufenthalt.",
       "satz": "Eintrittskarten kann man heute bis siebzehn Uhr kaufen.",
       "loesung": false,
       "stelle": "Die Kasse schließt eine halbe Stunde früher.",
       "erklaerung": "Das Museum schließt um siebzehn Uhr, die Kasse schon eine halbe Stunde vorher."
      },
      {
       "von": "Bandansage einer Behörde",
       "wer": "Frau",
       "text": "Willkommen beim Bürgeramt Hagenstein. Leider sind zurzeit alle Mitarbeiter im Gespräch. Für die Verlängerung von Ausweisen und Pässen benötigen Sie einen Termin, den Sie bequem über unsere Internetseite buchen können. Anmeldungen einer neuen Wohnung sind dagegen auch ohne Termin möglich, und zwar dienstags und donnerstags von acht bis zwölf Uhr. Bitte bleiben Sie in der Leitung oder rufen Sie später wieder an.",
       "satz": "Eine neue Wohnung kann man ohne Termin anmelden.",
       "loesung": true,
       "stelle": "Anmeldungen einer neuen Wohnung sind dagegen auch ohne Termin möglich",
       "erklaerung": "„dagegen\" stellt den Gegensatz zu den Ausweisen her: Für die Anmeldung braucht man keinen Termin."
      },
      {
       "von": "Verkehrsfunk im Radio",
       "wer": "Mann",
       "text": "Und nun die Verkehrslage. Auf der Autobahn zwischen Felsberg und Haldenau gibt es nach einem Unfall einen Stau von etwa acht Kilometern. Die Unfallstelle ist inzwischen geräumt, der Stau löst sich aber nur langsam auf. Wer kann, sollte über die Bundesstraße ausweichen. In der Gegenrichtung läuft der Verkehr ohne Behinderungen.",
       "satz": "Die Unfallstelle ist noch gesperrt.",
       "loesung": false,
       "stelle": "Die Unfallstelle ist inzwischen geräumt",
       "erklaerung": "Die Stelle ist schon frei. Der Stau besteht nur noch, weil er sich langsam auflöst."
      },
      {
       "von": "Durchsage im Kaufhaus",
       "wer": "Frau",
       "text": "Liebe Kunden, nur noch heute erhalten Sie in unserer Haushaltsabteilung im dritten Obergeschoss zwanzig Prozent Rabatt auf alle Küchengeräte. Ausgenommen sind bereits reduzierte Artikel. Kunden mit unserer Kundenkarte bekommen zusätzlich einen Gutschein über zehn Euro für den nächsten Einkauf. Wir freuen uns auf Ihren Besuch.",
       "satz": "Der Rabatt gilt auch für Artikel, die schon reduziert sind.",
       "loesung": false,
       "stelle": "Ausgenommen sind bereits reduzierte Artikel.",
       "erklaerung": "„Ausgenommen\" heißt: Für diese Artikel gilt der Rabatt nicht."
      }
     ]
    },
    {
     "id": "b2th3s2",
     "titel": "Fünf Durchsagen",
     "aufgaben": [
      {
       "von": "Durchsage im Bahnhof",
       "wer": "Mann",
       "text": "Information zum Intercity nach Seedorf, planmäßige Abfahrt sechzehn Uhr zwölf. Der Zug wird heute in umgekehrter Wagenreihung bereitgestellt. Die Wagen der ersten Klasse halten also im Abschnitt E. Außerdem fällt das Bordrestaurant heute leider aus. Getränke und kleine Speisen erhalten Sie am Platz. Wir wünschen Ihnen eine angenehme Reise.",
       "satz": "Im Zug kann man heute nichts zu essen bekommen.",
       "loesung": false,
       "stelle": "Getränke und kleine Speisen erhalten Sie am Platz.",
       "erklaerung": "Nur das Bordrestaurant fällt aus. Snacks gibt es trotzdem am Platz."
      },
      {
       "von": "Ansage auf einer Messe",
       "wer": "Frau",
       "text": "Liebe Messebesucher, wir weisen darauf hin, dass der Vortrag zum Thema Wohnen im Alter nicht wie im Programm angegeben in Halle drei stattfindet, sondern im Konferenzraum im Eingangsbereich. Beginn ist unverändert um vierzehn Uhr. Die Teilnahme ist kostenlos, die Zahl der Plätze ist allerdings begrenzt. Wir empfehlen daher, rechtzeitig zu kommen.",
       "satz": "Der Vortrag beginnt später als im Programm angegeben.",
       "loesung": false,
       "stelle": "Beginn ist unverändert um vierzehn Uhr.",
       "erklaerung": "Geändert hat sich nur der Raum, nicht die Uhrzeit."
      },
      {
       "von": "Anrufbeantworter einer Werkstatt",
       "wer": "Mann",
       "text": "Guten Tag, hier ist die Autowerkstatt Brandt. Wir sind gerade nicht erreichbar. Unsere Werkstatt ist montags bis freitags von sieben bis achtzehn Uhr geöffnet, samstags nur für Reifenwechsel von acht bis zwölf Uhr. Bei einer Panne erreichen Sie unseren Abschleppdienst rund um die Uhr unter der Nummer auf unserer Internetseite. Hinterlassen Sie gern eine Nachricht, wir rufen zurück.",
       "satz": "Samstags kann man in der Werkstatt nur die Reifen wechseln lassen.",
       "loesung": true,
       "stelle": "samstags nur für Reifenwechsel von acht bis zwölf Uhr",
       "erklaerung": "„nur für Reifenwechsel\" schränkt das Angebot am Samstag ein."
      },
      {
       "von": "Durchsage am Flughafen",
       "wer": "Frau",
       "text": "Wir bitten den Fluggast Herrn Daniel Okafor, gebucht auf den Flug nach Porto Lino, sich umgehend an Ausgang vierzehn zu melden. Das Boarding ist bereits abgeschlossen. Sollte sich der Fluggast nicht innerhalb der nächsten fünf Minuten melden, wird sein Gepäck wieder ausgeladen.",
       "satz": "Das Flugzeug wartet noch fünf Minuten, bevor das Gepäck des Fluggastes ausgeladen wird.",
       "loesung": true,
       "stelle": "nicht innerhalb der nächsten fünf Minuten melden",
       "erklaerung": "Er hat noch fünf Minuten Zeit, sonst wird sein Gepäck ausgeladen."
      },
      {
       "von": "Wetter und Verkehr im Radio",
       "wer": "Mann",
       "text": "Achtung Autofahrer im Bergland: Wegen Schneefalls ist der Pass bei Hohenried für Fahrzeuge ohne Winterreifen gesperrt. Für alle anderen gilt Schrittgeschwindigkeit. Der Winterdienst ist im Einsatz. Im Flachland bleibt es dagegen bei Regen und Temperaturen um vier Grad trocken auf den Straßen, Glätte ist dort nicht zu erwarten.",
       "satz": "Der Pass bei Hohenried ist für alle Fahrzeuge gesperrt.",
       "loesung": false,
       "stelle": "für Fahrzeuge ohne Winterreifen gesperrt",
       "erklaerung": "Gesperrt nur für Autos ohne Winterreifen. Die anderen dürfen langsam fahren."
      }
     ]
    },
    {
     "id": "b2th3s3",
     "titel": "Fünf Durchsagen",
     "aufgaben": [
      {
       "von": "Ansage im Schwimmbad",
       "wer": "Frau",
       "text": "Liebe Badegäste, wegen einer Schulveranstaltung ist das Sportbecken heute von zehn bis zwölf Uhr für den öffentlichen Badebetrieb gesperrt. Das Nichtschwimmerbecken und die Sauna stehen Ihnen in dieser Zeit wie gewohnt zur Verfügung. Ab zwölf Uhr ist das Sportbecken wieder geöffnet. Wir danken für Ihr Verständnis.",
       "satz": "Die Sauna ist am Vormittag geschlossen.",
       "loesung": false,
       "stelle": "Das Nichtschwimmerbecken und die Sauna stehen Ihnen in dieser Zeit wie gewohnt zur Verfügung.",
       "erklaerung": "Gesperrt ist nur das Sportbecken. Die Sauna ist normal geöffnet."
      },
      {
       "von": "Bandansage einer Krankenkasse",
       "wer": "Mann",
       "text": "Herzlich willkommen bei der Gesundheitskasse Mitte. Wenn Sie Fragen zu Ihrem Beitrag haben, drücken Sie bitte die Eins. Für Krankmeldungen und Krankengeld drücken Sie die Zwei. Bitte beachten Sie: Krankmeldungen müssen Sie uns nicht mehr per Post schicken, Ihre Arztpraxis übermittelt diese inzwischen automatisch. Für alle anderen Anliegen bleiben Sie bitte in der Leitung.",
       "satz": "Versicherte müssen ihre Krankmeldung nicht mehr selbst an die Kasse schicken.",
       "loesung": true,
       "stelle": "Ihre Arztpraxis übermittelt diese inzwischen automatisch",
       "erklaerung": "Die Praxis schickt die Krankmeldung automatisch, man muss sie nicht mehr per Post senden."
      },
      {
       "von": "Durchsage im Bahnhof",
       "wer": "Frau",
       "text": "Bitte beachten Sie: Wegen einer Störung im Stellwerk kommt es auf der Strecke nach Altenkirch zu Verspätungen von bis zu dreißig Minuten. Die Regionalbahn um zehn Uhr fünf fällt aus. Fahrgäste nutzen bitte den Ersatzbus, der vor dem Haupteingang abfährt. Fahrkarten der Bahn gelten auch im Bus.",
       "satz": "Für den Ersatzbus braucht man eine zusätzliche Fahrkarte.",
       "loesung": false,
       "stelle": "Fahrkarten der Bahn gelten auch im Bus.",
       "erklaerung": "Die Bahnfahrkarte reicht. Ein extra Ticket ist nicht nötig."
      },
      {
       "von": "Ansage in einem Kaufhaus",
       "wer": "Mann",
       "text": "Ein kleiner Junge namens Leon, etwa fünf Jahre alt, mit roter Jacke, wartet an unserer Information im Erdgeschoss auf seine Eltern. Die Eltern werden gebeten, ihn dort abzuholen. Leon geht es gut, er bekommt gerade ein Eis.",
       "satz": "Der Junge wartet im Erdgeschoss.",
       "loesung": true,
       "stelle": "wartet an unserer Information im Erdgeschoss",
       "erklaerung": "Die Information im Erdgeschoss ist der Treffpunkt."
      },
      {
       "von": "Ansage im Theater",
       "wer": "Frau",
       "text": "Sehr geehrtes Publikum, die heutige Vorstellung dauert etwa drei Stunden, mit einer Pause von zwanzig Minuten. Bitte schalten Sie Ihre Mobiltelefone aus. Fotografieren ist nur beim Schlussapplaus erlaubt, und zwar ohne Blitz. Wer zu spät kommt, kann erst nach der Pause in den Saal.",
       "satz": "Man darf während der Vorstellung ohne Blitz fotografieren.",
       "loesung": false,
       "stelle": "Fotografieren ist nur beim Schlussapplaus erlaubt",
       "erklaerung": "Fotos nur beim Schlussapplaus — nicht während des Stücks."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb2hl1",
   "titel": "Prüfungslauf 1",
   "minuten": 20,
   "teile": [
    {
     "nr": 1,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Nachricht 1 — Wohnen",
       "wer": "Frau",
       "text": "Die Stadt Löwenau will mehr bezahlbaren Wohnraum schaffen. Der Stadtrat hat beschlossen, dass bei allen größeren Neubauprojekten künftig mindestens ein Drittel der Wohnungen als Sozialwohnungen gebaut werden muss. Bauunternehmen kritisieren die Regel. Sie befürchten, dass sich viele Projekte dann nicht mehr lohnen. Der Mieterverein dagegen spricht von einem längst überfälligen Schritt.",
       "satz": "Bei großen Bauprojekten in Löwenau muss künftig ein Teil der Wohnungen günstig vermietet werden.",
       "loesung": true,
       "stelle": "mindestens ein Drittel der Wohnungen als Sozialwohnungen gebaut werden muss",
       "erklaerung": "Das ist der Beschluss. Die Kritik der Bauunternehmen ist eine Reaktion darauf."
      },
      {
       "von": "Nachricht 2 — Wirtschaft",
       "wer": "Mann",
       "text": "Der Flughafen Mittelried hat im vergangenen Jahr weniger Passagiere abgefertigt als erwartet. Statt der geplanten zwei Millionen Fluggäste waren es nur knapp eins Komma fünf Millionen. Als Grund nennt die Flughafengesellschaft den Rückzug einer großen Fluggesellschaft im Frühjahr. Für das laufende Jahr sei man aber optimistisch, da zwei neue Verbindungen in Urlaubsregionen hinzukommen.",
       "satz": "Der Flughafen Mittelried hat sein Ziel bei den Passagierzahlen erreicht.",
       "loesung": false,
       "stelle": "Statt der geplanten zwei Millionen Fluggäste waren es nur knapp eins Komma fünf Millionen.",
       "erklaerung": "Geplant waren zwei Millionen, gekommen sind nur etwa anderthalb Millionen."
      },
      {
       "von": "Nachricht 3 — Digitales",
       "wer": "Frau",
       "text": "Die Stadtverwaltung von Hollbeck war gestern mehrere Stunden lang nicht erreichbar. Grund war ein Hackerangriff auf das Computersystem. Nach Angaben der Stadt wurden dabei keine persönlichen Daten von Bürgern gestohlen. Termine im Bürgeramt mussten allerdings abgesagt werden. Sie sollen in den nächsten Tagen nachgeholt werden. Die Polizei hat Ermittlungen aufgenommen.",
       "satz": "Bei dem Angriff auf die Stadtverwaltung wurden Daten von Bürgern gestohlen.",
       "loesung": false,
       "stelle": "wurden dabei keine persönlichen Daten von Bürgern gestohlen",
       "erklaerung": "Es gab einen Angriff, aber keine Daten wurden gestohlen. Nur Termine fielen aus."
      },
      {
       "von": "Nachricht 4 — Kultur",
       "wer": "Mann",
       "text": "Die Stadtbibliothek Weidental öffnet ab Oktober auch sonntags. Möglich macht das ein neues System, bei dem Besucher sich mit ihrem Bibliotheksausweis selbst Zugang verschaffen und Bücher ausleihen können. Personal ist sonntags nicht vor Ort, die Räume werden aber per Kamera überwacht. In anderen Städten hat sich das Modell bereits bewährt, vor allem Familien und Berufstätige nutzen das Angebot.",
       "satz": "Die Bibliothek ist künftig auch am Sonntag geöffnet, aber ohne Personal.",
       "loesung": true,
       "stelle": "Personal ist sonntags nicht vor Ort",
       "erklaerung": "Sonntags öffnen mit Selbstbedienung per Ausweis — ohne Mitarbeiter vor Ort."
      },
      {
       "von": "Nachricht 5 — Sport",
       "wer": "Frau",
       "text": "Die Basketballerinnen des TSV Ahlsdorf stehen zum ersten Mal in ihrer Vereinsgeschichte im Pokalfinale. Im Halbfinale setzten sie sich gestern Abend knapp mit zwei Punkten gegen den Favoriten aus Brückstadt durch. Das Finale findet in drei Wochen in der Landeshauptstadt statt. Der Verein organisiert für seine Fans Busse, die Karten sind aber bereits fast ausverkauft.",
       "satz": "Die Mannschaft aus Ahlsdorf hat das Pokalfinale gewonnen.",
       "loesung": false,
       "stelle": "Das Finale findet in drei Wochen in der Landeshauptstadt statt.",
       "erklaerung": "Gewonnen wurde das Halbfinale. Das Finale kommt erst noch."
      }
     ]
    },
    {
     "nr": 2,
     "art": "interview",
     "aufgaben": [
      {
       "ort": "Radiointerview — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Willkommen bei „Gesund im Alltag\". Heute geht es um Schlaf, genauer gesagt um Schlafmangel bei Jugendlichen. Mein Gast ist Doktor Lena Hofstetter, Kinder- und Jugendärztin mit einer Schlafsprechstunde. Frau Hofstetter, wie viel Schlaf brauchen Jugendliche eigentlich?"
        },
        {
         "wer": "Frau",
         "text": "Zwischen acht und zehn Stunden pro Nacht. Das überrascht viele Eltern, weil sie glauben, dass Teenager weniger Schlaf brauchen als kleine Kinder. In Wirklichkeit liegt der Bedarf nur wenig unter dem von Grundschulkindern."
        }
       ],
       "satz": "Jugendliche brauchen deutlich weniger Schlaf als kleine Kinder.",
       "loesung": false,
       "stelle": "liegt der Bedarf nur wenig unter dem von Grundschulkindern",
       "erklaerung": "Das glauben viele Eltern — tatsächlich brauchen Jugendliche fast genauso viel Schlaf."
      },
      {
       "ort": "Radiointerview — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und wie viel schlafen sie tatsächlich?"
        },
        {
         "wer": "Frau",
         "text": "An Schultagen im Durchschnitt etwa sieben Stunden, viele auch deutlich weniger. Am Wochenende versuchen sie dann nachzuholen und schlafen bis mittags. Das hilft aber nur begrenzt, denn dadurch gerät der innere Rhythmus noch mehr durcheinander, und der Sonntagabend wird zum Problem. Fachleute sprechen in diesem Zusammenhang manchmal von einem sozialen Jetlag, also von einer Zeitverschiebung ohne Reise."
        }
       ],
       "satz": "Langes Ausschlafen am Wochenende löst das Schlafproblem laut Frau Hofstetter nicht.",
       "loesung": true,
       "stelle": "Das hilft aber nur begrenzt",
       "erklaerung": "Ausschlafen hilft nur begrenzt und bringt den Rhythmus durcheinander."
      },
      {
       "ort": "Radiointerview — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Viele denken sofort an Handys. Sind die Smartphones schuld?"
        },
        {
         "wer": "Frau",
         "text": "Sie sind ein Faktor, aber nicht der einzige. Wichtiger ist etwas Biologisches: In der Pubertät verschiebt sich die innere Uhr nach hinten. Jugendliche werden einfach später müde, oft erst gegen dreiundzwanzig Uhr. Das Handy verstärkt diese Entwicklung, verursacht sie aber nicht."
        }
       ],
       "satz": "Laut Frau Hofstetter ist das Smartphone die Hauptursache für den Schlafmangel.",
       "loesung": false,
       "stelle": "Das Handy verstärkt diese Entwicklung, verursacht sie aber nicht",
       "erklaerung": "Hauptursache ist die biologisch verschobene innere Uhr; das Handy verstärkt nur."
      },
      {
       "ort": "Radiointerview — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was bedeutet das für den Schulalltag?"
        },
        {
         "wer": "Frau",
         "text": "Wenn ein Jugendlicher erst um dreiundzwanzig Uhr einschläft und um sechs Uhr aufstehen muss, fehlen ihm jeden Tag ein bis zwei Stunden. Die Folgen sieht man in der Schule: Konzentrationsprobleme, schlechte Laune, mehr Fehlzeiten. Studien zeigen außerdem, dass das Unfallrisiko auf dem Schulweg steigt, vor allem bei Jugendlichen, die schon mit dem Roller oder dem Auto unterwegs sind."
        }
       ],
       "satz": "Schlafmangel kann sich negativ auf die Konzentration in der Schule auswirken.",
       "loesung": true,
       "stelle": "Die Folgen sieht man in der Schule: Konzentrationsprobleme",
       "erklaerung": "Konzentrationsprobleme werden als direkte Folge genannt."
      },
      {
       "ort": "Radiointerview — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Es gibt die Forderung, die Schule später beginnen zu lassen. Was halten Sie davon?"
        },
        {
         "wer": "Frau",
         "text": "Aus medizinischer Sicht wäre das sinnvoll. Ein Gymnasium in unserer Region hat es ausprobiert und den Unterricht für die Oberstufe auf neun Uhr verlegt. Die Schüler haben im Schnitt fast eine Stunde länger geschlafen. Allerdings wurde das Projekt nach einem Jahr wieder beendet, weil die Busverbindungen nicht dazu passten."
        }
       ],
       "satz": "Das Gymnasium beginnt für die Oberstufe auch heute noch um neun Uhr.",
       "loesung": false,
       "stelle": "wurde das Projekt nach einem Jahr wieder beendet",
       "erklaerung": "Der spätere Beginn wurde nach einem Jahr wegen der Busse wieder abgeschafft."
      },
      {
       "ort": "Radiointerview — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was können Eltern konkret tun?"
        },
        {
         "wer": "Frau",
         "text": "Verbote bringen bei Sechzehnjährigen wenig. Besser funktionieren gemeinsame Regeln, zum Beispiel dass alle Handys der Familie nachts in der Küche liegen, auch die der Eltern. Wenn die Eltern selbst bis Mitternacht am Bildschirm sitzen, ist es schwer, von den Kindern etwas anderes zu verlangen. Kinder lernen nun einmal viel mehr durch das Vorbild als durch Ermahnungen."
        }
       ],
       "satz": "Frau Hofstetter empfiehlt Regeln, die auch für die Eltern gelten.",
       "loesung": true,
       "stelle": "auch die der Eltern",
       "erklaerung": "Alle Handys der Familie in die Küche — auch die der Eltern."
      },
      {
       "ort": "Radiointerview — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Kommen viele Jugendliche in Ihre Schlafsprechstunde?"
        },
        {
         "wer": "Frau",
         "text": "Es werden mehr. Als ich vor sechs Jahren angefangen habe, hatte ich etwa zwei jugendliche Patienten im Monat. Heute sind es mindestens zehn. Ich glaube aber nicht unbedingt, dass die Probleme häufiger geworden sind. Die Eltern sind heute einfach aufmerksamer und nehmen das Thema ernster."
        }
       ],
       "satz": "Frau Hofstetter ist überzeugt, dass Schlafprobleme bei Jugendlichen heute häufiger sind als früher.",
       "loesung": false,
       "stelle": "Ich glaube aber nicht unbedingt, dass die Probleme häufiger geworden sind",
       "erklaerung": "Mehr Patienten ja, aber sie erklärt es mit aufmerksameren Eltern."
      },
      {
       "ort": "Radiointerview — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Verschreiben Sie dann auch Schlafmittel?"
        },
        {
         "wer": "Frau",
         "text": "Nur in absoluten Ausnahmefällen. Bei den allermeisten Jugendlichen reicht es, den Tagesablauf zu verändern: morgens möglichst schnell ins Tageslicht, tagsüber Bewegung, abends gedämpftes Licht. Viele Eltern sind enttäuscht, weil sie sich eine Tablette gewünscht hätten, aber die Erfolge geben uns recht."
        }
       ],
       "satz": "Frau Hofstetter behandelt Schlafprobleme bei Jugendlichen meistens mit Medikamenten.",
       "loesung": false,
       "stelle": "Nur in absoluten Ausnahmefällen",
       "erklaerung": "Medikamente gibt es nur ausnahmsweise; meist reicht ein anderer Tagesablauf."
      },
      {
       "ort": "Radiointerview — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Sie haben das Tageslicht erwähnt. Warum ist das so wichtig?"
        },
        {
         "wer": "Frau",
         "text": "Licht am Morgen stellt die innere Uhr nach vorne. Wer morgens zu Fuß oder mit dem Rad zur Schule fährt, wird abends früher müde. Wer dagegen im dunklen Auto gebracht wird und im Klassenzimmer bei Kunstlicht sitzt, bekommt dieses Signal kaum. Ein Spaziergang von zwanzig Minuten kann schon viel bewirken."
        }
       ],
       "satz": "Wer morgens draußen unterwegs ist, wird abends leichter müde.",
       "loesung": true,
       "stelle": "wird abends früher müde",
       "erklaerung": "Morgenlicht stellt die innere Uhr vor — man wird abends früher müde."
      },
      {
       "ort": "Radiointerview — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ihr wichtigster Tipp zum Schluss?"
        },
        {
         "wer": "Frau",
         "text": "Schlaf nicht als verlorene Zeit sehen. Gerade vor Prüfungen lernen viele Jugendliche bis tief in die Nacht. Dabei wird das Gelernte erst im Schlaf richtig gespeichert. Wer ausgeschlafen in die Prüfung geht, ist meistens besser als jemand, der die ganze Nacht gelernt hat."
        },
        {
         "wer": "Mann",
         "text": "Ein schönes Schlusswort. Frau Hofstetter, danke."
        }
       ],
       "satz": "Frau Hofstetter rät, vor Prüfungen lieber länger zu lernen als zu schlafen.",
       "loesung": false,
       "stelle": "Dabei wird das Gelernte erst im Schlaf richtig gespeichert",
       "erklaerung": "Sie rät zum Gegenteil: Schlaf speichert das Gelernte."
      }
     ]
    },
    {
     "nr": 3,
     "art": "durchsage",
     "aufgaben": [
      {
       "von": "Verkehrsfunk im Radio",
       "wer": "Mann",
       "text": "Wegen einer Großveranstaltung im Stadion ist die Innenstadt von Bramstedt heute ab sechzehn Uhr stark belastet. Die Polizei empfiehlt, mit öffentlichen Verkehrsmitteln anzureisen. Die Straßenbahnlinien fahren ab dem Nachmittag im Fünf-Minuten-Takt. Die Parkhäuser am Stadion sind bereits seit dem Mittag voll belegt.",
       "satz": "Am Stadion kann man noch einen Parkplatz finden.",
       "loesung": false,
       "stelle": "Die Parkhäuser am Stadion sind bereits seit dem Mittag voll belegt.",
       "erklaerung": "Die Parkhäuser sind schon voll. Darum soll man mit Bus und Bahn kommen."
      },
      {
       "von": "Bandansage einer Behörde",
       "wer": "Frau",
       "text": "Sie sind verbunden mit der Ausländerbehörde des Kreises Hollen. Bitte beachten Sie, dass unsere Behörde vom zweiundzwanzigsten Dezember bis zum zweiten Januar geschlossen ist. Bereits vereinbarte Termine in diesem Zeitraum werden automatisch verschoben, Sie erhalten dazu ein Schreiben per Post. Ihre Aufenthaltserlaubnis bleibt in dieser Zeit selbstverständlich gültig.",
       "satz": "Wer in diesem Zeitraum einen Termin hat, muss sich selbst um einen neuen Termin kümmern.",
       "loesung": false,
       "stelle": "werden automatisch verschoben, Sie erhalten dazu ein Schreiben per Post",
       "erklaerung": "Die Behörde verschiebt die Termine selbst und informiert per Post."
      },
      {
       "von": "Ansage im Museum",
       "wer": "Mann",
       "text": "Liebe Gäste, in zehn Minuten beginnt im Foyer eine kostenlose Führung durch unsere Ausstellung zur Geschichte der Seefahrt. Die Führung dauert etwa eine Stunde. Eine Anmeldung ist nicht nötig. Für Familien mit Kindern bieten wir um fünfzehn Uhr zusätzlich eine kürzere Führung an, bei der die Kinder selbst Knoten knüpfen dürfen.",
       "satz": "Für die erste Führung muss man sich nicht anmelden.",
       "loesung": true,
       "stelle": "Eine Anmeldung ist nicht nötig.",
       "erklaerung": "Die Führung ist kostenlos und ohne Anmeldung."
      },
      {
       "von": "Durchsage auf einer Messe",
       "wer": "Frau",
       "text": "Liebe Aussteller und Besucher, die Messe schließt heute in dreißig Minuten. Die Hallen eins bis vier werden bereits um achtzehn Uhr geschlossen, Halle fünf bleibt wegen einer Abendveranstaltung bis zweiundzwanzig Uhr geöffnet. Die Shuttlebusse zum Bahnhof fahren bis zwanzig Uhr alle zehn Minuten.",
       "satz": "Halle fünf ist am Abend länger geöffnet als die anderen Hallen.",
       "loesung": true,
       "stelle": "Halle fünf bleibt wegen einer Abendveranstaltung bis zweiundzwanzig Uhr geöffnet",
       "erklaerung": "Die anderen Hallen schließen um achtzehn Uhr, Halle fünf erst um zweiundzwanzig Uhr."
      },
      {
       "von": "Durchsage am Flughafen",
       "wer": "Mann",
       "text": "Sehr geehrte Fluggäste, bitte beachten Sie, dass Flüssigkeiten im Handgepäck nur in Behältern bis hundert Milliliter erlaubt sind. Die Behälter müssen in einem durchsichtigen, wiederverschließbaren Beutel verpackt sein. Ausgenommen sind Babynahrung und Medikamente, die Sie während des Fluges benötigen.",
       "satz": "Medikamente für den Flug dürfen auch in größeren Behältern mitgenommen werden.",
       "loesung": true,
       "stelle": "Ausgenommen sind Babynahrung und Medikamente",
       "erklaerung": "„Ausgenommen\" heißt hier: Für diese Dinge gilt die Grenze von hundert Millilitern nicht."
      }
     ]
    }
   ]
  },
  {
   "id": "tb2hl2",
   "titel": "Prüfungslauf 2",
   "minuten": 20,
   "teile": [
    {
     "nr": 1,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Nachricht 1 — Umwelt",
       "wer": "Mann",
       "text": "Die Stadtwerke von Feldkirchen bauen auf dem Gelände einer ehemaligen Mülldeponie einen großen Solarpark. Die Anlage soll ab dem nächsten Sommer Strom für rund dreitausend Haushalte liefern. Weil die Fläche ohnehin nicht bebaut werden darf, gehen dadurch keine Wiesen oder Äcker verloren. Bürger können sich mit kleinen Beträgen an dem Projekt beteiligen und erhalten dafür eine jährliche Verzinsung.",
       "satz": "Für den Solarpark in Feldkirchen werden keine landwirtschaftlichen Flächen genutzt.",
       "loesung": true,
       "stelle": "gehen dadurch keine Wiesen oder Äcker verloren",
       "erklaerung": "Der Park entsteht auf einer alten Deponie, also nicht auf Wiesen oder Äckern."
      },
      {
       "von": "Nachricht 2 — Arbeit",
       "wer": "Frau",
       "text": "Bei der Versicherung Nordwerk in Kastell sollen in den nächsten Jahren rund dreihundert Stellen wegfallen. Betriebsbedingte Kündigungen soll es nach Angaben des Unternehmens aber nicht geben. Stattdessen werden frei werdende Stellen nicht neu besetzt, und älteren Mitarbeitern wird ein früherer Ruhestand angeboten. Der Betriebsrat will die Pläne in den nächsten Wochen genau prüfen und hat bereits Gespräche mit der Geschäftsleitung angekündigt.",
       "satz": "Die Versicherung will dreihundert Mitarbeitern kündigen.",
       "loesung": false,
       "stelle": "Betriebsbedingte Kündigungen soll es nach Angaben des Unternehmens aber nicht geben.",
       "erklaerung": "Stellen fallen weg, aber ohne Kündigungen — über Ruhestand und nicht besetzte Stellen."
      },
      {
       "von": "Nachricht 3 — Gesundheit",
       "wer": "Mann",
       "text": "Im Landkreis Ostheide gibt es ab sofort einen Bereitschaftsdienst per Videosprechstunde. Wer abends oder am Wochenende krank wird, kann sich über eine Telefonnummer melden und wird dann mit einem Arzt verbunden. Der Arzt entscheidet, ob ein Besuch in der Notaufnahme nötig ist. So sollen die Notaufnahmen der Krankenhäuser entlastet werden, die zuletzt besonders an Wochenenden oft überfüllt waren. Das Angebot ist für Versicherte kostenlos.",
       "satz": "Das neue Angebot soll die Notaufnahmen der Krankenhäuser entlasten.",
       "loesung": true,
       "stelle": "So sollen die Notaufnahmen der Krankenhäuser entlastet werden",
       "erklaerung": "Das Ziel der Videosprechstunde wird am Ende genannt: weniger Andrang in den Notaufnahmen."
      },
      {
       "von": "Nachricht 4 — Verkehr",
       "wer": "Frau",
       "text": "Der Bahnhof von Lindhorst wird barrierefrei. Bis Ende des nächsten Jahres sollen alle Bahnsteige mit Aufzügen ausgestattet und die Bahnsteigkanten erhöht werden. Während der Bauarbeiten halten die Regionalzüge weiterhin, allerdings kann es zu kurzfristigen Gleiswechseln kommen. Rollstuhlfahrer werden gebeten, sich vor der Reise beim Mobilitätsservice zu melden. Die Kosten von rund zwölf Millionen Euro tragen Bund und Land gemeinsam.",
       "satz": "Während der Bauarbeiten halten in Lindhorst keine Züge.",
       "loesung": false,
       "stelle": "halten die Regionalzüge weiterhin",
       "erklaerung": "Die Züge halten weiter. Es kann nur Gleiswechsel geben."
      },
      {
       "von": "Nachricht 5 — Wissenschaft",
       "wer": "Mann",
       "text": "Wer regelmäßig ein Musikinstrument spielt, bleibt im Alter geistig länger fit. Zu diesem Ergebnis kommt eine Langzeitstudie der Hochschule Rabenau, an der über tausend Menschen teilgenommen haben. Besonders deutlich war der Effekt bei Personen, die erst nach dem fünfzigsten Lebensjahr mit dem Musizieren begonnen hatten. Die Forscher sagen: Für den Einstieg ist es nie zu spät.",
       "satz": "Laut der Studie profitieren auch Menschen, die erst spät ein Instrument lernen.",
       "loesung": true,
       "stelle": "Für den Einstieg ist es nie zu spät.",
       "erklaerung": "Der Effekt war sogar bei späten Einsteigern besonders deutlich."
      }
     ]
    },
    {
     "nr": 2,
     "art": "interview",
     "aufgaben": [
      {
       "ort": "Radiointerview — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Tag und willkommen bei „Zeitfragen\". Bei mir ist Renate Oberhuber, die Leiterin der Volkshochschule Kaltenbach. Frau Oberhuber, Ihre Kurse für Menschen über sechzig sind ständig ausgebucht. War das schon immer so?"
        },
        {
         "wer": "Frau",
         "text": "Keineswegs. Vor zehn Jahren hatten wir in dieser Altersgruppe vor allem Gymnastik und Malkurse, und auch die waren oft nur halb voll. Der große Andrang kam erst in den letzten fünf, sechs Jahren, als wir das Programm grundlegend verändert haben."
        }
       ],
       "satz": "Die Kurse für ältere Menschen waren schon immer sehr gefragt.",
       "loesung": false,
       "stelle": "Der große Andrang kam erst in den letzten fünf, sechs Jahren",
       "erklaerung": "Früher waren die Kurse oft halb voll; die Nachfrage ist erst in den letzten Jahren gestiegen."
      },
      {
       "ort": "Radiointerview — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was haben Sie denn verändert?"
        },
        {
         "wer": "Frau",
         "text": "Wir haben die Leute gefragt, statt für sie zu planen. Bei einer Umfrage kam heraus, dass sich viele Ältere vor allem für digitale Themen interessieren: Videotelefonie mit den Enkeln, Online-Banking, Fotos bearbeiten. Das hatten wir überhaupt nicht erwartet. Wir waren davon ausgegangen, dass ältere Menschen mit Technik möglichst wenig zu tun haben wollen, aber das Gegenteil war der Fall."
        }
       ],
       "satz": "Die Volkshochschule hat ihr Programm auf Grundlage einer Befragung geändert.",
       "loesung": true,
       "stelle": "Wir haben die Leute gefragt, statt für sie zu planen",
       "erklaerung": "Eine Umfrage zeigte das Interesse an digitalen Themen."
      },
      {
       "ort": "Radiointerview — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Lernen ältere Menschen anders als jüngere?"
        },
        {
         "wer": "Frau",
         "text": "Sie lernen nicht schlechter, aber anders. Viele brauchen etwas mehr Zeit für neue Abläufe und mehr Wiederholung. Dafür sind sie oft motivierter, weil sie genau wissen, wofür sie etwas lernen. Niemand sitzt bei uns im Kurs, weil der Chef ihn geschickt hat."
        }
       ],
       "satz": "Frau Oberhuber meint, dass ältere Menschen schlechter lernen als jüngere.",
       "loesung": false,
       "stelle": "Sie lernen nicht schlechter, aber anders",
       "erklaerung": "Nicht schlechter, nur anders: mehr Zeit, mehr Wiederholung, oft mehr Motivation."
      },
      {
       "ort": "Radiointerview — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wer unterrichtet diese Kurse?"
        },
        {
         "wer": "Frau",
         "text": "Ein Teil unserer Kursleiter ist selbst über siebzig. Das hat sich sehr bewährt. Ein jüngerer Dozent erklärt zwar technisch vielleicht schneller, aber ein Gleichaltriger weiß, wo die Teilnehmer stolpern, weil er selbst dort gestolpert ist. Die Rückmeldungen für diese Kurse sind besonders gut. Außerdem trauen sich die Teilnehmer bei Gleichaltrigen eher, auch einmal eine scheinbar dumme Frage zu stellen."
        }
       ],
       "satz": "Kurse mit älteren Kursleitern werden von den Teilnehmern besonders gut bewertet.",
       "loesung": true,
       "stelle": "Die Rückmeldungen für diese Kurse sind besonders gut",
       "erklaerung": "Gleichaltrige Kursleiter kennen die Probleme — die Rückmeldungen sind sehr gut."
      },
      {
       "ort": "Radiointerview — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Sind die Kurse für Rentner eigentlich teurer oder günstiger?"
        },
        {
         "wer": "Frau",
         "text": "Grundsätzlich gelten die normalen Preise, also etwa sechzig Euro für einen Kurs mit acht Terminen. Wer nur eine kleine Rente bekommt, zahlt auf Antrag die Hälfte. Diesen Antrag stellen aber viel weniger Menschen, als eigentlich berechtigt wären, oft aus Scham."
        }
       ],
       "satz": "Alle Rentner bekommen automatisch die Hälfte der Kursgebühr erlassen.",
       "loesung": false,
       "stelle": "Wer nur eine kleine Rente bekommt, zahlt auf Antrag die Hälfte",
       "erklaerung": "Ermäßigung gibt es nur bei kleiner Rente und nur auf Antrag."
      },
      {
       "ort": "Radiointerview — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Welcher Kurs ist im Moment am beliebtesten?"
        },
        {
         "wer": "Frau",
         "text": "Überraschenderweise ein Sprachkurs: Italienisch für die Reise. Den bieten wir inzwischen fünfmal pro Semester an. Viele erfüllen sich im Ruhestand einen alten Traum und wollen sich im Urlaub endlich selbst verständigen können. Englisch war früher an erster Stelle, ist inzwischen aber auf Platz zwei."
        }
       ],
       "satz": "Englisch ist zurzeit der beliebteste Kurs.",
       "loesung": false,
       "stelle": "ist inzwischen aber auf Platz zwei",
       "erklaerung": "Früher war Englisch vorn, heute ist Italienisch der beliebteste Kurs."
      },
      {
       "ort": "Radiointerview — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Geht es den Teilnehmern nur ums Lernen?"
        },
        {
         "wer": "Frau",
         "text": "Ehrlich gesagt oft nicht in erster Linie. Viele Menschen sind nach dem Tod des Partners oder nach dem Umzug der Kinder ziemlich allein. Der Kurs ist für sie ein fester Termin in der Woche, ein Grund, sich anzuziehen und aus dem Haus zu gehen. Aus manchen Kursen sind richtige Freundschaften entstanden. Eine Gruppe aus dem Italienischkurs ist sogar gemeinsam nach Florenz gefahren."
        }
       ],
       "satz": "Für viele Teilnehmer sind auch soziale Kontakte ein wichtiger Grund für den Kursbesuch.",
       "loesung": true,
       "stelle": "Ehrlich gesagt oft nicht in erster Linie",
       "erklaerung": "Es geht oft vor allem um Kontakt und einen festen Termin gegen das Alleinsein."
      },
      {
       "ort": "Radiointerview — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gibt es auch Menschen, die Sie nicht erreichen?"
        },
        {
         "wer": "Frau",
         "text": "Leider ja, vor allem Männer. Etwa drei Viertel unserer älteren Teilnehmer sind Frauen. Wir haben deshalb versuchsweise eine Werkstatt eingerichtet, in der man zusammen Fahrräder und kleine Geräte repariert. Ob das mehr Männer anzieht, können wir aber noch nicht sagen, der Kurs startet erst im nächsten Monat."
        }
       ],
       "satz": "Die Reparaturwerkstatt hat bereits viele ältere Männer angezogen.",
       "loesung": false,
       "stelle": "der Kurs startet erst im nächsten Monat",
       "erklaerung": "Das ist nur ein Plan; die Werkstatt hat noch gar nicht begonnen."
      },
      {
       "ort": "Radiointerview — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wie finanziert die Volkshochschule das alles?"
        },
        {
         "wer": "Frau",
         "text": "Zum größten Teil über die Gemeinde und die Kursgebühren. Für die digitalen Kurse bekommen wir zwar seit zwei Jahren Geld vom Land, aber diese Förderung läuft Ende nächsten Jahres aus. Wie es danach weitergeht, ist offen. Ich führe gerade Gespräche mit Stiftungen und örtlichen Firmen."
        }
       ],
       "satz": "Die Förderung für die digitalen Kurse ist auch für die Zukunft gesichert.",
       "loesung": false,
       "stelle": "diese Förderung läuft Ende nächsten Jahres aus",
       "erklaerung": "Die Förderung endet bald, und wie es weitergeht, ist offen."
      },
      {
       "ort": "Radiointerview — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Frau Oberhuber, was sagen Sie jemandem, der denkt, mit siebzig sei es zu spät, noch etwas Neues zu lernen?"
        },
        {
         "wer": "Frau",
         "text": "Dass das nicht stimmt. Unsere älteste Teilnehmerin ist dreiundneunzig und hat im letzten Herbst ihren ersten Computerkurs abgeschlossen. Heute schickt sie ihren Urenkeln Fotos per E-Mail."
        },
        {
         "wer": "Mann",
         "text": "Das macht Mut. Herzlichen Dank für das Gespräch."
        },
        {
         "wer": "Frau",
         "text": "Ich habe zu danken."
        }
       ],
       "satz": "Laut Frau Oberhuber kann man auch im hohen Alter noch erfolgreich Neues lernen.",
       "loesung": true,
       "stelle": "Unsere älteste Teilnehmerin ist dreiundneunzig",
       "erklaerung": "Mit dreiundneunzig hat eine Teilnehmerin einen Computerkurs abgeschlossen."
      }
     ]
    },
    {
     "nr": 3,
     "art": "durchsage",
     "aufgaben": [
      {
       "von": "Durchsage im Bahnhof",
       "wer": "Frau",
       "text": "Achtung an Gleis drei. Der Regionalexpress nach Westerbrück fährt heute nur bis Marienfeld. Fahrgäste nach Westerbrück steigen in Marienfeld in den Anschlusszug am gegenüberliegenden Gleis um. Der Anschluss wird garantiert. Grund sind Bauarbeiten zwischen Marienfeld und Westerbrück.",
       "satz": "Fahrgäste nach Westerbrück müssen in Marienfeld auf einen Bus umsteigen.",
       "loesung": false,
       "stelle": "steigen in Marienfeld in den Anschlusszug am gegenüberliegenden Gleis um",
       "erklaerung": "Es geht mit einem Anschlusszug weiter, nicht mit einem Bus."
      },
      {
       "von": "Anrufbeantworter einer Sprachschule",
       "wer": "Mann",
       "text": "Hallo, hier ist die Sprachschule Linguaterra. Unser Büro ist bis zum fünfzehnten August geschlossen. Anmeldungen für die Herbstkurse sind aber schon jetzt über unsere Internetseite möglich. Der Einstufungstest findet am zwanzigsten August statt und ist für alle neuen Teilnehmer Pflicht. Bei Fragen schreiben Sie uns gern eine E-Mail.",
       "satz": "Für den Herbstkurs kann man sich erst nach dem fünfzehnten August anmelden.",
       "loesung": false,
       "stelle": "Anmeldungen für die Herbstkurse sind aber schon jetzt über unsere Internetseite möglich",
       "erklaerung": "Das Büro ist zu, aber online kann man sich schon jetzt anmelden."
      },
      {
       "von": "Verkehrsfunk im Radio",
       "wer": "Frau",
       "text": "Auf der Bundesstraße zwischen Wiesenthal und Kaltbach liegen nach einem Sturm mehrere Bäume auf der Fahrbahn. Die Strecke ist voraussichtlich bis zum späten Nachmittag voll gesperrt. Eine Umleitung über Oberrod ist ausgeschildert, man muss dort aber mit etwa zwanzig Minuten mehr Fahrzeit rechnen.",
       "satz": "Die Umleitung kostet zusätzliche Zeit.",
       "loesung": true,
       "stelle": "mit etwa zwanzig Minuten mehr Fahrzeit rechnen",
       "erklaerung": "Über Oberrod dauert es etwa zwanzig Minuten länger."
      },
      {
       "von": "Ansage in einem Kaufhaus",
       "wer": "Mann",
       "text": "Liebe Kunden, wir möchten Sie darauf hinweisen, dass unsere Rolltreppen zwischen dem ersten und zweiten Obergeschoss heute gewartet werden. Bitte benutzen Sie die Aufzüge im hinteren Bereich oder das Treppenhaus. Alle anderen Rolltreppen sind in Betrieb.",
       "satz": "Heute funktioniert keine Rolltreppe im Kaufhaus.",
       "loesung": false,
       "stelle": "Alle anderen Rolltreppen sind in Betrieb.",
       "erklaerung": "Nur die Rolltreppe zwischen erstem und zweitem Stock wird gewartet."
      },
      {
       "von": "Bandansage einer Stadtverwaltung",
       "wer": "Frau",
       "text": "Sie sind verbunden mit dem Fundbüro der Stadt Ellerbach. Das Fundbüro ist am Montag und Mittwoch von neun bis zwölf Uhr geöffnet, am Donnerstag zusätzlich von vierzehn bis achtzehn Uhr. Gefundene Fahrräder werden nicht im Fundbüro, sondern im Lager am Betriebshof aufbewahrt. Bitte bringen Sie zur Abholung einen Ausweis mit.",
       "satz": "Gefundene Fahrräder kann man im Fundbüro abholen.",
       "loesung": false,
       "stelle": "sondern im Lager am Betriebshof aufbewahrt",
       "erklaerung": "Fahrräder sind nicht im Fundbüro, sondern im Lager am Betriebshof."
      }
     ]
    }
   ]
  }
 ]
};
