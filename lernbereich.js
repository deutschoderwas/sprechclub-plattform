/* ============================================================
   deutschoderwas club — DER LERNBEREICH

   Drei Schritte, mehr nicht:

     1. NIVEAU     A1 · A2 · B1 · B2 · C1
                   Wo stehst du? Jederzeit wechselbar.
     2. BEREICH    Deutsch für die Freizeit  |  Deutsch für den Beruf
                   Streng getrennt — wer für die Arbeit lernt, will
                   nicht durch Urlaubswortschatz scrollen.
     3. THEMA      die Fotokarten aus themen.js, gefiltert auf das
                   Niveau. Was noch zu schwer ist, steht weiter unten
                   statt zu verschwinden.

   Der Stufenkurs (a1.js, a2.js) ist kein eigener Menüpunkt mehr.
   Er sitzt oben auf der Bereichsseite als „dein geführter Weg" —
   dort, wo man ihn sucht, wenn man nicht selbst auswählen möchte.

   Die Themenseite, die Gespräche und die Fortschrittsrechnung
   liegen weiter in lernen.js. Von dort kommt window.LERNTEILE.

   Sprachen: fester Text steht in <span data-i18n>, damit die
   Übersetzung von konto.html ihn erwischt. Zahlen bleiben außerhalb.

   Gebraucht: themen.js · lernen.js · niveau.js
   Freiwillig: kurs.js (Stufenkurs) · marke.css (Aussehen)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- kleine Helfer ---------- */
  function E(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function J(k,d){ try{ if(window.lsGet) return lsGet(k,d);
    var v=JSON.parse(localStorage.getItem('ub_'+k)); return v==null?d:v; }catch(e){ return d; } }
  function S(k,v){ try{ if(window.lsSet) return lsSet(k,v);
    localStorage.setItem('ub_'+k,JSON.stringify(v)); }catch(e){} }
  function el(id){ return document.getElementById(id); }
  function T(){ return window.LERNTEILE||{}; }
  function hoch(){ try{ window.scrollTo(0,0); }catch(e){} }

  /* Fester Text: die Übersetzung von konto.html tauscht ihn später aus */
  function W(schluessel, deutsch){ return '<span data-i18n="'+schluessel+'">'+deutsch+'</span>'; }
  /* Dasselbe, aber als reiner Text — für placeholder und title */
  function WX(schluessel, deutsch){
    try{
      var l = localStorage.getItem('dow_lang') || 'de';
      if(l==='de') return deutsch;
      var o = (window.__I18N__||{})[schluessel];
      if(o && o[l]!=null) return String(o[l]).replace(/<[^>]+>/g,'');
    }catch(e){}
    return deutsch;
  }

  /* ---------- die Stufen ---------- */
  var REIHE = {A1:0, A2:1, B1:2, B2:3, C1:4, C2:5};

  /* Welches Foto steht für welche Stufe — echte Bilder aus dem Kurs,
     dieselben wie in der alten Niveauauswahl. */
  var STUFENBILD = {
    A1:'umgangssprache', A2:'wohnen', B1:'buero', B2:'bewerbung', C1:'typisch-deutsch', C2:'kultur'
  };
  var STUFENSATZ = {
    A1:['lz_s_a1','Die ersten Sätze, die wirklich sitzen.'],
    A2:['lz_s_a2','Der Alltag geht dir von der Hand.'],
    B1:['lz_s_b1','Du regelst dein Leben allein.'],
    B2:['lz_s_b2','Du redest mit, auch wenn es schwierig wird.'],
    C1:['lz_s_c1','Du hörst, was jemand nicht sagt.'],
    C2:['lz_s_c2','Deutsch wie zu Hause.']
  };

  function stufen(){
    var a = window.NIVEAUS || [];
    if(a.length) return a;
    return [{id:'A1',t:'A1'},{id:'A2',t:'A2'},{id:'B1',t:'B1'},{id:'B2',t:'B2'},{id:'C1',t:'C1'}];
  }
  function stufeVon(id){ var a=stufen(),i; for(i=0;i<a.length;i++) if(a[i].id===id) return a[i]; return null; }

  /* „A1–B2" oder „B1" → [von, bis] als Zahlen */
  function spanne(lvl){
    var s = String(lvl||'').replace(/\s/g,'');
    if(!s) return null;
    var t = s.split(/[–—\-]/);
    var a = REIHE[t[0]], b = REIHE[t[1]||t[0]];
    if(a==null) return null;
    if(b==null) b=a;
    return [a,b];
  }
  /* Passt das Thema zu dieser Stufe? Ohne Angabe: passt immer. */
  function trifft(th,n){
    var r=spanne(th.lvl); if(!r) return true;
    var i=REIHE[n]; if(i==null) return true;
    return i>=r[0] && i<=r[1];
  }
  /* Kommt erst später (jetzt noch zu schwer)? */
  function spaeter(th,n){
    var r=spanne(th.lvl); if(!r) return false;
    var i=REIHE[n]; if(i==null) return false;
    return i<r[0];
  }

  /* ---------- die zwei Bereiche ---------- */
  var BEREICH = {
    alltag: {
      kurz:  ['lz_b_frei_k','Freizeit'],
      t:     ['lz_b_frei_t','Deutsch für die Freizeit'],
      u:     ['lz_b_frei_u','Einkaufen, Arzt, Wohnung, Ämter, Freunde — alles, was außerhalb der Arbeit passiert.'],
      satz:  ['lz_b_frei_s','Damit du deinen Tag allein hinbekommst.']
    },
    beruf: {
      kurz:  ['lz_b_ber_k','Beruf'],
      t:     ['lz_b_ber_t','Deutsch für den Beruf'],
      u:     ['lz_b_ber_u','Bewerbung, Kolleginnen, Kunden, Schicht, Übergabe — Deutsch, mit dem du arbeitest.'],
      satz:  ['lz_b_ber_s','Damit du im Job mitreden kannst.']
    }
  };
  function bereiche(){ return window.THEMEN_BEREICHE || [{id:'alltag'},{id:'beruf'}]; }
  function bTeil(bId,feld){
    var b=BEREICH[bId]; if(!b) return [bId,bId];
    return b[feld] || ['',''];
  }
  function bW(bId,feld){ var p=bTeil(bId,feld); return W(p[0],p[1]); }
  function bX(bId,feld){ var p=bTeil(bId,feld); return WX(p[0],p[1]); }

  /* ---------- Themen zusammensuchen ---------- */
  function alleThemen(){ return window.THEMEN || []; }
  function istThema(th){ return !th.art || th.art==='thema'; }
  function themenVon(bId){
    return alleThemen().filter(function(x){ return istThema(x) && x.b===bId; });
  }
  function themenAuf(bId,n){
    return themenVon(bId).filter(function(x){ return trifft(x,n); });
  }
  function bausteineVon(bId,art){
    return alleThemen().filter(function(x){
      return x.art===art && (x.br||[]).indexOf(bId)>=0;
    });
  }
  function foto(id,klein){ return 'bilder/thema/'+id+(klein?'-s':'')+'.jpg'; }
  function fortschritt(th){ var f=T().fortschritt; return f?f(th):0; }

  /* Wie weit ist ein Bereich auf einer Stufe? */
  function bereichProzent(bId,n){
    var a=themenAuf(bId,n); if(!a.length) return 0;
    var s=0,i; for(i=0;i<a.length;i++) s+=fortschritt(a[i]);
    return Math.round(s/a.length);
  }
  /* Ab welcher Stufe gibt es in diesem Bereich überhaupt etwas? */
  function abStufe(bId){
    var a=themenVon(bId), min=99, i, r, k;
    for(i=0;i<a.length;i++){ r=spanne(a[i].lvl); if(r && r[0]<min) min=r[0]; }
    if(min===99) return null;
    for(k in REIHE) if(REIHE[k]===min) return k;
    return null;
  }

  /* Der Stufenkurs zu dieser Stufe — oder nichts.
     Achtung: kursStand() weicht auf A1 aus, wenn es die Stufe nicht
     gibt. Deshalb wird das Niveau hier gegengeprüft. */
  function kursZu(n){
    try{
      if(!window.kursStand) return null;
      var k = window.kursStand(n);
      if(k && k.niveau===n) return k;
    }catch(e){}
    return null;
  }

  /* ============================================================
     Der Zustand: wo bin ich gerade?
     ============================================================ */
  var Z = { n:null, b:null, suche:'' };

  function merken(){ S('lz', {n:Z.n, b:Z.b}); if(Z.n) S('niveau', Z.n); }
  function laden(){
    var g = J('lz',null) || {};
    var n = g.n || J('niveau',null);
    if(n && REIHE[n]!=null && stufeVon(n)) Z.n = n;
  }
  laden();

  function flaeche(){ return el('v-lernen'); }

  /* ============================================================
     Ebene 1 — Wo stehst du?
     ============================================================ */

  function stufenKarte(s){
    var n = s.id;
    var themenA = themenAuf('alltag',n).length;
    var themenB = themenAuf('beruf',n).length;
    var ges = themenA + themenB;
    var k = kursZu(n);
    var p = ges ? Math.round((bereichProzent('alltag',n)*themenA + bereichProzent('beruf',n)*themenB)/ges) : 0;
    var leer = !ges && !k;
    var jetzt = (Z.n===n);
    var satz = STUFENSATZ[n] || ['lz_s_x', s.u||''];

    var zeilen = [];
    if(k)        zeilen.push(k.anzahl+' '+W('lz_lekt','Lektionen im Kurs'));
    if(themenA)  zeilen.push(themenA+' '+W('lz_th_frei','Themen Freizeit'));
    if(themenB)  zeilen.push(themenB+' '+W('lz_th_ber','Themen Beruf'));

    return '<button type="button" class="lz-st'+(leer?' lz-st-bald':'')+(jetzt?' lz-st-jetzt':'')+'" '
      + 'onclick="lernStufe(\''+E(n)+'\')">'
      + '<span class="lz-st-bild">'
      +   '<img src="'+foto(STUFENBILD[n]||'menschen')+'" alt="" loading="lazy" onerror="this.remove()">'
      +   '<span class="lz-st-schl"></span>'
      +   '<span class="lz-st-stufe">'+E(n)+'</span>'
      +   (jetzt?'<span class="lz-st-marke">'+W('lz_hier','hier bist du')+'</span>':'')
      + '</span>'
      + '<span class="lz-st-txt">'
      +   '<span class="lz-st-t">'+E((s.t||n).replace(/^[A-C][12]\s*[—-]\s*/,''))+'</span>'
      +   '<span class="lz-st-s">'+W(satz[0],E(satz[1]))+'</span>'
      +   (leer
            ? '<span class="lz-st-bald-tx">'+W('lz_bald','Wir bauen gerade daran')+'</span>'
            : '<span class="lz-st-meta">'+zeilen.join(' · ')+'</span>'
              +'<span class="lz-bar'+(p>=100?' voll':'')+'"><i style="width:'+Math.max(2,p)+'%"></i></span>')
      + '</span>'
      + '<span class="lz-st-go">'
      +   (leer ? W('lz_rein','Reinschauen')
              : (p>0 ? W('lz_weiter','Weiter') : W('lz_los','Losgehen')))+' →</span>'
      + '</button>';
  }

  function ebeneStufen(){
    var v=flaeche(); if(!v) return;
    v.innerHTML =
      '<div class="lz">'
      + '<div class="lz-kopf">'
      +   '<span class="lz-kicker">'+W('lz_kicker','Lernbereich')+'</span>'
      +   '<h1>'+W('lz_h1','Auf welchem <span class="mk-mark">Niveau</span> lernst du?')+'</h1>'
      +   '<p>'+W('lz_p1','Such dir deine Stufe aus. Danach entscheidest du, ob du Deutsch für die '
      +   'Freizeit oder für den Beruf lernst. Wechseln kannst du jederzeit.')+'</p>'
      + '</div>'
      + '<div class="lz-stufen">'+stufen().map(stufenKarte).join('')+'</div>'
      + '<div class="lz-hinweis">'
      +   '<div class="lz-hinweis-t"><b>'+W('lz_test_t','Du weißt nicht, wo du stehst?')+'</b>'
      +   '<span>'+W('lz_test_u','Der Einstufungstest sagt es dir in 15 Minuten — 112 Aufgaben, mit Hören.')+'</span></div>'
      +   '<a class="lz-btn lz-btn-hell" href="niveau-test-club.html">'+W('lz_test_b','Einstufungstest')+' →</a>'
      + '</div>'
      + '</div>';
    hoch();
  }

  /* ============================================================
     Ebene 2 — Freizeit oder Beruf?
     ============================================================ */

  /* Vier Fotos als Mosaik — zeigt sofort, was in dem Bereich steckt */
  function mosaik(bId,n){
    var a = themenAuf(bId,n);
    if(a.length<4) a = a.concat(themenVon(bId).filter(function(x){ return a.indexOf(x)<0; }));
    a = a.slice(0,4);
    if(!a.length) return '<span class="lz-mos lz-mos-leer"></span>';
    return '<span class="lz-mos lz-mos-'+a.length+'">'
      + a.map(function(t){
          return '<span><img src="'+foto(t.id,true)+'" alt="" loading="lazy" onerror="this.remove()"></span>';
        }).join('')
      + '</span>';
  }

  /* Drei Fälle, ehrlich unterschieden:
       · es gibt Themen für diese Stufe            → normale Karte
       · die Themen fangen erst später an          → Hinweis + Sprung
       · alles liegt darunter (C1 zum Beispiel)    → offen zum Auffrischen  */
  function bereichKarte(bId,n){
    var alle = themenVon(bId);
    var da   = themenAuf(bId,n);
    var ab   = abStufe(bId);
    var p    = bereichProzent(bId,n);
    var spaeterDa = alle.some(function(x){ return spaeter(x,n); });

    if(!da.length && !alle.length){
      return '<div class="lz-b lz-b-leer">'+mosaik(bId,n)
        + '<div class="lz-b-txt">'
        +   '<span class="lz-b-kurz">'+bW(bId,'kurz')+'</span>'
        +   '<h3>'+bW(bId,'t')+'</h3>'
        +   '<span class="lz-b-bald">'+W('lz_wird_gefuellt','Wird gerade gefüllt.')+'</span>'
        + '</div></div>';
    }

    if(!da.length && spaeterDa){
      return '<div class="lz-b lz-b-leer">'+mosaik(bId,n)
        + '<div class="lz-b-txt">'
        +   '<span class="lz-b-kurz">'+bW(bId,'kurz')+'</span>'
        +   '<h3>'+bW(bId,'t')+'</h3>'
        +   '<p>'+bW(bId,'u')+'</p>'
        +   '<span class="lz-b-bald">'+W('lz_ab_1','Das fängt bei')+' '+E(ab||'A2')+' '
        +     W('lz_ab_2','an. Auf dieser Stufe baust du erst die Grundlage.')+'</span>'
        +   '<button class="lz-btn lz-btn-hell" onclick="lernStufe(\''+E(ab||'A2')+'\',\''+E(bId)+'\')">'
        +     W('lz_wechseln','Wechseln zu')+' '+E(ab||'A2')+' →</button>'
        + '</div></div>';
    }

    var zahl = da.length
      ? da.length+' '+W('lz_themen_fuer','Themen für')+' '+E(n)
      : alle.length+' '+W('lz_themen_auffr','Themen zum Auffrischen');
    var hinweis = da.length ? ''
      : '<span class="lz-b-bald">'+W('lz_nichts_neu','Auf dieser Stufe kommt nichts Neues dazu — '
        + 'alles von vorher bleibt offen.')+'</span>';

    return '<button type="button" class="lz-b" onclick="lernBereich(\''+E(bId)+'\')">'
      + mosaik(bId,n)
      + '<span class="lz-b-txt">'
      +   '<span class="lz-b-kurz">'+bW(bId,'kurz')+'</span>'
      +   '<span class="lz-b-h">'+bW(bId,'t')+'</span>'
      +   '<span class="lz-b-p">'+bW(bId,'u')+'</span>'
      +   hinweis
      +   '<span class="lz-b-zahl">'+zahl+'</span>'
      +   '<span class="lz-bar'+(p>=100?' voll':'')+'"><i style="width:'+Math.max(2,p)+'%"></i></span>'
      +   '<span class="lz-b-go">'+W('lz_themen_ans','Themen ansehen')+' →</span>'
      + '</span></button>';
  }

  function kursKarte(n){
    var k = kursZu(n);
    if(!k) return '';
    var bild = foto(STUFENBILD[n]||'menschen');
    var titel = (k.titel||'').replace(/^[A-C][12]\s*[—-]\s*/,'');
    return '<div class="lz-kurs" style="--lz-kb:url(\''+bild+'\')">'
      + '<div class="lz-kurs-bild"></div>'
      + '<div class="lz-kurs-txt">'
      +   '<span class="lz-kicker lz-kicker-hell">'+W('lz_gefuehrt','Der geführte Weg')+'</span>'
      +   '<h2>'+E(n)+' — '+E(titel)+'</h2>'
      +   '<p>'+k.anzahl+' '+W('lz_kurs_p','Lektionen der Reihe nach: Wörter, Grammatik, Übungen, Gespräch '
      +   'und Schreiben. Wenn du nicht selbst auswählen willst, fang hier an.')+'</p>'
      +   '<div class="lz-kurs-fort">'
      +     '<span class="lz-bar'+(k.prozent>=100?' voll':'')+'"><i style="width:'+Math.max(2,k.prozent)+'%"></i></span>'
      +     '<span class="lz-kurs-proz">'+k.prozent+' %</span>'
      +   '</div>'
      +   '<div class="lz-kurs-kn">'
      +     '<button class="lz-btn" onclick="lernKursWeiter('+k.nr+',\''+E(n)+'\')">'
      +       (k.angefangen ? W('lz_kurs_w','Weiter mit Lektion')+' '+k.nr : W('lz_kurs_an','Kurs anfangen'))
      +     ' →</button>'
      +     '<button class="lz-btn lz-btn-hell" onclick="lernKursListe(\''+E(n)+'\')">'
      +       W('lz_alle_lekt','Alle Lektionen')+'</button>'
      +   '</div>'
      + '</div></div>';
  }

  /* ---------- Aussprache & Klang ----------
     Das Aussprachetraining (aussprache.html, 17 Lauteinheiten von A1
     bis C1) stand bisher nur in der Kursbibliothek und ging dort
     unter. Es gehört hierher: eine kleine eigene Kategorie unter den
     beiden Bereichen — mit den Lauten, die zur Stufe passen, und den
     Übungssätzen aus themen.js gleich daneben. */
  var KLANG_ZAHL = {A1:4, A2:6, B1:4, B2:1, C1:2};
  function klangZahl(n){
    try{
      var a=window.AUSSPRACHE;
      if(a && a.length) return a.filter(function(x){ return x.lvl===n; }).length;
    }catch(e){}
    return KLANG_ZAHL[n]||0;
  }

  function klangKarte(n){
    var einheiten = klangZahl(n);
    var laute = alleThemen().filter(function(x){ return x.art==='aussprache'; });
    var bilder = laute.slice(0,4).map(function(t){
      return '<span><img src="'+foto(t.id,true)+'" alt="" loading="lazy" onerror="this.remove()"></span>';
    }).join('');
    var ziel = 'aussprache.html' + (einheiten?('?lv='+encodeURIComponent(n)):'');

    return '<div class="lz-extra">'
      + '<div class="lz-extra-bilder">'+bilder+'</div>'
      + '<div class="lz-extra-txt">'
      +   '<span class="lz-kicker">'+W('lz_klang_k','Für die Ohren')+'</span>'
      +   '<h3>'+W('lz_klang_t','Aussprache &amp; Klang')+'</h3>'
      +   '<p>'+W('lz_klang_u','Laute hören, nachsprechen, aufnehmen — und prüfen lassen, welches Wort '
      +   'noch nicht sitzt. Mundstellung, Minimalpaare, Zungenbrecher.')+'</p>'
      +   '<span class="lz-extra-meta">'
      +     (einheiten
              ? einheiten+' '+W('lz_klang_e','Lauteinheiten für dieses Niveau')
              : W('lz_klang_alle','Alle Lauteinheiten von A1 bis C1'))
      +     ' · '+laute.length+' '+W('lz_klang_ue','Übungssätze')+'</span>'
      +   '<div class="lz-extra-kn">'
      +     '<a class="lz-btn" href="'+ziel+'">'+W('lz_klang_b','Aussprache trainieren')+' →</a>'
      +     '<a class="lz-btn lz-btn-hell" href="aussprache.html">'+W('lz_klang_b2','Alle Laute')+'</a>'
      +   '</div>'
      +   (laute.length
          ? '<div class="lz-extra-chips">'
            + laute.map(function(t){
                return '<button type="button" onclick="lernThema(\''+E(t.id)+'\')">'+E(t.t)+'</button>';
              }).join('')
            + '</div>'
          : '')
      + '</div></div>';
  }

  /* Der schmale Streifen „da warst du zuletzt" */
  function weiterBand(){
    var st = T().lernStand ? T().lernStand() : null;
    var id = st && st.zuletzt;
    if(!id) return '';
    var th = (T().themaVon||function(){return null;})(id);
    if(!th) return '';
    var p = fortschritt(th);
    return '<button type="button" class="lz-weiter" onclick="lernThema(\''+E(id)+'\')">'
      + '<span class="lz-weiter-b"><img src="'+foto(id,true)+'" alt="" loading="lazy" onerror="this.remove()"></span>'
      + '<span class="lz-weiter-t"><b>'+W('lz_zuletzt','Zuletzt')+': '+E(th.t)+'</b>'
      +   '<small>'+p+' % '+W('lz_geschafft','geschafft')+'</small></span>'
      + '<span class="lz-weiter-go">'+W('lz_weitermachen','Weitermachen')+' →</span>'
      + '</button>';
  }

  function ebeneBereiche(){
    var v=flaeche(); if(!v) return;
    var n=Z.n, s=stufeVon(n)||{};
    var ziel = s.ziel ? s.ziel.split('·')[0].replace(/\s+$/,'') : '';

    v.innerHTML =
      '<div class="lz">'
      + '<div class="lz-weg">'
      +   '<button class="lz-weg-b" onclick="lernStufen()">← '+W('lz_alle_niv','Alle Niveaus')+'</button>'
      +   '<span class="lz-weg-jetzt">'+E(n)+'</span>'
      +   (ziel?'<span class="lz-weg-ziel">'+W('lz_laeuft_auf','Läuft auf')+' '+E(ziel)+' '
      +          W('lz_zu','zu')+'</span>':'')
      + '</div>'
      + '<div class="lz-kopf lz-kopf-klein">'
      +   '<h1>'+W('lz_h2','Womit möchtest du <span class="mk-mark">anfangen</span>?')+'</h1>'
      +   '<p>'+W('lz_p2','Zwei Wege, dasselbe Niveau. Du kannst beide machen — nacheinander oder durcheinander.')+'</p>'
      + '</div>'
      + weiterBand()
      + kursKarte(n)
      + '<div class="lz-bs">'
      +   bereiche().map(function(b){ return bereichKarte(b.id,n); }).join('')
      + '</div>'
      + klangKarte(n)
      + '<div class="lz-hinweis">'
      +   '<div class="lz-hinweis-t"><b>'+W('lz_pruef_t','Du hast einen Prüfungstermin?')+'</b>'
      +   '<span>'+W('lz_pruef_u','Dann üben wir gezielt: Module, Musterprüfung, Wortschatz — genau für deine Prüfung.')+'</span></div>'
      +   '<button class="lz-btn lz-btn-hell" onclick="lernZurPruefung()">'
      +     W('lz_pruef_b','Prüfungsvorbereitung')+' →</button>'
      + '</div>'
      + '</div>';
    hoch();
  }

  /* ============================================================
     Ebene 3 — Die Themen eines Bereichs
     ============================================================ */

  function teile(th){ var f=T().teileVon; return f?f(th):[]; }

  function themenKarte(th,gedaempft){
    var p = fortschritt(th), tl = teile(th);
    return '<button type="button" class="lz-k'+(gedaempft?' lz-k-spaeter':'')+'" '
      + 'onclick="lernThema(\''+E(th.id)+'\')">'
      + '<span class="lz-k-bild">'
      +   '<img src="'+foto(th.id)+'" alt="" loading="lazy" onerror="this.style.display=\'none\'">'
      +   '<span class="lz-k-schl"></span>'
      +   '<span class="lz-k-lv">'+E(th.lvl||'')+'</span>'
      +   (p>=100?'<span class="lz-k-fertig">✓ '+W('lz_fertig','fertig')+'</span>':'')
      +   '<span class="lz-k-t">'+E(th.t)+'</span>'
      + '</span>'
      + '<span class="lz-k-fuss">'
      +   '<span class="lz-k-teile">'
      +     tl.slice(0,3).map(function(x){ return '<span>'+E(x)+'</span>'; }).join('')
      +   '</span>'
      +   '<span class="lz-bar'+(p>=100?' voll':'')+'"><i style="width:'+p+'%"></i></span>'
      + '</span></button>';
  }

  function bausteinKarte(th){
    var f=T().baustein;
    if(f) return f(th);
    return '<button class="ln-bs" onclick="lernThema(\''+E(th.id)+'\')"><span class="tx"><b>'+E(th.t)+'</b></span></button>';
  }

  /* ---------- Gemischte Übungen ----------
     Der Übungsteil (ueben.js, über 5000 Aufgaben) hatte keinen
     Eingang mehr im Menü. Er gehört hierher: gemischte Sätze aus
     genau den Themen, die in diesem Bereich und auf diesem Niveau
     stehen — nicht quer durch alles. */
  function mixPaare(bId,n,nurSkill){
    var p=[], gesehen={};
    function dazu(sk,id){
      if(!id) return;
      var k=sk+'|'+id; if(gesehen[k]) return; gesehen[k]=1;
      var z=T().aufgabenZahl ? T().aufgabenZahl(sk,[id]) : 1;
      if(z) p.push([sk,id]);
    }
    /* Auf Stufen ohne eigene Themen (C1) mischen wir aus allem,
       was in diesem Bereich liegt — sonst stünde hier nichts. */
    var liste = themenAuf(bId,n);
    if(!liste.length) liste = themenVon(bId);
    liste.forEach(function(th){
      if(!nurSkill || nurSkill==='wortschatz') (th.ws||[]).forEach(function(x){ dazu('wortschatz',x); });
      if(!nurSkill || nurSkill==='hoeren')     (th.ho||[]).forEach(function(x){ dazu('hoeren',x); });
    });
    if(!nurSkill){
      bausteineVon(bId,'grammatik').forEach(function(x){ dazu('grammatik',x.gr); });
    }
    return p;
  }
  function mixZahl(bId,n,nurSkill){
    var p=mixPaare(bId,n,nurSkill), s=0, f=T().aufgabenZahl;
    if(!f) return 0;
    p.forEach(function(x){ s+=f(x[0],[x[1]]); });
    return s;
  }

  var mixOffen=false, mixGesetzt=false;
  function mixStarten(titel, paare){
    if(!window.ubMixAuswahl){
      try{ if(window.toast) toast('Die Übungen sind noch nicht geladen — lade die Seite bitte neu.'); }catch(e){}
      return;
    }
    if(T().vergiss) T().vergiss();
    if(!mixGesetzt && window.ubClose){
      var alt = window.ubClose;
      window.ubClose = function(f){
        alt(f);
        if(!mixOffen) return;
        mixOffen=false;
        var v=flaeche();
        if(v && v.classList.contains('active') && Z.b) setTimeout(ebeneThemen, 60);
      };
      mixGesetzt=true;
    }
    mixOffen=true;
    if(!window.ubMixAuswahl(titel, paare, 12)) mixOffen=false;
  }

  window.lernMix = function(bId,n,skill){
    var titel = bX(bId,'kurz')+' · '+n;
    if(skill==='wortschatz') titel += ' · '+WX('lz_nur_w','Wörter');
    if(skill==='hoeren')     titel += ' · '+WX('lz_nur_h','Hören');
    mixStarten(titel, mixPaare(bId,n,skill||null));
    return false;
  };
  window.lernAlleUebungen = function(){
    if(window.go){ try{ window.go('ueben'); return false; }catch(e){} }
    if(window.renderUeben) window.renderUeben();
    return false;
  };

  function mixBand(bId,n){
    var ges = mixZahl(bId,n), w = mixZahl(bId,n,'wortschatz'), h = mixZahl(bId,n,'hoeren');
    if(!ges) return '';
    return '<div class="lz-mix">'
      + '<div class="lz-mix-t">'
      +   '<b>'+W('lz_mix_t','Gemischte Übungen')+'</b>'
      +   '<span>'+ges+' '+W('lz_mix_u','Aufgaben aus allen Themen dieses Bereichs — zwölf pro Runde, '
      +   'bunt gemischt.')+'</span>'
      + '</div>'
      + '<div class="lz-mix-kn">'
      +   '<button class="lz-btn" onclick="lernMix(\''+E(bId)+'\',\''+E(n)+'\')">'
      +     W('lz_mix_b','Loslegen')+' →</button>'
      +   (w?'<button class="lz-btn lz-btn-hell" onclick="lernMix(\''+E(bId)+'\',\''+E(n)+'\',\'wortschatz\')">'
      +      W('lz_nur_w','Wörter')+' <i>'+w+'</i></button>':'')
      +   (h?'<button class="lz-btn lz-btn-hell" onclick="lernMix(\''+E(bId)+'\',\''+E(n)+'\',\'hoeren\')">'
      +      W('lz_nur_h','Hören')+' <i>'+h+'</i></button>':'')
      + '</div>'
      + '<button class="lz-mix-alle" onclick="lernAlleUebungen()">'
      +   W('lz_mix_alle','Alle Übungen nach Fertigkeit')+' →</button>'
      + '</div>';
  }

  function sucheTrifft(th){
    if(!Z.suche) return true;
    var t=(th.t+' '+th.id+' '+(th.lvl||'')+' '+(th.bsp||'')).toLowerCase();
    return t.indexOf(Z.suche)>=0;
  }

  function gruppe(kopf,unter,liste,gedaempft){
    if(!liste.length) return '';
    return '<section class="lz-gruppe'+(gedaempft?' lz-gruppe-still':'')+'">'
      + '<div class="lz-gh"><h2>'+kopf+'</h2><span>'+unter+'</span></div>'
      + '<div class="lz-raster">'+liste.map(function(x){ return themenKarte(x,gedaempft); }).join('')+'</div>'
      + '</section>';
  }

  function listeBauen(){
    var n=Z.n, bId=Z.b;
    var alle  = themenVon(bId).filter(sucheTrifft);
    var jetzt = alle.filter(function(x){ return trifft(x,n); });
    var kommt = alle.filter(function(x){ return spaeter(x,n); });
    var frueh = alle.filter(function(x){ return !trifft(x,n) && !spaeter(x,n); });

    var out = '';
    if(!alle.length){
      out = '<div class="lz-leer">'
          + W('lz_leer','Dazu haben wir hier noch nichts. Such etwas anderes — oder schreib mir, was dir fehlt.')
          + '</div>';
    } else {
      out += gruppe(W('lz_g1','Für dein Niveau'),
                    jetzt.length+' '+W('lz_g1u','Themen auf')+' '+E(n), jetzt, false);
      out += gruppe(W('lz_g2','Etwas schwerer'),
                    W('lz_g2u','Schon offen — schau rein, wenn du Lust hast'), kommt, true);
      out += gruppe(W('lz_g3','Zum Auffrischen'),
                    W('lz_g3u','Themen von früher, jederzeit wiederholbar'), frueh, true);
    }

    /* Grammatik und Aussprache stehen unter beiden Bereichen */
    var g = bausteineVon(bId,'grammatik').filter(sucheTrifft);
    var a = bausteineVon(bId,'aussprache').filter(sucheTrifft);
    if(g.length || a.length){
      out += '<section class="lz-bausteine">';
      if(g.length) out += '<div class="lz-bk"><b>'+W('lz_gram','Grammatik dazu')+'</b>'
                        + '<span>'+g.length+' '+W('lz_gram_u','Regeln, die in diesen Themen vorkommen')+'</span></div>'
                        + '<div class="ln-bsliste">'+g.map(bausteinKarte).join('')+'</div>';
      if(a.length) out += '<div class="lz-bk"><b>'+W('lz_aus','Aussprache dazu')+'</b>'
                        + '<span>'+W('lz_aus_u','damit man dich vom ersten Satz an versteht')+'</span></div>'
                        + '<div class="ln-bsliste">'+a.map(bausteinKarte).join('')+'</div>';
      out += '</section>';
    }
    return out;
  }

  function ebeneThemen(){
    var v=flaeche(); if(!v) return;
    var n=Z.n;
    var anz = themenAuf(Z.b,n).length;

    v.innerHTML =
      '<div class="lz">'
      + '<div class="lz-weg">'
      +   '<button class="lz-weg-b" onclick="lernStufe(\''+E(n)+'\')">← '
      +     W('lz_frei_beruf','Freizeit &amp; Beruf')+'</button>'
      +   '<span class="lz-weg-jetzt">'+E(n)+'</span>'
      +   '<span class="lz-weg-ziel">'+bW(Z.b,'kurz')+'</span>'
      + '</div>'
      + '<div class="lz-kopf lz-kopf-klein">'
      +   '<span class="lz-kicker">'+bW(Z.b,'kurz')+' · '+E(n)+'</span>'
      +   '<h1>'+bW(Z.b,'t')+'</h1>'
      +   '<p>'+bW(Z.b,'satz')+' '+anz+' '+W('lz_dran','Themen sind für dieses Niveau dran — jedes mit '
      +   'Wörtern, Hören, Übungen und einem echten Gespräch.')+'</p>'
      + '</div>'
      + mixBand(Z.b,n)
      + '<div class="lz-suche"><em aria-hidden="true">🔍</em>'
      +   '<input id="lzSuche" type="search" placeholder="'+E(WX('lz_suche','Thema suchen …'))+'" '
      +   'value="'+E(Z.suche)+'" oninput="lernSuche(this.value)">'
      + '</div>'
      + '<div id="lzListe">'+listeBauen()+'</div>'
      + '</div>';
    hoch();
  }

  /* ============================================================
     Die Wege dazwischen
     ============================================================ */

  window.lernStufen = function(){
    Z.b=null; Z.suche='';
    if(T().stil) T().stil();
    ebeneStufen();
  };

  window.lernStufe = function(n,bereich){
    if(!n || !stufeVon(n)) return window.lernStufen();
    Z.n=n; Z.b=null; Z.suche=''; merken();
    if(T().stil) T().stil();
    if(bereich && themenAuf(bereich,n).length) return window.lernBereich(bereich);
    ebeneBereiche();
  };

  window.lernBereich = function(bId){
    if(!Z.n) return window.lernStufen();
    var kennt = !!BEREICH[bId] || bereiche().filter(function(x){return x.id===bId;}).length>0;
    if(!kennt) return ebeneBereiche();
    Z.b=bId; Z.suche=''; merken();
    if(T().stil) T().stil();
    ebeneThemen();
  };

  window.lernSuche = function(w){
    Z.suche = String(w||'').trim().toLowerCase();
    var l = el('lzListe'); if(!l) return;
    l.innerHTML = listeBauen();
  };

  /* Der Zurück-Knopf über einer Themenseite */
  window.lernZurueckText = function(th){
    if(Z.b && th && istThema(th)) return bX(Z.b,'kurz')+' · '+Z.n;
    if(Z.n) return WX('lz_zurueck_zu','Zurück zu')+' '+Z.n;
    return WX('lz_alle_themen','Alle Themen');
  };
  window.lernZurueck = function(){
    if(Z.b) return ebeneThemen();
    if(Z.n) return ebeneBereiche();
    return window.lernStufen();
  };

  /* Zum Stufenkurs — der lebt weiter in kurs.js */
  window.lernKursWeiter = function(nr,n){
    if(window.kursOeffnen) return window.kursOeffnen(nr,n);
    if(window.go) window.go('kurs');
    if(window.renderKursA1) window.renderKursA1(n);
    return false;
  };
  window.lernKursListe = function(n){
    if(window.kursUebersicht) return window.kursUebersicht(n);
    if(window.go) window.go('kurs');
    if(window.renderKursA1) window.renderKursA1(n);
    return false;
  };
  window.lernZurPruefung = function(){
    if(window.go){ try{ window.go('pruefung'); return false; }catch(e){} }
    if(window.renderPruefungen) window.renderPruefungen();
    return false;
  };

  /* ============================================================
     Der Eingang — löst die alte Übersicht aus lernen.js ab
     ============================================================ */
  window.renderLernen = function(){
    if(T().stil) T().stil();
    var v=flaeche(); if(!v) return;
    if(!window.THEMEN){ v.innerHTML='<div class="lz-leer">'+W('lz_laden','Die Themen werden geladen …')+'</div>'; return; }
    if(!Z.n) return ebeneStufen();
    if(Z.b) return ebeneThemen();
    ebeneBereiche();
  };

  /* Von außen: direkt in eine Stufe oder einen Bereich springen */
  window.lernbereichOeffnen = function(n,b){
    if(window.go){ try{ window.go('lernen'); }catch(e){} }
    setTimeout(function(){
      if(n && stufeVon(n)){ Z.n=n; merken(); }
      if(b) return window.lernBereich(b);
      window.renderLernen();
    }, 40);
    return false;
  };

})();
