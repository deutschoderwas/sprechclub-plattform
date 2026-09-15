/* ============================================================
   bau/mach-lehrplan.js — erzeugt lehrplan.js

   Warum es diese Datei gibt:
   Es lagen 381 Lektionsseiten, 72 Kurslektionen, 110 Gespräche,
   56 Wortschatz-Themen und 16 Hörreihen nebeneinander — ohne
   Reihenfolge. Wer neu dazukam, sah eine Wand und ging wieder.
   Gemessen: von 17 Community-Mitgliedern hatten 15 nie eine
   einzige Lektion geöffnet.

   Hier steht jetzt der Weg: fünf Stufen, in jeder Stufe
   nummerierte Lektionen, in jeder Lektion vier bis sechs
   Schritte in fester Reihenfolge.

   Die Reihenfolge unten ist redaktionell — die Verweise werden
   geprüft. Was nicht existiert, fliegt raus und wird gemeldet,
   damit nie ein toter Knopf entsteht.

   Kurzschreibweise pro Schritt:
     k:a1-l1                 Kurslektion aus kurse/
     w:a1-begruessung        Wortschatz-Thema aus uebungen.js
     h:arbeit                Hör-Thema aus uebungen.js
     a:vokale                Aussprache-Thema aus uebungen.js
     g:grammatik-…-a1.html   Grammatikseite
     l:mein-tag-a2.html      Lektionsseite
     d:baeckerei             Gespräch mit Amanda aus dialoge.js

   Aufruf:  node bau/mach-lehrplan.js
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const WURZEL = path.join(__dirname, '..');

/* ---------- Quellen laden ---------- */
global.window = {};
require(path.join(WURZEL, 'lektionen-katalog.js'));
require(path.join(WURZEL, 'uebungen.js'));
require(path.join(WURZEL, 'dialoge.js'));
const SEITEN   = window.LEKTIONEN || [];
const UEB      = window.UEBUNGEN  || {};
const GESPR    = window.DIALOGE   || [];

const seiteDa  = {}; SEITEN.forEach(s => seiteDa[s.d] = s);
const gesprDa  = {}; GESPR.forEach(d => gesprDa[d.id] = d);
function skill(id) { return (UEB.skills || []).find(s => s.id === id); }
function themaDa(skillId, themaId) {
  const s = skill(skillId); if (!s) return null;
  return (s.themes || []).find(t => t.id === themaId) || null;
}
function kursDa(id) {
  const p = path.join(WURZEL, 'kurse', id + '.js');
  if (!fs.existsSync(p)) return null;
  delete window.LEKTION;
  delete require.cache[require.resolve(p)];
  require(p);
  return window.LEKTION ? window.LEKTION.meta : null;
}

/* ---------- Der Weg ---------- */
const PLAN = [
{ id:'A1', t:'A1 — die ersten Schritte', ziel:'Start Deutsch 1',
  u:'Du sagst, wer du bist, was du brauchst und was du möchtest. Ganz von vorn.',
  lektionen:[
  ['Hallo! Ich bin …','Du begrüßt jemanden, sagst deinen Namen und woher du kommst.',
   'k:a1-l1 | w:a1-begruessung | g:grammatik-a1-praesens-a1.html | d:nicht-verstanden | a:vokale'],
  ['Zahlen, Alter und Telefonnummer','Du verstehst Zahlen und sagst deine Nummer, ohne zu stocken.',
   'k:a1-l2 | g:grammatik-a1-sein-haben-a1.html | g:grammatik-a1-fragen-a1.html | a:wortakzent'],
  ['Meine Familie','Du erzählst, wer zu dir gehört.',
   'k:a1-l3 | w:a1-familie | g:grammatik-possessivartikel-a1.html | l:meine-familie-a2.html'],
  ['Essen und Trinken','Du bestellst höflich und sagst, was du magst.',
   'k:a1-l4 | w:a1-essen | g:grammatik-a1-akkusativ-a1.html | d:baeckerei | a:umlaute'],
  ['Mein Tag und die Uhrzeit','Du erzählst deinen Tag und verstehst Uhrzeiten.',
   'k:a1-l5 | w:a1-tagesablauf | g:grammatik-trennbare-verben-a1.html | l:mein-tag-a2.html'],
  ['Einkaufen im Supermarkt','Du fragst, wo etwas steht, und nennst Mengen.',
   'k:a1-l6 | w:a1-einkaufen | g:grammatik-a1-plural-a1.html | d:supermarkt'],
  ['der, die, das — das erste große Rätsel','Du weißt, warum der Artikel wichtig ist, und triffst ihn öfter.',
   'g:grammatik-a1-artikel-a1.html | g:grammatik-a1-wortstellung-a1.html | a:ch'],
  ['Zu Hause','Du benennst deine Wohnung und klärst den Alltag im Haus.',
   'w:a1-wohnen | g:grammatik-a1-pronomen-a1.html | d:muell-trennen'],
  ['Nein sagen, ohne unhöflich zu sein','Du verneinst richtig und lehnst freundlich ab.',
   'g:grammatik-negation-a1.html | w:a1-tagesablauf | d:kaffee-einladen | a:r'],
  ['Die ersten Wege allein','Apotheke, Hotel, Rezept — du kommst allein durch.',
   'l:apotheke-lektion.html | d:apotheke-rezept | d:hotel-einchecken | a:s-z-ss']
]},

{ id:'A2', t:'A2 — der Alltag läuft', ziel:'Start Deutsch 2 · DTZ A2',
  u:'Termine, Ämter, Arzt, Wohnung. Du regelst deine Sachen selbst.',
  lektionen:[
  ['Termine machen und absagen','Du vereinbarst am Telefon einen Termin und sagst höflich ab.',
   'k:a2-l1 | g:grammatik-modalverben-a2.html | d:arzt-termin | l:telefonieren-lektion.html'],
  ['Beim Arzt','Du beschreibst Beschwerden, sodass man dich versteht.',
   'k:a2-l2 | w:a2-arzt | g:grammatik-perfekt-a2.html | d:beschwerden'],
  ['Eine Wohnung suchen','Du fragst bei der Besichtigung das Richtige.',
   'k:a2-l3 | w:a2-wohnung | g:grammatik-praepositionen-dativ-a2.html | d:heizung-kaputt'],
  ['Reisen und Urlaub','Du kaufst Fahrkarten und erzählst von deinen Plänen.',
   'k:a2-l4 | w:a2-unterwegs | d:bahnhof | l:Unterricht-ab-27-07/bahnhof-a2b1.html'],
  ['Kleidung kaufen und umtauschen','Du sagst Größe und Farbe und bringst zurück, was nicht passt.',
   'k:a2-l5 | w:a2-kleidung | g:grammatik-komparativ-a2.html | d:flohmarkt-handeln'],
  ['Den Weg finden','Du fragst nach dem Weg und erklärst ihn selbst.',
   'k:a2-l6 | g:grammatik-imperativ-a2.html | l:Unterricht-ab-27-07/weg-fragen-a2b1.html | a:satzmelodie'],
  ['Auf dem Amt','Du bringst dein Anliegen auf den Punkt.',
   'w:a2-amt | l:amt-a2-visuell.html | g:grammatik-dativ-a2.html | d:kindergeld-familienkasse'],
  ['Einkaufen, Café, Restaurant','Du bestellst, reservierst und sagst, wenn etwas fehlt.',
   'w:a2-essen | w:a2-einkaufen | l:baecker-cafe-a2-interaktiv.html | d:tisch-reservieren'],
  ['Bank, Post und Handy','Die drei Schalter, an denen alle hängenbleiben.',
   'w:a2-bank | w:a2-post | w:a2-handy | l:bank-konto-a2-interaktiv.html | d:post'],
  ['Arbeit und die ersten Tage','Du stellst dich im Team vor und fragst nach Abläufen.',
   'w:a2-arbeit | d:erster-tag | l:erste-tage-lektion.html | g:grammatik-reflexive-verben-a2.html'],
  ['Freizeit, Feste und Nachbarn','Du redest über das, was nach Feierabend kommt.',
   'w:a2-freizeit | w:feste | d:nachbarn | l:wetter-kleidung-a2.html'],
  ['Höflich bleiben, auch wenn es eng wird','Absagen, sich entschuldigen, freundlich nachfragen.',
   'g:grammatik-a2-hoeflich-a2.html | g:grammatik-praeteritum-sein-haben-a2.html | d:einladung-absagen | d:verspaetung-entschuldigen']
]},

{ id:'B1', t:'B1 — du kommst überall durch', ziel:'DTZ B1 · Zertifikat B1',
  u:'Arbeit, Behörden, Konflikte. Du erklärst dich und begründest deine Meinung.',
  lektionen:[
  ['Bewerbung und Lebenslauf','Du schreibst eine Bewerbung, die gelesen wird.',
   'k:b1-l1 | w:bewerbung-b1 | d:bewerbung | l:bewerbung-lektion.html'],
  ['Der erste Tag im neuen Job','Du fragst nach Zuständigkeiten, ohne unsicher zu wirken.',
   'k:b1-l2 | w:arbeit | h:arbeit | g:grammatik-relativsaetze-b1.html | d:unklare-aufgabe'],
  ['Ärger mit den Nachbarn','Du beschwerst dich, ohne zu streiten.',
   'k:b1-l3 | w:wohnen | h:wohnen | g:grammatik-passiv-praesens-b1.html | d:laerm-nachbar'],
  ['Gesund leben','Du sprichst über Gewohnheiten und setzt dir Ziele.',
   'k:b1-l4 | w:gesundheit | h:gesundheit | g:grammatik-nebensaetze-b1.html | d:bereitschaftsdienst-116117'],
  ['Nachrichten und soziale Medien','Du sagst deine Meinung und begründest sie.',
   'k:b1-l5 | w:medien | h:medien | g:grammatik-konnektoren-b1.html | l:fake-news-b1.html'],
  ['Auf dem Amt','Antrag stellen, Fristen klären, Unterlagen nachreichen.',
   'k:b1-l6 | w:amt-b1 | g:grammatik-genitiv-b1.html | d:amt | l:behoerdenbrief-b1.html'],
  ['Wohnen und Umziehen','Besichtigung, Kaution, Kartons schleppen.',
   'l:wohnungssuche-b1.html | d:wohnung | g:grammatik-wechselpraepositionen-b1.html | d:umzug-hilfe'],
  ['Geld, Einkauf und Reklamation','Du holst dir dein Recht, freundlich und bestimmt.',
   'w:einkaufen | l:Unterricht-ab-27-07/sparen-b1b2.html | d:reklamation-laden | g:grammatik-konjunktiv2-b1.html'],
  ['Reisen','Anschluss weg, Plan B, trotzdem ankommen.',
   'w:reisen | h:reisen | l:reisen-urlaub-teil-1-b1-b2.html | d:anschluss-verpasst'],
  ['Gefühle und Freundschaft','Du sagst, wie es dir geht, und klärst einen Streit.',
   'w:gefuehle | h:gefuehle | l:Unterricht-ab-27-07/freundschaft-b1b2.html | d:streit-klaeren'],
  ['Essen und Ernährung','Vom Rezept bis zur Allergie im Lokal.',
   'w:essen | h:essen | l:Unterricht-ab-27-07/ernaehrung-b1b2.html | d:allergie-erklaeren'],
  ['Typisch deutsch','Duzen, Siezen, Pünktlichkeit und ungefragte Ratschläge.',
   'w:typisch-deutsch | h:typisch-deutsch | l:Unterricht-ab-27-07/duzen-siezen-b1b2.html | d:erziehungstipp-schwieger'],
  ['Redewendungen und starke Wörter','Du klingst weniger nach Lehrbuch.',
   'w:redewendungen | w:starke-adjektive | h:redewendungen | l:wortschatz-redewendungen-b1.html'],
  ['Frei sprechen und diskutieren','Du hältst ein Gespräch am Laufen, auch wenn es hakt.',
   'l:freies-sprechen-debatten-b1.html | l:sprechclub-debatten.html | g:grammatik-modalpartikeln-b1.html']
]},

{ id:'B2', t:'B2 — du verhandelst', ziel:'Goethe B2 · telc B2',
  u:'Gehalt, Konflikte, Fachtexte, Präsentation. Du vertrittst deine Position.',
  lektionen:[
  ['Karriere und Gehalt verhandeln','Du begründest eine Forderung und hältst Einwände aus.',
   'k:b2-l1 | d:gehalt | g:grammatik-gegensatz-konnektoren-b2.html'],
  ['Weiterbildung neben dem Beruf','Beratung, Förderung, Finanzierung.',
   'k:b2-l2 | g:grammatik-nominalisierung-b1.html | l:beruf-lernen-teil-1-b1-b2.html'],
  ['Künstliche Intelligenz im Alltag','Chancen, Risiken, Regeln — und deine Haltung dazu.',
   'k:b2-l3 | w:ki-arbeitswelt | g:grammatik-passiv-b2.html | l:Unterricht-ab-27-07/ki-arbeitswelt-b2c1.html'],
  ['Einen Konflikt klären','Du sprichst an, was stört, ohne zu verletzen.',
   'k:b2-l4 | g:grammatik-konjunktiv2-vergangenheit-b2.html | d:feedback'],
  ['Konsum und Verantwortung','Studien wiedergeben, zitieren, eigene Meinung trennen.',
   'k:b2-l5 | g:grammatik-indirekte-rede-b2.html | l:influencer-konsum-teil-1-b2-c1.html'],
  ['Etwas überzeugend präsentieren','Aufbau, Einstieg, Betonung.',
   'k:b2-l6 | w:redemittel | l:plaudertisch-b2-c1.html'],
  ['Umgangssprache verstehen','Was im Lehrbuch nicht steht, aber überall gesagt wird.',
   'w:umgangssprache | h:umgangssprache | l:umgangssprache-teil-1-b2-c1.html'],
  ['Integration und Heimat','Zwei Zugehörigkeiten, eine Sprache.',
   'w:integration | l:integration-heimat-teil-1-b2-c1.html | d:heimweh-sprechen'],
  ['Arbeit, Kollegen, Homeoffice','Einarbeiten, abstimmen, Grenzen setzen.',
   'd:neue-kollegin-zeigen | l:Unterricht-ab-27-07/homeoffice-b2c1.html | g:grammatik-verben-mit-praeposition-b2.html'],
  ['Geld, Versicherung, Verträge','Widerspruch, Kaution, Kleingedrucktes.',
   'd:widerspruch-krankenkasse | d:kaution-zurueckfordern | l:daten-masche-konto-b2-lektion.html'],
  ['Gesellschaft: Meinung und Debatte','Du argumentierst gegen eine Position, die du teilst.',
   'l:Unterricht-ab-27-07/meinungsfreiheit-b2c1.html | l:Unterricht-ab-27-07/vier-tage-woche-b2c1.html | l:Unterricht-ab-27-07/ungleichheit-b2c1.html'],
  ['Schriftlich sauber','Nominalstil, Partizipien, Genitiv — die Schriftsprache.',
   'g:grammatik-nominalstil-b2.html | g:grammatik-partizipattribut-b2.html | g:grammatik-genitiv-schriftdeutsch-b2.html']
]},

{ id:'C1', t:'C1 — du bestimmst den Ton', ziel:'Goethe C1',
  u:'Register, Ironie, Rhetorik. Du sagst dasselbe auf fünf Arten — und wählst die richtige.',
  lektionen:[
  ['Forschung verständlich erklären','Erweiterte Attribute lesen und selbst bilden.',
   'k:c1-l1'],
  ['Politik und Beteiligung','Forderungen stellen, ohne die Tür zuzuschlagen.',
   'k:c1-l2 | l:leben-in-deutschland-einbuergerung-b2-c1.html'],
  ['Arbeitswelt im Wandel','Nominalstil auflösen und Verantwortung sichtbar machen.',
   'k:c1-l3 | w:c1-buero | d:c1-aufgabe-zurueckgeben | l:buero-prioritaeten-c1-lektion.html'],
  ['Wie Sprache Wirklichkeit formt','Modalpartikeln und wertende Wortwahl.',
   'k:c1-l4 | l:Unterricht-ab-27-07/gender-sprache-b2c1.html'],
  ['Migration und Zugehörigkeit','Die Frage nach dem Woher — souverän beantwortet.',
   'k:c1-l5 | d:c1-feier-woher-kommen-sie | l:Unterricht-ab-27-07/migration-b2c1.html'],
  ['Hart verhandeln, fair bleiben','Konjunktiv II als Werkzeug, nicht als Grammatikthema.',
   'k:c1-l6 | w:c1-kunden | d:c1-fehler-in-der-lieferkette'],
  ['Ämter und Bescheide','Der Bescheid stimmt nicht — und der Schalter hat keine Zeit.',
   'w:c1-amt | d:c1-amt-falscher-bescheid | l:buerokratie-dschungel-b2-c1.html'],
  ['Arzt und Gesundheitssystem','Du lässt dich nicht abspeisen.',
   'w:c1-arzt | d:c1-arzt-nicht-abspeisen-lassen | l:Unterricht-ab-27-07/gesundheitssystem-b2c1.html'],
  ['Verträge, Bank, Kleingedrucktes','Bevor du unterschreibst.',
   'w:c1-vertrag | d:c1-bank-mitverkauf-abwehren | l:vertrag-bank-c1-lektion.html'],
  ['Familie, Kita und Schule','Elterngespräch und Papierkram.',
   'w:c1-familie | d:c1-elterngespraech-schule | l:familie-kita-schule-c1-lektion.html']
]}
];

/* ---------- Fachwege: Aufsätze, keine Stufe ---------- */
const FACH = [
  ['pflege',     'Deutsch für die Pflege',            'B1–B2', 'Übergabe, Angehörige, Dokumentation.'],
  ['medizin',    'Deutsch für Mediziner',             'B2–C1', 'Anamnese, Aufklärung, Visite.'],
  ['telcmed',    'telc Medizin — Fachsprachprüfung',  'B2–C1', 'Die Prüfung, Schritt für Schritt.'],
  ['buero',      'Deutsch für Büro und Logistik',     'A2–B2', 'Mail, Telefon, Termine, Ware.'],
  ['dtz',        'DTZ — Deutsch-Test für Zuwanderer', 'A2–B1', 'Der Test, den fast alle brauchen.'],
  ['goethetelc', 'Goethe und telc — Vorbereitung',    'A2–C1', 'Format, Zeit, Punkte.']
];

/* ---------- Bauen und prüfen ---------- */
const ART = {
  k:{art:'kurs',      em:'📖', t:'Die Lektion'},
  w:{art:'woerter',   em:'🧠', t:'Die Wörter'},
  h:{art:'hoeren',    em:'🎧', t:'Hören'},
  a:{art:'aussprache',em:'👄', t:'Aussprache'},
  g:{art:'grammatik', em:'✏️', t:'Grammatik'},
  l:{art:'seite',     em:'📄', t:'Zum Vertiefen'},
  d:{art:'sprechen',  em:'💬', t:'Sprich mit Amanda'}
};

const fehlt = [];
function schritt(roh, wo) {
  const s = roh.trim();
  const k = s.slice(0, 1);
  const wert = s.slice(2).trim();
  const def = ART[k];
  if (!def) { fehlt.push(wo + ': unbekannte Art »' + s + '«'); return null; }
  const b = { art: def.art, em: def.em };

  if (k === 'k') {
    const m = kursDa(wert);
    if (!m) { fehlt.push(wo + ': Kurslektion ' + wert); return null; }
    b.id = wert; b.t = m.titel; b.u = def.t; b.dauer = m.dauer || null;
    b.lernst = (function () {
      const p = path.join(WURZEL, 'kurse', wert + '.js');
      delete window.LEKTION; delete require.cache[require.resolve(p)]; require(p);
      return (window.LEKTION.intro && window.LEKTION.intro.du_lernst) || [];
    })();
  } else if (k === 'w' || k === 'h' || k === 'a') {
    const skillId = k === 'w' ? 'wortschatz' : (k === 'h' ? 'hoeren' : 'aussprache');
    const t = themaDa(skillId, wert);
    if (!t) { fehlt.push(wo + ': ' + skillId + '/' + wert); return null; }
    const n = (t.words || t.items || []).length;
    b.id = wert; b.skill = skillId;
    b.t = t.t || t.titel || wert;
    b.u = def.t + (n ? ' · ' + n + (k === 'w' ? ' Wörter' : ' Übungen') : '');
  } else if (k === 'g' || k === 'l') {
    const s2 = seiteDa[wert];
    if (!s2) { fehlt.push(wo + ': Seite ' + wert); return null; }
    b.d = wert; b.t = s2.t; b.u = def.t; b.lvl = s2.lvl;
  } else if (k === 'd') {
    const g = gesprDa[wert];
    if (!g) { fehlt.push(wo + ': Gespräch ' + wert); return null; }
    b.id = wert; b.t = g.titel; b.u = def.t; b.dauer = g.dauer || null;
  }
  return b;
}

const raus = { stufen: [], fach: [] };
PLAN.forEach(st => {
  const lek = [];
  st.lektionen.forEach((L, i) => {
    const nr = i + 1;
    const wo = st.id + '/L' + nr;
    const bau = L[2].split('|').map(x => schritt(x, wo)).filter(Boolean);
    if (!bau.length) { fehlt.push(wo + ': KEIN EINZIGER SCHRITT — Lektion faellt weg'); return; }
    lek.push({ nr: lek.length + 1, t: L[0], ziel: L[1], bau: bau });
  });
  raus.stufen.push({ id: st.id, t: st.t, u: st.u, pruefung: st.ziel, lektionen: lek });
});
FACH.forEach(f => {
  const teile = [];
  for (let i = 1; i <= 8; i++) {
    const m = kursDa(f[0] + '-l' + i);
    if (m) teile.push({ nr: i, id: f[0] + '-l' + i, t: m.titel, dauer: m.dauer || null });
  }
  if (teile.length) raus.fach.push({ id: f[0], t: f[1], lvl: f[2], u: f[3], lektionen: teile });
});

/* ---------- Schreiben ---------- */
const kopf = `/* ============================================================
   lehrplan.js — der Weg durch den Club

   ERZEUGT von bau/mach-lehrplan.js. Nicht von Hand ändern —
   die Reihenfolge steht dort, hier steht nur das Ergebnis.

   Jeder Verweis in dieser Datei wurde beim Bauen geprüft.
   Was nicht existiert, steht nicht drin. Es gibt hier keine
   toten Knöpfe.

   Gebaut am ${new Date().toISOString().slice(0, 16).replace('T', ' ')}
   ============================================================ */
window.LEHRPLAN = `;

fs.writeFileSync(path.join(WURZEL, 'lehrplan.js'), kopf + JSON.stringify(raus, null, 1) + ';\n');

/* ---------- Bericht ---------- */
let schritte = 0, lektionen = 0;
raus.stufen.forEach(s => {
  lektionen += s.lektionen.length;
  s.lektionen.forEach(l => schritte += l.bau.length);
  const arten = {};
  s.lektionen.forEach(l => l.bau.forEach(b => arten[b.art] = (arten[b.art] || 0) + 1));
  console.log(String(s.lektionen.length).padStart(3) + ' Lektionen  ' + s.id.padEnd(4) +
    Object.entries(arten).map(([k, v]) => k + ':' + v).join(' '));
});
console.log('---');
console.log(lektionen + ' Lektionen, ' + schritte + ' Schritte in ' + raus.stufen.length + ' Stufen');
console.log(raus.fach.length + ' Fachwege mit ' + raus.fach.reduce((n, f) => n + f.lektionen.length, 0) + ' Lektionen');
if (fehlt.length) {
  console.log('\nNICHT GEFUNDEN (' + fehlt.length + ') — raus aus dem Plan:');
  fehlt.forEach(f => console.log('   ' + f));
} else {
  console.log('\nAlle Verweise gefunden.');
}
