/* ==================================================================
   ENTWURF – Emilia · 26.11.2026 · Thema: Duzen & Siezen (id: duzen)
   Noch NICHT in einheit-wow.html eingefügt (Oskar baut das 3-Stufen-Gerüst).
   Pro Stufe ein vollständiger Block im Format der ANLEITUNG.
   gelb = Grundstufe · blau = Mittelstufe · gruen = Oberstufe
   (Die Stufen-Namen zeigt das Gerüst an, im Inhalt stehen keine Niveau-Labels.)
   Oskar: Bitte so einhängen, wie dein neues Gerüst es braucht,
   z. B. EINHEITEN.duzen = DUZEN_STUFEN;
   ================================================================== */
const DUZEN_STUFEN={

/* ---------------------------- GELB ---------------------------- */
gelb:{
  titel:'Duzen & Siezen', emoji:'🤝', bereich:'Landeskunde DACH',
  intro:'„Du“ oder „Sie“? Hier lernt ihr, wann man was sagt.',
  glossar:{
    'duzen':{e:'😊',t:'„du“ sagen. Das ist freundlich und locker.'},
    'siezen':{e:'🎩',t:'„Sie“ sagen. Das ist höflich und mit Abstand.'},
    'Fremde':{e:'🚶',t:'Menschen, die du nicht kennst.'}
  },
  dach:[
    'Zu Familie, Freunden und Kindern sagt man „du“. Das heißt <g>duzen</g>.',
    'Zu <g>Fremde</g>n, beim Arzt und beim Amt sagt man „Sie“. Das heißt <g>siezen</g>.',
    'Mit „Sie“ sagt man auch „Herr“ oder „Frau“ und den Nachnamen: „Guten Tag, Frau Weber!“',
    'Unter jungen Leuten und im Sportverein sagt man fast immer „du“.'
  ],
  skala:{titel:'🤝 Du oder Sie?', legende:'🔴 immer „Sie“ &nbsp; 🟡 kommt darauf an &nbsp; 🟢 meistens „du“. Und wie ist das in eurem Land?'},
  situationen:[
    {o:'Arzt & Amt', ic:'🏛️', s:3, meter:95, w:'Sie', t:'Hier sagt man immer „Sie“.'},
    {o:'Arbeit', ic:'💼', s:2, meter:55, w:'mal so, mal so', t:'In manchen Firmen „du“, in anderen „Sie“.'},
    {o:'Freunde & Familie', ic:'🏡', s:1, meter:10, w:'du', t:'Hier sagt man immer „du“.'}
  ],
  merk:'Kennst du die Person nicht? Dann sag „Sie“. Bietet sie dir das „du“ an, darfst du „du“ sagen.',
  ablauf:'Lest zuerst gemeinsam die Fakten. Dann nimmt sich <b>eine Person eine Frage</b> und liest sie vor. <b>Alle antworten reihum</b> – nutzt die Antwort-Hilfen, wenn ihr nicht weiterwisst.',
  fragen:[
    {q:'Zu wem sagst du „du“?', folge:['Sagst du „du“ zu deinen Nachbarn?','Sagst du „du“ zu deinem Chef?'], antw:['Ich sage „du“ zu meiner Familie und zu meinen Freunden.','Zu meinen Kollegen sage ich auch „du“.','Zu meinen Nachbarn sage ich noch „Sie“.']},
    {q:'Gibt es „du“ und „Sie“ auch in deiner Sprache?', folge:['Wie sagt man das in deiner Sprache?','Ist das für dich schwer auf Deutsch?'], antw:['Ja, bei uns gibt es das auch.','Nein, in meiner Sprache gibt es nur ein Wort.','Am Anfang war das für mich schwer.']},
    {q:'Was machst du, wenn du nicht weißt: „du“ oder „Sie“?', folge:['Hast du schon mal einen Fehler gemacht?','Fragst du dann einfach?'], antw:['Dann sage ich lieber „Sie“.','Ich höre zuerst, was die andere Person sagt.','Ich frage einfach: „Duzen wir uns?“']}
  ],
  chunks:[
    {h:'🤝 Das „du“ anbieten', l:['Wollen wir uns duzen?','Sag einfach „du“ zu mir!','Ich bin Anna.']},
    {h:'🙋 Unsicher sein', l:['Darf ich „du“ sagen?','Entschuldigung, ich war unsicher.','Bei uns ist das anders.']}
  ],
  vokabeln:[
    {w:'duzen', bsp:'Wir duzen uns.', ue:'„du“ zu jemandem sagen'},
    {w:'siezen', bsp:'Beim Arzt siezt man sich.', ue:'„Sie“ zu jemandem sagen'},
    {w:'höflich', bsp:'„Sie“ ist höflich.', ue:'nett und mit Respekt'},
    {w:'der Nachname', bsp:'Mein Nachname ist Weber.', ue:'der Familienname, z. B. „Weber“'},
    {w:'der Kollege', bsp:'Mein Kollege heißt Tom.', ue:'Person, mit der du arbeitest'}
  ],
  tipp:'Wenn du unsicher bist: Sag zuerst „Sie“. Das ist nie falsch.',
  mission:{t:'Benutzt 5 neue Wörter', d:'Jedes neue Wort aus dieser Stunde zählt. Schafft ihr 5?', pts:20},
  aktiv:{
    titel:'Spielt eine kleine Szene', emoji:'🎭',
    aufgabe:'Erster Tag bei der Arbeit. Ihr trefft euch in der Küche und kennt euch noch nicht.',
    rollenA:'🙋 Du bist neu. Stell dich vor. Sag „Sie“.',
    rollenB:'☕ Du arbeitest schon lange hier. Biete das „du“ an.',
    hilfe:['Guten Morgen! Ich bin neu hier.','Mein Name ist …','Wollen wir uns duzen? Ich bin …','Gern! Ich bin …'],
    pts:15
  },
  quiz:[
    {q:'Du gehst zum Arzt. Was sagst du?',o:['„Sie“','„du“','Egal'],r:0},
    {q:'Was sagst du zu deinem kleinen Bruder?',o:['„Sie“','„du“','„Herr“'],r:1},
    {q:'Du bist unsicher. Was ist am besten?',o:['Ich sage „du“.','Ich sage lieber „Sie“.','Ich sage nichts.'],r:1}
  ]
},

/* ---------------------------- BLAU ---------------------------- */
blau:{
  titel:'Duzen & Siezen', emoji:'🤝', bereich:'Landeskunde DACH',
  intro:'Wer bietet wem das „du“ an – und warum ist das manchmal so kompliziert?',
  glossar:{
    'das Du anbieten':{e:'🎁',t:'sagen: „Wollen wir uns duzen?“ Das macht meistens die ältere oder wichtigere Person.'},
    'förmlich':{e:'🎩',t:'offiziell und höflich, mit Abstand.'},
    'Hierarchie':{e:'🪜',t:'wer in einer Firma oben ist (Chef) und wer unten.'}
  },
  dach:[
    'Normalerweise darf die ältere Person oder der Chef <g>das Du anbieten</g>. Die jüngere Person fragt besser nicht zuerst.',
    'In vielen Start-ups und großen Firmen duzen sich alle – auch mit dem Chef. In Banken und Behörden ist es oft <g>förmlich</g>.',
    'Wo die <g>Hierarchie</g> flach ist, duzt man schneller.',
    'In der Schweiz duzt man oft schneller als in Deutschland. In Österreich sind Titel wie „Frau Doktor“ noch wichtiger.',
    'Im Internet, in Werbung und in Apps sagt man fast immer „du“.'
  ],
  skala:{titel:'🤝 Wo duzt man?', legende:'🔴 meistens „Sie“ &nbsp; 🟡 kommt darauf an &nbsp; 🟢 meistens „du“. Und wie ist das in eurem Land?'},
  situationen:[
    {o:'Behörde & Bank', ic:'🏦', s:3, meter:90, w:'Sie', t:'Offiziell und förmlich – hier bleibt man beim „Sie“.'},
    {o:'Büro & Firma', ic:'💼', s:2, meter:55, w:'kommt darauf an', t:'Start-up: „du“. Alte Firma: oft „Sie“.'},
    {o:'Verein & Internet', ic:'⚽', s:1, meter:15, w:'du', t:'Im Sportverein und online duzt man sofort.'}
  ],
  merk:'Das „du“ bietet meistens die ältere Person oder der Chef an. Wer unsicher ist, wartet – oder fragt freundlich.',
  ablauf:'Lest zuerst gemeinsam die Fakten. Dann nimmt sich <b>eine Person eine Frage</b> und liest sie vor. <b>Alle antworten reihum</b> und stellen danach die Folgefragen.',
  fragen:[
    {q:'Duzt oder siezt ihr euch bei der Arbeit oder im Kurs?', folge:['Wer hat das „du“ angeboten?','Findest du das gut so?'], antw:['Bei uns duzen sich alle, auch mit dem Chef.','Mit den Kollegen duze ich mich, den Chef sieze ich.','Am Anfang haben wir uns gesiezt, später geduzt.']},
    {q:'Ist dir schon mal ein „du“ oder „Sie“ falsch herausgerutscht?', folge:['Wie hat die andere Person reagiert?','Was hast du dann gesagt?'], antw:['Ja, ich habe meine Vermieterin aus Versehen geduzt.','Das war mir ein bisschen peinlich.','Die Person hat gelacht und gesagt: „Kein Problem!“']},
    {q:'Was gefällt dir besser: „du“ oder „Sie“?', folge:['Wirkt „Sie“ für dich kalt oder respektvoll?','Wie ist das in deinem Land mit Älteren?'], antw:['Mir gefällt „du“ besser, das ist persönlicher.','Ich finde „Sie“ respektvoll, nicht kalt.','In meinem Land spricht man Ältere sehr höflich an.']}
  ],
  chunks:[
    {h:'🎁 Das „du“ anbieten und annehmen', l:['Wir können uns gern duzen.','Ich heiße übrigens Markus.','Gern, das ist mir sogar lieber!']},
    {h:'😅 Einen Fehler retten', l:['Oh, Entschuldigung – ich meinte natürlich „Sie“.','Duzen wir uns schon oder noch nicht?','Ich bin mir da nie ganz sicher.']}
  ],
  vokabeln:[
    {w:'das Du anbieten', bsp:'Mein Chef hat mir das Du angeboten.', ue:'vorschlagen, dass man sich duzt'},
    {w:'förmlich', bsp:'Die E-Mail ist sehr förmlich.', ue:'offiziell, mit Abstand'},
    {w:'die Anrede', bsp:'Die Anrede in Briefen ist „Sehr geehrte Frau …“.', ue:'wie man eine Person anspricht'},
    {w:'aus Versehen', bsp:'Ich habe sie aus Versehen geduzt.', ue:'ohne Absicht, nicht geplant'},
    {w:'peinlich', bsp:'Der Fehler war mir peinlich.', ue:'man schämt sich ein bisschen'},
    {w:'der Respekt', bsp:'„Sie“ zeigt Respekt.', ue:'man achtet eine andere Person'}
  ],
  tipp:'Duzt dich jemand, darfst du meistens zurückduzen. Siezt dich jemand, bleib beim „Sie“, bis dir das „du“ angeboten wird.',
  mission:{t:'Benutzt 5 neue Wörter', d:'Jedes neue Wort aus dieser Stunde zählt. Schafft ihr 5?', pts:20},
  aktiv:{
    titel:'Spielt eine kleine Szene', emoji:'🎭',
    aufgabe:'Ihr arbeitet seit drei Monaten zusammen und siezt euch noch. Eine Person möchte das ändern.',
    rollenA:'🙋 Du bist länger in der Firma. Biete das „du“ an.',
    rollenB:'💼 Du bist neuer. Reagiere – freust du dich oder bist du lieber vorsichtig?',
    hilfe:['Wir arbeiten jetzt schon so lange zusammen …','Wollen wir uns nicht duzen?','Sehr gern! Ich heiße übrigens …','Gern, aber vor Kunden sage ich lieber noch „Sie“.'],
    pts:15
  },
  quiz:[
    {q:'Wer bietet normalerweise das „du“ an?',o:['die jüngere Person','die ältere Person oder der Chef','immer der Gast'],r:1},
    {q:'Wo siezt man fast immer?',o:['im Sportverein','auf Instagram','bei der Behörde'],r:2},
    {q:'Dein neuer Kollege duzt dich. Was kannst du tun?',o:['zurückduzen','ihn ignorieren','„Frau“ sagen'],r:0},
    {q:'Wo duzt man oft schneller als in Deutschland?',o:['in der Schweiz','beim Amt','vor Gericht'],r:0}
  ]
},

/* ---------------------------- GRUEN ---------------------------- */
gruen:{
  titel:'Duzen & Siezen', emoji:'🤝', bereich:'Landeskunde DACH',
  intro:'Ein kleines Wort mit großer Wirkung: Was sagt das „du“ über eine Gesellschaft?',
  glossar:{
    'Distanz':{e:'↔️',t:'innerer Abstand zwischen Menschen, z. B. im Beruf.'},
    'Beleidigung':{e:'⚠️',t:'ein Wort oder eine Handlung, die jemanden kränkt. Kann sogar strafbar sein.'},
    'Brüderschaft trinken':{e:'🍻',t:'alter Brauch: Man trinkt zusammen und duzt sich danach.'},
    'Duz-Kultur':{e:'🌐',t:'wenn in einer Firma oder Branche alle „du“ sagen.'}
  },
  dach:[
    'Das „Sie“ schafft <g>Distanz</g> – das kann Respekt zeigen, aber auch Kälte.',
    'Viele Firmen haben eine <g>Duz-Kultur</g> eingeführt, damit alle sich näher und gleichberechtigt fühlen.',
    'Wer einen Polizisten bewusst duzt, riskiert, dass das als <g>Beleidigung</g> gilt – im Extremfall droht eine Geldstrafe.',
    'Früher hat man oft <g>Brüderschaft trinken</g> müssen, um sich zu duzen. Heute geht es meistens schneller.',
    'Ein angebotenes „du“ abzulehnen, wirkt in Deutschland schnell unfreundlich.'
  ],
  skala:{titel:'🤝 Nähe oder Distanz?', legende:'🔴 viel Distanz &nbsp; 🟡 gemischt &nbsp; 🟢 viel Nähe. Und wie ist das in eurem Land?'},
  situationen:[
    {o:'Polizei & Gericht', ic:'⚖️', s:3, meter:98, w:'nur „Sie“', t:'Ein „du“ kann hier als Beleidigung gelten.'},
    {o:'Konzern & Kundschaft', ic:'🏢', s:2, meter:60, w:'gemischt', t:'Intern „du“, gegenüber Kunden oft „Sie“.'},
    {o:'Start-up & Social Media', ic:'📱', s:1, meter:10, w:'nur „du“', t:'Hier wirkt „Sie“ fast schon seltsam.'}
  ],
  merk:'„Du“ oder „Sie“ ist keine Grammatik-, sondern eine Beziehungsfrage: Es zeigt Nähe, Distanz und Machtverhältnisse.',
  ablauf:'Lest zuerst gemeinsam die Fakten. Eine Person liest eine Frage vor, <b>alle antworten reihum</b>. Widersprecht euch ruhig – begründet eure Meinung.',
  fragen:[
    {q:'Sollten Firmen das „du“ für alle einführen?', folge:['Wird die Hierarchie dadurch wirklich flacher?','Ist es leichter, einen Chef zu kritisieren, den man duzt?'], antw:['Ich finde das gut, weil es die Zusammenarbeit lockerer macht.','Meiner Meinung nach ändert ein Wort nichts an der Macht des Chefs.','Einerseits schafft das „du“ Nähe, andererseits fehlt manchmal die Grenze.']},
    {q:'Kann man ein angebotenes „du“ ablehnen?', folge:['Wie würdest du das höflich formulieren?','In welcher Situation würdest du lieber beim „Sie“ bleiben?'], antw:['Theoretisch ja, aber das wirkt schnell kühl.','Ich würde sagen, dass ich mich mit „Sie“ wohler fühle.','Bei meinem Vermieter bleibe ich lieber beim „Sie“.']},
    {q:'Stirbt das „Sie“ irgendwann aus?', folge:['Welche Rolle spielen Werbung und Internet dabei?','Wäre das ein Verlust oder ein Fortschritt?'], antw:['Ich glaube schon, weil junge Leute fast nur noch duzen.','Nein, bei Behörden und vor Gericht wird es bleiben.','Für mich wäre das ein Verlust, weil „Sie“ Respekt zeigt.']}
  ],
  chunks:[
    {h:'💬 Meinung begründen', l:['Ich bin der Meinung, dass …, weil …','Einerseits …, andererseits …','Das sehe ich ganz anders.']},
    {h:'🎩 Höflich ablehnen', l:['Das ist sehr nett, aber mir ist „Sie“ im Beruf lieber.','Darf ich vorerst beim „Sie“ bleiben?','Nehmen Sie es bitte nicht persönlich.']}
  ],
  vokabeln:[
    {w:'die Distanz', bsp:'Das „Sie“ schafft Distanz.', ue:'innerer Abstand zwischen Menschen'},
    {w:'die Beleidigung', bsp:'Das Duzen eines Polizisten kann als Beleidigung gelten.', ue:'Worte, die jemanden kränken'},
    {w:'gleichberechtigt', bsp:'Im Team sind alle gleichberechtigt.', ue:'alle haben dieselben Rechte'},
    {w:'ablehnen', bsp:'Sie hat das Du abgelehnt.', ue:'„nein“ sagen zu einem Angebot'},
    {w:'die Grenze', bsp:'Mit „Sie“ ziehe ich eine klare Grenze.', ue:'bis hierhin und nicht weiter'},
    {w:'aussterben', bsp:'Stirbt das „Sie“ aus?', ue:'langsam ganz verschwinden'}
  ],
  tipp:'Im Beruf gilt: Ein „du“ vom Chef annehmen ist normal – aber in E-Mails an Kunden bleibt man trotzdem oft beim „Sie“.',
  mission:{t:'Benutzt 5 neue Wörter', d:'Jedes neue Wort aus dieser Stunde zählt. Schafft ihr 5?', pts:20},
  aktiv:{
    titel:'Spielt eine kleine Szene', emoji:'🎭',
    aufgabe:'Teamsitzung: Die Firma will ab Montag eine Duz-Kultur für alle. Eine Person ist dafür, eine dagegen.',
    rollenA:'🚀 Du bist dafür. Nenne zwei Gründe.',
    rollenB:'🎩 Du bist skeptisch. Erkläre, was du befürchtest.',
    hilfe:['Ich bin dafür, weil wir dann schneller und offener reden.','Ich befürchte, dass die Grenzen verschwinden.','Und was machen wir mit Kunden?','Wie wäre es mit einem Kompromiss: intern „du“, extern „Sie“?'],
    pts:15
  },
  quiz:[
    {q:'Was kann passieren, wenn man einen Polizisten bewusst duzt?',o:['Es kann als Beleidigung gelten.','Man bekommt einen Preis.','Nichts, das ist normal.'],r:0},
    {q:'Was bedeutet „Brüderschaft trinken“?',o:['einen Streit beenden','zusammen trinken und sich danach duzen','nur mit Brüdern feiern'],r:1},
    {q:'Warum führen Firmen eine Duz-Kultur ein?',o:['damit sich alle näher und gleichberechtigt fühlen','damit Kunden weniger kaufen','weil es ein Gesetz gibt'],r:0},
    {q:'Wie wirkt es in Deutschland, ein angebotenes „du“ abzulehnen?',o:['sehr lustig','schnell unfreundlich','völlig egal'],r:1}
  ]
}
};
if(typeof module!=='undefined') module.exports=DUZEN_STUFEN;
