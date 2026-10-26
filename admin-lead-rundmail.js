/* ============================================================
   Julias eigener Text an alle Leads — das Fenster im Admin-Bereich.

   Julia, 26.10.2026: "Ich will selbst einen Text an alle Leads
   verfassen koennen."

   Bisher konnte sie frei nur an einen einzelnen Lead schreiben. An
   alle ging nur die fest eingebaute Erinnerungsmail.

   Ablauf hier: schreiben, zaehlen lassen, die fertige Mail ansehen,
   und erst danach erscheint der Senden-Knopf. Zwei Klicks, dazwischen
   die Zahl, wie viele es wirklich bekommen. Ein Fehlklick verschickt
   nichts.
   ============================================================ */
(function () {
  'use strict';

  var LETZTE = null;     // Bilanz der letzten Vorschau
  var LETZTER_TEXT = ''; // wozu diese Bilanz gehoert

  function el(id) { return document.getElementById(id); }
  function hs(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  async function token() {
    try {
      var s = await window.sb.auth.getSession();
      return (s && s.data && s.data.session && s.data.session.access_token) || '';
    } catch (e) { return ''; }
  }

  async function ruf(aktion) {
    var r = await fetch('/api/lead-rundmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + (await token()) },
      body: JSON.stringify({
        aktion: aktion,
        betreff: (el('rm-betreff') || {}).value || '',
        text: (el('rm-text') || {}).value || '',
        mitAnrede: !!(el('rm-anrede') || {}).checked,
        premiumUeberspringen: !!(el('rm-ohnepremium') || {}).checked,
      }),
    });
    return await r.json().catch(function () { return {}; });
  }

  function jetzigerText() {
    return ((el('rm-betreff') || {}).value || '') + '\u0000' + ((el('rm-text') || {}).value || '')
      + '\u0000' + (!!(el('rm-anrede') || {}).checked) + (!!(el('rm-ohnepremium') || {}).checked);
  }

  /* Aendert Julia nach der Vorschau noch etwas am Text, darf der
     Senden-Knopf nicht stehen bleiben — sonst schickt er eine Zahl,
     die zu einer anderen Mail gehoert. */
  function textGeaendert() {
    if (LETZTE && jetzigerText() !== LETZTER_TEXT) {
      LETZTE = null;
      var z = el('rm-ergebnis');
      if (z) z.innerHTML = '<div class="muted" style="font-size:13px">Text geändert — bitte noch einmal zählen lassen.</div>';
    }
  }

  var GRUND = {
    betreff_fehlt: 'Der Betreff fehlt (mindestens drei Zeichen).',
    text_fehlt: 'Der Text fehlt (mindestens zehn Zeichen).',
    kein_brevo_schluessel: 'Der Brevo-Schlüssel fehlt auf dem Server.',
    leads_nicht_lesbar: 'Die Lead-Liste ließ sich nicht lesen.',
    not_admin: 'Dafür fehlt die Admin-Berechtigung.',
  };

  window.rundmailLeadsFenster = function () {
    var alt = el('rm-fenster'); if (alt) alt.remove();
    var k = document.createElement('div');
    k.id = 'rm-fenster';
    k.style.cssText = 'position:fixed;inset:0;z-index:999;background:rgba(26,26,26,.45);display:flex;'
      + 'align-items:flex-start;justify-content:center;padding:24px 14px;overflow:auto';
    k.innerHTML =
      '<div style="background:#fff;border-radius:18px;max-width:620px;width:100%;box-shadow:0 24px 60px rgba(0,0,0,.25)">'
      + '<div style="padding:18px 22px;border-bottom:1px solid #eee;display:flex;align-items:center;gap:10px">'
      +   '<b style="font-size:17px;flex:1">✉️ Eigene Mail an alle Leads</b>'
      +   '<button onclick="document.getElementById(\'rm-fenster\').remove()" '
      +     'style="border:1px solid #ddd;background:#fff;border-radius:9px;width:32px;height:32px;cursor:pointer;font-size:16px">✕</button>'
      + '</div>'
      + '<div style="padding:18px 22px">'
      +   '<label style="display:block;font-weight:700;font-size:13.5px;margin-bottom:4px">Betreff</label>'
      +   '<input id="rm-betreff" type="text" placeholder="Worum geht es?" '
      +     'style="width:100%;padding:10px 12px;border:1px solid #ccc;border-radius:9px;font-size:15px;font-family:inherit">'
      +   '<label style="display:block;font-weight:700;font-size:13.5px;margin:14px 0 4px">Dein Text</label>'
      +   '<textarea id="rm-text" rows="11" placeholder="Schreib einfach los.&#10;&#10;Eine Leerzeile macht einen neuen Absatz. Links werden automatisch anklickbar." '
      +     'style="width:100%;padding:11px 12px;border:1px solid #ccc;border-radius:9px;font-size:14.5px;'
      +     'line-height:1.6;font-family:inherit;resize:vertical"></textarea>'
      +   '<div style="display:flex;gap:16px;flex-wrap:wrap;margin:12px 0 4px;font-size:13.5px">'
      +     '<label style="display:flex;align-items:center;gap:6px;cursor:pointer">'
      +       '<input type="checkbox" id="rm-anrede" checked> Mit Anrede („Hallo Maria,“)</label>'
      +     '<label style="display:flex;align-items:center;gap:6px;cursor:pointer">'
      +       '<input type="checkbox" id="rm-ohnepremium"> Premium-Mitglieder überspringen</label>'
      +   '</div>'
      +   '<div class="muted" style="font-size:12.5px;margin-bottom:14px">'
      +     'Abgemeldete bekommen nie etwas. Doppelte Adressen zählen einmal. '
      +     'Grußformel, Impressum und der Abmelde-Hinweis kommen automatisch darunter.</div>'
      +   '<div style="display:flex;gap:8px;flex-wrap:wrap">'
      +     '<button class="btn btn-primary" onclick="rundmailZaehlen(this)">👀 Zählen und ansehen</button>'
      +     '<button class="btn btn-ghost" onclick="document.getElementById(\'rm-fenster\').remove()">Abbrechen</button>'
      +   '</div>'
      +   '<div id="rm-ergebnis" style="margin-top:16px"></div>'
      + '</div></div>';
    document.body.appendChild(k);
    k.addEventListener('click', function (e) { if (e.target === k) k.remove(); });
    ['rm-betreff', 'rm-text'].forEach(function (id) {
      var n = el(id); if (n) n.addEventListener('input', textGeaendert);
    });
    ['rm-anrede', 'rm-ohnepremium'].forEach(function (id) {
      var n = el(id); if (n) n.addEventListener('change', textGeaendert);
    });
    var b = el('rm-betreff'); if (b) b.focus();
  };

  window.rundmailZaehlen = async function (btn) {
    var z = el('rm-ergebnis'); if (!z) return;
    btn.disabled = true; var alt = btn.textContent; btn.textContent = 'Zähle …';
    var j = await ruf('vorschau');
    btn.disabled = false; btn.textContent = alt;
    if (!j || !j.ok) {
      z.innerHTML = '<div style="color:#B3241C;font-size:14px">Das hat nicht geklappt: '
        + hs(GRUND[j && (j.grund || j.error)] || (j && (j.grund || j.error)) || 'unbekannt') + '</div>';
      return;
    }
    LETZTE = j; LETZTER_TEXT = jetzigerText();

    var zeile = function (wert, text, farbe) {
      return '<div style="display:flex;gap:10px;align-items:baseline;padding:6px 0;border-bottom:1px solid #f2f2f2">'
        + '<b style="font-size:18px;min-width:46px;color:' + (farbe || '#1A1A1A') + '">' + wert + '</b>'
        + '<span style="font-size:14px">' + text + '</span></div>';
    };
    z.innerHTML =
        zeile(j.offen, 'bekommen die Mail', '#1F7A3D')
      + (j.doppelt_zusammengefasst ? zeile(j.doppelt_zusammengefasst, 'doppelte Adressen — einmal gezählt') : '')
      + (j.adresse_unbrauchbar ? zeile(j.adresse_unbrauchbar, 'Zeilen ohne brauchbare Adresse') : '')
      + (j.premium_uebersprungen ? zeile(j.premium_uebersprungen, 'haben Premium — übersprungen') : '')
      + (j.abgemeldet_uebersprungen ? zeile(j.abgemeldet_uebersprungen, 'haben sich abgemeldet — übersprungen') : '')
      + (j.schon_bekommen ? zeile(j.schon_bekommen, 'haben genau diesen Text schon') : '')
      + (j.beispiele && j.beispiele.length
          ? '<div style="font-size:12.5px;color:#6B7280;margin-top:8px">Zum Beispiel: ' + j.beispiele.map(hs).join(', ') + ' …</div>'
          : '')
      + '<div style="font-weight:700;font-size:13.5px;margin:14px 0 6px">So sieht sie aus:</div>'
      + '<iframe id="rm-vorschau" style="width:100%;height:340px;border:1px solid #E3E3E3;border-radius:12px;background:#FFF8E0"></iframe>'
      + (j.offen > 0
          ? '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">'
            + '<button class="btn" style="background:#DD0000;color:#fff;font-weight:800" '
            + 'onclick="rundmailSenden(this)">Jetzt an ' + j.offen + ' schicken</button></div>'
          : '<div class="muted" style="margin-top:12px;font-size:13.5px">Es bleibt niemand übrig — es geht nichts raus.</div>');

    var f = el('rm-vorschau');
    if (f && j.html) { f.srcdoc = j.html; }
  };

  window.rundmailSenden = async function (btn) {
    if (!LETZTE || jetzigerText() !== LETZTER_TEXT) {
      alert('Der Text hat sich geändert. Bitte noch einmal zählen lassen.');
      return;
    }
    if (!confirm('Die Mail geht jetzt an ' + LETZTE.offen + ' Menschen raus.\n\nBetreff: '
      + ((el('rm-betreff') || {}).value || '') + '\n\nWirklich senden?')) return;
    btn.disabled = true; btn.textContent = 'Schicke …';
    var j = await ruf('senden');
    var z = el('rm-ergebnis');
    if (!j || !j.ok) {
      btn.disabled = false; btn.textContent = 'Noch einmal versuchen';
      if (z) z.insertAdjacentHTML('beforeend', '<div style="color:#B3241C;font-size:14px;margin-top:10px">Das hat nicht geklappt: '
        + hs(GRUND[j && (j.grund || j.error)] || (j && (j.grund || j.error)) || 'unbekannt') + '</div>');
      return;
    }
    LETZTE = null;
    if (z) {
      z.innerHTML = '<div style="background:#EAF7EE;border:1px solid #BFE6CB;border-radius:12px;padding:14px 16px">'
        + '<b style="font-size:16px;color:#1F7A3D">✅ ' + j.geschickt + ' Mails sind raus.</b>'
        + (j.fehler ? '<div style="font-size:13.5px;margin-top:6px;color:#B3241C">' + j.fehler + ' nicht — '
            + hs((j.schiefgelaufen || []).map(function (x) { return x.email; }).join(', ')).slice(0, 300) + '</div>' : '')
        + '<div style="font-size:12.5px;color:#6B7280;margin-top:8px">Der Versand steht jetzt auch in den '
        + 'Lead-Karten. Derselbe Text geht nicht noch einmal raus.</div></div>';
    }
    try { if (window.loadLeads) window.loadLeads(); } catch (e) {}
  };
})();
