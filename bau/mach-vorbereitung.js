/* ============================================================
   mach-vorbereitung.js — baut aus DERSELBEN Stunden-JSON die
   passende Vorbereitungsseite.

   Aufruf:  node mach-vorbereitung.js stunden/telefonieren-a2.json

   Warum aus derselben Datei: Vorbereitung und Live-Stunde muessen
   zusammenpassen. Wenn beide aus einer Quelle kommen, koennen sie
   gar nicht auseinanderlaufen — ein geaendertes Wort in der Stunde
   aendert es auch in der Vorbereitung.

   Was uebernommen wird:
     Wortschatz   -> die Woerter zum Vorlernen (mit Artikel)
     Grammatik    -> die Regel als Tabelle (aus kette und paaren)
     daten.gap    -> derselbe Lueckentext wie in der Stunde
     saetze       -> Redemittel und die Zuordnungsuebung
     daten.quiz   -> fuenf Fragen zum Selbsttest
     einstieg     -> die Fragen fuer das eigene Notizfeld

   Design und Verhalten stehen daneben:
     vorb-style.css   aus vorbereitung-buero-b1b2.html uebernommen
     vorb-motor.js    dasselbe, nur mit eigenem Speicherschluessel
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const quelle = process.argv[2];
if (!quelle) { console.error('Aufruf: node mach-vorbereitung.js <datei.json>'); process.exit(1); }

const hier   = __dirname + '/';
const wurzel = path.resolve(__dirname, '..');
const S = JSON.parse(fs.readFileSync(quelle, 'utf8'));

const fehler = [];
const esc  = t => String(t == null ? '' : t).replace(/&(?![a-zA-Z#0-9]+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const h    = t => String(t == null ? '' : t).replace(/&(?![a-zA-Z#0-9]+;)/g, '&amp;');
const attr = t => String(t == null ? '' : t).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const nurText = t => String(t || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

/* Der Zielname: aus Unterricht-ab-14-09/w01-a-teil1-….html wird
   Unterricht-ab-14-09/Vorbereitung/vorbereitung-w01-a-teil1-….html —
   so wie es die bestehenden Ordner schon machen. */
const ordner  = path.dirname(S.datei);
const basis   = path.basename(S.datei);
const zieldat = path.join(ordner, 'Vorbereitung', 'vorbereitung-' + basis);

/* ---------- kleine Helfer ---------- */
/* Kurze Erklaerung fuer ein Wort: bevorzugt das Feld "kurz",
   sonst der erste Satz des Tipps ohne Auszeichnung. */
function gloss(k) {
  if (k.kurz) return k.kurz;
  const t = nurText(k.tipp);
  const ende = t.search(/[.!?](\s|$)/);
  return ende > 0 ? t.slice(0, ende + 1) : t;
}
function abschnitt(id, klasse, kopf, hl, intro, inhalt) {
  return `<section class="block${klasse ? ' ' + klasse : ''}" id="${id}">\n` +
    `<h2 class="block-head">${h(kopf)}${hl ? ' <span class="hl">' + h(hl) + '</span>' : ''}</h2>\n` +
    (intro ? `<p class="block-intro">${h(intro)}</p>\n` : '') + inhalt + `</section>\n`;
}

/* ---------- 1 Wortschatz ---------- */
const karten = (S.wortschatz && S.wortschatz.karten) || [];
if (!karten.length) fehler.push('Kein Wortschatz in der Stunde — dann gibt es nichts vorzulernen');
const wortschatz = abschnitt('wortschatz', '', 'Der Wortschatz', 'zur Stunde',
  'Lern die Wörter mit Artikel. Danach kommen die Übungen.',
  `<div class="grid">\n` + karten.map(k => {
    const g = gloss(k);
    if (!g) fehler.push('Wortschatzkarte „' + k.wort + '“ hat keine kurze Erklärung');
    /* Eine Erklaerung, die nur das Wort wiederholt, hilft niemandem —
       genau das passiert, wenn "kurz" fehlt und der Tipp mit dem Wort
       selbst anfaengt. */
    const nackt = t => t.toLowerCase().replace(/[^\p{L}]/gu, '');
    if (g && nackt(g) === nackt(k.wort))
      fehler.push('Wortschatzkarte „' + k.wort + '“: die Erklärung wiederholt nur das Wort');
    if (g && g.length > 90)
      fehler.push('Wortschatzkarte „' + k.wort + '“: die Erklärung ist zu lang für die Vorbereitung');
    return `<div class="vocab"><div class="term">${h(k.art ? k.art + ' ' + k.wort : k.wort)}</div>` +
           `<div class="gloss">${h(g)}</div></div>`;
  }).join('\n') + `\n</div>\n` +
  (S.wortschatz.spiel ? `<div class="note info">${h(S.wortschatz.spiel.text)}</div>\n` : ''));

/* ---------- 2 Grammatik als Regeltabelle ---------- */
const G = S.grammatik;
let grammatik = '';
if (G) {
  let tab = '';
  /* Die Paare aus der Stunde sind schon richtig/falsch — genau das
     Format, das eine Regeltabelle braucht. */
  const paare = [].concat(...(G.bloecke || []).map(b => b.paare || []));
  if (paare.length) {
    tab = `<div class="rule"><table>\n<tr><th>So nicht</th><th>So ist es richtig</th></tr>\n` +
      paare.map(p => `<tr><td>${h(p.no)}</td><td><strong>${h(p.ja)}</strong></td></tr>`).join('\n') +
      `\n</table></div>\n`;
  } else if (G.kette && G.kette.length) {
    tab = `<div class="rule"><table>\n<tr><th>Schritt</th><th>Beispiel</th></tr>\n` +
      G.kette.map(k => `<tr><td>${h(k.rolle)}</td><td><strong>${h(k.bsp)}</strong></td></tr>`).join('\n') +
      `\n</table></div>\n`;
  }
  /* Der Lueckentext ist derselbe wie in der Stunde — bewusst:
     wer ihn vorher einmal gemacht hat, kann in der Stunde mitreden. */
  const gap = (S.daten && S.daten.gap) || [];
  let luecken = '';
  if (gap.length) {
    luecken = `<p style="margin:.5rem 0;font-weight:600;">✍️ Setz das passende Wort ein:</p>\n<div data-fillgap>\n` +
      gap.map((g, i) => {
        const teile = String(g.t).split('___');
        const opts = ['<option></option>'].concat(g.o.map(o => `<option>${h(o)}</option>`)).join('');
        return `<div class="gap-item">${i + 1}. ${h(teile[0])}` +
               `<select data-answer="${attr(g.a)}">${opts}</select>${h(teile[1] || '')}</div>`;
      }).join('\n') +
      `\n<div style="margin-top:.9rem;"><button class="btn" data-check>Überprüfen</button><span class="score" data-score></span></div>\n</div>\n`;
  }
  /* Der Intro-Text traegt Auszeichnung (<b>der</b> wird zu <b>den</b>).
     Ohne sie liest sich der Satz falsch, deshalb bleibt sie stehen. */
  grammatik = abschnitt('regel', 'alt', nurText(G.h2), nurText(G.hl), G.intro, tab + luecken);
}

/* ---------- 3 Redemittel ---------- */
const SA = S.saetze;
let redemittel = '';
let gruppen = [];
if (SA) {
  /* Die a2-Spalte ist die einfachere — die nimmt die Vorbereitung,
     damit auch der schwaechere Teil der Gruppe vorbereitet ankommt. */
  gruppen = SA.a2 || SA.b1 || [];
  redemittel = abschnitt('redemittel', '', 'Redemittel —', 'die Sätze für die Stunde',
    SA.ssub,
    `<div class="grid">\n` + gruppen.map(g =>
      `<div class="vocab"><div class="term">${h(nurText(g.titel))}</div>` +
      `<div class="gloss">${g.chips.map(c => '„' + h(c) + '“').join(' · ')}</div></div>`).join('\n') +
    `\n</div>\n` + (SA.tipp ? `<div class="note tip">${h(SA.tipp.text)}</div>\n` : ''));
}

/* ---------- 4 Quiz (fuenf Fragen) ---------- */
const quizAlle = (S.daten && S.daten.quiz) || [];
const quizAuswahl = quizAlle.slice(0, 5);
let quiz = '';
if (quizAuswahl.length) {
  quiz = abschnitt('quiz', 'alt', 'Selbsttest:', 'sitzt es schon?',
    'Fünf Fragen. Tippe auf deine Antwort — die Erklärung kommt sofort.',
    `<div data-quiz>\n` + quizAuswahl.map(q => {
      if (typeof q.c !== 'number' || !q.o[q.c]) fehler.push('Quizfrage ohne gültige Lösung');
      return `<div class="quiz-q"><div class="qtext">${h(q.q)}</div>\n<div class="quiz-opts">` +
        q.o.map((o, i) => `<div class="quiz-opt"${i === q.c ? ' data-correct' : ''}>${h(o)}</div>`).join('') +
        `</div>\n<div class="quiz-exp">💡 ${h(q.e)}</div></div>`;
    }).join('\n') + `\n</div>\n`);
}

/* ---------- 5 Zuordnen: Satz zu Funktion ---------- */
let zuordnen = '';
if (gruppen.length >= 3) {
  /* Links ein Beispielsatz, rechts wofuer er da ist. Die Funktion
     steht schon im Titel der Satzgruppe — nur das Emoji muss weg. */
  const links = gruppen.map((g, i) =>
    `<div class="match-item" data-left="${i + 1}">„${h(g.chips[0])}“</div>`);
  const rechtsRoh = gruppen.map((g, i) => ({
    n: i + 1,
    t: nurText(g.titel).replace(/^\d+\s*·\s*/, '').replace(/^[^\p{L}]+/u, '').trim()
  }));
  /* gemischt, sonst stehen die Paare direkt nebeneinander */
  const rechts = rechtsRoh.slice().sort((a, b) => a.t.localeCompare(b.t, 'de'))
    .map(x => `<div class="match-item" data-right="${x.n}">${h(x.t)}</div>`);
  zuordnen = abschnitt('zuordnen', '', 'Satz ↔', 'Funktion',
    'Tippe links einen Satz an, dann rechts, wofür du ihn benutzt.',
    `<div class="match" data-match>\n<div><h4>Das sagst du</h4>\n` + links.join('\n') +
    `\n</div>\n<div><h4>Wofür</h4>\n` + rechts.join('\n') + `\n</div>\n</div>\n`);
}

/* ---------- 6 Jetzt du: Notizfelder ---------- */
const ein = (S.einstieg && S.einstieg[0]) || {};
const eigeneFragen = (ein.fragenA2 || ein.fragen || []).slice(0, 3);
let schreiben = '';
if (eigeneFragen.length) {
  schreiben = abschnitt('schreiben', 'alt', 'Jetzt du:', 'vorbereitet in die Stunde',
    'Wird automatisch in deinem Browser gespeichert. 💾 Mit diesen drei Sätzen kannst du sofort mitreden.',
    `<div class="notewrap">\n` + eigeneFragen.map((f, i) =>
      `<label>${i + 1}. ${h(f)}</label>\n` +
      `<textarea class="notefield" data-save="f${i + 1}" placeholder="Dein Satz …"></textarea>`).join('\n') +
    `\n<div class="savebar"><button class="btn dark" data-savebtn>💾 Speichern</button>` +
    `<span class="savestate" data-savestate>Noch nichts gespeichert.</span></div>\n</div>\n`);
}

/* ---------- Sprungleiste ---------- */
const marken = [];
if (wortschatz) marken.push(['wortschatz', '🧠 Wortschatz']);
if (grammatik)  marken.push(['regel',      '🧩 Regel']);
if (redemittel) marken.push(['redemittel', '🔑 Redemittel']);
if (quiz)       marken.push(['quiz',       '✅ Selbsttest']);
if (zuordnen)   marken.push(['zuordnen',   '🧩 Zuordnen']);
if (schreiben)  marken.push(['schreiben',  '📝 Vorbereiten']);
const nav = `<nav class="tabs">\n` +
  marken.map(([id, name]) => `<a href="#${id}">${name}</a>`).join('') + `\n</nav>\n`;

/* ---------- Zusammenbau ---------- */
const untertitel = S.vorbUntertitel ||
  ('Die Wörter, die Regel und die Sätze aus der Stunde — vorher einmal durchgegangen. ' +
   'Zwölf Minuten, und du kommst vorbereitet in den Unterricht.');

const html = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${esc(S.titel)} ${esc(S.hl || '')} – Vorbereitung · ${esc(S.stufe)} | deutschoderwas</title>
<!--
  deutschoderwas · Vorbereitung zu: ${esc(S.titel)} ${esc(S.hl || '')}
  Termin: ${esc(S.termin || '')}
  Erzeugt von bau/mach-vorbereitung.js aus ${path.basename(quelle)} —
  aus derselben Datei wie die Stunde selbst. Nicht von Hand aendern.
-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
${fs.readFileSync(hier + 'vorb-style.css', 'utf8')}
</style>
</head>
<body data-speicher="dow-vorb-${attr(basis.replace(/\.html$/, ''))}">
<div class="wrapper">

  <div class="eyebrow">deutschoderwas · Vorbereitung vor dem Unterricht</div>
  <div class="title-wrap">
    <h1 class="title">${h(S.titel)}${S.hl ? ' <span class="hl">' + h(S.hl) + '</span>' : ''}</h1>
    <p class="subtitle">${h(untertitel)}</p>
    <span class="level-badge">${h(S.stufe)}</span>
  </div>

${nav}
${wortschatz}
${grammatik}
${redemittel}
${quiz}
${zuordnen}
${schreiben}
  <footer style="text-align:center;color:var(--ink-mute);font-size:.85rem;margin:2.5rem 0 1rem;">
    <strong>deutschoderwas</strong> · Vorbereitung · ${h(S.fuss)}
  </footer>

</div>
<script>
${fs.readFileSync(hier + 'vorb-motor.js', 'utf8')}
</script>
</body>
</html>
`;

/* ---------- Kontrollen, bevor etwas geschrieben wird ---------- */
const sichtbar = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '')
  .replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, ' ');
const auf = (sichtbar.match(/„/g) || []).length, zu = (sichtbar.match(/“/g) || []).length;
if (auf !== zu) fehler.push('Anführungszeichen: ' + auf + ' mal „ , aber ' + zu + ' mal “');
if (marken.length < 4) fehler.push('Nur ' + marken.length + ' Abschnitte — das ist zu wenig für eine Vorbereitung');
((S.daten && S.daten.gap) || []).forEach((g, i) => {
  if (g.o.indexOf(g.a) < 0) fehler.push('Lücke ' + (i + 1) + ': die Lösung steht nicht unter den Optionen');
});
/* Die Zuordnung muss eindeutig sein: zweimal dieselbe Funktion rechts
   waere nicht loesbar. */
const rechtsTexte = gruppen.map(g => nurText(g.titel).replace(/^\d+\s*·\s*/, '').replace(/^[^\p{L}]+/u, '').trim());
if (new Set(rechtsTexte).size !== rechtsTexte.length)
  fehler.push('Zuordnen: zwei Satzgruppen heißen gleich — dann ist die Übung nicht eindeutig');

if (fehler.length) {
  console.error('Nicht geschrieben — erst das hier:');
  fehler.forEach(f => console.error('  · ' + f));
  process.exit(1);
}

fs.mkdirSync(path.join(wurzel, ordner, 'Vorbereitung'), { recursive: true });
fs.writeFileSync(path.join(wurzel, zieldat), html);
console.log('geschrieben: ' + zieldat + '  (' + html.length + ' Zeichen, ' +
  marken.length + ' Abschnitte, ' + karten.length + ' Wörter)');
