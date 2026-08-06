/* ============================================================
   deutschoderwas club — NACHBEREITUNG NACH DER LIVE-STUNDE

   Nach jeder Stunde soll ohne Zutun eine passende Übungsrunde
   bereitstehen. Sie besteht aus zwei Teilen:

     1. Die Wörter der Stunde — aus dem Feld `vocab` der Stunde.
        Daraus werden nur Aufgaben gebaut, die sicher lösbar sind:
        „Was bedeutet X?" und „Welches Wort passt: …?", die
        falschen Möglichkeiten kommen aus derselben Wortliste.
        Es wird nichts aus freiem Text geraten — genau daraus
        entstehen sonst Aufgaben, die niemand lösen kann.

     2. Übungen zum Thema — über eine Stichwortliste wird das
        Wochenthema einem der 60 Themen aus uebungen.js zugeordnet.
        Getroffen oder nicht: die Karte sagt immer, worauf sie
        sich stützt. Trifft nichts, gibt es die Wörter allein.

   Gebraucht wird:  uebungen.js · ueben.js (window.ubStartListe)
   Nichts hier setzt voraus, dass die Stunde Vokabeln hat.
   ============================================================ */
(function () {
  'use strict';

  function E(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function mix(a){ a=(a||[]).slice(); for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;} return a; }

  /* ---------- 1 · Vom Wochenthema zum Übungsthema ----------
     Reihenfolge = Genauigkeit: Grammatik zuerst, dann Wortfelder,
     zuletzt das Allgemeine. Gesucht wird in Thema und Titel. */
  var SPUR = [
    /* Grammatik */
    ['grammatik','genitiv',                /genitiv|wessen/i,                                  'Genitiv'],
    ['grammatik','konjunktiv2',            /konjunktiv\s*(ii|2)|höfliche? bitte|an deiner stelle/i,'Konjunktiv II'],
    ['grammatik','indirekte-rede',         /indirekte rede|konjunktiv\s*(i|1)\b/i,             'Indirekte Rede'],
    ['grammatik','passiv-vergangenheit',   /passiv.*(perfekt|präteritum|vergangenheit)/i,      'Passiv in der Vergangenheit'],
    ['grammatik','passiv-praesens',        /passiv/i,                                          'Passiv'],
    ['grammatik','relativsaetze',          /relativsatz|relativsätze|relativpronomen/i,        'Relativsätze'],
    ['grammatik','temporale-nebensaetze',  /nachdem|bevor|während.*satz|temporal/i,            'Temporale Nebensätze'],
    ['grammatik','nebensaetze',            /nebensatz|nebensätze|\bweil\b|\bdass\b/i,          'Nebensätze'],
    ['grammatik','konnektoren',            /konnektor|verbind(er|ungswörter)|deshalb|trotzdem/i,'Konnektoren'],
    ['grammatik','wechselpraepositionen',  /wechselpräposition|wo.*wohin|präposition/i,        'Wechselpräpositionen'],
    ['grammatik','adjektivdeklination',    /adjektiv(endung|deklination)/i,                    'Adjektivdeklination'],
    ['grammatik','perfekt-praeteritum',    /perfekt|präteritum|vergangenheit/i,                'Perfekt und Präteritum'],
    ['grammatik','nominalisierung',        /nominalisierung|nomen-verb/i,                      'Nominalisierung'],
    /* Wortfelder */
    ['wortschatz','gesundheit',   /gesundheit|arzt|ärzt|krank|apotheke|schmerz|termin beim arzt/i, 'Gesundheit'],
    ['wortschatz','zahnarzt',     /zahnarzt|zähne|zahn/i,                                    'Beim Zahnarzt'],
    ['wortschatz','wohnen',       /wohnen|wohnung|miete|nachbar|umzug|hausmeister|mietvertrag/i,'Wohnen'],
    ['wortschatz','arbeit',       /arbeit|beruf|büro|chef|kolleg|bewerbung|vorstellungsgespräch|job|homeoffice|teilzeit|überstunde|netzwerk|vier-tage-woche|work.?life/i,'Arbeit und Beruf'],
    ['wortschatz','einkaufen',    /einkauf|supermarkt|shopping|kleidung|preis|rabatt/i,       'Einkaufen'],
    ['wortschatz','essen',        /\bessen\b|restaurant|\bkoch|rezept|lebensmittel|ernährung|foodtrend|mahlzeit/i,'Essen'],
    ['wortschatz','reisen',       /\breise|urlaub|\bbahn\b|\bflug|hotel|ferien|verkehr|mobilität|öffis/i,'Reisen und Unterwegs'],
    ['wortschatz','bildung',      /bildung|schule|studium|prüfung|lernen|kita|universität/i,  'Bildung'],
    ['wortschatz','medien',       /medien|social media|internet|handy|digital|künstliche intelligenz/i,'Medien und Digitales'],
    ['wortschatz','ki-arbeitswelt',/\bki\b|künstliche intelligenz|automatisier/i,             'KI und Arbeitswelt'],
    ['wortschatz','gefuehle',     /gefühl|emotion|stress|\bglück|\bangst\b|mental/i,        'Gefühle'],
    ['wortschatz','persoenlichkeit',/persönlichkeit|charakter|eigenschaft/i,                  'Persönlichkeit'],
    ['wortschatz','stadt',        /\bstadt\b|\bland\b|\bamt\b|ämter|beamt|formular|behörde|rathaus|bürgeramt|weg fragen|anmeldung/i,'Stadt und Ämter'],
    ['wortschatz','natur',        /\bnatur\b|umwelt|klima|wetter|nachhaltig|müll|recycl/i,   'Natur und Umwelt'],
    ['wortschatz','feste',        /\bfest\b|\bfeste\b|feier|weihnachten|ostern|geburtstag|silvester|brauch|bräuche|tradition/i,'Feste und Bräuche'],
    ['wortschatz','kultur',       /kultur|typisch deutsch|gesellschaft|duzen|siezen|höflichkeit/i,'Kultur'],
    ['wortschatz','integration',  /integration|heimat|migration|ankommen|einbürgerung/i,      'Integration'],
    ['wortschatz','redewendungen',/redewendung|sprichwort|idiom/i,                            'Redewendungen'],
    ['wortschatz','umgangssprache',/umgangssprache|slang|jugendsprache|locker/i,              'Umgangssprache'],
    ['wortschatz','starke-adjektive',/adjektiv|beschreiben/i,                                 'Starke Adjektive'],
    ['wortschatz','strand',       /strand|meer|sommer|baden/i,                                'Am Strand'],
    ['wortschatz','redemittel',   /redemittel|diskussion|debatte|meinung|argument/i,          'Redemittel'],
    /* Aussprache */
    ['aussprache','umlaute',      /umlaut|ä ö ü|äöü/i,                                        'Umlaute'],
    /* Vorsicht: \b kennt keine Umlaute — in „Gespräch" steht vor dem ch
       eine Wortgrenze. Deshalb muss „ch" hier ausdrücklich benannt sein. */
    ['aussprache','ch',           /ch-laut|laut ch\b|buchstaben? ch\b|aussprache.*\bch\b/i,  'Der ch-Laut'],
    ['aussprache','r',            /\br-laut\b|das r\b/i,                                      'Der r-Laut'],
    ['aussprache','wortakzent',   /wortakzent|betonung/i,                                     'Wortakzent'],
    ['aussprache','satzmelodie',  /satzmelodie|intonation/i,                                  'Satzmelodie']
  ];

  /* Findet bis zu zwei Themen. Wortschatz-Treffer bringen ihr
     Hörthema gleich mit, wenn es eines gibt. */
  function themaFinden(stunde){
    var heu = [ (stunde&&stunde.topic)||'', (stunde&&stunde.title)||'' ].join(' · ');
    if(!heu.replace(/[·\s]/g,'')) return null;
    for(var i=0;i<SPUR.length;i++){
      var s=SPUR[i];
      if(s[2].test(heu)){
        var paare=[[s[0],s[1]]];
        if(s[0]==='wortschatz' && hatThema('hoeren',s[1])) paare.push(['hoeren',s[1]]);
        return { paare:paare, name:s[3] };
      }
    }
    return null;
  }
  function hatThema(skill,id){
    var U=window.UEBUNGEN; if(!U) return false;
    var sk=(U.skills||[]).filter(function(x){return x.id===skill;})[0];
    return !!(sk && (sk.themes||[]).filter(function(t){return t.id===id;})[0]);
  }
  function aufgabenVon(paare){
    var U=window.UEBUNGEN, raus=[]; if(!U) return raus;
    (paare||[]).forEach(function(p){
      var sk=(U.skills||[]).filter(function(x){return x.id===p[0];})[0]; if(!sk) return;
      var th=(sk.themes||[]).filter(function(t){return t.id===p[1];})[0]; if(!th) return;
      (th.exercises||[]).forEach(function(e){ raus.push(e); });
    });
    return raus;
  }

  /* ---------- 2 · Aus den Wörtern der Stunde Aufgaben bauen ----------
     Nur zwei Formen, beide sicher lösbar, weil die falschen
     Möglichkeiten aus derselben Liste kommen. */
  function vokabelAufgaben(vokabeln){
    var v=(vokabeln||[]).filter(function(x){
      return x && String(x.de||'').trim() && String(x.info||'').trim();
    });
    /* Bedeutungen müssen unterscheidbar sein, sonst gibt es zwei
       richtige Antworten — genau der Fehler, den wir nicht wollen. */
    var gesehen={}, rein=[];
    v.forEach(function(x){
      var k=String(x.info).toLowerCase().replace(/\s+/g,' ').trim();
      if(gesehen[k]) return; gesehen[k]=1; rein.push({de:String(x.de).trim(), info:String(x.info).trim()});
    });
    if(rein.length<2) return [];
    var raus=[];
    mix(rein).forEach(function(w,i){
      var andere=rein.filter(function(x){return x.de!==w.de;});
      var falsch=mix(andere).slice(0,3);
      if(!falsch.length) return;
      if(i%2===0){
        var opt=mix([w.info].concat(falsch.map(function(x){return x.info;})));
        raus.push({ type:'choice', q:'Was bedeutet „'+w.de+'"?', options:opt,
                    answer:opt.indexOf(w.info), explain:w.de+' = '+w.info+'.' });
      } else {
        var o2=mix([w.de].concat(falsch.map(function(x){return x.de;})));
        raus.push({ type:'choice', q:'Welches Wort passt: „'+w.info+'"?', options:o2,
                    answer:o2.indexOf(w.de), explain:w.de+' = '+w.info+'.' });
      }
    });
    return raus;
  }

  /* ---------- 3 · Die Karte unter einer vergangenen Stunde ---------- */
  window.nachRunde = function(stunde, vokabeln){
    var tr = themaFinden(stunde);
    var vok = vokabelAufgaben(vokabeln);
    var thema = tr ? aufgabenVon(tr.paare) : [];
    return { treffer:tr, vokabelAufgaben:vok, themenAufgaben:thema,
             gesamt: vok.length + Math.min(thema.length, 10) };
  };

  window.nachKarte = function(stunde, vokabeln){
    var r = window.nachRunde(stunde, vokabeln);
    if(!r.gesamt) return '';
    var id = String(stunde && stunde.class_id || stunde && stunde.id || '');
    var teile=[];
    if(r.vokabelAufgaben.length) teile.push(r.vokabelAufgaben.length+' Aufgaben zu den Wörtern der Stunde');
    if(r.themenAufgaben.length)  teile.push('Übungen zum Thema '+r.treffer.name);
    return '<div class="nachueb">'
      + '<div class="nachueb-kopf"><b>🔁 Nachüben</b>'
      + '<span>' + E(teile.join(' · ')) + '</span></div>'
      + '<button class="nachueb-btn" onclick="nachStart(\''+E(id)+'\')">Runde starten →</button>'
      + '</div>';
  };

  /* Wird aus konto.html aufgerufen: dort liegen Stunde und Vokabeln. */
  window.nachStart = function(classId){
    var f = window.nachDaten; if(typeof f!=='function'){ return; }
    var d = f(classId); if(!d) return;
    var r = window.nachRunde(d.stunde, d.vokabeln);
    var liste = r.vokabelAufgaben.concat(mix(r.themenAufgaben).slice(0,10));
    if(!liste.length) return;
    var titel = 'Nachbereitung: ' + ((d.stunde && (d.stunde.topic||d.stunde.title)) || 'deine Stunde');
    if(window.ubStartListe) window.ubStartListe(titel, liste, liste.length);
    else if(window.toast) window.toast('Der Übungsteil ist gerade nicht geladen.');
  };

  /* Aussehen — bewusst schlicht, damit es unter die Stundenkarte passt. */
  (function stil(){
    if(document.getElementById('nachuebCSS')) return;
    var s=document.createElement('style'); s.id='nachuebCSS';
    s.textContent=[
      '.nachueb{box-sizing:border-box;display:flex;align-items:center;gap:12px;flex-wrap:wrap;',
        'margin-top:10px;padding:12px 14px;border:1px solid #CDEBD9;background:#F1FAF4;border-radius:14px}',
      '.nachueb *{box-sizing:border-box}',
      '.nachueb-kopf{flex:1;min-width:180px;line-height:1.35}',
      '.nachueb-kopf b{display:block;font-size:14.5px;color:#0F7738}',
      '.nachueb-kopf span{display:block;font-size:12.5px;color:#3C4756}',
      '.nachueb-btn{flex:0 0 auto;border:none;cursor:pointer;font-family:inherit;font-weight:800;',
        'font-size:13.5px;padding:10px 16px;border-radius:11px;background:#16a34a;color:#fff;',
        'box-shadow:0 3px 0 #0F7738}',
      '.nachueb-btn:active{transform:translateY(2px);box-shadow:0 1px 0 #0F7738}',
      '@media(max-width:520px){.nachueb{padding:11px 12px}.nachueb-btn{width:100%}}'
    ].join('');
    document.head.appendChild(s);
  })();

})();
