# -*- coding: utf-8 -*-
"""
bau/bilder-holen.py — holt die Lektionsbilder auf den eigenen Server

Gemessen am 15.09.: 88 Lektionsseiten luden ihre Bilder von einem
fremden Auslieferungsnetz. 616 Verweise auf 598 verschiedene Bilder,
im Schnitt 3,16 MB pro Bild, das groesste 10,9 MB. Die Seite
amt-a2-visuell.html allein kam damit auf rund 140 MB. Auf dem Handy
im Mobilfunknetz ist das unbenutzbar, und die Bilder haengen an einem
Konto, ueber das die Plattform keine Kontrolle hat.

Was das Skript tut:
  1. sammelt alle externen Bildadressen aus den Seiten
  2. laedt jedes Bild einmal
  3. bringt es auf Webgroesse (max 1100px breit, WebP)
  4. legt es unter bilder/lek/ ab
  5. schreibt die Verweise in den Seiten um - mit dem richtigen
     relativen Pfad, auch aus Unterordnern

Aufruf:  python3 bau/bilder-holen.py [--nur-holen] [--test DATEI]
"""
import io, os, re, sys, json, hashlib, subprocess
from concurrent.futures import ThreadPoolExecutor

W = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ZIEL = os.path.join(W, 'bilder', 'lek')
BREITE = 1100
QUALITAET = 78

MUSTER = re.compile(r'https://d8j0ntlcm91z4\.cloudfront\.net/[^\s"\'<>)\\]+')

def seiten():
    raus = []
    for wurzel, ordner, dateien in os.walk(W):
        ordner[:] = [o for o in ordner if not o.startswith('_') and o not in ('node_modules', '.git', 'bilder', 'illu')]
        for d in dateien:
            if d.endswith('.html'):
                raus.append(os.path.join(wurzel, d))
    return raus

def name_fuer(url):
    """Stabiler, kurzer Dateiname aus der Adresse."""
    ende = url.rstrip('/').split('/')[-1].split('?')[0]
    stamm = re.sub(r'[^A-Za-z0-9_-]', '', os.path.splitext(ende)[0])[:40]
    if not stamm:
        stamm = 'bild'
    kurz = hashlib.sha1(url.encode()).hexdigest()[:8]
    return '%s-%s.webp' % (stamm, kurz)

def holen_und_schrumpfen(auftrag):
    """Laedt in den Speicher, nicht auf die Platte.

    Der erste Anlauf schrieb das Rohbild als Datei daneben und wollte es
    danach loeschen — die Bruecke zum Rechner darf aber nicht loeschen,
    also blieben 22 Rohdateien mit zusammen 150 MB liegen. Jetzt geht
    das Bild direkt durch den Speicher.
    """
    url, ziel = auftrag
    if os.path.exists(ziel):
        return ('schon da', url, os.path.getsize(ziel), 0)
    try:
        r = subprocess.run(['curl', '-sS', '-L', '--max-time', '120', url],
                           capture_output=True)
        roh = r.stdout
        if r.returncode != 0 or len(roh) < 500:
            return ('nicht geladen', url, 0, 0)
        from PIL import Image
        im = Image.open(io.BytesIO(roh))
        if im.mode in ('RGBA', 'LA', 'P'):
            im = im.convert('RGB')
        if im.width > BREITE:
            hoehe = round(im.height * BREITE / im.width)
            im = im.resize((BREITE, hoehe), Image.LANCZOS)
        im.save(ziel, 'WEBP', quality=QUALITAET, method=6)
        return ('geholt', url, os.path.getsize(ziel), len(roh))
    except Exception as e:
        return ('Fehler: ' + str(e)[:60], url, 0, 0)

def main():
    nur_holen = '--nur-holen' in sys.argv
    nur_datei = None
    if '--test' in sys.argv:
        nur_datei = sys.argv[sys.argv.index('--test') + 1]

    os.makedirs(ZIEL, exist_ok=True)
    liste = seiten()
    if nur_datei:
        liste = [os.path.join(W, nur_datei)]

    # 1. sammeln
    treffer = {}          # url -> set(dateien)
    for p in liste:
        try:
            h = io.open(p, encoding='utf-8', errors='ignore').read()
        except Exception:
            continue
        for u in set(MUSTER.findall(h)):
            treffer.setdefault(u, set()).add(p)
    print('%d verschiedene Bilder in %d Seiten' % (len(treffer), len(set(d for s in treffer.values() for d in s))))
    if not treffer:
        return

    # 2. holen
    auftraege = [(u, os.path.join(ZIEL, name_fuer(u))) for u in treffer]
    fertig = {'geholt': 0, 'schon da': 0, 'fehler': 0}
    vorher_gesamt = nachher_gesamt = 0
    with ThreadPoolExecutor(max_workers=8) as ex:
        for i, e in enumerate(ex.map(holen_und_schrumpfen, auftraege), 1):
            art = e[0]
            if art == 'geholt':
                fertig['geholt'] += 1; nachher_gesamt += e[2]; vorher_gesamt += e[3]
            elif art == 'schon da':
                fertig['schon da'] += 1; nachher_gesamt += e[2]
            else:
                fertig['fehler'] += 1
                print('   %s  %s' % (art, e[1][-50:]))
            if i % 50 == 0:
                print('   %d/%d' % (i, len(auftraege)))
    print('geholt: %(geholt)d, schon da: %(schon da)d, nicht geladen: %(fehler)d' % fertig)
    if vorher_gesamt:
        print('vorher %.0f MB  ->  nachher %.0f MB  (%.0f%% weniger)' % (
            vorher_gesamt/1048576, nachher_gesamt/1048576,
            100 - nachher_gesamt*100.0/vorher_gesamt))
    if nur_holen:
        return

    # 3. Verweise umschreiben, mit richtigem relativen Pfad
    geaendert = 0
    for p in set(d for s in treffer.values() for d in s):
        h = io.open(p, encoding='utf-8', errors='ignore').read()
        tiefe = os.path.relpath(p, W).count(os.sep)
        vorne = '../' * tiefe
        neu = h
        for u in MUSTER.findall(h):
            datei = name_fuer(u)
            if not os.path.exists(os.path.join(ZIEL, datei)):
                continue                      # nicht geholt: Verweis bleibt stehen
            neu = neu.replace(u, vorne + 'bilder/lek/' + datei)
        if neu != h:
            io.open(p, 'w', encoding='utf-8').write(neu)
            geaendert += 1
    print('%d Seiten umgeschrieben' % geaendert)

main()
