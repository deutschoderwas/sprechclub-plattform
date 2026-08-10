/* ============================================================
   deutschoderwas club — HÖRTRAINING

   Der Hören-Teil der Prüfungsvorbereitung. Schwesterdatei zu
   pruefung-lesen.js und bewusst genauso aufgebaut: vier Stufen,
   dieselbe Optik, dasselbe Vorgehen. Wer den Lesen-Teil kennt,
   findet sich hier sofort zurecht.

     1  Zahlen und Zeiten   245 oder 254, halb sieben oder 7:30
     2  Signalwörter        nicht, leider, erst, fällt aus
     3  Aufgabentypen       Gespräch, Durchsage, Anrufbeantworter
     4  Prüfungslauf        15 Aufgaben mit Uhr

   Der Unterschied zum Lesen ist der Ton — und eine Regel, die
   ernst genommen wird: Beim Hören sieht man den Text NICHT.
   Erst nach dem Antworten wird er eingeblendet, mit der
   entscheidenden Stelle gelb markiert. Genau dort liegt der
   Lerneffekt: schwarz auf weiß zu sehen, was man überhört hat.

   Und: Durchsagen (Teil 2) hört man nur EINMAL, auch im
   Training. Das Feld mal am Teil steuert das. Wer eine Durchsage
   dreimal hören darf, übt etwas anderes als die Prüfung.

   Gesprochen wird über die vorhandene Anlage:
     window.sagen(text, {rolle, fertig})        eine Stimme
     window.dialogSprechen(zeilen, {fertig})    zwei im Wechsel
   Beides läuft über api/tts.js (ElevenLabs) mit Cache und fällt
   sauber auf die Gerätestimme zurück. rolle = Frau/Mann wählt
   die Stimme, damit man zwei Sprecher unterscheiden kann.

   Gespeichert wird unter pruefHoeren, gleiche Form wie beim
   Lesen. Daraus zieht die Prüfungsseite das Modul Hören.
   ============================================================ */
(function(){
  'use strict';

  function E(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function J(k,d){ try{ if(window.lsGet) return lsGet(k,d);
    var v=JSON.parse(localStorage.getItem('ub_'+k)); return v==null?d:v; }catch(e){ return d; } }
  function S(k,v){ try{ if(window.lsSet) return lsSet(k,v);
    localStorage.setItem('ub_'+k,JSON.stringify(v)); }catch(e){} }

  var QUELLEN = { 'A1':'HOEREN_A1', 'A2':'HOEREN_A2' };
  function datenVon(n){ var k=QUELLEN[n]; return k ? (window[k]||null) : null; }
  window.hoerenVorhanden = function(n){ return !!datenVon(n); };
  /* Damit die Uebersicht die Aufgabenzahl des richtigen Niveaus zeigt. */
  window.hoerenDaten = function(n){ return datenVon(n); };

  function blockVon(d,id){ for(var i=0;i<d.bloecke.length;i++) if(d.bloecke[i].id===id) return d.bloecke[i]; return null; }
  function teilVon(d,nr){ for(var i=0;i<d.teile.length;i++) if(d.teile[i].nr===nr) return d.teile[i]; return null; }
  function laufVon(d,id){ for(var i=0;i<d.laeufe.length;i++) if(d.laeufe[i].id===id) return d.laeufe[i]; return null; }
  function anzahlIn(x){
    if(x.aufgaben) return x.aufgaben.length;
    if(x.teile) return x.teile.reduce(function(a,t){ return a+t.aufgaben.length; },0);
    if(x.runden) return x.runden.reduce(function(a,r){ return a+r.aufgaben.length; },0);
    return 0;
  }

  /* ---------- Fortschritt ---------- */

  function stand(){ return J('pruefHoeren', {}) || {}; }
  function merken(niveau, topf, id, punkte){
    var st = stand();
    if(!st[niveau]) st[niveau] = {};
    if(!st[niveau][topf]) st[niveau][topf] = {};
    if(punkte > (st[niveau][topf][id]||0)) st[niveau][topf][id] = punkte;
    S('pruefHoeren', st);
  }
  function holen(niveau, topf, id){ return ((stand()[niveau]||{})[topf]||{})[id]; }

  function blockStand(n,b){ var p=holen(n,'b',b.id), max=b.aufgaben.length;
    return { punkte:p||0, max:max, gemacht:p!=null, prozent:p==null?0:Math.round(p/max*100) }; }
  function teilStand(n,t){
    var max=0, hat=0;
    t.runden.forEach(function(r){ max+=r.aufgaben.length;
      var p=holen(n,t.nr,r.id); if(p!=null) hat+=p; });
    return { punkte:hat, max:max, prozent:max?Math.round(hat/max*100):0 };
  }
  function laufStand(n,L){ var p=holen(n,'l',L.id), max=anzahlIn(L);
    return { punkte:p||0, max:max, gemacht:p!=null, prozent:p==null?0:Math.round(p/max*100) }; }

  window.hoerenProzent = function(niveau){
    var d = datenVon(niveau); if(!d) return null;
    var hat=0, max=0;
    d.bloecke.forEach(function(b){ var s=blockStand(niveau,b); hat+=s.punkte; max+=s.max; });
    d.teile.forEach(function(t){ var s=teilStand(niveau,t); hat+=s.punkte; max+=s.max; });
    d.laeufe.forEach(function(L){ var s=laufStand(niveau,L); hat+=s.punkte; max+=s.max; });
    return max ? Math.round(hat/max*100) : 0;
  };

  window.hoerenNaechstes = function(niveau){
    var d = datenVon(niveau); if(!d) return null;
    for(var i=0;i<d.bloecke.length;i++){ var b=d.bloecke[i], s=blockStand(niveau,b);
      if(s.punkte < s.max) return { was:'Stufe '+b.stufe+' — '+b.titel, klick:"hoerenBlock('"+b.id+"')" }; }
    for(var j=0;j<d.teile.length;j++){ var t=d.teile[j];
      for(var k=0;k<t.runden.length;k++){ var r=t.runden[k], p=holen(niveau,t.nr,r.id);
        if(p==null || p<r.aufgaben.length)
          return { was:'Teil '+t.nr+' — '+t.name+', Runde '+(k+1), klick:"hoerenRunde("+t.nr+",'"+r.id+"')" }; } }
    for(var m=0;m<d.laeufe.length;m++){ var Lf=d.laeufe[m], sl=laufStand(niveau,Lf);
      if(sl.punkte < sl.max) return { was:Lf.titel+' — 15 Aufgaben mit Uhr', klick:"hoerenLauf('"+Lf.id+"')" }; }
    return null;
  };

  /* ---------- Zustand ---------- */

  var H = null;
  var spielt = false;

  /* ---------- Ton ---------- */

  function textVon(a){ return a.zeilen ? a.zeilen.map(function(z){ return z.text; }).join(' ') : a.text; }

  function abspielen(){
    var e = H.folge[H.i], a = e.a;
    if(spielt){ stoppen(); return; }
    if(H.gehoert[H.i] >= H.mal[H.i]) return;
    H.gehoert[H.i] = (H.gehoert[H.i]||0) + 1;
    spielt = true;
    knopfMalen();
    function fertig(){ spielt = false; knopfMalen(); }
    try{
      if(a.zeilen) window.dialogSprechen(a.zeilen, { fertig:fertig });
      else window.sagen(a.text, { rolle:a.wer, fertig:fertig });
    }catch(err){ fertig(); }
  }

  function stoppen(){
    spielt = false;
    try{ if(window.sagenStopp) window.sagenStopp(); }catch(e){}
    knopfMalen();
  }

  window.hoerenAbspielen = abspielen;

  function knopfMalen(){
    var k = document.getElementById('phKnopf'); if(!k) return;
    k.outerHTML = spielerHTML();
  }

  function spielerHTML(){
    var rest = H.mal[H.i] - (H.gehoert[H.i]||0);
    var aus = rest <= 0 && !spielt;
    var beschriftung = spielt ? 'Stopp'
      : (H.gehoert[H.i] ? 'Noch einmal hören' : 'Anhören');
    var hinweis = H.mal[H.i] === 1
      ? 'Diesen Text hörst du nur <b>einmal</b> — wie in der Prüfung.'
      : 'Du darfst <b>zweimal</b> hören.';
    var zaehler = rest > 0
      ? (rest === H.mal[H.i] ? '' : 'noch '+rest+' mal')
      : 'kein Versuch mehr';
    return '<div class="ph-spieler" id="phKnopf">'
      + '<button class="ph-play'+(spielt?' laeuft':'')+'" '
      +   (aus?'disabled':'onclick="hoerenAbspielen()"')+'>'
      +   '<span class="ph-play-z">'+(spielt?'⏹':'▶')+'</span>'+beschriftung+'</button>'
      + '<div class="ph-play-tx"><span>'+hinweis+'</span>'
      +   (zaehler?'<em>'+zaehler+'</em>':'')+'</div>'
      + '</div>';
  }

  /* ---------- Markierung ---------- */

  function markiert(zeile, stelle){
    if(!stelle) return E(zeile);
    var i = zeile.indexOf(stelle);
    if(i<0) return E(zeile);
    return E(zeile.slice(0,i)) + '<mark>' + E(stelle) + '</mark>' + E(zeile.slice(i+stelle.length));
  }

  function skriptHTML(a){
    var h = '<div class="ph-skript"><span class="ph-skript-t">Das hast du gehört</span>';
    if(a.zeilen){
      h += a.zeilen.map(function(z){
        return '<p class="ph-z ph-'+(z.wer==='Mann'?'m':'f')+'">'
          + '<b>'+E(z.wer)+'</b>'+markiert(z.text, a.stelle)+'</p>';
      }).join('');
    } else {
      h += '<p class="ph-z ph-'+(a.wer==='Mann'?'m':'f')+'">'
        + '<b>'+E(a.wer)+'</b>'+markiert(a.text, a.stelle)+'</p>';
    }
    return h + '</div>';
  }

  /* ---------- Kopfzeile ---------- */

  function zeit(ms){ var s=Math.max(0,Math.round(ms/1000));
    return Math.floor(s/60)+':'+('0'+(s%60)).slice(-2); }

  function kopfHTML(){
    var rechts = '';
    if(H.modus==='lauf' && H.uhrEnde){
      var rest = H.uhrEnde - Date.now();
      rechts = '<span class="pl-uhrzeit'+(rest<120000?' knapp':'')+'" id="phUhr">'+zeit(rest)+'</span>';
    } else if(H.folge) rechts = fortschritt();
    return '<div class="pl-kopf">'
      + '<button class="pl-zu" onclick="hoerenSchliessen()" aria-label="Schließen">✕</button>'
      + '<div class="pl-kopf-m"><b>'+E(H.titel)+'</b><span>'+E(H.unter)+'</span></div>'
      + rechts + '</div>';
  }

  function fortschritt(){
    var p = [];
    for(var i=0;i<H.folge.length;i++){
      var kl = 'pl-pk';
      if(H.offen[i]===true) kl += ' gut';
      if(H.offen[i]===false) kl += ' schlecht';
      if(!H.sofort && H.offen[i]!=null) kl = 'pl-pk fertig';
      if(i===H.i && H.offen[i]==null) kl += ' dran';
      p.push('<span class="'+kl+'"></span>');
    }
    return '<div class="pl-punkte">'+p.join('')+'</div>';
  }

  function kopfMalen(){ var k=document.getElementById('phKopf'); if(k) k.innerHTML = kopfHTML(); }

  /* ---------- Malen ---------- */

  var ORT_Z = { gespraech:'💬', durchsage:'📢', ansage:'📞', hoerwahl:'🎧' };

  function malen(){
    var b = document.getElementById('phBody'); if(!b) return;
    var e = H.folge[H.i], a = e.a, art = e.art;
    var zeigen = H.offen[H.i]!=null && (H.sofort || H.modus==='rueckblick');
    var h = '';

    /* Wo spielt das? */
    var wo = a.ort || a.von || '';
    h += '<div class="ph-szene"><span class="ph-szene-z">'+(ORT_Z[art]||'🎧')+'</span>'
      +  '<span class="ph-szene-t">'+E(wo || (art==='hoerwahl'?'Hör gut zu':''))+'</span></div>';

    /* Die Frage steht VOR dem Hören da — so wie in der Prüfung. */
    h += '<div class="pl-frage">'
      +  (H.modus==='lauf' || !H.sofort ? '<span class="pl-frage-n">'+(H.i+1)+'</span>' : '')
      +  '<p>'+E(a.frage || a.satz)+'</p></div>';

    h += spielerHTML();

    if(art==='durchsage'){
      h += rfHTML(a, zeigen);
    } else {
      h += '<div class="pl-opts">' + a.opt.map(function(o,k){
        var kl = '';
        if(zeigen) kl = k===a.loesung ? ' gut' : (k===H.gewaehlt[H.i] ? ' schlecht' : ' blass');
        else if(!H.sofort && H.gewaehlt[H.i]===k) kl = ' wahl';
        return '<button class="pl-opt'+kl+'" '
          + (H.offen[H.i]!=null?'disabled':'onclick="hoerenWahl('+k+')"')+'>'
          + '<span class="pl-opt-b">'+String.fromCharCode(97+k)+'</span>'+E(o)+'</button>';
      }).join('') + '</div>';
    }

    if(zeigen){ h += skriptHTML(a); h += rueckmeldung(a); }
    else if(!H.sofort && H.offen[H.i]!=null) h += '<div class="pl-weiter-w">'
      + '<button class="pl-weiter" onclick="hoerenWeiter()">'
      + (H.i>=H.folge.length-1 ? 'Prüfung abgeben →' : 'Weiter →')+'</button></div>';

    b.innerHTML = h;
    kopfMalen();
    try{ document.getElementById('phOv').scrollTop = 0; }catch(e2){}
  }

  function rfHTML(a, zeigen){
    function kl(w){
      if(!zeigen) return (!H.sofort && H.gewaehlt[H.i]===w) ? ' wahl' : '';
      if(w===a.loesung) return ' gut';
      if(w===H.gewaehlt[H.i]) return ' schlecht';
      return ' blass';
    }
    var aus = H.offen[H.i]!=null;
    return '<div class="pl-rf">'
      + '<button class="pl-rf-b'+kl(true)+'" '+(aus?'disabled':'onclick="hoerenRF(true)"')+'>'
      +   '<span>✓</span>Richtig</button>'
      + '<button class="pl-rf-b'+kl(false)+'" '+(aus?'disabled':'onclick="hoerenRF(false)"')+'>'
      +   '<span>✕</span>Falsch</button></div>';
  }

  function rueckmeldung(a){
    var richtig = H.offen[H.i]===true;
    var letzte = H.i >= H.folge.length-1;
    var knopf = H.modus==='rueckblick'
      ? (letzte ? 'Fertig →' : 'Nächste Aufgabe →')
      : (letzte ? 'Auswertung ansehen →' : 'Weiter →');
    return '<div class="pl-fb '+(richtig?'gut':'schlecht')+'">'
      + '<div class="pl-fb-kopf"><span>'+(richtig?'🎉':'💡')+'</span>'
      +   '<b>'+(richtig?'Richtig!':'Fast — hör nochmal hin')+'</b></div>'
      + '<p>'+E(a.erklaerung)+'</p>'
      + '<button class="pl-weiter" onclick="hoerenWeiter()">'+knopf+'</button></div>';
  }

  /* ---------- Antworten ---------- */

  window.hoerenWahl = function(k){ werten(k===H.folge[H.i].a.loesung, k); };
  window.hoerenRF   = function(w){ werten(w===H.folge[H.i].a.loesung, w); };

  function werten(korrekt, wahl){
    if(H.offen[H.i]!=null) return;
    stoppen();
    H.gewaehlt[H.i] = wahl;
    H.offen[H.i] = korrekt;
    if(korrekt) H.punkte++;
    if(!H.sofort && H.i < H.folge.length-1){ H.i++; malen(); return; }
    malen();
  }

  window.hoerenWeiter = function(){
    stoppen();
    if(H.modus==='rueckblick'){
      if(H.i < H.folge.length-1){ H.i++; malen(); } else hoerenStart(H.niveau);
      return;
    }
    if(H.i < H.folge.length-1){ H.i++; malen(); } else ende();
  };

  /* ---------- Auswertung ---------- */

  function ende(){
    uhrStoppen(); stoppen();
    merken(H.niveau, H.topf, H.id, H.punkte);
    var n = H.folge.length, p = H.punkte, q = p/n;
    var titel, text;
    if(q===1){ titel='Alles richtig!';
      text = H.modus==='lauf'
        ? 'Volle Punktzahl in einem kompletten Hörlauf. Besser geht es nicht.'
        : 'Das sitzt. In der Prüfung wären das '+p+' von '+n+' Punkten.'; }
    else if(q>=0.6){ titel='Bestanden!';
      text='Du hast '+p+' von '+n+' Punkten. Zum Bestehen brauchst du 60 Prozent — geschafft.'; }
    else { titel='Noch nicht ganz';
      text='Du hast '+p+' von '+n+' Punkten. Geh die Aufgaben durch und lies mit, während du nochmal hörst. Danach hörst du die Stellen von selbst.'; }

    var wieder = H.modus==='block' ? "hoerenBlock('"+H.id+"')"
               : H.modus==='lauf'  ? "hoerenLauf('"+H.id+"')"
               : "hoerenRunde("+H.topf+",'"+H.id+"')";

    document.getElementById('phBody').innerHTML = '<div class="pl-ende">'
      + '<div class="pl-ende-ring '+(q>=0.6?'gut':'knapp')+'" style="--p:'+Math.round(q*100)+'">'
      +   '<i><b>'+p+'</b><span>von '+n+'</span></i></div>'
      + '<h3>'+titel+'</h3><p>'+text+'</p>'
      + '<div class="pl-ende-k">'
      +   (p<n ? '<button class="pl-b1 haupt" onclick="hoerenRueckblick()">Aufgaben durchgehen →</button>' : '')
      +   '<button class="pl-b1" onclick="'+wieder+'">Noch einmal</button>'
      +   '<button class="pl-b2" onclick="hoerenStart(\''+H.niveau+'\')">Zur Übersicht</button>'
      + '</div></div>';
    H.modus = 'ende';
    document.getElementById('phKopf').innerHTML = '<div class="pl-kopf">'
      + '<button class="pl-zu" onclick="hoerenSchliessen()" aria-label="Schließen">✕</button>'
      + '<div class="pl-kopf-m"><b>'+E(H.titel)+'</b><span>Auswertung</span></div></div>';
  }

  window.hoerenRueckblick = function(){
    H.modus='rueckblick'; H.i=0; H.unter='Zum Durchgehen — jetzt mit Text';
    /* Beim Durchgehen darf man so oft hören, wie man will. */
    for(var i=0;i<H.mal.length;i++){ H.mal[i] = 99; H.gehoert[i] = 0; }
    malen();
  };

  /* ---------- Uhr ---------- */

  function uhrStarten(min){
    H.uhrEnde = Date.now() + min*60000;
    H.uhrId = setInterval(function(){
      var el = document.getElementById('phUhr'); if(!el) return;
      var rest = H.uhrEnde - Date.now();
      el.textContent = zeit(rest);
      if(rest < 120000) el.classList.add('knapp');
      if(rest <= 0){ uhrStoppen(); ende(); }
    }, 1000);
  }
  function uhrStoppen(){ if(H && H.uhrId){ clearInterval(H.uhrId); H.uhrId=null; } }

  /* ---------- Einstiege ---------- */

  window.hoerenBlock = function(id){
    var niveau = H ? H.niveau : 'A1', d = datenVon(niveau); if(!d) return;
    var b = blockVon(d,id); if(!b) return;
    oeffnen();
    var folge = b.aufgaben.map(function(a){ return { a:a, art:a.art }; });
    H = { niveau:niveau, daten:d, modus:'block', topf:'b', id:id,
          titel:'Stufe '+b.stufe+' — '+b.titel, unter:b.kurz,
          folge:folge, i:0, punkte:0, sofort:true,
          offen:new Array(folge.length), gewaehlt:new Array(folge.length),
          gehoert:new Array(folge.length), mal:folge.map(function(){ return 2; }) };
    spielt = false; malen();
  };

  window.hoerenRunde = function(teilNr, rundeId){
    var niveau = H ? H.niveau : 'A1', d = datenVon(niveau); if(!d) return;
    var t = teilVon(d, teilNr); if(!t) return;
    var r = null; t.runden.forEach(function(x){ if(x.id===rundeId) r=x; });
    if(!r) return;
    oeffnen();
    var folge = r.aufgaben.map(function(a){ return { a:a, art:t.art }; });
    H = { niveau:niveau, daten:d, modus:'runde', topf:teilNr, id:rundeId,
          titel:'Teil '+t.nr+' — '+t.name,
          unter:'Runde '+(t.runden.indexOf(r)+1)+' von '+t.runden.length,
          folge:folge, i:0, punkte:0, sofort:true,
          offen:new Array(folge.length), gewaehlt:new Array(folge.length),
          gehoert:new Array(folge.length), mal:folge.map(function(){ return t.mal||2; }) };
    spielt = false; malen();
  };

  window.hoerenLauf = function(id){
    var niveau = H ? H.niveau : 'A1', d = datenVon(niveau); if(!d) return;
    var Lf = laufVon(d,id); if(!Lf) return;
    oeffnen();
    var folge = [], mal = [];
    Lf.teile.forEach(function(t){
      var teil = teilVon(d, t.nr);
      t.aufgaben.forEach(function(a){
        folge.push({ a:a, art:t.art });
        mal.push(teil ? (teil.mal||2) : 2);
      });
    });
    H = { niveau:niveau, daten:d, modus:'lauf', topf:'l', id:id,
          titel:Lf.titel, unter:folge.length+' Aufgaben · keine Hilfe zwischendurch',
          folge:folge, i:0, punkte:0, sofort:false,
          offen:new Array(folge.length), gewaehlt:new Array(folge.length),
          gehoert:new Array(folge.length), mal:mal };
    spielt = false;
    uhrStarten(Lf.minuten || d.minuten);
    malen();
  };

  /* ---------- Übersicht ---------- */

  window.hoerenStart = function(niveau){
    var d = datenVon(niveau); if(!d) return;
    uhrStoppen(); stoppen();
    oeffnen();
    H = { niveau:niveau, daten:d, modus:'plan', titel:'Hören — '+d.pruefung,
          unter:d.punkte+' Aufgaben in der Prüfung · circa '+d.minuten+' Minuten' };

    var gesamt = window.hoerenProzent(niveau);
    var naechst = window.hoerenNaechstes(niveau);

    var h = '<div class="pl-intro"><h2>Dein Weg zum Hören-Teil</h2>'
      + '<p>Hören ist der Teil, bei dem man nichts nachlesen kann. Deshalb bauen wir es in vier Stufen auf — '
      + 'erst Zahlen und Zeiten, dann die Wörter, die alles umdrehen, dann die drei Aufgabentypen, '
      + 'zuletzt die ganze Prüfung mit Uhr. Nach jeder Antwort siehst du den Text, den du gehört hast, '
      + 'mit der entscheidenden Stelle markiert.</p></div>';

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
              + '" onclick="hoerenBlock(\''+b.id+'\')">'
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
            var p = holen(niveau,t.nr,r.id);
            var kl = p==null ? '' : (p>=r.aufgaben.length ? ' voll' : ' teil');
            return '<button class="pl-r'+kl+'" onclick="hoerenRunde('+t.nr+',\''+r.id+'\')">'
              + '<b>'+(k+1)+'</b><span>'+(p==null?'neu':p+'/'+r.aufgaben.length)+'</span></button>';
          }).join('');
          return '<section class="pl-teil pl-f-'+E(t.farbe)+'">'
            + '<div class="pl-teil-kopf"><span class="pl-teil-z">'+t.zeichen+'</span>'
            +   '<div class="pl-teil-m"><span>Teil '+t.nr+'</span><b>'+E(t.name)+'</b></div>'
            +   '<span class="pl-teil-p">'+s.prozent+' %</span></div>'
            + '<p class="pl-teil-was">'+E(t.was)+'</p>'
            + (t.mal===1 ? '<div class="ph-einmal">⚠️ Nur einmal hören — auch hier im Training.</div>' : '')
            + '<div class="pl-tipp"><span>Tipp</span><p>'+E(t.tipp)+'</p></div>'
            + '<div class="pl-runden">'+runden+'</div></section>';
        }).join('');
      } else {
        inhalt = '<div class="pl-karten">' + d.laeufe.map(function(Lf){
          var s = laufStand(niveau,Lf);
          return '<button class="pl-karte pl-f-dunkel'+(s.punkte>=s.max?' voll':'')
            + '" onclick="hoerenLauf(\''+Lf.id+'\')">'
            + '<span class="pl-karte-z">⏱️</span>'
            + '<span class="pl-karte-t"><b>'+E(Lf.titel)+'</b>'
            +   '<span>'+anzahlIn(Lf)+' Aufgaben · '+(Lf.minuten||d.minuten)+' Minuten</span></span>'
            + '<span class="pl-karte-p">'+(s.gemacht ? s.punkte+'/'+s.max : 'noch offen')+'</span>'
            + '<span class="pl-karte-bar"><i style="width:'+Math.max(2,s.prozent)+'%"></i></span>'
            + '<span class="pl-karte-ziel">Die Uhr läuft mit, Rückmeldung erst am Ende. '
            +   'Die Durchsagen gibt es auch hier nur einmal.</span></button>';
        }).join('') + '</div>';
      }
      h += '<section class="pl-stufe"><div class="pl-stufe-kopf">'
        + '<span class="pl-stufe-n">'+st.nr+'</span>'
        + '<div><b>'+st.zeichen+' '+E(st.titel)+'</b><p>'+E(st.was)+'</p></div></div>'
        + inhalt + '</section>';
    });

    document.getElementById('phKopf').innerHTML = '<div class="pl-kopf">'
      + '<button class="pl-zu" onclick="hoerenSchliessen()" aria-label="Schließen">✕</button>'
      + '<div class="pl-kopf-m"><b>'+E(H.titel)+'</b><span>'+E(H.unter)+'</span></div>'
      + '<span class="pl-kopf-p">'+gesamt+' %</span></div>';
    document.getElementById('phBody').innerHTML = h;
  };

  /* ---------- Overlay ---------- */

  function oeffnen(){
    if(window.trainerStil) window.trainerStil();
    stil();
    var o = document.getElementById('phOv');
    if(!o){
      o = document.createElement('div'); o.id='phOv';
      o.innerHTML = '<div id="phKopf"></div><div id="phBody"></div>';
      document.body.appendChild(o);
    }
    o.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  window.hoerenSchliessen = function(){
    uhrStoppen(); stoppen();
    var o = document.getElementById('phOv');
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
    var o = document.getElementById('phOv');
    if(!o || o.style.display !== 'block') return;
    if(e.key === 'Escape') window.hoerenSchliessen();
    if(e.key === ' ' && H && H.folge){ e.preventDefault(); abspielen(); }
  });

  /* ---------- Aussehen ----------
     Das Grundgerüst kommt aus dem Lesetrainer (Klassen pl-),
     hier nur, was den Ton betrifft. */

  var gestylt = false;
  function stil(){
    if(gestylt) return; gestylt = true;
    var s = document.createElement('style'); s.textContent = CSS; document.head.appendChild(s);
  }

  var CSS = [
'#phOv{ display:none; position:fixed; inset:0; z-index:9000; overflow:auto;',
'  background:radial-gradient(1100px 620px at 12% -8%, #E4F7FA 0%, transparent 62%),',
'    radial-gradient(900px 520px at 92% 4%, #FFF1C9 0%, transparent 58%),',
'    radial-gradient(760px 520px at 50% 108%, #FBE3E3 0%, transparent 60%), #FFF7E6;',
'  font-family:Inter,system-ui,sans-serif; color:#1A1A1A }',
'#phBody{ max-width:880px; margin:0 auto; padding:22px 22px 90px }',
'#phOv button{ font-family:inherit }',
'#phOv .pl-kopf{ max-width:880px }',

'.ph-szene{ display:flex; align-items:center; gap:11px; margin-bottom:14px }',
'.ph-szene-z{ flex:none; width:40px; height:40px; border-radius:13px; display:grid;',
'  place-items:center; font-size:20px; background:#fff; border:1.5px solid #EEE7D8;',
'  box-shadow:0 6px 14px -10px rgba(40,53,59,.6) }',
'.ph-szene-t{ font-size:12.5px; font-weight:800; letter-spacing:.09em;',
'  text-transform:uppercase; color:#5B6A70 }',

'.ph-spieler{ display:flex; align-items:center; gap:15px; flex-wrap:wrap;',
'  background:#fff; border:1.5px solid #EEE7D8; border-radius:18px;',
'  padding:16px 18px; margin-bottom:16px;',
'  box-shadow:0 8px 22px -18px rgba(40,53,59,.6) }',
'.ph-play{ display:flex; align-items:center; gap:11px; background:#28353B; color:#fff;',
'  border:0; border-radius:14px; padding:14px 24px; cursor:pointer;',
'  font-family:"Space Grotesk",sans-serif; font-size:16.5px; font-weight:800;',
'  box-shadow:0 4px 0 #162125; transition:.14s }',
'.ph-play:not([disabled]):hover{ transform:translateY(-2px); box-shadow:0 6px 0 #162125 }',
'.ph-play[disabled]{ background:#E7E1D4; color:#8A97A0; box-shadow:none; cursor:default }',
'.ph-play-z{ font-size:15px }',
'.ph-play.laeuft{ background:#D83636; box-shadow:0 4px 0 #B02B24;',
'  animation:phPuls 1.1s ease-in-out infinite }',
'@keyframes phPuls{ 0%,100%{ opacity:1 } 50%{ opacity:.72 } }',
'.ph-play-tx{ flex:1; min-width:150px }',
'.ph-play-tx span{ display:block; font-size:13.5px; color:#5B6A70; line-height:1.5 }',
'.ph-play-tx b{ color:#1A1A1A }',
'.ph-play-tx em{ display:block; font-style:normal; font-size:12px; font-weight:800;',
'  color:#8A5C00; margin-top:3px }',

'.ph-einmal{ background:#FDEAEA; border:1.5px solid #F5CFCF; border-radius:12px;',
'  padding:10px 13px; font-size:13px; font-weight:700; color:#9B2320; margin-bottom:12px }',

'.ph-skript{ margin-top:16px; background:#fff; border:1.5px solid #EEE7D8;',
'  border-radius:18px; padding:16px 18px }',
'.ph-skript-t{ display:block; font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#8A97A0; margin-bottom:10px }',
'.ph-z{ font-size:15px; line-height:1.65; margin:0 0 8px; padding-left:70px;',
'  position:relative; color:#1A1A1A }',
'.ph-z:last-child{ margin-bottom:0 }',
'.ph-z b{ position:absolute; left:0; top:0; font-size:11px; font-weight:800;',
'  letter-spacing:.06em; text-transform:uppercase; padding:2px 8px; border-radius:7px }',
'.ph-f b{ background:#FDEAEA; color:#9B2320 }',
'.ph-m b{ background:#E4F7FA; color:#0F5468 }',
'.ph-z mark{ background:linear-gradient(180deg,transparent 52%,#FFE066 52%);',
'  color:inherit; padding:0 2px; border-radius:3px }',

'@media(max-width:600px){ #phBody{ padding:16px 14px 80px }',
'  .ph-play{ width:100%; justify-content:center }',
'  .ph-z{ padding-left:0; padding-top:22px }',
'  .ph-z b{ top:0 } }'
].join('\n');

})();
