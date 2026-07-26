#!/usr/bin/env node
/* ============================================================
   Baut ein Update-Paket für die App.

   Aufruf:  npm run paket
            npm run paket -- 1.0.4        (eigene Versionsnummer)

   Was passiert:
     1. `bauen.js` sammelt die App-Dateien in ./www
     2. daraus wird ein ZIP unter ../app-pakete/<version>.zip
     3. ../app-version.json wird geschrieben — dort schaut die App nach

   Danach nur noch wie immer pushen. Beim nächsten Öffnen holt sich
   jede App die neue Fassung. Kein Store, keine Prüfung.
   ============================================================ */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

const HIER = __dirname;
const PLATTFORM = path.resolve(HIER, '..');
const WWW = path.join(HIER, 'www');
const PAKETE = path.join(PLATTFORM, 'app-pakete');
const STAND = path.join(PLATTFORM, 'app-version.json');
const ADRESSE = 'https://www.deutschoderwas-club.de';

// --- Version bestimmen ---
function naechste(alt) {
  const t = String(alt || '1.0.0').split('.').map(n => parseInt(n, 10) || 0);
  t[2] = (t[2] || 0) + 1;
  return t.join('.');
}

let bisher = null;
try { bisher = JSON.parse(fs.readFileSync(STAND, 'utf8')); } catch (e) { }
const gewuenscht = process.argv[2];
const version = gewuenscht || naechste(bisher && bisher.version);

// --- 1. www bauen ---
console.log('1/3  App-Dateien sammeln …');
execSync('node ' + JSON.stringify(path.join(HIER, 'bauen.js')), { stdio: 'inherit' });

if (!fs.existsSync(path.join(WWW, 'index.html'))) {
  console.error('\nFEHLER: www/index.html fehlt. Läuft bauen.js sauber durch?');
  process.exit(1);
}

// --- 2. ZIP packen ---
console.log('2/3  Paket packen …');
fs.mkdirSync(PAKETE, { recursive: true });
const zipDatei = path.join(PAKETE, version + '.zip');
if (fs.existsSync(zipDatei)) fs.rmSync(zipDatei);

try {
  // -r rekursiv, -q leise, -X ohne Mac-Zusatzdateien
  execSync('zip -rqX ' + JSON.stringify(zipDatei) + ' .', { cwd: WWW, stdio: 'inherit' });
} catch (e) {
  console.error('\nFEHLER beim Packen. Ist „zip" installiert?  ->  brew install zip');
  process.exit(1);
}

const inhalt = fs.readFileSync(zipDatei);
const pruefsumme = crypto.createHash('sha256').update(inhalt).digest('hex');

// --- 3. Versionsdatei schreiben ---
console.log('3/3  Versionsdatei schreiben …');
const neu = {
  _hinweis: 'Hier schaut die App nach, ob es eine neuere Fassung gibt. Wird von „npm run paket" geschrieben.',
  version: version,
  url: ADRESSE + '/app-pakete/' + version + '.zip',
  checksum: pruefsumme,
  gebaut: new Date().toISOString().slice(0, 19).replace('T', ' '),
  aus: false,
  _aus_erklaerung: 'Auf true setzen und pushen, wenn ein Update Probleme macht — dann bekommt niemand mehr eines.',
  anteil: 1,
  _anteil_erklaerung: 'Zwischen 0 und 1. Bei 0.2 bekommt nur jede fünfte App das Update — zum vorsichtigen Ausrollen.',
};
fs.writeFileSync(STAND, JSON.stringify(neu, null, 2) + '\n');

// alte Pakete aufräumen, die letzten fünf bleiben
const alte = fs.readdirSync(PAKETE).filter(f => f.endsWith('.zip')).sort();
if (alte.length > 5) {
  alte.slice(0, alte.length - 5).forEach(f => {
    fs.rmSync(path.join(PAKETE, f));
    console.log('     altes Paket entfernt: ' + f);
  });
}

const groesse = (inhalt.length / 1024 / 1024).toFixed(2);
console.log('\nFertig.');
console.log('  Version : ' + version);
console.log('  Paket   : app-pakete/' + version + '.zip  (' + groesse + ' MB)');
console.log('  Prüfsumme: ' + pruefsumme.slice(0, 16) + '…');
console.log('\nJetzt nur noch pushen. Die Apps holen sich das Update beim nächsten Öffnen.');
