import json,re
exec(open('zusatz.py').read())
EXTRA={'leben-berlin':{'plus':['Die Stadt besteht aus vielen Vierteln – in Berlin sagt man dazu „<g>Kiez</g>“.']},
 'leben-zuerich':{'plus':['Bezahlt wird nicht mit Euro, sondern mit <g>Franken</g>.']},
 'leben-muenchen':{'repl':{1:('Bekannt für das Oktoberfest, Biergärten, Tracht','Bekannt für das Oktoberfest, den <g>Biergarten</g>, Tracht')}}}
alt={t['id']:t for t in json.load(open('alt-landeskunde.json'))}
J=lambda x: json.dumps(x,ensure_ascii=False)
LAB={'ab':'🟨 A2·B1','bb':'🟦 B1·B2','bc':'🟩 B2·C1'}
out=[];warn=[];themen_neu=[]
for oid,z in Z.items():
    o=alt[oid]; niv=o['niveau']
    dach=list(z.get('dach') or o['dach'])
    for i,(a_,b_) in EXTRA.get(oid,{}).get('repl',{}).items(): dach[i]=dach[i].replace(a_,b_)
    dach+=EXTRA.get(oid,{}).get('plus',[])
    if True:
        for i,w in (z.get('mark') or {}).items():
            if f'<g>{w}</g>' in dach[i]: continue
            if w not in dach[i]: warn.append(f'{oid}: {w} nicht in dach[{i}]')
            dach[i]=dach[i].replace(w,f'<g>{w}</g>',1)
    alltext=' '.join(dach)
    gl={}
    for k,(e,t) in z['glossar'].items():
        if f'<g>{k}</g>' in alltext: gl[k]={'e':e,'t':t}
        else: warn.append(f'{oid}: Glossar {k} nicht markiert → raus')
    tipp=re.sub(r'</?g>','',z.get('tipp') or o['tipp'])
    a=z['aktiv']
    u={'titel':z.get('titel') or o['titel'],'emoji':z['emoji'],'bereich':'Landeskunde DACH','intro':z['intro'],
       'glossar':gl,'dach':dach,'skala':{'titel':z['skala'][0],'legende':z['skala'][1]},
       'situationen':[{'o':x[0],'ic':x[1],'s':x[2],'meter':x[3],'w':x[4],'t':x[5]} for x in z['sit']],
       'merk':z.get('merk') or o.get('merk',''),
       'fragen':o['fragen'],'chunks':o['chunks'],'vokabeln':o['vokabeln'],'tipp':tipp,
       'mission':{'t':M,'d':MD,'pts':20},
       'aktiv':{'titel':'Spielt eine kleine Szene','emoji':'🎭','aufgabe':a[0],'rollenA':a[1],'rollenB':a[2],'hilfe':a[3],'pts':15},
       'quiz':[{'q':q[0],'o':q[1],'r':q[2]} for q in z['quiz']]}
    if not u['merk']: warn.append(oid+': merk leer')
    out.append(f"/* ---------- {u['titel'].upper()} · {LAB[niv]} (aus alter Landeskunde-App übernommen + ergänzt) ---------- */\nstufe('{z['wid']}','{niv}',{J(u)});\n")
    if 'bereich' in z: themen_neu.append((z['wid'],u['titel'],z['bereich'],z['emoji']))
open('uebernahme-20.js','w').write('\n'.join(out))
json.dump(themen_neu,open('themen-neu.json','w'),ensure_ascii=False)
print('\n'.join(warn) or 'keine Warnungen'); print(len(out),'Blöcke'); print(themen_neu)
