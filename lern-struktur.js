/* ============================================================
   lern-struktur.js — eine Ordnung fürs Selbstlernen, an beiden Orten

   Der Schüler soll auf der Plattform und in der App dasselbe
   sehen. Damit das nicht von Disziplin abhängt, steht die
   Ordnung nur einmal hier — als Daten, nicht als Text in zwei
   Dateien:

     1. Deutsch für die Prüfung
     2. Deutsch für die Freizeit
     3. Deutsch für den Beruf

   Dazu die Werkzeuge, die immer daneben liegen.

   Die Zahlen in den Türen werden aus den geladenen Daten
   gerechnet. Ist eine Datei (noch) nicht da, fehlt einfach die
   Zahl — es steht nie eine falsche da.

   window.LERNSTRUKTUR = {
     tueren(), werkzeuge(), tuerenHtml(fn), werkzeugHtml(fn), stil()
   }
   Beide Seiten geben ihre eigene Klickfunktion mit; das Aussehen
   kommt von hier.
   ============================================================ */
(function () {
  'use strict';

  /* Einer ist kein Plural. Vorher stand in der Tuer "1 Bereiche". */
  function viele(n, eins, mehr) { return n + ' ' + (n === 1 ? eins : mehr); }

  if (window.LERNSTRUKTUR) return;

  function E(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  /* ---------- Zahlen aus den Daten ---------- */
  function bereiche(weg) {
    return (window.BEREICHE || []).filter(function (b) { return b.weg === weg; });
  }
  function situationen(liste) {
    var da = {};
    (window.DIALOGE || []).forEach(function (d) { da[d.id] = 1; });
    var n = 0;
    liste.forEach(function (b) { (b.dlg || []).forEach(function (x) { if (da[x]) n++; }); });
    return n;
  }
  function skill(id) {
    var U = window.UEBUNGEN;
    if (!U || !U.skills) return null;
    for (var i = 0; i < U.skills.length; i++) if (U.skills[i].id === id) return U.skills[i];
    return null;
  }
  function woerter() {
    var s = skill('wortschatz'), n = 0;
    if (s) (s.themes || []).forEach(function (t) { n += (t.words || []).length; });
    return n;
  }
  function aufgaben() {
    var U = window.UEBUNGEN, n = 0;
    if (!U || !U.skills) return 0;
    U.skills.forEach(function (s) { (s.themes || []).forEach(function (t) { n += (t.exercises || []).length; }); });
    return n;
  }
  function pruefungen() {
    return (window.PRUEFUNGEN_DATEN || []).filter(function (p) { return !p.fach; }).length;
  }
  /* Zahl nur zeigen, wenn sie stimmt. */
  function teile() {
    var raus = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) raus.push(arguments[i]);
    return raus.join(' · ');
  }

  /* ---------- Die drei Türen ---------- */
  function tueren() {
    var frei = bereiche('freizeit'), ber = bereiche('beruf');
    var pz = pruefungen(), sf = situationen(frei), sb = situationen(ber);
    return [
      {
        id: 'pruefung', farbe: '#DD0000', zeichen: '🎓',
        titel: 'Für die Prüfung', i18n: 'ls_tuer_pruef',
        text: 'Von A1 bis C1: die Module einzeln üben, Musterprüfungen schreiben, den eigenen Stand prüfen.',
        zahlen: teile(pz ? pz + ' Prüfungen' : '', 'Lesen, Hören, Schreiben, Sprechen'),
        los: 'Prüfung wählen'
      },
      {
        id: 'freizeit', farbe: '#1990A4', zeichen: '🏡',
        titel: 'Für die Freizeit', i18n: 'ls_tuer_frei',
        text: 'Die Orte, an denen du jeden Tag Deutsch brauchst — vom Bäcker über den Arzt bis zum Amt.',
        zahlen: teile(frei.length ? viele(frei.length, 'Bereich', 'Bereiche') : '', sf ? viele(sf, 'Situation mit Amanda', 'Situationen mit Amanda') : ''),
        los: 'Ort suchen'
      },
      {
        id: 'beruf', farbe: '#E0A106', zeichen: '🧰',
        titel: 'Für den Beruf', i18n: 'ls_tuer_beruf',
        text: 'Erst, was in jedem Job gilt: Bewerbung, erste Tage, heikle Gespräche. Danach dein eigenes Berufsfeld.',
        zahlen: teile(ber.length ? viele(ber.length, 'Bereich', 'Bereiche') : '', sb ? viele(sb, 'Situation mit Amanda', 'Situationen mit Amanda') : ''),
        los: 'Berufsfeld suchen'
      }
    ];
  }

  /* ---------- Die Werkzeuge ---------- */
  function werkzeuge() {
    var w = woerter(), a = aufgaben();
    return [
      { id: 'vokabeln', zeichen: '🃏', titel: 'Vokabeltrainer',
        text: w ? w + ' Wörter mit Bild, Ton und Beispielsatz' : 'Wörter mit Bild, Ton und Beispielsatz' },
      { id: 'gitter', zeichen: '🎯', titel: 'Alle Übungen nach Fertigkeit',
        text: (a ? a + ' Aufgaben in ' : '') + 'Wortschatz, Grammatik, Hören, Aussprache' },
      { id: 'kurse', zeichen: '📚', titel: 'Kursbibliothek',
        text: 'Der geführte Weg A1 · A2 · B1, Lektion für Lektion' },
      { id: 'fehler', zeichen: '🩹', titel: 'Fehler-Trainer',
        text: 'Genau die Fehler üben, die dir wirklich passieren' }
    ];
  }

  /* ---------- Aussehen (gilt auf beiden Seiten) ---------- */
  function stil() {
    if (document.getElementById('lern-struktur-stil')) return;
    var s = document.createElement('style');
    s.id = 'lern-struktur-stil';
    s.textContent = [
      '.ls-tueren{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:26px;}',
      '.ls-tuer{display:block;text-align:left;background:var(--karte,var(--card,#FFFDF3));',
      '  border:2px solid var(--tinte,var(--ink,#20211F));border-radius:22px;',
      '  box-shadow:3px 4px 0 rgba(32,33,31,.10);padding:0;overflow:hidden;cursor:pointer;',
      '  font-family:inherit;width:100%;transition:transform .12s,box-shadow .12s;}',
      '.ls-tuer:hover{transform:translateY(-2px);box-shadow:4px 7px 0 rgba(32,33,31,.13);}',
      '.ls-tuer .band{height:8px;width:100%;display:block;}',
      '.ls-tuer .inn{padding:18px 20px 20px;display:block;width:100%;box-sizing:border-box;overflow-wrap:break-word;}',
      '.ls-tuer .zn{font-size:30px;line-height:1;display:block;margin-bottom:10px;}',
      '.ls-tuer b{display:block;font-family:var(--schrift-titel,"Caveat Brush",cursive);font-weight:400;',
      '  font-size:26px;line-height:1.1;margin-bottom:6px;color:var(--tinte,var(--ink,#20211F));}',
      '.ls-tuer span.u{display:block;color:var(--ink-2,var(--mute,#54594A));font-size:14.5px;line-height:1.5;}',
      '.ls-tuer .zahlen{display:block;margin-top:12px;color:var(--ink-3,var(--mute,#8A857C));font-size:13px;}',
      '.ls-tuer .los{display:inline-block;margin-top:14px;font-weight:700;font-size:14px;color:var(--rot,#DD0000);}',

      '.ls-werk-t{font-size:13px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;',
      '  color:var(--ink-3,var(--mute,#8A857C));margin:0 0 12px;}',
      '.ls-werk{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:12px;}',
      '.ls-wk{display:flex;gap:11px;align-items:flex-start;text-align:left;width:100%;cursor:pointer;',
      '  background:var(--karte,var(--card,#FFFDF3));border:1.5px solid var(--linie,var(--line,#E7DFC7));',
      '  border-radius:16px;padding:13px 15px;font-family:inherit;transition:.12s;}',
      '.ls-wk:hover{border-color:var(--petrol,#1990A4);}',
      '.ls-wk .zn{font-size:20px;line-height:1.2;flex:none;}',
      '.ls-wk b{display:block;font-size:15px;margin-bottom:2px;color:var(--tinte,var(--ink,#20211F));}',
      '.ls-wk span{display:block;font-size:12.5px;color:var(--ink-3,var(--mute,#8A857C));line-height:1.4;}',

      '.ls-weiter{display:flex;align-items:center;gap:12px;width:100%;text-align:left;cursor:pointer;',
      '  background:var(--gelb-hauch,#FFF6D9);border:2px solid var(--gelb,#FFD24A);border-radius:18px;',
      '  padding:12px 14px;font-family:inherit;margin-bottom:16px;}',
      '.ls-weiter .zn{font-size:20px;flex:none;}',
      '.ls-weiter b{display:block;font-size:14px;margin-bottom:1px;color:var(--tinte,var(--ink,#20211F));}',
      '.ls-weiter .tx > span{display:block;font-size:13px;color:var(--ink-2,var(--mute,#54594A));}',
      '.ls-weiter .pf{margin-left:auto;color:var(--ink-3,var(--mute,#B4ADA3));font-size:20px;}',
      '@media(max-width:820px){.ls-tueren{grid-template-columns:1fr;gap:12px;margin-bottom:22px;}',
      '  .ls-tuer .inn{padding:15px 16px 17px;}.ls-tuer .zn{font-size:25px;margin-bottom:7px;}',
      '  .ls-tuer b{font-size:23px;}.ls-tuer span.u{font-size:14px;}',
      '  .ls-werk{grid-template-columns:1fr;}}',
      '@media(prefers-reduced-motion:reduce){.ls-tuer{transition:none;}}'
    ].join('');
    document.head.appendChild(s);
  }

  /* ---------- Wo war ich stehengeblieben? ----------
     Beide Seiten schreiben in dieselbe Notiz. Wer in der App einen
     Bereich oeffnet und spaeter am Rechner weitermacht, findet ihn
     dort oben wieder. */
  var SCHLUESSEL = 'dow_zuletzt';

  function merken(o) {
    if (!o || !o.id) return;
    try {
      o.zeit = Date.now();
      localStorage.setItem(SCHLUESSEL, JSON.stringify(o));
    } catch (e) {}
  }
  function zuletzt() {
    try {
      var o = JSON.parse(localStorage.getItem(SCHLUESSEL) || 'null');
      if (!o || !o.id || !o.titel) return null;
      // Nach vier Wochen ist es keine Fortsetzung mehr, sondern eine
      // Erinnerung an etwas Fremdes.
      if (o.zeit && Date.now() - o.zeit > 28 * 24 * 3600 * 1000) return null;
      return o;
    } catch (e) { return null; }
  }
  function vergessen() { try { localStorage.removeItem(SCHLUESSEL); } catch (e) {} }

  function weiterHtml(klick) {
    var o = zuletzt();
    if (!o) return '';
    return '<button class="ls-weiter" type="button" onclick="' + klick(o) + '">'
      + '<span class="zn">↩︎</span>'
      + '<span class="tx"><b>Weiter, wo du warst</b>'
      + '<span>' + E(o.titel) + '</span></span>'
      + '<span class="pf">›</span></button>';
  }

  /* ---------- Bausteine ---------- */
  function tuerenHtml(klick) {
    return '<div class="ls-tueren">' + tueren().map(function (t) {
      return '<button class="ls-tuer" type="button" onclick="' + klick(t) + '">'
        + '<span class="band" style="background:' + t.farbe + '"></span>'
        + '<span class="inn">'
        + '<span class="zn">' + t.zeichen + '</span>'
        + '<b' + (t.i18n ? ' data-i18n="' + t.i18n + '"' : '') + '>' + E(t.titel) + '</b>'
        + '<span class="u">' + E(t.text) + '</span>'
        + '<span class="zahlen">' + E(t.zahlen) + '</span>'
        + '<span class="los">' + E(t.los) + ' →</span>'
        + '</span></button>';
    }).join('') + '</div>';
  }
  function werkzeugHtml(klick, nur) {
    var liste = werkzeuge().filter(function (w) { return !nur || nur.indexOf(w.id) >= 0; });
    if (!liste.length) return '';
    return '<p class="ls-werk-t" data-i18n="ls_werkzeuge">Werkzeuge — immer verfügbar</p><div class="ls-werk">'
      + liste.map(function (w) {
          return '<button class="ls-wk" type="button" onclick="' + klick(w) + '">'
            + '<span class="zn">' + w.zeichen + '</span>'
            + '<span><b>' + E(w.titel) + '</b><span>' + E(w.text) + '</span></span></button>';
        }).join('')
      + '</div>';
  }

  window.LERNSTRUKTUR = {
    tueren: tueren, werkzeuge: werkzeuge,
    tuerenHtml: tuerenHtml, werkzeugHtml: werkzeugHtml,
    weiterHtml: weiterHtml, merken: merken, zuletzt: zuletzt, vergessen: vergessen,
    stil: stil
  };
})();
