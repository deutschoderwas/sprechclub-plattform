# -*- coding: utf-8 -*-
"""Ergänzt ueben.js um drei Aufgabenformen: lesen, schreiben, fehler.

  lesen     — kurzer Text, danach eine Verständnisfrage zum Anklicken
              {type:'lesen', text:'…', q:'…', options:[…], answer:0, explain:'…'}
  schreiben — selbst formulieren, dann Musterlösung aufdecken
              {type:'schreiben', auftrag:'…', muster:'…', tipp:'…'}
  fehler    — das falsche Wort im Satz antippen
              {type:'fehler', satz:'…', falsch:'wort', richtig:'…', explain:'…'}

Aufruf: python3 bau/lesen-schreiben.py
"""
import shutil

P = 'ueben.js'
shutil.copy(P, '/tmp/bak-üben2.js')
s = open(P, encoding='utf-8').read()
vorher = len(s)
schritte = []

# ---------------------------------------------------------------- 1. CSS
alt = """    @media(max-width:520px){ .ub-ton-b{width:52px;height:52px;font-size:21px} }"""
neu = """    @media(max-width:520px){ .ub-ton-b{width:52px;height:52px;font-size:21px} }
    /* Lesen: der Text steht ruhig da, die Frage kommt darunter. */
    .ub-lestext{text-align:left;background:#fff;border:1px solid var(--border,#ECECEC);border-radius:14px;
      padding:14px 16px;font-size:16px;line-height:1.7;margin:4px 0 14px;color:#222}
    .ub-lestext p{margin:0 0 10px} .ub-lestext p:last-child{margin:0}
    /* Schreiben: eigenes Feld, danach die Musterlösung. */
    .ub-schreib{width:100%;border:2px solid var(--border,#ECECEC);border-radius:14px;padding:12px 14px;
      font:inherit;font-size:16px;line-height:1.6;resize:vertical;min-height:110px;background:#fff;color:#222}
    .ub-schreib:focus{outline:none;border-color:var(--turq,#2DD4BF)}
    .ub-muster{text-align:left;margin-top:12px;padding:12px 14px;background:#F4FDFB;
      border:1px solid #A7E8DE;border-radius:14px;font-size:16px;line-height:1.6;color:#1f3f3a}
    .ub-zähl{text-align:right;font-size:13px;color:#888;margin-top:6px}
    /* Fehlersuche: jedes Wort ist antippbar. */
    .ub-fsatz{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin:8px 0 4px}
    .ub-fw{border:2px solid transparent;background:#F3F3F1;border-radius:10px;padding:8px 11px;
      font-size:17px;font-weight:600;cursor:pointer;transition:.12s;min-height:44px}
    .ub-fw:hover:not(.aus){background:#FFF3CC}
    .ub-fw.aus{cursor:default}
    .ub-fw.gut{background:#E7F7EC;border-color:#16a34a}
    .ub-fw.schlecht{background:#FDECEA;border-color:#dc2626}"""
assert s.count(alt) == 1, 'CSS-Anker fehlt'
s = s.replace(alt, neu); schritte.append('CSS')

# ---------------------------------------------------------------- 2. Darstellung
alt = """    } else if(e.type==='listen'){"""
neu = """    } else if(e.type==='lesen'){
      /* Erst lesen, dann antworten. Der Text bleibt beim Antworten sichtbar —
         Leseverstehen heißt nicht Auswendiglernen. */
      h+='<div class="ub-q">📖 Lies den Text und beantworte die Frage:</div>'+
         '<div class="ub-lestext">'+String(e.text||'').split(/\\n\\s*\\n/).map(function(a){return '<p>'+E(a)+'</p>';}).join('')+'</div>'+
         tonKnoepfe(e.text)+
         '<div class="ub-q" style="font-size:18px;margin:14px 0 12px">'+E(e.q||'')+'</div>'+
         '<div class="ub-opts" id="ubOpts">'+
         shuf(e.options.map(function(o,k){return k;})).map(function(k){ return '<button class="ub-opt" data-k="'+k+'" onclick="ubChoose('+k+')">'+E(e.options[k])+'</button>'; }).join('')+
         '</div>';
    } else if(e.type==='schreiben'){
      /* Hier gibt es kein Richtig und kein Falsch, sondern einen Vergleich.
         Man schreibt selbst, dann sieht man eine mögliche Fassung. */
      h+='<div class="ub-q">✍️ '+E(e.auftrag||'Schreib deine Antwort:')+'</div>'+
         tonKnoepfe(e.auftrag)+
         '<textarea class="ub-schreib" id="ubSchreib" placeholder="Schreib hier …" oninput="ubSchreibZähl()"></textarea>'+
         '<div class="ub-zähl" id="ubZähl">0 Wörter</div>';
      if(e.tipp) h+='<div class="ub-tip" style="text-align:left;margin-top:8px">💡 '+E(e.tipp)+'</div>';
      btn.disabled=false; btn.textContent='Lösung zeigen';
    } else if(e.type==='fehler'){
      /* Fehler finden schult das Auge für die eigene Sprache — man liest
         seinen eigenen Text danach anders. */
      S.fehlerWahl=null;
      h+='<div class="ub-q">🔍 In diesem Satz steckt ein Fehler. Tippe das falsche Wort an:</div>'+
         '<div class="ub-fsatz" id="ubFsatz">'+
         String(e.satz||'').split(/\\s+/).filter(Boolean).map(function(w,k){
           return '<button class="ub-fw" data-w="'+E(w)+'" onclick="ubFehlerWahl('+k+',this)">'+E(w)+'</button>';
         }).join('')+'</div>';
    } else if(e.type==='listen'){"""
assert s.count(alt) == 1, 'Darstellungs-Anker fehlt'
s = s.replace(alt, neu); schritte.append('Darstellung lesen/schreiben/fehler')

# ---------------------------------------------------------------- 3. Auswertung
alt = """    } else if(e.type==='speak'||e.type==='shadow'){ ok=true; }"""
neu = """    } else if(e.type==='speak'||e.type==='shadow'){ ok=true; }
    else if(e.type==='lesen'){ ok=(S.sel===e.answer); var leopts=document.getElementById('ubOpts');
      if(leopts) Array.prototype.forEach.call(leopts.children,function(b){ var k=+b.dataset.k;
        b.classList.add('aus'); if(k===e.answer)b.classList.add('gut'); else if(k===S.sel)b.classList.add('schlecht'); });
      sol=e.explain||('Richtig wäre: '+(e.options?e.options[e.answer]:'')); }
    else if(e.type==='schreiben'){ ok=true;
      var ta=document.getElementById('ubSchreib'); if(ta) ta.disabled=true; }
    else if(e.type==='fehler'){ var gewählt=S.fehlerWahl;
      var wörter=String(e.satz||'').split(/\\s+/).filter(Boolean);
      var zielIdx=-1;
      wörter.forEach(function(w,k){ if(zielIdx<0 && w.replace(/[.,!?;:]+$/,'')===e.falsch) zielIdx=k; });
      ok=(gewählt===zielIdx);
      var fs=document.getElementById('ubFsatz');
      if(fs) Array.prototype.forEach.call(fs.children,function(b,k){ b.classList.add('aus');
        if(k===zielIdx)b.classList.add('gut'); else if(k===gewählt)b.classList.add('schlecht'); });
      sol=(e.explain||'')+' Richtig heißt es: '+(e.richtig||''); }"""
assert s.count(alt) == 1, 'Auswertungs-Anker fehlt'
s = s.replace(alt, neu); schritte.append('Auswertung')

# ---------------------------------------------------------------- 4. selbstbewertet + Lösung
alt = """    var selfRated=(e.type==='speak'||e.type==='shadow'||e.type==='karte');"""
neu = """    var selfRated=(e.type==='speak'||e.type==='shadow'||e.type==='karte'||e.type==='schreiben');"""
assert s.count(alt) == 1, 'selfRated-Anker fehlt'
s = s.replace(alt, neu); schritte.append('Schreiben zählt als selbst bewertet')

alt = """    else if(e.type==='tippen') lösung=String(e.answer||e.wort||e.w||'');"""
neu = """    else if(e.type==='tippen') lösung=String(e.answer||e.wort||e.w||'');
    else if(e.type==='fehler') lösung=String(e.richtig||'');
    else if(e.type==='lesen' && e.options && typeof e.answer==='number') lösung=String(e.options[e.answer]||'');"""
assert s.count(alt) == 1, 'Lösungs-Anker fehlt'
s = s.replace(alt, neu); schritte.append('Lösung auch für fehler/lesen')

# Musterlösung beim Schreiben anzeigen
alt = """    if(e.type==='listen'){ fb.innerHTML+='<div style="margin-top:10px;"""
neu = """    if(e.type==='schreiben' && e.muster){
      fb.innerHTML+='<div class="ub-muster"><b>Ein möglicher Text:</b><br>'+E(e.muster)+'</div>'+tonKnoepfe(e.muster);
    }
    if(e.type==='listen'){ fb.innerHTML+='<div style="margin-top:10px;"""
assert s.count(alt) == 1, 'Muster-Anker fehlt'
s = s.replace(alt, neu); schritte.append('Musterlösung beim Schreiben')

# ---------------------------------------------------------------- 5. Hilfsfunktionen
alt = """  window.ubMatchChk=function(){"""
neu = """  window.ubSchreibZähl=function(){ var t=document.getElementById('ubSchreib'), z=document.getElementById('ubZähl');
    if(!t||!z)return; var n=(t.value.trim().match(/\\S+/g)||[]).length; z.textContent=n+(n===1?' Wort':' Wörter'); };
  window.ubFehlerWahl=function(k,btn){ if(S.answered)return; S.fehlerWahl=k;
    var fs=document.getElementById('ubFsatz');
    if(fs) Array.prototype.forEach.call(fs.children,function(b){ b.classList.remove('sel'); b.style.borderColor=''; });
    btn.style.borderColor='var(--turq,#2DD4BF)';
    document.getElementById('ubBtn').disabled=false; };
  window.ubMatchChk=function(){"""
assert s.count(alt) == 1, 'Hilfsfunktions-Anker fehlt'
s = s.replace(alt, neu); schritte.append('Hilfsfunktionen')

open(P, 'w', encoding='utf-8').write(s)
print('ergänzt:', ', '.join(schritte))
print('Zeichen vorher %d, nachher %d' % (vorher, len(s)))
