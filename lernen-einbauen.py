# -*- coding: utf-8 -*-
"""Baut den Bereich LERNEN in konto.html ein.
   Üben + Kursbibliothek werden zu einem Menüpunkt.
   Läuft mehrfach ohne Schaden (prüft vorher, ob schon eingebaut)."""
import io, re, sys, os

P = 'konto.html'
if not os.path.exists(P):
    sys.exit('ABBRUCH: konto.html liegt nicht in diesem Ordner. Starte das Skript in Plattform/.')
s = io.open(P, encoding='utf-8').read()

# Sicherheitskopie — einmal, wird nicht überschrieben
SICHER = 'konto-VOR-LERNBEREICH.html'
if not os.path.exists(SICHER):
    io.open(SICHER, 'w', encoding='utf-8').write(s)
    print('Sicherheitskopie angelegt: ' + SICHER)
orig = s
log = []

# ---------------------------------------------------------------- 1  Ansicht
if 'id="v-lernen"' not in s:
    m = '<section class="view" id="v-ueben"></section>'
    if m not in s:
        sys.exit('ABBRUCH: <section id="v-ueben"> nicht gefunden.')
    s = s.replace(m, m + '\n    <section class="view" id="v-lernen"></section>'
                       + '\n    <section class="view" id="v-kurs"></section>', 1)
    log.append('Ansichten v-lernen und v-kurs eingefügt')

# ---------------------------------------------------------------- 2  Menü
alt_kurse = re.search(r'\n\s*<button class="navlink navlink-hl" data-view="kurse".*?</button>', s, re.S)
alt_ueben = re.search(r'\n\s*<button class="navlink" data-view="ueben".*?</button>', s, re.S)
if alt_kurse and alt_ueben and 'data-view="lernen"' not in s:
    neu = ('\n    <button class="navlink navlink-hl" data-view="kurs" onclick="go(\'kurs\')">'
           '<span class="ic">🎓</span><span data-i18n="k_course">Mein Kurs</span></button>'
           '\n    <button class="navlink" data-view="lernen" onclick="go(\'lernen\')">'
           '<span class="ic">🧭</span><span data-i18n="k_learn">Lernbereich</span></button>')
    s = s.replace(alt_kurse.group(0), neu, 1)
    s = s.replace(alt_ueben.group(0), '', 1)
    log.append('Menü: Kursbibliothek + Üben → ein Punkt „Lernen"')
elif 'data-view="lernen"' in s:
    log.append('Menü war schon umgestellt')
else:
    log.append('WARNUNG: Menüpunkte nicht gefunden — bitte von Hand prüfen')

# ---------------------------------------------------------------- 3  Route
if 'lernen:(window.renderLernen' not in s:
    m = 'ueben:(window.renderUeben||renderDashboard)'
    if m in s:
        s = s.replace(m, m + ',lernen:(window.renderLernen||renderDashboard)'
                            + ',kurs:(window.renderNiveau||renderDashboard)'
                            + ',schreiben:(window.renderSchreiben||renderDashboard)', 1)
        log.append('Routen lernen, kurs und schreiben eingetragen')
    else:
        log.append('WARNUNG: Routentabelle nicht gefunden')

# ---------------------------------------------------------------- 4  Skripte
def sicher(datei):
    global s, log
    if 'src="%s"' % datei in s:
        return
    anker = '</body>'
    if anker not in s:
        log.append('WARNUNG: </body> fehlt — %s nicht eingebunden' % datei)
        return
    s = s.replace(anker, '<script src="%s"></script>\n%s' % (datei, anker), 1)
    log.append('%s eingebunden' % datei)

for f in ('dialoge.js', 'themen.js', 'lernen.js',
          'niveau.js', 'a1.js', 'schreiben.js', 'berufe.js', 'kurs.js'):
    sicher(f)

# ---------------------------------------------------------------- 5  Startseite
# Verweise auf die alten Bereiche zeigen jetzt auf Lernen.
for a, b in [("go('kurse')", "go('lernen')"), ('go("kurse")', 'go("lernen")'),
             ("go('ueben')", "go('lernen')"), ('go("ueben")', 'go("lernen")')]:
    if a in s:
        n = s.count(a)
        s = s.replace(a, b)
        log.append('%d× %s → %s' % (n, a, b))

# kbOpen braucht weiterhin die alte Ansicht: go('kurse') vor kbOpen zurückdrehen
s = s.replace("go('lernen');kbOpen(", "go('kurse');kbOpen(")
s = s.replace("go('lernen'); kbOpen(", "go('kurse'); kbOpen(")

# Der Zurück-Knopf in der Kursansicht führt nach Lernen
# Achtung: diese Zeile steht INNERHALB eines JS-Strings mit einfachen
# Anfuehrungszeichen — deshalb die HTML-Entitaet, sonst bricht das Skript.
s = s.replace('class="kb-back" onclick="window.renderKurse()"',
              'class="kb-back" onclick="go(&#39;lernen&#39;)"')

# ---------------------------------------------------------------- fertig
if s == orig:
    print('Nichts zu tun — alles war schon eingebaut.')
else:
    io.open(P, 'w', encoding='utf-8').write(s)
    print('\n'.join('· ' + x for x in log))
    print('konto.html gespeichert (%d → %d Zeichen)' % (len(orig), len(s)))


# ---------------------------------------------------------------- 6  Prüflauf
print('')
print('--- Prüfung ---')
fehlt = []
for f in ('themen.js', 'lernen.js', 'niveau.js', 'kurs.js', 'a1.js',
          'schreiben.js', 'berufe.js', 'dialoge.js', 'uebungen.js',
          'bilder/thema/essen.jpg', 'bilder/thema/vokale.jpg'):
    if not os.path.exists(f):
        fehlt.append(f)
if fehlt:
    print('FEHLT NOCH: ' + ', '.join(fehlt))
else:
    print('Alle Dateien da.')

bilder = 0
if os.path.isdir('bilder/thema'):
    bilder = len([x for x in os.listdir('bilder/thema') if x.endswith('.jpg')])
print('Fotos in bilder/thema: %d (erwartet 94)' % bilder)

n = io.open(P, encoding='utf-8').read()
for muss, was in [('id="v-lernen"', 'Ansicht Lernbereich'),
                  ('id="v-kurs"', 'Ansicht Mein Kurs'),
                  ('data-view="kurs"', 'Menüpunkt Mein Kurs'),
                  ('data-view="lernen"', 'Menüpunkt Lernbereich'),
                  ('kurs:(window.renderNiveau', 'Route Mein Kurs'),
                  ('src="kurs.js"', 'kurs.js eingebunden'),
                  ('src="a1.js"', 'a1.js eingebunden')]:
    print(('  OK   ' if muss in n else '  FEHLT ') + was)
print('')
print('Wenn alles OK ist: konto.html im Browser öffnen, anmelden, auf „Mein Kurs" klicken.')
print('Erst danach committen und pushen.')
