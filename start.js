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
  /* Fällt eine Datei aus, springt ein verwandtes Motiv ein statt einer
     leeren Fläche — vorher stand dort onerror="this.remove()", und die
     Karte hatte links ein beiges Loch. */
  function ersatzBild(){
    try{ if(window.wegBildErsatz) return window.wegBildErsatz(); }catch(e){}
    return 'bilder/thema/menschen.jpg';
  }

  /* ---------- Aussehen ---------- */
  /* Alles hier baut auf marke.css auf — dieselben Farben und Bausteine
     wie auf deutschoderwas-club.de. */
  var CSS = ''
  /* Der Hintergrund: warmes Creme wie draußen, ohne wandernde Farbflecken */
  + 'body:has(#v-dashboard.active) .club-bg{background:linear-gradient(168deg,#FFFDF9 0%,#FFFFFF 55%,#F6F9FA 100%)}'
  + 'body:has(#v-dashboard.active) .club-bg .blob{opacity:.10;filter:blur(96px);animation:none}'
  + 'body:has(#v-dashboard.active) .club-bg .b3{display:none}'

  + '#v-dashboard .st{display:flex;flex-direction:column;gap:22px}'
  + '#v-dashboard .st *{box-sizing:border-box}'
  + '.st{--tint:#0F766E;--tint2:#7ED8EA;--ink:#1A1A1A;--weich:#5B6A70;'
  +     '--rand:#F6F9FA;--karte:#fff;--gold:#FFCE00;--warm:#F6F9FA;--mint:#DFF6F8;'
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
  +   'border-radius:999px;padding:6px 14px;border:1px solid #F6F9FA;box-shadow:0 2px 6px rgba(0,0,0,.10)}'
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
  + '.st-bar{height:10px;border-radius:999px;background:#F6F9FA;overflow:hidden;border:1px solid #E7ECEE}'
  + '.st-bar i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#7ED8EA,#1B9BC0);transition:width .5s}'
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
  +   'border:1px solid #E7ECEE;border-radius:22px;padding:18px 20px}'
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
  + '.st-kachel:hover{transform:translateY(-3px);box-shadow:0 14px 34px rgba(26,26,26,.10);border-color:#E7ECEE}'
  + '.st-kachel .bd{position:relative;aspect-ratio:16/9;background:linear-gradient(140deg,#7ED8EA,#DFF6F8);overflow:hidden}'
  + '.st-kachel .bd img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}'
  + '.st-kachel:hover .bd img{transform:scale(1.045)}'
  + '.st-kachel .bd.portraet{background:linear-gradient(150deg,#DFF6F8,#F6F9FA)}'
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
  +   'background:linear-gradient(160deg,#0E7C9A,#1B9BC0);color:#fff;border:0;'
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
    +   'font:inherit;background:#fff;border:1px solid var(--m-line,#F6F9FA);border-radius:20px;'
    +   'padding:12px 18px 12px 12px;margin:0 0 18px;transition:.16s;'
    +   'box-shadow:0 6px 18px rgba(40,53,59,.06)}'
    + '.st-pod:hover{transform:translateY(-2px);box-shadow:0 14px 30px -12px rgba(40,53,59,.3);'
    +   'border-color:#1B9BC0}'
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
    var s=document.createElement('style'); s.id='startStil'; s.textContent=CSS+CSS_POD+CSS_FEED;
    document.head.appendChild(s);
  }

  /* ---------- Werkzeug ---------- */
  function E(x){ return String(x==null?'':x).replace(/[&<>"']/g,function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  /* Text mit Übersetzungsschlüssel: bleibt deutsch, wird bei Sprachwechsel getauscht */
  function T(schluessel, deutsch){ return '<span data-i18n="'+schluessel+'">'+deutsch+'</span>'; }

  /* ---------- Die Seite ---------- */
  var STARTSEITE = {};

  /* ============================================================
     Die Startseite als Strom — nach dem Entwurf, den Julia
     ausgesucht hat: in der Mitte, was es Neues gibt und wo sie
     stehengeblieben ist; rechts, was heute ansteht.

     Zuerst wird gezeichnet, was schon im Speicher liegt. Was aus
     der Datenbank kommt (Beitraege, buchbare Stunden), traegt sich
     danach nach — die Seite steht also sofort und zappelt nicht.
     ============================================================ */
  STARTSEITE.zeichne = function(ziel, k){
    if(!ziel) return;
    stil();
    k = k || {};
    var s = k.stats || {upcoming:[],past:[],streak:0,known:0,vocabTotal:0};
    var name = (k.name||'').split(' ')[0];

    ziel.innerHTML = ''
      + '<div class="sf">'
      +   gruss(name, s)
      +   (k.abo ? '<div class="st-abo">' + k.abo + '</div>' : '')
      +   '<div id="lzSlot"></div>'
      +   '<div class="sf-buehne">'
      +     '<div class="sf-mitte">'
      +       '<div class="sf-reiter">'
      +         '<button class="jetzt">' + T('sf_fuerdich','Für dich') + '</button>'
      +         '<button onclick="go(\'community\')">' + T('sf_neueste','Alle Beiträge') + '</button>'
      +         '<button onclick="go(\'nachrichten\')">' + T('k_msg','Nachrichten') + '</button>'
      +       '</div>'
      +       '<div id="sfAnschlag"></div>'
      +       weiterKarte()
      +       '<div id="sfFeed"><div class="sf-k"><div class="sf-leer">' + T('sf_ladet','Wird geladen …') + '</div></div></div>'
      +       '<div class="st-titel"><span class="tag">' + T('sn_tag','Dein Übungsplatz') + '</span>'
      +         '<h2>' + T('sn_weiter','Weitermachen') + '</h2></div>'
      +       kacheln(k, s)
      +     '</div>'
      +     '<aside class="sf-rand">'
      +       termineHTML(k)
      +       '<div class="sf-k"><div class="sf-kopf"><h2>' + T('sf_imclub','Gerade im Club') + '</h2>'
      +         '<span class="sf-live"><i></i><span id="dcOnline">live</span></span></div>'
      +         '<div class="sf-tick" id="sfTick"><div>' + T('sf_ladet','Wird geladen …') + '</div></div></div>'
      +       heuteHTML(k, s)
      +       vierZahlen(k, s)
      +       podcastRand()
      +       begleiter()
      +     '</aside>'
      +   '</div>'
      + '</div>';

    /* Und der Menuepunkt „Guthaben“ verschwindet unter derselben
       Bedingung: wer ab dem 1. November unbegrenzt bucht und keine
       Reststunden mehr hat, braucht ihn nicht. */
    try{
      var gknopf = document.querySelector('.sidebar .navlink[data-view="guthaben"]');
      /* Mit Vorrang: die Stilblaetter setzen auf .sidebar .navlink ein
         display:flex !important, gegen das eine schlichte Zuweisung
         nicht ankaeme. */
      if(gknopf){
        if(guthabenZeigen(k)) gknopf.style.removeProperty('display');
        else gknopf.style.setProperty('display','none','important');
      }
    }catch(e){}

    /* Was aus dem Netz kommt, traegt sich nach. */
    try{ stromLaden(); }catch(e){ console.error('Strom:', e); }
    try{ termineLaden(k); }catch(e){ console.error('Termine:', e); }
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

  /* Die Punkte stehen in xp_events und werden vom Server gezaehlt
     (Nachricht +3, Sprachnachricht +5, Korrektur +10, Live-Stunde +15).
     Sie kommen nach, sobald die Abfrage zurueck ist — die Seite wartet
     nicht darauf. */
  function punkteNachtragen(){
    var c = window.sb, u = window.user;
    if(!c || !u) return;
    c.from('xp_events').select('points').eq('user_id', u.id).then(function(r){
      var n = 0;
      (r && r.data || []).forEach(function(x){ n += (x.points|0); });
      if(!n) return;
      var k = document.getElementById('stPunkte');
      if(k){ k.textContent = '⭐ ' + n; k.style.display = ''; }
    }, function(){});
  }

  function gruss(name, s){
    var h = new Date().getHours();
    var gruesse = h<11 ? ['sn_gm','Guten Morgen'] : (h<18 ? ['sn_gt','Hallo'] : ['sn_ga','Guten Abend']);
    var streak = (s && s.streak) | 0;
    var rechts = '<span class="st-punkte" id="stPunkte" style="display:none"></span>';
    setTimeout(punkteNachtragen, 0);
    return '<div class="st-gruss">'
      + '<div><h1>' + T(gruesse[0], gruesse[1]) + (name ? ', ' + E(name) : '') + '! 👋</h1>'
      + '<p>' + T('sn_sub1','Schön, dass du da bist.') + ' '
      +   '<span class="mk-mark">' + T('sn_sub2','Zehn Minuten heute') + '</span> '
      +   T('sn_sub3','sind mehr wert als zwei Stunden nächste Woche.') + '</p></div>'
      + rechts
      + '</div>'
      + (streak > 1 ? streifen(streak) : '');
  }

  /* Die Strähne: wie viele Tage am Stück. Steht nur da, wenn es
     wirklich mehr als einen Tag sind — sonst ist es kein Erfolg,
     sondern eine Mahnung. */
  function streifen(tage){
    return '<div class="st-streak">'
      + '<span class="st-streak-em">🔥</span>'
      + '<span class="st-streak-t"><b>' + tage + ' ' + T('sn_streak','Tage am Stück') + '</b>'
      + '<small>' + T('sn_streak2','Dranbleiben ist das ganze Geheimnis.') + '</small></span>'
      + '</div>';
  }

  /* Weiter im Kurs — die wichtigste Karte der Seite */
  function kursKarte(k){
    var st = null;
    /* Zuerst der echte Lehrplan (mein-weg.js). window.kursStand kam aus
       weg.js, das gar nicht eingebunden ist — die Karte zeigte deshalb
       jedem immer "Fang mit Lektion 1 an". */
    try{
      if(window.wegStand){
        var w = window.wegStand();
        if(w && w.stufe && w.lektion){
          st = { niveau:w.niveau, nr:w.nr, anzahl:w.anzahl, prozent:w.prozent,
                 lektion:w.titel, ziel:w.ziel, bild:w.bild, angefangen:w.angefangen,
                 id:'weg' };
        }
      }
    }catch(e){}
    if(!st){ try{ if(window.kursStand) st = window.kursStand(); }catch(e){} }

    if(!st){
      return '<div class="st-kurs"><div class="bild">'
        + '<img src="bilder/thema/menschen.jpg" alt="" loading="lazy"'
        +      ' onerror="this.onerror=null;this.src=\'' + ersatzBild() + '\'">'
        + '<span class="stufe">A1</span></div>'
        + '<div class="txt"><div class="eyebrow">' + T('sn_kdein','Dein Kurs') + '</div>'
        + '<h2>' + T('sn_klos','Fang mit Lektion 1 an') + '</h2>'
        + '<div class="ziel">' + T('sn_klosb','Vierzehn Lektionen pro Stufe: Wendungen, Grammatik, Übungen, ein Gespräch und ein Schreibauftrag.') + '</div>'
        + '<div class="fort"><div class="akt">'
        + '<button class="st-b st-b1" onclick="go(\'weg\')">' + T('sn_kstart','Kurs öffnen') + '</button>'
        + '</div></div></div></div>';
    }

    var prozTxt = st.prozent + ' %';
    var weiter = st.angefangen ? ['sn_kweiter','Weitermachen'] : ['sn_kstart2','Los geht’s'];
    return '<div class="st-kurs">'
      + '<div class="bild">'
      +   '<img src="' + (st.bild || kursBild(st.niveau, st.id)) + '" alt="" loading="lazy"'
      +        ' onerror="this.onerror=null;this.src=\'' + ersatzBild() + '\'">'
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
      +       '<button class="st-b st-b1" onclick="kursOeffnen(' + st.nr + ',\'' + (st.weg || st.niveau) + '\')">' + T(weiter[0], weiter[1]) + '</button>'
      +       '<button class="st-b st-b2" onclick="kursUebersicht(\'' + (st.weg || st.niveau) + '\')">' + T('sn_kalle','Alle Lektionen') + '</button>'
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
      +   '<p>' + T('sn_ctext','Nach Stufe von A1 bis C2, nach Ziel wie Beruf, Pflege oder Prüfung — und einfach zum Plaudern. Dein Lehrer liest täglich mit.') + '</p>'
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


  /* ---------- Aussehen der neuen Startseite ---------- */
  var CSS_FEED = ''
  + '#v-dashboard .sf{display:flex;flex-direction:column;gap:18px}'
  + '#v-dashboard .sf *{box-sizing:border-box}'
  + '.sf{--tint:#10627A;--tint2:#1B9BC0;--ink:#14181B;--leise:#5A6B72;'
  +     '--linie:#E7ECEE;--linie2:#F1F5F6;--karte:#fff;--gruen:#0F7B5A;--rot:#D42A21;--gold:#C9A200}'

  /* Zwei Spalten: der Strom in der Mitte, der Rand rechts */
  + '.sf-buehne{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:18px;align-items:start}'
  + '.sf-mitte{display:flex;flex-direction:column;gap:14px;min-width:0}'
  /* Nicht klebend: der Rand ist mit sechs Karten hoeher als der
     Bildschirm. Klebte er oben fest, kaeme man an die unteren zwei
     (Podcast und Begleiter) beim Scrollen gar nicht heran. */
  + '.sf-rand{display:flex;flex-direction:column;gap:14px}'
  + '@media(max-width:1100px){.sf-buehne{grid-template-columns:1fr}}'

  /* Die Karte, aus der alles gebaut ist */
  + '.sf-k{background:var(--karte);border:1px solid var(--linie);border-radius:16px;overflow:hidden}'
  + '.sf-kopf{display:flex;align-items:center;justify-content:space-between;gap:10px;'
  +   'padding:12px 15px;border-bottom:1px solid var(--linie2)}'
  + '.sf-kopf h2{margin:0;font-family:"Space Grotesk",system-ui,sans-serif;font-size:14.5px;font-weight:700;color:var(--ink);letter-spacing:-.01em}'
  + '.sf-kopf a{font-size:12.5px;font-weight:700;color:var(--tint);text-decoration:none;white-space:nowrap}'
  + '.sf-kopf a:hover{text-decoration:underline}'
  + '.sf-leib{padding:14px 15px}'

  /* Reiter über dem Strom */
  + '.sf-reiter{display:flex;gap:2px;border-bottom:1px solid var(--linie);margin-bottom:2px;overflow-x:auto;scrollbar-width:none}'
  + '.sf-reiter::-webkit-scrollbar{display:none}'
  + '.sf-reiter button{border:none;background:none;font-family:inherit;font-size:14px;font-weight:600;'
  +   'color:var(--leise);padding:9px 13px;cursor:pointer;border-bottom:2px solid transparent;white-space:nowrap}'
  + '.sf-reiter button.jetzt{color:var(--tint);border-bottom-color:var(--tint)}'
  + '.sf-reiter button:hover{color:var(--ink)}'

  /* Ein Beitrag */
  + '.sf-post{padding:14px 15px;border-bottom:1px solid var(--linie2)}'
  + '.sf-post:last-child{border-bottom:none}'
  + '.sf-pkopf{display:flex;align-items:flex-start;gap:9px;margin-bottom:8px}'
  + '.sf-av{width:34px;height:34px;border-radius:50%;flex:0 0 34px;display:flex;align-items:center;'
  +   'justify-content:center;color:#fff;font-size:12px;font-weight:700;letter-spacing:.02em}'
  + '.sf-wer{font-size:13.5px;font-weight:700;color:var(--ink);display:flex;align-items:center;gap:6px;flex-wrap:wrap}'
  + '.sf-wann{font-size:11.5px;color:var(--leise);margin-top:1px}'
  + '.sf-raum{margin-left:auto;font-size:11.5px;font-weight:600;color:var(--leise);'
  +   'background:#F6F9FA;border:1px solid var(--linie);border-radius:999px;padding:3px 9px;white-space:nowrap}'
  + '.sf-post h3{margin:0 0 5px;font-family:"Space Grotesk",system-ui,sans-serif;font-size:15.5px;'
  +   'font-weight:700;color:var(--ink);line-height:1.3;letter-spacing:-.01em}'
  + '.sf-post p{margin:0;font-size:14px;line-height:1.55;color:#3D4A50;white-space:pre-wrap;overflow-wrap:anywhere}'
  + '.sf-mehr{border:none;background:none;font-family:inherit;font-size:12.5px;font-weight:700;'
  +   'color:var(--tint);cursor:pointer;padding:6px 0 0}'
  + '.sf-pfuss{display:flex;align-items:center;gap:14px;margin-top:10px;font-size:12.5px;color:var(--leise);flex-wrap:wrap}'
  + '.sf-tag-team{font-size:9.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;'
  +   'background:#E6F8FC;color:var(--tint);border-radius:4px;padding:2px 5px}'
  + '.sf-tag-ki{font-size:9.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;'
  +   'background:#F1ECFD;color:#6D28D9;border-radius:4px;padding:2px 5px}'

  /* Der angeheftete Beitrag */
  + '.sf-k.sf-fest{border-color:#BDE7F2}'
  + '.sf-band{background:#E6F8FC;color:var(--tint);font-size:11.5px;font-weight:800;'
  +   'letter-spacing:.03em;padding:7px 15px;border-bottom:1px solid #BDE7F2}'
  + '.sf-zustell{margin-top:9px;padding-top:9px;border-top:1px solid var(--linie2);'
  +   'font-size:11.5px;color:var(--leise)}'

  /* Da warst du zuletzt */
  + '.sf-weiter{display:flex;gap:13px;align-items:center;flex-wrap:wrap}'
  + '.sf-wbild{width:64px;height:64px;border-radius:12px;object-fit:cover;flex:0 0 64px;background:#F6F9FA}'
  + '.sf-wtx{flex:1;min-width:180px}'
  + '.sf-wtx b{font-size:15px;color:var(--ink);display:block}'
  + '.sf-wtx small{display:block;font-size:12.5px;color:var(--leise);margin-top:2px}'
  + '.sf-bal{height:6px;border-radius:999px;background:#F1F5F6;overflow:hidden;margin-top:7px}'
  + '.sf-bal i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,var(--tint2),var(--tint))}'

  /* Zeilen im rechten Rand */
  + '.sf-zeile{display:flex;align-items:center;gap:10px;padding:10px 15px;border-bottom:1px solid var(--linie2)}'
  + '.sf-zeile:last-child{border-bottom:none}'
  + '.sf-zeile .tx{flex:1;min-width:0}'
  + '.sf-zeile .tx b{display:block;font-size:13.5px;font-weight:700;color:var(--ink);line-height:1.3}'
  + '.sf-zeile .tx span{display:block;font-size:12px;color:var(--leise);margin-top:1px}'
  + '.sf-nr{width:30px;height:30px;border-radius:9px;background:#F6F9FA;border:1px solid var(--linie);'
  +   'display:flex;align-items:center;justify-content:center;font-size:14px;flex:0 0 30px}'
  + '.sf-datum{width:38px;flex:0 0 38px;text-align:center;background:#F6F9FA;border:1px solid var(--linie);'
  +   'border-radius:9px;padding:3px 0}'
  + '.sf-datum .t{display:block;font-size:9.5px;font-weight:800;letter-spacing:.06em;color:var(--rot);text-transform:uppercase}'
  + '.sf-datum .z{display:block;font-size:16px;font-weight:700;color:var(--ink);line-height:1.1;font-variant-numeric:tabular-nums}'
  + '.sf-tun{border:1px solid var(--linie);background:#fff;border-radius:999px;font-family:inherit;'
  +   'font-size:12px;font-weight:700;color:var(--ink);padding:5px 11px;cursor:pointer;white-space:nowrap}'
  + '.sf-tun:hover{border-color:var(--tint);color:var(--tint)}'
  + '.sf-tun.voll{background:var(--tint);border-color:var(--tint);color:#fff}'
  + '.sf-tun.voll:hover{background:#0C4F63;color:#fff}'
  + '.sf-dabei{display:inline-block;font-size:11px;font-weight:700;color:var(--gruen);'
  +   'background:#E8F6F1;border-radius:999px;padding:2px 8px;margin-top:2px}'

  /* Gerade im Club */
  + '.sf-tick{padding:4px 15px 12px;display:flex;flex-direction:column;gap:7px}'
  + '.sf-tick div{font-size:12.5px;color:var(--leise);line-height:1.4}'
  + '.sf-tick b{color:var(--ink);font-weight:600}'
  + '.sf-live{font-size:11.5px;color:var(--gruen);font-weight:700;display:flex;align-items:center;gap:5px}'
  + '.sf-live i{width:7px;height:7px;border-radius:50%;background:var(--gruen);display:inline-block}'

  /* Vier Zahlen, jetzt im Rand */
  + '.sf-vier{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--linie2)}'
  + '.sf-vier div{background:#fff;padding:11px 13px}'
  + '.sf-vier .l{font-size:11.5px;color:var(--leise);font-weight:600}'
  + '.sf-vier .v{font-size:21px;font-weight:700;color:var(--ink);line-height:1.15;font-variant-numeric:tabular-nums;'
  +   'overflow-wrap:break-word;'
  +   'font-family:"Space Grotesk",system-ui,sans-serif}'
  + '.sf-vier .d{font-size:11px;color:var(--leise)}'
  /* „unbegrenzt“ ist ein Wort, keine Zahl — in 21px brach es mitten durch. */
  + '.sf-vier .v.wort{font-size:16px;line-height:1.3;letter-spacing:-.005em}'

  + '.sf-leer{padding:14px 15px;font-size:13px;color:var(--leise);line-height:1.5}'
  + '@media(max-width:640px){.sf-rand{gap:12px}.sf-post{padding:12px 13px}.sf-kopf,.sf-leib{padding-left:13px;padding-right:13px}}'

  /* Das Begruessungsband schob den Strom 380 Pixel nach unten — beim
     Aufmachen sah man fast nur Amanda. Sie bleibt, nur kleiner: der
     erste Beitrag steht jetzt im Blick, ohne zu scrollen. */
  + '#v-dashboard .am-band{padding:10px 18px 0;margin-bottom:14px;border-radius:18px}'
  + '#v-dashboard .am-band .am-fig{height:104px}'
  + '#v-dashboard .am-band .am-tx{padding-bottom:12px}'
  + '#v-dashboard .st-gruss h1{font-size:clamp(21px,2.4vw,27px);line-height:1.15}'
  + '#v-dashboard .st-gruss p{font-size:14px;margin-top:3px}'
  + '#v-dashboard .st-abo{margin-bottom:2px}'
  /* Am Handy stand Amanda in einer eigenen Zeile unter dem Gruss und
     kostete allein 180 Pixel. Jetzt steht sie klein daneben, wie am
     Rechner — der erste Beitrag ist damit ohne Scrollen zu sehen. */
  + '@media(max-width:640px){'
  +   '#v-dashboard .am-band{grid-template-columns:auto 1fr;padding:10px 14px 0;gap:12px;align-items:end}'
  +   '#v-dashboard .am-band .am-fig{height:72px;order:0;justify-self:start}'
  +   '#v-dashboard .am-band .am-tx{padding-bottom:10px}'
  +   '#v-dashboard .st-gruss h1{font-size:20px}'
  +   '#v-dashboard .st-gruss p{font-size:13px;margin-top:2px}}'
  ;

  /* ---------- kleine Helfer ---------- */

  /* Julias Beiträge sind so geschrieben: erste Zeile die Überschrift,
     danach eine Leerzeile und der Text. Chatzeilen haben das nicht —
     die bekommen dann eben keine Überschrift statt einer erfundenen. */
  function teile(text){
    var t = String(text||'').replace(/\r/g,'').trim();
    if(!t) return { titel:'', text:'' };
    var bruch = t.indexOf('\n');
    if(bruch < 0) return { titel:'', text:t };
    var kopf = t.slice(0, bruch).trim(), rest = t.slice(bruch+1).trim();
    /* Nur wenn die erste Zeile kurz genug ist, um eine Überschrift zu sein. */
    if(kopf.length <= 90 && rest) return { titel:kopf, text:rest };
    return { titel:'', text:t };
  }

  function kuerzen(t, max){
    t = String(t||'');
    if(t.length <= max) return { text:t, lang:false };
    var schnitt = t.slice(0, max);
    var luecke = schnitt.lastIndexOf(' ');
    if(luecke > max*0.6) schnitt = schnitt.slice(0, luecke);
    return { text:schnitt + ' …', lang:true };
  }

  var AV_FARBEN = ['#10627A','#B45309','#3949AB','#9333EA','#0F7B5A','#C2410C','#6D28D9','#1B9BC0'];
  function avFarbe(name){
    var n = String(name||'?'), summe = 0;
    for(var i=0;i<n.length;i++) summe += n.charCodeAt(i);
    return AV_FARBEN[summe % AV_FARBEN.length];
  }
  function initialen(name){
    var teile2 = String(name||'?').trim().split(/\s+/).filter(Boolean);
    if(!teile2.length) return '?';
    if(teile2.length === 1) return teile2[0].slice(0,2).toUpperCase();
    return (teile2[0][0] + teile2[1][0]).toUpperCase();
  }
  function avatar(name, gross){
    var g = gross ? 34 : 26;
    return '<div class="sf-av" style="background:' + avFarbe(name) + (gross?'':';width:26px;height:26px;flex:0 0 26px;font-size:10px') + '">'
      + E(initialen(name)) + '</div>';
  }

  /* „vor 2 Stunden", „gestern" — ohne Bibliothek, mit echten Abständen. */
  function wann(iso){
    var d = new Date(iso);
    if(isNaN(d)) return '';
    var min = Math.round((Date.now() - d.getTime())/60000);
    if(min < 2)    return T('sf_jetzt','gerade eben');
    if(min < 60)   return T('sf_vormin','vor') + ' ' + min + ' ' + T('sf_min','Minuten');
    var std = Math.round(min/60);
    if(std < 24)   return T('sf_vormin','vor') + ' ' + std + ' ' + (std===1?T('sf_std1','Stunde'):T('sf_std','Stunden'));
    var tage = Math.round(std/24);
    if(tage === 1) return T('sf_gestern','gestern');
    if(tage < 8)   return T('sf_vormin','vor') + ' ' + tage + ' ' + T('sf_tage','Tagen');
    return d.toLocaleDateString('de-DE',{day:'2-digit',month:'2-digit',year:'2-digit'});
  }

  /* ---------- Der angeheftete Beitrag und der Strom ---------- */

  function postHTML(m, fest){
    var teil  = teile(m.body);
    var lang  = kuerzen(teil.text, fest ? 460 : 300);
    var team  = m._team;
    var ki    = m._ki;
    var kanal = m._kanal || {};
    return '<div class="sf-post"' + (fest?' style="padding-top:13px"':'') + '>'
      + '<div class="sf-pkopf">'
      +   avatar(m.author_name, true)
      +   '<div><div class="sf-wer">' + E(m.author_name || T('sf_jemand','Jemand aus dem Club'))
      +     (team ? ' <span class="sf-tag-team">Team</span>' : '')
      +     (ki   ? ' <span class="sf-tag-ki">KI</span>' : '')
      +   '</div><div class="sf-wann">' + wann(m.created_at) + '</div></div>'
      +   (kanal.name ? '<span class="sf-raum">' + E((kanal.emoji||'') + ' ' + kanal.name) + '</span>' : '')
      + '</div>'
      + (teil.titel ? '<h3>' + E(teil.titel) + '</h3>' : '')
      + '<p>' + E(lang.text) + '</p>'
      + (lang.lang ? '<button class="sf-mehr" onclick="go(\'community\')">' + T('sf_ganz','Ganzen Beitrag lesen →') + '</button>' : '')
      + '<div class="sf-pfuss">'
      +   (m._herzen ? '<span>💛 ' + m._herzen + '</span>' : '')
      +   (m._antworten ? '<span>💬 ' + m._antworten + ' ' + (m._antworten===1?T('sf_antw1','Antwort'):T('sf_antw','Antworten')) + '</span>' : '')
      + '</div>'
      + '</div>';
  }

  /* Holt Beiträge, Reaktionen und Antworten in drei Abfragen statt in
     einer pro Beitrag. Läuft nach dem ersten Zeichnen — die Seite steht
     also schon, bevor das Netz antwortet. */
  function stromLaden(){
    var c = window.sb;
    var festEl = document.getElementById('sfAnschlag');
    var feedEl = document.getElementById('sfFeed');
    if(!c || (!festEl && !feedEl)) return;

    var KANAELE = {};
    c.from('community_channels').select('slug,name,emoji,team_only').eq('is_active', true)
      .then(function(r){
        (r && r.data || []).forEach(function(k){ KANAELE[k.slug] = k; });
        return c.from('community_messages')
                .select('id,channel,user_id,body,author_name,created_at,pinned_at,antwort_auf')
                .is('deleted_at', null).eq('kind','text')
                .order('created_at', {ascending:false}).limit(60);
      })
      .then(function(r){
        var alle = (r && r.data || []).filter(function(m){
          return m.body && String(m.body).trim() && KANAELE[m.channel];
        });
        alle.forEach(function(m){
          m._kanal = KANAELE[m.channel] || {};
          m._team  = /^julia/i.test(m.author_name||'');
          m._ki    = /^(amanda|mila|tom)\b/i.test(m.author_name||'');
        });
        /* Antworten zählen, aber selbst nicht im Strom stehen. */
        var zaehler = {};
        alle.forEach(function(m){ if(m.antwort_auf) zaehler[m.antwort_auf] = (zaehler[m.antwort_auf]||0)+1; });
        var oben = alle.filter(function(m){ return !m.antwort_auf; });
        oben.forEach(function(m){ m._antworten = zaehler[m.id] || 0; });

        var ids = oben.slice(0,16).map(function(m){ return m.id; });
        var fertig = function(herzen){
          oben.forEach(function(m){ m._herzen = herzen[m.id] || 0; });
          var fest = oben.filter(function(m){ return m.pinned_at; })
                         .sort(function(a,b){ return new Date(b.pinned_at) - new Date(a.pinned_at); })[0];
          /* Der angeheftete Beitrag steht oben und nicht noch einmal im Strom. */
          var strom = oben.filter(function(m){ return !fest || m.id !== fest.id; }).slice(0, 6);

          if(festEl){
            festEl.innerHTML = fest
              ? ('<div class="sf-k sf-fest"><div class="sf-band">📣 ' + T('sf_fest','Angeheftet · wichtig') + '</div>'
                 + postHTML(fest, true) + '</div>')
              : '';
          }
          if(feedEl){
            feedEl.innerHTML = strom.length
              ? ('<div class="sf-k">' + strom.map(function(m){ return postHTML(m, false); }).join('') + '</div>')
              : ('<div class="sf-k"><div class="sf-leer">' + T('sf_keine','Hier ist noch nichts geschrieben worden. Sobald dein Lehrer oder jemand aus dem Club etwas postet, steht es hier.') + '</div></div>');
          }
          tickerFuellen(oben);
        };

        if(!ids.length){ fertig({}); return; }
        c.from('community_reactions').select('message_id').in('message_id', ids)
          .then(function(rr){
            var h = {};
            (rr && rr.data || []).forEach(function(x){ h[x.message_id] = (h[x.message_id]||0)+1; });
            fertig(h);
          })
          .catch(function(){ fertig({}); });
      })
      .catch(function(e){
        if(feedEl) feedEl.innerHTML = '<div class="sf-k"><div class="sf-leer">'
          + T('sf_feedweg','Die Beiträge konnten gerade nicht geladen werden. Lade die Seite bitte neu.') + '</div></div>';
      });
  }

  /* „Gerade im Club" — nur was wirklich passiert ist. Keine erfundenen
     Namen, keine erfundenen Zahlen: die letzten echten Beiträge und
     wie viele gerade wirklich online sind. */
  function tickerFuellen(beitraege){
    var el = document.getElementById('sfTick');
    if(!el) return;
    var letzte = (beitraege||[]).slice(0, 3);
    if(!letzte.length){
      el.innerHTML = '<div>' + T('sf_ruhig','Gerade ist es ruhig im Club.') + '</div>';
      return;
    }
    el.innerHTML = letzte.map(function(m){
      var teil = teile(m.body);
      var kurz = kuerzen(teil.titel || teil.text, 54).text;
      return '<div><b>' + E(m.author_name || T('sf_jemand','Jemand aus dem Club')) + '</b> — ' + E(kurz)
           + ' <span style="opacity:.7">· ' + wann(m.created_at) + '</span></div>';
    }).join('');
  }

  function onlineZahl(){
    var n = 0;
    try{ n = Object.keys(window.CLUB_ONLINE||{}).length; }catch(e){}
    return n;
  }

  /* ---------- Nächste Termine ---------- */

  function terminZeile(start, titel, gebucht, klick){
    var d = new Date(start);
    var tag = d.toLocaleDateString('de-DE',{weekday:'short'}).replace('.','');
    var zeit = (typeof window.fmtTimeK==='function') ? window.fmtTimeK(d)
             : d.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'});
    return '<div class="sf-zeile">'
      + '<div class="sf-datum"><span class="t">' + E(tag) + '</span><span class="z">'
      +   String(d.getDate()).padStart(2,'0') + '</span></div>'
      + '<div class="tx"><b>' + E(zeit) + ' · ' + E(titel) + '</b>'
      +   (gebucht ? '<span class="sf-dabei">' + T('sf_dabei','du bist dabei') + '</span>'
                   : '<span>' + T('sf_60','60 Minuten') + '</span>') + '</div>'
      + (gebucht ? '' : '<button class="sf-tun" onclick="' + klick + '">' + T('sf_buchen','Buchen') + '</button>')
      + '</div>';
  }

  function termineHTML(k){
    var s = k.stats || {upcoming:[]};
    var eigene = (s.upcoming||[]).slice(0,3);
    var inhalt = eigene.map(function(n){
      return terminZeile(n.starts_at, n.title || T('sf_stunde','Sprechclub'), true, '');
    }).join('');
    return '<div class="sf-k" id="sfTermine">'
      + '<div class="sf-kopf"><h2>' + T('sf_termine','Nächste Termine') + '</h2>'
      +   '<a href="#kalender" onclick="go(\'kalender\');return false">' + T('sf_alle','Alle →') + '</a></div>'
      + '<div id="sfTerminListe">' + (inhalt || '<div class="sf-leer">' + T('sf_ladet','Wird geladen …') + '</div>') + '</div>'
      + '</div>';
  }

  /* Die buchbaren Stunden kommen aus derselben Quelle wie der Wochenplan,
     damit Feiertage und abgesagte Stunden auch hier nicht auftauchen. */
  function termineLaden(k){
    var c = window.sb, ziel = document.getElementById('sfTerminListe');
    if(!c || !ziel) return;
    var s = k.stats || {upcoming:[]};
    var eigene = (s.upcoming||[]).slice(0,3);
    var von = new Date(), bis = new Date(Date.now() + 14*86400000);
    c.rpc('week_classes', { p_from: von.toISOString(), p_to: bis.toISOString() })
      .then(function(r){
        var alle = (r && r.data || []).filter(function(x){
          return new Date(x.starts_at) > von && (x.capacity == null || x.capacity > 0);
        }).sort(function(a,b){ return new Date(a.starts_at) - new Date(b.starts_at); });

        var meine = {};
        eigene.forEach(function(n){ meine[n.class_id || n.id] = true; });

        var zeilen = [], gezeigt = {};
        eigene.forEach(function(n){
          zeilen.push({ zeit:new Date(n.starts_at), html:terminZeile(n.starts_at, n.title || T('sf_stunde','Sprechclub'), true, '') });
          gezeigt[n.class_id || n.id] = true;
        });
        alle.forEach(function(x){
          if(zeilen.length >= 4) return;
          if(gezeigt[x.id] || meine[x.id]) return;
          gezeigt[x.id] = true;
          zeilen.push({ zeit:new Date(x.starts_at),
            html:terminZeile(x.starts_at, x.title || x.topic || T('sf_stunde','Sprechclub'), false, 'go(\'kalender\')') });
        });
        zeilen.sort(function(a,b){ return a.zeit - b.zeit; });
        ziel.innerHTML = zeilen.length
          ? zeilen.map(function(z2){ return z2.html; }).join('')
          : '<div class="sf-leer">' + T('sf_keintermin','Gerade stehen keine Termine an.') + '</div>';
      })
      .catch(function(){
        if(!ziel.innerHTML || /…/.test(ziel.textContent||''))
          ziel.innerHTML = '<div class="sf-leer">' + T('sf_keintermin','Gerade stehen keine Termine an.') + '</div>';
      });
  }

  /* ---------- Heute dran ---------- */

  function heuteHTML(k, s){
    var zeilen = [];
    var v = null;
    try{ if(window.vokabelStand) v = window.vokabelStand(); }catch(e){}
    if(v && v.faellig > 0){
      zeilen.push('<div class="sf-zeile"><div class="sf-nr">🧠</div>'
        + '<div class="tx"><b>' + v.faellig + ' ' + T('sf_wfaellig','Wörter fällig') + '</b>'
        + '<span>' + T('sf_etwa','etwa') + ' ' + Math.max(2, Math.round(v.faellig*0.5)) + ' ' + T('sf_minuten','Minuten') + '</span></div>'
        + '<button class="sf-tun voll" onclick="go(\'vokabeln\')">' + T('sf_los','Los') + '</button></div>');
    } else if(v && v.neu > 0){
      zeilen.push('<div class="sf-zeile"><div class="sf-nr">🧠</div>'
        + '<div class="tx"><b>' + v.neu + ' ' + T('sf_wneu','neue Wörter warten') + '</b>'
        + '<span>' + T('sf_wneub','Zehn Minuten reichen für den Anfang.') + '</span></div>'
        + '<button class="sf-tun voll" onclick="go(\'vokabeln\')">' + T('sf_los','Los') + '</button></div>');
    }
    /* Offene Nachbereitung: eine besuchte Stunde, deren Übungen noch
       nicht fertig sind. Kommt aus denselben Daten wie „Meine Stunden". */
    try{
      var offen = (s.past||[]).filter(function(b){
        var p = (window.progress || {})[(b.class_id||b.id) + '|post'];
        return !(p && p.completed);
      })[0];
      if(offen){
        var d = new Date(offen.starts_at);
        zeilen.push('<div class="sf-zeile"><div class="sf-nr">📝</div>'
          + '<div class="tx"><b>' + T('sf_nachb','Nachbereitung') + ' ' + d.toLocaleDateString('de-DE',{day:'2-digit',month:'2-digit'}) + '</b>'
          + '<span>' + E(offen.title||'') + '</span></div>'
          + '<button class="sf-tun" onclick="go(\'stunden\')">' + T('sf_oeffnen','Öffnen') + '</button></div>');
      }
    }catch(e){}

    if(!zeilen.length){
      zeilen.push('<div class="sf-leer">' + T('sf_nichtsdran','Heute steht nichts offen. Wenn du trotzdem Lust hast: der Übungsplatz wartet.') + '</div>');
    }
    return '<div class="sf-k"><div class="sf-kopf"><h2>' + T('sf_heute','Heute dran') + '</h2></div>'
      + zeilen.join('') + '</div>';
  }

  /* ---------- Zuletzt im Podcast ---------- */

  function podcastRand(){
    var liste = [];
    try{
      liste = (window.PODCASTS || []).slice().sort(function(a,b){
        return String(b.datum||'').localeCompare(String(a.datum||''));
      }).slice(0,3);
    }catch(e){}
    if(!liste.length) return '';
    return '<div class="sf-k"><div class="sf-kopf"><h2>' + T('sf_podcast','Zuletzt im Podcast') + '</h2>'
      + '<a href="#medien" onclick="go(\'medien\');return false">' + T('sf_allefolgen','Alle Folgen →') + '</a></div>'
      + liste.map(function(f){
          var unten = [f.dauer, f.thema || f.level].filter(Boolean).join(' · ');
          return '<div class="sf-zeile"><div class="sf-nr">🎧</div>'
            + '<div class="tx"><b>' + E(f.titel || f.title || '') + '</b>'
            + (unten ? '<span>' + E(unten) + '</span>' : '') + '</div>'
            + '<button class="sf-tun" onclick="go(\'medien\')">' + T('sf_hoeren','Hören') + '</button></div>';
        }).join('')
      + '</div>';
  }

  /* ---------- Deine Begleiter ----------
     Alle drei sind KI und stehen genau so da. Jeder führt an eine
     Stelle, die es wirklich gibt — sonst wäre es Kulisse. */
  function begleiter(){
    var B = [
      ['AM','#6D28D9','Amanda', T('sf_bam','Übt Gespräche mit dir — jederzeit'), "go('amanda')"],
      ['MI','#7C3AED','Mila',   T('sf_bmi','Erinnert dich an fällige Wörter'),   "go('vokabeln')"],
      ['TO','#8B5CF6','Tom',    T('sf_bto','Sammelt deine Korrekturen'),         "go('fehler')"]
    ];
    return '<div class="sf-k"><div class="sf-kopf"><h2>' + T('sf_begleiter','Deine Begleiter') + '</h2></div>'
      + B.map(function(b){
          return '<div class="sf-zeile">'
            + '<div class="sf-av" style="background:' + b[1] + ';width:30px;height:30px;flex:0 0 30px;font-size:11px">' + b[0] + '</div>'
            + '<div class="tx"><b>' + E(b[2]) + ' <span class="sf-tag-ki">KI</span></b><span>' + b[3] + '</span></div>'
            + '<button class="sf-tun" onclick="' + b[4] + '">' + T('sf_oeffnen','Öffnen') + '</button></div>';
        }).join('')
      + '</div>';
  }

  /* ---------- Da warst du zuletzt ---------- */

  function weiterKarte(){
    var st = null;
    try{
      if(window.wegStand){
        var w = window.wegStand();
        if(w && w.stufe && w.lektion){
          st = { niveau:w.niveau, nr:w.nr, anzahl:w.anzahl, prozent:w.prozent,
                 lektion:w.titel, ziel:w.ziel, bild:w.bild, angefangen:w.angefangen, weg:w.weg };
        }
      }
    }catch(e){}
    if(!st){ try{ if(window.kursStand) st = window.kursStand(); }catch(e){} }

    if(!st){
      return '<div class="sf-k"><div class="sf-kopf"><h2>' + T('sf_anfang','Fang hier an') + '</h2></div>'
        + '<div class="sf-leib"><div class="sf-weiter">'
        + '<img class="sf-wbild" src="bilder/thema/menschen.jpg" alt="" loading="lazy" onerror="this.onerror=null;this.src=\'' + ersatzBild() + '\'">'
        + '<div class="sf-wtx"><b>' + T('sn_klos','Fang mit Lektion 1 an') + '</b>'
        + '<small>' + T('sn_klosb','Vierzehn Lektionen pro Stufe: Wendungen, Grammatik, Übungen, ein Gespräch und ein Schreibauftrag.') + '</small></div>'
        + '<button class="sf-tun voll" onclick="go(\'weg\')">' + T('sn_kstart','Kurs öffnen') + '</button>'
        + '</div></div></div>';
    }

    var weiter = st.angefangen ? ['sn_kweiter','Weitermachen'] : ['sn_kstart2','Los geht’s'];
    return '<div class="sf-k">'
      + '<div class="sf-kopf"><h2>' + T('sf_zuletzt','Da warst du zuletzt') + '</h2>'
      +   '<a href="#lernen" onclick="kursUebersicht(\'' + E(st.weg || st.niveau) + '\');return false">' + T('sf_zumkurs','Alle Lektionen →') + '</a></div>'
      + '<div class="sf-leib"><div class="sf-weiter">'
      +   '<img class="sf-wbild" src="' + E(st.bild || kursBild(st.niveau, st.id)) + '" alt="" loading="lazy"'
      +        ' onerror="this.onerror=null;this.src=\'' + ersatzBild() + '\'">'
      +   '<div class="sf-wtx"><b>' + E(st.lektion) + '</b>'
      +     '<small>' + E(st.niveau||'') + ' · ' + T('sn_kvon1','Lektion') + ' ' + st.nr + ' ' + T('sn_kvon2','von') + ' ' + st.anzahl
      +       (st.ziel ? ' — ' + E(st.ziel) : '') + '</small>'
      +     '<div class="sf-bal"><i style="width:' + Math.max(2, st.prozent||0) + '%"></i></div></div>'
      +   '<button class="sf-tun voll" onclick="kursOeffnen(' + st.nr + ',\'' + E(st.weg || st.niveau) + '\')">' + T(weiter[0], weiter[1]) + '</button>'
      + '</div></div></div>';
  }

  /* ---------- Vier Zahlen, jetzt im Rand ---------- */

  /* Ab dem 1. November gibt es kein Guthaben mehr: Premium bucht
     unbegrenzt, ohne Stunden abzuziehen. Wer noch Reststunden aus der
     alten Zeit hat, sieht sie weiter — verloren geht nichts. */
  function guthabenZeigen(k){
    var c = (k.credits==null ? 0 : k.credits);
    if(c > 0) return true;
    try{
      if(window.scGestartet && window.scGestartet() &&
         window.istPremium && window.istPremium()) return false;
    }catch(e){}
    return true;
  }

  function vierZahlen(k, s){
    var c = (k.credits==null ? 0 : k.credits);
    function feld(l, v2, d, wort){ return '<div><div class="l">' + l + '</div>'
      + '<div class="v' + (wort?' wort':'') + '">' + v2 + '</div><div class="d">' + d + '</div></div>'; }
    return '<div class="sf-k"><div class="sf-kopf"><h2>' + T('sf_stand','Dein Stand') + '</h2>'
      + '<a href="#fortschritt" onclick="go(\'fortschritt\');return false">' + T('sf_mehr','Mehr →') + '</a></div>'
      + '<div class="sf-vier">'
      +   (guthabenZeigen(k)
           ? feld(T('sn_zguth','Guthaben'), c, T('sn_zguthd','Stunden frei'))
           : feld(T('sf_club','Sprechclub'), T('sf_unbegrenzt','unbegrenzt'), T('sf_impremium','im Premium enthalten'), true))
      +   (function(){
           /* Die Lernserie zaehlte Wochen mit gebuchter Live-Stunde.
              Im Selbstlernbereich, der vor dem Sprechclub startet,
              stand sie damit bei jedem auf 0. Der Vokabeltrainer
              zaehlt die Tage am Stueck — das ist die Serie, die ein
              Selbstlerner meint. Wer keine Woerter uebt, aber Stunden
              besucht, sieht weiter seine Wochen. */
           var tage = 0;
           try{ if(window.vokabelStand) tage = window.vokabelStand().serie||0; }catch(e){}
           if(tage > 0)
             return feld(T('sn_zserie','Lernserie'), tage,
               (tage===1?T('sf_tag','Tag'):T('sf_tage2','Tage')) + ' ' + T('sn_zamstueck','am Stück'));
           return feld(T('sn_zserie','Lernserie'), s.streak||0,
             (s.streak===1?T('sn_zwoche','Woche'):T('sn_zwochen','Wochen')) + ' ' + T('sn_zamstueck','am Stück'));
         })()
      +   feld(T('sn_zlive','Live-Stunden'), (s.past||[]).length, T('sn_zbesucht','besucht'))
      +   feld(T('sn_zvok','Vokabeln'), s.known||0, T('sn_zgelernt','gelernt'))
      + '</div></div>';
  }

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
