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

  /* ============================================================
     Alles auf einen Blick — die Landkarte der Plattform

     Julia, 28.10.2026: "man kann nichts finden weil es auch zu viel
     ist" und, zur neuen Seitenleiste: "auch mit den kleinen Zeichen
     ist super".

     Darum hier dieselbe Ordnung wie in der Leiste, aber alles auf
     einmal sichtbar: vier Gruppen, in jeder die Bereiche als kleine
     Felder mit Zeichen und Namen. Keine Beschreibungstexte — wer
     sucht, liest keine Saetze, der sucht ein Wort und ein Bild.
     ============================================================ */
  var CSS_KARTE = ''
    + '.st-karte{background:#fff;border:1px solid var(--rand);border-radius:20px;padding:18px 20px;margin-top:4px}'
    + '@media(max-width:560px){.st-karte{padding:16px 14px}}'
    + '.st-karte > h2{font-family:"Space Grotesk",sans-serif;font-size:19px;font-weight:800;'
    +   'color:var(--ink);margin:0 0 3px;letter-spacing:-.02em}'
    + '.st-karte > p{margin:0 0 16px;font-size:13.5px;color:#5B6A70;line-height:1.5}'
    + '.st-kgrp{margin-top:16px}'
    + '.st-kgrp:first-of-type{margin-top:0}'
    + '.st-kgrp > h3{display:flex;align-items:center;gap:7px;margin:0 0 9px;font-size:12px;font-weight:900;'
    +   'letter-spacing:.07em;text-transform:uppercase;color:#7C8A91}'
    + '.st-kgrp > h3 .z{font-size:14px}'
    + '.st-kfeld{display:grid;grid-template-columns:repeat(auto-fill,minmax(152px,1fr));gap:8px}'
    + '@media(max-width:560px){.st-kfeld{grid-template-columns:repeat(auto-fill,minmax(104px,1fr));gap:7px}}'
    + '.st-kf{display:flex;align-items:center;gap:9px;background:#F8FBFC;border:1px solid var(--rand);'
    +   'border-radius:13px;padding:10px 11px;font-family:inherit;font-size:13.5px;font-weight:700;'
    +   'color:var(--ink);text-align:left;cursor:pointer;line-height:1.25;'
    +   'transition:background .12s,border-color .12s,transform .12s}'
    + '.st-kf:hover{background:#fff;border-color:#9FD9E6;transform:translateY(-2px)}'
    /* "Kursbibliothek" und "Community-Chat" liefen ueber den Rand
       hinaus — ein Gitterfeld laesst sein Kind erst schrumpfen, wenn
       man es ihm erlaubt. */
    /* Weiche Trennstellen (&shy;) statt hyphens:auto — Chromium bringt
       ohne Woerterbuch keine Trennung zustande und schnitt
       "Pruefungstraining" mitten im Wort ab. */
    + '.st-kf > span:last-child{min-width:0;overflow-wrap:break-word}'
    + '.st-kf:focus-visible{outline:2px solid #10627A;outline-offset:2px}'
    + '.st-kf .z{flex:none;width:30px;height:30px;border-radius:9px;background:#E6F8FC;'
    +   'display:grid;place-items:center;font-size:16px}'
    + '@media(max-width:560px){.st-kf{font-size:12.5px;padding:9px 9px;gap:7px}'
    +   '.st-kf .z{width:27px;height:27px;font-size:15px}}';


  /* ============================================================
     Die Startseite am Handy — vier Bloecke, mehr nicht

     Julia, 28.10.2026, nach vier Bildschirmen von Finanzguru: "so muss
     es auch bei uns sein: NICHT ZU VIEL ... aber klar und strukturiert
     und professionell und robust." Und zu den Farben: "das ist ja mein
     Logo, das sind meine eigentlichen Farben."

     Am Rechner bleibt die Startseite, wie sie war — zwei Spalten,
     Strom, Termine, Begleiter. Am Handy (bis 760 Punkte) steht
     stattdessen das hier:

       1. Deine naechste Stunde   eine Angabe, gross
       2. Frag Amanda             Feld, Mikrofon, vier Vorschlaege
       3. Deine Fertigkeiten      Ringe, aus ueben_stand
       4. Dein Unterricht         was gebucht ist, Vorbereitung

     Die Farben sind aus dem Logo gemessen: #80D8F0 hell, #3FBDDC
     mittel, #1FA6C6 fuer Boegen auf Weiss, #0E6D85 fuer Text.
     Die Zeichen kommen aus Lucide (MIT) und liegen inline im
     Dokument — Emoji sehen auf jedem Geraet anders aus.
     ============================================================ */
  var CSS_HANDY = ''
    + '.hs{--grund:#F2EFE6;--karte:#fff;--ink:#14232A;--ink2:#5B6A70;--ink3:#93A2A8;'
    +   '--rand:#E8E2D4;--rand2:#F1ECE1;--tq:#80D8F0;--tq-m:#3FBDDC;--tq-b:#1FA6C6;'
    +   '--tq-t:#0E6D85;--tq-soft:#E8F7FC;--gold:#FFCE00;--rot:#DD0000;'
    +   'display:flex;flex-direction:column;gap:14px}'
    + '.hs *{box-sizing:border-box}'
    /* Der Grund. Ohne ihn stehen die weissen Karten auf dem alten
       Creme (#FFF8E0) und wirken flach — im Entwurf liegen sie auf
       einem hellen Graubeige, und erst dadurch heben sie sich ab.
       Julia, 28.10.2026: "So moechte ich das, aber in der Realitaet
       sieht es anders aus."
       Gebunden an body.auf-heute, das konto.html nur auf der
       Startseite setzt — die anderen Ansichten behalten ihr Creme. */
    + 'body.auf-heute.hs-an{background:#F2EFE6}'
    + 'body.auf-heute.hs-an .content,body.auf-heute.hs-an .content-inner{background:transparent}'
    + '.hs button{font-family:inherit;color:inherit;cursor:pointer}'
    + '.hs .druck{transition:transform .13s cubic-bezier(.2,.7,.3,1)}'
    + '.hs .druck:active{transform:scale(.973)}'
    + '@media (prefers-reduced-motion: reduce){.hs .druck,.hs .druck:active{transition:none;transform:none}}'
    + '.hs .z{width:20px;height:20px;flex:none;stroke-width:1.75;display:block}'
    + '.hs .z-s{width:16px;height:16px} .hs .z-l{width:22px;height:22px}'

    /* Kopf */
    + '.hs-kopf h1{font-family:"Space Grotesk",sans-serif;font-size:28px;font-weight:700;'
    +   'letter-spacing:-.025em;line-height:1.14;margin:0;color:var(--ink)}'
    + '.hs-kopf p{display:flex;align-items:center;gap:6px;margin:6px 0 0;font-size:14px;color:var(--ink2)}'
    + '.hs-kopf p .z{color:var(--rot)}'
    + '.hs-stufe{display:inline-flex;align-items:center;gap:6px;background:var(--tq-soft);'
    +   'color:var(--tq-t);border:1px solid #CCEDF7;border-radius:999px;padding:5px 12px;'
    +   'font-size:12.5px;font-weight:700;margin-top:10px}'

    /* 1. Naechste Stunde */
    /* .hs .hs-woche statt .hs-woche: die Regel .hs button{color:inherit}
       weiter oben ist staerker und hat den weissen Text im dunklen
       Block wieder auf die dunkle Grundfarbe gezogen. */
    + '.hs .hs-woche{background:linear-gradient(140deg,#0E6D85,#0A4E62);border-radius:22px;'
    +   'padding:16px 18px 18px;color:#fff;border:none;text-align:left;width:100%;display:block;'
    +   'box-shadow:0 12px 26px rgba(10,78,98,.24)}'
    + '.hs-woche .oben{display:flex;align-items:center;gap:8px;margin-bottom:10px}'
    + '.hs-woche .marke{background:var(--gold);color:#1A1A1A;font-size:11px;font-weight:700;'
    +   'border-radius:6px;padding:3px 7px}'
    + '.hs-woche .was{font-size:13.5px;font-weight:600}'
    + '.hs-woche .rechts{margin-left:auto;display:flex;align-items:center;gap:2px;font-size:13px;color:#A9DEEE}'
    + '.hs-woche .gross{font-family:"Space Grotesk",sans-serif;font-size:27px;font-weight:700;line-height:1.1}'
    + '.hs-woche .klein{display:block;font-size:13.5px;color:#A9DEEE;margin-top:5px;line-height:1.45}'

    /* 2. Amanda */
    + '.hs-am .band{display:flex;align-items:center;gap:8px;margin-bottom:9px}'
    + '.hs-am .band b{display:flex;align-items:center;gap:7px;font-family:"Space Grotesk",sans-serif;'
    +   'font-size:16px;font-weight:700;flex:1;min-width:0;color:var(--ink)}'
    + '.hs-am .band b .z{color:var(--tq-m)}'
    + '.hs-am .band .mehr{display:inline-flex;align-items:center;gap:2px;font-size:13px;font-weight:600;'
    +   'color:var(--tq-t);background:none;border:none;white-space:nowrap}'
    + '.hs-karte{background:var(--karte);border:1px solid var(--rand);border-radius:20px;'
    +   'box-shadow:0 1px 2px rgba(20,35,42,.04),0 8px 22px rgba(20,35,42,.05)}'
    + '.hs-am .feld{padding:13px 13px 14px}'
    + '.hs-am .eingabe{display:flex;align-items:flex-end;gap:9px;background:#F6F3EB;'
    +   'border:1px solid var(--rand2);border-radius:15px;padding:11px 11px 11px 13px}'
    + '.hs-am textarea{flex:1;min-width:0;border:none;background:none;resize:none;outline:none;'
    +   'font-family:inherit;font-size:15px;line-height:1.45;color:var(--ink);max-height:92px;padding:0}'
    + '.hs-am textarea::placeholder{color:var(--ink3)}'
    + '.hs-am .mik{flex:none;width:34px;height:34px;border-radius:999px;border:none;background:none;'
    +   'color:var(--ink2);display:grid;place-items:center}'
    + '.hs-am .send{flex:none;width:38px;height:38px;border-radius:999px;border:none;'
    +   'background:linear-gradient(135deg,var(--tq),var(--tq-m));color:#053A47;display:grid;place-items:center}'
    + '.hs-am .oder{margin:12px 0 8px;font-size:12.5px;color:var(--ink2)}'
    + '.hs-am .chips{display:grid;grid-template-columns:1fr 1fr;gap:7px}'
    + '@media(max-width:340px){.hs-am .chips{grid-template-columns:1fr}}'
    + '.hs-am .chip{display:flex;align-items:center;gap:7px;min-width:0;text-align:left;'
    +   'background:#F6F3EB;border:1px solid var(--rand2);border-radius:12px;padding:9px 11px;'
    +   'font-size:13px;font-weight:600;color:var(--ink)}'
    + '.hs-am .chip .z{width:15px;height:15px;color:var(--tq-t)}'
    + '.hs-am .chip > span:last-child{min-width:0;overflow-wrap:break-word}'

    /* 3. Ringe */
    + '.hs-ring-k{padding:16px 0 12px}'
    + '.hs-kopfz{display:flex;align-items:center;gap:10px;margin-bottom:14px;padding:0 16px}'
    + '.hs-kopfz h2{font-family:"Space Grotesk",sans-serif;font-size:16px;font-weight:700;flex:1;min-width:0;margin:0}'
    + '.hs-kopfz .mehr{display:inline-flex;align-items:center;gap:2px;font-size:13px;font-weight:600;'
    +   'color:var(--tq-t);background:none;border:none;white-space:nowrap}'
    + '.hs-feld{position:relative}'
    + '.hs-feld::after{content:"";position:absolute;top:0;right:0;bottom:0;width:34px;'
    +   'background:linear-gradient(90deg,rgba(255,255,255,0),#fff 72%);pointer-events:none}'
    + '.hs-ringe{display:flex;gap:4px;overflow-x:auto;padding:0 16px 4px;scrollbar-width:none;'
    +   '-webkit-overflow-scrolling:touch}'
    + '.hs-ringe::-webkit-scrollbar{display:none}'
    + '.hs .hs-ring{color:var(--ink);flex:0 0 auto;width:74px;text-align:center;border:none;background:none;padding:2px 0 4px}'
    + '.hs-ring .kreis{position:relative;display:block;width:60px;height:60px;margin:0 auto}'
    + '.hs-ring svg.bogen{transform:rotate(-90deg);display:block}'
    + '.hs-ring .scheibe{position:absolute;inset:11px;border-radius:999px;display:grid;place-items:center}'
    + '.hs-ring .scheibe .z{width:20px;height:20px;stroke-width:2}'
    + '.hs-ring b{display:block;font-size:11.5px;font-weight:600;color:var(--ink);margin-top:7px;line-height:1.25}'
    + '.hs-ring i{display:block;font-family:"Space Grotesk",sans-serif;font-style:normal;font-size:11.5px;'
    +   'font-weight:700;margin-top:1px;font-variant-numeric:tabular-nums}'
    + '.hs-ring.gut .scheibe{background:#DFF5EF;color:#0E7E99} .hs-ring.gut i{color:#0E7E99}'
    + '.hs-ring.mitte .scheibe{background:#FFF4CC;color:#9A7100} .hs-ring.mitte i{color:#9A7100}'
    + '.hs-ring.wenig .scheibe{background:#FDECEB;color:#C21C14} .hs-ring.wenig i{color:#C21C14}'
    + '.hs-leer{padding:0 16px 6px;font-size:13.5px;color:var(--ink2);line-height:1.5}'

    /* 4. Unterricht */
    + '.hs-titel{font-family:"Space Grotesk",sans-serif;font-size:20px;font-weight:700;'
    +   'letter-spacing:-.025em;margin:10px 0 -2px;color:var(--ink)}'
    + '.hs-liste{overflow:hidden}'
    + '.hs .hs-z{color:var(--ink);display:flex;align-items:center;gap:11px;padding:13px 15px;width:100%;border:none;'
    +   'border-bottom:1px solid var(--rand2);background:var(--karte);text-align:left}'
    + '.hs-z:last-child{border-bottom:none}'
    + '.hs-z .kachel{flex:none;width:38px;height:38px;border-radius:12px;background:var(--tq-soft);'
    +   'display:grid;place-items:center;color:var(--tq-t)}'
    + '.hs-z .kachel.rot{background:#FDECEB;color:var(--rot)} .hs-z .kachel.gold{background:#FFF4CC;color:#8A6608}'
    + '.hs-z .tx{flex:1;min-width:0}'
    + '.hs-z .tx b{display:block;font-size:14.5px;font-weight:600;line-height:1.35}'
    + '.hs-z .tx span{display:block;font-size:12.5px;color:var(--ink2);margin-top:1px}'
    + '.hs-schild{font-size:11px;font-weight:700;border-radius:999px;padding:4px 9px;white-space:nowrap}'
    + '.hs-schild.jetzt{background:var(--rot);color:#fff}'
    + '.hs-schild.frei{background:var(--tq-soft);color:var(--tq-t)}'
    + '.hs-z .pfeil{color:var(--ink3)}'
    ;

  var HANDY_ZEICHEN = '<symbol id="s-calendar-days" viewBox="0 0 24 24"><path d="M8 2v4" /> <path d="M16 2v4" /> <rect width="18" height="18" x="3" y="4" rx="2" /> <path d="M3 10h18" /> <path d="M8 14h.01" /> <path d="M12 14h.01" /> <path d="M16 14h.01" /> <path d="M8 18h.01" /> <path d="M12 18h.01" /> <path d="M16 18h.01" /></symbol><symbol id="s-sparkles" viewBox="0 0 24 24"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /> <path d="M20 2v4" /> <path d="M22 4h-4" /> <circle cx="4" cy="20" r="2" /></symbol><symbol id="s-mic" viewBox="0 0 24 24"><path d="M12 19v3" /> <path d="M19 10v2a7 7 0 0 1-14 0v-2" /> <rect x="9" y="2" width="6" height="13" rx="3" /></symbol><symbol id="s-arrow-up" viewBox="0 0 24 24"><path d="m5 12 7-7 7 7" /> <path d="M12 19V5" /></symbol><symbol id="s-chevron-right" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></symbol><symbol id="s-ear" viewBox="0 0 24 24"><path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" /> <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" /></symbol><symbol id="s-book-open" viewBox="0 0 24 24"><path d="M12 7v14" /> <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></symbol><symbol id="s-pen-line" viewBox="0 0 24 24"><path d="M13 21h8" /> <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /></symbol><symbol id="s-brain" viewBox="0 0 24 24"><path d="M12 18V5" /> <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" /> <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" /> <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" /> <path d="M18 18a4 4 0 0 0 2-7.464" /> <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" /> <path d="M6 18a4 4 0 0 1-2-7.464" /> <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" /></symbol><symbol id="s-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="6" /> <circle cx="12" cy="12" r="2" /></symbol><symbol id="s-flame" viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></symbol><symbol id="s-file-text" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /> <path d="M14 2v4a2 2 0 0 0 2 2h4" /> <path d="M10 9H8" /> <path d="M16 13H8" /> <path d="M16 17H8" /></symbol><symbol id="s-graduation-cap" viewBox="0 0 24 24"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /> <path d="M22 10v6" /> <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></symbol><symbol id="s-ruler" viewBox="0 0 24 24"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" /> <path d="m14.5 12.5 2-2" /> <path d="m11.5 9.5 2-2" /> <path d="m8.5 6.5 2-2" /> <path d="m17.5 15.5 2-2" /></symbol><symbol id="s-message-circle" viewBox="0 0 24 24"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></symbol><symbol id="s-radio" viewBox="0 0 24 24"><path d="M16.247 7.761a6 6 0 0 1 0 8.478" /> <path d="M19.075 4.933a10 10 0 0 1 0 14.134" /> <path d="M4.925 19.067a10 10 0 0 1 0-14.134" /> <path d="M7.753 16.239a6 6 0 0 1 0-8.478" /> <circle cx="12" cy="12" r="2" /></symbol><symbol id="s-headphones" viewBox="0 0 24 24"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" /></symbol>';

  function stil(){
    if(document.getElementById('startStil')) return;
    var s=document.createElement('style'); s.id='startStil'; s.textContent=CSS+CSS_POD+CSS_FEED+CSS_KARTE+CSS_HANDY;
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

  /* ---------- Die Startseite am Handy ---------- */

  function zeichenEinhaengen(){
    if(document.getElementById('hsZeichen')) return;
    var d = document.createElement('div');
    d.innerHTML = '<svg id="hsZeichen" width="0" height="0" style="position:absolute" aria-hidden="true">'
      + '<defs>' + HANDY_ZEICHEN + '</defs></svg>';
    document.body.appendChild(d.firstChild);
  }
  function ikon(name, klasse){
    return '<svg class="z ' + (klasse||'') + '" fill="none" stroke="currentColor">'
      + '<use href="#s-' + name + '"/></svg>';
  }

  function istHandy(){
    try{ return window.matchMedia('(max-width:760px)').matches; }catch(e){ return false; }
  }

  /* Wann ist die naechste Stunde — als Satz, den man sofort versteht. */
  function wannSatz(iso){
    var d = new Date(iso); if(isNaN(d)) return '';
    var heute = new Date(); heute.setHours(0,0,0,0);
    var tag = new Date(d); tag.setHours(0,0,0,0);
    var tage = Math.round((tag - heute) / 86400000);
    var uhr = (window.fmtTimeK ? fmtTimeK(d) : d.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}));
    if(tage === 0) return 'Heute · ' + uhr + ' Uhr';
    if(tage === 1) return 'Morgen · ' + uhr + ' Uhr';
    return d.toLocaleDateString('de-DE',{weekday:'short',day:'2-digit',month:'2-digit'}) + ' · ' + uhr + ' Uhr';
  }
  function tageBis(iso){
    var d = new Date(iso); if(isNaN(d)) return null;
    var heute = new Date(); heute.setHours(0,0,0,0);
    var tag = new Date(d); tag.setHours(0,0,0,0);
    return Math.round((tag - heute) / 86400000);
  }

  /* 1. Die grosse Karte: die naechste Stunde. Gibt es keine, steht da,
        was dann zu tun ist — nicht eine leere Flaeche. */
  function hsWoche(k, s){
    var naechste = (s.upcoming || [])[0];
    var stufe = '';
    try{ stufe = String((k.profile && (k.profile.level || k.profile.stufe)) || '').toUpperCase().slice(0,2); }catch(e){}
    if(!naechste){
      return '<button class="hs-woche druck" onclick="go(\'kalender\')">'
        + '<span class="oben">' + (stufe ? '<span class="marke">' + E(stufe) + '</span>' : '')
        +   '<span class="was">Sprechclub</span>'
        +   '<span class="rechts">Wochenplan ' + ikon('chevron-right','z-s') + '</span></span>'
        + '<span class="gross">Noch keine Stunde gebucht</span>'
        + '<span class="klein">Such dir im Wochenplan eine Stunde aus — kleine Gruppen, echte Lehrerin.</span>'
        + '</button>';
    }
    var tage = tageBis(naechste.starts_at);
    var rechts = tage === 0 ? 'heute' : (tage === 1 ? 'morgen' : 'in ' + tage + ' Tagen');
    return '<button class="hs-woche druck" onclick="go(\'stunden\')">'
      + '<span class="oben">' + (stufe ? '<span class="marke">' + E(stufe) + '</span>' : '')
      +   '<span class="was">Deine nächste Stunde</span>'
      +   '<span class="rechts">' + E(rechts) + ' ' + ikon('chevron-right','z-s') + '</span></span>'
      + '<span class="gross">' + E(wannSatz(naechste.starts_at)) + '</span>'
      + '<span class="klein">' + E(naechste.topic || naechste.title || 'Sprechclub') + '</span>'
      + '</button>';
  }

  /* 2. Frag Amanda. Der Text wird mitgenommen: go('amanda') zeichnet die
        Ansicht, danach uebergibt amSenden() die Frage. */
  window.hsFragen = function(vorgabe){
    var feld = document.getElementById('hsAmText');
    var text = String(vorgabe || (feld && feld.value) || '').trim();
    try{ go('amanda'); }catch(e){ return; }
    if(!text) return;
    if(feld) feld.value = '';
    var versuche = 0;
    (function warten(){
      versuche++;
      if(document.getElementById('amText') && typeof window.amSenden === 'function'){
        try{ window.amSenden(text); }catch(e){}
        return;
      }
      if(versuche < 25) setTimeout(warten, 120);
    })();
  };

  function hsAmanda(){
    var vor = [
      ['ruler',          'Dativ erklären'],
      ['pen-line',       'Satz prüfen'],
      ['graduation-cap', 'Übung bauen'],
      ['message-circle', 'Höflich sagen']
    ];
    return '<section class="hs-am">'
      + '<div class="band"><b>' + ikon('sparkles','z-s') + 'Frag Amanda</b>'
      +   '<button class="mehr druck" onclick="go(\'amanda\')">Letzte Gespräche ' + ikon('chevron-right','z-s') + '</button></div>'
      + '<div class="hs-karte feld">'
      +   '<div class="eingabe">'
      +     '<textarea id="hsAmText" rows="2" placeholder="Frag mich etwas auf Deutsch …"></textarea>'
      +     '<button class="mik druck" onclick="go(\'amandasprechen\')" aria-label="Sprechen statt tippen">' + ikon('mic') + '</button>'
      +     '<button class="send druck" onclick="hsFragen()" aria-label="Abschicken">' + ikon('arrow-up','z-s') + '</button>'
      +   '</div>'
      +   '<p class="oder">Oder tipp auf einen Vorschlag:</p>'
      +   '<div class="chips">' + vor.map(function(v){
            /* Die Frage steht in einem data-Attribut, nicht im onclick.
               Vorher stand hier JSON.stringify(...) mitten in einem
               mit " begrenzten Attribut — das Anfuehrungszeichen der
               Zeichenkette hat das Attribut vorzeitig beendet und den
               Knopf zerschossen. Julia, 28.10.2026: "bei Amanda vorne
               auf dem Bildschirm kann ich nichts anklicken."
               Geklickt wird jetzt ueber einen einzigen Zuhoerer am
               Block (siehe handyStart) — so kann kein Zeichen im Text
               mehr etwas kaputt machen. */
            return '<button type="button" class="chip druck" data-frage="' + E(v[1]) + '">'
              + ikon(v[0]) + '<span>' + E(v[1]) + '</span></button>';
          }).join('') + '</div>'
      + '</div></section>';
  }

  /* 3. Die Ringe. Die Werte kommen aus ueben_stand und tragen sich nach;
        bis dahin steht ein Satz da, keine leere Karte. */
  var HS_FERTIG = [
    ['hoeren',    'Hören',     'ear'],
    ['sprechen',  'Sprechen',  'mic'],
    ['lesen',     'Lesen',     'book-open'],
    ['schreiben', 'Schreiben', 'pen-line'],
    ['wortschatz','Wörter',    'brain'],
    ['grammatik', 'Grammatik', 'ruler']
  ];
  function hsRing(name, ikonName, wert){
    var stand = wert >= 70 ? 'gut' : (wert >= 40 ? 'mitte' : 'wenig');
    var farbe = { gut:'#1FA6C6', mitte:'#E8A700', wenig:'#DD0000' }[stand];
    var umfang = 2 * Math.PI * 26;
    var anteil = Math.max(wert, 7) / 100;
    return '<button class="hs-ring druck ' + stand + '" onclick="go(\'fertigkeit\')"'
      + ' aria-label="' + E(name) + ': ' + wert + ' Prozent">'
      + '<span class="kreis"><svg class="bogen" width="60" height="60" aria-hidden="true">'
      +   '<circle cx="30" cy="30" r="26" fill="none" stroke="#EFE9DE" stroke-width="6"/>'
      +   '<circle cx="30" cy="30" r="26" fill="none" stroke="' + farbe + '" stroke-width="6"'
      +     ' stroke-linecap="round" stroke-dasharray="' + umfang.toFixed(1) + '"'
      +     ' stroke-dashoffset="' + (umfang * (1 - anteil)).toFixed(1) + '"/></svg>'
      + '<span class="scheibe">' + ikon(ikonName) + '</span></span>'
      + '<b>' + E(name) + '</b><i>' + wert + ' %</i></button>';
  }
  function hsFertigkeiten(){
    return '<section class="hs-karte hs-ring-k">'
      + '<div class="hs-kopfz"><h2>Deine Fertigkeiten</h2>'
      +   '<button class="mehr druck" onclick="go(\'fertigkeit\')">Alle anzeigen ' + ikon('chevron-right','z-s') + '</button></div>'
      + '<div id="hsRinge" class="hs-leer">Wird geladen …</div>'
      + '</section>';
  }
  function hsRingeFuellen(){
    var c = window.sb, id = null;
    try{ id = window.user && user.id; }catch(e){}
    var ziel = document.getElementById('hsRinge');
    if(!ziel) return;
    if(!c || !id){ ziel.innerHTML = ''; return; }
    c.from('ueben_stand').select('skill,best').eq('user_id', id).then(function(r){
      var reihen = (r && r.data) || [];
      var ziel2 = document.getElementById('hsRinge'); if(!ziel2) return;
      if(!reihen.length){
        ziel2.className = 'hs-leer';
        ziel2.innerHTML = 'Hier steht bald, wie du in Hören, Lesen, Schreiben und Sprechen stehst — '
          + 'sobald du die ersten Übungen gemacht hast.';
        return;
      }
      var je = {};
      reihen.forEach(function(x){
        var k = x.skill || 'sonst';
        if(!je[k]) je[k] = { summe:0, n:0 };
        je[k].summe += (x.best || 0); je[k].n++;
      });
      var stuecke = HS_FERTIG.filter(function(f){ return je[f[0]]; }).map(function(f){
        var d = je[f[0]];
        return hsRing(f[1], f[2], Math.round(d.summe / Math.max(1, d.n)));
      });
      if(!stuecke.length){ ziel2.className='hs-leer'; ziel2.innerHTML='Noch keine Übungen gemacht.'; return; }
      ziel2.className = 'hs-feld';
      ziel2.innerHTML = '<div class="hs-ringe">' + stuecke.join('') + '</div>';
    }).catch(function(){
      var z = document.getElementById('hsRinge');
      if(z){ z.className='hs-leer'; z.innerHTML = 'Konnte gerade nicht geladen werden.'; }
    });
  }

  /* 4. Dein Unterricht */
  function hsUnterricht(k, s){
    var kommend = (s.upcoming || []).slice(0, 3);
    var zeilen = kommend.map(function(b){
      var tage = tageBis(b.starts_at);
      var laeuft = tage === 0;
      return '<button class="hs-z druck" onclick="go(\'stunden\')">'
        + '<span class="kachel' + (laeuft ? ' rot' : '') + '">' + ikon(laeuft ? 'radio' : 'calendar-days') + '</span>'
        + '<span class="tx"><b>' + E(b.topic || b.title || 'Sprechclub') + '</b>'
        +   '<span>' + E(wannSatz(b.starts_at)) + (b.level ? ' · ' + E(b.level) : '') + '</span></span>'
        + '<span class="hs-schild ' + (laeuft ? 'jetzt' : 'frei') + '">' + (laeuft ? 'heute' : 'gebucht') + '</span>'
        + '</button>';
    }).join('');
    if(!zeilen){
      zeilen = '<button class="hs-z druck" onclick="go(\'kalender\')">'
        + '<span class="kachel">' + ikon('calendar-days') + '</span>'
        + '<span class="tx"><b>Stunde aussuchen</b><span>Der Wochenplan zeigt alle Termine</span></span>'
        + ikon('chevron-right','pfeil') + '</button>';
    }
    zeilen += '<button class="hs-z druck" onclick="go(\'materialien\')">'
      + '<span class="kachel gold">' + ikon('file-text') + '</span>'
      + '<span class="tx"><b>Material und Vorbereitung</b><span>Wortschatz, Merksätze und Übungen zur Stunde</span></span>'
      + ikon('chevron-right','pfeil') + '</button>';
    return '<h2 class="hs-titel">Dein Unterricht</h2>'
      + '<section class="hs-karte hs-liste">' + zeilen + '</section>';
  }

  function hsKopf(k, s){
    var name = (k.name || '').split(' ')[0];
    var std = new Date().getHours();
    var gruss = std < 11 ? 'Guten Morgen' : (std < 18 ? 'Hallo' : 'Guten Abend');
    var serie = 0;
    try{ serie = (s && s.streak) || 0; }catch(e){}
    var stufe = '';
    try{ stufe = String((k.profile && (k.profile.level || k.profile.stufe)) || '').toUpperCase().slice(0,2); }catch(e){}
    var datum = new Date().toLocaleDateString('de-DE',{weekday:'long',day:'numeric',month:'long'});
    return '<header class="hs-kopf"><h1>' + gruss + (name ? ',<br>' + E(name) : '') + '</h1>'
      + '<p>' + (serie ? ikon('flame','z-s') : '') + E(datum)
      +   (serie ? ' · Tag ' + serie + ' in Folge' : '') + '</p>'
      + (stufe
          ? '<span class="hs-stufe">' + ikon('target','z-s') + 'Dein Niveau: ' + E(stufe) + '</span>'
          : '<button class="hs-stufe druck" onclick="go(\'fortschritt\')">' + ikon('target','z-s')
            + 'Niveau eintragen</button>')
      + '</header>';
  }

  function handyStart(ziel, k, s){
    zeichenEinhaengen();
    try{ document.body.classList.add('hs-an'); }catch(e){}
    ziel.innerHTML = '<div class="hs">'
      + hsKopf(k, s)
      + hsWoche(k, s)
      + hsAmanda()
      + hsFertigkeiten()
      + hsUnterricht(k, s)
      + '</div>';
    /* Ein Zuhoerer fuer alles, was im Block geklickt wird. Inline-
       Attribute mit Text darin sind eine Fehlerquelle; hier kann kein
       Anfuehrungszeichen mehr etwas zerreissen. */
    try{
      var block = ziel.querySelector('.hs');
      if(block && !block.__klick){
        block.__klick = true;
        block.addEventListener('click', function(ev){
          var t = ev.target;
          var chip = t.closest ? t.closest('[data-frage]') : null;
          if(chip){ ev.preventDefault(); hsFragen(chip.getAttribute('data-frage')); }
        });
      }
    }catch(e){ console.error('Klicks:', e); }
    try{ hsRingeFuellen(); }catch(e){ console.error('Fertigkeiten:', e); }
  }

  STARTSEITE.zeichne = function(ziel, k){
    if(!ziel) return;
    stil();
    k = k || {};
    var s = k.stats || {upcoming:[],past:[],streak:0,known:0,vocabTotal:0};
    var name = (k.name||'').split(' ')[0];

    /* Am Handy die vier Bloecke, am Rechner die gewohnte Seite.
       Julia, 28.10.2026: "NICHT ZU VIEL ... aber klar und strukturiert
       und professionell und robust." */
    if (istHandy()) {
      try { handyStart(ziel, k, s); return; }
      catch (e) { console.error('Handy-Start:', e); }   // im Zweifel die alte Seite
    }

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
      +       '<div class="st-titel"><span class="tag">' + T('sn_tag2','Die ganze Plattform') + '</span>'
      +         '<h2>' + T('sn_wofind','Wo finde ich was?') + '</h2></div>'
      +       uebersicht()
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
  /* ---------- Alles auf einen Blick ----------
     Dieselben vier Gruppen wie in der Seitenleiste, nur offen
     nebeneinander statt aufklappbar. Wer in der Leiste sucht, klappt;
     wer hier sucht, sieht. Beides fuehrt an denselben Ort. */

  function KARTE(){
    return [
      ['👑', T('nv_grp_club','Sprechclub'), [
        ['🗓️', T('nv_wochenplan','Wochenplan'),            "go('kalender')"],
        ['🎟️', T('nv_stunden','Meine Stunden'),            "go('stunden')"],
        ['📄', T('nv_material','Materialien'),             "go('materialien')"]
      ]],
      ['📚', T('nv_grp_lernen2','Lernen'), [
        ['🧭', T('nv_kurs','Mein Kurs'),                   "go('lernen')"],
        ['📖', T('nv_bib','Kursbibliothek'),               "go('kurse')"],
        ['🗺️', T('nv_themen','Themen & Orte'),             "go('bereiche')"],
        ['🎧', T('nv_podcast','Podcast & Hören'),          "go('medien')"]
      ]],
      ['📐', T('nv_grp_ueben','Üben'), [
        ['🧠', T('nv_woerter','Wörter'),                   "go('vokabeln')"],
        ['📐', T('nv_gram','Grammatik & Übungen'),         "go('ueben')"],
        ['✍️', T('nv_schreiben','Schreiben'),              "go('schreiben')"],
        ['🔊', T('sn_wauft','Aussprache trainieren'),      "location.href='aussprache.html'"],
        ['🎲', T('nv_spiele','Sprachspiele'),              "go('szenen')"],
        ['🩹', T('nv_fehler','Meine Fehler'),              "go('fehler')"],
        ['🎚️', T('nv_fert','Fertigkeiten'),                "go('fertigkeit')"],
        ['🎯', T('nv_pruef','Prüfungs&shy;training'),      "go('pruefung')"]
      ]],
      ['🗣️', T('nv_grp_sprechen','Sprechen'), [
        ['💭', T('nv_gespraeche','Gespräche üben'),        "go('sprechen')"],
        ['🎙️', T('nv_amanda_sp','Mit Amanda sprechen'),    "go('amandasprechen')"],
        ['🤖', T('nv_amanda_fr','Amanda fragen'),          "go('amanda')"],
        ['👥', T('nv_tandem','Sprech-Tandem'),             "go('buddy')"]
      ]],
      /* Chat, Postfach und das eigene Konto gehoeren weder zum Ueben
         noch zum Sprechen — sie sind der Club selbst. */
      ['💬', T('sn_kgrp_club','Mein Club'), [
        ['💬', T('nv_news','Community-Chat'),              "go('community')"],
        ['✉️', T('k_msg','Nachrichten'),                   "go('nachrichten')"],
        ['🎒', T('nv_mein','Mein Bereich'),                "go('fortschritt')"],
        ['💳', T('nav_abo','Mein Abo'),                    "go('abo')"],
        ['👤', T('k_profile','Profil'),                    "go('profil')"]
      ]]
    ];
  }

  function uebersicht(){
    var gruppen = KARTE().map(function(g){
      var felder = g[2].map(function(f){
        return '<button class="st-kf" onclick="' + f[2] + '">'
          + '<span class="z">' + f[0] + '</span><span>' + f[1] + '</span></button>';
      }).join('');
      return '<div class="st-kgrp"><h3><span class="z">' + g[0] + '</span>' + g[1] + '</h3>'
        + '<div class="st-kfeld">' + felder + '</div></div>';
    }).join('');
    return '<div class="st-karte">'
      + '<h2>' + T('sn_kartet','Alles auf einen Blick') + '</h2>'
      + '<p>' + T('sn_karteb','Jeder Bereich des Clubs, nach Thema sortiert — ein Tipp und du bist da.') + '</p>'
      + gruppen + '</div>';
  }

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
