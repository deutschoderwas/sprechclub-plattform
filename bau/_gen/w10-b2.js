'use strict';
const fs = require('fs');
const S = {
  datei: 'Unterricht-ab-14-09/w10-b-teil2-wo-sie-stehen-b1b2.html',
  eyebrow: 'deutschoderwas · Sprechclub · Woche 10 · Strang B · Teil 2 · Donnerstag, 19. November',
  titel: 'Wo sie stehen —',
  hl: 'stehen und stellen, liegen und legen, sitzen und setzen',
  stufe: 'B1/B2',
  termin: 'Do 19.11. 9:00 · Strang B · Teil 2 · B1 ⇄ B2',
  untertitel: 'Sieben Verben, drei Paare, eine einzige Frage: Tue ich gerade etwas mit einem Ding — oder sage ich nur, wo es ist? Beim Tun steht der Akkusativ und die Frage <i>wohin</i>. Beim Sein steht der Dativ und die Frage <i>wo</i>. Mehr ist es wirklich nicht.',
  fuss: 'Wo sie stehen · Teil 2 · B1/B2 · Woche 10 · nächste Woche: neues Thema',
  niveau: { a: 'B1 · sicherer', b: 'B2 · feiner', hinweis: 'Gleiches Thema, andere Sätze. Wechsle jederzeit — probier ruhig beide Seiten aus.' },

  einstieg: [
    {
      h2: 'Ich lege es hin,',
      hl: 'dann liegt es da',
      ssub: 'Zwei Verben, die fast gleich klingen, und trotzdem nie tauschbar sind. <b>legen</b> ist etwas, das ich <u>tue</u> — es braucht immer ein Ding dahinter. <b>liegen</b> sagt nur, wie das Ding danach <u>ist</u>. Wer den Unterschied einmal hört, hört ihn für immer.',
      bild: 'bilder/lesen/wohnung.webp',
      alt: 'Ein Wohnzimmer mit Sofa, Regal und Stehlampe',
      fragenA2: [
        'Wo liegt dein Handy gerade?',
        'Wohin legst du deine Schlüssel, wenn du heimkommst?',
        'Was steht bei dir auf dem Tisch?'
      ],
      fragenB1: [
        'Welches der drei Paare macht dir am meisten Ärger?',
        'Woran merkst du im Gespräch, dass du gerade falsch liegst?',
        'Gibt es diesen Unterschied auch in deiner Sprache?'
      ],
      tipp: { art: 'teal', text: '🔑 <strong>Die eine Frage:</strong> Kommt hinter dem Verb ein Ding? Dann tust du etwas — <b>legen, stellen, setzen</b> plus <i>wohin</i> plus Akkusativ. Kommt kein Ding? Dann ist es nur ein Zustand — <b>liegen, stehen, sitzen</b> plus <i>wo</i> plus Dativ.' }
    },
    {
      h2: 'Und warum',
      hl: 'stellt man das eine und legt das andere?',
      ssub: 'Danach richtet sich nur die Form des Dings. Was hoch ist, wird <b>gestellt</b> und <b>steht</b>. Was flach ist, wird <b>gelegt</b> und <b>liegt</b>. Was einen Rücken hat, wird <b>gesetzt</b> und <b>sitzt</b>. Und was an der Wand hängt, wurde <b>gehängt</b>.',
      bild: 'vok-bild/der-schrank.webp',
      alt: 'Ein Schrank mit offener Tür, darin gestapelte Wäsche',
      fragenA2: [
        'Was steht bei dir im Regal, was liegt darin?',
        'Wohin setzt du dich zu Hause am liebsten?',
        'Was hängt bei dir an der Wand?'
      ],
      fragenB1: [
        'Warum steht die Flasche, aber das Buch liegt?',
        'Wo funktioniert die Form-Regel nicht so gut?',
        'Wie erklärst du das jemandem in einem Satz?'
      ],
      tipp: { art: 'yellow', text: '💡 <strong>Ein Merksatz für alles:</strong> <b>Ich stelle — es steht. Ich lege — es liegt. Ich setze — es sitzt.</b> Das Verb mit dem <i>e</i> in der Mitte macht etwas. Das andere beschreibt nur.' }
    }
  ],

  wortschatz: {
    h2: 'Zwölf Wörter,',
    hl: 'die im Zimmer stehen',
    ssub: 'Sag jedes laut. Und sag bei jedem gleich dazu, ob es steht, liegt oder hängt.',
    karten: [
      { bild: 'vok-bild/der-schrank.webp', art: 'der', wort: 'Schrank', kurz: 'das große Möbel für Kleidung oder Geschirr', bsp: 'Der Schrank steht neben dem Fenster.', tipp: 'Möbel <b>stehen</b> — sie sind hoch und haben Beine oder eine Grundfläche. Und wenn du ihn bewegst: <i>Ich <b>stelle</b> den Schrank an die Wand.</i>', say: 'Der Schrank steht neben dem Fenster.' },
      { bild: 'bilder/lesen/wohnung.webp', art: 'das', wort: 'Regal', kurz: 'die Bretter an der Wand für Bücher und Kisten', bsp: 'Im Regal stehen die Bücher, oben liegt der Kalender.', tipp: 'Ein guter Satz zum Üben: Bücher <b>stehen</b> nebeneinander, aber ein einzelnes Buch <b>liegt</b> flach. Dieselbe Sache, zwei Verben — je nachdem, wie sie da ist.', say: 'Im Regal stehen die Bücher, oben liegt der Kalender.' },
      { bild: 'vok-bild/die-wand.webp', art: 'die', wort: 'Wand', kurz: 'die Seite vom Zimmer', bsp: 'An der Wand hängt ein Foto von meiner Familie.', tipp: 'An der Wand <b>hängt</b> etwas (wo, Dativ). Wenn du es aufhängst: <i>Ich hänge das Foto <b>an die</b> Wand</i> (wohin, Akkusativ). Nur ein Buchstabe Unterschied, und trotzdem hört man ihn.', say: 'An der Wand hängt ein Foto von meiner Familie.' },
      { bild: 'bilder/lesen/zettel.webp', art: 'der', wort: 'Zettel', kurz: 'das kleine Stück Papier mit einer Notiz', bsp: 'Ich lege dir den Zettel auf den Tisch.', tipp: 'Papier ist flach, also <b>legen</b> und <b>liegen</b>. Und achte auf den Fall: <i>auf <b>den</b> Tisch</i> beim Hinlegen, <i>auf <b>dem</b> Tisch</i>, wenn er schon da ist.', say: 'Ich lege dir den Zettel auf den Tisch.' },
      { bild: 'amanda/sz-kueche.webp', art: 'die', wort: 'Küche', kurz: 'der Raum, in dem gekocht wird', bsp: 'In der Küche steht alles auf dem Tisch.', tipp: 'Ein Raum zum Üben: Die Tassen <b>stehen</b> im Schrank, die Löffel <b>liegen</b> in der Schublade, das Handtuch <b>hängt</b> am Haken. Drei Verben in einem Zimmer.', say: 'In der Küche steht alles auf dem Tisch.' },
      { bild: 'amanda/sz-wohnen.webp', art: 'das', wort: 'Sofa', kurz: 'das weiche Möbel zum Sitzen', bsp: 'Setz dich aufs Sofa, ich mache uns einen Tee.', tipp: '<b>Setzen</b> ist die Bewegung, <b>sitzen</b> der Zustand: <i>Ich setze mich hin, dann sitze ich.</i> Und aufgepasst: <i>Setz dich</i> ist im Alltag der normale Satz, nicht <i>Sitz dich</i>.', say: 'Setz dich aufs Sofa, ich mache uns einen Tee.' },
      { bild: 'amanda/a-stift.webp', art: 'der', wort: 'Stift', kurz: 'das Ding zum Schreiben', bsp: 'Der Stift liegt hinter dem Laptop.', tipp: 'Ein Stift <b>liegt</b> normalerweise. Er kann aber auch im Becher <b>stehen</b> — genau daran sieht man: nicht das Ding entscheidet, sondern wie es gerade da ist.', say: 'Der Stift liegt hinter dem Laptop.' },
      { bild: 'vok-bild/der-balkon.webp', art: 'der', wort: 'Balkon', kurz: 'der kleine Platz draußen an der Wohnung', bsp: 'Auf dem Balkon stehen zwei Stühle und ein Tisch.', tipp: 'Draußen genauso: Stühle <b>stehen</b>, die Decke <b>liegt</b> auf dem Stuhl, die Lichterkette <b>hängt</b> am Geländer.', say: 'Auf dem Balkon stehen zwei Stühle und ein Tisch.' },
      { bild: 'vok-bild/der-keller.webp', art: 'der', wort: 'Keller', kurz: 'der Raum unter dem Haus', bsp: 'Die alten Kisten stehen unten im Keller.', tipp: 'Kisten <b>stehen</b>, wenn sie aufrecht sind, und <b>liegen</b>, wenn sie umgekippt sind. Bring sie hin: <i>Ich <b>stelle</b> die Kisten in den Keller.</i>', say: 'Die alten Kisten stehen unten im Keller.' },
      { bild: 'bilder/lesen/umzug.webp', art: 'der', wort: 'Karton', kurz: 'die große Pappkiste beim Umzug', bsp: 'Stell den Karton bitte neben die Tür.', tipp: 'Beim Umzug braucht man alle sechs Verben in fünf Minuten. Genau deshalb ist das die beste Übung: <i>stell, leg, häng, setz</i> — und danach <i>steht, liegt, hängt, sitzt</i>.', say: 'Stell den Karton bitte neben die Tür.' },
      { bild: 'amanda/sz-lager.webp', art: 'das', wort: 'Lager', kurz: 'der Raum in der Firma, wo die Ware steht', bsp: 'Die Ware liegt seit gestern im Lager.', tipp: 'Im Beruf hörst du beides: Die Ware <b>liegt</b> im Lager (sie ist da) und <i>Wir <b>legen</b> die Ware zurück</i> (jemand tut etwas). Achte im Betrieb genau darauf.', say: 'Die Ware liegt seit gestern im Lager.' },
      { bild: 'bilder/lesen/buero.webp', art: 'der', wort: 'Platz', kurz: 'die Stelle, wo etwas oder jemand hingehört', bsp: 'Jedes Ding hat hier seinen Platz.', tipp: 'Zwei feste Sätze für den Alltag: <i>Nimm bitte Platz</i> (setz dich) und <i>Stell es an seinen Platz zurück</i> (räum es weg). Beide hörst du ständig.', say: 'Jedes Ding hat hier seinen Platz.' }
    ],
    spiel: { text: '💡 <strong>Spiel „Im Zimmer“:</strong> Einer nennt einen Gegenstand aus dem Raum, in dem er sitzt. Der andere sagt in einem Satz, ob er steht, liegt oder hängt — und dann noch einen Satz, wie er dorthin gekommen ist.' }
  },

  konzepte: {
    tab: '🔍 Drei Paare',
    zuerst: 'dreier',
    h2: 'Tust du etwas',
    hl: 'oder ist es nur so?',
    ssub: 'Jedes der drei Paare funktioniert gleich. Links das Verb, das etwas tut. Rechts das, das nur beschreibt.',
    dreier: [
      { emoji: '🧍', wort: 'stellen ⇄ stehen', was: 'für alles, was hoch ist', bsp: 'Ich <b>stelle</b> die Flasche auf den Tisch. → Sie <b>steht</b> auf dem Tisch.' },
      { emoji: '📄', wort: 'legen ⇄ liegen', was: 'für alles, was flach ist', bsp: 'Ich <b>lege</b> das Buch auf den Tisch. → Es <b>liegt</b> auf dem Tisch.' },
      { emoji: '🪑', wort: 'setzen ⇄ sitzen', was: 'für Menschen und Tiere', bsp: 'Ich <b>setze</b> mich auf den Stuhl. → Ich <b>sitze</b> auf dem Stuhl.' }
    ],
    paare: [
      {
        jaLabel: 'So ist es richtig', ja: 'Ich lege das Buch auf den Tisch.',
        jaWarumLabel: 'Warum das stimmt', jaWarum: 'Du tust etwas mit dem Buch, also <b>legen</b>. Danach kommt die Frage <i>wohin</i>, und deshalb steht der Akkusativ: <b>auf den</b> Tisch.',
        noLabel: 'So klingt es falsch', no: 'Ich liege das Buch auf dem Tisch.',
        noWarumLabel: 'Das Problem', noWarum: 'Zwei Fehler auf einmal, und sie hängen zusammen: <i>liegen</i> braucht kein Ding hinter sich, also passt es hier nicht — und mit dem falschen Verb rutscht auch der Fall in den Dativ.'
      },
      {
        jaLabel: 'So ist es richtig', ja: 'Das Foto hängt an der Wand.',
        jaWarumLabel: 'Warum das stimmt', jaWarum: 'Hier passiert nichts, es ist einfach so. Also die Frage <i>wo</i> und der Dativ: <b>an der</b> Wand.',
        noLabel: 'So klingt es falsch', no: 'Das Foto hängt an die Wand.',
        noWarumLabel: 'Das Problem', noWarum: 'Der Akkusativ macht daraus eine Bewegung — als würde das Foto gerade dorthin fliegen. Richtig ist er nur, wenn jemand es aufhängt: <i>Ich hänge das Foto an die Wand.</i>'
      },
      {
        jaLabel: 'So ist es richtig', ja: 'Setz dich doch, du sitzt ja schon zwei Stunden im Zug.',
        jaWarumLabel: 'Warum das stimmt', jaWarum: '<b>Setz dich</b> ist die Bewegung — deshalb <i>dich</i>, Akkusativ. <b>du sitzt</b> ist der Zustand danach. Beide im selben Satz, und man hört den Unterschied sofort.',
        noLabel: 'So klingt es falsch', no: 'Sitz dich doch, du setzt ja schon zwei Stunden im Zug.',
        noWarumLabel: 'Das Problem', noWarum: 'Genau vertauscht. Merk dir die Aufforderung als festen Block: <b>Setz dich</b> und <b>Nimm Platz</b> — beides heißt dasselbe, beides sagt man ständig.'
      }
    ],
    hilfe: {
      knopf: '🆘 Welches Verb, welcher Fall?',
      vor: 'Zwei Fragen, dann steht alles fest:',
      punkte: [
        '<b>Kommt hinter dem Verb ein Ding?</b> Dann tust du etwas: <b>stellen, legen, setzen, hängen</b>.',
        '<b>Kommt kein Ding?</b> Dann ist es ein Zustand: <b>stehen, liegen, sitzen, hängen</b>.',
        '<b>Beim Tun</b> fragst du <i>wohin</i> — und danach kommt der Akkusativ: <i>auf <b>den</b> Tisch, an <b>die</b> Wand, in <b>das</b> Regal</i>.',
        '<b>Beim Zustand</b> fragst du <i>wo</i> — und danach kommt der Dativ: <i>auf <b>dem</b> Tisch, an <b>der</b> Wand, in <b>dem</b> Regal</i>.'
      ],
      nach: 'Und ein Trick, der immer geht: Sag den Satz erst mit <i>Ich tue etwas</i> und dann mit <i>Es ist</i>. Wenn nur eine der beiden Fassungen klingt, hast du das Verb gefunden.'
    },
    tipp: { art: 'yellow', text: '🎯 <strong>Zu zweit, zwei Minuten:</strong> Einer sagt einen Satz mit dem Tun-Verb, der andere sofort denselben Satz mit dem Zustand-Verb. <i>Ich stelle die Tasse hin</i> — <i>Die Tasse steht da.</i>' }
  },

  saetze: {
    h2: 'Vier Bausteine',
    hl: 'für die Wohnung',
    ssub: 'Sagen, wo etwas ist. Sagen, wohin es soll. Nachfragen. Und jemanden bitten, es hinzustellen.',
    akkLabel: 'der Schritt',
    mengeLabel: 'was du damit sagst',
    a2: [
      { titel: '1 · 📍 Wo ist es?', chips: ['Es steht auf dem Tisch.', 'Es liegt im Regal.', 'Es hängt an der Tür.', 'Es sitzt hinten im Auto.'], bsp: 'Der Schlüssel liegt im Regal, gleich neben der Post.', say: 'Der Schlüssel liegt im Regal, gleich neben der Post.' },
      { titel: '2 · ➡️ Wohin soll es?', chips: ['Stell es auf den Tisch.', 'Leg es ins Regal.', 'Häng es an die Tür.', 'Setz dich nach hinten.'], bsp: 'Stell die Tasche bitte neben die Tür, dann fällt niemand darüber.', say: 'Stell die Tasche bitte neben die Tür, dann fällt niemand darüber.' },
      { titel: '3 · ❓ Nachfragen', chips: ['Wo liegt das denn?', 'Wohin soll ich das stellen?', 'Steht das noch da?', 'Hast du es hingelegt?'], bsp: 'Wohin soll ich den Karton stellen — in den Keller oder auf den Balkon?', say: 'Wohin soll ich den Karton stellen — in den Keller oder auf den Balkon?' },
      { titel: '4 · 🙏 Bitten', chips: ['Kannst du das kurz hinstellen?', 'Leg es einfach dorthin.', 'Häng es bitte auf.', 'Räum es an seinen Platz.'], bsp: 'Kannst du die Kiste kurz hinstellen? Ich mache die Tür auf.', say: 'Kannst du die Kiste kurz hinstellen? Ich mache die Tür auf.' }
    ],
    b1: [
      { titel: '1 · 📍 Genau beschreiben', chips: ['Es steht ganz hinten links.', 'Es liegt unter den Unterlagen.', 'Es hängt zwischen den beiden Fenstern.', 'Es steht seit dem Umzug im Keller.'], bsp: 'Der Ordner liegt unter den Unterlagen, ganz unten im zweiten Fach.', say: 'Der Ordner liegt unter den Unterlagen, ganz unten im zweiten Fach.' },
      { titel: '2 · ➡️ Genau anweisen', chips: ['Stell es bitte so hin, dass …', 'Leg es zu den anderen dazu.', 'Häng es lieber weiter oben auf.', 'Setz dich am besten dorthin, wo …'], bsp: 'Stell die Kartons so hin, dass man noch an das Fenster kommt.', say: 'Stell die Kartons so hin, dass man noch an das Fenster kommt.' },
      { titel: '3 · ❓ Höflich nachhaken', chips: ['Weißt du zufällig, wo … liegt?', 'Ist das schon irgendwo hingelegt worden?', 'Wo hat das früher gestanden?', 'Wohin gehört das eigentlich?'], bsp: 'Weißt du zufällig, wo die Rechnung liegt? Ich habe sie gestern noch gesehen.', say: 'Weißt du zufällig, wo die Rechnung liegt? Ich habe sie gestern noch gesehen.' },
      { titel: '4 · 🙏 Freundlich bitten', chips: ['Wärst du so nett und stellst …', 'Könntest du das bitte aufhängen?', 'Wenn du sowieso hingehst, nimm es mit.', 'Lass es ruhig da liegen, ich mache das später.'], bsp: 'Wärst du so nett und stellst die Stühle zurück? Dann räume ich hier fertig auf.', say: 'Wärst du so nett und stellst die Stühle zurück? Dann räume ich hier fertig auf.' }
    ],
    tipp: { art: 'teal', text: '📣 <strong>Reihum:</strong> Jeder beschreibt seinen Schreibtisch in vier Sätzen — einmal <i>steht</i>, einmal <i>liegt</i>, einmal <i>hängt</i>, einmal <i>sitzt</i>. Die anderen hören auf die Fälle.' }
  },

  dialoge: {
    h2: 'Vier Situationen —',
    hl: 'zwei Runden',
    ssub: '<b>Runde 1:</b> Lest den Dialog zu zweit laut. <b>Runde 2:</b> Klappt die Zeilen zu und sprecht frei — nur die Stichwörter bleiben.',
    liste: [
      {
        bild: 'bilder/lesen/umzug.webp', alt: 'Kartons und Möbel in einem leeren Zimmer beim Umzug',
        titel: 'Der Umzug',
        situation: 'A trägt die Kisten herein und weiß nicht wohin. B steht in der Wohnung und sagt es ihm.',
        zeilen: [
          { wer: 'a', text: 'Wohin soll ich die Kartons stellen?' },
          { wer: 'b', text: 'Stell sie erst mal in den Flur. Im Zimmer steht noch das Bett quer.', cue: 'Zweimal dasselbe Verb, zwei Formen: <b>stell</b> mit <i>in den Flur</i> (wohin, Akkusativ), <b>steht</b> mit <i>im Zimmer</i> (wo, Dativ).' },
          { wer: 'a', text: 'Und die Lampe? Die ist ziemlich schwer.' },
          { wer: 'b', text: 'Leg sie vorsichtig auf das Sofa, dann hängen wir sie später auf.', cue: '<b>legen</b>, weil die Lampe jetzt flach daliegt. Und <b>aufhängen</b> für später — dasselbe Ding, zwei verschiedene Verben.' },
          { wer: 'a', text: 'Ich brauche eine Pause. Wo kann man sich hier hinsetzen?' },
          { wer: 'b', text: 'Setz dich auf den Stuhl am Fenster, der steht schon richtig.', cue: '<b>Setz dich</b> für die Bewegung, <b>steht</b> für den Stuhl. In einem Satz beide Muster.' }
        ]
      },
      {
        bild: 'amanda/sz-kueche.webp', alt: 'Eine Küche mit Schränken, Geschirr und einem Tisch',
        titel: 'In der Küche',
        situation: 'A sucht etwas und findet es nicht. B weiß genau, wo alles hingehört.',
        zeilen: [
          { wer: 'a', text: 'Wo sind denn die großen Löffel?' },
          { wer: 'b', text: 'Die liegen in der zweiten Schublade, ganz vorn.', cue: '<b>liegen</b> für Besteck, weil es flach daliegt. Und <i>in der</i> Schublade — Dativ, weil nichts bewegt wird.' },
          { wer: 'a', text: 'Und die Gläser? Ich sehe nur Tassen.' },
          { wer: 'b', text: 'Die stehen im Schrank über der Spüle. Stell sie danach bitte wieder zurück.', cue: '<b>stehen</b> und dann <b>stellen</b> — Zustand und Handlung direkt hintereinander. Achte auf <i>im Schrank</i> gegen <i>zurück</i>.' },
          { wer: 'a', text: 'Mache ich. Wo hängt das Handtuch?' },
          { wer: 'b', text: 'Am Haken neben der Tür. Häng es bitte auch wieder dorthin.', cue: '<b>hängen</b> zweimal — einmal als Zustand (<i>am Haken</i>, Dativ), einmal als Bitte (<i>dorthin</i>, Richtung).' }
        ]
      },
      {
        bild: 'amanda/sz-lager.webp', alt: 'Regale mit Kartons in einem Lager',
        titel: 'Im Lager',
        situation: 'A ist neu in der Firma und soll die Lieferung einräumen. B erklärt das System.',
        zeilen: [
          { wer: 'a', text: 'Die Lieferung ist da. Wohin damit?' },
          { wer: 'b', text: 'Stell die Kartons ins Regal drei, und leg die Lieferscheine auf den Schreibtisch.', cue: 'Beide Tun-Verben in einem Satz: <b>stellen</b> für die Kartons (hoch), <b>legen</b> für das Papier (flach). Beides mit Akkusativ.' },
          { wer: 'a', text: 'Im Regal drei steht schon etwas.' },
          { wer: 'b', text: 'Das ist die alte Ware, die liegt da seit dem Sommer. Stell sie einfach nach unten.', cue: '<b>steht</b> und <b>liegt</b> für dasselbe Regal — je nachdem, ob die Ware aufrecht ist oder nicht.' },
          { wer: 'a', text: 'Und wo trage ich das ein?' },
          { wer: 'b', text: 'Die Liste hängt hinten an der Tür. Häng sie danach wieder auf, sonst sucht sie morgen jeder.', cue: 'Zum dritten Mal <b>hängen</b> in beiden Rollen. Wer das hier hört, hat das Muster.' }
        ]
      },
      {
        bild: 'bilder/lesen/buero.webp', alt: 'Ein Schreibtisch mit Laptop, Ordnern und einer Tasse',
        titel: 'Am Schreibtisch',
        situation: 'A sucht eine Rechnung. B hat sie zuletzt gehabt und erinnert sich nur ungefähr.',
        zeilen: [
          { wer: 'a', text: 'Hast du die Rechnung gesehen? Sie lag gestern noch hier.' },
          { wer: 'b', text: 'Ich habe sie in den Ordner gelegt. Der steht links im Regal.', cue: '<b>gelegt</b> mit <i>in den</i> Ordner (Bewegung), <b>steht</b> mit <i>im</i> Regal (Zustand). Perfekt und Präsens direkt nebeneinander.' },
          { wer: 'a', text: 'Da ist sie nicht. Nur die alten Verträge liegen drin.' },
          { wer: 'b', text: 'Dann habe ich sie vielleicht auf den Stapel gelegt, der hinten auf dem Schrank liegt.', cue: 'Wieder beide Fälle: <i>auf <b>den</b> Stapel</i> beim Hinlegen, <i>auf <b>dem</b> Schrank</i> beim Daliegen.' },
          { wer: 'a', text: 'Ah, hier ist sie. Ganz unten.' },
          { wer: 'b', text: 'Gut. Leg sie mir bitte auf den Tisch, ich hefte sie gleich ab.', cue: 'Ein letzter Auftrag mit <b>legen</b> und Akkusativ. <i>Abheften</i> ist übrigens das Wort, das in jedem deutschen Büro fällt.' }
        ]
      }
    ],
    tipp: { art: 'yellow', text: '🎭 <strong>Und jetzt ihr:</strong> Spielt Dialog 2 mit eurer eigenen Küche. Regel: In jeder Antwort muss ein Zustand-Verb und ein Tun-Verb vorkommen.' }
  },

  grammatik: {
    h2: '🧩 Wohin und wo:',
    hl: 'Akkusativ oder Dativ',
    ssub: 'Diese neun Präpositionen können beides. Welchen Fall sie nehmen, entscheidet allein das Verb davor.',
    intro: 'Die neun heißen <b>an, auf, hinter, in, neben, über, unter, vor, zwischen</b>. Nach einem Tun-Verb steht der Akkusativ, nach einem Zustand-Verb der Dativ. Und meistens hört man den Unterschied nur an einem Buchstaben: <i>an <b>die</b> Wand</i> gegen <i>an <b>der</b> Wand</i>.',
    kette: [
      { emoji: '🙋', rolle: 'wer', bsp: 'Ich' },
      { emoji: '🔧', rolle: 'Tun-Verb', bsp: 'stelle' },
      { emoji: '📦', rolle: 'was', bsp: 'die Tasse' },
      { emoji: '➡️', rolle: 'wohin', bsp: 'auf den Tisch' }
    ],
    felder: [
      { rolle: 'Die Tasse', wort: 'Die Tasse' },
      { rolle: 'Zustand-Verb', wort: 'steht' },
      { rolle: 'wo', wort: 'auf dem Tisch', hervor: true },
      { rolle: 'kein Objekt', wort: '—' }
    ],
    bloecke: [
      {
        h2: 'Ein Buchstabe',
        hl: 'macht den Unterschied',
        ssub: 'Dieselbe Präposition, zwei Fälle. Im Gespräch entscheidet das darüber, ob man dich versteht oder nachfragt.',
        dreier: [
          { emoji: '➡️', wort: 'auf den Tisch', was: 'wohin · Akkusativ', bsp: 'Ich <b>lege</b> das Buch auf <b>den</b> Tisch.' },
          { emoji: '📍', wort: 'auf dem Tisch', was: 'wo · Dativ', bsp: 'Das Buch <b>liegt</b> auf <b>dem</b> Tisch.' },
          { emoji: '🚪', wort: 'an die / an der', was: 'genauso bei der Wand', bsp: 'Ich <b>hänge</b> es an <b>die</b> Wand. → Es <b>hängt</b> an <b>der</b> Wand.' }
        ],
        chips: ['an', 'auf', 'hinter', 'in', 'neben', 'über', 'unter', 'vor', 'zwischen']
      },
      {
        h2: 'Im Perfekt',
        hl: 'gibt es noch eine Falle',
        ssub: 'Die Tun-Verben sind regelmäßig, die Zustand-Verben nicht. Genau hier verrutscht es am häufigsten.',
        paare: [
          {
            jaLabel: 'So ist es richtig', ja: 'Ich habe das Buch auf den Tisch gelegt — es hat lange dort gelegen.',
            jaWarumLabel: 'Warum das stimmt', jaWarum: '<b>legen</b> ist regelmäßig: <i>gelegt</i>. <b>liegen</b> ist unregelmäßig: <i>gelegen</i>. Beide mit <i>haben</i> — im Norden hört man bei <i>liegen</i> auch <i>ist gelegen</i>, das ist regional und kein Fehler.',
            noLabel: 'So klingt es falsch', no: 'Ich habe das Buch auf den Tisch gelegen — es hat lange dort gelegt.',
            noWarumLabel: 'Das Problem', noWarum: 'Genau vertauscht. Merk dir die Reihe im Paar: <b>legen, legte, gelegt</b> — <b>liegen, lag, gelegen</b>. Erst das Paar aufsagen, dann den Satz.'
          }
        ]
      }
    ],
    bauH2: '🧱 Bau die Sätze selbst',
    bauSsub: 'Tippe die Teile in der richtigen Reihenfolge an. Achte besonders auf den Artikel nach der Präposition.',
    storyH2: '📖 Und jetzt im Zusammenhang',
    storySsub: 'Ein Abend nach dem Umzug. Wähle in jeder Lücke das passende Verb oder den passenden Artikel.',
    hilfe: {
      knopf: '🆘 Akkusativ oder Dativ?',
      vor: 'Vier Schritte, in dieser Reihenfolge:',
      punkte: [
        '<b>Erst das Verb.</b> Tut jemand etwas? Dann <i>stellen, legen, setzen, hängen</i>.',
        '<b>Dann die Frage.</b> Tun-Verb heißt <i>wohin</i>, Zustand-Verb heißt <i>wo</i>.',
        '<b>Dann der Fall.</b> <i>wohin</i> ist Akkusativ: <b>den, die, das</b>. <i>wo</i> ist Dativ: <b>dem, der, dem</b>.',
        '<b>Und die kurzen Formen:</b> <i>ins, ans, aufs</i> sind immer Akkusativ. <i>im, am</i> sind immer Dativ.'
      ],
      nach: 'Der schnellste Test im Gespräch: Sag nur <i>ins</i> oder <i>im</i> und hör hin. <i>Ich gehe ins Bad</i> gegen <i>Ich bin im Bad</i> — dieses Paar kennst du längst, und alle anderen funktionieren genauso.'
    }
  },

  rollenspiele: {
    h2: '🎭 Drei Situationen',
    hl: 'zu zweit',
    ssub: 'Einer fragt, einer weist an. Danach tauschen — beim zweiten Mal ohne die Sätze unten. Mindestens drei Verbpaare pro Runde.',
    liste: [
      {
        titel: 'Umzugstag',
        situation: 'A trägt die Sachen herein und fragt bei jedem Teil nach. B kennt die Wohnung und sagt genau, wohin alles soll.',
        a2: ['Wohin soll ich das stellen?', 'Leg ich das hier hin?', 'Wo steht das Bett?', 'Kann ich mich kurz hinsetzen?'],
        b1: ['Stell die Kartons erst mal in den Flur, im Zimmer steht noch das Bett quer', 'Leg die Lampe vorsichtig aufs Sofa, wir hängen sie später auf', 'Die schweren Kisten stellst du am besten nach unten', 'Setz dich auf den Stuhl am Fenster, der steht schon richtig'],
        gut: 'Bei jedem Ding stand das richtige Verb — und beim Hinstellen kam der Akkusativ, beim Beschreiben der Dativ. Mindestens einmal kamen beide im selben Satz vor.'
      },
      {
        titel: 'Ich finde es nicht',
        situation: 'A sucht etwas Wichtiges und wird langsam nervös. B hat es zuletzt gehabt und erinnert sich nur Stück für Stück.',
        a2: ['Wo liegt denn der Schlüssel?', 'Hast du ihn irgendwo hingelegt?', 'Steht das noch im Regal?', 'Ich habe überall geschaut'],
        b1: ['Ich habe ihn gestern auf die Kommode gelegt, da müsste er noch liegen', 'Kann sein, dass ihn jemand in die Schublade gelegt hat', 'Schau mal hinter den Ordnern, die stehen ganz links', 'Wenn er nicht da liegt, hängt er vielleicht am Haken neben der Tür'],
        gut: 'Beide haben Bewegung und Zustand sauber getrennt: <i>gelegt</i> mit <i>wohin</i>, <i>liegt</i> mit <i>wo</i>. Und niemand hat <i>Ich liege es hin</i> gesagt.'
      },
      {
        titel: 'Der erste Tag im Lager',
        situation: 'A fängt heute an und soll die Lieferung einräumen. B erklärt, was wohin gehört — und warum das System wichtig ist.',
        a2: ['Wohin kommen die Kartons?', 'Wo liegen die Lieferscheine?', 'Soll ich das ins Regal stellen?', 'Wo hängt die Liste?'],
        b1: ['Stell die Kartons ins dritte Regal und leg die Papiere auf den Schreibtisch', 'Die alte Ware liegt seit dem Sommer da, die stellst du einfach nach unten', 'Die Liste hängt hinten an der Tür, häng sie danach wieder auf', 'Wenn alles an seinem Platz steht, findet es auch die Spätschicht'],
        gut: 'Alle drei Paare sind vorgekommen, und mindestens einmal stand ein Tun-Verb und ein Zustand-Verb im selben Satz. Der Fall hat jedes Mal zum Verb gepasst.'
      }
    ]
  },

  challenge: {
    ssub: 'Neunzig Sekunden über dein Zimmer: Was steht darin, was liegt, was hängt — und wohin stellst du gleich als Erstes etwas zurück?',
    hilfe: {
      knopf: '🆘 Mir fällt nichts ein',
      vor: 'Vier Sätze, dann trägt dich die Zeit:',
      punkte: [
        '<b>steht:</b> <i>Bei mir steht der Tisch direkt am Fenster.</i>',
        '<b>liegt:</b> <i>Auf dem Tisch liegen meistens zu viele Zettel.</i>',
        '<b>hängt:</b> <i>An der Wand hängt ein Bild, das ich selbst gemalt habe.</i>',
        '<b>stelle / lege:</b> <i>Gleich stelle ich die Tasse in die Küche und lege die Post weg.</i>'
      ],
      nach: 'Und wenn du in der Mitte hängst, nimm dasselbe Ding noch einmal und dreh es um: <i>Das Buch liegt hier</i> wird zu <i>Ich habe das Buch hierher gelegt</i>. Schon geht es weiter.'
    },
    tipp: { art: 'yellow', text: '⏱️ <strong>Spielregel:</strong> In jeder Runde müssen <u>drei verschiedene Verben</u> vorkommen. Wer <i>Ich liege das hin</i> sagt, fängt noch einmal an.' }
  },

  ueben: { tipp: { art: 'teal', text: '📣 <strong>Danach laut:</strong> Einer nennt einen Gegenstand, der Nächste sagt zwei Sätze dazu — einmal mit dem Tun-Verb, einmal mit dem Zustand-Verb.' } },

  hausaufgabe: {
    h2: '📮 Deine Hausaufgabe bis',
    hl: 'Montag',
    ssub: 'Vier kleine Aufgaben, zusammen etwa 25 Minuten. Nächste Woche fangen wir mit einem neuen Thema an.',
    warum: { text: '💡 <strong>Warum das hilft:</strong> Diese sieben Verben kommen jeden Tag vor — zu Hause, im Lager, im Büro, beim Arzt. Sie sind der häufigste Fehler auf B1 und der letzte, der verschwindet. Wer sie sicher hat, klingt sofort ein Stück deutscher.' },
    a2: [
      { emoji: '🏠', titel: 'Dein Zimmer', zeit: '6 Min', text: 'Schreib zehn Sätze über den Raum, in dem du gerade sitzt: Was steht, was liegt, was hängt, wer sitzt wo?' },
      { emoji: '🔁', titel: 'Dieselben zehn umgedreht', zeit: '7 Min', text: 'Schreib jeden Satz noch einmal als Handlung: <i>Ich stelle …</i>, <i>Ich lege …</i>, <i>Ich hänge …</i> Achte auf den Akkusativ.' },
      { emoji: '📸', titel: 'Ein Foto beschreiben', zeit: '5 Min', text: 'Such ein Foto von einem Zimmer und beschreib es in sechs Sätzen. Jedes der drei Paare muss einmal vorkommen.' },
      { emoji: '🎙️', titel: 'Aufräumen laut', zeit: '7 Min', text: 'Nimm eine Sprachnachricht auf: Räum zwei Minuten lang wirklich etwas auf und sag laut, was du gerade wohin stellst oder legst.' }
    ],
    b1: [
      { emoji: '📝', titel: 'Eine Wegbeschreibung im Haus', zeit: '7 Min', text: 'Schreib jemandem, wo er in deiner Wohnung etwas findet — acht Sätze, jeder mit einer der neun Präpositionen.' },
      { emoji: '🔍', titel: 'Perfekt üben', zeit: '6 Min', text: 'Schreib zehn Sätze im Perfekt, abwechselnd mit Tun- und Zustand-Verb: <i>gelegt</i> und <i>gelegen</i>, <i>gestellt</i> und <i>gestanden</i>, <i>gesetzt</i> und <i>gesessen</i>.' },
      { emoji: '🎙️', titel: 'Zwei Minuten Anweisung', zeit: '6 Min', text: 'Nimm auf, wie du jemandem erklärst, wie er einen Raum einrichten soll. Nur Anweisungen, alle mit Akkusativ.' },
      { emoji: '👂', titel: 'Hör genau hin', zeit: '6 Min', text: 'Such ein deutsches Video über Wohnen oder Aufräumen und notier acht Stellen mit diesen Verben. Schreib dazu, welcher Fall folgte.' }
    ],
    hilfeA2: {
      knopf: '💡 Beispiel ansehen (Aufgabe 1)',
      vor: 'So sehen die zehn Sätze aus:',
      punkte: [
        '<i>Der Tisch <b>steht</b> vor dem Fenster.</i>',
        '<i>Auf dem Tisch <b>liegen</b> drei Bücher.</i>',
        '<i>An der Wand <b>hängt</b> eine Uhr.</i>',
        '<i>Im Regal <b>stehen</b> die Ordner.</i>',
        '<i>Ich <b>sitze</b> auf dem Stuhl neben der Tür.</i>'
      ],
      nach: 'Ein einziger Test genügt: Frag bei jedem Satz <i>wo</i>. Wenn die Antwort passt, muss dort der Dativ stehen — <i>dem, der, dem</i>. Kommt dir <i>wohin</i> in den Sinn, hast du das falsche Verb.'
    },
    hilfeB1: {
      knopf: '💡 Beispiel ansehen (Aufgabe 2)',
      vor: 'Das sind die Formen, auf die es ankommt:',
      punkte: [
        '<b>legen:</b> legte, hat gelegt — <b>liegen:</b> lag, hat gelegen',
        '<b>stellen:</b> stellte, hat gestellt — <b>stehen:</b> stand, hat gestanden',
        '<b>setzen:</b> setzte, hat gesetzt — <b>sitzen:</b> saß, hat gesessen',
        '<b>hängen (tun):</b> hängte, hat gehängt — <b>hängen (sein):</b> hing, hat gehangen',
        '<b>Und ein Satz mit beidem:</b> <i>Ich habe das Bild an die Wand gehängt, dort hat es zehn Jahre gehangen.</i>'
      ],
      nach: 'Ein Hinweis, der viel spart: Die Tun-Verben sind alle regelmäßig, die Zustand-Verben alle unregelmäßig. Wenn du also eine unregelmäßige Form hörst, weißt du schon, dass kein Objekt dahinterkommt.'
    },
    abgabe: 'Schick mir bis Montag 12 Uhr deine zwanzig Sätze und die Sprachnachricht — ich markiere dir jede Stelle, an der der Fall nicht zum Verb passt.',
    ausblick: 'Nächste Woche fangen wir mit einem neuen Thema an. Die sieben Verben von heute bleiben aber im Lernbereich, dort kannst du sie so oft üben, wie du willst.'
  },

  daten: {
    sk: [
      'Beschreib deinen Schreibtisch: Was steht, was liegt, was hängt?',
      'Erklär jemandem, wohin er die Einkäufe in deiner Küche stellen soll.',
      'Erzähl von deinem letzten Umzug — was kam zuerst ins neue Zimmer?',
      'Sag fünf Sätze mit <i>Ich habe … hingelegt</i> und fünf mit <i>Es liegt …</i>',
      'Wo hängt bei dir zu Hause etwas an der Wand, und warum genau dort?',
      'Beschreib den Raum, in dem du als Kind geschlafen hast.',
      'Jemand kommt zu Besuch. Sag drei Sätze, wo er sich hinsetzen kann.',
      'Erklär den Unterschied zwischen <i>stellen</i> und <i>stehen</i> in zwei Sätzen.',
      'Was liegt bei dir seit Monaten irgendwo herum und sollte weg?',
      'Beschreib ein Regal — oben, in der Mitte, unten.'
    ],
    w90: [
      { w: 'der Schrank', b: 'vok-bild/der-schrank.webp', h: ['stehen', 'stellen', 'die Kleidung', 'die Tür', 'einräumen'] },
      { w: 'das Regal', b: 'bilder/lesen/wohnung.webp', h: ['stehen', 'die Bücher', 'das Fach', 'oben', 'aufbauen'] },
      { w: 'die Wand', b: 'vok-bild/die-wand.webp', h: ['hängen', 'das Bild', 'aufhängen', 'der Nagel', 'daneben'] },
      { w: 'der Zettel', b: 'bilder/lesen/zettel.webp', h: ['liegen', 'legen', 'die Notiz', 'der Tisch', 'aufschreiben'] },
      { w: 'die Küche', b: 'amanda/sz-kueche.webp', h: ['stehen', 'die Schublade', 'das Geschirr', 'der Haken', 'aufräumen'] },
      { w: 'das Sofa', b: 'amanda/sz-wohnen.webp', h: ['sitzen', 'setzen', 'gemütlich', 'die Decke', 'das Wohnzimmer'] },
      { w: 'der Balkon', b: 'vok-bild/der-balkon.webp', h: ['stehen', 'der Stuhl', 'draußen', 'die Pflanze', 'das Geländer'] },
      { w: 'der Keller', b: 'vok-bild/der-keller.webp', h: ['stehen', 'die Kiste', 'unten', 'dunkel', 'abstellen'] },
      { w: 'der Karton', b: 'bilder/lesen/umzug.webp', h: ['stellen', 'der Umzug', 'tragen', 'schwer', 'auspacken'] },
      { w: 'das Lager', b: 'amanda/sz-lager.webp', h: ['liegen', 'die Ware', 'das Regal', 'einräumen', 'die Lieferung'] }
    ],
    quiz: [
      { q: 'Welcher Satz ist richtig?', o: ['Ich lege das Buch auf den Tisch.', 'Ich liege das Buch auf den Tisch.', 'Ich lege das Buch auf dem Tisch.', 'Ich liege das Buch auf dem Tisch.'], c: 0, e: 'Du tust etwas mit dem Buch, also <b>legen</b>. Und weil es eine Bewegung ist, kommt der Akkusativ: <b>auf den</b> Tisch.' },
      { q: 'Wie sagt man, dass das Foto schon an der Wand ist?', o: ['Das Foto hängt an der Wand.', 'Das Foto hängt an die Wand.', 'Das Foto hängt die Wand.', 'Das Foto hängt an dem Wand.'], c: 0, e: 'Kein Objekt, also Zustand — Frage <i>wo</i>, Antwort im Dativ: <b>an der</b> Wand. Mit Akkusativ wäre es eine Bewegung.' },
      { q: 'Was passt zu einem Stuhl?', o: ['Ich setze mich auf den Stuhl.', 'Ich sitze mich auf den Stuhl.', 'Ich setze mich auf dem Stuhl.', 'Ich sitze mir auf den Stuhl.'], c: 0, e: '<b>sich setzen</b> ist die Bewegung, deshalb Akkusativ. Danach: <i>Ich sitze auf dem Stuhl</i> — Zustand, Dativ.' },
      { q: 'Welche Perfektform gehört zu <u>liegen</u>?', o: ['gelegen', 'gelegt', 'geliegt', 'gelogen'], c: 0, e: '<b>liegen, lag, gelegen</b> — unregelmäßig, wie alle Zustand-Verben. <i>gelegt</i> gehört zu <b>legen</b>.' },
      { q: 'Welcher Satz stimmt?', o: ['Stell die Flasche in den Kühlschrank.', 'Steh die Flasche in den Kühlschrank.', 'Stell die Flasche in dem Kühlschrank.', 'Steht die Flasche in den Kühlschrank.'], c: 0, e: 'Eine Aufforderung mit einem Objekt, also das Tun-Verb <b>stellen</b> und der Akkusativ: <b>in den</b> Kühlschrank.' },
      { q: 'Was steht nach <u>wohin</u>?', o: ['der Akkusativ', 'der Dativ', 'der Genitiv', 'kein Fall'], c: 0, e: 'Bewegung heißt Akkusativ: <b>den, die, das</b>. Zustand heißt Dativ: <b>dem, der, dem</b>. Das gilt bei allen neun Wechselpräpositionen.' },
      { q: 'Welcher Satz ist falsch?', o: ['Die Löffel stehen in der Schublade.', 'Die Löffel liegen in der Schublade.', 'Ich lege die Löffel in die Schublade.', 'Die Gläser stehen im Schrank.'], c: 0, e: 'Besteck liegt flach in der Schublade, also <b>liegen</b>. <i>Stehen</i> passt zu Gläsern und Flaschen — allem, was aufrecht ist.' },
      { q: 'Welche Präposition kann <u>beide</u> Fälle nehmen?', o: ['zwischen', 'mit', 'aus', 'bei'], c: 0, e: 'Neun können beides: <b>an, auf, hinter, in, neben, über, unter, vor, zwischen</b>. <i>mit, aus</i> und <i>bei</i> nehmen immer den Dativ.' }
    ],
    gap: [
      { t: 'Ich ___ den Teller auf den Tisch.', o: ['stelle', 'stehe', 'liege', 'sitze'], a: 'stelle' },
      { t: 'Der Teller steht schon auf ___ Tisch.', o: ['dem', 'den', 'das', 'der'], a: 'dem' },
      { t: 'Häng das Bild bitte an ___ Wand.', o: ['die', 'der', 'dem', 'den'], a: 'die' },
      { t: 'Die Zeitung ___ seit gestern auf dem Sofa.', o: ['liegt', 'legt', 'stellt', 'setzt'], a: 'liegt' },
      { t: 'Bitte ___ dich, das dauert einen Moment.', o: ['setz', 'sitz', 'steh', 'leg'], a: 'setz' },
      { t: 'Ich habe die Rechnung in den Ordner ___.', o: ['gelegt', 'gelegen', 'gestanden', 'gesessen'], a: 'gelegt' },
      { t: 'Das Bild hat zehn Jahre an der Wand ___.', o: ['gehangen', 'gehängt', 'gestanden', 'gelegen'], a: 'gehangen' },
      { t: 'Stell die Kartons bitte in ___ Flur.', o: ['den', 'dem', 'der', 'das'], a: 'den' }
    ],
    gbau: [
      { f: 'Bau den Satz mit Bewegung:', t: ['Ich', 'stelle', 'die', 'Flasche', 'auf', 'den', 'Tisch'], l: ['Ich', 'stelle', 'die', 'Flasche', 'auf', 'den', 'Tisch'], e: 'Tun-Verb, dann das Objekt, dann <i>wohin</i> im Akkusativ: <b>auf den</b> Tisch.' },
      { f: 'Bau den Satz mit Zustand:', t: ['Die', 'Flasche', 'steht', 'auf', 'dem', 'Tisch'], l: ['Die', 'Flasche', 'steht', 'auf', 'dem', 'Tisch'], e: 'Kein Objekt, also Zustand — und deshalb <i>wo</i> im Dativ: <b>auf dem</b> Tisch.' },
      { f: 'Bau den Satz im Perfekt:', t: ['Ich', 'habe', 'das', 'Bild', 'an', 'die', 'Wand', 'gehängt'], l: ['Ich', 'habe', 'das', 'Bild', 'an', 'die', 'Wand', 'gehängt'], e: 'Das Partizip <b>gehängt</b> steht ganz hinten. Und weil jemand etwas tut, bleibt es der Akkusativ.' },
      { f: 'Bau die Bitte:', t: ['Setz', 'dich', 'bitte', 'auf', 'den', 'Stuhl'], l: ['Setz', 'dich', 'bitte', 'auf', 'den', 'Stuhl'], e: '<b>Setz dich</b> ist eine Bewegung, deshalb <i>dich</i> und <b>auf den</b> Stuhl im Akkusativ.' }
    ],
    gstory: {
      t: 'Am ersten Abend in der neuen Wohnung ___ überall Kartons. Ich habe den großen zuerst in ___ Flur gestellt, weil im Zimmer noch das Bett quer ___. Die Lampe habe ich vorsichtig auf das Sofa ___, aufgehängt haben wir sie erst am nächsten Tag. Dann habe ich mich auf einen Stuhl ___ und zehn Minuten einfach nur dagesessen. Die Tassen ___ inzwischen im Schrank, die Löffel liegen in der Schublade, und an ___ Wand hängt schon das erste Bild. Nur der Karton mit den Büchern ___ immer noch im Flur.',
      o: ['standen', 'den', 'stand', 'gelegt', 'gesetzt', 'stehen', 'der', 'steht'],
      a: [['standen'], ['den'], ['stand'], ['gelegt'], ['gesetzt'], ['stehen'], ['der'], ['steht']]
    }
  }
};
fs.writeFileSync(__dirname + '/../stunden/w10-b2-wo-sie-stehen.json', JSON.stringify(S, null, 2) + '\n', 'utf8');
console.log('geschrieben');
