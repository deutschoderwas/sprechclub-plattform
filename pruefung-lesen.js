/* ============================================================
   deutschoderwas club — LESETRAINING

   Der erste echte Übungsteil in der Prüfungsvorbereitung.
   Öffnet sich als Vollbild über der Prüfungsseite, so wie die
   Runde im Vokabeltrainer.

   Drei Aufgabenformen, eine pro Prüfungsteil:

     rf        zwei Kurztexte + fünf Aussagen richtig/falsch
     anzeigen  eine Situation + zwei Anzeigen, a oder b
     schild    ein Schild + eine Aussage richtig/falsch

   Nach jeder Antwort wird die beweisende Textstelle im Text gelb
   markiert. Das ist der eigentliche Lerninhalt: nicht dass die
   Antwort falsch war, sondern wo im Text sie gestanden hätte.

   Gespeichert wird pro Runde das beste Ergebnis, unter dem
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

  var QUELLEN = { 'A1':'LESEN_A1' };

  function datenVon(niveau){
    var n = QUELLEN[niveau]; return n ? (window[n]||null) : null;
  }
  window.lesenVorhanden = function(niveau){ return !!datenVon(niveau); };

  /* ---------- Fortschritt ----------
     { A1: { '1': { 't1r1': 5, 't1r2': 3 }, '2': {...} } }
     Gespeichert wird immer das beste Ergebnis einer Runde.        */

  function stand(){ return J('pruefLesen', {}) || {}; }

  function rundeMerken(niveau, teilNr, rundeId, punkte){
    var st = stand();
    if(!st[niveau]) st[niveau] = {};
    if(!st[niveau][teilNr]) st[niveau][teilNr] = {};
    var alt = st[niveau][teilNr][rundeId] || 0;
    if(punkte > alt) st[niveau][teilNr][rundeId] = punkte;
    S('pruefLesen', st);
  }

  function teilStand(niveau, teil){
    var st = (stand()[niveau]||{})[teil.nr] || {};
    var max = 0, hat = 0, fertig = 0;
    teil.runden.forEach(function(r){
      max += r.aufgaben.length;
      var p = st[r.id];
      if(p != null){ hat += p; if(p >= r.aufgaben.length) fertig++; }
    });
    return { punkte:hat, max:max, fertig:fertig, runden:teil.runden.length,
             prozent: max ? Math.round(hat/max*100) : 0 };
  }

  function rundeStand(niveau, teilNr, rundeId){
    return ((stand()[niveau]||{})[teilNr]||{})[rundeId];
  }

  /* Für die Prüfungsseite: wie weit ist Lesen insgesamt? */
  window.lesenProzent = function(niveau){
    var d = datenVon(niveau); if(!d) return null;
    var hat = 0, max = 0;
    d.teile.forEach(function(t){ var s = teilStand(niveau, t); hat += s.punkte; max += s.max; });
    return max ? Math.round(hat/max*100) : 0;
  };

  /* ---------- Zustand der laufenden Runde ---------- */

  var L = null;   /* { niveau, daten, teil, runde, i, punkte, offen } */

  /* ---------- Bausteine ---------- */

  /* Markiert die beweisende Stelle im Text. Wird erst nach dem
     Antworten aufgerufen, vorher wäre es die Lösung.             */
  function markiert(zeile, stelle){
    if(!stelle) return E(zeile);
    var i = zeile.indexOf(stelle);
    if(i < 0) return E(zeile);
    return E(zeile.slice(0,i)) + '<mark>' + E(stelle) + '</mark>'
         + E(zeile.slice(i+stelle.length));
  }

  var SORTE_KOPF = {
    email:  { z:'✉️', t:'E-Mail' },
    zettel: { z:'📝', t:'Zettel' },
    sms:    { z:'💬', t:'Nachricht' },
    aushang:{ z:'📌', t:'Aushang' }
  };

  function textKarte(t, stelle){
    var k = SORTE_KOPF[t.sorte] || SORTE_KOPF.zettel;
    return '<div class="pl-text pl-s-'+E(t.sorte)+'">'
      + '<div class="pl-text-kopf"><span class="pl-text-z">'+k.z+'</span>'
      +   '<span class="pl-text-m"><b>'+E(t.von)+'</b>'
      +     '<span>'+E(t.betreff ? t.betreff : k.t)+'</span></span></div>'
      + '<div class="pl-text-k">'
      +   t.zeilen.map(function(z){ return '<span>'+markiert(z, stelle)+'</span>'; }).join('')
      + '</div></div>';
  }

  function anzeigeKarte(a, buchstabe, klasse, klick){
    return '<button type="button" class="pl-anz '+(klasse||'')+'" '
      + (klick ? 'onclick="'+klick+'"' : 'disabled')+'>'
      + '<span class="pl-anz-b">'+buchstabe+'</span>'
      + '<span class="pl-anz-q">'+E(a.quelle)+'</span>'
      + '<span class="pl-anz-z">'
      +   a.zeilen.map(function(z){ return '<span>'+E(z)+'</span>'; }).join('')
      + '</span></button>';
  }

  function schildKarte(a, stelle){
    return '<div class="pl-schild-wrap">'
      + '<span class="pl-schild-ort">'+E(a.ort)+'</span>'
      + '<div class="pl-schild">'
      +   a.zeilen.map(function(z){ return '<span>'+markiert(z, stelle)+'</span>'; }).join('')
      + '</div></div>';
  }

  function fortschritt(){
    var n = L.runde.aufgaben.length;
    var p = [];
    for(var i=0;i<n;i++){
      var kl = 'pl-pk';
      if(L.offen[i] === true)  kl += ' gut';
      if(L.offen[i] === false) kl += ' schlecht';
      if(i === L.i && L.offen[i] == null) kl += ' dran';
      p.push('<span class="'+kl+'"></span>');
    }
    return '<div class="pl-punkte">'+p.join('')+'</div>';
  }

  function kopf(){
    return '<div class="pl-kopf">'
      + '<button class="pl-zu" onclick="lesenSchliessen()" aria-label="Schließen">✕</button>'
      + '<div class="pl-kopf-m"><b>Teil '+L.teil.nr+' — '+E(L.teil.name)+'</b>'
      +   '<span>Aufgabe '+(L.i+1)+' von '+L.runde.aufgaben.length+'</span></div>'
      + fortschritt()
      + '</div>';
  }

  /* ---------- Die drei Aufgabenformen ---------- */

  function malen(){
    var b = document.getElementById('plBody'); if(!b) return;
    var a = L.runde.aufgaben[L.i];
    var beantwortet = L.offen[L.i] != null;
    var h = '';

    if(L.teil.art === 'rf'){
      /* Alle fünf Aussagen gehören zu denselben zwei Texten, deshalb
         stehen die Texte oben und bleiben stehen. */
      var stelle = beantwortet ? a.stelle : null;
      h += '<div class="pl-texte">'
         + L.runde.texte.map(function(t){ return textKarte(t, stelle); }).join('')
         + '</div>';
      h += '<div class="pl-frage"><span class="pl-frage-n">'+(L.i+1)+'</span>'
         + '<p>'+E(a.satz)+'</p></div>';
      h += rfKnoepfe(a, beantwortet);

    } else if(L.teil.art === 'anzeigen'){
      h += '<div class="pl-sit"><span>Ihre Situation</span><p>'+E(a.situation)+'</p></div>';
      h += '<div class="pl-anzeigen">'
         + anzeigeKarte(a.a, 'a', anzKlasse(a,'a',beantwortet), beantwortet?null:'lesenAnz(\'a\')')
         + anzeigeKarte(a.b, 'b', anzKlasse(a,'b',beantwortet), beantwortet?null:'lesenAnz(\'b\')')
         + '</div>';

    } else if(L.teil.art === 'schild'){
      h += schildKarte(a, beantwortet ? a.stelle : null);
      h += '<div class="pl-frage"><span class="pl-frage-n">'+(L.i+1)+'</span>'
         + '<p>'+E(a.satz)+'</p></div>';
      h += rfKnoepfe(a, beantwortet);
    }

    if(beantwortet) h += rueckmeldung(a);
    b.innerHTML = h;
    var k = document.getElementById('plKopf'); if(k) k.innerHTML = kopf();
    try{ b.scrollTop = 0; }catch(e){}
  }

  function rfKnoepfe(a, beantwortet){
    function kl(wert){
      if(!beantwortet) return '';
      if(wert === a.loesung) return ' gut';
      if(wert === L.gewaehlt[L.i]) return ' schlecht';
      return ' blass';
    }
    return '<div class="pl-rf">'
      + '<button class="pl-rf-b'+kl(true)+'" '+(beantwortet?'disabled':'onclick="lesenRF(true)"')+'>'
      +   '<span>✓</span>Richtig</button>'
      + '<button class="pl-rf-b'+kl(false)+'" '+(beantwortet?'disabled':'onclick="lesenRF(false)"')+'>'
      +   '<span>✕</span>Falsch</button>'
      + '</div>';
  }

  function anzKlasse(a, welche, beantwortet){
    if(!beantwortet) return '';
    if(welche === a.loesung) return 'gut';
    if(welche === L.gewaehlt[L.i]) return 'schlecht';
    return 'blass';
  }

  function rueckmeldung(a){
    var richtig = L.offen[L.i] === true;
    var letzte = L.i >= L.runde.aufgaben.length - 1;
    return '<div class="pl-fb '+(richtig?'gut':'schlecht')+'">'
      + '<div class="pl-fb-kopf"><span>'+(richtig?'🎉':'💡')+'</span>'
      +   '<b>'+(richtig?'Richtig!':'Fast — schau nochmal hin')+'</b></div>'
      + '<p>'+E(a.erklaerung)+'</p>'
      + '<button class="pl-weiter" onclick="lesenWeiter()">'
      +   (letzte ? 'Auswertung ansehen →' : 'Weiter →')+'</button>'
      + '</div>';
  }

  /* ---------- Antworten ---------- */

  function werten(korrekt, wahl){
    if(L.offen[L.i] != null) return;
    L.gewaehlt[L.i] = wahl;
    L.offen[L.i] = korrekt;
    if(korrekt) L.punkte++;
    malen();
  }

  window.lesenRF = function(wert){
    var a = L.runde.aufgaben[L.i];
    werten(wert === a.loesung, wert);
  };

  window.lesenAnz = function(wahl){
    var a = L.runde.aufgaben[L.i];
    werten(wahl === a.loesung, wahl);
  };

  window.lesenWeiter = function(){
    if(L.i < L.runde.aufgaben.length - 1){ L.i++; malen(); }
    else ende();
  };

  /* ---------- Auswertung ---------- */

  function ende(){
    rundeMerken(L.niveau, L.teil.nr, L.runde.id, L.punkte);
    var n = L.runde.aufgaben.length, p = L.punkte;
    var quote = p/n;
    var titel, text;
    if(quote === 1){ titel = 'Alles richtig!';
      text = 'Diese Runde sitzt. In der Prüfung wären das '+p+' von '+n+' Punkten.'; }
    else if(quote >= 0.6){ titel = 'Bestanden!';
      text = 'Du hast '+p+' von '+n+' Punkten. Zum Bestehen brauchst du 60 Prozent — das hast du geschafft.'; }
    else { titel = 'Noch nicht ganz';
      text = 'Du hast '+p+' von '+n+' Punkten. Für die Prüfung brauchst du 60 Prozent. Mach die Runde nochmal — beim zweiten Mal siehst du die Stellen schneller.'; }

    var naechste = null;
    for(var i=0;i<L.teil.runden.length;i++){
      if(L.teil.runden[i].id === L.runde.id && L.teil.runden[i+1]) naechste = L.teil.runden[i+1];
    }

    var b = document.getElementById('plBody');
    b.innerHTML = '<div class="pl-ende">'
      + '<div class="pl-ende-ring '+(quote>=0.6?'gut':'knapp')+'" style="--p:'+Math.round(quote*100)+'">'
      +   '<i><b>'+p+'</b><span>von '+n+'</span></i></div>'
      + '<h3>'+titel+'</h3><p>'+text+'</p>'
      + '<div class="pl-ende-k">'
      +   '<button class="pl-b1" onclick="lesenRunde('+L.teil.nr+',\''+L.runde.id+'\')">Runde wiederholen</button>'
      +   (naechste ? '<button class="pl-b1 haupt" onclick="lesenRunde('+L.teil.nr+',\''+naechste.id+'\')">Nächste Runde →</button>' : '')
      +   '<button class="pl-b2" onclick="lesenStart(\''+L.niveau+'\')">Zur Übersicht</button>'
      + '</div></div>';
    var k = document.getElementById('plKopf');
    if(k) k.innerHTML = '<div class="pl-kopf">'
      + '<button class="pl-zu" onclick="lesenSchliessen()" aria-label="Schließen">✕</button>'
      + '<div class="pl-kopf-m"><b>Teil '+L.teil.nr+' — '+E(L.teil.name)+'</b>'
      + '<span>Auswertung</span></div></div>';
  }

  /* ---------- Übersicht ---------- */

  window.lesenStart = function(niveau){
    var d = datenVon(niveau); if(!d) return;
    oeffnen();
    L = { niveau:niveau, daten:d, teil:null, runde:null, i:0, punkte:0, offen:[], gewaehlt:[] };

    var gesamt = window.lesenProzent(niveau);

    var teile = d.teile.map(function(t){
      var s = teilStand(niveau, t);
      var runden = t.runden.map(function(r){
        var p = rundeStand(niveau, t.nr, r.id);
        var kl = p == null ? '' : (p >= r.aufgaben.length ? ' voll' : ' teil');
        return '<button class="pl-r'+kl+'" onclick="lesenRunde('+t.nr+',\''+r.id+'\')">'
          + '<b>'+(t.runden.indexOf(r)+1)+'</b>'
          + '<span>'+(p == null ? 'neu' : p+'/'+r.aufgaben.length)+'</span></button>';
      }).join('');
      return '<section class="pl-teil pl-f-'+E(t.farbe)+'">'
        + '<div class="pl-teil-kopf"><span class="pl-teil-z">'+t.zeichen+'</span>'
        +   '<div class="pl-teil-m"><span>Teil '+t.nr+'</span><b>'+E(t.name)+'</b></div>'
        +   '<span class="pl-teil-p">'+s.prozent+' %</span></div>'
        + '<p class="pl-teil-was">'+E(t.was)+'</p>'
        + '<div class="pl-tipp"><span>Tipp</span><p>'+E(t.tipp)+'</p></div>'
        + '<div class="pl-runden">'+runden+'</div>'
        + '</section>';
    }).join('');

    document.getElementById('plKopf').innerHTML =
        '<div class="pl-kopf">'
      + '<button class="pl-zu" onclick="lesenSchliessen()" aria-label="Schließen">✕</button>'
      + '<div class="pl-kopf-m"><b>Lesen — '+E(d.pruefung)+'</b>'
      +   '<span>'+d.punkte+' Aufgaben in der Prüfung · circa '+d.minuten+' Minuten</span></div>'
      + '<span class="pl-kopf-p">'+gesamt+' %</span>'
      + '</div>';

    document.getElementById('plBody').innerHTML =
        '<div class="pl-intro">'
      +   '<h2>Der Lesen-Teil, in drei Portionen</h2>'
      +   '<p>In der echten Prüfung hast du '+d.minuten+' Minuten für '+d.punkte+' Aufgaben — '
      +   'drei Teile, ein Punkt pro Aufgabe. Lesen zählt ein Viertel der Gesamtnote. '
      +   'Hier übst du jeden Teil einzeln, in Runden zu fünf Aufgaben.</p>'
      + '</div>'
      + teile;
  };

  window.lesenRunde = function(teilNr, rundeId){
    var d = L ? L.daten : null;
    var niveau = L ? L.niveau : 'A1';
    if(!d) d = datenVon(niveau);
    if(!d) return;
    var teil = null, runde = null;
    d.teile.forEach(function(t){ if(t.nr === teilNr) teil = t; });
    if(!teil) return;
    teil.runden.forEach(function(r){ if(r.id === rundeId) runde = r; });
    if(!runde) return;
    oeffnen();
    L = { niveau:niveau, daten:d, teil:teil, runde:runde, i:0, punkte:0,
          offen:new Array(runde.aufgaben.length), gewaehlt:new Array(runde.aufgaben.length) };
    malen();
  };

  /* ---------- Overlay ---------- */

  function oeffnen(){
    stil();
    var o = document.getElementById('plOv');
    if(!o){
      o = document.createElement('div');
      o.id = 'plOv';
      o.innerHTML = '<div id="plKopf"></div><div id="plBody"></div>';
      document.body.appendChild(o);
    }
    o.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  window.lesenSchliessen = function(){
    var o = document.getElementById('plOv');
    if(o) o.style.display = 'none';
    document.body.style.overflow = '';
    /* Die Prüfungsseite neu zeichnen, damit der Fortschritt stimmt. */
    try{
      if(window.pruefungOeffnen && window.PRUEFUNGEN_DATEN){
        var letzte = J('pruefLetzte', null);
        if(letzte) window.pruefungOeffnen(letzte, 'module');
      }
    }catch(e){}
  };

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      var o = document.getElementById('plOv');
      if(o && o.style.display === 'block') window.lesenSchliessen();
    }
  });

  /* ---------- Aussehen ---------- */

  var gestylt = false;
  function stil(){
    if(gestylt) return; gestylt = true;
    var s = document.createElement('style');
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  var CSS = [
'#plOv{ display:none; position:fixed; inset:0; z-index:9000; overflow:auto;',
'  background:radial-gradient(1100px 620px at 12% -8%, #E4F7FA 0%, transparent 62%),',
'    radial-gradient(900px 520px at 92% 4%, #FFF1C9 0%, transparent 58%),',
'    radial-gradient(760px 520px at 50% 108%, #FBE3E3 0%, transparent 60%), #FFF7E6;',
'  font-family:Inter,system-ui,sans-serif; color:#1A1A1A }',
'#plBody{ max-width:860px; margin:0 auto; padding:22px 22px 90px }',

'.pl-kopf{ position:sticky; top:0; z-index:5; display:flex; align-items:center; gap:14px;',
'  max-width:860px; margin:0 auto; padding:14px 22px;',
'  background:rgba(255,252,245,.92); backdrop-filter:blur(10px);',
'  border-bottom:1.5px solid #EEE7D8 }',
'.pl-zu{ flex:none; width:38px; height:38px; border-radius:12px; border:1.5px solid #EEE7D8;',
'  background:#fff; cursor:pointer; font-size:16px; color:#5B6A70; line-height:1 }',
'.pl-zu:hover{ background:#1A1A1A; color:#fff; border-color:#1A1A1A }',
'.pl-kopf-m{ flex:1; min-width:0 }',
'.pl-kopf-m b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:16px;',
'  font-weight:800; letter-spacing:-.02em; line-height:1.2 }',
'.pl-kopf-m span{ display:block; font-size:12.5px; color:#8A97A0; font-weight:600; margin-top:2px }',
'.pl-kopf-p{ flex:none; font-family:"Space Grotesk",sans-serif; font-weight:800; font-size:15px;',
'  color:#0F5468; background:#DFF6F8; border-radius:999px; padding:7px 14px }',

'.pl-punkte{ display:flex; gap:5px; flex:none }',
'.pl-pk{ width:22px; height:6px; border-radius:999px; background:#EDE3CE }',
'.pl-pk.dran{ background:#8A97A0 }',
'.pl-pk.gut{ background:#16A34A }',
'.pl-pk.schlecht{ background:#D83636 }',

/* Übersicht */
'.pl-intro{ margin:8px 0 26px }',
'.pl-intro h2{ font-family:"Space Grotesk",sans-serif; font-size:26px; font-weight:800;',
'  letter-spacing:-.03em; margin:0 0 8px }',
'.pl-intro p{ font-size:15px; color:#5B6A70; line-height:1.6; margin:0; max-width:44em }',
'.pl-teil{ background:#fff; border:1.5px solid #EEE7D8; border-radius:20px; padding:20px;',
'  margin-bottom:16px; position:relative; overflow:hidden }',
'.pl-teil::before{ content:""; position:absolute; left:0; right:0; top:0; height:5px;',
'  background:var(--pa,#35AFD0) }',
'.pl-f-turq{ --pa:#35AFD0; --pw:#E4F7FA; --pi:#0F5468 }',
'.pl-f-gold{ --pa:#E39A00; --pw:#FFF6D9; --pi:#8A5C00 }',
'.pl-f-rot { --pa:#D83636; --pw:#FDEAEA; --pi:#9B2320 }',
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
'  border-radius:14px; padding:11px 8px; cursor:pointer; font-family:inherit;',
'  transition:transform .14s, border-color .14s, box-shadow .14s }',
'.pl-r:hover{ transform:translateY(-2px); border-color:var(--pa);',
'  box-shadow:0 10px 22px -14px rgba(40,53,59,.55) }',
'.pl-r b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:18px; font-weight:800 }',
'.pl-r span{ display:block; font-size:11.5px; font-weight:700; color:#8A97A0; margin-top:2px }',
'.pl-r.teil{ background:var(--pw); border-color:var(--pa) }',
'.pl-r.teil span{ color:var(--pi) }',
'.pl-r.voll{ background:#E8F8EE; border-color:#16A34A }',
'.pl-r.voll span{ color:#14532D }',

/* Texte */
'.pl-texte{ display:grid; gap:13px; margin-bottom:20px }',
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
'.pl-text-k span{ display:block; font-size:15px; line-height:1.65; color:#1A1A1A }',
'.pl-s-sms .pl-text-k{ background:#F4FBFC }',
'.pl-text-k mark{ background:linear-gradient(180deg,transparent 52%,#FFE066 52%);',
'  color:inherit; padding:0 2px; border-radius:3px }',

/* Schild */
'.pl-schild-wrap{ text-align:center; margin-bottom:20px }',
'.pl-schild-ort{ display:inline-block; font-size:12px; font-weight:800; letter-spacing:.08em;',
'  text-transform:uppercase; color:#8A97A0; margin-bottom:9px }',
'.pl-schild{ background:#fff; border:3px solid #28353B; border-radius:12px;',
'  padding:22px 26px; max-width:440px; margin:0 auto;',
'  box-shadow:0 14px 30px -18px rgba(40,53,59,.7) }',
'.pl-schild span{ display:block; font-family:"Space Grotesk",sans-serif; font-size:18px;',
'  font-weight:700; line-height:1.45; letter-spacing:-.01em }',
'.pl-schild span:first-child{ font-size:22px; font-weight:800 }',
'.pl-schild mark{ background:linear-gradient(180deg,transparent 52%,#FFE066 52%);',
'  color:inherit; padding:0 2px; border-radius:3px }',

/* Anzeigen */
'.pl-sit{ background:#fff; border:1.5px solid #EEE7D8; border-left:5px solid #E39A00;',
'  border-radius:16px; padding:15px 18px; margin-bottom:16px }',
'.pl-sit span{ display:block; font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#8A5C00; margin-bottom:5px }',
'.pl-sit p{ font-size:17px; line-height:1.5; margin:0; font-weight:600 }',
'.pl-anzeigen{ display:grid; gap:13px }',
'@media(min-width:680px){ .pl-anzeigen{ grid-template-columns:1fr 1fr } }',
'.pl-anz{ position:relative; text-align:left; background:#fff; border:2px solid #EEE7D8;',
'  border-radius:18px; padding:18px 18px 16px; cursor:pointer; font-family:inherit;',
'  transition:transform .14s, border-color .14s, box-shadow .14s }',
'.pl-anz:not([disabled]):hover{ transform:translateY(-3px); border-color:#35AFD0;',
'  box-shadow:0 16px 32px -20px rgba(40,53,59,.6) }',
'.pl-anz-b{ position:absolute; right:14px; top:14px; width:26px; height:26px; border-radius:9px;',
'  display:grid; place-items:center; background:#FFF7E6; color:#8A5C00;',
'  font-family:"Space Grotesk",sans-serif; font-weight:800; font-size:14px }',
'.pl-anz-q{ display:block; font-size:11.5px; font-weight:800; letter-spacing:.09em;',
'  text-transform:uppercase; color:#8A97A0; margin-bottom:8px; padding-right:34px }',
'.pl-anz-z span{ display:block; font-size:15px; line-height:1.6; color:#1A1A1A }',
'.pl-anz[disabled]{ color:#1A1A1A; opacity:1; cursor:default }',
'.pl-anz[disabled] .pl-anz-q{ color:#5B6A70 }',
'.pl-anz-z span:first-child{ font-family:"Space Grotesk",sans-serif; font-weight:800;',
'  font-size:16.5px; margin-bottom:3px }',
'.pl-anz.gut{ border-color:#16A34A; background:#E8F8EE }',
'.pl-anz.gut .pl-anz-b{ background:#16A34A; color:#fff }',
'.pl-anz.schlecht{ border-color:#D83636; background:#FDEAEA }',
'.pl-anz.schlecht .pl-anz-b{ background:#D83636; color:#fff }',
'.pl-anz.blass{ opacity:.5 }',

/* Frage und Knöpfe */
'.pl-frage{ display:flex; align-items:flex-start; gap:13px; background:#fff;',
'  border:1.5px solid #EEE7D8; border-radius:16px; padding:16px 18px; margin-bottom:14px }',
'.pl-frage-n{ flex:none; width:28px; height:28px; border-radius:9px; display:grid;',
'  place-items:center; background:#28353B; color:#fff;',
'  font-family:"Space Grotesk",sans-serif; font-weight:800; font-size:14px }',
'.pl-frage p{ font-size:17px; line-height:1.5; margin:0; font-weight:600 }',
'.pl-rf{ display:grid; grid-template-columns:1fr 1fr; gap:12px }',
'.pl-rf-b{ display:flex; align-items:center; justify-content:center; gap:9px;',
'  background:#fff; border:2px solid #EEE7D8; border-radius:16px; padding:17px 14px;',
'  cursor:pointer; font-family:"Space Grotesk",sans-serif; font-size:17px; font-weight:800;',
'  transition:transform .14s, border-color .14s, box-shadow .14s }',
'.pl-rf-b span{ width:26px; height:26px; border-radius:50%; display:grid; place-items:center;',
'  background:#F3ECDD; font-size:14px }',
'.pl-rf-b:not([disabled]):hover{ transform:translateY(-2px); border-color:#28353B;',
'  box-shadow:0 12px 26px -18px rgba(40,53,59,.7) }',
'.pl-rf-b.gut{ border-color:#16A34A; background:#E8F8EE; color:#14532D }',
'.pl-rf-b.gut span{ background:#16A34A; color:#fff }',
'.pl-rf-b.schlecht{ border-color:#D83636; background:#FDEAEA; color:#9B2320 }',
'.pl-rf-b.schlecht span{ background:#D83636; color:#fff }',
'.pl-rf-b.blass{ opacity:.45 }',

/* Rückmeldung */
'.pl-fb{ margin-top:16px; border-radius:18px; padding:17px 19px; border:1.5px solid }',
'.pl-fb.gut{ background:#E8F8EE; border-color:#BFE6CD }',
'.pl-fb.schlecht{ background:#FFF7E6; border-color:#F0DFB0 }',
'.pl-fb-kopf{ display:flex; align-items:center; gap:9px; margin-bottom:6px }',
'.pl-fb-kopf span{ font-size:19px }',
'.pl-fb-kopf b{ font-family:"Space Grotesk",sans-serif; font-size:17px; font-weight:800 }',
'.pl-fb p{ font-size:14.5px; color:#3D4A50; line-height:1.6; margin:0 0 14px }',
'.pl-weiter{ background:#D83636; color:#fff; border:0; border-radius:14px; padding:12px 22px;',
'  font-family:inherit; font-weight:800; font-size:15px; cursor:pointer;',
'  box-shadow:0 4px 0 #B02B24; transition:.14s }',
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
'  font-family:inherit; font-weight:800; font-size:14.5px; cursor:pointer }',
'.pl-b1:hover{ background:#FFFCF5; border-color:#DFD3BE }',
'.pl-b1.haupt{ background:#D83636; color:#fff; border-color:#D83636; box-shadow:0 4px 0 #B02B24 }',
'.pl-b1.haupt:hover{ transform:translateY(-2px); box-shadow:0 6px 0 #B02B24 }',
'.pl-b2{ background:none; border:0; font-family:inherit; font-weight:700; font-size:14px;',
'  color:#5B6A70; cursor:pointer; padding:12px 8px; text-decoration:underline }',

'@media(max-width:600px){ #plBody{ padding:16px 14px 80px } .pl-kopf{ padding:12px 14px }',
'  .pl-punkte{ display:none } .pl-rf{ grid-template-columns:1fr } }'
].join('\n');

})();
