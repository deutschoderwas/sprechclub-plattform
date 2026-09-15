/* ============================================================
   bau/render-pruef.js — jede Seite wirklich oeffnen

   Der Quelltext luegt: die meisten Lektionsseiten bauen ihren
   Inhalt erst beim Oeffnen auf. Wer nur liest, meldet Phantome
   (siehe Kopf von bau/pruef-seiten.js). Diese Pruefung oeffnet
   jede Seite im Browser und misst am fertigen Bild — so, wie die
   Schuelerin sie sieht.

   Gemessen wird je Seite:
     · sichtbarer Text, Ueberschriften, Abschnitte
     · Uebungsstellen, Eingabefelder, Knoepfe
     · Bilder: wie viele, welche laden nicht
     · Skriptfehler und fehlende Dateien beim Oeffnen
     · Desktop 1280px UND Handy 390px: laeuft die Seite
       seitlich aus dem Bild?

   Braucht Playwright und einen Chromium. Laeuft nicht auf jedem
   Rechner — deshalb steht es neben pruef-seiten.js, nicht darin.

   Aufruf:  VON=0 BIS=50 TEIL=1 node bau/render-pruef.js
            (ohne VON/BIS: alle Seiten aus lektionen-katalog.js)
   ============================================================ */
'use strict';
const path = require('path');
const fs = require('fs');
const W = path.join(__dirname, '..');

let chromium;
try { ({ chromium } = require('playwright')); }
catch (e) {
  console.log('Playwright fehlt. Auf diesem Rechner laeuft die Renderpruefung nicht.');
  console.log('Installieren:  npm i playwright   (und einmal  npx playwright install chromium)');
  process.exit(2);
}

global.window = {};
require(path.join(W, 'lektionen-katalog.js'));
const KATALOG = global.window.LEKTIONEN || [];

const TEIL = process.env.TEIL || '1';
const VON = parseInt(process.env.VON || '0', 10);
const BIS = parseInt(process.env.BIS || String(KATALOG.length), 10);
const CHROME = process.env.CHROME || undefined;

(async () => {
  const browser = await chromium.launch(CHROME ? { executablePath: CHROME } : {});
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const raus = [];
  const liste = KATALOG.slice(VON, BIS);

  for (const s of liste) {
    const r = { d: s.d, lvl: s.lvl, art: s.art };
    const voll = path.join(W, s.d);
    if (!fs.existsSync(voll)) { r.fehler = 'Datei fehlt'; raus.push(r); continue; }
    const p = await ctx.newPage();
    const konsole = [], fehlend = [];
    p.on('pageerror', e => konsole.push('JS: ' + String(e.message).slice(0, 140)));
    p.on('response', res => {
      if (res.status() >= 400 && /\.(jpg|jpeg|png|webp|gif|svg|mp3|mp4|css|js)(\?|$)/i.test(res.url()))
        fehlend.push(res.status() + ' ' + res.url().split('/').slice(-1)[0]);
    });
    try {
      await p.goto('file://' + voll, { waitUntil: 'load', timeout: 25000 });
      await p.waitForTimeout(700);
      /* Bilder mit loading="lazy" laden sonst nie und gelten faelschlich
         als kaputt — erst anstossen, dann messen. */
      await p.evaluate(async () => {
        document.querySelectorAll('img[loading="lazy"]').forEach(i => { i.loading = 'eager'; });
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise(r => setTimeout(r, 400));
        window.scrollTo(0, 0);
      });
      await p.waitForTimeout(500);
      Object.assign(r, await p.evaluate(() => {
        const t = (document.body.innerText || '').replace(/\s+/g, ' ').trim();
        const b = [...document.images];
        return {
          woerter: t ? t.split(' ').length : 0,
          ueberschriften: document.querySelectorAll('h1,h2,h3,h4').length,
          knoepfe: document.querySelectorAll('button,[role=button]').length,
          eingaben: document.querySelectorAll('input,select,textarea,[contenteditable=true]').length,
          uebungen: document.querySelectorAll('[data-quiz],[data-fillgap],[data-match],[data-flashcards],[data-speak],.quiz-q,.uebung,.ex,.task').length,
          bilder: b.length,
          bilderKaputt: b.filter(i => !i.complete || i.naturalWidth === 0).map(i => (i.getAttribute('src') || '').split('/').pop()).slice(0, 5),
          titel: document.title.trim(),
          breitDesktop: document.documentElement.scrollWidth > document.documentElement.clientWidth + 2
        };
      }));
      await p.setViewportSize({ width: 390, height: 844 });
      await p.waitForTimeout(350);
      r.breitHandy = await p.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
      r.konsole = konsole.slice(0, 4);
      r.fehlendeDateien = [...new Set(fehlend)].slice(0, 5);
    } catch (e) { r.fehler = String(e.message).slice(0, 140); }
    await p.close();
    raus.push(r);
    if (raus.length % 25 === 0) process.stderr.write(raus.length + '/' + liste.length + ' ');
  }
  await browser.close();

  const ziel = path.join(W, '_tmp', 'gerendert-' + TEIL + '.json');
  fs.mkdirSync(path.dirname(ziel), { recursive: true });
  fs.writeFileSync(ziel, JSON.stringify(raus, null, 1));

  let schwer = 0;
  raus.forEach(x => {
    const w = [];
    if (x.fehler) w.push('laedt nicht: ' + x.fehler);
    if (x.breitHandy) w.push('laeuft auf dem Handy seitlich aus dem Bild');
    if ((x.bilderKaputt || []).length) w.push((x.bilderKaputt.length) + ' Bild(er) laden nicht: ' + x.bilderKaputt.slice(0, 2).join(', '));
    (x.konsole || []).filter(k => k.startsWith('JS:')).forEach(k => w.push('Skriptfehler: ' + k.slice(4)));
    if (w.length) { schwer++; console.log('\n' + x.d); w.forEach(z => console.log('    ' + z)); }
  });
  console.log('\n' + raus.length + ' Seiten geoeffnet, ' + (raus.length - schwer) + ' ohne Beanstandung.');
  console.log('Einzelheiten: _tmp/gerendert-' + TEIL + '.json');
  process.exitCode = schwer ? 1 : 0;
})();
