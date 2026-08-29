/* ============================================================
   vokabel-saetze-3.js — Beispielsaetze fuer die Berufsfelder
   und die letzten Themen ohne Satz

   Nach vokabel-saetze.js (338 Saetze) und vokabel-saetze-neu.js
   (310) standen im Wortschatz noch 149 Woerter ohne Satz da —
   fast alle aus den Berufsfeldern: Bau, Elektro, Metall,
   Reinigung, Lager, Produktion, Technik. Also ausgerechnet dort,
   wo die Woerter am Arbeitsplatz gebraucht werden.

   Ein Satz ist hier mehr als Zierde. Aus ihm baut vielfalt.js
   drei weitere Uebungen: die Luecke im Satz, den Satzbau und den
   Beispielsatz auf der Wortkarte. Ohne Satz bleibt ein Wort auf
   die Bedeutung beschraenkt.

   Darum sind die Saetze kurz (vier bis neun Woerter), ohne Ziffern
   und mit hoechstens einem Komma — dann taugen sie auch zum
   Bauen. Das Zielwort steht zwischen §…§, in der Form, in der es
   im Satz wirklich vorkommt.

   Zwei Woerter bedeuten je nach Thema etwas anderes („der
   Anschluss": der naechste Zug oder die Leitung im Haus). Dafuer
   gibt es Schluessel mit Thema davor: "a2-handy:der Anschluss".

   Wird NACH den beiden anderen Satzdateien geladen und ergaenzt
   nur, was dort fehlt.
   ============================================================ */
(function () {
  var NEU = {

    /* ---------- A2 · Polizei & Sicherheit ---------- */
    "die Anzeige": "Ich habe bei der Polizei §Anzeige§ erstattet.",
    "der Diebstahl": "Der §Diebstahl§ im Supermarkt wurde sofort gemeldet.",
    "die Zeugin": "Eine §Zeugin§ hat den Unfall genau gesehen.",
    "die Streife": "Die §Streife§ fährt jede Nacht durch unser Viertel.",
    "der Notruf": "Bei einem Feuer wählst du sofort den §Notruf§.",
    "die Aussage": "Meine §Aussage§ steht jetzt im Protokoll.",
    "das Protokoll": "Der Beamte liest mir das §Protokoll§ noch einmal vor.",
    "der Unfall": "Nach dem §Unfall§ haben wir die Polizei gerufen.",
    "die Fundsache": "Deinen Schlüssel findest du im Fundbüro bei den §Fundsachen§.",
    "verdächtig": "Der Mann vor der Bank wirkte §verdächtig§.",
    "anhalten": "Die Polizei hat unser Auto kurz §angehalten§.",
    "die Anschrift": "Bitte schreiben Sie Ihre §Anschrift§ auf das Formular.",

    /* ---------- A2 · unterwegs und am Telefon: dasselbe Wort,
       zwei Bedeutungen ---------- */
    "a2-unterwegs:der Anschluss": "Der §Anschluss§ nach Bremen fährt in zehn Minuten.",
    "a2-handy:der Anschluss": "Unser §Anschluss§ im Haus ist seit gestern gestört.",

    /* ---------- B1 · Auf dem Bau ---------- */
    "die Baustelle": "Auf der §Baustelle§ trägt jeder einen Helm.",
    "der Helm": "Ohne §Helm§ darfst du hier nicht arbeiten.",
    "das Gerüst": "Das §Gerüst§ steht schon an der ganzen Hauswand.",
    "der Bauleiter": "Der §Bauleiter§ erklärt uns jeden Morgen die Aufgaben.",
    "der Zement": "Wir brauchen noch zwei Säcke §Zement§.",
    "die Mischung": "Die §Mischung§ ist heute zu nass geworden.",
    "die Wasserwaage": "Prüf mit der §Wasserwaage§, ob die Fliese gerade liegt.",
    "die Schalung": "Morgen bauen wir die §Schalung§ für die Treppe.",
    "der Bagger": "Der §Bagger§ hebt die Grube für den Keller aus.",
    "die Absperrung": "Hinter der §Absperrung§ darf niemand laufen.",
    "abstützen": "Wir haben die Wand mit Balken §abgestützt§.",
    "die Unfallgefahr": "Bei Regen ist die §Unfallgefahr§ auf dem Gerüst groß.",
    "der Schutt": "Der §Schutt§ kommt in den großen Container.",
    "der Auftrag": "Unsere Firma hat den §Auftrag§ für das Dach bekommen.",

    /* ---------- B1 · Elektro & SHK ---------- */
    "die Leitung": "In dieser Wand liegt eine alte §Leitung§.",
    "die Steckdose": "Die §Steckdose§ im Bad funktioniert nicht mehr.",
    "der Sicherungskasten": "Der §Sicherungskasten§ hängt im Flur.",
    "spannungsfrei": "Erst wenn alles §spannungsfrei§ ist, fange ich an.",
    "das Kabel": "Das §Kabel§ ist an einer Stelle beschädigt.",
    "der Kurzschluss": "Ein §Kurzschluss§ hat die Sicherung ausgelöst.",
    "die Heizung": "Die §Heizung§ wird oben nicht richtig warm.",
    "das Ventil": "Am §Ventil§ tropft es seit gestern.",
    "die Dichtung": "Ich habe die alte §Dichtung§ gegen eine neue ausgetauscht.",
    "der Abfluss": "Der §Abfluss§ in der Küche ist verstopft.",
    "der Druck": "Der §Druck§ in der Anlage ist zu niedrig.",
    "die Wartung": "Einmal im Jahr macht der Kollege die §Wartung§.",
    "entlüften": "Wir müssen die Heizkörper noch §entlüften§.",

    /* ---------- B1 · Metall ---------- */
    "die Werkbank": "Mein Werkzeug liegt auf der §Werkbank§.",
    "der Schraubstock": "Spann das Rohr in den §Schraubstock§.",
    "die Feile": "Mit der §Feile§ brichst du die scharfe Kante.",
    "schweißen": "Der Kollege §schweißt§ zwei dicke Bleche.",
    "die Naht": "Die §Naht§ sieht sauber und gleichmäßig aus.",
    "das Maß": "Das §Maß§ stimmt auf den Millimeter.",
    "der Grat": "Nach dem Sägen muss der §Grat§ weg.",
    "die Zeichnung": "Auf der §Zeichnung§ stehen alle Maße.",
    "der Span": "Nach dem Bohren liegen überall §Späne§.",
    "spannen": "§Spann§ das Werkstück in den Schraubstock.",
    "prüfen": "Ich §prüfe§ jedes Teil mit dem Messschieber.",

    /* ---------- A2 · Reinigung ---------- */
    "der Reinigungsplan": "Im §Reinigungsplan§ steht, welcher Raum heute dran ist.",
    "der Wagen": "Der §Wagen§ steht schon vor dem Zimmer.",
    "das Reinigungsmittel": "Das §Reinigungsmittel§ ist fast leer.",
    "die Dosierung": "Achte bitte auf die richtige §Dosierung§.",
    "der Wischmopp": "Den §Wischmopp§ wechseln wir nach jedem Stockwerk.",
    "die Desinfektion": "Nach der §Desinfektion§ trocknet die Fläche kurz.",
    "die Fläche": "Diese §Fläche§ wische ich zweimal am Tag.",
    "der Handschuh": "Ohne §Handschuhe§ arbeite ich nie.",
    "das Warnschild": "Stell bitte das §Warnschild§ auf den nassen Boden.",
    "der Müllsack": "Der §Müllsack§ ist voll und muss raus.",
    "die Kammer": "Die Mittel stehen alle in der §Kammer§.",
    "gründlich": "Das Bad putze ich besonders §gründlich§.",
    "die Beschwerde": "Gestern kam eine §Beschwerde§ über das Treppenhaus.",

    /* ---------- B1 · Lager ---------- */
    "der Wareneingang": "Die Lieferung steht noch im §Wareneingang§.",
    "der Lieferschein": "Der §Lieferschein§ liegt oben auf dem Karton.",
    "die Palette": "Auf der §Palette§ stehen zwanzig Kartons.",
    "der Hubwagen": "Hol bitte den §Hubwagen§ aus der Halle.",
    "kommissionieren": "Ich §kommissioniere§ heute die Aufträge für morgen.",
    "der Scanner": "Der §Scanner§ piept, wenn der Code stimmt.",
    "der Bestand": "Der §Bestand§ im Regal stimmt nicht mehr.",
    "die Inventur": "Am Freitag machen wir §Inventur§.",
    "die Teillieferung": "Heute kam nur eine §Teillieferung§.",
    "der Versand": "Die Pakete gehen morgen in den §Versand§.",
    "die Retoure": "Diese §Retoure§ geht zurück an den Hersteller.",
    "der Stapler": "Der §Stapler§ bringt die Palette ins Regal.",
    "das Regal": "Im obersten §Regal§ liegen die leichten Kartons.",
    "die Ladeliste": "Auf der §Ladeliste§ stehen acht Paletten.",

    /* ---------- B1 · Produktion ---------- */
    "die Linie": "An unserer §Linie§ arbeiten heute vier Leute.",
    "der Stillstand": "Der §Stillstand§ hat zwanzig Minuten gedauert.",
    "die Stückzahl": "Die §Stückzahl§ von gestern war richtig gut.",
    "der Ausschuss": "Zu viel §Ausschuss§ kostet die Firma Geld.",
    "die Qualität": "Die §Qualität§ prüfen wir bei jeder Charge.",
    "die Sichtprüfung": "Nach dem Lackieren kommt die §Sichtprüfung§.",
    "die Charge": "Diese §Charge§ ist noch nicht freigegeben.",
    "das Rüsten": "Das §Rüsten§ dauert etwa eine Stunde.",
    "die Instandhaltung": "Die §Instandhaltung§ repariert die Maschine noch heute.",
    "die Vorgabe": "Die §Vorgabe§ schaffen wir heute locker.",
    "der Gehörschutz": "In der Halle trägt jeder einen §Gehörschutz§.",

    /* ---------- B2 · Technik & Planung ---------- */
    "die Anforderung": "Diese §Anforderung§ steht so im Vertrag.",
    "der Entwurf": "Der erste §Entwurf§ liegt am Montag vor.",
    "die Abnahme": "Nach der §Abnahme§ bekommt der Kunde die Papiere.",
    "die Machbarkeit": "Wir prüfen zuerst die §Machbarkeit§.",
    "die Schnittstelle": "An der §Schnittstelle§ passen die Teile nicht zusammen.",
    "die Simulation": "Die §Simulation§ zeigt das Problem schon vorher.",
    "die Freigabe": "Ohne §Freigabe§ baut hier niemand weiter.",
    "die Nacharbeit": "Die §Nacharbeit§ kostet uns zwei Tage.",

    /* ---------- A2 · Am Telefon ---------- */
    "verbinden": "Einen Moment bitte, ich §verbinde§ Sie.",
    "die Warteschleife": "Ich hänge seit zehn Minuten in der §Warteschleife§.",
    "die Durchwahl": "Meine §Durchwahl§ steht unten in der Mail.",
    "zurückrufen": "Können Sie mich später noch einmal §zurückrufen§?",
    "ausrichten": "Kann ich ihr etwas §ausrichten§?",
    "buchstabieren": "Können Sie den Namen bitte §buchstabieren§?",
    "die Verbindung": "Die §Verbindung§ ist heute sehr schlecht.",
    "wiederholen": "Können Sie das bitte noch einmal §wiederholen§?",
    "langsamer sprechen": "Am Telefon musst du oft §langsamer sprechen§.",
    "die Mailbox": "Sprich mir einfach auf die §Mailbox§.",
    "auflegen": "Bitte nicht §auflegen§, ich frage kurz nach.",
    "die Erreichbarkeit": "Meine §Erreichbarkeit§ steht in der Signatur.",

    /* ---------- A2 · Ankommen in Deutschland ---------- */
    "die Meldebescheinigung": "Für das Konto brauchst du die §Meldebescheinigung§.",
    "die Ausländerbehörde": "Der Termin bei der §Ausländerbehörde§ ist im Mai.",
    "die Steuer-Identifikationsnummer": "Ohne §Steuer-Identifikationsnummer§ kann die Firma dich nicht bezahlen.",
    "die Sozialversicherungsnummer": "Die §Sozialversicherungsnummer§ bekommst du automatisch per Post.",
    "der Integrationskurs": "Mein §Integrationskurs§ dauert sechs Monate.",
    "die Beratungsstelle": "In der §Beratungsstelle§ helfen sie dir kostenlos.",
    "die Einbürgerung": "Nach der §Einbürgerung§ darfst du wählen.",
    "sich zurechtfinden": "Nach einem Jahr habe ich §mich hier zurechtgefunden§.",

    /* ---------- A2 · Im Deutschkurs ---------- */
    "die Aufgabe": "Die §Aufgabe§ auf Seite zehn war schwer.",
    "nachfragen": "Trau dich, im Kurs einfach §nachzufragen§.",
    "die Erklärung": "Die §Erklärung§ war diesmal richtig gut.",
    "das Beispiel": "Kannst du mir ein §Beispiel§ geben?",
    "die Regel": "Diese §Regel§ merke ich mir mit einem Satz.",
    "die Ausnahme": "Zu jeder Regel gibt es eine §Ausnahme§.",
    "der Fehler": "Aus §Fehlern§ lernt man am meisten.",
    "die Korrektur": "Die §Korrektur§ kommt nächste Woche zurück.",
    "die Entschuldigung": "Bring bitte eine §Entschuldigung§ für den Montag mit.",
    "fehlen": "Gestern hat die halbe Gruppe §gefehlt§.",
    "das Zertifikat": "Am Ende bekommst du ein §Zertifikat§.",

    /* ---------- B1 · Weiterbildung & Anerkennung ---------- */
    "der Bildungsgutschein": "Mit dem §Bildungsgutschein§ zahlt die Agentur den Kurs.",
    "die Agentur für Arbeit": "Ich habe einen Termin bei der §Agentur für Arbeit§.",
    "die Beratung": "Die §Beratung§ hat mir sehr geholfen.",
    "die Voraussetzung": "Ein Schulabschluss ist die §Voraussetzung§ für die Ausbildung.",
    "berufsbegleitend": "Ich mache die Weiterbildung §berufsbegleitend§.",
    "das Praktikum": "Nach dem §Praktikum§ haben sie mich übernommen.",
    "die Förderung": "Ohne §Förderung§ könnte ich den Kurs nicht bezahlen.",

    /* ---------- B1 · Nachrichten, Werbung & sicher im Netz ---------- */
    "die Nachrichten": "Abends schaue ich immer die §Nachrichten§.",
    "die Schlagzeile": "Die §Schlagzeile§ klingt schlimmer als der Text.",
    "die Quelle": "Bei jeder Meldung frage ich nach der §Quelle§.",
    "die Werbung": "Zwischen den Filmen kommt viel §Werbung§.",
    "das Abo": "Mein §Abo§ läuft im Juni aus.",
    "die Datenschutzerklärung": "Kaum jemand liest die ganze §Datenschutzerklärung§.",
    "der Betrug": "Bei dieser Mail geht es um §Betrug§.",
    "die Phishing-Mail": "Eine §Phishing-Mail§ will dein Passwort.",
    "seriös": "Diese Seite wirkt auf mich nicht §seriös§.",
    "die Falschmeldung": "Das war eine §Falschmeldung§ aus dem Netz.",
    "der Kommentar": "Sein §Kommentar§ unter dem Beitrag war unfreundlich."
  };

  var K = window.VOKABEL_SAETZE || (window.VOKABEL_SAETZE = {});
  var dazu = 0;
  for (var w in NEU) {
    if (!NEU.hasOwnProperty(w)) continue;
    if (K[w]) continue;          /* vorhandene Sätze bleiben, wie sie sind */
    K[w] = NEU[w]; dazu++;
  }
  window.VOKABEL_SAETZE_3 = dazu;
})();
