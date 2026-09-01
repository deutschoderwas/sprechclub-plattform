# -*- coding: utf-8 -*-
"""Baut A1-Wortschatzthemen mit gemischten Aufgabenformen.

Die bestehenden A1-Themen bestehen zu zwei Dritteln aus Anklicken.
Dieser Generator mischt: Wortkarte, Bedeutung erkennen, Artikel,
Wort tippen, Satz bauen, Zuordnen, Fehlersuche und Schreiben.

Aufruf:  python3 bau/mach-a1.py bau/a1-wortschatz.json wortschatz-a1-neu.js
"""
import json, sys, io

def artikel(wort):
    w = wort.strip()
    for a in ('der ', 'die ', 'das '):
        if w.startswith(a):
            return a.strip(), w[len(a):]
    return None, w

def bau_thema(t):
    wörter = t['wörter']
    auf = []

    # 1. Jedes Wort einmal als Karte — sehen, hören, verstehen
    for w in wörter:
        auf.append({'type': 'karte', 'w': w['de'], 'info': w['info'], 'emoji': w['emoji']})

    # 2. Bedeutung erkennen (Auswahl) — für jedes Wort eines
    for i, w in enumerate(wörter):
        falsch = [x['de'] for j, x in enumerate(wörter) if j != i][:3]
        # möglichst weit auseinanderliegende Ablenker
        falsch = [wörter[(i + k) % len(wörter)]['de'] for k in (3, 7, 11)]
        auf.append({'type': 'choice',
                    'q': 'Welches Wort passt: „%s“?' % w['info'],
                    'options': [w['de']] + falsch,
                    'answer': 0,
                    'w': w['de'],
                    'explain': '%s %s — %s' % (w['emoji'], w['de'], w['info'])})

    # 3. Artikel üben — nur bei Nomen mit Artikel
    for w in wörter:
        a, rest = artikel(w['de'])
        if a:
            auf.append({'type': 'gap', 'text': '___ %s' % rest, 'answer': a,
                        'hint': 'der / die / das?', 'w': w['de'],
                        'explain': 'Es heißt %s — %s' % (w['de'], w['info'])})

    # 4. Wort schreiben
    for w in wörter:
        a, rest = artikel(w['de'])
        auf.append({'type': 'tippen', 'answer': rest, 'info': w['info'],
                    'emoji': w['emoji'], 'w': w['de'],
                    'explain': '%s %s' % (w['emoji'], w['de'])})

    # 5. Satz bauen — aus den mitgelieferten Beispielsätzen
    for s in t.get('sätze', []):
        auf.append({'type': 'order', 'answer': s['satz'],
                    'hint': s.get('hinweis', 'Das Verb steht an zweiter Stelle.'),
                    'explain': s.get('erklärung', '')})

    # 6. Zuordnen — in Vierergruppen
    for k in range(0, len(wörter) - 3, 4):
        gruppe = wörter[k:k + 4]
        auf.append({'type': 'match', 'intro': 'Ordne Wort und Bedeutung zu:',
                    'pairs': [{'l': x['de'], 'r': x['info']} for x in gruppe]})

    # 7. Fehlersuche und Schreiben — von Hand geschrieben
    for f in t.get('fehler', []):
        a = {'type': 'fehler', 'satz': f['satz'], 'falsch': f['falsch'],
             'richtig': f['richtig'], 'explain': f['erklärung']}
        # Kommt das Wort mehrfach vor, muss die Aufgabe sagen, welches gemeint ist.
        if 'idx' in f:
            a['falschIdx'] = f['idx']
        auf.append(a)
    for sc in t.get('schreiben', []):
        auf.append({'type': 'schreiben', 'auftrag': sc['auftrag'],
                    'muster': sc['muster'], 'tipp': sc.get('tipp', '')})

    return {'id': t['id'], 'title': t['titel'], 'level': 'A1',
            'emoji': t['emoji'],
            'words': [{'de': w['de'], 'info': w['info'], 'emoji': w['emoji']} for w in wörter],
            'exercises': auf}


def main(quelle, ziel):
    d = json.load(open(quelle, encoding='utf-8'))
    themen = [bau_thema(t) for t in d['themen']]

    o = io.StringIO()
    o.write('/* ============================================================\n')
    o.write('   %s\n\n' % ziel)
    o.write('   A1 hatte sechs Wortschatzthemen, A2 dreiundzwanzig. Wer mit\n')
    o.write('   null Deutsch anfängt, stand nach zwei Wochen vor einer Wand.\n')
    o.write('   Diese Datei füllt die Lücke — mit gemischten Aufgabenformen\n')
    o.write('   statt zwei Dritteln Anklicken.\n\n')
    o.write('   Erzeugt von bau/mach-a1.py aus bau/a1-wortschatz.json.\n')
    o.write('   Nicht von Hand ändern — sonst ist es beim nächsten Bauen weg.\n')
    o.write('   ============================================================ */\n')
    o.write('(function () {\n')
    o.write('  if (!window.UEBUNGEN || !window.UEBUNGEN.skills) return;\n')
    o.write('  var THEMEN = %s;\n' % json.dumps(themen, ensure_ascii=False, indent=1))
    o.write('  var ziel = null;\n')
    o.write("  (window.UEBUNGEN.skills || []).forEach(function (s) { if (!ziel && s.id === 'wortschatz') ziel = s; });\n")
    o.write('  if (!ziel) ziel = window.UEBUNGEN.skills[0];\n')
    o.write('  if (!ziel) return;\n')
    o.write('  /* Vor die A2-Themen, damit A1 im Bereich zuerst steht. */\n')
    o.write('  var a1 = [], rest = [];\n')
    o.write("  (ziel.themes || []).forEach(function (t) { (String(t.level||'').indexOf('A1')===0 ? a1 : rest).push(t); });\n")
    o.write('  ziel.themes = a1.concat(THEMEN, rest);\n')
    o.write('})();\n')

    open(ziel, 'w', encoding='utf-8').write(o.getvalue())

    print('geschrieben:', ziel)
    for t in themen:
        c = {}
        for e in t['exercises']:
            c[e['type']] = c.get(e['type'], 0) + 1
        print('  %-28s %2d Wörter, %3d Aufgaben  %s' % (t['title'], len(t['words']), len(t['exercises']), c))


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
