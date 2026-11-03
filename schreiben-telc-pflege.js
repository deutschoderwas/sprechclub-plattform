/* ============================================================
   deutschoderwas club — SCHREIBEN telc Deutsch B1·B2 Pflege

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B1·B2 Pflege
   und Tipps zur Prüfungsvorbereitung, geprüft 03.11.2026). Alle Texte
   eigene, Kontext Pflegealltag. Erzeugt aus scratchpad/pflege mit bau.js.
   ============================================================ */

window.SCHREIBEN_TELC_PFL = {
 "niveau": "telcPfl",
 "pruefung": "telc Deutsch B1·B2 Pflege",
 "minuten": 30,
 "punkte": 20,
 "intro": "Bei telc B1·B2 Pflege schreibst du in dreißig Minuten einen Bericht. Du wählst zwischen A, einem Aufnahmebericht aus einem Anamnesebogen, und B, einem Biographiebericht aus einem Biographiebogen. Alle Angaben aus dem Bogen müssen in ganzen Sätzen in den Bericht, erfinden darfst du nichts. Bewertet wird nach vier Kriterien mit je bis zu 5 Punkten: B1 ab 7, B2 ab 15.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Vom Stichwort zum Satz",
   "zeichen": "🖼️",
   "was": "Angaben aus dem Bogen in ganze Sätze bringen."
  },
  {
   "nr": 2,
   "titel": "Aufnahme und Biographie",
   "zeichen": "🧩",
   "was": "Aufbau, Zeitformen, sachlich bleiben."
  },
  {
   "nr": 3,
   "titel": "Die Berichte",
   "zeichen": "📝",
   "was": "Je Runde A und B zur Wahl, wie in der Prüfung."
  },
  {
   "nr": 4,
   "titel": "Die Prüfung",
   "zeichen": "⏱️",
   "was": "Ein Bericht, dreißig Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tps1",
   "stufe": 1,
   "titel": "Aus Stichworten ganze Sätze machen",
   "kurz": "Kreuzchen und Stichworte aus dem Bogen werden zu sauberen Sätzen",
   "ziel": "Nach diesem Block machst du aus jeder Zeile eines Anamnese- oder Biographiebogens einen ganzen, korrekten Satz, ohne etwas wegzulassen oder dazuzuerfinden.",
   "zeichen": "📋",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „Mobilität: ☒ Rollator ☐ Rollstuhl“. Welcher Satz passt in den Bericht?",
     "opt": [
      "Rollator ja, Rollstuhl nein.",
      "Frau Brandt geht mit dem Rollator.",
      "Frau Brandt hat vielleicht einen Rollator, glaube ich."
     ],
     "loesung": 1,
     "erklaerung": "Aus dem Kreuzchen wird ein ganzer Satz mit Subjekt und Verb. Eine Vermutung passt nicht, der Bogen sagt es eindeutig."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „Ernährung: isst selbstständig, trinkt wenig“. Welcher Satz gibt das richtig wieder?",
     "opt": [
      "Sie isst selbstständig, trinkt aber wenig.",
      "Selbstständig essen, wenig trinken.",
      "Sie isst selbstständig und trinkt viel."
     ],
     "loesung": 0,
     "erklaerung": "Beide Angaben kommen vor, verbunden mit „aber“, weil die zweite ein Problem ist."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „Kommunikation: ☒ Hörgerät rechts“. Was schreibst du?",
     "opt": [
      "Er hört rechts gar nichts mehr.",
      "Hörgerät: rechts.",
      "Er trägt rechts ein Hörgerät."
     ],
     "loesung": 2,
     "erklaerung": "Der Bogen sagt nur, dass er ein Hörgerät trägt. „Gar nichts mehr“ steht dort nicht, das wäre erfunden."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „Transfer Bett/Stuhl: Hilfe einer Person“. Welcher Satz ist richtig?",
     "opt": [
      "Beim Transfer vom Bett in den Stuhl braucht sie die Hilfe einer Pflegekraft.",
      "Transfer Bett Stuhl mit Hilfe.",
      "Sie kann überhaupt nicht laufen."
     ],
     "loesung": 0,
     "erklaerung": "Der Satz nennt genau, wobei sie Hilfe braucht. Ob sie laufen kann, steht in dieser Zeile nicht."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „Diagnosen: Bluthochdruck, Diabetes Typ 2“. Wie schreibst du das?",
     "opt": [
      "Herr Albers macht Bluthochdruck und Diabetes.",
      "Bei Herrn Albers sind ein Bluthochdruck und ein Diabetes Typ 2 bekannt.",
      "Herr Albers ist Bluthochdruck und Diabetes."
     ],
     "loesung": 1,
     "erklaerung": "Für Diagnosen passen feste Wendungen: „Bei … ist … bekannt“ oder „Er leidet an …“."
    },
    {
     "art": "wahl",
     "frage": "Fast jeder Satz in deinem Bericht beginnt mit „Frau Sommer“. Was ist besser?",
     "opt": [
      "Es so lassen, das ist am klarsten.",
      "Abwechseln: „Frau Sommer“, „sie“, „die Bewohnerin“, und ab und zu den Satz anders beginnen.",
      "Den Namen ganz weglassen."
     ],
     "loesung": 1,
     "erklaerung": "Abwechslung beim Satzanfang macht den Bericht flüssiger. Das zählt bei der kommunikativen Gestaltung."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „Ausscheidung: ☐ Inkontinenz, nachts Toilettenstuhl“. Was schreibst du?",
     "opt": [
      "Sie ist inkontinent und benutzt nachts einen Toilettenstuhl.",
      "Über die Ausscheidung ist nichts bekannt.",
      "Sie ist nicht inkontinent, nachts benutzt sie einen Toilettenstuhl."
     ],
     "loesung": 2,
     "erklaerung": "Ein leeres Kästchen heißt: trifft nicht zu. Die zweite Angabe gehört auch in den Satz."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „Z. n. Schlaganfall 2021“. Was bedeutet das?",
     "opt": [
      "Sie hat gerade einen Schlaganfall.",
      "Sie hatte 2021 einen Schlaganfall.",
      "Sie hat Angst vor einem Schlaganfall."
     ],
     "loesung": 1,
     "erklaerung": "„Z. n.“ heißt „Zustand nach“. Im Bericht schreibst du es aus, zum Beispiel: „2021 hatte sie einen Schlaganfall.“"
    },
    {
     "art": "ordnen",
     "frage": "Im Bogen steht: „Ernährung: Diabeteskost, isst selbstständig“. Bau den Satz.",
     "teile": [
      "Frau Brandt",
      "bekommt",
      "Diabeteskost",
      "und",
      "isst",
      "selbstständig."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "Zwei Angaben aus einer Zeile verbindest du mit „und“, das Subjekt musst du nicht wiederholen."
    },
    {
     "art": "ordnen",
     "frage": "Im Bogen steht: „Körperpflege: Hilfe beim Waschen von Rücken und Beinen“. Bau den Satz.",
     "teile": [
      "Bei der Körperpflege",
      "braucht",
      "sie",
      "Hilfe",
      "beim Waschen",
      "von Rücken und Beinen."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "Steht der Bereich am Anfang, kommt das Verb an zweite Stelle, dann das Subjekt."
    }
   ]
  },
  {
   "id": "tps2",
   "stufe": 1,
   "titel": "Den Aufnahmebericht aufbauen",
   "kurz": "Anlass, Diagnosen, Mobilität, Ernährung, Kommunikation, Hilfebedarf",
   "ziel": "Nach diesem Block baust du einen Aufnahmebericht in der richtigen Reihenfolge auf und weißt, welche Angabe zu welchem Bereich gehört.",
   "zeichen": "🏥",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Womit beginnt ein Aufnahmebericht?",
     "opt": [
      "Mit den Hobbys der Bewohnerin.",
      "Mit Name, Alter, Einzugsdatum und dem Anlass der Aufnahme.",
      "Mit dem Hilfebedarf bei der Körperpflege."
     ],
     "loesung": 1,
     "erklaerung": "Wer den Bericht liest, will zuerst wissen: Wer ist eingezogen, wann, von wo und warum?"
    },
    {
     "art": "wahl",
     "frage": "In welcher Reihenfolge schreibst du die Bereiche?",
     "opt": [
      "So, wie sie im Anamnesebogen stehen: Anlass, Diagnosen, Mobilität, Ernährung, Kommunikation, Hilfebedarf.",
      "Zuerst das, was dir am leichtesten fällt.",
      "Alles in einem einzigen langen Absatz, egal in welcher Reihenfolge."
     ],
     "loesung": 0,
     "erklaerung": "Wenn du dem Bogen Zeile für Zeile folgst, vergisst du nichts. Für jeden Bereich machst du einen kleinen Absatz."
    },
    {
     "art": "wahl",
     "frage": "Anlass im Bogen: „Ehefrau schafft die Pflege nicht mehr“. Welcher Satz ist sachlich?",
     "opt": [
      "Herr Albers ist eingezogen, weil seine Ehefrau die Pflege zu Hause nicht mehr schafft.",
      "Seine Frau will ihn nicht mehr zu Hause haben.",
      "Die Ehefrau hat leider aufgegeben."
     ],
     "loesung": 0,
     "erklaerung": "Der Bericht nennt den Grund ohne Wertung. „Will nicht“ oder „aufgegeben“ steht nicht im Bogen."
    },
    {
     "art": "wahl",
     "frage": "Wie schreibst du die Diagnosen „Demenz vom Alzheimer-Typ, Herzinsuffizienz“?",
     "opt": [
      "Er ist dement und hat was am Herzen.",
      "Diagnose Demenz Herz.",
      "Bei ihm sind eine Demenz vom Alzheimer-Typ und eine Herzinsuffizienz bekannt."
     ],
     "loesung": 2,
     "erklaerung": "Fachbegriffe aus dem Bogen übernimmst du genau. „Was am Herzen“ ist Umgangssprache."
    },
    {
     "art": "wahl",
     "frage": "Mobilität im Bogen: „geht ohne Hilfsmittel, unsicher“. Was schreibst du?",
     "opt": [
      "Er geht sicher und ohne Hilfe.",
      "Er geht ohne Hilfsmittel, ist dabei aber unsicher.",
      "Er braucht einen Rollator."
     ],
     "loesung": 1,
     "erklaerung": "Beide Teile sind wichtig: kein Hilfsmittel, aber unsicher. Ein Rollator steht nicht im Bogen."
    },
    {
     "art": "wahl",
     "frage": "Welche Angabe gehört in den Bereich Kommunikation?",
     "opt": [
      "Sie spricht leise und braucht zum Lesen eine Brille.",
      "Sie isst lieber kleine Portionen.",
      "Sie braucht Hilfe beim Duschen."
     ],
     "loesung": 0,
     "erklaerung": "Zur Kommunikation gehören Sprechen, Hören und Sehen. Essen gehört zur Ernährung, Duschen zum Hilfebedarf."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „Anleitung beim Waschen“. Was heißt das?",
     "opt": [
      "Die Pflegekraft wäscht ihn komplett.",
      "Er wäscht sich selbst, die Pflegekraft sagt ihm Schritt für Schritt, was er tun soll.",
      "Er braucht beim Waschen keine Hilfe."
     ],
     "loesung": 1,
     "erklaerung": "Anleitung ist nicht Übernahme. Wenn du das verwechselst, steht im Bericht etwas Falsches."
    },
    {
     "art": "wahl",
     "frage": "Welche Zeitformen passen in einen Aufnahmebericht?",
     "opt": [
      "Alles im Futur: „Er wird gestürzt sein.“",
      "Alles im Präsens, auch der Sturz vor zwei Wochen.",
      "Was passiert ist, im Perfekt oder Präteritum. Den Zustand heute im Präsens."
     ],
     "loesung": 2,
     "erklaerung": "„Sie ist gestürzt“ oder „Sie stürzte“, aber: „Sie geht mit dem Rollator.“ So sieht man, was vorbei ist und was jetzt gilt."
    },
    {
     "art": "ordnen",
     "frage": "Bau den ersten Satz eines Aufnahmeberichts.",
     "teile": [
      "Herr Albers,",
      "81 Jahre alt,",
      "ist am 12.11.",
      "von zu Hause",
      "in unsere Einrichtung",
      "eingezogen."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "Name, Alter, Datum, Herkunft: Damit weiß jeder sofort, um wen es geht."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz zum Bereich Ernährung.",
     "teile": [
      "Herr Albers",
      "isst",
      "gern",
      "Süßes,",
      "vergisst",
      "aber",
      "oft,",
      "zu trinken."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "erklaerung": "„Aber“ verbindet eine Ressource und ein Problem im selben Satz."
    }
   ]
  },
  {
   "id": "tps3",
   "stufe": 2,
   "titel": "Biographiebericht: Zeitformen und Lebenslauf",
   "kurz": "Früher im Präteritum, heute im Präsens, dazwischen klare Übergänge",
   "ziel": "Nach diesem Block erzählst du einen Lebenslauf aus dem Biographiebogen in der richtigen Zeitform und trennst klar, was früher war und was heute noch gilt.",
   "zeichen": "📖",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welche Zeitform nimmst du für den Lebenslauf im Biographiebericht?",
     "opt": [
      "Präteritum: „Sie arbeitete als Schneiderin.“",
      "Präsens: „Sie arbeitet als Schneiderin.“",
      "Futur: „Sie wird als Schneiderin arbeiten.“"
     ],
     "loesung": 0,
     "erklaerung": "In schriftlichen Berichten erzählt man Vergangenes meist im Präteritum. Bei „sein“ und „haben“ sowieso."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „Hobbys: Garten, Tanzen (früher)“. Was schreibst du?",
     "opt": [
      "Sie tanzt gern und arbeitet gern im Garten.",
      "Sie arbeitet gern im Garten. Früher ging sie außerdem gern tanzen.",
      "Früher hatte sie Hobbys, heute nicht mehr."
     ],
     "loesung": 1,
     "erklaerung": "„Früher“ gilt nur für das Tanzen. Der Garten ist heute noch ein Hobby, also Präsens."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „1969 nach Deutschland“. Welcher Satz ist richtig?",
     "opt": [
      "1969 kommt Herr Yılmaz nach Deutschland.",
      "Herr Yılmaz ist nach Deutschland 1969.",
      "1969 kam Herr Yılmaz nach Deutschland."
     ],
     "loesung": 2,
     "erklaerung": "Ein abgeschlossenes Ereignis mit Jahreszahl steht im Präteritum. Die Zeitangabe vorn, dann das Verb."
    },
    {
     "art": "wahl",
     "frage": "Ergänze: „Bevor sie nach Deutschland kam, ___ sie in Krakau als Krankenschwester ___.“",
     "opt": [
      "hat … arbeiten",
      "hatte … gearbeitet",
      "wird … arbeiten"
     ],
     "loesung": 1,
     "erklaerung": "Was vor einem anderen vergangenen Ereignis passiert ist, steht im Plusquamperfekt: „hatte gearbeitet“."
    },
    {
     "art": "wahl",
     "frage": "Welches Wort passt? „Nach der Schule lernte er Bäcker. ___ machte er die Meisterprüfung.“",
     "opt": [
      "Später",
      "Trotzdem",
      "Obwohl"
     ],
     "loesung": 0,
     "erklaerung": "Zeitliche Wörter wie „später“, „danach“, „ab 1980“ führen durch den Lebenslauf."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „Ehefrau 2019 verstorben“. Wie schreibst du das sachlich und respektvoll?",
     "opt": [
      "Seine Frau ist leider tot, das ist sehr schlimm für ihn.",
      "Seine Ehefrau ist 2019 verstorben.",
      "Ehefrau weg seit 2019."
     ],
     "loesung": 1,
     "erklaerung": "„Verstorben“ ist respektvoll und sachlich. Wie er sich fühlt, steht nicht im Bogen."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „Gewohnheiten: steht früh auf, trinkt morgens schwarzen Kaffee“. Was schreibst du?",
     "opt": [
      "Früher stand er früh auf.",
      "Er sollte morgens weniger Kaffee trinken.",
      "Er steht gewöhnlich früh auf und trinkt morgens schwarzen Kaffee."
     ],
     "loesung": 2,
     "erklaerung": "Gewohnheiten gelten heute noch, also Präsens. Ratschläge gehören nicht in den Bericht."
    },
    {
     "art": "wahl",
     "frage": "Wie verbindest du die Stationen eines Lebenslaufs am besten?",
     "opt": [
      "Mit Zeitangaben: „Zuerst …, ab 1980 …, bis zur Rente …, seit 2015 …“",
      "Nur mit „und dann“.",
      "Gar nicht, jede Zeile ist ein eigener Satz."
     ],
     "loesung": 0,
     "erklaerung": "Zeitangaben und Konnektoren zeigen die Reihenfolge und machen aus einer Liste einen Text."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz über die Kindheit.",
     "teile": [
      "Frau Becker",
      "wuchs",
      "auf einem Bauernhof",
      "in der Nähe von Kassel",
      "auf."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4
     ],
     "erklaerung": "„Aufwachsen“ ist trennbar: „wuchs“ steht an zweiter Stelle, „auf“ ganz am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz über die Familie.",
     "teile": [
      "Ihre Tochter",
      "wohnt",
      "in der Nähe",
      "und",
      "besucht sie",
      "jeden Mittwoch."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "Was heute regelmäßig passiert, steht im Präsens."
    }
   ]
  },
  {
   "id": "tps4",
   "stufe": 2,
   "titel": "Sachlich bleiben, nichts erfinden",
   "kurz": "Nur was im Bogen steht, ohne Wertung und ohne Umgangssprache",
   "ziel": "Nach diesem Block erkennst du, wann ein Satz wertet oder etwas dazuerfindet, und schreibst stattdessen sachlich, so wie es in eine Pflegedokumentation gehört.",
   "zeichen": "⚖️",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „trinkt wenig“. Welcher Satz bleibt beim Bogen?",
     "opt": [
      "Sie trinkt wenig.",
      "Sie trinkt wenig, weil sie nachts nicht auf die Toilette will.",
      "Sie ist stark ausgetrocknet."
     ],
     "loesung": 0,
     "erklaerung": "Der Grund und die Folge stehen nicht im Bogen. Das wäre erfunden und kostet Punkte."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „wenig Appetit“. Welcher Satz ist sachlich?",
     "opt": [
      "Sie ist beim Essen total wählerisch.",
      "Sie hat wenig Appetit.",
      "Das Essen bei uns schmeckt ihr nicht."
     ],
     "loesung": 1,
     "erklaerung": "Die Pflegedokumentation beschreibt, was man beobachtet, nicht, was man darüber denkt."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist eine Beobachtung und keine Wertung?",
     "opt": [
      "Herr Albers ist ein schwieriger Bewohner.",
      "Herr Albers ist total süß.",
      "Herr Albers läuft viel im Wohnbereich herum."
     ],
     "loesung": 2,
     "erklaerung": "„Schwierig“ und „süß“ sind Meinungen. In den Bericht gehört, was man sehen kann."
    },
    {
     "art": "wahl",
     "frage": "Eine Kollegin sagt: „Der ist ständig am Rumlaufen.“ Wie schreibst du das im Bericht?",
     "opt": [
      "Er läuft viel herum.",
      "Er ist die ganze Zeit unterwegs, total anstrengend.",
      "Er rennt."
     ],
     "loesung": 0,
     "erklaerung": "„Am Rumlaufen“ ist gesprochene Sprache. Im Bericht schreibst du standardsprachlich und ohne Kommentar."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen steht nichts zu Allergien. Was machst du?",
     "opt": [
      "Du schreibst: „Allergien sind keine bekannt.“",
      "Du denkst dir eine typische Allergie aus.",
      "Du schreibst nichts über Allergien."
     ],
     "loesung": 2,
     "erklaerung": "In der Prüfung schreibst du nur über das, was im Bogen steht. Auch „keine“ wäre eine neue Information."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „Hilfebedarf: Kleidung bereitlegen“. Was schreibst du?",
     "opt": [
      "Er zieht sich gern schicke Hemden an.",
      "Die Kleidung muss ihm bereitgelegt werden.",
      "Er hat zu wenig Kleidung dabei."
     ],
     "loesung": 1,
     "erklaerung": "Nur die Maßnahme aus dem Bogen. Hemden und zu wenig Kleidung stehen dort nicht."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen stehen Abkürzungen wie „Z. n.“ oder „ca.“. Was machst du im Bericht?",
     "opt": [
      "Du übernimmst alle Abkürzungen genau so.",
      "Du lässt diese Angaben lieber weg.",
      "Du schreibst sie aus: „Zustand nach“, „ungefähr“."
     ],
     "loesung": 2,
     "erklaerung": "Ein ausformulierter Bericht besteht aus ganzen Sätzen. Abkürzungen aus dem Bogen schreibst du aus."
    },
    {
     "art": "wahl",
     "frage": "Im Bogen steht: „nach Angaben der Tochter: schläft gern lang“. Wie gibst du das wieder?",
     "opt": [
      "Nach Angaben der Tochter schläft Frau Becker gern lang.",
      "Ich glaube, Frau Becker schläft gern lang.",
      "Frau Becker ist bestimmt eine Langschläferin."
     ],
     "loesung": 0,
     "erklaerung": "Woher eine Information kommt, gehört mit in den Satz: „nach Angaben“, „laut“."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit der Quelle der Information.",
     "teile": [
      "Laut",
      "ihrer Tochter",
      "schläft",
      "Frau Becker",
      "gern",
      "lang."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "„Laut“ mit Dativ steht vorn, dann kommt sofort das Verb."
    },
    {
     "art": "ordnen",
     "frage": "Im Bogen steht: „Kommunikation: kurze Sätze, versteht einfache Aufforderungen“. Bau den Satz.",
     "teile": [
      "Er",
      "spricht",
      "in kurzen Sätzen",
      "und",
      "versteht",
      "einfache Aufforderungen."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "Genau die zwei Angaben aus dem Bogen, sauber verbunden, ohne Kommentar."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "mitteilung",
   "name": "Aufnahme- oder Biographiebericht",
   "kurz": "A oder B, alle Angaben aus dem Bogen",
   "was": "In jeder Runde stehen A und B zur Wahl, wie in der Prüfung: ein Aufnahmebericht aus dem Anamnesebogen oder ein Biographiebericht aus dem Biographiebogen. Zu jedem gibt es ein Muster.",
   "tipp": "Geh den Bogen Zeile für Zeile durch und hake ab, was schon im Bericht steht. Lieber schlichte Sätze als eine fehlende Angabe.",
   "zeichen": "📝",
   "farbe": "turq",
   "punkte": 20,
   "runden": [
    {
     "id": "tpfsr1",
     "titel": "Runde 1: A oder B",
     "aufgaben": [
      {
       "id": "tpa1",
       "situation": "Sie arbeiten im Seniorenzentrum Am Lindenhof. Heute ist Frau Helga Brandt eingezogen. Ihre Kollegin hat mit ihr den Anamnesebogen ausgefüllt. Schreiben Sie auf dieser Grundlage den Aufnahmebericht für die Pflegedokumentation.",
       "eingang": {
        "von": "Anamnesebogen",
        "betreff": "Helga Brandt, 84 Jahre, Seniorenzentrum Am Lindenhof",
        "text": "Einzug: 04.11., aus dem Krankenhaus\nAnlass: Sturz zu Hause, Oberschenkelhalsbruch rechts, operiert\nDiagnosen: Bluthochdruck, Diabetes Typ 2 (Tabletten)\nMobilität: ☒ Rollator ☐ Rollstuhl ☐ bettlägerig\nTransfer Bett/Stuhl: Hilfe einer Person\nErnährung: Diabeteskost, isst selbstständig, trinkt wenig\nKommunikation: hört rechts schlecht, ☒ Hörgerät rechts\nKörperpflege: Hilfe beim Waschen von Rücken und Beinen\nAusscheidung: ☐ Inkontinenz, nachts Toilettenstuhl"
       },
       "sorte": "aufsatz",
       "an": "Pflegedokumentation",
       "betreff": "Aufnahmebericht Frau Brandt",
       "punkte": [
        {
         "nr": 1,
         "was": "Anlass und Diagnosen",
         "hinweis": "Schreiben Sie, wann und woher Frau Brandt gekommen ist, warum sie eingezogen ist und welche Krankheiten bekannt sind."
        },
        {
         "nr": 2,
         "was": "Mobilität",
         "hinweis": "Beschreiben Sie, wie Frau Brandt sich fortbewegt und wobei sie Hilfe braucht."
        },
        {
         "nr": 3,
         "was": "Ernährung und Kommunikation",
         "hinweis": "Nennen Sie Kostform, Essen und Trinken und das Problem mit dem Hören."
        },
        {
         "nr": 4,
         "was": "Körperpflege und Ausscheidung",
         "hinweis": "Schreiben Sie, wobei Frau Brandt bei der Körperpflege Hilfe braucht und was nachts gilt."
        }
       ],
       "muster": "Frau Helga Brandt, 84 Jahre alt, ist am 04.11. aus dem Krankenhaus in das Seniorenzentrum Am Lindenhof eingezogen. Anlass war ein Sturz zu Hause, bei dem sie sich den rechten Oberschenkelhals gebrochen hat. Der Bruch wurde im Krankenhaus operiert. Außerdem leidet Frau Brandt an Bluthochdruck und an einem Diabetes Typ 2, der mit Tabletten behandelt wird.\nFrau Brandt geht mit dem Rollator. Einen Rollstuhl braucht sie nicht, und sie ist nicht bettlägerig. Beim Transfer vom Bett in den Stuhl braucht sie allerdings die Hilfe einer Pflegekraft.\nSie bekommt Diabeteskost und isst selbstständig, trinkt aber wenig. Auf dem rechten Ohr hört Frau Brandt schlecht, deshalb trägt sie dort ein Hörgerät.\nBei der Körperpflege braucht sie Hilfe beim Waschen von Rücken und Beinen. Frau Brandt ist nicht inkontinent. Nachts benutzt sie einen Toilettenstuhl.",
       "hilfen": [
        "Frau …, … Jahre alt, ist am … aus … eingezogen.",
        "Anlass war …, bei dem sie sich … gebrochen hat.",
        "Außerdem leidet sie an …, der mit … behandelt wird.",
        "Beim Transfer vom Bett in den Stuhl braucht sie …",
        "Sie bekommt … und isst selbstständig, trinkt aber …",
        "Bei der Körperpflege braucht sie Hilfe beim …"
       ],
       "erklaerung": "Das Muster geht den Bogen Zeile für Zeile durch und macht aus jedem Kreuzchen einen Satz. Auch die leeren Kästchen werden genannt, aber nichts kommt dazu.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Angaben aus dem Bogen im Bericht, klar und richtig? Nichts dazuerfunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "alle Angaben klar"
          },
          {
           "w": 4,
           "t": "B",
           "d": "eine fehlt oder unklar"
          },
          {
           "w": 3,
           "t": "C",
           "d": "zwei fehlen"
          },
          {
           "w": 2,
           "t": "D",
           "d": "drei fehlen"
          },
          {
           "w": 1,
           "t": "E",
           "d": "vier fehlen"
          },
          {
           "w": 0,
           "t": "F",
           "d": "mehr fehlen"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Ein zusammenhängender, sachlicher Bericht in ganzen Sätzen, gut verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Fachwörter aus der Pflege, nicht immer dieselben Verben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 140,
       "platzhalter": "Schreib hier deinen Bericht …",
       "punkteText": "Diese Angaben aus dem Bogen müssen in den Bericht",
       "rubrikTitel": "Bewerte deinen Bericht wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je bis 5 Punkte, zusammen 20: B1 ab 7, B2 ab 15. Bei I gibt es 5 Punkte, wenn alle Angaben klar drin sind, für jede fehlende einen weniger. Die Stufen bei II bis IV sind eine Übungsschätzung."
      },
      {
       "id": "tpa2",
       "situation": "Sie arbeiten im Haus Sonnenhang. Herr Josef Hartmann ist vor einer Woche eingezogen. Sein Sohn hat mit Ihnen den Biographiebogen ausgefüllt. Schreiben Sie den Biographiebericht für die Pflegedokumentation.",
       "eingang": {
        "von": "Biographiebogen",
        "betreff": "Josef Hartmann, 88 Jahre, Haus Sonnenhang",
        "text": "Geboren: 1938 in Passau, drei Geschwister\nBeruf: Bäckermeister, eigene Bäckerei bis 1999\nFamilie: verheiratet seit 1961, Ehefrau 2019 verstorben, zwei Söhne, vier Enkel\nHobbys: Fußball (früher Schiedsrichter, heute im Fernsehen), Kartenspielen, Radio hören\nGewohnheiten: steht früh auf (ca. 5 Uhr), trinkt morgens schwarzen Kaffee\nKleidung: trägt immer Hemd und Hosenträger\nEssen: Lieblingsessen Schweinebraten mit Knödeln, mag keinen Fisch\nMag nicht: laute Musik\nGlaube: katholisch, möchte sonntags den Gottesdienst im Haus besuchen"
       },
       "sorte": "aufsatz",
       "an": "Pflegedokumentation",
       "betreff": "Biographiebericht Herr Hartmann",
       "punkte": [
        {
         "nr": 1,
         "was": "Herkunft und Beruf",
         "hinweis": "Erzählen Sie, wo und wann Herr Hartmann geboren ist und was er beruflich gemacht hat."
        },
        {
         "nr": 2,
         "was": "Familie",
         "hinweis": "Schreiben Sie über Ehe, Ehefrau, Kinder und Enkel."
        },
        {
         "nr": 3,
         "was": "Hobbys und Gewohnheiten",
         "hinweis": "Trennen Sie, was früher war und was heute noch gilt."
        },
        {
         "nr": 4,
         "was": "Essen, Abneigungen und Glaube",
         "hinweis": "Nennen Sie sein Lieblingsessen, was er nicht mag und seinen Wunsch für den Sonntag."
        }
       ],
       "muster": "Herr Josef Hartmann wurde 1938 in Passau geboren und wuchs mit drei Geschwistern auf. Er war Bäckermeister und führte bis 1999 eine eigene Bäckerei.\n1961 heiratete er. Seine Ehefrau ist 2019 verstorben. Herr Hartmann hat zwei Söhne und vier Enkelkinder.\nSein großes Hobby ist der Fußball. Früher war er sogar Schiedsrichter, heute sieht er sich die Spiele im Fernsehen an. Außerdem spielt er gern Karten und hört Radio. Herr Hartmann steht gewöhnlich sehr früh auf, ungefähr um 5 Uhr. Morgens trinkt er gern schwarzen Kaffee. Er trägt immer ein Hemd und Hosenträger.\nSein Lieblingsessen ist Schweinebraten mit Knödeln, Fisch mag er dagegen nicht. Auch laute Musik mag er nicht.\nHerr Hartmann ist katholisch. Es ist ihm wichtig, sonntags den Gottesdienst hier im Haus zu besuchen.",
       "hilfen": [
        "Herr … wurde … in … geboren und wuchs mit … auf.",
        "Er war … und führte bis … eine eigene …",
        "… heiratete er. Seine Ehefrau ist … verstorben.",
        "Früher war er sogar …",
        "Herr … steht gewöhnlich … auf.",
        "Es ist ihm wichtig, sonntags …"
       ],
       "erklaerung": "Der Lebenslauf steht im Präteritum, Gewohnheiten und Vorlieben von heute im Präsens. Das „früher“ aus dem Bogen gilt nur für den Schiedsrichter.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Angaben aus dem Bogen im Bericht, klar und richtig? Nichts dazuerfunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "alle Angaben klar"
          },
          {
           "w": 4,
           "t": "B",
           "d": "eine fehlt oder unklar"
          },
          {
           "w": 3,
           "t": "C",
           "d": "zwei fehlen"
          },
          {
           "w": 2,
           "t": "D",
           "d": "drei fehlen"
          },
          {
           "w": 1,
           "t": "E",
           "d": "vier fehlen"
          },
          {
           "w": 0,
           "t": "F",
           "d": "mehr fehlen"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Ein zusammenhängender, sachlicher Bericht in ganzen Sätzen, gut verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Fachwörter aus der Pflege, nicht immer dieselben Verben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 140,
       "platzhalter": "Schreib hier deinen Bericht …",
       "punkteText": "Diese Angaben aus dem Bogen müssen in den Bericht",
       "rubrikTitel": "Bewerte deinen Bericht wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je bis 5 Punkte, zusammen 20: B1 ab 7, B2 ab 15. Bei I gibt es 5 Punkte, wenn alle Angaben klar drin sind, für jede fehlende einen weniger. Die Stufen bei II bis IV sind eine Übungsschätzung."
      }
     ]
    },
    {
     "id": "tpfsr2",
     "titel": "Runde 2: A oder B",
     "aufgaben": [
      {
       "id": "tpa3",
       "situation": "Sie arbeiten im Haus am Stadtpark. Heute ist Herr Günter Albers eingezogen. Zusammen mit seiner Ehefrau haben Sie den Anamnesebogen ausgefüllt. Schreiben Sie den Aufnahmebericht für die Pflegedokumentation.",
       "eingang": {
        "von": "Anamnesebogen",
        "betreff": "Günter Albers, 81 Jahre, Haus am Stadtpark",
        "text": "Einzug: 12.11., von zu Hause\nAnlass: Ehefrau schafft die Pflege nicht mehr\nDiagnosen: Demenz vom Alzheimer-Typ (mittleres Stadium), Herzinsuffizienz\nMobilität: ☐ Rollator ☐ Rollstuhl ☒ geht ohne Hilfsmittel, unsicher, läuft viel herum\nOrientierung: zeitlich und örtlich nicht orientiert, zur Person orientiert\nErnährung: isst gern süß, vergisst zu trinken, Gewicht 68 kg\nKommunikation: spricht in kurzen Sätzen, versteht einfache Aufforderungen, ☒ Brille\nHilfebedarf: Anleitung beim Waschen und Anziehen, Kleidung bereitlegen, rasiert sich selbst mit Elektrorasierer\nAusscheidung: ☒ Inkontinenzeinlagen tagsüber und nachts"
       },
       "sorte": "aufsatz",
       "an": "Pflegedokumentation",
       "betreff": "Aufnahmebericht Herr Albers",
       "punkte": [
        {
         "nr": 1,
         "was": "Anlass und Diagnosen",
         "hinweis": "Schreiben Sie, wann und warum Herr Albers eingezogen ist und welche Diagnosen bekannt sind."
        },
        {
         "nr": 2,
         "was": "Mobilität und Orientierung",
         "hinweis": "Beschreiben Sie, wie er sich bewegt und wie gut er orientiert ist."
        },
        {
         "nr": 3,
         "was": "Ernährung und Kommunikation",
         "hinweis": "Nennen Sie Essen, Trinken, Gewicht und wie man mit ihm sprechen kann."
        },
        {
         "nr": 4,
         "was": "Hilfebedarf und Ausscheidung",
         "hinweis": "Schreiben Sie genau, ob er Anleitung oder Übernahme braucht."
        }
       ],
       "muster": "Herr Günter Albers, 81 Jahre alt, ist am 12.11. von zu Hause in das Haus am Stadtpark eingezogen, weil seine Ehefrau die Pflege nicht mehr schafft. Bei Herrn Albers ist eine Demenz vom Alzheimer-Typ im mittleren Stadium bekannt. Außerdem leidet er an einer Herzinsuffizienz.\nHerr Albers geht ohne Hilfsmittel, also ohne Rollator und ohne Rollstuhl. Dabei ist er aber unsicher. Er läuft viel herum. Zeitlich und örtlich ist er nicht orientiert, zur Person dagegen schon.\nEr isst gern Süßes, vergisst aber zu trinken. Sein Gewicht liegt bei 68 kg. Herr Albers spricht in kurzen Sätzen und versteht einfache Aufforderungen. Er trägt eine Brille.\nBeim Waschen und Anziehen braucht er Anleitung. Seine Kleidung muss ihm bereitgelegt werden. Rasieren kann er sich mit dem Elektrorasierer selbst. Tagsüber und nachts trägt Herr Albers Inkontinenzeinlagen.",
       "hilfen": [
        "Herr …, … Jahre alt, ist am … eingezogen, weil …",
        "Bei Herrn … ist eine … bekannt.",
        "Zeitlich und örtlich ist er nicht orientiert, zur Person dagegen schon.",
        "Er isst gern …, vergisst aber …",
        "Beim Waschen und Anziehen braucht er Anleitung.",
        "Tagsüber und nachts trägt er …"
       ],
       "erklaerung": "Bei der Orientierung zählt jedes Wort: zeitlich und örtlich nein, zur Person ja. „Anleitung“ bleibt Anleitung und wird nicht zu „wird gewaschen“.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Angaben aus dem Bogen im Bericht, klar und richtig? Nichts dazuerfunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "alle Angaben klar"
          },
          {
           "w": 4,
           "t": "B",
           "d": "eine fehlt oder unklar"
          },
          {
           "w": 3,
           "t": "C",
           "d": "zwei fehlen"
          },
          {
           "w": 2,
           "t": "D",
           "d": "drei fehlen"
          },
          {
           "w": 1,
           "t": "E",
           "d": "vier fehlen"
          },
          {
           "w": 0,
           "t": "F",
           "d": "mehr fehlen"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Ein zusammenhängender, sachlicher Bericht in ganzen Sätzen, gut verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Fachwörter aus der Pflege, nicht immer dieselben Verben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 140,
       "platzhalter": "Schreib hier deinen Bericht …",
       "punkteText": "Diese Angaben aus dem Bogen müssen in den Bericht",
       "rubrikTitel": "Bewerte deinen Bericht wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je bis 5 Punkte, zusammen 20: B1 ab 7, B2 ab 15. Bei I gibt es 5 Punkte, wenn alle Angaben klar drin sind, für jede fehlende einen weniger. Die Stufen bei II bis IV sind eine Übungsschätzung."
      },
      {
       "id": "tpa4",
       "situation": "Sie arbeiten im Seniorenzentrum Am Lindenhof. Frau Anneliese Becker wohnt seit zwei Wochen bei Ihnen. Ihre Tochter hat beim Biographiebogen geholfen. Schreiben Sie den Biographiebericht für die Pflegedokumentation.",
       "eingang": {
        "von": "Biographiebogen",
        "betreff": "Anneliese Becker, 86 Jahre, Seniorenzentrum Am Lindenhof",
        "text": "Geboren: 1940 in einem Dorf bei Kassel, auf einem Bauernhof aufgewachsen\nSchule und Beruf: Volksschule, Schneiderin, später Verkäuferin im Stoffgeschäft\nFamilie: verwitwet seit 2015, eine Tochter (wohnt in der Nähe, kommt jeden Mittwoch), zwei Enkelinnen\nHobbys: Nähen, Garten, Tanzen (früher)\nVorlieben: Kartoffelsuppe, Schlager, Blumen auf dem Tisch, trägt gern Schmuck (Kette von ihrem Mann)\nTagesablauf: schläft morgens gern lang, Mittagsschlaf nach dem Essen\nÄngste: Dunkelheit, möchte nachts ein kleines Licht"
       },
       "sorte": "aufsatz",
       "an": "Pflegedokumentation",
       "betreff": "Biographiebericht Frau Becker",
       "punkte": [
        {
         "nr": 1,
         "was": "Herkunft, Schule und Beruf",
         "hinweis": "Erzählen Sie Kindheit und Berufsweg in der richtigen Reihenfolge."
        },
        {
         "nr": 2,
         "was": "Familie",
         "hinweis": "Schreiben Sie über den Ehemann, die Tochter und die Enkelinnen."
        },
        {
         "nr": 3,
         "was": "Hobbys und Vorlieben",
         "hinweis": "Achten Sie darauf, was heute noch gilt und was früher war."
        },
        {
         "nr": 4,
         "was": "Tagesablauf und Ängste",
         "hinweis": "Nennen Sie ihre Gewohnheiten und was sie nachts braucht."
        }
       ],
       "muster": "Frau Anneliese Becker wurde 1940 in einem Dorf bei Kassel geboren und wuchs auf einem Bauernhof auf. Nach der Volksschule wurde sie Schneiderin. Später arbeitete sie als Verkäuferin in einem Stoffgeschäft.\nSeit 2015 ist Frau Becker verwitwet. Sie hat eine Tochter, die in der Nähe wohnt und sie jeden Mittwoch besucht. Außerdem hat sie zwei Enkelinnen.\nFrau Becker näht gern und arbeitet gern im Garten. Früher ist sie auch gern tanzen gegangen. Sie isst gern Kartoffelsuppe und hört gern Schlager. Über Blumen auf dem Tisch freut sie sich sehr. Sie trägt gern Schmuck, besonders eine Kette, die sie von ihrem Mann bekommen hat.\nMorgens schläft Frau Becker gern lang, und nach dem Mittagessen hält sie einen Mittagsschlaf.\nSie hat Angst vor der Dunkelheit. Deshalb möchte sie, dass nachts in ihrem Zimmer ein kleines Licht brennt.",
       "hilfen": [
        "Frau … wurde … in … geboren und wuchs … auf.",
        "Nach der Volksschule wurde sie …",
        "Später arbeitete sie als …",
        "Seit … ist Frau … verwitwet.",
        "Früher ist sie auch gern … gegangen.",
        "Sie hat Angst vor … Deshalb möchte sie, dass …"
       ],
       "erklaerung": "Der Bericht trennt sauber: Berufsweg im Präteritum, Hobbys und Gewohnheiten von heute im Präsens, nur das Tanzen gehört in die Vergangenheit.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Angaben aus dem Bogen im Bericht, klar und richtig? Nichts dazuerfunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "alle Angaben klar"
          },
          {
           "w": 4,
           "t": "B",
           "d": "eine fehlt oder unklar"
          },
          {
           "w": 3,
           "t": "C",
           "d": "zwei fehlen"
          },
          {
           "w": 2,
           "t": "D",
           "d": "drei fehlen"
          },
          {
           "w": 1,
           "t": "E",
           "d": "vier fehlen"
          },
          {
           "w": 0,
           "t": "F",
           "d": "mehr fehlen"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Ein zusammenhängender, sachlicher Bericht in ganzen Sätzen, gut verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Fachwörter aus der Pflege, nicht immer dieselben Verben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 140,
       "platzhalter": "Schreib hier deinen Bericht …",
       "punkteText": "Diese Angaben aus dem Bogen müssen in den Bericht",
       "rubrikTitel": "Bewerte deinen Bericht wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je bis 5 Punkte, zusammen 20: B1 ab 7, B2 ab 15. Bei I gibt es 5 Punkte, wenn alle Angaben klar drin sind, für jede fehlende einen weniger. Die Stufen bei II bis IV sind eine Übungsschätzung."
      }
     ]
    },
    {
     "id": "tpfsr3",
     "titel": "Runde 3: A oder B",
     "aufgaben": [
      {
       "id": "tpa5",
       "situation": "Sie arbeiten im Haus Sonnenhang. Frau Elfriede Krause kommt heute für drei Wochen in die Kurzzeitpflege. Schreiben Sie mit Hilfe des Anamnesebogens den Aufnahmebericht für die Pflegedokumentation.",
       "eingang": {
        "von": "Anamnesebogen",
        "betreff": "Elfriede Krause, 90 Jahre, Haus Sonnenhang, Kurzzeitpflege",
        "text": "Aufnahme: 18.11., Kurzzeitpflege für drei Wochen\nAnlass: Sohn pflegt sie zu Hause, ist im Urlaub\nDiagnosen: Parkinson, Osteoporose, Z. n. Schlaganfall 2021 (keine Lähmung)\nMobilität: ☐ Rollator ☒ Rollstuhl für längere Wege, kurze Strecken mit Gehstock\nSturzrisiko: ☒ hoch, zwei Stürze in diesem Jahr\nErnährung: Schluckbeschwerden bei fester Nahrung, ☒ pürierte Kost, Getränke angedickt\nKommunikation: spricht leise, Lesebrille\nHilfebedarf: Hilfe beim Duschen, Parkinsonmedikamente pünktlich zu festen Zeiten"
       },
       "sorte": "aufsatz",
       "an": "Pflegedokumentation",
       "betreff": "Aufnahmebericht Frau Krause",
       "punkte": [
        {
         "nr": 1,
         "was": "Anlass und Diagnosen",
         "hinweis": "Schreiben Sie, warum und wie lange Frau Krause bleibt und welche Diagnosen bekannt sind."
        },
        {
         "nr": 2,
         "was": "Mobilität und Sturzrisiko",
         "hinweis": "Beschreiben Sie die Hilfsmittel und begründen Sie das Sturzrisiko."
        },
        {
         "nr": 3,
         "was": "Ernährung",
         "hinweis": "Nennen Sie das Schluckproblem und die Kostform."
        },
        {
         "nr": 4,
         "was": "Kommunikation und Hilfebedarf",
         "hinweis": "Schreiben Sie auch, was bei den Medikamenten wichtig ist."
        }
       ],
       "muster": "Frau Elfriede Krause, 90 Jahre alt, ist am 18.11. für drei Wochen zur Kurzzeitpflege ins Haus Sonnenhang gekommen. Ihr Sohn, der sie zu Hause pflegt, ist in dieser Zeit im Urlaub. Bei Frau Krause sind eine Parkinson-Erkrankung und eine Osteoporose bekannt. 2021 hatte sie einen Schlaganfall, eine Lähmung ist nicht zurückgeblieben.\nFür längere Wege benutzt Frau Krause einen Rollstuhl, kurze Strecken geht sie mit einem Gehstock. Einen Rollator hat sie nicht. Ihr Sturzrisiko ist hoch, denn sie ist in diesem Jahr schon zweimal gestürzt.\nFeste Nahrung kann sie schlecht schlucken. Sie bekommt deshalb pürierte Kost, und ihre Getränke werden angedickt.\nFrau Krause spricht leise und braucht zum Lesen eine Brille. Beim Duschen braucht sie Hilfe. Ihre Parkinsonmedikamente muss sie pünktlich zu festen Zeiten bekommen.",
       "hilfen": [
        "Frau … ist am … für … zur Kurzzeitpflege gekommen.",
        "Ihr Sohn, der sie zu Hause pflegt, …",
        "2021 hatte sie …, eine Lähmung ist nicht zurückgeblieben.",
        "Für längere Wege benutzt sie …, kurze Strecken …",
        "Ihr Sturzrisiko ist hoch, denn …",
        "Ihre Medikamente muss sie pünktlich zu festen Zeiten bekommen."
       ],
       "erklaerung": "Das Muster schreibt „Z. n.“ aus und begründet das hohe Sturzrisiko mit der Angabe aus dem Bogen. Die festen Zeiten bei den Medikamenten dürfen nicht fehlen.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Angaben aus dem Bogen im Bericht, klar und richtig? Nichts dazuerfunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "alle Angaben klar"
          },
          {
           "w": 4,
           "t": "B",
           "d": "eine fehlt oder unklar"
          },
          {
           "w": 3,
           "t": "C",
           "d": "zwei fehlen"
          },
          {
           "w": 2,
           "t": "D",
           "d": "drei fehlen"
          },
          {
           "w": 1,
           "t": "E",
           "d": "vier fehlen"
          },
          {
           "w": 0,
           "t": "F",
           "d": "mehr fehlen"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Ein zusammenhängender, sachlicher Bericht in ganzen Sätzen, gut verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Fachwörter aus der Pflege, nicht immer dieselben Verben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 140,
       "platzhalter": "Schreib hier deinen Bericht …",
       "punkteText": "Diese Angaben aus dem Bogen müssen in den Bericht",
       "rubrikTitel": "Bewerte deinen Bericht wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je bis 5 Punkte, zusammen 20: B1 ab 7, B2 ab 15. Bei I gibt es 5 Punkte, wenn alle Angaben klar drin sind, für jede fehlende einen weniger. Die Stufen bei II bis IV sind eine Übungsschätzung."
      },
      {
       "id": "tpa6",
       "situation": "Sie arbeiten im Haus am Stadtpark. Herr Mehmet Yılmaz ist neu eingezogen. Seine Tochter hat Ihnen beim Biographiebogen geholfen. Schreiben Sie den Biographiebericht für die Pflegedokumentation.",
       "eingang": {
        "von": "Biographiebogen",
        "betreff": "Mehmet Yılmaz, 78 Jahre, Haus am Stadtpark",
        "text": "Geboren: 1948 in Kayseri, Türkei\nBeruf: 1969 nach Deutschland, Stahlwerk in Duisburg, 30 Jahre Schichtarbeit\nFamilie: verheiratet, Ehefrau lebt noch in der gemeinsamen Wohnung, drei Kinder, sieben Enkel\nSprachen: Türkisch, im Alltag gutes Deutsch\nReligion: Muslim, isst kein Schweinefleisch, betet wenn möglich fünfmal am Tag\nHobbys: Tavla (Backgammon), Tee trinken mit Freunden, Fußball im Fernsehen, Spaziergänge im Park\nWunsch: bei der Intimpflege nur männliche Pflegekräfte"
       },
       "sorte": "aufsatz",
       "an": "Pflegedokumentation",
       "betreff": "Biographiebericht Herr Yılmaz",
       "punkte": [
        {
         "nr": 1,
         "was": "Herkunft und Beruf",
         "hinweis": "Erzählen Sie, woher er kommt und wie sein Arbeitsleben in Deutschland war."
        },
        {
         "nr": 2,
         "was": "Familie und Sprachen",
         "hinweis": "Schreiben Sie über Ehefrau, Kinder, Enkel und seine Sprachen."
        },
        {
         "nr": 3,
         "was": "Religion und Wünsche",
         "hinweis": "Nennen Sie alles, was für Essen, Gebet und Pflege wichtig ist."
        },
        {
         "nr": 4,
         "was": "Hobbys",
         "hinweis": "Schreiben Sie, womit er seine Zeit gern verbringt."
        }
       ],
       "muster": "Herr Mehmet Yılmaz wurde 1948 in Kayseri in der Türkei geboren. 1969 kam er nach Deutschland. Er arbeitete in einem Stahlwerk in Duisburg und war dort 30 Jahre lang im Schichtdienst.\nHerr Yılmaz ist verheiratet. Seine Ehefrau lebt noch in der gemeinsamen Wohnung. Das Ehepaar hat drei Kinder und sieben Enkel. Herr Yılmaz spricht Türkisch, im Alltag spricht er aber auch gut Deutsch.\nEr ist Muslim und isst kein Schweinefleisch. Wenn es möglich ist, betet er fünfmal am Tag. Bei der Intimpflege möchte er nur von männlichen Pflegekräften versorgt werden.\nIn seiner Freizeit spielt Herr Yılmaz gern Tavla, ein Brettspiel, das bei uns als Backgammon bekannt ist. Er trinkt gern mit Freunden Tee und sieht sich Fußball im Fernsehen an. Außerdem geht er gern im Park spazieren.",
       "hilfen": [
        "Herr … wurde … in … geboren.",
        "… kam er nach Deutschland.",
        "Er arbeitete in … und war dort … Jahre lang …",
        "Wenn es möglich ist, …",
        "Bei der Intimpflege möchte er nur von … versorgt werden.",
        "In seiner Freizeit spielt er gern …"
       ],
       "erklaerung": "Für die Pflege sind Speisevorschrift, Gebet und der Wunsch bei der Intimpflege besonders wichtig. Das Muster nennt sie klar und ohne Kommentar.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Angaben aus dem Bogen im Bericht, klar und richtig? Nichts dazuerfunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "alle Angaben klar"
          },
          {
           "w": 4,
           "t": "B",
           "d": "eine fehlt oder unklar"
          },
          {
           "w": 3,
           "t": "C",
           "d": "zwei fehlen"
          },
          {
           "w": 2,
           "t": "D",
           "d": "drei fehlen"
          },
          {
           "w": 1,
           "t": "E",
           "d": "vier fehlen"
          },
          {
           "w": 0,
           "t": "F",
           "d": "mehr fehlen"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Ein zusammenhängender, sachlicher Bericht in ganzen Sätzen, gut verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Fachwörter aus der Pflege, nicht immer dieselben Verben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 140,
       "platzhalter": "Schreib hier deinen Bericht …",
       "punkteText": "Diese Angaben aus dem Bogen müssen in den Bericht",
       "rubrikTitel": "Bewerte deinen Bericht wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je bis 5 Punkte, zusammen 20: B1 ab 7, B2 ab 15. Bei I gibt es 5 Punkte, wenn alle Angaben klar drin sind, für jede fehlende einen weniger. Die Stufen bei II bis IV sind eine Übungsschätzung."
      }
     ]
    },
    {
     "id": "tpfsr4",
     "titel": "Runde 4: A oder B",
     "aufgaben": [
      {
       "id": "tpa7",
       "situation": "Sie arbeiten beim ambulanten Pflegedienst Lindenweg. Heute waren Sie zum ersten Mal bei Herrn Peter Schulz. Schreiben Sie mit Hilfe des Anamnesebogens den Aufnahmebericht für die Pflegedokumentation.",
       "eingang": {
        "von": "Anamnesebogen",
        "betreff": "Peter Schulz, 73 Jahre, Pflegedienst Lindenweg (ambulant)",
        "text": "Erstbesuch: 20.11., lebt allein, Wohnung im 2. Stock\nAnlass: nach Krankenhausaufenthalt wegen Lungenentzündung, Pflege vom Hausarzt verordnet\nDiagnosen: COPD, Diabetes Typ 2 mit Insulin\nBehandlungspflege: Blutzucker messen und Insulin spritzen morgens und abends, Kompressionsstrümpfe morgens anziehen\nMobilität: ☒ Rollator in der Wohnung, schnell außer Atem\nErnährung: kocht nicht mehr selbst, ☒ Essen auf Rädern mittags, Frühstück und Abendbrot macht er selbst\nKommunikation: wach, orientiert, gut zu verstehen, Brille, hört gut\nHilfebedarf: Hilfe beim Duschen 2x pro Woche"
       },
       "sorte": "aufsatz",
       "an": "Pflegedokumentation",
       "betreff": "Aufnahmebericht Herr Schulz",
       "punkte": [
        {
         "nr": 1,
         "was": "Wohnsituation, Anlass und Diagnosen",
         "hinweis": "Schreiben Sie, wie Herr Schulz lebt, warum er Pflege bekommt und welche Diagnosen bekannt sind."
        },
        {
         "nr": 2,
         "was": "Behandlungspflege",
         "hinweis": "Nennen Sie alle ärztlich verordneten Maßnahmen mit Uhrzeit."
        },
        {
         "nr": 3,
         "was": "Mobilität und Ernährung",
         "hinweis": "Beschreiben Sie, wie er sich in der Wohnung bewegt und wie er sich versorgt."
        },
        {
         "nr": 4,
         "was": "Kommunikation und Hilfebedarf",
         "hinweis": "Schreiben Sie, wie er wirkt und wobei er Hilfe braucht."
        }
       ],
       "muster": "Am 20.11. fand der Erstbesuch bei Herrn Peter Schulz, 73 Jahre alt, statt. Herr Schulz lebt allein in einer Wohnung im zweiten Stock. Er war wegen einer Lungenentzündung im Krankenhaus, danach hat sein Hausarzt die Pflege verordnet. Bekannt sind eine COPD und ein Diabetes Typ 2, der mit Insulin behandelt wird.\nMorgens und abends messen wir bei Herrn Schulz den Blutzucker und spritzen Insulin. Außerdem ziehen wir ihm morgens die Kompressionsstrümpfe an.\nIn der Wohnung geht Herr Schulz mit dem Rollator, dabei ist er schnell außer Atem. Er kocht nicht mehr selbst und bekommt mittags Essen auf Rädern. Frühstück und Abendbrot macht er sich selbst.\nHerr Schulz ist wach und orientiert und gut zu verstehen. Er trägt eine Brille und hört gut. Zweimal pro Woche braucht er Hilfe beim Duschen.",
       "hilfen": [
        "Am … fand der Erstbesuch bei Herrn … statt.",
        "Er war wegen … im Krankenhaus, danach hat …",
        "Bekannt sind … und …, der mit … behandelt wird.",
        "Morgens und abends messen wir … und spritzen …",
        "Er kocht nicht mehr selbst und bekommt …",
        "Zweimal pro Woche braucht er Hilfe beim …"
       ],
       "erklaerung": "In der ambulanten Pflege steht oft „wir“ im Bericht: Der Pflegedienst führt die Behandlungspflege durch. Alle Zeiten aus dem Bogen kommen vor.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Angaben aus dem Bogen im Bericht, klar und richtig? Nichts dazuerfunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "alle Angaben klar"
          },
          {
           "w": 4,
           "t": "B",
           "d": "eine fehlt oder unklar"
          },
          {
           "w": 3,
           "t": "C",
           "d": "zwei fehlen"
          },
          {
           "w": 2,
           "t": "D",
           "d": "drei fehlen"
          },
          {
           "w": 1,
           "t": "E",
           "d": "vier fehlen"
          },
          {
           "w": 0,
           "t": "F",
           "d": "mehr fehlen"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Ein zusammenhängender, sachlicher Bericht in ganzen Sätzen, gut verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Fachwörter aus der Pflege, nicht immer dieselben Verben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 140,
       "platzhalter": "Schreib hier deinen Bericht …",
       "punkteText": "Diese Angaben aus dem Bogen müssen in den Bericht",
       "rubrikTitel": "Bewerte deinen Bericht wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je bis 5 Punkte, zusammen 20: B1 ab 7, B2 ab 15. Bei I gibt es 5 Punkte, wenn alle Angaben klar drin sind, für jede fehlende einen weniger. Die Stufen bei II bis IV sind eine Übungsschätzung."
      },
      {
       "id": "tpa8",
       "situation": "Sie arbeiten im Seniorenzentrum Am Lindenhof. Frau Ilse Martens ist vor kurzem eingezogen. Ihre Nichte hat den Biographiebogen mit ihr ausgefüllt. Schreiben Sie den Biographiebericht für die Pflegedokumentation.",
       "eingang": {
        "von": "Biographiebogen",
        "betreff": "Ilse Martens, 92 Jahre, Seniorenzentrum Am Lindenhof",
        "text": "Geboren: 1934 in Königsberg, 1945 mit der Mutter nach Hamburg geflohen\nBeruf: Studium in Kiel, danach 35 Jahre Grundschullehrerin in Hamburg\nFamilie: nie verheiratet, keine Kinder, Nichte (Tochter ihrer Schwester) ist gesetzliche Betreuerin, kommt jeden Sonntag\nHobbys: Krimis lesen, Kreuzworträtsel, klassische Musik im Radio, früher Klavier\nGewohnheiten: liest jeden Morgen die Zeitung, Mittagsruhe 13 bis 14 Uhr, geht früh ins Bett (ca. 20 Uhr)\nAnrede: möchte gesiezt und mit „Frau Martens“ angesprochen werden\nAchtung: spricht nicht gern über die Flucht"
       },
       "sorte": "aufsatz",
       "an": "Pflegedokumentation",
       "betreff": "Biographiebericht Frau Martens",
       "punkte": [
        {
         "nr": 1,
         "was": "Herkunft und Flucht",
         "hinweis": "Erzählen Sie, wo sie geboren ist, was 1945 passierte und was man dazu wissen muss."
        },
        {
         "nr": 2,
         "was": "Beruf und Familie",
         "hinweis": "Schreiben Sie über ihren Beruf, ihre Familie und die Betreuung."
        },
        {
         "nr": 3,
         "was": "Hobbys und Gewohnheiten",
         "hinweis": "Nennen Sie, womit sie sich beschäftigt und wie ihr Tag aussieht."
        },
        {
         "nr": 4,
         "was": "Anrede",
         "hinweis": "Schreiben Sie, wie sie angesprochen werden möchte."
        }
       ],
       "muster": "Frau Ilse Martens wurde 1934 in Königsberg geboren. 1945 floh sie mit ihrer Mutter nach Hamburg. Über die Flucht spricht Frau Martens nicht gern.\nNach dem Studium in Kiel arbeitete sie 35 Jahre lang als Lehrerin an einer Grundschule in Hamburg. Frau Martens war nie verheiratet und hat keine Kinder. Ihre Nichte, die Tochter ihrer Schwester, ist ihre gesetzliche Betreuerin und besucht sie jeden Sonntag.\nIn ihrer Freizeit liest Frau Martens gern Krimis und löst Kreuzworträtsel. Außerdem hört sie gern klassische Musik im Radio. Früher spielte sie selbst Klavier. Jeden Morgen liest sie die Zeitung. Von 13 bis 14 Uhr hält sie Mittagsruhe, und abends geht sie früh ins Bett, meistens gegen 20 Uhr.\nFür Frau Martens ist die richtige Anrede wichtig. Sie möchte von allen gesiezt und mit „Frau Martens“ angesprochen werden.",
       "hilfen": [
        "Frau … wurde … in … geboren.",
        "1945 floh sie mit …",
        "Über … spricht sie nicht gern.",
        "Sie arbeitete … Jahre lang als …",
        "Ihre Nichte ist ihre gesetzliche Betreuerin.",
        "Sie möchte gesiezt und mit … angesprochen werden."
       ],
       "erklaerung": "Der Hinweis zur Flucht wird genannt, aber nicht ausgeschmückt. Wie es damals war, steht nicht im Bogen und gehört deshalb nicht in den Bericht.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle Angaben aus dem Bogen im Bericht, klar und richtig? Nichts dazuerfunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "alle Angaben klar"
          },
          {
           "w": 4,
           "t": "B",
           "d": "eine fehlt oder unklar"
          },
          {
           "w": 3,
           "t": "C",
           "d": "zwei fehlen"
          },
          {
           "w": 2,
           "t": "D",
           "d": "drei fehlen"
          },
          {
           "w": 1,
           "t": "E",
           "d": "vier fehlen"
          },
          {
           "w": 0,
           "t": "F",
           "d": "mehr fehlen"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Ein zusammenhängender, sachlicher Bericht in ganzen Sätzen, gut verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Fachwörter aus der Pflege, nicht immer dieselben Verben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B2, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "F",
           "d": "darunter"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 140,
       "platzhalter": "Schreib hier deinen Bericht …",
       "punkteText": "Diese Angaben aus dem Bogen müssen in den Bericht",
       "rubrikTitel": "Bewerte deinen Bericht wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je bis 5 Punkte, zusammen 20: B1 ab 7, B2 ab 15. Bei I gibt es 5 Punkte, wenn alle Angaben klar drin sind, für jede fehlende einen weniger. Die Stufen bei II bis IV sind eine Übungsschätzung."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tpfsl1",
   "titel": "Prüfungslauf 1",
   "minuten": 30,
   "aufgaben": [
    {
     "id": "tpa9",
     "situation": "Sie arbeiten im Haus Sonnenhang. Frau Ursula Neumann ist heute eingezogen. Schreiben Sie mit Hilfe des Anamnesebogens den Aufnahmebericht für die Pflegedokumentation.",
     "eingang": {
      "von": "Anamnesebogen",
      "betreff": "Ursula Neumann, 87 Jahre, Haus Sonnenhang",
      "text": "Einzug: 25.11., vorher allein in ihrer Wohnung\nAnlass: mehrere Stürze zu Hause, Versorgung allein nicht mehr möglich\nDiagnosen: Herzinsuffizienz, Arthrose in beiden Knien, Dekubitus Kategorie 2 am Steiß\nMobilität: ☐ Rollator ☒ Rollstuhl ☐ bettlägerig, Transfer mit Hilfe einer Person\nHaut: Wundversorgung nach ärztlicher Anordnung, Wechseldruckmatratze bestellt\nErnährung: wenig Appetit, 52 kg bei 1,65 m, lieber kleine Portionen\nKommunikation: orientiert, Brille\nHilfebedarf: volle Unterstützung bei der Körperpflege, nachts Positionswechsel alle 3 Std."
     },
     "sorte": "aufsatz",
     "an": "Pflegedokumentation",
     "betreff": "Aufnahmebericht Frau Neumann",
     "punkte": [
      {
       "nr": 1,
       "was": "Anlass und Diagnosen",
       "hinweis": "Schreiben Sie, woher Frau Neumann kommt, warum sie eingezogen ist und welche Diagnosen bekannt sind."
      },
      {
       "nr": 2,
       "was": "Mobilität und Haut",
       "hinweis": "Beschreiben Sie Rollstuhl, Transfer und die Versorgung der Wunde."
      },
      {
       "nr": 3,
       "was": "Ernährung",
       "hinweis": "Nennen Sie Appetit, Gewicht, Größe und ihre Vorliebe beim Essen."
      },
      {
       "nr": 4,
       "was": "Kommunikation und Hilfebedarf",
       "hinweis": "Schreiben Sie auch, was nachts gemacht wird."
      }
     ],
     "muster": "Frau Ursula Neumann, 87 Jahre alt, ist am 25.11. ins Haus Sonnenhang eingezogen. Vorher lebte sie allein in ihrer Wohnung. Dort ist sie mehrmals gestürzt und konnte sich nicht mehr allein versorgen. Bei Frau Neumann sind eine Herzinsuffizienz, eine Arthrose in beiden Knien und ein Dekubitus der Kategorie 2 am Steiß bekannt.\nFrau Neumann sitzt im Rollstuhl, bettlägerig ist sie nicht. Beim Transfer braucht sie die Hilfe einer Pflegekraft. Die Wunde am Steiß wird nach ärztlicher Anordnung versorgt. Eine Wechseldruckmatratze ist bereits bestellt.\nSie hat wenig Appetit und wiegt bei einer Größe von 1,65 m nur 52 kg. Kleine Portionen sind ihr lieber.\nFrau Neumann ist orientiert und trägt eine Brille. Bei der Körperpflege braucht sie volle Unterstützung. Nachts wird ihre Position alle drei Stunden gewechselt.",
     "hilfen": [
      "Vorher lebte sie allein in …",
      "Dort ist sie mehrmals gestürzt und konnte sich …",
      "Bei Frau … sind … bekannt.",
      "Die Wunde am Steiß wird nach ärztlicher Anordnung versorgt.",
      "Sie wiegt bei einer Größe von … nur …",
      "Nachts wird ihre Position alle … Stunden gewechselt."
     ],
     "erklaerung": "Ein Dekubitus wird immer mit Kategorie und Stelle genannt. Das Muster übernimmt auch die Maßnahmen aus dem Bogen, erfindet aber keine neuen dazu.",
     "rubrik": [
      {
       "t": "I Aufgabenbewältigung",
       "h": "Sind alle Angaben aus dem Bogen im Bericht, klar und richtig? Nichts dazuerfunden?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "alle Angaben klar"
        },
        {
         "w": 4,
         "t": "B",
         "d": "eine fehlt oder unklar"
        },
        {
         "w": 3,
         "t": "C",
         "d": "zwei fehlen"
        },
        {
         "w": 2,
         "t": "D",
         "d": "drei fehlen"
        },
        {
         "w": 1,
         "t": "E",
         "d": "vier fehlen"
        },
        {
         "w": 0,
         "t": "F",
         "d": "mehr fehlen"
        }
       ]
      },
      {
       "t": "II Kommunikative Gestaltung",
       "h": "Ein zusammenhängender, sachlicher Bericht in ganzen Sätzen, gut verbunden?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "B2, gut erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "B1, gut erfüllt"
        },
        {
         "w": 2,
         "t": "D",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "E",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "F",
         "d": "darunter"
        }
       ]
      },
      {
       "t": "III Korrektheit",
       "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "B2, gut erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "B1, gut erfüllt"
        },
        {
         "w": 2,
         "t": "D",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "E",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "F",
         "d": "darunter"
        }
       ]
      },
      {
       "t": "IV Wortschatz",
       "h": "Passende Fachwörter aus der Pflege, nicht immer dieselben Verben?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "B2, gut erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "B1, gut erfüllt"
        },
        {
         "w": 2,
         "t": "D",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "E",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "F",
         "d": "darunter"
        }
       ]
      }
     ],
     "max": 20,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 140,
     "platzhalter": "Schreib hier deinen Bericht …",
     "punkteText": "Diese Angaben aus dem Bogen müssen in den Bericht",
     "rubrikTitel": "Bewerte deinen Bericht wie die telc-Prüfer",
     "rubrikHinweis": "Vier Kriterien, je bis 5 Punkte, zusammen 20: B1 ab 7, B2 ab 15. Bei I gibt es 5 Punkte, wenn alle Angaben klar drin sind, für jede fehlende einen weniger. Die Stufen bei II bis IV sind eine Übungsschätzung."
    }
   ]
  },
  {
   "id": "tpfsl2",
   "titel": "Prüfungslauf 2",
   "minuten": 30,
   "aufgaben": [
    {
     "id": "tpa12",
     "situation": "Sie arbeiten im Haus Sonnenhang. Frau Danuta Kowalska ist neu bei Ihnen. Ihr Sohn hat den Biographiebogen mit ihr ausgefüllt. Schreiben Sie den Biographiebericht für die Pflegedokumentation.",
     "eingang": {
      "von": "Biographiebogen",
      "betreff": "Danuta Kowalska, 81 Jahre, Haus Sonnenhang",
      "text": "Geboren: 1945 in Krakau, Polen\nBeruf: Krankenschwester in einer Kinderklinik in Krakau, 1990 nach Deutschland, bis zur Rente in einem Altenheim in Essen\nFamilie: geschieden, ein Sohn in Essen (besucht sie am Wochenende), zwei Enkel in Polen\nSprachen: Polnisch, gutes Deutsch, spricht Polnisch, wenn sie müde ist\nGlaube: katholisch, betet den Rosenkranz, sonntags Messe im Fernsehen\nHobbys: Kochen (Piroggen), Handarbeiten (Häkeln), früher Kirchenchor\nGewohnheiten: nachmittags Tee mit Zitrone, abends polnisches Fernsehen\nWunsch: möchte bei der Pflege mitmachen und gefragt werden, wäscht Gesicht und Oberkörper selbst"
     },
     "sorte": "aufsatz",
     "an": "Pflegedokumentation",
     "betreff": "Biographiebericht Frau Kowalska",
     "punkte": [
      {
       "nr": 1,
       "was": "Herkunft und Beruf",
       "hinweis": "Erzählen Sie, woher sie kommt und wo sie gearbeitet hat."
      },
      {
       "nr": 2,
       "was": "Familie und Sprachen",
       "hinweis": "Schreiben Sie über den Sohn und darüber, wann sie welche Sprache spricht."
      },
      {
       "nr": 3,
       "was": "Glaube, Hobbys und Gewohnheiten",
       "hinweis": "Trennen Sie, was heute gilt und was früher war."
      },
      {
       "nr": 4,
       "was": "Wunsch für die Pflege",
       "hinweis": "Schreiben Sie, wie sie gepflegt werden möchte und was sie selbst macht."
      }
     ],
     "muster": "Frau Danuta Kowalska wurde 1945 in Krakau in Polen geboren. In Krakau arbeitete sie als Krankenschwester in einer Kinderklinik. 1990 kam sie nach Deutschland und war bis zur Rente in einem Altenheim in Essen tätig.\nFrau Kowalska ist geschieden. Ihr Sohn lebt in Essen und besucht sie am Wochenende. Zwei Enkel leben in Polen. Sie spricht Polnisch und gut Deutsch. Wenn sie müde ist, spricht sie allerdings Polnisch.\nFrau Kowalska ist katholisch und betet den Rosenkranz. Sonntags möchte sie die Messe im Fernsehen sehen. Sie kocht gern, besonders Piroggen, und macht gern Handarbeiten, vor allem Häkeln. Früher sang sie im Kirchenchor. Nachmittags trinkt sie gern Tee mit Zitrone, abends sieht sie polnisches Fernsehen.\nSie möchte bei der Pflege mitmachen und dabei gefragt werden. Gesicht und Oberkörper wäscht sie selbst.",
     "hilfen": [
      "Sie arbeitete als …",
      "… kam sie nach Deutschland und war bis zur Rente …",
      "Ihr Sohn lebt in … und besucht sie …",
      "Wenn sie müde ist, spricht sie allerdings …",
      "Früher sang sie im …",
      "Sie möchte bei der Pflege mitmachen und dabei gefragt werden."
     ],
     "erklaerung": "Der Satz über die Sprache bei Müdigkeit ist für den Pflegealltag wichtig und darf nicht fehlen. Der Kirchenchor gehört mit „früher“ in die Vergangenheit.",
     "rubrik": [
      {
       "t": "I Aufgabenbewältigung",
       "h": "Sind alle Angaben aus dem Bogen im Bericht, klar und richtig? Nichts dazuerfunden?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "alle Angaben klar"
        },
        {
         "w": 4,
         "t": "B",
         "d": "eine fehlt oder unklar"
        },
        {
         "w": 3,
         "t": "C",
         "d": "zwei fehlen"
        },
        {
         "w": 2,
         "t": "D",
         "d": "drei fehlen"
        },
        {
         "w": 1,
         "t": "E",
         "d": "vier fehlen"
        },
        {
         "w": 0,
         "t": "F",
         "d": "mehr fehlen"
        }
       ]
      },
      {
       "t": "II Kommunikative Gestaltung",
       "h": "Ein zusammenhängender, sachlicher Bericht in ganzen Sätzen, gut verbunden?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "B2, gut erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "B1, gut erfüllt"
        },
        {
         "w": 2,
         "t": "D",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "E",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "F",
         "d": "darunter"
        }
       ]
      },
      {
       "t": "III Korrektheit",
       "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "B2, gut erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "B1, gut erfüllt"
        },
        {
         "w": 2,
         "t": "D",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "E",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "F",
         "d": "darunter"
        }
       ]
      },
      {
       "t": "IV Wortschatz",
       "h": "Passende Fachwörter aus der Pflege, nicht immer dieselben Verben?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "B2, gut erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "B1, gut erfüllt"
        },
        {
         "w": 2,
         "t": "D",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "E",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "F",
         "d": "darunter"
        }
       ]
      }
     ],
     "max": 20,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 140,
     "platzhalter": "Schreib hier deinen Bericht …",
     "punkteText": "Diese Angaben aus dem Bogen müssen in den Bericht",
     "rubrikTitel": "Bewerte deinen Bericht wie die telc-Prüfer",
     "rubrikHinweis": "Vier Kriterien, je bis 5 Punkte, zusammen 20: B1 ab 7, B2 ab 15. Bei I gibt es 5 Punkte, wenn alle Angaben klar drin sind, für jede fehlende einen weniger. Die Stufen bei II bis IV sind eine Übungsschätzung."
    }
   ]
  }
 ]
};
