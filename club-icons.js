/* deutschoderwas club — Icon-Veredelung
   Ersetzt dekorative UI-Emoji im Inhalt (KPI-Kacheln, Kopfzeile, Buttons …)
   durch saubere SVG-Icons. Warme Emoji in Begrüßungen/Texten bleiben erhalten.
   Ändert NUR die Darstellung — kein Inhalt, keine Logik, keine Datenverbindung. */
(function(){
  'use strict';
  var S = {
    ticket:"<path d='M3 8.5A1.5 1.5 0 0 1 4.5 7h15A1.5 1.5 0 0 1 21 8.5V10a2 2 0 0 0 0 4v1.5A1.5 1.5 0 0 1 19.5 17h-15A1.5 1.5 0 0 1 3 15.5V14a2 2 0 0 0 0-4z'/><path d='M15 7v10'/>",
    flame:"<path d='M12 3s5 3.5 5 8a5 5 0 0 1-10 0c0-1.5.8-2.8.8-2.8S9 9 12 3z'/>",
    head:"<path d='M4 13v-1a8 8 0 0 1 16 0v1'/><rect x='3' y='13' width='4' height='6' rx='2'/><rect x='17' y='13' width='4' height='6' rx='2'/>",
    cards:"<rect x='4' y='5' width='13' height='15' rx='2.5'/><path d='M8 5V3.5h9A2.5 2.5 0 0 1 19.5 6v11'/>",
    cal:"<rect x='3' y='4.5' width='18' height='16' rx='2.5'/><path d='M3 9h18M8 2.5v4M16 2.5v4'/>",
    folder:"<path d='M3 7.5A2 2 0 0 1 5 5.5h4l2 2.5h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/>",
    trophy:"<path d='M8 4h8v4a4 4 0 0 1-8 0z'/><path d='M8 5H5v2a3 3 0 0 0 3 3M16 5h3v2a3 3 0 0 1-3 3'/><path d='M10 12.5h4M9 20h6M12 12.5V20'/>",
    mail:"<rect x='3' y='5' width='18' height='14' rx='2.5'/><path d='m4 7 8 6 8-6'/>",
    mic:"<rect x='9' y='2.5' width='6' height='11' rx='3'/><path d='M5 11a7 7 0 0 0 14 0M12 18v3.5'/>",
    route:"<circle cx='6' cy='18' r='2.5'/><circle cx='18' cy='6' r='2.5'/><path d='M8.5 18H14a3.5 3.5 0 0 0 0-7H10a3.5 3.5 0 0 1 0-7h5.5'/>",
    wallet:"<rect x='3' y='6' width='18' height='13' rx='2.5'/><path d='M3 10h18M17 14.5h.01'/>",
    bell:"<path d='M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9'/><path d='M13.7 21a2 2 0 0 1-3.4 0'/>",
    search:"<circle cx='11' cy='11' r='7'/><path d='M21 21l-4-4'/>",
    video:"<rect x='3' y='6' width='13' height='12' rx='2.5'/><path d='m16 10 5-3v10l-5-3z'/>",
    book:"<path d='M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5z'/><path d='M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5A1.5 1.5 0 0 1 20 20.5z'/>",
    users:"<circle cx='9' cy='8' r='3.2'/><path d='M3.5 20a5.5 5.5 0 0 1 11 0'/><path d='M16 5.2a3.2 3.2 0 0 1 0 5.6M20.5 20a5.2 5.2 0 0 0-4-5'/>",
    plus:"<path d='M12 5v14M5 12h14'/>",
    chart:"<path d='M4 20V4M4 20h16'/><path d='M8 16v-4M12.5 16V8M17 16v-6'/>",
    target:"<circle cx='12' cy='12' r='8.5'/><circle cx='12' cy='12' r='4.5'/><circle cx='12' cy='12' r='.8' fill='currentColor'/>",
    edit:"<path d='M4 20h4L19 9l-4-4L4 16z'/><path d='M14 6l4 4'/>",
    clock:"<circle cx='12' cy='12' r='8.5'/><path d='M12 7.5V12l3 2'/>",
    play:"<path d='M8 5v14l11-7z' fill='currentColor' stroke='none'/>",
    chat:"<path d='M4 5.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H9l-4 3.5V16.5H4A1.5 1.5 0 0 1 2.5 15V7A1.5 1.5 0 0 1 4 5.5Z'/>",
    home:"<path d='M3 11.5 12 4l9 7.5'/><path d='M5 10v10h14V10'/><path d='M9.5 20v-6h5v6'/>",
    bulb:"<path d='M9 18h6M10 21h4'/><path d='M12 3a6 6 0 0 0-4 10.5c.8.7 1 1 1 2.5h6c0-1.5.2-1.8 1-2.5A6 6 0 0 0 12 3z'/>",
    volume:"<path d='M4 9v6h4l5 4V5L8 9z'/><path d='M17 8a5 5 0 0 1 0 8'/>",
    menu:"<path d='M4 7h16M4 12h16M4 17h16'/>",
    doc:"<path d='M6 3h8l4 4v14H6z'/><path d='M14 3v4h4'/>"
  };
  /* Emoji (ohne Variations-Selektor) → Icon-Name.
     Warme Emoji (👋 💪 ⭐ 🎉 ❤️ 🙌 😊 …) sind bewusst NICHT gelistet und bleiben. */
  var MAP = {
    '🎟':'ticket','🔥':'flame','🎧':'head','🃏':'cards','📅':'cal','🗓':'cal',
    '📚':'folder','🏆':'trophy','✉':'mail','🎤':'mic','🪜':'route','💳':'wallet',
    '🔔':'bell','🔍':'search','📹':'video','🎬':'video','📘':'book','🤝':'users',
    '➕':'plus','📊':'chart','📈':'chart','🎯':'target','📝':'edit','✏':'edit',
    '⏱':'clock','⏰':'clock','🕐':'clock','👥':'users','▶':'play','💬':'chat',
    '🏠':'home','🎮':'book','🗣':'mic','🎙':'mic','🔊':'volume','💡':'bulb','☰':'menu',
    '📄':'doc','📋':'doc','📖':'book','🗨':'chat','🔖':'ticket','🎨':'edit'
  };

  function svg(name){
    return "<svg class='dow-ic' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'>"+S[name]+"</svg>";
  }

  // Emoji-Zeichen (inkl. optionalem Variations-Selektor ️/U+FE0F)
  var chars = Object.keys(MAP);
  var re = new RegExp('(' + chars.map(function(c){return c.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}).join('|') + ')\\uFE0F?', 'gu');

  var SKIP = {SCRIPT:1, STYLE:1, TEXTAREA:1, INPUT:1, SVG:1};
  function hasEmoji(s){ re.lastIndex = 0; return re.test(s); }

  function processTextNode(t){
    var txt = t.nodeValue;
    if(!txt || !hasEmoji(txt)) return;
    re.lastIndex = 0;
    var parent = t.parentNode; if(!parent) return;
    var frag = document.createDocumentFragment();
    var last = 0, m;
    while((m = re.exec(txt))){
      if(m.index > last) frag.appendChild(document.createTextNode(txt.slice(last, m.index)));
      var name = MAP[m[1]];
      var span = document.createElement('span');
      span.className = 'dow-icw';
      span.innerHTML = svg(name);
      frag.appendChild(span);
      last = m.index + m[0].length;
    }
    if(last < txt.length) frag.appendChild(document.createTextNode(txt.slice(last)));
    parent.replaceChild(frag, t);
  }

  function walk(root){
    if(!root) return;
    // Sidebar-Icons macht bereits das CSS-Theme — hier auslassen
    var tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function(n){
        var p = n.parentNode;
        if(!p || SKIP[p.nodeName]) return NodeFilter.FILTER_REJECT;
        if(p.closest && p.closest('.sidebar, nav.sidebar, .dow-icw')) return NodeFilter.FILTER_REJECT;
        return hasEmoji(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [], n;
    while((n = tw.nextNode())) nodes.push(n);
    nodes.forEach(processTextNode);
  }

  function ensureStyle(){
    if(document.getElementById('dow-ic-style')) return;
    var st = document.createElement('style'); st.id = 'dow-ic-style';
    st.textContent =
      ".dow-icw{display:inline-flex;align-items:center;justify-content:center;vertical-align:-.16em}"+
      ".dow-ic{width:1.05em;height:1.05em;display:inline-block}"+
      ".kl .dow-icw,.kpi .dow-icw{margin-right:5px}";
    document.head.appendChild(st);
  }

  /* ---- Üben-Bereich: echte Fotos statt Gaming-Gradient/Emoji ----
     Ändert NUR die Darstellung: fügt pro Themen-Karte ein echtes Foto ein.
     Die ueben.js-Logik/Daten bleiben unberührt. */
  var UB_PHOTO = {
    arbeit:3184298, bildung:289737, einkaufen:3962285, essen:1267320, gefuehle:1024311,
    gesundheit:4173251, medien:607812, natur:414612, persoenlichkeit:3775087, redewendungen:7516363,
    reisen:2007401, stadt:2246476, 'starke-adjektive':1181533, 'typisch-deutsch':2506923, wohnen:1648776,
    adjektivdeklination:4145153, genitiv:256541, 'indirekte-rede':7516363, konjunktiv2:3182812, konnektoren:4009401,
    nebensaetze:3183197, 'passiv-praesens':4145153, 'passiv-vergangenheit':256541, 'perfekt-praeteritum':3182812,
    relativsaetze:4009401, 'temporale-nebensaetze':3183197, wechselpraepositionen:4145153,
    ch:3771089, r:1181524, 's-z-ss':3775087, satzmelodie:1571459, umlaute:7516363, 'v-w-f':3771089,
    vokale:1181524, wortakzent:3775087, shadowing:3771089
  };
  var UB_FB = [3184360,3184291,1181524,958545,264636,4586708,338936,346885,466685,774909,1648776,2007401];
  function ubImg(id){ return 'https://images.pexels.com/photos/'+id+'/pexels-photo-'+id+'.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=520&h=300'; }
  var ubI = 0;
  function ubPhotos(){
    var cards = document.querySelectorAll('.ub-tcard');
    cards.forEach(function(card){
      var band = card.querySelector('.ub-band');
      if(!band || band.dataset.ph) return; band.dataset.ph = '1';
      var btn = card.querySelector('.ub-go2');
      var m = btn && (btn.getAttribute('onclick')||'').match(/ubStart\(\s*'([^']*)'\s*,\s*'([^']*)'/);
      var id = m ? m[2] : null;
      var ph = (id && UB_PHOTO[id]) || UB_FB[ubI % UB_FB.length]; ubI++;
      var img = document.createElement('img');
      img.className = 'ub-photo'; img.loading = 'lazy'; img.alt = '';
      img.src = ubImg(ph);
      img.onerror = function(){ this.style.display='none'; };
      band.insertBefore(img, band.firstChild);
    });
  }

  /* ---- Podcast-Bereich (neuer Menüpunkt + Ansicht) ----
     Fügt einen „Podcast"-Eintrag in die Sidebar + eine eigene Ansicht ein,
     ohne die konto.html-Logik anzufassen. Inhalt kommt, sobald Folgen da sind. */
  // Podcast-Folgen — einfach hier ergänzen (nach Niveau). file/cover liegen unter /podcast/.
  var PODCAST_EPISODES = [
    { level:'A2', day:'Montag', title:'Die Sommerferien sind da', file:'/podcast/a2-montag-sommerferien.m4a', cover:'/podcast/covers/a2-sommerferien.jpg', dauer:'ca. 5 Min', transcript: "<p>Die Sommerferien sind da. Sechs Wochen keine Schule. Okay, kannst du dir das vorstellen? Kein Wecker am Morgen, keine Hausaufgaben, keine Prüfungen – nur Sonne, Freizeit und Eis. Für viele Kinder in Deutschland beginnt genau jetzt diese schöne Zeit: die Sommerferien. Heute reden wir zusammen darüber.</p><p>Es ist Juli. In vielen Bundesländern beginnen jetzt die Sommerferien. Die Schule ist zu Ende. Die Kinder haben frei, sechs Wochen lang. Das ist eine lange Zeit. Die Kinder freuen sich sehr. Und die Eltern? Die Eltern freuen sich auch. Aber manchmal fragen sie: Was machen wir sechs Wochen lang?</p><p>Was machen die Menschen in den Ferien? Viele Familien fahren in den Urlaub. Manche fahren ans Meer, zum Beispiel an die Nordsee oder an die Ostsee. Dort ist es schön. Man kann schwimmen, man kann eine Sandburg bauen, man kann am Strand liegen. Andere Familien fahren in die Berge. In den Bergen ist die Luft frisch. Man kann wandern und die Natur sehen. Manche fahren ins Ausland – nach Italien, nach Spanien oder nach Kroatien.</p><p>Was nimmt man mit in den Urlaub? Man packt einen Koffer. In den Koffer kommen T-Shirts, eine kurze Hose, die Badehose und natürlich die Sonnencreme. Sonnencreme ist sehr wichtig. Die Sonne ist im Sommer stark. Vergiss die Sonnencreme nicht!</p><p>Aber nicht alle fahren weg. Viele Menschen bleiben zu Hause. Das ist auch schön. Man sagt dazu ein lustiges Wort: „Urlaub auf Balkonien“. Das ist ein Witz. Balkonien ist kein echtes Land. Es bedeutet: Ich mache Urlaub auf meinem Balkon.</p><p>Warum bleiben die Menschen zu Hause? Na ja, Reisen ist oft teuer, und zu Hause ist es auch gemütlich. Was kann man zu Hause machen? Sehr viel! Man kann ins Schwimmbad gehen, man kann ein Eis essen – Schokolade oder Vanille, was magst du? Man kann im Park grillen, man kann Freunde treffen oder man kann einfach lange schlafen. Ausschlafen ist auch ein bisschen wie Urlaub, oder?</p><p>Ich mache jetzt mit dir eine kleine Übung. Ich sage einen Satz und du wiederholst ihn langsam. Bist du bereit? – Ich fahre ans Meer. Sehr gut. – Ich fahre in die Berge. – Ich bleibe zu Hause. Toll, das machst du prima!</p><p>Jetzt habe ich eine Frage an dich: Was machst du diesen Sommer? Fährst du weg oder bleibst du zu Hause? Und wenn du reist – wohin? Schreib mir gerne unten in die Kommentare. Ich lese alles.</p><p>Hör dir zum Schluss noch einmal die wichtigen Wörter an: die Ferien … die Ferien. Der Urlaub … der Urlaub. Das Meer … das Meer. Die Berge … die Berge. Der Koffer … der Koffer. Die Sonnencreme … die Sonnencreme. Diese Wörter brauchst du im Sommer sehr, sehr oft.</p><p>Danke fürs Zuhören! Genieß den Sommer, trink genug Wasser – und bis zum nächsten Mal. Tschüssi!</p><p style=\"margin-top:12px\"><b>Wörter des Tages:</b> Die Sommerferien · der Urlaub · der Koffer · die Sonnencreme · ausschlafen</p>" }
  ];
  var LVL_COLORS = { A2:'#2DD4BF', B1:'#E0A500', B2:'#DD0000', C1:'#7A3E8F' };
  function podcastHTML(){
    var head = '<div class="pagehead"><h1>Julias 5-Minuten-Podcast <span style="color:#0A6E7A">für tägliches Deutsch</span></h1>'+
      '<p>Kurze Folgen für jeden Tag — echte Julia, keine KI. Wähl dein Niveau:</p></div>';
    var levels = ['A2','B1','B2','C1'];
    var pills = '<div class="pc-filter"><button class="pc-pill active" data-lvl="all">Alle</button>'+
      levels.map(function(l){ return '<button class="pc-pill" data-lvl="'+l+'"><span class="pc-dot" style="background:'+(LVL_COLORS[l]||'#2DD4BF')+'"></span>'+l+'</button>'; }).join('')+'</div>';
    var esc = function(t){ return String(t==null?'':t).replace(/[<>&"]/g,function(c){return ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]);}); };
    var items = PODCAST_EPISODES.map(function(e){
      return '<div class="pc-ep" data-lvl="'+esc(e.level)+'">'+
        '<div class="pc-cover" style="background-image:url(\''+e.cover+'\')"><span class="pc-lv">'+esc(e.level)+'</span></div>'+
        '<div class="pc-body"><div class="pc-day"><span class="pc-lvtag" style="background:'+(LVL_COLORS[e.level]||'#2DD4BF')+'">'+esc(e.level)+'</span>'+esc(e.day)+(e.dauer?' · '+esc(e.dauer):'')+'</div>'+
        '<h3 class="pc-title">'+esc(e.title)+'</h3>'+
        '<audio controls preload="none" src="'+e.file+'"></audio>'+(e.transcript ? '<button class="pc-tbtn" type="button">📄 Mitlesen</button><div class="pc-transcript" hidden>'+e.transcript+'</div>' : '<div class="pc-tnote">📄 Transkript folgt</div>')+'</div></div>';
    }).join('');
    var soon = '<div class="pc-soon" data-lvl="soon">🎙️ Jeden Tag kommt eine neue Folge dazu — bald auch für B1, B2 &amp; C1.</div>';
    return head + pills + '<div class="pc-list">' + items + soon + '</div>';
  }
  function wirePodcastFilter(sec){
    var pills = sec.querySelectorAll('.pc-pill');
    pills.forEach(function(pl){
      pl.addEventListener('click', function(){
        pills.forEach(function(x){ x.classList.remove('active'); }); pl.classList.add('active');
        var lvl = pl.getAttribute('data-lvl');
        sec.querySelectorAll('.pc-ep').forEach(function(ep){
          ep.style.display = (lvl==='all' || ep.getAttribute('data-lvl')===lvl) ? '' : 'none';
        });
        var soon = sec.querySelector('.pc-soon'); if(soon) soon.style.display = (lvl==='all') ? '' : 'none';
      });
    });
    sec.querySelectorAll('.pc-tbtn').forEach(function(btn){
      btn.addEventListener('click', function(){
        var panel = btn.nextElementSibling;
        if(panel.hasAttribute('hidden')){ panel.removeAttribute('hidden'); btn.textContent = '📄 Transkript ausblenden'; }
        else { panel.setAttribute('hidden',''); btn.textContent = '📄 Mitlesen'; }
      });
    });
  }

  function setupPodcast(){
    var vk = document.querySelector('.navlink[data-view="videokurse"]');
    if(!vk || !vk.parentNode) return;
    var b = document.querySelector('.navlink[data-view="podcast"]');
    if(!b){
      b = document.createElement('button');
      b.className = 'navlink'; b.setAttribute('data-view','podcast');
      b.innerHTML = '<span class="ic">🎙️</span>Podcast<span class="neu">NEU</span>';
      vk.parentNode.insertBefore(b, vk.nextSibling);
    }
    var sec = document.getElementById('v-podcast');
    if(!sec){
      var anchor = document.getElementById('v-dashboard');
      if(anchor && anchor.parentNode){
        sec = document.createElement('section');
        sec.className = 'view'; sec.id = 'v-podcast';
        sec.innerHTML = podcastHTML(); wirePodcastFilter(sec);
        anchor.parentNode.appendChild(sec);
      }
    }
    if(b && sec && !b.dataset.wired){
      b.dataset.wired = '1';
      b.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelectorAll('.view.active').forEach(function(v){ v.classList.remove('active'); });
        sec.classList.add('active');
        document.querySelectorAll('.navlink[data-view]').forEach(function(n){ n.classList.toggle('active', n===b); });
        window.scrollTo(0,0);
      });
    }
    // Andere Nav-Klicks: Podcast-Ansicht wieder ausblenden (Router kennt sie nicht)
    document.querySelectorAll('.navlink[data-view]').forEach(function(n){
      if(n===b || n.dataset.pcw) return; n.dataset.pcw = '1';
      n.addEventListener('click', function(){ var s=document.getElementById('v-podcast'); if(s) s.classList.remove('active'); if(b) b.classList.remove('active'); });
    });
  }

  var scheduled = false, obs = null;
  function run(){
    scheduled = false;
    if(obs) obs.disconnect();
    try{ walk(document.body); }catch(e){}
    try{ ubPhotos(); }catch(e){}
    try{ setupPodcast(); }catch(e){}
    if(obs) obs.observe(document.body, {childList:true, subtree:true});
  }
  function schedule(){ if(!scheduled){ scheduled = true; (window.requestAnimationFrame||setTimeout)(run); } }

  function start(){
    ensureStyle();
    run();
    obs = new MutationObserver(schedule);
    obs.observe(document.body, {childList:true, subtree:true});
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
