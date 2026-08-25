# Sprechclub-Plattform — Setup-Anleitung

Dein eigenes Buchungssystem (wie Lingoda): Pakete kaufen → Guthaben → Stunden buchen → Google Meet.

## Was schon fertig ist (dieser Ordner)

| Datei | Zweck |
|---|---|
| `index.html` | Startseite: Stundenplan + Pakete + Login (Magic Link) |
| `konto.html` | Mein Konto: Guthaben, Buchungen, Meet-Links, Storno (bis 2 h vorher) |
| `admin.html` | Dein Bereich: Teilnehmerlisten, Stunden anlegen/absagen, Guthaben anpassen |
| `config.js` | Hier kommen die Supabase-Zugangsdaten rein |
| `supabase-schema.sql` | Einmal in Supabase ausführen (legt alle Tabellen + Regeln an) |
| `api/create-checkout.js` | Startet die Stripe-Bezahlung |
| `api/stripe-webhook.js` | Schreibt nach Zahlung das Guthaben gut |
| `package.json` | Abhängigkeiten für Vercel |

Regeln eingebaut: max. Plätze pro Stunde einstellbar (Standard 5), Storno bis 2 h vorher, jede Stunde hat ein Niveau, Meet-Link nur für Gebuchte sichtbar.

## Schritte (machen wir zusammen)

### 1. Supabase (kostenlos) — JULIA
1. supabase.com → Sign up (mit Google oder E-Mail)
2. "New project" → Name: `sprechclub`, Region: Frankfurt, Datenbank-Passwort merken
3. Mir dann geben: **Project URL** + **anon key** + **service_role key** (Settings → API)

### 2. Stripe (kostenlos, ~1,5 % + 0,25 € pro Zahlung) — JULIA
1. stripe.com → Konto erstellen (E-Mail, Firmendaten, **Bankverbindung** für Auszahlungen)
2. Mir dann geben: **Secret key** (sk_live_…) — Entwickler → API-Schlüssel

### 3. Einrichten — CLAUDE (mache ich)
1. `supabase-schema.sql` in Supabase ausführen
2. Keys in `config.js` + Vercel-Umgebungsvariablen eintragen:
   `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `SITE_URL`
3. Neues GitHub-Repo `sprechclub-plattform` + Vercel-Projekt
4. Stripe-Webhook anlegen (checkout.session.completed → /api/stripe-webhook)
5. Julias Konto als Admin markieren (`is_admin = true`)
6. Stundenplan aus TutorBird eintragen (wiederkehrend, 8 Wochen im Voraus)
7. Domain deutschoderwas-sprechclub.de von TutorBird auf Vercel umstellen
8. Brevo-Bestätigungs-/Erinnerungsmails (optional, Phase 2)

## Wichtig zu wissen
- **Magic-Link-Login**: kein Passwort — Schüler bekommen einen Anmelde-Link per E-Mail.
- **Übergang von TutorBird**: bestehende Schüler bekommen ihr Restguthaben von dir manuell gutgeschrieben (admin.html → Schüler → +1).
- **Rechtliches**: Impressum + AGB/Widerruf für Online-Verkauf gehören auf die Seite (impressum.html anlegen; Texte von deiner aktuellen Seite übernehmen). Steuern/Kleinunternehmerregelung bitte mit deinem Steuerberater klären.
