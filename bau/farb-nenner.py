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

    # Die dritte Palette: das Club-Design der 395 Lektionsseiten.
    ('#161616', '#14181B', 'Tinte der Lektionsseiten'),
    ('#EAE6DE', '#E7ECEE', 'Linie der Lektionsseiten'),
    ('#F0E4C4', '#E7ECEE', 'Rahmen (durchgehend border:1px solid)'),
    ('#FFF8E8', '#F6F9FA', 'warmer Grund der Lektionsseiten'),
    ('#FDF6EC', '#F6F9FA', 'Grund, Fraunges-Welt'),
    ('#FDF7EC', '#F6F9FA', 'Grund, Poppins-Welt'),
    ('#167F9E', '#10627A', 'dunkles Tuerkis der Lektionsseiten'),
    ('#5B6470', '#5A6B72', 'Text weich der Lektionsseiten'),

    # Ein Tuerkis fuer alles. Gemessen gewinnt das der Lektionsseiten:
    # weisser Text darauf 3,2:1 statt 2,6:1, dunkler Text 5,5:1 statt
    # 7,0:1 — in beide Richtungen brauchbar, waehrend #35AFD0 mit
    # weissem Text unlesbar ist. Also zieht die Plattform nach.
    ('#35AFD0', '#1B9BC0', 'Tuerkisflaeche: auf den Ton der Lektionen'),
]

# Auch die .js-Dateien: viele Ansichten bringen ihr eigenes CSS als
# Zeichenkette mit und setzen dort eigene Variablen (start.js hatte
# --warm:#FFF7E6 mitten im Skript). In den .js-Dateien steckten 2189
# Farbwerte — mehr als in allen Stylesheets zusammen.
def lektionsseiten():
    """Die Seiten aus lektionen-katalog.js.

    Erster Anlauf wollte die Datei mit Python exec() lesen — sie ist
    aber JavaScript, also kam nichts zurueck und die 395 Seiten
    blieben unangetastet. Jetzt werden die Dateinamen mit einem
    Ausdruck herausgezogen.

    Diese Seiten tragen ihr CSS inline und haben eine eigene, dritte
    Palette (das "Club-Design": #161616, #EAE6DE, #FFF8E8, #1B9BC0) —
    zusammen 15648 harte Farbwerte.
    """
    katalog = os.path.join(W, 'lektionen-katalog.js')
    if not os.path.exists(katalog):
        return []
    text = io.open(katalog, encoding='utf-8').read()
    raus = []
    for name in re.findall(r'"d"\s*:\s*"([^"]+\.html)"', text):
        p = os.path.join(W, name)
        if os.path.exists(p):
            raus.append(p)
    return raus

DATEIEN = ([os.path.join(W, 'konto.html')]
           + sorted(glob.glob(os.path.join(W, '*.css')))
           + sorted(glob.glob(os.path.join(W, '*.js')))
           + lektionsseiten())

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


# ============================================================
#  Zweite Stufe: die vielen einzelnen Cremetoene
#
#  Nach der ersten Stufe blieben ueber 60 verschiedene warme
#  Hell-Toene uebrig, die meisten nur ein- oder zweimal benutzt —
#  #FFF7E6, #FFFBEC, #FBEDD8, #EFE5CC und so weiter. Jeder fuer
#  sich unauffaellig, zusammen der Grund, warum nichts zueinander
#  passt.
#
#  Statt sie einzeln zuzuordnen entscheidet hier eine Regel nach
#  Rolle. In Ruhe gelassen werden:
#    · Gelb und Gold  — Markenfarben (deutsche Flagge)
#    · Rosa und Rot   — Warn- und Fehlerfarben
#  Ersetzt wird nur, was als warme FLAECHE oder LINIE dient.
# ============================================================

def rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def rolle(c):
    """Was ist das fuer eine Farbe? Gibt den Ersatz zurueck oder None."""
    r, g, b = rgb(c)
    if not (r >= g >= b and (r - b) >= 12):
        return None                      # nicht warm
    hell = (r + g + b) / 3.0
    if (g - b) > 45 and b < 195:
        return None                      # Gelb/Gold: Markenfarbe, bleibt
                                         # (#FFE79A, #F5E4AE und Verwandte —
                                         #  das sind Akzente, keine Linien)
    if (r - g) >= 12 and (g - b) < 10:
        return None                      # Rosa/Rot: Warnfarbe, bleibt
                                         # Erster Anlauf prüfte nur (g-b)<10 und
                                         # verschonte damit auch neutrale
                                         # Warmgrautöne wie #EBE7DF, die gar
                                         # kein Rosa sind.
    # Kraeftige Farben sind Akzente, keine Flaechen. #E59B90 (Lachs)
    # und #EBB489 (Sand) haetten sonst als "Linie" geendet.
    saettigung = r - b
    if hell <= 228 and saettigung >= 45:
        return None

    if hell > 246:  return '#FFFFFF'     # Kartenflaeche
    if hell > 228:  return '#F6F9FA'     # zarte Flaeche
    if hell > 196:  return '#E7ECEE'     # Linie, Rahmen
    if hell > 150:  return '#C7D0D4'     # kraeftigere Linie
    return None                          # dunkle Warmtoene bleiben

def zweite_stufe():
    import collections
    gefunden = collections.Counter()
    for p in DATEIEN:
        if not os.path.exists(p):
            continue
        s = io.open(p, encoding='utf-8').read()
        for m in set(re.findall(r'#[0-9A-Fa-f]{6}\b', s)):
            if rolle(m.upper()):
                gefunden[m.upper()] += 1

    plan = [(c, rolle(c)) for c in sorted(gefunden)]
    if not plan:
        print('\nZweite Stufe: nichts mehr zu tun.')
        return

    print('\n=== Zweite Stufe: %d weitere Cremetoene ===' % len(plan))
    n = 0
    for p in DATEIEN:
        if not os.path.exists(p):
            continue
        s = io.open(p, encoding='utf-8').read()
        vorher = s
        for alt, neu in plan:
            muster = re.compile(re.escape(alt) + r'\b', re.I)
            k = len(muster.findall(s))
            if k:
                s = muster.sub(neu, s)
                n += k
        if s != vorher and not TROCKEN:
            io.open(p, 'w', encoding='utf-8').write(s)
    for alt, neu in plan:
        print('  %s -> %s' % (alt, neu))
    print('%d Werte%s' % (n, ' (trocken)' if TROCKEN else ''))

zweite_stufe()
