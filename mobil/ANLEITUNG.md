# deutschoderwas als App im Play Store und App Store

Hier steht alles, was für die beiden Stores nötig ist — was schon fertig ist, was nur du machen kannst, und wie lange es dauert.

---

## Das Wichtigste zuerst: der Zeitplan

**Am 01.08. wird die App nicht in den Stores sein.** Das liegt nicht an der Technik, sondern an den Wartezeiten der Stores.

| Weg | Wartezeit | Frühestens fertig |
|---|---|---|
| **Web-App** (schon fertig) | keine | **sofort** |
| **Play Store** | Entwicklerkonto 1–3 Tage · geschlossener Test 14 Tage · Freigabe 1–3 Tage | **etwa 3 Wochen** |
| **App Store** | Entwicklerkonto 1–2 Tage · Prüfung 1–3 Tage, oft mit einer Ablehnung dazwischen | **etwa 2 Wochen** |

Mein Vorschlag: **am 01.08. mit der Web-App starten** und die Stores parallel vorbereiten. Die Web-App kann heute schon jeder auf den Startbildschirm legen — auf dem iPhone über Teilen → „Zum Home-Bildschirm", auf Android schlägt die App es von selbst vor. Sie sieht dann aus wie jede andere App, hat ein eigenes Symbol und läuft ohne Adressleiste.

---

## Die zwei Stores im Vergleich

### Google Play — der einfachere Weg

Google erlaubt Web-Apps ausdrücklich. Kosten: **25 € einmalig**.

Eine Hürde gibt es: Seit November 2023 müssen **neue private Entwicklerkonten** vor der Veröffentlichung einen geschlossenen Test durchlaufen — **12 echte Testerinnen, 14 Tage lang ununterbrochen**. Fällt jemand raus, beginnt die Frist von vorn.

**Der Ausweg:** Ein **Firmen-Konto** ist davon befreit. Du hast ein Gewerbe — melde das Konto als Organisation an, nicht als Privatperson. Dann fällt der 14-Tage-Test komplett weg und wir sind in wenigen Tagen drin. Dafür braucht Google eine Registrierungsnummer deines Unternehmens.

Falls das nicht klappt: Die 12 Testerinnen findest du in deiner Community an einem Nachmittag.

### Apple App Store — der anspruchsvollere Weg

Kosten: **99 € im Jahr**. Du brauchst deinen Mac und das Programm Xcode (kostenlos).

Apple lehnt Apps ab, die nur eine eingepackte Webseite sind — das ist Richtlinie 4.2. Eine App muss Dinge können, die eine Webseite nicht kann.

**Genau deshalb habe ich die App so gebaut, wie sie jetzt ist.** Sie hat:

- **Mitteilungen** — eine tägliche Erinnerung am Abend, wenn noch nicht geübt wurde, und Nachrichten aus dem Club
- **Die echte Kamera** für die Fotofunktion, nicht nur eine Dateiauswahl
- **Offline** — Lernpfad, Dialoge und Prüfungen liegen auf dem Gerät und laufen ohne Netz
- **Vibrieren** bei richtig und falsch
- **Die Zurück-Taste** auf Android, die sich richtig verhält
- **Ein Hinweisband**, wenn die Verbindung wegbricht

Das ist eine echte App, keine Webseite in einem Rahmen. Trotzdem: Eine Ablehnung beim ersten Versuch ist normal und kein Drama — Apple schreibt dann, was fehlt, man bessert nach und reicht neu ein. Deshalb der Puffer im Zeitplan.

**Eine Sache musst du wissen:** Apple verlangt bei digitalen Abos, die man **in der App** kauft, seine 15 bis 30 Prozent. Der übliche Weg für Plattformen wie deine: In der App kann man **nicht** kaufen, man meldet sich nur an. Der Kauf läuft über deine Webseite. Das machen Netflix und Spotify genauso und Apple erlaubt es. Wichtig ist nur, dass die App nicht auffällig zur Bezahlseite schickt.

---

## Was schon fertig ist

Im Ordner `mobil/` liegt das komplette Projekt:

- `capacitor.config.json` — die Einstellungen für beide Betriebssysteme
- `package.json` — alle nötigen Bausteine
- `bauen.js` — sammelt die App-Dateien und packt sie in die native Hülle
- `native.js` — die Brücke zum Gerät: Mitteilungen, Kamera, Vibrieren, Offline-Hinweis, Zurück-Taste, Teilen
- `ANLEITUNG.md` — dieses Dokument

Dazu in der Datenbank die Tabelle `geraete` für die Mitteilungen, und der Service Worker legt die App fürs Offline-Arbeiten ab.

Wichtig: Die App-Dateien werden **auf das Gerät gepackt**, nicht von deiner Webseite nachgeladen. Nur die Daten — deine Stunden, der Chat, die Punkte — kommen aus dem Netz. Das ist der Unterschied, auf den Apple achtet.

---

## Was nur du machen kannst

1. **Google-Play-Konto anlegen** — 25 € einmalig, als **Organisation**, nicht privat.
2. **Apple-Entwicklerprogramm** — 99 € im Jahr, unter deinem Apple-Konto.
3. **Firebase-Projekt** für die Mitteilungen — kostenlos. Ich brauche daraus zwei Dateien: `google-services.json` für Android und `GoogleService-Info.plist` für iOS.

Sobald diese drei Dinge da sind, kann ich den Rest vorbereiten.

---

## So wird gebaut

Alles auf deinem Mac, im Ordner `Plattform/mobil`:

```
npm install
npm run erstmal-android      # nur beim allerersten Mal
npm run erstmal-ios          # nur beim allerersten Mal

npm run android              # baut und öffnet Android Studio
npm run ios                  # baut und öffnet Xcode
```

Nach jeder Änderung an der App reicht `npm run sync`.

Für Android brauchst du zusätzlich **Android Studio**, für iOS **Xcode** — beides kostenlos.

---

## Was für die Stores noch gebraucht wird

- **Symbol** in 1024×1024 — dein Logo auf einfarbigem Grund, ohne Transparenz
- **Bildschirmfotos**: für Apple je 3–10 Bilder in zwei iPhone-Größen, für Google mindestens 2 plus ein Titelbild in 1024×500
- **Beschreibungstexte** — kurz und lang, für beide Stores
- **Datenschutzerklärung** unter einer festen Adresse (hast du)
- **Angaben zum Datenschutz** in beiden Konsolen — welche Daten die App sammelt

Die Bildschirmfotos kann ich automatisch aus der App erzeugen, sobald du sagst, welche Bildschirme drauf sollen. Die Texte schreibe ich dir, wenn die Konten stehen.

---

## Mein Vorschlag in einem Satz

Am **01.08. mit der Web-App starten**, in derselben Woche die beiden Entwicklerkonten anlegen, dann **Android Mitte August** und **iPhone Ende August** nachlegen. Deine Mitglieder merken den Unterschied kaum — die Web-App liegt bei ihnen ohnehin schon als Symbol auf dem Startbildschirm.
