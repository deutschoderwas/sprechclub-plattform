/* ============================================================
   bereiche.js — die Ordnung hinter „Deutsch für Freizeit & Beruf"

   Kein neuer Stoff. Diese Datei sagt nur, wohin gehört, was
   längst gebaut ist:

     dialoge.js    110 fertige Situationen (75 Freizeit, 35 Beruf)
     berufe.js     20 Berufsfelder mit Sprachhandlungen und Übungen
     uebungen.js   56 Wortschatzbereiche, viele schon nach Orten
     themen.js     die Grammatik- und Aussprachebausteine
     *.html        die ausgearbeiteten Lektionsseiten
     amanda/sz-*   die zwölf Szenenbilder mit Amanda

   Zwei Wege, wie Julia es beschrieben hat:

     FREIZEIT   die Orte des Alltags — Café, Apotheke, Arzt, Amt,
                Bank, Friseur, Post, Bahn, Werkstatt, Hotel,
                Wohnung, Familie, Schule, Feste …
     BERUF      erst was in jedem Job gilt (Bewerbung, erste Tage,
                Team, heikle Gespräche), dann die zwanzig Felder.

   Ein Bereich:
     id       kurzer Name, steht in der Adresse
     weg      'freizeit' oder 'beruf'
     gr       die Gruppe innerhalb des Weges
     t        der Titel auf der Kachel
     u        ein Satz: was du hier kannst, wenn du fertig bist
     bild     amanda/sz-*.webp, falls es eine Szene gibt
     zeichen  sonst ein Zeichen aus club-zeichen.js / zeichen-plus.js
     lvl      die Spanne, die das Material wirklich abdeckt
     dlg      Dialog-Ids aus dialoge.js
     ws       Wortschatz-Themen aus uebungen.js
     ho       Hör-Themen aus uebungen.js
     hilf     die Bausteine aus themen.js, die hier gebraucht werden
     lek      die ausgearbeitete Lektionsseite (oder null)
     beruf    die Id in berufe.js (nur im Weg 'beruf')

   Neuen Ort anlegen? Zeile anhängen. Wer die Dialoge nicht
   kennt: node -e "global.window={};require('./dialoge.js');
   console.log(window.DIALOGE.map(d=>d.id).join(' '))"
   ============================================================ */

window.BEREICHE_WEGE = [
  { id:'freizeit', t:'Deutsch für die Freizeit',
    u:'Die Orte, an denen du jeden Tag Deutsch brauchst — vom Bäcker bis zum Amt.',
    zeichen:'lernen' },
  { id:'beruf', t:'Deutsch für den Beruf',
    u:'Erst was in jedem Job gilt, dann dein eigenes Berufsfeld.',
    zeichen:'buch' }
];

window.BEREICHE_GRUPPEN = [
  { weg:'freizeit', id:'einkaufen', t:'Einkaufen & Essen',      u:'Wo du bestellst, bezahlst und umtauschst' },
  { weg:'freizeit', id:'gesundheit', t:'Gesundheit',            u:'Von der Apotheke bis in die Notaufnahme' },
  { weg:'freizeit', id:'papiere',   t:'Ämter, Geld & Verträge', u:'Alles, was auf Papier passiert' },
  { weg:'freizeit', id:'unterwegs', t:'Unterwegs & Wohnen',     u:'Der Weg dorthin — und das Zuhause danach' },
  { weg:'freizeit', id:'menschen',  t:'Menschen & Familie',     u:'Die Gespräche, die wirklich schwer sind' },
  { weg:'beruf',    id:'ueberall',  t:'Überall im Job',         u:'Gilt in jedem Beruf — von der Bewerbung bis zur Kritik' },
  { weg:'beruf',    id:'feld',      t:'Dein Berufsfeld',        u:'Die Sprache, die dein Arbeitstag wirklich verlangt' }
];

window.BEREICHE = [

/* ================= FREIZEIT · Einkaufen & Essen ================= */
{ id:'cafe', weg:'freizeit', gr:'einkaufen', t:'Café & Bäckerei',
  u:'Bestellen, nachfragen, getrennt bezahlen — ohne zu stocken.',
  bild:'sz-cafe', lvl:'A1–B1',
  dlg:['baeckerei','kaffee-einladen','getrennt-zahlen'],
  ws:['a2-cafe','a1-essen'], ho:['essen'], hilf:['a1-artikel','wortakzent'],
  lek:'baecker-cafe-a2-interaktiv.html' },

{ id:'restaurant', weg:'freizeit', gr:'einkaufen', t:'Restaurant',
  u:'Reservieren, bestellen, eine Allergie erklären, reklamieren.',
  zeichen:'essen', lvl:'A1–B2',
  dlg:['restaurant','tisch-reservieren','allergie-erklaeren','essen-reklamieren'],
  ws:['essen','a2-essen'], ho:['essen'], hilf:['konjunktiv2','satzmelodie'],
  lek:'restaurant-a2-b1.html' },

{ id:'supermarkt', weg:'freizeit', gr:'einkaufen', t:'Supermarkt & Einkaufen',
  u:'Fragen, wo etwas steht — und Falsches zurückgeben.',
  bild:'sz-supermarkt', lvl:'A1–C1',
  dlg:['supermarkt','umtausch','c1-laden-reklamation'],
  ws:['einkaufen','a2-einkaufen','a1-einkaufen'], ho:['einkaufen'], hilf:['konjunktiv2','wechselpraepositionen'],
  lek:'einkaufen-a2-b1.html' },

{ id:'kleidung', weg:'freizeit', gr:'einkaufen', t:'Kleidung & Shopping',
  u:'Größe, Farbe, Umtausch — und höflich Nein sagen zur Beratung.',
  zeichen:'karten', lvl:'A2–B1',
  dlg:['umtausch'], ws:['a2-kleidung'], ho:[], hilf:['adjektivdeklination'],
  lek:'kleidung-shopping-teil-1-a2-b1.html' },

{ id:'kochen', weg:'freizeit', gr:'einkaufen', t:'Kochen & Ernährung',
  u:'Rezepte verstehen, über Essen sprechen, Mengen angeben.',
  bild:'sz-kochen', lvl:'A2–B2',
  dlg:[], ws:['essen'], ho:['essen'], hilf:['passiv-praesens','a1-artikel'],
  lek:'kochen-a2-b1.html' },

{ id:'verkaufen', weg:'freizeit', gr:'einkaufen', t:'Online kaufen & verkaufen',
  u:'Handeln, beschreiben, sich einig werden.',
  zeichen:'lupe', lvl:'A2–B1',
  dlg:['flohmarkt-handeln','sofa-verkaufen'], ws:['einkaufen'], ho:[], hilf:['adjektivdeklination'],
  lek:null },

/* ================= FREIZEIT · Gesundheit ================= */
{ id:'apotheke', weg:'freizeit', gr:'gesundheit', t:'Apotheke',
  u:'Ein Rezept einlösen und sagen, was dir fehlt.',
  bild:'sz-apotheke', lvl:'A1–B1',
  dlg:['apotheke-rezept'], ws:['gesundheit'], ho:['gesundheit'], hilf:['a1-artikel','ch'],
  lek:null },

{ id:'arzt', weg:'freizeit', gr:'gesundheit', t:'Arzt & Praxis',
  u:'Termin machen, Beschwerden schildern, nachhaken statt nicken.',
  bild:'sz-arzt', lvl:'A2–C1',
  dlg:['arzt-termin','beschwerden','ueberweisung-facharzt','physio-ersttermin','c1-arzt-nicht-abspeisen-lassen'],
  ws:['a2-arzt','c1-arzt','gesundheit'], ho:['gesundheit'], hilf:['perfekt-praeteritum','konnektoren','ch'],
  lek:'arzt-a2-b1.html' },

{ id:'zahnarzt', weg:'freizeit', gr:'gesundheit', t:'Zahnarzt',
  u:'Nach Kosten fragen, bevor gebohrt wird.',
  zeichen:'herz', lvl:'A2–B1',
  dlg:['zahnarzt-kostenplan'], ws:['zahnarzt'], ho:[], hilf:['konjunktiv2'],
  lek:'beim-zahnarzt-a2-b1.html' },

{ id:'notfall', weg:'freizeit', gr:'gesundheit', t:'Krankenhaus & Notfall',
  u:'Den Notruf absetzen, sich anmelden, Besuch machen.',
  zeichen:'blitz', lvl:'A1–B1',
  dlg:['krankenhaus-besuch','notruf-112','notaufnahme-anmeldung','bereitschaftsdienst-116117'],
  ws:['gesundheit'], ho:['gesundheit'], hilf:['nebensaetze'],
  lek:null },

{ id:'kasse', weg:'freizeit', gr:'gesundheit', t:'Krankenkasse & Versicherung',
  u:'Widersprechen, melden, abschließen — mit den richtigen Wörtern.',
  zeichen:'schloss', lvl:'B1–B2',
  dlg:['widerspruch-krankenkasse','haftpflicht-abschliessen','wasserschaden-melden'],
  ws:['c1-vertrag'], ho:[], hilf:['nominalisierung','passiv-praesens'],
  lek:null },

/* ================= FREIZEIT · Ämter, Geld & Verträge ================= */
{ id:'amt', weg:'freizeit', gr:'papiere', t:'Amt & Behörde',
  u:'Anmelden, beantragen, widersprechen — auch wenn es hakt.',
  bild:'sz-amt', lvl:'A2–C1',
  dlg:['amt','kindergeld-familienkasse','aufenthaltstitel-verlaengern','fuehrerschein-umschreiben','wohngeld-antrag','jobcenter-weiterbewilligung','c1-amt-falscher-bescheid'],
  ws:['a2-amt','amt-b1','c1-amt','integration'], ho:[], hilf:['nominalisierung','genitiv','konnektoren'],
  lek:'amt-a2-b1.html' },

{ id:'bank', weg:'freizeit', gr:'papiere', t:'Bank & Geld',
  u:'Konto eröffnen, Rechnungen prüfen, Zusatzverkauf abwehren.',
  bild:'sz-bank', lvl:'A2–C1',
  dlg:['konto-eroeffnen','rechnung-reklamieren','c1-bank-mitverkauf-abwehren'],
  ws:['a2-bank','einkaufen'], ho:[], hilf:['konjunktiv2','genitiv'],
  lek:'bank-konto-a2-interaktiv.html' },

{ id:'vertraege', weg:'freizeit', gr:'papiere', t:'Handy & Verträge',
  u:'Abschließen, kündigen, und die Frist im Blick behalten.',
  zeichen:'mikro', lvl:'A2–B2',
  dlg:['handyvertrag-abschliessen','handyvertrag-kuendigen'],
  ws:['a2-handy','c1-vertrag'], ho:['medien'], hilf:['temporale-nebensaetze','genitiv'],
  lek:'handy-internet-a2-interaktiv.html' },

{ id:'post', weg:'freizeit', gr:'papiere', t:'Post & Paket',
  u:'Abholen, aufgeben, annehmen — mit Ausweis und ohne Stress.',
  zeichen:'abgeben', lvl:'A2–B1',
  dlg:['post'], ws:['a2-post'], ho:[], hilf:['wechselpraepositionen'],
  lek:'post-pakete-a2-interaktiv.html' },

{ id:'polizei', weg:'freizeit', gr:'papiere', t:'Polizei & Sicherheit',
  u:'Eine Anzeige aufgeben und genau beschreiben, was passiert ist.',
  zeichen:'lupe', lvl:'B1',
  dlg:['polizei-fahrraddiebstahl'], ws:[], ho:[], hilf:['perfekt-praeteritum'],
  lek:null },

/* ================= FREIZEIT · Unterwegs & Wohnen ================= */
{ id:'unterwegs', weg:'freizeit', gr:'unterwegs', t:'Bus, Bahn & unterwegs',
  u:'Fahrkarte kaufen, nach dem Weg fragen, den Anschluss retten.',
  bild:'sz-unterwegs', lvl:'A1–C1',
  dlg:['bahnhof','anschluss-verpasst','c1-zug-faellt-aus'],
  ws:['a2-unterwegs','stadt'], ho:['stadt','reisen'], hilf:['wechselpraepositionen','vokale'],
  lek:'nach-dem-weg-fragen-a2.html' },

{ id:'werkstatt', weg:'freizeit', gr:'unterwegs', t:'Auto & Werkstatt',
  u:'Einen Schaden beschreiben und einen Preis nennen lassen.',
  zeichen:'blitz', lvl:'A2–B2',
  dlg:['fahrrad-reparatur','mietwagen-abholen'], ws:['a2-werkstatt'], ho:[], hilf:['passiv-praesens'],
  lek:null },

{ id:'reise', weg:'freizeit', gr:'unterwegs', t:'Reisen & Hotel',
  u:'Einchecken, umbuchen, sich zurechtfinden.',
  bild:'sz-reise', lvl:'A1–B2',
  dlg:['hotel-einchecken'], ws:['reisen','strand'], ho:['reisen'], hilf:['temporale-nebensaetze'],
  lek:'im-hotel-a2-interaktiv.html' },

{ id:'wohnen', weg:'freizeit', gr:'unterwegs', t:'Wohnung & Nachbarn',
  u:'Besichtigen, Mängel melden, Lärm ansprechen, Kaution holen.',
  zeichen:'haus', lvl:'A1–C1',
  dlg:['wohnung','nachbarn','heizung-kaputt','laerm-nachbar','kaution-zurueckfordern','muell-trennen','elektriker-bestellen','umzug-hilfe','c1-nachbar-vorwurf-laerm'],
  ws:['wohnen','a2-wohnung','a1-wohnen'], ho:['wohnen'], hilf:['wechselpraepositionen','adjektivdeklination','r'],
  lek:'wohnen-nachbarn-teil-1-a2-b1.html' },

/* ================= FREIZEIT · Menschen & Familie ================= */
{ id:'freunde', weg:'freizeit', gr:'menschen', t:'Freunde & Gefühle',
  u:'Absagen, trösten, streiten, Grenzen setzen — freundlich.',
  zeichen:'herz', lvl:'A1–B2',
  dlg:['einladung-absagen','kompliment-annehmen','zu-viel-verlangt','verspaetung-entschuldigen','streit-klaeren','jemanden-troesten','heimweh-sprechen','nicht-verstanden'],
  ws:['gefuehle','persoenlichkeit'], ho:['gefuehle','persoenlichkeit'], hilf:['konjunktiv2','nebensaetze','satzmelodie'],
  lek:'wortschatz-gefuehle-b1.html' },

{ id:'familie', weg:'freizeit', gr:'menschen', t:'Familie & Kinder',
  u:'Betreuung organisieren, Absprachen treffen, Ratschläge abwehren.',
  zeichen:'gruppe', lvl:'A2–B2',
  dlg:['kinderbetreuung-bitten','bildschirmzeit-absprache','geburtstag-planen','erziehungstipp-schwieger'],
  ws:['c1-familie','a1-familie'], ho:[], hilf:['konjunktiv2','temporale-nebensaetze'],
  lek:'meine-familie-a2.html' },

{ id:'schule', weg:'freizeit', gr:'menschen', t:'Kita & Schule',
  u:'Elterngespräch führen — und für dein Kind einstehen.',
  zeichen:'buch', lvl:'A2–C1',
  dlg:['kita-eingewoehnung','elterngespraech-schule','kind-wird-geaergert','c1-elterngespraech-schule','pruefung-wiederholen'],
  ws:['a2-schule','bildung'], ho:['bildung'], hilf:['nebensaetze','indirekte-rede'],
  lek:null },

{ id:'feste', weg:'freizeit', gr:'menschen', t:'Feiern & Feste',
  u:'Small Talk halten — auch bei der Frage „Woher kommen Sie?".',
  bild:'sz-feste', lvl:'A2–C1',
  dlg:['party','c1-feier-woher-kommen-sie'],
  ws:['feste','kultur','a2-freizeit'], ho:[], hilf:['perfekt-praeteritum','satzmelodie'],
  lek:'feste-freizeit-teil-1-a2-b1.html' },

/* ================= BERUF · Überall im Job ================= */
{ id:'bewerbung', weg:'beruf', gr:'ueberall', t:'Bewerbung & Vorstellung',
  u:'Sich vorstellen, nachfassen, Unterlagen klären, Gehalt verhandeln.',
  zeichen:'stift', lvl:'A2–C1',
  dlg:['bewerbung','bewerbung-nachfassen','unterlagen-nachreichen','probearbeit-termin','praktikum','gehalt','c1-gehalt-und-luecke'],
  ws:['bewerbung-b1','c1-bewerbung'], ho:[], hilf:['konjunktiv2','perfekt-praeteritum','satzmelodie'],
  lek:null },

{ id:'erste-tage', weg:'beruf', gr:'ueberall', t:'Die ersten Tage',
  u:'Sich vorstellen, um Hilfe bitten, eine unklare Aufgabe klären.',
  zeichen:'haken', lvl:'A2–B2',
  dlg:['erster-tag','hilfe-buero','unklare-aufgabe','lieferung-annehmen'],
  ws:['a2-arbeit','arbeit'], ho:['arbeit'], hilf:['nebensaetze','wortakzent'],
  lek:null },

{ id:'team', weg:'beruf', gr:'ueberall', t:'Team, Telefon & Termine',
  u:'Ans Telefon gehen, im Meeting etwas sagen, Termine verschieben.',
  bild:'sz-buero', lvl:'A2–C1',
  dlg:['telefon-melden','meeting','termin-verschieben','mail-missverstaendnis','dienstplan-fehler','neue-kollegin-zeigen'],
  ws:['c1-buero','arbeit'], ho:['arbeit'], hilf:['indirekte-rede','konjunktiv2'],
  lek:'wortschatz-arbeit-b1.html' },

{ id:'rechte', weg:'beruf', gr:'ueberall', t:'Krank, Urlaub & Schicht',
  u:'Sich krankmelden, Urlaub beantragen, einen Tausch ablehnen.',
  zeichen:'uhr', lvl:'A2–B2',
  dlg:['krankmeldung','urlaub','schichttausch-ablehnen'],
  ws:['a2-arbeit'], ho:[], hilf:['konjunktiv2','temporale-nebensaetze'],
  lek:null },

{ id:'heikel', weg:'beruf', gr:'ueberall', t:'Heikle Gespräche',
  u:'Kritik äußern, Fehler zugeben, eine Frist reißen, Nein sagen.',
  zeichen:'idee', lvl:'B1–C1',
  dlg:['feedback','frist-nicht-halten','zuschnitt-fehler','c1-aufgabe-zurueckgeben','kunde'],
  ws:['redemittel','c1-kunden'], ho:[], hilf:['konjunktiv2','indirekte-rede','nominalisierung'],
  lek:null },

/* ================= BERUF · Die zwanzig Felder =================
   Titel, Niveau, Prüfung und alles Material stehen in berufe.js.
   Hier steht nur, wie das Feld aussehen soll und welche Dialoge
   aus dialoge.js zusätzlich dazugehören. */
{ id:'pflege',        weg:'beruf', gr:'feld', beruf:'pflege',        zeichen:'herz',
  dlg:['uebergabe-station','angehoerige-kritik','bewohnerin-verweigert','c1-angehoerige-vorwurf'],
  ws:['pflege-b1','c1-pflege'], lek:null },
{ id:'medizin',       weg:'beruf', gr:'feld', beruf:'medizin',       zeichen:'lupe',  dlg:[], ws:['c1-arzt'], lek:null },
{ id:'erziehung',     weg:'beruf', gr:'feld', beruf:'erziehung',     zeichen:'gruppe',dlg:['kita-eingewoehnung'], ws:['a2-schule'], lek:null },
{ id:'bau',           weg:'beruf', gr:'feld', beruf:'bau',           zeichen:'blitz',
  dlg:['anweisung-baustelle','sicherheitsunterweisung'], ws:[], lek:null },
{ id:'elektro-shk',   weg:'beruf', gr:'feld', beruf:'elektro-shk',   zeichen:'blitz', dlg:['elektriker-bestellen'], ws:[], lek:null },
{ id:'metall',        weg:'beruf', gr:'feld', beruf:'metall',        zeichen:'haken', dlg:['zuschnitt-fehler'], ws:[], lek:null },
{ id:'fahren',        weg:'beruf', gr:'feld', beruf:'fahren',        zeichen:'karten',
  dlg:['c1-fehler-in-der-lieferkette','lieferung-annehmen'], ws:['a2-unterwegs'], lek:null },
{ id:'kueche',        weg:'beruf', gr:'feld', beruf:'kueche',        zeichen:'essen',
  dlg:['bestellung-kueche','c1-gast-wird-laut'], ws:['a2-essen'], lek:null },
{ id:'hotel',         weg:'beruf', gr:'feld', beruf:'hotel',         zeichen:'ton',   dlg:['hotel-einchecken'], ws:['reisen'], lek:null },
{ id:'handel',        weg:'beruf', gr:'feld', beruf:'handel',        zeichen:'karten',
  dlg:['reklamation-laden','umtausch'], ws:['a2-einkaufen'], lek:null },
{ id:'reinigung',     weg:'beruf', gr:'feld', beruf:'reinigung',     zeichen:'haken', dlg:[], ws:[], lek:null },
{ id:'lager',         weg:'beruf', gr:'feld', beruf:'lager',         zeichen:'abgeben',
  dlg:['lieferung-annehmen'], ws:[], lek:null },
{ id:'produktion',    weg:'beruf', gr:'feld', beruf:'produktion',    zeichen:'serie', dlg:['sicherheitsunterweisung'], ws:[], lek:null },
{ id:'it',            weg:'beruf', gr:'feld', beruf:'it',            zeichen:'idee',  dlg:['mail-missverstaendnis'], ws:['medien','ki-arbeitswelt'], lek:null },
{ id:'ingenieur',     weg:'beruf', gr:'feld', beruf:'ingenieur',     zeichen:'lupe',  dlg:[], ws:[], lek:null },
{ id:'buero',         weg:'beruf', gr:'feld', beruf:'buero',         zeichen:'stift',
  dlg:['meeting','telefon-melden'], ws:['c1-buero','arbeit'], lek:'wortschatz-arbeit-b1.html' },
{ id:'buchhaltung',   weg:'beruf', gr:'feld', beruf:'buchhaltung',   zeichen:'karten',dlg:['rechnung-reklamieren'], ws:['c1-vertrag'], lek:null },
{ id:'friseur-beruf', weg:'beruf', gr:'feld', beruf:'friseur',       zeichen:'herz',  dlg:['friseur'], ws:['a2-friseur'], lek:null },
{ id:'landwirtschaft',weg:'beruf', gr:'feld', beruf:'landwirtschaft',zeichen:'serie', dlg:[], ws:['natur'], lek:null },
{ id:'sozial',        weg:'beruf', gr:'feld', beruf:'sozial',        zeichen:'gruppe',dlg:['jobcenter-weiterbewilligung'], ws:['integration'], lek:null }

];
