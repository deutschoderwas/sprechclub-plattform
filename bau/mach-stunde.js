/* ============================================================
   mach-stunde.js — baut aus einer JSON-Beschreibung eine
   fertige Sprechclub-Stunde im Design von maengel-melden-b1.html.

   Aufruf:  node mach-stunde.js stunden/telefonieren-a2.json

   Warum ein Generator: es kommen 8 Einzelstunden und 96
   Praesentationen. Von Hand gebaut waeren sie nach der dritten
   Datei unterschiedlich — hier steckt der Aufbau an einer Stelle.

   Die Bausteine daneben:
     stunde-style1.css  Design der Maengel-Seite, unveraendert
     stunde-style2.css  Zusatz: Umschalter, Markierungen, Hilfe, Haken
     motor.js      das Verhalten, fuer alle Stunden gleich
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const quelle = process.argv[2];
if (!quelle) { console.error('Aufruf: node mach-stunde.js <datei.json>'); process.exit(1); }

/* mach-stunde.js liegt in bau/, geschrieben wird in den Stammordner —
   genauso wie die anderen Generatoren im Projekt. */
const hier   = __dirname + '/';
const wurzel = path.resolve(__dirname, '..');
const S = JSON.parse(fs.readFileSync(quelle, 'utf8'));

/* ---------- kleine Helfer ---------- */
const esc = t => String(t == null ? '' : t)
  .replace(/&(?![a-zA-Z#0-9]+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/* h() laesst Auszeichnung wie <b> stehen, escapt aber ein nacktes & */
const h = t => String(t == null ? '' : t).replace(/&(?![a-zA-Z#0-9]+;)/g, '&amp;');
const attr = t => String(t == null ? '' : t).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
/* Fuer data-say: Auszeichnung raus, damit die Stimme keine Tags vorliest */
const nurText = t => String(t || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const fehler = [];
const bilder = new Set();
function bild(p) { if (p) bilder.add(p); return p; }

/* ---------- Bausteine ---------- */
function tipp(t) {
  if (!t) return '';
  const art = t.art === 'teal' ? ' teal' : '';
  return `<div class="tip${art}">${h(t.text)}</div>\n`;
}
function fragenListe(f, klasse) {
  if (!f || !f.length) return '';
  const k = klasse ? ' ' + klasse : '';
  return `<ul class="qlist${k}">\n` + f.map(x => `<li>${h(x)}</li>`).join('\n') + `\n</ul>\n`;
}
function kopfzeile(h2, hl, ssub) {
  let s = `<h2 class="st">${h(h2)}${hl ? ' <span class="hl">' + h(hl) + '</span>' : ''}</h2>\n`;
  if (ssub) s += `<p class="ssub">${h(ssub)}</p>\n`;
  return s;
}
function sprechKnopf(text) {
  const t = nurText(text);
  return t ? `<button class="speak" data-say="${attr(t)}">🔊 hören</button>` : '';
}

/* ---------- 0 Einstieg ---------- */
function einstieg(sz) {
  let s = `<section class="section" id="einstieg">\n`;
  sz.forEach(x => {
    s += kopfzeile(x.h2, x.hl, x.ssub);
    if (x.bild) s += `<div class="scene-wrap klein"><img src="${attr(bild(x.bild))}" alt="${attr(x.alt)}"></div>\n`;
    if (x.fragen) s += fragenListe(x.fragen);
    if (x.fragenA2) s += fragenListe(x.fragenA2, 'nur-a2');
    if (x.fragenB1) s += fragenListe(x.fragenB1, 'nur-b1');
    s += tipp(x.tipp);
  });
  return s + `</section>\n`;
}

/* ---------- 1 Wortschatz ---------- */
function wortschatz(w) {
  let s = `<section class="section" id="wortschatz">\n` + kopfzeile(w.h2, w.hl, w.ssub);
  s += `<div style="text-align:center;margin:.4rem 0"><button class="btn ghost" id="verdecken">🙈 Wörter verdecken</button></div>\n<div class="bgrid" id="bgrid">\n`;
  w.karten.forEach((k, i) => {
    if (!k.bild && !k.emoji) fehler.push('Wortschatzkarte ' + (i + 1) + ' (' + k.wort + ') hat weder Bild noch Emoji');
    const kopf = k.bild
      ? `<img src="${attr(bild(k.bild))}" alt="${attr(k.alt || k.wort)}" loading="lazy">`
      : `<div class="bem" role="img" aria-label="${attr(k.wort)}">${h(k.emoji)}</div>`;
    const art = k.art ? `<span class="art">${h(k.art)}</span> ` : '';
    s += `<div class="bcard">${kopf}<div class="bb">` +
         `<div class="bw">${art}${h(k.wort)}</div>` +
         `<div class="bex">„${h(k.bsp)}“</div>` +
         `<div class="bti">💡 ${h(k.tipp)}</div>` +
         sprechKnopf(k.say || k.bsp) + `</div></div>\n`;
  });
  s += `</div>\n` + tipp(w.spiel) + `</section>\n`;
  return s;
}

/* ---------- 2 Konzepte (Ja/Nein-Karten und Dreier) ---------- */
function konzepte(k) {
  if (!k) return '';
  let s = `<section class="section" id="konzepte">\n` + kopfzeile(k.h2, k.hl, k.ssub);
  (k.paare || []).forEach(p => {
    s += `<div class="gpaar">\n` +
      `<div class="gk ja"><div class="gkl">✅ ${h(p.jaLabel || 'Richtig')}</div><div class="gsatz">${h(p.ja)}</div>` +
      (p.jaWarum ? `<div class="bsp"><span class="wer">${h(p.jaWarumLabel || 'Merksatz')}</span>${h(p.jaWarum)}</div>` : '') + `</div>\n` +
      `<div class="gk no"><div class="gkl">❌ ${h(p.noLabel || 'So nicht')}</div><div class="gsatz">${h(p.no)}</div>` +
      (p.noWarum ? `<div class="bsp"><span class="wer">${h(p.noWarumLabel || 'Warum')}</span>${h(p.noWarum)}</div>` : '') + `</div>\n</div>\n`;
  });
  if (k.dreier && k.dreier.length) {
    const toene = ['gelb', 'blau', 'ja'];
    s += `<div class="gdrei">\n`;
    k.dreier.forEach((d, i) => {
      s += `<div class="gk ${toene[i % 3]}"><span class="gem2">${h(d.emoji)}</span>` +
           `<div class="gmw">${h(d.wort)}</div><div class="gmb">${h(d.was)}</div>` +
           `<div class="gmx">${h(d.bsp)}</div></div>\n`;
    });
    s += `</div>\n`;
  }
  s += hilfe(k.hilfe) + tipp(k.tipp) + `</section>\n`;
  return s;
}

/* ---------- 3 Saetze ---------- */
function saetze(s3) {
  let s = `<section class="section" id="saetze">\n` + kopfzeile(s3.h2, s3.hl, s3.ssub);
  [['a2', 'nur-a2'], ['b1', 'nur-b1']].forEach(([stufe, klasse]) => {
    const gruppen = s3[stufe];
    if (!gruppen) return;
    s += `<div class="${klasse}">\n`;
    gruppen.forEach(g => {
      s += `<div class="rmcard"><b>${h(g.titel)}</b><br>\n` +
        g.chips.map(c => `<span class="rm">${h(c)}</span>`).join('') + '\n' +
        `<div class="bsp"><span class="wer">So klingt es</span>${h(g.bsp)}</div>\n` +
        sprechKnopf(g.say || g.bsp) + `</div>\n`;
    });
    s += `</div>\n`;
  });
  s += `<div class="legende">\n` +
    `<span><i class="i-verb"></i> Verb</span>\n` +
    `<span><i class="i-akk"></i> ${h(s3.akkLabel || 'das, was du bekommst')}</span>\n` +
    `<span><i class="i-menge"></i> ${h(s3.mengeLabel || 'Menge')}</span>\n` +
    `<span><i class="i-hoefl"></i> Höflichkeit</span>\n</div>\n`;
  s += tipp(s3.tipp) + `</section>\n`;
  return s;
}

/* ---------- 4 Dialoge ---------- */
function dialoge(d) {
  let s = `<section class="section" id="dialoge">\n` + kopfzeile(d.h2, d.hl, d.ssub);
  d.liste.forEach((dl, n) => {
    const vorlesen = dl.zeilen.map(z => nurText(z.text)).join(' ');
    s += `<div class="dwrap" data-runde="1"><div class="dhead">` +
      (dl.bild ? `<img src="${attr(bild(dl.bild))}" alt="${attr(dl.alt || dl.titel)}">` : '') +
      `<h4>Dialog ${n + 1} · „${h(dl.titel)}“</h4>` +
      `<button class="rbtn">▶︎ Runde 2 · du antwortest</button></div>` +
      `<div class="dsit">${h(dl.situation)}</div>\n`;
    dl.zeilen.forEach(z => {
      const wer = z.wer === 'b' ? 'b' : 'a';
      if (wer === 'b' && !z.cue) fehler.push('Dialog ' + (n + 1) + ': eine B-Zeile ohne Regieanweisung — in Runde 2 steht die Person dann ohne Hilfe da');
      s += `<div class="dline ${wer}"><div class="dwho ${wer}">${wer.toUpperCase()}</div>` +
        `<div class="dtxt">${h(z.text)}</div>` +
        (z.cue ? `<div class="dcue">🗣️ ${h(z.cue)}<span class="kl">tippen = Hilfe zeigen</span></div>` : '') +
        (z.bild ? `<img class="dbild" src="${attr(bild(z.bild))}" alt="" loading="lazy">` : '') +
        `</div>\n`;
    });
    s += `<button class="speak dbtn" data-say="${attr(vorlesen)}">🔊 Dialog vorlesen lassen</button></div>\n\n`;
  });
  s += tipp(d.tipp) + `</section>\n`;
  return s;
}

/* ---------- 5 Grammatik ---------- */
function grammatik(g) {
  if (!g) return '';
  let s = `<section class="section" id="grammatik">\n` + kopfzeile(g.h2, g.hl, g.ssub);
  if (g.intro) s += `<div class="gintro">${h(g.intro)}</div>\n`;
  if (g.kette && g.kette.length) {
    s += `<div class="gkette">\n`;
    g.kette.forEach((k, i) => {
      if (i) s += `<div class="gpfeil">▾</div>\n`;
      s += `<div class="gstep${i ? ' c' + (i + 1) : ''}"><span class="gem">${h(k.emoji)}</span>` +
           `<span class="gw">${h(k.rolle)}</span><span class="gs">${h(k.bsp)}</span></div>\n`;
    });
    s += `</div>\n`;
  }
  if (g.felder && g.felder.length) {
    s += `<div class="gpos">\n` + g.felder.map((f, i) =>
      `<div class="gz${f.hervor ? ' zwei' : ''}"><b>${h(f.rolle)}</b><span>${h(f.wort)}</span></div>`).join('\n') + `\n</div>\n`;
  }
  (g.bloecke || []).forEach(b => {
    s += kopfzeile(b.h2, b.hl, b.ssub);
    (b.paare || []).forEach(p => {
      s += `<div class="gpaar">\n` +
        `<div class="gk ja"><div class="gkl">✅ ${h(p.jaLabel || 'Richtig')}</div><div class="gsatz">${h(p.ja)}</div>` +
        (p.jaWarum ? `<div class="bsp"><span class="wer">Warum</span>${h(p.jaWarum)}</div>` : '') + `</div>\n` +
        `<div class="gk no"><div class="gkl">❌ ${h(p.noLabel || 'Falsch')}</div><div class="gsatz">${h(p.no)}</div>` +
        (p.noWarum ? `<div class="bsp"><span class="wer">Merken</span>${h(p.noWarum)}</div>` : '') + `</div>\n</div>\n`;
    });
    if (b.dreier && b.dreier.length) {
      const toene = ['blau', 'gelb', 'ja'];
      s += `<div class="gdrei">\n` + b.dreier.map((d, i) =>
        `<div class="gk ${toene[i % 3]}"><span class="gem2">${h(d.emoji)}</span>` +
        `<div class="gmw">${h(d.wort)}</div><div class="gmb">${h(d.was)}</div>` +
        `<div class="gmx">${h(d.bsp)}</div></div>`).join('\n') + `\n</div>\n`;
    }
    if (b.chips && b.chips.length) {
      s += `<div class="gchips">\n` + b.chips.map(c => `<span class="gchip">${h(c)}</span>`).join('') + `\n</div>\n`;
    }
  });
  if (S.daten && S.daten.gbau && S.daten.gbau.length) {
    s += kopfzeile(g.bauH2 || '🧱 Bau die Sätze selbst', null, g.bauSsub || 'Tippe die Teile in der richtigen Reihenfolge an. Danach auf „prüfen“.');
    s += `<div id="gbau"></div>\n`;
  }
  if (S.daten && S.daten.gstory) {
    s += kopfzeile(g.storyH2 || '📖 Und jetzt im Zusammenhang', null, g.storySsub || 'Wähle in jeder Lücke das passende Wort.');
    s += `<div class="gstory" id="gstory"></div>\n`;
  }
  s += hilfe(g.hilfe) + `</section>\n`;
  return s;
}

/* ---------- 6 Rollenspiele + Sprechkarten ---------- */
function rollenspiele(r) {
  let s = `<section class="section" id="rollenspiele">\n` + kopfzeile(r.h2, r.hl, r.ssub);
  r.liste.forEach((x, i) => {
    s += `<div class="rmcard">\n<b>${i + 1} · ${h(x.titel)}</b>\n` +
      `<p style="margin:.4rem 0;font-size:.95rem;color:var(--ink-soft);">${h(x.situation)}</p>\n` +
      (x.a2 ? `<div class="nur-a2">` + x.a2.map(c => `<span class="rm">${h(c)}</span>`).join('') + `</div>\n` : '') +
      (x.b1 ? `<div class="nur-b1">` + x.b1.map(c => `<span class="rm">${h(c)}</span>`).join('') + `</div>\n` : '') +
      `<div class="bsp"><span class="wer">✅ Eine gute Runde enthält</span>${h(x.gut)}</div>\n</div>\n`;
  });
  if (S.daten && S.daten.sk && S.daten.sk.length) {
    s += kopfzeile('🎴 Sprechkarten', null, 'Zieh eine Karte und sprich mindestens vier Sätze am Stück.');
    s += `<div class="card90">\n<div class="lbl">Deine Aufgabe</div>\n` +
      `<div class="word" id="wsk" style="font-size:1.25rem;line-height:1.4;">Tippe auf den Knopf.</div>\n` +
      `<button class="btn" id="sknew">🎴 Karte ziehen</button>\n</div>\n`;
  }
  return s + `</section>\n`;
}

/* ---------- 7 Neunzig Sekunden ---------- */
function challenge(c) {
  const erste = (S.daten.w90 && S.daten.w90[0]) || {};
  if (erste.b) bild(erste.b);
  (S.daten.w90 || []).forEach(x => bild(x.b));
  return `<section class="section" id="challenge">\n` +
    kopfzeile('⏱️ Die 90-Sekunden-Challenge', null, c && c.ssub || 'Ein Wort, anderthalb Minuten, freies Sprechen. Es muss nicht perfekt sein — es muss weitergehen.') +
    `<div class="card90">\n<div class="lbl">Dein Wort</div>\n` +
    `<img id="i90" src="${attr(erste.b || '')}" alt="${attr(erste.w || '')}">\n` +
    `<div class="word" id="w90">${h(erste.w || '')}</div>\n` +
    `<div class="helpwords" id="hw90"></div>\n<div class="timer" id="t90">1:30</div>\n<div>\n` +
    `<button class="btn ghost" id="new90">🎲 Neues Wort</button>\n` +
    `<button class="btn" id="start90">▶︎ Start</button>\n</div>\n</div>\n` +
    hilfe(c && c.hilfe) + tipp(c && c.tipp) + `</section>\n`;
}

/* ---------- 8 Ueben ---------- */
function ueben(u) {
  let s = `<section class="section" id="ueben">\n`;
  if (S.daten.quiz && S.daten.quiz.length) {
    s += kopfzeile('✅ Sitzt es schon?', null, S.daten.quiz.length + ' Fragen. Tippe auf deine Antwort — die Erklärung kommt sofort.');
    s += `<div id="quiz"></div>\n`;
  }
  if (S.daten.gap && S.daten.gap.length) {
    s += kopfzeile('✍️ Lückentext', null, 'Wähle in jeder Lücke das passende Wort.');
    s += `<div class="gap" id="gap"></div>\n`;
  }
  return s + tipp(u && u.tipp) + `</section>\n`;
}

/* ---------- 9 Hausaufgabe ---------- */
function hausaufgabe(ha) {
  let s = `<section class="section" id="hausaufgabe">\n` + kopfzeile(ha.h2 || '📮 Deine Hausaufgabe', ha.hl, ha.ssub);
  s += tipp(ha.warum);
  [['a2', 'nur-a2'], ['b1', 'nur-b1']].forEach(([stufe, klasse]) => {
    const liste = ha[stufe];
    if (!liste) return;
    s += `<div class="hagrid ${klasse}">\n`;
    liste.forEach((x, i) => {
      s += `<button type="button" class="ha" data-ha><span class="box">✓</span><span class="hi">${h(x.emoji)}</span><span class="htxt">\n` +
        `<h4>${i + 1}. ${h(x.titel)} <span class="zeit">${h(x.zeit)}</span></h4>\n` +
        `<p>${h(x.text)}</p></span></button>\n`;
    });
    s += `</div>\n`;
  });
  s += `<p class="hastand" data-ha-stand>0 von 0 Aufgaben geschafft.</p>\n`;
  if (ha.hilfeA2) s += hilfe(ha.hilfeA2, 'nur-a2');
  if (ha.hilfeB1) s += hilfe(ha.hilfeB1, 'nur-b1');
  s += tipp(ha.abgabe) + tipp(ha.ausblick) + `</section>\n`;
  return s;
}

/* ---------- Hilfe-Knopf ---------- */
function hilfe(hf, klasse) {
  if (!hf) return '';
  const k = klasse ? ' ' + klasse : '';
  let inn = '';
  if (hf.vor) inn += `<p>${h(hf.vor)}</p>\n`;
  if (hf.punkte && hf.punkte.length) inn += `<ul>\n` + hf.punkte.map(p => `<li>${h(p)}</li>`).join('\n') + `\n</ul>\n`;
  if (hf.nach) inn += `<p style="margin-top:.5rem;">${h(hf.nach)}</p>\n`;
  return `<div class="hilfe${k}">\n<button type="button">${h(hf.knopf)}</button>\n<div class="inhalt">\n${inn}</div>\n</div>\n`;
}

/* ---------- Zusammenbau ---------- */
const abschnitte = [];
function nimm(id, name, html) { if (html) abschnitte.push({ id, name, html }); }

nimm('einstieg',     '🖼️ Einstieg',      einstieg(S.einstieg));
nimm('wortschatz',   '🔤 Wortschatz',    wortschatz(S.wortschatz));
nimm('konzepte',     S.konzepte && S.konzepte.tab || '⚖️ Unterschiede', S.konzepte ? konzepte(S.konzepte) : '');
nimm('saetze',       '💬 Sätze',         S.saetze ? saetze(S.saetze) : '');
nimm('dialoge',      '🎬 Dialoge',       S.dialoge ? dialoge(S.dialoge) : '');
nimm('grammatik',    '🧩 Grammatik',     S.grammatik ? grammatik(S.grammatik) : '');
nimm('rollenspiele', '🎭 Rollenspiele',  S.rollenspiele ? rollenspiele(S.rollenspiele) : '');
nimm('challenge',    '⏱️ 90 Sekunden',   (S.daten.w90 && S.daten.w90.length) ? challenge(S.challenge) : '');
nimm('ueben',        '✅ Üben',          ((S.daten.quiz && S.daten.quiz.length) || (S.daten.gap && S.daten.gap.length)) ? ueben(S.ueben) : '');
nimm('hausaufgabe',  '📮 Hausaufgabe',   S.hausaufgabe ? hausaufgabe(S.hausaufgabe) : '');

/* erster Abschnitt ist beim Laden markiert */
const nav = `<nav class="tabs">\n` + abschnitte.map((a, i) =>
  `<a class="tab${i ? '' : ' active'}" href="#${a.id}">${a.name}</a>`).join('\n') + `\n</nav>\n`;

const umschalter = S.niveau ? `<div class="niv">
  <span class="lab">Dein Niveau</span>
  <div class="nivk" role="group" aria-label="Niveau wählen">
    <button type="button" data-niv="a2" aria-pressed="true">${h(S.niveau.a)}</button>
    <button type="button" data-niv="b1" aria-pressed="false">${h(S.niveau.b)}</button>
  </div>
  <span class="wie">${h(S.niveau.hinweis || 'Gleiches Thema, andere Sätze. Wechsle jederzeit — probier ruhig beides.')}</span>
</div>\n` : '';

const datenBloecke = Object.keys(S.daten || {}).filter(k => S.daten[k] && (!Array.isArray(S.daten[k]) || S.daten[k].length))
  .map(k => `<script type="application/json" id="daten-${k}">\n${JSON.stringify(S.daten[k])}\n</script>`).join('\n');

const html = `<!DOCTYPE html><html lang="de"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${esc(S.titel)}${S.hl ? ' ' + esc(S.hl) : ''} · Sprechclub ${esc(S.stufe)} | deutschoderwas</title>
<!--
  deutschoderwas · Sprechclub · ${esc(S.termin || '')}
  ${esc(S.titel)} ${esc(S.hl || '')} — ${esc(S.untertitel || '')}
  Erzeugt von bau/mach-stunde.js aus ${path.basename(quelle)}. Nicht von Hand aendern.
  Aufbau und Design wie maengel-melden-b1.html.
-->
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
${fs.readFileSync(hier + 'stunde-style1.css', 'utf8')}
</style>
<style>
${fs.readFileSync(hier + 'stunde-style2.css', 'utf8')}
</style>
</head>
<body${S.niveau ? ' data-niveau="a2"' : ''}><div class="wrapper">

<div class="eyebrow">${h(S.eyebrow)}</div>
<h1 class="title">${h(S.titel)}${S.hl ? ' <span class="hl">' + h(S.hl) + '</span>' : ''}</h1>

<p class="subtitle">${h(S.untertitel)}</p>

${umschalter}
${nav}
${abschnitte.map(a => a.html).join('\n')}
<footer>
<strong>deutschoderwas Sprechclub</strong> · ${h(S.fuss)}
</footer>

</div>

${datenBloecke}

<script>
${fs.readFileSync(hier + 'stunde-motor.js', 'utf8')}
</script>
</body>
</html>
`;

/* ---------- Kontrollen, bevor etwas geschrieben wird ---------- */
bilder.forEach(p => {
  if (!fs.existsSync(path.join(wurzel, p))) fehler.push('Bild fehlt: ' + p);
});
if (S.niveau) {
  ['nur-a2', 'nur-b1'].forEach(k => {
    if (html.indexOf('class="' + k) < 0 && html.indexOf(' ' + k + '"') < 0)
      fehler.push('Der Umschalter ist an, aber es gibt keinen Inhalt mit ' + k);
  });
}
const gerade = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '')
  .replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, ' ');
const auf = (gerade.match(/„/g) || []).length, zu = (gerade.match(/“/g) || []).length;
if (auf !== zu) fehler.push('Anführungszeichen: ' + auf + " mal „ , aber " + zu + ' mal “');
(S.daten.quiz || []).forEach((q, i) => {
  if (typeof q.c !== 'number' || !q.o[q.c]) fehler.push('Quizfrage ' + (i + 1) + ': die richtige Antwort zeigt ins Leere');
  if (new Set(q.o).size !== q.o.length) fehler.push('Quizfrage ' + (i + 1) + ': eine Antwort steht doppelt');
});
(S.daten.gap || []).forEach((g, i) => {
  if (g.o.indexOf(g.a) < 0) fehler.push('Lücke ' + (i + 1) + ': die Lösung "' + g.a + '" steht nicht unter den Optionen');
  if ((g.t.match(/___/g) || []).length !== 1) fehler.push('Lücke ' + (i + 1) + ': der Satz braucht genau ein ___');
});
(S.daten.gbau || []).forEach((b, i) => {
  if ([...b.t].sort().join('|') !== [...b.l].sort().join('|'))
    fehler.push('Satzbauer ' + (i + 1) + ': Bausteine und Lösung passen nicht zusammen');
});
if (S.daten.gstory) {
  const n = (S.daten.gstory.t.match(/___/g) || []).length;
  if (n !== S.daten.gstory.a.length)
    fehler.push('Lückengeschichte: ' + n + ' Lücken, aber ' + S.daten.gstory.a.length + ' Lösungen');
  S.daten.gstory.a.forEach((l, i) => {
    l.forEach(x => { if (S.daten.gstory.o.indexOf(x) < 0) fehler.push('Lückengeschichte, Lücke ' + (i + 1) + ': "' + x + '" fehlt in der Auswahl'); });
  });
}

if (fehler.length) {
  console.error('Nicht geschrieben — erst das hier:');
  fehler.forEach(f => console.error('  · ' + f));
  process.exit(1);
}

const ziel = path.join(wurzel, S.datei);
fs.writeFileSync(ziel, html);
console.log('geschrieben: ' + S.datei + '  (' + html.length + ' Zeichen, ' +
  abschnitte.length + ' Abschnitte, ' + bilder.size + ' Bilder)');
