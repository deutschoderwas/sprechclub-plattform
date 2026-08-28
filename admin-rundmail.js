/* ============================================================
   admin-rundmail.js — die Rundmail abschicken, ohne Konsole

   Der Versand liegt in api/mail-app-anleitung.js. Ihn aufzurufen
   hiess bisher: Entwicklerkonsole oeffnen und einen Schnipsel
   einfuegen. Das ist kein Weg, den man einer Person zumutet, die
   gerade eine Mail an siebenundsechzig Leute schickt.

   Also ein Knopf. Mit drei Sicherungen:
     · Er zeigt vorher, wie viele Leute es sind.
     · Der Test an die eigene Adresse steht zuerst und ist der
       hervorgehobene Knopf.
     · Der Versand an alle verlangt, dass man die Zahl der
       Empfaenger eintippt. Ein Fehlklick verschickt nichts.
   ============================================================ */
(function () {
  'use strict';
  if (window.__rundmail) return;
  window.__rundmail = true;

  function sb() { return window.sb || null; }

  function stil() {
    if (document.getElementById('rm-stil')) return;
    var s = document.createElement('style');
    s.id = 'rm-stil';
    s.textContent = [
      '#rm-hg{position:fixed;inset:0;background:rgba(32,33,31,.45);z-index:9800;',
      '  display:flex;align-items:center;justify-content:center;padding:16px}',
      '#rm{background:#FFFDF3;border:2px solid #20211F;border-radius:22px;max-width:520px;width:100%;',
      '  box-shadow:4px 6px 0 rgba(32,33,31,.16);max-height:90vh;overflow:auto}',
      '#rm .kopf{display:flex;align-items:center;gap:10px;padding:16px 18px 0}',
      '#rm .kopf b{font-size:17px;flex:1}',
      '#rm .kopf .zu{background:none;border:0;font-size:20px;cursor:pointer;color:#8A857C;width:40px;height:40px}',
      '#rm .inn{padding:6px 18px 18px}',
      '#rm p{font-size:14px;line-height:1.6;color:#54594A;margin:8px 0}',
      '#rm .zahl{background:#FFF6D9;border:2px solid #FFE100;border-radius:16px;padding:12px 14px;margin:12px 0;',
      '  font-size:14px;line-height:1.6;color:#20211F}',
      '#rm .zahl b{font-size:20px}',
      '#rm .knoepfe{display:flex;flex-direction:column;gap:9px;margin-top:14px}',
      '#rm button.tun{border:0;border-radius:40px;padding:14px 18px;font:inherit;font-weight:700;',
      '  font-size:14.5px;cursor:pointer;min-height:48px}',
      '#rm .test{background:#DD0000;color:#fff}',
      '#rm .alle{background:#fff;color:#20211F;border:2px solid #20211F!important}',
      '#rm .alle[disabled]{opacity:.45;cursor:not-allowed}',
      '#rm input{width:100%;padding:12px 14px;border:1.5px solid #E7DFC7;border-radius:12px;',
      '  font:inherit;font-size:15px;margin-top:6px}',
      '#rm .warn{font-size:13px;color:#8A857C;margin-top:10px;line-height:1.55}',
      '#rm .erg{margin-top:12px;padding:12px 14px;border-radius:14px;font-size:14px;line-height:1.6}',
      '#rm .erg.gut{background:#EAFBFE;border:1.5px solid #1990A4;color:#10627A}',
      '#rm .erg.schlecht{background:#FDECEB;border:1.5px solid #DD0000;color:#B00000}'
    ].join('');
    document.head.appendChild(s);
  }

  function zu() {
    var e = document.getElementById('rm-hg');
    if (e && e.parentNode) e.parentNode.removeChild(e);
  }
  window.rundmailZu = zu;

  async function empfaengerZaehlen() {
    var c = sb();
    if (!c) return null;
    try {
      var r = await c.from('profiles').select('email,email_optout').eq('status', 'aktiv');
      if (r.error) return null;
      return (r.data || []).filter(function (p) { return p.email && !p.email_optout; }).length;
    } catch (e) { return null; }
  }

  async function senden(anAlle, knopf) {
    var c = sb();
    var erg = document.getElementById('rm-erg');
    if (!c || !erg) return;
    knopf.disabled = true;
    var alterText = knopf.textContent;
    knopf.textContent = 'Wird gesendet …';
    erg.className = 'erg';
    erg.textContent = '';
    try {
      var s = await c.auth.getSession();
      var tok = s && s.data && s.data.session && s.data.session.access_token;
      if (!tok) throw new Error('Nicht angemeldet.');
      var a = await fetch('/api/mail-app-anleitung', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + tok },
        body: JSON.stringify(anAlle ? {} : { test: true })
      });
      var j = await a.json().catch(function () { return {}; });
      if (!a.ok) throw new Error(j.error || ('Server meldet ' + a.status));
      erg.className = 'erg gut';
      erg.textContent = anAlle
        ? 'Verschickt an ' + j.verschickt + ' von ' + j.empfaenger + ' Mitgliedern.'
          + (j.fehler && j.fehler.length ? ' Nicht zugestellt: ' + j.fehler.join(', ') : '')
        : 'Die Testmail ist unterwegs an deine eigene Adresse. Schau ins Postfach, bevor du an alle schickst.';
    } catch (e) {
      erg.className = 'erg schlecht';
      erg.textContent = 'Das hat nicht geklappt: ' + e.message
        + '. Ist die Seite schon neu ausgerollt? Die Versandroute muss auf dem Server liegen.';
    }
    knopf.textContent = alterText;
    knopf.disabled = false;
  }

  window.rundmailOeffnen = async function () {
    stil();
    zu();
    var hg = document.createElement('div');
    hg.id = 'rm-hg';
    hg.addEventListener('click', function (e) { if (e.target === hg) zu(); });
    hg.innerHTML =
      '<div id="rm" role="dialog" aria-modal="true">'
      + '<div class="kopf"><b>Rundmail: App auf den Startbildschirm</b>'
      + '<button class="zu" type="button" aria-label="Schließen" onclick="rundmailZu()">✕</button></div>'
      + '<div class="inn">'
      + '<p>Die Anleitung mit den sechs Bildern — drei Schritte fürs iPhone, drei für Android. '
      + 'Jede Person wird einzeln angeschrieben und liest ihren eigenen Namen.</p>'
      + '<div class="zahl" id="rm-zahl">Empfänger werden gezählt …</div>'
      + '<div class="knoepfe">'
      + '<button class="tun test" type="button" id="rm-test">Erst an mich selbst (Test)</button>'
      + '<div><label style="font-size:13.5px;font-weight:700;color:#20141F">'
      + 'Zum Bestätigen die Zahl der Empfänger eintippen</label>'
      + '<input id="rm-code" inputmode="numeric" placeholder="…" autocomplete="off"></div>'
      + '<button class="tun alle" type="button" id="rm-alle" disabled>An alle senden</button>'
      + '</div>'
      + '<p class="warn">Wer <b>keine</b> Mails möchte (email_optout), bekommt nichts. '
      + 'Verschickt wird über Brevo, wie deine anderen Mails.</p>'
      + '<div id="rm-erg"></div>'
      + '</div></div>';
    document.body.appendChild(hg);

    document.getElementById('rm-test').addEventListener('click', function () { senden(false, this); });

    var n = await empfaengerZaehlen();
    var kasten = document.getElementById('rm-zahl');
    var feld = document.getElementById('rm-code');
    var alle = document.getElementById('rm-alle');
    if (n === null) {
      kasten.textContent = 'Die Zahl der Empfänger konnte ich nicht laden. Der Test geht trotzdem.';
      return;
    }
    kasten.innerHTML = 'Diese Mail geht an <b>' + n + '</b> aktive Mitglieder — mit und ohne Stunden.';
    feld.addEventListener('input', function () {
      alle.disabled = String(feld.value).trim() !== String(n);
    });
    alle.addEventListener('click', function () {
      if (String(feld.value).trim() !== String(n)) return;
      senden(true, this);
    });
  };
})();
