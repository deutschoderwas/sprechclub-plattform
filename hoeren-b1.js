/* ============================================================
   deutschoderwas club — HÖREN B1 (Goethe-/telc-Zertifikat B1)

   Aufbau nach der offiziellen Testbeschreibung: vier Teile,
   dreißig Aufgaben, je ein Punkt, circa vierzig Minuten.

     Teil 1  fünf kurze Nachrichten und Ansagen   — zweimal
             je eine Richtig/Falsch-Aufgabe und eine a/b/c-Frage
     Teil 2  ein Vortrag oder eine Präsentation   — EINMAL
     Teil 3  ein Alltagsgespräch, richtig/falsch  — EINMAL
     Teil 4  eine Diskussion, wer sagt was        — zweimal

   Das Feld mal sagt, wie oft man einen Text hören darf. Bei
   Teil zwei und drei ist es bewusst nur einmal — sonst übt man
   etwas anderes als die Prüfung.

   Der Sprung von A2 auf B1: Es reicht nicht mehr, ein Wort
   wiederzuerkennen. Man muss die Absicht hinter dem Gesagten
   verstehen — ob jemand zustimmt, zweifelt oder ablehnt, auch
   wenn er das Wort „nein" nie benutzt.

   Der Weg hat vier Stufen, wie ein Lehrbuch aufgebaut:
   erst Zahlen und Umschreibungen, dann die Signalwörter der
   Meinung, dann die Aufgabentypen, zuletzt die ganze Prüfung.

   WICHTIG für die Sprachausgabe: In allen gesprochenen Texten
   sind Zahlen AUSGESCHRIEBEN (zweihundertfünfundvierzig, halb
   vier). Ziffern würde die Stimme falsch vorlesen.

   wer ist Frau oder Mann und steuert die Stimme. stelle ist die
   wörtliche Stelle im Hörtext, die im Rückblick markiert wird —
   sie muss ZEICHENGENAU im Text vorkommen.
   ============================================================ */

window.HOEREN_B1 = {

  niveau: 'B1',
  pruefung: 'Zertifikat B1',
  minuten: 40,
  punkte: 30,

  stufen: [
    { nr:1, titel:'Zahlen und Umschreibungen', zeichen:'🔢',
      was:'Auf B1 wird die Zahl selten direkt genannt. Du hörst „knapp unter zwanzig" und musst daraus etwas machen.' },
    { nr:2, titel:'Meinung heraushören', zeichen:'🧭',
      was:'Zustimmung, Zweifel, höfliche Ablehnung — fast nie mit ja oder nein. Das ist der eigentliche B1-Sprung.' },
    { nr:3, titel:'Die Aufgabentypen', zeichen:'🎯',
      was:'Jeder Prüfungsteil einzeln geübt — mit Hörtext, Lösung und der Stelle, an der es stand.' },
    { nr:4, titel:'Die ganze Prüfung', zeichen:'⏱️',
      was:'Alle vier Teile hintereinander, dreißig Aufgaben, mit Uhr — so wie am Prüfungstag.' }
  ],

  /* ==========================================================
     STUFE 1 und 2 — Hörübungen vor den echten Aufgaben
     ========================================================== */

  bloecke: [

    { id:'b1h1b1', stufe:1, titel:'Zahlen, die nicht genannt werden',
      kurz:'knapp, gut, rund, fast — was steckt dahinter?',
      ziel:'Nach diesem Block rechnest du beim Hören automatisch mit, wenn eine Zahl nur umschrieben wird.',
      zeichen:'🔢', farbe:'turq', mal:2,
      aufgaben: [
        { art:'hoerwahl', ort:'Am Bahnsteig', wer:'Frau',
          text:'Der Zug nach Hannover fährt heute nicht von Gleis drei, sondern von Gleis elf. Die Abfahrt verschiebt sich um gut zwanzig Minuten.',
          frage:'Wann fährt der Zug ungefähr ab?',
          opt:['Pünktlich.','Etwas mehr als zwanzig Minuten später.','Genau zwanzig Minuten früher.'],
          loesung:1, stelle:'um gut zwanzig Minuten',
          erklaerung:'„gut zwanzig" heißt: etwas mehr als zwanzig. „knapp zwanzig" wäre etwas weniger.' },
        { art:'hoerwahl', ort:'Im Kaufhaus', wer:'Mann',
          text:'Liebe Kundinnen und Kunden, unsere Winterjacken bekommen Sie heute zum halben Preis. Statt hundertsechzig Euro zahlen Sie nur noch achtzig.',
          frage:'Wie viel kostet eine Jacke jetzt?',
          opt:['Hundertsechzig Euro.','Achtzig Euro.','Vierzig Euro.'],
          loesung:1, stelle:'zahlen Sie nur noch achtzig',
          erklaerung:'Der alte Preis wird zuerst genannt — das ist die typische Falle. Der neue Preis kommt danach.' },
        { art:'hoerwahl', ort:'Radio, Wetterbericht', wer:'Frau',
          text:'In den Morgenstunden bleibt es mit knapp fünf Grad noch frisch, am Nachmittag klettert das Thermometer auf angenehme achtzehn Grad.',
          frage:'Wie warm wird es am Nachmittag?',
          opt:['Knapp fünf Grad.','Ungefähr achtzehn Grad.','Über zwanzig Grad.'],
          loesung:1, stelle:'auf angenehme achtzehn Grad',
          erklaerung:'Zwei Zahlen, zwei Tageszeiten. Die Frage nennt die Tageszeit — daran hängst du dich fest.' },
        { art:'hoerwahl', ort:'Im Fitnessstudio', wer:'Mann',
          text:'Der Monatsbeitrag liegt bei neunundzwanzig Euro. Wenn Sie gleich für ein ganzes Jahr zahlen, sparen Sie zwei Monatsbeiträge.',
          frage:'Was bekommt man beim Jahresvertrag?',
          opt:['Zwei Monate geschenkt.','Zwei Euro Rabatt.','Nichts, der Preis bleibt gleich.'],
          loesung:0, stelle:'sparen Sie zwei Monatsbeiträge',
          erklaerung:'„zwei Monatsbeiträge sparen" heißt: zwei Monate umsonst. Nicht zwei Euro.' },
        { art:'hoerwahl', ort:'Auf dem Wochenmarkt', wer:'Frau',
          text:'Die Erdbeeren kosten das Kilo vier Euro fünfzig. Nehmen Sie zwei Kilo, mache ich Ihnen acht Euro.',
          frage:'Wie viel spart man bei zwei Kilo?',
          opt:['Einen Euro.','Fünfzig Cent.','Nichts.'],
          loesung:0, stelle:'mache ich Ihnen acht Euro',
          erklaerung:'Zwei Kilo wären neun Euro, angeboten werden acht. Also ein Euro weniger — du musst selbst rechnen.' },
        { art:'hoerwahl', ort:'Im Museum', wer:'Mann',
          text:'Die Führung dauert etwa neunzig Minuten. Wir treffen uns um Viertel vor drei am Haupteingang.',
          frage:'Wann ist die Führung ungefähr zu Ende?',
          opt:['Um Viertel nach drei.','Um Viertel nach vier.','Um halb sechs.'],
          loesung:1, stelle:'etwa neunzig Minuten',
          erklaerung:'Viertel vor drei plus neunzig Minuten ist Viertel nach vier. B1 verlangt solche kleinen Rechnungen.' },
        { art:'hoerwahl', ort:'Beim Zahnarzt, Anmeldung', wer:'Frau',
          text:'Wir hätten einen Termin am Dienstag um zehn nach acht oder am Donnerstag um zwanzig vor zwölf.',
          frage:'Welche Uhrzeit wird für Donnerstag genannt?',
          opt:['Elf Uhr vierzig.','Zwölf Uhr zwanzig.','Acht Uhr zehn.'],
          loesung:0, stelle:'zwanzig vor zwölf',
          erklaerung:'„zwanzig vor zwölf" ist elf Uhr vierzig. Vor der vollen Stunde wird rückwärts gerechnet.' },
        { art:'hoerwahl', ort:'In der Bibliothek', wer:'Mann',
          text:'Die Bücher können Sie vier Wochen behalten. Einmal verlängern ist möglich, dann haben Sie insgesamt acht Wochen.',
          frage:'Wie lange darf man ein Buch höchstens behalten?',
          opt:['Vier Wochen.','Acht Wochen.','Zwölf Wochen.'],
          loesung:1, stelle:'insgesamt acht Wochen',
          erklaerung:'Das Wort „insgesamt" ist das Signal für die Gesamtsumme — nicht für die erste Zahl.' },
        { art:'hoerwahl', ort:'Im Reisebüro', wer:'Frau',
          text:'Der Flug kostet zweihundertneunzig Euro, das Gepäck ist nicht dabei. Für einen Koffer kommen fünfunddreißig Euro dazu.',
          frage:'Was zahlt man mit einem Koffer?',
          opt:['Zweihundertneunzig Euro.','Dreihundertfünfundzwanzig Euro.','Fünfunddreißig Euro.'],
          loesung:1, stelle:'kommen fünfunddreißig Euro dazu',
          erklaerung:'„dazukommen" heißt addieren. Zweihundertneunzig plus fünfunddreißig.' },
        { art:'hoerwahl', ort:'Am Telefon, Handwerker', wer:'Mann',
          text:'Vor Ende des Monats schaffe ich es nicht mehr. Anfang nächster Woche könnte ich vorbeikommen, sagen wir Dienstag.',
          frage:'Wann kommt der Handwerker?',
          opt:['Noch diesen Monat.','Nächste Woche Dienstag.','Er kommt gar nicht.'],
          loesung:1, stelle:'Anfang nächster Woche könnte ich vorbeikommen, sagen wir Dienstag',
          erklaerung:'Erst die Absage, dann der neue Vorschlag. Auf B1 steht die Lösung fast immer im zweiten Satz.' }
      ] },

    { id:'b1h1b2', stufe:1, titel:'Sagen, ohne es zu sagen',
      kurz:'Umschreibungen statt klarer Wörter',
      ziel:'Nach diesem Block hörst du auch dann die Information heraus, wenn das erwartete Wort gar nicht fällt.',
      zeichen:'🫥', farbe:'turq', mal:2,
      aufgaben: [
        { art:'hoerwahl', ort:'Im Büro', wer:'Frau',
          text:'Herr Weber ist heute nicht am Platz, er ist auf einer Fortbildung. Ab morgen früh ist er wieder erreichbar.',
          frage:'Warum ist Herr Weber heute nicht da?',
          opt:['Er ist krank.','Er bildet sich weiter.','Er hat Urlaub.'],
          loesung:1, stelle:'er ist auf einer Fortbildung',
          erklaerung:'Das Wort „Weiterbildung" fällt nicht — „Fortbildung" meint dasselbe.' },
        { art:'hoerwahl', ort:'Im Restaurant', wer:'Mann',
          text:'Das Gericht ist heute leider aus. Ich könnte Ihnen stattdessen die Gemüsepfanne empfehlen, die ist ähnlich.',
          frage:'Was ist das Problem?',
          opt:['Das Gericht ist nicht mehr da.','Das Gericht ist zu teuer.','Das Gericht schmeckt nicht.'],
          loesung:0, stelle:'ist heute leider aus',
          erklaerung:'„aus sein" heißt: ausverkauft, nicht mehr vorhanden. Ein häufiges Wort in der Gastronomie.' },
        { art:'hoerwahl', ort:'In der Wohnungsanzeige, Telefon', wer:'Frau',
          text:'Die Wohnung ist bereits vergeben, tut mir leid. Aber wir hätten ab Oktober noch etwas Ähnliches im selben Haus.',
          frage:'Was sagt die Frau?',
          opt:['Die Wohnung ist noch frei.','Die Wohnung ist weg, eine andere kommt.','Es gibt keine Wohnung mehr.'],
          loesung:1, stelle:'ist bereits vergeben',
          erklaerung:'„vergeben" heißt: schon an jemanden anderen gegangen. Das „aber" danach ist der wichtige Teil.' },
        { art:'hoerwahl', ort:'Beim Arzt', wer:'Mann',
          text:'Ich würde erst einmal abwarten. Wenn es in einer Woche nicht besser ist, sehen wir weiter.',
          frage:'Was schlägt der Arzt vor?',
          opt:['Sofort operieren.','Erst einmal nichts tun und beobachten.','Ein starkes Medikament nehmen.'],
          loesung:1, stelle:'Ich würde erst einmal abwarten',
          erklaerung:'„abwarten" und „wir sehen weiter" bedeuten: nichts unternehmen und später neu entscheiden.' },
        { art:'hoerwahl', ort:'In der Schule, Elternabend', wer:'Frau',
          text:'Der Ausflug findet statt, allerdings nicht wie geplant am Freitag, sondern eine Woche später.',
          frage:'Was passiert mit dem Ausflug?',
          opt:['Er fällt aus.','Er wird verschoben.','Er bleibt am Freitag.'],
          loesung:1, stelle:'sondern eine Woche später',
          erklaerung:'„allerdings" kündigt die Einschränkung an. Danach kommt immer die eigentliche Nachricht.' },
        { art:'hoerwahl', ort:'Im Supermarkt, Durchsage', wer:'Mann',
          text:'Wir bitten um Verständnis, dass die Kasse vier im Moment nicht besetzt ist. Bitte nutzen Sie die Kassen eins bis drei.',
          frage:'Was bedeutet die Durchsage?',
          opt:['Eine Kasse ist geschlossen.','Der Laden schließt gleich.','Alle Kassen sind offen.'],
          loesung:0, stelle:'nicht besetzt ist',
          erklaerung:'„nicht besetzt" heißt: dort sitzt niemand. Also geschlossen — das Wort selbst fällt nicht.' },
        { art:'hoerwahl', ort:'Am Arbeitsplatz', wer:'Frau',
          text:'Grundsätzlich finde ich die Idee gut. Ob wir das bis nächste Woche schaffen, wage ich allerdings zu bezweifeln.',
          frage:'Was meint die Frau?',
          opt:['Die Idee ist schlecht.','Die Idee ist gut, aber der Zeitplan ist unrealistisch.','Alles ist kein Problem.'],
          loesung:1, stelle:'wage ich allerdings zu bezweifeln',
          erklaerung:'„Grundsätzlich … allerdings" ist das klassische Muster: erst loben, dann einschränken.' },
        { art:'hoerwahl', ort:'Beim Vermieter', wer:'Mann',
          text:'Reparieren lassen wir das natürlich. Nur wird es ein paar Tage dauern, bis der Handwerker Zeit hat.',
          frage:'Wird repariert?',
          opt:['Ja, aber nicht sofort.','Nein, gar nicht.','Ja, noch heute.'],
          loesung:0, stelle:'Nur wird es ein paar Tage dauern',
          erklaerung:'„Nur …" schränkt ein, ohne die Zusage zurückzunehmen.' },
        { art:'hoerwahl', ort:'Im Sprachkurs', wer:'Frau',
          text:'Die Prüfung ist machbar, wirklich. Nur ohne Vorbereitung sollte man es nicht versuchen.',
          frage:'Wie schätzt die Frau die Prüfung ein?',
          opt:['Sehr schwer, fast unmöglich.','Zu schaffen, wenn man übt.','Ganz leicht, auch ohne Übung.'],
          loesung:1, stelle:'Die Prüfung ist machbar',
          erklaerung:'„machbar" heißt: zu schaffen. Der zweite Satz nennt die Bedingung.' },
        { art:'hoerwahl', ort:'Im Zug', wer:'Mann',
          text:'Wegen einer Störung im Betriebsablauf kommt es zu Verzögerungen. Wir bitten, dies zu entschuldigen.',
          frage:'Was bedeutet das für die Reisenden?',
          opt:['Der Zug ist pünktlich.','Der Zug hat Verspätung.','Der Zug fällt aus.'],
          loesung:1, stelle:'kommt es zu Verzögerungen',
          erklaerung:'„Störung im Betriebsablauf" und „Verzögerungen" sind Bahn-Deutsch für Verspätung.' }
      ] },

    { id:'b1h2b1', stufe:2, titel:'Zustimmen oder ablehnen?',
      kurz:'Die Wörter, die eine Meinung drehen',
      ziel:'Nach diesem Block erkennst du an einem einzigen Wort, ob jemand dafür oder dagegen ist.',
      zeichen:'🧭', farbe:'gold', mal:2,
      aufgaben: [
        { art:'hoerwahl', ort:'Diskussion über Homeoffice', wer:'Mann',
          text:'Also, ich sehe das anders. Zu Hause fehlt mir der kurze Weg zur Kollegin, und genau da entstehen die guten Ideen.',
          frage:'Wie steht der Mann zum Homeoffice?',
          opt:['Er ist dafür.','Er ist dagegen.','Er hat keine Meinung.'],
          loesung:1, stelle:'ich sehe das anders',
          erklaerung:'„Ich sehe das anders" ist die häufigste höfliche Ablehnung im Deutschen.' },
        { art:'hoerwahl', ort:'Diskussion über Fahrradwege', wer:'Frau',
          text:'Da bin ich ganz bei Ihnen. Breitere Radwege würden auch den Autofahrern helfen, weil es weniger eng wird.',
          frage:'Wie reagiert die Frau?',
          opt:['Sie stimmt zu.','Sie widerspricht.','Sie versteht die Frage nicht.'],
          loesung:0, stelle:'Da bin ich ganz bei Ihnen',
          erklaerung:'„Da bin ich ganz bei Ihnen" heißt volle Zustimmung — obwohl kein „ja" vorkommt.' },
        { art:'hoerwahl', ort:'Gespräch über einen Umzug', wer:'Mann',
          text:'Im Prinzip schon. Ich frage mich nur, ob wir uns die Miete auf Dauer wirklich leisten können.',
          frage:'Was drückt der Mann aus?',
          opt:['Volle Begeisterung.','Grundsätzliche Zustimmung mit Bedenken.','Klare Ablehnung.'],
          loesung:1, stelle:'Ich frage mich nur',
          erklaerung:'„Im Prinzip schon … nur" — halbe Zustimmung. Genau dieses Muster wird in Teil vier geprüft.' },
        { art:'hoerwahl', ort:'Elternabend', wer:'Frau',
          text:'Ehrlich gesagt halte ich davon wenig. Die Kinder haben ohnehin schon zu viele Termine in der Woche.',
          frage:'Was meint die Frau?',
          opt:['Sie findet den Vorschlag gut.','Sie lehnt ihn ab.','Sie ist unentschieden.'],
          loesung:1, stelle:'halte ich davon wenig',
          erklaerung:'„Ich halte wenig davon" ist deutliche Ablehnung in höflicher Verpackung.' },
        { art:'hoerwahl', ort:'Im Betrieb', wer:'Mann',
          text:'Da haben Sie recht. Trotzdem müssen wir die Kosten im Blick behalten, sonst geht die Rechnung nicht auf.',
          frage:'Was macht der Mann?',
          opt:['Er stimmt zu und schränkt ein.','Er lehnt komplett ab.','Er wechselt das Thema.'],
          loesung:0, stelle:'Trotzdem müssen wir die Kosten im Blick behalten',
          erklaerung:'„Da haben Sie recht … trotzdem" — zustimmen und dann einschränken. Sehr typisch.' },
        { art:'hoerwahl', ort:'Radiogespräch über Fernsehen', wer:'Frau',
          text:'Von mir aus können die das machen. Mich betrifft es nicht, ich schaue seit Jahren kein Fernsehen mehr.',
          frage:'Wie steht die Frau dazu?',
          opt:['Sie ist begeistert.','Es ist ihr gleichgültig.','Sie ist strikt dagegen.'],
          loesung:1, stelle:'Mich betrifft es nicht',
          erklaerung:'„Von mir aus" klingt nach Zustimmung, meint aber Gleichgültigkeit.' },
        { art:'hoerwahl', ort:'Diskussion über Sonntagsarbeit', wer:'Mann',
          text:'Auf gar keinen Fall. Der Sonntag gehört der Familie, da lasse ich nicht mit mir reden.',
          frage:'Wie deutlich ist der Mann?',
          opt:['Er ist unentschieden.','Er lehnt entschieden ab.','Er stimmt zögernd zu.'],
          loesung:1, stelle:'Auf gar keinen Fall',
          erklaerung:'„Auf gar keinen Fall" und „da lasse ich nicht mit mir reden" — schärfer geht es kaum.' },
        { art:'hoerwahl', ort:'Beim Mittagessen im Betrieb', wer:'Frau',
          text:'Na ja, mal sehen. Ich will nichts versprechen, ich habe im Moment ziemlich viel um die Ohren.',
          frage:'Was sagt die Frau eigentlich?',
          opt:['Sie sagt fest zu.','Sie sagt eher ab.','Sie hat schon abgesagt.'],
          loesung:1, stelle:'Ich will nichts versprechen',
          erklaerung:'„Na ja, mal sehen" ist im Deutschen fast immer eine höfliche Absage.' },
        { art:'hoerwahl', ort:'Podiumsdiskussion', wer:'Mann',
          text:'Dem kann ich nur zustimmen. Meine Erfahrung aus dem Betrieb geht genau in dieselbe Richtung.',
          frage:'Wie steht der Mann zur Vorrednerin?',
          opt:['Er stimmt zu.','Er widerspricht.','Er stellt eine Frage.'],
          loesung:0, stelle:'Dem kann ich nur zustimmen',
          erklaerung:'„in dieselbe Richtung gehen" bestätigt die Zustimmung noch einmal.' },
        { art:'hoerwahl', ort:'Gespräch über eine neue Regel', wer:'Frau',
          text:'Verstehen kann ich das schon. Ob es in der Praxis funktioniert, steht auf einem anderen Blatt.',
          frage:'Was meint die Frau?',
          opt:['Sie hält es für gut umsetzbar.','Sie versteht die Absicht, zweifelt aber an der Umsetzung.','Sie versteht die Regel nicht.'],
          loesung:1, stelle:'steht auf einem anderen Blatt',
          erklaerung:'„Das steht auf einem anderen Blatt" heißt: das ist eine ganz andere Frage — hier: der Zweifel.' }
      ] },

    { id:'b1h2b2', stufe:2, titel:'Absicht statt Wortlaut',
      kurz:'Warum sagt jemand das? Bitte, Warnung, Rat oder Kritik?',
      ziel:'Nach diesem Block erkennst du die Absicht hinter einem Satz — die schwerste Frage in Teil eins.',
      zeichen:'🎯', farbe:'gold', mal:2,
      aufgaben: [
        { art:'hoerwahl', ort:'Nachricht auf dem Anrufbeantworter', wer:'Frau',
          text:'Hallo Sabine, denk bitte daran, morgen die Unterlagen mitzubringen. Ohne die kommen wir im Termin nicht weiter.',
          frage:'Was ist die Absicht der Nachricht?',
          opt:['Sie möchte an etwas erinnern.','Sie möchte sich beschweren.','Sie möchte einen Termin absagen.'],
          loesung:0, stelle:'denk bitte daran',
          erklaerung:'„Denk bitte daran" ist eine Erinnerung, keine Kritik — auch wenn der zweite Satz Druck macht.' },
        { art:'hoerwahl', ort:'Durchsage im Schwimmbad', wer:'Mann',
          text:'Wir weisen darauf hin, dass das Springen vom Beckenrand nicht erlaubt ist. Es besteht Verletzungsgefahr.',
          frage:'Was tut die Durchsage?',
          opt:['Sie warnt und verbietet.','Sie lädt ein.','Sie informiert über Preise.'],
          loesung:0, stelle:'nicht erlaubt ist',
          erklaerung:'„Wir weisen darauf hin" plus „nicht erlaubt" — eine Warnung mit Verbot.' },
        { art:'hoerwahl', ort:'Nachricht von einer Freundin', wer:'Frau',
          text:'Du, ich schaffe es heute Abend leider doch nicht. Können wir das auf nächste Woche schieben?',
          frage:'Was möchte die Freundin?',
          opt:['Einen Termin verschieben.','Sich bedanken.','Etwas ausleihen.'],
          loesung:0, stelle:'auf nächste Woche schieben',
          erklaerung:'„schieben" ist umgangssprachlich für verschieben.' },
        { art:'hoerwahl', ort:'Nachricht vom Kundendienst', wer:'Mann',
          text:'Ihre Reklamation haben wir erhalten. Wir bitten Sie noch um etwas Geduld, die Prüfung dauert einige Tage.',
          frage:'Was sagt der Kundendienst?',
          opt:['Das Problem ist gelöst.','Man soll noch warten.','Die Reklamation wurde abgelehnt.'],
          loesung:1, stelle:'noch um etwas Geduld',
          erklaerung:'„um Geduld bitten" heißt immer: es dauert noch, es ist nichts entschieden.' },
        { art:'hoerwahl', ort:'Nachricht vom Nachbarn', wer:'Frau',
          text:'Hallo, ich wollte nur kurz sagen: Ihr Auto steht ein bisschen weit in der Einfahrt. Könnten Sie es vielleicht ein Stück vorziehen?',
          frage:'Was ist der Ton der Nachricht?',
          opt:['Eine freundliche Bitte.','Eine Drohung.','Ein Lob.'],
          loesung:0, stelle:'Könnten Sie es vielleicht ein Stück vorziehen',
          erklaerung:'„Könnten Sie vielleicht" ist die höflichste Bittform — trotz des Ärgers dahinter.' },
        { art:'hoerwahl', ort:'Ansage der Praxis', wer:'Mann',
          text:'Unsere Praxis bleibt vom achten bis zum neunzehnten August geschlossen. In dringenden Fällen wenden Sie sich bitte an die Praxis Doktor Lange.',
          frage:'Was soll man im Notfall tun?',
          opt:['Warten, bis die Praxis öffnet.','Eine andere Praxis anrufen.','Ins Krankenhaus fahren.'],
          loesung:1, stelle:'wenden Sie sich bitte an die Praxis Doktor Lange',
          erklaerung:'„sich wenden an" heißt: dort anrufen oder hingehen.' },
        { art:'hoerwahl', ort:'Nachricht vom Chef', wer:'Frau',
          text:'Die Präsentation war gut aufgebaut. Beim nächsten Mal bitte etwas weniger Text auf den Folien, das liest sowieso niemand.',
          frage:'Was macht die Chefin?',
          opt:['Nur loben.','Loben und einen Verbesserungswunsch nennen.','Nur kritisieren.'],
          loesung:1, stelle:'Beim nächsten Mal bitte etwas weniger Text',
          erklaerung:'Erst Lob, dann Wunsch. Die Frage zielt auf beides — eine reine Kritik wäre falsch.' },
        { art:'hoerwahl', ort:'Ansage im Kino', wer:'Mann',
          text:'Wir möchten Sie daran erinnern, während der Vorstellung die Handys stumm zu schalten. Vielen Dank für Ihr Verständnis.',
          frage:'Worum wird gebeten?',
          opt:['Die Handys auszuschalten.','Die Handys lautlos zu stellen.','Die Handys abzugeben.'],
          loesung:1, stelle:'stumm zu schalten',
          erklaerung:'„stumm schalten" ist nicht dasselbe wie ausschalten. Auf B1 zählt genau dieser Unterschied.' },
        { art:'hoerwahl', ort:'Nachricht der Autowerkstatt', wer:'Frau',
          text:'Ihr Wagen ist fertig, allerdings mussten wir auch die Bremsen machen. Das wird etwas teurer als besprochen.',
          frage:'Was ist die eigentliche Nachricht?',
          opt:['Das Auto ist kaputt.','Es kostet mehr als geplant.','Die Reparatur dauert länger.'],
          loesung:1, stelle:'Das wird etwas teurer als besprochen',
          erklaerung:'Die gute Nachricht steht vorn, die eigentliche nach dem „allerdings".' },
        { art:'hoerwahl', ort:'Ansage der Volkshochschule', wer:'Mann',
          text:'Für den Kurs sind noch drei Plätze frei. Eine Anmeldung ist bis zum Freitag dieser Woche möglich, danach nicht mehr.',
          frage:'Was ist wichtig?',
          opt:['Der Kurs ist voll.','Man muss sich bis Freitag anmelden.','Der Kurs fällt aus.'],
          loesung:1, stelle:'bis zum Freitag dieser Woche',
          erklaerung:'„danach nicht mehr" macht die Frist zur eigentlichen Information.' }
      ] }
  ],

  /* ==========================================================
     STUFE 3 — die echten Prüfungsteile
     ========================================================== */

  teile: [

    { nr:1, art:'ansage', name:'Kurze Nachrichten und Ansagen',
      kurz:'Fünf kurze Texte, je zwei Aufgaben — zweimal hören',
      was:'Du hörst kurze Nachrichten vom Anrufbeantworter, Durchsagen und Radiomeldungen. Zu jedem Text gibt es eine Richtig/Falsch-Aufgabe und eine Frage mit drei Antworten.',
      tipp:'Lies beide Aufgaben, bevor der Text läuft. Beim ersten Hören die Richtig/Falsch-Frage, beim zweiten die Auswahl.',
      zeichen:'📞', farbe:'turq', punkte:10, mal:2,
      runden: [
        { id:'b1t1r1', titel:'Nachrichten auf dem Anrufbeantworter',
          aufgaben: [
            { von:'Nachricht von Frau Özdemir', wer:'Frau',
              text:'Guten Tag, hier ist Sevim Özdemir vom Sprachenzentrum. Ihr Kurs beginnt doch nicht am Montag, sondern erst am Mittwoch. Der Raum bleibt derselbe, Raum zweihundertzwölf. Bitte geben Sie das auch Ihrer Kollegin weiter, ich erreiche sie nicht.',
              satz:'Der Kurs beginnt später als geplant.',
              loesung:true, stelle:'nicht am Montag, sondern erst am Mittwoch',
              erklaerung:'Mittwoch liegt nach Montag, also später. Die Aussage stimmt.' },
            { von:'Nachricht von Frau Özdemir', wer:'Frau',
              text:'Guten Tag, hier ist Sevim Özdemir vom Sprachenzentrum. Ihr Kurs beginnt doch nicht am Montag, sondern erst am Mittwoch. Der Raum bleibt derselbe, Raum zweihundertzwölf. Bitte geben Sie das auch Ihrer Kollegin weiter, ich erreiche sie nicht.',
              frage:'Worum wird die Hörerin gebeten?',
              opt:['Den Raum zu wechseln.','Die Kollegin zu informieren.','Zurückzurufen.'],
              loesung:1, stelle:'geben Sie das auch Ihrer Kollegin weiter',
              erklaerung:'„weitergeben" heißt informieren. Ein Rückruf wird nirgends verlangt.' },
            { von:'Nachricht von der Autowerkstatt', wer:'Mann',
              text:'Hallo Frau Bauer, Werkstatt Krüger hier. Ihr Wagen ist fertig, Sie können ihn ab morgen früh abholen. Wir haben nur die Bremsen gemacht, der Auspuff war doch in Ordnung. Es bleibt deshalb bei den zweihundertachtzig Euro.',
              satz:'Die Reparatur wird teurer als geplant.',
              loesung:false, stelle:'Es bleibt deshalb bei den zweihundertachtzig Euro',
              erklaerung:'„Es bleibt bei" heißt: der Preis ändert sich nicht. Die Aussage ist also falsch.' },
            { von:'Nachricht von der Autowerkstatt', wer:'Mann',
              text:'Hallo Frau Bauer, Werkstatt Krüger hier. Ihr Wagen ist fertig, Sie können ihn ab morgen früh abholen. Wir haben nur die Bremsen gemacht, der Auspuff war doch in Ordnung. Es bleibt deshalb bei den zweihundertachtzig Euro.',
              frage:'Was wurde repariert?',
              opt:['Nur die Bremsen.','Bremsen und Auspuff.','Nur der Auspuff.'],
              loesung:0, stelle:'Wir haben nur die Bremsen gemacht',
              erklaerung:'Der Auspuff wird zwar erwähnt, war aber in Ordnung — eine klassische Ablenkung.' }
          ],
          erklaerung:'Beide Aufgaben gehören zum selben Text. In der Prüfung stehen sie untereinander auf dem Blatt.' },

        { id:'b1t1r2', titel:'Durchsagen unterwegs',
          aufgaben: [
            { von:'Durchsage im Hauptbahnhof', wer:'Mann',
              text:'Achtung an Gleis sieben: Der Regionalexpress nach Kassel fährt heute in umgekehrter Wagenreihung. Die erste Klasse befindet sich am hinteren Zugende. Der Zug ist außerdem etwa zehn Minuten verspätet.',
              satz:'Der Zug fällt heute aus.',
              loesung:false, stelle:'etwa zehn Minuten verspätet',
              erklaerung:'Verspätet ist nicht ausgefallen. Der Zug kommt, nur später.' },
            { von:'Durchsage im Hauptbahnhof', wer:'Mann',
              text:'Achtung an Gleis sieben: Der Regionalexpress nach Kassel fährt heute in umgekehrter Wagenreihung. Die erste Klasse befindet sich am hinteren Zugende. Der Zug ist außerdem etwa zehn Minuten verspätet.',
              frage:'Was ist heute anders?',
              opt:['Der Zug fährt von einem anderen Gleis.','Die Wagen sind anders angeordnet.','Es gibt keine erste Klasse.'],
              loesung:1, stelle:'in umgekehrter Wagenreihung',
              erklaerung:'„Wagenreihung" ist die Reihenfolge der Wagen. „Umgekehrt" heißt: andersherum als sonst.' },
            { von:'Durchsage im Kaufhaus', wer:'Frau',
              text:'Liebe Kundinnen und Kunden, wir schließen heute bereits um achtzehn Uhr, da wir Inventur machen. Ab morgen sind wir wieder zu den gewohnten Zeiten für Sie da, also von neun bis zwanzig Uhr.',
              satz:'Das Kaufhaus schließt heute früher als sonst.',
              loesung:true, stelle:'wir schließen heute bereits um achtzehn Uhr',
              erklaerung:'„bereits um achtzehn Uhr" gegenüber sonst zwanzig Uhr — also früher.' },
            { von:'Durchsage im Kaufhaus', wer:'Frau',
              text:'Liebe Kundinnen und Kunden, wir schließen heute bereits um achtzehn Uhr, da wir Inventur machen. Ab morgen sind wir wieder zu den gewohnten Zeiten für Sie da, also von neun bis zwanzig Uhr.',
              frage:'Warum schließt das Kaufhaus früher?',
              opt:['Wegen eines Feiertags.','Wegen der Inventur.','Wegen eines Umbaus.'],
              loesung:1, stelle:'da wir Inventur machen',
              erklaerung:'„da" begründet hier — es ist dasselbe wie „weil".' }
          ],
          erklaerung:'Durchsagen sind kurz und kommen nur einmal zur Sache. Achte auf das Wort nach „da" oder „weil".' },

        { id:'b1t1r3', titel:'Meldungen im Radio',
          aufgaben: [
            { von:'Verkehrsmeldung', wer:'Frau',
              text:'Und noch eine Meldung für die Autofahrer: Auf der A vierzig zwischen Bochum und Essen ist nach einem Unfall der rechte Fahrstreifen gesperrt. Es hat sich bereits ein Stau von rund fünf Kilometern gebildet. Umfahren Sie die Stelle möglichst weiträumig.',
              satz:'Die Autobahn ist komplett gesperrt.',
              loesung:false, stelle:'der rechte Fahrstreifen gesperrt',
              erklaerung:'Nur ein Fahrstreifen ist gesperrt, nicht die ganze Autobahn.' },
            { von:'Verkehrsmeldung', wer:'Frau',
              text:'Und noch eine Meldung für die Autofahrer: Auf der A vierzig zwischen Bochum und Essen ist nach einem Unfall der rechte Fahrstreifen gesperrt. Es hat sich bereits ein Stau von rund fünf Kilometern gebildet. Umfahren Sie die Stelle möglichst weiträumig.',
              frage:'Was wird den Autofahrern geraten?',
              opt:['Langsam durch den Stau zu fahren.','Einen weiten Bogen zu machen.','Auf der Autobahn zu warten.'],
              loesung:1, stelle:'Umfahren Sie die Stelle möglichst weiträumig',
              erklaerung:'„weiträumig umfahren" heißt: einen großen Umweg nehmen.' },
            { von:'Veranstaltungshinweis', wer:'Mann',
              text:'Das Stadtfest am kommenden Wochenende findet statt — bei jedem Wetter. Neu ist in diesem Jahr, dass der Eintritt für Kinder unter zwölf Jahren frei ist. Erwachsene zahlen wie bisher sechs Euro.',
              satz:'Kinder müssen keinen Eintritt zahlen.',
              loesung:true, stelle:'für Kinder unter zwölf Jahren frei ist',
              erklaerung:'Die Altersgrenze schränkt zwar ein, die Aussage über Kinder stimmt aber.' },
            { von:'Veranstaltungshinweis', wer:'Mann',
              text:'Das Stadtfest am kommenden Wochenende findet statt — bei jedem Wetter. Neu ist in diesem Jahr, dass der Eintritt für Kinder unter zwölf Jahren frei ist. Erwachsene zahlen wie bisher sechs Euro.',
              frage:'Was hat sich gegenüber dem letzten Jahr geändert?',
              opt:['Der Preis für Erwachsene.','Der Eintritt für Kinder.','Der Termin des Festes.'],
              loesung:1, stelle:'Neu ist in diesem Jahr',
              erklaerung:'„Neu ist in diesem Jahr" markiert die Änderung. Für Erwachsene gilt „wie bisher".' }
          ],
          erklaerung:'Radiomeldungen sind dicht gepackt. Das Wort „neu" oder „geändert" zeigt dir, worauf die Frage zielt.' }
      ] },

    { nr:2, art:'vortrag', name:'Ein Vortrag',
      kurz:'Ein längerer Text am Stück — nur EINMAL hören',
      was:'Du hörst einen Vortrag, eine Führung oder eine Präsentation. Fünf Fragen mit je drei Antworten, in der Reihenfolge des Textes.',
      tipp:'Du hörst nur einmal. Lies die Fragen vorher und hake im Kopf ab — die Antworten kommen in derselben Reihenfolge wie im Text.',
      zeichen:'🎙️', farbe:'gold', punkte:5, mal:1,
      runden: [
        { id:'b1t2r1', titel:'Führung durch die Stadtbibliothek',
          aufgaben: [
            { ort:'Stadtbibliothek, Begrüßung', wer:'Frau',
              text:'Herzlich willkommen in der Stadtbibliothek. Mein Name ist Petra Lindner, ich leite hier seit vier Jahren die Abteilung für Medien. Bevor wir starten: Die Führung dauert etwa fünfzig Minuten, Fragen können Sie jederzeit stellen.',
              frage:'Was ist der Beruf der Sprecherin?',
              opt:['Sie ist Abteilungsleiterin.','Sie ist Auszubildende.','Sie ist Besucherin.'],
              loesung:0, stelle:'ich leite hier seit vier Jahren die Abteilung',
              erklaerung:'„Ich leite die Abteilung" — die vier Jahre sind nur die Dauer, nicht ihr Beruf.' },
            { ort:'Stadtbibliothek, Ausleihe', wer:'Frau',
              text:'Zur Ausleihe: Bücher dürfen Sie vier Wochen behalten, Filme und Spiele dagegen nur eine Woche. Das liegt schlicht daran, dass die Nachfrage bei den Filmen viel größer ist.',
              frage:'Warum ist die Leihfrist für Filme kürzer?',
              opt:['Weil Filme teurer sind.','Weil viele Leute sie ausleihen wollen.','Weil sie schneller kaputtgehen.'],
              loesung:1, stelle:'dass die Nachfrage bei den Filmen viel größer ist',
              erklaerung:'„Nachfrage" heißt: viele wollen es haben. Preis und Haltbarkeit kommen gar nicht vor.' },
            { ort:'Stadtbibliothek, Lernbereich', wer:'Frau',
              text:'Im ersten Stock finden Sie unseren Lernbereich. Dort gilt eine Regel, auf die wir sehr achten: absolute Ruhe. Wer telefonieren möchte, geht bitte ins Treppenhaus. Gruppenarbeit ist im Raum daneben möglich.',
              frage:'Was darf man im Lernbereich nicht?',
              opt:['Lesen.','Telefonieren.','Schreiben.'],
              loesung:1, stelle:'Wer telefonieren möchte, geht bitte ins Treppenhaus',
              erklaerung:'Die Aufforderung, zum Telefonieren hinauszugehen, ist das Verbot im Raum.' },
            { ort:'Stadtbibliothek, Angebote', wer:'Frau',
              text:'Ein Angebot möchte ich Ihnen besonders ans Herz legen: unseren Lesekreis. Der trifft sich jeden zweiten Donnerstag im Monat, abends um neunzehn Uhr. Anmelden muss man sich nicht, kommen Sie einfach vorbei.',
              frage:'Was gilt für den Lesekreis?',
              opt:['Man muss sich vorher anmelden.','Man kann ohne Anmeldung kommen.','Er kostet einen Beitrag.'],
              loesung:1, stelle:'Anmelden muss man sich nicht',
              erklaerung:'„kommen Sie einfach vorbei" bestätigt es noch einmal.' },
            { ort:'Stadtbibliothek, Abschluss', wer:'Frau',
              text:'Zum Schluss noch ein Hinweis: Ab dem kommenden Jahr wird der Ausweis für alle unter fünfundzwanzig kostenlos. Bisher waren es zehn Euro im Jahr. Für alle anderen bleibt der Beitrag unverändert.',
              frage:'Was ändert sich im nächsten Jahr?',
              opt:['Der Ausweis wird für junge Leute gratis.','Der Ausweis kostet für alle zehn Euro.','Der Ausweis wird abgeschafft.'],
              loesung:0, stelle:'für alle unter fünfundzwanzig kostenlos',
              erklaerung:'„Für alle anderen bleibt der Beitrag unverändert" — die Änderung betrifft nur die Jüngeren.' }
          ],
          erklaerung:'Die Fragen folgen dem Vortrag der Reihe nach. Wenn du eine verpasst, spring gedanklich zur nächsten weiter.' },

        { id:'b1t2r2', titel:'Vortrag über gesunden Schlaf',
          aufgaben: [
            { ort:'Volkshochschule, Vortrag', wer:'Mann',
              text:'Guten Abend. Ich bin Arzt und beschäftige mich seit über zehn Jahren mit dem Thema Schlaf. Heute Abend geht es mir nicht um Krankheiten, sondern um ganz normale Gewohnheiten, die jeder ändern kann.',
              frage:'Worum geht es im Vortrag?',
              opt:['Um Schlafkrankheiten.','Um alltägliche Gewohnheiten.','Um Medikamente.'],
              loesung:1, stelle:'sondern um ganz normale Gewohnheiten',
              erklaerung:'Das „nicht … sondern" grenzt klar ab. Das erste ist immer die falsche Spur.' },
            { ort:'Volkshochschule, Vortrag', wer:'Mann',
              text:'Der häufigste Fehler ist übrigens nicht der späte Kaffee, wie viele denken. Es ist der unregelmäßige Rhythmus. Wer am Wochenende drei Stunden länger schläft, bringt seine innere Uhr durcheinander.',
              frage:'Was ist laut dem Arzt der größte Fehler?',
              opt:['Kaffee am Abend.','Ganz unterschiedliche Schlafzeiten.','Zu wenig Bewegung.'],
              loesung:1, stelle:'Es ist der unregelmäßige Rhythmus',
              erklaerung:'Der Kaffee wird ausdrücklich als Irrtum genannt — genau das ist die Falle.' },
            { ort:'Volkshochschule, Vortrag', wer:'Mann',
              text:'Zum Thema Bildschirm: Das Licht allein ist gar nicht das größte Problem. Schlimmer ist, was wir dabei tun — Nachrichten lesen, arbeiten, uns aufregen. Der Kopf kommt dann nicht zur Ruhe.',
              frage:'Was ist am Bildschirm abends besonders schädlich?',
              opt:['Das helle Licht.','Der aufregende Inhalt.','Die Haltung im Bett.'],
              loesung:1, stelle:'Schlimmer ist, was wir dabei tun',
              erklaerung:'Er relativiert das Licht und nennt den Inhalt als eigentliches Problem.' },
            { ort:'Volkshochschule, Vortrag', wer:'Mann',
              text:'Wenn Sie nachts aufwachen und nicht wieder einschlafen können, bleiben Sie nicht liegen. Stehen Sie auf, gehen Sie in einen anderen Raum, lesen Sie etwas Langweiliges. Zurück ins Bett erst, wenn Sie müde sind.',
              frage:'Was rät der Arzt beim nächtlichen Aufwachen?',
              opt:['Liegen bleiben und die Augen schließen.','Aufstehen und den Raum wechseln.','Etwas essen.'],
              loesung:1, stelle:'Stehen Sie auf, gehen Sie in einen anderen Raum',
              erklaerung:'„bleiben Sie nicht liegen" ist die Verneinung der ersten Option.' },
            { ort:'Volkshochschule, Vortrag', wer:'Mann',
              text:'Und noch etwas zum Schluss, das mich immer wieder überrascht: Ein kurzer Mittagsschlaf schadet nicht, im Gegenteil. Aber er sollte zwanzig Minuten nicht überschreiten, sonst wird man schwer wach und schläft abends schlechter ein.',
              frage:'Was sagt er über den Mittagsschlaf?',
              opt:['Man sollte ihn ganz lassen.','Kurz ist gut, lang ist schlecht.','Je länger, desto besser.'],
              loesung:1, stelle:'sollte zwanzig Minuten nicht überschreiten',
              erklaerung:'„schadet nicht, im Gegenteil" plus die Zeitgrenze ergibt: kurz ja, lang nein.' }
          ],
          erklaerung:'In Vorträgen steht die Lösung oft hinter „nicht …, sondern" oder „schlimmer ist". Diese Wendungen sind die Wegweiser.' },

        { id:'b1t2r3', titel:'Präsentation im Betrieb',
          aufgaben: [
            { ort:'Betriebsversammlung', wer:'Frau',
              text:'Ich stelle Ihnen heute unser neues Arbeitszeitmodell vor. Vorweg: Es ist freiwillig. Niemand muss wechseln, wer beim alten Modell bleiben möchte, kann das ohne Nachteile tun.',
              frage:'Was gilt für das neue Modell?',
              opt:['Alle müssen wechseln.','Der Wechsel ist freiwillig.','Nur neue Mitarbeiter dürfen wechseln.'],
              loesung:1, stelle:'Es ist freiwillig',
              erklaerung:'„ohne Nachteile" bestätigt, dass Bleiben wirklich erlaubt ist.' },
            { ort:'Betriebsversammlung', wer:'Frau',
              text:'Der Kern ist die Vier-Tage-Woche. Die Wochenstunden bleiben gleich, sie verteilen sich nur auf vier statt fünf Tage. Das heißt konkret: längere Tage, dafür ein freier Tag mehr.',
              frage:'Was ändert sich bei der Arbeitszeit?',
              opt:['Man arbeitet insgesamt weniger.','Dieselbe Zeit auf weniger Tage verteilt.','Man arbeitet mehr Stunden.'],
              loesung:1, stelle:'Die Wochenstunden bleiben gleich',
              erklaerung:'„bleiben gleich" schließt „insgesamt weniger" und „mehr" beide aus.' },
            { ort:'Betriebsversammlung', wer:'Frau',
              text:'Ein Punkt, der viele beschäftigt: das Gehalt. Da kann ich Sie beruhigen, es bleibt unverändert. Auch der Urlaubsanspruch ändert sich nicht, er wird lediglich in Tagen anders gerechnet.',
              frage:'Was passiert mit dem Gehalt?',
              opt:['Es sinkt.','Es bleibt gleich.','Es steigt.'],
              loesung:1, stelle:'es bleibt unverändert',
              erklaerung:'Der Urlaub wird nur anders gerechnet — das ist keine Änderung des Anspruchs.' },
            { ort:'Betriebsversammlung', wer:'Frau',
              text:'Nicht alle Abteilungen können mitmachen. In der Produktion geht es aus organisatorischen Gründen leider nicht, dort brauchen wir jeden Tag Besetzung. Verwaltung und Vertrieb dagegen können sofort starten.',
              frage:'Welche Abteilung kann nicht teilnehmen?',
              opt:['Die Verwaltung.','Die Produktion.','Der Vertrieb.'],
              loesung:1, stelle:'In der Produktion geht es aus organisatorischen Gründen leider nicht',
              erklaerung:'Die anderen beiden werden ausdrücklich als möglich genannt.' },
            { ort:'Betriebsversammlung', wer:'Frau',
              text:'Wer Interesse hat, meldet sich bitte bis Ende des Monats bei mir. Wir starten dann mit einer Probephase von sechs Monaten. Danach schauen wir gemeinsam, ob es funktioniert hat.',
              frage:'Wie geht es weiter?',
              opt:['Es beginnt sofort für alle dauerhaft.','Es gibt zuerst eine halbjährige Probephase.','Es wird noch abgestimmt.'],
              loesung:1, stelle:'einer Probephase von sechs Monaten',
              erklaerung:'Sechs Monate sind ein halbes Jahr — die Aufgabe rechnet für dich um.' }
          ],
          erklaerung:'Beruflicher Wortschatz wie Urlaubsanspruch oder Besetzung gehört auf B1 dazu. Der Sinn erschließt sich meist aus dem Satz drumherum.' }
      ] },

    { nr:3, art:'gespraech', name:'Ein Alltagsgespräch',
      kurz:'Zwei Menschen im Gespräch, richtig oder falsch — nur EINMAL hören',
      was:'Du hörst ein längeres Gespräch aus dem Alltag. Zu jeder Aussage entscheidest du, ob sie zum Gehörten passt.',
      tipp:'Achte darauf, WER etwas sagt. Viele falsche Aussagen stimmen inhaltlich — nur die falsche Person hat es gesagt.',
      zeichen:'💬', farbe:'rot', punkte:7, mal:1,
      runden: [
        { id:'b1t3r1', titel:'Ein Gespräch über den Umzug',
          aufgaben: [
            { ort:'Zwei Freunde in der Küche',
              zeilen: [
                { wer:'Frau', text:'Und, habt ihr die Wohnung jetzt genommen?' },
                { wer:'Mann', text:'Ja, wir unterschreiben nächste Woche. Sie ist kleiner als die alte, aber der Balkon ist riesig.' },
                { wer:'Frau', text:'Kleiner? Ich dachte, ihr braucht mehr Platz wegen des Babys.' },
                { wer:'Mann', text:'Das schon, aber die Lage war uns wichtiger. Ich bin jetzt in zehn Minuten zu Fuß im Büro.' }
              ],
              satz:'Die neue Wohnung ist größer als die alte.',
              loesung:false, stelle:'Sie ist kleiner als die alte',
              erklaerung:'Er sagt ausdrücklich kleiner. Der große Balkon ändert daran nichts.' },
            { ort:'Zwei Freunde in der Küche',
              zeilen: [
                { wer:'Frau', text:'Und, habt ihr die Wohnung jetzt genommen?' },
                { wer:'Mann', text:'Ja, wir unterschreiben nächste Woche. Sie ist kleiner als die alte, aber der Balkon ist riesig.' },
                { wer:'Frau', text:'Kleiner? Ich dachte, ihr braucht mehr Platz wegen des Babys.' },
                { wer:'Mann', text:'Das schon, aber die Lage war uns wichtiger. Ich bin jetzt in zehn Minuten zu Fuß im Büro.' }
              ],
              satz:'Für den Mann ist der kurze Arbeitsweg wichtig.',
              loesung:true, stelle:'Ich bin jetzt in zehn Minuten zu Fuß im Büro',
              erklaerung:'„die Lage war uns wichtiger" plus der kurze Weg — beides zusammen macht die Aussage richtig.' },
            { ort:'Zwei Freunde in der Küche',
              zeilen: [
                { wer:'Frau', text:'Wann zieht ihr denn um?' },
                { wer:'Mann', text:'Ende September. Wir wollten eigentlich schon im August, aber die Wohnung wird noch gestrichen.' },
                { wer:'Frau', text:'Macht ihr das selbst?' },
                { wer:'Mann', text:'Nein, um Gottes willen. Das macht der Vermieter, das war Teil der Absprache.' }
              ],
              satz:'Der Mann streicht die Wohnung selbst.',
              loesung:false, stelle:'Das macht der Vermieter',
              erklaerung:'„um Gottes willen" ist umgangssprachlich für: auf keinen Fall.' },
            { ort:'Zwei Freunde in der Küche',
              zeilen: [
                { wer:'Frau', text:'Braucht ihr Hilfe beim Tragen?' },
                { wer:'Mann', text:'Sehr gern sogar. Wir haben eine Firma für die schweren Sachen, aber die Kisten machen wir selbst.' },
                { wer:'Frau', text:'Dann bin ich dabei. Sag mir einfach rechtzeitig Bescheid.' },
                { wer:'Mann', text:'Mach ich. Ich schreibe dir, sobald der Termin steht.' }
              ],
              satz:'Eine Umzugsfirma übernimmt den kompletten Umzug.',
              loesung:false, stelle:'aber die Kisten machen wir selbst',
              erklaerung:'Die Firma macht nur die schweren Sachen. „Komplett" stimmt deshalb nicht.' }
          ],
          erklaerung:'In Teil drei geht es fast immer darum, ob eine Aussage zu ABSOLUT formuliert ist. Wörter wie komplett, immer oder nie sind verdächtig.' },

        { id:'b1t3r2', titel:'Beim Elterngespräch in der Schule',
          aufgaben: [
            { ort:'Lehrerin und Vater',
              zeilen: [
                { wer:'Frau', text:'Schön, dass Sie da sind. Mit Leon läuft es im Großen und Ganzen gut, das möchte ich vorwegschicken.' },
                { wer:'Mann', text:'Das freut mich zu hören. Zu Hause klagt er nämlich manchmal über Mathe.' },
                { wer:'Frau', text:'Ja, Mathematik ist tatsächlich sein schwächstes Fach. Aber er meldet sich, er fragt nach — das ist die halbe Miete.' }
              ],
              satz:'Leon hat in allen Fächern Schwierigkeiten.',
              loesung:false, stelle:'im Großen und Ganzen gut',
              erklaerung:'Nur Mathematik wird als schwach genannt, sonst läuft es gut.' },
            { ort:'Lehrerin und Vater',
              zeilen: [
                { wer:'Frau', text:'Mathematik ist sein schwächstes Fach. Aber er meldet sich, er fragt nach.' },
                { wer:'Mann', text:'Sollen wir Nachhilfe organisieren?' },
                { wer:'Frau', text:'Ich würde damit noch warten. Wir haben ab Oktober eine Förderstunde in der Schule, die ist kostenlos. Probieren wir das erst.' }
              ],
              satz:'Die Lehrerin empfiehlt sofort Nachhilfe.',
              loesung:false, stelle:'Ich würde damit noch warten',
              erklaerung:'Sie schlägt ausdrücklich zuerst die schulische Förderstunde vor.' },
            { ort:'Lehrerin und Vater',
              zeilen: [
                { wer:'Frau', text:'Wir haben ab Oktober eine Förderstunde in der Schule, die ist kostenlos.' },
                { wer:'Mann', text:'Und wann genau ist die?' },
                { wer:'Frau', text:'Immer dienstags in der siebten Stunde. Leon müsste dafür eine Stunde länger bleiben.' }
              ],
              satz:'Die Förderstunde kostet nichts.',
              loesung:true, stelle:'die ist kostenlos',
              erklaerung:'Direkt gesagt. Solche eindeutigen Aussagen gibt es in Teil drei auch — nicht jede ist eine Falle.' },
            { ort:'Lehrerin und Vater',
              zeilen: [
                { wer:'Mann', text:'Eine Sache noch: Leon möchte im Sommer an der Klassenfahrt teilnehmen. Ist das finanziell zu stemmen?' },
                { wer:'Frau', text:'Sprechen Sie mich da bitte einzeln an. Es gibt einen Fonds für solche Fälle, davon wissen die wenigsten.' },
                { wer:'Mann', text:'Das wäre eine große Hilfe, danke.' }
              ],
              satz:'Es gibt eine finanzielle Unterstützung für die Klassenfahrt.',
              loesung:true, stelle:'Es gibt einen Fonds für solche Fälle',
              erklaerung:'Ein Fonds ist ein Topf Geld für bestimmte Zwecke — hier die Unterstützung.' }
          ],
          erklaerung:'Achte auf „ich würde noch warten" oder „erst einmal". Das sind Signale gegen die schnelle, naheliegende Antwort.' },

        { id:'b1t3r3', titel:'Im Fitnessstudio, Beratungsgespräch',
          aufgaben: [
            { ort:'Trainerin und Kunde',
              zeilen: [
                { wer:'Frau', text:'Sie wollen also wieder anfangen. Haben Sie schon einmal trainiert?' },
                { wer:'Mann', text:'Vor der Pandemie, ja. Danach ist es komplett eingeschlafen. Ich merke das inzwischen am Rücken.' },
                { wer:'Frau', text:'Dann fangen wir langsam an. Zweimal die Woche reicht am Anfang völlig.' }
              ],
              satz:'Der Mann hat noch nie trainiert.',
              loesung:false, stelle:'Vor der Pandemie, ja',
              erklaerung:'Er hat früher trainiert und dann aufgehört. „Noch nie" ist falsch.' },
            { ort:'Trainerin und Kunde',
              zeilen: [
                { wer:'Frau', text:'Zweimal die Woche reicht am Anfang völlig.' },
                { wer:'Mann', text:'Ich hätte gedacht, öfter wäre besser.' },
                { wer:'Frau', text:'Verstehe ich, aber das geht meistens schief. Wer zu schnell zu viel macht, hört nach vier Wochen wieder auf.' }
              ],
              satz:'Die Trainerin empfiehlt, möglichst oft zu trainieren.',
              loesung:false, stelle:'Zweimal die Woche reicht am Anfang völlig',
              erklaerung:'Sie warnt sogar ausdrücklich vor zu viel am Anfang.' },
            { ort:'Trainerin und Kunde',
              zeilen: [
                { wer:'Mann', text:'Was kostet das bei Ihnen im Monat?' },
                { wer:'Frau', text:'Neunundzwanzig Euro, wenn Sie sich für ein Jahr binden. Ohne Bindung sind es neununddreißig.' },
                { wer:'Mann', text:'Dann nehme ich lieber erst mal ohne Vertrag.' }
              ],
              satz:'Der Mann entscheidet sich für den günstigeren Jahresvertrag.',
              loesung:false, stelle:'Dann nehme ich lieber erst mal ohne Vertrag',
              erklaerung:'Er wählt die teurere Variante ohne Bindung. Der Preis stimmt, die Person entscheidet anders.' },
            { ort:'Trainerin und Kunde',
              zeilen: [
                { wer:'Frau', text:'Eine Bitte noch: Gehen Sie vorher einmal zum Arzt, wegen des Rückens.' },
                { wer:'Mann', text:'Ist das Pflicht?' },
                { wer:'Frau', text:'Pflicht nicht, aber ich würde es Ihnen wirklich ans Herz legen.' }
              ],
              satz:'Ein Arztbesuch ist vorgeschrieben.',
              loesung:false, stelle:'Pflicht nicht',
              erklaerung:'Sie empfiehlt es dringend, verlangt es aber nicht. Genau dieser Unterschied wird geprüft.' }
          ],
          erklaerung:'Ein Rat ist keine Vorschrift. Wörter wie Pflicht, muss oder vorgeschrieben solltest du immer gegen den Text prüfen.' }
      ] },

    { nr:4, art:'diskussion', name:'Wer sagt was?',
      kurz:'Eine Diskussion mit zwei Gästen — zweimal hören',
      was:'Zwei Menschen diskutieren, meist mit einer Moderation. Zu jeder Aussage entscheidest du, wer sie vertritt: die eine Person, die andere oder beide.',
      tipp:'Merke dir zuerst die Grundhaltung: Wer ist eher dafür, wer eher dagegen? Danach ordnest du fast jede Aussage richtig zu.',
      zeichen:'🗣️', farbe:'gruen', punkte:8, mal:2,
      runden: [
        { id:'b1t4r1', titel:'Sollen Kinder ein Smartphone haben?',
          aufgaben: [
            { ort:'Radiodiskussion — Frau Behrens und Herr Ilic',
              zeilen: [
                { wer:'Frau', text:'Ich bin Lehrerin und sehe jeden Tag, was das mit der Konzentration macht. Vor der neunten Klasse hat so ein Gerät im Ranzen nichts zu suchen.' },
                { wer:'Mann', text:'Da bin ich völlig anderer Meinung. Wer nichts hat, ist außen vor — der ganze Klassenchat läuft darüber.' }
              ],
              frage:'Wer sagt: Ohne Handy sind Kinder sozial ausgeschlossen?',
              opt:['Frau Behrens','Herr Ilic','beide'],
              loesung:1, stelle:'Wer nichts hat, ist außen vor',
              erklaerung:'„außen vor sein" heißt: nicht dabei sein. Das sagt nur Herr Ilic.' },
            { ort:'Radiodiskussion — Frau Behrens und Herr Ilic',
              zeilen: [
                { wer:'Frau', text:'Dass die Kinder Medien lernen müssen, bestreite ich ja gar nicht. Nur eben begleitet, nicht allein im Kinderzimmer.' },
                { wer:'Mann', text:'Genau da sind wir uns einig. Ohne Begleitung durch die Eltern funktioniert es nicht.' }
              ],
              frage:'Wer meint: Eltern müssen die Kinder dabei begleiten?',
              opt:['Frau Behrens','Herr Ilic','beide'],
              loesung:2, stelle:'Genau da sind wir uns einig',
              erklaerung:'„Da sind wir uns einig" ist das klarste Signal für die Antwort „beide".' },
            { ort:'Radiodiskussion — Frau Behrens und Herr Ilic',
              zeilen: [
                { wer:'Mann', text:'Für mich ist die Erreichbarkeit auf dem Schulweg ein echtes Argument. Da bin ich als Vater einfach ruhiger.' },
                { wer:'Frau', text:'Das höre ich oft. Ehrlich gesagt halte ich es für ein Elternbedürfnis, nicht für ein Kinderbedürfnis.' }
              ],
              frage:'Wer nennt die Erreichbarkeit als Vorteil?',
              opt:['Frau Behrens','Herr Ilic','beide'],
              loesung:1, stelle:'Da bin ich als Vater einfach ruhiger',
              erklaerung:'Frau Behrens erwähnt es zwar, weist es aber zurück. Erwähnen ist nicht vertreten.' },
            { ort:'Radiodiskussion — Frau Behrens und Herr Ilic',
              zeilen: [
                { wer:'Frau', text:'Was mich wirklich umtreibt, ist der Schlaf. Die Geräte liegen nachts neben dem Bett, das sieht man am nächsten Morgen.' },
                { wer:'Mann', text:'Das kann ich nur bestätigen. Bei uns zu Hause bleibt das Handy ab acht Uhr abends in der Küche.' }
              ],
              frage:'Wer sieht ein Problem beim Schlaf?',
              opt:['Frau Behrens','Herr Ilic','beide'],
              loesung:2, stelle:'Das kann ich nur bestätigen',
              erklaerung:'Er bestätigt und nennt sogar eine eigene Regel — also beide.' }
          ],
          erklaerung:'„Da sind wir uns einig", „das kann ich nur bestätigen" und „genau" führen fast immer zur Antwort beide.' },

        { id:'b1t4r2', titel:'Autofreie Innenstadt',
          aufgaben: [
            { ort:'Stadtgespräch — Herr Novak und Frau Peters',
              zeilen: [
                { wer:'Mann', text:'Ich betreibe ein Geschäft in der Fußgängerzone. Wenn niemand mehr mit dem Auto kommt, kaufen die Leute eben woanders.' },
                { wer:'Frau', text:'Die Zahlen sagen etwas anderes. In Städten mit autofreien Zentren ist der Umsatz im Schnitt gestiegen.' }
              ],
              frage:'Wer fürchtet Nachteile für die Geschäfte?',
              opt:['Herr Novak','Frau Peters','beide'],
              loesung:0, stelle:'kaufen die Leute eben woanders',
              erklaerung:'Frau Peters widerspricht mit Zahlen — sie teilt die Sorge also nicht.' },
            { ort:'Stadtgespräch — Herr Novak und Frau Peters',
              zeilen: [
                { wer:'Frau', text:'Was wir wirklich brauchen, ist ein besserer Nahverkehr. Ohne den funktioniert keine autofreie Innenstadt.' },
                { wer:'Mann', text:'Da rennen Sie bei mir offene Türen ein. Solange der Bus einmal pro Stunde fährt, ist das alles Theorie.' }
              ],
              frage:'Wer fordert einen besseren Nahverkehr?',
              opt:['Herr Novak','Frau Peters','beide'],
              loesung:2, stelle:'Da rennen Sie bei mir offene Türen ein',
              erklaerung:'„offene Türen einrennen" heißt: dafür muss man mich nicht überzeugen, ich bin längst dafür.' },
            { ort:'Stadtgespräch — Herr Novak und Frau Peters',
              zeilen: [
                { wer:'Frau', text:'Für Familien mit kleinen Kindern wäre eine ruhige Innenstadt ein Gewinn. Man könnte die Kinder einfach laufen lassen.' },
                { wer:'Mann', text:'Mag sein. Ich sehe eher die älteren Kundinnen, die mit dem Bus schlecht zurechtkommen.' }
              ],
              frage:'Wer denkt vor allem an ältere Menschen?',
              opt:['Herr Novak','Frau Peters','beide'],
              loesung:0, stelle:'Ich sehe eher die älteren Kundinnen',
              erklaerung:'„Mag sein" ist keine Zustimmung, sondern ein höfliches Beiseiteschieben.' },
            { ort:'Stadtgespräch — Herr Novak und Frau Peters',
              zeilen: [
                { wer:'Mann', text:'Was ich mir vorstellen könnte, wäre eine Lösung mit Lieferzeiten am Morgen. Damit kämen wir Händler zurecht.' },
                { wer:'Frau', text:'Das halte ich für vernünftig. So machen es andere Städte auch, und es klappt.' }
              ],
              frage:'Wer hält feste Lieferzeiten für einen guten Weg?',
              opt:['Herr Novak','Frau Peters','beide'],
              loesung:2, stelle:'Das halte ich für vernünftig',
              erklaerung:'Er schlägt vor, sie stimmt zu — die Antwort ist beide.' }
          ],
          erklaerung:'In Teil vier gibt es fast immer einen Punkt, an dem sich die Gegner einig sind. Den suchst du gezielt.' },

        { id:'b1t4r3', titel:'Arbeiten im Homeoffice',
          aufgaben: [
            { ort:'Podiumsgespräch — Frau Riedl und Herr Sommer',
              zeilen: [
                { wer:'Frau', text:'Seit ich zu Hause arbeite, schaffe ich deutlich mehr. Niemand steht alle zehn Minuten an meinem Schreibtisch.' },
                { wer:'Mann', text:'Bei mir ist es umgekehrt. Ich brauche die Kollegen, sonst fehlt mir der Antrieb.' }
              ],
              frage:'Wer arbeitet zu Hause produktiver?',
              opt:['Frau Riedl','Herr Sommer','beide'],
              loesung:0, stelle:'schaffe ich deutlich mehr',
              erklaerung:'„Bei mir ist es umgekehrt" kehrt die Aussage für ihn ins Gegenteil.' },
            { ort:'Podiumsgespräch — Frau Riedl und Herr Sommer',
              zeilen: [
                { wer:'Mann', text:'Was mir wirklich fehlt, ist das Zufällige. Das Gespräch in der Küche, aus dem plötzlich eine Idee wird.' },
                { wer:'Frau', text:'Das gebe ich zu, das geht verloren. Deshalb komme ich einmal pro Woche ins Büro.' }
              ],
              frage:'Wer vermisst den zufälligen Austausch mit Kollegen?',
              opt:['Frau Riedl','Herr Sommer','beide'],
              loesung:2, stelle:'Das gebe ich zu, das geht verloren',
              erklaerung:'„Das gebe ich zu" ist ein Eingeständnis — sie sieht denselben Verlust.' },
            { ort:'Podiumsgespräch — Frau Riedl und Herr Sommer',
              zeilen: [
                { wer:'Frau', text:'Ohne den Weg ins Büro habe ich jeden Tag anderthalb Stunden mehr. Das ist der eigentliche Gewinn.' },
                { wer:'Mann', text:'Der Weg stört mich ehrlich gesagt nicht. Ich lese im Zug, das ist meine Zeit.' }
              ],
              frage:'Wer sieht den Arbeitsweg als Verlust?',
              opt:['Frau Riedl','Herr Sommer','beide'],
              loesung:0, stelle:'Das ist der eigentliche Gewinn',
              erklaerung:'Er macht aus dem Weg sogar etwas Positives — für ihn ist es kein Verlust.' },
            { ort:'Podiumsgespräch — Frau Riedl und Herr Sommer',
              zeilen: [
                { wer:'Mann', text:'Ich glaube, die Mischung ist die Zukunft. Zwei Tage zu Hause, drei im Büro oder umgekehrt.' },
                { wer:'Frau', text:'So sehe ich das auch. Die Frage ist nur, wer die Tage festlegt — der Betrieb oder ich.' }
              ],
              frage:'Wer hält eine Mischform für sinnvoll?',
              opt:['Frau Riedl','Herr Sommer','beide'],
              loesung:2, stelle:'So sehe ich das auch',
              erklaerung:'Ihre Rückfrage nach der Festlegung ändert nichts an der Zustimmung zur Mischform.' }
          ],
          erklaerung:'Vorsicht bei „das gebe ich zu" und „so sehe ich das auch" — das sind Zustimmungen, auch wenn danach noch ein Einwand kommt.' }
      ] },
  ],

  /* ==========================================================
     STUFE 4 — die ganze Prüfung
     ========================================================== */

  laeufe: [

    { id:'b1hl1', titel:'Prüfungslauf 1', minuten:40,
      teile: [

        { nr:1, art:'ansage', mal:2, aufgaben: [
          { von:'Nachricht von der Hausverwaltung', wer:'Mann',
            text:'Guten Tag, Frau Anders, Hausverwaltung Reuter. Am Donnerstag wird zwischen acht und sechzehn Uhr das Wasser abgestellt, wir tauschen die Leitungen im Keller. Bitte stellen Sie sich etwas Wasser bereit. Der Aufzug läuft normal weiter.',
            satz:'Am Donnerstag funktioniert der Aufzug nicht.',
            loesung:false, stelle:'Der Aufzug läuft normal weiter',
            erklaerung:'Abgestellt wird das Wasser, nicht der Aufzug.' },
          { von:'Nachricht von der Hausverwaltung', wer:'Mann',
            text:'Guten Tag, Frau Anders, Hausverwaltung Reuter. Am Donnerstag wird zwischen acht und sechzehn Uhr das Wasser abgestellt, wir tauschen die Leitungen im Keller. Bitte stellen Sie sich etwas Wasser bereit. Der Aufzug läuft normal weiter.',
            frage:'Was sollen die Bewohner tun?',
            opt:['Die Wohnung verlassen.','Wasser vorbereiten.','Den Keller aufräumen.'],
            loesung:1, stelle:'stellen Sie sich etwas Wasser bereit',
            erklaerung:'Die einzige Aufforderung im Text.' },

          { von:'Nachricht einer Kollegin', wer:'Frau',
            text:'Hi Tom, ich bin es. Die Besprechung morgen fällt nicht aus, sie wird aber vorverlegt: statt vierzehn Uhr schon um elf. Bring bitte die Zahlen vom letzten Quartal mit, danach fragt der Chef bestimmt.',
            satz:'Die Besprechung findet später statt als geplant.',
            loesung:false, stelle:'statt vierzehn Uhr schon um elf',
            erklaerung:'Elf Uhr liegt vor vierzehn Uhr — also früher, nicht später.' },
          { von:'Nachricht einer Kollegin', wer:'Frau',
            text:'Hi Tom, ich bin es. Die Besprechung morgen fällt nicht aus, sie wird aber vorverlegt: statt vierzehn Uhr schon um elf. Bring bitte die Zahlen vom letzten Quartal mit, danach fragt der Chef bestimmt.',
            frage:'Was soll Tom mitbringen?',
            opt:['Die Zahlen des letzten Quartals.','Den Kalender.','Nichts.'],
            loesung:0, stelle:'Bring bitte die Zahlen vom letzten Quartal mit',
            erklaerung:'Direkt gesagt, mit Begründung im nächsten Satz.' },

          { von:'Durchsage im Flughafen', wer:'Frau',
            text:'Wichtiger Hinweis für die Passagiere des Fluges nach Wien: Der Abflug erfolgt nicht von Gate B zwölf, sondern von Gate A vier. Das Boarding beginnt in etwa zwanzig Minuten. Wir bitten Sie, sich rechtzeitig dort einzufinden.',
            satz:'Das Gate wurde geändert.',
            loesung:true, stelle:'nicht von Gate B zwölf, sondern von Gate A vier',
            erklaerung:'Genau das ist die Kernaussage der Durchsage.' },
          { von:'Durchsage im Flughafen', wer:'Frau',
            text:'Wichtiger Hinweis für die Passagiere des Fluges nach Wien: Der Abflug erfolgt nicht von Gate B zwölf, sondern von Gate A vier. Das Boarding beginnt in etwa zwanzig Minuten. Wir bitten Sie, sich rechtzeitig dort einzufinden.',
            frage:'Wann beginnt das Boarding?',
            opt:['Sofort.','In ungefähr zwanzig Minuten.','In zwei Stunden.'],
            loesung:1, stelle:'in etwa zwanzig Minuten',
            erklaerung:'„etwa" macht daraus eine ungefähre Angabe — genau wie in der Antwort.' },

          { von:'Nachricht der Praxis', wer:'Frau',
            text:'Guten Tag, Herr Mertens, Praxis Doktor Sander. Ihr Termin am Freitag um zehn Uhr steht. Bringen Sie bitte die Ergebnisse vom Labor mit, falls Sie die schon haben. Wenn nicht, ist das kein Problem, wir schauen selbst nach.',
            satz:'Der Termin muss verschoben werden.',
            loesung:false, stelle:'Ihr Termin am Freitag um zehn Uhr steht',
            erklaerung:'„Der Termin steht" heißt: er bleibt wie vereinbart.' },
          { von:'Nachricht der Praxis', wer:'Frau',
            text:'Guten Tag, Herr Mertens, Praxis Doktor Sander. Ihr Termin am Freitag um zehn Uhr steht. Bringen Sie bitte die Ergebnisse vom Labor mit, falls Sie die schon haben. Wenn nicht, ist das kein Problem, wir schauen selbst nach.',
            frage:'Was gilt für die Laborergebnisse?',
            opt:['Sie sind unbedingt nötig.','Sie sind hilfreich, aber nicht zwingend.','Sie werden nicht gebraucht.'],
            loesung:1, stelle:'Wenn nicht, ist das kein Problem',
            erklaerung:'Erst die Bitte, dann die Entwarnung — also hilfreich, aber nicht Pflicht.' },

          { von:'Radiomeldung', wer:'Mann',
            text:'Zum Schluss noch eine Meldung aus dem Rathaus: Das Freibad öffnet in diesem Jahr eine Woche später als geplant, nämlich erst am fünfzehnten Mai. Grund sind Arbeiten an der Wasseraufbereitung. Die Eintrittspreise bleiben unverändert.',
            satz:'Das Freibad öffnet später als vorgesehen.',
            loesung:true, stelle:'eine Woche später als geplant',
            erklaerung:'Direkt bestätigt, samt Datum und Grund.' },
          { von:'Radiomeldung', wer:'Mann',
            text:'Zum Schluss noch eine Meldung aus dem Rathaus: Das Freibad öffnet in diesem Jahr eine Woche später als geplant, nämlich erst am fünfzehnten Mai. Grund sind Arbeiten an der Wasseraufbereitung. Die Eintrittspreise bleiben unverändert.',
            frage:'Was passiert mit den Preisen?',
            opt:['Sie steigen.','Sie bleiben gleich.','Sie sinken.'],
            loesung:1, stelle:'Die Eintrittspreise bleiben unverändert',
            erklaerung:'„unverändert" ist dasselbe wie „gleich".' }
        ] },

        { nr:2, art:'vortrag', mal:1, aufgaben: [
          { ort:'Vortrag im Gartenverein', wer:'Frau',
            text:'Schön, dass Sie da sind. Ich bin seit zwölf Jahren Gärtnerin und berate heute Abend zum Thema Balkon. Vorweg: Sie brauchen keinen grünen Daumen. Sie brauchen die richtige Pflanze für den richtigen Platz, mehr nicht.',
            frage:'Was ist die Hauptaussage der Einleitung?',
            opt:['Balkongärtnern ist sehr schwierig.','Die Pflanzenwahl ist wichtiger als Talent.','Man braucht teures Werkzeug.'],
            loesung:1, stelle:'die richtige Pflanze für den richtigen Platz',
            erklaerung:'Sie widerspricht ausdrücklich der Vorstellung vom grünen Daumen.' },
          { ort:'Vortrag im Gartenverein', wer:'Frau',
            text:'Der häufigste Fehler ist übrigens nicht zu wenig Wasser, sondern zu viel. Die meisten Zimmerpflanzen sterben, weil ihre Wurzeln im Nassen stehen und faulen.',
            frage:'Woran gehen die meisten Pflanzen ein?',
            opt:['An zu wenig Wasser.','An zu viel Wasser.','An zu wenig Licht.'],
            loesung:1, stelle:'sondern zu viel',
            erklaerung:'Das „nicht …, sondern" dreht die erwartete Antwort um.' },
          { ort:'Vortrag im Gartenverein', wer:'Frau',
            text:'Für einen Balkon nach Norden empfehle ich Farne und Fleißiges Lieschen. Beide kommen mit wenig Sonne gut zurecht. Tomaten dagegen können Sie dort vergessen, die brauchen mindestens sechs Stunden direkte Sonne.',
            frage:'Was eignet sich für einen Nordbalkon nicht?',
            opt:['Farne.','Tomaten.','Fleißiges Lieschen.'],
            loesung:1, stelle:'Tomaten dagegen können Sie dort vergessen',
            erklaerung:'„vergessen können" ist umgangssprachlich für: das funktioniert nicht.' },
          { ort:'Vortrag im Gartenverein', wer:'Frau',
            text:'Zum Thema Erde: Kaufen Sie ruhig die günstige, aber achten Sie darauf, dass kein Torf drin ist. Das hat weniger mit der Pflanze zu tun als mit dem Klima — für Torf werden Moore zerstört.',
            frage:'Warum rät sie von Torf ab?',
            opt:['Weil er zu teuer ist.','Aus Umweltgründen.','Weil Pflanzen darin nicht wachsen.'],
            loesung:1, stelle:'für Torf werden Moore zerstört',
            erklaerung:'Sie sagt sogar ausdrücklich, dass es nicht an der Pflanze liegt.' },
          { ort:'Vortrag im Gartenverein', wer:'Frau',
            text:'Und wenn Sie in den Urlaub fahren: Stellen Sie die Töpfe zusammen in den Schatten und in eine flache Wanne mit Wasser. Das hält gut zwei Wochen. Die teuren Bewässerungssysteme brauchen Sie dafür nicht.',
            frage:'Was empfiehlt sie für die Urlaubszeit?',
            opt:['Ein automatisches Bewässerungssystem.','Töpfe zusammenstellen und in Wasser setzen.','Die Pflanzen zu verschenken.'],
            loesung:1, stelle:'in eine flache Wanne mit Wasser',
            erklaerung:'Die teuren Systeme werden ausdrücklich als unnötig bezeichnet.' }
        ] },

        { nr:3, art:'gespraech', mal:1, aufgaben: [
          { ort:'Zwei Kolleginnen in der Mittagspause',
            zeilen: [
              { wer:'Frau', text:'Und, wie war dein erster Tag im neuen Team?' },
              { wer:'Mann', text:'Besser als gedacht. Ich hatte richtig Bammel, ehrlich gesagt.' },
              { wer:'Frau', text:'Vor was denn?' },
              { wer:'Mann', text:'Dass ich fachlich nicht mithalte. Aber die haben alle mal angefangen, das merkt man.' }
            ],
            satz:'Der Mann war vor dem ersten Tag nervös.',
            loesung:true, stelle:'Ich hatte richtig Bammel',
            erklaerung:'„Bammel haben" ist umgangssprachlich für Angst oder Nervosität.' },
          { ort:'Zwei Kolleginnen in der Mittagspause',
            zeilen: [
              { wer:'Mann', text:'Dass ich fachlich nicht mithalte. Aber die haben alle mal angefangen, das merkt man.' },
              { wer:'Frau', text:'Wer ist denn deine Ansprechpartnerin?' },
              { wer:'Mann', text:'Eine Frau Kaya. Die hat sich den ganzen Vormittag Zeit genommen, obwohl sie selbst viel zu tun hatte.' }
            ],
            satz:'Frau Kaya hatte an dem Tag wenig zu tun.',
            loesung:false, stelle:'obwohl sie selbst viel zu tun hatte',
            erklaerung:'Das „obwohl" sagt genau das Gegenteil.' },
          { ort:'Zwei Kolleginnen in der Mittagspause',
            zeilen: [
              { wer:'Frau', text:'Und der Weg? Du wohnst doch ziemlich weit draußen.' },
              { wer:'Mann', text:'Fünfzig Minuten mit der Bahn. Klingt viel, aber ich lese dabei. Das stört mich weniger als früher der Stau.' }
            ],
            satz:'Der Mann findet den langen Arbeitsweg schlimm.',
            loesung:false, stelle:'Das stört mich weniger als früher der Stau',
            erklaerung:'Er vergleicht und findet die Bahn besser als das Auto im Stau.' },
          { ort:'Zwei Kolleginnen in der Mittagspause',
            zeilen: [
              { wer:'Frau', text:'Bleibst du bei fünf Tagen im Büro?' },
              { wer:'Mann', text:'Erst mal ja, drei Monate lang. Danach darf ich zwei Tage von zu Hause arbeiten, so steht es im Vertrag.' }
            ],
            satz:'Der Mann darf sofort im Homeoffice arbeiten.',
            loesung:false, stelle:'Erst mal ja, drei Monate lang',
            erklaerung:'Homeoffice ist erst nach drei Monaten vorgesehen.' },
          { ort:'Zwei Kolleginnen in der Mittagspause',
            zeilen: [
              { wer:'Frau', text:'Und das Gehalt, wenn ich fragen darf?' },
              { wer:'Mann', text:'Etwas mehr als vorher, aber nicht viel. Der Grund für den Wechsel war ein anderer.' },
              { wer:'Frau', text:'Nämlich?' },
              { wer:'Mann', text:'Ich wollte endlich etwas machen, das mich interessiert.' }
            ],
            satz:'Der Mann hat vor allem wegen des Geldes gewechselt.',
            loesung:false, stelle:'Der Grund für den Wechsel war ein anderer',
            erklaerung:'Er sagt es fast wörtlich: das Geld war nicht der Grund.' },
          { ort:'Zwei Kolleginnen in der Mittagspause',
            zeilen: [
              { wer:'Mann', text:'Ich wollte endlich etwas machen, das mich interessiert.' },
              { wer:'Frau', text:'Das kann ich gut verstehen. Bei mir war das damals genauso.' }
            ],
            satz:'Die Frau hat einen ähnlichen Wechsel hinter sich.',
            loesung:true, stelle:'Bei mir war das damals genauso',
            erklaerung:'„genauso" bezieht sich auf denselben Grund für den Wechsel.' },
          { ort:'Zwei Kolleginnen in der Mittagspause',
            zeilen: [
              { wer:'Frau', text:'Sollen wir mal zusammen mittagessen gehen, nächste Woche?' },
              { wer:'Mann', text:'Sehr gern. Nur Dienstag geht bei mir nicht, da habe ich eine Schulung.' }
            ],
            satz:'Am Dienstag hat der Mann keine Zeit.',
            loesung:true, stelle:'Nur Dienstag geht bei mir nicht',
            erklaerung:'Direkt gesagt, mit Begründung.' }
        ] },

        { nr:4, art:'diskussion', mal:2, aufgaben: [
          { ort:'Diskussion — Frau Weiß und Herr Tanaka',
            zeilen: [
              { wer:'Frau', text:'Ich unterrichte seit zwanzig Jahren. Hausaufgaben bringen den Schwachen wenig und den Starken nichts — die können es ohnehin schon.' },
              { wer:'Mann', text:'Da widerspreche ich. Ohne Wiederholung zu Hause bleibt einfach nichts hängen.' }
            ],
            frage:'Wer hält Hausaufgaben für überflüssig?',
            opt:['Frau Weiß','Herr Tanaka','beide'],
            loesung:0, stelle:'Hausaufgaben bringen den Schwachen wenig',
            erklaerung:'„Da widerspreche ich" macht die Gegenposition eindeutig.' },
          { ort:'Diskussion — Frau Weiß und Herr Tanaka',
            zeilen: [
              { wer:'Mann', text:'Ohne Wiederholung zu Hause bleibt einfach nichts hängen.' },
              { wer:'Frau', text:'Wiederholung ja, das bestreite ich gar nicht. Nur muss sie nicht am Abend im Kinderzimmer stattfinden.' }
            ],
            frage:'Wer hält Wiederholung für wichtig?',
            opt:['Frau Weiß','Herr Tanaka','beide'],
            loesung:2, stelle:'Wiederholung ja, das bestreite ich gar nicht',
            erklaerung:'Sie streitet nur den Ort ab, nicht die Wiederholung selbst.' },
          { ort:'Diskussion — Frau Weiß und Herr Tanaka',
            zeilen: [
              { wer:'Frau', text:'Und dann kommt dazu: Kinder aus Familien, die nicht helfen können, fallen weiter zurück. Das ist eine Frage der Gerechtigkeit.' },
              { wer:'Mann', text:'Dieses Argument höre ich oft. Ich halte es für zu einfach — dann muss man eben die Betreuung ausbauen.' }
            ],
            frage:'Wer nennt Gerechtigkeit als Argument?',
            opt:['Frau Weiß','Herr Tanaka','beide'],
            loesung:0, stelle:'Das ist eine Frage der Gerechtigkeit',
            erklaerung:'Er kennt das Argument, hält es aber ausdrücklich für zu einfach.' },
          { ort:'Diskussion — Frau Weiß und Herr Tanaka',
            zeilen: [
              { wer:'Mann', text:'Was wir wirklich brauchen, sind gute Ganztagsschulen. Dann erledigt sich die Frage von selbst.' },
              { wer:'Frau', text:'Damit rennen Sie bei mir offene Türen ein. Nur haben wir die eben nicht überall.' }
            ],
            frage:'Wer wünscht sich mehr Ganztagsschulen?',
            opt:['Frau Weiß','Herr Tanaka','beide'],
            loesung:2, stelle:'Damit rennen Sie bei mir offene Türen ein',
            erklaerung:'Ihr „Nur …" betrifft die Umsetzung, nicht den Wunsch.' },
          { ort:'Diskussion — Frau Weiß und Herr Tanaka',
            zeilen: [
              { wer:'Frau', text:'In meiner Klasse gebe ich seit zwei Jahren keine Hausaufgaben mehr. Die Noten sind nicht schlechter geworden.' },
              { wer:'Mann', text:'Eine Klasse ist kein Beweis. Da müsste man schon größer untersuchen.' }
            ],
            frage:'Wer berichtet aus eigener Erfahrung?',
            opt:['Frau Weiß','Herr Tanaka','beide'],
            loesung:0, stelle:'In meiner Klasse gebe ich seit zwei Jahren keine Hausaufgaben mehr',
            erklaerung:'Er stellt die Aussagekraft der Erfahrung sogar infrage.' },
          { ort:'Diskussion — Frau Weiß und Herr Tanaka',
            zeilen: [
              { wer:'Mann', text:'Was mich stört, ist der Umfang. Zwei Stunden am Nachmittag sind bei einem Zehnjährigen einfach zu viel.' },
              { wer:'Frau', text:'Da sind wir uns ausnahmsweise einig.' }
            ],
            frage:'Wer findet den Umfang der Hausaufgaben zu groß?',
            opt:['Frau Weiß','Herr Tanaka','beide'],
            loesung:2, stelle:'Da sind wir uns ausnahmsweise einig',
            erklaerung:'„ausnahmsweise einig" ist trotzdem einig.' },
          { ort:'Diskussion — Frau Weiß und Herr Tanaka',
            zeilen: [
              { wer:'Frau', text:'Eltern sollten übrigens gar nicht helfen. Dann sieht die Lehrkraft nämlich nicht mehr, wo das Kind wirklich steht.' },
              { wer:'Mann', text:'Das sehe ich anders. Ein bisschen Begleitung schadet nicht.' }
            ],
            frage:'Wer meint, Eltern sollten sich heraushalten?',
            opt:['Frau Weiß','Herr Tanaka','beide'],
            loesung:0, stelle:'Eltern sollten übrigens gar nicht helfen',
            erklaerung:'„Das sehe ich anders" ist seine Ablehnung.' },
          { ort:'Diskussion — Frau Weiß und Herr Tanaka',
            zeilen: [
              { wer:'Mann', text:'Am Ende muss jede Schule das für sich entscheiden. Eine Regel für alle wird der Sache nicht gerecht.' },
              { wer:'Frau', text:'Genau so ist es.' }
            ],
            frage:'Wer ist gegen eine einheitliche Regel für alle Schulen?',
            opt:['Frau Weiß','Herr Tanaka','beide'],
            loesung:2, stelle:'Genau so ist es',
            erklaerung:'Kürzeste mögliche Zustimmung — trotzdem eine.' }
        ] }
      ] },

    { id:'b1hl2', titel:'Prüfungslauf 2', minuten:40,
      teile: [

        { nr:1, art:'ansage', mal:2, aufgaben: [
          { von:'Nachricht vom Sportverein', wer:'Frau',
            text:'Hallo, hier ist der TSV Grünberg. Das Training am Mittwoch findet nicht in der Halle statt, sondern draußen auf dem Rasenplatz. Denkt bitte an feste Schuhe. Bei starkem Regen sagen wir kurzfristig ab.',
            satz:'Das Training fällt am Mittwoch aus.',
            loesung:false, stelle:'sondern draußen auf dem Rasenplatz',
            erklaerung:'Es findet statt, nur an einem anderen Ort. Eine Absage gibt es nur bei starkem Regen.' },
          { von:'Nachricht vom Sportverein', wer:'Frau',
            text:'Hallo, hier ist der TSV Grünberg. Das Training am Mittwoch findet nicht in der Halle statt, sondern draußen auf dem Rasenplatz. Denkt bitte an feste Schuhe. Bei starkem Regen sagen wir kurzfristig ab.',
            frage:'Was sollen die Spieler mitbringen?',
            opt:['Regenjacken.','Feste Schuhe.','Getränke.'],
            loesung:1, stelle:'Denkt bitte an feste Schuhe',
            erklaerung:'Die einzige konkrete Bitte im Text.' },

          { von:'Nachricht vom Paketdienst', wer:'Mann',
            text:'Guten Tag, hier ist der Lieferdienst. Wir haben Sie heute nicht angetroffen. Das Paket liegt jetzt in der Filiale in der Bahnhofstraße und kann dort sieben Tage lang abgeholt werden. Bringen Sie bitte einen Ausweis mit.',
            satz:'Das Paket wurde bei einem Nachbarn abgegeben.',
            loesung:false, stelle:'Das Paket liegt jetzt in der Filiale in der Bahnhofstraße',
            erklaerung:'Es liegt in einer Filiale, nicht beim Nachbarn.' },
          { von:'Nachricht vom Paketdienst', wer:'Mann',
            text:'Guten Tag, hier ist der Lieferdienst. Wir haben Sie heute nicht angetroffen. Das Paket liegt jetzt in der Filiale in der Bahnhofstraße und kann dort sieben Tage lang abgeholt werden. Bringen Sie bitte einen Ausweis mit.',
            frage:'Wie lange kann man das Paket abholen?',
            opt:['Drei Tage.','Eine Woche.','Einen Monat.'],
            loesung:1, stelle:'sieben Tage lang abgeholt werden',
            erklaerung:'Sieben Tage sind eine Woche — die Antwort rechnet um.' },

          { von:'Durchsage im Kino', wer:'Frau',
            text:'Liebe Gäste, die Vorstellung im Saal drei beginnt heute etwa fünfzehn Minuten später. Wir haben ein technisches Problem mit dem Ton. Die Getränke an der Bar gehen in dieser Zeit aufs Haus.',
            satz:'Der Film beginnt pünktlich.',
            loesung:false, stelle:'beginnt heute etwa fünfzehn Minuten später',
            erklaerung:'Fünfzehn Minuten später ist nicht pünktlich.' },
          { von:'Durchsage im Kino', wer:'Frau',
            text:'Liebe Gäste, die Vorstellung im Saal drei beginnt heute etwa fünfzehn Minuten später. Wir haben ein technisches Problem mit dem Ton. Die Getränke an der Bar gehen in dieser Zeit aufs Haus.',
            frage:'Was bekommen die Gäste?',
            opt:['Geld zurück.','Kostenlose Getränke.','Freikarten.'],
            loesung:1, stelle:'gehen in dieser Zeit aufs Haus',
            erklaerung:'„aufs Haus gehen" heißt: das Lokal zahlt, für die Gäste ist es gratis.' },

          { von:'Nachricht von der Nachbarin', wer:'Frau',
            text:'Hallo Frau Klein, ich bin es, die Sonnenblumen gieße ich gern weiter, kein Problem. Aber am Wochenende bin ich selbst weg. Könnten Sie da vielleicht jemand anderen fragen?',
            satz:'Die Nachbarin kann in der ganzen Zeit gießen.',
            loesung:false, stelle:'Aber am Wochenende bin ich selbst weg',
            erklaerung:'Sie hilft, aber nicht durchgehend. Das „aber" schränkt ein.' },
          { von:'Nachricht von der Nachbarin', wer:'Frau',
            text:'Hallo Frau Klein, ich bin es, die Sonnenblumen gieße ich gern weiter, kein Problem. Aber am Wochenende bin ich selbst weg. Könnten Sie da vielleicht jemand anderen fragen?',
            frage:'Worum bittet die Nachbarin?',
            opt:['Eine Vertretung für das Wochenende zu suchen.','Die Blumen selbst zu gießen.','Ihr einen Schlüssel zu geben.'],
            loesung:0, stelle:'Könnten Sie da vielleicht jemand anderen fragen',
            erklaerung:'Sie sucht Ersatz nur für die Tage, an denen sie weg ist.' },

          { von:'Radiomeldung zur Baustelle', wer:'Mann',
            text:'Und noch etwas für alle, die morgen früh in die Stadt wollen: Die Hauptstraße ist ab sechs Uhr wegen Bauarbeiten gesperrt, voraussichtlich für zwei Wochen. Die Buslinie sieben fährt in dieser Zeit über die Ringstraße.',
            satz:'Die Sperrung dauert voraussichtlich vierzehn Tage.',
            loesung:true, stelle:'voraussichtlich für zwei Wochen',
            erklaerung:'Zwei Wochen sind vierzehn Tage — dieselbe Angabe, andere Worte.' },
          { von:'Radiomeldung zur Baustelle', wer:'Mann',
            text:'Und noch etwas für alle, die morgen früh in die Stadt wollen: Die Hauptstraße ist ab sechs Uhr wegen Bauarbeiten gesperrt, voraussichtlich für zwei Wochen. Die Buslinie sieben fährt in dieser Zeit über die Ringstraße.',
            frage:'Was ändert sich für Busfahrgäste?',
            opt:['Die Linie sieben fällt aus.','Die Linie sieben nimmt einen anderen Weg.','Es gibt keine Änderung.'],
            loesung:1, stelle:'fährt in dieser Zeit über die Ringstraße',
            erklaerung:'Der Bus fährt weiter, nur auf einer anderen Strecke.' }
        ] },

        { nr:2, art:'vortrag', mal:1, aufgaben: [
          { ort:'Vortrag im Museum', wer:'Mann',
            text:'Willkommen zur Führung. Ich bin kein Historiker, sondern Restaurator — ich repariere, was Sie hier sehen. Deshalb erzähle ich Ihnen heute weniger über Jahreszahlen und mehr darüber, wie diese Dinge gemacht wurden.',
            frage:'Was ist der Schwerpunkt der Führung?',
            opt:['Die Geschichte der Objekte.','Die Herstellung der Objekte.','Der Wert der Objekte.'],
            loesung:1, stelle:'mehr darüber, wie diese Dinge gemacht wurden',
            erklaerung:'Er grenzt sich ausdrücklich von den Jahreszahlen ab.' },
          { ort:'Vortrag im Museum', wer:'Mann',
            text:'Diese Truhe hier ist ungefähr dreihundert Jahre alt. Was die meisten überrascht: Sie enthält keinen einzigen Nagel. Alles ist gesteckt und verkeilt. Das hält länger, als Sie denken.',
            frage:'Was ist an der Truhe besonders?',
            opt:['Sie ist aus Metall.','Sie kommt ohne Nägel aus.','Sie ist bemalt.'],
            loesung:1, stelle:'Sie enthält keinen einzigen Nagel',
            erklaerung:'„gesteckt und verkeilt" beschreibt die Technik ohne Nägel.' },
          { ort:'Vortrag im Museum', wer:'Mann',
            text:'Am schwierigsten ist für uns nicht der Holzwurm, sondern das Klima. Zu trocken, und das Holz reißt. Zu feucht, und es arbeitet. Deshalb messen wir hier rund um die Uhr.',
            frage:'Was ist das größte Problem für die Restauratoren?',
            opt:['Ungeziefer.','Die Luftfeuchtigkeit.','Die Besucher.'],
            loesung:1, stelle:'sondern das Klima',
            erklaerung:'Der Holzwurm wird als Erwartung genannt und verworfen.' },
          { ort:'Vortrag im Museum', wer:'Mann',
            text:'Eine Frage bekomme ich immer: Warum machen Sie das nicht wieder wie neu? Weil wir dann die Geschichte wegputzen. Wir sichern den Zustand, wir erfinden ihn nicht neu.',
            frage:'Warum wird nicht alles wie neu gemacht?',
            opt:['Weil es zu teuer wäre.','Weil sonst die Geschichte verloren geht.','Weil das Material fehlt.'],
            loesung:1, stelle:'Weil wir dann die Geschichte wegputzen',
            erklaerung:'„wegputzen" ist bildlich gemeint: die Spuren der Zeit verschwinden.' },
          { ort:'Vortrag im Museum', wer:'Mann',
            text:'Zum Schluss: Wenn Sie zu Hause ein altes Möbelstück haben, das wackelt — bitte kein Sekundenkleber. Damit machen Sie mehr kaputt als heil. Warmer Leim lässt sich wieder lösen, moderner Kleber nie.',
            frage:'Wovon rät er ab?',
            opt:['Von Sekundenkleber.','Von warmem Leim.','Vom Reparieren überhaupt.'],
            loesung:0, stelle:'bitte kein Sekundenkleber',
            erklaerung:'Warmen Leim empfiehlt er sogar — der Gegensatz macht die Antwort eindeutig.' }
        ] },

        { nr:3, art:'gespraech', mal:1, aufgaben: [
          { ort:'Am Serviceschalter der Bahn',
            zeilen: [
              { wer:'Frau', text:'Guten Tag, mein Zug ist ausgefallen. Bekomme ich das Geld zurück?' },
              { wer:'Mann', text:'Bei einem Ausfall schon, ja. Sie können aber auch einfach den nächsten Zug nehmen, die Fahrkarte gilt weiter.' }
            ],
            satz:'Die Fahrkarte ist nach dem Ausfall wertlos.',
            loesung:false, stelle:'die Fahrkarte gilt weiter',
            erklaerung:'Sie gilt sogar für einen anderen Zug.' },
          { ort:'Am Serviceschalter der Bahn',
            zeilen: [
              { wer:'Frau', text:'Ich habe aber einen Termin, ich muss vor zwölf da sein.' },
              { wer:'Mann', text:'Dann nehmen Sie den ICE um zehn nach neun. Der ist zwar teurer, aber bei einem Ausfall dürfen Sie umsteigen, ohne nachzuzahlen.' }
            ],
            satz:'Die Frau müsste für den ICE zusätzlich zahlen.',
            loesung:false, stelle:'ohne nachzuzahlen',
            erklaerung:'Der ICE ist normalerweise teurer, aber in diesem Fall nicht für sie.' },
          { ort:'Am Serviceschalter der Bahn',
            zeilen: [
              { wer:'Frau', text:'Und wenn ich trotzdem zu spät komme?' },
              { wer:'Mann', text:'Ab sechzig Minuten Verspätung bekommen Sie ein Viertel des Fahrpreises zurück, ab zwei Stunden die Hälfte.' }
            ],
            satz:'Ab einer Stunde Verspätung gibt es einen Teil des Geldes zurück.',
            loesung:true, stelle:'Ab sechzig Minuten Verspätung bekommen Sie ein Viertel des Fahrpreises zurück',
            erklaerung:'Sechzig Minuten sind eine Stunde, ein Viertel ist ein Teil.' },
          { ort:'Am Serviceschalter der Bahn',
            zeilen: [
              { wer:'Frau', text:'Muss ich das hier beantragen?' },
              { wer:'Mann', text:'Können Sie, geht aber online schneller. Hier dauert die Bearbeitung erfahrungsgemäß länger.' }
            ],
            satz:'Der Antrag ist nur am Schalter möglich.',
            loesung:false, stelle:'geht aber online schneller',
            erklaerung:'Beides ist möglich, online sogar schneller.' },
          { ort:'Am Serviceschalter der Bahn',
            zeilen: [
              { wer:'Frau', text:'Brauche ich dafür die alte Fahrkarte?' },
              { wer:'Mann', text:'Unbedingt. Heben Sie die auf, ohne die geht gar nichts.' }
            ],
            satz:'Die alte Fahrkarte wird für den Antrag gebraucht.',
            loesung:true, stelle:'ohne die geht gar nichts',
            erklaerung:'„Unbedingt" und „ohne die geht gar nichts" sagen dasselbe zweimal.' },
          { ort:'Am Serviceschalter der Bahn',
            zeilen: [
              { wer:'Frau', text:'Und wie lange dauert die Erstattung?' },
              { wer:'Mann', text:'In der Regel zwei bis drei Wochen. Manchmal geht es schneller, versprechen kann ich das aber nicht.' }
            ],
            satz:'Das Geld kommt garantiert innerhalb einer Woche.',
            loesung:false, stelle:'In der Regel zwei bis drei Wochen',
            erklaerung:'Er schließt eine Garantie sogar ausdrücklich aus.' },
          { ort:'Am Serviceschalter der Bahn',
            zeilen: [
              { wer:'Frau', text:'Vielen Dank, das hat mir sehr geholfen.' },
              { wer:'Mann', text:'Gern. Und wenn etwas unklar ist, rufen Sie einfach die kostenlose Servicenummer an.' }
            ],
            satz:'Der Anruf beim Service kostet nichts.',
            loesung:true, stelle:'die kostenlose Servicenummer',
            erklaerung:'Direkt im Wort „kostenlos" enthalten.' }
        ] },

        { nr:4, art:'diskussion', mal:2, aufgaben: [
          { ort:'Diskussion — Herr Fuchs und Frau Adamu',
            zeilen: [
              { wer:'Mann', text:'Eine Vier-Tage-Woche bei vollem Lohn — schön wäre es. Nur, wer macht die Arbeit? In meinem Betrieb finde ich schon jetzt niemanden.' },
              { wer:'Frau', text:'Genau deshalb brauchen wir sie. Attraktive Arbeitszeiten sind das beste Mittel gegen Personalmangel.' }
            ],
            frage:'Wer sieht den Personalmangel als Argument DAFÜR?',
            opt:['Herr Fuchs','Frau Adamu','beide'],
            loesung:1, stelle:'Attraktive Arbeitszeiten sind das beste Mittel gegen Personalmangel',
            erklaerung:'Beide sprechen über Personalmangel — aber nur sie zieht daraus ein Argument dafür.' },
          { ort:'Diskussion — Herr Fuchs und Frau Adamu',
            zeilen: [
              { wer:'Frau', text:'Die Versuche in anderen Ländern zeigen: Die Leistung bleibt gleich, die Krankheitstage gehen zurück.' },
              { wer:'Mann', text:'Diese Studien kenne ich. Sie stammen fast alle aus Büros. Versuchen Sie das mal in der Pflege.' }
            ],
            frage:'Wer bezweifelt, dass die Studien überall gelten?',
            opt:['Herr Fuchs','Frau Adamu','beide'],
            loesung:0, stelle:'Sie stammen fast alle aus Büros',
            erklaerung:'Er bestreitet nicht die Studien, sondern ihre Übertragbarkeit.' },
          { ort:'Diskussion — Herr Fuchs und Frau Adamu',
            zeilen: [
              { wer:'Mann', text:'Was ich sofort unterschreiben würde: weniger Sitzungen. Da verlieren wir jede Woche Stunden.' },
              { wer:'Frau', text:'Das unterschreibe ich mit. Die halben Termine könnte man sich sparen.' }
            ],
            frage:'Wer will die Zahl der Sitzungen verringern?',
            opt:['Herr Fuchs','Frau Adamu','beide'],
            loesung:2, stelle:'Das unterschreibe ich mit',
            erklaerung:'Beide benutzen sogar dasselbe Bild vom Unterschreiben.' },
          { ort:'Diskussion — Herr Fuchs und Frau Adamu',
            zeilen: [
              { wer:'Frau', text:'Für Eltern wäre ein freier Tag unter der Woche eine enorme Entlastung. Arzttermine, Ämter, all das.' },
              { wer:'Mann', text:'Das mag sein. Mich überzeugt es trotzdem nicht, solange die Kosten niemand beziffert.' }
            ],
            frage:'Wer nennt die Entlastung von Familien als Vorteil?',
            opt:['Herr Fuchs','Frau Adamu','beide'],
            loesung:1, stelle:'wäre ein freier Tag unter der Woche eine enorme Entlastung',
            erklaerung:'„Das mag sein … trotzdem nicht" ist keine Zustimmung.' },
          { ort:'Diskussion — Herr Fuchs und Frau Adamu',
            zeilen: [
              { wer:'Mann', text:'Was mich am meisten stört, ist der Ton in dieser Debatte. Wer Fragen stellt, gilt gleich als rückständig.' },
              { wer:'Frau', text:'Da haben Sie leider recht. So kommen wir nicht weiter.' }
            ],
            frage:'Wer kritisiert den Ton der Debatte?',
            opt:['Herr Fuchs','Frau Adamu','beide'],
            loesung:2, stelle:'Da haben Sie leider recht',
            erklaerung:'Sie gibt ihm ausdrücklich recht — also beide.' },
          { ort:'Diskussion — Herr Fuchs und Frau Adamu',
            zeilen: [
              { wer:'Frau', text:'Ich schlage einen Versuch vor. Ein Jahr, in ausgewählten Betrieben, mit ehrlicher Auswertung.' },
              { wer:'Mann', text:'Dagegen hätte ich nichts. Ausprobieren ist etwas anderes als sofort für alle einführen.' }
            ],
            frage:'Wer ist für einen befristeten Versuch offen?',
            opt:['Herr Fuchs','Frau Adamu','beide'],
            loesung:2, stelle:'Dagegen hätte ich nichts',
            erklaerung:'„Dagegen hätte ich nichts" ist Zustimmung in vorsichtiger Form.' },
          { ort:'Diskussion — Herr Fuchs und Frau Adamu',
            zeilen: [
              { wer:'Mann', text:'Eines noch: Wenn am Ende alle in vier Tagen dasselbe schaffen sollen, ist das kein Fortschritt, sondern Verdichtung.' },
              { wer:'Frau', text:'Das ist ein berechtigter Einwand, ehrlich gesagt.' }
            ],
            frage:'Wer warnt vor mehr Druck an weniger Tagen?',
            opt:['Herr Fuchs','Frau Adamu','beide'],
            loesung:0, stelle:'ist das kein Fortschritt, sondern Verdichtung',
            erklaerung:'Sie nennt es einen berechtigten Einwand, äußert die Warnung aber nicht selbst.' },
          { ort:'Diskussion — Herr Fuchs und Frau Adamu',
            zeilen: [
              { wer:'Frau', text:'Am Ende entscheidet, ob die Betriebe mitmachen. Von oben verordnen lässt sich so etwas nicht.' },
              { wer:'Mann', text:'Damit haben Sie das Schlusswort gut getroffen.' }
            ],
            frage:'Wer meint, es geht nicht per Vorschrift von oben?',
            opt:['Herr Fuchs','Frau Adamu','beide'],
            loesung:2, stelle:'Damit haben Sie das Schlusswort gut getroffen',
            erklaerung:'Er bestätigt ihre Aussage ausdrücklich als richtig.' }
        ] }
      ] }
  ]

};
