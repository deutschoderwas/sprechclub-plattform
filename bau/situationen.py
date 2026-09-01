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

Es gibt zwei Bauformen von Seiten:
  .wcard mit .ww / .wm / .we  — die meisten Seiten, mit Verdeck-Spiel
  .vocab mit .term / .gloss   — die beiden A2-Seiten, ohne Spiel
Beide werden versorgt, die Zeile sieht überall gleich aus.

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

ohne, gesetzt = [], []


def huebsch(t):
    """Kaufmännisches Und als Entity, gerade Anführungszeichen typografisch."""
    t = re.sub(r'&(?!amp;|lt;|gt;|quot;|#)', '&amp;', t)
    return re.sub(r'„([^„“"]*)"', lambda m: '„' + m.group(1) + '“', t)


def zeile(etikett, text):
    return ('<div class="wsit"><span class="wsl">' + huebsch(etikett) +
            '</span>' + huebsch(text) + '</div>')


def css_nach(anker, regeln):
    """Fügt CSS direkt hinter der Zeile mit dem Anker ein."""
    global s
    if anker not in s:
        return False
    ende = s.index('\n', s.index(anker))
    s = s[:ende] + regeln + s[ende:]
    return True


STIL = ("\n.wcard .wsit,.vocab .wsit{font-size:.76rem;color:var(--ink-mute);margin-top:.55rem;"
        "padding-top:.5rem;border-top:1px dashed var(--sand);line-height:1.45;}"
        "\n.wcard .wsit .wsl,.vocab .wsit .wsl{display:block;font-family:'Outfit',sans-serif;"
        "font-weight:700;font-size:.68rem;letter-spacing:.04em;text-transform:uppercase;"
        "color:var(--red);margin-bottom:.2rem;}")

# --- Bauform 1: die Karten mit Verdeck-Spiel ---
if 'class="wcard"' in s:
    if '.wcard .wsit' not in s and not css_nach(".wcard .we strong{", STIL):
        print('Kein Platz fürs CSS gefunden — ' + SEITE)
        sys.exit(1)

    # Beim Verdecken muss die Situationszeile mitverschwinden — sonst
    # verrät sie das gesuchte Wort. Die Regel dafür sieht nicht auf
    # allen Seiten gleich aus: manche führen noch .wex mit oder setzen
    # zusätzlich pointer-events. Deshalb wird sie hier gesucht statt
    # wörtlich verglichen, und .wsit an die Auswahl angehängt.
    def ergänze_regel(aufgedeckt):
        global s
        mitte = r'\.wcard\.revealed' if aufgedeckt else r'\.wcard'
        muster = re.compile(r'(\.wgrid\.hide ' + mitte + r' \.ww\s*,[^{]*?)(\{[^}]*\})')
        treffer = muster.search(s)
        if not treffer:
            return False
        auswahl, block = treffer.group(1), treffer.group(2)
        if '.wsit' in auswahl:
            return True
        klasse = '.wcard.revealed' if aufgedeckt else '.wcard'
        s = s.replace(treffer.group(0),
                      auswahl.rstrip() + ',.wgrid.hide ' + klasse + ' .wsit' + block, 1)
        return True

    for aufgedeckt in (False, True):
        if not ergänze_regel(aufgedeckt):
            print('  Achtung: Verdeck-Regel nicht gefunden (' +
                  ('aufgedeckt' if aufgedeckt else 'verdeckt') + ') — ' + SEITE)

    # Bei manchen Karten steht im Wort noch ein <span>, etwa
    # „die Schulden (Pl.)". Deshalb wird der Inhalt hier grosszuegig
    # gefasst und die Auszeichnung danach entfernt.
    karte = re.compile(
        r'(<div class="wcard"><div class="wpic">[^<]*</div><div class="wb">'
        r'<div class="ww">(.*?)</div>\s*<div class="wm">[^<]*</div>'
        r'<div class="we">(?:(?!</div></div>).)*?</div>)(</div></div>)', re.S)

    def ersetze(m):
        wort = re.sub(r'<[^>]+>', '', m.group(2))
        wort = re.sub(r'\s*\((Pl\.|Sg\.)\)\s*$', '', wort).strip()
        if 'class="wsit"' in m.group(0):
            return m.group(0)
        if wort not in SITUATIONEN:
            ohne.append(wort)
            return m.group(0)
        gesetzt.append(wort)
        return m.group(1) + zeile(*SITUATIONEN[wort]) + m.group(3)

    s = karte.sub(ersetze, s)

# --- Bauform 2: die A2-Seiten mit .vocab ---
elif 'class="vocab"' in s:
    if '.vocab .wsit' not in s and not css_nach(".gloss{", STIL):
        print('Kein Platz fürs CSS gefunden — ' + SEITE)
        sys.exit(1)

    kasten = re.compile(
        r'(<div class="vocab"><span class="emoji">[^<]*</span>'
        r'<div class="term">([^<]+)</div><div class="gloss">[^<]*</div>)(</div>)')

    def ersetze2(m):
        wort = m.group(2).strip()
        if 'class="wsit"' in m.group(0):
            return m.group(0)
        if wort not in SITUATIONEN:
            ohne.append(wort)
            return m.group(0)
        gesetzt.append(wort)
        return m.group(1) + zeile(*SITUATIONEN[wort]) + m.group(3)

    s = kasten.sub(ersetze2, s)

else:
    print('Keine bekannte Kartenform in ' + SEITE)
    sys.exit(1)

if ohne:
    print('  ohne Situation geblieben: ' + ', '.join(ohne))
übrig = set(SITUATIONEN) - set(gesetzt)
if übrig:
    print('  in der Seite nicht gefunden: ' + ', '.join(sorted(übrig)))

io.open(SEITE, 'w', encoding='utf-8').write(s)
print('  ' + SEITE + ': ' + str(len(gesetzt)) + ' Karten versorgt')
