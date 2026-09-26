/* ============================================================
   mein-weg.js — der Kurs, den es vorher nicht gab

   Warum:
   Am 15.09. gemessen — von 17 Community-Mitgliedern waren 17
   angemeldet und 15 hatten nie eine Lektion geöffnet. Nicht weil
   etwas gesperrt war, sondern weil niemand wusste, wo er anfangen
   soll. 381 Lektionsseiten, 72 Kurslektionen, 110 Gespräche lagen
   nebeneinander wie eine Wand.

   Ab jetzt: eine Stufe, nummerierte Lektionen, in jeder Lektion
   vier bis sechs Schritte. Oben steht immer, was als Nächstes
   dran ist. Wer fertig ist, rückt auf.

   Der Weg steht in lehrplan.js (erzeugt, alle Verweise geprüft).
   Der Stand steht in der Datenbank (weg_schritt, profiles.stufe),
   nicht im Browser — wer das Gerät wechselt, ist da, wo er war.

   Nach außen:
     window.renderWeg()        — die ganze Ansicht
     window.wegWeiterKarte()   — die Karte fürs Dashboard
     window.wegStufeSetzen(s)  — Stufe von Hand wählen
     window.wegStand()         — { stufe, lektion, prozent }
   ============================================================ */
(function () {
  'use strict';
  if (window.MEINWEG) return;

  var STUFEN = ['A1', 'A2', 'B1', 'B2', 'C1'];
  var STAND = { stufe: null, quelle: null, schritte: {}, geladen: false, offen: null };

  function E(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }
  function el(id) { return document.getElementById(id); }
  function plan() { return window.LEHRPLAN || { stufen: [], fach: [] }; }
  function sb() { return window.sb || null; }
  function note(t) { try { if (window.toast) window.toast(t); } catch (e) {} }

  function stufeDaten(id) {
    return (plan().stufen || []).filter(function (s) { return s.id === id; })[0] || null;
  }

  /* Ein Schritt hat einen eindeutigen Namen, der sich nie ändert:
     'kurs:a1-l1', 'seite:mein-tag-a2.html', 'woerter:a1-essen'. */
  function schluessel(b) { return b.art + ':' + (b.id || b.d || ''); }

  /* ---------- Stand laden ----------
     Diese Datei wird geladen, bevor die Anmeldung steht. Wer hier
     einmal "kein Supabase" sieht und aufgibt, zeigt der Schuelerin
     fuer immer einen leeren Kurs. Also: kurz warten und nochmal. */
  var versuche = 0;
  function standLaden() {
    var c = sb();
    if (!c) {
      if (versuche++ < 15) {
        return new Promise(function (ok) {
          setTimeout(function () { ok(standLaden()); }, 400);
        });
      }
      STAND.geladen = true;
      return Promise.resolve(STAND);
    }
    return c.rpc('mein_weg').then(function (r) {
      var d = r && r.data;
      if (d && d.ok) {
        STAND.stufe = d.stufe || null;
        STAND.quelle = d.stufe_quelle || null;
        STAND.schritte = {};
        (d.schritte || []).forEach(function (s) {
          STAND.schritte[s.stufe + '/' + s.lektion + '/' + s.schritt] = !!s.fertig;
        });
        if (d.zuletzt) STAND.offen = d.zuletzt;
      }
      STAND.geladen = true;
      return STAND;
    }).catch(function () { STAND.geladen = true; return STAND; });
  }

  /* ---------- Ist dieser Schritt geschafft? ----------
     Drei Quellen, weil der Fortschritt an drei Orten entsteht:
     die Datenbank (hier gemeldet), die Lektionsseiten (melden sich
     selbst über lektion-konto.js) und die Übungen (rechnen lokal). */
  function fertig(stufe, nr, b) {
    var k = stufe + '/' + nr + '/' + schluessel(b);
    if (STAND.schritte[k]) return true;

    if ((b.art === 'seite' || b.art === 'grammatik') && b.d) {
      var LS = window.LEKTIONSSTAND;
      if (LS && LS[b.d] && LS[b.d].fertig) return true;
    }
    if (b.art === 'woerter' || b.art === 'hoeren' || b.art === 'aussprache') {
      try {
        if (window.ubThemaProzent) {
          var sk = b.skill || (b.art === 'woerter' ? 'wortschatz' : b.art);
          if (window.ubThemaProzent(sk, b.id) >= 100) return true;
        }
      } catch (e) {}
    }
    if (b.art === 'sprechen' && b.id) {
      try {
        var d = window.lsGet ? window.lsGet('dlg_fertig', {}) : {};
        if (d && d[b.id]) return true;
      } catch (e) {}
    }
    return false;
  }

  /* Supabase gibt bei rpc() kein echtes Promise zurueck, sondern ein
     Objekt, das nur .then() kennt. Ein angehaengtes .catch() warf
     deshalb sofort "catch is not a function" — mitten in wegOeffnen,
     BEVOR die Seite wechselte. Folge: kein einziger Schritt im Kurs
     liess sich oeffnen. Promise.resolve() macht daraus ein echtes
     Promise, und der try-Block sorgt dafuer, dass ein Fehler beim
     Mitschreiben nie wieder das Oeffnen verhindert. */
  function still(anfrage) {
    try { Promise.resolve(anfrage).then(null, function () {}); } catch (e) {}
  }

  function melden(stufe, nr, b, istFertig) {
    var k = stufe + '/' + nr + '/' + schluessel(b);
    if (istFertig) STAND.schritte[k] = true;
    var c = sb(); if (!c) return;
    try {
      still(c.rpc('schritt_fertig', {
        p_stufe: stufe, p_lektion: nr, p_schritt: schluessel(b),
        p_art: b.art, p_sekunden: 0, p_fertig: !!istFertig
      }));
    } catch (e) {}
  }

  /* ---------- Rechnen ---------- */
  /* Eine Lektion ist fertig, wenn ihre vier Teile fertig sind. */
  function lektionStand(stufe, L) {
    var t = teileVon(stufe, L).filter(function (x) { return x.b; }), n = 0;
    t.forEach(function (x) { if (teilFertig(stufe, L, x)) n++; });
    return { fertig: n, gesamt: t.length, prozent: t.length ? Math.round(n * 100 / t.length) : 0 };
  }
  function stufeStand(id) {
    var st = stufeDaten(id);
    if (!st) return { fertig: 0, gesamt: 0, prozent: 0, lektionen: 0 };
    var f = 0, g = 0, ganze = 0;
    st.lektionen.forEach(function (L) {
      var s = lektionStand(id, L);
      f += s.fertig; g += s.gesamt;
      if (s.prozent === 100) ganze++;
    });
    return { fertig: f, gesamt: g, prozent: g ? Math.round(f * 100 / g) : 0, lektionen: ganze, von: st.lektionen.length };
  }
  /* Die nächste offene Lektion — und in ihr der nächste offene Schritt. */
  function naechstes(id) {
    var st = stufeDaten(id); if (!st) return null;
    for (var i = 0; i < st.lektionen.length; i++) {
      var L = st.lektionen[i], s = lektionStand(id, L);
      if (s.prozent < 100) {
        var offen = teileVon(id, L).filter(function (x) { return x.b && !teilFertig(id, L, x); })[0];
        return { L: L, stand: s, teil: offen, schritt: offen && offen.b };
      }
    }
    return null; // Stufe geschafft
  }
  function naechsteStufe(id) {
    var i = STUFEN.indexOf(id);
    return (i >= 0 && i < STUFEN.length - 1) ? STUFEN[i + 1] : null;
  }

  /* ============================================================
     VIER FESTE TEILE PRO LEKTION

     Julia: "Ein Weg wie in einer App." Jede Lektion ist innen gleich
     gebaut — 1 Wörter · 2 Hören · 3 Grammatik · 4 Gespräch. Woher ein
     Teil kommt, ist egal; wichtig ist, dass er immer an derselben
     Stelle steht:

       1. ein passender Schritt aus lehrplan.js,
       2. sonst der Teil der Lektionsseite (lektion.html?teil=…),
       3. sonst, was lehrplan-teile.js für diese Lektion vorsieht.
     ============================================================ */
  var TEILE = [
    { k: 'woerter',   nr: 1, t: 'Wörter',    em: '🧠' },
    { k: 'hoeren',    nr: 2, t: 'Hören',     em: '🎧' },
    { k: 'grammatik', nr: 3, t: 'Grammatik', em: '✏️' },
    { k: 'sprechen',  nr: 4, t: 'Gespräch',  em: '💬' }
  ];
  var KURSTEIL = {
    woerter:   'Die Wörter der Lektion',
    hoeren:    'Den Dialog der Lektion hören',
    grammatik: 'Die Grammatik der Lektion',
    sprechen:  'Sprechen: die Aufgabe der Lektion'
  };
  function extra(stufe, L) {
    return (window.LEHRPLAN_TEILE || {})[stufe + '/' + L.nr] || {};
  }
  function kursVon(L) { return L.bau.filter(function (b) { return b.art === 'kurs'; })[0] || null; }
  function seiteVon(L) { return L.bau.filter(function (b) { return b.art === 'seite'; })[0] || null; }

  function teileVon(stufe, L) {
    if (L._teile && L._teile.stufe === stufe) return L._teile.liste;
    var kurs = kursVon(L), ex = extra(stufe, L), vergeben = {};
    var liste = TEILE.map(function (T) {
      var i, b = null;
      for (i = 0; i < L.bau.length; i++) {
        if (L.bau[i].art === T.k && !vergeben[i]) { b = L.bau[i]; vergeben[i] = true; break; }
      }
      if (!b && kurs) b = { art: 'kursteil', id: kurs.id + '#' + T.k, kurs: kurs.id, teil: T.k, t: KURSTEIL[T.k] };
      if (!b && ex[T.k]) {
        b = ex[T.k];
        if (b.art === 'seite' && !b.d) { var s = seiteVon(L); if (s) b = { art: 'seite', d: s.d, t: b.t }; else b = null; }
      }
      return { T: T, b: b };
    });
    L._teile = { stufe: stufe, liste: liste };
    return liste;
  }
  function teilFertig(stufe, L, x) {
    if (!x || !x.b) return false;
    if (fertig(stufe, L.nr, x.b)) return true;
    if (x.b.art === 'kursteil') { var k = kursVon(L); return !!(k && fertig(stufe, L.nr, k)); }
    return false;
  }
  /* Was in der Lektion sonst noch liegt: die ganze Lektion am Stück,
     die Lektionsseite, Aussprache, zusätzliche Wörter. */
  function mehrVon(stufe, L) {
    var benutzt = teileVon(stufe, L).map(function (x) { return x.b; });
    var dateien = benutzt.map(function (b) { return b && b.d; }).filter(Boolean);
    var out = [];
    L.bau.forEach(function (b, i) {
      if (benutzt.indexOf(b) >= 0) return;
      if (b.d && dateien.indexOf(b.d) >= 0) return;      /* schon als Teil verlinkt */
      out.push({ b: b, i: i });
    });
    return out;
  }
  function lektionBild(stufe, L, klein) {
    var k = kursVon(L), n = (k && k.bild) || extra(stufe, L).bild || 'kat-alltag';
    return 'illu/' + n + (klein ? '-s' : '') + '.jpg';
  }


  /* Was die Startseite braucht, um die grosse Karte zu zeichnen.
     Vorher fragte start.js window.kursStand() ab — eine Funktion aus
     weg.js, das gar nicht eingebunden ist. Die Karte zeigte deshalb
     immer "Fang mit Lektion 1 an", egal wie weit jemand war. */
  window.wegStand = function () {
    if (!STAND.stufe) return { stufe: null };
    var n = naechstes(STAND.stufe), s = stufeStand(STAND.stufe);
    var st = stufeDaten(STAND.stufe);
    var bild = null;
    if (n) bild = lektionBild(STAND.stufe, n.L, false);
    return {
      stufe: STAND.stufe,
      niveau: STAND.stufe,
      lektion: n ? n.L.nr : null,
      nr: n ? n.L.nr : null,
      titel: n ? n.L.t : null,
      ziel: n ? n.L.ziel : null,
      anzahl: st ? st.lektionen.length : 0,
      prozent: s.prozent,
      fertig: s.lektionen,
      angefangen: s.fertig > 0,
      bild: bild,
      geschafft: !n
    };
  };

  /* ---------- Stufe setzen ---------- */
  window.wegStufeSetzen = function (stufe, quelle) {
    stufe = String(stufe || '').toUpperCase();
    if (STUFEN.indexOf(stufe) < 0) return;
    STAND.stufe = stufe; STAND.quelle = quelle || 'selbst';
    var c = sb();
    if (c) try { still(c.rpc('stufe_setzen', { p_stufe: stufe, p_prozent: null, p_quelle: quelle || 'selbst' })); } catch (e) {}
    try { if (window.lsSet) window.lsSet('niveau', stufe); } catch (e) {}
    STAND.ansicht = null; STAND.offenLektion = null; STAND.waehlen = false;
    note('Alles klar — dein Kurs startet bei ' + stufe + '.');
    neuZeichnen();
  };

  /* ============================================================
     ÖFFNEN
     ============================================================ */
  /* Nach einer Übung oder einem Gespräch zurück in den Kurs — und den
     Haken gleich zeigen. Ohne das sprang lernen.js in die zuletzt
     besuchte Themenseite zurück, und der Kurs sah aus wie vorher. */
  var zurueckGesetzt = false;
  function zurueckInDenKurs() {
    if (zurueckGesetzt) return;
    zurueckGesetzt = true;
    ['dgSchliessen', 'ubClose'].forEach(function (name) {
      var alt = window[name];
      if (typeof alt !== 'function') return;
      window[name] = function () {
        var r = alt.apply(this, arguments);
        if (STAND.ausKurs) { STAND.ausKurs = false; setTimeout(neuZeichnen, 180); }
        return r;
      };
    });
  }
  function oeffne(stufe, L, b) {
    if (!b) return;
    STAND.ausKurs = true;
    zurueckInDenKurs();
    try { melden(stufe, L.nr, b, false); } catch (e) {}   // darf nie das Oeffnen blockieren
    if (b.art === 'kurs' || b.art === 'kursteil') {
      var t = String(b.kurs || b.id).split('-l');
      location.href = 'lektion.html?k=' + encodeURIComponent(t[0]) + '&l=' + encodeURIComponent(t[1] || '1')
        + (b.teil ? '&teil=' + encodeURIComponent(b.teil) : '');
      return;
    }
    if (b.art === 'seite' || b.art === 'grammatik') { window.open(b.d, '_blank', 'noopener'); return; }
    if (b.art === 'sprechen') { if (window.lernDialog) window.lernDialog(b.id); return; }
    if (window.lernUeben) {
      window.lernUeben(b.skill || (b.art === 'woerter' ? 'wortschatz' : b.art), b.id);
      return;
    }
  }
  function lektionVon(stufe, nr) {
    var st = stufeDaten(stufe); if (!st) return null;
    return st.lektionen.filter(function (x) { return x.nr === nr; })[0] || null;
  }
  window.wegOeffnen = function (stufe, nr, i) {
    var L = lektionVon(stufe, nr); if (!L) return;
    oeffne(stufe, L, L.bau[i]);
  };
  window.wegTeil = function (stufe, nr, k) {
    var L = lektionVon(stufe, nr); if (!L) return;
    var x = teileVon(stufe, L).filter(function (y) { return y.T.k === k; })[0];
    if (x) oeffne(stufe, L, x.b);
  };
  window.wegTeilHaken = function (stufe, nr, k, ev) {
    if (ev) { ev.stopPropagation(); ev.preventDefault(); }
    var L = lektionVon(stufe, nr); if (!L) return;
    var x = teileVon(stufe, L).filter(function (y) { return y.T.k === k; })[0];
    if (!x || !x.b) return;
    melden(stufe, nr, x.b, true);
    neuZeichnen();
  };
  window.wegHaken = function (stufe, nr, i, ev) {
    if (ev) { ev.stopPropagation(); ev.preventDefault(); }
    var L = lektionVon(stufe, nr); if (!L || !L.bau[i]) return;
    melden(stufe, nr, L.bau[i], true);
    neuZeichnen();
  };
  window.wegLektion = function (nr) {
    STAND.offenLektion = nr;
    neuZeichnen();
    try { window.scrollTo(0, 0); } catch (e) {}
  };
  window.wegUebersicht = function () {
    STAND.offenLektion = null;
    neuZeichnen();
    try { window.scrollTo(0, 0); } catch (e) {}
  };
  window.wegZeigeStufe = function (s) {
    STAND.ansicht = s; STAND.offenLektion = null; neuZeichnen();
  };
  window.wegStufeWechseln = function () { STAND.waehlen = true; neuZeichnen(); };

  /* ============================================================
     ZEICHNEN
     ============================================================ */
  function balken(p, gross) {
    if (!p) return '';
    return '<div class="mw-bal' + (gross ? ' gross' : '') + '"><i style="width:' + p + '%"></i></div>';
  }
  function bild(stufe, L, klein, kl) {
    return '<span class="' + (kl || 'lw-bild') + '"><img src="' + lektionBild(stufe, L, klein) + '" alt="" loading="lazy" '
      + 'onerror="this.remove()"></span>';
  }

  /* --- Noch keine Stufe: die Einstufung --- */
  function zeichneEinstufung() {
    var karten = (plan().stufen || []).map(function (s) {
      return '<button class="mw-stufe" onclick="wegStufeSetzen(\'' + s.id + '\',\'selbst\')">'
        + '<b>' + E(s.id) + '</b>'
        + '<span class="mw-stufe-t">' + E(s.t.replace(/^[A-C]\d\s*—\s*/, '')) + '</span>'
        + '<span class="mw-stufe-u">' + E(s.u) + '</span>'
        + '<span class="mw-stufe-n">' + s.lektionen.length + ' Lektionen · Ziel: ' + E(s.pruefung) + '</span>'
        + '</button>';
    }).join('');
    /* Ein Klick reicht. Der Test ist ein Angebot, keine Tuer:
       wer sein Niveau kennt, soll nicht erst zehn Minuten testen
       muessen, um den Lernbereich zu sehen. Falsch gewaehlt ist
       kein Schaden — die Stufe laesst sich jederzeit aendern. */
    return '<div class="lw-kopf"><h2>Lernen</h2><p>Ein Weg, Lektion für Lektion. Jede Lektion: Wörter, Hören, Grammatik, Gespräch.</p></div>'
      + '<div class="mw-start">'
      + '<div class="mw-start-kopf">'
      + '<h2>Wo fängst du an?</h2>'
      + '<p>Tipp einfach dein Niveau an — danach steht hier deine erste Lektion und jeden Tag, was dran ist. Du kannst es später jederzeit ändern.</p>'
      + '</div>'
      + '<div class="mw-stufen">' + karten + '</div>'
      + '<div class="mw-oder"><span>oder du bist dir nicht sicher</span></div>'
      + '<p class="mw-testhin"><a href="niveau-test-club.html">Einstufungstest machen</a> — ein paar Minuten, dann wählen wir die Stufe für dich.</p>'
      + '</div>';
  }

  /* --- Die vier Teile als kleine Punkte auf der Karte --- */
  function punkte(stufe, L) {
    return '<span class="lw-punkte">' + teileVon(stufe, L).map(function (x) {
      var f = teilFertig(stufe, L, x);
      return '<i class="' + (f ? 'an' : '') + '" title="' + x.T.t + (f ? ' — geschafft' : '') + '">' + x.T.nr + '</i>';
    }).join('') + '</span>';
  }

  /* --- Eine Lektion als Bildkarte --- */
  function karte(stufe, L, dran) {
    var s = lektionStand(stufe, L), voll = s.prozent === 100;
    return '<button class="lw-karte' + (dran ? ' dran' : '') + (voll ? ' voll' : '') + '" onclick="wegLektion(' + L.nr + ')">'
      + bild(stufe, L, true, 'lw-karte-bild')
      + '<span class="lw-karte-txt">'
      +   '<span class="lw-karte-kick">Lektion ' + L.nr + (dran ? ' · <b>jetzt dran</b>' : voll ? ' · ✓ geschafft' : '') + '</span>'
      +   '<b class="lw-karte-t">' + E(L.t) + '</b>'
      +   '<small>' + E(L.ziel || '') + '</small>'
      +   punkte(stufe, L)
      + '</span></button>';
  }

  /* --- Oben: die Stufen zum Umschalten --- */
  function stufenLeiste(zeige) {
    return '<div class="lw-stufen" role="tablist">' + STUFEN.map(function (s) {
      var meine = s === STAND.stufe;
      return '<button role="tab" class="lw-st' + (s === zeige ? ' an' : '') + '" onclick="wegZeigeStufe(\'' + s + '\')">'
        + s + (meine ? '<i title="deine Stufe"></i>' : '') + '</button>';
    }).join('') + '</div>';
  }

  /* --- Die große Weiter-Karte mit Bild --- */
  function weiterKarte(stufe) {
    var n = naechstes(stufe);
    if (!n) {
      var w = naechsteStufe(stufe);
      return '<div class="lw-weiter fertig"><div class="lw-weiter-txt">'
        + '<span class="mw-kick">' + E(stufe) + ' komplett</span>'
        + '<h3>Du hast die ganze Stufe geschafft.</h3>'
        + (w ? '<button class="mw-btn gross" onclick="wegStufeSetzen(\'' + w + '\',\'aufgerueckt\')">Weiter mit ' + w + ' →</button>' : '')
        + '</div></div>';
    }
    var x = n.teil;
    return '<div class="lw-weiter">'
      + bild(stufe, n.L, false, 'lw-weiter-bild')
      + '<div class="lw-weiter-txt">'
      +   '<span class="mw-kick">Weiter geht es hier · Lektion ' + n.L.nr + '</span>'
      +   '<h3>' + E(n.L.t) + '</h3>'
      +   '<p>' + E(n.L.ziel || '') + '</p>'
      +   '<div class="lw-weiter-knopf">'
      +     '<button class="mw-btn gross" onclick="wegTeil(\'' + stufe + '\',' + n.L.nr + ',\'' + x.T.k + '\')">'
      +       x.T.nr + ' ' + x.T.t + ' →</button>'
      +     '<button class="lw-link" onclick="wegLektion(' + n.L.nr + ')">Lektion ansehen</button>'
      +   '</div>'
      + '</div></div>';
  }

  /* --- Die Übersicht einer Stufe --- */
  function zeichneStufe() {
    var zeige = STAND.ansicht || STAND.stufe;
    var st = stufeDaten(zeige);
    if (!st) return zeichneEinstufung();
    var s = stufeStand(zeige), n = naechstes(zeige), dranNr = n ? n.L.nr : null;
    var meine = zeige === STAND.stufe;

    return '<div class="lw-kopf">'
      +   '<div><h2>Lernen</h2><p>' + E(st.t) + ' · ' + s.lektionen + ' von ' + s.von + ' Lektionen geschafft</p></div>'
      +   stufenLeiste(zeige)
      + '</div>'
      + (meine ? weiterKarte(zeige)
               : '<div class="lw-fremd">Du schaust dir <b>' + zeige + '</b> an. Deine Stufe ist ' + E(STAND.stufe || '—') + '.'
                 + ' <button class="lw-link" onclick="wegStufeSetzen(\'' + zeige + '\',\'selbst\')">' + zeige + ' als meine Stufe festlegen</button></div>')
      + '<div class="lw-liste-kopf"><h3>Alle Lektionen</h3><span>Ziel: ' + E(st.pruefung) + '</span></div>'
      + '<div class="lw-git">' + st.lektionen.map(function (L) { return karte(zeige, L, meine && L.nr === dranNr); }).join('') + '</div>'
      + zeichneFach();
  }

  /* --- Eine Lektion von innen: vier Teile, immer gleich --- */
  function zeichneTeil(stufe, L, x, dran) {
    var f = teilFertig(stufe, L, x), b = x.b;
    if (!b) return '';
    var titel = b.t, unter = '';
    if (b.art === 'woerter') { titel = (b.u && /Wörter/.test(b.u)) ? 'Die Wörter der Lektion' : b.t; unter = (b.u || '').replace(/^Die Wörter · /, ''); }
    else if (b.art === 'hoeren') { titel = /^[a-z0-9-]+$/.test(b.t) ? 'Hören und verstehen' : b.t; unter = (b.u || '').replace(/^Hören · /, '') || 'Hörübungen'; }
    else if (b.art === 'grammatik') { unter = 'Grammatik' + (b.lvl ? ' · ' + b.lvl : ''); }
    else if (b.art === 'sprechen') { unter = 'Sprich mit Amanda' + (b.dauer ? ' · ' + b.dauer : ''); }
    else if (b.art === 'kursteil') { unter = 'In der Lektion'; }
    else if (b.art === 'seite') { unter = 'Auf der Lektionsseite'; }
    return '<div class="lw-teil' + (f ? ' fertig' : '') + (dran ? ' dran' : '') + '" role="button" tabindex="0" '
      + 'onclick="wegTeil(\'' + stufe + '\',' + L.nr + ',\'' + x.T.k + '\')" '
      + 'onkeydown="if(event.key===\'Enter\')this.click()">'
      + '<span class="lw-teil-nr">' + (f ? '✓' : x.T.nr) + '</span>'
      + '<span class="lw-teil-txt"><span class="lw-teil-art">' + x.T.em + ' ' + x.T.t + (dran ? ' · <b>jetzt dran</b>' : '') + '</span>'
      +   '<b>' + E(titel) + '</b><small>' + E(unter) + '</small></span>'
      + '<button class="lw-teil-hak' + (f ? ' an' : '') + '" title="' + (f ? 'geschafft' : 'als geschafft markieren') + '" '
      +   'onclick="wegTeilHaken(\'' + stufe + '\',' + L.nr + ',\'' + x.T.k + '\',event)">' + (f ? '✓' : '') + '</button>'
      + '</div>';
  }
  function zeichneLektionInnen(stufe, L) {
    var kurs = kursVon(L), teile = teileVon(stufe, L);
    var ersteOffen = teile.filter(function (x) { return x.b && !teilFertig(stufe, L, x); })[0];
    var s = lektionStand(stufe, L);
    var lernst = (kurs && kurs.lernst) || [];
    var mehr = mehrVon(stufe, L).map(function (m) {
      var t = m.b.art === 'kurs' ? 'Die ganze Lektion am Stück' : m.b.art === 'seite' ? 'Die Lektionsseite' :
              m.b.art === 'aussprache' ? 'Aussprache üben' : m.b.art === 'woerter' ? 'Noch mehr Wörter' : m.b.t;
      return '<button class="lw-mehr-k" onclick="wegOeffnen(\'' + stufe + '\',' + L.nr + ',' + m.i + ')">'
        + '<span>' + (m.b.em || '•') + '</span><b>' + E(t) + '</b><small>' + E(m.b.dauer || m.b.u || '') + '</small></button>';
    }).join('');

    return '<button class="lw-zurueck" onclick="wegUebersicht()">← Alle Lektionen</button>'
      + '<div class="lw-held">'
      +   bild(stufe, L, false, 'lw-held-bild')
      +   '<div class="lw-held-txt">'
      +     '<span class="mw-kick">' + E(stufe) + ' · Lektion ' + L.nr + '</span>'
      +     '<h2>' + E(L.t) + '</h2>'
      +     '<p>' + E(L.ziel || '') + '</p>'
      +     (lernst.length ? '<ul class="lw-lernst">' + lernst.map(function (x) { return '<li>' + E(x) + '</li>'; }).join('') + '</ul>' : '')
      +     '<div class="lw-held-stand">' + balken(s.prozent || 1, true) + '<span>' + s.fertig + ' von 4 Teilen</span></div>'
      +   '</div>'
      + '</div>'
      + '<div class="lw-teile">' + teile.map(function (x) { return zeichneTeil(stufe, L, x, x === ersteOffen); }).join('') + '</div>'
      + (mehr ? '<h3 class="lw-h3">Mehr zu dieser Lektion</h3><div class="lw-mehr">' + mehr + '</div>' : '');
  }

  /* --- Fachwege --- */
  function zeichneFach() {
    var f = plan().fach || [];
    if (!f.length) return '';
    return '<div class="mw-fach">'
      + '<h3>Für den Beruf und die Prüfung</h3>'
      + '<p class="mw-fach-u">Eigene Kurse, die neben deiner Stufe laufen.</p>'
      + '<div class="mw-fach-git">'
      + f.map(function (k) {
        return '<a class="mw-fk" href="lektion.html?k=' + encodeURIComponent(k.id) + '&l=1">'
          + '<b>' + E(k.t) + '</b><small>' + E(k.u) + '</small>'
          + '<span>' + k.lektionen.length + ' Lektionen · ' + E(k.lvl) + '</span></a>';
      }).join('')
      + '</div></div>';
  }

  function zeichneWahl() {
    return '<button class="lw-zurueck" onclick="MEINWEG.zurueck()">← Zurück</button>' + zeichneEinstufung();
  }

  /* ---------- Die Ansicht: Lernen (und #weg, das dasselbe zeigt) ---------- */
  function inhalt() {
    if (STAND.waehlen) return zeichneWahl();
    if (!STAND.stufe && !STAND.ansicht) return zeichneEinstufung();
    var zeige = STAND.ansicht || STAND.stufe;
    if (STAND.offenLektion) {
      var L = lektionVon(zeige, STAND.offenLektion);
      if (L) return zeichneLektionInnen(zeige, L);
    }
    return zeichneStufe();
  }
  function zeichneIn(id) {
    var v = el(id); if (!v) return;
    stilEinbauen();
    v.classList.add('lw');
    if (!STAND.geladen) {
      v.innerHTML = '<div class="mw-laedt">Einen Moment, ich hole deinen Stand …</div>';
      standLaden().then(function () { zeichneIn(id); });
      return;
    }
    v.innerHTML = inhalt();
  }
  function neuZeichnen() {
    ['v-lernen', 'v-weg'].forEach(function (id) {
      var v = el(id); if (v && v.classList.contains('active')) zeichneIn(id);
    });
  }
  window.renderWeg = function () { zeichneIn('v-weg'); };
  window.renderLernen = function () { zeichneIn('v-lernen'); };
  window.renderKursLernen = window.renderLernen;


  /* Die Karte fürs Dashboard — kurz, ein Knopf. */
  window.wegWeiterKarte = function () {
    stilEinbauen();
    if (!STAND.geladen || !STAND.stufe) return '';
    var n = naechstes(STAND.stufe);
    if (!n) {
      var w = naechsteStufe(STAND.stufe);
      return '<div class="mw-dash"><span class="mw-kick">' + STAND.stufe + ' geschafft</span>'
        + '<b>Die ganze Stufe ist durch.</b>'
        + '<a class="mw-btn" href="#lernen">' + (w ? 'Weiter mit ' + w : 'Zum Kurs') + ' →</a></div>';
    }
    var s = stufeStand(STAND.stufe);
    return '<div class="mw-dash">'
      + '<span class="mw-kick">' + STAND.stufe + ' · Lektion ' + n.L.nr + ' von ' + s.von + '</span>'
      + '<b>' + E(n.L.t) + '</b>'
      + '<small>' + E(n.L.ziel) + '</small>'
      + balken(s.prozent)
      + '<a class="mw-btn" href="#lernen">Weitermachen →</a></div>';
  };

  window.MEINWEG = {
    laden: function () { stilEinbauen(); return standLaden(); },
    stand: function () { return STAND; },
    zurueck: function () { STAND.waehlen = false; neuZeichnen(); }
  };

  /* fortschritt.js holt die gelesenen Lektionsseiten nach und meldet
     sich dann. Ohne das stuende der Kurs auf null, obwohl die Person
     Seiten laengst durchhat. */
  window.addEventListener('lektionsstand-da', function () {
    try { neuZeichnen();
          var k = el('wegKarte'); if (k && window.wegKarteZeichnen) window.wegKarteZeichnen(); } catch (e) {}
  });

  /* Wenn der Einstufungstest im selben Browser lief, aber noch nicht
     in der Datenbank steht: einmal nachtragen. */
  window.addEventListener('DOMContentLoaded', function () {
    standLaden().then(function () {
      if (STAND.stufe) return;
      try {
        var r = JSON.parse(localStorage.getItem('dow_niveautest') || 'null');
        if (r && r.stufe && STUFEN.indexOf(r.stufe) >= 0) {
          STAND.stufe = r.stufe; STAND.quelle = 'test';
          var c = sb();
          if (c) try { still(c.rpc('stufe_setzen', { p_stufe: r.stufe, p_prozent: r.prozent || null, p_quelle: 'test' })); } catch (e) {}
        }
      } catch (e) {}
    });
  });

  /* ---------- Aussehen ---------- */
  function stilEinbauen() {
    if (!el('lw-stil')) {
      var l = document.createElement('style'); l.id = 'lw-stil';
      l.textContent = ".lw{--lw-ink:#14181B;--lw-soft:#5A6B72;--lw-line:#E7ECEE;--lw-turq:#1B9BC0;--lw-turq-d:#15788F;--lw-turq-ink:#10627A;--lw-turq-soft:#E6F8FC;--lw-gold:#EBA30B;--lw-gold-soft:#FDF1D6;--lw-gut:#0A7D72;--lw-gut-soft:#E3F6F3;max-width:980px;margin:0 auto}\n.lw-kopf{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin:0 0 18px}\n.lw-kopf h2{font-size:clamp(26px,4vw,34px);margin:0 0 4px;letter-spacing:-.02em;line-height:1.1}\n.lw-kopf p{margin:0;color:var(--lw-soft);font-size:15px}\n.lw-stufen{display:flex;gap:6px;background:#fff;border:1.5px solid var(--lw-line);border-radius:999px;padding:4px}\n.lw-st{position:relative;font:inherit;font-weight:800;font-size:14px;min-width:48px;min-height:40px;border:none;border-radius:999px;background:none;color:var(--lw-ink);cursor:pointer}\n.lw-st.an{background:var(--lw-ink);color:#fff}\n.lw-st i{position:absolute;top:5px;right:7px;width:7px;height:7px;border-radius:99px;background:var(--lw-gold)}\n.lw-fremd{background:var(--lw-gold-soft);border:1.5px solid var(--lw-gold);border-radius:14px;padding:12px 16px;margin:0 0 18px;font-size:14.5px}\n.lw-link{font:inherit;font-weight:700;color:var(--lw-turq-ink);background:none;border:none;cursor:pointer;padding:8px 4px;text-decoration:underline;text-underline-offset:3px}\n/* Weiter-Karte */\n.lw-weiter{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);background:#fff;border:1.5px solid var(--lw-line);border-radius:22px;overflow:hidden;margin:0 0 30px;box-shadow:0 10px 30px rgba(20,24,27,.06)}\n.lw-weiter.fertig{grid-template-columns:1fr}\n.lw-weiter-bild{display:block;min-height:230px;background:var(--lw-turq-soft)}\n.lw-weiter-bild img,.lw-held-bild img,.lw-karte-bild img{width:100%;height:100%;object-fit:cover;display:block}\n.lw-weiter-txt{padding:26px 26px 24px;display:flex;flex-direction:column;justify-content:center;gap:6px}\n.lw-weiter-txt h3{font-size:clamp(22px,3vw,28px);margin:2px 0;letter-spacing:-.01em;line-height:1.15}\n.lw-weiter-txt p{margin:0 0 10px;color:var(--lw-soft);font-size:15px;line-height:1.5}\n.lw-weiter-knopf{display:flex;align-items:center;gap:10px;flex-wrap:wrap}\n/* Lektionskarten */\n.lw-liste-kopf{display:flex;justify-content:space-between;align-items:baseline;gap:10px;flex-wrap:wrap;margin:0 0 12px}\n.lw-liste-kopf h3{margin:0;font-size:19px}\n.lw-liste-kopf span{color:var(--lw-soft);font-size:13.5px}\n.lw-git{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:14px;margin-bottom:26px}\n.lw-karte{display:flex;flex-direction:column;text-align:left;font:inherit;color:inherit;background:#fff;border:1.5px solid var(--lw-line);border-radius:18px;overflow:hidden;cursor:pointer;padding:0;transition:transform .15s,box-shadow .15s,border-color .15s}\n.lw-karte:hover{transform:translateY(-2px);border-color:var(--lw-turq);box-shadow:0 10px 24px rgba(20,24,27,.08)}\n.lw-karte.dran{border-color:var(--lw-gold);box-shadow:0 0 0 3px var(--lw-gold-soft)}\n.lw-karte-bild{display:block;height:140px;background:var(--lw-turq-soft)}\n.lw-karte.voll .lw-karte-bild{opacity:.75}\n.lw-karte-txt{display:flex;flex-direction:column;gap:3px;padding:14px 16px 16px}\n.lw-karte-kick{font-size:11.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--lw-soft)}\n.lw-karte-kick b{color:#8A5A00}\n.lw-karte-t{font-size:17px;line-height:1.25}\n.lw-karte-txt small{color:var(--lw-soft);font-size:13.5px;line-height:1.45}\n.lw-punkte{display:flex;gap:6px;margin-top:10px}\n.lw-punkte i{font-style:normal;width:24px;height:24px;border-radius:99px;display:inline-flex;align-items:center;justify-content:center;font-size:11.5px;font-weight:800;background:#F1F4F5;color:var(--lw-soft)}\n.lw-punkte i.an{background:var(--lw-gut);color:#fff}\n/* Lektion innen */\n.lw-zurueck{font:inherit;font-weight:700;font-size:14.5px;background:#fff;border:1.5px solid var(--lw-line);border-radius:999px;padding:10px 18px;min-height:44px;cursor:pointer;margin:0 0 14px}\n.lw-zurueck:hover{border-color:var(--lw-turq)}\n.lw-held{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);background:#fff;border:1.5px solid var(--lw-line);border-radius:22px;overflow:hidden;margin:0 0 18px}\n.lw-held-bild{display:block;min-height:250px;background:var(--lw-turq-soft)}\n.lw-held-txt{padding:24px 26px;display:flex;flex-direction:column;gap:6px}\n.lw-held-txt h2{font-size:clamp(24px,3.4vw,32px);margin:0;letter-spacing:-.02em;line-height:1.12}\n.lw-held-txt p{margin:0;color:var(--lw-soft);font-size:15px;line-height:1.5}\n.lw-lernst{margin:8px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:5px}\n.lw-lernst li{font-size:14.5px;padding-left:22px;position:relative}\n.lw-lernst li:before{content:'✓';position:absolute;left:0;color:var(--lw-gut);font-weight:800}\n.lw-held-stand{display:flex;align-items:center;gap:10px;margin-top:12px}\n.lw-held-stand .mw-bal{flex:1}\n.lw-held-stand span{font-size:13px;color:var(--lw-soft);white-space:nowrap}\n.lw-teile{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-bottom:26px}\n.lw-teil{display:flex;align-items:center;gap:14px;background:#fff;border:1.5px solid var(--lw-line);border-radius:18px;padding:16px;cursor:pointer;transition:border-color .15s,transform .15s}\n.lw-teil:hover,.lw-teil:focus-visible{border-color:var(--lw-turq);transform:translateY(-1px);outline:none}\n.lw-teil.dran{border-color:var(--lw-gold);box-shadow:0 0 0 3px var(--lw-gold-soft)}\n.lw-teil.fertig{background:var(--lw-gut-soft);border-color:#BFE6DF}\n.lw-teil-nr{flex:0 0 auto;width:44px;height:44px;border-radius:99px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;background:var(--lw-turq-soft);color:var(--lw-turq-ink)}\n.lw-teil.fertig .lw-teil-nr{background:var(--lw-gut);color:#fff}\n.lw-teil.dran .lw-teil-nr{background:var(--lw-gold);color:#fff}\n.lw-teil-txt{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}\n.lw-teil-art{font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--lw-soft)}\n.lw-teil-art b{color:#8A5A00}\n.lw-teil-txt b{font-size:15.5px;line-height:1.3}\n.lw-teil-txt small{font-size:13px;color:var(--lw-soft)}\n.lw-teil-hak{flex:0 0 auto;width:44px;height:44px;border-radius:99px;border:1.5px solid var(--lw-line);background:#fff;color:#fff;font-weight:800;font-size:17px;cursor:pointer}\n.lw-teil-hak.an{background:var(--lw-gut);border-color:var(--lw-gut)}\n.lw-teil-hak:hover{border-color:var(--lw-gut)}\n.lw-h3{font-size:17px;margin:0 0 10px}\n.lw-mehr{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px;margin-bottom:26px}\n.lw-mehr-k{display:grid;grid-template-columns:auto 1fr;column-gap:10px;align-items:center;text-align:left;font:inherit;color:inherit;background:#fff;border:1.5px solid var(--lw-line);border-radius:14px;padding:12px 14px;cursor:pointer;min-height:56px}\n.lw-mehr-k:hover{border-color:var(--lw-turq)}\n.lw-mehr-k span{grid-row:span 2;font-size:20px}\n.lw-mehr-k b{font-size:14.5px}\n.lw-mehr-k small{color:var(--lw-soft);font-size:12.5px}\n@media(max-width:720px){\n  .lw-weiter,.lw-held{grid-template-columns:1fr}\n  .lw-weiter-bild{min-height:170px}\n  .lw-held-bild{min-height:180px}\n  .lw-weiter-txt,.lw-held-txt{padding:18px}\n  .lw-teile{grid-template-columns:1fr}\n  .lw-git{grid-template-columns:1fr}\n  .lw-kopf{align-items:flex-start}\n  .lw-stufen{width:100%;justify-content:space-between}\n  .lw-st{flex:1}\n}\n";
      document.head.appendChild(l);
    }
    if (el('mw-stil')) return;
    var s = document.createElement('style'); s.id = 'mw-stil';
    s.textContent = [
      ':root{--mw-ink:#14181B;--mw-soft:#5A6B72;--mw-line:#E7ECEE;--mw-karte:#FFFFFF;--mw-turq:#1B9BC0;--mw-turqd:#10627A;--mw-mint:#E6F8FC;--mw-rot:#D42A21;--mw-gold:#FFE100;--mw-gruen:#4E9E12}',
      '.mw-laedt{padding:44px 18px;text-align:center;color:var(--mw-soft)}',
      '.mw-kick{display:inline-block;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--mw-turqd)}',
      /* Kopf */
      '.mw-kopf{display:flex;gap:20px;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;margin-bottom:18px}',
      '.mw-kopf-l{flex:1 1 320px;min-width:0}',
      '.mw-kopf h2{font-size:clamp(22px,3.4vw,30px);margin:4px 0 6px;line-height:1.15}',
      '.mw-kopf p{margin:0;color:var(--mw-soft);max-width:52ch}',
      '.mw-kopf-r{display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center}',
      '.mw-kopf-r>span{font-size:12.5px;color:var(--mw-soft)}',
      '.mw-ring{width:78px;height:78px;border-radius:50%;display:grid;place-items:center;border:3px solid var(--mw-turq);background:var(--mw-mint)}',
      '.mw-ring b{font-size:24px;line-height:1}.mw-ring i{font-size:12px;font-style:normal;color:var(--mw-soft)}',
      '.mw-klein{border:1.5px solid var(--mw-line);background:#fff;border-radius:999px;padding:5px 12px;font-size:12.5px;cursor:pointer;color:var(--mw-soft)}',
      '.mw-klein:hover{border-color:var(--mw-turqd);color:var(--mw-turqd)}',
      /* Weiter-Karte */
      '.mw-weiter{background:linear-gradient(135deg,#E6F8FC,#FFFFFF);border:2px solid var(--mw-turq);border-radius:20px;padding:22px;margin-bottom:26px}',
      '.mw-weiter h2{font-size:clamp(19px,2.8vw,24px);margin:6px 0 4px;line-height:1.2}',
      '.mw-weiter p{margin:0 0 14px;color:var(--mw-soft)}',
      '.mw-weiter.geschafft{background:linear-gradient(135deg,#F3FBEA,#FFFFFF);border-color:var(--mw-gruen)}',
      '.mw-weiter-bal{display:flex;align-items:center;gap:10px;margin-bottom:14px}',
      '.mw-weiter-bal span{font-size:12.5px;color:var(--mw-soft);white-space:nowrap}',
      '.mw-weiter-u{display:block;margin-top:8px;font-size:12.5px;color:var(--mw-soft)}',
      '.mw-btn{display:inline-block;border:none;background:var(--mw-turqd);color:#fff;font-weight:700;font-size:15px;',
      '  padding:12px 22px;border-radius:999px;cursor:pointer;text-decoration:none;transition:transform .12s}',
      '.mw-btn:hover{transform:translateY(-1px);background:#12798a}',
      '.mw-btn.gross{font-size:16px;padding:14px 26px}',
      /* Balken */
      '.mw-bal{height:6px;border-radius:99px;background:var(--mw-line);overflow:hidden;flex:1}',
      '.mw-bal i{display:block;height:100%;background:var(--mw-turqd);border-radius:99px;transition:width .3s}',
      '.mw-bal.gross{height:9px}',
      /* In einer Spalte (Karte, Dashboard) darf der Balken nicht
         schrumpfen — sonst ist er null Pixel hoch und unsichtbar. */
      '.mw-dash .mw-bal{flex:0 0 auto;height:8px;width:100%;margin:7px 0 3px}',
      /* Liste */
      '.mw-liste-kopf{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:0 0 10px;flex-wrap:wrap}',
      '.mw-liste-kopf h3{margin:0;font-size:17px}',
      '.mw-liste-kopf span{font-size:12.5px;color:var(--mw-soft)}',
      '.mw-liste{display:flex;flex-direction:column;gap:10px}',
      '.mw-l{border:1.5px solid var(--mw-line);border-radius:16px;background:var(--mw-karte);overflow:hidden}',
      '.mw-l.dran{border-color:var(--mw-turq);box-shadow:0 2px 14px rgba(159,228,241,.4)}',
      '.mw-l.fertig{background:#FBFDF8;border-color:#DCEBCB}',
      '.mw-l-kopf{width:100%;display:flex;align-items:center;gap:13px;padding:14px 16px;background:none;border:none;',
      '  text-align:left;cursor:pointer;font:inherit;color:inherit}',
      '.mw-l-nr{flex:0 0 32px;height:32px;border-radius:50%;display:grid;place-items:center;font-weight:800;',
      '  background:var(--mw-mint);color:var(--mw-turqd);font-size:14px}',
      '.mw-l.fertig .mw-l-nr{background:#E4F3D4;color:var(--mw-gruen)}',
      '.mw-l-txt{flex:1;min-width:0}',
      '.mw-l-txt b{display:block;font-size:15.5px;line-height:1.25}',
      '.mw-l-txt small{display:block;color:var(--mw-soft);font-size:12.5px;margin-top:2px}',
      '.mw-l-rechts{display:flex;align-items:center;gap:8px;flex:0 0 auto}',
      '.mw-l-z{font-size:12.5px;color:var(--mw-soft);font-variant-numeric:tabular-nums}',
      '.mw-jetzt{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.05em;',
      '  background:var(--mw-gold);color:var(--mw-ink);padding:3px 9px;border-radius:999px}',
      '.mw-l>.mw-bal{border-radius:0;height:4px}',
      '.mw-l-bau{display:flex;flex-direction:column;border-top:1.5px solid var(--mw-line)}',
      /* Schritt */
      '.mw-s{display:flex;align-items:center;gap:12px;padding:11px 16px;cursor:pointer;border-bottom:1px solid var(--mw-line)}',
      '.mw-s:last-child{border-bottom:none}',
      '.mw-s:hover{background:var(--mw-mint)}',
      '.mw-s-em{flex:0 0 26px;font-size:19px;text-align:center}',
      '.mw-s-txt{flex:1;min-width:0}',
      '.mw-s-txt b{display:block;font-size:14.5px;font-weight:600;line-height:1.3}',
      '.mw-s-txt small{display:block;color:var(--mw-soft);font-size:12px;margin-top:1px}',
      '.mw-s.fertig .mw-s-txt b{color:var(--mw-soft)}',
      '.mw-s-hak{flex:0 0 26px;width:26px;height:26px;border-radius:50%;border:1.5px solid var(--mw-line);',
      '  background:#fff;cursor:pointer;font-size:13px;color:#fff;line-height:1;display:grid;place-items:center}',
      '.mw-s-hak:hover{border-color:var(--mw-turqd)}',
      '.mw-s-hak.an{background:var(--mw-gruen);border-color:var(--mw-gruen)}',
      /* Einstufung */
      '.mw-start-kopf{text-align:center;max-width:56ch;margin:0 auto 26px}',
      '.mw-start-kopf h2{font-size:clamp(23px,4vw,32px);margin:6px 0 10px}',
      '.mw-start-kopf p{color:var(--mw-soft);margin:0 0 18px}',
      '.mw-oder{display:flex;align-items:center;gap:14px;color:var(--mw-soft);font-size:13px;margin:0 0 18px}',
      '.mw-oder::before,.mw-oder::after{content:"";flex:1;height:1px;background:var(--mw-line)}',
      '.mw-oder{margin:22px 0 12px}',
      '.mw-testhin{margin:0;font-size:14px;color:var(--mw-soft);line-height:1.5}',
      '.mw-testhin a{color:inherit;font-weight:600;text-decoration:underline;text-underline-offset:3px}',
      '.mw-stufen{display:grid;grid-template-columns:repeat(auto-fit,minmax(215px,1fr));gap:12px}',
      '.mw-stufe{text-align:left;border:1.5px solid var(--mw-line);background:var(--mw-karte);border-radius:16px;',
      '  padding:16px;cursor:pointer;font:inherit;color:inherit;display:flex;flex-direction:column;gap:3px}',
      '.mw-stufe:hover{border-color:var(--mw-turqd);background:var(--mw-mint)}',
      '.mw-stufe b{font-size:21px;color:var(--mw-turqd);line-height:1}',
      '.mw-stufe-t{font-weight:700;font-size:14.5px}',
      '.mw-stufe-u{color:var(--mw-soft);font-size:12.5px;line-height:1.4}',
      '.mw-stufe-n{margin-top:5px;font-size:11.5px;color:var(--mw-turqd);font-weight:600}',
      '.mw-zurueck{border:none;background:none;color:var(--mw-turqd);font-weight:600;cursor:pointer;',
      '  padding:0 0 14px;font-size:14px}',
      /* Fachwege */
      '.mw-fach{margin-top:30px;padding-top:24px;border-top:1.5px solid var(--mw-line)}',
      '.mw-fach h3{margin:0 0 4px;font-size:17px}',
      '.mw-fach-u{margin:0 0 14px;color:var(--mw-soft);font-size:13.5px}',
      '.mw-fach-git{display:grid;grid-template-columns:repeat(auto-fit,minmax(215px,1fr));gap:11px}',
      '.mw-fk{border:1.5px solid var(--mw-line);border-radius:14px;padding:14px;background:var(--mw-karte);',
      '  text-decoration:none;color:inherit;display:flex;flex-direction:column;gap:3px}',
      '.mw-fk:hover{border-color:var(--mw-turqd);background:var(--mw-mint)}',
      '.mw-fk b{font-size:14.5px;line-height:1.25}',
      '.mw-fk small{color:var(--mw-soft);font-size:12.5px}',
      '.mw-fk span{margin-top:4px;font-size:11.5px;color:var(--mw-turqd);font-weight:600}',
      /* Dashboard-Karte */
      '.mw-dash{background:linear-gradient(135deg,#E6F8FC,#FFFFFF);border:2px solid var(--mw-turq,#1B9BC0);',
      '  border-radius:18px;padding:18px;display:flex;flex-direction:column;gap:7px}',
      '.mw-dash b{font-size:17px;line-height:1.2}',
      '.mw-dash small{color:#5A6B72;font-size:13px}',
      '.mw-dash .mw-btn{align-self:flex-start;margin-top:4px}',
      /* Handy */
      '@media(max-width:620px){',
      '  .mw-kopf{flex-direction:column;gap:14px}',
      '  .mw-kopf-l{flex:0 0 auto}',
      '  .mw-kopf-r{flex-direction:row;align-self:stretch;justify-content:flex-start;gap:12px;text-align:left}',
      '  .mw-ring{width:60px;height:60px}.mw-ring b{font-size:19px}',
      '  .mw-weiter{padding:18px}',
      '  .mw-btn.gross{width:100%;text-align:center}',
      '  .mw-l-kopf{padding:12px 13px;gap:10px}',
      '  .mw-l-txt b{font-size:14.5px}',
      '  .mw-l-txt small{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}',
      '  .mw-jetzt{display:none}',
      '  .mw-s{padding:11px 13px;gap:10px}',
      '  .mw-stufen,.mw-fach-git{grid-template-columns:1fr}',
      '}'
    ].join('\n');
    document.head.appendChild(s);
  }
})();
