/* ============================================================
   fertigkeiten.js — der Lernraum, nach Fertigkeiten geordnet

   Es entsteht KEIN neuer Lernstoff. Diese Datei ordnet nur, was
   schon da ist: die Übungen aus uebungen.js, die Prüfungsteile,
   den Vokabeltrainer, Amanda, das Tandem, die Materialien.

   Zwei Dinge:

     window.fertOeffnen('hoeren')   -> öffnet den Raum einer Fertigkeit
     window.renderFertigkeit()      -> zeichnet den offenen Raum

   Dazu der Stand-Streifen ganz oben: Niveau und Weg, fällige
   Wörter, nächste Stunde, Serie und Punkte — auf jeder Seite
   sichtbar, damit man immer weiß, wo man steht.
   ============================================================ */
(function () {
  'use strict';

  function E(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }
  function el(id) { return document.getElementById(id); }
  function zeichen(n) { try { return window.clubZeichen ? window.clubZeichen(n) : (window.zeichen ? window.zeichen(n) : ''); } catch (e) { return ''; } }
  function gehe(v) { try { window.go(v); } catch (e) { location.hash = v; } }

  /* ---------- Die sechs Räume ----------
     `ueben` nennt die Bereiche aus uebungen.js, die hierher gehören.
     `pruef` ist der Teil der Prüfung, `karten` sind die Wege hinein. */
  var RAEUME = {
    hoeren: {
      t: 'Hören', em: '🎧', zei: 'hoeren', farbe: '#0EA5E9',
      satz: 'Verstehen, was gesprochen wird — Durchsagen, Anrufe, Gespräche.',
      ueben: ['hoeren'], pruef: 'hoeren',
      karten: [
        { t: 'Übungen zum Hören', u: 'Kurze Aufnahmen mit Fragen dazu.', k: 'Üben', a: function () { ubRaum('hoeren'); } },
        { t: 'Der tägliche Podcast', u: 'Jeden Tag eine Folge auf deinem Niveau.', k: 'Anhören', a: function () { window.open('/podcast.html', '_blank'); } },
        { t: 'Hörverstehen in der Prüfung', u: 'Die Aufgaben aus Start Deutsch, DTZ, B1 und B2.', k: 'Zur Prüfung', a: function () { gehe('pruefung'); } }
      ]
    },
    lesen: {
      t: 'Lesen', em: '📖', zei: 'lernen', farbe: '#D42A21',
      satz: 'Texte verstehen — Briefe vom Amt, Aushänge, Nachrichten, Anzeigen.',
      ueben: [], pruef: 'lesen',
      karten: [
        { t: 'Lektionen zu deinen Themen', u: 'Jedes Thema mit Text, Wortschatz und Aufgaben.', k: 'Themen ansehen', a: function () { gehe('lernen'); } },
        { t: 'Leseverstehen in der Prüfung', u: 'Anzeigen, Mails und Artikel wie in der Prüfung.', k: 'Zur Prüfung', a: function () { gehe('pruefung'); } },
        { t: 'Material aus dem Unterricht', u: 'Alle Mitschriften und Arbeitsblätter, nach Thema.', k: 'Material öffnen', a: function () { gehe('materialien'); } }
      ]
    },
    schreiben: {
      t: 'Schreiben', em: '✍️', zei: 'schreiben', farbe: '#12A594',
      satz: 'Selbst formulieren — E-Mails, Anträge, Entschuldigungen, Beschwerden.',
      ueben: [], pruef: 'schreiben',
      karten: [
        { t: 'Schreibtrainer', u: 'Schreib einen Text, bekomme eine Rückmeldung dazu.', k: 'Schreiben', a: function () { gehe('schreiben'); } },
        { t: 'Schreiben in der Prüfung', u: 'Die Schreibaufgaben von A1 bis B2.', k: 'Zur Prüfung', a: function () { gehe('pruefung'); } },
        { t: 'Deine Fehler', u: 'Was im Chat korrigiert wurde — zum Nachüben.', k: 'Fehler ansehen', a: function () { gehe('fehler'); } }
      ]
    },
    sprechen: {
      t: 'Sprechen', em: '🗣️', zei: 'sprechen', farbe: '#F59E0B',
      satz: 'Den Mund aufmachen — allein üben, mit Amanda, mit einem Menschen.',
      ueben: ['aussprache', 'shadowing'], pruef: 'sprechen',
      karten: [
        { t: 'Amanda', u: 'Deine Gesprächspartnerin. Jederzeit, ohne Termin.', k: 'Sprechen', a: function () { gehe('amanda'); } },
        { t: 'Sprech-Tandem', u: 'Ein Mensch aus dem Club auf deinem Niveau.', k: 'Tandem öffnen', a: function () { gehe('buddy'); } },
        { t: 'Aussprache & Nachsprechen', u: 'Laute üben, hören, aufnehmen, vergleichen.', k: 'Üben', a: function () { ubRaum('aussprache'); } },
        { t: 'Sprechen in der Prüfung', u: 'Vorstellen, beschreiben, planen — wie im Test.', k: 'Zur Prüfung', a: function () { gehe('pruefung'); } }
      ]
    },
    wortschatz: {
      t: 'Wortschatz', em: '🧠', zei: 'vokabeln', farbe: '#7C3AED',
      satz: 'Wörter, die du wirklich brauchst — und die auch hängen bleiben.',
      ueben: ['wortschatz'], pruef: null,
      karten: [
        { t: 'Vokabeltrainer', u: 'Deine Wörter, im richtigen Abstand wiederholt.', k: 'Trainer öffnen', a: function () { gehe('vokabeln'); } },
        { t: 'Wortschatz-Übungen', u: 'Nach Themen sortiert, vom Amt bis zum Café.', k: 'Üben', a: function () { ubRaum('wortschatz'); } },
        { t: 'Wörter aus deinen Lektionen', u: 'Was im Unterricht drankam, zum Nacharbeiten.', k: 'Themen ansehen', a: function () { gehe('lernen'); } }
      ]
    },
    grammatik: {
      t: 'Grammatik', em: '📐', zei: 'ueben', farbe: '#13A89A',
      satz: 'Die Regeln dahinter — erklärt und geübt, nicht auswendig gelernt.',
      ueben: ['grammatik'], pruef: null,
      karten: [
        { t: 'Grammatik-Übungen', u: 'Von den Fällen bis zum Konjunktiv.', k: 'Üben', a: function () { ubRaum('grammatik'); } },
        { t: 'Grammatik-Lektionen', u: 'Jede Regel mit Erklärung und Beispielen.', k: 'Lektionen ansehen', a: function () { gehe('lernen'); } }
      ]
    }
  };

  /* Echte Fotos für die Themen in Hören und Wortschatz (8.11.2026).
     Grammatik und Aussprache behalten ihr Zeichen, ein Foto zu
     "Genitiv" wäre nur Dekoration. */
  var FK_BILD = {"wortschatz":{"a1-begruessung":"bilder/thema/a1-begruessung-s.jpg","a1-familie":"bilder/thema/a1-familie-s.jpg","a1-essen":"bilder/thema/a1-essen-s.jpg","a1-wohnen":"bilder/thema/a1-wohnen-s.jpg","a1-einkaufen":"bilder/thema/a1-einkaufen-s.jpg","a1-tagesablauf":"bilder/thema/a1-tagesablauf-s.jpg","a1-koerper":"bilder/dialog/arzt-termin-s.jpg","a1-kleidung":"bilder/dialog/umtausch-s.jpg","a1-wetter":"bilder/dialog/wetter-arbeit-s.jpg","a1-wege":"bilder/dialog/bahnhof-s.jpg","a1-beruf":"bilder/dialog/erster-tag-s.jpg","a1-freizeit":"bilder/beruf/malen.jpg","a1-stadt":"bilder/thema/stadt-s.jpg","a1-zahlen":"bilder/dialog/getrennt-zahlen-s.jpg","arbeit":"bilder/thema/bewerbung-s.jpg","bildung":"bilder/thema/bildung-s.jpg","einkaufen":"bilder/thema/einkaufen-s.jpg","essen":"bilder/thema/essen-s.jpg","gefuehle":"bilder/thema/gefuehle-s.jpg","gesundheit":"bilder/thema/gesundheit-s.jpg","medien":"bilder/thema/medien-s.jpg","natur":"bilder/thema/natur-s.jpg","persoenlichkeit":"bilder/thema/menschen-s.jpg","redewendungen":"bilder/thema/redewendungen-s.jpg","reisen":"bilder/thema/reisen-s.jpg","stadt":"bilder/thema/stadt-s.jpg","starke-adjektive":"bilder/thema/starke-adjektive-s.jpg","typisch-deutsch":"bilder/thema/typisch-deutsch-s.jpg","wohnen":"bilder/thema/wohnen-s.jpg","kultur":"bilder/thema/kultur-s.jpg","integration":"bilder/dialog/heimweh-sprechen-s.jpg","umgangssprache":"bilder/thema/umgangssprache-s.jpg","feste":"bilder/dialog/party-s.jpg","strand":"bilder/thema/strand-s.jpg","redemittel":"bilder/thema/redemittel-s.jpg","zahnarzt":"bilder/dialog/zahnarzt-kostenplan-s.jpg","ki-arbeitswelt":"bilder/thema/ki-arbeitswelt-s.jpg","c1-amt":"bilder/dialog/c1-amt-falscher-bescheid-s.jpg","c1-arzt":"bilder/dialog/c1-arzt-nicht-abspeisen-lassen-s.jpg","c1-vertrag":"bilder/dialog/c1-bank-mitverkauf-abwehren-s.jpg","c1-buero":"bilder/dialog/c1-aufgabe-zurueckgeben-s.jpg","c1-pflege":"bilder/dialog/c1-pflege-arzt-ueberzeugen-s.jpg","c1-bewerbung":"bilder/dialog/c1-stressinterview-deutsch-s.jpg","c1-kunden":"bilder/dialog/c1-grosskunde-droht-s.jpg","c1-familie":"bilder/dialog/c1-elternabend-klassenfahrt-s.jpg","amt-b1":"bilder/dialog/anmeldung-buergeramt-s.jpg","bewerbung-b1":"bilder/dialog/bewerbung-s.jpg","pflege-b1":"bilder/dialog/uebergabe-station-s.jpg","a2-arzt":"bilder/dialog/apotheke-rezept-s.jpg","a2-wohnung":"bilder/dialog/nachbarn-s.jpg","a2-einkaufen":"bilder/dialog/supermarkt-s.jpg","a2-amt":"bilder/dialog/amt-s.jpg","a2-arbeit":"bilder/dialog/neue-kollegin-zeigen-s.jpg","a2-unterwegs":"bilder/dialog/anschluss-verpasst-s.jpg","a2-essen":"bilder/dialog/restaurant-s.jpg","a2-freizeit":"bilder/dialog/kaffee-einladen-s.jpg","a2-cafe":"bilder/dialog/baeckerei-s.jpg","a2-bank":"bilder/dialog/konto-eroeffnen-s.jpg","a2-post":"bilder/dialog/post-s.jpg","a2-friseur":"bilder/dialog/friseur-s.jpg","a2-handy":"bilder/dialog/handyvertrag-abschliessen-s.jpg","a2-schule":"bilder/dialog/elterngespraech-schule-s.jpg","a2-werkstatt":"bilder/dialog/fahrrad-reparatur-s.jpg","a2-kleidung":"bilder/dialog/umtausch-s.jpg","polizei-neu":"bilder/dialog/polizei-fahrraddiebstahl-s.jpg","bau-neu":"bilder/dialog/anweisung-baustelle-s.jpg","elektro-shk-neu":"bilder/dialog/elektriker-bestellen-s.jpg","metall-neu":"bilder/beruf/werkstatt.jpg","reinigung-neu":"bilder/dialog/reinigung-uebergabe-s.jpg","lager-neu":"bilder/beruf/lager.jpg","produktion-neu":"bilder/beruf/produktion.jpg","ingenieur-neu":"bilder/dialog/abnahme-begleiten-s.jpg","telefonieren-neu":"bilder/dialog/telefon-melden-s.jpg","ankommen-neu":"bilder/dialog/anmeldung-buergeramt-s.jpg","sprachkurs-neu":"bilder/dialog/kurs-nachfragen-s.jpg","weiterbildung-neu":"bilder/dialog/weiterbildung-beratung-s.jpg","medien-neu":"bilder/dialog/phishing-erkennen-s.jpg","a2-muell":"bilder/dialog/muell-trennen-s.jpg","a2-umzug":"bilder/beruf/umzug.jpg","b2-verantwortung":"bilder/dialog/dienstplan-fehler-s.jpg","b2-standpunkt":"bilder/dialog/feedback-s.jpg","b2-umwelt":"bilder/thema/natur-s.jpg","b2-geld":"bilder/dialog/haftpflicht-abschliessen-s.jpg","b2-gesundheit":"bilder/beruf/blutdruck.jpg","b2-gesellschaft":"bilder/thema/menschen-s.jpg","b2-bildung":"bilder/dialog/weiterbildung-beratung-s.jpg","b2-digital":"bilder/dialog/phishing-erkennen-s.jpg","b2-erziehung":"bilder/dialog/kinderbetreuung-bitten-s.jpg","b2-sprache":"bilder/thema/live-unterricht-s.jpg","c1-erkenntnis":"bilder/thema/nominalisierung-s.jpg","c1-abwaegen":"bilder/dialog/c1-freundin-geschaeftsidee-s.jpg","c1-register":"bilder/dialog/kompliment-annehmen-s.jpg","c1-innenleben":"bilder/dialog/jemanden-troesten-s.jpg","c1-arbeitsrecht":"bilder/dialog/c1-gehalt-und-luecke-s.jpg","c1-studium":"bilder/thema/bildung-s.jpg","c1-erinnerung":"bilder/dialog/c1-kondolieren-kollegin-s.jpg","c1-wirtschaft":"bilder/beruf/grossraum.jpg"},"hoeren":{"a1-begruessen":"bilder/thema/a1-begruessung-s.jpg","a1-zahlen":"bilder/dialog/getrennt-zahlen-s.jpg","a1-uhrzeit":"bilder/dialog/termin-verschieben-s.jpg","a1-baecker":"bilder/dialog/baeckerei-s.jpg","a1-weg":"bilder/thema/stadt-s.jpg","a1-telefon":"bilder/dialog/telefon-praxis-s.jpg","familie":"bilder/dialog/kita-eingewoehnung-s.jpg","feste":"bilder/dialog/geburtstag-planen-s.jpg","friseur-beruf":"bilder/dialog/friseur-s.jpg","kasse":"bilder/dialog/supermarkt-s.jpg","kleidung":"bilder/dialog/umtausch-s.jpg","post":"bilder/dialog/post-s.jpg","reinigung":"bilder/dialog/reinigung-beschwerde-s.jpg","zahnarzt":"bilder/dialog/zahnarzt-kostenplan-s.jpg","arbeit":"bilder/thema/bewerbung-s.jpg","bildung":"bilder/thema/bildung-s.jpg","einkaufen":"bilder/thema/einkaufen-s.jpg","essen":"bilder/thema/essen-s.jpg","gefuehle":"bilder/thema/gefuehle-s.jpg","gesundheit":"bilder/thema/gesundheit-s.jpg","medien":"bilder/thema/medien-s.jpg","natur":"bilder/thema/natur-s.jpg","persoenlichkeit":"bilder/thema/menschen-s.jpg","redewendungen":"bilder/thema/redewendungen-s.jpg","reisen":"bilder/thema/reisen-s.jpg","stadt":"bilder/thema/stadt-s.jpg","starke-adjektive":"bilder/thema/starke-adjektive-s.jpg","typisch-deutsch":"bilder/thema/typisch-deutsch-s.jpg","wohnen":"bilder/thema/wohnen-s.jpg","amt":"bilder/dialog/amt-s.jpg","bank":"bilder/dialog/konto-eroeffnen-s.jpg","bau":"bilder/dialog/anweisung-baustelle-s.jpg","bewerbung":"bilder/dialog/bewerbung-s.jpg","buchhaltung":"bilder/dialog/c1-finanzamt-rueckfrage-s.jpg","buero":"bilder/thema/buero-s.jpg","elektro-shk":"bilder/dialog/heizung-kaputt-s.jpg","erziehung":"bilder/beruf/spielplatz.jpg","fahren":"bilder/dialog/lieferung-annehmen-s.jpg","handel":"bilder/dialog/reklamation-laden-s.jpg","heikel":"bilder/dialog/streit-klaeren-s.jpg","hotel":"bilder/dialog/hotel-einchecken-s.jpg","ingenieur":"bilder/dialog/abnahme-begleiten-s.jpg","it":"bilder/dialog/hilfe-buero-s.jpg","kueche":"bilder/dialog/bestellung-kueche-s.jpg","lager":"bilder/beruf/lager.jpg","landwirtschaft":"bilder/dialog/hof-einweisung-s.jpg","medizin":"bilder/dialog/telefon-praxis-s.jpg","metall":"bilder/beruf/werkstatt.jpg","pflege":"bilder/thema/pflege-s.jpg","polizei":"bilder/dialog/polizei-fahrraddiebstahl-s.jpg","produktion":"bilder/beruf/produktion.jpg","rechte":"bilder/dialog/schichttausch-ablehnen-s.jpg","sozial":"bilder/dialog/beratungsstelle-s.jpg","verkaufen":"bilder/dialog/sofa-verkaufen-s.jpg","werkstatt":"bilder/dialog/fahrrad-reparatur-s.jpg","umgangssprache":"bilder/thema/umgangssprache-s.jpg","b2-team-klaeren":"bilder/dialog/c1-kollege-laestert-s.jpg","b2-amt-widerspruch":"bilder/dialog/widerspruch-krankenkasse-s.jpg","b2-wohnen-vertrag":"bilder/dialog/kaution-zurueckfordern-s.jpg","b2-medien-einordnen":"bilder/thema/medien-s.jpg","b2-arzt-befund":"bilder/dialog/ueberweisung-facharzt-s.jpg","b2-bank-geld":"bilder/dialog/c1-bank-mitverkauf-abwehren-s.jpg","b2-reise-stoerung":"bilder/dialog/c1-zug-faellt-aus-s.jpg","c1-verhandeln":"bilder/dialog/c1-catering-verhandeln-s.jpg","c1-debatte":"bilder/dialog/meeting-s.jpg","c1-zahlen-hoeren":"bilder/beruf/workshop.jpg","c1-zwischen-den-zeilen":"bilder/dialog/kompliment-annehmen-s.jpg","c1-vortrag-folgen":"bilder/beruf/workshop.jpg","c1-bewerbungsgespraech":"bilder/dialog/c1-stressinterview-deutsch-s.jpg","c1-telefonkonferenz":"bilder/dialog/meeting-s.jpg"}};
  function themaBild(sk, id) { try { return (FK_BILD[sk] || {})[id] || ''; } catch (e) { return ''; } }

  var offen = 'hoeren';
  try { offen = localStorage.getItem('dow_fert') || 'hoeren'; } catch (e) { }
  if (!RAEUME[offen]) offen = 'hoeren';

  function ubRaum(skill) {
    try { if (window.ubSetSkill) window.ubSetSkill(skill); } catch (e) { }
    gehe('ueben');
    setTimeout(function () { try { if (window.ubSetSkill) window.ubSetSkill(skill); } catch (e) { } }, 120);
  }
  window.ubRaum = ubRaum;

  /* ---------- Wie viel gibt es hier, und wie viel ist geschafft? ---------- */
  /* 19.10.2026: Hier stand nur level. Die Stufe aus dem Niveautest und
     die selbst angegebene stehen beide in profiles.stufe — level ist
     die alte Spalte und bei den meisten leer. */
  function meinNiveau() {
    try {
      return (window.profile && (window.profile.stufe || window.profile.level)) || '';
    } catch (e) { return ''; }
  }
  function themenVon(raum) {
    var out = [];
    try {
      var U = window.UEBUNGEN; if (!U || !U.skills) return out;
      (raum.ueben || []).forEach(function (sid) {
        var sk = U.skills.filter(function (s) { return s.id === sid; })[0];
        if (!sk) return;
        (sk.themes || []).forEach(function (t) { out.push({ sk: sid, t: t }); });
      });
    } catch (e) { }
    return out;
  }
  /* Wie weit ist ein Thema? Der Üben-Bereich merkt sich die beste Runde
     in Prozent — genau die Zahl zeigen wir hier wieder. */
  function ubStand() {
    try {
      if (window.lsGet) return lsGet('ub', null) || {};
      return JSON.parse(localStorage.getItem('ub_ub')) || {};
    } catch (e) { return {}; }
  }
  function geschafft(skId, thId) {
    try {
      var s = ubStand();
      return ((s.themes || {})[skId + '|' + thId] || {}).best || 0;
    } catch (e) { return 0; }
  }

  /* ---------- Der Raum ---------- */
  window.fertOeffnen = function (id) {
    if (!RAEUME[id]) return;
    offen = id;
    try { localStorage.setItem('dow_fert', id); } catch (e) { }
    gehe('fertigkeit');
    setTimeout(window.renderFertigkeit, 20);
  };

  window.renderFertigkeit = function () {
    var ziel = el('v-fertigkeit'); if (!ziel) return;
    var r = RAEUME[offen] || RAEUME.hoeren;
    var niv = meinNiveau();

    var reiter = '<div class="fe-reiter">' + Object.keys(RAEUME).map(function (k) {
      var x = RAEUME[k], on = k === offen;
      return '<button class="fe-r' + (on ? ' on' : '') + '"' + (on ? ' style="background:' + x.farbe + ';border-color:' + x.farbe + '"' : '') +
        ' onclick="fertOeffnen(\'' + k + '\')">' + x.em + ' ' + E(x.t) + '</button>';
    }).join('') + '</div>';

    var karten = '<div class="fe-karten">' + (r.karten || []).map(function (k, i) {
      return '<div class="fe-k"><div class="fe-kt">' + E(k.t) + '</div><div class="fe-ku">' + E(k.u) + '</div>' +
        '<button class="fe-kb" style="background:' + r.farbe + '" onclick="fertKarte(' + i + ')">' + E(k.k) + ' →</button></div>';
    }).join('') + '</div>';

    var liste = themenVon(r);
    var passend = liste.filter(function (x) { return !niv || !x.t.level || x.t.level === niv; });
    if (!passend.length) passend = liste;
    var themen = '';
    if (passend.length) {
      themen = '<h2 class="fe-h2">Themen zum Üben' + (niv ? ' <span class="fe-niv">' + E(niv) + '</span>' : '') + '</h2>' +
        '<div class="fe-themen">' + passend.map(function (x) {
          var ges = (x.t.exercises || []).length;
          var proz = geschafft(x.sk, x.t.id);
          var bild = themaBild(x.sk, x.t.id);
          return '<button class="fe-t' + (bild ? ' mitbild' : '') + '" onclick="ubRaum(\'' + x.sk + '\')">' +
            (bild ? '<span class="fe-tbild"><img src="' + bild + '" alt="" loading="lazy" onerror="this.parentNode.remove()"></span>'
                  : '<span class="fe-te">' + (x.t.emoji || '•') + '</span>') +
            '<span class="fe-tt">' + E(x.t.title || x.t.id) + '<i>' + ges + ' Aufgaben · ' + E(x.t.level || '') + '</i></span>' +
            '<span class="fe-tb"><i style="width:' + proz + '%;background:' + r.farbe + '"></i></span>' +
            '</button>';
        }).join('') + '</div>';
    }

    ziel.innerHTML =
      '<div class="pagehead"><h1>' + r.em + ' ' + E(r.t) + '</h1><p>' + E(r.satz) + '</p></div>' +
      reiter + karten + themen;

    /* Im Menü nur die eine Fertigkeit hervorheben, nicht alle sechs */
    try {
      document.querySelectorAll('.navlink[data-fert]').forEach(function (b) {
        b.classList.toggle('active', b.dataset.fert === offen);
      });
    } catch (e) { }
  };

  window.fertKarte = function (i) {
    var r = RAEUME[offen]; if (!r || !r.karten[i]) return;
    try { r.karten[i].a(); } catch (e) { }
  };

  /* ============================================================
     Der Stand-Streifen — vier Zahlen, immer sichtbar
     ============================================================ */
  function pfadStand() {
    try {
      if (!window.LERNPFAD || !LERNPFAD.stand) return null;
      var s = LERNPFAD.stand();
      if (!s) return null;
      return s;
    } catch (e) { return null; }
  }
  function faelligeWoerter() {
    try {
      if (typeof window.vokFaelligZahl === 'function') return window.vokFaelligZahl();
      if (window.VOKABEL_STAND && typeof VOKABEL_STAND.faellig === 'number') return VOKABEL_STAND.faellig;
    } catch (e) { }
    return null;
  }
  function naechsteStunde() {
    try {
      var s = window.stats;
      if (s && s.upcoming && s.upcoming.length) {
        var n = s.upcoming[0];
        var d = new Date(n.starts_at || n.start || n.zeit);
        var tage = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
        return { wann: tage[d.getDay()] + ' ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2), was: n.title || n.thema || n.topic || '' };
      }
    } catch (e) { }
    return null;
  }

  function streifenHtml() {
    var niv = meinNiveau();
    var p = pfadStand();
    var f = faelligeWoerter();
    var st = naechsteStunde();
    var serie = 0, punkte = 0;
    try { serie = (window.stats && stats.streak) || 0; punkte = (window.stats && stats.points) || 0; } catch (e) { }

    var felder = [];

    felder.push({
      ic: '🧭', k: 'Dein Lernplan',
      v: (niv || '—') + (p && p.gesamt ? ' · ' + p.fertig + ' von ' + p.gesamt : ''),
      d: p && p.gesamt ? 'Schritte geschafft' : 'Niveau',
      go: 'lernpfad'
    });
    felder.push({
      ic: '🔁', k: 'Wörter fällig',
      v: (f == null ? '—' : String(f)),
      d: f ? 'jetzt wiederholen' : 'alles aufgefrischt',
      go: 'vokabeln'
    });
    felder.push({
      ic: '🎥', k: 'Nächste Stunde',
      v: st ? st.wann : '—',
      d: st ? (st.was || 'Live-Unterricht') : 'nichts gebucht',
      go: st ? 'stunden' : 'kalender'
    });
    felder.push({
      ic: '🔥', k: 'Deine Serie',
      v: serie + (serie === 1 ? ' Tag' : ' Tage'),
      d: punkte ? punkte + ' Punkte' : 'heute anfangen',
      go: 'fortschritt'
    });

    return '<div class="stand-streifen">' + felder.map(function (x) {
      return '<button class="ss-f" onclick="go(\'' + x.go + '\')">' +
        '<span class="ss-ic">' + x.ic + '</span>' +
        '<span class="ss-t"><b>' + E(x.v) + '</b><i>' + E(x.k) + '</i><em>' + E(x.d) + '</em></span></button>';
    }).join('') + '</div>';
  }

  function streifenZeichnen() {
    try {
      var haupt = document.querySelector('main.main'); if (!haupt) return;
      var alt = el('standStreifen');
      var neu = document.createElement('div');
      neu.id = 'standStreifen';
      neu.innerHTML = streifenHtml();
      if (alt) haupt.replaceChild(neu, alt);
      else haupt.insertBefore(neu, haupt.firstChild);
    } catch (e) { }
  }
  window.standStreifenZeichnen = streifenZeichnen;

  /* Stil — bewusst zurückhaltend, damit er die Seite nicht erschlägt */
  var stil = document.createElement('style');
  stil.textContent = [
    '#standStreifen{margin:0 0 18px}',
    '.stand-streifen{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}',
    '.ss-f{display:flex;gap:10px;align-items:center;text-align:left;background:var(--card,#FFFDF8);border:1px solid var(--border,#E7ECEE);border-radius:14px;padding:11px 13px;cursor:pointer;transition:.15s;font:inherit}',
    '.ss-f:hover{border-color:#12A594;transform:translateY(-1px)}',
    '.ss-ic{font-size:19px;line-height:1}',
    '.ss-t{display:flex;flex-direction:column;min-width:0}',
    '.ss-t b{font-family:"Space Grotesk",inherit;font-size:16px;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.ss-t i{font-style:normal;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#8A8178;margin-top:2px}',
    '.ss-t em{font-style:normal;font-size:12px;color:#8A8178;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '@media(max-width:900px){.stand-streifen{grid-template-columns:repeat(2,1fr)}}',
    '.fe-reiter{display:flex;gap:8px;flex-wrap:wrap;margin:4px 0 18px}',
    '.fe-r{border:1.5px solid var(--border,#E7ECEE);background:#fff;border-radius:40px;padding:9px 16px;font-weight:700;font-size:14px;cursor:pointer;font-family:inherit;transition:.15s}',
    '.fe-r.on{color:#fff}',
    '.fe-karten{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px;margin-bottom:26px}',
    '.fe-k{background:var(--card,#FFFDF8);border:1px solid var(--border,#E7ECEE);border-radius:16px;padding:16px 18px;display:flex;flex-direction:column}',
    '.fe-kt{font-family:"Space Grotesk",inherit;font-weight:700;font-size:16px;margin-bottom:4px}',
    '.fe-ku{color:#8A8178;font-size:13.5px;line-height:1.45;flex:1;margin-bottom:12px}',
    '.fe-kb{border:0;color:#fff;border-radius:30px;padding:9px 15px;font-weight:700;font-size:13.5px;cursor:pointer;align-self:flex-start;font-family:inherit}',
    '.fe-h2{font-family:"Space Grotesk",inherit;font-size:19px;margin:0 0 12px}',
    '.fe-niv{font-size:12px;background:#F6F9FA;border-radius:20px;padding:2px 9px;vertical-align:middle;color:#6B6560}',
    '.fe-themen{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:10px}',
    '.fe-t{display:grid;grid-template-columns:28px 1fr;gap:10px;align-items:center;background:var(--card,#FFFDF8);border:1px solid var(--border,#E7ECEE);border-radius:14px;padding:12px 14px;cursor:pointer;text-align:left;font:inherit;transition:.15s}',
    '.fe-t:hover{border-color:#12A594}',
    '.fe-te{font-size:20px}',
    '.fe-tt{display:flex;flex-direction:column;font-weight:700;font-size:14.5px}',
    '.fe-tt i{font-style:normal;font-weight:400;font-size:12px;color:#8A8178;margin-top:2px}',
    '.fe-tb{grid-column:1/-1;height:5px;border-radius:20px;background:#F6F9FA;overflow:hidden}',
    '.fe-tb i{display:block;height:100%;border-radius:20px}',
    '.fe-t.mitbild{display:flex;flex-direction:column;align-items:stretch;gap:0;padding:0;overflow:hidden}',
    '.fe-tbild{display:block;aspect-ratio:16/9;overflow:hidden;background:#EEF2F6}',
    '.fe-tbild img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .3s}',
    '.fe-t.mitbild:hover .fe-tbild img{transform:scale(1.04)}',
    '.fe-t.mitbild .fe-tt{padding:11px 14px 8px}',
    '.fe-t.mitbild .fe-tb{margin:0 14px 12px}',
    '@media(max-width:520px){.fe-themen{grid-template-columns:1fr 1fr;gap:8px}.fe-t.mitbild .fe-tt{font-size:13.5px;padding:9px 10px 6px}.fe-t.mitbild .fe-tb{margin:0 10px 10px}.fe-t:not(.mitbild){grid-column:1/-1}}'
  ].join('');
  document.head.appendChild(stil);

  /* Bei jedem Seitenwechsel neu zeichnen */
  window.addEventListener('hashchange', function () { setTimeout(streifenZeichnen, 40); });
  if (document.readyState === 'complete') setTimeout(streifenZeichnen, 400);
  else window.addEventListener('load', function () { setTimeout(streifenZeichnen, 400); });
})();
