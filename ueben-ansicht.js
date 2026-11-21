/* ueben-ansicht.js — Leitfaden und moderne Aufgabenansicht für den Üben-Bereich
   (21.11.2026)

   Julia: „den Lernbereich verbessern, einzelne Übungen modernisieren, schauen
   ob die Übungen Sinn machen, eine strukturierte Logik haben und einen
   Leitfaden, was genau geübt wird, wie oft die Sachen trainiert werden,
   moderne Ansicht, lehrreiche Ansicht für Deutschlerner.“

   Die Logik in ueben.js war schon gut (höchstens fünf neue Wörter, erst
   erkennen, dann schreiben, Wiederholung nach 1-2-4-8-16-30 Tagen) — nur sah
   man sie nicht. Diese Datei macht sie sichtbar, ohne den Ablauf zu ändern:

   1. Leitfaden vor jeder Runde: was man danach kann, welche Wörter, wie die
      Runde abläuft, wann alles wiederkommt, und der eigene Stand in drei
      Stufen (Kennenlernen → Festigen → Sicher).
   2. Aufgabenansicht: oben steht, welche Art Aufgabe es ist und die wievielte;
      die Anweisung steht ohne Emoji, „(gesucht: …)“ wird ein Hinweisfeld,
      Antworten bekommen A–D und lassen sich mit 1–4 wählen.
   3. Rückmeldung: klare Kopfzeile „Richtig“ / „Nicht ganz“, darunter das Warum.
   4. Rundenende: welche Wörter wann wiederkommen.

   ueben.js ruft window.ubAnsicht(e, body, info) nach jedem Zeichnen und
   window.ubAnsichtFb(e, ok, fb) nach jeder Bewertung auf. Fehlt diese Datei,
   läuft alles wie vorher. */
(function () {
  'use strict';

  function E(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }
  var EMOJI_ANF = /^(?:[\u{1F000}-\u{1FAFF}☀-➿⬀-⯿←-⇿⌀-⏿]️?‍?)+\s*/u;
  function ohneEmoji(t) { return String(t || '').replace(EMOJI_ANF, ''); }

  var IC = {
    neu: '<path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z"/>',
    regel: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    erkennen: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    luecke: '<rect x="3" y="8" width="18" height="8" rx="2"/><path d="M8 12h3"/>',
    schreiben: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    satz: '<path d="M4 6h16M4 12h10M4 18h7"/>',
    hoeren: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
    sprechen: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>',
    lesen: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/>',
    fehler: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
    zuordnen: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    wdh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
    uhr: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    ziel: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    haken: '<path d="M20 6 9 17l-5-5"/>',
    kreuz: '<path d="M18 6 6 18M6 6l12 12"/>',
    pfeil: '<path d="M5 12h14M12 5l7 7-7 7"/>'
  };
  function ic(n, cls) { return '<svg class="' + (cls || 'ubn-ic') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (IC[n] || '') + '</svg>'; }

  /* Jede Aufgabenart bekommt einen Namen, ein Symbol und eine Farbfamilie.
     Die Farben stehen für den Lernschritt, nicht für Dekoration:
     Petrol = Neues lernen, Blau = Erkennen, Violett = selbst schreiben,
     Orange = im Satz, Grün = Hören und Sprechen. */
  var ART = {
    karte: { t: 'Neues Wort', ic: 'neu', f: 'petrol', schritt: 'Kennenlernen' },
    regel: { t: 'Regel', ic: 'regel', f: 'petrol', schritt: 'Kennenlernen' },
    choice: { t: 'Erkennen', ic: 'erkennen', f: 'blau', schritt: 'Erkennen' },
    artikel: { t: 'der, die oder das', ic: 'erkennen', f: 'blau', schritt: 'Erkennen' },
    match: { t: 'Zuordnen', ic: 'zuordnen', f: 'blau', schritt: 'Erkennen' },
    tippen: { t: 'Selbst schreiben', ic: 'schreiben', f: 'violett', schritt: 'Schreiben' },
    buchstaben: { t: 'Buchstaben ordnen', ic: 'schreiben', f: 'violett', schritt: 'Schreiben' },
    gap: { t: 'Lücke füllen', ic: 'luecke', f: 'orange', schritt: 'Im Satz' },
    order: { t: 'Satzbau', ic: 'satz', f: 'orange', schritt: 'Im Satz' },
    fehler: { t: 'Fehler finden', ic: 'fehler', f: 'orange', schritt: 'Im Satz' },
    schreiben: { t: 'Eigener Text', ic: 'schreiben', f: 'violett', schritt: 'Schreiben' },
    lesen: { t: 'Lesen', ic: 'lesen', f: 'orange', schritt: 'Verstehen' },
    listen: { t: 'Hören', ic: 'hoeren', f: 'gruen', schritt: 'Hören' },
    speak: { t: 'Nachsprechen', ic: 'sprechen', f: 'gruen', schritt: 'Sprechen' },
    shadow: { t: 'Shadowing', ic: 'sprechen', f: 'gruen', schritt: 'Sprechen' }
  };
  function artVon(e) {
    if (e.type === 'karte' && e.regel) return ART.regel;
    if (e.type === 'choice' && (e.audio || e.audioUrl)) return ART.listen;
    return ART[e.type] || { t: 'Aufgabe', ic: 'erkennen', f: 'blau', schritt: '' };
  }

  /* ---------- Speicher (dieselben Schlüssel wie ueben.js) ---------- */
  function gGet(k, d) { try { if (window.lsGet) return window.lsGet(k, d); var v = JSON.parse(localStorage.getItem('ub_' + k)); return v == null ? d : v; } catch (e) { return d; } }
  function lGet(k, d) { try { var v = localStorage.getItem('ubn_' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }
  function lSet(k, v) { try { localStorage.setItem('ubn_' + k, JSON.stringify(v)); } catch (e) {} }
  function heute() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function datumKurz(iso) {
    if (!iso) return '';
    var h = heute(); if (iso <= h) return 'heute';
    var a = new Date(h + 'T12:00:00'), b = new Date(iso + 'T12:00:00');
    var tage = Math.round((b - a) / 86400000);
    if (tage === 1) return 'morgen';
    if (tage < 7) return 'in ' + tage + ' Tagen';
    return 'am ' + b.toLocaleDateString('de-DE', { day: 'numeric', month: 'long' });
  }

  function skill(id) { return ((window.UEBUNGEN && window.UEBUNGEN.skills) || []).filter(function (s) { return s.id === id; })[0]; }
  function thema(skId, thId) { var s = skill(skId); return s ? (s.themes || []).filter(function (t) { return t.id === thId; })[0] : null; }

  /* Wörter eines Themas: aus der Wortliste, sonst aus den Karten. */
  function themenWoerter(th) {
    var l = [];
    (th.words || []).forEach(function (w) { if (w && w.de) l.push({ de: w.de, info: w.info || '' }); });
    if (!l.length) (th.exercises || []).forEach(function (e) { if (e.type === 'karte' && !e.regel && e.w && !l.some(function (x) { return x.de === e.w; })) l.push({ de: e.w, info: e.info || '' }); });
    return l;
  }

  /* Stand eines Themas in drei Stufen.
     Kennenlernen: noch keine Runde. Festigen: geübt, aber noch nicht sicher.
     Sicher: beste Runde ab 80 % und mindestens die Hälfte der Wörter hat im
     Wiederholungsplan Stufe 3 erreicht (also schon nach Tagen noch gewusst). */
  function stand(skId, th) {
    var st = gGet('ub', {}) || {}; var t = (st.themes || {})[skId + '|' + th.id] || {};
    var wdh = gGet('wdh', {}) || {};
    var woe = themenWoerter(th);
    var gelernt = 0, faellig = 0, naechst = '';
    woe.forEach(function (w) {
      var s = wdh[w.de]; if (!s) return;
      if ((s.s || 0) >= 3) gelernt++;
      if (s.f && s.f <= heute()) faellig++;
      if (s.f && s.f > heute() && (!naechst || s.f < naechst)) naechst = s.f;
    });
    var runs = t.runs || 0, best = t.best || 0;
    var stufe = !runs ? 0 : ((best >= 80 && woe.length && gelernt >= woe.length / 2) ? 2 : 1);
    return { stufe: stufe, runs: runs, best: best, woerter: woe.length, gelernt: gelernt, faellig: faellig, naechst: naechst };
  }
  window.ubThemenStand = stand;

  /* ---------- Was man nach dem Thema kann, und wie die Runde läuft ---------- */
  var ABLAUF = {
    wortschatz: [['neu', 'Kennenlernen', 'Höchstens 5 neue Wörter: mit Bild, Artikel, Ton und einem Satz aus dem Alltag.'],
      ['erkennen', 'Erkennen', 'Du wählst das richtige Wort aus, ohne es selbst schreiben zu müssen.'],
      ['schreiben', 'Schreiben', 'Erst wenn du es erkennst, schreibst du es selbst, mit Artikel.'],
      ['satz', 'Im Satz', 'Das Wort in Lücken und beim Satzbau benutzen.'],
      ['wdh', 'Wiederholen', 'Zum Schluss zwei Wörter aus früheren Runden.']],
    grammatik: [['regel', 'Regel ansehen', 'Die Regel an drei echten Sätzen aus dem Thema.'],
      ['erkennen', 'Erkennen', 'Die richtige Form auswählen.'],
      ['luecke', 'Selbst bilden', 'Die Form in die Lücke schreiben.'],
      ['satz', 'Satzbau', 'Ganze Sätze in die richtige Reihenfolge bringen.'],
      ['fehler', 'Fehler finden', 'Den Fehler im Satz entdecken, so wie später im eigenen Text.']],
    hoeren: [['hoeren', 'Zuhören', 'Eine kurze Aufnahme aus dem Alltag, so oft du willst.'],
      ['erkennen', 'Verstehen', 'Fragen zum Inhalt, eine nach der anderen.'],
      ['satz', 'Genau hinhören', 'Einzelne Sätze hören und nachbauen.'],
      ['sprechen', 'Nachsprechen', 'Den Satz selbst laut sagen.']],
    aussprache: [['hoeren', 'Hören', 'Den Laut oder die Betonung in echten Wörtern hören.'],
      ['erkennen', 'Unterscheiden', 'Ähnliche Laute auseinanderhalten.'],
      ['sprechen', 'Nachsprechen', 'Selbst sprechen, das Mikrofon hört mit.']],
    'lesen-schreiben': [['lesen', 'Lesen', 'Ein kurzer Text aus dem Alltag.'],
      ['erkennen', 'Verstehen', 'Fragen zum Text, der Text bleibt sichtbar.'],
      ['schreiben', 'Schreiben', 'Selbst einen kurzen Text schreiben und mit einem Muster vergleichen.']],
    shadowing: [['hoeren', 'Hören', 'Einen Satz in natürlichem Tempo hören.'],
      ['sprechen', 'Mitsprechen', 'Gleichzeitig mitsprechen und dich aufnehmen.'],
      ['erkennen', 'Vergleichen', 'Deine Aufnahme mit dem Original vergleichen.']]
  };
  var KANN = {
    wortschatz: 'die wichtigsten Wörter zum Thema verstehen, mit Artikel schreiben und in eigenen Sätzen benutzen',
    grammatik: 'die Regel erkennen und selbst richtig anwenden — im Satz, nicht nur in der Tabelle',
    hoeren: 'kurze Gespräche und Durchsagen zum Thema verstehen, auch wenn nicht jedes Wort klar ist',
    aussprache: 'die Laute hören, unterscheiden und selbst deutlicher sprechen',
    'lesen-schreiben': 'kurze Texte zum Thema verstehen und selbst ein paar Sätze dazu schreiben',
    shadowing: 'Sätze flüssiger und mit natürlicher Melodie sprechen'
  };
  var STUFEN = ['Kennenlernen', 'Festigen', 'Sicher'];

  function leitfadenHtml(skId, th) {
    var sk = skill(skId) || {}; var st = stand(skId, th);
    var woe = themenWoerter(th);
    var abl = ABLAUF[skId] || ABLAUF.wortschatz;
    var titel = th.title || 'Thema';
    var bild = 'bilder/thema/' + th.id + '.jpg';
    var stufeTxt = st.stufe === 0 ? 'Du startest dieses Thema neu.'
      : st.stufe === 1 ? st.runs + ' ' + (st.runs === 1 ? 'Runde' : 'Runden') + ' geübt, beste ' + st.best + ' %. Sicher wird es, wenn die Wörter auch nach ein paar Tagen noch sitzen.'
      : 'Sitzt. Ab jetzt reicht Wiederholen, wenn etwas fällig ist.';
    var wdhTxt = st.faellig ? '<b>' + st.faellig + ' ' + (st.faellig === 1 ? 'Wort ist' : 'Wörter sind') + ' heute fällig</b> und kommen in dieser Runde dran.'
      : (st.naechst ? 'Die nächste Wiederholung aus diesem Thema ist <b>' + E(datumKurz(st.naechst)) + '</b>.' : '');
    return '<div class="ubn-lf-karte" role="dialog" aria-modal="true" aria-label="So läuft die Runde">'
      + '<div class="ubn-lf-kopf">'
      + '<img src="' + E(bild) + '" alt="" ' + (th.bild ? 'data-ersatz="' + E(th.bild) + '" ' : '') + 'onerror="if(this.dataset.ersatz){this.src=this.dataset.ersatz;this.dataset.ersatz=\'\'}else{this.remove()}">'
      + '<div class="ubn-lf-kt"><span class="ubn-lf-lv">' + E((th.level || '').slice(0, 5)) + ' · ' + E(sk.name || '') + '</span><h2>' + E(titel) + '</h2></div>'
      + '<button class="ubn-lf-zu" onclick="ubnLeitfadenZu()" aria-label="Schließen">' + ic('kreuz') + '</button></div>'
      + '<div class="ubn-lf-inhalt">'
      + '<div class="ubn-lf-ziel">' + ic('ziel') + '<p><b>Danach kannst du</b> ' + E(KANN[skId] || KANN.wortschatz) + '.</p></div>'
      + (woe.length ? '<div class="ubn-lf-abschn"><h3>Was du übst</h3><div class="ubn-lf-woerter">'
        + woe.slice(0, 12).map(function (w) { return '<span title="' + E(w.info) + '">' + E(w.de) + '</span>'; }).join('')
        + (woe.length > 12 ? '<span class="mehr">+' + (woe.length - 12) + ' weitere</span>' : '') + '</div></div>' : '')
      + '<div class="ubn-lf-abschn"><h3>So läuft die Runde</h3><ol class="ubn-lf-ablauf">'
      + abl.map(function (a, i) { return '<li><span class="nr">' + (i + 1) + '</span><span class="tx"><b>' + E(a[1]) + '</b><small>' + E(a[2]) + '</small></span></li>'; }).join('')
      + '</ol><p class="ubn-lf-dauer">' + ic('uhr') + 'Rund 20 kurze Aufgaben, etwa 6 Minuten. Du kannst jederzeit aufhören.</p></div>'
      + '<div class="ubn-lf-abschn"><h3>Wie oft du übst</h3>'
      + '<div class="ubn-lf-takt">' + ['heute', '1 Tag', '2 Tage', '4 Tage', '8 Tage', '16 Tage', '30 Tage'].map(function (t, i) { return '<span' + (i === 0 ? ' class="an"' : '') + '>' + t + '</span>'; }).join('<i></i>') + '</div>'
      + '<p class="ubn-lf-klein">Was du richtig hast, kommt nach diesen Abständen wieder, jedes Mal etwas später. Was falsch war, kommt noch heute zurück. So landet ein Wort im Langzeitgedächtnis statt nur bis morgen.' + (wdhTxt ? ' ' + wdhTxt : '') + '</p></div>'
      + '<div class="ubn-lf-abschn"><h3>Dein Stand</h3><div class="ubn-lf-stufen">'
      + STUFEN.map(function (s, i) { return '<span class="' + (i < st.stufe ? 'fertig' : (i === st.stufe ? 'jetzt' : '')) + '">' + (i < st.stufe ? ic('haken', 'ubn-ic-s') : '') + s + '</span>'; }).join('')
      + '</div><p class="ubn-lf-klein">' + E(stufeTxt) + (st.woerter ? ' ' + st.gelernt + ' von ' + st.woerter + ' Wörtern sitzen schon über mehrere Tage.' : '') + '</p></div>'
      + '</div>'
      + '<div class="ubn-lf-fuss"><button class="ubn-lf-los" onclick="ubnLeitfadenLos()">Runde starten' + ic('pfeil') + '</button>'
      + '<label class="ubn-lf-check"><input type="checkbox" id="ubnLfAus"' + (lGet('direkt', false) ? ' checked' : '') + '> Nächstes Mal direkt starten</label></div>'
      + '</div>';
  }

  /* ---------- ubStart abfangen: erst der Leitfaden, dann die Runde ---------- */
  var warte = null, direktNochmal = false;
  function installieren() {
    if (!window.ubStart || window.ubStart.__ubn) return !!(window.ubStart && window.ubStart.__ubn);
    var orig = window.ubStart;
    var neu = function (skId, thId) {
      var th = thema(skId, thId);
      if (!th || direktNochmal || lGet('direkt', false)) { direktNochmal = false; return orig(skId, thId); }
      warte = function () { orig(skId, thId); };
      css();
      var ov = document.getElementById('ubnLf');
      if (!ov) { ov = document.createElement('div'); ov.id = 'ubnLf'; ov.className = 'ubn-lf'; document.body.appendChild(ov);
        ov.addEventListener('click', function (ev) { if (ev.target === ov) window.ubnLeitfadenZu(); }); }
      ov.innerHTML = leitfadenHtml(skId, th);
      ov.classList.add('auf'); document.body.style.overflow = 'hidden';
      setTimeout(function () { var b = ov.querySelector('.ubn-lf-los'); if (b) b.focus(); }, 60);
    };
    neu.__ubn = true; window.ubStart = neu;
    /* „Nochmal üben“ am Rundenende startet ohne Leitfaden — den hat man gerade gesehen. */
    if (window.ubAgain && !window.ubAgain.__ubn) {
      var origA = window.ubAgain;
      window.ubAgain = function () { direktNochmal = true; return origA.apply(this, arguments); };
      window.ubAgain.__ubn = true;
    }
    return true;
  }
  window.ubnLeitfadenZu = function () {
    var ov = document.getElementById('ubnLf'); if (ov) ov.classList.remove('auf');
    document.body.style.overflow = ''; warte = null;
  };
  window.ubnLeitfadenLos = function () {
    var cb = document.getElementById('ubnLfAus'); lSet('direkt', !!(cb && cb.checked));
    var w = warte; window.ubnLeitfadenZu(); if (w) w();
  };
  document.addEventListener('keydown', function (ev) {
    var ov = document.getElementById('ubnLf');
    if (ov && ov.classList.contains('auf')) {
      if (ev.key === 'Escape') window.ubnLeitfadenZu();
      return;
    }
    /* In der Runde: 1–4 wählt eine Antwort, wie auf A–D. */
    var r = document.getElementById('ubOv'); if (!r || !r.classList.contains('open')) return;
    var tag = (ev.target && ev.target.tagName) || ''; if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (/^[1-4]$/.test(ev.key)) {
      var opts = document.querySelectorAll('#ubOpts .ub-opt:not([disabled])');
      var b = opts[+ev.key - 1]; if (b) { b.click(); ev.preventDefault(); }
    }
  });
  (function warten(n) { if (installieren() || n > 80) return; setTimeout(function () { warten(n + 1); }, 150); })(0);

  /* ---------- Satzbau säubern ----------
     Manche Satzbau-Aufgaben trugen eine Anweisung oder Klammer im Satz:
     „Im Perfekt: Ich bin …“, „Sie (= Frau Weber) ist …“. Daraus wurden
     Kacheln wie „Perfekt:“ und „(=“. ueben.js ruft das vor dem Zeichnen
     auf; Anweisung und Klammer wandern in den Hinweis. */
  window.ubSatzSauber = function (e) {
    if (!e || e.type !== 'order' || !e.answer || e.__sauber) return;
    e.__sauber = 1;
    var a = String(e.answer);
    var m = a.match(/^([A-ZÄÖÜ][^.!?:_]{1,30}):\s+(.+)$/);
    if (m) { if (!e.hint || e.hint.indexOf(m[1].split(' ')[0]) >= 0) e.hint = m[1]; a = m[2]; }
    var kl = a.match(/\s*\(([^)]*)\)/);
    if (kl) { e.hint = (e.hint ? e.hint + ' · ' : '') + kl[1].replace(/^=\s*/, ''); a = a.replace(/\s*\([^)]*\)/g, ''); }
    e.answer = a.replace(/\s+/g, ' ').replace(/\s+([.,!?;:])/g, '$1').trim();
  };

  /* Ein Hinweis darf die Lösung nicht verraten. „keinen ___ haben“ mit dem
     Hinweis „keinen Bock haben = keine Lust haben“ war geschenkt. Steht die
     Lösung als ganzes Wort im Hinweis, wird sie dort zu „…“. Eine Grundform
     („verzichten“ bei „verzichte“) bleibt stehen — die zu beugen ist die
     Aufgabe. */
  function maskiere(text, loesung) {
    var l = String(loesung || '').replace(/^(der|die|das)\s+/i, '').trim();
    if (!text || l.length < 3) return text;
    var re = new RegExp('(^|[^A-Za-zÄÖÜäöüß])(' + l.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?=$|[^A-Za-zÄÖÜäöüß])', 'gi');
    return String(text).replace(re, '$1…');
  }

  /* ---------- Aufgabenansicht ---------- */
  window.ubAnsicht = function (e, body, info) {
    css();
    if (!e || !body) return;
    var a = artVon(e);
    var kopf = document.createElement('div');
    kopf.className = 'ubn-kopf f-' + a.f;
    kopf.innerHTML = '<span class="ubn-art">' + ic(a.ic) + E(a.t) + '</span>'
      + (info && info.n ? '<span class="ubn-nr">' + (info.idx + 1) + ' / ' + info.n + '</span>' : '');
    var wmark = body.querySelector('.ub-wmark');
    if (wmark) { wmark.innerHTML = ic('wdh', 'ubn-ic-s') + E(ohneEmoji(wmark.textContent)); kopf.appendChild(wmark); }
    body.insertBefore(kopf, body.firstChild);

    /* Die Frage: Emoji vorn weg, „(gesucht: …)“ als eigenes Feld,
       „Was fehlt? Satz“ in Anweisung und Satz getrennt. */
    var q = body.querySelector('.ub-q');
    if (q && !q.dataset.ubn) {
      q.dataset.ubn = '1';
      var roh = ohneEmoji(q.textContent).trim();
      var gesucht = '';
      var m = roh.match(/\s*\((?:gesucht|Bedeutung|Tipp):\s*([^)]+)\)\s*$/i);
      if (m) { gesucht = m[1].trim(); roh = roh.slice(0, m.index).trim(); }
      var mm = roh.match(/^(Was fehlt\?|Welches Wort passt\??:?|Ergänze:?|Welche Form passt\??:?|Was passt\??:?)\s+(.+)$/i);
      if (mm && /_{2,}|…/.test(mm[2])) {
        q.innerHTML = '<span class="ubn-anw">' + E(mm[1].replace(/:$/, '')) + '</span><span class="ubn-satz">' + E(mm[2]).replace(/_{2,}/g, '<span class="ubn-luecke"></span>') + '</span>';
      } else if (/_{2,}/.test(roh)) {
        q.innerHTML = '<span class="ubn-satz">' + E(roh).replace(/_{2,}/g, '<span class="ubn-luecke"></span>') + '</span>';
      } else {
        q.textContent = roh;
      }
      if (gesucht && e.options && typeof e.answer === 'number') gesucht = maskiere(gesucht, e.options[e.answer]);
      if (gesucht) {
        var g = document.createElement('div'); g.className = 'ubn-gesucht';
        g.innerHTML = '<span>Gesucht</span>' + E(gesucht);
        q.parentNode.insertBefore(g, q.nextSibling);
      }
    }
    /* Hinweise: 💡 weg, als ruhiges Feld. */
    body.querySelectorAll('.ub-tip').forEach(function (t) {
      if (t.dataset.ubn) return; t.dataset.ubn = '1';
      var tx = ohneEmoji(t.textContent).trim(); if (!tx) return;
      if (e.type === 'gap' && e.answer) tx = maskiere(tx, e.answer);
      t.textContent = tx; t.classList.add('ubn-tip');
    });
    var mic = body.querySelector('#ubMic'); if (mic) mic.innerHTML = ic('sprechen') + E(ohneEmoji(mic.textContent));
    var rec = body.querySelector('#ubRecBtn'); if (rec) rec.innerHTML = ic('sprechen') + E(ohneEmoji(rec.textContent));
    var opts = body.querySelector('#ubOpts');
    if (opts && !opts.querySelector('.ub-optbild')) opts.classList.add('ubn-opts');
  };

  /* ---------- Rückmeldung ---------- */
  window.ubAnsichtFb = function (e, ok, fb) {
    if (!fb || fb.dataset.ubn) return;
    fb.dataset.ubn = '1';
    var html = fb.innerHTML;
    var kein = /^\s*(✓|✗)\s*/;
    var selbst = (e.type === 'karte' || e.type === 'speak' || e.type === 'shadow' || e.type === 'schreiben');
    var kopf;
    if (e.type === 'karte') kopf = '';
    else if (ok) kopf = '<div class="ubn-fbk gut">' + ic('haken') + (selbst ? 'Gut gemacht' : 'Richtig') + '</div>';
    else kopf = '<div class="ubn-fbk nein">' + ic('kreuz') + (e.type === 'order' ? 'So war der Satz gemeint' : 'Nicht ganz') + '</div>';
    html = html.replace(kein, '').replace(/^So war der Satz gemeint:<br>/, '');
    /* „Richtig! +10 XP“: das Wort Richtig steht schon im Kopf. */
    html = html.replace(/^Richtig!\s*/, '');
    fb.innerHTML = kopf + '<div class="ubn-fbt">' + html + '</div>';
    fb.classList.add('ubn-fb');
  };

  /* ---------- Rundenende: was wann wiederkommt ---------- */
  window.addEventListener('ub:fertig', function (ev) {
    try {
      var d = ev.detail || {}; var th = thema(d.skId, d.thId);
      var body = document.getElementById('ubBody'); if (!body || !th) return;
      setTimeout(function () {
        var end = body.querySelector('.ub-end'); if (!end || end.querySelector('.ubn-ende')) return;
        var st = stand(d.skId, th);
        var wdh = gGet('wdh', {}) || {};
        var nachTag = {};
        themenWoerter(th).forEach(function (w) { var s = wdh[w.de]; if (s && s.f) (nachTag[s.f] = nachTag[s.f] || []).push(w.de); });
        var tage = Object.keys(nachTag).sort().slice(0, 3);
        var box = document.createElement('div'); box.className = 'ubn-ende';
        box.innerHTML = '<div class="ubn-lf-stufen klein">' + STUFEN.map(function (s, i) { return '<span class="' + (i < st.stufe ? 'fertig' : (i === st.stufe ? 'jetzt' : '')) + '">' + s + '</span>'; }).join('') + '</div>'
          + (tage.length ? '<h3>So geht es weiter</h3><ul>' + tage.map(function (t) {
            var l = nachTag[t]; return '<li><b>' + E(datumKurz(t)) + '</b><span>' + E(l.slice(0, 4).join(', ')) + (l.length > 4 ? ' und ' + (l.length - 4) + ' weitere' : '') + '</span></li>';
          }).join('') + '</ul><p>Wir erinnern dich auf der Startseite, wenn etwas fällig ist.</p>' : '');
        end.appendChild(box);
      }, 60);
    } catch (x) {}
  });


  /* Übersicht: Fertigkeit und Stufe als Attribut, damit sie ihre Farbe bekommen. */
  function markiere() {
    var v = document.getElementById('v-ueben'); if (!v) return;
    v.querySelectorAll('.ubx-tab:not([data-sk])').forEach(function (b) {
      var m = String(b.getAttribute('onclick') || '').match(/ubSetSkill\('([^']+)'/); if (m) b.setAttribute('data-sk', m[1]);
    });
    v.querySelectorAll('.ubx-lv:not([data-lv]), .ubx-niv .lv:not([data-lv])').forEach(function (x) {
      var t = String(x.textContent || '').trim().toUpperCase().slice(0, 2); if (/^[ABC][12]$/.test(t)) x.setAttribute('data-lv', t);
    });
  }
  (function beobachte(n) {
    var v = document.getElementById('v-ueben');
    if (!v) { if (n < 60) setTimeout(function () { beobachte(n + 1); }, 250); return; }
    css(); markiere();
    new MutationObserver(function () { markiere(); }).observe(v, { childList: true, subtree: true });
  })(0);

  /* ---------- Stil ---------- */
  function css() {
    if (document.getElementById('ubnCSS')) return;
    var s = document.createElement('style'); s.id = 'ubnCSS';
    s.textContent = [
      /* Farbfamilien der Lernschritte */
      /* 21.11.2026, Julia: „professionell farbiger, mehr Schwarz, Rot, Gold, Türkis, nicht nur Türkis“.
         Die Lernschritte tragen die Markenfarben: Neues = Gold, Erkennen = Türkis,
         Schreiben = Rot, Im Satz = Schwarz, Hören/Sprechen = Petrol. */
      '.f-petrol{--uf:#8A6500;--uh:#FFF3C4;--ub:#E0A800}.f-blau{--uf:#0E6D85;--uh:#E1F3F9;--ub:#1B9BC0}.f-violett{--uf:#B3241C;--uh:#FDE9E7;--ub:#D42A21}.f-orange{--uf:#14181B;--uh:#ECEEF0;--ub:#14181B}.f-gruen{--uf:#0A4E62;--uh:#DDEFF3;--ub:#0E6D85}',
      '.ubn-ic{width:16px;height:16px;flex:0 0 auto}.ubn-ic-s{width:13px;height:13px;flex:0 0 auto}',
      /* Kopf der Aufgabe */
      '#ubOv .ubn-kopf{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:0 0 14px}',
      '#ubOv .ubn-art{display:inline-flex;align-items:center;gap:7px;background:var(--uh);color:var(--uf);font-weight:700;font-size:13px;padding:6px 12px 6px 10px;border-radius:999px;letter-spacing:.01em}',
      '#ubOv .ubn-nr{font-size:12.5px;font-weight:600;color:#6B7A85;margin-left:auto}',
      '#ubOv .ubn-kopf .ub-wmark{display:inline-flex;align-items:center;gap:6px;margin:0;background:#FFF4E5;color:#9A5B00;border-radius:999px;padding:5px 11px;font-size:12.5px;font-weight:700}',
      /* Frage */
      '#ubOv .ub-q{font-family:"Inter",system-ui,sans-serif!important;font-size:19px!important;font-weight:700!important;line-height:1.4!important;color:#14181B}',
      '#ubOv .ubn-anw{display:block;font-size:13.5px;font-weight:700;color:#6B7A85;text-transform:none;margin-bottom:8px}',
      '#ubOv .ubn-satz{display:block;background:#fff;border:1px solid #E3E9EE;border-radius:16px;padding:16px 18px;font-size:20px;font-weight:600;line-height:1.55;color:#14181B;box-shadow:0 1px 2px rgba(16,24,40,.04)}',
      '#ubOv .ubn-luecke{display:inline-block;min-width:76px;height:1.15em;vertical-align:-.18em;border-bottom:3px solid var(--uf,#2563EB);background:rgba(37,99,235,.07);border-radius:6px 6px 0 0;margin:0 3px}',
      '#ubOv .ubn-gesucht{display:flex;align-items:baseline;gap:10px;margin:10px 0 2px;padding:10px 14px;border-radius:12px;background:#F6F8FA;border:1px dashed #D5DDE4;font-size:15px;color:#2B3640;line-height:1.45}',
      '#ubOv .ubn-gesucht span{flex:0 0 auto;font-size:11.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#6B7A85}',
      '#ubOv .ubn-tip{background:#F6F8FA!important;border:1px solid #E3E9EE!important;border-radius:12px!important;padding:10px 13px!important;font-size:14px!important;color:#3D4852!important}',
      /* Antworten als Karten mit A–D */
      '#ubOv .ubn-opts{counter-reset:ubn;display:grid!important;gap:10px!important}',
      '#ubOv .ubn-opts .ub-opt{counter-increment:ubn;display:flex!important;align-items:center;gap:12px;text-align:left!important;background:#fff!important;border:1.5px solid #DFE6EC!important;border-radius:14px!important;padding:13px 14px!important;font-size:16px!important;font-weight:600!important;color:#14181B!important;box-shadow:0 1px 2px rgba(16,24,40,.04)!important;transition:border-color .12s,background .12s,transform .08s}',
      '#ubOv .ubn-opts .ub-opt::before{content:counter(ubn,upper-alpha);flex:0 0 28px;height:28px;border-radius:9px;display:inline-flex;align-items:center;justify-content:center;background:#F1F4F7;color:#55626D;font-size:13px;font-weight:800}',
      '#ubOv .ubn-opts .ub-opt:hover:not([disabled]){border-color:#9FB4C2!important;background:#FAFCFD!important}',
      '#ubOv .ubn-opts .ub-opt:active:not([disabled]){transform:scale(.99)}',
      '#ubOv .ubn-opts .ub-opt.sel{border-color:#0E6D85!important;background:#F0F8FA!important}',
      '#ubOv .ubn-opts .ub-opt.sel::before{background:#0E6D85;color:#fff}',
      '#ubOv .ubn-opts .ub-opt.right{border-color:#16A34A!important;background:#ECFBF1!important;color:#14532D!important}',
      '#ubOv .ubn-opts .ub-opt.right::before{background:#16A34A;color:#fff}',
      '#ubOv .ubn-opts .ub-opt.wrong{border-color:#DC2626!important;background:#FEF0F0!important;color:#7F1D1D!important}',
      '#ubOv .ubn-opts .ub-opt.wrong::before{background:#DC2626;color:#fff}',
      '#ubOv .ubn-opts.ub-drei{grid-template-columns:repeat(3,1fr)!important}',
      '#ubOv .ubn-opts.ub-drei .ub-opt{justify-content:center;font-size:18px!important}',
      '#ubOv .ubn-opts.ub-drei .ub-opt::before{display:none}',
      /* Fehler finden: die Wörter groß genug zum Antippen */
      '#ubOv .ub-fsatz{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;background:#fff;border:1px solid #E3E9EE;border-radius:16px;padding:16px;margin-top:6px}',
      '#ubOv .ub-fw{font-size:18px!important;font-weight:600!important;padding:8px 12px!important;border-radius:11px!important;border:1.5px solid #DFE6EC!important;background:#fff!important}',
      '#ubOv .ub-fw:hover{border-color:#C2570C!important;background:#FFF8F1!important}',
      /* Rückmeldung */
      '#ubOv .ub-fb.ubn-fb{border-radius:16px!important;padding:14px 16px!important;margin-top:16px!important;border:1px solid transparent!important}',
      '#ubOv .ub-fb.ubn-fb.ok{background:#EEFBF3!important;border-color:#BFE8CD!important;color:#14532D!important}',
      '#ubOv .ub-fb.ubn-fb.no{background:#FFF4F2!important;border-color:#F6C9C2!important;color:#7A1F14!important}',
      '#ubOv .ubn-fbk{display:flex;align-items:center;gap:8px;font-size:16px;font-weight:800;margin-bottom:6px}',
      '#ubOv .ubn-fbk .ubn-ic{width:20px;height:20px;padding:3px;border-radius:999px;color:#fff;box-sizing:content-box}',
      '#ubOv .ubn-fbk.gut .ubn-ic{background:#16A34A}#ubOv .ubn-fbk.nein .ubn-ic{background:#DC2626}',
      '#ubOv .ubn-fbt{font-size:15px;line-height:1.55;font-weight:500}',
      '#ubOv .ubn-fbt b{font-weight:800}',
      /* Rundenende */
      '#ubOv .ubn-ende{margin:18px auto 0;max-width:420px;text-align:left;background:#fff;border:1px solid #E3E9EE;border-radius:16px;padding:14px 16px}',
      '#ubOv .ubn-ende h3{font-size:14px;margin:12px 0 8px;color:#14181B}',
      '#ubOv .ubn-ende ul{list-style:none;margin:0;padding:0;display:grid;gap:7px}',
      '#ubOv .ubn-ende li{display:flex;gap:10px;font-size:14px;line-height:1.4}#ubOv .ubn-ende li b{flex:0 0 92px;color:#0E6D85}',
      '#ubOv .ubn-ende p{font-size:12.5px;color:#6B7A85;margin:10px 0 0}',
      /* Leitfaden */
      '.ubn-lf{position:fixed;inset:0;z-index:10050;background:rgba(15,23,30,.5);display:none;align-items:flex-end;justify-content:center;padding:0}',
      '.ubn-lf.auf{display:flex}',
      '@media(min-width:700px){.ubn-lf{align-items:center;padding:24px}}',
      '.ubn-lf-karte{background:#F6F8FA;width:100%;max-width:620px;max-height:94vh;display:flex;flex-direction:column;border-radius:22px 22px 0 0;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.25);font-family:"Inter",system-ui,sans-serif;color:#14181B}',
      '@media(min-width:700px){.ubn-lf-karte{border-radius:22px}}',
      '.ubn-lf-kopf{position:relative;background:linear-gradient(135deg,#0E6D85,#0A4E62);color:#fff;min-height:118px;display:flex;align-items:flex-end}',
      '.ubn-lf-kopf img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.35}',
      '.ubn-lf-kt{position:relative;padding:18px 20px}',
      '.ubn-lf-lv{display:inline-block;font-size:11.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#A9DEEE;margin-bottom:4px}',
      '.ubn-lf-kt h2{margin:0;font-family:"Inter",system-ui,sans-serif!important;font-size:24px!important;font-weight:800!important;letter-spacing:-.02em!important;color:#fff!important;line-height:1.2!important}',
      '.ubn-lf-zu{position:absolute;top:12px;right:12px;width:36px;height:36px;border-radius:999px;border:0;background:rgba(255,255,255,.18);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer}',
      '.ubn-lf-inhalt{overflow-y:auto;padding:16px 18px 6px;display:grid;gap:12px}',
      '.ubn-lf-ziel{display:flex;gap:12px;align-items:flex-start;background:#fff;border:1px solid #E3E9EE;border-left:4px solid #0E6D85;border-radius:14px;padding:12px 14px}',
      '.ubn-lf-ziel .ubn-ic{color:#0E6D85;width:20px;height:20px;margin-top:2px}',
      '.ubn-lf-ziel p{margin:0;font-size:15px;line-height:1.5}',
      '.ubn-lf-abschn{background:#fff;border:1px solid #E3E9EE;border-radius:14px;padding:13px 14px}',
      '.ubn-lf-abschn h3{margin:0 0 9px;font-size:12px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;color:#6B7A85}',
      '.ubn-lf-woerter{display:flex;flex-wrap:wrap;gap:6px}',
      '.ubn-lf-woerter span{background:#F1F4F7;border-radius:999px;padding:5px 11px;font-size:13.5px;font-weight:600}',
      '.ubn-lf-woerter .mehr{background:none;color:#6B7A85}',
      '.ubn-lf-ablauf{list-style:none;margin:0;padding:0;display:grid;gap:9px}',
      '.ubn-lf-ablauf li{display:flex;gap:11px;align-items:flex-start}',
      '.ubn-lf-ablauf .nr{flex:0 0 26px;height:26px;border-radius:999px;background:#E3F2F6;color:#0E6D85;font-weight:800;font-size:13px;display:inline-flex;align-items:center;justify-content:center}',
      '.ubn-lf-ablauf .tx{display:flex;flex-direction:column;gap:1px}.ubn-lf-ablauf b{font-size:14.5px}.ubn-lf-ablauf small{font-size:13px;color:#5F6B76;line-height:1.4}',
      '.ubn-lf-dauer{display:flex;align-items:center;gap:7px;margin:11px 0 0;font-size:13px;color:#5F6B76}',
      '.ubn-lf-takt{display:flex;align-items:center;flex-wrap:wrap;gap:4px 0}',
      '.ubn-lf-takt span{font-size:12px;font-weight:700;background:#F1F4F7;color:#4B5763;border-radius:999px;padding:4px 9px;white-space:nowrap}',
      '.ubn-lf-takt span.an{background:#0E6D85;color:#fff}',
      '.ubn-lf-takt i{display:inline-block;width:10px;height:2px;background:#D5DDE4}',
      '.ubn-lf-klein{margin:9px 0 0;font-size:13px;line-height:1.5;color:#5F6B76}',
      '.ubn-lf-stufen{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}',
      '.ubn-lf-stufen span{display:flex;align-items:center;justify-content:center;gap:5px;text-align:center;font-size:12.5px;font-weight:700;padding:8px 6px;border-radius:10px;background:#F1F4F7;color:#7A8792}',
      '.ubn-lf-stufen span.jetzt{background:#0E6D85;color:#fff}',
      '.ubn-lf-stufen span.fertig{background:#E1F5EE;color:#05664A}',
      '.ubn-lf-stufen.klein span{font-size:11.5px;padding:6px 4px}',
      '.ubn-lf-fuss{padding:12px 18px 16px;display:grid;gap:9px;background:#F6F8FA;border-top:1px solid #E3E9EE}',
      '.ubn-lf-los{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;border:0;border-radius:14px;background:#0E6D85;color:#fff;font:inherit;font-weight:800;font-size:16px;padding:14px;cursor:pointer}',
      '.ubn-lf-los:hover{background:#0A4E62}',
      '.ubn-lf-los .ubn-ic{width:18px;height:18px}',
      '.ubn-lf-check{display:flex;align-items:center;justify-content:center;gap:8px;font-size:13px;color:#5F6B76;cursor:pointer}',
      /* ---------- Markenfarben: Schwarz, Rot, Gold, Türkis ---------- */
      '#ubOv .ubn-art{border:1px solid color-mix(in srgb,var(--ub,#1B9BC0) 35%,transparent)}',
      '#ubOv .ubn-art .ubn-ic{color:var(--ub,#1B9BC0)}',
      '#ubOv .ubn-luecke{border-bottom-color:var(--ub,#D42A21)!important;background:color-mix(in srgb,var(--ub,#D42A21) 9%,transparent)!important}',
      '#ubOv .ubn-satz{border-left:4px solid #E0A800}',
      /* Antwort-Buchstaben in den vier Markenfarben */
      '#ubOv .ubn-opts .ub-opt:nth-child(1)::before{background:#14181B;color:#fff}',
      '#ubOv .ubn-opts .ub-opt:nth-child(2)::before{background:#D42A21;color:#fff}',
      '#ubOv .ubn-opts .ub-opt:nth-child(3)::before{background:#E0A800;color:#14181B}',
      '#ubOv .ubn-opts .ub-opt:nth-child(4)::before{background:#1B9BC0;color:#fff}',
      '#ubOv .ubn-opts .ub-opt.sel{border-color:#14181B!important;background:#F7F7F5!important;box-shadow:0 0 0 3px rgba(224,168,0,.25)!important}',
      /* Fortschrittsbalken als Flaggenband */
      '#ubOv .ub-prog span{background:linear-gradient(90deg,#14181B 0 25%,#D42A21 25% 50%,#E0A800 50% 75%,#1B9BC0 75% 100%)!important;background-size:100% 100%!important}',
      '#ubOv .ubn-gesucht{border-color:#E8C65A!important;background:#FFFBEA!important}',
      '#ubOv .ubn-gesucht span{color:#8A6500!important}',
      /* Leitfaden */
      '.ubn-lf-kopf{background:linear-gradient(135deg,#14181B 0%,#23303A 60%,#0E6D85 100%)!important}',
      '.ubn-lf-kopf::after{content:"";position:absolute;left:0;right:0;bottom:0;height:5px;background:linear-gradient(90deg,#14181B 0 25%,#D42A21 25% 50%,#E0A800 50% 75%,#1B9BC0 75% 100%)}',
      '.ubn-lf-lv{color:#FFD24A!important}',
      '.ubn-lf-ziel{border-left-color:#E0A800!important}.ubn-lf-ziel .ubn-ic{color:#B8860B!important}',
      '.ubn-lf-ablauf li:nth-child(5n+1) .nr{background:#FFF3C4;color:#8A6500}',
      '.ubn-lf-ablauf li:nth-child(5n+2) .nr{background:#E1F3F9;color:#0E6D85}',
      '.ubn-lf-ablauf li:nth-child(5n+3) .nr{background:#FDE9E7;color:#B3241C}',
      '.ubn-lf-ablauf li:nth-child(5n+4) .nr{background:#ECEEF0;color:#14181B}',
      '.ubn-lf-ablauf li:nth-child(5n+5) .nr{background:#DDEFF3;color:#0A4E62}',
      '.ubn-lf-takt span.an{background:#D42A21!important}',
      '.ubn-lf-stufen span.jetzt{background:#14181B!important;color:#FFD24A!important}',
      '.ubn-lf-stufen span.fertig{background:#E1F3F9!important;color:#0E6D85!important}',
      '.ubn-lf-los{background:#14181B!important}.ubn-lf-los:hover{background:#000!important}.ubn-lf-los .ubn-ic{color:#FFD24A}',
      '.ubn-lf-woerter span{border:1px solid #EEE3B8;background:#FFFBEA!important}',
      /* Üben-Übersicht: jede Fertigkeit ihre Farbe, jede Stufe ihre Farbe */
      '#v-ueben .ubx-held{position:relative}',
      '#v-ueben .ubx-held::after{content:"";position:absolute;left:0;right:0;bottom:0;height:5px;background:linear-gradient(90deg,#14181B 0 25%,#D42A21 25% 50%,#E0A800 50% 75%,#1B9BC0 75% 100%)}',
      '#v-ueben .ubx-tab[data-sk="wortschatz"]{--sf:#B8860B;--sh:#FFF3C4}',
      '#v-ueben .ubx-tab[data-sk="grammatik"]{--sf:#D42A21;--sh:#FDE9E7}',
      '#v-ueben .ubx-tab[data-sk="hoeren"]{--sf:#1B9BC0;--sh:#E1F3F9}',
      '#v-ueben .ubx-tab[data-sk="aussprache"]{--sf:#14181B;--sh:#ECEEF0}',
      '#v-ueben .ubx-tab[data-sk="lesen-schreiben"]{--sf:#0E6D85;--sh:#DDEFF3}',
      '#v-ueben .ubx-tab[data-sk="shadowing"]{--sf:#B3241C;--sh:#FDE9E7}',
      '#v-ueben .ubx-tab[data-sk] svg{color:var(--sf)!important}',
      '#v-ueben .ubx-tab[data-sk].an{background:var(--sh)!important;color:#14181B!important;box-shadow:inset 0 -3px 0 var(--sf)!important}',
      '#v-ueben [data-lv="A1"]{background:#1B9BC0!important;color:#fff!important}',
      '#v-ueben [data-lv="A2"]{background:#0E6D85!important;color:#fff!important}',
      '#v-ueben [data-lv="B1"]{background:#E0A800!important;color:#14181B!important}',
      '#v-ueben [data-lv="B2"]{background:#D42A21!important;color:#fff!important}',
      '#v-ueben [data-lv="C1"]{background:#14181B!important;color:#FFD24A!important}'
    ].join('\n');
    document.head.appendChild(s);
  }
})();
