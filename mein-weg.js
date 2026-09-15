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

  function melden(stufe, nr, b, istFertig) {
    var k = stufe + '/' + nr + '/' + schluessel(b);
    if (istFertig) STAND.schritte[k] = true;
    var c = sb(); if (!c) return;
    c.rpc('schritt_fertig', {
      p_stufe: stufe, p_lektion: nr, p_schritt: schluessel(b),
      p_art: b.art, p_sekunden: 0, p_fertig: !!istFertig
    }).catch(function () {});
  }

  /* ---------- Rechnen ---------- */
  function lektionStand(stufe, L) {
    var n = 0;
    L.bau.forEach(function (b) { if (fertig(stufe, L.nr, b)) n++; });
    return { fertig: n, gesamt: L.bau.length, prozent: L.bau.length ? Math.round(n * 100 / L.bau.length) : 0 };
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
        var offen = L.bau.filter(function (b) { return !fertig(id, L.nr, b); })[0];
        return { L: L, stand: s, schritt: offen };
      }
    }
    return null; // Stufe geschafft
  }
  function naechsteStufe(id) {
    var i = STUFEN.indexOf(id);
    return (i >= 0 && i < STUFEN.length - 1) ? STUFEN[i + 1] : null;
  }

  window.wegStand = function () {
    if (!STAND.stufe) return { stufe: null };
    var n = naechstes(STAND.stufe), s = stufeStand(STAND.stufe);
    return { stufe: STAND.stufe, lektion: n ? n.L.nr : null, titel: n ? n.L.t : null, prozent: s.prozent };
  };

  /* ---------- Stufe setzen ---------- */
  window.wegStufeSetzen = function (stufe, quelle) {
    stufe = String(stufe || '').toUpperCase();
    if (STUFEN.indexOf(stufe) < 0) return;
    STAND.stufe = stufe; STAND.quelle = quelle || 'selbst';
    var c = sb();
    if (c) c.rpc('stufe_setzen', { p_stufe: stufe, p_prozent: null, p_quelle: quelle || 'selbst' }).catch(function () {});
    try { if (window.lsSet) window.lsSet('niveau', stufe); } catch (e) {}
    note('Alles klar — dein Kurs startet bei ' + stufe + '.');
    window.renderWeg();
  };

  /* ---------- Einen Schritt öffnen ---------- */
  window.wegOeffnen = function (stufe, nr, i) {
    var st = stufeDaten(stufe); if (!st) return;
    var L = st.lektionen.filter(function (x) { return x.nr === nr; })[0]; if (!L) return;
    var b = L.bau[i]; if (!b) return;

    melden(stufe, nr, b, false);   // angefangen

    if (b.art === 'kurs') {
      var t = String(b.id).split('-l');
      location.href = 'lektion.html?k=' + encodeURIComponent(t[0]) + '&l=' + encodeURIComponent(t[1] || '1');
      return;
    }
    if (b.art === 'seite' || b.art === 'grammatik') {
      window.open(b.d, '_blank', 'noopener');
      return;
    }
    if (b.art === 'sprechen') {
      if (window.lernDialog) { window.lernDialog(b.id); return; }
      location.hash = 'lernen'; return;
    }
    if (window.lernUeben) {
      window.lernUeben(b.skill || (b.art === 'woerter' ? 'wortschatz' : b.art), b.id);
      return;
    }
    location.hash = 'ueben';
  };

  /* Haken von Hand — für alles, was sich nicht selbst meldet
     (ein Gespräch geführt, eine Seite gelesen). */
  window.wegHaken = function (stufe, nr, i, ev) {
    if (ev) { ev.stopPropagation(); ev.preventDefault(); }
    var st = stufeDaten(stufe); if (!st) return;
    var L = st.lektionen.filter(function (x) { return x.nr === nr; })[0]; if (!L) return;
    var b = L.bau[i]; if (!b) return;
    melden(stufe, nr, b, true);
    window.renderWeg();
  };

  window.wegLektion = function (nr) {
    STAND.offenLektion = (STAND.offenLektion === nr) ? null : nr;
    window.renderWeg();
  };
  window.wegStufeWechseln = function () {
    STAND.waehlen = true; window.renderWeg();
  };

  /* ============================================================
     ZEICHNEN
     ============================================================ */

  function balken(p, gross) {
    if (!p) return '';
    return '<div class="mw-bal' + (gross ? ' gross' : '') + '"><i style="width:' + p + '%"></i></div>';
  }

  /* --- 1. Noch keine Stufe: die Einstufung --- */
  function zeichneEinstufung() {
    var karten = (plan().stufen || []).map(function (s) {
      return '<button class="mw-stufe" onclick="wegStufeSetzen(\'' + s.id + '\',\'selbst\')">'
        + '<b>' + E(s.id) + '</b>'
        + '<span class="mw-stufe-t">' + E(s.t.replace(/^[A-C]\d\s*—\s*/, '')) + '</span>'
        + '<span class="mw-stufe-u">' + E(s.u) + '</span>'
        + '<span class="mw-stufe-n">' + s.lektionen.length + ' Lektionen · Ziel: ' + E(s.pruefung) + '</span>'
        + '</button>';
    }).join('');

    return '<div class="mw-start">'
      + '<div class="mw-start-kopf">'
      + '<span class="mw-kick">Schritt 1 von 1</span>'
      + '<h2>Wo fängst du an?</h2>'
      + '<p>Mach den Einstufungstest — danach steht deine erste Lektion hier, und du weißt für jeden Tag, was dran ist. '
      + 'Der Test dauert ein paar Minuten und du kannst ihn jederzeit wiederholen.</p>'
      + '<a class="mw-btn gross" href="niveau-test-club.html">Einstufungstest starten →</a>'
      + '</div>'
      + '<div class="mw-oder"><span>oder du weißt es schon</span></div>'
      + '<div class="mw-stufen">' + karten + '</div>'
      + '</div>';
  }

  /* --- 2. Ein einzelner Schritt --- */
  function zeichneSchritt(stufe, L, b, i) {
    var f = fertig(stufe, L.nr, b);
    var zusatz = b.dauer ? ' · ' + E(b.dauer) : (b.lvl ? ' · ' + E(b.lvl) : '');
    return '<div class="mw-s' + (f ? ' fertig' : '') + '" onclick="wegOeffnen(\'' + stufe + '\',' + L.nr + ',' + i + ')">'
      + '<span class="mw-s-em">' + (b.em || '•') + '</span>'
      + '<span class="mw-s-txt"><b>' + E(b.t) + '</b><small>' + E(b.u || '') + zusatz + '</small></span>'
      + '<button class="mw-s-hak' + (f ? ' an' : '') + '" title="' + (f ? 'geschafft' : 'als geschafft markieren') + '" '
      + 'onclick="wegHaken(\'' + stufe + '\',' + L.nr + ',' + i + ',event)">' + (f ? '✓' : '') + '</button>'
      + '</div>';
  }

  /* --- 3. Eine Lektion in der Liste --- */
  function zeichneLektion(stufe, L, offen, dran) {
    var s = lektionStand(stufe, L);
    var auf = (offen === L.nr) || (offen == null && dran);
    var kl = 'mw-l' + (s.prozent === 100 ? ' fertig' : '') + (dran ? ' dran' : '') + (auf ? ' auf' : '');
    var h = '<div class="' + kl + '">'
      + '<button class="mw-l-kopf" onclick="wegLektion(' + L.nr + ')">'
      + '<span class="mw-l-nr">' + (s.prozent === 100 ? '✓' : L.nr) + '</span>'
      + '<span class="mw-l-txt"><b>' + E(L.t) + '</b><small>' + E(L.ziel) + '</small></span>'
      + '<span class="mw-l-rechts">'
      + (dran && s.prozent < 100 ? '<span class="mw-jetzt">jetzt dran</span>' : '')
      + '<span class="mw-l-z">' + s.fertig + '/' + s.gesamt + '</span>'
      + '</span>'
      + '</button>'
      + balken(s.prozent);
    if (auf) {
      h += '<div class="mw-l-bau">'
        + L.bau.map(function (b, i) { return zeichneSchritt(stufe, L, b, i); }).join('')
        + '</div>';
    }
    return h + '</div>';
  }

  /* --- 4. Die Weiter-Karte --- */
  function zeichneWeiter(stufe) {
    var n = naechstes(stufe);
    if (!n) {
      var w = naechsteStufe(stufe);
      return '<div class="mw-weiter geschafft">'
        + '<span class="mw-kick">' + E(stufe) + ' komplett</span>'
        + '<h2>Du hast die ganze Stufe geschafft.</h2>'
        + '<p>Alle Lektionen abgehakt. ' + (w ? 'Weiter geht es mit ' + w + ' — dort wird es eine Spur schneller und genauer.' : 'Damit bist du am Ende des Wegs angekommen. Such dir jetzt einen Fachweg aus.') + '</p>'
        + (w ? '<button class="mw-btn gross" onclick="wegStufeSetzen(\'' + w + '\',\'aufgerueckt\')">Weiter mit ' + w + ' →</button>' : '')
        + '</div>';
    }
    var s = n.stand;
    var b = n.schritt;
    var idx = n.L.bau.indexOf(b);
    return '<div class="mw-weiter">'
      + '<span class="mw-kick">Weiter geht es hier</span>'
      + '<h2>Lektion ' + n.L.nr + ' · ' + E(n.L.t) + '</h2>'
      + '<p>' + E(n.L.ziel) + '</p>'
      + (s.fertig ? '<div class="mw-weiter-bal">' + balken(s.prozent, true) + '<span>' + s.fertig + ' von ' + s.gesamt + ' Schritten</span></div>' : '')
      + '<button class="mw-btn gross" onclick="wegOeffnen(\'' + stufe + '\',' + n.L.nr + ',' + idx + ')">'
      + (b.em || '') + ' ' + E(b.t) + '&nbsp;→</button>'
      + '<small class="mw-weiter-u">' + E(b.u || '') + '</small>'
      + '</div>';
  }

  /* --- 5. Fachwege --- */
  function zeichneFach() {
    var f = plan().fach || [];
    if (!f.length) return '';
    return '<div class="mw-fach">'
      + '<h3>Dazu, wenn du ein Ziel hast</h3>'
      + '<p class="mw-fach-u">Diese Wege laufen neben deiner Stufe — für den Beruf oder eine bestimmte Prüfung.</p>'
      + '<div class="mw-fach-git">'
      + f.map(function (k) {
        return '<a class="mw-fk" href="lektion.html?k=' + encodeURIComponent(k.id) + '&l=1">'
          + '<b>' + E(k.t) + '</b>'
          + '<small>' + E(k.u) + '</small>'
          + '<span>' + k.lektionen.length + ' Lektionen · ' + E(k.lvl) + '</span>'
          + '</a>';
      }).join('')
      + '</div></div>';
  }

  /* --- 6. Alles zusammen --- */
  function zeichneKurs() {
    var stufe = STAND.stufe;
    var st = stufeDaten(stufe);
    if (!st) return zeichneEinstufung();
    var s = stufeStand(stufe);
    var n = naechstes(stufe);
    var dranNr = n ? n.L.nr : null;

    var kopf = '<div class="mw-kopf">'
      + '<div class="mw-kopf-l">'
      + '<span class="mw-kick">Dein Kurs</span>'
      + '<h2>' + E(st.t) + '</h2>'
      + '<p>' + E(st.u) + '</p>'
      + '</div>'
      + '<div class="mw-kopf-r">'
      + '<div class="mw-ring"><b>' + s.prozent + '<i>%</i></b></div>'
      + '<span>' + s.lektionen + ' von ' + s.von + ' Lektionen fertig</span>'
      + '<button class="mw-klein" onclick="wegStufeWechseln()">Stufe wechseln</button>'
      + '</div></div>';

    var liste = st.lektionen.map(function (L) {
      return zeichneLektion(stufe, L, STAND.offenLektion, L.nr === dranNr);
    }).join('');

    return kopf
      + zeichneWeiter(stufe)
      + '<div class="mw-liste-kopf"><h3>Der ganze Weg</h3><span>' + st.lektionen.length + ' Lektionen · Ziel: ' + E(st.pruefung) + '</span></div>'
      + '<div class="mw-liste">' + liste + '</div>'
      + zeichneFach();
  }

  function zeichneWahl() {
    return '<button class="mw-zurueck" onclick="MEINWEG.zurueck()">← Zurück zu deinem Kurs</button>'
      + zeichneEinstufung();
  }

  /* ---------- Die Ansicht ---------- */
  window.renderWeg = function () {
    var v = el('v-weg'); if (!v) return;
    stilEinbauen();
    if (!STAND.geladen) {
      v.innerHTML = '<div class="mw-laedt">Einen Moment, ich hole deinen Stand …</div>';
      standLaden().then(function () { window.renderWeg(); });
      return;
    }
    if (STAND.waehlen) { v.innerHTML = zeichneWahl(); return; }
    v.innerHTML = STAND.stufe ? zeichneKurs() : zeichneEinstufung();
  };

  /* Die Karte fürs Dashboard — kurz, ein Knopf. */
  window.wegWeiterKarte = function () {
    stilEinbauen();
    if (!STAND.geladen || !STAND.stufe) return '';
    var n = naechstes(STAND.stufe);
    if (!n) {
      var w = naechsteStufe(STAND.stufe);
      return '<div class="mw-dash"><span class="mw-kick">' + STAND.stufe + ' geschafft</span>'
        + '<b>Die ganze Stufe ist durch.</b>'
        + '<a class="mw-btn" href="#weg">' + (w ? 'Weiter mit ' + w : 'Zum Kurs') + ' →</a></div>';
    }
    var s = stufeStand(STAND.stufe);
    return '<div class="mw-dash">'
      + '<span class="mw-kick">' + STAND.stufe + ' · Lektion ' + n.L.nr + ' von ' + s.von + '</span>'
      + '<b>' + E(n.L.t) + '</b>'
      + '<small>' + E(n.L.ziel) + '</small>'
      + balken(s.prozent)
      + '<a class="mw-btn" href="#weg">Weitermachen →</a></div>';
  };

  window.MEINWEG = {
    laden: function () { stilEinbauen(); return standLaden(); },
    stand: function () { return STAND; },
    zurueck: function () { STAND.waehlen = false; window.renderWeg(); }
  };

  /* fortschritt.js holt die gelesenen Lektionsseiten nach und meldet
     sich dann. Ohne das stuende der Kurs auf null, obwohl die Person
     Seiten laengst durchhat. */
  window.addEventListener('lektionsstand-da', function () {
    try { if (el('v-weg') && el('v-weg').classList.contains('active')) window.renderWeg();
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
          if (c) c.rpc('stufe_setzen', { p_stufe: r.stufe, p_prozent: r.prozent || null, p_quelle: 'test' }).catch(function () {});
        }
      } catch (e) {}
    });
  });

  /* ---------- Aussehen ---------- */
  function stilEinbauen() {
    if (el('mw-stil')) return;
    var s = document.createElement('style'); s.id = 'mw-stil';
    s.textContent = [
      ':root{--mw-ink:#20211F;--mw-soft:#54594A;--mw-line:#EFE9D8;--mw-karte:#FFFDF3;--mw-turq:#9FE4F1;--mw-turqd:#1990A4;--mw-mint:#EAFBFE;--mw-rot:#DD0000;--mw-gold:#FFE100;--mw-gruen:#4E9E12}',
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
      '.mw-weiter{background:linear-gradient(135deg,#EAFBFE,#FFFDF3);border:2px solid var(--mw-turq);border-radius:20px;padding:22px;margin-bottom:26px}',
      '.mw-weiter h2{font-size:clamp(19px,2.8vw,24px);margin:6px 0 4px;line-height:1.2}',
      '.mw-weiter p{margin:0 0 14px;color:var(--mw-soft)}',
      '.mw-weiter.geschafft{background:linear-gradient(135deg,#F3FBEA,#FFFDF3);border-color:var(--mw-gruen)}',
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
      '.mw-dash{background:linear-gradient(135deg,#EAFBFE,#FFFDF3);border:2px solid var(--mw-turq,#9FE4F1);',
      '  border-radius:18px;padding:18px;display:flex;flex-direction:column;gap:7px}',
      '.mw-dash b{font-size:17px;line-height:1.2}',
      '.mw-dash small{color:#54594A;font-size:13px}',
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
