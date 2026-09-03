/* ============================================================
   pruefe-erzeugtes.js — hat sich am Lernstoff etwas geändert?

   Diese Prüfung gibt es wegen eines Fehlers, den sie gefangen hätte.

   Beim Umstellen der Werkzeuge auf echte Umlaute stand in der
   Tauschtabelle „spaß" → „spaß" ohne Wortgrenze. In „Zustandspassiv"
   steckt die Folge s-p-a-s-s. Aus einer Grammatikerklärung wurde
   damit „Zustandspaßiv" — falsches Deutsch, auf einer Seite, die
   Deutsch beibringt. Aufgefallen ist es erst hinterher, beim
   Vergleich der erzeugten Dateien.

   Genau diesen Vergleich macht dieses Skript, und zwar so, dass er
   sich lohnt: Es erzeugt alle abgeleiteten Dateien neu und vergleicht
   nicht die Bytes, sondern die Daten darin. Ein geänderter
   Kopfkommentar ist dann kein Alarm, ein geändertes Wort im Lernstoff
   schon.

   Zu benutzen nach jedem Eingriff, der viele Dateien auf einmal
   anfasst — Umbenennungen, Suchen-und-Ersetzen, Formatierungen.

   Aufruf:
     node bau/pruefe-erzeugtes.js merken    vorher: Stand festhalten
     node bau/pruefe-erzeugtes.js           nachher: vergleichen
   ============================================================ */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const wurzel = path.join(__dirname, '..');
const ABLAGE = path.join(__dirname, '.stand-erzeugtes.json');

/* Die Generatoren und was sie schreiben. */
const GENERATOREN = [
  ['mach-wortschatz-plus.js', 'wortschatz-plus.js'],
  ['mach-vielfalt.js', 'vielfalt-neu.js']
];

/* Alles, was Lernstoff enthält und verglichen werden soll. */
const DATEIEN = ['wortschatz-plus.js', 'vielfalt-neu.js', 'uebungen.js',
  'wortschatz-a1-neu.js', 'wortschatz-neu.js', 'grammatik-neu.js',
  'grammatik-c1-neu.js', 'grammatik-b1-mehr.js', 'grammatik-b2c1-mehr.js', 'lesen-schreiben-neu.js', 'aussprache-neu.js',
  'hoer-neu.js', 'hoeren-a1-neu.js', 'hoeren-b2-neu.js', 'hoeren-c1-neu.js',
  'lektionen-katalog.js', 'grammatik-reihenfolge.js', 'themen-zusammenfuehren.js'];

/* Der Kopfkommentar darf sich ändern, der Inhalt nicht. Deshalb wird
   alles vor der ersten Zuweisung weggeschnitten und der Rest um
   Leerraum bereinigt. */
function kern(text) {
  const ohneKopf = text.replace(/^[\s\S]*?(?=\(function|window\.|var\s|const\s)/, '');
  return ohneKopf.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').trim();
}

function prüfsumme(t) {
  let h = 0x811c9dc5;
  for (let i = 0; i < t.length; i++) {
    h ^= t.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return h.toString(16);
}

function erzeugen() {
  GENERATOREN.forEach(([skript]) => {
    try {
      execFileSync('node', [path.join(__dirname, skript)], { stdio: 'pipe' });
    } catch (e) {
      console.error('  ' + skript + ' läuft nicht: ' + String(e.message).split('\n')[0]);
      process.exit(1);
    }
  });
}

function stand() {
  const s = {};
  DATEIEN.forEach(f => {
    const p = path.join(wurzel, f);
    if (fs.existsSync(p)) s[f] = prüfsumme(kern(fs.readFileSync(p, 'utf8')));
  });
  return s;
}

if (process.argv[2] === 'merken') {
  erzeugen();
  fs.writeFileSync(ABLAGE, JSON.stringify(stand(), null, 1), 'utf8');
  console.log('\nStand festgehalten: ' + Object.keys(stand()).length + ' Dateien.');
  console.log('Nach dem Eingriff: node bau/pruefe-erzeugtes.js\n');
} else {
  if (!fs.existsSync(ABLAGE)) {
    console.error('\nKein Stand da. Vorher aufrufen:\n  node bau/pruefe-erzeugtes.js merken\n');
    process.exit(1);
  }
  erzeugen();
  const vorher = JSON.parse(fs.readFileSync(ABLAGE, 'utf8'));
  const jetzt = stand();
  const anders = [], weg = [], dazu = [];
  Object.keys(vorher).forEach(f => {
    if (!(f in jetzt)) weg.push(f);
    else if (vorher[f] !== jetzt[f]) anders.push(f);
  });
  Object.keys(jetzt).forEach(f => { if (!(f in vorher)) dazu.push(f); });

  if (!anders.length && !weg.length && !dazu.length) {
    console.log('\nAm Lernstoff hat sich nichts geändert — ' +
                Object.keys(jetzt).length + ' Dateien geprüft.\n');
    process.exit(0);
  }
  console.log('\nDa hat sich etwas am Lernstoff geändert:');
  anders.forEach(f => console.log('  geändert:  ' + f));
  weg.forEach(f => console.log('  fehlt:     ' + f));
  dazu.forEach(f => console.log('  neu:       ' + f));
  console.log('\nWar das gewollt? Wenn ja: node bau/pruefe-erzeugtes.js merken\n');
  process.exit(1);
}
