/* Hängt lektion-konto.js in jede Lektionsseite des Katalogs ein.
   Wiederholbar: was den Verweis schon hat, wird übersprungen. */
const fs = require('fs'), path = require('path');
global.window = {};
eval(fs.readFileSync('lektionen-katalog.js', 'utf8'));
const L = window.LEKTIONEN;

let neu = 0, schon = 0, kein = 0;
L.forEach(x => {
  const p = x.d;
  let t = fs.readFileSync(p, 'utf8');
  if (t.includes('lektion-konto.js')) { schon++; return; }
  const tiefe = (path.dirname(p) === '.') ? 0 : path.dirname(p).split('/').length;
  const pre = tiefe ? '../'.repeat(tiefe) : '';
  const tag = `<script src="${pre}lektion-konto.js?v=1"></script>\n`;
  if (t.includes('</body>')) {
    t = t.replace(/<\/body>(?![\s\S]*<\/body>)/, tag + '</body>');
  } else {
    t = t + '\n' + tag;
    kein++;
  }
  fs.writeFileSync(p, t);
  neu++;
});
console.log('eingebaut:', neu, '| war schon drin:', schon, '| ohne </body>:', kein);
