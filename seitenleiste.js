/* ============================================================
   seitenleiste.js — aus achtzehn Links werden fuenf Ziele

   Die Datei baut KEINE neuen Knoepfe: sie nimmt die vorhandenen
   .navlink-Elemente aus konto.html und sortiert sie um. Dadurch
   bleiben alle onclick, alle data-view, alle Uebersetzungen und
   die Zaehler (Community) genau so, wie sie sind.

   Neu angelegt werden nur zwei Punkte, die es in der Leiste noch
   gar nicht gab: der Lernbereich und Amanda.

   Einbinden ganz unten in konto.html:
     <link rel="stylesheet" href="seitenleiste.css?v=1">
     <script src="seitenleiste.js?v=1" defer></script>

   Nimmt man die zwei Zeilen heraus, ist die Leiste wie vorher.
   ============================================================ */
(function () {
  'use strict';
  if (window.__seitenleiste) return;
  window.__seitenleiste = true;

  /* Fuenf Ziele. Was ein Schueler taeglich braucht, steht oben;
     alles andere klappt erst auf, wenn er dort ist. */
  var PLAN = [
    { view: 'dashboard' },
    { view: 'lernen', text: 'Lernen', zeichen: 'lernen', kinder: [
        { view: 'lernpfad' },
        { titel: 'Fertigkeiten' },
        { fert: 'hoeren' }, { fert: 'lesen' },
        { fert: 'schreiben' }, { fert: 'sprechen' },
        { fert: 'wortschatz' }, { fert: 'grammatik' }
      ], paare: true },
    { view: 'kalender', kinder: [ { view: 'stunden' }, { view: 'community' } ] },
    { view: 'fortschritt', kinder: [ { view: 'pruefung' }, { view: 'materialien' } ] },
    { view: 'amanda', text: 'Amanda fragen', zeichen: 'amanda' }
  ];
  var FUSS = ['nachrichten', 'guthaben', 'profil'];

  function q(w) { return document.querySelector(w); }
  function leiste() { return q('.sidebar'); }

  function finde(e) {
    if (e.fert) return q('.sidebar .navlink[data-fert="' + e.fert + '"]');
    return q('.sidebar .navlink[data-view="' + e.view + '"]');
  }

  /* Fehlt ein Punkt in der Leiste, legen wir ihn nach demselben
     Muster an wie die anderen — mit data-view, damit show() ihn
     genauso markiert. */
  function baue(e) {
    var b = document.createElement('button');
    b.className = 'navlink';
    b.dataset.view = e.view;
    b.onclick = function () { if (window.go) window.go(e.view); };
    var ic = document.createElement('span');
    ic.className = 'ic';
    if (e.zeichen) ic.dataset.zeichen = e.zeichen;
    var t = document.createElement('span');
    t.textContent = e.text || e.view;
    b.appendChild(ic); b.appendChild(t);
    return b;
  }

  function knopf(e) {
    var b = finde(e);
    if (!b && e.view) b = baue(e);
    if (b && e.text) {
      /* Nur umbenennen, wenn kein Uebersetzungsschluessel dranhaengt —
         sonst wuerde der Sprachwechsel den Namen wieder ueberschreiben. */
      var s = b.querySelector('span:not(.ic):not(.badge)');
      if (s && !s.getAttribute('data-i18n')) s.textContent = e.text;
    }
    return b;
  }

  function umbauen() {
    var rail = leiste();
    if (!rail || rail.dataset.neu === '1') return;
    var marke = rail.querySelector('.brand');
    var fuss = rail.querySelector('.side-foot');
    if (!marke || !fuss) return;
    rail.dataset.neu = '1';

    var neu = document.createDocumentFragment();

    PLAN.forEach(function (e) {
      var oben = knopf(e);
      if (!oben) return;

      if (!e.kinder || !e.kinder.length) { neu.appendChild(oben); return; }

      var g = document.createElement('div');
      g.className = 'sl-gruppe';
      var kopf = document.createElement('div');
      kopf.className = 'sl-kopf';
      kopf.appendChild(oben);

      var pfeil = document.createElement('button');
      pfeil.type = 'button';
      pfeil.className = 'sl-pfeil';
      pfeil.setAttribute('aria-label', 'Unterpunkte zeigen');
      pfeil.textContent = '▶';
      pfeil.onclick = function (ev) {
        ev.stopPropagation();
        g.classList.toggle('auf');
        g.dataset.handisch = g.classList.contains('auf') ? 'auf' : 'zu';
      };
      kopf.appendChild(pfeil);
      g.appendChild(kopf);

      var kinder = document.createElement('div');
      kinder.className = 'sl-kinder' + (e.paare ? ' sl-paare' : '');
      e.kinder.forEach(function (k) {
        if (k.titel) {
          var t = document.createElement('span');
          t.className = 'sl-titel';
          t.textContent = k.titel;
          kinder.appendChild(t);
          return;
        }
        var b = knopf(k);
        if (b) kinder.appendChild(b);
      });
      g.appendChild(kinder);
      neu.appendChild(g);
    });

    /* Unten in der Leiste: Amanda und die eine Handlung, die zaehlt.
       Oben bleibt der Weg, unten steht die Begleitung. */
    var unten = document.createElement('div');
    unten.className = 'sl-unten';
    unten.appendChild(amandaStreifen());

    var buchen = rail.querySelector('.navlink[href="#"]');
    var b2 = document.createElement('a');
    b2.className = 'sl-buchen';
    b2.href = '#';
    b2.innerHTML = '<span>➕</span><span data-i18n="k_book1">Stunde buchen</span>';
    b2.onclick = function (ev) { return window.bucheStunde ? window.bucheStunde(ev) : true; };
    unten.appendChild(b2);
    if (buchen && buchen.parentNode) buchen.parentNode.removeChild(buchen);
    neu.appendChild(unten);

    /* Fuss neu sortieren */
    FUSS.slice().reverse().forEach(function (v) {
      var b = q('.sidebar .navlink[data-view="' + v + '"]');
      if (b) fuss.insertBefore(b, fuss.firstChild);
    });
    /* Abmelden ganz nach unten */
    var ab = null;
    [].forEach.call(fuss.querySelectorAll('.navlink'), function (b) {
      if (!b.dataset.view && /abmelden|logout|log out|salir|выход/i.test(b.textContent)) ab = b;
    });
    if (ab) fuss.appendChild(ab);

    rail.insertBefore(neu, fuss);
    aufklappen();
  }

  /* ---------- Amanda in der Leiste ---------- */
  var SPRUCH = [
    ['Frag mich was', 'Ich bin da — auf Deutsch, so einfach du willst.'],
    ['Kurz sprechen?', 'Zwei Minuten reichen. Ich fange an.'],
    ['Hallo!', 'Erzaehl mir, was du heute gemacht hast.']
  ];
  function amandaStreifen() {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'sl-amanda';
    b.onclick = function () { if (window.go) window.go('amanda'); };

    var img = document.createElement('img');
    img.src = (window.AmandaBild ? window.AmandaBild('willkommen') : 'amanda/a-willkommen.webp');
    img.alt = '';
    img.loading = 'lazy';
    img.onerror = function () { img.remove(); };

    var tx = document.createElement('div');
    tx.className = 'tx';
    var s = SPRUCH[0];
    /* Wenn Vokabeln anstehen, sagt sie lieber das — eine Zahl ist
       mehr wert als ein netter Satz. */
    try {
      var v = window.vokabelStand && window.vokabelStand();
      if (v && v.faellig) s = ['Heute ' + v.faellig + ' Woerter', 'Zehn Minuten, dann ist die Woche voll.'];
    } catch (e) {}
    tx.innerHTML = '<b></b><span></span>';
    tx.querySelector('b').textContent = s[0];
    tx.querySelector('span').textContent = s[1];

    b.appendChild(img); b.appendChild(tx);
    return b;
  }

  /* ---------- Die aktive Gruppe steht offen ---------- */
  function aufklappen() {
    [].forEach.call(document.querySelectorAll('.sl-gruppe'), function (g) {
      if (g.dataset.handisch === 'auf') { g.classList.add('auf'); return; }
      if (g.dataset.handisch === 'zu') { g.classList.remove('auf'); return; }
      g.classList.toggle('auf', !!g.querySelector('.navlink.active'));
    });
  }

  function start() {
    umbauen();
    window.addEventListener('hashchange', function () {
      /* show() markiert erst, danach klappen wir auf. */
      setTimeout(aufklappen, 0);
    });
    if (window.MutationObserver) {
      var rail = leiste();
      if (rail) {
        var wartet = false;
        new MutationObserver(function () {
          if (wartet) return;
          wartet = true;
          setTimeout(function () { wartet = false; aufklappen(); }, 60);
        }).observe(rail, { attributes: true, attributeFilter: ['class'], subtree: true });
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
