/* ============================================================
   hoeren-b2-neu.js — Hoeren auf B2

   Wird NACH uebungen.js geladen und haengt seine Themen an den
   Bereich "Hoeren" an. Vorher stand auf B2 ein einziges Thema.

   Vier Themen aus dem Alltag, in dem B2 wirklich gebraucht wird:
   im Team etwas ansprechen, ein Bescheid vom Amt, der Mietvertrag,
   und die Frage, was in den Medien Nachricht und was Meinung ist.

   Je Thema 16 Woerter, 4 Hoertexte mit Transkript, 16 Wortfragen.
   Die Texte sind laenger als auf A1 und enthalten das, was auf
   diesem Niveau schwerfaellt: Zahlen im Nebensatz, Umschreibungen,
   Zwischentoene. Gesprochen ist alles in Julias eigener Stimme;
   jede Aufnahme wurde vor dem Einbau maschinell abgehoert.
   Gebaut von bau/mach-hoeren-b2.js — nicht von Hand aendern.
   ============================================================ */
(function(){
  var U = window.UEBUNGEN;
  if(!U || !U.skills) return;
  var ho = null;
  for(var i=0;i<U.skills.length;i++){ if(U.skills[i].id==='hoeren'){ ho=U.skills[i]; break; } }
  if(!ho) return;
  if(!ho.themes) ho.themes = [];

  var NEU = [
 {
  "id": "b2-team-klaeren",
  "title": "Im Team: Kritik, Missverständnisse, Klärung",
  "level": "B2",
  "emoji": "🎧",
  "words": [
   {
    "de": "das Missverständnis",
    "info": "zwei haben dasselbe verschieden verstanden",
    "emoji": "🌀"
   },
   {
    "de": "die Rückmeldung",
    "info": "was jemand zu deiner Arbeit sagt",
    "emoji": "💬"
   },
   {
    "de": "ansprechen",
    "info": "ein heikles Thema von sich aus zur Sprache bringen",
    "emoji": "🗣️"
   },
   {
    "de": "die Absprache",
    "info": "was vorher gemeinsam vereinbart wurde",
    "emoji": "🤝"
   },
   {
    "de": "zuständig sein",
    "info": "diese Aufgabe gehört zu deinem Bereich",
    "emoji": "📌"
   },
   {
    "de": "einspringen",
    "info": "für jemanden übernehmen, der ausfällt",
    "emoji": "🏃"
   },
   {
    "de": "der Engpass",
    "info": "es fehlt gerade an Zeit, Geld oder Leuten",
    "emoji": "⏳"
   },
   {
    "de": "nachhaken",
    "info": "noch einmal nachfragen, wenn nichts kommt",
    "emoji": "🪝"
   },
   {
    "de": "sich abstimmen",
    "info": "vorher klären, wer was macht",
    "emoji": "🔄"
   },
   {
    "de": "die Frist einhalten",
    "info": "rechtzeitig fertig werden",
    "emoji": "⏰"
   },
   {
    "de": "entlasten",
    "info": "jemandem Arbeit abnehmen",
    "emoji": "🪶"
   },
   {
    "de": "die Wertschätzung",
    "info": "das Gefühl, dass die eigene Arbeit gesehen wird",
    "emoji": "🌟"
   },
   {
    "de": "unter vier Augen",
    "info": "zu zweit, ohne dass jemand mithört",
    "emoji": "👀"
   },
   {
    "de": "den Ton treffen",
    "info": "etwas so sagen, dass es ankommt",
    "emoji": "🎯"
   },
   {
    "de": "die Eskalation",
    "info": "aus einer Kleinigkeit wird ein großer Streit",
    "emoji": "📈"
   },
   {
    "de": "aus der Welt schaffen",
    "info": "ein Problem endgültig klären",
    "emoji": "🧹"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📞 Nachricht auf der Mailbox",
    "audioUrl": "ton/hoeren-b2/b2-team-klaeren-1.mp3",
    "q": "Was schlägt Herr Lang vor?",
    "options": [
     "Einen Zwischenstand am Dienstag und den ganzen Bericht am Montag darauf.",
     "Den vollständigen Bericht schon am Dienstag.",
     "Den Bericht ganz ausfallen zu lassen.",
     "Dass eine kranke Kollegin ihn übernimmt."
    ],
    "answer": 0,
    "transcript": "Hallo Frau Berger, hier ist Tobias Lang. Ich melde mich wegen des Berichts für Donnerstag. Wir haben gerade einen Engpass in der Abteilung, zwei Kolleginnen sind krank, und ich schaffe die Auswertung bis Donnerstag ehrlich gesagt nicht. Ich könnte Ihnen bis Dienstag einen Zwischenstand schicken und den vollständigen Bericht am Montag darauf. Wenn das für Sie ein Problem ist, rufen Sie mich bitte an, dann suchen wir eine andere Lösung. Es tut mir leid, dass ich mich erst jetzt melde."
   },
   {
    "type": "listen",
    "label": "👀 Unter vier Augen",
    "audioUrl": "ton/hoeren-b2/b2-team-klaeren-2.mp3",
    "q": "Warum spricht die Vorgesetzte die Mitarbeiterin an?",
    "options": [
     "Sie hat gemerkt, dass etwas nicht stimmt, und will es früh klären.",
     "Sie möchte die Mitarbeiterin für die Sitzung loben.",
     "Sie will die Aufteilung endgültig durchsetzen.",
     "Sie sucht jemanden, der für eine Kollegin einspringt."
    ],
    "answer": 0,
    "transcript": "Haben Sie kurz Zeit? Ich wollte etwas ansprechen, bevor es größer wird. In der Sitzung gestern hatte ich den Eindruck, dass Sie mit der neuen Aufteilung nicht einverstanden sind. Sie haben nichts gesagt, aber Ihr Gesicht sprach Bände. Mir ist lieber, Sie sagen es direkt — auch wenn es unbequem ist. Ich kann die Aufteilung ändern, solange sie noch nicht steht. Was stört Sie konkret daran?"
   },
   {
    "type": "listen",
    "label": "💬 Zwei Kolleginnen in der Küche",
    "audioUrl": "ton/hoeren-b2/b2-team-klaeren-3.mp3",
    "q": "Wie lösen die beiden das Missverständnis?",
    "options": [
     "Eine übernimmt es und beide vereinbaren, künftig am Ende die Aufgaben zu klären.",
     "Sie melden es der Vorgesetzten.",
     "Sie lassen die Zusammenfassung ganz weg.",
     "Sie schreiben die Zusammenfassung gemeinsam."
    ],
    "answer": 0,
    "transcript": "Sag mal, hast du die Rückmeldung an den Kunden geschickt? — Ich? Ich dachte, das machst du. In der Absprache hieß es doch, wer den Termin führt, schreibt auch die Zusammenfassung. — Ja, aber den Termin hattest du geführt. — Stimmt, das habe ich anders im Kopf gehabt. Also gut, ich mache es heute noch. Aber lass uns beim nächsten Mal am Ende kurz sagen, wer was übernimmt. Dann passiert uns das nicht wieder."
   },
   {
    "type": "listen",
    "label": "📣 Kurze Ansage im Teammeeting",
    "audioUrl": "ton/hoeren-b2/b2-team-klaeren-4.mp3",
    "q": "Was ändert sich ab dem Monatsersten?",
    "options": [
     "Urlaubsanträge laufen über das Portal statt über die Vorgesetzte.",
     "Urlaub muss ab sofort persönlich beantragt werden.",
     "Die Personalabteilung entscheidet nicht mehr über Urlaub.",
     "Dringende Fälle werden gar nicht mehr bearbeitet."
    ],
    "answer": 0,
    "transcript": "Noch ein Punkt zum Schluss, das betrifft alle. Ab dem ersten des Monats laufen die Urlaubsanträge nicht mehr über mich, sondern über das Portal. Der Grund ist nicht, dass ich Sie loswerden will, sondern dass die Anträge dann automatisch bei der Personalabteilung landen und nicht mehr wochenlang liegen bleiben. Für dringende Fälle bin ich weiter da. Wer Fragen hat, kommt bitte in den nächsten Tagen auf mich zu, nicht erst, wenn der Urlaub ansteht."
   },
   {
    "type": "choice",
    "audio": "das Missverständnis",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "zwei haben dasselbe verschieden verstanden",
     "für jemanden übernehmen, der ausfällt",
     "rechtzeitig fertig werden",
     "etwas so sagen, dass es ankommt"
    ],
    "answer": 0,
    "w": "das Missverständnis",
    "explain": "das Missverständnis = zwei haben dasselbe verschieden verstanden."
   },
   {
    "type": "choice",
    "audio": "die Rückmeldung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "was jemand zu deiner Arbeit sagt",
     "es fehlt gerade an Zeit, Geld oder Leuten",
     "jemandem Arbeit abnehmen",
     "aus einer Kleinigkeit wird ein großer Streit"
    ],
    "answer": 0,
    "w": "die Rückmeldung",
    "explain": "die Rückmeldung = was jemand zu deiner Arbeit sagt."
   },
   {
    "type": "choice",
    "audio": "ansprechen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein heikles Thema von sich aus zur Sprache bringen",
     "noch einmal nachfragen, wenn nichts kommt",
     "das Gefühl, dass die eigene Arbeit gesehen wird",
     "ein Problem endgültig klären"
    ],
    "answer": 0,
    "w": "ansprechen",
    "explain": "ansprechen = ein heikles Thema von sich aus zur Sprache bringen."
   },
   {
    "type": "choice",
    "audio": "die Absprache",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "was vorher gemeinsam vereinbart wurde",
     "vorher klären, wer was macht",
     "zu zweit, ohne dass jemand mithört",
     "zwei haben dasselbe verschieden verstanden"
    ],
    "answer": 0,
    "w": "die Absprache",
    "explain": "die Absprache = was vorher gemeinsam vereinbart wurde."
   },
   {
    "type": "choice",
    "audio": "zuständig sein",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "diese Aufgabe gehört zu deinem Bereich",
     "rechtzeitig fertig werden",
     "etwas so sagen, dass es ankommt",
     "was jemand zu deiner Arbeit sagt"
    ],
    "answer": 0,
    "w": "zuständig sein",
    "explain": "zuständig sein = diese Aufgabe gehört zu deinem Bereich."
   },
   {
    "type": "choice",
    "audio": "einspringen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "für jemanden übernehmen, der ausfällt",
     "jemandem Arbeit abnehmen",
     "aus einer Kleinigkeit wird ein großer Streit",
     "ein heikles Thema von sich aus zur Sprache bringen"
    ],
    "answer": 0,
    "w": "einspringen",
    "explain": "einspringen = für jemanden übernehmen, der ausfällt."
   },
   {
    "type": "choice",
    "audio": "der Engpass",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "es fehlt gerade an Zeit, Geld oder Leuten",
     "das Gefühl, dass die eigene Arbeit gesehen wird",
     "ein Problem endgültig klären",
     "was vorher gemeinsam vereinbart wurde"
    ],
    "answer": 0,
    "w": "der Engpass",
    "explain": "der Engpass = es fehlt gerade an Zeit, Geld oder Leuten."
   },
   {
    "type": "choice",
    "audio": "nachhaken",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "noch einmal nachfragen, wenn nichts kommt",
     "zu zweit, ohne dass jemand mithört",
     "zwei haben dasselbe verschieden verstanden",
     "diese Aufgabe gehört zu deinem Bereich"
    ],
    "answer": 0,
    "w": "nachhaken",
    "explain": "nachhaken = noch einmal nachfragen, wenn nichts kommt."
   },
   {
    "type": "choice",
    "audio": "sich abstimmen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "vorher klären, wer was macht",
     "etwas so sagen, dass es ankommt",
     "was jemand zu deiner Arbeit sagt",
     "für jemanden übernehmen, der ausfällt"
    ],
    "answer": 0,
    "w": "sich abstimmen",
    "explain": "sich abstimmen = vorher klären, wer was macht."
   },
   {
    "type": "choice",
    "audio": "die Frist einhalten",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "rechtzeitig fertig werden",
     "aus einer Kleinigkeit wird ein großer Streit",
     "ein heikles Thema von sich aus zur Sprache bringen",
     "es fehlt gerade an Zeit, Geld oder Leuten"
    ],
    "answer": 0,
    "w": "die Frist einhalten",
    "explain": "die Frist einhalten = rechtzeitig fertig werden."
   },
   {
    "type": "choice",
    "audio": "entlasten",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "jemandem Arbeit abnehmen",
     "ein Problem endgültig klären",
     "was vorher gemeinsam vereinbart wurde",
     "noch einmal nachfragen, wenn nichts kommt"
    ],
    "answer": 0,
    "w": "entlasten",
    "explain": "entlasten = jemandem Arbeit abnehmen."
   },
   {
    "type": "choice",
    "audio": "die Wertschätzung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Gefühl, dass die eigene Arbeit gesehen wird",
     "zwei haben dasselbe verschieden verstanden",
     "diese Aufgabe gehört zu deinem Bereich",
     "vorher klären, wer was macht"
    ],
    "answer": 0,
    "w": "die Wertschätzung",
    "explain": "die Wertschätzung = das Gefühl, dass die eigene Arbeit gesehen wird."
   },
   {
    "type": "choice",
    "audio": "unter vier Augen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "zu zweit, ohne dass jemand mithört",
     "was jemand zu deiner Arbeit sagt",
     "für jemanden übernehmen, der ausfällt",
     "rechtzeitig fertig werden"
    ],
    "answer": 0,
    "w": "unter vier Augen",
    "explain": "unter vier Augen = zu zweit, ohne dass jemand mithört."
   },
   {
    "type": "choice",
    "audio": "den Ton treffen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "etwas so sagen, dass es ankommt",
     "ein heikles Thema von sich aus zur Sprache bringen",
     "es fehlt gerade an Zeit, Geld oder Leuten",
     "jemandem Arbeit abnehmen"
    ],
    "answer": 0,
    "w": "den Ton treffen",
    "explain": "den Ton treffen = etwas so sagen, dass es ankommt."
   },
   {
    "type": "choice",
    "audio": "die Eskalation",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "aus einer Kleinigkeit wird ein großer Streit",
     "was vorher gemeinsam vereinbart wurde",
     "noch einmal nachfragen, wenn nichts kommt",
     "das Gefühl, dass die eigene Arbeit gesehen wird"
    ],
    "answer": 0,
    "w": "die Eskalation",
    "explain": "die Eskalation = aus einer Kleinigkeit wird ein großer Streit."
   },
   {
    "type": "choice",
    "audio": "aus der Welt schaffen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Problem endgültig klären",
     "diese Aufgabe gehört zu deinem Bereich",
     "vorher klären, wer was macht",
     "zu zweit, ohne dass jemand mithört"
    ],
    "answer": 0,
    "w": "aus der Welt schaffen",
    "explain": "aus der Welt schaffen = ein Problem endgültig klären."
   }
  ]
 },
 {
  "id": "b2-amt-widerspruch",
  "title": "Bescheid, Frist, Widerspruch",
  "level": "B2",
  "emoji": "🎧",
  "words": [
   {
    "de": "der Bescheid",
    "info": "die schriftliche Entscheidung einer Behörde",
    "emoji": "✉️"
   },
   {
    "de": "der Widerspruch",
    "info": "die schriftliche Aussage: damit bin ich nicht einverstanden",
    "emoji": "✋"
   },
   {
    "de": "die Rechtsbehelfsbelehrung",
    "info": "der Absatz am Ende, der sagt, wie man sich wehren kann",
    "emoji": "📜"
   },
   {
    "de": "die Frist",
    "info": "die Zeit, in der man reagieren muss",
    "emoji": "⏳"
   },
   {
    "de": "der Nachweis",
    "info": "ein Papier, das etwas belegt",
    "emoji": "🧾"
   },
   {
    "de": "beantragen",
    "info": "schriftlich um etwas bitten",
    "emoji": "📨"
   },
   {
    "de": "bewilligen",
    "info": "die Behörde sagt Ja",
    "emoji": "✅"
   },
   {
    "de": "ablehnen",
    "info": "die Behörde sagt Nein",
    "emoji": "❌"
   },
   {
    "de": "die Begründung",
    "info": "der Grund, warum so entschieden wurde",
    "emoji": "🧠"
   },
   {
    "de": "die Akte",
    "info": "alle Papiere zu einem Vorgang",
    "emoji": "🗂️"
   },
   {
    "de": "das Aktenzeichen",
    "info": "die Nummer, unter der dein Fall geführt wird",
    "emoji": "🔢"
   },
   {
    "de": "zuständig",
    "info": "diese Stelle bearbeitet deinen Fall",
    "emoji": "📌"
   },
   {
    "de": "nachreichen",
    "info": "ein fehlendes Papier später bringen",
    "emoji": "📮"
   },
   {
    "de": "die Bearbeitungszeit",
    "info": "wie lange die Behörde braucht",
    "emoji": "🕰️"
   },
   {
    "de": "formlos",
    "info": "ohne Formular, ein einfaches Schreiben reicht",
    "emoji": "📝"
   },
   {
    "de": "in Kraft treten",
    "info": "ab jetzt gilt es",
    "emoji": "⚖️"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📞 Rückruf vom Sachbearbeiter",
    "audioUrl": "ton/hoeren-b2/b2-amt-widerspruch-1.mp3",
    "q": "Warum wurde der Antrag abgelehnt?",
    "options": [
     "Weil ein Einkommensnachweis fehlte.",
     "Weil der Anspruch grundsätzlich nicht besteht.",
     "Weil die Frist schon abgelaufen war.",
     "Weil das Aktenzeichen falsch war."
    ],
    "answer": 0,
    "transcript": "Guten Tag, Sie hatten wegen Ihres Bescheids angerufen. Ich habe die Akte vor mir. Der Antrag wurde abgelehnt, weil der Einkommensnachweis für März gefehlt hat — nicht, weil Sie grundsätzlich keinen Anspruch hätten. Sie können den Nachweis nachreichen und gleichzeitig formlos Widerspruch einlegen. Wichtig ist nur die Frist: einen Monat ab dem Datum auf dem Bescheid, nicht ab dem Tag, an dem Sie ihn geöffnet haben. Ein Satz genügt, dazu das Aktenzeichen."
   },
   {
    "type": "listen",
    "label": "📼 Ansage der Behörde",
    "audioUrl": "ton/hoeren-b2/b2-amt-widerspruch-2.mp3",
    "q": "Was soll man tun, wenn eine Frist abläuft?",
    "options": [
     "Es gleich zu Beginn des Gesprächs sagen, dann wird man sofort verbunden.",
     "Auf jeden Fall eine E-Mail schreiben und warten.",
     "Sechs Wochen abwarten und dann anrufen.",
     "Persönlich vorbeikommen, ohne Aktenzeichen."
    ],
    "answer": 0,
    "transcript": "Willkommen beim Bürgerservice. Bitte beachten Sie: Wegen der Umstellung auf das neue System verlängert sich die Bearbeitungszeit derzeit auf bis zu sechs Wochen. Fragen zum Stand Ihres Antrags können wir am Telefon nicht beantworten. Schreiben Sie uns bitte mit Ihrem Aktenzeichen per E-Mail. Läuft in Ihrem Fall eine Frist ab, hat das Vorrang — sagen Sie das gleich am Anfang, dann werden Sie sofort verbunden."
   },
   {
    "type": "listen",
    "label": "💬 Am Schalter",
    "audioUrl": "ton/hoeren-b2/b2-amt-widerspruch-3.mp3",
    "q": "Was rät die Mitarbeiterin?",
    "options": [
     "Belege für die erfolglose Wohnungssuche sammeln und einreichen.",
     "Sofort eine günstigere Wohnung suchen.",
     "Die achtzig Euro selbst zu zahlen und nichts zu sagen.",
     "Den Bescheid zu ignorieren."
    ],
    "answer": 0,
    "transcript": "Ich habe hier den Bescheid, aber ich verstehe die Begründung nicht. — Darf ich mal sehen? Ah, hier steht es: Die Kosten werden nur bis zu der Höhe übernommen, die als angemessen gilt. Ihre Wohnung liegt achtzig Euro darüber. Das heißt nicht, dass Sie ausziehen müssen. Sie können darlegen, warum Sie keine günstigere gefunden haben — Absagen sammeln, Suchanzeigen ausdrucken. Das wird im Einzelfall geprüft."
   },
   {
    "type": "listen",
    "label": "🗣️ Zwei Nachbarn im Hausflur",
    "audioUrl": "ton/hoeren-b2/b2-amt-widerspruch-4.mp3",
    "q": "Warum hat der Nachbar zuerst nur einen kurzen Widerspruch geschickt?",
    "options": [
     "Um die Frist zu wahren; die Begründung folgt später.",
     "Weil eine längere Begründung nicht erlaubt ist.",
     "Weil er das Aktenzeichen noch nicht kannte.",
     "Weil die Beraterin ihm davon abgeraten hat."
    ],
    "answer": 0,
    "transcript": "Und, hast du Widerspruch eingelegt? — Ja, letzte Woche. Ich habe es kurz gemacht: Aktenzeichen, ein Satz, dass ich mit der Entscheidung nicht einverstanden bin, und dass ich die Begründung nachreiche. Die Beraterin meinte, das reicht, um die Frist zu wahren. Die ausführliche Begründung kann man später schicken. Ich war so sicher, dass das kompliziert wird — und dann waren es fünf Zeilen."
   },
   {
    "type": "choice",
    "audio": "der Bescheid",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die schriftliche Entscheidung einer Behörde",
     "schriftlich um etwas bitten",
     "alle Papiere zu einem Vorgang",
     "wie lange die Behörde braucht"
    ],
    "answer": 0,
    "w": "der Bescheid",
    "explain": "der Bescheid = die schriftliche Entscheidung einer Behörde."
   },
   {
    "type": "choice",
    "audio": "der Widerspruch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die schriftliche Aussage: damit bin ich nicht einverstanden",
     "die Behörde sagt Ja",
     "die Nummer, unter der dein Fall geführt wird",
     "ohne Formular, ein einfaches Schreiben reicht"
    ],
    "answer": 0,
    "w": "der Widerspruch",
    "explain": "der Widerspruch = die schriftliche Aussage: damit bin ich nicht einverstanden."
   },
   {
    "type": "choice",
    "audio": "die Rechtsbehelfsbelehrung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Absatz am Ende, der sagt, wie man sich wehren kann",
     "die Behörde sagt Nein",
     "diese Stelle bearbeitet deinen Fall",
     "ab jetzt gilt es"
    ],
    "answer": 0,
    "w": "die Rechtsbehelfsbelehrung",
    "explain": "die Rechtsbehelfsbelehrung = der Absatz am Ende, der sagt, wie man sich wehren kann."
   },
   {
    "type": "choice",
    "audio": "die Frist",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Zeit, in der man reagieren muss",
     "der Grund, warum so entschieden wurde",
     "ein fehlendes Papier später bringen",
     "die schriftliche Entscheidung einer Behörde"
    ],
    "answer": 0,
    "w": "die Frist",
    "explain": "die Frist = die Zeit, in der man reagieren muss."
   },
   {
    "type": "choice",
    "audio": "der Nachweis",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Papier, das etwas belegt",
     "alle Papiere zu einem Vorgang",
     "wie lange die Behörde braucht",
     "die schriftliche Aussage: damit bin ich nicht einverstanden"
    ],
    "answer": 0,
    "w": "der Nachweis",
    "explain": "der Nachweis = ein Papier, das etwas belegt."
   },
   {
    "type": "choice",
    "audio": "beantragen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "schriftlich um etwas bitten",
     "die Nummer, unter der dein Fall geführt wird",
     "ohne Formular, ein einfaches Schreiben reicht",
     "der Absatz am Ende, der sagt, wie man sich wehren kann"
    ],
    "answer": 0,
    "w": "beantragen",
    "explain": "beantragen = schriftlich um etwas bitten."
   },
   {
    "type": "choice",
    "audio": "bewilligen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Behörde sagt Ja",
     "diese Stelle bearbeitet deinen Fall",
     "ab jetzt gilt es",
     "die Zeit, in der man reagieren muss"
    ],
    "answer": 0,
    "w": "bewilligen",
    "explain": "bewilligen = die Behörde sagt Ja."
   },
   {
    "type": "choice",
    "audio": "ablehnen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Behörde sagt Nein",
     "ein fehlendes Papier später bringen",
     "die schriftliche Entscheidung einer Behörde",
     "ein Papier, das etwas belegt"
    ],
    "answer": 0,
    "w": "ablehnen",
    "explain": "ablehnen = die Behörde sagt Nein."
   },
   {
    "type": "choice",
    "audio": "die Begründung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Grund, warum so entschieden wurde",
     "wie lange die Behörde braucht",
     "die schriftliche Aussage: damit bin ich nicht einverstanden",
     "schriftlich um etwas bitten"
    ],
    "answer": 0,
    "w": "die Begründung",
    "explain": "die Begründung = der Grund, warum so entschieden wurde."
   },
   {
    "type": "choice",
    "audio": "die Akte",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "alle Papiere zu einem Vorgang",
     "ohne Formular, ein einfaches Schreiben reicht",
     "der Absatz am Ende, der sagt, wie man sich wehren kann",
     "die Behörde sagt Ja"
    ],
    "answer": 0,
    "w": "die Akte",
    "explain": "die Akte = alle Papiere zu einem Vorgang."
   },
   {
    "type": "choice",
    "audio": "das Aktenzeichen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Nummer, unter der dein Fall geführt wird",
     "ab jetzt gilt es",
     "die Zeit, in der man reagieren muss",
     "die Behörde sagt Nein"
    ],
    "answer": 0,
    "w": "das Aktenzeichen",
    "explain": "das Aktenzeichen = die Nummer, unter der dein Fall geführt wird."
   },
   {
    "type": "choice",
    "audio": "zuständig",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "diese Stelle bearbeitet deinen Fall",
     "die schriftliche Entscheidung einer Behörde",
     "ein Papier, das etwas belegt",
     "der Grund, warum so entschieden wurde"
    ],
    "answer": 0,
    "w": "zuständig",
    "explain": "zuständig = diese Stelle bearbeitet deinen Fall."
   },
   {
    "type": "choice",
    "audio": "nachreichen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein fehlendes Papier später bringen",
     "die schriftliche Aussage: damit bin ich nicht einverstanden",
     "schriftlich um etwas bitten",
     "alle Papiere zu einem Vorgang"
    ],
    "answer": 0,
    "w": "nachreichen",
    "explain": "nachreichen = ein fehlendes Papier später bringen."
   },
   {
    "type": "choice",
    "audio": "die Bearbeitungszeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie lange die Behörde braucht",
     "der Absatz am Ende, der sagt, wie man sich wehren kann",
     "die Behörde sagt Ja",
     "die Nummer, unter der dein Fall geführt wird"
    ],
    "answer": 0,
    "w": "die Bearbeitungszeit",
    "explain": "die Bearbeitungszeit = wie lange die Behörde braucht."
   },
   {
    "type": "choice",
    "audio": "formlos",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ohne Formular, ein einfaches Schreiben reicht",
     "die Zeit, in der man reagieren muss",
     "die Behörde sagt Nein",
     "diese Stelle bearbeitet deinen Fall"
    ],
    "answer": 0,
    "w": "formlos",
    "explain": "formlos = ohne Formular, ein einfaches Schreiben reicht."
   },
   {
    "type": "choice",
    "audio": "in Kraft treten",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ab jetzt gilt es",
     "ein Papier, das etwas belegt",
     "der Grund, warum so entschieden wurde",
     "ein fehlendes Papier später bringen"
    ],
    "answer": 0,
    "w": "in Kraft treten",
    "explain": "in Kraft treten = ab jetzt gilt es."
   }
  ]
 },
 {
  "id": "b2-wohnen-vertrag",
  "title": "Mietvertrag, Kaution, Nebenkosten",
  "level": "B2",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Kaution",
    "info": "das Geld, das die Vermieterin als Sicherheit behält",
    "emoji": "💰"
   },
   {
    "de": "die Nebenkosten",
    "info": "alles außer der reinen Miete: Heizung, Wasser, Müll",
    "emoji": "🧾"
   },
   {
    "de": "die Nebenkostenabrechnung",
    "info": "die jährliche Rechnung darüber",
    "emoji": "📊"
   },
   {
    "de": "die Nachzahlung",
    "info": "das Geld, das man am Ende noch zahlen muss",
    "emoji": "➕"
   },
   {
    "de": "die Rückzahlung",
    "info": "das Geld, das man zurückbekommt",
    "emoji": "↩️"
   },
   {
    "de": "die Staffelmiete",
    "info": "die Miete steigt zu festen Zeitpunkten",
    "emoji": "📈"
   },
   {
    "de": "die Kündigungsfrist",
    "info": "wie lange vorher man kündigen muss",
    "emoji": "📅"
   },
   {
    "de": "der Nachmieter",
    "info": "wer die Wohnung nach dir übernimmt",
    "emoji": "🔑"
   },
   {
    "de": "die Schönheitsreparatur",
    "info": "streichen und ausbessern beim Auszug",
    "emoji": "🖌️"
   },
   {
    "de": "das Übergabeprotokoll",
    "info": "das Blatt, auf dem der Zustand festgehalten wird",
    "emoji": "📋"
   },
   {
    "de": "der Mangel",
    "info": "etwas ist kaputt oder fehlt",
    "emoji": "🔧"
   },
   {
    "de": "die Mietminderung",
    "info": "weniger zahlen, weil etwas nicht in Ordnung ist",
    "emoji": "📉"
   },
   {
    "de": "die Hausordnung",
    "info": "die Regeln für alle im Haus",
    "emoji": "📃"
   },
   {
    "de": "der Eigenbedarf",
    "info": "die Vermieterin braucht die Wohnung selbst",
    "emoji": "🏠"
   },
   {
    "de": "fristgerecht",
    "info": "rechtzeitig, so wie im Vertrag verlangt",
    "emoji": "⏱️"
   },
   {
    "de": "schriftlich",
    "info": "auf Papier, mit Unterschrift",
    "emoji": "✍️"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📞 Anruf bei der Hausverwaltung",
    "audioUrl": "ton/hoeren-b2/b2-wohnen-vertrag-1.mp3",
    "q": "Was kann die Mieterin laut Hausverwaltung tun?",
    "options": [
     "Die Belege im Büro einsehen und innerhalb von zwölf Monaten widersprechen.",
     "Nur innerhalb von vier Wochen widersprechen.",
     "Die Nachzahlung sofort und ohne Prüfung überweisen.",
     "Die Heizkosten selbst neu berechnen."
    ],
    "answer": 0,
    "transcript": "Ich rufe wegen der Nebenkostenabrechnung an. Da steht eine Nachzahlung von vierhundert Euro, und das kommt mir hoch vor. — Moment, ich schaue nach. Ja, die Heizkosten sind bei Ihnen deutlich gestiegen. Sie haben das Recht, die Belege einzusehen; dafür machen wir einen Termin im Büro. Falls sich ein Fehler zeigt, korrigieren wir die Abrechnung. Und noch etwas: Sie haben zwölf Monate Zeit, der Abrechnung zu widersprechen, nicht nur vier Wochen."
   },
   {
    "type": "listen",
    "label": "📋 Bei der Wohnungsübergabe",
    "audioUrl": "ton/hoeren-b2/b2-wohnen-vertrag-2.mp3",
    "q": "Warum ist das Protokoll wichtig?",
    "options": [
     "Weil ohne Protokoll ein späterer Streit über die Kaution schwer zu klären wäre.",
     "Weil die Vermieterin es für das Finanzamt braucht.",
     "Weil der Mieter sonst nicht ausziehen darf.",
     "Weil damit die Kündigungsfrist beginnt."
    ],
    "answer": 0,
    "transcript": "So, dann gehen wir das Protokoll durch. Küche: Der Wasserhahn tropft, das trage ich ein. Bad: Fliese neben der Wanne hat einen Riss — war der schon beim Einzug da? — Ja, das steht auch im alten Protokoll. — Gut, dann notiere ich: vorbestehend. Wohnzimmer: gestrichen, sieht ordentlich aus. Wichtig ist, dass wir beide unterschreiben und Sie eine Kopie mitnehmen. Ohne Protokoll wird es später schwierig, wenn wir uns über die Kaution nicht einig sind."
   },
   {
    "type": "listen",
    "label": "💬 Zwei Freundinnen beim Kaffee",
    "audioUrl": "ton/hoeren-b2/b2-wohnen-vertrag-3.mp3",
    "q": "Was rät die Freundin?",
    "options": [
     "Schriftlich Nachmieter vorzuschlagen.",
     "Die Frist einfach zu ignorieren.",
     "Die Wohnung ohne Kündigung zu verlassen.",
     "Die Kaution einzubehalten."
    ],
    "answer": 0,
    "transcript": "Ich will raus aus der Wohnung, aber die Kündigungsfrist sind drei Monate. — Du kannst einen Nachmieter vorschlagen. Wenn du drei geeignete Leute anbietest, muss die Vermieterin sich damit befassen. Verpflichtet ist sie meistens nicht, aber viele machen es trotzdem, weil sie die Wohnung dann nicht selbst suchen müssen. Frag einfach schriftlich an — mündlich verschwindet so etwas gern."
   },
   {
    "type": "listen",
    "label": "📣 Aushang im Treppenhaus",
    "audioUrl": "ton/hoeren-b2/b2-wohnen-vertrag-4.mp3",
    "q": "Was können Menschen im Homeoffice tun?",
    "options": [
     "Sich bei der Verwaltung melden und den Aufenthaltsraum nutzen.",
     "Die Arbeiten um eine Woche verschieben lassen.",
     "Die Miete für diese Woche mindern.",
     "Ihre Sachen so lange in den Flur stellen."
    ],
    "answer": 0,
    "transcript": "Liebe Hausgemeinschaft, in der kommenden Woche werden die Fenster im Treppenhaus erneuert. Von Montag bis Mittwoch ist mit Lärm zwischen acht und sechzehn Uhr zu rechnen. Das Treppenhaus bleibt begehbar, bitte stellen Sie in dieser Zeit nichts in den Flur. Wer im Homeoffice arbeitet und die Tage nicht verlegen kann, meldet sich bitte bei der Verwaltung — für den Aufenthaltsraum im Erdgeschoss gibt es einen Schlüssel."
   },
   {
    "type": "choice",
    "audio": "die Kaution",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Geld, das die Vermieterin als Sicherheit behält",
     "die Miete steigt zu festen Zeitpunkten",
     "das Blatt, auf dem der Zustand festgehalten wird",
     "die Vermieterin braucht die Wohnung selbst"
    ],
    "answer": 0,
    "w": "die Kaution",
    "explain": "die Kaution = das Geld, das die Vermieterin als Sicherheit behält."
   },
   {
    "type": "choice",
    "audio": "die Nebenkosten",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "alles außer der reinen Miete: Heizung, Wasser, Müll",
     "wie lange vorher man kündigen muss",
     "etwas ist kaputt oder fehlt",
     "rechtzeitig, so wie im Vertrag verlangt"
    ],
    "answer": 0,
    "w": "die Nebenkosten",
    "explain": "die Nebenkosten = alles außer der reinen Miete: Heizung, Wasser, Müll."
   },
   {
    "type": "choice",
    "audio": "die Nebenkostenabrechnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die jährliche Rechnung darüber",
     "wer die Wohnung nach dir übernimmt",
     "weniger zahlen, weil etwas nicht in Ordnung ist",
     "auf Papier, mit Unterschrift"
    ],
    "answer": 0,
    "w": "die Nebenkostenabrechnung",
    "explain": "die Nebenkostenabrechnung = die jährliche Rechnung darüber."
   },
   {
    "type": "choice",
    "audio": "die Nachzahlung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Geld, das man am Ende noch zahlen muss",
     "streichen und ausbessern beim Auszug",
     "die Regeln für alle im Haus",
     "das Geld, das die Vermieterin als Sicherheit behält"
    ],
    "answer": 0,
    "w": "die Nachzahlung",
    "explain": "die Nachzahlung = das Geld, das man am Ende noch zahlen muss."
   },
   {
    "type": "choice",
    "audio": "die Rückzahlung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Geld, das man zurückbekommt",
     "das Blatt, auf dem der Zustand festgehalten wird",
     "die Vermieterin braucht die Wohnung selbst",
     "alles außer der reinen Miete: Heizung, Wasser, Müll"
    ],
    "answer": 0,
    "w": "die Rückzahlung",
    "explain": "die Rückzahlung = das Geld, das man zurückbekommt."
   },
   {
    "type": "choice",
    "audio": "die Staffelmiete",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Miete steigt zu festen Zeitpunkten",
     "etwas ist kaputt oder fehlt",
     "rechtzeitig, so wie im Vertrag verlangt",
     "die jährliche Rechnung darüber"
    ],
    "answer": 0,
    "w": "die Staffelmiete",
    "explain": "die Staffelmiete = die Miete steigt zu festen Zeitpunkten."
   },
   {
    "type": "choice",
    "audio": "die Kündigungsfrist",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie lange vorher man kündigen muss",
     "weniger zahlen, weil etwas nicht in Ordnung ist",
     "auf Papier, mit Unterschrift",
     "das Geld, das man am Ende noch zahlen muss"
    ],
    "answer": 0,
    "w": "die Kündigungsfrist",
    "explain": "die Kündigungsfrist = wie lange vorher man kündigen muss."
   },
   {
    "type": "choice",
    "audio": "der Nachmieter",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wer die Wohnung nach dir übernimmt",
     "die Regeln für alle im Haus",
     "das Geld, das die Vermieterin als Sicherheit behält",
     "das Geld, das man zurückbekommt"
    ],
    "answer": 0,
    "w": "der Nachmieter",
    "explain": "der Nachmieter = wer die Wohnung nach dir übernimmt."
   },
   {
    "type": "choice",
    "audio": "die Schönheitsreparatur",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "streichen und ausbessern beim Auszug",
     "die Vermieterin braucht die Wohnung selbst",
     "alles außer der reinen Miete: Heizung, Wasser, Müll",
     "die Miete steigt zu festen Zeitpunkten"
    ],
    "answer": 0,
    "w": "die Schönheitsreparatur",
    "explain": "die Schönheitsreparatur = streichen und ausbessern beim Auszug."
   },
   {
    "type": "choice",
    "audio": "das Übergabeprotokoll",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Blatt, auf dem der Zustand festgehalten wird",
     "rechtzeitig, so wie im Vertrag verlangt",
     "die jährliche Rechnung darüber",
     "wie lange vorher man kündigen muss"
    ],
    "answer": 0,
    "w": "das Übergabeprotokoll",
    "explain": "das Übergabeprotokoll = das Blatt, auf dem der Zustand festgehalten wird."
   },
   {
    "type": "choice",
    "audio": "der Mangel",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "etwas ist kaputt oder fehlt",
     "auf Papier, mit Unterschrift",
     "das Geld, das man am Ende noch zahlen muss",
     "wer die Wohnung nach dir übernimmt"
    ],
    "answer": 0,
    "w": "der Mangel",
    "explain": "der Mangel = etwas ist kaputt oder fehlt."
   },
   {
    "type": "choice",
    "audio": "die Mietminderung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "weniger zahlen, weil etwas nicht in Ordnung ist",
     "das Geld, das die Vermieterin als Sicherheit behält",
     "das Geld, das man zurückbekommt",
     "streichen und ausbessern beim Auszug"
    ],
    "answer": 0,
    "w": "die Mietminderung",
    "explain": "die Mietminderung = weniger zahlen, weil etwas nicht in Ordnung ist."
   },
   {
    "type": "choice",
    "audio": "die Hausordnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Regeln für alle im Haus",
     "alles außer der reinen Miete: Heizung, Wasser, Müll",
     "die Miete steigt zu festen Zeitpunkten",
     "das Blatt, auf dem der Zustand festgehalten wird"
    ],
    "answer": 0,
    "w": "die Hausordnung",
    "explain": "die Hausordnung = die Regeln für alle im Haus."
   },
   {
    "type": "choice",
    "audio": "der Eigenbedarf",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Vermieterin braucht die Wohnung selbst",
     "die jährliche Rechnung darüber",
     "wie lange vorher man kündigen muss",
     "etwas ist kaputt oder fehlt"
    ],
    "answer": 0,
    "w": "der Eigenbedarf",
    "explain": "der Eigenbedarf = die Vermieterin braucht die Wohnung selbst."
   },
   {
    "type": "choice",
    "audio": "fristgerecht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "rechtzeitig, so wie im Vertrag verlangt",
     "das Geld, das man am Ende noch zahlen muss",
     "wer die Wohnung nach dir übernimmt",
     "weniger zahlen, weil etwas nicht in Ordnung ist"
    ],
    "answer": 0,
    "w": "fristgerecht",
    "explain": "fristgerecht = rechtzeitig, so wie im Vertrag verlangt."
   },
   {
    "type": "choice",
    "audio": "schriftlich",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "auf Papier, mit Unterschrift",
     "das Geld, das man zurückbekommt",
     "streichen und ausbessern beim Auszug",
     "die Regeln für alle im Haus"
    ],
    "answer": 0,
    "w": "schriftlich",
    "explain": "schriftlich = auf Papier, mit Unterschrift."
   }
  ]
 },
 {
  "id": "b2-medien-einordnen",
  "title": "Nachricht, Meinung, Werbung — was ist was?",
  "level": "B2",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Quelle",
    "info": "woher eine Information stammt",
    "emoji": "🔍"
   },
   {
    "de": "die Schlagzeile",
    "info": "die dicke Zeile über dem Text",
    "emoji": "📰"
   },
   {
    "de": "der Kommentar",
    "info": "ein Text, der ausdrücklich eine Meinung vertritt",
    "emoji": "🗨️"
   },
   {
    "de": "die Meldung",
    "info": "die kurze, sachliche Nachricht",
    "emoji": "📄"
   },
   {
    "de": "einordnen",
    "info": "sagen, was etwas bedeutet und wie wichtig es ist",
    "emoji": "🧭"
   },
   {
    "de": "belegen",
    "info": "mit Zahlen oder Zitaten stützen",
    "emoji": "📎"
   },
   {
    "de": "unterstellen",
    "info": "jemandem etwas vorwerfen, ohne es zu beweisen",
    "emoji": "👉"
   },
   {
    "de": "zuspitzen",
    "info": "schärfer darstellen, als es ist",
    "emoji": "🔺"
   },
   {
    "de": "die Reichweite",
    "info": "wie viele Menschen etwas sehen",
    "emoji": "📡"
   },
   {
    "de": "der Algorithmus",
    "info": "die Rechenregel, die auswählt, was du siehst",
    "emoji": "⚙️"
   },
   {
    "de": "die Filterblase",
    "info": "man sieht nur noch, was zur eigenen Meinung passt",
    "emoji": "🫧"
   },
   {
    "de": "die Werbung kennzeichnen",
    "info": "deutlich sagen, dass jemand dafür bezahlt hat",
    "emoji": "🏷️"
   },
   {
    "de": "die Recherche",
    "info": "die Arbeit, bevor man etwas veröffentlicht",
    "emoji": "🕵️"
   },
   {
    "de": "die Richtigstellung",
    "info": "die Korrektur eines Fehlers",
    "emoji": "♻️"
   },
   {
    "de": "reißerisch",
    "info": "aufgeregt und übertrieben formuliert",
    "emoji": "🎺"
   },
   {
    "de": "hinterfragen",
    "info": "nicht gleich glauben, sondern prüfen",
    "emoji": "❓"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📻 Kurz erklärt im Radio",
    "audioUrl": "ton/hoeren-b2/b2-medien-einordnen-1.mp3",
    "q": "Was folgt daraus, wenn Kennzeichnung und Quellen fehlen?",
    "options": [
     "Man sollte es prüfen, bevor man es weitergibt.",
     "Es ist mit Sicherheit falsch.",
     "Es ist eine Meldung, keine Meinung.",
     "Man darf es gar nicht mehr lesen."
    ],
    "answer": 0,
    "transcript": "Woran erkennt man, ob man eine Nachricht oder eine Meinung liest? Drei Dinge helfen. Erstens die Kennzeichnung: Steht Kommentar oder Analyse darüber, ist es ausdrücklich eine Meinung. Zweitens die Sprache — Wörter wie skandalös oder endlich gehören in einen Kommentar, nicht in eine Meldung. Und drittens die Quellen: Eine Meldung nennt, woher sie ihre Zahlen hat. Fehlt das alles, heißt das nicht automatisch, dass es falsch ist. Es heißt: nachschauen, bevor man es weitergibt."
   },
   {
    "type": "listen",
    "label": "💬 Streit am Küchentisch",
    "audioUrl": "ton/hoeren-b2/b2-medien-einordnen-2.mp3",
    "q": "Was ist die Haltung der zweiten Person?",
    "options": [
     "Abwarten und prüfen, statt sofort zu glauben oder abzulehnen.",
     "Grundsätzlich nichts glauben, was in den Medien steht.",
     "Immer der Agenturmeldung vertrauen.",
     "Nur Kommentare lesen, keine Meldungen."
    ],
    "answer": 0,
    "transcript": "Das stand heute überall, das wird schon stimmen. — Dass es überall steht, heißt nur, dass alle voneinander abgeschrieben haben. Schau mal, welche Quelle unten steht — bei allen dieselbe Agentur. Das ist eine Meldung, mehr nicht. Ob die Zahl stimmt, hat noch niemand geprüft. — Du glaubst auch gar nichts mehr. — Doch. Ich warte nur zwei Tage. Wenn es stimmt, steht es dann immer noch da, mit mehr Belegen."
   },
   {
    "type": "listen",
    "label": "📱 Sprachnachricht von einer Freundin",
    "audioUrl": "ton/hoeren-b2/b2-medien-einordnen-3.mp3",
    "q": "Was hat die Freundin entdeckt?",
    "options": [
     "Dass das Video als Anzeige gekennzeichnet ist.",
     "Dass das Mittel nachweislich nicht wirkt.",
     "Dass die Frau in dem Video eine Ärztin ist.",
     "Dass das Video gelöscht wurde."
    ],
    "answer": 0,
    "transcript": "Du, ich habe das Video gesehen, das du geschickt hast. Ich glaub, da ist was schiefgelaufen. Ganz unten in der Beschreibung steht Anzeige, ganz klein. Die Frau wird also dafür bezahlt, das Mittel zu empfehlen — das ändert für mich schon einiges. Ich sage nicht, dass es nicht wirkt. Aber sie sagt es nicht, weil sie überzeugt ist, sondern weil es ihr Beruf ist. Schau mal, ob du das Kleingedruckte findest."
   },
   {
    "type": "listen",
    "label": "🎓 Aus einem Vortrag",
    "audioUrl": "ton/hoeren-b2/b2-medien-einordnen-4.mp3",
    "q": "Was empfiehlt der Vortragende?",
    "options": [
     "Einmal in der Woche bewusst etwas zu suchen, das der eigenen Meinung widerspricht.",
     "Den Algorithmus abzuschalten.",
     "Aufgeregte Videos gar nicht mehr anzusehen.",
     "Die eigene Meinung regelmäßig zu wechseln."
    ],
    "answer": 0,
    "transcript": "Der Algorithmus ist nicht böse, er ist nur einseitig. Er zeigt Ihnen mehr von dem, was Sie lange angesehen haben. Wer dreimal ein aufgeregtes Video zu Ende schaut, bekommt beim vierten Mal ein noch aufgeregteres. Das ist keine Verschwörung, das ist Statistik. Sie können wenig daran ändern — aber Sie können sich einmal in der Woche bewusst etwas suchen, das Ihnen widerspricht. Nicht, um die Meinung zu wechseln. Um zu wissen, dass es sie gibt."
   },
   {
    "type": "choice",
    "audio": "die Quelle",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "woher eine Information stammt",
     "mit Zahlen oder Zitaten stützen",
     "die Rechenregel, die auswählt, was du siehst",
     "die Korrektur eines Fehlers"
    ],
    "answer": 0,
    "w": "die Quelle",
    "explain": "die Quelle = woher eine Information stammt."
   },
   {
    "type": "choice",
    "audio": "die Schlagzeile",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die dicke Zeile über dem Text",
     "jemandem etwas vorwerfen, ohne es zu beweisen",
     "man sieht nur noch, was zur eigenen Meinung passt",
     "aufgeregt und übertrieben formuliert"
    ],
    "answer": 0,
    "w": "die Schlagzeile",
    "explain": "die Schlagzeile = die dicke Zeile über dem Text."
   },
   {
    "type": "choice",
    "audio": "der Kommentar",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Text, der ausdrücklich eine Meinung vertritt",
     "schärfer darstellen, als es ist",
     "deutlich sagen, dass jemand dafür bezahlt hat",
     "nicht gleich glauben, sondern prüfen"
    ],
    "answer": 0,
    "w": "der Kommentar",
    "explain": "der Kommentar = ein Text, der ausdrücklich eine Meinung vertritt."
   },
   {
    "type": "choice",
    "audio": "die Meldung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die kurze, sachliche Nachricht",
     "wie viele Menschen etwas sehen",
     "die Arbeit, bevor man etwas veröffentlicht",
     "woher eine Information stammt"
    ],
    "answer": 0,
    "w": "die Meldung",
    "explain": "die Meldung = die kurze, sachliche Nachricht."
   },
   {
    "type": "choice",
    "audio": "einordnen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sagen, was etwas bedeutet und wie wichtig es ist",
     "die Rechenregel, die auswählt, was du siehst",
     "die Korrektur eines Fehlers",
     "die dicke Zeile über dem Text"
    ],
    "answer": 0,
    "w": "einordnen",
    "explain": "einordnen = sagen, was etwas bedeutet und wie wichtig es ist."
   },
   {
    "type": "choice",
    "audio": "belegen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "mit Zahlen oder Zitaten stützen",
     "man sieht nur noch, was zur eigenen Meinung passt",
     "aufgeregt und übertrieben formuliert",
     "ein Text, der ausdrücklich eine Meinung vertritt"
    ],
    "answer": 0,
    "w": "belegen",
    "explain": "belegen = mit Zahlen oder Zitaten stützen."
   },
   {
    "type": "choice",
    "audio": "unterstellen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "jemandem etwas vorwerfen, ohne es zu beweisen",
     "deutlich sagen, dass jemand dafür bezahlt hat",
     "nicht gleich glauben, sondern prüfen",
     "die kurze, sachliche Nachricht"
    ],
    "answer": 0,
    "w": "unterstellen",
    "explain": "unterstellen = jemandem etwas vorwerfen, ohne es zu beweisen."
   },
   {
    "type": "choice",
    "audio": "zuspitzen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "schärfer darstellen, als es ist",
     "die Arbeit, bevor man etwas veröffentlicht",
     "woher eine Information stammt",
     "sagen, was etwas bedeutet und wie wichtig es ist"
    ],
    "answer": 0,
    "w": "zuspitzen",
    "explain": "zuspitzen = schärfer darstellen, als es ist."
   },
   {
    "type": "choice",
    "audio": "die Reichweite",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie viele Menschen etwas sehen",
     "die Korrektur eines Fehlers",
     "die dicke Zeile über dem Text",
     "mit Zahlen oder Zitaten stützen"
    ],
    "answer": 0,
    "w": "die Reichweite",
    "explain": "die Reichweite = wie viele Menschen etwas sehen."
   },
   {
    "type": "choice",
    "audio": "der Algorithmus",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Rechenregel, die auswählt, was du siehst",
     "aufgeregt und übertrieben formuliert",
     "ein Text, der ausdrücklich eine Meinung vertritt",
     "jemandem etwas vorwerfen, ohne es zu beweisen"
    ],
    "answer": 0,
    "w": "der Algorithmus",
    "explain": "der Algorithmus = die Rechenregel, die auswählt, was du siehst."
   },
   {
    "type": "choice",
    "audio": "die Filterblase",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "man sieht nur noch, was zur eigenen Meinung passt",
     "nicht gleich glauben, sondern prüfen",
     "die kurze, sachliche Nachricht",
     "schärfer darstellen, als es ist"
    ],
    "answer": 0,
    "w": "die Filterblase",
    "explain": "die Filterblase = man sieht nur noch, was zur eigenen Meinung passt."
   },
   {
    "type": "choice",
    "audio": "die Werbung kennzeichnen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "deutlich sagen, dass jemand dafür bezahlt hat",
     "woher eine Information stammt",
     "sagen, was etwas bedeutet und wie wichtig es ist",
     "wie viele Menschen etwas sehen"
    ],
    "answer": 0,
    "w": "die Werbung kennzeichnen",
    "explain": "die Werbung kennzeichnen = deutlich sagen, dass jemand dafür bezahlt hat."
   },
   {
    "type": "choice",
    "audio": "die Recherche",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Arbeit, bevor man etwas veröffentlicht",
     "die dicke Zeile über dem Text",
     "mit Zahlen oder Zitaten stützen",
     "die Rechenregel, die auswählt, was du siehst"
    ],
    "answer": 0,
    "w": "die Recherche",
    "explain": "die Recherche = die Arbeit, bevor man etwas veröffentlicht."
   },
   {
    "type": "choice",
    "audio": "die Richtigstellung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Korrektur eines Fehlers",
     "ein Text, der ausdrücklich eine Meinung vertritt",
     "jemandem etwas vorwerfen, ohne es zu beweisen",
     "man sieht nur noch, was zur eigenen Meinung passt"
    ],
    "answer": 0,
    "w": "die Richtigstellung",
    "explain": "die Richtigstellung = die Korrektur eines Fehlers."
   },
   {
    "type": "choice",
    "audio": "reißerisch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "aufgeregt und übertrieben formuliert",
     "die kurze, sachliche Nachricht",
     "schärfer darstellen, als es ist",
     "deutlich sagen, dass jemand dafür bezahlt hat"
    ],
    "answer": 0,
    "w": "reißerisch",
    "explain": "reißerisch = aufgeregt und übertrieben formuliert."
   },
   {
    "type": "choice",
    "audio": "hinterfragen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "nicht gleich glauben, sondern prüfen",
     "sagen, was etwas bedeutet und wie wichtig es ist",
     "wie viele Menschen etwas sehen",
     "die Arbeit, bevor man etwas veröffentlicht"
    ],
    "answer": 0,
    "w": "hinterfragen",
    "explain": "hinterfragen = nicht gleich glauben, sondern prüfen."
   }
  ]
 }
];

  NEU.forEach(function(t){
    var pos = -1;
    for(var i=0;i<ho.themes.length;i++){ if(ho.themes[i].id===t.id){ pos=i; break; } }
    if(pos>=0) ho.themes[pos] = t; else ho.themes.push(t);
  });
})();
