# -*- coding: utf-8 -*-
"""Eine Schriftwelt fuer alles: Space Grotesk fuer Ueberschriften,
Inter fuer den Text — dieselbe Paarung wie in der App und in der
Plattform selbst.

Ersetzt werden nur die Familiennamen in Anfuehrungszeichen und in den
Google-Fonts-Zeilen. 'Outfit' ist auch ein deutsches Wort ("das
Outfit"), deshalb wird nie blank ersetzt.

Aufruf:  python3 bau/schrift-nenner.py          (nur zaehlen)
         python3 bau/schrift-nenner.py --tun    (wirklich schreiben)
"""
import io, os, re, sys, collections

TUN = '--tun' in sys.argv
UEBERSPRINGEN = ('.git', 'node_modules', '_tmp', '_to_delete', '.vercel')

# Alte Sicherungskopien und meine eigenen Werkstattseiten bleiben, wie
# sie sind — sie sollen den Stand von damals zeigen.
import fnmatch
NICHT_ANFASSEN = ('_*', '*-klassisch.*', 'index_*', 'index-neu.*', 'index-v2.*',
                  '*-vor-*.html', '*-VOR-*.html', '*BACKUP*', '*.bak')

def ruhen_lassen(name):
    return any(fnmatch.fnmatch(name, m) for m in NICHT_ANFASSEN)

KOPF = 'Space Grotesk'
TEXT = 'Inter'

# Familienname -> neuer Name. Der zweite Wert sagt, ob die Familie eine
# Kopf- oder eine Textschrift war (fuer den serif/sans-Ausgleich).
ERSATZ = {
    'Fraunces': KOPF,
    'Poppins':  KOPF,
    'Outfit':   TEXT,
}

# Zierschriften bleiben, wo eine Seite sie wirklich benutzt.
ZIER = ('Caveat', 'Caveat Brush', 'Shantell Sans', 'Permanent Marker')

LINK_NEU = ('<link href="https://fonts.googleapis.com/css2?'
            'family=Inter:wght@400;500;600;700;800'
            '&family=Space+Grotesk:wght@500;600;700'
            '&display=swap" rel="stylesheet">')

link_re = re.compile(r'<link[^>]+fonts\.googleapis\.com/css2\?[^>]*>')

zahl = collections.Counter()
beruehrt = []

for wurzel, ordner, namen in os.walk('.'):
    ordner[:] = [o for o in ordner if o not in UEBERSPRINGEN and not o.startswith('.')]
    for n in namen:
        if not n.endswith(('.html', '.css')):
            continue
        if ruhen_lassen(n):
            zahl['in Ruhe gelassen (Sicherungskopie)'] += 1
            continue
        pfad = os.path.join(wurzel, n)
        try:
            s = io.open(pfad, encoding='utf-8', errors='strict').read()
        except Exception as e:
            zahl['uebersprungen (nicht lesbar)'] += 1
            continue
        vorher = s

        # --- 1. Die Familiennamen in den Stilregeln -------------------
        for alt, neu in ERSATZ.items():
            for form in ("'" + alt + "'", '"' + alt + '"'):
                if form in s:
                    zahl[alt] += s.count(form)
                    s = s.replace(form, form[0] + neu + form[0])

        # --- 2. serif passt nicht mehr, wenn die Serifenschrift weg ist
        s = s.replace("'" + KOPF + "',serif", "'" + KOPF + "',sans-serif")
        s = s.replace("'" + KOPF + "', serif", "'" + KOPF + "', sans-serif")

        # Doppelungen wie 'Inter','Inter' oder 'Space Grotesk','Space Grotesk'
        for f in (KOPF, TEXT):
            for trenn in (",", ", "):
                s = s.replace("'%s'%s'%s'" % (f, trenn, f), "'%s'" % f)

        # --- 3. Die Google-Fonts-Zeile neu setzen --------------------
        treffer = link_re.findall(s)
        if treffer:
            zier = [z for z in ZIER
                    if ("'" + z + "'") in s or ('"' + z + '"') in s]
            neu = LINK_NEU
            if zier:
                teil = ''.join('&family=' + z.replace(' ', '+') +
                               (':wght@600;700' if z in ('Caveat', 'Shantell Sans') else '')
                               for z in zier)
                neu = LINK_NEU.replace('&display=swap', teil + '&display=swap')
            s = s.replace(treffer[0], neu)
            for w in treffer[1:]:
                s = s.replace(w, '')
            zahl['Fonts-Zeile neu'] += 1

        if s != vorher:
            beruehrt.append(pfad)
            if TUN:
                io.open(pfad, 'w', encoding='utf-8').write(s)

print('=== ersetzte Nennungen ===')
for k, v in zahl.most_common():
    print('%6d  %s' % (v, k))
print()
print('%d Dateien %s' % (len(beruehrt), 'geaendert' if TUN else 'waeren betroffen'))
if not TUN:
    print('(Probelauf — mit --tun wird geschrieben)')
