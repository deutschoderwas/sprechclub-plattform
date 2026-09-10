'use strict';
const fs = require('fs');
const S = {
  datei: 'Unterricht-ab-14-09/w11-c-teil1-advent-feiertage-b1b2.html',
  eyebrow: 'deutschoderwas · Sprechclub · Woche 11 · Strang C · Teil 1 · Montag, 23. November',
  titel: 'Die dunkle Jahreszeit:',
  hl: 'Advent, Feiertage, Familie',
  stufe: 'B1/B2',
  termin: 'Mo 23.11. 17:30 und 19:30 · Strang C · Teil 1 · B1 ⇄ B2',
  untertitel: 'Ab dem ersten Advent verändert sich Deutschland: Es wird früh dunkel, überall stehen Lichter, und alle reden über Termine mit der Familie. Für viele, die neu hier sind, ist das die fremdeste Zeit im Jahr — und die, in der am meisten gefragt wird, wie man es zu Hause macht.',
  fuss: 'Die dunkle Jahreszeit · Teil 1 · B1/B2 · Woche 11 · am Mittwoch: die große Debatte',
  niveau: { a: 'B1 · sicherer', b: 'B2 · feiner', hinweis: 'Gleiches Thema, andere Sätze. Wechsle jederzeit — probier ruhig beide Seiten aus.' },

  einstieg: [
    {
      h2: 'Vier Wochen,',
      hl: 'in denen alle Termine haben',
      ssub: 'Der Advent sind die vier Sonntage vor Weihnachten. In dieser Zeit häufen sich Einladungen, Feiern in der Arbeit und Essen mit der Familie. Wer das nicht kennt, wundert sich, warum plötzlich niemand mehr Zeit hat — und warum trotzdem alle sagen, es sei die ruhige Zeit.',
      bild: 'amanda/sz-feste.webp',
      alt: 'Menschen sitzen an einem langen Tisch und feiern zusammen',
      fragenA2: [
        'Was machst du im Dezember?',
        'Feierst du Weihnachten?',
        'Wird es bei dir zu Hause auch so früh dunkel?'
      ],
      fragenB1: [
        'Was fällt dir an dieser Jahreszeit hier zuerst auf?',
        'Welches Fest ist in deinem Land das wichtigste?',
        'Was findest du schön daran, was anstrengend?'
      ],
      tipp: { art: 'teal', text: '🔑 <strong>Drei Zeitangaben, die du brauchst:</strong> <b>im Dezember</b> (Monat), <b>am 24.</b> (Tag), <b>an Weihnachten</b> oder <b>zu Weihnachten</b> (Fest). Alle drei kommen in diesen Wochen ständig vor.' }
    },
    {
      h2: 'Und die Frage,',
      hl: 'die alle stellen',
      ssub: 'Ab Ende November wirst du überall gefragt: <i>Und, was machen Sie über die Feiertage?</i> Das ist keine echte Neugier, sondern Small Talk — eine kurze Antwort genügt völlig. Wer möchte, erzählt mehr; wer nicht, sagt einfach: <i>Ganz ruhig zu Hause.</i>',
      bild: 'vok-bild/die-familie.webp',
      alt: 'Eine Familie sitzt gemeinsam an einem Tisch',
      fragenA2: [
        'Was machst du über die Feiertage?',
        'Kochst du an Festtagen selbst?',
        'Wen siehst du im Dezember am häufigsten?'
      ],
      fragenB1: [
        'Wie beantwortest du die Frage nach den Feiertagen, wenn du nicht viel erzählen willst?',
        'Wie viel Familie ist für dich genug?',
        'Was hast du hier übernommen, was nicht?'
      ],
      tipp: { art: 'yellow', text: '💡 <strong>Der Satz für alle Fälle:</strong> <b>Ganz ruhig, mit der Familie</b> — oder <b>Dieses Jahr mache ich es ganz entspannt.</b> Beides ist eine vollständige Antwort, und niemand fragt danach weiter.' }
    }
  ],

  wortschatz: {
    h2: 'Zwölf Wörter,',
    hl: 'die jetzt überall fallen',
    ssub: 'Sag jedes Wort laut — mit Artikel. Und sag bei jedem gleich dazu, ob es bei dir zu Hause auch eine Rolle spielt.',
    karten: [
      { bild: 'amanda/sz-feste.webp', alt: 'Menschen feiern zusammen an einem langen Tisch', art: 'der', wort: 'Advent', kurz: 'die vier Wochen vor Weihnachten', bsp: 'Im Advent ist hier jedes Wochenende verplant.', tipp: 'Immer <b>im Advent</b>. Die vier Sonntage heißen <i>der erste bis vierte Advent</i>, und in vielen Familien wird an jedem eine Kerze mehr angezündet.', say: 'Im Advent ist hier jedes Wochenende verplant.' },
      { bild: 'amanda/sz-handel.webp', alt: 'Verkaufsstände mit Lichtern', art: 'der', wort: 'Weihnachtsmarkt', kurz: 'die Stände mit Lichtern, Essen und Glühwein', bsp: 'Gehen wir am Freitag auf den Weihnachtsmarkt?', tipp: 'Man geht <b>auf den</b> Weihnachtsmarkt (wohin, Akkusativ) und ist dann <b>auf dem</b> Weihnachtsmarkt (wo, Dativ). Genau das Muster aus dem Strang B.', say: 'Gehen wir am Freitag auf den Weihnachtsmarkt?' },
      { bild: 'vok-bild/der-termin.webp', alt: 'Ein Kalender mit markierten Tagen', art: 'der', wort: 'Feiertag', kurz: 'ein Tag, an dem die meisten frei haben', bsp: 'Der 25. und der 26. sind beides Feiertage.', tipp: 'Wichtig für den Alltag: An Feiertagen sind hier <b>alle Geschäfte zu</b>, auch die Supermärkte. Wer nicht vorher einkauft, steht vor verschlossenen Türen.', say: 'Der 25. und der 26. sind beides Feiertage.' },
      { bild: 'vok-bild/die-familie.webp', alt: 'Eine Familie sitzt zusammen am Tisch', art: 'die', wort: 'Familie', kurz: 'die Menschen, mit denen du feierst', bsp: 'Über die Feiertage bin ich bei der Familie.', tipp: 'Beachte die Präposition: <b>bei der</b> Familie (wo du bist) und <b>zu der</b> Familie fahren (wohin). Und <i>über die Feiertage</i> heißt: die ganze Zeit hindurch.', say: 'Über die Feiertage bin ich bei der Familie.' },
      { bild: 'vok-bild/die-geschwister.webp', alt: 'Geschwister stehen nebeneinander', art: 'die', wort: 'Verwandten', kurz: 'die weitere Familie — Tanten, Onkel, Cousins', bsp: 'An Weihnachten kommen alle Verwandten zusammen.', tipp: 'Immer Plural in diesem Zusammenhang. Und ein sehr deutscher Satz für diese Wochen: <i>Man sieht sich einmal im Jahr, und das reicht auch.</i>', say: 'An Weihnachten kommen alle Verwandten zusammen.' },
      { bild: 'bilder/lesen/mail.webp', alt: 'Ein Handy mit einer Nachricht', art: 'die', wort: 'Einladung', kurz: 'wenn dich jemand zu sich bittet', bsp: 'Ich habe drei Einladungen für dasselbe Wochenende.', tipp: 'Eine Einladung <b>bekommt</b> man und <b>nimmt sie an</b> oder <b>sagt ab</b>. Und absagen ist hier völlig normal: <i>Danke für die Einladung, dieses Mal schaffe ich es leider nicht.</i>', say: 'Ich habe drei Einladungen für dasselbe Wochenende.' },
      { bild: 'amanda/sz-kochen.webp', alt: 'Jemand kocht in einer Küche', art: 'das', wort: 'Essen', kurz: 'das gemeinsame Essen an den Feiertagen', bsp: 'Beim Essen sitzen wir manchmal drei Stunden am Tisch.', tipp: 'In Deutschland gibt es kein festes Weihnachtsessen — bei den einen Gans, bei den anderen Kartoffelsalat mit Würstchen. Die Frage <b>Was gibt es bei euch?</b> ist deshalb immer ein guter Einstieg.', say: 'Beim Essen sitzen wir manchmal drei Stunden am Tisch.' },
      { bild: 'amanda/sz-kueche.webp', alt: 'Eine Küche mit Geschirr und Zutaten', art: 'die', wort: 'Vorbereitung', kurz: 'alles, was vorher gemacht werden muss', bsp: 'Die Vorbereitung dauert länger als das Fest.', tipp: 'Das Verb ist <b>vorbereiten</b>, trennbar: <i>Ich bereite alles <u>vor</u>.</i> Und <b>sich vorbereiten auf</b> plus Akkusativ, wenn es um dich selbst geht.', say: 'Die Vorbereitung dauert länger als das Fest.' },
      { bild: 'vok-bild/die-kueste.webp', alt: 'Ein ruhiger Blick aufs Meer', art: 'die', wort: 'Ruhe', kurz: 'wenn nichts sein muss', bsp: 'Ich brauche über die Feiertage vor allem Ruhe.', tipp: 'Ein Wort, das in diesen Wochen alle benutzen: <b>zur Ruhe kommen</b> heißt, endlich abschalten. Und <b>Lass mich in Ruhe</b> heißt etwas ganz anderes — Vorsicht damit.', say: 'Ich brauche über die Feiertage vor allem Ruhe.' },
      { bild: 'amanda/sz-notfall.webp', alt: 'Eine Person telefoniert unter Zeitdruck', art: 'der', wort: 'Stress', kurz: 'wenn zu viel auf einmal ist', bsp: 'Vor den Feiertagen ist der Stress am größten.', tipp: 'Man sagt <i>Ich habe Stress</i>, <i>Ich bin im Stress</i> oder <i>Ich stehe unter Stress</i>. Und der typische Satz Ende Dezember: <b>Zwischen den Jahren wird es dann ruhiger.</b>', say: 'Vor den Feiertagen ist der Stress am größten.' },
      { bild: 'amanda/a-warten.webp', alt: 'Amanda wartet mit verschränkten Armen', art: 'die', wort: 'Erwartung', kurz: 'was andere von dir wollen', bsp: 'Bei uns sind die Erwartungen an dieses Fest sehr hoch.', tipp: 'Oft im Plural. Und ein Satz, der viel Druck herausnimmt: <i>Ich versuche, die Erwartungen etwas herunterzuschrauben.</i>', say: 'Bei uns sind die Erwartungen an dieses Fest sehr hoch.' },
      { bild: 'vok-bild/die-oma-der-opa.webp', alt: 'Großeltern sitzen zusammen', art: 'die', wort: 'Tradition', kurz: 'etwas, das jedes Jahr gleich gemacht wird', bsp: 'Das ist bei uns Tradition, seit ich klein bin.', tipp: 'Nützlich, um über zu Hause zu erzählen: <b>Bei uns ist es Tradition, dass …</b> Damit kannst du jeden Brauch erklären, ohne ein Fachwort zu brauchen.', say: 'Das ist bei uns Tradition, seit ich klein bin.' }
    ],
    spiel: { text: '💡 <strong>Spiel „Bei uns zu Hause“:</strong> Einer nennt ein Wort von der Liste. Der andere erzählt in zwei Sätzen, wie das in seinem Land oder in seiner Familie ist. Die Runde geht reihum, ohne Kommentar dazwischen.' }
  },

  konzepte: {
    tab: '🔍 Drei Zeitangaben',
    zuerst: 'dreier',
    h2: 'Im, am',
    hl: 'oder an?',
    ssub: 'In diesen Wochen redet man dauernd über Termine. Drei Muster reichen für fast alles.',
    dreier: [
      { emoji: '📅', wort: 'im + Monat', was: 'für Monate und Jahreszeiten', bsp: '<b>im</b> Dezember, <b>im</b> Advent, <b>im</b> Winter' },
      { emoji: '📆', wort: 'am + Tag', was: 'für Tage und Daten', bsp: '<b>am</b> Freitag, <b>am</b> 24., <b>am</b> ersten Advent' },
      { emoji: '🎄', wort: 'an / zu + Fest', was: 'für Feste', bsp: '<b>an</b> Weihnachten, <b>zu</b> Ostern, <b>über</b> die Feiertage' }
    ],
    paare: [
      {
        jaLabel: 'So ist es richtig', ja: 'Am 24. Dezember sind wir bei meinen Eltern.',
        jaWarumLabel: 'Warum das stimmt', jaWarum: 'Bei einem <u>Tag</u> oder <u>Datum</u> steht <b>am</b>: <i>am Freitag</i>, <i>am 24.</i>, <i>am ersten Advent</i>. Bei einem <u>Monat</u> steht <b>im</b>: <i>im Dezember</i>.',
        noLabel: 'So klingt es falsch', no: 'In 24. Dezember sind wir bei meinen Eltern.',
        noWarumLabel: 'Das Problem', noWarum: 'In vielen Sprachen steht dort <i>in</i>. Auf Deutsch entscheidet die Größe: Monat heißt <b>im</b>, Tag heißt <b>am</b>, Uhrzeit heißt <b>um</b>.'
      },
      {
        jaLabel: 'So ist es richtig', ja: 'Über die Feiertage bleiben wir zu Hause.',
        jaWarumLabel: 'Warum das stimmt', jaWarum: '<b>über</b> plus Akkusativ heißt hier: die ganze Zeit hindurch. Genauso: <i>über das Wochenende</i>, <i>über den Sommer</i>. Sehr gebräuchlich und sehr praktisch.',
        noLabel: 'So klingt es umständlich', no: 'In der Zeit von den Feiertagen bleiben wir zu Hause.',
        noWarumLabel: 'Das Problem', noWarum: 'Verständlich, aber niemand sagt das so. Zwei Wörter genügen: <b>über die Feiertage</b>. Und für die Tage zwischen dem 25. und dem 31. gibt es sogar einen eigenen Ausdruck: <b>zwischen den Jahren</b>.'
      },
      {
        jaLabel: 'So sagt man ab', ja: 'Danke für die Einladung — dieses Mal schaffe ich es leider nicht.',
        jaWarumLabel: 'Warum das funktioniert', jaWarum: 'Erst danken, dann absagen, ohne lange Erklärung. In Deutschland ist eine klare Absage höflicher als ein vages <i>Mal schauen</i> — die Gastgeber planen nämlich wirklich mit Zahlen.',
        noLabel: 'So wird es unangenehm', no: 'Vielleicht, mal sehen, ich melde mich noch.',
        noWarumLabel: 'Das Problem', noWarum: 'Wer so antwortet und dann nicht kommt, gilt hier als unzuverlässig. Sag lieber früh und deutlich ab — das nimmt niemand krumm, im Gegenteil.'
      }
    ],
    hilfe: {
      knopf: '🆘 Welche Zeitangabe nehme ich?',
      vor: 'Vier Fragen, dann steht es fest:',
      punkte: [
        '<b>Ein Monat oder eine Jahreszeit?</b> Dann <b>im</b>: <i>im Dezember</i>, <i>im Winter</i>.',
        '<b>Ein Tag oder ein Datum?</b> Dann <b>am</b>: <i>am Freitag</i>, <i>am 24.</i>',
        '<b>Ein Fest?</b> Dann <b>an</b> oder <b>zu</b>: <i>an Weihnachten</i>, <i>zu Ostern</i>. Beides ist richtig.',
        '<b>Ein ganzer Zeitraum?</b> Dann <b>über</b>: <i>über die Feiertage</i>, <i>über das Wochenende</i>.'
      ],
      nach: 'Und wenn du gar nicht weiterweißt: nimm einfach das nackte Datum ohne Präposition. <i>Wir fahren Freitag.</i> <i>Der 24. ist bei meinen Eltern.</i> Das sagen Deutsche im Alltag ständig, und es ist völlig richtig.'
    },
    tipp: { art: 'yellow', text: '🎯 <strong>Zu zweit, zwei Minuten:</strong> Einer nennt eine Zeit — <i>Dezember</i>, <i>24.</i>, <i>Weihnachten</i>, <i>Wochenende</i>. Der andere baut sofort einen Satz mit der richtigen Präposition.' }
  },

  saetze: {
    h2: 'Vier Bausteine',
    hl: 'für die Feiertagsgespräche',
    ssub: 'Erzählen, was du machst. Fragen, wie es bei anderen ist. Einladen. Und absagen, ohne jemanden zu kränken.',
    akkLabel: 'der Schritt',
    mengeLabel: 'was du damit erreichst',
    a2: [
      { titel: '1 · 🗣️ Erzählen', chips: ['Über die Feiertage bin ich zu Hause.', 'Am 24. sind wir bei meinen Eltern.', 'Bei uns gibt es …', 'Dieses Jahr mache ich es ganz ruhig.'], bsp: 'Über die Feiertage bin ich zu Hause, am 24. bei meinen Eltern.', say: 'Über die Feiertage bin ich zu Hause, am 24. bei meinen Eltern.' },
      { titel: '2 · ❓ Fragen', chips: ['Was macht ihr über die Feiertage?', 'Feiert ihr das auch?', 'Was gibt es bei euch zu essen?', 'Wie ist das in deinem Land?'], bsp: 'Und was macht ihr über die Feiertage — bleibt ihr hier?', say: 'Und was macht ihr über die Feiertage — bleibt ihr hier?' },
      { titel: '3 · 🎁 Einladen', chips: ['Komm doch vorbei!', 'Hast du am Sonntag Zeit?', 'Wir freuen uns, wenn du kommst.', 'Bring einfach nichts mit.'], bsp: 'Wenn du am Sonntag Zeit hast, komm doch einfach vorbei.', say: 'Wenn du am Sonntag Zeit hast, komm doch einfach vorbei.' },
      { titel: '4 · 🙏 Absagen', chips: ['Danke für die Einladung.', 'Dieses Mal schaffe ich es leider nicht.', 'Ein andermal sehr gern.', 'Ich melde mich im Januar.'], bsp: 'Danke für die Einladung — dieses Mal schaffe ich es leider nicht, ein andermal sehr gern.', say: 'Danke für die Einladung — dieses Mal schaffe ich es leider nicht, ein andermal sehr gern.' }
    ],
    b1: [
      { titel: '1 · 🗣️ Genauer erzählen', chips: ['Bei uns ist es Tradition, dass …', 'Wir machen es jedes Jahr gleich: …', 'Dieses Jahr wird es anders, weil …', 'Ehrlich gesagt ist mir das alles zu viel.'], bsp: 'Bei uns ist es Tradition, dass wir am 24. erst spät essen — dieses Jahr wird es anders, weil meine Schwester arbeitet.', say: 'Bei uns ist es Tradition, dass wir am 24. erst spät essen — dieses Jahr wird es anders, weil meine Schwester arbeitet.' },
      { titel: '2 · ❓ Offen fragen', chips: ['Wie läuft das bei euch ab?', 'Gibt es etwas, das ihr jedes Jahr macht?', 'Ist das für dich eher schön oder eher anstrengend?', 'Was hast du hier übernommen?'], bsp: 'Wie läuft das bei euch ab — und ist das für dich eher schön oder eher anstrengend?', say: 'Wie läuft das bei euch ab — und ist das für dich eher schön oder eher anstrengend?' },
      { titel: '3 · 🎁 Herzlich einladen', chips: ['Wir würden uns freuen, wenn du dazukommst.', 'Es ist ganz unkompliziert, wirklich.', 'Du musst überhaupt nichts mitbringen.', 'Sag einfach kurz Bescheid, ob es passt.'], bsp: 'Wir würden uns freuen, wenn du dazukommst — es ist ganz unkompliziert, sag einfach kurz Bescheid.', say: 'Wir würden uns freuen, wenn du dazukommst — es ist ganz unkompliziert, sag einfach kurz Bescheid.' },
      { titel: '4 · 🙏 Klar absagen', chips: ['Das ist lieb, aber es geht dieses Mal nicht.', 'Ich sage lieber gleich ab, als euch hinzuhalten.', 'Im Januar hole ich das nach.', 'Ich brauche über die Feiertage wirklich Ruhe.'], bsp: 'Das ist lieb von euch. Ich sage aber lieber gleich ab, als euch hinzuhalten — im Januar hole ich das nach.', say: 'Das ist lieb von euch. Ich sage aber lieber gleich ab, als euch hinzuhalten — im Januar hole ich das nach.' }
    ],
    tipp: { art: 'teal', text: '📣 <strong>Reihum:</strong> Jeder beantwortet die Frage <i>Was machst du über die Feiertage?</i> — einmal in einem Satz, wie beim Small Talk, und einmal in fünf Sätzen, wie unter Freunden.' }
  },

  dialoge: {
    h2: 'Vier Situationen —',
    hl: 'zwei Runden',
    ssub: '<b>Runde 1:</b> Lest den Dialog zu zweit laut. <b>Runde 2:</b> Klappt die Zeilen zu und sprecht frei — nur die Stichwörter bleiben.',
    liste: [
      {
        bild: 'amanda/a-kaffee.webp', alt: 'Zwei Kaffeebecher in einer Büroküche',
        titel: 'Die Frage in der Kaffeeküche',
        situation: 'A stellt die Standardfrage der Adventszeit. B ist neu hier und weiß nicht, wie ausführlich man antwortet.',
        zeilen: [
          { wer: 'a', text: 'Und, was machen Sie über die Feiertage?' },
          { wer: 'b', text: 'Ganz ruhig, zu Hause. Und Sie?', cue: 'Eine kurze Antwort plus Rückfrage — mehr ist beim Small Talk nicht nötig. <b>über die Feiertage</b> heißt: die ganze Zeit hindurch.' },
          { wer: 'a', text: 'Wir fahren am 23. zu meinen Eltern und bleiben bis zum 27.' },
          { wer: 'b', text: 'Klingt schön. Fahren Sie weit?', cue: '<b>am 23.</b> für den Tag, <b>bis zum 27.</b> für das Ende. Und B hält das Gespräch mit einer kleinen Frage am Laufen.' },
          { wer: 'a', text: 'Drei Stunden. Feiern Sie das bei sich zu Hause auch?' },
          { wer: 'b', text: 'Anders, aber wir feiern. Im Januar erzähle ich Ihnen mal davon.', cue: 'Eine freundliche Antwort, die nichts erklären muss. <i>Im Januar erzähle ich Ihnen davon</i> hält die Tür offen, ohne jetzt ins Detail zu gehen.' }
        ]
      },
      {
        bild: 'amanda/sz-handel.webp', alt: 'Stände mit Lichtern auf einem Markt',
        titel: 'Auf dem Weihnachtsmarkt',
        situation: 'A war noch nie auf einem deutschen Weihnachtsmarkt. B erklärt, wie das hier läuft — auch mit den Bechern.',
        zeilen: [
          { wer: 'a', text: 'Warum muss ich für den Becher extra bezahlen?' },
          { wer: 'b', text: 'Das ist Pfand. Bring ihn zurück, dann bekommst du das Geld wieder.', cue: 'Dasselbe <b>Pfand</b> wie auf der Flasche. Und der Becher ist der häufigste Grund für Verwirrung beim ersten Besuch.' },
          { wer: 'a', text: 'Ah, verstanden. Und wie lange hat der Markt auf?' },
          { wer: 'b', text: 'Bis zum 23. Am 24. macht hier alles zu, auch die Supermärkte.', cue: '<b>bis zum 23.</b> und <b>am 24.</b> — zwei Zeitangaben in einem Satz. Und die Information dahinter ist wirklich wichtig.' },
          { wer: 'a', text: 'Wirklich alles? Auch am 25. und 26.?' },
          { wer: 'b', text: 'Alles. Deshalb kaufen hier alle am 23. wie verrückt ein.', cue: 'Der Satz, der jedem Neuankömmling einmal den Heiligabend rettet. <b>wie verrückt</b> ist Umgangssprache für: sehr viel, sehr hektisch.' }
        ]
      },
      {
        bild: 'bilder/lesen/mail.webp', alt: 'Ein Handy mit einer Einladung auf dem Bildschirm',
        titel: 'Drei Einladungen, ein Wochenende',
        situation: 'A hat zu viele Einladungen und weiß nicht, wie man absagt. B rät zu Klarheit.',
        zeilen: [
          { wer: 'a', text: 'Ich habe drei Einladungen für dasselbe Wochenende. Was mache ich jetzt?' },
          { wer: 'b', text: 'Zwei absagen. Und zwar gleich, nicht erst am Freitag.', cue: '<b>absagen</b> — trennbar: <i>Ich sage <u>ab</u>.</i> Und der Zeitpunkt ist hier wichtiger als die Begründung.' },
          { wer: 'a', text: 'Ist das nicht unhöflich? Ich kenne die Leute erst seit Kurzem.' },
          { wer: 'b', text: 'Im Gegenteil. Hier gilt ein klares Nein als höflicher als ein vages Vielleicht.', cue: '<b>Im Gegenteil</b> dreht die Annahme um. Und der Grund dahinter: Gastgeber planen mit festen Zahlen.' },
          { wer: 'a', text: 'Und was schreibe ich?' },
          { wer: 'b', text: 'Danke für die Einladung, dieses Mal schaffe ich es leider nicht. Fertig.', cue: 'Ein Satz, keine Erklärung. <b>Fertig</b> am Ende heißt: mehr braucht es wirklich nicht.' }
        ]
      },
      {
        bild: 'amanda/sz-kueche.webp', alt: 'Eine Küche mit Geschirr und Zutaten',
        titel: 'Zu viel Vorbereitung',
        situation: 'A steht schon seit Wochen unter Druck wegen des Fests. B fragt nach, wer diese Erwartungen eigentlich hat.',
        zeilen: [
          { wer: 'a', text: 'Die Vorbereitung dauert bei uns länger als das Fest selbst.' },
          { wer: 'b', text: 'Und wer erwartet das eigentlich — die anderen oder du?', cue: 'Eine Frage, die trifft. <b>erwarten</b> und das Nomen <b>die Erwartung</b> sind das Thema dieses Dialogs.' },
          { wer: 'a', text: 'Gute Frage. Wahrscheinlich vor allem ich selbst.' },
          { wer: 'b', text: 'Dann schraub die Erwartungen doch dieses Jahr mal herunter.', cue: '<b>herunterschrauben</b> — trennbar, und ein sehr schönes Bild: die Erwartungen kleiner drehen wie eine Lampe.' },
          { wer: 'a', text: 'Ich weiß nicht, ob ich das kann.' },
          { wer: 'b', text: 'Fang mit einer Sache an. Am Ende zählt sowieso nur, dass alle zusammensitzen.', cue: '<b>anfangen mit</b> plus Dativ. Und der letzte Satz ist der, den man in dieser Jahreszeit am häufigsten hört.' }
        ]
      }
    ],
    tipp: { art: 'yellow', text: '🎭 <strong>Und jetzt ihr:</strong> Spielt Dialog 1 mit euren echten Plänen. Regel: Die erste Antwort ist kurz wie beim Small Talk, danach fragt der andere einmal nach.' }
  },

  grammatik: {
    h2: '🧩 Im, am, an, über:',
    hl: 'Zeitangaben im Jahr',
    ssub: 'In diesen Wochen dreht sich fast jedes Gespräch um einen Termin. Vier Präpositionen decken alles ab.',
    intro: 'Die Regel richtet sich nach der Größe: <b>im</b> für Monate und Jahreszeiten, <b>am</b> für Tage und Daten, <b>um</b> für Uhrzeiten. Dazu kommen <b>an</b> oder <b>zu</b> für Feste und <b>über</b> für ganze Zeiträume.',
    kette: [
      { emoji: '🗓️', rolle: 'im', bsp: 'im Dezember' },
      { emoji: '📆', rolle: 'am', bsp: 'am 24.' },
      { emoji: '🕕', rolle: 'um', bsp: 'um 18 Uhr' },
      { emoji: '🎄', rolle: 'an / zu', bsp: 'an Weihnachten' }
    ],
    felder: [
      { rolle: 'Über', wort: 'Über' },
      { rolle: 'Zeitraum', wort: 'die Feiertage', hervor: true },
      { rolle: 'Verb', wort: 'bleiben' },
      { rolle: 'Rest', wort: 'wir zu Hause.' }
    ],
    bloecke: [
      {
        h2: 'Vier Größen,',
        hl: 'vier Präpositionen',
        ssub: 'Von groß nach klein — und dann noch die Sonderfälle für Feste und Zeiträume.',
        dreier: [
          { emoji: '🗓️', wort: 'im', was: 'Monat, Jahreszeit', bsp: '<b>im</b> Dezember, <b>im</b> Winter, <b>im</b> Advent' },
          { emoji: '📆', wort: 'am', was: 'Tag, Datum, Wochentag', bsp: '<b>am</b> Freitag, <b>am</b> 24., <b>am</b> Wochenende' },
          { emoji: '⏳', wort: 'über / zwischen', was: 'ganzer Zeitraum', bsp: '<b>über</b> die Feiertage, <b>zwischen</b> den Jahren' }
        ],
        chips: ['im Dezember', 'im Winter', 'am Freitag', 'am 24.', 'am ersten Advent', 'um 18 Uhr', 'an Weihnachten', 'zu Ostern', 'über die Feiertage', 'zwischen den Jahren', 'bis zum 27.', 'ab dem 2. Januar']
      },
      {
        h2: 'Und die Feste',
        hl: 'stehen ohne Artikel',
        ssub: 'Das überrascht viele — bei Festnamen fällt der Artikel einfach weg.',
        paare: [
          {
            jaLabel: 'So ist es richtig', ja: 'An Weihnachten sind wir zu Hause, zu Silvester bei Freunden.',
            jaWarumLabel: 'Warum das stimmt', jaWarum: 'Festnamen stehen ohne Artikel: <i>an <b>Weihnachten</b></i>, <i>zu <b>Ostern</b></i>, <i>zu <b>Silvester</b></i>. <b>an</b> und <b>zu</b> sind beide möglich und bedeuten dasselbe.',
            noLabel: 'So klingt es falsch', no: 'An dem Weihnachten sind wir zu Hause.',
            noWarumLabel: 'Das Problem', noWarum: 'Der Artikel gehört nicht dazu. Nur wenn du das Fest genauer bestimmst, kommt einer dazu: <i>an <b>dem</b> Weihnachten, als es geschneit hat</i> — und das ist selten.'
          }
        ]
      }
    ],
    bauH2: '🧱 Bau die Sätze selbst',
    bauSsub: 'Tippe die Teile in der richtigen Reihenfolge an. Achte auf die Präposition am Anfang.',
    storyH2: '📖 Und jetzt im Zusammenhang',
    storySsub: 'Ein Dezember von Anfang bis Ende. Wähle in jeder Lücke die richtige Zeitangabe.',
    hilfe: {
      knopf: '🆘 Im, am oder an?',
      vor: 'Von groß nach klein, dann steht es fest:',
      punkte: [
        '<b>Monat oder Jahreszeit</b> → <b>im</b>: <i>im Dezember</i>, <i>im Winter</i>.',
        '<b>Tag, Datum oder Wochentag</b> → <b>am</b>: <i>am Freitag</i>, <i>am 24.</i>',
        '<b>Uhrzeit</b> → <b>um</b>: <i>um 18 Uhr</i>.',
        '<b>Fest</b> → <b>an</b> oder <b>zu</b>, ohne Artikel: <i>an Weihnachten</i>, <i>zu Ostern</i>.'
      ],
      nach: 'Und ein Sonderfall, den nur Deutsche kennen: die Tage zwischen dem 25. Dezember und dem 1. Januar heißen <b>zwischen den Jahren</b>. In dieser Zeit arbeitet fast niemand, und alle sagen, es sei die schönste Woche.'
    }
  },

  rollenspiele: {
    h2: '🎭 Drei Situationen',
    hl: 'zu zweit',
    ssub: 'Einer fragt, einer erzählt. Danach tauschen — beim zweiten Mal ohne die Sätze unten. Mindestens drei Zeitangaben pro Runde.',
    liste: [
      {
        titel: 'Die Frage in der Kaffeeküche',
        situation: 'A stellt die übliche Frage nach den Feiertagen. B antwortet erst kurz, dann — nach einer Nachfrage — etwas ausführlicher.',
        a2: ['Was machen Sie über die Feiertage?', 'Fahren Sie weit?', 'Feiern Sie das bei sich auch?', 'Dann wünsche ich Ihnen schöne Tage!'],
        b1: ['Ganz ruhig, zu Hause — und Sie?', 'Wir fahren am 23. los und bleiben bis zum 27.', 'Bei uns ist es anders, aber wir feiern auch', 'Im Januar erzähle ich Ihnen gern mehr davon'],
        gut: 'Die erste Antwort war kurz, die zweite etwas länger. Und mindestens dreimal kam eine Zeitangabe vor — <i>über</i>, <i>am</i>, <i>bis zum</i>.'
      },
      {
        titel: 'Zum ersten Mal auf dem Weihnachtsmarkt',
        situation: 'A war noch nie hier und versteht die Sache mit dem Becher nicht. B erklärt geduldig — und warnt vor den geschlossenen Läden.',
        a2: ['Warum zahle ich für den Becher extra?', 'Wie lange hat der Markt auf?', 'Sind am 25. wirklich alle Läden zu?', 'Gut, dass Sie es sagen'],
        b1: ['Das ist Pfand, bring ihn zurück und du bekommst das Geld wieder', 'Bis zum 23., danach macht hier alles zu', 'Auch die Supermärkte, deshalb kaufen alle am 23. wie verrückt ein', 'Am besten besorgst du alles schon am 22.'],
        gut: 'Beide haben über <i>Pfand</i> und über die Öffnungszeiten geredet. Und A weiß jetzt, was am 24. passiert.'
      },
      {
        titel: 'Höflich absagen',
        situation: 'A hat drei Einladungen für dasselbe Wochenende und will niemanden verletzen. B rät zu einer klaren, frühen Absage.',
        a2: ['Ich habe drei Einladungen für dasselbe Wochenende', 'Ist absagen nicht unhöflich?', 'Was schreibe ich denn?', 'Und wenn sie beleidigt sind?'],
        b1: ['Sag zwei ab, und zwar gleich, nicht erst am Freitag', 'Hier gilt ein klares Nein als höflicher als ein vages Vielleicht', 'Danke für die Einladung, dieses Mal schaffe ich es leider nicht — mehr braucht es nicht', 'Die Gastgeber planen mit Zahlen, die sind eher froh'],
        gut: 'A hat eine Absage laut formuliert, ohne sich lange zu rechtfertigen. Und beide haben verstanden, warum früh besser ist als spät.'
      }
    ]
  },

  challenge: {
    ssub: 'Neunzig Sekunden über deinen Dezember: Was machst du, wen siehst du, worauf freust du dich — und was ist dir zu viel?',
    hilfe: {
      knopf: '🆘 Mir fällt nichts ein',
      vor: 'Vier Sätze, dann trägt dich die Zeit:',
      punkte: [
        '<b>Was:</b> <i>Über die Feiertage bin ich …</i>',
        '<b>Wann:</b> <i>Am 24. machen wir …, am 25. …</i>',
        '<b>Bei uns zu Hause:</b> <i>Bei uns ist es Tradition, dass …</i>',
        '<b>Ehrlich:</b> <i>Am meisten freue ich mich auf …, zu viel ist mir …</i>'
      ],
      nach: 'Und wenn du das Fest gar nicht feierst: umso besser. Erzähl, was du stattdessen machst und wie die Wochen für dich sind — genau darüber redet in Deutschland kaum jemand, und alle hören zu.'
    },
    tipp: { art: 'yellow', text: '⏱️ <strong>Spielregel:</strong> In jeder Runde müssen <u>drei verschiedene Zeitangaben</u> vorkommen — <i>im</i>, <i>am</i>, <i>an</i>, <i>über</i> oder <i>zwischen</i>. Wer keine benutzt, fängt noch einmal an.' }
  },

  ueben: { tipp: { art: 'teal', text: '📣 <strong>Danach laut:</strong> Einer nennt eine Zeit, der Nächste baut einen Satz mit der richtigen Präposition. Reihum, schnell, ohne Nachdenken.' } },

  hausaufgabe: {
    h2: '📮 Deine Hausaufgabe bis',
    hl: 'Mittwoch',
    ssub: 'Vier kleine Aufgaben, zusammen etwa 25 Minuten. Am Mittwoch geht es weiter mit der großen Debatte über genau dieses Thema.',
    warum: { text: '💡 <strong>Warum das hilft:</strong> In den nächsten vier Wochen wirst du diese Frage täglich gestellt bekommen — im Büro, beim Arzt, im Treppenhaus. Wer eine kurze und eine lange Antwort parat hat, muss nie wieder überlegen, wie ausführlich er sein soll.' },
    a2: [
      { emoji: '✍️', titel: 'Zwölf Sätze', zeit: '6 Min', text: 'Schreib zu jedem der zwölf Wörter einen Satz aus deinem eigenen Leben — mit Artikel und mit einer Zeitangabe.' },
      { emoji: '🗓️', titel: 'Zehn Zeitangaben', zeit: '6 Min', text: 'Schreib zehn Sätze mit <i>im</i>, <i>am</i>, <i>an</i>, <i>über</i> und <i>zwischen den Jahren</i> — jede Präposition mindestens zweimal.' },
      { emoji: '🎙️', titel: 'Dein Dezember', zeit: '6 Min', text: 'Nimm eine Sprachnachricht auf: Was machst du im Dezember, wen siehst du, worauf freust du dich?' },
      { emoji: '📩', titel: 'Einmal absagen', zeit: '7 Min', text: 'Schreib eine freundliche Absage auf eine Einladung — höchstens drei Sätze, ohne lange Erklärung.' }
    ],
    b1: [
      { emoji: '🌍', titel: 'Der Vergleich', zeit: '8 Min', text: 'Schreib zehn Sätze darüber, wie diese Jahreszeit in deinem Land ist und was hier anders läuft. Nimm konkrete Beispiele.' },
      { emoji: '📝', titel: 'Eine Einladung schreiben', zeit: '6 Min', text: 'Schreib eine Einladung an Nachbarn oder Kollegen: Wann, wo, wie lange, und dass niemand etwas mitbringen muss.' },
      { emoji: '🎙️', titel: 'Zwei Minuten erklären', zeit: '6 Min', text: 'Nimm auf, wie du jemandem ein Fest aus deiner Heimat erklärst — ohne ein einziges Wort in deiner Sprache zu benutzen.' },
      { emoji: '👂', titel: 'Zuhören', zeit: '5 Min', text: 'Achte diese Woche darauf, wie Leute über die Feiertage sprechen, und notier fünf Sätze mit Zeitangaben wörtlich.' }
    ],
    hilfeA2: {
      knopf: '💡 Beispiel ansehen (Aufgabe 2)',
      vor: 'So sehen die zehn Sätze aus:',
      punkte: [
        '<i><b>Im</b> Dezember wird es hier schon um vier dunkel.</i>',
        '<i><b>Am</b> 24. bin ich bei meinen Eltern.</i>',
        '<i><b>An</b> Weihnachten gibt es bei uns immer dasselbe Essen.</i>',
        '<i><b>Über</b> die Feiertage bleibe ich zu Hause.</i>',
        '<i><b>Zwischen</b> den Jahren habe ich frei.</i>'
      ],
      nach: 'Ein einziger Test genügt: Frag dich, wie groß der Zeitraum ist. Monat heißt <b>im</b>, Tag heißt <b>am</b>, Uhrzeit heißt <b>um</b> — und ein Fest steht ohne Artikel mit <b>an</b> oder <b>zu</b>.'
    },
    hilfeB1: {
      knopf: '💡 Beispiel ansehen (Aufgabe 2)',
      vor: 'Das sind die Stellen, auf die es in der Einladung ankommt:',
      punkte: [
        '<b>Anlass:</b> <i>Wir machen am Samstag, dem 12., einen kleinen Adventsnachmittag.</i>',
        '<b>Zeit und Ort:</b> <i>Ab 15 Uhr bei uns in der Wohnung, es geht bis ungefähr 18 Uhr.</i>',
        '<b>Druck rausnehmen:</b> <i>Es ist ganz unkompliziert, ihr müsst nichts mitbringen.</i>',
        '<b>Rückmeldung:</b> <i>Sagt einfach kurz Bescheid, ob es bei euch passt.</i>',
        '<b>Schluss:</b> <i>Wir würden uns freuen — und wenn es nicht klappt, ist das auch völlig in Ordnung.</i>'
      ],
      nach: 'Und ein Hinweis, der in Deutschland viel wert ist: Schreib immer <b>von wann bis wann</b>. Gäste planen hier mit Uhrzeiten, und eine Einladung ohne Ende macht mehr Leuten Stress, als man denkt.'
    },
    abgabe: 'Schick mir bis Mittwoch 12 Uhr deine zehn Zeitangaben und die Sprachnachricht — ich sage dir, wo <i>im</i> und <i>am</i> verrutscht sind.',
    ausblick: 'Am Mittwoch: die große Debatte. Muss man Feiertage mit der Familie verbringen? Drei gegen drei, mit allem, was du heute gesammelt hast.'
  },

  daten: {
    sk: [
      'Was machst du über die Feiertage? Antworte einmal kurz und einmal lang.',
      'Erklär ein Fest aus deiner Heimat, ohne ein Wort deiner Sprache zu benutzen.',
      'Jemand lädt dich ein, du kannst nicht. Sag höflich ab.',
      'Erzähl von einer Tradition, die es bei dir zu Hause gibt.',
      'Was findest du an dieser Jahreszeit schön, was anstrengend?',
      'Erklär jemandem, was am 24. Dezember in Deutschland passiert.',
      'Wie viel Familie ist für dich genug? Sag es freundlich.',
      'Lade jemanden ein — mit Zeit, Ort und ohne Druck.',
      'Sag fünf Sätze mit <i>im</i>, <i>am</i>, <i>an</i> und <i>über</i>.',
      'Worauf freust du dich in den nächsten Wochen am meisten?'
    ],
    w90: [
      { w: 'der Advent', b: 'amanda/sz-feste.webp', h: ['vier Wochen', 'die Kerze', 'der Sonntag', 'dunkel', 'warten'] },
      { w: 'der Weihnachtsmarkt', b: 'amanda/sz-handel.webp', h: ['der Stand', 'das Licht', 'der Becher', 'das Pfand', 'draußen'] },
      { w: 'der Feiertag', b: 'vok-bild/der-termin.webp', h: ['frei', 'geschlossen', 'der Kalender', 'arbeiten', 'der 25.'] },
      { w: 'die Familie', b: 'vok-bild/die-familie.webp', h: ['zusammen', 'die Eltern', 'besuchen', 'der Tisch', 'jedes Jahr'] },
      { w: 'die Verwandten', b: 'vok-bild/die-geschwister.webp', h: ['die Tante', 'der Onkel', 'einmal im Jahr', 'einladen', 'die Cousine'] },
      { w: 'die Einladung', b: 'bilder/lesen/mail.webp', h: ['bekommen', 'annehmen', 'absagen', 'Bescheid geben', 'der Gastgeber'] },
      { w: 'das Essen', b: 'amanda/sz-kochen.webp', h: ['kochen', 'der Tisch', 'lange sitzen', 'die Gans', 'satt'] },
      { w: 'die Vorbereitung', b: 'amanda/sz-kueche.webp', h: ['vorbereiten', 'einkaufen', 'aufräumen', 'dauern', 'vorher'] },
      { w: 'die Ruhe', b: 'vok-bild/die-kueste.webp', h: ['abschalten', 'still', 'zur Ruhe kommen', 'nichts tun', 'der Abend'] },
      { w: 'der Stress', b: 'amanda/sz-notfall.webp', h: ['zu viel', 'hetzen', 'der Termin', 'die Erwartung', 'vor den Feiertagen'] }
    ],
    quiz: [
      { q: 'Was ist der <u>Advent</u>?', o: ['die vier Wochen vor Weihnachten', 'der 24. Dezember', 'die Woche nach Weihnachten', 'der erste Januar'], c: 0, e: 'Vier Sonntage, an denen in vielen Familien jeweils eine Kerze mehr angezündet wird. Und man sagt <b>im</b> Advent.' },
      { q: 'Welche Zeitangabe passt zu einem Datum?', o: ['am 24.', 'im 24.', 'an 24.', 'um 24.'], c: 0, e: 'Tage und Daten bekommen <b>am</b>, Monate <b>im</b>, Uhrzeiten <b>um</b>.' },
      { q: 'Wie sagt man es bei einem Fest?', o: ['an Weihnachten', 'am Weihnachten', 'im Weihnachten', 'an dem Weihnachten'], c: 0, e: 'Festnamen stehen ohne Artikel, mit <b>an</b> oder <b>zu</b>: <i>an Weihnachten</i>, <i>zu Ostern</i>, <i>zu Silvester</i>.' },
      { q: 'Was heißt <u>zwischen den Jahren</u>?', o: ['die Tage zwischen dem 25.12. und dem 1.1.', 'die Zeit vor Weihnachten', 'jedes zweite Jahr', 'die Nacht zu Silvester'], c: 0, e: 'Eine Woche, in der in Deutschland fast niemand arbeitet — und über die alle sagen, es sei die ruhigste Zeit im Jahr.' },
      { q: 'Was passiert am 25. und 26. Dezember?', o: ['Alle Geschäfte sind zu, auch die Supermärkte.', 'Die Läden haben länger auf.', 'Nur Supermärkte haben auf.', 'Es ändert sich nichts.'], c: 0, e: 'Deshalb kaufen hier alle am 23. ein. Wer das nicht weiß, steht an Heiligabend vor verschlossenen Türen.' },
      { q: 'Wie sagst du eine Einladung höflich ab?', o: ['Danke für die Einladung, dieses Mal schaffe ich es leider nicht.', 'Vielleicht, mal sehen.', 'Ich melde mich noch.', 'Ich weiß es noch nicht genau.'], c: 0, e: 'In Deutschland gilt ein klares Nein als höflicher als ein vages Vielleicht — Gastgeber planen mit festen Zahlen.' },
      { q: 'Was bedeutet <u>über die Feiertage</u>?', o: ['die ganze Zeit der Feiertage hindurch', 'nach den Feiertagen', 'nur am ersten Feiertag', 'anstatt der Feiertage'], c: 0, e: '<b>über</b> plus Akkusativ für einen ganzen Zeitraum. Genauso: <i>über das Wochenende</i>, <i>über den Sommer</i>.' },
      { q: 'Welcher Satz ist richtig?', o: ['Im Dezember wird es früh dunkel.', 'Am Dezember wird es früh dunkel.', 'An Dezember wird es früh dunkel.', 'Um Dezember wird es früh dunkel.'], c: 0, e: 'Monate und Jahreszeiten bekommen immer <b>im</b>: <i>im Dezember</i>, <i>im Winter</i>, <i>im Advent</i>.' }
    ],
    gap: [
      { t: '___ Dezember wird es hier schon um vier dunkel.', o: ['Im', 'Am', 'An', 'Um'], a: 'Im' },
      { t: '___ 24. sind wir bei meinen Eltern.', o: ['Am', 'Im', 'An', 'Über'], a: 'Am' },
      { t: '___ Weihnachten gibt es bei uns immer dasselbe Essen.', o: ['An', 'Am', 'Im', 'Um'], a: 'An' },
      { t: '___ die Feiertage bleiben wir zu Hause.', o: ['Über', 'Am', 'Im', 'An'], a: 'Über' },
      { t: '___ den Jahren habe ich frei.', o: ['Zwischen', 'Über', 'An', 'Im'], a: 'Zwischen' },
      { t: 'Wir gehen am Freitag ___ den Weihnachtsmarkt.', o: ['auf', 'an', 'in', 'zu'], a: 'auf' },
      { t: 'Danke für die ___ — dieses Mal schaffe ich es leider nicht.', o: ['Einladung', 'Erwartung', 'Vorbereitung', 'Tradition'], a: 'Einladung' },
      { t: 'Bei uns ist es ___, dass wir erst spät essen.', o: ['Tradition', 'Ruhe', 'Stress', 'Feiertag'], a: 'Tradition' }
    ],
    gbau: [
      { f: 'Bau den Satz mit einem Datum:', t: ['Am', '24.', 'sind', 'wir', 'bei', 'meinen', 'Eltern'], l: ['Am', '24.', 'sind', 'wir', 'bei', 'meinen', 'Eltern'], e: 'Steht die Zeitangabe vorn, rutscht das Verb an Position zwei. Und <b>bei</b> plus Dativ für den Ort.' },
      { f: 'Bau den Satz mit einem Zeitraum:', t: ['Über', 'die', 'Feiertage', 'bleiben', 'wir', 'zu', 'Hause'], l: ['Über', 'die', 'Feiertage', 'bleiben', 'wir', 'zu', 'Hause'], e: '<b>über</b> plus Akkusativ heißt: die ganze Zeit hindurch. Und wieder das Verb an Position zwei.' },
      { f: 'Bau die Absage:', t: ['Danke', 'für', 'die', 'Einladung', 'dieses', 'Mal', 'schaffe', 'ich', 'es', 'leider', 'nicht'], l: ['Danke', 'für', 'die', 'Einladung', 'dieses', 'Mal', 'schaffe', 'ich', 'es', 'leider', 'nicht'], e: 'Erst danken, dann absagen — und keine Erklärung dahinter. Genau so ist es hier am höflichsten.' },
      { f: 'Bau den Satz über eine Tradition:', t: ['Bei', 'uns', 'ist', 'es', 'Tradition', 'dass', 'alle', 'zusammen', 'kochen'], l: ['Bei', 'uns', 'ist', 'es', 'Tradition', 'dass', 'alle', 'zusammen', 'kochen'], e: 'Nach <b>dass</b> geht das Verb ans Ende. Mit diesem Satzmuster kannst du jeden Brauch erklären.' }
    ],
    gstory: {
      t: '___ Dezember verändert sich hier alles. Es wird früh dunkel, und ___ ersten Advent stehen überall Lichter. Wir gehen fast jedes Wochenende ___ den Weihnachtsmarkt, obwohl es kalt ist. ___ 23. kaufe ich alles ein, denn ___ 24. macht wirklich jedes Geschäft zu. ___ Weihnachten sind wir bei meinen Eltern, und ___ die Feiertage bleiben wir dort. Am schönsten ist aber die Woche ___ den Jahren: Da arbeitet fast niemand, und man kommt endlich zur Ruhe.',
      o: ['Im', 'am', 'auf', 'Am', 'um', 'An', 'über', 'zwischen'],
      a: [['Im'], ['am'], ['auf'], ['Am'], ['am'], ['An'], ['über'], ['zwischen']]
    }
  }
};
fs.writeFileSync(__dirname + '/../stunden/w11-c1-advent-feiertage.json', JSON.stringify(S, null, 2) + '\n', 'utf8');
console.log('geschrieben');
