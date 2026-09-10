'use strict';
const fs = require('fs');
const S = {
  datei: 'Unterricht-ab-14-09/w10-d-teil2-einwaende-entkraeften-b1b2.html',
  eyebrow: 'deutschoderwas · Sprechclub · Woche 10 · Strang D · Teil 2 · Donnerstag, 19. November',
  titel: 'Ja, aber …',
  hl: 'was du sagst, wenn jemand bremst',
  stufe: 'B1/B2',
  termin: 'Do 19.11. 17:30 und 19:30 · Strang D · Teil 2 · B1 ⇄ B2',
  untertitel: 'Am Dienstag hast du gelernt, einen Vorschlag zu bauen. Heute geht es um den Moment danach: Der andere sagt <i>Ja, aber …</i> — und die meisten geben dann auf oder werden laut. Es gibt einen dritten Weg, und der besteht aus vier Sätzen.',
  fuss: 'Ja, aber … · Teil 2 · B1/B2 · Woche 10 · nächste Woche: neues Thema',
  niveau: { a: 'B1 · sicherer', b: 'B2 · feiner', hinweis: 'Gleiches Thema, andere Sätze. Wechsle jederzeit — probier ruhig beide Seiten aus.' },

  einstieg: [
    {
      h2: 'Ein Einwand ist',
      hl: 'noch kein Nein',
      ssub: 'Wer <i>Ja, aber …</i> sagt, hat zugehört und denkt mit. Das klingt nach Ablehnung und ist meistens das Gegenteil: eine offene Frage, die noch niemand beantwortet hat. Wer das versteht, wird an dieser Stelle ruhig statt nervös.',
      bild: 'amanda/sz-buero.webp',
      alt: 'Zwei Kolleginnen besprechen etwas an einem Schreibtisch',
      fragenA2: [
        'Wie fühlst du dich, wenn jemand <i>ja, aber</i> sagt?',
        'Gibst du dann schnell nach?',
        'Wann hat dich zuletzt jemand überzeugt?'
      ],
      fragenB1: [
        'Woran erkennst du, ob ein Einwand echt ist oder nur eine höfliche Absage?',
        'Was machst du, wenn dir mitten im Gespräch die Worte fehlen?',
        'Wo gibst du zu schnell nach, wo zu spät?'
      ],
      tipp: { art: 'teal', text: '🔑 <strong>Die vier Werkzeuge:</strong> <b>1 Nachfragen</b> — was genau stört? <b>2 Zustimmen und drehen</b> — der stärkste Zug. <b>3 Beispiel bringen</b> — konkret schlägt allgemein. <b>4 Kompromiss anbieten</b> — wenn nichts anderes geht.' }
    },
    {
      h2: 'Und die erste Regel:',
      hl: 'nicht sofort antworten',
      ssub: 'Der häufigste Fehler ist die schnelle Antwort. Man verteidigt sich gegen etwas, das gar nicht gemeint war. Eine Rückfrage kostet fünf Sekunden und rettet das halbe Gespräch: <i>Was genau macht Ihnen dabei Sorge?</i>',
      bild: 'amanda/amanda-denk.webp',
      alt: 'Amanda überlegt, den Finger nachdenklich am Kinn',
      fragenA2: [
        'Fragst du nach oder antwortest du sofort?',
        'Was sagst du, wenn du Zeit brauchst?',
        'Wann ist eine Pause im Gespräch gut?'
      ],
      fragenB1: [
        'Warum hilft eine Rückfrage mehr als eine schnelle Antwort?',
        'Wie merkst du, dass ihr über zwei verschiedene Dinge redet?',
        'Wann ist es besser, das Gespräch zu vertagen?'
      ],
      tipp: { art: 'yellow', text: '💡 <strong>Der Satz, der immer geht:</strong> <b>Was genau macht Ihnen dabei Sorge?</b> Er klingt freundlich, ist keine Verteidigung, und die Antwort sagt dir, worüber ihr wirklich redet.' }
    }
  ],

  wortschatz: {
    h2: 'Zwölf Wörter,',
    hl: 'die du brauchst, wenn es hakt',
    ssub: 'Sag jedes laut. Und sag bei jedem gleich einen Satz, mit dem du im Gespräch bleibst.',
    karten: [
      { bild: 'vok-bild/die-meinung.webp', alt: 'Eine Sprechblase über einem Kopf', art: 'der', wort: 'Einwand', kurz: 'der Grund, der dagegen spricht', bsp: 'Ihr Einwand ist berechtigt, ich habe darüber nachgedacht.', tipp: '<b>Ihr Einwand ist berechtigt</b> ist der freundlichste Anfang, den es gibt. Du gibst dem anderen recht, ohne dabei deinen Vorschlag aufzugeben.', say: 'Ihr Einwand ist berechtigt, ich habe darüber nachgedacht.' },
      { bild: 'amanda/amanda-denk.webp', alt: 'Amanda überlegt nachdenklich', art: 'die', wort: 'Bedenken', kurz: 'die Sorge, dass etwas schiefgeht', bsp: 'Wo hätten Sie denn Bedenken?', tipp: 'Immer im Plural: <i>die Bedenken</i>. Und die Frage <b>Wo hätten Sie Bedenken?</b> ist Gold wert — sie holt den Einwand hervor, bevor er hinter deinem Rücken besprochen wird.', say: 'Wo hätten Sie denn Bedenken?' },
      { bild: 'amanda/sz-heikel.webp', alt: 'Zwei Menschen in einem ernsten Gespräch', art: 'die', wort: 'Sorge', kurz: 'die Angst, dass etwas nicht klappt', bsp: 'Was genau macht Ihnen dabei Sorge?', tipp: 'Der wichtigste Satz des Abends. <b>Sorge machen</b> ist weicher als <i>Was stört Sie?</i> — es unterstellt keinen Ärger, sondern Fürsorge.', say: 'Was genau macht Ihnen dabei Sorge?' },
      { bild: 'amanda/amanda-ups.webp', alt: 'Amanda hält sich die Hand vor den Mund', art: 'das', wort: 'Missverständnis', kurz: 'wenn zwei etwas Verschiedenes meinen', bsp: 'Ich glaube, da liegt ein Missverständnis vor.', tipp: '<b>Da liegt ein Missverständnis vor</b> ist die höflichste Art zu sagen: Wir reden aneinander vorbei. Niemand hat schuld, und beide können neu anfangen.', say: 'Ich glaube, da liegt ein Missverständnis vor.' },
      { bild: 'amanda/sz-telefonieren.webp', alt: 'Eine Person telefoniert und notiert etwas', art: 'die', wort: 'Rückfrage', kurz: 'die Frage, mit der du nachhakst', bsp: 'Eine Rückfrage hätte ich noch dazu.', tipp: 'Nutz sie, um Zeit zu gewinnen. Eine Rückfrage klingt interessiert statt unsicher — und du bekommst fünf Sekunden zum Nachdenken geschenkt.', say: 'Eine Rückfrage hätte ich noch dazu.' },
      { bild: 'amanda/a-zeigen.webp', alt: 'Amanda zeigt auf einen Punkt', art: 'das', wort: 'Beispiel', kurz: 'der konkrete Fall, den du erzählst', bsp: 'Ein Beispiel: Letzten Monat hat genau das funktioniert.', tipp: 'Ein Beispiel schlägt jedes allgemeine Argument. Bau es immer so: <i>Bei uns war das so: …</i> — mit Zeit, Ort und Ergebnis. Das kann niemand bestreiten.', say: 'Ein Beispiel: Letzten Monat hat genau das funktioniert.' },
      { bild: 'amanda/a-warten.webp', alt: 'Amanda wartet mit verschränkten Armen', art: 'der', wort: 'Zweifel', kurz: 'wenn jemand nicht ganz glaubt, dass es klappt', bsp: 'Ich verstehe Ihre Zweifel, das ging mir zuerst auch so.', tipp: '<b>Ich verstehe Ihre Zweifel</b> plus <i>das ging mir auch so</i> — damit stehst du plötzlich neben dem anderen statt gegenüber. Sehr wirksam, und ehrlich dazu.', say: 'Ich verstehe Ihre Zweifel, das ging mir zuerst auch so.' },
      { bild: 'amanda/sz-sozial.webp', alt: 'Menschen sitzen im Kreis und sprechen miteinander', art: 'der', wort: 'Kompromiss', kurz: 'wenn beide etwas nachgeben', bsp: 'Als Kompromiss könnten wir es erst mal halbieren.', tipp: 'Einen Kompromiss <b>findet</b> man. Wichtig: Bring ihn erst, wenn die anderen drei Werkzeuge nicht gereicht haben — sonst gibst du nach, bevor du musst.', say: 'Als Kompromiss könnten wir es erst mal halbieren.' },
      { bild: 'amanda/a-stift.webp', alt: 'Ein Stift liegt auf einem Notizblock', art: 'der', wort: 'Punkt', kurz: 'die einzelne Sache im Gespräch', bsp: 'Diesen Punkt würde ich gern noch klären.', tipp: 'Sehr nützlich zum Sortieren: <b>Da sind zwei Punkte drin</b> oder <b>Zum ersten Punkt: …</b> Damit machst du aus einem großen Einwand zwei kleine.', say: 'Diesen Punkt würde ich gern noch klären.' },
      { bild: 'amanda/a-uhr.webp', alt: 'Eine Uhr an der Wand', art: 'die', wort: 'Geduld', kurz: 'wenn du ruhig bleibst und wartest', bsp: 'Ein bisschen Geduld, dann sehen wir, ob es klappt.', tipp: 'Auch als Bitte: <b>Da bräuchte ich noch etwas Geduld von Ihnen.</b> Das ist ehrlich und wirkt fast immer besser als ein Versprechen, das du nicht halten kannst.', say: 'Ein bisschen Geduld, dann sehen wir, ob es klappt.' },
      { bild: 'amanda/a-klatschen.webp', alt: 'Amanda klatscht anerkennend', art: 'die', wort: 'Zusage', kurz: 'wenn jemand fest ja sagt', bsp: 'Eine feste Zusage brauche ich heute gar nicht.', tipp: 'Der entspannteste Satz im ganzen Gespräch: <b>Eine feste Zusage brauche ich heute nicht.</b> Damit nimmst du den Druck raus — und bekommst sie oft trotzdem.', say: 'Eine feste Zusage brauche ich heute gar nicht.' },
      { bild: 'amanda/sz-vertraege.webp', alt: 'Zwei Personen unterschreiben ein Papier', art: 'die', wort: 'Sache', kurz: 'das Thema, um das es geht', bsp: 'Bleiben wir bei der Sache, dann kommen wir weiter.', tipp: '<b>Bei der Sache bleiben</b> heißt: über das Thema reden, nicht über die Person. Wenn ein Gespräch persönlich wird, ist dieser Satz die Notbremse.', say: 'Bleiben wir bei der Sache, dann kommen wir weiter.' }
    ],
    spiel: { text: '💡 <strong>Spiel „Ja, aber“:</strong> Einer macht einen Vorschlag, der andere bringt drei Einwände hintereinander. Der Erste darf jedes Mal nur mit einem der vier Werkzeuge antworten — und nie zweimal mit demselben.' }
  },

  konzepte: {
    tab: '🔍 Vier Werkzeuge',
    zuerst: 'dreier',
    h2: 'Nachfragen, drehen',
    hl: 'oder ein Beispiel bringen?',
    ssub: 'Für fast jeden Einwand reicht eines dieser Werkzeuge. Der Kompromiss kommt zuletzt — nicht zuerst.',
    dreier: [
      { emoji: '🔍', wort: '1 Nachfragen', was: 'immer der erste Zug', bsp: '<b>Was genau macht Ihnen dabei Sorge?</b> Erst dann weißt du, worüber ihr redet.' },
      { emoji: '↩️', wort: '2 Zustimmen und drehen', was: 'der stärkste Zug', bsp: '<b>Stimmt, das kostet Zeit</b> — und genau deshalb lohnt es sich, sie einmal zu investieren.' },
      { emoji: '🧱', wort: '3 Beispiel bringen', was: 'wenn Worte nicht reichen', bsp: '<b>Bei uns war das so:</b> Im Mai haben wir es probiert, und danach kamen halb so viele Anrufe.' }
    ],
    paare: [
      {
        jaLabel: 'So bleibst du im Gespräch', ja: 'Was genau macht Ihnen dabei Sorge — die Zeit oder die Vertretung?',
        jaWarumLabel: 'Warum das funktioniert', jaWarum: 'Du antwortest nicht auf einen Einwand, den du noch gar nicht kennst. Und du bietest gleich zwei Möglichkeiten an — dann muss der andere nicht selbst formulieren, was ihn stört.',
        noLabel: 'So gerätst du in die Ecke', no: 'Das ist doch kein Problem, das schaffen wir schon.',
        noWarumLabel: 'Das Problem', noWarum: 'Du sagst der anderen Person, dass ihre Sorge keine ist. Ab da wird sie den Einwand wiederholen, nur lauter — oder sie sagt gar nichts mehr und ist trotzdem dagegen.'
      },
      {
        jaLabel: 'So bleibst du im Gespräch', ja: 'Stimmt, am Anfang kostet das mehr Zeit. Genau deshalb würde ich es befristet machen — dann sehen wir nach vier Wochen, ob es sich rechnet.',
        jaWarumLabel: 'Warum das funktioniert', jaWarum: 'Du gibst dem anderen recht und machst aus seinem Einwand den Grund für deinen Vorschlag. Er kann nicht widersprechen, ohne sich selbst zu widersprechen.',
        noLabel: 'So gerätst du in die Ecke', no: 'Nein, das kostet überhaupt keine Zeit.',
        noWarumLabel: 'Das Problem', noWarum: 'Wenn es nicht stimmt, merkt es der andere sofort — und dann glaubt er dir auch den Rest nicht mehr. Zugeben ist hier nicht schwach, sondern der einzige Weg nach vorn.'
      },
      {
        jaLabel: 'So bleibst du im Gespräch', ja: 'Da sind eigentlich zwei Punkte drin. Zum ersten: … Zum zweiten: …',
        jaWarumLabel: 'Warum das funktioniert', jaWarum: 'Ein großer Einwand wirkt unschlagbar. Zerlegt man ihn in zwei kleine, ist meistens einer davon schon geklärt — und der andere plötzlich lösbar.',
        noLabel: 'So gerätst du in die Ecke', no: 'Sie sehen das einfach zu negativ.',
        noWarumLabel: 'Das Problem', noWarum: 'Das ist ein Satz über die Person, nicht über die Sache. Ab da geht es nicht mehr um deinen Vorschlag, und gewinnen kann niemand mehr. Sag stattdessen: <i>Bleiben wir bei der Sache.</i>'
      }
    ],
    hilfe: {
      knopf: '🆘 Was sage ich jetzt?',
      vor: 'Vier Sätze, in dieser Reihenfolge:',
      punkte: [
        '<b>1 Nachfragen:</b> <i>Was genau macht Ihnen dabei Sorge?</i>',
        '<b>2 Zustimmen und drehen:</b> <i>Stimmt — und genau deshalb …</i>',
        '<b>3 Beispiel:</b> <i>Bei uns war das so: …</i>',
        '<b>4 Kompromiss:</b> <i>Als Kompromiss könnten wir es erst mal halbieren.</i>'
      ],
      nach: 'Und wenn gar nichts mehr geht, gibt es die Notbremse: <b>Lassen Sie uns kurz darüber schlafen — ich melde mich morgen.</b> Damit endet nichts, es wird nur verschoben. Und morgen ist die Lage oft eine andere.'
    },
    tipp: { art: 'yellow', text: '🎯 <strong>Zu zweit, zwei Minuten:</strong> Einer bringt Einwände, der andere darf nur nachfragen — kein einziges Mal antworten. Danach reden beide darüber, was sich dadurch geändert hat.' }
  },

  saetze: {
    h2: 'Vier Bausteine',
    hl: 'für den Moment, in dem es hakt',
    ssub: 'Nachfragen, zustimmen, drehen, anbieten. Such dir aus jedem Kasten einen Satz — dann kommst du nie mehr ins Stocken.',
    akkLabel: 'der Schritt',
    mengeLabel: 'was du damit erreichst',
    a2: [
      { titel: '1 · 🔍 Nachfragen', chips: ['Was genau macht Ihnen Sorge?', 'Wie meinen Sie das?', 'Woran denken Sie dabei?', 'Wo hätten Sie Bedenken?'], bsp: 'Was genau macht Ihnen dabei Sorge? Dann kann ich besser antworten.', say: 'Was genau macht Ihnen dabei Sorge? Dann kann ich besser antworten.' },
      { titel: '2 · 👍 Zustimmen', chips: ['Da haben Sie recht.', 'Stimmt, das ist ein Punkt.', 'Das verstehe ich gut.', 'Ihr Einwand ist berechtigt.'], bsp: 'Da haben Sie recht, das ist wirklich ein Punkt.', say: 'Da haben Sie recht, das ist wirklich ein Punkt.' },
      { titel: '3 · ↩️ Drehen', chips: ['Stimmt — und genau deshalb …', 'Aber gerade darum …', 'Das spricht eigentlich dafür, weil …', 'Bei uns war das so: …'], bsp: 'Stimmt, es kostet Zeit — und genau deshalb würde ich es befristet machen.', say: 'Stimmt, es kostet Zeit — und genau deshalb würde ich es befristet machen.' },
      { titel: '4 · 🤝 Anbieten', chips: ['Als Kompromiss könnten wir …', 'Wir könnten mit der Hälfte anfangen.', 'Probieren wir es einen Monat?', 'Was müsste passieren, damit es geht?'], bsp: 'Als Kompromiss könnten wir mit der Hälfte anfangen. Was meinen Sie?', say: 'Als Kompromiss könnten wir mit der Hälfte anfangen. Was meinen Sie?' }
    ],
    b1: [
      { titel: '1 · 🔍 Gezielt nachhaken', chips: ['Wenn ich es richtig verstehe, geht es Ihnen um …', 'Ist es eher die Zeit oder eher das Geld?', 'Woran würden Sie merken, dass es funktioniert?', 'Was wäre für Sie das schlimmste Ergebnis?'], bsp: 'Wenn ich es richtig verstehe, geht es Ihnen weniger um die Kosten als um die Vertretung — stimmt das?', say: 'Wenn ich es richtig verstehe, geht es Ihnen weniger um die Kosten als um die Vertretung — stimmt das?' },
      { titel: '2 · 👍 Anerkennen und sortieren', chips: ['Ihr Einwand ist berechtigt, den hatte ich auch.', 'Da sind eigentlich zwei Punkte drin.', 'Ich verstehe Ihre Zweifel, das ging mir zuerst genauso.', 'Zum ersten Punkt würde ich sagen: …'], bsp: 'Da sind eigentlich zwei Punkte drin — die Kosten und die Vertretung. Zum ersten würde ich sagen: …', say: 'Da sind eigentlich zwei Punkte drin — die Kosten und die Vertretung. Zum ersten würde ich sagen: …' },
      { titel: '3 · ↩️ Umdrehen mit Beleg', chips: ['Genau deshalb wäre der befristete Weg der sichere.', 'Ihr Argument spricht eher für meinen Vorschlag, weil …', 'Wir haben das im Mai probiert, und danach …', 'Das Risiko liegt eher darin, nichts zu ändern.'], bsp: 'Wir haben das im Mai einmal probiert — danach kamen halb so viele Rückfragen. Genau deshalb würde ich es wieder so machen.', say: 'Wir haben das im Mai einmal probiert — danach kamen halb so viele Rückfragen. Genau deshalb würde ich es wieder so machen.' },
      { titel: '4 · 🤝 Tür offen lassen', chips: ['Eine feste Zusage brauche ich heute gar nicht.', 'Was müsste erfüllt sein, damit Sie zustimmen könnten?', 'Lassen Sie uns kurz darüber schlafen.', 'Ich melde mich Freitag noch einmal dazu.'], bsp: 'Eine feste Zusage brauche ich heute gar nicht — sagen Sie mir einfach, was erfüllt sein müsste.', say: 'Eine feste Zusage brauche ich heute gar nicht — sagen Sie mir einfach, was erfüllt sein müsste.' }
    ],
    tipp: { art: 'teal', text: '📣 <strong>Reihum:</strong> Einer nennt einen Einwand, der Nächste antwortet mit Werkzeug eins, der Übernächste mit Werkzeug zwei. Derselbe Einwand, vier verschiedene Antworten.' }
  },

  dialoge: {
    h2: 'Vier Situationen —',
    hl: 'zwei Runden',
    ssub: '<b>Runde 1:</b> Lest den Dialog zu zweit laut. <b>Runde 2:</b> Klappt die Zeilen zu und sprecht frei — nur die Stichwörter bleiben.',
    liste: [
      {
        bild: 'amanda/sz-buero.webp', alt: 'Ein Gespräch am Schreibtisch zwischen zwei Kolleginnen',
        titel: 'Das erste Nein',
        situation: 'A hat einen Vorschlag gemacht. B bremst — und A antwortet mit einer Rückfrage statt mit einer Verteidigung.',
        zeilen: [
          { wer: 'a', text: 'Was halten Sie davon? Zwei Monate befristet, dann schauen wir noch mal.' },
          { wer: 'b', text: 'Grundsätzlich gern. Aber ich weiß nicht, wer dann den Nachmittag macht.', cue: '<b>Grundsätzlich gern, aber …</b> — das ist kein Nein, sondern ein Einwand mit Adresse. Genau hier fängt das Gespräch erst an.' },
          { wer: 'a', text: 'Was genau macht Ihnen dabei Sorge — die Erreichbarkeit oder die Vertretung?' },
          { wer: 'b', text: 'Ehrlich gesagt beides. Vor allem, wenn jemand krank wird.', cue: 'A hat nicht geantwortet, sondern nachgefragt. Und schon liegt der echte Grund auf dem Tisch — der stand vorher gar nicht im Raum.' },
          { wer: 'a', text: 'Stimmt, das wäre eng. Genau deshalb würde ich es befristet machen — dann steigen wir aus, wenn es nicht trägt.' },
          { wer: 'b', text: 'Damit kann ich leben. Aber sagen Sie im Team Bescheid, bevor es losgeht.', cue: 'Zustimmen und drehen: Der Einwand wird zum Grund für den Vorschlag. Und B stellt am Ende nur noch eine Bedingung — das ist ein Ja.' }
        ]
      },
      {
        bild: 'amanda/sz-vertraege.webp', alt: 'Zwei Personen sitzen über einem Vertrag',
        titel: 'Beim Vermieter',
        situation: 'A möchte den Balkon streichen und braucht das Einverständnis. B ist skeptisch, aber nicht dagegen.',
        zeilen: [
          { wer: 'a', text: 'Ich würde den Balkon gern streichen, auf eigene Kosten. Wäre das in Ordnung?' },
          { wer: 'b', text: 'Ja, aber dann sieht er anders aus als die anderen im Haus.', cue: 'Ein sachlicher Einwand. Wichtig für A: nicht sofort nachgeben und nicht sofort widersprechen.' },
          { wer: 'a', text: 'Ihr Einwand ist berechtigt. Wenn ich dieselbe Farbe nehme wie unten — wäre das eine Lösung?' },
          { wer: 'b', text: 'Das wäre schon besser. Nur muss ich wissen, wer es macht.', cue: '<b>Ihr Einwand ist berechtigt</b> plus ein konkretes Angebot. Und B rückt sofort ein Stück — von <i>anders</i> zu <i>schon besser</i>.' },
          { wer: 'a', text: 'Ein Malerbetrieb, ich schicke Ihnen das Angebot. Eine feste Zusage brauche ich heute gar nicht.' },
          { wer: 'b', text: 'Schicken Sie es rüber, dann sage ich Ihnen bis Freitag Bescheid.', cue: 'Die Tür bleibt offen. <b>Eine feste Zusage brauche ich heute nicht</b> nimmt den Druck — und genau deshalb kommt sie meistens.' }
        ]
      },
      {
        bild: 'amanda/sz-sprachkurs.webp', alt: 'Ein Kursraum mit Tischen und einer Tafel',
        titel: 'Zwei Punkte auf einmal',
        situation: 'A schlägt mehr Sprechzeit im Kurs vor. B nennt einen großen Einwand — A zerlegt ihn in zwei kleine.',
        zeilen: [
          { wer: 'a', text: 'Zehn Minuten Sprechen pro Stunde — wie sehen Sie das?' },
          { wer: 'b', text: 'Wir kommen mit dem Stoff nicht durch, und die Schwächeren hängen dann hinterher.', cue: 'Zwei Einwände in einem Satz. Wer beide auf einmal beantwortet, verliert den Faden — und die anderen auch.' },
          { wer: 'a', text: 'Da sind zwei Punkte drin. Zum Stoff: Es fallen danach weniger Fragen an. Zu den Schwächeren: …' },
          { wer: 'b', text: 'Genau da bin ich unsicher. Die reden dann gar nicht.', cue: '<b>Da sind zwei Punkte drin</b> sortiert das Gespräch. Und sofort wird sichtbar, welcher Einwand der echte ist.' },
          { wer: 'a', text: 'Ich verstehe Ihre Zweifel, das ging mir auch so. Bei uns im letzten Kurs haben gerade die Stillen am meisten gesagt — in Paaren traut man sich mehr.' },
          { wer: 'b', text: 'Das leuchtet mir ein. Probieren wir es zwei Wochen.', cue: 'Zweifel anerkennen und ein Beispiel bringen. Konkret schlägt allgemein — jedes Mal.' }
        ]
      },
      {
        bild: 'amanda/sz-familie.webp', alt: 'Eine Familie sitzt gemeinsam am Küchentisch',
        titel: 'Wenn es persönlich wird',
        situation: 'A und B streiten über die Hausarbeit. B wird persönlich, A holt das Gespräch zurück zur Sache.',
        zeilen: [
          { wer: 'a', text: 'Ich würde die Woche gern anders aufteilen. Montag und Donnerstag tauschen.' },
          { wer: 'b', text: 'Du beschwerst dich immer über alles. So schlimm ist es doch nicht.', cue: 'Das ist kein Einwand mehr, sondern ein Satz über die Person. Wenn A jetzt zurückschießt, ist der Abend gelaufen.' },
          { wer: 'a', text: 'Ich möchte mich nicht beschweren. Bleiben wir kurz bei der Sache: Montag und Donnerstag.' },
          { wer: 'b', text: 'Montags weiß ich halt nie, wann ich heimkomme.', cue: '<b>Bleiben wir bei der Sache</b> ist die Notbremse. Kein Vorwurf zurück — und schon nennt B den echten Grund.' },
          { wer: 'a', text: 'Das verstehe ich. Dann nimm den Donnerstag fest und ich mache den Montag. Wäre das machbar?' },
          { wer: 'b', text: 'Ja, das kriegen wir hin. Tut mir leid wegen vorhin.', cue: 'Zustimmen, Kompromiss anbieten, Frage stellen. Und weil A nicht zurückgeschossen hat, kommt am Ende sogar eine Entschuldigung.' }
        ]
      }
    ],
    tipp: { art: 'yellow', text: '🎭 <strong>Und jetzt ihr:</strong> Spielt Dialog 1 mit einem eigenen Vorschlag. Regel: Der Erste darf erst antworten, nachdem er einmal nachgefragt hat.' }
  },

  grammatik: {
    h2: '🧩 Zwar, allerdings, dennoch:',
    hl: 'zugeben und trotzdem dranbleiben',
    ssub: 'Wer einen Einwand anerkennt und dann weitermacht, braucht dafür genau diese Wörter. Sie sind der Grund, warum ein Satz nicht wie Nachgeben klingt.',
    intro: 'Das Muster heißt: erst zugeben, dann drehen. <i><b>Zwar</b> kostet es Zeit, <b>allerdings</b> sparen wir sie hinterher.</i> Nach <b>allerdings</b>, <b>dennoch</b> und <b>trotzdem</b> kommt das Verb sofort — genau hier verrutscht es am häufigsten.',
    kette: [
      { emoji: '👍', rolle: 'zugeben', bsp: 'Zwar kostet es Zeit,' },
      { emoji: '↩️', rolle: 'allerdings', bsp: 'allerdings' },
      { emoji: '🔧', rolle: 'Verb sofort', bsp: 'sparen' },
      { emoji: '🎯', rolle: 'dein Punkt', bsp: 'wir sie hinterher.' }
    ],
    felder: [
      { rolle: 'Es kostet Zeit,', wort: 'Es kostet Zeit,' },
      { rolle: 'dennoch', wort: 'dennoch' },
      { rolle: 'Verb sofort', wort: 'lohnt', hervor: true },
      { rolle: 'Rest', wort: 'es sich.' }
    ],
    bloecke: [
      {
        h2: 'Drei Wörter',
        hl: 'für dasselbe Muster',
        ssub: 'Sie sagen alle: Ich gebe dir recht und bleibe trotzdem dabei. Der Unterschied ist nur die Tonlage.',
        dreier: [
          { emoji: '🤝', wort: 'allerdings', was: 'das freundlichste', bsp: 'Der Punkt stimmt, <b>allerdings</b> <u>gilt</u> das nur am Anfang.' },
          { emoji: '🧱', wort: 'dennoch', was: 'das festeste', bsp: 'Es kostet Zeit, <b>dennoch</b> <u>lohnt</u> es sich.' },
          { emoji: '🗣️', wort: 'trotzdem', was: 'das alltäglichste', bsp: 'Klar ist das Aufwand, <b>trotzdem</b> <u>würde</u> ich es machen.' }
        ],
        chips: ['zwar … allerdings', 'dennoch', 'trotzdem', 'gerade deshalb', 'genau darum', 'einerseits … andererseits', 'zugegeben', 'da haben Sie recht', 'stimmt, und', 'nur', 'dafür', 'im Gegenzug']
      },
      {
        h2: 'Zugeben',
        hl: 'ist nicht nachgeben',
        ssub: 'Beide Sätze fangen gleich an. Nur einer davon bringt dich weiter.',
        paare: [
          {
            jaLabel: 'So gibst du zu und bleibst dran', ja: 'Zwar kostet es am Anfang Zeit, allerdings sparen wir sie hinterher wieder ein.',
            jaWarumLabel: 'Warum das wirkt', jaWarum: 'Der erste Teil nimmt dem anderen den Wind, der zweite bringt deinen Punkt. Und nach <b>allerdings</b> steht das Verb sofort: <i>allerdings <u>sparen</u> wir</i>.',
            noLabel: 'So gibst du nach, ohne es zu merken', no: 'Sie haben recht, es kostet Zeit. Dann lassen wir es vielleicht.',
            noWarumLabel: 'Das Problem', noWarum: 'Nach dem Zugeben fehlt die Drehung — und damit ist der Vorschlag weg. Merk dir: Auf <i>Sie haben recht</i> muss immer ein <b>und</b> oder <b>allerdings</b> folgen, nie ein Punkt.'
          }
        ]
      }
    ],
    bauH2: '🧱 Bau die Sätze selbst',
    bauSsub: 'Tippe die Teile in der richtigen Reihenfolge an. Achte darauf, wo das Verb nach dem Verbindungswort steht.',
    storyH2: '📖 Und jetzt im Zusammenhang',
    storySsub: 'Ein Gespräch, das fast schiefgegangen wäre. Wähle in jeder Lücke das passende Wort.',
    hilfe: {
      knopf: '🆘 Allerdings oder obwohl?',
      vor: 'Drei Regeln, dann steht jeder Satz:',
      punkte: [
        '<b>allerdings, dennoch, trotzdem:</b> Verb kommt sofort. <i>allerdings <u>sparen</u> wir …</i>',
        '<b>obwohl:</b> Verb ans Ende. <i>obwohl es Zeit <u>kostet</u> …</i>',
        '<b>zwar … allerdings:</b> Das Paar für Einwände. Erst zugeben, dann drehen.',
        '<b>Und immer:</b> Nach dem Zugeben muss noch etwas kommen. Ein Punkt an dieser Stelle ist ein Nein.'
      ],
      nach: 'Und wenn dir die Form nicht einfällt: nimm zwei kurze Sätze und verbinde sie mit <b>dafür</b>. <i>Es kostet Zeit. Dafür sparen wir sie hinterher.</i> Das ist immer richtig und klingt im Sprechen sogar besser.'
    }
  },

  rollenspiele: {
    h2: '🎭 Drei Situationen',
    hl: 'zu zweit',
    ssub: 'Einer schlägt vor, einer bremst. Danach tauschen — beim zweiten Mal ohne die Sätze unten. Regel: erst nachfragen, dann antworten.',
    liste: [
      {
        titel: 'Drei Einwände hintereinander',
        situation: 'A macht einen Vorschlag für die Arbeit. B bringt drei Einwände nacheinander — Zeit, Vertretung, Kosten. A darf jedes Werkzeug nur einmal benutzen.',
        a2: ['Was genau macht Ihnen Sorge?', 'Da haben Sie recht, das ist ein Punkt', 'Stimmt — und genau deshalb befristet', 'Als Kompromiss könnten wir halbieren'],
        b1: ['Grundsätzlich gern, aber wer macht dann den Nachmittag?', 'Und wenn jemand krank wird, stehen wir ganz allein da', 'Rechnet sich das überhaupt, so kurzfristig?', 'Damit könnte ich leben, sagen Sie es aber im Team'],
        gut: 'A hat zuerst nachgefragt, bevor A geantwortet hat. Und kein Werkzeug kam zweimal vor — auch der Kompromiss stand erst am Ende, nicht am Anfang.'
      },
      {
        titel: 'Beim Vermieter',
        situation: 'A möchte etwas in der Wohnung verändern und braucht das Einverständnis. B ist nicht dagegen, hat aber Bedenken wegen der anderen Mieter.',
        a2: ['Wäre das für Sie in Ordnung?', 'Ihr Einwand ist berechtigt', 'Wenn ich dieselbe Farbe nehme — ginge das?', 'Eine feste Zusage brauche ich heute nicht'],
        b1: ['Ja, aber dann sieht es anders aus als im Rest des Hauses', 'Und wer macht das, ein Betrieb oder Sie selbst?', 'Das wäre schon besser, ich müsste es trotzdem prüfen', 'Schicken Sie mir das Angebot, ich sage bis Freitag Bescheid'],
        gut: 'A hat den Einwand anerkannt und sofort eine konkrete Lösung angeboten. Und am Ende blieb die Tür offen, statt auf eine Antwort zu drängen.'
      },
      {
        titel: 'Wenn es persönlich wird',
        situation: 'A und B streiten über eine Aufteilung zu Hause. B wird persönlich. A holt das Gespräch zurück zur Sache, ohne zurückzuschießen.',
        a2: ['Ich möchte mich nicht beschweren', 'Bleiben wir kurz bei der Sache', 'Das verstehe ich', 'Wäre das machbar?'],
        b1: ['Du beschwerst dich doch immer über alles', 'So schlimm ist es nun wirklich nicht', 'Montags weiß ich halt nie, wann ich heimkomme', 'Ja, das kriegen wir hin, tut mir leid wegen vorhin'],
        gut: 'A ist kein einziges Mal auf die persönliche Ebene gegangen. Der Satz <i>Bleiben wir bei der Sache</i> ist gefallen — und danach kam der echte Grund.'
      }
    ]
  },

  challenge: {
    ssub: 'Neunzig Sekunden gegen den Wind: Der Partner bringt Einwände, du bleibst dran — nachfragen, zugeben, drehen, anbieten.',
    hilfe: {
      knopf: '🆘 Mir fällt nichts ein',
      vor: 'Vier Sätze, dann trägt dich die Zeit:',
      punkte: [
        '<b>Nachfragen:</b> <i>Was genau macht Ihnen dabei Sorge?</i>',
        '<b>Zugeben:</b> <i>Da haben Sie recht, das ist ein Punkt.</i>',
        '<b>Drehen:</b> <i>Und genau deshalb würde ich es befristet machen.</i>',
        '<b>Anbieten:</b> <i>Was müsste erfüllt sein, damit es für Sie geht?</i>'
      ],
      nach: 'Und wenn du wirklich nicht weiterweißt: sag <i>Lassen Sie uns kurz darüber schlafen, ich melde mich morgen.</i> Das ist kein Aufgeben — es ist der Satz, mit dem Profis Zeit gewinnen.'
    },
    tipp: { art: 'yellow', text: '⏱️ <strong>Spielregel:</strong> Wer sofort antwortet, ohne einmal nachgefragt zu haben, fängt noch einmal an. Und wer <i>Das ist doch kein Problem</i> sagt, ebenfalls.' }
  },

  ueben: { tipp: { art: 'teal', text: '📣 <strong>Danach laut:</strong> Einer nennt einen Einwand, der Nächste antwortet mit einem anderen Werkzeug als der Vorredner. Reihum, bis alle vier durch sind.' } },

  hausaufgabe: {
    h2: '📮 Deine Hausaufgabe bis',
    hl: 'Montag',
    ssub: 'Vier kleine Aufgaben, zusammen etwa 25 Minuten. Nächste Woche fangen wir mit einem neuen Thema an.',
    warum: { text: '💡 <strong>Warum das hilft:</strong> Fast jedes wichtige Gespräch entscheidet sich in dem Moment, in dem der andere bremst. Wer da ruhig bleibt, bekommt sein Ja oft eine Runde später. Und wer dieses eine Werkzeug hat — erst fragen, dann antworten — braucht dafür kein perfektes Deutsch.' },
    a2: [
      { emoji: '✍️', titel: 'Zehn Einwände', zeit: '6 Min', text: 'Schreib zehn Einwände auf, die du in deinem Alltag wirklich hörst — vom Chef, vom Vermieter, in der Familie.' },
      { emoji: '🔄', titel: 'Zu jedem eine Antwort', zeit: '7 Min', text: 'Schreib zu jedem Einwand eine Antwort mit einem der vier Werkzeuge. Jedes Werkzeug muss mindestens zweimal vorkommen.' },
      { emoji: '🎙️', titel: 'Einmal laut', zeit: '5 Min', text: 'Nimm eine Sprachnachricht auf: Jemand sagt dir <i>Ja, aber das kostet zu viel Zeit</i>. Antworte in vier Sätzen.' },
      { emoji: '👂', titel: 'Zuhören', zeit: '7 Min', text: 'Achte diese Woche darauf, wie andere auf Einwände reagieren. Notier drei Sätze, die gut funktioniert haben.' }
    ],
    b1: [
      { emoji: '📝', titel: 'Ein schwieriges Gespräch', zeit: '8 Min', text: 'Schreib einen kurzen Dialog: Vorschlag, drei Einwände, drei Antworten, Ergebnis. Jedes Werkzeug genau einmal.' },
      { emoji: '↩️', titel: 'Achtmal zwar und allerdings', zeit: '6 Min', text: 'Schreib acht Sätze nach dem Muster <i>Zwar …, allerdings …</i> Achte darauf, dass nach <i>allerdings</i> sofort das Verb steht.' },
      { emoji: '🎙️', titel: 'Zwei Minuten Gegenwind', zeit: '6 Min', text: 'Nimm auf, wie du auf den härtesten Einwand gegen deinen eigenen Vorschlag antwortest. Ohne Ausreden, mit einem Beispiel.' },
      { emoji: '🔍', titel: 'Den echten Grund finden', zeit: '5 Min', text: 'Schreib fünf Einwände auf und daneben, was vermutlich wirklich dahintersteckt. Und dazu die Rückfrage, mit der du es herausfindest.' }
    ],
    hilfeA2: {
      knopf: '💡 Beispiel ansehen (Aufgabe 2)',
      vor: 'So sehen die Antworten aus:',
      punkte: [
        '<b>Einwand:</b> <i>Das kostet zu viel Zeit.</i> → <b>Nachfragen:</b> <i>Was genau macht Ihnen Sorge — der Anfang oder die ganze Zeit?</i>',
        '<b>Einwand:</b> <i>Das haben wir noch nie so gemacht.</i> → <b>Zugeben und drehen:</b> <i>Stimmt — und genau deshalb wäre ein Test sinnvoll.</i>',
        '<b>Einwand:</b> <i>Das klappt nie.</i> → <b>Beispiel:</b> <i>Bei uns im Mai hat genau das funktioniert.</i>',
        '<b>Einwand:</b> <i>Dafür haben wir kein Geld.</i> → <b>Kompromiss:</b> <i>Dann fangen wir mit der Hälfte an.</i>',
        '<b>Einwand:</b> <i>Ich muss darüber nachdenken.</i> → <b>Tür offen:</b> <i>Klar. Ich melde mich Freitag noch einmal.</i>'
      ],
      nach: 'Ein einziger Test genügt: Steht in deiner Antwort das Wort <i>nein</i> oder <i>doch</i>? Dann verteidigst du dich. Streich es und fang stattdessen mit <i>Stimmt</i> oder <i>Was genau</i> an.'
    },
    hilfeB1: {
      knopf: '💡 Beispiel ansehen (Aufgabe 4)',
      vor: 'Was hinter Einwänden oft wirklich steckt:',
      punkte: [
        '<b>Gesagt:</b> <i>Dafür haben wir keine Zeit.</i> → <b>Gemeint:</b> Ich weiß nicht, wer die Arbeit macht. → <b>Rückfrage:</b> <i>Woran würde es scheitern — an den Stunden oder an den Leuten?</i>',
        '<b>Gesagt:</b> <i>Das haben wir noch nie so gemacht.</i> → <b>Gemeint:</b> Ich habe Angst vor dem Fehler. → <b>Rückfrage:</b> <i>Was wäre für Sie das schlimmste Ergebnis?</i>',
        '<b>Gesagt:</b> <i>Ich muss das noch prüfen.</i> → <b>Gemeint:</b> Ich darf nicht allein entscheiden. → <b>Rückfrage:</b> <i>Wer müsste dem noch zustimmen?</i>',
        '<b>Gesagt:</b> <i>Das ist zu teuer.</i> → <b>Gemeint:</b> Ich sehe den Nutzen nicht. → <b>Rückfrage:</b> <i>Woran würden Sie merken, dass es sich gelohnt hat?</i>',
        '<b>Gesagt:</b> <i>Melden Sie sich in ein paar Wochen.</i> → <b>Gemeint:</b> Nein, aber freundlich. → <b>Rückfrage:</b> <i>Wäre es Ihnen lieber, wenn ich es ganz lasse?</i>'
      ],
      nach: 'Und ein Hinweis, der viel Zeit spart: Wenn dieselbe Person dreimal ausweicht, ist es ein Nein. Frag dann direkt und freundlich — <i>Habe ich Sie richtig verstanden, dass es eher nicht geht?</i> Eine ehrliche Absage ist mehr wert als drei weitere Termine.'
    },
    abgabe: 'Schick mir bis Montag 12 Uhr deine zehn Einwände mit den Antworten und die Sprachnachricht — ich markiere dir jede Stelle, an der du dich verteidigst statt zu fragen.',
    ausblick: 'Nächste Woche fangen wir mit einem neuen Thema an. Die vier Werkzeuge bleiben im Lernbereich — du brauchst sie in jedem Gespräch wieder, in dem etwas auf dem Spiel steht.'
  },

  daten: {
    sk: [
      'Jemand sagt: Das kostet zu viel Zeit. Antworte mit einer Rückfrage.',
      'Stimm einem Einwand zu und dreh ihn dann um.',
      'Erzähl von einem Gespräch, in dem du zu schnell nachgegeben hast.',
      'Jemand wird persönlich. Hol das Gespräch zurück zur Sache.',
      'Bring ein Beispiel aus deinem Leben statt eines allgemeinen Arguments.',
      'Biete einen Kompromiss an, ohne ganz nachzugeben.',
      'Zerleg einen großen Einwand in zwei kleine.',
      'Was sagst du, wenn du gerade keine Antwort hast?',
      'Frag jemanden aktiv nach seinen Bedenken. Drei verschiedene Sätze.',
      'Jemand weicht zum dritten Mal aus. Was sagst du?'
    ],
    w90: [
      { w: 'der Einwand', b: 'vok-bild/die-meinung.webp', h: ['dagegen', 'berechtigt', 'entkräften', 'zuhören', 'ernst nehmen'] },
      { w: 'die Bedenken', b: 'amanda/amanda-denk.webp', h: ['die Sorge', 'unsicher', 'nachfragen', 'ausräumen', 'offen sagen'] },
      { w: 'die Sorge', b: 'amanda/sz-heikel.webp', h: ['schiefgehen', 'die Angst', 'beruhigen', 'ernst nehmen', 'was genau'] },
      { w: 'das Missverständnis', b: 'amanda/amanda-ups.webp', h: ['aneinander vorbei', 'klären', 'anders gemeint', 'noch mal', 'niemand schuld'] },
      { w: 'die Rückfrage', b: 'amanda/sz-telefonieren.webp', h: ['nachhaken', 'genau', 'Zeit gewinnen', 'verstehen', 'stellen'] },
      { w: 'das Beispiel', b: 'amanda/a-zeigen.webp', h: ['konkret', 'bei uns war', 'zeigen', 'funktioniert', 'letzten Monat'] },
      { w: 'der Zweifel', b: 'amanda/a-warten.webp', h: ['nicht glauben', 'unsicher', 'verstehen', 'ging mir auch so', 'ausräumen'] },
      { w: 'der Kompromiss', b: 'amanda/sz-sozial.webp', h: ['halbieren', 'nachgeben', 'beide Seiten', 'zuletzt', 'fair'] },
      { w: 'die Geduld', b: 'amanda/a-uhr.webp', h: ['ruhig bleiben', 'warten', 'nicht drängen', 'noch mal', 'Zeit lassen'] },
      { w: 'die Zusage', b: 'amanda/a-klatschen.webp', h: ['ja sagen', 'fest', 'brauchen', 'später', 'kein Druck'] }
    ],
    quiz: [
      { q: 'Was machst du zuerst, wenn jemand <u>Ja, aber</u> sagt?', o: ['nachfragen', 'sofort antworten', 'nachgeben', 'einen Kompromiss anbieten'], c: 0, e: 'Erst wissen, worum es wirklich geht. Eine Rückfrage kostet fünf Sekunden und verhindert, dass du dich gegen etwas verteidigst, das gar nicht gemeint war.' },
      { q: 'Welche Antwort ist am stärksten?', o: ['Stimmt, das kostet Zeit — und genau deshalb würde ich es befristet machen.', 'Nein, das kostet gar keine Zeit.', 'Das ist doch kein Problem.', 'Dann lassen wir es eben.'], c: 0, e: 'Zustimmen und drehen: Du gibst recht und machst aus dem Einwand den Grund für deinen Vorschlag.' },
      { q: 'Wo steht das Verb nach <u>allerdings</u>?', o: ['sofort danach', 'ganz am Ende', 'an dritter Stelle', 'vor allerdings'], c: 0, e: 'Nach <b>allerdings</b>, <b>dennoch</b> und <b>trotzdem</b> kommt das Verb sofort. Nur nach <b>obwohl</b> geht es ans Ende.' },
      { q: 'Was sagst du, wenn jemand persönlich wird?', o: ['Bleiben wir bei der Sache.', 'Sie sehen das zu negativ.', 'Das sagen Sie immer.', 'Reden wir ein andermal.'], c: 0, e: 'Der Satz zieht das Gespräch zurück zum Thema, ohne zurückzuschießen. Danach kommt sehr oft der echte Grund.' },
      { q: 'Wann bietest du einen Kompromiss an?', o: ['zuletzt, wenn die anderen Werkzeuge nicht reichen', 'sofort, das spart Zeit', 'nie, das ist Nachgeben', 'gleich nach der Begrüßung'], c: 0, e: 'Wer zu früh nachgibt, gibt mehr her als nötig. Erst nachfragen, zugeben, drehen und ein Beispiel bringen — dann der Kompromiss.' },
      { q: 'Was bedeutet <u>Da sind zwei Punkte drin</u>?', o: ['Der Einwand besteht aus zwei Teilen.', 'Der Einwand ist falsch.', 'Es geht um zwei Personen.', 'Es dauert zwei Minuten.'], c: 0, e: 'Ein großer Einwand wirkt unschlagbar. Zerlegt man ihn, ist einer der Teile oft schon geklärt — und der andere plötzlich lösbar.' },
      { q: 'Welcher Satz ist richtig gebaut?', o: ['Zwar kostet es Zeit, allerdings sparen wir sie später.', 'Zwar es kostet Zeit, allerdings wir sparen sie später.', 'Zwar kostet es Zeit, allerdings wir sparen sie später.', 'Zwar es Zeit kostet, allerdings sparen wir später sie.'], c: 0, e: 'Nach <b>zwar</b> und nach <b>allerdings</b> steht das Verb jeweils sofort: <i>kostet es</i> und <i>sparen wir</i>.' },
      { q: 'Jemand weicht zum dritten Mal aus. Was tust du?', o: ['freundlich direkt nachfragen, ob es eher nicht geht', 'einen vierten Termin machen', 'lauter werden', 'einfach aufhören'], c: 0, e: 'Dreimal ausweichen ist ein Nein. Eine ehrliche Absage ist mehr wert als drei weitere Gespräche — und du kannst danach etwas anderes probieren.' }
    ],
    gap: [
      { t: 'Was genau macht Ihnen dabei ___?', o: ['Sorge', 'Geduld', 'Zusage', 'Sache'], a: 'Sorge' },
      { t: 'Ihr Einwand ist ___, darüber habe ich auch nachgedacht.', o: ['berechtigt', 'unmöglich', 'egal', 'falsch'], a: 'berechtigt' },
      { t: 'Zwar kostet es Zeit, ___ sparen wir sie hinterher.', o: ['allerdings', 'obwohl', 'weil', 'dass'], a: 'allerdings' },
      { t: 'Es kostet Zeit, ___ lohnt es sich.', o: ['dennoch', 'obwohl', 'weil', 'damit'], a: 'dennoch' },
      { t: 'Da sind eigentlich zwei ___ drin.', o: ['Punkte', 'Sorgen', 'Zusagen', 'Beispiele'], a: 'Punkte' },
      { t: 'Bleiben wir bei der ___, dann kommen wir weiter.', o: ['Sache', 'Geduld', 'Zusage', 'Rückfrage'], a: 'Sache' },
      { t: 'Eine feste ___ brauche ich heute gar nicht.', o: ['Zusage', 'Sorge', 'Rückfrage', 'Geduld'], a: 'Zusage' },
      { t: 'Als ___ könnten wir erst mal mit der Hälfte anfangen.', o: ['Kompromiss', 'Einwand', 'Zweifel', 'Missverständnis'], a: 'Kompromiss' }
    ],
    gbau: [
      { f: 'Bau die Rückfrage:', t: ['Was', 'genau', 'macht', 'Ihnen', 'dabei', 'Sorge'], l: ['Was', 'genau', 'macht', 'Ihnen', 'dabei', 'Sorge'], e: 'Das <b>genau</b> ist der wichtigste Teil — es holt den echten Grund hervor statt einer allgemeinen Antwort.' },
      { f: 'Bau den Satz mit zwar und allerdings:', t: ['Zwar', 'kostet', 'es', 'Zeit', 'allerdings', 'sparen', 'wir', 'sie', 'später'], l: ['Zwar', 'kostet', 'es', 'Zeit', 'allerdings', 'sparen', 'wir', 'sie', 'später'], e: 'Nach beiden Wörtern kommt sofort das Verb: <i>kostet es</i> und <i>sparen wir</i>. Erst zugeben, dann drehen.' },
      { f: 'Bau den Satz mit dennoch:', t: ['Es', 'ist', 'Aufwand', 'dennoch', 'lohnt', 'es', 'sich'], l: ['Es', 'ist', 'Aufwand', 'dennoch', 'lohnt', 'es', 'sich'], e: 'Auch nach <b>dennoch</b> steht das Verb sofort. Es klingt eine Spur fester als <i>trotzdem</i>.' },
      { f: 'Bau das Angebot:', t: ['Was', 'müsste', 'erfüllt', 'sein', 'damit', 'es', 'geht'], l: ['Was', 'müsste', 'erfüllt', 'sein', 'damit', 'es', 'geht'], e: 'Nach <b>damit</b> geht das Verb ans Ende. Und die Frage lädt den anderen ein, die Lösung selbst zu nennen.' }
    ],
    gstory: {
      t: 'Mein Vorschlag lag auf dem Tisch, und dann kam das erste Ja, aber. Früher hätte ich sofort geantwortet. Diesmal habe ich gefragt: Was genau macht Ihnen dabei ___? Die Antwort war eine andere, als ich erwartet hatte. Ich habe gesagt: Ihr Einwand ist ___, darüber habe ich auch nachgedacht. ___ kostet es am Anfang mehr Zeit, ___ sparen wir sie hinterher wieder ein. Danach kam noch ein Einwand, und ich habe gemerkt: Da sind zwei ___ drin. Zum ersten habe ich ein Beispiel gebracht, beim zweiten habe ich einen ___ angeboten. Kurz wurde es persönlich, aber ich habe nur gesagt: Bleiben wir bei der ___. Am Ende hieß es: Eine feste ___ bekommen Sie am Freitag. Das war genug.',
      o: ['Sorge', 'berechtigt', 'Zwar', 'allerdings', 'Punkte', 'Kompromiss', 'Sache', 'Zusage'],
      a: [['Sorge'], ['berechtigt'], ['Zwar'], ['allerdings'], ['Punkte'], ['Kompromiss'], ['Sache'], ['Zusage']]
    }
  }
};
fs.writeFileSync(__dirname + '/../stunden/w10-d2-einwaende-entkraeften.json', JSON.stringify(S, null, 2) + '\n', 'utf8');
console.log('geschrieben');
