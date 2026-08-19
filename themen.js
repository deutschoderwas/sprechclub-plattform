/* ============================================================
   deutschoderwas club — Themen & Bausteine
   Die eine Liste, aus der der Lernbereich gebaut wird.

   Zwei Ebenen:
     1. BEREICHE   Deutsch für die Freizeit · Deutsch für den Beruf
     2. THEMEN     die großen Fotokarten in einem Bereich
     3. BAUSTEINE  Grammatik und Aussprache — stehen klein unter
                   beiden Bereichen und auf den Themenseiten dort,
                   wo man sie gerade braucht

   Ein Thema:
     id    kurzer Name, wird in der Adresse benutzt
     t     Titel auf der Karte
     art   'thema'
     b     Bereich: alltag oder beruf
     lvl   Niveau
     ws    Wortschatz-Themen aus uebungen.js
     ho    Hör-Themen aus uebungen.js
     dlg   Dialog-Kategorien aus dialoge.js
     lek   die passende Lektionsseite (oder null)
     hilf  die Bausteine, die zu diesem Thema gehören

   Ein Baustein:
     art   'grammatik' oder 'aussprache'
     br    in welchen Bereichen er auftaucht
     gr/au das Übungs-Thema aus uebungen.js
     bsp   der Beispielsatz, den das Foto zeigt

   Neues Thema? Zeile anhängen und ein Foto als
   bilder/thema/<id>.jpg und <id>-s.jpg dazulegen.
   ============================================================ */

window.THEMEN_BEREICHE = [
  {id:'alltag', t:'Deutsch für die Freizeit', u:'Alles, was dir außerhalb der Arbeit begegnet'},
  {id:'beruf',  t:'Deutsch für den Beruf',    u:'Bewerbung, Kolleginnen, Kunden und Schicht'}
];

window.THEMEN = [

/* ---------------- Deutsch für die Freizeit ---------------- */
{id:'essen',            t:'Essen & Restaurant',            art:'thema', b:'alltag', lvl:'A1–B1', ws:['essen','a2-essen'] ,            ho:['essen'],            dlg:['essen'],               lek:'wortschatz-essen-b1.html',            hilf:['konjunktiv2','umlaute','s-z-ss']},
{id:'einkaufen',        t:'Einkaufen, Geld & Verträge',    art:'thema', b:'alltag', lvl:'A1–C1', ws:['einkaufen','c1-vertrag','a2-einkaufen'] ,        ho:['einkaufen'],        dlg:['einkaufen','vertrag'], lek:'wortschatz-einkaufen-b1.html',        hilf:['konjunktiv2','genitiv','s-z-ss']},
{id:'wohnen',           t:'Wohnen & Nachbarn',             art:'thema', b:'alltag', lvl:'A2–C1', ws:['wohnen','a2-wohnung'] ,           ho:['wohnen'],           dlg:['wohnen'],              lek:'wortschatz-wohnen-b1.html',           hilf:['wechselpraepositionen','adjektivdeklination','r']},
{id:'gesundheit',       t:'Gesundheit, Arzt & Notfall',    art:'thema', b:'alltag', lvl:'A1–C1', ws:['gesundheit','zahnarzt','c1-arzt','a2-arzt'] , ho:['gesundheit'],  dlg:['gesundheit','notfall'],lek:'wortschatz-gesundheit-b1.html',       hilf:['perfekt-praeteritum','konnektoren','ch']},
{id:'amt',              t:'Ämter, Behörden & Ankommen',    art:'thema', b:'alltag', lvl:'A2–C1', ws:['integration','c1-amt','amt-b1','a2-amt'] ,      ho:[],                   dlg:['amt'],                 lek:null,                                  hilf:['nominalisierung','genitiv','konnektoren']},
{id:'reisen',           t:'Reisen, Bahn & Flughafen',      art:'thema', b:'alltag', lvl:'A1–C1', ws:['reisen','a2-unterwegs'] ,           ho:['reisen'],           dlg:['unterwegs'],           lek:'wortschatz-reisen-b1.html',           hilf:['temporale-nebensaetze','wechselpraepositionen','r']},
{id:'stadt',            t:'Stadt & Verkehr',               art:'thema', b:'alltag', lvl:'A2–B1', ws:['stadt'],            ho:['stadt'],            dlg:[],                      lek:'wortschatz-stadt-b1.html',            hilf:['wechselpraepositionen','vokale']},
{id:'menschen',         t:'Menschen kennenlernen',         art:'thema', b:'alltag', lvl:'A2–C1', ws:['persoenlichkeit'],  ho:['persoenlichkeit'],  dlg:['menschen'],            lek:'wortschatz-persoenlichkeit-b1.html',  hilf:['adjektivdeklination','relativsaetze','satzmelodie']},
{id:'gefuehle',         t:'Gefühle & heikle Gespräche',    art:'thema', b:'alltag', lvl:'A2–B2', ws:['gefuehle'],         ho:['gefuehle'],         dlg:['gefuehle'],            lek:'wortschatz-gefuehle-b1.html',         hilf:['konjunktiv2','nebensaetze','satzmelodie']},
{id:'familie',          t:'Familie, Kinder & Schule',      art:'thema', b:'alltag', lvl:'A2–C1', ws:['c1-familie'],                   ho:[],                   dlg:['familie','bildung'],   lek:null,                                  hilf:['temporale-nebensaetze','konnektoren','wortakzent']},
{id:'bildung',          t:'Lernen & Bildung',              art:'thema', b:'alltag', lvl:'A2–B2', ws:['bildung'],          ho:['bildung'],          dlg:[],                      lek:'wortschatz-bildung-b1.html',          hilf:['nebensaetze','perfekt-praeteritum']},
{id:'natur',            t:'Natur, Wetter & Umwelt',        art:'thema', b:'alltag', lvl:'A2–B1', ws:['natur'],            ho:['natur'],            dlg:[],                      lek:'wortschatz-natur-b1.html',            hilf:['adjektivdeklination','konnektoren']},
{id:'medien',           t:'Medien, Internet & Digitales',  art:'thema', b:'alltag', lvl:'B1–B2', ws:['medien'],           ho:['medien'],           dlg:[],                      lek:'wortschatz-medien-b1.html',           hilf:['relativsaetze','passiv-praesens']},
{id:'kultur',           t:'Kultur, Feste & Traditionen',   art:'thema', b:'alltag', lvl:'A2–B1', ws:['kultur','feste','a2-freizeit'] ,   ho:[],                   dlg:[],                      lek:null,                                  hilf:['perfekt-praeteritum','temporale-nebensaetze']},
{id:'strand',           t:'Urlaub am Meer',                art:'thema', b:'alltag', lvl:'A2–B1', ws:['strand'],           ho:[],                   dlg:[],                      lek:null,                                  hilf:['adjektivdeklination','vokale']},
{id:'redewendungen',    t:'Redewendungen im Alltag',       art:'thema', b:'alltag', lvl:'B1',    ws:['redewendungen'],    ho:['redewendungen'],    dlg:[],                      lek:'wortschatz-redewendungen-b1.html',    hilf:['perfekt-praeteritum','ch']},
{id:'umgangssprache',   t:'Umgangssprache & Slang',        art:'thema', b:'alltag', lvl:'B2',    ws:['umgangssprache'],   ho:['umgangssprache'],   dlg:[],                      lek:null,                                  hilf:['satzmelodie','r']},
{id:'typisch-deutsch',  t:'Typisch deutsche Wörter',       art:'thema', b:'alltag', lvl:'B1',    ws:['typisch-deutsch'],  ho:['typisch-deutsch'],  dlg:[],                      lek:'wortschatz-typisch-deutsch-b1.html',  hilf:['umlaute','wortakzent']},
{id:'starke-adjektive', t:'Starke Adjektive',              art:'thema', b:'alltag', lvl:'B1',    ws:['starke-adjektive'], ho:['starke-adjektive'], dlg:[],                      lek:'wortschatz-starke-adjektive-b1.html', hilf:['adjektivdeklination','vokale']},
{id:'redemittel',       t:'Diskutieren & Plaudern',        art:'thema', b:'alltag', lvl:'B2',    ws:['redemittel'],       ho:[],                   dlg:[],                      lek:null,                                  hilf:['konnektoren','konjunktiv2','satzmelodie']},

/* ---------------- Deutsch für den Beruf ---------------- */
{id:'buero',            t:'Büro & Kolleginnen',            art:'thema', b:'beruf',  lvl:'A2–C1', ws:['arbeit','c1-buero','a2-arbeit'] ,           ho:['arbeit'],           dlg:['buero','team'],        lek:'wortschatz-arbeit-b1.html',           hilf:['indirekte-rede','konjunktiv2','wortakzent']},
{id:'bewerbung',        t:'Bewerbung & Vorstellung',       art:'thema', b:'beruf',  lvl:'B1–C1', ws:['c1-bewerbung','bewerbung-b1'],                   ho:[],                   dlg:['bewerbung'],           lek:null,                                  hilf:['konjunktiv2','perfekt-praeteritum','satzmelodie']},
{id:'kunden',           t:'Kunden & Telefon',              art:'thema', b:'beruf',  lvl:'B1–C1', ws:['c1-kunden'],                   ho:[],                   dlg:['kunden'],              lek:null,                                  hilf:['konjunktiv2','passiv-praesens','satzmelodie']},
{id:'pflege',           t:'Pflege & Klinik',               art:'thema', b:'beruf',  lvl:'A2–C1', ws:['c1-pflege','pflege-b1'],                   ho:[],                   dlg:['pflege'],              lek:null,                                  hilf:['passiv-praesens','nebensaetze','ch']},
{id:'handwerk',         t:'Handwerk & Baustelle',          art:'thema', b:'beruf',  lvl:'A2–B2', ws:[],                   ho:[],                   dlg:['handwerk'],            lek:null,                                  hilf:['passiv-praesens','wechselpraepositionen','wortakzent']},
{id:'ki-arbeitswelt',   t:'KI & Arbeitswelt',              art:'thema', b:'beruf',  lvl:'B2',    ws:['ki-arbeitswelt'],   ho:[],                   dlg:[],                      lek:null,                                  hilf:['passiv-praesens','nominalisierung','relativsaetze']},

/* ---------------- Grammatik ---------------- */
{id:'adjektivdeklination',  t:'Adjektivdeklination',  art:'grammatik', br:['alltag','beruf'], lvl:'B1', gr:'adjektivdeklination',  lek:'grammatik-adjektivdeklination-b1.html',  bsp:'der rote Apfel · die grüne Tasche · das blaue Buch'},
{id:'genitiv',              t:'Genitiv',              art:'grammatik', br:['alltag','beruf'], lvl:'B1', gr:'genitiv',              lek:'grammatik-genitiv-b1.html',              bsp:'der Hund des Nachbarn'},
{id:'indirekte-rede',       t:'Indirekte Rede',       art:'grammatik', br:['beruf'],          lvl:'B2', gr:'indirekte-rede',       lek:'grammatik-indirekte-rede-b2.html',       bsp:'Sie erzählt, er sei umgezogen.'},
{id:'konjunktiv2',          t:'Konjunktiv II',        art:'grammatik', br:['alltag','beruf'], lvl:'B1', gr:'konjunktiv2',          lek:'grammatik-konjunktiv2-b1.html',          bsp:'Wenn ich Zeit hätte, würde ich verreisen.'},
{id:'konnektoren',          t:'Konnektoren',          art:'grammatik', br:['alltag','beruf'], lvl:'B1', gr:'konnektoren',          lek:'grammatik-konnektoren-b1.html',          bsp:'Ich bleibe zu Hause, weil es regnet.'},
{id:'nebensaetze',          t:'Nebensätze',           art:'grammatik', br:['alltag','beruf'], lvl:'B1', gr:'nebensaetze',          lek:'grammatik-nebensaetze-b1.html',          bsp:'Ich weiß, dass du kommst.'},
{id:'nominalisierung',      t:'Nominalisierung',      art:'grammatik', br:['beruf'],          lvl:'B2', gr:'nominalisierung',      lek:null,                                     bsp:'Beim Kochen höre ich Musik.'},
{id:'passiv-praesens',      t:'Passiv Präsens',       art:'grammatik', br:['beruf'],          lvl:'B1', gr:'passiv-praesens',      lek:'grammatik-passiv-praesens-b1.html',      bsp:'Das Brot wird gebacken.'},
{id:'passiv-vergangenheit', t:'Passiv Vergangenheit', art:'grammatik', br:['beruf'],          lvl:'B1', gr:'passiv-vergangenheit', lek:'grammatik-passiv-vergangenheit-b1.html', bsp:'Das Haus wurde renoviert.'},
{id:'perfekt-praeteritum',  t:'Perfekt & Präteritum', art:'grammatik', br:['alltag','beruf'], lvl:'B1', gr:'perfekt-praeteritum',  lek:'grammatik-perfekt-praeteritum-b1.html',  bsp:'Ich habe erzählt — ich erzählte.'},
{id:'relativsaetze',        t:'Relativsätze',         art:'grammatik', br:['alltag','beruf'], lvl:'B1', gr:'relativsaetze',        lek:'grammatik-relativsaetze-b1.html',        bsp:'das Buch, das ich suche'},
{id:'temporale-nebensaetze',t:'Temporale Nebensätze', art:'grammatik', br:['alltag'],         lvl:'B1', gr:'temporale-nebensaetze',lek:'grammatik-temporale-nebensaetze-b1.html',bsp:'Während ich warte, lese ich.'},
{id:'wechselpraepositionen',t:'Wechselpräpositionen', art:'grammatik', br:['alltag','beruf'], lvl:'B1', gr:'wechselpraepositionen',lek:'grammatik-wechselpraepositionen-b1.html',bsp:'Die Katze sitzt auf dem Regal.'},

/* ---------------- Aussprache (in beiden Bereichen) ---------------- */
{id:'ch',          t:'Der Ch-Laut',          art:'aussprache', br:['alltag','beruf'], lvl:'A2', au:'ch',          lek:'aussprache-ch-a2.html',          bsp:'ich · die Kirche · die Milch'},
{id:'r',           t:'Das deutsche R',       art:'aussprache', br:['alltag','beruf'], lvl:'A2', au:'r',           lek:'aussprache-r-a2.html',           bsp:'der Regen · das Rad · die Rose'},
{id:'s-z-ss',      t:'S, Z und Ss',          art:'aussprache', br:['alltag','beruf'], lvl:'A2', au:'s-z-ss',      lek:'aussprache-s-z-ss-a2.html',      bsp:'die Sonne · der Zucker · die Straße'},
{id:'satzmelodie', t:'Satzmelodie',          art:'aussprache', br:['alltag','beruf'], lvl:'A2', au:'satzmelodie', lek:'aussprache-satzmelodie-a2.html', bsp:'Du kommst mit? — Du kommst mit.'},
{id:'umlaute',     t:'Ä, Ö und Ü',           art:'aussprache', br:['alltag','beruf'], lvl:'A2', au:'umlaute',     lek:'aussprache-umlaute-a2.html',     bsp:'für · schön · der Käse'},
{id:'v-w-f',       t:'V, W und F',           art:'aussprache', br:['alltag','beruf'], lvl:'A2', au:'v-w-f',       lek:'aussprache-v-w-f-a2.html',       bsp:'der Vogel · das Wasser · der Fisch'},
{id:'vokale',      t:'Lange & kurze Vokale', art:'aussprache', br:['alltag','beruf'], lvl:'A2', au:'vokale',      lek:'aussprache-vokale-a2.html',      bsp:'der Ofen — offen'},
{id:'wortakzent',  t:'Wortakzent',           art:'aussprache', br:['alltag','beruf'], lvl:'A2', au:'wortakzent',  lek:'aussprache-wortakzent-a2.html',  bsp:'der ÁPfelsaft · die BÁHNhofstraße'}

];
