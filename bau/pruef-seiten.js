/* ============================================================
   bau/pruef-seiten.js — was sich am Quelltext sicher sagen laesst

   WICHTIG, aus Erfahrung: Diese Pruefung sieht nur den Quelltext.
   Die meisten Lektionsseiten bauen ihren Inhalt aber erst beim
   Oeffnen im Browser auf — der Text steht in JavaScript, die
   Uebungen sind Datenobjekte, Bilder haengen an Template-Variablen
   wie ${url}. Der erste Anlauf dieser Datei hat deshalb der Reihe
   nach gemeldet:

     245 "fehlende" Bilder  — es waren Platzhalter wie ${LOGO}
     198 Seiten "ohne Uebung" — die Uebungen lagen im Skript
      79 Seiten "fast leer"  — 157 KB Inhalt, nur nicht im HTML

   Kein einziger dieser Befunde stimmte. Deshalb prueft diese Datei
   nur noch, was am Quelltext WIRKLICH entscheidbar ist:

     · gibt es die Datei ueberhaupt?
     · fehlt der viewport (dann ist die Seite auf dem Handy kaputt)
     · steht echter Platzhaltertext drin?
     · fehlt lektion-konto.js (dann zaehlt die Seite keinen Fortschritt)
     · zeigt ein fester lokaler Bildpfad ins Leere?

   Alles andere — Inhalt, Uebungen, Loesungen, Aussehen auf dem
   Handy — entscheidet nur der Browser. Dafuer gibt es
   bau/render-pruef.js; das braucht Playwright und laeuft nicht auf
   jedem Rechner. Lieber keine Aussage als eine falsche.

   Aufruf:  node bau/pruef-seiten.js [--alles] [--csv]
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const W = path.join(__dirname, '..');
const ALLES = process.argv.includes('--alles');
const CSV = process.argv.includes('--csv');

global.window = {};
require(path.join(W, 'lektionen-katalog.js'));
const KATALOG = window.LEKTIONEN || [];

/* ---------- Signale ---------- */
function zaehl(h, re) { const m = h.match(re); return m ? m.length : 0; }

/* Viele Seiten aus der Juli-Reihe tragen ihren ganzen Inhalt im
   JavaScript und bauen sich beim Öffnen selbst auf. Wer nur das HTML
   ausserhalb der Skripte liest, sieht dort 15 Wörter und haelt eine
   157-KB-Lektion fuer leer. Also wird der Text auch aus den
   Zeichenketten im Skript geholt — ohne eingebettete Bilder und ohne
   Code-Schnipsel. */
function textAusSkript(js) {
  const raus = [];
  const re = /(['"`])((?:\\.|(?!\1)[^\\])*?)\1/g;
  let m;
  while ((m = re.exec(js))) {
    const t = m[2];
    if (t.length < 12) continue;
    if (/^data:|^https?:|^[A-Za-z0-9+/=]{60,}$/.test(t)) continue;   // Bilder, Adressen
    if (!/[a-zäöüß]{3,}\s+[a-zäöüß]{3,}/i.test(t)) continue;         // kein Fließtext
    if (/[{};]\s*$|=>|function\s*\(/.test(t)) continue;             // Code
    raus.push(t);
  }
  return raus.join(' ');
}

function fingerabdruck(h) {
  const skripte = (h.match(/<script[^>]*>[\s\S]*?<\/script>/gi) || [])
    .map(x => x.replace(/^<script[^>]*>/i, '').replace(/<\/script>$/i, ''));

  const ausserhalb = h
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const imSkript = skripte.map(textAusSkript).join(' ').replace(/\s+/g, ' ').trim();
  const nurText = (ausserhalb + ' ' + imSkript).trim();

  /* Übungen tauchen in drei Schreibweisen auf: als data-Attribut im
     HTML, als CSS-Klasse, und als Datenobjekt im Skript (typ:'mc'). */
  const uebung =
      zaehl(h, /data-quiz|data-fillgap|data-match|data-flashcards|data-speak|data-order|data-gap/gi)
    + zaehl(h, /class="[^"]*\bquiz-q\b/gi)
    + zaehl(h, /data-correct|data-answer|data-loesung|data-solution/gi)
    + zaehl(h, /class="[^"]*\b(uebung|exercise|aufgabe|task-card)\b/gi)
    + zaehl(h, /\btyp\s*:\s*['"](mc|listen|gapbank|order|match|type|bild|quiz|luecke|zuordnen)['"]/gi)
    + zaehl(h, /\b(richtig|loesung|answer|correct)\s*:/gi);

  const loesung = zaehl(h, /data-correct|data-answer|data-loesung|data-solution|class="[^"]*\b(quiz-exp|loesung|solution|fb-ok)\b/gi)
    + zaehl(h, /\b(richtig|loesung|akzeptiert|correct)\s*:/gi);

  const wortschatz =
      zaehl(h, /class="[^"]*\b(vocab|term|wortkarte|word|vokabel|chip)\b/gi)
    + zaehl(h, /class="[^"]*\b(gloss|erklaerung|meaning)\b/gi);

  const sprechen =
      zaehl(h, /class="[^"]*\b(qcard|speak|sprechkarte|rollenspiel|rp|debate|mission)\b/gi)
    + zaehl(h, /Sprich|Sprecht|Erzähl|Diskutiert|Rollenspiel|zu zweit|Partner/g);

  const bilder = [];
  const re = /<img[^>]*\ssrc="([^"]+)"/gi; let m;
  while ((m = re.exec(h))) bilder.push(m[1]);

  return {
    zeichen: nurText.length,
    woerter: nurText ? nurText.split(' ').length : 0,
    uebung, loesung, wortschatz, sprechen,
    bilder,
    ohneAlt: zaehl(h, /<img(?![^>]*\balt=)[^>]*>/gi),
    ueberschriften: zaehl(h, /<h[1-4][\s>]/gi),
    abschnitte: zaehl(h, /<section[\s>]|class="[^"]*\b(block|slide|section)\b/gi),
    titel: (h.match(/<title>([^<]*)</i) || [, ''])[1].trim(),
    hatViewport: /name="viewport"/i.test(h),
    hatLang: /<html[^>]*\blang=/i.test(h),
    kontoSkript: /lektion-konto\.js/i.test(h),
    /* „Platzhalter" allein ist kein Befund — in einer Grammatikerklärung
       zu da-Wörtern ist es der Fachbegriff („steht als Platzhalter").
       Gesucht wird echter unfertiger Text. */
    platzhalter: (h.match(/\b(lorem ipsum|TODO|TBD|XXXX|Blindtext|Platzhaltertext|\[\s*Platzhalter\s*\]|\bhier Text\b)/i) || [])[0] || null,
    leereUeberschrift: zaehl(h, /<h[1-4][^>]*>\s*<\/h[1-4]>/gi)
  };
}

/* ---------- Bewerten ---------- */
function bewerte(s, f, datei) {
  const funde = [];
  const melde = (stufe, was) => funde.push({ stufe, was });


  if (!f.titel) melde('mittel', 'kein Seitentitel im <title>');
  if (!f.hatViewport) melde('schwer', 'kein viewport — auf dem Handy unlesbar');
  if (!f.hatLang) melde('leicht', '<html> ohne lang-Angabe');
  if (f.platzhalter) melde('schwer', 'Platzhalter im Text: »' + f.platzhalter + '«');
  if (f.leereUeberschrift) melde('mittel', f.leereUeberschrift + ' leere Überschrift(en)');

  /* Ueber Uebungen, Sprechanlaesse und Textmenge sagt diese Pruefung
     bewusst nichts — siehe Kopf. Das entscheidet der Browser. */

  /* Bilder: zeigt der Verweis auf etwas, das es gibt? */
  const ordner = path.dirname(datei);
  f.bilder.forEach(b => {
    if (/^(https?:|data:|\/\/)/i.test(b)) return;
    /* ${url}, ${LOGO}, '+k.bild+' und aehnliches sind Bausteine aus dem
       Skript, keine Adressen. Wer sie prueft, meldet 245 Phantome. */
    if (/\$\{|\+|`|<%/.test(b)) return;
    const rein = b.split('?')[0].replace(/^\//, '');
    const kandidaten = [path.join(W, ordner, rein), path.join(W, rein)];
    if (!kandidaten.some(p => fs.existsSync(p)))
      melde('mittel', 'das Bild »' + rein + '« liegt nicht da');
  });
  if (f.ohneAlt) melde('leicht', f.ohneAlt + ' Bild(er) ohne alt-Text');
  if (!f.kontoSkript) melde('mittel', 'lektion-konto.js fehlt — diese Seite zählt keinen Fortschritt');

  return funde;
}

/* ---------- Lauf ---------- */
const reihen = [];
let fehlend = 0;
KATALOG.forEach(s => {
  const p = path.join(W, s.d);
  if (!fs.existsSync(p)) { fehlend++; reihen.push({ s, funde: [{ stufe: 'schwer', was: 'Datei existiert nicht' }], f: {} }); return; }
  const h = fs.readFileSync(p, 'utf8');
  const f = fingerabdruck(h);
  reihen.push({ s, f, funde: bewerte(s, f, s.d) });
});

let schwer = 0, mittel = 0, leicht = 0, sauber = 0;
reihen.forEach(r => {
  const a = r.funde.filter(x => x.stufe === 'schwer').length;
  const b = r.funde.filter(x => x.stufe === 'mittel').length;
  const c = r.funde.filter(x => x.stufe === 'leicht').length;
  r.a = a; r.b = b; r.c = c;
  schwer += a; mittel += b; leicht += c;
  if (!r.funde.length) sauber++;
});

if (CSV) {
  console.log('datei;niveau;art;woerter;uebungen;loesungen;wortschatz;sprechen;bilder;schwer;mittel;leicht');
  reihen.forEach(r => console.log([r.s.d, r.s.lvl, r.s.art, r.f.woerter || 0, r.f.uebung || 0,
    r.f.loesung || 0, r.f.wortschatz || 0, r.f.sprechen || 0, (r.f.bilder || []).length,
    r.a, r.b, r.c].join(';')));
} else {
  console.log('=== ' + reihen.length + ' Lektionsseiten geprüft ===');
  console.log(sauber + ' ohne jeden Fund · ' + schwer + ' schwere · ' + mittel + ' mittlere · ' + leicht + ' leichte');
  if (fehlend) console.log(fehlend + ' Datei(en) im Katalog, die es nicht gibt');
  console.log();

  /* Was am häufigsten fehlt */
  const haeufig = {};
  reihen.forEach(r => r.funde.forEach(f => {
    const k = f.was.replace(/»[^«]*«/g, '»…«').replace(/\d+/g, 'N');
    haeufig[k] = haeufig[k] || { n: 0, stufe: f.stufe };
    haeufig[k].n++;
  }));
  console.log('--- am häufigsten ---');
  Object.entries(haeufig).sort((a, b) => b[1].n - a[1].n).slice(0, 14)
    .forEach(([k, v]) => console.log(String(v.n).padStart(4) + '× [' + v.stufe + '] ' + k));

  console.log('\n--- die schlimmsten 25 Seiten ---');
  reihen.filter(r => r.a).sort((x, y) => (y.a * 100 + y.b) - (x.a * 100 + x.b)).slice(0, 25)
    .forEach(r => {
      console.log('  ' + r.s.d + '  [' + r.s.lvl + ' · ' + r.s.art + ']');
      r.funde.filter(f => ALLES || f.stufe === 'schwer').forEach(f => console.log('      [' + f.stufe + '] ' + f.was));
    });
}
console.log('\nERGEBNIS ' + JSON.stringify({ seiten: reihen.length, sauber, schwer, mittel, leicht, fehlend }));
