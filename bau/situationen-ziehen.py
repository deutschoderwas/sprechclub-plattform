#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
situationen-ziehen.py — zu jedem Verb die Situation, in der man es braucht

Auf der Seite stand zu jedem Verb das Bild, die englische Bedeutung und
ein Beispielsatz. Was fehlte: wo im Alltag einem das Wort tatsächlich
begegnet. Ein Beispielsatz zeigt die Form, aber nicht den Moment — und
ohne Moment merkt sich niemand ein Wort.

Also bekommt jede Karte eine Zeile dazu: der Ort, die Situation, der
typische Satz, den man dort hört. Beim Verdecken verschwindet sie mit,
sonst verrät sie das gesuchte Wort.
"""
import io, re, sys

DATEI = sys.argv[1] if len(sys.argv) > 1 else 'wortschatzboost-ziehen-b1.html'

# Wort -> (Situation, Ort/Moment als kurzes Etikett)
SITUATIONEN = {
    'ziehen': ('An jeder Ladentür steht ZIEHEN oder DRÜCKEN — '
               'und auch Deutsche stehen manchmal ratlos davor.', '🚪 Tür'),
    'anziehen': ('Morgens am Schrank und beim Wetterbericht: '
                 '„Zieh dir was Warmes an, es sind nur acht Grad."', '👕 Morgens'),
    'ausziehen': ('Doppelt gefährlich: Beim Arzt heißt es „Bitte oben frei machen, '
                  'ziehen Sie sich aus" — beim Vermieter „Wann ziehen Sie aus?"',
                  '🩺 Arzt / 🏠 Wohnung'),
    'umziehen': ('Der ganze Umzugstag: Kisten packen, Freunde einladen, '
                 'sich beim Amt ummelden. Achtung: „sich umziehen" heißt Kleidung wechseln!',
                 '📦 Umzug'),
    'einziehen': ('Der Tag, an dem die Möbel kommen. Danach klingelt man bei den '
                  'Nachbarn: „Wir sind gerade eingezogen."', '🔑 Erster Tag'),
    'erziehen': ('Im Elterngespräch in Kita und Schule, wenn es um Regeln und '
                 'Grenzen geht — und in jeder Diskussion über Kindererziehung.',
                 '👨‍👩‍👧 Elterngespräch'),
    'beziehen': ('Amtsdeutsch für Geld, das regelmäßig kommt: Gehalt, Rente oder '
                 'Bürgergeld beziehen. Steht so in jedem Formular.', '🏛️ Amt & Vertrag'),
    'verziehen': ('Wenn die Großeltern zu Besuch waren und das Kind alles bekommen '
                  'hat: „Ihr verzieht ihn total."', '👵 Nach dem Besuch'),
    'abziehen': ('Auf der Gehaltsabrechnung: brutto, davon werden Steuern und '
                 'Sozialabgaben abgezogen, übrig bleibt netto.', '💶 Gehaltszettel'),
    'aufziehen': ('Zwei Welten: eine alte Uhr aufziehen — und Kollegen, die dich '
                  'necken: „Jetzt zieh mich nicht auf!"', '🕰️ Uhr / 😄 Spaß'),
    'vorziehen': ('Wenn man höflich eine Wahl trifft: im Restaurant, bei der '
                  'Terminabsprache, im Gespräch über Vorlieben.', '🍽️ Auswahl'),
    'zuziehen': ('Abends, wenn es dunkel wird. Und im Winter beim Arzt: '
                 '„Ich habe mir eine Erkältung zugezogen."', '🌙 Abends / 🤧 Krankheit'),
    'wegziehen': ('Der traurige Bruder von „umziehen": wenn Freunde die Stadt '
                  'verlassen. „Sie ist nach Hamburg weggezogen."', '👋 Abschied'),
    'nachziehen': ('In den Nachrichten über Preise und Löhne: Einer erhöht, '
                   'die anderen ziehen nach.', '📰 Nachrichten'),
    'großziehen': ('Wenn jemand auf sein Leben zurückblickt: „Ich habe drei Kinder '
                   'großgezogen." Persönlicher und wärmer als „erziehen".', '💛 Lebensgeschichte'),
    'sich hinziehen': ('Beim Amt, im Meeting, beim Warten auf einen Bescheid — '
                       'immer wenn etwas länger dauert als versprochen.', '⏳ Warteschleife'),
}

s = io.open(DATEI, encoding='utf-8').read()

# --- 1. CSS für die neue Zeile, direkt nach der Regel für .we strong ---
css_anker = ".wcard .we strong{"
i = s.index(css_anker)
zeilenende = s.index('\n', i)
css_neu = ("\n.wcard .wsit{font-size:.76rem;color:var(--ink-mute);margin-top:.55rem;"
           "padding-top:.5rem;border-top:1px dashed var(--sand);line-height:1.45;}"
           "\n.wcard .wsit .wsl{display:block;font-family:'Outfit',sans-serif;font-weight:700;"
           "font-size:.68rem;letter-spacing:.04em;text-transform:uppercase;color:var(--red);"
           "margin-bottom:.2rem;}")
s = s[:zeilenende] + css_neu + s[zeilenende:]

# --- 2. Beim Verdecken mit ausblenden ---
alt = ".wgrid.hide .wcard .ww,.wgrid.hide .wcard .wm,.wgrid.hide .wcard .we{opacity:0;}"
neu = (".wgrid.hide .wcard .ww,.wgrid.hide .wcard .wm,.wgrid.hide .wcard .we,"
       ".wgrid.hide .wcard .wsit{opacity:0;}")
assert s.count(alt) == 1, 'Verdeck-Regel nicht gefunden'
s = s.replace(alt, neu)

alt2 = (".wgrid.hide .wcard.revealed .ww,.wgrid.hide .wcard.revealed .wm,"
        ".wgrid.hide .wcard.revealed .we{opacity:1;}")
neu2 = (".wgrid.hide .wcard.revealed .ww,.wgrid.hide .wcard.revealed .wm,"
        ".wgrid.hide .wcard.revealed .we,.wgrid.hide .wcard.revealed .wsit{opacity:1;}")
assert s.count(alt2) == 1, 'Aufdeck-Regel nicht gefunden'
s = s.replace(alt2, neu2)

# --- 3. Die Situationen in die Karten ---
karte = re.compile(
    r'(<div class="wcard"><div class="wpic">[^<]*</div><div class="wb">'
    r'<div class="ww">([^<]+)</div><div class="wm">[^<]*</div>'
    r'<div class="we">.*?</div>)(</div></div>)', re.S)

fehlend, gesetzt = [], []

def ersetze(m):
    wort = m.group(2).strip()
    if wort not in SITUATIONEN:
        fehlend.append(wort)
        return m.group(0)
    text, etikett = SITUATIONEN[wort]
    gesetzt.append(wort)
    return (m.group(1) + '<div class="wsit"><span class="wsl">' + etikett +
            '</span>' + text + '</div>' + m.group(3))

s = karte.sub(ersetze, s)

if fehlend:
    print('Ohne Situation geblieben: ' + ', '.join(fehlend))
if len(gesetzt) != len(SITUATIONEN):
    nicht = set(SITUATIONEN) - set(gesetzt)
    print('Nicht eingebaut: ' + ', '.join(sorted(nicht)))

io.open(DATEI, 'w', encoding='utf-8').write(s)
print(str(len(gesetzt)) + ' Karten haben jetzt eine Situation.')
