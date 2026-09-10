'use strict';
const fs = require('fs');
const S = {
  datei: 'Unterricht-ab-14-09/w11-c-teil2-advent-feiertage-b1b2.html',
  eyebrow: 'deutschoderwas · Sprechclub · Woche 11 · Strang C · Teil 2 · Mittwoch, 25. November',
  titel: 'Die Debatte:',
  hl: 'Familie oder Erholung?',
  stufe: 'B1/B2',
  termin: 'Mi 25.11. 17:30 und 19:30 · Strang C · Teil 2 · B1 ⇄ B2',
  untertitel: 'Am Montag ging es darum, wie diese Wochen hier ablaufen. Heute um die Frage dahinter: Muss man die Feiertage mit der Familie verbringen — oder darf man sie auch für sich behalten? Fast jeder hat dazu eine Meinung, und fast jeder hat auch ein schlechtes Gewissen.',
  fuss: 'Die Debatte: Familie oder Erholung? · Teil 2 · B1/B2 · Woche 11 · danach macht der Sprechclub eine Pause',
  niveau: { a: 'B1 · sicherer', b: 'B2 · feiner', hinweis: 'Gleiches Thema, andere Sätze. Wechsle jederzeit — probier ruhig beide Seiten aus.' },

  einstieg: [
    {
      h2: 'Man muss nicht',
      hl: 'heißt nicht: man darf nicht',
      ssub: 'Zwei kleine Wörter, ein großer Unterschied. <b>Du musst nicht kommen</b> heißt: Es ist freiwillig. <b>Du darfst nicht kommen</b> heißt: Es ist verboten. Wer das verwechselt, sagt in einem Familiengespräch etwas ganz anderes, als er meint.',
      bild: 'amanda/sz-familie.webp',
      alt: 'Eine Familie sitzt gemeinsam am Tisch',
      fragenA2: [
        'Musst du an Feiertagen zur Familie?',
        'Feierst du lieber groß oder klein?',
        'Wann hast du zuletzt eine Einladung abgesagt?'
      ],
      fragenB1: [
        'Wer entscheidet in deiner Familie, wo gefeiert wird?',
        'Hast du ein schlechtes Gewissen, wenn du absagst?',
        'Wo hört Tradition auf und wo fängt Pflicht an?'
      ],
      tipp: { art: 'teal', text: '🔑 <strong>Für heute wichtig:</strong> Du musst deine eigene Meinung nicht vertreten. In der Debatte bekommst du eine Seite zugeteilt — und die Übung besteht genau darin, auch die andere gut zu verteidigen.' }
    },
    {
      h2: 'Und die zweite Frage:',
      hl: 'Wem gehört deine freie Zeit?',
      ssub: 'Für die einen sind Feiertage der einzige Termin im Jahr, an dem alle zusammenkommen. Für die anderen sind es die einzigen Tage, an denen niemand etwas von ihnen will. Beides ist verständlich — und deshalb streitet man darüber gut.',
      bild: 'vok-bild/die-kueste.webp',
      alt: 'Ein ruhiger Blick aufs Meer',
      fragenA2: [
        'Was machst du am liebsten an freien Tagen?',
        'Bist du gern allein?',
        'Was brauchst du nach einem langen Jahr?'
      ],
      fragenB1: [
        'Was gibt dir mehr Kraft: Menschen oder Ruhe?',
        'Wie sagst du ab, ohne jemanden zu verletzen?',
        'Ändert sich das mit den Jahren?'
      ],
      tipp: { art: 'yellow', text: '💡 <strong>Ein Satz für jede Debatte:</strong> <b>Da haben Sie recht, und trotzdem …</b> Damit nimmst du dem anderen den Wind aus den Segeln und bleibst trotzdem bei deiner Meinung.' }
    }
  ],

  wortschatz: {
    h2: 'Zwölf Wörter,',
    hl: 'die du heute brauchst',
    ssub: 'Sag jedes laut. Und bau bei jedem sofort einen Satz, in dem du damit eine Meinung sagst.',
    karten: [
      { bild: 'amanda/sz-rechte.webp', alt: 'Unterlagen und ein Stempel auf einem Schreibtisch', art: 'die', wort: 'Pflicht', kurz: 'etwas, das man tun muss', bsp: 'Für mich ist das eher Pflicht als Freude.', tipp: 'Das Gegenstück heißt <b>die Freiwilligkeit</b>. Und ein starker Satz in der Debatte: <i>Sobald es Pflicht wird, ist die Freude weg.</i>', say: 'Für mich ist das eher Pflicht als Freude.' },
      { bild: 'vok-bild/die-kueste.webp', alt: 'Ein ruhiger Blick aufs Meer', art: 'die', wort: 'Freiheit', kurz: 'wenn du selbst entscheiden kannst', bsp: 'Ich hätte gern die Freiheit, auch mal Nein zu sagen.', tipp: 'Achte auf die Verbindung: <b>die Freiheit haben, etwas zu tun</b>. Und <i>sich die Freiheit nehmen</i> heißt: es einfach machen, auch wenn andere es komisch finden.', say: 'Ich hätte gern die Freiheit, auch mal Nein zu sagen.' },
      { bild: 'amanda/a-kaffee.webp', alt: 'Eine Tasse Kaffee auf einem Tisch', art: 'die', wort: 'Erholung', kurz: 'wenn du wieder zu Kräften kommst', bsp: 'Nach dem Jahr brauche ich vor allem Erholung.', tipp: 'Das Verb ist <b>sich erholen von</b> plus Dativ: <i>Ich erhole mich <b>von dem</b> Jahr.</i> Und <b>erholsam</b> ist das Adjektiv: <i>Das waren erholsame Tage.</i>', say: 'Nach dem Jahr brauche ich vor allem Erholung.' },
      { bild: 'amanda/a-warten.webp', alt: 'Amanda steht allein und wartet', art: 'die', wort: 'Einsamkeit', kurz: 'wenn man allein ist und es wehtut', bsp: 'An Feiertagen ist die Einsamkeit für viele am größten.', tipp: 'Nicht verwechseln mit <b>allein sein</b>: Allein sein kann schön sein, Einsamkeit nie. In der Debatte ist das ein wichtiges Argument für die andere Seite.', say: 'An Feiertagen ist die Einsamkeit für viele am größten.' },
      { bild: 'amanda/sz-sozial.webp', alt: 'Menschen sitzen im Kreis und sprechen miteinander', art: 'der', wort: 'Zusammenhalt', kurz: 'wenn eine Gruppe füreinander da ist', bsp: 'Solche Tage sind gut für den Zusammenhalt.', tipp: 'Ein sehr deutsches Wort, das in Reden ständig vorkommt. Das Verb dahinter: <b>zusammenhalten</b> — <i>In der Familie halten wir zusammen.</i>', say: 'Solche Tage sind gut für den Zusammenhalt.' },
      { bild: 'bilder/lesen/nachbar.webp', alt: 'Zwei Nachbarn sprechen im Treppenhaus', wort: 'Rücksicht', kurz: 'wenn du an die anderen denkst', bsp: 'Ein bisschen Rücksicht erwarte ich schon.', tipp: 'Immer <b>Rücksicht nehmen auf</b> plus Akkusativ, ohne Artikel. Und in der Debatte hilft die Frage: <i>Wer nimmt hier eigentlich auf wen Rücksicht?</i>', say: 'Ein bisschen Rücksicht erwarte ich schon.' },
      { bild: 'amanda/sz-heikel.webp', alt: 'Zwei Menschen in einem angespannten Gespräch', art: 'der', wort: 'Streit', kurz: 'wenn zwei sich lautstark uneinig sind', bsp: 'Bei uns gibt es jedes Jahr denselben Streit.', tipp: '<b>Streit haben mit</b> plus Dativ, <b>sich streiten über</b> plus Akkusativ. Und <i>Streit vom Zaun brechen</i> heißt: einen Streit absichtlich anfangen.', say: 'Bei uns gibt es jedes Jahr denselben Streit.' },
      { bild: 'amanda/sz-familie.webp', alt: 'Eine Familie sitzt am Küchentisch', art: 'der', wort: 'Kompromiss', kurz: 'wenn beide Seiten etwas nachgeben', bsp: 'Wir haben einen Kompromiss gefunden: einen Tag da, einen Tag hier.', tipp: 'Einen Kompromiss <b>findet</b> oder <b>schließt</b> man. In dieser Debatte ist er oft der beste Schluss — und in echten Familien sowieso.', say: 'Wir haben einen Kompromiss gefunden: einen Tag da, einen Tag hier.' },
      { bild: 'amanda/a-uhr.webp', alt: 'Eine Uhr an der Wand', art: 'die', wort: 'Gewohnheit', kurz: 'etwas, das man immer so macht', bsp: 'Das ist reine Gewohnheit, einen Grund gibt es nicht.', tipp: 'Sehr nützlich in Debatten: <b>Das ist reine Gewohnheit</b> heißt, dahinter steckt kein gutes Argument. Und <b>sich etwas angewöhnen</b> ist der Weg dorthin.', say: 'Das ist reine Gewohnheit, einen Grund gibt es nicht.' },
      { bild: 'amanda/amanda-ups.webp', alt: 'Amanda hält sich die Hand vor den Mund', art: 'das', wort: 'Gewissen', kurz: 'die Stimme in dir, die sagt, was richtig ist', bsp: 'Wenn ich absage, habe ich ein schlechtes Gewissen.', tipp: 'Fast immer als <b>ein schlechtes Gewissen haben</b>. Und in der Debatte ein guter Einwand: <i>Wer nur aus schlechtem Gewissen kommt, ist auch keine Freude.</i>', say: 'Wenn ich absage, habe ich ein schlechtes Gewissen.' },
      { bild: 'bilder/lesen/mail.webp', alt: 'Ein Handy mit einer Nachricht', art: 'die', wort: 'Absage', kurz: 'wenn du sagst, dass du nicht kommst', bsp: 'Eine frühe Absage ist besser als ein spätes Vielleicht.', tipp: 'Das Verb ist <b>absagen</b>, trennbar: <i>Ich sage <u>ab</u>.</i> Und das Gegenteil heißt <b>die Zusage</b> — beide Wörter braucht man in diesen Wochen ständig.', say: 'Eine frühe Absage ist besser als ein spätes Vielleicht.' },
      { bild: 'amanda/sz-unterwegs.webp', alt: 'Menschen gehen aneinander vorbei auf einem Bahnsteig', art: 'der', wort: 'Abstand', kurz: 'wenn man sich bewusst nicht so nahe kommt', bsp: 'Manchmal tut ein bisschen Abstand allen gut.', tipp: '<b>Abstand halten</b> heißt räumlich, <b>auf Abstand gehen</b> heißt menschlich. In dieser Debatte meint man fast immer das Zweite.', say: 'Manchmal tut ein bisschen Abstand allen gut.' }
    ],
    spiel: { text: '💡 <strong>Spiel „Gegenseite“:</strong> Einer sagt einen Satz mit seiner echten Meinung. Der andere muss sofort das Gegenteil vertreten — und zwar so, dass es überzeugend klingt. Danach tauschen.' }
  },

  konzepte: {
    tab: '🔍 Drei Werkzeuge',
    zuerst: 'dreier',
    h2: 'Zustimmen, drehen',
    hl: 'oder widersprechen?',
    ssub: 'In einer Debatte braucht man nur drei Bewegungen. Wer sie kennt, muss nicht mehr überlegen, wie er anfängt.',
    dreier: [
      { emoji: '👍', wort: 'Zustimmen', was: 'und dann etwas dazugeben', bsp: '<b>Da haben Sie recht</b>, und ich würde sogar noch weiter gehen: …' },
      { emoji: '↩️', wort: 'Zustimmen und drehen', was: 'der stärkste Zug', bsp: '<b>Stimmt</b>, aber genau deshalb …' },
      { emoji: '✋', wort: 'Widersprechen', was: 'freundlich, aber deutlich', bsp: '<b>Das sehe ich anders</b>, weil …' }
    ],
    paare: [
      {
        jaLabel: 'So ist es richtig', ja: 'Du musst nicht kommen, wenn du nicht magst.',
        jaWarumLabel: 'Warum das stimmt', jaWarum: '<b>müssen</b> mit <i>nicht</i> heißt: Es ist freiwillig, niemand zwingt dich. Das ist genau das, was man in dieser Situation sagen will.',
        noLabel: 'So klingt es ganz anders', no: 'Du darfst nicht kommen, wenn du nicht magst.',
        noWarumLabel: 'Das Problem', noWarum: '<b>dürfen</b> mit <i>nicht</i> heißt: Es ist verboten. Der Satz lädt also aus, statt zu beruhigen. Merk dir das Paar: <b>musst nicht</b> = freiwillig, <b>darfst nicht</b> = verboten.'
      },
      {
        jaLabel: 'So klingt es stark', ja: 'Stimmt, es kostet Kraft. Aber genau deshalb ist es wichtig, dass man einmal im Jahr alle sieht.',
        jaWarumLabel: 'Warum das funktioniert', jaWarum: 'Du gibst dem anderen recht und drehst sein Argument um. Er kann dir nicht widersprechen, ohne sich selbst zu widersprechen — der beste Zug in jeder Debatte.',
        noLabel: 'So klingt es schwach', no: 'Nein, das kostet überhaupt keine Kraft.',
        noWarumLabel: 'Das Problem', noWarum: 'Ein reines Nein bringt nichts Neues. Und wenn es nicht stimmt, glaubt dir die andere Seite auch den Rest nicht mehr.'
      },
      {
        jaLabel: 'So überzeugt es', ja: 'Bei uns war es zehn Jahre lang Pflicht — seit wir es freiwillig machen, kommen mehr Leute.',
        jaWarumLabel: 'Warum das funktioniert', jaWarum: 'Ein Beispiel aus dem eigenen Leben schlägt jede allgemeine Aussage. Es ist konkret, niemand kann es bestreiten, und alle können es sich vorstellen.',
        noLabel: 'So klingt es leer', no: 'Familien sind heute eben nicht mehr wie früher.',
        noWarumLabel: 'Das Problem', noWarum: 'Ein Satz über alle Familien ist kein Argument, sondern ein Gefühl. Und er fällt mit einem einzigen Gegenbeispiel um.'
      }
    ],
    hilfe: {
      knopf: '🆘 Wie fange ich meine Wortmeldung an?',
      vor: 'Vier Anfänge, mit denen du nie danebenliegst:',
      punkte: [
        '<b>Zustimmen:</b> <i>Da haben Sie recht — und ich würde sogar noch weiter gehen.</i>',
        '<b>Drehen:</b> <i>Stimmt. Aber genau deshalb …</i>',
        '<b>Widersprechen:</b> <i>Das sehe ich anders, weil …</i>',
        '<b>Beispiel bringen:</b> <i>Bei uns war das so: …</i>'
      ],
      nach: 'Und wenn du zwischendrin den Faden verlierst: sag <i>Moment, ich sortiere kurz.</i> Das ist völlig normal, auch unter Deutschen — und klingt tausendmal besser als ein Satz, der irgendwo aufhört.'
    },
    tipp: { art: 'yellow', text: '🎯 <strong>Zu zweit, zwei Minuten:</strong> Einer nennt eine Meinung, der andere antwortet dreimal hintereinander — einmal zustimmend, einmal drehend, einmal widersprechend. Derselbe Inhalt, drei Bewegungen.' }
  },

  saetze: {
    h2: 'Vier Bausteine',
    hl: 'für deine Wortmeldung',
    ssub: 'Meinung sagen, begründen, Beispiel bringen, auf den anderen reagieren. In dieser Reihenfolge hört dir jeder zu.',
    akkLabel: 'der Schritt',
    mengeLabel: 'was du damit erreichst',
    a2: [
      { titel: '1 · 💬 Meinung sagen', chips: ['Ich finde, …', 'Meiner Meinung nach …', 'Für mich ist klar: …', 'Ich bin dagegen, weil …'], bsp: 'Ich finde, jeder sollte selbst entscheiden dürfen.', say: 'Ich finde, jeder sollte selbst entscheiden dürfen.' },
      { titel: '2 · 🔗 Begründen', chips: ['… weil …', 'Der Grund ist einfach: …', 'Sonst passiert es, dass …', 'Das merkt man daran, dass …'], bsp: 'Ich finde das wichtig, weil man sich sonst nur noch schreibt.', say: 'Ich finde das wichtig, weil man sich sonst nur noch schreibt.' },
      { titel: '3 · 📌 Beispiel bringen', chips: ['Bei uns war das so: …', 'Letztes Jahr zum Beispiel …', 'Ich kenne jemanden, der …', 'In meiner Familie ist es so, dass …'], bsp: 'Bei uns war das so: Solange es Pflicht war, kam die Hälfte nicht.', say: 'Bei uns war das so: Solange es Pflicht war, kam die Hälfte nicht.' },
      { titel: '4 · ↔️ Reagieren', chips: ['Da haben Sie recht, aber …', 'Das sehe ich anders.', 'Stimmt, und trotzdem …', 'Wie meinen Sie das genau?'], bsp: 'Da haben Sie recht, aber genau deshalb finde ich einen Kompromiss besser.', say: 'Da haben Sie recht, aber genau deshalb finde ich einen Kompromiss besser.' }
    ],
    b1: [
      { titel: '1 · 💬 Meinung mit Einschränkung', chips: ['Grundsätzlich bin ich dafür, allerdings …', 'Ich neige zu der Meinung, dass …', 'In den meisten Fällen würde ich sagen: …', 'Da bin ich zwiegespalten, aber …'], bsp: 'Grundsätzlich bin ich dafür, allerdings nur, solange niemand aus schlechtem Gewissen kommt.', say: 'Grundsätzlich bin ich dafür, allerdings nur, solange niemand aus schlechtem Gewissen kommt.' },
      { titel: '2 · 🔗 Sauber begründen', chips: ['Das liegt vor allem daran, dass …', 'Der entscheidende Punkt ist: …', 'Man darf dabei nicht vergessen, dass …', 'Das führt am Ende dazu, dass …'], bsp: 'Der entscheidende Punkt ist: Wer gezwungen wird, sitzt zwar am Tisch, ist aber nicht wirklich da.', say: 'Der entscheidende Punkt ist: Wer gezwungen wird, sitzt zwar am Tisch, ist aber nicht wirklich da.' },
      { titel: '3 · 📌 Beispiel mit Wirkung', chips: ['Ein Beispiel aus meiner Familie: …', 'Genau das habe ich erlebt, als …', 'Bei uns läuft es seit Jahren so, dass …', 'Ich habe lange geglaubt, dass … — bis …'], bsp: 'Ich habe lange geglaubt, dass alle kommen müssen — bis wir es freiwillig gemacht haben und plötzlich mehr da waren.', say: 'Ich habe lange geglaubt, dass alle kommen müssen — bis wir es freiwillig gemacht haben und plötzlich mehr da waren.' },
      { titel: '4 · ↩️ Drehen statt streiten', chips: ['Stimmt — und genau deshalb …', 'Ihr Argument spricht eher für meine Seite, weil …', 'Das würde ich sogar unterschreiben, nur folgt daraus …', 'Ich verstehe, wie Sie darauf kommen, sehe es aber anders.'], bsp: 'Stimmt, für manche ist es der einzige Termin im Jahr — und genau deshalb sollte er freiwillig sein.', say: 'Stimmt, für manche ist es der einzige Termin im Jahr — und genau deshalb sollte er freiwillig sein.' }
    ],
    tipp: { art: 'teal', text: '📣 <strong>Reihum:</strong> Jeder sagt einen Satz zur These und muss dabei an den Vorredner anknüpfen — mit <i>stimmt</i>, <i>da haben Sie recht</i> oder <i>das sehe ich anders</i>.' }
  },

  dialoge: {
    h2: 'Vier Gespräche —',
    hl: 'zwei Runden',
    ssub: '<b>Runde 1:</b> Lest zu zweit laut. <b>Runde 2:</b> Klappt die Zeilen zu und streitet frei — nur die Stichwörter bleiben.',
    liste: [
      {
        bild: 'amanda/sz-familie.webp', alt: 'Eine Familie sitzt am Küchentisch',
        titel: 'Muss ich kommen?',
        situation: 'A möchte dieses Jahr nicht zur Familienfeier. B versteht das, hat aber auch die anderen im Blick.',
        zeilen: [
          { wer: 'a', text: 'Ich glaube, ich komme dieses Jahr nicht. Muss ich?' },
          { wer: 'b', text: 'Musst du nicht. Aber Oma wird fragen, und ich sage ihr dann was?', cue: '<b>Musst du nicht</b> — freiwillig, nicht verboten. Und B schiebt gleich das eigentliche Problem hinterher.' },
          { wer: 'a', text: 'Sag einfach, ich brauche die Tage für mich.' },
          { wer: 'b', text: 'Das verstehe ich. Nur: Für sie ist es der einzige Tag, an dem alle da sind.', cue: '<b>Das verstehe ich. Nur:</b> — zustimmen und dann drehen. Der stärkste Zug in jeder Diskussion.' },
          { wer: 'a', text: 'Und wenn ich einen Tag später komme?' },
          { wer: 'b', text: 'Das wäre ein guter Kompromiss. Sag es ihr aber selbst, nicht ich.', cue: '<b>Kompromiss</b> und dann eine Bedingung. Und die Bedingung ist die eigentliche Pointe des Gesprächs.' }
        ]
      },
      {
        bild: 'amanda/a-kaffee.webp', alt: 'Zwei Kaffeebecher auf einem Tisch',
        titel: 'Pflicht oder Freude?',
        situation: 'A findet Familienfeste anstrengend und sagt das offen. B hält dagegen, ohne A zu belehren.',
        zeilen: [
          { wer: 'a', text: 'Ehrlich gesagt ist das für mich eher Pflicht als Freude.' },
          { wer: 'b', text: 'Da haben Sie recht, anstrengend ist es. Aber ohne diesen einen Termin sieht man sich gar nicht mehr.', cue: 'Erst <b>zustimmen</b>, dann drehen. Und <i>ohne diesen einen Termin</i> ist ein Argument, das schwer zu entkräften ist.' },
          { wer: 'a', text: 'Man könnte sich ja auch im Sommer treffen, wenn alle Lust haben.' },
          { wer: 'b', text: 'Könnte man. Nur macht es dann keiner, weil kein Datum feststeht.', cue: '<b>Könnte man. Nur …</b> — zugeben und sofort weiterdrehen. Ein sehr wirksames Muster.' },
          { wer: 'a', text: 'Vielleicht braucht es einfach beides: einen festen Termin und die Freiheit abzusagen.' },
          { wer: 'b', text: 'Damit wäre ich einverstanden. Das ist ein fairer Kompromiss.', cue: '<b>Damit wäre ich einverstanden</b> beendet eine Debatte, in der beide etwas mitnehmen.' }
        ]
      },
      {
        bild: 'amanda/a-warten.webp', alt: 'Amanda steht allein und wartet',
        titel: 'Allein an den Feiertagen',
        situation: 'A ist neu in der Stadt und wird die Tage allein verbringen. B lädt ein — vorsichtig, ohne Druck.',
        zeilen: [
          { wer: 'a', text: 'Ich bin dieses Jahr zum ersten Mal allein. Mal sehen, wie das wird.' },
          { wer: 'b', text: 'Wenn du magst, komm zu uns. Ganz unkompliziert, und du musst nichts mitbringen.', cue: 'Eine Einladung ohne Druck. <b>musst nichts mitbringen</b> — wieder <i>müssen</i> mit <i>nicht</i>, also freiwillig.' },
          { wer: 'a', text: 'Das ist nett. Aber ich will euch nicht stören.' },
          { wer: 'b', text: 'Du störst nicht. Und wenn du lieber Ruhe hast, ist das auch völlig in Ordnung.', cue: 'B lässt beide Türen offen. Genau das macht aus einer Einladung ein echtes Angebot statt einer Verpflichtung.' },
          { wer: 'a', text: 'Kann ich mich kurzfristig entscheiden?' },
          { wer: 'b', text: 'Klar. Sag am 23. Bescheid, dann ist alles gut.', cue: '<b>Bescheid sagen</b> mit einem Datum. Kurzfristig zusagen zu dürfen nimmt oft mehr Druck als die Einladung selbst.' }
        ]
      },
      {
        bild: 'amanda/sz-heikel.webp', alt: 'Zwei Menschen in einem angespannten Gespräch',
        titel: 'Derselbe Streit wie jedes Jahr',
        situation: 'A und B streiten darüber, wo gefeiert wird. Beide haben recht, und beide wissen es.',
        zeilen: [
          { wer: 'a', text: 'Wir waren jetzt drei Jahre bei deinen Eltern. Dieses Jahr sind meine dran.' },
          { wer: 'b', text: 'Stimmt, das ist nur fair. Nur wohnen meine zwanzig Minuten weg und deine vier Stunden.', cue: '<b>Stimmt, das ist nur fair. Nur …</b> — zugeben und drehen, ohne den anderen abzuwerten.' },
          { wer: 'a', text: 'Also entscheidet die Entfernung, wer uns sieht?' },
          { wer: 'b', text: 'So habe ich das nicht gemeint. Sagen wir es anders: Was wäre für dich in Ordnung?', cue: '<b>So habe ich das nicht gemeint</b> holt einen Satz zurück, bevor er kippt. Und die Frage öffnet das Gespräch wieder.' },
          { wer: 'a', text: 'Heiligabend bei deinen, den 26. bei meinen. Und nächstes Jahr umgekehrt.' },
          { wer: 'b', text: 'Einverstanden. Und schreiben wir es auf, damit wir das nicht jedes Jahr neu klären.', cue: 'Ein Kompromiss mit Regel für die Zukunft — genau daran scheitern die meisten Familiendebatten.' }
        ]
      }
    ],
    tipp: { art: 'yellow', text: '🎭 <strong>Und jetzt ihr:</strong> Spielt Gespräch 4 mit einer echten Frage aus eurer Familie. Regel: Jeder muss dem anderen mindestens einmal recht geben, bevor er widerspricht.' }
  },

  grammatik: {
    h2: '🧩 Musst du nicht,',
    hl: 'darfst du nicht',
    ssub: 'In dieser Debatte geht es dauernd darum, was man muss, soll oder darf. Und genau dort liegt eine Falle, die im Deutschen echte Missverständnisse macht.',
    intro: 'Mit <b>nicht</b> drehen sich die Bedeutungen auseinander: <b>Du musst nicht</b> heißt freiwillig, <b>Du darfst nicht</b> heißt verboten. Und <b>Du sollst nicht</b> heißt: Jemand anderes will es so.',
    kette: [
      { emoji: '🕊️', rolle: 'musst nicht', bsp: 'freiwillig' },
      { emoji: '🚫', rolle: 'darfst nicht', bsp: 'verboten' },
      { emoji: '🗣️', rolle: 'sollst nicht', bsp: 'jemand will es so' },
      { emoji: '💡', rolle: 'solltest', bsp: 'ein guter Rat' }
    ],
    felder: [
      { rolle: 'Du', wort: 'Du' },
      { rolle: 'musst', wort: 'musst', hervor: true },
      { rolle: 'nicht', wort: 'nicht' },
      { rolle: 'Verb hinten', wort: 'kommen.' }
    ],
    bloecke: [
      {
        h2: 'Vier Modalverben,',
        hl: 'vier Tonlagen',
        ssub: 'Dasselbe Thema, ganz verschiedene Wirkung. In einer Debatte entscheidet oft nur dieses eine Wort.',
        dreier: [
          { emoji: '🔒', wort: 'müssen', was: 'es geht nicht anders', bsp: 'Ich <b>muss</b> am 24. arbeiten.' },
          { emoji: '💡', wort: 'sollten', was: 'ein Rat, kein Zwang', bsp: 'Man <b>sollte</b> früh absagen.' },
          { emoji: '🕊️', wort: 'dürfen', was: 'es ist erlaubt', bsp: 'Jeder <b>darf</b> selbst entscheiden.' }
        ],
        chips: ['ich muss', 'ich muss nicht', 'ich darf', 'ich darf nicht', 'ich soll', 'ich sollte', 'ich könnte', 'ich möchte', 'man müsste', 'es wäre schöner', 'jeder darf', 'niemand muss']
      },
      {
        h2: 'Und im Nebensatz',
        hl: 'rutscht das Modalverb ans Ende',
        ssub: 'Genau dort verrutscht es am häufigsten — dabei ist die Regel einfach.',
        paare: [
          {
            jaLabel: 'So ist es richtig', ja: 'Ich finde, dass jeder selbst entscheiden darf.',
            jaWarumLabel: 'Warum das stimmt', jaWarum: 'Im Nebensatz mit <b>dass</b> steht zuerst das andere Verb und danach das Modalverb ganz am Ende: <i>… entscheiden <b>darf</b></i>. Genauso: <i>… kommen <b>muss</b></i>, <i>… absagen <b>sollte</b></i>.',
            noLabel: 'So klingt es falsch', no: 'Ich finde, dass jeder darf selbst entscheiden.',
            noWarumLabel: 'Das Problem', noWarum: 'Das Modalverb muss ganz nach hinten, hinter den Infinitiv. Ein Test: Sag den Hauptsatz allein — <i>Jeder darf selbst entscheiden</i> — und schieb dann nur <b>darf</b> ans Ende.'
          }
        ]
      }
    ],
    bauH2: '🧱 Bau die Sätze selbst',
    bauSsub: 'Tippe die Teile in der richtigen Reihenfolge an. Achte darauf, wo das Modalverb landet.',
    storyH2: '📖 Und jetzt im Zusammenhang',
    storySsub: 'Eine kurze Stellungnahme zur heutigen These. Wähle in jeder Lücke das passende Wort.',
    hilfe: {
      knopf: '🆘 Muss, soll oder darf?',
      vor: 'Vier Bedeutungen, mehr gibt es nicht:',
      punkte: [
        '<b>müssen</b> = es geht nicht anders. <b>nicht müssen</b> = freiwillig.',
        '<b>dürfen</b> = es ist erlaubt. <b>nicht dürfen</b> = verboten.',
        '<b>sollen</b> = jemand anderes will es. <b>sollten</b> = ein guter Rat.',
        '<b>können</b> = es ist möglich. <b>könnte</b> = ein Vorschlag.'
      ],
      nach: 'Und der Satz, den du dir für diese Debatte merken solltest: <b>Du musst nicht, aber du darfst.</b> Freundlicher kann man eine Einladung kaum formulieren.'
    }
  },

  rollenspiele: {
    h2: '🎭 Drei Situationen',
    hl: 'zu zweit',
    ssub: 'Einer vertritt die eine Seite, einer die andere — auch wenn er anders denkt. Danach tauschen, beim zweiten Mal ohne die Sätze unten.',
    liste: [
      {
        titel: 'Ich komme dieses Jahr nicht',
        situation: 'A will die Feiertage allein verbringen. B findet das schade und denkt an die anderen in der Familie — bleibt aber freundlich.',
        a2: ['Ich brauche die Tage dieses Jahr für mich', 'Muss ich wirklich kommen?', 'Und wenn ich einen Tag später komme?', 'Sagst du es den anderen?'],
        b1: ['Musst du nicht, aber Oma wird fragen', 'Für sie ist das der einzige Tag, an dem alle da sind', 'Ein Tag später wäre ein guter Kompromiss', 'Sag es ihr bitte selbst, das ist ehrlicher'],
        gut: 'Der Unterschied zwischen <i>musst nicht</i> und <i>darfst nicht</i> ist richtig benutzt worden. Und am Ende stand ein Vorschlag, kein Sieg.'
      },
      {
        titel: 'Pflicht oder Freiwilligkeit?',
        situation: 'A findet, ein fester Termin im Jahr sei nötig. B findet, alles sollte freiwillig sein. Beide haben gute Gründe.',
        a2: ['Ohne festen Termin sieht man sich nie', 'Man könnte sich auch im Sommer treffen', 'Aber dann macht es keiner', 'Vielleicht braucht es beides'],
        b1: ['Sobald es Pflicht wird, ist die Freude weg', 'Wer nur aus schlechtem Gewissen kommt, ist auch keine Freude', 'Bei uns kamen mehr Leute, seit es freiwillig ist', 'Ein fester Termin plus die Freiheit abzusagen wäre der Kompromiss'],
        gut: 'Beide haben mindestens einmal zugestimmt, bevor sie widersprochen haben. Und beide haben ein Beispiel aus dem eigenen Leben gebracht.'
      },
      {
        titel: 'Wo wird gefeiert?',
        situation: 'A und B sind ein Paar und streiten seit Jahren über dieselbe Frage. Findet einen Kompromiss, der auch für die nächsten Jahre gilt.',
        a2: ['Dieses Jahr sind meine Eltern dran', 'Wir waren drei Jahre bei deinen', 'Vier Stunden Fahrt sind viel', 'Und nächstes Jahr umgekehrt?'],
        b1: ['Stimmt, das ist nur fair — nur ist die Entfernung sehr verschieden', 'So habe ich das nicht gemeint, sagen wir es anders', 'Was wäre für dich in Ordnung?', 'Schreiben wir es auf, damit wir es nicht jedes Jahr neu klären'],
        gut: 'Niemand ist persönlich geworden, und am Ende stand eine Regel für die Zukunft — nicht nur eine Lösung für dieses Jahr.'
      }
    ]
  },

  challenge: {
    ssub: 'Neunzig Sekunden zu einem Wort: Sag deine Meinung, nenne einen Grund, bring ein Beispiel — und halte durch, bis die Zeit um ist.',
    hilfe: {
      knopf: '🆘 Mir fällt nichts ein',
      vor: 'Vier Sätze, dann trägt dich die Zeit:',
      punkte: [
        '<b>Meinung:</b> <i>Meiner Meinung nach ist das …</i>',
        '<b>Grund:</b> <i>Das liegt vor allem daran, dass …</i>',
        '<b>Beispiel:</b> <i>Bei uns war das so: …</i>',
        '<b>Gegenseite:</b> <i>Man könnte natürlich sagen, dass … — aber …</i>'
      ],
      nach: 'Und wenn du in der Mitte hängst: nimm die Gegenseite. Sag <i>Man könnte natürlich auch sagen …</i> und argumentiere dagegen. Das füllt die zweite Hälfte fast von allein.'
    },
    tipp: { art: 'yellow', text: '⏱️ <strong>Spielregel:</strong> In jeder Runde muss <u>ein Beispiel aus deinem eigenen Leben</u> vorkommen. Wer nur allgemein bleibt, fängt noch einmal an.' }
  },

  ueben: { tipp: { art: 'teal', text: '📣 <strong>Danach laut:</strong> Einer sagt eine Meinung, der Nächste antwortet mit <i>Stimmt, aber genau deshalb …</i> Reihum, ohne Pause.' } },

  hausaufgabe: {
    h2: '📮 Deine Hausaufgabe bis',
    hl: 'Montag',
    ssub: 'Vier kleine Aufgaben, zusammen etwa 25 Minuten. Danach macht der Sprechclub eine Pause — im Lernbereich geht es weiter.',
    warum: { text: '💡 <strong>Warum das hilft:</strong> Ab B1 musst du in jeder Prüfung eine Meinung sagen und begründen. Und im Alltag ebenso — beim Elternabend, in der Besprechung, am Küchentisch. Wer zustimmen kann, ohne nachzugeben, kommt fast immer weiter als der, der nur widerspricht.' },
    a2: [
      { emoji: '💬', titel: 'Zehn Meinungen', zeit: '6 Min', text: 'Schreib zehn Sätze mit deiner Meinung zum heutigen Thema — jeden mit <i>weil</i> und einem Grund.' },
      { emoji: '🔄', titel: 'Dieselben zehn dagegen', zeit: '7 Min', text: 'Schreib zu jedem Satz das Gegenteil — und begründe es genauso gut. Auch wenn du es nicht so meinst.' },
      { emoji: '🎙️', titel: 'Eine Minute These', zeit: '5 Min', text: 'Nimm eine Sprachnachricht auf: Bist du für oder gegen die heutige These? Mit einem Beispiel aus deinem Leben.' },
      { emoji: '🔀', titel: 'Muss, darf, sollte', zeit: '7 Min', text: 'Schreib zwölf Sätze mit <i>muss</i>, <i>muss nicht</i>, <i>darf</i>, <i>darf nicht</i>, <i>soll</i> und <i>sollte</i> — jedes zweimal.' }
    ],
    b1: [
      { emoji: '📝', titel: 'Eine kurze Stellungnahme', zeit: '8 Min', text: 'Schreib zehn Sätze zur These: Meinung, zwei Gründe, ein Beispiel, das stärkste Gegenargument und deine Antwort darauf.' },
      { emoji: '↩️', titel: 'Achtmal drehen', zeit: '6 Min', text: 'Schreib acht Antworten nach dem Muster <i>Stimmt — und genau deshalb …</i> Nimm dafür Argumente, die gegen dich sprechen.' },
      { emoji: '🎙️', titel: 'Zwei Minuten Gegenseite', zeit: '6 Min', text: 'Nimm auf, wie du die Position vertrittst, die du eigentlich ablehnst. So überzeugend wie möglich, ohne Ironie.' },
      { emoji: '📩', titel: 'Die freundliche Absage', zeit: '5 Min', text: 'Schreib eine Absage an nahe Verwandte, die dir wichtig sind: klar, warm und ohne lange Rechtfertigung. Höchstens sechs Sätze.' }
    ],
    hilfeA2: {
      knopf: '💡 Beispiel ansehen (Aufgabe 4)',
      vor: 'So sehen die Sätze aus:',
      punkte: [
        '<i>Ich <b>muss</b> am 24. arbeiten.</i> — es geht nicht anders',
        '<i>Du <b>musst nicht</b> kommen.</i> — es ist freiwillig',
        '<i>Jeder <b>darf</b> selbst entscheiden.</i> — es ist erlaubt',
        '<i>Hier <b>darf</b> man nach zehn <b>nicht</b> laut sein.</i> — es ist verboten',
        '<i>Man <b>sollte</b> früh absagen.</i> — ein guter Rat'
      ],
      nach: 'Ein einziger Test genügt: Frag dich, ob dein Satz <i>freiwillig</i> oder <i>verboten</i> heißen soll. <b>musst nicht</b> ist freiwillig, <b>darfst nicht</b> ist verboten — und dazwischen liegt in einem Familiengespräch eine Menge.'
    },
    hilfeB1: {
      knopf: '💡 Beispiel ansehen (Aufgabe 1)',
      vor: 'Das ist der Aufbau, der immer trägt:',
      punkte: [
        '<b>Meinung:</b> <i>Ich halte einen festen Familientermin für sinnvoll, aber nur als Angebot.</i>',
        '<b>Grund 1:</b> <i>Ohne ein festes Datum verabredet sich am Ende niemand.</i>',
        '<b>Grund 2:</b> <i>Sobald es Pflicht wird, kommen die Leute mit schlechtem Gewissen statt aus Freude.</i>',
        '<b>Beispiel:</b> <i>Bei uns kamen mehr Leute, seit man auch absagen darf.</i>',
        '<b>Gegenargument und Antwort:</b> <i>Man könnte sagen, so zerfällt die Familie. Aber wer freiwillig kommt, bleibt auch länger.</i>'
      ],
      nach: 'Und ein Hinweis, der in jeder Prüfung zählt: Nenne das stärkste Argument der Gegenseite selbst. Wer das tut, wirkt sicher — und nimmt dem anderen genau den Satz weg, mit dem er angefangen hätte.'
    },
    abgabe: 'Schick mir bis Montag 12 Uhr deine Stellungnahme und die Sprachnachricht — ich sage dir, welches Argument wirklich trägt und welches nur laut klingt.',
    ausblick: 'Danach macht der Sprechclub eine Pause. Die Sätze zum Zustimmen und Widersprechen bleiben im Lernbereich — die brauchst du in jeder Prüfung wieder.'
  },

  daten: {
    sk: [
      'Muss man Feiertage mit der Familie verbringen? Sag deine Meinung mit Grund.',
      'Vertritt die Gegenseite deiner eigenen Meinung — überzeugend.',
      'Erklär den Unterschied zwischen <i>musst nicht</i> und <i>darfst nicht</i>.',
      'Sag jemandem ab, der dir wichtig ist, ohne ihn zu verletzen.',
      'Erzähl von einem Familienstreit, der jedes Jahr gleich abläuft.',
      'Lade jemanden ein, der allein ist — ohne Druck zu machen.',
      'Wann ist ein schlechtes Gewissen berechtigt, wann nicht?',
      'Finde einen Kompromiss, der auch nächstes Jahr noch gilt.',
      'Stimm einem Argument zu und dreh es dann um.',
      'Was gibt dir mehr Kraft: Menschen oder Ruhe? Begründe es.'
    ],
    w90: [
      { w: 'die Pflicht', b: 'amanda/sz-rechte.webp', h: ['müssen', 'freiwillig', 'die Erwartung', 'schwer', 'sich drücken'] },
      { w: 'die Freiheit', b: 'vok-bild/die-kueste.webp', h: ['entscheiden', 'nein sagen', 'selbst', 'niemand zwingt', 'wählen'] },
      { w: 'die Erholung', b: 'amanda/a-kaffee.webp', h: ['sich erholen', 'die Ruhe', 'schlafen', 'abschalten', 'erholsam'] },
      { w: 'die Einsamkeit', b: 'amanda/a-warten.webp', h: ['allein', 'niemand da', 'wehtun', 'anrufen', 'einladen'] },
      { w: 'der Zusammenhalt', b: 'amanda/sz-sozial.webp', h: ['zusammenhalten', 'die Familie', 'füreinander', 'stark', 'sich sehen'] },
      { w: 'der Streit', b: 'amanda/sz-heikel.webp', h: ['sich streiten', 'laut', 'jedes Jahr', 'die Sache', 'sich vertragen'] },
      { w: 'der Kompromiss', b: 'amanda/sz-familie.webp', h: ['finden', 'nachgeben', 'beide Seiten', 'fair', 'die Lösung'] },
      { w: 'die Gewohnheit', b: 'amanda/a-uhr.webp', h: ['immer so', 'kein Grund', 'üblich', 'ändern', 'sich angewöhnen'] },
      { w: 'das Gewissen', b: 'amanda/amanda-ups.webp', h: ['schlecht', 'absagen', 'sich schuldig fühlen', 'ehrlich', 'die Stimme'] },
      { w: 'die Absage', b: 'bilder/lesen/mail.webp', h: ['absagen', 'früh', 'die Einladung', 'Bescheid geben', 'die Zusage'] }
    ],
    quiz: [
      { q: 'Was heißt <u>Du musst nicht kommen</u>?', o: ['Es ist freiwillig.', 'Es ist verboten.', 'Du sollst wegbleiben.', 'Du kommst zu spät.'], c: 0, e: '<b>müssen</b> mit <i>nicht</i> heißt freiwillig. <b>dürfen</b> mit <i>nicht</i> heißt verboten — genau das ist die Falle.' },
      { q: 'Was heißt <u>Du darfst nicht kommen</u>?', o: ['Es ist verboten.', 'Es ist freiwillig.', 'Du sollst dich beeilen.', 'Du bist nicht eingeladen worden.'], c: 0, e: 'Ein Satz, der in einer Einladung völlig falsch ankommt. Gemeint ist fast immer <b>Du musst nicht kommen</b>.' },
      { q: 'Welche Antwort ist in einer Debatte am stärksten?', o: ['Stimmt — und genau deshalb …', 'Nein, das stimmt nicht.', 'Das ist doch albern.', 'Da kann ich nichts zu sagen.'], c: 0, e: 'Zustimmen und drehen: Du gibst dem anderen recht und machst sein Argument zu deinem.' },
      { q: 'Wo steht das Modalverb im Nebensatz?', o: ['ganz am Ende', 'an Position zwei', 'direkt nach dass', 'vor dem Infinitiv'], c: 0, e: '<i>Ich finde, dass jeder selbst entscheiden <b>darf</b>.</i> Erst der Infinitiv, dann das Modalverb.' },
      { q: 'Was überzeugt in einer Debatte am meisten?', o: ['ein Beispiel aus dem eigenen Leben', 'eine Aussage über alle Familien', 'ein lauter Ton', 'viele Fremdwörter'], c: 0, e: 'Ein konkretes Beispiel kann niemand bestreiten. Eine allgemeine Aussage fällt mit einem einzigen Gegenbeispiel um.' },
      { q: 'Was bedeutet <u>Das ist reine Gewohnheit</u>?', o: ['Es gibt keinen guten Grund dafür.', 'Es ist eine schöne Tradition.', 'Es passiert selten.', 'Es ist Pflicht.'], c: 0, e: 'Ein sehr nützlicher Satz in Debatten: Er nimmt einer Regel die Begründung, ohne jemanden anzugreifen.' },
      { q: 'Wie sagst du höflich ab?', o: ['Danke für die Einladung, dieses Mal schaffe ich es leider nicht.', 'Mal sehen, ich melde mich.', 'Ich habe keine Lust.', 'Vielleicht komme ich, vielleicht nicht.'], c: 0, e: 'Klar und früh. In Deutschland gilt ein deutliches Nein als höflicher als ein vages Vielleicht.' },
      { q: 'Was ist der Unterschied zwischen <u>sollen</u> und <u>sollten</u>?', o: ['sollen = jemand will es so, sollten = ein guter Rat', 'sollen ist Vergangenheit', 'sollten ist stärker als sollen', 'es gibt keinen Unterschied'], c: 0, e: '<i>Ich soll um sechs da sein</i> — jemand hat es gesagt. <i>Du solltest früh absagen</i> — ein freundlicher Rat.' }
    ],
    gap: [
      { t: 'Du ___ nicht kommen, wenn du nicht magst — es ist freiwillig.', o: ['musst', 'darfst', 'sollst', 'kannst nicht'], a: 'musst' },
      { t: 'Nach zehn Uhr ___ man hier nicht laut sein.', o: ['darf', 'muss', 'soll nicht', 'kann'], a: 'darf' },
      { t: 'Man ___ früh absagen, das ist höflicher.', o: ['sollte', 'darf nicht', 'muss nicht', 'kann nicht'], a: 'sollte' },
      { t: 'Ich finde, dass jeder selbst entscheiden ___.', o: ['darf', 'darf es', 'es darf', 'dürfen'], a: 'darf' },
      { t: 'Sobald es ___ wird, ist die Freude weg.', o: ['Pflicht', 'Freiheit', 'Erholung', 'Abstand'], a: 'Pflicht' },
      { t: 'Wenn ich absage, habe ich ein schlechtes ___.', o: ['Gewissen', 'Gewohnheit', 'Gefühl davon', 'Gewicht'], a: 'Gewissen' },
      { t: 'Am Ende haben wir einen ___ gefunden.', o: ['Kompromiss', 'Streit', 'Abstand', 'Zusammenhalt'], a: 'Kompromiss' },
      { t: 'Eine frühe ___ ist besser als ein spätes Vielleicht.', o: ['Absage', 'Zusage', 'Pflicht', 'Einladung'], a: 'Absage' }
    ],
    gbau: [
      { f: 'Bau den freundlichen Satz:', t: ['Du', 'musst', 'nicht', 'kommen', 'aber', 'du', 'darfst'], l: ['Du', 'musst', 'nicht', 'kommen', 'aber', 'du', 'darfst'], e: '<b>musst nicht</b> heißt freiwillig, <b>darfst</b> heißt erlaubt. Freundlicher kann man eine Einladung kaum sagen.' },
      { f: 'Bau den Nebensatz:', t: ['Ich', 'finde', 'dass', 'jeder', 'selbst', 'entscheiden', 'darf'], l: ['Ich', 'finde', 'dass', 'jeder', 'selbst', 'entscheiden', 'darf'], e: 'Nach <b>dass</b> kommt erst der Infinitiv und dann das Modalverb ganz ans Ende.' },
      { f: 'Bau den Rat:', t: ['Man', 'sollte', 'lieber', 'früh', 'absagen'], l: ['Man', 'sollte', 'lieber', 'früh', 'absagen'], e: '<b>sollte</b> ist ein Rat, kein Befehl. Und <i>absagen</i> steht als Infinitiv ganz hinten.' },
      { f: 'Bau die Drehung:', t: ['Stimmt', 'aber', 'genau', 'deshalb', 'sollte', 'es', 'freiwillig', 'sein'], l: ['Stimmt', 'aber', 'genau', 'deshalb', 'sollte', 'es', 'freiwillig', 'sein'], e: 'Erst zustimmen, dann drehen. Und nach <b>deshalb</b> kommt sofort das Verb.' }
    ],
    gstory: {
      t: 'Bei uns war es zehn Jahre lang so: Alle ___ am 24. kommen, ohne Ausnahme. Wer abgesagt hat, hatte danach ein schlechtes ___. Irgendwann hat meine Mutter gesagt: Ihr ___ nicht kommen, ihr dürft. Seitdem ist es freiwillig, und komischerweise sind mehr Leute da. Ich finde inzwischen, dass jeder selbst entscheiden ___. Man ___ auch früh absagen dürfen, ohne sich rechtfertigen zu müssen. Natürlich könnte man sagen, so zerfällt der ___. Aber wer freiwillig kommt, bleibt auch länger. Am Ende haben wir einen ___ gefunden: ein fester Termin, und trotzdem darf jeder ___.',
      o: ['mussten', 'Gewissen', 'müsst', 'darf', 'sollte', 'Zusammenhalt', 'Kompromiss', 'absagen'],
      a: [['mussten'], ['Gewissen'], ['müsst'], ['darf'], ['sollte'], ['Zusammenhalt'], ['Kompromiss'], ['absagen']]
    }
  }
};
fs.writeFileSync(__dirname + '/../stunden/w11-c2-advent-debatte.json', JSON.stringify(S, null, 2) + '\n', 'utf8');
console.log('geschrieben');
