/* ============================================================
   lernpfad.js — die Übersicht und der Weg

   Zwei Ansichten, eine Datei:

     LERNPFAD.start()  -> „Was mache ich heute?"  (eine Karte, ein Knopf)
     LERNPfad.pfad()   -> die Straße: Kapitel und Szenen von A1 bis C1

   WICHTIG: Diese Datei erzeugt KEINEN neuen Lernstoff. Sie ordnet nur,
   was schon da ist — die 97 Situationen aus dialoge.js. Nichts wird
   ersetzt, nichts überschrieben.

   Fortschritt wird vorerst im Browser gespeichert (localStorage).
   Sobald es dafür eine Tabelle in der Datenbank gibt, muss nur
   `LERNPFAD.speicher` ausgetauscht werden — sonst nichts.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Die sechs Kapitel ----------
     Die Namen stammen nicht aus einer Theorie, sondern aus Julias
     eigenen A2-Lektionen im Integrationskurs-Aufbau. */
  var KAPITEL = [
    { id: 'ankommen', t: 'Ankommen & Menschen', z: 'lernen',
      u: 'Sich vorstellen, Nachbarn, höflich sein',
      r: /vorstell|nachbar|kennenlern|kaffee|einlad|komplim|entschuld|absag|versteh|freundin|erzieh|betreu/ },
    { id: 'wohnen', t: 'Wohnen', z: 'material',
      u: 'Wohnung, Miete, Handwerk, Nachbarschaft',
      r: /wohnung|heizung|miete|kaution|umzug|musik von oben|tonne|hotel|besichtig/ },
    { id: 'geld', t: 'Einkaufen, Geld & Verträge', z: 'guthaben',
      u: 'Läden, Verträge, Reklamation',
      r: /bäcker|baecker|supermarkt|flohmarkt|umtausch|reklamation|vertrag|kündig|kuendig|versicher|verkauf|bezahl|paket|lieferung|friseur|werkstatt|tisch reserv|handy/ },
    { id: 'gesund', t: 'Gesundheit', z: 'hoeren',
      u: 'Arzt, Apotheke, Notfall, Krankenkasse',
      r: /arzt|apothek|krankenhaus|physio|zahnarzt|notruf|bereitschaft|krankenkasse|allergie/ },
    { id: 'amt', t: 'Amt & Papiere', z: 'material',
      u: 'Anmelden, Aufenthalt, Formulare',
      r: /amt|anmeld|aufenthalt|führerschein|fuehrerschein|kindergeld|anzeige|unterlagen|widerspruch|diebstahl/ },
    { id: 'arbeit', t: 'Arbeit', z: 'lernpfad',
      u: 'Bewerbung, Betrieb, Kolleginnen und Kollegen',
      r: /arbeitstag|vorstellungsgespräch|vorstellungsgespraech|praktikum|dienstplan|baustelle|sicherheitsunterweis|kolleg|gehalt|kritik|aufgabe klären|aufgabe klaeren|einarbeit|betrieb|eltern|schule/ },
  ];

  /* Einzelne Situationen, die die Regel nicht sicher trifft. */
  var FEST = {
    'termin-verschieben': 'ankommen',
  };

  var NIVEAUS = ['A1', 'A2', 'B1', 'B2', 'C1'];

  /* ---------- Fortschritt ----------
     Bewusst hinter einer kleinen Schicht, damit später der Wechsel
     auf die Datenbank eine einzige Stelle betrifft. */
  var speicher = {
    schluessel: function () {
      var u = (window.user && window.user.id) || 'gast';
      return 'lernpfad_' + u;
    },
    lade: function () {
      try { return JSON.parse(localStorage.getItem(this.schluessel()) || '{}') || {}; }
      catch (e) { return {}; }
    },
    sichere: function (o) {
      try { localStorage.setItem(this.schluessel(), JSON.stringify(o)); } catch (e) {}
    },
    fertig: function (szeneId) { return !!this.lade()[szeneId]; },
    setzeFertig: function (szeneId) {
      var o = this.lade();
      o[szeneId] = new Date().toISOString();
      this.sichere(o);
    },
  };

  /* ---------- Den Weg aus dialoge.js bauen ---------- */
  function kapitelVon(d) {
    if (FEST[d.id]) return FEST[d.id];
    var t = String(d.titel || '').toLowerCase();
    for (var i = 0; i < KAPITEL.length; i++) {
      if (KAPITEL[i].r.test(t)) return KAPITEL[i].id;
    }
    return 'ankommen';
  }

  var _weg = null;
  function weg() {
    if (_weg) return _weg;
    var quelle = window.DIALOGE || [];
    var w = {};
    NIVEAUS.forEach(function (n) {
      w[n] = {};
      KAPITEL.forEach(function (k) { w[n][k.id] = []; });
    });
    quelle.forEach(function (d) {
      var n = String(d.lvl || 'A1').toUpperCase();
      if (!w[n]) return;
      w[n][kapitelVon(d)].push(d);
    });
    _weg = w;
    return w;
  }

  function meinNiveau() {
    var p = window.profile || {};
    var n = String(p.level || p.target_level || 'B1').toUpperCase().slice(0, 2);
    return NIVEAUS.indexOf(n) >= 0 ? n : 'B1';
  }

  /* Alle Szenen eines Niveaus in Lernreihenfolge: Kapitel für Kapitel. */
  function szenenFolge(niveau) {
    var w = weg()[niveau] || {};
    var out = [];
    KAPITEL.forEach(function (k) {
      (w[k.id] || []).forEach(function (d) { out.push({ k: k, d: d }); });
    });
    return out;
  }

  function naechsteSzene(niveau) {
    var folge = szenenFolge(niveau);
    for (var i = 0; i < folge.length; i++) {
      if (!speicher.fertig(folge[i].d.id)) return folge[i];
    }
    return null;
  }

  function stand(niveau) {
    var folge = szenenFolge(niveau);
    var f = folge.filter(function (x) { return speicher.fertig(x.d.id); }).length;
    return { fertig: f, gesamt: folge.length, prozent: folge.length ? Math.round(f * 100 / folge.length) : 0 };
  }

  function E(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function zeichen(name) {
    try { return window.ZEICHEN ? ZEICHEN.html(name) : ''; } catch (e) { return ''; }
  }

  /* ---------- Stil ----------
     Nur was der Lernpfad selbst braucht. Farben, Schriften und Formen
     kommen aus club-stil.css — hier steht bewusst KEINE eigene Farbe. */
  var STIL = `
  #v-lernpfad .lp-heute{background:linear-gradient(135deg,#FFFDF3,#FFF3C9);
    border:2.5px solid var(--tinte);border-radius:20px;box-shadow:var(--schatten-tief,4px 5px 0 rgba(32,33,31,.16));
    padding:22px 24px;margin-bottom:20px;display:flex;gap:20px;align-items:center;flex-wrap:wrap}
  #v-lernpfad .lp-heute .lp-ic{flex:0 0 auto;font-size:40px;line-height:0}
  #v-lernpfad .lp-heute .lp-tx{flex:1;min-width:220px}
  #v-lernpfad .lp-heute small{font-family:var(--schrift-marker,cursive);color:var(--rot);font-size:15px;display:block;margin-bottom:2px}
  #v-lernpfad .lp-heute h2{font-size:24px;margin:0 0 4px}
  #v-lernpfad .lp-heute h2::after{display:none}
  #v-lernpfad .lp-heute p{color:var(--text-soft);font-size:15px;margin:0}
  #v-lernpfad .lp-heute .btn{flex:0 0 auto}

  #v-lernpfad .lp-reihe{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:22px}

  /* Die Straße */
  #v-lernpfad .lp-kap{margin-bottom:26px}
  #v-lernpfad .lp-kap-kopf{display:flex;align-items:center;gap:12px;margin-bottom:10px}
  #v-lernpfad .lp-kap-kopf .lp-ic{font-size:24px;line-height:0;flex:0 0 auto}
  #v-lernpfad .lp-kap-kopf h3{margin:0;font-size:19px}
  #v-lernpfad .lp-kap-kopf i{font-style:normal;font-family:var(--schrift-notiz,cursive);font-size:17px;color:var(--text-soft)}
  #v-lernpfad .lp-kap-kopf .lp-zahl{margin-left:auto;font-family:var(--schrift-kopf,inherit);font-weight:700;
    font-size:13px;color:var(--tuerkis-dunkel);white-space:nowrap}

  #v-lernpfad .lp-strasse{position:relative;padding-left:30px}
  #v-lernpfad .lp-strasse::before{content:'';position:absolute;left:9px;top:12px;bottom:12px;width:4px;
    border-radius:3px;background:repeating-linear-gradient(180deg,var(--linie) 0 9px,transparent 9px 16px)}
  #v-lernpfad .lp-szene{position:relative;display:flex;align-items:center;gap:12px;
    background:var(--karte);border:2.5px solid var(--tinte);border-radius:14px;
    box-shadow:var(--schatten,3px 4px 0 rgba(32,33,31,.10));
    padding:11px 14px;margin-bottom:10px;width:100%;text-align:left;
    font-family:inherit;font-size:15px;color:var(--tinte);cursor:pointer;
    transition:background-color .15s ease,transform .15s ease}
  #v-lernpfad .lp-szene:hover{transform:translateY(-2px)}
  #v-lernpfad .lp-szene::before{content:'';position:absolute;left:-30px;top:50%;transform:translateY(-50%);
    width:19px;height:19px;border-radius:50%;background:var(--karte);border:2.5px solid var(--tinte)}
  #v-lernpfad .lp-szene.fertig::before{background:var(--gruen)}
  #v-lernpfad .lp-szene.dran::before{background:var(--gelb)}
  #v-lernpfad .lp-szene .lp-em{font-size:20px;flex:0 0 auto}
  #v-lernpfad .lp-szene .lp-t{flex:1;min-width:0;font-family:var(--schrift-kopf,inherit);font-weight:700}
  #v-lernpfad .lp-szene .lp-d{font-family:var(--schrift-notiz,cursive);font-size:16px;color:var(--text-soft);flex:0 0 auto}
  #v-lernpfad .lp-szene.fertig{opacity:.72}
  #v-lernpfad .lp-szene.fertig .lp-t{text-decoration:line-through;text-decoration-thickness:2px}
  #v-lernpfad .lp-szene.dran{border-width:3px;box-shadow:4px 5px 0 rgba(32,33,31,.16)}
  #v-lernpfad .lp-haken{flex:0 0 auto;font-weight:700;color:var(--gruen-tief)}

  #v-lernpfad .lp-leer{background:var(--karte);border:2.5px dashed var(--linie);border-radius:14px;
    padding:13px 15px;margin-bottom:10px;font-family:var(--schrift-notiz,cursive);font-size:17px;color:var(--text-soft)}

  #v-lernpfad .lp-wahl{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px}

  @media(max-width:620px){
    #v-lernpfad .lp-heute{padding:17px 16px;gap:14px}
    #v-lernpfad .lp-heute h2{font-size:20px}
    #v-lernpfad .lp-strasse{padding-left:26px}
    #v-lernpfad .lp-szene::before{left:-26px}
  }`;

  function stilEinsetzen() {
    if (document.getElementById('lernpfadStil')) return;
    var st = document.createElement('style');
    st.id = 'lernpfadStil';
    st.textContent = STIL;
    document.head.appendChild(st);
  }

  /* ---------- Die Karte „heute" ---------- */
  function heuteHtml(niveau) {
    var n = naechsteSzene(niveau);
    if (!n) {
      return '<div class="lp-heute"><div class="lp-ic zeichen">' + zeichen('fortschritt') + '</div>' +
        '<div class="lp-tx"><small>Geschafft</small>' +
        '<h2>Du hast ' + E(niveau) + ' komplett durch.</h2>' +
        '<p>Zeit für das nächste Niveau — oder eine Szene zur Wiederholung.</p></div></div>';
    }
    var d = n.d;
    return '<div class="lp-heute">' +
      '<div class="lp-ic zeichen">' + zeichen(n.k.z) + '</div>' +
      '<div class="lp-tx">' +
        '<small>Dein Auftrag für heute</small>' +
        '<h2>' + E(d.titel) + '</h2>' +
        '<p>' + E(n.k.t) + ' · ' + E(d.lvl) + ' · ' + E(d.dauer || '20 Min') + '</p>' +
      '</div>' +
      '<button class="btn btn-primary" data-lp-start="' + E(d.id) + '">Loslegen →</button>' +
    '</div>';
  }

  function standHtml(niveau) {
    var s = stand(niveau);
    var serie = 0;
    try { serie = Number(localStorage.getItem('lp_serie') || 0) || 0; } catch (e) {}
    return '<div class="lp-reihe">' +
      '<div class="stat"><b>' + s.fertig + '/' + s.gesamt + '</b><span>Szenen geschafft</span></div>' +
      '<div class="stat"><b>' + s.prozent + '%</b><span>von ' + E(niveau) + '</span></div>' +
      '<div class="stat"><b>' + serie + '</b><span>Tage in Folge</span></div>' +
    '</div>';
  }

  /* ---------- Die Straße ---------- */
  function pfadHtml(niveau) {
    var w = weg()[niveau] || {};
    var n = naechsteSzene(niveau);
    var dranId = n ? n.d.id : null;

    var wahl = '<div class="lp-wahl">' + NIVEAUS.map(function (x) {
      return '<button class="kpill' + (x === niveau ? ' active' : '') + '" data-lp-niveau="' + x + '">' + x + '</button>';
    }).join('') + '</div>';

    var kapitel = KAPITEL.map(function (k) {
      var liste = w[k.id] || [];
      var fertig = liste.filter(function (d) { return speicher.fertig(d.id); }).length;

      var inhalt = liste.length
        ? '<div class="lp-strasse">' + liste.map(function (d) {
            var ist = speicher.fertig(d.id);
            var cls = 'lp-szene' + (ist ? ' fertig' : '') + (d.id === dranId ? ' dran' : '');
            return '<button class="' + cls + '" data-lp-start="' + E(d.id) + '">' +
              '<span class="lp-em">' + E(d.em || '•') + '</span>' +
              '<span class="lp-t">' + E(d.titel) + '</span>' +
              '<span class="lp-d">' + E(d.dauer || '') + '</span>' +
              (ist ? '<span class="lp-haken">✓</span>' : '') +
            '</button>';
          }).join('') + '</div>'
        : '<div class="lp-leer">Hier fehlen noch Szenen — wir bauen sie gerade.</div>';

      return '<div class="lp-kap">' +
        '<div class="lp-kap-kopf">' +
          '<span class="lp-ic zeichen">' + zeichen(k.z) + '</span>' +
          '<div><h3>' + E(k.t) + '</h3><i>' + E(k.u) + '</i></div>' +
          '<span class="lp-zahl">' + fertig + ' / ' + liste.length + '</span>' +
        '</div>' + inhalt +
      '</div>';
    }).join('');

    return wahl + kapitel;
  }

  /* ---------- Ansichten ---------- */
  function wurzel(id) { return document.getElementById(id); }

  var gewaehltesNiveau = null;

  function start(zielId) {
    stilEinsetzen();
    var r = wurzel(zielId || 'v-lernpfad'); if (!r) return;
    var niveau = gewaehltesNiveau || meinNiveau();
    r.innerHTML =
      '<div class="pagehead"><div class="kick">Schön, dass du da bist</div>' +
      '<h1>Dein Weg durch <span class="mark">' + E(niveau) + '</span></h1></div>' +
      heuteHtml(niveau) + standHtml(niveau);
    binde(r);
  }

  function pfad(zielId) {
    stilEinsetzen();
    var r = wurzel(zielId || 'v-lernpfad'); if (!r) return;
    var niveau = gewaehltesNiveau || meinNiveau();
    r.innerHTML =
      '<div class="pagehead"><div class="kick">Schritt für Schritt</div>' +
      '<h1>Dein <span class="mark">Lernpfad</span></h1>' +
      '<p>Sechs Kapitel je Niveau. Eine Szene dauert etwa 20 Minuten.</p></div>' +
      heuteHtml(niveau) + standHtml(niveau) + pfadHtml(niveau);
    binde(r);
  }

  function binde(r) {
    if (r.__lp) return;
    r.__lp = true;
    r.addEventListener('click', function (ev) {
      var t = ev.target;
      if (!t || !t.closest) return;

      var nv = t.closest('[data-lp-niveau]');
      if (nv) { gewaehltesNiveau = nv.getAttribute('data-lp-niveau'); pfad(r.id); return; }

      var st = t.closest('[data-lp-start]');
      if (st) {
        var id = st.getAttribute('data-lp-start');
        // Die Szene selbst bauen wir als Nächstes. Bis dahin führt der
        // Knopf dorthin, wo der Dialog heute schon läuft.
        if (typeof window.oeffneSzene === 'function') { window.oeffneSzene(id); return; }
        if (typeof window.oeffneDialog === 'function') { window.oeffneDialog(id); return; }
        if (typeof window.go === 'function') { window.go('amanda'); return; }
      }
    });
  }

  window.LERNPFAD = {
    start: start,
    pfad: pfad,
    kapitel: KAPITEL,
    niveaus: NIVEAUS,
    weg: weg,
    stand: stand,
    naechste: naechsteSzene,
    speicher: speicher,       // hier später auf die Datenbank umstellen
  };
})();
