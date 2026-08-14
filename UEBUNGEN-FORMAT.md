# Übungen für den deutschoderwas club — das Format

**Diesen Text kannst du komplett in den anderen Chat kopieren.**
Er beschreibt genau, wie eine Übung aussehen muss, damit sie ohne
Nacharbeit in die Plattform passt.

---

## Was am Ende herauskommen soll

Eine reine JSON-Datei — kein Text davor, kein Text danach, keine
Erklärungen, keine Code-Zäune. Nur das hier:

```json
{
  "skills": [
    {
      "id": "wortschatz",
      "name": "Wortschatz",
      "emoji": "🧠",
      "themes": [
        {
          "id": "zahnarzt",
          "title": "Beim Zahnarzt",
          "level": "B1",
          "emoji": "🦷",
          "words": [
            { "de": "die Zahnschmerzen", "info": "wenn ein Zahn weh tut", "emoji": "😖" }
          ],
          "exercises": [ ... ]
        }
      ]
    }
  ]
}
```

`id` ist kleingeschrieben, ohne Leerzeichen und ohne Umlaute — das ist
der einzige Ort, wo `ue` und `ae` erlaubt sind, weil es in der Adresse
steht. Erlaubte Bereiche (`skills`): `wortschatz`, `grammatik`,
`hoeren`, `aussprache`. Erlaubte Niveaus: `A1`, `A2`, `B1`, `B2`, `C1`.

Pro Thema mindestens **4** Übungen, gut sind **12 bis 20**.

---

## Die fünf Übungstypen

Es gibt genau diese fünf. Keine anderen erfinden — die Plattform kann
sie sonst nicht anzeigen.

### 1. `choice` — Auswahl

```json
{
  "type": "choice",
  "q": "Welches Wort passt: „die vorgesetzte Person\"?",
  "options": ["der Chef", "die Kollegin", "der Arbeitgeber", "die Bewerbung"],
  "answer": 0
}
```

`answer` ist die **Position** in `options`, gezählt ab 0. Drei bis vier
Möglichkeiten sind richtig. Zwei nur, wenn es wirklich ein Entweder-oder
ist. Optional: `"img": "bilder/wort/chef.jpg"`.

### 2. `gap` — Lücke

```json
{
  "type": "gap",
  "text": "___ Vertrag",
  "answer": "der",
  "hint": "der / die / das?"
}
```

Genau **eine** Lücke aus drei Unterstrichen. `hint` ist freiwillig,
hilft aber sehr.

### 3. `match` — Zuordnen

```json
{
  "type": "match",
  "intro": "Ordne Wort und Bedeutung zu:",
  "pairs": [
    { "l": "der Vertrag",   "r": "schriftliche Vereinbarung" },
    { "l": "die Stelle",    "r": "der Arbeitsplatz" },
    { "l": "die Kollegin",  "r": "Person, mit der man arbeitet" }
  ]
}
```

Drei bis sechs Paare. Jede rechte Seite darf **nur zu einer** linken
passen, sonst ist die Aufgabe nicht eindeutig lösbar.

### 4. `listen` — Hören

```json
{
  "type": "listen",
  "label": "Anruf beim Zahnarzt",
  "audioUrl": "https://…/datei.mp3",
  "q": "Warum ruft die Frau beim Zahnarzt an?",
  "options": ["Sie hat Zahnschmerzen und möchte einen Termin", "…", "…", "…"],
  "answer": 0,
  "transcript": "Guten Tag! Ich habe seit gestern starke Zahnschmerzen …",
  "explain": "Sie sagt, dass ein Zahn weh tut, und fragt nach einem Termin."
}
```

`transcript` ist Pflicht — ohne Text kann niemand nachlesen, was gesagt
wurde. Wenn noch keine Tondatei existiert: `"audioUrl": "TODO"` schreiben
und den Transkripttext trotzdem liefern. Die Stimme erzeugen wir danach.

### 5. `speak` — Nachsprechen

```json
{
  "type": "speak",
  "word": "ich – ach",
  "tip": "ich-Laut vorne und leise, ach-Laut hinten und rau",
  "audioUrl": "https://…/datei.mp3"
}
```

---

## Die Hausregeln

**Echte Umlaute, immer.** `für`, nicht `fuer`. `größer`, nicht `groesser`.
`heißt`, nicht `heisst`. Das gilt für jeden Text, den ein Lernender sieht.
Nur in `id`-Feldern sind Ersatzschreibungen erlaubt.

**Keine Frage zweimal.** Auch nicht in einem anderen Thema. Wenn eine
Vokabel in zwei Themen vorkommt, muss die Frage anders formuliert sein.

**Die falschen Antworten müssen plausibel sein.** „der Chef / die Kollegin /
der Arbeitgeber / die Bewerbung" ist gut, weil alle vier aus derselben Welt
kommen. „der Chef / die Banane / das Fahrrad / der Mond" ist wertlos — da
rät niemand falsch und niemand lernt etwas.

**Die richtige Antwort darf nicht auffallen.** Sie darf nicht deutlich
länger, ausführlicher oder höflicher formuliert sein als die anderen.
Lernende erkennen das Muster nach zehn Aufgaben und raten nur noch.

**Zum Niveau passen.** Auf A1 kurze Hauptsätze und Alltagswörter. Auf B2
darf es zusammengesetzte Sätze und abstrakte Begriffe geben. Eine
A1-Aufgabe, die im Fragetext B2-Wortschatz benutzt, prüft das Falsche.

**Ganze Sätze in Aufgaben, wo es geht.** „___ Vertrag" ist in Ordnung für
Artikel, aber „Ich habe gestern ___ Vertrag unterschrieben." ist besser,
weil man den Fall aus dem Satz erschließt.

**Nichts Politisches, nichts Trauriges, nichts Peinliches.** Die Themen
sind Alltag: Wohnen, Arbeit, Gesundheit, Ämter, Einkaufen, Familie.
Krankheit ja, Katastrophe nein.

---

## So läuft die Übergabe

1. Der andere Chat schreibt die Datei, zum Beispiel `neue-uebungen.json`.
2. Prüfen:

   ```
   node pruefe-uebungen.mjs neue-uebungen.json --nur-neue uebungen.js
   ```

   Das prüft Format, Vollständigkeit, Umlaute, doppelte Antworten und ob
   eine Frage im Bestand schon vorkommt.
3. Meldet das Programm Fehler, gehen sie zurück in den anderen Chat —
   die Meldungen sind so geschrieben, dass man sie direkt hineinkopieren
   kann.
4. Erst wenn „Alles in Ordnung" erscheint, wird eingebaut.

---

## Was der andere Chat wissen sollte

Der Bestand hat heute **1906 Übungen in 70 Themen**. Am dringendsten
fehlen:

| Was | Warum |
|---|---|
| **C1 komplett** | Es gibt null C1-Übungen. Auf der Verkaufsseite steht „bis C1". |
| **B2 Wortschatz** | 7 Themen gegenüber 43 auf B1. |
| **A1 mit eigenen Fragen** | Die A1-Themen enthalten großenteils dieselben Fragen wie die B1-Themen — sie wurden offenbar kopiert. Sie brauchen eigene, einfachere Aufgaben. |

Ein guter Auftrag an den anderen Chat sieht so aus:

> Schreib mir 16 Übungen zum Thema „Beim Zahnarzt" auf Niveau B1 für den
> Bereich Wortschatz. Halte dich exakt an das Format in dieser Datei.
> Mischung: 8× choice, 4× gap, 2× match, 2× listen (mit `audioUrl: "TODO"`).
> Gib nur die JSON-Datei aus, sonst nichts.
