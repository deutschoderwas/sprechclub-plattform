/* ============================================================
   deutschoderwas club — SCHREIBTRAINING

   Der Schreiben-Teil der Prüfungsvorbereitung. Dritte Schwester
   von pruefung-lesen.js und pruefung-hoeren.js, gleicher Aufbau,
   gleiche Optik — aber eine andere Art zu prüfen.

     1  Die Wörter im Formular   Familienstand, Staatsangehörigkeit
     2  Bausteine der Mitteilung Anrede, Grund, Bitte, Gruß
     3  Die zwei Aufgabentypen   Formular · Mitteilung
     4  Prüfungslauf             beides zusammen, 20 Minuten

   Warum Schreiben anders geprüft wird:

   Teil 1 ist objektiv. Jedes Lückenfeld hat ein Array mit allen
   vernünftigen Schreibweisen. Verglichen wird großzügig — Groß- und
   Kleinschreibung, doppelte Leerzeichen und ein Punkt am Ende sind
   egal. Niemand soll an 3.5.1994 statt 03.05.1994 scheitern.

   Teil 2 hat keine richtige Antwort. Bewertet wird nach den
   offiziellen Goethe-Kriterien: drei Leitpunkte à 3 Punkte plus
   ein Punkt für Anrede und Gruß, zusammen 10.

     Anrede, Gruß und Wortzahl rechnet der Browser selbst nach.
     Die drei Inhaltspunkte und die Sprache beurteilt
     api/ai-schreiben — dafür muss man angemeldet sein.

   Fällt der Dienst aus oder ist niemand angemeldet, greift der
   ehrliche Rückfall: Musterlösung daneben, Selbstcheck-Liste, und
   der Lernende setzt seine Punkte selbst. Das Training ist dann
   nicht kaputt, nur etwas weniger bequem.
   ============================================================ */
(function(){
  'use strict';

  function E(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function J(k,d){ try{ if(window.lsGet) return lsGet(k,d);
    var v=JSON.parse(localStorage.getItem('ub_'+k)); return v==null?d:v; }catch(e){ return d; } }
  function S(k,v){ try{ if(window.lsSet) return lsSet(k,v);
    localStorage.setItem('ub_'+k,JSON.stringify(v)); }catch(e){} }

  /* ------------------------------------------------------------
     Der eine Schalter, der über Anspruch und Kosten entscheidet.

     Musterlösung und Selbstcheck gibt es in jeder Stellung — der
     eigene Blick ist die halbe Übung. Es geht nur darum, wann
     Amanda dazukommt.

     'immer'  Jede abgegebene Mitteilung geht sofort an Amanda, wenn
              jemand angemeldet ist. Für die Punkte zählt dann ihre
              Wertung, der Selbstcheck bleibt zum Vergleichen stehen.
     'knopf'  Amanda kommt nur, wenn die Lernende den goldenen Knopf
              drückt. Es kostet also nur, wenn jemand es will.
     'aus'    Gar kein Aufruf, keine Kosten.

     Für 'knopf' und 'immer' müssen api/ai-schreiben.js deployt und
     ANTHROPIC_API_KEY gesetzt sein. Ist Amanda nicht erreichbar
     oder ist niemand angemeldet, fängt der Selbstcheck das auf —
     kaputt geht also in keinem Fall etwas.
     ------------------------------------------------------------ */
  var AMANDA = 'immer';

  var QUELLEN = { 'A1':'SCHREIBEN_A1', 'B1':'SCHREIBEN_B1' };
  function datenVon(n){ var k=QUELLEN[n]; return k ? (window[k]||null) : null; }
  window.schreibenVorhanden = function(n){ return !!datenVon(n); };
  window.schreibenDaten = function(n){ return datenVon(n); };

  function blockVon(d,id){ for(var i=0;i<d.bloecke.length;i++) if(d.bloecke[i].id===id) return d.bloecke[i]; return null; }
  function teilVon(d,nr){ for(var i=0;i<d.teile.length;i++) if(d.teile[i].nr===nr) return d.teile[i]; return null; }
  function laufVon(d,id){ for(var i=0;i<d.laeufe.length;i++) if(d.laeufe[i].id===id) return d.laeufe[i]; return null; }

  /* ---------- Fortschritt ---------- */

  function stand(){ return J('pruefSchreiben', {}) || {}; }
  function merken(niveau, topf, id, punkte){
    var st = stand();
    if(!st[niveau]) st[niveau] = {};
    if(!st[niveau][topf]) st[niveau][topf] = {};
    if(punkte > (st[niveau][topf][id]||0)) st[niveau][topf][id] = punkte;
    S('pruefSchreiben', st);
  }
  function holen(niveau, topf, id){ return ((stand()[niveau]||{})[topf]||{})[id]; }

  function maxVon(teil, r){
    if(teil.art==='formular') return 5;                     /* fünf Felder */
    return r.aufgaben.length * 10;                          /* je Mitteilung 10 */
  }
  /* Beim Formular gibt es genau eine richtige Lösung — da zählt die volle
     Punktzahl. Eine Mitteilung dagegen wird bewertet wie in der Prüfung:
     ab sechzig Prozent ist sie bestanden, und mehr verlangen wir auch nicht,
     bevor wir jemanden weiterschicken. */
  function zielVon(teil, r){
    var m = maxVon(teil, r);
    return teil.art==='formular' ? m : Math.round(m*0.6*2)/2;
  }
  function blockStand(n,b){ var p=holen(n,'b',b.id), max=b.aufgaben.length;
    return { punkte:p||0, max:max, gemacht:p!=null, prozent:p==null?0:Math.round(p/max*100) }; }
  function teilStand(n,t){
    var max=0, hat=0;
    t.runden.forEach(function(r){ max += maxVon(t,r);
      var p=holen(n,t.nr,r.id); if(p!=null) hat+=p; });
    return { punkte:hat, max:max, prozent:max?Math.round(hat/max*100):0 };
  }
  function laufMax(L){
    if(L && L.aufgaben) return L.aufgaben.length * 10;      /* je Schreibaufgabe zehn */
    return 15;                                              /* A1: 5 + 10 */
  }
  function laufZiel(L){ return Math.round(laufMax(L)*0.6*2)/2; }
  function laufStand(n,L){ var p=holen(n,'l',L.id), m=laufMax(L);
    return { punkte:p||0, max:m, gemacht:p!=null, geschafft:(p||0)>=laufZiel(L),
             prozent:p==null?0:Math.round(p/m*100) }; }

  window.schreibenProzent = function(niveau){
    var d = datenVon(niveau); if(!d) return null;
    var hat=0, max=0;
    d.bloecke.forEach(function(b){ var s=blockStand(niveau,b); hat+=s.punkte; max+=s.max; });
    d.teile.forEach(function(t){ var s=teilStand(niveau,t); hat+=s.punkte; max+=s.max; });
    d.laeufe.forEach(function(L){ var s=laufStand(niveau,L); hat+=s.punkte; max+=s.max; });
    return max ? Math.round(hat/max*100) : 0;
  };

  window.schreibenNaechstes = function(niveau){
    var d = datenVon(niveau); if(!d) return null;
    for(var i=0;i<d.bloecke.length;i++){ var b=d.bloecke[i], s=blockStand(niveau,b);
      if(s.punkte < s.max) return { was:'Stufe '+b.stufe+' — '+b.titel, klick:"schreibenBlock('"+b.id+"')" }; }
    for(var j=0;j<d.teile.length;j++){ var t=d.teile[j];
      for(var k=0;k<t.runden.length;k++){ var r=t.runden[k], p=holen(niveau,t.nr,r.id);
        if(p==null || p<zielVon(t,r))
          return { was:'Teil '+t.nr+' — '+t.name+', Runde '+(k+1), klick:"schreibenRunde("+t.nr+",'"+r.id+"')" }; } }
    for(var m=0;m<d.laeufe.length;m++){ var Lf=d.laeufe[m], sl=laufStand(niveau,Lf);
      if(!sl.geschafft) return { was:Lf.titel+' — Formular und Mitteilung mit Uhr', klick:"schreibenLauf('"+Lf.id+"')" }; }
    return null;
  };

  /* ---------- Zustand ---------- */

  var W = null;
  var laeuft = false;   /* wartet gerade auf die Korrektur? */

  /* ---------- Vergleichen ---------- */

  function norm(s){
    return String(s||'')
      .toLowerCase()
      .replace(/\s+/g,' ')
      .replace(/[.,;:!?]+$/,'')
      .replace(/\s*,\s*/g,' ')
      .trim();
  }
  function passt(eingabe, loesungen){
    var e = norm(eingabe); if(!e) return false;
    for(var i=0;i<loesungen.length;i++) if(norm(loesungen[i])===e) return true;
    return false;
  }

  var ANREDE = /(^|\n)\s*(liebe[rs]?|hallo|hi|guten (tag|morgen|abend)|sehr geehrte[rs]?|servus|moin)\b/i;
  var GRUSS  = /(viele|liebe|beste|freundliche|herzliche)\s+gr(ü|ue)(ß|ss)e|mit freundlichen gr|gr(ü|ue)(ß|ss)e?\b|bis (bald|dann|morgen|sp(ä|ae)ter)|danke und tsch(ü|ue)ss|tsch(ü|ue)ss/i;

  function woerter(t){ return String(t||'').trim().split(/\s+/).filter(Boolean).length; }
  function hatAnrede(t){ return ANREDE.test(t||''); }
  function hatGruss(t){ return GRUSS.test(t||''); }

  /* ---------- Kopf ---------- */

  function zeit(ms){ var s=Math.max(0,Math.round(ms/1000));
    return Math.floor(s/60)+':'+('0'+(s%60)).slice(-2); }

  function kopfHTML(){
    var rechts = '';
    if(W.modus==='lauf' && W.uhrEnde){
      var rest = W.uhrEnde - Date.now();
      rechts = '<span class="pl-uhrzeit'+(rest<120000?' knapp':'')+'" id="pwUhr">'+zeit(rest)+'</span>';
    } else if(W.folge && W.folge.length>1) rechts = fortschritt();
    return '<div class="pl-kopf">'
      + '<button class="pl-zu" onclick="schreibenSchliessen()" aria-label="Schließen">✕</button>'
      + '<div class="pl-kopf-m"><b>'+E(W.titel)+'</b><span>'+E(W.unter)+'</span></div>'
      + rechts + '</div>';
  }
  function fortschritt(){
    var p = [];
    for(var i=0;i<W.folge.length;i++){
      var kl = 'pl-pk';
      if(W.offen[i]===true) kl += ' gut';
      if(W.offen[i]===false) kl += ' schlecht';
      if(W.offen[i]==='teil') kl = 'pl-pk fertig';
      if(i===W.i && W.offen[i]==null) kl += ' dran';
      p.push('<span class="'+kl+'"></span>');
    }
    return '<div class="pl-punkte">'+p.join('')+'</div>';
  }
  function kopfMalen(){ var k=document.getElementById('pwKopf'); if(k) k.innerHTML = kopfHTML(); }

  /* ---------- Malen ---------- */

  function malen(){
    var b = document.getElementById('pwBody'); if(!b) return;
    var e = W.folge[W.i], a = e.a, art = e.art;
    var zeigen = W.offen[W.i]!=null;
    var h = '';

    if(art==='wahl'){
      h += '<div class="pl-frage"><p>'+E(a.frage)+'</p></div>';
      h += '<div class="pl-opts">' + a.opt.map(function(o,k){
        var kl='';
        if(zeigen) kl = k===a.loesung ? ' gut' : (k===W.gewaehlt[W.i] ? ' schlecht' : ' blass');
        return '<button class="pl-opt'+kl+'" '+(zeigen?'disabled':'onclick="schreibenWahl('+k+')"')+'>'
          + '<span class="pl-opt-b">'+String.fromCharCode(97+k)+'</span>'+E(o)+'</button>';
      }).join('') + '</div>';

    } else if(art==='ordnen'){
      h += '<div class="pl-frage"><p>'+E(a.frage)+'</p></div>';
      h += ordnenHTML(a, zeigen);

    } else if(art==='formular'){
      h += formularHTML(a, zeigen);

    } else if(art==='mitteilung'){
      h += mitteilungHTML(a, zeigen);
    }

    if(zeigen && art!=='mitteilung') h += rueckmeldung(a);
    b.innerHTML = h;
    kopfMalen();
    if(art==='mitteilung' && !zeigen) zaehlerBinden();
    try{ document.getElementById('pwOv').scrollTop = 0; }catch(e2){}
  }

  /* --- ordnen: antippen in der richtigen Reihenfolge --- */

  function ordnenHTML(a, zeigen){
    var gew = W.gewaehlt[W.i] || [];
    var mix = W.mix[W.i];
    var offen = mix.filter(function(i){ return gew.indexOf(i)<0; });
    var h = '<div class="pw-ordnen">';
    h += '<div class="pw-ord-block"><span class="pw-ord-t">Deine Reihenfolge</span>'
      + '<div class="pw-ord-ziel">' + (gew.length
      ? gew.map(function(i,k){
          var kl = zeigen ? (i===k ? ' gut' : ' schlecht') : '';
          return '<span class="pw-ord-z'+kl+'"><i>'+(k+1)+'</i>'+E(a.teile[i])+'</span>';
        }).join('')
      : '<span class="pw-ord-leer">Noch leer — tippe unten den Teil an, der zuerst kommt.</span>')
      + '</div></div>';
    if(!zeigen && offen.length){
      h += '<div class="pw-ord-block"><span class="pw-ord-t">Diese Teile fehlen noch</span>'
        + '<div class="pw-ord-bank">' + offen.map(function(i){
        return '<button class="pw-ord-b" onclick="schreibenOrd('+i+')">'+E(a.teile[i])+'</button>';
      }).join('') + '</div></div>';
    }
    if(!zeigen && gew.length) h += '<div class="pw-ord-zurueck">'
      + '<button class="pl-b2" onclick="schreibenOrdZurueck()">↩ Letztes zurücknehmen</button></div>';
    if(zeigen && W.offen[W.i]===false){
      h += '<div class="pw-ord-loes"><span>So ist es richtig</span>'
        + a.teile.map(function(t,k){ return '<span class="pw-ord-z gut"><i>'+(k+1)+'</i>'+E(t)+'</span>'; }).join('')
        + '</div>';
    }
    return h + '</div>';
  }

  window.schreibenOrd = function(i){
    var g = (W.gewaehlt[W.i]||[]).slice(); g.push(i); W.gewaehlt[W.i]=g;
    var a = W.folge[W.i].a;
    if(g.length >= a.teile.length){
      var ok = true;
      for(var k=0;k<g.length;k++) if(g[k]!==k) ok=false;
      werten(ok, 1);
    } else malen();
  };
  window.schreibenOrdZurueck = function(){
    var g=(W.gewaehlt[W.i]||[]).slice(); g.pop(); W.gewaehlt[W.i]=g; malen();
  };

  /* --- formular --- */

  /* ---------- Visuelles Beiwerk ----------
     Motive liegen in bilder/schreiben/<schluessel>.webp. Fehlt eine Datei,
     rückt still das Zeichen nach — nie ein kaputtes Bild.               */

  var SMOTIVE = [
    ['kurs',     /deutschkurs|volkshochschule|sprachkurs|lehrerin|lehrer|kurs/, '📚'],
    ['praxis',   /praxis|zahnarzt|arzt|ärzt|termin bei/,         '🩺'],
    ['bahn',     /zug|bahn|verspätung|gleis|bahnhof/,            '🚉'],
    ['wohnung',  /wohnung|vermieter|hausverwaltung|miete|nachbar/, '🏠'],
    ['amt',      /bürgeramt|rathaus|amt\b|behörde/,               '🏛️'],
    ['arbeit',   /arbeit|chef|firma|büro|kollege/,               '💼'],
    ['fest',     /geburtstag|party|feier|einladung|grillen/,     '🎉'],
    ['sport',    /sport|verein|training|schwimm|fußball/,        '⚽'],
    ['kita',     /kita|kindergarten|kind\b|schule/,               '🧸'],
    ['freund',   /freund|freundin|besuch|abholen/,               '🤝']
  ];

  function sitMotiv(t){
    var h = String(t||'').toLowerCase();
    for(var i=0;i<SMOTIVE.length;i++) if(SMOTIVE[i][1].test(h)) return SMOTIVE[i];
    return ['allgemein', null, '✉️'];
  }

  function sitHTML(situation, ersatz){
    var m = sitMotiv(situation);
    return '<div class="pw-sit">'
      + '<div class="pw-sit-b"><img src="bilder/schreiben/'+E(m[0])+'.webp" alt=""'
      +   ' loading="lazy" decoding="async"'
      +   ' onerror="this.parentNode.className+=\' leer\'; this.remove()">'
      +   '<em>'+(m[2]||ersatz||'')+'</em></div>'
      + '<div class="pw-sit-tx"><span>Die Situation</span><p>'+E(situation)+'</p></div></div>';
  }

  /* Formatwinke — verraten die Form, nicht die Antwort. */
  var FELD_WINK = [
    [/geburtsdatum|geburtstag/i, 'TT.MM.JJJJ'],
    [/^plz|plz,/i,               '00000 Ort'],
    [/telefon|handy/i,           '0…']
  ];
  function feldWink(name){
    for(var i=0;i<FELD_WINK.length;i++) if(FELD_WINK[i][0].test(name)) return FELD_WINK[i][1];
    return '';
  }

  /* Wortlos gezeichnet: auf einem Formular soll nichts Erfundenes stehen. */
  function amtZeichen(){
    return '<svg class="pw-amt-z" viewBox="0 0 40 40" aria-hidden="true">'
      + '<path d="M20 5l13 8H7z" fill="#28353B"/>'
      + '<rect x="8" y="15" width="24" height="20" rx="2" fill="#fff" stroke="#28353B" stroke-width="2"/>'
      + '<line x1="13" y1="22" x2="27" y2="22" stroke="#28353B" stroke-width="2" stroke-linecap="round"/>'
      + '<line x1="13" y1="28" x2="23" y2="28" stroke="#28353B" stroke-width="2" stroke-linecap="round"/></svg>';
  }
  function stempel(){
    return '<svg class="pw-stempel" viewBox="0 0 100 100" aria-hidden="true">'
      + '<circle cx="50" cy="50" r="43" fill="none" stroke="#A9BCC6" stroke-width="4"/>'
      + '<circle cx="50" cy="50" r="33" fill="none" stroke="#A9BCC6" stroke-width="2" stroke-dasharray="6 5"/>'
      + '<path d="M31 51l13 13 25-27" fill="none" stroke="#A9BCC6" stroke-width="7"'
      +   ' stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  function formularHTML(a, zeigen){
    var g = W.gewaehlt[W.i] || {};
    var nr = 0, zeile = 0;
    var h = sitHTML(a.situation, '📋');
    h += '<div class="pw-quelle"><span class="pw-klammer" aria-hidden="true">📎</span>'
      +  '<span class="pw-quelle-t">Das steht im Text</span><p>'+E(a.text)+'</p></div>';
    h += '<div class="pw-blatt"><span class="pw-loch" aria-hidden="true"></span>'
      +  '<div class="pw-amt">'+amtZeichen()
      +    '<div class="pw-amt-tx"><b>'+E(a.formular.titel)+'</b>'
      +      '<span>Bitte in Druckbuchstaben ausfüllen</span></div></div>'
      +  '<div class="pw-form-z">';
    a.formular.zeilen.forEach(function(z){
      var n = '<i class="pw-fz-n">'+(++zeile)+'</i>';
      if(z.wert!=null){
        h += '<div class="pw-fz"><span class="pw-fz-f">'+n+E(z.feld)+'</span>'
          +  '<span class="pw-fz-w fest">'+E(z.wert)+'</span></div>';
      } else {
        var k = nr++;
        var wert = g[k]!=null ? g[k] : '';
        var kl = '';
        if(zeigen) kl = passt(wert, z.loesung) ? ' gut' : ' schlecht';
        var wink = feldWink(z.feld);
        h += '<div class="pw-fz offen"><span class="pw-fz-f">'+n+E(z.feld)+'</span>'
          +  '<input class="pw-fz-i'+kl+'" id="pwF'+k+'" value="'+E(wert)+'" '
          +    (wink?'placeholder="'+E(wink)+'" ':'')
          +    (zeigen?'disabled':'oninput="schreibenFeld('+k+',this.value)"')
          +    ' autocomplete="off" spellcheck="false">'
          +  (zeigen && kl===' schlecht'
              ? '<span class="pw-fz-l">richtig: '+E(z.loesung[0])+'</span>' : '')
          +  '</div>';
      }
    });
    h += '</div>'
      +  '<div class="pw-unter"><div class="pw-unter-l">Datum, Unterschrift</div>'
      +    stempel()+'</div>'
      +  '</div>';
    if(!zeigen) h += '<div class="pl-weiter-w"><button class="pl-weiter" onclick="schreibenFormPruefen()">Formular abgeben →</button></div>';
    return h;
  }

  window.schreibenFeld = function(k, v){
    var g = W.gewaehlt[W.i] || {}; g[k]=v; W.gewaehlt[W.i]=g;
  };

  window.schreibenFormPruefen = function(){
    var a = W.folge[W.i].a, g = W.gewaehlt[W.i] || {};
    var luecken = a.formular.zeilen.filter(function(z){ return z.wert==null; });
    var richtig = 0;
    luecken.forEach(function(z,k){ if(passt(g[k], z.loesung)) richtig++; });
    W.offen[W.i] = richtig===luecken.length ? true : (richtig>0 ? 'teil' : false);
    W.punkte += richtig;
    malen();
  };

  /* --- mitteilung --- */

  function mitteilungHTML(a, zeigen){
    var text = W.gewaehlt[W.i] || '';
    var srt = a.sorte || 'zettel';
    var h = sitHTML(a.situation, srt==='sms' ? '💬' : (srt==='email' ? '✉️' : '📝'));
    h += '<div class="pw-punkte"><span class="pw-punkte-t">Diese drei Punkte müssen vorkommen</span>'
      + '<div class="pw-pk-r">'
      + a.punkte.map(function(p){
          return '<div class="pw-pk"><i>'+p.nr+'</i><b>'+E(p.was)+'</b>'
            + (p.hinweis?'<span>'+E(p.hinweis)+'</span>':'')+'</div>'; }).join('')
      + '</div></div>';

    if(!zeigen){
      h += '<div class="pw-medium pw-m-'+E(srt)+'">';
      if(srt==='sms'){
        h += '<div class="pw-tel-kopf">'
          +    '<span class="pw-tel-av">'+E(String(a.an||'?').charAt(0))+'</span>'
          +    '<b>'+E(a.an||'Nachricht')+'</b></div>'
          +  '<div class="pw-tel-raum">'
          +    '<textarea id="pwText" class="pw-ta" rows="6"'
          +      ' placeholder="Tippe deine Nachricht …">'+E(text)+'</textarea></div>';
      } else if(srt==='email'){
        h += '<div class="pw-mail-bar"><i></i><i></i><i></i><span>Neue E-Mail</span></div>'
          +  '<div class="pw-mail-kopf">'
          +    '<div><span>An</span><b>'+E(a.an||'')+'</b></div>'
          +    (a.betreff?'<div><span>Betreff</span><b>'+E(a.betreff)+'</b></div>':'')
          +  '</div>'
          +  '<textarea id="pwText" class="pw-ta" rows="7"'
          +    ' placeholder="Schreib hier deine E-Mail …">'+E(text)+'</textarea>';
      } else {
        h += (a.an ? '<div class="pw-zet-an">Für <b>'+E(a.an)+'</b></div>' : '')
          +  '<textarea id="pwText" class="pw-ta" rows="7"'
          +    ' placeholder="Schreib hier deinen Zettel …">'+E(text)+'</textarea>';
      }
      h += '<div class="pw-fuss">'
        +    '<span class="pw-ring" id="pwZaehler">'
        +      '<svg viewBox="0 0 44 44" aria-hidden="true">'
        +        '<circle class="pw-ring-b" cx="22" cy="22" r="18"/>'
        +        '<circle class="pw-ring-v" id="pwRingV" cx="22" cy="22" r="18"/></svg>'
        +      '<b id="pwRingN">0</b></span>'
        +    '<span class="pw-ring-l">Wörter<em id="pwRingZ"></em></span>'
        +    '<span id="pwForm" class="pw-formcheck"></span></div>'
        + '</div>';
      h += '<div class="pw-hilfen"><span>Antippen und weiterschreiben</span>'
        + a.hilfen.map(function(x,k){
            return '<button class="pw-hilfe" onclick="schreibenHilfe('+k+')">'+E(x)+'</button>'; }).join('')
        + '</div>';
      h += '<div class="pl-weiter-w"><button class="pl-weiter" id="pwAb" onclick="schreibenAbgeben()">Abgeben →</button></div>';
    } else {
      h += '<div class="pw-deins"><span class="pw-deins-t">Dein Text</span><p>'+E(text).replace(/\n/g,'<br>')+'</p></div>';
      h += '<div class="pw-muster"><span class="pw-muster-t">So könnte es aussehen</span><p>'
        + E(a.muster).replace(/\n/g,'<br>')+'</p></div>';

      /* Der eigene Blick kommt immer — vergleichen und ehrlich abhaken
         ist die halbe Übung. Amandas Urteil kommt oben dazu, wenn es
         da ist, und zählt dann für die Punkte. */
      if(W.laedt[W.i]) h += wartenHTML();
      else if(W.ergebnis[W.i]) h += W.ergebnis[W.i];
      else h += amandaHTML();
      h += selbstHTML(a, text, !!W.ergebnis[W.i]);

      var fertig = !W.laedt[W.i] && (!!W.ergebnis[W.i] || selbstFertig());
      h += '<div class="pl-fb gut"><div class="pl-fb-kopf"><span>💡</span><b>Merk dir</b></div>'
        + (a.erklaerung ? '<p>'+E(a.erklaerung)+'</p>' : '')
        + (fertig
            ? '<button class="pl-weiter" onclick="schreibenWeiter()">'
              + (W.i>=W.folge.length-1?'Auswertung ansehen →':'Weiter →')+'</button>'
            : '<button class="pl-weiter aus" disabled>'
              + (W.laedt[W.i] ? 'Einen Moment noch …' : 'Erst oben abhaken, dann weiter')
              + '</button>')
        + '</div>';
    }
    return h;
  }

  /* ---------- Selbstcheck ---------- */

  var STUFEN_S = [
    { w:3,   t:'Ja, steht drin', z:'✓' },
    { w:1.5, t:'Nur halb',       z:'~' },
    { w:0,   t:'Fehlt',          z:'✕' }
  ];

  function selbstWerte(){ return W.selbst[W.i] || (W.selbst[W.i] = [null,null,null]); }
  function selbstFertig(){
    var s = selbstWerte();
    for(var i=0;i<3;i++) if(s[i]==null) return false;
    return true;
  }
  /* Anrede und Gruß muss niemand selbst einschätzen — das sieht der
     Browser zuverlässig, und es ist in der echten Prüfung ein ganzer Punkt. */
  function gestaltungWert(text){
    var an = hatAnrede(text), gr = hatGruss(text);
    return an && gr ? 1 : (an || gr ? 0.5 : 0);
  }
  function selbstPunkte(text){
    var s = selbstWerte(), n = gestaltungWert(text);
    for(var i=0;i<3;i++) if(s[i]!=null) n += s[i];
    return n;
  }

  function selbstHTML(a, text, dazu){
    var s = selbstWerte();
    var an = hatAnrede(text), gr = hatGruss(text), g = gestaltungWert(text);
    var summe = selbstPunkte(text);
    var voll  = selbstFertig();
    return '<div class="pw-selbst'+(voll?' fertig':'')+(dazu?' dazu':'')+'">'
      + '<div class="pw-selbst-kopf"><span class="pw-selbst-p">'
      +   (voll ? summe : '–') + '<em>/10</em></span>'
      +   (dazu
          ? '<div><b>Und wie hättest du dich selbst eingeschätzt?</b>'
            + '<span>Hak die drei Punkte ab und vergleich mit Amandas Wertung oben. '
            + 'Für die Punkte zählt Amanda — das hier trainiert deinen eigenen Blick.</span></div>'
          : '<div><b>Vergleich deinen Text mit dem Muster</b>'
            + '<span>Steht jeder der drei Punkte wirklich drin? Sei ehrlich — das übt genau das, '
            + 'was am Prüfungstag zählt.</span></div>')
      + '</div>'
      + a.punkte.map(function(p,i){
          return '<div class="pw-sr"><b>'+p.nr+'. '+E(p.was)+'</b>'
            + (p.hinweis ? '<span class="pw-sh">'+E(p.hinweis)+'</span>' : '')
            + '<div class="pw-sw">'
            + STUFEN_S.map(function(st){
                var an2 = s[i]===st.w ? ' an' : '';
                return '<button class="pw-sb w'+String(st.w).replace('.','')+an2
                  + '" onclick="schreibenSelbst('+i+','+st.w+')">'
                  + '<i>'+st.z+'</i>'+st.t+'</button>'; }).join('')
            + '</div></div>'; }).join('')
      + '<div class="pw-sr auto"><b>Anrede und Gruß</b>'
      +   '<div class="pw-sauto"><span class="'+(an?'ja':'nein')+'">'+(an?'✓':'✕')+' Anrede</span>'
      +   '<span class="'+(gr?'ja':'nein')+'">'+(gr?'✓':'✕')+' Gruß</span>'
      +   '<em>'+g+' Punkt'+(g===1?'':'e')+'</em></div></div>'
      + (voll ? '<div class="pw-sfazit">'+E(fazit(a, s, an, gr))+'</div>' : '')
      + '</div>';
  }

  /* Ein Satz zum Schluss — der sagt, was beim nächsten Mal dran ist. */
  function fazit(a, s, an, gr){
    var fehlt = [];
    for(var i=0;i<3;i++) if(s[i]<3) fehlt.push(a.punkte[i].was);
    if(!fehlt.length && an && gr)
      return 'Alle drei Punkte drin, Anrede und Gruß auch — genau so wird in der Prüfung '
           + 'die volle Punktzahl vergeben.';
    if(!fehlt.length)
      return 'Inhaltlich alles da. Es fehlt nur '+(!an&&!gr ? 'Anrede und Gruß'
           : (!an ? 'die Anrede' : 'der Gruß'))+' — und das ist ein ganzer Punkt. '
           + 'Schreib beides beim nächsten Mal zuerst hin, dann vergisst du es nie.';
    if(fehlt.length===1)
      return 'Schreib beim nächsten Mal einen eigenen Satz zu: '+fehlt[0]+'. '
           + 'Ein Satz pro Punkt reicht — mehr verlangt die Prüfung nicht.';
    return 'Zwei oder drei Punkte sind noch zu knapp. Nimm dir vor dem Schreiben zehn Sekunden '
         + 'und mach zu jedem Punkt einen Satz — dann kann nichts fehlen.';
  }

  window.schreibenSelbst = function(i, w){
    selbstWerte()[i] = w;
    malen();
  };

  function wartenHTML(){
    return '<div class="pw-warten"><span class="pw-warten-p"></span>'
      + '<div><b>Amanda liest deinen Text …</b>'
      +   '<span>Sie geht die drei Punkte durch und schaut sich die Sprache an. '
      +   'Das dauert ein paar Sekunden.</span></div></div>';
  }

  /* Die Einladung, Amanda dazuzuholen — und, wenn sie nicht durchkam,
     der Weg zurück. Der Selbstcheck darunter zählt in beiden Fällen. */
  function amandaHTML(){
    if(AMANDA==='aus') return '';
    var weg = !!W.kifehler[W.i];
    return '<div class="pw-amanda">'
      + '<div class="pw-amanda-t"><b>'
      +   (weg ? 'Amanda ist gerade nicht erreichbar' : 'Willst du es genau wissen?')+'</b>'
      +   '<span>'+(weg ? E(W.kifehler[W.i])
            : 'Amanda liest deinen Text und bewertet ihn nach den Kriterien der echten '
            + 'Prüfung — mit Punkten, Korrektur und einem Tipp für das nächste Mal.')+'</span></div>'
      + '<button class="pw-amanda-b" id="pwKi" onclick="schreibenBewerten()">'
      +   (weg ? '✨ Noch einmal versuchen' : '✨ Von Amanda bewerten lassen')+'</button></div>';
  }

  window.schreibenBewerten = function(){
    if(AMANDA==='aus' || laeuft || W.ergebnis[W.i]) return;
    var i = W.i, a = W.folge[i].a, text = W.gewaehlt[i] || '';
    W.kifehler[i] = null;
    W.laedt[i] = true;
    laeuft = true;
    malen();
    korrigieren(a, text, function(html, punkte){
      laeuft = false;
      W.laedt[i] = false;
      if(punkte==null){
        /* Nicht erreichbar — dann übernimmt der Selbstcheck, nichts geht verloren. */
        W.kifehler[i] = 'Du kannst deinen Text unten selbst mit dem Muster vergleichen — '
          + 'das zählt genauso. Oder du versuchst es gleich noch einmal.';
      } else {
        W.ergebnis[i] = html;
        W.mpunkte[i] = punkte;
      }
      if(W.i===i) malen();
    });
  };

  /* Die Anfänge sind nicht nur zum Lesen da: Antippen setzt sie an die
     Cursorstelle. Auf dem Handy erspart das eine Menge Tipperei. */
  window.schreibenHilfe = function(k){
    var a = W.folge[W.i].a, ta = document.getElementById('pwText');
    if(!ta || !a.hilfen || !a.hilfen[k]) return;
    var s = String(a.hilfen[k]).replace(/\s*…\s*$/,' ').replace(/\s*\.\.\.\s*$/,' ');
    var pos = ta.selectionStart==null ? ta.value.length : ta.selectionStart;
    var vor = ta.value.slice(0,pos), nach = ta.value.slice(pos);
    if(vor && !/[\s\n]$/.test(vor)) vor += ' ';
    ta.value = vor + s + nach;
    var neu = (vor + s).length;
    try{ ta.focus(); ta.setSelectionRange(neu, neu); }catch(e){}
    ta.dispatchEvent(new Event('input'));
  };

  function zaehlerBinden(){
    var ta = document.getElementById('pwText'); if(!ta) return;
    function auf(){
      W.gewaehlt[W.i] = ta.value;
      var n = woerter(ta.value);
      var af = W.folge[W.i] && W.folge[W.i].a;
      var ziel = (af && af.woerter) || 30;
      var z = document.getElementById('pwZaehler');
      var f = document.getElementById('pwForm');
      var nEl = document.getElementById('pwRingN');
      var vEl = document.getElementById('pwRingV');
      var zEl = document.getElementById('pwRingZ');
      if(nEl) nEl.textContent = n;
      if(zEl) zEl.textContent = 'Ziel: etwa '+ziel;
      if(vEl){
        var U = 2*Math.PI*18, p = Math.min(1, n/ziel);
        vEl.style.strokeDasharray = U.toFixed(1);
        vEl.style.strokeDashoffset = (U*(1-p)).toFixed(1);
      }
      if(z) z.className = 'pw-ring'
        + (n>=ziel ? ' gut' : (n>=ziel*0.5 ? ' fast' : ''));
      if(f){
        var an = hatAnrede(ta.value), gr = hatGruss(ta.value);
        f.innerHTML = '<span class="'+(an?'ja':'nein')+'">'+(an?'✓':'○')+' Anrede</span>'
                    + '<span class="'+(gr?'ja':'nein')+'">'+(gr?'✓':'○')+' Gruß</span>';
      }
    }
    ta.addEventListener('input', auf); auf();
    try{ ta.focus(); }catch(e){}
  }

  window.schreibenAbgeben = function(){
    var ta = document.getElementById('pwText');
    var text = ta ? ta.value : (W.gewaehlt[W.i]||'');
    if(woerter(text) < 8){
      var f = document.getElementById('pwForm');
      if(f) f.innerHTML = '<span class="nein">Schreib noch ein bisschen mehr.</span>';
      return;
    }
    W.gewaehlt[W.i] = text;
    W.offen[W.i] = 'teil';        /* aufgedeckt — bewertet wird gleich */
    if(AMANDA==='immer') window.schreibenBewerten();
    else malen();
  };

  /* Fragt Amanda. Klappt das nicht, kommt punkte===null zurück und der
     Selbstcheck bleibt einfach stehen. */
  function korrigieren(a, text, fertig){
    var tok = null;
    try{ tok = (window.sbToken && window.sbToken()) || window.__accessToken || null; }catch(e){}
    if(!tok){ try{
      var s = JSON.parse(localStorage.getItem('sb-access-token')||'null');
      tok = s && (s.access_token || s);
    }catch(e){} }

    if(!tok || !window.fetch){ fertig(null, null); return; }

    var abbruch = setTimeout(function(){ fertig(null, null); fertig=function(){}; }, 20000);

    fetch('/api/ai-schreiben', {
      method:'POST',
      headers:{ 'Content-Type':'application/json', 'Authorization':'Bearer '+tok },
      body: JSON.stringify({ text:text, situation:a.situation, punkte:a.punkte,
                             sorte:a.sorte, level:'A1' })
    }).then(function(r){ return r.ok ? r.json() : null; })
      .then(function(j){
        clearTimeout(abbruch);
        if(!j || !j.ok){ fertig(null, null); return; }
        fertig(kiHTML(j, text), j.summe);
      })
      .catch(function(){ clearTimeout(abbruch); fertig(null, null); });
  }

  function kiHTML(j, original){
    var quote = j.summe / (j.max||10);
    /* Wenn nichts zu verbessern war, zeigen wir den Text auch nicht
       ein zweites Mal an — sonst sucht die Lernende dort nach einem
       Unterschied, den es gar nicht gibt. */
    var gleich = norm(j.korrigiert||'') === norm(original||'');
    return '<div class="pw-erg '+(quote>=0.6?'gut':'knapp')+'">'
      + '<div class="pw-erg-kopf"><span class="pw-erg-p">'+j.summe+'<em>/'+(j.max||10)+'</em></span>'
      +   '<div><b>'+E(j.lob||'')+'</b><span>Bewertet nach den Kriterien der echten Prüfung</span></div></div>'
      + '<div class="pw-erg-z">'
      +   j.punkte.map(function(p){
            var kl = p.wert>=3 ? 'voll' : (p.wert>0 ? 'halb' : 'null');
            return '<div class="pw-erg-r '+kl+'"><i>'+p.wert+'</i>'
              + '<div><b>'+E(p.was)+'</b><span>'+E(p.warum)+'</span></div></div>'; }).join('')
      +   '<div class="pw-erg-r '+(j.gestaltung.wert>=1?'voll':(j.gestaltung.wert>0?'halb':'null'))+'">'
      +     '<i>'+j.gestaltung.wert+'</i><div><b>Anrede und Gruß</b>'
      +     '<span>'+E(j.gestaltung.warum)+'</span></div></div>'
      + '</div>'
      + (j.sprache ? '<div class="pw-erg-s"><b>Zur Sprache</b><p>'+E(j.sprache)+'</p></div>' : '')
      + (j.korrigiert && !gleich ? '<div class="pw-erg-k"><b>So wäre es richtig</b><p>'
          + E(j.korrigiert).replace(/\n/g,'<br>')+'</p></div>'
        : (gleich && !j.sprache ? '<div class="pw-erg-k gleich"><b>Sprachlich</b>'
          + '<p>An deinem Text gibt es nichts zu verbessern.</p></div>' : ''))
      + (j.tipp ? '<div class="pw-erg-t">👉 '+E(j.tipp)+'</div>' : '')
      + '</div>';
  }

/* ---------- Antworten ---------- */

  window.schreibenWahl = function(k){ werten(k===W.folge[W.i].a.loesung, 1); };

  function werten(korrekt, punkte){
    if(W.offen[W.i]!=null) return;
    if(arguments.length>1 && typeof punkte==='number' && korrekt) W.punkte += punkte;
    W.offen[W.i] = korrekt;
    malen();
  }

  function rueckmeldung(a){
    var richtig = W.offen[W.i]===true;
    var teil = W.offen[W.i]==='teil';
    var letzte = W.i >= W.folge.length-1;
    return '<div class="pl-fb '+(richtig?'gut':'schlecht')+'">'
      + '<div class="pl-fb-kopf"><span>'+(richtig?'🎉':(teil?'👍':'💡'))+'</span>'
      +   '<b>'+(richtig?'Alles richtig!':(teil?'Fast — schau dir die roten Felder an':'Schau nochmal hin'))+'</b></div>'
      + '<p>'+E(a.erklaerung||'')+'</p>'
      + '<button class="pl-weiter" onclick="schreibenWeiter()">'
      +   (letzte ? 'Auswertung ansehen →' : 'Weiter →')+'</button></div>';
  }

  /* Eine Mitteilung zählt entweder mit Amandas Punkten oder mit dem, was
     die Lernende sich selbst gegeben hat. Beides wird hier festgehalten,
     bevor es weitergeht. */
  function mitteilungFesthalten(){
    var e = W.folge[W.i]; if(!e || e.art!=='mitteilung') return;
    if(W.mpunkte[W.i]==null && selbstFertig())
      W.mpunkte[W.i] = selbstPunkte(W.gewaehlt[W.i]||'');
    var p = W.mpunkte[W.i];
    if(p!=null) W.offen[W.i] = p>=6 ? true : (p>0 ? 'teil' : false);
  }

  window.schreibenWeiter = function(){
    /* Bei einer Mitteilung geht es erst weiter, wenn sie bewertet ist —
       entweder von Amanda oder mit den drei eigenen Häkchen. */
    var e0 = W.folge[W.i];
    if(e0 && e0.art==='mitteilung' && W.offen[W.i]!=null
       && !W.ergebnis[W.i] && !selbstFertig()) return;
    mitteilungFesthalten();
    if(W.i < W.folge.length-1){ W.i++; malen(); } else ende();
  };

  /* ---------- Auswertung ---------- */

  function ende(){
    uhrStoppen();
    mitteilungFesthalten();
    /* Mitteilungen ohne jede Bewertung — weder Selbstcheck noch Amanda —
       zählen nicht mit, statt die Runde mit einer Null zu verderben. */
    var offenPunkte = 0, summe = W.punkte;
    W.folge.forEach(function(e,i){
      if(e.art!=='mitteilung') return;
      if(W.mpunkte[i]==null) offenPunkte += 10; else summe += W.mpunkte[i];
    });
    var p = Math.round(summe*10)/10;
    var n = Math.max(0, W.max - offenPunkte);
    var q = n?p/n:0;
    W.ungewertet = offenPunkte;
    merken(W.niveau, W.topf, W.id, offenPunkte ? 0 : p);
    var titel, text;
    if(!n){ titel='Ohne Wertung';
      text='Diese Mitteilung ist noch nicht bewertet. Geh sie nochmal durch, hak die drei '
         + 'Punkte ab oder lass Amanda draufschauen — dann zählt sie mit.'; }
    else if(q>=0.999){ titel='Volle Punktzahl!'; text='Besser geht es nicht.'; }
    else if(q>=0.6){ titel='Bestanden!';
      text='Du hast '+p+' von '+n+' Punkten. Zum Bestehen brauchst du 60 Prozent — geschafft.'; }
    else { titel='Noch nicht ganz';
      text='Du hast '+p+' von '+n+' Punkten. Schau dir die Musterlösungen nochmal an und schreib die Aufgabe gleich nochmal — beim zweiten Mal sitzt der Aufbau.'; }
    if(W.ungewertet && n) text += ' Eine Mitteilung ist noch nicht bewertet und zählt hier nicht mit.';

    var wieder = W.modus==='block' ? "schreibenBlock('"+W.id+"')"
               : W.modus==='lauf'  ? "schreibenLauf('"+W.id+"')"
               : "schreibenRunde("+W.topf+",'"+W.id+"')";

    document.getElementById('pwBody').innerHTML = '<div class="pl-ende">'
      + '<div class="pl-ende-ring '+(n&&q>=0.6?'gut':'knapp')+'" style="--p:'+Math.round(q*100)+'">'
      +   '<i><b>'+(n?p:'—')+'</b><span>'+(n?'von '+n:'ohne Wertung')+'</span></i></div>'
      + '<h3>'+titel+'</h3><p>'+text+'</p>'
      + '<div class="pl-ende-k">'
      +   '<button class="pl-b1 haupt" onclick="'+wieder+'">Noch einmal</button>'
      +   '<button class="pl-b2" onclick="schreibenStart(\''+W.niveau+'\')">Zur Übersicht</button>'
      + '</div></div>';
    document.getElementById('pwKopf').innerHTML = '<div class="pl-kopf">'
      + '<button class="pl-zu" onclick="schreibenSchliessen()" aria-label="Schließen">✕</button>'
      + '<div class="pl-kopf-m"><b>'+E(W.titel)+'</b><span>Auswertung</span></div></div>';
  }

  /* ---------- Uhr ---------- */

  function uhrStarten(min){
    W.uhrEnde = Date.now() + min*60000;
    W.uhrId = setInterval(function(){
      var el = document.getElementById('pwUhr'); if(!el) return;
      var rest = W.uhrEnde - Date.now();
      el.textContent = zeit(rest);
      if(rest < 120000) el.classList.add('knapp');
      if(rest <= 0){ uhrStoppen(); ende(); }
    }, 1000);
  }
  function uhrStoppen(){ if(W && W.uhrId){ clearInterval(W.uhrId); W.uhrId=null; } }

  /* ---------- Mischen ---------- */

  function mischen(n){
    var a=[]; for(var i=0;i<n;i++) a.push(i);
    for(var j=a.length-1;j>0;j--){ var k=Math.floor(Math.random()*(j+1)); var t=a[j]; a[j]=a[k]; a[k]=t; }
    return a;
  }

  /* ---------- Einstiege ---------- */

  function starten(o){
    W = { niveau:o.niveau, daten:o.daten, modus:o.modus, topf:o.topf, id:o.id,
          titel:o.titel, unter:o.unter, folge:o.folge, i:0, punkte:0, max:o.max,
          offen:new Array(o.folge.length), gewaehlt:new Array(o.folge.length),
          ergebnis:new Array(o.folge.length),
          selbst:new Array(o.folge.length),   /* eigene Einschätzung je Mitteilung */
          mpunkte:new Array(o.folge.length),  /* die Punkte, die am Ende zählen */
          kifehler:new Array(o.folge.length), /* Amanda war nicht erreichbar */
          laedt:new Array(o.folge.length),    /* wartet gerade auf Amanda */
          mix:o.folge.map(function(e){
            return e.art==='ordnen' ? mischen(e.a.teile.length) : null; }) };
    laeuft = false;
    malen();
  }

  window.schreibenBlock = function(id){
    var niveau = W ? W.niveau : 'A1', d = datenVon(niveau); if(!d) return;
    var b = blockVon(d,id); if(!b) return;
    oeffnen();
    starten({ niveau:niveau, daten:d, modus:'block', topf:'b', id:id,
      titel:'Stufe '+b.stufe+' — '+b.titel, unter:b.kurz,
      folge:b.aufgaben.map(function(a){ return { a:a, art:a.art }; }),
      max:b.aufgaben.length });
  };

  window.schreibenRunde = function(teilNr, rundeId){
    var niveau = W ? W.niveau : 'A1', d = datenVon(niveau); if(!d) return;
    var t = teilVon(d, teilNr); if(!t) return;
    var r = null; t.runden.forEach(function(x){ if(x.id===rundeId) r=x; });
    if(!r) return;
    oeffnen();
    var folge = t.art==='formular'
      ? [{ a:r, art:'formular' }]
      : r.aufgaben.map(function(a){ return { a:a, art:'mitteilung' }; });
    starten({ niveau:niveau, daten:d, modus:'runde', topf:teilNr, id:rundeId,
      titel:'Teil '+t.nr+' — '+t.name,
      unter:'Runde '+(t.runden.indexOf(r)+1)+' von '+t.runden.length,
      folge:folge, max:maxVon(t,r) });
  };

  window.schreibenLauf = function(id){
    var niveau = W ? W.niveau : 'A1', d = datenVon(niveau); if(!d) return;
    var Lf = laufVon(d,id); if(!Lf) return;
    oeffnen();
    /* A1: ein Formular, dann eine Mitteilung. Ab B1: mehrere Schreibaufgaben. */
    var folge = [];
    if(Lf.aufgaben){
      Lf.aufgaben.forEach(function(a){ folge.push({ a:a, art:'mitteilung' }); });
    } else {
      var t1 = teilVon(d,1);
      var form = Lf.formular || (t1 && t1.runden[Math.floor(Math.random()*t1.runden.length)]);
      if(form) folge.push({ a:form, art:'formular' });
      folge.push({ a:Lf.aufgabe, art:'mitteilung' });
    }
    starten({ niveau:niveau, daten:d, modus:'lauf', topf:'l', id:id,
      titel:Lf.titel,
      unter:(Lf.aufgaben ? Lf.aufgaben.length+' Schreibaufgaben' : 'Formular und Mitteilung')
        +' · '+(Lf.minuten||d.minuten)+' Minuten',
      folge:folge, max:laufMax(Lf) });
    uhrStarten(Lf.minuten || d.minuten);
    kopfMalen();
  };

  /* ---------- Übersicht ---------- */

  window.schreibenStart = function(niveau){
    var d = datenVon(niveau); if(!d) return;
    uhrStoppen(); oeffnen();
    W = { niveau:niveau, daten:d, modus:'plan', titel:'Schreiben — '+d.pruefung,
          unter:d.punkte+' Punkte in der Prüfung · circa '+d.minuten+' Minuten' };

    var gesamt = window.schreibenProzent(niveau);
    var naechst = window.schreibenNaechstes(niveau);

    var h = '<div class="pl-intro"><h2>Dein Weg zum Schreiben-Teil</h2>'
      + '<p>Schreiben ist der Teil, in dem es keine eine richtige Antwort gibt — und trotzdem klare Punkte. '
      + 'Fünf für das Formular, zehn für die Mitteilung. Wir bauen es in vier Stufen auf: '
      + 'erst die Wörter im Formular, dann die Bausteine einer Nachricht, dann die zwei Aufgaben, '
      + 'zuletzt beides zusammen mit Uhr.</p></div>';

    if(naechst){
      h += '<button class="pl-dran" onclick="'+naechst.klick+'">'
        + '<span class="pl-dran-z">👉</span>'
        + '<span class="pl-dran-t"><span>Hier weitermachen</span><b>'+E(naechst.was)+'</b></span>'
        + '<span class="pl-dran-g">Los →</span></button>';
    } else {
      h += '<div class="pl-fertig">🏆 Du hast alles einmal geschafft. '
        + 'Schreib die Mitteilungen ruhig nochmal — jedes Mal wird der Aufbau schneller.</div>';
    }

    d.stufen.forEach(function(st){
      var inhalt = '';
      if(st.nr===1 || st.nr===2){
        inhalt = '<div class="pl-karten">' + d.bloecke.filter(function(b){ return b.stufe===st.nr; })
          .map(function(b){
            var s = blockStand(niveau,b);
            return '<button class="pl-karte pl-f-'+E(b.farbe)+(s.punkte>=s.max?' voll':'')
              + '" onclick="schreibenBlock(\''+b.id+'\')">'
              + '<span class="pl-karte-z">'+b.zeichen+'</span>'
              + '<span class="pl-karte-t"><b>'+E(b.titel)+'</b><span>'+E(b.kurz)+'</span></span>'
              + '<span class="pl-karte-p">'+(s.gemacht ? s.punkte+'/'+s.max : b.aufgaben.length+' Aufgaben')+'</span>'
              + '<span class="pl-karte-bar"><i style="width:'+Math.max(2,s.prozent)+'%"></i></span>'
              + '<span class="pl-karte-ziel">'+E(b.ziel)+'</span></button>';
          }).join('') + '</div>';
      } else if(st.nr===3){
        inhalt = d.teile.map(function(t){
          var s = teilStand(niveau,t);
          var runden = t.runden.map(function(r,k){
            var p = holen(niveau,t.nr,r.id), mx = maxVon(t,r);
            var kl = p==null ? '' : (p>=zielVon(t,r) ? ' voll' : ' teil');
            return '<button class="pl-r'+kl+'" onclick="schreibenRunde('+t.nr+',\''+r.id+'\')">'
              + '<b>'+(k+1)+'</b><span>'+(p==null?'neu':p+'/'+mx)+'</span></button>';
          }).join('');
          return '<section class="pl-teil pl-f-'+E(t.farbe)+'">'
            + '<div class="pl-teil-kopf"><span class="pl-teil-z">'+t.zeichen+'</span>'
            +   '<div class="pl-teil-m"><span>Teil '+t.nr+' · '+t.punkte+' Punkte</span><b>'+E(t.name)+'</b></div>'
            +   '<span class="pl-teil-p">'+s.prozent+' %</span></div>'
            + '<p class="pl-teil-was">'+E(t.was)+'</p>'
            + '<div class="pl-tipp"><span>Tipp</span><p>'+E(t.tipp)+'</p></div>'
            + '<div class="pl-runden">'+runden+'</div></section>';
        }).join('');
      } else {
        inhalt = '<div class="pl-karten">' + d.laeufe.map(function(Lf){
          var s = laufStand(niveau,Lf);
          return '<button class="pl-karte pl-f-dunkel'+(s.geschafft?' voll':'')
            + '" onclick="schreibenLauf(\''+Lf.id+'\')">'
            + '<span class="pl-karte-z">⏱️</span>'
            + '<span class="pl-karte-t"><b>'+E(Lf.titel)+'</b>'
            +   '<span>Formular und Mitteilung · '+(Lf.minuten||d.minuten)+' Minuten</span></span>'
            + '<span class="pl-karte-p">'+(s.gemacht ? s.punkte+'/'+s.max : 'noch offen')+'</span>'
            + '<span class="pl-karte-bar"><i style="width:'+Math.max(2,s.prozent)+'%"></i></span>'
            + '<span class="pl-karte-ziel">Beides hintereinander, die Uhr läuft mit. '
            +   'Genau die 20 Minuten, die du am Prüfungstag hast.</span></button>';
        }).join('') + '</div>';
      }
      h += '<section class="pl-stufe"><div class="pl-stufe-kopf">'
        + '<span class="pl-stufe-n">'+st.nr+'</span>'
        + '<div><b>'+st.zeichen+' '+E(st.titel)+'</b><p>'+E(st.was)+'</p></div></div>'
        + inhalt + '</section>';
    });

    document.getElementById('pwKopf').innerHTML = '<div class="pl-kopf">'
      + '<button class="pl-zu" onclick="schreibenSchliessen()" aria-label="Schließen">✕</button>'
      + '<div class="pl-kopf-m"><b>'+E(W.titel)+'</b><span>'+E(W.unter)+'</span></div>'
      + '<span class="pl-kopf-p">'+gesamt+' %</span></div>';
    document.getElementById('pwBody').innerHTML = h;
  };

  /* ---------- Overlay ---------- */

  function oeffnen(){
    if(window.trainerStil) window.trainerStil();
    stil();
    var o = document.getElementById('pwOv');
    if(!o){
      o = document.createElement('div'); o.id='pwOv';
      o.innerHTML = '<div id="pwKopf"></div><div id="pwBody"></div>';
      document.body.appendChild(o);
    }
    o.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  window.schreibenSchliessen = function(){
    uhrStoppen();
    var o = document.getElementById('pwOv');
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
      var o = document.getElementById('pwOv');
      if(o && o.style.display==='block') window.schreibenSchliessen();
    }
  });

  /* ---------- Aussehen ---------- */

  var gestylt = false;
  function stil(){
    if(gestylt) return; gestylt = true;
    var s = document.createElement('style'); s.textContent = CSS; document.head.appendChild(s);
    /* Handschrift für die Zettel-Fläche. Fehlt die Verbindung, greift die
       Ersatzschrift aus der font-family. */
    if(!document.getElementById('plSchrift')){
      var l = document.createElement('link');
      l.id = 'plSchrift'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&display=swap';
      document.head.appendChild(l);
    }
  }

  var CSS = [
'#pwOv{ display:none; position:fixed; inset:0; z-index:9000; overflow:auto;',
'  background:radial-gradient(1100px 620px at 12% -8%, #E4F7FA 0%, transparent 62%),',
'    radial-gradient(900px 520px at 92% 4%, #FFF1C9 0%, transparent 58%),',
'    radial-gradient(760px 520px at 50% 108%, #FBE3E3 0%, transparent 60%), #FFF7E6;',
'  font-family:Inter,system-ui,sans-serif; color:#1A1A1A }',
'#pwBody{ max-width:880px; margin:0 auto; padding:22px 22px 90px }',
'#pwOv button{ font-family:inherit }',
'#pwOv .pl-kopf{ max-width:880px }',

'.pw-sit{ background:#fff; border:1.5px solid #EEE7D8; border-left:5px solid #35AFD0;',
'  border-radius:16px; padding:15px 18px; margin-bottom:14px }',
'.pw-sit span{ display:block; font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#0F5468; margin-bottom:5px }',
'.pw-sit p{ font-size:16.5px; line-height:1.5; margin:0; font-weight:600 }',

'.pw-quelle{ background:#FFFCF5; border:1.5px dashed #E0C97A; border-radius:16px;',
'  padding:15px 18px; margin-bottom:16px }',
'.pw-quelle-t{ display:block; font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#8A5C00; margin-bottom:6px }',
'.pw-quelle p{ font-size:15.5px; line-height:1.7; margin:0 }',

'.pw-form{ background:#fff; border:2.5px solid #28353B; border-radius:14px;',
'  padding:18px 20px; margin-bottom:16px; box-shadow:0 12px 28px -20px rgba(40,53,59,.7) }',
'.pw-form-t{ display:block; font-family:"Space Grotesk",sans-serif; font-size:17px;',
'  font-weight:800; text-align:center; padding-bottom:11px; margin-bottom:13px;',
'  border-bottom:2px solid #28353B }',
'.pw-form-z{ display:grid; gap:9px }',
'.pw-fz{ display:grid; grid-template-columns:170px 1fr; gap:12px; align-items:center }',
'.pw-fz-f{ font-size:13.5px; font-weight:700; color:#5B6A70 }',
'.pw-fz-w{ font-size:15.5px; font-weight:600 }',
'.pw-fz-w.fest{ color:#8A97A0 }',
'.pw-fz-i{ font-family:inherit; font-size:15.5px; font-weight:700; padding:9px 12px;',
'  border:2px solid #E0C97A; border-radius:10px; background:#FFFCF5; width:100%; color:#1A1A1A }',
'.pw-fz-i:focus{ outline:none; border-color:#28353B; background:#fff }',
'.pw-fz-i.gut{ border-color:#16A34A; background:#E8F8EE; color:#14532D }',
'.pw-fz-i.schlecht{ border-color:#D83636; background:#FDEAEA; color:#9B2320 }',
'.pw-fz-i[disabled]{ opacity:1 }',
'.pw-fz-l{ grid-column:2; font-size:12.5px; font-weight:700; color:#16A34A; margin-top:-3px }',
'@media(max-width:600px){ .pw-fz{ grid-template-columns:1fr; gap:4px }',
'  .pw-fz-l{ grid-column:1 } }',

'.pw-punkte{ background:#fff; border:1.5px solid #EEE7D8; border-radius:16px;',
'  padding:15px 18px; margin-bottom:14px }',
'.pw-punkte-t{ display:block; font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#9B2320; margin-bottom:10px }',
'.pw-pk{ display:flex; gap:11px; align-items:flex-start; margin-bottom:9px }',
'.pw-pk:last-child{ margin-bottom:0 }',
'.pw-pk i{ flex:none; width:24px; height:24px; border-radius:8px; background:#FDEAEA;',
'  color:#9B2320; display:grid; place-items:center; font-style:normal;',
'  font-family:"Space Grotesk",sans-serif; font-weight:800; font-size:13px }',
'.pw-pk b{ display:block; font-size:15px; font-weight:800 }',
'.pw-pk span{ display:block; font-size:13px; color:#5B6A70; margin-top:1px }',

/* ---- Situation mit Motiv ---- */
'.pw-sit{ display:flex; gap:13px; align-items:flex-start }',
'.pw-sit-b{ position:relative; flex:0 0 auto; width:52px; height:52px; border-radius:16px;',
'  overflow:hidden; background:#E4F7FA; border:1.5px solid #CDEAF1; display:grid;',
'  place-items:center }',
'.pw-sit-b img{ width:100%; height:100%; object-fit:cover; display:block }',
'.pw-sit-b em{ display:none; font-style:normal; font-size:25px; line-height:1 }',
'.pw-sit-b.leer em{ display:block }',
'.pw-sit-tx{ min-width:0 }',

/* ---- Der Text als Notizzettel mit Klammer ---- */
'.pw-quelle{ position:relative; transform:rotate(-.4deg) }',
'.pw-klammer{ position:absolute; right:16px; top:-13px; font-size:24px; line-height:1;',
'  transform:rotate(14deg); filter:drop-shadow(0 3px 4px rgba(40,53,59,.3)) }',

/* ---- Formular als Blatt Papier ---- */
'.pw-blatt{ position:relative; background:#fff; border:1px solid #D8DEE2; border-radius:6px;',
'  padding:0 26px 22px 42px; margin-bottom:14px;',
'  box-shadow:0 20px 40px -26px rgba(40,53,59,.75), 0 1px 0 #EDF1F3 inset }',
'.pw-loch{ position:absolute; left:24px; top:104px; bottom:26px; width:1px;',
'  background:#F0C9C9 }',
'.pw-amt{ display:flex; align-items:center; gap:13px; margin:0 -26px 18px -42px;',
'  padding:15px 24px 15px 42px; background:#F4F7F9; border-bottom:2.5px solid #28353B;',
'  border-radius:5px 5px 0 0 }',
'.pw-amt-z{ flex:none; width:36px; height:36px }',
'.pw-amt-tx b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:16px;',
'  font-weight:800; line-height:1.3 }',
'.pw-amt-tx span{ display:block; font-size:10.5px; font-weight:800; letter-spacing:.11em;',
'  text-transform:uppercase; color:#7C8C95; margin-top:3px }',
'.pw-fz{ grid-template-columns:190px 1fr; align-items:center; padding:5px 0;',
'  border-bottom:1px dotted #DDE4E8 }',
'.pw-fz:last-child{ border-bottom:0 }',
'.pw-fz-f{ display:flex; align-items:center; gap:8px; font-size:13px; font-weight:700;',
'  color:#5B6A70 }',
'.pw-fz-n{ flex:none; width:19px; height:19px; border-radius:5px; background:#EDF2F5;',
'  color:#7C8C95; font-style:normal; font-size:10.5px; font-weight:800;',
'  display:grid; place-items:center }',
'.pw-fz-w.fest{ font-family:"Courier New",monospace; font-size:15px; font-weight:700;',
'  color:#46707F; letter-spacing:.02em }',
'.pw-fz-i{ border-radius:3px !important; border:1.5px solid #B9C6CD !important;',
'  background:#FCFDFE !important; padding:8px 11px !important }',
'.pw-fz-i::placeholder{ color:#B9C6CD; font-weight:600; letter-spacing:.04em }',
'.pw-fz-i:focus{ border-color:#35AFD0 !important; background:#fff !important;',
'  box-shadow:0 0 0 3px rgba(53,175,208,.16) }',
'.pw-unter{ display:flex; align-items:flex-end; justify-content:space-between;',
'  gap:20px; margin-top:22px; padding-top:6px }',
'.pw-unter-l{ flex:1; max-width:300px; border-top:1.5px solid #28353B; padding-top:5px;',
'  font-size:11px; font-weight:800; letter-spacing:.08em; text-transform:uppercase;',
'  color:#7C8C95 }',
'.pw-stempel{ flex:none; width:74px; height:74px; opacity:.5;',
'  transform:rotate(-13deg); margin-bottom:-6px }',
'@media(max-width:600px){ .pw-blatt{ padding-left:20px }',
'  .pw-loch{ display:none } .pw-amt{ margin-left:-20px; padding-left:20px }',
'  .pw-stempel{ width:56px; height:56px } }',

/* ---- Die drei Punkte als Klebezettel ---- */
'.pw-pk-r{ display:grid; gap:11px; align-items:start }',
'@media(min-width:660px){ .pw-pk-r{ grid-template-columns:repeat(3,1fr) } }',
'.pw-pk{ display:block; position:relative; background:#FFF3C4; border-radius:3px;',
'  padding:14px 14px 15px; margin:0;',
'  box-shadow:0 10px 20px -14px rgba(40,53,59,.7) }',
'.pw-pk:nth-child(1){ transform:rotate(-1.1deg) }',
'.pw-pk:nth-child(2){ transform:rotate(.7deg); background:#FFECB3 }',
'.pw-pk:nth-child(3){ transform:rotate(-.5deg) }',
'.pw-pk i{ display:grid; width:22px; height:22px; border-radius:50%; background:#28353B;',
'  color:#FFF3C4; font-style:normal; font-size:12px; font-weight:800;',
'  place-items:center; margin-bottom:8px }',
'.pw-pk b{ font-size:15.5px; color:#3A2E00 }',
'.pw-pk span{ color:#6B5714 !important }',

/* ---- Schreibfläche im jeweiligen Medium ---- */
'.pw-medium{ margin-bottom:12px }',
'.pw-m-email{ background:#fff; border:1px solid #D8DEE2; border-radius:12px;',
'  overflow:hidden; box-shadow:0 18px 38px -26px rgba(40,53,59,.7) }',
'.pw-mail-bar{ display:flex; align-items:center; gap:7px; padding:11px 15px;',
'  background:#EEF3F6; border-bottom:1px solid #DEE5E9 }',
'.pw-mail-bar i{ width:11px; height:11px; border-radius:50%; background:#CBD5DA }',
'.pw-mail-bar i:first-child{ background:#E88A82 }',
'.pw-mail-bar i:nth-child(2){ background:#EFC66B }',
'.pw-mail-bar i:nth-child(3){ background:#8FCF9B }',
'.pw-mail-bar span{ margin-left:8px; font-size:12px; font-weight:800;',
'  letter-spacing:.06em; text-transform:uppercase; color:#7C8C95 }',
'.pw-mail-kopf{ padding:2px 17px }',
'.pw-mail-kopf div{ display:flex; align-items:baseline; gap:12px; padding:9px 0;',
'  border-bottom:1px solid #EDF1F3 }',
'.pw-mail-kopf span{ flex:none; width:78px; font-size:11.5px; font-weight:800;',
'  letter-spacing:.09em; text-transform:uppercase; color:#9BAAB2 }',
'.pw-mail-kopf b{ font-size:15px; font-weight:700 }',
'.pw-m-email .pw-ta{ padding:15px 17px 0 }',
'.pw-m-email .pw-fuss{ margin:0 17px; padding:12px 0 14px }',

'.pw-m-sms{ background:#28353B; border-radius:26px; padding:8px;',
'  box-shadow:0 22px 44px -26px rgba(40,53,59,.85) }',
'.pw-tel-kopf{ display:flex; align-items:center; gap:11px; padding:11px 14px 13px }',
'.pw-tel-av{ width:34px; height:34px; border-radius:50%; background:#35AFD0;',
'  color:#062A33; font-size:15px; font-weight:800; display:grid; place-items:center }',
'.pw-tel-kopf b{ color:#fff; font-size:15px; font-weight:700 }',
'.pw-tel-raum{ background:#fff; border-radius:20px; padding:16px 14px 6px;',
'  min-height:190px; display:flex; flex-direction:column;',
'  justify-content:flex-end }',
'.pw-m-sms .pw-ta{ background:#CFEDF5; border:1px solid #A6DAE7;',
'  border-radius:18px 18px 5px 18px; padding:13px 15px; min-height:120px;',
'  font-size:16px; margin-left:auto; width:88%; box-shadow:0 5px 14px -10px rgba(40,53,59,.7) }',
'.pw-m-sms .pw-fuss{ border-top:0; margin:2px 6px 4px; padding-top:6px }',
'.pw-m-sms .pw-ring-l, .pw-m-sms .pw-formcheck{ color:#DCEAEF }',

'.pw-m-zettel{ background:#fff; border:1px solid #E3E9EC; border-radius:4px;',
'  padding:16px 20px 14px; transform:rotate(-.3deg);',
'  box-shadow:0 18px 36px -24px rgba(40,53,59,.75) }',
'.pw-zet-an{ font-size:13px; color:#7C8C95; font-weight:700; margin-bottom:10px;',
'  padding-bottom:9px; border-bottom:1px solid #EDF1F3 }',
'.pw-m-zettel .pw-ta{ font-family:"Caveat","Bradley Hand",cursive; font-size:23px;',
'  line-height:31px; color:#22384A;',
'  background-image:repeating-linear-gradient(#fff 0 30px,#E7F0F4 30px 31px) }',

/* ---- Wörterzähler als Ring ---- */
'.pw-ring{ position:relative; flex:none; width:44px; height:44px; display:grid;',
'  place-items:center }',
'.pw-ring svg{ position:absolute; inset:0; width:44px; height:44px;',
'  transform:rotate(-90deg) }',
'.pw-ring-b{ fill:none; stroke:#EDF1F3; stroke-width:4 }',
'.pw-ring-v{ fill:none; stroke:#9BAAB2; stroke-width:4; stroke-linecap:round;',
'  transition:stroke-dashoffset .25s, stroke .25s }',
'.pw-ring b{ font-size:14px; font-weight:800; color:#5B6A70; z-index:1 }',
'.pw-ring.fast .pw-ring-v{ stroke:#E39A00 }',
'.pw-ring.fast b{ color:#B37A00 }',
'.pw-ring.gut .pw-ring-v{ stroke:#16A34A }',
'.pw-ring.gut b{ color:#14803C }',
'.pw-ring-l{ font-size:12.5px; font-weight:800; color:#8A97A0; line-height:1.35 }',
'.pw-ring-l em{ display:block; font-style:normal; font-size:11px; font-weight:600;',
'  color:#A8B4BB }',
'.pw-m-sms .pw-ring-b{ stroke:#4A5B63 }',

'.pw-schreib{ background:#fff; border:1.5px solid #EEE7D8; border-radius:18px;',
'  padding:15px 17px; margin-bottom:12px }',
'.pw-an{ font-size:13px; color:#5B6A70; margin-bottom:9px; padding-bottom:9px;',
'  border-bottom:1px solid #EEE7D8 }',
'.pw-ta{ width:100%; border:0; outline:none; resize:vertical; font-family:inherit;',
'  font-size:16.5px; line-height:1.75; color:#1A1A1A; background:none; min-height:150px }',
'.pw-fuss{ display:flex; align-items:center; gap:14px; flex-wrap:wrap; margin-top:10px;',
'  padding-top:10px; border-top:1px solid #EEE7D8 }',
'.pw-zaehler{ font-size:13px; font-weight:800; color:#8A97A0 }',
'.pw-zaehler.fast{ color:#E39A00 }',
'.pw-zaehler.gut{ color:#16A34A }',
'.pw-formcheck{ display:flex; gap:12px; font-size:13px; font-weight:700 }',
'.pw-formcheck .ja{ color:#16A34A }',
'.pw-formcheck .nein{ color:#8A97A0 }',

'.pw-hilfen{ background:#FFF7E6; border:1.5px dashed #F0DFB0; border-radius:14px;',
'  padding:12px 14px; margin-bottom:14px }',
'.pw-hilfen span{ display:block; font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#8A5C00; margin-bottom:7px }',
'.pw-hilfe{ display:inline-block; font-family:inherit; font-size:14px; font-weight:600;',
'  color:#5A3E00; background:#fff; border:1.5px solid #F0DFB0; border-radius:9px;',
'  padding:6px 12px; margin:0 6px 6px 0; cursor:pointer; transition:.14s }',
'.pw-hilfe:hover{ background:#FFCE00; border-color:#E0B400; transform:translateY(-1px) }',
'.pw-hilfe:active{ transform:translateY(0) }',

'.pw-deins{ background:#fff; border:1.5px solid #EEE7D8; border-radius:16px;',
'  padding:15px 18px; margin-bottom:14px }',
'.pw-deins-t{ display:block; font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#8A97A0; margin-bottom:7px }',
'.pw-deins p{ font-size:16px; line-height:1.7; margin:0 }',
'.pw-muster{ background:#E8F8EE; border:1.5px solid #BFE6CD; border-radius:16px;',
'  padding:15px 18px; margin-bottom:14px }',
'.pw-muster-t{ display:block; font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#14532D; margin-bottom:7px }',
'.pw-muster p{ font-size:16px; line-height:1.7; margin:0; color:#14532D }',

'.pw-erg{ border-radius:18px; padding:17px 19px; margin-bottom:14px; border:1.5px solid }',
'.pw-erg.gut{ background:#E8F8EE; border-color:#BFE6CD }',
'.pw-erg.knapp{ background:#FFF7E6; border-color:#F0DFB0 }',
'.pw-erg-kopf{ display:flex; align-items:center; gap:14px; margin-bottom:14px }',
'.pw-erg-p{ flex:none; font-family:"Space Grotesk",sans-serif; font-size:30px; font-weight:800;',
'  background:#fff; border-radius:14px; padding:9px 16px; line-height:1 }',
'.pw-erg-p em{ font-style:normal; font-size:15px; color:#8A97A0 }',
'.pw-erg-kopf b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:17px; font-weight:800 }',
'.pw-erg-kopf span{ display:block; font-size:12.5px; color:#5B6A70; margin-top:2px }',
'.pw-erg-z{ display:grid; gap:8px; margin-bottom:12px }',
'.pw-erg-r{ display:flex; gap:11px; align-items:flex-start; background:#fff;',
'  border-radius:12px; padding:10px 13px }',
'.pw-erg-r i{ flex:none; width:28px; height:28px; border-radius:9px; display:grid;',
'  place-items:center; font-style:normal; font-family:"Space Grotesk",sans-serif;',
'  font-weight:800; font-size:13px }',
'.pw-erg-r.voll i{ background:#16A34A; color:#fff }',
'.pw-erg-r.halb i{ background:#FFCE00; color:#5A3E00 }',
'.pw-erg-r.null i{ background:#D83636; color:#fff }',
'.pw-erg-r b{ display:block; font-size:14.5px; font-weight:800 }',
'.pw-erg-r span{ display:block; font-size:13px; color:#5B6A70; line-height:1.5; margin-top:2px }',
'.pw-erg-s, .pw-erg-k{ background:#fff; border-radius:12px; padding:11px 14px; margin-bottom:9px }',
'.pw-erg-s b, .pw-erg-k b{ display:block; font-size:11px; font-weight:800; letter-spacing:.11em;',
'  text-transform:uppercase; color:#8A97A0; margin-bottom:5px }',
'.pw-erg-s p, .pw-erg-k p{ font-size:14.5px; line-height:1.6; margin:0 }',
'.pw-erg-t{ font-size:14px; font-weight:700; color:#5B6A70 }',

'.pw-ordnen{ display:grid; gap:15px }',
'.pw-ord-block{ display:grid; gap:7px }',
'.pw-ord-t{ font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#8A7A55; padding-left:3px }',
'.pw-ord-ziel{ display:grid; gap:7px; min-height:62px; background:#fff;',
'  border:2px dashed #DFD3BE; border-radius:16px; padding:12px; align-content:start }',
'.pw-ord-leer{ font-size:13.5px; color:#8A97A0; text-align:center; padding:10px 8px }',
'.pw-ord-z{ display:flex; align-items:center; gap:11px; background:#EAF8FB;',
'  border:1.5px solid #B9E6F0; border-left:5px solid #35AFD0;',
'  border-radius:11px; padding:10px 14px; font-size:15px; font-weight:600; color:#123C46 }',
'.pw-ord-z>i{ flex:none; width:22px; height:22px; border-radius:50%; background:#35AFD0;',
'  color:#fff; font-style:normal; font-size:12px; font-weight:800;',
'  display:grid; place-items:center }',
'.pw-ord-z.gut{ background:#E8F8EE; border-color:#A7E0BC; border-left-color:#16A34A; color:#14532D }',
'.pw-ord-z.gut>i{ background:#16A34A }',
'.pw-ord-z.schlecht{ background:#FDEAEA; border-color:#F3C2C2; border-left-color:#D83636; color:#9B2320 }',
'.pw-ord-z.schlecht>i{ background:#D83636 }',
'.pw-ord-bank{ display:grid; gap:8px }',
'.pw-ord-b{ display:block; width:100%; text-align:left; background:#fff;',
'  border:2px solid #EEE7D8; border-radius:12px; padding:11px 15px; cursor:pointer;',
'  font-size:15px; font-weight:600; transition:.14s;',
'  box-shadow:0 2px 0 rgba(40,53,59,.07) }',
'.pw-ord-b:hover{ transform:translateY(-2px); border-color:#28353B }',
'.pw-ord-zurueck{ text-align:center }',
'.pw-ord-loes{ background:#fff; border-radius:14px; padding:13px; display:grid; gap:7px }',
'.pw-ord-loes>span:first-child{ font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#14532D; background:none; border:0; padding:0 }',

/* --- Selbstcheck --- */
'.pw-selbst{ background:#fff; border:2px solid #EEE7D8; border-radius:18px;',
'  padding:16px 18px; margin-bottom:12px; transition:.18s }',
'.pw-selbst.fertig{ border-color:#BFE6CD; background:#F4FCF7 }',
'.pw-selbst.dazu{ border-style:dashed; background:#FFFDF8 }',
'.pw-selbst.dazu.fertig{ border-style:solid }',
'.pw-selbst-kopf{ display:flex; align-items:center; gap:14px; margin-bottom:14px }',
'.pw-selbst-p{ flex:none; font-family:"Space Grotesk",sans-serif; font-size:26px; font-weight:800;',
'  background:#FFF7E6; border-radius:14px; padding:9px 15px; line-height:1; color:#28353B }',
'.pw-selbst.fertig .pw-selbst-p{ background:#E8F8EE; color:#14532D }',
'.pw-selbst-p em{ font-style:normal; font-size:14px; color:#8A97A0 }',
'.pw-selbst-kopf b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:16px; font-weight:800 }',
'.pw-selbst-kopf span{ display:block; font-size:12.5px; color:#5B6A70; margin-top:3px; line-height:1.5 }',
'.pw-sr{ border-top:1px solid #F1EADC; padding:11px 0 }',
'.pw-sr>b{ display:block; font-size:14.5px; font-weight:700; margin-bottom:3px }',
'.pw-sh{ display:block; font-size:12.5px; color:#8A97A0; margin-bottom:8px }',
'.pw-sfazit{ border-top:1px solid #F1EADC; margin-top:4px; padding-top:11px;',
'  font-size:14px; line-height:1.6; font-weight:600; color:#14532D }',
'.pw-sw{ display:flex; gap:7px; flex-wrap:wrap }',
'.pw-sb{ display:inline-flex; align-items:center; gap:7px; font-family:inherit;',
'  font-size:13.5px; font-weight:700; color:#5B6A70; background:#fff;',
'  border:1.5px solid #E4DCCB; border-radius:11px; padding:7px 13px;',
'  cursor:pointer; transition:.14s }',
'.pw-sb i{ font-style:normal; font-weight:800; font-size:12px; width:19px; height:19px;',
'  border-radius:50%; display:grid; place-items:center; background:#F1EADC; color:#8A97A0 }',
'.pw-sb:hover{ border-color:#28353B; transform:translateY(-1px) }',
'.pw-sb.w3.an{ background:#E8F8EE; border-color:#16A34A; color:#14532D }',
'.pw-sb.w3.an i{ background:#16A34A; color:#fff }',
'.pw-sb.w15.an{ background:#FFF7E6; border-color:#E0B400; color:#5A3E00 }',
'.pw-sb.w15.an i{ background:#FFCE00; color:#5A3E00 }',
'.pw-sb.w0.an{ background:#FDEAEA; border-color:#D83636; color:#9B2320 }',
'.pw-sb.w0.an i{ background:#D83636; color:#fff }',
'.pw-sr.auto>b{ margin-bottom:6px }',
'.pw-sauto{ display:flex; align-items:center; gap:9px; flex-wrap:wrap }',
'.pw-sauto span{ font-size:13px; font-weight:700; border-radius:9px; padding:5px 11px }',
'.pw-sauto span.ja{ background:#E8F8EE; color:#14532D }',
'.pw-sauto span.nein{ background:#F4F1EA; color:#8A97A0 }',
'.pw-sauto em{ font-style:normal; font-size:13px; font-weight:800; color:#5B6A70; margin-left:auto }',

/* --- Amanda --- */
'.pw-amanda{ background:linear-gradient(122deg,#28353B,#3A4E56); border-radius:18px;',
'  padding:16px 18px; margin-bottom:12px; color:#fff }',
'.pw-amanda-t b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:16px;',
'  font-weight:800; margin-bottom:4px }',
'.pw-amanda-t span{ display:block; font-size:13px; line-height:1.55; color:#C7D3D8 }',
'.pw-amanda-b{ margin-top:12px; font-family:inherit; font-size:14.5px; font-weight:800;',
'  color:#28353B; background:#FFCE00; border:0; border-radius:12px; padding:11px 18px;',
'  cursor:pointer; transition:.14s; box-shadow:0 3px 0 #D4A800 }',
'.pw-amanda-b:hover{ transform:translateY(-2px); box-shadow:0 5px 0 #D4A800 }',
'.pw-amanda-b:disabled{ background:#5B6A70; color:#C7D3D8; box-shadow:none;',
'  cursor:default; transform:none }',
'.pw-warten{ display:flex; align-items:center; gap:15px; background:#fff;',
'  border:1.5px solid #EEE7D8; border-radius:18px; padding:17px 19px; margin-bottom:12px }',
'.pw-warten-p{ flex:none; width:26px; height:26px; border-radius:50%;',
'  border:3px solid #E4F7FA; border-top-color:#35AFD0; animation:pwDreh .8s linear infinite }',
'@keyframes pwDreh{ to{ transform:rotate(360deg) } }',
'.pw-warten b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:16px; font-weight:800 }',
'.pw-warten span{ display:block; font-size:13px; color:#5B6A70; margin-top:3px; line-height:1.5 }',
'.pl-weiter.aus{ background:#E4DCCB; color:#8A97A0; box-shadow:none; cursor:default }',

'@media(max-width:600px){ #pwBody{ padding:16px 14px 80px }',
'  .pw-sw{ display:grid; grid-template-columns:1fr 1fr 1fr; gap:6px }',
'  .pw-sb{ justify-content:center; padding:8px 6px; font-size:12.5px } }'
].join('\n');

})();
