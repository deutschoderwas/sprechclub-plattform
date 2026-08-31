# -*- coding: utf-8 -*-
"""Ergaenzt ueben.js: Vorlesen an jeder Aufgabe, Loesung wird vorgelesen.

Aufruf:  python3 bau/ton-ins-ueben.py
Legt vorher eine Sicherung unter /tmp/bak-ueben.js an.
"""
import re, shutil, sys, os

P = 'ueben.js'
shutil.copy(P, '/tmp/bak-ueben.js')
s = open(P, encoding='utf-8').read()
vorher = len(s)
geaendert = []

# ---------------------------------------------------------------- 1. Hilfsfunktionen
alt = """  window.ubSpeak=speak;"""
neu = """  window.ubSpeak=speak;
  /* Langsamer vorlesen — fuer Lernende oft wichtiger als die normale Fassung. */
  function speakSlow(text){ try{ stopAudio(); if(!window.speechSynthesis)return;
    var u=new SpeechSynthesisUtterance(text); u.lang='de-DE'; u.rate=0.6;
    var vs=(speechSynthesis.getVoices()||[]).filter(function(v){return /^de/i.test(v.lang);}); if(vs.length)u.voice=vs[0];
    speechSynthesis.speak(u);
  }catch(e){} }
  window.ubSpeakSlow=speakSlow;
  /* Zwei kleine Knoepfe: normal und langsam. Fuer jeden Satz, den man hoeren koennen sollte. */
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
s = s.replace(alt, neu); geaendert.append('speakSlow + tonKnoepfe')

# ---------------------------------------------------------------- 2. choice: Frage hoerbar
alt = """      h+='<div class="ub-q">'+E(e.q||'Wähle die richtige Antwort:')+'</div><div class="ub-opts" id="ubOpts">'+"""
neu = """      h+='<div class="ub-q">'+E(e.q||'Wähle die richtige Antwort:')+'</div>'+
         (e.audio?'':tonKnoepfe(e.q))+
         '<div class="ub-opts" id="ubOpts">'+"""
assert s.count(alt) == 1, 'Anker choice nicht eindeutig'
s = s.replace(alt, neu); geaendert.append('choice: Frage hoerbar')

# ---------------------------------------------------------------- 3. gap: Satz hoerbar
alt = """      h+='<div class="ub-q">'+E((e.text||'').replace('___','_____'))+'</div><input class="ub-input" id="ubGap" placeholder="Antwort eintippen…" autocomplete="off" autocapitalize="off">';"""
neu = """      h+='<div class="ub-q">'+E((e.text||'').replace('___','_____'))+'</div>'+
         (e.audioUrl?'':tonKnoepfe(e.text))+
         '<input class="ub-input" id="ubGap" placeholder="Antwort eintippen…" autocomplete="off" autocapitalize="off">';"""
assert s.count(alt) == 1, 'Anker gap nicht eindeutig'
s = s.replace(alt, neu); geaendert.append('gap: Satz hoerbar')

# ---------------------------------------------------------------- 4. match: Einleitung hoerbar
alt = """      h+='<div class="ub-q">'+E(e.intro||'Ordne zu:')+'</div>'+e.pairs.map(function(p,k){"""
neu = """      h+='<div class="ub-q">'+E(e.intro||'Ordne zu:')+'</div>'+tonKnoepfe(e.intro)+e.pairs.map(function(p,k){"""
assert s.count(alt) == 1, 'Anker match nicht eindeutig'
s = s.replace(alt, neu); geaendert.append('match: Einleitung hoerbar')

# ---------------------------------------------------------------- 5. Loesung vorlesen
alt = """    if(e.type==='listen'){ fb.innerHTML+='<div style="margin-top:10px;"""
neu = """    /* Nach der Antwort den vollstaendigen, richtigen Satz hoeren —
       so praegt sich die Loesung ueber das Ohr ein, nicht nur ueber das Auge. */
    var loesung='';
    if(e.type==='gap' && e.text) loesung=String(e.text).replace('___', String(e.answer||''));
    else if(e.type==='order') loesung=String(e.answer||'');
    else if(e.type==='buchstaben') loesung=String(e.answer||'');
    else if(e.type==='choice' && e.options && typeof e.answer==='number') loesung=String(e.options[e.answer]||'');
    else if(e.type==='tippen') loesung=String(e.answer||e.wort||e.w||'');
    if(loesung && !e.audioUrl){
      fb.innerHTML+='<div class="ub-loes">'+tonKnoepfe(loesung)+'<span>'+E(loesung)+'</span></div>';
      if(!ok) setTimeout(function(){ speak(loesung.replace(/<[^>]+>/g,'')); }, 350);
    }
    if(e.type==='listen'){ fb.innerHTML+='<div style="margin-top:10px;"""
assert s.count(alt) == 1, 'Anker Feedback nicht eindeutig'
s = s.replace(alt, neu); geaendert.append('Loesung wird vorgelesen')

open(P, 'w', encoding='utf-8').write(s)
print('geaendert:', ', '.join(geaendert))
print('Zeichen vorher %d, nachher %d' % (vorher, len(s)))
