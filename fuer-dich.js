/* ============================================================
   fuer-dich.js — der persönliche Einstieg in den Selbstlernbereich

   Warum (8.11.2026):
   Der Selbstlernbereich zeigte allen dasselbe: Üben fing bei A1 an,
   der Schreibtrainer bei „Alle Niveaus“, Gespräche nach Menge sortiert.
   Dabei wissen wir längst, wer da sitzt: die Stufe steht in
   profiles.stufe (Niveautest oder selbst gewählt), das Ziel in der
   Tabelle lernziel (der Assistent aus lernziel.js, 147 Einträge).

   Diese Datei macht daraus:
     1. window.ICH — eine Stelle, die Stufe, Ziel und Namen kennt.
        Alle anderen Bereiche fragen hier nach (und die App später auch).
     2. Die Ansicht „Für dich“ (#fuerdich): was heute dran ist, passend
        zu Stufe und Ziel, mit echten Fotos.
     3. Voreinstellungen: Schreiben, Gespräche und Fertigkeiten öffnen
        auf der eigenen Stufe. „Alle Niveaus“ bleibt einen Klick entfernt.

   Es entsteht kein neuer Lernstoff. Alles, was hier vorgeschlagen
   wird, liegt schon in uebungen.js, dialoge.js und schreiben.js.
   ============================================================ */
(function () {
  'use strict';
  if (window.ICH) return;

  var STUFEN = ['A1', 'A2', 'B1', 'B2', 'C1'];
  var lzVersucht = false;

  function E(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }
  function el(id) { return document.getElementById(id); }
  function gehe(v) { try { if (window.go) return window.go(v); location.hash = v; } catch (e) {} }
  function stufeAus(x) { var m = String(x || '').toUpperCase().match(/[ABC][12]/); return m ? m[0] : null; }

  /* ---------- Wer sitzt da? ---------- */
  var ZIELNAME = {
    alltag: 'Alltag in Deutschland', buero: 'Büro & Logistik', pflege: 'Pflege',
    medizin: 'Medizin', pruefung: 'Prüfung', studium: 'Studium & Uni'
  };
  /* Welche Gesprächsbereiche (dialoge.js, d.kat) zu welchem Ziel passen */
  var ZIELKAT = {
    alltag:  ['amt', 'wohnen', 'gesundheit', 'einkaufen', 'essen', 'unterwegs', 'menschen', 'familie', 'vertrag', 'notfall', 'gefuehle', 'bildung'],
    buero:   ['buero', 'team', 'kunden', 'bewerbung'],
    pflege:  ['pflege', 'gesundheit', 'team', 'notfall'],
    medizin: ['pflege', 'gesundheit', 'notfall', 'team'],
    studium: ['bildung', 'buero', 'team', 'amt'],
    pruefung: null
  };
  /* Hör- und Wortschatzthemen (uebungen.js) mit Berufsbezug */
  var BERUFTHEMA = {
    buero:   /^(buero|it|bewerbung|bewerbung-b1|c1-bewerbung|c1-bewerbungsgespraech|b2-team-klaeren|telefonieren-neu|c1-buero|c1-kunden|c1-verhandeln|c1-telefonkonferenz|buchhaltung|lager|lager-neu|handel|a2-arbeit|arbeit|ki-arbeitswelt|c1-arbeitsrecht|c1-wirtschaft)$/,
    pflege:  /^(pflege|pflege-b1|c1-pflege|medizin|gesundheit|a2-arzt|a1-koerper|b2-arzt-befund|b2-gesundheit|zahnarzt)$/,
    medizin: /^(medizin|pflege|pflege-b1|c1-pflege|c1-arzt|b2-arzt-befund|gesundheit|a2-arzt|b2-gesundheit)$/,
    studium: /^(bildung|c1-studium|c1-vortrag-folgen|c1-debatte|c1-erkenntnis|sprachkurs-neu|b2-bildung|weiterbildung-neu)$/
  };

  var ICH = window.ICH = {
    name: function () {
      var n = (window.profile && window.profile.name) || '';
      return String(n).trim().split(/\s+/)[0] || '';
    },
    lz: function () { return (window.LZ && window.LZ.data) || null; },
    niveau: function () {
      var s = null;
      try { var w = window.wegStand && window.wegStand(); s = w && stufeAus(w.stufe); } catch (e) {}
      var p = window.profile || {};
      var lz = ICH.lz() || {};
      return s || stufeAus(p.stufe) || stufeAus(lz.start_niveau) || stufeAus(p.level) || 'A2';
    },
    ziel: function () { var d = ICH.lz(); return (d && d.ziel) || null; },
    zielName: function () { var z = ICH.ziel(); return z ? (ZIELNAME[z] || z) : ''; },
    beruflich: function () { return ['buero', 'pflege', 'medizin'].indexOf(ICH.ziel()) >= 0; },
    /* Wie weit liegt eine Stufe von der eigenen weg? 0 = genau meine */
    abstand: function (lvl) {
      var a = STUFEN.indexOf(stufeAus(lvl) || ''), b = STUFEN.indexOf(ICH.niveau());
      if (a < 0 || b < 0) return 9;
      return Math.abs(a - b) + (a > b ? 0.5 : 0);   // eine Stufe drüber vor einer drunter? nein: drunter zuerst
    }
  };

  /* Jeden Tag ein anderer Vorschlag, aber am selben Tag immer derselbe */
  function tagesWahl(liste, salz) {
    if (!liste || !liste.length) return null;
    var d = new Date(), t = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
    return liste[(t + (salz || 0)) % liste.length];
  }
  function passtStufe(lvl) {
    var n = ICH.niveau(), l = String(lvl || '').toUpperCase();
    return l.indexOf(n) >= 0;
  }

  /* ---------- Vorschläge ---------- */
  function vorschlagGespraech() {
    var D = window.DIALOGE || [];
    var kats = ZIELKAT[ICH.ziel() || 'alltag'];
    var liste = D.filter(function (d) { return passtStufe(d.lvl) && (!kats || kats.indexOf(d.kat) >= 0); });
    if (!liste.length) liste = D.filter(function (d) { return passtStufe(d.lvl); });
    return tagesWahl(liste, 0);
  }
  function vorschlagSchreiben() {
    var S = window.SCHREIBEN || [], n = ICH.niveau();
    var beruf = window.swBereichVon;
    var liste = S.filter(function (a) {
      if (a.lvl !== n) return false;
      if (!beruf) return true;
      return ICH.beruflich() ? beruf(a) === 'beruf' : beruf(a) === 'alltag';
    });
    if (!liste.length) liste = S.filter(function (a) { return a.lvl === n; });
    return tagesWahl(liste, 1);
  }
  function vorschlagThema(skill, salz) {
    try {
      var sk = (window.UEBUNGEN && UEBUNGEN.skills || []).filter(function (s) { return s.id === skill; })[0];
      if (!sk) return null;
      var n = ICH.niveau();
      var liste = (sk.themes || []).filter(function (t) { return !t.level || t.level === n; });
      var muster = BERUFTHEMA[ICH.ziel()];
      if (muster) {
        var b = liste.filter(function (t) { return muster.test(t.id); });
        if (b.length) liste = b;
      }
      var th = tagesWahl(liste, salz);
      return th ? { sk: skill, t: th } : null;
    } catch (e) { return null; }
  }
  function bildThema(sk, id) {
    try { return (window.FK_BILD_OFFEN && window.FK_BILD_OFFEN(sk, id)) || ''; } catch (e) { return ''; }
  }

  /* ---------- Bausteine ---------- */
  function karte(o) {
    return '<button class="fd-k" onclick="' + o.tun + '">'
      + (o.bild ? '<span class="fd-kb"><img src="' + E(o.bild) + '" alt="" loading="lazy" onerror="this.parentNode.remove()"></span>' : '')
      + '<span class="fd-kt">'
      + '<span class="fd-kk">' + E(o.kick) + '</span>'
      + '<b>' + E(o.t) + '</b>'
      + (o.u ? '<span class="fd-ku">' + E(o.u) + '</span>' : '')
      + '<span class="fd-kl">' + E(o.los || 'Starten') + ' <span aria-hidden="true">→</span></span>'
      + '</span></button>';
  }
  function zeile(o) {
    return '<button class="fd-z" onclick="' + o.tun + '">'
      + '<span class="fd-zt"><b>' + E(o.t) + '</b><span>' + E(o.u || '') + '</span></span>'
      + (o.zahl != null ? '<span class="fd-zn">' + E(o.zahl) + '</span>' : '')
      + '<span class="fd-zp" aria-hidden="true">→</span></button>';
  }

  function gruss() {
    var h = new Date().getHours();
    var g = h < 11 ? 'Guten Morgen' : (h < 18 ? 'Hallo' : 'Guten Abend');
    var n = ICH.name();
    return g + (n ? ', ' + n : '');
  }

  function naechsteStunde() {
    try {
      var up = (window.stats && stats.upcoming) || [];
      return up[0] || null;
    } catch (e) { return null; }
  }
  function wann(iso) {
    var d = new Date(iso), h = new Date();
    var tage = Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()) - new Date(h.getFullYear(), h.getMonth(), h.getDate())) / 86400000);
    var uhr = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
    if (tage === 0) return 'heute, ' + uhr + ' Uhr';
    if (tage === 1) return 'morgen, ' + uhr + ' Uhr';
    return d.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' }) + ', ' + uhr + ' Uhr';
  }

  /* ---------- Die Woche in einem Satz ----------
     Nur was wirklich gezählt wird: gebuchte Stunden dieser Woche
     (Montag bis Sonntag), Tage in Folge im Vokabeltrainer und wie
     viele Wörter schon sitzen. Steht überall null, kommt kein Satz,
     sondern ein freundlicher Anstoss. */
  function wochenSatz() {
    var teile = [];
    try {
      var jetzt = new Date(), mo = new Date(jetzt);
      mo.setHours(0, 0, 0, 0); mo.setDate(mo.getDate() - ((mo.getDay() + 6) % 7));
      var so = new Date(mo); so.setDate(so.getDate() + 7);
      var st = ((window.stats && stats.booked) || []).filter(function (b) {
        var d = new Date(b.starts_at); return d >= mo && d < so;
      }).length;
      if (st) teile.push('<b>' + st + '</b> ' + (st === 1 ? 'Stunde' : 'Stunden') + ' im Sprechclub');
    } catch (e) {}
    try {
      var v = window.vokabelStand && window.vokabelStand();
      if (v && v.serie > 1) teile.push('<b>' + v.serie + '</b> Tage in Folge Wörter geübt');
      if (v && v.gelernt) teile.push('<b>' + v.gelernt + '</b> ' + (v.gelernt === 1 ? 'Wort sitzt' : 'Wörter sitzen'));
    } catch (e) {}
    if (!teile.length) return 'Diese Woche ist noch frisch. Zehn Minuten heute bringen mehr als zwei Stunden nächste Woche.';
    return 'Diese Woche: ' + teile.join(' · ');
  }

  /* ---------- Die Ansicht ---------- */
  window.renderFuerDich = function () {
    var v = el('v-fuerdich'); if (!v) return;
    stil();
    /* Das Lernziel wird beim Login nicht immer geladen (lernziel.js kommt
       manchmal erst danach). Dann holen wir es hier und zeichnen neu. */
    if (!lzVersucht && window.LZ && !window.LZ.data && window.LZ.laden && window.user) {
      lzVersucht = true;
      window.LZ.laden().then(function (d) { if (d && offen()) window.renderFuerDich(); }, function () {});
    }
    var lz = ICH.lz(), n = ICH.niveau();

    /* Kopf */
    var chips = '<span class="fd-chip"><i>Stufe</i>' + E(n) + '</span>'
      + (lz ? '<span class="fd-chip"><i>Ziel</i>' + E(ICH.zielName()) + '</span>' : '');
    if (lz && lz.termin) {
      var t = Math.ceil((new Date(lz.termin) - new Date()) / 86400000);
      if (t >= 0) chips += '<span class="fd-chip"><i>Prüfung</i>in ' + t + (t === 1 ? ' Tag' : ' Tagen') + '</span>';
    }
    var h = '<header class="fd-kopf">'
      + '<p class="fd-zuruf">Dein Lernbereich</p>'
      + '<h1>' + E(gruss()) + '</h1>'
      + '<div class="fd-chips">' + chips
      + '<button class="fd-aendern" onclick="fdZielAendern()">' + (lz ? 'Ziel ändern' : 'Ziel festlegen') + '</button></div>'
      + '</header>';

    var ws = wochenSatz();
    if (ws) h += '<p class="fd-woche">' + ws + '</p>';

    if (!lz) {
      h += '<div class="fd-hinweis"><div><b>Wofür lernst du Deutsch?</b>'
        + '<span>Drei kurze Fragen, dann zeigt dir diese Seite, was zu dir passt: Alltag, Beruf oder Prüfung.</span></div>'
        + '<button class="fd-btn" onclick="fdZielAendern()">Jetzt festlegen</button></div>';
    }

    /* 1. Weiter im Kurs */
    var w = null; try { w = window.wegStand && window.wegStand(); } catch (e) {}
    if (w && w.stufe && (w.lektion || w.geschafft)) {
      h += '<section class="fd-weiter" onclick="go(\'lernen\')" role="button" tabindex="0">'
        + (w.bild ? '<span class="fd-wb"><img src="' + E(w.bild) + '" alt="" loading="lazy" onerror="this.parentNode.remove()"></span>' : '')
        + '<span class="fd-wt"><span class="fd-kk">Dein Kurs · ' + E(w.stufe)
        + (w.lektion ? ' · Lektion ' + E(w.lektion) + (w.anzahl ? ' von ' + E(w.anzahl) : '') : '') + '</span>'
        + '<b>' + E(w.geschafft ? 'Stufe ' + w.stufe + ' geschafft' : (w.titel || 'Weiter im Kurs')) + '</b>'
        + (w.ziel ? '<span class="fd-ku">' + E(w.ziel) + '</span>' : '')
        + '<span class="fd-bar"><i style="width:' + (w.prozent || 0) + '%"></i></span>'
        + '<span class="fd-btn">' + (w.angefangen ? 'Weitermachen' : 'Anfangen') + ' →</span></span>'
        + '</section>';
    }

    /* 2. Heute dran — was wirklich ansteht */
    var dran = [];
    var st = naechsteStunde();
    if (st) {
      dran.push(zeile({ t: 'Nächste Stunde vorbereiten', u: (st.title || 'Sprechclub') + ' · ' + wann(st.starts_at), tun: "go('stunden')" }));
    }
    var vs = null; try { vs = window.vokabelStand && window.vokabelStand(); } catch (e) {}
    if (vs && vs.faellig) {
      dran.push(zeile({ t: 'Wörter wiederholen', u: 'Zehn Minuten reichen, damit sie bleiben.', zahl: vs.faellig, tun: "fdWoerter()" }));
    }
    var fz = 0; try { fz = (window.fehlerZahl && window.fehlerZahl()) || 0; } catch (e) {}
    if (fz) dran.push(zeile({ t: 'Deine Fehler üben', u: 'Was im Chat und im Unterricht korrigiert wurde.', zahl: fz, tun: "go('fehler')" }));
    if (dran.length) {
      h += '<h2 class="fd-h2">Heute dran</h2><div class="fd-liste">' + dran.join('') + '</div>';
    }

    /* 3. Für dich ausgesucht — passend zu Stufe und Ziel */
    var vor = [];
    var g = vorschlagGespraech();
    if (g) vor.push(karte({
      kick: 'Sprechen · ' + (g.lvl || n), t: g.titel, u: g.ort || '', los: 'Gespräch starten',
      bild: 'bilder/dialog/' + g.id + '-s.jpg', tun: "fdGespraech('" + E(g.id) + "')"
    }));
    var s = vorschlagSchreiben();
    if (s) vor.push(karte({
      kick: 'Schreiben · ' + s.lvl, t: s.t, u: String(s.sit || '').slice(0, 90) + (String(s.sit || '').length > 90 ? ' …' : ''),
      los: 'Text schreiben', bild: (window.SW_BILD_VON && window.SW_BILD_VON(s.id)) || '', tun: "fdSchreiben('" + E(s.id) + "')"
    }));
    var hz = vorschlagThema('hoeren', 2);
    if (hz) vor.push(karte({
      kick: 'Hören · ' + (hz.t.level || n), t: hz.t.title || hz.t.id, u: (hz.t.exercises || []).length + ' Aufgaben',
      los: 'Hören üben', bild: bildThema('hoeren', hz.t.id), tun: "fdThema('hoeren','" + E(hz.t.id) + "')"
    }));
    var wz = vorschlagThema('wortschatz', 3);
    if (wz) vor.push(karte({
      kick: 'Wortschatz · ' + (wz.t.level || n), t: wz.t.title || wz.t.id, u: (wz.t.exercises || []).length + ' Aufgaben',
      los: 'Wörter üben', bild: bildThema('wortschatz', wz.t.id), tun: "fdThema('wortschatz','" + E(wz.t.id) + "')"
    }));
    if (vor.length) {
      h += '<h2 class="fd-h2">Für dich ausgesucht<small>' + E(n) + (lz ? ' · ' + E(ICH.zielName()) : '') + ' · jeden Tag neu</small></h2>'
        + '<div class="fd-raster">' + vor.join('') + '</div>';
    }

    /* 4. Zum Ziel */
    var ziel = ICH.ziel(), zz = [];
    if (ziel === 'pruefung') zz.push(zeile({ t: 'Prüfungstraining', u: 'Lesen, Hören, Schreiben und Sprechen wie in der Prüfung.', tun: "go('pruefung')" }));
    if (ICH.beruflich() || ziel === 'studium') zz.push(zeile({ t: 'Kurs für ' + ICH.zielName(), u: 'Fachwortschatz, Gespräche und Texte aus deinem Beruf.', tun: "go('kurse')" }));
    /* Amanda spricht nur, wenn der Schalter in konto.html es erlaubt */
    if (window.AMANDA_SPRECHEN_AUS) zz.push(zeile({ t: 'Amanda fragen', u: 'Schreib ihr deine Frage, sie antwortet sofort.', tun: "go('amanda')" }));
    else zz.push(zeile({ t: 'Mit Amanda sprechen', u: 'Einfach reden, sie antwortet sofort.', tun: "go('amandasprechen')" }));
    zz.push(zeile({ t: 'Alle Übungen nach Fertigkeit', u: 'Hören, Lesen, Schreiben, Sprechen, Wortschatz, Grammatik.', tun: "go('fertigkeit')" }));
    h += '<h2 class="fd-h2">Mehr für dich</h2><div class="fd-liste">' + zz.join('') + '</div>';

    v.innerHTML = h;
    try { if (window.uebersetzen) window.uebersetzen(); } catch (e) {}
  };

  /* ---------- Aktionen ---------- */
  window.fdZielAendern = function () {
    try { if (window.LZ && LZ.starten) { LZ.starten(true); return; } } catch (e) {}
    gehe('profil');
  };
  window.fdWoerter = function () {
    gehe('vokabeln');
    setTimeout(function () { try { if (window.vokFaellig) window.vokFaellig(); } catch (e) {} }, 150);
  };
  window.fdGespraech = function (id) {
    if (window.lernDialog) return window.lernDialog(id);
    gehe('sprechen');
  };
  window.fdSchreiben = function (id) {
    gehe('schreiben');
    setTimeout(function () { try { if (window.schreibTrainer) window.schreibTrainer(id); } catch (e) {} }, 150);
  };
  window.fdThema = function (sk, id) {
    gehe('ueben');
    setTimeout(function () { try { if (window.ubStart) window.ubStart(sk, id); } catch (e) {} }, 200);
  };

  /* ---------- Voreinstellungen in den anderen Bereichen ----------
     Nur beim ersten Öffnen pro Sitzung. Wer danach selbst einen Filter
     wählt, behält ihn. */
  var schonGesetzt = {};
  function einmal(name, f) {
    if (schonGesetzt[name]) return;
    schonGesetzt[name] = true;
    try { f(); } catch (e) {}
  }
  function umwickeln(name, vorher) {
    var alt = window[name];
    if (typeof alt !== 'function' || alt.__fd) return false;
    var neu = function () { vorher(); return alt.apply(this, arguments); };
    neu.__fd = true;
    window[name] = neu;
    return true;
  }
  function voreinstellen() {
    umwickeln('renderSchreiben', function () {
      einmal('schreiben', function () {
        if (!window.swVoreinstellen) return;
        var n = ICH.niveau(), bereich = 'alle';
        if (ICH.beruflich() && window.swBereichVon) {
          var zahl = (window.SCHREIBEN || []).filter(function (a) { return a.lvl === n && window.swBereichVon(a) === 'beruf'; }).length;
          if (zahl >= 4) bereich = 'beruf';
        }
        window.swVoreinstellen(n, bereich);
      });
    });
  }
  /* Die Bereiche kommen teils erst mit den späten Dateien. Also
     nachsehen, bis sie da sind. */
  var versuche = 0;
  (function warten() {
    voreinstellen();
    if ((!window.renderSchreiben || !window.renderSchreiben.__fd) && versuche++ < 60) setTimeout(warten, 500);
  })();

  /* Wer direkt auf #fuerdich landet, war schneller als diese Datei:
     die Ansicht wurde gesucht, bevor es sie gab. Ausserdem kommen das
     Lernziel und die Stunden erst nach der Anmeldung. Also neu zeichnen,
     sobald die Daten da sind, solange die Ansicht offen ist. */
  function offen() { var v = el('v-fuerdich'); return v && v.classList.contains('active'); }
  var stempel = '';
  function nachzeichnen() {
    if (!offen()) return;
    var s = [ICH.niveau(), ICH.ziel(), !!window.stats, !!window.DIALOGE, !!window.SCHREIBEN].join('|');
    if (s !== stempel || !el('v-fuerdich').innerHTML.trim()) { stempel = s; window.renderFuerDich(); }
  }
  [300, 1200, 2500, 5000, 9000].forEach(function (ms) { setTimeout(nachzeichnen, ms); });
  if ((location.hash || '').slice(1) === 'fuerdich') {
    setTimeout(function () { try { if (typeof window.show === 'function') window.show('fuerdich'); } catch (e) {} }, 0);
  }

  /* ---------- Stil ---------- */
  function stil() {
    if (el('fd-stil')) return;
    var s = document.createElement('style');
    s.id = 'fd-stil';
    s.textContent = [
      '#v-fuerdich{--fd-ink:#12181F;--fd-soft:#5E6A78;--fd-line:#E7EBF0;--fd-petrol:#14708B;--fd-turq:#1B9BC0;--fd-bg:#F6F9FA;max-width:1080px}',
      '.fd-kopf{margin:0 0 22px}',
      '.fd-zuruf{margin:0 0 4px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--fd-petrol)}',
      '.fd-kopf h1{font-family:"Space Grotesk",Inter,sans-serif;font-size:clamp(28px,4.4vw,40px);letter-spacing:-.025em;line-height:1.1;margin:0 0 14px;color:var(--fd-ink)}',
      '.fd-chips{display:flex;flex-wrap:wrap;gap:8px;align-items:center}',
      '.fd-chip{display:inline-flex;gap:7px;align-items:baseline;background:#fff;border:1px solid var(--fd-line);border-radius:999px;padding:7px 13px;font-size:14px;font-weight:700;color:var(--fd-ink)}',
      '.fd-chip i{font-style:normal;font-weight:600;font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--fd-soft)}',
      '.fd-aendern{border:0;background:none;font:inherit;font-size:14px;font-weight:600;color:var(--fd-petrol);cursor:pointer;padding:7px 4px;text-decoration:underline;text-underline-offset:3px}',
      '.fd-woche{margin:-8px 0 22px;font-size:15px;color:var(--fd-soft);line-height:1.5}',
      '.fd-woche b{color:var(--fd-ink);font-weight:700}',
      '.fd-hinweis{display:flex;gap:16px;align-items:center;justify-content:space-between;flex-wrap:wrap;background:#EAF6FA;border:1px solid #C7E9F3;border-radius:18px;padding:18px 20px;margin:0 0 22px}',
      '.fd-hinweis b{display:block;font-size:16.5px;color:var(--fd-ink);margin-bottom:3px}',
      '.fd-hinweis span{font-size:14px;color:var(--fd-soft);line-height:1.5}',
      '.fd-btn{display:inline-flex;align-items:center;gap:6px;border:0;background:var(--fd-petrol);color:#fff;border-radius:999px;padding:11px 20px;font:inherit;font-weight:700;font-size:14.5px;cursor:pointer;white-space:nowrap}',
      '.fd-btn:hover{background:#0F5E75}',
      '.fd-weiter{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);background:#fff;border:1px solid var(--fd-line);border-radius:22px;overflow:hidden;cursor:pointer;margin:0 0 30px;transition:box-shadow .2s,transform .2s}',
      '.fd-weiter:hover{box-shadow:0 14px 34px -18px rgba(18,24,31,.35);transform:translateY(-2px)}',
      '.fd-wb{display:block;min-height:220px;background:var(--fd-bg)}',
      '.fd-wb img{width:100%;height:100%;object-fit:cover;display:block}',
      '.fd-wt{display:flex;flex-direction:column;gap:8px;padding:26px 28px;justify-content:center}',
      '.fd-wt b{font-family:"Space Grotesk",Inter,sans-serif;font-size:clamp(21px,2.6vw,27px);letter-spacing:-.02em;line-height:1.2;color:var(--fd-ink)}',
      '.fd-wt .fd-btn{align-self:flex-start;margin-top:6px}',
      '.fd-bar{display:block;height:6px;border-radius:99px;background:var(--fd-bg);overflow:hidden;margin-top:4px}',
      '.fd-bar i{display:block;height:100%;background:var(--fd-turq);border-radius:99px}',
      '.fd-kk{font-size:11.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--fd-petrol)}',
      '.fd-ku{font-size:14px;color:var(--fd-soft);line-height:1.5}',
      '.fd-h2{font-family:"Space Grotesk",Inter,sans-serif;font-size:20px;letter-spacing:-.015em;margin:0 0 12px;color:var(--fd-ink);display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}',
      '.fd-h2 small{font-family:Inter,sans-serif;font-size:13px;font-weight:500;color:var(--fd-soft);letter-spacing:0}',
      '.fd-liste{display:grid;gap:8px;margin:0 0 30px}',
      '.fd-z{display:flex;align-items:center;gap:14px;width:100%;text-align:left;background:#fff;border:1px solid var(--fd-line);border-radius:14px;padding:14px 16px;font:inherit;color:inherit;cursor:pointer;transition:border-color .15s}',
      '.fd-z:hover{border-color:var(--fd-turq)}',
      '.fd-zt{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}',
      '.fd-zt b{font-size:15.5px;color:var(--fd-ink)}',
      '.fd-zt span{font-size:13.5px;color:var(--fd-soft)}',
      '.fd-zn{flex:none;min-width:30px;text-align:center;font-weight:800;font-size:14px;color:var(--fd-petrol);background:#EAF6FA;border-radius:999px;padding:4px 10px}',
      '.fd-zp{flex:none;color:var(--fd-soft);font-weight:700}',
      '.fd-raster{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:14px;margin:0 0 30px}',
      '.fd-k{display:flex;flex-direction:column;text-align:left;background:#fff;border:1px solid var(--fd-line);border-radius:18px;overflow:hidden;padding:0;font:inherit;color:inherit;cursor:pointer;transition:box-shadow .2s,transform .2s}',
      '.fd-k:hover{box-shadow:0 12px 28px -16px rgba(18,24,31,.35);transform:translateY(-2px)}',
      '.fd-kb{display:block;aspect-ratio:16/10;background:var(--fd-bg);overflow:hidden}',
      '.fd-kb img{width:100%;height:100%;object-fit:cover;display:block}',
      '.fd-kt{display:flex;flex-direction:column;gap:5px;padding:14px 16px 16px;flex:1}',
      '.fd-kt b{font-size:16px;line-height:1.3;color:var(--fd-ink)}',
      '.fd-kt .fd-ku{font-size:13px}',
      '.fd-kl{margin-top:auto;padding-top:8px;font-size:14px;font-weight:700;color:var(--fd-petrol)}',
      '@media(max-width:720px){.fd-weiter{grid-template-columns:1fr}.fd-wb{min-height:0;aspect-ratio:16/9}.fd-wt{padding:18px 18px 20px}',
      '  .fd-raster{grid-template-columns:1fr 1fr;gap:10px}.fd-kt{padding:11px 12px 13px}.fd-kt b{font-size:14.5px}.fd-kt .fd-ku{display:none}}',
      '@media(max-width:360px){.fd-raster{grid-template-columns:1fr}}'
    ].join('\n');
    document.head.appendChild(s);
  }
})();
