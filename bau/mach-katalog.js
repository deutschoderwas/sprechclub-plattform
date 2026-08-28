/* ============================================================
   mach-katalog.js — bringt die fertigen Seiten in den Lernbereich

   Im Ordner liegen fast 400 HTML-Seiten. Ueber die drei Tueren
   erreichbar waren davon nur 51. Der Rest — Themenlektionen,
   Wortschatzboosts, Aussprache-Lektionen, Spielseiten, die
   "vorbereitung-"-Seiten zum Ueben — war fertig und unsichtbar.

   Dazu kam das Umgekehrte: ueben.js hat den Link "Passende Lektion"
   aus dem Themennamen geraten (wortschatz-<id>-b1.html). Von 169
   solchen Links fuehrten 118 auf eine Seite, die es nicht gibt.

   Dieses Skript liest den Ordner und schreibt lektionen-katalog.js:

     window.LEKTIONEN   — jede echte Seite mit Titel, Niveau, Art
     window.LEKTION_ZU  — Themen-ID -> Seite, nur wenn die Datei da ist
     window.BEREICH_MEHR— Bereich-ID -> die Seiten, die dazu passen

   Nichts wird verschoben oder umbenannt. Der Katalog zeigt nur,
   was schon da ist — und was es nicht gibt, verschweigt er.

   Aufruf: node bau/mach-katalog.js
   ============================================================ */
'use strict';
const fs = require('fs'), path = require('path');
const W = path.join(__dirname, '..');

/* ---------- 1. Was ist eine Lernseite? ---------- */
const RAUS = [
  /^_/, /^admin/, /^index/, /^konto/, /^app\.html$/, /^club-/, /^community/,
  /^impressum/, /^datenschutz/, /^agb/, /^preise/, /^danke/, /^login/,
  /^niveau-test/, /^ordnung-orte/, /^kurs\.html$/, /^kursraum/, /^start/,
  /BACKUP/i, /-VOR-/i, /-vor-/, /^lehrer/, /^checkout/, /^zahlung/, /^test/,
  /* Seiten der Plattform selbst, keine Lernseiten */
  /^live\.html$/, /^tafel\.html$/, /^klassenraum/, /^kurse\.html$/, /^tandem/,
  /^korrektur/, /^nachbereitung/, /^podcast\.html$/, /^sprechen\.html$/,
  /^lektion\.html$/, /^aussprache\.html$/, /^lehrkraft/, /^vorschau/, /^seite-/
];
const istRaus = f => RAUS.some(r => r.test(f));

/* ---------- 2. Art der Seite ---------- */
function art(f) {
  if (/^wortschatzboost-/.test(f)) return 'wortschatz';
  if (/^grammatik-/.test(f)) return 'grammatik';
  if (/^aussprache-/.test(f)) return 'aussprache';
  if (/^sprachspielclub-/.test(f)) return 'spiel';
  if (/^sprechclub-/.test(f)) return 'sprechen';
  if (/^vorbereitung-/.test(f)) return 'ueben';
  if (/-handout\.html$/.test(f)) return 'handout';
  if (/-lektion\.html$/.test(f)) return 'lektion';
  return 'lektion';
}

/* ---------- 3. Niveau aus dem Dateinamen ---------- */
function niveau(f) {
  let n = f.toLowerCase().replace(/\.html$/, '');
  /* Der Unterrichtsordner schreibt die Stufen zusammen: "erben-b2c1".
     Vor dem Suchen wird daraus "erben-b2-c1". */
  n = n.replace(/-(a1|a2|b1|b2|c1)(a1|a2|b1|b2|c1)(?=-|$)/g, '-$1-$2');
  const m = n.match(/(?:^|-)(a1|a2|b1|b2|c1)(?=-|$)/g) || [];
  const st = m.map(x => x.replace(/^-/, '').toUpperCase());
  if (!st.length) return '';
  return st.length > 1 ? st[0] + '–' + st[st.length - 1] : st[0];
}

/* ---------- 4. Titel aus der Seite ---------- */
function titel(datei, roh) {
  let t = '';
  const h = roh.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (h) t = h[1];
  if (!t) { const ti = roh.match(/<title>([\s\S]*?)<\/title>/); if (ti) t = ti[1]; }
  t = t.replace(/<[^>]+>/g, ' ')
       .replace(/&shy;/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ')
       .replace(/&[a-z]+;/g, ' ')
       .replace(/\s+/g, ' ').trim();
  /* Steht im Titel ein Zeilenumbruch mitten im Bindestrichwort
     ("Work-Life-<br>Balance"), bleibt nach dem Entfernen der Tags ein
     Leerzeichen hinter dem Bindestrich stehen. Nur zusammenziehen,
     wenn danach ein grosser Buchstabe folgt — "Wort- und Satzakzent"
     muss so bleiben, wie es ist. */
  t = t.replace(/(\w)-\s+([A-ZÄÖÜ])/g, '$1-$2');
  t = t.replace(/\s*[·|–-]\s*(deutschoderwas|Lektion|Kurs)\s*$/i, '').trim();
  if (!t) t = datei.replace(/\.html$/, '').replace(/-/g, ' ');
  return t;
}

/* ---------- 5. Welche Seite gehoert zu welchem Bereich? ----------
   Die Stichworte stehen hier von Hand. Ein Wort trifft, wenn es im
   Dateinamen vorkommt. Gewinnt das laengste Wort — so schlaegt
   "wohnungssuche" das allgemeinere "wohnen". */
const STICH = {
  cafe: ['cafe', 'baecker', 'kaffee'],
  restaurant: ['restaurant', 'foodtrends', 'essen-restaurant'],
  supermarkt: ['supermarkt', 'einkaufen', 'reklamation', 'umtausch', 'teurer', 'second-hand'],
  kleidung: ['kleidung', 'shopping'],
  kochen: ['kochen', 'ernaehrung', 'sommer'],
  verkaufen: ['verkaufen', 'online-kaufen'],
  apotheke: ['apotheke'],
  arzt: ['arzt', 'krankmelden', 'gesundheitssystem', 'koerper-gesundheit', 'mentale-gesundheit'],
  zahnarzt: ['zahnarzt'],
  notfall: ['notfall', 'krankenhaus'],
  kasse: ['krankenkasse', 'versicherung'],
  amt: ['amt', 'behoerde', 'buerokratie', 'einbuergerung', 'leben-in-deutschland'],
  bank: ['bank', 'sparen', 'bargeld', 'geld-konsum', 'ueber-geld', 'geld-glueck'],
  vertraege: ['vertrag', 'handy'],
  post: ['post-paket'],
  polizei: ['polizei'],
  unterwegs: ['oeffis', 'mobilitaet', 'weg-fragen', 'bahn'],
  werkstatt: ['werkstatt'],
  reise: ['reisen', 'urlaub', 'reiseplanung', 'strand', 'freibad', 'hotel'],
  wohnen: ['wohnen', 'wohnung', 'nachbarn', 'umzug', 'hausordnung', 'wohnformen', 'wohnungsnot', 'mietwahnsinn', 'minimalismus', 'wimmelbild', 'stadt-oder-land'],
  freunde: ['freundschaft', 'beziehungen', 'dating', 'kennenlernen', 'small-talk', 'netzwerken', 'peinliche', 'nostalgie', 'glueck', 'emotionen', 'gefuehle', 'charaktereigenschaften'],
  familie: ['familie', 'generationen'],
  schule: ['schule', 'bildung', 'kita'],
  feste: ['feste', 'braeuche', 'traditionen', 'kultur', 'typisch-deutsch', 'aberglaube'],
  bewerbung: ['bewerbung', 'traumberuf'],
  'erste-tage': ['erste-tage'],
  team: ['team', 'work-life', 'vier-tage-woche', 'puenktlichkeit'],
  rechte: ['schicht', 'arbeitsrecht'],
  heikel: ['heikel', 'duzen-siezen', 'debatt', 'meinungsfreiheit', 'ausreden', 'aufschieberitis'],
  pflege: ['pflege'],
  medizin: ['medizin'],
  erziehung: ['erziehung'],
  bau: ['bau-lektion', 'baustelle'],
  'elektro-shk': ['elektro'],
  metall: ['metall'],
  fahren: ['fahren', 'fuehrerschein'],
  kueche: ['kueche'],
  hotel: ['hotel-lektion'],
  handel: ['handel'],
  reinigung: ['reinigung'],
  lager: ['lager'],
  produktion: ['produktion'],
  it: ['ki-alltag', 'ki-arbeitswelt', 'digital-detox', 'streaming'],
  ingenieur: ['ingenieur'],
  buero: ['buero', 'homeoffice'],
  buchhaltung: ['buchhaltung', 'wirtschaft'],
  'friseur-beruf': ['friseur'],
  landwirtschaft: ['landwirtschaft'],
  sozial: ['sozial', 'ehrenamt', 'ungleichheit'],
  ankommen: ['ankommen', 'integration', 'migration', 'heimat'],
  sprachkurs: ['sprachspielclub', 'sprechclub', 'plaudertisch', 'freies-sprechen', 'wortschatzboost', 'grammatik-', 'aussprache-', 'kreativitaet'],
  weiterbildung: ['weiterbildung', 'anerkennung', 'beruf-lernen'],
  telefonieren: ['telefon'],
  medien: ['medien', 'social-media', 'socialmedia', 'fake-news', 'influencer', 'gender-sprache', 'umgangssprache', 'sport-lebensstil'],
  /* nachgetragen, nachdem der erste Lauf 37 Seiten ohne Bereich liess */
  _nach_freunde: [], _nach: []
};
STICH.freunde.push('hobbys', 'persoenlichkeit', 'redewendungen', 'starke-adjektive');
STICH.familie.push('mein-tag', 'tagesablauf');
STICH.team.push('wortschatz-arbeit');
STICH.kochen.push('wortschatz-essen');
STICH.arzt.push('wortschatz-gesundheit', 'sport-gesund', 'sport-lebensstil');
STICH.wohnen.push('maengel', 'wortschatz-stadt');
STICH.landwirtschaft.push('wortschatz-natur');
STICH.sprachkurs.push('nominalisierung', 'relativsaetze', 'wechselpraepositionen',
  'konnektoren', 'passiv', 'nomen-verb', 'konjunktiv', 'praeposition');
delete STICH._nach_freunde; delete STICH._nach;
/* Nachgetragen, nachdem der Unterrichtsordner dazukam: neue Themen und
   dieselben Woerter in zusammengeschriebener Form (smalltalk statt
   small-talk, secondhand statt second-hand). */
STICH.feste.push('geburtstag');
STICH.familie.push('haustiere');
STICH.arzt.push('fitnessstudio', 'vegan');
STICH.freunde.push('verabreden', 'smalltalk');
STICH.kleidung.push('wetter');
STICH.wohnen.push('wg-leben', 'stadt-land');
STICH.medien.push('digitaldetox', 'gaming', 'datenschutz', 'anglizismen');
STICH.heikel.push('prokrastination', 'dilemma');
STICH.supermarkt.push('secondhand');
STICH.bank.push('erben');
STICH.sozial.push('grundeinkommen', 'zukunft');
STICH.reise.push('tourismus');
STICH.team.push('meetings');
STICH.unterwegs.push('tempolimit');
STICH.polizei.push('truecrime');
STICH.kochen.push('vegan');

function bereichVon(f, ids) {
  const s = f.toLowerCase().replace(/\.html$/, '').replace(/^vorbereitung-/, '');
  /* "it-lektion.html" gehoert zu "it" — dafuer braucht es kein Stichwort. */
  if (ids) { const t = s.replace(/-lektion$/, ''); if (ids.indexOf(t) >= 0) return t; }
  let best = null, len = 0;
  Object.keys(STICH).forEach(id => {
    STICH[id].forEach(w => {
      if (s.indexOf(w) >= 0 && w.length > len) { best = id; len = w.length; }
    });
  });
  return best;
}

global.window = global.window || {};
['bereiche.js', 'uebungen.js', 'bereiche-anschluss.js',
 'wortschatz-neu.js', 'grammatik-neu.js', 'hoer-neu.js',
 'hoeren-a1-neu.js', 'aussprache-neu.js'].forEach(f => {
  try { require(path.join(W, f)); } catch (e) { /* fehlt eben */ }
});
const BEREICHE = window.BEREICHE || [];
const SKILLS = (window.UEBUNGEN && window.UEBUNGEN.skills) || [];
const BIDS = BEREICHE.map(b => b.id);

/* ---------- 6. Einlesen ---------- */
const seiten = [];
function einlesen(ordner, praefix, rang, artFest) {
  let liste;
  try { liste = fs.readdirSync(path.join(W, ordner)); } catch (e) { return; }
  liste.forEach(f => {
    if (!f.endsWith('.html')) return;
    if (!praefix && istRaus(f)) return;
    const roh = fs.readFileSync(path.join(W, ordner, f), 'utf8');
    if (roh.length < 8000) return;            // Fragmente und Weiterleitungen raus
    seiten.push({
      d: praefix + f, t: titel(f, roh), lvl: niveau(f),
      art: artFest || art(f), b: bereichVon(f, BIDS), rang: rang
    });
  });
}
einlesen('.', '', 1);
/* Seit Ende Juli liegt im Ordner Unterricht-ab-27-07 eine zweite,
   viel ausfuehrlichere Fassung: 78 Lektionen zu je rund 157 KB, jede
   mit ihrer Uebungsseite daneben. 46 Themen gibt es NUR dort. Wo es
   beide gibt, ist die neue zwischen zwei- und sechsmal so gross —
   deshalb gewinnt sie (rang 2) und die alte faellt weg. */
einlesen('Unterricht-ab-27-07', 'Unterricht-ab-27-07/', 2);
einlesen('Unterricht-ab-27-07/Vorbereitung', 'Unterricht-ab-27-07/Vorbereitung/', 2, 'ueben');

/* Uebungs- und Handout-Seiten haengen an ihrer Lektion, nicht daneben */
function kern(f) {
  return f.replace(/^.*\//, '')
    .replace(/\.html$/, '')
    .replace(/^vorbereitung-/, '')
    .replace(/-handout$/, '')
    .replace(/-interaktiv$/, '')
    .replace(/-(a1|a2|b1|b2|c1)(a1|a2|b1|b2|c1)$/, '')
    .replace(/(?:-(?:a1|a2|b1|b2|c1))+$/, '')
    .replace(/-teil-\d+$/, '');
}
const nachSlug = {};
seiten.forEach(s => { const k = kern(s.d); (nachSlug[k] = nachSlug[k] || []).push(s); });
const haupt = [];
Object.keys(nachSlug).forEach(slug => {
  const g = nachSlug[slug];
  const lektionen = g.filter(x => x.art !== 'ueben' && x.art !== 'handout')
                     .sort((a, b) => (b.rang || 1) - (a.rang || 1));
  const l = lektionen[0];
  const u = g.filter(x => x.art === 'ueben').sort((a, b) => (b.rang || 1) - (a.rang || 1))[0];
  const h = g.filter(x => x.art === 'handout')[0];
  const k = l || u || h;
  if (!k) return;
  const e = { d: k.d, t: k.t, lvl: k.lvl, art: k.art, b: k.b, rang: k.rang || 1 };
  if (u && u !== k) e.ueb = u.d;
  if (h && h !== k) e.hand = h.d;
  haupt.push(e);
});

/* ---------- 7. Themen-ID -> Seite, nur wo die Datei wirklich liegt ---------- */
const daIst = f => fs.existsSync(path.join(W, f));
const zu = {};


/* Der Link "Passende Lektion" wurde bisher geraten. Hier wird er
   nachgeschlagen — und nur eingetragen, wenn die Datei existiert. */
SKILLS.forEach(sk => {
  (sk.themes || []).forEach(t => {
    const k = [];
    if (sk.id === 'aussprache') k.push('aussprache-' + t.id + '-a2.html');
    if (sk.id === 'grammatik') k.push('grammatik-' + t.id + '-b1.html', 'grammatik-' + t.id + '-b2.html', 'grammatik-' + t.id + '-b2-c1.html');
    k.push('wortschatz-' + t.id + '-b1.html', 'wortschatzboost-' + t.id + '-b1.html',
           'wortschatzboost-' + t.id + '-b2.html', 'wortschatzboost-' + t.id + '-a2.html');
    for (const f of k) if (daIst(f)) { zu[sk.id + ':' + t.id] = f; break; }
  });
});

/* ---------- 7b. Ein Bild für jedes Thema — aus unserem eigenen Bestand ----------
   In den Daten stehen bei 60 Themen Unsplash-Adressen: fremde Fotos
   von fremden Servern. Hier gilt: erst unser Themenbild, dann das
   Szenenbild des Bereichs im Amanda-Stil. Fremdes Foto nie. */
const themaZuBereich = {};
BEREICHE.forEach(b => {
  ['ws', 'ho', 'hilf'].forEach(f => (b[f] || []).forEach(id => {
    if (!themaZuBereich[id]) themaZuBereich[id] = b;
  }));
});
function bildFuerThema(id) {
  if (daIst('bilder/thema/' + id + '.jpg')) return 'bilder/thema/' + id + '.jpg';
  const b = themaZuBereich[id];
  if (b && b.bild && daIst('amanda/' + b.bild + '.webp')) return 'amanda/' + b.bild + '.webp';
  return '';
}
const themaBild = {};
SKILLS.forEach(sk => (sk.themes || []).forEach(t => {
  const f = bildFuerThema(t.id);
  if (f) themaBild[t.id] = f;
}));

/* ---------- 7c. Ein Bild für jede Seite ---------- */
const bereichNach = {};
BEREICHE.forEach(b => { bereichNach[b.id] = b; });
function bildFuerSeite(s) {
  const slug = s.d.replace(/\.html$/, '').replace(/^vorbereitung-/, '');
  const eigen = ['bilder/thema/' + slug + '.jpg', 'illu/' + slug + '.jpg', 'illu/th-' + slug + '.jpg'];
  for (const f of eigen) if (daIst(f)) return f;
  const b = s.b && bereichNach[s.b];
  if (b && b.bild && daIst('amanda/' + b.bild + '.webp')) return 'amanda/' + b.bild + '.webp';
  return '';
}

/* ---------- 8. Schreiben ---------- */
const RANG = { A1: 1, 'A1–A2': 1, A2: 2, 'A1–B1': 2, 'A2–B1': 3, B1: 4, 'B1–B2': 5, B2: 6, 'B2–C1': 7, C1: 8 };
haupt.sort((a, b) => (RANG[a.lvl] || 9) - (RANG[b.lvl] || 9) || a.t.localeCompare(b.t, 'de'));

/* Manche Themen liegen zweimal im Ordner: die kurze alte Seite und die
   ausfuehrliche neue aus dem Unterrichtsordner, unter verschiedenen
   Dateinamen, aber mit demselben Titel. Zweimal "Beim Friseur"
   untereinander sieht nach Fehler aus. Die alte faellt weg. */
const nachTitel = {};
haupt.forEach(s => { const t = s.t.trim().toLowerCase(); (nachTitel[t] = nachTitel[t] || []).push(s); });
const raus = new Set();
Object.keys(nachTitel).forEach(t => {
  const g = nachTitel[t];
  if (g.length < 2) return;
  const hoechster = Math.max(...g.map(x => x.rang || 1));
  if (hoechster < 2) return;                       // beide gleich alt: beide bleiben
  g.forEach(x => { if ((x.rang || 1) < hoechster) raus.add(x.d); });
});
for (let i = haupt.length - 1; i >= 0; i--) if (raus.has(haupt[i].d)) haupt.splice(i, 1);

haupt.forEach(s => { const f = bildFuerSeite(s); if (f) s.img = f; });

/* Die Hauptlektion eines Bereichs steht schon oben im Weg —
   sie darf unten nicht noch einmal auftauchen. */
const schonOben = {};
BEREICHE.forEach(b => { if (b.lek) schonOben[b.lek] = 1; });
/* Was schon als Lektion eines Uebungsthemas erreichbar ist, steht
   nicht noch einmal in der Liste darunter. Sonst waere "Im
   Deutschkurs" wieder das, was der Lernbereich vorher war: eine
   Halde mit 62 Kacheln. */
Object.keys(zu).forEach(k => { schonOben[zu[k]] = 1; });
const mehr = {};
haupt.forEach(s => { if (s.b && !schonOben[s.d]) (mehr[s.b] = mehr[s.b] || []).push(s.d); });

module.exports = { haupt, mehr, zu, themaBild, daIst, W };

if (require.main === module) {
  const kopf = `/* ============================================================
   lektionen-katalog.js — welche fertigen Seiten es wirklich gibt

   Erzeugt von bau/mach-katalog.js. Nicht von Hand aendern.

   Vorher hat ueben.js den Link "Passende Lektion" aus dem
   Themennamen geraten. Von 169 Links fuehrten 118 ins Leere.
   Und fast 200 fertige Seiten waren ueber den Lernbereich
   ueberhaupt nicht zu erreichen.

   Hier steht, was da ist: Titel, Niveau, Art und der Bereich,
   in den die Seite gehoert. Was fehlt, steht nicht drin — dann
   zeigt die Oberflaeche eben keinen Knopf statt einen toten.
   ============================================================ */
`;
  haupt.forEach(x => { delete x.rang; });
  const js = kopf +
    'window.LEKTIONEN = ' + JSON.stringify(haupt, null, 1) + ';\n\n' +
    'window.BEREICH_MEHR = ' + JSON.stringify(mehr, null, 1) + ';\n\n' +
    'window.LEKTION_ZU = ' + JSON.stringify(zu, null, 1) + ';\n\n' +
    'window.THEMA_BILD = ' + JSON.stringify(themaBild, null, 1) + ';\n';
  fs.writeFileSync(path.join(W, 'lektionen-katalog.js'), js);

  const nachArt = {};
  haupt.forEach(s => { nachArt[s.art] = (nachArt[s.art] || 0) + 1; });
  const ohne = haupt.filter(s => !s.b);
  let themen = 0; SKILLS.forEach(sk => themen += (sk.themes || []).length);
  console.log('Seiten im Katalog: ' + haupt.length + ' ' + JSON.stringify(nachArt));
  console.log('mit Uebungsseite: ' + haupt.filter(s => s.ueb).length +
    ', mit Handout: ' + haupt.filter(s => s.hand).length +
    ', mit Bild: ' + haupt.filter(s => s.img).length);
  console.log('Bereiche mit Seiten: ' + Object.keys(mehr).length +
    ', Seiten ohne Bereich: ' + ohne.length);
  console.log('Themen mit echter Lektion: ' + Object.keys(zu).length + ' von ' + themen +
    ' (vorher wurde der Link geraten, 118 davon waren tot)');
  console.log('Themen mit eigenem Bild: ' + Object.keys(themaBild).length + ' von ' + themen);
  if (ohne.length) console.log('  ohne Bereich: ' + ohne.map(s => s.d).join(', '));
}
