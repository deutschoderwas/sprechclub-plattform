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
  /* Was ein Schueler sofort finden muss — mehr steht nicht oben.
     Alles andere klappt erst auf, wenn er dort ist. */
  var PLAN = [
    { view: 'dashboard', text: 'Mein Bereich', zeichen: 'start', kinder: [
        { view: 'stunden' },
        { view: 'fortschritt' },
        /* „Mein Lernplan" stand hier als dritter Weg neben Kursbibliothek
           und Lernbereich und beantwortete dieselbe Frage. Der Weg ist
           jetzt die Kursbibliothek; die Ansicht bleibt über #lernpfad
           erreichbar, aber sie steht nicht mehr als eigenes Ziel im
           Menü. */
        { view: 'guthaben' }
      ] },
    /* Der Community-Chat war ein Unterpunkt von LIVE-Unterricht und damit
       hinter einem zugeklappten Pfeil versteckt. Er ist ein eigenes Ziel
       und steht jetzt als eigener Punkt direkt unter "Mein Bereich". */
    { view: 'community', text: 'Community-Chat', zeichen: 'community' },
    { view: 'kalender', text: 'LIVE-Unterricht', zeichen: 'kalender', kinder: [
        { view: 'materialien' }
      ] },
    /* Dieselben drei Tueren wie auf der Startseite des Lernbereichs
       und in der App — damit das Menue nicht eine vierte Ordnung
       daneben aufmacht. */
    { view: 'ueben', text: 'Lernbereich', i18n: 'sl_lernbereich', zeichen: 'ueben', kinder: [
        { view: 'pruefung', text: 'Für die Prüfung' },
        { view: 'bereiche', text: 'Für die Freizeit', i18n: 'sl_tuer_frei', zeichen: 'lernen', tuer: 'freizeit' },
        { view: 'bereiche', text: 'Für den Beruf', i18n: 'sl_tuer_beruf', zeichen: 'lernen', tuer: 'beruf' },
        { titel: 'Werkzeuge' },
        { view: 'kurse', text: 'Kursbibliothek', zeichen: 'material' },
        { fert: 'hoeren' }, { fert: 'lesen' },
        { fert: 'schreiben' }, { fert: 'sprechen' },
        { fert: 'wortschatz' }, { fert: 'grammatik' }
      ] },
    { view: 'vokabeln', text: 'Vokabeltrainer', zeichen: 'vokabeln' },
    { view: 'podcast', text: 'Podcast', zeichen: 'podcast' }
    /* Amanda steht NICHT hier: sie hat unten ihr eigenes Feld mit
       Bild. Beide fuehrten an dieselbe Stelle — zweimal dasselbe
       Ziel in einer Leiste ist einmal zu viel. */
  ];
  /* Nachrichten steht nicht mehr in der Leiste: wer Julia etwas sagen
   will, schreibt in der Community oder fragt Amanda — sie weiss
   alles. Die Ansicht selbst bleibt erreichbar, damit alte Links
   und die Hausaufgaben-Bestaetigung weiter funktionieren. */
var FUSS = ['profil'];

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
    if (e.tuer) b.dataset.tuer = e.tuer;
    b.onclick = e.tuer
      ? function () { if (window.lernTuer) return window.lernTuer(e.tuer); if (window.go) window.go(e.view); }
      : function () { if (window.go) window.go(e.view); };
    var ic = document.createElement('span');
    ic.className = 'ic';
    if (e.zeichen) ic.dataset.zeichen = e.zeichen;
    var t = document.createElement('span');
    /* Mit Schluessel kann die Uebersetzung den Text spaeter tauschen;
       ohne stuende er fuer alle Sprachen auf Deutsch da. */
    if (e.i18n) t.setAttribute('data-i18n', e.i18n);
    t.textContent = e.text || e.view;
    b.appendChild(ic); b.appendChild(t);
    return b;
  }

  function knopf(e) {
    /* Zwei Tueren zeigen auf dieselbe Ansicht (Freizeit und Beruf).
       Ein vorhandener Knopf wuerde dann doppelt vergeben — also
       bekommen Tueren immer einen eigenen. */
    var b = e.tuer ? null : finde(e);
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

    /* Nachrichten ganz aus der Leiste nehmen. Nicht nur aus der
       Sortierung — sonst bleibt der Knopf stehen, wo er gerade ist,
       und rutscht nach ganz oben. Die Ansicht selbst bleibt ueber
       #nachrichten erreichbar. */
    var nr = q('.sidebar .navlink[data-view="nachrichten"]');
    if (nr && nr.parentNode) nr.parentNode.removeChild(nr);

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
    /* Weil Amanda keinen Menuepunkt mehr hat, muss dieses Feld
       zeigen, dass man gerade bei ihr ist. */
    function markieren(){
      var a = (location.hash || '').slice(1) === 'amanda';
      b.classList.toggle('an', a);
    }
    window.addEventListener('hashchange', markieren);
    setTimeout(markieren, 0);

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

  /* Der Stand-Streifen gehoert nur auf die Startseite. Fuer Browser
     ohne :has() setzen wir hier zusaetzlich eine Klasse an den Body. */
  function heuteMarkieren() {
    var v = (location.hash || '#dashboard').slice(1);
    document.body.classList.toggle('auf-heute', v === 'dashboard' || v === '');
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
    heuteMarkieren();
    window.addEventListener('hashchange', function () {
      heuteMarkieren();
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
