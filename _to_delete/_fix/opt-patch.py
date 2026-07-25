# -*- coding: utf-8 -*-
"""Ersetzt optionen[] und richtig: einer Übung, gefunden über ihre Frage."""
import json, re, sys, os

ORD = sys.argv[1] if len(sys.argv) > 1 else '.'
neu = json.load(open('/tmp/rate-falle-neu.json', encoding='utf-8'))
alt = json.load(open('/tmp/rate-falle.json', encoding='utf-8'))

def js_str(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"

bericht = {'ok': 0, 'fehler': []}
for n in neu:
    a = next((x for x in alt if x['datei'] == n['datei'] and x['nr'] == n['nr']), None)
    if not a:
        bericht['fehler'].append(n['datei'] + ' #' + str(n['nr']) + ': kein Gegenstück'); continue
    pfad = os.path.join(ORD, n['datei'] + '.js')
    s = open(pfad, encoding='utf-8').read()

    # Anker: die Frage im Dateitext finden
    frage = a['frage']
    kern = frage.replace('„', '').replace('"', '')[:40]
    i = -1
    for kandidat in (frage, frage[:60], kern):
        j = s.find(kandidat)
        if j >= 0: i = j; break
    if i < 0:
        bericht['fehler'].append(n['datei'] + ' #' + str(n['nr']) + ': Frage nicht gefunden'); continue

    # ab dort das nächste optionen: [...] und richtig: N ersetzen
    m_opt = re.compile(r"optionen\s*:\s*\[").search(s, i)
    if not m_opt:
        bericht['fehler'].append(n['datei'] + ' #' + str(n['nr']) + ': optionen nicht gefunden'); continue
    # passende schliessende Klammer suchen
    k = m_opt.end(); tiefe = 1; inStr = None
    while k < len(s) and tiefe:
        c = s[k]
        if inStr:
            if c == '\\': k += 1
            elif c == inStr: inStr = None
        elif c in "'\"": inStr = c
        elif c == '[': tiefe += 1
        elif c == ']': tiefe -= 1
        k += 1
    ende_opt = k
    neu_opt = "optionen: [" + ", ".join(js_str(o) for o in n['optionen']) + "]"

    m_ri = re.compile(r"richtig\s*:\s*\d+").search(s, ende_opt, ende_opt + 160)
    if not m_ri:
        bericht['fehler'].append(n['datei'] + ' #' + str(n['nr']) + ': richtig nicht gefunden'); continue

    s = s[:m_opt.start()] + neu_opt + s[ende_opt:m_ri.start()] + ('richtig: %d' % n['richtig']) + s[m_ri.end():]
    open(pfad, 'w', encoding='utf-8').write(s)
    bericht['ok'] += 1

print(json.dumps(bericht, ensure_ascii=False, indent=1))
