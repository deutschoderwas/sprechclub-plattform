/* ============================================================
   bilder-ausloesen.js — die Bilder aus index.html herausloesen

   Die Startseite war 2,14 MB gross, davon 1,72 MB Bilder, die als
   base64 mitten im HTML standen. Das hat drei Folgen, und alle drei
   kosten Verkaeufe:

   1. Nichts wird sichtbar, bevor nicht alle 2,1 MB geladen sind.
      Der Browser kann kein Bild ueberspringen, das im Text steht.
   2. Nichts davon laesst sich zwischenspeichern. Beim zweiten
      Besuch laedt alles noch einmal.
   3. base64 ist rund ein Drittel groesser als die Datei selbst.

   Wer ueber Instagram mit dem Handy kommt, sieht deshalb erst
   sekundenlang eine weisse Seite. Danach ist er weg.

   Dieses Skript schreibt jedes Bild als eigene Datei nach
   start-bilder/ und ersetzt die Stelle im HTML durch den Pfad —
   mit Groessenangabe (kein Springen beim Laden) und, ausser beim
   Logo und beim ersten Bild, mit loading="lazy".

   Gleiche Bilder werden nur einmal gespeichert.

   Aufruf:  node bau/bilder-ausloesen.js [--probe]
   ============================================================ */
'use strict';
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const W = path.join(__dirname, '..');
const DATEI = path.join(W, 'index.html');
const ORDNER = path.join(W, 'start-bilder');
const nurProbe = process.argv.includes('--probe');

/* Breite und Hoehe direkt aus den Bytes lesen — dann muss man die
   Masse nicht raten und die Seite springt beim Laden nicht. */
function masse(buf, typ) {
  try {
    if (typ === 'png') return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
    if (typ === 'jpeg' || typ === 'jpg') {
      let i = 2;
      while (i < buf.length) {
        if (buf[i] !== 0xFF) { i++; continue; }
        const m = buf[i + 1];
        if (m >= 0xC0 && m <= 0xCF && m !== 0xC4 && m !== 0xC8 && m !== 0xCC) {
          return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
        }
        i += 2 + buf.readUInt16BE(i + 2);
      }
    }
  } catch (e) {}
  return null;
}

/* Aus dem alt-Text einen lesbaren Dateinamen machen. */
function nameAus(alt, nr) {
  const s = String(alt || '').toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 42);
  return String(nr).padStart(2, '0') + (s ? '-' + s : '');
}

let html = fs.readFileSync(DATEI, 'utf8');
const vorher = html.length;
const re = /<img\b([^>]*?)src="(data:image\/([a-z+]+);base64,([A-Za-z0-9+/=]+))"([^>]*)>/g;

const nachHash = {};
let nr = 0, gespart = 0, dateien = 0;
const bericht = [];

const neu = html.replace(re, function (ganz, vor, datenUri, typ, b64, nach) {
  nr++;
  const buf = Buffer.from(b64, 'base64');
  const hash = crypto.createHash('sha1').update(buf).digest('hex');
  const alt = (ganz.match(/alt="([^"]*)"/) || [])[1] || '';
  const endung = typ === 'jpeg' ? 'jpg' : typ;

  let name = nachHash[hash];
  if (!name) {
    name = nameAus(alt, nr) + '.' + endung;
    nachHash[hash] = name;
    if (!nurProbe) {
      fs.mkdirSync(ORDNER, { recursive: true });
      fs.writeFileSync(path.join(ORDNER, name), buf);
    }
    dateien++;
    bericht.push('  ' + name.padEnd(46) + String(Math.round(buf.length / 1024)).padStart(4) + ' KB');
  } else {
    bericht.push('  (gleiches Bild wie ' + name + ')');
  }
  gespart += datenUri.length;

  const m = masse(buf, typ);
  const grösse = m ? ' width="' + m.w + '" height="' + m.h + '"' : '';
  /* Logo und das erste grosse Bild sollen sofort da sein — alles
     andere erst, wenn man hinscrollt. */
  const sofort = nr <= 2;
  const laden = sofort ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"';
  const schon = /\bloading=/.test(vor + nach);

  return '<img' + vor + 'src="start-bilder/' + name + '"' + grösse + (schon ? '' : laden) + nach + '>';
});

console.log('\n' + nr + ' Bilder gefunden, ' + dateien + ' verschiedene Dateien');
bericht.forEach(z => console.log(z));
console.log('\nHTML vorher:  ' + (vorher / 1024 / 1024).toFixed(2) + ' MB');
console.log('HTML nachher: ' + (neu.length / 1024 / 1024).toFixed(2) + ' MB');
console.log('Ersparnis:    ' + Math.round((1 - neu.length / vorher) * 100) + ' % beim ersten Byte');

if (nurProbe) { console.log('\n(nur Probe — nichts geschrieben)'); return; }
fs.writeFileSync(DATEI, neu, 'utf8');
console.log('\nindex.html geschrieben, Bilder liegen in start-bilder/');
