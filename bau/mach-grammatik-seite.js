/* ============================================================
   mach-grammatik-seite.js — baut die Erklärseiten zur Grammatik

   Warum es das gibt: Im Übungsbereich des Kontos liegen zu zwölf
   Grundthemen auf A1 und A2 je vierzehn Aufgaben — Modalverben,
   trennbare Verben, Perfekt, Dativ und so weiter. Eine Erklärseite
   gab es dazu nicht. Wer die Regel nachlesen wollte, fand auf B1
   und B2 vierundzwanzig Seiten und auf A1/A2 keine einzige.

   Die Seiten entstehen deshalb nicht von Hand, sondern aus
   bau/grammatik-seiten.json — ein Eintrag je Thema. So sehen alle
   gleich aus, und eine Änderung am Aufbau gilt sofort für alle.

   Aufruf:  node bau/mach-grammatik-seite.js            (alle)
            node bau/mach-grammatik-seite.js modalverben (eines)

   Aufbau jeder Seite, immer in dieser Reihenfolge:
     Aufwärmen · Die Regel · Der Unterschied · Quiz · Lückentext
     · Zuordnen · Sprechen · Mission · Für die Lehrkraft

   Der Kopf hat einen Platz für ein Video. Solange keines da ist,
   steht dort ein Bild. Kommt später eine Aufnahme dazu, genügt in
   der JSON ein Feld "video" — die Seite muss nicht neu gedacht
   werden.
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const WURZEL = path.resolve(__dirname, '..');
const QUELLE = path.join(__dirname, 'grammatik-seiten.json');

/* ---------- Werkzeug ---------- */

/* Text aus der Quelle darf Auszeichnung enthalten (<b>, <i>, <u>).
   Alles andere muss maskiert werden, sonst zerlegt ein & oder ein
   nacktes < die Seite. Deshalb maskieren wir zuerst alles und holen
   die erlaubten Auszeichnungen danach zurück. */
const ERLAUBT = ['b', 'i', 'u', 'br', 'span', 'small', 'strong', 'em', 'code'];
function sicher(s) {
  if (s === undefined || s === null) return '';
  let t = String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  ERLAUBT.forEach(tag => {
    t = t.split('&lt;' + tag + '&gt;').join('<' + tag + '>')
         .split('&lt;/' + tag + '&gt;').join('</' + tag + '>')
         .split('&lt;' + tag + '/&gt;').join('<' + tag + '/>');
  });
  /* span mit Klasse durchlassen: <span class="…"> */
  t = t.replace(/&lt;span class=&quot;([a-z0-9 _-]+)&quot;&gt;/g, '<span class="$1">');
  t = t.replace(/&lt;span class="([a-z0-9 _-]+)"&gt;/g, '<span class="$1">');
  return t;
}

/* Für Attribute (alt, title) darf gar keine Auszeichnung durch. */
function attr(s) {
  return String(s === undefined || s === null ? '' : s)
    .replace(/&/g, '&amp;').replace(/"/g, '&quot;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* Bildpfade sind relativ zur Seite. Die Seiten liegen im Wurzel-
   ordner, die Bilder in vok-bild/ und amanda/ — also unverändert. */
function bildPfad(p) { return attr(p); }

/* ---------- Bausteine ---------- */

function kopf(s) {
  const journey = (s.journey || []).map(x => '<span>' + sicher(x) + '</span>').join('');
  return `  <div class="eyebrow">${sicher(s.eyebrow)}</div>
  <div class="title-wrap">
    <h1 class="title">${sicher(s.titel)} <span class="hl">${sicher(s.hl)}</span></h1>
    <p class="subtitle">${sicher(s.untertitel)}</p>
    <span class="level-badge">${sicher(s.stufe)}</span>
    <div class="journey">${journey}</div>
  </div>`;
}

/* Der Kopfbereich: Video, wenn eines angegeben ist, sonst das Bild.
   Beides bekommt dieselbe Fläche, damit die Seite nicht springt,
   wenn spaeter ein Video nachgereicht wird. */
function hero(s) {
  const b = s.bild || {};
  const cap = b.cap ? `<div class="cap">${sicher(b.cap)}</div>` : '';
  if (s.video) {
    return `  <div class="hero-motion"><video autoplay muted loop playsinline preload="metadata"` +
      (b.d ? ` poster="${bildPfad(b.d)}"` : '') +
      `><source src="${attr(s.video)}" type="video/mp4"></video>${cap}</div>`;
  }
  if (!b.d) return '';
  return `  <div class="hero-motion"><img src="${bildPfad(b.d)}" alt="${attr(b.alt)}" loading="eager">${cap}</div>`;
}

function tabs() {
  return '  <nav class="tabs">' +
    '<a href="#aufwaermen">📖 Aufwärmen</a>' +
    '<a href="#regel">📐 Die Regel</a>' +
    '<a href="#kontrast">🔀 Unterschied</a>' +
    '<a href="#quiz">✅ Quiz</a>' +
    '<a href="#lueckentext">✍️ Lückentext</a>' +
    '<a href="#zuordnen">🧩 Zuordnen</a>' +
    '<a href="#sprechen">🗣️ Sprechen</a>' +
    '<a href="#mission">🎯 Mission</a>' +
    '<a href="#lehrer">🍎 Lehrkraft</a>' +
    '</nav>';
}

function notiz(n) {
  if (!n) return '';
  const art = n.art === 'warn' ? 'warn' : n.art === 'info' ? 'info' : 'tip';
  return `<div class="note ${art}">${sicher(n.text)}</div>`;
}

/* Aufwärmen: drei Karten mit Bild oder Emoji, dann ein Hinweis. */
function aufwaermen(a) {
  const karten = (a.karten || []).map(k => {
    /* hoch:true fuer freigestellte, hochformatige Figuren (die
       Amanda-Bilder). Ohne das schneidet der 4:3-Ausschnitt ihr
       den Kopf ab. */
    const kopfteil = k.bild
      ? `<img class="kbild${k.hoch ? ' hoch' : ''}" src="${bildPfad(k.bild)}" alt="${attr(k.alt)}" loading="lazy">`
      : `<span class="emoji">${sicher(k.emoji || '•')}</span>`;
    return `<div class="vocab">${kopfteil}<div class="term">${sicher(k.wort)}</div>` +
           `<div class="gloss">${sicher(k.kurz)}</div></div>`;
  }).join('');
  return `<section class="block" id="aufwaermen">` +
    `<h2 class="block-head">${sicher(a.h2)} <span class="hl">${sicher(a.hl)}</span></h2>` +
    `<p class="block-intro">${sicher(a.intro)}</p>` +
    `<div class="grid g3">${karten}</div>` +
    notiz(a.tipp) + `</section>`;
}

/* Die Regel: Satzbau-Leiste, dann eine Tabelle, dann richtig/falsch. */
function regel(r) {
  const leiste = (r.satzbau || []).map(p => {
    const kl = p.art === 'verb' ? ' verb' : p.art === 'hl' ? ' hl' : '';
    return `<div class="pos${kl}"><b>${sicher(p.rolle)}</b>${sicher(p.wort)}</div>`;
  }).join('');
  const zeilen = (r.tabelle || []).map((z, i) => {
    const t = i === 0 ? 'th' : 'td';
    return '<tr>' + z.map(c => `<${t}>${sicher(c)}</${t}>`).join('') + '</tr>';
  }).join('');
  const paare = (r.paare || []).map(p =>
    `<p style="margin-top:.7rem"><span class="ex-good">✔ ${sicher(p.ja)}</span><br>` +
    `<span class="ex-bad">${sicher(p.nein)}</span></p>`).join('');
  const bild = r.bild
    ? `<figure class="regelbild"><img src="${bildPfad(r.bild)}" alt="${attr(r.alt)}" loading="lazy">` +
      (r.bildtext ? `<figcaption>${sicher(r.bildtext)}</figcaption>` : '') + `</figure>`
    : '';
  return `<section class="block" id="regel">` +
    `<h2 class="block-head">${sicher(r.h2)} <span class="hl">${sicher(r.hl)}</span></h2>` +
    `<p class="block-intro">${sicher(r.intro)}</p>` +
    (leiste ? `<div class="satzbau">${leiste}</div>` : '') +
    /* Die Tabelle steht in einem eigenen Rahmen, der bei Bedarf
       seitlich scrollt. Ohne ihn schiebt eine breite Tabelle (fünf
       Spalten bei den Possessivartikeln) die ganze Seite nach
       rechts — auf dem Handy sofort sichtbar. */
    `<div class="rule">` +
    (zeilen ? `<div class="tabelle-rahmen"><table>${zeilen}</table></div>` : '') +
    paare + `</div>` +
    bild + notiz(r.tipp) + `</section>`;
}

/* Der Unterschied: drei bis vier Begriffskarten nebeneinander. */
function kontrast(k) {
  const farben = ['teal', 'red', 'yellow', 'teal'];
  const karten = (k.karten || []).map((c, i) =>
    `<div class="concept ${farben[i % farben.length]}">` +
    `<div class="label">${sicher(c.label)}</div>` +
    `<div class="term">${sicher(c.wort)}</div>` +
    `<div class="desc">${sicher(c.text)}</div></div>`).join('');
  const spalten = (k.karten || []).length >= 4 ? 'g4' : 'g3';
  return `<section class="block" id="kontrast">` +
    `<h2 class="block-head">${sicher(k.h2)} <span class="hl">${sicher(k.hl)}</span></h2>` +
    `<p class="block-intro">${sicher(k.intro)}</p>` +
    `<div class="grid ${spalten}">${karten}</div>` + notiz(k.tipp) + `</section>`;
}

function quiz(q) {
  const fragen = (q.fragen || []).map(f => {
    const opts = f.o.map((o, i) =>
      `<button class="quiz-opt"${i === f.c ? ' data-correct' : ''}>${sicher(o)}</button>`).join('');
    return `<div class="quiz-q"><div class="qtext">${sicher(f.q)}</div>` +
      `<div class="quiz-opts">${opts}</div>` +
      `<div class="quiz-exp">${sicher(f.e)}</div></div>`;
  }).join('');
  return `<section class="block" id="quiz">` +
    `<h2 class="block-head">${sicher(q.h2)} <span class="hl">${sicher(q.hl)}</span></h2>` +
    `<p class="block-intro">${sicher(q.intro)}</p>` +
    `<div data-quiz>${fragen}</div></section>`;
}

function luecke(l) {
  const zeilen = (l.saetze || []).map((s, i) => {
    const opts = ['<option></option>'].concat(s.o.map(o => `<option>${sicher(o)}</option>`)).join('');
    const teile = String(s.t).split('___');
    const vor = sicher(teile[0] || '');
    const nach = sicher(teile.slice(1).join('___'));
    return `<div class="gap-item">${i + 1}. ${vor}` +
      `<select data-answer="${attr(s.a)}">${opts}</select>${nach}</div>`;
  }).join('');
  return `<section class="block" id="lueckentext">` +
    `<h2 class="block-head">${sicher(l.h2)} <span class="hl">${sicher(l.hl)}</span></h2>` +
    `<p class="block-intro">${sicher(l.intro)}</p>` +
    `<div data-fillgap>${zeilen}` +
    `<div style="margin-top:1rem;"><button class="btn" data-check>Überprüfen</button>` +
    `<span class="score" data-score></span></div></div></section>`;
}

function zuordnen(z) {
  const links = (z.paare || []).map((p, i) =>
    `<div class="match-item" data-left="${i + 1}">${sicher(p.a)}</div>`).join('');
  /* Die rechte Spalte wird fest verdreht ausgeliefert, damit die
     Lösung nicht Zeile für Zeile untereinandersteht. Fest, nicht
     zufällig — sonst sieht jede Neuerzeugung anders aus. */
  const rechts = (z.paare || []).map((p, i) => ({ i: i + 1, t: p.b }));
  const reihe = [];
  for (let k = rechts.length - 1; k >= 0; k -= 2) reihe.push(rechts[k]);
  for (let k = rechts.length % 2 === 0 ? 0 : 1; k < rechts.length; k += 2) reihe.push(rechts[k]);
  const rechtsHtml = reihe.map(r =>
    `<div class="match-item" data-right="${r.i}">${sicher(r.t)}</div>`).join('');
  return `<section class="block alt" id="zuordnen">` +
    `<h2 class="block-head">${sicher(z.h2)} <span class="hl">${sicher(z.hl)}</span></h2>` +
    `<p class="block-intro">${sicher(z.intro)}</p>` +
    `<div class="match" data-match>` +
    `<div><h4>${sicher(z.linksTitel || 'Anfang')}</h4>${links}</div>` +
    `<div><h4>${sicher(z.rechtsTitel || 'Fortsetzung')}</h4>${rechtsHtml}</div>` +
    `</div></section>`;
}

function sprechen(sp) {
  const karten = JSON.stringify(sp.karten || []);
  return `<section class="block" id="sprechen">` +
    `<h2 class="block-head">${sicher(sp.h2)} <span class="hl">${sicher(sp.hl)}</span></h2>` +
    `<p class="block-intro">${sicher(sp.intro)}</p>` +
    `<div class="speak" data-speak><div class="card">` +
    `<span class="ph">Tippe unten auf „Neue Karte“…</span></div>` +
    `<div style="margin-top:1rem;"><button class="btn dark" data-draw>🎲 Neue Karte</button></div>` +
    `<script type="application/json" data-speak-cards>${karten.replace(/</g, '\\u003c')}<\/script>` +
    `</div></section>`;
}

/* Der Weg zu den Aufgaben im Konto — die Seite erklärt, geübt wird
   im Übungsbereich. Ohne diesen Kasten findet den Weg niemand. */
function weiter(w, id, stufe) {
  if (!w) return '';
  return `<section class="block weiter" id="weiter">` +
    `<h2 class="block-head">Weiterüben: <span class="hl">${sicher(w.anzahl)} Aufgaben im Konto</span></h2>` +
    `<p class="block-intro">${sicher(w.text)}</p>` +
    `<a class="btn dark" href="/konto.html#uebungen-grammatik-${attr(id)}">Zu den Aufgaben</a>` +
    `</section>`;
}

function mission(m) {
  const boni = (m.bonus || []).map((b, i) =>
    `<div class="bonus">🏆 <strong>Bonus ${i + 1}:</strong> ${sicher(b)}</div>`).join('');
  return `<section class="block mission" id="mission">` +
    `<h2 class="block-head">🎯 ${sicher(m.h2 || 'Mission der Woche')}</h2>` +
    `<p><strong>Mission:</strong> ${sicher(m.text)}</p>${boni}</section>`;
}

function lehrer(l) {
  const liste = a => (a || []).map(x => `<li>${sicher(x)}</li>`).join('');
  const ablauf = (l.ablauf || []).map(s =>
    `<li><span class="time">${sicher(s.zeit)}</span> ${sicher(s.text)}</li>`).join('');
  return `<section class="block teach" id="lehrer">` +
    `<h2 class="block-head">🍎 Für die Lehrkraft – Stundenablauf (60 Min.)</h2>` +
    `<p class="lead">${sicher(l.lead)}</p>` +
    `<h4>Lernziel</h4><ul>${liste(l.ziele)}</ul>` +
    `<h4>Ablauf</h4><ul>${ablauf}</ul>` +
    `<h4>Häufige Fehler &amp; schnelle Korrektur</h4><ul>${liste(l.fehler)}</ul>` +
    `<h4>Vor dem Unterricht</h4><ul>${liste(l.vorher)}</ul>` +
    `</section>`;
}

/* ---------- Gestaltung ----------
   Wortwörtlich aus den bestehenden Grammatikseiten übernommen,
   damit die neuen Seiten sich nicht anders anfühlen. Ergänzt sind
   nur die drei Blöcke am Ende: Bilder in den Karten, das Bild in
   der Regel und der Kasten zum Weiterüben. */
const CSS = `:root{
  --cream:#FDF6EC;--cream-warm:#FBEDD8;--paper:#FFFFFF;
  --ink:#262019;--ink-soft:#5C4E3E;--ink-mute:#A8957D;
  --red:#E8302A;--red-soft:#FCE5E3;
  --teal:#35AFD0;--teal-soft:#CFEEF7;
  --yellow:#FFD24A;--yellow-soft:#FFF1C2;
  --pink:#E69CB3;--sand:#F0E2C8;
  --radius:18px;--shadow:0 10px 30px rgba(38,32,25,.08);
  --font-head:'Fraunces',Georgia,serif;
  --font-body:'Outfit','Segoe UI',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:linear-gradient(180deg,#FDE6E0 0%,var(--cream) 14%,var(--cream) 100%);
  color:var(--ink);font-family:var(--font-body);line-height:1.55;min-height:100vh;-webkit-font-smoothing:antialiased;}
.wrapper{max-width:920px;margin:0 auto;padding:2.5rem 1.4rem 5rem;}
.eyebrow{text-align:center;font-size:.78rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:.9rem;}
.title-wrap{text-align:center;margin-bottom:1rem;}
h1.title{font-family:var(--font-head);font-weight:600;font-size:clamp(1.9rem,4.5vw,3.6rem);line-height:1.06;letter-spacing:-.01em;}
h1.title .hl{position:relative;display:inline-block;color:var(--red);}
h1.title .hl::after{content:"";position:absolute;left:-2px;right:-2px;bottom:.06em;height:.28em;background:var(--yellow);opacity:.55;z-index:-1;border-radius:3px;}
.subtitle{text-align:center;max-width:640px;margin:.9rem auto 1.3rem;color:var(--ink-soft);font-size:1.06rem;}
.level-badge{display:inline-block;background:var(--teal);color:#063b35;font-weight:700;font-size:.8rem;padding:5px 14px;border-radius:999px;}
.journey{display:flex;flex-wrap:wrap;justify-content:center;gap:.5rem 1.1rem;margin:1.1rem auto 0;color:var(--ink-soft);font-size:.9rem;font-weight:600;}
.journey span{display:inline-flex;align-items:center;gap:.3rem;}
.hero-motion{position:relative;max-width:920px;margin:1.4rem auto .4rem;border-radius:var(--radius);overflow:hidden;
  box-shadow:var(--shadow);border:1px solid var(--sand);aspect-ratio:16/9;background:var(--cream-warm);}
.hero-motion video,.hero-motion img{width:100%;height:100%;object-fit:cover;display:block;}
.hero-motion .cap{position:absolute;left:0;right:0;bottom:0;padding:.6rem .9rem;font-size:.82rem;font-weight:600;color:#fff;
  background:linear-gradient(0deg,rgba(38,32,25,.55),rgba(38,32,25,0));}
nav.tabs{position:sticky;top:0;z-index:50;display:flex;flex-wrap:wrap;gap:.4rem;justify-content:center;
  padding:.7rem .5rem;margin:1.4rem 0 2.2rem;background:rgba(253,246,236,.86);backdrop-filter:blur(8px);border:1px solid var(--sand);border-radius:999px;}
nav.tabs a{font-size:.82rem;font-weight:600;color:var(--ink-soft);text-decoration:none;padding:.4rem .8rem;border-radius:999px;transition:.15s;}
nav.tabs a:hover{background:var(--cream-warm);}
nav.tabs a.active{background:var(--ink);color:var(--cream);}
section.block{background:var(--paper);border:1px solid var(--sand);border-radius:var(--radius);padding:1.8rem 1.7rem;margin-bottom:1.6rem;box-shadow:var(--shadow);scroll-margin-top:5rem;}
.block-head{font-family:var(--font-head);font-weight:600;font-size:clamp(1.3rem,3vw,1.9rem);margin-bottom:.5rem;}
.block-head .hl{color:var(--red);font-style:italic;}
.block-intro{color:var(--ink-soft);margin-bottom:1.2rem;}
.block.alt{background:var(--cream-warm);}
.note{border-radius:14px;padding:.9rem 1.1rem;margin:1rem 0;font-size:.96rem;}
.note.tip{background:var(--teal-soft);border-left:4px solid var(--teal);}
.note.warn{background:var(--red-soft);border-left:4px solid var(--red);}
.note.info{background:var(--yellow-soft);border-left:4px solid var(--yellow);}
.note strong{color:var(--ink);}
.grid{display:grid;gap:.9rem;}
.grid.g2{grid-template-columns:repeat(auto-fit,minmax(220px,1fr));}
.grid.g3{grid-template-columns:repeat(auto-fit,minmax(180px,1fr));}
.grid.g4{grid-template-columns:repeat(auto-fit,minmax(150px,1fr));}
.vocab{background:var(--cream);border:1px solid var(--sand);border-radius:14px;padding:1rem;}
.vocab .emoji{font-size:1.6rem;display:block;margin-bottom:.3rem;}
.vocab .term{font-weight:700;color:var(--ink);}
.vocab .gloss{font-size:.9rem;color:var(--ink-soft);}
.concept{background:var(--cream);border:1px solid var(--sand);border-top:4px solid var(--teal);border-radius:14px;padding:1.1rem;}
.concept.red{border-top-color:var(--red);}
.concept.yellow{border-top-color:var(--yellow);}
.concept .label{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--ink-mute);}
.concept .term{font-family:var(--font-head);font-weight:600;font-size:1.2rem;margin:.2rem 0 .4rem;}
.concept .desc{font-size:.92rem;color:var(--ink-soft);}
.quiz-q{border-top:1px solid var(--sand);padding-top:1.1rem;margin-top:1.1rem;}
.quiz-q:first-child{border-top:none;margin-top:0;padding-top:0;}
.quiz-q .qtext{font-weight:600;margin-bottom:.6rem;}
.quiz-opts{display:flex;flex-direction:column;gap:.5rem;}
.quiz-opt{text-align:left;background:var(--cream);border:1px solid var(--sand);border-radius:12px;padding:.6rem .9rem;cursor:pointer;font-family:var(--font-body);font-size:.96rem;transition:.12s;}
.quiz-opt:hover{background:var(--cream-warm);}
.quiz-opt.correct{background:var(--teal-soft);border-color:var(--teal);font-weight:600;}
.quiz-opt.wrong{background:var(--red-soft);border-color:var(--red);}
.quiz-exp{display:none;margin-top:.6rem;font-size:.9rem;color:var(--ink-soft);background:var(--yellow-soft);border-radius:10px;padding:.6rem .8rem;}
.quiz-q.answered .quiz-exp{display:block;}
.gap-item{margin:.7rem 0;line-height:2;}
.gap-item select{font-family:var(--font-body);font-size:.95rem;border:1px solid var(--ink-mute);background:var(--paper);border-radius:8px;padding:.2rem .4rem;color:var(--ink);max-width:100%;}
.gap-item select.ok{border-color:var(--teal);background:var(--teal-soft);}
.gap-item select.no{border-color:var(--red);background:var(--red-soft);}
.btn{display:inline-block;background:var(--teal);color:#063b35;font-weight:700;border:none;border-radius:999px;padding:.6rem 1.3rem;cursor:pointer;font-family:var(--font-body);font-size:.95rem;text-decoration:none;}
.btn.dark{background:var(--ink);color:var(--cream);}
.score{font-weight:700;margin-left:.8rem;}
.match{display:grid;grid-template-columns:1fr 1fr;gap:.7rem;}
.match h4{font-size:.8rem;text-transform:uppercase;letter-spacing:.06em;color:var(--ink-mute);margin-bottom:.3rem;}
.match-item{background:var(--cream);border:1px solid var(--sand);border-radius:10px;padding:.55rem .8rem;margin-bottom:.5rem;cursor:pointer;font-size:.93rem;transition:.12s;}
.match-item.sel{border-color:var(--ink);background:var(--cream-warm);}
.match-item.done{background:var(--teal-soft);border-color:var(--teal);cursor:default;opacity:.75;}
.match-item.no{border-color:var(--red);background:var(--red-soft);}
.speak{text-align:center;}
.speak .card{background:var(--cream);border:1px solid var(--sand);border-radius:16px;padding:1.6rem 1.2rem;min-height:130px;display:flex;align-items:center;justify-content:center;font-size:1.12rem;font-weight:600;font-family:var(--font-head);}
.speak .card .ph{color:var(--ink-mute);font-family:var(--font-body);font-weight:400;}
.rule{background:var(--cream);border:1px solid var(--sand);border-radius:14px;padding:1.1rem;}
.rule table{width:100%;border-collapse:collapse;margin-top:.6rem;font-size:.93rem;}
/* Breite Tabellen scrollen in ihrem eigenen Kasten, statt die
   ganze Seite nach rechts zu schieben. */
.tabelle-rahmen{overflow-x:auto;-webkit-overflow-scrolling:touch;margin-top:.6rem;}
.tabelle-rahmen table{margin-top:0;min-width:100%;}
.tabelle-rahmen td,.tabelle-rahmen th{white-space:nowrap;}
@media(min-width:620px){.tabelle-rahmen td,.tabelle-rahmen th{white-space:normal;}}
.rule td,.rule th{border:1px solid var(--sand);padding:.45rem .6rem;text-align:left;vertical-align:top;}
.rule th{background:var(--cream-warm);font-family:var(--font-head);}
.ex-good{color:#14708B;font-weight:600;}
.ex-bad{color:var(--red);text-decoration:line-through;}
.satzbau{display:flex;flex-wrap:wrap;gap:.4rem;margin:.6rem 0;}
.satzbau .pos{background:var(--paper);border:1px solid var(--sand);border-radius:10px;padding:.4rem .7rem;font-size:.92rem;text-align:center;min-width:64px;}
.satzbau .pos b{display:block;font-size:.68rem;color:var(--ink-mute);text-transform:uppercase;letter-spacing:.05em;}
.satzbau .pos.hl{background:var(--yellow-soft);border-color:var(--yellow);}
.satzbau .pos.verb{background:var(--teal-soft);border-color:var(--teal);}
.block.mission{background:var(--ink);}
.mission{color:#fff;border-radius:var(--radius);padding:1.6rem;}
.mission .block-head{color:#fff;}
.mission p{color:#fff;}
.mission .bonus{background:rgba(255,255,255,.16);border-radius:10px;padding:.7rem .9rem;margin-top:.6rem;font-size:.96rem;color:#fff;}
.mission .bonus strong{color:#FFD24A;}
.teach{background:#FFFFFF;border:1px solid var(--sand);border-left:6px solid var(--teal);color:var(--ink);border-radius:var(--radius);padding:1.6rem;box-shadow:var(--shadow);}
.teach .block-head{color:var(--ink);}
.teach .lead{color:var(--ink-soft);}
.teach h4{font-family:var(--font-head);font-weight:700;margin:1rem 0 .35rem;color:var(--red);}
.teach ul{padding-left:1.1rem;font-size:.97rem;color:var(--ink);}
.teach li{margin:.3rem 0;}
.teach .time{display:inline-block;background:var(--teal);color:#063b35;border-radius:999px;padding:2px 10px;font-size:.78rem;font-weight:800;margin-right:.4rem;}
footer{text-align:center;color:var(--ink-mute);font-size:.85rem;margin-top:2rem;}
footer .mark{font-family:var(--font-head);font-weight:600;color:var(--ink);font-size:1rem;}
footer .mark .t{color:var(--teal);}
/* Neu: Bilder in den Aufwaermkarten. Ohne sie waren die
   Grammatikseiten die einzigen ganz unbebilderten Seiten. */
.vocab .kbild{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:10px;margin-bottom:.5rem;display:block;}
/* Freigestellte Figuren sind hochformatig. Sie werden nicht
   beschnitten, sondern ganz gezeigt — auf warmem Grund. */
.vocab .kbild.hoch{aspect-ratio:4/3;object-fit:contain;background:var(--cream-warm);}
/* Neu: ein grosses Bild in der Regel, damit die Regel einen Ort
   in der Welt bekommt und nicht nur eine Tabelle ist. */
.regelbild{margin:1.1rem 0 0;}
.regelbild img{width:100%;max-height:340px;object-fit:cover;border-radius:14px;border:1px solid var(--sand);display:block;}
.regelbild figcaption{font-size:.86rem;color:var(--ink-soft);margin-top:.45rem;text-align:center;}
/* Neu: der Weg zu den Aufgaben im Konto. */
.block.weiter{background:var(--cream-warm);text-align:center;}
.block.weiter .block-intro{max-width:520px;margin-left:auto;margin-right:auto;}
@media(max-width:560px){
  .match{grid-template-columns:1fr;}
  .satzbau .pos{min-width:0;flex:1 1 auto;}
  section.block{padding:1.3rem 1.1rem;}
}`;

const JS = `(function(){
  const tabs=[...document.querySelectorAll('nav.tabs a')];
  const map=tabs.map(a=>({a,sec:document.querySelector(a.getAttribute('href'))})).filter(x=>x.sec);
  if('IntersectionObserver' in window){
    const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){tabs.forEach(t=>t.classList.remove('active'));
      const m=map.find(x=>x.sec===e.target); if(m) m.a.classList.add('active');}});},{rootMargin:'-45% 0px -50% 0px'});
    map.forEach(x=>obs.observe(x.sec));
  }
  document.querySelectorAll('[data-quiz] .quiz-q').forEach(q=>{
    q.querySelectorAll('.quiz-opt').forEach(opt=>{opt.addEventListener('click',()=>{
      if(q.classList.contains('answered'))return; q.classList.add('answered');
      const correct=q.querySelector('.quiz-opt[data-correct]');
      if(opt.hasAttribute('data-correct')) opt.classList.add('correct');
      else { opt.classList.add('wrong'); if(correct) correct.classList.add('correct'); }
    });});
  });
  document.querySelectorAll('[data-fillgap]').forEach(box=>{
    const btn=box.querySelector('[data-check]'),score=box.querySelector('[data-score]'); if(!btn)return;
    btn.addEventListener('click',()=>{let ok=0;const sels=box.querySelectorAll('select[data-answer]');
      sels.forEach(s=>{s.classList.remove('ok','no');
        if(s.value===s.getAttribute('data-answer')){s.classList.add('ok');ok++;}else s.classList.add('no');});
      if(score) score.textContent=ok+' / '+sels.length+' richtig'+(ok===sels.length?' 🎉':'');});
  });
  document.querySelectorAll('[data-match]').forEach(box=>{let selLeft=null;
    box.querySelectorAll('.match-item').forEach(item=>{item.addEventListener('click',()=>{
      if(item.classList.contains('done'))return;
      const isLeft=item.hasAttribute('data-left');
      if(isLeft){box.querySelectorAll('.match-item.sel').forEach(s=>s.classList.remove('sel'));item.classList.add('sel');selLeft=item;return;}
      if(!selLeft)return;
      if(item.getAttribute('data-right')===selLeft.getAttribute('data-left')){
        item.classList.add('done');selLeft.classList.add('done');selLeft.classList.remove('sel');selLeft=null;
      } else {item.classList.add('no');setTimeout(()=>item.classList.remove('no'),500);}
    });});
  });
  document.querySelectorAll('[data-speak]').forEach(box=>{let cards=[];
    const data=box.querySelector('[data-speak-cards]'); try{cards=JSON.parse(data.textContent);}catch(e){}
    const card=box.querySelector('.card'),btn=box.querySelector('[data-draw]');
    if(btn)btn.addEventListener('click',()=>{if(!cards.length)return;
      card.textContent=cards[Math.floor(Math.random()*cards.length)];});
  });
})();`;

/* ---------- Seite zusammensetzen ---------- */

function seite(s, id) {
  const heute = new Date().toLocaleDateString('de-DE');
  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<link rel="manifest" href="/manifest.webmanifest">
<meta name="theme-color" content="#DD0000">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="do club">
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16.png">
<title>${attr(s.seitentitel || (s.titel + ' ' + s.hl))} | deutschoderwas Sprechclub</title>
<meta name="description" content="${attr(s.untertitel)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
${CSS}
</style>
</head>
<body>
<div class="wrapper">
${kopf(s)}
${hero(s)}
${tabs()}
${aufwaermen(s.aufwaermen)}
${regel(s.regel)}
${kontrast(s.kontrast)}
${quiz(s.quiz)}
${luecke(s.luecke)}
${zuordnen(s.zuordnen)}
${sprechen(s.sprechen)}
${weiter(s.weiter, id, s.stufe)}
${mission(s.mission)}
${lehrer(s.lehrer)}
  <footer>
    <div class="mark">deutsch<span class="t">oderwas</span></div>
    <p>Authentisches Deutsch für den Alltag · Erstellt mit ♥ für meine Sprechclub-Lernenden</p>
    <p>${sicher(s.titel)} ${sicher(s.hl)} · Grammatikclub · ${sicher(s.stufe)} · ${heute}</p>
  </footer>
</div>
<script>
${JS}
</script>
<script>
if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){});});}
</script>
</body>
</html>
`;
}

/* ---------- Ausführen ---------- */

const alle = JSON.parse(fs.readFileSync(QUELLE, 'utf8'));
const nurEines = process.argv[2];
const ids = nurEines ? [nurEines] : Object.keys(alle);

let gebaut = 0;
ids.forEach(id => {
  const s = alle[id];
  if (!s) { console.error('Unbekanntes Thema: ' + id); process.exitCode = 1; return; }

  /* Kontrolle vor dem Schreiben: fehlt ein Pflichtteil, wird nichts
     geschrieben. Eine halbe Seite ist schlimmer als keine. */
  const fehlt = ['datei', 'titel', 'hl', 'stufe', 'untertitel', 'aufwaermen', 'regel',
                 'kontrast', 'quiz', 'luecke', 'zuordnen', 'sprechen', 'mission', 'lehrer']
    .filter(k => !s[k]);
  if (fehlt.length) {
    console.error(id + ': es fehlen die Felder ' + fehlt.join(', ') + ' — nichts geschrieben.');
    process.exitCode = 1; return;
  }

  const html = seite(s, id);
  const ziel = path.join(WURZEL, s.datei);
  fs.writeFileSync(ziel, html, 'utf8');

  const bilder = (html.match(/(?:src|poster)="((?!http)[^"]+\.(?:webp|jpg|png))"/g) || []).length;
  console.log('geschrieben: ' + s.datei + '  (' + html.length + ' Zeichen, ' +
    (s.quiz.fragen || []).length + ' Quizfragen, ' +
    (s.luecke.saetze || []).length + ' Lücken, ' + bilder + ' Bilder)');
  gebaut++;
});

if (!nurEines) console.log('\nfertig: ' + gebaut + ' Seite(n)');
