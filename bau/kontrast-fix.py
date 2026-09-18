# -*- coding: utf-8 -*-
"""
bau/kontrast-fix.py — Text, den man lesen kann

Nach dem Farb-Nenner wurden alle 395 Lektionsseiten im Browser
geoeffnet und jede Textstelle gegen ihren tatsaechlichen Grund
gemessen. Ergebnis: 1253 Stellen unter der Lesbarkeitsschwelle
(4,5:1 fuer normalen Text, 3:1 fuer grosse oder fette Schrift).
Fuenf Muster machten 86 Prozent davon aus.

Dieses Skript behebt sie an der Quelle:

  1. Farben, die als Text ueberall zu blass sind, werden global
     ersetzt — ein Rot fuer alles, ein lesbares Sandbraun.
  2. CSS-Regeln, die Text- UND Hintergrundfarbe zusammen setzen,
     werden einzeln nachgerechnet. Ist der Abstand zu klein, wird
     der Hintergrund so weit abgedunkelt oder aufgehellt, bis es
     reicht — die Farbe bleibt dieselbe, nur ihre Helligkeit
     aendert sich.

Aufruf:  python3 bau/kontrast-fix.py [--trocken]
"""
import io, os, re, sys, glob, colorsys

W = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TROCKEN = '--trocken' in sys.argv

# ---------- Rechnen ----------
def rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def hexs(t):
    return '#%02X%02X%02X' % tuple(max(0, min(255, int(round(x)))) for x in t)

def leucht(c):
    def f(v):
        v = v / 255.0
        return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4
    r, g, b = c
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)

def abstand(a, b):
    l1, l2 = sorted([leucht(a), leucht(b)], reverse=True)
    return (l1 + 0.05) / (l2 + 0.05)

def heller_dunkler(c, richtung, ziel, gegen):
    """Dieselbe Farbe, nur heller oder dunkler, bis der Abstand reicht."""
    r, g, b = [x / 255.0 for x in c]
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    schritt = 0.02 * (1 if richtung > 0 else -1)
    for _ in range(45):
        l = max(0.0, min(1.0, l + schritt))
        neu = tuple(x * 255 for x in colorsys.hls_to_rgb(h, l, s))
        if abstand(neu, gegen) >= ziel:
            return hexs(neu)
        if l <= 0.0 or l >= 1.0:
            break
    return None

# ---------- 0. Die Variable, die ihren Namen nicht verdient ----------
# In 121 Lektionsseiten steht --turq-d:#1B9BC0 — genau derselbe Wert
# wie --turq. Die "dunkle" Tuerkisvariante ist also gar nicht dunkler.
# Genau sie traegt aber die Flaechen mit weissem Text: aktive Reiter,
# Weiter-Knoepfe, Sprecherkreise im Dialog. Weiss darauf sind 3,23:1.
# Mit einem echten dunklen Ton werden daraus 5,10:1 — 194 Stellen mit
# einer Zeile.
VARIABLE = [
    ('--turq-d:#1B9BC0', '--turq-d:#15788F', 'dunkles Tuerkis wird wirklich dunkel'),
    ('--turq-d: #1B9BC0', '--turq-d: #15788F', 'dasselbe mit Leerzeichen'),
]

# ---------- 1. Farben, die als Text nie funktionieren ----------
GLOBAL = [
    ('#E8302A', '#D42A21', 'Rot: auf Weiss nur 4,30:1 — jetzt 5,06:1'),
    ('#E1352C', '#D42A21', 'zweites Rot auf denselben Ton, 4,42:1 -> 5,06:1'),
    ('#A8957D', '#7A6A54', 'Sandbraun als Text: 2,89:1 -> 5,23:1'),
    ('#928B7A', '#6E6A5C', 'zweites blasses Braun'),
    ('#A79E86', '#736C58', 'drittes blasses Braun'),

    # Dunkelgruener Text auf der Tuerkisflaeche: Abzeichen, Knoepfe und
    # Zeitmarken in 74 Lektionsseiten. 3,86:1 war zu wenig, der Ton
    # bleibt gruen, wird aber tief genug: 4,77:1.
    ('#063B35', '#042A24', 'Text auf Tuerkis: 3,86:1 -> 4,77:1'),
    ('#063b35', '#042A24', 'dasselbe klein geschrieben'),

    # Tuerkis als TEXT auf hellem Grund hatte 3,06:1. Dafuer gibt es
    # den dunklen Ton, der genau dafuer da ist.
    ('#0FB5A6', '#0A7D72', 'Tuerkisgruen als Text: 2,57:1 -> 4,52:1'),
]

def dateien():
    raus = [os.path.join(W, 'konto.html')]
    raus += sorted(glob.glob(os.path.join(W, '*.css')))
    raus += sorted(glob.glob(os.path.join(W, '*.js')))
    katalog = os.path.join(W, 'lektionen-katalog.js')
    if os.path.exists(katalog):
        t = io.open(katalog, encoding='utf-8').read()
        for name in re.findall(r'"d"\s*:\s*"([^"]+\.html)"', t):
            p = os.path.join(W, name)
            if os.path.exists(p):
                raus.append(p)
    return raus

DATEIEN = dateien()

n_var = 0
for p in DATEIEN:
    s = io.open(p, encoding='utf-8', errors='ignore').read()
    vorher = s
    for alt, neu, _ in VARIABLE:
        k = s.count(alt)
        if k:
            s = s.replace(alt, neu)
            n_var += k
    if s != vorher and not TROCKEN:
        io.open(p, 'w', encoding='utf-8').write(s)
print('%d mal --turq-d auf einen echten dunklen Ton gesetzt%s'
      % (n_var, ' (trocken)' if TROCKEN else ''))

n_global = 0
for p in DATEIEN:
    s = io.open(p, encoding='utf-8', errors='ignore').read()
    vorher = s
    for alt, neu, _ in GLOBAL:
        m = re.compile(re.escape(alt) + r'\b', re.I)
        k = len(m.findall(s))
        if k:
            s = m.sub(neu, s)
            n_global += k
    if s != vorher and not TROCKEN:
        io.open(p, 'w', encoding='utf-8').write(s)

print('%d Farbwerte global ersetzt%s' % (n_global, ' (trocken)' if TROCKEN else ''))
for alt, neu, warum in GLOBAL:
    print('   %s -> %s   %s' % (alt, neu, warum))

# ---------- 2. Regeln, die Text und Grund zusammen setzen ----------
REGEL = re.compile(r'\{[^{}]*\}')
# Auch die kurzen Schreibweisen: #fff und white sind genauso Farben.
# Der erste Anlauf verlangte sechs Hex-Ziffern und fand deshalb nur 29
# Paare statt der 194 Stellen mit weissem Text auf Tuerkis.
FARBWERT = r'(#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}|white|black)'
FARBE = re.compile(r'(?<![-\w])color\s*:\s*' + FARBWERT + r'\b', re.I)
GRUND = re.compile(r'background(?:-color)?\s*:\s*' + FARBWERT + r'\b', re.I)

def lang(w):
    w = w.lower()
    if w == 'white': return '#FFFFFF'
    if w == 'black': return '#000000'
    if len(w) == 4:  return '#' + ''.join(c * 2 for c in w[1:]).upper()
    return w.upper()

n_paare = 0
beispiele = []
for p in DATEIEN:
    s = io.open(p, encoding='utf-8', errors='ignore').read()
    vorher = s
    raus = []
    letzte = 0
    for m in REGEL.finditer(s):
        block = m.group(0)
        f = FARBE.search(block)
        g = GRUND.search(block)
        if not (f and g):
            continue
        cf, cg = rgb(lang(f.group(1))), rgb(lang(g.group(1)))
        a = abstand(cf, cg)
        if a >= 4.5:
            continue
        # Text hell -> Grund dunkler; Text dunkel -> Grund heller
        richtung = -1 if leucht(cf) > leucht(cg) else 1
        neu = heller_dunkler(cg, richtung, 4.5, cf)
        if not neu:
            continue
        block2 = block[:g.start(1) - 0] + neu + block[g.end(1):]
        raus.append(s[letzte:m.start()]); raus.append(block2)
        letzte = m.end()
        n_paare += 1
        if len(beispiele) < 8:
            beispiele.append('%s: %s auf %s (%.2f:1) -> Grund %s'
                             % (os.path.basename(p), lang(f.group(1)), lang(g.group(1)), a, neu))
    if raus:
        raus.append(s[letzte:])
        s = ''.join(raus)
    if s != vorher and not TROCKEN:
        io.open(p, 'w', encoding='utf-8').write(s)

print('\n%d Farbpaare nachgerechnet und aufgehellt/abgedunkelt%s'
      % (n_paare, ' (trocken)' if TROCKEN else ''))
for b in beispiele:
    print('   ' + b)
