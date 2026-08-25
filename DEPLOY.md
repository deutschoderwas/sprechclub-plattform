# Wie du alles live bringst

Sechs Schritte. Rechne mit zwanzig Minuten, davon fünfzehn Warten.

---

## 1 · Auspacken

Lade `lernen-paket.zip` herunter und entpacke es **direkt in deinen Ordner `Plattform/`** —
also dorthin, wo auch `konto.html` liegt. Nicht in einen Unterordner.

Danach muss es so aussehen:

```
Plattform/
  konto.html
  themen.js      lernen.js      niveau.js     kurs.js
  a1.js          schreiben.js   berufe.js
  bilder/thema/  ← 94 Fotos
  lernen-einbauen.py
  KURSKONZEPT.md
  LERNEN-ANLEITUNG.md
```

Falls dein Entpacker einen Ordner `lernen-paket/` anlegt: den Inhalt daraus eine Ebene höher schieben.

---

## 2 · Einbauen

Terminal auf, in den Ordner gehen, ein Befehl:

```
cd ~/Documents/Claude/Projects/Webseite/Plattform
python3 lernen-einbauen.py
```

Das Skript macht vier Dinge und sagt dir jedes davon:

- legt **`konto-VOR-LERNBEREICH.html`** an — deine Sicherheitskopie, falls etwas schiefgeht
- fügt die zwei neuen Ansichten ein
- macht aus „Kursbibliothek" und „Üben" die zwei Punkte **Mein Kurs** und **Lernbereich**
- bindet die acht Skriptdateien ein

Am Ende läuft eine Prüfung durch und zeigt für jeden Punkt `OK` oder `FEHLT`.
**Steht irgendwo FEHLT — nicht weitermachen, schick mir die Ausgabe.**

Das Skript kannst du gefahrlos zweimal laufen lassen. Es merkt, was schon drin ist.

---

## 3 · Lokal anschauen — bevor irgendetwas online geht

```
python3 -m http.server 8000
```

Dann im Browser `http://localhost:8000/konto.html` öffnen und anmelden.

Diese sechs Dinge durchklicken:

1. **Mein Kurs** — fünf Niveaukarten A1 bis C1
2. **A1 → Kurs öffnen** — vierzehn Lektionen
3. **Lektion 1 öffnen** — Wörterkarten blättern, „Vorlesen" antippen
4. **Üben** starten und drei Aufgaben lösen
5. **Lernbereich** — die Fotokarten, oben das Band mit deinem Niveau
6. Ein Thema öffnen, ein **Gespräch** starten, einmal antworten

Wenn das läuft, läuft es auch live. Server danach mit `Strg + C` beenden.

---

## 4 · Aufräumen, damit der Commit sauber ist

```
git status
```

Falls dort `.fuse_hidden…`-Dateien auftauchen — die kommen von der Verbindung zu meiner Seite und
gehören nicht ins Repository. Sie stehen in deiner `.gitignore`, sollten also gar nicht erscheinen.
Falls doch:

```
git rm --cached .fuse_hidden* 2>/dev/null
```

**Wichtig:** Ich fasse `git` in deinem Ordner nicht an. Mein `git` hinterlässt eine `.git/index.lock`,
die der Ordner nicht wieder löschen kann — genau das hat dir am Freitag die Commits blockiert.
Alle Git-Befehle machst du.

---

## 5 · Hochladen

```
git add .
git commit -m "Lernbereich: Niveaus A1-C1, A1-Kurs, Schreibtrainer, 20 Berufe, echte Fotos"
git push
```

Vercel merkt den Push von allein und baut. Das dauert ein bis zwei Minuten.
Unter **vercel.com → dein Projekt → Deployments** siehst du den Fortschritt.
Grün heißt fertig.

---

## 6 · Live prüfen

`deutschoderwas-club.de/konto.html` öffnen, anmelden, dieselben sechs Punkte wie in Schritt 3.

**Wenn die Fotos fehlen**, aber sonst alles geht: dann ist `bilder/thema/` nicht mitgegangen.
Prüf mit `git status`, ob die 94 Dateien wirklich committet wurden — manche `.gitignore`-Regeln
schlucken Bildordner.

**Wenn ein Menüpunkt ins Leere führt**: einmal hart neu laden (`Cmd + Shift + R`).
Der Service Worker hält die alten Dateien sonst noch fest.

---

## Zurück, falls etwas kaputt ist

```
cp konto-VOR-LERNBEREICH.html konto.html
git add konto.html && git commit -m "zurueck" && git push
```

Nach zwei Minuten ist der alte Stand wieder online. Die neuen Dateien stören dabei nicht —
sie werden dann einfach nicht geladen.

---

## Eine Sache, die du wissen solltest

Die neuen Dateien sind zusammen **etwa 950 KB JavaScript**. Das lädt `konto.html` künftig bei
jedem Aufruf mit, auch wenn jemand nur in den Chat will. Auf gutem WLAN merkt das niemand,
auf schwachem Mobilfunk schon — vielleicht zwei Sekunden.

Der größte Brocken ist `berufe.js` mit 470 KB.

Das lässt sich sauber lösen: die drei großen Dateien erst laden, wenn jemand den Bereich
tatsächlich öffnet. Das sind etwa zwanzig Zeilen Code. Ich baue es dir gern ein — aber erst,
wenn der jetzige Stand live ist und funktioniert. Ein Schritt nach dem anderen.
