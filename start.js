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
  /* Alles hier baut auf marke.css auf — dieselben Farben und Bausteine
     wie auf deutschoderwas-club.de. */
  var CSS = ''
  /* Der Hintergrund: warmes Creme wie draußen, ohne wandernde Farbflecken */
  + 'body:has(#v-dashboard.active) .club-bg{background:linear-gradient(168deg,#FFFDF9 0%,#FFFBF1 55%,#FFF6E4 100%)}'
  + 'body:has(#v-dashboard.active) .club-bg .blob{opacity:.10;filter:blur(96px);animation:none}'
  + 'body:has(#v-dashboard.active) .club-bg .b3{display:none}'

  + '#v-dashboard .st{display:flex;flex-direction:column;gap:22px}'
  + '#v-dashboard .st *{box-sizing:border-box}'
  + '.st{--tint:#0F766E;--tint2:#7ED8EA;--ink:#1A1A1A;--weich:#5B6A70;'
  +     '--rand:#EEE7D8;--karte:#fff;--gold:#FFCE00;--warm:#FFF7E6;--mint:#DFF6F8;'
  +     '--schatten:0 4px 14px rgba(26,26,26,.05)}'

  /* Gruß — mit Textmarker auf dem, worauf es ankommt */
  + '.st-gruss{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;flex-wrap:wrap}'
  + '.st-gruss h1{font-family:"Space Grotesk",sans-serif;font-size:32px;font-weight:800;'
  +   'letter-spacing:-.025em;color:var(--ink);margin:0;line-height:1.12}'
  + '.st-gruss p{font-size:15px;color:var(--weich);margin:8px 0 0;line-height:1.55;max-width:640px}'

  /* Abo-Hinweis */
  + '.st-abo{background:var(--mint);border:1px solid rgba(45,212,191,.3);border-radius:14px;'
  +   'padding:12px 16px;font-size:14px;color:var(--ink)}'
  + '.st-abo span{color:var(--weich);font-size:13.5px}'
  + '.st-abo a{color:#10627A;font-weight:700;text-decoration:none}'
  + '.st-abo a:hover{text-decoration:underline}'

  /* Obere Reihe */
  + '.st-oben{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(0,1fr);gap:18px;align-items:stretch}'
  + '@media(max-width:1040px){.st-oben{grid-template-columns:1fr}}'

  /* Weiter im Kurs */
  + '.st-kurs{display:grid;grid-template-columns:minmax(0,300px) minmax(0,1fr);background:var(--karte);'
  +   'border:1px solid var(--rand);border-radius:20px;box-shadow:0 4px 14px rgba(26,26,26,.05);overflow:hidden;min-height:252px}'
  + '@media(max-width:620px){.st-kurs{grid-template-columns:1fr}}'
  + '.st-kurs .bild{position:relative;background:linear-gradient(140deg,#7ED8EA,#DFF6F8);min-height:160px;overflow:hidden}'
  + '.st-kurs .bild img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}'
  + '.st-kurs .bild::after{content:"";position:absolute;left:0;right:0;bottom:0;height:5px;'
  +   'background:linear-gradient(90deg,#D83636 0 33%,#FFCE00 33% 66%,#7ED8EA 66% 100%)}'
  + '.st-kurs .stufe{position:absolute;left:14px;top:14px;z-index:2;background:#fff;color:#0F766E;'
  +   'font-family:"Space Grotesk",sans-serif;font-weight:700;font-size:12.5px;letter-spacing:.06em;'
  +   'border-radius:999px;padding:6px 14px;border:1px solid #EEE7D8;box-shadow:0 2px 6px rgba(0,0,0,.10)}'
  + '.st-kurs .txt{padding:22px 26px 22px;display:flex;flex-direction:column;min-width:0}'
  + '.st-kurs .eyebrow{display:inline-block;align-self:flex-start;color:#0F766E;font-weight:900;'
  +   'font-size:12px;letter-spacing:.1em;text-transform:uppercase;background:#DFF6F8;'
  +   'padding:6px 14px;border-radius:999px}'
  + '.st-kurs h2{font-family:"Space Grotesk",sans-serif;font-size:25px;font-weight:800;line-height:1.18;'
  +   'color:var(--ink);margin:11px 0 0;letter-spacing:-.025em}'
  + '.st-kurs .ziel{font-size:14.5px;color:var(--weich);line-height:1.55;margin-top:8px;'
  +   'display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}'
  + '.st-kurs .fort{margin-top:auto;padding-top:16px}'
  + '.st-kurs .fz{display:flex;justify-content:space-between;font-size:13px;color:var(--weich);margin-bottom:7px;font-weight:600}'
  + '.st-kurs .fz b{color:var(--ink);font-family:"Space Grotesk",sans-serif}'
  + '.st-bar{height:10px;border-radius:999px;background:#F3ECDD;overflow:hidden;border:1px solid #EDE3CE}'
  + '.st-bar i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#7ED8EA,#35AFD0);transition:width .5s}'
  + '.st-kurs .akt{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}'

  /* Knöpfe — Türkis mit hartem Schatten, wie draußen */
  + '.st-b{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;cursor:pointer;'
  +   'font-family:inherit;font-size:15.5px;font-weight:800;border-radius:15px;padding:14px 24px;'
  +   'text-decoration:none;transition:transform .12s,box-shadow .12s,background .15s}'
  + '.st-b1{background:#D83636;color:#fff;box-shadow:0 5px 0 #B02B24}'
  + '.st-b1:hover{transform:translateY(-2px);box-shadow:0 7px 0 #B02B24}'
  + '.st-b1:active{transform:translateY(3px);box-shadow:0 2px 0 #B02B24}'
  + '.st-b2{background:#fff;color:var(--ink);border:1.5px solid var(--rand);box-shadow:0 4px 12px rgba(0,0,0,.05)}'
  + '.st-b2:hover{transform:translateY(-2px)}'
  + '.st-b2:active{transform:translateY(1px)}'
  + '.st-b3{background:rgba(255,255,255,.2);color:#fff;border:1.5px solid rgba(255,255,255,.5)}'
  + '.st-b3:hover{background:rgba(255,255,255,.3)}'
  + '.st-b-s{padding:9px 16px;font-size:13.5px;border-radius:10px}'

  /* Rechte Spalte — die nächste Stunde */
  + '.st-rechts{display:flex;flex-direction:column;gap:14px;min-width:0}'
  + '.st-karte{background:var(--karte);border:1px solid var(--rand);border-radius:20px;box-shadow:var(--schatten);padding:20px 22px}'
  + '.st-live{display:flex;flex-direction:column;flex:1}'
  + '.st-live .kopf{display:flex;align-items:center;justify-content:space-between;gap:10px}'
  + '.st-live .marke{display:inline-flex;align-items:center;gap:7px;font-size:11.5px;font-weight:800;'
  +   'letter-spacing:.1em;text-transform:uppercase;color:#D83636}'
  + '.st-live .marke i{width:9px;height:9px;border-radius:50%;background:#D83636;'
  +   'box-shadow:0 0 0 4px #FBE3E3;animation:stPuls 2s infinite}'
  + '@keyframes stPuls{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(.78)}}'
  + '.st-live .uhr{font-family:"Space Grotesk",sans-serif;font-weight:700;font-size:15px;color:var(--ink)}'
  + '.st-live h3{font-family:"Space Grotesk",sans-serif;font-size:18px;font-weight:700;line-height:1.25;margin:10px 0 0;color:var(--ink)}'
  + '.st-live .sub{font-size:13.5px;color:var(--weich);margin-top:5px;line-height:1.5}'
  + '.st-live .akt{display:flex;gap:9px;flex-wrap:wrap;margin-top:auto;padding-top:15px}'

  /* Zahlen — auf warmem Creme, damit die Seite atmet */
  + '.st-zahlen{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;background:var(--warm);'
  +   'border:1px solid #F2E7CE;border-radius:22px;padding:18px 20px}'
  + '@media(max-width:760px){.st-zahlen{grid-template-columns:repeat(2,1fr);gap:12px;padding:16px}}'
  + '.st-z{display:flex;flex-direction:column;gap:2px}'
  + '.st-z .l{font-size:12.5px;color:var(--weich);font-weight:700;display:flex;align-items:center;gap:6px}'
  + '.st-z .v{font-family:"Space Grotesk",sans-serif;font-size:31px;font-weight:800;color:var(--ink);margin-top:4px;line-height:1}'
  + '.st-z .d{font-size:12px;color:var(--weich);margin-top:2px}'

  /* Abschnitts-Überschrift mit Flaggenstrich */
  + '.st-titel{margin:8px 0 -8px}'
  + '.st-titel .tag{display:inline-block;color:#0F766E;font-weight:900;font-size:12.5px;'
  +   'letter-spacing:.1em;text-transform:uppercase;background:#DFF6F8;padding:6px 14px;border-radius:999px}'
  + '.st-titel h2{font-family:"Space Grotesk",sans-serif;font-size:24px;font-weight:800;color:var(--ink);margin:10px 0 0;letter-spacing:-.025em}'

  /* Weitermachen — Bildkacheln */
  + '.st-gitter{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}'
  + '@media(max-width:960px){.st-gitter{grid-template-columns:repeat(2,minmax(0,1fr))}}'
  + '@media(max-width:600px){.st-gitter{grid-template-columns:1fr}}'
  + '.st-kachel{display:flex;flex-direction:column;text-align:left;background:#fff;border:1px solid var(--rand);'
  +   'border-radius:18px;overflow:hidden;cursor:pointer;padding:0;font-family:inherit;'
  +   'box-shadow:0 1px 3px rgba(22,22,22,.04);transition:transform .16s,box-shadow .16s,border-color .16s}'
  + '.st-kachel:hover{transform:translateY(-3px);box-shadow:0 14px 34px rgba(26,26,26,.10);border-color:#DFD3BE}'
  + '.st-kachel .bd{position:relative;aspect-ratio:16/9;background:linear-gradient(140deg,#7ED8EA,#DFF6F8);overflow:hidden}'
  + '.st-kachel .bd img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}'
  + '.st-kachel:hover .bd img{transform:scale(1.045)}'
  + '.st-kachel .bd.portraet{background:linear-gradient(150deg,#DFF6F8,#FFF3CC)}'
  + '.st-kachel .bd.portraet img{inset:auto;left:50%;top:50%;transform:translate(-50%,-50%);'
  +   'width:106px;height:106px;border-radius:50%;object-fit:cover;object-position:center 22%;'
  +   'border:3px solid #fff;box-shadow:0 6px 18px rgba(22,22,22,.14)}'
  + '.st-kachel:hover .bd.portraet img{transform:translate(-50%,-50%) scale(1.05)}'
  + '.st-kachel .bd .zeichen{position:absolute;right:11px;bottom:11px;z-index:2;width:40px;height:40px;border-radius:13px;'
  +   'background:#DFF6F8;display:flex;align-items:center;justify-content:center;font-size:19px;'
  +   'border:2px solid #fff;box-shadow:0 3px 10px rgba(22,22,22,.14)}'
  + '.st-kachel .kt{padding:15px 17px 17px}'
  + '.st-kachel .kt b{display:block;font-family:"Space Grotesk",sans-serif;font-size:16px;font-weight:700;color:var(--ink);line-height:1.3}'
  + '.st-kachel .kt span{display:block;font-size:13.5px;color:var(--weich);line-height:1.55;margin-top:6px}'

  /* Community */
  + '.st-chat{display:flex;align-items:center;gap:20px;border-radius:20px;padding:26px 28px;cursor:pointer;'
  +   'background:linear-gradient(160deg,#0E7C9A,#35AFD0);color:#fff;border:0;'
  +   'box-shadow:0 10px 30px rgba(14,124,154,.25);transition:transform .14s,box-shadow .14s}'
  + '.st-chat:hover{transform:translateY(-2px);box-shadow:0 16px 38px rgba(14,124,154,.3)}'
  + '.st-chat .ic{flex:none;width:56px;height:56px;border-radius:16px;background:rgba(255,255,255,.18);'
  +   'display:flex;align-items:center;justify-content:center;font-size:27px}'
  + '.st-chat .tx{flex:1;min-width:0}'
  + '.st-chat .eb{display:flex;align-items:center;gap:9px;font-size:11.5px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:#fff;opacity:.95}'
  + '.st-chat .eb .an{display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,.2);border-radius:999px;'
  +   'padding:3px 10px;letter-spacing:0;text-transform:none;font-weight:700;font-size:11px}'
  + '.st-chat .eb .an i{width:7px;height:7px;border-radius:50%;background:#8FF0C8;animation:stPuls 2s infinite}'
  + '.st-chat h3{font-family:"Space Grotesk",sans-serif;font-size:20px;font-weight:800;margin:9px 0 5px;color:#fff;line-height:1.25;letter-spacing:-.02em}'
  + '.st-chat p{font-size:14px;margin:0;line-height:1.55;max-width:620px;color:rgba(255,255,255,.94)}'
  + '.st-chat .st-b3{background:#fff;color:#0F766E;border:0;box-shadow:0 4px 0 rgba(0,0,0,.15)}'
  + '.st-chat .st-b3:hover{background:#fff}'
  + '@media(max-width:820px){.st-chat{flex-wrap:wrap;padding:18px}'
  +   '.st-chat .ic{width:46px;height:46px;font-size:23px}'
  +   '.st-chat h3{font-size:17px}.st-chat p{font-size:13.5px}'
  +   '.st-chat .st-b3{width:100%;justify-content:center;margin-top:6px}}'

  /* App-Streifen (ruht gerade) */
  + '.st-app{display:flex;align-items:center;gap:14px;background:#FFFCF5;border:1px solid var(--rand);'
  +   'border-radius:16px;padding:14px 18px;text-decoration:none;color:var(--ink)}'
  + '.st-app .ic{flex:none;width:44px;height:44px;border-radius:13px;background:#EAFBF6;display:flex;'
  +   'align-items:center;justify-content:center;font-size:21px}'
  + '.st-app b{display:block;font-size:14.5px;font-family:"Space Grotesk",sans-serif}'
  + '.st-app span{display:block;font-size:13px;color:var(--weich);margin-top:2px}'
  + '.st-app .go{margin-left:auto;font-size:13.5px;font-weight:700;color:#1B9BC0;white-space:nowrap}'

  /* Tablet */
  + '@media(min-width:621px) and (max-width:1100px){'
  +   '.st-kachel .bd{aspect-ratio:2.3/1}'
  +   '.st-live{flex-direction:row;flex-wrap:wrap;align-items:center;gap:6px 20px}'
  +   '.st-live .kopf{width:100%}'
  +   '.st-live h3{margin-top:2px}'
  +   '.st-live .tx{flex:1;min-width:200px}'
  +   '.st-live .akt{margin-top:0;padding-top:0;margin-left:auto}'
  + '}'

  /* Handy und Tablet */
  + '@media(max-width:900px){'
  +   '#v-dashboard .st{gap:17px}'
  +   '.st-gruss h1{font-size:25px}'
  +   '.st-gruss p{font-size:14px}'
  +   '.st-kurs{min-height:0}'
  +   '.st-kurs .txt{padding:18px}'
  +   '.st-kurs h2{font-size:20px}'
  +   '.st-karte{padding:17px 18px;border-radius:18px}'
  +   '.st-z .v{font-size:25px}'
  +   '.st-z .l{font-size:11.5px}'
  +   '.st-titel h2{font-size:19px}'
  +   '.st-gitter{gap:13px}'
  + '}'
  + '@media(max-width:620px){'
  +   '.st-kurs .bild{aspect-ratio:16/9;min-height:0}'
  +   '.st-b{padding:12px 18px;font-size:14px}'
  +   '.st-kurs .akt .st-b{flex:1;justify-content:center}'
  +   '.st-kachel{flex-direction:row;align-items:stretch}'
  +   '.st-kachel .bd{aspect-ratio:auto;width:116px;flex:none}'
  +   '.st-kachel .bd .zeichen{width:30px;height:30px;font-size:15px;right:7px;bottom:7px;border-radius:10px}'
  +   '.st-kachel .bd.portraet img{width:76px;height:76px;border-width:2px}'
  +   '.st-kachel .kt{padding:13px 15px;display:flex;flex-direction:column;justify-content:center;min-width:0}'
  +   '.st-kachel .kt b{font-size:15px}'
  +   '.st-kachel .kt span{font-size:12.5px;margin-top:3px;'
  +     'display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}'
  + '}';

  var CSS_POD = ''
    + '.st-pod{display:flex;align-items:center;gap:16px;width:100%;text-align:left;cursor:pointer;'
    +   'font:inherit;background:#fff;border:1px solid var(--m-line,#EEE7D8);border-radius:20px;'
    +   'padding:12px 18px 12px 12px;margin:0 0 18px;transition:.16s;'
    +   'box-shadow:0 6px 18px rgba(40,53,59,.06)}'
    + '.st-pod:hover{transform:translateY(-2px);box-shadow:0 14px 30px -12px rgba(40,53,59,.3);'
    +   'border-color:#35AFD0}'
    + '.st-pod-bild{position:relative;width:78px;height:78px;flex:none;border-radius:16px;'
    +   'background:#DFF6F8 center/cover no-repeat;overflow:hidden}'
    + '.st-pod-play{position:absolute;inset:0;display:grid;place-items:center;font-size:22px;'
    +   'color:#fff;background:rgba(26,26,26,.34)}'
    + '.st-pod-tx{flex:1;min-width:0}'
    + '.st-pod-kicker{display:flex;align-items:center;gap:8px;font-size:11px;font-weight:800;'
    +   'letter-spacing:.14em;text-transform:uppercase;color:#12718C;margin-bottom:3px}'
    + '.st-pod-neu{background:#D83636;color:#fff;border-radius:999px;padding:2px 8px;'
    +   'letter-spacing:.06em}'
    + '.st-pod-tx > b{display:block;font-family:\'Space Grotesk\',sans-serif;font-size:19px;'
    +   'letter-spacing:-.02em;color:#1A1A1A;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
    + '.st-pod-u{display:block;font-size:13px;color:#5B6A70;margin-top:2px}'
    + '.st-pod-pfeil{flex:none;font-size:19px;color:#8A97A0}'
    + '.st-pod:hover .st-pod-pfeil{color:#1A1A1A;transform:translateX(3px)}'
    + '@media(max-width:560px){.st-pod-pfeil{display:none}.st-pod-bild{width:64px;height:64px}}';

  function stil(){
    if(document.getElementById('startStil')) return;
    var s=document.createElement('style'); s.id='startStil'; s.textContent=CSS+CSS_POD;
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
      +   vokabelBand()
      +   '<div id="lzSlot"></div>'
      +   '<div class="st-oben">' + kursKarte(k) + '<div class="st-rechts">' + liveKarte(k) + '</div></div>'
      +   podcastKarte()
      +   zahlen(k, s)
      +   '<div class="st-titel"><span class="tag">' + T('sn_tag','Dein Übungsplatz') + '</span>'
      +   '<h2>' + T('sn_weiter','Weitermachen') + '</h2></div>'
      +   kacheln(k, s)
      +   chatBand()
      /* Die Handy-App ist vorübergehend ausgeblendet — sie kommt zurück,
         wenn die Plattform fertig ist. Zum Wiedereinschalten den Streifen
         unten in appStreifen() wieder einhängen. */
      + '</div>';
  };

  /* Julias Podcast. Zeigt die angefangene Folge zum Weiterhören,
     sonst die neueste. Ist die neueste noch ungehört, sagt die Karte das
     mit einem kleinen Schild — mehr Aufhebens braucht es nicht. */
  function podcastKarte(){
    var st = null;
    try{ if(window.podcastStand) st = window.podcastStand(); }catch(e){}
    if(!st || !st.folge) return '';
    var f = st.folge;
    var weiter = st.weiterAb > 15;
    var m = Math.floor(st.weiterAb/60), r = Math.floor(st.weiterAb%60);
    var zeit = m + ':' + (r<10?'0':'') + r;

    return '<button class="st-pod" onclick="podcastOeffnen(\'' + E(f.id) + '\',true)">'
      + '<span class="st-pod-bild" style="background-image:url(\'' + E(f.cover) + '\')">'
      +   '<span class="st-pod-play">▶</span></span>'
      + '<span class="st-pod-tx">'
      +   '<span class="st-pod-kicker">' + T('sn_pod','Julias 5-Minuten-Podcast') + ''
      +     (st.neu ? '<span class="st-pod-neu">' + T('sn_pod_neu','neue Folge') + '</span>' : '') + '</span>'
      +   '<b>' + E(f.titel) + '</b>'
      +   '<span class="st-pod-u">' + E(f.level) + (f.dauer ? ' · ' + E(f.dauer) : '') + ' · '
      +     (weiter ? T('sn_pod_w','weiterhören ab') + ' ' + zeit
                    : T('sn_pod_a','jetzt anhören')) + '</span>'
      + '</span>'
      + '<span class="st-pod-pfeil">→</span></button>';
  }

  /* Die Erinnerung aus dem Vokabeltrainer.
     Wer einen Tag aussetzt, sieht es hier zuerst — noch bevor eine
     E-Mail nötig wird. Die Zahlen kommen aus window.vokabelStand(). */
  function vokabelBand(){
    var v = null;
    try{ if(window.vokabelStand) v = window.vokabelStand(); }catch(e){}
    if(!v || !v.erinnern || !v.gesamt) return '';
    return '<button type="button" class="st-vok" onclick="go(\'vokabeln\')">'
      + '<span class="st-vok-z">' + v.pauseTage + '</span>'
      + '<span class="st-vok-t">'
      +   '<b>' + T('sn_vok_t','Tage ohne Vokabeln') + '</b>'
      +   '<small>' + (v.faellig || v.neu) + ' '
      +     T('sn_vok_u','Wörter warten auf dich. Zehn Minuten reichen.') + '</small>'
      + '</span>'
      + '<span class="st-vok-go">' + T('sn_vok_b','Wiederholen') + ' →</span>'
      + '</button>';
  }

  function gruss(name){
    var h = new Date().getHours();
    var gruesse = h<11 ? ['sn_gm','Guten Morgen'] : (h<18 ? ['sn_gt','Hallo'] : ['sn_ga','Guten Abend']);
    return '<div class="st-gruss"><div>'
      + '<h1>' + T(gruesse[0], gruesse[1]) + (name ? ', ' + E(name) : '') + '! 👋</h1>'
      + '<p>' + T('sn_sub1','Schön, dass du da bist.') + ' '
      +   '<span class="mk-mark">' + T('sn_sub2','Zehn Minuten heute') + '</span> '
      +   T('sn_sub3','sind mehr wert als zwei Stunden nächste Woche.') + '</p>'
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
    /* foto = Bild füllt die Fläche · portraet = rundes Bild auf ruhigem Grund
       Amanda steht hier nicht mehr: sie hat in der Leiste ihr eigenes
       Feld mit Bild und einen eigenen Bereich. Dreimal derselbe Weg
       auf einem Bildschirm ist zweimal zu viel. */
    var K = [
      ['foto','bilder/thema/relativsaetze-s.jpg','🃏', T('sn_wvokt','Vokabeln üben'), vok, "go('vokabeln')"],
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

  /* Das Aussehen sofort einhängen, nicht erst beim Zeichnen der Startseite.
     Die Karte „Meine Stunden" im Live-Unterricht benutzt dieselben Klassen —
     wer direkt auf #kalender kommt, soll sie fertig gestaltet sehen. */
  if(document.head) stil();
  else document.addEventListener('DOMContentLoaded', stil);

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
