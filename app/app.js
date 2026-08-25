/* ============================================================
   deutschoderwas — die App
   Eigene Hülle, gemeinsame Inhalte mit dem Club: dieselbe
   Datenbank, dieselben Übungen, derselbe Lernpfad.
   ============================================================ */
window.ap = (function () {
  var sb = null, user = null, profil = {};

  var REITER = [
    { id: 'start',     ic: '🏠', t: 'Start' },
    { id: 'lernen',    ic: '🎓', t: 'Lernen' },
    { id: 'sprechen',  ic: '🎙️', t: 'Sprechen' },
    { id: 'community', ic: '💬', t: 'Community' },
    { id: 'medien',    ic: '▶️', t: 'Medien' }
  ];

  /* Speicher pro Person — derselbe Schlüssel wie im Club,
     damit der Fortschritt in beiden derselbe ist. */
  window.lsKey = function (k) { return 'sc_' + (user ? user.id : 'anon') + '_' + k; };
  window.lsGet = function (k, d) { try { return JSON.parse(localStorage.getItem(lsKey(k))) ?? d; } catch (e) { return d; } };
  window.lsSet = function (k, v) { try { localStorage.setItem(lsKey(k), JSON.stringify(v)); } catch (e) {} };
  window.toast = function (t) {
    var d = document.createElement('div');
    d.textContent = t;
    d.style.cssText = 'position:fixed;left:50%;bottom:80px;transform:translateX(-50%);background:#14181B;' +
      'color:#fff;padding:11px 17px;border-radius:12px;font-size:14px;z-index:9999;max-width:88%';
    document.body.appendChild(d);
    setTimeout(function () { d.remove(); }, 2600);
  };

  function E(s) { return String(s == null ? '' : s).replace(/[<>&"]/g, function (c) {
    return ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[c]; }); }

  /* ---------- Start ---------- */
  function renderStart() {
    var ub = lsGet('ub', {}) || {};
    var xp = ub.xp || 0, serie = ub.streak || 0;
    var vorname = (profil.name || '').split(' ')[0] || 'du';
    var el = document.getElementById('s-start');

    el.innerHTML =
      '<div class="kopfzeile"><h1>Hallo ' + E(vorname) + '!</h1></div>' +
      '<div class="serie"><span class="fl">🔥</span>' +
        '<span><b>' + (serie ? serie + ' Tage am Stück' : 'Starte deine Serie') + '</b>' +
        '<small>' + (serie ? 'Heute schon dabei' : 'Eine Runde reicht') + '</small></span>' +
        '<span class="punkte">⭐ ' + xp + '</span></div>' +
      '<div id="startWeiter"></div>' +
      '<div class="ueber">Womit weiter?</div>' +
      '<div class="kacheln">' +
        '<button class="kachel" onclick="ap.zeige(\'sprechen\')"><span class="kb">🎙️</span>' +
          '<span class="kt"><b>Sprechen</b><small>Mit Amanda üben</small></span></button>' +
        '<button class="kachel" onclick="ap.zeige(\'medien\')"><span class="kb">🎧</span>' +
          '<span class="kt"><b>Podcast</b><small>Hören &amp; mitlesen</small></span></button>' +
        '<button class="kachel" onclick="ap.zeige(\'community\')"><span class="kb">💬</span>' +
          '<span class="kt"><b>Community</b><small>Fragen &amp; Antworten</small></span></button>' +
        '<button class="kachel" onclick="ap.zeige(\'lernen\')"><span class="kb">🎓</span>' +
          '<span class="kt"><b>Lernpfad</b><small>Block für Block</small></span></button>' +
      '</div>';

    // Die Weiterlernen-Karte kommt aus dem Lernpfad — eine Quelle für beides.
    var w = document.getElementById('startWeiter');
    if (window.renderLernpfad) {
      var tmp = document.createElement('div');
      tmp.id = 'v-lernpfad'; tmp.style.display = 'none';
      document.body.appendChild(tmp);
      renderLernpfad();
      var karte = tmp.querySelector('.lp-weiter');
      if (karte) w.appendChild(karte);
      tmp.remove();
    }
  }

  /* ---------- Lernen ---------- */
  var bereich = 'alltag';
  function renderLernen() {
    var el = document.getElementById('s-lernen');
    el.innerHTML =
      '<div class="kopfzeile"><h1>Lernen</h1><p>Erst das Ziel, dann das Niveau.</p></div>' +
      '<div class="weiche">' +
        '<button class="' + (bereich === 'alltag' ? 'an' : '') + '" onclick="ap.bereich(\'alltag\')">' +
          '<b>🏠 Alltag</b><small>Amt, Arzt, Einkaufen</small></button>' +
        '<button class="' + (bereich === 'beruf' ? 'an' : '') + '" onclick="ap.bereich(\'beruf\')">' +
          '<b>💼 Beruf</b><small>Büro, Bewerbung, Pflege</small></button>' +
      '</div>' +
      '<button class="pruefknopf" onclick="ap.bereich(\'pruefung\')">' +
        '<b>🏆 Für die Prüfung lernen</b><small>telc · Goethe · DTZ — Hören, Lesen, Schreiben, Sprechen</small></button>' +
      '<div id="v-lernpfad"></div>';

    if ((bereich === 'alltag' || bereich === 'beruf') && window.lpBereich) lpBereich(bereich);
    else document.getElementById('v-lernpfad').innerHTML =
      '<div class="hinweis">Der Prüfungsbereich wird gerade gebaut.<br>' +
      'Er bekommt die vier Teile Hören, Lesen, Schreiben und Sprechen — und einen Countdown bis zu deinem Termin.</div>';
  }

  /* ---------- Sprechen ---------- */
  var ORTE = [
    { e: '🏪', t: 'Supermarkt', th: 'einkaufen' }, { e: '☕', t: 'Café', th: 'essen' },
    { e: '🩺', t: 'Beim Arzt', th: 'gesundheit' }, { e: '🏛️', t: 'Amt', th: 'amt-b1' },
    { e: '🏠', t: 'Wohnung', th: 'wohnen' },       { e: '🚆', t: 'Bahnhof', th: 'reisen' }
  ];
  function renderSprechen() {
    document.getElementById('s-sprechen').innerHTML =
      '<div class="kopfzeile"><h1>Sprechen</h1><p>Such dir einen Ort — Amanda spielt mit.</p></div>' +
      '<div class="kacheln">' + ORTE.map(function (o) {
        return '<button class="kachel" onclick="ap.sprich(\'' + o.th + '\',\'' + o.t + '\')">' +
          '<span class="kb">' + o.e + '</span><span class="kt"><b>' + o.t + '</b>' +
          '<small>Rollenspiel</small></span></button>';
      }).join('') + '</div>';
  }

  /* ---------- Community ---------- */
  function renderCommunityApp() {
    document.getElementById('s-community').innerHTML =
      '<div class="kopfzeile"><h1>Community</h1><p>Fragen, Antworten, Nachrichten.</p></div>' +
      '<div class="filter"><button class="an">Alle Themen</button><button>Nachrichten</button></div>' +
      '<div id="comListe" class="laedt">Beiträge werden geladen …</div>';
    if (!sb) return;
    sb.from('community_messages')
      .select('id,text,created_at,kanal,profiles(name)')
      .order('created_at', { ascending: false }).limit(20)
      .then(function (r) {
        var el = document.getElementById('comListe'); if (!el) return;
        var d = r.data || [];
        if (!d.length) { el.className = 'hinweis'; el.textContent = 'Noch keine Beiträge — schreib den ersten.'; return; }
        el.className = '';
        el.innerHTML = d.map(function (m) {
          var wer = (m.profiles && m.profiles.name) || 'Jemand';
          return '<div class="zeile"><span class="rd">' + E(wer.charAt(0).toUpperCase()) + '</span>' +
            '<span><b>' + E(wer) + '</b><small>' + E(String(m.text || '').slice(0, 70)) + '</small></span></div>';
        }).join('');
      }, function () {
        var el = document.getElementById('comListe');
        if (el) { el.className = 'hinweis'; el.textContent = 'Die Beiträge konnten gerade nicht geladen werden.'; }
      });
  }

  /* ---------- Medien ---------- */
  var medTeil = 1;
  function renderMedienApp() {
    var f = (window.PODCASTS || window.PODCASTS_SEED || []).slice()
      .sort(function (a, b) { return String(b.datum || '').localeCompare(String(a.datum || '')); });
    var inhalt;
    if (medTeil === 1) {
      inhalt = f.length ? f.map(function (p) {
        return '<a class="zeile" href="../podcast.html#' + E(p.id) + '">' +
          '<span class="rd">▶</span><span><b>' + E(p.titel || 'Folge') + '</b>' +
          '<small>mit Text zum Mitlesen</small></span>' +
          (p.level ? '<span class="stufe">' + E(p.level) + '</span>' : '') + '</a>';
      }).join('') : '<div class="hinweis">Die Folgen werden geladen …</div>';
    } else if (medTeil === 0) {
      inhalt = '<div class="hinweis">Hier kommen deine Reels hin — die kurzen Clips,<br>die sonst im Instagram-Feed verschwinden.</div>';
    } else {
      inhalt = '<div class="hinweis">Platz für die längeren Erklärvideos —<br>mit den passenden Übungen direkt danach.</div>';
    }
    document.getElementById('s-medien').innerHTML =
      '<div class="kopfzeile"><h1>Medien</h1><p>Hören und sehen.</p></div>' +
      '<div class="filter">' +
        ['Reels', 'Podcast', 'Videos'].map(function (n, i) {
          return '<button class="' + (i === medTeil ? 'an' : '') + '" onclick="ap.medien(' + i + ')">' + n + '</button>';
        }).join('') +
      '</div>' + inhalt;
  }



  /* ---------- Sprachwahl beim ersten Start ----------
     Einmal fragen, dann nie wieder. Wer sie spaeter aendern will,
     findet sie im Profil. Genauso macht es Duolingo. */
  var SPRACHLISTE = [
    { k:'en', f:'🇬🇧', n:'English',    h:'I speak English' },
    { k:'tr', f:'🇹🇷', n:'Türkçe',     h:'Türkçe konuşuyorum' },
    { k:'ar', f:'🇸🇦', n:'العربية',    h:'أتحدث العربية' },
    { k:'ru', f:'🇷🇺', n:'Русский',    h:'Я говорю по-русски' },
    { k:'uk', f:'🇺🇦', n:'Українська', h:'Я розмовляю українською' },
    { k:'fa', f:'🇮🇷', n:'فارسی',      h:'من فارسی صحبت می‌کنم' },
    { k:'pl', f:'🇵🇱', n:'Polski',     h:'Mówię po polsku' },
    { k:'ro', f:'🇷🇴', n:'Română',     h:'Vorbesc română' },
    { k:'es', f:'🇪🇸', n:'Español',    h:'Hablo español' },
    { k:'it', f:'🇮🇹', n:'Italiano',   h:'Parlo italiano' }
  ];

  function zeigeSprachwahl() {
    var el = document.getElementById('sprachwahl');
    el.innerHTML =
      '<div class="sw-innen">' +
        '<img src="logo.png" alt="" class="sw-logo">' +
        '<h1>Welche Sprache sprichst du?</h1>' +
        '<p>Dann erklären wir dir neue Wörter in deiner Sprache.</p>' +
        '<div class="sw-liste">' +
          SPRACHLISTE.map(function (s) {
            return '<button onclick="apWaehleSprache(\'' + s.k + '\')">' +
              '<span class="fl">' + s.f + '</span>' +
              '<span class="tx"><b>' + s.n + '</b><small>' + s.h + '</small></span></button>';
          }).join('') +
        '</div>' +
        '<p class="sw-fuss">Du kannst das später im Profil ändern.</p>' +
      '</div>';
    el.classList.add('an');
  }

  window.apWaehleSprache = async function (k) {
    profil.native_language = k;
    if (window.profile) window.profile.native_language = k;
    wortSprache = k;
    document.getElementById('sprachwahl').classList.remove('an');
    try { if (sb && user) await sb.from('profiles').update({ native_language: k }).eq('id', user.id); }
    catch (e) { /* offline: die Wahl gilt trotzdem für diese Sitzung */ }
    ap.zeige('start');
  };

  window.apSpracheAendern = function () { zeigeSprachwahl(); };

  /* ---------- Wörter eines Blocks, mit Muttersprache ---------- */
  var SPRACHNAMEN = { en:'English', es:'Español', ru:'Русский', uk:'Українська', tr:'Türkçe',
                      it:'Italiano', fa:'فارسی', ar:'العربية', pl:'Polski', ro:'Română' };
  var wortSprache = null, wortThema = null;

  window.apWoerter = function (themaId, titel) {
    wortThema = { id: themaId, titel: titel };
    if (!wortSprache) wortSprache = profil.native_language || 'en';
    zeigeWoerter();
    ap.zeige('woerter');
  };

  function zeigeWoerter() {
    var el = document.getElementById('s-woerter'); if (!el || !wortThema) return;
    var U = window.UEBUNGEN || { skills: [] };
    var sk = U.skills.filter(function (x) { return x.id === 'wortschatz'; })[0];
    var th = sk && sk.themes.filter(function (x) { return x.id === wortThema.id; })[0];
    var woerter = (th && th.words) || [];

    var auswahl = Object.keys(SPRACHNAMEN).map(function (k) {
      return '<button class="' + (k === wortSprache ? 'an' : '') + '" onclick="apSprache(\'' + k + '\')">' +
        SPRACHNAMEN[k] + '</button>';
    }).join('');

    var liste = woerter.map(function (w) {
      var u = window.wortUebersetzung ? wortUebersetzung(w.de, wortSprache) : null;
      return '<div class="wort">' +
        '<div class="wk"><b>' + E(w.de) + '</b>' + (w.emoji ? ' <span>' + w.emoji + '</span>' : '') + '</div>' +
        '<div class="wd">' + E(w.info || '') + '</div>' +
        (u ? '<div class="wu"><b>' + E(u.w) + '</b>' + (u.i ? '<span>' + E(u.i) + '</span>' : '') + '</div>'
           : '<div class="wu leer">Übersetzung folgt</div>') +
        '</div>';
    }).join('');

    el.innerHTML =
      '<div class="kopfzeile"><h1>' + E(wortThema.titel) + '</h1>' +
      '<p>' + woerter.length + ' Wörter — in deiner Sprache erklärt.</p></div>' +
      '<div class="filter sprachen">' + auswahl + '</div>' +
      (liste || '<div class="hinweis">Für dieses Thema gibt es noch keine Wortliste.</div>') +
      '<button class="zeile" style="margin-top:14px" onclick="ap.zeige(\'lernen\')">' +
        '<span class="rd">←</span><span><b>Zurück zum Lernpfad</b></span></button>';
  }

  window.apSprache = function (k) { wortSprache = k; zeigeWoerter(); };

  /* ---------- Profil ---------- */
  function renderProfilApp() {
    document.getElementById('s-profil').innerHTML =
      '<div class="kopfzeile"><h1>Profil</h1></div>' +
      '<div class="zeile"><span class="rd">👤</span><span><b>' + E(profil.name || user.email) + '</b>' +
        '<small>' + E(user.email) + '</small></span></div>' +
      '<div class="zeile"><span class="rd">🎯</span><span><b>Niveau</b>' +
        '<small>' + E(profil.level || 'noch nicht gesetzt') + '</small></span></div>' +
      '<button class="zeile" onclick="apSpracheAendern()"><span class="rd">🗣️</span>' +
        '<span><b>Deine Sprache</b><small>' + E(sprachName(profil.native_language)) + ' — zum Ändern tippen</small></span></button>' +
      '<button class="zeile" onclick="ap.abmelden()"><span class="rd">↩︎</span>' +
        '<span><b>Abmelden</b><small>Bis bald!</small></span></button>';
  }

  function sprachName(k) {
    var t = SPRACHLISTE.filter(function (s) { return s.k === k; })[0];
    return t ? t.n : 'noch nicht gewählt';
  }

  var ZEICHNER = { start: renderStart, lernen: renderLernen, sprechen: renderSprechen, woerter: zeigeWoerter,
                   community: renderCommunityApp, medien: renderMedienApp, profil: renderProfilApp };

  function leisteBauen() {
    document.getElementById('leiste').innerHTML = REITER.map(function (r, i) {
      return '<button class="' + (i === 0 ? 'an' : '') + '" data-r="' + r.id + '" onclick="ap.zeige(\'' + r.id + '\')">' +
        '<span class="ic">' + r.ic + '</span>' + r.t + '</button>';
    }).join('');
  }

  return {
    zeige: function (id) {
      document.querySelectorAll('.sicht').forEach(function (s) { s.classList.toggle('an', s.id === 's-' + id); });
      document.querySelectorAll('#leiste button').forEach(function (b) { b.classList.toggle('an', b.dataset.r === id); });
      if (ZEICHNER[id]) ZEICHNER[id]();
      location.hash = id;
      window.scrollTo(0, 0);
    },
    bereich: function (b) { bereich = b; renderLernen(); },
    medien: function (n) { medTeil = n; renderMedienApp(); },
    sprich: function (thema, titel) {
      location.href = '../sprechen.html?thema=' + encodeURIComponent(thema) + '&ort=' + encodeURIComponent(titel);
    },
    abmelden: function () { if (sb) sb.auth.signOut().then(function () { location.href = '../index.html'; }); },

    start: async function () {
      var CFG = window.SPRECHCLUB_CONFIG || {};
      sb = supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY,
        { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
      window.sb = sb;
      var r = await sb.auth.getSession();
      if (!r.data.session) { location.href = '../index.html?login=1'; return; }
      user = r.data.session.user; window.user = user;
      var p = await sb.from('profiles').select('name,level,native_language,target_level').eq('id', user.id).single();
      profil = p.data || {}; window.profile = profil;
      leisteBauen();
      var start = (location.hash || '').replace('#', '') || 'start';
      this.zeige(ZEICHNER[start] ? start : 'start');
      if (!profil.native_language) zeigeSprachwahl();   // einmal am Anfang
    }
  };
})();
document.addEventListener('DOMContentLoaded', function () { ap.start(); });
