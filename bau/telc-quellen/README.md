# telc-Ausbau — Stand und Plan

Julia, 01.11.2026: „Baue alles von telc, wir müssen alles auf der Plattform haben."
Entscheidung: die großen zuerst, voll wie bei Goethe (Strategie, Teile einzeln, Prüfungslauf mit Uhr, Hören mit echter Stimme).

Reihenfolge: telc B1 → telc B2 → telc A2·B1 → telc C1 Hochschule → telc C1 → Beruf (B1+, B2+, B1·B2, B2·C1, C1 Beruf) → C2 → Nischen (A1 Junior, A2/B1 Schule, A1 Migranten).
telc hat 24 Deutsch-Prüfungen (telc.net, Stand 01.11.2026).

## Fertig
- telc B1 Lesen + Sprachbausteine: lesen-telc-b1.js (4 Strategie-Blöcke, 5 Teile mit 15 Runden, 2 Prüfungsläufe à 40 Aufgaben / 90 Min).
  Alle Texte eigene; nur das Format ist nachgebaut. Quelle Format: telc Übungstest 1 Zertifikat Deutsch.

- telc B1 Hören: hoeren-telc-b1.js (4 Blöcke, 3 Teile à 3 Runden, 2 Läufe à 20 Aufgaben/30 Min, Teil 1 einmal hören).
- telc B1 Schreiben: schreiben-telc-b1.js (4 Blöcke, informell + halbformell, 2 Läufe à 30 Min). Bewertung nach telc
  (I/II/III je A–D = 5/3/1/0, ×3 = 45) im Selbstcheck und in api/ai-schreiben.js (schema telc_b1).
- telc B1 Sprechen: sprechen-telc-b1.js (4 Blöcke, Kennenlernen / Thema mit Zeitschriftentext / Planen, 2 Läufe).
- Prüfungsseite telc B1: „Alles für die Prüfung" (Ablauf, Bewertung, Themen, Grammatik, Redemittel) und
  „Bist du bereit?" mit Punkteprognose (schriftlich /225, Grenze 135; mündlich /75, Grenze 45).

## Als Nächstes
telc B2 (Format siehe telc.net + Übungstest 3 Deutsch B2), dann telc A2·B1, C1 Hochschule …
