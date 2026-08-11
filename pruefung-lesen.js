/* ============================================================
   deutschoderwas club — LESETRAINING

   Der Übungsteil der Prüfungsvorbereitung. Öffnet sich als
   Vollbild über der Prüfungsseite, so wie die Runde im
   Vokabeltrainer.

   Der Weg hat vier Stufen, wie ein Lehrbuch aufgebaut:

     1  Wortschatz    die Wörter auf Schildern, Zeit, Orte
     2  Strategie     außer, nur, ab, bis, kein
     3  Aufgabentypen die drei Prüfungsteile einzeln
     4  Prüfungslauf  15 Aufgaben mit Uhr, ohne Hilfe

   Empfohlen wird von oben nach unten — anklickbar ist alles
   sofort. Wer gezielt eine Schwachstelle üben will, springt hin.

   Sieben Aufgabenformen:

     wahl       drei Möglichkeiten, eine stimmt
     zuordnen   vier Paare verbinden
     luecke     Lückentext mit Wortbank
     wortklick  das entscheidende Wort im Schild antippen
     rf         zwei Kurztexte + Aussage richtig/falsch
     anzeigen   eine Situation, zwei Anzeigen, a oder b
     schild     ein Schild + Aussage richtig/falsch

   Vier Bildarten, die die Oberfläche selbst zeichnet — damit
   nichts von Bilddateien abhängt, die fehlen können:

     schild  ein Hinweisschild        tafel   Öffnungszeiten
     uhr     eine Analoguhr (SVG)     symbol  Emoji mit Label

   Nach jeder Antwort wird die beweisende Textstelle gelb
   markiert. Das ist der eigentliche Lerninhalt: nicht dass die
   Antwort falsch war, sondern wo im Text sie gestanden hätte.

   Im Prüfungslauf gibt es bewusst KEINE Rückmeldung zwischendurch
   — erst am Ende, dann aber Aufgabe für Aufgabe zum Durchgehen.

   Gespeichert wird pro Einheit das beste Ergebnis, unter dem
   Schlüssel pruefLesen. Daraus zieht die Prüfungsseite den
   Prozentwert für das Modul Lesen.
   ============================================================ */
(function(){
  'use strict';

  function E(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function J(k,d){ try{ if(window.lsGet) return lsGet(k,d);
    var v=JSON.parse(localStorage.getItem('ub_'+k)); return v==null?d:v; }catch(e){ return d; } }
  function S(k,v){ try{ if(window.lsSet) return lsSet(k,v);
    localStorage.setItem('ub_'+k,JSON.stringify(v)); }catch(e){} }

  /* ---------- Datenzugriff ---------- */

  var QUELLEN = { 'A1':'LESEN_A1', 'A2':'LESEN_A2', 'B1':'LESEN_B1' };
  function datenVon(niveau){ var n=QUELLEN[niveau]; return n ? (window[n]||null) : null; }
  window.lesenVorhanden = function(niveau){ return !!datenVon(niveau); };
  window.lesenDaten = function(niveau){ return datenVon(niveau); };

  function blockVon(d, id){ for(var i=0;i<d.bloecke.length;i++) if(d.bloecke[i].id===id) return d.bloecke[i]; return null; }
  function teilVon(d, nr){ for(var i=0;i<d.teile.length;i++) if(d.teile[i].nr===nr) return d.teile[i]; return null; }
  function laufVon(d, id){ for(var i=0;i<d.laeufe.length;i++) if(d.laeufe[i].id===id) return d.laeufe[i]; return null; }

  function anzahlIn(x){
    if(x.aufgaben) return x.aufgaben.length;
    if(x.teile) return x.teile.reduce(function(a,t){ return a+t.aufgaben.length; },0);
    if(x.runden) return x.runden.reduce(function(a,r){ return a+r.aufgaben.length; },0);
    return 0;
  }

  /* ---------- Fortschritt ----------
     { A1: { b:{ 's1b1':10 }, '1':{ 't1r1':5 }, l:{ 'p1':13 } } }
     Gespeichert wird immer das beste Ergebnis.                    */

  function stand(){ return J('pruefLesen', {}) || {}; }

  function merken(niveau, topf, id, punkte){
    var st = stand();
    if(!st[niveau]) st[niveau] = {};
    if(!st[niveau][topf]) st[niveau][topf] = {};
    if(punkte > (st[niveau][topf][id]||0)) st[niveau][topf][id] = punkte;
    S('pruefLesen', st);
  }
  function holen(niveau, topf, id){ return ((stand()[niveau]||{})[topf]||{})[id]; }

  function blockStand(niveau, b){
    var p = holen(niveau,'b',b.id), max = b.aufgaben.length;
    return { punkte:p||0, max:max, gemacht:p!=null, prozent: p==null?0:Math.round(p/max*100) };
  }
  function teilStand(niveau, teil){
    var max=0, hat=0, fertig=0;
    teil.runden.forEach(function(r){
      max += r.aufgaben.length;
      var p = holen(niveau, teil.nr, r.id);
      if(p!=null){ hat+=p; if(p>=r.aufgaben.length) fertig++; }
    });
    return { punkte:hat, max:max, fertig:fertig, runden:teil.runden.length,
             prozent: max?Math.round(hat/max*100):0 };
  }
  function laufStand(niveau, L){
    var p = holen(niveau,'l',L.id), max = anzahlIn(L);
    return { punkte:p||0, max:max, gemacht:p!=null, prozent: p==null?0:Math.round(p/max*100) };
  }

  window.lesenProzent = function(niveau){
    var d = datenVon(niveau); if(!d) return null;
    var hat=0, max=0;
    d.bloecke.forEach(function(b){ var s=blockStand(niveau,b); hat+=s.punkte; max+=s.max; });
    d.teile.forEach(function(t){ var s=teilStand(niveau,t); hat+=s.punkte; max+=s.max; });
    d.laeufe.forEach(function(L){ var s=laufStand(niveau,L); hat+=s.punkte; max+=s.max; });
    return max ? Math.round(hat/max*100) : 0;
  };

  /* Was ist als Nächstes dran? Erste Einheit, die noch nicht voll ist. */
  window.lesenNaechstes = function(niveau){
    var d = datenVon(niveau); if(!d) return null;
    for(var i=0;i<d.bloecke.length;i++){ var b=d.bloecke[i], s=blockStand(niveau,b);
      if(s.punkte < s.max) return { was:'Stufe '+b.stufe+' — '+b.titel, klick:"lesenBlock('"+b.id+"')" }; }
    for(var j=0;j<d.teile.length;j++){ var t=d.teile[j];
      for(var k=0;k<t.runden.length;k++){ var r=t.runden[k], p=holen(niveau,t.nr,r.id);
        if(p==null || p<r.aufgaben.length)
          return { was:'Teil '+t.nr+' — '+t.name+', Runde '+(k+1), klick:"lesenRunde("+t.nr+",'"+r.id+"')" }; } }
    for(var m=0;m<d.laeufe.length;m++){ var Lf=d.laeufe[m], sl=laufStand(niveau,Lf);
      if(sl.punkte < sl.max) return { was:Lf.titel+' — 15 Aufgaben mit Uhr', klick:"lesenLauf('"+Lf.id+"')" }; }
    return null;
  };

  /* ---------- Zustand ---------- */

  var L = null;
  /* { niveau, daten, modus, titel, unter, topf, id, folge[], i,
       punkte, offen[], gewaehlt[], sofort, uhrEnde, uhrId } */

  /* ---------- Bilder, die wir selbst zeichnen ---------- */

  function uhrSVG(zeit){
    var t = String(zeit||'12:00').split(':');
    var h = parseInt(t[0],10)%12, m = parseInt(t[1],10)||0;
    var wm = m*6, wh = h*30 + m*0.5;
    var str = [];
    for(var i=0;i<12;i++){
      var w = i*30*Math.PI/180;
      var x1 = 50+Math.sin(w)*38, y1 = 50-Math.cos(w)*38;
      var x2 = 50+Math.sin(w)*43, y2 = 50-Math.cos(w)*43;
      str.push('<line x1="'+x1.toFixed(1)+'" y1="'+y1.toFixed(1)+'" x2="'+x2.toFixed(1)
        +'" y2="'+y2.toFixed(1)+'" stroke="#28353B" stroke-width="'+(i%3===0?2.6:1.2)+'" stroke-linecap="round"/>');
    }
    return '<svg class="pl-uhr" viewBox="0 0 100 100" role="img" aria-label="Uhrzeit '+E(zeit)+'">'
      + '<circle cx="50" cy="50" r="47" fill="#fff" stroke="#28353B" stroke-width="3"/>'
      + str.join('')
      + '<line x1="50" y1="50" x2="'+(50+Math.sin(wh*Math.PI/180)*24).toFixed(1)+'" y2="'
      +   (50-Math.cos(wh*Math.PI/180)*24).toFixed(1)+'" stroke="#28353B" stroke-width="5" stroke-linecap="round"/>'
      + '<line x1="50" y1="50" x2="'+(50+Math.sin(wm*Math.PI/180)*34).toFixed(1)+'" y2="'
      +   (50-Math.cos(wm*Math.PI/180)*34).toFixed(1)+'" stroke="#D83636" stroke-width="3.4" stroke-linecap="round"/>'
      + '<circle cx="50" cy="50" r="3.4" fill="#28353B"/></svg>';
  }

  function bildHTML(b){
    if(!b) return '';
    if(b.art==='schild'){
      return '<div class="pl-bild"><div class="pl-schild">'
        + b.zeilen.map(function(z){ return '<span>'+E(z)+'</span>'; }).join('')
        + '</div></div>';
    }
    if(b.art==='tafel'){
      return '<div class="pl-bild"><div class="pl-tafel">'
        + (b.titel ? '<b>'+E(b.titel)+'</b>' : '')
        + '<table>' + b.zeilen.map(function(z){
            return '<tr><td>'+E(z[0])+'</td><td>'+E(z[1])+'</td></tr>'; }).join('')
        + '</table></div></div>';
    }
    if(b.art==='uhr'){
      return '<div class="pl-bild"><div class="pl-uhr-w">'+uhrSVG(b.zeit)+'</div></div>';
    }
    if(b.art==='symbol'){
      return '<div class="pl-bild"><div class="pl-symbol"><span>'+b.zeichen+'</span>'
        + '<em>'+E(b.label||'')+'</em></div></div>';
    }
    return '';
  }

  /* Markiert die beweisende Stelle. Erst nach dem Antworten. */
  function markiert(zeile, stelle){
    if(!stelle) return E(zeile);
    var i = zeile.indexOf(stelle);
    if(i<0) return E(zeile);
    return E(zeile.slice(0,i)) + '<mark>' + E(stelle) + '</mark>' + E(zeile.slice(i+stelle.length));
  }

  var SORTE_KOPF = { email:{z:'✉️',t:'E-Mail'}, zettel:{z:'📝',t:'Zettel'},
                     sms:{z:'💬',t:'Nachricht'}, aushang:{z:'📌',t:'Aushang'} };

  /* ---------- Symbolbilder ----------
     Ein Motiv pro Text. Die Bilder liegen in bilder/lesen/<schluessel>.webp.
     Fehlt eine Datei, zeigt die Karte still das Ersatzzeichen — nie ein
     kaputtes Bild. So kann die Bildersammlung nach und nach wachsen.        */

  var MOTIVE = [
    ['zahnarzt',   /zahnarzt|zahnärzt|zahn/,                         '🦷'],
    ['praxis',     /praxis|arztpraxis|hausarzt|ärzt|doktor|dr\./,     '🩺'],
    ['apotheke',   /apotheke/,                                       '💊'],
    ['kita',       /kita|kinderg|krippe|tagesmutter|tagesvater|elternabend/, '🧸'],
    ['schule',     /schulsekretariat|grundschule|schule(?!.*sprach)/, '🎒'],
    ['sprachschule',/sprachschule|volkshochschule|vhs|deutschkurs|lernstudio|lernhaus|nachhilfe/, '📚'],
    ['bibliothek', /bibliothek|bücherei/,                            '📖'],
    ['amt',        /bürgeramt|rathaus|stadtverwaltung|marktamt|amt\b|behörde/, '🏛️'],
    ['paket',      /paket|päckchen|sendung|dhl|packstation/,          '📦'],
    ['nachbar',    /nachbar|haustür|wohnung \d|hausflur|treppenhaus/,  '🚪'],
    ['hausmeister',/hausmeister|keller|abstellraum/,                 '🧰'],
    ['aufzug',     /aufzug|fahrstuhl/,                               '🛗'],
    ['muell',      /mülltonne|müll|abfall|papiertonne/,              '🗑️'],
    ['wohnung',    /hausverwaltung|wohnung|zimmer, |qm|miete|warm\b/,  '🏠'],
    ['umzug',      /umzug|umziehen|kisten tragen|möbel/,             '📦'],
    ['handwerker', /handwerker|reparatur|maler|elektrik|klempner/,   '🔧'],
    ['reinigung',  /reinigung|putz|wäscherei|waschsalon/,            '🧽'],
    ['fahrrad',    /fahrrad|damenrad|herrenrad|radhaus|zoll/,        '🚲'],
    ['werkstatt',  /autowerkstatt|werkstatt|reifen|inspektion/,      '🔩'],
    ['auto',       /autohaus|auto|wagen|führerschein/,               '🚗'],
    ['bahn',       /bahnsteig|bahnhof|gleis|zug\b|fahrkarte|db\b/,    '🚉'],
    ['bus',        /bushaltestelle|bus\b|straßenbahn|haltestelle/,    '🚌'],
    ['reise',      /reisebüro|urlaub|reise|flug/,                    '🧳'],
    ['schwimmbad', /schwimmbad|freibad|hallenbad|schwimm/,           '🏊'],
    ['sport',      /sv |fc |sportverein|fußball|training/,           '⚽'],
    ['fitness',    /fitness|studio aktiv|vital/,                     '🏋️'],
    ['yoga',       /yoga|pilates|meditation/,                        '🧘'],
    ['musik',      /musikschule|gitarre|klavier|geige|musik/,        '🎸'],
    ['baeckerei',  /bäckerei|brötchen|brot|konditorei/,              '🥐'],
    ['cafe',       /café|cafe|kaffee|kuchen/,                        '☕'],
    ['supermarkt', /supermarkt|pfandautomat|einkauf|kasse/,          '🛒'],
    ['friseur',    /salon|friseur|haare schneiden/,                  '💇'],
    ['tier',       /hund|katze|tierfreund|gassi|haustier/,           '🐕'],
    ['kino',       /kino|film|vorstellung/,                          '🎬'],
    ['spielplatz', /spielplatz|schaukel|sandkasten/,                 '🛝'],
    ['buero',      /bürogebäude|büro|sekretariat|firma/,             '🏢'],
    ['strasse',    /baustelle|gehweg|straße|zentrum/,                '🚧'],
    ['nachbarschaft',/nachbarschaftshilfe|helfen|ehrenamt/,          '🤝'],
    ['familie',    /familie|oma|opa|mama|papa|schwester|bruder/,     '👪']
  ];

  var SORTE_MOTIV = { email:'mail', sms:'handy', aushang:'aushang', zettel:'zettel' };

  function motivVon(heu, ersatz){
    var h = String(heu||'').toLowerCase();
    for(var i=0;i<MOTIVE.length;i++) if(MOTIVE[i][1].test(h)) return MOTIVE[i];
    return [ersatz||'allgemein', null, ''];
  }

  function heuhaufen(){
    var t=[];
    for(var i=0;i<arguments.length;i++){
      var a=arguments[i];
      if(a==null) continue;
      t.push(Array.isArray(a) ? a.join(' ') : String(a));
    }
    return t.join(' ');
  }

  function motivHTML(m, zeichen, klasse){
    return '<span class="pl-motiv '+(klasse||'')+'">'
      + '<img src="bilder/lesen/'+E(m[0])+'.webp" alt="" loading="lazy" decoding="async"'
      +   ' onerror="this.parentNode.className+=\' leer\'; this.remove()">'
      + '<em>'+(m[2]||zeichen||'')+'</em></span>';
  }

  function textKarte(t, stelle){
    var k = SORTE_KOPF[t.sorte] || SORTE_KOPF.zettel;
    var m = motivVon(heuhaufen(t.von, t.betreff, t.zeilen), SORTE_MOTIV[t.sorte]||'zettel');
    return '<div class="pl-text pl-s-'+E(t.sorte)+'">'
      + '<div class="pl-text-kopf">'+motivHTML(m, k.z)
      +   '<span class="pl-text-m"><b>'+E(t.von)+'</b><span>'+E(t.betreff||k.t)+'</span></span></div>'
      + '<div class="pl-text-k">'
      +   t.zeilen.map(function(z){ return '<span>'+markiert(z,stelle)+'</span>'; }).join('')
      + '</div></div>';
  }

  function anzeigeKarte(a, buchstabe, klasse, klick){
    return '<button type="button" class="pl-anz '+(klasse||'')+'" '
      + (klick ? 'onclick="'+klick+'"' : 'disabled')+'>'
      + '<span class="pl-anz-b">'+buchstabe+'</span>'
      + '<span class="pl-anz-kopf">'
      +   motivHTML(motivVon(heuhaufen(a.quelle, a.zeilen), 'anzeige'), '📰', 'klein')
      +   '<span class="pl-anz-q">'+E(a.quelle)+'</span></span>'
      + '<span class="pl-anz-z">'+a.zeilen.map(function(z){ return '<span>'+E(z)+'</span>'; }).join('')
      + '</span></button>';
  }

  /* ---------- Kopfzeile ---------- */

  function zeit(ms){
    var s = Math.max(0, Math.round(ms/1000));
    return Math.floor(s/60)+':'+('0'+(s%60)).slice(-2);
  }

  function kopfHTML(){
    var rechts = '';
    if(L.modus==='lauf' && L.uhrEnde){
      var rest = L.uhrEnde - Date.now();
      rechts = '<span class="pl-uhrzeit'+(rest<120000?' knapp':'')+'" id="plUhr">'+zeit(rest)+'</span>';
    } else if(L.folge){
      rechts = fortschritt();
    }
    return '<div class="pl-kopf">'
      + '<button class="pl-zu" onclick="lesenSchliessen()" aria-label="Schließen">✕</button>'
      + '<div class="pl-kopf-m"><b>'+E(L.titel)+'</b><span>'+E(L.unter)+'</span></div>'
      + rechts + '</div>';
  }

  function fortschritt(){
    var p = [];
    for(var i=0;i<L.folge.length;i++){
      var kl = 'pl-pk';
      if(L.offen[i]===true) kl += ' gut';
      if(L.offen[i]===false) kl += ' schlecht';
      if(!L.sofort && L.offen[i]!=null) kl = 'pl-pk fertig';
      if(i===L.i && L.offen[i]==null) kl += ' dran';
      p.push('<span class="'+kl+'"></span>');
    }
    return '<div class="pl-punkte">'+p.join('')+'</div>';
  }

  function kopfMalen(){ var k=document.getElementById('plKopf'); if(k) k.innerHTML = kopfHTML(); }

  /* ---------- Die Aufgabenformen ---------- */

  function malen(){
    var b = document.getElementById('plBody'); if(!b) return;
    var e = L.folge[L.i], a = e.a, art = e.art;
    var zeigen = L.offen[L.i]!=null && (L.sofort || L.modus==='rueckblick');
    var h = '';

    if(art==='wahl'){
      h += bildHTML(a.bild);
      h += frageHTML(a.frage);
      h += optHTML(a, zeigen);

    } else if(art==='zuordnen'){
      h += frageHTML(a.frage);
      h += zuordnenHTML(a, zeigen);

    } else if(art==='luecke'){
      h += bildHTML(a.bild);
      h += frageHTML(a.frage);
      h += lueckeHTML(a, zeigen);

    } else if(art==='wortklick'){
      h += wortklickHTML(a, zeigen);
      h += frageHTML(a.frage);

    } else if(art==='rf'){
      h += '<div class="pl-texte">'
         + e.texte.map(function(t){ return textKarte(t, zeigen?a.stelle:null); }).join('')
         + '</div>';
      h += frageHTML(a.satz, L.i+1);
      h += rfHTML(a, zeigen);

    } else if(art==='anzeigen'){
      h += '<div class="pl-sit"><span>Ihre Situation</span><p>'+E(a.situation)+'</p></div>';
      h += '<div class="pl-anzeigen">'
         + anzeigeKarte(a.a,'a', anzKlasse(a,'a',zeigen), L.offen[L.i]!=null?null:"lesenAnz('a')")
         + anzeigeKarte(a.b,'b', anzKlasse(a,'b',zeigen), L.offen[L.i]!=null?null:"lesenAnz('b')")
         + '</div>';

    } else if(art==='textwahl'){
      /* A2 Teil 1 und 3: ein längerer Text, dazu fünf Fragen mit drei Antworten. */
      h += langtextHTML(e.text, zeigen?a.stelle:null);
      h += frageHTML(a.frage, L.i+1);
      h += optHTML(a, zeigen);

    } else if(art==='uebersicht'){
      /* A2 Teil 2: eine Übersicht (Etagenplan, Programm, Fahrplan) und Situationen. */
      h += tafelHTML(e.tafel, zeigen?a.stelle:null);
      h += '<div class="pl-sit"><span>Ihre Situation</span><p>'+E(a.situation)+'</p></div>';
      h += optHTML(a, zeigen);

    } else if(art==='anzeigenX'){
      /* A2 Teil 4: sechs Anzeigen a–f, dazu Situationen. Eine passt nie: x. */
      h += '<div class="pl-sit"><span>Ihre Situation</span><p>'+E(a.situation)+'</p></div>';
      h += '<div class="pl-anzeigen pl-anz-6">'
         + e.anzeigen.map(function(an){
             return anzeigeKarte(an, an.b, anzKlasse(a, an.b, zeigen),
                                 L.offen[L.i]!=null?null:"lesenAnz('"+an.b+"')");
           }).join('')
         + '</div>';
      h += '<div class="pl-xzeile">'
         + '<button class="pl-x'+(zeigen ? (a.loesung==='x' ? ' gut'
             : (L.gewaehlt[L.i]==='x' ? ' schlecht' : ' blass'))
             : (L.gewaehlt[L.i]==='x' ? ' wahl' : ''))+'" '
         + (L.offen[L.i]!=null?'disabled':'onclick="lesenAnz(\'x\')"')+'>'
         + '<b>x</b> Keine Anzeige passt</button></div>';

    } else if(art==='schild'){
      h += '<div class="pl-schild-wrap">'
         + motivHTML(motivVon(heuhaufen(a.ort, a.zeilen), 'schild'), '🪧', 'ort')
         + '<span class="pl-schild-ort">'+E(a.ort)+'</span>'
         + '<div class="pl-schild">'
         + a.zeilen.map(function(z){ return '<span>'+markiert(z, zeigen?a.stelle:null)+'</span>'; }).join('')
         + '</div></div>';
      h += frageHTML(a.satz, L.i+1);
      h += rfHTML(a, zeigen);
    }

    if(zeigen) h += rueckmeldung(a);
    else if(!L.sofort && L.offen[L.i]!=null) h += '<div class="pl-weiter-w">'
      + '<button class="pl-weiter" onclick="lesenWeiter()">'
      + (L.i>=L.folge.length-1 ? 'Prüfung abgeben →' : 'Weiter →')+'</button></div>';

    b.innerHTML = h;
    kopfMalen();
    try{ document.getElementById('plOv').scrollTop = 0; }catch(e2){}
  }

  function frageHTML(text, nr){
    return '<div class="pl-frage">'
      + (nr ? '<span class="pl-frage-n">'+nr+'</span>' : '')
      + '<p>'+E(text)+'</p></div>';
  }

  function rfHTML(a, zeigen){
    function kl(wert){
      if(!zeigen) return '';
      if(wert===a.loesung) return ' gut';
      if(wert===L.gewaehlt[L.i]) return ' schlecht';
      return ' blass';
    }
    function gew(wert){ return (!zeigen && L.gewaehlt[L.i]===wert) ? ' wahl' : ''; }
    var aus = L.offen[L.i]!=null;
    return '<div class="pl-rf">'
      + '<button class="pl-rf-b'+kl(true)+gew(true)+'" '+(aus?'disabled':'onclick="lesenRF(true)"')+'>'
      +   '<span>✓</span>Richtig</button>'
      + '<button class="pl-rf-b'+kl(false)+gew(false)+'" '+(aus?'disabled':'onclick="lesenRF(false)"')+'>'
      +   '<span>✕</span>Falsch</button></div>';
  }

  /* --- A2: Antwortknöpfe a/b/c, auch wenn der Text darüber steht --- */
  function optHTML(a, zeigen){
    var reihe = L.mix[L.i] || a.opt.map(function(_,i){ return i; });
    return '<div class="pl-opts">' + reihe.map(function(k, pos){
      var kl = '';
      if(zeigen){ kl = k===a.loesung ? ' gut' : (k===L.gewaehlt[L.i] ? ' schlecht' : ' blass'); }
      else if(L.gewaehlt[L.i]===k) kl = ' wahl';
      return '<button class="pl-opt'+kl+'" '
        + (L.offen[L.i]!=null?'disabled':'onclick="lesenWahl('+k+')"')+'>'
        + '<span class="pl-opt-b">'+String.fromCharCode(97+pos)+'</span>'+E(a.opt[k])+'</button>';
    }).join('') + '</div>';
  }

  /* --- A2: ein längerer Text (Zeitung, Blog, E-Mail) --- */
  var LANG_KOPF = {
    zeitung: { z:'📰', t:'Aus der Zeitung' },
    blog:    { z:'💻', t:'Aus einem Blog' },
    email:   { z:'✉️', t:'E-Mail' },
    brief:   { z:'📄', t:'Brief' },
    seite:   { z:'🌐', t:'Von einer Internetseite' }
  };

  function langtextHTML(t, stelle){
    if(!t) return '';
    var k = LANG_KOPF[t.sorte] || LANG_KOPF.zeitung;
    var m = motivVon(heuhaufen(t.quelle, t.titel, t.zeilen), 'allgemein');
    return '<div class="pl-lang pl-s-'+E(t.sorte)+'">'
      + '<div class="pl-lang-kopf">'+motivHTML(m, k.z)
      +   '<span class="pl-text-m"><b>'+E(t.titel||t.quelle)+'</b>'
      +   '<span>'+E(t.quelle && t.titel ? t.quelle : k.t)+'</span></span></div>'
      + '<div class="pl-lang-k">'
      +   t.zeilen.map(function(z){ return '<p>'+markiert(z, stelle)+'</p>'; }).join('')
      + '</div></div>';
  }

  /* --- A2: eine Übersicht, z. B. ein Etagenplan --- */
  function tafelHTML(t, stelle){
    if(!t) return '';
    var m = motivVon(heuhaufen(t.titel, t.zeilen && t.zeilen.map(function(r){ return r.k+' '+r.v; })), 'schild');
    return '<div class="pl-tafel">'
      + '<div class="pl-tafel-kopf">'+motivHTML(m, '🗂️', 'klein')
      +   '<span>'+E(t.titel)+'</span></div>'
      + '<div class="pl-tafel-k">'
      + t.zeilen.map(function(r){
          return '<div class="pl-tafel-z"><b>'+E(r.k)+'</b><span>'+markiert(r.v, stelle)+'</span></div>';
        }).join('')
      + '</div></div>';
  }

  function anzKlasse(a, welche, zeigen){
    if(!zeigen){ return (L.gewaehlt[L.i]===welche) ? 'wahl' : ''; }
    if(welche===a.loesung) return 'gut';
    if(welche===L.gewaehlt[L.i]) return 'schlecht';
    return 'blass';
  }

  /* --- zuordnen: links antippen, dann rechts --- */
  var zuWahl = null;

  function zuordnenHTML(a, zeigen){
    var z = L.gewaehlt[L.i] || {};   /* {linksIndex: rechtsIndex} */
    var rechtsMix = L.mix[L.i];      /* gemischte Reihenfolge der rechten Seite */
    var links = a.paare.map(function(p,i){
      var zu = z[i];
      var kl = '';
      if(zeigen) kl = (zu===i ? ' gut' : ' schlecht');
      else if(zu!=null) kl = ' voll';
      else if(zuWahl===i) kl = ' aktiv';
      return '<button class="pl-zl'+kl+'" '+(L.offen[L.i]!=null?'disabled':'onclick="lesenZuL('+i+')"')+'>'
        + '<span class="pl-zl-s">'+E(p.l)+'</span>'
        + '<span class="pl-zl-r">'+(zu!=null ? E(a.paare[zu].r) : 'antippen und zuordnen')+'</span>'
        + '</button>';
    }).join('');
    var genommen = {}; Object.keys(z).forEach(function(k){ genommen[z[k]] = true; });
    var rechts = rechtsMix.map(function(i){
      var frei = !genommen[i];
      return '<button class="pl-zr'+(frei?'':' weg')+'" '
        + (L.offen[L.i]!=null||!frei ? 'disabled' : 'onclick="lesenZuR('+i+')"')+'>'
        + E(a.paare[i].r)+'</button>';
    }).join('');
    return '<div class="pl-zu-w"><div class="pl-zu-l">'+links+'</div>'
      + '<div class="pl-zu-r">'+rechts+'</div></div>';
  }

  window.lesenZuL = function(i){
    var z = L.gewaehlt[L.i] || {};
    if(z[i]!=null){ delete z[i]; L.gewaehlt[L.i]=z; zuWahl=null; malen(); return; }
    zuWahl = (zuWahl===i ? null : i); malen();
  };
  window.lesenZuR = function(j){
    if(zuWahl==null) return;
    var z = L.gewaehlt[L.i] || {};
    z[zuWahl] = j; L.gewaehlt[L.i] = z; zuWahl = null;
    var a = L.folge[L.i].a;
    if(Object.keys(z).length >= a.paare.length){
      var alle = true;
      for(var k=0;k<a.paare.length;k++) if(z[k]!==k) alle = false;
      werten(alle, z);
    } else malen();
  };

  /* --- luecke: Lücke antippen, dann Wort aus der Bank --- */
  var luWahl = null;

  function lueckeHTML(a, zeigen){
    var g = L.gewaehlt[L.i] || [];
    var teile = a.text.split('___');
    var h = '<p class="pl-lu-text">';
    teile.forEach(function(t,i){
      h += E(t);
      if(i < teile.length-1){
        var wort = g[i];
        var kl = '';
        if(zeigen) kl = (wort===a.loesung[i] ? ' gut' : ' schlecht');
        else if(luWahl===i) kl = ' aktiv';
        else if(wort) kl = ' voll';
        h += '<button class="pl-lu'+kl+'" '+(L.offen[L.i]!=null?'disabled':'onclick="lesenLu('+i+')"')+'>'
          + (wort ? E(wort) : '&nbsp;&nbsp;&nbsp;&nbsp;')+'</button>';
      }
    });
    h += '</p>';
    var benutzt = {}; g.forEach(function(w){ if(w) benutzt[w]=true; });
    h += '<div class="pl-bank">' + L.mix[L.i].map(function(w){
      return '<button class="pl-bw'+(benutzt[w]?' weg':'')+'" '
        + (L.offen[L.i]!=null||benutzt[w] ? 'disabled' : 'onclick="lesenBank(\''+E(w).replace(/'/g,"\\'")+'\')"')
        + '>'+E(w)+'</button>';
    }).join('') + '</div>';
    if(zeigen && L.offen[L.i]===false){
      h += '<p class="pl-lu-loes">Richtig wäre: <b>'+a.loesung.map(E).join(' · ')+'</b></p>';
    }
    return h;
  }

  window.lesenLu = function(i){
    var g = L.gewaehlt[L.i] || [];
    if(g[i]){ g[i]=null; L.gewaehlt[L.i]=g; luWahl=i; malen(); return; }
    luWahl = (luWahl===i ? null : i); malen();
  };
  window.lesenBank = function(w){
    var a = L.folge[L.i].a, g = L.gewaehlt[L.i] || [];
    var ziel = luWahl;
    if(ziel==null){ for(var i=0;i<a.loesung.length;i++) if(!g[i]){ ziel=i; break; } }
    if(ziel==null) return;
    g[ziel] = w; L.gewaehlt[L.i] = g; luWahl = null;
    var voll = true;
    for(var k=0;k<a.loesung.length;k++) if(!g[k]) voll = false;
    if(voll){
      var alle = true;
      for(var m=0;m<a.loesung.length;m++) if(g[m]!==a.loesung[m]) alle = false;
      werten(alle, g.slice());
    } else malen();
  };

  /* --- wortklick: Wort im Schild antippen --- */

  function wortklickHTML(a, zeigen){
    var n = 0;
    var zeilen = a.zeilen.map(function(z){
      return z.split(/(\s+)/).map(function(tok){
        if(/^\s+$/.test(tok)) return tok;
        var rein = tok.replace(/^[^\wÄÖÜäöüß]+|[^\wÄÖÜäöüß]+$/g,'');
        var idx = n++;
        var kl = '';
        if(zeigen){
          if(rein===a.loesung) kl = ' gut';
          else if(idx===L.gewaehlt[L.i]) kl = ' schlecht';
        }
        return '<button class="pl-wk'+kl+'" '+(L.offen[L.i]!=null?'disabled':
          'onclick="lesenWort('+idx+',\''+E(rein).replace(/'/g,"\\'")+'\')"')+'>'+E(tok)+'</button>';
      }).join('');
    });
    return '<div class="pl-schild-wrap"><span class="pl-schild-ort">Tippe das Wort an</span>'
      + '<div class="pl-schild pl-schild-k">'
      + zeilen.map(function(z){ return '<span>'+z+'</span>'; }).join('')
      + '</div></div>';
  }

  window.lesenWort = function(idx, wort){
    var a = L.folge[L.i].a;
    werten(wort===a.loesung, idx);
  };

  /* ---------- Antworten ---------- */

  window.lesenWahl = function(k){ werten(k===L.folge[L.i].a.loesung, k); };
  window.lesenRF   = function(w){ werten(w===L.folge[L.i].a.loesung, w); };
  window.lesenAnz  = function(w){ werten(w===L.folge[L.i].a.loesung, w); };

  function werten(korrekt, wahl){
    if(L.offen[L.i]!=null) return;
    L.gewaehlt[L.i] = wahl;
    L.offen[L.i] = korrekt;
    if(korrekt) L.punkte++;
    zuWahl = null; luWahl = null;
    if(!L.sofort && L.i < L.folge.length-1){ L.i++; malen(); return; }
    malen();
  }

  function rueckmeldung(a){
    var richtig = L.offen[L.i]===true;
    var letzte = L.i >= L.folge.length-1;
    var knopf = L.modus==='rueckblick'
      ? (letzte ? 'Fertig →' : 'Nächste Aufgabe →')
      : (letzte ? 'Auswertung ansehen →' : 'Weiter →');
    return '<div class="pl-fb '+(richtig?'gut':'schlecht')+'">'
      + '<div class="pl-fb-kopf"><span>'+(richtig?'🎉':'💡')+'</span>'
      +   '<b>'+(richtig?'Richtig!':'Fast — schau nochmal hin')+'</b></div>'
      + '<p>'+E(a.erklaerung)+'</p>'
      + '<button class="pl-weiter" onclick="lesenWeiter()">'+knopf+'</button></div>';
  }

  window.lesenWeiter = function(){
    if(L.modus==='rueckblick'){
      if(L.i < L.folge.length-1){ L.i++; malen(); } else lesenStart(L.niveau);
      return;
    }
    if(L.i < L.folge.length-1){ L.i++; malen(); } else ende();
  };

  /* ---------- Auswertung ---------- */

  function ende(){
    uhrStoppen();
    merken(L.niveau, L.topf, L.id, L.punkte);
    var n = L.folge.length, p = L.punkte, quote = p/n;
    var titel, text;
    if(quote===1){ titel='Alles richtig!';
      text = L.modus==='lauf'
        ? 'Volle Punktzahl in einem kompletten Prüfungslauf. Besser geht es nicht.'
        : 'Das sitzt. In der Prüfung wären das '+p+' von '+n+' Punkten.'; }
    else if(quote>=0.6){ titel='Bestanden!';
      text='Du hast '+p+' von '+n+' Punkten. Zum Bestehen brauchst du 60 Prozent — das hast du geschafft.'; }
    else { titel='Noch nicht ganz';
      text='Du hast '+p+' von '+n+' Punkten. Für die Prüfung brauchst du 60 Prozent. Geh die Aufgaben durch, dann siehst du beim nächsten Mal schneller, wo die Antwort steht.'; }

    var wieder = L.modus==='block' ? "lesenBlock('"+L.id+"')"
               : L.modus==='lauf'  ? "lesenLauf('"+L.id+"')"
               : "lesenRunde("+L.topf+",'"+L.id+"')";

    document.getElementById('plBody').innerHTML = '<div class="pl-ende">'
      + '<div class="pl-ende-ring '+(quote>=0.6?'gut':'knapp')+'" style="--p:'+Math.round(quote*100)+'">'
      +   '<i><b>'+p+'</b><span>von '+n+'</span></i></div>'
      + '<h3>'+titel+'</h3><p>'+text+'</p>'
      + '<div class="pl-ende-k">'
      +   (p<n ? '<button class="pl-b1 haupt" onclick="lesenRueckblick()">Aufgaben durchgehen →</button>' : '')
      +   '<button class="pl-b1" onclick="'+wieder+'">Noch einmal</button>'
      +   '<button class="pl-b2" onclick="lesenStart(\''+L.niveau+'\')">Zur Übersicht</button>'
      + '</div></div>';
    L.modus = 'ende';
    document.getElementById('plKopf').innerHTML = '<div class="pl-kopf">'
      + '<button class="pl-zu" onclick="lesenSchliessen()" aria-label="Schließen">✕</button>'
      + '<div class="pl-kopf-m"><b>'+E(L.titel)+'</b><span>Auswertung</span></div></div>';
  }

  window.lesenRueckblick = function(){
    L.modus = 'rueckblick'; L.i = 0; L.unter = 'Zum Durchgehen';
    malen();
  };

  /* ---------- Die Uhr ---------- */

  function uhrStarten(minuten){
    L.uhrEnde = Date.now() + minuten*60000;
    L.uhrId = setInterval(function(){
      var el = document.getElementById('plUhr'); if(!el) return;
      var rest = L.uhrEnde - Date.now();
      el.textContent = zeit(rest);
      if(rest < 120000) el.classList.add('knapp');
      if(rest <= 0){ uhrStoppen(); ende(); }
    }, 1000);
  }
  function uhrStoppen(){ if(L && L.uhrId){ clearInterval(L.uhrId); L.uhrId = null; } }

  /* ---------- Einstiege ---------- */

  function mischen(n){
    var a = []; for(var i=0;i<n;i++) a.push(i);
    for(var j=a.length-1;j>0;j--){ var k=Math.floor(Math.random()*(j+1)); var t=a[j]; a[j]=a[k]; a[k]=t; }
    return a;
  }

  function vorbereiten(folge){
    /* Für zuordnen die rechte Spalte mischen, für luecke die Bank. */
    L.mix = folge.map(function(e){
      if(e.art==='zuordnen') return mischen(e.a.paare.length);
      if(e.art==='luecke'){ var b=e.a.bank.slice();
        return mischen(b.length).map(function(i){ return b[i]; }); }
      /* A2: die drei Antworten mischen, damit die Position nichts verrät. */
      if((e.art==='wahl' || e.art==='textwahl' || e.art==='uebersicht') && e.a.opt)
        return mischen(e.a.opt.length);
      return null;
    });
  }

  window.lesenBlock = function(id){
    var niveau = L ? L.niveau : 'A1', d = datenVon(niveau); if(!d) return;
    var b = blockVon(d, id); if(!b) return;
    oeffnen();
    var folge = b.aufgaben.map(function(a){ return { a:a, art:a.art }; });
    L = { niveau:niveau, daten:d, modus:'block', topf:'b', id:id,
          titel:'Stufe '+b.stufe+' — '+b.titel, unter:b.kurz,
          folge:folge, i:0, punkte:0, sofort:true,
          offen:new Array(folge.length), gewaehlt:new Array(folge.length) };
    vorbereiten(folge); zuWahl=null; luWahl=null;
    malen();
  };

  window.lesenRunde = function(teilNr, rundeId){
    var niveau = L ? L.niveau : 'A1', d = datenVon(niveau); if(!d) return;
    var t = teilVon(d, teilNr); if(!t) return;
    var r = null; t.runden.forEach(function(x){ if(x.id===rundeId) r=x; });
    if(!r) return;
    oeffnen();
    var folge = r.aufgaben.map(function(a){
      return { a:a, art:t.art, texte:r.texte||null,
               text:r.text||null, tafel:r.tafel||null, anzeigen:r.anzeigen||null }; });
    var nr = t.runden.indexOf(r)+1;
    L = { niveau:niveau, daten:d, modus:'runde', topf:teilNr, id:rundeId,
          titel:'Teil '+t.nr+' — '+t.name, unter:'Runde '+nr+' von '+t.runden.length,
          folge:folge, i:0, punkte:0, sofort:true,
          offen:new Array(folge.length), gewaehlt:new Array(folge.length) };
    vorbereiten(folge); zuWahl=null; luWahl=null;
    malen();
  };

  window.lesenLauf = function(id){
    var niveau = L ? L.niveau : 'A1', d = datenVon(niveau); if(!d) return;
    var Lf = laufVon(d, id); if(!Lf) return;
    oeffnen();
    var folge = [];
    Lf.teile.forEach(function(t){
      t.aufgaben.forEach(function(a){ folge.push({ a:a, art:t.art, texte:t.texte||null,
        text:t.text||null, tafel:t.tafel||null, anzeigen:t.anzeigen||null, teilNr:t.nr }); });
    });
    L = { niveau:niveau, daten:d, modus:'lauf', topf:'l', id:id,
          titel:Lf.titel, unter:folge.length+' Aufgaben · keine Hilfe zwischendurch',
          folge:folge, i:0, punkte:0, sofort:false,
          offen:new Array(folge.length), gewaehlt:new Array(folge.length) };
    vorbereiten(folge); zuWahl=null; luWahl=null;
    uhrStarten(Lf.minuten || d.minuten);
    malen();
  };

  /* ---------- Die Übersicht: der Weg ---------- */

  window.lesenStart = function(niveau){
    var d = datenVon(niveau); if(!d) return;
    uhrStoppen();
    oeffnen();
    L = { niveau:niveau, daten:d, modus:'plan', titel:'Lesen — '+d.pruefung,
          unter:d.punkte+' Aufgaben in der Prüfung · circa '+d.minuten+' Minuten' };

    var gesamt = window.lesenProzent(niveau);
    var naechst = window.lesenNaechstes(niveau);

    var h = '<div class="pl-intro"><h2>Dein Weg zum Lesen-Teil</h2>'
      + '<p>In der echten Prüfung hast du '+d.minuten+' Minuten für '+d.punkte+' Aufgaben. '
      + 'Hier baust du das in vier Stufen auf — erst die Wörter, dann die Strategie, '
      + 'dann die Aufgabentypen, zuletzt die ganze Prüfung mit Uhr. '
      + 'Der Weg ist eine Empfehlung: anklicken kannst du jederzeit alles.</p></div>';

    if(naechst){
      h += '<button class="pl-dran" onclick="'+naechst.klick+'">'
        + '<span class="pl-dran-z">👉</span>'
        + '<span class="pl-dran-t"><span>Hier weitermachen</span><b>'+E(naechst.was)+'</b></span>'
        + '<span class="pl-dran-g">Los →</span></button>';
    } else {
      h += '<div class="pl-fertig">🏆 Du hast alles einmal geschafft. '
        + 'Wiederhol die Prüfungsläufe, bis du sie ohne Zittern schaffst.</div>';
    }

    d.stufen.forEach(function(st){
      var inhalt = '';
      if(st.nr===1 || st.nr===2){
        inhalt = '<div class="pl-karten">' + d.bloecke.filter(function(b){ return b.stufe===st.nr; })
          .map(function(b){
            var s = blockStand(niveau,b);
            return '<button class="pl-karte pl-f-'+E(b.farbe)+(s.punkte>=s.max?' voll':'')
              + '" onclick="lesenBlock(\''+b.id+'\')">'
              + '<span class="pl-karte-z">'+b.zeichen+'</span>'
              + '<span class="pl-karte-t"><b>'+E(b.titel)+'</b><span>'+E(b.kurz)+'</span></span>'
              + '<span class="pl-karte-p">'+(s.gemacht ? s.punkte+'/'+s.max : b.aufgaben.length+' Aufgaben')+'</span>'
              + '<span class="pl-karte-bar"><i style="width:'+Math.max(2,s.prozent)+'%"></i></span>'
              + '<span class="pl-karte-ziel">'+E(b.ziel)+'</span>'
              + '</button>';
          }).join('') + '</div>';
      } else if(st.nr===3){
        inhalt = d.teile.map(function(t){
          var s = teilStand(niveau,t);
          var runden = t.runden.map(function(r,k){
            var p = holen(niveau,t.nr,r.id);
            var kl = p==null ? '' : (p>=r.aufgaben.length ? ' voll' : ' teil');
            return '<button class="pl-r'+kl+'" onclick="lesenRunde('+t.nr+',\''+r.id+'\')">'
              + '<b>'+(k+1)+'</b><span>'+(p==null?'neu':p+'/'+r.aufgaben.length)+'</span></button>';
          }).join('');
          return '<section class="pl-teil pl-f-'+E(t.farbe)+'">'
            + '<div class="pl-teil-kopf"><span class="pl-teil-z">'+t.zeichen+'</span>'
            +   '<div class="pl-teil-m"><span>Teil '+t.nr+'</span><b>'+E(t.name)+'</b></div>'
            +   '<span class="pl-teil-p">'+s.prozent+' %</span></div>'
            + '<p class="pl-teil-was">'+E(t.was)+'</p>'
            + '<div class="pl-tipp"><span>Tipp</span><p>'+E(t.tipp)+'</p></div>'
            + '<div class="pl-runden">'+runden+'</div></section>';
        }).join('');
      } else {
        inhalt = '<div class="pl-karten">' + d.laeufe.map(function(Lf){
          var s = laufStand(niveau,Lf);
          return '<button class="pl-karte pl-f-dunkel'+(s.punkte>=s.max?' voll':'')
            + '" onclick="lesenLauf(\''+Lf.id+'\')">'
            + '<span class="pl-karte-z">⏱️</span>'
            + '<span class="pl-karte-t"><b>'+E(Lf.titel)+'</b>'
            +   '<span>'+anzahlIn(Lf)+' Aufgaben · '+(Lf.minuten||d.minuten)+' Minuten</span></span>'
            + '<span class="pl-karte-p">'+(s.gemacht ? s.punkte+'/'+s.max : 'noch offen')+'</span>'
            + '<span class="pl-karte-bar"><i style="width:'+Math.max(2,s.prozent)+'%"></i></span>'
            + '<span class="pl-karte-ziel">Die Uhr läuft mit. Rückmeldung gibt es erst am Ende — '
            +   'so merkst du, ob die Zeit reicht.</span></button>';
        }).join('') + '</div>';
      }
      h += '<section class="pl-stufe"><div class="pl-stufe-kopf">'
        + '<span class="pl-stufe-n">'+st.nr+'</span>'
        + '<div><b>'+st.zeichen+' '+E(st.titel)+'</b><p>'+E(st.was)+'</p></div></div>'
        + inhalt + '</section>';
    });

    document.getElementById('plKopf').innerHTML = '<div class="pl-kopf">'
      + '<button class="pl-zu" onclick="lesenSchliessen()" aria-label="Schließen">✕</button>'
      + '<div class="pl-kopf-m"><b>'+E(L.titel)+'</b><span>'+E(L.unter)+'</span></div>'
      + '<span class="pl-kopf-p">'+gesamt+' %</span></div>';
    document.getElementById('plBody').innerHTML = h;
  };

  /* ---------- Overlay ---------- */

  function oeffnen(){
    stil();
    var o = document.getElementById('plOv');
    if(!o){
      o = document.createElement('div'); o.id='plOv';
      o.innerHTML = '<div id="plKopf"></div><div id="plBody"></div>';
      document.body.appendChild(o);
    }
    o.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  window.lesenSchliessen = function(){
    uhrStoppen();
    var o = document.getElementById('plOv');
    if(o) o.style.display = 'none';
    document.body.style.overflow = '';
    try{
      if(window.pruefungOeffnen){
        var letzte = J('pruefLetzte', null);
        if(letzte) window.pruefungOeffnen(letzte, 'module');
      }
    }catch(e){}
  };

  document.addEventListener('keydown', function(e){
    if(e.key==='Escape'){
      var o = document.getElementById('plOv');
      if(o && o.style.display==='block') window.lesenSchliessen();
    }
  });

  /* ---------- Aussehen ---------- */

  var gestylt = false;
  function stil(){
    if(gestylt) return; gestylt = true;
    var s = document.createElement('style'); s.textContent = CSS; document.head.appendChild(s);
    /* Handschrift für Zettel. Fehlt die Verbindung, greift die Ersatzschrift
       aus der font-family — die Karte sieht dann nur etwas nüchterner aus. */
    if(!document.getElementById('plSchrift')){
      var l = document.createElement('link');
      l.id = 'plSchrift'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&display=swap';
      document.head.appendChild(l);
    }
  }
  /* Der Hörtrainer nutzt dasselbe Grundgerüst (Klassen pl-) und
     holt es sich hierüber, damit es nur einmal im Dokument steht. */
  window.trainerStil = stil;

  var CSS = [
'#plOv{ display:none; position:fixed; inset:0; z-index:9000; overflow:auto;',
'  background:radial-gradient(1100px 620px at 12% -8%, #E4F7FA 0%, transparent 62%),',
'    radial-gradient(900px 520px at 92% 4%, #FFF1C9 0%, transparent 58%),',
'    radial-gradient(760px 520px at 50% 108%, #FBE3E3 0%, transparent 60%), #FFF7E6;',
'  font-family:Inter,system-ui,sans-serif; color:#1A1A1A }',
'#plBody{ max-width:880px; margin:0 auto; padding:22px 22px 90px }',
'#plOv button{ font-family:inherit }',

'.pl-kopf{ position:sticky; top:0; z-index:5; display:flex; align-items:center; gap:14px;',
'  max-width:880px; margin:0 auto; padding:14px 22px;',
'  background:rgba(255,252,245,.93); backdrop-filter:blur(10px); border-bottom:1.5px solid #EEE7D8 }',
'.pl-zu{ flex:none; width:38px; height:38px; border-radius:12px; border:1.5px solid #EEE7D8;',
'  background:#fff; cursor:pointer; font-size:16px; color:#5B6A70; line-height:1 }',
'.pl-zu:hover{ background:#1A1A1A; color:#fff; border-color:#1A1A1A }',
'.pl-kopf-m{ flex:1; min-width:0 }',
'.pl-kopf-m b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:16px;',
'  font-weight:800; letter-spacing:-.02em; line-height:1.2 }',
'.pl-kopf-m span{ display:block; font-size:12.5px; color:#8A97A0; font-weight:600; margin-top:2px }',
'.pl-kopf-p{ flex:none; font-family:"Space Grotesk",sans-serif; font-weight:800; font-size:15px;',
'  color:#0F5468; background:#DFF6F8; border-radius:999px; padding:7px 14px }',
'.pl-uhrzeit{ flex:none; font-family:"Space Grotesk",sans-serif; font-weight:800; font-size:19px;',
'  color:#0F5468; background:#DFF6F8; border-radius:12px; padding:8px 15px;',
'  font-variant-numeric:tabular-nums }',
'.pl-uhrzeit.knapp{ color:#fff; background:#D83636 }',
'.pl-punkte{ display:flex; gap:5px; flex:none; flex-wrap:wrap; max-width:230px; justify-content:flex-end }',
'.pl-pk{ width:18px; height:6px; border-radius:999px; background:#EDE3CE }',
'.pl-pk.dran{ background:#8A97A0 }',
'.pl-pk.gut{ background:#16A34A }',
'.pl-pk.schlecht{ background:#D83636 }',
'.pl-pk.fertig{ background:#35AFD0 }',

/* Übersicht */
'.pl-intro{ margin:8px 0 20px }',
'.pl-intro h2{ font-family:"Space Grotesk",sans-serif; font-size:27px; font-weight:800;',
'  letter-spacing:-.03em; margin:0 0 8px }',
'.pl-intro p{ font-size:15px; color:#5B6A70; line-height:1.65; margin:0; max-width:46em }',
'.pl-dran{ display:flex; align-items:center; gap:14px; width:100%; text-align:left;',
'  background:linear-gradient(100deg,#FFF3CC,#FFE9A8); border:1.5px solid #F0DFB0;',
'  border-radius:20px; padding:15px 17px; margin-bottom:26px; cursor:pointer;',
'  transition:transform .15s, box-shadow .15s }',
'.pl-dran:hover{ transform:translateY(-2px); box-shadow:0 14px 30px -18px rgba(40,53,59,.6) }',
'.pl-dran-z{ flex:none; width:46px; height:46px; border-radius:15px; background:#fff;',
'  display:grid; place-items:center; font-size:22px }',
'.pl-dran-t{ flex:1; min-width:0 }',
'.pl-dran-t span{ display:block; font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#8A5C00 }',
'.pl-dran-t b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:17px;',
'  font-weight:800; letter-spacing:-.02em; margin-top:3px }',
'.pl-dran-g{ flex:none; background:#D83636; color:#fff; border-radius:12px; padding:11px 18px;',
'  font-weight:800; font-size:14.5px; box-shadow:0 3px 0 #B02B24 }',
'.pl-fertig{ background:#E8F8EE; border:1.5px solid #BFE6CD; border-radius:18px;',
'  padding:16px 18px; font-size:15px; color:#14532D; font-weight:600; margin-bottom:26px }',

'.pl-stufe{ margin-bottom:30px }',
'.pl-stufe-kopf{ display:flex; align-items:flex-start; gap:13px; margin-bottom:14px }',
'.pl-stufe-n{ flex:none; width:34px; height:34px; border-radius:11px; background:#28353B;',
'  color:#fff; display:grid; place-items:center; font-family:"Space Grotesk",sans-serif;',
'  font-weight:800; font-size:17px }',
'.pl-stufe-kopf b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:20px;',
'  font-weight:800; letter-spacing:-.025em }',
'.pl-stufe-kopf p{ font-size:13.5px; color:#5B6A70; line-height:1.55; margin:3px 0 0; max-width:46em }',

'.pl-karten{ display:grid; gap:13px }',
'@media(min-width:700px){ .pl-karten{ grid-template-columns:1fr 1fr } }',
'.pl-karte{ position:relative; text-align:left; background:#fff; border:1.5px solid #EEE7D8;',
'  border-radius:20px; padding:17px 18px 16px; cursor:pointer; overflow:hidden;',
'  display:grid; grid-template-columns:auto 1fr auto; gap:6px 13px;',
'  transition:transform .15s, border-color .15s, box-shadow .15s }',
'.pl-karte::before{ content:""; position:absolute; left:0; right:0; top:0; height:5px;',
'  background:var(--pa,#35AFD0) }',
'.pl-karte:hover{ transform:translateY(-3px); border-color:var(--pa);',
'  box-shadow:0 18px 34px -22px rgba(40,53,59,.6) }',
'.pl-karte.voll{ background:#F4FCF7; border-color:#BFE6CD }',
'.pl-karte-z{ grid-row:1; width:44px; height:44px; border-radius:14px; display:grid;',
'  place-items:center; font-size:22px; background:var(--pw,#E4F7FA);',
'  box-shadow:inset 0 0 0 2px #fff, 0 6px 14px -8px rgba(40,53,59,.5) }',
'.pl-karte-t{ grid-row:1; min-width:0; align-self:center }',
'.pl-karte-t b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:17px;',
'  font-weight:800; letter-spacing:-.02em; line-height:1.2 }',
'.pl-karte-t>span{ display:block; font-size:12.5px; color:#8A97A0; font-weight:600; margin-top:2px }',
'.pl-karte-p{ grid-row:1; align-self:center; font-family:"Space Grotesk",sans-serif;',
'  font-weight:800; font-size:13px; color:var(--pi,#0F5468); background:var(--pw,#E4F7FA);',
'  border-radius:999px; padding:6px 12px; white-space:nowrap }',
'.pl-karte-bar{ grid-column:1/-1; height:7px; border-radius:999px; background:#F3ECDD;',
'  overflow:hidden; margin-top:6px }',
'.pl-karte-bar i{ display:block; height:100%; background:var(--pa,#35AFD0); border-radius:999px }',
'.pl-karte-ziel{ grid-column:1/-1; font-size:12.5px; color:#5B6A70; line-height:1.5; margin-top:4px }',

'.pl-f-turq  { --pa:#35AFD0; --pw:#E4F7FA; --pi:#0F5468 }',
'.pl-f-gold  { --pa:#E39A00; --pw:#FFF6D9; --pi:#8A5C00 }',
'.pl-f-rot   { --pa:#D83636; --pw:#FDEAEA; --pi:#9B2320 }',
'.pl-f-gruen { --pa:#16A34A; --pw:#E8F8EE; --pi:#14532D }',
'.pl-f-lila  { --pa:#7A3E8F; --pw:#F5EBF9; --pi:#5C2C6C }',
'.pl-f-dunkel{ --pa:#28353B; --pw:#E7EDEF; --pi:#28353B }',

'.pl-teil{ background:#fff; border:1.5px solid #EEE7D8; border-radius:20px; padding:20px;',
'  margin-bottom:13px; position:relative; overflow:hidden }',
'.pl-teil::before{ content:""; position:absolute; left:0; right:0; top:0; height:5px; background:var(--pa) }',
'.pl-teil-kopf{ display:flex; align-items:center; gap:13px; margin-bottom:12px }',
'.pl-teil-z{ flex:none; width:46px; height:46px; border-radius:15px; display:grid;',
'  place-items:center; font-size:23px; background:var(--pw);',
'  box-shadow:inset 0 0 0 2px #fff, 0 6px 14px -8px rgba(40,53,59,.5) }',
'.pl-teil-m{ flex:1; min-width:0 }',
'.pl-teil-m span{ display:block; font-size:11px; font-weight:800; letter-spacing:.12em;',
'  text-transform:uppercase; color:var(--pi) }',
'.pl-teil-m b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:19px;',
'  font-weight:800; letter-spacing:-.02em; margin-top:2px }',
'.pl-teil-p{ flex:none; font-family:"Space Grotesk",sans-serif; font-weight:800; font-size:14px;',
'  color:var(--pi); background:var(--pw); border-radius:999px; padding:6px 13px }',
'.pl-teil-was{ font-size:14px; color:#5B6A70; line-height:1.6; margin:0 0 12px }',
'.pl-tipp{ background:#FFF7E6; border:1.5px dashed #F0DFB0; border-radius:14px;',
'  padding:12px 14px; margin-bottom:14px }',
'.pl-tipp span{ display:block; font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#8A5C00; margin-bottom:4px }',
'.pl-tipp p{ font-size:13.5px; color:#5B6A70; line-height:1.55; margin:0 }',
'.pl-runden{ display:flex; gap:9px; flex-wrap:wrap }',
'.pl-r{ flex:1; min-width:84px; background:#FFFCF5; border:1.5px solid #EEE7D8;',
'  border-radius:14px; padding:11px 8px; cursor:pointer;',
'  transition:transform .14s, border-color .14s, box-shadow .14s }',
'.pl-r:hover{ transform:translateY(-2px); border-color:var(--pa);',
'  box-shadow:0 10px 22px -14px rgba(40,53,59,.55) }',
'.pl-r b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:18px; font-weight:800 }',
'.pl-r span{ display:block; font-size:11.5px; font-weight:700; color:#8A97A0; margin-top:2px }',
'.pl-r.teil{ background:var(--pw); border-color:var(--pa) }',
'.pl-r.teil span{ color:var(--pi) }',
'.pl-r.voll{ background:#E8F8EE; border-color:#16A34A }',
'.pl-r.voll span{ color:#14532D }',

/* Bilder */
'.pl-bild{ display:flex; justify-content:center; margin-bottom:18px }',
'.pl-schild{ background:#fff; border:3px solid #28353B; border-radius:12px;',
'  padding:20px 26px; max-width:460px; text-align:center;',
'  box-shadow:0 14px 30px -18px rgba(40,53,59,.7) }',
'.pl-schild span{ display:block; font-family:"Space Grotesk",sans-serif; font-size:18px;',
'  font-weight:700; line-height:1.45 }',
'.pl-schild span:first-child{ font-size:22px; font-weight:800 }',
'.pl-schild mark{ background:linear-gradient(180deg,transparent 52%,#FFE066 52%);',
'  color:inherit; padding:0 2px; border-radius:3px }',
'.pl-schild-wrap{ text-align:center; margin-bottom:18px }',
'.pl-schild-wrap .pl-schild{ margin:0 auto }',
'.pl-schild-ort{ display:inline-block; font-size:12px; font-weight:800; letter-spacing:.08em;',
'  text-transform:uppercase; color:#8A97A0; margin-bottom:9px }',
'.pl-tafel{ background:#fff; border:3px solid #28353B; border-radius:12px; padding:18px 22px;',
'  min-width:270px; box-shadow:0 14px 30px -18px rgba(40,53,59,.7) }',
'.pl-tafel b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:20px;',
'  font-weight:800; text-align:center; margin-bottom:10px; padding-bottom:9px;',
'  border-bottom:2px solid #28353B }',
'.pl-tafel table{ width:100%; border-collapse:collapse }',
'.pl-tafel td{ font-family:"Space Grotesk",sans-serif; font-size:16px; font-weight:600;',
'  padding:4px 0 }',
'.pl-tafel td:last-child{ text-align:right; padding-left:26px; font-weight:800 }',
'.pl-uhr-w{ background:#fff; border-radius:50%; padding:9px;',
'  box-shadow:0 14px 30px -18px rgba(40,53,59,.7) }',
'.pl-uhr{ width:132px; height:132px; display:block }',
'.pl-symbol{ background:#fff; border:1.5px solid #EEE7D8; border-radius:20px;',
'  padding:18px 30px; text-align:center; box-shadow:0 12px 26px -18px rgba(40,53,59,.6) }',
'.pl-symbol span{ display:block; font-size:56px; line-height:1 }',
'.pl-symbol em{ display:block; font-style:normal; font-size:14px; font-weight:800;',
'  color:#5B6A70; margin-top:8px }',

/* Texte */
'.pl-texte{ display:grid; gap:13px; margin-bottom:18px }',
'@media(min-width:680px){ .pl-texte{ grid-template-columns:1fr 1fr } }',
'.pl-text{ background:#fff; border:1.5px solid #EEE7D8; border-radius:18px; overflow:hidden;',
'  box-shadow:0 8px 22px -16px rgba(40,53,59,.5) }',
'.pl-text-kopf{ display:flex; align-items:center; gap:10px; padding:11px 14px;',
'  background:#FFFCF5; border-bottom:1.5px solid #EEE7D8 }',
'.pl-text-z{ font-size:17px }',
'.pl-text-m{ min-width:0 }',
'.pl-text-m b{ display:block; font-size:13.5px; font-weight:800; line-height:1.2 }',
'.pl-text-m span{ display:block; font-size:11.5px; color:#8A97A0; font-weight:600 }',
'.pl-text-k{ padding:14px 16px 16px }',
'.pl-text-k span{ display:block; font-size:15px; line-height:1.65 }',
'.pl-s-sms .pl-text-k{ background:#F4FBFC }',
'.pl-text-k mark{ background:linear-gradient(180deg,transparent 52%,#FFE066 52%);',
'  color:inherit; padding:0 2px; border-radius:3px }',

/* Symbolbilder — fehlt die Datei, rückt das Ersatzzeichen nach */
'.pl-motiv{ position:relative; flex:0 0 auto; width:46px; height:46px; border-radius:14px;',
'  overflow:hidden; background:#FFF6E3; border:1.5px solid #EEE7D8; display:grid;',
'  place-items:center }',
'.pl-motiv img{ width:100%; height:100%; object-fit:cover; display:block }',
'.pl-motiv em{ display:none; font-style:normal; font-size:22px; line-height:1 }',
'.pl-motiv.leer em{ display:block }',
'.pl-motiv.klein{ width:34px; height:34px; border-radius:11px }',
'.pl-motiv.klein em{ font-size:17px }',
'.pl-motiv.ort{ width:96px; height:96px; border-radius:28px; margin:0 auto 11px;',
'  box-shadow:0 16px 32px -22px rgba(40,53,59,.75) }',
'.pl-motiv.ort em{ font-size:44px }',

/* Textsorten sehen aus wie das, was sie sind */
'.pl-s-aushang{ transform:rotate(-.65deg); background:#FFFDF6 }',
'.pl-s-aushang .pl-text-kopf{ background:#FFF6E3; position:relative }',
'.pl-s-aushang .pl-text-kopf::after{ content:""; position:absolute; right:15px; top:50%;',
'  width:13px; height:13px; margin-top:-7px; border-radius:50%; background:#D83636;',
'  box-shadow:0 3px 7px -1px rgba(40,53,59,.55), inset 0 -2px 3px rgba(0,0,0,.2) }',
'.pl-s-zettel{ transform:rotate(.55deg) }',
'.pl-s-zettel .pl-text-k{ padding-top:10px;',
'  background-image:repeating-linear-gradient(#fff 0 27px, #E7F0F4 27px 28px) }',
'.pl-s-zettel .pl-text-k span{ font-family:"Caveat","Bradley Hand",cursive;',
'  font-size:21px; line-height:28px; color:#22384A }',
'.pl-s-sms .pl-text-k{ background:#F4FBFC; padding:14px 14px 8px }',
'.pl-s-sms .pl-text-k span{ display:inline-block; max-width:93%; background:#fff;',
'  border:1px solid #DCEDF2; border-radius:16px 16px 16px 5px; padding:8px 13px;',
'  margin-bottom:7px; font-size:14.5px; line-height:1.5;',
'  box-shadow:0 5px 13px -9px rgba(40,53,59,.6) }',
'.pl-s-email .pl-text-kopf{ background:#F1F7FA }',
'.pl-s-email .pl-text-m span{ color:#35719A }',

/* Anzeigen */
'.pl-anz-kopf{ display:flex; align-items:center; gap:9px; margin-bottom:9px; padding-right:34px }',
'.pl-anz-kopf .pl-anz-q{ margin:0; padding:0 }',
/* --- A2: langer Text --- */
'.pl-lang{ background:#fff; border:1.5px solid #EEE7D8; border-radius:18px; overflow:hidden;',
'  margin-bottom:18px; box-shadow:0 2px 0 rgba(26,26,26,.04) }',
'.pl-lang-kopf{ display:flex; align-items:center; gap:11px; padding:14px 18px;',
'  background:#FFFCF5; border-bottom:1.5px solid #EEE7D8 }',
'.pl-lang-k{ padding:16px 20px 18px }',
'.pl-lang-k p{ font-size:16px; line-height:1.75; margin:0 0 11px; color:#1A1A1A }',
'.pl-lang-k p:last-child{ margin-bottom:0 }',
'.pl-lang.pl-s-zeitung .pl-lang-kopf b, .pl-lang.pl-s-blog .pl-lang-kopf b{ font-size:18px;',
'  line-height:1.3; letter-spacing:-.025em }',
'.pl-lang.pl-s-zeitung .pl-lang-kopf, .pl-lang.pl-s-blog .pl-lang-kopf{ align-items:flex-start }',
'.pl-lang.pl-s-email .pl-lang-kopf{ background:#EEF6F8 }',
'.pl-lang.pl-s-blog .pl-lang-kopf{ background:#F4F1FA }',

/* --- A2: Übersicht / Etagenplan --- */
'.pl-tafel{ background:#fff; border:2px solid #28353B; border-radius:16px; overflow:hidden;',
'  margin-bottom:18px }',
'.pl-tafel-kopf{ display:flex; align-items:center; gap:10px; padding:12px 16px;',
'  background:#28353B; color:#fff }',
'.pl-tafel-kopf span{ font-family:"Space Grotesk",sans-serif; font-weight:800; font-size:15px;',
'  letter-spacing:.02em }',
'.pl-tafel-z{ display:grid; grid-template-columns:minmax(88px,auto) 1fr; gap:14px;',
'  padding:11px 16px; border-top:1px solid #EEE7D8; align-items:baseline }',
'.pl-tafel-z:first-child{ border-top:0 }',
'.pl-tafel-z b{ font-family:"Space Grotesk",sans-serif; font-weight:800; font-size:14px;',
'  color:#0F5468 }',
'.pl-tafel-z span{ font-size:15.5px; line-height:1.55 }',

/* --- A2: sechs Anzeigen und das x --- */
'@media(min-width:680px){ .pl-anz-6{ grid-template-columns:1fr 1fr } }',
'@media(min-width:940px){ .pl-anz-6{ grid-template-columns:1fr 1fr 1fr } }',
'.pl-xzeile{ margin-top:13px }',
'.pl-x{ width:100%; background:#fff; border:2px dashed #DFD3BE; border-radius:14px;',
'  padding:13px 16px; font-size:15px; font-weight:700; color:#5B6A70; cursor:pointer;',
'  display:flex; align-items:center; gap:11px }',
'.pl-x b{ width:26px; height:26px; border-radius:9px; background:#F3EDE0; color:#5B6A70;',
'  display:grid; place-items:center; font-size:13px; flex:none }',
'.pl-x:not([disabled]):hover{ border-color:#28353B; color:#1A1A1A }',
'.pl-x.wahl{ border-style:solid; border-color:#28353B; color:#1A1A1A }',
'.pl-x.gut{ border-style:solid; border-color:#16A34A; background:#E8F8EE; color:#0F7A38 }',
'.pl-x.gut b{ background:#16A34A; color:#fff }',
'.pl-x.schlecht{ border-style:solid; border-color:#D83636; background:#FDECEC; color:#B02B24 }',
'.pl-x.blass{ opacity:.45 }',

'.pl-sit{ background:#fff; border:1.5px solid #EEE7D8; border-left:5px solid #E39A00;',
'  border-radius:16px; padding:15px 18px; margin-bottom:16px }',
'.pl-sit span{ display:block; font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#8A5C00; margin-bottom:5px }',
'.pl-sit p{ font-size:17px; line-height:1.5; margin:0; font-weight:600 }',
'.pl-anzeigen{ display:grid; gap:13px }',
'@media(min-width:680px){ .pl-anzeigen{ grid-template-columns:1fr 1fr } }',
'.pl-anz{ position:relative; text-align:left; background:#fff; border:2px solid #EEE7D8;',
'  border-radius:18px; padding:18px 18px 16px; cursor:pointer;',
'  transition:transform .14s, border-color .14s, box-shadow .14s }',
'.pl-anz:not([disabled]):hover{ transform:translateY(-3px); border-color:#35AFD0;',
'  box-shadow:0 16px 32px -20px rgba(40,53,59,.6) }',
'.pl-anz-b{ position:absolute; right:14px; top:14px; width:26px; height:26px; border-radius:9px;',
'  display:grid; place-items:center; background:#FFF7E6; color:#8A5C00;',
'  font-family:"Space Grotesk",sans-serif; font-weight:800; font-size:14px }',
'.pl-anz-q{ display:block; font-size:11.5px; font-weight:800; letter-spacing:.09em;',
'  text-transform:uppercase; color:#8A97A0; margin-bottom:8px; padding-right:34px }',
'.pl-anz-z span{ display:block; font-size:15px; line-height:1.6; color:#1A1A1A }',
'.pl-anz-z span:first-child{ font-family:"Space Grotesk",sans-serif; font-weight:800;',
'  font-size:16.5px; margin-bottom:3px }',
'.pl-anz[disabled]{ color:#1A1A1A; opacity:1; cursor:default }',
'.pl-anz[disabled] .pl-anz-q{ color:#5B6A70 }',
'.pl-anz.wahl{ border-color:#28353B; background:#FFFCF5 }',
'.pl-anz.gut{ border-color:#16A34A; background:#E8F8EE }',
'.pl-anz.gut .pl-anz-b{ background:#16A34A; color:#fff }',
'.pl-anz.schlecht{ border-color:#D83636; background:#FDEAEA }',
'.pl-anz.schlecht .pl-anz-b{ background:#D83636; color:#fff }',
'.pl-anz.blass{ opacity:.5 }',

/* Frage und Antwortknöpfe */
'.pl-frage{ display:flex; align-items:flex-start; gap:13px; background:#fff;',
'  border:1.5px solid #EEE7D8; border-radius:16px; padding:16px 18px; margin-bottom:14px }',
'.pl-frage-n{ flex:none; width:28px; height:28px; border-radius:9px; display:grid;',
'  place-items:center; background:#28353B; color:#fff;',
'  font-family:"Space Grotesk",sans-serif; font-weight:800; font-size:14px }',
'.pl-frage p{ font-size:17px; line-height:1.5; margin:0; font-weight:600 }',
'.pl-rf{ display:grid; grid-template-columns:1fr 1fr; gap:12px }',
'.pl-rf-b{ display:flex; align-items:center; justify-content:center; gap:9px; background:#fff;',
'  border:2px solid #EEE7D8; border-radius:16px; padding:17px 14px; cursor:pointer;',
'  font-family:"Space Grotesk",sans-serif; font-size:17px; font-weight:800;',
'  transition:transform .14s, border-color .14s, box-shadow .14s }',
'.pl-rf-b span{ width:26px; height:26px; border-radius:50%; display:grid; place-items:center;',
'  background:#F3ECDD; font-size:14px }',
'.pl-rf-b:not([disabled]):hover{ transform:translateY(-2px); border-color:#28353B;',
'  box-shadow:0 12px 26px -18px rgba(40,53,59,.7) }',
'.pl-rf-b.wahl{ border-color:#28353B; background:#FFFCF5 }',
'.pl-rf-b.gut{ border-color:#16A34A; background:#E8F8EE; color:#14532D }',
'.pl-rf-b.gut span{ background:#16A34A; color:#fff }',
'.pl-rf-b.schlecht{ border-color:#D83636; background:#FDEAEA; color:#9B2320 }',
'.pl-rf-b.schlecht span{ background:#D83636; color:#fff }',
'.pl-rf-b.blass{ opacity:.45 }',

/* wahl */
'.pl-opts{ display:grid; gap:10px }',
'.pl-opt{ display:flex; align-items:center; gap:12px; text-align:left; background:#fff;',
'  border:2px solid #EEE7D8; border-radius:16px; padding:15px 17px; cursor:pointer;',
'  font-size:16px; font-weight:600; color:#1A1A1A;',
'  transition:transform .14s, border-color .14s, box-shadow .14s }',
'.pl-opt:not([disabled]):hover{ transform:translateY(-2px); border-color:#28353B;',
'  box-shadow:0 12px 26px -18px rgba(40,53,59,.7) }',
'.pl-opt-b{ flex:none; width:28px; height:28px; border-radius:9px; display:grid;',
'  place-items:center; background:#F3ECDD; font-family:"Space Grotesk",sans-serif;',
'  font-weight:800; font-size:14px; color:#5B6A70 }',
'.pl-opt.gut{ border-color:#16A34A; background:#E8F8EE }',
'.pl-opt.gut .pl-opt-b{ background:#16A34A; color:#fff }',
'.pl-opt.schlecht{ border-color:#D83636; background:#FDEAEA }',
'.pl-opt.schlecht .pl-opt-b{ background:#D83636; color:#fff }',
'.pl-opt.blass{ opacity:.45 }',
'.pl-opt[disabled]{ color:#1A1A1A; opacity:1 }',
'.pl-opt.blass[disabled]{ opacity:.45 }',

/* zuordnen */
'.pl-zu-w{ display:grid; gap:13px }',
'@media(min-width:700px){ .pl-zu-w{ grid-template-columns:1.15fr 1fr; align-items:start } }',
'.pl-zu-l{ display:grid; gap:9px }',
'.pl-zl{ display:block; width:100%; text-align:left; background:#fff; border:2px solid #EEE7D8;',
'  border-radius:14px; padding:12px 14px; cursor:pointer; transition:.14s }',
'.pl-zl:not([disabled]):hover{ border-color:#28353B }',
/* Die linke Spalte ist ein kleines Schild, kein Fließtext. */
'.pl-zl-s{ display:inline-block; font-family:"Space Grotesk",sans-serif; font-size:15.5px;',
'  font-weight:800; color:#1A1A1A; background:#fff; border:2.5px solid #28353B;',
'  border-radius:8px; padding:6px 13px; box-shadow:0 4px 10px -6px rgba(40,53,59,.8) }',
'.pl-zl-r{ display:block; font-size:13px; color:#8A97A0; margin-top:7px; font-weight:600 }',
'.pl-zl.aktiv{ border-color:#28353B; background:#FFFCF5; box-shadow:0 0 0 4px rgba(40,53,59,.09) }',
'.pl-zl.voll{ border-color:#35AFD0; background:#F4FBFC }',
'.pl-zl.voll .pl-zl-r{ color:#0F5468 }',
'.pl-zl.gut{ border-color:#16A34A; background:#E8F8EE }',
'.pl-zl.gut .pl-zl-r{ color:#14532D }',
'.pl-zl.schlecht{ border-color:#D83636; background:#FDEAEA }',
'.pl-zl.schlecht .pl-zl-r{ color:#9B2320 }',
'.pl-zl[disabled]{ opacity:1 }',
'.pl-zu-r{ display:grid; gap:9px; align-content:start }',
'.pl-zr{ display:block; width:100%; text-align:left; background:#FFFCF5;',
'  border:1.5px dashed #DFD3BE; border-radius:14px; padding:12px 14px; cursor:pointer;',
'  font-size:14.5px; color:#3D4A50; line-height:1.4; transition:.14s }',
'.pl-zr:not([disabled]):hover{ border-color:#28353B; background:#fff; border-style:solid }',
'.pl-zr.weg{ opacity:.28; text-decoration:line-through }',

/* luecke */
'.pl-lu-text{ background:#fff; border:1.5px solid #EEE7D8; border-radius:16px;',
'  padding:18px 20px; font-size:17px; line-height:2.1; margin:0 0 14px }',
'.pl-lu{ display:inline-block; min-width:86px; background:#FFF7E6; border:2px dashed #E0C97A;',
'  border-radius:10px; padding:3px 10px; margin:0 3px; cursor:pointer;',
'  font-family:inherit; font-size:16px; font-weight:800; color:#8A5C00; vertical-align:baseline }',
'.pl-lu.aktiv{ border-style:solid; border-color:#28353B; background:#fff;',
'  box-shadow:0 0 0 4px rgba(40,53,59,.09) }',
'.pl-lu.voll{ border-style:solid; border-color:#35AFD0; background:#E4F7FA; color:#0F5468 }',
'.pl-lu.gut{ border-style:solid; border-color:#16A34A; background:#E8F8EE; color:#14532D }',
'.pl-lu.schlecht{ border-style:solid; border-color:#D83636; background:#FDEAEA; color:#9B2320 }',
'.pl-lu[disabled]{ opacity:1 }',
'.pl-bank{ display:flex; gap:9px; flex-wrap:wrap }',
'.pl-bw{ background:#fff; border:2px solid #EEE7D8; border-radius:12px; padding:10px 16px;',
'  cursor:pointer; font-size:15.5px; font-weight:700; transition:.14s }',
'.pl-bw:not([disabled]):hover{ transform:translateY(-2px); border-color:#28353B }',
'.pl-bw.weg{ opacity:.28 }',
'.pl-lu-loes{ font-size:14px; color:#5B6A70; margin:12px 0 0 }',

/* wortklick */
'.pl-schild-k span{ line-height:1.9 }',
'.pl-wk{ background:none; border:0; padding:1px 2px; margin:0 -2px; border-radius:6px;',
'  cursor:pointer; font-family:inherit; font-size:inherit; font-weight:inherit; color:inherit;',
'  border-bottom:2px dotted #C9D2D6 }',
'.pl-wk:not([disabled]):hover{ background:#FFE066; border-bottom-color:#E39A00 }',
'.pl-wk.gut{ background:#BBF7D0; box-shadow:0 0 0 2px #16A34A }',
'.pl-wk.schlecht{ background:#FECACA; box-shadow:0 0 0 2px #D83636 }',
'.pl-wk[disabled]{ opacity:1 }',

/* Rückmeldung */
'.pl-fb{ margin-top:16px; border-radius:18px; padding:17px 19px; border:1.5px solid }',
'.pl-fb.gut{ background:#E8F8EE; border-color:#BFE6CD }',
'.pl-fb.schlecht{ background:#FFF7E6; border-color:#F0DFB0 }',
'.pl-fb-kopf{ display:flex; align-items:center; gap:9px; margin-bottom:6px }',
'.pl-fb-kopf span{ font-size:19px }',
'.pl-fb-kopf b{ font-family:"Space Grotesk",sans-serif; font-size:17px; font-weight:800 }',
'.pl-fb p{ font-size:14.5px; color:#3D4A50; line-height:1.6; margin:0 0 14px }',
'.pl-weiter-w{ margin-top:16px }',
'.pl-weiter{ background:#D83636; color:#fff; border:0; border-radius:14px; padding:12px 22px;',
'  font-weight:800; font-size:15px; cursor:pointer; box-shadow:0 4px 0 #B02B24; transition:.14s }',
'.pl-weiter:hover{ transform:translateY(-2px); box-shadow:0 6px 0 #B02B24 }',

/* Auswertung */
'.pl-ende{ text-align:center; padding:34px 0 20px }',
'.pl-ende-ring{ width:150px; height:150px; border-radius:50%; margin:0 auto 20px;',
'  display:grid; place-items:center;',
'  background:conic-gradient(var(--rf,#35AFD0) calc(var(--p)*1%), #EDE3CE 0) }',
'.pl-ende-ring.gut{ --rf:#16A34A }',
'.pl-ende-ring.knapp{ --rf:#E39A00 }',
'.pl-ende-ring i{ width:124px; height:124px; border-radius:50%; background:#FFFCF5;',
'  display:grid; place-items:center; font-style:normal }',
'.pl-ende-ring b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:40px;',
'  font-weight:800; line-height:1 }',
'.pl-ende-ring span{ display:block; font-size:12px; font-weight:700; color:#8A97A0; margin-top:3px }',
'.pl-ende h3{ font-family:"Space Grotesk",sans-serif; font-size:27px; font-weight:800;',
'  letter-spacing:-.03em; margin:0 0 8px }',
'.pl-ende p{ font-size:15px; color:#5B6A70; line-height:1.6; margin:0 auto 22px; max-width:34em }',
'.pl-ende-k{ display:flex; gap:11px; justify-content:center; flex-wrap:wrap }',
'.pl-b1{ background:#fff; border:1.5px solid #EEE7D8; border-radius:14px; padding:12px 20px;',
'  font-weight:800; font-size:14.5px; cursor:pointer }',
'.pl-b1:hover{ background:#FFFCF5; border-color:#DFD3BE }',
'.pl-b1.haupt{ background:#D83636; color:#fff; border-color:#D83636; box-shadow:0 4px 0 #B02B24 }',
'.pl-b1.haupt:hover{ transform:translateY(-2px); box-shadow:0 6px 0 #B02B24 }',
'.pl-b2{ background:none; border:0; font-weight:700; font-size:14px; color:#5B6A70;',
'  cursor:pointer; padding:12px 8px; text-decoration:underline }',

'@media(max-width:600px){ #plBody{ padding:16px 14px 80px } .pl-kopf{ padding:12px 14px }',
'  .pl-punkte{ max-width:120px } .pl-rf{ grid-template-columns:1fr }',
'  .pl-karte{ grid-template-columns:auto 1fr } .pl-karte-p{ grid-row:2; justify-self:start }',
'  .pl-lu-text{ font-size:16px; line-height:2.3 } }'
].join('\n');

})();
