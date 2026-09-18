# -*- coding: utf-8 -*-
"""Welche Schriften stehen wo? Erst zaehlen, dann anfassen."""
import io, os, re, collections

WURZEL = '.'
UEBERSPRINGEN = ('.git', 'node_modules', '_tmp', '_to_delete', 'bau', '.vercel')

fam_link = re.compile(r'family=([A-Za-z0-9+]+)')
fam_css  = re.compile(r'font-family\s*:\s*([^;}\n]+)')

zaehler = collections.Counter()
paare   = collections.Counter()
dateien = collections.defaultdict(list)

for wurzel, ordner, namen in os.walk(WURZEL):
    ordner[:] = [o for o in ordner if o not in UEBERSPRINGEN and not o.startswith('.')]
    for n in namen:
        if not n.endswith(('.html', '.css')):
            continue
        p = os.path.join(wurzel, n)
        try:
            s = io.open(p, encoding='utf-8', errors='replace').read()
        except Exception:
            continue
        geladen = set(f.replace('+', ' ') for f in fam_link.findall(s))
        benutzt = set()
        for regel in fam_css.findall(s):
            for stueck in regel.split(','):
                stueck = stueck.strip().strip('\'"')
                if stueck and stueck[0].isupper():
                    benutzt.add(stueck)
        for g in geladen:
            zaehler[g] += 1
            dateien[g].append(p)
        if geladen:
            paare[' + '.join(sorted(geladen))] += 1
        # geladen, aber nirgends benutzt
        for g in geladen - benutzt:
            zaehler['(geladen, ungenutzt) ' + g] += 1

print('=== Schriften, nach Dateien ===')
for f, n in zaehler.most_common(40):
    print('%5d  %s' % (n, f))
print()
print('=== Schriftwelten (welche Familien zusammen geladen werden) ===')
for k, n in paare.most_common(20):
    print('%5d  %s' % (n, k))
