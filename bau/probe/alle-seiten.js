/* ============================================================
   alle-seiten.js — jede Wortschatzboost-Seite in beiden Ansichten

   Julias Vorgabe: Was gebaut wird, muss auf dem Handy genauso
   sitzen wie am Rechner. Deshalb geht dieser Durchlauf jede Seite
   zweimal durch — 390 Pixel breit und 1280 Pixel breit — und
   prüft dabei:

     - Seitenfehler in der Konsole
     - waagerechtes Scrollen (dann ist etwas zu breit)
     - überlappende oder abgeschnittene Situationszeilen
     - beim Verdeck-Spiel: bleibt die Situation wirklich verborgen?
     - Kontrast: steht die Zeile sichtbar auf dem Kartengrund?

   Aufruf: node alle-seiten.js <ordner>
   ============================================================ */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ORDNER = process.argv[2] || '.';

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-gpu', '--disable-background-networking',
           '--disable-sync', '--no-first-run', '--disable-default-apps']
  });

  const seiten = fs.readdirSync(ORDNER)
    .filter(f => /^wortschatzboost-.*\.html$/.test(f)).sort();

  const zeilen = [];
  const klagen = [];

  for (const datei of seiten) {
    for (const [ansicht, breite, hoehe] of [['Handy', 390, 844], ['Desktop', 1280, 900]]) {
      const page = await browser.newPage({ viewport: { width: breite, height: hoehe } });
      const fehler = [];
      page.on('pageerror', e => fehler.push(e.message.slice(0, 60)));
      page.on('console', m => {
        /* ERR_FAILED kommt von den Schriften, die dieser Lauf selbst
           abklemmt — das ist kein Fehler der Seite. */
        if (m.type() === 'error' &&
            !/ERR_FILE_NOT_FOUND|favicon|ERR_FAILED|Failed to load resource/.test(m.text()))
          fehler.push(m.text().slice(0, 60));
      });
      /* Nichts aus dem Netz — auch keine Schriften. Der Container
         kommt nicht zuverlaessig an Google Fonts, und die Prueflaeufe
         blieben daran haengen. Ohne die Webschrift greift die
         Ersatzschrift, die meist etwas breiter laeuft: Ein Ueberlauf
         faellt damit eher auf, nicht weniger. */
      await page.route(/^https?:\/\//, r => r.abort());

      await page.goto('file://' + path.resolve(ORDNER, datei));
      await page.waitForTimeout(700);

      /* Auf den Reiter mit den Wörtern, falls es Reiter gibt. */
      const hatReiter = await page.$('.tab[data-tab="1"]');
      if (hatReiter) { await page.click('.tab[data-tab="1"]'); await page.waitForTimeout(400); }

      const befund = await page.evaluate(() => {
        const zeilen = Array.from(document.querySelectorAll('.wsit'));
        const raus = {
          anzahl: zeilen.length,
          querScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
          zuBreit: 0, unsichtbar: 0, ohneAbstand: 0, leer: 0
        };
        zeilen.forEach(z => {
          const k = z.getBoundingClientRect();
          const eltern = z.parentElement.getBoundingClientRect();
          if (k.right > eltern.right + 1 || k.left < eltern.left - 1) raus.zuBreit++;
          const stil = getComputedStyle(z);
          if (stil.visibility === 'hidden' || stil.display === 'none') raus.unsichtbar++;
          if (parseFloat(stil.marginTop) < 2) raus.ohneAbstand++;
          if (!z.textContent.trim()) raus.leer++;
        });
        return raus;
      });

      /* Verdeck-Spiel: bleibt die Situation verborgen? */
      let verdeckt = '—';
      const knopf = await page.$('#wHide');
      if (knopf) {
        await page.evaluate(() => window.scrollTo(0, 0));
        await knopf.click();
        await page.waitForTimeout(400);
        verdeckt = await page.evaluate(() => {
          const z = document.querySelector('.wgrid .wcard .wsit');
          return z ? getComputedStyle(z).opacity : 'keine';
        });
        if (verdeckt !== '0') klagen.push(datei + ' (' + ansicht + '): Situation bleibt sichtbar (opacity ' + verdeckt + ')');
        await knopf.click();
        await page.waitForTimeout(250);
      }

      if (fehler.length) klagen.push(datei + ' (' + ansicht + '): ' + fehler[0]);
      if (befund.querScroll) klagen.push(datei + ' (' + ansicht + '): Seite scrollt seitlich');
      if (befund.zuBreit) klagen.push(datei + ' (' + ansicht + '): ' + befund.zuBreit + ' Zeilen ragen aus der Karte');
      if (befund.unsichtbar) klagen.push(datei + ' (' + ansicht + '): ' + befund.unsichtbar + ' Zeilen unsichtbar');
      if (befund.leer) klagen.push(datei + ' (' + ansicht + '): ' + befund.leer + ' Zeilen ohne Text');

      zeilen.push({
        Seite: datei.replace('wortschatzboost-', '').replace('.html', ''),
        Ansicht: ansicht, Zeilen: befund.anzahl,
        quer: befund.querScroll ? 'JA' : '–',
        raus: befund.zuBreit || '–',
        verdeckt: verdeckt,
        Fehler: fehler.length || '–'
      });

      await page.close();
    }
  }

  console.table(zeilen);
  console.log('\n' + (klagen.length ? 'Zu klären:\n  ' + klagen.join('\n  ') : 'Alle Seiten sitzen — Handy und Desktop.'));
  await browser.close();
  process.exit(klagen.length ? 1 : 0);
})();
