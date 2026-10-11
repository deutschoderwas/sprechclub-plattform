# -*- coding: utf-8 -*-
"""Baut hoeren-b2c1-plus.js aus hoer_daten.py.

Die sechzehn Wortfragen pro Thema entstehen hier aus den Woertern —
gleiche Form wie in hoeren-b2-neu.js. Die falschen Antworten sind
Erklaerungen anderer Woerter desselben Themas: Sie klingen plausibel
und sind trotzdem eindeutig falsch. Die Auswahl laeuft ueber einen
festen Versatz, nicht ueber Zufall, damit zwei Laeufe dieselbe Datei
ergeben.
"""
import io, json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from hoer_daten import THEMEN   # noqa

def frage(woerter, i):
    de, info, emoji = woerter[i]
    n = len(woerter)
    falsch = [woerter[(i + k) % n][1] for k in (3, 7, 11)]
    opts = [info] + falsch
    return {
        "type": "choice",
        "audio": de,
        "q": "🔊 Hör zu – was bedeutet das Wort?",
        "options": opts,
        "answer": 0,
        "w": de,
        "explain": de + " = " + info + ".",
    }

KOPF = '''/* ============================================================
   hoeren-b2c1-plus.js — Hören auf B2 und C1 auffüllen

   Gemessen am 11.10.2026 stand Hören so da: A1 sechs Themen mit
   288 Aufgaben, A2 acht mit 384 — B2 dagegen nur fünf mit 223
   und C1 vier mit 192. (B1 liegt mit 41 Themen weit darüber,
   weil dort die Lektionen mithängen; das ist kein Maßstab.)

   Diese Datei hängt sechs Themen an, drei pro Niveau:

     B2  b2-arzt-befund          Befund, Überweisung, Krankschreibung
     B2  b2-bank-geld            Konto, Dispo, Gebühren
     B2  b2-reise-stoerung       Verspätung, Umbuchung, Entschädigung
     C1  c1-vortrag-folgen       Gliederung, Exkurs, Rückbezug
     C1  c1-bewerbungsgespraech  indirekte Fragen, Gehalt, Rückfragen
     C1  c1-telefonkonferenz     schlechte Leitung, viele Stimmen

   Form wie in hoeren-b2-neu.js: 16 Wörter, vier Hörtexte, sechzehn
   Wortfragen. Die übrigen Formen (tippen, buchstaben, artikel,
   speak, order) erzeugt bau/mach-vielfalt.js daraus, so wie bei
   den bestehenden Themen auch.

   Kein audioUrl: Zu diesen Texten gibt es keine Aufnahme. ueben.js
   liest sie seit dem 11.10. mit der Stimme des Geräts vor — vorher
   stand dort ein Knopf, der auf undefined zeigte. Eine echte
   Aufnahme bleibt besser; wenn Julia welche einspricht, kommt bei
   jedem Hörtext ein audioUrl dazu und der Knopf wechselt von allein.

   Erzeugt von mach-hoeren.py. Die Hörtexte und Wörter stehen in
   hoer_daten.py — die Wortfragen bitte dort ändern, nicht hier.
   ============================================================ */
(function () {
  'use strict';

  var U = window.UEBUNGEN;
  if (!U || !U.skills) return;
  var sk = null;
  for (var i = 0; i < U.skills.length; i++) {
    if (U.skills[i] && U.skills[i].id === 'hoeren') { sk = U.skills[i]; break; }
  }
  if (!sk) return;
  if (sk.__b2c1PlusGeladen) return;
  sk.__b2c1PlusGeladen = true;

  var THEMEN = '''

FUSS = ''';

  sk.themes = (sk.themes || []).concat(THEMEN);

  /* Nach Niveau sortieren, damit die neuen nicht hinter C1 landen,
     wenn jemand B2 geöffnet hat. */
  var RANG = { 'A1':1, 'A2':2, 'B1':3, 'B2':4, 'C1':5, 'C2':6 };
  sk.themes.sort(function (a, b) {
    return (RANG[(a && a.level) || ''] || 9) - (RANG[(b && b.level) || ''] || 9);
  });
})();
'''

raus = []
for t in THEMEN:
    woerter = [{"de": d, "info": i, "emoji": e} for d, i, e in t["words"]]
    uebungen = []
    for label, transcript, q, options, answer in t["listen"]:
        uebungen.append({
            "type": "listen", "label": label,
            "q": q, "options": options, "answer": answer,
            "transcript": transcript,
        })
    for i in range(len(t["words"])):
        uebungen.append(frage(t["words"], i))
    raus.append({
        "id": t["id"], "title": t["title"], "level": t["level"],
        "emoji": t["emoji"], "words": woerter, "exercises": uebungen,
    })

js = json.dumps(raus, ensure_ascii=False, indent=2)
js = "\n".join("  " + z if z.strip() else z for z in js.split("\n")).strip()
io.open(os.path.join(os.path.dirname(__file__), "..", "hoeren-b2c1-plus.js"), "w", encoding="utf-8").write(KOPF + js + FUSS)

print("Themen:", len(raus))
for t in raus:
    print(" ", t["level"], t["id"].ljust(24), len(t["exercises"]), "Aufgaben,", len(t["words"]), "Wörter")
