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

/* Die Argumente fuer die Debatte stehen in bau/debatten.json, je
   Stunde eine These und dreimal dafuer, dreimal dagegen. Sie sind
   von Hand geschrieben — eine Debatte, in der beide Gruppen nur
   „Sammelt zwei Gruende" lesen, ist keine Debatte, sondern eine
   Aufgabe ohne Material. Wer nichts zu sagen weiss, schweigt. */
const DEBATTEN = (() => {
  const f = path.join(__dirname, 'debatten.json');
  try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { return {}; }
})();
const DEB = DEBATTEN[path.basename(quelle).replace(/\.json$/, '')] || null;

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
const markZahl = {};       /* wie oft auf der ganzen Seite */
let markHier = {};         /* wie oft in diesem Abschnitt */
const HOECHSTENS = 2;      /* je Seite */
const HOECHSTENS_HIER = 1; /* je Abschnitt */
/* Jeder Abschnitt faengt bei null an. So kann ein Wort im Dialog und
   spaeter im Rollenspiel je einmal markiert sein — aber nie zweimal
   im selben Absatz, wo es nur unruhig aussieht. */
function neuerAbschnitt() { markHier = {}; }

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
      if ((markHier[m.wort] || 0) >= HOECHSTENS_HIER) return;
      const re = new RegExp('(?:^|[^' + BUCHSTABE + '])(' + fluchtRegex(m.wort) + ENDUNG + ')(?![' + BUCHSTABE + '])', 'i');
      const t = re.exec(teil);
      if (!t) return;
      const von = t.index + t[0].length - t[1].length;
      /* Keine zwei Markierungen uebereinander. */
      if (treffer.some(x => von < x.bis && von + t[1].length > x.von)) return;
      markZahl[m.wort] = (markZahl[m.wort] || 0) + 1;
      markHier[m.wort] = (markHier[m.wort] || 0) + 1;
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

/* ---------- Anfangshilfen ----------
   „Mir faellt nichts ein" ist der haeufigste Grund, warum jemand im
   Sprechclub schweigt — nicht fehlender Wortschatz, sondern der
   fehlende erste Satz. Diese Anfaenge stehen aufklappbar unter jeder
   Sprechaufgabe: wer sie braucht, tippt drauf; wer nicht, sieht nur
   eine Zeile.

   Die Saetze richten sich nach dem Niveau der Stunde. Auf A2/B1 sind
   es kurze Hauptsaetze, ab B2 kommen Nebensatz und Abtoenung dazu —
   ein C1-Anfang „Ehrlich gesagt faellt es mir schwer, …" hilft auf
   A2 niemandem, er schuechtert nur ein. */
/* Zwei Saetze fuer jedes Niveau. Der Umschalter oben schaltet auch
   die Hilfe um: Wer auf der unteren Stufe steht, bekommt kurze
   Hauptsaetze; auf der oberen kommen Nebensatz und Abtoenung dazu.
   Vorher richtete sich die Hilfe nach der Stunde, nicht nach dem,
   was der Lernende gerade gewaehlt hat — auf B1 stand dann „Ehrlich
   gesagt faellt es mir schwer, …" und schuechterte genau die Leute
   ein, denen sie helfen sollte. */
const ANFAENGE = {
  ankommen: {
    leicht: ['Bei mir war das so: …', 'Ich habe einmal …', 'Ich glaube, das ist …'],
    schwer: ['Bei mir war das so: …', 'Ehrlich gesagt habe ich das noch nie …', 'Mir fällt spontan ein Fall ein, in dem …']
  },
  rollenspiel: {
    leicht: ['Das verstehe ich. Aber …', 'Kann ich bitte fragen: …?', 'Was kann ich jetzt machen?'],
    schwer: ['Das verstehe ich — trotzdem bleibe ich dabei: …', 'Darf ich kurz nachfragen: …?', 'Wer kann das denn entscheiden?']
  },
  abschluss: {
    leicht: ['Ich nehme mit: …', 'Ich will den Satz „…“ benutzen.', 'Neu war für mich: …'],
    schwer: ['Ich nehme mit, dass …', 'Den Satz „…“ will ich nächste Woche wirklich benutzen.', 'Neu war für mich, dass …']
  }
};

function anfangshilfe(art, text) {
  const paar = ANFAENGE[art];
  if (!paar) return '';
  const liste = st => `<div class="hilf-i">` + st.map(x => `<span>${h(x)}</span>`).join('') + `</div>`;
  /* Ohne Umschalter in der Stunde gibt es nur eine Stufe — dann
     entscheidet das Niveau der Stunde, welche. */
  const inhalt = S.niveau
    ? `<div class="nur-a2">${liste(paar.leicht)}</div><div class="nur-b1">${liste(paar.schwer)}</div>`
    : liste(/B2|C1|C2/.test(String(S.stufe || '')) ? paar.schwer : paar.leicht);
  return `<details class="hilf"><summary>🆘 ${h(text || 'Wie fange ich an?')}</summary>${inhalt}</details>\n`;
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
/* Die Anweisung ueber einer Sprechaufgabe steht in der JSON als ein
   Absatz: „Einer vertritt eine Position, einer die andere. Danach
   tauschen — und beim zweiten Mal ohne die Saetze unten. Regel: In
   jeder Runde mindestens ein Zielwort."

   Gemessen: 225 solcher Absaetze haben 18 Woerter und mehr. Als
   Block liest die in der Stunde niemand — man ueberfliegt und faengt
   falsch an. Als drei kurze Zeilen sieht man die Aufgabe auf einen
   Blick: wer macht was, was kommt danach, was ist die Regel.

   Zerlegt wird an Satzenden, nicht an Kommas. Eine Zeile, die mit
   „Regel" anfaengt, bekommt ihre eigene Marke. Kurze Absaetze bleiben
   unangetastet — bei einem Satz waere eine Liste laecherlich. */
function schritte(text) {
  const roh = String(text || '').trim();
  if (!roh) return '';
  if (roh.split(/\s+/).length < 14) return `<p class="ssub">${h(roh)}</p>\n`;
  let teile = roh.split(/(?<=[.!?])\s+/).map(x => x.trim()).filter(Boolean);
  /* „Zu zweit." als eigener Schritt sieht albern aus. Alles unter
     vier Woertern wandert an den naechsten Satz. */
  const zusammen = [];
  teile.forEach(t => {
    if (zusammen.length && t.split(/\s+/).length < 4) { zusammen[zusammen.length - 1] += ' ' + t; return; }
    zusammen.push(t);
  });
  for (let i = 0; i + 1 < zusammen.length; i++) {
    if (zusammen[i].split(/\s+/).length < 4) { zusammen[i + 1] = zusammen[i] + ' ' + zusammen[i + 1]; zusammen[i] = ''; }
  }
  teile = zusammen.filter(Boolean);
  if (teile.length < 2) return `<p class="ssub">${h(roh)}</p>\n`;
  let n = 0;
  return `<ol class="schritte">\n` + teile.map(t => {
    const regel = /^Regel\b/i.test(t);
    const marke = regel ? '!' : String(++n);
    return `<li${regel ? ' class="regel"' : ''}><span>${marke}</span>${h(t)}</li>`;
  }).join('\n') + `\n</ol>\n`;
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
  neuerAbschnitt();
  let s = `<section class="section" id="dialoge">\n` + kopfzeile(d.h2, d.hl, null) + schritte(d.ssub);
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
/* Die Lage steht als ein Satz da: „A hat vor zehn Monaten gekauft,
   das Geraet verliert Wasser. B verweist auf den Hersteller."
   Gelesen wird das in der Stunde von zwei Leuten, die wissen
   muessen, wer sie sind und was sie wollen — und zwar auf einen
   Blick, nicht nach dreimal Lesen.

   Deshalb wird der Satz an der Stelle geteilt, an der B anfaengt.
   Das gelingt bei 187 von 249 Rollenspielen; bei den uebrigen steht
   die Lage als ein Block da, weil eine falsche Trennung schlimmer
   waere als gar keine. */
function rollenTeilen(text) {
  const t = String(text || '').trim();
  const m = t.match(/^(A\b[\s\S]*?[.!?])\s+(B\b[\s\S]*)$/);
  if (m) return { a: m[1].trim(), b: m[2].trim() };
  const m2 = t.match(/^(B\b[\s\S]*?[.!?])\s+(A\b[\s\S]*)$/);
  if (m2) return { a: m2[2].trim(), b: m2[1].trim() };
  return null;
}

function rollenspiele(r) {
  neuerAbschnitt();
  let s = `<section class="section" id="rollenspiele">\n` + kopfzeile(r.h2, r.hl, null) + schritte(r.ssub);
  r.liste.forEach((x, i) => {
    const rollen = rollenTeilen(x.situation);
    s += `<div class="rsp">\n`
      + `<div class="rsp-kopf"><span class="rsp-nr">${i + 1}</span><b>${h(x.titel)}</b></div>\n`;

    if (rollen) {
      s += `<div class="rsp-rollen">`
        + `<div class="rsp-r a"><span>A</span><p>${hm(rollen.a.replace(/^A\s*/, ''))}</p></div>`
        + `<div class="rsp-r b"><span>B</span><p>${hm(rollen.b.replace(/^B\s*/, ''))}</p></div>`
        + `</div>\n`;
    } else {
      s += `<div class="rsp-lage"><span>Die Lage</span>${hm(x.situation)}</div>\n`;
    }

    if (x.a2 || x.b1) {
      s += `<div class="rsp-saetze"><span class="rsp-lbl">Sätze, die dir helfen</span>`
        + (x.a2 ? `<div class="nur-a2">` + x.a2.map(c => `<span class="rm">${h(c)}</span>`).join('') + `</div>` : '')
        + (x.b1 ? `<div class="nur-b1">` + x.b1.map(c => `<span class="rm">${h(c)}</span>`).join('') + `</div>` : '')
        + `</div>\n`;
    }
    if (x.gut) s += `<div class="rsp-ziel"><span>🎯 Geschafft, wenn</span>${hm(x.gut)}</div>\n`;
    s += anfangshilfe('rollenspiel', 'Und wenn B nein sagt?');
    s += `</div>\n\n`;
  });

  if (S.daten && S.daten.sk && S.daten.sk.length) {
    s += kopfzeile('🎴 Sprechkarten', null, 'Zieh eine Karte. Vier Sätze am Stück.');
    s += `<div class="card90">\n<div class="lbl">Deine Aufgabe</div>\n` +
      `<div class="word" id="wsk" style="font-size:1.15rem;line-height:1.4;">Tippe auf den Knopf.</div>\n` +
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
  { id:'ankommen',    min:'0–5',   z:'👋', t:'Ankommen',
    w:'Eine Frage, reihum ein Satz. Kein Kommentar dazwischen.', wer:'alle sechs, je etwa 40 Sekunden' },
  { id:'dialoge',     min:'5–15',  z:'🎬', t:'Dialog',
    w:'Zu zweit lesen. Dann verschwindet B und ihr antwortet selbst.', wer:'drei Paare, dann Rollentausch' },
  { id:'challenge',   min:'15–25', z:'⏱️', t:'90 Sekunden',
    w:'Ein Wort, 90 Sekunden reden. Der Partner hakt die Zielwörter ab.', wer:'drei Paare, zwei Runden' },
  { id:'rollenspiele',min:'25–40', z:'🎭', t:'Rollenspiel',
    w:'Zwei Durchgänge, dazwischen Rollentausch.', wer:'drei Paare' },
  { id:'debatte',     min:'40–55', z:'⚖️', t:'Debatte',
    w:'Drei gegen drei. Zwei Minuten sammeln, dann vier Wortmeldungen je Seite.', wer:'zwei Dreiergruppen' },
  { id:'abschluss',   min:'55–60', z:'🎯', t:'Abschluss',
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
  neuerAbschnitt();
  /* Vorher stand hier genau eine Frage — und darunter viel Luft.
     In jeder Stunde liegen aber sechs Fragen in der JSON: drei im
     ersten Einstiegsblock (je Stufe) und drei im zweiten. Die wurden
     nie gezeigt. Jetzt sind es zwei Runden mit je drei nummerierten
     Fragen, dazu die Sprechaufgabe, die in derselben JSON steht. */
  const bloecke = S.einstieg || [];
  const raus = (e, feld) => ((e && e[feld]) || []).filter(Boolean).slice(0, 3);

  const b0 = bloecke[0] || {};
  let leicht = raus(b0, 'fragenA2'); if (!leicht.length) leicht = raus(b0, 'fragen');
  let schwer = raus(b0, 'fragenB1'); if (!schwer.length) schwer = leicht;
  if (!leicht.length && S.ankommen && S.ankommen.frage) { leicht = [S.ankommen.frage]; schwer = leicht; }
  if (!leicht.length) return '';

  const liste  = f => `<ol class="ankfr">` + f.map(x => `<li>${h(x)}</li>`).join('') + `</ol>`;
  /* Beide Stufen nur dann doppelt ausgeben, wenn sie sich wirklich
     unterscheiden — sonst steht dasselbe zweimal im Quelltext. */
  const stufig = (a, b) => (S.niveau && a.join('|') !== b.join('|'))
    ? `<div class="nur-a2">${liste(a)}</div><div class="nur-b1">${liste(b)}</div>`
    : liste(a);
  const runde = (klasse, label, inhalt) =>
    `<div class="ankrunde${klasse}"><span class="ankl">${h(label)}</span>${inhalt}</div>\n`;

  /* Das Bild lag laengst in der JSON und wurde nie benutzt. */
  const kopfbild = b0.bild
    ? `<img class="ankbild" src="${attr(bild(b0.bild))}" alt="${attr(b0.alt || '')}">\n`
    : '';

  let s = `<section class="section" id="ankommen">\n`
    + kopfzeile('Erst mal', 'ankommen', 'Zwei Runden. Erst reihum, dann zu zweit. Ein Satz genügt.')
    + kopfbild
    + runde('', 'Runde 1 · reihum, ein Satz pro Person', stufig(leicht, schwer))
    + tipp(b0.tipp);

  const b1 = bloecke[1] || {};
  let l2 = raus(b1, 'fragen');    if (!l2.length) l2 = raus(b1, 'fragenA2');
  let s2 = raus(b1, 'fragenB1');  if (!s2.length) s2 = l2;
  if (l2.length) {
    s += runde(' zwei', 'Runde 2 · zu zweit, fragt euch gegenseitig', stufig(l2, s2))
       + tipp(b1.tipp);
  }

  return s + anfangshilfe('ankommen', 'Wie fange ich an?') + `</section>\n`;
}

/* ---------- 7b Merksaetze ----------
   Die Bausteine standen frueher als Redemittel-Tafel da und sind beim
   Umbau auf reines Sprechen rausgeflogen. Das war zu viel: Genau diese
   Saetze sind das, was ein Lernender beim Baecker wirklich auswendig
   braucht. Sie kommen zurueck — aber nicht als Tafel zum Lesen,
   sondern als Liste zum Lautsagen, jeder Satz mit Hoerknopf und
   danach eine Aufgabe, bei der die Saetze zugedeckt werden. */
function merksaetze(s3) {
  if (!s3) return '';
  neuerAbschnitt();
  let s = `<section class="section" id="merksaetze">\n`
    + kopfzeile('Sätze, die', 'sitzen müssen', 'Sag jeden einmal laut.');

  let etwas = false;
  [['a2', 'nur-a2'], ['b1', 'nur-b1']].forEach(([stufe, klasse]) => {
    const gruppen = s3[stufe];
    if (!gruppen || !gruppen.length) return;
    etwas = true;
    s += `<div class="${klasse}">\n`;
    gruppen.forEach(g => {
      s += `<div class="merkg"><div class="merkt">${h(g.titel)}</div>\n`;
      (g.chips || []).forEach(c => {
        s += `<div class="merk"><span>${hm(c)}</span>${sprechKnopf(c)}</div>\n`;
      });
      s += `</div>\n`;
    });
    s += `</div>\n`;
  });
  if (!etwas) return '';

  s += tipp({ art: 'yellow', text: '✅ <strong>Und jetzt zu zweit:</strong> Deckt die Sätze zu. '
    + 'Einer nennt den Schritt, der andere sagt den Satz aus dem Kopf. Danach tauschen.' });
  return s + `</section>\n`;
}

/* ---------- 7c Sprechuebung ----------
   Bis hierher hat die Stunde viel gezeigt und wenig verlangt. Dieser
   Abschnitt verlangt nur: drei kleine Uebungen, in denen jeder in der
   Runde den Mund aufmacht. Die Karte zieht die Saetze, die oben bei
   den Merksaetzen stehen — es kommt also nichts Neues dazu, es wird
   nur benutzt. */
function sprechuebung(S) {
  neuerAbschnitt();
  const hatKarte = S.daten && S.daten.ueb && S.daten.ueb.length;
  let s = `<section class="section" id="sprechuebung">\n`
    + kopfzeile('Jetzt', 'ihr', 'Drei kleine Übungen. Jeder kommt dran.');

  if (hatKarte) {
    s += `<div class="card90">\n<div class="lbl">Dein Satz</div>\n`
      + `<div class="word" id="wueb" style="font-size:1.1rem;line-height:1.4;">Tippe auf den Knopf.</div>\n`
      + `<button class="btn" id="uebnew">🎲 Satz ziehen</button>\n</div>\n`;
  }

  s += `<div class="uebs">\n`
    + `<div class="ueb"><span class="uebn">1</span><div><b>Satz ziehen und weiterreden</b>`
    + `<p>Zieh einen Satz, sag ihn laut — und häng sofort einen zweiten Satz an, der danach kommen würde.</p></div></div>\n`
    + `<div class="ueb"><span class="uebn">2</span><div><b>Die Kette</b>`
    + `<p>Reihum sagt jeder einen Satz von oben. Kein Satz darf zweimal kommen. Wer nicht weiterweiß, sagt <i>Ich weiß gerade keinen mehr</i> — auch das ist ein Satz.</p></div></div>\n`
    + `<div class="ueb"><span class="uebn">3</span><div><b>Ohne Hilfe</b>`
    + `<p>Klappt alles zu und spielt Dialog 1 noch einmal — frei, mit euren eigenen Wörtern.</p></div></div>\n`
    + `</div>\n`;

  return s + `</section>\n`;
}

/* ---------- 8 Debatte ----------
   Neu in der Stunde. Drei gegen drei, damit alle sechs reden muessen
   und niemand sich hinter der Gruppe verstecken kann. Die Fragen sind
   die, die frueher am Anfang standen — abstrakt, streitbar, und nach
   einer halben Stunde Wortschatz und Dialog genau richtig. */
function debatte(S) {
  /* Eine Debatte ist nicht immer die richtige Aufgabe. Beim Baecker
     auf A2 ueber „Beim Einkaufen immer Deutsch sprechen" zu streiten,
     ist zu abstrakt und zu frueh — dort braucht es Saetze und eine
     Sprechuebung. Deshalb faellt die Debatte weg, wo sie nicht passt:
     bei allen A2/B1-Stunden, und bei jeder Stunde, die es in ihrer
     JSON mit ohneDebatte ausdruecklich sagt. */
  if (S.ohneDebatte) return '';
  if (/A2/.test(String(S.stufe || ''))) return '';
  neuerAbschnitt();
  const eig = DEB || S.debatte;
  if (!eig) return '';
  const these = eig.these;
  const pro = eig.pro || [];
  const con = eig.con || [];
  if (!these || !pro.length || !con.length) return '';

  /* Nur die These und die Argumente. Vorher standen darunter noch
     Redemittel-Chips und eine Liste weiterer Fragen — gut gemeint,
     aber in der Stunde liest das niemand. Wer streiten soll, braucht
     Argumente, nicht noch eine Tafel. */
  return `<section class="section" id="debatte">\n`
    + kopfzeile(S.debatteH2 || 'Drei gegen', 'drei', 'Zwei Gruppen, eine Frage. Abwechselnd sprechen.')
    + `<div class="deb-these">${h(these)}</div>\n`
    + `<div class="deb-seiten">`
    +   `<div class="deb-s pro"><b>Gruppe A · dafür</b><ul>`
    +     pro.map(x => `<li>${h(x)}</li>`).join('')
    +   `</ul></div>`
    +   `<div class="deb-s con"><b>Gruppe B · dagegen</b><ul>`
    +     con.map(x => `<li>${h(x)}</li>`).join('')
    +   `</ul></div>`
    + `</div>\n`
    + `</section>\n`;
}

/* ---------- 9 Abschluss ---------- */
function abschluss() {
  return `<section class="section" id="abschluss">\n`
    + kopfzeile('Zum', 'Schluss', 'Ein Satz von jedem.')
    + `<div class="ank">Welchen Satz von heute nimmst du mit — und wo brauchst du ihn?</div>\n`
    + anfangshilfe('abschluss', 'Wie fange ich an?')
    + `</section>\n`;
}

function nimm(id, name, html) { if (html) abschnitte.push({ id, name, html }); }

/* Sechzig Minuten Sprechclub sind sechzig Minuten Sprechen.

   Draussen sind deshalb: die Bausteine (Redemittel als Tafel), die
   Grammatik und der Ueben-Abschnitt mit Quiz und Lueckentext. Das
   ist gutes Material — aber wer es in der Stunde durchgeht, hat am
   Ende geschrieben, angeklickt und zugehoert, nur wenig gesprochen.
   Es steht im Lernbereich, dort kann man es ueben, so oft man will.

   Geblieben ist, wobei jemand den Mund aufmacht:

     Ankommen      reihum ein Satz
     Dialog        zu zweit lesen, dann selbst antworten
     90 Sekunden   ein Wort, anderthalb Minuten reden
     Rollenspiel   zwei Durchgaenge mit Rollentausch
     Debatte       drei gegen drei
     Abschluss     ein Satz pro Person

   Sechs Abschnitte statt elf, und keiner davon ist eine Uebung.
   Die Hausaufgabe steht hinten dran — sie ist nach der Stunde.

   Die Ablauftafel und die Regieanweisungen („0-5 Min, alle sechs")
   sind ebenfalls raus. Die Seite sehen die Schuelerinnen und
   Schueler, nicht die Lehrerin — wie lange ein Abschnitt dauert und
   wer in welcher Aufstellung spricht, ist ihre Sache, nicht deren.
   Die Taktung steht weiter unten in TAKT und kann jederzeit wieder
   sichtbar gemacht werden.

   Die Daten der entfernten Abschnitte bleiben in den JSON-Dateien
   stehen. Geloescht ist nichts. */
/* Die Karte in der Sprechuebung zieht aus genau den Saetzen, die
   oben bei den Merksaetzen stehen. Nichts Neues, nur benutzt. */
if (S.saetze) {
  const pool = [];
  ['a2', 'b1'].forEach(k => (S.saetze[k] || []).forEach(g => (g.chips || []).forEach(c => {
    const t = nurText(c).trim();
    /* Nur ganze Saetze in die Ziehkarte. Bausteine wie „zweihundert
       Gramm" oder „drei Stueck" stehen oben bei den Merksaetzen unter
       ihrer Ueberschrift richtig, allein gezogen ergeben sie keine
       Sprechaufgabe. */
    const woerter = t.split(/\s+/).length;
    if (woerter >= 3 && /^[A-ZÄÖÜ]/.test(t)) pool.push(t);
  })));
  S.daten.ueb = pool.filter((x, i) => pool.indexOf(x) === i);
}

markenSammeln();
nimm('ankommen',     '👋 Ankommen',      ankommen(S));
nimm('dialoge',      '🎬 Dialog',        S.dialoge ? dialoge(S.dialoge) : '');
nimm('merksaetze',   '🗣️ Merksätze',     S.saetze ? merksaetze(S.saetze) : '');
nimm('challenge',    '⏱️ 90 Sekunden',   (S.daten.w90 && S.daten.w90.length) ? challenge(S.challenge) : '');
nimm('rollenspiele', S.spiele ? '🎲 Spiele' : '🎭 Rollenspiel',   (S.spiele || S.rollenspiele) ? rollenspiele(S.spiele || S.rollenspiele) : '');
nimm('debatte',      '⚖️ Debatte',       debatte(S));
/* Wo keine Debatte steht, tritt die Sprechuebung an ihre Stelle —
   damit die Stunde nicht kuerzer wird, sondern anders. */
nimm('sprechuebung', '⚡ Sprechübung',    debatte(S) ? '' : sprechuebung(S));
nimm('abschluss',    '🎯 Abschluss',     abschluss());
nimm('hausaufgabe',  '📮 Hausaufgabe',   S.hausaufgabe ? hausaufgabe(S.hausaufgabe) : '');

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
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
<style>
${fs.readFileSync(hier + 'stunde-club.css', 'utf8')}
</style>
</head>
<body${S.niveau ? ' data-niveau="a2"' : ''}><div class="flagbar"></div><div class="wrapper">

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
