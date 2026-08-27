/* ============================================================
   app-lernen.js — dieselbe Ordnung wie auf der Plattform, in der App

   In der App fing das Lernen bisher mit einem Vokabelpfad an, auf
   der Plattform mit etwas ganz anderem. Wer zwischen beiden
   wechselte, musste sich zweimal zurechtfinden.

   Jetzt stehen in der App dieselben drei Türen wie im
   Schülerbereich — aus derselben Datei, lern-struktur.js:

     Für die Prüfung · Für die Freizeit · Für den Beruf

   Dahinter die Bereiche als Liste, und in jedem Bereich das, was
   die App wirklich kann: die Situationen mit Amanda zum Sprechen,
   die Wörter zum Hören und die Lektion zum Weiterlesen.

   Der Vokabelpfad ist nicht weg — er steht darunter, wo ein
   Werkzeug hingehört.

   Wird NACH dem Hauptskript von app.html geladen.
   ============================================================ */
(function () {
  'use strict';
  if (window.__appLernen) return;
  window.__appLernen = true;

  function E(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  /* Die Nummer vor der Ueberschrift sagt, in welcher Reihenfolge man
     hier vorgeht — dieselbe wie auf der Plattform. */
  function nr(n) { return '<span class="ls-app-nr">' + n + '</span>'; }
  function schirm() { return $('s-lernen'); }
  function LS() { return window.LERNSTRUKTUR; }

  /* Inhalte kommen nach, wenn sie gebraucht werden. Die App soll
     nicht beim Start eine halbe Megabyte laden, die vielleicht
     niemand öffnet. */
  function nachladen(datei, da) {
    if (da()) return Promise.resolve(true);
    if (window.inhaltLaden) return window.inhaltLaden(datei, da);
    return new Promise(function (fertig) {
      var s = document.createElement('script');
      s.src = datei;
      s.onload = function () { fertig(da()); };
      s.onerror = function () { fertig(false); };
      document.head.appendChild(s);
    });
  }
  var daBereiche = function () { return Array.isArray(window.BEREICHE) && window.BEREICHE.length; };
  var daDialoge = function () { return Array.isArray(window.DIALOGE) && window.DIALOGE.length; };

  /* Die zehn neueren Situationen stehen in dialoge-neu.js. Die App
     lud bisher nur dialoge.js — dann fehlten sie hier, waehrend die
     Plattform sie zeigt. Wer dialoge.js laedt, bekommt jetzt beides,
     egal von welcher Stelle aus. */
  (function nachtrag() {
    var alt = window.inhaltLaden;
    if (typeof alt !== 'function') return setTimeout(nachtrag, 150);
    if (alt.__mitNeu) return;
    var neu = function (datei, da) {
      var p = alt.apply(this, arguments);
      if (String(datei).indexOf('dialoge.js') < 0) return p;
      return p.then(function (ok) {
        if (!ok) return ok;
        var schon = (window.DIALOGE || []).some(function (d) { return d.id === 'einkaufszettel'; });
        if (schon) return ok;
        return alt('dialoge-neu.js', function () {
          return (window.DIALOGE || []).some(function (d) { return d.id === 'einkaufszettel'; });
        }).then(function () { return ok; });
      });
    };
    neu.__mitNeu = true;
    window.inhaltLaden = neu;
  })();
  var daUebungen = function () { return !!(window.UEBUNGEN && window.UEBUNGEN.skills); };

  /* ---------- 1. Die drei Türen in den Lernen-Schirm ---------- */
  function tuerenEinsetzen() {
    var s = schirm();
    if (!s || !LS() || s.querySelector('.ls-tueren')) return;
    LS().stil();
    var kasten = document.createElement('div');
    kasten.className = 'ls-block';
    kasten.innerHTML =
      '<h2 class="a" style="margin-top:6px">Wofür lernst du gerade?</h2>'
      + LS().tuerenHtml(function (t) { return "appTuer('" + t.id + "')"; });
    // unter das Tagesziel, über den Lernpfad
    var ziel = s.querySelector('.ziel');
    if (ziel && ziel.nextSibling) s.insertBefore(kasten, ziel.nextSibling);
    else s.appendChild(kasten);
  }

  /* Die Zahlen in den Türen kommen aus bereiche.js und dialoge.js.
     Sind sie noch nicht da, stehen die Türen zuerst ohne Zahlen und
     werden danach still ergänzt. */
  function zahlenNachladen() {
    if (daBereiche() && daDialoge()) return;
    Promise.all([
      nachladen('bereiche.js', daBereiche),
      nachladen('dialoge.js', daDialoge)
    ]).then(function () {
      var s = schirm();
      if (!s || !s.classList.contains('an')) return;
      var alt = s.querySelector('.ls-block');
      if (alt) { alt.remove(); tuerenEinsetzen(); }
    });
  }

  /* ---------- 2. Eine Tür öffnen ---------- */
  window.appTuer = function (was) {
    if (was === 'pruefung') { if (window.pruefStart) window.pruefStart(); return; }
    appBereiche(was);
  };

  function kopfZurueck(text, klick) {
    return '<button class="ls-app-zurueck" type="button" onclick="' + klick + '">← ' + E(text) + '</button>';
  }

  function appBereiche(weg) {
    var s = schirm(); if (!s) return;
    appStil();
    if (!daBereiche()) {
      s.innerHTML = '<div class="leer"><div class="em">📚</div>Die Bereiche werden geladen …</div>';
      Promise.all([nachladen('bereiche.js', daBereiche), nachladen('dialoge.js', daDialoge)])
        .then(function () { appBereiche(weg); });
      return;
    }
    var liste = window.BEREICHE.filter(function (b) { return b.weg === weg; });
    var tuer = (LS() ? LS().tueren() : []).filter(function (t) { return t.id === weg; })[0] || {};
    var gruppen = [], inG = {};
    liste.forEach(function (b) {
      var g = b.gr || 'alle';
      if (!inG[g]) { inG[g] = []; gruppen.push(g); }
      inG[g].push(b);
    });

    s.innerHTML = kopfZurueck('Lernbereich', 'appLernenZurueck()')
      + '<h1 class="t">' + E(tuer.titel || 'Bereiche') + '</h1>'
      + '<p class="u">' + E(tuer.text || '') + '</p>'
      + gruppen.map(function (g) {
          return '<h2 class="a">' + E(gruppenName(g)) + '</h2><div class="ls-app-liste">'
            + inG[g].map(zeile).join('') + '</div>';
        }).join('');
    try { window.scrollTo(0, 0); } catch (e) {}
  }
  window.appBereiche = appBereiche;

  function gruppenName(g) {
    var N = {
      einkaufen: 'Einkaufen & Essen', gesundheit: 'Gesundheit', papiere: 'Ämter & Papiere',
      unterwegs: 'Unterwegs & Wohnen', menschen: 'Menschen & Gefühle',
      ueberall: 'Gilt in jedem Job', feld: 'Dein Berufsfeld', alle: 'Bereiche'
    };
    return N[g] || g;
  }

  function zeile(b) {
    var d = (b.dlg || []).length;
    var teile = [];
    if (d) teile.push(d + (d === 1 ? ' Situation' : ' Situationen'));
    if (b.lek) teile.push('Lektion');
    return '<button class="ls-app-z" type="button" onclick="appBereich(\'' + E(b.id) + '\')">'
      + (b.bild ? '<img src="amanda/' + E(b.bild) + '.webp" alt="" loading="lazy" onerror="this.remove()">' : '<span class="pl"></span>')
      + '<span class="tx"><b>' + E(b.t || b.beruf || b.id) + '</b>'
      + (b.u ? '<span>' + E(b.u) + '</span>' : '')
      + '<em>' + E(teile.join(' · ')) + (b.lvl ? ' · ' + E(b.lvl) : '') + '</em></span>'
      + '<span class="pf">›</span></button>';
  }

  /* ---------- 3. Ein Bereich ---------- */
  window.appBereich = function (id) {
    var s = schirm(); if (!s) return;
    appStil();
    var b = (window.BEREICHE || []).filter(function (x) { return x.id === id; })[0];
    if (!b) return;

    var dlg = (b.dlg || []).map(function (x) {
      return (window.DIALOGE || []).filter(function (d) { return d.id === x; })[0];
    }).filter(Boolean);

    var h = kopfZurueck('Zurück', "appBereiche('" + E(b.weg) + "')")
      + '<h1 class="t">' + E(b.t || b.beruf || b.id) + '</h1>'
      + (b.u ? '<p class="u">' + E(b.u) + '</p>' : '');

    // Die Woerter kommen zuerst — dieselbe Reihenfolge wie auf der
    // Plattform: erst kennen, dann sprechen, dann die ganze Lektion.
    h += '<div id="lsWoerter"></div>';

    if (dlg.length) {
      h += '<h2 class="a">' + nr(2) + 'Sprich es mit Amanda durch</h2>'
        + '<p class="u" style="margin-top:-6px">Sie fängt an, du antwortest.</p>'
        + '<div class="ls-app-liste">'
        + dlg.map(function (d) {
            return '<button class="ls-app-z" type="button" onclick="appDialog(\'' + E(d.id) + '\')">'
              + '<span class="em">' + (d.em || '💬') + '</span>'
              + '<span class="tx"><b>' + E(d.titel) + '</b>'
              + (d.ort ? '<span>' + E(d.ort) + '</span>' : '')
              + '<em>' + E(d.lvl || '') + (d.dauer ? ' · ' + E(d.dauer) : '') + '</em></span>'
              + '<span class="pf">›</span></button>';
          }).join('')
        + '</div>';
    }

    if (b.lek) {
      h += '<h2 class="a">' + nr(3) + 'Alles zusammen in der Lektion</h2>'
        + '<button class="ls-app-gross" type="button" onclick="location.href=\'' + E(b.lek) + '\'">'
        + '<b>Ganze Lektion öffnen</b>'
        + '<span>Einstieg, Wortschatz, Dialoge, Debatte, Sprechen und Übungen — auf einer Seite.</span></button>';
    }

    s.innerHTML = h;
    try { window.scrollTo(0, 0); } catch (e) {}
    woerterZeigen(b);
  };

  /* Die Wörter kommen aus uebungen.js — die Datei ist gross,
     deshalb erst hier und nur einmal. */
  function woerterZeigen(b) {
    var kasten = $('lsWoerter');
    if (!kasten || !(b.ws || []).length) return;
    function malen() {
      var U = window.UEBUNGEN;
      if (!U || !U.skills) { kasten.innerHTML = ''; return; }
      var ws = null;
      for (var i = 0; i < U.skills.length; i++) if (U.skills[i].id === 'wortschatz') ws = U.skills[i];
      if (!ws) { kasten.innerHTML = ''; return; }
      // Zwei Themen koennen dasselbe Wort enthalten — hier steht es
      // dann trotzdem nur einmal.
      var woerter = [], schon = {};
      (b.ws || []).forEach(function (tid) {
        (ws.themes || []).forEach(function (t) {
          if (t.id !== tid) return;
          (t.words || []).forEach(function (w) {
            var k = String(w.de || '').trim().toLowerCase();
            if (!k || schon[k]) return;
            schon[k] = 1; woerter.push(w);
          });
        });
      });
      if (!woerter.length) { kasten.innerHTML = ''; return; }
      kasten.innerHTML = '<h2 class="a">' + nr(1) + 'Die Wörter dazu</h2>'
        + '<p class="u" style="margin-top:-6px">Tipp auf ein Wort, um es zu hören.</p>'
        + '<div class="ls-app-woerter">'
        + woerter.slice(0, 24).map(function (w) {
            return '<button class="ls-app-w" type="button" onclick="appWort(' + JSON.stringify(w.de).replace(/"/g, '&quot;') + ')">'
              + '<span class="em">' + (w.emoji || '🔤') + '</span>'
              + '<span><b>' + E(w.de) + '</b><span>' + E(w.info || '') + '</span></span></button>';
          }).join('')
        + '</div>';
    }
    if (daUebungen()) { malen(); return; }
    kasten.innerHTML = '<h2 class="a">' + nr(1) + 'Die Wörter dazu</h2><div class="leer">Wird geladen …</div>';
    Promise.all([
      nachladen('uebungen.js', daUebungen),
      nachladen('wortschatz-neu.js', function () { return daUebungen(); })
    ]).then(malen);
  }

  window.appWort = function (text) {
    try {
      if (window.sagen) return window.sagen(text, { rolle: 'amanda' });
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'de-DE'; u.rate = .9;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    } catch (e) {}
  };

  window.appDialog = function (id) {
    if (window.zeige) window.zeige('sprechen');
    setTimeout(function () { if (window.dialogStart) window.dialogStart(id); }, 30);
  };

  window.appLernenZurueck = function () {
    if (window.malLernen) window.malLernen();
    try { window.scrollTo(0, 0); } catch (e) {}
  };

  /* ---------- Aussehen, das es in der App noch nicht gab ---------- */
  function appStil() {
    if ($('ls-app-stil')) return;
    var s = document.createElement('style');
    s.id = 'ls-app-stil';
    s.textContent = [
      '.ls-app-zurueck{background:none;border:0;color:var(--mute,#7A7268);font:inherit;font-weight:700;',
      '  font-size:14px;padding:6px 0;margin-bottom:2px;cursor:pointer;}',
      '.ls-app-liste{display:flex;flex-direction:column;gap:8px;margin-bottom:20px;}',
      '.ls-app-z{display:flex;align-items:center;gap:11px;width:100%;text-align:left;cursor:pointer;',
      '  background:var(--card,#fff);border:1px solid var(--line,#EDE9E1);border-radius:16px;',
      '  padding:9px 12px 9px 9px;font:inherit;}',
      '.ls-app-z:active{transform:scale(.985);}',
      '.ls-app-z img{width:56px;height:56px;border-radius:12px;object-fit:cover;flex:none;background:var(--line,#EDE9E1);}',
      '.ls-app-z .pl{width:56px;height:56px;border-radius:12px;background:var(--line,#EDE9E1);flex:none;}',
      '.ls-app-z .em{width:44px;height:44px;border-radius:12px;background:var(--line,#EDE9E1);flex:none;',
      '  display:grid;place-items:center;font-size:21px;}',
      '.ls-app-z .tx{flex:1;min-width:0;}',
      '.ls-app-z b{display:block;font-size:15px;line-height:1.25;margin-bottom:2px;}',
      '.ls-app-z .tx > span{display:block;font-size:12.5px;color:var(--mute,#7A7268);line-height:1.35;',
      '  overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}',
      '.ls-app-z em{display:block;font-style:normal;font-size:11.5px;color:var(--mute,#9A948B);margin-top:3px;opacity:.75;}',
      '.ls-app-z .pf{color:var(--mute,#B4ADA3);font-size:20px;flex:none;}',
      '.ls-app-gross{display:block;width:100%;text-align:left;cursor:pointer;background:var(--card,#fff);',
      '  border:1px solid var(--line,#EDE9E1);border-radius:18px;padding:14px 16px;font:inherit;margin-bottom:22px;}',
      '.ls-app-gross b{display:block;font-size:16px;margin-bottom:3px;}',
      '.ls-app-gross span{display:block;font-size:13px;color:var(--mute,#7A7268);line-height:1.4;}',
      '.ls-app-woerter{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:22px;}',
      '.ls-app-w{display:flex;gap:8px;align-items:flex-start;text-align:left;cursor:pointer;font:inherit;',
      '  background:var(--card,#fff);border:1px solid var(--line,#EDE9E1);border-radius:14px;padding:9px 10px;}',
      '.ls-app-w .em{font-size:18px;line-height:1.2;flex:none;}',
      '.ls-app-w b{display:block;font-size:13.5px;line-height:1.25;}',
      '.ls-app-w span span{display:block;font-size:11.5px;color:var(--mute,#7A7268);line-height:1.3;}',
      '.ls-app-nr{display:inline-grid;place-items:center;width:23px;height:23px;border-radius:50%;',
      '  background:#1990A4;color:#fff;font-size:13px;font-weight:800;margin-right:8px;vertical-align:1px;}',
      '@media(max-width:360px){.ls-app-woerter{grid-template-columns:1fr;}}'
    ].join('');
    document.head.appendChild(s);
  }

  /* ---------- Einhängen ---------- */
  function einhaengen() {
    if (typeof window.malLernen !== 'function') return setTimeout(einhaengen, 120);
    var alt = window.malLernen;
    window.malLernen = function () {
      alt.apply(this, arguments);
      try { tuerenEinsetzen(); zahlenNachladen(); } catch (e) {}
    };
    // Falls der Lernen-Schirm schon steht
    try { if (schirm() && schirm().classList.contains('an') && schirm().innerHTML) { tuerenEinsetzen(); zahlenNachladen(); } } catch (e) {}
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', einhaengen, { once: true });
  else einhaengen();
})();
