#!/usr/bin/env python3
# Baut eine Grammatik-Lektionsseite aus einer JSON-Inhaltsdatei.
# Aufruf: python3 bau/gram/mach-gram.py bau/gram/gram-<id>.json grammatik-<id>-b1.html
import json, re, sys, os
H = os.path.dirname(os.path.abspath(__file__))
CSS = open(os.path.join(H, 'vorlage-gram.css'), encoding='utf-8').read()
JS  = open(os.path.join(H, 'vorlage-gram.js'),  encoding='utf-8').read()
CSS += open(os.path.join(H, 'vorlage-gram-plus.css'), encoding='utf-8').read()

def typo(t):
    return re.sub(r'„([^„"“]{1,400})"', lambda m: '„'+m.group(1)+'“', t)

def bau(d):
    o=[];A=o.append
    A('<!DOCTYPE html><html lang="de"><head>')
    A('<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">')
    A('<title>%s · Grammatik %s | deutschoderwas</title>' % (d['titel_lang'], d['niveau']))
    A('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>')
    A('<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">')
    A('<style>'); A(CSS); A('</style></head>')
    A('<body><div class="wrapper">')
    A('<div class="eyebrow">deutschoderwas · Grammatik · %s</div>' % d['niveau'])
    A('<h1 class="title">%s <span class="hl">%s</span></h1>' % (d['titel_vor'], d['titel_hl']))
    A('<p class="subtitle">%s</p>' % d['untertitel'])
    A('<div class="hero-tags">')
    for e,n in [('🖼️','Einstieg'),('🧩','Die Regel'),('💬','10 Sätze'),('🎚️',d['spiel_name']),('✅','Üben'),('🗣️','Sprechen')]:
        A('<span class="hero-tag">%s <b>%s</b></span>' % (e,n))
    A('</div>')
    A('<nav class="tabs">')
    for i,(e,n) in enumerate([('🖼️','Einstieg'),('🧩','Die Regel'),('💬','Im Alltag'),('🎚️',d['spiel_name']),('✅','Üben'),('🗣️','Sprechen')]):
        A('<button class="tab%s" data-tab="%d">%s %s</button>' % (' active' if i==0 else '', i, e, n))
    A('</nav>')

    A('<section class="section active" data-section="0">')
    A('<h2 class="st">%s</h2>' % d['einstieg_titel'])
    A('<p class="ssub">%s</p>' % d['einstieg_sub'])
    A('<div class="scene-wrap"><img src="bilder/gram/%s-szene.jpg" alt="%s" loading="lazy"></div>' % (d['basis'], d['szene_alt']))
    for p in d['duos']:
        A('<div class="duo">')
        A('<div class="kalt"><div class="kopf">%s</div><div class="satz">%s</div><div class="wirkung">%s</div></div>' % (p['kopf_a'], p['satz_a'], p['wirkung_a']))
        A('<div class="warm"><div class="kopf">%s</div><div class="satz">%s</div><div class="wirkung">%s</div></div>' % (p['kopf_b'], p['satz_b'], p['wirkung_b']))
        A('</div>')
    A('<div class="gintro">%s</div>' % d['merksatz'])
    A('<div class="tip">%s</div>' % d['einstieg_tipp'])
    A('</section>')

    A('<section class="section" data-section="1">')
    A('<h2 class="st">%s</h2>' % d['regel_titel'])
    A('<p class="ssub">%s</p>' % d['regel_sub'])
    A('<div class="gkette">')
    for s in d['regel']:
        A('<div class="gstep"><span class="gw">%s</span><div class="gt">%s</div><div class="gs">%s</div></div>' % (s['w'], s['t'], s['s']))
    A('</div>')
    for k in d['regel_kaesten']:
        A('<div class="%s">%s</div>' % (k['art'], k['text']))
    A('</section>')

    A('<section class="section" data-section="2">')
    A('<h2 class="st">%s</h2>' % d['alltag_titel'])
    A('<p class="ssub">%s</p>' % d['alltag_sub'])
    A('<div class="bgrid" id="bgrid"></div>')
    A('<div class="tip">%s</div>' % d['alltag_tipp'])
    A('</section>')

    A('<section class="section" data-section="3">')
    A('<h2 class="st">🎚️ %s</h2>' % d['spiel_titel'])
    A('<p class="ssub">%s</p>' % d['spiel_sub'])
    A('<div class="spiel">')
    A('  <div class="lbl">%s</div>' % d['spiel_label'])
    A('  <div class="stimmung" id="sStimmung">Bereit?</div>')
    A('  <div class="rahmen" id="sSatz">—</div>')
    A('  <div class="knoepfe" id="sKnoepfe"></div>')
    A('  <div class="rueck" id="sRueck"></div>')
    A('  <div class="mitte"><span class="punkte" id="sPunkte">0 von 0</span></div>')
    A('  <div class="mitte"><button class="btn" id="sWeiter">Weiter →</button> <button class="btn ghost" id="sNeu">↺ Von vorn</button></div>')
    A('</div>')
    A('<div class="tip teal">%s</div>' % d['spiel_tipp'])
    A('</section>')

    A('<section class="section" data-section="4">')
    A('<h2 class="st">✅ <em>Üben</em></h2>')
    arten={'gap':'Lücken','choice':'Auswahl','bau':'Satzbau','sort':'Sortieren','hoer':'Hören','fehler':'Fehlersuche','schreib':'Schreiben'}
    vorh=[]
    for a in d['ueb']:
        n=arten.get(a['t'],'Aufgabe')
        if n not in vorh: vorh.append(n)
    A('<p class="ssub">%d Aufgaben in wechselnder Form: %s. Nach jeder Antwort steht da, warum es so ist — lies die Erklärung, auch wenn du richtig lagst.</p>' % (len(d['ueb']), ', '.join(vorh)))
    A('<div class="fortschritt"><div class="bar"><i id="uBar"></i></div><div class="txt" id="uTxt">0 von %d</div></div>' % len(d['ueb']))
    A('<div class="ugrid" id="ugrid"></div>')
    A('</section>')

    A('<section class="section" data-section="5">')
    A('<h2 class="st">🗣️ Selbst <em>sprechen</em></h2>')
    A('<p class="ssub">%s</p>' % d['sprechen_sub'])
    A('<div class="dgrid">')
    for k in d['sprechen']:
        A('<div class="dk"><div class="dnum">%s</div><div class="dq">%s</div><div class="dh">%s</div></div>' % (k[0],k[1],k[2]))
    A('</div>')
    A('<div class="tip">%s</div>' % d['redemittel'])
    A('</section>')

    A('<footer><strong>deutschoderwas</strong> · Grammatik %s · %s<br>%s</footer>' % (d['niveau'], d['titel_lang'], d['fuss']))
    A('</div>')
    A('<script>')
    A('var BASIS=%s;' % json.dumps(d['basis']))
    A('var SAETZE=%s;' % json.dumps(d['saetze'], ensure_ascii=False))
    A('var SPIEL=%s;'  % json.dumps(d['spiel'],  ensure_ascii=False))
    A('var UEB=%s;'    % json.dumps(d['ueb'],    ensure_ascii=False))
    A(JS)
    A('</script></body></html>')
    return typo('\n'.join(o))

if __name__=='__main__':
    d=json.load(open(sys.argv[1],encoding='utf-8'))
    open(sys.argv[2],'w',encoding='utf-8').write(bau(d))
    print('geschrieben:',sys.argv[2])
