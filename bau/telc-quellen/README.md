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

- telc B2 komplett: lesen/hoeren/schreiben/sprechen-telc-b2.js. Quelle Format: telc „Tipps zur Prüfungsvorbereitung
  Deutsch B2" + Übungstest 1/3. Hören nur EINMAL; Schreiben A Information / B Beschwerde, 3 von 4 Leitpunkten, mind. 150
  Wörter; Sprechen Erfahrung / Diskussion / Planen je 25 P. Bestehensgrenze nicht belegt → Prognose „Richtwert 60 %".

- telc A2·B1 komplett: lesen/hoeren/schreiben/sprechen-telc-a2b1.js. Quelle: telc Übungstest 1 Deutsch A2·B1.
  Lesen 4 Teile + Sprachbausteine + Mail verstehen; Hören 5 Teile inkl. Telefonnotiz (Eingabefeld, neu in pruefung-hoeren.js);
  Schreiben Mail beantworten + Kurznachricht (Übungspunkte, keine telc-Wertung); Sprechen Vorstellen / Planen / Meinung.
  Prognose zeigt B1 / A2 / noch nicht nach den echten Regeln (70 %/40 %…). Lernziel kennt jetzt „telc A2·B1".

- telc C1 Hochschule komplett: lesen/hoeren/schreiben/sprechen-telc-c1h.js. Quelle: telc „Tipps zur Prüfungsvorbereitung
  Deutsch C1 Hochschule". Lesen: Textrekonstruktion, Abschnitte, Detail (richtig/falsch/steht nicht im Text) + Überschrift,
  Sprachbausteine 22×4. Hören nur einmal: acht Personen, Gespräch mit Satzanfängen, Vortrag mitschreiben (freie Notiz,
  großzügiger Abgleich + „meint dasselbe"). Schreiben ~350 Wörter, vier Kriterien (gleich gewichtet, Übungsschätzung;
  Amanda schema telc_c1h). Sprechen Präsentation / Zusammenfassung / Zitat. Grenze nicht belegt → Richtwert 60 %.

- telc C1 (allgemein) komplett: lesen/hoeren/schreiben/sprechen-telc-c1.js. Quelle: telc Übungstest 1 Deutsch C1 —
  gleiches Format wie C1 Hochschule (plus 20 Min. Pause nach Lesen), aber Alltags-, Berufs- und Gesellschaftsthemen;
  Schreiben Erörterung/Stellungnahme (Amanda: schema telc_c1h mit allg:true); eigene Prüfungsseite telcc1allg,
  Lernziel-Option „telc C1".

- telc B1+ Beruf komplett: lesen/hoeren/schreiben/sprechen-telc-b1b.js. Quelle: telc Übungstest 1 B1+ Beruf.
- telc B2+ Beruf komplett: lesen/hoeren/schreiben/sprechen-telc-b2b.js. Quelle: telc Übungstest 1 B2+ Beruf. Sprachbausteine 1 mit [[n:Wort]] im Text; Schreiben-Rubrik mit eigenen Stufen (B/C = Übungsschätzung); Amanda aus (keineKI), bis ein Schema existiert.
  Wie B1, aber Arbeitswelt: Betreffzeilen, E-Mail-Wechsel, Anzeigen, Infotext, Geschäftsbrief; Hören Kollegen (einmal),
  Gespräch im Betrieb, Ansagen; Brief mit 4 Leitpunkten (Zusatzpunkte IV nicht nachgebildet); Kontaktaufnahme /
  Gespräch über Arbeitsthema / Aufgabe lösen. Bestehen 180/300 und je 60 % (belegt).

- telc B1·B2 Beruf komplett: lesen/hoeren/schreiben/sprechen-telc-b1b2.js. Quellen: telc Übungstest 1 B1·B2 Beruf + „Tipps zur Prüfungsvorbereitung". Hören alles einmal (4 Teile, 23), Lesen 4 Teile + Sprachbausteine 2 Teile (36), Schreiben 2 E-Mails je 4 Kriterien × 0–5 (40), Sprechen Foto/Kurzvortrag/Aufgabe (100). Grenzen belegt (HLS 27/43, Schreiben 14/30, Sprechen 35/75), Prognose typ b1b2. Fotos Teil 1: bilder/beruf/ (Unsplash, siehe bau/bildquellen-beruf.md).

- telc B2·C1 Beruf komplett: lesen/hoeren/schreiben/sprechen-telc-b2c1.js. Quelle: telc Übungstest 1 B2·C1 Beruf. Hören alles einmal (25), Lesen 3 Teile + SB 2 Teile (45; Teil 3 mischt richtig/falsch und a/b/c über a.art), Schreiben 3 Texte (42; III/IV als Übungsschätzung anteilig 2/3/5), Sprechen Small Talk mit Foto / Präsentation / Diskussion (100). Grenzen belegt (HLS 32/50, Schreiben 18/34, Sprechen 35/75), Prognose typ b2c1.

## Als Nächstes
telc C1 Beruf — Formate jeweils bei telc prüfen.
