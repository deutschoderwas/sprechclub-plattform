/* ============================================================
   hubs.js — die drei Sammelseiten hinter den Reitern

   Die Ordnung kommt von Julia und gilt auf dem Handy wie am
   Rechner, in der App wie auf der Plattform:

     Start       wo stehe ich, was ist als Nächstes dran
     Lernen      Freizeit · Beruf · Prüfungsvorbereitung
     Sprechen    Dialoge aus dem echten Leben, nach Bereichen —
                 Amt, Apotheke, Bewerbung … dazu der Sprechclub
     Community   der Messenger
     Medien      Reels · Podcast · Videos

   Alles kommt aus den vorhandenen Daten: themen.js (47 Themen mit
   Bereich), dialoge.js (110 Gespräche mit 18 Kategorien),
   lehrplan.js (5 Stufen, 6 Fachwege). Nichts ist erfunden — was
   es nicht gibt, steht auch nicht da.
   ============================================================ */
(function () {
  'use strict';
  if (window.HUBS) return;

  function E(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }
  function el(id) { return document.getElementById(id); }
  function daten(name) { return window[name] || []; }

  /* Die Themenansicht und der Lernen-Hub teilen sich den Behaelter. */
  var themenAnsicht = window.renderLernen || null;
  window.renderLernenThemen = function () {
    if (themenAnsicht) themenAnsicht();
    else location.hash = 'lernen';
  };

  /* Wer ein Thema oeffnet, kommt mit "zurueck" auf die Sammelseite —
     und zwar in den Reiter, aus dem er gekommen ist. Frueher landete
     man in der alten, ungeordneten Themenliste: zwei Welten in einem
     Klick. Deshalb merken wir uns das zuletzt geoeffnete Thema. */
  var letztesThema = null;
  if (typeof window.lernThema === 'function') {
    var themaAuf = window.lernThema;
    window.lernThema = function (id) { letztesThema = id; return themaAuf(id); };
  }
  window.lernZurueck = function () {
    var t = daten('THEMEN').filter(function (x) { return x.id === letztesThema; })[0];
    offen.lernen = (t && t.b === 'beruf') ? 'beruf' : 'freizeit';
    window.renderLernen();
    try { window.scrollTo(0, 0); } catch (e) {}
  };

  /* Welcher Reiter ist gerade offen — die Sammelseiten merken sich das. */
  var offen = { lernen: 'freizeit', sprechen: 'alltag', medien: 'podcast' };
  window.hubReiter = function (welche, wert) {
    offen[welche] = wert;
    ({ lernen: window.renderLernenHub, sprechen: window.renderSprechen, medien: window.renderMedien })[welche]();
  };

  /* ---------- Bausteine ---------- */
  function kopf(titel, unter) {
    return '<div class="hb-kopf"><h2>' + E(titel) + '</h2>'
      + (unter ? '<p>' + E(unter) + '</p>' : '') + '</div>';
  }
  function reiter(welche, liste) {
    return '<div class="hb-reiter">' + liste.map(function (r) {
      return '<button class="hb-r' + (offen[welche] === r[0] ? ' on' : '') + '" '
        + 'onclick="hubReiter(\'' + welche + '\',\'' + r[0] + '\')">' + E(r[1]) + '</button>';
    }).join('') + '</div>';
  }
  function kachel(o) {
    return '<button class="hb-k" onclick="' + o.tun + '">'
      + '<span class="hb-em">' + (o.em || '•') + '</span>'
      + '<span class="hb-kt">' + E(o.t) + '</span>'
      + (o.u ? '<span class="hb-ku">' + E(o.u) + '</span>' : '')
      + (o.wert ? '<span class="hb-wert">' + E(o.wert) + '</span>' : '')
      + '</button>';
  }
  function band(o) {
    return '<button class="hb-band' + (o.ruhig ? ' ruhig' : '') + '" onclick="' + o.tun + '">'
      + '<span class="hb-band-em">' + (o.em || '') + '</span>'
      + '<span class="hb-band-t"><b>' + E(o.t) + '</b><small>' + E(o.u || '') + '</small></span>'
      + '<span class="hb-band-pf">→</span></button>';
  }
  function leer(text) {
    return '<div class="hb-leer">' + E(text) + '</div>';
  }

  /* ============================================================
     LERNEN — Freizeit · Beruf · Prüfungsvorbereitung
     ============================================================ */
  var LERNREITER = [['freizeit', 'Freizeit'], ['beruf', 'Beruf'], ['pruefung', 'Prüfung']];

  function themenVon(bereich) {
    return daten('THEMEN').filter(function (t) { return t.b === bereich; });
  }
  function themenKacheln(bereich) {
    var t = themenVon(bereich);
    if (!t.length) return leer('Für diesen Bereich ist noch nichts eingetragen.');
    return '<div class="hb-git">' + t.map(function (x) {
      var n = (x.ws || []).length + (x.ho || []).length + (x.dlg || []).length;
      return kachel({
        em: x.em || bereichEmoji(x.id), t: x.t,
        u: x.lvl ? x.lvl : '',
        wert: n ? menge(n, 'Übungsreihe', 'Übungsreihen') : '',
        tun: "lernThema('" + x.id + "')"
      });
    }).join('') + '</div>';
  }

  function fachwege(ids) {
    var f = (window.LEHRPLAN && window.LEHRPLAN.fach) || [];
    var passend = f.filter(function (k) { return ids.indexOf(k.id) >= 0; });
    if (!passend.length) return '';
    return '<div class="hb-git">' + passend.map(function (k) {
      return kachel({
        em: FACHEM[k.id] || '🎯', t: k.t, u: k.u,
        wert: menge(k.lektionen.length, 'Lektion', 'Lektionen') + ' · ' + k.lvl,
        tun: "location.href='lektion.html?k=" + k.id + "&l=1'"
      });
    }).join('') + '</div>';
  }

  /* Seit dem Umbau zu EINEM Weg zeichnet mein-weg.js den Bereich Lernen
     (Kurs mit Bildkarten, jede Lektion: Wörter · Hören · Grammatik ·
     Gespräch). Die alte Themen-Sammelseite bleibt als renderLernenHub
     erhalten, steht aber nicht mehr im Menü. */
  window.renderLernenHub = function () {
    var v = el('v-lernen'); if (!v) return;
    stil();
    var weiter = '';
    try { weiter = (window.wegWeiterKarte && window.wegWeiterKarte()) || ''; } catch (e) {}
    if (!weiter) {
      weiter = '<div class="mw-dash"><span class="mw-kick">Zuerst das hier</span>'
        + '<b>Wo fängst du an?</b>'
        + '<small>Ein kurzer Test setzt deine Stufe — danach steht hier jeden Tag, was dran ist.</small>'
        + '<a class="mw-btn" href="#weg">Los geht\'s →</a></div>';
    }

    var inhalt = '';
    if (offen.lernen === 'freizeit') {
      inhalt = '<p class="hb-hin">Alles, was dir außerhalb der Arbeit begegnet — vom Amt bis zum Zahnarzt.</p>'
        + themenKacheln('alltag');
    } else if (offen.lernen === 'beruf') {
      inhalt = '<p class="hb-hin">Bewerbung, Kolleginnen, Kunden und Schicht.</p>'
        + themenKacheln('beruf')
        + '<h3 class="hb-h3">Ganze Fachkurse</h3>'
        + fachwege(['pflege', 'medizin', 'telcmed', 'buero']);
    } else {
      inhalt = '<p class="hb-hin">Gezielt auf die Prüfung hin — Format, Zeit, Punkte.</p>'
        + fachwege(['dtz', 'goethetelc', 'telcmed'])
        + band({ em: '🎓', t: 'Prüfungstraining', u: 'Übungen nach Prüfungsteil', tun: "go('pruefung')", ruhig: true })
        + band({ em: '📊', t: 'Einstufungstest', u: 'Wo stehst du gerade wirklich?', tun: "location.href='niveau-test-club.html'", ruhig: true });
    }

    v.innerHTML = kopf('Lernen', 'Dein Kurs, deine Themen, deine Übungen.')
      + '<div class="hb-weiter">' + weiter + '</div>'
      + reiter('lernen', LERNREITER)
      + inhalt
      + '<div class="hb-werkzeug">'
      +   band({ em: '🧠', t: 'Vokabeltrainer', u: 'Wörter lernen und wiederholen', tun: "go('vokabeln')", ruhig: true })
      +   band({ em: '📈', t: 'Mein Stand', u: 'Was du schon geschafft hast', tun: "go('fortschritt')", ruhig: true })
      + '</div>';
  };

  /* ============================================================
     SPRECHEN — Dialoge aus dem echten Leben, nach Bereichen
     ============================================================ */
  var BEREICH = {
    essen:      ['🍽️', 'Essen & Restaurant'],
    einkaufen:  ['🛒', 'Einkaufen & Bezahlen'],
    gesundheit: ['🩺', 'Arzt & Apotheke'],
    notfall:    ['🚑', 'Notfall'],
    wohnen:     ['🏠', 'Wohnen & Nachbarn'],
    amt:        ['🏛️', 'Amt & Behörden'],
    unterwegs:  ['🚉', 'Unterwegs & Reisen'],
    menschen:   ['👋', 'Leute kennenlernen'],
    gefuehle:   ['💗', 'Heikle Gespräche'],
    familie:    ['👨‍👩‍👧', 'Familie & Kinder'],
    bildung:    ['🎓', 'Schule & Lernen'],
    vertrag:    ['📄', 'Verträge & Bank'],
    buero:      ['💼', 'Im Büro'],
    bewerbung:  ['📝', 'Bewerbung'],
    team:       ['🤝', 'Team & Kollegen'],
    kunden:     ['📞', 'Kunden & Telefon'],
    pflege:     ['🩹', 'Pflege & Klinik'],
    handwerk:   ['🔧', 'Handwerk & Baustelle']
  };
  /* Jedes Thema hat sein eigenes Bild. Vorher fielen zwoelf Kacheln
     auf dieselbe Sprechblase zurueck — das sah aus wie ein Fehler. */
  var THEMENEM = {
    essen: '🍽️', einkaufen: '🛒', wohnen: '🏠', gesundheit: '🩺',
    amt: '🏛️', reisen: '🚆', stadt: '🚌', menschen: '👋',
    gefuehle: '💗', familie: '👨‍👩‍👧', bildung: '🎓', natur: '🌦️',
    medien: '📱', kultur: '🎉', strand: '🏖️', redewendungen: '💬',
    umgangssprache: '😎', 'typisch-deutsch': '🇩🇪', 'starke-adjektive': '✨',
    redemittel: '🗣️',
    buero: '💼', bewerbung: '📝', kunden: '📞', pflege: '🩹',
    handwerk: '🔧', 'ki-arbeitswelt': '🤖',
    adjektivdeklination: '🧩', genitiv: '🔑', 'indirekte-rede': '💭',
    konjunktiv2: '🌟', konnektoren: '🔗', nebensaetze: '🪜',
    nominalisierung: '📦', 'passiv-praesens': '🔄', 'passiv-vergangenheit': '⏪',
    'perfekt-praeteritum': '🕰️', relativsaetze: '🧵', 'temporale-nebensaetze': '⏱️',
    wechselpraepositionen: '↔️',
    ch: '👄', r: '🎸', 's-z-ss': '🐝', satzmelodie: '🎵',
    umlaute: '💧', 'v-w-f': '🌬️', vokale: '🎤', wortakzent: '🥁'
  };
  var FACHEM = {
    pflege: '🩺', medizin: '🩻', telcmed: '📋',
    buero: '🗂️', dtz: '🇩🇪', goethetelc: '🏅'
  };
  function bereichEmoji(id) {
    return THEMENEM[id] || (BEREICH[id] || [])[0] || '💬';
  }
  /* "1 Uebungsreihen" liest sich wie ein Fehler. */
  function menge(n, eins, viele) { return n + ' ' + (n === 1 ? eins : viele); }

  var SPRECHREITER = [['alltag', 'Alltag'], ['business', 'Beruf']];

  window.renderSprechen = function () {
    var v = el('v-sprechen'); if (!v) return;
    stil();
    var D = daten('DIALOGE').filter(function (d) { return (d.modus || 'alltag') === offen.sprechen; });
    var nach = {};
    D.forEach(function (d) { (nach[d.kat || 'sonst'] = nach[d.kat || 'sonst'] || []).push(d); });

    var kacheln = Object.keys(nach).sort(function (a, b) { return nach[b].length - nach[a].length; })
      .map(function (k) {
        var b = BEREICH[k] || ['💬', k];
        var lv = {}; nach[k].forEach(function (d) { lv[(d.lvl || '').split('–')[0]] = 1; });
        var stufen = Object.keys(lv).filter(Boolean).sort().join(' · ');
        return kachel({
          em: b[0], t: b[1],
          u: nach[k].length + (nach[k].length === 1 ? ' Gespräch' : ' Gespräche'),
          wert: stufen,
          tun: "hubSprechBereich('" + k + "')"
        });
      }).join('');

    v.innerHTML = kopf('Sprechen', 'Echte Situationen durchspielen — so oft du willst, ohne Zuschauer.')
      /* Amanda steht oben, noch vor dem Sprechclub: sie ist rund um
         die Uhr da, der Club einmal am Abend. Wer sprechen will,
         soll nicht erst bis morgen warten muessen. */
      + band({ em: '🎙️', t: 'Mit Amanda sprechen',
               u: 'Sie hört zu und antwortet sofort — in Julias Stimme',
               tun: "go('amandasprechen')" })
      + '<div id="hbClub"></div>'
      + reiter('sprechen', SPRECHREITER)
      + '<p class="hb-hin">' + D.length + ' Gespräche in ' + Object.keys(nach).length + ' Bereichen. '
      + 'Amanda antwortet und verbessert dich, wenn etwas nicht stimmt.</p>'
      + (kacheln ? '<div class="hb-git">' + kacheln + '</div>' : leer('Für diesen Bereich ist noch nichts da.'))
      + '<div id="hbBereich"></div>';
    sprechclubBand();
  };

  /* Die Gespräche eines Bereichs, aufgeklappt unter den Kacheln. */
  window.hubSprechBereich = function (kat) {
    var ziel = el('hbBereich'); if (!ziel) return;
    var b = BEREICH[kat] || ['💬', kat];
    var liste = daten('DIALOGE').filter(function (d) {
      return (d.kat === kat) && ((d.modus || 'alltag') === offen.sprechen);
    });
    ziel.innerHTML = '<div class="hb-liste">'
      + '<h3 class="hb-h3">' + b[0] + ' ' + E(b[1]) + '</h3>'
      + liste.map(function (d) {
        return '<button class="hb-d" onclick="hubDialog(\'' + d.id + '\')">'
          + '<span class="hb-d-em">' + (d.em || '💬') + '</span>'
          + '<span class="hb-d-t"><b>' + E(d.titel) + '</b>'
          + '<small>' + E(d.ort || '') + '</small></span>'
          + '<span class="hb-d-lv">' + E(d.lvl || '') + '</span></button>';
      }).join('')
      + '</div>';
    try { ziel.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {}
  };
  window.hubDialog = function (id) {
    if (window.lernDialog) return window.lernDialog(id);
    location.hash = 'lernen';
  };

  /* Der Sprechclub: die nächste Stunde, der Kalender, das Buchen. */
  var clubVersuche = 0;
  function sprechclubBand() {
    var k = el('hbClub'); if (!k) return;
    k.innerHTML = '<div class="hb-club">'
      + '<div class="hb-club-t">'
      +   '<span class="hb-kick">Sprechclub · live mit Julia</span>'
      +   '<b id="hbClubTitel">Live-Unterricht in kleinen Gruppen</b>'
      +   '<small id="hbClubZeit">Feste Themen, echte Menschen, jede Woche neu.</small>'
      + '</div>'
      + '<div class="hb-club-k">'
      +   '<button class="hb-btn" onclick="go(\'kalender\')">Kalender ansehen</button>'
      +   '<button class="hb-btn hell" onclick="go(\'stunden\')">Meine Stunden</button>'
      + '</div></div>';

    /* Diese Datei wird gezeichnet, bevor die Anmeldung durch ist.
       Wer hier einmal aufgibt, zeigt nie eine gebuchte Stunde an. */
    var c = window.sb;
    if (!c) {
      if (clubVersuche++ < 12) { setTimeout(sprechclubBand, 400); }
      return;
    }
    c.from('bookings')
      .select('id, classes!inner(starts_at, titel, thema, niveau)')
      .gte('classes.starts_at', new Date().toISOString())
      .order('starts_at', { foreignTable: 'classes', ascending: true })
      .limit(1)
      .then(function (r) {
        var b = r && r.data && r.data[0];
        if (!b || !b.classes) return;
        var d = new Date(b.classes.starts_at);
        var wann = d.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })
          + ', ' + d.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ' Uhr';
        var t = el('hbClubTitel'), z = el('hbClubZeit');
        if (t) t.textContent = b.classes.titel || b.classes.thema || 'Sprechclub';
        if (z) z.textContent = 'Deine nächste Stunde: ' + wann
          + (b.classes.niveau ? ' · ' + b.classes.niveau : '');
      }, function () {});
  }

  /* ============================================================
     MEDIEN — Reels · Podcast · Videos
     ============================================================ */
  var MEDIENREITER = [['reels', 'Reels'], ['podcast', 'Podcast'], ['videos', 'Videos']];

  window.renderMedien = function () {
    var v = el('v-medien'); if (!v) return;
    stil();
    var hin = {
      reels:   'Kurz, lustig, ein Wort pro Clip — wie auf Instagram, nur sortiert.',
      podcast: 'Julias Folgen zum Hören, jede mit Text zum Mitlesen.',
      videos:  'Längere Erklärungen zum Ansehen.'
    }[offen.medien];

    v.innerHTML = kopf('Medien', 'Hören und schauen, wann es dir passt.')
      + reiter('medien', MEDIENREITER)
      + '<p class="hb-hin">' + E(hin) + '</p>'
      + '<div id="hbMedien">' + leer('Einen Moment …') + '</div>'
      + '<div class="hb-werkzeug">'
      +   band({ em: '📄', t: 'Material', u: 'Handouts zu deinen Stunden', tun: "go('materialien')", ruhig: true })
      + '</div>';
    medienLaden();
  };

  /* ============================================================
     Der Podcast: geordnet statt gestapelt

     Vorher lag hier eine flache Liste der 40 neuesten Zeilen —
     alle Niveaus gemischt, und weil nicht nach Status gefiltert
     wurde, standen auch Entwuerfe und Fehlschlaege drin, die gar
     keine Tondatei haben. Wer daraufklickte, landete im Nichts.

     Jetzt: nur was wirklich abspielbar ist, nach Niveau geordnet,
     das eigene zuerst und offen, die anderen zum Aufklappen. Jede
     Folge zeigt Thema, Dauer und Datum; was neu ist, ist markiert,
     was man schon geoeffnet hat, auch.

     Faellt die Datenbank aus, bleibt die Seite stehen und sagt es.
     ============================================================ */
  var STUFEN_ORD = ['A1', 'A2', 'B1', 'B2', 'C1'];
  var pcGehoert = {};        // id -> true
  var pcOffeneStufe = null;  // welche Niveaugruppe ist aufgeklappt

  function meineStufe() {
    try {
      if (window.MEINWEG && MEINWEG.stand && MEINWEG.stand().stufe) return MEINWEG.stand().stufe;
    } catch (e) {}
    try { if (window.profile && window.profile.stufe) return window.profile.stufe; } catch (e) {}
    try { if (window.wegStand && wegStand().stufe) return wegStand().stufe; } catch (e) {}
    try {
      var n = window.lsGet && lsGet('niveau', null);
      if (n && STUFEN_ORD.indexOf(n) >= 0) return n;
    } catch (e) {}
    return null;
  }

  function pcDatum(d) {
    try {
      var x = new Date(d + 'T12:00:00');
      if (isNaN(x)) return '';
      return x.toLocaleDateString('de-DE', { day: 'numeric', month: 'long' });
    } catch (e) { return ''; }
  }
  function pcNeu(d) {
    try { return (Date.now() - new Date(d + 'T12:00:00').getTime()) < 21 * 864e5; } catch (e) { return false; }
  }

  /* Was schon gehoert wurde — einmal holen, still scheitern. */
  function gehoertHolen(dann) {
    var c = window.sb, u = window.user && window.user.id;
    if (!c || !u) { dann(); return; }
    try {
      c.from('podcast_gehoert').select('podcast_id').eq('user_id', u)
        .then(function (r) {
          ((r && r.data) || []).forEach(function (z) { pcGehoert[z.podcast_id] = true; });
          dann();
        }, function () { dann(); });
    } catch (e) { dann(); }
  }
  function gehoertMerken(id) {
    if (!id || pcGehoert[id]) return;
    pcGehoert[id] = true;
    var c = window.sb, u = window.user && window.user.id;
    if (!c || !u) return;
    try {
      c.from('podcast_gehoert')
        .upsert({ user_id: u, podcast_id: id, gehoert_am: new Date().toISOString() },
                { onConflict: 'user_id,podcast_id' })
        .then(function () {}, function () {});
    } catch (e) {}
  }

  function folgeZeile(x) {
    var marken = '';
    if (pcGehoert[x.id])      marken += '<span class="pc-mark fertig">gehört</span>';
    else if (pcNeu(x.datum))  marken += '<span class="pc-mark neu">neu</span>';
    return '<button class="pc-zeile" onclick="hubPodcast(\'' + E(x.id) + '\')">'
      + '<span class="pc-play" aria-hidden="true">▶</span>'
      + '<span class="pc-txt">'
      +   '<b>' + E(x.titel || 'Folge') + '</b>'
      +   (x.thema ? '<small>' + E(x.thema) + '</small>' : '')
      + '</span>'
      + '<span class="pc-meta">' + marken
      +   (x.dauer ? '<span class="pc-dauer">' + E(x.dauer) + '</span>' : '')
      +   '<span class="pc-tag">' + E(pcDatum(x.datum)) + '</span>'
      + '</span></button>';
  }

  function gruppeHtml(stufe, liste, auf, eigene) {
    var kopfText = eigene ? 'Dein Niveau · ' + stufe : stufe;
    return '<section class="pc-gruppe' + (auf ? ' auf' : '') + '">'
      + '<button class="pc-gruppe-kopf" onclick="hubPodcastStufe(\'' + E(stufe) + '\')" '
      +   'aria-expanded="' + (auf ? 'true' : 'false') + '">'
      +   '<b>' + E(kopfText) + '</b>'
      +   '<span class="pc-anzahl">' + liste.length + (liste.length === 1 ? ' Folge' : ' Folgen') + '</span>'
      +   '<span class="pc-pfeil" aria-hidden="true">' + (auf ? '▾' : '▸') + '</span>'
      + '</button>'
      + (auf ? '<div class="pc-liste">' + liste.map(folgeZeile).join('') + '</div>' : '')
      + '</section>';
  }

  window.hubPodcastStufe = function (stufe) {
    pcOffeneStufe = (pcOffeneStufe === stufe) ? null : stufe;
    podcastZeichnen();
  };

  var pcFolgen = null;   // null = noch nicht geladen
  var pcFehler = false;

  function podcastZeichnen() {
    var ziel = el('hbMedien'); if (!ziel) return;
    if (pcFehler) { ziel.innerHTML = leer('Der Podcast lässt sich gerade nicht laden. Versuch es später noch einmal.'); return; }
    if (pcFolgen === null) { ziel.innerHTML = leer('Einen Moment …'); return; }
    if (!pcFolgen.length) { ziel.innerHTML = leer('Noch keine Folge veröffentlicht.'); return; }

    var nach = {};
    pcFolgen.forEach(function (x) {
      var s = (x.level || '—').toUpperCase();
      (nach[s] = nach[s] || []).push(x);
    });

    var meine = meineStufe();
    var stufen = Object.keys(nach).sort(function (a, b) {
      var ia = STUFEN_ORD.indexOf(a), ib = STUFEN_ORD.indexOf(b);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    });
    if (meine && nach[meine]) {
      stufen = [meine].concat(stufen.filter(function (s) { return s !== meine; }));
    }
    if (pcOffeneStufe === null) pcOffeneStufe = (meine && nach[meine]) ? meine : stufen[0];

    var offeneZahl = pcFolgen.length;
    var neueZahl = pcFolgen.filter(function (x) { return !pcGehoert[x.id] && pcNeu(x.datum); }).length;

    ziel.innerHTML =
      '<p class="pc-summe">' + offeneZahl + (offeneZahl === 1 ? ' Folge' : ' Folgen')
        + ' · jede mit Text zum Mitlesen'
        + (neueZahl ? ' · <b>' + neueZahl + ' neu für dich</b>' : '') + '</p>'
      + stufen.map(function (s) {
          return gruppeHtml(s, nach[s], s === pcOffeneStufe, s === meine);
        }).join('')
      + (meine ? '' : '<p class="pc-fuss">Wenn du deine Stufe im Lernbereich festlegst, steht sie hier oben.</p>');
  }

  function medienLaden() {
    var ziel = el('hbMedien'); if (!ziel) return;

    if (offen.medien === 'podcast') {
      if (pcFolgen !== null || pcFehler) { podcastZeichnen(); return; }
      var c = window.sb;
      if (!c) { ziel.innerHTML = leer('Der Podcast lädt, sobald du angemeldet bist.'); return; }
      ziel.innerHTML = leer('Einen Moment …');
      /* Nur veroeffentlichte Folgen mit Tondatei — Entwuerfe und
         Fehlschlaege haben im Schuelerbereich nichts verloren. */
      c.from('podcasts').select('id,titel,level,dauer,thema,kurz,bild,datum')
        .eq('status', 'live').not('datei', 'is', null)
        .order('datum', { ascending: false }).limit(200)
        .then(function (r) {
          pcFolgen = ((r && r.data) || []).filter(function (x) { return x && x.id; });
          gehoertHolen(podcastZeichnen);
        }, function () { pcFehler = true; podcastZeichnen(); });
      return;
    }

    /* Reels und Videos: noch nicht gefuellt — ehrlich sagen statt
       leere Kacheln zeigen. */
    var was = offen.medien === 'reels' ? 'Reels' : 'Videos';
    ziel.innerHTML = '<div class="hb-bald">'
      + '<span class="hb-bald-em">' + (offen.medien === 'reels' ? '🎬' : '📺') + '</span>'
      + '<b>' + was + ' kommen als Nächstes</b>'
      + '<small>Julia füllt diesen Bereich gerade. Bis dahin: schau in den Podcast oder in deinen Kurs.</small>'
      + '<button class="hb-btn" onclick="hubReiter(\'medien\',\'podcast\')">Zum Podcast</button>'
      + '</div>';
  }
  window.hubPodcast = function (id) {
    try { gehoertMerken(id); } catch (e) {}
    try { podcastZeichnen(); } catch (e) {}
    if (window.podcastOeffnen) return window.podcastOeffnen(id, true);
    window.open('podcast.html#' + encodeURIComponent(id || ''), '_blank', 'noopener');
  };

  window.HUBS = { lernen: window.renderLernenHub, sprechen: window.renderSprechen, medien: window.renderMedien };

  /* ---------- Aussehen: derselbe Stil auf Handy und Rechner ---------- */
  function stil() {
    if (el('hb-stil')) return;
    var s = document.createElement('style'); s.id = 'hb-stil';
    s.textContent = [
      ':root{--hb-ink:#14181B;--hb-soft:#5A6B72;--hb-line:#E7ECEE;--hb-turq:#1B9BC0;--hb-turq-d:#15788F;',
      '  --hb-turq-ink:#10627A;--hb-turq-soft:#E6F8FC;--hb-gold:#EBA30B;--hb-gold-soft:#FDF1D6}',
      '#v-lernen,#v-sprechen,#v-medien{max-width:880px;margin:0 auto}',
      '.hb-kopf{margin:0 0 16px}',
      '.hb-kopf h2{font-size:clamp(24px,4vw,31px);margin:0 0 5px;letter-spacing:-.02em;line-height:1.1}',
      '.hb-kopf p{margin:0;color:var(--hb-soft);font-size:15px}',
      '.hb-hin{color:var(--hb-soft);font-size:14.5px;margin:0 0 14px;line-height:1.5}',
      '.hb-h3{font-size:17px;margin:24px 0 10px}',
      '.hb-weiter{margin-bottom:16px}',
      /* Reiterchips — wie im App-Entwurf */
      '.hb-reiter{display:flex;gap:9px;margin:0 0 14px;flex-wrap:wrap}',
      '.hb-r{font:inherit;font-weight:700;font-size:15px;cursor:pointer;padding:10px 20px;border-radius:999px;',
      '  min-height:44px;',
      '  background:#fff;color:var(--hb-ink);border:1.5px solid var(--hb-line);transition:.15s}',
      '.hb-r:hover{border-color:var(--hb-turq)}',
      '.hb-r.on{background:var(--hb-ink);color:#fff;border-color:var(--hb-ink)}',
      /* Kacheln */
      '.hb-git{display:grid;grid-template-columns:repeat(auto-fit,minmax(215px,1fr));gap:12px;',
      '  margin-bottom:14px}',
      '.hb-k{display:flex;flex-direction:column;gap:3px;text-align:left;font:inherit;color:inherit;cursor:pointer;',
      '  background:#fff;border:1.5px solid var(--hb-line);border-radius:16px;padding:16px;transition:.16s}',
      '.hb-k:hover{border-color:var(--hb-turq);transform:translateY(-1px);box-shadow:0 6px 18px rgba(20,24,27,.06)}',
      '.hb-em{font-size:25px;line-height:1;margin-bottom:5px}',
      '.hb-kt{font-weight:700;font-size:15.5px;line-height:1.25}',
      '.hb-ku{color:var(--hb-soft);font-size:13px;line-height:1.4}',
      '.hb-wert{margin-top:6px;font-size:12.5px;font-weight:700;color:var(--hb-turq-ink)}',
      /* Band */
      '.hb-band{width:100%;display:flex;align-items:center;gap:14px;text-align:left;font:inherit;cursor:pointer;',
      '  background:var(--hb-turq);color:#0B2F3B;border:none;border-radius:18px;padding:16px 18px;margin-bottom:10px;',
      '  transition:transform .14s ease,box-shadow .14s ease}',
      '.hb-band:hover{transform:translateY(-1px);box-shadow:0 8px 20px rgba(27,155,192,.28)}',
      '.hb-band.ruhig{background:#fff;color:var(--hb-ink);border:1.5px solid var(--hb-line)}',
      '.hb-band.ruhig:hover{border-color:var(--hb-turq);box-shadow:none}',
      '.hb-band-em{font-size:24px;flex:0 0 auto;line-height:1}',
      '.hb-band-t{flex:1;min-width:0}',
      '.hb-band-t b{display:block;font-size:16.5px;line-height:1.2}',
      '.hb-band-t small{display:block;font-size:13.5px;margin-top:2px;color:#12414F}',
      '.hb-band.ruhig .hb-band-t small{color:var(--hb-soft)}',
      '.hb-band-pf{font-size:19px;flex:0 0 auto;opacity:.8}',
      '.hb-werkzeug{margin-top:26px;padding-top:20px;border-top:1.5px solid var(--hb-line)}',
      /* Sprechclub */
      '.hb-club{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;',
      '  background:linear-gradient(135deg,var(--hb-gold-soft),#fff);border:1.5px solid var(--hb-gold);',
      '  border-radius:18px;padding:18px;margin-bottom:16px}',
      '.hb-club-t{flex:1;min-width:210px;display:flex;flex-direction:column;gap:3px}',
      '.hb-kick{font-size:11.5px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;color:#7A5300}',
      '.hb-club-t b{font-size:17.5px;line-height:1.2}',
      '.hb-club-t small{color:var(--hb-soft);font-size:13.5px}',
      '.hb-club-k{display:flex;gap:9px;flex-wrap:wrap}',
      '.hb-btn{background:var(--hb-ink);color:#fff;border:none;border-radius:999px;padding:11px 20px;',
      '  min-height:44px;',
      '  font:inherit;font-weight:700;font-size:14.5px;cursor:pointer;white-space:nowrap}',
      '.hb-btn:hover{background:#000}',
      '.hb-btn.hell{background:#fff;color:var(--hb-ink);border:1.5px solid var(--hb-line)}',
      '.hb-btn.hell:hover{border-color:var(--hb-ink)}',
      /* Gespräche eines Bereichs */
      '.hb-liste{margin-top:22px}',
      '.hb-d{width:100%;display:flex;align-items:center;gap:13px;text-align:left;font:inherit;color:inherit;',
      '  cursor:pointer;background:#fff;border:1.5px solid var(--hb-line);border-radius:14px;padding:13px 15px;margin-bottom:9px}',
      '.hb-d:hover{border-color:var(--hb-turq)}',
      '.hb-d-em{font-size:21px;flex:0 0 auto}',
      '.hb-d-t{flex:1;min-width:0}',
      '.hb-d-t b{display:block;font-size:15px;line-height:1.25}',
      '.hb-d-t small{display:block;color:var(--hb-soft);font-size:12.5px;margin-top:1px}',
      '.hb-d-lv{flex:0 0 auto;font-size:12px;font-weight:700;color:var(--hb-turq-ink);',
      '  background:var(--hb-turq-soft);border-radius:999px;padding:4px 10px}',
      /* Medien */
      '.hb-git.med{grid-template-columns:repeat(auto-fit,minmax(215px,1fr))}',
      '.hb-m{display:flex;flex-direction:column;text-align:left;font:inherit;color:inherit;cursor:pointer;',
      '  background:#fff;border:1.5px solid var(--hb-line);border-radius:16px;overflow:hidden;transition:.16s}',
      '.hb-m:hover{border-color:var(--hb-turq);transform:translateY(-1px)}',
      '.hb-m-bild{display:flex;align-items:center;justify-content:center;height:112px;font-size:30px;',
      '  background:var(--hb-turq-soft) center/cover no-repeat}',
      '.hb-m-u{padding:13px 14px 15px;display:flex;flex-direction:column;gap:3px}',
      '.hb-m-dauer{align-self:flex-start;font-size:12px;font-weight:800;color:#fff;background:var(--hb-turq-d);',
      '  border-radius:999px;padding:3px 10px;margin-bottom:3px}',
      '.hb-m-u b{font-size:15px;line-height:1.25}',
      '.hb-m-u small{color:var(--hb-soft);font-size:12.5px}',
      /* leer / kommt noch */
      '.hb-leer{color:var(--hb-soft);font-size:14.5px;padding:18px;background:#fff;',
      '  border:1.5px dashed var(--hb-line);border-radius:16px;text-align:center}',
      '.hb-bald{display:flex;flex-direction:column;align-items:center;gap:7px;text-align:center;',
      '  background:#fff;border:1.5px dashed var(--hb-line);border-radius:18px;padding:30px 20px}',
      '.hb-bald-em{font-size:38px;line-height:1}',
      '.hb-bald b{font-size:17px}',
      '.hb-bald small{color:var(--hb-soft);font-size:13.5px;max-width:42ch;line-height:1.5}',
      '.hb-bald .hb-btn{margin-top:8px}',

      /* ---- Podcast: nach Niveau geordnet ---- */
      '.pc-summe{color:var(--hb-soft);font-size:14px;margin:0 0 14px}',
      '.pc-summe b{color:var(--hb-ink);font-weight:650}',
      '.pc-gruppe{background:#fff;border:1.5px solid var(--hb-line);border-radius:16px;',
      '  margin:0 0 10px;overflow:hidden}',
      '.pc-gruppe.auf{border-color:#D7DEE2}',
      '.pc-gruppe-kopf{display:flex;align-items:center;gap:10px;width:100%;background:none;border:none;',
      '  font:inherit;text-align:left;padding:15px 17px;cursor:pointer;color:var(--hb-ink)}',
      '.pc-gruppe-kopf:hover{background:#FAFBFC}',
      '.pc-gruppe-kopf b{font-size:16px;flex:1;letter-spacing:-.01em}',
      '.pc-anzahl{color:var(--hb-soft);font-size:13.5px}',
      '.pc-pfeil{color:var(--hb-soft);font-size:13px;width:14px;text-align:center}',
      '.pc-liste{border-top:1px solid var(--hb-line)}',
      '.pc-zeile{display:flex;align-items:center;gap:13px;width:100%;background:none;border:none;',
      '  font:inherit;text-align:left;padding:13px 17px;cursor:pointer;color:var(--hb-ink);',
      '  border-bottom:1px solid #F1F4F6}',
      '.pc-zeile:last-child{border-bottom:none}',
      '.pc-zeile:hover{background:#FAFBFC}',
      '.pc-play{flex:0 0 32px;height:32px;border-radius:50%;background:var(--hb-ink);color:#fff;',
      '  display:flex;align-items:center;justify-content:center;font-size:11px;padding-left:2px}',
      '.pc-txt{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}',
      '.pc-txt b{font-size:15px;font-weight:600;line-height:1.3}',
      '.pc-txt small{color:var(--hb-soft);font-size:13px;line-height:1.35;',
      '  overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
      '.pc-meta{flex:0 0 auto;display:flex;align-items:center;gap:8px;color:var(--hb-soft);font-size:12.5px}',
      '.pc-dauer{font-variant-numeric:tabular-nums}',
      '.pc-tag{display:none}',
      '.pc-mark{font-size:11.5px;font-weight:650;border-radius:999px;padding:3px 9px;letter-spacing:.01em}',
      '.pc-mark.neu{background:#FDECEC;color:#B3261E}',
      '.pc-mark.fertig{background:#EDF6F0;color:#1F7A47}',
      '.pc-fuss{color:var(--hb-soft);font-size:13.5px;margin:14px 0 0;line-height:1.5}',
      '@media(min-width:560px){.pc-tag{display:inline}}',
      /* Handy: Kacheln zu zweit, wie im App-Entwurf */
      '@media(max-width:620px){',
      '  .hb-git{grid-template-columns:1fr 1fr;gap:10px}',
      '  .hb-k{padding:13px 12px;border-radius:15px}',
      '  .hb-em{font-size:22px}.hb-kt{font-size:14.5px}.hb-ku{font-size:12px}',
      '  .hb-band{padding:14px 15px;border-radius:16px}',
      '  .hb-kopf h2{font-size:26px}',
      '  .hb-r{padding:9px 16px;font-size:14.5px;min-height:44px}',
      '  .hb-club{padding:16px}.hb-club-k{width:100%}.hb-btn{flex:1;text-align:center}',
      '  .hb-m-bild{height:96px}',
      '}',
      '@media(max-width:360px){ .hb-git{grid-template-columns:1fr} }'
    ].join('\n');
    document.head.appendChild(s);
  }
})();
