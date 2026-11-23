/* ============================================================
   tarif.js — der Umschalter zwischen Monat und halbem Jahr

   Julia, 21.11.2026: "wir brauchen noch ein 6 Monatsabo (50 % Rabatt)
   30% rabatt auf den Monatspreis und 50 % auf den Halbjahrespreis.
   Als Umschaltbutton hinzufuegen aber erst den Monatspreis."

   Also steht der Monat vorne und ist beim Laden gewaehlt; das halbe
   Jahr liegt daneben und wartet.

   WARUM EINE DATEI FUER ALLE SEITEN: Die Preiskarte sieht auf jeder
   der vier Seiten anders aus - mal <div class="preis">, mal
   <div class="pzahl">, mal die Endkarte. Haette ich den Umschalter in
   jede Seite einzeln gebaut, gaebe es vier Stellen, an denen ein Preis
   stehen kann, der nicht mehr stimmt. Hier sucht er sich die
   Preisfelder selbst zusammen, die es auf der jeweiligen Seite gibt,
   und laesst den Rest in Ruhe.

   UND DIE KASSE: Statt auf jeder Seite jeden Kaufknopf anzufassen,
   legen wir uns einmal um buyPass(). Wer 'premium_month' verlangt,
   waehrend oben das halbe Jahr gewaehlt ist, bekommt 'premium_6m'.
   Was etwas kostet, entscheidet ohnehin der Server: api/_tueren.js
   und api/create-checkout.js kennen beide Preise, der Browser nennt
   nur den Plan.

   NUR WAEHREND DER AKTION: Ausserhalb der Black Week gibt es auf das
   halbe Jahr keinen Rabatt - 6 x 139 sind dieselben 834 Euro. Ein
   Umschalter, der zwei Mal denselben Preis zeigt, ist kein Angebot,
   sondern ein Klick ins Leere. Darum erscheint er nur, solange die
   Aktion laeuft.
   ============================================================ */
(function () {
  'use strict';
  if (window.TARIFSCHALTER) return;
  window.TARIFSCHALTER = true;

  var A = window.AKTION;
  if (!A || !A.laeuft()) return;

  /* Die Zahlen stehen hier nur, um sie zu ZEIGEN. Gerechnet wird auf
     dem Server. Aendert Julia den Preis, aendert sie ihn in
     api/_tueren.js - und dann auch hier. */
  var MONAT = { id: 'premium_month', preis: A.preis, alt: A.alt };
  var HALB  = { id: 'premium_6m',    preis: 399,     alt: 834, monate: 6 };

  HALB.proMonat = Math.round((HALB.preis / HALB.monate) * 100) / 100;   // 66,5
  HALB.prozent  = Math.floor((1 - HALB.preis / HALB.alt) * 100);        // 52

  var T = { gewaehlt: MONAT };
  window.TARIF = T;

  function euro(n) {
    return (Math.round(n * 100) % 100 === 0)
      ? n.toFixed(0).replace('.', ',') + ' €'
      : n.toFixed(2).replace('.', ',') + ' €';
  }
  function $(id) { return document.getElementById(id); }
  function setz(el, text) {
    if (!el) return;
    var k = el.firstChild;
    if (k && k.nodeType === 3) k.nodeValue = text; else el.textContent = text;
  }

  /* ---------- Die Preisfelder dieser Seite ---------- */
  function preiseSchreiben() {
    var t = T.gewaehlt, halb = (t === HALB);
    var p = euro(t.preis), alt = euro(t.alt);
    var takt = halb ? 'für 6 Monate' : 'im Monat';

    /* preise.html, sprechclub.html, club.html */
    setz($('pZahl'), p);
    /* Den Streichpreis setzen wir immer, nicht nur wenn schon einer
       dasteht: club.html fuellt ihn erst spaet selbst, und dann stand
       beim halben Jahr gar kein Vorher-Preis daneben. Ob er gezeigt
       wird, entscheidet weiter die Seite. */
    var pAlt = $('pAlt'); if (pAlt) pAlt.textContent = alt;
    setz($('pTakt'), halb ? '/ 6 Monate' : '/ Monat');
    var je = document.querySelector('#pZahl + .je');
    if (je) je.textContent = takt;

    /* index.html, Mitgliedschaftskarte */
    setz($('ekNeu'), p);
    var ekAlt = $('ekAlt'); if (ekAlt) { ekAlt.textContent = alt; ekAlt.style.display = ''; }
    var ekTakt = document.querySelector('.ek-zahl i');
    if (ekTakt) { ekTakt.removeAttribute('data-i18n'); ekTakt.textContent = takt; }
    var abr = document.querySelector('.ek-abr');
    if (abr) abr.textContent = halb
      ? 'eine Zahlung für 6 Monate · ' + euro(HALB.proMonat) + ' im Monat'
      : 'monatlich kündbar';

    /* Der Rabatt in Prozent steht auf drei Seiten als eigenes
       Abzeichen. Beim halben Jahr sind es 52 und nicht 30 - stehen
       bleiben duerfen die 30 dort auf keinen Fall, das waere ein
       Preisversprechen, das nicht zum Preis daneben passt. */
    var proz = halb ? HALB.prozent : A.prozent;
    setz($('pSpar'), '\u2212' + proz + ' %');
    var fahne = $('pFahne');
    if (fahne) fahne.textContent = A.name + ' \u00b7 \u2212' + proz + ' %';
    setz($('pHinweis'), halb
      ? 'eine Zahlung f\u00fcr 6 Monate \u00b7 ' + euro(HALB.proMonat) + ' im Monat'
      : 'monatlich k\u00fcndbar');

    /* Das Preise-Fenster auf der Startseite (#preiseWin). Das ist die
       Stelle, an der tatsaechlich gekauft wird - "Preise", "Mitglied
       werden" und "Alle Tarife ansehen" fuehren alle dorthin. */
    setz($('preisP'), p);
    var altWrapP = $('altWrapP');
    if (altWrapP) altWrapP.style.display = '';
    var altP = $('altP'); if (altP) altP.textContent = alt;
    setz($('sparP'), '−' + proz + ' %');
    setz($('totalP'), halb
      ? 'eine Zahlung für 6 Monate · ' + euro(HALB.proMonat) + ' im Monat'
      : 'monatlich kündbar');
    var einheit = document.querySelector('#preisP + .np-unit');
    if (einheit) einheit.textContent = halb ? '/ 6 Monate' : '/ Monat';

    /* Die Klebeleiste unten und das Etikett im Hero */
    setz($('raPreis'), p);
    setz($('kbxText'), halb
      ? HALB.prozent + ' % Rabatt · ' + p + ' statt ' + alt + ' für 6 Monate'
      : A.prozent + ' % Rabatt · ' + p + ' statt ' + alt + ' im Monat');
    var kn = $('kbxKnopf');
    if (kn) kn.textContent = 'Für ' + p + ' dabei sein';
  }

  /* ---------- Der Umschalter ---------- */
  var CSS = ''
    + '.tf-schalter{display:inline-flex;gap:4px;padding:4px;border-radius:999px;margin:0 auto 14px;'
    + 'background:rgba(127,127,127,.16);border:1px solid rgba(127,127,127,.22);'
    + 'font-family:Inter,-apple-system,"Segoe UI",sans-serif}'
    + '.tf-schalter button{appearance:none;border:0;background:none;cursor:pointer;font:inherit;'
    + 'font-size:14px;font-weight:700;color:inherit;opacity:.88;padding:9px 16px;border-radius:999px;'
    + 'white-space:nowrap;transition:background .18s ease,opacity .18s ease}'
    + '.tf-schalter button:hover{opacity:1}'
    + '.tf-schalter button[aria-pressed="true"]{background:#2DD4BF;color:#06403A;opacity:1;'
    + 'box-shadow:0 2px 8px rgba(20,184,166,.35)}'
    + '.tf-schalter .tf-spar{display:inline-block;margin-left:7px;background:#FFCE00;color:#1A1A1A;'
    + 'font-size:10.5px;font-weight:800;letter-spacing:.03em;padding:2px 6px;border-radius:999px;vertical-align:1px}'
    + '.tf-zeile{display:flex;justify-content:center;width:100%}'
    + '@media(max-width:380px){.tf-schalter button{padding:8px 11px;font-size:13px}'
    + '.tf-schalter .tf-spar{display:none}}';

  function stil() {
    if ($('tf-stil')) return;
    var s = document.createElement('style');
    s.id = 'tf-stil';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* Ueber welchen Preisbloecken steht er? Ueber ALLEN, die es auf
     dieser Seite gibt - frueher nur ueber dem ersten. Auf der
     Startseite ist der erste die Mitgliedschaftskarte ganz unten;
     gekauft wird aber im Preise-Fenster weiter oben, und dort stand
     am 23.11.2026 nur der Monatspreis. Julia: "du hast den
     Halbjahresbutton vergessen" - sie hatte ins Fenster gesehen. */
  function ankerListe() {
    var a = [];
    var ek = document.querySelector('.ek-zahl');
    if (ek) a.push(ek);
    var pp = document.getElementById('preisP');          // Preise-Fenster, Sprechclub-Karte
    if (pp) a.push((pp.closest && pp.closest('.np-kr')) || pp.parentNode);
    var pz = document.getElementById('pZahl');           // preise.html, club.html, sprechclub.html
    if (pz) a.push((pz.closest && pz.closest('.preis,.pzahl,.pcard,.karte')) || pz);
    return a.filter(function (e, i) { return e && a.indexOf(e) === i; });
  }

  function schalterBauen() {
    var anker = ankerListe();
    if (!anker.length) return;   // Seite ohne Preiskarte
    stil();

    anker.forEach(function (ziel) {
      if (!ziel.parentNode || ziel.dataset.tfDa) return;
      ziel.dataset.tfDa = '1';

      var zeile = document.createElement('div');
      zeile.className = 'tf-zeile';
      zeile.innerHTML = '<div class="tf-schalter" role="group" aria-label="Zahlweise wählen">'
        + '<button type="button" data-tf="monat" aria-pressed="true">Monatlich</button>'
        + '<button type="button" data-tf="halb" aria-pressed="false">6 Monate'
        + '<span class="tf-spar">−' + HALB.prozent + ' %</span></button>'
        + '</div>';
      ziel.parentNode.insertBefore(zeile, ziel);

      zeile.addEventListener('click', function (e) {
        var k = e.target.closest('button[data-tf]');
        if (!k) return;
        waehlen(k.dataset.tf === 'halb' ? HALB : MONAT);
      });
    });
  }

  function waehlen(t) {
    T.gewaehlt = t;
    document.querySelectorAll('.tf-schalter button[data-tf]').forEach(function (k) {
      k.setAttribute('aria-pressed', String((k.dataset.tf === 'halb') === (t === HALB)));
    });
    preiseSchreiben();
  }

  /* ---------- Die Kasse ---------- */
  function kasseUmlegen() {
    if (typeof window.buyPass !== 'function' || window.buyPass.tfUmgelegt) return;
    var echt = window.buyPass;
    var neu = function (id) {
      if (id === 'premium_month' && T.gewaehlt !== MONAT) {
        arguments[0] = T.gewaehlt.id;
      }
      return echt.apply(this, arguments);
    };
    neu.tfUmgelegt = true;
    window.buyPass = neu;
  }

  function start() {
    schalterBauen();
    kasseUmlegen();
    /* Die Seiten zeichnen ihre Preise selbst, teils erst spaet - und
       aktion.js setzt sie danach noch einmal. Wir kommen als Letzte. */
    setTimeout(function () { kasseUmlegen(); schalterBauen(); if (T.gewaehlt !== MONAT) preiseSchreiben(); }, 600);
    setTimeout(function () { schalterBauen(); if (T.gewaehlt !== MONAT) preiseSchreiben(); }, 1800);
    /* Manche Preiskarten entstehen erst beim Oeffnen des Fensters.
       Darum nach jedem Klick kurz nachsehen, ob ein Preisblock
       dazugekommen ist, der noch keinen Umschalter hat. */
    document.addEventListener('click', function () {
      setTimeout(function () {
        schalterBauen();
        if (T.gewaehlt !== MONAT) preiseSchreiben();
      }, 120);
    }, true);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
