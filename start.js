/* ============================================================
   deutschoderwas club — DIE STARTSEITE

   Was eine Schülerin sieht, wenn sie sich einloggt. Aufgebaut nach
   einer klaren Rangfolge statt sechs gleich lauten Kacheln:

     1. Weiter im Kurs   — wo sie stehengeblieben ist, ein Klick zurück
     2. Die nächste Stunde und ihr Ziel
     3. Vier Zahlen, ruhig
     4. Weitermachen — mit echten Bildern aus dem Kurs
     5. Community und App

   Farben: Türkis als Signaturfarbe wie im Logo, warmes Creme als Grund,
   Gold und Rot nur als kleine Akzente. Bilder kommen aus bilder/thema —
   dieselben Fotos wie in den Lektionen.
   ============================================================ */
(function(){
  'use strict';

  /* ---------- Welches Foto zu welcher Lektion ---------- */
  var BILD = {
    A1: { vorstellen:'redemittel', familie:'perfekt-praeteritum', einkaufen:'einkaufen',
          wohnung:'wohnen', tag:'nominalisierung', freizeit:'kultur', schule:'familie',
          beruf:'ki-arbeitswelt', amt:'amt', gesundheit:'gesundheit', unterwegs:'stadt',
          kundenservice:'kunden', kleidung:'strand', feste:'menschen' },
    A2: { ankommen:'umgangssprache', 'wohnung-suchen':'wohnen', 'im-haus':'handwerk',
          'arbeit-finden':'bewerbung', 'im-betrieb':'buero', 'beim-amt':'amt',
          gesundheit:'pflege', 'geld-und-vertraege':'kunden', 'kinder-und-schule':'familie',
          unterwegs:'reisen', 'freizeit-und-kontakte':'menschen', 'medien-und-technik':'medien',
          'essen-und-einladen':'essen', 'plaene-und-zukunft':'natur' }
  };
  function kursBild(niveau, id){
    var m = BILD[niveau] || {}, n = m[id] || 'menschen';
    return 'bilder/thema/' + n + '.jpg';
  }

  /* ---------- Aussehen ---------- */
  var CSS = ''
  /* Der bunte Hintergrund der Seite wird auf der Startseite ruhiger gestellt,
     damit die Bilder und Karten wirken können. Andere Seiten bleiben, wie sie sind. */
  + 'body:has(#v-dashboard.active) .club-bg{background:linear-gradient(168deg,#FFFDF9 0%,#FDF9F1 58%,#FAF4E8 100%)}'
  + 'body:has(#v-dashboard.active) .club-bg .blob{opacity:.11;filter:blur(96px);animation:none}'
  + 'body:has(#v-dashboard.active) .club-bg .b3{display:none}'

  + '#v-dashboard .st{display:flex;flex-direction:column;gap:20px}'
  + '#v-dashboard .st *{box-sizing:border-box}'
  + '.st{--tint:#0E7C8C;--tint2:#2CC0AE;--ink:#16181A;--weich:#6B7280;'
  +     '--rand:#ECE3D6;--karte:#fff;--gold:#C79600;--schatten:0 2px 8px rgba(24,20,14,.05),0 12px 28px rgba(24,20,14,.06)}'

  /* Gruß */
  + '.st-gruss{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;flex-wrap:wrap}'
  + '.st-gruss h1{font-family:"Space Grotesk",sans-serif;font-size:27px;font-weight:700;letter-spacing:-.01em;color:var(--ink);margin:0}'
  + '.st-gruss p{font-size:14.5px;color:var(--weich);margin:5px 0 0}'
  + '.st-gruss .heute{font-size:13px;color:var(--weich);white-space:nowrap;padding-bottom:3px}'

  /* Abo-Hinweis */
  + '.st-abo{background:linear-gradient(135deg,#EAF7F6,#FFF8E4);border:1px solid #BFE4DE;border-radius:14px;'
  +   'padding:12px 16px;font-size:14px;color:var(--ink)}'
  + '.st-abo span{color:var(--weich);font-size:13.5px}'
  + '.st-abo a{color:var(--tint);font-weight:700;text-decoration:none}'
  + '.st-abo a:hover{text-decoration:underline}'

  /* Obere Reihe */
  + '.st-oben{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(0,1fr);gap:18px;align-items:stretch}'
  + '@media(max-width:1040px){.st-oben{grid-template-columns:1fr}}'

  /* Weiter im Kurs */
  + '.st-kurs{display:grid;grid-template-columns:minmax(0,290px) minmax(0,1fr);background:var(--karte);'
  +   'border:1px solid var(--rand);border-radius:20px;box-shadow:var(--schatten);overflow:hidden;min-height:246px}'
  + '@media(max-width:620px){.st-kurs{grid-template-columns:1fr}}'
  + '.st-kurs .bild{position:relative;background:linear-gradient(140deg,#0E7C8C,#2CC0AE);min-height:160px;overflow:hidden}'
  + '.st-kurs .bild img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}'
  + '.st-kurs .bild::after{content:"";position:absolute;inset:0;background:linear-gradient(150deg,rgba(6,30,34,.34),rgba(6,30,34,.02) 55%)}'
  + '.st-kurs .stufe{position:absolute;left:14px;top:14px;z-index:2;background:rgba(255,255,255,.95);color:#0E5B66;'
  +   'font-family:"Space Grotesk",sans-serif;font-weight:700;font-size:12.5px;letter-spacing:.06em;'
  +   'border-radius:999px;padding:5px 12px;box-shadow:0 2px 8px rgba(0,0,0,.16)}'
  + '.st-kurs .txt{padding:22px 24px 20px;display:flex;flex-direction:column;min-width:0}'
  + '.st-kurs .eyebrow{font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:var(--tint)}'
  + '.st-kurs h2{font-family:"Space Grotesk",sans-serif;font-size:22px;font-weight:700;line-height:1.22;'
  +   'color:var(--ink);margin:7px 0 0;letter-spacing:-.01em}'
  + '.st-kurs .ziel{font-size:14px;color:var(--weich);line-height:1.5;margin-top:7px;'
  +   'display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}'
  + '.st-kurs .fort{margin-top:auto;padding-top:16px}'
  + '.st-kurs .fz{display:flex;justify-content:space-between;font-size:12.5px;color:var(--weich);margin-bottom:7px;font-weight:600}'
  + '.st-kurs .fz b{color:var(--ink);font-family:"Space Grotesk",sans-serif}'
  + '.st-bar{height:8px;border-radius:999px;background:#EFEAE0;overflow:hidden}'
  + '.st-bar i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#0E7C8C,#2CC0AE);transition:width .5s}'
  + '.st-kurs .akt{display:flex;gap:9px;flex-wrap:wrap;margin-top:15px}'

  /* Knöpfe */
  + '.st-b{display:inline-flex;align-items:center;gap:7px;border:0;cursor:pointer;font-family:inherit;'
  +   'font-size:14px;font-weight:700;border-radius:999px;padding:11px 20px;transition:transform .14s,box-shadow .14s,background .14s}'
  + '.st-b:hover{transform:translateY(-1px)}'
  + '.st-b1{background:linear-gradient(135deg,#0E7C8C,#2CC0AE);color:#fff;box-shadow:0 4px 14px rgba(14,124,140,.28)}'
  + '.st-b1:hover{box-shadow:0 8px 22px rgba(14,124,140,.34)}'
  + '.st-b2{background:#fff;color:var(--ink);border:1px solid var(--rand)}'
  + '.st-b2:hover{background:#FBF7F0}'
  + '.st-b3{background:rgba(255,255,255,.18);color:#fff;border:1px solid rgba(255,255,255,.4)}'
  + '.st-b-s{padding:9px 16px;font-size:13px}'

  /* Rechte Spalte */
  + '.st-rechts{display:flex;flex-direction:column;gap:14px;min-width:0}'
  + '.st-karte{background:var(--karte);border:1px solid var(--rand);border-radius:20px;box-shadow:var(--schatten);padding:18px 20px}'
  + '.st-live{display:flex;flex-direction:column;flex:1}'
  + '.st-live .kopf{display:flex;align-items:center;justify-content:space-between;gap:10px}'
  + '.st-live .marke{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:800;'
  +   'letter-spacing:.07em;text-transform:uppercase;color:#C1121F}'
  + '.st-live .marke i{width:7px;height:7px;border-radius:50%;background:#C1121F;animation:stPuls 1.6s infinite}'
  + '@keyframes stPuls{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(.78)}}'
  + '.st-live .uhr{font-family:"Space Grotesk",sans-serif;font-weight:700;font-size:15px;color:var(--ink)}'
  + '.st-live h3{font-family:"Space Grotesk",sans-serif;font-size:17px;font-weight:700;line-height:1.28;margin:9px 0 0;color:var(--ink)}'
  + '.st-live .sub{font-size:13.5px;color:var(--weich);margin-top:5px;line-height:1.5}'
  + '.st-live .akt{display:flex;gap:8px;flex-wrap:wrap;margin-top:auto;padding-top:14px}'

  /* Zahlen */
  + '.st-zahlen{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--rand);'
  +   'border:1px solid var(--rand);border-radius:18px;overflow:hidden}'
  + '@media(max-width:760px){.st-zahlen{grid-template-columns:repeat(2,1fr)}}'
  + '.st-z{background:var(--karte);padding:15px 18px}'
  + '.st-z .l{font-size:12.5px;color:var(--weich);font-weight:600;display:flex;align-items:center;gap:6px}'
  + '.st-z .v{font-family:"Space Grotesk",sans-serif;font-size:27px;font-weight:700;color:var(--ink);margin-top:5px;line-height:1}'
  + '.st-z .d{font-size:12px;color:var(--weich);margin-top:4px}'

  /* Abschnitts-Überschrift */
  + '.st-titel{display:flex;align-items:baseline;justify-content:space-between;gap:14px;margin:6px 0 -6px}'
  + '.st-titel h2{font-family:"Space Grotesk",sans-serif;font-size:19px;font-weight:700;color:var(--ink);margin:0}'
  + '.st-titel a{font-size:13.5px;color:var(--tint);font-weight:600;text-decoration:none}'
  + '.st-titel a:hover{text-decoration:underline}'

  /* Weitermachen */
  + '.st-gitter{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}'
  + '@media(max-width:960px){.st-gitter{grid-template-columns:repeat(2,minmax(0,1fr))}}'
  + '@media(max-width:600px){.st-gitter{grid-template-columns:1fr}}'
  + '.st-kachel{display:flex;flex-direction:column;text-align:left;background:var(--karte);border:1px solid var(--rand);'
  +   'border-radius:18px;overflow:hidden;cursor:pointer;padding:0;font-family:inherit;'
  +   'box-shadow:0 1px 4px rgba(24,20,14,.04);transition:transform .16s,box-shadow .16s,border-color .16s}'
  + '.st-kachel:hover{transform:translateY(-3px);box-shadow:var(--schatten);border-color:#DED2C0}'
  + '.st-kachel .bd{position:relative;aspect-ratio:16/9;background:linear-gradient(140deg,#0E7C8C,#2CC0AE);overflow:hidden}'
  + '.st-kachel .bd img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}'
  + '.st-kachel:hover .bd img{transform:scale(1.045)}'
  /* Amanda und Julia sind Porträts — die stehen rund auf ruhigem Grund statt breitgezogen */
  + '.st-kachel .bd.portraet{background:linear-gradient(150deg,#F3FAF8,#FFF6E4)}'
  + '.st-kachel .bd.portraet img{inset:auto;left:50%;top:50%;transform:translate(-50%,-50%);'
  +   'width:104px;height:104px;border-radius:50%;object-fit:cover;object-position:center 22%;'
  +   'border:3px solid #fff;box-shadow:0 6px 18px rgba(24,20,14,.16)}'
  + '.st-kachel:hover .bd.portraet img{transform:translate(-50%,-50%) scale(1.05)}'
  + '.st-kachel .bd .zeichen{position:absolute;right:11px;bottom:11px;z-index:2;width:36px;height:36px;border-radius:11px;'
  +   'background:rgba(255,255,255,.94);display:flex;align-items:center;justify-content:center;font-size:18px;'
  +   'box-shadow:0 3px 10px rgba(0,0,0,.18)}'
  + '.st-kachel .kt{padding:14px 16px 16px}'
  + '.st-kachel .kt b{display:block;font-family:"Space Grotesk",sans-serif;font-size:15.5px;font-weight:700;color:var(--ink);line-height:1.3}'
  + '.st-kachel .kt span{display:block;font-size:13px;color:var(--weich);line-height:1.5;margin-top:5px}'
  + '.st-kachel .kt .mehr{color:var(--tint);font-weight:700;font-size:13px;margin-top:9px}'

  /* Community */
  + '.st-chat{display:flex;align-items:center;gap:18px;border-radius:20px;padding:20px 22px;cursor:pointer;'
  +   'background:linear-gradient(135deg,#0B5F73 0%,#0E7C8C 52%,#2CC0AE 100%);color:#fff;'
  +   'box-shadow:0 10px 28px rgba(14,124,140,.22);transition:transform .16s,box-shadow .16s}'
  + '.st-chat:hover{transform:translateY(-2px);box-shadow:0 16px 38px rgba(14,124,140,.3)}'
  + '.st-chat .ic{flex:none;width:54px;height:54px;border-radius:16px;background:rgba(255,255,255,.16);'
  +   'display:flex;align-items:center;justify-content:center;font-size:26px}'
  + '.st-chat .tx{flex:1;min-width:0}'
  + '.st-chat .eb{display:flex;align-items:center;gap:9px;font-size:11px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;opacity:.94}'
  + '.st-chat .eb .an{display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,.18);border-radius:999px;'
  +   'padding:2px 9px;letter-spacing:0;text-transform:none;font-weight:700;font-size:10.5px}'
  + '.st-chat .eb .an i{width:6px;height:6px;border-radius:50%;background:#8FF0C8;animation:stPuls 2s infinite}'
  + '.st-chat h3{font-family:"Space Grotesk",sans-serif;font-size:17.5px;font-weight:700;margin:7px 0 3px;color:#fff;line-height:1.25}'
  + '.st-chat p{font-size:13.5px;opacity:.93;margin:0;line-height:1.5;max-width:620px}'
  + '@media(max-width:820px){.st-chat{flex-wrap:wrap;padding:17px 18px}'
  +   '.st-chat .ic{width:44px;height:44px;font-size:22px}'
  +   '.st-chat h3{font-size:16px}.st-chat p{font-size:13px}'
  +   '.st-chat .st-b3{width:100%;justify-content:center;margin-top:4px}}'

  /* ---------- Handy und Tablet ----------
     Dieselbe Seite, nur enger gesetzt. Es gibt keine getrennte
     Handy-Startseite mehr — was der Schüler am Rechner sieht,
     sieht er unterwegs auch. */
  /* Tablet: zwei Spalten. Die Bilder werden flacher, sonst werden die Karten zu hoch. */
  + '@media(min-width:621px) and (max-width:1100px){'
  +   '.st-kachel .bd{aspect-ratio:2.3/1}'
  +   '.st-live{flex-direction:row;flex-wrap:wrap;align-items:center;gap:6px 20px}'
  +   '.st-live .kopf{width:100%}'
  +   '.st-live h3{margin-top:2px}'
  +   '.st-live .tx{flex:1;min-width:200px}'
  +   '.st-live .akt{margin-top:0;padding-top:0;margin-left:auto}'
  + '}'

  + '@media(max-width:900px){'
  +   '#v-dashboard .st{gap:16px}'
  +   '.st-gruss h1{font-size:23px}'
  +   '.st-gruss p{font-size:13.5px}'
  +   '.st-kurs{min-height:0}'
  +   '.st-kurs .txt{padding:18px 18px 18px}'
  +   '.st-kurs h2{font-size:19px}'
  +   '.st-karte{padding:16px 18px;border-radius:18px}'
  +   '.st-z{padding:13px 14px}'
  +   '.st-z .v{font-size:23px}'
  +   '.st-z .l{font-size:11.5px}'
  +   '.st-titel h2{font-size:17px}'
  +   '.st-gitter{gap:13px}'
  + '}'
  /* Auf dem Handy steht das Bild über dem Text, nicht daneben */
  + '@media(max-width:620px){'
  +   '.st-kurs .bild{aspect-ratio:16/9;min-height:0}'
  +   '.st-kurs .stufe{font-size:12px}'
  +   '.st-b{padding:11px 17px;font-size:13.5px}'
  +   '.st-kurs .akt .st-b{flex:1;justify-content:center}'
  /* Die Kacheln legen sich quer: Bild links, Text rechts.
     Sonst wird die Seite auf dem Handy doppelt so lang. */
  +   '.st-kachel{flex-direction:row;align-items:stretch}'
  +   '.st-kachel .bd{aspect-ratio:auto;width:112px;flex:none}'
  +   '.st-kachel .bd .zeichen{width:28px;height:28px;font-size:14px;right:7px;bottom:7px;border-radius:9px}'
  +   '.st-kachel .bd.portraet img{width:74px;height:74px;border-width:2px}'
  +   '.st-kachel .kt{padding:13px 14px;display:flex;flex-direction:column;justify-content:center;min-width:0}'
  +   '.st-kachel .kt b{font-size:14.5px}'
  +   '.st-kachel .kt span{font-size:12.5px;margin-top:3px;'
  +     'display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}'
  + '}'

  /* App-Streifen */
  + '.st-app{display:flex;align-items:center;gap:14px;background:#FFFCF5;border:1px solid var(--rand);'
  +   'border-radius:16px;padding:14px 18px;text-decoration:none;color:var(--ink);transition:border-color .16s,background .16s}'
  + '.st-app:hover{background:#fff;border-color:#DED2C0}'
  + '.st-app .ic{flex:none;width:42px;height:42px;border-radius:12px;background:#EAF7F6;display:flex;'
  +   'align-items:center;justify-content:center;font-size:20px}'
  + '.st-app b{display:block;font-size:14.5px;font-family:"Space Grotesk",sans-serif}'
  + '.st-app span{display:block;font-size:13px;color:var(--weich);margin-top:2px}'
  + '.st-app .go{margin-left:auto;font-size:13.5px;font-weight:700;color:var(--tint);white-space:nowrap}'
  + '@media(max-width:600px){.st-app .go{display:none}}';

  function stil(){
    if(document.getElementById('startStil')) return;
    var s=document.createElement('style'); s.id='startStil'; s.textContent=CSS;
    document.head.appendChild(s);
  }

  /* ---------- Werkzeug ---------- */
  function E(x){ return String(x==null?'':x).replace(/[&<>"']/g,function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  /* Text mit Übersetzungsschlüssel: bleibt deutsch, wird bei Sprachwechsel getauscht */
  function T(schluessel, deutsch){ return '<span data-i18n="'+schluessel+'">'+deutsch+'</span>'; }

  /* ---------- Die Seite ---------- */
  var STARTSEITE = {};

  STARTSEITE.zeichne = function(ziel, k){
    if(!ziel) return;
    stil();
    k = k || {};
    var s = k.stats || {upcoming:[],past:[],streak:0,known:0,vocabTotal:0};
    var name = (k.name||'').split(' ')[0];

    ziel.innerHTML = ''
      + '<div class="st">'
      +   gruss(name)
      +   (k.abo ? '<div class="st-abo">' + k.abo + '</div>' : '')
      +   '<div id="lzSlot"></div>'
      +   '<div class="st-oben">' + kursKarte(k) + '<div class="st-rechts">' + liveKarte(k) + '</div></div>'
      +   zahlen(k, s)
      +   '<div class="st-titel"><h2>' + T('sn_weiter','Weitermachen') + '</h2></div>'
      +   kacheln(k, s)
      +   chatBand()
      /* Die Handy-App ist vorübergehend ausgeblendet — sie kommt zurück,
         wenn die Plattform fertig ist. Zum Wiedereinschalten den Streifen
         unten in appStreifen() wieder einhängen. */
      + '</div>';
  };

  function gruss(name){
    var h = new Date().getHours();
    var gruesse = h<11 ? ['sn_gm','Guten Morgen'] : (h<18 ? ['sn_gt','Hallo'] : ['sn_ga','Guten Abend']);
    return '<div class="st-gruss"><div>'
      + '<h1>' + T(gruesse[0], gruesse[1]) + (name ? ', ' + E(name) : '') + '! 👋</h1>'
      + '<p>' + T('sn_sub','Schön, dass du da bist. Zehn Minuten heute sind mehr wert als zwei Stunden nächste Woche.') + '</p>'
      + '</div></div>';
  }

  /* Weiter im Kurs — die wichtigste Karte der Seite */
  function kursKarte(k){
    var st = null;
    try{ if(window.kursStand) st = window.kursStand(); }catch(e){}

    if(!st){
      return '<div class="st-kurs"><div class="bild">'
        + '<img src="bilder/thema/menschen.jpg" alt="" loading="lazy" onerror="this.remove()">'
        + '<span class="stufe">A1</span></div>'
        + '<div class="txt"><div class="eyebrow">' + T('sn_kdein','Dein Kurs') + '</div>'
        + '<h2>' + T('sn_klos','Fang mit Lektion 1 an') + '</h2>'
        + '<div class="ziel">' + T('sn_klosb','Vierzehn Lektionen pro Stufe: Wendungen, Grammatik, Übungen, ein Gespräch und ein Schreibauftrag.') + '</div>'
        + '<div class="fort"><div class="akt">'
        + '<button class="st-b st-b1" onclick="go(\'kurs\')">' + T('sn_kstart','Kurs öffnen') + '</button>'
        + '</div></div></div></div>';
    }

    var prozTxt = st.prozent + ' %';
    var weiter = st.angefangen ? ['sn_kweiter','Weitermachen'] : ['sn_kstart2','Los geht’s'];
    return '<div class="st-kurs">'
      + '<div class="bild">'
      +   '<img src="' + kursBild(st.niveau, st.id) + '" alt="" loading="lazy" onerror="this.remove()">'
      +   '<span class="stufe">' + E(st.niveau) + '</span>'
      + '</div>'
      + '<div class="txt">'
      +   '<div class="eyebrow">' + T('sn_kdein','Dein Kurs') + ' · ' + T('sn_klek','Lektion') + ' ' + st.nr + '</div>'
      +   '<h2>' + E(st.lektion) + '</h2>'
      +   '<div class="ziel">' + E(st.ziel) + '</div>'
      +   '<div class="fort">'
      +     '<div class="fz"><span>' + T('sn_kvon1','Lektion') + ' <b>' + st.nr + '</b> ' + T('sn_kvon2','von') + ' <b>' + st.anzahl + '</b></span>'
      +     '<span><b>' + prozTxt + '</b> ' + T('sn_kgeschafft','geschafft') + '</span></div>'
      +     '<div class="st-bar"><i style="width:' + Math.max(2, st.prozent) + '%"></i></div>'
      +     '<div class="akt">'
      +       '<button class="st-b st-b1" onclick="kursOeffnen(' + st.nr + ',\'' + st.niveau + '\')">' + T(weiter[0], weiter[1]) + '</button>'
      +       '<button class="st-b st-b2" onclick="kursUebersicht(\'' + st.niveau + '\')">' + T('sn_kalle','Alle Lektionen') + '</button>'
      +     '</div>'
      +   '</div>'
      + '</div></div>';
  }

  /* Die nächste Live-Stunde */
  function liveKarte(k){
    var s = k.stats || {upcoming:[]};
    if(s.upcoming && s.upcoming.length){
      var n = s.upcoming[0], d = new Date(n.starts_at);
      var heute = (new Date(s.now)).toDateString() === d.toDateString();
      var zeit = (typeof window.fmtTimeK==='function') ? window.fmtTimeK(d)
                : d.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'});
      var tag = heute ? T('sn_lheute','Heute') : d.toLocaleDateString('de-DE',{weekday:'short',day:'2-digit',month:'2-digit'});
      var beitreten = '';
      try{
        beitreten = window.dowJoinBtn({class_id:n.class_id||n.id, starts_at:n.starts_at, title:n.title, level:n.level},'st-b st-b1 st-b-s') || '';
      }catch(e){}
      if(!beitreten) beitreten = '<button class="st-b st-b1 st-b-s" onclick="go(\'stunden\')">' + T('sn_lzur','Zur Stunde') + '</button>';
      return '<div class="st-karte st-live">'
        + '<div class="kopf"><span class="marke"><i></i>' + (heute ? T('sn_llive','Live heute') : T('sn_lnext','Nächste Stunde')) + '</span>'
        + '<span class="uhr">' + tag + ' · ' + zeit + '</span></div>'
        + '<div class="tx"><h3>' + E(n.title) + '</h3>'
        + '<div class="sub">' + E(n.level||'') + (n.topic ? ' · ' + E(n.topic) : '') + '</div></div>'
        + '<div class="akt">' + beitreten
        + '<button class="st-b st-b2 st-b-s" onclick="go(\'stunden\')">' + T('sn_lvor','Vorbereiten') + '</button></div>'
        + '</div>';
    }
    return '<div class="st-karte st-live">'
      + '<div class="kopf"><span class="marke"><i></i>' + T('sn_lteach','Live-Unterricht') + '</span></div>'
      + '<div class="tx"><h3>' + T('sn_lnone','Noch keine Stunde gebucht') + '</h3>'
      + '<div class="sub">' + T('sn_lnoneb','Kleine Gruppen, feste Themen, echte Menschen. Such dir etwas aus, das zu deiner Woche passt.') + '</div></div>'
      + '<div class="akt"><a class="st-b st-b1 st-b-s" href="#" onclick="return bucheStunde(event)">' + T('sn_lbook','Stunde buchen') + '</a></div>'
      + '</div>';
  }

  /* Vier ruhige Zahlen */
  function zahlen(k, s){
    var c = (k.credits==null ? 0 : k.credits);
    return '<div class="st-zahlen">'
      + z('🎟️', T('sn_zguth','Guthaben'), c, T('sn_zguthd','Stunden frei'))
      + z('🔥', T('sn_zserie','Lernserie'), s.streak||0, (s.streak===1?T('sn_zwoche','Woche'):T('sn_zwochen','Wochen')) + ' ' + T('sn_zamstueck','am Stück'))
      + z('🎧', T('sn_zlive','Live-Stunden'), (s.past||[]).length, T('sn_zbesucht','besucht'))
      + z('🃏', T('sn_zvok','Vokabeln'), s.known||0, T('sn_zgelernt','gelernt'))
      + '</div>';
  }
  function z(icon, label, wert, unten){
    return '<div class="st-z"><div class="l">' + icon + ' ' + label + '</div>'
      + '<div class="v">' + wert + '</div><div class="d">' + unten + '</div></div>';
  }

  /* Weitermachen — mit den Fotos aus dem Kurs */
  function kacheln(k, s){
    var vok = (s.vocabTotal>0)
      ? (s.vocabTotal + ' ' + '<span data-i18n="sn_wvokb1">Wörter warten auf dich — mit Bild, Ton und Beispielsatz.</span>')
      : T('sn_wvokb2','Täglich eine Runde — mit Bild, Ton und Beispielsatz.');
    /* foto = Bild füllt die Fläche · portraet = rundes Bild auf ruhigem Grund */
    var K = [
      ['foto','bilder/thema/relativsaetze-s.jpg','🃏', T('sn_wvokt','Vokabeln üben'), vok, "go('vokabeln')"],
      ['portraet','amanda.png','🎤', T('sn_wamat','Mit Amanda sprechen'), T('sn_wamab','Jederzeit frei Deutsch reden — sie hört zu, korrigiert und wird nie ungeduldig.'), "go('amanda')"],
      ['portraet','julia-rund.png','✍️', T('sn_wjult','Julia korrigiert deinen Text'), T('sn_wjulb','Schreib etwas auf Deutsch — ich lese es persönlich und schicke es dir zurück.'), "location.href='korrektur.html'"],
      ['foto','bilder/thema/satzmelodie-s.jpg','🗣️', T('sn_wauft','Aussprache trainieren'), T('sn_waufb','Laute hören, nachsprechen und prüfen lassen — bis es sitzt.'), "location.href='aussprache.html'"],
      ['foto','bilder/thema/konjunktiv2-s.jpg','📅', T('sn_wvort','Stunden vorbereiten'), T('sn_wvorb','Übungen und Material zu deinen gebuchten Stunden.'), "go('stunden')"],
      ['foto','bilder/thema/starke-adjektive-s.jpg','🏆', T('sn_wfort','Dein Fortschritt'), T('sn_wforb','Abzeichen, Serien und wie weit du wirklich schon bist.'), "go('fortschritt')"]
    ];
    return '<div class="st-gitter">' + K.map(function(x){
      return '<button class="st-kachel" onclick="' + x[5] + '">'
        + '<span class="bd ' + x[0] + '"><img src="' + x[1] + '" alt="" loading="lazy" onerror="this.remove()">'
        + '<span class="zeichen">' + x[2] + '</span></span>'
        + '<span class="kt"><b>' + x[3] + '</b><span>' + x[4] + '</span></span>'
        + '</button>';
    }).join('') + '</div>';
  }

  /* Ausgeblendet, bis die App wieder dran ist. Dann in zeichne() einhängen. */
  function appStreifen(){
    return '<a class="st-app" href="app.html">'
      + '<span class="ic">📱</span>'
      + '<span><b>' + T('sn_appt','Die App fürs Handy') + '</b>'
      + '<span>' + T('sn_appb','Sprechen mit Amanda, Fotowörter und der Chat — für zwischendurch. Auf dem Handy öffnen und auf den Startbildschirm legen.') + '</span></span>'
      + '<span class="go">' + T('sn_appg','Öffnen →') + '</span>'
      + '</a>';
  }

  function chatBand(){
    return '<div class="st-chat" onclick="go(\'community\')" role="button" tabindex="0">'
      + '<span class="ic">💬</span>'
      + '<span class="tx">'
      +   '<span class="eb">' + T('sn_ccom','Community-Chat') + ' <span class="an"><i></i><span id="dcOnline">live</span></span></span>'
      +   '<h3>' + T('sn_ctitel','Schreib mit anderen — zu jedem Thema') + '</h3>'
      +   '<p>' + T('sn_ctext','Nach Stufe von A1 bis C2, nach Ziel wie Beruf, Pflege oder Prüfung — und einfach zum Plaudern. Julia liest täglich mit.') + '</p>'
      + '</span>'
      + '<span class="st-b st-b3">' + T('sn_cgo','Chat öffnen →') + '</span>'
      + '</div>';
  }

  /* Direkt in eine Lektion springen: erst den Kursbereich zeigen,
     dann die Lektion öffnen. */
  window.kursOeffnen = function(nr, niveau){
    try{ if(window.go) window.go('kurs'); }catch(e){}
    setTimeout(function(){
      try{
        /* Das Niveau mitgeben — sonst landet man im A1-Kurs,
           auch wenn man gerade A2 macht. */
        if(window.renderKursA1) window.renderKursA1(niveau||null);
        if(window.kursA1) window.kursA1(nr);
      }catch(e){}
    }, 40);
    return false;
  };

  /* Die Lektionsübersicht des Niveaus, das gerade dran ist */
  window.kursUebersicht = function(niveau){
    try{ if(window.go) window.go('kurs'); }catch(e){}
    setTimeout(function(){
      try{ if(window.renderKursA1) window.renderKursA1(niveau||null); }catch(e){}
    }, 40);
    return false;
  };

  window.STARTSEITE = STARTSEITE;

  /* Diese Datei wird weit unten in der Seite geladen. Wenn die Startseite
     schon gezeichnet werden wollte, bevor es sie gab, holen wir das jetzt nach. */
  try{
    var offen = document.getElementById('startNeu');
    if(offen && !offen.innerHTML && typeof window.renderDashboard === 'function') window.renderDashboard();
  }catch(e){}
  document.addEventListener('DOMContentLoaded', function(){
    try{
      var el = document.getElementById('startNeu');
      if(el && !el.innerHTML && typeof window.renderDashboard === 'function') window.renderDashboard();
    }catch(e){}
  });
})();
