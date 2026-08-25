/* ============================================================
   deutschoderwas club — SCHREIBTRAINER
   76 Schreibaufgaben von A1 bis C1.

   Warum das der wichtigste Baustein ist: Im „Deutsch-Test für
   den Beruf" 2024 lag die Bestehensquote im Sprechen bei 79,1 %,
   im Schreiben bei nur 54,1 %. Einen echten Brief ans Amt übt
   kaum eine App.

   Eine Aufgabe:
     id      kurzer Name, wird in der Adresse benutzt
     lvl     A1 · A2 · B1 · B2 · C1
     art     formular | mitteilung | mail | brief | beschwerde |
             bewerbung | widerspruch | forum | eroerterung |
             bericht | protokoll | zusammenfassung | kommentar
     pruef   welche Prüfung dieses Format abfragt:
             DTZ | Goethe A1 | Goethe A2 | Goethe B1 | Goethe B2 |
             Goethe C1 | telc B2 | TestDaF | frei
     t       Titel der Aufgabe
     sit     die Situation, in der die Lernende steckt
     empf    an wen der Text geht
     punkte  die Leitpunkte. Auf B1 (DTZ) sind es immer vier.
     anrede  Pflicht laut Prüfung. Bei Formularen leer.
     gruss   Pflicht laut Prüfung. Bei Formularen leer.
     woerter Zielspanne [von, bis]
     hilfe   Satzbausteine, die die Lernende benutzen kann
     krit    was die Prüferin sehen will — daraus wird die
             Bewertung gebaut. Die Kriterien sind die echten:
             DTZ = Leitpunkte · Kommunikative Gestaltung ·
             Korrektheit · Wortschatz. Goethe B2/C1 =
             Aufgabenerfüllung · Kohärenz · Wortschatz ·
             Strukturen, und Aufgabenerfüllung ist das
             Veto-Kriterium: E bedeutet 0 Punkte für die
             ganze Aufgabe.
     muster  ein Mustertext auf Niveau — erst NACH dem
             eigenen Versuch zeigen
     fallen  die typischen Fehler bei genau dieser Aufgabe

   Zwei Dinge, die oft falsch gebaut werden:
   1. Goethe C1 Schreiben hat seit 2024 KEINE Grafikbeschreibung.
      Aufgabe 1 ist ein Diskussionsbeitrag im Forum (ca. 230
      Wörter), Aufgabe 2 eine halbformelle E-Mail (ca. 120 Wörter).
   2. Der DTZ hat keine Mindestwortzahl — aber unter etwa 40
      Wörtern ist B1 praktisch nicht erreichbar. Betreff, Datum
      und Adresse sind nicht nötig, Anrede und Gruß dagegen
      Pflicht.
   ============================================================ */

window.SCHREIBEN = [

/* ==================== A1 — 10 Aufgaben ==================== */

{
  id:'anmeldung-buergeramt',
  lvl:'A1',
  art:'mail',
  pruef:'DTZ',
  t:'Anmeldung beim Bürgeramt',
  sit:'Du bist gerade nach Deutschland gezogen. Innerhalb von zwei Wochen musst du dich beim Bürgeramt anmelden. Du schreibst eine kurze E-Mail und bittest um einen Termin.',
  empf:'Bürgeramt Mitte',
  punkte:['warum du schreibst','wann du Zeit hast','welche Unterlagen du hast','wie man dich erreicht'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[40,60],
  hilfe:[
    'Ich bin am … nach … gezogen.',
    'Ich möchte einen Termin für die Anmeldung.',
    'Ich habe Zeit am … und am …',
    'Ich habe meinen Pass und den Mietvertrag.',
    'Sie können mich unter … erreichen.'
  ],
  krit:[
    {k:'Inhalt', w:'Alle vier Punkte kommen vor. Fehlt einer, gibt es Abzug.'},
    {k:'Register', w:'Sie-Form durchgehend, Anrede mit Komma, danach klein weiter.'},
    {k:'Aufbau', w:'Anrede, Grund, Details, Bitte, Gruß.'},
    {k:'Sprache', w:'Einfache Hauptsätze reichen auf A1. Fehler sind erlaubt, solange man dich versteht.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich bin am 3. März nach Berlin gezogen. Ich möchte mich anmelden und brauche einen Termin. Ich habe montags und mittwochs Zeit. Ich habe meinen Pass und den Mietvertrag. Sie können mich unter 0170 1234567 erreichen.\n\nMit freundlichen Grüßen\nAmina Haddad',
  fallen:[
    '„Sehr geehrte Damen und Herren!" mit Ausrufezeichen — im Deutschen steht ein Komma.',
    'Nach der Anrede geht es klein weiter: „ich bin …".',
    'Nur drei von vier Punkten bearbeitet — kostet direkt Punkte.'
  ]
},

{
  id:'formular-sportverein',
  lvl:'A1',
  art:'formular',
  pruef:'Goethe A1',
  t:'Anmeldeformular Sportverein',
  sit:'Du willst beim TSV Bergheim Volleyball spielen. Am Eingang liegt ein Anmeldeformular mit fünf Feldern. Du füllst es aus.',
  empf:'TSV Bergheim 1912',
  punkte:['Familienname und Vorname','Geburtsdatum','Straße, Postleitzahl, Ort','Abteilung (welche Sportart)','Zahlungsweise (Bankeinzug oder Überweisung)'],
  anrede:'',
  gruss:'',
  woerter:[15,30],
  hilfe:[
    'Familienname: …',
    'Geburtsdatum: 12.05.1994',
    'Straße und Hausnummer: Lindenweg 7',
    'Abteilung: Volleyball',
    'Zahlungsweise: Bankeinzug'
  ],
  krit:[
    {k:'Vollständigkeit', w:'Fünf Felder, fünf Punkte. Jedes leere Feld ist ein verlorener Punkt.'},
    {k:'Richtige Zuordnung', w:'Vorname nicht in das Feld Familienname. Datum als Zahl: 12.05.1994.'},
    {k:'Schrift', w:'Lesbar in Druckbuchstaben. Was die Prüferin nicht lesen kann, zählt nicht.'},
    {k:'Sprache', w:'Keine Sätze nötig. Ein Formular besteht aus Angaben, nicht aus Text.'}
  ],
  muster:'Familienname: Demir\nVorname: Yusuf\nGeburtsdatum: 12.05.1994\nStraße und Hausnummer: Lindenweg 7\nPostleitzahl und Ort: 50667 Köln\nAbteilung: Volleyball\nZahlungsweise: Bankeinzug',
  fallen:[
    'Ein Formular braucht keine Anrede und keinen Gruß — wer „Sehr geehrte Damen und Herren" darüberschreibt, verliert nur Zeit.',
    'Das Datum englisch geschrieben (05/12/1994) — im Deutschen erst der Tag: 12.05.1994.',
    'Bei „Zahlungsweise" steht oft nur ein Kreuz zur Auswahl. Wer stattdessen die Bankverbindung hinschreibt, hat das Feld nicht bearbeitet.'
  ]
},

{
  id:'formular-vhs-kurs',
  lvl:'A1',
  art:'formular',
  pruef:'Goethe A1',
  t:'Anmeldung zum Deutschkurs',
  sit:'Du willst an der Volkshochschule einen Deutschkurs A2 machen. Du füllst die Anmeldung aus.',
  empf:'Volkshochschule Dortmund',
  punkte:['Name','Muttersprache','Kursnummer und Kursniveau','Telefonnummer','Datum und Unterschrift'],
  anrede:'',
  gruss:'',
  woerter:[15,30],
  hilfe:[
    'Name: …',
    'Muttersprache: Ukrainisch',
    'Kurs: A2, Kursnummer 2410',
    'Telefon: 0151 …',
    'Datum: 14.09.2026'
  ],
  krit:[
    {k:'Vollständigkeit', w:'Fünf Angaben. Auch die Unterschrift ist ein Feld.'},
    {k:'Richtige Zuordnung', w:'Muttersprache ist die Sprache, nicht das Land. Also „Ukrainisch", nicht „Ukraine".'},
    {k:'Genauigkeit', w:'Die Kursnummer steht im Programmheft. Sie muss stimmen, sonst landet die Anmeldung im falschen Kurs.'},
    {k:'Sprache', w:'Stichwörter genügen. Keine ganzen Sätze.'}
  ],
  muster:'Name: Olena Kovalenko\nMuttersprache: Ukrainisch\nKurs: Deutsch A2, Kursnummer 2410\nTelefon: 0151 2345678\nDatum: 14.09.2026\nUnterschrift: O. Kovalenko',
  fallen:[
    'Bei „Muttersprache" das Land eintragen — gefragt ist die Sprache.',
    'Die Unterschrift vergessen. Ohne Unterschrift ist die Anmeldung ungültig, und in der Prüfung fehlt ein Punkt.',
    'Telefonnummer mit Buchstaben oder ohne Vorwahl.'
  ]
},

{
  id:'postkarte-ostsee',
  lvl:'A1',
  art:'mitteilung',
  pruef:'frei',
  t:'Postkarte von der Ostsee',
  sit:'Du machst eine Woche Urlaub in Warnemünde an der Ostsee. Du schreibst eine Postkarte an deine Freundin Aylin. Sie lernt mit dir Deutsch.',
  empf:'deine Freundin Aylin',
  punkte:['wo du bist','wie das Wetter ist','was du machst','wann du zurückkommst'],
  anrede:'Liebe Aylin,',
  gruss:'Liebe Grüße',
  woerter:[30,45],
  hilfe:[
    'Ich bin jetzt in …',
    'Das Wetter ist …',
    'Am Morgen gehe ich …',
    'Das Essen hier ist …',
    'Am Sonntag komme ich zurück.'
  ],
  krit:[
    {k:'Inhalt', w:'Vier kleine Informationen. Eine Postkarte ist kurz, aber alle vier müssen drin sein.'},
    {k:'Register', w:'Privat: du, dein, dich. Kein „Sie".'},
    {k:'Aufbau', w:'Anrede, dann erzählen, dann Gruß. Ort und Datum oben rechts sind hübsch, aber nicht Pflicht.'},
    {k:'Sprache', w:'Präsens und kurze Hauptsätze. „und" und „aber" reichen als Verbindung.'}
  ],
  muster:'Liebe Aylin,\n\nich bin jetzt in Warnemünde an der Ostsee. Das Wetter ist gut, aber der Wind ist kalt. Am Morgen gehe ich am Strand spazieren. Am Nachmittag esse ich Fisch. Das Hotel ist schön und nicht teuer. Am Sonntag komme ich zurück.\n\nLiebe Grüße\nNguyen Thi Mai',
  fallen:[
    '„Liebe Aylin!" mit Ausrufezeichen. Im Deutschen steht auch bei der privaten Anrede ein Komma.',
    'Die Sie-Form aus dem Kurs mitnehmen — an eine Freundin schreibt man „du".',
    '„Liebe Grüße" mit Punkt am Ende. Nach dem Gruß steht kein Satzzeichen.'
  ]
},

{
  id:'entschuldigung-kita',
  lvl:'A1',
  art:'mitteilung',
  pruef:'Goethe A1',
  t:'Entschuldigung für die Kita',
  sit:'Deine Tochter Lina ist krank. Sie hat Fieber und kann heute und morgen nicht in die Kita. Du schreibst eine kurze Nachricht an die Erzieherin.',
  empf:'Frau Berger, Kita Sonnenschein',
  punkte:['dass dein Kind krank ist','wie lange es fehlt','wer es später wieder bringt'],
  anrede:'Liebe Frau Berger,',
  gruss:'Viele Grüße',
  woerter:[25,40],
  hilfe:[
    'Lina ist krank. Sie hat Fieber.',
    'Sie kommt heute nicht in die Kita.',
    'Sie kommt am … wieder.',
    'Mein Mann bringt sie am Montag.'
  ],
  krit:[
    {k:'Inhalt', w:'Drei Punkte: krank, wie lange, wer bringt. Alle drei müssen vorkommen.'},
    {k:'Register', w:'Halbformell. „Liebe Frau Berger" mit Sie-Form — man kennt sich, aber man duzt nicht.'},
    {k:'Aufbau', w:'Anrede, Grund, Dauer, Gruß. Vier Zeilen genügen.'},
    {k:'Sprache', w:'Präsens. „Sie hat Fieber." „Sie kommt nicht."'}
  ],
  muster:'Liebe Frau Berger,\n\nLina ist krank. Sie hat Fieber und Husten. Heute und morgen kommt sie nicht in die Kita. Am Montag bringt mein Mann sie wieder.\n\nViele Grüße\nAmina Haddad',
  fallen:[
    '„Liebe Frau Berger, du bist …" — mit „Liebe Frau …" bleibt man trotzdem bei „Sie".',
    'Der Name des Kindes fehlt. Die Erzieherin hat 25 Kinder und weiß nicht, wer gemeint ist.',
    'Nur „Lina ist krank" schreiben und die Dauer vergessen — dann ruft die Kita am nächsten Tag an.'
  ]
},

{
  id:'sms-nachbarin-paket',
  lvl:'A1',
  art:'mitteilung',
  pruef:'frei',
  t:'SMS an die Nachbarin',
  sit:'Morgen kommt ein Paket für dich. Du bist von 8 bis 17 Uhr bei der Arbeit. Du schreibst deiner Nachbarin Frau Berger eine kurze Nachricht.',
  empf:'Frau Berger, Wohnung 3b',
  punkte:['was du möchtest','wann das Paket kommt','warum du nicht da bist'],
  anrede:'Hallo Frau Berger,',
  gruss:'Danke und viele Grüße',
  woerter:[25,40],
  hilfe:[
    'Morgen kommt ein Paket für mich.',
    'Können Sie das Paket annehmen?',
    'Ich arbeite von 8 bis 17 Uhr.',
    'Ich hole es am Abend ab.'
  ],
  krit:[
    {k:'Inhalt', w:'Drei Punkte: die Bitte, die Zeit, der Grund.'},
    {k:'Register', w:'Nachbarin: „Hallo Frau Berger" ist in Ordnung, aber die Sie-Form bleibt.'},
    {k:'Höflichkeit', w:'Eine Bitte als Frage: „Können Sie …?" Nicht „Nehmen Sie das Paket."'},
    {k:'Sprache', w:'Kurze Sätze, Uhrzeit mit „von … bis …".'}
  ],
  muster:'Hallo Frau Berger,\n\nmorgen kommt ein Paket für mich. Können Sie das Paket bitte annehmen? Ich arbeite von 8 bis 17 Uhr und bin nicht zu Hause. Am Abend hole ich es bei Ihnen ab.\n\nDanke und viele Grüße\nYusuf Demir'
  ,
  fallen:[
    'Die Bitte als Befehl: „Nehmen Sie mein Paket." Mit „Können Sie bitte …?" klingt es freundlich.',
    '„Ihnen" klein geschrieben. Die Höflichkeitsform wird immer groß geschrieben: Sie, Ihnen, Ihr.',
    'Vergessen zu sagen, wann man das Paket abholt — dann steht die Nachbarin abends mit dem Karton da.'
  ]
},

{
  id:'mail-termin-zahnarzt',
  lvl:'A1',
  art:'mail',
  pruef:'Goethe A1',
  t:'Termin beim Zahnarzt',
  sit:'Du hast Zahnschmerzen. Du schreibst der Praxis eine kurze E-Mail und bittest um einen Termin.',
  empf:'Zahnarztpraxis Dr. Wagner',
  punkte:['warum du kommen willst','wann du Zeit hast','deine Telefonnummer'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[30,45],
  hilfe:[
    'Ich habe Zahnschmerzen.',
    'Ich brauche einen Termin.',
    'Am Dienstag und am Freitag habe ich Zeit.',
    'Am Vormittag kann ich nicht, ich arbeite.',
    'Meine Telefonnummer ist …'
  ],
  krit:[
    {k:'Inhalt', w:'Drei Punkte: Grund, Zeit, Kontakt.'},
    {k:'Register', w:'Eine Praxis kennt dich nicht: „Sehr geehrte Damen und Herren".'},
    {k:'Aufbau', w:'Anrede, Grund, Bitte, Zeit, Kontakt, Gruß.'},
    {k:'Sprache', w:'Präsens, einfache Hauptsätze. „Ich habe …", „Ich brauche …", „Ich kann …".'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich habe seit zwei Tagen Zahnschmerzen. Ich brauche bitte einen Termin. Am Dienstag und am Freitag habe ich Zeit. Am Vormittag arbeite ich. Meine Telefonnummer ist 0176 3456789.\n\nMit freundlichen Grüßen\nOlena Kovalenko',
  fallen:[
    '„Ich habe Zahnschmerz" — im Deutschen sagt man den Plural: Zahnschmerzen, Kopfschmerzen, Rückenschmerzen.',
    'Der Name unter dem Gruß fehlt. Ohne Namen kann die Praxis keinen Termin eintragen.',
    'Nur „Ich möchte einen Termin" ohne Zeitangabe — dann kommen drei E-Mails hin und her.'
  ]
},

{
  id:'sms-lehrerin-verspaetung',
  lvl:'A1',
  art:'mitteilung',
  pruef:'frei',
  t:'Nachricht an die Kursleiterin',
  sit:'Der Bus hat Verspätung. Du kommst etwa 20 Minuten zu spät in den Deutschkurs. Du schreibst deiner Kursleiterin schnell eine Nachricht.',
  empf:'Frau Berger, Deutschkurs A1',
  punkte:['dass du zu spät kommst','warum','wann du da bist'],
  anrede:'Guten Morgen Frau Berger,',
  gruss:'Viele Grüße',
  woerter:[20,35],
  hilfe:[
    'Ich komme heute zu spät.',
    'Der Bus hat Verspätung.',
    'Ich bin um … Uhr da.',
    'Es tut mir leid.'
  ],
  krit:[
    {k:'Inhalt', w:'Drei Punkte: die Verspätung, der Grund, die Uhrzeit.'},
    {k:'Register', w:'Halbformell, Sie-Form. Auch eine kurze Nachricht braucht Anrede und Gruß.'},
    {k:'Kürze', w:'Eine Nachricht vor dem Kurs ist kurz. Drei Sätze reichen.'},
    {k:'Sprache', w:'Präsens für die nahe Zukunft: „Ich bin um 9.20 Uhr da."'}
  ],
  muster:'Guten Morgen Frau Berger,\n\nich komme heute zu spät. Der Bus hat 20 Minuten Verspätung. Ich bin um 9.20 Uhr da. Es tut mir leid.\n\nViele Grüße\nNguyen Thi Mai',
  fallen:[
    '„Ich bin sorry" oder „Sorry" — auf Deutsch: „Es tut mir leid" oder „Entschuldigung".',
    '„Der Bus ist Verspätung" — richtig ist „Der Bus hat Verspätung".',
    'Die Uhrzeit fehlt. Die Kursleiterin muss wissen, ob sie mit dir rechnen kann.'
  ]
},

{
  id:'einladung-geburtstag-a1',
  lvl:'A1',
  art:'mitteilung',
  pruef:'Goethe A1',
  t:'Einladung zum Geburtstag',
  sit:'Du hast am Samstag Geburtstag und feierst in deiner Wohnung. Du schreibst deinem Freund Yusuf eine Einladung.',
  empf:'dein Freund Yusuf',
  punkte:['warum du feierst','wann und wo','was er mitbringen kann'],
  anrede:'Lieber Yusuf,',
  gruss:'Bis Samstag, liebe Grüße',
  woerter:[25,40],
  hilfe:[
    'Am Samstag habe ich Geburtstag.',
    'Ich feiere bei mir zu Hause.',
    'Die Party beginnt um 18 Uhr.',
    'Kannst du einen Salat mitbringen?',
    'Bitte antworte mir bis Donnerstag.'
  ],
  krit:[
    {k:'Inhalt', w:'Drei Punkte: Anlass, Zeit und Ort, Bitte.'},
    {k:'Register', w:'Privat: du. „Lieber Yusuf," mit Komma.'},
    {k:'Aufbau', w:'Anrede, Einladung, Details, Bitte, Gruß.'},
    {k:'Sprache', w:'Zeitangaben mit „am" für Tage und „um" für Uhrzeiten: am Samstag, um 18 Uhr.'}
  ],
  muster:'Lieber Yusuf,\n\nam Samstag habe ich Geburtstag. Ich feiere bei mir zu Hause, Lindenweg 7. Die Party beginnt um 18 Uhr. Kannst du einen Salat mitbringen? Bitte schreib mir bis Donnerstag.\n\nBis Samstag, liebe Grüße\nAmina',
  fallen:[
    '„in Samstag" oder „am 18 Uhr" — Tage mit „am", Uhrzeiten mit „um".',
    '„Lieber" und „Liebe" verwechseln: Lieber Yusuf, aber Liebe Aylin.',
    'Die Adresse vergessen, wenn der Freund noch nie da war.'
  ]
},

{
  id:'mail-schluessel-hausverwaltung',
  lvl:'A1',
  art:'mail',
  pruef:'DTZ',
  t:'Briefkastenschlüssel fehlt',
  sit:'Du bist neu in der Wohnung. Du hast den Wohnungsschlüssel, aber keinen Schlüssel für den Briefkasten. Du schreibst der Hausverwaltung.',
  empf:'Hausverwaltung Krämer',
  punkte:['seit wann du in der Wohnung wohnst','welches Problem du hast','was du möchtest','wann man dich erreicht'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[40,55],
  hilfe:[
    'Ich wohne seit dem 1. April in der Lindenstraße 12.',
    'Ich habe keinen Schlüssel für den Briefkasten.',
    'Ich kann meine Post nicht holen.',
    'Bitte schicken Sie mir den Schlüssel.',
    'Sie können mich am Abend anrufen: …'
  ],
  krit:[
    {k:'Inhalt', w:'Vier Punkte: seit wann, Problem, Wunsch, Kontakt.'},
    {k:'Register', w:'Eine Hausverwaltung ist eine Firma: Sehr geehrte Damen und Herren, Sie-Form.'},
    {k:'Genauigkeit', w:'Adresse und Wohnung nennen. Die Verwaltung betreut viele Häuser.'},
    {k:'Sprache', w:'„seit" mit Dativ: seit dem 1. April. Einfache Hauptsätze genügen.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich wohne seit dem 1. April in der Lindenstraße 12, Wohnung 4b. Ich habe den Wohnungsschlüssel, aber keinen Schlüssel für den Briefkasten. So kann ich meine Post nicht holen. Bitte schicken Sie mir den Schlüssel. Sie können mich am Abend unter 0170 1234567 anrufen.\n\nMit freundlichen Grüßen\nYusuf Demir',
  fallen:[
    '„seit 1. April" ohne Artikel — richtig ist „seit dem 1. April".',
    'Die Wohnungsnummer fehlt. Ohne sie weiß niemand, welcher Briefkasten gemeint ist.',
    '„Bitte schicken Sie mir der Schlüssel" — nach „schicken" steht der Akkusativ: den Schlüssel.'
  ]
},

/* ==================== A2 — 14 Aufgaben ==================== */

{
  id:'krankmeldung-arbeitgeber',
  lvl:'A2',
  art:'mail',
  pruef:'Goethe A2',
  t:'Krankmeldung beim Arbeitgeber',
  sit:'Du hast eine starke Erkältung und Fieber. Du kannst heute nicht zur Arbeit. Du schreibst deinem Chef eine kurze E-Mail.',
  empf:'Herr Özdemir, Ihr Vorgesetzter',
  punkte:['dass du krank bist','wie lange du fehlst','dass ein Attest kommt','wer deine Arbeit übernimmt'],
  anrede:'Sehr geehrter Herr Özdemir,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[40,60],
  hilfe:[
    'Leider bin ich krank und kann heute nicht kommen.',
    'Der Arzt hat mich bis Freitag krankgeschrieben.',
    'Die Krankmeldung schicke ich Ihnen heute noch.',
    'Frau Klein kann meine Schicht übernehmen.',
    'Bei Fragen erreichen Sie mich unter …'
  ],
  krit:[
    {k:'Leitpunkte', w:'Alle vier Punkte. Besonders wichtig: die Dauer und das Attest.'},
    {k:'Register', w:'Halbformell bis formell, Sie-Form. „Sehr geehrter Herr Özdemir," mit r am Ende.'},
    {k:'Kommunikative Gestaltung', w:'Der Chef muss nach dem ersten Satz wissen, worum es geht. Keine Einleitung wie „Wie geht es Ihnen?".'},
    {k:'Sprache', w:'Perfekt für den Arztbesuch, Präsens für heute. „Ich war beim Arzt." „Ich bin krank."'}
  ],
  muster:'Sehr geehrter Herr Özdemir,\n\nleider bin ich krank und kann heute nicht zur Arbeit kommen. Ich habe Fieber und starken Husten. Ich war heute Morgen beim Arzt. Er hat mich bis Freitag krankgeschrieben. Die Krankmeldung schicke ich Ihnen heute noch per Post. Frau Klein kann meine Schicht am Donnerstag übernehmen.\n\nMit freundlichen Grüßen\nOlena Kovalenko',
  fallen:[
    '„Sehr geehrter Frau" oder „Sehr geehrte Herr" — bei Herrn steht „geehrter", bei Frau „geehrte".',
    '„Ich bin krankgeschrieben von der Arzt" — richtig: „vom Arzt", denn „von" verlangt den Dativ.',
    'Die Dauer fehlt. Ein Betrieb muss die Schicht planen, „ich bin krank" allein reicht nicht.',
    'Die Krankmeldung („gelber Zettel") nicht erwähnt — in Deutschland ist das der wichtigste Teil.'
  ]
},

{
  id:'sms-freundin-absage',
  lvl:'A2',
  art:'mitteilung',
  pruef:'Goethe A2',
  t:'Kinobesuch absagen',
  sit:'Du wolltest heute Abend mit deiner Freundin Aylin ins Kino gehen. Deine Schwester kommt aber überraschend zu Besuch. Du sagst ab und machst einen neuen Vorschlag.',
  empf:'deine Freundin Aylin',
  punkte:['dass du nicht kommen kannst','warum','ein neuer Vorschlag'],
  anrede:'Hallo Aylin,',
  gruss:'Liebe Grüße',
  woerter:[20,35],
  hilfe:[
    'es tut mir leid, aber heute klappt es nicht.',
    'Meine Schwester kommt überraschend zu Besuch.',
    'Können wir am Samstag gehen?',
    'Sag mir Bescheid, ob das passt.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Drei Funktionen: absagen, begründen, neuen Vorschlag machen. Der Vorschlag wird am häufigsten vergessen.'},
    {k:'Register', w:'Privat: du, dich, dir. Alles klein außer Satzanfang und Nomen.'},
    {k:'Textumfang', w:'20 bis 30 Wörter. Unter der Hälfte bewertet Goethe mit E — das sind 0 Punkte.'},
    {k:'Sprache', w:'„Können wir …?" für den Vorschlag. Nebensatz mit „weil" ist auf A2 schon möglich.'}
  ],
  muster:'Hallo Aylin,\n\nes tut mir leid, aber heute Abend kann ich nicht ins Kino gehen. Meine Schwester kommt überraschend zu Besuch. Können wir am Samstag gehen? Der Film läuft noch. Schreib mir bitte kurz.\n\nLiebe Grüße\nMai',
  fallen:[
    'Der neue Vorschlag fehlt — das ist eine von drei Funktionen und kostet ein Drittel der Punkte.',
    'Die Sie-Form benutzen, obwohl es die Freundin ist. Register wird eigenständig bewertet.',
    'Zu kurz: „Kann nicht, sorry." Unter 50 Prozent Textumfang bedeutet 0 Punkte.'
  ]
},

{
  id:'termin-verschieben-auslaenderbehoerde',
  lvl:'A2',
  art:'mail',
  pruef:'DTZ',
  t:'Termin bei der Ausländerbehörde verschieben',
  sit:'Du hast am 12. Mai um 9 Uhr einen Termin bei der Ausländerbehörde. An diesem Tag musst du arbeiten. Du bittest um einen neuen Termin.',
  empf:'Ausländerbehörde, Sachgebiet 3',
  punkte:['welchen Termin du hast','warum du nicht kommen kannst','wann du Zeit hast','worum du bittest'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[45,65],
  hilfe:[
    'ich habe am … um … Uhr einen Termin bei Ihnen.',
    'Leider muss ich an diesem Tag arbeiten.',
    'Mein Chef gibt mir an diesem Tag nicht frei.',
    'Am Montag und am Mittwoch habe ich frei.',
    'Können Sie mir bitte einen neuen Termin geben?'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte, und der alte Termin mit Datum und Uhrzeit gehört dazu.'},
    {k:'Register', w:'Behörde: Sehr geehrte Damen und Herren, Sie-Form, keine Abkürzungen.'},
    {k:'Kommunikative Gestaltung', w:'Wer das Aktenzeichen oder die Kundennummer hat, nennt sie. Das spart der Behörde Suchen.'},
    {k:'Korrektheit', w:'Datum und Uhrzeit richtig schreiben: am 12. Mai um 9 Uhr.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich habe am 12. Mai um 9 Uhr einen Termin bei Ihnen. Leider kann ich nicht kommen, weil ich an diesem Tag arbeiten muss. Mein Chef gibt mir nicht frei. Am Montag und am Mittwoch habe ich frei, auch am Vormittag. Können Sie mir bitte einen neuen Termin geben?\n\nMit freundlichen Grüßen\nYusuf Demir, geboren am 12.05.1994',
  fallen:[
    'Einfach nicht hingehen und später anrufen — bei Behörden dauert der nächste freie Termin oft Wochen. Immer schriftlich absagen.',
    '„Ich kann nicht kommen, weil ich muss arbeiten." Im weil-Satz steht das Verb am Ende: „weil ich arbeiten muss".',
    'Keine Alternative anbieten. Wer nur absagt, bekommt einen Termin, der wieder nicht passt.'
  ]
},

{
  id:'einladung-einweihung',
  lvl:'A2',
  art:'mitteilung',
  pruef:'frei',
  t:'Einladung zur Wohnungseinweihung',
  sit:'Du bist in eine neue Wohnung gezogen und machst eine kleine Einweihungsfeier. Du schreibst Familie Schneider aus dem zweiten Stock eine Einladung.',
  empf:'Familie Schneider, 2. Stock',
  punkte:['warum du feierst','wann und wo','was es zu essen gibt','bis wann sie antworten sollen'],
  anrede:'Liebe Familie Schneider,',
  gruss:'Herzliche Grüße',
  woerter:[40,60],
  hilfe:[
    'wir sind vor zwei Wochen in die Wohnung 4b gezogen.',
    'Am Samstag, den 18. Mai, feiern wir eine kleine Einweihung.',
    'Wir fangen um 17 Uhr an.',
    'Es gibt Kuchen und Salate.',
    'Bitte sagen Sie uns bis Mittwoch Bescheid.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Auch die Bitte um Antwort ist ein Punkt.'},
    {k:'Register', w:'Nachbarn, die man kaum kennt: „Liebe Familie Schneider" plus Sie-Form.'},
    {k:'Kommunikative Gestaltung', w:'Eine Einladung ist freundlich. Ein Satz wie „Wir würden uns freuen" gehört dazu.'},
    {k:'Sprache', w:'Datum im Akkusativ: „am Samstag, den 18. Mai". Zeitangaben mit „um" und „ab".'}
  ],
  muster:'Liebe Familie Schneider,\n\nwir sind vor zwei Wochen in die Wohnung 4b gezogen. Am Samstag, den 18. Mai, feiern wir eine kleine Einweihung. Wir fangen um 17 Uhr an. Es gibt Kuchen, Salate und Getränke. Sie müssen nichts mitbringen. Bitte sagen Sie uns bis Mittwoch Bescheid. Wir würden uns freuen.\n\nHerzliche Grüße\nAmina Haddad und Familie',
  fallen:[
    '„Liebe Familie Schneider, ihr seid herzlich eingeladen" — bei „Liebe Familie …" bleibt man in der Sie-Form.',
    '„am Samstag, der 18. Mai" — richtig ist der Akkusativ: „den 18. Mai".',
    'Die Uhrzeit vergessen. Bei einer Feier ist genau das die wichtigste Information.'
  ]
},

{
  id:'beschwerde-heizung-a2',
  lvl:'A2',
  art:'beschwerde',
  pruef:'DTZ',
  t:'Die Heizung ist kalt',
  sit:'Es ist November und deine Heizung funktioniert seit drei Tagen nicht. In der Wohnung sind nur 15 Grad. Du schreibst dem Vermieter.',
  empf:'Herr Özdemir, Vermieter',
  punkte:['was kaputt ist','seit wann','wie es in der Wohnung ist','was du möchtest'],
  anrede:'Sehr geehrter Herr Özdemir,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[45,65],
  hilfe:[
    'die Heizung in meiner Wohnung funktioniert nicht.',
    'Das Problem besteht seit dem 12. November.',
    'In der Wohnung sind nur 15 Grad.',
    'Mein Kind ist erkältet.',
    'Bitte schicken Sie schnell einen Handwerker.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte: Was, seit wann, Folge, Wunsch. Ohne die Folge klingt es nicht dringend.'},
    {k:'Register', w:'Sachlich und höflich, auch wenn man verärgert ist. Sie-Form.'},
    {k:'Kommunikative Gestaltung', w:'Ein konkretes Datum und eine konkrete Bitte. „Bitte reparieren Sie es bald" ist zu vage.'},
    {k:'Korrektheit', w:'„funktionieren" statt „arbeiten" bei Geräten. „seit" mit Dativ.'}
  ],
  muster:'Sehr geehrter Herr Özdemir,\n\ndie Heizung in meiner Wohnung funktioniert nicht. Das Problem besteht seit dem 12. November. Es sind nur 15 Grad in der Wohnung, und mein Sohn ist schon erkältet. Bitte schicken Sie diese Woche einen Handwerker. Sie können mich unter 0151 2345678 erreichen.\n\nMit freundlichen Grüßen\nOlena Kovalenko, Lindenstraße 12, Wohnung 4b',
  fallen:[
    '„Die Heizung arbeitet nicht" — Geräte funktionieren, Menschen arbeiten.',
    'Wütend schreiben: „Das ist ein Skandal!" Bei einer Beschwerde zählt Sachlichkeit, nicht Ärger.',
    'Die eigene Adresse fehlt. Der Vermieter hat mehrere Wohnungen und muss wissen, welche gemeint ist.'
  ]
},

{
  id:'anzeige-antworten-fahrrad',
  lvl:'A2',
  art:'mail',
  pruef:'Goethe A2',
  t:'Auf eine Kleinanzeige antworten',
  sit:'Auf einem Kleinanzeigenportal steht: „Damenfahrrad, 3 Jahre alt, 120 Euro, Abholung in Köln-Nippes." Du interessierst dich dafür und schreibst.',
  empf:'Verkäufer der Anzeige',
  punkte:['welche Anzeige du meinst','was du wissen willst','wann du kommen kannst'],
  anrede:'Guten Tag,',
  gruss:'Freundliche Grüße',
  woerter:[35,50],
  hilfe:[
    'ich habe Ihre Anzeige für das Damenfahrrad gesehen.',
    'Ich habe noch eine Frage: Funktionieren die Bremsen gut?',
    'Ist der Preis noch aktuell?',
    'Ich könnte am Samstag um 14 Uhr kommen.',
    'Passt Ihnen das?'
  ],
  krit:[
    {k:'Leitpunkte', w:'Drei Funktionen: Bezug auf die Anzeige, Frage, Terminvorschlag.'},
    {k:'Register', w:'Man kennt sich nicht: „Guten Tag" und Sie-Form. Kein „Hey".'},
    {k:'Kommunikative Gestaltung', w:'Konkrete Fragen stellen. „Erzählen Sie mir mehr" bringt keine Antwort.'},
    {k:'Sprache', w:'Höfliche Frage mit „Könnte ich …?" oder „Wäre es möglich, dass …?".'}
  ],
  muster:'Guten Tag,\n\nich habe Ihre Anzeige für das Damenfahrrad gesehen. Das Rad gefällt mir gut. Ich habe zwei Fragen: Funktionieren die Bremsen gut, und ist ein Schloss dabei? Ich könnte am Samstag um 14 Uhr nach Nippes kommen. Passt Ihnen das? Bitte antworten Sie mir kurz.\n\nFreundliche Grüße\nNguyen Thi Mai',
  fallen:[
    'Nur „Ist das Fahrrad noch da?" schreiben — dann fehlen zwei von drei Funktionen.',
    'Sofort über den Preis verhandeln, ohne das Rad gesehen zu haben. In der Prüfung ist der Preis kein Leitpunkt, wenn er nicht in der Aufgabe steht.',
    '„Ich komme Samstag" ohne Uhrzeit und ohne Frage, ob es passt.'
  ]
},

{
  id:'nachricht-lehrerin-schwimmen',
  lvl:'A2',
  art:'mail',
  pruef:'DTZ',
  t:'Nachricht an die Lehrerin',
  sit:'Dein Sohn Amir kann diese Woche nicht am Schwimmunterricht teilnehmen. Er hat eine Ohrenentzündung. Du schreibst der Klassenlehrerin.',
  empf:'Frau Berger, Grundschule Amselweg',
  punkte:['um welches Kind es geht','warum er nicht schwimmen kann','wie lange','was er stattdessen macht'],
  anrede:'Sehr geehrte Frau Berger,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[45,60],
  hilfe:[
    'mein Sohn Amir geht in die Klasse 3b.',
    'Er hat eine Ohrenentzündung.',
    'Der Arzt hat gesagt, er darf zwei Wochen nicht schwimmen.',
    'Er kommt aber normal in die Schule.',
    'Kann er in der Zeit in einer anderen Klasse sitzen?'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Der Klassenname ist Teil von Punkt eins.'},
    {k:'Register', w:'Schule: „Sehr geehrte Frau Berger" plus Sie-Form. Auch wenn man sich vom Elternabend kennt.'},
    {k:'Kommunikative Gestaltung', w:'Für die Schule sind Dauer und Vertretung wichtig. Beides konkret angeben.'},
    {k:'Korrektheit', w:'Nebensatz mit „dass" oder „weil": „weil er eine Ohrenentzündung hat".'}
  ],
  muster:'Sehr geehrte Frau Berger,\n\nmein Sohn Amir Haddad geht in die Klasse 3b. Er kann diese Woche nicht am Schwimmunterricht teilnehmen, weil er eine Ohrenentzündung hat. Der Arzt hat gesagt, dass er zwei Wochen nicht ins Wasser darf. In die Schule kommt Amir aber normal. Kann er während der Schwimmstunde in der Bibliothek warten?\n\nMit freundlichen Grüßen\nAmina Haddad',
  fallen:[
    'Der Name des Kindes und die Klasse fehlen — die Lehrerin unterrichtet mehrere Klassen.',
    '„Der Arzt hat gesagt, er darf nicht schwimmen zwei Wochen." Zeitangabe vor dem Infinitiv: „zwei Wochen nicht schwimmen darf".',
    'Nicht sagen, dass das Kind sonst zur Schule kommt — dann trägt die Schule es als Fehltag ein.'
  ]
},

{
  id:'mail-kursleiter-fehlen',
  lvl:'A2',
  art:'mail',
  pruef:'Goethe A2',
  t:'E-Mail an den Kursleiter',
  sit:'Du kannst am Freitag nicht zum Deutschkurs kommen, weil du zum Amt musst. Du schreibst dem Kursleiter eine halbformelle E-Mail.',
  empf:'Herr Özdemir, Kursleiter',
  punkte:['dass du fehlst','warum','was du wegen der Hausaufgaben brauchst'],
  anrede:'Sehr geehrter Herr Özdemir,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[30,45],
  hilfe:[
    'am Freitag kann ich leider nicht zum Kurs kommen.',
    'Ich habe einen Termin bei der Ausländerbehörde.',
    'Können Sie mir die Hausaufgaben per E-Mail schicken?',
    'Ich lerne die Lektion zu Hause nach.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Drei Funktionen: absagen, begründen, um etwas bitten.'},
    {k:'Register', w:'Das ist der halbformelle Teil der A2-Prüfung: Sie-Form, „Sehr geehrter …", „Mit freundlichen Grüßen".'},
    {k:'Textumfang', w:'30 bis 40 Wörter. Zu kurz wird mit E bewertet.'},
    {k:'Sprache', w:'„leider" am Satzanfang oder nach dem Verb. Modalverben: kann, muss, möchte.'}
  ],
  muster:'Sehr geehrter Herr Özdemir,\n\nam Freitag kann ich leider nicht zum Kurs kommen. Ich habe einen Termin bei der Ausländerbehörde. Können Sie mir bitte die Hausaufgaben per E-Mail schicken? Ich lerne die Lektion am Wochenende nach.\n\nMit freundlichen Grüßen\nOlena Kovalenko',
  fallen:[
    'Dieselbe Aufgabe wie die private SMS behandeln und „Hallo, ich kann nicht" schreiben. In Teil 2 der A2-Prüfung wird das Register eigenständig bewertet.',
    '„Mit freundlichen Grüßen," mit Komma. Nach dem Gruß steht kein Satzzeichen.',
    'Die Bitte fehlt. Ohne sie sind nur zwei von drei Funktionen erfüllt.'
  ]
},

{
  id:'sms-nachbarin-bohrmaschine',
  lvl:'A2',
  art:'mitteilung',
  pruef:'frei',
  t:'Um eine Bohrmaschine bitten',
  sit:'Du willst ein Regal aufhängen und hast keine Bohrmaschine. Frau Berger von gegenüber hat eine. Du schreibst ihr eine Nachricht.',
  empf:'Frau Berger, Nachbarin',
  punkte:['was du brauchst','warum','wann du sie holen würdest','wann du sie zurückbringst'],
  anrede:'Hallo Frau Berger,',
  gruss:'Vielen Dank und viele Grüße',
  woerter:[30,45],
  hilfe:[
    'ich möchte ein Regal aufhängen.',
    'Leider habe ich keine Bohrmaschine.',
    'Könnten Sie mir Ihre Bohrmaschine leihen?',
    'Ich würde sie heute Abend holen.',
    'Morgen Mittag bringe ich sie zurück.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Die Rückgabe zu nennen macht die Bitte erst angenehm.'},
    {k:'Register', w:'Nachbarschaft: „Hallo Frau Berger" mit Sie-Form.'},
    {k:'Höflichkeit', w:'Konjunktiv II macht die Bitte weicher: „Könnten Sie …?", „Ich würde …".'},
    {k:'Sprache', w:'„leihen" mit Dativ und Akkusativ: Sie leihen mir die Maschine.'}
  ],
  muster:'Hallo Frau Berger,\n\nich möchte am Wochenende ein Regal aufhängen, aber ich habe keine Bohrmaschine. Könnten Sie mir Ihre leihen? Ich würde sie heute Abend nach 18 Uhr holen. Morgen Mittag bringe ich sie wieder zurück.\n\nVielen Dank und viele Grüße\nYusuf Demir, Wohnung 4b',
  fallen:[
    '„Können Sie mir die Bohrmaschine borgen?" — „borgen" wird oft verwechselt. Sicher ist: „Könnten Sie mir … leihen?"',
    'Nicht sagen, wann man das Werkzeug zurückbringt. Genau das erwartet eine Nachbarin.',
    '„Ihre" klein geschrieben. Die Höflichkeitsform wird großgeschrieben.'
  ]
},

{
  id:'mail-bibliothek-verlaengern',
  lvl:'A2',
  art:'mail',
  pruef:'frei',
  t:'Buch verlängern lassen',
  sit:'Du hast zwei Bücher aus der Stadtbibliothek. Die Leihfrist endet am Montag, du bist aber noch nicht fertig. Du schreibst der Bibliothek.',
  empf:'Stadtbibliothek Dortmund',
  punkte:['welche Bücher du hast','wann die Frist endet','was du möchtest','deine Ausweisnummer'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[35,55],
  hilfe:[
    'ich habe zwei Bücher bei Ihnen ausgeliehen.',
    'Die Leihfrist endet am Montag, dem 5. Mai.',
    'Ich bin leider noch nicht fertig.',
    'Können Sie die Frist um zwei Wochen verlängern?',
    'Meine Ausweisnummer ist …'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Ohne Ausweisnummer kann die Bibliothek nichts tun.'},
    {k:'Register', w:'Öffentliche Einrichtung: Sehr geehrte Damen und Herren.'},
    {k:'Kommunikative Gestaltung', w:'Titel der Bücher nennen, nicht nur „zwei Bücher".'},
    {k:'Sprache', w:'„um zwei Wochen verlängern" — die Präposition „um" gehört zur Dauer der Verlängerung.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich habe zwei Bücher bei Ihnen ausgeliehen: „Der Vorleser" und ein Wörterbuch. Die Leihfrist endet am Montag, dem 5. Mai. Leider bin ich noch nicht fertig. Können Sie die Frist bitte um zwei Wochen verlängern? Meine Ausweisnummer ist 4408 2213.\n\nMit freundlichen Grüßen\nNguyen Thi Mai',
  fallen:[
    '„verlängern für zwei Wochen" — richtig ist „um zwei Wochen".',
    'Die Ausweisnummer weglassen. Dann kommt eine Rückfrage und die Frist läuft ab.',
    '„Die Leihfrist ist am Montag fertig" — Fristen enden oder laufen ab, sie werden nicht fertig.'
  ]
},

{
  id:'anzeige-wohnung-anfragen',
  lvl:'A2',
  art:'mail',
  pruef:'DTZ',
  t:'Anfrage zu einer Wohnung',
  sit:'In der Zeitung steht: „2-Zimmer-Wohnung, 58 qm, 620 Euro warm, ab 1. Juli, Bochum-Mitte." Du interessierst dich und schreibst der Hausverwaltung.',
  empf:'Hausverwaltung Krämer',
  punkte:['auf welche Anzeige du dich beziehst','wer bei dir einzieht','was du wissen möchtest','wann du die Wohnung ansehen kannst'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[50,70],
  hilfe:[
    'ich habe Ihre Anzeige in der Zeitung vom … gelesen.',
    'Ich interessiere mich für die 2-Zimmer-Wohnung.',
    'Ich wohne dort mit meiner Tochter.',
    'Ist ein Kellerraum dabei?',
    'Ich könnte die Wohnung am Donnerstag ansehen.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Bei Wohnungen ist „wer einzieht" fast immer die erste Frage der Verwaltung.'},
    {k:'Register', w:'Formell, Sie-Form. Eine Wohnungsanfrage ist der erste Eindruck.'},
    {k:'Kommunikative Gestaltung', w:'Beruf und festes Einkommen kurz nennen — in Deutschland fragt die Verwaltung sonst nach.'},
    {k:'Korrektheit', w:'„sich interessieren für" mit Akkusativ: „für die Wohnung".'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich habe Ihre Anzeige in der Zeitung vom 3. Mai gelesen und interessiere mich für die 2-Zimmer-Wohnung in Bochum-Mitte. Ich arbeite seit zwei Jahren als Pflegehelferin und habe einen festen Vertrag. In die Wohnung ziehe ich mit meiner Tochter ein, sie ist sieben Jahre alt. Ist ein Kellerraum dabei, und darf man in der Wohnung Wäsche trocknen? Ich könnte die Wohnung am Donnerstag oder am Freitag ansehen.\n\nMit freundlichen Grüßen\nOlena Kovalenko',
  fallen:[
    '„Ich interessiere mich für der Wohnung" — nach „für" steht immer der Akkusativ.',
    'Nur nach dem Preis fragen. Die Verwaltung will wissen, wer einzieht und ob das Einkommen reicht.',
    'Keinen Besichtigungstermin vorschlagen. Bei Wohnungen entscheidet oft, wer zuerst kommt.'
  ]
},

{
  id:'entschuldigung-elternabend',
  lvl:'A2',
  art:'mail',
  pruef:'DTZ',
  t:'Elternabend absagen',
  sit:'Am Dienstag ist Elternabend in der Grundschule. Du arbeitest Spätschicht und kannst nicht kommen. Du schreibst der Lehrerin.',
  empf:'Frau Berger, Klasse 3b',
  punkte:['dass du nicht kommst','warum','was du trotzdem erfahren möchtest','ein Vorschlag für ein Gespräch'],
  anrede:'Sehr geehrte Frau Berger,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[45,65],
  hilfe:[
    'zum Elternabend am Dienstag kann ich leider nicht kommen.',
    'Ich arbeite an diesem Tag Spätschicht von 14 bis 22 Uhr.',
    'Können Sie mir die wichtigsten Informationen schriftlich geben?',
    'Vielleicht ist ein kurzes Gespräch am Freitagmorgen möglich?',
    'Vielen Dank für Ihr Verständnis.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte, darunter ein konkreter eigener Vorschlag.'},
    {k:'Register', w:'Schule, formell: „Sehr geehrte Frau Berger".'},
    {k:'Kommunikative Gestaltung', w:'Der Schluss zeigt Interesse: man sagt nicht nur ab, man will informiert bleiben.'},
    {k:'Korrektheit', w:'Uhrzeiten mit „von … bis …". Nebensatz mit „weil" korrekt bauen.'}
  ],
  muster:'Sehr geehrte Frau Berger,\n\nzum Elternabend am Dienstag kann ich leider nicht kommen, weil ich Spätschicht von 14 bis 22 Uhr habe. Mein Mann arbeitet an diesem Abend auch. Können Sie mir die wichtigsten Informationen schriftlich mitgeben? Mich interessiert besonders die Klassenfahrt im Juni. Vielleicht wäre auch ein kurzes Gespräch am Freitagmorgen möglich. Vielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\nAmina Haddad',
  fallen:[
    'Nur absagen und nichts vorschlagen — dann ist der vierte Leitpunkt nicht bearbeitet.',
    '„weil ich habe Spätschicht" — im Nebensatz steht das Verb am Ende.',
    '„Vielen Dank für Ihren Verständnis" — Verständnis ist neutral: „für Ihr Verständnis".'
  ]
},

{
  id:'mail-verein-abmelden-a2',
  lvl:'A2',
  art:'mail',
  pruef:'frei',
  t:'Vom Kurs abmelden',
  sit:'Du hast einen Yogakurs beim Sportverein gebucht. Der Kurs ist am Montagabend, aber du hast jetzt eine neue Arbeitszeit. Du meldest dich ab.',
  empf:'TSV Bergheim, Kursbüro',
  punkte:['welchen Kurs du besuchst','dass du aufhören musst','warum','ab wann'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[35,55],
  hilfe:[
    'ich besuche seit Januar den Yogakurs am Montag.',
    'Leider muss ich den Kurs beenden.',
    'Ich habe neue Arbeitszeiten und arbeite montags bis 20 Uhr.',
    'Ich möchte mich ab dem 1. Juni abmelden.',
    'Bitte bestätigen Sie mir die Abmeldung.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Das Datum, ab dem die Abmeldung gilt, ist der wichtigste.'},
    {k:'Register', w:'Verein, aber schriftlich formell: Sehr geehrte Damen und Herren.'},
    {k:'Kommunikative Gestaltung', w:'Um eine Bestätigung bitten. Ohne Bestätigung läuft der Beitrag weiter.'},
    {k:'Korrektheit', w:'„sich abmelden von" mit Dativ. „ab dem 1. Juni" mit Dativ.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich besuche seit Januar den Yogakurs am Montagabend. Leider muss ich den Kurs beenden. Ich habe neue Arbeitszeiten und arbeite montags bis 20 Uhr. Deshalb möchte ich mich ab dem 1. Juni abmelden. Bitte bestätigen Sie mir die Abmeldung schriftlich.\n\nMit freundlichen Grüßen\nYusuf Demir, Mitgliedsnummer 1187',
  fallen:[
    '„ab 1. Juni" ohne Artikel — richtig: „ab dem 1. Juni".',
    'Keine Bestätigung verlangen. Vereine buchen sonst weiter ab.',
    'Die Mitgliedsnummer weglassen, obwohl sie auf jeder Rechnung steht.'
  ]
},

{
  id:'nachricht-kollegin-schichttausch',
  lvl:'A2',
  art:'mitteilung',
  pruef:'Goethe A2',
  t:'Schicht tauschen',
  sit:'Am Samstag hast du Spätschicht. An diesem Tag wird dein Sohn eingeschult. Du fragst deine Kollegin Aylin, ob sie mit dir tauscht.',
  empf:'deine Kollegin Aylin',
  punkte:['worum du bittest','warum','was du anbietest'],
  anrede:'Hallo Aylin,',
  gruss:'Liebe Grüße',
  woerter:[25,40],
  hilfe:[
    'ich habe am Samstag Spätschicht.',
    'An diesem Tag wird mein Sohn eingeschult.',
    'Könntest du mit mir tauschen?',
    'Dafür übernehme ich deine Schicht am Sonntag.',
    'Sag mir bitte bis morgen Bescheid.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Drei Funktionen: bitten, begründen, etwas anbieten. Das Angebot fehlt am häufigsten.'},
    {k:'Register', w:'Kollegin, die man duzt: „du", kleine Anrede, lockerer Ton — aber trotzdem mit Anrede und Gruß.'},
    {k:'Textumfang', w:'20 bis 30 Wörter reichen. Wer deutlich darunter bleibt, riskiert die Bewertung E.'},
    {k:'Sprache', w:'Höfliche Bitte im Konjunktiv II: „Könntest du …?" Angebot mit „dafür" oder „im Gegenzug".'}
  ],
  muster:'Hallo Aylin,\n\nich habe am Samstag Spätschicht, aber an diesem Tag wird mein Sohn eingeschult. Könntest du mit mir tauschen? Dafür übernehme ich gern deine Schicht am Sonntag. Sag mir bitte bis morgen Bescheid.\n\nLiebe Grüße\nAmina',
  fallen:[
    'Nichts anbieten. Ein Tausch ohne Gegenleistung ist keine Bitte, sondern ein Wunsch — und ein Leitpunkt fehlt.',
    '„Kannst du tauschen mit mir?" — richtig: „Könntest du mit mir tauschen?"',
    'Vergessen, bis wann man eine Antwort braucht. Bei Schichtplänen ist genau das die wichtige Information.'
  ]
},

/* ==================== B1 — 20 Aufgaben ====================
   Das DTZ-Herzstück: halbformelle Mitteilung mit vier
   Leitpunkten, Anrede und Gruß Pflicht, keine Mindest-
   wortzahl — aber unter etwa 40 Wörtern ist B1 nicht
   erreichbar. Betreff, Datum und Adresse sind nicht nötig.
   ========================================================== */

{
  id:'widerspruch-jobcenter',
  lvl:'B1',
  art:'widerspruch',
  pruef:'DTZ',
  t:'Widerspruch gegen einen Bescheid',
  sit:'Das Jobcenter hat deine Leistungen gekürzt, weil angeblich Unterlagen fehlen. Du hast die Unterlagen aber am 3. April abgegeben und hast eine Kopie mit Eingangsstempel. Du legst Widerspruch ein.',
  empf:'Jobcenter Dortmund, Team 402',
  punkte:['gegen welchen Bescheid du Widerspruch einlegst','warum die Entscheidung falsch ist','welchen Beweis du hast','was du jetzt erwartest'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[80,110],
  hilfe:[
    'gegen Ihren Bescheid vom … lege ich Widerspruch ein.',
    'Sie schreiben, dass Unterlagen fehlen. Das ist aber nicht richtig.',
    'Ich habe die Unterlagen am 3. April persönlich abgegeben.',
    'Als Nachweis lege ich eine Kopie mit Eingangsstempel bei.',
    'Ich bitte Sie, den Bescheid aufzuheben und die Leistung nachzuzahlen.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Alle vier. Ohne den Satz „ich lege Widerspruch ein" ist es kein Widerspruch, sondern nur eine Beschwerde.'},
    {k:'Kommunikative Gestaltung', w:'Datum und Aktenzeichen des Bescheids nennen. Sachlicher Ton, keine Vorwürfe.'},
    {k:'Korrektheit', w:'Nebensätze mit „weil" und „dass" richtig bauen, Verb am Ende. Perfekt für das, was du getan hast.'},
    {k:'Wortschatz', w:'Behördenwörter benutzen: Bescheid, Widerspruch, Nachweis, Aktenzeichen, aufheben.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\ngegen Ihren Bescheid vom 18. April, Aktenzeichen 402/HD/2231, lege ich Widerspruch ein. Sie haben meine Leistung gekürzt, weil angeblich Unterlagen fehlen. Das ist nicht richtig. Ich habe die Gehaltsabrechnungen und den Mietvertrag am 3. April persönlich im Servicecenter abgegeben. Als Nachweis lege ich eine Kopie mit Ihrem Eingangsstempel bei. Deshalb bitte ich Sie, den Bescheid aufzuheben und den gekürzten Betrag nachzuzahlen. Falls noch etwas fehlt, rufen Sie mich bitte an.\n\nMit freundlichen Grüßen\nAmina Haddad',
  fallen:[
    'Das Wort „Widerspruch" kommt nicht vor. Ein Brief, in dem nur steht, dass etwas falsch ist, wird nicht als Widerspruch bearbeitet.',
    'Aktenzeichen und Datum des Bescheids fehlen — der Brief landet dann im falschen Stapel.',
    'Emotional werden: „Sie haben einen Fehler gemacht, das ist unfair." Sachlich schreiben, was passiert ist und welchen Beweis man hat.',
    '„Ich bitte Sie, den Bescheid aufheben" — nach „bitten, etwas zu tun" steht „zu": „aufzuheben".'
  ]
},

{
  id:'reklamation-online-shop',
  lvl:'B1',
  art:'beschwerde',
  pruef:'DTZ',
  t:'Ware nicht geliefert, Geld abgebucht',
  sit:'Du hast am 2. Mai einen Drucker bestellt und bezahlt. Der Drucker ist nie angekommen, das Geld ist aber schon vom Konto weg. Der Shop antwortet nicht auf E-Mails.',
  empf:'Kundenservice Technikwelt24',
  punkte:['was du bestellt hast','was das Problem ist','was du bereits versucht hast','welche Frist du setzt'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[80,110],
  hilfe:[
    'am 2. Mai habe ich bei Ihnen einen Drucker bestellt, Bestellnummer …',
    'Der Betrag von 149 Euro wurde am 3. Mai von meinem Konto abgebucht.',
    'Die Ware habe ich bis heute nicht erhalten.',
    'Ich habe Ihnen bereits zweimal geschrieben, aber keine Antwort bekommen.',
    'Ich bitte Sie, bis zum … zu liefern oder das Geld zurückzuzahlen.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Die Frist ist der entscheidende vierte — ohne Frist bleibt die Beschwerde folgenlos.'},
    {k:'Kommunikative Gestaltung', w:'Chronologisch erzählen: Bestellung, Zahlung, Ausbleiben, eigene Versuche, Forderung.'},
    {k:'Korrektheit', w:'Passiv im Perfekt: „Der Betrag wurde abgebucht." Datumsangaben mit „am".'},
    {k:'Wortschatz', w:'Bestellnummer, Rechnungsbetrag, abbuchen, liefern, Frist setzen, erstatten.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nam 2. Mai habe ich bei Ihnen einen Drucker bestellt, Bestellnummer 88-2214. Der Betrag von 149 Euro wurde am 3. Mai von meinem Konto abgebucht. Die Ware habe ich bis heute nicht erhalten, obwohl Sie eine Lieferzeit von drei Tagen angegeben haben. Ich habe Ihnen am 10. und am 17. Mai geschrieben, aber keine Antwort erhalten. Deshalb setze ich Ihnen eine Frist bis zum 5. Juni. Bis dahin liefern Sie bitte den Drucker oder erstatten Sie mir den Betrag.\n\nMit freundlichen Grüßen\nYusuf Demir',
  fallen:[
    'Keine Frist nennen. Ein Shop reagiert erst, wenn ein konkretes Datum im Brief steht.',
    'Die Bestellnummer vergessen — der Kundenservice findet den Fall dann nicht.',
    '„Ich habe nicht bekommen die Ware." Im Perfekt steht das Partizip am Ende: „Ich habe die Ware nicht bekommen."',
    '„Ich will mein Geld sofort!" wirkt unseriös. „Ich bitte Sie, mir den Betrag zu erstatten" ist stärker.'
  ]
},

{
  id:'krankenkasse-zuschuss',
  lvl:'B1',
  art:'brief',
  pruef:'DTZ',
  t:'Antrag auf Zuschuss bei der Krankenkasse',
  sit:'Deine Ärztin hat dir eine Physiotherapie verordnet. Du möchtest wissen, ob die AOK die Kosten übernimmt, und einen Antrag stellen.',
  empf:'AOK Nordwest, Kundencenter',
  punkte:['worum es geht','was die Ärztin verordnet hat','welche Unterlagen du beilegst','was du von der Kasse wissen möchtest'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[75,105],
  hilfe:[
    'ich bin bei Ihnen versichert, meine Versichertennummer lautet …',
    'Meine Ärztin hat mir zwölf Einheiten Physiotherapie verordnet.',
    'Ich habe seit einem Unfall Schmerzen im Rücken.',
    'Die Verordnung und den Befund lege ich bei.',
    'Bitte teilen Sie mir mit, ob Sie die Kosten übernehmen und wie hoch mein Eigenanteil ist.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Zwei Fragen (Übernahme und Eigenanteil) gehören zum vierten Punkt.'},
    {k:'Kommunikative Gestaltung', w:'Versichertennummer nach oben. Die Kasse arbeitet nur mit dieser Nummer.'},
    {k:'Korrektheit', w:'Indirekte Frage mit „ob": „ob Sie die Kosten übernehmen". Verb am Ende.'},
    {k:'Wortschatz', w:'versichert sein, Verordnung, Kostenübernahme, Eigenanteil, Befund, beiliegen.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich bin bei Ihnen versichert, meine Versichertennummer lautet A123456789. Nach einem Sturz im März habe ich starke Schmerzen im Rücken. Deshalb hat meine Ärztin mir zwölf Einheiten Physiotherapie verordnet. Die Verordnung und den Befund der Praxis lege ich diesem Brief bei. Bitte teilen Sie mir mit, ob Sie die Kosten übernehmen und wie hoch mein Eigenanteil pro Termin ist. Da die Verordnung nur 28 Tage gültig ist, bitte ich um eine schnelle Antwort.\n\nMit freundlichen Grüßen\nOlena Kovalenko',
  fallen:[
    'Die Versichertennummer fehlt. Ohne sie kann die Kasse den Antrag nicht zuordnen.',
    '„Bitte sagen Sie mir, ob übernehmen Sie die Kosten." Nach „ob" steht das Verb am Ende.',
    'Nur fragen, ohne die Unterlagen zu erwähnen — dann kommt ein Brief zurück, der genau diese Unterlagen anfordert.',
    '„Ich bin versichert bei Ihnen seit 2 Jahre" — richtig: „seit zwei Jahren", Dativ Plural mit n.'
  ]
},

{
  id:'vermieter-schimmel',
  lvl:'B1',
  art:'beschwerde',
  pruef:'DTZ',
  t:'Schimmel im Badezimmer',
  sit:'In deinem Badezimmer wächst seit vier Wochen Schimmel an der Wand. Du lüftest täglich. Du hast schon zweimal angerufen, aber nichts ist passiert.',
  empf:'Hausverwaltung Krämer',
  punkte:['welches Problem es gibt','seit wann und wie du reagiert hast','welche Folgen es hat','was du forderst'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[80,110],
  hilfe:[
    'in meinem Badezimmer bildet sich seit vier Wochen Schimmel.',
    'Ich lüfte jeden Tag zweimal und heize normal.',
    'Am 3. und am 12. Mai habe ich bei Ihnen angerufen, aber es ist nichts passiert.',
    'Meine Tochter hat Asthma, deshalb ist die Situation gefährlich.',
    'Ich bitte Sie, bis zum … einen Handwerker zu schicken.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Wichtig ist der Punkt „wie du reagiert hast" — er zeigt, dass du das Problem nicht verursacht hast.'},
    {k:'Kommunikative Gestaltung', w:'Sachlich bleiben und Daten nennen. Der Brief kann später als Nachweis dienen.'},
    {k:'Korrektheit', w:'Perfekt für vergangene Anrufe, Präsens für den Zustand. „bitten, etwas zu tun" mit zu-Infinitiv.'},
    {k:'Wortschatz', w:'Schimmel, sich bilden, lüften, Feuchtigkeit, Mangel, Frist, Handwerker.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nin meinem Badezimmer in der Lindenstraße 12, Wohnung 4b, bildet sich seit vier Wochen Schimmel an der Wand hinter der Dusche. Ich lüfte jeden Tag zweimal und heize normal, trotzdem wird der Fleck größer. Am 3. und am 12. Mai habe ich bei Ihnen angerufen, aber bisher ist nichts passiert. Meine Tochter hat Asthma, deshalb ist die Situation für sie gefährlich. Ich bitte Sie, bis zum 30. Mai einen Handwerker zu schicken und die Ursache zu prüfen. Sie erreichen mich unter 0151 2345678.\n\nMit freundlichen Grüßen\nAmina Haddad',
  fallen:[
    'Nicht schreiben, dass man richtig lüftet. Vermieter behaupten fast immer, der Mieter sei schuld — dieser Satz nimmt das Argument vorweg.',
    'Keine Frist setzen. Ohne Datum passiert bei Mängeln erfahrungsgemäß nichts.',
    '„Ich habe angerufen Sie zweimal." Reihenfolge: „Ich habe Sie zweimal angerufen."',
    '„es ist nichts gepassiert" — richtig ist „passiert", ohne ge-.'
  ]
},

{
  id:'arbeitgeber-urlaub-beantragen',
  lvl:'B1',
  art:'mail',
  pruef:'DTZ',
  t:'Urlaub beantragen',
  sit:'Deine Mutter im Ausland wird 70 und du willst zur Feier fahren. Du brauchst zwei Wochen Urlaub im August, obwohl im August viel zu tun ist.',
  empf:'Herr Özdemir, Abteilungsleiter',
  punkte:['welchen Urlaub du beantragst','warum dir der Termin wichtig ist','wie deine Arbeit weiterläuft','worum du bittest'],
  anrede:'Sehr geehrter Herr Özdemir,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[75,105],
  hilfe:[
    'ich möchte vom 10. bis 24. August Urlaub nehmen.',
    'Meine Mutter feiert ihren 70. Geburtstag.',
    'Ich habe in diesem Jahr noch 18 Urlaubstage.',
    'Frau Klein hat zugesagt, meine Aufgaben zu übernehmen.',
    'Ich bitte Sie, den Antrag zu genehmigen.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Der dritte — wer die Arbeit übernimmt — entscheidet in der Praxis über das Ja.'},
    {k:'Kommunikative Gestaltung', w:'Erst der Zeitraum, dann der Grund, dann die Lösung. Nicht umgekehrt.'},
    {k:'Korrektheit', w:'Zeitraum mit „vom … bis …". Konjunktiv II für die höfliche Bitte: „Ich würde mich freuen, wenn …".'},
    {k:'Wortschatz', w:'Urlaubsantrag, Resturlaub, genehmigen, Vertretung, Übergabe.'}
  ],
  muster:'Sehr geehrter Herr Özdemir,\n\nich möchte vom 10. bis 24. August Urlaub nehmen. Meine Mutter feiert in dieser Woche ihren 70. Geburtstag, und die ganze Familie kommt zusammen. Da der Flug weit ist, brauche ich zwei Wochen. In diesem Jahr habe ich noch 18 Urlaubstage. Frau Klein hat mir schon zugesagt, dass sie meine Aufgaben übernimmt, und ich mache vorher eine schriftliche Übergabe. Ich würde mich freuen, wenn Sie den Antrag genehmigen könnten.\n\nMit freundlichen Grüßen\nYusuf Demir',
  fallen:[
    'Nur „Ich brauche Urlaub im August" schreiben. Ohne Vertretungslösung ist der dritte Leitpunkt offen.',
    '„vom 10. bis zum 24. August" ist korrekt, „von 10. bis 24. August" nicht — der Artikel muss mit.',
    'Der Chef wird geduzt, weil man sich im Betrieb duzt, aber der Brief soll halbformell sein. In der Prüfung immer die Sie-Form nehmen, wenn nichts anderes dasteht.',
    '„Ich hoffe, Sie sagen ja" ist zu umgangssprachlich für einen Antrag.'
  ]
},

{
  id:'schule-befreiung-unterricht',
  lvl:'B1',
  art:'mail',
  pruef:'DTZ',
  t:'Befreiung vom Unterricht',
  sit:'Du willst mit deiner Familie zur Hochzeit deines Bruders ins Ausland fahren. Die Hochzeit ist am Donnerstag vor den Ferien, dein Sohn müsste zwei Tage fehlen.',
  empf:'Frau Berger, Klassenlehrerin 3b',
  punkte:['worum du bittest','warum der Termin nicht anders geht','wie dein Sohn den Stoff nachholt','wann du eine Antwort brauchst'],
  anrede:'Sehr geehrte Frau Berger,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[75,105],
  hilfe:[
    'ich bitte Sie, meinen Sohn Amir am 4. und 5. Juli vom Unterricht zu befreien.',
    'Mein Bruder heiratet an diesem Tag in Tunesien.',
    'Der Termin steht seit einem Jahr fest und lässt sich nicht verschieben.',
    'Amir holt die Aufgaben in den Ferien nach.',
    'Da wir die Flüge bald buchen müssen, brauche ich bis Freitag eine Antwort.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Der Nachholplan ist bei Schulen der wichtigste — er zeigt Verantwortung.'},
    {k:'Kommunikative Gestaltung', w:'Höflich formulieren, aber klar sagen, was man will. Antrag, nicht Ankündigung.'},
    {k:'Korrektheit', w:'„jemanden von etwas befreien" mit Dativ nach „von". Nebensatz mit „weil" und „da".'},
    {k:'Wortschatz', w:'Befreiung, Antrag, Schulpflicht, versäumter Stoff, nachholen.'}
  ],
  muster:'Sehr geehrte Frau Berger,\n\nich möchte Sie bitten, meinen Sohn Amir aus der Klasse 3b am 4. und 5. Juli vom Unterricht zu befreien. Mein Bruder heiratet an diesem Wochenende in Tunis, und die Familie reist gemeinsam. Der Termin steht seit einem Jahr fest, deshalb können wir ihn nicht verschieben. Amir holt den Stoff in der ersten Ferienwoche nach; ich habe mit seiner Sitznachbarin schon gesprochen, damit sie ihm die Hefte kopiert. Da wir die Flüge bald buchen müssen, wäre ich für eine Antwort bis Freitag dankbar.\n\nMit freundlichen Grüßen\nAmina Haddad',
  fallen:[
    'Wie eine Mitteilung formulieren: „Amir kommt am 4. Juli nicht." Eine Befreiung muss beantragt werden, sonst gilt es als unentschuldigtes Fehlen.',
    'Vor den Ferien ist eine Befreiung besonders schwer zu bekommen. Wer nicht begründet, warum der Termin unverschiebbar ist, bekommt eine Ablehnung.',
    '„befreien von dem Unterricht" wird oft zu „von der Unterricht" — der Unterricht ist maskulin: vom Unterricht.',
    'Keine Antwortfrist nennen, obwohl man Flüge buchen muss.'
  ]
},

{
  id:'verein-mitgliedschaft-kuendigen',
  lvl:'B1',
  art:'brief',
  pruef:'DTZ',
  t:'Mitgliedschaft im Sportverein kündigen',
  sit:'Du bist seit drei Jahren im TSV Bergheim. Du ziehst in eine andere Stadt und willst zum Jahresende kündigen. Die Kündigungsfrist beträgt drei Monate.',
  empf:'TSV Bergheim 1912, Geschäftsstelle',
  punkte:['dass du kündigst und ab wann','warum','was mit dem Beitrag passiert','worum du bittest'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[70,100],
  hilfe:[
    'hiermit kündige ich meine Mitgliedschaft zum 31. Dezember 2026.',
    'Ich ziehe aus beruflichen Gründen nach Hamburg.',
    'Meine Mitgliedsnummer lautet …',
    'Bitte buchen Sie den Beitrag ab Januar nicht mehr ab.',
    'Bitte bestätigen Sie mir die Kündigung schriftlich.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Ohne Datum („zum 31. Dezember") ist die Kündigung unwirksam.'},
    {k:'Kommunikative Gestaltung', w:'Kurz und eindeutig. Eine Kündigung ist kein Erklärungsbrief, aber ein freundlicher Schlusssatz gehört dazu.'},
    {k:'Korrektheit', w:'„hiermit kündige ich" — Verb an zweiter Stelle. „zum" plus Datum für den Kündigungstermin.'},
    {k:'Wortschatz', w:'kündigen, Kündigungsfrist, Mitgliedsnummer, Beitrag, abbuchen, bestätigen.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nhiermit kündige ich meine Mitgliedschaft im TSV Bergheim zum 31. Dezember 2026. Meine Mitgliedsnummer lautet 1187. Ich kündige, weil ich aus beruflichen Gründen nach Hamburg ziehe und den Verein deshalb nicht mehr besuchen kann. Bitte buchen Sie den Beitrag ab Januar nicht mehr von meinem Konto ab. Außerdem bitte ich Sie, mir die Kündigung schriftlich zu bestätigen. Für die schönen drei Jahre bedanke ich mich.\n\nMit freundlichen Grüßen\nOlena Kovalenko',
  fallen:[
    'Ohne Datum kündigen: „Ich möchte kündigen." Der Verein kündigt dann zum nächstmöglichen Termin, oft ein Jahr später.',
    'Die Kündigungsfrist nicht prüfen. Wer im November zum 31. Dezember kündigt, verlängert bei drei Monaten Frist um ein ganzes Jahr.',
    '„Hiermit ich kündige" — nach „hiermit" steht das Verb sofort.',
    'Keine schriftliche Bestätigung anfordern. Später fehlt der Nachweis.'
  ]
},

{
  id:'werkstatt-reklamation',
  lvl:'B1',
  art:'beschwerde',
  pruef:'DTZ',
  t:'Reklamation in der Autowerkstatt',
  sit:'Deine Werkstatt hat die Bremsen repariert und 480 Euro berechnet. Nach zwei Tagen quietschen die Bremsen wieder. Auf der Rechnung stehen außerdem Arbeiten, die du nicht beauftragt hast.',
  empf:'Autohaus Wieland, Serviceleitung',
  punkte:['welche Reparatur du meinst','welches Problem geblieben ist','was auf der Rechnung nicht stimmt','was du erwartest'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[80,110],
  hilfe:[
    'am 14. Mai haben Sie an meinem Wagen die Bremsen repariert, Rechnungsnummer …',
    'Nach zwei Tagen quietschen die Bremsen wieder.',
    'Auf der Rechnung steht außerdem ein Ölwechsel, den ich nicht beauftragt habe.',
    'Ich bitte Sie, die Bremsen kostenlos nachzuprüfen.',
    'Den Betrag für den Ölwechsel bitte ich zu erstatten.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte, zwei verschiedene Beschwerden. Beide müssen klar getrennt stehen.'},
    {k:'Kommunikative Gestaltung', w:'Für jede Beschwerde eine eigene Forderung. Sonst wird nur die Hälfte bearbeitet.'},
    {k:'Korrektheit', w:'Relativsatz: „ein Ölwechsel, den ich nicht beauftragt habe". Akkusativ, weil „beauftragen" ein Objekt braucht.'},
    {k:'Wortschatz', w:'Reklamation, Nachbesserung, Rechnungsposten, beauftragen, Gewährleistung, erstatten.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nam 14. Mai haben Sie an meinem Golf die Bremsen repariert, Rechnungsnummer 2026-4471. Leider quietschen die Bremsen seit zwei Tagen wieder genauso wie vorher. Außerdem steht auf der Rechnung ein Ölwechsel für 89 Euro, den ich nicht beauftragt habe. Ich bitte Sie deshalb um zwei Dinge: Prüfen Sie die Bremsen im Rahmen der Gewährleistung kostenlos nach, und erstatten Sie mir die 89 Euro für den Ölwechsel. Für die Nachprüfung könnte ich am Donnerstag vorbeikommen. Ich bitte um Antwort bis zum 5. Juni.\n\nMit freundlichen Grüßen\nYusuf Demir',
  fallen:[
    'Beide Beschwerden vermischen, sodass die Werkstatt nur die Bremsen prüft und das Geld behält.',
    'Das Wort „Gewährleistung" nicht benutzen. Es ist der Grund, warum die Nachbesserung nichts kosten darf.',
    '„Die Bremsen machen wieder Geräusch." Besser konkret: „quietschen", „schleifen".',
    'Die Rechnungsnummer fehlt. Eine Werkstatt hat täglich zwanzig Aufträge.'
  ]
},

{
  id:'kita-betreuungszeiten',
  lvl:'B1',
  art:'mail',
  pruef:'DTZ',
  t:'Betreuungszeiten in der Kita ändern',
  sit:'Du beginnst im September eine neue Stelle mit früherem Arbeitsbeginn. Deine Tochter braucht ab dann Betreuung ab 7 Uhr statt ab 8 Uhr.',
  empf:'Frau Berger, Leitung Kita Sonnenschein',
  punkte:['welche Änderung du brauchst','ab wann','warum','was du anbieten oder klären möchtest'],
  anrede:'Sehr geehrte Frau Berger,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[70,100],
  hilfe:[
    'ich möchte die Betreuungszeit meiner Tochter Lina ändern.',
    'Ab dem 1. September brauchen wir eine Betreuung ab 7 Uhr.',
    'Ich beginne meine neue Stelle im Krankenhaus um 7.30 Uhr.',
    'Ist im Frühdienst noch ein Platz frei?',
    'Falls die Kosten steigen, teilen Sie mir bitte den neuen Beitrag mit.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Der vierte ist hier eine Frage — auch Fragen zählen als Leitpunkt.'},
    {k:'Kommunikative Gestaltung', w:'Der Grund macht die Bitte nachvollziehbar. Ein Angebot zur Flexibilität hilft.'},
    {k:'Korrektheit', w:'„ab dem 1. September" mit Dativ. Indirekte Frage mit „ob".'},
    {k:'Wortschatz', w:'Betreuungszeit, Frühdienst, Betreuungsvertrag, Beitrag, Platz, ändern.'}
  ],
  muster:'Sehr geehrte Frau Berger,\n\nich möchte die Betreuungszeit meiner Tochter Lina ändern. Ab dem 1. September brauchen wir die Betreuung schon ab 7 Uhr, weil ich eine neue Stelle im Krankenhaus beginne und dort um 7.30 Uhr anfangen muss. Bisher bringen wir Lina um 8 Uhr. Können Sie mir sagen, ob im Frühdienst noch ein Platz frei ist? Falls der Beitrag dadurch steigt, teilen Sie mir bitte mit, wie hoch er wäre. Wenn Sie einen neuen Vertrag brauchen, komme ich gern vorbei.\n\nMit freundlichen Grüßen\nOlena Kovalenko',
  fallen:[
    'Nach der Änderung fragen, ohne das Startdatum zu nennen. Kitas planen den Frühdienst Monate vorher.',
    '„ab 1. September" statt „ab dem 1. September".',
    'Die Kostenfrage weglassen und sich später über die höhere Rechnung wundern.',
    '„Können Sie mir sagen, ob ist ein Platz frei." Nach „ob" gehört das Verb ans Ende.'
  ]
},

{
  id:'nachbarschaft-laerm',
  lvl:'B1',
  art:'brief',
  pruef:'DTZ',
  t:'Brief an die Nachbarn wegen Lärm',
  sit:'Über dir wohnt Familie Schneider. Seit vier Wochen läuft dort fast jede Nacht bis 2 Uhr Musik. Du arbeitest Frühdienst und musst um 5 Uhr aufstehen. Du willst freundlich bleiben.',
  empf:'Familie Schneider, 3. Stock',
  punkte:['worum es geht','wie es dich betrifft','was du vorschlägst','was du hoffst'],
  anrede:'Liebe Familie Schneider,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[75,105],
  hilfe:[
    'ich wohne unter Ihnen in der Wohnung 4b.',
    'Seit etwa vier Wochen höre ich nachts bis 2 Uhr Musik.',
    'Ich arbeite im Frühdienst und stehe um 5 Uhr auf.',
    'Könnten wir eine Lösung finden, zum Beispiel …',
    'Ich möchte das gern in Ruhe klären, ohne die Hausverwaltung einzuschalten.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Der Vorschlag ist entscheidend — ein Brief, der nur klagt, verschlechtert das Verhältnis.'},
    {k:'Kommunikative Gestaltung', w:'Halbformell und freundlich, aber deutlich. Kein Vorwurf, sondern eine Ich-Perspektive.'},
    {k:'Korrektheit', w:'Konjunktiv II für den Vorschlag: „Könnten wir …", „Es wäre schön, wenn …".'},
    {k:'Wortschatz', w:'Ruhezeiten, Lärm, Rücksicht, Lösung, sich einigen, Hausordnung.'}
  ],
  muster:'Liebe Familie Schneider,\n\nich wohne unter Ihnen in der Wohnung 4b und möchte Sie auf etwas ansprechen. Seit etwa vier Wochen höre ich nachts oft bis 2 Uhr Musik aus Ihrer Wohnung. Da ich im Frühdienst arbeite und um 5 Uhr aufstehe, schlafe ich in diesen Nächten kaum. Ich möchte niemandem den Spaß nehmen, deshalb mein Vorschlag: Könnten Sie die Musik nach 22 Uhr leiser stellen oder Kopfhörer benutzen? Ich würde das gern direkt mit Ihnen klären, ohne die Hausverwaltung einzuschalten. Sprechen Sie mich jederzeit an.\n\nMit freundlichen Grüßen\nAmina Haddad',
  fallen:[
    'Mit der Hausordnung drohen, statt einen Vorschlag zu machen. Der vierte Leitpunkt („was du hoffst") verlangt genau den versöhnlichen Schluss.',
    '„Sie machen immer Lärm" — Verallgemeinerungen wie „immer" und „nie" führen zum Streit. Konkret werden: seit vier Wochen, bis 2 Uhr.',
    '„Könnten Sie die Musik leiser machen?" ist gut, „Machen Sie die Musik leiser!" nicht.',
    'Die eigene Wohnungsnummer weglassen, sodass die Nachbarn nicht wissen, wer geschrieben hat.'
  ]
},

{
  id:'stadtwerke-abrechnung',
  lvl:'B1',
  art:'beschwerde',
  pruef:'DTZ',
  t:'Stromabrechnung zu hoch',
  sit:'Deine Jahresabrechnung der Stadtwerke fordert 780 Euro nach. Du wohnst allein und warst drei Monate im Ausland. Du glaubst, der Zählerstand ist falsch geschätzt.',
  empf:'Stadtwerke Bochum, Kundenservice',
  punkte:['um welche Abrechnung es geht','warum du sie für falsch hältst','welchen Zählerstand du gemessen hast','was du verlangst'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[80,110],
  hilfe:[
    'ich habe Ihre Jahresabrechnung vom … erhalten, Kundennummer …',
    'Sie fordern eine Nachzahlung von 780 Euro.',
    'Der Verbrauch kann nicht stimmen, denn ich wohne allein.',
    'Von Januar bis März war ich im Ausland, die Wohnung stand leer.',
    'Heute habe ich den Zähler selbst abgelesen: … kWh.',
    'Bitte prüfen Sie die Abrechnung und stellen Sie die Nachzahlung bis dahin zurück.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Der eigene Zählerstand ist der stärkste — er macht aus einem Gefühl ein Argument.'},
    {k:'Kommunikative Gestaltung', w:'Zahlen nennen: Kundennummer, Zählernummer, Betrag, Zählerstand, Datum des Ablesens.'},
    {k:'Korrektheit', w:'Begründung mit „denn" im Hauptsatz oder „weil" im Nebensatz — nicht mischen.'},
    {k:'Wortschatz', w:'Jahresabrechnung, Nachzahlung, Verbrauch, Zählerstand, ablesen, schätzen, aussetzen.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich habe Ihre Jahresabrechnung vom 12. Februar erhalten, Kundennummer 55-903214. Sie fordern eine Nachzahlung von 780 Euro. Dieser Betrag kann nicht stimmen, denn ich wohne allein in einer Ein-Zimmer-Wohnung und habe keine elektrische Heizung. Außerdem war ich von Januar bis März im Ausland; in dieser Zeit stand die Wohnung leer. Offenbar haben Sie den Verbrauch nur geschätzt. Heute habe ich den Zähler selbst abgelesen: 14 208 kWh, Zählernummer 8812. Bitte prüfen Sie die Abrechnung und setzen Sie die Nachzahlung bis zur Klärung aus.\n\nMit freundlichen Grüßen\nYusuf Demir',
  fallen:[
    'Nur schreiben, dass der Betrag zu hoch ist. Ohne eigenen Zählerstand hat man kein Argument.',
    'Nicht verlangen, dass die Zahlung ausgesetzt wird. Sonst bucht der Versorger die 780 Euro ab, während man noch schreibt.',
    '„weil ich wohne allein" — im weil-Satz steht das Verb am Ende. Alternative: „denn ich wohne allein."',
    'Kundennummer und Zählernummer verwechseln oder ganz weglassen.'
  ]
},

{
  id:'internet-stoerung',
  lvl:'B1',
  art:'beschwerde',
  pruef:'DTZ',
  t:'Internet funktioniert seit zwei Wochen nicht',
  sit:'Dein Internetanschluss fällt seit zwei Wochen täglich stundenlang aus. Du arbeitest im Homeoffice. Die Hotline hat dreimal einen Techniker versprochen, es kam niemand.',
  empf:'Telekom Kundenservice',
  punkte:['welches Problem du hast','was du bisher unternommen hast','welche Folgen das für dich hat','was du jetzt verlangst'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[80,110],
  hilfe:[
    'seit dem 5. Juni fällt mein Internetanschluss täglich mehrere Stunden aus.',
    'Ich habe dreimal bei Ihrer Hotline angerufen, Störungsnummer …',
    'Man hat mir jedes Mal einen Techniker zugesagt, aber es kam niemand.',
    'Da ich im Homeoffice arbeite, kann ich meine Arbeit nicht erledigen.',
    'Ich bitte Sie, die Störung bis zum … zu beheben, und fordere eine Minderung des Beitrags.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. „Was du bisher unternommen hast" macht deutlich, dass der Kunde nicht das Problem ist.'},
    {k:'Kommunikative Gestaltung', w:'Zwei Forderungen klar trennen: Reparatur und Minderung.'},
    {k:'Korrektheit', w:'Passiv und unpersönliches „man": „Man hat mir zugesagt." Perfekt für alle Anrufe.'},
    {k:'Wortschatz', w:'Störung, beheben, Anschluss, ausfallen, Minderung, Kündigungsrecht, Vertragsnummer.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nseit dem 5. Juni fällt mein Internetanschluss täglich mehrere Stunden aus, Vertragsnummer 7712-44. Ich habe dreimal bei Ihrer Hotline angerufen, die Störungsnummer lautet S-2288. Man hat mir jedes Mal einen Techniker zugesagt, aber bisher ist niemand gekommen. Da ich im Homeoffice arbeite, kann ich an diesen Tagen kaum arbeiten und habe schon zwei Termine verloren. Ich bitte Sie, die Störung bis zum 30. Juni zu beheben. Außerdem fordere ich für die betroffenen Wochen eine Minderung des Monatsbeitrags. Falls die Störung bleibt, behalte ich mir eine Kündigung vor.\n\nMit freundlichen Grüßen\nAmina Haddad',
  fallen:[
    'Die Störungsnummer nicht nennen. Der Kundenservice sieht dann nicht, dass schon dreimal angerufen wurde.',
    'Keine Minderung fordern. Für Ausfalltage muss man nicht den vollen Preis zahlen, aber niemand rechnet das freiwillig ab.',
    '„Ich habe angerufen dreimal die Hotline." Reihenfolge: „Ich habe dreimal bei der Hotline angerufen."',
    'Sofort mit Anwalt drohen. Ein Satz wie „behalte ich mir eine Kündigung vor" wirkt sachlicher und ist stärker.'
  ]
},

{
  id:'bahn-fahrgastrechte',
  lvl:'B1',
  art:'brief',
  pruef:'DTZ',
  t:'Entschädigung nach Zugverspätung',
  sit:'Dein ICE von Köln nach Berlin hatte 95 Minuten Verspätung. Du hast deinen Anschluss verpasst und musstest ein Taxi für 42 Euro nehmen. Du willst dein Geld.',
  empf:'Deutsche Bahn, Servicecenter Fahrgastrechte',
  punkte:['welche Fahrt du meinst','was passiert ist','welche Kosten entstanden sind','was du beantragst'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[75,105],
  hilfe:[
    'am 18. April bin ich mit dem ICE 845 von Köln nach Berlin gefahren.',
    'Der Zug hatte 95 Minuten Verspätung.',
    'Deshalb habe ich meinen Anschluss verpasst.',
    'Für das Taxi habe ich 42 Euro bezahlt, den Beleg lege ich bei.',
    'Ich beantrage die Entschädigung von 50 Prozent des Fahrpreises und die Erstattung der Taxikosten.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Zugnummer und Datum gehören zwingend zum ersten.'},
    {k:'Kommunikative Gestaltung', w:'Sachlich und knapp. Belege erwähnen, nicht beschreiben.'},
    {k:'Korrektheit', w:'Ursache und Folge mit „deshalb" und „da": „Da der Zug Verspätung hatte, habe ich …".'},
    {k:'Wortschatz', w:'Verspätung, Anschluss, Fahrgastrechte, Entschädigung, Erstattung, Beleg, beantragen.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nam 18. April bin ich mit dem ICE 845 von Köln nach Berlin gefahren, Buchungsnummer XY7742. Der Zug ist mit 95 Minuten Verspätung angekommen. Deshalb habe ich in Berlin meinen Anschlusszug nach Potsdam verpasst, und weil um diese Zeit keine Bahn mehr fuhr, musste ich ein Taxi nehmen. Die Fahrt hat 42 Euro gekostet; die Quittung und meine Fahrkarte lege ich in Kopie bei. Ich beantrage die Entschädigung von 50 Prozent des Fahrpreises sowie die Erstattung der Taxikosten. Bitte überweisen Sie den Betrag auf mein Konto.\n\nMit freundlichen Grüßen\nOlena Kovalenko',
  fallen:[
    'Die Zugnummer vergessen. Ohne ICE-Nummer und Datum kann die Bahn die Verspätung nicht nachweisen.',
    'Die Fahrkarte nicht beilegen. Ohne Fahrkarte gibt es grundsätzlich keine Entschädigung.',
    '„Der Zug hatte 95 Minuten Verspätung, deshalb ich habe den Anschluss verpasst." Nach „deshalb" steht das Verb: „deshalb habe ich".',
    'Um Kulanz bitten statt die Entschädigung zu beantragen. Bei mehr als 60 Minuten besteht ein Anspruch, man muss nicht darum bitten.'
  ]
},

{
  id:'familienkasse-kindergeld',
  lvl:'B1',
  art:'brief',
  pruef:'DTZ',
  t:'Unterlagen für das Kindergeld nachreichen',
  sit:'Die Familienkasse hat dich aufgefordert, eine Schulbescheinigung für deinen Sohn nachzureichen, sonst wird das Kindergeld eingestellt. Du schickst sie und erklärst die Verzögerung.',
  empf:'Familienkasse Nordrhein-Westfalen West',
  punkte:['auf welches Schreiben du reagierst','welche Unterlagen du schickst','warum es länger gedauert hat','worum du bittest'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[70,100],
  hilfe:[
    'ich beziehe mich auf Ihr Schreiben vom …, Kindergeldnummer …',
    'Anbei erhalten Sie die Schulbescheinigung meines Sohnes Amir.',
    'Die Schule hat die Bescheinigung erst am … ausgestellt.',
    'Deshalb konnte ich die Frist nicht einhalten.',
    'Ich bitte Sie, das Kindergeld weiter zu zahlen und die Einstellung zurückzunehmen.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Die Erklärung der Verzögerung ist der Punkt, der die Frist rettet.'},
    {k:'Kommunikative Gestaltung', w:'Bezug auf das Schreiben der Behörde mit Datum und Nummer — das ist bei Behörden der erste Satz.'},
    {k:'Korrektheit', w:'„sich beziehen auf" mit Akkusativ. Passiv: „Die Bescheinigung wurde erst am … ausgestellt."'},
    {k:'Wortschatz', w:'Kindergeldnummer, Bescheinigung, nachreichen, Frist, einstellen, fortzahlen.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich beziehe mich auf Ihr Schreiben vom 8. Oktober, Kindergeldnummer 234FK5566. Anbei erhalten Sie die Schulbescheinigung meines Sohnes Amir Haddad, geboren am 4. März 2012. Ich konnte die Bescheinigung nicht früher schicken, weil das Sekretariat der Schule wegen der Herbstferien geschlossen war und das Dokument erst am 21. Oktober ausgestellt wurde. Ich bitte Sie deshalb, die Frist zu entschuldigen und das Kindergeld weiterzuzahlen. Falls Sie noch weitere Unterlagen benötigen, teilen Sie mir das bitte kurz mit.\n\nMit freundlichen Grüßen\nAmina Haddad',
  fallen:[
    'Kindergeldnummer und Datum des Behördenschreibens weglassen. Die Familienkasse bearbeitet den Brief dann nicht.',
    'Nur die Bescheinigung schicken, ohne die Verzögerung zu erklären. Behörden dürfen bei Fristversäumnis einstellen.',
    '„Ich beziehe mich auf Ihrem Schreiben" — nach „auf" in dieser Bedeutung steht der Akkusativ: „auf Ihr Schreiben".',
    'Das Geburtsdatum des Kindes fehlt, obwohl die Behörde nach Kind und nicht nach Elternteil sortiert.'
  ]
},

{
  id:'versicherung-schaden-melden',
  lvl:'B1',
  art:'brief',
  pruef:'DTZ',
  t:'Fahrraddiebstahl der Versicherung melden',
  sit:'Dein Fahrrad wurde am Bahnhof gestohlen, obwohl es abgeschlossen war. Du hast eine Hausratversicherung mit Fahrradschutz und Anzeige bei der Polizei gemacht.',
  empf:'Allianz Versicherung, Schadenabteilung',
  punkte:['was passiert ist','wann und wo','was du bereits getan hast','was du beantragst'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[75,105],
  hilfe:[
    'ich möchte einen Schaden melden, Versicherungsnummer …',
    'Mein Fahrrad wurde am … zwischen … und … Uhr gestohlen.',
    'Es stand am Bahnhof und war mit einem Bügelschloss angeschlossen.',
    'Ich habe am selben Tag Anzeige bei der Polizei erstattet, Aktenzeichen …',
    'Den Kaufbeleg und die Anzeige lege ich bei.',
    'Ich beantrage die Erstattung des Wiederbeschaffungswerts.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Bei Diebstahl zählt vor allem: Zeitraum, Ort, Schloss, Polizeianzeige.'},
    {k:'Kommunikative Gestaltung', w:'Sehr genau werden. Versicherungen kürzen bei unklaren Angaben.'},
    {k:'Korrektheit', w:'Passiv im Präteritum: „Mein Fahrrad wurde gestohlen." Zeitangaben mit „zwischen … und …".'},
    {k:'Wortschatz', w:'Schadenmeldung, Versicherungsnummer, Anzeige erstatten, Aktenzeichen, Kaufbeleg, Wiederbeschaffungswert.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich möchte einen Schaden melden, Versicherungsnummer HR-449021. Mein Fahrrad wurde am 12. Juni zwischen 7.30 und 17.15 Uhr am Hauptbahnhof Bochum gestohlen. Es stand im überdachten Radständer und war mit einem Bügelschloss am Rahmen angeschlossen. Noch am selben Abend habe ich bei der Polizei Anzeige erstattet, das Aktenzeichen lautet ST/2244/26. Als Nachweis lege ich die Anzeige, den Kaufbeleg vom März 2024 über 890 Euro sowie ein Foto des Rades bei. Ich beantrage die Erstattung des Wiederbeschaffungswerts.\n\nMit freundlichen Grüßen\nYusuf Demir',
  fallen:[
    'Nicht erwähnen, dass das Rad abgeschlossen war. Ohne diesen Satz zahlt die Versicherung in der Regel nicht.',
    'Die Polizeianzeige vergessen. Sie ist bei Diebstahl fast immer Voraussetzung.',
    '„Mein Fahrrad ist gestohlen" — richtig ist „wurde gestohlen" oder „ist gestohlen worden".',
    'Nur „ungefähr im Juni" angeben. Versicherungen brauchen Datum und Zeitraum.'
  ]
},

{
  id:'auskunft-integrationskurs',
  lvl:'B1',
  art:'mail',
  pruef:'DTZ',
  t:'Bitte um Auskunft zum B2-Kurs',
  sit:'Du hast den Integrationskurs mit B1 abgeschlossen und möchtest jetzt einen Berufssprachkurs B2 machen. Du fragst bei der Volkshochschule nach.',
  empf:'Volkshochschule Dortmund, Beratung',
  punkte:['was du bisher gemacht hast','was du vorhast','welche Fragen du hast','wann du erreichbar bist'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[70,100],
  hilfe:[
    'ich habe im März den Integrationskurs mit dem DTZ auf B1 abgeschlossen.',
    'Jetzt möchte ich einen Berufssprachkurs B2 besuchen.',
    'Wann beginnt der nächste Kurs, und gibt es Abendkurse?',
    'Brauche ich eine Berechtigung von der Agentur für Arbeit?',
    'Sie erreichen mich täglich nach 17 Uhr unter …'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Die Fragen möglichst konkret stellen — je konkreter, je brauchbarer die Antwort.'},
    {k:'Kommunikative Gestaltung', w:'Ausgangslage vor die Fragen stellen, damit die Beratung passend antworten kann.'},
    {k:'Korrektheit', w:'Indirekte Fragen mit „ob" und Fragewort: „ob es Abendkurse gibt", „wann der Kurs beginnt".'},
    {k:'Wortschatz', w:'Integrationskurs, Berufssprachkurs, Berechtigung, Einstufungstest, Kursbeginn, Teilnahmegebühr.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich habe im März den Integrationskurs bei Ihnen abgeschlossen und den DTZ mit dem Ergebnis B1 bestanden. Jetzt möchte ich einen Berufssprachkurs auf dem Niveau B2 besuchen, weil ich in der Pflege arbeiten will. Dazu habe ich drei Fragen: Wann beginnt der nächste B2-Kurs, gibt es auch Abendkurse für Berufstätige, und brauche ich vorher eine Berechtigung von der Agentur für Arbeit? Außerdem würde ich gern wissen, ob ein Einstufungstest nötig ist. Sie erreichen mich täglich nach 17 Uhr unter 0151 2345678.\n\nMit freundlichen Grüßen\nOlena Kovalenko',
  fallen:[
    'Nur „Ich möchte Informationen über B2-Kurse" schreiben. Ohne konkrete Fragen kommt eine allgemeine Broschüre zurück.',
    'Das eigene Niveau und den DTZ nicht nennen — die Beratung braucht genau das für die Einstufung.',
    '„ob es gibt Abendkurse" — nach „ob" steht das Verb am Ende: „ob es Abendkurse gibt".',
    'Keine Erreichbarkeit angeben, obwohl Beratungsstellen oft zurückrufen.'
  ]
},

{
  id:'terminabsage-jobcenter',
  lvl:'B1',
  art:'mail',
  pruef:'DTZ',
  t:'Termin beim Jobcenter absagen',
  sit:'Du hast am Montag um 10 Uhr einen Termin bei deiner Arbeitsvermittlerin. Am Wochenende wirst du krank und hast eine Krankmeldung bis Mittwoch.',
  empf:'Frau Berger, Jobcenter Dortmund',
  punkte:['welchen Termin du absagst','warum','welchen Nachweis du schickst','wie es weitergehen soll'],
  anrede:'Sehr geehrte Frau Berger,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[65,95],
  hilfe:[
    'zu meinem Termin am Montag, dem 6. Mai, um 10 Uhr kann ich leider nicht kommen.',
    'Ich bin krank und habe eine Arbeitsunfähigkeitsbescheinigung bis Mittwoch.',
    'Die Bescheinigung habe ich heute per Post geschickt.',
    'Ich bitte um einen neuen Termin ab Donnerstag.',
    'Ab Donnerstag bin ich vormittags flexibel.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Beim Jobcenter ist der Nachweis der wichtigste — ohne ihn droht eine Sanktion.'},
    {k:'Kommunikative Gestaltung', w:'Sofort absagen, nicht warten. Kundennummer und Terminzeit in den ersten Satz.'},
    {k:'Korrektheit', w:'Datum im Dativ nach „am": „am Montag, dem 6. Mai". Modalverb „können" mit „leider".'},
    {k:'Wortschatz', w:'Meldetermin, Arbeitsunfähigkeitsbescheinigung, Nachweis, Sanktion, Kundennummer.'}
  ],
  muster:'Sehr geehrte Frau Berger,\n\nzu meinem Termin am Montag, dem 6. Mai, um 10 Uhr kann ich leider nicht kommen. Ich bin seit Samstag krank und habe eine Arbeitsunfähigkeitsbescheinigung bis Mittwoch. Meine Kundennummer lautet 402D5588123. Die Bescheinigung habe ich heute per Post an Sie geschickt; eine Kopie hängt zusätzlich an dieser E-Mail. Ich bitte Sie, mir einen neuen Termin ab Donnerstag zu geben. Vormittags bin ich zeitlich flexibel und komme gern kurzfristig.\n\nMit freundlichen Grüßen\nAmina Haddad',
  fallen:[
    'Einfach nicht hingehen. Ein versäumter Meldetermin ohne Nachweis führt beim Jobcenter zu einer Kürzung.',
    'Den Nachweis erwähnen, aber nicht schicken. Der Satz allein hilft nicht.',
    '„am Montag, den 6. Mai" im Brief nach „am" — hier steht der Dativ: „dem 6. Mai".',
    'Keinen neuen Termin vorschlagen, obwohl das der vierte Leitpunkt ist.'
  ]
},

{
  id:'dankschreiben-praktikum',
  lvl:'B1',
  art:'mail',
  pruef:'DTZ',
  t:'Dankschreiben nach dem Praktikum',
  sit:'Du hast vier Wochen im Pflegeheim Haus Waldblick ein Praktikum gemacht. Es hat dir sehr gefallen. Du bedankst dich und fragst nach einer Bescheinigung und einer möglichen Stelle.',
  empf:'Frau Berger, Pflegedienstleitung',
  punkte:['wofür du dich bedankst','was du gelernt hast','worum du bittest','was du für die Zukunft hoffst'],
  anrede:'Sehr geehrte Frau Berger,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[70,100],
  hilfe:[
    'ich möchte mich herzlich für die vier Wochen in Ihrem Haus bedanken.',
    'Besonders viel habe ich bei der Morgenpflege und bei der Dokumentation gelernt.',
    'Das Team hat mir alles geduldig erklärt.',
    'Könnten Sie mir bitte eine Praktikumsbescheinigung ausstellen?',
    'Über eine Ausbildung oder eine Stelle bei Ihnen würde ich mich sehr freuen.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Der letzte — die Perspektive — macht aus dem Dank eine Bewerbung im Kleinen.'},
    {k:'Kommunikative Gestaltung', w:'Konkret werden: nicht „es war schön", sondern welche Aufgabe was gebracht hat.'},
    {k:'Korrektheit', w:'„sich bedanken für" mit Akkusativ. Konjunktiv II für Bitte und Wunsch: „Könnten Sie …", „würde ich mich freuen".'},
    {k:'Wortschatz', w:'Praktikum, Bescheinigung, Team, Einblick, Erfahrung, Perspektive, betreuen.'}
  ],
  muster:'Sehr geehrte Frau Berger,\n\nich möchte mich herzlich für die vier Wochen Praktikum in Ihrem Haus bedanken. Besonders viel habe ich bei der Morgenpflege und bei der Dokumentation gelernt, weil Ihr Team mir alles geduldig erklärt hat. Auch die Übergabe am Morgen war für mich sehr lehrreich, denn dort habe ich gehört, wie man sachlich über Bewohner spricht. Könnten Sie mir bitte eine Praktikumsbescheinigung ausstellen? Ich brauche sie für meine Bewerbung um einen Ausbildungsplatz. Über eine Ausbildung in Ihrem Haus würde ich mich sehr freuen.\n\nMit freundlichen Grüßen\nNguyen Thi Mai',
  fallen:[
    'Nur allgemein loben: „Alles war sehr gut." Ohne konkretes Beispiel ist der zweite Leitpunkt nicht bearbeitet.',
    '„Ich bedanke mich für die Praktikum" — das Praktikum ist neutral: „für das Praktikum".',
    'Die Bescheinigung nicht anfordern und Wochen später anrufen müssen.',
    'Nach der Stelle fragen, ohne zu sagen, wofür man die Bescheinigung braucht — dann wirkt die Bitte beliebig.'
  ]
},

{
  id:'sparkasse-adressaenderung',
  lvl:'B1',
  art:'mail',
  pruef:'DTZ',
  t:'Adressänderung bei der Bank',
  sit:'Du bist innerhalb der Stadt umgezogen. Deine Bank schickt die Kontoauszüge noch an die alte Adresse. Du willst die Daten ändern lassen und eine neue Karte.',
  empf:'Sparkasse Dortmund, Kundenservice',
  punkte:['dass du umgezogen bist','deine neue Adresse','was mit der Post passieren soll','was du außerdem brauchst'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[65,95],
  hilfe:[
    'ich bin am 1. Juni umgezogen.',
    'Meine neue Adresse lautet: …',
    'Bitte schicken Sie die Kontoauszüge ab sofort an die neue Adresse.',
    'Meine Kontonummer bzw. IBAN lautet …',
    'Außerdem bitte ich um eine neue Bankkarte, weil die alte im Juli abläuft.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Die neue Adresse gehört vollständig hin: Straße, Hausnummer, Postleitzahl, Ort.'},
    {k:'Kommunikative Gestaltung', w:'IBAN oder Kontonummer nennen. Banken ändern nichts ohne Kontobezug.'},
    {k:'Korrektheit', w:'„umziehen" mit „sein" im Perfekt: „ich bin umgezogen", nicht „ich habe umgezogen".'},
    {k:'Wortschatz', w:'Kontoauszug, IBAN, Adressänderung, Bankkarte, ablaufen, Onlinebanking.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich bin am 1. Juni innerhalb von Dortmund umgezogen. Meine neue Adresse lautet: Amselweg 9, 44139 Dortmund. Bitte ändern Sie meine Daten und schicken Sie die Kontoauszüge ab sofort an diese Adresse. Meine IBAN lautet DE12 4405 0199 0012 3456 78. Außerdem bitte ich um eine neue Bankkarte, weil meine alte Karte im Juli abläuft. Falls Sie eine Meldebescheinigung benötigen, schicke ich sie gern nach.\n\nMit freundlichen Grüßen\nYusuf Demir',
  fallen:[
    '„Ich habe umgezogen" — „umziehen" bildet das Perfekt mit „sein": „ich bin umgezogen".',
    'Die Postleitzahl weglassen. Eine halbe Adresse hilft der Bank nicht.',
    'IBAN oder Kontonummer vergessen — die Bank kann den Kunden nicht identifizieren.',
    'Zwei Anliegen in einem Satz verstecken. Adressänderung und neue Karte gehören in getrennte Sätze.'
  ]
},

{
  id:'hausverwaltung-treppenhaus',
  lvl:'B1',
  art:'brief',
  pruef:'DTZ',
  t:'Licht im Treppenhaus defekt',
  sit:'Im Treppenhaus deines Hauses ist das Licht seit zehn Tagen kaputt. Eine ältere Nachbarin ist gestern gestürzt. Du schreibst der Hausverwaltung im Namen mehrerer Mieter.',
  empf:'Hausverwaltung Krämer',
  punkte:['was defekt ist','seit wann','was schon passiert ist','was du forderst'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[70,100],
  hilfe:[
    'im Treppenhaus der Lindenstraße 12 funktioniert das Licht nicht.',
    'Der Schaden besteht seit dem 8. Oktober.',
    'Gestern ist Frau Schneider aus dem zweiten Stock auf der Treppe gestürzt.',
    'Vor allem ältere Mieter haben Angst, abends nach Hause zu kommen.',
    'Wir bitten Sie, das Licht bis Freitag reparieren zu lassen.'
  ],
  krit:[
    {k:'Leitpunkte', w:'Vier Punkte. Der Sturz ist der Punkt, der die Dringlichkeit belegt.'},
    {k:'Kommunikative Gestaltung', w:'Im Namen mehrerer Mieter schreiben: „wir" statt „ich", mit Unterschriften am Ende.'},
    {k:'Korrektheit', w:'Perfekt mit „sein" bei „stürzen": „Sie ist gestürzt." Passiv mit „lassen": „reparieren lassen".'},
    {k:'Wortschatz', w:'Treppenhaus, Beleuchtung, defekt, Verkehrssicherheit, Haftung, Mieter, beheben.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nim Treppenhaus der Lindenstraße 12 funktioniert die Beleuchtung zwischen dem ersten und dem dritten Stock nicht. Der Schaden besteht seit dem 8. Oktober, also seit zehn Tagen. Gestern Abend ist Frau Schneider aus dem zweiten Stock auf der Treppe gestürzt, weil sie die Stufen nicht sehen konnte. Zum Glück hat sie sich nur den Arm verletzt. Besonders die älteren Mieter haben inzwischen Angst, abends nach Hause zu kommen. Wir bitten Sie deshalb, den Schaden bis Freitag beheben zu lassen.\n\nMit freundlichen Grüßen\nAmina Haddad und die Mieter des Hauses Lindenstraße 12',
  fallen:[
    'Ohne Frist schreiben. Bei Sicherheitsmängeln ist ein konkretes Datum der wirksamste Satz im ganzen Brief.',
    '„Frau Schneider hat gestürzt" — „stürzen" bildet das Perfekt mit „sein": „ist gestürzt".',
    'Den Sturz nicht erwähnen, weil es peinlich erscheint. Genau dieser Punkt macht aus einer Bitte eine Pflicht der Verwaltung.',
    'Nicht sagen, welcher Teil des Treppenhauses betroffen ist — der Handwerker sucht dann im falschen Stock.'
  ]
},

/* ==================== B2 — 20 Aufgaben ====================
   Zwei Textsorten dominieren: der Forumsbeitrag (Goethe B2
   Aufgabe 1, ca. 150 Wörter, vier Sprachfunktionen) und die
   formelle Nachricht an Vorgesetzte (Aufgabe 2, ca. 100
   Wörter). Dazu Bewerbung, Beschwerde mit Forderung,
   Widerspruch, Bericht und Protokoll aus dem Berufsalltag.
   Achtung: Wird die Aufgabenerfüllung mit E bewertet, ist die
   ganze Aufgabe 0 Punkte — ein ausgelassener Leitpunkt kann
   das Modul kosten.
   ========================================================== */

{
  id:'bewerbung-pflegefachkraft',
  lvl:'B2',
  art:'bewerbung',
  pruef:'telc B2',
  t:'Bewerbung als Pflegefachkraft',
  sit:'Das Klinikum Bochum sucht eine Pflegefachkraft für die Innere Medizin, Vollzeit, ab dem 1. Oktober. Du bist ausgebildete Pflegefachkraft aus der Ukraine, deine Anerkennung ist abgeschlossen, du hast zwei Jahre Berufserfahrung und arbeitest gerade in einem Pflegeheim.',
  empf:'Klinikum Bochum, Frau Berger, Pflegedirektion',
  punkte:['auf welche Stelle du dich bewirbst','welche Qualifikation und Erfahrung du mitbringst','warum genau dieses Haus','wann du anfangen kannst und was du erwartest'],
  anrede:'Sehr geehrte Frau Berger,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[130,170],
  hilfe:[
    'mit großem Interesse habe ich Ihre Stellenanzeige vom … gelesen.',
    'Meine Anerkennung als Pflegefachkraft habe ich im März 2026 erhalten.',
    'Seit zwei Jahren arbeite ich im Pflegeheim Haus Waldblick, überwiegend im Nachtdienst.',
    'Besonders reizt mich an Ihrem Haus, dass Sie Pflegekräfte gezielt weiterbilden.',
    'Zum 1. Oktober könnte ich bei Ihnen beginnen.',
    'Über ein persönliches Gespräch würde ich mich sehr freuen.'
  ],
  krit:[
    {k:'Aufgabenbewältigung', w:'Alle vier Punkte. Fehlt der Bezug zum Haus, wirkt die Bewerbung wie ein Serienbrief — und der Punkt gilt als nicht bearbeitet.'},
    {k:'Kommunikative Gestaltung', w:'Register durchgehend formell. Ansprechpartnerin mit Namen, wenn er in der Anzeige steht. Kein Konjunktiv-Nebel: „Ich würde gern behaupten, dass ich …".'},
    {k:'Formale Richtigkeit', w:'Nebensätze, Passiv und Konjunktiv II sollen vorkommen — auf B2 wird gelegentlich eine komplexere Struktur erwartet.'},
    {k:'Wortschatz', w:'Fachwortschatz der Pflege: Grundpflege, Dokumentation, Übergabe, Schichtdienst, Anerkennungsverfahren.'}
  ],
  muster:'Sehr geehrte Frau Berger,\n\nmit großem Interesse habe ich Ihre Stellenanzeige vom 12. Juli gelesen und bewerbe mich um die Stelle als Pflegefachkraft in der Inneren Medizin.\n\nMeine Ausbildung habe ich in Kiew abgeschlossen; die Anerkennung als Pflegefachkraft wurde mir im März 2026 erteilt. Seit zwei Jahren arbeite ich im Pflegeheim Haus Waldblick, überwiegend im Nachtdienst. Dort betreue ich 24 Bewohnerinnen und Bewohner, führe die Pflegedokumentation und gebe die Übergabe an den Frühdienst. Da viele unserer Bewohner an Demenz erkrankt sind, habe ich gelernt, auch in unruhigen Situationen ruhig und strukturiert zu arbeiten.\n\nZu Ihrem Haus möchte ich wechseln, weil Sie Pflegekräfte systematisch weiterbilden. Eine Fachweiterbildung im Bereich Intensivpflege wäre mein mittelfristiges Ziel, und Ihr Klinikum bietet sie an.\n\nZum 1. Oktober könnte ich beginnen, bei Bedarf auch früher. Über ein persönliches Gespräch würde ich mich sehr freuen.\n\nMit freundlichen Grüßen\nOlena Kovalenko',
  fallen:[
    'Den Lebenslauf im Brief wiederholen. Das Anschreiben erklärt, warum diese Person zu dieser Stelle passt — die Stationen stehen im CV.',
    '„Ich bewerbe mich für die Stelle" ist verbreitet, korrekt ist „ich bewerbe mich um die Stelle" oder „auf die Stelle".',
    'Kein Satz über das konkrete Haus. Genau dieser Punkt entscheidet über die Einladung und ist bei telc einer der vier Leitpunkte.',
    'Zu viele Konjunktive: „Ich würde meinen, dass ich vielleicht geeignet wäre." Auf B2 wird Klarheit bewertet, nicht Höflichkeitsnebel.'
  ]
},

{
  id:'bewerbung-quereinstieg-buero',
  lvl:'B2',
  art:'bewerbung',
  pruef:'telc B2',
  t:'Bewerbung als Quereinsteiger im Büro',
  sit:'Ein Speditionsunternehmen sucht eine Bürokraft für die Auftragsabwicklung. Du hast im Ausland als Lehrer gearbeitet, in Deutschland zwei Jahre in der Logistik am Lager gearbeitet und eine Weiterbildung in Bürokommunikation gemacht.',
  empf:'Spedition Wieland GmbH, Personalabteilung',
  punkte:['auf welche Stelle du dich bewirbst','welchen Weg du bisher gegangen bist','warum der Quereinstieg für die Firma ein Vorteil ist','welche Erwartung du hast'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[140,180],
  hilfe:[
    'auf Ihre Anzeige bei der Agentur für Arbeit hin bewerbe ich mich um die Stelle in der Auftragsabwicklung.',
    'In meiner Heimat habe ich als Lehrer gearbeitet, seit zwei Jahren bin ich in Ihrer Branche tätig.',
    'Im Lager habe ich die Abläufe von der praktischen Seite kennengelernt.',
    'Parallel habe ich eine Weiterbildung in Bürokommunikation abgeschlossen.',
    'Gerade weil ich beide Seiten kenne, kann ich zwischen Lager und Büro vermitteln.'
  ],
  krit:[
    {k:'Aufgabenbewältigung', w:'Vier Punkte. Der Quereinstieg muss als Vorteil begründet werden, nicht entschuldigt.'},
    {k:'Kommunikative Gestaltung', w:'Roter Faden: Herkunft, Umweg, Nutzen für die Firma. Absätze setzen.'},
    {k:'Formale Richtigkeit', w:'Perfekt und Präteritum sauber trennen. Konnektoren wie „zwar … aber", „gerade weil", „darüber hinaus".'},
    {k:'Wortschatz', w:'Auftragsabwicklung, Disposition, Schnittstelle, Berufserfahrung, Weiterbildung, Belastbarkeit.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nauf Ihre Anzeige bei der Agentur für Arbeit hin bewerbe ich mich um die Stelle in der Auftragsabwicklung.\n\nMein Weg dorthin ist kein gerader: In meiner Heimat habe ich zehn Jahre als Lehrer für Mathematik gearbeitet. Nach meiner Einreise habe ich zunächst zwei Jahre im Lager der Firma Hansen gearbeitet und dort gelernt, wie Aufträge, Ladelisten und Fahrzeiten praktisch zusammenhängen. Parallel dazu habe ich eine Weiterbildung in Bürokommunikation abgeschlossen, in der ich mit Word, Excel und einem Warenwirtschaftssystem gearbeitet habe.\n\nGerade dieser doppelte Blick ist für Sie ein Vorteil. Wer selbst am Band gestanden hat, weiß, welche Angabe auf dem Papier fehlt, bevor der Fahrer anruft. Aus meiner Zeit als Lehrer bringe ich außerdem mit, Dinge verständlich zu erklären — auch am Telefon mit einem verärgerten Kunden.\n\nÜber ein Gespräch, in dem ich Ihnen das persönlich zeigen kann, würde ich mich freuen.\n\nMit freundlichen Grüßen\nYusuf Demir',
  fallen:[
    'Sich für den Quereinstieg entschuldigen: „Leider habe ich keine Ausbildung in diesem Bereich." Der Leitpunkt verlangt das Gegenteil — die Begründung, warum der Umweg nützt.',
    '„Ich habe gearbeitet als Lehrer zehn Jahre." Reihenfolge: Zeit vor Art vor Ort, und das Partizip steht am Ende.',
    'Nur Tätigkeiten aufzählen, ohne den Nutzen für die Firma zu nennen. Aufzählung ist keine Argumentation.',
    'Den Brief ohne Absätze schreiben. Kohärenz wird eigenständig bewertet, und Absätze sind ihr sichtbarster Teil.'
  ]
},

{
  id:'bewerbung-interne-stelle',
  lvl:'B2',
  art:'bewerbung',
  pruef:'frei',
  t:'Bewerbung auf eine interne Stelle',
  sit:'In deinem Betrieb wird die Stelle einer Teamleitung im Lager frei. Du arbeitest seit vier Jahren dort und hast schon zweimal die Urlaubsvertretung der Teamleitung gemacht. Du bewirbst dich intern.',
  empf:'Herr Özdemir, Betriebsleitung',
  punkte:['auf welche Stelle du dich bewirbst','welche Erfahrung im Betrieb du hast','wie du die Aufgabe angehen würdest','worum du bittest'],
  anrede:'Sehr geehrter Herr Özdemir,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[120,155],
  hilfe:[
    'hiermit bewerbe ich mich auf die intern ausgeschriebene Stelle der Teamleitung im Lager.',
    'Seit vier Jahren arbeite ich in der Kommissionierung.',
    'Im Sommer 2025 und 2026 habe ich die Teamleitung während des Urlaubs vertreten.',
    'Als Teamleitung würde ich zunächst die Einarbeitung neuer Kollegen strukturieren.',
    'Ich bitte Sie um ein Gespräch, in dem ich meine Ideen vorstellen kann.'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Punkte. Der dritte — der eigene Plan — unterscheidet eine interne Bewerbung von einer Meldung.'},
    {k:'Kohärenz', w:'Vom Bekannten zum Neuen: Erfahrung, Vertretung, Vorhaben, Bitte.'},
    {k:'Wortschatz', w:'Kommissionierung, Einarbeitung, Schichtplanung, Verantwortung übernehmen, Ausschreibung.'},
    {k:'Strukturen', w:'Konjunktiv II für Vorhaben: „würde ich zunächst …". Relativsätze für Präzisierungen.'}
  ],
  muster:'Sehr geehrter Herr Özdemir,\n\nhiermit bewerbe ich mich auf die intern ausgeschriebene Stelle der Teamleitung im Lager.\n\nSeit vier Jahren arbeite ich in der Kommissionierung und kenne unsere Abläufe von der Wareneingangskontrolle bis zur Verladung. In den Sommermonaten 2025 und 2026 habe ich die Teamleitung während des Urlaubs vertreten. In dieser Zeit habe ich die Schichtübergabe organisiert und bin auch mit kurzfristigen Personalausfällen zurechtgekommen.\n\nAls Teamleitung würde ich zwei Punkte zuerst angehen: Ich würde die Einarbeitung neuer Kollegen mit einer schriftlichen Checkliste vereinheitlichen, damit Fehler am Wareneingang seltener werden. Außerdem würde ich die Übergabe zwischen Früh- und Spätschicht auf zehn Minuten festlegen, weil dort die meisten Informationen verloren gehen.\n\nIch bitte Sie um ein Gespräch, in dem ich Ihnen diese Vorschläge genauer erläutern kann.\n\nMit freundlichen Grüßen\nYusuf Demir',
  fallen:[
    'Sich auf die Betriebszugehörigkeit verlassen: „Sie kennen mich ja." Auch intern wird ein Anschreiben bewertet, nicht die Bekanntschaft.',
    'Keine konkreten Vorhaben nennen. Ohne Plan ist der dritte Leitpunkt offen.',
    '„Ich bewerbe mich für die Teamleitung" — richtig: „auf die Stelle" oder „um die Stelle".',
    'Kollegen kritisieren, um sich abzuheben. Das fällt auf den Bewerber zurück.'
  ]
},

{
  id:'motivationsschreiben-weiterbildung',
  lvl:'B2',
  art:'bewerbung',
  pruef:'frei',
  t:'Motivationsschreiben für eine Weiterbildung',
  sit:'Du möchtest eine geförderte Weiterbildung zur Fachkraft für Arbeitssicherheit machen. Die Bildungsträger verlangen ein Motivationsschreiben von einer Seite.',
  empf:'Bildungswerk Ruhr, Auswahlkommission',
  punkte:['welche Weiterbildung du machen willst','was dich dazu gebracht hat','welche Voraussetzungen du mitbringst','welches Ziel du danach hast'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[125,165],
  hilfe:[
    'ich bewerbe mich um einen Platz in der Weiterbildung zur Fachkraft für Arbeitssicherheit.',
    'Der Anlass war ein Arbeitsunfall in meiner Abteilung.',
    'Seit drei Jahren bin ich als Sicherheitsbeauftragter im Betrieb tätig.',
    'Mathematik und Technik lagen mir immer.',
    'Langfristig möchte ich im Bereich Arbeitsschutz Verantwortung übernehmen.'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Punkte. Der Anlass muss konkret sein, sonst bleibt das Schreiben austauschbar.'},
    {k:'Kohärenz', w:'Eine Linie von der Erfahrung über die Voraussetzung zum Ziel. Keine Sprünge.'},
    {k:'Wortschatz', w:'Arbeitsschutz, Gefährdungsbeurteilung, Unterweisung, Prävention, Verantwortung, Qualifizierung.'},
    {k:'Strukturen', w:'Nominalisierungen sind hier erlaubt und gewünscht: „die Vermeidung von Unfällen", „nach Abschluss der Weiterbildung".'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich bewerbe mich um einen Platz in der Weiterbildung zur Fachkraft für Arbeitssicherheit, die im Januar beginnt.\n\nDer Anlass für meine Entscheidung war ein Unfall in meiner Abteilung: Ein Kollege stürzte von einer Leiter, die seit Monaten als beschädigt gemeldet war. Bei der Aufarbeitung habe ich gemerkt, dass es weniger an fehlenden Regeln lag als daran, dass niemand sie verständlich vermittelt hat. Seitdem interessiert mich Prävention nicht als Vorschrift, sondern als Kommunikationsaufgabe.\n\nSeit drei Jahren bin ich Sicherheitsbeauftragter unserer Abteilung und führe die monatlichen Unterweisungen durch. Technische Zusammenhänge fallen mir leicht, und aus meiner Zeit in der Produktion kenne ich die Argumente, mit denen Kollegen Schutzmaßnahmen umgehen.\n\nNach Abschluss der Weiterbildung möchte ich im Arbeitsschutz meines Betriebs Verantwortung übernehmen und mittelfristig die Gefährdungsbeurteilungen für die Fertigung erstellen.\n\nMit freundlichen Grüßen\nAmina Haddad',
  fallen:[
    'Allgemein bleiben: „Sicherheit ist mir wichtig." Ohne konkreten Anlass ist der zweite Leitpunkt nicht bearbeitet.',
    'Nur die Vergangenheit erzählen und das Ziel weglassen. Eine Auswahlkommission fördert Perspektiven, nicht Biografien.',
    '„Ich bewerbe mich um ein Platz" — der Platz ist maskulin, im Akkusativ „einen Platz".',
    'Das Schreiben mit Floskeln füllen: „Ich bin motiviert, teamfähig und belastbar." Ohne Beispiel bringt das keinen Punkt.'
  ]
},

{
  id:'beschwerde-sprachschule',
  lvl:'B2',
  art:'beschwerde',
  pruef:'telc B2',
  t:'Beschwerde über einen Sprachkurs',
  sit:'Du hast für 690 Euro einen B2-Intensivkurs gebucht: 20 Teilnehmer, tägliche Sprechübungen, Prüfungssimulation. Tatsächlich sind 32 Personen im Raum, der Lehrer wechselt wöchentlich, eine Simulation gab es nicht.',
  empf:'Sprachinstitut Rheinblick, Geschäftsführung',
  punkte:['welchen Kurs du gebucht hast und was zugesagt war','was tatsächlich anders ist','welche Folgen das für dich hat','welche Forderung du stellst'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[135,175],
  hilfe:[
    'am 3. Februar habe ich den Intensivkurs B2 gebucht, Kursnummer …',
    'In Ihrer Beschreibung waren maximal 20 Teilnehmer und eine Prüfungssimulation zugesagt.',
    'Tatsächlich sitzen 32 Personen im Raum, sodass niemand zum Sprechen kommt.',
    'Da ich die Prüfung im Juni ablegen muss, bin ich auf diese Übungen angewiesen.',
    'Ich fordere Sie auf, die Gruppe zu teilen oder mir 30 Prozent der Kursgebühr zu erstatten.'
  ],
  krit:[
    {k:'Aufgabenbewältigung', w:'Vier Punkte. Zugesagt gegen tatsächlich — dieser Vergleich ist der Kern jeder Beschwerde.'},
    {k:'Kommunikative Gestaltung', w:'Sachlich, aber bestimmt. Eine Alternative anbieten macht die Forderung annehmbar.'},
    {k:'Formale Richtigkeit', w:'Konsekutive Nebensätze: „sodass niemand zum Sprechen kommt". Konzessiv: „obwohl im Prospekt …".'},
    {k:'Wortschatz', w:'zusagen, Leistungsbeschreibung, Mangel, Teilnehmerzahl, Erstattung, Minderung, Frist.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nam 3. Februar habe ich bei Ihnen den Intensivkurs B2 gebucht, Kursnummer IB2-14, und 690 Euro im Voraus bezahlt. In Ihrer Leistungsbeschreibung sind maximal 20 Teilnehmer, tägliche Sprechübungen und eine vollständige Prüfungssimulation zugesagt.\n\nDie Realität sieht anders aus. Seit Kursbeginn sitzen 32 Personen im Raum, sodass in 90 Minuten jede Teilnehmerin höchstens zwei Sätze sagt. Der Unterricht wird außerdem wöchentlich von einer anderen Lehrkraft übernommen, weshalb die Themen mehrfach wiederholt wurden. Eine Prüfungssimulation hat bis heute nicht stattgefunden, obwohl der Kurs in zwei Wochen endet.\n\nDa ich die telc-Prüfung im Juni ablegen muss und dafür gerade das Sprechen und die Simulation brauche, ist der Kurs für mich in dieser Form wertlos.\n\nIch fordere Sie deshalb auf, die Gruppe bis zum 30. Mai zu teilen und die Simulation nachzuholen. Andernfalls erwarte ich die Erstattung von 30 Prozent der Kursgebühr.\n\nMit freundlichen Grüßen\nNguyen Thi Mai',
  fallen:[
    'Nur schimpfen, ohne die Zusage zu zitieren. Die Beschwerde wird stark, wenn man Prospekt und Wirklichkeit gegenüberstellt.',
    'Keine Alternative anbieten. „Teilen oder erstatten" lässt der Schule einen Weg, ohne ihr Gesicht zu verlieren.',
    '„Ich fordere Sie auf, die Gruppe teilen." Nach „auffordern" steht der zu-Infinitiv: „zu teilen".',
    'Kursnummer und Zahlungsdatum weglassen — bei Kursanbietern die häufigste Ursache für eine Standardantwort.'
  ]
},

{
  id:'beschwerde-fitnessstudio',
  lvl:'B2',
  art:'beschwerde',
  pruef:'telc B2',
  t:'Beitragserhöhung im Fitnessstudio',
  sit:'Dein Fitnessstudio erhöht den Monatsbeitrag von 29,90 auf 39,90 Euro. Im Vertrag steht eine Erhöhung nur mit drei Monaten Vorlauf, angekündigt wurde sie vor drei Wochen. Die Sauna ist seit einem halben Jahr geschlossen.',
  empf:'FitBase Bochum, Kundenverwaltung',
  punkte:['welche Ankündigung du erhalten hast','was im Vertrag steht','welche Leistung fehlt','was du verlangst'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[120,155],
  hilfe:[
    'mit Schreiben vom … haben Sie eine Beitragserhöhung ab dem 1. Juli angekündigt.',
    'Laut Paragraf 4 meines Vertrags ist eine Erhöhung nur mit drei Monaten Vorlauf möglich.',
    'Außerdem ist die Sauna seit Januar geschlossen, obwohl sie Teil meines Tarifs ist.',
    'Ich widerspreche der Erhöhung zum 1. Juli.',
    'Ich fordere Sie auf, den Beitrag von 29,90 Euro beizubehalten, solange die Sauna geschlossen ist.'
  ],
  krit:[
    {k:'Aufgabenbewältigung', w:'Vier Punkte. Der Vertragsbezug ist der stärkste — ohne ihn ist es eine Bitte, mit ihm ein Anspruch.'},
    {k:'Kommunikative Gestaltung', w:'Ein Argument pro Absatz. Am Ende eine einzige klare Forderung.'},
    {k:'Formale Richtigkeit', w:'„widersprechen" mit Dativ: „Ich widerspreche der Erhöhung." Häufiger Fehler.'},
    {k:'Wortschatz', w:'Beitragserhöhung, Vertragsklausel, Vorlauffrist, Leistungskürzung, widersprechen, Sonderkündigungsrecht.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nmit Schreiben vom 8. Juni haben Sie mir eine Erhöhung meines Monatsbeitrags von 29,90 auf 39,90 Euro ab dem 1. Juli angekündigt, Mitgliedsnummer 55912.\n\nDieser Erhöhung widerspreche ich. Nach Paragraf 4 meines Vertrags dürfen Sie den Beitrag nur mit einem Vorlauf von drei Monaten anpassen. Zwischen Ihrem Schreiben und dem genannten Termin liegen jedoch nur drei Wochen.\n\nHinzu kommt, dass die Sauna seit Januar geschlossen ist, obwohl sie ausdrücklich zu meinem Tarif gehört. Sie verlangen also mehr Geld für weniger Leistung.\n\nIch fordere Sie deshalb auf, den Beitrag von 29,90 Euro unverändert abzubuchen, bis die Sauna wieder geöffnet ist. Sollten Sie an der Erhöhung festhalten, mache ich von meinem Sonderkündigungsrecht Gebrauch. Um eine schriftliche Antwort bis zum 25. Juni bitte ich.\n\nMit freundlichen Grüßen\nAmina Haddad',
  fallen:[
    '„Ich widerspreche die Erhöhung" — „widersprechen" verlangt den Dativ: „der Erhöhung".',
    'Nur über die Sauna klagen und die Frist im Vertrag nicht erwähnen. Die Frist ist das juristische Argument.',
    'Sofort kündigen, ohne zu widersprechen. Wer widerspricht, behält beide Optionen.',
    'Die Mitgliedsnummer weglassen. Fitnessketten bearbeiten nichts ohne diese Nummer.'
  ]
},

{
  id:'beschwerde-mietminderung',
  lvl:'B2',
  art:'beschwerde',
  pruef:'telc B2',
  t:'Mietminderung wegen Baulärm ankündigen',
  sit:'Seit sechs Wochen wird die Fassade deines Hauses saniert. Von 7 bis 17 Uhr gibt es Bohrlärm, dein Balkon ist verhängt, die Fenster müssen zu bleiben. Du arbeitest im Homeoffice. Du kündigst eine Mietminderung an.',
  empf:'Hausverwaltung Krämer',
  punkte:['welche Beeinträchtigung besteht','seit wann und wie stark','welche Folgen für dich','welche Konsequenz du ziehst'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[135,175],
  hilfe:[
    'seit dem 12. April wird die Fassade unseres Hauses saniert.',
    'Von 7 bis 17 Uhr sind Bohr- und Fräsarbeiten zu hören.',
    'Der Balkon ist vollständig verhängt und nicht nutzbar.',
    'Da ich im Homeoffice arbeite, kann ich keine Telefonkonferenzen führen.',
    'Ich mindere die Miete ab Mai um 15 Prozent und zahle den Betrag unter Vorbehalt.'
  ],
  krit:[
    {k:'Aufgabenbewältigung', w:'Vier Punkte. Die Konsequenz muss konkret sein: Prozentsatz, ab wann, unter Vorbehalt.'},
    {k:'Kommunikative Gestaltung', w:'Nicht drohen, sondern ankündigen. Der Ton bleibt geschäftlich.'},
    {k:'Formale Richtigkeit', w:'Passiv: „wird saniert", „sind zu hören". Temporale Nebensätze mit „solange" und „seit".'},
    {k:'Wortschatz', w:'Beeinträchtigung, Mangel, Mietminderung, unter Vorbehalt, Sanierung, zumutbar.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nseit dem 12. April wird die Fassade des Hauses Lindenstraße 12 saniert. Ich wohne in der Wohnung 4b und möchte Sie über die Beeinträchtigung informieren.\n\nAn allen Werktagen von 7 bis 17 Uhr finden Bohr- und Fräsarbeiten statt, die im Wohnzimmer ein normales Gespräch unmöglich machen. Der Balkon ist seit sechs Wochen vollständig verhängt und damit nicht nutzbar; die Fenster auf der Südseite müssen den ganzen Tag geschlossen bleiben.\n\nDa ich im Homeoffice arbeite, kann ich seit Wochen keine Telefonkonferenzen aus der Wohnung führen und muss dafür in ein Café ausweichen.\n\nDie Arbeiten sind notwendig, das bestreite ich nicht. Solange die Beeinträchtigung aber in diesem Umfang besteht, mindere ich die Miete ab Mai um 15 Prozent und zahle den vollen Betrag nur unter Vorbehalt. Über den geplanten Abschluss der Arbeiten bitte ich um eine kurze Information.\n\nMit freundlichen Grüßen\nOlena Kovalenko',
  fallen:[
    'Die Miete einfach kürzen, ohne es vorher schriftlich anzukündigen. Ohne Ankündigung kann eine Kündigung wegen Zahlungsverzugs folgen.',
    'Den Prozentsatz weglassen. „Ich zahle weniger" ist keine Mietminderung.',
    'Die Sanierung grundsätzlich bestreiten. Wer anerkennt, dass die Arbeiten nötig sind, wirkt glaubwürdiger.',
    '„unter Vorbehalt" vergessen — der Ausdruck sichert die Rückforderung.'
  ]
},

{
  id:'widerspruch-nebenkosten',
  lvl:'B2',
  art:'widerspruch',
  pruef:'frei',
  t:'Widerspruch gegen die Nebenkostenabrechnung',
  sit:'Deine Nebenkostenabrechnung fordert 640 Euro nach. In der Abrechnung stehen Kosten für den Aufzug, obwohl dein Haus keinen hat, und Gartenpflege für ein Nachbargrundstück. Der Umlageschlüssel wurde geändert.',
  empf:'Hausverwaltung Krämer',
  punkte:['gegen welche Abrechnung du Widerspruch einlegst','welche Posten du beanstandest','was du prüfen möchtest','welche Frist du setzt'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[130,170],
  hilfe:[
    'gegen Ihre Nebenkostenabrechnung für 2025 vom … lege ich Widerspruch ein.',
    'Unter Position 7 berechnen Sie Aufzugskosten. Unser Haus hat keinen Aufzug.',
    'Der Umlageschlüssel wurde ohne Mitteilung von Wohnfläche auf Personenzahl geändert.',
    'Ich bitte um Einsicht in die Originalbelege.',
    'Bis zur Klärung zahle ich die Nachforderung nicht.'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Punkte. Die Beanstandungen einzeln und mit Positionsnummer nennen.'},
    {k:'Kohärenz', w:'Aufzählung mit Struktur: erstens, zweitens, drittens. Danach die Forderung.'},
    {k:'Wortschatz', w:'Nebenkostenabrechnung, Position, Umlageschlüssel, Belegeinsicht, Nachforderung, beanstanden.'},
    {k:'Strukturen', w:'Passiv im Perfekt: „Der Schlüssel wurde geändert." Relativsätze zur Präzisierung der Positionen.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\ngegen Ihre Nebenkostenabrechnung für das Jahr 2025 vom 14. März lege ich Widerspruch ein. Sie fordern eine Nachzahlung von 640 Euro; diese Forderung kann ich in drei Punkten nicht nachvollziehen.\n\nErstens berechnen Sie unter Position 7 Aufzugskosten in Höhe von 218 Euro. Das Haus Lindenstraße 12 hat keinen Aufzug. Zweitens enthält Position 9 Kosten für die Gartenpflege eines Grundstücks, das nach meiner Kenntnis zur Nummer 14 gehört. Drittens haben Sie den Umlageschlüssel gegenüber dem Vorjahr von Wohnfläche auf Personenzahl umgestellt, ohne mich darüber zu informieren.\n\nIch bitte Sie deshalb, mir Einsicht in die Originalbelege zu gewähren, und schlage dafür den 20. April vor.\n\nBis zur Klärung zahle ich die Nachforderung nicht. Sollte die Abrechnung sich als korrekt erweisen, überweise ich den Betrag selbstverständlich sofort. Um eine Antwort bis zum 10. April bitte ich.\n\nMit freundlichen Grüßen\nYusuf Demir',
  fallen:[
    'Pauschal widersprechen: „Die Abrechnung ist falsch." Ein Widerspruch muss die Positionen einzeln benennen.',
    'Nicht um Belegeinsicht bitten. Das Recht darauf ist das wirksamste Instrument bei Nebenkosten.',
    'Die Nachzahlung trotzdem überweisen. Zurückzuholen ist deutlich schwerer als nicht zu zahlen.',
    '„Ich lege Widerspruch gegen Ihre Abrechnung ein, die ich nicht verstehe." Nicht verstehen ist kein Grund — benennen, was falsch ist.'
  ]
},

{
  id:'widerspruch-anerkennung',
  lvl:'B2',
  art:'widerspruch',
  pruef:'frei',
  t:'Widerspruch im Anerkennungsverfahren',
  sit:'Die zuständige Stelle hat deinen im Ausland erworbenen Abschluss nur teilweise anerkannt und eine Anpassungsqualifizierung von 18 Monaten verlangt. Zwei Praxisnachweise über insgesamt vier Jahre wurden nicht berücksichtigt.',
  empf:'Bezirksregierung, Referat Anerkennung',
  punkte:['gegen welchen Bescheid du Widerspruch einlegst','welche Unterlagen nicht berücksichtigt wurden','warum sie relevant sind','was du beantragst'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[130,170],
  hilfe:[
    'gegen Ihren Bescheid vom …, Aktenzeichen …, lege ich hiermit Widerspruch ein.',
    'In der Begründung wird meine Berufserfahrung nicht erwähnt.',
    'Ich habe von 2019 bis 2023 in einer Klinik in Kiew gearbeitet.',
    'Die Tätigkeit umfasste genau jene Bereiche, in denen Sie einen Unterschied feststellen.',
    'Ich beantrage, die Nachweise zu berücksichtigen und die Dauer der Anpassungsqualifizierung zu verkürzen.'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Punkte. Der dritte ist der eigentliche Widerspruch: die Begründung, warum die Unterlagen die Entscheidung ändern.'},
    {k:'Kohärenz', w:'Bescheid, Lücke, Beweis, Antrag. In dieser Reihenfolge.'},
    {k:'Wortschatz', w:'Gleichwertigkeit, wesentlicher Unterschied, Anpassungsqualifizierung, Nachweis, Referenzberuf, Fristwahrung.'},
    {k:'Strukturen', w:'Passiv: „wurden nicht berücksichtigt". Nominalstil für den Antrag: „die Verkürzung der Qualifizierung".'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\ngegen Ihren Bescheid vom 2. Mai, Aktenzeichen AN-2026-1187, lege ich hiermit fristgerecht Widerspruch ein.\n\nSie stellen wesentliche Unterschiede in den Bereichen Wundmanagement und Medikamentengabe fest und verlangen deshalb eine Anpassungsqualifizierung von 18 Monaten. In der Begründung wird meine Berufserfahrung jedoch an keiner Stelle erwähnt, obwohl ich mit dem Antrag zwei Arbeitszeugnisse eingereicht habe.\n\nDiese Nachweise sind entscheidend: Von 2019 bis 2023 war ich in der chirurgischen Abteilung eines Klinikums in Kiew tätig und habe dort täglich Wundversorgung durchgeführt und Medikamente nach Anordnung verabreicht. Die Tätigkeit betrifft also genau die beiden Bereiche, in denen Sie eine Lücke sehen. Beide Zeugnisse liegen in beglaubigter Übersetzung vor; ich füge sie erneut bei.\n\nIch beantrage daher, die Nachweise zu berücksichtigen und die Anpassungsqualifizierung entsprechend zu verkürzen. Für ein Gespräch stehe ich gern zur Verfügung.\n\nMit freundlichen Grüßen\nOlena Kovalenko',
  fallen:[
    'Die Widerspruchsfrist verstreichen lassen. Sie beträgt in der Regel einen Monat ab Zugang des Bescheids und steht in der Rechtsbehelfsbelehrung.',
    'Nur beteuern, dass man qualifiziert ist. Der Widerspruch muss zeigen, welches Dokument welchen festgestellten Unterschied entkräftet.',
    'Die Nachweise nicht noch einmal beilegen, weil man sie „schon eingereicht" hat.',
    '„Ich beantrage, die Nachweise berücksichtigen." Nach „beantragen" steht der zu-Infinitiv: „zu berücksichtigen".'
  ]
},

{
  id:'forum-homeoffice',
  lvl:'B2',
  art:'forum',
  pruef:'Goethe B2',
  t:'Forumsbeitrag: Homeoffice für alle?',
  sit:'In einem Online-Forum diskutieren Leserinnen und Leser über den Vorschlag, dass Beschäftigte ein Recht auf zwei Tage Homeoffice pro Woche bekommen. Ein Nutzer schreibt: „Wer zu Hause arbeitet, arbeitet weniger. Das Büro gehört zur Arbeit."',
  empf:'die Leserinnen und Leser des Forums',
  punkte:['deine Meinung zu dem Vorschlag','eine Begründung mit Beispiel','welche Alternativen oder Bedingungen es gibt','welche Vorteile deine Position hat'],
  anrede:'Liebe Forumsteilnehmerinnen und Forumsteilnehmer,',
  gruss:'Viele Grüße',
  woerter:[140,170],
  hilfe:[
    'Der Beitrag von … hat mich zum Widerspruch gereizt.',
    'Meiner Meinung nach ist die Frage falsch gestellt.',
    'Aus eigener Erfahrung kann ich sagen, dass …',
    'Eine sinnvolle Bedingung wäre, dass …',
    'Der größte Vorteil liegt darin, dass …'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Alle vier Sprachfunktionen: Meinung, Begründung, Alternative, Vorteil. Fehlt eine, kann das Kriterium mit E bewertet werden — und E heißt 0 Punkte für die ganze Aufgabe.'},
    {k:'Kohärenz', w:'Einleitung, Hauptteil in Absätzen, Schluss. Konnektoren sichtbar setzen: zwar … aber, allerdings, deshalb, letztlich.'},
    {k:'Wortschatz', w:'Präsenzpflicht, Vertrauensarbeitszeit, Erreichbarkeit, Produktivität, Arbeitsverdichtung, Vereinbarkeit.'},
    {k:'Strukturen', w:'Konzessivsätze („obwohl", „auch wenn"), Konjunktiv II für Vorschläge, Passiv für allgemeine Aussagen.'}
  ],
  muster:'Liebe Forumsteilnehmerinnen und Forumsteilnehmer,\n\nden Beitrag, in dem Homeoffice mit Faulheit gleichgesetzt wird, halte ich für zu einfach. Ich bin dafür, ein Recht auf zwei Tage Homeoffice einzuführen — allerdings nicht bedingungslos.\n\nMeine Erfahrung spricht dagegen, dass zu Hause weniger gearbeitet wird. In meiner Abteilung wurde während der Pandemie nachweislich mehr erledigt, weil die ständigen Zwischenfragen wegfielen. Das eigentliche Problem war ein anderes: Viele haben zu viel gearbeitet, weil der Weg nach Hause als Grenze fehlte.\n\nGenau hier müsste eine Regelung ansetzen. Sinnvoll wäre es, feste Erreichbarkeitszeiten zu vereinbaren und die Wochenarbeitszeit digital zu erfassen. Wo Anwesenheit tatsächlich nötig ist, etwa in der Pflege oder in der Produktion, sollte stattdessen ein Anspruch auf verlässliche Dienstpläne gelten.\n\nDer Vorteil einer solchen Lösung liegt auf der Hand: Betriebe binden Fachkräfte, Eltern gewinnen Zeit, und die Diskussion verschiebt sich vom Misstrauen zur Frage, welche Ergebnisse wir eigentlich erwarten.\n\nViele Grüße\nAmina Haddad',
  fallen:[
    'Nur die eigene Meinung wiederholen und die Alternativen weglassen. Bei Goethe B2 sind es vier Funktionen, nicht zwei.',
    'Wie ein Brief anfangen: „Sehr geehrte Damen und Herren". Ein Forumsbeitrag richtet sich an die Community.',
    'Aus dem Register fallen: „Das ist doch total Quatsch." Ein Forumsbeitrag ist halbformell, nicht salopp.',
    'Persönlich werden gegen den zitierten Nutzer. Man widerspricht dem Argument, nicht der Person.'
  ]
},

{
  id:'forum-handy-schule',
  lvl:'B2',
  art:'forum',
  pruef:'Goethe B2',
  t:'Forumsbeitrag: Handyverbot in der Schule',
  sit:'Ein Elternforum diskutiert, ob Smartphones in Grundschulen und weiterführenden Schulen vollständig verboten werden sollen. Eine Mutter schreibt: „Ohne Handy lernen Kinder wieder zuhören."',
  empf:'die Eltern im Forum',
  punkte:['deine Position','eine Begründung mit Beispiel aus dem Alltag','eine Alternative zum Totalverbot','welchen Nutzen deine Lösung hätte'],
  anrede:'Hallo in die Runde,',
  gruss:'Beste Grüße',
  woerter:[140,170],
  hilfe:[
    'Als Mutter eines Zehnjährigen sehe ich das differenzierter.',
    'Ein Verbot löst das Problem nur an der Oberfläche.',
    'In der Klasse meines Sohnes wurde …',
    'Statt eines Totalverbots könnte man …',
    'Damit lernen Kinder nicht Verzicht, sondern Umgang.'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Funktionen. Die Alternative ist der Punkt, der am häufigsten fehlt.'},
    {k:'Kohärenz', w:'Bezug auf den zitierten Beitrag im ersten Satz. Danach eigene Linie.'},
    {k:'Wortschatz', w:'Medienkompetenz, Ablenkung, Aufsichtspflicht, Regelwerk, Nutzungszeiten, Eigenverantwortung.'},
    {k:'Strukturen', w:'Vergleiche: „nicht … sondern", „statt … zu". Konjunktiv II für Vorschläge.'}
  ],
  muster:'Hallo in die Runde,\n\nden Wunsch nach Ruhe im Klassenzimmer kann ich gut verstehen, ein vollständiges Verbot halte ich trotzdem für den falschen Weg.\n\nMein Sohn ist zehn und geht in die fünfte Klasse. Nachdem seine Schule die Handys eingesammelt hatte, war es im Unterricht tatsächlich ruhiger. Verschwunden sind die Konflikte aber nicht: Sie haben sich in den Nachmittag verlagert, wo niemand mehr hinsieht. In den Klassenchats ging es nach dem Verbot rauer zu als vorher, weil kein Lehrer mehr mitbekam, was dort passierte.\n\nDeshalb würde ich es anders regeln. Während des Unterrichts bleiben die Geräte im Fach, in den Pausen sind sie erlaubt, und in jedem Schuljahr gibt es zwei Doppelstunden, in denen Chatverhalten und Datenschutz besprochen werden. Wer sich nicht an die Regel hält, gibt das Gerät für den Tag ab.\n\nDer Nutzen liegt darin, dass Kinder nicht nur Verzicht üben, sondern den Umgang lernen — und dass die Schule sieht, was sonst unbemerkt bleibt.\n\nBeste Grüße\nOlena Kovalenko',
  fallen:[
    'Nur „ich bin dagegen" schreiben und keinen eigenen Vorschlag machen — dann fehlt der dritte Leitpunkt.',
    'Statistiken erfinden, um zu überzeugen. Ein konkretes eigenes Beispiel wirkt stärker und ist prüfungssicher.',
    'Den Beitrag als Aufsatz mit Überschrift anlegen. Ein Forumsbeitrag hat Anrede und Gruß.',
    'Absätze weglassen. Bei ca. 150 Wörtern in einem Block leidet das Kriterium Kohärenz sofort.'
  ]
},

{
  id:'forum-vier-tage-woche',
  lvl:'B2',
  art:'forum',
  pruef:'Goethe B2',
  t:'Forumsbeitrag: Vier-Tage-Woche',
  sit:'In einem Forum für Berufstätige wird gefragt, ob die Vier-Tage-Woche bei gleichem Lohn ein realistisches Modell ist. Ein Nutzer schreibt: „Das kann sich nur die Bürowelt leisten. In der Pflege ist das Fantasie."',
  empf:'die Nutzerinnen und Nutzer des Forums',
  punkte:['deine Einschätzung','eine Begründung aus deinem Arbeitsumfeld','unter welchen Bedingungen es funktionieren könnte','welche Vorteile das brächte'],
  anrede:'Liebe Mitlesende,',
  gruss:'Viele Grüße',
  woerter:[140,170],
  hilfe:[
    'Der Einwand, dass das Modell nur im Büro funktioniert, greift zu kurz.',
    'Ich arbeite selbst im Schichtdienst und sehe …',
    'Voraussetzung wäre allerdings, dass …',
    'Denkbar wäre ein Modell mit …',
    'Der größte Gewinn wäre nicht Freizeit, sondern …'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Funktionen. Die Bedingungen sind hier der eigentliche Kern der Argumentation.'},
    {k:'Kohärenz', w:'Auf den Einwand eingehen, dann eigene Position entwickeln. Nicht am Zitat vorbeischreiben.'},
    {k:'Wortschatz', w:'Arbeitszeitmodell, Personaldecke, Auslastung, Fachkräftemangel, Krankenstand, Produktivität.'},
    {k:'Strukturen', w:'Irreale Bedingung: „Wenn genügend Personal vorhanden wäre, könnte …". Passiv für Allgemeines.'}
  ],
  muster:'Liebe Mitlesende,\n\nder Einwand, die Vier-Tage-Woche sei ein Bürothema, greift meiner Meinung nach zu kurz — obwohl er einen richtigen Kern hat.\n\nIch arbeite selbst im Schichtdienst in einem Pflegeheim. Bei uns wurde vor einem Jahr ein Modell mit vier Tagen à zehn Stunden eingeführt, zunächst nur in einem Wohnbereich. Das Ergebnis war überraschend: Der Krankenstand ist gesunken, und wir haben zwei Kolleginnen zurückgewonnen, die vorher gekündigt hatten. Gleichzeitig waren die langen Tage für ältere Kolleginnen hart.\n\nFunktionieren kann das Modell also nur unter Bedingungen: Es braucht eine Personaldecke, die Ausfälle verkraftet, echte Freiwilligkeit bei der Schichtlänge und eine Übergabe, die nicht in die Pause fällt. Ohne diese drei Punkte wird aus Arbeitszeitverkürzung Arbeitsverdichtung.\n\nDer eigentliche Vorteil liegt deshalb nicht in der zusätzlichen Freizeit, sondern darin, dass Menschen im Beruf bleiben. Bei dem Fachkräftemangel, den wir haben, ist das kein Luxus, sondern eine Rechnung, die aufgeht.\n\nViele Grüße\nNguyen Thi Mai',
  fallen:[
    'Nur allgemein über Arbeitszeit reden. Der zweite Leitpunkt verlangt ausdrücklich das eigene Arbeitsumfeld.',
    'Die Gegenposition ignorieren. Wer auf den zitierten Einwand nicht eingeht, verfehlt beim Kriterium Kohärenz Punkte.',
    '„Wenn genug Personal wäre" — im irrealen Bedingungssatz: „Wenn genug Personal vorhanden wäre".',
    'Am Ende keine eigene Bilanz ziehen. Der vierte Leitpunkt ist der Vorteil, nicht die Zusammenfassung.'
  ]
},

{
  id:'mail-vorgesetzte-fortbildung',
  lvl:'B2',
  art:'mail',
  pruef:'Goethe B2',
  t:'E-Mail an die Vorgesetzte: Fortbildung',
  sit:'Du willst an einer dreitägigen Fortbildung teilnehmen, die während der Arbeitszeit stattfindet und 480 Euro kostet. In dieser Woche ist im Betrieb viel zu tun. Du bittest um Freistellung und Kostenübernahme.',
  empf:'Frau Berger, Abteilungsleitung',
  punkte:['worum du bittest','wie deine Situation ist','welchen Vorschlag du machst','dass du Verständnis für die Lage zeigst'],
  anrede:'Sehr geehrte Frau Berger,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[95,120],
  hilfe:[
    'ich möchte Sie um Freistellung für eine Fortbildung vom … bis … bitten.',
    'Die Fortbildung behandelt genau die Software, die wir im Herbst einführen.',
    'Ich weiß, dass in dieser Woche der Jahresabschluss ansteht.',
    'Als Lösung schlage ich vor, dass ich die Vorbereitung vorziehe.',
    'Selbstverständlich habe ich Verständnis, wenn Sie zunächst intern klären müssen.'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Sprachfunktionen: bitten, Situation schildern, Vorschlag machen, Verständnis zeigen. Genau diese vier verlangt Goethe B2 Aufgabe 2.'},
    {k:'Kohärenz', w:'Rund 100 Wörter, vier Funktionen, keine Wiederholungen. Jeder Satz trägt eine Funktion.'},
    {k:'Wortschatz', w:'Freistellung, Kostenübernahme, Bildungsurlaub, Vertretung, Arbeitsbelastung, Priorität.'},
    {k:'Strukturen', w:'Konjunktiv II durchgehend für Bitten und Vorschläge. Nebensätze mit „falls" und „sofern".'}
  ],
  muster:'Sehr geehrte Frau Berger,\n\nich möchte Sie um Freistellung und Kostenübernahme für eine Fortbildung vom 14. bis 16. Oktober bitten. Sie behandelt die Warenwirtschaftssoftware, die wir im November einführen.\n\nMir ist bewusst, dass in dieser Woche der Quartalsabschluss ansteht und wir personell knapp sind. Deshalb schlage ich vor, meine Auswertungen bis zum 10. Oktober vorzuziehen und Herrn Kaya vorher einzuarbeiten; er hat schon zugesagt.\n\nFalls Sie zunächst intern klären müssen, habe ich dafür selbstverständlich Verständnis. In diesem Fall bitte ich um eine Rückmeldung bis Freitag, da die Anmeldefrist am 20. September endet.\n\nMit freundlichen Grüßen\nYusuf Demir',
  fallen:[
    'Die vierte Funktion „Verständnis zeigen" weglassen. Sie wirkt unwichtig, ist aber ein eigener Leitpunkt — und ein fehlender Leitpunkt kann über E die ganze Aufgabe auf 0 setzen.',
    'Über 100 Wörter deutlich hinausschreiben und dabei Funktionen doppeln.',
    '„Ich bitte um Freistellung, weil ich will diese Fortbildung machen." Im weil-Satz steht das Verb am Ende.',
    'Keine Frist nennen, obwohl die Anmeldung abläuft. Das gehört zur Situation.'
  ]
},

{
  id:'mail-kunde-lieferverzug',
  lvl:'B2',
  art:'mail',
  pruef:'telc B2',
  t:'E-Mail an einen Kunden: Lieferverzug',
  sit:'Du arbeitest im Vertrieb. Eine bestellte Maschine kommt drei Wochen später als zugesagt, weil ein Bauteil fehlt. Der Kunde hat für nächste Woche Monteure eingeplant. Du schreibst ihm.',
  empf:'Herr Özdemir, Geschäftsführer der Kundenfirma',
  punkte:['welche Bestellung betroffen ist','was der Grund für die Verzögerung ist','was du anbietest','wie es weitergeht'],
  anrede:'Sehr geehrter Herr Özdemir,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[110,140],
  hilfe:[
    'leider muss ich Sie über eine Verzögerung bei Ihrer Bestellung … informieren.',
    'Unser Zulieferer kann ein elektronisches Bauteil erst am … liefern.',
    'Als Ausgleich bieten wir Ihnen … an.',
    'Ein verbindlicher Liefertermin ist der 12. November.',
    'Für die Unannehmlichkeiten bitte ich Sie um Entschuldigung.'
  ],
  krit:[
    {k:'Aufgabenbewältigung', w:'Vier Punkte. Ein Angebot zum Ausgleich ist Pflicht, wenn dem Kunden Kosten entstehen.'},
    {k:'Kommunikative Gestaltung', w:'Schlechte Nachricht nach vorn, keine Ausreden, dann Lösung. Der Kunde will Termine, keine Erklärungen.'},
    {k:'Formale Richtigkeit', w:'Passiv und unpersönliche Formen für die Firmensicht: „Die Auslieferung erfolgt am …".'},
    {k:'Wortschatz', w:'Lieferverzug, Zulieferer, verbindlicher Termin, Ausgleich, Kulanz, Auftragsnummer.'}
  ],
  muster:'Sehr geehrter Herr Özdemir,\n\nleider muss ich Sie über eine Verzögerung bei Ihrer Bestellung informieren. Die Abfüllanlage AF-200, Auftragsnummer 2026-3318, kann nicht wie zugesagt am 22. Oktober, sondern erst am 12. November ausgeliefert werden.\n\nDer Grund ist ein elektronisches Steuerungsbauteil, das unser Zulieferer nach einem Brand in seinem Werk nicht rechtzeitig liefern kann. Wir haben eine zweite Bezugsquelle geprüft, konnten die Qualitätsfreigabe aber nicht beschleunigen.\n\nDa Sie Monteure eingeplant haben, bieten wir Ihnen an, die Montage auf unsere Kosten zu übernehmen und die Inbetriebnahme um zwei Tage zu verkürzen. Zusätzlich verzichten wir auf die Frachtkosten.\n\nDen 12. November bestätige ich Ihnen verbindlich; über den Versand informiere ich Sie am 5. November. Für die Unannehmlichkeiten bitte ich Sie um Entschuldigung.\n\nMit freundlichen Grüßen\nAmina Haddad, Vertrieb',
  fallen:[
    'Die schlechte Nachricht in den letzten Absatz stellen. Im Geschäftsverkehr steht sie im ersten Satz.',
    'Nur den Zulieferer beschuldigen und nichts anbieten. Der dritte Leitpunkt ist der Ausgleich.',
    '„Wir entschuldigen uns für die Verspätung" — bei Lieferungen heißt es „Verzögerung" oder „Lieferverzug"; „Verspätung" gehört zu Zügen.',
    'Keinen verbindlichen Termin nennen. „So schnell wie möglich" macht die Sache schlimmer.'
  ]
},

{
  id:'mail-kunde-preiserhoehung',
  lvl:'B2',
  art:'mail',
  pruef:'telc B2',
  t:'E-Mail an Stammkunden: Preisanpassung',
  sit:'Deine Firma muss die Preise zum 1. Januar um 6 Prozent erhöhen. Es geht um langjährige Stammkunden. Du sollst die Erhöhung ankündigen, ohne Kunden zu verlieren.',
  empf:'Familie Schneider, Stammkunden seit 2014',
  punkte:['worum es geht','wie die Erhöhung begründet ist','was gleich bleibt oder besser wird','welches Angebot du machst'],
  anrede:'Sehr geehrte Familie Schneider,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[110,140],
  hilfe:[
    'ich wende mich heute mit einer Nachricht an Sie, die ich lieber nicht schreiben würde.',
    'Zum 1. Januar müssen wir unsere Preise um sechs Prozent anpassen.',
    'Die Kosten für Material und Energie sind seit 2024 deutlich gestiegen.',
    'Unverändert bleiben die Lieferzeiten und Ihr persönlicher Ansprechpartner.',
    'Für Bestellungen bis zum 15. Dezember gelten noch die alten Preise.'
  ],
  krit:[
    {k:'Aufgabenbewältigung', w:'Vier Punkte. Das Angebot am Ende ist der Grund, warum der Kunde bleibt.'},
    {k:'Kommunikative Gestaltung', w:'Wertschätzung ohne Anbiederung. Konkrete Zahlen statt „leichte Anpassung".'},
    {k:'Formale Richtigkeit', w:'Konjunktiv II für Abmilderung, Passiv für unangenehme Sachverhalte, aber nicht durchgehend.'},
    {k:'Wortschatz', w:'Preisanpassung, Kostensteigerung, Konditionen, Bestandskunde, Übergangsfrist, Verlässlichkeit.'}
  ],
  muster:'Sehr geehrte Familie Schneider,\n\nseit 2014 gehören Sie zu unseren Kunden, deshalb möchte ich Sie persönlich informieren: Zum 1. Januar 2027 passen wir unsere Preise um sechs Prozent an.\n\nDer Grund liegt nicht in einer höheren Gewinnerwartung, sondern in den Kosten. Material und Energie sind seit 2024 um rund ein Viertel teurer geworden. Diese Steigerung haben wir zwei Jahre lang selbst getragen; weiter geht es nur, wenn wir an der Qualität sparen würden, und das wollen wir nicht.\n\nUnverändert bleiben Ihre Lieferzeiten, die zweijährige Garantie und Ihr Ansprechpartner. Zusätzlich richten wir für Bestandskunden eine feste Servicenummer ein.\n\nEin Angebot noch: Alle Aufträge, die bis zum 15. Dezember bei uns eingehen, rechnen wir zu den alten Preisen ab. Für Rückfragen erreichen Sie mich jederzeit.\n\nMit freundlichen Grüßen\nOlena Kovalenko, Kundenbetreuung',
  fallen:[
    'Die Erhöhung verstecken: „Wir aktualisieren unsere Konditionen." Kunden merken das und reagieren schlechter als auf Klartext.',
    'Nur begründen und nichts anbieten. Der vierte Leitpunkt ist das Angebot.',
    'Den Prozentsatz weglassen. Ohne Zahl wirkt die Ankündigung unehrlich.',
    '„Wir müssen die Preise erhöhen um sechs Prozent." Die Angabe gehört vor das Verb am Ende oder direkt hinter das Objekt.'
  ]
},

{
  id:'leserbrief-oepnv',
  lvl:'B2',
  art:'brief',
  pruef:'telc B2',
  t:'Leserbrief zum Nahverkehr',
  sit:'Die Lokalzeitung hat einen Kommentar veröffentlicht: „Wer über Klimaschutz redet, soll Bus fahren." Im Kommentar wird nicht erwähnt, dass auf dem Land abends kein Bus fährt. Du schreibst einen Leserbrief.',
  empf:'Redaktion der Ruhr Nachrichten, Leserbriefe',
  punkte:['auf welchen Artikel du reagierst','welchem Punkt du widersprichst','welche eigene Erfahrung du einbringst','welche Forderung du stellst'],
  anrede:'Sehr geehrte Redaktion,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[130,170],
  hilfe:[
    'zu Ihrem Kommentar „…" vom 14. März möchte ich Stellung nehmen.',
    'Der Autor unterstellt, dass jeder eine Wahl hat.',
    'In meinem Ort fährt der letzte Bus um 19.40 Uhr.',
    'Wer Spätdienst hat, kommt ohne Auto nicht nach Hause.',
    'Ich fordere die Verkehrsbetriebe auf, mindestens einen Spätbus einzurichten.'
  ],
  krit:[
    {k:'Aufgabenbewältigung', w:'Vier Punkte. Titel und Datum des Artikels gehören in den ersten Satz.'},
    {k:'Kommunikative Gestaltung', w:'Kurz, zugespitzt, ein Gedanke. Ein Leserbrief ist keine Erörterung.'},
    {k:'Formale Richtigkeit', w:'Indirekte Rede und Redewiedergabe: „Der Autor schreibt, es sei …".'},
    {k:'Wortschatz', w:'Nahverkehr, Taktung, Anbindung, Pendler, Daseinsvorsorge, Erreichbarkeit.'}
  ],
  muster:'Sehr geehrte Redaktion,\n\nzu Ihrem Kommentar „Wer über Klimaschutz redet, soll Bus fahren" vom 14. März möchte ich Stellung nehmen.\n\nDer Autor schreibt, es sei eine Frage der Haltung, ob man das Auto stehen lasse. Diesem Punkt widerspreche ich. Voraussetzung für eine Haltung ist eine Wahl — und die gibt es außerhalb der Städte oft nicht.\n\nIn meinem Ortsteil fährt der letzte Bus um 19.40 Uhr, sonntags gar keiner. Ich arbeite im Pflegeheim im Spätdienst und habe um 21.15 Uhr Feierabend. Mit dem Bus wäre ich um 6.40 Uhr des Folgetags zu Hause; ohne Auto könnte ich diese Stelle nicht annehmen. Von einer freien Entscheidung kann also keine Rede sein.\n\nDeshalb meine Forderung an die Verkehrsbetriebe: Ein Spätbus um 22 Uhr auf den Linien in die Randbezirke, und zwar auch am Wochenende. Solange der fehlt, ist der Appell an die Bürger nur billig.\n\nMit freundlichen Grüßen\nNguyen Thi Mai',
  fallen:[
    'Den Artikel nicht genau benennen. Redaktionen drucken Leserbriefe ohne Titel und Datum nicht ab.',
    'Über alles gleichzeitig schreiben. Ein Leserbrief widerspricht einem Punkt, nicht dem ganzen Weltbild.',
    '„Der Autor schreibt, dass es ist eine Frage der Haltung." In der indirekten Rede: „dass es eine Frage der Haltung sei" oder „ist" — Verb am Ende.',
    'Keine Forderung stellen. Der vierte Leitpunkt macht aus der Kritik einen Beitrag.'
  ]
},

{
  id:'stellungnahme-schichtplan',
  lvl:'B2',
  art:'brief',
  pruef:'frei',
  t:'Stellungnahme zum neuen Schichtplan',
  sit:'Die Leitung will einen neuen Schichtplan einführen: kürzere Wechsel zwischen Spät- und Frühdienst, dafür ein freies Wochenende mehr. Der Betriebsrat bittet die Beschäftigten um schriftliche Stellungnahmen.',
  empf:'Betriebsrat, Herr Özdemir',
  punkte:['wie du den Vorschlag insgesamt bewertest','was du positiv siehst','welche Bedenken du hast','welche Änderung du vorschlägst'],
  anrede:'Sehr geehrter Herr Özdemir,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[130,170],
  hilfe:[
    'zum Entwurf des neuen Schichtplans nehme ich wie folgt Stellung.',
    'Positiv bewerte ich, dass jeder ein Wochenende mehr frei hat.',
    'Bedenken habe ich beim Wechsel von der Spätschicht in den Frühdienst.',
    'Zwischen 21.15 Uhr und 6 Uhr bleiben weniger als neun Stunden Ruhezeit.',
    'Ich schlage vor, den Wechsel auf höchstens einmal pro Woche zu begrenzen.'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Punkte. Eine Stellungnahme muss abwägen, nicht nur kritisieren.'},
    {k:'Kohärenz', w:'Gesamturteil, Vorteil, Einwand, Vorschlag. Diese Reihenfolge wirkt sachlich.'},
    {k:'Wortschatz', w:'Ruhezeit, Schichtwechsel, Arbeitszeitgesetz, Belastung, Dienstplan, Umsetzung.'},
    {k:'Strukturen', w:'Einräumen und einwenden: „zwar … aber", „einerseits … andererseits", „gleichwohl".'}
  ],
  muster:'Sehr geehrter Herr Özdemir,\n\nzum Entwurf des neuen Schichtplans nehme ich gern Stellung. Insgesamt halte ich ihn für einen Fortschritt, an einer Stelle sehe ich jedoch ein Risiko.\n\nPositiv bewerte ich, dass jede Kollegin ein zusätzliches freies Wochenende erhält. Für Familien mit schulpflichtigen Kindern ist das mehr wert als eine kleine Zulage, und die Planbarkeit über sechs Wochen ist eine deutliche Verbesserung gegenüber dem heutigen Zustand.\n\nBedenken habe ich beim direkten Wechsel von der Spätschicht in den Frühdienst. Zwischen Dienstende um 21.15 Uhr und Dienstbeginn um 6 Uhr liegen weniger als neun Stunden; mit Fahrzeit bleiben etwa sechs Stunden Schlaf. Nach meiner Erfahrung steigt bei diesem Rhythmus die Fehlerquote bei der Medikamentengabe.\n\nIch schlage deshalb vor, den Wechsel auf höchstens einmal pro Woche zu begrenzen und die Ruhezeit auf elf Stunden festzuschreiben. Das freie Wochenende bliebe davon unberührt.\n\nMit freundlichen Grüßen\nOlena Kovalenko',
  fallen:[
    'Nur ablehnen. Eine Stellungnahme ohne anerkannten Vorteil wird von der Leitung als Blockade gelesen.',
    'Bedenken ohne Zahlen äußern: „Das ist zu anstrengend." Mit Uhrzeiten und Ruhezeit wird daraus ein Argument.',
    'Keinen konkreten Änderungsvorschlag machen — genau danach fragt der Betriebsrat.',
    '„Ich nehme Stellung zu dem Entwurf, der mir nicht gefällt." Persönlicher Geschmack ist kein Kriterium; die Belastung ist eines.'
  ]
},

{
  id:'bericht-arbeitsunfall',
  lvl:'B2',
  art:'bericht',
  pruef:'frei',
  t:'Bericht über einen Arbeitsunfall',
  sit:'In deiner Schicht ist ein Kollege beim Abladen von einer Ladefläche gestürzt und hat sich das Handgelenk gebrochen. Du bist Schichtleiterin und musst den Unfallbericht für die Betriebsleitung und die Unfallkasse schreiben.',
  empf:'Betriebsleitung und Berufsgenossenschaft',
  punkte:['wann, wo und wer','was genau passiert ist','welche Maßnahmen sofort ergriffen wurden','welche Ursache und welche Empfehlung du siehst'],
  anrede:'Unfallbericht',
  gruss:'Schichtleitung',
  woerter:[135,175],
  hilfe:[
    'Am 14. Mai um 15.40 Uhr ereignete sich in Halle 2 ein Unfall.',
    'Herr Kaya rutschte beim Abladen von der nassen Ladefläche.',
    'Er stützte sich mit der rechten Hand ab.',
    'Ich leistete Erste Hilfe und rief den Rettungsdienst.',
    'Als Ursache sehe ich die fehlende Antirutschmatte und die schlechte Beleuchtung.',
    'Ich empfehle, die Rampe mit einem Belag auszustatten.'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Punkte. Ein Bericht beantwortet zuerst: wann, wo, wer, was.'},
    {k:'Kohärenz', w:'Chronologisch und sachlich. Keine Bewertung der Person, nur des Ablaufs.'},
    {k:'Wortschatz', w:'sich ereignen, Erste Hilfe leisten, Rettungsdienst, Verbandbuch, Gefährdungsbeurteilung, Unfallursache.'},
    {k:'Strukturen', w:'Präteritum, nicht Perfekt — das ist die Berichtsform. Passiv für Maßnahmen: „Die Rampe wurde gesperrt."'}
  ],
  muster:'Unfallbericht\n\nAm 14. Mai 2026 ereignete sich um 15.40 Uhr in Halle 2 an der Laderampe 3 ein Arbeitsunfall. Beteiligt war Herr Murat Kaya, Lagerarbeiter, tätig in der Spätschicht.\n\nHerr Kaya entlud gemeinsam mit einem Kollegen einen Sattelauflieger. Beim Rückwärtsgehen auf der Ladefläche rutschte er auf einer nassen Folie aus und stürzte etwa einen Meter tief auf den Betonboden. Dabei stützte er sich mit der rechten Hand ab.\n\nIch leistete Erste Hilfe, kühlte das Handgelenk und alarmierte um 15.44 Uhr den Rettungsdienst. Herr Kaya wurde um 16.10 Uhr in das Klinikum Bochum gebracht; dort wurde ein Bruch des rechten Handgelenks festgestellt. Die Rampe wurde gesperrt und der Eintrag im Verbandbuch vorgenommen.\n\nAls Ursachen sehe ich zwei Punkte: Auf der Ladefläche lag Folie, die bei Regen rutschig wird, und die Beleuchtung der Rampe war ausgefallen. Ich empfehle, Antirutschmatten anzuschaffen und die Beleuchtung in die monatliche Prüfung aufzunehmen.\n\nSchichtleitung\nAmina Haddad',
  fallen:[
    'Im Perfekt schreiben. Berichte stehen im Präteritum: „ereignete sich", „rutschte", „stürzte".',
    'Den Kollegen bewerten: „Er war unvorsichtig." Ein Unfallbericht beschreibt Abläufe, nicht Schuld.',
    'Die Uhrzeiten weglassen. Für die Berufsgenossenschaft sind Zeitpunkte die wichtigste Information.',
    'Keine Empfehlung geben. Der vierte Punkt ist der einzige, der künftige Unfälle verhindert.'
  ]
},

{
  id:'bericht-praktikum-b2',
  lvl:'B2',
  art:'bericht',
  pruef:'frei',
  t:'Praktikumsbericht für die Weiterbildung',
  sit:'Für deine Weiterbildung musst du einen kurzen Bericht über dein vierwöchiges Praktikum in einer Kita abgeben. Der Träger will wissen, was du getan und gelernt hast.',
  empf:'Bildungswerk Ruhr, Praxisbegleitung',
  punkte:['wo und wann das Praktikum war','welche Aufgaben du hattest','was besonders schwierig war','was du daraus mitnimmst'],
  anrede:'Bericht über das Praktikum vom 6. bis 31. Mai 2026',
  gruss:'',
  woerter:[135,175],
  hilfe:[
    'Das Praktikum absolvierte ich in der Kita Sonnenschein in Dortmund.',
    'Zu meinen Aufgaben gehörten der Frühdienst, die Begleitung der Freispielzeit und die Vorbereitung von Angeboten.',
    'Schwierig war für mich der Umgang mit Konflikten zwischen Kindern.',
    'Rückblickend nehme ich vor allem mit, dass …',
    'Für meine weitere Ausbildung folgt daraus …'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Punkte. Das Schwierige gehört ausdrücklich hinein — ein Bericht ohne Reibung wirkt unglaubwürdig.'},
    {k:'Kohärenz', w:'Sachlicher Aufbau mit Absätzen, keine Tagebuchform.'},
    {k:'Wortschatz', w:'Freispiel, Angebot, Eingewöhnung, Beobachtung, Dokumentation, Reflexion.'},
    {k:'Strukturen', w:'Präteritum für den Ablauf, Präsens für die Auswertung. Nominalisierungen für die Reflexion.'}
  ],
  muster:'Bericht über das Praktikum vom 6. bis 31. Mai 2026\n\nDas Praktikum absolvierte ich in der Kita Sonnenschein in Dortmund, Gruppe „Marienkäfer" mit 22 Kindern zwischen drei und sechs Jahren. Meine Praxisanleiterin war Frau Berger.\n\nZu meinen Aufgaben gehörten der Frühdienst ab 7 Uhr, die Begleitung der Freispielzeit und zweimal wöchentlich ein eigenes Angebot. Ich führte unter anderem eine Bewegungseinheit im Garten und eine Vorlesestunde in zwei Sprachen durch. Außerdem lernte ich, Beobachtungen im Portfolio der Kinder zu dokumentieren.\n\nSchwierig war für mich der Umgang mit Konflikten. In der ersten Woche ging ich sofort dazwischen, wenn zwei Kinder um ein Spielzeug stritten. Frau Berger zeigte mir, dass es besser ist, zunächst abzuwarten und die Kinder zu einer eigenen Lösung zu führen. Das auszuhalten kostete mich Überwindung.\n\nRückblickend nehme ich mit, dass pädagogische Arbeit weniger aus Eingreifen als aus Beobachten besteht. Für meine weitere Ausbildung möchte ich deshalb den Schwerpunkt Sprachförderung wählen.',
  fallen:[
    'Den Bericht als Tagebuch schreiben: „Am Montag habe ich …, am Dienstag habe ich …". Gefragt sind Aufgabenbereiche, nicht Tage.',
    'Nur Positives berichten. Der dritte Leitpunkt verlangt die Schwierigkeit, und ohne sie fehlt die Reflexion.',
    '„Ich habe gelernt viele Dinge." Reihenfolge und Präzision: „Ich lernte, Beobachtungen zu dokumentieren."',
    'Am Ende keine Folgerung ziehen. Der vierte Punkt ist der Transfer, nicht die Zusammenfassung.'
  ]
},

{
  id:'protokoll-teambesprechung',
  lvl:'B2',
  art:'protokoll',
  pruef:'frei',
  t:'Protokoll einer Teambesprechung',
  sit:'Du hast in der Teambesprechung protokolliert. Themen waren die Urlaubsplanung im Sommer, die neue Dokumentationssoftware und Beschwerden über die Pausenregelung. Es wurden drei Beschlüsse gefasst.',
  empf:'das Team und die Abteilungsleitung',
  punkte:['Rahmen: Datum, Zeit, Teilnehmende, Leitung','die behandelten Themen','die Beschlüsse','wer bis wann was macht'],
  anrede:'Protokoll der Teambesprechung',
  gruss:'',
  woerter:[130,170],
  hilfe:[
    'Datum: 12. Juni 2026, 14 bis 15.15 Uhr, Besprechungsraum 2',
    'Teilnehmende: acht Personen, Leitung: Frau Berger, Protokoll: …',
    'Zu Punkt 1 wurde beschlossen, dass …',
    'Herr Kaya erstellt bis zum 20. Juni eine Übersicht.',
    'Der nächste Termin findet am … statt.'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Punkte. Ohne Zuständigkeit und Frist ist ein Protokoll wertlos.'},
    {k:'Kohärenz', w:'Gliederung nach Tagesordnungspunkten, nicht nach Gesprächsverlauf. Wer wann was gesagt hat, gehört nur hinein, wenn es für den Beschluss zählt.'},
    {k:'Wortschatz', w:'Tagesordnungspunkt, Beschluss, Zuständigkeit, Frist, Abstimmung, vertagen.'},
    {k:'Strukturen', w:'Passiv und unpersönliche Formen: „Es wurde beschlossen", „Die Regelung wird geprüft." Präsens für Beschlüsse, Präteritum für den Verlauf.'}
  ],
  muster:'Protokoll der Teambesprechung\n\nDatum: 12. Juni 2026, 14.00 bis 15.15 Uhr, Besprechungsraum 2\nTeilnehmende: acht Mitarbeitende der Station 3\nLeitung: Frau Berger · Protokoll: Olena Kovalenko\n\n1. Urlaubsplanung Sommer\nDie Wünsche für Juli und August liegen vor; in der Woche vom 3. bis 9. August gibt es fünf Überschneidungen. Beschluss: Die Woche wird nach Dienstjahren vergeben, im nächsten Jahr wird gewechselt. Frau Berger erstellt den endgültigen Plan bis zum 25. Juni.\n\n2. Neue Dokumentationssoftware\nDie Einführung ist für den 1. September geplant. Beschluss: Es finden zwei Schulungen à drei Stunden während der Arbeitszeit statt. Herr Kaya klärt bis zum 20. Juni die Termine mit der IT.\n\n3. Pausenregelung\nMehrere Kolleginnen berichteten, dass Pausen im Spätdienst regelmäßig entfallen. Beschluss: Die Pausen werden vier Wochen dokumentiert und am 15. Juli erneut besprochen. Zuständig ist die Schichtleitung.\n\nNächster Termin: 15. Juli 2026, 14.00 Uhr.',
  fallen:[
    'Den Gesprächsverlauf nacherzählen: „Dann sagte Frau Berger …". Ein Ergebnisprotokoll hält Beschlüsse fest, keine Dialoge.',
    'Zuständigkeit oder Frist weglassen. Ein Beschluss ohne Namen und Datum wird nicht umgesetzt.',
    'Meinungen von Kollegen wörtlich zitieren und dabei Kritik personalisieren.',
    'Kopf und nächsten Termin vergessen. Beides gehört zum Rahmen und ist der erste Leitpunkt.'
  ]
},

/* ==================== C1 — 12 Aufgaben ====================
   Goethe C1 Schreiben, modular seit 2024:
     Aufgabe 1 (50 Min.): Diskussionsbeitrag in einem
       Online-Forum, ca. 230 Wörter, argumentativ.
     Aufgabe 2 (25 Min.): halbformelle E-Mail oder
       Beschwerde, ca. 120 Wörter, vier Sprachfunktionen.
   Es gibt KEINE Grafikbeschreibung mehr. Die Zusammenfassung
   wissenschaftlicher Texte gehört zum TestDaF, nicht zu C1.
   Bewertung Goethe C1: Aufgabenerfüllung · Kohärenz ·
   Wortschatz · Strukturen. E bei Aufgabenerfüllung = 0 Punkte
   für die gesamte Aufgabe.
   ========================================================== */

{
  id:'forum-c1-arbeitszeit',
  lvl:'C1',
  art:'forum',
  pruef:'Goethe C1',
  t:'Forumsbeitrag: Ist lebenslange Erwerbsarbeit noch zeitgemäß?',
  sit:'Ein Online-Magazin diskutiert unter der Überschrift „Arbeiten bis 70?" die Frage, ob die Lebensarbeitszeit weiter verlängert werden soll. Ein Beitrag lautet: „Wer länger lebt, muss länger arbeiten. Alles andere ist Rechenschwäche." Du schreibst einen Diskussionsbeitrag.',
  empf:'die Leserschaft des Magazinforums',
  punkte:['deine Position zur Verlängerung der Lebensarbeitszeit','eine Begründung mit Bezug auf unterschiedliche Berufsgruppen','Alternativen zur reinen Anhebung des Renteneintrittsalters','welche Folgen deine Lösung hätte'],
  anrede:'Liebe Diskutierende,',
  gruss:'Mit besten Grüßen',
  woerter:[210,250],
  hilfe:[
    'Die Zuspitzung auf eine Rechenaufgabe verkennt, dass …',
    'Zu Recht wird darauf verwiesen, dass die Lebenserwartung gestiegen ist. Übersehen wird dabei jedoch …',
    'Wer in der Pflege oder auf dem Bau arbeitet, erreicht das Rentenalter im Durchschnitt in deutlich schlechterem Gesundheitszustand.',
    'Statt einer pauschalen Anhebung wäre eine berufsgruppenspezifische Regelung denkbar.',
    'Mittelfristig hätte das zur Folge, dass …',
    'Entscheidend erscheint mir weniger die Zahl der Jahre als die Frage, unter welchen Bedingungen sie geleistet werden.'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Alle vier Leitpunkte, argumentativ entfaltet, nicht nur erwähnt. Wird dieses Kriterium mit E bewertet, ist die gesamte Aufgabe 0 Punkte.'},
    {k:'Kohärenz', w:'Einleitung mit Bezug auf den zitierten Beitrag, gegliederter Hauptteil, Schluss mit eigener Bilanz. Verweismittel: dieser Einwand, ebendort, im Gegensatz dazu.'},
    {k:'Wortschatz', w:'Präzise statt allgemein: Erwerbsbiografie, Renteneintrittsalter, körperliche Beanspruchung, Umverteilung, Beitragsbemessungsgrenze.'},
    {k:'Strukturen', w:'Nominalisierung, Partizipialkonstruktionen, Passiversatzformen, erweiterte Attribute, konzessive Verknüpfung. Nicht als Schmuck, sondern zur Verdichtung.'}
  ],
  muster:'Liebe Diskutierende,\n\ndie Zuspitzung, längeres Leben verlange zwingend längeres Arbeiten, hat den Charme einer einfachen Rechnung — und ihre Schwäche.\n\nRichtig ist, dass die durchschnittliche Lebenserwartung gestiegen ist und ein umlagefinanziertes System auf ein Verhältnis von Einzahlenden zu Beziehenden angewiesen bleibt. Der Schluss auf eine pauschale Anhebung des Renteneintrittsalters unterschlägt jedoch, dass sich die gewonnenen Jahre höchst ungleich verteilen. Zwischen dem oberen und dem unteren Einkommensfünftel liegen in Deutschland mehrere Jahre gesunder Lebenszeit. Eine Dachdeckerin und eine Hochschullehrerin arbeiten also nicht dieselben zwei Jahre länger; die eine verlängert ihre Berufstätigkeit, die andere ihre Erwerbsminderung. Die Rechnung geht also nur im Aggregat auf; individuell geht sie zulasten derjenigen, deren Körper früher aufgibt.\n\nStatt einer einheitlichen Grenze wären deshalb differenzierte Modelle zu erwägen: ein flexibler Korridor, in dem der Zugang zur abschlagsfreien Rente an die Zahl der Beitragsjahre und nicht allein an das Lebensalter gekoppelt wird; verpflichtende Angebote zum Berufswechsel nach körperlich belastenden Jahrzehnten; und eine breitere Finanzierungsbasis, in die auch Einkünfte oberhalb der heutigen Bemessungsgrenze einbezogen werden.\n\nDie Folgen wären zwiespältig, aber tragbar. Der Verwaltungsaufwand stiege, über die Zuordnung einzelner Tätigkeiten würde erbittert gestritten, und die Planbarkeit für die Betriebe nähme zunächst ab. Gewonnen wäre allerdings etwas, das die gegenwärtige Debatte vermissen lässt: eine Regelung, die nicht diejenigen am härtesten trifft, die ohnehin am wenigsten von der gestiegenen Lebenserwartung haben.\n\nMit besten Grüßen\nAmina Haddad',
  fallen:[
    'Auf C1 in Aufzählungen ausweichen: „Erstens ist es teuer, zweitens ist es ungerecht." Erwartet wird ein entfalteter Argumentationsgang mit Einräumung und Gegenzug.',
    'Den vierten Leitpunkt (Folgen) mit einer Zusammenfassung verwechseln. Folgen sind Prognosen, keine Wiederholungen.',
    'Überambitionierter Wortschatz an der falschen Stelle. Ein falsch verwendetes Fremdwort schadet auf C1 mehr als ein einfaches, korrektes.',
    'Deutlich unter 230 Wörter bleiben, weil die Zeit fehlt. Die 50 Minuten für Aufgabe 1 reichen nur, wenn die Gliederung in den ersten fünf Minuten steht.'
  ]
},

{
  id:'forum-c1-ki-arbeitswelt',
  lvl:'C1',
  art:'forum',
  pruef:'Goethe C1',
  t:'Forumsbeitrag: Künstliche Intelligenz am Arbeitsplatz',
  sit:'In einem Forum für Berufstätige wird diskutiert, ob Unternehmen den Einsatz von KI-Systemen bei der Bewerberauswahl offenlegen müssen. Ein Beitrag lautet: „Ein Algorithmus ist objektiver als jede Personalerin mit schlechter Laune."',
  empf:'die Nutzerinnen und Nutzer des Forums',
  punkte:['deine Position zur Offenlegungspflicht','warum der Vergleich mit menschlichen Entscheidungen zu kurz greift','welche Regelung du vorschlägst','welche Wirkung von ihr zu erwarten wäre'],
  anrede:'Liebe Forumsgemeinde,',
  gruss:'Viele Grüße',
  woerter:[210,250],
  hilfe:[
    'Der Einwand, Algorithmen seien frei von Tagesform, trifft einen wunden Punkt — und geht dennoch am Kern vorbei.',
    'Verzerrungen verschwinden nicht dadurch, dass sie automatisiert werden.',
    'Anders als ein Mensch lässt sich ein Modell nicht befragen, warum es entschieden hat.',
    'Sinnvoll wäre eine Pflicht, den Einsatz solcher Systeme im Ausschreibungstext auszuweisen.',
    'Zu erwarten wäre nicht weniger Automatisierung, sondern eine bessere.'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Leitpunkte. Die vorgeschlagene Regelung muss konkret genug sein, um überprüfbar zu wirken.'},
    {k:'Kohärenz', w:'Das Zitat aufgreifen, einräumen, widerlegen, weiterführen. Die Gegenposition darf nicht als Strohmann erscheinen.'},
    {k:'Wortschatz', w:'Vorauswahl, Verzerrung, Nachvollziehbarkeit, Rechenschaftspflicht, Trainingsdaten, Diskriminierungsrisiko.'},
    {k:'Strukturen', w:'Konjunktiv I in der Redewiedergabe, Konjunktiv II für Vorschläge, Partizipialattribute zur Verdichtung.'}
  ],
  muster:'Liebe Forumsgemeinde,\n\nder Einwand, ein Algorithmus habe keine schlechte Laune, trifft einen wunden Punkt der menschlichen Entscheidung — und geht dennoch am eigentlichen Problem vorbei. Ich halte eine Offenlegungspflicht für notwendig.\n\nDass Personalentscheidungen von Sympathie, Namen und Fotos beeinflusst werden, ist gut belegt. Daraus folgt jedoch nicht, dass automatisierte Verfahren neutral wären. Sie lernen aus vergangenen Einstellungen und schreiben damit genau jene Muster fort, die sie ersetzen sollen. Der entscheidende Unterschied liegt anderswo: Eine Personalerin lässt sich fragen, warum sie eine Bewerbung aussortiert hat. Ein Modell, dessen Gewichtungen in Millionen Parametern liegen, gibt darüber keine Auskunft, und die Betroffenen erfahren nicht einmal, dass eine Maschine beteiligt war. Aus einem individuellen Vorurteil, das sich im Einzelfall benennen und korrigieren ließe, wird auf diese Weise eine systematische Regel, die tausendfach angewandt wird, ohne je überprüft zu werden.\n\nIch schlage deshalb drei Punkte vor: Erstens muss bereits in der Ausschreibung stehen, ob und an welcher Stelle des Verfahrens automatisiert vorausgewählt wird. Zweitens sollte auf Nachfrage mitgeteilt werden, welche Kriterien in die Bewertung eingeflossen sind. Drittens braucht es bei einer Ablehnung in der automatisierten Vorauswahl ein Recht auf menschliche Überprüfung.\n\nDie Wirkung wäre weniger dramatisch, als Unternehmen befürchten. Kaum ein Betrieb würde auf die Technik verzichten; wohl aber müssten die Anbieter erklären können, was ihre Systeme messen. Transparenz bremst die Automatisierung nicht — sie zwingt sie, besser zu werden.\n\nViele Grüße\nOlena Kovalenko',
  fallen:[
    'Die Gegenposition karikieren, statt ihr Recht zu geben. Auf C1 wird die Fähigkeit zur Einräumung bewertet.',
    'Technische Details ausbreiten und die geforderte Regelung schuldig bleiben — der dritte Leitpunkt bleibt dann unbearbeitet.',
    'Mit rhetorischen Fragen füllen: „Wollen wir das wirklich?" Sie ersetzen kein Argument und kosten Wörter.',
    'Konjunktiv I und II vermischen: „Er sagte, es wäre objektiver." In der neutralen Redewiedergabe steht „es sei".'
  ]
},

{
  id:'forum-c1-ehrenamt',
  lvl:'C1',
  art:'forum',
  pruef:'Goethe C1',
  t:'Forumsbeitrag: Soll ehrenamtliches Engagement belohnt werden?',
  sit:'Eine Kommune erwägt, Ehrenamtliche mit einer Jahrespauschale von 600 Euro und Vergünstigungen im Nahverkehr zu unterstützen. Im Forum heißt es: „Wer für Geld hilft, hilft nicht mehr ehrenamtlich."',
  empf:'die Leserinnen und Leser des Bürgerforums',
  punkte:['deine Haltung zu einer finanziellen Anerkennung','das Verhältnis von Motivation und Vergütung','wie eine sinnvolle Ausgestaltung aussehen könnte','welche Risiken bestehen und wie sie zu begrenzen wären'],
  anrede:'Sehr geehrte Mitdiskutierende,',
  gruss:'Freundliche Grüße',
  woerter:[210,250],
  hilfe:[
    'Die Sorge, Geld verdränge das Motiv, ist nicht aus der Luft gegriffen.',
    'Die Forschung zur Verdrängung innerer Motivation zeigt allerdings ein differenzierteres Bild.',
    'Zu unterscheiden ist zwischen Aufwandsersatz und Entlohnung.',
    'Denkbar wäre, die Pauschale an nachgewiesene Auslagen zu koppeln.',
    'Um Mitnahmeeffekte zu begrenzen, müsste …'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Leitpunkte. Der vierte verlangt ausdrücklich Risiken UND ihre Begrenzung — beides.'},
    {k:'Kohärenz', w:'Begriffliche Klärung vor der Bewertung. Wer Aufwandsersatz und Entlohnung nicht trennt, argumentiert an sich selbst vorbei.'},
    {k:'Wortschatz', w:'Aufwandsentschädigung, Mitnahmeeffekt, Anerkennungskultur, Verdrängungseffekt, Zivilgesellschaft, Bagatellgrenze.'},
    {k:'Strukturen', w:'Erweiterte Infinitivgruppen, Gerundivkonstruktion („die zu begrenzenden Risiken"), Passiversatz mit „lassen" und „sein zu".'}
  ],
  muster:'Sehr geehrte Mitdiskutierende,\n\ndie Sorge, Geld verdränge das Motiv, ist nicht aus der Luft gegriffen. Dennoch halte ich den Vorschlag der Kommune für richtig — vorausgesetzt, er wird als Aufwandsersatz und nicht als Entlohnung ausgestaltet.\n\nDie Unterscheidung ist keine Wortklauberei. Wer die Übungsleiterin eines Sportvereins für ihre Stunden bezahlt, verwandelt eine freiwillige Tätigkeit in ein Arbeitsverhältnis mit schlechtem Stundenlohn; wer ihr Fahrtkosten, Waschmittel für die Trikots und den Beitrag zum Übungsleiterschein erstattet, beseitigt lediglich eine finanzielle Hürde. Die Verdrängungsforschung zeigt denn auch, dass innere Motivation vor allem dort erodiert, wo Bezahlung als Kontrolle erlebt wird, nicht dort, wo sie als Anerkennung ankommt.\n\nEine sinnvolle Ausgestaltung würde daher an nachgewiesene Auslagen anknüpfen, den Betrag deckeln und ihn allen Bereichen gleichermaßen zugänglich machen — nicht nur der Feuerwehr, sondern ebenso der Nachbarschaftshilfe, deren Arbeit selten fotografiert wird. Ebenso wäre zu regeln, dass die Pauschale weder auf Sozialleistungen angerechnet noch besteuert wird; andernfalls käme sie ausgerechnet bei jenen nicht an, für die sie den Unterschied machte.\n\nZu den Risiken zählen Mitnahmeeffekte und ein bürokratischer Nachweisapparat, der abschreckt. Beides ließe sich begrenzen: durch eine Bagatellgrenze, unterhalb derer ein formloser Nachweis genügt, und durch eine Evaluation nach drei Jahren. Der Ausschluss von Vereinen mit hauptamtlichem Personal wäre hingegen kontraproduktiv, weil gerade dort die Einarbeitung der Freiwilligen geleistet wird.\n\nEntscheidend bleibt, dass die Kommune Anerkennung ausdrückt, ohne einen Markt zu schaffen.\n\nFreundliche Grüße\nYusuf Demir',
  fallen:[
    'Die Begriffe nicht klären. Ohne die Unterscheidung von Aufwandsersatz und Entlohnung bleibt der zweite Leitpunkt oberflächlich.',
    'Nur Risiken nennen, ohne Gegenmaßnahmen. Der Leitpunkt fordert beides, und ein halb bearbeiteter Punkt zieht die Aufgabenerfüllung nach unten.',
    'Ins Erzählerische kippen: „Meine Tante hilft seit dreißig Jahren …". Anekdoten sind auf C1 zulässig, aber nur als Beleg, nicht als Argumentersatz.',
    '„Die zu begrenzende Risiken" — im Gerundivum wird das Partizip wie ein Adjektiv dekliniert: „die zu begrenzenden Risiken".'
  ]
},

{
  id:'forum-c1-sprachnachweis',
  lvl:'C1',
  art:'forum',
  pruef:'Goethe C1',
  t:'Forumsbeitrag: Sprachnachweis für die Einbürgerung',
  sit:'In einem Forum wird diskutiert, ob für die Einbürgerung künftig C1 statt B1 verlangt werden soll. Ein Beitrag lautet: „Wer hier Bürger sein will, muss die Sprache beherrschen. B1 ist ein Witz."',
  empf:'die Teilnehmenden der Forumsdiskussion',
  punkte:['deine Position zur Anhebung des Niveaus','welche Funktion ein Sprachnachweis überhaupt erfüllen soll','welche Alternativen es zu einer reinen Niveauanhebung gibt','welche Folgen für wen zu erwarten wären'],
  anrede:'Liebe Mitdiskutierende,',
  gruss:'Beste Grüße',
  woerter:[210,250],
  hilfe:[
    'Bevor über das Niveau gestritten wird, wäre zu klären, wozu der Nachweis dienen soll.',
    'Als Instrument der Teilhabe wirkt er anders denn als Hürde.',
    'Nicht selten scheitert der Nachweis nicht an der Sprachkompetenz, sondern am Prüfungsformat.',
    'Denkbar wären niveaudifferenzierte Nachweise je nach Erwerbsbiografie.',
    'Betroffen wären vor allem jene, die im Schichtdienst arbeiten und Kinder betreuen.'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Leitpunkte. Der zweite verlangt eine Zweckbestimmung, keine Meinung.'},
    {k:'Kohärenz', w:'Vom Zweck über die Mittel zu den Folgen. Wer mit der eigenen Betroffenheit beginnt, verliert die argumentative Distanz.'},
    {k:'Wortschatz', w:'Teilhabe, Integrationsleistung, Niveaustufe, Nachweispflicht, Erwerbsbiografie, Härtefallregelung.'},
    {k:'Strukturen', w:'Unpersönliche Konstruktionen („zu klären wäre", „es ließe sich einwenden"), Vergleichssätze, Konditionalgefüge.'}
  ],
  muster:'Liebe Mitdiskutierende,\n\nbevor über Niveaustufen gestritten wird, wäre zu klären, wozu ein Sprachnachweis eigentlich dient. Erst daraus ergibt sich, ob C1 sinnvoll ist. Meine Antwort lautet: Er ist es nicht.\n\nSoll der Nachweis sicherstellen, dass jemand am gesellschaftlichen Leben teilnehmen, einen Mietvertrag verstehen und einen Elternabend bestreiten kann, so beschreibt B1 diese Schwelle recht genau. Soll er hingegen als Filter wirken, der die Zahl der Einbürgerungen senkt, dann ist C1 das wirksamere Instrument — nur sollte man das dann auch so nennen.\n\nHinzu kommt ein praktisches Argument. Wer im Schichtdienst arbeitet und Kinder betreut, scheitert selten an mangelndem Sprachvermögen, häufiger am Format: an Prüfungsgebühren, an fehlenden Kursplätzen zu passenden Zeiten und an Aufgabentypen, die geübt sein wollen. Wer B1 nachgewiesen hat, müsste für C1 im Schnitt mehrere Hundert Unterrichtsstunden zusätzlich aufbringen — Zeit, die neben Erwerbsarbeit und Betreuungspflichten kaum vorhanden ist. Eine Anhebung träfe also nicht die Unwilligen, sondern die Ausgelasteten.\n\nStatt einer pauschalen Anhebung wären differenzierte Wege gangbar: der Nachweis über eine abgeschlossene Ausbildung oder mehrjährige Erwerbstätigkeit in Deutschland, ein mündlich gewichtetes Verfahren sowie Härtefallregelungen für Pflegende. Denkbar wäre überdies, das Niveau an die tatsächlichen sprachlichen Anforderungen des jeweiligen Alltags zu koppeln, statt es pauschal festzusetzen.\n\nDie Folge einer C1-Pflicht wäre absehbar: mehr Menschen mit dauerhaftem Aufenthalt, aber ohne Wahlrecht. Wer Integration will, sollte nicht die Latte erhöhen, sondern die Leiter stabilisieren.\n\nBeste Grüße\nNguyen Thi Mai',
  fallen:[
    'Emotional argumentieren, weil das Thema persönlich betrifft. Auf C1 zählt die Distanz, mit der man auch die Gegenseite darstellt.',
    'Den zweiten Leitpunkt überspringen und sofort werten. Die Zweckfrage ist der Punkt, an dem die Argumentation trägt.',
    '„Wäre zu klären" und „ist zu klären" beliebig mischen. Der Konjunktiv markiert hier die Distanz und sollte konsequent gesetzt werden.',
    'Die Folgen auf eine Gruppe verengen. Der Leitpunkt lautet „für wen" und verlangt Differenzierung.'
  ]
},

{
  id:'mail-c1-beschwerde-fortbildung',
  lvl:'C1',
  art:'mail',
  pruef:'Goethe C1',
  t:'Beschwerde-Mail: mangelhafte Fortbildung',
  sit:'Du hast an einer zweitägigen Fortbildung für 890 Euro teilgenommen. Angekündigt waren Fallarbeit in Kleingruppen und ein Zertifikat. Tatsächlich gab es Frontalvortrag, das Zertifikat wurde nicht ausgestellt. Du schreibst dem Anbieter.',
  empf:'Institut für Führungskommunikation, Geschäftsleitung',
  punkte:['den Anlass der Beschwerde benennen','die Abweichung von der Ankündigung darlegen','eine konkrete Forderung stellen','eine Frist setzen und die weitere Konsequenz andeuten'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[110,135],
  hilfe:[
    'ich nehme Bezug auf das Seminar „…" vom … , an dem ich als Teilnehmerin teilgenommen habe.',
    'Ausgeschrieben war die Arbeit an eigenen Fällen in Gruppen von höchstens acht Personen.',
    'Tatsächlich handelte es sich um einen Vortrag vor 40 Personen.',
    'Ich fordere Sie auf, mir 50 Prozent der Teilnahmegebühr zu erstatten und das Zertifikat auszustellen.',
    'Sollte bis zum … keine Rückmeldung vorliegen, werde ich …'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Sprachfunktionen in etwa 120 Wörtern. Jede Funktion braucht ihren eigenen Satz — Platz für Ausschmückung gibt es nicht.'},
    {k:'Kohärenz', w:'Bezug, Abweichung, Forderung, Frist. Die Reihenfolge ist zwingend, weil sie den Anspruch aufbaut.'},
    {k:'Wortschatz', w:'Leistungsbeschreibung, Abweichung, Minderung, Teilnahmegebühr, Nachbesserung, Verbraucherzentrale.'},
    {k:'Strukturen', w:'Nominalstil für Verdichtung, Passiv für die Vorgänge, Konjunktiv II für die angedeutete Konsequenz. Kein Plauderton.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich nehme Bezug auf das Seminar „Führen in Konflikten" vom 14. und 15. Mai, Buchungsnummer FK-2287, für das ich 890 Euro entrichtet habe.\n\nAusgeschrieben waren die Bearbeitung eigener Fälle in Gruppen von höchstens acht Personen sowie ein Teilnahmezertifikat. Stattgefunden hat ein Vortrag vor rund 40 Teilnehmenden; Fallarbeit fand an keinem der beiden Tage statt, ein Zertifikat wurde bis heute nicht ausgestellt.\n\nAngesichts dieser erheblichen Abweichung fordere ich die Erstattung von 50 Prozent der Teilnahmegebühr sowie die unverzügliche Ausstellung des Zertifikats.\n\nFür Ihre Antwort habe ich mir den 30. Juni notiert. Sollte bis dahin keine Rückmeldung vorliegen, werde ich die Angelegenheit der Verbraucherzentrale vorlegen.\n\nMit freundlichen Grüßen\nAmina Haddad',
  fallen:[
    'Die Ankündigung nicht zitieren. Der Anspruch entsteht aus der Differenz zwischen Zusage und Leistung, nicht aus der Enttäuschung.',
    'In 120 Wörtern erzählen, wie der Tag verlief. Auf C1 Aufgabe 2 wird Verdichtung bewertet, nicht Vollständigkeit der Schilderung.',
    'Die Konsequenz als Drohung formulieren. „Sollte keine Rückmeldung vorliegen, werde ich …" wirkt schärfer als jedes Ausrufezeichen.',
    'Register kippen lassen: ein sachlicher Anfang und am Schluss „Das ist eine Frechheit!" Die Registerkonstanz ist Teil des Kriteriums Aufgabenerfüllung.'
  ]
},

{
  id:'mail-c1-hausverwaltung',
  lvl:'C1',
  art:'mail',
  pruef:'Goethe C1',
  t:'Halbformelle E-Mail: wiederholte Terminversäumnisse',
  sit:'Die Hausverwaltung hat dreimal einen Termin zum Austausch der Wasserzähler angekündigt. Du hast jedes Mal Urlaub genommen, niemand ist erschienen. Nun soll ein vierter Termin stattfinden. Du schreibst.',
  empf:'Hausverwaltung Krämer, Frau Berger',
  punkte:['den bisherigen Verlauf zusammenfassen','die entstandenen Nachteile benennen','eine verbindliche Regelung fordern','Kooperationsbereitschaft signalisieren'],
  anrede:'Sehr geehrte Frau Berger,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[110,135],
  hilfe:[
    'für den Austausch der Wasserzähler wurden mir bislang drei Termine angekündigt.',
    'An keinem dieser Termine erschien ein Monteur.',
    'Für jeden Termin habe ich einen Urlaubstag genommen.',
    'Ich bitte Sie, mir einen verbindlichen Termin mit Zeitfenster zu nennen.',
    'Selbstverständlich bin ich bereit, den Schlüssel gegen Quittung zu hinterlegen.'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Funktionen in etwa 120 Wörtern, darunter das Signal zur Kooperation — es verhindert, dass die Mail als Eskalation gelesen wird.'},
    {k:'Kohärenz', w:'Chronologie knapp, dann Bewertung, dann Forderung, dann Angebot. Keine Wiederholung des Verlaufs im Schluss.'},
    {k:'Wortschatz', w:'Terminvereinbarung, Zeitfenster, Verdienstausfall, Zugang gewähren, verbindlich, Nachweis.'},
    {k:'Strukturen', w:'Passiv im Präteritum, Nominalisierungen („der wiederholte Ausfall"), Konjunktiv II für Bitte und Angebot.'}
  ],
  muster:'Sehr geehrte Frau Berger,\n\nfür den Austausch der Wasserzähler in meiner Wohnung wurden mir bislang drei Termine angekündigt: der 4. März, der 22. März und der 11. April. An keinem dieser Termine erschien ein Monteur, eine Absage erhielt ich in keinem Fall.\n\nDa ich im Schichtdienst arbeite, habe ich für jeden dieser Termine einen Urlaubstag beantragt. Der wiederholte Ausfall hat mich damit drei Urlaubstage gekostet.\n\nIch bitte Sie deshalb, mir für den vierten Anlauf einen verbindlichen Termin mit einem Zeitfenster von höchstens zwei Stunden zu nennen und mich bei einer Verschiebung mindestens 24 Stunden vorher zu informieren.\n\nAn einer schnellen Lösung ist mir gelegen: Gern hinterlege ich den Wohnungsschlüssel gegen Quittung in Ihrem Büro, sofern der Monteur den Zugang schriftlich bestätigt.\n\nMit freundlichen Grüßen\nOlena Kovalenko',
  fallen:[
    'Den Verlauf breit ausschmücken und für Forderung und Angebot keinen Platz mehr haben. Zwei von vier Funktionen fehlen dann.',
    'Auf das Kooperationsangebot verzichten, weil man im Recht ist. Bei Goethe C1 ist es ein eigener Leitpunkt.',
    '„Es wurde mir drei Termine angekündigt" — im Passiv richtet sich das Verb nach dem Subjekt: „wurden mir drei Termine angekündigt".',
    'Die konkreten Daten weglassen. Ohne sie ist die Zusammenfassung des Verlaufs eine Behauptung.'
  ]
},

{
  id:'mail-c1-erstattung-reise',
  lvl:'C1',
  art:'mail',
  pruef:'Goethe C1',
  t:'Halbformelle E-Mail: Erstattung nach Zugausfall',
  sit:'Dein Zug zu einer Konferenz fiel aus, die angebotene Ersatzverbindung hätte dich vier Stunden zu spät ankommen lassen. Du bist mit einem Mietwagen gefahren. Die Bahn hat die Erstattung mit Verweis auf „höhere Gewalt" abgelehnt.',
  empf:'Deutsche Bahn, Servicecenter Fahrgastrechte',
  punkte:['auf welchen Vorgang du dich beziehst','warum die Ablehnung nicht überzeugt','was du forderst','welche Frist und welche weiteren Schritte du vorsiehst'],
  anrede:'Sehr geehrte Damen und Herren,',
  gruss:'Mit freundlichen Grüßen',
  woerter:[110,135],
  hilfe:[
    'ich beziehe mich auf Ihr Schreiben vom …, Vorgangsnummer …',
    'Die Ablehnung stützen Sie auf höhere Gewalt, ohne diese näher zu begründen.',
    'Ein Personalausfall im Stellwerk fällt nach der Fahrgastrechteverordnung nicht darunter.',
    'Ich fordere die Erstattung der Mietwagenkosten in Höhe von 187 Euro.',
    'Andernfalls werde ich die Schlichtungsstelle für den öffentlichen Personenverkehr anrufen.'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Funktionen. Die Widerlegung der Begründung ist die anspruchsvollste — sie verlangt Bezug auf das gegnerische Argument.'},
    {k:'Kohärenz', w:'Bezug, Widerlegung, Forderung, Frist. In 120 Wörtern trägt jeder Satz eine Funktion.'},
    {k:'Wortschatz', w:'Vorgangsnummer, höhere Gewalt, Ersatzverbindung, Zumutbarkeit, Schlichtungsstelle, Erstattungsanspruch.'},
    {k:'Strukturen', w:'Konzessive und kausale Verknüpfung, Passiv, Konjunktiv II. Nominalisierte Zusammenfassungen sparen Wörter.'}
  ],
  muster:'Sehr geehrte Damen und Herren,\n\nich beziehe mich auf Ihr Schreiben vom 12. Juni, Vorgangsnummer FGR-88214, mit dem Sie meinen Erstattungsantrag abgelehnt haben.\n\nIhre Ablehnung stützt sich auf höhere Gewalt. Als Grund für den Ausfall des ICE 611 am 2. Juni war jedoch ein Personalausfall im Stellwerk angegeben; ein betrieblicher Umstand also, der nach der Fahrgastrechteverordnung gerade nicht als höhere Gewalt gilt. Die angebotene Ersatzverbindung hätte zudem eine Ankunft mit vier Stunden Verspätung bedeutet und war für einen Konferenzbeitrag um 9 Uhr nicht zumutbar.\n\nIch fordere daher die Erstattung der Mietwagenkosten in Höhe von 187 Euro; die Rechnung liegt Ihnen bereits vor.\n\nSollte bis zum 15. Juli keine Zahlung erfolgen, werde ich die Schlichtungsstelle für den öffentlichen Personenverkehr einschalten.\n\nMit freundlichen Grüßen\nYusuf Demir',
  fallen:[
    'Die Ablehnung ignorieren und den ursprünglichen Antrag wiederholen. Der zweite Leitpunkt verlangt die Auseinandersetzung mit der Begründung der Gegenseite.',
    'Ohne Vorgangsnummer schreiben — die Mail wird dann als Neuantrag behandelt und erneut abgelehnt.',
    '„Ich beziehe mich auf Ihrem Schreiben" — „sich beziehen auf" verlangt den Akkusativ.',
    'Die Zumutbarkeit der Ersatzverbindung nicht begründen. Genau daran entscheidet sich der Anspruch.'
  ]
},

{
  id:'eroerterung-fachkraeftemangel',
  lvl:'C1',
  art:'eroerterung',
  pruef:'frei',
  t:'Erörterung: Zuwanderung als Antwort auf den Fachkräftemangel?',
  sit:'Für einen Weiterbildungskurs schreibst du eine Erörterung zu der Frage, ob gesteuerte Zuwanderung das geeignete Mittel gegen den Fachkräftemangel ist. Erwartet werden Pro- und Kontra-Argumente und ein begründetes Fazit.',
  empf:'Kursleitung, schriftliche Prüfungsleistung',
  punkte:['das Problem und die Fragestellung entfalten','die Argumente für die These','die Gegenargumente ernsthaft prüfen','ein begründetes Fazit ziehen'],
  anrede:'',
  gruss:'',
  woerter:[240,300],
  hilfe:[
    'Angesichts der demografischen Entwicklung stellt sich die Frage, ob …',
    'Für diese Position spricht zunächst, dass …',
    'Hinzu kommt ein zweiter Gesichtspunkt: …',
    'Gegen eine einseitige Fokussierung lässt sich einwenden, dass …',
    'Abwägend komme ich zu dem Schluss, dass …'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Teile: Hinführung, Pro, Kontra, Fazit. Ein Fazit, das nur zusammenfasst, erfüllt den vierten Punkt nicht.'},
    {k:'Kohärenz', w:'Eine Erörterung braucht sichtbare Gliederung und Übergänge, die die Argumente gewichten, nicht nur reihen.'},
    {k:'Wortschatz', w:'Demografie, Erwerbspersonenpotenzial, Anerkennungsverfahren, Fachkräfteeinwanderung, Lohnentwicklung, Bindungsquote.'},
    {k:'Strukturen', w:'Komplexe Satzgefüge, Nominalisierung, unpersönliche Wendungen („es ließe sich einwenden", „daraus folgt jedoch nicht").'}
  ],
  muster:'Der deutsche Arbeitsmarkt verliert in den kommenden zehn Jahren mehr Erwerbstätige durch den Renteneintritt der geburtenstarken Jahrgänge, als nachwachsen. In der Debatte gilt gesteuerte Zuwanderung deshalb häufig als naheliegende Antwort. Ob sie das geeignete Mittel ist, verdient jedoch eine genauere Prüfung.\n\nFür die These spricht zunächst die schlichte Arithmetik. Selbst eine deutlich steigende Erwerbsbeteiligung von Frauen und Älteren gleicht die Lücke rechnerisch nicht aus; ohne Zuwanderung schrumpft das Erwerbspersonenpotenzial in jedem realistischen Szenario. Hinzu kommt, dass sich der Mangel nicht gleichmäßig verteilt: In Gesundheit, Handwerk und Logistik fehlen Fachkräfte bereits heute in einem Ausmaß, das Leistungen einschränkt. Ein dritter Gesichtspunkt wird selten genannt: Zugewanderte Beschäftigte sind im Durchschnitt jünger und stabilisieren damit auch die Finanzierung der Sozialversicherungen.\n\nGegen eine einseitige Fokussierung lässt sich indes Erhebliches einwenden. Zum einen konkurriert Deutschland international um dieselben Fachkräfte, und zwar mit Ländern, deren Verfahren schneller und deren Sprache leichter zugänglich ist. Zum anderen verweist der Mangel auf hausgemachte Ursachen: Wo Pflegekräfte nach durchschnittlich sieben Berufsjahren aussteigen, ist nicht primär die Zahl der Eingewanderten das Problem, sondern die Bindungsquote. Wer Zuwanderung als Ersatz für bessere Arbeitsbedingungen einsetzt, verlängert lediglich die Frist bis zur nächsten Lücke. Schließlich ist an die Herkunftsländer zu erinnern, denen ausgebildetes Personal entzogen wird.\n\nAbwägend komme ich zu dem Schluss, dass Zuwanderung notwendig, aber nicht hinreichend ist. Sie verschafft Zeit; nutzen lässt sich diese Zeit nur, wenn parallel die Anerkennungsverfahren beschleunigt, die Arbeitsbedingungen in den Mangelberufen verbessert und die bereits Eingewanderten qualifikationsgerecht eingesetzt werden. Andernfalls wird ein strukturelles Problem mit einem Instrument bearbeitet, das es nur verschiebt.',
  fallen:[
    'Pro und Kontra bloß aufzählen und im Fazit „beides hat Vor- und Nachteile" schreiben. Ein Fazit muss gewichten und sich festlegen.',
    'Die Gegenargumente schwach halten, um leichter zu widerlegen. Die ernsthafte Prüfung der Gegenseite ist auf C1 ein eigenes Bewertungsmerkmal.',
    'Zahlen erfinden, um Autorität zu erzeugen. Formulierungen wie „in jedem realistischen Szenario" tragen ohne erfundene Statistik.',
    'Anrede und Gruß setzen. Eine Erörterung ist ein Sachtext, kein Brief — sie beginnt mit der Hinführung.'
  ]
},

{
  id:'eroerterung-mobilitaetswende',
  lvl:'C1',
  art:'eroerterung',
  pruef:'frei',
  t:'Erörterung: Autofreie Innenstädte',
  sit:'Mehrere deutsche Städte planen, ihre Innenstädte für den privaten Autoverkehr weitgehend zu sperren. Du schreibst eine Erörterung zu der Frage, ob das der richtige Weg ist.',
  empf:'Kursleitung, schriftliche Prüfungsleistung',
  punkte:['die Fragestellung und ihre Bedeutung entfalten','Argumente für die Sperrung','Einwände und die Interessen der Betroffenen','ein begründetes und differenziertes Fazit'],
  anrede:'',
  gruss:'',
  woerter:[215,275],
  hilfe:[
    'Die Diskussion über autofreie Innenstädte wird häufig als Kulturkampf geführt.',
    'Für eine Sperrung spricht die Flächenkonkurrenz in gewachsenen Zentren.',
    'Nicht zu übersehen ist allerdings, dass …',
    'Besonders betroffen wären Pendlerinnen aus dem Umland und der Lieferverkehr.',
    'Eine differenzierte Betrachtung führt zu dem Ergebnis, dass …'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Teile. Der dritte verlangt ausdrücklich die Perspektive der Betroffenen, nicht nur abstrakte Einwände.'},
    {k:'Kohärenz', w:'Gliederung nach Sachaspekten, nicht nach Meinungen. Übergänge, die den Argumentationsstand markieren.'},
    {k:'Wortschatz', w:'Flächenkonkurrenz, Aufenthaltsqualität, Erreichbarkeit, Lieferverkehr, Verdrängungseffekt, Anwohnerparken.'},
    {k:'Strukturen', w:'Konzessive Gefüge, Partizipialkonstruktionen, erweiterte Attribute, Passiversatzformen.'}
  ],
  muster:'Wer über autofreie Innenstädte diskutiert, streitet selten über Verkehr allein. In der Debatte verdichten sich Fragen nach Teilhabe, Wohnkosten und der Frage, wem der öffentliche Raum gehört. Umso wichtiger ist es, die Argumente zu sortieren.\n\nFür eine weitgehende Sperrung spricht zunächst die Flächenkonkurrenz. In gewachsenen europäischen Zentren beansprucht der ruhende Verkehr einen erheblichen Teil des öffentlichen Raums, ohne dass dieser Anteil je demokratisch beschlossen worden wäre. Wo Parkflächen zurückgebaut wurden, ist die Aufenthaltsqualität messbar gestiegen; Städte wie Gent oder Pontevedra verzeichnen zugleich stabile oder steigende Umsätze im Einzelhandel. Hinzu kommen Lärmminderung, bessere Luft und ein Sicherheitsgewinn, der insbesondere Kindern und älteren Menschen zugutekommt.\n\nDiese Befunde entkräften die Einwände jedoch nicht vollständig. Wer im Umland wohnt und im Schichtdienst arbeitet, ist auf das Auto angewiesen, solange der Nahverkehr nachts nicht fährt. Handwerksbetriebe und Lieferdienste benötigen Zufahrten; für sie ist eine Sperrung kein Komfortverlust, sondern ein Kostenfaktor. Ernst zu nehmen ist ferner der Verdrängungseffekt: Steigt die Attraktivität eines Viertels, steigen häufig auch die Mieten, sodass ausgerechnet jene wegziehen, für die die Aufwertung gedacht war.\n\nDie Abwägung führt daher nicht zu einem Ja oder Nein, sondern zu einer Frage der Reihenfolge. Sinnvoll erscheint eine Sperrung dort, wo zuvor ein verlässlicher Nachtverkehr eingerichtet, der Lieferverkehr über Zeitfenster geregelt und das Anwohnerparken für Pflegedienste und Handwerk gesichert wurde. Wird die Sperrung hingegen an den Anfang gestellt, entsteht genau jene soziale Schieflage, die den Vorhaben ihre Zustimmung entzieht.',
  fallen:[
    'Die Erörterung zur Meinungsäußerung machen. Auf C1 wird die Fähigkeit bewertet, die Gegenseite mit ihren stärksten Argumenten darzustellen.',
    'Die Betroffenen vergessen. Der dritte Leitpunkt verlangt konkrete Gruppen: Pendler, Lieferverkehr, Pflegedienste, Anwohner.',
    'Ein Fazit schreiben, das nur „es kommt darauf an" sagt. Differenzierung heißt Bedingungen nennen, nicht ausweichen.',
    'Die Absätze nicht gliedern. Bei über 300 Wörtern entscheidet die Absatzstruktur über das Kriterium Kohärenz.'
  ]
},

{
  id:'zusammenfassung-mehrsprachigkeit',
  lvl:'C1',
  art:'zusammenfassung',
  pruef:'TestDaF',
  t:'Zusammenfassung: Studie zur Mehrsprachigkeit',
  sit:'Du hast einen populärwissenschaftlichen Artikel gelesen: Eine Langzeitstudie hat 1.200 Kinder untersucht, die zweisprachig aufwachsen. Ergebnis: Der Wortschatz in jeder Einzelsprache ist zunächst kleiner, der Gesamtwortschatz aber größer; bei der Aufmerksamkeitssteuerung schneiden die Kinder besser ab; der Vorsprung verschwindet in der Grundschule teilweise wieder. Fasse den Inhalt zusammen.',
  empf:'schriftliche Zusammenfassung für ein Seminar',
  punkte:['Gegenstand und Anlage der Studie','die zentralen Ergebnisse','die Einschränkungen, die die Autoren nennen','die Schlussfolgerung des Artikels'],
  anrede:'',
  gruss:'',
  woerter:[160,200],
  hilfe:[
    'Der Artikel „…" berichtet über eine Langzeitstudie, in der …',
    'Untersucht wurden 1.200 Kinder über einen Zeitraum von acht Jahren.',
    'Den Ergebnissen zufolge …',
    'Einschränkend weisen die Autoren darauf hin, dass …',
    'Der Artikel schließt mit der Feststellung, dass …'
  ],
  krit:[
    {k:'Schreibhandlung', w:'Zusammenfassen ist nicht Argumentieren. Keine eigene Meinung, keine Bewertung — das ist beim TestDaF ein eigenes Kriterium.'},
    {k:'Wiedergabe in eigenen Worten', w:'Formulierungen des Originals dürfen nicht übernommen werden. Umformulieren, ohne den Sinn zu verschieben.'},
    {k:'Aufgabenbewältigung', w:'Vier Punkte, darunter die Einschränkungen. Wer nur die spektakulären Ergebnisse nennt, verzerrt die Quelle.'},
    {k:'Sprachliche Realisierung', w:'Redewiedergabe mit Konjunktiv I und mit distanzierenden Verben: berichten, feststellen, einräumen, betonen. Variation der Strukturen wird bewertet.'}
  ],
  muster:'Der Artikel berichtet über eine Langzeitstudie zur Sprachentwicklung zweisprachig aufwachsender Kinder. Untersucht wurden 1.200 Kinder aus deutschsprachigen und mehrsprachigen Familien, die von der Einschulung an über acht Jahre begleitet wurden. Erhoben wurden sowohl der Wortschatz in den einzelnen Sprachen als auch Leistungen in Aufgaben zur Aufmerksamkeitssteuerung.\n\nDen Ergebnissen zufolge verfügen mehrsprachige Kinder in jeder Einzelsprache zunächst über einen kleineren Wortschatz als einsprachige Gleichaltrige. Werden beide Sprachen zusammengenommen, kehrt sich der Befund um: Der Gesamtwortschatz fällt größer aus. Deutlicher noch zeigen sich Unterschiede bei Aufgaben, in denen zwischen konkurrierenden Regeln gewechselt werden muss; hier schneidet die mehrsprachige Gruppe durchgängig besser ab.\n\nEinschränkend weisen die Autoren darauf hin, dass sich der Vorsprung im Verlauf der Grundschulzeit verringert und in einigen Teilstichproben nicht mehr nachweisbar ist. Zudem sei der sozioökonomische Hintergrund der Familien nur unvollständig kontrolliert worden, sodass ein Teil der Effekte anderen Faktoren zuzuschreiben sein könnte.\n\nDer Artikel schließt mit der Feststellung, dass Mehrsprachigkeit weder ein Risiko für die Sprachentwicklung darstelle noch als genereller Vorteil gelten könne; entscheidend seien die Bedingungen, unter denen die Sprachen erworben würden.',
  fallen:[
    'Die eigene Meinung einbauen: „Das zeigt, wie wichtig Mehrsprachigkeit ist." Beim TestDaF ist die Schreibhandlung ein eigenes Kriterium — Zusammenfassen und Argumentieren dürfen nicht vermischt werden.',
    'Ganze Formulierungen aus der Quelle übernehmen. Gefordert ist die Wiedergabe in eigenen Worten.',
    'Die Einschränkungen weglassen, weil sie das Ergebnis abschwächen. Genau sie machen die Zusammenfassung korrekt.',
    'Den Konjunktiv I in der Redewiedergabe vermeiden. „Die Autoren schreiben, dass es wichtig ist" ist zulässig, „sei" markiert die Distanz jedoch klarer.'
  ]
},

{
  id:'zusammenfassung-fachartikel-pflege',
  lvl:'C1',
  art:'zusammenfassung',
  pruef:'TestDaF',
  t:'Zusammenfassung: Fachartikel zur Personalbindung in der Pflege',
  sit:'Ein Fachartikel wertet Befragungen von 3.400 Pflegekräften aus. Zentrale Befunde: Nicht das Gehalt, sondern die Verlässlichkeit der Dienstpläne ist der stärkste Faktor für den Verbleib im Beruf; Einspringen aus dem Frei senkt die Bindung am deutlichsten; Häuser mit fester Ausfallreserve haben eine um ein Drittel niedrigere Fluktuation. Fasse den Artikel zusammen.',
  empf:'schriftliche Zusammenfassung für eine Weiterbildung',
  punkte:['Gegenstand und Datenbasis','die zentralen Befunde','methodische Grenzen','die Empfehlungen des Artikels'],
  anrede:'',
  gruss:'',
  woerter:[150,190],
  hilfe:[
    'Der Beitrag untersucht, welche Faktoren den Verbleib von Pflegekräften im Beruf beeinflussen.',
    'Grundlage ist eine Befragung von 3.400 Beschäftigten in 120 Einrichtungen.',
    'Als stärkster Einzelfaktor erweist sich …',
    'Methodisch ist einschränkend anzumerken, dass …',
    'Die Autorinnen empfehlen daher …'
  ],
  krit:[
    {k:'Schreibhandlung', w:'Referieren, nicht bewerten. Auch die Empfehlungen werden als Aussagen des Artikels wiedergegeben, nicht als eigene.'},
    {k:'Wiedergabe in eigenen Worten', w:'Fachbegriffe dürfen übernommen werden, Formulierungen nicht.'},
    {k:'Aufgabenbewältigung', w:'Vier Punkte. Die methodischen Grenzen gehören zwingend dazu.'},
    {k:'Sprachliche Realisierung', w:'Präzise Verben der Wiedergabe: ermitteln, nachweisen, differenzieren, einräumen, empfehlen. Passiv und Nominalstil zur Verdichtung.'}
  ],
  muster:'Der Beitrag untersucht, welche Faktoren darüber entscheiden, ob Pflegekräfte in ihrem Beruf bleiben. Grundlage ist eine schriftliche Befragung von 3.400 Beschäftigten aus 120 Einrichtungen der stationären Altenpflege, ergänzt um Interviews mit Leitungskräften.\n\nAls stärkster Einzelfaktor erweist sich nicht die Vergütung, sondern die Verlässlichkeit der Dienstplanung. Beschäftigte, die im Durchschnitt mehr als zweimal im Monat aus dem Frei einspringen, äußern deutlich häufiger die Absicht, den Beruf zu verlassen; dieser Zusammenhang bleibt auch dann bestehen, wenn Gehalt, Alter und Betreuungspflichten statistisch kontrolliert werden. Einrichtungen mit einer festen Ausfallreserve weisen den Angaben zufolge eine um etwa ein Drittel geringere Fluktuation auf.\n\nMethodisch räumen die Autorinnen ein, dass die Befunde auf Selbstauskünften beruhen und die Wechselabsicht nicht mit dem tatsächlichen Ausscheiden gleichgesetzt werden dürfe. Zudem seien überwiegend größere Träger vertreten, sodass die Ergebnisse nur eingeschränkt auf kleine Einrichtungen übertragbar seien.\n\nEmpfohlen wird, Ausfallkonzepte verbindlich zu regeln, kurzfristige Dienstplanänderungen zu begrenzen und die Wirkung solcher Maßnahmen regelmäßig zu überprüfen. Lohnerhöhungen allein, so das Fazit, könnten die Personalbindung nicht sichern.',
  fallen:[
    'Aus der Zusammenfassung eine Stellungnahme machen: „Das bestätigt meine Erfahrung." Beim TestDaF ist das eine verfehlte Schreibhandlung.',
    'Zahlen ungenau wiedergeben („viele Befragte" statt „3.400 Beschäftigte"). Die korrekte Wiedergabe von Quelleninformationen ist ein eigenes Kriterium.',
    'Die Empfehlungen als eigene Forderungen formulieren. Sie müssen als Aussagen des Artikels markiert bleiben: „Empfohlen wird …".',
    'Alles im Passiv schreiben. Variation der Strukturen wird bewertet — Wechsel zwischen Passiv, Nominalstil und aktiven Wiedergabeverben.'
  ]
},

{
  id:'kommentar-wohnungsnot',
  lvl:'C1',
  art:'kommentar',
  pruef:'frei',
  t:'Kommentar: Wohnungsnot in den Städten',
  sit:'Für die Onlineausgabe einer Zeitung schreibst du einen Kommentar zu der Nachricht, dass in deiner Stadt im vergangenen Jahr 340 Sozialwohnungen aus der Bindung gefallen und nur 90 neue gebaut worden sind. Ein Kommentar bezieht Position und ist pointiert.',
  empf:'die Leserschaft der Onlinezeitung',
  punkte:['den Anlass in einem Bild oder einer Zahl fassen','die eigene These klar benennen','die naheliegenden Gegenargumente entkräften','einen zugespitzten Schluss setzen'],
  anrede:'',
  gruss:'',
  woerter:[185,230],
  hilfe:[
    'Dreihundertvierzig gegen neunzig: Diese Zahlen beschreiben keine Baukonjunktur, sondern eine Entscheidung.',
    'Meine These lautet: Der Markt löst dieses Problem nicht, weil er es erzeugt.',
    'Nun wird eingewendet, Bauen sei teuer geworden. Das stimmt — erklärt aber nicht, warum …',
    'Wer Sozialbindungen auslaufen lässt, ohne nachzubauen, trifft eine Entscheidung.',
    'Am Ende ist Wohnungspolitik keine Frage der Statistik, sondern der Prioritäten.'
  ],
  krit:[
    {k:'Aufgabenerfüllung', w:'Vier Punkte. Ein Kommentar ohne klare These verfehlt seine Textsorte.'},
    {k:'Kohärenz', w:'Zuspitzung von Anfang bis Ende. Der Schluss greift den Einstieg auf, ohne ihn zu wiederholen.'},
    {k:'Wortschatz', w:'Sozialbindung, Belegungsrecht, Bodenpreis, Konzeptvergabe, Milieuschutz, Angebotsmiete.'},
    {k:'Strukturen', w:'Kurze Sätze als Stilmittel neben komplexen Gefügen. Rhetorische Figuren sind hier zulässig — aber dosiert.'}
  ],
  muster:'Dreihundertvierzig gegen neunzig. Diese beiden Zahlen beschreiben das Wohnungsjahr unserer Stadt genauer als jede Sonntagsrede: 340 Wohnungen sind aus der Sozialbindung gefallen, 90 sind hinzugekommen. Wer diese Bilanz mit gestiegenen Baukosten erklärt, verwechselt einen Umstand mit einer Ursache.\n\nMeine These ist einfach: Der Wohnungsmarkt löst die Wohnungsnot nicht, weil er sie hervorbringt. Wo Grundstücke an den Höchstbietenden gehen, entsteht das, was sich rechnet, und rechnen tun sich Eigentumswohnungen im oberen Segment. Das ist kein Vorwurf an Investoren; sie handeln erwartbar. Es ist ein Vorwurf an eine Stadt, die ihre Flächen verkauft, statt sie in Erbpacht zu vergeben, und die Bindungen auslaufen lässt, ohne sie zu verlängern.\n\nNun wird eingewendet, öffentliches Bauen sei teuer und langsam. Beides trifft zu. Nur erklärt es nicht, warum in derselben Stadt Konzeptvergaben, die sich anderswo bewährt haben, seit Jahren geprüft und nicht angewandt werden. Und es erklärt nicht, warum der Ankauf von Belegungsrechten im Bestand, die günstigste aller Optionen, im Haushalt mit einer Summe steht, die für elf Wohnungen reicht.\n\nWer Sozialbindungen auslaufen lässt, ohne nachzusteuern, hat sich entschieden. Er sollte es nur nicht Sachzwang nennen. Dreihundertvierzig gegen neunzig ist kein Marktergebnis. Es ist ein Beschluss, den niemand gefasst haben will.',
  fallen:[
    'Den Kommentar wie eine Erörterung anlegen und beide Seiten gleich gewichten. Ein Kommentar bezieht Position — die Textsortenerwartung ist Teil der Aufgabenerfüllung.',
    'Polemisch statt pointiert werden. Zuspitzung entsteht aus der Genauigkeit der Zahl, nicht aus dem Adjektiv.',
    'Die Gegenargumente auslassen. Ein Kommentar, der den naheliegenden Einwand nicht kennt, überzeugt niemanden.',
    'Mit einer Frage enden. Der Schluss eines Kommentars ist eine Setzung, keine Rückfrage an die Leserschaft.'
  ]
}

];
