/* Prüft die gebauten Lektionsseiten: passen Reiter und Abschnitte
   zusammen, sind die Tags ausgeglichen, läuft das Skript, ist das
   Szenenbild da, blieb irgendwo eine Lücke im Text? */
const fs = require('fs'), path = require('path');
const W = path.join(__dirname, '..');
const dateien = fs.readdirSync(W).filter(f => /-lektion\.html$/.test(f));
let fehler = 0;
dateien.forEach(f => {
  const h = fs.readFileSync(path.join(W, f), 'utf8');
  const p = [];
  const tabs = [...h.matchAll(/data-tab="(\d)"/g)].map(m => m[1]);
  const secs = [...h.matchAll(/data-section="(\d)"/g)].map(m => m[1]);
  tabs.forEach(t => { if (!secs.includes(t)) p.push('Reiter ' + t + ' ohne Abschnitt'); });
  secs.forEach(s => { if (!tabs.includes(s)) p.push('Abschnitt ' + s + ' ohne Reiter'); });
  const zähl = (re) => (h.match(re) || []).length;
  if (zähl(/<section/g) !== zähl(/<\/section>/g)) p.push('section unbalanciert');
  if (zähl(/<div/g) !== zähl(/<\/div>/g)) p.push('div unbalanciert');
  // Nur die Bloecke ohne src prüfen — die geladenen Dateien
  // haben ihre eigene Prüfung mit node --check.
  const bloecke = [...h.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  if (!bloecke.length) p.push('kein Skriptblock');
  bloecke.forEach((code, nr) => {
    try { new Function(code.replace(/<\\\//g, '</')); }
    catch (e) { p.push('JS in Block ' + (nr + 1) + ': ' + e.message); }
  });
  const bild = (h.match(/src="(amanda\/[^"]+)"/) || [])[1];
  if (!bild || !fs.existsSync(path.join(W, bild))) p.push('Szenenbild fehlt: ' + bild);
  if (/undefined/.test(h)) p.push('undefined im Text');
  if (/„“/.test(h)) p.push('leerer Beispielsatz');
  if (zähl(/class="vcard"/g) < 8) p.push('nur ' + zähl(/class="vcard"/g) + ' Wortkarten');
  if (p.length) { fehler++; console.log('FEHLER ' + f + ': ' + p.join(' | ')); }
});
console.log(dateien.length + ' Dateien geprüft, ' + fehler + ' mit Problemen');
