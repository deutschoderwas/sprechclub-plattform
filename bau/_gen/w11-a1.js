'use strict';
const fs = require('fs');
const S = {
  datei: 'Unterricht-ab-14-09/w11-a-teil1-bank-konto-a2b1.html',
  eyebrow: 'deutschoderwas · Sprechclub · Woche 11 · Strang A · Teil 1 · Montag, 23. November',
  titel: 'Bank und Konto:',
  hl: 'überweisen, abheben, unterschreiben',
  stufe: 'A2/B1',
  termin: 'Mo 23.11. 9:00 · Strang A · Teil 1 · A2 ⇄ B1',
  untertitel: 'Ohne Konto geht in Deutschland fast nichts: kein Gehalt, keine Miete, kein Handyvertrag. Und in der Bank fallen Wörter, die man sonst nie hört — <i>Dauerauftrag</i>, <i>Lastschrift</i>, <i>Kontoauszug</i>. Heute sprichst du sie einmal alle laut aus, damit sie beim nächsten Termin nicht mehr fremd sind.',
  fuss: 'Bank und Konto · Teil 1 · A2/B1 · Woche 11 · am Mittwoch: bezahlen, Rechnung teilen, sparen',
  niveau: { a: 'A2 · einfacher', b: 'B1 · mehr', hinweis: 'Gleiches Thema, andere Sätze. Wechsle jederzeit — probier ruhig beide Seiten aus.' },

  einstieg: [
    {
      h2: 'Das Konto ist',
      hl: 'der Anfang von allem',
      ssub: 'Die Miete geht vom Konto ab, das Gehalt kommt darauf, der Handyvertrag bucht monatlich ab. Wer das Konto versteht, versteht die halbe deutsche Verwaltung. Und die Wörter dafür sind gar nicht so viele.',
      bild: 'amanda/sz-bank.webp',
      alt: 'Ein Schalter in einer Bank, dahinter eine Mitarbeiterin',
      fragenA2: [
        'Hast du ein Konto in Deutschland?',
        'Bezahlst du lieber mit Karte oder bar?',
        'Wo hebst du Geld ab?'
      ],
      fragenB1: [
        'Was war beim Konto eröffnen am schwierigsten?',
        'Welches Wort aus der Bank verstehst du bis heute nicht?',
        'Wie ist das in deinem Land geregelt?'
      ],
      tipp: { art: 'teal', text: '🔑 <strong>Drei Wörter, drei Richtungen:</strong> <b>einzahlen</b> — Geld kommt aufs Konto. <b>abheben</b> — Geld kommt vom Konto. <b>überweisen</b> — Geld geht von deinem Konto auf ein anderes.' }
    },
    {
      h2: 'Und warum',
      hl: 'geht das Geld von allein weg?',
      ssub: 'Weil du es einmal erlaubt hast. Beim <b>Dauerauftrag</b> schickst du selbst jeden Monat denselben Betrag. Bei der <b>Lastschrift</b> holt sich die Firma das Geld — mit deiner Erlaubnis. Der Unterschied klingt klein und ist im Streitfall groß.',
      bild: 'vok-bild/die-rechnung.webp',
      alt: 'Eine Rechnung liegt auf einem Tisch',
      fragenA2: [
        'Was wird bei dir jeden Monat abgebucht?',
        'Schaust du auf deine Kontoauszüge?',
        'Wie viel kostet dein Konto?'
      ],
      fragenB1: [
        'Wann ist ein Dauerauftrag besser als eine Lastschrift?',
        'Was machst du, wenn eine Abbuchung falsch ist?',
        'Woran merkst du, dass ein Konto zu teuer ist?'
      ],
      tipp: { art: 'yellow', text: '💡 <strong>Gut zu wissen:</strong> Eine falsche Lastschrift kannst du acht Wochen lang zurückholen — ein Anruf bei der Bank genügt. Der Satz dafür lautet: <b>Ich möchte diese Lastschrift zurückbuchen lassen.</b>' }
    }
  ],

  wortschatz: {
    h2: 'Zwölf Wörter,',
    hl: 'die in der Bank fallen',
    ssub: 'Sag jedes Wort laut — mit Artikel. Und lies bei jedem den Tipp, dort steht, wann du es brauchst.',
    karten: [
      { bild: 'amanda/sz-bank.webp', alt: 'Ein Bankschalter mit einer Mitarbeiterin', art: 'das', wort: 'Konto', kurz: 'dein Platz bei der Bank, auf dem dein Geld liegt', bsp: 'Ich möchte ein Konto eröffnen.', tipp: 'Ein Konto <b>eröffnet</b> man und später <b>kündigt</b> man es. Das normale Konto heißt <b>Girokonto</b> — davon geht alles ab und darauf kommt das Gehalt.', say: 'Ich möchte ein Konto eröffnen.' },
      { bild: 'amanda/sz-kasse.webp', alt: 'Eine Kasse im Supermarkt, jemand zahlt mit Karte', art: 'die', wort: 'Karte', kurz: 'die Plastikkarte zum Bezahlen und Geldabheben', bsp: 'Kann ich mit Karte zahlen?', tipp: 'Die alltägliche Frage im Laden: <b>Kann ich mit Karte zahlen?</b> Und wenn nicht: <i>Nur bar, tut mir leid.</i> Das hörst du in Deutschland öfter, als du denkst.', say: 'Kann ich mit Karte zahlen?' },
      { bild: 'vok-bild/die-telefonnummer.webp', alt: 'Eine Hand tippt Zahlen ein', art: 'die', wort: 'Geheimzahl', kurz: 'die vier Zahlen für deine Karte', bsp: 'Bitte geben Sie Ihre Geheimzahl ein.', tipp: 'Man sagt auch <b>die PIN</b>. Und der Satz am Automaten lautet immer gleich: <i>Bitte geben Sie Ihre Geheimzahl ein.</i> Sag sie niemandem, auch nicht am Telefon.', say: 'Bitte geben Sie Ihre Geheimzahl ein.' },
      { bild: 'vok-bild/der-euro.webp', alt: 'Euromünzen und Geldscheine', art: 'der', wort: 'Geldautomat', kurz: 'die Maschine, aus der du Geld bekommst', bsp: 'Am Geldautomaten hebe ich immer hundert Euro ab.', tipp: 'Achte auf die Bank: Bei einer fremden Bank kostet Abheben oft Gebühren. Der Satz dazu: <b>Ist der Automat gebührenfrei?</b>', say: 'Am Geldautomaten hebe ich immer hundert Euro ab.' },
      { bild: 'amanda/sz-buchhaltung.webp', alt: 'Zahlen und Belege auf einem Schreibtisch', art: 'die', wort: 'Überweisung', kurz: 'wenn du Geld von deinem Konto zu jemand anderem schickst', bsp: 'Die Überweisung ist gestern rausgegangen.', tipp: 'Das Verb heißt <b>überweisen</b> und es ist untrennbar: <i>Ich <b>überweise</b> dir das Geld.</i> Nicht <i>weise über</i>. Und man braucht dafür nur die <b>IBAN</b>.', say: 'Die Überweisung ist gestern rausgegangen.' },
      { bild: 'vok-bild/der-termin.webp', alt: 'Ein Kalender mit einem festen Termin', art: 'der', wort: 'Dauerauftrag', kurz: 'wenn jeden Monat automatisch derselbe Betrag geht', bsp: 'Die Miete zahle ich per Dauerauftrag.', tipp: 'Du selbst schickst das Geld, immer am selben Tag, immer gleich viel. Perfekt für die <b>Miete</b>. Und du kannst ihn jederzeit ändern oder löschen.', say: 'Die Miete zahle ich per Dauerauftrag.' },
      { bild: 'vok-bild/die-rechnung.webp', alt: 'Eine Rechnung auf einem Tisch', art: 'die', wort: 'Lastschrift', kurz: 'wenn eine Firma sich das Geld selbst holt', bsp: 'Der Strom läuft über Lastschrift.', tipp: 'Hier holt die Firma, du zahlst nicht selbst. Der Vorteil: Du vergisst nie etwas. Und wenn etwas falsch ist, kannst du acht Wochen lang <b>zurückbuchen lassen</b>.', say: 'Der Strom läuft über Lastschrift.' },
      { bild: 'vok-bild/das-protokoll.webp', alt: 'Ein Blatt mit Zahlen und Tabellen', art: 'der', wort: 'Kontoauszug', kurz: 'die Liste mit allem, was auf dem Konto passiert ist', bsp: 'Auf dem Kontoauszug sehe ich jede Abbuchung.', tipp: 'Schau ihn einmal im Monat an. Und für das Amt brauchst du ihn oft: <b>Bringen Sie bitte die Kontoauszüge der letzten drei Monate mit.</b>', say: 'Auf dem Kontoauszug sehe ich jede Abbuchung.' },
      { bild: 'vok-bild/die-gebuehr.webp', alt: 'Münzen liegen neben einem Formular', art: 'die', wort: 'Gebühr', kurz: 'das Geld, das die Bank für ihre Arbeit nimmt', bsp: 'Für das Konto zahle ich fünf Euro Gebühr im Monat.', tipp: 'Frag beim Termin direkt nach: <b>Welche Gebühren fallen an?</b> Es gibt in Deutschland auch Konten ganz ohne Gebühr — man muss nur danach fragen.', say: 'Für das Konto zahle ich fünf Euro Gebühr im Monat.' },
      { bild: 'vok-bild/die-unterschrift.webp', alt: 'Eine Hand unterschreibt ein Dokument', art: 'die', wort: 'Unterschrift', kurz: 'dein Name mit der Hand geschrieben', bsp: 'Hier fehlt noch Ihre Unterschrift.', tipp: 'Das Verb ist <b>unterschreiben</b>, untrennbar: <i>Ich <b>unterschreibe</b> hier unten.</i> Und lies vorher — nach der Unterschrift gilt, was oben steht.', say: 'Hier fehlt noch Ihre Unterschrift.' },
      { bild: 'vok-bild/die-unterlagen.webp', alt: 'Ein Stapel Papiere in einer Mappe', art: 'die', wort: 'Unterlagen', kurz: 'alle Papiere, die du mitbringen musst', bsp: 'Welche Unterlagen brauche ich für das Konto?', tipp: 'Immer Plural. Für ein Konto brauchst du meistens: <b>Ausweis</b>, <b>Meldebescheinigung</b> und manchmal den <b>Arbeitsvertrag</b>. Frag vorher an, das spart einen zweiten Weg.', say: 'Welche Unterlagen brauche ich für das Konto?' },
      { bild: 'vok-bild/die-beratung.webp', alt: 'Ein Beratungsgespräch an einem Schreibtisch', art: 'die', wort: 'Beratung', kurz: 'das Gespräch, in dem dir jemand alles erklärt', bsp: 'Ich hätte gern eine Beratung zum Konto.', tipp: 'Beratung ist in der Bank kostenlos. Und du darfst so lange fragen, bis du es verstanden hast: <b>Können Sie mir das noch einmal einfach erklären?</b>', say: 'Ich hätte gern eine Beratung zum Konto.' }
    ],
    spiel: { text: '💡 <strong>Spiel „Wohin geht das Geld?“:</strong> Einer nennt ein Wort — <i>Dauerauftrag</i>, <i>Lastschrift</i>, <i>Überweisung</i>, <i>abheben</i>. Der andere sagt in einem Satz, in welche Richtung das Geld läuft und wer es schickt.' }
  },

  konzepte: {
    tab: '🔍 Drei Wege',
    zuerst: 'dreier',
    h2: 'Wer schickt das Geld —',
    hl: 'du oder die Firma?',
    ssub: 'Drei Wege, und der Unterschied ist immer derselbe: Wer drückt auf den Knopf?',
    dreier: [
      { emoji: '📤', wort: 'die Überweisung', was: 'du schickst, einmal', bsp: 'Ich <b>überweise</b> dir heute die 50 Euro.' },
      { emoji: '🔁', wort: 'der Dauerauftrag', was: 'du schickst, jeden Monat gleich', bsp: 'Die Miete geht per <b>Dauerauftrag</b> raus, immer am Dritten.' },
      { emoji: '📥', wort: 'die Lastschrift', was: 'die Firma holt sich das Geld', bsp: 'Der Strom wird jeden Monat <b>abgebucht</b>.' }
    ],
    paare: [
      {
        jaLabel: 'So ist es richtig', ja: 'Ich überweise dir das Geld heute noch.',
        jaWarumLabel: 'Warum das stimmt', jaWarum: '<b>überweisen</b> ist untrennbar — die Vorsilbe bleibt vorn: <i>ich überweise</i>, <i>ich habe überwiesen</i>. Und es gibt keinen Zusatz mit <i>ge-</i> im Partizip.',
        noLabel: 'So klingt es falsch', no: 'Ich weise dir das Geld heute über.',
        noWarumLabel: 'Das Problem', noWarum: 'Hier wurde die Vorsilbe abgetrennt, als wäre es <i>abheben</i>. Merk dir die zwei untrennbaren aus der Bank: <b>überweisen</b> und <b>unterschreiben</b>. Alle anderen trennen.'
      },
      {
        jaLabel: 'So ist es richtig', ja: 'Ich hebe am Automaten hundert Euro ab.',
        jaWarumLabel: 'Warum das stimmt', jaWarum: '<b>abheben</b> ist trennbar: <i>ab</i> geht ans Satzende. Im Perfekt: <i>Ich habe hundert Euro <b>abgehoben</b></i> — mit <i>ge</i> in der Mitte.',
        noLabel: 'So klingt es falsch', no: 'Ich abhebe am Automaten hundert Euro.',
        noWarumLabel: 'Das Problem', noWarum: 'Die Vorsilbe muss ans Ende. Ein Test, der immer geht: Sprich das Wort laut. Liegt die Betonung vorn — <b>AB</b>heben, <b>EIN</b>zahlen —, dann trennt es.'
      },
      {
        jaLabel: 'So ist es richtig', ja: 'Die Miete wird jeden Monat automatisch abgebucht.',
        jaWarumLabel: 'Warum das stimmt', jaWarum: 'Hier holt die Firma das Geld, du tust nichts. Deshalb steht es im Passiv: <b>wird abgebucht</b>. Genau so steht es auch auf deinem Kontoauszug.',
        noLabel: 'So klingt es falsch', no: 'Die Miete bucht jeden Monat automatisch ab.',
        noWarumLabel: 'Das Problem', noWarum: 'So klingt es, als würde die Miete selbst etwas tun. Wenn du unsicher bist, sag einfach, wer handelt: <i>Der Vermieter bucht die Miete ab.</i>'
      }
    ],
    hilfe: {
      knopf: '🆘 Trennt sich die Vorsilbe oder nicht?',
      vor: 'Ein einziger Test, und der geht immer:',
      punkte: [
        '<b>Sprich das Wort laut.</b> Liegt die Betonung auf der Vorsilbe, trennt sie sich: <b>AB</b>heben, <b>EIN</b>zahlen, <b>AB</b>buchen, <b>AUS</b>füllen.',
        '<b>Liegt die Betonung hinten, bleibt sie dran:</b> über<b>WEI</b>sen, unter<b>SCHREI</b>ben, be<b>ZAH</b>len.',
        '<b>Im Satz:</b> <i>Ich hebe Geld <u>ab</u>.</i> gegen <i>Ich <u>überweise</u> Geld.</i>',
        '<b>Im Perfekt:</b> <i>ab<b>ge</b>hoben</i> mit <i>ge</i> in der Mitte, <i>überwiesen</i> ganz ohne.'
      ],
      nach: 'Und wenn du dir bei einem neuen Verb nicht sicher bist: sag es einfach mit <i>ich möchte</i>. <i>Ich möchte Geld abheben.</i> Dann steht das Verb hinten und die Frage stellt sich gar nicht.'
    },
    tipp: { art: 'yellow', text: '🎯 <strong>Zu zweit, zwei Minuten:</strong> Einer nennt ein Verb aus der Bank, der andere macht sofort einen Satz daraus — einmal im Präsens, einmal im Perfekt.' }
  },

  saetze: {
    h2: 'Vier Bausteine',
    hl: 'für den Termin in der Bank',
    ssub: 'Sagen, was du willst. Fragen, was du brauchst. Nachfragen, wenn du es nicht verstehst. Und am Ende alles bestätigen.',
    akkLabel: 'der Schritt',
    mengeLabel: 'was du damit erreichst',
    a2: [
      { titel: '1 · 🎯 Sagen, was du willst', chips: ['Ich möchte ein Konto eröffnen.', 'Ich brauche eine neue Karte.', 'Ich möchte Geld überweisen.', 'Ich hätte gern eine Beratung.'], bsp: 'Guten Tag, ich möchte ein Konto eröffnen.', say: 'Guten Tag, ich möchte ein Konto eröffnen.' },
      { titel: '2 · ❓ Fragen, was du brauchst', chips: ['Welche Unterlagen brauche ich?', 'Was kostet das im Monat?', 'Wie lange dauert das?', 'Brauche ich einen Termin?'], bsp: 'Welche Unterlagen brauche ich dafür, und was kostet das im Monat?', say: 'Welche Unterlagen brauche ich dafür, und was kostet das im Monat?' },
      { titel: '3 · 🙋 Nachfragen', chips: ['Können Sie das bitte wiederholen?', 'Was bedeutet das genau?', 'Können Sie es einfacher sagen?', 'Wie schreibt man das?'], bsp: 'Entschuldigung, was bedeutet Lastschrift genau?', say: 'Entschuldigung, was bedeutet Lastschrift genau?' },
      { titel: '4 · ✅ Bestätigen', chips: ['Habe ich das richtig verstanden: …?', 'Also fünf Euro im Monat, richtig?', 'Und wo unterschreibe ich?', 'Bekomme ich das schriftlich?'], bsp: 'Habe ich das richtig verstanden: fünf Euro im Monat, und die Karte kommt per Post?', say: 'Habe ich das richtig verstanden: fünf Euro im Monat, und die Karte kommt per Post?' }
    ],
    b1: [
      { titel: '1 · 🎯 Genau sagen, was du willst', chips: ['Ich würde gern ein Girokonto eröffnen.', 'Mich würde interessieren, ob es ein Konto ohne Gebühren gibt.', 'Ich möchte einen Dauerauftrag einrichten.', 'Ich hätte eine Frage zu einer Abbuchung.'], bsp: 'Ich würde gern ein Girokonto eröffnen — mich würde vor allem interessieren, ob es eines ohne Gebühren gibt.', say: 'Ich würde gern ein Girokonto eröffnen — mich würde vor allem interessieren, ob es eines ohne Gebühren gibt.' },
      { titel: '2 · ❓ Nach dem Kleingedruckten fragen', chips: ['Welche Gebühren fallen an?', 'Ist das Abheben bei anderen Banken kostenlos?', 'Gibt es eine Mindestsumme?', 'Was passiert, wenn das Konto ins Minus geht?'], bsp: 'Welche Gebühren fallen an — und ist das Abheben bei anderen Banken kostenlos?', say: 'Welche Gebühren fallen an — und ist das Abheben bei anderen Banken kostenlos?' },
      { titel: '3 · 🙋 Freundlich nachhaken', chips: ['Da komme ich noch nicht ganz mit.', 'Können Sie mir den Unterschied erklären?', 'Und was heißt das für mich konkret?', 'Habe ich Sie richtig verstanden, dass …?'], bsp: 'Da komme ich noch nicht ganz mit — was ist der Unterschied zwischen Dauerauftrag und Lastschrift?', say: 'Da komme ich noch nicht ganz mit — was ist der Unterschied zwischen Dauerauftrag und Lastschrift?' },
      { titel: '4 · ✅ Absichern', chips: ['Bekomme ich das schriftlich?', 'Fasse ich kurz zusammen: …', 'Kann ich das jederzeit kündigen?', 'Ab wann gilt das?'], bsp: 'Fasse ich kurz zusammen: kein Grundpreis, Karte inklusive, jederzeit kündbar. Bekomme ich das schriftlich?', say: 'Fasse ich kurz zusammen: kein Grundpreis, Karte inklusive, jederzeit kündbar. Bekomme ich das schriftlich?' }
    ],
    tipp: { art: 'teal', text: '📣 <strong>Reihum:</strong> Einer spielt die Bank und erklärt etwas absichtlich kompliziert. Der Nächste fragt so lange nach, bis er es in einem einfachen Satz wiederholen kann.' }
  },

  dialoge: {
    h2: 'Vier Situationen —',
    hl: 'zwei Runden',
    ssub: '<b>Runde 1:</b> Lest den Dialog zu zweit laut. <b>Runde 2:</b> Klappt die Zeilen zu und sprecht frei — nur die Stichwörter bleiben.',
    liste: [
      {
        bild: 'amanda/sz-bank.webp', alt: 'Ein Beratungsgespräch am Bankschalter',
        titel: 'Das Konto eröffnen',
        situation: 'A möchte ein Konto eröffnen und war noch nie in einer deutschen Bank. B arbeitet dort und erklärt Schritt für Schritt.',
        zeilen: [
          { wer: 'a', text: 'Guten Tag, ich möchte gern ein Konto eröffnen.' },
          { wer: 'b', text: 'Sehr gern. Haben Sie Ihren Ausweis und die Meldebescheinigung dabei?', cue: 'Die zwei Unterlagen, nach denen immer gefragt wird. <b>Die Meldebescheinigung</b> bekommst du beim Einwohnermeldeamt.' },
          { wer: 'a', text: 'Den Ausweis ja. Die Meldebescheinigung habe ich zu Hause.' },
          { wer: 'b', text: 'Kein Problem, schicken Sie sie nach. Wir können heute schon alles ausfüllen.', cue: '<b>nachschicken</b> — trennbar. Und <i>ausfüllen</i> ebenfalls: <i>Wir füllen alles <u>aus</u>.</i>' },
          { wer: 'a', text: 'Was kostet das Konto denn im Monat?' },
          { wer: 'b', text: 'Wenn Ihr Gehalt draufkommt, ist es kostenlos. Sonst fünf Euro Gebühr.', cue: 'Nach den <b>Gebühren</b> immer selbst fragen. Und merk dir: <i>Wenn das Gehalt draufkommt</i> — das ist die häufigste Bedingung.' }
        ]
      },
      {
        bild: 'vok-bild/der-euro.webp', alt: 'Ein Geldautomat und Euroscheine',
        titel: 'Am Automaten',
        situation: 'A steht am Geldautomaten und kommt nicht weiter. B ist eine Passantin und hilft.',
        zeilen: [
          { wer: 'a', text: 'Entschuldigung, verstehe ich das richtig — hier kostet Abheben Gebühren?' },
          { wer: 'b', text: 'Ja, das ist eine fremde Bank. Bei Ihrer eigenen ist es umsonst.', cue: '<b>umsonst</b> heißt kostenlos. Und die Regel dahinter gilt in ganz Deutschland: eigene Bank gratis, fremde Bank kostet.' },
          { wer: 'a', text: 'Wo finde ich denn meine Bank hier in der Nähe?' },
          { wer: 'b', text: 'Zwei Straßen weiter, neben der Apotheke. Da gibt es auch einen Automaten.', cue: 'Eine kurze Wegbeschreibung. <i>Neben der Apotheke</i> — Dativ, weil es um den Ort geht.' },
          { wer: 'a', text: 'Danke! Und wenn ich es trotzdem hier mache, wie viel ist es?' },
          { wer: 'b', text: 'Vier oder fünf Euro, glaube ich. Der Automat sagt es Ihnen vorher an.', cue: '<b>ansagen</b> — trennbar, und hier heißt es: Er zeigt es dir, bevor du bestätigst. Du kannst also noch abbrechen.' }
        ]
      },
      {
        bild: 'vok-bild/die-rechnung.webp', alt: 'Eine Rechnung und ein Kontoauszug auf einem Tisch',
        titel: 'Die falsche Abbuchung',
        situation: 'A hat auf dem Kontoauszug eine Abbuchung entdeckt, die nicht stimmt. B ist die Bank am Telefon.',
        zeilen: [
          { wer: 'a', text: 'Guten Tag, auf meinem Kontoauszug steht eine Abbuchung, die ich nicht kenne.' },
          { wer: 'b', text: 'Das klären wir. Von wann ist sie, und über welchen Betrag?', cue: 'Die zwei Fragen, die immer kommen: <b>Datum</b> und <b>Betrag</b>. Halt beides bereit, bevor du anrufst.' },
          { wer: 'a', text: 'Vom achten November, neunundvierzig Euro. Der Name sagt mir nichts.' },
          { wer: 'b', text: 'Dann buchen wir das zurück. Sie haben acht Wochen Zeit dafür, das geht also.', cue: '<b>zurückbuchen</b> — trennbar. Und die <b>acht Wochen</b> sind ein Recht, kein Entgegenkommen.' },
          { wer: 'a', text: 'Sehr gut. Muss ich dafür etwas unterschreiben?' },
          { wer: 'b', text: 'Nein, das mache ich hier. Das Geld ist morgen wieder auf Ihrem Konto.', cue: '<b>unterschreiben</b> bleibt zusammen — untrennbar. Und der Schlusssatz ist der, den man hören will.' }
        ]
      },
      {
        bild: 'vok-bild/der-termin.webp', alt: 'Ein Kalender mit einem markierten Tag',
        titel: 'Die Miete jeden Monat',
        situation: 'A hat eine neue Wohnung und will die Miete nicht jeden Monat von Hand überweisen. B erklärt den Dauerauftrag.',
        zeilen: [
          { wer: 'a', text: 'Ich vergesse die Miete jeden Monat fast. Gibt es da etwas Automatisches?' },
          { wer: 'b', text: 'Ja, einen Dauerauftrag. Sie sagen mir den Betrag und den Tag, den Rest macht die Bank.', cue: 'Die einfachste Erklärung des Wortes: <b>Betrag</b> plus <b>Tag</b>, und es läuft von allein.' },
          { wer: 'a', text: 'Achthundert Euro, immer am Dritten. Kann ich das später ändern?' },
          { wer: 'b', text: 'Jederzeit, in der App oder hier bei mir. Und löschen können Sie ihn auch.', cue: '<b>ändern</b> und <b>löschen</b> — genau das ist der Unterschied zur Lastschrift: Beim Dauerauftrag hast du die Hand drauf.' },
          { wer: 'a', text: 'Und wenn die Miete mal steigt?' },
          { wer: 'b', text: 'Dann müssen Sie ihn selbst anpassen. Die Bank weiß davon nichts.', cue: 'Der wichtigste Satz des Dialogs. <b>anpassen</b> — trennbar. Und viele vergessen es, dann fehlt plötzlich Geld beim Vermieter.' }
        ]
      }
    ],
    tipp: { art: 'yellow', text: '🎭 <strong>Und jetzt ihr:</strong> Spielt Dialog 1 mit euren eigenen Fragen. Regel: Wer die Bank spielt, erklärt einmal absichtlich zu kompliziert — der andere muss nachfragen.' }
  },

  grammatik: {
    h2: '🧩 Trennbar oder nicht:',
    hl: 'abheben, einzahlen, überweisen',
    ssub: 'Fast alle Bankverben haben eine Vorsilbe. Die eine Hälfte trennt sich im Satz, die andere nie — und man hört sofort, welche.',
    intro: 'Der Test ist die Betonung. <b>AB</b>heben, <b>EIN</b>zahlen, <b>AB</b>buchen, <b>AUS</b>füllen — Betonung vorn, die Vorsilbe geht ans Satzende. über<b>WEI</b>sen, unter<b>SCHREI</b>ben, be<b>ZAH</b>len — Betonung hinten, alles bleibt zusammen.',
    kette: [
      { emoji: '🙋', rolle: 'wer', bsp: 'Ich' },
      { emoji: '🔧', rolle: 'Verb', bsp: 'hebe' },
      { emoji: '💶', rolle: 'was', bsp: 'hundert Euro' },
      { emoji: '🔚', rolle: 'Vorsilbe hinten', bsp: 'ab.' }
    ],
    felder: [
      { rolle: 'Ich', wort: 'Ich' },
      { rolle: 'überweise', wort: 'überweise', hervor: true },
      { rolle: 'was', wort: 'dir das Geld' },
      { rolle: 'nichts hinten', wort: '—' }
    ],
    bloecke: [
      {
        h2: 'Vier trennbare,',
        hl: 'zwei untrennbare',
        ssub: 'Mehr brauchst du in der Bank nicht. Und wer diese sechs kann, kann alle anderen auch einordnen.',
        dreier: [
          { emoji: '📤', wort: 'abheben · einzahlen', was: 'trennt sich', bsp: 'Ich <b>hebe</b> hundert Euro <b>ab</b>. / Ich <b>zahle</b> das Geld <b>ein</b>.' },
          { emoji: '📄', wort: 'abbuchen · ausfüllen', was: 'trennt sich auch', bsp: 'Die Miete wird <b>abgebucht</b>. / Ich <b>fülle</b> das Formular <b>aus</b>.' },
          { emoji: '🔒', wort: 'überweisen · unterschreiben', was: 'bleibt zusammen', bsp: 'Ich <b>überweise</b> dir das Geld und <b>unterschreibe</b> hier.' }
        ],
        chips: ['abheben', 'einzahlen', 'abbuchen', 'ausfüllen', 'zurückbuchen', 'anpassen', 'nachschicken', 'überweisen', 'unterschreiben', 'bezahlen', 'eröffnen', 'verstehen']
      },
      {
        h2: 'Und im Perfekt',
        hl: 'sieht man es noch deutlicher',
        ssub: 'Das kleine <i>ge</i> zeigt dir sofort, um welche Sorte es sich handelt.',
        paare: [
          {
            jaLabel: 'So ist es richtig', ja: 'Ich habe hundert Euro abgehoben und dir fünfzig überwiesen.',
            jaWarumLabel: 'Warum das stimmt', jaWarum: 'Bei den trennbaren rutscht das <b>ge</b> in die Mitte: <i>ab<b>ge</b>hoben</i>, <i>ein<b>ge</b>zahlt</i>, <i>aus<b>ge</b>füllt</i>. Bei den untrennbaren fehlt es ganz: <i>überwiesen</i>, <i>unterschrieben</i>, <i>bezahlt</i>.',
            noLabel: 'So klingt es falsch', no: 'Ich habe hundert Euro gehebt ab und dir fünfzig geüberwiesen.',
            noWarumLabel: 'Das Problem', noWarum: 'Zweimal steht das <i>ge</i> an der falschen Stelle. Sprich das Wort einmal laut, dann hörst du es: Wo die Betonung liegt, dorthin gehört das <i>ge</i> nicht.'
          }
        ]
      }
    ],
    bauH2: '🧱 Bau die Sätze selbst',
    bauSsub: 'Tippe die Teile in der richtigen Reihenfolge an. Achte darauf, ob die Vorsilbe ans Ende gehört.',
    storyH2: '📖 Und jetzt im Zusammenhang',
    storySsub: 'Ein Vormittag bei der Bank. Wähle in jeder Lücke die richtige Form.',
    hilfe: {
      knopf: '🆘 Trennt es sich oder nicht?',
      vor: 'Drei Schritte, dann steht der Satz:',
      punkte: [
        '<b>Sprich das Wort laut.</b> Betonung vorn heißt: trennt sich. <b>AB</b>heben, <b>EIN</b>zahlen.',
        '<b>Betonung hinten heißt: bleibt zusammen.</b> über<b>WEI</b>sen, unter<b>SCHREI</b>ben, be<b>ZAH</b>len.',
        '<b>Im Satz:</b> trennbare Vorsilbe ans Ende — <i>Ich hebe Geld <u>ab</u>.</i>',
        '<b>Im Perfekt:</b> <i>ab<b>ge</b>hoben</i> mit <i>ge</i> in der Mitte, <i>überwiesen</i> ganz ohne <i>ge</i>.'
      ],
      nach: 'Und der Ausweg, wenn du unsicher bist: sag es mit <i>ich möchte</i> oder <i>ich muss</i>. Dann steht das Verb komplett am Ende und du musst gar nichts trennen — <i>Ich möchte Geld abheben.</i>'
    }
  },

  rollenspiele: {
    h2: '🎭 Drei Situationen',
    hl: 'zu zweit',
    ssub: 'Einer fragt, einer erklärt. Danach tauschen — beim zweiten Mal ohne die Sätze unten. Mindestens drei Wörter von heute pro Runde.',
    liste: [
      {
        titel: 'Konto eröffnen',
        situation: 'A war noch nie in einer deutschen Bank und will ein Konto. B arbeitet dort und fragt nach den Unterlagen — von denen A eine nicht dabeihat.',
        a2: ['Ich möchte ein Konto eröffnen', 'Welche Unterlagen brauche ich?', 'Was kostet das im Monat?', 'Wo muss ich unterschreiben?'],
        b1: ['Bringen Sie Ausweis und Meldebescheinigung mit', 'Wenn Ihr Gehalt draufkommt, ist es kostenlos', 'Den Rest können Sie nachschicken, wir füllen heute schon alles aus', 'Die Karte kommt in etwa einer Woche per Post'],
        gut: 'A hat gesagt, was A will, nach Unterlagen und Gebühren gefragt und am Ende zusammengefasst. Und mindestens einmal kam ein trennbares Verb richtig vor.'
      },
      {
        titel: 'Die Abbuchung stimmt nicht',
        situation: 'A hat auf dem Kontoauszug etwas gefunden, das nicht sein kann. B ist die Bank und braucht Datum und Betrag.',
        a2: ['Da ist eine Abbuchung, die ich nicht kenne', 'Vom achten November, neunundvierzig Euro', 'Kann ich das zurückholen?', 'Muss ich etwas unterschreiben?'],
        b1: ['Von wann ist sie und über welchen Betrag genau?', 'Sie haben acht Wochen Zeit, das zurückbuchen zu lassen', 'Das mache ich gleich hier, Sie brauchen nichts zu unterschreiben', 'Das Geld ist morgen wieder auf Ihrem Konto'],
        gut: 'A hatte Datum und Betrag parat und hat das Wort <i>zurückbuchen</i> benutzt. B hat gesagt, was passiert und bis wann.'
      },
      {
        titel: 'Dauerauftrag für die Miete',
        situation: 'A hat eine neue Wohnung und vergisst jeden Monat die Miete. B erklärt den Dauerauftrag — und die eine Sache, die man später selbst tun muss.',
        a2: ['Ich vergesse die Miete jeden Monat', 'Wie richte ich einen Dauerauftrag ein?', 'Kann ich das später ändern?', 'Und wenn die Miete steigt?'],
        b1: ['Sie nennen mir Betrag und Tag, den Rest macht die Bank', 'Ändern und löschen können Sie ihn jederzeit selbst', 'Bei einer Mieterhöhung müssen Sie ihn aber selbst anpassen', 'Die Bank erfährt davon nichts, das ist der häufigste Fehler'],
        gut: 'Der Unterschied zwischen <i>Dauerauftrag</i> und <i>Lastschrift</i> ist gefallen. Und beide wissen jetzt, was bei einer Mieterhöhung passiert.'
      }
    ]
  },

  challenge: {
    ssub: 'Neunzig Sekunden über dein Geld im Alltag: Was wird bei dir abgebucht, was überweist du selbst, wo hebst du Geld ab?',
    hilfe: {
      knopf: '🆘 Mir fällt nichts ein',
      vor: 'Vier Sätze, dann trägt dich die Zeit:',
      punkte: [
        '<b>Konto:</b> <i>Mein Konto habe ich bei … und es kostet …</i>',
        '<b>Abbuchung:</b> <i>Jeden Monat werden bei mir … abgebucht.</i>',
        '<b>Überweisung:</b> <i>Selbst überweise ich eigentlich nur …</i>',
        '<b>Abheben:</b> <i>Bargeld hebe ich ungefähr … mal im Monat ab.</i>'
      ],
      nach: 'Und wenn du deine eigenen Zahlen nicht weißt: sag genau das. <i>Ich weiß gar nicht, wie viel mein Konto kostet</i> ist ein guter, ehrlicher Satz — und ein guter Grund, morgen nachzuschauen.'
    },
    tipp: { art: 'yellow', text: '⏱️ <strong>Spielregel:</strong> In jeder Runde müssen <u>ein trennbares</u> und <u>ein untrennbares</u> Verb vorkommen. Wer <i>Ich weise dir das Geld über</i> sagt, fängt noch einmal an.' }
  },

  ueben: { tipp: { art: 'teal', text: '📣 <strong>Danach laut:</strong> Einer nennt ein Verb, der Nächste macht daraus zwei Sätze — Präsens und Perfekt. Reihum, ohne lange zu überlegen.' } },

  hausaufgabe: {
    h2: '📮 Deine Hausaufgabe bis',
    hl: 'Mittwoch',
    ssub: 'Vier kleine Aufgaben, zusammen etwa 25 Minuten. Am Mittwoch geht es weiter: bezahlen, die Rechnung teilen und sparen.',
    warum: { text: '💡 <strong>Warum das hilft:</strong> Beim Thema Geld kostet ein Missverständnis wirklich Geld. Wer in der Bank nachfragen kann, statt höflich zu nicken, spart im Jahr schnell sechzig Euro Gebühren — und merkt eine falsche Abbuchung, solange man sie noch zurückholen kann.' },
    a2: [
      { emoji: '📄', titel: 'Dein Kontoauszug', zeit: '6 Min', text: 'Schau dir deinen letzten Kontoauszug an und schreib fünf Sätze: Was wurde abgebucht, was ist reingekommen?' },
      { emoji: '✍️', titel: 'Zwölf Sätze', zeit: '7 Min', text: 'Schreib zu jedem der zwölf Wörter von heute einen eigenen Satz. Bei den Verben einmal im Präsens und einmal im Perfekt.' },
      { emoji: '🎙️', titel: 'Der Termin', zeit: '5 Min', text: 'Nimm eine Sprachnachricht auf: Du bist in der Bank und willst ein Konto eröffnen. Sag deine ersten fünf Sätze.' },
      { emoji: '🔍', titel: 'Was kostet dein Konto?', zeit: '7 Min', text: 'Finde heraus, welche Gebühren dein Konto hat, und schreib in drei Sätzen auf, was du herausgefunden hast.' }
    ],
    b1: [
      { emoji: '📝', titel: 'Eine Mail an die Bank', zeit: '7 Min', text: 'Schreib eine Mail: Eine Abbuchung von 49 Euro stimmt nicht. Nenne Datum, Betrag und was du möchtest. Höchstens acht Sätze.' },
      { emoji: '🔁', titel: 'Trennbar und untrennbar', zeit: '6 Min', text: 'Schreib zwölf Sätze im Perfekt, abwechselnd mit trennbaren und untrennbaren Verben. Markier bei jedem, wo das <i>ge</i> steht.' },
      { emoji: '⚖️', titel: 'Der Vergleich', zeit: '6 Min', text: 'Erklär in acht Sätzen den Unterschied zwischen Dauerauftrag und Lastschrift — mit je einem Beispiel aus deinem Alltag.' },
      { emoji: '🎙️', titel: 'Zwei Minuten Beratung', zeit: '6 Min', text: 'Nimm auf, wie du in der Bank nach Gebühren fragst und am Ende alles noch einmal zusammenfasst.' }
    ],
    hilfeA2: {
      knopf: '💡 Beispiel ansehen (Aufgabe 2)',
      vor: 'So sehen die Sätze aus:',
      punkte: [
        '<i>Ich <b>hebe</b> am Automaten fünfzig Euro <b>ab</b>. — Gestern habe ich fünfzig Euro <b>abgehoben</b>.</i>',
        '<i>Ich <b>überweise</b> die Miete. — Ich habe die Miete schon <b>überwiesen</b>.</i>',
        '<i>Ich <b>fülle</b> das Formular <b>aus</b>. — Ich habe das Formular <b>ausgefüllt</b>.</i>',
        '<i>Der Strom wird jeden Monat <b>abgebucht</b>.</i>',
        '<i>Hier <b>unterschreibe</b> ich. — Ich habe schon <b>unterschrieben</b>.</i>'
      ],
      nach: 'Ein einziger Test genügt: Sprich das Verb laut aus. Wo die Betonung liegt, bleibt die Silbe stehen — und das <i>ge</i> im Perfekt geht immer direkt vor den betonten Teil.'
    },
    hilfeB1: {
      knopf: '💡 Beispiel ansehen (Aufgabe 1)',
      vor: 'Das sind die Stellen, auf die es in der Mail ankommt:',
      punkte: [
        '<b>Betreff:</b> <i>Rückbuchung einer Lastschrift vom 8. November</i>',
        '<b>Sache:</b> <i>Auf meinem Kontoauszug finde ich eine Abbuchung über 49,00 Euro, die ich nicht zuordnen kann.</i>',
        '<b>Daten:</b> <i>Datum: 8.11.2026, Betrag: 49,00 Euro, Empfänger: …</i>',
        '<b>Wunsch:</b> <i>Ich bitte Sie, diese Lastschrift zurückbuchen zu lassen.</i>',
        '<b>Schluss:</b> <i>Für Rückfragen erreichen Sie mich unter … Vielen Dank vorab.</i>'
      ],
      nach: 'Und ein Hinweis, der bares Geld wert ist: Schreib immer <b>Datum und Betrag</b> in die erste Zeile. Ohne beides kann die Bank nichts tun — und die acht Wochen laufen weiter.'
    },
    abgabe: 'Schick mir bis Mittwoch 12 Uhr deine zwölf Sätze und die Sprachnachricht — ich sage dir, wo die Vorsilbe an der falschen Stelle steht.',
    ausblick: 'Am Mittwoch: bezahlen im Alltag. Bar oder Karte, die Rechnung im Restaurant teilen, Pfand, Angebote — und die Sätze, mit denen man höflich über Geld spricht.'
  },

  daten: {
    sk: [
      'Du eröffnest ein Konto. Sag deine ersten fünf Sätze in der Bank.',
      'Erklär den Unterschied zwischen Dauerauftrag und Lastschrift.',
      'Was wird bei dir jeden Monat abgebucht? Nenne drei Dinge.',
      'Du entdeckst eine falsche Abbuchung. Ruf bei der Bank an.',
      'Frag am Schalter nach allen Gebühren — drei verschiedene Fragen.',
      'Erklär jemandem, wie man am Automaten Geld abhebt.',
      'Erzähl, wie Bankgeschäfte in deinem Land laufen.',
      'Sag fünf Sätze mit trennbaren Verben aus der Bank.',
      'Du verstehst die Beraterin nicht. Frag dreimal höflich nach.',
      'Was würdest du ändern, wenn du eine Bank hättest?'
    ],
    w90: [
      { w: 'das Konto', b: 'amanda/sz-bank.webp', h: ['eröffnen', 'die Bank', 'das Gehalt', 'kündigen', 'das Girokonto'] },
      { w: 'die Karte', b: 'amanda/sz-kasse.webp', h: ['bezahlen', 'die Kasse', 'bar', 'einstecken', 'die Geheimzahl'] },
      { w: 'die Geheimzahl', b: 'vok-bild/die-telefonnummer.webp', h: ['eingeben', 'vier Zahlen', 'geheim', 'vergessen', 'die PIN'] },
      { w: 'der Geldautomat', b: 'vok-bild/der-euro.webp', h: ['abheben', 'die Gebühr', 'der Schein', 'fremde Bank', 'umsonst'] },
      { w: 'die Überweisung', b: 'amanda/sz-buchhaltung.webp', h: ['überweisen', 'die IBAN', 'der Betrag', 'schicken', 'der Empfänger'] },
      { w: 'der Dauerauftrag', b: 'vok-bild/der-termin.webp', h: ['jeden Monat', 'die Miete', 'einrichten', 'ändern', 'automatisch'] },
      { w: 'die Lastschrift', b: 'vok-bild/die-rechnung.webp', h: ['abbuchen', 'der Strom', 'die Erlaubnis', 'zurückbuchen', 'die Firma'] },
      { w: 'der Kontoauszug', b: 'vok-bild/das-protokoll.webp', h: ['die Liste', 'kontrollieren', 'die Abbuchung', 'das Amt', 'ausdrucken'] },
      { w: 'die Gebühr', b: 'vok-bild/die-gebuehr.webp', h: ['kosten', 'im Monat', 'kostenlos', 'nachfragen', 'sparen'] },
      { w: 'die Unterlagen', b: 'vok-bild/die-unterlagen.webp', h: ['mitbringen', 'der Ausweis', 'nachschicken', 'das Formular', 'kopieren'] }
    ],
    quiz: [
      { q: 'Welcher Satz ist richtig?', o: ['Ich hebe am Automaten Geld ab.', 'Ich abhebe am Automaten Geld.', 'Ich hebe ab am Automaten Geld.', 'Ich habe am Automaten Geld abheben.'], c: 0, e: '<b>abheben</b> ist trennbar: <i>ab</i> geht ans Satzende. Die Betonung liegt vorn, das ist der Test.' },
      { q: 'Wie heißt das Perfekt von <u>überweisen</u>?', o: ['überwiesen', 'geüberwiesen', 'übergewiesen', 'überweist'], c: 0, e: 'Untrennbare Verben bekommen kein <b>ge</b>. Genauso: <i>unterschrieben</i>, <i>bezahlt</i>, <i>verstanden</i>.' },
      { q: 'Wer schickt das Geld beim <u>Dauerauftrag</u>?', o: ['du selbst, jeden Monat automatisch', 'die Firma holt es sich', 'die Bank entscheidet', 'niemand, es passiert nichts'], c: 0, e: 'Beim <b>Dauerauftrag</b> schickst du, bei der <b>Lastschrift</b> holt die Firma. Deshalb kannst du den Dauerauftrag jederzeit selbst ändern.' },
      { q: 'Wie lange kannst du eine falsche Lastschrift zurückholen?', o: ['acht Wochen', 'drei Tage', 'ein Jahr', 'gar nicht'], c: 0, e: 'Acht Wochen, und dafür genügt ein Anruf. Der Satz lautet: <i>Ich möchte diese Lastschrift zurückbuchen lassen.</i>' },
      { q: 'Welches Verb trennt sich <u>nicht</u>?', o: ['unterschreiben', 'ausfüllen', 'einzahlen', 'abbuchen'], c: 0, e: 'Die Betonung liegt bei unter<b>SCHREI</b>ben hinten, deshalb bleibt alles zusammen: <i>Ich unterschreibe hier.</i>' },
      { q: 'Was brauchst du meistens, um ein Konto zu eröffnen?', o: ['Ausweis und Meldebescheinigung', 'nur die Telefonnummer', 'einen Arbeitsvertrag und sonst nichts', 'eine deutsche Adresse reicht mündlich'], c: 0, e: 'Diese zwei werden fast immer verlangt. Ruf vorher an und frag nach — das spart den zweiten Weg.' },
      { q: 'Der Satz <u>Der Strom wird abgebucht</u> bedeutet:', o: ['Die Firma holt sich das Geld vom Konto.', 'Ich überweise den Strom selbst.', 'Der Strom wird abgestellt.', 'Die Rechnung kommt per Post.'], c: 0, e: 'Passiv, weil du nichts tust. So steht es auch auf deinem Kontoauszug — dort tauchen fast nur Passivformen auf.' },
      { q: 'Was passiert bei einer Mieterhöhung mit dem Dauerauftrag?', o: ['Du musst ihn selbst anpassen.', 'Die Bank ändert ihn automatisch.', 'Der Vermieter ändert ihn.', 'Er wird automatisch gelöscht.'], c: 0, e: 'Die Bank weiß von der Erhöhung nichts. <b>anpassen</b> ist trennbar: <i>Ich passe den Dauerauftrag <u>an</u>.</i>' }
    ],
    gap: [
      { t: 'Ich ___ am Automaten hundert Euro ab.', o: ['hebe', 'habe', 'zahle', 'buche'], a: 'hebe' },
      { t: 'Gestern habe ich dir das Geld ___.', o: ['überwiesen', 'geüberwiesen', 'übergewiesen', 'überweisen'], a: 'überwiesen' },
      { t: 'Bitte ___ Sie das Formular vollständig aus.', o: ['füllen', 'machen', 'schreiben', 'geben'], a: 'füllen' },
      { t: 'Die Miete geht per ___ jeden Monat raus.', o: ['Dauerauftrag', 'Lastschrift', 'Kontoauszug', 'Gebühr'], a: 'Dauerauftrag' },
      { t: 'Der Strom wird automatisch ___.', o: ['abgebucht', 'abbucht', 'gebucht ab', 'buchen ab'], a: 'abgebucht' },
      { t: 'Hier fehlt noch Ihre ___.', o: ['Unterschrift', 'Gebühr', 'Beratung', 'Überweisung'], a: 'Unterschrift' },
      { t: 'Welche ___ brauche ich für das Konto?', o: ['Unterlagen', 'Gebühren', 'Karten', 'Auszüge'], a: 'Unterlagen' },
      { t: 'Ich möchte diese Lastschrift ___ lassen.', o: ['zurückbuchen', 'zurückbucht', 'zurückgebucht', 'zurückbuchte'], a: 'zurückbuchen' }
    ],
    gbau: [
      { f: 'Bau den Satz mit einem trennbaren Verb:', t: ['Ich', 'hebe', 'am', 'Automaten', 'hundert', 'Euro', 'ab'], l: ['Ich', 'hebe', 'am', 'Automaten', 'hundert', 'Euro', 'ab'], e: 'Die Vorsilbe <b>ab</b> geht ganz ans Ende. Die Betonung liegt vorn — daran erkennst du es.' },
      { f: 'Bau den Satz mit einem untrennbaren Verb:', t: ['Ich', 'überweise', 'dir', 'das', 'Geld', 'heute'], l: ['Ich', 'überweise', 'dir', 'das', 'Geld', 'heute'], e: 'Bei <b>überweisen</b> bleibt alles zusammen. Nichts geht ans Ende, weil die Betonung hinten liegt.' },
      { f: 'Bau den Satz im Perfekt:', t: ['Ich', 'habe', 'das', 'Formular', 'schon', 'ausgefüllt'], l: ['Ich', 'habe', 'das', 'Formular', 'schon', 'ausgefüllt'], e: 'Das <b>ge</b> steht in der Mitte: <i>aus<b>ge</b>füllt</i>. So machen es alle trennbaren Verben.' },
      { f: 'Bau den Passivsatz:', t: ['Die', 'Miete', 'wird', 'jeden', 'Monat', 'abgebucht'], l: ['Die', 'Miete', 'wird', 'jeden', 'Monat', 'abgebucht'], e: 'Passiv, weil die Firma handelt und nicht du. Genau so steht es auf deinem Kontoauszug.' }
    ],
    gstory: {
      t: 'Am Montag bin ich zur Bank gegangen, weil ich ein Konto ___ wollte. Die Beraterin hat gefragt, ob ich meinen Ausweis dabeihabe, und ich habe alle Unterlagen auf den Tisch ___. Dann habe ich zwei Formulare ___ und unten ___. Zu Hause habe ich gleich einen Dauerauftrag für die Miete ___. Den Strom lasse ich lieber ___, dann vergesse ich ihn nicht. Am Automaten habe ich fünfzig Euro ___, weil ich noch bar bezahlen musste. Und als ich auf dem Kontoauszug eine falsche Abbuchung gesehen habe, hat die Bank sie am nächsten Tag ___.',
      o: ['eröffnen', 'gelegt', 'ausgefüllt', 'unterschrieben', 'eingerichtet', 'abbuchen', 'abgehoben', 'zurückgebucht'],
      a: [['eröffnen'], ['gelegt'], ['ausgefüllt'], ['unterschrieben'], ['eingerichtet'], ['abbuchen'], ['abgehoben'], ['zurückgebucht']]
    }
  }
};
fs.writeFileSync(__dirname + '/../stunden/w11-a1-bank-konto.json', JSON.stringify(S, null, 2) + '\n', 'utf8');
console.log('geschrieben');
