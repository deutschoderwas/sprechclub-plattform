/* admin-ruhe.js — nimmt Bild-Emoji aus Knöpfen, Überschriften, Etiketten und
   Auswahllisten im Team-Bereich (20.11.2026).
   Warum zur Laufzeit: in admin.html stehen über 300 Emoji, verteilt auf
   Vorlagen, die an vielen Stellen neu gezeichnet werden. Sie einzeln zu
   ändern wäre fehleranfällig. Hier wird nur die Anzeige geändert:
   - nie in Eingabefeldern, Textfeldern oder bearbeitbaren Bereichen
   - nie in Mail-Vorschauen und Nachrichtentexten (nur in den Elementtypen unten)
   - Zeichen wie ✓ ✕ ★ ☆ → ← bleiben, weil sie etwas bedeuten. */
(function(){
  var ZIEL = 'button,a.btn,h1,h2,h3,h4,label,option,.pill,.tchip,.plan-day,.st-karte .was,b,strong';
  var EMOJI = /(?:[\u{1F100}-\u{1F1FF}\u{1F300}-\u{1FAFF}]|[☀-☄☇-⛿]|[✀-✒✔✖-➿]|[⏩-⏺]|⌛|[⬀-⯿])(?:️|‍[☀-➿\u{1F300}-\u{1FAFF}]️?|[\u{1F3FB}-\u{1F3FF}])*\s?/gu;
  function sauber(el){
    if (!el || el.closest('textarea,[contenteditable],#jkMailOv,#jkGrpOv,.mailvorschau,.no-ruhe')) return;
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    var n, liste = [];
    while ((n = w.nextNode())) liste.push(n);
    liste.forEach(function(t){
      var v = t.nodeValue;
      if (!v || !EMOJI.test(v)) { EMOJI.lastIndex = 0; return; }
      EMOJI.lastIndex = 0;
      var neu = v.replace(EMOJI, '');
      /* Text, der nur aus einem Emoji bestand (z. B. ein Symbol-Knopf),
         bleibt stehen — sonst wäre der Knopf leer. */
      if (!neu.trim()) return;
      if (/^\s/.test(v) && !/^\s/.test(neu)) neu = ' ' + neu;
      t.nodeValue = neu;
    });
  }
  function lauf(wurzel){
    try{
      if (wurzel.matches && wurzel.matches(ZIEL)) sauber(wurzel);
      if (wurzel.querySelectorAll) wurzel.querySelectorAll(ZIEL).forEach(sauber);
    }catch(e){}
  }
  var offen = false, warte = [];
  function plane(n){ warte.push(n); if (offen) return; offen = true;
    requestAnimationFrame(function(){ offen = false; var l = warte; warte = []; l.forEach(lauf); }); }
  function start(){
    var app = document.getElementById('app'); if (!app) return;
    lauf(app);
    new MutationObserver(function(ms){
      ms.forEach(function(m){
        m.addedNodes.forEach(function(x){ if (x.nodeType === 1) plane(x); else if (x.parentElement) plane(x.parentElement); });
        if (m.type === 'characterData' && m.target.parentElement) plane(m.target.parentElement);
      });
    }).observe(app, { childList:true, subtree:true, characterData:true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
