/* ============================================================
   hoer-saetze.js — Beispielsätze für die Wörter aus dem Hören

   Im Hörbereich stehen 1021 Wörter. 520 davon hatten keinen
   Beispielsatz: sie kommen zwar in den Hörtexten vor, aber nicht
   immer in einem Satz, der kurz genug zum Lesen und Bauen ist.

   Ohne Satz bleibt ein Wort bei seiner Bedeutung stehen. Mit Satz
   baut vielfalt.js daraus drei weitere Übungen — die Lücke im
   Satz, den Satzbau und den Beispielsatz auf der Wortkarte.

   Regeln wie in den anderen Satzdateien: vier bis neun Wörter,
   keine Ziffern, höchstens ein Komma, das Zielwort zwischen §…§
   in der Form, in der es im Satz wirklich steht.

   Wörter, die in zwei Themen etwas anderes meinen („weit" beim
   Weg und bei der Kleidung), bekommen einen Schlüssel mit dem
   Thema davor.

   Wird NACH den anderen Satzdateien geladen und ergänzt nur, was
   dort fehlt.
   ============================================================ */
(function () {
  var NEU = {

    /* ---------- A1 · Begrüßung & Vorstellen ---------- */
    "guten Morgen": "Beim Bäcker sagt man §guten Morgen§.",
    "guten Abend": "Im Restaurant sagt der Kellner §guten Abend§.",
    "tschüss": "Beim Gehen sage ich einfach §tschüss§.",
    "auf Wiedersehen": "Im Amt sagt man §auf Wiedersehen§.",
    "heißen": "Ich §heiße§ Julia und komme aus Bremen.",
    "wohnen": "Wir §wohnen§ seit drei Jahren in Köln.",
    "kommen aus": "Meine Nachbarn §kommen§ aus Polen.",
    "sich freuen": "Ich §freue mich§ auf das Wochenende.",
    "verheiratet": "Meine Schwester ist seit Mai §verheiratet§.",
    "willkommen": "Herzlich §willkommen§ in unserem Kurs!",

    /* ---------- A1 · Zahlen & Preise ---------- */
    "der Euro": "Das Brot kostet zwei §Euro§.",
    "der Cent": "Ich habe nur noch fünfzig §Cent§.",
    "kosten": "Wie viel §kostet§ die Fahrkarte?",
    "bezahlen": "Ich §bezahle§ heute mit Karte.",
    "billig": "Die Tomaten sind heute richtig §billig§.",
    "zusammen": "Wir zahlen alles §zusammen§.",
    "die Hausnummer": "Schreib bitte auch die §Hausnummer§ dazu.",
    "die Postleitzahl": "Vor dem Ort steht die §Postleitzahl§.",

    /* ---------- A1 · Uhrzeit & Termin ---------- */
    "die Uhrzeit": "Sag mir bitte die genaue §Uhrzeit§.",
    "halb": "Wir treffen uns um §halb§ acht.",
    "Viertel nach": "Der Kurs beginnt um §Viertel nach§ neun.",
    "Viertel vor": "Ich bin schon um §Viertel vor§ da.",
    "früh": "Am Montag stehe ich sehr §früh§ auf.",
    "spät": "Gestern bin ich zu §spät§ gekommen.",
    "verschieben": "Können wir den Termin §verschieben§?",
    "geöffnet": "Die Praxis ist bis achtzehn Uhr §geöffnet§.",

    /* ---------- A1 · Beim Bäcker ---------- */
    "die Brezel": "Zum Frühstück esse ich gern eine §Brezel§.",
    "der Kuchen": "Am Sonntag backe ich einen §Kuchen§.",
    "das Stück": "Ich nehme ein §Stück§ Kuchen bitte.",
    "die Scheibe": "Möchtest du noch eine §Scheibe§ Brot?",
    "das Mehl": "Für den Teig brauche ich §Mehl§.",
    "süß": "Der Kuchen ist mir zu §süß§.",
    "der Ofen": "Das Brot kommt jetzt in den §Ofen§.",

    /* ---------- A1 · Nach dem Weg fragen ---------- */
    "links": "An der Ampel gehst du §links§.",
    "rechts": "Die Post ist gleich §rechts§.",
    "die Ecke": "Der Bäcker ist an der §Ecke§.",
    "gegenüber": "Die Apotheke liegt §gegenüber§ vom Bahnhof.",
    "neben": "Die Bank steht §neben§ dem Rathaus.",
    "a1-weg:weit": "Bis zum Bahnhof ist es nicht §weit§.",
    "die Brücke": "Geh über die §Brücke§ und dann rechts.",
    "der Eingang": "Der §Eingang§ ist auf der anderen Seite.",
    "sich verlaufen": "In der Altstadt habe ich mich §verlaufen§.",

    /* ---------- A1 · Am Telefon ---------- */
    "anrufen": "Kannst du mich später noch einmal §anrufen§?",
    "das Handy": "Mein §Handy§ ist schon wieder leer.",
    "warten": "Bitte §warten§ Sie einen kurzen Moment.",
    "besetzt": "Die Nummer ist immer noch §besetzt§.",
    "laut": "Im Bus ist es sehr §laut§.",
    "leise": "Sprich am Telefon bitte etwas §leiser§.",
    "langsam": "Können Sie bitte §langsam§ sprechen?",
    "der Anrufbeantworter": "Sprich mir einfach auf den §Anrufbeantworter§.",
    "Bescheid sagen": "Kannst du mir kurz §Bescheid sagen§?",

    /* ---------- A2 · Kita und Kinder ---------- */
    "die Kita": "Mein Sohn geht seit August in die §Kita§.",
    "die Eingewöhnung": "Die §Eingewöhnung§ dauert bei uns zwei Wochen.",
    "die Erzieherin": "Die §Erzieherin§ hat heute mit mir gesprochen.",
    "die Abholzeit": "Die §Abholzeit§ endet um sechzehn Uhr.",
    "die Abholvollmacht": "Für die Oma brauchen wir eine §Abholvollmacht§.",
    "ansteckend": "Der Husten ist leider sehr §ansteckend§.",
    "die Notbetreuung": "In dieser Woche gibt es nur §Notbetreuung§.",
    "die Schließzeit": "Im Sommer hat die Kita §Schließzeit§.",
    "die Wechselsachen": "Bitte packt trockene §Wechselsachen§ ein.",
    "die Brotdose": "Die §Brotdose§ liegt noch im Rucksack.",
    "das Geschwisterkind": "Das §Geschwisterkind§ bekommt den Platz zuerst.",
    "die Großeltern": "Am Freitag holen die §Großeltern§ ihn ab.",
    "einspringen": "Kannst du morgen kurz §einspringen§?",
    "die Vorsorgeuntersuchung": "Morgen haben wir die §Vorsorgeuntersuchung§ beim Kinderarzt.",

    /* ---------- A2 · Einladung und Fest ---------- */
    "die Einladung": "Die §Einladung§ kam gestern mit der Post.",
    "zusagen": "Ich habe für Samstag schon §zugesagt§.",
    "Bescheid geben": "Kannst du mir kurz §Bescheid geben§?",
    "der Anlass": "Was ist der §Anlass§ für die Feier?",
    "der Gastgeber": "Der §Gastgeber§ begrüßt jeden an der Tür.",
    "das Gastgeschenk": "Als §Gastgeschenk§ bringe ich Blumen mit.",
    "mitbringen": "Soll ich einen Salat §mitbringen§?",
    "der Nachtisch": "Zum §Nachtisch§ gibt es heute Eis.",
    "das Grillfest": "Am Samstag machen wir ein §Grillfest§.",
    "reinfeiern": "Bei uns wird oft §reingefeiert§.",
    "die Hochzeit": "Zur §Hochzeit§ schenken wir lieber Geld.",
    "das Standesamt": "Zuerst gehen die beiden zum §Standesamt§.",
    "der Umschlag": "Im §Umschlag§ steckt das Geschenk.",
    "festlich": "Alle waren richtig §festlich§ angezogen.",

    /* ---------- A2 · Arbeit im Salon ---------- */
    "das Terminbuch": "Im §Terminbuch§ ist der Freitag schon voll.",
    "der Wunsch": "Ich frage die Kundin nach ihrem §Wunsch§.",
    "anrühren": "Die Farbe muss man frisch §anrühren§.",
    "die Einwirkzeit": "Die §Einwirkzeit§ beträgt zwanzig Minuten.",
    "der Schnitt": "Der neue §Schnitt§ steht ihr gut.",
    "der Ansatz": "Der §Ansatz§ ist schon wieder dunkel.",
    "der Nacken": "Im §Nacken§ schneide ich ganz kurz.",
    "die Strähne": "Eine helle §Strähne§ macht viel aus.",
    "auswaschen": "Die Farbe muss man gut §auswaschen§.",
    "der Umhang": "Ich lege der Kundin den §Umhang§ um.",

    /* ---------- A2 · An der Kasse ---------- */
    "das Laufband": "Leg deine Sachen auf das §Laufband§.",
    "der Warentrenner": "Stell bitte den §Warentrenner§ dazwischen.",
    "der Pfandautomat": "Der §Pfandautomat§ steht neben dem Eingang.",
    "der Bon": "Möchten Sie den §Bon§ mitnehmen?",
    "passend": "Ich habe es leider nicht §passend§.",
    "die Girokarte": "Ich zahle immer mit der §Girokarte§.",
    "abbuchen": "Der Betrag wird sofort §abgebucht§.",
    "die Treuepunkte": "Sammeln Sie auch §Treuepunkte§?",
    "reklamieren": "Diese Milch möchte ich §reklamieren§.",
    "abgelaufen": "Der Joghurt ist seit gestern §abgelaufen§.",

    /* ---------- A2 · Kleidung & Größen ---------- */
    "eng": "Die Hose ist mir zu §eng§.",
    "kleidung:weit": "Das Hemd sitzt am Bauch zu §weit§.",
    "der Stoff": "Der §Stoff§ fühlt sich weich an.",
    "reduziert": "Diese Jacke ist stark §reduziert§.",
    "stehen": "Die Farbe §steht§ dir wirklich gut.",

    /* ---------- A2 · Ein Paket abholen ---------- */
    "die Filiale": "Die §Filiale§ öffnet erst um neun.",
    "der Nachsendeauftrag": "Nach dem Umzug stelle ich einen §Nachsendeauftrag§.",
    "der Zusteller": "Der §Zusteller§ war heute schon zweimal da.",
    "die Lagerfrist": "Die §Lagerfrist§ beträgt eine Woche.",
    "die Vollmacht": "Mit einer §Vollmacht§ darf mein Mann abholen.",

    /* ---------- A2 · Arbeit in der Reinigung ---------- */
    "das Sicherheitsdatenblatt": "Das §Sicherheitsdatenblatt§ hängt in der Kammer.",
    "die Grundreinigung": "Einmal im Jahr machen wir eine §Grundreinigung§.",
    "das Objekt": "Unser neues §Objekt§ ist eine Schule.",
    "die Schlüsselübergabe": "Die §Schlüsselübergabe§ ist morgen früh.",
    "das Verbrauchsmaterial": "Wir bestellen neues §Verbrauchsmaterial§.",
    "die Krankheitsvertretung": "Ich mache diese Woche §Krankheitsvertretung§.",
    "der Putzeimer": "Der §Putzeimer§ steht schon im Flur.",
    "die Schutzhandschuhe": "Zieh bitte die §Schutzhandschuhe§ an.",
    "der Sanitärbereich": "Der §Sanitärbereich§ kommt immer zuletzt.",
    "die Unterhaltsreinigung": "Die §Unterhaltsreinigung§ machen wir jeden Dienstag.",
    "der Kalk": "Im Bad sieht man überall §Kalk§.",
    "der Stundenzettel": "Vergiss deinen §Stundenzettel§ nicht.",

    /* ---------- A2 · Beim Zahnarzt ---------- */
    "der Behandlungsstuhl": "Bitte setzen Sie sich in den §Behandlungsstuhl§.",
    "die Zahnreinigung": "Die §Zahnreinigung§ dauert etwa eine Stunde.",
    "der Zahnstein": "Der §Zahnstein§ muss einmal weg.",
    "das Zahnfleisch": "Mein §Zahnfleisch§ blutet beim Putzen.",
    "die Betäubung": "Ohne §Betäubung§ tut das ziemlich weh.",
    "die Wurzelbehandlung": "Die §Wurzelbehandlung§ hat lange gedauert.",
    "die Krankenkasse": "Die §Krankenkasse§ zahlt den größten Teil.",
    "der Eigenanteil": "Der §Eigenanteil§ liegt bei achtzig Euro.",
    "spülen": "Bitte einmal kurz §spülen§.",

    /* ---------- B2 · Umgangssprache ---------- */
    "zusammenkommen": "Die beiden sind letzten Sommer §zusammengekommen§.",
    "platt sein": "Von der Nachricht war ich richtig §platt§.",
    "Erzähl schon!": "Nun §erzähl schon§ von deinem Wochenende.",

    /* ---------- B2 · Im Team: Kritik und Klärung ---------- */
    "ansprechen": "Ich möchte das Problem einmal §ansprechen§.",
    "die Absprache": "Das war so nicht unsere §Absprache§.",
    "der Engpass": "Im Team gibt es gerade einen §Engpass§.",
    "nachhaken": "Nach einer Woche habe ich einmal §nachgehakt§.",
    "sich abstimmen": "Wir sollten uns vorher kurz §abstimmen§.",
    "die Frist einhalten": "Diesmal haben wir die Frist §eingehalten§.",
    "entlasten": "Damit könnt ihr mich wirklich §entlasten§.",
    "die Wertschätzung": "Ein wenig §Wertschätzung§ tut allen gut.",
    "unter vier Augen": "Das klären wir besser §unter vier Augen§.",
    "den Ton treffen": "Sie hat genau den richtigen §Ton getroffen§.",
    "die Eskalation": "So kommt es schnell zur §Eskalation§.",
    "aus der Welt schaffen": "Lass uns das Missverständnis §aus der Welt schaffen§.",

    /* ---------- B2 · Bescheid, Frist, Widerspruch ---------- */
    "die Rechtsbehelfsbelehrung": "Am Ende steht die §Rechtsbehelfsbelehrung§.",
    "beantragen": "Ich habe das Wohngeld schriftlich §beantragt§.",
    "bewilligen": "Der Antrag wurde gestern §bewilligt§.",
    "ablehnen": "Die Behörde hat meinen Antrag §abgelehnt§.",
    "die Begründung": "In der §Begründung§ steht der entscheidende Satz.",
    "die Akte": "Ihre §Akte§ liegt jetzt bei uns.",
    "zuständig": "Für diesen Fall ist Frau Meier §zuständig§.",
    "nachreichen": "Die Bescheinigung kann ich §nachreichen§.",
    "die Bearbeitungszeit": "Die §Bearbeitungszeit§ beträgt sechs Wochen.",
    "formlos": "Ein §formloses§ Schreiben genügt völlig.",
    "in Kraft treten": "Die neue Regelung ist §in Kraft getreten§.",

    /* ---------- B2 · Mietvertrag, Kaution, Nebenkosten ---------- */
    "die Nebenkostenabrechnung": "Die §Nebenkostenabrechnung§ kam erst im Herbst.",
    "die Nachzahlung": "Diesmal wurde eine §Nachzahlung§ fällig.",
    "die Rückzahlung": "Ich rechne mit einer kleinen §Rückzahlung§.",
    "die Staffelmiete": "Im Vertrag steht eine §Staffelmiete§.",
    "der Nachmieter": "Wir suchen selbst einen §Nachmieter§.",
    "die Schönheitsreparatur": "Die §Schönheitsreparaturen§ übernimmt der Vermieter.",
    "das Übergabeprotokoll": "Ohne §Übergabeprotokoll§ unterschreibe ich nichts.",
    "der Mangel": "Diesen §Mangel§ habe ich sofort gemeldet.",
    "die Mietminderung": "Wegen der Heizung fordere ich eine §Mietminderung§.",
    "der Eigenbedarf": "Der Vermieter kündigt wegen §Eigenbedarf§.",
    "fristgerecht": "Die Kündigung kam §fristgerecht§ an.",
    "schriftlich": "Bitte melden Sie das §schriftlich§.",

    /* ---------- B2 · Nachricht, Meinung, Werbung ---------- */
    "die Meldung": "Die §Meldung§ war nur drei Sätze lang.",
    "einordnen": "Solche Zahlen muss man erst §einordnen§.",
    "belegen": "Diese Behauptung kann er nicht §belegen§.",
    "unterstellen": "Er §unterstellt§ ihr eine falsche Absicht.",
    "zuspitzen": "Die Überschrift ist bewusst §zugespitzt§.",
    "die Reichweite": "Das Video hatte eine enorme §Reichweite§.",
    "der Algorithmus": "Der §Algorithmus§ zeigt mir immer Ähnliches.",
    "die Filterblase": "In der eigenen §Filterblase§ merkt man das kaum.",
    "die Werbung kennzeichnen": "Bezahlte Beiträge muss man als §Werbung kennzeichnen§.",
    "die Recherche": "Für die §Recherche§ braucht man Zeit.",
    "die Richtigstellung": "Die §Richtigstellung§ stand am nächsten Tag.",
    "reißerisch": "Die Schlagzeile war ziemlich §reißerisch§.",
    "hinterfragen": "Solche Zahlen sollte man immer §hinterfragen§.",

    /* ---------- C1 · Verhandeln ---------- */
    "der Spielraum": "Beim Preis haben wir kaum §Spielraum§.",
    "das Zugeständnis": "Das war schon ein großes §Zugeständnis§.",
    "in Aussicht stellen": "Man hat mir eine Erhöhung §in Aussicht gestellt§.",
    "die Gegenforderung": "Auf mein Angebot kam sofort eine §Gegenforderung§.",
    "hinauszögern": "Sie will die Entscheidung nur §hinauszögern§.",
    "sich vertagen": "Wir haben uns auf Montag §vertagt§.",
    "unter Vorbehalt": "Ich sage das nur §unter Vorbehalt§ zu.",
    "das Entgegenkommen": "Für Ihr §Entgegenkommen§ danke ich Ihnen.",
    "den Rahmen sprengen": "Diese Summe würde den §Rahmen sprengen§.",
    "sich einigen": "Am Ende haben wir uns §geeinigt§.",
    "nachverhandeln": "Im Frühjahr können wir §nachverhandeln§.",
    "das Signal": "Das war ein deutliches §Signal§.",
    "vage bleiben": "Sie ist beim Termin bewusst §vage geblieben§.",
    "eine Zusage": "Eine feste §Zusage§ habe ich nicht bekommen.",
    "belastbar": "Diese Aussage ist leider nicht §belastbar§.",

    /* ---------- C1 · In der Debatte ---------- */
    "der Einwand": "Ihr §Einwand§ ist völlig berechtigt.",
    "entkräften": "Dieses Argument konnte er sofort §entkräften§.",
    "einräumen": "In einem Punkt hat er das §eingeräumt§.",
    "die Prämisse": "Ihre §Prämisse§ stimmt so nicht.",
    "ins Feld führen": "Dagegen kann man vieles §ins Feld führen§.",
    "sich festlegen": "Er wollte sich einfach nicht §festlegen§.",
    "ausweichen": "Bei dieser Frage ist sie §ausgewichen§.",
    "sachlich bleiben": "Im Streit sollte man §sachlich bleiben§.",
    "polemisch": "Der Beitrag war eher §polemisch§.",
    "die Schlussfolgerung": "Ihre §Schlussfolgerung§ überzeugt mich nicht.",
    "widerlegen": "Diese Behauptung lässt sich leicht §widerlegen§.",
    "den Punkt machen": "Mit diesem Satz hat sie §den Punkt gemacht§.",
    "das Totschlagargument": "Das ist ein klassisches §Totschlagargument§.",

    /* ---------- C1 · Zahlen im Vortrag ---------- */
    "die Erhebung": "Die §Erhebung§ stammt aus dem Frühjahr.",
    "die Stichprobe": "Die §Stichprobe§ war ziemlich klein.",
    "der Zusammenhang": "Zwischen beiden gibt es einen §Zusammenhang§.",
    "die Ursache": "Die §Ursache§ ist damit nicht bewiesen.",
    "hochrechnen": "Man darf das nicht einfach §hochrechnen§.",
    "die Schwankung": "Solche §Schwankungen§ sind ganz normal.",
    "der Anteil": "Der §Anteil§ ist seitdem leicht gestiegen.",
    "die Tendenz": "Die §Tendenz§ zeigt seit Jahren nach oben.",
    "aussagekräftig": "Diese Zahl ist wenig §aussagekräftig§.",
    "verzerren": "Die Grafik §verzerrt§ das Ergebnis.",
    "die Momentaufnahme": "Das ist nur eine §Momentaufnahme§.",
    "im Schnitt": "§Im Schnitt§ sind es sechs Stunden.",
    "die Fehlerquote": "Die §Fehlerquote§ liegt bei vier Prozent.",
    "relativ": "§Relativ§ gesehen ist der Anstieg klein.",
    "absolut": "In §absoluten§ Zahlen sind es tausend Menschen.",

    /* ---------- C1 · Zwischen den Zeilen ---------- */
    "die Andeutung": "Das war nur eine vorsichtige §Andeutung§.",
    "durch die Blume sagen": "Sie hat es mir §durch die Blume gesagt§.",
    "der Unterton": "In ihrer Antwort lag ein §Unterton§.",
    "untertreiben": "Er §untertreibt§ seine Leistung immer.",
    "beschönigen": "Da gibt es nichts zu §beschönigen§.",
    "ausweichend": "Die Antwort war sehr §ausweichend§.",
    "verklausuliert": "Der Brief war reichlich §verklausuliert§.",
    "hellhörig werden": "Bei diesem Satz bin ich §hellhörig geworden§.",
    "nachsetzen": "An dieser Stelle habe ich §nachgesetzt§.",
    "den Wink verstehen": "Ich habe den §Wink verstanden§.",
    "wohlwollend": "Die Kritik war durchaus §wohlwollend§.",
    "süffisant": "Er lächelte etwas §süffisant§.",
    "in aller Deutlichkeit": "Das sage ich §in aller Deutlichkeit§.",
    "es dabei belassen": "Wir haben §es dabei belassen§.",
    "zwischen den Zeilen": "Vieles steht nur §zwischen den Zeilen§.",

    /* ---------- B1 · Zahlen und Belege ---------- */
    "der Beleg": "Ohne §Beleg§ kann ich nichts buchen.",
    "die Eingangsrechnung": "Die §Eingangsrechnung§ liegt schon im Fach.",
    "das Zahlungsziel": "Das §Zahlungsziel§ ist in vierzehn Tagen.",
    "der Skonto": "Bei schneller Zahlung gibt es §Skonto§.",
    "die Mahnung": "Heute kam schon die zweite §Mahnung§.",
    "der Verwendungszweck": "Schreib die Rechnungsnummer in den §Verwendungszweck§.",
    "der Zahlungseingang": "Der §Zahlungseingang§ war schon gestern.",
    "der offene Posten": "In der Liste steht ein §offener Posten§.",
    "die Gutschrift": "Für die Rücksendung bekommen Sie eine §Gutschrift§.",
    "die Umsatzsteuer": "Die §Umsatzsteuer§ steht getrennt auf der Rechnung.",
    "die Buchung": "Diese §Buchung§ stimmt so nicht.",
    "die Kostenstelle": "Auf welche §Kostenstelle§ soll das gehen?",
    "der Monatsabschluss": "Vor dem §Monatsabschluss§ wird es immer eng.",

    /* ---------- B1 · Strom und Heizung ---------- */
    "die Sicherung": "Die §Sicherung§ ist wieder herausgesprungen.",
    "der Verteiler": "Im §Verteiler§ ist alles sauber beschriftet.",
    "verlegen": "Die Leitung müssen wir neu §verlegen§.",
    "der Rohrbruch": "Im Keller gab es einen §Rohrbruch§.",
    "der Kundendienst": "Der §Kundendienst§ kommt am Donnerstag.",
    "der Wartungstermin": "Der §Wartungstermin§ steht schon im Kalender.",
    "der Heizkörper": "Der §Heizkörper§ im Bad bleibt kalt.",
    "der Absperrhahn": "Dreh bitte den §Absperrhahn§ zu.",
    "der Stromausfall": "Gestern hatten wir einen kurzen §Stromausfall§.",
    "der Zählerstand": "Bitte melden Sie uns Ihren §Zählerstand§.",
    "tropfen": "Der Wasserhahn §tropft§ seit Tagen.",
    "elektro-shk:der Anschluss": "Der §Anschluss§ für die Waschmaschine fehlt noch.",

    /* ---------- B1 · Arbeit mit Kindern ---------- */
    "der Tagesablauf": "Der §Tagesablauf§ hängt an der Tür.",
    "das Elterngespräch": "Morgen habe ich ein §Elterngespräch§.",
    "die Beobachtung": "Meine §Beobachtungen§ schreibe ich jede Woche auf.",
    "die Aufsichtspflicht": "Auf dem Spielplatz gilt die §Aufsichtspflicht§.",
    "der Entwicklungsstand": "Der §Entwicklungsstand§ ist für das Alter normal.",
    "der Streit": "Beim §Streit§ um die Schaufel helfe ich.",
    "der Morgenkreis": "Der §Morgenkreis§ beginnt kurz nach neun.",
    "die Trotzphase": "Unser Kleiner ist gerade in der §Trotzphase§.",
    "die Abholberechtigung": "Ohne §Abholberechtigung§ geht kein Kind mit.",
    "wickeln": "Ich muss die Kleine noch §wickeln§.",

    /* ---------- B1 · Unterwegs auf Tour ---------- */
    "die Tour": "Meine §Tour§ hat heute zwölf Stopps.",
    "die Lenkzeit": "Meine §Lenkzeit§ ist gleich zu Ende.",
    "der Fahrtenschreiber": "Der §Fahrtenschreiber§ läuft immer mit.",
    "die Ladungssicherung": "Ohne §Ladungssicherung§ fahre ich nicht los.",
    "der Spanngurt": "Zieh den §Spanngurt§ noch einmal fest.",
    "die Entladestelle": "Die §Entladestelle§ liegt hinter der Halle.",
    "die Rampe": "An der §Rampe§ steht schon ein Lkw.",
    "quittieren": "Bitte §quittieren§ Sie mir den Empfang.",
    "das Zeitfenster": "Unser §Zeitfenster§ ist von acht bis zehn.",
    "die Umleitung": "Wegen der Baustelle fahre ich eine §Umleitung§.",
    "der Stau": "Auf der Autobahn steht ein langer §Stau§.",
    "die Spedition": "Unsere §Spedition§ fährt bis nach Polen.",

    /* ---------- B1 · Heikle Gespräche ---------- */
    "der Vorwurf": "Dieser §Vorwurf§ hat mich wirklich getroffen.",
    "die Kritik": "Ihre §Kritik§ war völlig berechtigt.",
    "der Kompromiss": "Am Ende fanden wir einen §Kompromiss§.",
    "die Gehaltserhöhung": "Ich möchte über eine §Gehaltserhöhung§ sprechen.",
    "das Versehen": "Das war wirklich nur ein §Versehen§.",
    "die Überforderung": "Bei so vielen Aufgaben droht §Überforderung§.",
    "der Vorgesetzte": "Mein §Vorgesetzter§ nimmt sich morgen Zeit.",
    "das Vieraugengespräch": "Wir machen daraus lieber ein §Vieraugengespräch§.",
    "der Konflikt": "Dieser §Konflikt§ schwelt schon länger.",
    "die Grenze": "Hier liegt meine §Grenze§.",
    "sich rechtfertigen": "Du musst dich dafür nicht §rechtfertigen§.",

    /* ---------- B1 · Arbeiten im Hotel ---------- */
    "die Rezeption": "An der §Rezeption§ bekommen Sie den Schlüssel.",
    "die Anreise": "Ihre §Anreise§ ist am Freitagabend.",
    "die Abreise": "Am Tag der §Abreise§ räumen wir das Zimmer.",
    "die Zimmerkategorie": "Welche §Zimmerkategorie§ haben Sie gebucht?",
    "die Halbpension": "Wir haben diesmal §Halbpension§ gebucht.",
    "das Frühstücksbuffet": "Das §Frühstücksbuffet§ steht ab sieben bereit.",
    "die Zimmerreinigung": "Die §Zimmerreinigung§ kommt am Vormittag.",
    "der Gepäckraum": "Ihre Koffer stehen im §Gepäckraum§.",
    "die Zimmerkarte": "Ihre §Zimmerkarte§ öffnet auch den Aufzug.",
    "der Meldeschein": "Bitte füllen Sie den §Meldeschein§ aus.",
    "der Aufenthalt": "Ich wünsche Ihnen einen schönen §Aufenthalt§.",
    "ausgebucht": "Am Wochenende sind wir leider §ausgebucht§.",
    "die Stornierung": "Eine §Stornierung§ ist bis Montag kostenlos.",
    "der Weckruf": "Möchten Sie einen §Weckruf§ um sechs?",

    /* ---------- B1 · In der Restaurantküche ---------- */
    "die Vorbereitung": "Die §Vorbereitung§ dauert den ganzen Vormittag.",
    "anrichten": "Das Essen wird auf großen Tellern §angerichtet§.",
    "die Allergie": "Der Gast hat eine §Allergie§ gegen Nüsse.",
    "die Hygienevorschrift": "In der Küche gilt jede §Hygienevorschrift§.",
    "die Kühlkette": "Die §Kühlkette§ darf nicht unterbrochen werden.",
    "die Spätschicht": "Diese Woche habe ich §Spätschicht§.",
    "die Warenannahme": "Die §Warenannahme§ ist morgens um sieben.",
    "das Mindesthaltbarkeitsdatum": "Schau bitte auf das §Mindesthaltbarkeitsdatum§.",
    "die Durchreiche": "Die Teller stehen an der §Durchreiche§.",
    "der Kühlraum": "Die Soße steht noch im §Kühlraum§.",
    "abschmecken": "Ich muss die Suppe noch §abschmecken§.",
    "die Bedienung": "Die §Bedienung§ bringt gleich die Getränke.",

    /* ---------- B1 · Arbeit auf dem Hof ---------- */
    "die Ernte": "Die §Ernte§ war in diesem Jahr gut.",
    "der Erntehelfer": "Im Sommer kommen viele §Erntehelfer§.",
    "melken": "Um fünf Uhr wird §gemolken§.",
    "der Melkstand": "Die Kühe warten schon am §Melkstand§.",
    "das Futter": "Das §Futter§ liegt in der Scheune.",
    "ausmisten": "Der Stall muss heute noch §ausgemistet§ werden.",
    "die Weide": "Die Kühe stehen auf der §Weide§.",
    "der Anhänger": "Der §Anhänger§ ist voll mit Heu.",
    "der Mähdrescher": "Der §Mähdrescher§ fährt seit heute früh.",
    "die Aussaat": "Die §Aussaat§ beginnt schon im April.",
    "der Frost": "Der §Frost§ hat die Blüten erwischt.",
    "der Hagel": "Der §Hagel§ hat das Feld zerschlagen.",
    "die Direktvermarktung": "Wir leben von der §Direktvermarktung§.",
    "der Hofladen": "Im §Hofladen§ gibt es frische Eier.",
    "die Saisonarbeit": "Im Herbst gibt es viel §Saisonarbeit§.",
    "der Akkordlohn": "Beim §Akkordlohn§ zählt nur die Menge.",

    /* ---------- B1 · Arbeit in der Pflege ---------- */
    "der Dienstplan": "Der neue §Dienstplan§ hängt seit gestern.",
    "die Frühschicht": "Diese Woche habe ich §Frühschicht§.",
    "der Nachtdienst": "Nach dem §Nachtdienst§ schlafe ich lange.",
    "die Pflegedokumentation": "Die §Pflegedokumentation§ mache ich am Ende.",
    "Medikamente stellen": "Ich muss noch die §Medikamente stellen§.",
    "die Bewohnerin": "Die §Bewohnerin§ aus Zimmer zwölf ruft.",
    "die Lagerung": "Die §Lagerung§ ändern wir alle zwei Stunden.",
    "das Wundliegen": "Gegen das §Wundliegen§ hilft regelmäßiges Umlagern.",
    "die Notfallklingel": "Die §Notfallklingel§ liegt neben dem Bett.",
    "die Sturzgefahr": "Bei ihr besteht eine große §Sturzgefahr§.",
    "die Grundpflege": "Die §Grundpflege§ machen wir am Morgen.",

    /* ---------- B1 · Rechte bei der Arbeit ---------- */
    "der Urlaubsanspruch": "Mein §Urlaubsanspruch§ sind dreißig Tage.",
    "die Lohnabrechnung": "Auf der §Lohnabrechnung§ fehlt ein Zuschlag.",
    "der Betriebsrat": "Der §Betriebsrat§ hilft dir in diesem Fall.",
    "die Überstunden": "Meine §Überstunden§ werden am Jahresende ausgezahlt.",
    "der Mindestlohn": "Weniger als den §Mindestlohn§ darf niemand zahlen.",
    "der Aufhebungsvertrag": "Den §Aufhebungsvertrag§ unterschreibe ich nicht sofort.",
    "der Tarifvertrag": "Bei uns gilt ein §Tarifvertrag§.",
    "die Abmahnung": "Nach der §Abmahnung§ war die Stimmung schlecht.",
    "die Sozialversicherung": "Vom Lohn geht die §Sozialversicherung§ ab.",
    "der Zuschlag": "Am Sonntag gibt es einen §Zuschlag§.",
    "die Kurzarbeit": "Im Winter waren wir in §Kurzarbeit§.",
    "die Lohnfortzahlung": "Bei Krankheit gilt die §Lohnfortzahlung§.",

    /* ---------- B1 · Termin beim Amt · Konto und Karte ---------- */
    "beglaubigen": "Die Kopie muss man §beglaubigen§ lassen.",
    "die Öffnungszeiten": "Die §Öffnungszeiten§ stehen an der Tür.",
    "eröffnen": "Ich möchte hier ein Konto §eröffnen§.",
    "die Lastschrift": "Die Miete geht per §Lastschrift§ ab.",
    "die Gebühren": "Für die Karte fallen §Gebühren§ an.",
    "der Dispo": "Mein Konto ist gerade im §Dispo§.",

    /* ---------- B1 · Auf der Baustelle ---------- */
    "der Polier": "Der §Polier§ verteilt morgens die Arbeit.",
    "der Schutzhelm": "Ohne §Schutzhelm§ darf hier niemand rein.",
    "die Materiallieferung": "Die §Materiallieferung§ kommt erst am Montag.",
    "das Aufmaß": "Nach der Arbeit machen wir das §Aufmaß§.",
    "die Bauzeit": "Die §Bauzeit§ beträgt acht Monate.",
    "bau:die Einweisung": "Vor dem Start gibt es eine §Einweisung§.",
    "der Bauschutt": "Der §Bauschutt§ kommt in den Container.",
    "die Sicherheitsschuhe": "Zieh bitte die §Sicherheitsschuhe§ an.",
    "die Verzögerung": "Es gab eine §Verzögerung§ von zwei Wochen.",
    "der Baustopp": "Seit Freitag gilt hier ein §Baustopp§.",

    /* ---------- B1 · Sich richtig bewerben ---------- */
    "das Arbeitszeugnis": "Mein letztes §Arbeitszeugnis§ ist richtig gut.",
    "die Probearbeit": "Am Dienstag habe ich eine §Probearbeit§.",
    "die Bewerbungsunterlagen": "Die §Bewerbungsunterlagen§ schicke ich per Mail.",
    "die Berufserfahrung": "Ich habe zehn Jahre §Berufserfahrung§.",
    "der Ansprechpartner": "Wer ist bei euch der §Ansprechpartner§?",
    "die Befristung": "Die Stelle hat eine §Befristung§ auf zwei Jahre.",
    "sich bewerben": "Ich möchte mich bei euch §bewerben§.",
    "der Eintrittstermin": "Als §Eintrittstermin§ passt mir der Erste.",

    /* ---------- B1 · Alltag im Büro ---------- */
    "die Tagesordnung": "Die §Tagesordnung§ schicke ich heute noch.",
    "die Ablage": "Die Rechnung kommt in die §Ablage§.",
    "die Wiedervorlage": "Ich lege den Vorgang auf §Wiedervorlage§.",
    "die Vertretung": "Im Urlaub macht Frau Kaya die §Vertretung§.",
    "buero:der Verteiler": "Nimm mich bitte aus dem §Verteiler§.",
    "der Bürobedarf": "Der §Bürobedarf§ wird einmal monatlich bestellt.",
    "die Sammelbestellung": "Wir machen daraus eine §Sammelbestellung§.",
    "die Rückfrage": "Eine kurze §Rückfrage§ hätte ich noch.",
    "abzeichnen": "Der Chef muss die Liste noch §abzeichnen§.",

    /* ---------- B1 · Arbeiten im Laden ---------- */
    "die Kassenabrechnung": "Die §Kassenabrechnung§ machen wir nach Ladenschluss.",
    "der Schichtplan": "Der §Schichtplan§ hängt im Aufenthaltsraum.",
    "die Warenverräumung": "Die §Warenverräumung§ dauert dienstags länger.",
    "die Nachbestellung": "Ich mache heute noch die §Nachbestellung§.",
    "der Umtausch": "Ein §Umtausch§ ist nur mit Bon möglich.",
    "der Ladenhüter": "Diese Ware ist ein echter §Ladenhüter§.",
    "die Frischetheke": "An der §Frischetheke§ ist gerade viel los.",
    "die Preisauszeichnung": "Bei der §Preisauszeichnung§ fehlen zwei Schilder.",
    "die Kundenberatung": "Die §Kundenberatung§ macht mir am meisten Spaß.",
    "der Schwund": "Der §Schwund§ war im letzten Monat hoch.",

    /* ---------- B1 · Im technischen Büro ---------- */
    "die Berechnung": "Die §Berechnung§ prüft ein Kollege gegen.",
    "der Änderungswunsch": "Der §Änderungswunsch§ kam viel zu spät.",
    "der Abgabetermin": "Der §Abgabetermin§ ist nächsten Freitag.",
    "der Prüfbericht": "Der §Prüfbericht§ liegt seit gestern vor.",
    "der Baustellentermin": "Am Mittwoch haben wir einen §Baustellentermin§.",
    "der Nachtrag": "Für die Mehrarbeit schreiben wir einen §Nachtrag§.",
    "der Auftraggeber": "Der §Auftraggeber§ hat schon zugestimmt.",
    "die Stellungnahme": "Eine kurze §Stellungnahme§ genügt uns.",
    "der Vorbehalt": "Wir stimmen nur unter einem §Vorbehalt§ zu.",

    /* ---------- B1 · IT im Büroalltag ---------- */
    "der Zugang": "Mein §Zugang§ funktioniert seit heute nicht.",
    "das Kennwort": "Das §Kennwort§ muss man monatlich ändern.",
    "zurücksetzen": "Wir müssen dein Passwort §zurücksetzen§.",
    "der Ausfall": "Der §Ausfall§ hat zwei Stunden gedauert.",
    "das Update": "Das §Update§ läuft heute Nacht.",
    "die Datensicherung": "Die §Datensicherung§ läuft jeden Abend.",
    "die Berechtigung": "Dafür fehlt mir leider die §Berechtigung§.",
    "der Anhang": "Im §Anhang§ findest du die Rechnung.",
    "die Sperre": "Die §Sperre§ wird morgen wieder aufgehoben.",
    "der Fernzugriff": "Über den §Fernzugriff§ komme ich ins System.",

    /* ---------- B1 · Im Lager arbeiten ---------- */
    "der Handscanner": "Der §Handscanner§ ist schon wieder leer.",
    "der Gabelstapler": "Der §Gabelstapler§ steht vor der Halle.",
    "versandbereit": "Die Paletten sind alle §versandbereit§.",
    "die Einlagerung": "Die §Einlagerung§ machen wir am Nachmittag.",
    "der Staplerschein": "Ohne §Staplerschein§ darf man nicht fahren.",
    "die Bestandsdifferenz": "Bei der Zählung gab es eine §Bestandsdifferenz§.",
    "der Schichtleiter": "Frag am besten den §Schichtleiter§.",
    "die Sackkarre": "Nimm dafür lieber die §Sackkarre§.",

    /* ---------- B1 · Arbeit in der Praxis ---------- */
    "die Anamnese": "Zuerst machen wir eine kurze §Anamnese§.",
    "die Aufklärung": "Die §Aufklärung§ dauert etwa zehn Minuten.",
    "die Blutabnahme": "Die §Blutabnahme§ tut kaum weh.",
    "das Labor": "Das §Labor§ meldet sich morgen früh.",
    "die Krankschreibung": "Ihre §Krankschreibung§ gilt bis Freitag.",
    "die Impfung": "Die zweite §Impfung§ folgt im Mai.",
    "die Notfallsprechstunde": "Kommen Sie in die §Notfallsprechstunde§.",
    "medizin:die Einweisung": "Der Arzt schreibt Ihnen eine §Einweisung§.",
    "der Kontrolltermin": "Der §Kontrolltermin§ ist in vier Wochen.",

    /* ---------- B1 · In der Metallwerkstatt ---------- */
    "fräsen": "Diese Nut müssen wir noch §fräsen§.",
    "das Werkstück": "Das §Werkstück§ ist zu warm geworden.",
    "die Schichtübergabe": "Bei der §Schichtübergabe§ sagen wir alles Wichtige.",
    "die Qualitätskontrolle": "Die §Qualitätskontrolle§ hat zwei Teile aussortiert.",
    "der Arbeitsschutz": "Der §Arbeitsschutz§ geht immer vor.",
    "entgraten": "Die Kanten muss man noch §entgraten§.",
    "der Messschieber": "Miss das bitte mit dem §Messschieber§.",
    "die Späne": "Die §Späne§ kehren wir am Ende weg.",
    "die Vorrichtung": "Die §Vorrichtung§ hält das Teil sicher.",

    /* ---------- B1 · Bei der Polizei ---------- */
    "die Personalien": "Der Beamte nimmt zuerst die §Personalien§ auf.",
    "der Zeuge": "Ein §Zeuge§ hat alles genau beobachtet.",
    "das Fundbüro": "Frag doch einmal im §Fundbüro§ nach.",
    "die Rahmennummer": "Die §Rahmennummer§ steht unten am Rad.",
    "die Wache": "Die §Wache§ ist die ganze Nacht besetzt.",
    "die Sachbeschädigung": "Er zeigt die §Sachbeschädigung§ an.",
    "der Tathergang": "Bitte schildern Sie den §Tathergang§.",
    "die Fahrerflucht": "Nach dem Unfall beging er §Fahrerflucht§.",
    "die Bestätigung": "Ich brauche eine §Bestätigung§ für die Versicherung.",
    "der Schaden": "Der §Schaden§ am Auto ist groß.",

    /* ---------- B1 · In der Produktion ---------- */
    "der Schichtwechsel": "Der §Schichtwechsel§ ist um vierzehn Uhr.",
    "die Sicherheitsunterweisung": "Die §Sicherheitsunterweisung§ ist einmal im Jahr.",
    "die Taktzeit": "Die §Taktzeit§ liegt bei neunzig Sekunden.",
    "das Fließband": "Am §Fließband§ stehe ich seit Jahren.",
    "die Rüstzeit": "Die §Rüstzeit§ war diesmal deutlich kürzer.",
    "die Schichtzulage": "Nachts gibt es eine §Schichtzulage§.",

    /* ---------- B1 · Beratung und soziale Arbeit ---------- */
    "das Beratungsgespräch": "Das §Beratungsgespräch§ ist immer kostenlos.",
    "die Anlaufstelle": "Diese §Anlaufstelle§ hilft bei allen Fragen.",
    "die Begleitung": "Zum Amt bekommen Sie eine §Begleitung§.",
    "der Hausbesuch": "Nächste Woche mache ich einen §Hausbesuch§.",
    "die Dolmetscherin": "Eine §Dolmetscherin§ ist beim Termin dabei.",
    "das Netzwerk": "Unser §Netzwerk§ reicht bis in die Schulen.",
    "die Krisensituation": "In einer §Krisensituation§ rufen Sie sofort an.",
    "die Notfallnummer": "Die §Notfallnummer§ hängt an der Tür.",

    /* ---------- B1 · Privat verkaufen ---------- */
    "der Zustand": "Der §Zustand§ ist wirklich noch gut.",
    "die Gebrauchsspuren": "Man sieht nur leichte §Gebrauchsspuren§.",
    "defekt": "Der Akku ist leider §defekt§.",
    "die Verhandlungsbasis": "Der Preis ist §Verhandlungsbasis§.",
    "der Festpreis": "Hundert Euro sind mein §Festpreis§.",
    "handeln": "Beim Preis lässt sich noch §handeln§.",
    "der Nachlass": "Bei Abholung gebe ich einen §Nachlass§.",
    "der Interessent": "Der erste §Interessent§ kommt heute Abend.",
    "die Besichtigung": "Die §Besichtigung§ ist am Samstagvormittag.",
    "die Abholung": "Die §Abholung§ passt mir am Wochenende.",
    "die Reservierung": "Eine §Reservierung§ mache ich nur mit Anzahlung.",
    "die Standgebühr": "Die §Standgebühr§ beträgt zwanzig Euro.",

    /* ---------- B1 · In der Werkstatt ---------- */
    "die Inspektion": "Die §Inspektion§ ist nächste Woche fällig.",
    "der Stundensatz": "Unser §Stundensatz§ liegt bei achtzig Euro.",
    "die Ersatzteile": "Die §Ersatzteile§ kommen erst am Freitag.",
    "die Bremsbeläge": "Die §Bremsbeläge§ sind fast heruntergefahren.",
    "quietschen": "Die Bremse §quietscht§ beim Anhalten.",
    "der Reifenwechsel": "Den §Reifenwechsel§ machen wir im Oktober.",
    "das Profil": "Das §Profil§ ist noch tief genug.",
    "die Plakette": "Die neue §Plakette§ klebt am Kennzeichen.",
    "der Ersatzwagen": "Für zwei Tage bekommen Sie einen §Ersatzwagen§.",
    "die Kontrollleuchte": "Die §Kontrollleuchte§ ist gestern angegangen.",
    "die Kulanz": "Die Firma zahlt aus §Kulanz§ mit."
  };

  var K = window.VOKABEL_SAETZE || (window.VOKABEL_SAETZE = {});
  var dazu = 0;
  for (var w in NEU) {
    if (!NEU.hasOwnProperty(w)) continue;
    if (K[w]) continue;
    K[w] = NEU[w]; dazu++;
  }
  window.HOER_SAETZE = dazu;
})();
