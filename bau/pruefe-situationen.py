#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
pruefe-situationen.py — sitzen die Situationszeilen sauber?

Auf jeder Wortschatzboost-Seite steht unter jedem Wort eine Zeile mit
der Situation, in der man es braucht. Diese Prüfung sieht nach, ob
dabei nichts verrutscht ist:

  1. Hat jede Karte eine Situation — und keine zwei?
  2. Hat jede Situationszeile ihr Etikett?
  3. Steht irgendwo ein nacktes & statt &amp;?
  4. Ist ein Anführungszeichen gerade statt typografisch geblieben?
  5. Verrät die Zeile beim Verdeck-Spiel das gesuchte Wort?

Punkt 5 ist der wichtigste: Wenn die Situation sichtbar bleibt,
während das Wort verdeckt ist, kann man raten statt zu erinnern.

Aufruf: python3 bau/pruefe-situationen.py
"""
import io, re, glob, os, sys

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))

klagen = []
uebersicht = []

for f in sorted(glob.glob('wortschatzboost-*.html')):
    s = io.open(f, encoding='utf-8').read()
    karten = s.count('class="wcard"') + s.count('class="vocab"')
    zeilen = s.count('<div class="wsit">')
    etiketten = s.count('<span class="wsl">')

    uebersicht.append((f, zeilen, karten))

    if zeilen != karten:
        klagen.append(f + ': ' + str(zeilen) + ' Situationen auf ' + str(karten) + ' Karten')
    if etiketten != zeilen:
        klagen.append(f + ': ' + str(etiketten) + ' Etiketten auf ' + str(zeilen) + ' Zeilen')
    if '<div class="wsit"><div class="wsit">' in s:
        klagen.append(f + ': eine Zeile steht doppelt')

    for m in re.finditer(r'<div class="wsit">(.{0,700}?)</div>\s*(?:</div>|<)', s, re.S):
        t = m.group(1)
        if re.search(r'&(?!amp;|lt;|gt;|quot;|#)', t):
            klagen.append(f + ': nacktes & — ' + t[:60])
        if re.search(r'„[^„“]{0,150}"', t):
            klagen.append(f + ': gerades Anführungszeichen — ' + t[:60])

    # Beim Verdecken muss die Zeile mit verschwinden
    if 'wgrid.hide' in s:
        if '.wgrid.hide .wcard .wsit{opacity:0;}' not in s:
            klagen.append(f + ': Situation bleibt beim Verdecken sichtbar')
        if '.wgrid.hide .wcard.revealed .wsit{opacity:1;}' not in s:
            klagen.append(f + ': Situation kommt beim Aufdecken nicht zurück')

print('\nSeite'.ljust(52) + 'Situationen / Karten')
for f, z, k in uebersicht:
    print('  ' + f.ljust(50) + str(z).rjust(3) + ' / ' + str(k))

print('\n' + ('Alles sauber.' if not klagen else 'Zu klären:'))
for k in klagen[:30]:
    print('  ' + k)
if len(klagen) > 30:
    print('  … und ' + str(len(klagen) - 30) + ' weitere')
sys.exit(1 if klagen else 0)
