# -*- coding: utf-8 -*-
"""Baut den Lernpfad in ueben.js ein: Reihenfolge, Schrittnummer, Voraussetzungen.

Aufruf: python3 bau/pfad-einbauen.py
"""
import shutil

P = 'ueben.js'
shutil.copy(P, '/tmp/bak-üben3.js')
s = open(P, encoding='utf-8').read()
vorher = len(s)
schritte = []

# ---------------------------------------------------------------- 1. CSS
alt = """    .ub-loes .ub-ton-b{width:40px;height:40px;font-size:17px}"""
neu = """    .ub-loes .ub-ton-b{width:40px;height:40px;font-size:17px}
    /* Lernpfad: Schrittnummer und das, was vorher sitzen sollte. */
    .ub-schritt{display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:800;
      color:#7C3AED;background:#F3EDFF;border-radius:999px;padding:3px 9px;letter-spacing:.02em}
    .ub-warum{font-size:13px;line-height:1.5;color:#555;margin:6px 0 2px}
    .ub-vorher{font-size:12px;line-height:1.45;color:#8A8079;margin-top:6px}
    .ub-vorher b{color:#5A5048;font-weight:700}"""
assert s.count(alt) == 1, 'CSS-Anker fehlt'
s = s.replace(alt, neu); schritte.append('CSS')

# ---------------------------------------------------------------- 2. Karte ergänzen
alt = """            '<div class="tt">'+E(t.title)+'</div>'+
            '<div class="meta">'+t.exercises.length+' Aufgaben'+(tp?' · beste Runde '+tp+'%':'')+'</div>'+"""
neu = """            '<div class="tt">'+E(t.title)+'</div>'+
            pfadHtml(t)+
            '<div class="meta">'+t.exercises.length+' Aufgaben'+(tp?' · beste Runde '+tp+'%':'')+'</div>'+"""
assert s.count(alt) == 1, 'Karten-Anker fehlt'
s = s.replace(alt, neu); schritte.append('Karte zeigt Pfad')

# ---------------------------------------------------------------- 3. Hilfsfunktion + Sortierung
alt = """    var faecher={}, rest=[];
    sk.themes.forEach(function(t,i){"""
neu = """    /* Der Lernpfad sagt, in welcher Reihenfolge die Themen Sinn ergeben
       und was vorher sitzen sollte. Fehlt die Datei, bleibt alles wie
       vorher — es steht dann nur keine Schrittnummer auf der Karte. */
    function pfadHtml(t){
      var LP=window.LERNPFAD; if(!LP) return '';
      var sch=LP.schritt(t.id); if(!sch) return '';
      var h='<div class="ub-schritt">Schritt '+sch.nr+'</div>';
      if(sch.warum) h+='<div class="ub-warum">'+E(sch.warum)+'</div>';
      var vor=LP.vorher(t.id);
      if(vor.length) h+='<div class="ub-vorher">Vorher sitzen sollte: <b>'+vor.map(E).join('</b>, <b>')+'</b></div>';
      return h;
    }
    var geordnet = (window.LERNPFAD ? window.LERNPFAD.sortiere(sk.themes) : sk.themes);
    var faecher={}, rest=[];
    geordnet.forEach(function(t,i){"""
assert s.count(alt) == 1, 'Sortier-Anker fehlt'
s = s.replace(alt, neu); schritte.append('Sortierung nach Pfad')

# Der Index i wird für die Karte gebraucht — er muss auf das Originalarray zeigen
alt = """    geordnet.forEach(function(t,i){
      var lv=String(t.level||'').trim().toUpperCase();
      if(NIV.indexOf(lv)<0){ rest.push({t:t,i:i}); return; }
      (faecher[lv]=faecher[lv]||[]).push({t:t,i:i});
    });"""
neu = """    geordnet.forEach(function(t){
      /* Die Karte braucht den Platz im Originalarray, nicht in der
         sortierten Liste — sonst zeigt der Fortschritt auf das
         falsche Thema. */
      var i = sk.themes.indexOf(t);
      var lv=String(t.level||'').trim().toUpperCase();
      if(NIV.indexOf(lv)<0){ rest.push({t:t,i:i}); return; }
      (faecher[lv]=faecher[lv]||[]).push({t:t,i:i});
    });"""
assert s.count(alt) == 1, 'Index-Anker fehlt'
s = s.replace(alt, neu); schritte.append('Index bleibt korrekt')

open(P, 'w', encoding='utf-8').write(s)
print('eingebaut:', ', '.join(schritte))
print('Zeichen vorher %d, nachher %d' % (vorher, len(s)))
