/* ============================================================
   LESEN A2 — Start Deutsch 2 (Goethe · telc)
   Aufbau nach dem offiziellen Prüfungsformat:
   4 Teile, 20 Aufgaben, 30 Minuten, 20 Punkte.
     Teil 1  Ein Zeitungstext, 5 Aufgaben, a/b/c
     Teil 2  Eine Übersicht (Etagenplan, Programm, Plan), 5 Aufgaben, a/b/c
     Teil 3  Eine E-Mail oder ein Blog, 5 Aufgaben, a/b/c
     Teil 4  Sechs Anzeigen a–f, 5 Situationen, eine passt nie (x)
   Davor zwei Stufen mit Wortschatz und Lesestrategie.
   ============================================================ */
window.LESEN_A2 = {
  niveau: 'A2',
  pruefung: 'Start Deutsch 2',
  minuten: 30,
  punkte: 20,

  stufen: [
    { nr:1, titel:'Die Wörter, die A2 ausmachen', zeichen:'🔤',
      was:'Auf A2 wird aus dem Schild ein Text. Hier lernst du die Wörter, die in Zeitungsmeldungen, '
        +'E-Mails und Anzeigen immer wieder vorkommen — und ohne die du die Frage nicht beantworten kannst.' },
    { nr:2, titel:'Wie man eine Frage beantwortet', zeichen:'🔍',
      was:'Bei a/b/c steht die Antwort im Text — aber nie mit denselben Wörtern. '
        +'Hier übst du, die Stelle zu finden und die zwei falschen Antworten zu erkennen.' },
    { nr:3, titel:'Die vier Aufgabentypen', zeichen:'🧩',
      was:'Jetzt echte Prüfungsaufgaben, aber in Ruhe und einzeln. Jeder Teil hat fünf Runden.' },
    { nr:4, titel:'Die ganze Prüfung', zeichen:'⏱️',
      was:'20 Aufgaben, 30 Minuten, keine Hilfe zwischendurch. So wie am Prüfungstag.' }
  ],

  /* ---------------------------------------------------------
     STUFE 1 — Wortschatz
     --------------------------------------------------------- */
  bloecke: [

  { id:'s1b1', stufe:1, titel:'Termine und Fristen', zeichen:'📅',
    was:'spätestens, rechtzeitig, ab sofort, vorher, im Voraus — die Zeitwörter aus Briefen und Anzeigen.',
    kurz:'Zeitwörter aus Briefen und Anzeigen', farbe:'gold',
    ziel:'Du erkennst sofort, ob ein Datum ein erster oder ein letzter Tag ist.',
    aufgaben:[
      { art:'wahl', bild:{ art:'schild', zeilen:['Anmeldung','spätestens bis 15. März'] },
        frage:'Bis wann müssen Sie sich anmelden?',
        opt:['Am 15. März oder früher','Erst nach dem 15. März','Genau am 15. März'],
        loesung:0,
        erklaerung:'„spätestens bis 15. März" heißt: der 15. März ist der letzte Tag. Früher ist erlaubt, später nicht.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Kurs beginnt ab sofort','Plätze frei'] },
        frage:'Wann kann man anfangen?',
        opt:['Nächstes Jahr','Sofort, also gleich jetzt','Nur im Sommer'],
        loesung:1,
        erklaerung:'„ab sofort" heißt: es geht schon jetzt los. Man muss nicht auf einen Termin warten.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Bitte rechtzeitig','zum Termin kommen'] },
        frage:'Was bedeutet „rechtzeitig"?',
        opt:['So spät wie möglich','Früh genug, nicht zu spät','Egal wann'],
        loesung:1,
        erklaerung:'„rechtzeitig" heißt: früh genug, damit man den Termin nicht verpasst.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Karten nur im Voraus','an der Kasse'] },
        frage:'Wann kauft man die Karten?',
        opt:['Vorher, bevor die Veranstaltung ist','Erst danach','Während der Veranstaltung'],
        loesung:0,
        erklaerung:'„im Voraus" heißt: vorher, schon bevor es losgeht.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Anmeldeschluss:','30. April'] },
        frage:'Was ist ein Anmeldeschluss?',
        opt:['Der erste Tag zum Anmelden','Der letzte Tag zum Anmelden','Der Tag des Kurses'],
        loesung:1,
        erklaerung:'„Schluss" heißt Ende. Der Anmeldeschluss ist der letzte Tag, an dem man sich anmelden kann.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Termin bitte','24 Stunden vorher absagen'] },
        frage:'Ihr Termin ist Mittwoch 10 Uhr. Wann müssen Sie spätestens absagen?',
        opt:['Dienstag 10 Uhr','Mittwoch 9 Uhr','Donnerstag'],
        loesung:0,
        erklaerung:'24 Stunden vorher sind genau ein Tag früher: Dienstag um 10 Uhr.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Kündigung','drei Monate zum Monatsende'] },
        frage:'Was heißt das?',
        opt:['Man kann sofort aufhören','Man muss drei Monate vorher Bescheid sagen','Der Vertrag dauert drei Monate'],
        loesung:1,
        erklaerung:'Eine Kündigungsfrist von drei Monaten heißt: du musst drei Monate vor dem Ende Bescheid geben.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Gültig bis 31.12.','danach verfällt der Gutschein'] },
        frage:'Was passiert am 1. Januar?',
        opt:['Der Gutschein wird billiger','Der Gutschein gilt nicht mehr','Der Gutschein gilt weiter'],
        loesung:1,
        erklaerung:'„verfällt" heißt: er ist dann wertlos. Nach dem 31.12. kann man ihn nicht mehr benutzen.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Der Kurs findet','wöchentlich statt'] },
        frage:'Wie oft ist der Kurs?',
        opt:['Einmal pro Woche','Einmal pro Monat','Jeden Tag'],
        loesung:0,
        erklaerung:'„wöchentlich" heißt: jede Woche einmal.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Öffnungszeiten','werktags 8–16 Uhr'] },
        frage:'Wann ist geöffnet?',
        opt:['Nur am Wochenende','Montag bis Samstag, nicht sonntags','Nur am Sonntag'],
        loesung:1,
        erklaerung:'„werktags" sind alle Tage außer Sonntag und Feiertag — meistens Montag bis Samstag.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Sprechstunde','nach Vereinbarung'] },
        frage:'Wie bekommen Sie einen Termin?',
        opt:['Einfach hingehen','Vorher anrufen und einen Termin ausmachen','Gar nicht'],
        loesung:1,
        erklaerung:'„nach Vereinbarung" heißt: man muss den Termin vorher absprechen, meist am Telefon.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Bewerbungen','laufend möglich'] },
        frage:'Wann kann man sich bewerben?',
        opt:['Immer, das ganze Jahr','Nur einmal im Jahr','Gar nicht mehr'],
        loesung:0,
        erklaerung:'„laufend" heißt: die ganze Zeit, ohne festen Termin.' }
    ] },

  { id:'s1b2', stufe:1, titel:'Geld und Bedingungen', zeichen:'💶',
    was:'inklusive, zuzüglich, kostenpflichtig, ermäßigt, Kaution, Anzahlung — was am Ende wirklich zu zahlen ist.',
    kurz:'Preise, Kosten, Bedingungen', farbe:'turq',
    ziel:'Du weißt, was am Ende wirklich zu zahlen ist — und was schon im Preis steckt.',
    aufgaben:[
      { art:'wahl', bild:{ art:'schild', zeilen:['450 Euro warm','inklusive Nebenkosten'] },
        frage:'Was zahlen Sie im Monat?',
        opt:['450 Euro plus Nebenkosten','450 Euro, Nebenkosten sind dabei','Nur die Nebenkosten'],
        loesung:1,
        erklaerung:'„warm" und „inklusive" heißen: die Nebenkosten sind im Preis schon drin. Bei „kalt" kämen sie noch dazu.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['600 Euro kalt','zzgl. 120 Euro Nebenkosten'] },
        frage:'Wie viel zahlen Sie insgesamt?',
        opt:['600 Euro','480 Euro','720 Euro'],
        loesung:2,
        erklaerung:'„zzgl." heißt zuzüglich, also plus. 600 + 120 = 720 Euro.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Eintritt 12 Euro','ermäßigt 7 Euro'] },
        frage:'Wer zahlt 7 Euro?',
        opt:['Alle Besucher','Zum Beispiel Studenten und Schüler','Niemand'],
        loesung:1,
        erklaerung:'„ermäßigt" ist der günstigere Preis für bestimmte Gruppen: Schüler, Studenten, Rentner, Menschen mit Behinderung.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Kaution: 2 Monatsmieten'] },
        frage:'Was ist eine Kaution?',
        opt:['Geld, das man beim Auszug zurückbekommt','Eine zusätzliche Miete für immer','Eine Strafe'],
        loesung:0,
        erklaerung:'Die Kaution ist eine Sicherheit. Wenn die Wohnung beim Auszug in Ordnung ist, bekommst du das Geld zurück.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Reparatur kostenpflichtig'] },
        frage:'Was heißt das?',
        opt:['Die Reparatur ist gratis','Die Reparatur kostet Geld','Es gibt keine Reparatur'],
        loesung:1,
        erklaerung:'„kostenpflichtig" heißt: man muss dafür bezahlen. Das Gegenteil ist „kostenlos" oder „gratis".' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Anzahlung 50 Euro','Rest bei Abholung'] },
        frage:'Wann zahlen Sie den Rest?',
        opt:['Sofort alles','Wenn Sie die Ware abholen','Gar nicht'],
        loesung:1,
        erklaerung:'Eine Anzahlung ist ein erster Teil. Den Rest zahlt man später — hier bei der Abholung.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Nur Barzahlung','keine Karten'] },
        frage:'Wie können Sie bezahlen?',
        opt:['Mit Karte','Mit Bargeld, also mit Scheinen und Münzen','Mit Überweisung'],
        loesung:1,
        erklaerung:'„bar" heißt: mit echtem Geld in der Hand. Karten werden hier nicht akzeptiert.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Mitgliedsbeitrag','monatlich 15 Euro'] },
        frage:'Was zahlen Sie im Jahr?',
        opt:['15 Euro','180 Euro','150 Euro'],
        loesung:1,
        erklaerung:'„monatlich" heißt jeden Monat. 15 Euro × 12 Monate = 180 Euro im Jahr.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Versand kostenlos','ab 40 Euro Bestellwert'] },
        frage:'Sie bestellen für 30 Euro. Was passiert?',
        opt:['Der Versand ist gratis','Sie zahlen Versandkosten','Sie bekommen nichts'],
        loesung:1,
        erklaerung:'Gratis ist der Versand erst ab 40 Euro. Bei 30 Euro kommen die Versandkosten dazu.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Preis: 80 € VB'] },
        frage:'Was bedeutet VB?',
        opt:['Der Preis ist fest','Man kann über den Preis reden','Es ist ein Vertrag'],
        loesung:1,
        erklaerung:'VB heißt „Verhandlungsbasis". Der Verkäufer möchte 80 Euro, aber man darf handeln.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Erste Beratung gebührenfrei'] },
        frage:'Was kostet die erste Beratung?',
        opt:['Nichts','Eine Gebühr','Nur die Hälfte'],
        loesung:0,
        erklaerung:'„gebührenfrei" heißt: ohne Gebühr, also umsonst.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Zahlbar innerhalb','von 14 Tagen'] },
        frage:'Bis wann müssen Sie zahlen?',
        opt:['Sofort','Spätestens nach zwei Wochen','Nach zwei Monaten'],
        loesung:1,
        erklaerung:'„innerhalb von 14 Tagen" heißt: in den nächsten zwei Wochen, spätestens am 14. Tag.' }
    ] },

  { id:'s1b3', stufe:1, titel:'Menschen, Arbeit, Ämter', zeichen:'🏢',
    was:'Bewerbung, Vorstellungsgespräch, Bescheinigung, Antrag, Kollegin — die Wörter aus Arbeit und Behörde.',
    kurz:'Wörter aus Arbeit und Behörde', farbe:'rot',
    ziel:'Du verstehst Briefe von Firmen und Ämtern, ohne jedes Wort nachzuschlagen.',
    aufgaben:[
      { art:'wahl', bild:{ art:'schild', zeilen:['Bitte Bescheinigung','vom Arzt mitbringen'] },
        frage:'Was ist eine Bescheinigung?',
        opt:['Ein Rezept für Medikamente','Ein Papier, das etwas bestätigt','Eine Rechnung'],
        loesung:1,
        erklaerung:'Eine Bescheinigung ist ein Papier, das etwas offiziell bestätigt — zum Beispiel, dass du krank warst.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Antrag ausfüllen','und unterschreiben'] },
        frage:'Was ist ein Antrag?',
        opt:['Eine Bitte an eine Behörde, schriftlich','Ein Brief an einen Freund','Eine Rechnung'],
        loesung:0,
        erklaerung:'Mit einem Antrag bittest du eine Behörde offiziell um etwas — zum Beispiel um Geld oder um eine Erlaubnis.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Wir laden Sie zum','Vorstellungsgespräch ein'] },
        frage:'Was passiert bei diesem Termin?',
        opt:['Sie fangen sofort an zu arbeiten','Die Firma lernt Sie kennen und stellt Fragen','Sie bekommen Geld'],
        loesung:1,
        erklaerung:'Im Vorstellungsgespräch stellst du dich vor. Die Firma entscheidet danach, ob du die Stelle bekommst.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Vollzeit oder Teilzeit','möglich'] },
        frage:'Was ist Teilzeit?',
        opt:['Weniger Stunden als eine volle Stelle','Arbeit nur im Sommer','Arbeit ohne Bezahlung'],
        loesung:0,
        erklaerung:'Vollzeit sind meist etwa 40 Stunden pro Woche. Teilzeit ist weniger, zum Beispiel 20 Stunden.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Erfahrung erwünscht,','aber nicht Bedingung'] },
        frage:'Was gilt für Bewerber ohne Erfahrung?',
        opt:['Sie dürfen sich auch bewerben','Sie dürfen sich nicht bewerben','Sie müssen mehr zahlen'],
        loesung:0,
        erklaerung:'„erwünscht, aber nicht Bedingung" heißt: schön, wenn du es hast — aber es ist kein Muss.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Zuständig:','Zimmer 214'] },
        frage:'Was heißt „zuständig"?',
        opt:['Dort ist niemand','Diese Stelle bearbeitet Ihr Anliegen','Der Raum ist geschlossen'],
        loesung:1,
        erklaerung:'„zuständig" heißt: diese Person oder dieses Amt kümmert sich um deine Sache.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Unterlagen bitte','vollständig einreichen'] },
        frage:'Was heißt „vollständig"?',
        opt:['Alle Papiere, es fehlt nichts','Nur die wichtigsten Papiere','Ohne Papiere'],
        loesung:0,
        erklaerung:'„vollständig" heißt: alles ist dabei, nichts fehlt.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Bewerbung bitte','per E-Mail an Frau Weber'] },
        frage:'Wie sollen Sie sich bewerben?',
        opt:['Persönlich vorbeikommen','Eine E-Mail schreiben','Anrufen'],
        loesung:1,
        erklaerung:'„per E-Mail" sagt genau, welchen Weg die Firma möchte.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Krankmeldung','am ersten Tag melden'] },
        frage:'Wann sagen Sie in der Firma Bescheid?',
        opt:['Erst nach drei Tagen','Gleich am ersten Krankheitstag','Gar nicht'],
        loesung:1,
        erklaerung:'Man meldet sich sofort krank — am ersten Tag, an dem man nicht arbeiten kann.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Kolleginnen und Kollegen','herzlich willkommen'] },
        frage:'Wer ist gemeint?',
        opt:['Die Chefs','Die Menschen, mit denen man arbeitet','Die Kunden'],
        loesung:1,
        erklaerung:'Kolleginnen und Kollegen sind die Menschen, die im selben Betrieb arbeiten.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Termin nur mit','Voranmeldung'] },
        frage:'Was müssen Sie tun?',
        opt:['Vorher anmelden','Einfach kommen','Nichts'],
        loesung:0,
        erklaerung:'„Voranmeldung" heißt: man muss sich vorher anmelden, sonst wird man nicht bedient.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Der Bescheid kommt','in zwei Wochen'] },
        frage:'Was ist ein Bescheid?',
        opt:['Eine Antwort der Behörde, schriftlich','Ein Termin','Eine Rechnung'],
        loesung:0,
        erklaerung:'Der Bescheid ist die offizielle schriftliche Antwort — zum Beispiel: dein Antrag ist bewilligt oder abgelehnt.' }
    ] },

  /* ---------------------------------------------------------
     STUFE 2 — Strategie
     --------------------------------------------------------- */

  { id:'s2b1', stufe:2, titel:'Dasselbe, anders gesagt', zeichen:'🔁',
    was:'Im Text steht „Er hat keine Zeit", in der Antwort steht „Er ist beschäftigt". Genau das musst du erkennen.',
    kurz:'Dieselbe Aussage, andere Wörter', farbe:'turq',
    ziel:'Du erkennst dieselbe Aussage, auch wenn ganz andere Wörter dastehen.',
    aufgaben:[
      { art:'wahl', bild:{ art:'schild', zeilen:['Der Kurs ist voll.'] },
        frage:'Welcher Satz bedeutet dasselbe?',
        opt:['Es gibt keine freien Plätze mehr.','Der Kurs fällt aus.','Der Kurs ist billig.'],
        loesung:0,
        erklaerung:'„voll" heißt: alle Plätze sind belegt. Ausfallen und der Preis haben damit nichts zu tun.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Das Konzert wurde verschoben.'] },
        frage:'Was ist passiert?',
        opt:['Das Konzert fällt für immer aus.','Das Konzert ist an einem anderen Tag.','Das Konzert war gestern.'],
        loesung:1,
        erklaerung:'„verschoben" heißt: es findet statt, aber später. „Abgesagt" wäre für immer aus.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Der Laden hat neue Besitzer.'] },
        frage:'Was bedeutet das?',
        opt:['Der Laden ist zu.','Andere Menschen führen den Laden jetzt.','Der Laden ist umgezogen.'],
        loesung:1,
        erklaerung:'Neue Besitzer heißt: die Personen sind neu, der Laden bleibt.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Wir haben leider keine Kapazität mehr.'] },
        frage:'Welcher Satz passt?',
        opt:['Wir können niemanden mehr aufnehmen.','Wir haben viel Platz.','Wir sind billig.'],
        loesung:0,
        erklaerung:'„keine Kapazität" ist die höfliche Form von „kein Platz mehr".' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Der Aufzug ist außer Betrieb.'] },
        frage:'Was heißt das?',
        opt:['Der Aufzug ist neu.','Der Aufzug funktioniert nicht.','Der Aufzug ist schnell.'],
        loesung:1,
        erklaerung:'„außer Betrieb" ist die offizielle Formulierung für „kaputt" oder „geht gerade nicht".' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Sie erreichen uns telefonisch','ab 9 Uhr.'] },
        frage:'Was bedeutet „erreichen"?',
        opt:['Man kann sie anrufen und sie gehen ran.','Man muss hinfahren.','Sie schreiben Briefe.'],
        loesung:0,
        erklaerung:'„jemanden erreichen" heißt: man bekommt Kontakt, hier am Telefon.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Bitte um Rückruf.'] },
        frage:'Was sollen Sie tun?',
        opt:['Zurückschreiben','Zurückrufen','Vorbeikommen'],
        loesung:1,
        erklaerung:'Rückruf = zurückrufen. Der andere hat angerufen und möchte, dass du anrufst.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Die Stelle ist bereits besetzt.'] },
        frage:'Was heißt das für Ihre Bewerbung?',
        opt:['Jemand anderes hat die Arbeit bekommen.','Sie können sofort anfangen.','Die Stelle ist noch frei.'],
        loesung:0,
        erklaerung:'„besetzt" heißt: schon vergeben. Eine Bewerbung lohnt sich nicht mehr.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Das Angebot gilt nur','solange der Vorrat reicht.'] },
        frage:'Was bedeutet das?',
        opt:['Das Angebot gilt immer.','Wenn alles verkauft ist, ist es vorbei.','Man muss viel kaufen.'],
        loesung:1,
        erklaerung:'„solange der Vorrat reicht" heißt: nur bis die Ware weg ist.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Wir bitten um Verständnis.'] },
        frage:'Wann schreibt man das?',
        opt:['Wenn man sich für eine Unannehmlichkeit entschuldigt','Wenn man etwas verkauft','Wenn man gratuliert'],
        loesung:0,
        erklaerung:'Diese Formel steht meist nach einer schlechten Nachricht: Baustelle, Verspätung, geschlossen.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Selbstabholung erforderlich'] },
        frage:'Wer bringt die Ware?',
        opt:['Die Post','Sie selbst holen sie ab','Ein Nachbar'],
        loesung:1,
        erklaerung:'„Selbstabholung" heißt: es wird nicht geliefert, du musst kommen.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Nichtraucherwohnung','Haustiere nicht erlaubt'] },
        frage:'Wer darf diese Wohnung mieten?',
        opt:['Jemand mit Hund','Jemand, der nicht raucht und kein Tier hat','Nur Raucher'],
        loesung:1,
        erklaerung:'Beide Bedingungen gelten gleichzeitig: kein Rauchen und keine Tiere.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Der Termin entfällt.'] },
        frage:'Was bedeutet „entfällt"?',
        opt:['Er findet nicht statt.','Er ist später.','Er ist früher.'],
        loesung:0,
        erklaerung:'„entfällt" heißt: fällt aus, findet gar nicht statt.' },

      { art:'wahl', bild:{ art:'schild', zeilen:['Zutritt nur für Befugte'] },
        frage:'Wer darf hier hinein?',
        opt:['Alle','Nur bestimmte Personen mit Erlaubnis','Niemand'],
        loesung:1,
        erklaerung:'„Befugte" sind Menschen, die eine Erlaubnis haben — zum Beispiel Mitarbeiter.' }
    ] },

  { id:'s2b2', stufe:2, titel:'Die zwei falschen Antworten erkennen', zeichen:'🎯',
    was:'Bei a/b/c ist eine Antwort richtig. Die anderen zwei sind fast richtig — hier lernst du, warum sie es nicht sind.',
    kurz:'Warum zwei Antworten nicht stimmen', farbe:'gold',
    ziel:'Du siehst bei a/b/c, warum zwei Antworten fast stimmen — aber eben nur fast.',
    aufgaben:[
      { art:'wahl',
        bild:{ art:'schild', zeilen:['Frau Roth arbeitet seit drei Jahren','in der Bäckerei. Vorher war sie','in einem Café.'] },
        frage:'Wo arbeitet Frau Roth heute?',
        opt:['In einem Café','In einer Bäckerei','Sie arbeitet nicht'],
        loesung:1,
        erklaerung:'„Vorher" zeigt die Vergangenheit. Das Café war früher, die Bäckerei ist jetzt.' },

      { art:'wahl',
        bild:{ art:'schild', zeilen:['Der Bus fährt alle 20 Minuten,','am Wochenende nur jede Stunde.'] },
        frage:'Wie oft fährt der Bus am Sonntag?',
        opt:['Alle 20 Minuten','Einmal pro Stunde','Gar nicht'],
        loesung:1,
        erklaerung:'Sonntag ist Wochenende. Für das Wochenende gilt die zweite Angabe: jede Stunde.' },

      { art:'wahl',
        bild:{ art:'schild', zeilen:['Der Kurs kostet 90 Euro.','Mitglieder zahlen die Hälfte.'] },
        frage:'Was zahlt ein Mitglied?',
        opt:['90 Euro','45 Euro','180 Euro'],
        loesung:1,
        erklaerung:'Die Hälfte von 90 sind 45. Die 90 Euro gelten für alle anderen.' },

      { art:'wahl',
        bild:{ art:'schild', zeilen:['Herr Baum wollte am Montag kommen,','aber er hatte keine Zeit.','Jetzt kommt er am Freitag.'] },
        frage:'Wann kommt Herr Baum?',
        opt:['Am Montag','Am Freitag','Er kommt nicht'],
        loesung:1,
        erklaerung:'„wollte" ist ein Plan, der nicht geklappt hat. „Jetzt kommt er" sagt, was wirklich passiert.' },

      { art:'wahl',
        bild:{ art:'schild', zeilen:['Das Museum ist montags geschlossen.','Dienstag bis Sonntag 10–18 Uhr.'] },
        frage:'Sie möchten am Dienstag um 9 Uhr hin. Geht das?',
        opt:['Ja, es ist offen','Nein, es öffnet erst um 10 Uhr','Nein, Dienstag ist zu'],
        loesung:1,
        erklaerung:'Dienstag ist offen, aber erst ab 10 Uhr. Um 9 Uhr ist noch geschlossen.' },

      { art:'wahl',
        bild:{ art:'schild', zeilen:['Anna lernt Spanisch und möchte','nächstes Jahr Italienisch anfangen.'] },
        frage:'Welche Sprache lernt Anna jetzt?',
        opt:['Italienisch','Spanisch','Beide'],
        loesung:1,
        erklaerung:'Italienisch ist ein Plan für nächstes Jahr. Jetzt lernt sie Spanisch.' },

      { art:'wahl',
        bild:{ art:'schild', zeilen:['Die Wohnung hat drei Zimmer,','eine Küche und ein Bad.','Ein Balkon fehlt leider.'] },
        frage:'Was hat die Wohnung nicht?',
        opt:['Ein Bad','Einen Balkon','Eine Küche'],
        loesung:1,
        erklaerung:'„fehlt" heißt: ist nicht da. Bad und Küche werden ausdrücklich genannt.' },

      { art:'wahl',
        bild:{ art:'schild', zeilen:['Wir haben nicht nur Kaffee,','sondern auch Kuchen.'] },
        frage:'Was gibt es?',
        opt:['Nur Kaffee','Kaffee und Kuchen','Nur Kuchen'],
        loesung:1,
        erklaerung:'„nicht nur … sondern auch" heißt: beides zusammen.' },

      { art:'wahl',
        bild:{ art:'schild', zeilen:['Der Zug hat 15 Minuten Verspätung.','Ankunft nun 14.20 Uhr.'] },
        frage:'Wann wäre der Zug pünktlich angekommen?',
        opt:['Um 14.05 Uhr','Um 14.20 Uhr','Um 14.35 Uhr'],
        loesung:0,
        erklaerung:'Die neue Ankunft ist 14.20 Uhr, 15 Minuten später als geplant. Geplant war also 14.05 Uhr.' },

      { art:'wahl',
        bild:{ art:'schild', zeilen:['Kinder unter 6 Jahren','zahlen keinen Eintritt.'] },
        frage:'Ihr Kind ist 6 Jahre alt. Was zahlen Sie?',
        opt:['Nichts','Den Eintritt','Die Hälfte'],
        loesung:1,
        erklaerung:'„unter 6" heißt bis 5 Jahre. Mit genau 6 Jahren zahlt das Kind schon.' },

      { art:'wahl',
        bild:{ art:'schild', zeilen:['Bitte melden Sie sich bei Frau Kern.','Sie ist ab Mittwoch wieder im Haus.'] },
        frage:'Wann können Sie Frau Kern sprechen?',
        opt:['Am Montag','Ab Mittwoch','Nie'],
        loesung:1,
        erklaerung:'„ab Mittwoch wieder im Haus" heißt: vorher ist sie nicht da.' },

      { art:'wahl',
        bild:{ art:'schild', zeilen:['Das Fahrrad ist gebraucht,','aber in gutem Zustand.'] },
        frage:'Was stimmt?',
        opt:['Das Fahrrad ist neu.','Das Fahrrad ist alt, aber in Ordnung.','Das Fahrrad ist kaputt.'],
        loesung:1,
        erklaerung:'„gebraucht" ist das Gegenteil von neu. „In gutem Zustand" heißt: es funktioniert gut.' },

      { art:'wahl',
        bild:{ art:'schild', zeilen:['Wir suchen eine Aushilfe','für samstags.'] },
        frage:'An welchem Tag soll man arbeiten?',
        opt:['Jeden Tag','Nur am Samstag','Am Sonntag'],
        loesung:1,
        erklaerung:'„für samstags" nennt genau einen Tag: den Samstag.' },

      { art:'wahl',
        bild:{ art:'schild', zeilen:['Der Deutschkurs findet statt,','wenn mindestens acht Personen kommen.'] },
        frage:'Sieben Personen melden sich an. Was passiert?',
        opt:['Der Kurs findet statt','Der Kurs findet nicht statt','Der Kurs wird teurer'],
        loesung:1,
        erklaerung:'„mindestens acht" heißt: acht oder mehr. Sieben sind zu wenig.' }
    ] }

  ],

  teile: [],
  laeufe: []
};
/* ---------- TEIL 1 — Zeitungstext, fünf Fragen a/b/c ---------- */
window.LESEN_A2.teile.push({
  nr:1, art:'textwahl', name:'Zeitungstext',
  was:'Du liest einen kurzen Zeitungstext und beantwortest fünf Fragen. Immer drei Antworten, eine ist richtig.',
  kurz:'Ein Zeitungstext, fünf Fragen', zeichen:'📰', farbe:'turq',
  tipp:'Lies zuerst den ganzen Text einmal ruhig durch. Erst dann die Fragen. Die Fragen kommen in der Reihenfolge des Textes — Frage 1 gehört zum Anfang, Frage 5 zum Schluss.',
  runden:[

  { id:'t1r1',
    text:{ sorte:'zeitung', quelle:'Hagener Wochenblatt', titel:'Ein Bus, der zum Buchladen wird',
      zeilen:[
        'Seit April fährt in Hagen ein alter Linienbus über die Dörfer. Innen stehen keine Sitze mehr, sondern Regale mit über zweitausend Büchern. Die Idee hatte die Bibliothekarin Sabine Kruse, 52.',
        '„In vielen kleinen Orten gibt es keine Bibliothek mehr", sagt Kruse. „Die Menschen müssen dann mit dem Auto in die Stadt fahren. Wer kein Auto hat, hat Pech." Also fährt jetzt die Bibliothek zu den Menschen.',
        'Der Bus hält an sieben Stellen, jede Woche einmal, immer am selben Wochentag. Am beliebtesten ist der Halt vor der Grundschule: Dort warten am Donnerstagnachmittag oft dreißig Kinder.',
        'Das Ausleihen ist kostenlos. Nur wer ein Buch zu spät zurückbringt, zahlt fünfzig Cent pro Woche. „Das passiert selten", sagt Kruse und lacht. „Die Leute wissen ja, dass der Bus nächste Woche wiederkommt."'
      ] },
    aufgaben:[
      { frage:'Was ist in dem Bus?',
        opt:['Sitze für Fahrgäste','Regale mit Büchern','Ein kleines Café'],
        loesung:1, stelle:'sondern Regale mit über zweitausend Büchern',
        erklaerung:'Im Text steht: „Innen stehen keine Sitze mehr, sondern Regale mit über zweitausend Büchern."' },
      { frage:'Warum hatte Sabine Kruse diese Idee?',
        opt:['In kleinen Orten gibt es keine Bibliothek mehr.','Sie wollte einen alten Bus kaufen.','Die Stadtbibliothek war zu voll.'],
        loesung:0, stelle:'In vielen kleinen Orten gibt es keine Bibliothek mehr',
        erklaerung:'Kruse sagt selbst den Grund: In den Dörfern fehlt eine Bibliothek, und nicht jeder hat ein Auto.' },
      { frage:'Wie oft kommt der Bus an einen Halt?',
        opt:['Jeden Tag','Einmal pro Woche','Einmal im Monat'],
        loesung:1, stelle:'jede Woche einmal, immer am selben Wochentag',
        erklaerung:'„jede Woche einmal, immer am selben Wochentag" — der Bus kommt also wöchentlich.' },
      { frage:'Was kostet das Ausleihen?',
        opt:['Nichts','Fünfzig Cent pro Buch','Fünfzig Cent pro Woche'],
        loesung:0, stelle:'Das Ausleihen ist kostenlos',
        erklaerung:'Ausleihen ist gratis. Die fünfzig Cent zahlt man nur, wenn man ein Buch zu spät zurückbringt.' },
      { frage:'Was sagt Frau Kruse über zu spät zurückgebrachte Bücher?',
        opt:['Das ist ein großes Problem.','Das kommt fast nie vor.','Dafür gibt es keine Regel.'],
        loesung:1, stelle:'Das passiert selten',
        erklaerung:'„Das passiert selten", sagt Kruse — also fast nie.' }
    ] },

  { id:'t1r2',
    text:{ sorte:'zeitung', quelle:'Regionalzeitung Nord', titel:'Mit 61 Jahren noch einmal Schule',
      zeilen:[
        'Als Ali Demir vor vierzig Jahren nach Deutschland kam, arbeitete er sofort. Erst in einer Fabrik, später als Fahrer. Für einen Schulabschluss war nie Zeit. „Ich hatte drei Kinder. Ich musste Geld verdienen", sagt er.',
        'Seit einem Jahr ist Demir in Rente. Und geht wieder zur Schule. Zweimal in der Woche sitzt er abends an der Volkshochschule und bereitet sich auf den Hauptschulabschluss vor. Er ist der älteste in der Klasse. Die jüngste Mitschülerin ist 17.',
        'Am schwersten fällt ihm Mathematik. „Deutsch kann ich, ich rede seit vierzig Jahren", sagt er. „Aber Prozentrechnen — das ist neu für mich." Seine Tochter, die Lehrerin ist, übt am Wochenende mit ihm.',
        'Im Juni ist die Prüfung. Was danach kommt, weiß er noch nicht. „Vielleicht mache ich gar nichts damit", sagt Demir. „Aber ich möchte das Papier haben. Für mich."'
      ] },
    aufgaben:[
      { frage:'Warum hat Herr Demir früher keinen Schulabschluss gemacht?',
        opt:['Er hatte keine Lust.','Er musste für seine Familie Geld verdienen.','Es gab keine Schule für ihn.'],
        loesung:1, stelle:'Ich hatte drei Kinder. Ich musste Geld verdienen',
        erklaerung:'Er sagt selbst: drei Kinder, er musste arbeiten. Von fehlender Lust steht nichts im Text.' },
      { frage:'Wann geht Herr Demir zur Schule?',
        opt:['Jeden Vormittag','Zweimal pro Woche am Abend','Nur am Wochenende'],
        loesung:1, stelle:'Zweimal in der Woche sitzt er abends an der Volkshochschule',
        erklaerung:'Zweimal pro Woche, abends, an der Volkshochschule. Am Wochenende übt er nur mit seiner Tochter.' },
      { frage:'Welches Fach ist für ihn am schwersten?',
        opt:['Deutsch','Mathematik','Englisch'],
        loesung:1, stelle:'Am schwersten fällt ihm Mathematik',
        erklaerung:'Deutsch kann er gut, weil er seit vierzig Jahren hier lebt. Schwer ist Mathematik.' },
      { frage:'Wer hilft ihm beim Lernen?',
        opt:['Seine Tochter','Sein Lehrer','Eine Mitschülerin'],
        loesung:0, stelle:'Seine Tochter, die Lehrerin ist, übt am Wochenende mit ihm',
        erklaerung:'Seine Tochter ist Lehrerin und übt am Wochenende mit ihm.' },
      { frage:'Was möchte Herr Demir mit dem Abschluss machen?',
        opt:['Er möchte einen neuen Beruf lernen.','Das weiß er noch nicht, er will ihn einfach haben.','Er möchte studieren.'],
        loesung:1, stelle:'Vielleicht mache ich gar nichts damit',
        erklaerung:'Er sagt: vielleicht macht er gar nichts damit. Er will das Papier für sich selbst.' }
    ] },

  { id:'t1r3',
    text:{ sorte:'zeitung', quelle:'Stadtanzeiger', titel:'Warum der neue Spielplatz so lange dauerte',
      zeilen:[
        'Vier Jahre haben die Eltern aus der Ostsiedlung gewartet. Am Samstag wurde der neue Spielplatz endlich eröffnet. Über hundert Menschen kamen, es gab Kuchen und Musik.',
        'Geplant war die Eröffnung schon für 2022. Dann fand man im Boden alte Rohre. Die mussten erst heraus. Danach fehlten Handwerker, später fehlte das Holz für die Schaukeln.',
        'Bezahlt hat die Stadt nur die Hälfte. Die andere Hälfte kam von den Familien selbst: Sie verkauften zwei Jahre lang auf Festen Waffeln und sammelten so 18 000 Euro.',
        '„Manchmal wollten wir aufgeben", sagt Nadine Prinz, die die Elterngruppe leitet. „Aber jedes Mal, wenn wir die Kinder auf der Straße spielen sahen, haben wir weitergemacht."',
        'Der Spielplatz ist täglich von 8 bis 20 Uhr offen. Hunde dürfen nicht mit hinein.'
      ] },
    aufgaben:[
      { frage:'Was war der erste Grund für die Verspätung?',
        opt:['Es fehlte Geld.','Man fand alte Rohre im Boden.','Es gab keine Handwerker.'],
        loesung:1, stelle:'Dann fand man im Boden alte Rohre',
        erklaerung:'Die Reihenfolge im Text ist wichtig: zuerst die Rohre, danach fehlten Handwerker und Holz.' },
      { frage:'Wer hat den Spielplatz bezahlt?',
        opt:['Nur die Stadt','Nur die Familien','Die Stadt und die Familien zusammen'],
        loesung:2, stelle:'Bezahlt hat die Stadt nur die Hälfte',
        erklaerung:'Die Stadt zahlte die Hälfte, die Familien sammelten die andere Hälfte.' },
      { frage:'Wie haben die Familien Geld gesammelt?',
        opt:['Sie haben Waffeln verkauft.','Sie haben Kuchen gebacken und verschenkt.','Sie haben bei der Stadt einen Antrag gestellt.'],
        loesung:0, stelle:'Sie verkauften zwei Jahre lang auf Festen Waffeln',
        erklaerung:'Zwei Jahre lang Waffeln auf Festen — so kamen 18 000 Euro zusammen.' },
      { frage:'Was sagt Frau Prinz über die lange Zeit?',
        opt:['Sie wollten nie aufgeben.','Manchmal wollten sie aufhören, machten aber weiter.','Sie waren nie unsicher.'],
        loesung:1, stelle:'Manchmal wollten wir aufgeben',
        erklaerung:'Sie sagt beides: manchmal wollten sie aufgeben — aber sie machten trotzdem weiter.' },
      { frage:'Was ist auf dem Spielplatz verboten?',
        opt:['Musik','Hunde','Fahrräder'],
        loesung:1, stelle:'Hunde dürfen nicht mit hinein',
        erklaerung:'Im letzten Satz steht klar: Hunde dürfen nicht mit hinein.' }
    ] },

  { id:'t1r4',
    text:{ sorte:'zeitung', quelle:'Berufsjournal', titel:'Sie repariert, was andere wegwerfen',
      zeilen:[
        'Jeden ersten Samstag im Monat öffnet in der Gemeindehalle das Repair-Café. Menschen bringen kaputte Toaster, Lampen und Jacken mit. Und gehen meistens mit heilen Sachen wieder nach Hause.',
        'Eine der Helferinnen ist Marta Nowak. Sie ist gelernte Schneiderin und näht seit zwanzig Jahren. Heute sitzt sie an einem Tisch mit drei Nähmaschinen. „Die meisten Hosen sind nicht kaputt", sagt sie. „Es fehlt nur ein Knopf."',
        'Das Repair-Café verlangt kein Geld. Wer möchte, gibt eine Spende in eine Dose an der Tür. Davon kauft das Team Werkzeug und Ersatzteile.',
        'Reparieren müssen die Besucher selbst — die Helfer zeigen nur, wie es geht. „Sonst lernt ja niemand etwas", sagt Nowak. „Beim zweiten Mal schaffen die meisten es allein."'
      ] },
    aufgaben:[
      { frage:'Wann findet das Repair-Café statt?',
        opt:['Jeden Samstag','Einmal im Monat','Jeden Tag'],
        loesung:1, stelle:'Jeden ersten Samstag im Monat',
        erklaerung:'„Jeden ersten Samstag im Monat" heißt: einmal pro Monat, nicht jeden Samstag.' },
      { frage:'Was war Marta Nowak von Beruf?',
        opt:['Schneiderin','Lehrerin','Verkäuferin'],
        loesung:0, stelle:'Sie ist gelernte Schneiderin',
        erklaerung:'Im Text steht: „Sie ist gelernte Schneiderin und näht seit zwanzig Jahren."' },
      { frage:'Was ist bei den meisten Hosen kaputt?',
        opt:['Der Stoff','Meistens fehlt nur ein Knopf.','Der Reißverschluss'],
        loesung:1, stelle:'Es fehlt nur ein Knopf',
        erklaerung:'Frau Nowak sagt: die Hosen sind meist gar nicht kaputt, es fehlt nur ein Knopf.' },
      { frage:'Was kostet die Reparatur?',
        opt:['Nichts, aber man kann spenden.','Fünf Euro pro Gerät','Das Material muss man bezahlen.'],
        loesung:0, stelle:'Das Repair-Café verlangt kein Geld',
        erklaerung:'Es kostet nichts. Eine Spende ist freiwillig — „wer möchte".' },
      { frage:'Wer repariert die Sachen?',
        opt:['Die Helfer','Die Besucher selbst, mit Hilfe','Eine Firma'],
        loesung:1, stelle:'Reparieren müssen die Besucher selbst',
        erklaerung:'Die Helfer zeigen nur, wie es geht. Machen muss es jeder selbst — damit man es lernt.' }
    ] },

  { id:'t1r5',
    text:{ sorte:'zeitung', quelle:'Wochenkurier', titel:'Ein Jahr ohne Auto — ein Bericht',
      zeilen:[
        'Familie Ternes aus Bochum hat vor einem Jahr ihr Auto verkauft. Nicht, weil sie kein Geld mehr hatte. Sondern weil das Auto meistens nur vor dem Haus stand.',
        '„Wir haben gerechnet", sagt Jens Ternes. „Versicherung, Werkstatt, Benzin — im Jahr fast 4000 Euro. Und gefahren sind wir vielleicht dreimal pro Woche."',
        'Heute fahren die beiden Kinder mit dem Rad zur Schule, die Eltern mit Bus und Bahn zur Arbeit. Für größere Einkäufe und Ausflüge mietet die Familie ein Auto — das kostet im Jahr etwa 900 Euro.',
        'Schwer war der Anfang im Winter. „Bei Regen am Bahnsteig zu stehen, macht keinen Spaß", sagt Ternes. „Aber nach zwei Monaten war es normal."',
        'Zurück zum eigenen Auto möchte die Familie nicht. Nur einen Wunsch hat Jens Ternes an die Stadt: „Mehr überdachte Fahrradstellplätze. Das wäre schon viel."'
      ] },
    aufgaben:[
      { frage:'Warum hat die Familie das Auto verkauft?',
        opt:['Sie hatte kein Geld mehr.','Das Auto stand meistens nur herum.','Das Auto war kaputt.'],
        loesung:1, stelle:'weil das Auto meistens nur vor dem Haus stand',
        erklaerung:'Der Text sagt ausdrücklich: „Nicht, weil sie kein Geld mehr hatte." Der Grund war, dass es kaum benutzt wurde.' },
      { frage:'Wie viel kostete das eigene Auto im Jahr?',
        opt:['Etwa 900 Euro','Etwa 4000 Euro','Etwa 400 Euro'],
        loesung:1, stelle:'im Jahr fast 4000 Euro',
        erklaerung:'Fast 4000 Euro im Jahr für das eigene Auto. Die 900 Euro sind die Kosten für die Mietwagen heute.' },
      { frage:'Wie kommen die Kinder heute zur Schule?',
        opt:['Mit dem Rad','Mit dem Bus','Die Eltern bringen sie.'],
        loesung:0, stelle:'die beiden Kinder mit dem Rad zur Schule',
        erklaerung:'Die Kinder fahren Rad, die Eltern nehmen Bus und Bahn.' },
      { frage:'Was war am Anfang schwierig?',
        opt:['Die Kosten','Das Warten bei schlechtem Wetter','Die langen Wege'],
        loesung:1, stelle:'Bei Regen am Bahnsteig zu stehen, macht keinen Spaß',
        erklaerung:'Schwer war der Winter: am Bahnsteig im Regen warten. Nach zwei Monaten war es normal.' },
      { frage:'Was wünscht sich Herr Ternes?',
        opt:['Billigere Fahrkarten','Fahrradstellplätze mit Dach','Ein neues Auto'],
        loesung:1, stelle:'Mehr überdachte Fahrradstellplätze',
        erklaerung:'Sein einziger Wunsch an die Stadt sind überdachte Fahrradstellplätze.' }
    ] }

  ]
});
/* ---------- TEIL 2 — Eine Übersicht lesen, fünf Situationen ---------- */
window.LESEN_A2.teile.push({
  nr:2, art:'uebersicht', name:'Übersicht lesen',
  was:'Ein Plan, ein Programm, eine Liste. Du liest eine Situation und suchst die passende Zeile.',
  kurz:'Ein Plan, fünf Situationen', zeichen:'🗂️', farbe:'gold',
  tipp:'Lies zuerst die Situation, nicht die Übersicht. Such dann in der Übersicht nach dem einen Wort, das dazu passt: Schlüssel, Kinder, Kasse. Ein Wort reicht meistens.',
  runden:[

  { id:'t2r1',
    tafel:{ titel:'Kaufhaus Sterngalerie — Wegweiser', zeilen:[
      { k:'Untergeschoss', v:'Lebensmittel, Getränke, Bäckerei, Schlüsseldienst' },
      { k:'Erdgeschoss',   v:'Parfüm, Schmuck, Zeitungen, Information, Geldautomat' },
      { k:'1. Etage',      v:'Damenmode, Schuhe, Taschen, Änderungsschneiderei' },
      { k:'2. Etage',      v:'Herrenmode, Sportartikel, Koffer' },
      { k:'3. Etage',      v:'Kinderkleidung, Spielwaren, Wickelraum' },
      { k:'4. Etage',      v:'Haushaltswaren, Elektro, Café mit Terrasse' }
    ] },
    aufgaben:[
      { situation:'Sie brauchen einen zweiten Schlüssel für Ihre Wohnungstür.',
        opt:['Untergeschoss','Erdgeschoss','1. Etage'], loesung:0, stelle:'Schlüsseldienst',
        erklaerung:'Der Schlüsseldienst steht im Untergeschoss — dort, wo auch die Lebensmittel sind.' },
      { situation:'Ihre neue Hose ist zu lang. Sie soll kürzer gemacht werden.',
        opt:['2. Etage','1. Etage','4. Etage'], loesung:1, stelle:'Änderungsschneiderei',
        erklaerung:'Kleidung ändern lassen: Änderungsschneiderei, 1. Etage.' },
      { situation:'Ihr Baby braucht eine frische Windel.',
        opt:['3. Etage','Untergeschoss','Erdgeschoss'], loesung:0, stelle:'Wickelraum',
        erklaerung:'Der Wickelraum ist in der 3. Etage bei der Kinderkleidung.' },
      { situation:'Sie möchten Geld abheben.',
        opt:['4. Etage','Erdgeschoss','2. Etage'], loesung:1, stelle:'Geldautomat',
        erklaerung:'Der Geldautomat steht im Erdgeschoss, bei der Information.' },
      { situation:'Sie suchen einen Koffer für Ihre Reise.',
        opt:['2. Etage','3. Etage','1. Etage'], loesung:0, stelle:'Koffer',
        erklaerung:'Koffer stehen in der 2. Etage bei Herrenmode und Sportartikeln.' }
    ] },

  { id:'t2r2',
    tafel:{ titel:'Volkshochschule Hagen — Kurse im Herbst', zeilen:[
      { k:'Kurs A', v:'Deutsch für den Beruf, B1 — dienstags 18–20 Uhr, 12 Abende' },
      { k:'Kurs B', v:'Nähen für Anfänger — samstags 10–13 Uhr, 6 Termine' },
      { k:'Kurs C', v:'Computer für Ältere — montags und mittwochs 9–11 Uhr' },
      { k:'Kurs D', v:'Rückenfit — donnerstags 19–20 Uhr, mit Kinderbetreuung' },
      { k:'Kurs E', v:'Fotografieren mit dem Handy — Wochenende, 2 Tage' },
      { k:'Kurs F', v:'Bewerbung schreiben — freitags 17–19 Uhr, 4 Termine' }
    ] },
    aufgaben:[
      { situation:'Sie arbeiten unter der Woche und haben nur am Wochenende Zeit. Sie möchten etwas mit den Händen machen.',
        opt:['Kurs B','Kurs E','Kurs D'], loesung:0, stelle:'Nähen für Anfänger — samstags 10–13 Uhr, 6 Termine',
        erklaerung:'Kurs B ist samstags und man arbeitet mit den Händen. Kurs E ist auch am Wochenende, aber dort fotografiert man.' },
      { situation:'Sie suchen Arbeit und wissen nicht, wie man einen guten Lebenslauf schreibt.',
        opt:['Kurs A','Kurs F','Kurs C'], loesung:1, stelle:'Bewerbung schreiben',
        erklaerung:'Kurs F heißt „Bewerbung schreiben" — genau das ist gesucht.' },
      { situation:'Sie haben ein kleines Kind und niemanden, der abends darauf aufpasst.',
        opt:['Kurs D','Kurs A','Kurs F'], loesung:0, stelle:'mit Kinderbetreuung',
        erklaerung:'Nur bei Kurs D steht „mit Kinderbetreuung".' },
      { situation:'Ihre Mutter ist 70 und möchte lernen, E-Mails zu schreiben. Vormittags hat sie Zeit.',
        opt:['Kurs E','Kurs C','Kurs B'], loesung:1, stelle:'Computer für Ältere — montags und mittwochs 9–11 Uhr',
        erklaerung:'Kurs C ist für Ältere und findet vormittags statt.' },
      { situation:'Sie sprechen schon gut Deutsch und möchten die Sprache für Ihre Arbeit verbessern.',
        opt:['Kurs A','Kurs F','Kurs C'], loesung:0, stelle:'Deutsch für den Beruf, B1',
        erklaerung:'Kurs A ist Deutsch für den Beruf auf B1 — für Menschen, die schon Deutsch können.' }
    ] },

  { id:'t2r3',
    tafel:{ titel:'Gesundheitszentrum am Park — Sprechzeiten', zeilen:[
      { k:'Dr. Ahlers',    v:'Hausärztin — Mo, Di, Do 8–12 Uhr, Mi 15–18 Uhr' },
      { k:'Dr. Bilir',     v:'Zahnarzt — Mo–Fr 9–13 Uhr, Notdienst am Wochenende' },
      { k:'Frau Costa',    v:'Physiotherapie — nur nach Vereinbarung' },
      { k:'Dr. Ehlert',    v:'Kinderärztin — Mo–Fr 8–11 Uhr, Impftermine dienstags' },
      { k:'Frau Görtz',    v:'Hebamme — Beratung freitags 14–17 Uhr, ohne Termin' },
      { k:'Apotheke',      v:'Mo–Sa 8–19 Uhr, Lieferung nach Hause möglich' }
    ] },
    aufgaben:[
      { situation:'Es ist Sonntag und Ihr Zahn tut sehr weh.',
        opt:['Dr. Ahlers','Dr. Bilir','Apotheke'], loesung:1, stelle:'Notdienst am Wochenende',
        erklaerung:'Nur beim Zahnarzt Dr. Bilir steht ein Notdienst am Wochenende.' },
      { situation:'Ihr Sohn soll seine Impfung bekommen.',
        opt:['Dr. Ehlert','Dr. Ahlers','Frau Görtz'], loesung:0, stelle:'Impftermine dienstags',
        erklaerung:'Die Kinderärztin Dr. Ehlert impft dienstags.' },
      { situation:'Sie sind schwanger und möchten Fragen stellen, haben aber keinen Termin.',
        opt:['Frau Costa','Frau Görtz','Dr. Ahlers'], loesung:1, stelle:'Beratung freitags 14–17 Uhr, ohne Termin',
        erklaerung:'Die Hebamme Frau Görtz berät freitags ohne Termin.' },
      { situation:'Sie können nur am Mittwochnachmittag zum Hausarzt.',
        opt:['Dr. Ahlers','Dr. Bilir','Dr. Ehlert'], loesung:0, stelle:'Mi 15–18 Uhr',
        erklaerung:'Dr. Ahlers ist Hausärztin und hat mittwochs von 15 bis 18 Uhr Sprechstunde.' },
      { situation:'Ihre Großmutter kann nicht mehr gut laufen und braucht ihre Medikamente.',
        opt:['Frau Costa','Apotheke','Dr. Ahlers'], loesung:1, stelle:'Lieferung nach Hause möglich',
        erklaerung:'Die Apotheke liefert nach Hause — das passt für jemanden, der nicht kommen kann.' }
    ] },

  { id:'t2r4',
    tafel:{ titel:'Stadtfest am Marktplatz — Programm Samstag', zeilen:[
      { k:'10.00 Uhr', v:'Eröffnung mit dem Bürgermeister, Bühne Mitte' },
      { k:'11.00 Uhr', v:'Flohmarkt für Kinder, Nordseite — Verkaufen ohne Gebühr' },
      { k:'13.00 Uhr', v:'Kochen mit Rezepten aus aller Welt, Zelt am Rathaus' },
      { k:'15.00 Uhr', v:'Führung durch die Altstadt, Treffpunkt Kirche' },
      { k:'17.00 Uhr', v:'Konzert der Musikschule, Bühne Mitte' },
      { k:'20.00 Uhr', v:'Tanzabend, Eintritt 5 Euro, ab 16 Jahren' }
    ] },
    aufgaben:[
      { situation:'Ihre Tochter (9) möchte ihr altes Spielzeug verkaufen.',
        opt:['11.00 Uhr','13.00 Uhr','20.00 Uhr'], loesung:0, stelle:'Flohmarkt für Kinder',
        erklaerung:'Der Kinderflohmarkt ist um 11 Uhr, und Verkaufen kostet nichts.' },
      { situation:'Sie sind neu in der Stadt und möchten sie kennenlernen.',
        opt:['10.00 Uhr','15.00 Uhr','17.00 Uhr'], loesung:1, stelle:'Führung durch die Altstadt',
        erklaerung:'Die Altstadtführung um 15 Uhr ist genau richtig, um die Stadt kennenzulernen.' },
      { situation:'Sie interessieren sich für Essen aus anderen Ländern.',
        opt:['13.00 Uhr','11.00 Uhr','15.00 Uhr'], loesung:0, stelle:'Kochen mit Rezepten aus aller Welt',
        erklaerung:'Um 13 Uhr wird mit Rezepten aus aller Welt gekocht.' },
      { situation:'Ihr Sohn ist 14 und möchte abends tanzen gehen.',
        opt:['Das geht, um 20 Uhr','Das geht nicht, er ist zu jung','Das geht, aber nur mit Eltern'],
        loesung:1, stelle:'ab 16 Jahren',
        erklaerung:'Der Tanzabend ist erst ab 16 Jahren. Mit 14 darf er nicht hinein.' },
      { situation:'Sie möchten hören, was Kinder und Jugendliche einstudiert haben.',
        opt:['17.00 Uhr','10.00 Uhr','13.00 Uhr'], loesung:0, stelle:'Konzert der Musikschule',
        erklaerung:'Das Konzert der Musikschule um 17 Uhr spielen die Schülerinnen und Schüler.' }
    ] },

  { id:'t2r5',
    tafel:{ titel:'Bürgerbüro Hagen — Wer macht was?', zeilen:[
      { k:'Schalter 1', v:'Anmeldung und Ummeldung der Wohnung' },
      { k:'Schalter 2', v:'Personalausweis und Reisepass, auch Verlängerung' },
      { k:'Schalter 3', v:'Führungszeugnis und Beglaubigungen' },
      { k:'Schalter 4', v:'Kfz-Zulassung, nur mit Termin' },
      { k:'Schalter 5', v:'Wohngeld und Fragen zu Anträgen' },
      { k:'Schalter 6', v:'Kasse — hier bezahlen Sie die Gebühren' }
    ] },
    aufgaben:[
      { situation:'Sie sind gerade in eine neue Wohnung gezogen.',
        opt:['Schalter 1','Schalter 3','Schalter 5'], loesung:0, stelle:'Anmeldung und Ummeldung der Wohnung',
        erklaerung:'Nach einem Umzug meldet man die neue Wohnung an — Schalter 1.' },
      { situation:'Ihr Reisepass läuft nächsten Monat ab.',
        opt:['Schalter 2','Schalter 4','Schalter 6'], loesung:0, stelle:'Personalausweis und Reisepass, auch Verlängerung',
        erklaerung:'Schalter 2 ist für Ausweis und Pass zuständig, auch für die Verlängerung.' },
      { situation:'Ihr neuer Arbeitgeber möchte ein Führungszeugnis von Ihnen.',
        opt:['Schalter 5','Schalter 3','Schalter 1'], loesung:1, stelle:'Führungszeugnis und Beglaubigungen',
        erklaerung:'Das Führungszeugnis bekommt man an Schalter 3.' },
      { situation:'Sie haben ein Auto gekauft und möchten es anmelden.',
        opt:['Schalter 4, aber Sie brauchen einen Termin','Schalter 4, einfach hingehen','Schalter 6'],
        loesung:0, stelle:'Kfz-Zulassung, nur mit Termin',
        erklaerung:'Bei Schalter 4 steht ausdrücklich „nur mit Termin".' },
      { situation:'Sie haben Ihren Ausweis bekommen und sollen jetzt 37 Euro bezahlen.',
        opt:['Schalter 2','Schalter 6','Schalter 5'], loesung:1, stelle:'Kasse — hier bezahlen Sie die Gebühren',
        erklaerung:'Bezahlt wird an der Kasse, Schalter 6.' }
    ] }

  ]
});
/* ---------- TEIL 3 — E-Mail oder Blog, fünf Fragen a/b/c ---------- */
window.LESEN_A2.teile.push({
  nr:3, art:'textwahl', name:'E-Mail verstehen',
  was:'Eine persönliche E-Mail oder ein Blogtext. Fünf Fragen, immer drei Antworten.',
  kurz:'Eine E-Mail, fünf Fragen', zeichen:'✉️', farbe:'turq',
  tipp:'Achte auf Wörter wie „aber", „obwohl", „trotzdem". Sie drehen die Bedeutung um — und genau da wird oft gefragt.',
  runden:[

  { id:'t3r1',
    text:{ sorte:'email', quelle:'Von: lea.hoffmann@web.de', titel:'Endlich angekommen!',
      zeilen:[
        'Liebe Yasmin,',
        'jetzt bin ich seit drei Wochen in Leipzig und schreibe dir endlich. Der Umzug war schrecklich: Der Transporter kam zwei Stunden zu spät, und im neuen Haus war der Aufzug kaputt. Wir haben alles in den vierten Stock getragen. Ich hatte danach drei Tage Muskelkater.',
        'Die Wohnung selbst ist toll. Zwei Zimmer, ein kleiner Balkon nach hinten, und es ist ruhig — obwohl die Straßenbahn nur zwei Minuten entfernt hält. Teurer als in Kassel ist es leider auch: 620 Euro warm statt 480.',
        'Die Arbeit beginnt erst im März, also habe ich noch vier Wochen Zeit. Ich gehe jeden Morgen laufen und habe schon einen Sprachkurs für Spanisch gefunden, dienstags abends. Vielleicht schaffe ich es diesmal wirklich.',
        'Am 12. April habe ich Geburtstag. Kommst du? Du kannst bei mir schlafen, das Sofa ist bequem. Sag mir bitte bis Ende März Bescheid, dann kaufe ich rechtzeitig genug ein.',
        'Ich vermisse dich!',
        'Deine Lea'
      ] },
    aufgaben:[
      { frage:'Warum war der Umzug so anstrengend?',
        opt:['Der Aufzug funktionierte nicht.','Es hat stark geregnet.','Die Möbel waren zu groß.'],
        loesung:0, stelle:'im neuen Haus war der Aufzug kaputt',
        erklaerung:'Der Transporter kam zu spät und der Aufzug war kaputt — deshalb mussten sie alles in den vierten Stock tragen.' },
      { frage:'Was schreibt Lea über die neue Wohnung?',
        opt:['Sie ist laut.','Sie ist ruhig, obwohl die Straßenbahn nah ist.','Sie hat keinen Balkon.'],
        loesung:1, stelle:'und es ist ruhig — obwohl die Straßenbahn nur zwei Minuten entfernt hält',
        erklaerung:'„obwohl" zeigt den Gegensatz: die Bahn ist nah, trotzdem ist es ruhig.' },
      { frage:'Was ist in Leipzig anders als in Kassel?',
        opt:['Die Wohnung ist billiger.','Die Wohnung ist teurer.','Die Wohnung ist gleich teuer.'],
        loesung:1, stelle:'620 Euro warm statt 480',
        erklaerung:'620 Euro statt 480 Euro — also 140 Euro mehr als vorher.' },
      { frage:'Was macht Lea, bevor die Arbeit beginnt?',
        opt:['Sie sucht eine Wohnung.','Sie läuft und lernt Spanisch.','Sie fährt in den Urlaub.'],
        loesung:1, stelle:'Ich gehe jeden Morgen laufen und habe schon einen Sprachkurs für Spanisch gefunden',
        erklaerung:'Sie hat vier Wochen frei und nutzt sie zum Laufen und für den Spanischkurs.' },
      { frage:'Was soll Yasmin tun?',
        opt:['Bis Ende März antworten','Am 12. April anrufen','Ein Geschenk kaufen'],
        loesung:0, stelle:'Sag mir bitte bis Ende März Bescheid',
        erklaerung:'Lea bittet um eine Antwort bis Ende März, damit sie rechtzeitig einkaufen kann.' }
    ] },

  { id:'t3r2',
    text:{ sorte:'blog', quelle:'Blog: Zwei Jahre Pflegeschule', titel:'Mein erster Tag im Nachtdienst',
      zeilen:[
        'Ich hatte großen Respekt vor der ersten Nachtschicht. Zwölf Stunden, von 20 Uhr bis 8 Uhr, und ich war sicher: Ich schlafe im Stehen ein.',
        'Es kam anders. Um 22 Uhr wird es auf der Station still, und genau dann fängt die eigentliche Arbeit an. Wir haben Betten frisch bezogen, Medikamente für den nächsten Tag vorbereitet und alle zwei Stunden nach den Patienten gesehen. Müde war ich erst gegen fünf Uhr morgens.',
        'Das Schönste war ein Gespräch um drei Uhr nachts. Frau K., 84 Jahre alt, konnte nicht schlafen. Wir haben eine halbe Stunde über ihren Garten geredet. So etwas gibt es tagsüber nie — da ist immer zu viel los.',
        'Schwierig fand ich den Weg nach Hause. Alle anderen fahren morgens zur Arbeit, und ich saß mit meinen müden Augen im vollen Bus.',
        'Nächste Woche habe ich wieder Nachtdienst. Diesmal ohne Angst.'
      ] },
    aufgaben:[
      { frage:'Wie lange dauert eine Nachtschicht?',
        opt:['Acht Stunden','Zwölf Stunden','Sechs Stunden'],
        loesung:1, stelle:'Zwölf Stunden, von 20 Uhr bis 8 Uhr',
        erklaerung:'Von 20 Uhr bis 8 Uhr sind zwölf Stunden.' },
      { frage:'Wann beginnt für sie die eigentliche Arbeit?',
        opt:['Sofort um 20 Uhr','Wenn es still wird, gegen 22 Uhr','Erst am Morgen'],
        loesung:1, stelle:'Um 22 Uhr wird es auf der Station still, und genau dann fängt die eigentliche Arbeit an',
        erklaerung:'Erst wenn die Station ruhig ist, beginnt die Arbeit: Betten, Medikamente, Kontrollgänge.' },
      { frage:'Wann wurde sie müde?',
        opt:['Schon um Mitternacht','Erst gegen fünf Uhr','Gar nicht'],
        loesung:1, stelle:'Müde war ich erst gegen fünf Uhr morgens',
        erklaerung:'Sie hatte erwartet, sofort müde zu werden — es kam aber erst gegen fünf Uhr.' },
      { frage:'Warum war das Gespräch mit Frau K. besonders?',
        opt:['Tagsüber ist dafür keine Zeit.','Frau K. war krank.','Es war ein Gespräch über die Arbeit.'],
        loesung:0, stelle:'So etwas gibt es tagsüber nie — da ist immer zu viel los',
        erklaerung:'Nachts ist Ruhe. Tagsüber ist zu viel los für ein langes, ruhiges Gespräch.' },
      { frage:'Was war für sie unangenehm?',
        opt:['Die Fahrt nach Hause am Morgen','Die Patienten','Das Vorbereiten der Medikamente'],
        loesung:0, stelle:'Schwierig fand ich den Weg nach Hause',
        erklaerung:'Müde im vollen Bus, während alle anderen zur Arbeit fahren.' }
    ] },

  { id:'t3r3',
    text:{ sorte:'email', quelle:'Von: hausverwaltung-lohmann@t-online.de', titel:'Information für alle Mieterinnen und Mieter',
      zeilen:[
        'Sehr geehrte Mieterinnen und Mieter,',
        'ab Montag, dem 6. Mai, wird das Dach unseres Hauses neu gedeckt. Die Arbeiten dauern voraussichtlich vier Wochen. Wir bitten Sie schon jetzt um Verständnis für den Lärm zwischen 7 und 17 Uhr.',
        'In dieser Zeit können Sie den Hof leider nicht benutzen. Die Fahrräder stellen Sie bitte bis zum 3. Mai in den Keller. Fahrräder, die danach noch im Hof stehen, müssen wir leider entfernen.',
        'Die Waschküche bleibt normal geöffnet. Der Trockenplatz im Hof steht Ihnen aber erst wieder ab Juni zur Verfügung.',
        'Falls Sie tagsüber zu Hause arbeiten und der Lärm ein Problem ist, sprechen Sie uns bitte an. Wir können Ihnen für einzelne Tage einen Raum im Gemeinschaftshaus anbieten.',
        'Bei Fragen erreichen Sie mich montags und donnerstags von 9 bis 12 Uhr unter 02331 445566.',
        'Mit freundlichen Grüßen',
        'A. Lohmann, Hausverwaltung'
      ] },
    aufgaben:[
      { frage:'Wie lange dauern die Arbeiten?',
        opt:['Vier Tage','Etwa vier Wochen','Bis Juni oder länger'],
        loesung:1, stelle:'Die Arbeiten dauern voraussichtlich vier Wochen',
        erklaerung:'„voraussichtlich vier Wochen" heißt: geplant sind vier Wochen.' },
      { frage:'Was sollen die Mieter mit ihren Fahrrädern machen?',
        opt:['Bis zum 3. Mai in den Keller stellen','Vor dem Haus abstellen','Verkaufen'],
        loesung:0, stelle:'Die Fahrräder stellen Sie bitte bis zum 3. Mai in den Keller',
        erklaerung:'Der 3. Mai ist der letzte Tag. Danach werden die Räder aus dem Hof entfernt.' },
      { frage:'Was ist während der Arbeiten weiter möglich?',
        opt:['Wäsche im Hof trocknen','Die Waschküche benutzen','Im Hof parken'],
        loesung:1, stelle:'Die Waschküche bleibt normal geöffnet',
        erklaerung:'Die Waschküche bleibt offen. Der Trockenplatz im Hof erst wieder ab Juni.' },
      { frage:'Was bietet die Hausverwaltung Menschen im Homeoffice an?',
        opt:['Weniger Miete','Einen Raum im Gemeinschaftshaus','Andere Arbeitszeiten'],
        loesung:1, stelle:'einen Raum im Gemeinschaftshaus anbieten',
        erklaerung:'Für einzelne Tage kann man einen Raum im Gemeinschaftshaus bekommen.' },
      { frage:'Wann kann man Frau Lohmann anrufen?',
        opt:['Jeden Tag von 9 bis 12 Uhr','Montags und donnerstags vormittags','Nur nach 17 Uhr'],
        loesung:1, stelle:'montags und donnerstags von 9 bis 12 Uhr',
        erklaerung:'Nur an zwei Tagen in der Woche, jeweils vormittags.' }
    ] },

  { id:'t3r4',
    text:{ sorte:'email', quelle:'Von: t.oksana@gmail.com', titel:'Re: Deine Frage wegen dem Praktikum',
      zeilen:[
        'Hallo Samir,',
        'schön, dass du dich meldest! Klar erzähle ich dir von meinem Praktikum.',
        'Ich war acht Wochen in einem Kindergarten, vier Stunden am Tag. Bezahlt wurde ich nicht, aber das Mittagessen war umsonst. Am Anfang habe ich nur zugeschaut, nach zwei Wochen durfte ich eine kleine Gruppe allein betreuen.',
        'Was mich überrascht hat: Die Arbeit ist körperlich anstrengend. Man steht, hebt Kinder hoch, sitzt auf kleinen Stühlen. Abends tat mir wirklich der Rücken weh. Damit hatte ich nicht gerechnet.',
        'Die Bewerbung war einfach: Ich habe angerufen und bin am nächsten Tag zum Gespräch gegangen. Ein Führungszeugnis brauchst du aber unbedingt, und das dauert zwei bis drei Wochen. Kümmere dich früh genug darum!',
        'Wenn du willst, gebe ich dir die Nummer von meiner Anleiterin. Sie sucht immer Praktikanten.',
        'Viele Grüße, Oksana'
      ] },
    aufgaben:[
      { frage:'Wie lange dauerte das Praktikum?',
        opt:['Vier Wochen','Acht Wochen','Zwei Wochen'],
        loesung:1, stelle:'Ich war acht Wochen in einem Kindergarten',
        erklaerung:'Acht Wochen lang, jeweils vier Stunden am Tag.' },
      { frage:'Was hat Oksana bekommen?',
        opt:['Geld','Kostenloses Mittagessen','Beides'],
        loesung:1, stelle:'Bezahlt wurde ich nicht, aber das Mittagessen war umsonst',
        erklaerung:'Geld gab es nicht. Nur das Mittagessen war umsonst.' },
      { frage:'Was hat sie nicht erwartet?',
        opt:['Dass die Arbeit körperlich anstrengend ist','Dass die Kinder laut sind','Dass sie so früh anfangen muss'],
        loesung:0, stelle:'Die Arbeit ist körperlich anstrengend',
        erklaerung:'„Damit hatte ich nicht gerechnet" bezieht sich auf die körperliche Anstrengung.' },
      { frage:'Was rät Oksana ihrem Freund?',
        opt:['Sich früh um das Führungszeugnis zu kümmern','Sich schriftlich zu bewerben','Zuerst einen Kurs zu machen'],
        loesung:0, stelle:'Kümmere dich früh genug darum',
        erklaerung:'Das Führungszeugnis dauert zwei bis drei Wochen — deshalb der Rat, früh anzufangen.' },
      { frage:'Was bietet Oksana an?',
        opt:['Sie kommt zum Gespräch mit.','Sie gibt ihm eine Telefonnummer.','Sie schreibt die Bewerbung für ihn.'],
        loesung:1, stelle:'gebe ich dir die Nummer von meiner Anleiterin',
        erklaerung:'Sie bietet die Nummer ihrer Anleiterin an, die immer Praktikanten sucht.' }
    ] },

  { id:'t3r5',
    text:{ sorte:'blog', quelle:'Blog: Angekommen in Deutschland', titel:'Was ich beim ersten Elternabend gelernt habe',
      zeilen:[
        'Als der Brief kam, verstand ich nur das Wort „Elternabend". Ich dachte: Da muss ich nicht hin, ich verstehe sowieso nichts. Meine Nachbarin hat mich überredet mitzukommen.',
        'Es waren zwanzig Eltern da, die Lehrerin sprach schnell. Am Anfang war ich sehr nervös. Aber nach zehn Minuten merkte ich: Ich verstehe mehr, als ich dachte. Klassenfahrt, Kosten, Termine — das sind Wörter, die ich kenne.',
        'Wichtig war für mich ein Satz der Lehrerin: „Wenn Sie etwas nicht verstehen, fragen Sie mich. Auch auf dem Handy." Ich hatte immer Angst, dumme Fragen zu stellen. Sie wollte, dass wir fragen.',
        'Am Ende habe ich mich mit einer anderen Mutter unterhalten. Sie kommt aus Rumänien und ist seit fünf Jahren hier. Jetzt gehen unsere Kinder zusammen zum Fußball.',
        'Mein Rat an alle, die auch Angst haben: Geht hin. Ihr müsst nichts sagen. Aber ihr bekommt so viel mit.'
      ] },
    aufgaben:[
      { frage:'Warum wollte die Autorin zuerst nicht hingehen?',
        opt:['Sie hatte keine Zeit.','Sie dachte, sie versteht nichts.','Der Weg war zu weit.'],
        loesung:1, stelle:'ich verstehe sowieso nichts',
        erklaerung:'Sie hatte Angst, nichts zu verstehen. Die Nachbarin hat sie überredet.' },
      { frage:'Wie ging es ihr nach zehn Minuten?',
        opt:['Sie verstand mehr als gedacht.','Sie ging nach Hause.','Sie war noch nervöser.'],
        loesung:0, stelle:'Ich verstehe mehr, als ich dachte',
        erklaerung:'Nach zehn Minuten merkte sie, dass sie die wichtigen Wörter kennt.' },
      { frage:'Was hat die Lehrerin gesagt?',
        opt:['Die Eltern sollen ruhig sein.','Die Eltern sollen fragen, wenn etwas unklar ist.','Die Eltern sollen Deutsch lernen.'],
        loesung:1, stelle:'Wenn Sie etwas nicht verstehen, fragen Sie mich',
        erklaerung:'Die Lehrerin bittet ausdrücklich darum, Fragen zu stellen — auch per Handy.' },
      { frage:'Was ist am Ende des Abends passiert?',
        opt:['Sie hat eine andere Mutter kennengelernt.','Sie hat sich beschwert.','Sie hat einen Termin bekommen.'],
        loesung:0, stelle:'habe ich mich mit einer anderen Mutter unterhalten',
        erklaerung:'Sie kam mit einer Mutter aus Rumänien ins Gespräch — jetzt spielen die Kinder zusammen Fußball.' },
      { frage:'Was rät sie anderen Eltern?',
        opt:['Zuerst besser Deutsch lernen','Hingehen, auch wenn man nichts sagt','Einen Übersetzer mitnehmen'],
        loesung:1, stelle:'Geht hin. Ihr müsst nichts sagen',
        erklaerung:'Ihr Rat: einfach hingehen. Man muss nichts sagen und bekommt trotzdem viel mit.' }
    ] }

  ]
});
/* ---------- TEIL 4 — Sechs Anzeigen, fünf Situationen, eine passt nie ---------- */
window.LESEN_A2.teile.push({
  nr:4, art:'anzeigenX', name:'Anzeigen zuordnen',
  was:'Sechs Anzeigen a–f. Zu jeder Situation gehört eine Anzeige — oder keine. Dann tippst du x.',
  kurz:'Sechs Anzeigen, fünf Situationen', zeichen:'🔎', farbe:'rot',
  tipp:'Streich in der Situation die eine Bedingung an, auf die es ankommt: kein Auto, abends, mit Hund. Dann such genau diese Bedingung in den Anzeigen. Und denk daran: einmal passt keine.',
  runden:[

  { id:'t4r1',
    anzeigen:[
      { b:'a', quelle:'Sprachschule Lingua', zeilen:['Deutsch A2 am Abend','Dienstag und Donnerstag 18–20 Uhr','8 Wochen, 180 Euro','Einstieg jederzeit möglich'] },
      { b:'b', quelle:'Volkshochschule', zeilen:['Deutsch B1 Intensiv','Montag bis Freitag 9–13 Uhr','Nur mit A2-Zertifikat','Start: 1. September'] },
      { b:'c', quelle:'Nachbarschaftstreff Ost', zeilen:['Sprachcafé — einfach reden','Jeden Mittwoch 16–18 Uhr','Kostenlos, ohne Anmeldung','Kaffee und Kuchen inklusive'] },
      { b:'d', quelle:'Online-Akademie', zeilen:['Deutsch lernen im eigenen Tempo','Videos und Übungen','19 Euro im Monat','Jederzeit kündbar'] },
      { b:'e', quelle:'Frau Berger, privat', zeilen:['Einzelunterricht Deutsch','Bei Ihnen zu Hause','25 Euro pro Stunde','Auch am Wochenende'] },
      { b:'f', quelle:'Bildungswerk', zeilen:['Deutsch für den Beruf B2','Für Pflegekräfte','Vollzeit, 6 Monate','Förderung möglich'] }
    ],
    aufgaben:[
      { situation:'Sie arbeiten tagsüber und möchten zweimal pro Woche abends einen A2-Kurs besuchen.',
        loesung:'a', erklaerung:'Anzeige a ist ein A2-Kurs am Abend, dienstags und donnerstags — genau das passt zur Arbeit am Tag.' },
      { situation:'Sie möchten kein Geld ausgeben und einfach mit Menschen sprechen üben.',
        loesung:'c', erklaerung:'Das Sprachcafé in c ist kostenlos, ohne Anmeldung, und dort wird nur geredet.' },
      { situation:'Sie sind Krankenpflegerin und brauchen Fachdeutsch für Ihren Beruf.',
        loesung:'f', erklaerung:'Anzeige f ist Deutsch für den Beruf B2 speziell für Pflegekräfte.' },
      { situation:'Sie können nur nachts lernen, weil Sie tagsüber Ihr Kind betreuen.',
        loesung:'d', erklaerung:'Nur das Online-Angebot in d lässt sich zu jeder Uhrzeit nutzen — „im eigenen Tempo".' },
      { situation:'Sie suchen einen Kurs, in dem Sie eine Prüfung ablegen können.',
        loesung:'x', erklaerung:'Keine Anzeige bietet eine Prüfung an. Kurse und Unterricht ja — aber von einer Prüfung steht nirgends etwas.' }
    ] },

  { id:'t4r2',
    anzeigen:[
      { b:'a', quelle:'Möbelhaus Reuter', zeilen:['Sofa, 3-sitzig, grau','Neu, mit Garantie','499 Euro','Lieferung 39 Euro'] },
      { b:'b', quelle:'Privat, Kleinanzeige', zeilen:['Sofa gebraucht, gut erhalten','Muss abgeholt werden','80 Euro VB','Nur Barzahlung'] },
      { b:'c', quelle:'Sozialkaufhaus', zeilen:['Möbel für wenig Geld','Nur mit Berechtigungsschein','Lieferung im Stadtgebiet gratis','Di–Fr 10–16 Uhr'] },
      { b:'d', quelle:'Tischlerei Wenzel', zeilen:['Wir reparieren Ihre Möbel','Auch Polster neu beziehen','Kostenvoranschlag gratis','Termin nach Vereinbarung'] },
      { b:'e', quelle:'Umzugsservice Kaya', zeilen:['Möbel transportieren','Ab 45 Euro pro Stunde','Auch am Wochenende','Zwei Männer und ein Transporter'] },
      { b:'f', quelle:'Flohmarkt am Hafen', zeilen:['Jeden Sonntag 8–15 Uhr','Standgebühr 12 Euro','Alles darf verkauft werden','Aufbau ab 6 Uhr'] }
    ],
    aufgaben:[
      { situation:'Sie haben wenig Geld und suchen ein günstiges Sofa. Ein Auto haben Sie nicht.',
        loesung:'c', erklaerung:'Das Sozialkaufhaus in c ist günstig und liefert im Stadtgebiet gratis. Das Sofa in b müsste man selbst abholen.' },
      { situation:'Ihr alter Sessel ist noch stabil, aber der Stoff ist kaputt.',
        loesung:'d', erklaerung:'Die Tischlerei in d bezieht Polster neu — der Sessel bleibt, nur der Stoff wird erneuert.' },
      { situation:'Sie ziehen um und brauchen Hilfe beim Tragen und Fahren.',
        loesung:'e', erklaerung:'Anzeige e ist ein Umzugsservice mit zwei Männern und einem Transporter.' },
      { situation:'Sie möchten Ihre alten Sachen selbst verkaufen.',
        loesung:'f', erklaerung:'Auf dem Flohmarkt in f kann man für 12 Euro einen Stand mieten und alles verkaufen.' },
      { situation:'Sie suchen jemanden, der Ihnen beim Aufbauen eines Schranks hilft.',
        loesung:'x', erklaerung:'Aufbauen bietet niemand an. Die Tischlerei repariert, der Umzugsservice transportiert — aber Möbel aufbauen steht nirgends.' }
    ] },

  { id:'t4r3',
    anzeigen:[
      { b:'a', quelle:'Sportverein Grün-Weiß', zeilen:['Fußball für Kinder ab 6','Training Di und Do 17 Uhr','Beitrag 8 Euro im Monat','Erste Stunde zum Probieren'] },
      { b:'b', quelle:'Schwimmbad Nordbad', zeilen:['Schwimmkurs für Anfänger','Kinder von 5 bis 8 Jahren','10 Termine, 95 Euro','Samstags 9–10 Uhr'] },
      { b:'c', quelle:'Musikschule Klang', zeilen:['Instrument ausprobieren','Offener Tag am 14. Mai','Für alle Altersgruppen','Eintritt frei'] },
      { b:'d', quelle:'Familienzentrum', zeilen:['Hausaufgabenhilfe','Montag bis Donnerstag 14–16 Uhr','Kostenlos','Anmeldung im Büro'] },
      { b:'e', quelle:'Ferienprogramm der Stadt', zeilen:['Zwei Wochen Sommerferien','Ausflüge, Basteln, Sport','60 Euro pro Woche','Ermäßigung auf Antrag'] },
      { b:'f', quelle:'Kinderarztpraxis Dr. Sander', zeilen:['Neue Patienten willkommen','Sprechzeiten Mo–Fr 8–11 Uhr','Impfberatung dienstags','Bitte Impfpass mitbringen'] }
    ],
    aufgaben:[
      { situation:'Ihre Tochter ist 7 und kann noch nicht schwimmen.',
        loesung:'b', erklaerung:'Der Schwimmkurs in b ist für Anfänger von 5 bis 8 Jahren.' },
      { situation:'Ihr Sohn kommt mit Mathematik nicht mit und Sie können ihm nicht helfen.',
        loesung:'d', erklaerung:'Die kostenlose Hausaufgabenhilfe in d ist genau dafür da.' },
      { situation:'Sie wissen nicht, was Ihr Kind in den Sommerferien machen soll, weil Sie arbeiten.',
        loesung:'e', erklaerung:'Das Ferienprogramm in e läuft zwei Wochen in den Sommerferien, mit Ermäßigung auf Antrag.' },
      { situation:'Ihr Kind möchte gerne ein Instrument lernen, weiß aber nicht welches.',
        loesung:'c', erklaerung:'Am offenen Tag in c kann man Instrumente ausprobieren, und der Eintritt ist frei.' },
      { situation:'Sie suchen jemanden, der auf Ihr Kind am Abend aufpasst.',
        loesung:'x', erklaerung:'Abendbetreuung bietet keine Anzeige an. Alle Angebote sind am Nachmittag oder am Wochenende.' }
    ] },

  { id:'t4r4',
    anzeigen:[
      { b:'a', quelle:'Pflegedienst Sonnenblick', zeilen:['Wir suchen Pflegehelfer/innen','Teilzeit möglich','Führerschein von Vorteil','Bewerbung per E-Mail'] },
      { b:'b', quelle:'Bäckerei Hansen', zeilen:['Verkäufer/in gesucht','Frühschicht ab 5.30 Uhr','Auch ohne Erfahrung','Bitte persönlich vorstellen'] },
      { b:'c', quelle:'Reinigungsfirma Klar', zeilen:['Büroreinigung am Abend','Montag bis Freitag 18–21 Uhr','Deutschkenntnisse nicht nötig','Anruf genügt'] },
      { b:'d', quelle:'Jobcenter Hagen', zeilen:['Beratung zur Bewerbung','Lebenslauf und Anschreiben','Kostenlos, mit Termin','Auch in einfacher Sprache'] },
      { b:'e', quelle:'Logistikzentrum West', zeilen:['Lagerhelfer gesucht','Schichtarbeit, auch nachts','Ab 14,50 Euro pro Stunde','Sofortiger Beginn'] },
      { b:'f', quelle:'Kita Regenbogen', zeilen:['Wir suchen eine Küchenhilfe','Montag bis Freitag 10–14 Uhr','20 Stunden pro Woche','Ab August'] }
    ],
    aufgaben:[
      { situation:'Sie sprechen noch wenig Deutsch und suchen Arbeit am Abend.',
        loesung:'c', erklaerung:'Bei der Reinigungsfirma in c sind Deutschkenntnisse nicht nötig, und gearbeitet wird abends.' },
      { situation:'Sie möchten arbeiten, während Ihre Kinder in der Schule sind.',
        loesung:'f', erklaerung:'Die Küchenhilfe in f arbeitet werktags von 10 bis 14 Uhr — genau die Schulzeit.' },
      { situation:'Sie brauchen Hilfe beim Schreiben Ihres Lebenslaufs.',
        loesung:'d', erklaerung:'Das Jobcenter in d berät kostenlos zu Lebenslauf und Anschreiben, auch in einfacher Sprache.' },
      { situation:'Sie möchten sofort anfangen und Nachtarbeit macht Ihnen nichts aus.',
        loesung:'e', erklaerung:'Das Logistikzentrum in e sucht für Schichtarbeit, auch nachts, mit sofortigem Beginn.' },
      { situation:'Sie suchen eine Ausbildungsstelle.',
        loesung:'x', erklaerung:'Ausbildung bietet keine Anzeige an. Es sind alles Stellen für Helferinnen und Helfer oder Beratung.' }
    ] },

  { id:'t4r5',
    anzeigen:[
      { b:'a', quelle:'Ferienwohnung Ostsee', zeilen:['2 Zimmer, bis 4 Personen','Hunde erlaubt','65 Euro pro Nacht','Endreinigung 40 Euro'] },
      { b:'b', quelle:'Jugendherberge Harz', zeilen:['Betten im Mehrbettzimmer','24 Euro mit Frühstück','Familienzimmer auf Anfrage','Küche zum Selberkochen'] },
      { b:'c', quelle:'Hotel am Dom', zeilen:['Einzelzimmer ab 89 Euro','Zentrale Lage','Parkplatz 15 Euro pro Tag','Frühstück inklusive'] },
      { b:'d', quelle:'Campingplatz Seeblick', zeilen:['Stellplatz für Zelt 12 Euro','Duschen mit Münzen','Brötchenservice am Morgen','Nur April bis Oktober'] },
      { b:'e', quelle:'Reisebüro Weltweit', zeilen:['Bus- und Bahnreisen','Auch für Gruppen','Beratung Mo–Sa','Anzahlung 20 Prozent'] },
      { b:'f', quelle:'Mitfahrzentrale', zeilen:['Günstig mitfahren','Von Tür zu Tür','Ab 9 Euro pro Strecke','Anmeldung online'] }
    ],
    aufgaben:[
      { situation:'Sie fahren mit Ihrem Hund in den Urlaub und brauchen eine Unterkunft.',
        loesung:'a', erklaerung:'Nur bei der Ferienwohnung in a steht „Hunde erlaubt".' },
      { situation:'Sie haben wenig Geld und möchten selbst kochen.',
        loesung:'b', erklaerung:'Die Jugendherberge in b ist günstig und hat eine Küche zum Selberkochen.' },
      { situation:'Sie möchten billig von Hagen nach Berlin kommen.',
        loesung:'f', erklaerung:'Die Mitfahrzentrale in f bietet günstige Fahrten ab 9 Euro pro Strecke.' },
      { situation:'Sie planen eine Reise mit zwanzig Personen aus Ihrem Verein.',
        loesung:'e', erklaerung:'Das Reisebüro in e berät auch Gruppen und organisiert Bus- und Bahnreisen.' },
      { situation:'Sie suchen im Januar einen Platz für Ihren Wohnwagen.',
        loesung:'x', erklaerung:'Der Campingplatz in d hat nur von April bis Oktober geöffnet. Im Januar passt keine Anzeige.' }
    ] }

  ]
});
/* ---------- ZWEI PRÜFUNGSLÄUFE — 20 Aufgaben, 30 Minuten ---------- */
window.LESEN_A2.laeufe.push({
  id:'p1', titel:'Prüfungslauf 1', minuten:30,
  teile:[

  { nr:1, art:'textwahl',
    text:{ sorte:'zeitung', quelle:'Hagener Rundschau', titel:'Der Laden, in dem nichts einen Preis hat',
      zeilen:[
        'In der Bahnhofstraße hat vor drei Monaten ein besonderes Geschäft geöffnet. Es verkauft Brot, Gemüse und Konserven — aber ohne feste Preise. Jeder zahlt, was er kann und möchte.',
        'Hinter der Idee steht Peter Ohm, früher Bäcker, heute Rentner. „Viele Menschen schämen sich, zur Tafel zu gehen", sagt er. „Hier sieht niemand, wie viel du gibst."',
        'Die Waren kommen von Bäckereien und Supermärkten aus der Umgebung. Es sind Lebensmittel, die man nicht mehr verkaufen kann, die aber noch gut sind — zum Beispiel Brot vom Vortag.',
        'Am Anfang glaubte niemand, dass das funktioniert. Nach drei Monaten steht fest: Die Kasse ist jeden Abend voll genug, um die Miete zu zahlen. „Manche legen fünf Euro für ein Brot hinein", sagt Ohm. „Andere zehn Cent. Beides ist richtig."',
        'Geöffnet ist von Dienstag bis Samstag, immer ab 15 Uhr. Wer helfen möchte, kann sich in eine Liste an der Tür eintragen.'
      ] },
    aufgaben:[
      { frage:'Was ist an dem Geschäft besonders?',
        opt:['Es ist rund um die Uhr geöffnet.','Es gibt keine festen Preise.','Es verkauft nur Brot.'],
        loesung:1, stelle:'aber ohne feste Preise',
        erklaerung:'Jeder zahlt, was er kann und möchte — es gibt keine festen Preise.' },
      { frage:'Warum hat Peter Ohm den Laden eröffnet?',
        opt:['Damit sich niemand schämen muss','Um Geld zu verdienen','Weil er wieder Bäcker sein wollte'],
        loesung:0, stelle:'Viele Menschen schämen sich, zur Tafel zu gehen',
        erklaerung:'Sein Grund ist die Scham: Hier sieht niemand, wie viel man gibt.' },
      { frage:'Woher kommen die Lebensmittel?',
        opt:['Von Bauernhöfen','Aus dem Ausland','Von Bäckereien und Supermärkten aus der Nähe'],
        loesung:2, stelle:'von Bäckereien und Supermärkten aus der Umgebung',
        erklaerung:'Aus der Umgebung — Ware, die noch gut ist, aber nicht mehr verkauft werden kann.' },
      { frage:'Wie ist die Lage nach drei Monaten?',
        opt:['Der Laden trägt sich selbst.','Der Laden macht bald zu.','Der Laden verdient viel Geld.'],
        loesung:0, stelle:'voll genug, um die Miete zu zahlen',
        erklaerung:'Die Kasse reicht für die Miete. Reich wird niemand, aber der Laden funktioniert.' },
      { frage:'Wann ist das Geschäft geöffnet?',
        opt:['Jeden Tag ab 15 Uhr','Dienstag bis Samstag ab 15 Uhr','Nur am Wochenende'],
        loesung:1, stelle:'von Dienstag bis Samstag, immer ab 15 Uhr',
        erklaerung:'Sonntag und Montag ist geschlossen.' }
    ] },

  { nr:2, art:'uebersicht',
    tafel:{ titel:'Stadtbibliothek Hagen — Übersicht', zeilen:[
      { k:'Erdgeschoss', v:'Anmeldung, Rückgabe, Zeitungen, Kopierer' },
      { k:'1. Stock',    v:'Romane, Krimis, Hörbücher' },
      { k:'2. Stock',    v:'Kinderbücher, Vorlesestunde mittwochs 16 Uhr' },
      { k:'3. Stock',    v:'Sachbücher, Deutsch lernen, Prüfungsbücher' },
      { k:'4. Stock',    v:'Arbeitsplätze mit WLAN, Ruhe bitte' },
      { k:'Keller',      v:'Spiele und Filme, Ausleihe eine Woche' }
    ] },
    aufgaben:[
      { situation:'Sie möchten sich zum ersten Mal einen Ausweis machen lassen.',
        opt:['Erdgeschoss','1. Stock','4. Stock'], loesung:0, stelle:'Anmeldung',
        erklaerung:'Die Anmeldung ist im Erdgeschoss.' },
      { situation:'Sie suchen ein Buch, um sich auf die A2-Prüfung vorzubereiten.',
        opt:['3. Stock','1. Stock','Keller'], loesung:0, stelle:'Deutsch lernen, Prüfungsbücher',
        erklaerung:'Prüfungsbücher stehen im 3. Stock bei den Sachbüchern.' },
      { situation:'Sie möchten für Ihre Prüfung lernen und brauchen Internet und Ruhe.',
        opt:['2. Stock','4. Stock','Erdgeschoss'], loesung:1, stelle:'Arbeitsplätze mit WLAN, Ruhe bitte',
        erklaerung:'Der 4. Stock hat Arbeitsplätze mit WLAN und ist der Ruhebereich.' },
      { situation:'Sie möchten am Mittwochnachmittag mit Ihrer Tochter (4) herkommen.',
        opt:['2. Stock','Keller','1. Stock'], loesung:0, stelle:'Vorlesestunde mittwochs 16 Uhr',
        erklaerung:'Mittwochs um 16 Uhr ist im 2. Stock Vorlesestunde für Kinder.' },
      { situation:'Sie möchten sich einen Film für das Wochenende ausleihen.',
        opt:['1. Stock','Keller','3. Stock'], loesung:1, stelle:'Spiele und Filme',
        erklaerung:'Filme gibt es im Keller, Ausleihe für eine Woche.' }
    ] },

  { nr:3, art:'textwahl',
    text:{ sorte:'email', quelle:'Von: kursleitung@vhs-hagen.de', titel:'Wichtige Informationen zu Ihrem Kurs',
      zeilen:[
        'Sehr geehrte Teilnehmerinnen und Teilnehmer,',
        'Ihr Kurs „Deutsch A2 kompakt" beginnt am Montag, dem 3. Februar, um 17.30 Uhr in Raum 210. Bitte kommen Sie am ersten Tag zehn Minuten früher, damit wir die Anwesenheitsliste in Ruhe ausfüllen können.',
        'Das Lehrbuch kaufen Sie bitte selbst. Es heißt „Schritte plus Neu 3" und kostet in der Buchhandlung etwa 18 Euro. Bringen Sie es ab der zweiten Woche mit — in der ersten Stunde brauchen Sie es noch nicht.',
        'Wenn Sie einmal nicht kommen können, schreiben Sie mir bitte eine kurze Nachricht. Ab drei Terminen ohne Entschuldigung können wir die Teilnahme leider nicht mehr bestätigen.',
        'Am Ende des Kurses gibt es einen Test. Er ist freiwillig, aber wir empfehlen ihn: Er zeigt Ihnen, ob Sie für die richtige Prüfung bereit sind.',
        'Der Parkplatz hinter dem Gebäude ist abends frei. Die Bushaltestelle „Volkshochschule" liegt direkt vor der Tür.',
        'Mit freundlichen Grüßen, M. Sarikaya'
      ] },
    aufgaben:[
      { frage:'Was sollen die Teilnehmer am ersten Tag tun?',
        opt:['Zehn Minuten früher kommen','Das Buch mitbringen','Sich anmelden'],
        loesung:0, stelle:'Bitte kommen Sie am ersten Tag zehn Minuten früher',
        erklaerung:'Wegen der Anwesenheitsliste soll man am ersten Tag früher da sein.' },
      { frage:'Wann wird das Lehrbuch gebraucht?',
        opt:['Sofort in der ersten Stunde','Ab der zweiten Woche','Erst am Ende'],
        loesung:1, stelle:'Bringen Sie es ab der zweiten Woche mit',
        erklaerung:'In der ersten Stunde braucht man es noch nicht.' },
      { frage:'Was passiert, wenn man dreimal ohne Nachricht fehlt?',
        opt:['Man zahlt mehr.','Die Teilnahme kann nicht bestätigt werden.','Man bekommt kein Buch.'],
        loesung:1, stelle:'können wir die Teilnahme leider nicht mehr bestätigen',
        erklaerung:'Ab drei unentschuldigten Terminen gibt es keine Bestätigung mehr.' },
      { frage:'Was gilt für den Test am Kursende?',
        opt:['Er ist Pflicht.','Er ist freiwillig, wird aber empfohlen.','Er kostet extra.'],
        loesung:1, stelle:'Er ist freiwillig, aber wir empfehlen ihn',
        erklaerung:'Freiwillig — aber er zeigt, ob man für die Prüfung bereit ist.' },
      { frage:'Was schreibt Frau Sarikaya über den Weg zum Kurs?',
        opt:['Parken ist abends kostenlos.','Es gibt keinen Parkplatz.','Der Bus fährt nicht abends.'],
        loesung:0, stelle:'Der Parkplatz hinter dem Gebäude ist abends frei',
        erklaerung:'Abends ist der Parkplatz frei, und die Haltestelle liegt direkt vor der Tür.' }
    ] },

  { nr:4, art:'anzeigenX',
    anzeigen:[
      { b:'a', quelle:'Fahrschule Kurz', zeilen:['Führerschein Klasse B','Theorie auf Deutsch und Türkisch','Abendkurse möglich','Erste Beratung gratis'] },
      { b:'b', quelle:'Autohaus Mertens', zeilen:['Gebrauchtwagen ab 3 500 Euro','Ein Jahr Garantie','Finanzierung möglich','Inzahlungnahme'] },
      { b:'c', quelle:'ADAC-Pannenhilfe', zeilen:['Hilfe rund um die Uhr','Auch für Nichtmitglieder','Abschleppen im Umkreis 50 km','Notruf 24 Stunden'] },
      { b:'d', quelle:'Werkstatt Özdemir', zeilen:['Inspektion und TÜV','Ersatzwagen kostenlos','Termine auch samstags','Kostenvoranschlag vorab'] },
      { b:'e', quelle:'Carsharing Hagen', zeilen:['Auto stundenweise mieten','Ab 3,50 Euro pro Stunde','Fünf Stationen in der Stadt','Nur mit App'] },
      { b:'f', quelle:'Verkehrswacht', zeilen:['Fahrradtraining für Erwachsene','Samstags 10–13 Uhr','Kostenlos','Räder werden gestellt'] }
    ],
    aufgaben:[
      { situation:'Sie brauchen nur einmal im Monat ein Auto für zwei Stunden.',
        loesung:'e', erklaerung:'Carsharing in e vermietet stundenweise ab 3,50 Euro — für so wenig Nutzung ideal.' },
      { situation:'Ihr Auto muss zum TÜV, und Sie brauchen in der Zeit ein anderes Fahrzeug.',
        loesung:'d', erklaerung:'Die Werkstatt in d macht TÜV und stellt einen kostenlosen Ersatzwagen.' },
      { situation:'Sie sind noch nie Fahrrad gefahren und möchten es lernen.',
        loesung:'f', erklaerung:'Die Verkehrswacht in f bietet kostenloses Fahrradtraining für Erwachsene, Räder gibt es dort.' },
      { situation:'Sie möchten den Führerschein machen, verstehen die Theorie auf Deutsch aber noch schlecht.',
        loesung:'a', erklaerung:'Die Fahrschule in a bietet die Theorie auch auf Türkisch an.' },
      { situation:'Sie suchen jemanden, der Ihnen das Autofahren privat beibringt.',
        loesung:'x', erklaerung:'Privatunterricht bietet niemand an. Die Fahrschule ist eine offizielle Schule, kein privater Lehrer.' }
    ] }

  ]
});

window.LESEN_A2.laeufe.push({
  id:'p2', titel:'Prüfungslauf 2', minuten:30,
  teile:[

  { nr:1, art:'textwahl',
    text:{ sorte:'zeitung', quelle:'Nordstadt-Bote', titel:'Sie kennt jeden Namen im Haus',
      zeilen:[
        'Im Hochhaus an der Elberfelder Straße wohnen 96 Familien aus 21 Ländern. Und alle kennen Ruth Waldmann. Die 78-Jährige wohnt seit 1974 im dritten Stock und ist so etwas wie das Gedächtnis des Hauses.',
        'Angefangen hat es mit einem Zettel. Vor zwölf Jahren hängte Frau Waldmann im Flur eine Liste auf: „Wer braucht Hilfe? Wer kann helfen?" Heute gibt es daraus eine feste Gruppe von vierzehn Nachbarn.',
        'Sie begleiten ältere Menschen zum Arzt, übersetzen Briefe vom Amt oder passen kurz auf Kinder auf. Geld nimmt niemand. „Wir sind kein Dienst", sagt Waldmann. „Wir sind Nachbarn."',
        'Einmal im Monat treffen sich alle im Waschkeller, den der Hausmeister dafür freigeräumt hat. Es gibt Tee, jeder bringt etwas mit. Beim letzten Mal waren vierzig Leute da.',
        'Aufhören will Frau Waldmann noch nicht. „Solange ich die Treppe schaffe, mache ich weiter", sagt sie. „Und wenn nicht, kommen sie eben zu mir hoch."'
      ] },
    aufgaben:[
      { frage:'Wie lange wohnt Frau Waldmann schon in dem Haus?',
        opt:['Seit zwölf Jahren','Seit 1974','Seit 21 Jahren'],
        loesung:1, stelle:'wohnt seit 1974 im dritten Stock',
        erklaerung:'Seit 1974. Die zwölf Jahre beziehen sich auf die Nachbarschaftshilfe.' },
      { frage:'Wie hat die Nachbarschaftshilfe angefangen?',
        opt:['Mit einem Zettel im Flur','Mit einem Fest','Mit einem Brief der Stadt'],
        loesung:0, stelle:'hängte Frau Waldmann im Flur eine Liste auf',
        erklaerung:'Sie hängte eine Liste auf mit der Frage, wer Hilfe braucht und wer helfen kann.' },
      { frage:'Was machen die vierzehn Nachbarn?',
        opt:['Sie putzen das Haus.','Sie helfen bei Arztterminen und Briefen.','Sie organisieren Reisen.'],
        loesung:1, stelle:'begleiten ältere Menschen zum Arzt, übersetzen Briefe vom Amt',
        erklaerung:'Arztbegleitung, Briefe übersetzen, kurz auf Kinder aufpassen — und das ohne Geld.' },
      { frage:'Wo treffen sich die Nachbarn?',
        opt:['Im Waschkeller','In der Wohnung von Frau Waldmann','Im Hof'],
        loesung:0, stelle:'treffen sich alle im Waschkeller',
        erklaerung:'Der Hausmeister hat den Waschkeller dafür freigeräumt.' },
      { frage:'Was sagt Frau Waldmann über die Zukunft?',
        opt:['Sie hört bald auf.','Sie macht weiter, solange es geht.','Sie zieht um.'],
        loesung:1, stelle:'Solange ich die Treppe schaffe, mache ich weiter',
        erklaerung:'Sie will weitermachen — und wenn die Treppe nicht mehr geht, kommen die anderen zu ihr.' }
    ] },

  { nr:2, art:'uebersicht',
    tafel:{ titel:'Hallenbad Hagen — Zeiten und Regeln', zeilen:[
      { k:'Mo 6–8 Uhr',    v:'Frühschwimmen, nur Erwachsene' },
      { k:'Mo–Fr 8–15 Uhr',v:'Schulen und Vereine, kein öffentlicher Betrieb' },
      { k:'Mo–Fr 15–21 Uhr',v:'Öffentliches Schwimmen, alle Becken' },
      { k:'Di 18–20 Uhr',  v:'Frauenschwimmen, Fenster abgedeckt' },
      { k:'Sa/So 9–18 Uhr',v:'Familienzeit, Rutsche geöffnet' },
      { k:'Kasse',         v:'Erwachsene 5 €, Kinder 2,50 €, Familienkarte 12 €' }
    ] },
    aufgaben:[
      { situation:'Sie möchten vor der Arbeit schwimmen, so früh wie möglich.',
        opt:['Mo 6–8 Uhr','Mo–Fr 15–21 Uhr','Sa/So 9–18 Uhr'], loesung:0, stelle:'Frühschwimmen, nur Erwachsene',
        erklaerung:'Frühschwimmen ist montags von 6 bis 8 Uhr, nur für Erwachsene.' },
      { situation:'Sie möchten am Dienstagabend ohne Männer schwimmen.',
        opt:['Di 18–20 Uhr','Mo–Fr 8–15 Uhr','Sa/So 9–18 Uhr'], loesung:0, stelle:'Frauenschwimmen, Fenster abgedeckt',
        erklaerung:'Dienstags von 18 bis 20 Uhr ist Frauenschwimmen.' },
      { situation:'Ihre Kinder wollen unbedingt rutschen.',
        opt:['Mo–Fr 15–21 Uhr','Sa/So 9–18 Uhr','Mo 6–8 Uhr'], loesung:1, stelle:'Familienzeit, Rutsche geöffnet',
        erklaerung:'Die Rutsche ist nur am Wochenende während der Familienzeit offen.' },
      { situation:'Sie möchten am Mittwoch um 10 Uhr schwimmen gehen.',
        opt:['Das geht','Das geht nicht, dann sind Schulen im Bad','Das geht nur mit Familienkarte'],
        loesung:1, stelle:'Schulen und Vereine, kein öffentlicher Betrieb',
        erklaerung:'Werktags von 8 bis 15 Uhr ist das Bad für Schulen und Vereine reserviert.' },
      { situation:'Sie kommen mit Ihrem Mann und zwei Kindern. Was ist günstiger?',
        opt:['Vier Einzelkarten','Die Familienkarte','Beides kostet gleich'],
        loesung:1, stelle:'Familienkarte 12 €',
        erklaerung:'Einzeln wären es 5 + 5 + 2,50 + 2,50 = 15 Euro. Die Familienkarte kostet nur 12 Euro.' }
    ] },

  { nr:3, art:'textwahl',
    text:{ sorte:'blog', quelle:'Blog: Unser erstes eigenes Auto', titel:'Warum wir doch keinen Neuwagen gekauft haben',
      zeilen:[
        'Zwei Monate lang haben wir gesucht. Am Anfang wollten wir unbedingt ein neues Auto: keine Sorgen, Garantie, alles sauber. Wir waren bei drei Autohäusern und haben Probe gefahren.',
        'Dann haben wir gerechnet. Ein kleiner Neuwagen kostet etwa 21 000 Euro. Wir hätten monatlich 280 Euro abbezahlt — fünf Jahre lang. Das war uns zu viel, weil im September unser zweites Kind kommt.',
        'Jetzt haben wir einen sieben Jahre alten Wagen für 6 400 Euro gekauft, privat von einem Nachbarn. Er hat ihn immer in der Werkstatt warten lassen und alle Rechnungen aufgehoben. Das hat uns überzeugt.',
        'Wir haben trotzdem 200 Euro extra ausgegeben: Ein Mechaniker hat sich das Auto vor dem Kauf angesehen. Das würde ich jedem raten. Er hat zwei Kleinigkeiten gefunden, die der Nachbar dann vom Preis abgezogen hat.',
        'Ob es die richtige Entscheidung war, wissen wir in zwei Jahren. Aber schlafen können wir jetzt besser.'
      ] },
    aufgaben:[
      { frage:'Was wollten die beiden zuerst?',
        opt:['Ein neues Auto','Ein gebrauchtes Auto','Gar kein Auto'],
        loesung:0, stelle:'Am Anfang wollten wir unbedingt ein neues Auto',
        erklaerung:'Am Anfang stand der Wunsch nach einem Neuwagen.' },
      { frage:'Warum haben sie den Neuwagen nicht gekauft?',
        opt:['Die Autohäuser waren unfreundlich.','Die monatlichen Kosten waren zu hoch.','Das Auto war zu klein.'],
        loesung:1, stelle:'Das war uns zu viel',
        erklaerung:'280 Euro im Monat über fünf Jahre waren zu viel, besonders wegen des zweiten Kindes.' },
      { frage:'Was hat sie beim gebrauchten Auto überzeugt?',
        opt:['Der niedrige Preis','Die Rechnungen aus der Werkstatt','Die Farbe'],
        loesung:1, stelle:'alle Rechnungen aufgehoben. Das hat uns überzeugt',
        erklaerung:'Der Nachbar hatte alle Werkstattrechnungen — das zeigt, dass das Auto gepflegt wurde.' },
      { frage:'Wofür haben sie 200 Euro extra bezahlt?',
        opt:['Für eine Versicherung','Für die Prüfung durch einen Mechaniker','Für neue Reifen'],
        loesung:1, stelle:'Ein Mechaniker hat sich das Auto vor dem Kauf angesehen',
        erklaerung:'Ein Mechaniker hat das Auto vor dem Kauf geprüft — das empfiehlt der Autor allen.' },
      { frage:'Wie beurteilt der Autor die Entscheidung heute?',
        opt:['Er ist sicher, dass sie falsch war.','Er weiß es noch nicht, schläft aber ruhiger.','Er bereut sie.'],
        loesung:1, stelle:'Aber schlafen können wir jetzt besser',
        erklaerung:'Ob es richtig war, zeigt sich erst später — aber die Sorgen sind kleiner.' }
    ] },

  { nr:4, art:'anzeigenX',
    anzeigen:[
      { b:'a', quelle:'Praxis Dr. Weiß', zeilen:['Neue Patienten willkommen','Sprechstunde Mo–Do','Online-Termine möglich','Auch englischsprachig'] },
      { b:'b', quelle:'Apotheke am Markt', zeilen:['Notdienst diese Woche','Rund um die Uhr geöffnet','Klingel benutzen','Gebühr 2,50 Euro nachts'] },
      { b:'c', quelle:'Physiotherapie Aktiv', zeilen:['Rückenkurse für Anfänger','Mit Rezept oder privat','Dienstags und freitags','Krankenkasse zahlt oft'] },
      { b:'d', quelle:'Selbsthilfegruppe', zeilen:['Für Angehörige von Kranken','Jeden 2. Montag im Monat','Ohne Anmeldung','Gemeindehaus, Raum 2'] },
      { b:'e', quelle:'Pflegeberatung Stadt', zeilen:['Beratung zu Pflegegrad','Auch Hausbesuche','Kostenlos','Termin telefonisch'] },
      { b:'f', quelle:'Sanitätshaus Lorenz', zeilen:['Rollstühle und Gehhilfen','Auch zum Ausleihen','Lieferung ins Haus','Beratung vor Ort'] }
    ],
    aufgaben:[
      { situation:'Ihre Mutter braucht nach der Operation für vier Wochen einen Rollstuhl.',
        loesung:'f', erklaerung:'Das Sanitätshaus in f verleiht Rollstühle und liefert sie ins Haus.' },
      { situation:'Sie pflegen Ihren Vater und möchten wissen, welche Hilfe Ihnen zusteht.',
        loesung:'e', erklaerung:'Die Pflegeberatung in e berät kostenlos zum Pflegegrad, auch zu Hause.' },
      { situation:'Sie brauchen nachts um zwei Uhr dringend ein Medikament.',
        loesung:'b', erklaerung:'Die Apotheke in b hat Notdienst und ist rund um die Uhr geöffnet.' },
      { situation:'Sie möchten mit anderen Menschen sprechen, die auch einen kranken Angehörigen haben.',
        loesung:'d', erklaerung:'Die Selbsthilfegruppe in d ist genau für Angehörige von Kranken.' },
      { situation:'Sie suchen einen Zahnarzt für Ihre Tochter.',
        loesung:'x', erklaerung:'Ein Zahnarzt kommt in keiner Anzeige vor. Dr. Weiß ist Hausarzt, alle anderen sind keine Arztpraxen.' }
    ] }

  ]
});
