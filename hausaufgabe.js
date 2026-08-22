/* ============================================================
   hausaufgabe.js — „Hausaufgabe abgeben" im Schülerbereich

   Neben jeder besuchten Stunde steht ein Knopf. Ein Klick öffnet
   ein kleines Fenster: schreiben, optional eine Datei anhängen,
   abschicken. Die Hausaufgabe landet in Julias Postfach — mit dem
   Schüler als Antwortadresse — und als Eintrag unter Nachrichten,
   damit der Schüler sieht, dass sie angekommen ist.

   Einbinden ganz unten in konto.html:
     <script src="hausaufgabe.js?v=1" defer></script>

   Braucht: window.sb (Supabase), window.toast (optional),
            window.AmandaSagt (optional).
   ============================================================ */
(function () {
  'use strict';
  if (window.__hausaufgabe) return;
  window.__hausaufgabe = true;

  var MAX = 8 * 1024 * 1024;
  var OK = ['image/jpeg', 'image/png', 'image/heic', 'image/webp', 'image/gif',
            'application/pdf', 'text/plain',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

  var css = document.createElement('style');
  css.textContent = [
    '.ha-hinter{position:fixed;inset:0;z-index:9600;background:rgba(32,33,31,.55);',
    'display:flex;align-items:center;justify-content:center;padding:18px;overflow-y:auto}',
    '.ha-box{background:var(--karte,#FFFDF3);border:2px solid var(--tinte,#20211F);border-radius:22px;',
    'max-width:520px;width:100%;box-shadow:0 24px 60px -18px rgba(0,0,0,.5);overflow:hidden}',
    '.ha-kopf{padding:18px 22px 14px;background:linear-gradient(135deg,#FFF6D9,var(--karte,#FFFDF3));',
    'border-bottom:1.5px solid var(--linie,#E7DFC7);display:flex;gap:12px;align-items:flex-end}',
    '.ha-kopf img{height:76px;width:auto;flex:none;margin-bottom:-14px}',
    '.ha-kopf .tx{flex:1;min-width:0;padding-bottom:4px}',
    '.ha-kopf h3{margin:0;font-family:var(--schrift-kopf,"Shantell Sans",sans-serif);font-size:19px;font-weight:800}',
    '.ha-kopf p{margin:2px 0 0;font-size:13px;color:var(--text-soft,#54594A)}',
    '.ha-kopf .zu{background:none;border:none;font-size:22px;line-height:1;color:var(--text-soft,#54594A);',
    'cursor:pointer;padding:2px 6px;border-radius:8px;align-self:flex-start}',
    '.ha-leib{padding:16px 22px 20px}',
    '.ha-leib textarea{width:100%;min-height:130px;border:2px solid var(--linie,#E7DFC7);border-radius:14px;',
    'padding:12px 14px;font-family:inherit;font-size:14.5px;line-height:1.55;resize:vertical;',
    'background:#fff;color:var(--tinte,#20211F)}',
    '.ha-leib textarea:focus{outline:none;border-color:var(--tuerkis-dunkel,#1990A4);',
    'box-shadow:0 0 0 3px var(--tuerkis-hauch,#EAFBFE)}',
    '.ha-datei{display:flex;align-items:center;gap:10px;margin-top:12px;padding:11px 13px;',
    'border:1.5px dashed var(--linie,#E7DFC7);border-radius:14px;background:var(--creme,#FFF8E0);',
    'font-size:13.5px;color:var(--text-soft,#54594A);cursor:pointer}',
    '.ha-datei:hover{border-color:var(--tuerkis-dunkel,#1990A4)}',
    '.ha-datei input{display:none}',
    '.ha-datei b{color:var(--tinte,#20211F)}',
    '.ha-datei .weg{margin-left:auto;color:var(--rot,#DD0000);font-weight:700;font-size:12.5px}',
    '.ha-fuss{display:flex;gap:10px;align-items:center;margin-top:16px}',
    '.ha-fuss .hin{font-size:12px;color:#8C8574;line-height:1.4;flex:1}',
    '.ha-senden{background:var(--rot,#DD0000);color:#fff;border:none;border-radius:50px;',
    'padding:11px 22px;font-weight:700;font-size:14.5px;cursor:pointer;font-family:inherit;flex:none}',
    '.ha-senden:disabled{opacity:.5;cursor:default}',
    '.ha-fehler{margin-top:10px;font-size:13px;color:var(--rot,#DD0000);font-weight:600}',
    '@media(max-width:560px){.ha-kopf img{height:60px}.ha-leib{padding:14px 16px 18px}.ha-kopf{padding:14px 16px 12px}}'
  ].join('');
  document.head.appendChild(css);

  function amanda(pose) {
    return window.AmandaBild ? window.AmandaBild(pose) : ('amanda/a-' + pose + '.webp');
  }
  function sagen(t) {
    if (window.toast) window.toast(t); else alert(t);
  }

  window.hausaufgabeAbgeben = function (classId, titel) {
    var alt = document.getElementById('haBox');
    if (alt) alt.remove();

    var hinter = document.createElement('div');
    hinter.className = 'ha-hinter';
    hinter.id = 'haBox';
    hinter.onclick = function (e) { if (e.target === hinter) zu(); };

    hinter.innerHTML =
      '<div class="ha-box" role="dialog" aria-modal="true" aria-label="Hausaufgabe abgeben">' +
        '<div class="ha-kopf">' +
          '<img src="' + amanda('stift') + '" alt="">' +
          '<div class="tx"><h3>Hausaufgabe abgeben</h3>' +
          '<p>' + (titel ? 'Zur Stunde „' + titel + '"' : 'Julia schaut sie sich an und meldet sich.') + '</p></div>' +
          '<button class="zu" type="button" aria-label="Schließen">&times;</button>' +
        '</div>' +
        '<div class="ha-leib">' +
          '<textarea id="haText" placeholder="Schreib deine Hausaufgabe hier hinein — oder häng unten eine Datei an."></textarea>' +
          '<label class="ha-datei" id="haLabel">' +
            '<span>📎</span><span id="haName">Datei anhängen — Foto, PDF oder Word</span>' +
            '<input type="file" id="haDatei" accept="image/*,.pdf,.doc,.docx,.txt">' +
          '</label>' +
          '<div class="ha-fehler" id="haFehler" style="display:none"></div>' +
          '<div class="ha-fuss">' +
            '<span class="hin">Julia bekommt sie sofort per E-Mail und kann dir direkt antworten. ' +
            'Du findest sie danach unter <b>Nachrichten</b>.</span>' +
            '<button class="ha-senden" id="haSend" type="button">Abschicken</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    document.body.appendChild(hinter);
    document.body.style.overflow = 'hidden';

    var datei = null;
    var feld = hinter.querySelector('#haDatei');
    var name = hinter.querySelector('#haName');
    var fehler = hinter.querySelector('#haFehler');

    function zeigeFehler(t) { fehler.textContent = t; fehler.style.display = t ? '' : 'none'; }

    feld.onchange = function () {
      var f = feld.files && feld.files[0];
      if (!f) return;
      if (f.size > MAX) { zeigeFehler('Die Datei ist größer als 8 MB. Mach bitte ein kleineres Foto.'); feld.value = ''; return; }
      if (OK.indexOf(f.type) < 0 && f.type) { zeigeFehler('Dieses Format geht leider nicht. Nimm ein Foto, ein PDF oder eine Word-Datei.'); feld.value = ''; return; }
      zeigeFehler('');
      datei = f;
      name.innerHTML = '<b>' + f.name + '</b> <span class="weg">entfernen</span>';
      var weg = name.querySelector('.weg');
      if (weg) weg.onclick = function (e) {
        e.preventDefault(); e.stopPropagation();
        datei = null; feld.value = '';
        name.textContent = 'Datei anhängen — Foto, PDF oder Word';
      };
    };

    function zu() {
      hinter.remove();
      document.body.style.overflow = '';
      document.removeEventListener('keydown', taste);
    }
    function taste(e) { if (e.key === 'Escape') zu(); }
    document.addEventListener('keydown', taste);
    hinter.querySelector('.zu').onclick = zu;

    hinter.querySelector('#haSend').onclick = async function () {
      var knopf = this;
      var text = (hinter.querySelector('#haText').value || '').trim();
      if (!text && !datei) { zeigeFehler('Schreib etwas oder häng eine Datei an.'); return; }
      zeigeFehler('');
      knopf.disabled = true;
      knopf.textContent = 'Wird geschickt …';

      try {
        var anhang = null;
        if (datei) anhang = { name: datei.name, typ: datei.type, inhalt: await alsBase64(datei) };

        var token = '';
        try {
          var s = await window.sb.auth.getSession();
          token = s && s.data && s.data.session ? s.data.session.access_token : '';
        } catch (e) {}
        if (!token) throw new Error('nicht angemeldet');

        var r = await fetch('/api/hausaufgabe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
          body: JSON.stringify({ class_id: classId, text: text, datei: anhang }),
        });
        var j = await r.json().catch(function () { return {}; });
        if (!r.ok || !j.ok) throw new Error(j.error || 'fehler');

        zu();
        sagen('Hausaufgabe abgeschickt ✓');
        if (window.AmandaSagt) {
          window.AmandaSagt('Abgeschickt! Julia schaut sie sich an und meldet sich bei dir.', 'klatschen', 5000);
        }
      } catch (e) {
        knopf.disabled = false;
        knopf.textContent = 'Abschicken';
        zeigeFehler('Das hat nicht geklappt. Versuch es bitte gleich noch einmal.');
      }
    };

    setTimeout(function () { var t = hinter.querySelector('#haText'); if (t) t.focus(); }, 80);
  };

  function alsBase64(f) {
    return new Promise(function (loesen, ab) {
      var r = new FileReader();
      r.onload = function () {
        var s = String(r.result || '');
        var i = s.indexOf(',');
        loesen(i > -1 ? s.slice(i + 1) : s);
      };
      r.onerror = ab;
      r.readAsDataURL(f);
    });
  }
})();
