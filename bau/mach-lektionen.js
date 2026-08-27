/* ============================================================
   mach-lektionen.js — baut die fehlenden Lektionsseiten

   Die Bereiche im Lernbereich hatten alle Dialoge, Wortschatz
   und Hörtexte, aber 30 von ihnen keine ausgearbeitete
   Lektionsseite. Diese Seiten bestehen zum groessten Teil aus
   Material, das schon geschrieben ist — es war nur nie zu einer
   Stunde zusammengesetzt.

   Woher kommt was:
     uebungen.js   Wortschatz und die fertigen Aufgaben
     dialoge.js    die Dialoge, Schritt fuer Schritt
     vokabeln-pool.js  Beispielsaetze zu den Woertern
     amanda/sz-*   das Szenenbild
     lektionen-texte.js  Einstiegsfragen, Streitfrage, Sprechauftrag

   Das Aussehen kommt 1:1 aus der vorhandenen Lektion
   baecker-cafe-a2-interaktiv.html: das Stylesheet wird von dort
   gelesen, nicht kopiert — so bleiben alle Seiten gleich.

   Aufruf:  node bau/mach-lektionen.js [--schreiben]
   Ohne --schreiben wird nur gezeigt, was entstehen wuerde.
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const WURZEL = path.join(__dirname, '..');
const VORLAGE = path.join(WURZEL, 'baecker-cafe-a2-interaktiv.html');
const SCHREIBEN = process.argv.includes('--schreiben');

/* ---------- Daten laden ---------- */
global.window = {};
require(path.join(WURZEL, 'bereiche.js'));
require(path.join(WURZEL, 'uebungen.js'));
require(path.join(WURZEL, 'dialoge.js'));
require(path.join(WURZEL, 'vokabeln-pool.js'));
const TEXTE = require('./lektionen-texte.js');

const BEREICHE = window.BEREICHE;
const WS = window.UEBUNGEN.skills.find(s => s.id === 'wortschatz');
const THEMA = Object.fromEntries(WS.themes.map(t => [t.id, t]));
const DIALOG = Object.fromEntries(window.DIALOGE.map(d => [d.id, d]));

/* Beispielsaetze: das Wort genau so, wie es im Wortschatz steht. */
const POOL = window.VOKABELN_POOL || window.VOK_POOL || [];
const SATZ = {};
(Array.isArray(POOL) ? POOL : []).forEach(v => {
  if (v.de && v.bsp) SATZ[v.de.trim()] = v.bsp;
});

/* ---------- Kleinkram ---------- */
const esc = t => String(t == null ? '' : t)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function artikelTeilen(wort) {
  const m = /^(der|die|das)\s+(.+)$/.exec(String(wort).trim());
  return m ? { art: m[1], rest: m[2] } : { art: '', rest: String(wort).trim() };
}
function mischen(liste, keim) {
  const a = liste.slice();
  let z = keim || 7;
  for (let i = a.length - 1; i > 0; i--) {
    z = (z * 1103515245 + 12345) % 2147483648;
    const j = z % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------- Bausteine einer Seite ---------- */
function woerterVon(b) {
  const raus = [];
  (b.ws || []).forEach(id => {
    const t = THEMA[id];
    if (t) (t.words || []).forEach(w => raus.push(w));
  });
  return raus;
}
function aufgabenVon(b) {
  const raus = [];
  (b.ws || []).forEach(id => {
    const t = THEMA[id];
    if (t) (t.exercises || []).forEach(e => raus.push(e));
  });
  return raus;
}

function wortschatzHtml(woerter) {
  return woerter.slice(0, 16).map(w => {
    const { art, rest } = artikelTeilen(w.de);
    const satz = SATZ[String(w.de).trim()];
    // Ein echter Satz kommt in Anfuehrungszeichen. Gibt es keinen,
    // steht die Bedeutung da — aber ohne Anfuehrungszeichen, sonst
    // liest sie sich wie ein Satz, den jemand gesagt hat.
    const unten = satz
      ? '„' + esc(satz) + '“'
      : (w.info ? esc(w.info.charAt(0).toUpperCase() + w.info.slice(1)) + '.' : '');
    return '<div class="vcard"><div class="w">'
      + (art ? '<span class="art">' + art + '</span> ' : '')
      + esc(rest) + ' <button class="speak" data-say="' + esc(w.de) + '">🔊</button></div>'
      + '<div class="ex">' + unten + '</div></div>';
  }).join('\n');
}

function dialogeHtml(b) {
  const teile = (b.dlg || []).map(id => DIALOG[id]).filter(Boolean).slice(0, 3);
  if (!teile.length) return '';
  return teile.map(d => {
    const zeilen = (d.schritte || []).slice(0, 6).map(s =>
      '<div class="dline"><div class="dwho a">A</div><div class="dtxt">' + esc(s.amanda) + '</div></div>\n'
      + '<div class="dline"><div class="dwho b">B</div><div class="dtxt">' + esc(s.beispiel || '…') + '</div></div>'
    ).join('\n');
    return '<div class="dwrap">\n<h4>💬 ' + esc(d.titel) + (d.lvl ? ' <span style="font-weight:400;opacity:.6">· ' + esc(d.lvl) + '</span>' : '') + '</h4>\n'
      + (d.ort ? '<p class="ssub">' + esc(d.ort) + '</p>\n' : '') + zeilen + '\n</div>';
  }).join('\n');
}

function redemittelVon(b) {
  const rm = [];
  (b.dlg || []).map(id => DIALOG[id]).filter(Boolean).forEach(d =>
    (d.schritte || []).forEach(s => (s.redemittel || []).forEach(r => { if (rm.indexOf(r) < 0) rm.push(r); })));
  return rm.slice(0, 10);
}

/* Aus den fertigen Aufgaben werden die drei Datenreihen der Seite. */
function quizVon(aufgaben, woerter) {
  const q = [];
  aufgaben.filter(a => a.type === 'choice').forEach(a => {
    if (!a.options || a.answer == null) return;
    q.push({ q: a.q, o: a.options, c: a.answer, e: a.explain || ('Richtig ist: ' + a.options[a.answer] + '.') });
  });
  aufgaben.filter(a => a.type === 'match').forEach(a => {
    const p = a.pairs || [];
    p.slice(0, 4).forEach((paar, i) => {
      const falsche = p.filter((_, j) => j !== i).map(x => x.l).slice(0, 2);
      if (falsche.length < 2) return;
      const opts = mischen([paar.l].concat(falsche), i + 3);
      q.push({ q: 'Was passt: „' + paar.r + '“?', o: opts, c: opts.indexOf(paar.l), e: paar.l + ' — ' + paar.r + '.' });
    });
  });
  return q.slice(0, 10);
}
function gapVon(aufgaben) {
  const g = [];
  aufgaben.filter(a => a.type === 'gap' && a.text && a.answer).forEach(a => {
    const text = a.text.indexOf('___') >= 0 ? a.text : '___ ' + a.text;
    let opts = a.options && a.options.length ? a.options.slice() : null;
    if (!opts) opts = /^(der|die|das)$/.test(a.answer) ? ['der', 'die', 'das'] : null;
    if (!opts) return;
    if (opts.indexOf(a.answer) < 0) opts.push(a.answer);
    g.push({ t: text, o: opts, a: a.answer });
  });
  return g.slice(0, 10);
}
function neunzigVon(woerter) {
  const alle = woerter.map(w => w.de);
  return woerter.slice(0, 8).map((w, i) => ({
    w: w.de,
    h: mischen(alle.filter(x => x !== w.de), i + 11).slice(0, 6)
  })).filter(x => x.h.length >= 3);
}

/* ---------- Eine Seite ---------- */
function seite(b, t) {
  const woerter = woerterVon(b);
  const aufgaben = aufgabenVon(b);
  const QUIZ = quizVon(aufgaben, woerter);
  const GAP = gapVon(aufgaben);
  const W90 = neunzigVon(woerter);
  const rm = redemittelVon(b);
  const dlg = dialogeHtml(b);
  const titel = t.titel[0] + ' ' + t.titel[1];
  const stufe = b.lvl || 'A2–B1';

  const reiter = [
    ['0', '🖼️ Einstieg'], ['1', '📖 Wortschatz'],
    dlg ? ['2', '💬 Dialoge'] : null,
    ['3', '⚖️ Debatte'], ['4', '🗣️ Sprechen'],
    W90.length ? ['5', '⏱️ 90 Sekunden'] : null,
    (QUIZ.length || GAP.length) ? ['6', '✅ Üben'] : null
  ].filter(Boolean);

  const css = fs.readFileSync(VORLAGE, 'utf8').match(/<style>[\s\S]*?<\/style>/)[0];

  let h = '<!DOCTYPE html><html lang="de"><head>\n'
    + '<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">\n'
    + '<title>' + esc(titel) + ' · Sprechclub ' + esc(stufe) + ' | deutschoderwas</title>\n'
    + '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
    + '<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">\n'
    + css + '</head>\n<body><div class="wrapper">\n'
    + '<div class="eyebrow">deutschoderwas · Sprechclub · ' + esc(stufe) + '</div>\n'
    + '<h1 class="title">' + esc(t.titel[0]) + ' <span class="hl">' + esc(t.titel[1]) + '</span></h1>\n'
    + '<p class="subtitle">' + esc(t.ziel) + '</p>\n'
    + '<nav class="tabs">\n'
    + reiter.map((r, i) => '<button class="tab' + (i === 0 ? ' active' : '') + '" data-tab="' + r[0] + '">' + r[1] + '</button>').join('\n')
    + '\n</nav>\n';

  /* 0 — Einstieg */
  h += '<section class="section active" data-section="0">\n<h2 class="st">Schau dir das Bild an</h2>\n'
    + '<p class="ssub">' + esc(t.ziel) + '</p>\n'
    + '<div class="scene-wrap"><img src="amanda/' + esc(b.bild || ('sz-' + b.id)) + '.webp" alt="' + esc(titel) + '"></div>\n'
    + '<div class="tip">🗣️ <strong>Zum Einstieg – sprecht reihum:</strong> Beschreibt das Bild. Nutzt: „Auf dem Bild <u>sehe ich</u> …“, „<u>Die Person</u> …“, „Im Hintergrund <u>ist</u> …“</div>\n'
    + '<h2 class="st">Erste Fragen</h2>\n<ul class="qlist">\n'
    + t.fragen.map(f => '<li>' + esc(f) + '</li>').join('\n')
    + '\n<li>Kennst du das aus deinem Alltag? Erzähl davon.</li>\n</ul>\n</section>\n';

  /* 1 — Wortschatz */
  h += '<section class="section" data-section="1">\n<h2 class="st">Wortschatz</h2>\n'
    + '<p class="ssub">Tipp auf 🔊, um das Wort zu hören. Lies den Satz darunter laut.</p>\n'
    + '<div class="vgrid" id="vgrid">\n' + wortschatzHtml(woerter) + '\n</div>\n</section>\n';

  /* 2 — Dialoge */
  if (dlg) {
    h += '<section class="section" data-section="2">\n<h2 class="st">Beispieldialoge</h2>\n'
      + '<p class="ssub">Lest zu zweit mit verteilten Rollen — dann spielt es mit euren eigenen Worten nach.</p>\n'
      + dlg + '\n';
    if (rm.length) {
      h += '<div class="rmcard"><b>🗣️ Sätze, die immer passen</b>\n<div style="margin-top:.5rem">'
        + rm.map(r => '<span class="rm">' + esc(r) + '</span>').join('') + '</div></div>\n';
    }
    h += '<div class="tip">🎭 <strong>Jetzt ihr:</strong> Spielt einen eigenen Dialog zum Thema — eine Person fragt, die andere antwortet.</div>\n</section>\n';
  }

  /* 3 — Debatte */
  h += '<section class="section" data-section="3">\n<h2 class="st">Debatte: ' + esc(t.debatte.frage) + '</h2>\n'
    + '<p class="ssub">Teilt euch in zwei Gruppen. Jede Gruppe sammelt drei Argumente — eins steht schon da.</p>\n'
    + '<div class="pcgrid">\n'
    + '<div class="pcol pro"><h4>✓ Dafür</h4><ul><li>' + esc(t.debatte.pro) + '</li><li>Findet ein zweites Argument.</li><li>Und ein drittes.</li></ul></div>\n'
    + '<div class="pcol con"><h4>✓ Dagegen</h4><ul><li>' + esc(t.debatte.con) + '</li><li>Findet ein zweites Argument.</li><li>Und ein drittes.</li></ul></div>\n'
    + '</div>\n'
    + '<div class="rmcard"><b>🗣️ Redemittel für die Debatte</b> — bau diese Sätze ein:\n<div style="margin-top:.5rem">'
    + ['Ich finde, dass …', 'Ein Vorteil ist …', 'Ein Nachteil ist …', 'Meiner Meinung nach …', 'Das stimmt, aber …', 'Ich sehe das anders.', 'Ich stimme dir zu.']
      .map(r => '<span class="rm">' + r + '</span>').join('')
    + '</div></div>\n'
    + '<div class="tip teal">🏁 <strong>Abschluss:</strong> Jede Gruppe nennt ihr <u>bestes</u> Argument. Danach sagt jeder einen eigenen Satz dazu.</div>\n</section>\n';

  /* 4 — Sprechen */
  h += '<section class="section" data-section="4">\n<h2 class="st">Frei sprechen</h2>\n'
    + '<p class="ssub">Drei Aufträge. Nimm dir einen, sprich eine Minute — dann tauscht ihr.</p>\n'
    + '<div class="tip"><strong>📋 Leitfaden — sprich über diese Punkte:</strong>\n<ol style="margin:.5rem 0 0 1.2rem;line-height:1.9">\n'
    + t.sprechen.map(s => '<li>' + esc(s) + '</li>').join('\n')
    + '\n</ol></div>\n'
    + '<div class="tip teal">👥 <strong>Zu zweit · ⏱️ ca. 10 Minuten:</strong> Erst zu zweit sprechen, danach berichtet ihr der Gruppe kurz davon.</div>\n</section>\n';

  /* 5 — 90 Sekunden */
  if (W90.length) {
    h += '<section class="section" data-section="5">\n<h2 class="st">⏱️ 90-Sekunden-Challenge</h2>\n'
      + '<p class="ssub">' + esc(t.neunzig) + ' Ein Wort, neunzig Sekunden, keine Pause. Die Hilfswörter sind dein Netz.</p>\n'
      + '<div class="ch"><div class="chw" id="w90">' + esc(W90[0].w) + '</div>\n'
      + '<div class="chh" id="hw90">' + W90[0].h.map(x => '<span class="hw">' + esc(x) + '</span>').join('') + '</div>\n'
      + '<div class="timer" id="t90">1:30</div>\n'
      + '<div class="chbtns"><button class="chbtn" id="start90">▶️ Start</button><button class="chbtn ghost" id="new90">🔀 Neues Wort</button></div>\n'
      + '</div>\n</section>\n';
  }

  /* 6 — Üben */
  if (QUIZ.length || GAP.length) {
    h += '<section class="section" data-section="6">\n<h2 class="st">✅ Üben</h2>\n';
    if (QUIZ.length) h += '<p class="ssub">Erst tippen, dann lesen, warum es stimmt.</p>\n<div id="quiz"></div>\n';
    if (GAP.length) h += '<h2 class="st">✍️ Lückentext</h2>\n<p class="ssub">Wähle das Wort, das in die Lücke gehört.</p>\n<div class="gap" id="gap"></div>\n';
    h += '</section>\n';
  }

  h += '<footer>Sprechclub · <strong>deutschoderwas</strong></footer>\n</div>\n';

  /* Das Verhalten ist auf allen Lektionsseiten dasselbe. */
  h += '<script>\n'
    + 'document.querySelectorAll(".tab").forEach(function(b){b.onclick=function(){\n'
    + ' document.querySelectorAll(".tab").forEach(function(x){x.classList.remove("active");});\n'
    + ' document.querySelectorAll(".section").forEach(function(x){x.classList.remove("active");});\n'
    + ' b.classList.add("active");document.querySelector(\'[data-section="\'+b.dataset.tab+\'"]\').classList.add("active");\n'
    + ' var n=document.querySelector(".tabs");window.scrollTo({top:n.offsetTop-8,behavior:"instant"});\n};});\n'
    + 'function say(t){try{if(window.sagen){window.sagen(t,{rolle:"amanda"});return;}var u=new SpeechSynthesisUtterance(t);u.lang="de-DE";u.rate=.9;speechSynthesis.cancel();speechSynthesis.speak(u);}catch(e){}}\n'
    + 'document.querySelectorAll(".speak").forEach(function(b){b.onclick=function(){say(b.dataset.say);};});\n';

  if (W90.length) {
    h += 'var W90=' + JSON.stringify(W90) + ';\n'
      + 'var last90=-1,t90=null,rest=90;\n'
      + 'function fmt(s){var m=Math.floor(s/60),r=s%60;return m+":"+(r<10?"0":"")+r;}\n'
      + 'document.getElementById("new90").onclick=function(){var i;do{i=Math.floor(Math.random()*W90.length);}while(i===last90&&W90.length>1);last90=i;\n'
      + ' document.getElementById("w90").textContent=W90[i].w;\n'
      + ' document.getElementById("hw90").innerHTML=W90[i].h.map(function(x){return \'<span class="hw">\'+x+\'</span>\';}).join("");\n'
      + ' clearInterval(t90);rest=90;document.getElementById("t90").textContent=fmt(rest);};\n'
      + 'document.getElementById("start90").onclick=function(){clearInterval(t90);rest=90;var el=document.getElementById("t90");el.textContent=fmt(rest);\n'
      + ' t90=setInterval(function(){rest--;el.textContent=fmt(rest);if(rest<=0){clearInterval(t90);el.textContent="✅ Fertig!";}},1000);};\n';
  }
  if (QUIZ.length) {
    h += 'var QUIZ=' + JSON.stringify(QUIZ) + ';\n'
      + 'var qc=document.getElementById("quiz");\n'
      + 'QUIZ.forEach(function(item){\n'
      + ' var d=document.createElement("div");d.className="quiz-q";\n'
      + ' d.innerHTML=\'<div class="qt">\'+item.q+\'</div>\';\n'
      + ' var op=document.createElement("div");op.className="quiz-opts";\n'
      + ' item.o.forEach(function(t,i){var b=document.createElement("button");b.className="qopt";b.textContent=t;\n'
      + '  b.onclick=function(){if(d.dataset.done)return;d.dataset.done=1;\n'
      + '   if(i===item.c){b.classList.add("right");}else{b.classList.add("wrong");op.children[item.c].classList.add("right");}\n'
      + '   d.querySelector(".qexp").classList.add("show");};\n'
      + '  op.appendChild(b);});\n'
      + ' d.appendChild(op);\n'
      + ' var e=document.createElement("div");e.className="qexp";e.innerHTML="💡 "+item.e;d.appendChild(e);\n'
      + ' qc.appendChild(d);\n});\n';
  }
  if (GAP.length) {
    h += 'var GAP=' + JSON.stringify(GAP) + ';\n'
      + 'var g=document.getElementById("gap");\n'
      + 'GAP.forEach(function(item){\n'
      + ' var span=document.createElement("div");span.style.margin=".3rem 0";\n'
      + ' var sel=document.createElement("select");\n'
      + ' var opt0=document.createElement("option");opt0.textContent="— wählen —";opt0.value="";sel.appendChild(opt0);\n'
      + ' item.o.slice().sort().forEach(function(o){var op=document.createElement("option");op.textContent=o;op.value=o;sel.appendChild(op);});\n'
      + ' sel.onchange=function(){if(sel.value===item.a){sel.className="ok";}else if(sel.value===""){sel.className="";}else{sel.className="no";}};\n'
      + ' span.innerHTML=item.t.replace("___",\'<b class="slot"></b>\');\n'
      + ' span.querySelector(".slot").replaceWith(sel);\n'
      + ' g.appendChild(span);\n});\n';
  }
  h += '<\/script>\n</body></html>\n';
  return h;
}

/* ---------- Lauf ---------- */
let gebaut = 0, uebersprungen = [];
BEREICHE.forEach(b => {
  if (b.lek) return;
  const t = TEXTE[b.id];
  if (!t) { uebersprungen.push(b.id + ' (kein Text)'); return; }
  const woerter = woerterVon(b);
  if (!woerter.length) { uebersprungen.push(b.id + ' (kein Wortschatz)'); return; }
  const datei = b.id + '-lektion.html';
  const html = seite(b, t);
  if (SCHREIBEN) fs.writeFileSync(path.join(WURZEL, datei), html, 'utf8');
  console.log((SCHREIBEN ? 'geschrieben ' : 'wuerde bauen ') + datei
    + '  (' + woerter.length + ' Woerter, ' + (b.dlg || []).filter(x => DIALOG[x]).length + ' Dialoge, '
    + Math.round(html.length / 1024) + ' KB)');
  gebaut++;
});
console.log('---');
console.log(gebaut + ' Lektionen' + (SCHREIBEN ? ' geschrieben' : ' vorbereitet'));
if (uebersprungen.length) console.log('ausgelassen: ' + uebersprungen.join(', '));
