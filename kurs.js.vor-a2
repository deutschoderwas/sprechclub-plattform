/* ============================================================
   deutschoderwas club — KURS
   Die drei Ebenen über dem Lernbereich, an einem Ort.

   Aufbau:
     1. Die Niveau-Auswahl — A1 bis C1, der Eingang
     2. Der A1-Kurs        — 14 Lektionen als Weg, jede Lektion
                             mit Wörtern, Grammatik, Üben, Sprechen,
                             Schreiben und Aussprache
     3. Die Übungsrunde    — ein Vollbild für alle neun Aufgabentypen
     4. Der Schreibtrainer — Aufgabe, Schreibfeld, Selbstprüfung

   Gebraucht werden:  niveau.js
   Freiwillig:        a1.js · schreiben.js · lernen.js (Dialogfenster)
                      stimmen.js (window.sagen) · klang.js (window.klang)

   Nichts hier setzt voraus, dass die anderen Dateien da sind.
   Fehlt etwas, sagt die Seite das ehrlich und läuft weiter.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- kleine Helfer ---------- */
  function E(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function J(k,d){ try{ if(window.lsGet) return window.lsGet(k,d);
    var v=JSON.parse(localStorage.getItem('ub_'+k)); return v==null?d:v; }catch(e){ return d; } }
  function S(k,v){ try{ if(window.lsSet) return window.lsSet(k,v);
    localStorage.setItem('ub_'+k,JSON.stringify(v)); }catch(e){} }
  function note(t){ try{ if(window.toast) window.toast(t); else if(window.console) console.log(t); }catch(e){} }
  function klang(n){ try{ if(window.klang) window.klang(n); }catch(e){} }
  function punkte(n){ try{ if(window.xpDazu) window.xpDazu(n); }catch(e){} }
  function el(id){ return document.getElementById(id); }
  function mix(a){ a=(a||[]).slice(); for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;} return a; }
  function zahl(n){ return n<10?'0'+n:''+n; }

  /* Stimme: nutzt stimmen.js, sonst der Browser direkt */
  function sprich(text,opt){
    opt=opt||{};
    if(window.sagen) return window.sagen(text,opt);
    try{ if(!window.speechSynthesis) return; window.speechSynthesis.cancel();
      var u=new SpeechSynthesisUtterance(text); u.lang='de-DE'; u.rate=.95;
      if(opt.fertig) u.onend=opt.fertig; window.speechSynthesis.speak(u); }catch(e){ if(opt.fertig) opt.fertig(); }
  }
  function stille(){ try{ if(window.stimmeStopp) return window.stimmeStopp();
    if(window.speechSynthesis) window.speechSynthesis.cancel(); }catch(e){} }

  /* Vergleich: Groß- und Kleinschreibung und Satzzeichen sind egal.
     Umlaute nicht — ä ist nicht ae. Nur ß und ss lassen wir beide gelten. */
  function norm(s){
    return String(s==null?'':s).toLowerCase()
      .replace(/ß/g,'ss')
      .replace(/[.,!?;:„“”"'`´()\[\]\-–—_\/]/g,' ')
      .replace(/\s+/g,' ')
      .replace(/^\s+|\s+$/g,'');
  }
  function gleich(a,b){ return norm(a)===norm(b); }

  /* Die Fläche, in die gerendert wird. Auf der Plattform ist das
     die Ansicht „Kurs"; im Test reicht irgendein Kasten. */
  function flaeche(){
    return el('v-kurs') || el('v-niveau') || el('v-lernen')
      || document.querySelector('.view.active') || document.body;
  }
  function hoch(){ try{ window.scrollTo(0,0); }catch(e){} }

  /* ---------- Speicher und Fortschritt ---------- */
  /* Alles unter einem Schlüssel „kurs": {a1:{1:{...},2:{...}}, niveau:'A1'} */
  function stand(){ var s=J('kurs',null)||{}; s.a1=s.a1||{}; return s; }
  function standSpeichern(s){ S('kurs',s); }
  function lekStand(nr){ return stand().a1[nr]||{}; }
  function lekMerken(nr,neu){
    var s=stand(), x=s.a1[nr]||{}, k;
    for(k in neu) if(neu.hasOwnProperty(k)) x[k]=neu[k];
    s.a1[nr]=x; standSpeichern(s);
  }
  /* Eine Lektion hat sechs Teile. Üben zählt in Prozent, der Rest ganz oder gar nicht. */
  function lekProzent(nr){
    var x=lekStand(nr), t=[];
    t.push(x.woerter?100:0); t.push(x.gram?100:0); t.push(Math.max(0,Math.min(100,x.ueb||0)));
    t.push(x.dialog?100:0); t.push(x.schreiben?100:0); t.push(x.aus?100:0);
    var sum=0,i; for(i=0;i<t.length;i++) sum+=t[i];
    return Math.round(sum/t.length);
  }
  function niveauProzent(id){
    if(id!=='A1') return 0;
    var L=lektionen(); if(!L.length) return 0;
    var sum=0,i; for(i=0;i<L.length;i++) sum+=lekProzent(L[i].nr);
    return Math.round(sum/L.length);
  }
  function niveauGemerkt(){ return J('niveau','A1')||'A1'; }

  /* ---------- Daten ---------- */
  function niveaus(){ return window.NIVEAUS||[]; }
  function niveauVon(id){ var a=niveaus(),i; for(i=0;i<a.length;i++) if(a[i].id===id) return a[i]; return null; }
  function lektionen(){ return (window.A1&&window.A1.lektionen)||[]; }
  function lektionVon(nr){ var a=lektionen(),i; for(i=0;i<a.length;i++) if(a[i].nr===Number(nr)) return a[i]; return null; }
  function hatKurs(id){ return id==='A1' && lektionen().length>0; }
  function aufgaben(){ return window.SCHREIBEN||[]; }

  /* ============================================================
     Aussehen
     ============================================================ */
  /* ---- Bilder: Lektion -> Illustration ------------------------- */
  var LEKBILD = {
    vorstellen:'a1-l1',      familie:'a1-familie',   einkaufen:'th-einkauf',
    wohnung:'th-wohnung',    tag:'th-tag',           freizeit:'a1-freizeit',
    schule:'th-bildung',     beruf:'th-arbeit',      amt:'th-amt',
    gesundheit:'th-arzt',    unterwegs:'th-weg',     kundenservice:'a1-service',
    kleidung:'a1-kleidung',  feste:'a1-feste'
  };
  var ERSATZBILD = {
    'a1-familie':'th-migration', 'a1-freizeit':'th-ironie',
    'a1-service':'th-gespraech', 'a1-kleidung':'th-einkauf', 'a1-feste':'th-essen'
  };
  function lekBild(l, klein){
    var b = LEKBILD[l && l.id] || 'a1-l1';
    return 'illu/' + b + (klein ? '-s' : '') + '.jpg';
  }
  function lekBildErsatz(l, klein){
    var b = LEKBILD[l && l.id] || 'a1-l1';
    var e = ERSATZBILD[b]; if(!e) return '';
    return 'illu/' + e + (klein ? '-s' : '') + '.jpg';
  }
  /* faellt ein Bild aus, springt der Ersatz ein statt eines kaputten Symbols */
  function bildTag(pfad, ersatz, klasse){
    return '<img src="' + pfad + '" alt=""' + (klasse?' class="'+klasse+'"':'') + ' loading="lazy"'
      + (ersatz ? ' onerror="this.onerror=null;this.src=\'' + ersatz + '\'"'
                : ' onerror="this.onerror=null;this.style.visibility=\'hidden\'"') + '>';
  }

  /* ---- Motive fuer die Woerter-Karten (nutzt die vorhandenen Bilder) ---- */
  /* Reihenfolge = Genauigkeit: das Besondere zuerst, das Allgemeine zuletzt.
     Gesucht wird nur in der Wendung selbst — sonst zieht der Hinweistext
     falsche Bilder herbei (»Guten Tag, Frau Berger« ist keine Familie). */
  var KMOTIV = [
    ['zahnarzt',   /zahn|zahnarzt|zahnschmerz/],
    ['apotheke',   /apotheke|medikament|tablette|rezept|schmerzmittel/],
    ['praxis',     /arzt|ärzt|praxis|sprechstunde|krankenschein|erkältet|husten|fieber|weh\b|schmerzen|krankgeschrieben|gesundheitskarte/],
    ['kita',       /kita|kindergarten|krippe/],
    ['schule',     /schule|klassenlehrer|hausaufgabe|zeugnis|elternabend|grundschule|schulhof/],
    ['sprachschule',/deutschkurs|sprachkurs|volkshochschule|\bvhs\b|deutsch lern|buchstabier|welche sprache|sprichst du|ich spreche/],
    ['bibliothek', /bibliothek|bücherei|ausleih/],
    ['amt',        /\bamt\b|ämter|behörde|rathaus|formular|anmelde|anmelden|ausweis|antrag|bürgeramt|termin beim amt|bescheinigung/],
    ['paket',      /paket|päckchen|lieferung|sendung|bestellung|geliefert|zusteller/],
    ['hausmeister',/hausmeister|hausverwaltung/],
    ['aufzug',     /aufzug|fahrstuhl/],
    ['muell',      /müll|mülltonne|abfall|entsorg|nebenkosten/],
    ['umzug',      /umzug|umziehen|einzug|kartons|ausziehen aus/],
    ['nachbar',    /nachbar/],
    ['handwerker', /handwerker|reparier|installateur|heizung|kaputt/],
    ['reinigung',  /putzen|sauber mach|wäsche|waschmaschine|staubsaug/],
    ['wohnung',    /wohnung|zimmer|küche|badezimmer|miete|vermieter|balkon|möbel|schrank|wohne in|wohnst du/],
    ['fahrrad',    /fahrrad|rad fahr/],
    ['werkstatt',  /werkstatt|reparatur/],
    ['auto',       /\bauto\b|parken|führerschein|tanken|mit dem wagen/],
    ['bahn',       /\bzug\b|\bbahn\b|gleis|bahnhof|s-bahn|u-bahn|fahrkarte|\bticket\b|abfahrt/],
    ['bus',        /\bbus\b|haltestelle|straßenbahn|\blinie \d/],
    ['reise',      /reise|urlaub|koffer|flughafen|fliege nach|ferien/],
    ['schwimmbad', /schwimm|hallenbad|freibad|baden geh/],
    ['fitness',    /fitnessstudio|fitness/],
    ['yoga',       /yoga|meditat/],
    ['sport',      /sport|fußball|verein|joggen|trainier/],
    ['musik',      /musik|\blied\b|singen|konzert|gitarre|klavier/],
    ['kino',       /\bkino\b|\bfilm\b|fernseh|serie\b/],
    ['baeckerei',  /bäcker|brötchen|\bbrot\b|kuchen|torte/],
    ['cafe',       /\bcafé\b|\bcafe\b|kaffee|frühstück/],
    ['supermarkt', /supermarkt|einkauf|lebensmittel|\bkasse\b|gemüse|\bobst\b|milch|\bkilo\b|was kostet|was kosten|packung|flasche|tüte/],
    ['friseur',    /friseur|haare schneid|haarschnitt/],
    ['tier',       /\bhund\b|\bkatze\b|haustier/],
    ['spielplatz', /spielplatz|schaukel/],
    ['familie',    /familie|meine frau|mein mann|ehefrau|ehemann|kinder|mein kind|\bsohn\b|tochter|bruder|schwester|eltern|mutter|vater|\boma\b|\bopa\b|großeltern|verheiratet|\bledig\b|geschwister/],
    ['buero',      /\bbüro\b|arbeite|arbeit\b|beruf|\bchef\b|kolleg|firma|\bjob\b|bewerbung|besprechung|feierabend|überstunde|stelle gefunden|vollzeit|teilzeit/],
    ['strasse',    /geradeaus|links abbieg|rechts abbieg|\bkreuzung\b|\bampel\b|wie komme ich/],
    ['nachbarschaft',/\bviertel\b(?! nach| vor)|nachbarschaft|in der gegend/],
    ['handy',      /\bhandy\b|telefonnummer|anrufen|rufe .* an|zurückrufen|\bsms\b/],
    ['mail',       /e-mail|\bemail\b|\bmail\b|betreff/],
    ['zettel',     /zettel|einkaufszettel|notiz/],
    ['aushang',    /aushang|schwarzes brett/],
    ['schild',     /\bschild\b|verboten|achtung/],
    ['anzeige',    /anzeige|inserat|zeitung/]
  ];
  function kMotiv(c){
    var h = String((c&&c.de)||'').toLowerCase(), i;
    for(i=0;i<KMOTIV.length;i++) if(KMOTIV[i][1].test(h)) return 'bilder/lesen/'+KMOTIV[i][0]+'.webp';
    return '';
  }

  function stil(){
    if(el('kursCSS')) return;
    var s=document.createElement('style'); s.id='kursCSS';
    s.textContent=[

/* ---- Grundfläche ---- */
'.ku{--kb:#1F5FD1;--kb2:#12408F;--kr:#DD0000;--kg:#FFCE00;--kt:#12181F;--km:#5E6A78;--kl:#E7EBF0;max-width:1180px;margin:0 auto;padding-bottom:70px;color:#12181F}',
'.ku *{box-sizing:border-box}',

/* ---- Knöpfe (auch in den Vollbildern gebraucht) ---- */
'.ku-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:none;cursor:pointer;font-family:inherit;font-weight:800;font-size:14.5px;padding:12px 20px;border-radius:13px;background:#DD0000;color:#fff;box-shadow:0 4px 0 #A80000;transition:transform .08s,box-shadow .08s;text-decoration:none}',
'.ku-btn:active{transform:translateY(3px);box-shadow:0 1px 0 #A80000}',
'.ku-btn.blau{background:#1F5FD1;box-shadow:0 4px 0 #12408F}',
'.ku-btn.blau:active{box-shadow:0 1px 0 #12408F}',
'.ku-btn.gruen{background:#16a34a;box-shadow:0 4px 0 #0F7738}',
'.ku-btn.gruen:active{box-shadow:0 1px 0 #0F7738}',
'.ku-btn.hell{background:#EEF2F8;color:#12408F;box-shadow:none;border:1px solid #E7EBF0}',
'.ku-btn.klein{padding:9px 14px;font-size:13px;border-radius:11px}',
'.ku-btn.gross{padding:15px 26px;font-size:16px;border-radius:15px}',
'.ku-btn.breit{width:100%}',
'.ku-btn[disabled]{opacity:.45;cursor:default;box-shadow:none;transform:none}',

/* ---- Kopf ---- */
'.ku-kopf{position:relative;overflow:hidden;border-radius:24px;padding:26px 28px;margin:0 0 20px;background:linear-gradient(120deg,#12408F 0%,#1F5FD1 58%,#2E86D8 100%);color:#fff}',
'.ku-kopf::after{content:"";position:absolute;right:-70px;top:-90px;width:280px;height:280px;border-radius:50%;background:rgba(255,255,255,.09)}',
'.ku-kopf::before{content:"";position:absolute;right:80px;bottom:-120px;width:200px;height:200px;border-radius:50%;background:rgba(255,206,0,.16)}',
'.ku-kopf h1{margin:0 0 4px;font-size:29px;line-height:1.15;letter-spacing:-.4px;position:relative;z-index:2}',
'.ku-kopf p{margin:0;opacity:.9;font-size:14.5px;max-width:56ch;position:relative;z-index:2}',
'.ku-zahlen{position:relative;z-index:2;display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}',
'.ku-z{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.22);border-radius:15px;padding:9px 14px}',
'.ku-z b{font-size:19px;line-height:1;display:block}',
'.ku-z span{font-size:11.5px;opacity:.85;letter-spacing:.2px}',
'@media(max-width:760px){.ku-kopf{padding:20px 18px;border-radius:20px}.ku-kopf h1{font-size:24px}.ku-kopf p{font-size:13.5px}.ku-zahlen{flex-wrap:nowrap;overflow-x:auto;margin-top:14px;padding-bottom:3px;scrollbar-width:none}.ku-zahlen::-webkit-scrollbar{display:none}.ku-z{flex:0 0 auto}}',

'.ku-zurueck{display:inline-flex;align-items:center;gap:7px;border:none;background:none;color:#1F5FD1;font:inherit;font-weight:800;font-size:14px;cursor:pointer;padding:6px 0;margin:0 0 12px}',
'.ku-bar{display:block;height:7px;border-radius:7px;background:#EDF0F4;overflow:hidden}',
'.ku-bar i{display:block;height:100%;border-radius:7px;background:linear-gradient(90deg,#1F5FD1,#4E93E8);transition:width .3s}',
'.ku-bar.voll i{background:linear-gradient(90deg,#16a34a,#4ADE80)}',
'.ku-leer{text-align:center;color:#5E6A78;padding:36px 20px;background:#fff;border:1px dashed #E7EBF0;border-radius:18px}',
'.ku-h3{margin:28px 0 12px;font-size:17px;color:#12181F}',

/* ---- Niveau-Karten ---- */
'.ku-nvliste{display:grid;grid-template-columns:1fr;gap:14px}',
'@media(min-width:960px){.ku-nvliste{grid-template-columns:1fr 1fr}}',
'.ku-nv{position:relative;background:#fff;border:1px solid #E7EBF0;border-radius:22px;overflow:hidden;box-shadow:0 3px 14px rgba(18,24,31,.07);display:flex;flex-direction:column}',
'.ku-nv.jetzt{border-color:#1F5FD1;box-shadow:0 8px 26px rgba(31,95,209,.16)}',
'.ku-nv .oben{display:flex;gap:15px;align-items:flex-start;padding:20px 22px 12px}',
'.ku-nv .stufe{width:62px;height:62px;flex:0 0 62px;border-radius:19px;display:grid;place-items:center;font-size:22px;font-weight:800;color:#fff;background:linear-gradient(140deg,#12408F,#1F5FD1);letter-spacing:-.5px}',
'.ku-nv.bald .stufe{background:linear-gradient(140deg,#5E6A78,#8A96A5)}',
'.ku-nv h2{margin:2px 0 4px;font-size:19px;letter-spacing:-.2px;color:#12181F}',
'.ku-nv .u{margin:0;font-size:13.5px;color:#5E6A78;line-height:1.4}',
'.ku-nv .kann{list-style:none;margin:4px 0 0;padding:0 22px 0 22px}',
'.ku-nv .kann li{position:relative;padding:4px 0 4px 24px;font-size:13.5px;color:#12181F;line-height:1.4}',
'.ku-nv .kann li::before{content:"✓";position:absolute;left:2px;top:4px;color:#16a34a;font-weight:800;font-size:13px}',
'.ku-nv .pillen{display:flex;gap:7px;flex-wrap:wrap;padding:12px 22px 0}',
'.ku-pill{display:inline-block;font-size:11.5px;font-weight:800;letter-spacing:.2px;padding:5px 11px;border-radius:999px;background:#EEF3FA;color:#12408F}',
'.ku-pill.gelb{background:#FFF6D6;color:#6B5600}',
'.ku-pill.grau{background:#F1F4F8;color:#5E6A78}',
'.ku-nv .fuss{margin-top:auto;padding:14px 22px 18px;display:flex;gap:10px;align-items:center;flex-wrap:wrap}',
'.ku-nv .fuss .ku-bar{flex:1;min-width:120px}',
'.ku-nv .hinweis{margin:12px 22px 0;background:#FFF8E1;border:1px solid #F3E6B8;border-radius:13px;padding:10px 13px;font-size:12.5px;color:#6B5600;line-height:1.45}',
'@media(max-width:640px){.ku-nv .oben{padding:16px 16px 10px;gap:12px}.ku-nv .stufe{width:52px;height:52px;flex:0 0 52px;font-size:19px;border-radius:16px}.ku-nv h2{font-size:17.5px}.ku-nv .kann,.ku-nv .pillen{padding-left:16px;padding-right:16px}.ku-nv .fuss{padding:12px 16px 16px}.ku-nv .hinweis{margin-left:16px;margin-right:16px}}',

/* ---- Der Lernweg ---- */
'.ku-weg{position:relative;margin:0 0 10px}',
'.ku-weg::before{content:"";position:absolute;left:38px;top:16px;bottom:16px;width:2px;background:#E7EBF0}',
'.ku-lek{position:relative;z-index:1;display:flex;gap:14px;align-items:center;background:#fff;border:1px solid #E7EBF0;border-radius:18px;padding:13px 16px;margin:0 0 10px;width:100%;text-align:left;font-family:inherit;cursor:pointer;transition:.14s}',
'.ku-lek:hover{border-color:#C7D5E9;transform:translateY(-2px);box-shadow:0 6px 18px rgba(18,24,31,.08)}',
'.ku-lek .nr{width:44px;height:44px;flex:0 0 44px;border-radius:14px;background:#EEF3FA;color:#12408F;display:grid;place-items:center;font-weight:800;font-size:16px}',
'.ku-lek.fertig .nr{background:#16a34a;color:#fff}',
'.ku-lek .tx{flex:1;min-width:0}',
'.ku-lek b{display:block;font-size:15.5px;color:#12181F;margin:0 0 2px;line-height:1.25}',
'.ku-lek small{display:block;font-size:12.5px;color:#5E6A78;line-height:1.35}',
'.ku-lek .ba{width:92px;flex:0 0 92px}',
'.ku-lek .pf{font-size:16px;color:#B9C3D0}',
'@media(max-width:640px){.ku-weg::before{left:32px}.ku-lek{padding:11px 12px;gap:11px}.ku-lek .nr{width:40px;height:40px;flex:0 0 40px;font-size:15px}.ku-lek .ba{display:none}.ku-lek b{font-size:14.5px}}',

/* ---- Lektionsseite ---- */
'.ku-lkopf{background:linear-gradient(120deg,#12408F,#1F5FD1);color:#fff;border-radius:22px;padding:22px 24px;margin:0 0 18px;position:relative;overflow:hidden}',
'.ku-lkopf::after{content:"";position:absolute;right:-60px;top:-70px;width:220px;height:220px;border-radius:50%;background:rgba(255,206,0,.14)}',
'.ku-lkopf .nr{display:inline-block;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.28);border-radius:999px;padding:4px 12px;font-size:12px;font-weight:800;letter-spacing:.3px;position:relative;z-index:2}',
'.ku-lkopf h1{margin:9px 0 8px;font-size:26px;line-height:1.15;letter-spacing:-.4px;position:relative;z-index:2}',
'.ku-lkopf p{margin:0;font-size:14px;opacity:.93;line-height:1.5;max-width:62ch;position:relative;z-index:2}',
'@media(max-width:640px){.ku-lkopf{padding:18px 16px;border-radius:19px}.ku-lkopf h1{font-size:21px}.ku-lkopf p{font-size:13px}}',

'.ku-ab{background:#fff;border:1px solid #E7EBF0;border-radius:20px;padding:18px 20px;margin:0 0 14px}',
/* ---- Lektions-Hero mit Bild ---- */
'.ku-hero{position:relative;display:grid;grid-template-columns:1fr 330px;background:linear-gradient(118deg,#12408F 0%,#1F5FD1 60%,#2E86D8 100%);color:#fff;border-radius:24px;overflow:hidden;margin:0 0 14px}',
'.ku-hero-tx{padding:26px 28px;position:relative;z-index:2;min-width:0}',
'.ku-hero .nr{display:inline-block;background:rgba(255,255,255,.17);border:1px solid rgba(255,255,255,.3);border-radius:999px;padding:5px 13px;font-size:11.5px;font-weight:800;letter-spacing:.35px}',
'.ku-hero h1{margin:11px 0 8px;font-size:28px;line-height:1.13;letter-spacing:-.5px}',
'.ku-hero p{margin:0;font-size:14px;line-height:1.55;opacity:.93;max-width:52ch}',
'.ku-chips{display:flex;gap:7px;flex-wrap:wrap;margin:16px 0 0}',
'.ku-chip{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.26);border-radius:999px;padding:6px 12px;font-size:12px;font-weight:700;letter-spacing:.1px}',
'.ku-hero-bild{position:relative;background:#FDF7EC;overflow:hidden}',
'.ku-hero-bild img{width:100%;height:100%;object-fit:cover;display:block}',
'.ku-hero-bild::before{content:"";position:absolute;inset:0;left:-1px;width:56px;background:linear-gradient(90deg,rgba(31,95,209,.95),rgba(31,95,209,0));z-index:2}',
'.ku-ring{position:absolute;right:13px;bottom:13px;z-index:3;width:60px;height:60px;border-radius:50%;background:conic-gradient(#FFCE00 var(--p,0%),rgba(255,255,255,.55) 0);display:grid;place-items:center;box-shadow:0 3px 10px rgba(0,0,0,.16)}',
'.ku-ring i{width:46px;height:46px;border-radius:50%;background:#fff;color:#12408F;display:grid;place-items:center;font-size:12.5px;font-weight:800;font-style:normal;letter-spacing:-.3px}',
'@media(max-width:820px){.ku-hero{grid-template-columns:1fr}.ku-hero-bild{height:172px;order:-1}.ku-hero-bild::before{inset:auto 0 -1px 0;width:auto;height:60px;background:linear-gradient(0deg,rgba(31,95,209,.9),rgba(31,95,209,0))}.ku-ring{bottom:auto;top:12px}.ku-hero-tx{padding:20px 18px}.ku-hero h1{font-size:22px}.ku-hero p{font-size:13.5px}}',

/* ---- Kapitel-Sprungleiste ---- */
'.ku-kap{display:flex;gap:8px;overflow-x:auto;padding:3px 3px 12px;margin:0 0 4px;scrollbar-width:none;-webkit-overflow-scrolling:touch}',
'.ku-kap::-webkit-scrollbar{display:none}',
'.ku-kap button{flex:0 0 auto;display:inline-flex;align-items:center;gap:7px;border:1px solid #E7EBF0;background:#fff;border-radius:999px;padding:8px 15px;font-family:inherit;font-size:13px;font-weight:800;color:#12408F;cursor:pointer;transition:.14s}',
'.ku-kap button:hover{border-color:#C7D5E9;transform:translateY(-1px)}',
'.ku-kap button .pu{width:8px;height:8px;border-radius:50%;background:#D6DEE8}',
'.ku-kap button.fertig{background:#EAF7EF;border-color:#BCE6CC;color:#0F7738}',
'.ku-kap button.fertig .pu{background:#16a34a}',

/* ---- Abschnittskopf: farbige Kachel ---- */
'.ku-abkopf .em{color:#12408F}',
'.ku-abkopf .zahl{margin-left:auto;font-size:12px;font-weight:800;color:#8A96A5;letter-spacing:.2px}',
'.ku-abkopf .ok{margin-left:8px}',

/* ---- Wörter-Karte mit Bild ---- */
'.ku-kw{display:grid;grid-template-columns:200px 1fr;max-width:600px;margin:0 auto;background:#fff;border:1px solid #E7EBF0;border-radius:20px;overflow:hidden;box-shadow:0 8px 26px rgba(18,24,31,.09)}',
'.ku-kw-bild{position:relative;background:#FDF7EC;display:grid;place-items:center;padding:16px;border-right:1px solid #F0E7D6}',
'.ku-kw-bild img{width:100%;max-width:172px;border-radius:15px;display:block}',
'.ku-kw-tx{border:none;background:none;font-family:inherit;text-align:left;cursor:pointer;padding:22px 24px;display:flex;flex-direction:column;justify-content:center;gap:10px;min-height:192px;color:#12181F}',
'.ku-kw .de{font-size:23px;font-weight:800;line-height:1.22;letter-spacing:-.3px}',
'.ku-kw .hi{font-size:14px;color:#5E6A78;line-height:1.5}',
'.ku-kw .bsp{background:#F2F6FD;border-left:3px solid #1F5FD1;border-radius:0 11px 11px 0;padding:10px 14px;font-size:14.5px;color:#12408F;line-height:1.45;font-weight:600}',
'.ku-kw .tipp{font-size:11px;letter-spacing:.5px;text-transform:uppercase;font-weight:800;color:#9AA6B4;display:flex;align-items:center;gap:6px}',
'@media(max-width:640px){.ku-kw{grid-template-columns:1fr}.ku-kw-bild{border-right:none;border-bottom:1px solid #F0E7D6;padding:18px}.ku-kw-bild img{max-width:126px}.ku-kw-tx{min-height:0;padding:18px 16px}.ku-kw .de{font-size:20px}}',
'.ku-punkte{display:flex;gap:5px;justify-content:center;flex-wrap:wrap;max-width:600px;margin:14px auto 0}',
'.ku-punkte i{width:7px;height:7px;border-radius:50%;background:#DCE3EC;display:block;transition:.15s}',
'.ku-punkte i.durch{background:#9EC0F0}',
'.ku-punkte i.jetzt{background:#1F5FD1;transform:scale(1.4)}',

/* ---- Lektionsliste mit Vorschaubild ---- */
'.ku-lek .bild{position:relative;width:84px;height:56px;flex:0 0 84px;border-radius:13px;overflow:hidden;background:#FDF7EC}',
'.ku-lek .bild img{width:100%;height:100%;object-fit:cover;display:block}',
'.ku-lek .bild .marke{position:absolute;left:5px;top:5px;min-width:22px;height:22px;padding:0 5px;border-radius:8px;background:rgba(18,64,143,.92);color:#fff;font-size:11.5px;font-weight:800;display:grid;place-items:center;letter-spacing:-.2px}',
'.ku-lek.fertig .bild .marke{background:#16a34a}',
'@media(max-width:640px){.ku-lek .bild{width:64px;height:46px;flex:0 0 64px;border-radius:11px}}',

/* ---- Abschnitt mit Randbild (Sprechen/Schreiben) ---- */
'.ku-mitbild{display:flex;gap:16px;align-items:center}',
'.ku-mitbild .txt{flex:1;min-width:0}',
'.ku-mitbild .bd{width:118px;height:88px;flex:0 0 118px;border-radius:15px;overflow:hidden;background:#FDF7EC}',
'.ku-mitbild .bd img{width:100%;height:100%;object-fit:cover;display:block}',
'@media(max-width:640px){.ku-mitbild .bd{display:none}}',


'.ku-abkopf{display:flex;align-items:center;gap:11px;margin:0 0 13px}',
'.ku-abkopf .em{width:40px;height:40px;flex:0 0 40px;border-radius:13px;background:#EEF3FA;display:grid;place-items:center;font-size:19px}',
'.ku-abkopf b{display:block;font-size:16.5px;color:#12181F}',
'.ku-abkopf small{display:block;font-size:12.5px;color:#5E6A78}',
'.ku-abkopf .ok{margin-left:auto;color:#16a34a;font-weight:800;font-size:15px}',
'@media(max-width:640px){.ku-ab{padding:15px 14px;border-radius:17px}}',

/* Chunk-Karte */
'.ku-karte{position:relative;width:100%;max-width:660px;margin:0 auto;border:none;font-family:inherit;text-align:center;cursor:pointer;background:linear-gradient(135deg,#12408F,#1F5FD1);color:#fff;border-radius:20px;padding:26px 20px;min-height:172px;display:flex;flex-direction:column;justify-content:center;gap:10px}',
'.ku-karte .de{font-size:22px;font-weight:800;line-height:1.25;letter-spacing:-.2px}',
'.ku-karte .hi{font-size:14px;opacity:.92;line-height:1.45}',
'.ku-karte .bsp{background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.26);border-radius:12px;padding:8px 13px;font-size:14.5px;line-height:1.4}',
'.ku-karte .tipp{font-size:11.5px;opacity:.72;letter-spacing:.3px;text-transform:uppercase;font-weight:800}',
'@media(max-width:640px){.ku-karte{padding:22px 15px;min-height:158px}.ku-karte .de{font-size:19px}}',
'.ku-ksteuer{display:flex;align-items:center;gap:10px;margin:12px auto 0;max-width:600px}',
'.ku-ksteuer .zaehler{flex:1;text-align:center;font-size:13px;color:#5E6A78;font-weight:700}',
'.ku-rund{width:44px;height:44px;flex:0 0 44px;border-radius:14px;border:1px solid #E7EBF0;background:#fff;color:#12408F;font-size:19px;cursor:pointer;display:grid;place-items:center;font-family:inherit}',
'.ku-rund[disabled]{opacity:.4;cursor:default}',

/* Grammatik-Kästen */
'.ku-gr{border:1px solid #E7EBF0;border-radius:15px;margin:0 0 9px;overflow:hidden;background:#fff}',
'.ku-gr>button{width:100%;display:flex;align-items:center;gap:10px;background:#F7F9FC;border:none;font-family:inherit;text-align:left;padding:13px 15px;cursor:pointer;font-size:14.5px;font-weight:800;color:#12181F}',
'.ku-gr>button .pf{margin-left:auto;color:#5E6A78;font-size:14px;transition:transform .18s}',
'.ku-gr.auf>button .pf{transform:rotate(90deg)}',
'.ku-gr .inhalt{display:none;padding:0 15px 15px}',
'.ku-gr.auf .inhalt{display:block}',
'.ku-gr .inhalt p{margin:10px 0 10px;font-size:14px;line-height:1.55;color:#12181F}',
'.ku-gr .bsp{background:#F2F6FD;border-left:3px solid #1F5FD1;border-radius:0 10px 10px 0;padding:8px 12px;margin:0 0 6px;font-size:14px;color:#12408F;display:flex;align-items:center;gap:9px}',
'.ku-gr .bsp span{flex:1}',
'.ku-gr .bsp button{border:none;background:none;cursor:pointer;font-size:15px;color:#1F5FD1;padding:2px 4px}',

/* Aussprache */
'.ku-aus{background:#FFF8E1;border:1px solid #F3E6B8;border-radius:15px;padding:14px 16px;font-size:14px;line-height:1.55;color:#6B5600}',

/* ---- Vollbild Übungsrunde ---- */
'.ku2-ov{position:fixed;inset:0;z-index:9100;background:#F4F6F9;display:none;flex-direction:column;height:100dvh}',
'.ku2-ov.auf{display:flex}',
'.ku2-kopf{flex:0 0 auto;display:flex;align-items:center;gap:12px;padding:11px 14px;background:#fff;border-bottom:1px solid #E7EBF0}',
'.ku2-kopf .zu{border:none;background:#F1F4F8;width:36px;height:36px;flex:0 0 36px;border-radius:11px;font-size:20px;cursor:pointer;color:#5E6A78;line-height:1;font-family:inherit}',
'.ku2-kopf .mitte{flex:1;min-width:0}',
'.ku2-kopf b{display:block;font-size:13.5px;color:#12181F;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0 0 5px}',
'.ku2-kopf .zaehler{font-size:12.5px;font-weight:800;color:#5E6A78;flex:0 0 auto}',
'.ku2-koerper{flex:1 1 auto;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:20px 16px 12px}',
'.ku2-innen{max-width:640px;margin:0 auto}',
'.ku2-fuss{flex:0 0 auto;background:#fff;border-top:1px solid #E7EBF0;padding:11px 14px calc(11px + env(safe-area-inset-bottom))}',
'.ku2-fuss .innen{max-width:640px;margin:0 auto}',
'.ku2-art{font-size:11.5px;font-weight:800;letter-spacing:.7px;text-transform:uppercase;color:#1F5FD1;margin:0 0 8px}',
'.ku2-frage{font-size:19px;line-height:1.4;font-weight:800;color:#12181F;margin:0 0 16px;letter-spacing:-.2px}',
'.ku2-satz{font-size:20px;line-height:1.6;color:#12181F;margin:0 0 16px;background:#fff;border:1px solid #E7EBF0;border-radius:15px;padding:15px 17px}',
'.ku2-satz .lk{display:inline-block;min-width:64px;border-bottom:3px solid #1F5FD1;color:#1F5FD1;font-weight:800;text-align:center}',
'.ku2-wort{font-size:30px;font-weight:800;text-align:center;color:#12181F;background:#fff;border:1px solid #E7EBF0;border-radius:17px;padding:22px 16px;margin:0 0 16px;letter-spacing:-.5px}',
'.ku2-hinweis{font-size:13.5px;color:#5E6A78;margin:0 0 14px;line-height:1.45}',
'.ku2-mitte{text-align:center;margin:0 0 16px}',
'.ku2-opt{display:grid;gap:9px}',
'.ku2-o{display:block;width:100%;text-align:left;border:1px solid #E7EBF0;background:#fff;border-radius:15px;padding:14px 16px;font-family:inherit;font-size:15.5px;color:#12181F;cursor:pointer;transition:.12s;line-height:1.35}',
'.ku2-o:hover{border-color:#1F5FD1;background:#F7FAFF}',
'.ku2-o.gut{border-color:#16a34a;background:#F1FAF4;color:#0F7738;font-weight:800}',
'.ku2-o.schlecht{border-color:#DD0000;background:#FFF4F4;color:#7A1414;font-weight:800}',
'.ku2-o[disabled]{cursor:default}',
'.ku2-drei{display:grid;grid-template-columns:1fr 1fr 1fr;gap:9px}',
'.ku2-drei .ku2-o{text-align:center;font-size:18px;font-weight:800;padding:18px 8px}',
'.ku2-eing{width:100%;border:1px solid #DEE4EC;border-radius:15px;padding:14px 16px;font:inherit;font-size:17px;background:#fff;color:#12181F}',
'.ku2-eing:focus{outline:none;border-color:#1F5FD1}',

/* Bausteine */
'.ku2-bau{min-height:60px;background:#fff;border:2px dashed #D6E2F3;border-radius:15px;padding:10px;margin:0 0 14px;display:flex;flex-wrap:wrap;gap:7px;align-content:flex-start}',
'.ku2-bau:empty::after{content:"Tipp die Wörter unten an";color:#9AA6B4;font-size:13.5px;padding:6px 4px}',
'.ku2-teile{display:flex;flex-wrap:wrap;gap:7px}',
'.ku2-t{border:1px solid #D6E2F3;background:#F5F8FD;color:#12408F;border-radius:11px;padding:10px 14px;font-family:inherit;font-size:15.5px;font-weight:700;cursor:pointer}',
'.ku2-t:hover{background:#E7EFFB}',
'.ku2-t.weg{visibility:hidden}',
'.ku2-bau .ku2-t{background:#1F5FD1;border-color:#1F5FD1;color:#fff}',

/* Paare */
'.ku2-paare{display:grid;grid-template-columns:1fr 1fr;gap:9px}',
'.ku2-sp{display:grid;gap:8px;align-content:start}',
'.ku2-p{border:1px solid #E7EBF0;background:#fff;border-radius:13px;padding:11px 12px;font-family:inherit;font-size:14px;color:#12181F;cursor:pointer;text-align:left;line-height:1.3;transition:.12s}',
'.ku2-p:hover{border-color:#1F5FD1}',
'.ku2-p.an{border-color:#1F5FD1;background:#EEF3FA;font-weight:700}',
'.ku2-p.fest{border-color:#16a34a;background:#F1FAF4;color:#0F7738;cursor:default}',
'.ku2-p.daneben{border-color:#DD0000;background:#FFF4F4}',

/* Ordnen */
'.ku2-ordn{display:grid;gap:8px;margin:0 0 12px}',
'.ku2-z{display:flex;gap:10px;align-items:center;border:1px solid #E7EBF0;background:#fff;border-radius:13px;padding:11px 13px;font-family:inherit;font-size:14.5px;color:#12181F;cursor:pointer;text-align:left;line-height:1.35;width:100%}',
'.ku2-z .p{width:24px;height:24px;flex:0 0 24px;border-radius:8px;background:#1F5FD1;color:#fff;font-size:12px;font-weight:800;display:grid;place-items:center}',
'.ku2-z.offen{background:#F5F8FD;border-color:#D6E2F3}',
'.ku2-z:hover{border-color:#1F5FD1}',
'.ku2-leerfeld{border:2px dashed #D6E2F3;border-radius:13px;padding:14px;text-align:center;color:#9AA6B4;font-size:13.5px}',

/* Sprechen */
'.ku2-ziel{background:#F1FAF4;border:1px solid #CDEBD9;border-radius:14px;padding:13px 15px;font-size:17px;color:#12181F;margin:0 0 16px;line-height:1.4}',
'.ku2-erk{min-height:24px;font-size:15px;color:#5E6A78;text-align:center;margin:0 0 10px;line-height:1.4}',
'.ku2-mic.laeuft{background:#DD0000;box-shadow:0 4px 0 #A80000;animation:kupuls 1.1s infinite}',
'@keyframes kupuls{0%,100%{box-shadow:0 4px 0 #A80000,0 0 0 0 rgba(221,0,0,.4)}70%{box-shadow:0 4px 0 #A80000,0 0 0 14px rgba(221,0,0,0)}}',

/* Rückmeldung */
'.ku2-rueck{border-radius:15px;padding:13px 15px;margin:0 0 10px;font-size:14px;line-height:1.5}',
'.ku2-rueck.gut{background:#F1FAF4;border:1px solid #CDEBD9;color:#12181F}',
'.ku2-rueck.schlecht{background:#FFF4F4;border:1px solid #F6D5D5;color:#12181F}',
'.ku2-rueck b.kopf{display:block;font-size:15px;margin:0 0 4px}',
'.ku2-rueck.gut b.kopf{color:#0F7738}',
'.ku2-rueck.schlecht b.kopf{color:#A80000}',
'.ku2-rueck .ls{margin:0 0 5px;font-size:14.5px}',
'.ku2-rueck p{margin:5px 0 0;color:#3C4756}',

/* Ende */
'.ku2-ende{text-align:center;padding:26px 12px}',
'.ku2-ende .gr{font-size:52px;margin:0 0 6px}',
'.ku2-ende h3{margin:0 0 6px;font-size:24px;color:#12181F}',
'.ku2-ende p{margin:0 0 18px;color:#5E6A78;font-size:14.5px;line-height:1.5}',
'.ku2-ende .knoepfe{display:flex;gap:9px;justify-content:center;flex-wrap:wrap}',

/* ---- Vollbild Schreibtrainer ---- */
'.sw-ov{position:fixed;inset:0;z-index:9100;background:#F4F6F9;display:none;flex-direction:column;height:100dvh}',
'.sw-ov.auf{display:flex}',
'.sw-kopf{flex:0 0 auto;display:flex;align-items:center;gap:12px;padding:11px 14px;background:#fff;border-bottom:1px solid #E7EBF0}',
'.sw-kopf .zu{border:none;background:#F1F4F8;width:36px;height:36px;flex:0 0 36px;border-radius:11px;font-size:20px;cursor:pointer;color:#5E6A78;line-height:1;font-family:inherit}',
'.sw-kopf .who{flex:1;min-width:0}',
'.sw-kopf b{display:block;font-size:15px;color:#12181F;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
'.sw-kopf small{display:block;font-size:12px;color:#5E6A78}',
'.sw-koerper{flex:1 1 auto;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:16px 14px calc(16px + env(safe-area-inset-bottom))}',
'.sw-raster{max-width:1080px;margin:0 auto;display:grid;grid-template-columns:1fr;gap:14px}',
'@media(min-width:900px){.sw-raster{grid-template-columns:360px 1fr;align-items:start}}',
'.sw-kasten{background:#fff;border:1px solid #E7EBF0;border-radius:19px;padding:16px 18px}',
'.sw-kasten h4{margin:0 0 8px;font-size:15px;color:#12181F}',
'.sw-kasten p{margin:0 0 10px;font-size:14px;line-height:1.55;color:#3C4756}',
'.sw-liste{list-style:none;margin:0;padding:0}',
'.sw-liste li{position:relative;padding:7px 0 7px 27px;font-size:14px;line-height:1.4;color:#5E6A78;border-bottom:1px solid #F2F5F9}',
'.sw-liste li:last-child{border-bottom:none}',
'.sw-liste li::before{content:"○";position:absolute;left:4px;top:7px;color:#B9C3D0;font-size:13px}',
'.sw-liste li.ok{color:#12181F;font-weight:600}',
'.sw-liste li.ok::before{content:"✓";color:#16a34a;font-weight:800}',
'.sw-vorgabe{background:#F5F8FD;border:1px solid #D6E2F3;border-radius:12px;padding:9px 12px;font-size:13.5px;color:#12408F;margin:0 0 7px}',
'.sw-feld{width:100%;min-height:280px;border:1px solid #DEE4EC;border-radius:15px;padding:15px 17px;font:inherit;font-size:16px;line-height:1.65;resize:vertical;background:#fff;color:#12181F}',
'.sw-feld:focus{outline:none;border-color:#1F5FD1}',
'.sw-zeile{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:10px 0 0}',
'.sw-zaehler{font-size:13.5px;font-weight:800;color:#5E6A78;background:#F1F4F8;border-radius:999px;padding:7px 14px}',
'.sw-zaehler.gut{background:#F1FAF4;color:#0F7738}',
'.sw-zaehler.viel{background:#FFF8E1;color:#6B5600}',
'.sw-hilfen{display:flex;gap:7px;flex-wrap:wrap;margin:12px 0 0}',
'.sw-h{border:1px solid #D6E2F3;background:#F5F8FD;color:#12408F;border-radius:999px;padding:7px 13px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;text-align:left;line-height:1.3}',
'.sw-h:hover{background:#E7EFFB}',
'.sw-pruef{margin:14px 0 0}',
'.sw-krit{display:flex;gap:10px;align-items:flex-start;border:1px solid #E7EBF0;background:#fff;border-radius:13px;padding:11px 13px;margin:0 0 8px;width:100%;text-align:left;font-family:inherit;cursor:pointer}',
'.sw-krit .box{width:22px;height:22px;flex:0 0 22px;border-radius:7px;border:2px solid #C6D2E2;display:grid;place-items:center;font-size:13px;color:#fff}',
'.sw-krit.an .box{background:#16a34a;border-color:#16a34a}',
'.sw-krit b{display:block;font-size:14px;color:#12181F;margin:0 0 2px}',
'.sw-krit small{display:block;font-size:12.5px;color:#5E6A78;line-height:1.4}',
'.sw-falle{background:#FFF4F4;border:1px solid #F6D5D5;border-left:3px solid #DD0000;border-radius:0 12px 12px 0;padding:9px 12px;margin:0 0 7px;font-size:13.5px;color:#7A1414;line-height:1.45}',
'.sw-muster{background:#F1FAF4;border:1px solid #CDEBD9;border-radius:14px;padding:14px 16px;font-size:15px;line-height:1.65;color:#12181F;white-space:pre-wrap}',
'.sw-ki{background:#F5F8FD;border:1px solid #D6E2F3;border-radius:14px;padding:14px 16px;font-size:14px;line-height:1.6;color:#12408F;white-space:pre-wrap}',

/* ---- Schreib-Übersicht ---- */
'.ku-chips{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:0 0 8px}',
'.ku-chip{border:1px solid #E7EBF0;background:#fff;color:#5E6A78;border-radius:999px;padding:8px 15px;font-size:13.5px;font-weight:700;cursor:pointer;font-family:inherit;transition:.14s}',
'.ku-chip:hover{border-color:#C6D2E2;color:#12408F}',
'.ku-chip.on{background:#1F5FD1;border-color:#1F5FD1;color:#fff}',
'.ku-chip.lv.on{background:#12181F;border-color:#12181F}',
'@media(max-width:760px){.ku-chips{flex-wrap:nowrap;overflow-x:auto;padding-bottom:3px;scrollbar-width:none}.ku-chips::-webkit-scrollbar{display:none}.ku-chip{flex:0 0 auto}}',
'.ku-swraster{display:grid;grid-template-columns:repeat(auto-fill,minmax(258px,1fr));gap:12px}',
'@media(max-width:640px){.ku-swraster{grid-template-columns:1fr}}',
'.ku-sw{text-align:left;font-family:inherit;background:#fff;border:1px solid #E7EBF0;border-radius:18px;padding:15px 16px;cursor:pointer;transition:.14s;display:flex;flex-direction:column;gap:8px}',
'.ku-sw:hover{border-color:#1F5FD1;transform:translateY(-3px);box-shadow:0 8px 20px rgba(18,24,31,.09)}',
'.ku-sw b{font-size:15px;color:#12181F;line-height:1.3}',
'.ku-sw p{margin:0;font-size:12.5px;color:#5E6A78;line-height:1.45}',
'.ku-sw .unten{display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-top:auto}',
'.ku-sw .angefangen{font-size:11.5px;font-weight:800;color:#0F7738}'

    ].join('\n');
    document.head.appendChild(s);
  }

  /* Tastatur auf dem Handy: das Vollbild schrumpfen, nicht die Seite schieben */
  var vvGesetzt=false;
  function tastaturBeobachten(){
    if(vvGesetzt || !window.visualViewport) return;
    vvGesetzt=true;
    var vv=window.visualViewport;
    var passe=function(){
      ['ku2Ov','swOv'].forEach(function(id){
        var ov=el(id); if(!ov||!ov.classList.contains('auf')) return;
        var verdeckt=Math.max(0,window.innerHeight-vv.height-vv.offsetTop);
        ov.style.paddingBottom=verdeckt?verdeckt+'px':'';
      });
    };
    vv.addEventListener('resize',passe);
    vv.addEventListener('scroll',passe);
  }

  /* ============================================================
     1 — Die Niveau-Auswahl
     ============================================================ */

  function niveauKarte(n){
    var da=hatKurs(n.id), p=niveauProzent(n.id), jetzt=(niveauGemerkt()===n.id);
    var kann=(n.kann||[]).slice(0,7).map(function(k){ return '<li>'+E(k)+'</li>'; }).join('');
    var out='<div class="ku-nv'+(da?'':' bald')+(jetzt&&da?' jetzt':'')+'">'
      +'<div class="oben"><div class="stufe">'+E(n.id)+'</div>'
        +'<div><h2>'+E(n.t)+'</h2><p class="u">'+E(n.u)+'</p></div></div>'
      +'<ul class="kann">'+kann+'</ul>'
      +'<div class="pillen">'
        +'<span class="ku-pill gelb">Ziel: '+E(n.ziel||'')+'</span>'
        +'<span class="ku-pill grau">'+E(n.dauer||'')+'</span>'
        +(n.lekt?'<span class="ku-pill">'+n.lekt+' Lektionen</span>':'')
      +'</div>';
    if(da){
      out+='<div class="fuss"><span class="ku-bar'+(p>=100?' voll':'')+'"><i style="width:'+p+'%"></i></span>'
        +'<span style="font-size:12.5px;color:#5E6A78;font-weight:700">'+p+' %</span>'
        +'<button class="ku-btn blau klein" onclick="niveauWaehlen(\''+E(n.id)+'\')">'
        +(p>0?'Weiter →':'Kurs öffnen →')+'</button></div>';
    } else {
      out+='<div class="hinweis">Die Lektionen kommen als Nächstes — Wortschatz, Dialoge und Übungen '
        +'zu diesem Niveau findest du schon im Lernbereich.</div>'
        +'<div class="fuss"><button class="ku-btn hell klein" onclick="niveauWaehlen(\''+E(n.id)+'\')">'
        +'Zum Lernbereich →</button></div>';
    }
    return out+'</div>';
  }

  window.renderNiveau=function(){
    stil();
    var v=flaeche(); if(!v) return;
    var alle=niveaus();
    if(!alle.length){
      v.className='ku'; v.innerHTML='<div class="ku-leer">Die Niveaus werden geladen …</div>'; return;
    }
    var jetzt=niveauGemerkt(), n=niveauVon(jetzt), p=niveauProzent(jetzt);
    var kopf='<div class="ku-kopf"><h1>Wo stehst du?</h1>'
      +'<p>Wähl dein Niveau. Das ist kein Filter, sondern ein Eingang: Wer A1 wählt, sieht eine A1-Welt — '
      +'Wörter, Gespräche, Grammatik und Schreiben genau auf dieser Stufe.</p>'
      +'<div class="ku-zahlen">'
      +'<div class="ku-z"><b>'+E(jetzt)+'</b><span>dein Niveau</span></div>'
      +'<div class="ku-z"><b>'+p+' %</b><span>geschafft</span></div>'
      +'<div class="ku-z"><b>'+(n&&n.ziel?E(n.ziel.split('·')[0].replace(/\s+$/,'')):'—')+'</b><span>dein Ziel</span></div>'
      +'</div></div>';
    v.className='ku';
    v.innerHTML=kopf+'<div class="ku-nvliste">'+alle.map(niveauKarte).join('')+'</div>';
    hoch();
  };

  window.niveauWaehlen=function(id){
    S('niveau',id);
    if(hatKurs(id)) return window.renderKursA1();
    if(window.go){ try{ window.go('lernen'); return; }catch(e){} }
    note('Für ' + id + ' liegen die Lektionen noch nicht bereit — im Lernbereich findest du schon Übungen dazu.');
    window.renderNiveau();
  };

  /* ============================================================
     2 — Der A1-Kurs
     ============================================================ */

  window.renderKursA1=function(){
    stil();
    var v=flaeche(); if(!v) return;
    var L=lektionen();
    v.className='ku';
    if(!L.length){
      v.innerHTML='<button class="ku-zurueck" onclick="renderNiveau()">← Alle Niveaus</button>'
        +'<div class="ku-leer">Der A1-Kurs wird geladen. Lade die Seite bitte neu.</div>';
      return;
    }
    var A=window.A1, p=niveauProzent('A1');
    var fertig=0,i; for(i=0;i<L.length;i++) if(lekProzent(L[i].nr)>=100) fertig++;

    var kopf='<div class="ku-kopf"><h1>'+E(A.titel||'A1 — Der Anfang')+'</h1>'
      +'<p>'+E(A.unter||'')+'</p>'
      +'<div class="ku-zahlen">'
      +'<div class="ku-z"><b>'+fertig+'/'+L.length+'</b><span>Lektionen fertig</span></div>'
      +'<div class="ku-z"><b>'+p+' %</b><span>vom ganzen Kurs</span></div>'
      +'<div class="ku-z"><b>Start Deutsch 1</b><span>dein Ziel</span></div>'
      +'</div></div>';

    var weg='<div class="ku-weg">'+L.map(function(l){
      var lp=lekProzent(l.nr), teile=[];
      if((l.chunks||[]).length) teile.push((l.chunks||[]).length+' Wörter');
      if((l.ueb||[]).length)    teile.push((l.ueb||[]).length+' Übungen');
      if(l.dialog)              teile.push('1 Gespräch');
      return '<button class="ku-lek'+(lp>=100?' fertig':'')+'" onclick="kursA1('+l.nr+')">'
        +'<span class="bild">'+bildTag(lekBild(l,true),lekBildErsatz(l,true))
        +'<span class="marke">'+(lp>=100?'✓':zahl(l.nr))+'</span></span>'
        +'<span class="tx"><b>'+E(l.t)+'</b><small>'+E(teile.join(' · '))+'</small></span>'
        +'<span class="ba"><span class="ku-bar'+(lp>=100?' voll':'')+'"><i style="width:'+lp+'%"></i></span></span>'
        +'<span class="pf">→</span>'
        +'</button>';
    }).join('')+'</div>';

    v.innerHTML='<button class="ku-zurueck" onclick="renderNiveau()">← Alle Niveaus</button>'
      +kopf
      +'<h3 class="ku-h3">Dein Weg durch A1</h3>'
      +weg
      +'<div class="ku-leer" style="text-align:left;background:#F5F8FD;border-style:solid;border-color:#D6E2F3;color:#12408F">'
      +'Eine Lektion dauert etwa 25 Minuten. Du musst sie nicht am Stück machen — '
      +'was du geschafft hast, bleibt gespeichert.</div>';
    hoch();
  };

  /* --- die Lektionsseite --- */
  var K={ lek:null, ki:0, gedreht:false };

  window.kursA1=function(nr){
    stil();
    var l=lektionVon(nr), v=flaeche(); if(!v) return;
    if(!l){ note('Diese Lektion finde ich gerade nicht.'); return window.renderKursA1(); }
    K.lek=l; K.ki=0; K.gedreht=false;
    var st=lekStand(l.nr), lp=lekProzent(l.nr);

    var mess=[];
    if((l.chunks||[]).length) mess.push('🧠 '+l.chunks.length+' Wendungen');
    if((l.gram||[]).length)   mess.push('🧩 '+l.gram.length+' Regeln');
    if((l.ueb||[]).length)    mess.push('✏️ '+l.ueb.length+' Aufgaben');
    if(l.dialog&&(l.dialog.schritte||[]).length) mess.push('💬 Gespräch');
    if(l.schreiben)           mess.push('✉️ Schreiben');
    mess.push('⏱ etwa 25 Minuten');

    var kopf='<div class="ku-hero">'
      +'<div class="ku-hero-tx">'
        +'<span class="nr">Lektion '+zahl(l.nr)+' von '+lektionen().length+'</span>'
        +'<h1>'+E(l.t)+'</h1>'
        +'<p>'+E(l.ziel||'')+'</p>'
        +'<div class="ku-chips">'+mess.map(function(m){return '<span class="ku-chip">'+m+'</span>';}).join('')+'</div>'
      +'</div>'
      +'<div class="ku-hero-bild">'+bildTag(lekBild(l),lekBildErsatz(l))
        +'<span class="ku-ring" style="--p:'+lp+'%"><i>'+lp+'%</i></span>'
      +'</div>'
    +'</div>';

    /* Sprungleiste über die Abschnitte */
    var kap=[];
    if((l.chunks||[]).length) kap.push(['kuAbWoerter','Wörter',!!st.woerter]);
    if((l.gram||[]).length)   kap.push(['kuAbGram','Grammatik',!!st.gram]);
    if((l.ueb||[]).length)    kap.push(['kuAbUeben','Üben',(st.ueb||0)>=100]);
    if(l.dialog&&(l.dialog.schritte||[]).length) kap.push(['kuAbSprechen','Sprechen',!!st.dialog]);
    if(l.schreiben)           kap.push(['kuAbSchreiben','Schreiben',!!st.schreiben]);
    if(l.aus)                 kap.push(['kuAbAus','Aussprache',!!st.aus]);
    var leiste='<nav class="ku-kap">'+kap.map(function(k){
      return '<button class="'+(k[2]?'fertig':'')+'" onclick="kuSpringe(\''+k[0]+'\')">'
        +'<span class="pu"></span>'+k[1]+'</button>';
    }).join('')+'</nav>';

    var teile=[];

    /* 1 — Wörter */
    if((l.chunks||[]).length){
      teile.push('<section class="ku-ab" id="kuAbWoerter">'
        +abKopf('🧠','Wörter',(l.chunks.length)+' Wendungen — nicht einzelne Wörter, sondern ganze Sätze zum Mitnehmen',st.woerter,'#EEF3FA')
        +'<div id="kuKarte"></div>'
        +'<div class="ku-punkte" id="kuPunkte"></div>'
        +'<div class="ku-ksteuer">'
          +'<button class="ku-rund" id="kuZurueck" onclick="kuKarteZurueck()">←</button>'
          +'<span class="zaehler" id="kuZaehler"></span>'
          +'<button class="ku-rund" onclick="kuKarteVorlesen()">🔊</button>'
          +'<button class="ku-rund" id="kuVor" onclick="kuKarteVor()">→</button>'
        +'</div></section>');
    }

    /* 2 — Grammatik */
    if((l.gram||[]).length){
      teile.push('<section class="ku-ab" id="kuAbGram">'
        +abKopf('🧩','Grammatik',l.gram.length+' Regeln, die genau hier gebraucht werden',st.gram,'#F3F0FB')
        +l.gram.map(function(g,i){
          return '<div class="ku-gr" id="kuGr'+i+'">'
            +'<button onclick="kuGram('+i+')">'+E(g.t)+'<span class="pf">›</span></button>'
            +'<div class="inhalt"><p>'+E(g.e)+'</p>'
            +(g.bsp||[]).map(function(b,j){
              return '<div class="bsp"><span>'+E(b)+'</span>'
                +'<button onclick="kuGramSagen('+i+','+j+')" aria-label="Vorlesen">🔊</button></div>';
            }).join('')
            +'</div></div>';
        }).join('')
        +'</section>');
    }

    /* 3 — Üben */
    if((l.ueb||[]).length){
      teile.push('<section class="ku-ab" id="kuAbUeben">'
        +abKopf('✏️','Üben',l.ueb.length+' Aufgaben, gemischt — genau das hält am längsten',(st.ueb||0)>=100,'#FFF6E0')
        +'<span class="ku-bar'+((st.ueb||0)>=100?' voll':'')+'" style="margin:0 0 13px"><i style="width:'+(st.ueb||0)+'%"></i></span>'
        +'<button class="ku-btn blau breit" onclick="kuUebenStarten()">'
        +((st.ueb||0)>0?'Weiter üben →':'Übungsrunde starten →')+'</button>'
        +'</section>');
    }

    /* 4 — Sprechen */
    if(l.dialog && (l.dialog.schritte||[]).length){
      teile.push('<section class="ku-ab" id="kuAbSprechen">'
        +abKopf('💬','Sprechen',l.dialog.schritte.length+' Schritte mit Amanda — du antwortest getippt oder gesprochen',st.dialog,'#E9F6F1')
        +'<div class="ku-mitbild"><div class="txt">'
        +(l.dialog.ort?'<p style="margin:0 0 13px;font-size:14px;line-height:1.55;color:#3C4756">'+E(l.dialog.ort)+'</p>':'')
        +'<button class="ku-btn breit" onclick="kuDialogStarten()">Gespräch anfangen →</button>'
        +'</div><div class="bd">'+bildTag('illu/th-gespraech-s.jpg','')+'</div></div>'
        +'</section>');
    }

    /* 5 — Schreiben */
    if(l.schreiben){
      teile.push('<section class="ku-ab" id="kuAbSchreiben">'
        +abKopf('✉️','Schreiben',(l.schreiben.punkte||[]).length+' Leitpunkte — genau so läuft es in der Prüfung',st.schreiben,'#FDECEC')
        +'<div class="ku-mitbild"><div class="txt">'
        +'<p style="margin:0 0 13px;font-size:14px;line-height:1.55;color:#3C4756">'+E(l.schreiben.auf||'')+'</p>'
        +'<button class="ku-btn blau breit" onclick="kuSchreibenStarten()">Schreibtrainer öffnen →</button>'
        +'</div><div class="bd">'+bildTag('bilder/schreiben/kurs.webp','bilder/lesen/mail.webp')+'</div></div>'
        +'</section>');
    }

    /* 6 — Aussprache */
    if(l.aus){
      teile.push('<section class="ku-ab" id="kuAbAus">'
        +abKopf('🗣️','Aussprache','der Schwerpunkt dieser Lektion',st.aus,'#EAF4FB')
        +'<div class="ku-aus">'+E(l.aus)+'</div>'
        +'<div style="margin:13px 0 0"><button class="ku-btn hell" onclick="kuAusSagen()">🔊 Vorlesen</button></div>'
        +'</section>');
    }

    var vor=lektionVon(l.nr+1);
    v.className='ku';
    v.innerHTML='<button class="ku-zurueck" onclick="renderKursA1()">← Alle Lektionen</button>'
      +kopf+leiste+teile.join('')
      +(vor?'<div style="text-align:center;margin:22px 0 0">'
        +'<button class="ku-btn blau" onclick="kursA1('+vor.nr+')">Lektion '+zahl(vor.nr)+': '+E(vor.t)+' →</button></div>':
        '<div class="ku-leer" style="margin-top:22px">Das war die letzte Lektion von A1. Respekt — das ist ein ganzes Jahr Alltag auf Deutsch. 💛</div>');
    if((l.chunks||[]).length) karteZeichnen();
    hoch();
  };

  function abKopf(em,titel,unter,fertig,farbe){
    return '<div class="ku-abkopf">'
      +'<span class="em"'+(farbe?' style="background:'+farbe+'"':'')+'>'+em+'</span>'
      +'<span><b>'+E(titel)+'</b><small>'+E(unter)+'</small></span>'
      +(fertig?'<span class="ok">✓</span>':'')+'</div>';
  }
  window.kuSpringe=function(id){
    var d=document.getElementById(id); if(!d) return;
    try{ d.scrollIntoView({behavior:'smooth',block:'start'}); }catch(e){ d.scrollIntoView(); }
  };

  /* --- Chunk-Karten --- */
  function karteZeichnen(){
    var l=K.lek; if(!l) return;
    var c=(l.chunks||[])[K.ki]; var kasten=el('kuKarte'); if(!c||!kasten) return;
    var mot = kMotiv(c);
    var bild = mot || lekBild(l,true);
    kasten.innerHTML='<div class="ku-kw">'
      +'<div class="ku-kw-bild">'+bildTag(bild, mot?lekBild(l,true):lekBildErsatz(l,true))+'</div>'
      +'<button class="ku-kw-tx" onclick="kuKarteDrehen()">'
        +'<span class="de">'+E(c.de)+'</span>'
        +(K.gedreht
          ? '<span class="hi">'+E(c.hi||'')+'</span>'+(c.bsp?'<span class="bsp">'+E(c.bsp)+'</span>':'')
          : '<span class="tipp">👆 antippen für den Hinweis</span>')
      +'</button></div>';
    var pu=el('kuPunkte');
    if(pu){ var o='',n; for(n=0;n<l.chunks.length;n++)
      o+='<i class="'+(n===K.ki?'jetzt':(n<K.ki?'durch':''))+'"></i>';
      pu.innerHTML=o; }
    var z=el('kuZaehler'); if(z) z.textContent=(K.ki+1)+' von '+l.chunks.length;
    var a=el('kuZurueck'); if(a) a.disabled=(K.ki<=0);
    var b=el('kuVor'); if(b) b.disabled=(K.ki>=l.chunks.length-1);
  }
  window.kuKarteDrehen=function(){ K.gedreht=!K.gedreht; karteZeichnen(); };
  window.kuKarteVor=function(){
    var l=K.lek; if(!l) return;
    if(K.ki<l.chunks.length-1){ K.ki++; K.gedreht=false; karteZeichnen(); }
    if(K.ki>=l.chunks.length-1){ lekMerken(l.nr,{woerter:true}); }
  };
  window.kuKarteZurueck=function(){ if(K.ki>0){ K.ki--; K.gedreht=false; karteZeichnen(); } };
  window.kuKarteVorlesen=function(){
    var l=K.lek; if(!l) return; var c=l.chunks[K.ki]; if(!c) return;
    sprich(c.bsp||c.de,{rolle:'julia'});
  };

  /* --- Grammatik-Kästen --- */
  window.kuGram=function(i){
    var d=el('kuGr'+i); if(!d) return;
    d.classList.toggle('auf');
    if(K.lek) lekMerken(K.lek.nr,{gram:true});
  };
  window.kuGramSagen=function(i,j){
    var l=K.lek; if(!l) return; var g=(l.gram||[])[i]; if(!g) return;
    var b=(g.bsp||[])[j]; if(b) sprich(b,{rolle:'julia'});
  };
  window.kuAusSagen=function(){
    var l=K.lek; if(!l||!l.aus) return;
    lekMerken(l.nr,{aus:true});
    sprich(l.aus,{rolle:'julia'});
    window.kursA1(l.nr);
  };

  /* --- Üben aus der Lektion heraus --- */
  window.kuUebenStarten=function(){
    var l=K.lek; if(!l) return;
    var nr=l.nr;
    window.kursUeben(l.ueb, 'Lektion '+zahl(nr)+' · '+l.t, function(erg){
      var alt=(lekStand(nr).ueb)||0;
      var neu=erg&&erg.ges?Math.round(erg.richtig/erg.ges*100):alt;
      lekMerken(nr,{ueb:Math.max(alt,neu)});
      if(el('v-kurs')||el('v-lernen')) window.kursA1(nr);
    });
  };

  /* --- Sprechen: das Dialogfenster aus lernen.js, mit Daten statt ID --- */
  window.kuDialogStarten=function(){
    var l=K.lek; if(!l||!l.dialog) return;
    var d={
      id:'a1-'+l.id,
      titel:'Lektion '+zahl(l.nr)+' — '+l.t,
      lvl:'A1',
      dauer:(l.dialog.schritte||[]).length+' Schritte',
      em:'💬',
      ort:l.dialog.ort||'',
      kat:'a1',
      schritte:l.dialog.schritte||[]
    };
    lekMerken(l.nr,{dialog:true});
    if(window.lernDialogDaten) return window.lernDialogDaten(d);
    /* Notweg: den Dialog in die Liste legen und das Fenster wie sonst öffnen */
    if(window.lernDialog && window.DIALOGE){
      var da=window.DIALOGE, i, drin=false;
      for(i=0;i<da.length;i++) if(da[i].id===d.id){ da[i]=d; drin=true; }
      if(!drin) da.push(d);
      return window.lernDialog(d.id);
    }
    note('Das Gesprächsfenster ist hier noch nicht geladen — im Lernbereich kannst du schon reden.');
  };

  /* --- Schreiben aus der Lektion heraus --- */
  window.kuSchreibenStarten=function(){
    var l=K.lek; if(!l||!l.schreiben) return;
    window.schreibTrainer({
      id:'a1-'+l.id,
      lvl:'A1',
      art:'mitteilung',
      pruef:'frei',
      t:'Lektion '+zahl(l.nr)+' — Schreiben',
      sit:l.schreiben.auf||'',
      empf:'',
      punkte:l.schreiben.punkte||[],
      anrede:'', gruss:'',
      woerter:[30,70],
      hilfe:l.schreiben.hilfe||[],
      krit:[], muster:'', fallen:[],
      zurueck:l.nr
    });
  };

  /* ============================================================
     3 — Die Übungsrunde
     ============================================================ */
  var U=null;

  function ovUeben(){
    var o=el('ku2Ov'); if(o) return o;
    o=document.createElement('div'); o.className='ku2-ov'; o.id='ku2Ov';
    o.innerHTML='<div class="ku2-kopf">'
        +'<button class="zu" onclick="kursUebenZu()" aria-label="Schließen">×</button>'
        +'<span class="mitte"><b id="ku2Titel"></b><span class="ku-bar"><i id="ku2Bar" style="width:0%"></i></span></span>'
        +'<span class="zaehler" id="ku2Zahl"></span>'
      +'</div>'
      +'<div class="ku2-koerper" id="ku2Koerper"><div class="ku2-innen" id="ku2Innen"></div></div>'
      +'<div class="ku2-fuss" id="ku2Fuss"><div class="innen" id="ku2FussInnen"></div></div>';
    document.body.appendChild(o);
    tastaturBeobachten();
    return o;
  }

  var artName={wahl:'Wähl die richtige Antwort',luecke:'Setz das fehlende Wort ein',artikel:'Der, die oder das?',
    bausteine:'Bau den Satz',paare:'Was gehört zusammen?',hoeren:'Hör zu',sprechen:'Sprich nach',
    uebersetzen:'Sag es auf Deutsch',ordnen:'Bring es in die richtige Reihenfolge'};

  window.kursUeben=function(liste,titel,fertigCB){
    stil();
    liste=(liste||[]).filter(function(a){ return a && a.typ; });
    if(!liste.length){ note('Für diese Runde habe ich noch keine Aufgaben.'); return; }
    ovUeben();
    U={liste:liste, titel:titel||'Üben', i:0, richtig:0, falsch:[], cb:fertigCB||null,
       beantwortet:false, hilf:null, ende:false};
    el('ku2Ov').classList.add('auf');
    document.body.style.overflow='hidden';
    el('ku2Titel').textContent=U.titel;
    aufgabeZeigen();
  };

  function koerper(h){ var k=el('ku2Innen'); if(k) k.innerHTML=h; var s=el('ku2Koerper'); if(s) s.scrollTop=0; }
  function fuss(h){ var k=el('ku2FussInnen'); if(k) k.innerHTML=h||''; }

  function aufgabeZeigen(){
    if(!U) return;
    if(U.i>=U.liste.length) return rundeEnde();
    U.beantwortet=false;
    U.hilf={bau:[], paarLinks:null, paarFest:0, paarFehler:0, ordn:[], gehoert:false};
    var a=U.liste[U.i];
    var bar=el('ku2Bar'); if(bar) bar.style.width=Math.round(U.i/U.liste.length*100)+'%';
    var z=el('ku2Zahl'); if(z) z.textContent=(U.i+1)+'/'+U.liste.length;

    var kopf='<div class="ku2-art">'+E(artName[a.typ]||'Aufgabe')+'</div>';
    var h='', f='';

    if(a.typ==='wahl'){
      h=kopf+'<div class="ku2-frage">'+E(a.f)+'</div>'+optionen(a.o);
    }
    else if(a.typ==='hoeren'){
      h=kopf+'<div class="ku2-hinweis">Tipp auf Hören. Du darfst so oft hören, wie du willst.</div>'
        +'<div class="ku2-mitte"><button class="ku-btn blau gross" onclick="ku2Hoeren()">🔊 Hören</button></div>'
        +'<div id="ku2Nach" style="display:none"><div class="ku2-frage">'+E(a.f)+'</div>'+optionen(a.o)+'</div>';
    }
    else if(a.typ==='artikel'){
      h=kopf+'<div class="ku2-wort">'+E(a.w)+'</div>'
        +'<div class="ku2-drei">'
        +['der','die','das'].map(function(x,k){
          return '<button class="ku2-o" data-k="'+k+'" onclick="ku2Artikel(\''+x+'\','+k+')">'+x+'</button>';
        }).join('')+'</div>';
    }
    else if(a.typ==='luecke'){
      h=kopf+'<div class="ku2-satz">'+E(a.f).replace(/_{2,}/g,'<span class="lk">&nbsp;</span>')+'</div>'
        +'<input class="ku2-eing" id="ku2Feld" type="text" autocomplete="off" autocapitalize="off" '
        +'autocorrect="off" spellcheck="false" placeholder="Das fehlende Wort …">';
      f=pruefKnopf();
    }
    else if(a.typ==='uebersetzen'){
      h=kopf+'<div class="ku2-frage">'+E(a.f)+'</div>'
        +'<input class="ku2-eing" id="ku2Feld" type="text" autocomplete="off" autocapitalize="sentences" '
        +'autocorrect="off" spellcheck="false" placeholder="Auf Deutsch …">';
      f=pruefKnopf();
    }
    else if(a.typ==='bausteine'){
      h=kopf+'<div class="ku2-frage">Bau daraus einen richtigen Satz.</div>'
        +'<div class="ku2-bau" id="ku2Bau"></div><div class="ku2-teile" id="ku2Teile"></div>';
      f=pruefKnopf();
    }
    else if(a.typ==='paare'){
      h=kopf+'<div class="ku2-frage">Tipp links etwas an, dann rechts das, was dazugehört.</div>'
        +'<div class="ku2-paare"><div class="ku2-sp" id="ku2PL"></div><div class="ku2-sp" id="ku2PR"></div></div>';
    }
    else if(a.typ==='sprechen'){
      h=kopf+'<div class="ku2-frage">'+E(a.f)+'</div>'
        +(a.l?'<div class="ku2-ziel">'+E(a.l)+' …</div>':'')
        +'<div class="ku2-mitte"><button class="ku-btn ku2-mic" id="ku2Mic" onclick="ku2Aufnehmen()">🎤 Aufnehmen</button></div>'
        +'<div class="ku2-erk" id="ku2Erk"></div>'
        +'<div class="ku2-mitte"><button class="ku-btn hell klein" onclick="ku2Vorsagen()">🔊 Erst vormachen</button></div>';
      f='<button class="ku-btn hell breit" onclick="ku2Gesagt()">Ich hab es gesagt</button>';
    }
    else if(a.typ==='ordnen'){
      h=kopf+'<div class="ku2-frage">'+E(a.f||'Bring die Sätze in die richtige Reihenfolge.')+'</div>'
        +'<div class="ku2-ordn" id="ku2Ziel"></div><div class="ku2-ordn" id="ku2Rest"></div>';
      f=pruefKnopf();
    }
    else {
      h=kopf+'<div class="ku2-frage">Diesen Aufgabentyp kenne ich noch nicht.</div>';
      f='<button class="ku-btn blau breit" onclick="ku2Weiter()">Weiter →</button>';
    }

    koerper(h); fuss(f);

    if(a.typ==='bausteine') bauZeichnen();
    if(a.typ==='paare') paareZeichnen();
    if(a.typ==='ordnen') ordnenZeichnen();

    var feld=el('ku2Feld');
    if(feld){
      feld.addEventListener('input',function(){
        var k=el('ku2Pruef'); if(k) k.disabled=!feld.value.replace(/^\s+|\s+$/g,'');
      });
      feld.addEventListener('keydown',function(e){
        if(e.key==='Enter'){ e.preventDefault(); window.ku2Pruefen(); }
      });
      if(window.innerWidth>900) try{ feld.focus(); }catch(e){}
    }
  }

  function optionen(o){
    return '<div class="ku2-opt">'+(o||[]).map(function(x,k){
      return '<button class="ku2-o" data-k="'+k+'" onclick="ku2Wahl('+k+')">'+E(x)+'</button>';
    }).join('')+'</div>';
  }
  function pruefKnopf(){
    return '<button class="ku-btn blau breit" id="ku2Pruef" onclick="ku2Pruefen()" disabled>Prüfen</button>';
  }

  /* --- die Antwort auswerten --- */
  function loesungText(a){
    if(a.typ==='wahl'||a.typ==='hoeren') return (a.o||[])[a.l];
    if(a.typ==='ordnen') return (a.l||[]).join('  →  ');
    if(a.typ==='paare') return (a.p||[]).map(function(x){ return x[0]+' — '+x[1]; }).join(' · ');
    return a.l;
  }

  function antwort(ok){
    if(!U||U.beantwortet) return;
    U.beantwortet=true;
    var a=U.liste[U.i];
    if(ok){ U.richtig++; klang('richtig'); } else { U.falsch.push(a); klang('falsch'); }
    var los=ok?'':loesungText(a);
    fuss('<div class="ku2-rueck '+(ok?'gut':'schlecht')+'">'
      +'<b class="kopf">'+(ok?'✓ Richtig':'✗ Noch nicht')+'</b>'
      +(los?'<div class="ls">Richtig ist: <b>'+E(los)+'</b></div>':'')
      +(a.e?'<p>'+E(a.e)+'</p>':'')
      +'</div><button class="ku-btn blau breit" onclick="ku2Weiter()">Weiter →</button>');
  }

  function optionenSperren(gewaehlt,richtig){
    var ks=document.querySelectorAll('#ku2Innen .ku2-o');
    for(var i=0;i<ks.length;i++){
      var k=Number(ks[i].getAttribute('data-k'));
      ks[i].disabled=true;
      if(k===richtig) ks[i].className='ku2-o gut';
      else if(k===gewaehlt) ks[i].className='ku2-o schlecht';
    }
  }

  window.ku2Wahl=function(k){
    if(!U||U.beantwortet) return;
    var a=U.liste[U.i];
    optionenSperren(k,a.l);
    antwort(k===a.l);
  };

  window.ku2Artikel=function(w,k){
    if(!U||U.beantwortet) return;
    var a=U.liste[U.i];
    var richtig=['der','die','das'].indexOf(String(a.l).toLowerCase());
    optionenSperren(k,richtig);
    antwort(gleich(w,a.l));
  };

  window.ku2Hoeren=function(){
    if(!U) return;
    var a=U.liste[U.i];
    sprich(a.text||a.f,{rolle:'julia'});
    U.hilf.gehoert=true;
    var n=el('ku2Nach'); if(n) n.style.display='';
  };

  window.ku2Vorsagen=function(){
    if(!U) return; var a=U.liste[U.i];
    sprich(a.l||a.f,{rolle:'julia'});
  };

  window.ku2Gesagt=function(){ antwort(true); };

  window.ku2Aufnehmen=function(){
    var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    var k=el('ku2Mic'), aus=el('ku2Erk');
    if(!U||U.beantwortet||!k) return;
    if(!SR){ if(aus) aus.textContent='Dein Browser kann nicht zuhören. Sag den Satz laut und tipp dann unten.'; return; }
    if(k._laeuft){ try{ k._erk.stop(); }catch(e){} return; }
    try{
      var r=new SR(); r.lang='de-DE'; r.interimResults=true; r.continuous=false; r.maxAlternatives=1;
      k._erk=r; k._laeuft=true; k.classList.add('laeuft'); k.innerHTML='⏺ Ich höre …';
      var fest='';
      r.onresult=function(e){
        var zw='';
        for(var i=e.resultIndex;i<e.results.length;i++){
          if(e.results[i].isFinal) fest+=e.results[i][0].transcript; else zw+=e.results[i][0].transcript;
        }
        if(aus) aus.textContent=(fest+zw).replace(/^\s+/,'');
      };
      r.onend=function(){
        k._laeuft=false; k.classList.remove('laeuft'); k.innerHTML='🎤 Aufnehmen';
        var gesagt=(aus&&aus.textContent||'').replace(/^\s+|\s+$/g,'');
        if(!gesagt) return;
        var a=U.liste[U.i];
        antwort(aehnlich(gesagt,a.l));
      };
      r.onerror=function(){ k._laeuft=false; k.classList.remove('laeuft'); k.innerHTML='🎤 Aufnehmen'; };
      r.start();
    }catch(e){ k._laeuft=false; k.classList.remove('laeuft'); k.innerHTML='🎤 Aufnehmen'; }
  };

  /* Beim Sprechen sind wir großzügig: das Ziel muss vorkommen
     oder die Hälfte der Wörter muss stimmen. */
  function aehnlich(gesagt,ziel){
    var g=norm(gesagt), z=norm(ziel);
    if(!z) return true;
    if(g.indexOf(z)>=0 || z.indexOf(g)>=0) return true;
    var zw=z.split(' '), gw=g.split(' '), tr=0, i, j;
    for(i=0;i<zw.length;i++) for(j=0;j<gw.length;j++) if(zw[i]===gw[j]){ tr++; break; }
    return zw.length ? (tr/zw.length)>=0.5 : true;
  }

  /* --- Bausteine --- */
  function bauZeichnen(){
    var a=U.liste[U.i], oben=el('ku2Bau'), unten=el('ku2Teile');
    if(!oben||!unten) return;
    if(!U.hilf.teile) U.hilf.teile=mix(a.teile||[]);
    oben.innerHTML=U.hilf.bau.map(function(x,i){
      return '<button class="ku2-t" onclick="ku2BauWeg('+i+')">'+E(x.w)+'</button>';
    }).join('');
    unten.innerHTML=U.hilf.teile.map(function(w,i){
      var benutzt=false,j;
      for(j=0;j<U.hilf.bau.length;j++) if(U.hilf.bau[j].i===i) benutzt=true;
      return '<button class="ku2-t'+(benutzt?' weg':'')+'" onclick="ku2BauDazu('+i+')">'+E(w)+'</button>';
    }).join('');
    var k=el('ku2Pruef'); if(k) k.disabled=!U.hilf.bau.length;
  }
  window.ku2BauDazu=function(i){
    if(!U||U.beantwortet) return;
    var j; for(j=0;j<U.hilf.bau.length;j++) if(U.hilf.bau[j].i===i) return;
    U.hilf.bau.push({i:i,w:U.hilf.teile[i]}); bauZeichnen();
  };
  window.ku2BauWeg=function(k){
    if(!U||U.beantwortet) return;
    U.hilf.bau.splice(k,1); bauZeichnen();
  };

  /* --- Paare --- */
  function paareZeichnen(){
    var a=U.liste[U.i], li=el('ku2PL'), re=el('ku2PR');
    if(!li||!re) return;
    if(!U.hilf.links){
      U.hilf.links=(a.p||[]).map(function(x,i){ return {i:i,t:x[0],fest:false}; });
      U.hilf.rechts=mix((a.p||[]).map(function(x,i){ return {i:i,t:x[1],fest:false}; }));
    }
    li.innerHTML=U.hilf.links.map(function(x,k){
      return '<button class="ku2-p'+(x.fest?' fest':'')+(U.hilf.paarLinks===k?' an':'')+'" '
        +'onclick="ku2PaarLinks('+k+')">'+E(x.t)+'</button>';
    }).join('');
    re.innerHTML=U.hilf.rechts.map(function(x,k){
      return '<button class="ku2-p'+(x.fest?' fest':'')+'" onclick="ku2PaarRechts('+k+')">'+E(x.t)+'</button>';
    }).join('');
  }
  window.ku2PaarLinks=function(k){
    if(!U||U.beantwortet||U.hilf.links[k].fest) return;
    U.hilf.paarLinks=(U.hilf.paarLinks===k?null:k); paareZeichnen();
  };
  window.ku2PaarRechts=function(k){
    if(!U||U.beantwortet) return;
    var l=U.hilf.paarLinks; if(l==null||U.hilf.rechts[k].fest) return;
    if(U.hilf.links[l].i===U.hilf.rechts[k].i){
      U.hilf.links[l].fest=true; U.hilf.rechts[k].fest=true; U.hilf.paarFest++;
      U.hilf.paarLinks=null; klang('tipp'); paareZeichnen();
      if(U.hilf.paarFest>=U.hilf.links.length) antwort(U.hilf.paarFehler===0);
    } else {
      U.hilf.paarFehler++; U.hilf.paarLinks=null;
      paareZeichnen();
      var kn=el('ku2PR').children[k];
      if(kn){ kn.className='ku2-p daneben'; setTimeout(paareZeichnen,420); }
    }
  };

  /* --- Ordnen --- */
  function ordnenZeichnen(){
    var a=U.liste[U.i], ziel=el('ku2Ziel'), rest=el('ku2Rest');
    if(!ziel||!rest) return;
    if(!U.hilf.rest) U.hilf.rest=mix((a.l||[]).map(function(t,i){ return {i:i,t:t}; }));
    ziel.innerHTML=U.hilf.ordn.length
      ? U.hilf.ordn.map(function(x,k){
          return '<button class="ku2-z" onclick="ku2OrdnWeg('+k+')"><span class="p">'+(k+1)+'</span>'+E(x.t)+'</button>';
        }).join('')
      : '<div class="ku2-leerfeld">Tipp unten die Sätze in der richtigen Reihenfolge an</div>';
    rest.innerHTML=U.hilf.rest.map(function(x,k){
      var drin=false,j; for(j=0;j<U.hilf.ordn.length;j++) if(U.hilf.ordn[j].i===x.i) drin=true;
      if(drin) return '';
      return '<button class="ku2-z offen" onclick="ku2OrdnDazu('+k+')"><span class="p">+</span>'+E(x.t)+'</button>';
    }).join('');
    var k2=el('ku2Pruef'); if(k2) k2.disabled=(U.hilf.ordn.length!==U.hilf.rest.length);
  }
  window.ku2OrdnDazu=function(k){
    if(!U||U.beantwortet) return;
    var x=U.hilf.rest[k], j;
    for(j=0;j<U.hilf.ordn.length;j++) if(U.hilf.ordn[j].i===x.i) return;
    U.hilf.ordn.push(x); ordnenZeichnen();
  };
  window.ku2OrdnWeg=function(k){
    if(!U||U.beantwortet) return;
    U.hilf.ordn.splice(k,1); ordnenZeichnen();
  };

  /* --- Prüfen für Eingabe, Bausteine und Ordnen --- */
  window.ku2Pruefen=function(){
    if(!U||U.beantwortet) return;
    var a=U.liste[U.i];
    if(a.typ==='luecke'||a.typ==='uebersetzen'){
      var f=el('ku2Feld'); if(!f) return;
      var t=(f.value||'').replace(/^\s+|\s+$/g,''); if(!t) return;
      f.disabled=true;
      antwort(gleich(t,a.l));
    }
    else if(a.typ==='bausteine'){
      var satz=U.hilf.bau.map(function(x){ return x.w; }).join(' ');
      antwort(gleich(satz,a.l));
    }
    else if(a.typ==='ordnen'){
      var ok=true,i;
      for(i=0;i<U.hilf.ordn.length;i++) if(U.hilf.ordn[i].i!==i) ok=false;
      antwort(ok);
    }
  };

  window.ku2Weiter=function(){
    if(!U) return;
    U.i++; aufgabeZeigen();
  };

  function rundeEnde(){
    if(!U) return;
    U.ende=true;
    var ges=U.liste.length, r=U.richtig, pct=Math.round(r/ges*100);
    var bar=el('ku2Bar'); if(bar) bar.style.width='100%';
    var z=el('ku2Zahl'); if(z) z.textContent=ges+'/'+ges;
    klang('fertig');
    punkte(r*5);
    var wort = pct>=90 ? 'Das saß.' : pct>=70 ? 'Gut gemacht.' : pct>=50 ? 'Solide — der Rest kommt.' : 'Noch wackelig. Das ist normal.';
    koerper('<div class="ku2-ende"><div class="gr">'+(pct>=70?'🎉':'💪')+'</div>'
      +'<h3>'+E(wort)+'</h3>'
      +'<p>'+r+' von '+ges+' richtig — '+pct+' %.'
      +(U.falsch.length?'<br>'+U.falsch.length+' '+(U.falsch.length===1?'Aufgabe war':'Aufgaben waren')+' noch nicht sicher. Genau die lohnen sich nochmal.':'')
      +'</p>'
      +'<div class="knoepfe">'
      +(U.falsch.length?'<button class="ku-btn blau" onclick="ku2Nochmal()">Die '+U.falsch.length+' nochmal</button>':'')
      +'<button class="ku-btn" onclick="kursUebenZu()">Fertig</button>'
      +'</div></div>');
    fuss('');
  }

  window.ku2Nochmal=function(){
    if(!U) return;
    var f=U.falsch.slice(), t=U.titel, cb=U.cb;
    U=null;
    window.kursUeben(f, t+' · nochmal', cb);
  };

  window.kursUebenZu=function(){
    stille();
    var o=el('ku2Ov'); if(o){ o.classList.remove('auf'); o.style.paddingBottom=''; }
    document.body.style.overflow='';
    var cb=U?U.cb:null, erg=U?{ges:U.liste.length,richtig:U.richtig,fertig:!!U.ende}:null;
    U=null;
    if(cb) try{ cb(erg); }catch(e){}
  };

  /* ============================================================
     4 — Der Schreibtrainer
     ============================================================ */
  var W=null;

  /* Aufgaben aus schreiben.js und aus dem Kurs sehen leicht anders aus.
     Hier machen wir eine Form daraus, mit der die Seite rechnen kann. */
  function swForm(a){
    a=a||{};
    var hilfe=a.hilfe, tipp='';
    if(typeof hilfe==='string'){
      if(hilfe.length>90){ tipp=hilfe; hilfe=[]; } else hilfe=[hilfe];
    }
    return {
      id: a.id || ('frei-'+String(a.t||'aufgabe').toLowerCase().replace(/[^a-z0-9]+/g,'-')),
      t: a.t||'Schreiben',
      lvl: a.lvl||'A1',
      art: a.art||'mitteilung',
      pruef: a.pruef||'frei',
      sit: a.sit||a.auf||'',
      empf: a.empf||'',
      punkte: a.punkte||[],
      anrede: a.anrede||'',
      gruss: a.gruss||'',
      woerter: (a.woerter&&a.woerter.length===2)?a.woerter:[40,80],
      hilfe: hilfe||[],
      tipp: tipp,
      krit: a.krit||[],
      muster: a.muster||'',
      fallen: a.fallen||[],
      zurueck: a.zurueck||null
    };
  }
  function swVonId(id){
    var a=aufgaben(),i; for(i=0;i<a.length;i++) if(a[i].id===id) return a[i]; return null;
  }
  function swWorte(t){
    t=String(t||'').replace(/\s+/g,' ').replace(/^\s+|\s+$/g,'');
    return t?t.split(' ').length:0;
  }
  /* Leitpunkte abhaken: Stichwörter suchen, großzügig sein. */
  var swStopp={und:1,oder:1,aber:1,wie:1,was:1,wann:1,warum:1,wohin:1,welche:1,welchen:1,welches:1,
    der:1,die:1,das:1,den:1,dem:1,des:1,ein:1,eine:1,einen:1,einem:1,einer:1,
    ich:1,dir:1,dich:1,man:1,sie:1,ihr:1,ihm:1,ihn:1,uns:1,euch:1,
    fuer:1,'für':1,mit:1,von:1,vom:1,zum:1,zur:1,auf:1,aus:1,bei:1,nach:1,ueber:1,'über':1,
    ist:1,sind:1,hast:1,habe:1,haben:1,wird:1,werden:1,kannst:1,koennen:1,'können':1,
    nicht:1,noch:1,schon:1,sehr:1,mehr:1,dass:1,damit:1,weil:1,wenn:1,
    schreib:1,schreibe:1,schreibst:1,schreiben:1,'erklär':1,sag:1,sagen:1,nenne:1,nennen:1,
    deine:1,deinen:1,deinem:1,deiner:1,dein:1,eigene:1,etwas:1,jemand:1};
  function swWoerterVon(p){
    var roh=String(p||'').toLowerCase().replace(/[^a-zäöüß]+/g,' ').split(' ');
    var out=[],i,x;
    for(i=0;i<roh.length;i++){
      x=roh[i];
      if(x.length>=4 && !swStopp[x]) out.push(x.slice(0,5));
    }
    return out;
  }
  function swSaetze(t){
    var a=String(t||'').split(/[.!?\n]+/),n=0,i;
    for(i=0;i<a.length;i++) if(a[i].replace(/^\s+|\s+$/g,'').length>3) n++;
    return n;
  }
  /* Manche Leitpunkte haben gar kein Stichwort, das man suchen könnte —
     „warum du schreibst" zum Beispiel. Dann zählen wir die Sätze:
     zu jedem Leitpunkt gehört mindestens einer. */
  function swTrifft(p,text,nr){
    var ks=swWoerterVon(p), t=String(text||'').toLowerCase(),i;
    for(i=0;i<ks.length;i++) if(t.indexOf(ks[i])>=0) return true;
    if(!ks.length) return swSaetze(text) >= (Number(nr||0)+1);
    return false;
  }

  function ovSchreiben(){
    var o=el('swOv'); if(o) return o;
    o=document.createElement('div'); o.className='sw-ov'; o.id='swOv';
    o.innerHTML='<div class="sw-kopf">'
        +'<button class="zu" onclick="swZu()" aria-label="Schließen">×</button>'
        +'<span class="who"><b id="swTitel"></b><small id="swUnter"></small></span>'
      +'</div>'
      +'<div class="sw-koerper" id="swKoerper"></div>';
    document.body.appendChild(o);
    tastaturBeobachten();
    return o;
  }

  window.schreibTrainer=function(was){
    stil();
    var roh = (typeof was==='string') ? swVonId(was) : was;
    if(!roh){ note('Diese Schreibaufgabe finde ich gerade nicht.'); return; }
    var a=swForm(roh);
    ovSchreiben();
    W={a:a, geprueft:false, haken:{}};
    el('swOv').classList.add('auf');
    document.body.style.overflow='hidden';
    el('swTitel').textContent=a.t;
    el('swUnter').textContent=a.lvl+' · '+a.art+(a.pruef&&a.pruef!=='frei'?' · '+a.pruef:'');

    var text=J('schreib_'+a.id,'')||'';

    var links='<div>'
      +'<div class="sw-kasten"><h4>Die Situation</h4><p>'+E(a.sit)+'</p>'
        +(a.empf?'<div class="sw-vorgabe">An: '+E(a.empf)+'</div>':'')
        +'<div class="sw-vorgabe">'+a.woerter[0]+' bis '+a.woerter[1]+' Wörter</div>'
      +'</div>'
      +(a.punkte.length?'<div class="sw-kasten" style="margin-top:12px"><h4>Das muss vorkommen</h4>'
        +'<ul class="sw-liste" id="swPunkte">'
        +a.punkte.map(function(p,i){ return '<li id="swP'+i+'">'+E(p)+'</li>'; }).join('')
        +'</ul></div>':'')
      +((a.anrede||a.gruss)?'<div class="sw-kasten" style="margin-top:12px"><h4>Anrede und Gruß</h4>'
        +(a.anrede?'<div class="sw-vorgabe">'+E(a.anrede)+'</div>':'')
        +(a.gruss?'<div class="sw-vorgabe">'+E(a.gruss)+'</div>':'')
        +'<p style="margin:8px 0 0;font-size:12.5px">Beides ist Pflicht. Nach der Anrede steht ein Komma, danach geht es klein weiter.</p>'
        +'</div>':'')
      +(a.tipp?'<div class="sw-kasten" style="margin-top:12px"><h4>Ein Tipp</h4><p style="margin:0">'+E(a.tipp)+'</p></div>':'')
      +'</div>';

    var rechts='<div>'
      +'<div class="sw-kasten">'
      +'<h4>Dein Text</h4>'
      +'<textarea class="sw-feld" id="swFeld" placeholder="'+(a.anrede?E(a.anrede)+'\n\n':'')+'Schreib hier los …">'+E(text)+'</textarea>'
      +'<div class="sw-zeile"><span class="sw-zaehler" id="swZaehler">0 Wörter</span>'
        +'<span style="font-size:12.5px;color:#5E6A78" id="swGespeichert"></span>'
        +'<span style="flex:1"></span>'
        +'<button class="ku-btn blau" onclick="swFertig()">Fertig — anschauen</button></div>'
      +(a.hilfe.length?'<div class="sw-hilfen">'
        +a.hilfe.map(function(h,i){ return '<button class="sw-h" onclick="swEinsetzen('+i+')">'+E(h)+'</button>'; }).join('')
        +'</div>':'')
      +'</div>'
      +'<div id="swPruefung" class="sw-pruef"></div>'
      +'</div>';

    el('swKoerper').innerHTML='<div class="sw-raster">'+links+rechts+'</div>';

    var f=el('swFeld');
    f.addEventListener('input',function(){ swPruefeText(); swSpeichernSpaeter(); });
    swPruefeText();
    if(window.innerWidth>900) try{ f.focus(); }catch(e){}
  };

  var swTimer=null;
  function swSpeichernSpaeter(){
    if(swTimer) clearTimeout(swTimer);
    swTimer=setTimeout(function(){
      if(!W) return;
      var f=el('swFeld'); if(!f) return;
      S('schreib_'+W.a.id, f.value||'');
      var g=el('swGespeichert'); if(g){ g.textContent='gespeichert'; setTimeout(function(){ if(g) g.textContent=''; },1400); }
    },600);
  }

  function swPruefeText(){
    if(!W) return;
    var f=el('swFeld'); if(!f) return;
    var t=f.value||'', n=swWorte(t), a=W.a;
    var z=el('swZaehler');
    if(z){
      z.textContent=n+' '+(n===1?'Wort':'Wörter')+' · Ziel '+a.woerter[0]+'–'+a.woerter[1];
      z.className='sw-zaehler'+(n>=a.woerter[0]&&n<=a.woerter[1]?' gut':(n>a.woerter[1]?' viel':''));
    }
    var i;
    for(i=0;i<a.punkte.length;i++){
      var li=el('swP'+i); if(!li) continue;
      li.className=swTrifft(a.punkte[i],t,i)?'ok':'';
    }
  }

  window.swEinsetzen=function(i){
    if(!W) return;
    var h=W.a.hilfe[i], f=el('swFeld'); if(!h||!f) return;
    var v=f.value||'';
    f.value=(v?v.replace(/\s*$/,'')+' ':'')+h+' ';
    swPruefeText(); swSpeichernSpaeter();
    try{ f.focus(); f.setSelectionRange(f.value.length,f.value.length); }catch(e){}
  };

  window.swFertig=function(){
    if(!W) return;
    var a=W.a, f=el('swFeld'), t=(f&&f.value||'').replace(/^\s+|\s+$/g,'');
    if(!t){ note('Schreib erst ein paar Sätze — dann schauen wir gemeinsam drauf.'); return; }
    S('schreib_'+a.id,t);
    W.geprueft=true;
    var n=swWorte(t);
    var offen=[],i;
    for(i=0;i<a.punkte.length;i++) if(!swTrifft(a.punkte[i],t,i)) offen.push(a.punkte[i]);

    var h='<div class="sw-kasten" style="margin-top:14px">'
      +'<h4>Erst du selbst</h4>'
      +'<p>'+n+' Wörter'
      +(n<a.woerter[0]?' — das ist unter der Spanne. Kurze Texte kosten in der Prüfung Punkte.':
        n>a.woerter[1]?' — etwas über der Spanne. Das ist meist kein Problem, kostet aber Zeit.':' — genau in der Spanne.')
      +(offen.length?' '+offen.length+' Leitpunkt'+(offen.length===1?'':'e')+' finde ich noch nicht: '+E(offen.join(', '))+'.':' Alle Leitpunkte kommen vor.')
      +'</p>';

    if(a.krit.length){
      h+='<h4 style="margin-top:14px">Lies deinen Text nochmal und hak ab</h4>'
        +a.krit.map(function(k,i){
          return '<button class="sw-krit" id="swK'+i+'" onclick="swHaken('+i+')">'
            +'<span class="box">✓</span><span><b>'+E(k.k)+'</b><small>'+E(k.w)+'</small></span></button>';
        }).join('');
    }
    if(a.fallen.length){
      h+='<h4 style="margin-top:14px">Darauf achten die Prüfer</h4>'
        +a.fallen.map(function(x){ return '<div class="sw-falle">'+E(x)+'</div>'; }).join('');
    }
    h+='<div id="swKi" style="margin-top:14px"></div>';
    if(a.muster){
      h+='<h4 style="margin-top:14px">Ein Text auf Niveau — zum Vergleichen</h4>'
        +'<div class="sw-muster">'+E(a.muster)+'</div>';
    }
    h+='<div class="sw-zeile"><button class="ku-btn hell" onclick="swWeiterschreiben()">← Weiterschreiben</button>'
      +'<button class="ku-btn" onclick="swZu()">Fertig</button></div>'
      +'</div>';

    el('swPruefung').innerHTML=h;
    try{ el('swPruefung').scrollIntoView({behavior:'smooth',block:'start'}); }catch(e){}
    swBewerten(t,a);
  };

  window.swHaken=function(i){
    var d=el('swK'+i); if(!d) return;
    d.classList.toggle('an');
  };
  window.swWeiterschreiben=function(){
    var p=el('swPruefung'); if(p) p.innerHTML='';
    var f=el('swFeld'); if(f) try{ f.focus(); }catch(e){}
  };

  /* Die echte Bewertung läuft über /api/ai-satz — nur wenn jemand angemeldet
     ist. Ohne Anmeldung passiert schlicht nichts, der Rest bleibt da. */
  function swBewerten(text,a){
    var kasten=el('swKi'); if(!kasten) return;
    holToken(function(tok){
      if(!tok){
        kasten.innerHTML='<div class="sw-ki">Eine Bewertung von mir bekommst du, sobald du angemeldet bist. '
          +'Bis dahin hilft dir die Liste oben und der Mustertext.</div>';
        return;
      }
      kasten.innerHTML='<div class="sw-ki">Ich lese deinen Text …</div>';
      var auftrag='Leitpunkte: '+(a.punkte||[]).join(' · ')
        +'. Niveau '+a.lvl+', Textsorte '+a.art+', Ziel '+a.woerter[0]+' bis '+a.woerter[1]+' Wörter.';
      fetch('/api/ai-satz',{method:'POST',
        headers:{'content-type':'application/json','authorization':'Bearer '+tok},
        body:JSON.stringify({satz:text, frage:a.sit, aufgabe:auftrag})
      }).then(function(r){ return r.ok?r.json():null; })
        .then(function(j){
          if(!j||!j.ok){ kasten.innerHTML=''; return; }
          var t=j.hinweis||j.korrigiert||j.lob||'';
          kasten.innerHTML=t?'<h4>Was mir auffällt</h4><div class="sw-ki">'+E(t)+'</div>':'';
        })
        .catch(function(){ kasten.innerHTML=''; });
    });
  }

  function holToken(fertig){
    var tok=null;
    try{ tok=(window.SB&&window.SB.session&&window.SB.session.access_token)||window.__TOKEN__||null; }catch(e){}
    if(tok) return fertig(tok);
    if(window.supabase && window.supabase.auth && window.supabase.auth.getSession){
      window.supabase.auth.getSession().then(function(r){
        var t=r&&r.data&&r.data.session&&r.data.session.access_token;
        fertig(t||null);
      }).catch(function(){ fertig(null); });
      return;
    }
    fertig(null);
  }

  window.swZu=function(){
    var zurueck=W&&W.a?W.a.zurueck:null;
    var id=W&&W.a?W.a.id:null;
    var f=el('swFeld');
    if(id&&f) S('schreib_'+id, f.value||'');
    var o=el('swOv'); if(o){ o.classList.remove('auf'); o.style.paddingBottom=''; }
    document.body.style.overflow='';
    W=null;
    if(zurueck){ lekMerken(zurueck,{schreiben:true}); if(el('v-kurs')||el('v-lernen')) window.kursA1(zurueck); }
  };

  /* --- die Übersicht über alle Schreibaufgaben --- */
  var swNiveau='alle', swArt='alle';

  window.renderSchreiben=function(){
    stil();
    var v=flaeche(); if(!v) return;
    v.className='ku';
    var alle=aufgaben();
    if(!alle.length){
      v.innerHTML='<div class="ku-leer">Der Schreibtrainer wird geladen …</div>'; return;
    }
    var arten=[],i;
    for(i=0;i<alle.length;i++) if(arten.indexOf(alle[i].art)<0) arten.push(alle[i].art);
    arten.sort();

    var liste=alle.filter(function(a){
      if(swNiveau!=='alle' && a.lvl!==swNiveau) return false;
      if(swArt!=='alle' && a.art!==swArt) return false;
      return true;
    });

    var kopf='<div class="ku-kopf"><h1>Schreiben</h1>'
      +'<p>Die größte Lücke — und die, die kaum eine App übt. '
      +alle.length+' Aufgaben von A1 bis C1: Brief ans Amt, Beschwerde, Krankmeldung, '
      +'Bewerbung, Widerspruch, Forumsbeitrag. Jede mit den echten Kriterien und einem Text zum Vergleichen.</p></div>';

    var chips='<div class="ku-chips">'
      +['alle','A1','A2','B1','B2','C1'].map(function(l){
        return '<button class="ku-chip lv'+(swNiveau===l?' on':'')+'" onclick="swFilter(\'n\',\''+l+'\')">'+(l==='alle'?'Alle Niveaus':l)+'</button>';
      }).join('')+'</div>'
      +'<div class="ku-chips">'
      +['alle'].concat(arten).map(function(a){
        return '<button class="ku-chip'+(swArt===a?' on':'')+'" onclick="swFilter(\'a\',\''+E(a)+'\')">'+(a==='alle'?'Alle Textsorten':E(a))+'</button>';
      }).join('')+'</div>';

    var karten = liste.length
      ? '<div class="ku-swraster">'+liste.map(function(a){
          var angefangen=!!J('schreib_'+a.id,'');
          return '<button class="ku-sw" onclick="schreibTrainer(\''+E(a.id)+'\')">'
            +'<b>'+E(a.t)+'</b>'
            +'<p>'+E(String(a.sit||'').slice(0,110))+(String(a.sit||'').length>110?' …':'')+'</p>'
            +'<span class="unten"><span class="ku-pill">'+E(a.lvl)+'</span>'
            +'<span class="ku-pill grau">'+E(a.art)+'</span>'
            +(a.pruef&&a.pruef!=='frei'?'<span class="ku-pill gelb">'+E(a.pruef)+'</span>':'')
            +(angefangen?'<span class="angefangen">angefangen</span>':'')
            +'</span></button>';
        }).join('')+'</div>'
      : '<div class="ku-leer">Mit diesem Filter finde ich nichts. Nimm einen anderen.</div>';

    v.innerHTML=kopf+chips+'<div style="height:12px"></div>'+karten;
    hoch();
  };

  window.swFilter=function(art,wert){
    if(art==='n') swNiveau=wert; else swArt=wert;
    window.renderSchreiben();
  };

  /* Escape schließt, was offen ist */
  document.addEventListener('keydown',function(e){
    if(e.key!=='Escape') return;
    var o=el('swOv'); if(o&&o.classList.contains('auf')) return window.swZu();
    var u=el('ku2Ov'); if(u&&u.classList.contains('auf')) return window.kursUebenZu();
  });

})();
