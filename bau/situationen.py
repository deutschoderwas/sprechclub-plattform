#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
situationen.py — zu jedem Wort einer Wortschatzboost-Seite die Situation

Auf den Wortschatzboost-Seiten stand zu jedem Wort das Bild, die
englische Bedeutung und ein Beispielsatz. Was fehlte: wo im Alltag
einem das Wort tatsächlich begegnet. Ein Beispielsatz zeigt die Form,
aber nicht den Moment — und ohne Moment merkt sich niemand ein Wort.

Besonders bei den Wortfamilien ist das der entscheidende Punkt: Bei
„ausziehen" braucht man beide Welten (Arzt und Vermieter), bei
„aufziehen" auch (Uhr und Necken). Ein Beispielsatz kann immer nur
eine zeigen.

Aufruf:  python3 bau/situationen.py <seite.html> <situationen.json>

Die JSON-Datei hat die Form
  { "wort": ["Etikett mit Emoji", "Der Satz zur Situation."], ... }

Das Skript ist mehrfach aufrufbar: Ist eine Karte schon versorgt,
bleibt sie unberührt. Beim Verdeck-Spiel verschwindet die Situation
mit, sonst verrät sie das gesuchte Wort.
"""
import io, json, re, sys

if len(sys.argv) < 3:
    print(__doc__)
    sys.exit(1)

SEITE, QUELLE = sys.argv[1], sys.argv[2]
SITUATIONEN = json.load(io.open(QUELLE, encoding='utf-8'))

s = io.open(SEITE, encoding='utf-8').read()

# --- 1. CSS, falls noch nicht da ---
if '.wcard .wsit{' not in s:
    anker = ".wcard .we strong{"
    if anker not in s:
        print('Kein Platz fürs CSS gefunden (.wcard .we strong) — ' + SEITE)
        sys.exit(1)
    ende = s.index('\n', s.index(anker))
    s = s[:ende] + (
        "\n.wcard .wsit{font-size:.76rem;color:var(--ink-mute);margin-top:.55rem;"
        "padding-top:.5rem;border-top:1px dashed var(--sand);line-height:1.45;}"
        "\n.wcard .wsit .wsl{display:block;font-family:'Outfit',sans-serif;font-weight:700;"
        "font-size:.68rem;letter-spacing:.04em;text-transform:uppercase;color:var(--red);"
        "margin-bottom:.2rem;}") + s[ende:]

# --- 2. Beim Verdecken mit ausblenden ---
def erweitere(alt, zusatz):
    global s
    if alt in s and zusatz not in s:
        s = s.replace(alt, alt[:-len('{opacity:0;}')] + ',' + zusatz + '{opacity:0;}'
                      if alt.endswith('{opacity:0;}')
                      else alt[:-len('{opacity:1;}')] + ',' + zusatz + '{opacity:1;}')

erweitere(".wgrid.hide .wcard .ww,.wgrid.hide .wcard .wm,.wgrid.hide .wcard .we{opacity:0;}",
          ".wgrid.hide .wcard .wsit")
erweitere(".wgrid.hide .wcard.revealed .ww,.wgrid.hide .wcard.revealed .wm,"
          ".wgrid.hide .wcard.revealed .we{opacity:1;}",
          ".wgrid.hide .wcard.revealed .wsit")

# --- 3. Die Situationen in die Karten ---
karte = re.compile(
    r'(<div class="wcard"><div class="wpic">[^<]*</div><div class="wb">'
    r'<div class="ww">([^<]+)</div><div class="wm">[^<]*</div>'
    r'<div class="we">(?:(?!</div></div>).)*?</div>)(</div></div>)', re.S)

ohne, gesetzt = [], []

def hübsch(t):
    """Kaufmännisches Und als Entity, gerade Anführungszeichen typografisch."""
    t = re.sub(r'&(?!amp;|lt;|gt;|quot;|#)', '&amp;', t)
    return re.sub(r'„([^„“"]*)"', lambda m: '„' + m.group(1) + '“', t)

def ersetze(m):
    wort = m.group(2).strip()
    if '<div class="wsit">' in m.group(0):
        return m.group(0)
    if wort not in SITUATIONEN:
        ohne.append(wort)
        return m.group(0)
    etikett, text = SITUATIONEN[wort]
    gesetzt.append(wort)
    return (m.group(1) + '<div class="wsit"><span class="wsl">' + hübsch(etikett) +
            '</span>' + hübsch(text) + '</div>' + m.group(3))

s = karte.sub(ersetze, s)

if ohne:
    print('  ohne Situation geblieben: ' + ', '.join(ohne))
übrig = set(SITUATIONEN) - set(gesetzt)
if übrig:
    print('  in der Seite nicht gefunden: ' + ', '.join(sorted(übrig)))

io.open(SEITE, 'w', encoding='utf-8').write(s)
print('  ' + SEITE + ': ' + str(len(gesetzt)) + ' Karten versorgt')
