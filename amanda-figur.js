/* ============================================================
   amanda-figur.js — Amanda bekommt ein Gesicht

   Einbinden ganz unten in konto.html:
     <link rel="stylesheet" href="amanda-figur.css?v=1">
     <script src="amanda-figur.js?v=1" defer></script>

   Was die Datei tut — und sonst nichts:
     1. Startseite: das Begruessungsband bekommt Amanda daneben.
     2. Hilfe-Chat: aus der Sprechblase unten rechts wird Amanda.
     3. Amanda-Ansicht: das Foto wird zur Zeichnung.
     4. window.AmandaSagt(text, pose) — Lob, das kurz auftaucht.

   Alles ist abgesichert: faellt ein Teil aus, laeuft der Rest weiter
   und der Schuelerbereich sieht aus wie vorher.
   ============================================================ */
(function () {
  'use strict';
  if (window.__amandaFigur) return;
  window.__amandaFigur = true;

  var ORDNER = 'amanda/';
  var BILD = {
    ganz: 'amanda-ganz.webp',
    hallo: 'amanda-hallo.webp',
    jubel: 'amanda-jubel.webp',
    denk: 'amanda-denk.webp',
    ups: 'amanda-ups.webp',
    schlau: 'amanda-schlau.webp',
    super: 'amanda-super.webp',
    willkommen: 'a-willkommen.webp',
    zeigen: 'a-zeigen.webp',
    lesen: 'a-lesen.webp',
    kaffee: 'a-kaffee.webp',
    reise: 'a-reise.webp',
    hoeren: 'a-hoeren.webp',
    klatschen: 'a-klatschen.webp',
    stift: 'a-stift.webp',
    schulter: 'a-schulter.webp',
    uhr: 'a-uhr.webp',
    warten: 'a-warten.webp',
    pokal: 'a-pokal.webp'
  };
  function pfad(pose) { return ORDNER + (BILD[pose] || BILD.hallo); }
  window.AmandaBild = pfad;

  function bild(pose, klasse, alt) {
    var i = document.createElement('img');
    i.src = pfad(pose);
    i.alt = alt || '';
    if (klasse) i.className = klasse;
    i.loading = 'lazy';
    i.onerror = function () { i.remove(); };
    return i;
  }

  /* ---------- 1. Begruessungsband auf der Startseite ---------- */
  function band() {
    var gruss = document.querySelector('#v-dashboard .st-gruss');
    if (!gruss || gruss.closest('.am-band')) return;
    var band = document.createElement('div');
    band.className = 'am-band';
    var tx = document.createElement('div');
    tx.className = 'am-tx';
    gruss.parentNode.insertBefore(band, gruss);
    tx.appendChild(gruss);
    var h1 = gruss.querySelector('h1');
    if (h1) h1.innerHTML = h1.innerHTML.replace(/\s*\uD83D\uDC4B/g, '');
    band.appendChild(bild('willkommen', 'am-fig', 'Amanda winkt'));
    band.appendChild(tx);
  }

  /* ---------- 2. Der Hilfe-Chat wird Amanda ---------- */
  var chatFertig = false;
  function chat() {
    if (chatFertig) return;
    var knopf = document.querySelector('.hc-btn');
    var kopf = document.querySelector('.hc-box .hc-kopf');
    if (!knopf || !kopf) return;
    chatFertig = true;

    /* Knopf: Amandas Gesicht statt der Sprechblase */
    knopf.classList.add('am-knopf');
    knopf.setAttribute('aria-label', 'Amanda fragen');
    knopf.innerHTML = '';
    knopf.appendChild(bild('hallo', null, ''));
    /* Der Hilfe-Chat schreibt bei jedem Klick sein eigenes Zeichen in den
       Knopf. Wir malen danach wieder Amanda hinein. */
    knopf.addEventListener('click', function () {
      setTimeout(function () {
        var box = document.querySelector('.hc-box');
        var offen = box && box.classList.contains('auf');
        knopf.classList.toggle('am-zu', !!offen);
        if (!knopf.querySelector('img')) {
          knopf.innerHTML = '';
          knopf.appendChild(bild('hallo', null, ''));
        }
      }, 0);
    });

    /* Kopfzeile: Bild, Name, Zustand */
    kopf.classList.add('am-kopf');
    var zu = kopf.querySelector('.hc-zu');
    kopf.innerHTML = '';
    kopf.appendChild(bild('hallo', null, ''));
    var t = document.createElement('div');
    t.innerHTML = '<b>Amanda</b><span class="am-live"><i></i> ist da &middot; antwortet sofort</span>';
    kopf.appendChild(t);
    if (zu) kopf.appendChild(zu);

    /* Amandas kleines Bild neben ihren Antworten */
    var lauf = document.getElementById('hcLauf');
    if (lauf && window.MutationObserver) {
      var kopfbild = 'url("' + pfad('hallo') + '")';
      document.documentElement.style.setProperty('--am-kopfbild', kopfbild);
      new MutationObserver(function (aend) {
        aend.forEach(function (a) {
          [].forEach.call(a.addedNodes || [], function (n) {
            if (n.nodeType === 1 && n.classList.contains('bot')) n.classList.add('am-mit');
          });
        });
      }).observe(lauf, { childList: true });
      [].forEach.call(lauf.querySelectorAll('.hc-m.bot'), function (n) { n.classList.add('am-mit'); });
    }
  }

  /* ---------- 3. Amanda-Ansicht: Zeichnung statt Foto ---------- */
  function ansicht() {
    var v = document.getElementById('v-amanda');
    if (!v) return;
    [].forEach.call(v.querySelectorAll('img[src="amanda.png"]'), function (i) {
      i.src = pfad('ganz');
      i.style.objectFit = 'contain';
      i.style.objectPosition = 'center bottom';
      i.style.background = 'none';
      i.style.borderRadius = '0';
    });
  }

  /* ---------- 4. Amanda sagt etwas ---------- */
  var lobAuf = null;
  window.AmandaSagt = function (text, pose, dauer) {
    try {
      if (lobAuf) { lobAuf.remove(); lobAuf = null; }
      var k = document.createElement('div');
      k.className = 'am-lob';
      k.setAttribute('role', 'status');
      k.appendChild(bild(pose || 'jubel', null, 'Amanda'));
      var b = document.createElement('div');
      b.className = 'blase';
      b.textContent = text;
      k.appendChild(b);
      document.body.appendChild(k);
      lobAuf = k;
      setTimeout(function () {
        if (!k.parentNode) return;
        k.classList.add('am-weg');
        setTimeout(function () { if (k.parentNode) k.remove(); if (lobAuf === k) lobAuf = null; }, 320);
      }, dauer || 4200);
    } catch (e) { /* Lob ist Beiwerk — nie ein Grund fuer einen Fehler */ }
  };

  var LOB = [
    'Genau so. Das war kein Zufall.',
    'Richtig — und du hast nicht geraten, das habe ich gesehen.',
    'Sitzt. Weiter im Text.',
    'Sehr gut. Genau dieser Satz kommt im echten Leben vor.'
  ];
  var TROST = [
    'Fast. Schau nochmal aufs Verb.',
    'Kein Problem — genau dafuer ueben wir.',
    'Nicht schlimm. Lies den Satz einmal laut, dann faellt es dir auf.'
  ];
  window.AmandaLob = function (richtig) {
    var l = richtig ? LOB : TROST;
    window.AmandaSagt(l[Math.floor(Math.random() * l.length)], richtig ? 'jubel' : 'denk');
  };

  /* ---------- Anstossen, auch nach jedem Neuzeichnen ---------- */
  function alles() {
    try { band(); } catch (e) {}
    try { chat(); } catch (e) {}
    try { ansicht(); } catch (e) {}
  }

  function start() {
    alles();
    var haupt = document.querySelector('.main') || document.body;
    if (window.MutationObserver) {
      var wartet = false;
      new MutationObserver(function () {
        if (wartet) return;
        wartet = true;
        setTimeout(function () { wartet = false; alles(); }, 80);
      }).observe(haupt, { childList: true, subtree: true });
    }
    /* Der Hilfe-Chat kommt mit defer und baut sich erst spaeter auf. */
    var versuche = 0;
    var t = setInterval(function () {
      chat();
      if (chatFertig || ++versuche > 40) clearInterval(t);
    }, 250);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
