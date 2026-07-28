/* ============================================================
   deutschoderwas club — DER VOKABELTRAINER

   Was hier passiert:

   1. SAMMELN
      Jedes Wort, das die Schülerin irgendwo im Club lernt, landet
      automatisch hier: aus dem Stufenkurs (a1.js, a2.js), aus den
      Wortschatzthemen (uebungen.js) und aus den Live-Stunden.
      Niemand muss etwas eintragen — die Sammlung wächst mit.

   2. RUNDEN ZU ACHT
      Wörter werden nie einzeln abgefragt, sondern in Achtergruppen
      aus einem Thema. Acht ist die Zahl, die man sich in einer
      Sitzung wirklich merkt.

   3. VIELE WEGE ZU EINEM WORT
      Wortkarte mit Bild · Bild zuordnen · Bedeutung · Wort finden ·
      Lücke im Beispielsatz · Paare · Hören · Tippen · der/die/das.
      Jedes Wort begegnet einem in der Runde mehrfach, jedes Mal
      anders. Falsches kommt am Ende noch einmal.

   4. WIEDERHOLEN NACH PLAN
      Fünf Fächer (Leitner). Richtig → das Wort kommt später wieder,
      falsch → früher. Oben steht immer, was heute dran ist.

   5. ERINNERN
      Wer einen Tag aussetzt, sieht es hier und auf der Startseite.
      Die E-Mail dazu ist vorbereitet (window.vokabelStand liefert
      alle Zahlen), aber noch nicht scharf geschaltet.

   Gebraucht: uebungen.js
   Freiwillig: a1.js · a2.js · stimmen.js · klang.js · marke.css
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
  function heute(){ var d=new Date();
    return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2); }
  function tagPlus(n){ var d=new Date(); d.setDate(d.getDate()+n);
    return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2); }
  function tageZwischen(a,b){
    try{ return Math.round((new Date(b)-new Date(a))/86400000); }catch(e){ return 0; }
  }
  function mix(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t; } return a; }
  function klang(n){ try{ if(window.klang) window.klang(n); }catch(e){} }
  function sprich(text, fertig){
    try{
      if(window.sagen) return window.sagen(text,{ fertig:fertig||null });
      if(!window.speechSynthesis){ if(fertig) fertig(); return; }
      speechSynthesis.cancel();
      var u=new SpeechSynthesisUtterance(text); u.lang='de-DE'; u.rate=.95;
      if(fertig){ u.onend=fertig; u.onerror=fertig; }
      speechSynthesis.speak(u);
    }catch(e){ if(fertig) fertig(); }
  }
  /* Auf der Wortkarte: erst das Stichwort, kurze Pause, dann der
     Beispielsatz. Ohne Beispielsatz bleibt es beim Stichwort. */
  function sprichKarte(w){
    if(!w) return;
    var de=String(w.de||'').trim(), bsp=String(w.bsp||'').trim();
    if(!de) return;
    if(!bsp || bsp===de) return sprich(de);
    var weiter=false;
    sprich(de, function(){
      if(weiter) return; weiter=true;
      setTimeout(function(){ sprich(bsp); },420);
    });
  }
  /* Fester Text — die Übersetzung von konto.html tauscht ihn aus */
  function W(k,de){ return '<span data-i18n="'+k+'">'+de+'</span>'; }
  function WX(k,de){
    try{
      var l=localStorage.getItem('dow_lang')||'de';
      if(l==='de') return de;
      var o=(window.__I18N__||{})[k];
      if(o&&o[l]!=null) return String(o[l]).replace(/<[^>]+>/g,'');
    }catch(e){}
    return de;
  }

  /* Artikel und nacktes Wort trennen — für Artikelübung und Tippen */
  function teileWort(de){
    var m=String(de||'').match(/^(der|die|das)\s+(.+)$/i);
    if(m) return {art:m[1].toLowerCase(), wort:m[2]};
    return {art:null, wort:String(de||'')};
  }
  function slug(s){
    return String(s||'').toLowerCase()
      .replace(/^(der|die|das)\s+/,'')
      .replace(/[äÄ]/g,'ae').replace(/[öÖ]/g,'oe').replace(/[üÜ]/g,'ue').replace(/ß/g,'ss')
      .replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  }

  /* ============================================================
     1 — Woher die Wörter kommen
     ============================================================ */

  var GRUPPEN = null;   /* wird einmal gebaut und gemerkt */

  /* Aus den Übungen lässt sich ablesen, zu welchem Wort es ein
     echtes Foto gibt (bilder/wort/…). 196 der 343 Wörter haben eins. */
  function bildKarte(thema){
    var m={};
    (thema.exercises||[]).forEach(function(ex){
      if(!ex.img) return;
      if(ex.w && !m[ex.w]) m[ex.w]=ex.img;
      if(ex.type==='choice' && typeof ex.answer==='number'){
        var o=(ex.options||[])[ex.answer];
        if(o && !m[o]) m[o]=ex.img;
      }
    });
    return m;
  }

  function ausWortschatz(){
    var U=window.UEBUNGEN;
    if(!U || !U.skills) return [];
    var sk=U.skills.filter(function(s){ return s.id==='wortschatz'; })[0];
    if(!sk) return [];
    return (sk.themes||[]).map(function(t){
      var bilder=bildKarte(t);
      return {
        id:      'ws-'+t.id,
        quelle:  'wortschatz',
        thema:   t.id,
        t:       t.title||t.id,
        niveau:  t.level||'',
        emoji:   t.emoji||'🃏',
        bild:    'bilder/thema/'+t.id+'-s.jpg',
        woerter: (t.words||[]).map(function(w){
          return {
            k:     'ws|'+t.id+'|'+w.de,
            de:    w.de,
            info:  w.info||'',
            emoji: w.emoji||'',
            bild:  bilder[w.de]||null,
            deko:  'bilder/thema/'+t.id+'-s.jpg',
            bsp:   null
          };
        })
      };
    }).filter(function(g){ return g.woerter.length; });
  }

  /* Welches vorhandene Foto passt zu welcher Kurslektion.
     Die Lektionen heißen anders als die Themenbilder — ohne diese
     Zuordnung stünde auf jeder Kurskarte nur ein Hut. */
  var LEKTIONSBILD = {
    /* A1 */
    'vorstellen':'menschen', 'familie':'familie', 'einkaufen':'einkaufen', 'wohnung':'wohnen',
    'tag':'stadt', 'freizeit':'kultur', 'schule':'bildung', 'beruf':'buero', 'amt':'amt',
    'gesundheit':'gesundheit', 'unterwegs':'reisen', 'kundenservice':'kunden',
    'kleidung':'einkaufen', 'feste':'kultur',
    /* A2 */
    'ankommen':'menschen', 'wohnung-suchen':'wohnen', 'im-haus':'wohnen',
    'arbeit-finden':'bewerbung', 'im-betrieb':'buero', 'beim-amt':'amt',
    'geld-und-vertraege':'einkaufen', 'kinder-und-schule':'familie',
    'freizeit-und-kontakte':'kultur', 'medien-und-technik':'medien',
    'essen-und-einladen':'essen', 'plaene-und-zukunft':'menschen'
  };

  /* Der Stufenkurs: jede Lektion ist eine eigene kleine Sammlung.
     Die Chunks haben keinen Artikel und kein Foto, dafür einen
     echten Beispielsatz — daraus wird die Lückenaufgabe. */
  function ausKurs(niveau){
    var K=window[niveau];
    if(!K || !K.lektionen) return [];
    return K.lektionen.map(function(L){
      var lbild='bilder/thema/'+(L.bild||LEKTIONSBILD[L.id]||L.id)+'-s.jpg';
      return {
        id:      niveau.toLowerCase()+'-'+L.id,
        quelle:  'kurs',
        kurs:    niveau,
        nr:      L.nr,
        t:       L.t,
        niveau:  niveau,
        emoji:   '🎓',
        bild:    lbild,
        woerter: (L.chunks||[]).map(function(c){
          return {
            k:     niveau.toLowerCase()+'|'+L.id+'|'+c.de,
            de:    c.de,
            info:  c.hi||'',
            emoji: '',
            bild:  null,
            deko:  lbild,
            bsp:   c.bsp||null
          };
        })
      };
    }).filter(function(g){ return g.woerter.length; });
  }

  /* Aus den gebuchten Live-Stunden — das war der alte Trainer */
  function ausStunden(){
    var liste=[];
    try{ if(typeof window.collectVocab==='function') liste=window.collectVocab()||[]; }catch(e){}
    if(!liste.length) return [];
    return [{
      id:'stunden', quelle:'stunde', t:'Aus deinen Live-Stunden', niveau:'', emoji:'🎧',
      bild:'bilder/thema/live-unterricht-s.jpg',
      woerter: liste.map(function(v){
        return { k:'st|'+v.de, de:v.de, info:v.info||v.from||'', emoji:'',
                 bild:null, deko:'bilder/thema/live-unterricht-s.jpg', bsp:null };
      })
    }];
  }

  function gruppen(){
    if(GRUPPEN) return GRUPPEN;
    GRUPPEN = [].concat(ausKurs('A1'), ausKurs('A2'), ausWortschatz(), ausStunden());
    return GRUPPEN;
  }
  function gruppeVon(id){
    var g=gruppen(); for(var i=0;i<g.length;i++) if(g[i].id===id) return g[i];
    return null;
  }
  function wortVon(k){
    var g=gruppen();
    for(var i=0;i<g.length;i++) for(var j=0;j<g[i].woerter.length;j++)
      if(g[i].woerter[j].k===k) return g[i].woerter[j];
    return null;
  }

  /* ============================================================
     2 — Die Sammlung: was gehört mir schon?
     ============================================================ */

  var FACH = [0, 1, 2, 4, 8, 16, 32];   /* Tage bis zur Wiederholung */

  function stand(){
    var s=J('vok',null)||{};
    s.w      = s.w || {};        /* Schlüssel → {f:Fach, faellig, r:richtig, x:falsch} */
    s.dabei  = s.dabei || {};    /* Gruppen, die die Schülerin selbst dazugenommen hat */
    s.tag    = s.tag || null;    /* letzter Lerntag */
    s.serie  = s.serie || 0;
    s.heute  = s.heute || 0;
    s.ziel   = s.ziel || 20;
    return s;
  }
  function speichern(s){ S('vok',s); }

  /* Welche Gruppen sind in der Sammlung?
     Automatisch: alles, was im Kurs oder in den Wortschatzübungen
     schon angefasst wurde. Dazu, was die Schülerin selbst wählt. */
  function istDabei(g){
    var s=stand();
    if(s.dabei[g.id]) return true;
    if(g.quelle==='stunde') return true;

    if(g.quelle==='kurs'){
      var k=J('kurs',null)||{};
      var buch=k[String(g.kurs||'').toLowerCase()]||{};
      var x=buch[g.nr]||{};
      return !!(x.woerter || x.gram || x.dialog || (x.ueb||0)>0);
    }
    if(g.quelle==='wortschatz'){
      var ub=J('ub',{})||{};
      var t=((ub.themes||{})['wortschatz|'+g.thema]||{});
      if((t.best||0)>0) return true;
    }
    /* Wörter, die schon einmal geübt wurden, holen ihre Gruppe mit */
    var w=stand().w, i;
    for(i=0;i<g.woerter.length;i++) if(w[g.woerter[i].k]) return true;
    return false;
  }

  function meineGruppen(){ return gruppen().filter(istDabei); }

  function dazunehmen(id){
    var s=stand(); s.dabei[id]=heute(); speichern(s);
    zeichne();
    try{ if(window.toast) toast('Dazugenommen — die Wörter warten in deiner Sammlung.'); }catch(e){}
  }
  window.vokGruppeDazu=dazunehmen;

  /* Alle Wörter meiner Sammlung */
  function meineWoerter(){
    var out=[];
    meineGruppen().forEach(function(g){ g.woerter.forEach(function(w){ out.push({w:w,g:g}); }); });
    return out;
  }
  function faelligeWoerter(){
    var s=stand(), h=heute();
    return meineWoerter().filter(function(p){
      var e=s.w[p.w.k];
      if(!e) return false;                       /* neu ≠ fällig */
      return !e.faellig || e.faellig<=h;
    });
  }
  function neueWoerter(){
    var s=stand();
    return meineWoerter().filter(function(p){ return !s.w[p.w.k]; });
  }
  function gelernteWoerter(){
    var s=stand();
    return meineWoerter().filter(function(p){ var e=s.w[p.w.k]; return e && e.f>=4; });
  }

  /* Wie weit ist eine Gruppe? */
  function gruppeProzent(g){
    var s=stand(), n=g.woerter.length, sum=0;
    if(!n) return 0;
    g.woerter.forEach(function(w){
      var e=s.w[w.k];
      sum += e ? Math.min(100, Math.round(e.f/5*100)) : 0;
    });
    return Math.round(sum/n);
  }

  /* Achterpakete */
  function pakete(g){
    var out=[], i;
    for(i=0;i<g.woerter.length;i+=8) out.push(g.woerter.slice(i,i+8));
    return out;
  }
  function paketProzent(p){
    var s=stand(), sum=0;
    p.forEach(function(w){ var e=s.w[w.k]; sum += e?Math.min(100,Math.round(e.f/5*100)):0; });
    return p.length?Math.round(sum/p.length):0;
  }

  /* ---------- Tagesstand, Serie, Erinnerung ---------- */
  function tagBuchen(anzahl){
    var s=stand(), h=heute();
    if(s.tag!==h){
      var d = s.tag ? tageZwischen(s.tag,h) : 99;
      s.serie = (d===1) ? (s.serie||0)+1 : 1;
      s.tag   = h;
      s.heute = 0;
    }
    s.heute += anzahl||0;
    speichern(s);
  }

  /* Alles, was eine Erinnerung (in der Seite oder später per E-Mail)
     wissen muss. Auch von außen abrufbar. */
  window.vokabelStand = function(){
    var s=stand();
    var pause = s.tag ? tageZwischen(s.tag, heute()) : null;
    return {
      gesamt:   meineWoerter().length,
      neu:      neueWoerter().length,
      faellig:  faelligeWoerter().length,
      gelernt:  gelernteWoerter().length,
      heute:    (s.tag===heute()) ? (s.heute||0) : 0,
      ziel:     s.ziel||20,
      serie:    s.serie||0,
      letzterTag: s.tag,
      pauseTage: pause,
      erinnern: (pause!=null && pause>=2)   /* ab einem ganzen Tag ohne Üben */
    };
  };

  /* ============================================================
     2b — Der Abgleich mit dem Konto

     Der Fortschritt liegt zuerst im Browser, damit alles sofort
     reagiert. Danach wandert er in zwei Tabellen, die es in der
     Datenbank schon gibt:

       vokabel_status  ein Wort, sein Fach, wann es wieder dran ist
       vokabel_tag     ein Tag, wie viele Wörter geschafft

     Zwei Gründe: der Fortschritt überlebt einen Gerätewechsel, und
     die Erinnerungs-Mail kann sehen, wann zuletzt geübt wurde.
     Ohne Anmeldung passiert hier einfach nichts.
     ============================================================ */

  function konto(){
    try{ return (window.sb && window.user && window.user.id) ? window.user.id : null; }
    catch(e){ return null; }
  }

  function hoch(zeilen, tabelle, konflikt){
    var uid=konto(); if(!uid || !zeilen.length) return;
    try{
      var p=window.sb.from(tabelle).upsert(zeilen,{onConflict:konflikt});
      if(p && p.then) p.then(function(){}, function(){});
    }catch(e){}
  }

  function hinauf(woerter){
    var uid=konto(); if(!uid) return;
    var s=stand(), jetzt=new Date().toISOString();
    hoch(woerter.map(function(w){
      var e=s.w[w.k]||{};
      return {
        user_id: uid, vok_id: w.k,
        stufe: e.f||0,
        faellig_am: e.faellig||heute(),
        richtig: e.r||0, falsch: e.x||0,
        letzte: jetzt,
        quelle: String(w.k).split('|')[0]||'',
        gelernt: (e.f||0)>=4
      };
    }), 'vokabel_status', 'user_id,vok_id');

    var st=window.vokabelStand();
    hoch([{ user_id:uid, datum:heute(), geschafft:st.heute, ziel:st.ziel }],
         'vokabel_tag', 'user_id,datum');
  }

  /* Beim Öffnen: was auf einem anderen Gerät gelernt wurde, dazuholen.
     Der Browser gewinnt bei Wörtern, die er schon kennt — er ist näher
     dran. Nur Lücken werden gefüllt. */
  var runtergeholt=false;
  function herunter(fertig){
    var uid=konto();
    if(!uid || runtergeholt){ if(fertig) fertig(); return; }
    runtergeholt=true;
    var offen=2, s=stand(), etwas=false;
    function fertigTeil(){
      if(--offen>0) return;
      if(etwas) speichern(s);
      if(fertig) fertig();
    }
    try{
      window.sb.from('vokabel_status').select('vok_id,stufe,faellig_am,richtig,falsch')
        .eq('user_id',uid).then(function(r){
          (r&&r.data||[]).forEach(function(z){
            if(s.w[z.vok_id]) return;
            s.w[z.vok_id]={ f:z.stufe||0, faellig:z.faellig_am||heute(), r:z.richtig||0, x:z.falsch||0 };
            etwas=true;
          });
          fertigTeil();
        }, fertigTeil);

      window.sb.from('vokabel_tag').select('datum,geschafft,ziel')
        .eq('user_id',uid).order('datum',{ascending:false}).limit(60).then(function(r){
          var t=(r&&r.data)||[];
          if(t.length){
            /* Serie: wie viele Tage am Stück, vom letzten Lerntag zurück */
            var serie=1, i;
            for(i=1;i<t.length;i++){
              if(tageZwischen(t[i].datum, t[i-1].datum)===1) serie++;
              else break;
            }
            if(!s.tag || t[0].datum > s.tag){
              s.tag   = t[0].datum;
              s.heute = t[0].geschafft||0;
              etwas   = true;
            }
            if(serie>(s.serie||0)){ s.serie=serie; etwas=true; }
            if(t[0].ziel && !s.ziel){ s.ziel=t[0].ziel; etwas=true; }
          }
          fertigTeil();
        }, fertigTeil);
    }catch(e){ offen=0; if(fertig) fertig(); }
  }

  /* ============================================================
     3 — Eine Runde bauen
     ============================================================ */

  var R = null;   /* die laufende Runde */

  function andereWoerter(pool, nicht, n, feld){
    var a=mix(pool.filter(function(w){
      if(w.k===nicht.k) return false;
      if(feld && !w[feld]) return false;
      return true;
    }));
    return a.slice(0,n);
  }

  function moegliche(w, pool){
    var t=[];
    if(w.bild) t.push('bild');
    if(w.info){ t.push('bedeutung'); t.push('wort'); }
    if(w.bsp && w.bsp.indexOf(teileWort(w.de).wort)>=0) t.push('luecke');
    if(teileWort(w.de).art) t.push('artikel');
    t.push('hoeren');
    t.push('tippen');
    /* nur was mit genug Ablenkern geht */
    return t.filter(function(x){
      if(x==='bild')      return andereWoerter(pool,w,3).length>=3;
      if(x==='bedeutung') return andereWoerter(pool,w,3,'info').length>=3;
      if(x==='wort')      return andereWoerter(pool,w,3).length>=3;
      if(x==='hoeren')    return andereWoerter(pool,w,3).length>=3;
      if(x==='luecke')    return andereWoerter(pool,w,3).length>=3;
      return true;
    });
  }

  /* Wie oft ein Weg drankommen soll. Tippen ist der schwerste und
     kommt am seltensten — sonst fühlt sich die Runde nach Prüfung an.
     Bild und Lücke sind die schönsten und kommen am häufigsten. */
  var GEWICHT = { bild:5, luecke:4, bedeutung:3, wort:3, hoeren:3, artikel:2, tippen:1 };

  function zieheTyp(liste){
    var topf=[], i, j;
    for(i=0;i<liste.length;i++){
      var n=GEWICHT[liste[i]]||1;
      for(j=0;j<n;j++) topf.push(liste[i]);
    }
    return topf[Math.floor(Math.random()*topf.length)];
  }

  function aufgabeBauen(w, pool, meide){
    var t=moegliche(w,pool).filter(function(x){ return x!==meide; });
    if(!t.length) t=['tippen'];
    var typ=zieheTyp(t);
    var a={typ:typ, w:w};

    if(typ==='bild' || typ==='wort' || typ==='hoeren'){
      var falsch=andereWoerter(pool,w,3);
      a.optionen=mix([w].concat(falsch));
      a.richtig=a.optionen.indexOf(w);
    } else if(typ==='bedeutung'){
      var f2=andereWoerter(pool,w,3,'info');
      a.optionen=mix([w].concat(f2));
      a.richtig=a.optionen.indexOf(w);
    } else if(typ==='luecke'){
      var f3=andereWoerter(pool,w,3);
      a.optionen=mix([w].concat(f3));
      a.richtig=a.optionen.indexOf(w);
      a.satz=w.bsp.split(teileWort(w.de).wort).join('___');
    } else if(typ==='artikel'){
      a.optionen=[{de:'der'},{de:'die'},{de:'das'}];
      a.richtig=['der','die','das'].indexOf(teileWort(w.de).art);
    }
    return a;
  }

  /* Ein Paare-Spiel aus vier Wörtern */
  function paareBauen(pool){
    var mit=pool.filter(function(w){ return w.info; });
    if(mit.length<4) return null;
    var v=mix(mit).slice(0,4);
    return { typ:'paare', paare:v, links:mix(v.slice()), rechts:mix(v.slice()), offen:4, gewaehlt:null };
  }

  function rundeBauen(gruppeId, paketNr){
    var g=gruppeVon(gruppeId); if(!g) return null;
    var ps=pakete(g), p=ps[paketNr]; if(!p) return null;
    var s=stand();
    var neu=p.filter(function(w){ return !s.w[w.k]; });

    var aufgaben=[];
    /* Erst die neuen Wörter als Karte zeigen */
    neu.forEach(function(w){ aufgaben.push({typ:'karte', w:w}); });

    /* Dann zwei Durchgänge, jedes Mal ein anderer Weg */
    var d1=mix(p).map(function(w){ return aufgabeBauen(w,p,null); });
    var d2=mix(p).map(function(w){
      var vorher=null;
      for(var i=0;i<d1.length;i++) if(d1[i].w.k===w.k) vorher=d1[i].typ;
      return aufgabeBauen(w,p,vorher);
    });
    aufgaben=aufgaben.concat(d1);
    var pa=paareBauen(p);
    if(pa) aufgaben.push(pa);
    aufgaben=aufgaben.concat(d2);

    return {
      gruppe:g, paketNr:paketNr, woerter:p,
      aufgaben:aufgaben, i:0,
      richtig:0, falsch:0,
      fehler:{},              /* Wortschlüssel → true */
      nachschlag:[],          /* falsch beantwortete Aufgaben */
      beantwortet:false, gewaehlt:null, fertig:false
    };
  }

  /* ============================================================
     4 — Die Runde am Bildschirm
     ============================================================ */

  function ovBauen(){
    var o=el('vkOv');
    if(o) return o;
    o=document.createElement('div');
    o.id='vkOv';
    o.innerHTML=
      '<div class="vk-ov-kopf">'
      + '<button class="vk-x" onclick="vokRundeZu()" aria-label="Schließen">✕</button>'
      + '<div class="vk-fort"><i id="vkFort"></i></div>'
      + '<span class="vk-zaehler" id="vkZahl"></span>'
      + '</div>'
      + '<div class="vk-ov-mitte" id="vkMitte"></div>'
      + '<div class="vk-ov-fuss" id="vkFuss"></div>';
    document.body.appendChild(o);
    return o;
  }

  function fortschrittMalen(){
    var b=el('vkFort'), z=el('vkZahl');
    if(!R) return;
    var ges=R.aufgaben.length+R.nachschlag.length;
    var p=Math.round(R.i/Math.max(1,ges)*100);
    if(b) b.style.width=Math.min(100,p)+'%';
    if(z) z.textContent=Math.min(R.i+1,ges)+' / '+ges;
  }

  function bildOderZeichen(w, klasse, schmuck){
    if(w.bild) return '<span class="'+klasse+'"><img src="'+E(w.bild)+'" alt="" '
      + 'onerror="this.parentNode.classList.add(\'leer\');this.remove()"></span>';
    /* Wendungen haben kein eigenes Foto. Auf reinen Schaubildern zeigen wir
       dann das Foto ihrer Lektion — nie dort, wo das Bild die Frage ist. */
    if(schmuck && w.deko) return '<span class="'+klasse+' vk-deko"><img src="'+E(w.deko)+'" alt="" '
      + 'onerror="this.parentNode.classList.add(\'leer\');this.remove()"></span>';
    if(w.emoji) return '<span class="'+klasse+' zeichen">'+E(w.emoji)+'</span>';
    return '';
  }

  function knopf(text, fn, art){
    return '<button class="vk-btn'+(art?' '+art:'')+'" onclick="'+fn+'">'+text+'</button>';
  }

  function aufgabeMalen(){
    var m=el('vkMitte'), f=el('vkFuss');
    if(!m||!f||!R) return;
    fortschrittMalen();

    if(R.fertig) return endeMalen();

    var a=R.aufgaben[R.i] || R.nachschlag[R.i-R.aufgaben.length];
    if(!a){ R.fertig=true; return endeMalen(); }
    R.aktuell=a; R.beantwortet=false; R.gewaehlt=null;

    var w=a.w, tw=w?teileWort(w.de):null;
    var kopf='', koerper='', fuss='';

    if(a.typ==='karte'){
      kopf='<span class="vk-frage">'+W('vk_neu','Neues Wort')+'</span>';
      koerper='<div class="vk-karte">'
        + bildOderZeichen(w,'vk-karte-bild',true)
        + '<div class="vk-karte-tx">'
        +   '<button class="vk-hoer" onclick="vokSprich()" aria-label="Anhören">🔊</button>'
        +   '<b>'+E(w.de)+'</b>'
        +   (w.info?'<span class="vk-bed">'+E(w.info)+'</span>':'')
        +   (w.bsp?'<span class="vk-bsp">'+E(w.bsp)+'</span>':'')
        + '</div></div>';
      fuss=knopf(W('vk_verstanden','Verstanden')+' →','vokWeiter()','vk-btn-rot');
      setTimeout(function(){ sprichKarte(w); },180);
    }

    else if(a.typ==='bild'){
      kopf='<span class="vk-frage">'+W('vk_f_bild','Welches Wort gehört zum Bild?')+'</span>';
      koerper='<div class="vk-gross">'+bildOderZeichen(w,'vk-gross-bild')+'</div>'
        + optionen(a, function(o){ return E(o.de); });
    }

    else if(a.typ==='bedeutung'){
      kopf='<span class="vk-frage">'+W('vk_f_bed','Was bedeutet dieses Wort?')+'</span>';
      koerper='<div class="vk-wortgross">'+bildOderZeichen(w,'vk-mini',true)
        + '<b>'+E(w.de)+'</b>'
        + '<button class="vk-hoer" onclick="vokSprich()" aria-label="Anhören">🔊</button></div>'
        + optionen(a, function(o){ return E(o.info||o.de); });
    }

    else if(a.typ==='wort'){
      kopf='<span class="vk-frage">'+W('vk_f_wort','Welches Wort passt zu dieser Erklärung?')+'</span>';
      koerper='<div class="vk-erkl">'+E(w.info)+'</div>'
        + optionen(a, function(o){ return E(o.de); });
    }

    else if(a.typ==='hoeren'){
      kopf='<span class="vk-frage">'+W('vk_f_hoer','Hör zu — welches Wort war das?')+'</span>';
      koerper='<div class="vk-hoergross"><button class="vk-hoer vk-hoer-gross" onclick="vokSprich()">🔊</button></div>'
        + optionen(a, function(o){ return E(o.de); });
      setTimeout(function(){ sprich(w.de); },260);
    }

    else if(a.typ==='luecke'){
      kopf='<span class="vk-frage">'+W('vk_f_luecke','Welches Wort fehlt im Satz?')+'</span>';
      koerper='<div class="vk-satz">'+E(a.satz).replace(/___/g,'<i class="vk-luecke">?</i>')+'</div>'
        + optionen(a, function(o){ return E(teileWort(o.de).wort); });
    }

    else if(a.typ==='artikel'){
      kopf='<span class="vk-frage">'+W('vk_f_art','der, die oder das?')+'</span>';
      koerper='<div class="vk-wortgross">'+bildOderZeichen(w,'vk-mini')+'<b>'+E(tw.wort)+'</b></div>'
        + '<div class="vk-opt vk-opt-drei">'
        + a.optionen.map(function(o,i){
            return '<button class="vk-o" data-i="'+i+'" onclick="vokWaehle('+i+')">'+E(o.de)+'</button>';
          }).join('')
        + '</div>';
    }

    else if(a.typ==='tippen'){
      kopf='<span class="vk-frage">'+W('vk_f_tipp','Schreib das Wort — mit Artikel')+'</span>';
      koerper='<div class="vk-erkl">'+E(w.info||w.bsp||'')+'</div>'
        + (w.bild?'<div class="vk-gross klein">'+bildOderZeichen(w,'vk-gross-bild')+'</div>':'')
        + '<div class="vk-tipp"><input id="vkEin" type="text" autocomplete="off" autocapitalize="off" '
        +   'spellcheck="false" placeholder="'+E(WX('vk_tipp_ph','hier tippen …'))+'" '
        +   'oninput="vokTippt()" onkeydown="if(event.key===\'Enter\')vokPruefen()"></div>';
      fuss=knopf(W('vk_pruefen','Prüfen'),'vokPruefen()','vk-btn-rot vk-aus');
      setTimeout(function(){ var i=el('vkEin'); if(i) i.focus(); },80);
    }

    else if(a.typ==='paare'){
      kopf='<span class="vk-frage">'+W('vk_f_paare','Finde die Paare')+'</span>';
      koerper=paareMalen(a);
      fuss='';
    }

    if(!fuss && a.typ!=='paare') fuss=knopf(W('vk_pruefen','Prüfen'),'vokPruefen()','vk-btn-rot vk-aus');

    m.innerHTML='<div class="vk-block">'+kopf+koerper+'</div>';
    f.innerHTML=fuss;
  }

  function optionen(a, text){
    return '<div class="vk-opt">'
      + a.optionen.map(function(o,i){
          return '<button class="vk-o" data-i="'+i+'" onclick="vokWaehle('+i+')">'+text(o)+'</button>';
        }).join('')
      + '</div>';
  }

  function paareMalen(a){
    function spalte(liste, seite){
      return liste.map(function(w){
        var weg=a.weg&&a.weg[w.k];
        return '<button class="vk-p'+(weg?' vk-p-weg':'')+'" data-k="'+E(w.k)+'" data-s="'+seite+'" '
          + 'onclick="vokPaar(\''+E(w.k).replace(/'/g,"\\'")+'\',\''+seite+'\')"'+(weg?' disabled':'')+'>'
          + (seite==='l'?E(w.de):E(w.info))+'</button>';
      }).join('');
    }
    return '<div class="vk-paare">'
      + '<div class="vk-paare-s">'+spalte(a.links,'l')+'</div>'
      + '<div class="vk-paare-s">'+spalte(a.rechts,'r')+'</div>'
      + '</div>';
  }

  /* ---------- Antworten ---------- */

  window.vokSprich=function(){
    if(!R || !R.aktuell || !R.aktuell.w) return;
    if(R.aktuell.typ==='karte') return sprichKarte(R.aktuell.w);
    sprich(R.aktuell.w.de);
  };

  window.vokWaehle=function(i){
    if(!R || R.beantwortet) return;
    R.gewaehlt=i;
    var o=document.querySelectorAll('#vkMitte .vk-o');
    Array.prototype.forEach.call(o,function(b){ b.classList.toggle('vk-o-an', +b.dataset.i===i); });
    var k=document.querySelector('#vkFuss .vk-btn');
    if(k) k.classList.remove('vk-aus');
  };

  window.vokTippt=function(){
    var i=el('vkEin'), k=document.querySelector('#vkFuss .vk-btn');
    if(k) k.classList.toggle('vk-aus', !(i&&i.value.trim()));
  };

  function normal(s){
    return String(s||'').toLowerCase().trim()
      .replace(/\s+/g,' ')
      .replace(/[.!?,;:]/g,'');
  }

  window.vokPruefen=function(){
    if(!R || R.beantwortet) return;
    var a=R.aktuell, ok=false;

    if(a.typ==='tippen'){
      var ein=el('vkEin'); if(!ein||!ein.value.trim()) return;
      var soll=normal(a.w.de), ist=normal(ein.value);
      ok = (ist===soll) || (ist===normal(teileWort(a.w.de).wort) && !teileWort(a.w.de).art);
      a.eingabe=ein.value;
    } else {
      if(R.gewaehlt==null) return;
      ok = (R.gewaehlt===a.richtig);
    }
    antwortZeigen(ok);
  };

  function antwortZeigen(ok){
    var a=R.aktuell;
    R.beantwortet=true;
    if(ok){ R.richtig++; klang('richtig'); }
    else  { R.falsch++;  klang('falsch');
            if(a.w) R.fehler[a.w.k]=true;
            /* Was danebenging, kommt am Ende noch einmal — aber nur
               einmal. Sonst hört die Runde nie auf. */
            if(a.typ!=='karte' && !a.zweiteChance){
              a.zweiteChance=true;
              R.nachschlag.push(a);
            } }

    var o=document.querySelectorAll('#vkMitte .vk-o');
    Array.prototype.forEach.call(o,function(b){
      var i=+b.dataset.i;
      if(i===a.richtig) b.classList.add('vk-o-gut');
      else if(i===R.gewaehlt) b.classList.add('vk-o-schlecht');
      b.disabled=true;
    });
    var ein=el('vkEin');
    if(ein){ ein.disabled=true; ein.classList.add(ok?'gut':'schlecht'); }

    var loesung='';
    if(!ok && a.w){
      loesung='<span class="vk-loesung">'+W('vk_richtig_ist','Richtig ist')+': <b>'+E(a.w.de)+'</b>'
        + (a.w.info?' — '+E(a.w.info):'')+'</span>';
    }
    var f=el('vkFuss');
    if(f) f.innerHTML='<div class="vk-echo '+(ok?'gut':'schlecht')+'">'
      + '<span class="vk-echo-t">'+(ok?('✓ '+W('vk_gut','Richtig!')):('✕ '+W('vk_daneben','Daneben')))+'</span>'
      + loesung + '</div>'
      + knopf(W('vk_weiter','Weiter')+' →','vokWeiter()','vk-btn-rot');
    if(a.w) setTimeout(function(){ sprich(a.w.de); },120);
  }

  window.vokPaar=function(k,seite){
    if(!R) return;
    var a=R.aktuell; if(!a||a.typ!=='paare') return;
    a.weg=a.weg||{};
    if(a.weg[k]) return;

    if(!a.gewaehlt){ a.gewaehlt={k:k,s:seite}; markierePaar(k,seite,true); return; }
    if(a.gewaehlt.s===seite){ markierePaar(a.gewaehlt.k,a.gewaehlt.s,false); a.gewaehlt={k:k,s:seite}; markierePaar(k,seite,true); return; }

    if(a.gewaehlt.k===k){
      a.weg[k]=true; a.offen--; R.richtig++;
      klang('richtig');
      paareAuffrischen(a);
      if(a.offen<=0){
        R.beantwortet=true;
        var f=el('vkFuss');
        if(f) f.innerHTML='<div class="vk-echo gut"><span class="vk-echo-t">✓ '+W('vk_alle_paare','Alle Paare gefunden')+'</span></div>'
          + knopf(W('vk_weiter','Weiter')+' →','vokWeiter()','vk-btn-rot');
      }
    } else {
      R.falsch++; klang('falsch');
      var w1=wortVon(a.gewaehlt.k); if(w1) R.fehler[w1.k]=true;
      var b=document.querySelector('#vkMitte .vk-p[data-k="'+cssEsc(k)+'"][data-s="'+seite+'"]');
      if(b){ b.classList.add('vk-p-nein'); setTimeout(function(){ b.classList.remove('vk-p-nein'); },420); }
      markierePaar(a.gewaehlt.k,a.gewaehlt.s,false);
    }
    a.gewaehlt=null;
  };
  function cssEsc(s){ return String(s).replace(/["\\]/g,'\\$&'); }
  function markierePaar(k,s,an){
    var b=document.querySelector('#vkMitte .vk-p[data-k="'+cssEsc(k)+'"][data-s="'+s+'"]');
    if(b) b.classList.toggle('vk-p-an',!!an);
  }
  function paareAuffrischen(a){
    var m=el('vkMitte'); if(!m) return;
    var alt=m.querySelector('.vk-paare');
    if(alt){ var d=document.createElement('div'); d.innerHTML=paareMalen(a); alt.parentNode.replaceChild(d.firstChild,alt); }
  }

  window.vokWeiter=function(){
    if(!R) return;
    R.i++;
    var ges=R.aufgaben.length+R.nachschlag.length;
    if(R.i>=ges){ R.fertig=true; rundeBuchen(); return endeMalen(); }
    aufgabeMalen();
  };

  /* ---------- Ende einer Runde ---------- */

  function rundeBuchen(){
    var s=stand(), h=heute();
    R.woerter.forEach(function(w){
      var e=s.w[w.k]||{f:0,r:0,x:0};
      if(R.fehler[w.k]){ e.f=Math.max(0,(e.f||0)-1); e.x=(e.x||0)+1; }
      else             { e.f=Math.min(6,(e.f||0)+1); e.r=(e.r||0)+1; }
      e.faellig=tagPlus(FACH[e.f]||1);
      e.zuletzt=h;
      s.w[w.k]=e;
    });
    speichern(s);
    tagBuchen(R.woerter.length);
    hinauf(R.woerter);
    try{ if(window.xpDazu) window.xpDazu(R.richtig*2); }catch(e){}
  }

  function endeMalen(){
    var m=el('vkMitte'), f=el('vkFuss');
    var ges=R.richtig+R.falsch;
    var quote=ges?Math.round(R.richtig/ges*100):0;
    var g=R.gruppe, ps=pakete(g), naechste=(R.paketNr+1<ps.length)?(R.paketNr+1):null;
    var st=window.vokabelStand();

    if(m) m.innerHTML='<div class="vk-block vk-ende">'
      + '<div class="vk-ende-ring" style="--p:'+quote+'"><b>'+quote+'%</b></div>'
      + '<h2>'+(quote>=80?W('vk_stark','Das saß.'):W('vk_weiterso','Weiter so.'))+'</h2>'
      + '<p>'+R.woerter.length+' '+W('vk_woerter_geuebt','Wörter geübt')+' · '
      +   R.richtig+' '+W('vk_richtig','richtig')+' · '+R.falsch+' '+W('vk_daneben_k','daneben')+'</p>'
      + '<div class="vk-ende-liste">'
      +   R.woerter.map(function(w){
            var fehler=R.fehler[w.k];
            return '<span class="vk-ende-w'+(fehler?' schlecht':'')+'">'+E(w.de)+'</span>';
          }).join('')
      + '</div>'
      + '<div class="vk-ende-tag">'+st.heute+' / '+st.ziel+' '+W('vk_heute','heute')+' · '
      +   st.serie+' '+(st.serie===1?W('vk_serie1','Tag am Stück'):W('vk_serie','Tage am Stück'))+'</div>'
      + '</div>';

    if(f) f.innerHTML=
      (naechste!=null
        ? knopf(W('vk_naechste','Nächste 8 Wörter')+' →','vokRunde(\''+E(g.id)+'\','+naechste+')','vk-btn-rot')
        : knopf(W('vk_fertig','Fertig'),'vokRundeZu()','vk-btn-rot'))
      + knopf(W('vk_nochmal','Nochmal'),'vokRunde(\''+E(g.id)+'\','+R.paketNr+')','vk-btn-hell');
  }

  /* ---------- Runde öffnen und schließen ---------- */

  window.vokRunde=function(gruppeId, paketNr){
    var r=rundeBauen(gruppeId, paketNr||0);
    if(!r){ try{ if(window.toast) toast('Diese Runde ist noch leer.'); }catch(e){} return false; }
    R=r;
    stil();
    var o=ovBauen();
    o.classList.add('auf');
    document.body.style.overflow='hidden';
    aufgabeMalen();
    return false;
  };

  /* Alles, was heute dran ist — quer durch alle Gruppen */
  window.vokFaellig=function(){
    var liste=faelligeWoerter();
    if(!liste.length) liste=neueWoerter();
    if(!liste.length){
      /* Noch gar nichts gesammelt: dann fangen wir im ersten Thema an. */
      var g0=gruppen()[0];
      if(g0) return window.vokRunde(g0.id, 0);
      try{ if(window.toast) toast('Die Wörter werden noch geladen.'); }catch(e){}
      return false;
    }
    var acht=mix(liste).slice(0,8).map(function(p){ return p.w; });
    var g={id:'faellig', quelle:'faellig', t:WX('vk_wiederholen','Wiederholen'), niveau:'', emoji:'🔁',
           bild:'bilder/thema/menschen-s.jpg', woerter:acht};
    /* eine Wegwerf-Gruppe, damit rundeBauen damit arbeiten kann */
    var alt=GRUPPEN; GRUPPEN=(GRUPPEN||[]).concat([g]);
    var r=rundeBauen('faellig',0);
    GRUPPEN=alt;
    if(!r) return false;
    R=r; R.gruppe=g;
    stil();
    var o=ovBauen(); o.classList.add('auf');
    document.body.style.overflow='hidden';
    aufgabeMalen();
    return false;
  };

  window.vokRundeZu=function(){
    var o=el('vkOv');
    if(R && !R.fertig && R.i>0){
      if(!confirm(WX('vk_abbrechen','Runde abbrechen?\n\nDeine Antworten in dieser Runde gehen verloren.'))) return;
    }
    if(o) o.classList.remove('auf');
    document.body.style.overflow='';
    try{ if(window.speechSynthesis) speechSynthesis.cancel(); }catch(e){}
    R=null;
    zeichne();
  };

  document.addEventListener('keydown',function(e){
    var o=el('vkOv');
    if(!o||!o.classList.contains('auf')) return;
    if(e.key==='Escape') window.vokRundeZu();
    if(e.key==='Enter'){
      var b=document.querySelector('#vkFuss .vk-btn:not(.vk-aus)');
      if(b && document.activeElement && document.activeElement.id!=='vkEin') b.click();
    }
  });

  /* ============================================================
     5 — Die Übersicht
     ============================================================ */

  var ZEIGE='meine';   /* meine | alle */

  window.vokAnsicht=function(x){ ZEIGE=x; zeichne(); };

  function ring(p, mitte){
    return '<span class="vk-ring" style="--p:'+p+'"><i>'+mitte+'</i></span>';
  }

  function erinnerungsBand(){
    var st=window.vokabelStand();
    if(!st.erinnern) return '';
    var t=st.pauseTage;
    return '<div class="vk-erinnerung">'
      + '<span class="vk-erinnerung-z">'+t+'</span>'
      + '<div class="vk-erinnerung-t">'
      +   '<b>'+W('vk_er_t','Tage Pause — die Wörter warten')+'</b>'
      +   '<span>'+st.faellig+' '+W('vk_er_u','Wörter sind heute dran. Zehn Minuten reichen, um sie zu halten.')+'</span>'
      + '</div>'
      + '<button class="vk-btn vk-btn-rot" onclick="vokFaellig()">'+W('vk_er_b','Jetzt wiederholen')+' →</button>'
      + '</div>';
  }

  /* Eine Themenkarte. Jedes Thema ist sofort spielbar — auch eines,
     das die Schülerin noch nie gesehen hat. „Begegnet" heißt nur:
     es steht weiter oben und zeigt seinen Fortschritt. */
  function gruppeKarte(g, dabei){
    var ps=pakete(g), p=gruppeProzent(g);
    var s=stand(), neu=0;
    g.woerter.forEach(function(w){ if(!s.w[w.k]) neu++; });

    var runden=ps.map(function(pk,i){
      var pp=paketProzent(pk);
      return '<button class="vk-runde'+(pp>=100?' voll':'')+'" onclick="vokRunde(\''+E(g.id)+'\','+i+')" '
        + 'title="'+E(pk.map(function(x){return x.de;}).join(', '))+'">'
        + '<span class="vk-runde-n">'+(i+1)+'</span>'
        + '<span class="vk-runde-b"><i style="width:'+pp+'%"></i></span>'
        + '</button>';
    }).join('');

    return '<div class="vk-g'+(dabei?'':' vk-g-neu')+'">'
      + '<div class="vk-g-kopf">'
      +   '<span class="vk-g-bild"><img src="'+E(g.bild)+'" alt="" loading="lazy" '
      +     'onerror="this.parentNode.classList.add(\'leer\');this.parentNode.innerHTML=\''+E(g.emoji)+'\'"></span>'
      +   '<div class="vk-g-tx">'
      +     '<b>'+E(g.t)+'</b>'
      +     '<span>'+g.woerter.length+' '+W('vk_woerter','Wörter')
      +       (g.niveau?' · '+E(g.niveau):'')
      +       (neu&&dabei?' · '+neu+' '+W('vk_neu_k','neu'):'')+'</span>'
      +   '</div>'
      +   (dabei?'<span class="vk-g-proz">'+p+' %</span>':'')
      + '</div>'
      + '<div class="vk-runden">'+runden+'</div>'
      + '</div>';
  }

  function zeichne(){
    stil();
    var v=el('v-vokabeln'); if(!v) return;
    if(!window.UEBUNGEN && !window.A1){
      v.innerHTML='<div class="vk-leer">'+W('vk_laden','Die Wörter werden geladen …')+'</div>';
      return;
    }
    var st=window.vokabelStand();
    var meine=meineGruppen();
    var andere=gruppen().filter(function(g){ return meine.indexOf(g)<0; });

    var kopf='<div class="vk-kopf">'
      + '<span class="vk-kicker">'+W('vk_kicker','Deine Wörter')+'</span>'
      + '<h1>'+W('vok_h1','Alles, was du gelernt hast — an <span class="mk-mark">einem Ort</span>.')+'</h1>'
      + '</div>';

    var zahlen='<div class="vk-zahlen">'
      + '<div class="vk-z">'+ring(Math.min(100,Math.round(st.heute/Math.max(1,st.ziel)*100)), st.heute)
      +   '<div><b>'+st.heute+' / '+st.ziel+'</b><span>'+W('vk_heute','heute')+'</span></div></div>'
      + '<div class="vk-z"><b>'+st.gesamt+'</b><span>'+W('vk_gesammelt','gesammelt')+'</span></div>'
      + '<div class="vk-z"><b>'+st.gelernt+'</b><span>'+W('vk_sitzen','sitzen')+'</span></div>'
      + '<div class="vk-z"><b>'+st.serie+'</b><span>'
      +   (st.serie===1?W('vk_serie1','Tag am Stück'):W('vk_serie','Tage am Stück'))+'</span></div>'
      + '</div>';

    /* Die große Karte oben. Sie ist immer da — auch am ersten Tag,
       wenn noch nichts gesammelt ist. Dann führt sie ins erste Thema. */
    var anzahl = st.faellig || st.neu || 8;
    var satz   = st.faellig
      ? W('vk_dran_u','Diese Wörter verblassen gerade — hol sie dir zurück.')
      : (st.gesamt
          ? W('vk_neu_u','Noch nie geübt. Acht auf einmal, das reicht für heute.')
          : W('vk_erste_u','Acht Wörter aus einem Thema — mit Bild, Ton und Beispielsatz. '
            + 'Danach gehören sie dir.'));
    var heuteKarte='<div class="vk-heute">'
      + '<div class="vk-heute-t">'
      +   '<span class="vk-kicker vk-kicker-hell">'
      +     (st.gesamt?W('vk_dran','Heute dran'):W('vk_anfang','Fang hier an'))+'</span>'
      +   '<b>'+anzahl+' '+W('vk_woerter','Wörter')+'</b>'
      +   '<span>'+satz+'</span>'
      + '</div>'
      + '<button class="vk-btn vk-btn-rot vk-gross-btn" onclick="vokFaellig()">'
      +   W('vk_los','Losüben')+' →</button>'
      + '</div>';

    /* Eine Liste, zwei Abschnitte: was ihr schon begegnet ist, steht
       oben. Der Rest steht darunter und ist genauso spielbar — man
       muss nichts erst „dazunehmen". */
    function abschnitt(titel, unter, gruppen, dabei){
      if(!gruppen.length) return '';
      return '<section class="vk-abschnitt">'
        + '<div class="vk-ah"><h2>'+titel+'</h2><span>'+unter+'</span></div>'
        + '<div class="vk-liste">'+gruppen.map(function(g){ return gruppeKarte(g,dabei); }).join('')+'</div>'
        + '</section>';
    }

    var liste =
        abschnitt(W('vk_begegnet','Schon begegnet'),
                  meine.length+' '+W('vk_begegnet_u','Themen aus deinen Kursen und Stunden'),
                  meine, true)
      + abschnitt(W('vk_entdecken','Zum Entdecken'),
                  andere.length+' '+W('vk_entdecken_u','Themen, die du dir jederzeit holen kannst'),
                  andere, false);

    if(!meine.length && !andere.length){
      liste='<div class="vk-leer">'+W('vk_laden','Die Wörter werden geladen …')+'</div>';
    }

    v.innerHTML='<div class="vk">'+kopf+zahlen+erinnerungsBand()+heuteKarte+liste+'</div>';
    try{ window.scrollTo(0,0); }catch(e){}
  }

  /* ============================================================
     6 — Das Aussehen wird von marke.css getragen.
        Hier steht nur, was der Trainer selbst mitbringen muss.
     ============================================================ */
  function stil(){
    if(el('vokCSS')) return;
    var s=document.createElement('style'); s.id='vokCSS';
    s.textContent=[
      '#vkOv{position:fixed;inset:0;z-index:9000;background:#FFFCF5;display:none;',
      'flex-direction:column;overscroll-behavior:contain}',
      '#vkOv.auf{display:flex}'
    ].join('');
    document.head.appendChild(s);
  }

  /* ============================================================
     7 — Eingang
     ============================================================ */
  window.renderVokabeln=function(){
    zeichne();
    /* Beim ersten Öffnen den Stand aus dem Konto dazuholen und
       danach noch einmal zeichnen — ohne Warten auf das Netz. */
    herunter(function(){ zeichne(); });
  };

  /* Von außen: Wörter in die Sammlung schieben (zum Beispiel aus
     einer Lektion heraus). Nimmt Gruppen-Ids. */
  window.vokSammeln=function(gruppenId){
    if(!gruppenId) return;
    var s=stand(); s.dabei[gruppenId]=heute(); speichern(s);
  };

  /* Falls die Ansicht schon offen war, als diese Datei geladen wurde */
  if(document.readyState!=='loading'){
    var v=el('v-vokabeln');
    if(v && v.classList.contains('active')) setTimeout(zeichne, 60);
  }

})();
