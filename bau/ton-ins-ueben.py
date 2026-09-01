# -*- coding: utf-8 -*-
"""Ergänzt ueben.js: Vorlesen an jeder Aufgabe, Lösung wird vorgelesen.

Aufruf:  python3 bau/ton-ins-ueben.py
Legt vorher eine Sicherung unter /tmp/bak-ueben.js an.
"""
import re, shutil, sys, os

P = 'ueben.js'
shutil.copy(P, '/tmp/bak-ueben.js')
s = open(P, encoding='utf-8').read()
vorher = len(s)
geändert = []

# ---------------------------------------------------------------- 1. Hilfsfunktionen
alt = """  window.ubSpeak=speak;"""
neu = """  window.ubSpeak=speak;
  /* Langsamer vorlesen — für Lernende oft wichtiger als die normale Fassung. */
  function speakSlow(text){ try{ stopAudio(); if(!window.speechSynthesis)return;
    var u=new SpeechSynthesisUtterance(text); u.lang='de-DE'; u.rate=0.6;
    var vs=(speechSynthesis.getVoices()||[]).filter(function(v){return /^de/i.test(v.lang);}); if(vs.length)u.voice=vs[0];
    speechSynthesis.speak(u);
  }catch(e){} }
  window.ubSpeakSlow=speakSlow;
  /* Zwei kleine Knoepfe: normal und langsam. Für jeden Satz, den man hören können sollte. */
  function tonKnoepfe(text){
    if(!text) return '';
    var t=String(text).replace(/<[^>]+>/g,'').replace(/_{2,}/g,' … ').replace(/\\s+/g,' ').trim();
    if(!t) return '';
    var q=t.replace(/\\\\/g,'\\\\\\\\').replace(/'/g,"\\\\'");
    return '<div class="ub-ton">'+
      '<button class="ub-play ub-ton-b" title="Vorlesen" onclick="ubSpeak(\\''+q+'\\')">🔊</button>'+
      '<button class="ub-play ub-ton-b" title="Langsam vorlesen" onclick="ubSpeakSlow(\\''+q+'\\')">🐢</button>'+
      '</div>';
  }"""
assert s.count(alt) == 1, 'Anker ubSpeak nicht eindeutig'
s = s.replace(alt, neu); geändert.append('speakSlow + tonKnoepfe')

# ---------------------------------------------------------------- 2. choice: Frage hörbar
alt = """      h+='<div class="ub-q">'+E(e.q||'Wähle die richtige Antwort:')+'</div><div class="ub-opts" id="ubOpts">'+"""
neu = """      h+='<div class="ub-q">'+E(e.q||'Wähle die richtige Antwort:')+'</div>'+
         (e.audio?'':tonKnoepfe(e.q))+
         '<div class="ub-opts" id="ubOpts">'+"""
assert s.count(alt) == 1, 'Anker choice nicht eindeutig'
s = s.replace(alt, neu); geändert.append('choice: Frage hörbar')

# ---------------------------------------------------------------- 3. gap: Satz hörbar
alt = """      h+='<div class="ub-q">'+E((e.text||'').replace('___','_____'))+'</div><input class="ub-input" id="ubGap" placeholder="Antwort eintippen…" autocomplete="off" autocapitalize="off">';"""
neu = """      h+='<div class="ub-q">'+E((e.text||'').replace('___','_____'))+'</div>'+
         (e.audioUrl?'':tonKnoepfe(e.text))+
         '<input class="ub-input" id="ubGap" placeholder="Antwort eintippen…" autocomplete="off" autocapitalize="off">';"""
assert s.count(alt) == 1, 'Anker gap nicht eindeutig'
s = s.replace(alt, neu); geändert.append('gap: Satz hörbar')

# ---------------------------------------------------------------- 4. match: Einleitung hörbar
alt = """      h+='<div class="ub-q">'+E(e.intro||'Ordne zu:')+'</div>'+e.pairs.map(function(p,k){"""
neu = """      h+='<div class="ub-q">'+E(e.intro||'Ordne zu:')+'</div>'+tonKnoepfe(e.intro)+e.pairs.map(function(p,k){"""
assert s.count(alt) == 1, 'Anker match nicht eindeutig'
s = s.replace(alt, neu); geändert.append('match: Einleitung hörbar')

# ---------------------------------------------------------------- 5. Lösung vorlesen
alt = """    if(e.type==='listen'){ fb.innerHTML+='<div style="margin-top:10px;"""
neu = """    /* Nach der Antwort den vollständigen, richtigen Satz hören —
       so praegt sich die Lösung über das Ohr ein, nicht nur über das Auge. */
    var lösung='';
    if(e.type==='gap' && e.text) lösung=String(e.text).replace('___', String(e.answer||''));
    else if(e.type==='order') lösung=String(e.answer||'');
    else if(e.type==='buchstaben') lösung=String(e.answer||'');
    else if(e.type==='choice' && e.options && typeof e.answer==='number') lösung=String(e.options[e.answer]||'');
    else if(e.type==='tippen') lösung=String(e.answer||e.wort||e.w||'');
    if(lösung && !e.audioUrl){
      fb.innerHTML+='<div class="ub-loes">'+tonKnoepfe(lösung)+'<span>'+E(lösung)+'</span></div>';
      if(!ok) setTimeout(function(){ speak(lösung.replace(/<[^>]+>/g,'')); }, 350);
    }
    if(e.type==='listen'){ fb.innerHTML+='<div style="margin-top:10px;"""
assert s.count(alt) == 1, 'Anker Feedback nicht eindeutig'
s = s.replace(alt, neu); geändert.append('Lösung wird vorgelesen')

open(P, 'w', encoding='utf-8').write(s)
print('geändert:', ', '.join(geändert))
print('Zeichen vorher %d, nachher %d' % (vorher, len(s)))
