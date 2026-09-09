/* ============================================================
   deutschoderwas club — AM BILDSCHIRM

   Seit 2026 werden Goethe-Zertifikat (A1 bis C1, Rollout Anfang
   2026) und telc Deutsch (ab Maerz 2026) digital abgenommen:
   Hoeren, Lesen und Schreiben am Rechner im Pruefungszentrum,
   Sprechen weiterhin im Gespraech mit zwei Pruefenden. Inhalte,
   Aufgabentypen und Bewertung bleiben gleich — die Bedienung
   nicht.

   Was daran neu ist und geuebt werden muss:

     · getippt wird auf QWERTZ. Wer auf QWERTY gelernt hat, sucht
       ä, ö, ü und ß — und vertauscht y und z.
     · der Editor hat keine Rechtschreibpruefung. Kein rotes
       Kraeuseln, kein Autokorrigieren, nichts.
     · dafuer zaehlt er die Woerter live mit.
     · im Lesen kann man Stellen markieren.

   Getippt wird in dieser Pruefung unter Zeitdruck, in einer
   fremden Tastaturbelegung, ohne Hilfe. Das ist eine Fertigkeit
   fuer sich, und sie hat mit Deutsch nichts zu tun — man kann
   B2 koennen und trotzdem an „Staatsangehoerigkeit" scheitern,
   weil das ö nicht kommt.

   Vier Stufen:

     1  Die sieben Zeichen     ä ö ü ß Ä Ö Ü, einzeln, mit
                               Lageplan auf der QWERTZ-Tastatur
     2  Woerter, die stolpern  Pruefungswoerter mit Umlaut und ß
     3  Saetze auf Zeit        Zeichen pro Minute und Fehlerquote
     4  Pruefungslauf          eine echte Schreibaufgabe im
                               schlichten Editor: kein Einfuegen,
                               keine Rechtschreibpruefung, Uhr
                               laeuft, Woerter werden gezaehlt

   Auf dem Handy ist das Ganze nur die halbe Wahrheit — dort gibt
   es keine QWERTZ-Tastatur. Das steht auch so da, statt so zu
   tun, als waere es dasselbe.

   Quellen geprueft am 09.09.2026: telc Digital 2026 (testgerman.de)
   und Goethe/telc Digital Exam Day 2026 (goethecoach.de).
   ============================================================ */
(function () {
  'use strict';

  function E(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function J(k,d){ try{ if(window.lsGet) return lsGet(k,d);
    var v=JSON.parse(localStorage.getItem('ub_'+k)); return v==null?d:v; }catch(e){ return d; } }
  function Sp(k,v){ try{ if(window.lsSet) return lsSet(k,v);
    localStorage.setItem('ub_'+k, JSON.stringify(v)); }catch(e){} }

  var TIPPT = !(('ontouchstart' in window) && !window.matchMedia('(pointer:fine)').matches);

  /* ---------- Stoff ----------
     Die Woerter sind keine Tippuebung von der Stange: es sind die
     Woerter, die in genau diesen Pruefungen im Formular und in der
     Mitteilung stehen — und alle tragen einen Umlaut oder ein ß. */

  var ZEICHEN = [
    { z:'ä', wo:'rechts neben dem Ö',            merk:'Auf QWERTY-Tastaturen liegt hier das Apostroph.' },
    { z:'ö', wo:'rechts neben dem L',            merk:'Direkt neben dem L — dort, wo bei QWERTY der Strichpunkt sitzt.' },
    { z:'ü', wo:'rechts neben dem P',            merk:'Erste Reihe, gleich hinter dem P.' },
    { z:'ß', wo:'rechts neben der 0',            merk:'Oberste Reihe, hinter der Null.' },
    { z:'Ä', wo:'Umschalt und Ä',                merk:'Grossbuchstaben brauchen die Umschalttaste — auch beim Umlaut.' },
    { z:'Ö', wo:'Umschalt und Ö',                merk:'„Öffnungszeiten" faengt so an.' },
    { z:'Ü', wo:'Umschalt und Ü',                merk:'„Überweisung", „Übergabe", „Über mich".' }
  ];

  var WOERTER = {
    leicht: ['Größe','Straße','für','möchte','Grüße','schön','über','zurück',
             'natürlich','Änderung','Bäcker','tschüss','früh','hören','können','Größe'],
    mittel: ['Staatsangehörigkeit','Verspätung','Möglichkeit','Schlüssel','Anschließend',
             'Rückmeldung','Erklärung','beschäftigt','regelmäßig','Vergütung',
             'überweisen','Zuständigkeit','Bestätigung','ärgerlich','Ausbildungsvertrag','schließen'],
    schwer: ['Geschäftsführung','Verhältnismäßigkeit','Übereinstimmung','Aufwandsentschädigung',
             'Beschwerdeführer','Zuständigkeitsbereich','ausschließlich','Gewährleistung',
             'Vollmächtigung','Erläuterung','Übertragung','maßgeblich',
             'Rückerstattung','Änderungskündigung','gegenüberstellen','Verjährungsfrist']
  };

  var SAETZE = {
    leicht: [
      'Ich möchte einen Termin für nächste Woche.',
      'Können Sie mir bitte die Größe sagen?',
      'Viele Grüße aus der Bäckerstraße.',
      'Ich komme später zurück, weil der Bus Verspätung hat.',
      'Bitte schließen Sie die Tür.',
      'Das Zimmer ist schön und nicht zu teuer.'
    ],
    mittel: [
      'Ich schreibe Ihnen wegen der Verspätung meiner Lieferung.',
      'Bitte teilen Sie mir Ihre Staatsangehörigkeit und Ihr Geburtsdatum mit.',
      'Anschließend hätte ich gern eine schriftliche Bestätigung.',
      'Leider war es mir nicht möglich, den Termin einzuhalten.',
      'Ich bin regelmäßig bis achtzehn Uhr im Büro beschäftigt.',
      'Über eine kurze Rückmeldung würde ich mich sehr freuen.'
    ],
    schwer: [
      'Die Geschäftsführung weist ausdrücklich auf die Verhältnismäßigkeit der Maßnahme hin.',
      'Ausschließlich schriftlich eingereichte Anträge können berücksichtigt werden.',
      'Die Gewährleistung erlischt, sofern die Änderung eigenmächtig vorgenommen wurde.',
      'Über die Zuständigkeit entscheidet die übergeordnete Stelle.',
      'Maßgeblich ist der Zeitpunkt des Eingangs, nicht der des Abschickens.',
      'Eine Rückerstattung setzt die vollständige Vorlage der Belege voraus.'
    ]
  };

  var AUFGABE = {
    leicht: { titel:'Eine kurze Nachricht',
      text:'Sie können morgen nicht zum Deutschkurs kommen. Schreiben Sie Ihrer Lehrerin. '
         + 'Schreiben Sie etwas zu allen drei Punkten:',
      punkte:['warum Sie nicht kommen','wann Sie wiederkommen','worum Sie bitten'],
      min:30, minuten:15 },
    mittel: { titel:'Eine E-Mail an die Volkshochschule',
      text:'Sie haben einen Kurs gebucht, aber keine Bestätigung bekommen. Schreiben Sie eine E-Mail. '
         + 'Gehen Sie auf alle drei Punkte ein:',
      punkte:['was Sie gebucht haben und wann','was fehlt','was Sie sich wünschen'],
      min:80, minuten:25 },
    schwer: { titel:'Eine begründete Stellungnahme',
      text:'In Ihrem Betrieb soll die Arbeitszeit neu geregelt werden. Nehmen Sie schriftlich Stellung. '
         + 'Gehen Sie auf alle drei Punkte ein:',
      punkte:['worum es geht','welche Folgen Sie sehen','was Sie vorschlagen'],
      min:150, minuten:40 }
  };

  function topfVon(niveau){
    var n = String(niveau||'').toUpperCase();
    if(n.indexOf('C') === 0) return 'schwer';
    if(n.indexOf('B') === 0) return 'mittel';
    return 'leicht';
  }

  var STUFEN = [
    { id:'zeichen', nr:1, zeichen:'🔤', titel:'Die sieben Zeichen',
      was:'ä, ö, ü, ß und die drei grossen. Einzeln, mit Lageplan — bis die Finger sie finden.' },
    { id:'woerter', nr:2, zeichen:'⌨️', titel:'Wörter, die stolpern',
      was:'Sechzehn Wörter aus genau dieser Prüfung. Alle mit Umlaut oder ß.' },
    { id:'saetze',  nr:3, zeichen:'⏱️', titel:'Sätze auf Zeit',
      was:'Ganze Sätze. Am Ende steht, wie schnell und wie sauber du tippst.' },
    { id:'lauf',    nr:4, zeichen:'🖥️', titel:'Prüfungslauf am Bildschirm',
      was:'Eine echte Schreibaufgabe im schlichten Editor: keine Rechtschreibprüfung, '
        + 'kein Einfügen, Wortzähler läuft mit, Uhr auch.' }
  ];

  /* ---------- Stand ---------- */

  function stand(){ return J('pbStand', {}) || {}; }
  function merken(id, prozent){
    var s = stand();
    if((s[id]||0) < prozent){ s[id] = prozent; Sp('pbStand', s); }
  }
  window.bildschirmVorhanden = function(){ return true; };
  window.bildschirmProzent = function(){
    var s = stand(), g = 0;
    STUFEN.forEach(function(st){ g += (s[st.id] || 0); });
    return Math.round(g / STUFEN.length);
  };

  /* ---------- Laden ---------- */

  var B = null;
  /* Jede Runde bekommt eine Nummer. Die Zeitgeber, die eine Aufgabe
     weiterschalten, pruefen sie, bevor sie etwas tun. Ohne das fiel
     eine abgebrochene Runde in die naechste hinein: wer waehrend der
     halben Sekunde Rueckmeldung auf eine andere Stufe wechselte,
     bekam einen Absturz, weil die alte Runde nach einem Zeichen
     suchte, wo inzwischen ein Wort stand. */
  var laufNr = 0;
  function neueRunde(){ return (B.lauf = ++laufNr); }
  function spaeter(fn, ms){
    var meiner = B.lauf;
    setTimeout(function(){ if(B && B.lauf === meiner) fn(); }, ms);
  }

  function oeffnen(){
    if(window.trainerStil) window.trainerStil();
    stil();
    var o = document.getElementById('pbOv');
    if(!o){
      o = document.createElement('div'); o.id='pbOv';
      o.innerHTML = '<div id="pbKopf"></div><div id="pbBody"></div>';
      document.body.appendChild(o);
    }
    o.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  window.bildschirmSchliessen = function(){
    uhrStoppen();
    var o = document.getElementById('pbOv');
    if(o) o.style.display = 'none';
    document.body.style.overflow = '';
    try{
      if(window.pruefungOeffnen){
        var letzte = J('pruefLetzte', null);
        if(letzte) window.pruefungOeffnen(letzte, 'bildschirm');
      }
    }catch(e){}
  };

  function kopf(titel, unter, prozent){
    document.getElementById('pbKopf').innerHTML = '<div class="pl-kopf">'
      + '<button class="pl-zu" onclick="bildschirmSchliessen()" aria-label="Schließen">✕</button>'
      + '<div class="pl-kopf-m"><b>'+E(titel)+'</b><span>'+E(unter)+'</span></div>'
      + (prozent==null ? '' : '<span class="pl-kopf-p">'+prozent+' %</span>')
      + '</div>';
  }

  /* ---------- Übersicht ---------- */

  window.bildschirmStart = function(niveau){
    uhrStoppen(); oeffnen();
    B = { niveau: niveau || 'B1', topf: topfVon(niveau) };
    neueRunde();
    var s = stand();

    var h = '<div class="pl-intro"><h2>Die Prüfung läuft jetzt am Bildschirm</h2>'
      + '<p>Seit 2026 werden Hören, Lesen und Schreiben am Rechner abgenommen — beim '
      + 'Goethe-Zertifikat seit Anfang 2026, bei telc seit März 2026. Gesprochen wird '
      + 'weiterhin mit zwei Prüfenden im Raum. Die Aufgaben sind dieselben geblieben, '
      + 'die Bedienung nicht.</p></div>';

    h += '<div class="pb-neu">'
      + karteNeu('⌨️','QWERTZ','Getippt wird auf einer deutschen Tastatur. ä, ö, ü und ß liegen woanders als gewohnt, und y und z sind vertauscht.')
      + karteNeu('🚫','Keine Rechtschreibprüfung','Der Editor kräuselt nichts rot an und korrigiert nichts. Was du tippst, steht da.')
      + karteNeu('🔢','Wortzähler läuft mit','Die Zahl steht immer da. Du musst nicht mehr schätzen.')
      + karteNeu('🖍️','Markieren beim Lesen','Textstellen lassen sich anstreichen, und du springst schneller zwischen Text und Frage.')
      + '</div>';

    if(!TIPPT){
      h += '<div class="pb-hinweis"><b>Du bist gerade am Handy.</b> Üben kannst du hier auch, '
         + 'aber die Prüfung tippst du auf einer richtigen QWERTZ-Tastatur. Für die Stufen 1 bis 3 '
         + 'lohnt sich ein Laptop — dort sitzen die Finger, hier der Daumen.</div>';
    }

    STUFEN.forEach(function(st){
      var pr = s[st.id] || 0;
      h += '<section class="pl-stufe"><div class="pl-stufe-kopf">'
        + '<span class="pl-stufe-n">'+st.nr+'</span>'
        + '<div><b>'+st.zeichen+' '+E(st.titel)+'</b><p>'+E(st.was)+'</p></div></div>'
        + '<button class="pl-karte pb-karte" onclick="bildschirmStufe(\''+st.id+'\')">'
        +   '<span class="pl-karte-z pl-f-turq">'+st.zeichen+'</span>'
        +   '<span class="pl-karte-t"><b>'+(pr>0?'Weiter üben':'Losgehen')+'</b>'
        +     '<em>'+(pr>0 ? pr+' % geschafft' : 'noch nicht angefangen')+'</em></span>'
        +   '<span class="pl-karte-p">'+pr+' %</span>'
        +   '<span class="pl-karte-bar"><i style="width:'+pr+'%"></i></span>'
        + '</button></section>';
    });

    h += '<p class="pb-quelle">Stand der Angaben: 9. September 2026. '
      + 'Ändert sich etwas an der Prüfung, ändert sich auch diese Seite.</p>';

    kopf('Am Bildschirm', 'Tippen, wie die Prüfung es verlangt', window.bildschirmProzent());
    document.getElementById('pbBody').innerHTML = h;
  };

  function karteNeu(z, t, k){
    return '<div class="pb-neu-k"><span>'+z+'</span><b>'+E(t)+'</b><p>'+E(k)+'</p></div>';
  }

  window.bildschirmStufe = function(id){
    uhrStoppen();
    if(id==='zeichen') return zeichenLauf();
    if(id==='woerter') return tippLauf('woerter');
    if(id==='saetze')  return tippLauf('saetze');
    if(id==='lauf')    return pruefungslauf();
  };

  /* ---------- Stufe 1: die sieben Zeichen ---------- */

  function zeichenLauf(){
    B.stufe='zeichen'; B.folge=[]; B.i=0; B.richtig=0; neueRunde();
    /* Jedes Zeichen zweimal, gemischt — einmal erkennen reicht nicht. */
    ZEICHEN.forEach(function(z){ B.folge.push(z); B.folge.push(z); });
    B.folge = mischen(B.folge);
    zeichenZeigen();
  }

  function zeichenZeigen(){
    if(B.i >= B.folge.length) return zeichenEnde();
    var z = B.folge[B.i];
    kopf('Die sieben Zeichen', (B.i+1)+' von '+B.folge.length, null);
    document.getElementById('pbBody').innerHTML =
        '<div class="pb-fortschritt"><i style="width:'+Math.round(B.i/B.folge.length*100)+'%"></i></div>'
      + '<div class="pb-gross">'+E(z.z)+'</div>'
      + '<p class="pb-wo">'+E(z.wo)+'</p>'
      + tastaturplan(z.z)
      + '<input class="pb-feld" id="pbEin" maxlength="1" autocomplete="off" autocapitalize="off"'
      + ' autocorrect="off" spellcheck="false" aria-label="Zeichen tippen" placeholder="hier tippen">'
      + '<p class="pb-merk">💡 '+E(z.merk)+'</p>'
      + '<div class="pb-rueck" id="pbRueck"></div>';
    var f = document.getElementById('pbEin');
    f.focus();
    f.addEventListener('input', function(){
      var w = f.value;
      if(!w) return;
      var gut = (w === z.z);
      if(gut) B.richtig++;
      f.classList.add(gut ? 'gut' : 'schlecht');
      document.getElementById('pbRueck').innerHTML = gut
        ? '<span class="pb-ok">✓ Sitzt.</span>'
        : '<span class="pb-nein">✗ Das war „'+E(w)+'". Gesucht war „'+E(z.z)+'".</span>';
      f.disabled = true;
      B.i++;
      spaeter(zeichenZeigen, gut ? 480 : 1400);
    });
  }

  function zeichenEnde(){
    var pr = Math.round(B.richtig / B.folge.length * 100);
    merken('zeichen', pr);
    ende('Die sieben Zeichen', pr, B.richtig + ' von ' + B.folge.length + ' auf Anhieb getroffen',
      pr >= 80 ? 'Die Finger wissen, wo die Zeichen liegen. Weiter zu den Wörtern.'
               : 'Noch einmal — und schau dir den Lageplan dabei an. Nach drei Durchgängen sitzt es.');
  }

  /* Ein kleiner Lageplan. Keine ganze Tastatur, nur die Reihe, in
     der das gesuchte Zeichen liegt — mehr verwirrt nur. */
  function tastaturplan(zeichen){
    if(!zeichen) return '';
    var reihen = {
      'ü': ['Q','W','E','R','T','Z','U','I','O','P','ü'],
      'ö': ['A','S','D','F','G','H','J','K','L','ö','ä'],
      'ä': ['A','S','D','F','G','H','J','K','L','ö','ä'],
      'ß': ['7','8','9','0','ß']
    };
    var klein = zeichen.toLowerCase();
    var r = reihen[klein];
    if(!r) return '';
    return '<div class="pb-plan">' + r.map(function(t){
      return '<span class="pb-taste'+(t.toLowerCase()===klein?' hier':'')+'">'+E(t)+'</span>';
    }).join('') + '</div>';
  }

  /* ---------- Stufen 2 und 3: Wörter und Sätze ---------- */

  function tippLauf(art){
    B.stufe = art;
    var quelle = (art === 'woerter') ? WOERTER[B.topf] : SAETZE[B.topf];
    B.folge = mischen(quelle.slice());
    B.i = 0; B.fehler = 0; B.zeichenZahl = 0; B.beginn = null; neueRunde();
    tippZeigen();
  }

  function tippZeigen(){
    if(B.i >= B.folge.length) return tippEnde();
    var ziel = B.folge[B.i];
    var art = B.stufe;
    kopf(art==='woerter' ? 'Wörter, die stolpern' : 'Sätze auf Zeit',
         (B.i+1)+' von '+B.folge.length, null);
    document.getElementById('pbBody').innerHTML =
        '<div class="pb-fortschritt"><i style="width:'+Math.round(B.i/B.folge.length*100)+'%"></i></div>'
      + '<p class="pb-auftrag">Tippe ab — genau so, mit Groß- und Kleinschreibung:</p>'
      + '<div class="pb-ziel" id="pbZiel">'+zeichenweise(ziel, '')+'</div>'
      + (art==='woerter'
          ? '<input class="pb-feld breit" id="pbEin" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Wort tippen">'
          : '<textarea class="pb-feld breit hoch" id="pbEin" rows="3" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Satz tippen"></textarea>')
      + '<div class="pb-zeile"><span class="pb-zaehl" id="pbZaehl">0 / '+ziel.length+' Zeichen</span>'
      +   '<button class="pl-b2 pb-ueber" onclick="bildschirmWeiterTippen()">Überspringen</button></div>'
      + '<div class="pb-rueck" id="pbRueck"></div>';

    var f = document.getElementById('pbEin');
    f.focus();
    /* Einfuegen ist in der Pruefung nicht moeglich. Hier auch nicht —
       sonst uebt man das Einfuegen statt das Tippen. */
    f.addEventListener('paste', function(ev){ ev.preventDefault(); });
    f.addEventListener('input', function(){
      if(B.beginn === null) B.beginn = Date.now();
      var w = f.value;
      document.getElementById('pbZiel').innerHTML = zeichenweise(ziel, w);
      document.getElementById('pbZaehl').textContent = w.length + ' / ' + ziel.length + ' Zeichen';
      if(w === ziel){
        B.zeichenZahl += ziel.length;
        f.disabled = true;
        document.getElementById('pbRueck').innerHTML = '<span class="pb-ok">✓ Genau so.</span>';
        B.i++;
        spaeter(tippZeigen, 460);
      }
    });
  }

  window.bildschirmWeiterTippen = function(){
    B.fehler++;
    B.i++;
    tippZeigen();
  };

  /* Zeigt Zeichen fuer Zeichen, was schon stimmt und wo es abbiegt.
     Ab der ersten falschen Stelle wird nichts mehr gruen — sonst
     sieht ein Text richtig aus, der es nicht ist. */
  function zeichenweise(ziel, ist){
    var h = '', gebrochen = false;
    for(var i = 0; i < ziel.length; i++){
      var z = ziel.charAt(i), k = 'offen';
      if(i < ist.length && !gebrochen){
        if(ist.charAt(i) === z) k = 'gut';
        else { k = 'schlecht'; gebrochen = true; }
      }
      h += '<span class="pb-z '+k+'">' + (z === ' ' ? '&nbsp;' : E(z)) + '</span>';
    }
    return h;
  }

  function tippEnde(){
    var dauer = B.beginn ? (Date.now() - B.beginn) / 60000 : 0;
    var zpm = (dauer > 0.05) ? Math.round(B.zeichenZahl / dauer) : 0;
    var geschafft = B.folge.length - B.fehler;
    var pr = Math.round(geschafft / B.folge.length * 100);
    merken(B.stufe, pr);
    var satz = geschafft + ' von ' + B.folge.length + ' fehlerfrei getippt';
    if(zpm) satz += ' · rund ' + zpm + ' Zeichen pro Minute';
    ende(B.stufe==='woerter' ? 'Wörter, die stolpern' : 'Sätze auf Zeit', pr, satz,
      pr >= 80
        ? (zpm && zpm < 120
            ? 'Sauber getippt. Für die Prüfung darf es noch etwas flüssiger werden — 150 Zeichen pro Minute reichen bequem.'
            : 'Sauber und zügig. Genau so brauchst du es am Prüfungstag.')
        : 'Die Zeichen sitzen noch nicht. Geh eine Stufe zurück und nimm dir ä, ö, ü und ß einzeln vor.');
  }

  /* ---------- Stufe 4: Prüfungslauf ---------- */

  function pruefungslauf(){
    B.stufe = 'lauf'; neueRunde();
    var a = AUFGABE[B.topf];
    B.aufgabe = a;
    uhrStarten(a.minuten);
    kopf('Prüfungslauf am Bildschirm', a.titel + ' · ' + a.minuten + ' Minuten', null);
    document.getElementById('pbBody').innerHTML =
        '<div class="pb-editorkopf"><span class="pb-uhr" id="pbUhr">'+zeit(a.minuten*60000)+'</span>'
      +   '<span class="pb-woerter" id="pbWoerter">0 Wörter</span>'
      +   '<span class="pb-ohne">ohne Rechtschreibprüfung</span></div>'
      + '<div class="pb-aufgabe"><p>'+E(a.text)+'</p><ul>'
      +   a.punkte.map(function(x){ return '<li>'+E(x)+'</li>'; }).join('')
      + '</ul><p class="pb-mind">Mindestens '+a.min+' Wörter.</p></div>'
      + '<textarea class="pb-editor" id="pbEditor" spellcheck="false" autocorrect="off"'
      +   ' autocapitalize="off" autocomplete="off" aria-label="Deine Antwort"'
      +   ' placeholder="Schreib hier — so wie am Prüfungstag."></textarea>'
      + '<button class="pl-b1 pb-abgeben" onclick="bildschirmAbgeben()">Abgeben</button>';

    var t = document.getElementById('pbEditor');
    t.focus();
    /* Im Pruefungseditor gibt es kein Einfuegen. Wer hier einfuegt,
       uebt etwas, das am Pruefungstag nicht geht. */
    t.addEventListener('paste', function(ev){
      ev.preventDefault();
      hinweisKurz('Einfügen geht in der Prüfung nicht. Tippen.');
    });
    t.addEventListener('input', function(){
      var n = (t.value.trim().match(/\S+/g) || []).length;
      var el = document.getElementById('pbWoerter');
      el.textContent = n + (n===1 ? ' Wort' : ' Wörter');
      el.classList.toggle('genug', n >= B.aufgabe.min);
    });
  }

  function hinweisKurz(text){
    var d = document.createElement('div');
    d.className = 'pb-kurz'; d.textContent = text;
    document.body.appendChild(d);
    setTimeout(function(){ if(d.parentNode) d.parentNode.removeChild(d); }, 2200);
  }

  window.bildschirmAbgeben = function(){
    uhrStoppen();
    var t = document.getElementById('pbEditor');
    var text = t ? t.value.trim() : '';
    var n = (text.match(/\S+/g) || []).length;
    var a = B.aufgabe;

    /* Bewertet wird hier nur, was der Browser ehrlich pruefen kann:
       Laenge, Anrede, Gruss. Den Inhalt beurteilt niemand automatisch —
       dafuer steht die Selbstcheck-Liste da. */
    var anrede = /(sehr geehrte|liebe|hallo|guten tag|hi )/i.test(text);
    var gruss  = /(mit freundlichen grüßen|viele grüße|liebe grüße|beste grüße|bis bald|herzliche grüße)/i.test(text);
    var lang   = n >= a.min;
    var punkte = (anrede?1:0) + (gruss?1:0) + (lang?1:0);
    var pr = Math.round(punkte/3*100);
    merken('lauf', pr);

    kopf('Prüfungslauf am Bildschirm', 'Auswertung', null);
    document.getElementById('pbBody').innerHTML =
        '<div class="pb-ergebnis"><b>'+n+'</b><span>'+(n===1?'Wort':'Wörter')+' geschrieben</span></div>'
      + '<div class="pb-liste">'
      +   haken(lang,   'Mindestens '+a.min+' Wörter', n+' geschrieben')
      +   haken(anrede, 'Eine Anrede steht da', anrede?'gefunden':'fehlt — „Sehr geehrte Frau …" oder „Hallo …"')
      +   haken(gruss,  'Ein Gruß steht da', gruss?'gefunden':'fehlt — „Mit freundlichen Grüßen" oder „Viele Grüße"')
      + '</div>'
      + '<div class="pb-selbst"><b>Das prüfst du selbst</b><ul>'
      +   a.punkte.map(function(x){ return '<li>Bin ich auf „'+E(x)+'" wirklich eingegangen?</li>'; }).join('')
      +   '<li>Steht in jedem Satz ein Verb an der richtigen Stelle?</li>'
      +   '<li>Habe ich Umlaute getippt — oder aus Versehen ae, oe, ue?</li>'
      + '</ul></div>'
      + '<div class="pb-deins"><b>Dein Text</b><pre>'+E(text || '(leer geblieben)')+'</pre></div>'
      + '<div class="pb-knoepfe">'
      +   '<button class="pl-b1" onclick="bildschirmStufe(\'lauf\')">Noch einmal</button>'
      +   '<button class="pl-b2" onclick="bildschirmStart(\''+E(B.niveau)+'\')">Zur Übersicht</button>'
      + '</div>';
  };

  function haken(gut, was, dazu){
    return '<div class="pb-h '+(gut?'gut':'offen')+'"><span>'+(gut?'✓':'○')+'</span>'
      + '<b>'+E(was)+'</b><em>'+E(dazu)+'</em></div>';
  }

  /* ---------- Ende einer Stufe ---------- */

  function ende(titel, prozent, satz, rat){
    kopf(titel, 'Auswertung', null);
    document.getElementById('pbBody').innerHTML =
        '<div class="pl-ende"><div class="pl-ende-ring" style="--p:'+prozent+'"><span>'+prozent+' %</span></div>'
      + '<b>'+E(satz)+'</b><p>'+E(rat)+'</p></div>'
      + '<div class="pb-knoepfe">'
      +   '<button class="pl-b1" onclick="bildschirmStufe(\''+B.stufe+'\')">Noch einmal</button>'
      +   '<button class="pl-b2" onclick="bildschirmStart(\''+E(B.niveau)+'\')">Zur Übersicht</button>'
      + '</div>';
  }

  /* ---------- Uhr und Kleinkram ---------- */

  var uhrId = null, uhrEnde = 0;
  function uhrStarten(min){
    uhrEnde = Date.now() + min*60000;
    uhrId = setInterval(function(){
      var el = document.getElementById('pbUhr'); if(!el) return;
      var rest = uhrEnde - Date.now();
      el.textContent = zeit(rest);
      if(rest < 120000) el.classList.add('knapp');
      if(rest <= 0){ uhrStoppen(); window.bildschirmAbgeben(); }
    }, 1000);
  }
  function uhrStoppen(){ if(uhrId){ clearInterval(uhrId); uhrId = null; } }
  function zeit(ms){
    if(ms < 0) ms = 0;
    var s = Math.round(ms/1000);
    return Math.floor(s/60) + ':' + ('0'+(s%60)).slice(-2);
  }
  function mischen(a){
    a = a.slice();
    for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; }
    return a;
  }

  /* ---------- Aussehen ---------- */

  var gestylt = false;
  function stil(){
    if(gestylt) return; gestylt = true;
    var s = document.createElement('style');
    s.textContent = [
'#pbOv{ position:fixed; inset:0; z-index:9000; background:#FBF7EF; overflow-y:auto; display:none }',
'#pbBody{ max-width:760px; margin:0 auto; padding:18px 16px 70px }',

'.pb-neu{ display:grid; gap:11px; margin:0 0 26px }',
'@media(min-width:640px){ .pb-neu{ grid-template-columns:1fr 1fr } }',
'.pb-neu-k{ background:#fff; border:1.5px solid #EEE7D8; border-radius:16px; padding:13px 15px }',
'.pb-neu-k span{ font-size:22px; display:block }',
'.pb-neu-k b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:15.5px; margin:4px 0 3px }',
'.pb-neu-k p{ margin:0; font-size:13.5px; color:#5B6A70; line-height:1.55 }',

'.pb-hinweis{ background:#FFF6D9; border:1.5px solid #F0DFA6; border-radius:14px;',
'  padding:12px 15px; font-size:14px; line-height:1.6; margin:0 0 24px }',

'.pb-quelle{ font-size:12.5px; color:#8A9096; text-align:center; margin:26px 0 0 }',

'.pb-fortschritt{ height:6px; background:#EEE7D8; border-radius:99px; overflow:hidden; margin:4px 0 26px }',
'.pb-fortschritt i{ display:block; height:100%; background:#2DD4BF; transition:width .3s }',

'.pb-gross{ font-family:"Space Grotesk",sans-serif; font-size:96px; font-weight:800;',
'  text-align:center; line-height:1; margin:10px 0 6px; color:#28353B }',
'.pb-wo{ text-align:center; font-size:15px; color:#5B6A70; margin:0 0 18px }',

'.pb-plan{ display:flex; gap:4px; justify-content:center; flex-wrap:wrap; margin:0 0 22px }',
'.pb-taste{ min-width:34px; padding:9px 6px; text-align:center; border-radius:8px;',
'  border:1.5px solid #DCD3C2; background:#fff; font-size:14px; font-weight:600; color:#5B6A70 }',
'.pb-taste.hier{ background:#FFCE00; border-color:#28353B; color:#28353B; font-weight:800;',
'  box-shadow:0 3px 0 #28353B }',

'.pb-feld{ display:block; width:100%; max-width:200px; margin:0 auto; text-align:center;',
'  font-family:"Space Grotesk",sans-serif; font-size:34px; font-weight:700; padding:12px;',
'  border:2.5px solid #28353B; border-radius:14px; background:#fff; color:#28353B }',
'.pb-feld.breit{ max-width:none; font-size:20px; text-align:left; font-family:inherit; font-weight:500 }',
'.pb-feld.hoch{ min-height:90px; line-height:1.6; resize:vertical }',
'.pb-feld:focus{ outline:3px solid #2DD4BF; outline-offset:2px }',
'.pb-feld.gut{ border-color:#16a34a; background:#F1FBF4 }',
'.pb-feld.schlecht{ border-color:#dc2626; background:#FDF2F2 }',

'.pb-auftrag{ font-size:14px; color:#5B6A70; margin:0 0 10px }',
'.pb-ziel{ background:#fff; border:1.5px solid #EEE7D8; border-radius:14px; padding:14px 16px;',
'  font-size:21px; line-height:1.7; margin:0 0 14px; word-break:break-word }',
'.pb-z{ color:#B9B2A5 }',
'.pb-z.gut{ color:#16a34a }',
'.pb-z.schlecht{ color:#dc2626; background:#FDE2E2; border-radius:3px }',

'.pb-zeile{ display:flex; align-items:center; justify-content:space-between; gap:10px; margin:10px 0 0 }',
'.pb-zaehl{ font-size:13px; color:#8A9096 }',
'.pb-rueck{ min-height:26px; text-align:center; margin:12px 0 0; font-size:15px }',
'.pb-ok{ color:#16a34a; font-weight:700 }',
'.pb-nein{ color:#dc2626; font-weight:700 }',
'.pb-merk{ text-align:center; font-size:13.5px; color:#5B6A70; margin:16px 0 0 }',

'.pb-editorkopf{ display:flex; gap:10px; align-items:center; flex-wrap:wrap;',
'  background:#28353B; color:#fff; border-radius:12px; padding:9px 13px; margin:0 0 14px }',
'.pb-uhr{ font-family:"Space Grotesk",sans-serif; font-weight:800; font-size:19px }',
'.pb-uhr.knapp{ color:#FFCE00 }',
'.pb-woerter{ font-size:14px; opacity:.85 }',
'.pb-woerter.genug{ color:#7BE0CE; opacity:1; font-weight:700 }',
'.pb-ohne{ margin-left:auto; font-size:12px; opacity:.6 }',
'.pb-aufgabe{ background:#fff; border:1.5px solid #EEE7D8; border-radius:14px; padding:14px 16px; margin:0 0 12px }',
'.pb-aufgabe p{ margin:0 0 8px; font-size:14.5px; line-height:1.6 }',
'.pb-aufgabe ul{ margin:0; padding-left:20px; font-size:14.5px; line-height:1.8 }',
'.pb-mind{ margin:9px 0 0 !important; font-size:13px !important; color:#8A9096 }',
'.pb-editor{ width:100%; min-height:230px; padding:14px 16px; font-family:inherit; font-size:16px;',
'  line-height:1.7; border:2px solid #28353B; border-radius:14px; background:#fff; resize:vertical }',
'.pb-editor:focus{ outline:3px solid #2DD4BF; outline-offset:2px }',
'.pb-abgeben{ margin:14px 0 0; width:100% }',
'.pb-kurz{ position:fixed; left:50%; bottom:28px; transform:translateX(-50%); z-index:9500;',
'  background:#28353B; color:#fff; padding:11px 18px; border-radius:99px; font-size:14px }',

'.pb-ergebnis{ text-align:center; margin:6px 0 20px }',
'.pb-ergebnis b{ display:block; font-family:"Space Grotesk",sans-serif; font-size:52px; line-height:1 }',
'.pb-ergebnis span{ font-size:14px; color:#5B6A70 }',
'.pb-liste{ display:grid; gap:9px; margin:0 0 20px }',
'.pb-h{ display:grid; grid-template-columns:auto 1fr; gap:3px 11px; align-items:center;',
'  background:#fff; border:1.5px solid #EEE7D8; border-radius:13px; padding:11px 14px }',
'.pb-h span{ grid-row:span 2; font-size:19px; color:#B9B2A5 }',
'.pb-h.gut span{ color:#16a34a }',
'.pb-h b{ font-size:14.5px }',
'.pb-h em{ font-style:normal; font-size:13px; color:#8A9096 }',
'.pb-selbst{ background:#FFF6D9; border:1.5px solid #F0DFA6; border-radius:14px; padding:13px 16px; margin:0 0 18px }',
'.pb-selbst b{ display:block; font-family:"Space Grotesk",sans-serif; margin:0 0 7px }',
'.pb-selbst ul{ margin:0; padding-left:20px; font-size:14px; line-height:1.75 }',
'.pb-deins{ margin:0 0 20px }',
'.pb-deins b{ display:block; font-family:"Space Grotesk",sans-serif; margin:0 0 7px }',
'.pb-deins pre{ white-space:pre-wrap; word-break:break-word; background:#fff; border:1.5px solid #EEE7D8;',
'  border-radius:13px; padding:13px 15px; font-family:inherit; font-size:14.5px; line-height:1.7; margin:0 }',
'.pb-knoepfe{ display:flex; gap:10px; flex-wrap:wrap; margin:22px 0 0 }',
'.pb-knoepfe button{ flex:1 1 160px }',
'.pb-ueber{ flex:none !important; padding:7px 14px !important; font-size:13px !important }'
    ].join('\n');
    document.head.appendChild(s);
  }

  /* ---------- Der Block auf der Prüfungsseite ---------- */

  window.bildschirmBlock = function(p){
    var pr = window.bildschirmProzent();
    return '<div class="pl-intro"><h2>Am Bildschirm</h2>'
      + '<p>Hören, Lesen und Schreiben laufen seit 2026 am Rechner. Getippt wird auf QWERTZ, '
      + 'ohne Rechtschreibprüfung, mit mitlaufendem Wortzähler. Vier Stufen, damit dir am '
      + 'Prüfungstag nicht die Tastatur im Weg steht.</p></div>'
      + '<button class="pl-karte" onclick="bildschirmStart(\''+E(p.niveau||'B1')+'\')">'
      +   '<span class="pl-karte-z pl-f-lila">⌨️</span>'
      +   '<span class="pl-karte-t"><b>'+(pr>0?'Weiter üben':'Tipptraining starten')+'</b>'
      +     '<em>ä ö ü ß · Wörter · Sätze auf Zeit · Prüfungslauf</em></span>'
      +   '<span class="pl-karte-p">'+pr+' %</span>'
      +   '<span class="pl-karte-bar"><i style="width:'+pr+'%"></i></span>'
      + '</button>';
  };

})();
