/* Geht ein B2-Thema von vorn bis hinten durch und schaut, ob jede
   Aufgabe erscheint, bedienbar ist und ein Urteil liefert. */
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args:['--no-sandbox','--disable-gpu','--disable-background-networking','--disable-sync','--no-first-run']
  });
  const page = await browser.newPage({ viewport:{width:390,height:844} });
  page.setDefaultTimeout(3000);
  await page.route(/^https?:\/\//, r => r.abort());
  const fehler=[];
  page.on('pageerror', e => fehler.push('JS: '+e.message));
  page.on('console', m => { if(m.type()==='error' && !/ERR_FILE_NOT_FOUND/.test(m.text())) fehler.push('Konsole: '+m.text()); });
  await page.goto('file://'+path.join(__dirname,'probe-b2.html'));
  await page.waitForTimeout(300);

  const themen = await page.evaluate(() => window.UEBUNGEN.skills[0].themes.map(t => t.id));
  console.log('Themen geladen: ' + themen.join(', '));

  await page.evaluate(() => window.ubStart('wortschatz','b2-verantwortung'));
  await page.waitForTimeout(300);

  const zeilen=[];
  for(let i=0;i<14;i++){
    const a = await page.evaluate(() => {
      const b=document.getElementById('ubBody'); if(!b) return null;
      const btn=document.getElementById('ubBtn');
      return { text:b.textContent.replace(/\s+/g,' ').trim().slice(0,60),
        opts:document.querySelectorAll('#ubOpts button').length,
        chips:document.querySelectorAll('#ubPool .ub-chip').length,
        gap:!!document.getElementById('ubGap'),
        sel:document.querySelectorAll('#ubBody select').length,
        fw:document.querySelectorAll('#ubFsatz .ub-fw').length,
        ta:!!document.getElementById('ubSchreib'),
        btn: btn ? btn.textContent+(btn.disabled?' AUS':'') : '—' };
    });
    if(!a) break;

    /* irgendeine gueltige Eingabe machen, damit Prüfen freigeschaltet wird */
    if(a.opts) await page.click('#ubOpts button >> nth=0');
    else if(a.chips) { for(let k=0;k<a.chips;k++){ await page.evaluate(()=>{const c=document.querySelector('#ubPool .ub-chip'); if(c)c.click();}); await page.waitForTimeout(20);} }
    else if(a.gap) await page.fill('#ubGap','test');
    else if(a.sel) await page.evaluate(()=>{document.querySelectorAll('#ubBody select').forEach(s=>{ s.selectedIndex=1; s.dispatchEvent(new Event('change')); });});
    else if(a.fw) await page.click('#ubFsatz .ub-fw >> nth=0');
    else if(a.ta) await page.fill('#ubSchreib','Ein Versuch.');
    await page.waitForTimeout(100);

    const nach = await page.evaluate(()=>{ const b=document.getElementById('ubBtn'); return b?{t:b.textContent,aus:b.disabled}:null; });
    if(nach && !nach.aus) await page.click('#ubBtn');
    await page.waitForTimeout(200);
    const fb = await page.evaluate(()=>{ const f=document.getElementById('ubFb'); return f?f.textContent.replace(/\s+/g,' ').slice(0,50):'—'; });

    zeilen.push({ nr:i+1, sicht:a.text, knopfVor:a.btn, knopfNach:nach?(nach.t+(nach.aus?' AUS':'')):'—', urteil:fb });
    const w = await page.evaluate(()=>{ const b=document.getElementById('ubBtn'); if(b&&!b.disabled){b.click();return true;} return false; });
    await page.waitForTimeout(250);
    if(!w) break;
    if(await page.evaluate(()=>!document.getElementById('ubBtn'))) break;
  }
  console.table(zeilen);
  console.log('\nSeitenfehler: '+(fehler.length? '\n  '+fehler.join('\n  ') : 'keine'));
  await browser.close();
})();
