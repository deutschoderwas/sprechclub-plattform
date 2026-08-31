# -*- coding: utf-8 -*-
"""Haengt vier weitere A1-Themen an bau/a1-wortschatz.json an."""
import json

P = 'bau/a1-wortschatz.json'
d = json.load(open(P, encoding='utf-8'))
vorhanden = {t['id'] for t in d['themen']}

NEU = [
 {
  "id": "a1-beruf",
  "titel": "Arbeit & Beruf",
  "emoji": "💼",
  "woerter": [
   {"de": "die Arbeit", "info": "das, wofür man Geld bekommt", "emoji": "💼"},
   {"de": "der Beruf", "info": "das, was man gelernt hat und macht", "emoji": "🧑‍🔧"},
   {"de": "das Büro", "info": "der Raum, in dem man am Schreibtisch arbeitet", "emoji": "🏢"},
   {"de": "die Kollegin", "info": "die Frau, mit der man zusammenarbeitet", "emoji": "👩‍💼"},
   {"de": "der Chef", "info": "er sagt, was zu tun ist", "emoji": "🧑‍💼"},
   {"de": "die Pause", "info": "die kurze Zeit ohne Arbeit", "emoji": "☕"},
   {"de": "der Lohn", "info": "das Geld für die Arbeit", "emoji": "💶"},
   {"de": "der Urlaub", "info": "die freien Tage im Jahr", "emoji": "🏝️"},
   {"de": "die Schicht", "info": "die feste Arbeitszeit, zum Beispiel nachts", "emoji": "🕗"},
   {"de": "die Bewerbung", "info": "die Unterlagen, mit denen man eine Stelle sucht", "emoji": "📄"},
   {"de": "die Stelle", "info": "der Arbeitsplatz, den man sucht oder hat", "emoji": "📌"},
   {"de": "arbeiten", "info": "etwas tun, wofür man Geld bekommt", "emoji": "🛠️"},
   {"de": "verdienen", "info": "Geld für die Arbeit bekommen", "emoji": "💰"},
   {"de": "anfangen", "info": "mit etwas beginnen", "emoji": "▶️"},
   {"de": "aufhören", "info": "mit etwas Schluss machen", "emoji": "⏹️"},
   {"de": "der Feierabend", "info": "das Ende der Arbeitszeit", "emoji": "🌆"}
  ],
  "saetze": [
   {"satz": "Ich arbeite in einem Büro", "hinweis": "Erst wer, dann das Verb.", "erklaerung": "in plus Dativ: in einem Büro."},
   {"satz": "Meine Schicht fängt um sechs Uhr an", "hinweis": "Trennbares Verb: Der zweite Teil geht ans Ende.", "erklaerung": "anfangen ist trennbar: fängt … an."},
   {"satz": "Ich mache jetzt eine kurze Pause", "hinweis": "Die Zeitangabe steht vor dem Objekt.", "erklaerung": "eine Pause machen — feste Verbindung."},
   {"satz": "Nächste Woche habe ich Urlaub", "hinweis": "Nach der Zeitangabe kommt das Verb.", "erklaerung": "Steht die Zeitangabe vorn, folgt sofort das Verb: habe ich."},
   {"satz": "Ich schicke morgen meine Bewerbung ab", "hinweis": "Trennbares Verb: Der zweite Teil geht ans Ende.", "erklaerung": "abschicken ist trennbar: schicke … ab."}
  ],
  "fehler": [
   {"satz": "Ich arbeite in ein Büro.", "falsch": "ein", "richtig": "Ich arbeite in einem Büro.", "erklaerung": "Auf die Frage wo? steht nach in der Dativ: in einem Büro."},
   {"satz": "Meine Schicht anfängt um sechs Uhr.", "falsch": "anfängt", "richtig": "Meine Schicht fängt um sechs Uhr an.", "erklaerung": "Bei trennbaren Verben bleibt nur der Verbteil auf Platz zwei, das Präfix geht ans Ende."},
   {"satz": "Ich habe nächste Woche frei, ich fahre zu Urlaub.", "falsch": "zu", "richtig": "Ich habe nächste Woche frei, ich fahre in Urlaub.", "erklaerung": "Es heißt in Urlaub fahren, nicht zu Urlaub."}
  ],
  "schreiben": [
   {"auftrag": "Stell dich in drei Sätzen vor: Name, Beruf, wo du arbeitest.", "muster": "Ich heiße Fatima und komme aus Marokko. Von Beruf bin ich Krankenschwester. Seit zwei Jahren arbeite ich in einem Krankenhaus in Bremen.", "tipp": "Von Beruf bin ich … — hier steht kein Artikel vor dem Beruf."},
   {"auftrag": "Schreib deiner Kollegin, dass du heute später kommst. Zwei bis drei Sätze.", "muster": "Hallo Sarah, mein Bus hat Verspätung, ich komme heute ungefähr zwanzig Minuten später. Kannst du bitte kurz Bescheid sagen, wenn der Chef fragt? Danke dir!", "tipp": "Grund, neue Zeit, Bitte — mehr braucht eine kurze Nachricht nicht."}
  ]
 },
 {
  "id": "a1-freizeit",
  "titel": "Freizeit & Hobbys",
  "emoji": "⚽",
  "woerter": [
   {"de": "die Freizeit", "info": "die Zeit, in der man nicht arbeitet", "emoji": "🛋️"},
   {"de": "das Hobby", "info": "das, was man gern in der Freizeit macht", "emoji": "🎨"},
   {"de": "der Sport", "info": "Bewegung, zum Beispiel Laufen oder Fußball", "emoji": "🏃"},
   {"de": "die Musik", "info": "Töne, die man hört oder selbst macht", "emoji": "🎵"},
   {"de": "das Buch", "info": "man liest es, es hat viele Seiten", "emoji": "📚"},
   {"de": "der Film", "info": "man sieht ihn im Kino oder zu Hause", "emoji": "🎬"},
   {"de": "das Spiel", "info": "man spielt es allein oder mit anderen", "emoji": "🎲"},
   {"de": "der Freund", "info": "ein Mensch, den man gern hat und oft trifft", "emoji": "🧑‍🤝‍🧑"},
   {"de": "das Café", "info": "dort trinkt man Kaffee und sitzt zusammen", "emoji": "☕"},
   {"de": "der Park", "info": "eine grüne Fläche in der Stadt", "emoji": "🌳"},
   {"de": "das Wochenende", "info": "Samstag und Sonntag", "emoji": "📆"},
   {"de": "spielen", "info": "ein Spiel oder ein Instrument machen", "emoji": "🎮"},
   {"de": "lesen", "info": "Buchstaben ansehen und verstehen", "emoji": "👓"},
   {"de": "treffen", "info": "mit jemandem zusammenkommen", "emoji": "🤝"},
   {"de": "schwimmen", "info": "sich im Wasser bewegen", "emoji": "🏊"},
   {"de": "spazieren gehen", "info": "langsam gehen, ohne Ziel", "emoji": "🚶"}
  ],
  "saetze": [
   {"satz": "Am Wochenende treffe ich meine Freunde", "hinweis": "Nach der Zeitangabe kommt das Verb.", "erklaerung": "Steht die Zeitangabe vorn, folgt sofort das Verb: treffe ich."},
   {"satz": "In meiner Freizeit höre ich gern Musik", "hinweis": "Nach der Angabe kommt das Verb.", "erklaerung": "gern steht nach dem Verb: höre ich gern."},
   {"satz": "Wir gehen heute Abend ins Kino", "hinweis": "Erst wer, dann das Verb, dann wann und wohin.", "erklaerung": "in plus das wird ins: ins Kino."},
   {"satz": "Meine Tochter spielt sehr gut Klavier", "hinweis": "Erst das Subjekt, dann das Verb.", "erklaerung": "Bei Instrumenten steht kein Artikel: Klavier spielen."},
   {"satz": "Am Sonntag gehe ich immer im Park spazieren", "hinweis": "Der zweite Verbteil geht ans Ende.", "erklaerung": "spazieren gehen — spazieren steht am Ende."}
  ],
  "fehler": [
   {"satz": "Am Wochenende ich treffe meine Freunde.", "falsch": "ich", "richtig": "Am Wochenende treffe ich meine Freunde.", "erklaerung": "Steht die Zeitangabe vorn, kommt sofort das Verb, erst danach das Subjekt."},
   {"satz": "Wir gehen heute Abend in das Kino.", "falsch": "das", "richtig": "Wir gehen heute Abend ins Kino.", "erklaerung": "in plus das zieht man zu ins zusammen."},
   {"satz": "Meine Tochter spielt das Klavier sehr gut.", "falsch": "das", "richtig": "Meine Tochter spielt sehr gut Klavier.", "erklaerung": "Bei Instrumenten steht im Deutschen kein Artikel: Klavier spielen, Gitarre spielen."}
  ],
  "schreiben": [
   {"auftrag": "Was machst du am Wochenende gern? Schreib drei bis vier Sätze.", "muster": "Am Samstag schlafe ich zuerst lange. Danach treffe ich meine Freunde im Café oder wir gehen im Park spazieren. Am Sonntag lese ich gern ein Buch oder sehe einen Film. Sport mache ich leider zu selten.", "tipp": "gern steht direkt nach dem Verb: Ich lese gern, ich koche gern."},
   {"auftrag": "Lade eine Freundin für Samstag ins Kino ein. Zwei bis drei Sätze.", "muster": "Hallo Nina, hast du am Samstagabend Zeit? Ich möchte gern ins Kino gehen, um acht läuft ein neuer Film. Sag mir bis Freitag Bescheid, dann kaufe ich die Karten.", "tipp": "Eine Einladung beginnt oft mit einer Frage: Hast du Zeit? Hast du Lust?"}
  ]
 },
 {
  "id": "a1-stadt",
  "titel": "Stadt & Orte",
  "emoji": "🏙️",
  "woerter": [
   {"de": "die Stadt", "info": "ein großer Ort mit vielen Häusern und Menschen", "emoji": "🏙️"},
   {"de": "das Dorf", "info": "ein kleiner Ort mit wenigen Häusern", "emoji": "🏡"},
   {"de": "die Bäckerei", "info": "dort kauft man Brot und Brötchen", "emoji": "🥖"},
   {"de": "der Supermarkt", "info": "dort kauft man Lebensmittel", "emoji": "🛒"},
   {"de": "die Post", "info": "dort gibt man Briefe und Pakete ab", "emoji": "📮"},
   {"de": "die Bank", "info": "dort holt man Geld", "emoji": "🏦"},
   {"de": "das Krankenhaus", "info": "dort liegt man, wenn man sehr krank ist", "emoji": "🏥"},
   {"de": "die Schule", "info": "dort lernen die Kinder", "emoji": "🏫"},
   {"de": "das Rathaus", "info": "dort ist die Verwaltung der Stadt", "emoji": "🏛️"},
   {"de": "die Kirche", "info": "dort beten Menschen, sie hat oft einen Turm", "emoji": "⛪"},
   {"de": "der Markt", "info": "dort verkaufen viele Stände Obst und Gemüse", "emoji": "🍎"},
   {"de": "das Restaurant", "info": "dort isst man und bezahlt dafür", "emoji": "🍽️"},
   {"de": "die Adresse", "info": "Straße, Nummer und Ort, wo jemand wohnt", "emoji": "🏷️"},
   {"de": "der Platz", "info": "eine offene Fläche mitten in der Stadt", "emoji": "⛲"},
   {"de": "in der Nähe", "info": "nicht weit weg", "emoji": "📍"},
   {"de": "weit", "info": "eine große Entfernung", "emoji": "🛣️"}
  ],
  "saetze": [
   {"satz": "Die Bäckerei ist gleich um die Ecke", "hinweis": "Erst das Subjekt, dann das Verb.", "erklaerung": "um die Ecke sein — eine feste Wendung für ganz nah."},
   {"satz": "Ich gehe schnell zur Post", "hinweis": "Erst wer, dann das Verb.", "erklaerung": "zu plus der wird zur: zur Post."},
   {"satz": "Wohnt hier in der Nähe eine Apotheke", "hinweis": "Bei einer Frage steht das Verb zuerst.", "erklaerung": "Bei Gebäuden sagt man eher: Gibt es hier eine Apotheke?"},
   {"satz": "Der Markt ist nur am Samstag", "hinweis": "Erst das Subjekt, dann das Verb.", "erklaerung": "am Samstag — bei Wochentagen steht immer an plus dem."},
   {"satz": "Meine Adresse ist Lindenstraße zwölf", "hinweis": "Erst das Subjekt, dann das Verb.", "erklaerung": "Bei der Adresse kommt die Hausnummer nach dem Straßennamen."}
  ],
  "fehler": [
   {"satz": "Ich gehe schnell zu der Post.", "falsch": "der", "richtig": "Ich gehe schnell zur Post.", "erklaerung": "zu plus der zieht man zu zur zusammen."},
   {"satz": "Der Markt ist nur an Samstag.", "falsch": "an", "richtig": "Der Markt ist nur am Samstag.", "erklaerung": "an plus dem wird am. Bei Wochentagen immer: am Montag, am Samstag."},
   {"satz": "Gibt es hier in die Nähe eine Apotheke?", "falsch": "die", "richtig": "Gibt es hier in der Nähe eine Apotheke?", "erklaerung": "in der Nähe ist eine feste Wendung im Dativ."}
  ],
  "schreiben": [
   {"auftrag": "Beschreib in drei bis vier Sätzen, was es in deiner Straße oder deinem Viertel gibt.", "muster": "Bei mir im Viertel gibt es fast alles. Gleich um die Ecke sind eine Bäckerei und ein kleiner Supermarkt. Die Post ist etwas weiter, ungefähr zehn Minuten zu Fuß. Ein Restaurant fehlt leider.", "tipp": "Es gibt steht immer mit dem Akkusativ: Es gibt einen Supermarkt."},
   {"auftrag": "Jemand fragt, ob es bei dir in der Nähe eine Apotheke gibt. Antworte in zwei bis drei Sätzen.", "muster": "Ja, in der Nähe gibt es eine Apotheke. Sie ist am Marktplatz, direkt neben der Bank. Von hier sind es ungefähr fünf Minuten zu Fuß.", "tipp": "Für Orte: neben der Bank, am Platz, gegenüber der Schule."}
  ]
 },
 {
  "id": "a1-zahlen",
  "titel": "Zahlen & Mengen",
  "emoji": "🔢",
  "woerter": [
   {"de": "die Zahl", "info": "zum Beispiel eins, zwei oder hundert", "emoji": "🔢"},
   {"de": "die Nummer", "info": "eine Zahl, die zu etwas gehört, zum Beispiel beim Telefon", "emoji": "☎️"},
   {"de": "das Kilo", "info": "tausend Gramm, ein Maß fürs Gewicht", "emoji": "⚖️"},
   {"de": "das Gramm", "info": "ein kleines Maß fürs Gewicht", "emoji": "🥄"},
   {"de": "der Liter", "info": "ein Maß für Flüssigkeit, zum Beispiel Milch", "emoji": "🥛"},
   {"de": "das Stück", "info": "ein einzelnes Ding aus einer Menge", "emoji": "🍰"},
   {"de": "die Flasche", "info": "darin ist Wasser oder Saft", "emoji": "🍾"},
   {"de": "die Packung", "info": "darin sind mehrere Stücke zusammen", "emoji": "📦"},
   {"de": "der Euro", "info": "das Geld in Deutschland", "emoji": "💶"},
   {"de": "der Cent", "info": "der hundertste Teil von einem Euro", "emoji": "🪙"},
   {"de": "viel", "info": "eine große Menge", "emoji": "📈"},
   {"de": "wenig", "info": "eine kleine Menge", "emoji": "📉"},
   {"de": "genug", "info": "so viel, wie man braucht", "emoji": "👌"},
   {"de": "alle", "info": "jeder oder jedes von einer Gruppe", "emoji": "💯"},
   {"de": "zusammen", "info": "alles auf einmal, nicht getrennt", "emoji": "🧮"},
   {"de": "kosten", "info": "einen Preis haben", "emoji": "🏷️"}
  ],
  "saetze": [
   {"satz": "Ein Kilo Tomaten kostet drei Euro", "hinweis": "Erst das Subjekt, dann das Verb.", "erklaerung": "Nach Mengen steht kein von: ein Kilo Tomaten."},
   {"satz": "Ich hätte gern zwei Flaschen Wasser", "hinweis": "Ich hätte gern steht am Anfang.", "erklaerung": "Ich hätte gern ist die höfliche Bestellung."},
   {"satz": "Das macht zusammen zwölf Euro fünfzig", "hinweis": "Erst das Subjekt, dann das Verb.", "erklaerung": "Das macht … — so nennt die Kassiererin den Gesamtpreis."},
   {"satz": "Wie viel kostet eine Packung Kaffee", "hinweis": "Die Frage beginnt mit dem Fragewort.", "erklaerung": "Wie viel fragt nach dem Preis oder der Menge."},
   {"satz": "Ich habe heute leider wenig Zeit", "hinweis": "Die Zeitangabe steht vor dem Objekt.", "erklaerung": "wenig und viel stehen ohne Artikel: wenig Zeit, viel Arbeit."}
  ],
  "fehler": [
   {"satz": "Ein Kilo von Tomaten kostet drei Euro.", "falsch": "von", "richtig": "Ein Kilo Tomaten kostet drei Euro.", "erklaerung": "Nach einer Mengenangabe folgt das Nomen direkt, ohne von."},
   {"satz": "Ich hätte gern zwei Flasche Wasser.", "falsch": "Flasche", "richtig": "Ich hätte gern zwei Flaschen Wasser.", "erklaerung": "Nach einer Zahl über eins steht der Plural: zwei Flaschen."},
   {"satz": "Ich habe heute leider wenig die Zeit.", "falsch": "die", "richtig": "Ich habe heute leider wenig Zeit.", "erklaerung": "Nach viel und wenig steht kein Artikel."}
  ],
  "schreiben": [
   {"auftrag": "Schreib einen Einkaufszettel als Satz: Was brauchst du und wie viel? Zwei bis drei Sätze.", "muster": "Ich brauche noch ein Kilo Kartoffeln und zwei Flaschen Milch. Außerdem eine Packung Kaffee und sechs Eier. Brot habe ich noch genug zu Hause.", "tipp": "Mengen stehen direkt vor dem Nomen: ein Kilo Kartoffeln, zwei Flaschen Milch."},
   {"auftrag": "Du bezahlst an der Kasse. Schreib das kurze Gespräch in drei Sätzen.", "muster": "Das macht zusammen achtzehn Euro vierzig. Kann ich mit Karte bezahlen? Ja natürlich, brauchen Sie den Kassenzettel?", "tipp": "Das macht … ist der feste Satz für den Gesamtpreis."}
  ]
 }
]

zu = [t for t in NEU if t['id'] not in vorhanden]
d['themen'].extend(zu)
json.dump(d, open(P, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('ergaenzt:', ', '.join(t['id'] for t in zu) if zu else 'nichts (schon vorhanden)')
print('Themen gesamt in der Quelle:', len(d['themen']))
