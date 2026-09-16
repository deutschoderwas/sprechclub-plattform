/* ============================================================
   hubs.js — die drei Sammelseiten hinter den neuen Reitern

   Vorher: 17 Punkte in der Seitenleiste, fuenf ganz andere in der
   Reiterleiste am Handy, nochmal fuenf in der App. Wer am Rechner
   etwas gefunden hatte, fand es am Handy nicht wieder.

   Jetzt fuehren fuenf Reiter ueberall zum selben:
     Start · Lernen · Sprechen · Community · Medien

   Hinter Lernen, Sprechen und Medien liegt je eine Sammelseite,
   die zeigt, was es dort gibt — im Stil der App: heller Grund,
   weisse Karten, Tuerkis fuer das, was als Naechstes dran ist.

   Nichts ist geloescht. Jede alte Ansicht bleibt ueber ihre
   Adresse erreichbar und wird von hier aus verlinkt.
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

  /* Die Themenansicht und der Lernen-Hub teilen sich denselben
     Behaelter. Der Hub zeichnet zuerst; ein Klick auf "Alle Themen"
     laesst die alte Funktion denselben Platz ueberschreiben. */
  var themenAnsicht = window.renderLernen || null;
  window.renderLernenThemen = function () {
    if (themenAnsicht) themenAnsicht();
    else location.hash = 'lernen';
  };
  window.lernZurueck = function () { window.renderLernenThemen(); };

  /* ---------- Bausteine ---------- */
  function kachel(o) {
    var sp = o.wert ? '<span class="hb-wert">' + E(o.wert) + '</span>' : '';
    return '<button class="hb-k' + (o.gross ? ' gross' : '') + '" onclick="' + o.tun + '">'
      + '<span class="hb-em">' + (o.em || '•') + '</span>'
      + '<span class="hb-kt">' + E(o.t) + '</span>'
      + '<span class="hb-ku">' + E(o.u || '') + '</span>'
      + sp + '</button>';
  }
  function kopf(titel, unter) {
    return '<div class="hb-kopf"><h2>' + E(titel) + '</h2>'
      + (unter ? '<p>' + E(unter) + '</p>' : '') + '</div>';
  }
  function band(o) {
    return '<button class="hb-band' + (o.ruhig ? ' ruhig' : '') + '" onclick="' + o.tun + '">'
      + '<span class="hb-band-em">' + (o.em || '') + '</span>'
      + '<span class="hb-band-t"><b>' + E(o.t) + '</b><small>' + E(o.u || '') + '</small></span>'
      + '<span class="hb-band-pf">→</span></button>';
  }

  /* ---------- Lernen ---------- */
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
    v.innerHTML = ''
      + kopf('Lernen', 'Dein Kurs, deine Wörter, deine Übungen — alles an einem Ort.')
      + '<div class="hb-weiter">' + weiter + '</div>'
      + '<div class="hb-git">'
      +   kachel({ em: '🧭', t: 'Mein Kurs', u: 'Stufe, Lektionen, nächster Schritt', tun: "go('weg')" })
      +   kachel({ em: '🧠', t: 'Vokabeltrainer', u: 'Wörter lernen und wiederholen', tun: "go('vokabeln')" })
      +   kachel({ em: '🗂️', t: 'Alle Themen', u: 'Vom Amt bis zum Zahnarzt', tun: "renderLernenThemen()" })
      +   kachel({ em: '✏️', t: 'Üben', u: 'Wortschatz, Hören, Grammatik', tun: "go('ueben')" })
      +   kachel({ em: '🎓', t: 'Prüfung', u: 'Gezielt vorbereiten', tun: "go('pruefung')" })
      +   kachel({ em: '📈', t: 'Mein Stand', u: 'Was du schon geschafft hast', tun: "go('fortschritt')" })
      + '</div>';
  };

  /* ---------- Sprechen ----------
     Live-Unterricht und Amanda gehoeren zusammen: beides ist Sprechen,
     einmal mit Menschen, einmal jederzeit. Die naechste Stunde steht
     oben, weil sie einen Termin hat. */
  window.renderSprechen = function () {
    var v = el('v-sprechen'); if (!v) return;
    stil();
    v.innerHTML = ''
      + kopf('Sprechen', 'Mit Julia und den anderen live — oder jederzeit mit Amanda.')
      + '<div id="hbNaechste"></div>'
      + band({ em: '📅', t: 'Live-Unterricht', u: 'Termine ansehen und buchen', tun: "go('kalender')" })
      + band({ em: '🎙️', t: 'Mit Amanda sprechen', u: 'Jederzeit, ohne Termin', tun: "go('amanda')", ruhig: true })
      + '<div class="hb-git">'
      +   kachel({ em: '🗓️', t: 'Meine Stunden', u: 'Was du gebucht hast', tun: "go('stunden')" })
      +   kachel({ em: '💬', t: 'Gespräche üben', u: '110 Situationen zum Durchspielen', tun: "renderLernenThemen()" })
      + '</div>';
    naechsteStunde();
  };

  /* Die naechste gebuchte Stunde, direkt aus der Datenbank. */
  function naechsteStunde() {
    var k = el('hbNaechste'); if (!k) return;
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
        k.innerHTML = '<div class="hb-naechste">'
          + '<span class="hb-kick">Deine nächste Stunde</span>'
          + '<b>' + E(b.classes.titel || b.classes.thema || 'Sprechclub') + '</b>'
          + '<small>' + E(wann) + (b.classes.niveau ? ' · ' + E(b.classes.niveau) : '') + '</small>'
          + '<button class="hb-btn" onclick="go(\'stunden\')">Zu meinen Stunden →</button>'
          + '</div>';
      }, function () {});
  }

  /* ---------- Medien ---------- */
  window.renderMedien = function () {
    var v = el('v-medien'); if (!v) return;
    stil();
    v.innerHTML = ''
      + kopf('Medien', 'Hören und lesen, wann es dir passt.')
      + band({ em: '🎧', t: 'Podcast', u: 'Jede Folge mit Text zum Mitlesen', tun: "window.open('podcast.html','_blank','noopener')" })
      + band({ em: '📄', t: 'Material', u: 'Handouts und Arbeitsblätter zu deinen Stunden', tun: "go('materialien')", ruhig: true })
      + '<div class="hb-git">'
      +   kachel({ em: '✉️', t: 'Nachrichten', u: 'Von Julia und dem Team', tun: "go('nachrichten')" })
      +   kachel({ em: '📚', t: 'Kursbibliothek', u: 'Fachkurse für Beruf und Prüfung', tun: "go('kurse')" })
      + '</div>';
  };

  window.HUBS = { lernen: window.renderLernen, sprechen: window.renderSprechen, medien: window.renderMedien };

  /* ---------- Aussehen: der Stil der App ---------- */
  function stil() {
    if (el('hb-stil')) return;
    var s = document.createElement('style'); s.id = 'hb-stil';
    s.textContent = [
      ':root{--hb-ink:#14181B;--hb-soft:#5A6B72;--hb-line:#E7ECEE;--hb-turq:#35AFD0;--hb-turq-ink:#10627A;--hb-turq-soft:#E6F8FC;--hb-gold:#EBA30B;--hb-gold-soft:#FDF1D6}',
      '#v-lernen,#v-sprechen,#v-medien{max-width:820px;margin:0 auto}',
      '.hb-kopf{margin:0 0 18px}',
      '.hb-kopf h2{font-size:clamp(24px,4vw,31px);margin:0 0 5px;letter-spacing:-.02em;line-height:1.1}',
      '.hb-kopf p{margin:0;color:var(--hb-soft);font-size:15px}',
      '.hb-weiter{margin-bottom:16px}',
      /* Band: eine breite Zeile zum Antippen */
      '.hb-band{width:100%;display:flex;align-items:center;gap:14px;text-align:left;font:inherit;cursor:pointer;',
      /* Dunkler Text auf Tuerkis, nicht weisser: weiss auf #35AFD0 sind
   nur 2,6:1 Kontrast. Die eigene Markenregel sagt dasselbe. */
      '  background:var(--hb-turq);color:#0B2F3B;border:none;border-radius:18px;padding:17px 18px;margin-bottom:11px;',
      '  transition:transform .14s ease,box-shadow .14s ease;box-shadow:0 5px 16px rgba(53,175,208,.26)}',
      '.hb-band:hover{transform:translateY(-1px);box-shadow:0 9px 22px rgba(53,175,208,.32)}',
      '.hb-band.ruhig{background:#fff;color:var(--hb-ink);border:1.5px solid var(--hb-line);box-shadow:none}',
      '.hb-band .hb-band-t small{color:#12414F}',
      '.hb-band.ruhig:hover{border-color:var(--hb-turq)}',
      '.hb-band-em{font-size:26px;flex:0 0 auto;line-height:1}',
      '.hb-band-t{flex:1;min-width:0}',
      '.hb-band-t b{display:block;font-size:17px;line-height:1.2}',
      '.hb-band-t small{display:block;font-size:13.5px;opacity:.88;margin-top:2px}',
      '.hb-band.ruhig .hb-band-t small{color:var(--hb-soft);opacity:1}',
      '.hb-band-pf{font-size:19px;flex:0 0 auto;opacity:.85}',
      /* Kacheln */
      '.hb-git{display:grid;grid-template-columns:repeat(auto-fit,minmax(215px,1fr));gap:12px;margin-top:16px}',
      '.hb-k{display:flex;flex-direction:column;gap:3px;text-align:left;font:inherit;color:inherit;cursor:pointer;',
      '  background:#fff;border:1.5px solid var(--hb-line);border-radius:16px;padding:16px;transition:.16s}',
      '.hb-k:hover{border-color:var(--hb-turq);transform:translateY(-1px);box-shadow:0 6px 18px rgba(20,24,27,.06)}',
      '.hb-em{font-size:25px;line-height:1;margin-bottom:5px}',
      '.hb-kt{font-weight:700;font-size:15.5px;line-height:1.25}',
      '.hb-ku{color:var(--hb-soft);font-size:13px;line-height:1.4}',
      '.hb-wert{margin-top:6px;font-size:12.5px;font-weight:700;color:var(--hb-turq-ink)}',
      /* Naechste Stunde */
      '.hb-naechste{background:linear-gradient(135deg,var(--hb-gold-soft),#fff);border:1.5px solid var(--hb-gold);',
      '  border-radius:18px;padding:18px;margin-bottom:12px;display:flex;flex-direction:column;gap:4px}',
      '.hb-kick{font-size:11.5px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;color:#9A6B04}',
      '.hb-naechste b{font-size:18px;line-height:1.2}',
      '.hb-naechste small{color:var(--hb-soft);font-size:13.5px}',
      '.hb-btn{align-self:flex-start;margin-top:8px;background:var(--hb-ink);color:#fff;border:none;',
      '  border-radius:999px;padding:9px 18px;font:inherit;font-weight:700;font-size:14px;cursor:pointer}',
      '.hb-btn:hover{background:#000}',
      /* Am Handy stehen die Kacheln zu zweit nebeneinander — wie im
         App-Entwurf. Einspaltig wurde die Seite doppelt so lang und
         man musste scrollen, um zu sehen, was es ueberhaupt gibt. */
      '@media(max-width:620px){',
      '  .hb-git{grid-template-columns:1fr 1fr;gap:10px}',
      '  .hb-k{padding:13px 12px;border-radius:15px}',
      '  .hb-em{font-size:22px}',
      '  .hb-kt{font-size:14.5px}',
      '  .hb-ku{font-size:12px}',
      '  .hb-band{padding:15px;border-radius:16px}',
      '  .hb-band-t b{font-size:16px}',
      '  .hb-kopf h2{font-size:26px}',
      '}',
      /* Sehr schmale Geraete: lieber wieder einspaltig als abgeschnitten */
      '@media(max-width:360px){ .hb-git{grid-template-columns:1fr} }'
    ].join('\n');
    document.head.appendChild(s);
  }
})();
