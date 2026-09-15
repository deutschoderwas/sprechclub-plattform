/* ============================================================
   bau/pruef-lektionen.js — schaut in jede Lektion hinein

   Nicht "ist die Datei da", sondern: ist wirklich etwas drin,
   ist es vollständig, ist es lösbar?

   Geprüft wird jede Kurslektion in kurse/ auf:
     · die acht Bausteine (meta, intro, dialog, vokabeln,
       grammatik, uebungen, zusammenfassung, sprechen)
     · Mindestmengen, damit eine Lektion trägt
     · jede Übung einzeln: hat sie eine Lösung, zeigt die
       Lösung auf eine Antwort, die es gibt, ist sie eindeutig
     · Platzhalter, Blindtext, leere Felder
     · das Bild, das die Lektion nennt — liegt es da?

   Aufruf:  node bau/pruef-lektionen.js [--alles]
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const W = path.join(__dirname, '..');
const ALLES = process.argv.includes('--alles');

/* Was eine Lektion mindestens braucht, damit sie trägt. */
const MINDEST = {
  vokabeln: 10,
  uebungen: 8,
  dialogZeilen: 6,
  grammatikBloecke: 1,
  kernsaetze: 3,
  duLernst: 3
};

/* Ein Feld gilt als leer, wenn es fehlt, leer ist oder nach
   Platzhalter aussieht. */
const PLATZHALTER = /\b(lorem ipsum|TODO|TBD|XXX|Platzhalter|\.\.\.\s*$|\[[^\]]*einf[üu]gen[^\]]*\])/i;

function leer(v) {
  if (v == null) return true;
  if (typeof v === 'string') return !v.trim() || PLATZHALTER.test(v);
  if (Array.isArray(v)) return v.length === 0;
  if (typeof v === 'object') return Object.keys(v).length === 0;
  return false;
}
function text(v) { return typeof v === 'string' ? v : JSON.stringify(v || ''); }


/* ---------- Bilder ----------
   Erster Anlauf suchte in bilder/ und meldete alle 72 Lektionen als
   bildlos. Die Bilder liegen in illu/ — lektion.html baut den Pfad
   selbst zusammen. Der Fund war falsch, die Regel ist jetzt richtig. */
function bildPruefen(id, wo, melde, stufe) {
  if (!id) return;
  if (String(id).indexOf('photo-') === 0) return;        // Unsplash, liegt im Netz
  const gross = fs.existsSync(path.join(W, 'illu', id + '.jpg'));
  const klein = fs.existsSync(path.join(W, 'illu', id + '-s.jpg'));
  if (!gross) melde(stufe || 'mittel', wo + ': das Bild »' + id + '« liegt nicht in illu/');
  else if (!klein) melde('leicht', wo + ': zu »' + id + '« fehlt die kleine Fassung ' + id + '-s.jpg');
}

function lade(datei) {
  const p = path.join(W, 'kurse', datei);
  delete global.window.LEKTION;
  delete require.cache[require.resolve(p)];
  require(p);
  return global.window.LEKTION || null;
}

/* ---------- eine einzelne Übung prüfen ---------- */
function pruefUebung(u, i, melde) {
  const wo = 'Übung ' + (i + 1) + ' (' + (u.typ || 'ohne Typ') + ')';
  if (!u.typ) { melde('schwer', wo + ': kein Typ — die Seite weiß nicht, wie sie sie zeichnen soll'); return; }
  if (leer(u.frage) && leer(u.text) && leer(u.muster)) melde('schwer', wo + ': keine Aufgabenstellung');

  switch (u.typ) {
    case 'mc': case 'listen': case 'bild': {
      const o = u.optionen || [];
      if (o.length < 2) { melde('schwer', wo + ': weniger als zwei Antwortmöglichkeiten'); break; }
      if (typeof u.richtig !== 'number') { melde('schwer', wo + ': keine Lösung hinterlegt'); break; }
      if (u.richtig < 0 || u.richtig >= o.length)
        melde('schwer', wo + ': die Lösung zeigt auf Antwort ' + u.richtig + ', es gibt aber nur ' + o.length);
      const doppelt = o.filter((x, j) => o.indexOf(x) !== j);
      if (doppelt.length) melde('mittel', wo + ': zwei gleiche Antwortmöglichkeiten (' + doppelt[0] + ')');
      if (o.some(x => leer(x))) melde('schwer', wo + ': eine Antwortmöglichkeit ist leer');
      if (u.typ === 'listen' && leer(u.audio)) melde('schwer', wo + ': Hörübung ohne Hörtext');
      if (u.typ === 'bild') {
        if (leer(u.bild)) melde('schwer', wo + ': Bildübung ohne Bild');
        else bildPruefen(u.bild, wo, melde, 'schwer');
      }
      break;
    }
    case 'gapbank': {
      if (leer(u.text)) { melde('schwer', wo + ': kein Lückentext'); break; }
      const luecken = (text(u.text).match(/___|\{\{|\[\s*\]/g) || []).length;
      const loes = Array.isArray(u.loesung) ? u.loesung : (u.loesung ? [u.loesung] : []);
      if (!loes.length) { melde('schwer', wo + ': keine Lösung'); break; }
      if (luecken && luecken !== loes.length)
        melde('schwer', wo + ': ' + luecken + ' Lücken, aber ' + loes.length + ' Lösungen');
      const bank = u.bank || [];
      if (bank.length) {
        const fehlt = loes.filter(l => bank.indexOf(l) < 0);
        if (fehlt.length) melde('schwer', wo + ': Lösung »' + fehlt[0] + '« steht nicht in der Wortbank');
        if (bank.length <= loes.length) melde('mittel', wo + ': Wortbank ohne einen einzigen Ablenker');
      }
      break;
    }
    case 'order': {
      const w = u.woerter || [];
      if (w.length < 3) { melde('schwer', wo + ': weniger als drei Teile zum Ordnen'); break; }
      if (leer(u.loesung)) { melde('schwer', wo + ': keine Lösung'); break; }
      /* Genau so vergleichen wie lektion.html es tut: nm() dort wirft
         Satzzeichen weg. Wer hier strenger prüft, meldet ein Komma in
         der Musterlösung als fehlendes Wortkärtchen — ein Phantom. */
      const ohne = t => String(t).toLowerCase().replace(/[.!?,;:]/g, '').trim();
      const wOhne = w.map(ohne);
      const loes = (Array.isArray(u.loesung) ? u.loesung : String(u.loesung).split(/\s+/)).map(ohne).filter(Boolean);
      const fehlt = loes.filter(t => wOhne.indexOf(t) < 0);
      if (fehlt.length) melde('schwer', wo + ': die Lösung braucht »' + fehlt[0] + '«, das Teil gibt es nicht');
      if (loes.length !== w.length) melde('mittel', wo + ': ' + w.length + ' Teile, Lösung nutzt ' + loes.length);
      break;
    }
    case 'match': {
      const p = u.paare || [];
      if (p.length < 3) melde('schwer', wo + ': weniger als drei Paare');
      p.forEach((x, j) => {
        const a = Array.isArray(x) ? x : [x.l || x.links || x.a, x.r || x.rechts || x.b];
        if (leer(a[0]) || leer(a[1])) melde('schwer', wo + ': Paar ' + (j + 1) + ' ist halb leer');
      });
      const links = p.map(x => Array.isArray(x) ? x[0] : (x.l || x.links || x.a));
      if (new Set(links).size !== links.length) melde('mittel', wo + ': zwei gleiche Begriffe links');
      break;
    }
    case 'type': {
      if (leer(u.muster) && leer(u.frage)) melde('schwer', wo + ': keine Aufgabe');
      const ak = u.akzeptiert || [];
      if (!ak.length) melde('schwer', wo + ': keine einzige akzeptierte Antwort — nichts ist richtig');
      else if (ak.length === 1) melde('mittel', wo + ': nur eine akzeptierte Schreibweise, jede andere gilt als falsch');
      break;
    }
    default:
      melde('mittel', wo + ': unbekannter Typ »' + u.typ + '«');
  }
  if (!leer(u.hinweis) && text(u.hinweis).length < 8) melde('leicht', wo + ': der Hinweis ist ein Wortfetzen');
}

/* ---------- eine Lektion prüfen ---------- */
function pruefLektion(datei) {
  const funde = [];
  const melde = (stufe, was) => funde.push({ stufe, was });
  let L;
  try { L = lade(datei); }
  catch (e) { return [{ stufe: 'schwer', was: 'lässt sich nicht laden: ' + e.message }]; }
  if (!L) return [{ stufe: 'schwer', was: 'setzt window.LEKTION nicht' }];

  /* meta */
  const m = L.meta || {};
  ['kurs', 'nr', 'titel', 'level'].forEach(k => {
    if (leer(m[k])) melde('schwer', 'meta.' + k + ' fehlt');
  });
  if (leer(m.dauer)) melde('leicht', 'meta.dauer fehlt — die Lektion sagt nicht, wie lange sie dauert');
  /* lektion.html baut den Pfad als illu/<id>.jpg, klein als illu/<id>-s.jpg.
     Ein Unsplash-Verweis (photo-…) geht ins Netz und wird hier nicht geprüft. */
  bildPruefen(m.bild, 'meta.bild', melde, 'mittel');
  if (!m.bild) melde('mittel', 'meta.bild fehlt — die Lektion hat kein Titelbild');

  /* intro */
  const intro = L.intro || {};
  if (leer(intro.text)) melde('schwer', 'intro.text fehlt — die Lektion beginnt ohne ein Wort');
  else if (text(intro.text).length < 80) melde('mittel', 'intro.text ist sehr knapp (' + text(intro.text).length + ' Zeichen)');
  const dl = intro.du_lernst || [];
  if (dl.length < MINDEST.duLernst) melde('schwer', '»Du lernst« hat nur ' + dl.length + ' Punkte (mindestens ' + MINDEST.duLernst + ')');
  if (dl.some(x => leer(x))) melde('schwer', 'in »Du lernst« steht ein leerer Punkt');

  /* dialog */
  const d = L.dialog || {};
  const zeilen = d.lines || [];
  if (!zeilen.length) melde('schwer', 'kein Dialog — die Lektion zeigt keine echte Situation');
  else {
    if (zeilen.length < MINDEST.dialogZeilen) melde('mittel', 'Dialog mit nur ' + zeilen.length + ' Zeilen (mindestens ' + MINDEST.dialogZeilen + ')');
    if (leer(d.situation)) melde('mittel', 'der Dialog sagt nicht, wo er spielt');
    bildPruefen(d.bild, 'dialog.bild', melde, 'mittel');
    zeilen.forEach((z, i) => {
      if (leer(z.txt)) melde('schwer', 'Dialogzeile ' + (i + 1) + ' ist leer');
      if (leer(z.sp)) melde('mittel', 'Dialogzeile ' + (i + 1) + ' hat keinen Sprecher');
    });
    const spr = new Set(zeilen.map(z => z.sp).filter(Boolean));
    if (spr.size < 2) melde('mittel', 'im Dialog spricht nur eine Person');
  }

  /* vokabeln */
  const v = L.vokabeln || [];
  if (v.length < MINDEST.vokabeln) melde(v.length ? 'mittel' : 'schwer', 'nur ' + v.length + ' Vokabeln (mindestens ' + MINDEST.vokabeln + ')');
  v.forEach((x, i) => {
    if (leer(x.de)) melde('schwer', 'Vokabel ' + (i + 1) + ' hat kein Wort');
    if (leer(x.bsp)) melde('leicht', 'Vokabel »' + (x.de || i + 1) + '« hat keinen Beispielsatz');
    if (x.bild) bildPruefen(x.bild, 'Vokabel »' + (x.de || i + 1) + '«', melde, 'mittel');
  });
  const woerter = v.map(x => x.de);
  const dopp = woerter.filter((x, i) => woerter.indexOf(x) !== i);
  if (dopp.length) melde('mittel', 'die Vokabel »' + dopp[0] + '« steht doppelt');

  /* grammatik */
  const g = L.grammatik || {};
  const bl = g.blocks || [];
  if (!bl.length) melde('schwer', 'kein Grammatikteil');
  else {
    if (leer(g.title)) melde('mittel', 'der Grammatikteil hat keine Überschrift');
    bl.forEach((b, i) => {
      if (leer(b.h)) melde('mittel', 'Grammatikblock ' + (i + 1) + ' ohne Überschrift');
      if (leer(b.txt) && !b.table && !b.list) melde('schwer', 'Grammatikblock ' + (i + 1) + ' ist leer');
      if (b.table) {
        const t = b.table;
        if (!Array.isArray(t) || t.length < 2) melde('mittel', 'Grammatiktabelle ' + (i + 1) + ' hat weniger als zwei Zeilen');
        else {
          const breit = t[0].length;
          t.forEach((r, j) => { if (r.length !== breit) melde('mittel', 'Grammatiktabelle ' + (i + 1) + ', Zeile ' + (j + 1) + ' hat ' + r.length + ' Spalten statt ' + breit); });
        }
      }
    });
  }

  /* uebungen */
  const u = L.uebungen || [];
  if (u.length < MINDEST.uebungen) melde(u.length ? 'mittel' : 'schwer', 'nur ' + u.length + ' Übungen (mindestens ' + MINDEST.uebungen + ')');
  u.forEach((x, i) => pruefUebung(x, i, melde));
  const typen = new Set(u.map(x => x.typ));
  if (u.length >= 6 && typen.size < 3) melde('mittel', 'nur ' + typen.size + ' verschiedene Übungsformen — das wird monoton');
  if (u.length && !u.some(x => x.typ === 'type' || x.typ === 'gapbank' || x.typ === 'order'))
    melde('mittel', 'keine einzige Übung, in der selbst produziert wird — nur Anklicken');

  /* zusammenfassung */
  const z = L.zusammenfassung || {};
  const ks = z.kernsaetze || [];
  if (ks.length < MINDEST.kernsaetze) melde(ks.length ? 'mittel' : 'schwer', 'nur ' + ks.length + ' Kernsätze (mindestens ' + MINDEST.kernsaetze + ')');
  if (leer(z.merke) && leer(z.tipp)) melde('mittel', 'die Zusammenfassung hat weder Merksatz noch Tipp');

  /* sprechen */
  const sp = L.sprechen || {};
  if (leer(sp.task)) melde('schwer', 'kein Sprechauftrag — die Lektion endet ohne Sprechen');
  else if (text(sp.task).length < 40) melde('mittel', 'der Sprechauftrag ist zu knapp, um ihn auszuführen');
  if (leer(sp.tipps)) melde('leicht', 'der Sprechauftrag gibt keine Satzanfänge mit');

  /* Platzhalter irgendwo */
  const ganz = JSON.stringify(L);
  const p = ganz.match(PLATZHALTER);
  if (p) melde('schwer', 'Platzhalter im Text gefunden: »' + p[0].slice(0, 40) + '«');

  return funde;
}

/* ---------- alle ---------- */
global.window = global.window || {};
const dateien = fs.readdirSync(path.join(W, 'kurse'))
  .filter(f => f.endsWith('.js')).sort();

let schwer = 0, mittel = 0, leicht = 0, sauber = 0;
const alle = [];
dateien.forEach(f => {
  const funde = pruefLektion(f);
  const s = funde.filter(x => x.stufe === 'schwer').length;
  const mi = funde.filter(x => x.stufe === 'mittel').length;
  const l = funde.filter(x => x.stufe === 'leicht').length;
  schwer += s; mittel += mi; leicht += l;
  if (!funde.length) sauber++;
  alle.push({ datei: f, funde, s, mi, l });
});

console.log('=== ' + dateien.length + ' Kurslektionen geprüft ===');
console.log(sauber + ' ohne jeden Fund · ' + schwer + ' schwere · ' + mittel + ' mittlere · ' + leicht + ' leichte\n');

alle.filter(x => ALLES ? x.funde.length : x.s || x.mi)
    .sort((a, b) => (b.s * 100 + b.mi) - (a.s * 100 + a.mi))
    .forEach(x => {
      console.log('--- ' + x.datei + '  (' + x.s + ' schwer, ' + x.mi + ' mittel, ' + x.l + ' leicht)');
      x.funde.filter(f => ALLES || f.stufe !== 'leicht')
             .forEach(f => console.log('    [' + f.stufe + '] ' + f.was));
    });

/* Eine Zeile, die ein Bauskript auswerten kann. */
console.log('\nERGEBNIS ' + JSON.stringify({ lektionen: dateien.length, sauber, schwer, mittel, leicht }));
process.exitCode = schwer ? 1 : 0;
