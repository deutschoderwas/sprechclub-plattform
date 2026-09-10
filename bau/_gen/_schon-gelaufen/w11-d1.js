'use strict';
const fs = require('fs');
const S = {
  datei: 'Unterricht-ab-14-09/w11-d-teil1-geschichte-erzaehlen-b1b2.html',
  eyebrow: 'deutschoderwas · Sprechclub · Woche 11 · Strang D · Teil 1 · Dienstag, 24. November',
  titel: 'Eine Geschichte erzählen —',
  hl: 'so, dass alle zuhören',
  stufe: 'B1/B2',
  termin: 'Di 24.11. 17:30 und 19:30 · Strang D · Teil 1 · B1 ⇄ B2',
  untertitel: 'Fast jeder kann auf Deutsch sagen, was passiert ist. Aber eine Geschichte, bei der die anderen wirklich zuhören, hat einen Bau: einen Anfang, eine Stelle, an der es kippt, und ein Ende. Heute lernst du die vier Schritte — und die kleinen Wörter, die Spannung machen.',
  fuss: 'Eine Geschichte erzählen · Teil 1 · B1/B2 · Woche 11 · am Donnerstag: ein Gespräch gut beenden',
  niveau: { a: 'B1 · sicherer', b: 'B2 · feiner', hinweis: 'Gleiches Thema, andere Sätze. Wechsle jederzeit — probier ruhig beide Seiten aus.' },

  einstieg: [
    {
      h2: 'Erst der Rahmen,',
      hl: 'dann die Geschichte',
      ssub: 'Wer mitten hineinspringt, verliert die anderen sofort. Zwei Sekunden Rahmen genügen: <i>Letzte Woche im Supermarkt …</i> Damit weiß jeder, wann und wo — und kann sich alles Weitere vorstellen.',
      bild: 'amanda/sz-freunde.webp',
      alt: 'Zwei Freundinnen sitzen beieinander und erzählen',
      fragenA2: [
        'Erzählst du gern Geschichten?',
        'Was ist dir zuletzt Lustiges passiert?',
        'Wer erzählt in deiner Familie am besten?'
      ],
      fragenB1: [
        'Woran merkst du, dass jemand gut erzählt?',
        'Was fällt dir auf Deutsch dabei schwer?',
        'Erzählst du in deiner Sprache anders?'
      ],
      tipp: { art: 'teal', text: '🔑 <strong>Die vier Schritte:</strong> <b>1 Rahmen</b> — wann und wo. <b>2 Los geht es</b> — was du wolltest. <b>3 Und dann</b> — die Stelle, an der es kippt. <b>4 Pointe</b> — der letzte Satz, kurz.' }
    },
    {
      h2: 'Und die Pointe',
      hl: 'kommt zum Schluss',
      ssub: 'Der häufigste Fehler ist, den besten Teil zu früh zu verraten. <i>Ich erzähl dir was total Peinliches, also ich bin hingefallen und …</i> — damit ist die Luft raus. Halte die Stelle bis zum Ende, dann lachen alle an der richtigen Stelle.',
      bild: 'amanda/amanda-jubel.webp',
      alt: 'Amanda lacht und reißt die Arme hoch',
      fragenA2: [
        'Was war deine peinlichste Situation?',
        'Lachst du über dich selbst?',
        'Erzählst du lieber kurz oder lang?'
      ],
      fragenB1: [
        'Wie hältst du Spannung, ohne zu übertreiben?',
        'Was machst du, wenn niemand lacht?',
        'Welche Geschichte erzählst du immer wieder?'
      ],
      tipp: { art: 'yellow', text: '💡 <strong>Die kleinen Spannungswörter:</strong> <b>plötzlich</b>, <b>auf einmal</b>, <b>und dann</b>, <b>und weißt du was?</b> Vier Stück, und schon hört jeder zu. Mehr braucht es nicht.' }
    }
  ],

  wortschatz: {
    h2: 'Zwölf Wörter,',
    hl: 'die in jede Geschichte passen',
    ssub: 'Sag jedes laut — und häng gleich einen halben Satz dran, in dem du es benutzt.',
    karten: [
      { bild: 'amanda/a-lesen.webp', alt: 'Amanda liest in einem Buch', art: 'die', wort: 'Geschichte', kurz: 'das, was du erzählst', bsp: 'Ich muss dir eine Geschichte erzählen.', tipp: 'Eine Geschichte <b>erzählt</b> man, nie <i>sagt</i> man sie. Und der Einstieg heißt fast immer: <b>Ich muss dir was erzählen.</b> Damit hast du sofort alle Ohren.', say: 'Ich muss dir eine Geschichte erzählen.' },
      { bild: 'amanda/a-willkommen.webp', alt: 'Amanda begrüßt jemanden freundlich', art: 'der', wort: 'Anfang', kurz: 'wie es losging', bsp: 'Am Anfang war alles ganz normal.', tipp: '<b>Am Anfang</b> ist der beste zweite Satz jeder Geschichte — er baut den Boden, von dem aus es später kippt. Und <b>von Anfang an</b> heißt: die ganze Zeit schon.', say: 'Am Anfang war alles ganz normal.' },
      { bild: 'amanda/a-zeigen.webp', alt: 'Amanda zeigt überrascht auf etwas', art: 'der', wort: 'Zufall', kurz: 'wenn etwas ohne Grund zusammenkommt', bsp: 'Und dann, so ein Zufall, stand er plötzlich da.', tipp: '<b>So ein Zufall!</b> ist ein kompletter Satz und ein prima Spannungsmacher. Und <b>zufällig</b> als Adverb: <i>Ich habe sie zufällig getroffen.</i>', say: 'Und dann, so ein Zufall, stand er plötzlich da.' },
      { bild: 'amanda/amanda-ups.webp', alt: 'Amanda hält sich die Hand vor den Mund', art: 'das', wort: 'Missgeschick', kurz: 'eine kleine Panne, über die man später lacht', bsp: 'Mir ist da ein kleines Missgeschick passiert.', tipp: 'Immer mit <b>passieren</b> und Dativ: <i>Mir ist etwas passiert.</i> Und im Alltag sagt man öfter <b>Panne</b> oder einfach <b>Da ist mir was passiert</b>.', say: 'Mir ist da ein kleines Missgeschick passiert.' },
      { bild: 'amanda/amanda-jubel.webp', alt: 'Amanda freut sich überrascht', art: 'die', wort: 'Überraschung', kurz: 'wenn etwas ganz anders kommt', bsp: 'Und dann kam die Überraschung.', tipp: 'Der perfekte Satz vor der Pointe: <b>Und dann kam die Überraschung.</b> Danach eine kleine Pause — und alle warten.', say: 'Und dann kam die Überraschung.' },
      { bild: 'amanda/sz-notfall.webp', alt: 'Eine Person erschrickt am Telefon', art: 'der', wort: 'Schreck', kurz: 'wenn du dich kurz sehr erschrickst', bsp: 'Ich habe so einen Schreck bekommen!', tipp: 'Man <b>bekommt</b> einen Schreck oder <b>erschrickt</b>. Und ganz alltäglich: <i>Ich bin fast gestorben vor Schreck</i> — übertrieben, aber alle sagen es.', say: 'Ich habe so einen Schreck bekommen!' },
      { bild: 'amanda/a-pokal.webp', alt: 'Amanda hält einen Pokal hoch', art: 'das', wort: 'Ende', kurz: 'wie es ausgegangen ist', bsp: 'Am Ende war alles halb so wild.', tipp: 'Halte das Ende kurz. <b>Am Ende</b> plus ein einziger Satz — das ist die Pointe. Wer danach noch weiterredet, macht sie kaputt.', say: 'Am Ende war alles halb so wild.' },
      { bild: 'vok-bild/die-oma-der-opa.webp', alt: 'Großeltern sitzen zusammen', art: 'die', wort: 'Erinnerung', kurz: 'was von früher hängengeblieben ist', bsp: 'Ich habe da eine ganz genaue Erinnerung dran.', tipp: '<b>eine Erinnerung an</b> plus Akkusativ. Und das Verb ist reflexiv: <b>sich erinnern an</b> — <i>Ich erinnere mich noch genau <b>an den</b> Tag.</i>', say: 'Ich habe da eine ganz genaue Erinnerung dran.' },
      { bild: 'amanda/a-uhr.webp', alt: 'Eine Uhr an der Wand', art: 'der', wort: 'Moment', kurz: 'der eine kurze Augenblick', bsp: 'In dem Moment ist mir alles klar geworden.', tipp: '<b>In dem Moment</b> ist der stärkste Satzanfang für die Stelle, an der die Geschichte kippt. Und <b>Moment mal!</b> heißt: Warte kurz.', say: 'In dem Moment ist mir alles klar geworden.' },
      { bild: 'amanda/sz-telefonieren.webp', alt: 'Eine Person telefoniert', art: 'die', wort: 'Stimme', kurz: 'wie jemand klingt', bsp: 'Und dann sagt er mit ganz ruhiger Stimme: …', tipp: 'Der Trick guter Erzähler: die andere Person kurz nachmachen. <b>Und dann sagt er:</b> — im Präsens, mitten in der Vergangenheit. Das macht alles lebendig.', say: 'Und dann sagt er mit ganz ruhiger Stimme: …' },
      { bild: 'vok-bild/der-gesichtsausdruck.webp', alt: 'Ein überraschtes Gesicht', art: 'der', wort: 'Gesichtsausdruck', kurz: 'was man jemandem im Gesicht ansieht', bsp: 'Du hättest ihren Gesichtsausdruck sehen sollen!', tipp: '<b>Du hättest … sehen sollen!</b> ist einer der besten Sätze überhaupt — er lädt die anderen ein, sich das Bild selbst auszumalen.', say: 'Du hättest ihren Gesichtsausdruck sehen sollen!' },
      { bild: 'amanda/a-warten.webp', alt: 'Amanda wartet mit verschränkten Armen', art: 'die', wort: 'Pause', kurz: 'die kurze Stille vor der Pointe', bsp: 'Er hat eine Pause gemacht — und dann kam es.', tipp: 'Die Pause ist kein Wortschatz, sondern Technik: Vor dem letzten Satz kurz schweigen. Zwei Sekunden reichen, und alle schauen dich an.', say: 'Er hat eine Pause gemacht — und dann kam es.' }
    ],
    spiel: { text: '💡 <strong>Spiel „Und dann?“:</strong> Einer fängt eine Geschichte mit einem Satz an. Der Nächste hängt einen Satz dran, der mit <i>und dann</i>, <i>plötzlich</i> oder <i>auf einmal</i> beginnt. Reihum, bis jemand die Pointe setzt.' }
  },

  konzepte: {
    tab: '🔍 Vier Schritte',
    zuerst: 'dreier',
    h2: 'Rahmen, Ablauf',
    hl: 'und der Moment, wo es kippt',
    ssub: 'Jede gute Alltagsgeschichte hat denselben Bau. Wer ihn kennt, muss beim Erzählen nicht mehr nachdenken.',
    dreier: [
      { emoji: '🖼️', wort: '1 Rahmen', was: 'wann und wo, in einem Satz', bsp: '<b>Letzte Woche im Supermarkt</b> …' },
      { emoji: '🚶', wort: '2 Los geht es', was: 'was du eigentlich wolltest', bsp: 'Ich wollte nur <b>schnell</b> Milch holen.' },
      { emoji: '⚡', wort: '3 Und dann', was: 'die Stelle, an der es kippt', bsp: '<b>Und auf einmal</b> steht da meine Chefin im Schlafanzug.' }
    ],
    paare: [
      {
        jaLabel: 'So hören alle zu', ja: 'Letzte Woche im Supermarkt. Ich wollte nur schnell Milch holen — und auf einmal steht da meine Nachbarin und weint.',
        jaWarumLabel: 'Warum das funktioniert', jaWarum: 'Erst der Rahmen (wann, wo), dann etwas ganz Normales, dann der Bruch. Das Wort <b>auf einmal</b> ist das Scharnier — danach hört jeder zu.',
        noLabel: 'So springt niemand mit', no: 'Also ich habe da meine Nachbarin getroffen, das war ziemlich komisch, weil sie ja eigentlich, na ja, jedenfalls im Supermarkt.',
        noWarumLabel: 'Das Problem', noWarum: 'Kein Rahmen, keine Reihenfolge — und die Wertung (<i>ziemlich komisch</i>) kommt, bevor irgendjemand weiß, worum es geht. Fang immer mit <b>wann</b> und <b>wo</b> an.'
      },
      {
        jaLabel: 'So kommt die Pointe an', ja: 'Sie dreht sich um, guckt mich an und sagt: Das ist nicht meine Tasche.',
        jaWarumLabel: 'Warum das funktioniert', jaWarum: 'Wörtliche Rede im <b>Präsens</b>, mitten in einer Geschichte über gestern. Das machen alle guten Erzähler — es holt die Zuhörer direkt in die Szene.',
        noLabel: 'So geht die Luft raus', no: 'Sie hat sich dann umgedreht und mir gesagt, dass das nicht ihre Tasche gewesen sei.',
        noWarumLabel: 'Das Problem', noWarum: 'Grammatisch tadellos und trotzdem langweilig. Indirekte Rede gehört in Berichte, nicht in Geschichten. Sag es so, wie die Person es gesagt hat.'
      },
      {
        jaLabel: 'So endet es gut', ja: 'Am Ende war es die falsche Tür. Zwei Stockwerke tiefer.',
        jaWarumLabel: 'Warum das funktioniert', jaWarum: 'Kurz, konkret, und danach nichts mehr. Zwei Sätze für das Ende — und die anderen dürfen lachen, ohne dass du es ihnen erklärst.',
        noLabel: 'So wird es zerredet', no: 'Am Ende war es die falsche Tür, was natürlich total peinlich war, aber im Nachhinein muss ich sagen, dass so etwas ja jedem mal passieren kann.',
        noWarumLabel: 'Das Problem', noWarum: 'Die Pointe stand schon im ersten Halbsatz — alles danach nimmt ihr die Wirkung. Wenn du fertig bist, hör auf. Das ist schwerer, als es klingt.'
      }
    ],
    hilfe: {
      knopf: '🆘 Wie fange ich an?',
      vor: 'Vier Sätze, dann läuft die Geschichte von allein:',
      punkte: [
        '<b>Rahmen:</b> <i>Letzte Woche, im Bus …</i> — wann und wo, mehr nicht.',
        '<b>Normal:</b> <i>Ich wollte eigentlich nur …</i>',
        '<b>Bruch:</b> <i>Und auf einmal …</i> oder <i>Und dann, plötzlich …</i>',
        '<b>Ende:</b> <i>Am Ende war es …</i> — ein Satz, dann Schluss.'
      ],
      nach: 'Und wenn dir mittendrin ein Wort fehlt: erzähl weiter und beschreib es. <i>So ein Ding, mit dem man …</i> Eine Geschichte lebt vom Tempo, nicht von den perfekten Wörtern.'
    },
    tipp: { art: 'yellow', text: '🎯 <strong>Zu zweit, zwei Minuten:</strong> Einer nennt einen Ort — <i>Bus</i>, <i>Supermarkt</i>, <i>Wartezimmer</i>. Der andere erzählt in vier Sätzen eine kleine Geschichte, die dort passiert ist. Erfunden ist erlaubt.' }
  },

  saetze: {
    h2: 'Vier Bausteine',
    hl: 'für jede Geschichte',
    ssub: 'Anfangen, weitererzählen, spannend machen, aufhören. Such dir aus jedem Kasten einen Satz — dann steht deine Geschichte.',
    akkLabel: 'der Schritt',
    mengeLabel: 'was du damit erreichst',
    a2: [
      { titel: '1 · 🖼️ Anfangen', chips: ['Ich muss dir was erzählen.', 'Letzte Woche im Supermarkt …', 'Stell dir vor, was mir passiert ist.', 'Am Anfang war alles ganz normal.'], bsp: 'Ich muss dir was erzählen. Letzte Woche, im Supermarkt.', say: 'Ich muss dir was erzählen. Letzte Woche, im Supermarkt.' },
      { titel: '2 · 🚶 Weitererzählen', chips: ['Ich wollte nur schnell …', 'Und dann …', 'Also, ich stehe da und …', 'Erst habe ich gedacht: …'], bsp: 'Ich wollte nur schnell Milch holen. Und dann stehe ich da an der Kasse.', say: 'Ich wollte nur schnell Milch holen. Und dann stehe ich da an der Kasse.' },
      { titel: '3 · ⚡ Spannend machen', chips: ['Und plötzlich …', 'Auf einmal …', 'Und weißt du was?', 'Du hättest ihr Gesicht sehen sollen!'], bsp: 'Und auf einmal — du hättest ihr Gesicht sehen sollen!', say: 'Und auf einmal — du hättest ihr Gesicht sehen sollen!' },
      { titel: '4 · 🎯 Aufhören', chips: ['Am Ende war es …', 'Und das war es.', 'So einfach war das.', 'Ich lache heute noch drüber.'], bsp: 'Am Ende war es die falsche Tür. Ich lache heute noch drüber.', say: 'Am Ende war es die falsche Tür. Ich lache heute noch drüber.' }
    ],
    b1: [
      { titel: '1 · 🖼️ Rahmen mit Ton', chips: ['Das musst du dir mal vorstellen: …', 'Es war einer von diesen Tagen, an denen …', 'Ich weiß noch genau, es war ein Dienstag.', 'Vorweg: Es geht mir gut, nichts Schlimmes.'], bsp: 'Das musst du dir mal vorstellen: Es war einer von diesen Tagen, an denen alles schiefgeht.', say: 'Das musst du dir mal vorstellen: Es war einer von diesen Tagen, an denen alles schiefgeht.' },
      { titel: '2 · 🚶 Szene aufbauen', chips: ['Ich stehe also da und warte, und …', 'Bis dahin war noch alles in Ordnung.', 'Ich dachte mir noch: Komisch, aber gut.', 'Und ich, natürlich, mache genau das Falsche.'], bsp: 'Ich stehe also da und warte. Bis dahin war alles in Ordnung — ich dachte mir noch: Komisch, aber gut.', say: 'Ich stehe also da und warte. Bis dahin war alles in Ordnung — ich dachte mir noch: Komisch, aber gut.' },
      { titel: '3 · ⚡ Kippen lassen', chips: ['Und in dem Moment …', 'Und dann, ganz ruhig, sagt sie: …', 'Ich schwöre dir, ich bin fast gestorben.', 'Und da ist bei mir der Groschen gefallen.'], bsp: 'Und in dem Moment dreht sie sich um und sagt ganz ruhig: Das ist nicht meine Tasche.', say: 'Und in dem Moment dreht sie sich um und sagt ganz ruhig: Das ist nicht meine Tasche.' },
      { titel: '4 · 🎯 Landen', chips: ['Am Ende war es nur …', 'Und damit war die Sache erledigt.', 'Heute finde ich es lustig. Damals nicht.', 'Seitdem schaue ich immer zweimal hin.'], bsp: 'Am Ende war es nur die falsche Tür, zwei Stockwerke tiefer. Seitdem schaue ich immer zweimal hin.', say: 'Am Ende war es nur die falsche Tür, zwei Stockwerke tiefer. Seitdem schaue ich immer zweimal hin.' }
    ],
    tipp: { art: 'teal', text: '📣 <strong>Reihum:</strong> Jeder erzählt in genau vier Sätzen etwas, das ihm diese Woche passiert ist — einer pro Baustein. Die anderen hören nur zu und sagen danach, an welcher Stelle sie am meisten wissen wollten.' }
  },

  dialoge: {
    h2: 'Vier Situationen —',
    hl: 'zwei Runden',
    ssub: '<b>Runde 1:</b> Lest den Dialog zu zweit laut. <b>Runde 2:</b> Klappt die Zeilen zu und erzählt frei — nur die Stichwörter bleiben.',
    liste: [
      {
        bild: 'amanda/sz-supermarkt.webp', alt: 'Regale und Einkaufswagen in einem Supermarkt',
        titel: 'Die falsche Tasche',
        situation: 'A erzählt eine kleine Panne aus dem Supermarkt. B hört zu und hakt an den richtigen Stellen nach.',
        zeilen: [
          { wer: 'a', text: 'Ich muss dir was erzählen. Letzte Woche, im Supermarkt.' },
          { wer: 'b', text: 'Erzähl!', cue: 'Ein Wort genügt. <b>Erzähl!</b> ist die kürzeste und beste Reaktion, die es gibt.' },
          { wer: 'a', text: 'Ich wollte nur schnell Milch holen. Und dann stehe ich da an der Kasse.' },
          { wer: 'b', text: 'Und?', cue: '<b>Und?</b> hält die Geschichte in Gang, ohne sie zu unterbrechen. Guter Zuhörer, wenig Worte.' },
          { wer: 'a', text: 'Und auf einmal dreht sich die Frau vor mir um und sagt: Das ist nicht meine Tasche.' },
          { wer: 'b', text: 'Nein! Und war es deine?', cue: 'Die wörtliche Rede im <b>Präsens</b> mitten in der Vergangenheit — genau das macht Geschichten lebendig.' }
        ]
      },
      {
        bild: 'bilder/lesen/bus.webp', alt: 'Menschen steigen in einen Bus ein',
        titel: 'Im falschen Bus',
        situation: 'A ist irgendwo gelandet, wo er nicht hinwollte. B fragt nach und lacht mit.',
        zeilen: [
          { wer: 'a', text: 'Weißt du, was mir gestern passiert ist?' },
          { wer: 'b', text: 'Nee, was denn?', cue: '<b>Nee, was denn?</b> — so klingt echtes gesprochenes Deutsch. Kurz, offen, neugierig.' },
          { wer: 'a', text: 'Ich sitze im Bus, lese was auf dem Handy, alles ganz normal.' },
          { wer: 'b', text: 'Und dann bist du zu weit gefahren.', cue: 'B rät mit — auch das hält die Geschichte in Gang. Und A kann jetzt sagen: fast, aber anders.' },
          { wer: 'a', text: 'Schlimmer. Ich schaue hoch, und wir sind schon fast in der nächsten Stadt.' },
          { wer: 'b', text: 'Echt jetzt? Und wie bist du zurückgekommen?', cue: '<b>Echt jetzt?</b> ist die Standardreaktion auf eine Überraschung. Und danach die Frage nach dem Ende.' }
        ]
      },
      {
        bild: 'amanda/sz-freunde.webp', alt: 'Zwei Freundinnen sitzen zusammen und lachen',
        titel: 'Die Geschichte von damals',
        situation: 'A erzählt etwas von früher. B kennt die Geschichte schon — und will sie trotzdem noch mal hören.',
        zeilen: [
          { wer: 'a', text: 'Erinnerst du dich noch an unseren ersten Umzug?' },
          { wer: 'b', text: 'Oh nein. Die Sache mit dem Sofa?', cue: '<b>sich erinnern an</b> plus Akkusativ. Und B nennt sofort das Stichwort — so redet man, wenn man sich lange kennt.' },
          { wer: 'a', text: 'Genau. Wir standen zu dritt im Treppenhaus, und es ging weder vor noch zurück.' },
          { wer: 'b', text: 'Und dein Bruder hat gesagt, das schaffen wir schon.', cue: 'Hier steht <b>standen</b> im Präteritum: <i>war</i>, <i>hatte</i>, <i>stand</i>, <i>ging</i> sagt man beim Erzählen auch mündlich so.' },
          { wer: 'a', text: 'Und dann ist es genau in dem Moment stecken geblieben.' },
          { wer: 'b', text: 'Ich lache heute noch drüber. Erzähl es Sonntag noch mal, ja?', cue: 'Ein schönes Ende: nicht erklären, sondern lachen. Und <i>drüber</i> statt <i>darüber</i> ist ganz normal gesprochen.' }
        ]
      },
      {
        bild: 'amanda/amanda-ups.webp', alt: 'Amanda hält sich erschrocken die Hand vor den Mund',
        titel: 'Die falsche Tür',
        situation: 'A hat etwas Peinliches erlebt und will es loswerden. B nimmt A die Peinlichkeit.',
        zeilen: [
          { wer: 'a', text: 'Ich habe gestern etwas so Peinliches gemacht, ich kann es kaum sagen.' },
          { wer: 'b', text: 'Jetzt aber. Raus damit.', cue: '<b>Raus damit</b> ist freundlich gemeint und heißt: Erzähl schon. Genau so redet man unter Freunden.' },
          { wer: 'a', text: 'Ich komme nach Hause, Schlüssel passt nicht, ich klingele also.' },
          { wer: 'b', text: 'Bei dir selbst?', cue: 'Eine kurze Zwischenfrage — sie zeigt, dass B mitdenkt, und gibt A einen kleinen Moment.' },
          { wer: 'a', text: 'Macht ein wildfremder Mann auf. Falsche Tür, zwei Stockwerke tiefer.' },
          { wer: 'b', text: 'Das ist mir auch schon passiert, ehrlich. Halb so wild.', cue: 'Die beste Antwort auf eine peinliche Geschichte: eine eigene dagegenstellen. <b>Halb so wild</b> beendet die Sache freundlich.' }
        ]
      }
    ],
    tipp: { art: 'yellow', text: '🎭 <strong>Und jetzt ihr:</strong> Erzählt euch gegenseitig eine kleine Panne aus dieser Woche. Regel: Wer zuhört, sagt nur <i>Und?</i>, <i>Echt jetzt?</i> oder <i>Nein!</i> — sonst nichts.' }
  },

  grammatik: {
    h2: '🧩 Erzählt wird im Perfekt —',
    hl: 'außer bei sechs Wörtern',
    ssub: 'Im Alltag erzählt man auf Deutsch im Perfekt. Aber eine kleine Gruppe steht auch mündlich im Präteritum, und die hörst du in jeder Geschichte.',
    intro: 'Die Regel ist kurz: alles im <b>Perfekt</b> (<i>ich bin gegangen</i>, <i>ich habe gesehen</i>) — aber <b>war</b>, <b>hatte</b>, <b>wollte</b>, <b>konnte</b>, <b>musste</b>, <b>dachte</b> und <b>ging</b> sagt man im Präteritum. Wer <i>ich bin gewesen</i> sagt, klingt sofort nach Buch.',
    kette: [
      { emoji: '🕐', rolle: 'Rahmen', bsp: 'Letzte Woche' },
      { emoji: '📍', rolle: 'wo', bsp: 'im Supermarkt' },
      { emoji: '🔧', rolle: 'Perfekt', bsp: 'ist mir etwas' },
      { emoji: '🔚', rolle: 'Partizip hinten', bsp: 'passiert.' }
    ],
    felder: [
      { rolle: 'Ich', wort: 'Ich' },
      { rolle: 'Präteritum', wort: 'wollte', hervor: true },
      { rolle: 'was', wort: 'nur schnell Milch' },
      { rolle: 'Verb hinten', wort: 'holen.' }
    ],
    bloecke: [
      {
        h2: 'Sechs Wörter,',
        hl: 'die man mündlich im Präteritum sagt',
        ssub: 'Alles andere im Perfekt. Diese sechs kommen aber in jeder zweiten Geschichte vor.',
        dreier: [
          { emoji: '🧱', wort: 'war · hatte', was: 'für den Rahmen', bsp: 'Es <b>war</b> ein Dienstag, und ich <b>hatte</b> es eilig.' },
          { emoji: '🎯', wort: 'wollte · musste · konnte', was: 'für die Absicht', bsp: 'Ich <b>wollte</b> nur schnell Milch holen.' },
          { emoji: '💭', wort: 'dachte · ging', was: 'für den Moment', bsp: 'Ich <b>dachte</b> noch: Komisch. Und dann <b>ging</b> es los.' }
        ],
        chips: ['war', 'hatte', 'wollte', 'musste', 'konnte', 'dachte', 'ging', 'stand', 'ist passiert', 'habe gesehen', 'bin gefahren', 'hat gesagt']
      },
      {
        h2: 'Und die Rede',
        hl: 'steht im Präsens',
        ssub: 'Das ist kein Fehler, sondern der wichtigste Trick beim Erzählen — alle guten Erzähler machen es so.',
        paare: [
          {
            jaLabel: 'So klingt es lebendig', ja: 'Sie dreht sich um und sagt: Das ist nicht meine Tasche.',
            jaWarumLabel: 'Warum das funktioniert', jaWarum: 'Mitten in einer Geschichte über gestern springst du ins <b>Präsens</b>. Das nennt man das erzählende Präsens, und es holt die Zuhörer direkt in die Szene.',
            noLabel: 'So klingt es nach Bericht', no: 'Sie drehte sich um und sagte, dass das nicht ihre Tasche gewesen sei.',
            noWarumLabel: 'Das Problem', noWarum: 'Grammatisch perfekt, erzählerisch tot. Indirekte Rede und Konjunktiv I gehören in die Zeitung. Am Küchentisch sagt man, was die Person gesagt hat — wörtlich.'
          }
        ]
      }
    ],
    bauH2: '🧱 Bau die Sätze selbst',
    bauSsub: 'Tippe die Teile in der richtigen Reihenfolge an. Achte darauf, wo das Partizip landet.',
    storyH2: '📖 Und jetzt im Zusammenhang',
    storySsub: 'Eine kleine Geschichte von Anfang bis Ende. Wähle in jeder Lücke die richtige Form.',
    hilfe: {
      knopf: '🆘 Perfekt oder Präteritum?',
      vor: 'Drei Regeln, dann sitzt jede Geschichte:',
      punkte: [
        '<b>Alles Normale im Perfekt:</b> <i>Ich bin gefahren</i>, <i>Ich habe gesehen</i>, <i>Mir ist etwas passiert</i>.',
        '<b>Sechs Wörter im Präteritum:</b> war, hatte, wollte, musste, konnte, dachte — dazu <i>ging</i> und <i>stand</i>.',
        '<b>Wörtliche Rede im Präsens:</b> <i>Und dann sagt sie: …</i>',
        '<b>Und der Bruch</b> steht am liebsten mit <b>und auf einmal</b> oder <b>in dem Moment</b>.'
      ],
      nach: 'Ein Test, der immer geht: Sag den Satz und hör hin, ob er nach Buch klingt. <i>Ich ging in den Laden</i> klingt geschrieben, <i>Ich bin in den Laden gegangen</i> klingt gesprochen. Beim Erzählen gewinnt immer das Gesprochene.'
    }
  },

  rollenspiele: {
    h2: '🎭 Drei Situationen',
    hl: 'zu zweit',
    ssub: 'Einer erzählt, einer hört zu. Danach tauschen — beim zweiten Mal ohne die Sätze unten. Alle vier Schritte müssen vorkommen.',
    liste: [
      {
        titel: 'Die kleine Panne',
        situation: 'A erzählt etwas, das diese Woche schiefgegangen ist. B hört zu und darf nur kurze Reaktionen geben — keine Ratschläge.',
        a2: ['Ich muss dir was erzählen', 'Ich wollte nur schnell …', 'Und dann, auf einmal …', 'Am Ende war es halb so wild'],
        b1: ['Erzähl!', 'Und? Was ist dann passiert?', 'Echt jetzt? Das gibt es doch nicht', 'Das ist mir auch schon passiert, ehrlich'],
        gut: 'A hat mit Zeit und Ort angefangen und die Pointe bis zum Schluss aufgehoben. B hat nur zugehört und an drei Stellen kurz nachgehakt.'
      },
      {
        titel: 'Eine Geschichte von früher',
        situation: 'A erzählt etwas, das lange her ist. B stellt Zwischenfragen, weil B die Leute nicht kennt.',
        a2: ['Erinnerst du dich noch an …?', 'Das war vor ungefähr zehn Jahren', 'Wir standen da und wussten nicht weiter', 'Ich lache heute noch drüber'],
        b1: ['Wer war da noch dabei?', 'Und wie alt warst du da?', 'Und was hat sie dann gesagt?', 'Erzähl das Sonntag noch mal, das muss die Runde hören'],
        gut: 'Es kamen mindestens drei Präteritumformen vor — <i>war</i>, <i>hatte</i>, <i>wollte</i>, <i>stand</i> oder <i>dachte</i>. Und einmal wurde jemand wörtlich zitiert.'
      },
      {
        titel: 'Peinlich, aber lustig',
        situation: 'A erzählt etwas Peinliches und traut sich kaum. B nimmt A die Peinlichkeit, indem B etwas Eigenes dagegenstellt.',
        a2: ['Das ist mir richtig peinlich', 'Ich komme nach Hause und dann …', 'Du hättest sein Gesicht sehen sollen', 'Nie wieder, ehrlich'],
        b1: ['Jetzt aber, raus damit', 'Warte — bei dir selbst?', 'Das ist ja großartig, erzähl weiter', 'Bei mir war das mal genauso, nur schlimmer'],
        gut: 'A hat die Pointe wirklich bis zum letzten Satz gehalten. Und B hat am Ende nicht getröstet, sondern eine eigene Geschichte danebengestellt.'
      }
    ]
  },

  challenge: {
    ssub: 'Neunzig Sekunden eine Geschichte: Rahmen, Ablauf, der Moment, wo es kippt — und ein Ende, das sitzt.',
    hilfe: {
      knopf: '🆘 Mir fällt nichts ein',
      vor: 'Vier Sätze, dann trägt dich die Zeit:',
      punkte: [
        '<b>Rahmen:</b> <i>Letzte Woche, im …</i>',
        '<b>Normal:</b> <i>Ich wollte eigentlich nur …</i>',
        '<b>Bruch:</b> <i>Und auf einmal …</i>',
        '<b>Ende:</b> <i>Am Ende war es …</i>'
      ],
      nach: 'Und wenn dir nichts Eigenes einfällt: erfinde es. Für die Übung ist das völlig egal — es geht darum, dass die vier Schritte in der richtigen Reihenfolge kommen.'
    },
    tipp: { art: 'yellow', text: '⏱️ <strong>Spielregel:</strong> In jeder Runde muss <u>ein Satz in wörtlicher Rede</u> vorkommen — <i>Und dann sagt sie: …</i> Wer nur berichtet, fängt noch einmal an.' }
  },

  ueben: { tipp: { art: 'teal', text: '📣 <strong>Danach laut:</strong> Einer sagt einen ersten Satz, der Nächste hängt einen mit <i>und dann</i> oder <i>plötzlich</i> dran. Reihum, bis jemand die Pointe setzt.' } },

  hausaufgabe: {
    h2: '📮 Deine Hausaufgabe bis',
    hl: 'Donnerstag',
    ssub: 'Vier kleine Aufgaben, zusammen etwa 25 Minuten. Am Donnerstag geht es weiter: Wie beendest du ein Gespräch, ohne unhöflich zu wirken?',
    warum: { text: '💡 <strong>Warum das hilft:</strong> Erzählen ist die Fähigkeit, die einen von <i>gutes Deutsch</i> zu <i>dazugehören</i> bringt. Wer eine Geschichte platzieren kann, sitzt beim nächsten Mal mitten in der Runde statt am Rand. Und es hängt viel weniger am Wortschatz, als man denkt — es hängt am Bau.' },
    a2: [
      { emoji: '✍️', titel: 'Drei Geschichten', zeit: '7 Min', text: 'Schreib drei kleine Geschichten aus deinem Leben, jede in genau vier Sätzen: Rahmen, Ablauf, Bruch, Ende.' },
      { emoji: '⚡', titel: 'Zehnmal kippen lassen', zeit: '5 Min', text: 'Schreib zehn Sätze, die mit <i>und auf einmal</i>, <i>plötzlich</i> oder <i>in dem Moment</i> anfangen.' },
      { emoji: '🎙️', titel: 'Einmal laut', zeit: '6 Min', text: 'Nimm eine Sprachnachricht auf: eine Geschichte in unter einer Minute. Mit einer Pause vor dem letzten Satz.' },
      { emoji: '👂', titel: 'Zuhören', zeit: '7 Min', text: 'Hör jemandem beim Erzählen zu — Podcast, Video, Gespräch — und notier fünf Stellen, an denen die Person wörtliche Rede benutzt hat.' }
    ],
    b1: [
      { emoji: '📝', titel: 'Eine Geschichte, zweimal', zeit: '8 Min', text: 'Schreib dieselbe Geschichte einmal als trockenen Bericht und einmal so, wie du sie erzählen würdest. Markier, was du geändert hast.' },
      { emoji: '🔀', titel: 'Perfekt und Präteritum', zeit: '6 Min', text: 'Schreib zwölf Sätze über gestern — zehn im Perfekt, aber alle Formen von <i>sein</i>, <i>haben</i>, <i>wollen</i>, <i>können</i>, <i>müssen</i> und <i>denken</i> im Präteritum.' },
      { emoji: '🎙️', titel: 'Zwei Minuten frei', zeit: '6 Min', text: 'Nimm auf, wie du eine Geschichte von früher erzählst — mit mindestens drei Stellen in wörtlicher Rede.' },
      { emoji: '✂️', titel: 'Kürzen', zeit: '5 Min', text: 'Nimm deine längste Geschichte und streich sie auf die Hälfte zusammen. Was bleibt übrig? Genau das ist die Geschichte.' }
    ],
    hilfeA2: {
      knopf: '💡 Beispiel ansehen (Aufgabe 1)',
      vor: 'So sieht eine Geschichte in vier Sätzen aus:',
      punkte: [
        '<b>Rahmen:</b> <i>Letzte Woche, im Supermarkt.</i>',
        '<b>Ablauf:</b> <i>Ich wollte nur schnell Milch holen.</i>',
        '<b>Bruch:</b> <i>Und auf einmal dreht sich die Frau vor mir um und sagt: Das ist nicht meine Tasche.</i>',
        '<b>Ende:</b> <i>Am Ende hatte ich ihren Einkauf im Wagen.</i>',
        '<b>Optional:</b> <i>Ich lache heute noch drüber.</i>'
      ],
      nach: 'Ein einziger Test genügt: Steht die Überraschung im letzten Satz? Wenn du sie schon im ersten verrätst, ist die Luft raus, bevor jemand zuhört.'
    },
    hilfeB1: {
      knopf: '💡 Beispiel ansehen (Aufgabe 1)',
      vor: 'Dieselbe Sache, zweimal erzählt:',
      punkte: [
        '<b>Als Bericht:</b> <i>Ich war im Supermarkt und habe versehentlich den Einkaufswagen einer anderen Kundin genommen. Sie hat mich darauf hingewiesen.</i>',
        '<b>Als Geschichte:</b> <i>Letzte Woche im Supermarkt. Ich wollte nur schnell Milch holen.</i>',
        '<i>Und auf einmal dreht sich die Frau vor mir um und sagt ganz ruhig: Das ist nicht meine Tasche.</i>',
        '<i>Und ich denke noch: Wieso ihre Tasche — bis ich in den Wagen gucke.</i>',
        '<b>Ende:</b> <i>Am Ende hatte ich ihren kompletten Einkauf. Sie hat gelacht, ich weniger.</i>'
      ],
      nach: 'Und der Unterschied in einem Satz: Der Bericht sagt, <b>was</b> passiert ist. Die Geschichte lässt die anderen dabei sein. Dafür brauchst du drei Dinge — Reihenfolge, wörtliche Rede und ein Ende, das kurz ist.'
    },
    abgabe: 'Schick mir bis Donnerstag 12 Uhr deine drei Geschichten und die Sprachnachricht — ich sage dir bei jeder, an welcher Stelle ich aufgehört habe zuzuhören.',
    ausblick: 'Am Donnerstag: das Gegenstück. Wie beendest du ein Gespräch freundlich, wenn du eigentlich weitermusst — und wie bleibst du trotzdem in Kontakt?'
  },

  daten: {
    sk: [
      'Erzähl in vier Sätzen etwas, das dir diese Woche passiert ist.',
      'Erzähl eine Geschichte von früher — mit mindestens einem Zitat.',
      'Was war deine peinlichste Situation? Halte die Pointe bis zum Schluss.',
      'Erfinde eine Geschichte, die im Bus anfängt.',
      'Erzähl dieselbe Sache einmal als Bericht und einmal als Geschichte.',
      'Jemand erzählt dir etwas. Reagiere nur mit drei Wörtern.',
      'Beschreib einen Moment, in dem du dich richtig erschrocken hast.',
      'Erzähl von einem Zufall, der dir passiert ist.',
      'Nimm eine lange Geschichte und erzähl sie in dreißig Sekunden.',
      'Welche Geschichte erzählst du immer wieder? Und warum?'
    ],
    w90: [
      { w: 'die Geschichte', b: 'amanda/a-lesen.webp', h: ['erzählen', 'der Anfang', 'das Ende', 'zuhören', 'lustig'] },
      { w: 'der Anfang', b: 'amanda/a-willkommen.webp', h: ['losgehen', 'am Anfang', 'zuerst', 'normal', 'der Rahmen'] },
      { w: 'der Zufall', b: 'amanda/a-zeigen.webp', h: ['zufällig', 'treffen', 'so ein Zufall', 'plötzlich', 'unerwartet'] },
      { w: 'das Missgeschick', b: 'amanda/amanda-ups.webp', h: ['passieren', 'die Panne', 'peinlich', 'schiefgehen', 'lachen'] },
      { w: 'die Überraschung', b: 'amanda/amanda-jubel.webp', h: ['überrascht', 'nicht erwartet', 'plötzlich', 'staunen', 'die Pointe'] },
      { w: 'der Schreck', b: 'amanda/sz-notfall.webp', h: ['erschrecken', 'bekommen', 'kurz', 'das Herz', 'lachen danach'] },
      { w: 'das Ende', b: 'amanda/a-pokal.webp', h: ['am Ende', 'ausgehen', 'kurz', 'die Pointe', 'aufhören'] },
      { w: 'die Erinnerung', b: 'vok-bild/die-oma-der-opa.webp', h: ['sich erinnern', 'früher', 'genau', 'vergessen', 'damals'] },
      { w: 'der Moment', b: 'amanda/a-uhr.webp', h: ['kurz', 'in dem Moment', 'plötzlich', 'genau da', 'warten'] },
      { w: 'die Stimme', b: 'amanda/sz-telefonieren.webp', h: ['ruhig', 'laut', 'nachmachen', 'sagen', 'klingen'] }
    ],
    quiz: [
      { q: 'Womit fängt eine gute Geschichte an?', o: ['mit Zeit und Ort', 'mit der Pointe', 'mit deiner Meinung', 'mit einer Entschuldigung'], c: 0, e: '<i>Letzte Woche im Supermarkt …</i> — zwei Sekunden Rahmen, und alle können sich die Szene vorstellen.' },
      { q: 'Welche Form benutzt man beim mündlichen Erzählen?', o: ['meistens Perfekt', 'immer Präteritum', 'immer Präsens', 'Plusquamperfekt'], c: 0, e: 'Im Alltag erzählt man im <b>Perfekt</b>. Nur <i>war</i>, <i>hatte</i>, <i>wollte</i>, <i>konnte</i>, <i>musste</i>, <i>dachte</i> und <i>ging</i> stehen im Präteritum.' },
      { q: 'Wie zitiert man beim Erzählen?', o: ['Und dann sagt sie: Das ist nicht meine Tasche.', 'Sie sagte, dass das nicht ihre Tasche gewesen sei.', 'Sie hat mir mitgeteilt, es handle sich nicht um ihre Tasche.', 'Es wurde von ihr gesagt, dass …'], c: 0, e: 'Wörtliche Rede im <b>Präsens</b> — das erzählende Präsens. Indirekte Rede gehört in Berichte, nicht an den Küchentisch.' },
      { q: 'Wo gehört die Pointe hin?', o: ['ganz ans Ende', 'in den ersten Satz', 'in die Mitte', 'sie muss gar nicht vorkommen'], c: 0, e: 'Wer die Überraschung zu früh verrät, nimmt sich selbst die Wirkung. Halte sie bis zum letzten Satz.' },
      { q: 'Welches Wort macht am meisten Spannung?', o: ['und auf einmal', 'außerdem', 'im Übrigen', 'zusammenfassend'], c: 0, e: '<b>und auf einmal</b>, <b>plötzlich</b> und <b>in dem Moment</b> sind die drei Scharniere jeder Alltagsgeschichte.' },
      { q: 'Was ist die beste Reaktion, wenn jemand erzählt?', o: ['Und? Echt jetzt? Erzähl!', 'ein längerer Ratschlag', 'eine eigene Geschichte mittendrin', 'gar nichts sagen'], c: 0, e: 'Kurze Zwischenrufe halten die Geschichte in Gang. Ratschläge und eigene Geschichten kommen danach.' },
      { q: 'Welcher Satz klingt gesprochen?', o: ['Ich bin in den Laden gegangen.', 'Ich ging in den Laden.', 'Ich war in den Laden gegangen.', 'Man begab sich in den Laden.'], c: 0, e: 'Das Perfekt klingt gesprochen, das Präteritum nach Buch. Ausnahme sind die sechs Wörter, die man auch mündlich im Präteritum sagt.' },
      { q: 'Was macht man vor der Pointe?', o: ['eine kurze Pause', 'noch eine Erklärung', 'eine Entschuldigung', 'die Pointe wiederholen'], c: 0, e: 'Zwei Sekunden schweigen — und alle schauen dich an. Das ist keine Grammatik, sondern Technik.' }
    ],
    gap: [
      { t: 'Letzte Woche ___ mir etwas Komisches passiert.', o: ['ist', 'hat', 'war', 'wurde'], a: 'ist' },
      { t: 'Ich ___ eigentlich nur schnell Milch holen.', o: ['wollte', 'habe gewollt', 'will', 'werde'], a: 'wollte' },
      { t: 'Und ___ einmal dreht sie sich um.', o: ['auf', 'in', 'an', 'zu'], a: 'auf' },
      { t: 'In dem ___ ist mir alles klar geworden.', o: ['Moment', 'Ende', 'Anfang', 'Zufall'], a: 'Moment' },
      { t: 'Und dann ___ sie ganz ruhig: Das ist nicht meine Tasche.', o: ['sagt', 'sagte', 'hat gesagt', 'gesagt hat'], a: 'sagt' },
      { t: 'Du ___ ihr Gesicht sehen sollen!', o: ['hättest', 'hast', 'würdest', 'wärst'], a: 'hättest' },
      { t: '___ Ende war alles halb so wild.', o: ['Am', 'Im', 'Zum', 'An'], a: 'Am' },
      { t: 'Ich ___ mich noch genau an den Tag.', o: ['erinnere', 'erinnert', 'erinnern', 'erinnerte mich'], a: 'erinnere' }
    ],
    gbau: [
      { f: 'Bau den Rahmen:', t: ['Letzte', 'Woche', 'ist', 'mir', 'etwas', 'Komisches', 'passiert'], l: ['Letzte', 'Woche', 'ist', 'mir', 'etwas', 'Komisches', 'passiert'], e: 'Perfekt mit <b>ist</b>, weil <i>passieren</i> eine Veränderung ist. Und das Partizip steht ganz hinten.' },
      { f: 'Bau die Absicht im Präteritum:', t: ['Ich', 'wollte', 'nur', 'schnell', 'Milch', 'holen'], l: ['Ich', 'wollte', 'nur', 'schnell', 'Milch', 'holen'], e: '<b>wollte</b> im Präteritum — eines der sechs Wörter, die man auch mündlich so sagt. Der Infinitiv geht ans Ende.' },
      { f: 'Bau den Bruch:', t: ['Und', 'auf', 'einmal', 'dreht', 'sie', 'sich', 'um'], l: ['Und', 'auf', 'einmal', 'dreht', 'sie', 'sich', 'um'], e: 'Nach <b>und auf einmal</b> kommt sofort das Verb. Und <i>um</i> steht hinten, weil <i>sich umdrehen</i> trennbar ist.' },
      { f: 'Bau das Ende:', t: ['Am', 'Ende', 'war', 'alles', 'halb', 'so', 'wild'], l: ['Am', 'Ende', 'war', 'alles', 'halb', 'so', 'wild'], e: '<b>war</b> im Präteritum, kurz und fertig. Nach diesem Satz sagst du nichts mehr — das ist die Pointe.' }
    ],
    gstory: {
      t: 'Letzte Woche ___ mir etwas Komisches passiert. Es ___ ein ganz normaler Dienstag, und ich ___ eigentlich nur schnell einkaufen. Ich stehe also an der Kasse, gucke aufs Handy, alles wie immer. Und ___ einmal dreht sich die Frau vor mir um und ___ ganz ruhig: Das ist nicht meine Tasche. Ich ___ noch: Wieso ihre Tasche? Bis ich in meinen Wagen geschaut habe. ___ dem Moment ist mir alles klar geworden. ___ Ende hatte ich ihren kompletten Einkauf im Wagen. Sie hat gelacht, ich weniger.',
      o: ['ist', 'war', 'wollte', 'auf', 'sagt', 'dachte', 'In', 'Am'],
      a: [['ist'], ['war'], ['wollte'], ['auf'], ['sagt'], ['dachte'], ['In'], ['Am']]
    }
  }
};
fs.writeFileSync(__dirname + '/../stunden/w11-d1-geschichte-erzaehlen.json', JSON.stringify(S, null, 2) + '\n', 'utf8');
console.log('geschrieben');
