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
  window.lernZurueck = function () { window.renderLernenThemen(); };

  /* Welcher Reiter ist gerade offen — die Sammelseiten merken sich das. */
  var offen = { lernen: 'freizeit', sprechen: 'alltag', medien: 'podcast' };
  window.hubReiter = function (welche, wert) {
    offen[welche] = wert;
    ({ lernen: window.renderLernen, sprechen: window.renderSprechen, medien: window.renderMedien })[welche]();
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
        wert: n ? n + ' Übungsreihen' : '',
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
        em: '🎯', t: k.t, u: k.u,
        wert: k.lektionen.length + ' Lektionen · ' + k.lvl,
        tun: "location.href='lektion.html?k=" + k.id + "&l=1'"
      });
    }).join('') + '</div>';
  }

  window.renderLernen = function () {
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
    gefuehle:   ['💬', 'Heikle Gespräche'],
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
  function bereichEmoji(id) { return (BEREICH[id] || [])[0] || '💬'; }

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

    var c = window.sb; if (!c) return;
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

  function medienLaden() {
    var ziel = el('hbMedien'); if (!ziel) return;

    if (offen.medien === 'podcast') {
      var c = window.sb;
      if (!c) { ziel.innerHTML = leer('Der Podcast lädt, sobald du angemeldet bist.'); return; }
      c.from('podcasts').select('id,titel,level,dauer,kurz,bild,datum')
        .order('datum', { ascending: false }).limit(40)
        .then(function (r) {
          var f = (r && r.data) || [];
          if (!f.length) { ziel.innerHTML = leer('Noch keine Folge veröffentlicht.'); return; }
          ziel.innerHTML = '<div class="hb-git med">' + f.map(function (x) {
            return '<button class="hb-m" onclick="hubPodcast(\'' + E(x.id) + '\')">'
              + '<span class="hb-m-bild"' + (x.bild ? ' style="background-image:url(\'' + E(x.bild) + '\')"' : '') + '>'
              + (x.bild ? '' : '🎧') + '</span>'
              + '<span class="hb-m-u">'
              +   '<span class="hb-m-dauer">' + E(x.dauer || '') + '</span>'
              +   '<b>' + E(x.titel) + '</b>'
              +   '<small>' + E(x.level || '') + (x.kurz ? ' · ' + E(x.kurz).slice(0, 40) : '') + '</small>'
              + '</span></button>';
          }).join('') + '</div>';
        }, function () { ziel.innerHTML = leer('Der Podcast lässt sich gerade nicht laden.'); });
      return;
    }

    /* Reels und Videos: noch nicht gefüllt — ehrlich sagen statt
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
    if (window.podcastOeffnen) return window.podcastOeffnen(id, true);
    window.open('podcast.html', '_blank', 'noopener');
  };

  window.HUBS = { lernen: window.renderLernen, sprechen: window.renderSprechen, medien: window.renderMedien };

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
      '  background:#fff;color:var(--hb-ink);border:1.5px solid var(--hb-line);transition:.15s}',
      '.hb-r:hover{border-color:var(--hb-turq)}',
      '.hb-r.on{background:var(--hb-ink);color:#fff;border-color:var(--hb-ink)}',
      /* Kacheln */
      '.hb-git{display:grid;grid-template-columns:repeat(auto-fit,minmax(215px,1fr));gap:12px}',
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
      /* Handy: Kacheln zu zweit, wie im App-Entwurf */
      '@media(max-width:620px){',
      '  .hb-git{grid-template-columns:1fr 1fr;gap:10px}',
      '  .hb-k{padding:13px 12px;border-radius:15px}',
      '  .hb-em{font-size:22px}.hb-kt{font-size:14.5px}.hb-ku{font-size:12px}',
      '  .hb-band{padding:14px 15px;border-radius:16px}',
      '  .hb-kopf h2{font-size:26px}',
      '  .hb-r{padding:9px 16px;font-size:14.5px}',
      '  .hb-club{padding:16px}.hb-club-k{width:100%}.hb-btn{flex:1;text-align:center}',
      '  .hb-m-bild{height:96px}',
      '}',
      '@media(max-width:360px){ .hb-git{grid-template-columns:1fr} }'
    ].join('\n');
    document.head.appendChild(s);
  }
})();
