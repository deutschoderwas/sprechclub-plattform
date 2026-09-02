/* ============================================================
   probe-runden.js — spielt ein Thema so lange, bis fast jede
   Aufgabe einmal auf dem Schirm war.

   Eine Runde zeigt nur 12 Aufgaben aus dem Thema, und wer falsch
   antwortet, ist nach fünf Herzen raus. Ein einzelner Durchlauf
   sieht also nur einen Bruchteil. Dieses Skript fährt viele Runden
   hintereinander und sammelt, was es gesehen hat.

   Gemeldet wird, was Lernende ausbremsen würde:
     - Aufgaben ohne Bedienelement (man kommt nicht weiter)
     - Aufgaben ohne Rückmeldung (man erfährt nicht, ob es stimmt)
     - Inhalt, der seitlich aus dem Bild läuft
     - Fehler, die die Seite selbst meldet

   Aufruf:  node bau/probe/probe-runden.js <bereich> <thema> [mobil|desktop] [runden]
   Beispiel: node bau/probe/probe-runden.js lesen-schreiben lesen-b2-zahlen mobil 12
   ============================================================ */
const { chromium } = require('playwright');
const path = require('path');
const SKILL = process.argv[2], THEMA = process.argv[3];
const BREIT = process.argv[4] === 'desktop';
const RUNDEN = Number(process.argv[5] || 12);

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args:['--no-sandbox','--disable-gpu','--disable-background-networking','--disable-sync','--no-first-run']
  });
  const page = await browser.newPage({ viewport: BREIT ? {width:1280,height:900} : {width:390,height:844} });
  page.setDefaultTimeout(4000);
  await page.route(/^https?:\/\//, r => r.abort());
  const fehler=[];
  page.on('pageerror', e => fehler.push('JS: '+e.message));
  page.on('console', m => { if(m.type()==='error' && !/ERR_FILE_NOT_FOUND|ERR_FAILED/.test(m.text())) fehler.push('Konsole: '+m.text()); });
  await page.goto('file://'+path.join(__dirname,'probe-voll.html'));
  await page.waitForTimeout(400);

  const anz = await page.evaluate(([s,t]) => {
    const sk = window.UEBUNGEN.skills.find(x=>x.id===s);
    const th = sk && sk.themes.find(x=>x.id===t);
    return th ? th.exercises.length : -1;
  }, [SKILL, THEMA]);
  if (anz < 0) { console.log('Thema nicht gefunden: '+SKILL+'/'+THEMA); await browser.close(); return; }

  const gesehen=new Set(), stumm=new Set(), ohneUrteil=new Set(), breit=new Set();
  let schritte=0;

  for(let r=0;r<RUNDEN;r++){
    await page.evaluate(([s,t]) => window.ubStart(s,t), [SKILL,THEMA]);
    await page.waitForTimeout(250);
    for(let i=0;i<16;i++){
      const a = await page.evaluate(() => {
        const b=document.getElementById('ubBody'); if(!b) return null;
        const btn=document.getElementById('ubBtn');
        return { text:b.textContent.replace(/\s+/g,' ').trim().slice(0,70),
          opts:document.querySelectorAll('#ubOpts button').length,
          chips:document.querySelectorAll('#ubPool .ub-chip').length,
          gap:!!document.getElementById('ubGap'),
          sel:document.querySelectorAll('#ubBody select').length,
          fw:document.querySelectorAll('#ubFsatz .ub-fw').length,
          ta:!!document.getElementById('ubSchreib'),
          mic:!!document.getElementById('ubMic'),
          breit: b.scrollWidth > document.documentElement.clientWidth + 2,
          btn: btn ? btn.disabled : null };
      });
      if(!a) break;
      schritte++;
      gesehen.add(a.text);
      if(a.breit) breit.add(a.text);
      const bedienbar = a.opts||a.chips||a.gap||a.sel||a.fw||a.ta||a.mic||a.btn===false;
      if(!bedienbar) stumm.add(a.text);

      if(a.opts) await page.click('#ubOpts button >> nth=0');
      else if(a.chips) { for(let k=0;k<a.chips;k++){ await page.evaluate(()=>{const c=document.querySelector('#ubPool .ub-chip'); if(c)c.click();}); await page.waitForTimeout(12);} }
      else if(a.gap) await page.fill('#ubGap','test');
      else if(a.sel) await page.evaluate(()=>{document.querySelectorAll('#ubBody select').forEach(s=>{ s.selectedIndex=1; s.dispatchEvent(new Event('change')); });});
      else if(a.fw) await page.click('#ubFsatz .ub-fw >> nth=0');
      else if(a.ta) await page.fill('#ubSchreib','Ein Versuch mit ein paar Wörtern darin.');
      await page.waitForTimeout(60);

      const konnte = await page.evaluate(()=>{ const b=document.getElementById('ubBtn'); if(b&&!b.disabled){b.click();return true;} return false; });
      await page.waitForTimeout(140);
      const fb = await page.evaluate(()=>{ const f=document.getElementById('ubFb'); return f?f.textContent.replace(/\s+/g,' ').trim():''; });
      if(konnte && !fb) ohneUrteil.add(a.text);

      const w = await page.evaluate(()=>{ const b=document.getElementById('ubBtn'); if(b&&!b.disabled){b.click();return true;} return false; });
      await page.waitForTimeout(160);
      if(!w) break;
      if(await page.evaluate(()=>!document.getElementById('ubBtn'))) break;
    }
    await page.evaluate(()=>{ const x=document.getElementById('ubClose'); if(x)x.click(); });
    await page.waitForTimeout(120);
  }

  const zeig = (name, menge) => console.log('  '+name+': ' + (menge.size ? '\n    '+[...menge].join('\n    ') : 'keine'));
  console.log('\n'+SKILL+'/'+THEMA+'  '+(BREIT?'DESKTOP':'MOBIL')+'  — '+anz+' Aufgaben im Thema, '+gesehen.size+' verschiedene gesehen ('+schritte+' Schritte)');
  zeig('ohne Bedienelement', stumm);
  zeig('ohne Rückmeldung', ohneUrteil);
  zeig('zu breit', breit);
  console.log('  Seitenfehler: '+(fehler.length? '\n    '+[...new Set(fehler)].join('\n    ') : 'keine'));
  await browser.close();
})();
