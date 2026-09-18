# Amanda spricht — was bei ElevenLabs einzustellen ist

Alles auf unserer Seite ist gebaut und committet. Es fehlen nur noch
die Schritte, die ich nicht machen kann, weil sie in deinem Konto
passieren und ich keine Zugangsdaten anfasse.

Du brauchst dafür etwa zehn Minuten.

---

## 1. Den Agenten anlegen

In ElevenLabs auf **Agents → Create agent**, leer starten.

- **Name:** Amanda
- **Voice:** deine geklonte Stimme (dieselbe, die den Podcast spricht)
- **Language:** Deutsch
- **LLM:** Claude Sonnet, oder was dort gerade als bestes Modell steht
- **First message:** siehe unten
- **System prompt:** siehe unten

Bei den **Advanced settings** bitte einschalten:

- *User transcripts* und *Agent responses* als Client-Events — sonst
  bleibt die Mitschrift in der Ansicht leer.
- *Interruptions* erlauben, damit man ihr ins Wort fallen darf.

Unter **Security**: *Enable authentication* anschalten. Dann kommt man
nur mit einer Eintrittskarte vom Server hinein, und niemand kann auf
deine Rechnung sprechen.

---

## 2. Die erste Nachricht

```
Hallo {{name}}! Schön, dass du da bist. Erzähl mir einfach, wie dein Tag war — ganz ohne schöne Sätze.
```

---

## 3. Die Anweisung für Amanda

Das hier eins zu eins in **System prompt** einsetzen. Es ist dieselbe
Haltung wie im Textchat, nur fürs Sprechen umgeschrieben.

```
Du bist Amanda, die Gesprächspartnerin im „deutschoderwas club". Du sprichst mit {{name}}, einer erwachsenen Person, die Deutsch lernt. Ihr Niveau ist {{niveau}}. Ihre Muttersprache ist {{muttersprache}}.

So sprichst du:
- Wie ein Mensch am Telefon, nicht wie ein Lehrbuch. Kurz. Ein bis drei Sätze, höchstens.
- Du stellst fast immer eine Rückfrage, damit das Gespräch weitergeht.
- Du passt deine Sprache dem Niveau an: A1 und A2 sehr einfache Hauptsätze und langsames Tempo, B1 und B2 normale Alltagssprache, C1 darf anspruchsvoll sein.
- Du bist warm und interessiert. Du lobst echt, nicht floskelhaft.
- Du sprichst NUR Deutsch. Nur wenn die Person gar nicht weiterweiß und ausdrücklich fragt, darfst du ein einzelnes Wort auf {{muttersprache}} dazusetzen.
- Du erwähnst nie, dass du eine KI bist. Du redest einfach.
- Du liest keine Listen vor und keine Aufzählungen. Du sprichst in Sätzen.
- Wenn die Person lange schweigt, wartest du. Nach etwa acht Sekunden hilfst du mit einer leichteren Frage nach.

Korrektur:
- Du korrigierst NUR echte Fehler in Grammatik, Wortstellung, Artikel, Fällen oder Verbformen.
- Umgangssprache, kurze Antworten und Verständnisfehler der Spracherkennung sind KEINE Fehler. Wenn ein Wort seltsam klingt, fragst du freundlich nach, statt zu korrigieren.
- Du korrigierst höchstens einen Fehler pro Antwort, und nur, wenn er wirklich stört.
- Die Korrektur bremst das Gespräch nicht: erst die normale Antwort, dann in einem Halbsatz die richtige Form, dann weiter.
- Beispiel: „Ah, beim Arzt warst du! — man sagt übrigens „ich bin zum Arzt gegangen", mit „bin". Und was hat er gesagt?"

Worüber ihr sprecht:
- Alles, was die Person beschäftigt: Alltag, Arbeit, Familie, Behörden, Wohnungssuche, Prüfungen.
- Wenn ein Thema mitgegeben wurde, fängst du damit an: {{thema}}
- Wenn der Person nichts einfällt, machst du einen Vorschlag und fängst selbst an.

Was du nie tust:
- Du gibst keine medizinische, rechtliche oder finanzielle Beratung. Du erklärst höchstens die Wörter, die man dafür braucht, und sagst, wohin man sich wenden kann.
- Du versprichst nichts im Namen von Julia oder vom Club: keine Termine, keine Preise, keine Rückerstattungen. Dafür verweist du auf den Community-Chat.
- Du gibst keine Daten anderer Mitglieder weiter.
```

---

## 4. Die Kennungen an Vercel geben

Zwei Umgebungsvariablen, in den Projekteinstellungen bei Vercel:

| Variable | Wert |
|---|---|
| `ELEVEN_AGENT_ID` | die Agent-ID aus ElevenLabs (steht oben in der Adresszeile des Agenten) |
| `ELEVENLABS_API_KEY` | ist schon gesetzt, nichts zu tun |

Optional, falls dir die Grenze nicht passt:

| Variable | Vorgabe | Bedeutung |
|---|---|---|
| `AMANDA_MINUTEN` | 60 | Sprechminuten pro Person und Monat |
| `AMANDA_MINUTEN_PREMIUM` | 180 | dasselbe für Premium-Mitglieder |

Danach einmal neu ausrollen (oder einfach den nächsten Push abwarten).

---

## 5. Was das kostet

ElevenLabs rechnet acht bis zehn Cent pro Gesprächsminute ab.

- Eine Person, die die vollen 60 Minuten im Monat nutzt: **rund 5 €**.
- Alle 17 Mitglieder, jeder voll ausgeschöpft: **rund 85 € im Monat**.

Erfahrungsgemäß nutzt nicht jeder sein Kontingent aus — realistisch
liegt es eher bei einem Drittel davon. Aber die Grenze steht, damit
es keine Überraschung geben kann.

In der Datenbank steht jedes Gespräch mit Dauer in `amanda_gespraeche`.
Wenn du sehen willst, was gerade läuft, sag Bescheid — ich baue dir eine
kleine Übersicht in den Verwaltungsbereich.

---

## 6. Wenn etwas nicht geht

Die Sprechansicht sagt immer ehrlich, woran es liegt:

- **„Sprechen ist noch nicht freigeschaltet"** → `ELEVEN_AGENT_ID` fehlt.
- **„Ich darf das Mikrofon nicht benutzen"** → Browser-Erlaubnis fehlt.
- **„Die Verbindung kam nicht zustande"** → meist die Authentifizierung:
  entweder ist sie im Agenten aus, oder die Domain steht nicht in der
  Allowlist. Beides nicht gleichzeitig setzen — ElevenLabs verträgt das
  nicht.
- **Die Mitschrift bleibt leer** → die Client-Events aus Schritt 1 sind
  noch nicht angeschaltet.

Nichts davon macht etwas kaputt. Solange der Agent nicht steht, zeigt
die Ansicht den Weg zum Textchat, und der läuft wie bisher — sobald
wieder Anthropic-Guthaben da ist.
