# -*- coding: utf-8 -*-
"""
bau/foto-index.py — baut api/_fotos.json

Die Plattform hat rund 700 echte Fotos (Unsplash, freie Lizenz) unter
bilder/wort, bilder/beruf und bilder/thema. Die Dateinamen sind deutsche
Stichwoerter. podcast-audio.js kann auf Vercel nicht im Dateisystem
nachsehen, welche es gibt — darum schreibt dieses Skript die Namen in
ein kleines JavaScript-Modul, das mit der Funktion gebuendelt wird.
(Bewusst .js und nicht .json: eine JSON-Einbindung haengt von der
Node-Fassung und von Importzusicherungen ab, ein Modul immer nicht.)

Aufruf:  python3 bau/foto-index.py
"""
import io, json, os, re

W = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORDNER = ['bilder/wort', 'bilder/beruf', 'bilder/thema']
aus = []
for d in ORDNER:
    voll = os.path.join(W, d)
    if not os.path.isdir(voll):
        continue
    for name in sorted(os.listdir(voll)):
        if not re.search(r'\.(jpg|jpeg|png|webp)$', name, re.I):
            continue
        stamm = re.sub(r'\.[^.]+$', '', name)
        # "-s" sind die kleinen Fassungen, die brauchen wir hier nicht
        if stamm.endswith('-s'):
            continue
        # Niveau-Vorsilben wie a1-, b2- weg: "a1-einkaufen" -> "einkaufen"
        schlagwort = re.sub(r'^[abc][12]-', '', stamm)
        aus.append({'w': schlagwort, 'p': '/' + d + '/' + name})

ziel = os.path.join(W, 'api', '_fotos.js')
kopf = ('/* Erzeugt von bau/foto-index.py - nicht von Hand aendern.\n'
        '   Stichwort und Pfad aller echten Fotos, aus denen podcast-audio.js\n'
        '   das Titelbild einer Folge waehlt. */\n')
io.open(ziel, 'w', encoding='utf-8').write(
    kopf + 'export default ' + json.dumps(aus, ensure_ascii=False) + ';\n')
print(len(aus), 'Fotos ->', ziel)
