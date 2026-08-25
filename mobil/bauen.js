#!/usr/bin/env node
/* Sammelt die App-Dateien aus dem Plattform-Ordner in ./www,
   damit Capacitor sie in die native Hülle packen kann.
   Die App läuft dann lokal auf dem Gerät — nur Daten kommen aus dem Netz.
   Genau das unterscheidet eine echte App von einer eingepackten Webseite. */
const fs = require('fs');
const path = require('path');

const QUELLE = path.resolve(__dirname, '..');       // der Plattform-Ordner
const ZIEL = path.join(__dirname, 'www');

const DATEIEN = [
  'app.html', 'app.webmanifest', 'config.js',
  'dialoge.js', 'pruefung.js', 'mundbild.js',
  'vokabeln-pool.js',
  'amanda.png', 'logo.PNG'
];
const ORDNER = ['icons', 'vok-tr', 'vok-bild'];

function kopiereDatei(rel) {
  const von = path.join(QUELLE, rel);
  const nach = path.join(ZIEL, rel);
  if (!fs.existsSync(von)) { console.log('  fehlt (übersprungen): ' + rel); return 0; }
  fs.mkdirSync(path.dirname(nach), { recursive: true });
  fs.copyFileSync(von, nach);
  return 1;
}

function kopiereOrdner(rel) {
  const von = path.join(QUELLE, rel);
  if (!fs.existsSync(von)) { console.log('  fehlt (übersprungen): ' + rel + '/'); return 0; }
  let n = 0;
  for (const e of fs.readdirSync(von, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    const kind = path.join(rel, e.name);
    n += e.isDirectory() ? kopiereOrdner(kind) : kopiereDatei(kind);
  }
  return n;
}

// altes www leeren
fs.rmSync(ZIEL, { recursive: true, force: true });
fs.mkdirSync(ZIEL, { recursive: true });

let n = 0;
DATEIEN.forEach(f => { n += kopiereDatei(f); });
ORDNER.forEach(f => { n += kopiereOrdner(f); });

// In der nativen App heißt die Startseite index.html
const app = path.join(ZIEL, 'app.html');
if (fs.existsSync(app)) {
  let s = fs.readFileSync(app, 'utf8');

  // Der Service Worker wird in der nativen Hülle nicht gebraucht — Capacitor
  // liefert die Dateien schon lokal aus.
  s = s.replace(/if\('serviceWorker' in navigator\)\{[^}]*\}[^\n]*/, '/* in der App nicht nötig */');

  // Aufrufe an die Server-Funktionen gehen an die Webseite
  s = s.replace(/fetch\('\/api\//g, "fetch(window.__API__ + '/api/");
  s = s.replace(/<script>\n?\/\* =+/, function (m) { return m; });
  s = s.replace('<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>',
    '<script>window.__API__ = "https://www.deutschoderwas-club.de";</script>\n'
    + '<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>\n'
    + '<script src="native.js"></script>');

  fs.writeFileSync(path.join(ZIEL, 'index.html'), s);
  fs.rmSync(app);
  n++;
}

// die native Brücke mitkopieren
if (fs.existsSync(path.join(__dirname, 'native.js'))) {
  fs.copyFileSync(path.join(__dirname, 'native.js'), path.join(ZIEL, 'native.js'));
  n++;
}

console.log('www gebaut — ' + n + ' Dateien.');
console.log('Weiter mit:  npx cap sync');
