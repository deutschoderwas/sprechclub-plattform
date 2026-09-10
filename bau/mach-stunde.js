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

/* ---------- Woerter im Text markieren ----------
   Julia will keine Wortschatzliste mehr, aber sehr wohl, dass
   schwierige und wichtige Woerter auffallen — dort, wo sie stehen.

   Die Woerter dafuer sind schon da. Sie kamen aus den zwei
   Abschnitten, die beim Umbau rausgeflogen sind:

     wortschatz.karten  die zwoelf Woerter der Stunde, mit Artikel,
                        Kurzbedeutung und Beispielsatz  -> wichtig
     konzepte.dreier    die drei Begriffe, die staendig verwechselt
                        werden, mit Erklaerung          -> schwer

   Beides steht jetzt nicht mehr als Liste am Anfang, sondern als
   Markierung mitten im Satz: antippen zeigt Bedeutung und Beispiel.
   Wer das Wort schon kennt, liest darueber hinweg.

   Zwei Regeln halten die Seite ruhig:
     · jedes Wort genau einmal — dort, wo man ihm zuerst begegnet
     · Markierungen ueberschneiden sich nie
   Ohne die erste Regel steht in der Beschwerde-Stunde „Reklamation"
   siebenmal angestrichen, und „Verspaetung" zweimal direkt
   hintereinander — dann sieht man nichts mehr. Einmal reicht: wer
   das Wort nachgeschlagen hat, erkennt es beim zweiten Mal. */

const MARKEN = [];
const markZahl = {};
const HOECHSTENS = 1;

function ohneArtikel(w) { return String(w || '').replace(/^(der|die|das)\s+/i, '').trim(); }
function artikelVon(w)  { const m = String(w || '').match(/^(der|die|das)\s/i); return m ? m[1].toLowerCase() : ''; }
function fluchtRegex(w) { return String(w).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function markenSammeln() {
  ((S.wortschatz && S.wortschatz.karten) || []).forEach(k => {
    const wort = ohneArtikel(nurText(k.wort));
    if (wort.length < 4) return;
    MARKEN.push({ wort, art: (k.art || artikelVon(nurText(k.wort)) || ''), grad: 'wichtig',
                  kurz: nurText(k.kurz || k.tipp || ''), bsp: nurText(k.bsp || '') });
  });
  ((S.konzepte && S.konzepte.dreier) || []).forEach(k => {
    const wort = ohneArtikel(nurText(k.wort));
    if (wort.length < 4) return;
    MARKEN.push({ wort, art: artikelVon(nurText(k.wort)), grad: 'schwer',
                  kurz: nurText(k.was || ''), bsp: nurText(k.bsp || '') });
  });
  /* Das laengste Wort zuerst, sonst frisst „Garantie" den Anfang von
     „Garantiefall" und der Rest bleibt unmarkiert stehen. */
  MARKEN.sort((a, b) => b.wort.length - a.wort.length);
}

/* Deutsche Endungen, die an ein Nomen oder Verb noch drankommen
   koennen. Mehr nicht — „Frist" soll „Fristen" finden, aber nicht
   „fristlos". */
const ENDUNG = '(?:en|e|es|s|n|er|em|ern)?';
const BUCHSTABE = 'A-Za-zÄÖÜäöüßÀ-ÿ';

function markiere(text) {
  if (!text || !MARKEN.length) return text;
  /* Nur die Stuecke zwischen den Tags anfassen: in der JSON steht
     Auszeichnung wie <b>, und in einem Attribut hat eine Markierung
     nichts zu suchen. */
  return String(text).split(/(<[^>]+>)/).map(teil => {
    if (teil.charAt(0) === '<') return teil;
    const treffer = [];
    MARKEN.forEach(m => {
      if ((markZahl[m.wort] || 0) >= HOECHSTENS) return;
      const re = new RegExp('(?:^|[^' + BUCHSTABE + '])(' + fluchtRegex(m.wort) + ENDUNG + ')(?![' + BUCHSTABE + '])', 'i');
      const t = re.exec(teil);
      if (!t) return;
      const von = t.index + t[0].length - t[1].length;
      /* Keine zwei Markierungen uebereinander. */
      if (treffer.some(x => von < x.bis && von + t[1].length > x.von)) return;
      markZahl[m.wort] = (markZahl[m.wort] || 0) + 1;
      treffer.push({ von, bis: von + t[1].length, wort: t[1], m });
    });
    if (!treffer.length) return teil;
    treffer.sort((a, b) => b.von - a.von);
    let s = teil;
    treffer.forEach(t => {
      s = s.slice(0, t.von)
        + `<b class="wm ${t.m.grad}" tabindex="0" role="button" aria-label="Bedeutung von ${attr(t.wort)}"`
        + ` data-wort="${attr((t.m.art ? t.m.art + ' ' : '') + t.m.wort)}"`
        + ` data-kurz="${attr(t.m.kurz)}"`
        + ` data-bsp="${attr(t.m.bsp)}">${t.wort}</b>`
        + s.slice(t.bis);
    });
    return s;
  }).join('');
}

/* h() mit Markierung — nur dort, wo die Sprache benutzt wird:
   Beispielsaetze, Dialogzeilen, Rollenspiele.

   Nicht im Quiz und nicht im Lueckentext, dort waere die Bedeutung
   die halbe Loesung. Und nicht in Ankommen und Debatte: das sind
   Anweisungen, kein Lernstoff. In der Partikel-Stunde stand in der
   Ankommen-Frage „Welche dieser Woertchen benutzt du schon — doch,
   mal, ja, eben, halt?" — eine Aufzaehlung der Woerter selbst. Dort
   angestrichen erklaerte die Karte ein Wort, das gar nicht in
   Gebrauch war, und verbrauchte das Zeichen fuer den Dialog, wo es
   wirklich vorkommt. */
const hm = t => markiere(h(t));

/* Bildpfade stehen in der JSON immer vom Stammordner aus (amanda/…,
   vok-bild/…) — so wie sie auch geprueft werden. Die fertige Seite liegt
   aber in einem Unterordner, und im Browser zaehlt der Ordner der Seite:
   aus amanda/x.webp wuerde /Unterricht-ab-07-09/amanda/x.webp und damit
   ein 404. Deshalb bekommt jeder Pfad hier so viele ../ vorgesetzt, wie
   die Zieldatei tief liegt. Das funktioniert online und auch, wenn man
   die Datei einfach doppelklickt. */
const tiefe = path.dirname(S.datei).split('/').filter(x => x && x !== '.').length;
const hoch  = '../'.repeat(tiefe);
function bild(p) { if (!p) return p; bilder.add(p); return hoch + p; }

/* Die 90-Sekunden-Bilder gehen nicht durch die Vorlage, sondern als
   Daten an den Motor — die muessen genauso umgeschrieben werden. */
if (S.daten && Array.isArray(S.daten.w90)) {
  S.daten.w90 = S.daten.w90.map(x => {
    if (x.b) { bilder.add(x.b); return Object.assign({}, x, { b: hoch + x.b }); }
    return x;
  });
}

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
    /* hoch:true fuer freigestellte, hochformatige Figuren — sonst
       schneidet der quadratische Kartenschnitt die Geste ab. */
    const kopf = k.bild
      ? `<img src="${attr(bild(k.bild))}" alt="${attr(k.alt || k.wort)}" loading="lazy">`
      : `<div class="bem" role="img" aria-label="${attr(k.wort)}">${h(k.emoji)}</div>`;
    const art = k.art ? `<span class="art">${h(k.art)}</span> ` : '';
    s += `<div class="bcard${k.hoch ? ' hoch' : ''}">${kopf}<div class="bb">` +
         `<div class="bw">${art}${h(k.wort)}</div>` +
         `<div class="bex">„${h(k.bsp)}“</div>` +
         `<div class="bti">💡 ${h(k.tipp)}</div>` +
         sprechKnopf(k.say || k.bsp) + `</div></div>\n`;
  });
  s += `</div>\n` + tipp(w.spiel) + `</section>\n`;
  return s;
}

/* ---------- 1b Wiederholung (nur in Teil 2) ----------
   Der Plan verspricht: "Teil 2 beginnt mit einer kurzen Wiederholung,
   damit auch mitkommt, wer Teil 1 verpasst hat." Genau das steht hier:
   die Woerter aus Teil 1 als Chips, der Satzbau von Teil 1 als
   Merkkasten, und drei Fragen, mit denen sofort gesprochen wird. */
function wiederholung(w) {
  if (!w) return '';
  let s = `<section class="section" id="wiederholung">\n` + kopfzeile(w.h2, w.hl, w.ssub);
  if (w.woerter && w.woerter.length) {
    s += `<div class="gchips">\n` + w.woerter.map(c => `<span class="gchip">${h(c)}</span>`).join('') + `\n</div>\n`;
  }
  (w.merk || []).forEach(m => {
    s += `<div class="rmcard"><b>${h(m.titel)}</b>\n` +
      `<div class="bsp"><span class="wer">${h(m.label || 'So ging der Satz')}</span>${h(m.bsp)}</div>\n` +
      sprechKnopf(m.say || m.bsp) + `</div>\n`;
  });
  if (w.fragen) s += fragenListe(w.fragen);
  if (w.fragenA2) s += fragenListe(w.fragenA2, 'nur-a2');
  if (w.fragenB1) s += fragenListe(w.fragenB1, 'nur-b1');
  s += tipp(w.tipp) + `</section>\n`;
  return s;
}

/* ---------- 2 Konzepte (Ja/Nein-Karten und Dreier) ---------- */
function konzepte(k) {
  if (!k) return '';
  let s = `<section class="section" id="konzepte">\n` + kopfzeile(k.h2, k.hl, k.ssub);
  /* Normalerweise erst die Gegensatzpaare, dann die Dreierkarten.
     Steht zuerst:"dreier" in der JSON, wird getauscht — dann naemlich,
     wenn die Ueberschrift die drei Karten ankuendigt und der Leser sie
     sonst erst nach den Paaren zu sehen bekaeme. */
  const dreierZuerst = k.zuerst === 'dreier';
  const dreierBlock = () => {
    if (!k.dreier || !k.dreier.length) return '';
    const toene = ['gelb', 'blau', 'ja'];
    return `<div class="gdrei">\n` + k.dreier.map((d, i) =>
      `<div class="gk ${toene[i % 3]}"><span class="gem2">${h(d.emoji)}</span>` +
      `<div class="gmw">${h(d.wort)}</div><div class="gmb">${h(d.was)}</div>` +
      `<div class="gmx">${h(d.bsp)}</div></div>`).join('\n') + `\n</div>\n`;
  };
  if (dreierZuerst) s += dreierBlock();
  (k.paare || []).forEach(p => {
    s += `<div class="gpaar">\n` +
      `<div class="gk ja"><div class="gkl">✅ ${h(p.jaLabel || 'Richtig')}</div><div class="gsatz">${h(p.ja)}</div>` +
      (p.jaWarum ? `<div class="bsp"><span class="wer">${h(p.jaWarumLabel || 'Merksatz')}</span>${h(p.jaWarum)}</div>` : '') + `</div>\n` +
      `<div class="gk no"><div class="gkl">❌ ${h(p.noLabel || 'So nicht')}</div><div class="gsatz">${h(p.no)}</div>` +
      (p.noWarum ? `<div class="bsp"><span class="wer">${h(p.noWarumLabel || 'Warum')}</span>${h(p.noWarum)}</div>` : '') + `</div>\n</div>\n`;
  });
  if (!dreierZuerst) s += dreierBlock();
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
        `<div class="bsp"><span class="wer">So klingt es</span>${hm(g.bsp)}</div>\n` +
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
      `<div class="dsit">${hm(dl.situation)}</div>\n`;
    dl.zeilen.forEach(z => {
      const wer = z.wer === 'b' ? 'b' : 'a';
      if (wer === 'b' && !z.cue) fehler.push('Dialog ' + (n + 1) + ': eine B-Zeile ohne Regieanweisung — in Runde 2 steht die Person dann ohne Hilfe da');
      s += `<div class="dline ${wer}"><div class="dwho ${wer}">${wer.toUpperCase()}</div>` +
        `<div class="dtxt">${hm(z.text)}</div>` +
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
      `<p style="margin:.4rem 0;font-size:.95rem;color:var(--ink-soft);">${hm(x.situation)}</p>\n` +
      (x.a2 ? `<div class="nur-a2">` + x.a2.map(c => `<span class="rm">${h(c)}</span>`).join('') + `</div>\n` : '') +
      (x.b1 ? `<div class="nur-b1">` + x.b1.map(c => `<span class="rm">${h(c)}</span>`).join('') + `</div>\n` : '') +
      `<div class="bsp"><span class="wer">✅ Eine gute Runde enthält</span>${hm(x.gut)}</div>\n</div>\n`;
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
  /* w90 ist oben schon umgeschrieben und eingesammelt — hier nur noch lesen. */
  const erste = (S.daten.w90 && S.daten.w90[0]) || {};
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
/* ---------- 0 Ablauf ----------
   Der Sprechclub sitzt zu sechst, die Stunde hat sechzig Minuten.
   Vorher stand das nirgends: die Seite zeigte zehn Abschnitte, aber
   nicht, wer wann spricht. In der Stunde kam man nie durch, und
   ausgerechnet die Stillen kamen gar nicht dran.

   Diese Tafel sagt es fuer jeden Abschnitt: wie lange, in welcher
   Aufstellung, und wer redet. Drei Paare oder zwei Dreiergruppen —
   sechs teilt sich gut. Gerechnet ist so, dass jede Person in der
   Stunde auf ungefaehr zwoelf Minuten eigenes Sprechen kommt. */
const TAKT = [
  { id:'ankommen',    min:'0–4',   z:'👋', t:'Ankommen',
    w:'Eine Frage, reihum ein Satz. Kein Kommentar dazwischen.', wer:'alle sechs, je etwa 30 Sekunden' },
  { id:'saetze',      min:'4–12',  z:'💬', t:'Sätze für heute',
    w:'Die Sätze laut lesen, dann zwei selbst bauen.', wer:'erst gemeinsam, dann zwei Freiwillige' },
  { id:'dialoge',     min:'12–20', z:'🎬', t:'Dialog',
    w:'Zwei lesen vor. Dann alle gleichzeitig, danach Rollentausch.', wer:'drei Paare' },
  { id:'ueben',       min:'20–27', z:'✅', t:'Üben',
    w:'Quiz und Lücken zusammen am Bildschirm.', wer:'reihum, jede Person eine Aufgabe' },
  { id:'challenge',   min:'27–33', z:'⏱️', t:'90 Sekunden',
    w:'Einer spricht, der andere hakt die Zielwörter ab. Dann Tausch.', wer:'drei Paare, zwei Runden' },
  { id:'debatte',     min:'33–45', z:'⚖️', t:'Debatte',
    w:'Drei gegen drei. Zwei Minuten sammeln, dann vier Wortmeldungen je Seite.', wer:'zwei Dreiergruppen' },
  { id:'rollenspiele',min:'45–56', z:'🎭', t:'Rollenspiel',
    w:'Zwei Durchgänge, dazwischen Rollentausch.', wer:'drei Paare' },
  { id:'abschluss',   min:'56–60', z:'🎯', t:'Abschluss',
    w:'Ein Satz pro Person: Was nimmst du mit?', wer:'alle sechs' }
];

function ablauf() {
  let s = `<section class="section" id="ablauf">\n`
    + kopfzeile('Sechzig Minuten,', 'sechs Leute', 'So läuft die Stunde. Jede Zeile sagt, wie lange, in welcher Aufstellung und wer spricht.')
    + `<div class="takt">\n`;
  TAKT.forEach(x => {
    s += `<div class="takt-z"><span class="takt-m">${h(x.min)}</span>`
       + `<span class="takt-z2">${x.z}</span>`
       + `<div class="takt-t"><b>${h(x.t)}</b><span>${h(x.w)}</span><em>${h(x.wer)}</em></div></div>\n`;
  });
  s += `</div>\n`
    + tipp({ text: 'Wer zu fünft oder zu siebt ist: bei fünf machen eine Dreiergruppe und ein Paar den Dialog, '
           + 'bei sieben spricht in den Paarphasen eine Dreiergruppe — dort dauert jede Runde eine Minute länger.' })
    + `</section>\n`;
  return s;
}

/* Eine schmale Zeile am Kopf eines Abschnitts: Zeit und Aufstellung.
   Dieselbe Angabe wie in der Tafel, nur dort, wo man sie braucht. */
function regie(id) {
  const x = TAKT.filter(t => t.id === id)[0];
  if (!x) return '';
  return `<div class="regie"><span>${h(x.min)} Min</span><b>${h(x.wer)}</b></div>\n`;
}

/* ---------- 0b Ankommen ----------
   Der alte Einstieg begann mit einem grossen Bild und drei Fragen
   wie „Was bringt mehr: freundlich bleiben oder Druck machen?".
   Das sind gute Fragen — aber nicht in Minute eins, kalt, auf
   Deutsch, vor fuenf anderen. Sie stehen jetzt in der Debatte, wo
   sie nach einer halben Stunde Anlauf hingehoeren.

   Hier steht eine Frage, die jeder sofort beantworten kann, und
   der Auftrag dazu: ein Satz, reihum, ohne Kommentar. */
function ankommen(S) {
  const eig = S.ankommen;
  let frage = eig && eig.frage;
  if (!frage) {
    /* Die A2-Fassung ist die konkrete: „Hast du dich schon einmal
       beschwert?" statt „Wann lohnt sich der Aufwand nicht mehr?" */
    (S.einstieg || []).forEach(x => {
      if (!frage && x.fragenA2 && x.fragenA2.length) frage = x.fragenA2[0];
    });
    (S.einstieg || []).forEach(x => {
      if (!frage && x.fragen && x.fragen.length) frage = x.fragen[0];
    });
  }
  if (!frage) return '';
  const zweit = (eig && eig.zweite) ||
    (S.einstieg || []).map(x => (x.fragenA2 || [])[1]).filter(Boolean)[0] || '';
  return `<section class="section" id="ankommen">\n`
    + kopfzeile('Erst mal', 'ankommen', 'Eine Frage, ein Satz pro Person. Reihum, ohne Kommentar dazwischen — das dauert genau vier Minuten.')
    + regie('ankommen')
    + `<div class="ank">${h(frage)}</div>\n`
    + (zweit ? `<div class="ank zweit"><span>Wenn noch Zeit ist:</span>${h(zweit)}</div>\n` : '')
    + tipp({ text: 'Antworte in einem Satz. Wer nicht weiterweiß, fängt mit „Bei mir war das so: …“ an — der Rest kommt dann von allein.' })
    + `</section>\n`;
}

/* ---------- 8 Debatte ----------
   Neu in der Stunde. Drei gegen drei, damit alle sechs reden muessen
   und niemand sich hinter der Gruppe verstecken kann. Die Fragen sind
   die, die frueher am Anfang standen — abstrakt, streitbar, und nach
   einer halben Stunde Wortschatz und Dialog genau richtig. */
function debatte(S) {
  const eig = S.debatte;
  let fragen = (eig && eig.fragen) || [];
  if (!fragen.length) {
    (S.einstieg || []).forEach(x => {
      (x.fragenB1 || []).forEach(f => fragen.push(f));
    });
  }
  if (!fragen.length) {
    (S.einstieg || []).forEach(x => { (x.fragen || []).slice(1).forEach(f => fragen.push(f)); });
  }
  if (!fragen.length) return '';
  const these = (eig && eig.these) || fragen[0];
  const rest = fragen.filter(f => f !== these);

  const proSaetze = (eig && eig.pro) || [];
  const conSaetze = (eig && eig.con) || [];

  let s = `<section class="section" id="debatte">\n`
    + kopfzeile('Drei gegen', 'drei', 'Zwei Gruppen, eine Frage. Zwei Minuten sammeln, dann spricht jede Seite viermal — abwechselnd.')
    + regie('debatte')
    + `<div class="deb-these">${h(these)}</div>\n`;

  s += `<div class="deb-seiten">`
    + `<div class="deb-s pro"><b>Gruppe A · dafür</b>`
    + (proSaetze.length
        ? `<ul>` + proSaetze.map(x => `<li>${h(x)}</li>`).join('') + `</ul>`
        : `<p>Sammelt zwei Gründe und ein Beispiel aus eurem Alltag.</p>`)
    + `</div>`
    + `<div class="deb-s con"><b>Gruppe B · dagegen</b>`
    + (conSaetze.length
        ? `<ul>` + conSaetze.map(x => `<li>${h(x)}</li>`).join('') + `</ul>`
        : `<p>Sammelt zwei Gegengründe und einen Fall, in dem es schiefgeht.</p>`)
    + `</div></div>\n`;

  s += `<div class="deb-mittel"><b>Sätze, die eine Debatte tragen</b><div class="deb-chips">`
    + ['Ich sehe das anders, weil …',
       'Da stimme ich zu, aber …',
       'Genau das ist der Punkt: …',
       'Das mag sein — trotzdem …',
       'Wenn das stimmt, warum dann …?',
       'Ich bleibe dabei: …'].map(x => `<span>${h(x)}</span>`).join('')
    + `</div></div>\n`;

  if (rest.length) {
    s += `<div class="deb-mehr"><b>Wenn die erste Frage durch ist</b>`
      + `<ul>` + rest.map(f => `<li>${h(f)}</li>`).join('') + `</ul></div>\n`;
  }

  return s + tipp({ art:'teal', text: 'Jede Wortmeldung beginnt mit einem der Sätze oben. Das klingt am Anfang steif — '
                  + 'und ist genau das, was in der Prüfung und in der Besprechung zählt.' })
           + `</section>\n`;
}

/* ---------- 9 Abschluss ---------- */
function abschluss() {
  return `<section class="section" id="abschluss">\n`
    + kopfzeile('Zum', 'Schluss', 'Vier Minuten, sechs Sätze.')
    + regie('abschluss')
    + `<div class="ank">Ein Satz von jedem: Welchen Satz aus heute nimmst du mit — und wo wirst du ihn brauchen?</div>\n`
    + `</section>\n`;
}

function nimm(id, name, html) { if (html) abschnitte.push({ id, name, html }); }

/* Die Reihenfolge ist die Stunde selbst, nicht mehr eine Sammlung
   von Material. Sie folgt der Tafel in ablauf().

   Zwei Abschnitte sind rausgeflogen:

     Wortschatz  — acht Bilder und zwoelf Karten, die in der Stunde
                   nie drankamen. Die Woerter kommen jetzt dort vor,
                   wo sie gebraucht werden: im Dialog, in den Saetzen
                   und in den 90 Sekunden. Im Lernbereich stehen sie
                   ohnehin als Uebung.
     Konzepte    — die Begriffstafel („Womit stehst du da?"). Gute
                   Landeskunde, aber in einer Sprechstunde spricht
                   dabei niemand.

   Die Daten dazu bleiben in der JSON-Datei stehen. Wer sie zurueck
   will, holt sie mit zwei Zeilen zurueck — geloescht ist nichts. */
markenSammeln();
nimm('ablauf',       '🎬 Ablauf',        ablauf());
nimm('ankommen',     '👋 Ankommen',      ankommen(S));
nimm('wiederholung', '🔁 Wiederholung',  S.wiederholung ? wiederholung(S.wiederholung) : '');
nimm('saetze',       '💬 Sätze',         S.saetze ? saetze(S.saetze) : '');
nimm('dialoge',      '🎬 Dialog',        S.dialoge ? dialoge(S.dialoge) : '');
nimm('grammatik',    '🧩 Grammatik',     S.grammatik ? grammatik(S.grammatik) : '');
nimm('ueben',        '✅ Üben',          ((S.daten.quiz && S.daten.quiz.length) || (S.daten.gap && S.daten.gap.length)) ? ueben(S.ueben) : '');
nimm('challenge',    '⏱️ 90 Sekunden',   (S.daten.w90 && S.daten.w90.length) ? challenge(S.challenge) : '');
nimm('debatte',      '⚖️ Debatte',       debatte(S));
nimm('rollenspiele', '🎭 Rollenspiel',   S.rollenspiele ? rollenspiele(S.rollenspiele) : '');
nimm('hausaufgabe',  '📮 Hausaufgabe',   S.hausaufgabe ? hausaufgabe(S.hausaufgabe) : '');
nimm('abschluss',    '🎯 Abschluss',     abschluss());

/* erster Abschnitt ist beim Laden markiert */
const nav = `<nav class="tabs">\n` + abschnitte.map((a, i) =>
  `<a class="tab${i ? '' : ' active'}" href="#${a.id}">${a.name}</a>`).join('\n') + `\n</nav>\n`;

/* Der Umschalter und die Sprungleiste sitzen in derselben klebenden
   Zeile. Vorher klebten sie einzeln uebereinander: zusammen 113 von
   844 Pixeln auf dem Handy, jede achte Zeile der Stunde dauerhaft
   verdeckt. Der erklaerende Satz zum Niveau steht jetzt darueber im
   Text — man liest ihn einmal, er muss nicht mitwandern. */
const nivHinweis = S.niveau
  ? `<p class="niv-wie">${h(S.niveau.hinweis || 'Gleiches Thema, andere Sätze. Wechsle jederzeit — probier ruhig beides.')}</p>\n`
  : '';
/* „B2 · klar" wird auf dem Handy zu „B2". Der Zusatz ist schoen,
   aber er nahm den Sprungmarken 90 der 390 Pixel weg — von zehn
   Abschnitten war noch anderthalb zu sehen. */
const nivKnopf = (niv, txt) => {
  const teile = String(txt).split('·');
  const kopf = h(teile[0].trim());
  const rest = teile.slice(1).join('·').trim();
  return `<button type="button" data-niv="${niv}" aria-pressed="${niv === 'a2'}">${kopf}` +
         (rest ? `<span class="zusatz"> · ${h(rest)}</span>` : '') + `</button>`;
};
const nivKnoepfe = S.niveau ? `<div class="nivk" role="group" aria-label="Niveau wählen">
    ${nivKnopf('a2', S.niveau.a)}
    ${nivKnopf('b1', S.niveau.b)}
  </div>` : '';
const leiste = `<div class="leiste">\n  ${nivKnoepfe}\n${nav}</div>\n`;

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

${nivHinweis}${leiste}
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
