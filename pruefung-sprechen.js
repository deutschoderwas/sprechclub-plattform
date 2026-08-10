/* ============================================================
   deutschoderwas club — SPRECHEN-TRAINER (Start Deutsch 1)

   Sprechen übt man normalerweise zu zweit. Allein geht es auch —
   aber nur, wenn man wirklich laut spricht. Deshalb ist der Ablauf
   bei jeder Karte immer derselbe:

     1  Die Karte sehen, so wie sie in der Prüfung aussieht
     2  Selbst sprechen — mit Aufnahme, wenn das Mikrofon darf
     3  Die eigene Aufnahme anhören
     4  Die Musterlösung hören (echte Stimme über window.sagen)
     5  Ehrlich abhaken: ganz, halb oder gar nicht

   Der Selbstcheck ist kein Beiwerk. Er ist die Übung. Wer sich selbst
   hört und mit dem Muster vergleicht, merkt Fehler, die ihm sonst
   niemand zeigt. Die Punkte folgen der offiziellen Bewertung:
   voll erfüllt = volle Punkte, teilweise = halbe, nicht erfüllt = null.

   Punkte nach Testbeschreibung A1 SD1:
     Teil 1  Vorstellung 1 + Buchstabieren 1 + Nummer 1   =  3
     Teil 2  je Karte: Frage 2 + Antwort 1                =  6
     Teil 3  je Karte: Bitte 2 + Reaktion 1               =  6
                                                     zusammen 15

   Ohne Mikrofon-Erlaubnis läuft alles genauso, nur ohne Aufnahme —
   dann bestätigt man selbst, dass man gesprochen hat. Niemand wird
   ausgesperrt, weil sein Browser nicht mitspielt.

   Gespeichert wird unter pruefSprechen, gleiche Form wie bei Lesen,
   Hören und Schreiben. Daraus zieht die Prüfungsseite das Modul.
   ============================================================ */
(function(){
  'use strict';

  function E(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function J(k,d){ try{ if(window.lsGet) return lsGet(k,d);
    var v=JSON.parse(localStorage.getItem('ub_'+k)); return v==null?d:v; }catch(e){ return d; } }
  function S(k,v){ try{ if(window.lsSet) return lsSet(k,v);
    localStorage.setItem('ub_'+k, JSON.stringify(v)); }catch(e){} }

  var QUELLEN = { 'A1':'SPRECHEN_A1', 'A2':'SPRECHEN_A2' };
  /* Alle Aufgabenarten, bei denen wirklich gesprochen wird. */
  var SPRECHARTEN = { vorstellen:1, fragen:1, bitten:1, erzaehlen:1, planen:1 };
  function datenVon(n){ var k=QUELLEN[n]; return k ? (window[k]||null) : null; }
  window.sprechenVorhanden = function(n){ return !!datenVon(n); };
  window.sprechenDaten = function(n){ return datenVon(n); };

  function blockVon(d,id){ for(var i=0;i<d.bloecke.length;i++) if(d.bloecke[i].id===id) return d.bloecke[i]; return null; }
  function teilVon(d,nr){ for(var i=0;i<d.teile.length;i++) if(d.teile[i].nr===nr) return d.teile[i]; return null; }
  function laufVon(d,id){ for(var i=0;i<d.laeufe.length;i++) if(d.laeufe[i].id===id) return d.laeufe[i]; return null; }

  /* ---------- Fortschritt ---------- */

  function stand(){ return J('pruefSprechen', {}) || {}; }
  function merken(niveau, topf, id, punkte){
    var s = stand();
    if(!s[niveau]) s[niveau] = {};
    if(!s[niveau][topf]) s[niveau][topf] = {};
    var alt = s[niveau][topf][id];
    if(alt==null || punkte>alt) s[niveau][topf][id] = punkte;
    S('pruefSprechen', s);
  }
  function holen(niveau, topf, id){ return ((stand()[niveau]||{})[topf]||{})[id]; }

  /* Höchstpunktzahl einer Runde — genau nach der Testbeschreibung. */
  function maxVon(teil, r){
    if(teil.art==='vorstellen') return 3;
    return (r.karten ? r.karten.length : 2) * 3;
  }
  function zielVon(teil, r){ return Math.ceil(maxVon(teil,r) * 0.6); }

  function blockStand(n,b){ var p=holen(n,'b',b.id), max=b.aufgaben.length;
    return { gemacht:p!=null, punkte:p||0, max:max, prozent:Math.round(((p||0)/max)*100) }; }
  function teilStand(n,t){
    var p=0, max=0;
    t.runden.forEach(function(r){ var x=holen(n,t.nr,r.id); if(x!=null) p+=x; max+=maxVon(t,r); });
    return { punkte:p, max:max, prozent:max?Math.round((p/max)*100):0 };
  }
  /* Ein Lauf ist so viel wert wie seine Teile zusammen — bei A1 sind das
     genau die bekannten 15 Punkte, bei A2 rechnet es sich von selbst. */
  function laufMax(L){
    if(!L || !L.teile) return 15;
    return L.teile.reduce(function(n,t){
      return n + (t.art==='vorstellen' ? 3 : (t.karten ? t.karten.length : 2) * 3); }, 0);
  }
  function laufZiel(L){ return Math.ceil(laufMax(L) * 0.6); }
  function laufStand(n,L){ var p=holen(n,'l',L.id), m=laufMax(L);
    return { gemacht:p!=null, punkte:p||0, max:m,
             geschafft:(p||0)>=laufZiel(L), prozent:m?Math.round(((p||0)/m)*100):0 }; }

  window.sprechenProzent = function(niveau){
    var d = datenVon(niveau); if(!d) return 0;
    var p=0, max=0;
    d.bloecke.forEach(function(b){ var s=blockStand(niveau,b); p+=s.punkte; max+=s.max; });
    d.teile.forEach(function(t){ var s=teilStand(niveau,t); p+=s.punkte; max+=s.max; });
    d.laeufe.forEach(function(L){ var s=laufStand(niveau,L); p+=s.punkte; max+=s.max; });
    return max ? Math.round((p/max)*100) : 0;
  };

  window.sprechenNaechstes = function(niveau){
    var d = datenVon(niveau); if(!d) return null;
    for(var i=0;i<d.bloecke.length;i++){
      var b=d.bloecke[i]; if(holen(niveau,'b',b.id)==null)
        return { klick:"sprechenBlock('"+b.id+"')", was:'Stufe '+b.stufe+' — '+b.titel };
    }
    for(var j=0;j<d.teile.length;j++){
      var t=d.teile[j];
      for(var k=0;k<t.runden.length;k++){
        var r=t.runden[k]; if(holen(niveau,t.nr,r.id)==null)
          return { klick:"sprechenRunde("+t.nr+",'"+r.id+"')",
                   was:'Teil '+t.nr+' — '+t.name+', Runde '+(k+1) };
      }
    }
    for(var m=0;m<d.laeufe.length;m++){
      var L=d.laeufe[m]; if(holen(niveau,'l',L.id)==null)
        return { klick:"sprechenLauf('"+L.id+"')", was:L.titel };
    }
    return null;
  };

  /* ---------- Zustand ---------- */

  var W = null, laeuft = false;

  function zeit(ms){ var s=Math.max(0,Math.round(ms/1000));
    return Math.floor(s/60)+':'+('0'+(s%60)).slice(-2); }

  function kopfHTML(){
    var uhr = W.bis ? '<span class="pl-uhr-z'+((W.bis-Date.now())<60000?' knapp':'')+'">⏱️ '
      + zeit(W.bis-Date.now())+'</span>' : '';
    return '<div class="pl-kopf">'
      + '<button class="pl-zu" onclick="sprechenSchliessen()" aria-label="Schließen">✕</button>'
      + '<div class="pl-kopf-m"><b>'+E(W.titel)+'</b><span>'+E(W.unter)+'</span></div>'
      + uhr + fortschritt() + '</div>';
  }
  function fortschritt(){
    if(!W.folge) return '';
    var p = W.folge.map(function(x,k){
      var kl = k<W.i ? (W.offen[k]===true?'voll':(W.offen[k]==='teil'?'teil':'leer'))
             : (k===W.i ? 'jetzt' : '');
      return '<i class="'+kl+'"></i>';
    }).join('');
    return '<div class="pl-punkte">'+p+'</div>';
  }
  function kopfMalen(){ var k=document.getElementById('psKopf'); if(k) k.innerHTML = kopfHTML(); }

  /* ---------- Zeichnen ---------- */

  function malen(){
    var b = document.getElementById('psBody'); if(!b) return;
    if(W.i >= W.folge.length){ ende(); return; }
    var e = W.folge[W.i], a = e.a, art = e.art;
    var zeigen = W.offen[W.i] != null;
    var h = '';

    if(art==='wahl'){
      h += frageHTML(a.frage, W.i+1);
      h += wahlHTML(a, zeigen);

    } else if(art==='ordnen'){
      h += frageHTML(a.frage, W.i+1);
      h += ordnenHTML(a, zeigen);

    } else if(art==='vorstellen'){
      h += karteVorstellenHTML(a);
      h += sprechFlaeche(a, zeigen, 'vorstellen');

    } else if(art==='fragen'){
      h += karteFragenHTML(e.karte, e.thema);
      h += sprechFlaeche(e.karte, zeigen, 'fragen');

    } else if(art==='bitten'){
      h += karteBittenHTML(e.karte);
      h += sprechFlaeche(e.karte, zeigen, 'bitten');

    } else if(art==='erzaehlen'){
      h += karteErzaehlenHTML(e.karte, e.thema);
      h += sprechFlaeche(e.karte, zeigen, 'erzaehlen');

    } else if(art==='planen'){
      h += kartePlanenHTML(e.karte, e.thema);
      h += sprechFlaeche(e.karte, zeigen, 'planen');
    }

    if(zeigen) h += rueckmeldung(e);
    b.innerHTML = h;
    kopfMalen();
    if(SPRECHARTEN[art]) aufnahmeBinden();
    try{ document.getElementById('psOv').scrollTop = 0; }catch(e2){}
  }

  function frageHTML(text, nr){
    return '<div class="pl-frage">'
      + (nr?'<span class="pl-frage-n">'+nr+'</span>':'')
      + '<b>'+E(text)+'</b></div>';
  }

  /* ---------- Übungen aus Stufe 1 und 2 ---------- */

  function wahlHTML(a, zeigen){
    return '<div class="pl-wahl">' + a.optionen.map(function(o,k){
      var kl = '';
      if(zeigen) kl = k===a.loesung ? ' gut' : (W.gewaehlt[W.i]===k ? ' schlecht' : '');
      return '<button class="pl-w'+kl+'" '+(zeigen?'disabled':'onclick="sprechenWahl('+k+')"')+'>'
        + '<span class="pl-w-b">'+String.fromCharCode(97+k)+'</span>'+E(o)+'</button>';
    }).join('') + '</div>';
  }

  window.sprechenWahl = function(k){
    W.gewaehlt[W.i] = k;
    werten(k===W.folge[W.i].a.loesung, 1);
  };

  function ordnenHTML(a, zeigen){
    var g = W.gewaehlt[W.i] || [];
    var mix = W.mix[W.i] || a.teile.map(function(_,i){ return i; });
    var offen = mix.filter(function(i){ return g.indexOf(i)<0; });
    var satz = g.length
      ? g.map(function(i){ return '<span>'+E(a.teile[i])+'</span>'; }).join('')
      : '<em>Tippe die Wörter in der richtigen Reihenfolge an.</em>';
    var h = '<div class="pl-ord-satz'+(zeigen?(W.offen[W.i]===true?' gut':' schlecht'):'')+'">'+satz+'</div>';
    if(!zeigen){
      h += '<div class="pl-ord-bank">' + offen.map(function(i){
        return '<button class="pl-ord-t" onclick="sprechenOrd('+i+')">'+E(a.teile[i])+'</button>';
      }).join('') + '</div>';
      if(g.length) h += '<div class="pl-ord-tools">'
        + '<button class="pl-ord-zur" onclick="sprechenOrdZurueck()">← Letztes zurück</button></div>';
    }
    if(zeigen && W.offen[W.i]!==true){
      h += '<div class="pl-ord-loesung"><span>So ist es richtig</span><b>'
        + a.loesung.map(function(i){ return E(a.teile[i]); }).join(' ')+'</b></div>';
    }
    return h;
  }

  window.sprechenOrd = function(i){
    var g = W.gewaehlt[W.i] || (W.gewaehlt[W.i]=[]);
    g.push(i);
    var a = W.folge[W.i].a;
    if(g.length >= a.teile.length){
      var ok = g.join(',')===a.loesung.join(',');
      werten(ok, 1);
    } else malen();
  };
  window.sprechenOrdZurueck = function(){
    var g = W.gewaehlt[W.i]; if(g && g.length){ g.pop(); malen(); }
  };

  /* ---------- Die Prüfungskarten ---------- */

  function karteVorstellenHTML(a){
    return '<div class="sp-karte sp-k-vor">'
      + '<div class="sp-karte-kopf"><span>'+E((W.daten&&W.daten.pruefung)||'Start Deutsch 1')+'</span><b>Teil 1 · Sich vorstellen</b></div>'
      + '<div class="sp-stich">' + a.stichwoerter.map(function(w){
          return '<span class="sp-stich-w">'+E(w)+'</span>'; }).join('') + '</div>'
      + '<div class="sp-extra">'
      +   '<div class="sp-extra-z"><b>Buchstabieren</b><span>'+E(a.buchstabieren)+'</span></div>'
      +   '<div class="sp-extra-z"><b>Nummer nennen</b><span>'+E(a.nummer)+'</span></div>'
      + '</div></div>';
  }

  function karteFragenHTML(k, thema){
    return '<div class="sp-karte sp-k-frage">'
      + '<div class="sp-karte-kopf"><span>Teil 2 · Um Informationen bitten</span><b>Handlungskarte</b></div>'
      + '<div class="sp-thema">'+E(thema)+'</div>'
      + '<div class="sp-stichwort">'+E(k.stichwort)+'</div>'
      + '</div>';
  }

  function karteBittenHTML(k){
    return '<div class="sp-karte sp-k-bitte">'
      + '<div class="sp-karte-kopf"><span>Teil 3 · Bitten formulieren</span><b>Bildkarte</b></div>'
      + '<div class="sp-bild"><span>'+(k.zeichen||'🖼️')+'</span></div>'
      + '<div class="sp-gegenstand">'+E(k.gegenstand)+'</div>'
      + '</div>';
  }

  function karteErzaehlenHTML(k, thema){
    return '<div class="sp-karte sp-k-frage">'
      + '<div class="sp-karte-kopf"><span>Teil 2 · Von sich erzählen</span><b>Themenkarte</b></div>'
      + '<div class="sp-thema">'+E(thema||k.thema||'')+'</div>'
      + '<div class="sp-stich">' + (k.punkte||[]).map(function(w){
          return '<span class="sp-stich-w">'+E(w)+'</span>'; }).join('') + '</div>'
      + '</div>';
  }

  function kartePlanenHTML(k, thema){
    return '<div class="sp-karte sp-k-bitte">'
      + '<div class="sp-karte-kopf"><span>Teil 3 · Gemeinsam planen</span><b>Aufgabenkarte</b></div>'
      + '<div class="sp-thema">'+E(thema||k.thema||'')+'</div>'
      + '<div class="sp-gegenstand">'+E(k.aufgabe||'')+'</div>'
      + '<div class="sp-stich">' + (k.punkte||[]).map(function(w){
          return '<span class="sp-stich-w">'+E(w)+'</span>'; }).join('') + '</div>'
      + '</div>';
  }

  /* ---------- Sprechen, aufnehmen, vergleichen ---------- */

  var AUFTRAG = {
    vorstellen: ['Stell dich vor — alle sieben Stichwörter in ganzen Sätzen.',
                 'Buchstabiere das verlangte Wort.',
                 'Nenn die verlangte Nummer, Ziffer für Ziffer.'],
    fragen:     ['Stell zum Stichwort eine ganze Frage.',
                 'Beantworte die Frage deiner Partnerin.'],
    bitten:     ['Formuliere eine höfliche Bitte mit „bitte".',
                 'Reagiere auf die Bitte der anderen.'],
    erzaehlen:  ['Erzähl zusammenhängend von dir — alle Stichpunkte der Karte.',
                 'Beantworte eine Nachfrage in ein bis zwei Sätzen.'],
    planen:     ['Mach einen Vorschlag und begründe ihn kurz.',
                 'Reagiere auf den Gegenvorschlag und einigt euch.']
  };

  /* Was bei dieser Karte bewertet wird — Text und Höchstpunktzahl. */
  function schritte(art){
    if(art==='vorstellen') return [
      { t:'Vorstellung', max:1, muster:function(a){ return a.muster; } },
      { t:'Buchstabieren', max:1, muster:function(a){ return a.muster_buchstabieren; } },
      { t:'Nummer', max:1, muster:function(a){ return a.muster_nummer; } } ];
    if(art==='fragen') return [
      { t:'Deine Frage', max:2, muster:function(k){ return k.musterfrage; } },
      { t:'Deine Antwort', max:1, muster:function(k){ return k.musterantwort; } } ];
    if(art==='erzaehlen') return [
      { t:'Dein Vortrag', max:2, muster:function(k){ return k.mustervortrag; } },
      { t:'Deine Antwort auf die Nachfrage', max:1, muster:function(k){ return k.musterantwort; } } ];
    if(art==='planen') return [
      { t:'Dein Vorschlag', max:2, muster:function(k){ return k.mustervorschlag; } },
      { t:'Eure Einigung', max:1, muster:function(k){ return k.mustereinigung; } } ];
    return [
      { t:'Deine Bitte', max:2, muster:function(k){ return k.musterbitte; } },
      { t:'Deine Reaktion', max:1, muster:function(k){ return k.musterreaktion; } } ];
  }

  function selbstWerte(){
    var n = schritte(W.folge[W.i].art).length;
    if(!W.selbst[W.i]) W.selbst[W.i] = new Array(n);
    return W.selbst[W.i];
  }
  function selbstFertig(){
    var s = selbstWerte();
    for(var i=0;i<s.length;i++) if(s[i]==null) return false;
    return true;
  }

  function sprechFlaeche(a, zeigen, art){
    var sch = schritte(art), auf = AUFTRAG[art];
    var h = '<div class="sp-auftrag"><span>Deine Aufgabe</span><ul>'
      + auf.map(function(x){ return '<li>'+E(x)+'</li>'; }).join('') + '</ul></div>';

    if(!zeigen){
      h += '<div class="sp-rec" id="spRec">'
        + '<button class="sp-rec-btn" id="spRecBtn"><span class="sp-rec-p"></span>'
        +   '<b id="spRecTxt">Aufnahme starten</b></button>'
        + '<div class="sp-rec-info" id="spRecInfo">Sprich laut — genau wie in der Prüfung.</div>'
        + '<audio id="spRecPlay" controls style="display:none"></audio>'
        + '</div>'
        + '<div class="pl-weiter-w"><button class="pl-weiter" onclick="sprechenGesprochen()">'
        +   'Gesprochen — jetzt vergleichen →</button></div>';
      return h;
    }

    /* Nach dem Sprechen: Muster hören und ehrlich abhaken. */
    h += '<div class="sp-muster"><span class="sp-muster-t">So könnte es klingen</span>'
      + sch.map(function(x,k){
          var m = x.muster(a) || '';
          return '<div class="sp-m-z"><div class="sp-m-tx"><b>'+E(x.t)+'</b><p>'+E(m)+'</p></div>'
            + '<button class="sp-hoer" onclick="sprechenHoeren('+k+')" aria-label="Vorlesen">🔊</button></div>';
        }).join('') + '</div>';

    var s = selbstWerte();
    h += '<div class="sp-check"><span class="sp-check-t">Wie war deins? Sei ehrlich — das ist die Übung.</span>'
      + sch.map(function(x,k){
          var opt = [ {w:1,   t:'Ja, so ähnlich', z:'✓'},
                      {w:0.5, t:'Nur halb',       z:'~'},
                      {w:0,   t:'Noch nicht',     z:'✕'} ];
          return '<div class="sp-c-z"><b>'+E(x.t)+' <i>'+x.max+' P</i></b><div class="sp-c-w">'
            + opt.map(function(o,j){
                var an = s[k]===o.w ? ' an' : '';
                return '<button class="sp-c-b'+an+'" onclick="sprechenSelbst('+k+','+o.w+')">'
                  + '<span>'+o.z+'</span>'+o.t+'</button>';
              }).join('') + '</div></div>';
        }).join('') + '</div>';
    return h;
  }

  window.sprechenSelbst = function(k, w){
    selbstWerte()[k] = w;
    if(selbstFertig()){
      var e = W.folge[W.i], sch = schritte(e.art), s = selbstWerte();
      var p = 0; sch.forEach(function(x,i){ p += Math.round(x.max * s[i]); });
      W.mpunkte[W.i] = p;
      W.punkte += p;
      var voll = sch.reduce(function(n,x){ return n+x.max; }, 0);
      W.offen[W.i] = p>=voll ? true : (p>0 ? 'teil' : false);
    }
    malen();
  };

  window.sprechenHoeren = function(k){
    var e = W.folge[W.i];
    var quelle = e.karte || e.a;
    var m = schritte(e.art)[k].muster(quelle);
    if(!m) return;
    try{
      if(window.sagen) window.sagen(m, { rolle:'Frau' });
      else if(window.speechSynthesis){
        var u = new SpeechSynthesisUtterance(m); u.lang='de-DE'; u.rate=0.9;
        speechSynthesis.cancel(); speechSynthesis.speak(u);
      }
    }catch(err){}
  };

  window.sprechenGesprochen = function(){
    aufnahmeStoppen();
    W.offen[W.i] = 'teil';        /* aufgedeckt — bewertet wird gleich im Selbstcheck */
    malen();
  };

  /* --- Aufnahme. Ohne Mikrofon läuft alles weiter, nur ohne Ton. --- */
  var rec = null, chunks = [], recURL = null;

  function aufnahmeBinden(){
    var btn = document.getElementById('spRecBtn'); if(!btn) return;
    btn.onclick = function(){ rec && rec.state==='recording' ? aufnahmeStoppen() : aufnahmeStarten(); };
  }

  function recText(t, an){
    var b=document.getElementById('spRecTxt'), w=document.getElementById('spRec');
    if(b) b.textContent = t;
    if(w) w.className = 'sp-rec' + (an?' laeuft':'');
  }
  function recInfo(t){ var i=document.getElementById('spRecInfo'); if(i) i.textContent = t; }

  function aufnahmeStarten(){
    if(!navigator.mediaDevices || !window.MediaRecorder){
      recInfo('Dein Browser kann nicht aufnehmen — sprich trotzdem laut und vergleich danach.');
      return;
    }
    navigator.mediaDevices.getUserMedia({ audio:true }).then(function(stream){
      chunks = [];
      rec = new MediaRecorder(stream);
      rec.ondataavailable = function(ev){ if(ev.data && ev.data.size) chunks.push(ev.data); };
      rec.onstop = function(){
        try{ stream.getTracks().forEach(function(t){ t.stop(); }); }catch(e){}
        if(!chunks.length) return;
        if(recURL) URL.revokeObjectURL(recURL);
        recURL = URL.createObjectURL(new Blob(chunks, { type:'audio/webm' }));
        var p = document.getElementById('spRecPlay');
        if(p){ p.src = recURL; p.style.display='block'; }
        recText('Nochmal aufnehmen', false);
        recInfo('Hör dir deine Aufnahme an — und dann vergleich mit dem Muster.');
      };
      rec.start();
      recText('Aufnahme läuft — hier stoppen', true);
      recInfo('Sprich jetzt. Lass dir Zeit, ganze Sätze.');
    }).catch(function(){
      recInfo('Kein Zugriff aufs Mikrofon. Macht nichts — sprich laut und vergleich danach selbst.');
    });
  }
  function aufnahmeStoppen(){
    try{ if(rec && rec.state==='recording') rec.stop(); }catch(e){}
  }

  /* ---------- Werten und weiter ---------- */

  function werten(korrekt, punkte){
    W.offen[W.i] = !!korrekt;
    if(korrekt) W.punkte += punkte;
    malen();
  }

  function rueckmeldung(e){
    var a = e.karte ? e.runde : e.a;
    var gut = W.offen[W.i]===true;
    var sprech = !!SPRECHARTEN[e.art];
    var fertig = !sprech || selbstFertig();
    var txt = a && a.erklaerung ? a.erklaerung : '';

    if(sprech && !fertig){
      return '<div class="pl-fb gut"><div class="pl-fb-kopf"><span>👆</span>'
        + '<b>Erst abhaken, dann weiter</b></div>'
        + '<p>Hör dir die Musterlösung an und schätz dich bei jedem Punkt ehrlich ein.</p>'
        + '<button class="pl-weiter aus" disabled>Noch nicht fertig</button></div>';
    }
    return '<div class="pl-fb '+(gut?'gut':'schlecht')+'">'
      + '<div class="pl-fb-kopf"><span>'+(gut?'✅':'💡')+'</span>'
      +   '<b>'+(gut?'Sitzt.':'Merk dir')+'</b></div>'
      + (txt ? '<p>'+E(txt)+'</p>' : '')
      + '<button class="pl-weiter" onclick="sprechenWeiter()">'
      +   (W.i>=W.folge.length-1 ? 'Auswertung ansehen →' : 'Weiter →')+'</button></div>';
  }

  window.sprechenWeiter = function(){
    W.i++;
    malen();
  };

  function ende(){
    uhrStoppen();
    var d = W.daten, max = W.max, p = W.punkte;
    var proz = max ? Math.round((p/max)*100) : 0;
    var geschafft = proz >= 60;
    merken(W.niveau, W.topf, W.id, p);

    var kopf = geschafft ? '🎉 Geschafft!' : '💪 Noch nicht ganz';
    var text = geschafft
      ? 'Das reicht. Am Prüfungstag brauchst du 60 Prozent — die hast du.'
      : 'Du brauchst 60 Prozent. Mach die Runde nochmal: beim zweiten Mal sitzt der Satzbau schon viel besser.';

    var h = '<div class="pl-ende'+(geschafft?' gut':'')+'">'
      + '<div class="pl-ende-z">'+(geschafft?'🏆':'🔁')+'</div>'
      + '<h2>'+kopf+'</h2>'
      + '<div class="pl-ende-p"><b>'+p+'</b><span>von '+max+' Punkten</span></div>'
      + '<div class="pl-ende-bar"><i style="width:'+Math.max(3,proz)+'%"></i></div>'
      + '<p>'+text+'</p>'
      + '<div class="pl-ende-tipp"><b>Ein ehrlicher Hinweis</b>'
      +   '<p>Diese Punkte hast du dir selbst gegeben. Das ist gewollt — aber es zählt nur, '
      +   'wenn du streng warst. Im Zweifel: die Aufnahme nochmal anhören und ehrlich vergleichen.</p></div>'
      + '<div class="pl-ende-btn">'
      +   '<button class="pl-weiter" onclick="sprechenStart(\''+E(W.niveau)+'\')">Zur Übersicht →</button>'
      + '</div></div>';
    document.getElementById('psBody').innerHTML = h;
    W.folge = null; kopfMalen();
  }

  /* ---------- Uhr ---------- */

  function uhrStarten(min){
    W.bis = Date.now() + min*60000;
    W.uhrId = setInterval(function(){
      if(!W || !W.bis) return;
      if(Date.now() >= W.bis){ uhrStoppen(); W.i = W.folge ? W.folge.length : 0; malen(); return; }
      kopfMalen();
    }, 1000);
  }
  function uhrStoppen(){ if(W && W.uhrId){ clearInterval(W.uhrId); W.uhrId=null; } W && (W.bis=null); }

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
          selbst:new Array(o.folge.length), mpunkte:new Array(o.folge.length),
          mix:o.folge.map(function(e){
            return e.art==='ordnen' ? mischen(e.a.teile.length) : null; }) };
    laeuft = false;
    malen();
  }

  window.sprechenBlock = function(id){
    var niveau = W ? W.niveau : 'A1', d = datenVon(niveau); if(!d) return;
    var b = blockVon(d,id); if(!b) return;
    oeffnen();
    starten({ niveau:niveau, daten:d, modus:'block', topf:'b', id:id,
      titel:'Stufe '+b.stufe+' — '+b.titel, unter:b.kurz,
      folge:b.aufgaben.map(function(a){ return { a:a, art:a.art }; }),
      max:b.aufgaben.length });
  };

  window.sprechenRunde = function(teilNr, rundeId){
    var niveau = W ? W.niveau : 'A1', d = datenVon(niveau); if(!d) return;
    var t = teilVon(d, teilNr); if(!t) return;
    var r = null; t.runden.forEach(function(x){ if(x.id===rundeId) r=x; });
    if(!r) return;
    oeffnen();
    starten({ niveau:niveau, daten:d, modus:'runde', topf:teilNr, id:rundeId,
      titel:'Teil '+t.nr+' — '+t.name,
      unter:'Runde '+(t.runden.indexOf(r)+1)+' von '+t.runden.length,
      folge:folgeAusRunde(t, r), max:maxVon(t,r) });
  };

  function folgeAusRunde(t, r){
    if(t.art==='vorstellen') return [{ a:r, art:'vorstellen', runde:r }];
    return r.karten.map(function(k){
      return { a:r, karte:k, thema:r.thema, art:t.art, runde:r }; });
  }

  window.sprechenLauf = function(id){
    var niveau = W ? W.niveau : 'A1', d = datenVon(niveau); if(!d) return;
    var Lf = laufVon(d,id); if(!Lf) return;
    oeffnen();
    var folge = [];
    Lf.teile.forEach(function(t){
      if(t.art==='vorstellen') folge.push({ a:t, art:'vorstellen', runde:t });
      else t.karten.forEach(function(k){
        folge.push({ a:t, karte:k, thema:t.thema, art:t.art, runde:t }); });
    });
    starten({ niveau:niveau, daten:d, modus:'lauf', topf:'l', id:id,
      titel:Lf.titel, unter:'Alle drei Teile · '+(Lf.minuten||d.minuten)+' Minuten',
      folge:folge, max:laufMax(Lf) });
    uhrStarten(Lf.minuten || d.minuten);
    kopfMalen();
  };

  /* ---------- Übersicht ---------- */

  window.sprechenStart = function(niveau){
    var d = datenVon(niveau); if(!d) return;
    uhrStoppen(); oeffnen();
    W = { niveau:niveau, daten:d, modus:'plan', titel:'Sprechen — '+d.pruefung,
          unter:d.punkte+' Punkte in der Prüfung · circa '+d.minuten+' Minuten' };

    var gesamt = window.sprechenProzent(niveau);
    var naechst = window.sprechenNaechstes(niveau);

    var h = '<div class="pl-intro"><h2>Dein Weg zum Sprechen-Teil</h2>'
      + '<p>Sprechen ist der Teil, vor dem die meisten Angst haben — dabei ist er der '
      + 'am besten planbare. Es gibt nur drei Aufgaben, und alle drei folgen einem festen Muster. '
      + 'Wer die Muster kann, muss am Prüfungstag nur noch einsetzen. '
      + 'Übe laut. Wirklich laut. Im Kopf sprechen hilft nicht.</p></div>';

    if(naechst){
      h += '<button class="pl-dran" onclick="'+naechst.klick+'">'
        + '<span class="pl-dran-z">👉</span>'
        + '<span class="pl-dran-t"><span>Hier weitermachen</span><b>'+E(naechst.was)+'</b></span>'
        + '<span class="pl-dran-g">Los →</span></button>';
    } else {
      h += '<div class="pl-fertig">🏆 Du hast alles einmal geschafft. '
        + 'Sprich die Karten ruhig nochmal — jedes Mal kommt der Satz schneller.</div>';
    }

    d.stufen.forEach(function(st){
      var inhalt = '';
      if(st.nr===1 || st.nr===2){
        inhalt = '<div class="pl-karten">' + d.bloecke.filter(function(b){ return b.stufe===st.nr; })
          .map(function(b){
            var s = blockStand(niveau,b);
            return '<button class="pl-karte pl-f-'+E(b.farbe)+(s.punkte>=s.max?' voll':'')
              + '" onclick="sprechenBlock(\''+b.id+'\')">'
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
            return '<button class="pl-r'+kl+'" onclick="sprechenRunde('+t.nr+',\''+r.id+'\')">'
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
            + '" onclick="sprechenLauf(\''+Lf.id+'\')">'
            + '<span class="pl-karte-z">⏱️</span>'
            + '<span class="pl-karte-t"><b>'+E(Lf.titel)+'</b>'
            +   '<span>Alle drei Teile · '+(Lf.minuten||d.minuten)+' Minuten</span></span>'
            + '<span class="pl-karte-p">'+(s.gemacht ? s.punkte+'/'+s.max : 'noch offen')+'</span>'
            + '<span class="pl-karte-bar"><i style="width:'+Math.max(2,s.prozent)+'%"></i></span>'
            + '<span class="pl-karte-ziel">Vorstellen, fragen, bitten — hintereinander, '
            +   'mit Uhr. Genau die 15 Minuten vom Prüfungstag.</span></button>';
        }).join('') + '</div>';
      }
      h += '<section class="pl-stufe"><div class="pl-stufe-kopf">'
        + '<span class="pl-stufe-n">'+st.nr+'</span>'
        + '<div><b>'+st.zeichen+' '+E(st.titel)+'</b><p>'+E(st.was)+'</p></div></div>'
        + inhalt + '</section>';
    });

    document.getElementById('psKopf').innerHTML = '<div class="pl-kopf">'
      + '<button class="pl-zu" onclick="sprechenSchliessen()" aria-label="Schließen">✕</button>'
      + '<div class="pl-kopf-m"><b>'+E(W.titel)+'</b><span>'+E(W.unter)+'</span></div>'
      + '<span class="pl-kopf-p">'+gesamt+' %</span></div>';
    document.getElementById('psBody').innerHTML = h;
  };

  /* ---------- Overlay ---------- */

  function oeffnen(){
    if(window.trainerStil) window.trainerStil();
    stil();
    var o = document.getElementById('psOv');
    if(!o){
      o = document.createElement('div'); o.id='psOv';
      o.innerHTML = '<div id="psKopf"></div><div id="psBody"></div>';
      document.body.appendChild(o);
    }
    o.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  window.sprechenSchliessen = function(){
    uhrStoppen(); aufnahmeStoppen();
    try{ if(window.sagenStopp) window.sagenStopp();
         else if(window.speechSynthesis) speechSynthesis.cancel(); }catch(e){}
    var o = document.getElementById('psOv');
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
      var o = document.getElementById('psOv');
      if(o && o.style.display==='block') window.sprechenSchliessen();
    }
  });

  /* ---------- Aussehen ----------
     Das Grundgerüst (pl-) kommt vom Lesen-Trainer. Hier steht nur,
     was es dort nicht gibt: die Prüfungskarten, die Aufnahme und
     der Selbstcheck.                                              */

  var gestylt = false;
  function stil(){
    if(gestylt) return; gestylt = true;
    var s = document.createElement('style'); s.textContent = CSS; document.head.appendChild(s);
  }

  var CSS = [
'#psOv{ display:none; position:fixed; inset:0; z-index:9000; overflow:auto;',
'  background:radial-gradient(1100px 620px at 12% -8%, #E4F7FA 0%, transparent 62%),',
'    radial-gradient(900px 520px at 92% 4%, #FFF1C9 0%, transparent 58%), #FFF8EC }',
'#psKopf{ position:sticky; top:0; z-index:10 }',
'#psBody{ max-width:820px; margin:0 auto; padding:18px 16px 90px }',

/* ---- Prüfungskarten ---- */
'.sp-karte{ background:#fff; border:2px solid #28353B; border-radius:16px; overflow:hidden;',
'  margin-bottom:16px; box-shadow:0 18px 38px -24px rgba(40,53,59,.7) }',
'.sp-karte-kopf{ background:#28353B; padding:11px 18px }',
'.sp-karte-kopf span{ display:block; font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#9FB3BC }',
'.sp-karte-kopf b{ display:block; color:#fff; font-family:"Space Grotesk",sans-serif;',
'  font-size:16px; font-weight:800; margin-top:2px }',

'.sp-stich{ display:flex; flex-wrap:wrap; gap:9px; padding:20px 18px 6px }',
'.sp-stich-w{ background:#FFF8E0; border:1.5px solid #EEE7D8; border-radius:11px;',
'  padding:9px 15px; font-family:"Space Grotesk",sans-serif; font-size:16px; font-weight:800 }',
'.sp-extra{ display:grid; gap:10px; padding:14px 18px 20px }',
'@media(min-width:520px){ .sp-extra{ grid-template-columns:1fr 1fr } }',
'.sp-extra-z{ background:#F4FBFC; border-left:4px solid #35AFD0; border-radius:10px; padding:11px 14px }',
'.sp-extra-z b{ display:block; font-size:11px; font-weight:800; letter-spacing:.09em;',
'  text-transform:uppercase; color:#35719A }',
'.sp-extra-z span{ display:block; font-size:16px; font-weight:700; margin-top:3px }',

'.sp-thema{ padding:18px 18px 0; font-size:11px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#8A97A0; text-align:center }',
'.sp-stichwort{ padding:6px 18px 24px; text-align:center;',
'  font-family:"Space Grotesk",sans-serif; font-size:34px; font-weight:800; color:#1A1A1A }',
'.sp-bild{ text-align:center; padding:24px 18px 4px }',
'.sp-bild span{ font-size:74px; line-height:1 }',
'.sp-gegenstand{ padding:2px 18px 24px; text-align:center;',
'  font-family:"Space Grotesk",sans-serif; font-size:24px; font-weight:800 }',

/* ---- Auftrag ---- */
'.sp-auftrag{ background:#fff; border:1.5px solid #EEE7D8; border-left:5px solid #E39A00;',
'  border-radius:16px; padding:14px 18px; margin-bottom:14px }',
'.sp-auftrag span{ display:block; font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#8A5C00; margin-bottom:6px }',
'.sp-auftrag ul{ margin:0; padding-left:20px }',
'.sp-auftrag li{ font-size:15.5px; line-height:1.6; margin-bottom:3px }',

/* ---- Aufnahme ---- */
'.sp-rec{ background:#fff; border:1.5px solid #EEE7D8; border-radius:18px;',
'  padding:18px; text-align:center; margin-bottom:14px }',
'.sp-rec-btn{ display:inline-flex; align-items:center; gap:11px; border:0; cursor:pointer;',
'  background:#D83636; color:#fff; border-radius:50px; padding:14px 26px;',
'  font-family:inherit; font-size:15.5px; font-weight:800;',
'  box-shadow:0 10px 24px -12px rgba(216,54,54,.9); transition:transform .12s }',
'.sp-rec-btn:active{ transform:scale(.97) }',
'.sp-rec-p{ width:13px; height:13px; border-radius:50%; background:#fff; flex:none }',
'.sp-rec.laeuft .sp-rec-btn{ background:#28353B; box-shadow:0 10px 24px -12px rgba(40,53,59,.9) }',
'.sp-rec.laeuft .sp-rec-p{ border-radius:3px; animation:spPuls 1s ease-in-out infinite }',
'@keyframes spPuls{ 0%,100%{ opacity:1 } 50%{ opacity:.35 } }',
'.sp-rec-info{ font-size:13.5px; color:#5B6A70; margin-top:11px; line-height:1.55 }',
'.sp-rec audio{ width:100%; margin-top:13px }',

/* ---- Musterlösung ---- */
'.sp-muster{ background:#F4FBFC; border:1.5px solid #CDEAF1; border-radius:18px;',
'  padding:15px 17px; margin-bottom:14px }',
'.sp-muster-t{ display:block; font-size:10.5px; font-weight:800; letter-spacing:.13em;',
'  text-transform:uppercase; color:#35719A; margin-bottom:10px }',
'.sp-m-z{ display:flex; align-items:flex-start; gap:12px; padding:10px 0;',
'  border-top:1px solid #DCEDF2 }',
'.sp-m-z:first-of-type{ border-top:0; padding-top:0 }',
'.sp-m-tx{ flex:1; min-width:0 }',
'.sp-m-tx b{ display:block; font-size:11.5px; font-weight:800; letter-spacing:.06em;',
'  text-transform:uppercase; color:#8A97A0 }',
'.sp-m-tx p{ margin:3px 0 0; font-size:16px; line-height:1.6 }',
'.sp-hoer{ flex:none; width:42px; height:42px; border-radius:13px; border:1.5px solid #A6DAE7;',
'  background:#fff; cursor:pointer; font-size:19px; transition:transform .12s, background .12s }',
'.sp-hoer:hover{ background:#DFF4F8; transform:translateY(-1px) }',
'.sp-hoer:active{ transform:translateY(0) }',

/* ---- Selbstcheck ---- */
'.sp-check{ background:#fff; border:1.5px solid #EEE7D8; border-radius:18px;',
'  padding:15px 17px; margin-bottom:14px }',
'.sp-check-t{ display:block; font-size:13.5px; font-weight:700; color:#5B6A70; margin-bottom:12px }',
'.sp-c-z{ padding:11px 0; border-top:1px solid #F0EAE0 }',
'.sp-c-z:first-of-type{ border-top:0; padding-top:0 }',
'.sp-c-z b{ display:block; font-size:14.5px; font-weight:800; margin-bottom:8px }',
'.sp-c-z b i{ font-style:normal; font-size:11.5px; font-weight:800; color:#8A97A0 }',
'.sp-c-w{ display:grid; gap:7px }',
'@media(min-width:520px){ .sp-c-w{ grid-template-columns:repeat(3,1fr) } }',
'.sp-c-b{ display:flex; align-items:center; gap:8px; border:1.5px solid #EEE7D8; background:#fff;',
'  border-radius:13px; padding:10px 13px; cursor:pointer; font-family:inherit;',
'  font-size:14px; font-weight:700; text-align:left; transition:border-color .12s, background .12s }',
'.sp-c-b span{ width:24px; height:24px; flex:none; border-radius:8px; background:#F4F1EA;',
'  display:grid; place-items:center; font-size:13px; font-weight:800 }',
'.sp-c-b:hover{ border-color:#35AFD0 }',
'.sp-c-b.an{ border-color:#28353B; background:#FFFCF5 }',
'.sp-c-b.an span{ background:#28353B; color:#fff }',

/* Der Weiter-Knopf ist grau, solange nicht abgehakt wurde. */
'.pl-weiter.aus{ background:#E4DCCB; color:#8A97A0; box-shadow:none; cursor:default }'
].join('\n');

})();
