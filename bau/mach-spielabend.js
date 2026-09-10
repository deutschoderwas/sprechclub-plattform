'use strict';
/* ============================================================
   mach-spielabend.js — baut die Freitagsstunde aus der Woche,
   die gerade vorbei ist.

   Der Freitag heißt im Klassenraum „Freies Sprechen mit Spielen".
   Er braucht deshalb keinen neuen Stoff, sondern die Wörter,
   Sprechkarten und Thesen, die von Montag bis Donnerstag schon
   dran waren. Genau das sammelt dieses Skript ein:

     · zehn 90-Sekunden-Wörter, gleichmäßig aus allen vier Stunden
     · zehn Sprechkarten, ebenso verteilt
     · eine These aus bau/debatten.json
     · zwölf Wortschatzkarten für die Vorbereitungsseite

   Gespielt wird immer mit denselben vier Spielen. Die stehen
   unten in SPIELE und sind bewusst so gebaut, dass sie mit jedem
   Wortschatz funktionieren — Freitag soll leicht sein.

   Aufruf:  node mach-spielabend.js <plan.json>
   ============================================================ */
const fs = require('fs');
const path = require('path');

const quelle = process.argv[2];
if (!quelle) { console.error('Aufruf: node mach-spielabend.js <plan.json>'); process.exit(1); }
const plan = JSON.parse(fs.readFileSync(quelle, 'utf8'));
const hier = __dirname;

function lade(name) { return JSON.parse(fs.readFileSync(path.join(hier, 'stunden', name + '.json'), 'utf8')); }

/* Gleichmaessig aus mehreren Quellen ziehen: erst je eins aus jeder,
   dann die zweite Runde. So kommt keine Stunde zu kurz. */
function reihum(listen, wieViele) {
  const raus = [];
  for (let runde = 0; raus.length < wieViele; runde++) {
    let gabEtwas = false;
    for (const l of listen) {
      if (l[runde] === undefined) continue;
      raus.push(l[runde]); gabEtwas = true;
      if (raus.length >= wieViele) break;
    }
    if (!gabEtwas) break;
  }
  return raus;
}

const stunden = plan.quellen.map(lade);
const w90 = reihum(stunden.map(s => (s.daten && s.daten.w90) || []), 10);
const sk  = reihum(stunden.map(s => (s.daten && s.daten.sk)  || []), 10);
/* Beim Wortschatz darf kein Bild zweimal im Raster stehen — zwei
   Stunden derselben Woche greifen manchmal zum selben Motiv. Also
   erst grosszuegig einsammeln, dann Doppel wegwerfen. */
const kartenRoh = reihum(stunden.map(s => (s.wortschatz && s.wortschatz.karten) || []), 40);
const gesehen = new Set();
const karten = kartenRoh.filter(k => {
  const b = k.bild || '';
  if (b && gesehen.has(b)) return false;
  if (b) gesehen.add(b);
  return true;
}).slice(0, 12);

if (w90.length < 8) { console.error('Zu wenige 90-Sekunden-Wörter gefunden:', w90.length); process.exit(1); }

/* Die vier Spiele des Abends. Sie stehen in derselben Form da wie
   Rollenspiele, weil der Generator dafür schon eine Ansicht hat:
   Titel, Lage, Sätze für zwei Niveaus, und woran man merkt, dass
   es geklappt hat. */
const SPIELE = [
  {
    titel: '🔍 Wer bin ich?',
    situation: 'A denkt sich ein Wort aus dieser Woche aus und sagt es nicht. B stellt Fragen, auf die es nur ja oder nein gibt, und rät.',
    a2: ['Ist es ein Ding?', 'Kann man das kaufen?', 'Hat man das zu Hause?', 'Braucht man das jeden Tag?'],
    b1: ['Kommt das eher im Amt vor oder im Alltag?', 'Würdest du das jemandem leihen?', 'Hat das mit Geld zu tun?', 'Kann man das anfassen?'],
    gut: 'B hat mit höchstens acht Fragen geraten — und A hat kein einziges Mal das Wort selbst gesagt.'
  },
  {
    titel: '🎯 Drei Sätze, ein Wort',
    situation: 'A zieht ein Wort und beschreibt es in genau drei Sätzen: Was ist es ungefähr, was macht man damit, wo findet man es. B rät nach jedem Satz einmal.',
    a2: ['Das ist so ein Ding, mit dem …', 'Man braucht das, wenn …', 'Das findet man meistens …', 'Ich glaube, ich habe es.'],
    b1: ['Es gehört zu den Sachen, die …', 'Ohne das geht hier ziemlich wenig, weil …', 'Man begegnet dem vor allem, wenn …', 'Sag noch einen Satz, dann habe ich es.'],
    gut: 'A hat wirklich bei drei Sätzen aufgehört. Und der zweite Satz hat gesagt, wozu man das Ding braucht — daran scheitert es meistens.'
  },
  {
    titel: '🔁 Und dann?',
    situation: 'Ihr erzählt zusammen eine Geschichte. Jeder sagt einen Satz, und jeder Satz muss mit <i>und dann</i>, <i>plötzlich</i> oder <i>zum Glück</i> anfangen. Wer stockt, gibt weiter.',
    a2: ['Und dann ist …', 'Plötzlich kam …', 'Zum Glück hatte …', 'Am Ende war …'],
    b1: ['Und dann, ausgerechnet in dem Moment, …', 'Plötzlich stellte sich heraus, dass …', 'Zum Glück hatte vorher jemand daran gedacht, dass …', 'Und so kam es, dass am Ende …'],
    gut: 'Die Geschichte ist mindestens zwölf Sätze weit gekommen, und jeder in der Runde war mindestens zweimal dran.'
  },
  {
    titel: '⚡ Zwei Wörter, ein Satz',
    situation: 'Zwei Karten werden gezogen. Wer dran ist, muss beide Wörter in einem einzigen sinnvollen Satz unterbringen. Je verrückter die Kombination, desto besser.',
    a2: ['Ich brauche … und …, weil …', 'Bei mir zu Hause gibt es … und …', 'Ohne … kann man … nicht …', 'Gestern hatte ich … und …'],
    b1: ['Zwischen … und … gibt es mehr Verbindung, als man denkt: …', 'Immer wenn ich … sehe, denke ich an …', 'Wer … hat, braucht meistens auch …', 'Man könnte sagen, … ist das … des Alltags.'],
    gut: 'Der Satz ergab wirklich Sinn — und alle in der Runde haben verstanden, wie die beiden Wörter zusammenhängen.'
  }
];

const S = {
  datei: plan.datei,
  eyebrow: 'deutschoderwas · Sprachspielclub · ' + plan.termin_lang,
  titel: 'Freies Sprechen',
  hl: 'mit Spielen',
  stufe: 'ab B1',
  termin: plan.termin,
  untertitel: plan.untertitel,
  fuss: 'Sprachspielclub · ' + plan.woche + ' · ab B1 · ' + plan.fuss_zusatz,
  einstieg: [
    {
      h2: 'Erst mal',
      hl: 'ankommen',
      ssub: 'Freitagabend, und niemand muss heute etwas Neues lernen. Wir nehmen die Wörter dieser Woche und spielen damit — reihum, ohne Druck, und wer einmal aussetzen möchte, setzt aus.',
      bild: 'amanda/sz-freunde.webp',
      alt: 'Menschen sitzen entspannt beieinander und reden',
      fragen: [plan.frage],
      fragenA2: [plan.frage],
      fragenB1: [plan.frageB1 || plan.frage],
      tipp: { art: 'teal', text: '🔑 <strong>Die Regel des Abends:</strong> Es gibt keine falschen Sätze. Wer ein Wort nicht weiß, umschreibt es. Wer stockt, gibt weiter. Und gelacht wird über die Sätze, nicht über die Leute.' }
    }
  ],
  wortschatz: {
    h2: 'Die Wörter',
    hl: 'dieser Woche',
    ssub: 'Alles, was von Montag bis Donnerstag dran war. Sag jedes einmal laut, bevor es losgeht.',
    karten: karten,
    spiel: { text: '💡 <strong>Zum Aufwärmen:</strong> Jeder sucht sich ein Wort von der Liste aus und sagt einen Satz damit. Reihum, ohne nachzudenken — das ist schon das erste Spiel.' }
  },
  spiele: {
    h2: '🎲 Vier Spiele',
    hl: 'für den Abend',
    ssub: 'Ihr braucht nichts außer den Wörtern von oben. Nehmt euch pro Spiel ungefähr zehn Minuten und wechselt dann.',
    liste: SPIELE
  },
  challenge: {
    ssub: 'Neunzig Sekunden zu einem Wort aus dieser Woche. Es muss nicht gut sein — es muss weitergehen.',
    hilfe: {
      knopf: '🆘 Mir fällt nichts ein',
      vor: 'Vier Sätze, dann trägt dich die Zeit:',
      punkte: [
        '<b>Was ist das?</b> <i>Das ist so ein …</i>',
        '<b>Wozu?</b> <i>Man braucht das, wenn …</i>',
        '<b>Bei mir:</b> <i>Ich habe damit letztens …</i>',
        '<b>Und woanders?</b> <i>Bei uns zu Hause ist das anders, da …</i>'
      ],
      nach: 'Und wenn dir mitten drin nichts mehr einfällt: sag genau das. <i>Jetzt weiß ich gerade nicht weiter — aber was mir noch einfällt, ist …</i> Auch das sind fünf Sekunden.'
    },
    tipp: { art: 'yellow', text: '⏱️ <strong>Spielregel:</strong> Der Partner hakt mit. Für jedes Hilfswort, das du von allein benutzt, gibt es einen Punkt — und wer über sechzig Sekunden kommt, hat sowieso gewonnen.' }
  },
  abschluss: {},
  daten: { sk: sk, w90: w90 }
};

const zielJson = path.join(hier, 'stunden', plan.name + '.json');
fs.writeFileSync(zielJson, JSON.stringify(S, null, 2) + '\n', 'utf8');
console.log('geschrieben:', path.relative(hier, zielJson),
  ' (' + w90.length + ' Wörter, ' + sk.length + ' Sprechkarten, ' + karten.length + ' Wortschatzkarten)');
