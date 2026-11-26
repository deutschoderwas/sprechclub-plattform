/* Emilia · Muster Duzen & Siezen · Gerüst v2 · 26.11.2026 – Testdaten für Oskar */
stufe('duzen','ab',{
 "titel": "Duzen & Siezen",
 "emoji": "🤝",
 "bereich": "Landeskunde DACH",
 "intro": "„Du“ oder „Sie“? Hier lernt ihr, wann man was sagt.",
 "einstieg": {
  "bild": "bilder/landeskunde/duzen-einstieg.webp",
  "frage": "Zwei Menschen treffen sich zum ersten Mal im Büro. Was sagen sie wohl?",
  "o": [
   "„Hallo, wie geht’s dir?“",
   "„Guten Tag, wie geht es Ihnen?“",
   "Gar nichts."
  ],
  "r": 1,
  "aufloesung": "Bei der Arbeit und mit Fremden sagt man zuerst meistens „Sie“. Das „du“ kommt oft später."
 },
 "glossar": {
  "duzen": {
   "e": "😊",
   "t": "„du“ sagen. Das ist freundlich und locker."
  },
  "siezen": {
   "e": "🎩",
   "t": "„Sie“ sagen. Das ist höflich und mit Abstand."
  },
  "Fremde": {
   "e": "🚶",
   "t": "Menschen, die du nicht kennst."
  }
 },
 "dach": [
  "Zu Familie, Freunden und Kindern sagt man „du“. Das heißt <g>duzen</g>.",
  "Zu <g>Fremde</g>n, beim Arzt und beim Amt sagt man „Sie“. Das heißt <g>siezen</g>.",
  "Mit „Sie“ sagt man auch „Herr“ oder „Frau“ und den Nachnamen: „Guten Tag, Frau Weber!“",
  "Unter jungen Leuten und im Sportverein sagt man fast immer „du“."
 ],
 "skala": {
  "titel": "🤝 Du oder Sie?",
  "legende": "🔴 immer „Sie“ &nbsp; 🟡 kommt darauf an &nbsp; 🟢 meistens „du“. Und wie ist das in eurem Land?"
 },
 "situationen": [
  {
   "o": "Arzt & Amt",
   "ic": "🏛️",
   "s": 3,
   "meter": 95,
   "w": "Sie",
   "t": "Hier sagt man immer „Sie“."
  },
  {
   "o": "Arbeit",
   "ic": "💼",
   "s": 2,
   "meter": 55,
   "w": "mal so, mal so",
   "t": "In manchen Firmen „du“, in anderen „Sie“."
  },
  {
   "o": "Freunde & Familie",
   "ic": "🏡",
   "s": 1,
   "meter": 10,
   "w": "du",
   "t": "Hier sagt man immer „du“."
  }
 ],
 "redemittel": [
  {
   "funktion": "Jemanden mit „Sie“ begrüßen",
   "farbe": "tuerkis",
   "items": [
    {
     "s": "Guten Tag, <m>Frau</m> Weber!",
     "bsp": "Guten Tag, Frau Weber! Wie geht es Ihnen?"
    },
    {
     "s": "Wie geht es <m>Ihnen</m>?",
     "bsp": "Danke, gut. Und wie geht es Ihnen?"
    },
    {
     "s": "Darf ich <m>Sie</m> etwas fragen?",
     "bsp": "Entschuldigung, darf ich Sie etwas fragen?"
    },
    {
     "s": "Auf <m>Wiedersehen</m>!",
     "bsp": "Vielen Dank und auf Wiedersehen!"
    }
   ]
  },
  {
   "funktion": "Das „du“ anbieten",
   "farbe": "gold",
   "items": [
    {
     "s": "<m>Wollen wir uns duzen</m>?",
     "bsp": "Wir arbeiten jetzt zusammen. Wollen wir uns duzen?"
    },
    {
     "s": "Sag einfach „<m>du</m>“ zu mir!",
     "bsp": "Ich bin Anna. Sag einfach „du“ zu mir!"
    },
    {
     "s": "Ich bin <m>der</m> Tom.",
     "bsp": "Hallo, ich bin der Tom."
    },
    {
     "s": "<m>Gern</m>, ich bin Lisa.",
     "bsp": "Gern! Ich bin Lisa."
    }
   ]
  },
  {
   "funktion": "Wenn du unsicher bist",
   "farbe": "rot",
   "items": [
    {
     "s": "<m>Darf ich „du“ sagen</m>?",
     "bsp": "Entschuldigung, darf ich „du“ sagen?"
    },
    {
     "s": "<m>Duzen wir uns</m> schon?",
     "bsp": "Ich weiß es nicht mehr: Duzen wir uns schon?"
    },
    {
     "s": "Oh, <m>Entschuldigung</m>!",
     "bsp": "Oh, Entschuldigung! Ich meine natürlich „Sie“."
    },
    {
     "s": "Bei uns ist das <m>anders</m>.",
     "bsp": "Bei uns ist das anders. Wir sagen immer „du“."
    }
   ]
  }
 ],
 "dialog": {
  "situation": "Erster Tag im neuen Job. Herr Klein zeigt Ana die Küche.",
  "zeilen": [
   {
    "wer": "A",
    "t": "<m>Guten Morgen, Frau</m> Silva! Willkommen im Team."
   },
   {
    "wer": "B",
    "t": "Guten Morgen, Herr Klein! Vielen Dank."
   },
   {
    "wer": "A",
    "t": "Hier ist die Küche. Möchten <m>Sie</m> einen Kaffee?"
   },
   {
    "wer": "B",
    "t": "Ja, gern. Danke!"
   },
   {
    "wer": "A",
    "t": "Übrigens, ich bin der Markus. <m>Wollen wir uns duzen</m>?"
   },
   {
    "wer": "B",
    "t": "<m>Gern</m>! Ich bin Ana."
   },
   {
    "wer": "A",
    "t": "Super, Ana. Wie trinkst <m>du</m> deinen Kaffee?"
   },
   {
    "wer": "B",
    "t": "Mit Milch, bitte. Danke, Markus!"
   }
  ]
 },
 "wassagen": [
  {
   "situation": "Du gehst zum Arzt. Was sagst du zur Ärztin?",
   "o": [
    "„Hallo, wie geht’s dir?“",
    "„Guten Tag, Frau Doktor Meier.“",
    "„Hey!“"
   ],
   "r": 1,
   "warum": "Beim Arzt sagt man „Sie“ und „Frau/Herr“ + Nachname."
  },
  {
   "situation": "Deine neue Kollegin sagt: „Ich bin Lisa.“ Was antwortest du?",
   "o": [
    "„Freut mich, Lisa! Ich bin …“",
    "„Guten Tag, Frau Lisa.“",
    "„Wie heißen Sie?“"
   ],
   "r": 0,
   "warum": "Sie sagt ihren Vornamen. Das heißt: Ihr könnt „du“ sagen."
  },
  {
   "situation": "Du sprichst mit einem kleinen Kind im Park.",
   "o": [
    "„Wie heißen Sie?“",
    "„Wie heißt du?“",
    "„Wie heißt ihr Name?“"
   ],
   "r": 1,
   "warum": "Zu Kindern sagt man immer „du“."
  },
  {
   "situation": "Du sagst aus Versehen „du“ zur Nachbarin. Was jetzt?",
   "o": [
    "Nichts sagen.",
    "„Oh, Entschuldigung! Ich meine „Sie“.“",
    "Weglaufen."
   ],
   "r": 1,
   "warum": "Eine kurze Entschuldigung reicht. Das ist kein Drama."
  },
  {
   "situation": "Du bist unsicher: „du“ oder „Sie“?",
   "o": [
    "Immer „du“.",
    "Zuerst „Sie“.",
    "Gar nicht sprechen."
   ],
   "r": 1,
   "warum": "„Sie“ ist nie falsch. Das „du“ kann später kommen."
  }
 ],
 "puzzle": [
  [
   "Wollen wir",
   "uns duzen?"
  ],
  [
   "Wie geht es",
   "Ihnen?"
  ],
  [
   "Sag einfach",
   "„du“ zu mir!"
  ],
  [
   "Darf ich",
   "„du“ sagen?"
  ],
  [
   "Oh, Entschuldigung,",
   "ich meine „Sie“."
  ],
  [
   "Guten Tag,",
   "Herr Becker!"
  ]
 ],
 "luecken": {
  "zeilen": [
   {
    "wer": "A",
    "t": "Guten Tag, ___ Schneider!",
    "loes": "Frau"
   },
   {
    "wer": "B",
    "t": "Guten Tag! Wie geht es ___?",
    "loes": "Ihnen"
   },
   {
    "wer": "A",
    "t": "Gut, danke. ___ wir uns duzen?",
    "loes": "Wollen"
   },
   {
    "wer": "B",
    "t": "Ja, ___! Ich bin Paula.",
    "loes": "gern"
   },
   {
    "wer": "A",
    "t": "Und ich bin Ben. Woher kommst ___, Paula?",
    "loes": "du"
   }
  ],
  "woerter": [
   "Frau",
   "Ihnen",
   "Wollen",
   "gern",
   "du"
  ]
 },
 "rollen": [
  {
   "titel": "Beim Bäcker",
   "bild": "bilder/landeskunde/duzen-rp-baecker.webp",
   "a": "🙋 Du kaufst Brötchen. Sag „Sie“.",
   "b": "🥐 Du arbeitest beim Bäcker. Sei freundlich.",
   "ziel": "Kauft 4 Brötchen und sagt höflich Tschüss.",
   "hilfe": [
    "Guten Morgen! Ich hätte gern vier Brötchen.",
    "Möchten Sie noch etwas?",
    "Nein danke, das ist alles.",
    "Einen schönen Tag noch!"
   ],
   "beispiel": [
    {
     "wer": "A",
     "t": "Guten Morgen! Ich hätte gern vier Brötchen, bitte."
    },
    {
     "wer": "B",
     "t": "Gern. Möchten Sie noch etwas?"
    },
    {
     "wer": "A",
     "t": "Nein danke. Was macht das?"
    },
    {
     "wer": "B",
     "t": "2,40 Euro, bitte. Einen schönen Tag noch!"
    }
   ]
  },
  {
   "titel": "Im Sportverein",
   "bild": "bilder/landeskunde/duzen-rp-verein.webp",
   "a": "⚽ Du bist neu im Verein. Stell dich vor.",
   "b": "🏃 Du bist schon lange dabei. Sag gleich „du“.",
   "ziel": "Lernt euch kennen und verabredet euch zum Training.",
   "hilfe": [
    "Hallo, ich bin neu hier.",
    "Hi! Ich bin Jonas. Wie heißt du?",
    "Wann ist das nächste Training?",
    "Komm doch am Dienstag!"
   ],
   "beispiel": [
    {
     "wer": "A",
     "t": "Hallo, ich bin neu hier. Ich heiße Mira."
    },
    {
     "wer": "B",
     "t": "Hi Mira! Ich bin Jonas. Spielst du schon lange Fußball?"
    },
    {
     "wer": "A",
     "t": "Seit zwei Jahren. Wann ist das nächste Training?"
    },
    {
     "wer": "B",
     "t": "Am Dienstag um sieben. Komm doch!"
    }
   ]
  },
  {
   "titel": "Die neue Nachbarin",
   "bild": "bilder/landeskunde/duzen-rp-nachbarin.webp",
   "a": "🏡 Du bist neu im Haus. Stell dich mit „Sie“ vor.",
   "b": "👵 Du wohnst schon lange hier. Biete am Ende das „du“ an.",
   "ziel": "Stellt euch vor – und am Ende sagt ihr „du“.",
   "hilfe": [
    "Guten Tag, ich wohne jetzt im zweiten Stock.",
    "Herzlich willkommen!",
    "Ich bin übrigens die Helga. Sag doch „du“!",
    "Gern, ich bin …"
   ],
   "beispiel": [
    {
     "wer": "A",
     "t": "Guten Tag! Ich wohne jetzt im zweiten Stock. Ich bin Frau Ahmadi."
    },
    {
     "wer": "B",
     "t": "Herzlich willkommen, Frau Ahmadi! Ich bin Frau Krause."
    },
    {
     "wer": "A",
     "t": "Freut mich sehr!"
    },
    {
     "wer": "B",
     "t": "Ach, sag doch einfach „du“. Ich bin die Helga."
    },
    {
     "wer": "A",
     "t": "Gern, Helga! Ich bin Leyla."
    }
   ]
  },
  {
   "titel": "Der Fehler",
   "bild": "bilder/landeskunde/duzen-rp-fehler.webp",
   "a": "😅 Du sagst aus Versehen „du“ zum Chef.",
   "b": "👔 Du bist der Chef. Reagiere freundlich.",
   "ziel": "Rettet die Situation mit einer Entschuldigung.",
   "hilfe": [
    "Hast du kurz Zeit? – Oh, Entschuldigung!",
    "Ich meine: Haben Sie kurz Zeit?",
    "Kein Problem!",
    "Was kann ich für Sie tun?"
   ],
   "beispiel": [
    {
     "wer": "A",
     "t": "Hast du kurz Zeit? Oh, Entschuldigung! Haben Sie kurz Zeit?"
    },
    {
     "wer": "B",
     "t": "Kein Problem! Ja, natürlich. Was gibt es?"
    },
    {
     "wer": "A",
     "t": "Ich habe eine Frage zum Termin morgen."
    }
   ]
  }
 ],
 "fragen": [
  {
   "q": "Zu wem sagst du „du“?",
   "folge": [
    "Sagst du „du“ zu deinen Nachbarn?",
    "Sagst du „du“ zu deinem Chef?"
   ],
   "antw": [
    "Ich sage „du“ zu meiner Familie und zu meinen Freunden.",
    "Zu meinen Kollegen sage ich auch „du“.",
    "Zu meinen Nachbarn sage ich noch „Sie“."
   ]
  },
  {
   "q": "Gibt es „du“ und „Sie“ auch in deiner Sprache?",
   "folge": [
    "Wie sagt man das in deiner Sprache?",
    "Ist das für dich schwer auf Deutsch?"
   ],
   "antw": [
    "Ja, bei uns gibt es das auch.",
    "Nein, in meiner Sprache gibt es nur ein Wort.",
    "Am Anfang war das für mich schwer."
   ]
  },
  {
   "q": "Was machst du, wenn du nicht weißt: „du“ oder „Sie“?",
   "folge": [
    "Hast du schon mal einen Fehler gemacht?",
    "Fragst du dann einfach?"
   ],
   "antw": [
    "Dann sage ich lieber „Sie“.",
    "Ich höre zuerst, was die andere Person sagt.",
    "Ich frage einfach: „Duzen wir uns?“"
   ]
  }
 ],
 "challenge": [
  {
   "frage": "Zu wem sagst du „du“ – und zu wem „Sie“?",
   "hilfe": [
    "Familie",
    "Freunde",
    "Chef",
    "Arzt",
    "Nachbarn"
   ]
  },
  {
   "frage": "Wie ist das mit „du“ und „Sie“ in deinem Land?",
   "hilfe": [
    "bei uns",
    "höflich",
    "immer",
    "nie",
    "anders"
   ]
  },
  {
   "frage": "Erzähl von einem Fehler mit „du“ oder „Sie“.",
   "hilfe": [
    "aus Versehen",
    "peinlich",
    "Entschuldigung",
    "lachen"
   ]
  }
 ],
 "quiz": [
  {
   "q": "Was sagst du zur Ärztin?",
   "o": [
    "„Sie“",
    "„du“",
    "„ihr“"
   ],
   "r": 0,
   "anschluss": "Wann warst du das letzte Mal beim Arzt?"
  },
  {
   "q": "Was sagt man zu einem Kind?",
   "o": [
    "„du“",
    "„Sie“",
    "„Herr“"
   ],
   "r": 0,
   "anschluss": "Hast du Kinder in der Familie?"
  },
  {
   "q": "Welcher Satz ist höflich?",
   "o": [
    "„Wie geht es Ihnen?“",
    "„Wie geht’s?“",
    "„Was willst du?“"
   ],
   "r": 0,
   "anschluss": "Wen hast du heute schon so begrüßt?"
  },
  {
   "q": "Was sagt man, wenn man das „du“ anbietet?",
   "o": [
    "„Wollen wir uns duzen?“",
    "„Wie alt sind Sie?“",
    "„Tschüss!“"
   ],
   "r": 0,
   "anschluss": "Hat dir schon mal jemand das „du“ angeboten?"
  },
  {
   "q": "Du bist unsicher. Was ist am besten?",
   "o": [
    "„Sie“ sagen",
    "„du“ sagen",
    "nichts sagen"
   ],
   "r": 0,
   "anschluss": "Wann warst du zuletzt unsicher?"
  }
 ],
 "merk": "Kennst du die Person nicht? Dann sag „Sie“. Bietet sie dir das „du“ an, darfst du „du“ sagen.",
 "tipp": "Wenn du unsicher bist: Sag zuerst „Sie“. Das ist nie falsch.",
 "simulator": {
  "intro": "Ihr seid neu in Deutschland. Heute ist euer erster Tag in der neuen Stadt. Einigt euch bei jeder Szene auf EINE Antwort – und sagt, warum!",
  "start": "s1",
  "szenen": {
   "s1": {
    "bild": "bilder/landeskunde/duzen-sim-amt.webp",
    "text": "Ihr seid beim Bürgeramt. Der Mann am Schalter sagt: „Guten Tag. Was kann ich für Sie tun?“",
    "optionen": [
     {
      "t": "„Hallo! Ich will mich anmelden.“",
      "folge": "Der Mann schaut kurz komisch. Es klappt, aber er ist etwas kühl.",
      "punkte": 1,
      "next": "s2"
     },
     {
      "t": "„Guten Tag! Ich möchte mich anmelden, bitte.“",
      "folge": "Der Mann lächelt. Alles geht schnell.",
      "punkte": 3,
      "next": "s2"
     },
     {
      "t": "„Hey, wie geht’s dir?“",
      "folge": "Der Mann sagt: „Mir geht es gut, danke. Und Ihnen?“ Ups – zu locker!",
      "punkte": 0,
      "next": "s2"
     }
    ]
   },
   "s2": {
    "bild": "bilder/landeskunde/duzen-sim-baecker.webp",
    "text": "Danach beim Bäcker. Die Verkäuferin ist jung und sagt: „Na, was darf’s sein?“",
    "optionen": [
     {
      "t": "„Guten Morgen! Ich hätte gern ein Brötchen, bitte.“",
      "folge": "Perfekt. Freundlich und höflich.",
      "punkte": 3,
      "next": "s3"
     },
     {
      "t": "„Gib mir ein Brötchen.“",
      "folge": "Sie gibt dir das Brötchen – aber ohne Lächeln.",
      "punkte": 0,
      "next": "s3"
     },
     {
      "t": "„Ein Brötchen, danke.“",
      "folge": "Okay, aber ein bisschen kurz.",
      "punkte": 1,
      "next": "s3"
     }
    ]
   },
   "s3": {
    "bild": "bilder/landeskunde/duzen-sim-nachbar.webp",
    "text": "Im Treppenhaus trefft ihr einen älteren Nachbarn. Er sagt: „Guten Tag! Sie sind die Neuen, oder?“",
    "optionen": [
     {
      "t": "„Ja! Hallo, ich bin Sam. Und du?“",
      "folge": "Er sagt: „Ich bin Herr Wolf.“ Er wollte noch nicht duzen.",
      "punkte": 1,
      "next": "s4"
     },
     {
      "t": "„Ja, guten Tag! Wir wohnen jetzt im dritten Stock.“",
      "folge": "Herr Wolf freut sich und erzählt vom Haus.",
      "punkte": 3,
      "next": "s4"
     },
     {
      "t": "Nur nicken und weitergehen.",
      "folge": "Herr Wolf denkt: Die sind aber unfreundlich.",
      "punkte": 0,
      "next": "s4"
     }
    ]
   },
   "s4": {
    "bild": "bilder/landeskunde/duzen-sim-party.webp",
    "text": "Am Abend: Party bei neuen Kollegen. Eine Frau sagt: „Hi, ich bin Jule! Und du?“",
    "optionen": [
     {
      "t": "„Hi Jule, ich bin Sam!“",
      "folge": "Super! Ihr redet den ganzen Abend.",
      "punkte": 3,
      "next": "ende"
     },
     {
      "t": "„Guten Abend, Frau Jule.“",
      "folge": "Jule lacht: „Frau Jule? Sag einfach Jule!“",
      "punkte": 1,
      "next": "ende"
     },
     {
      "t": "„Wie heißen Sie mit Nachnamen?“",
      "folge": "Jule ist überrascht. Auf einer Party ist das zu förmlich.",
      "punkte": 0,
      "next": "ende"
     }
    ]
   }
  },
  "ende": [
   {
    "ab": 10,
    "text": "🏆 Profis! Ihr wisst genau, wann „du“ und wann „Sie“ passt."
   },
   {
    "ab": 6,
    "text": "👍 Gut gemacht! Nur manchmal wart ihr zu locker oder zu förmlich."
   },
   {
    "ab": 0,
    "text": "💡 Noch etwas üben. Merkt euch: Wenn ihr unsicher seid, sagt „Sie“."
   }
  ]
 }
});

stufe('duzen','bb',{
 "titel": "Duzen & Siezen",
 "emoji": "🤝",
 "bereich": "Landeskunde DACH",
 "intro": "Wer bietet wem das „du“ an – und warum ist das manchmal so kompliziert?",
 "einstieg": {
  "bild": "bilder/landeskunde/duzen-einstieg.webp",
  "frage": "Wer darf in Deutschland normalerweise das „du“ anbieten?",
  "o": [
   "die jüngere Person",
   "die ältere Person oder der Chef",
   "immer der Mann"
  ],
  "r": 1,
  "aufloesung": "Meistens bietet die ältere oder ranghöhere Person das „du“ an. Die jüngere fragt besser nicht zuerst."
 },
 "glossar": {
  "das Du anbieten": {
   "e": "🎁",
   "t": "sagen: „Wollen wir uns duzen?“ Das macht meistens die ältere oder wichtigere Person."
  },
  "förmlich": {
   "e": "🎩",
   "t": "offiziell und höflich, mit Abstand."
  },
  "Hierarchie": {
   "e": "🪜",
   "t": "wer in einer Firma oben ist (Chef) und wer unten."
  }
 },
 "dach": [
  "Normalerweise darf die ältere Person oder der Chef <g>das Du anbieten</g>. Die jüngere Person fragt besser nicht zuerst.",
  "In vielen Start-ups und großen Firmen duzen sich alle – auch mit dem Chef. In Banken und Behörden ist es oft <g>förmlich</g>.",
  "Wo die <g>Hierarchie</g> flach ist, duzt man schneller.",
  "In der Schweiz duzt man oft schneller als in Deutschland. In Österreich sind Titel wie „Frau Doktor“ noch wichtiger.",
  "Im Internet, in Werbung und in Apps sagt man fast immer „du“."
 ],
 "skala": {
  "titel": "🤝 Wo duzt man?",
  "legende": "🔴 meistens „Sie“ &nbsp; 🟡 kommt darauf an &nbsp; 🟢 meistens „du“. Und wie ist das in eurem Land?"
 },
 "situationen": [
  {
   "o": "Behörde & Bank",
   "ic": "🏦",
   "s": 3,
   "meter": 90,
   "w": "Sie",
   "t": "Offiziell und förmlich – hier bleibt man beim „Sie“."
  },
  {
   "o": "Büro & Firma",
   "ic": "💼",
   "s": 2,
   "meter": 55,
   "w": "kommt darauf an",
   "t": "Start-up: „du“. Alte Firma: oft „Sie“."
  },
  {
   "o": "Verein & Internet",
   "ic": "⚽",
   "s": 1,
   "meter": 15,
   "w": "du",
   "t": "Im Sportverein und online duzt man sofort."
  }
 ],
 "redemittel": [
  {
   "funktion": "Das „du“ anbieten",
   "farbe": "gold",
   "items": [
    {
     "s": "Wir können uns <m>gern duzen</m>.",
     "bsp": "Wir sehen uns ja jetzt jeden Tag – wir können uns gern duzen."
    },
    {
     "s": "<m>Was hältst du davon, wenn</m> wir uns duzen?",
     "bsp": "Was hältst du davon, wenn wir uns duzen? Ich bin Petra."
    },
    {
     "s": "Ich biete dir <m>das Du an</m>.",
     "bsp": "Nach so vielen Jahren biete ich dir das Du an."
    },
    {
     "s": "Ich heiße <m>übrigens</m> Markus.",
     "bsp": "Ich heiße übrigens Markus – sag ruhig „du“."
    }
   ]
  },
  {
   "funktion": "Annehmen oder vorsichtig bleiben",
   "farbe": "tuerkis",
   "items": [
    {
     "s": "<m>Sehr gern, das ist mir sogar lieber</m>.",
     "bsp": "Sehr gern, das ist mir sogar lieber. Ich bin Ali."
    },
    {
     "s": "<m>Gern – aber vor Kunden</m> bleibe ich beim „Sie“.",
     "bsp": "Gern – aber vor Kunden bleibe ich lieber beim „Sie“, okay?"
    },
    {
     "s": "<m>Daran muss ich mich erst gewöhnen</m>.",
     "bsp": "Duzen mit dem Chef? Daran muss ich mich erst gewöhnen!"
    },
    {
     "s": "Ist das <m>hier so üblich</m>?",
     "bsp": "Duzen sich hier alle? Ist das hier so üblich?"
    }
   ]
  },
  {
   "funktion": "Einen Fehler retten",
   "farbe": "rot",
   "items": [
    {
     "s": "<m>Oh, Entschuldigung – ich meinte natürlich</m> „Sie“.",
     "bsp": "Kannst du – oh, Entschuldigung, ich meinte natürlich: Können Sie mir helfen?"
    },
    {
     "s": "<m>Duzen wir uns eigentlich schon</m>?",
     "bsp": "Sorry, duzen wir uns eigentlich schon oder noch nicht?"
    },
    {
     "s": "<m>Ich bin mir da nie ganz sicher</m>.",
     "bsp": "Bei „du“ und „Sie“ bin ich mir nie ganz sicher."
    },
    {
     "s": "<m>Das ist mir rausgerutscht</m>.",
     "bsp": "Entschuldigung, das „du“ ist mir einfach rausgerutscht."
    }
   ]
  },
  {
   "funktion": "Vergleichen",
   "farbe": "lila",
   "items": [
    {
     "s": "<m>Bei uns</m> duzt man fast alle.",
     "bsp": "Bei uns duzt man fast alle, sogar die Lehrer."
    },
    {
     "s": "<m>Im Gegensatz zu</m> Deutschland …",
     "bsp": "Im Gegensatz zu Deutschland sagt man bei uns zu Älteren immer die höfliche Form."
    },
    {
     "s": "<m>Das war für mich am Anfang</m> komisch.",
     "bsp": "Das war für mich am Anfang komisch, den Chef zu siezen."
    },
    {
     "s": "<m>In der Schweiz</m> geht das schneller.",
     "bsp": "In der Schweiz geht das mit dem „du“ schneller."
    }
   ]
  }
 ],
 "dialog": {
  "situation": "Seit drei Monaten arbeiten Petra und Ali zusammen – immer noch per „Sie“.",
  "zeilen": [
   {
    "wer": "A",
    "t": "Herr Haddad, haben Sie kurz Zeit?"
   },
   {
    "wer": "B",
    "t": "Natürlich, Frau Lang. Was gibt’s?"
   },
   {
    "wer": "A",
    "t": "Ach, wissen Sie was? Wir arbeiten jetzt schon so lange zusammen. <m>Was halten Sie davon, wenn wir uns duzen</m>?"
   },
   {
    "wer": "B",
    "t": "<m>Sehr gern, das ist mir sogar lieber</m>! Ich bin Ali."
   },
   {
    "wer": "A",
    "t": "Petra. Freut mich, Ali!"
   },
   {
    "wer": "B",
    "t": "Aber eine Frage: Beim Chef bleibe ich beim „Sie“, oder? <m>Ist das hier so üblich</m>?"
   },
   {
    "wer": "A",
    "t": "Ja, beim Chef warten wir, <m>bis er das Du anbietet</m>."
   },
   {
    "wer": "B",
    "t": "Gut zu wissen. <m>Daran muss ich mich erst gewöhnen</m> – <m>bei uns</m> duzt man den Chef sofort."
   }
  ]
 },
 "wassagen": [
  {
   "situation": "Du bist 25. Dein 60-jähriger Nachbar ist sehr nett. Darfst du ihm das „du“ anbieten?",
   "o": [
    "Ja, sofort.",
    "Besser warten – er bietet es an.",
    "Nur per WhatsApp."
   ],
   "r": 1,
   "warum": "Normalerweise bietet die ältere Person das „du“ an."
  },
  {
   "situation": "Dein neuer Chef sagt: „Bei uns duzen sich alle. Ich bin Stefan.“",
   "o": [
    "„Danke, Herr Stefan.“",
    "„Super, Stefan! Ich bin …“",
    "„Ich bleibe lieber beim Sie, Herr Chef.“"
   ],
   "r": 1,
   "warum": "Wenn der Chef das „du“ anbietet, nimmt man es meistens an."
  },
  {
   "situation": "Du schreibst eine E-Mail an einen Kunden, den du nicht kennst.",
   "o": [
    "„Hallo du,“",
    "„Sehr geehrter Herr Braun,“",
    "„Hey Braun!“"
   ],
   "r": 1,
   "warum": "Bei Kunden ist man förmlich – auch in Firmen mit Duz-Kultur."
  },
  {
   "situation": "Dir ist ein „du“ zur Vermieterin rausgerutscht.",
   "o": [
    "„Das ist mir rausgerutscht – Entschuldigung!“",
    "So tun, als wäre nichts.",
    "Ab jetzt immer „du“ sagen."
   ],
   "r": 0,
   "warum": "Kurz entschuldigen und weitermachen. Die meisten finden das nicht schlimm."
  },
  {
   "situation": "In einer App steht: „Hast du schon dein Profil ausgefüllt?“ Ist das unhöflich?",
   "o": [
    "Ja, sehr.",
    "Nein, online duzt man fast immer.",
    "Nur in Österreich."
   ],
   "r": 1,
   "warum": "Apps, Werbung und Social Media duzen fast immer."
  }
 ],
 "puzzle": [
  [
   "Was hältst du davon,",
   "wenn wir uns duzen?"
  ],
  [
   "Sehr gern,",
   "das ist mir sogar lieber."
  ],
  [
   "Daran muss ich",
   "mich erst gewöhnen."
  ],
  [
   "Duzen wir uns",
   "eigentlich schon?"
  ],
  [
   "Das „du“ ist mir",
   "einfach rausgerutscht."
  ],
  [
   "Im Gegensatz zu Deutschland",
   "duzt man bei uns alle."
  ]
 ],
 "luecken": {
  "zeilen": [
   {
    "wer": "A",
    "t": "Wir arbeiten schon so lange zusammen. Was ___ Sie davon, wenn wir uns duzen?",
    "loes": "halten"
   },
   {
    "wer": "B",
    "t": "Sehr gern, das ist mir sogar ___!",
    "loes": "lieber"
   },
   {
    "wer": "A",
    "t": "Ich heiße ___ Petra.",
    "loes": "übrigens"
   },
   {
    "wer": "B",
    "t": "Und beim Chef? Ist das hier so ___?",
    "loes": "üblich"
   },
   {
    "wer": "A",
    "t": "Beim Chef warten wir, bis er uns das Du ___.",
    "loes": "anbietet"
   }
  ],
  "woerter": [
   "halten",
   "lieber",
   "übrigens",
   "üblich",
   "anbietet"
  ]
 },
 "rollen": [
  {
   "titel": "Der Chef bietet das Du an",
   "bild": "bilder/landeskunde/duzen-rp-chef.webp",
   "a": "👔 Du bist der Chef. Biete das „du“ an – mit einem Grund.",
   "b": "💼 Du bist neu. Du freust dich, bist aber unsicher wegen Kunden.",
   "ziel": "Klärt, wann ihr „du“ sagt und wann „Sie“.",
   "hilfe": [
    "Was hältst du davon, wenn wir uns duzen?",
    "Sehr gern! Aber vor Kunden …?",
    "Vor Kunden bleiben wir beim „Sie“.",
    "Daran muss ich mich erst gewöhnen."
   ],
   "beispiel": [
    {
     "wer": "A",
     "t": "Bei uns im Team duzen sich alle. Was hältst du davon, wenn wir uns auch duzen? Ich bin Stefan."
    },
    {
     "wer": "B",
     "t": "Sehr gern! Ich bin Karim. Und vor Kunden?"
    },
    {
     "wer": "A",
     "t": "Da bleiben wir beim „Sie“. Das ist professioneller."
    },
    {
     "wer": "B",
     "t": "Alles klar. Daran muss ich mich erst gewöhnen!"
    }
   ]
  },
  {
   "titel": "Die Vermieterin",
   "bild": "bilder/landeskunde/duzen-rp-vermieterin.webp",
   "a": "🔑 Du bist Mieter und sagst aus Versehen „du“.",
   "b": "🏠 Du bist die Vermieterin, 65 Jahre. Du bleibst lieber beim „Sie“.",
   "ziel": "Rettet die Situation höflich.",
   "hilfe": [
    "Kannst du – oh, Entschuldigung!",
    "Das ist mir rausgerutscht.",
    "Kein Problem, aber …",
    "Ich bleibe lieber beim „Sie“."
   ],
   "beispiel": [
    {
     "wer": "A",
     "t": "Kannst du mir … oh, Entschuldigung! Können Sie mir sagen, wann der Handwerker kommt?"
    },
    {
     "wer": "B",
     "t": "Kein Problem. Ich bleibe aber lieber beim „Sie“, wenn das okay ist."
    },
    {
     "wer": "A",
     "t": "Natürlich. Das ist mir nur rausgerutscht."
    },
    {
     "wer": "B",
     "t": "Der Handwerker kommt am Donnerstag."
    }
   ]
  },
  {
   "titel": "Elternabend",
   "bild": "bilder/landeskunde/duzen-rp-elternabend.webp",
   "a": "👨‍👩‍👧 Du bist Mutter oder Vater. Du kennst die anderen Eltern nicht.",
   "b": "🙋 Du bist auch Mutter oder Vater und duzt alle sofort.",
   "ziel": "Findet heraus: Duzt man sich hier?",
   "hilfe": [
    "Duzen wir uns hier eigentlich?",
    "Unter Eltern duzt man sich meistens.",
    "Ah, gut zu wissen!",
    "Ich bin übrigens …"
   ],
   "beispiel": [
    {
     "wer": "A",
     "t": "Entschuldigung, duzen sich die Eltern hier eigentlich?"
    },
    {
     "wer": "B",
     "t": "Ja, unter Eltern duzt man sich meistens. Ich bin übrigens Jana."
    },
    {
     "wer": "A",
     "t": "Gut zu wissen! Ich bin Omar. Mein Sohn ist in der 2b."
    }
   ]
  },
  {
   "titel": "Videocall mit der Schweiz",
   "bild": "bilder/landeskunde/duzen-rp-schweiz.webp",
   "a": "💻 Du arbeitest in Deutschland und siezt den neuen Kollegen aus Zürich.",
   "b": "🇨🇭 Du bist aus Zürich und duzt sofort.",
   "ziel": "Sprecht über den Unterschied – und einigt euch.",
   "hilfe": [
    "Guten Tag, Herr Meier, schön, Sie kennenzulernen.",
    "Sag doch einfach „du“, ich bin Reto.",
    "In der Schweiz geht das schneller, oder?",
    "Bei uns ist das eher so: …"
   ],
   "beispiel": [
    {
     "wer": "A",
     "t": "Guten Tag, Herr Meier. Schön, Sie kennenzulernen."
    },
    {
     "wer": "B",
     "t": "Grüezi! Sag doch einfach „du“ – ich bin Reto."
    },
    {
     "wer": "A",
     "t": "Gern! In der Schweiz geht das schneller, oder?"
    },
    {
     "wer": "B",
     "t": "Ja, bei uns in der Firma duzen sich alle."
    }
   ]
  }
 ],
 "fragen": [
  {
   "q": "Duzt oder siezt ihr euch bei der Arbeit oder im Kurs?",
   "folge": [
    "Wer hat das „du“ angeboten?",
    "Findest du das gut so?"
   ],
   "antw": [
    "Bei uns duzen sich alle, auch mit dem Chef.",
    "Mit den Kollegen duze ich mich, den Chef sieze ich.",
    "Am Anfang haben wir uns gesiezt, später geduzt."
   ]
  },
  {
   "q": "Ist dir schon mal ein „du“ oder „Sie“ falsch herausgerutscht?",
   "folge": [
    "Wie hat die andere Person reagiert?",
    "Was hast du dann gesagt?"
   ],
   "antw": [
    "Ja, ich habe meine Vermieterin aus Versehen geduzt.",
    "Das war mir ein bisschen peinlich.",
    "Die Person hat gelacht und gesagt: „Kein Problem!“"
   ]
  },
  {
   "q": "Was gefällt dir besser: „du“ oder „Sie“?",
   "folge": [
    "Wirkt „Sie“ für dich kalt oder respektvoll?",
    "Wie ist das in deinem Land mit Älteren?"
   ],
   "antw": [
    "Mir gefällt „du“ besser, das ist persönlicher.",
    "Ich finde „Sie“ respektvoll, nicht kalt.",
    "In meinem Land spricht man Ältere sehr höflich an."
   ]
  }
 ],
 "challenge": [
  {
   "frage": "Erzähl von einer Situation, in der dir jemand das „du“ angeboten hat.",
   "hilfe": [
    "angeboten",
    "überrascht",
    "gefreut",
    "seitdem"
   ]
  },
  {
   "frage": "Was gefällt dir besser: „du“ oder „Sie“? Begründe!",
   "hilfe": [
    "persönlich",
    "respektvoll",
    "Abstand",
    "weil"
   ]
  },
  {
   "frage": "Wie spricht man in deinem Land mit Älteren und Chefs?",
   "hilfe": [
    "im Gegensatz zu",
    "bei uns",
    "Respekt",
    "üblich"
   ]
  }
 ],
 "quiz": [
  {
   "q": "Wer bietet normalerweise das „du“ an?",
   "o": [
    "die ältere oder ranghöhere Person",
    "die jüngere Person",
    "immer der Gast"
   ],
   "r": 0,
   "anschluss": "Wer hat dir zuletzt das „du“ angeboten?"
  },
  {
   "q": "Was bedeutet „Das ist mir rausgerutscht“?",
   "o": [
    "Ich habe es ohne Absicht gesagt.",
    "Ich bin hingefallen.",
    "Ich habe es vergessen."
   ],
   "r": 0,
   "anschluss": "Was ist dir schon mal auf Deutsch rausgerutscht?"
  },
  {
   "q": "Wie beginnt eine E-Mail an einen fremden Kunden?",
   "o": [
    "„Sehr geehrte Frau …“",
    "„Hallo du,“",
    "„Hey!“"
   ],
   "r": 0,
   "anschluss": "Schreibst du oft E-Mails auf Deutsch?"
  },
  {
   "q": "Wo duzt man oft schneller als in Deutschland?",
   "o": [
    "in der Schweiz",
    "beim Amt",
    "vor Gericht"
   ],
   "r": 0,
   "anschluss": "Warst du schon mal in der Schweiz oder in Österreich?"
  },
  {
   "q": "Welcher Satz nimmt das „du“ an?",
   "o": [
    "„Sehr gern, das ist mir sogar lieber.“",
    "„Daran glaube ich nicht.“",
    "„Auf Wiedersehen.“"
   ],
   "r": 0,
   "anschluss": "Fällt dir das Duzen leicht oder schwer?"
  }
 ],
 "merk": "Das „du“ bietet meistens die ältere Person oder der Chef an. Wer unsicher ist, wartet – oder fragt freundlich.",
 "tipp": "Duzt dich jemand, darfst du meistens zurückduzen. Siezt dich jemand, bleib beim „Sie“, bis dir das „du“ angeboten wird.",
 "simulator": {
  "intro": "Ihr habt einen neuen Job in einer deutschen Firma. Erste Woche! Einigt euch bei jeder Szene auf EINE Antwort und begründet sie.",
  "start": "s1",
  "szenen": {
   "s1": {
    "bild": "bilder/landeskunde/duzen-sim-buero.webp",
    "text": "Montag, 9 Uhr. Die Teamleiterin sagt: „Willkommen! Bei uns im Team duzen sich alle. Ich bin Katrin.“",
    "optionen": [
     {
      "t": "„Danke, Frau Katrin!“",
      "folge": "Katrin lacht: „Einfach Katrin!“ Kleiner Fehler, aber sympathisch.",
      "punkte": 1,
      "next": "s2"
     },
     {
      "t": "„Super, danke, Katrin! Ich bin …“",
      "folge": "Perfekt angenommen. Das Team findet euch sofort nett.",
      "punkte": 3,
      "next": "s2"
     },
     {
      "t": "„Ich bleibe lieber beim Sie.“",
      "folge": "Katrin ist etwas irritiert. Ein angebotenes „du“ abzulehnen wirkt kühl.",
      "punkte": 0,
      "next": "s2"
     }
    ]
   },
   "s2": {
    "bild": "bilder/landeskunde/duzen-sim-chef.webp",
    "text": "Dienstag. Der Geschäftsführer, Herr Dr. Brandt, kommt in die Küche. Er sagt: „Guten Morgen!“",
    "optionen": [
     {
      "t": "„Morgen! Na, wie geht’s dir?“",
      "folge": "Herr Dr. Brandt hebt die Augenbrauen. Mit dem Chef vom Chef duzt man nicht einfach so.",
      "punkte": 0,
      "next": "s3"
     },
     {
      "t": "„Guten Morgen, Herr Brandt! Ich bin neu im Team von Katrin.“",
      "folge": "Er freut sich und fragt nach eurem ersten Eindruck.",
      "punkte": 3,
      "next": "s3"
     },
     {
      "t": "Nichts sagen, Kaffee nehmen, gehen.",
      "folge": "Schade – eine Chance zum Kennenlernen verpasst.",
      "punkte": 1,
      "next": "s3"
     }
    ]
   },
   "s3": {
    "bild": "bilder/landeskunde/duzen-sim-kunde.webp",
    "text": "Mittwoch. Ein Kunde ruft an. Ihr kennt ihn nicht.",
    "optionen": [
     {
      "t": "„Hallo, hier ist das Team von Katrin, was gibt’s?“",
      "folge": "Der Kunde ist irritiert. Am Telefon mit Kunden: lieber förmlich.",
      "punkte": 0,
      "next": "s4"
     },
     {
      "t": "„Guten Tag, Firma Lumen, mein Name ist … Was kann ich für Sie tun?“",
      "folge": "Sehr professionell. Der Kunde ist zufrieden.",
      "punkte": 3,
      "next": "s4"
     },
     {
      "t": "„Ja?“",
      "folge": "Etwas zu kurz. Der Kunde fragt, ob er richtig ist.",
      "punkte": 1,
      "next": "s4"
     }
    ]
   },
   "s4": {
    "bild": "bilder/landeskunde/duzen-sim-feier.webp",
    "text": "Freitag, Feierabend-Bier. Ihr sagt aus Versehen „du“ zu Herrn Dr. Brandt.",
    "optionen": [
     {
      "t": "„Oh, Entschuldigung, das ist mir rausgerutscht!“",
      "folge": "Er lacht: „Kein Problem!“ Gut gerettet.",
      "punkte": 3,
      "next": "ende"
     },
     {
      "t": "So tun, als wäre nichts passiert.",
      "folge": "Er sagt nichts – aber es bleibt ein komisches Gefühl.",
      "punkte": 1,
      "next": "ende"
     },
     {
      "t": "Ab jetzt einfach weiter duzen.",
      "folge": "Herr Dr. Brandt antwortet betont mit „Sie“. Das war zu viel.",
      "punkte": 0,
      "next": "ende"
     }
    ]
   }
  },
  "ende": [
   {
    "ab": 10,
    "text": "🏆 Ihr kennt die Regeln im Büro wie Einheimische!"
   },
   {
    "ab": 6,
    "text": "👍 Gut! Nur bei Chefs und Kunden noch etwas genauer sein."
   },
   {
    "ab": 0,
    "text": "💡 Merkt euch: Im Team oft „du“ – mit Chefs von oben und mit Kunden „Sie“."
   }
  ]
 }
});

stufe('duzen','bc',{
 "titel": "Duzen & Siezen",
 "emoji": "🤝",
 "bereich": "Landeskunde DACH",
 "intro": "Ein kleines Wort mit großer Wirkung: Was sagt das „du“ über eine Gesellschaft?",
 "einstieg": {
  "bild": "bilder/landeskunde/duzen-einstieg.webp",
  "frage": "Ein Autofahrer duzt bei einer Kontrolle bewusst die Polizistin. Was kann passieren?",
  "o": [
   "Nichts – das ist normal.",
   "Es kann als Beleidigung gelten, im Extremfall mit Geldstrafe.",
   "Er bekommt einen Rabatt."
  ],
  "r": 1,
  "aufloesung": "Wer Polizisten bewusst und abwertend duzt, riskiert eine Anzeige wegen Beleidigung. „Du“ und „Sie“ sind also mehr als Grammatik."
 },
 "glossar": {
  "Distanz": {
   "e": "↔️",
   "t": "innerer Abstand zwischen Menschen, z. B. im Beruf."
  },
  "Beleidigung": {
   "e": "⚠️",
   "t": "ein Wort oder eine Handlung, die jemanden kränkt. Kann sogar strafbar sein."
  },
  "Brüderschaft trinken": {
   "e": "🍻",
   "t": "alter Brauch: Man trinkt zusammen und duzt sich danach."
  },
  "Duz-Kultur": {
   "e": "🌐",
   "t": "wenn in einer Firma oder Branche alle „du“ sagen."
  }
 },
 "dach": [
  "Das „Sie“ schafft <g>Distanz</g> – das kann Respekt zeigen, aber auch Kälte.",
  "Viele Firmen haben eine <g>Duz-Kultur</g> eingeführt, damit alle sich näher und gleichberechtigt fühlen.",
  "Wer einen Polizisten bewusst duzt, riskiert, dass das als <g>Beleidigung</g> gilt – im Extremfall droht eine Geldstrafe.",
  "Früher hat man oft <g>Brüderschaft trinken</g> müssen, um sich zu duzen. Heute geht es meistens schneller.",
  "Ein angebotenes „du“ abzulehnen, wirkt in Deutschland schnell unfreundlich."
 ],
 "skala": {
  "titel": "🤝 Nähe oder Distanz?",
  "legende": "🔴 viel Distanz &nbsp; 🟡 gemischt &nbsp; 🟢 viel Nähe. Und wie ist das in eurem Land?"
 },
 "situationen": [
  {
   "o": "Polizei & Gericht",
   "ic": "⚖️",
   "s": 3,
   "meter": 98,
   "w": "nur „Sie“",
   "t": "Ein „du“ kann hier als Beleidigung gelten."
  },
  {
   "o": "Konzern & Kundschaft",
   "ic": "🏢",
   "s": 2,
   "meter": 60,
   "w": "gemischt",
   "t": "Intern „du“, gegenüber Kunden oft „Sie“."
  },
  {
   "o": "Start-up & Social Media",
   "ic": "📱",
   "s": 1,
   "meter": 10,
   "w": "nur „du“",
   "t": "Hier wirkt „Sie“ fast schon seltsam."
  }
 ],
 "redemittel": [
  {
   "funktion": "Meinung begründen",
   "farbe": "tuerkis",
   "items": [
    {
     "s": "<m>Ich bin der Meinung, dass</m> das „Sie“ Respekt zeigt, <m>weil</m> …",
     "bsp": "Ich bin der Meinung, dass das „Sie“ Respekt zeigt, weil es Grenzen setzt."
    },
    {
     "s": "<m>Meines Erachtens</m> ändert ein Wort nichts an der Hierarchie.",
     "bsp": "Meines Erachtens ändert ein „du“ nichts daran, wer entscheidet."
    },
    {
     "s": "<m>Für mich spricht vor allem dafür, dass</m> …",
     "bsp": "Für mich spricht vor allem dafür, dass man offener redet."
    },
    {
     "s": "<m>Ausschlaggebend ist für mich</m> …",
     "bsp": "Ausschlaggebend ist für mich, wie man miteinander umgeht – nicht das Pronomen."
    }
   ]
  },
  {
   "funktion": "Abwägen",
   "farbe": "gold",
   "items": [
    {
     "s": "<m>Einerseits</m> schafft das „du“ Nähe, <m>andererseits</m> …",
     "bsp": "Einerseits schafft das „du“ Nähe, andererseits verschwimmen die Grenzen."
    },
    {
     "s": "<m>Das kommt ganz darauf an, ob</m> …",
     "bsp": "Das kommt ganz darauf an, ob man mit Kunden arbeitet."
    },
    {
     "s": "<m>Man darf nicht vergessen, dass</m> …",
     "bsp": "Man darf nicht vergessen, dass Ältere das „Sie“ oft als Wertschätzung sehen."
    },
    {
     "s": "<m>Unterm Strich</m> …",
     "bsp": "Unterm Strich ist mir ein freundliches „Sie“ lieber als ein falsches „du“."
    }
   ]
  },
  {
   "funktion": "Höflich ablehnen",
   "farbe": "rot",
   "items": [
    {
     "s": "<m>Das ist sehr nett, aber mir ist</m> im Beruf das „Sie“ <m>lieber</m>.",
     "bsp": "Das ist sehr nett, aber mir ist im Beruf das „Sie“ lieber."
    },
    {
     "s": "<m>Darf ich vorerst beim „Sie“ bleiben</m>?",
     "bsp": "Darf ich vorerst beim „Sie“ bleiben? Ich brauche noch etwas Zeit."
    },
    {
     "s": "<m>Nehmen Sie es bitte nicht persönlich</m>.",
     "bsp": "Nehmen Sie es bitte nicht persönlich – das ist bei mir einfach so."
    },
    {
     "s": "<m>Ich trenne da gern</m> Beruf und Privatleben.",
     "bsp": "Ich trenne da gern Beruf und Privatleben."
    }
   ]
  },
  {
   "funktion": "Widersprechen",
   "farbe": "lila",
   "items": [
    {
     "s": "<m>Da muss ich widersprechen</m>: …",
     "bsp": "Da muss ich widersprechen: Auch per „du“ kann man respektvoll sein."
    },
    {
     "s": "<m>Das sehe ich etwas anders</m>, denn …",
     "bsp": "Das sehe ich etwas anders, denn in meiner Kultur gilt das Gegenteil."
    },
    {
     "s": "<m>Das mag sein, aber</m> …",
     "bsp": "Das mag sein, aber gegenüber Kunden wirkt das unprofessionell."
    },
    {
     "s": "<m>Ich verstehe deinen Punkt, trotzdem</m> …",
     "bsp": "Ich verstehe deinen Punkt, trotzdem finde ich die Duz-Kultur aufgesetzt."
    }
   ]
  }
 ],
 "dialog": {
  "situation": "Teamsitzung: Ab Montag soll in der Firma eine Duz-Kultur gelten. Lena und Herr Vogt diskutieren.",
  "zeilen": [
   {
    "wer": "A",
    "t": "Ich finde die Idee super. <m>Für mich spricht vor allem dafür, dass</m> wir offener miteinander reden."
   },
   {
    "wer": "B",
    "t": "<m>Das mag sein, aber</m> ich bin seit 25 Jahren hier. Ein „du“ ändert nichts daran, wer entscheidet."
   },
   {
    "wer": "A",
    "t": "<m>Da muss ich widersprechen</m>: Es senkt die Hemmschwelle, Kritik zu äußern."
   },
   {
    "wer": "B",
    "t": "<m>Einerseits</m> verstehe ich das, <m>andererseits</m> fühlt es sich für mich aufgesetzt an."
   },
   {
    "wer": "A",
    "t": "<m>Das kommt ganz darauf an, ob</m> es von allen getragen wird."
   },
   {
    "wer": "B",
    "t": "Genau. <m>Darf ich vorerst beim „Sie“ bleiben</m>? <m>Nehmen Sie es bitte nicht persönlich</m>."
   },
   {
    "wer": "A",
    "t": "Natürlich. <m>Unterm Strich</m> zählt, dass wir respektvoll bleiben."
   }
  ]
 },
 "wassagen": [
  {
   "situation": "Dein Chef bietet dir das „du“ an, du willst aber Distanz. Welche Antwort ist am diplomatischsten?",
   "o": [
    "„Nein, danke.“",
    "„Das ist sehr nett, aber mir ist im Beruf das „Sie“ lieber – nehmen Sie es bitte nicht persönlich.“",
    "„Duzen ist albern.“"
   ],
   "r": 1,
   "warum": "Dank + Grund + Beziehungssatz: So lehnt man ab, ohne zu verletzen."
  },
  {
   "situation": "Jemand behauptet: „Wer duzt, hat keinen Respekt.“ Wie widersprichst du höflich?",
   "o": [
    "„Quatsch!“",
    "„Das sehe ich etwas anders, denn Respekt zeigt sich im Ton, nicht im Pronomen.“",
    "„Okay.“"
   ],
   "r": 1,
   "warum": "Widersprechen + begründen – ohne den anderen anzugreifen."
  },
  {
   "situation": "Du willst abwägen. Welcher Satz passt?",
   "o": [
    "„Einerseits schafft das „du“ Nähe, andererseits verschwimmen Grenzen.“",
    "„Duzen ist immer besser.“",
    "„Ist mir egal.“"
   ],
   "r": 0,
   "warum": "Einerseits … andererseits zeigt beide Seiten."
  },
  {
   "situation": "Eine Werbung duzt dich: „Gönn dir was!“ Warum machen Firmen das?",
   "o": [
    "Sie wollen jung und nahbar wirken.",
    "Es ist gesetzlich vorgeschrieben.",
    "Aus Versehen."
   ],
   "r": 0,
   "warum": "Das „du“ in der Werbung soll Nähe und Lockerheit vermitteln."
  },
  {
   "situation": "Du schreibst einer Professorin, die alle Studenten duzt. Wie beginnst du die erste Mail?",
   "o": [
    "„Hey Sabine!“",
    "„Liebe Frau Professorin Kraus,“ – und wartest ab.",
    "„Yo!“"
   ],
   "r": 1,
   "warum": "Beim ersten Kontakt förmlich bleiben – das „du“ bietet die ranghöhere Person an."
  }
 ],
 "puzzle": [
  [
   "Einerseits schafft das „du“ Nähe,",
   "andererseits verschwimmen die Grenzen."
  ],
  [
   "Darf ich vorerst",
   "beim „Sie“ bleiben?"
  ],
  [
   "Meines Erachtens ändert ein Wort",
   "nichts an der Hierarchie."
  ],
  [
   "Das mag sein,",
   "aber vor Kunden wirkt das unprofessionell."
  ],
  [
   "Nehmen Sie es",
   "bitte nicht persönlich."
  ],
  [
   "Ausschlaggebend ist für mich,",
   "wie man miteinander umgeht."
  ]
 ],
 "luecken": {
  "zeilen": [
   {
    "wer": "A",
    "t": "___ schafft das „du“ Nähe, andererseits fehlt manchmal die Grenze.",
    "loes": "Einerseits"
   },
   {
    "wer": "B",
    "t": "Meines ___ ändert ein Pronomen nichts an der Macht.",
    "loes": "Erachtens"
   },
   {
    "wer": "A",
    "t": "Da muss ich ___: Es senkt die Hemmschwelle.",
    "loes": "widersprechen"
   },
   {
    "wer": "B",
    "t": "Das ist sehr nett, aber mir ist im Beruf das „Sie“ ___.",
    "loes": "lieber"
   },
   {
    "wer": "A",
    "t": "___ Strich zählt der respektvolle Umgang.",
    "loes": "Unterm"
   }
  ],
  "woerter": [
   "Einerseits",
   "Erachtens",
   "widersprechen",
   "lieber",
   "Unterm"
  ]
 },
 "rollen": [
  {
   "titel": "Teamsitzung: Duz-Kultur ja oder nein?",
   "bild": "bilder/landeskunde/duzen-rp-teamsitzung.webp",
   "a": "🚀 Du bist dafür. Nenne zwei Argumente.",
   "b": "🎩 Du bist dagegen. Nenne zwei Bedenken.",
   "ziel": "Findet am Ende einen Kompromiss.",
   "hilfe": [
    "Für mich spricht vor allem dafür, dass …",
    "Das mag sein, aber …",
    "Einerseits …, andererseits …",
    "Wie wäre es mit einem Kompromiss: intern „du“, extern „Sie“?"
   ],
   "beispiel": [
    {
     "wer": "A",
     "t": "Für mich spricht vor allem dafür, dass wir dann schneller und offener kommunizieren."
    },
    {
     "wer": "B",
     "t": "Das mag sein, aber ich befürchte, dass die Grenzen verschwimmen."
    },
    {
     "wer": "A",
     "t": "Einerseits verstehe ich das, andererseits haben viele Firmen gute Erfahrungen gemacht."
    },
    {
     "wer": "B",
     "t": "Wie wäre es mit einem Kompromiss: intern „du“, gegenüber Kunden „Sie“?"
    }
   ]
  },
  {
   "titel": "Das Du ablehnen",
   "bild": "bilder/landeskunde/duzen-rp-ablehnen.webp",
   "a": "👔 Du bist Chef und bietest das „du“ an.",
   "b": "🙅 Du möchtest beim „Sie“ bleiben – ohne zu verletzen.",
   "ziel": "Lehnt diplomatisch ab, die Beziehung bleibt gut.",
   "hilfe": [
    "Was halten Sie davon, wenn wir uns duzen?",
    "Das ist sehr nett, aber …",
    "Ich trenne gern Beruf und Privatleben.",
    "Nehmen Sie es bitte nicht persönlich."
   ],
   "beispiel": [
    {
     "wer": "A",
     "t": "Wir arbeiten so gut zusammen. Was halten Sie davon, wenn wir uns duzen?"
    },
    {
     "wer": "B",
     "t": "Das ist sehr nett, aber mir ist im Beruf das „Sie“ lieber. Ich trenne da gern Beruf und Privatleben."
    },
    {
     "wer": "A",
     "t": "Verstehe ich vollkommen."
    },
    {
     "wer": "B",
     "t": "Nehmen Sie es bitte nicht persönlich – ich schätze die Zusammenarbeit sehr."
    }
   ]
  },
  {
   "titel": "Die Polizeikontrolle",
   "bild": "bilder/landeskunde/duzen-rp-polizei.webp",
   "a": "🚗 Du bist genervt und duzt den Polizisten.",
   "b": "👮 Du bist Polizist und reagierst professionell, aber klar.",
   "ziel": "Der Polizist erklärt, warum das ein Problem ist – die Situation beruhigt sich.",
   "hilfe": [
    "Was willst du denn von mir?",
    "Ich bitte Sie, beim „Sie“ zu bleiben.",
    "Das kann als Beleidigung gelten.",
    "Entschuldigung, ich war gestresst."
   ],
   "beispiel": [
    {
     "wer": "A",
     "t": "Was willst du denn jetzt von mir?"
    },
    {
     "wer": "B",
     "t": "Ich bitte Sie, beim „Sie“ zu bleiben. Ein bewusstes Duzen kann als Beleidigung gelten."
    },
    {
     "wer": "A",
     "t": "Oh – Entschuldigung, ich war gestresst. Was kann ich für Sie tun?"
    },
    {
     "wer": "B",
     "t": "Führerschein und Fahrzeugschein, bitte."
    }
   ]
  },
  {
   "titel": "Kulturvergleich unter Kollegen",
   "bild": "bilder/landeskunde/duzen-rp-vergleich.webp",
   "a": "🌍 In deiner Kultur ist es anders. Erkläre, wie.",
   "b": "🇩🇪 Du findest das deutsche System logisch. Frag kritisch nach.",
   "ziel": "Versteht die Logik der anderen Kultur.",
   "hilfe": [
    "In meiner Kultur legt man mehr Wert auf …",
    "Das sehe ich etwas anders, denn …",
    "Man darf nicht verallgemeinern, aber …",
    "Unterm Strich …"
   ],
   "beispiel": [
    {
     "wer": "A",
     "t": "In meiner Kultur legt man mehr Wert auf Alter als auf Position. Einen älteren Kollegen spricht man immer formell an."
    },
    {
     "wer": "B",
     "t": "Auch wenn er dir das „du“ anbietet?"
    },
    {
     "wer": "A",
     "t": "Dann wäre es unhöflich, das sofort anzunehmen. Man darf nicht verallgemeinern, aber das ist oft so."
    },
    {
     "wer": "B",
     "t": "Spannend. Unterm Strich geht es bei beiden um Respekt – nur anders gezeigt."
    }
   ]
  }
 ],
 "fragen": [
  {
   "q": "Sollten Firmen das „du“ für alle einführen?",
   "folge": [
    "Wird die Hierarchie dadurch wirklich flacher?",
    "Ist es leichter, einen Chef zu kritisieren, den man duzt?"
   ],
   "antw": [
    "Ich finde das gut, weil es die Zusammenarbeit lockerer macht.",
    "Meiner Meinung nach ändert ein Wort nichts an der Macht des Chefs.",
    "Einerseits schafft das „du“ Nähe, andererseits fehlt manchmal die Grenze."
   ]
  },
  {
   "q": "Kann man ein angebotenes „du“ ablehnen?",
   "folge": [
    "Wie würdest du das höflich formulieren?",
    "In welcher Situation würdest du lieber beim „Sie“ bleiben?"
   ],
   "antw": [
    "Theoretisch ja, aber das wirkt schnell kühl.",
    "Ich würde sagen, dass ich mich mit „Sie“ wohler fühle.",
    "Bei meinem Vermieter bleibe ich lieber beim „Sie“."
   ]
  },
  {
   "q": "Stirbt das „Sie“ irgendwann aus?",
   "folge": [
    "Welche Rolle spielen Werbung und Internet dabei?",
    "Wäre das ein Verlust oder ein Fortschritt?"
   ],
   "antw": [
    "Ich glaube schon, weil junge Leute fast nur noch duzen.",
    "Nein, bei Behörden und vor Gericht wird es bleiben.",
    "Für mich wäre das ein Verlust, weil „Sie“ Respekt zeigt."
   ]
  }
 ],
 "debatte": {
  "these": "Das „Sie“ ist ein Auslaufmodell und sollte im Berufsleben abgeschafft werden.",
  "pro": [
   "Junge Generationen duzen fast nur noch.",
   "Flache Hierarchien brauchen eine gemeinsame Sprache.",
   "Internationale Teams kennen den Unterschied oft gar nicht."
  ],
  "contra": [
   "Das „Sie“ schützt Grenzen und Privatsphäre.",
   "Gegenüber Kunden wirkt „Sie“ professioneller.",
   "Ein erzwungenes „du“ ist auch nicht ehrlich."
  ]
 },
 "challenge": [
  {
   "frage": "Sollten Firmen eine Duz-Kultur einführen? Wäge ab!",
   "hilfe": [
    "einerseits",
    "andererseits",
    "Hierarchie",
    "Kompromiss"
   ]
  },
  {
   "frage": "Wie würdest du ein angebotenes „du“ ablehnen – und warum?",
   "hilfe": [
    "diplomatisch",
    "Grenzen",
    "nicht persönlich",
    "Beruf und Privatleben"
   ]
  },
  {
   "frage": "Was sagt die Anrede über eine Gesellschaft aus?",
   "hilfe": [
    "Nähe",
    "Distanz",
    "Macht",
    "Respekt"
   ]
  }
 ],
 "quiz": [
  {
   "q": "Was kann bewusstes Duzen eines Polizisten sein?",
   "o": [
    "eine Beleidigung",
    "ein Kompliment",
    "Pflicht"
   ],
   "r": 0,
   "anschluss": "Wie spricht man in deinem Land mit der Polizei?"
  },
  {
   "q": "Welcher Ausdruck leitet ein Abwägen ein?",
   "o": [
    "„Einerseits … andererseits …“",
    "„Quatsch!“",
    "„Auf jeden Fall.“"
   ],
   "r": 0,
   "anschluss": "Bei welchem Thema bist du gerade hin- und hergerissen?"
  },
  {
   "q": "Was bedeutet „Unterm Strich …“?",
   "o": [
    "Am Ende, alles zusammen betrachtet",
    "Unter dem Tisch",
    "Ganz am Anfang"
   ],
   "r": 0,
   "anschluss": "Was ist unterm Strich dein Fazit zu „du“ und „Sie“?"
  },
  {
   "q": "Warum duzen viele Marken in der Werbung?",
   "o": [
    "um nahbar und jung zu wirken",
    "weil es billiger ist",
    "weil das Gesetz es verlangt"
   ],
   "r": 0,
   "anschluss": "Welche Werbung ist dir zuletzt aufgefallen?"
  },
  {
   "q": "Wie wirkt es meistens, ein angebotenes „du“ abzulehnen?",
   "o": [
    "schnell kühl – außer man begründet es diplomatisch",
    "immer sehr freundlich",
    "völlig egal"
   ],
   "r": 0,
   "anschluss": "Würdest du ein „du“ jemals ablehnen?"
  }
 ],
 "merk": "„Du“ oder „Sie“ ist keine Grammatik-, sondern eine Beziehungsfrage: Es zeigt Nähe, Distanz und Machtverhältnisse.",
 "tipp": "Im Beruf gilt: Ein „du“ vom Chef annehmen ist normal – aber in E-Mails an Kunden bleibt man trotzdem oft beim „Sie“.",
 "simulator": {
  "intro": "Ihr seid für ein Jahr nach Deutschland gezogen – in eine Führungsposition. Jede Entscheidung hat Folgen. Diskutiert, einigt euch, begründet!",
  "start": "s1",
  "szenen": {
   "s1": {
    "bild": "bilder/landeskunde/duzen-sim-start.webp",
    "text": "Erster Tag als Teamleitung. Im Team sind Leute zwischen 24 und 61. Wie sprecht ihr sie an?",
    "optionen": [
     {
      "t": "Ihr bietet allen sofort das „du“ an.",
      "folge": "Die Jüngeren freuen sich. Herr Peters (61) wirkt reserviert.",
      "punkte": 2,
      "next": "s2"
     },
     {
      "t": "Ihr siezt alle und wartet ab, was im Team üblich ist.",
      "folge": "Gute Beobachtung: Ihr merkt, dass sich das Team untereinander duzt – außer mit Herrn Peters.",
      "punkte": 3,
      "next": "s2"
     },
     {
      "t": "Ihr duzt nur die Jüngeren.",
      "folge": "Das sorgt für Getuschel: Wer gehört dazu, wer nicht?",
      "punkte": 0,
      "next": "s2"
     }
    ]
   },
   "s2": {
    "bild": "bilder/landeskunde/duzen-sim-peters.webp",
    "text": "Herr Peters sagt: „Ich bleibe lieber beim Sie. Nehmen Sie es bitte nicht persönlich.“",
    "optionen": [
     {
      "t": "„Selbstverständlich, Herr Peters. Ich schätze Ihre Offenheit.“",
      "folge": "Herr Peters nickt. Die Beziehung ist stabil.",
      "punkte": 3,
      "next": "s3"
     },
     {
      "t": "„Bei uns duzen sich aber alle.“",
      "folge": "Herr Peters fühlt sich unter Druck gesetzt.",
      "punkte": 0,
      "next": "s3"
     },
     {
      "t": "Ihr sagt nichts und duzt ihn trotzdem weiter.",
      "folge": "Herr Peters beschwert sich bei der Personalabteilung.",
      "punkte": 0,
      "next": "s3"
     }
    ]
   },
   "s3": {
    "bild": "bilder/landeskunde/duzen-sim-kunde.webp",
    "text": "Ein wichtiger Kunde (Mitte 50) kommt zum Meeting. Ihr kennt ihn nicht.",
    "optionen": [
     {
      "t": "Ihr siezt ihn – und duzt euer Team im Meeting weiter.",
      "folge": "Realistisch und professionell. Der Kunde findet das ganz normal.",
      "punkte": 3,
      "next": "s4"
     },
     {
      "t": "Ihr duzt ihn, damit es locker wird.",
      "folge": "Er antwortet konsequent mit „Sie“. Ihr wirkt etwas unseriös.",
      "punkte": 0,
      "next": "s4"
     },
     {
      "t": "Ihr siezt im Meeting alle, auch das Team.",
      "folge": "Das Team ist irritiert – das wirkt gespielt.",
      "punkte": 1,
      "next": "s4"
     }
    ]
   },
   "s4": {
    "bild": "bilder/landeskunde/duzen-sim-feedback.webp",
    "text": "Ein Jahr später. Eine junge Kollegin sagt: „Seit wir uns duzen, traue ich mich nicht mehr, dich zu kritisieren – das wirkt so persönlich.“",
    "optionen": [
     {
      "t": "Ihr führt wieder „Sie“ für alle ein.",
      "folge": "Ein harter Bruch. Viele sind verunsichert.",
      "punkte": 0,
      "next": "ende"
     },
     {
      "t": "Ihr sprecht im Team offen darüber und vereinbart feste Feedback-Regeln.",
      "folge": "Stark! Ihr zeigt: Respekt hängt nicht am Pronomen, sondern an der Kultur.",
      "punkte": 3,
      "next": "ende"
     },
     {
      "t": "„Das ist doch dein Problem.“",
      "folge": "Die Kollegin zieht sich zurück. Das Team-Klima leidet.",
      "punkte": 0,
      "next": "ende"
     }
    ]
   }
  },
  "ende": [
   {
    "ab": 10,
    "text": "🏆 Diplomatie-Profis! Ihr versteht, dass „du“ und „Sie“ Beziehungsfragen sind."
   },
   {
    "ab": 6,
    "text": "👍 Solide! Bei Grenzen und Hierarchien noch feinfühliger sein."
   },
   {
    "ab": 0,
    "text": "💡 Merke: Das „du“ anbieten ist leicht – es gut leben ist die Kunst."
   }
  ]
 }
});
