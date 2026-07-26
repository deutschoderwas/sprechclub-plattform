# Der neue Bereich LERNEN

Üben und Kursbibliothek sind ab jetzt **eine** Sache. Ein Menüpunkt, ein Aussehen, ein Weg.

---

## Was sich für deine Lernerinnen ändert

Vorher gab es zwei Türen: „Kursbibliothek" mit Kursen und Lektionen, „Üben" mit Aufgaben nach Fertigkeit. Wer bei „Wortschatz → Gesundheit" übte, fand die passende Lektion nur, wenn er sie suchte. Und die Szenarien waren nur Beschreibungen — man las, was man sagen sollte, aber sprach mit niemandem.

Jetzt gibt es **eine Tür: Lernen.** Dahinter liegen 47 Themen als echte Fotos. Ein Thema öffnen heißt: alles dazu liegt untereinander.

**Beispiel „Gesundheit, Arzt & Notfall":**

| | |
|---|---|
| 💬 Sprechen | 11 echte Gespräche — Amanda sagt etwas, du antwortest, sie korrigiert |
| 🧠 Wörter | 77 Wörter zum Thema |
| 🎧 Hören | 21 Hörübungen |
| 📖 Die Lektion | die ganze Lektionsseite |
| ➕ Noch mehr Wörter | der Zusatzwortschatz „Beim Zahnarzt" |

Darunter alle elf Gespräche einzeln zum Anklicken. Fertige tragen ein Häkchen.

Oben auf der Übersicht steht immer eine **Weiter-Karte** — das Thema, an dem zuletzt gearbeitet wurde, mit Prozentzahl. Ein Klick, weiter geht's. Daneben Tagesziel, Streak, Punkte und der Schnell-Mix.

---

## Die echten Dialoge

Das war dein Punkt: *„die ganzen Szenarien sind völlig sinnlos, es müssen echte Dialoge sein."*

Die 97 Situationen aus der App laufen jetzt auch auf der Plattform — im selben Gesprächsfenster wie im Handy:

- Amanda schreibt und spricht. Man sieht ihren Satz als Text.
- Man antwortet **getippt oder gesprochen** — beides landet als Text im Fenster.
- Ein Knopf zeigt eine Beispielantwort, drei Knöpfe geben Satzanfänge.
- Nach jeder Antwort korrigiert Amanda — aber nur, wenn wirklich etwas falsch war. Sonst gibt es kurzes Lob und es geht weiter.
- Am Ende: geschafft, mit Zählung.

Die Korrektur läuft über `/api/ai-satz`, das schon da war. Ohne Anmeldung oder ohne Netz läuft das Gespräch trotzdem durch, nur ohne Korrektur.

---

## Die Bilder

47 echte Fotos, alle im gleichen Stil: warmes Tageslicht, echte Menschen, ruhige Farben mit Creme und Blau. Sie liegen in `bilder/thema/`:

- `<thema>.jpg` — 1200 × 675, für die große Fläche oben auf der Themenseite
- `<thema>-s.jpg` — 560 × 315, für die Karten

Zusammen 5,4 MB für 94 Dateien.

---

## Die Dateien

| Datei | Was drin ist |
|---|---|
| `themen.js` | Die Liste der 47 Themen. Hier steht, was zu einem Thema gehört. |
| `lernen.js` | Die Übersicht, die Themenseite und das Gesprächsfenster. |
| `bilder/thema/` | Die Fotos. |
| `konto.html` | Menü, Ansicht und Route (wird vom Skript geändert). |

Nichts Altes wurde gelöscht: `ueben.js`, `uebungen.js` und die Kursbibliothek arbeiten unverändert weiter. Der Lernbereich ruft sie nur auf. Der Fortschritt aus den Übungen liegt weiter im selben Speicher — es geht nichts verloren.

---

## Ein Thema ändern oder ergänzen

Alles steht in `themen.js`. Ein Eintrag sieht so aus:

```js
{id:'essen', t:'Essen & Restaurant', b:'alltag', lvl:'A1–B1',
 ws:['essen'], ho:['essen'], dlg:['essen'], lek:'wortschatz-essen-b1.html'},
```

- `b` ist der Bereich: `alltag`, `beruf`, `grammatik` oder `aussprache`
- `ws` / `ho` / `gr` / `au` sind die Themen-Kürzel aus `uebungen.js`
- `dlg` sind die Kategorien aus `dialoge.js`
- `lek` ist die Lektionsseite — oder `null`

Ein neues Thema: Zeile anhängen, ein Foto als `bilder/thema/<id>.jpg` und `<id>-s.jpg` dazulegen, fertig. Fehlt ein Foto, bleibt die Karte trotzdem heil.

---

## Was noch offen ist

- **`sprechen.html`** zeigt noch die alten Szenarien. Die Seite kann weg, sobald du sicher bist, dass niemand sie verlinkt hat — der Lernbereich kann alles, was sie konnte, und mehr.
- **Echte Stimmen statt Browser-Stimme.** Das ist der größte Sprung, der noch fehlt. Solange die Stimme aus dem Browser kommt, klingt es nach Vorlesegerät. Deine 25 Sätze aus `AUFNAHMELISTE.md` würden schon das Drumherum tragen; für die Dialoge bräuchte es zwei gekaufte Stimmen.
- **Ein paar Themen sind noch dünn**: „Familie" hat nur Gespräche, „Bewerbung", „Kunden", „Pflege" und „Handwerk" auch. Wortschatz dazu wäre der nächste Ausbau.
