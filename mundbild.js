/* ============================================================
   deutschoderwas club · Mundbilder für das Aussprachetraining
   Ein Schnitt durch Mund und Rachen — man sieht, wo die Zunge liegt,
   wie offen der Kiefer ist und ob die Lippen gerundet sind.
   Genau das, was ein Foto von außen nicht zeigen kann.

   window.mundBild(lautId, groesse)  -> SVG als Text
   window.mundStellungen             -> alle Laute mit Beschreibung
   ============================================================ */
(function () {
  'use strict';

  /* Jede Stellung beschreibt:
     kiefer  0 (geschlossen) … 1 (weit offen)
     zunge   {x, y}  Lage der Zungenmasse: x 0 = vorn, 1 = hinten; y 0 = unten, 1 = oben
     spitze  Höhe der Zungenspitze: 0 unten hinter den Zähnen … 1 am Gaumen
     lippen  'neutral' | 'rund' | 'breit' | 'zusammen' | 'zaehne'
     luft    Wo die Luft reibt — für den kleinen Pfeil: null | 'vorn' | 'mitte' | 'hinten' | 'nase'
     stimme  true = Stimmbänder schwingen  */
  var ST = {
    // Vokale
    'a-lang':   { kiefer:.95, zunge:{x:.45,y:.12}, spitze:.05, lippen:'neutral', luft:null, stimme:true,
                  wie:'Mund weit auf, Zunge liegt flach und tief. Der Ton kommt frei heraus.' },
    'a-kurz':   { kiefer:.78, zunge:{x:.48,y:.15}, spitze:.05, lippen:'neutral', luft:null, stimme:true,
                  wie:'Wie das lange a, nur kürzer und etwas lockerer.' },
    'i-lang':   { kiefer:.22, zunge:{x:.18,y:.86}, spitze:.25, lippen:'breit', luft:null, stimme:true,
                  wie:'Zunge weit vorn und hoch, Mundwinkel breit wie beim Lächeln.' },
    'u-lang':   { kiefer:.28, zunge:{x:.86,y:.84}, spitze:.05, lippen:'rund', luft:null, stimme:true,
                  wie:'Zunge hinten und hoch, Lippen fest gerundet und leicht vorgeschoben.' },
    'o-lang':   { kiefer:.55, zunge:{x:.82,y:.5}, spitze:.05, lippen:'rund', luft:null, stimme:true,
                  wie:'Zunge hinten auf halber Höhe, Lippen rund wie ein kleines o.' },
    'e-lang':   { kiefer:.35, zunge:{x:.25,y:.68}, spitze:.2, lippen:'breit', luft:null, stimme:true,
                  wie:'Zunge vorn, etwas tiefer als beim i, Mundwinkel breit.' },
    'schwa':    { kiefer:.42, zunge:{x:.5,y:.45}, spitze:.1, lippen:'neutral', luft:null, stimme:true,
                  wie:'Alles entspannt in der Mitte — der Murmellaut am Wortende.' },

    // Umlaute: vordere Zunge, runde Lippen — genau darin liegt die Schwierigkeit
    'ue':       { kiefer:.25, zunge:{x:.2,y:.85}, spitze:.25, lippen:'rund', luft:null, stimme:true,
                  wie:'Zunge steht wie beim i ganz vorn — aber die Lippen sind rund wie beim u.' },
    'oe':       { kiefer:.42, zunge:{x:.24,y:.62}, spitze:.2, lippen:'rund', luft:null, stimme:true,
                  wie:'Zunge wie beim e vorn — Lippen rund wie beim o.' },
    'ae':       { kiefer:.6, zunge:{x:.3,y:.4}, spitze:.12, lippen:'breit', luft:null, stimme:true,
                  wie:'Offener als das e, Zunge bleibt vorn, Lippen breit.' },

    // Konsonanten
    'r-hinten': { kiefer:.5, zunge:{x:.9,y:.62}, spitze:.02, lippen:'neutral', luft:'hinten', stimme:true,
                  wie:'Der Zungenrücken hebt sich ganz hinten zum Zäpfchen. Die Zungenspitze bleibt unten liegen.' },
    'r-vokal':  { kiefer:.7, zunge:{x:.55,y:.25}, spitze:.05, lippen:'neutral', luft:null, stimme:true,
                  wie:'Am Wortende wird das R zu einem dunklen a. Die Zunge macht fast nichts.' },
    'ch-ich':   { kiefer:.3, zunge:{x:.3,y:.82}, spitze:.3, lippen:'breit', luft:'mitte', stimme:false,
                  wie:'Die Zunge liegt vorn am harten Gaumen, ein feiner Luftstrom zischt darüber. Wie beim Flüstern von „hihi".' },
    'ch-ach':   { kiefer:.45, zunge:{x:.85,y:.72}, spitze:.02, lippen:'neutral', luft:'hinten', stimme:false,
                  wie:'Der Zungenrücken hebt sich hinten zum weichen Gaumen, die Luft reibt kratzend darüber.' },
    's-stimm':  { kiefer:.2, zunge:{x:.22,y:.78}, spitze:.72, lippen:'breit', luft:'vorn', stimme:true,
                  wie:'Zungenspitze knapp hinter die oberen Zähne, ein schmaler Luftkanal — und die Stimme summt mit.' },
    's-scharf': { kiefer:.2, zunge:{x:.22,y:.78}, spitze:.72, lippen:'breit', luft:'vorn', stimme:false,
                  wie:'Gleiche Stellung wie beim weichen s, aber ohne Stimme — es zischt nur.' },
    'sch':      { kiefer:.28, zunge:{x:.34,y:.74}, spitze:.6, lippen:'rund', luft:'vorn', stimme:false,
                  wie:'Zunge etwas weiter hinten als beim s, Lippen leicht vorgestülpt.' },
    'z-ts':     { kiefer:.22, zunge:{x:.22,y:.78}, spitze:.8, lippen:'breit', luft:'vorn', stimme:false,
                  wie:'Erst die Zungenspitze fest an den Damm — t — dann sofort loslassen in ein s.' },
    'w':        { kiefer:.25, zunge:{x:.4,y:.4}, spitze:.05, lippen:'zaehne', luft:'vorn', stimme:true,
                  wie:'Obere Zähne auf der Unterlippe, die Luft reibt — und die Stimme schwingt mit.' },
    'f':        { kiefer:.25, zunge:{x:.4,y:.4}, spitze:.05, lippen:'zaehne', luft:'vorn', stimme:false,
                  wie:'Gleiche Stellung wie beim w, aber ohne Stimme.' },
    'ng':       { kiefer:.4, zunge:{x:.78,y:.86}, spitze:.05, lippen:'neutral', luft:'nase', stimme:true,
                  wie:'Der Zungenrücken schließt hinten ab, die Luft geht durch die Nase. Kein g am Ende!' },
    'p-b':      { kiefer:.15, zunge:{x:.5,y:.35}, spitze:.05, lippen:'zusammen', luft:'vorn', stimme:false,
                  wie:'Lippen fest schließen, Druck aufbauen, dann mit einem kleinen Knall öffnen.' },
    't-d':      { kiefer:.22, zunge:{x:.24,y:.8}, spitze:.9, lippen:'neutral', luft:'vorn', stimme:false,
                  wie:'Zungenspitze fest an den Damm hinter den oberen Zähnen, dann ruckartig lösen.' },
    'k-g':      { kiefer:.35, zunge:{x:.84,y:.88}, spitze:.05, lippen:'neutral', luft:'hinten', stimme:false,
                  wie:'Der Zungenrücken schließt hinten ab und löst sich mit einem kleinen Knall.' },
    'h':        { kiefer:.55, zunge:{x:.5,y:.35}, spitze:.05, lippen:'neutral', luft:'hinten', stimme:false,
                  wie:'Nur ein Hauch aus der Kehle — die Zunge macht gar nichts.' },
    'l':        { kiefer:.35, zunge:{x:.28,y:.7}, spitze:.88, lippen:'neutral', luft:null, stimme:true,
                  wie:'Zungenspitze am Damm, die Luft fließt seitlich an der Zunge vorbei.' }
  };

  /* Welche Stellungen gehören zu welcher Lektion — in dieser Reihenfolge */
  var LEKTION = {
    'vokale-lang-kurz': [['a-lang','langes a — „Sahne"'],['a-kurz','kurzes a — „Sonne"'],['i-lang','langes i — „ihn"'],['u-lang','langes u — „Uhr"']],
    'r':               [['r-hinten','R am Anfang — „rot"'],['r-vokal','R am Ende — „Uhr"']],
    'wortakzent':      [['a-lang','betonte Silbe — laut und lang'],['schwa','unbetonte Silbe — kurz und dunkel']],
    'alphabet':        [['e-lang','„be, ce, de" — langes e'],['a-lang','„ha, ka" — langes a']],
    'umlaute':         [['ue','ü — „Tür"'],['oe','ö — „schön"'],['ae','ä — „Bär"'],['u-lang','zum Vergleich: u']],
    'ch':              [['ch-ich','ich-Laut — „ich, Milch"'],['ch-ach','ach-Laut — „Buch, machen"'],['sch','zum Vergleich: sch']],
    's-z-ss':          [['s-stimm','weiches s — „Sonne"'],['s-scharf','scharfes s — „Wasser"'],['z-ts','z — „Zeit"']],
    'v-w-f':           [['w','w — „Wasser"'],['f','f — „Foto"']],
    'diphthonge':      [['a-lang','Start bei „ei": offenes a'],['i-lang','Ziel bei „ei": i'],['u-lang','Ziel bei „au": u']],
    'satzmelodie':     [['schwa','entspannte Mittelstellung'],['a-lang','betonte Stelle im Satz']],
    'auslaut':         [['p-b','b am Ende wird p — „gelb"'],['t-d','d am Ende wird t — „Hand"'],['k-g','g am Ende wird k — „Tag"']],
    'sp-st':           [['sch','sp und st beginnen mit sch'],['p-b','dann das p'],['t-d','oder das t']],
    'ng-nk':           [['ng','ng — „Zeitung"'],['k-g','kein g am Ende!']],
    'reduktion':       [['schwa','das gemurmelte e — „bitte"'],['r-vokal','-er wird zu -a — „Vater"']],
    'satzakzent':      [['a-lang','betont: laut, lang, hoch'],['schwa','unbetont: kurz und leise']],
    'rhythmus':        [['a-lang','Schlag auf der betonten Silbe'],['schwa','Täler dazwischen']],
    'fremdwoerter':    [['sch','„Chance" wie sch'],['ch-ich','„Chemie" wie ich-Laut'],['k-g','„Charakter" wie k']]
  };

  /* Geometrie, alles im Bild 0 0 220 250. Der Kopf schaut nach links.
     Feste Punkte: Oberlippe bei y=126, Mundöffnung ab x=62,
     harter Gaumen von x=84 bis x=140, weicher Gaumen bis zum Zäpfchen bei x=162. */
  var OBEN = 126;              // Unterkante der Oberlippe / obere Zähne
  var MUND_X = 64;             // vorderer Rand des Mundraums

  function mundBild(lautId, groesse) {
    var s = ST[lautId];
    if (!s) return '';
    var g = groesse || 240;
    var oeff = 8 + s.kiefer * 44;      // wie weit der Kiefer sinkt
    var kY = OBEN + oeff;              // Höhe der Unterlippe / unteren Zähne
    var bodenY = kY + 20;              // Mundboden, sinkt mit dem Kiefer

    // Zungenmasse: x 0 = vorn, 1 = hinten  ·  y 0 = unten, 1 = oben
    var zx = 96 + s.zunge.x * 66;
    var zy = bodenY - 6 - s.zunge.y * (bodenY - OBEN - 10);
    // Zungenspitze direkt hinter den Zähnen
    var spX = MUND_X + 16;
    var spY = bodenY - 4 - s.spitze * (bodenY - OBEN - 6);

    var zunge =
      '<path class="mb-zunge" d="M' + spX + ' ' + spY
      + ' Q' + (zx - 18) + ' ' + zy + ' ' + zx + ' ' + zy
      + ' Q' + (zx + 30) + ' ' + (zy + 4) + ' ' + (zx + 40) + ' ' + (zy + 22)
      + ' L' + (zx + 40) + ' ' + (bodenY + 2)
      + ' Q' + (zx - 20) + ' ' + (bodenY + 10) + ' ' + spX + ' ' + (bodenY - 2)
      + ' Z" fill="#E8798C" stroke="#CF5F73" stroke-width="2" stroke-linejoin="round"/>';

    // Lippen sitzen genau am vorderen Rand des Mundraums
    var lm = (OBEN + kY) / 2;
    var lippen;
    if (s.lippen === 'rund') {
      lippen = '<ellipse cx="' + (MUND_X - 4) + '" cy="' + lm + '" rx="7.5" ry="' + Math.max(8, oeff / 2 + 3)
             + '" fill="#FCEFE4" stroke="#C9455E" stroke-width="6.5"/>'
             + '<path d="M' + (MUND_X - 12) + ' ' + (lm - 12) + ' q-6 12 0 24" stroke="#C9455E" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".55"/>';
    } else if (s.lippen === 'zusammen') {
      lippen = '<path d="M' + (MUND_X - 10) + ' ' + lm + ' q10 -1 18 0" stroke="#C9455E" stroke-width="10" stroke-linecap="round" fill="none"/>';
    } else if (s.lippen === 'zaehne') {
      lippen = '<path d="M' + (MUND_X - 2) + ' ' + (OBEN - 5) + ' l14 0" stroke="#fff" stroke-width="8" stroke-linecap="round"/>'
             + '<path d="M' + (MUND_X - 12) + ' ' + (OBEN + 6) + ' q12 7 22 1" stroke="#C9455E" stroke-width="8" stroke-linecap="round" fill="none"/>';
    } else if (s.lippen === 'breit') {
      lippen = '<path d="M' + (MUND_X - 14) + ' ' + (OBEN - 3) + ' q10 -5 20 -3" stroke="#C9455E" stroke-width="6" stroke-linecap="round" fill="none"/>'
             + '<path d="M' + (MUND_X - 14) + ' ' + (kY + 3) + ' q10 5 20 3" stroke="#C9455E" stroke-width="6" stroke-linecap="round" fill="none"/>';
    } else {
      lippen = '<path d="M' + (MUND_X - 12) + ' ' + (OBEN - 2) + ' q10 -3 18 0" stroke="#C9455E" stroke-width="6.5" stroke-linecap="round" fill="none"/>'
             + '<path d="M' + (MUND_X - 12) + ' ' + (kY + 2) + ' q10 3 18 0" stroke="#C9455E" stroke-width="6.5" stroke-linecap="round" fill="none"/>';
    }

    var luft = '';
    if (s.luft) {
      var lx = s.luft === 'vorn' ? 88 : s.luft === 'mitte' ? 118 : s.luft === 'nase' ? 150 : 156;
      var ly = s.luft === 'nase' ? 104 : (OBEN + oeff / 2 + 4);
      var weg = s.luft === 'nase'
        ? 'M' + lx + ' ' + ly + ' Q' + (lx - 40) + ' ' + (ly - 16) + ' 62 82'
        : 'M' + lx + ' ' + ly + ' Q' + (lx - 26) + ' ' + (ly - 4) + ' ' + (MUND_X - 14) + ' ' + (ly - 2);
      luft = '<path class="mb-luft" d="' + weg + '" stroke="#1B9BC0" stroke-width="3.2" fill="none" '
           + 'stroke-linecap="round" stroke-dasharray="5 7"/>';
    }

    var stimme = s.stimme
      ? '<g class="mb-stimme"><path d="M158 208 q7 -7 14 0 q7 7 14 0" stroke="#D83636" stroke-width="3.2" fill="none" stroke-linecap="round"/>'
        + '<circle cx="152" cy="208" r="2.6" fill="#D83636"/></g>'
      : '';

    return '<svg class="mundbild" viewBox="0 0 220 250" width="' + g + '" height="' + Math.round(g * 250 / 220) + '" '
      + 'role="img" aria-label="Mundstellung von der Seite">'
      + '<defs><clipPath id="mk' + lautId.replace(/[^a-z0-9]/gi, '') + '">'
      + '<path d="M' + MUND_X + ' ' + (OBEN - 4) + ' L176 ' + (OBEN - 12) + ' L182 250 L' + MUND_X + ' 250 Z"/>'
      + '</clipPath></defs>'
      /* Kopf im Profil, Blick nach links */
      + '<path d="M78 16 Q120 2 152 28 Q188 56 190 108 Q191 148 172 168 Q164 178 163 194 L163 248 '
      + 'L74 248 L74 214 Q60 208 58 194 Q57 182 66 176 Q52 172 50 160 Q49 150 60 146 '
      + 'L58 132 Q40 126 34 114 Q30 106 44 100 L56 66 Q62 34 78 16 Z" '
      + 'fill="#FCEFE4" stroke="#E9D6C4" stroke-width="2" stroke-linejoin="round"/>'
      /* Nasenloch */
      + '<path d="M42 112 q7 4 12 1" stroke="#DEB79B" stroke-width="2.4" fill="none" stroke-linecap="round"/>'
      /* Mundraum als heller Innenraum */
      + '<path d="M' + MUND_X + ' ' + (OBEN - 2) + ' Q110 ' + (OBEN - 14) + ' 148 ' + (OBEN - 4)
      + ' Q166 ' + (OBEN + 6) + ' 166 ' + (OBEN + 34) + ' L166 ' + (bodenY + 30)
      + ' Q110 ' + (bodenY + 26) + ' ' + MUND_X + ' ' + (kY + 2) + ' Z" fill="#F7DEDE"/>'
      /* harter Gaumen */
      + '<path d="M84 ' + (OBEN - 3) + ' Q112 ' + (OBEN - 15) + ' 140 ' + (OBEN - 5) + '" '
      + 'fill="none" stroke="#E5A9B4" stroke-width="5.5" stroke-linecap="round"/>'
      /* weicher Gaumen und Zäpfchen */
      + '<path d="M140 ' + (OBEN - 5) + ' Q158 ' + (OBEN + 2) + ' 162 ' + (OBEN + 20) + '" '
      + 'fill="none" stroke="#DE9AA8" stroke-width="5" stroke-linecap="round"/>'
      + '<path d="M162 ' + (OBEN + 20) + ' q3 9 -1 14" stroke="#D98E9C" stroke-width="4.5" stroke-linecap="round" fill="none"/>'
      /* Rachen */
      + '<path d="M170 ' + (OBEN + 36) + ' q5 30 -3 58" stroke="#EBC9CE" stroke-width="3" fill="none" stroke-linecap="round"/>'
      /* Zunge, am Mundraum beschnitten */
      + '<g clip-path="url(#mk' + lautId.replace(/[^a-z0-9]/gi, '') + ')">' + zunge + '</g>'
      /* Zähne oben und unten */
      + '<path d="M' + (MUND_X + 4) + ' ' + (OBEN - 4) + ' l0 9" stroke="#fff" stroke-width="8" stroke-linecap="round"/>'
      + '<path d="M' + (MUND_X + 4) + ' ' + (kY + 2) + ' l0 -9" stroke="#fff" stroke-width="8" stroke-linecap="round"/>'
      /* Unterkiefer */
      + '<path d="M' + (MUND_X + 2) + ' ' + (bodenY + 8) + ' Q112 ' + (bodenY + 20) + ' 158 ' + (bodenY + 6) + '" '
      + 'fill="none" stroke="#E0BFA6" stroke-width="3" stroke-linecap="round"/>'
      + luft + lippen + stimme
      + '</svg>';
  }

  window.mundBild = mundBild;
  window.mundStellungen = ST;
  window.mundLektion = LEKTION;

  /* Fertiger Block für eine Lektion: alle Stellungen mit Beschriftung */
  window.mundBlock = function (lektionId, esc) {
    var liste = LEKTION[lektionId];
    if (!liste || !liste.length) return '';
    var E = esc || function (x) { return String(x == null ? '' : x); };
    return '<div class="mb-reihe">' + liste.map(function (p) {
      var s = ST[p[0]];
      if (!s) return '';
      return '<figure class="mb-karte">'
        + mundBild(p[0], 190)
        + '<figcaption><b>' + E(p[1]) + '</b><span>' + E(s.wie) + '</span></figcaption>'
        + '</figure>';
    }).join('') + '</div>';
  };

  /* Stil — wird einmal eingehängt */
  window.mundStil = function () {
    if (document.getElementById('mbStil')) return;
    var st = document.createElement('style');
    st.id = 'mbStil';
    st.textContent = [
      '.mb-reihe{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:14px;margin-top:14px}',
      '.mb-karte{margin:0;background:#fff;border:1px solid #EBE7DF;border-radius:18px;padding:12px;text-align:center}',
      '.mb-karte svg{display:block;margin:0 auto;max-width:100%;height:auto}',
      '.mb-karte figcaption{margin-top:8px;text-align:left}',
      '.mb-karte figcaption b{display:block;font-size:14px;font-weight:800;margin-bottom:4px;color:#171717}',
      '.mb-karte figcaption span{display:block;font-size:12.5px;line-height:1.5;color:#6E6A63}',
      '.mundbild .mb-luft{animation:mbLuft 1.6s linear infinite}',
      '@keyframes mbLuft{to{stroke-dashoffset:-22}}',
      '.mundbild .mb-stimme{animation:mbStimme 1.1s ease-in-out infinite}',
      '@keyframes mbStimme{0%,100%{opacity:.35;transform:translateY(0)}50%{opacity:1;transform:translateY(-2px)}}',
      '.mb-legende{display:flex;gap:16px;flex-wrap:wrap;margin-top:12px;font-size:12px;color:#6E6A63}',
      '.mb-legende span{display:inline-flex;align-items:center;gap:6px}',
      '.mb-legende i{width:16px;height:3px;border-radius:2px;display:inline-block}'
    ].join('\n');
    document.head.appendChild(st);
  };

  window.mundLegende = function () {
    return '<div class="mb-legende">'
      + '<span><i style="background:#E8798C"></i>Zunge</span>'
      + '<span><i style="background:#E5A9B4"></i>Gaumen</span>'
      + '<span><i style="background:#1B9BC0"></i>Luftstrom</span>'
      + '<span><i style="background:#D83636"></i>Stimme schwingt mit</span>'
      + '</div>';
  };
})();
