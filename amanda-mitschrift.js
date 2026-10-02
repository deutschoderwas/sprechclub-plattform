/* ============================================================
   amanda-mitschrift.js — alles, was Amanda sagt, bleibt erhalten

   Bisher lebte die Mitschrift nur im Arbeitsspeicher: ein
   Neuladen, ein zugemachter Tab — und das Gespraech war weg. Wer
   Amanda abends etwas gefragt hatte, konnte es am naechsten Tag
   nicht mehr nachlesen. Genau das ist aber der Wert: man liest
   nach, was die Lehrerin erklaert hat.

   Jetzt landet jede Zeile in der Tabelle amanda_mitschrift.
   Sehen darf sie nur der Lernende selbst (RLS in Supabase), und
   geschrieben wird gesammelt, damit nicht bei jedem Satz eine
   Anfrage losgeht.

   Nach aussen gibt es vier Dinge:
     AmandaMitschrift.notiz(wer, text, {art, gespraech})
     AmandaMitschrift.laden({grenze, neu})
     AmandaMitschrift.zeichnen(element oder id, {neu})
     AmandaMitschrift.alsText(zeilen)

   Faellt die Tabelle aus, laeuft der Chat weiter wie vorher. Die
   Mitschrift ist ein Zusatz, nie ein Nadeloehr: nach drei
   erfolglosen Versuchen hoert sie still auf, statt den
   Lernbereich auszubremsen.
   ============================================================ */
(function () {
  'use strict';
  if (window.AmandaMitschrift) return;

  var STAPEL = [];          // noch nicht geschriebene Zeilen
  var uhr = null;
  var pannen = 0;
  var uid = null;
  var letzte = '';          // gegen doppelt gezeichnete Zeilen
  var SPEICHER = null;      // einmal geladen, dann gemerkt
  var frisch = false;       // true = es kam etwas dazu

  function kunde() { return window.sb || null; }

  function E(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  function nutzer() {
    if (uid) return Promise.resolve(uid);
    var k = kunde();
    if (!k || !k.auth) return Promise.resolve(null);
    return k.auth.getSession().then(function (r) {
      uid = (r && r.data && r.data.session && r.data.session.user && r.data.session.user.id) || null;
      return uid;
    }).catch(function () { return null; });
  }

  /* ---------- Merken ---------- */
  function notiz(wer, text, opt) {
    text = String(text == null ? '' : text).trim();
    if (!text || pannen >= 3) return;
    wer = (wer === 'am' || wer === 'bot' || wer === 'amanda') ? 'amanda' : 'du';
    var schluessel = wer + '|' + text;
    if (schluessel === letzte) return;
    letzte = schluessel;
    STAPEL.push({
      wer: wer,
      text: text.slice(0, 4000),
      art: (opt && opt.art) || 'chat',
      gespraech: (opt && opt.gespraech) || null
    });
    if (STAPEL.length >= 8) spuelen();
    else { clearTimeout(uhr); uhr = setTimeout(spuelen, 1500); }
  }

  function spuelen() {
    clearTimeout(uhr); uhr = null;
    if (!STAPEL.length) return;
    var zeilen = STAPEL.slice();
    STAPEL.length = 0;
    var k = kunde();
    if (!k) return;
    nutzer().then(function (id) {
      if (!id) return;
      return k.from('amanda_mitschrift').insert(zeilen.map(function (z) {
        return {
          user_id: id, wer: z.wer, text: z.text,
          art: z.art, gespraech: z.gespraech
        };
      })).then(function (r) {
        if (r && r.error) { pannen++; return; }
        pannen = 0;
        frisch = true;
        if (SPEICHER) {
          var jetzt = new Date().toISOString();
          zeilen.forEach(function (z) {
            SPEICHER.push({
              id: 'neu' + Math.random(), wer: z.wer, text: z.text,
              art: z.art, gespraech: z.gespraech, erstellt: jetzt
            });
          });
        }
      });
    }).catch(function () { pannen++; });
  }

  /* Wer den Tab zumacht, soll den letzten Satz nicht verlieren. */
  window.addEventListener('pagehide', function () { try { spuelen(); } catch (e) {} });
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') { try { spuelen(); } catch (e) {} }
  });

  /* ---------- Holen ---------- */
  function laden(opt) {
    opt = opt || {};
    if (SPEICHER && !opt.neu && !frisch) return Promise.resolve(SPEICHER);
    var k = kunde();
    if (!k) return Promise.resolve(SPEICHER || []);
    var grenze = Math.min(1500, opt.grenze || 500);
    return nutzer().then(function (id) {
      if (!id) return SPEICHER || [];
      return k.from('amanda_mitschrift')
        .select('id,wer,text,art,gespraech,erstellt')
        .eq('user_id', id)
        .order('erstellt', { ascending: false })
        .limit(grenze)
        .then(function (r) {
          if (r.error) throw r.error;
          SPEICHER = (r.data || []).slice().reverse();  // alt zuerst liest sich natuerlich
          frisch = false;
          return SPEICHER;
        });
    }).catch(function () { return SPEICHER || []; });
  }

  /* ---------- Sortieren ---------- */
  function tagSchluessel(d) {
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  }
  function tagName(d) {
    var heute = new Date();
    var gestern = new Date(); gestern.setDate(heute.getDate() - 1);
    if (tagSchluessel(d) === tagSchluessel(heute)) return 'Heute';
    if (tagSchluessel(d) === tagSchluessel(gestern)) return 'Gestern';
    try {
      return d.toLocaleDateString('de-DE', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
      });
    } catch (e) { return d.toLocaleDateString(); }
  }
  function zeit(d) {
    try { return d.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }); }
    catch (e) { return ''; }
  }

  /* Zeilen zu Tagen, Tage zu Abschnitten: ein Abschnitt ist ein
     zusammenhaengendes Gespraech — gleiche Art, gleiche Nummer und
     keine halbe Stunde Pause dazwischen. */
  function ordnen(zeilen) {
    var tage = [];
    zeilen.forEach(function (z) {
      var d = new Date(z.erstellt);
      if (isNaN(d.getTime())) return;
      var ts = tagSchluessel(d);
      var tag = tage[tage.length - 1];
      if (!tag || tag.schluessel !== ts) {
        tag = { schluessel: ts, datum: d, name: tagName(d), bloecke: [] };
        tage.push(tag);
      }
      var block = tag.bloecke[tag.bloecke.length - 1];
      var passt = block
        && block.art === z.art
        && String(block.gespraech || '') === String(z.gespraech || '')
        && (d - block.bis) < 30 * 60 * 1000;
      if (!passt) {
        block = { art: z.art, gespraech: z.gespraech, von: d, bis: d, zeilen: [] };
        tag.bloecke.push(block);
      }
      block.bis = d;
      block.zeilen.push({ wer: z.wer, text: z.text, zeit: d });
    });
    return tage;
  }

  /* ---------- Als Textdatei ---------- */
  function alsText(zeilen) {
    var tage = ordnen(zeilen);
    var aus = ['Meine Mitschrift mit Amanda', 'deutschoderwas club',
      'Stand: ' + new Date().toLocaleDateString('de-DE'), ''];
    tage.slice().reverse().forEach(function (tag) {
      aus.push('========================================');
      aus.push(tag.name);
      aus.push('========================================');
      tag.bloecke.forEach(function (b) {
        aus.push('');
        aus.push('— ' + zeit(b.von) + ' · ' + (b.art === 'sprechen' ? 'gesprochen' : 'geschrieben') + ' —');
        b.zeilen.forEach(function (z) {
          aus.push((z.wer === 'amanda' ? 'Amanda: ' : 'Du: ') + z.text);
        });
      });
      aus.push('');
    });
    return aus.join('\n');
  }

  function speichern(zeilen) {
    try {
      var b = new Blob([alsText(zeilen)], { type: 'text/plain;charset=utf-8' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(b);
      a.download = 'amanda-mitschrift.txt';
      document.body.appendChild(a);
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 400);
    } catch (e) {}
  }
  window.AmandaMitschriftSpeichern = function () {
    laden().then(function (z) { if (z.length) speichern(z); });
  };

  /* ---------- Zeigen ---------- */
  function zeichnen(ziel, opt) {
    stil();
    if (typeof ziel === 'string') ziel = document.getElementById(ziel);
    if (!ziel) return Promise.resolve();
    if (!ziel.innerHTML) ziel.innerHTML = '<p class="amm-laedt">Ich hole deine Mitschrift …</p>';
    return laden(opt).then(function (zeilen) {
      if (!zeilen.length) {
        ziel.innerHTML = '<div class="amm-leer"><b>Noch nichts aufgeschrieben</b>'
          + '<span>Sobald du Amanda schreibst oder mit ihr sprichst, steht hier alles — '
          + 'Tag für Tag, zum Nachlesen und zum Mitnehmen.</span></div>';
        return;
      }
      var tage = ordnen(zeilen).reverse();   // neuester Tag oben
      var html = '<div class="amm-kopf"><span class="amm-zahl">' + zeilen.length
        + (zeilen.length === 1 ? ' Zeile' : ' Zeilen') + ' aus ' + tage.length
        + (tage.length === 1 ? ' Tag' : ' Tagen') + '</span>'
        + '<button type="button" class="amm-hol" onclick="AmandaMitschriftSpeichern()">'
        + 'Als Textdatei speichern</button></div>';

      html += tage.map(function (tag, i) {
        var bloecke = tag.bloecke.slice().reverse().map(function (b) {
          var kopf = '<div class="amm-bk"><span class="amm-pille ' + (b.art === 'sprechen' ? 'sp' : 'ch') + '">'
            + (b.art === 'sprechen' ? 'Gesprochen' : 'Geschrieben') + '</span>'
            + '<span class="amm-zeit">' + zeit(b.von) + '</span></div>';
          var inhalt = b.zeilen.map(function (z) {
            return '<div class="amm-z ' + (z.wer === 'amanda' ? 'am' : 'du') + '">'
              + '<b>' + (z.wer === 'amanda' ? 'Amanda' : 'Du') + '</b>'
              + '<span>' + E(z.text) + '</span></div>';
          }).join('');
          return '<div class="amm-block">' + kopf + inhalt + '</div>';
        }).join('');
        var zahl = tag.bloecke.reduce(function (s, b) { return s + b.zeilen.length; }, 0);
        return '<details class="amm-tag"' + (i === 0 ? ' open' : '') + '>'
          + '<summary><b>' + E(tag.name) + '</b><span>' + zahl
          + (zahl === 1 ? ' Zeile' : ' Zeilen') + '</span></summary>'
          + bloecke + '</details>';
      }).join('');

      ziel.innerHTML = html;
    }).catch(function () {
      ziel.innerHTML = '<p class="amm-laedt">Die Mitschrift kam gerade nicht an. '
        + 'Versuch es später noch einmal — verloren geht nichts.</p>';
    });
  }

  /* ---------- Stil ---------- */
  function stil() {
    if (document.getElementById('amm-stil')) return;
    var s = document.createElement('style');
    s.id = 'amm-stil';
    s.textContent = [
      '#amMitIn,.as-archiv-in{--amm-ink:var(--tinte,#1D1B18);--amm-soft:var(--text-soft,#5C574C);',
      '  --amm-line:var(--linie,#E7ECEE);--amm-teal-d:var(--tuerkis-dunkel,#0E7C7B);',
      '  --amm-teal-soft:var(--tuerkis-hauch,#DCEFEC);--amm-paper:var(--karte,#fff);',
      '  --amm-creme:var(--creme,#F6F9FA)}',
      '.amm-kopf{display:flex;align-items:center;justify-content:space-between;gap:10px;',
      '  flex-wrap:wrap;margin:0 0 14px}',
      '.amm-zahl{font-size:13px;color:var(--amm-soft,#5C574C);font-variant-numeric:tabular-nums}',
      '.amm-hol{font:inherit;font-size:13.5px;font-weight:700;cursor:pointer;',
      '  background:var(--amm-paper,#fff);color:var(--amm-ink,#1D1B18);',
      '  border:1px solid var(--amm-line,#E7ECEE);border-radius:12px;padding:10px 16px;',
      '  min-height:42px;transition:border-color .15s,background .15s}',
      '.amm-hol:hover{border-color:var(--amm-teal-d,#0E7C7B);background:var(--amm-teal-soft,#DCEFEC)}',
      '.amm-laedt{color:var(--amm-soft,#5C574C);font-size:14px;margin:0;line-height:1.55}',
      '.amm-leer{display:flex;flex-direction:column;gap:6px;background:var(--amm-creme,#F6F9FA);',
      '  border:1px dashed var(--amm-line,#E7ECEE);border-radius:14px;padding:18px}',
      '.amm-leer b{font-size:15.5px}',
      '.amm-leer span{font-size:14px;color:var(--amm-soft,#5C574C);line-height:1.55}',
      '.amm-tag{border:1px solid var(--amm-line,#E7ECEE);border-radius:14px;',
      '  background:var(--amm-paper,#fff);margin-bottom:10px;overflow:hidden}',
      '.amm-tag>summary{display:flex;align-items:center;justify-content:space-between;gap:10px;',
      '  cursor:pointer;padding:13px 15px;list-style:none;min-height:48px}',
      '.amm-tag>summary::-webkit-details-marker{display:none}',
      '.amm-tag>summary b{font-size:15px}',
      '.amm-tag>summary span{font-size:12.5px;color:var(--amm-soft,#5C574C);',
      '  font-variant-numeric:tabular-nums}',
      '.amm-tag[open]>summary{border-bottom:1px solid var(--amm-line,#E7ECEE)}',
      '.amm-block{padding:12px 15px 5px}',
      '.amm-block+.amm-block{border-top:1px dashed var(--amm-line,#E7ECEE)}',
      '.amm-bk{display:flex;align-items:center;gap:8px;margin:0 0 8px}',
      '.amm-pille{font-size:11px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;',
      '  border-radius:999px;padding:4px 9px}',
      '.amm-pille.sp{background:var(--amm-teal-soft,#DCEFEC);color:var(--amm-teal-d,#0E7C7B)}',
      '.amm-pille.ch{background:#F2F4F5;color:#5C574C}',
      '.amm-zeit{font-size:12px;color:#8A9AA1;font-variant-numeric:tabular-nums}',
      '.amm-z{display:flex;flex-direction:column;gap:2px;border-radius:12px;',
      '  padding:9px 12px;margin-bottom:7px;background:var(--amm-creme,#F6F9FA)}',
      '.amm-z.am{background:var(--amm-teal-soft,#DCEFEC)}',
      '.amm-z b{font-size:11px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;',
      '  color:#8A9AA1}',
      '.amm-z.am b{color:var(--amm-teal-d,#0E7C7B)}',
      '.amm-z span{font-size:14.5px;line-height:1.55;white-space:pre-wrap;overflow-wrap:anywhere}',
      '@media(max-width:620px){.amm-hol{width:100%}.amm-z span{font-size:14px}}'
    ].join('\n');
    document.head.appendChild(s);
  }

  window.AmandaMitschrift = {
    notiz: notiz,
    laden: laden,
    zeichnen: zeichnen,
    alsText: alsText,
    spuelen: spuelen
  };
})();
