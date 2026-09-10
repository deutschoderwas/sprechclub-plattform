'use strict';
const fs = require('fs');
const S = {
  datei: 'Unterricht-ab-14-09/w10-d-teil1-vorschlag-aufbauen-b1b2.html',
  eyebrow: 'deutschoderwas · Sprechclub · Woche 10 · Strang D · Teil 1 · Dienstag, 17. November',
  titel: 'Einen Vorschlag machen —',
  hl: 'so, dass jemand ja sagt',
  stufe: 'B1/B2',
  termin: 'Di 17.11. 17:30 und 19:30 · Strang D · Teil 1 · B1 ⇄ B2',
  untertitel: 'Die meisten Vorschläge scheitern nicht am Inhalt, sondern am Aufbau. Wer mit <i>Ich möchte gern</i> anfängt, redet über sich. Wer mit der Lage anfängt und dann sagt, was der andere davon hat, wird gehört. Vier Schritte, immer dieselben — heute übst du sie durch.',
  fuss: 'Einen Vorschlag machen · Teil 1 · B1/B2 · Woche 10 · am Donnerstag: auf Einwände reagieren',
  niveau: { a: 'B1 · sicherer', b: 'B2 · feiner', hinweis: 'Gleiches Thema, andere Sätze. Wechsle jederzeit — probier ruhig beide Seiten aus.' },

  einstieg: [
    {
      h2: 'Nicht was du willst,',
      hl: 'sondern was er davon hat',
      ssub: 'Der häufigste Fehler ist der Anfang. <i>Ich hätte gern früher Feierabend</i> ist ein Wunsch. <i>Nachmittags ruft hier sowieso niemand an — wenn ich früher anfange, ist morgens jemand für die Kunden da</i> ist ein Vorschlag. Derselbe Inhalt, ein völlig anderes Gespräch.',
      bild: 'amanda/sz-buero.webp',
      alt: 'Zwei Kolleginnen besprechen etwas an einem Schreibtisch',
      fragenA2: [
        'Welchen Vorschlag hast du zuletzt gemacht?',
        'Hat jemand ja gesagt oder nein?',
        'Fällt es dir leicht, etwas vorzuschlagen?'
      ],
      fragenB1: [
        'Woran merkst du, dass jemand deinen Vorschlag nicht ernst nimmt?',
        'Wie fängst du normalerweise an?',
        'Wo würdest du gern etwas ändern, sagst es aber nicht?'
      ],
      tipp: { art: 'teal', text: '🔑 <strong>Die vier Schritte:</strong> <b>1 Lage</b> — was ist gerade so. <b>2 Vorschlag</b> — ein Satz, konkret. <b>3 Nutzen</b> — was der andere davon hat. <b>4 Frage</b> — was hältst du davon? Immer in dieser Reihenfolge.' }
    },
    {
      h2: 'Und warum',
      hl: 'die Frage am Ende so wichtig ist',
      ssub: 'Wer seinen Vorschlag mit einem Punkt beendet, zwingt den anderen zu ja oder nein. Wer mit einer Frage endet, lädt ihn ein, mitzubauen. Und ein Vorschlag, an dem jemand mitgebaut hat, wird selten abgelehnt.',
      bild: 'amanda/a-zeigen.webp',
      alt: 'Amanda zeigt auf einen Punkt und erklärt etwas',
      fragenA2: [
        'Fragst du am Ende nach, was der andere denkt?',
        'Wie reagierst du, wenn jemand nein sagt?',
        'Machst du lieber einen Vorschlag oder zwei?'
      ],
      fragenB1: [
        'Warum wirkt eine Frage am Ende stärker als eine Feststellung?',
        'Wann ist es besser, zwei Möglichkeiten anzubieten?',
        'Wie viel Vorbereitung braucht ein guter Vorschlag?'
      ],
      tipp: { art: 'yellow', text: '💡 <strong>Der wirksamste Satz:</strong> <b>Was halten Sie davon?</b> Vier Wörter, und der andere ist im Gespräch statt in der Verteidigung. Sag ihn immer am Ende — auch wenn du dir sicher bist.' }
    }
  ],

  wortschatz: {
    h2: 'Zwölf Wörter,',
    hl: 'mit denen du deinen Vorschlag baust',
    ssub: 'Sag jedes laut. Und sag bei jedem gleich dazu, in welchem der vier Schritte du es brauchst.',
    karten: [
      { bild: 'vok-bild/der-vorschlag.webp', alt: 'Eine Hand hebt sich in einer Besprechung', art: 'der', wort: 'Vorschlag', kurz: 'die Idee, die du anbietest', bsp: 'Ich hätte da einen Vorschlag.', tipp: 'Einen Vorschlag <b>macht</b> man. Und der beste Einstieg ist der leiseste: <i>Ich hätte da einen Vorschlag</i> — damit nimmst du dem Satz jeden Druck.', say: 'Ich hätte da einen Vorschlag.' },
      { bild: 'amanda/sz-heikel.webp', alt: 'Zwei Menschen sitzen vor Unterlagen und überlegen', art: 'die', wort: 'Lage', kurz: 'wie es gerade aussieht', bsp: 'Die Lage ist gerade so: Wir sind zu zweit für drei Schichten.', tipp: 'Schritt eins. Beschreib die Lage in einem Satz und ohne Vorwurf. Wer mit <i>Sie machen das immer so</i> anfängt, hat schon verloren.', say: 'Die Lage ist gerade so: Wir sind zu zweit für drei Schichten.' },
      { bild: 'amanda/amanda-super.webp', alt: 'Amanda hebt anerkennend den Daumen', art: 'der', wort: 'Vorteil', kurz: 'was gut daran ist', bsp: 'Der Vorteil wäre, dass morgens jemand da ist.', tipp: 'Schritt drei, das Herzstück. Bau ihn immer mit <b>der Vorteil wäre, dass …</b> — der Konjunktiv macht daraus ein Angebot statt einer Behauptung.', say: 'Der Vorteil wäre, dass morgens jemand da ist.' },
      { bild: 'amanda/amanda-ups.webp', alt: 'Amanda hält sich die Hand vor den Mund', art: 'der', wort: 'Nachteil', kurz: 'was schlecht daran ist', bsp: 'Der Nachteil ist, dass ich freitags früher weg bin.', tipp: 'Nenn ihn selbst. Wer den Nachteil seines eigenen Vorschlags zugibt, wirkt sofort glaubwürdiger — und nimmt dem anderen das erste Gegenargument weg.', say: 'Der Nachteil ist, dass ich freitags früher weg bin.' },
      { bild: 'vok-bild/die-uhrzeit.webp', alt: 'Eine Uhr zeigt kurz vor halb sechs', art: 'der', wort: 'Zeitpunkt', kurz: 'wann etwas passiert', bsp: 'Der Zeitpunkt ist gut, weil gerade wenig los ist.', tipp: 'Sehr nützlich: <b>Der Zeitpunkt wäre gut, weil …</b> Damit erklärst du, warum jetzt und nicht irgendwann — und das nimmt dem <i>später vielleicht</i> die Luft.', say: 'Der Zeitpunkt ist gut, weil gerade wenig los ist.' },
      { bild: 'amanda/a-zeigen.webp', alt: 'Amanda zeigt auf zwei Möglichkeiten', art: 'die', wort: 'Alternative', kurz: 'die andere Möglichkeit', bsp: 'Als Alternative könnten wir es auch nur einen Monat testen.', tipp: 'Zwei Möglichkeiten anzubieten ist fast immer besser als eine. Der andere entscheidet dann nicht mehr <i>ob</i>, sondern <i>welche</i> — ein alter, sehr wirksamer Trick.', say: 'Als Alternative könnten wir es auch nur einen Monat testen.' },
      { bild: 'amanda/sz-buero.webp', alt: 'Zwei Personen notieren etwas gemeinsam', art: 'die', wort: 'Absprache', kurz: 'was ihr gemeinsam festlegt', bsp: 'Halten wir es als Absprache fest, dann vergisst es niemand.', tipp: 'Am Ende eines guten Gesprächs steht immer eine Absprache. Eine Absprache <b>trifft</b> man — dasselbe Verb wie bei der Entscheidung.', say: 'Halten wir es als Absprache fest, dann vergisst es niemand.' },
      { bild: 'amanda/a-klatschen.webp', alt: 'Amanda klatscht anerkennend', art: 'die', wort: 'Zustimmung', kurz: 'wenn jemand ja sagt', bsp: 'Ohne die Zustimmung vom Chef geht es nicht.', tipp: 'Das Verb ist <b>zustimmen</b> mit Dativ: <i>Ich stimme <b>dem</b> Vorschlag zu.</i> Und wenn du dich absichern willst: <i>Wer muss dem zustimmen?</i>', say: 'Ohne die Zustimmung vom Chef geht es nicht.' },
      { bild: 'vok-bild/der-mietvertrag.webp', alt: 'Ein Vertrag liegt auf einem Tisch', art: 'die', wort: 'Bedingung', kurz: 'was erfüllt sein muss', bsp: 'Unter einer Bedingung: Wir schauen in vier Wochen noch einmal drauf.', tipp: 'Eine Bedingung <b>stellt</b> man. Und sie ist im Gespräch ein Geschenk: Wer eine Bedingung nennt, sagt damit eigentlich ja.', say: 'Unter einer Bedingung: Wir schauen in vier Wochen noch einmal drauf.' },
      { bild: 'amanda/sz-bau.webp', alt: 'Werkzeug und Material auf einer Baustelle', art: 'der', wort: 'Aufwand', kurz: 'wie viel Arbeit oder Geld nötig ist', bsp: 'Der Aufwand hält sich in Grenzen.', tipp: '<b>Der Aufwand hält sich in Grenzen</b> heißt: Es ist nicht viel Arbeit. Ein Satz, der in deutschen Besprechungen fast jeden Vorschlag rettet.', say: 'Der Aufwand hält sich in Grenzen.' },
      { bild: 'amanda/a-pokal.webp', alt: 'Amanda hält einen Pokal in die Höhe', art: 'das', wort: 'Ziel', kurz: 'was am Ende dabei herauskommen soll', bsp: 'Das Ziel ist, dass niemand mehr zweimal anrufen muss.', tipp: 'Nenn das Ziel früh. Wer weiß, worauf du hinauswillst, hört anders zu. Und du kannst später darauf zurückkommen: <i>Das Ziel war ja, dass …</i>', say: 'Das Ziel ist, dass niemand mehr zweimal anrufen muss.' },
      { bild: 'vok-bild/die-meinung.webp', alt: 'Eine Sprechblase über einem Kopf', art: 'der', wort: 'Einwand', kurz: 'der Grund, der dagegen spricht', bsp: 'Wenn es Einwände gibt, sagen Sie es ruhig.', tipp: 'Frag aktiv danach: <b>Gibt es Einwände?</b> Wer selbst nach den Gegengründen fragt, wirkt sicher — und hört sie, bevor sie hinter seinem Rücken besprochen werden.', say: 'Wenn es Einwände gibt, sagen Sie es ruhig.' }
    ],
    spiel: { text: '💡 <strong>Spiel „Dreißig Sekunden“:</strong> Einer nennt eine Situation — <i>zu wenig Pausen</i>, <i>zu laute Nachbarn</i>, <i>zu volle Kurse</i>. Der andere baut in dreißig Sekunden einen Vorschlag mit allen vier Schritten. Die Gruppe hört, ob der Nutzen wirklich beim anderen liegt.' }
  },

  konzepte: {
    tab: '🔍 Vier Schritte',
    zuerst: 'dreier',
    h2: 'Lage, Vorschlag,',
    hl: 'Nutzen, Frage',
    ssub: 'Immer dieselbe Reihenfolge. Sie wirkt langweilig und funktioniert genau deshalb.',
    dreier: [
      { emoji: '🧭', wort: '1 Lage und 2 Vorschlag', was: 'zwei Sätze, ohne Vorwurf', bsp: '<b>Wir sind gerade zu zweit für drei Schichten.</b> Mein Vorschlag wäre, dass ich morgens früher anfange.' },
      { emoji: '🎁', wort: '3 Nutzen', was: 'was der andere davon hat', bsp: 'Der Vorteil wäre, dass <b>morgens jemand für die Kunden da ist</b>.' },
      { emoji: '❔', wort: '4 Frage', was: 'macht aus dem Wunsch ein Gespräch', bsp: '<b>Was halten Sie davon?</b> Oder: Wäre das für Sie machbar?' }
    ],
    paare: [
      {
        jaLabel: 'So kommt es an', ja: 'Nachmittags ruft hier fast niemand an. Mein Vorschlag wäre, dass ich morgens eine Stunde früher anfange — dann ist zur besten Zeit jemand für die Kunden da. Was halten Sie davon?',
        jaWarumLabel: 'Warum das funktioniert', jaWarum: 'Alle vier Schritte in drei Sätzen: Lage, Vorschlag, Nutzen für die Firma, Frage. Der eigene Wunsch kommt gar nicht vor — und wird trotzdem erfüllt.',
        noLabel: 'So geht es unter', no: 'Ich hätte gern früher Feierabend. Geht das?',
        noWarumLabel: 'Das Problem', noWarum: 'Das ist ein Wunsch, kein Vorschlag. Der andere hört nur, was er hergeben soll, und nichts, was er bekommt. Die Antwort ist fast immer <i>schwierig</i>.'
      },
      {
        jaLabel: 'So kommt es an', ja: 'Der Nachteil ist, dass ich freitags früher weg bin. Dafür könnte ich die Telefonzeit am Montag übernehmen.',
        jaWarumLabel: 'Warum das funktioniert', jaWarum: 'Du nennst den Nachteil selbst und lieferst gleich die Lösung mit. Damit nimmst du dem anderen genau das Argument weg, mit dem er angefangen hätte.',
        noLabel: 'So geht es unter', no: 'Nachteile gibt es eigentlich keine.',
        noWarumLabel: 'Das Problem', noWarum: 'Das glaubt niemand, und ab da wird zugehört, um Lücken zu finden. Jeder Vorschlag hat einen Preis — wer ihn nennt, wirkt sicher statt naiv.'
      },
      {
        jaLabel: 'So kommt es an', ja: 'Wir könnten es einen Monat testen und dann noch einmal draufschauen.',
        jaWarumLabel: 'Warum das funktioniert', jaWarum: 'Ein Test ist keine Entscheidung. Der andere muss sich nicht festlegen, und genau deshalb sagt er viel leichter ja. Sehr oft bleibt es danach einfach so.',
        noLabel: 'So geht es unter', no: 'Also machen wir das ab jetzt so.',
        noWarumLabel: 'Das Problem', noWarum: 'Das ist keine Frage mehr, sondern eine Ansage. Wer so endet, bekommt Widerstand — auch von Leuten, die eigentlich einverstanden waren.'
      }
    ],
    hilfe: {
      knopf: '🆘 Wie fange ich an?',
      vor: 'Vier Sätze, in dieser Reihenfolge:',
      punkte: [
        '<b>Lage:</b> <i>Die Lage ist gerade so: …</i> Ein Satz, keine Klage.',
        '<b>Vorschlag:</b> <i>Mein Vorschlag wäre, dass …</i> Konkret, mit Zahl oder Datum.',
        '<b>Nutzen:</b> <i>Der Vorteil wäre, dass …</i> Und zwar für den anderen, nicht für dich.',
        '<b>Frage:</b> <i>Was halten Sie davon?</i> Oder: <i>Wäre das für Sie machbar?</i>'
      ],
      nach: 'Und wenn du merkst, dass du nervös wirst: fang mit <i>Ich hätte da einen Vorschlag</i> an und mach eine kleine Pause. Der Satz kauft dir zwei Sekunden und dem anderen Aufmerksamkeit.'
    },
    tipp: { art: 'yellow', text: '🎯 <strong>Zu zweit, zwei Minuten:</strong> Einer nennt einen Wunsch, der andere baut daraus in vier Sätzen einen Vorschlag. Die Regel: Der Wunsch selbst darf im Vorschlag nicht vorkommen.' }
  },

  saetze: {
    h2: 'Vier Bausteine',
    hl: 'für deinen Vorschlag',
    ssub: 'Für jeden Schritt drei bis vier Sätze. Such dir aus jedem Kasten einen aus, dann steht dein Vorschlag.',
    akkLabel: 'der Schritt',
    mengeLabel: 'was du damit erreichst',
    a2: [
      { titel: '1 · 🧭 Lage beschreiben', chips: ['Die Lage ist gerade so: …', 'Im Moment ist es ja so, dass …', 'Mir ist aufgefallen, dass …', 'Wir haben zurzeit das Problem, dass …'], bsp: 'Mir ist aufgefallen, dass nachmittags fast niemand anruft.', say: 'Mir ist aufgefallen, dass nachmittags fast niemand anruft.' },
      { titel: '2 · 💡 Vorschlag machen', chips: ['Mein Vorschlag wäre, dass …', 'Wie wäre es, wenn …?', 'Wir könnten es so machen: …', 'Ich hätte da eine Idee.'], bsp: 'Mein Vorschlag wäre, dass ich morgens eine Stunde früher anfange.', say: 'Mein Vorschlag wäre, dass ich morgens eine Stunde früher anfange.' },
      { titel: '3 · 🎁 Nutzen nennen', chips: ['Der Vorteil wäre, dass …', 'Dann hätten Sie …', 'Damit sparen wir …', 'So muss niemand mehr …'], bsp: 'Der Vorteil wäre, dass morgens jemand für die Kunden da ist.', say: 'Der Vorteil wäre, dass morgens jemand für die Kunden da ist.' },
      { titel: '4 · ❔ Frage stellen', chips: ['Was halten Sie davon?', 'Wäre das für Sie machbar?', 'Was meinen Sie?', 'Sollen wir es probieren?'], bsp: 'Was halten Sie davon? Wir könnten es einen Monat testen.', say: 'Was halten Sie davon? Wir könnten es einen Monat testen.' }
    ],
    b1: [
      { titel: '1 · 🧭 Lage sachlich benennen', chips: ['Nach meinem Eindruck ist es zurzeit so, dass …', 'Seit einigen Wochen fällt auf, dass …', 'Die Zahlen sagen ja, dass …', 'Es gibt da eine Stelle, die immer wieder hakt: …'], bsp: 'Seit einigen Wochen fällt auf, dass am Nachmittag kaum Anrufe kommen, am Vormittag dafür alle gleichzeitig.', say: 'Seit einigen Wochen fällt auf, dass am Nachmittag kaum Anrufe kommen, am Vormittag dafür alle gleichzeitig.' },
      { titel: '2 · 💡 Vorschlag mit Rahmen', chips: ['Ich würde vorschlagen, dass wir zunächst …', 'Denkbar wäre folgende Lösung: …', 'Ein Vorschlag, ohne dass wir uns festlegen: …', 'Man könnte es zunächst befristet versuchen.'], bsp: 'Ich würde vorschlagen, dass ich für zwei Monate eine Stunde früher anfange — befristet, damit wir es in Ruhe anschauen können.', say: 'Ich würde vorschlagen, dass ich für zwei Monate eine Stunde früher anfange — befristet, damit wir es in Ruhe anschauen können.' },
      { titel: '3 · 🎁 Nutzen und Preis', chips: ['Der Vorteil läge vor allem darin, dass …', 'Für Sie hätte das den Effekt, dass …', 'Der Nachteil ist, dass … — den würde ich so auffangen: …', 'Der Aufwand hält sich in Grenzen, weil …'], bsp: 'Für Sie hätte das den Effekt, dass zur Hauptzeit jemand erreichbar ist. Der Nachteil ist mein früherer Feierabend — den würde ich mit der Montagsschicht auffangen.', say: 'Für Sie hätte das den Effekt, dass zur Hauptzeit jemand erreichbar ist. Der Nachteil ist mein früherer Feierabend — den würde ich mit der Montagsschicht auffangen.' },
      { titel: '4 · ❔ Einladen statt drängen', chips: ['Wie sehen Sie das?', 'Wo hätten Sie Bedenken?', 'Gibt es aus Ihrer Sicht Einwände?', 'Was müsste erfüllt sein, damit das geht?'], bsp: 'Wo hätten Sie Bedenken? Und was müsste erfüllt sein, damit das aus Ihrer Sicht geht?', say: 'Wo hätten Sie Bedenken? Und was müsste erfüllt sein, damit das aus Ihrer Sicht geht?' }
    ],
    tipp: { art: 'teal', text: '📣 <strong>Reihum:</strong> Jeder baut einen Vorschlag aus je einem Satz pro Kasten. Die anderen sagen danach nur eines: Lag der Nutzen wirklich beim Gegenüber?' }
  },

  dialoge: {
    h2: 'Vier Situationen —',
    hl: 'zwei Runden',
    ssub: '<b>Runde 1:</b> Lest den Dialog zu zweit laut. <b>Runde 2:</b> Klappt die Zeilen zu und sprecht frei — nur die Stichwörter bleiben.',
    liste: [
      {
        bild: 'amanda/sz-buero.webp', alt: 'Ein Gespräch am Schreibtisch zwischen zwei Kolleginnen',
        titel: 'Andere Arbeitszeit',
        situation: 'A möchte früher anfangen und früher gehen. B ist die Vorgesetzte und hört erst einmal nur zu.',
        zeilen: [
          { wer: 'a', text: 'Haben Sie zwei Minuten? Mir ist etwas aufgefallen, und ich hätte einen Vorschlag.' },
          { wer: 'b', text: 'Klar, setzen Sie sich. Worum geht es?', cue: 'Ein guter Einstieg von A: erst um Zeit bitten, dann anfangen. B antwortet offen — noch ohne Meinung.' },
          { wer: 'a', text: 'Nachmittags rufen kaum Kunden an, morgens dafür alle gleichzeitig. Mein Vorschlag wäre, dass ich eine Stunde früher anfange.' },
          { wer: 'b', text: 'Und der Nachmittag? Da müsste dann jemand anderes ran.', cue: 'B nennt den Einwand direkt. Das ist gut — genau darauf hat A ja schon eine Antwort vorbereitet.' },
          { wer: 'a', text: 'Der Vorteil wäre, dass zur Hauptzeit jemand da ist. Und den Nachmittag könnte ich montags übernehmen. Was halten Sie davon?' },
          { wer: 'b', text: 'Klingt vernünftig. Testen wir es zwei Monate und schauen dann noch mal.', cue: 'Nutzen, Nachteil mit Lösung, Frage — und B sagt ja, weil es befristet ist. Genau darum funktioniert der Test so gut.' }
        ]
      },
      {
        bild: 'bilder/lesen/nachbar.webp', alt: 'Zwei Nachbarn sprechen im Treppenhaus',
        titel: 'Der Müll im Treppenhaus',
        situation: 'A stört sich seit Wochen an den Kartons im Flur. Statt sich zu beschweren, macht A einen Vorschlag.',
        zeilen: [
          { wer: 'a', text: 'Kurze Frage: Die Kartons im Flur — kommen die noch weg?' },
          { wer: 'b', text: 'Ich weiß, tut mir leid. Ich komme immer erst spät nach Hause.', cue: 'B entschuldigt sich sofort. Wichtig für A: jetzt nicht nachtreten, sondern direkt zum Vorschlag.' },
          { wer: 'a', text: 'Kein Vorwurf. Ich fahre samstags sowieso zum Wertstoffhof — soll ich sie mitnehmen?' },
          { wer: 'b', text: 'Das wäre super. Was kostet das denn?', cue: '<b>Kein Vorwurf</b> nimmt die Spannung raus, dann kommt der Nutzen für B. Und B fragt schon nach den Bedingungen — das ist fast ein Ja.' },
          { wer: 'a', text: 'Nichts. Sie müssten sie nur bis Freitag zusammenfalten. Passt das?' },
          { wer: 'b', text: 'Mache ich. Und wenn Sie mal etwas brauchen, sagen Sie Bescheid.', cue: 'Eine Bedingung, klein und machbar, dann die Frage. So wird aus einem Ärgernis eine Absprache.' }
        ]
      },
      {
        bild: 'amanda/sz-sprachkurs.webp', alt: 'Ein Kursraum mit Tischen und einer Tafel',
        titel: 'Im Sprachkurs',
        situation: 'A findet, im Kurs wird zu wenig gesprochen. A spricht die Lehrerin B nach dem Unterricht an.',
        zeilen: [
          { wer: 'a', text: 'Darf ich kurz etwas vorschlagen? Es geht ums Sprechen im Kurs.' },
          { wer: 'b', text: 'Gern, immer her damit. Was fehlt Ihnen?', cue: '<b>Immer her damit</b> ist ein sehr freundliches Signal. B will hören, was kommt, ohne sich schon zu wehren.' },
          { wer: 'a', text: 'Wir schreiben viel und reden wenig. Mein Vorschlag wäre, jede Stunde zehn Minuten in Paaren zu sprechen.' },
          { wer: 'b', text: 'Der Gedanke gefällt mir. Nur: Wir kommen dann mit dem Stoff nicht durch.', cue: 'B stimmt zu und nennt trotzdem den Einwand. Genau das übt ihr am Donnerstag — heute reicht es, ihn zu hören.' },
          { wer: 'a', text: 'Dafür müssten Sie danach weniger erklären, weil die Fragen schon geklärt sind. Wir könnten es zwei Wochen probieren.' },
          { wer: 'b', text: 'Einverstanden. Ab Montag zehn Minuten, danach reden wir noch mal.', cue: 'Nutzen aus Sicht der Lehrerin plus ein befristeter Test. Das ist der Aufbau des ganzen Abends in zwei Sätzen.' }
        ]
      },
      {
        bild: 'amanda/sz-familie.webp', alt: 'Eine Familie sitzt gemeinsam am Küchentisch',
        titel: 'Zu Hause',
        situation: 'A findet, die Hausarbeit ist ungleich verteilt. Statt zu streiten, macht A einen konkreten Vorschlag.',
        zeilen: [
          { wer: 'a', text: 'Können wir kurz über die Woche reden? Ich hätte eine Idee.' },
          { wer: 'b', text: 'Klar. Wenn es ums Aufräumen geht — ich weiß, es hakt.', cue: 'B geht dem Thema nicht aus dem Weg. Für A heißt das: nicht länger erklären, sondern zum Vorschlag kommen.' },
          { wer: 'a', text: 'Im Moment mache ich die Küche jeden Tag. Wie wäre es, wenn wir uns die Woche teilen?' },
          { wer: 'b', text: 'Nur weiß ich montags nie, wann ich heimkomme.', cue: 'Ein echter Einwand, kein Ausweichen. A braucht jetzt keine Diskussion, sondern eine Alternative.' },
          { wer: 'a', text: 'Dann tauschen wir Montag und Donnerstag. Dann hättest du feste Tage und ich hätte abends frei. Passt das so?' },
          { wer: 'b', text: 'Ja, das kriegen wir hin. Schreiben wir es an den Kühlschrank, dann vergisst es keiner.', cue: 'Alternative, Nutzen für beide, Frage — und am Ende eine Absprache, die man sehen kann.' }
        ]
      }
    ],
    tipp: { art: 'yellow', text: '🎭 <strong>Und jetzt ihr:</strong> Spielt Dialog 1 mit einem echten Wunsch aus eurem Leben. Regel: Der eigene Wunsch darf im Vorschlag nicht als Wunsch vorkommen.' }
  },

  grammatik: {
    h2: '🧩 Wäre, könnte, würde:',
    hl: 'die höflichen Formen',
    ssub: 'Ein Vorschlag im Konjunktiv klingt nach Angebot. Derselbe Satz im Indikativ klingt nach Ansage.',
    intro: 'Drei Formen reichen für alles: <b>wäre</b>, <b>könnte</b> und <b>würde</b>. Sie sagen nichts anderes aus — sie machen den Satz nur weicher. Und weich heißt hier: verhandelbar.',
    kette: [
      { emoji: '💡', rolle: 'Vorschlag', bsp: 'Mein Vorschlag' },
      { emoji: '🕊️', rolle: 'wäre', bsp: 'wäre,' },
      { emoji: '🔗', rolle: 'dass', bsp: 'dass ich früher' },
      { emoji: '🔚', rolle: 'Verb hinten', bsp: 'anfange.' }
    ],
    felder: [
      { rolle: 'Wir', wort: 'Wir' },
      { rolle: 'könnten', wort: 'könnten', hervor: true },
      { rolle: 'es', wort: 'es einen Monat' },
      { rolle: 'Verb hinten', wort: 'testen.' }
    ],
    bloecke: [
      {
        h2: 'Drei Formen,',
        hl: 'drei Aufgaben',
        ssub: 'Jede hat ihren Platz im Vorschlag. Wer sie kennt, klingt sofort verbindlicher und trotzdem offen.',
        dreier: [
          { emoji: '💡', wort: 'wäre', was: 'für den Vorschlag selbst', bsp: 'Mein Vorschlag <b>wäre</b>, dass … / Der Vorteil <b>wäre</b>, dass …' },
          { emoji: '🤝', wort: 'könnten', was: 'für die Möglichkeit', bsp: 'Wir <b>könnten</b> es einen Monat testen.' },
          { emoji: '🗣️', wort: 'würde', was: 'für die eigene Meinung', bsp: 'Ich <b>würde</b> vorschlagen, dass wir zunächst …' }
        ],
        chips: ['wäre', 'könnte', 'würde', 'hätte', 'dürfte ich', 'ginge das', 'wie wäre es', 'man könnte', 'denkbar wäre', 'ich hätte da', 'sollen wir', 'was halten Sie davon']
      },
      {
        h2: 'Wunsch',
        hl: 'oder Vorschlag?',
        ssub: 'Grammatisch sind beide richtig. Im Gespräch bekommt nur einer von beiden ein Ja.',
        paare: [
          {
            jaLabel: 'So ist es ein Vorschlag', ja: 'Mein Vorschlag wäre, dass ich morgens früher anfange — dann ist zur Hauptzeit jemand da.',
            jaWarumLabel: 'Warum das wirkt', jaWarum: 'Der Satz beginnt bei der Sache, nicht bei dir. Und nach <b>dass</b> steht das Verb am Ende: <i>anfange</i>. Diese Bauweise brauchst du für jeden Vorschlag.',
            noLabel: 'So bleibt es ein Wunsch', no: 'Ich will morgens früher anfangen, weil ich dann eher zu Hause bin.',
            noWarumLabel: 'Das Problem', noWarum: 'Zweimal steht dein eigener Nutzen im Satz, der des anderen kein einziges Mal. Und <i>ich will</i> lässt keinen Raum — <i>mein Vorschlag wäre</i> tut das.'
          }
        ]
      }
    ],
    bauH2: '🧱 Bau die Sätze selbst',
    bauSsub: 'Tippe die Teile in der richtigen Reihenfolge an. Achte darauf, wo das Verb nach <i>dass</i> landet.',
    storyH2: '📖 Und jetzt im Zusammenhang',
    storySsub: 'Ein Vorschlag von Anfang bis Ende. Wähle in jeder Lücke die passende Form.',
    hilfe: {
      knopf: '🆘 Wäre, könnte oder würde?',
      vor: 'Drei feste Plätze, mehr brauchst du nicht:',
      punkte: [
        '<b>Für den Vorschlag:</b> <i>Mein Vorschlag <b>wäre</b>, dass …</i> — danach Verb ans Ende.',
        '<b>Für den Nutzen:</b> <i>Der Vorteil <b>wäre</b>, dass …</i> — genauso gebaut.',
        '<b>Für die Möglichkeit:</b> <i>Wir <b>könnten</b> es testen.</i> — Infinitiv ans Ende.',
        '<b>Für die eigene Meinung:</b> <i>Ich <b>würde</b> vorschlagen, dass …</i>'
      ],
      nach: 'Und wenn dir die Form nicht einfällt: sag <i>Wie wäre es, wenn wir …?</i> Dieser eine Satz funktioniert in jeder Situation, vom Amt bis zur Küche.'
    }
  },

  rollenspiele: {
    h2: '🎭 Drei Situationen',
    hl: 'zu zweit',
    ssub: 'Einer schlägt vor, einer hört zu und fragt nach. Danach tauschen — beim zweiten Mal ohne die Sätze unten. Alle vier Schritte müssen vorkommen.',
    liste: [
      {
        titel: 'Andere Arbeitszeit',
        situation: 'A möchte eine Stunde früher anfangen und früher gehen. B ist die Vorgesetzte, hat nichts dagegen, muss aber an den Nachmittag denken.',
        a2: ['Ich hätte da einen Vorschlag', 'Mein Vorschlag wäre, dass ich früher anfange', 'Der Vorteil wäre, dass morgens jemand da ist', 'Was halten Sie davon?'],
        b1: ['Erzählen Sie, worum geht es genau?', 'Und wer übernimmt dann den Nachmittag?', 'Der Gedanke gefällt mir, nur die Telefonzeit macht mir Sorgen', 'Testen wir es zwei Monate und schauen dann noch einmal'],
        gut: 'A hat mit der Lage angefangen, nicht mit dem eigenen Wunsch. Der Nutzen lag bei der Firma, der Nachteil wurde selbst genannt — und am Ende stand eine Frage.'
      },
      {
        titel: 'Kartons im Treppenhaus',
        situation: 'A ärgert sich seit Wochen über die Kartons im Flur. B weiß das und kommt einfach nicht dazu. A macht einen Vorschlag statt einer Beschwerde.',
        a2: ['Kommen die Kartons noch weg?', 'Kein Vorwurf, ich hätte eine Idee', 'Ich fahre samstags sowieso zum Wertstoffhof', 'Sie müssten sie nur zusammenfalten'],
        b1: ['Ich weiß, es tut mir leid, ich komme immer erst spät heim', 'Das wäre wirklich nett, was kostet das denn?', 'Bis Freitag kriege ich das hin', 'Wenn Sie mal etwas brauchen, sagen Sie Bescheid'],
        gut: 'Aus einer Beschwerde ist ein Angebot geworden. Und die Bedingung war so klein, dass B sofort ja sagen konnte.'
      },
      {
        titel: 'Mehr sprechen im Kurs',
        situation: 'A findet, im Kurs wird zu wenig gesprochen, und spricht die Lehrerin B an. B findet die Idee gut, hat aber Sorge um den Stoff.',
        a2: ['Darf ich kurz etwas vorschlagen?', 'Wir schreiben viel und reden wenig', 'Mein Vorschlag wäre zehn Minuten in Paaren', 'Wir könnten es zwei Wochen probieren'],
        b1: ['Gern, immer her damit, was fehlt Ihnen?', 'Der Gedanke gefällt mir, nur kommen wir mit dem Stoff nicht durch', 'Und wer erklärt dann die Grammatik?', 'Einverstanden, ab Montag, danach reden wir noch einmal'],
        gut: 'Der Nutzen war aus Sicht der Lehrerin formuliert, nicht aus Sicht der Lernenden. Und der Test war befristet — deshalb fiel das Ja leicht.'
      }
    ]
  },

  challenge: {
    ssub: 'Neunzig Sekunden für einen Vorschlag: Lage, Idee, Nutzen, Frage — und dann noch einmal von vorn mit einer Alternative.',
    hilfe: {
      knopf: '🆘 Mir fällt nichts ein',
      vor: 'Vier Sätze, dann trägt dich die Zeit:',
      punkte: [
        '<b>Lage:</b> <i>Die Lage ist gerade so: …</i>',
        '<b>Vorschlag:</b> <i>Mein Vorschlag wäre, dass …</i>',
        '<b>Nutzen:</b> <i>Der Vorteil wäre, dass …</i>',
        '<b>Frage:</b> <i>Was halten Sie davon? Wir könnten es auch erst mal testen.</i>'
      ],
      nach: 'Und wenn du früher fertig bist als die Zeit: nenn den Nachteil und wie du ihn auffangen würdest. Damit füllst du die zweite Hälfte — und dein Vorschlag wird dabei besser.'
    },
    tipp: { art: 'yellow', text: '⏱️ <strong>Spielregel:</strong> In jeder Runde muss der <u>Nutzen für den anderen</u> vorkommen. Wer nur den eigenen Vorteil nennt, fängt noch einmal an.' }
  },

  ueben: { tipp: { art: 'teal', text: '📣 <strong>Danach laut:</strong> Einer nennt eine Situation, der Nächste baut in vier Sätzen einen Vorschlag. Reihum, ohne lange zu überlegen.' } },

  hausaufgabe: {
    h2: '📮 Deine Hausaufgabe bis',
    hl: 'Donnerstag',
    ssub: 'Vier kleine Aufgaben, zusammen etwa 25 Minuten. Am Donnerstag geht es weiter: Was tust du, wenn der andere <i>Ja, aber …</i> sagt?',
    warum: { text: '💡 <strong>Warum das hilft:</strong> Diese vier Schritte sind kein Trick, sondern schlicht die Reihenfolge, in der Menschen zuhören. Sie funktionieren beim Chef, beim Vermieter, im Elterngespräch und am Küchentisch. Und sie funktionieren auch dann, wenn dein Deutsch noch nicht perfekt ist — weil der Aufbau die Arbeit macht, nicht die Wörter.' },
    a2: [
      { emoji: '✍️', titel: 'Fünf Vorschläge', zeit: '7 Min', text: 'Schreib fünf Vorschläge aus deinem Leben, jeden in vier Sätzen: Lage, Vorschlag, Vorteil, Frage.' },
      { emoji: '🔄', titel: 'Wunsch in Vorschlag', zeit: '6 Min', text: 'Schreib fünf Wünsche auf (<i>Ich hätte gern …</i>) und bau jeden so um, dass der Nutzen beim anderen liegt.' },
      { emoji: '🎙️', titel: 'Einmal laut', zeit: '5 Min', text: 'Nimm eine Sprachnachricht auf: dein wichtigster Vorschlag, in unter einer Minute, mit allen vier Schritten.' },
      { emoji: '🗣️', titel: 'Einmal wirklich', zeit: '7 Min', text: 'Mach diese Woche einen echten Vorschlag — im Kurs, in der Arbeit, zu Hause. Schreib danach auf, wie die Antwort war.' }
    ],
    b1: [
      { emoji: '📝', titel: 'Eine kurze Mail', zeit: '8 Min', text: 'Schreib eine Mail mit einem Vorschlag an eine Vorgesetzte oder einen Vermieter: Lage, Vorschlag, Nutzen, Nachteil mit Lösung, Frage. Höchstens zehn Sätze.' },
      { emoji: '🎭', titel: 'Zwei Alternativen', zeit: '6 Min', text: 'Bau denselben Vorschlag zweimal — einmal als festen Plan, einmal als befristeten Test. Schreib dazu, welcher wann besser passt.' },
      { emoji: '🎙️', titel: 'Zwei Minuten Besprechung', zeit: '6 Min', text: 'Nimm auf, wie du einen Vorschlag in einer Besprechung einbringst und am Ende aktiv nach Einwänden fragst.' },
      { emoji: '👂', titel: 'Genau hinhören', zeit: '5 Min', text: 'Such ein deutsches Gespräch oder eine Reportage und notier fünf Stellen, an denen jemand etwas vorschlägt. Schreib dazu, welcher der vier Schritte fehlt.' }
    ],
    hilfeA2: {
      knopf: '💡 Beispiel ansehen (Aufgabe 1)',
      vor: 'So sieht ein Vorschlag in vier Sätzen aus:',
      punkte: [
        '<b>Lage:</b> <i>Mir ist aufgefallen, dass wir montags immer zu wenig Zeit haben.</i>',
        '<b>Vorschlag:</b> <i>Mein Vorschlag wäre, dass wir die Besprechung auf Dienstag legen.</i>',
        '<b>Vorteil:</b> <i>Der Vorteil wäre, dass alle die Zahlen schon kennen.</i>',
        '<b>Frage:</b> <i>Was halten Sie davon?</i>',
        '<b>Und optional:</b> <i>Wir könnten es einen Monat testen.</i>'
      ],
      nach: 'Ein einziger Test genügt: Streich deinen Vorschlag einmal durch und lies nur Schritt drei. Steht dort etwas, das dem anderen nützt? Wenn nicht, ist es noch ein Wunsch.'
    },
    hilfeB1: {
      knopf: '💡 Beispiel ansehen (Aufgabe 1)',
      vor: 'Das sind die Stellen, auf die es in der Mail ankommt:',
      punkte: [
        '<b>Betreff:</b> <i>Vorschlag zur Telefonzeit</i> — kein <i>Bitte um Gespräch</i>.',
        '<b>Lage:</b> <i>Seit einigen Wochen fällt auf, dass die Anrufe sich auf den Vormittag verteilen.</i>',
        '<b>Vorschlag mit Rahmen:</b> <i>Ich würde vorschlagen, dass ich befristet für zwei Monate eine Stunde früher beginne.</i>',
        '<b>Nutzen und Preis:</b> <i>Für Sie hätte das den Effekt, dass … Der Nachteil wäre …, den würde ich so auffangen: …</i>',
        '<b>Schluss:</b> <i>Wo hätten Sie Bedenken? Gern bespreche ich das kurz persönlich.</i>'
      ],
      nach: 'Und ein Hinweis, der in Deutschland wirklich zählt: Schreib dazu, <b>ab wann</b> und <b>wie lange</b>. Ein befristeter Vorschlag bekommt fast doppelt so oft ein Ja wie derselbe Vorschlag ohne Enddatum.'
    },
    abgabe: 'Schick mir bis Donnerstag 12 Uhr deine fünf Vorschläge und die Sprachnachricht — ich sage dir bei jedem, ob der Nutzen beim anderen liegt oder noch bei dir.',
    ausblick: 'Am Donnerstag: <i>Ja, aber …</i> Was machst du, wenn dein Vorschlag gut war und die Antwort trotzdem nein lautet? Vier Werkzeuge, mit denen du im Gespräch bleibst.'
  },

  daten: {
    sk: [
      'Mach einen Vorschlag für den nächsten Sprechclub — mit allen vier Schritten.',
      'Du willst eine Stunde früher Feierabend. Bau daraus einen Vorschlag.',
      'Deine Nachbarn stellen Kartons in den Flur. Schlag etwas vor, ohne dich zu beschweren.',
      'Nenne einen Nachteil deines eigenen Vorschlags und wie du ihn auffängst.',
      'Bau denselben Vorschlag zweimal: einmal fest, einmal als Test.',
      'Sag einen Wunsch — und dann denselben Inhalt als Vorschlag.',
      'Du möchtest im Kurs mehr sprechen. Überzeug die Lehrerin.',
      'Schlag deiner Familie eine neue Aufteilung der Hausarbeit vor.',
      'Frag aktiv nach Einwänden. Drei verschiedene Sätze.',
      'Erklär in zwei Sätzen, warum der Nutzen beim anderen liegen muss.'
    ],
    w90: [
      { w: 'der Vorschlag', b: 'vok-bild/der-vorschlag.webp', h: ['machen', 'die Idee', 'annehmen', 'ablehnen', 'begründen'] },
      { w: 'die Lage', b: 'amanda/sz-heikel.webp', h: ['im Moment', 'beschreiben', 'das Problem', 'sich ändern', 'sachlich'] },
      { w: 'der Vorteil', b: 'amanda/amanda-super.webp', h: ['der Nutzen', 'sparen', 'besser', 'für Sie', 'überzeugen'] },
      { w: 'der Nachteil', b: 'amanda/amanda-ups.webp', h: ['der Preis', 'zugeben', 'auffangen', 'ehrlich', 'dafür'] },
      { w: 'der Zeitpunkt', b: 'vok-bild/die-uhrzeit.webp', h: ['jetzt', 'später', 'passend', 'ab wann', 'befristet'] },
      { w: 'die Alternative', b: 'amanda/a-zeigen.webp', h: ['die andere Möglichkeit', 'wählen', 'stattdessen', 'zwei Wege', 'anbieten'] },
      { w: 'die Absprache', b: 'amanda/sz-buero.webp', h: ['treffen', 'festhalten', 'gemeinsam', 'einhalten', 'aufschreiben'] },
      { w: 'die Zustimmung', b: 'amanda/a-klatschen.webp', h: ['zustimmen', 'ja sagen', 'einverstanden', 'der Chef', 'brauchen'] },
      { w: 'die Bedingung', b: 'vok-bild/der-mietvertrag.webp', h: ['stellen', 'nur wenn', 'erfüllen', 'vereinbaren', 'schriftlich'] },
      { w: 'das Ziel', b: 'amanda/a-pokal.webp', h: ['erreichen', 'am Ende', 'worauf', 'klar', 'gemeinsam'] }
    ],
    quiz: [
      { q: 'Womit fängt ein guter Vorschlag an?', o: ['mit der Lage', 'mit dem eigenen Wunsch', 'mit einem Vorwurf', 'mit der Frage'], c: 0, e: 'Erst die Lage, dann der Vorschlag, dann der Nutzen, dann die Frage. Wer mit dem eigenen Wunsch anfängt, bekommt meistens ein <i>schwierig</i>.' },
      { q: 'Welcher Satz ist ein Vorschlag und kein Wunsch?', o: ['Mein Vorschlag wäre, dass ich morgens früher anfange — dann ist zur Hauptzeit jemand da.', 'Ich hätte gern früher Feierabend.', 'Ich will morgens früher anfangen.', 'Geht das mit den Arbeitszeiten irgendwie anders?'], c: 0, e: 'Nur im ersten Satz steht, was der andere davon hat. Genau daran erkennt man einen Vorschlag.' },
      { q: 'Warum nennt man den Nachteil selbst?', o: ['Man wirkt glaubwürdiger und nimmt dem anderen das Argument weg.', 'Weil man höflich sein muss.', 'Damit der Vorschlag kleiner klingt.', 'Weil es sonst unfair wäre.'], c: 0, e: 'Wer den Preis seines eigenen Vorschlags kennt, wirkt sicher. Und wer ihn gleich mit einer Lösung liefert, hat das Gespräch schon halb gewonnen.' },
      { q: 'Wo steht das Verb nach <u>dass</u>?', o: ['ganz am Ende', 'an Position zwei', 'direkt nach dass', 'am Anfang'], c: 0, e: '<i>Mein Vorschlag wäre, dass ich morgens früher <b>anfange</b>.</i> Nach <b>dass</b> geht das Verb immer ans Ende.' },
      { q: 'Warum wirkt ein befristeter Test so gut?', o: ['Der andere muss sich nicht festlegen.', 'Er ist billiger.', 'Er klingt professioneller.', 'Man kann ihn leichter vergessen.'], c: 0, e: 'Ein Test ist keine Entscheidung. Deshalb fällt das Ja leicht — und sehr oft bleibt es danach einfach so.' },
      { q: 'Welche Frage lädt am besten ein?', o: ['Was halten Sie davon?', 'Also machen wir das so?', 'Sind Sie dagegen?', 'Ist das ein Problem für Sie?'], c: 0, e: 'Sie ist offen und wertet nicht. Die anderen drei drängen entweder zu einem Ja oder zu einem Nein.' },
      { q: 'Was bedeutet <u>Der Aufwand hält sich in Grenzen</u>?', o: ['Es ist nicht viel Arbeit.', 'Es ist verboten.', 'Es dauert sehr lange.', 'Es kostet nichts.'], c: 0, e: 'Ein sehr gebräuchlicher Satz in deutschen Besprechungen. Er beruhigt genau die Sorge, die als Erstes kommt.' },
      { q: 'Welche Form gehört zum Vorschlag?', o: ['Mein Vorschlag wäre …', 'Mein Vorschlag ist gewesen …', 'Mein Vorschlag war …', 'Mein Vorschlag hätte …'], c: 0, e: '<b>wäre</b> macht aus einer Ansage ein Angebot. Dieselbe Wirkung haben <b>könnten</b> und <b>würde</b>.' }
    ],
    gap: [
      { t: 'Mein Vorschlag ___, dass wir es einen Monat testen.', o: ['wäre', 'ist gewesen', 'hätte', 'würde'], a: 'wäre' },
      { t: 'Der ___ wäre, dass morgens jemand für die Kunden da ist.', o: ['Vorteil', 'Nachteil', 'Einwand', 'Aufwand'], a: 'Vorteil' },
      { t: 'Wir ___ es auch erst einmal befristet versuchen.', o: ['könnten', 'konnten', 'können wir', 'kann'], a: 'könnten' },
      { t: 'Was halten Sie ___?', o: ['davon', 'darauf', 'daran', 'dafür'], a: 'davon' },
      { t: 'Der Aufwand hält sich in ___.', o: ['Grenzen', 'Ordnung', 'Ruhe', 'Sachen'], a: 'Grenzen' },
      { t: 'Ich ___ vorschlagen, dass wir zunächst mit einem Test anfangen.', o: ['würde', 'werde', 'wollte', 'hätte'], a: 'würde' },
      { t: 'Unter einer ___: Wir schauen in vier Wochen noch einmal drauf.', o: ['Bedingung', 'Absprache', 'Zustimmung', 'Alternative'], a: 'Bedingung' },
      { t: 'Gibt es aus Ihrer Sicht ___?', o: ['Einwände', 'Vorteile', 'Ziele', 'Zeitpunkte'], a: 'Einwände' }
    ],
    gbau: [
      { f: 'Bau den Vorschlag:', t: ['Mein', 'Vorschlag', 'wäre', 'dass', 'ich', 'morgens', 'früher', 'anfange'], l: ['Mein', 'Vorschlag', 'wäre', 'dass', 'ich', 'morgens', 'früher', 'anfange'], e: 'Nach <b>dass</b> geht das Verb <i>anfange</i> ganz ans Ende. Das ist die Bauweise für jeden Vorschlag.' },
      { f: 'Bau den Nutzen:', t: ['Der', 'Vorteil', 'wäre', 'dass', 'morgens', 'jemand', 'da', 'ist'], l: ['Der', 'Vorteil', 'wäre', 'dass', 'morgens', 'jemand', 'da', 'ist'], e: 'Genauso gebaut wie der Vorschlag — und der Nutzen muss beim anderen liegen, nicht bei dir.' },
      { f: 'Bau die Möglichkeit:', t: ['Wir', 'könnten', 'es', 'einen', 'Monat', 'testen'], l: ['Wir', 'könnten', 'es', 'einen', 'Monat', 'testen'], e: 'Nach <b>könnten</b> steht der Infinitiv <i>testen</i> ganz hinten. Ein Test ist keine Entscheidung — deshalb fällt das Ja leicht.' },
      { f: 'Bau die Frage am Schluss:', t: ['Was', 'halten', 'Sie', 'davon'], l: ['Was', 'halten', 'Sie', 'davon'], e: 'Vier Wörter, und der andere ist im Gespräch statt in der Verteidigung. Sag sie immer am Ende.' }
    ],
    gstory: {
      t: 'Ich wollte schon lange etwas ändern, wusste aber nicht, wie ich anfangen soll. Heute habe ich es anders gemacht. Zuerst habe ich die ___ beschrieben: nachmittags ruft kaum jemand an, morgens alle gleichzeitig. Dann kam mein Satz: Mein Vorschlag ___, dass ich eine Stunde früher anfange. Der ___ wäre, dass zur Hauptzeit jemand für die Kunden da ist. Den ___ habe ich selbst genannt, nämlich meinen früheren Feierabend, und gleich gesagt, wie ich ihn auffange. Wir ___ es zunächst zwei Monate testen, habe ich vorgeschlagen. Am Ende habe ich gefragt: Was halten Sie ___? Meine Chefin hat eine ___ gestellt, danach war sie einverstanden. Wir haben es als ___ festgehalten, damit es niemand vergisst.',
      o: ['Lage', 'wäre', 'Vorteil', 'Nachteil', 'könnten', 'davon', 'Bedingung', 'Absprache'],
      a: [['Lage'], ['wäre'], ['Vorteil'], ['Nachteil'], ['könnten'], ['davon'], ['Bedingung'], ['Absprache']]
    }
  }
};
fs.writeFileSync(__dirname + '/../stunden/w10-d1-vorschlag-aufbauen.json', JSON.stringify(S, null, 2) + '\n', 'utf8');
console.log('geschrieben');
