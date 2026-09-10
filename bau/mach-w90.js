/* ============================================================
   mach-w90.js — echte Woerter fuer die 90 Sekunden

   In der Challenge steht gross „DEIN WORT" und darunter das, was
   man anderthalb Minuten lang beschreiben soll. Gemessen am
   10.09.: von 830 Eintraegen ueber alle Stunden waren 388 gar
   keine Woerter, sondern Situationen —

     „im Laden", „am Telefon", „am Schalter"
     „noch ein Kaffee?", „ein Anruf zur falschen Zeit"
     „die Kueche nach dem Kochen", „Kritik unter Freunden"

   Ueber eine Situation kann man reden, aber man lernt dabei kein
   Wort. Und wer „am Schalter" liest, weiss nicht, ob er das Wort
   benutzen oder die Lage beschreiben soll.

   Dieses Skript setzt an jede dieser Stellen ein echtes Wort mit
   Artikel — und zwar eines aus dem Wortschatz derselben Stunde,
   samt dem Bild, das dort schon dazugehoert. Erfunden wird nichts,
   nur umgehaengt.

   Die fuenf Hilfswoerter darunter bleiben, wo sie passen. Fuer
   die neuen Koepfe kommen sie aus dem Vorrat derselben Stunde:
   alle Hilfswoerter aller Eintraege zusammengelegt, ohne
   Dubletten, ohne das Wort selbst.

   Die guten Eintraege — 442 Woerter mit Artikel — bleiben
   unangetastet.

   Aufruf:  node bau/mach-w90.js [--schreiben]
   ============================================================ */
const fs = require('fs');
const path = require('path');
const ORDNER = path.join(__dirname, 'stunden');
const SCHREIBEN = process.argv.indexOf('--schreiben') >= 0;

/* Ein Wort ist: ein Nomen mit Artikel („die Reklamation"), oder ein
   einzelnes Wort ohne Artikel — ein Verb wie „buchstabieren", ein
   Adjektiv wie „zustaendig". Keine Woerter sind: „im Laden", „noch
   ein Kaffee?", „ein Missverstaendnis im Buero". Der erste Versuch
   verlangte den Artikel und hat damit 117 Verben mitverurteilt. */
const istWort = w => {
  const t = String(w || '').trim();
  if (!t || /[?!.,;]/.test(t)) return false;
  if (!/\s/.test(t)) return true;
  return /^(der|die|das|ein|eine)\s+[^\s]+$/.test(t);
};
const stamm = w => String(w || '').replace(/^(der|die|das)\s+/i, '').toLowerCase();

let stunden = 0, ersetzt = 0, blieb = 0, ohneVorrat = [];

fs.readdirSync(ORDNER).filter(f => f.endsWith('.json')).sort().forEach(datei => {
  const pfad = path.join(ORDNER, datei);
  const S = JSON.parse(fs.readFileSync(pfad, 'utf8'));
  const w90 = (S.daten && S.daten.w90) || [];
  if (!w90.length) return;
  stunden++;

  /* Der Vorrat an echten Woertern: der Wortschatz der Stunde. */
  const karten = ((S.wortschatz && S.wortschatz.karten) || []).map(k => ({
    wort: ((k.art ? k.art + ' ' : '') + String(k.wort || '')).trim(),
    bild: k.bild || ''
  })).filter(k => istWort(k.wort));

  /* Was schon als Kopf dasteht, wird nicht zweimal vergeben. */
  const vergeben = new Set(w90.filter(x => istWort(x.w)).map(x => stamm(x.w)));
  const frei = karten.filter(k => !vergeben.has(stamm(k.wort)));

  /* Alle Hilfswoerter der Stunde in einen Topf. */
  const topf = [];
  w90.forEach(x => (x.h || []).forEach(h => {
    if (h && topf.indexOf(h) < 0) topf.push(h);
  }));

  let n = 0;
  S.daten.w90 = w90.map(x => {
    if (istWort(x.w)) { blieb++; return x; }
    const k = frei.shift();
    if (!k) { ohneVorrat.push(datei + ': ' + x.w); blieb++; return x; }
    vergeben.add(stamm(k.wort));
    /* Hilfswoerter: die alten dieser Zeile zuerst, dann aus dem Topf
       auffuellen — nie das Wort selbst, nie doppelt. */
    const hilfe = [];
    (x.h || []).concat(topf).forEach(h => {
      if (hilfe.length >= 5) return;
      if (!h || hilfe.indexOf(h) >= 0) return;
      if (stamm(h) === stamm(k.wort)) return;
      hilfe.push(h);
    });
    ersetzt++; n++;
    return { w: k.wort, b: k.bild || x.b, h: hilfe };
  });

  if (n && SCHREIBEN) fs.writeFileSync(pfad, JSON.stringify(S, null, 2) + '\n', 'utf8');
});

console.log('Stunden geprüft:      ' + stunden);
console.log('Wörter ersetzt:       ' + ersetzt);
console.log('unverändert geblieben:' + blieb);
if (ohneVorrat.length) {
  console.log('\nKein freies Wort im Wortschatz übrig (' + ohneVorrat.length + '):');
  ohneVorrat.slice(0, 20).forEach(x => console.log('  ' + x));
}
console.log(SCHREIBEN ? '\ngeschrieben.' : '\n(Probelauf — mit --schreiben werden die Dateien geändert)');
