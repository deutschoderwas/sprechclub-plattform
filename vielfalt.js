/* ============================================================
   vielfalt.js — aus vorhandenem Stoff mehr Übungsformen machen

   Im Üben-Bereich gab es lange nur drei Formen: Wahlfrage, Lücke
   und Zuordnung. Wer ein Thema zweimal übte, sah beim zweiten Mal
   dieselben Aufgaben in anderer Reihenfolge. Gelernt wird so
   wenig: ein Wort, das man einmal wiedererkannt hat, kann man
   noch lange nicht schreiben.

   Diese Datei schreibt keinen neuen Inhalt. Sie nimmt, was schon
   da ist — die Wörter jedes Themas, die Beispielsätze aus
   vokabel-saetze.js, die Lückensätze der Grammatik und die
   Transkripte der Hörtexte — und baut daraus weitere Formen:

     karte       Wortkarte: Bild, Artikel, Bedeutung, Beispielsatz
     tippen      Bedeutung sehen, Wort schreiben
     buchstaben  Buchstabensalat sortieren
     artikel     der, die oder das
     order       Satzbau: Wörter in die richtige Reihenfolge
     choice      Lücke im Satz mit vier Möglichkeiten
     gap         Lücke im Satz frei schreiben (ab B1)

   Dieselben Namen wie im Vokabeltrainer, damit die Plattform eine
   Sprache spricht und nicht zwei.

   Nichts wird verdoppelt: die Aufgaben entstehen im Browser aus
   den Daten, die ohnehin geladen sind. Läuft die Datei zweimal,
   passiert beim zweiten Mal nichts (Merkmal __viel am Thema).
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 1. Kleinkram ---------- */

  function txt(s) { return String(s == null ? '' : s); }
  function eng(s) { return txt(s).replace(/\s+/g, ' ').trim(); }

  /* „der Beruf" → „Beruf"; „die Eltern (Pl.)" → „Eltern" */
  function ohneArtikel(s) {
    return eng(s).replace(/^(der|die|das)\s+/i, '').replace(/\s*\((Pl\.?|pl\.?)\)\s*$/, '').trim();
  }
  function artikelVon(s) {
    var m = /^(der|die|das)\s+/i.exec(eng(s));
    return m ? m[1].toLowerCase() : '';
  }
  /* Dateinamen der Wortbilder: klein, ohne Umlaute, ohne Leerzeichen. */
  function schluessel(s) {
    return ohneArtikel(s).toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  /* Die 196 Fotos, die wirklich in bilder/wort/ liegen. Geraten wird
     nichts — ein fehlendes Bild wäre ein grauer Kasten mitten in der
     Aufgabe. */
  var FOTO = ('abbiegen abfahrt abschluss abteilung account aengstlich ampel angebot apotheke app '
    + 'arbeitgeber arbeitnehmer arm arzt aufgeregt auto backen bad bahnhof bahnsteig balkon bargeld '
    + 'bauch baum bein beitrag berg beruf bett bewerbung bordkarte braten bus chaotisch chef dankbar '
    + 'e-mail ehrgeizig ehrlich einkaufswagen entspannt enttaeuscht erfahrung erkaeltung erleichtert '
    + 'fach fahrrad faul fenster fieber flug flughafen frustriert fussgaenger gabel geduldig gehalt '
    + 'gelangweilt geld gepaeck geradeaus geruehrt gestresst gesund gewuerz gleis gluecklich '
    + 'grosszuegig guenstig haltestelle haus hausaufgabe herd herunterladen hilfsbereit hochladen '
    + 'humorvoll internet karte kasse kleingeld klimawandel kochen koerper koffer kollegin kopf '
    + 'kostenlos krank krankmeldung kreuzung kueche kuehlen kuendigung kurs lampe launisch lebenslauf '
    + 'lehrerin link loeffel mahlzeit medikament meer messer miete muell nachricht nervoes neugierig '
    + 'note ordentlich passwort pfanne pflanze praxis preis profilbild pruefung puenktlich quittung '
    + 'rabatt rechnung recycling regen reise reisepass rezept richtung ruecken schlafzimmer schmerzen '
    + 'schnee schneiden schrank schuechtern schueler schule sehenswuerdigkeit selbstbewusst sofa sonne '
    + 'soziale-netzwerk spam speichern stadt stadtplan stelle stolz strasse streber studium stuhl '
    + 'stundenplan stur suchmaschine sympathisch teilzeit teller temperatur teppich termin teuer '
    + 'ticket tier topf traurig tuete u-bahn ueben ueberrascht ueberstunde umsteigen umwelt '
    + 'universitaet unterkunft urlaub vermieter verspaetung verstehen vertrag vorstellungsgespraech '
    + 'wald wechselgeld wind wissen wlan wohnung wohnzimmer wolke wuerzen wuetend zebrastreifen '
    + 'zeugnis zutat zuverlaessig').split(' ');
  var FOTO_DA = {};
  FOTO.forEach(function (n) { FOTO_DA[n] = 1; });
  function fotoZu(wort) {
    var k = schluessel(wort);
    return FOTO_DA[k] ? 'bilder/wort/' + k + '.jpg' : '';
  }

  /* ---------- 2. Sätze ---------- */

  /* In vokabel-saetze.js steht das Zielwort zwischen §…§. */
  function satzText(s) { return eng(txt(s).replace(/§/g, '')); }
  function markiert(s) {
    var m = txt(s).match(/§([^§]+)§/g) || [];
    return m.map(function (x) { return x.replace(/§/g, ''); });
  }
  function satzZuWort(wort) {
    var K = window.VOKABEL_SAETZE || {};
    return K[wort] || K[ohneArtikel(wort)] || K[eng(wort)] || '';
  }

  /* Ein Satz taugt zum Bauen, wenn er kurz genug ist, um ihn im Kopf
     zu behalten, und lang genug, dass Reihenfolge überhaupt eine
     Frage ist. Anführungszeichen und Gedankenstriche fliegen raus —
     als einzelne Bausteine sind sie Rätselraten. */
  function tauglich(satz, min, max) {
    var s = eng(satz);
    if (!s || /[—–„""«»…:;]/.test(s)) return null;
    if (/\d/.test(s)) return null;
    var w = s.split(' ');
    if (w.length < (min || 4) || w.length > (max || 10)) return null;
    return s;
  }

  /* Zum Bauen taugt nur ein einziger Hauptsatz. Sobald ein Komma
     kommt, gibt es zwei Teile, die man auch tauschen könnte — die
     Aufgabe hätte dann zwei richtige Lösungen und würde eine davon
     als falsch anstreichen. */
  function bauSatz(satz, mitKomma) {
    var s = tauglich(satz, 4, mitKomma ? 11 : 9);
    if (!s) return null;
    var kommas = (s.match(/,/g) || []).length;
    /* Ein Komma ist in Ordnung: es hängt am Wort davor und legt die
       Fuge fest. Zwei sind eine Verschachtelung, bei der auch andere
       Reihenfolgen richtig wären. Ohne Komma darf der Satz kürzer
       sein — dort trägt allein die Großschreibung den Anfang. */
    if (kommas > (mitKomma ? 1 : 0)) return null;
    return s;
  }

  /* Steht die Frage in ähnlicher Form schon im Thema, wird sie nicht
     noch einmal gebaut. */
  function schonGefragt(t, teil) {
    var s = String(teil || '').toLowerCase();
    if (!s) return false;
    return (t.exercises || []).some(function (e) {
      return e.type === 'choice' && String(e.q || '').toLowerCase().indexOf(s) >= 0;
    });
  }

  /* Aus den vorhandenen Lückenaufgaben eines Themas ganze Sätze
     machen: „Wir wohnen in einem ___ Haus. (klein)" wird zu
     „Wir wohnen in einem kleinen Haus." */
  function satzAusLuecke(e) {
    if (!e) return null;
    var roh = '', loesung = '';
    if (e.type === 'gap' && e.text && e.answer) { roh = e.text; loesung = e.answer; }
    /* Auch Wahlfragen sind oft Lückensätze — „___ es schneit, fahren
       wir Ski." mit „Wenn" als richtiger Möglichkeit. Sie werden hier
       genauso zu ganzen Sätzen. */
    else if (e.type === 'choice' && e.q && e.options && typeof e.answer === 'number'
      && String(e.q).indexOf('___') >= 0) { roh = e.q; loesung = e.options[e.answer]; }
    if (!roh || !loesung) return null;
    var t = eng(txt(roh).replace(/\([^)]*\)\s*$/, ''));
    if (t.indexOf('___') < 0) return null;
    return eng(t.replace(/_+/g, txt(loesung)));
  }

  /* Transkripte der Hörtexte in einzelne Sätze zerlegen. */
  function saetzeAusText(text) {
    return txt(text).split(/(?<=[.!?])\s+/).map(eng).filter(Boolean);
  }

  /* ---------- 3. Ablenker ---------- */

  /* Immer aus demselben Thema — dadurch sind sie inhaltlich nah und
     trotzdem eindeutig falsch. Feste Abstände statt Zufall, damit
     zweimal Bauen zweimal dasselbe ergibt. */
  function ablenker(liste, i, n) {
    var out = [], N = liste.length, k;
    for (k = 0; out.length < n && k < N; k++) {
      var kand = liste[(i + 3 + k * 5) % N];
      if (kand == null) continue;
      if (kand === liste[i]) continue;
      if (out.indexOf(kand) >= 0) continue;
      out.push(kand);
    }
    return out;
  }

  /* ---------- 4. Aufgaben bauen ---------- */

  function ausWoertern(t, neu) {
    var W = (t.words || []).filter(function (w) { return w && w.de; });
    if (!W.length) return;
    var infos = W.map(function (w) { return eng(w.info || ''); });
    var namen = W.map(function (w) { return eng(w.de); });

    W.forEach(function (w, i) {
      var wort = eng(w.de);
      var kern = ohneArtikel(wort);
      var art = artikelVon(wort);
      var info = eng(w.info || '');
      var foto = fotoZu(wort);
      var roh = satzZuWort(wort);
      var satz = roh ? satzText(roh) : '';

      /* Die Wortkarte: einmal alles auf einen Blick. Sie wird nicht
         bewertet — sie ist der Moment vor der Frage. */
      neu.push({
        type: 'karte', w: wort, wort: kern, art: art, info: info,
        emoji: w.emoji || '', img: foto, satz: roh || '', level: t.level
      });

      /* Schreiben können ist mehr als wiedererkennen. */
      if (info && kern.length >= 3) {
        neu.push({
          type: 'tippen', w: wort, answer: wort,
          alts: [kern, kern.toLowerCase()], info: info, emoji: w.emoji || '',
          img: foto, tip: art ? 'Mit Artikel, zum Beispiel: ' + art + ' …' : '', level: t.level
        });
      }

      /* Buchstabensalat: nur echte Einzelwörter, sonst wird es zum
         Puzzle mit Leerzeichen. */
      if (/^[A-Za-zÄÖÜäöüß-]{4,12}$/.test(kern)) {
        neu.push({
          type: 'buchstaben', w: wort, answer: kern, info: info,
          emoji: w.emoji || '', img: foto, level: t.level
        });
      }

      /* der, die oder das — der Klassiker, an dem es hängt. */
      if (art) {
        neu.push({
          type: 'artikel', w: wort, wort: kern, answer: art,
          satz: roh || '', emoji: w.emoji || '', img: foto, level: t.level
        });
      }

      /* Bedeutung → Wort, mit drei Nachbarn aus demselben Thema. */
      if (info && namen.length >= 4 && !schonGefragt(t, info)) {
        neu.push({
          type: 'choice', w: wort, img: foto,
          q: 'Welches Wort passt: „' + info + '"?',
          options: [wort].concat(ablenker(namen, i, 3)),
          answer: 0, explain: wort + ' = ' + info + '.', level: t.level
        });
      }

      /* Der Beispielsatz wird zweimal genutzt: einmal als Lücke, in
         der man wählt, einmal als Satz, den man baut. */
      if (satz) {
        var mk = markiert(roh);
        var kurz = bauSatz(satz);
        if (mk.length === 1 && infos.length >= 4) {
          var luecke = eng(satzText(txt(roh).replace(/§[^§]+§/, '___')));
          var schwer = /B2|C1/.test(txt(t.level));
          if (schwer) {
            neu.push({
              type: 'gap', w: wort, text: luecke, answer: mk[0],
              alts: [kern, wort], hint: info, explain: wort + ' = ' + info + '.', level: t.level
            });
          } else {
            neu.push({
              type: 'choice', w: wort, img: foto,
              q: '🧩 Was fehlt? ' + luecke,
              options: [mk[0]].concat(ablenker(namen.map(ohneArtikel), i, 3)),
              answer: 0, explain: satz, level: t.level
            });
          }
        }
        if (kurz) {
          neu.push({
            type: 'order', w: wort, answer: kurz,
            hint: 'Darin steckt: ' + wort, level: t.level
          });
        }
      }
    });
  }

  /* Grammatik hat keine Wortliste, aber gute Lückensätze. Aus jedem
     wird ein Satz zum Bauen und eine Wahlfrage — die falschen
     Möglichkeiten sind die Lösungen der Nachbaraufgaben und damit
     immer aus derselben Grammatik. */
  function ausGrammatik(t, neu) {
    var luecken = (t.exercises || []).filter(function (e) {
      return e.type === 'gap' && e.text && e.answer && String(e.text).indexOf('___') >= 0;
    });
    /* Die Wahlfragen mit Lücke liefern Sätze für den Satzbau und für
       die Merkkarte — sie bleiben aber selbst, wie sie sind. */
    var mitSatz = luecken.concat((t.exercises || []).filter(function (e) {
      return e.type === 'choice' && satzAusLuecke(e);
    }));
    if (luecken.length < 4 && mitSatz.length < 4) return;
    var loesungen = luecken.map(function (e) { return eng(e.answer); });

    mitSatz.forEach(function (e, i) {
      var voll = satzAusLuecke(e);
      var kurz = voll ? bauSatz(voll, 1) : null;
      if (kurz) {
        neu.push({
          type: 'order', answer: kurz,
          hint: e.explain ? String(e.explain).slice(0, 90) : 'Achte auf die Endung.',
          level: t.level
        });
      }
      if (e.type !== 'gap') return;
      var falsch = ablenker(loesungen, i, 3).filter(function (x) {
        return x.toLowerCase() !== eng(e.answer).toLowerCase();
      });
      if (falsch.length === 3) {
        neu.push({
          type: 'choice',
          q: '🧩 Was passt? ' + eng(String(e.text).replace(/_+/g, '_____')),
          options: [eng(e.answer)].concat(falsch),
          answer: 0,
          explain: e.explain || ('Richtig: ' + e.answer),
          level: t.level
        });
      }
    });

    /* Vier Sätze, vier Formen, alles auf einmal zuordnen — das ist
       die Übung, in der man das Muster sieht statt es zu raten.
       Nur Aufgaben mit klar verschiedenen Lösungen. */
    var reihen = [];
    luecken.forEach(function (e) {
      var a = eng(e.answer);
      if (a.split(' ').length > 2) return;
      reihen.push({ l: eng(String(e.text).replace(/_+/g, '…')), r: a });
    });
    for (var b = 0; b + 4 <= reihen.length && b < 12; b += 4) {
      var vier = reihen.slice(b, b + 4);
      /* Dieselbe Lösung darf in zwei Sätzen stehen — „weil" passt oft
         mehrfach, und dann ist auch beides richtig. Nur ganz gleiche
         Vierergruppen wären sinnlos. */
      var verschieden = {};
      vier.forEach(function (r) { verschieden[r.r.toLowerCase()] = 1; });
      if (Object.keys(verschieden).length < 3) continue;
      neu.push({
        type: 'match', intro: 'Welche Form gehört in welchen Satz?',
        pairs: vier, level: t.level
      });
    }

    /* Eine Merkkarte je Thema: die Regel in drei echten Sätzen aus
       genau diesem Thema, jeder mit seiner Erklärung. Sie steht am
       Anfang der Runde — man liest, bevor man rät. */
    var bsp = [];
    mitSatz.forEach(function (e) {
      if (bsp.length >= 3) return;
      var voll = satzAusLuecke(e);
      if (!voll) return;
      if (bsp.some(function (x) { return x.satz === voll; })) return;
      bsp.push({ satz: voll, warum: e.explain ? eng(e.explain) : '' });
    });
    if (bsp.length >= 2) {
      neu.push({
        type: 'karte', regel: 1, wort: eng(t.title || 'Die Regel'),
        info: 'So sieht es im Satz aus:', beispiele: bsp,
        emoji: t.emoji || '🧩', level: t.level
      });
    }
  }

  /* Hören: die Transkripte sind gesprochene Sprache in ganzen
     Sätzen. Wo ein Wort des Themas darin vorkommt, entsteht daraus
     eine Lücke und ein Satz zum Bauen — dieselbe Stimme, dieselbe
     Situation, eine andere Frage. */
  function ausTranskripten(t, neu) {
    var W = (t.words || []).map(function (w) { return eng(w.de); });
    var kerne = W.map(ohneArtikel).filter(function (k) { return k.length >= 4; });
    if (!kerne.length) return;
    var texte = (t.exercises || []).filter(function (e) { return e.type === 'listen' && e.transcript; });
    var gebaut = {};

    texte.forEach(function (e) {
      saetzeAusText(e.transcript).forEach(function (satz) {
        var kurz = tauglich(satz, 5, 11);
        if (!kurz) return;
        var baubar = bauSatz(kurz);
        for (var i = 0; i < kerne.length; i++) {
          var k = kerne[i];
          if (gebaut[k]) continue;
          var re = new RegExp('(^|\\s)(' + k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(\\W|$)', 'i');
          if (!re.test(kurz)) continue;
          gebaut[k] = 1;
          var mitLuecke = kurz.replace(re, '$1___$3');
          neu.push({
            type: 'gap', w: W[i], text: mitLuecke, answer: k,
            alts: [k.toLowerCase(), W[i]], hint: '🎧 Das Wort kam im Hörtext vor.',
            explain: kurz, level: t.level
          });
          if (baubar) {
            neu.push({
              type: 'order', w: W[i], answer: baubar,
              hint: 'Aus dem Hörtext: ' + (e.label || ''), level: t.level
            });
          }
          return;
        }
      });
    });
  }

  /* ---------- 5. Anhängen ---------- */

  function thema(sk, t) {
    if (!t || t.__viel) return 0;
    t.__viel = 1;
    var neu = [];
    if (sk.id === 'grammatik') ausGrammatik(t, neu);
    if (sk.id === 'hoeren') ausTranskripten(t, neu);
    ausWoertern(t, neu);
    if (!neu.length) return 0;
    neu.forEach(function (e) { e.__v = 1; });   /* hier gebaut, nicht von Hand */
    t.exercises = (t.exercises || []).concat(neu);
    return neu.length;
  }

  function alle() {
    var U = window.UEBUNGEN;
    if (!U || !U.skills || !U.skills.length) return 0;
    var z = 0;
    U.skills.forEach(function (sk) {
      if (sk.id === 'shadowing') return;
      (sk.themes || []).forEach(function (t) { z += thema(sk, t); });
    });
    return z;
  }

  window.VIELFALT = { alle: alle, thema: thema, fotoZu: fotoZu, satzZuWort: satzZuWort };

  /* Die Datei wird in konto.html nach allen Übungsdaten geladen. Das
     Bauen dauert auf einem älteren Handy den Bruchteil einer Sekunde
     — trotzdem soll es nicht vor der ersten Anzeige passieren. Darum
     in einer ruhigen Minute, spätestens nach einer Sekunde. Wer den
     Üben-Bereich vorher öffnet, löst es selbst aus (ueben.js). */
  function anstossen() {
    if (alle()) return;
    var versuche = 0;
    var takt = setInterval(function () {
      if (alle() || ++versuche > 100) clearInterval(takt);
    }, 120);
  }
  if (window.requestIdleCallback) window.requestIdleCallback(anstossen, { timeout: 1000 });
  else setTimeout(anstossen, 60);
})();
