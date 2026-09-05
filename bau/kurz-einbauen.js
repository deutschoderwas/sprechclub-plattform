/* ============================================================
   kurz-einbauen.js — traegt die Kurzerklaerungen in die Stunden-JSON.

   Aufruf:  node kurz-einbauen.js

   Warum getrennt: Der Tipp auf der Wortschatzkarte erklaert, wie man
   das Wort BENUTZT ("Plural ohne Endung"). Beim Vorlernen braucht man
   aber, was es BEDEUTET. Beides in einer Datei zu pflegen waere
   unuebersichtlich, deshalb stehen die Erklaerungen in
   kurzerklaerungen.json und wandern von hier aus ins Feld "kurz".

   Das Skript meldet jede Karte ohne Erklaerung und jede Erklaerung
   ohne Karte — so faellt auf, wenn eine Stunde sich geaendert hat.
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const hier = __dirname + '/';
const alle = JSON.parse(fs.readFileSync(hier + 'kurzerklaerungen.json', 'utf8'));
let gesetzt = 0, fehlt = 0, uebrig = 0;

Object.keys(alle).filter(k => k !== '_').forEach(datei => {
  const pfad = path.join(hier, 'stunden', datei);
  if (!fs.existsSync(pfad)) { console.error('  · Stunde fehlt: ' + datei); fehlt++; return; }
  const S = JSON.parse(fs.readFileSync(pfad, 'utf8'));
  const tabelle = Object.assign({}, alle[datei]);
  (S.wortschatz.karten || []).forEach(k => {
    /* Der Artikel steht in einem eigenen Feld, in der Tabelle aber
       vor dem Wort — beide Schreibweisen zulassen. */
    const mitArtikel = k.art ? k.art + ' ' + k.wort : null;
    const treffer = [mitArtikel, k.wort].find(
      n => n && Object.prototype.hasOwnProperty.call(tabelle, n));
    if (treffer) {
      k.kurz = tabelle[treffer];
      delete tabelle[treffer];
      gesetzt++;
    } else {
      console.error('  · ' + datei + ': keine Erklärung für „' + k.wort + '“');
      fehlt++;
    }
  });
  Object.keys(tabelle).forEach(w => {
    console.error('  · ' + datei + ': Erklärung für „' + w + '“ passt auf keine Karte');
    uebrig++;
  });
  fs.writeFileSync(pfad, JSON.stringify(S, null, 2) + '\n');
});

console.log('Kurzerklärungen gesetzt: ' + gesetzt +
  (fehlt ? ', fehlend: ' + fehlt : '') + (uebrig ? ', überzählig: ' + uebrig : ''));
if (fehlt || uebrig) process.exit(1);
