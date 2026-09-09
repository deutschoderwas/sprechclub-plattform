/* ============================================================
   mach-grammatik-vielfalt.js — Grammatik ueben, nicht ankreuzen

   Gemessen am 09.09.: 48 von 52 Grammatik-Themen bestehen zu
   ueber 40 % aus einer einzigen Form. Fast alle koennen nur
   drei Sachen: Luecke fuellen, Wahlfrage anklicken, Satz bauen.
   Im ganzen Bereich Grammatik gibt es 6 Merkkarten, 4 Zuordnen-
   Aufgaben und 26 Fehlersuchen — bei 1167 Aufgaben.

   Dabei kann der Uebungsmotor in ueben.js all das laengst:
     karte mit regel  eine Merkkarte, die die Regel zeigt.
                      baueRunde() setzt sie an den Anfang jeder
                      Runde — die Erklaerung steht also da, wo
                      sie hingehoert: vor der ersten Aufgabe.
     fehler           ein Satz, ein falsches Wort, antippen.
     match            Satz und richtige Form zusammenbringen.

   Dieses Skript erzeugt diese drei Formen aus dem, was schon
   da ist:

     Merkkarte   aus bau/grammatik-seiten.json (regel + kontrast)
                 und aus bau/grammatik-regeln.json (von Hand
                 geschrieben fuer die Themen ohne Seite)
     Fehler      aus den Wahlfragen: die falsche Option wird in
                 die Luecke gesetzt. Das falsche Wort ist damit
                 bekannt, das richtige auch — nichts erfunden.
     Zuordnen    aus den Wahlfragen: vier Saetze, vier Formen.

   Was nicht sicher loesbar waere, entsteht gar nicht erst. Die
   Regeln dafuer stehen jeweils an Ort und Stelle.

   Aufruf:  node bau/mach-grammatik-vielfalt.js [--schreiben]
   Ergebnis: grammatik-vielfalt.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const wurzel = path.join(__dirname, '..');
const SCHREIBEN = process.argv.indexOf('--schreiben') >= 0;

global.window = {};
require(path.join(wurzel, 'uebungen.js'));
['grammatik-neu.js', 'grammatik-b1-mehr.js', 'grammatik-b2c1-mehr.js',
 'grammatik-c1-neu.js'].forEach(f => {
  try { require(path.join(wurzel, f)); } catch (e) {}
});
const U = global.window.UEBUNGEN;
const GRAM = (U.skills || []).filter(s => s.id === 'grammatik')[0];
if (!GRAM) { console.error('Kein Bereich grammatik gefunden.'); process.exit(1); }

const SEITEN = JSON.parse(fs.readFileSync(path.join(__dirname, 'grammatik-seiten.json'), 'utf8'));
const REGELN = (() => {
  const f = path.join(__dirname, 'grammatik-regeln.json');
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {};
})();

/* ---------- Text saeubern ----------
   Die Merkkarte laeuft durch E() in ueben.js, also durch die
   HTML-Maskierung. Ein <b> wuerde dort als Zeichenfolge stehen.
   Deshalb kommen die Auszeichnungen hier raus, nicht dort. */
function rein(s) {
  return String(s == null ? '' : s)
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ').trim();
}
function ohnePunkt(w) {
  return String(w).replace(/^[«»„“”"'(]+|[.,!?;:«»„“”"')]+$/g, '');
}
function einWort(s) {
  return /^[A-Za-zÄÖÜäöüßÀ-ÿ][A-Za-zÄÖÜäöüßÀ-ÿ-]*$/.test(String(s || '').trim());
}

/* Ueberschrift und Highlight sind auf der Seite zwei Zeilen, die
   zusammen einen Satz ergeben ("Es gibt keine Logik" + "— aber es
   gibt Endungen"). Getrennt ist die erste Haelfte sinnlos. */
function titelAus(h2, hl) {
  const a = rein(h2), b = rein(hl);
  const ganz = (a + ' ' + b).replace(/\s+/g, ' ').replace(/\s*[:—-]\s*$/, '').trim();
  if (ganz.length <= 80) return ganz;
  return a.replace(/\s*[:—-]\s*$/, '');
}

/* Zwei Woerter gehoeren zur selben Form-Familie, wenn sie auf
   demselben Stamm sitzen und sich nur hinten unterscheiden:
   gross-er / gross-en, de-s / de-r, alt-e / alt-er.

   Das ist der Unterschied zwischen einem Fehler und einer anderen
   Aussage. "weil" statt "dass" ergibt oft einen voellig richtigen
   Satz — nur einen anderen. "grosser" statt "grossen" ergibt nie
   einen richtigen Satz. Nur das Zweite darf eine Fehlersuche
   werden, sonst steht in der Aufgabe ein Satz, an dem nichts
   falsch ist. Gemessen: von 45 erzeugten Fehlersuchen waren 11
   genau dieser Fall. */
function formVerwandt(a, b) {
  a = String(a || '').toLowerCase(); b = String(b || '').toLowerCase();
  if (!a || !b || a === b) return false;
  let i = 0; const kurz = Math.min(a.length, b.length);
  while (i < kurz && a[i] === b[i]) i++;
  return i >= 2 && i >= kurz * 0.6;
}

/* ---------- Merkkarten ---------- */
function karteAusSeite(id, thema) {
  const s = SEITEN[id];
  if (!s || !s.regel) return [];
  const raus = [];
  const r = s.regel;
  const bsp = [];
  (r.tabelle || []).slice(1).forEach(zeile => {
    if (bsp.length >= 3) return;
    const z = zeile.map(rein).filter(Boolean);
    if (z.length < 2) return;
    bsp.push({ satz: z[z.length - 1], warum: z.length > 2 ? z[1] : z[0] });
  });
  /* Ohne Tabelle nimmt die Karte den Satzbau: die Rollen unter
     den Woertern erklaeren den Bau genauso gut. */
  if (!bsp.length && (r.satzbau || []).length) {
    const satz = r.satzbau.map(x => rein(x.wort)).join(' ');
    r.satzbau.forEach(x => {
      if (bsp.length >= 3) return;
      bsp.push({ satz: rein(x.wort), warum: rein(x.rolle) });
    });
    if (satz) bsp.unshift({ satz: satz, warum: 'So sitzt der ganze Satz' });
    bsp.length = Math.min(bsp.length, 3);
  }
  if (!bsp.length) return [];
  raus.push({
    type: 'karte', regel: true, emoji: thema.emoji || '📐',
    wort: titelAus(r.h2, r.hl) || thema.title,
    info: rein(r.intro),
    beispiele: bsp
  });
  /* Die Kontrastkarte ist die zweite Haelfte des Verstehens:
     nicht was die Form ist, sondern wogegen sie sich abgrenzt. */
  const k = s.kontrast;
  if (k && (k.karten || []).length >= 2) {
    raus.push({
      type: 'karte', regel: true, emoji: '🔀',
      wort: titelAus(k.h2, k.hl),
      info: rein(k.intro),
      beispiele: k.karten.slice(0, 3).map(x => ({
        satz: rein(x.wort) + ' — ' + rein(x.text), warum: rein(x.label)
      }))
    });
  }
  return raus;
}
function karteAusRegeln(id, thema) {
  const r = REGELN[id];
  if (!r || !(r.beispiele || []).length) return [];
  return [{
    type: 'karte', regel: true, emoji: thema.emoji || '📐',
    wort: rein(r.titel) || thema.title,
    info: rein(r.info),
    beispiele: r.beispiele.slice(0, 3).map(b => ({ satz: rein(b.satz), warum: rein(b.warum) }))
  }];
}

/* ---------- Fehlersuche aus den Wahlfragen ----------
   Die falsche Option wird in die Luecke gesetzt. Damit steht im
   Satz genau ein falsches Wort, und beide — das falsche und das
   richtige — stehen schon in der Aufgabe. Erfunden wird nichts.

   Eine Aufgabe entsteht nur, wenn sie eindeutig loesbar ist:
     · genau eine Luecke
     · richtige und falsche Form sind je ein einzelnes Wort
     · das falsche Wort kommt im Satz sonst nicht vor, sonst
       waere unklar, welches gemeint ist
     · kein Zitat, kein Pfeil: der Satz muss ein Satz sein,
       keine Aufgabenstellung ueber einen Satz
     · mindestens vier Woerter, sonst ist Raten schneller */
function fehlerAus(e) {
  if (e.type !== 'choice' || !e.q || !Array.isArray(e.options)) return null;
  if (typeof e.answer !== 'number') return null;
  const q = String(e.q);
  if ((q.match(/___/g) || []).length !== 1) return null;
  if (/[„“”"»«→]/.test(q)) return null;
  const richtig = String(e.options[e.answer] || '').trim();
  if (!einWort(richtig)) return null;
  const falschKand = e.options.filter((o, i) => i !== e.answer)
    .map(o => String(o).trim())
    .filter(einWort)
    .filter(o => o.toLowerCase() !== richtig.toLowerCase())
    .filter(o => formVerwandt(o, richtig));
  if (!falschKand.length) return null;
  /* Der Hinweis in Klammern am Ende (die Grundform, das Ziel)
     gehoert zur Wahlfrage, nicht in den Satz. */
  let roh = q.replace(/\s*\([^()]*\)\s*$/, '').trim();
  if (!/___/.test(roh)) return null;
  /* Steht die Luecke am Satzanfang, muss das eingesetzte Wort gross
     geschrieben werden — sonst ist der Grossbuchstabe der auffaelligste
     Fehler im Satz und nicht der gemeinte. */
  const amAnfang = /(^|[.!?]\s+)___/.test(roh);
  const gross = w => w.charAt(0).toUpperCase() + w.slice(1);
  let falsch = falschKand[0];
  let richtigF = richtig;
  if (amAnfang) { falsch = gross(falsch); richtigF = gross(richtig); }
  const satz = roh.replace('___', falsch).replace(/\s+/g, ' ').trim();
  const woerter = satz.split(/\s+/).filter(Boolean);
  if (woerter.length < 4) return null;
  const treffer = woerter.filter(w => ohnePunkt(w).toLowerCase() === falsch.toLowerCase());
  if (treffer.length !== 1) return null;
  const fertig = /[.!?]$/.test(satz) ? satz : satz + '.';
  return {
    type: 'fehler', satz: fertig, falsch: falsch, richtig: richtigF,
    explain: rein(e.explain || '')
  };
}

/* ---------- Zuordnen aus den Wahlfragen ----------
   Vier Saetze, vier Formen. Die Formen muessen verschieden sein,
   sonst gaebe es zwei richtige Loesungen fuer dieselbe Zeile. */
function matchAus(liste) {
  const gut = [];
  liste.forEach(e => {
    if (e.type !== 'choice' || !e.q || typeof e.answer !== 'number') return;
    if ((String(e.q).match(/___/g) || []).length !== 1) return;
    if (/[→]/.test(e.q)) return;
    const r = String(e.options[e.answer] || '').trim();
    /* Dieselbe Bedingung wie bei der Fehlersuche, aus demselben Grund:
       bei vier Bedeutungen koennte eine Antwort in zwei Zeilen passen.
       Bei vier Formen desselben Wortes kann sie das nicht. */
    if (!e.options.some((o, i) => i !== e.answer && formVerwandt(o, r))) return;
    if (!r || r.length > 22) return;
    const l = rein(String(e.q).replace(/\s*\([^()]*\)\s*$/, '')).replace('___', '_____');
    if (l.length > 70) return;
    /* "Ich sitze ___ dir." mit der Antwort "neben dir" ergaebe gelesen
       "Ich sitze neben dir dir." Solche Zeilen entstehen, wenn die
       Wahlfrage die Praeposition doppelt fuehrt — sie fliegen raus. */
    const probe = l.replace('_____', r).split(/\s+/).map(w => w.replace(/[.,!?;:„“”"]/g, '').toLowerCase());
    if (probe.some((w, i) => w && w === probe[i + 1])) return;
    gut.push({ l: l, r: r });
  });
  const raus = [], benutztR = {}, benutztL = {};
  for (let i = 0; i + 3 < gut.length && raus.length < 2; ) {
    const paare = [], gesehen = {};
    while (i < gut.length && paare.length < 4) {
      const p = gut[i++];
      const rk = p.r.toLowerCase();
      if (gesehen[rk] || benutztR[rk] || benutztL[p.l]) continue;
      gesehen[rk] = 1; paare.push(p);
    }
    if (paare.length < 4) break;
    paare.forEach(p => { benutztR[p.r.toLowerCase()] = 1; benutztL[p.l] = 1; });
    raus.push({ type: 'match', intro: 'Welche Form gehört in welchen Satz?', pairs: paare });
  }
  return raus;
}

/* ---------- Lauf ---------- */
const zusatz = {};
let nKarte = 0, nFehler = 0, nMatch = 0, ohneKarte = [];

GRAM.themes.forEach(t => {
  const alt = t.exercises || [];
  const daKarte = alt.some(e => e.type === 'karte');
  const neu = [];

  if (!daKarte) {
    const k = karteAusSeite(t.id, t).concat(karteAusRegeln(t.id, t));
    if (k.length) { neu.push.apply(neu, k); nKarte += k.length; }
    else ohneKarte.push(t.id + ' [' + (t.level || '?') + ']');
  }

  /* Hoechstens vier Fehlersuchen je Thema. Mehr wuerde die Runde
     kippen — dann waere Fehlersuche die neue Einheitsform. */
  const schonFehler = {};
  alt.filter(e => e.type === 'fehler').forEach(e => { schonFehler[String(e.satz)] = 1; });
  let f = 0;
  alt.forEach(e => {
    if (f >= 4) return;
    const x = fehlerAus(e);
    if (!x || schonFehler[x.satz]) return;
    schonFehler[x.satz] = 1; neu.push(x); f++; nFehler++;
  });

  if (!alt.some(e => e.type === 'match')) {
    const m = matchAus(alt);
    if (m.length) { neu.push.apply(neu, m); nMatch += m.length; }
  }

  if (neu.length) zusatz[t.id] = neu;
});

const kopf = `/* grammatik-vielfalt.js — erzeugt von bau/mach-grammatik-vielfalt.js
   Nicht von Hand aendern: der naechste Lauf ueberschreibt die Datei.
   Merkkarten, Fehlersuchen und Zuordnen fuer den Bereich Grammatik.
   Erzeugt am ${new Date().toISOString().slice(0, 10)}. */
(function () {
  var Z = ZUSATZ;
  var U = window.UEBUNGEN; if (!U || !U.skills) return;
  var sk = U.skills.filter(function (s) { return s.id === 'grammatik'; })[0];
  if (!sk) return;
  (sk.themes || []).forEach(function (t) {
    var z = Z[t.id]; if (!z || !z.length) return;
    t.exercises = (t.exercises || []).concat(z);
  });
})();
`;
const datei = kopf.replace('ZUSATZ', JSON.stringify(zusatz, null, 1));

console.log('Merkkarten  ' + nKarte);
console.log('Fehlersuche ' + nFehler);
console.log('Zuordnen    ' + nMatch);
console.log('Themen mit Zusatz: ' + Object.keys(zusatz).length + ' von ' + GRAM.themes.length);
console.log('\nNoch ohne Merkkarte (' + ohneKarte.length + '):');
ohneKarte.forEach(x => console.log('  ' + x));

if (SCHREIBEN) {
  fs.writeFileSync(path.join(wurzel, 'grammatik-vielfalt.js'), datei, 'utf8');
  console.log('\ngeschrieben: grammatik-vielfalt.js (' + Math.round(datei.length / 1024) + ' kB)');
} else {
  console.log('\n(Probelauf — mit --schreiben wird die Datei erzeugt)');
}
