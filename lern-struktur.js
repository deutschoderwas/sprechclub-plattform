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


  /* ============================================================
     Mehr zu diesem Bereich — einmal gebaut, von beiden benutzt

     Im Ordner liegen fast 400 fertige Seiten. Ueber die drei Tueren
     erreichbar waren 51. Themenlektionen, Wortschatzboosts,
     Spielseiten und die "vorbereitung-"-Seiten zum Ueben waren
     fertig und unsichtbar.

     lektionen-katalog.js (gebaut von bau/mach-katalog.js) weiss,
     welche Seite es wirklich gibt, wie sie heisst, welches Niveau
     sie hat, welches Bild dazugehoert und in welchen Bereich sie
     gehoert. Diese Funktion macht daraus die Liste — nach Niveau
     geordnet, damit der naechste Schritt sichtbar ist.

     Plattform und App rufen dieselbe Funktion auf. Was hier steht,
     steht dort gleich.
     ============================================================ */
  var MEHR_ART = {
    lektion: 'Lektion', wortschatz: 'Wortschatz', grammatik: 'Grammatik',
    aussprache: 'Aussprache', spiel: 'Spiel', sprechen: 'Sprechen',
    ueben: 'Übung', handout: 'Zum Ausdrucken'
  };
  var MEHR_STUFEN = ['A1', 'A1–A2', 'A2', 'A1–B1', 'A2–B1', 'B1', 'B1–B2', 'B2', 'B2–C1', 'C1'];
  var MEHR_ZEICHEN = {
    lektion:    ['📖', '#1990A4'],
    wortschatz: ['🔤', '#C9A200'],
    grammatik:  ['🧩', '#DD0000'],
    aussprache: ['🔊', '#4E9E12'],
    spiel:      ['🎲', '#8B4FC7'],
    sprechen:   ['🗣️', '#E0A106'],
    ueben:      ['✍️', '#5A6B72'],
    handout:    ['🖨️', '#5A6B72']
  };

  function mehrListe(bereichId) {
    var K = window.LEKTIONEN, M = window.BEREICH_MEHR;
    if (!K || !M || !M[bereichId]) return [];
    var nach = {};
    K.forEach(function (x) { nach[x.d] = x; });
    return M[bereichId].map(function (d) { return nach[d]; }).filter(Boolean);
  }

  function mehrHtml(bereichId, o) {
    o = o || {};
    var liste = mehrListe(bereichId);
    if (!liste.length) return '';
    mehrStil();

    var faecher = {}, reihe = [];
    liste.forEach(function (x) {
      var st = x.lvl || 'für jedes Niveau';
      if (!faecher[st]) { faecher[st] = []; reihe.push(st); }
      faecher[st].push(x);
    });
    reihe.sort(function (a, b) {
      var ia = MEHR_STUFEN.indexOf(a), ib = MEHR_STUFEN.indexOf(b);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    });

    /* Alle Seiten eines Bereichs teilen sich dasselbe Szenenbild —
       elf Mal dieselbe Miniatur untereinander sieht nach Fehler aus.
       Deshalb steht das Bild einmal gross oben, und jede Zeile
       bekommt ihr Zeichen: woran man die Art der Seite erkennt. */
    function zeile(x) {
      var a = MEHR_ZEICHEN[x.art] || MEHR_ZEICHEN.lektion;
      return '<div class="lm-paar">'
        + '<a class="lm-z" href="' + E(x.d) + '" target="_blank" rel="noopener">'
        + '<span class="ic" style="background:' + a[1] + '">' + a[0] + '</span>'
        + '<span class="tx"><b>' + E(x.t) + '</b><small>' + E(MEHR_ART[x.art] || 'Lektion')
        + (x.hand ? ' · mit Handout' : '') + '</small></span>'
        + '<span class="pf">›</span></a>'
        + (x.ueb ? '<a class="lm-u" href="' + E(x.ueb) + '" target="_blank" rel="noopener">Dazu üben →</a>' : '')
        + '</div>';
    }

    var bild = '';
    (window.BEREICHE || []).forEach(function (b) {
      if (b.id === bereichId && b.bild) bild = 'amanda/' + b.bild + '.webp';
    });

    return '<div class="lm-block">'
      + '<h3 class="lm-kopf">' + (o.nr ? '<span class="lm-nr">' + o.nr + '</span>' : '') + 'Mehr zu diesem Bereich</h3>'
      + '<p class="lm-u2">' + liste.length + ' fertige Seiten zum Lesen, Hören und Üben — von leicht nach schwer.</p>'
      + (bild ? '<div class="lm-bild"><img src="' + E(bild) + '" alt="" loading="lazy" onerror="this.parentNode.remove()"></div>' : '')
      + reihe.map(function (st) {
          return '<div class="lm-stufe"><span class="lv">' + E(st) + '</span>'
            + '<span class="anz">' + faecher[st].length + (faecher[st].length === 1 ? ' Seite' : ' Seiten') + '</span></div>'
            + '<div class="lm-liste">' + faecher[st].map(zeile).join('') + '</div>';
        }).join('')
      + '</div>';
  }

  function mehrStil() {
    if (document.getElementById('lern-mehr-stil')) return;
    var st = document.createElement('style');
    st.id = 'lern-mehr-stil';
    st.textContent = [
      '.lm-block{margin-top:26px}',
      '.lm-kopf{display:flex;align-items:center;gap:9px;font-size:17px;margin:0 0 4px}',
      '.lm-nr{display:inline-grid;place-items:center;width:25px;height:25px;border-radius:50%;',
      '  background:var(--rot,#DD0000);color:#fff;font-size:13px;font-weight:800;flex:none}',
      '.lm-u2{margin:0 0 14px;font-size:13.5px;line-height:1.5;color:var(--ink-2,var(--text-soft,#54594A))}',
      '.lm-stufe{display:flex;align-items:center;gap:10px;margin:18px 0 8px}',
      '.lm-stufe .lv{display:inline-flex;align-items:center;justify-content:center;min-width:38px;height:25px;',
      '  padding:0 9px;border-radius:40px;background:var(--petrol,var(--tuerkis-dunkel,#1990A4));color:#fff;',
      '  font-size:12.5px;font-weight:800;letter-spacing:.3px}',
      '.lm-stufe .anz{margin-left:auto;font-size:12.5px;font-weight:600;color:var(--ink-3,#8A857C)}',
      '.lm-liste{display:flex;flex-direction:column;gap:10px}',
      '.lm-paar{display:flex;flex-direction:column}',
      '.lm-z{display:flex;align-items:center;gap:12px;text-decoration:none;color:inherit;',
      '  background:var(--karte,var(--card,#FFFDF3));border:1.5px solid var(--linie,var(--line,#E7DFC7));',
      '  border-radius:16px;padding:9px 12px;min-height:66px;transition:.12s}',
      '.lm-z:hover{border-color:var(--petrol,#1990A4)}',
      '.lm-bild{border-radius:18px;overflow:hidden;margin:0 0 16px;border:1.5px solid var(--linie,#E7DFC7);',
      '  background:var(--creme,#FFF8E0)}',
      '.lm-bild img{width:100%;height:150px;object-fit:cover;display:block}',
      '.lm-z .ic{flex:none;width:46px;height:46px;border-radius:14px;display:grid;place-items:center;',
      '  font-size:21px;color:#fff;box-shadow:0 4px 10px rgba(32,33,31,.14)}',
      '.lm-z .tx{flex:1;min-width:0}',
      '.lm-z .tx b{display:block;font-size:14.5px;line-height:1.32}',
      '.lm-z .tx small{display:block;font-size:12.5px;color:var(--ink-3,#8A857C);margin-top:2px}',
      '.lm-z .pf{color:var(--ink-3,#B4ADA3);font-size:19px;flex:none}',
      '.lm-u{display:block;margin:0 0 0 22px;padding:12px 0 6px 34px;font-size:13px;font-weight:700;',
      '  border-left:2px solid var(--linie,#E7DFC7);min-height:46px;text-decoration:none;',
      '  color:var(--rot,var(--akt,#DD0000))}',
      '.lm-u:hover{text-decoration:underline}',
      '@media(max-width:640px){.lm-z{min-height:72px}.lm-bild img{height:126px}',
      '  .lm-u{margin-left:18px;padding-left:30px}}'
    ].join('');
    document.head.appendChild(st);
  }

  window.LERNSTRUKTUR = {
    mehrHtml: mehrHtml, mehrListe: mehrListe,
    tueren: tueren, werkzeuge: werkzeuge,
    tuerenHtml: tuerenHtml, werkzeugHtml: werkzeugHtml,
    weiterHtml: weiterHtml, merken: merken, zuletzt: zuletzt, vergessen: vergessen,
    stil: stil
  };
})();
