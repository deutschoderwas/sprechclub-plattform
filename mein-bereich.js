/* ============================================================
   mein-bereich.js — die eigene Akte des Schülers

   Bisher stand unter „Mein Bereich" nur die Abzeichen-Wand. Hier
   kommt alles zusammen, was dieser eine Mensch auf der Plattform
   gemacht hat: seine Mitgliedschaft, der Unterricht, den er besucht
   hat, wo er im Kurs steht, seine Wörter, seine Texte, seine Fehler
   und das Material aus seinen Stunden.

   Es ist dieselbe Akte, die die Lehrkraft im Admin sieht — nur aus
   seiner Sicht und in seiner Sprache.

   Was schon im Speicher liegt (Buchungen, Material, Übungsstand),
   wird sofort gezeichnet. Die vier Tabellen, die nur hier gebraucht
   werden (Korrekturen, Übungsstand je Fertigkeit, Fehler-Trainer,
   Lektionen), tragen sich danach nach.
   ============================================================ */
(function(){
  'use strict';

  function E(x){ return String(x==null?'':x).replace(/[&<>"']/g,function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function T(k, d){ return '<span data-i18n="'+k+'">'+d+'</span>'; }

  var CSS = ''
  + '#v-fortschritt .mb{display:flex;flex-direction:column;gap:16px}'
  + '#v-fortschritt .mb *{box-sizing:border-box}'
  + '.mb{--tint:#10627A;--ink:#14181B;--leise:#5A6B72;--linie:#E7ECEE;--linie2:#F1F5F6;'
  +     '--gruen:#0F7B5A;--rot:#D42A21;--gold:#C9A200}'

  /* Kopf */
  + '.mb-kopf{background:linear-gradient(135deg,#F6FCFE,#FFFFFF);border:1px solid #BDE7F2;'
  +   'border-radius:18px;padding:18px 20px;display:flex;gap:16px;align-items:center;flex-wrap:wrap}'
  + '.mb-kopf .wer{flex:1;min-width:200px}'
  + '.mb-kopf h1{margin:0;font-family:"Space Grotesk",system-ui,sans-serif;font-size:24px;font-weight:700;'
  +   'letter-spacing:-.02em;color:var(--ink)}'
  + '.mb-kopf p{margin:4px 0 0;font-size:14px;color:var(--leise);line-height:1.5}'
  + '.mb-tarif{display:inline-flex;align-items:center;gap:6px;background:#fff;border:1px solid var(--tint);'
  +   'color:var(--tint);border-radius:999px;padding:5px 13px;font-size:13px;font-weight:700}'

  /* Zahlenband */
  + '.mb-zahlen{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--linie);'
  +   'border:1px solid var(--linie);border-radius:16px;overflow:hidden}'
  + '@media(max-width:700px){.mb-zahlen{grid-template-columns:repeat(2,1fr)}}'
  + '.mb-zahlen > div{background:#fff;padding:14px 16px}'
  + '.mb-zahlen .v{font-family:"Space Grotesk",system-ui,sans-serif;font-size:26px;font-weight:700;'
  +   'color:var(--ink);line-height:1.1;font-variant-numeric:tabular-nums}'
  + '.mb-zahlen .l{font-size:12.5px;color:var(--leise);margin-top:3px}'

  /* Karten */
  + '.mb-k{background:#fff;border:1px solid var(--linie);border-radius:16px;overflow:hidden}'
  + '.mb-kopfz{display:flex;align-items:center;justify-content:space-between;gap:10px;'
  +   'padding:13px 16px;border-bottom:1px solid var(--linie2)}'
  + '.mb-kopfz h2{margin:0;font-family:"Space Grotesk",system-ui,sans-serif;font-size:15px;'
  +   'font-weight:700;color:var(--ink);letter-spacing:-.01em}'
  + '.mb-kopfz a{font-size:12.5px;font-weight:700;color:var(--tint);text-decoration:none;cursor:pointer;white-space:nowrap}'
  + '.mb-kopfz a:hover{text-decoration:underline}'
  + '.mb-leib{padding:14px 16px}'
  + '.mb-leer{padding:14px 16px;font-size:13.5px;color:var(--leise);line-height:1.55}'

  /* Zeilen */
  + '.mb-z{display:flex;align-items:center;gap:12px;padding:11px 16px;border-bottom:1px solid var(--linie2)}'
  + '.mb-z:last-child{border-bottom:none}'
  + '.mb-z .tx{flex:1;min-width:0}'
  + '.mb-z .tx b{display:block;font-size:14px;font-weight:600;color:var(--ink);line-height:1.35}'
  + '.mb-z .tx span{display:block;font-size:12.5px;color:var(--leise);margin-top:1px}'
  + '.mb-dat{width:44px;flex:0 0 44px;text-align:center;background:#F6F9FA;border:1px solid var(--linie);'
  +   'border-radius:10px;padding:4px 0}'
  + '.mb-dat .t{display:block;font-size:9.5px;font-weight:800;letter-spacing:.06em;color:var(--rot);text-transform:uppercase}'
  + '.mb-dat .z{display:block;font-size:16px;font-weight:700;color:var(--ink);line-height:1.1;font-variant-numeric:tabular-nums}'
  + '.mb-mark{font-size:11.5px;font-weight:700;border-radius:999px;padding:3px 9px;white-space:nowrap}'
  + '.mb-mark.da{background:#E8F6F1;color:var(--gruen)}'
  + '.mb-mark.weg{background:#FDECEA;color:var(--rot)}'
  + '.mb-mark.offen{background:#FDF5E0;color:#8A6608}'
  + '.mb-mark.fertig{background:#E8F6F1;color:var(--gruen)}'

  /* Balken für den Kursstand und die Fertigkeiten */
  + '.mb-bal{height:8px;border-radius:999px;background:#F1F5F6;overflow:hidden;margin-top:6px}'
  + '.mb-bal i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#1B9BC0,#10627A)}'
  + '.mb-fert{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}'
  + '.mb-fert > div{background:#F6F9FA;border:1px solid var(--linie);border-radius:12px;padding:11px 13px}'
  + '.mb-fert b{display:block;font-size:13.5px;color:var(--ink)}'
  + '.mb-fert small{display:block;font-size:12px;color:var(--leise);margin-top:1px}'

  + '@media(max-width:640px){.mb-z{padding:10px 13px}.mb-kopfz,.mb-leib{padding-left:13px;padding-right:13px}}'
  ;

  function stil(){
    if(document.getElementById('meinBereichStil')) return;
    var s = document.createElement('style'); s.id='meinBereichStil'; s.textContent=CSS;
    document.head.appendChild(s);
  }

  /* ---------- Werkzeug ---------- */

  function datum(iso, mitJahr){
    var d = new Date(iso);
    if(isNaN(d)) return '';
    return d.toLocaleDateString('de-DE', mitJahr
      ? {day:'2-digit',month:'2-digit',year:'numeric'}
      : {day:'2-digit',month:'2-digit'});
  }
  function uhr(iso){
    var d = new Date(iso);
    if(isNaN(d)) return '';
    try{ if(window.fmtTimeK) return window.fmtTimeK(d); }catch(e){}
    return d.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'});
  }
  function datumsKasten(iso){
    var d = new Date(iso);
    var tag = d.toLocaleDateString('de-DE',{weekday:'short'}).replace('.','');
    return '<div class="mb-dat"><span class="t">' + E(tag) + '</span>'
         + '<span class="z">' + String(d.getDate()).padStart(2,'0') + '</span></div>';
  }
  function karte(titel, inhalt, link, linkText){
    return '<div class="mb-k"><div class="mb-kopfz"><h2>' + titel + '</h2>'
         + (link ? '<a onclick="' + link + '">' + linkText + '</a>' : '')
         + '</div>' + inhalt + '</div>';
  }

  /* ---------- 1. Kopf und Zahlen ---------- */

  function kopf(){
    var name = '';
    try{ name = (window.profile && profile.name || '').split(' ')[0]; }catch(e){}
    var tarif = '', bis = '';
    try{
      tarif = (window.aboName ? aboName(profile.tier) : (profile.tier||''));
      if(profile.pass_until) bis = datum(profile.pass_until, true);
    }catch(e){}
    var rang = '', punkte = 0;
    try{ rang = (stats.rank && stats.rank.name) || ''; punkte = stats.points || 0; }catch(e){}

    return '<div class="mb-kopf">'
      + '<div class="wer">'
      +   '<h1>' + (name ? E(name) + ' — ' : '') + T('mb_h1','dein Bereich') + '</h1>'
      +   '<p>' + T('mb_sub','Alles, was du hier gemacht hast, an einer Stelle.')
      +     (rang ? ' · ' + E(rang) + ' · ' + punkte + ' ' + T('mb_punkte','Punkte') : '') + '</p>'
      + '</div>'
      + (tarif ? '<span class="mb-tarif">' + E(tarif)
                 + (bis ? ' · ' + T('mb_bis','bis') + ' ' + E(bis) : '') + '</span>' : '')
      + '</div>';
  }

  function zahlen(){
    var s = window.stats || {};
    var v = null;
    try{ if(window.vokabelStand) v = window.vokabelStand(); }catch(e){}
    var besucht = (s.past||[]).length;
    var woerter = (v && v.gelernt) ? v.gelernt : (s.known||0);
    var serie = (v && v.serie) ? v.serie : 0;
    var uebungen = s.completedPhases || 0;
    function f(wert, label){ return '<div><div class="v">' + wert + '</div><div class="l">' + label + '</div></div>'; }
    return '<div class="mb-zahlen">'
      + f(besucht,  T('mb_zstunden','Stunden besucht'))
      + f(serie,    T('mb_zserie','Tage am Stück'))
      + f(woerter,  T('mb_zwoerter','Wörter gelernt'))
      + f(uebungen, T('mb_zueb','Übungen gelöst'))
      + '</div>';
  }

  /* ---------- 2. Mein Unterricht ---------- */

  function unterricht(){
    var s = window.stats || {};
    var kommend = (s.upcoming||[]).slice(0, 4);
    var gewesen = (s.past||[]).slice().sort(function(a,b){
      return new Date(b.starts_at) - new Date(a.starts_at); }).slice(0, 6);

    if(!kommend.length && !gewesen.length){
      return karte(T('mb_unt','Mein Unterricht'),
        '<div class="mb-leer">' + T('mb_untleer','Du hast noch keine Stunde besucht. Im Sprechclub findest du die nächsten Termine.') + '</div>',
        "go('kalender')", T('mb_zumkal','Zum Wochenplan →'));
    }

    var zeilen = '';
    kommend.forEach(function(b){
      zeilen += '<div class="mb-z">' + datumsKasten(b.starts_at)
        + '<div class="tx"><b>' + E(b.title || 'Sprechclub') + '</b>'
        + '<span>' + E(uhr(b.starts_at)) + (b.topic ? ' · ' + E(b.topic) : '') + '</span></div>'
        + '<span class="mb-mark offen">' + T('mb_gebucht','gebucht') + '</span></div>';
    });
    gewesen.forEach(function(b){
      var a = b.attendance;
      var mark = (a === 'present') ? '<span class="mb-mark da">' + T('mb_dabei','dabei gewesen') + '</span>'
               : (a === 'absent')  ? '<span class="mb-mark weg">' + T('mb_verpasst','verpasst') + '</span>'
               : '';
      zeilen += '<div class="mb-z">' + datumsKasten(b.starts_at)
        + '<div class="tx"><b>' + E(b.title || 'Sprechclub') + '</b>'
        + '<span>' + E(datum(b.starts_at, true)) + (b.topic ? ' · ' + E(b.topic) : '') + '</span></div>'
        + mark + '</div>';
    });
    return karte(T('mb_unt','Mein Unterricht'), zeilen, "go('stunden')", T('mb_allestunden','Alle Stunden →'));
  }

  /* ---------- 3. Mein Stand im Kurs ---------- */

  function kursStand(){
    var st = null;
    try{
      if(window.wegStand){
        var w = window.wegStand();
        if(w && w.stufe && w.lektion) st = w;
      }
    }catch(e){}
    if(!st){
      return karte(T('mb_kurs','Mein Stand im Kurs'),
        '<div class="mb-leer">' + T('mb_kursleer','Du hast den Kurs noch nicht angefangen. Vierzehn Lektionen pro Stufe warten auf dich.') + '</div>',
        "go('weg')", T('mb_zumkurs','Zum Kurs →'));
    }
    var proz = Math.max(0, Math.min(100, st.prozent||0));
    return karte(T('mb_kurs','Mein Stand im Kurs'),
      '<div class="mb-leib">'
      + '<b style="font-size:15px;color:var(--ink)">' + E(st.niveau||'') + ' · ' + E(st.titel||'') + '</b>'
      + '<div style="font-size:13px;color:var(--leise);margin-top:3px">'
      +   T('mb_lektion','Lektion') + ' ' + (st.nr||1) + ' ' + T('mb_von','von') + ' ' + (st.anzahl||14)
      +   ' · ' + proz + ' % ' + T('mb_geschafft','geschafft') + '</div>'
      + '<div class="mb-bal"><i style="width:' + Math.max(2, proz) + '%"></i></div>'
      + '</div>',
      "kursUebersicht('" + E(st.weg || st.niveau || '') + "')", T('mb_alleLektionen','Alle Lektionen →'));
  }

  /* ---------- 4. Meine Wörter ---------- */

  function woerter(){
    var v = null;
    try{ if(window.vokabelStand) v = window.vokabelStand(); }catch(e){}
    if(!v || !v.gesamt){
      return karte(T('mb_woerter','Meine Wörter'),
        '<div class="mb-leer">' + T('mb_wleer','Noch keine Wörter im Trainer. Er füllt sich aus deinen Lektionen und Stunden von selbst.') + '</div>',
        "go('vokabeln')", T('mb_zumtrainer','Zum Wortschatz →'));
    }
    function f(wert, label){
      return '<div><b>' + wert + '</b><small>' + label + '</small></div>';
    }
    return karte(T('mb_woerter','Meine Wörter'),
      '<div class="mb-leib"><div class="mb-fert">'
      + f(v.gesamt,  T('mb_wgesamt','im Trainer'))
      + f(v.gelernt, T('mb_wgelernt','sitzen'))
      + f(v.faellig, T('mb_wfaellig','heute fällig'))
      + f(v.neu,     T('mb_wneu','noch nie geübt'))
      + '</div></div>',
      "go('vokabeln')", T('mb_ueben','Üben →'));
  }

  /* ---------- 5. Was nachgeladen wird ---------- */

  /* Fertigkeiten, Texte, Fehler und Lektionen liegen in vier Tabellen,
     die sonst niemand auf dieser Seite braucht. Sie kommen erst, wenn
     die Seite schon steht. */
  function nachladen(){
    var c = window.sb, id = null;
    try{ id = window.user && user.id; }catch(e){}
    if(!c || !id) return;

    function setz(wo, html){
      var el = document.getElementById(wo);
      if(el) el.innerHTML = html;
    }

    /* Fertigkeiten */
    c.from('ueben_stand').select('skill,thema,best,versuche,zuletzt').eq('user_id', id)
      .then(function(r){
        var reihen = (r && r.data) || [];
        if(!reihen.length){
          setz('mbFert', '<div class="mb-leer">' + T('mb_fleer','Hier steht bald, wie du in Hören, Lesen, Schreiben und Sprechen stehst — sobald du die ersten Übungen gemacht hast.') + '</div>');
          return;
        }
        var NAME = { hoeren:'Hören', lesen:'Lesen', schreiben:'Schreiben', sprechen:'Sprechen',
                     wortschatz:'Wortschatz', grammatik:'Grammatik', aussprache:'Aussprache', stunde:'Aus der Stunde' };
        var je = {};
        reihen.forEach(function(x){
          var k = x.skill || 'sonst';
          if(!je[k]) je[k] = { summe:0, n:0, versuche:0, zuletzt:null };
          je[k].summe += (x.best||0); je[k].n++; je[k].versuche += (x.versuche||0);
          if(!je[k].zuletzt || new Date(x.zuletzt) > new Date(je[k].zuletzt)) je[k].zuletzt = x.zuletzt;
        });
        var html = '<div class="mb-leib"><div class="mb-fert">'
          + Object.keys(je).sort().map(function(k){
              var d = je[k], schnitt = Math.round(d.summe / Math.max(1, d.n));
              return '<div><b>' + E(NAME[k] || k) + '</b>'
                + '<small>' + schnitt + ' % · ' + d.versuche + ' '
                + (d.versuche===1 ? 'Versuch' : 'Versuche') + '</small>'
                + '<div class="mb-bal"><i style="width:' + Math.max(2, schnitt) + '%"></i></div></div>';
            }).join('')
          + '</div></div>';
        setz('mbFert', html);
      })
      .catch(function(){ setz('mbFert', '<div class="mb-leer">' + T('mb_nichtgeladen','Konnte gerade nicht geladen werden.') + '</div>'); });

    /* Texte und Korrekturen */
    c.from('korrekturen').select('typ,aufgabe,status,created_at,answered_at').eq('user_id', id)
      .order('created_at', {ascending:false}).limit(8)
      .then(function(r){
        var reihen = (r && r.data) || [];
        if(!reihen.length){
          setz('mbTexte', '<div class="mb-leer">' + T('mb_tleer','Du hast noch keinen Text zur Korrektur geschickt. Im Schreibtrainer warten 76 Aufgaben mit echten Prüfungskriterien.') + '</div>');
          return;
        }
        setz('mbTexte', reihen.map(function(x){
          var fertig = x.status === 'fertig' || x.answered_at;
          return '<div class="mb-z"><div class="tx"><b>' + E(x.aufgabe || x.typ || 'Text') + '</b>'
            + '<span>' + E(datum(x.created_at, true)) + '</span></div>'
            + '<span class="mb-mark ' + (fertig ? 'fertig' : 'offen') + '">'
            + (fertig ? T('mb_korrigiert','korrigiert') : T('mb_wartet','wartet auf Korrektur')) + '</span></div>';
        }).join(''));
      })
      .catch(function(){ setz('mbTexte', '<div class="mb-leer">' + T('mb_nichtgeladen','Konnte gerade nicht geladen werden.') + '</div>'); });

    /* Fehler-Trainer */
    c.from('fehler_trainer').select('corrected,note,topic,mastered,created_at').eq('user_id', id)
      .order('created_at', {ascending:false}).limit(5)
      .then(function(r){
        var reihen = (r && r.data) || [];
        if(!reihen.length){
          setz('mbFehler', '<div class="mb-leer">' + T('mb_feleer','Noch keine Merksätze gesammelt. Jede Korrektur, die du dir merkst, landet hier.') + '</div>');
          return;
        }
        setz('mbFehler', reihen.map(function(x){
          return '<div class="mb-z"><div class="tx"><b>' + E(x.corrected || '') + '</b>'
            + (x.note ? '<span>' + E(x.note) + '</span>' : '') + '</div>'
            + (x.mastered ? '<span class="mb-mark fertig">' + T('mb_sitzt','sitzt') + '</span>' : '') + '</div>';
        }).join(''));
      })
      .catch(function(){ setz('mbFehler', '<div class="mb-leer">' + T('mb_nichtgeladen','Konnte gerade nicht geladen werden.') + '</div>'); });

    /* Bearbeitete Lektionen */
    c.from('lektion_fortschritt').select('datei,aufrufe,sekunden,fertig_am,zuletzt_am').eq('user_id', id)
      .order('zuletzt_am', {ascending:false}).limit(6)
      .then(function(r){
        var reihen = (r && r.data) || [];
        if(!reihen.length){
          setz('mbLektionen', '<div class="mb-leer">' + T('mb_lleer','Noch keine Lektion geöffnet. In der Kursbibliothek liegen über hundert.') + '</div>');
          return;
        }
        setz('mbLektionen', reihen.map(function(x){
          var min = Math.round((x.sekunden||0)/60);
          var name = String(x.datei||'').split('/').pop().replace(/\.html?$/,'').replace(/[-_]/g,' ');
          return '<div class="mb-z"><div class="tx"><b>' + E(name) + '</b>'
            + '<span>' + E(datum(x.zuletzt_am, true))
            + (min ? ' · ' + min + ' ' + (min===1?'Minute':'Minuten') : '')
            + '</span></div>'
            + (x.fertig_am ? '<span class="mb-mark fertig">' + T('mb_durch','durch') + '</span>' : '') + '</div>';
        }).join(''));
      })
      .catch(function(){ setz('mbLektionen', '<div class="mb-leer">' + T('mb_nichtgeladen','Konnte gerade nicht geladen werden.') + '</div>'); });
  }

  /* ---------- 6. Material aus meinen Stunden ---------- */

  function material(){
    var reihen = [];
    try{
      var m = window.materials || {};
      var gesehen = {};
      (window.bookings||[]).filter(function(b){ return b.status === 'booked'; })
        .sort(function(a,b){ return new Date(b.starts_at) - new Date(a.starts_at); })
        .forEach(function(b){
          var id = b.class_id || b.id;
          if(gesehen[id] || !m[id]) return;
          gesehen[id] = true;
          reihen.push({ titel: b.title || 'Stunde', wann: b.starts_at });
        });
    }catch(e){}
    if(!reihen.length){
      return karte(T('mb_mat','Material aus meinen Stunden'),
        '<div class="mb-leer">' + T('mb_matleer','Sobald du eine Stunde besucht hast, liegen Arbeitsblatt, Wortschatz und Nachbereitung hier.') + '</div>',
        "go('materialien')", T('mb_allesmat','Alle Materialien →'));
    }
    return karte(T('mb_mat','Material aus meinen Stunden'),
      reihen.slice(0,5).map(function(x){
        return '<div class="mb-z"><div class="tx"><b>' + E(x.titel) + '</b>'
          + '<span>' + E(datum(x.wann, true)) + '</span></div>'
          + '<button class="sf-tun" onclick="go(\'stunden\')">' + T('mb_oeffnen','Öffnen') + '</button></div>';
      }).join(''),
      "go('materialien')", T('mb_allesmat','Alle Materialien →'));
  }

  /* ---------- Die Seite ---------- */

  window.renderMeinBereich = function(){
    stil();
    var ziel = document.getElementById('v-fortschritt');
    if(!ziel) return;

    ziel.innerHTML = '<div class="mb">'
      + kopf()
      + zahlen()
      + unterricht()
      + kursStand()
      + karte(T('mb_fert','Meine Fertigkeiten'),
              '<div id="mbFert"><div class="mb-leer">' + T('mb_ladet','Wird geladen …') + '</div></div>',
              "go('fertigkeit')", T('mb_zufert','Zu den Fertigkeiten →'))
      + woerter()
      + karte(T('mb_lektionen','Zuletzt bearbeitet'),
              '<div id="mbLektionen"><div class="mb-leer">' + T('mb_ladet','Wird geladen …') + '</div></div>',
              "go('kurse')", T('mb_zubib','Zur Kursbibliothek →'))
      + karte(T('mb_texte','Meine Texte'),
              '<div id="mbTexte"><div class="mb-leer">' + T('mb_ladet','Wird geladen …') + '</div></div>',
              "go('schreiben')", T('mb_zumschreiben','Zum Schreibtrainer →'))
      + karte(T('mb_fehler','Meine Merksätze'),
              '<div id="mbFehler"><div class="mb-leer">' + T('mb_ladet','Wird geladen …') + '</div></div>',
              "go('fehler')", T('mb_zufehler','Zum Fehler-Trainer →'))
      + material()
      + '<div id="mbAbzeichen"></div>'
      + '</div>';

    /* Die Abzeichen-Wand gab es schon — sie zeichnet sich jetzt in
       den Kasten unten hinein statt über die ganze Seite. */
    try{ if(window.renderFortschritt) window.renderFortschritt(); }catch(e){ console.error('Abzeichen:', e); }
    try{ nachladen(); }catch(e){ console.error('Mein Bereich:', e); }
  };
})();
