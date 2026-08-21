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
      t: 'Lesen', em: '📖', zei: 'lernen', farbe: '#DD0000',
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
  function meinNiveau() {
    try { return (window.profile && window.profile.level) || ''; } catch (e) { return ''; }
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
          return '<button class="fe-t" onclick="ubRaum(\'' + x.sk + '\')">' +
            '<span class="fe-te">' + (x.t.emoji || '•') + '</span>' +
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
      ic: '🧭', k: 'Dein Weg',
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
    '.ss-f{display:flex;gap:10px;align-items:center;text-align:left;background:var(--card,#FFFDF8);border:1px solid var(--border,#EAE3D8);border-radius:14px;padding:11px 13px;cursor:pointer;transition:.15s;font:inherit}',
    '.ss-f:hover{border-color:#12A594;transform:translateY(-1px)}',
    '.ss-ic{font-size:19px;line-height:1}',
    '.ss-t{display:flex;flex-direction:column;min-width:0}',
    '.ss-t b{font-family:"Space Grotesk",inherit;font-size:16px;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.ss-t i{font-style:normal;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#8A8178;margin-top:2px}',
    '.ss-t em{font-style:normal;font-size:12px;color:#8A8178;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '@media(max-width:900px){.stand-streifen{grid-template-columns:repeat(2,1fr)}}',
    '.fe-reiter{display:flex;gap:8px;flex-wrap:wrap;margin:4px 0 18px}',
    '.fe-r{border:1.5px solid var(--border,#EAE3D8);background:#fff;border-radius:40px;padding:9px 16px;font-weight:700;font-size:14px;cursor:pointer;font-family:inherit;transition:.15s}',
    '.fe-r.on{color:#fff}',
    '.fe-karten{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px;margin-bottom:26px}',
    '.fe-k{background:var(--card,#FFFDF8);border:1px solid var(--border,#EAE3D8);border-radius:16px;padding:16px 18px;display:flex;flex-direction:column}',
    '.fe-kt{font-family:"Space Grotesk",inherit;font-weight:700;font-size:16px;margin-bottom:4px}',
    '.fe-ku{color:#8A8178;font-size:13.5px;line-height:1.45;flex:1;margin-bottom:12px}',
    '.fe-kb{border:0;color:#fff;border-radius:30px;padding:9px 15px;font-weight:700;font-size:13.5px;cursor:pointer;align-self:flex-start;font-family:inherit}',
    '.fe-h2{font-family:"Space Grotesk",inherit;font-size:19px;margin:0 0 12px}',
    '.fe-niv{font-size:12px;background:#F1EADD;border-radius:20px;padding:2px 9px;vertical-align:middle;color:#6B6560}',
    '.fe-themen{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:10px}',
    '.fe-t{display:grid;grid-template-columns:28px 1fr;gap:10px;align-items:center;background:var(--card,#FFFDF8);border:1px solid var(--border,#EAE3D8);border-radius:14px;padding:12px 14px;cursor:pointer;text-align:left;font:inherit;transition:.15s}',
    '.fe-t:hover{border-color:#12A594}',
    '.fe-te{font-size:20px}',
    '.fe-tt{display:flex;flex-direction:column;font-weight:700;font-size:14.5px}',
    '.fe-tt i{font-style:normal;font-weight:400;font-size:12px;color:#8A8178;margin-top:2px}',
    '.fe-tb{grid-column:1/-1;height:5px;border-radius:20px;background:#EFE8DC;overflow:hidden}',
    '.fe-tb i{display:block;height:100%;border-radius:20px}'
  ].join('');
  document.head.appendChild(stil);

  /* Bei jedem Seitenwechsel neu zeichnen */
  window.addEventListener('hashchange', function () { setTimeout(streifenZeichnen, 40); });
  if (document.readyState === 'complete') setTimeout(streifenZeichnen, 400);
  else window.addEventListener('load', function () { setTimeout(streifenZeichnen, 400); });
})();
