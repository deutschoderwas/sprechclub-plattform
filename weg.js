/* ============================================================
   weg.js — Der eine Weg

   Fünf Systeme beantworteten bisher dieselbe Frage: „Was mache ich
   als Nächstes?" — die Kursbibliothek, der Stufenkurs A1/A2, die
   54 Lernbereiche, der Lernplan und die alten Themen. Jedes mit
   eigenem nächsten Schritt, eigenem Fortschrittsbalken und eigenem
   Speicherort. Wer eine Lektion auf dem einen Weg beendete und am
   nächsten Tag über einen anderen Knopf hereinkam, stand wieder bei
   null Prozent.

   Ab hier gilt: DIE KURSBIBLIOTHEK IST DER WEG. Sie ist die einzige
   Reihe, die alle Niveaus abdeckt (A1 bis C2) und die Wege für Beruf
   und Prüfung enthält. Die Bereiche bleiben die Landschaft daneben,
   Üben und Vokabeltrainer bleiben das Training — aber der Weg ist
   einer.

   Nach außen:
     window.kursStand([weg|niveau])  — was ist als Nächstes dran?
     window.kursOeffnen(nr, weg)     — diese Lektion öffnen
     window.kursUebersicht(weg)      — die Lektionsliste des Weges
     window.meinWeg()                — welcher Weg ist meiner?
     window.wegSetzen(id)            — diesen Weg zu meinem machen

   kursStand() gab es an neun Stellen als Aufruf und nirgends als
   Funktion; kurs.js beantwortet sie jetzt nur noch für den
   Stufenkurs (stufenkursStand). Diese Datei wird NACH kurs.js und
   NACH start.js geladen und ist danach die Antwort für alle.
   ============================================================ */
(function () {
  'use strict';

  var NIVEAUWEGE = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
  var NAME = {
    a1: 'Alltagsdeutsch A1', a2: 'Alltagsdeutsch A2', b1: 'Alltagsdeutsch B1',
    b2: 'Alltagsdeutsch B2', c1: 'Alltagsdeutsch C1', c2: 'Alltagsdeutsch C2',
    goethetelc: 'Goethe & telc', telcmed: 'telc Medizin', dtz: 'DTZ',
    medizin: 'Deutsch für Mediziner', pflege: 'Deutsch für die Pflege',
    buero: 'Deutsch für Büro & Logistik'
  };
  var NIVEAU_ZU_WEG = { A1: 'a1', A2: 'a2', B1: 'b1', B2: 'b2', C1: 'c1', C2: 'c2' };

  function wege() { return window.KB_LESSONS || {}; }
  function lektionen(id) { return (wege()[id] || []); }
  function gibtEs(id) { return !!(id && lektionen(id).length); }

  function erledigt() {
    try { return JSON.parse(localStorage.getItem('dow_lek') || '{}'); }
    catch (e) { return {}; }
  }
  function istFertig(id, nr) {
    var d = erledigt()[id + '-' + nr];
    return !!(d && d.done);
  }

  /* Die gemerkte Stufe: erst das Profil, dann der Lernbereich, dann
     der Niveautest. Steht nirgends etwas, fangen wir bei A1 an —
     nicht in der Mitte. */
  function meineStufe() {
    var n = '';
    try { n = (window.profile && (window.profile.level || window.profile.target_level)) || ''; } catch (e) {}
    if (!n) { try { n = (window.lsGet && window.lsGet('niveau', '')) || ''; } catch (e) {} }
    if (!n) {
      try { var t = JSON.parse(localStorage.getItem('dow_niveautest') || 'null'); if (t && t.stufe) n = t.stufe; } catch (e) {}
    }
    var m = /([ABC][12])/.exec(String(n).toUpperCase());
    return m ? m[1] : 'A1';
  }

  /* Mein Weg: was ich zuletzt ausdrücklich geöffnet habe. Sonst der
     Weg, auf dem schon etwas angefangen und noch nicht fertig ist —
     sonst der Weg meiner Stufe. */
  function meinWeg() {
    var g = '';
    try { g = localStorage.getItem('dow_weg') || ''; } catch (e) {}
    if (gibtEs(g)) return g;

    var d = erledigt(), bester = '', meiste = 0;
    Object.keys(wege()).forEach(function (id) {
      var L = lektionen(id), f = 0;
      L.forEach(function (l) { if (d[id + '-' + l.n] && d[id + '-' + l.n].done) f++; });
      if (f > 0 && f < L.length && f > meiste) { meiste = f; bester = id; }
    });
    if (bester) return bester;

    var w = NIVEAU_ZU_WEG[meineStufe()] || 'a1';
    return gibtEs(w) ? w : 'a1';
  }
  window.meinWeg = meinWeg;

  function wegSetzen(id) {
    if (!gibtEs(id)) return false;
    try { localStorage.setItem('dow_weg', id); } catch (e) {}
    return true;
  }
  window.wegSetzen = wegSetzen;

  function titelVon(id) {
    var t = NAME[id] || '';
    try {
      (window.KURSBIB || []).forEach(function (k) {
        (k.courses || []).forEach(function (c) { if (c.id === id && c.t) t = c.t; });
      });
    } catch (e) {}
    return t || 'Dein Kurs';
  }
  /* Der Lernbereich setzt die Stufe selbst davor („A1 — …"). Dort
     würde sonst „A1 — Alltagsdeutsch A1" stehen. */
  function titelOhneStufe(id) {
    return titelVon(id).replace(/\s+[ABC][12]$/, '');
  }
  function stufeVon(id) {
    if (NIVEAUWEGE.indexOf(id) >= 0) return id.toUpperCase();
    var b = '';
    try {
      (window.KURSBIB || []).forEach(function (k) {
        (k.courses || []).forEach(function (c) { if (c.id === id && c.badge) b = c.badge; });
      });
    } catch (e) {}
    return b || '';
  }
  function bildVon(id, nr) {
    return 'illu/' + id + '-l' + (nr || 1) + '.jpg';
  }

  /* Was ist als Nächstes dran? Ohne Angabe: mein Weg. Mit Angabe
     ('B1' oder 'pflege'): genau der — und wenn es ihn nicht gibt,
     null statt eines erfundenen Ersatzes. */
  function stand(wunsch) {
    try {
      var id = '';
      if (wunsch) {
        var w = String(wunsch);
        id = NIVEAU_ZU_WEG[w.toUpperCase()] || w.toLowerCase();
        if (!gibtEs(id)) return null;
      } else {
        id = meinWeg();
        if (!gibtEs(id)) return null;
      }
      var L = lektionen(id), d = erledigt();
      var offen = null, f = 0, i;
      for (i = 0; i < L.length; i++) {
        if (d[id + '-' + L[i].n] && d[id + '-' + L[i].n].done) f++;
        else if (!offen) offen = L[i];
      }
      var l = offen || L[L.length - 1];
      return {
        weg: id,
        niveau: stufeVon(id) || meineStufe(),
        id: l.n,
        nr: l.n,
        lektion: l.t || ('Lektion ' + l.n),
        ziel: titelVon(id),
        titel: titelOhneStufe(id),
        kursname: titelVon(id),
        bild: bildVon(id, l.n),
        prozent: L.length ? Math.round(f / L.length * 100) : 0,
        anzahl: L.length,
        fertig: f,
        angefangen: f > 0
      };
    } catch (e) { return null; }
  }
  window.kursStand = stand;

  /* Eine Lektion öffnen — dieselbe Seite, die auch die Bibliothek
     öffnet. Vorher führte dieser Knopf in den Stufenkurs, also auf
     eine zweite Lektion mit demselben Namen. */
  window.kursOeffnen = function (nr, wegOderNiveau) {
    var s = stand(wegOderNiveau) || stand();
    if (!s) return false;
    var n = Number(nr) || s.nr;
    try { wegSetzen(s.weg); } catch (e) {}
    location.href = 'lektion.html?k=' + encodeURIComponent(s.weg) + '&l=' + encodeURIComponent(n);
    return false;
  };

  /* Die Lektionsliste des Weges — in der Bibliothek, wo sie hingehört. */
  window.kursUebersicht = function (wegOderNiveau) {
    var s = stand(wegOderNiveau) || stand();
    if (!s) return false;
    wegSetzen(s.weg);
    try { if (window.go) window.go('kurse'); } catch (e) {}
    setTimeout(function () {
      try { if (window.kbOpen) window.kbOpen(s.weg); } catch (e) {}
    }, 40);
    return false;
  };

  /* Wer in der Bibliothek einen Kurs öffnet, sagt damit: das ist mein
     Weg. Danach zeigt die Startseite genau diesen. */
  (function () {
    var versuche = 0;
    var takt = setInterval(function () {
      if (typeof window.kbOpen === 'function' && !window.kbOpen.__weg) {
        var alt = window.kbOpen;
        var neu = function (id) { wegSetzen(id); return alt.apply(this, arguments); };
        neu.__weg = true;
        window.kbOpen = neu;
        clearInterval(takt);
      }
      if (++versuche > 100) clearInterval(takt);
    }, 120);
  })();
})();
