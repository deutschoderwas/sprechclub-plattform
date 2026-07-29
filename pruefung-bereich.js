/* ============================================================
   deutschoderwas club — PRÜFUNGSVORBEREITUNG

   „Keine Angst mehr vor der Prüfung."

   Das Gerüst, Schritt 2 von 7. Zwei Ebenen:

     1. Welche Prüfung?   — neun Kacheln, eine Seite
     2. Die Prüfungsseite — die Module, Musterprüfung, Wortschatz,
                            Videokurs, Bereitschaft

   Kein Prüfungstermin: deutschoderwas bereitet auf die Prüfung vor,
   nimmt sie aber nicht ab. Ein Countdown auf einen Termin, den es
   hier nicht gibt, wäre irreführend.

   Was hier schon echt ist: die Auswahl, der Aufbau, die Verbindung
   zu den 36 vorhandenen Lektionen, zu den vier Musterprüfungen und
   zum Einstufungstest. Was noch fehlt, steht als „kommt noch" da —
   ehrlich statt als leere Kachel.

   Die Minutenangaben sind die veröffentlichten Werte. Geprüft am
   27.07.2026 sind B2 (Goethe) und DTZ; die übrigen tragen „ca." und
   werden in Schritt 4 einzeln gegengeprüft.
   ============================================================ */
(function(){
  'use strict';

  function E(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function J(k,d){ try{ if(window.lsGet) return lsGet(k,d);
    var v=JSON.parse(localStorage.getItem('ub_'+k)); return v==null?d:v; }catch(e){ return d; } }
  function S(k,v){ try{ if(window.lsSet) return lsSet(k,v);
    localStorage.setItem('ub_'+k,JSON.stringify(v)); }catch(e){} }

  /* ---------- Die Prüfungen ----------
     kurs  = die sechs vorhandenen Lektionen in kurse/ (über lektion.html)
     stufe = der Stufenkurs aus a1.js / a2.js (über kursOeffnen)
     muster= Schlüssel in pruefung.js für die Musterprüfung          */
  var PRUEFUNGEN = [
    { id:'sd1', name:'Start Deutsch 1', anbieter:'Goethe · telc', niveau:'A1',
      bild:'menschen', stufe:'A1',
      fuer:'Ehegattennachzug und der erste Nachweis, dass du Deutsch kannst.',
      module:[ {id:'hoeren',n:'Hören',m:'ca. 20'}, {id:'lesen',n:'Lesen',m:'ca. 25'},
               {id:'schreiben',n:'Schreiben',m:'ca. 20'}, {id:'sprechen',n:'Sprechen',m:'ca. 15'} ] },

    { id:'sd2', name:'Start Deutsch 2', anbieter:'Goethe · telc', niveau:'A2',
      bild:'wohnen', stufe:'A2', muster:'A2',
      fuer:'Aufenthaltstitel, erste Arbeit, der Schritt nach dem Anfang.',
      module:[ {id:'hoeren',n:'Hören',m:'ca. 30'}, {id:'lesen',n:'Lesen',m:'ca. 30'},
               {id:'schreiben',n:'Schreiben',m:'ca. 30'}, {id:'sprechen',n:'Sprechen',m:'ca. 15'} ] },

    { id:'dtz', name:'DTZ', anbieter:'Deutsch-Test für Zuwanderer', niveau:'A2–B1',
      bild:'amt', kurs:'dtz', muster:'B1', geprueft:true,
      fuer:'Der Abschluss des Integrationskurses. Zählt für Niederlassung und Einbürgerung.',
      module:[ {id:'hoeren',n:'Hören',m:'25'}, {id:'lesen',n:'Lesen',m:'45'},
               {id:'schreiben',n:'Schreiben',m:'30'}, {id:'sprechen',n:'Sprechen',m:'ca. 15'} ],
      punkte:'Hören und Lesen zusammen 45 Punkte — ab 33 ist es B1, ab 20 A2. '
            +'Schreiben 20 Punkte, ab 15 B1. Sprechen 100 Punkte, ab 40 B1.' },

    { id:'b1', name:'Zertifikat B1', anbieter:'Goethe · telc · ÖSD', niveau:'B1',
      bild:'buero', kurs:'goethetelc', muster:'B1',
      fuer:'Einbürgerung, Ausbildung, viele Arbeitgeber. Die wichtigste Hürde.',
      module:[ {id:'lesen',n:'Lesen',m:'ca. 65'}, {id:'hoeren',n:'Hören',m:'ca. 40'},
               {id:'schreiben',n:'Schreiben',m:'ca. 60'}, {id:'sprechen',n:'Sprechen',m:'ca. 15'} ],
      modular:true },

    { id:'b2', name:'Goethe-Zertifikat B2', anbieter:'Goethe · telc', niveau:'B2',
      bild:'bewerbung', kurs:'goethetelc', muster:'B2', geprueft:true,
      fuer:'Studium, Anerkennung im Beruf, qualifizierte Arbeit.',
      module:[ {id:'lesen',n:'Lesen',m:'65'}, {id:'hoeren',n:'Hören',m:'40'},
               {id:'schreiben',n:'Schreiben',m:'75'}, {id:'sprechen',n:'Sprechen',m:'15'} ],
      modular:true },

    { id:'c1', name:'Goethe-Zertifikat C1', anbieter:'Goethe · telc Hochschule', niveau:'C1',
      bild:'typisch-deutsch', kurs:'goethetelc', muster:'C1',
      fuer:'Universität, Führungsposition, anspruchsvolle Fachberufe.',
      module:[ {id:'lesen',n:'Lesen',m:'ca. 70'}, {id:'hoeren',n:'Hören',m:'ca. 40'},
               {id:'schreiben',n:'Schreiben',m:'ca. 75'}, {id:'sprechen',n:'Sprechen',m:'ca. 15'} ],
      modular:true },

    { id:'telcmed', name:'telc Medizin', anbieter:'Fachsprachprüfung', niveau:'B2–C1',
      bild:'gesundheit', kurs:'telcmed', fach:true,
      fuer:'Die Fachsprachprüfung auf dem Weg zur Approbation.',
      module:[ {id:'anamnese',n:'Anamnesegespräch',m:'ca. 20'},
               {id:'doku',n:'Dokumentation',m:'ca. 20'},
               {id:'fall',n:'Fallvorstellung',m:'ca. 20'} ] },

    { id:'pflege', name:'Deutsch für die Pflege', anbieter:'telc B1·B2 Pflege', niveau:'B1–B2',
      bild:'pflege', kurs:'pflege', fach:true,
      fuer:'Anerkennung als Pflegefachkraft — Übergabe, Angehörige, Dokumentation.',
      module:[ {id:'uebergabe',n:'Schichtübergabe',m:'ca. 20'},
               {id:'angehoerige',n:'Mit Angehörigen sprechen',m:'ca. 20'},
               {id:'doku',n:'Dokumentation',m:'ca. 20'} ] },

    { id:'buero', name:'Deutsch für Büro & Logistik', anbieter:'ohne Prüfung', niveau:'A2–B2',
      bild:'kunden', kurs:'buero', fach:true, ohnePruefung:true,
      fuer:'Telefon, E-Mail, Kundengespräch — für den Arbeitsalltag, nicht für ein Zertifikat.',
      module:[ {id:'telefon',n:'Am Telefon',m:'ca. 20'},
               {id:'mail',n:'E-Mail und Schriftverkehr',m:'ca. 20'},
               {id:'kunden',n:'Kundengespräch',m:'ca. 20'} ] }
  ];

  /* ---------- Welche Lektion gehört zu welchem Modul ----------
     Die 36 Lektionen aus kurse/ liegen schon fertig da. Hier steht,
     welche zu welchem Prüfungsteil gehört — sonst landet jeder Klick
     auf Lektion 1. */
  var LEKTIONEN = {
    goethetelc: {
      lesen:    [ [1,'Lesen — die Aufgabentypen und ihre Fallen'], [4,'Sprachbausteine — die Muster, die immer kommen'] ],
      hoeren:   [ [2,'Hören — was wirklich gefragt wird'] ],
      schreiben:[ [3,'Schreiben — der Brief, der Punkte holt'] ],
      sprechen: [ [5,'Sprechen — ein Thema präsentieren'], [6,'Sprechen — gemeinsam etwas planen'] ]
    },
    dtz: {
      hoeren:   [ [1,'Hören — Ansagen, Gespräche, Nachrichten'] ],
      lesen:    [ [2,'Lesen — Anzeigen, Formulare, Briefe'] ],
      schreiben:[ [3,'Schreiben — die halbformelle Nachricht'] ],
      sprechen: [ [4,'Teil 1 — über sich erzählen'], [5,'Teil 2 — ein Bild beschreiben'], [6,'Teil 3 — gemeinsam planen'] ]
    },
    telcmed: {
      anamnese: [ [1,'Teil 1 — das Anamnesegespräch'], [4,'Vom Laienwort zum Fachbegriff'], [5,'Das Aufklärungsgespräch'] ],
      doku:     [ [2,'Teil 2 — die schriftliche Dokumentation'] ],
      fall:     [ [3,'Teil 3 — das Arzt-Arzt-Gespräch'], [6,'Die komplette Prüfungssimulation'] ]
    },
    pflege: {
      uebergabe:   [ [1,'Die Schichtübergabe'], [5,'Notfall im Dienst'] ],
      angehoerige: [ [2,'Die Körperpflege — mit dem Bewohner sprechen'], [3,'Angehörige informieren'], [6,'Konflikt im Team ansprechen'] ],
      doku:        [ [4,'Die Pflegedokumentation'] ]
    },
    buero: {
      telefon: [ [1,'Am Telefon — professionell reagieren'], [5,'Termine koordinieren'] ],
      mail:    [ [2,'E-Mails, die man gern liest'], [6,'Der kurze Bericht'] ],
      kunden:  [ [3,'Im Meeting das Wort ergreifen'], [4,'Lieferung und Reklamation'] ]
    }
  };

  /* Zusätzliche Lektionen, die zur Prüfung passen, aber aus einem
     anderen Kurs kommen. */
  var ZUSATZ = {
    telcmed: { kurs:'medizin', name:'Deutsch für Mediziner', lektionen:[
      [1,'Die Anamnese — das Erstgespräch'], [2,'Die körperliche Untersuchung'],
      [3,'Aufklärung vor dem Eingriff'], [4,'Die Patientenvorstellung'],
      [5,'Telefonat mit der Kollegin'], [6,'Das schwierige Gespräch'] ] }
  };

  function pruefungVon(id){ for(var i=0;i<PRUEFUNGEN.length;i++) if(PRUEFUNGEN[i].id===id) return PRUEFUNGEN[i]; return null; }

  /* ---------- Fortschritt ----------
 — bis die Module echte Inhalte haben, zählt
     der Fortschritt der dahinterliegenden Lektionen. */
  function modulProzent(p, mod){
    try{
      if(p.stufe && window.kursStand){
        var st=window.kursStand(p.stufe);
        if(st) return st.prozent;
      }
    }catch(e){}
    return 0;
  }

  /* ---------- Ebene 1: Welche Prüfung? ---------- */
  window.renderPruefungen=function(){
    var v=document.getElementById('v-pruefung'); if(!v) return;
    v.innerHTML =
        '<div class="pf-kopf">'
      +   '<span class="pf-kicker">Prüfungsvorbereitung</span>'
      +   '<h1>Keine Angst mehr vor der Prüfung.</h1>'
      +   '<p>Du weißt vorher, was drankommt, wie lange du hast und wie bewertet wird. '
      +   'Und du hast es geübt, bevor es zählt.</p>'
      +   '<a class="pf-test" href="niveau-test-club.html" target="_blank" rel="noopener">'
      +     '<span class="pf-test-ic">🎯</span>'
      +     '<span class="pf-test-tx"><b>Du weißt nicht, welche Prüfung?</b>'
      +     '<span>Der Einstufungstest sagt es dir in 15 Minuten — 112 Aufgaben, mit Auswertung.</span></span>'
      +     '<span class="pf-test-go">Test starten →</span>'
      +   '</a>'
      + '</div>'
      + '<div class="pf-gruppe"><span class="pf-gr-t">Die Sprachprüfungen</span></div>'
      + '<div class="pf-liste">' + PRUEFUNGEN.filter(function(p){ return !p.fach; }).map(kachel).join('') + '</div>'
      + '<div class="pf-gruppe"><span class="pf-gr-t">Für deinen Beruf</span></div>'
      + '<div class="pf-liste">' + PRUEFUNGEN.filter(function(p){ return p.fach; }).map(kachel).join('') + '</div>';
    try{ window.scrollTo(0,0); }catch(e){}
  };

  function lektionZahl(p){
    var n=0, m=LEKTIONEN[p.kurs]||{};
    for(var k in m) if(m.hasOwnProperty(k)) n+=m[k].length;
    if(ZUSATZ[p.id]) n+=ZUSATZ[p.id].lektionen.length;
    if(!n && p.stufe && window.kursStand){ try{ var st=window.kursStand(p.stufe); if(st) n=st.anzahl; }catch(e){} }
    return n ? (n+' Lektionen') : 'im Aufbau';
  }

  function kachel(p){
    /* Die Farbwelt steigt mit dem Niveau — dieselbe wie auf der Prüfungsseite. */
    return '<button type="button" class="pf-k pf-w-'+farbwelt(p)+'" onclick="pruefungOeffnen(\'' + p.id + '\')">'
      + '<span class="pf-k-bild"><img src="bilder/thema/'+p.bild+'-s.jpg" alt="" loading="lazy" onerror="this.remove()">'
      +   '<span class="pf-k-niv">'+E(p.niveau)+'</span></span>'
      + '<span class="pf-k-tx">'
      +   '<span class="pf-k-n">'+E(p.name)+'</span>'
      +   '<span class="pf-k-a">'+E(p.anbieter)+'</span>'
      +   '<span class="pf-k-f">'+E(p.fuer)+'</span>'
      + '</span>'
      + '<span class="pf-k-r"><span class="pf-k-anz">'+lektionZahl(p)+'</span>'
      +   '<span class="pf-k-go">Öffnen →</span></span>'
      + '</button>';
  }

  /* ============================================================
     Ebene 2 — Die Prüfungsseite

     Farbiger Kopf, links die Schrittleiste, rechts der offene Bereich.
     Die Farbwelt richtet sich nach dem Niveau: A1 und A2 türkis,
     B1 gold, B2 rot, C1 violett. Man sieht am Kopf, wie weit oben
     man gerade ist.
     ============================================================ */

  var NIVEAUFARBE = {
    'A1':'a', 'A2':'a', 'A2–B1':'b1', 'B1':'b1', 'A2–B2':'b1',
    'B1–B2':'b2', 'B2':'b2', 'B2–C1':'c1', 'C1':'c1'
  };
  function farbwelt(p){ return NIVEAUFARBE[p.niveau] || 'a'; }

  /* Der aufmunternde Halbsatz hinter dem Namen — bekommt den Marker */
  var MUTMACHER = {
    'a':'du schaffst das', 'b1':'Schritt für Schritt',
    'b2':'du bist fast da', 'c1':'die Königsklasse'
  };

  var MODUL_STIL = {
    hoeren:{z:'🎧',f:'turq'}, lesen:{z:'📖',f:'gold'},
    schreiben:{z:'✍️',f:'rot'}, sprechen:{z:'💬',f:'gruen'},
    anamnese:{z:'🩺',f:'turq'}, doku:{z:'📋',f:'gold'}, fall:{z:'🧑‍⚕️',f:'rot'},
    uebergabe:{z:'🔁',f:'turq'}, angehoerige:{z:'👪',f:'rot'},
    telefon:{z:'📞',f:'turq'}, mail:{z:'✉️',f:'gold'}, kunden:{z:'🤝',f:'gruen'}
  };
  /* Ein Satz, der sagt, was in diesem Teil wirklich passiert */
  var MODUL_TEXT = {
    hoeren:'Ansagen, Gespräche, Durchsagen — du hörst jeden Text zweimal.',
    lesen:'Anzeigen, Schilder, Texte — verstehen, was wirklich gemeint ist.',
    schreiben:'Punkte gibt es für Vollständigkeit, nicht für schöne Sätze.',
    sprechen:'Sich vorstellen, fragen, bitten — meist in einer kleinen Gruppe.',
    anamnese:'Das Erstgespräch mit dem Patienten, in Alltagssprache.',
    doku:'Das Gehörte schriftlich festhalten — knapp und korrekt.',
    fall:'Den Fall der Kollegin vorstellen, in Fachsprache.',
    uebergabe:'Die Schichtübergabe: knapp, vollständig, in der richtigen Reihenfolge.',
    angehoerige:'Mit Bewohnern und Angehörigen sprechen — freundlich und klar.',
    telefon:'Anrufe annehmen, weiterleiten, Notizen machen.',
    mail:'E-Mails, die man gern liest — Anrede, Anliegen, Schluss.',
    kunden:'Das Kundengespräch: zuhören, nachfragen, eine Lösung anbieten.'
  };

  var BEREICHE = [
    { id:'module',  z:'🧩', f:'turq',  t:'Die Prüfungsteile',
      k:'Jeden Teil einzeln üben — mit den Lektionen, die dazugehören.' },
    { id:'muster',  z:'📝', f:'rot',   t:'Musterprüfung',
      k:'Ein kompletter Durchgang, so wie am Prüfungstag.' },
    { id:'material',z:'📚', f:'gold',  t:'Wortschatz & Grammatik',
      k:'Nicht irgendein Wortschatz — der, der in dieser Prüfung vorkommt.' },
    { id:'video',   z:'🎬', f:'lila',  t:'Videokurs',
      k:'Erklärungen zum Anschauen, direkt beim passenden Teil.' },
    { id:'bereit',  z:'🎯', f:'gruen', t:'Bist du bereit?',
      k:'Eine ehrliche Einschätzung, bevor du dich anmeldest.' }
  ];

  function gesamtProzent(p){
    var g=0; p.module.forEach(function(m){ g+=modulProzent(p,m); });
    return Math.round(g/Math.max(1,p.module.length));
  }
  function gesamtDauer(p){
    var min=0, ca=false;
    p.module.forEach(function(m){
      var z=String(m.m).match(/\d+/); if(z) min+=parseInt(z[0],10);
      if(String(m.m).indexOf('ca.')>=0) ca=true;
    });
    if(!min) return '—';
    var t = min>=60 ? (Math.floor(min/60)+' Std'+(min%60?' '+(min%60)+' Min':'')) : (min+' Min');
    return (ca?'ca. ':'')+t;
  }
  function lektionZahlP(p){
    var n=0, L=LEKTIONEN[p.kurs]||{};
    for(var k in L) n+=L[k].length;
    if(!n && p.stufe) return '14 im '+p.stufe+'-Kurs';
    return n ? (n+' Lektionen') : '—';
  }
  function bereichStand(p, b){
    if(b.id==='module'){
      var pr=gesamtProzent(p);
      return { text:p.module.length+' Teile · '+pr+' %', bar:pr };
    }
    if(b.id==='muster'){
      var da = p.muster && window.PRUEFUNG && window.PRUEFUNG[p.muster];
      return { text: da ? 'bereit zum Ansehen' : 'in Vorbereitung', leer:!da };
    }
    if(b.id==='material') return { text:'Lernbereich & Vokabeln' };
    if(b.id==='video')    return { text:'in Vorbereitung', leer:true };
    return { text:'noch kein Ergebnis', leer:true };
  }

  window.pruefungOeffnen=function(id, bereich){
    var p=pruefungVon(id); if(!p) return;
    var v=document.getElementById('v-pruefung'); if(!v) return;
    S('pruefLetzte', id);
    var offen = bereich || 'module';
    var welt = farbwelt(p), pr = gesamtProzent(p);

    var schritte = BEREICHE.map(function(b){
      var st=bereichStand(p,b);
      return '<button class="pf-st pf-f-'+b.f+(b.id===offen?' an':'')+(st.leer?' leer':'')+'" '
        + 'onclick="pruefungOeffnen(\'' + E(p.id) + '\',\'' + b.id + '\')">'
        + '<span class="pf-st-z">'+b.z+'</span>'
        + '<span class="pf-st-t"><b>'+E(b.t)+'</b><span>'+E(st.text)+'</span>'
        +   (st.bar!=null ? '<span class="pf-st-bar"><i style="width:'+Math.max(3,st.bar)+'%"></i></span>' : '')
        + '</span></button>';
    }).join('');

    var b=null;
    for(var i=0;i<BEREICHE.length;i++) if(BEREICHE[i].id===offen) b=BEREICHE[i];

    v.innerHTML =
        '<div class="pf-hero pf-n-'+welt+'">'
      +   '<span class="pf-punkte"></span>'
      +   '<span class="pf-blob pf-blob1"></span><span class="pf-blob pf-blob2"></span>'
      +   '<span class="pf-blob pf-blob3"></span>'
      +   '<img class="pf-hero-foto" src="bilder/thema/'+E(p.bild)+'.jpg" alt="" loading="lazy" onerror="this.remove()">'
      +   '<div class="pf-hero-in">'
      +     '<div class="pf-krumen"><button onclick="renderPruefungen()">Prüfungsvorbereitung</button>'
      +       '<span>›</span><b>'+E(p.name)+'</b></div>'
      +     '<div class="pf-hero-oben"><div>'
      +       '<div class="pf-pillen">'
      +         '<span class="pf-p pf-p-gold">'+E(p.niveau)+'</span>'
      +         '<span class="pf-p pf-p-weiss">'+E(p.anbieter)+'</span>'
      +         (pr>0 ? '<span class="pf-p pf-p-rot">🔥 '+pr+' % geschafft</span>' : '')
      +       '</div>'
      +       '<h1>'+E(p.name)+' — <span class="pf-mark">'+E(MUTMACHER[welt]||'du schaffst das')+'</span></h1>'
      +       '<p class="pf-lead">'+E(p.fuer)+'</p>'
      +     '</div>'
      +     '<div class="pf-ring" style="--p:'+pr+'"><i><b>'+pr+'%</b><span>vorbereitet</span></i></div>'
      +     '</div>'
      +     '<div class="pf-hfak">'
      +       '<div class="pf-hf"><span>Niveau</span><b>'+E(p.niveau)+'</b></div>'
      +       '<div class="pf-hf"><span>'+(p.module.length===4?'Module':'Teile')+'</span><b>'+p.module.length+'</b></div>'
      +       '<div class="pf-hf"><span>Prüfungsdauer</span><b>'+E(gesamtDauer(p))+'</b></div>'
      +       '<div class="pf-hf"><span>Abschluss</span><b>'
      +         (p.ohnePruefung?'ohne Zertifikat':(p.modular?'einzeln möglich':'ein Termin'))+'</b></div>'
      +       '<div class="pf-hf"><span>Lektionen</span><b>'+E(lektionZahlP(p))+'</b></div>'
      +     '</div>'
      +   '</div>'
      + '</div>'
      + '<div class="pf-body">'
      +   '<nav class="pf-rail"><h3>Deine Vorbereitung</h3>'
      +     '<div class="pf-rail-l">'+schritte+'</div>'
      +     '<div class="pf-termin"><span>⏳ Dein Termin</span><b>Noch nicht eingetragen</b>'
      +       '<em>Trag ihn ein — dann rechne ich dir aus, was pro Woche dran ist.</em>'
      +       '<button onclick="go(\'lernpfad\')">Termin eintragen</button></div>'
      +   '</nav>'
      +   '<div class="pf-inhalt">'
      +     '<div class="pf-kopfzeile"><h2>'+E(b?b.t:'')+'</h2><p>'+E(b?b.k:'')+'</p></div>'
      +     naechsterSchritt(p, offen)
      +     bereichInhalt(p, offen)
      +   '</div>'
      + '</div>';
    try{ window.scrollTo(0,0); }catch(e){}
  };

  /* Die goldene Zeile: was jetzt dran ist */
  function naechsterSchritt(p, bid){
    if(bid!=='module') return '';
    var L=LEKTIONEN[p.kurs]||{}, erste=null;
    for(var i=0;i<p.module.length && !erste;i++){
      var l=L[p.module[i].id];
      if(l && l.length) erste={ kurs:p.kurs, nr:l[0][0], t:l[0][1], modul:p.module[i].n };
    }
    if(!erste && p.stufe) erste={ stufe:p.stufe, t:'Lektion 1 — der Anfang', modul:p.module[0].n };
    if(!erste) return '';
    var klick = erste.kurs ? 'pruefLektion(\''+E(erste.kurs)+'\','+erste.nr+')'
                           : 'kursUebersicht(\''+E(erste.stufe)+'\')';
    return '<div class="pf-jetzt"><span class="pf-jetzt-z">👋</span>'
      + '<div class="pf-jetzt-t"><span>Als Nächstes dran</span><b>'+E(erste.t)+'</b>'
      +   '<em>zahlt auf '+E(erste.modul)+' ein</em></div>'
      + '<button class="pf-jetzt-b" onclick="'+klick+'">Los geht\'s →</button></div>';
  }

  function bereichInhalt(p, id){
    if(id==='module')   return moduleBlock(p);
    if(id==='muster')   return musterBlock(p);
    if(id==='material') return materialBlock(p);
    if(id==='video')    return videoBlock(p);
    if(id==='bereit')   return bereitBlock(p);
    return '';
  }

  /* 1 — Die Prüfungsteile als farbige Karten */
  function moduleBlock(p){
    var karten = p.module.map(function(m){
      var pr  = modulProzent(p,m);
      var lek = (LEKTIONEN[p.kurs]||{})[m.id] || [];
      var st  = MODUL_STIL[m.id] || { z:'📝', f:'turq' };
      var txt = MODUL_TEXT[m.id] || '';
      var inhalt;

      if(lek.length){
        inhalt = '<div class="pf-m-lek">' + lek.map(function(l){
          return '<button class="pf-m-l" onclick="pruefLektion(\''+E(p.kurs)+'\','+l[0]+')">'
            + '<i>'+l[0]+'</i>'+E(l[1])+'<span>→</span></button>';
        }).join('') + '</div>';
      } else if(p.stufe){
        inhalt = '<button class="pf-m-b" onclick="kursUebersicht(\''+E(p.stufe)+'\')">Zum '
          + E(p.stufe)+'-Kurs →</button>';
      } else {
        inhalt = '<span class="pf-m-bald">Eigene Lektionen kommen noch</span>';
      }

      return '<div class="pf-m pf-f-'+st.f+'">'
        + '<div class="pf-m-kopf"><span class="pf-m-z">'+st.z+'</span><b>'+E(m.n)+'</b>'
        +   '<span class="pf-m-min">'+E(m.m)+' Min</span></div>'
        + (txt ? '<p>'+E(txt)+'</p>' : '')
        + inhalt
        + '<div class="pf-m-f"><span class="pf-m-bar"><i style="width:'+Math.max(3,pr)+'%"></i></span>'
        +   '<span class="pf-m-pz">'+pr+' %</span></div>'
        + '</div>';
    }).join('');

    var hinweis = p.modular
      ? '<p class="pf-hinw">Diese Prüfung ist modular: Du kannst die Teile einzeln ablegen '
        + 'und einzeln wiederholen.</p>' : '';
    var zu = ZUSATZ[p.id] ? zusatzBlock(ZUSATZ[p.id]) : '';
    return hinweis + '<div class="pf-mods">'+karten+'</div>' + zu;
  }

  function zusatzBlock(z){
    return '<div class="pf-zusatz">'
      + '<b>Dazu passt: '+E(z.name)+'</b>'
      + '<span>Sechs Lektionen Fachsprache, die auf dieselbe Prüfung einzahlen.</span>'
      + '<div class="pf-zusatz-l">' + z.lektionen.map(function(l){
          return '<button class="pf-lek" onclick="pruefLektion(\''+z.kurs+'\','+l[0]+')">'
            + '<span class="pf-lek-nr">'+l[0]+'</span>'
            + '<span class="pf-lek-t">'+E(l[1])+'</span>'
            + '<span class="pf-lek-go">→</span></button>';
        }).join('') + '</div></div>';
  }

  window.pruefLektion=function(kurs, nr){
    try{ location.href='lektion.html?k='+encodeURIComponent(kurs)+'&l='+nr; }catch(e){}
  };

  window.pruefLektionen=function(kursId){
    try{ location.href='lektion.html?k='+encodeURIComponent(kursId)+'&l=1'; }catch(e){}
  };

  /* 2 — Musterprüfung */
  function musterBlock(p){
    var inhalt;
    if(p.muster && window.PRUEFUNG && window.PRUEFUNG[p.muster]){
      var m=window.PRUEFUNG[p.muster];
      var teile = m.teile.map(function(t){
        var n=(t.aufgaben||[]).length;
        return '<span class="pf-teil"><b>'+E(t.name||t.art)+'</b><span>'+n+' Aufgaben</span></span>';
      }).join('');
      inhalt='<div class="pf-muster">'
        +'<div class="pf-muster-tx"><b>'+E(m.titel)+'</b>'
        +'<span>'+m.minuten+' Minuten · '
        + m.teile.reduce(function(a,t){ return a+(t.aufgaben||[]).length; },0)+' Aufgaben</span>'
        +'<div class="pf-teile">'+teile+'</div>'
        +'<span class="pf-hinw2">Schreiben und Sprechen fehlen hier noch, ebenso die Uhr und die '
        +'Punktebewertung. Das ist Schritt 4.</span></div>'
        +'<button class="pf-b1" onclick="pruefMusterStarten(\''+p.muster+'\')">Aufgaben ansehen →</button>'
        +'</div>';
    } else {
      inhalt='<div class="pf-leer">Für diese Prüfung gibt es noch keine Musterprüfung. '
        +'Vorhanden sind bisher A2, B1, B2 und C1.</div>';
    }
    return block('2', 'Musterprüfung', inhalt, 'pf-must');
  }

  window.pruefMusterStarten=function(k){
    try{ if(window.toast) toast('Die Musterprüfung wird in Schritt 4 eingebaut — die Aufgaben liegen schon bereit ('+k+').'); }catch(e){}
  };

  /* 3 — Wortschatz und Grammatik */
  function materialBlock(p){
    var inhalt='<div class="pf-mat">'
      +'<p>Die vorhandenen Grammatik- und Wortschatzseiten werden hier eingehängt: '
      +'17 Grammatikkapitel, 34 Wortschatzseiten, 8 Aussprachekapitel.</p>'
      +'<div class="pf-mat-knoepfe">'
      +'<button class="pf-b2 pf-b-s" onclick="go(\'lernen\')">Zum Lernbereich →</button>'
      +'<button class="pf-b2 pf-b-s" onclick="go(\'vokabeln\')">Vokabeltrainer →</button>'
      +'</div></div>';
    return block('3', 'Wortschatz & Grammatik für diese Prüfung', inhalt, 'pf-mat-b');
  }

  /* 4 — Videokurs */
  function videoBlock(p){
    var inhalt='<div class="pf-video">'
      +'<div class="pf-video-platz"><span>▶</span></div>'
      +'<div class="pf-video-tx"><b>Deine Videos kommen hierher</b>'
      +'<span>Ein Video pro Thema, direkt im Modul, zu dem es gehört — nicht in einer eigenen '
      +'Videothek. Wer beim Schreiben hängt, findet das Schreiben-Video im Schreiben-Modul.</span></div>'
      +'</div>';
    return block('4', 'Videokurs', inhalt, 'pf-vid');
  }

  /* 5 — Bist du bereit? */
  function bereitBlock(p){
    var inhalt='<div class="pf-bereit">'
      +'<p>Am Ende steht hier eine ehrliche Einschätzung: Punkteprognose aus deinen '
      +'Trainingsergebnissen, Modul für Modul — und die klare Ansage, wenn eines noch nicht reicht.</p>'
      +'<div class="pf-bereit-m">'
      + p.module.map(function(m){ return '<span class="pf-bereit-z"><b>'+E(m.n)+'</b><span>noch kein Ergebnis</span></span>'; }).join('')
      +'</div></div>';
    return block('5', 'Bist du bereit?', inhalt, 'pf-ber');
  }

  /* Auf einer Unterseite steht der Titel schon oben im Kopf —
     der Abschnitt darunter braucht dann keine zweite Überschrift. */
  /* Der Titel steht schon oben in der Kopfzeile — hier nur der Inhalt. */
  function block(nr, titel, inhalt, kls){
    return '<section class="pf-block '+(kls||'')+'" data-nr="'+nr+'">' + inhalt + '</section>';
  }

  window.PRUEFUNGEN_DATEN = PRUEFUNGEN;
})();
