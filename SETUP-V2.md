# Schülerbereich v2 — Einrichtung (2 Schritte)

Der neue Schülerbereich ist fertig gebaut. Damit alles live funktioniert, brauche ich von dir **zwei kurze Handgriffe**. Beide kann nur du machen (Datenbank + Geheimschlüssel). Danach führe ich dich durch den Rest.

---

## Schritt 1 — Datenbank erweitern (2 Min)

Die neuen Funktionen (KI-Übungen, Fortschritt, Nachrichten, Bewertungen, Profil) brauchen ein paar neue Tabellen.

1. Öffne dein **Supabase-Projekt** → linke Leiste: **SQL Editor** → **New query**
2. Öffne die Datei **`supabase-schema-v2.sql`** (liegt im selben Ordner), kopiere **alles** hinein
3. Klick **Run** (unten rechts)

Du solltest „Success. No rows returned" sehen. Fertig. Das Skript ist sicher mehrfach ausführbar — falls du unsicher bist, einfach nochmal laufen lassen.

> Nebeneffekt (gut!): Das Skript schließt eine kleine Sicherheitslücke — bisher hätten eingeloggte Nutzer theoretisch ihr eigenes Guthaben ändern können. Ab jetzt geht das nicht mehr.

---

## Schritt 2 — Amanda-Schlüssel in Vercel (3 Min)

Damit Amanda die Übungen erstellen kann, braucht der Server einen **Anthropic-API-Schlüssel** (das ist die KI hinter Amanda).

**a) Schlüssel holen:**
1. Geh auf **console.anthropic.com** → einloggen (oder Konto anlegen)
2. Links **API Keys** → **Create Key** → Name z. B. `sprechclub` → **Copy** (beginnt mit `sk-ant-…`)
3. Wichtig: In **Billing** ein kleines Guthaben aufladen (z. B. 5 €) — sonst antwortet die KI nicht.

**b) In Vercel eintragen:**
1. Vercel → dein Projekt **sprechclub-plattform** → **Settings** → **Environment Variables**
2. **Add New:**
   - Key = `ANTHROPIC_API_KEY`  ·  Value = dein `sk-ant-…`  → **Save**
3. Prüf, dass auch `SUPABASE_SERVICE_ROLE_KEY` und `SUPABASE_URL` schon da sind (sind sie aus dem Stripe-Setup).
4. **Deployments** → beim neuesten Deployment **⋯ → Redeploy** (damit der neue Schlüssel greift).

> Optional: Mit `ANTHROPIC_MODEL` kannst du das KI-Modell festlegen. Standard ist `claude-sonnet-4-6` (gutes Verhältnis Qualität/Preis). Brauchst du nichts zu tun.

---

## Danach: So erstellst du KI-Übungen

1. Geh in deinen **Admin-Bereich** (`/admin.html`) → **Stunden & Teilnehmer**
2. Bei einer Stunde auf **Material & Vokabeln** → unten **✨ KI-Material erstellen**
3. ~15 Sekunden warten — Amanda baut Übungen passend zu **Niveau + Thema**:
   Lückentexte, Multiple Choice, Zuordnen, Satzbau, Schreibaufgaben, Grammatik-Tipp, Vokabeln & Sprechimpulse.
4. Die Schüler sehen die Übungen sofort im Schülerbereich unter **„Übungen starten"** — interaktiv, mit sofortigem Feedback und Punkten.

Tipp: Du kannst pro Stunde jederzeit **🔄 Neu generieren**, wenn dir das Material nicht gefällt.

---

## Was der neue Schülerbereich kann

- **🏠 Start-Dashboard** — Begrüßung, Wochen-Streak 🔥, Rang & Punkte, nächste Stunde mit Meet-Link & Countdown, Schnellstatistik
- **🪜 Lernpfad A1–C2** — visueller Pfad, aktuelles Niveau + Zielniveau
- **📅 Meine Stunden** — Vorbereitung / Im Unterricht / Nachbearbeitung, mit interaktiven KI-Übungen
- **🃏 Vokabeltrainer** — Karteikarten aus deinen Stunden + KI-Material, „Kann ich"-Markierung
- **🏆 Abzeichen** — 12 Abzeichen + Rang-System (Punkte fürs Dranbleiben)
- **💳 Guthaben & Verlauf** — Wallet mit kompletter Historie
- **✉️ Nachrichten** — Schüler schreiben dir, du antwortest im Admin-Bereich
- **🎤 Amanda** — frei sprechen, mit passenden Sprechimpulsen zur gebuchten Stunde
- **👤 Profil** — Name, Lernziel, Zielniveau, Muttersprache

---

## Reihenfolge zum Hochladen ins GitHub-Repo

Diese Dateien sind neu/geändert — alle ins Repo `sprechclub-plattform`:
- `konto.html` *(komplett neu)*
- `admin.html` *(KI-Button, Nachrichten, Bewertungen)*
- `index.html` *(unverändert — Meet-Texte waren schon drin)*
- `api/generate-material.js` *(neu)*
- `supabase-schema-v2.sql` *(neu — nur zum Ausführen in Supabase, nicht nötig im Deploy, schadet aber nicht)*

Vercel deployt nach dem Upload automatisch. Sag Bescheid, wenn du bei Schritt 1 oder 2 hängst — ich führe dich Klick für Klick durch.
