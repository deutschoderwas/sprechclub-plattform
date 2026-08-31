/* Spielt jede neue Aufgabenform durch — einmal richtig geloest,
   und beim Satzbau zusaetzlich mit umgestelltem Mittelfeld, weil
   das der Fall ist, bei dem eine zweite richtige Loesung entsteht. */
const { chromium } = require('playwright');
const path = require('path');

const LOESUNG = {
  'die Erkältung': 'die',
  'Gewürz': 'Gewürz',
  'Teller': 'Teller',
  'Ich fahre mit meinem Auto': 'Ich fahre mit meinem Auto'
};

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-gpu', '--disable-background-networking',
           '--disable-sync', '--disable-component-update', '--no-first-run',
           '--disable-default-apps', '--no-default-browser-check']
  });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  page.setDefaultTimeout(3000);
  await page.route(/^https?:\/\//, r => r.abort());
  const fehler = [];
  page.on('pageerror', e => fehler.push('JS: ' + e.message));
  page.on('console', m => { if (m.type() === 'error' && !/ERR_FILE_NOT_FOUND/.test(m.text())) fehler.push('Konsole: ' + m.text()); });

  await page.goto('file://' + path.join(__dirname, 'probe-formen.html'));
  await page.waitForTimeout(300);
  await page.evaluate(() => window.ubStart('probe', 'formen'));
  await page.waitForTimeout(300);

  const bericht = [];

  for (let runde = 0; runde < 10; runde++) {
    const a = await page.evaluate(() => {
      const S = window.__ubProbe;
      const body = document.getElementById('ubBody');
      if (!body) return null;
      return {
        pool: document.querySelectorAll('#ubPool .ub-chip').length,
        opts: document.querySelectorAll('#ubOpts button').length,
        gap: !!document.getElementById('ubGap'),
        frage: (document.querySelector('#ubBody .ub-q') || {}).textContent || '',
        wort: (document.querySelector('#ubBody .ub-word') || {}).textContent || '',
        bed: (document.querySelector('#ubBody .ub-bed') || {}).textContent || '',
        tip: (document.querySelector('#ubBody .ub-tip') || {}).textContent || ''
      };
    });
    if (!a) break;

    let form, getan;

    if (a.pool > 0) {
      /* Karten sind <span class="ub-chip"> — der Text der Karte sagt,
         was sie ist. Wir bauen die Loesung Karte fuer Karte. */
      const karten = await page.$$eval('#ubPool .ub-chip', cs => cs.map(c => c.textContent));
      const einzelBuchstaben = karten.every(k => k.trim().length === 1);
      form = einzelBuchstaben ? 'buchstaben' : 'order';

      const erst = karten.map(k => k.trim());
      const istZweiter = erst.indexOf('Kinder') >= 0;
      const ziel = einzelBuchstaben ? 'Gewürz'.split('')
        : (istZweiter
            /* absichtlich die ANDERE richtige Reihenfolge: nicht vor vorne */
            ? 'Kinder unter zwölf dürfen nicht vorne sitzen'.split(' ')
            : 'Ich fahre mit meinem Auto'.split(' '));
      /* Beim Satzbau einmal absichtlich umstellen: mit meinem Auto fahre ich —
         nein, der Anfang muss bleiben. Stattdessen das Mittelfeld tauschen,
         wo es eines gibt. Hier gibt es keines, also die Sollreihenfolge. */
      for (const teil of ziel) {
        const ok = await page.evaluate(t => {
          const c = Array.from(document.querySelectorAll('#ubPool .ub-chip'))
            .find(x => x.textContent === t);
          if (!c) return false;
          c.click(); return true;
        }, teil);
        if (!ok) { getan = 'Karte „' + teil + '" nicht gefunden'; break; }
        await page.waitForTimeout(30);
      }
      if (!getan) getan = 'gebaut: ' + ziel.join(einzelBuchstaben ? '' : ' ');
    } else if (a.gap) {
      form = 'tippen';
      await page.fill('#ubGap', 'Teller');
      getan = 'eingetippt: Teller';
    } else if (a.opts > 0) {
      form = 'artikel';
      const opts = await page.$$eval('#ubOpts button', bs => bs.map(b => b.textContent.trim()));
      const i = opts.indexOf('die');
      await page.click('#ubOpts button >> nth=' + (i >= 0 ? i : 0));
      getan = 'gewählt: ' + opts[i >= 0 ? i : 0];
    } else {
      form = 'speak';
      getan = 'nachgesprochen';
    }

    await page.waitForTimeout(120);
    const vorPruefen = await page.evaluate(() => {
      const b = document.getElementById('ubBtn');
      return b ? { text: b.textContent, aus: b.disabled } : null;
    });
    if (vorPruefen && !vorPruefen.aus) await page.click('#ubBtn');
    await page.waitForTimeout(250);

    const rueck = await page.evaluate(() => {
      const fb = document.getElementById('ubFb');
      return fb ? { klasse: fb.className, text: fb.textContent.replace(/\s+/g, ' ').slice(0, 80) } : null;
    });

    bericht.push({
      runde: runde + 1, form,
      zusehen: (a.wort || a.frage).replace(/\s+/g, ' ').slice(0, 42),
      bedeutung: a.bed.slice(0, 34), hinweis: a.tip.slice(0, 40),
      knopf: vorPruefen ? (vorPruefen.text + (vorPruefen.aus ? ' AUS' : ' an')) : '—',
      getan,
      urteil: rueck ? rueck.klasse.replace('ub-fb', '').trim() + ' · ' + rueck.text : '—'
    });

    await page.screenshot({ path: 'schuss-' + (runde + 1) + '-' + form + '.png' });

    const weiter = await page.evaluate(() => {
      const b = document.getElementById('ubBtn');
      if (b && !b.disabled) { b.click(); return true; }
      return false;
    });
    await page.waitForTimeout(280);
    if (!weiter) break;
    const fertig = await page.evaluate(() => !document.getElementById('ubBtn'));
    if (fertig) break;
  }

  console.table(bericht);
  console.log('\nSeitenfehler: ' + (fehler.length ? '\n  ' + fehler.join('\n  ') : 'keine'));
  await browser.close();
})();
