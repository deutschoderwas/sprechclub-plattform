#!/usr/bin/env python3
"""Amandas Pruefstand — stellt die Fragen aus fragen.json an die laufende
Seite und prueft, was sich automatisch pruefen laesst. Den Rest liest ein
Mensch: die gefaehrlichen Fehler sehen immer plausibel aus.

    python3 lauf.py            alle Fragen
    python3 lauf.py 17 27 28   nur diese
"""
import json, os, re, subprocess, sys, time

URL = os.environ.get('AMANDA_URL', 'https://www.deutschoderwas-club.de/api/support-chat')
HIER = os.path.dirname(os.path.abspath(__file__))
fragen = json.load(open(os.path.join(HIER, 'fragen.json'), encoding='utf-8'))
nur = set(int(x) for x in sys.argv[1:]) if len(sys.argv) > 1 else None

def frag(text):
    koerper = json.dumps({'verlauf': [{'wer': 'du', 'text': text}]})
    r = subprocess.run(['curl', '-sS', '-m', '90', '-X', 'POST', URL,
                        '-H', 'Content-Type: application/json', '--data-binary', koerper],
                       capture_output=True, text=True)
    try:
        return json.loads(r.stdout).get('text', '')
    except Exception:
        return ''   # Leitung weg — kein Befund ueber Amanda

ergebnisse = []
for q in fragen:
    if nur and q['nr'] not in nur:
        continue
    t = frag(q['f'])
    maengel = []
    if not t.strip():
        maengel.append('keine Antwort erhalten (Leitung?)')
    else:
        # Amandas Sternchen stehen mitten im Satz ("*auf den* Tisch").
        # Zum Pruefen muessen sie weg, sonst findet man den Satz nicht wieder.
        rein = t.replace('*', '')
        for v in q['verboten']:
            # Eine falsche Form darf vorkommen, wenn Amanda sie ausdruecklich
            # als falsch kennzeichnet — genau das soll sie ja tun.
            for zeile in rein.split('\n'):
                if re.search(re.escape(v), zeile, re.I) and not re.search(
                        r'nicht|keine?|falsch|vermeide|standardsprachlich', zeile, re.I):
                    maengel.append('verboten: ' + v)
                    break
        if q['erwartet'] and not any(re.search(re.escape(e), rein, re.I) for e in q['erwartet']):
            maengel.append('fehlt: ' + ' / '.join(q['erwartet']))
        if t.count('**'):
            maengel.append('doppelte Sternchen')
        if re.search(r'(?m)^\s*#', t):
            maengel.append('Raute als Ueberschrift')
        if re.search(r'(?m)^\s*-\s', t):
            maengel.append('Spiegelstrich statt Punkt')
        for falsch, richtig in (('fuer', 'für'), ('koennen', 'können'), ('Woerter', 'Wörter'),
                                ('Saetze', 'Sätze'), ('muessen', 'müssen')):
            if re.search(r'\b' + falsch + r'\b', t):
                maengel.append('Umlaut fehlt: ' + falsch + ' statt ' + richtig)
    ergebnisse.append({'nr': q['nr'], 'thema': q['thema'], 'f': q['f'],
                       'text': t, 'maengel': maengel})
    print('%2d %-20s %s' % (q['nr'], q['thema'], 'OK' if not maengel else 'PRUEFEN: ' + '; '.join(maengel)))
    time.sleep(0.3)

json.dump(ergebnisse, open(os.path.join(HIER, 'ergebnis.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)
schlecht = [e for e in ergebnisse if e['maengel']]
print('\n%d von %d automatisch beanstandet — jetzt ergebnis.json lesen.'
      % (len(schlecht), len(ergebnisse)))
