# -*- coding: utf-8 -*-
"""
bau/farb-nenner.py — eine Farbwelt statt zwei

Gemessen am 16.09.: konto.html und neun Stylesheets enthielten
zusammen ueber 1200 harte Farbwerte, dazu drei sich widersprechende
:root-Bloecke allein in konto.html. --turq war zweimal verschieden
definiert (#1990A4 und #35AFD0), --bg ebenfalls (#FFF8E0 und
#F6F9FA). Deshalb sah die Plattform cremefarben aus und die App
hellgrau — dasselbe Produkt in zwei Farbwelten.

Dieses Skript bildet die alte Creme-Palette auf die App-Palette ab,
ueberall gleichzeitig. Die Zuordnung ist 1:1 nach Rolle, nicht nach
Aehnlichkeit: Grund auf Grund, Karte auf Karte, Linie auf Linie.

Aufruf:  python3 bau/farb-nenner.py [--trocken]
"""
import io, os, re, sys, glob

W = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TROCKEN = '--trocken' in sys.argv

# alt -> neu, mit der Rolle als Begruendung
ZUORDNUNG = [
    ('#FFF8E0', '#F6F9FA', 'Seitengrund: Creme -> Hellgrau'),
    ('#FBF7EE', '#F6F9FA', 'Seitengrund, zweite Schreibweise'),
    ('#FFFDF3', '#FFFFFF', 'Kartenflaeche: Creme -> Weiss'),
    ('#FCFAF6', '#FFFFFF', 'Kartenflaeche, zweite Schreibweise'),
    ('#E7DFC7', '#E7ECEE', 'Trennlinie'),
    ('#EFE9D8', '#E7ECEE', 'Rahmen'),
    ('#20211F', '#14181B', 'Tinte'),
    ('#54594A', '#5A6B72', 'Text weich'),
    ('#8B9088', '#8A9AA1', 'Text sehr weich'),
    ('#DD0000', '#E1352C', 'Rot'),
    ('#B00000', '#B02B24', 'Rot dunkel'),
    ('#1990A4', '#10627A', 'Tuerkis fuer Text'),
    ('#9FE4F1', '#35AFD0', 'Tuerkis als Flaeche'),
    ('#EAFBFE', '#E6F8FC', 'Tuerkis, ganz zart'),
]

DATEIEN = [os.path.join(W, 'konto.html')] + sorted(glob.glob(os.path.join(W, '*.css')))

gesamt = 0
proFarbe = {}
for p in DATEIEN:
    if not os.path.exists(p):
        continue
    s = io.open(p, encoding='utf-8').read()
    vorher = s
    for alt, neu, rolle in ZUORDNUNG:
        # gross und klein geschrieben, aber nur als vollstaendiger Farbwert
        muster = re.compile(re.escape(alt) + r'\b', re.I)
        n = len(muster.findall(s))
        if n:
            s = muster.sub(neu, s)
            proFarbe[alt] = proFarbe.get(alt, 0) + n
            gesamt += n
    if s != vorher and not TROCKEN:
        io.open(p, 'w', encoding='utf-8').write(s)

print('%d Farbwerte umgestellt in %d Dateien%s' % (gesamt, len(DATEIEN), ' (trocken)' if TROCKEN else ''))
for alt, neu, rolle in ZUORDNUNG:
    if proFarbe.get(alt):
        print('  %5d x  %s -> %s   %s' % (proFarbe[alt], alt, neu, rolle))
