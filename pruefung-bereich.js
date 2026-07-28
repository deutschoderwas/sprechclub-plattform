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
    return '<button type="button" class="pf-k" onclick="pruefungOeffnen(\'' + p.id + '\')">'
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

  /* ---------- Ebene 2: Die Prüfungsseite ---------- */
  window.pruefungOeffnen=function(id){
    var p=pruefungVon(id); if(!p) return;
    var v=document.getElementById('v-pruefung'); if(!v) return;
    S('pruefLetzte', id);

    v.innerHTML =
        '<button class="pf-zurueck" onclick="renderPruefungen()">← Alle Prüfungen</button>'
      + '<div class="pf-hero">'
      +   '<img class="pf-hero-foto" src="bilder/thema/'+p.bild+'.jpg" alt="" loading="lazy" onerror="this.remove()">'
      +   '<span class="pf-hero-schleier"></span>'
      +   '<span class="pf-streifen"></span>'
      +   '<div class="pf-hero-tx">'
      +     '<span class="pf-kicker">'+E(p.niveau)+' · '+E(p.anbieter)+'</span>'
      +     '<h1>'+E(p.name)+'</h1>'
      +     '<p>'+E(p.fuer)+'</p>'
      +   '</div>'
      + '</div>'
      + faktenLeiste(p)
      + kachelMenue(p);
    try{ window.scrollTo(0,0); }catch(e){}
  };

  /* ---------- Ebene 3: ein einzelner Bereich ----------
     Jeder der fünf Bereiche ist eine eigene Seite. Oben ein Weg zurück,
     darunter nur dieser eine Bereich — statt einer Seite, die nie endet. */
  var BEREICHE = [
    { id:'module',  nr:'1', z:'🧩', f:'turq',   t:'Die Prüfungsteile',
      k:'Jeden Teil einzeln üben — mit den Lektionen, die dazugehören.' },
    { id:'muster',  nr:'2', z:'📝', f:'rot',    t:'Musterprüfung',
      k:'Ein kompletter Durchgang, so wie am Prüfungstag.' },
    { id:'material',nr:'3', z:'📚', f:'gold',   t:'Wortschatz & Grammatik',
      k:'Nicht irgendein Wortschatz — der, der in dieser Prüfung vorkommt.' },
    { id:'video',   nr:'4', z:'🎬', f:'dunkel', t:'Videokurs',
      k:'Erklärungen zum Anschauen, direkt beim passenden Teil.' },
    { id:'bereit',  nr:'5', z:'🎯', f:'turq',   t:'Bist du bereit?',
      k:'Eine ehrliche Einschätzung, bevor du dich anmeldest.' }
  ];

  function bereichInhalt(p, id){
    if(id==='module')   return moduleBlock(p);
    if(id==='muster')   return musterBlock(p);
    if(id==='material') return materialBlock(p);
    if(id==='video')    return videoBlock(p);
    if(id==='bereit')   return bereitBlock(p);
    return '';
  }

  /* Was auf der Kachel als Stand steht */
  function bereichStand(p, b){
    if(b.id==='module'){
      var g=0; p.module.forEach(function(m){ g+=modulProzent(p,m); });
      var pr=Math.round(g/Math.max(1,p.module.length));
      return { text: pr+' % geübt', bar: pr };
    }
    if(b.id==='muster'){
      var da = p.muster && window.PRUEFUNG && window.PRUEFUNG[p.muster];
      return { text: da ? 'bereit zum Ansehen' : 'kommt noch', leer: !da };
    }
    if(b.id==='bereit') return { text:'noch kein Ergebnis', leer:true };
    if(b.id==='video')  return { text:'kommt noch', leer:true };
    return { text:'Lernbereich & Vokabeln' };
  }

  function kachelMenue(p){
    var kacheln = BEREICHE.map(function(b){
      var st = bereichStand(p, b);
      return '<button class="pf-k pf-f-'+b.f+(st.leer?' pf-k-leer':'')+'" '
        + 'onclick="pruefBereich(\''+p.id+'\',\''+b.id+'\')">'
        + '<span class="pf-k-ic">'+b.z+'</span>'
        + '<span class="pf-k-tx">'
        +   '<span class="pf-k-nr">Bereich '+b.nr+'</span>'
        +   '<b>'+E(b.t)+'</b>'
        +   '<span class="pf-k-k">'+E(b.k)+'</span>'
        + '</span>'
        + (st.bar!=null ? '<span class="pf-bar"><i style="width:'+Math.max(2,st.bar)+'%"></i></span>' : '')
        + '<span class="pf-k-fuss">'
        +   '<span class="pf-k-st">'+E(st.text)+'</span>'
        +   '<span class="pf-k-go">→</span>'
        + '</span></button>';
    }).join('');
    return '<div class="pf-mtitel"><h2>Das bekommst du hier</h2>'
      + '<p>Fünf Bereiche. Such dir aus, woran du heute arbeitest.</p></div>'
      + '<div class="pf-kacheln">' + kacheln + '</div>';
  }

  window.pruefBereich=function(pid, bid){
    var p=pruefungVon(pid); if(!p) return;
    var b=null; for(var i=0;i<BEREICHE.length;i++) if(BEREICHE[i].id===bid) b=BEREICHE[i];
    if(!b) return;
    var v=document.getElementById('v-pruefung'); if(!v) return;

    var andere = BEREICHE.filter(function(x){ return x.id!==bid; }).map(function(x){
      return '<button class="pf-weiter-k pf-f-'+x.f+'" onclick="pruefBereich(\''+p.id+'\',\''+x.id+'\')">'
        + '<span>'+x.z+'</span>'+E(x.t)+'</button>';
    }).join('');

    v.innerHTML =
        '<button class="pf-zurueck" onclick="pruefungOeffnen(\''+p.id+'\')">← '+E(p.name)+'</button>'
      + '<div class="pf-bkopf pf-f-'+b.f+'">'
      +   '<span class="pf-bkopf-ic">'+b.z+'</span>'
      +   '<div><span class="pf-bkopf-k">'+E(p.name)+' · '+E(p.niveau)+' · Bereich '+b.nr+'</span>'
      +   '<h1>'+E(b.t)+'</h1><p>'+E(b.k)+'</p></div>'
      + '</div>'
      + bereichInhalt(p, bid)
      + '<div class="pf-weiter"><span class="pf-weiter-t">Weiter zu einem anderen Bereich</span>'
      +   '<div class="pf-weiter-l">'+andere+'</div></div>';
    try{ window.scrollTo(0,0); }catch(e){}
  };

  /* Die Prüfung auf einen Blick — vier harte Zahlen statt Fließtext */
  function faktenLeiste(p){
    var min = 0, unklar = false;
    p.module.forEach(function(m){
      var z = String(m.m).match(/\d+/);
      if(z) min += parseInt(z[0],10);
      if(String(m.m).indexOf('ca.')>=0) unklar = true;
    });
    var dauer = min ? ((unklar?'ca. ':'') + (min>=60 ? Math.floor(min/60)+' Std ' + (min%60?(min%60)+' Min':'') : min+' Min')) : '—';
    var f = [
      ['Niveau',   E(p.niveau)],
      ['Teile',    p.module.length + (p.module.length===4?' Module':' Teile')],
      ['Dauer',    dauer.trim()],
      ['Abschluss', p.ohnePruefung ? 'ohne Zertifikat' : (p.modular ? 'einzeln möglich' : 'ein Termin')]
    ];
    return '<div class="pf-fakten">' + f.map(function(x){
      return '<div class="pf-fakt"><span>'+x[0]+'</span><b>'+x[1]+'</b></div>';
    }).join('') + '</div>';
  }

  /* Jeder Prüfungsteil hat sein eigenes Zeichen und seine eigene Farbe —
     so erkennt man Hören, Lesen, Schreiben und Sprechen sofort wieder. */
  var MODUL_STIL = {
    hoeren:     { z:'🎧', f:'turq' }, lesen:  { z:'📖', f:'gold' },
    schreiben:  { z:'✍️', f:'rot'  }, sprechen:{ z:'💬', f:'dunkel' },
    anamnese:   { z:'🩺', f:'turq' }, doku:   { z:'📋', f:'gold' },
    fall:       { z:'🧑‍⚕️', f:'rot' },
    uebergabe:  { z:'🔁', f:'turq' }, angehoerige:{ z:'👪', f:'rot' },
    telefon:    { z:'📞', f:'turq' }, mail:   { z:'✉️', f:'gold' },
    kunden:     { z:'🤝', f:'rot'  }
  };

  /* 1 — Die Module */
  function moduleBlock(p){
    var hinweis = p.modular
      ? '<p class="pf-hinw">Diese Prüfung ist modular: Du kannst die vier Teile einzeln ablegen und '
        +'einzeln wiederholen. Deshalb steht jedes Modul hier für sich.</p>' : '';

    var karten = p.module.map(function(m){
      var pr = modulProzent(p,m);
      var lek = (LEKTIONEN[p.kurs]||{})[m.id] || [];
      var inhalt;

      if(lek.length){
        inhalt = '<div class="pf-m-lek">' + lek.map(function(l){
          return '<button class="pf-lek" onclick="pruefLektion(\''+p.kurs+'\','+l[0]+')">'
            + '<span class="pf-lek-nr">'+l[0]+'</span>'
            + '<span class="pf-lek-t">'+E(l[1])+'</span>'
            + '<span class="pf-lek-go">→</span></button>';
        }).join('') + '</div>';
      } else if(p.stufe){
        inhalt = '<p class="pf-m-text">Für diesen Teil üben wir vorerst im '+E(p.stufe)+'-Kurs. '
          + 'Eigene Prüfungslektionen kommen noch.</p>'
          + '<button class="pf-b2 pf-b-s" onclick="kursUebersicht(\''+p.stufe+'\')">Zum '+E(p.stufe)+'-Kurs →</button>';
      } else {
        inhalt = '<p class="pf-m-text">Ablauf, Aufgabentypen und ein Durchgang unter Zeit — '
          + 'dieser Teil wird gerade gebaut.</p>'
          + '<span class="pf-bald">kommt noch</span>';
      }

      var st = MODUL_STIL[m.id] || { z:'📝', f:'turq' };
      return '<div class="pf-m pf-f-'+st.f+'">'
        +'<div class="pf-m-kopf">'
        +  '<span class="pf-m-ic">'+st.z+'</span>'
        +  '<span class="pf-m-tx"><b>'+E(m.n)+'</b><span>'+E(m.m)+' Min</span></span>'
        +'</div>'
        + inhalt
        +'<div class="pf-m-fuss"><span class="pf-bar"><i style="width:'+Math.max(2,pr)+'%"></i></span>'
        +'<span class="pf-proz">'+pr+' %</span></div>'
        +'</div>';
    }).join('');

    var zu = ZUSATZ[p.id] ? zusatzBlock(ZUSATZ[p.id]) : '';
    var titel = p.module.length===4 ? 'Die vier Module' : 'Die Prüfungsteile';
    return block('1', titel, hinweis+'<div class="pf-module">'+karten+'</div>'+zu, 'pf-mod');
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
      +'<p>Nicht irgendein Wortschatz, sondern der, der in dieser Prüfung vorkommt. '
      +'Die vorhandenen Grammatik- und Wortschatzseiten werden in Schritt 3 hier eingehängt: '
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
  function block(nr, titel, inhalt, kls){
    return '<section class="pf-block pf-block-solo '+(kls||'')+'" data-nr="'+nr+'">'
      + inhalt + '</section>';
  }

  window.PRUEFUNGEN_DATEN = PRUEFUNGEN;
})();
