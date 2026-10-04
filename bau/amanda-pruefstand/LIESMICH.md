# Amandas Prüfstand

30 Fragen an die laufende Seite, bei denen Amanda erfahrungsgemäß wackelt.
Nach jeder Änderung an `api/support-chat.js` laufen lassen.

    python3 bau/amanda-pruefstand/lauf.py            # alle 30, etwa 3 Minuten
    python3 bau/amanda-pruefstand/lauf.py 17 27 28   # nur einzelne

Jede Frage trägt, wo es geht, ein automatisches Kriterium: `verboten`
(diese Form darf nicht als richtig dastehen) und `erwartet` (das muss
vorkommen). Sternchen werden vor dem Prüfen entfernt, und eine falsche
Form gilt als in Ordnung, wenn Amanda sie ausdrücklich als falsch
kennzeichnet — genau das soll sie ja tun.

## Das Automatische ersetzt das Lesen nicht

Die gefährlichen Fehler sahen alle völlig plausibel aus:

- „Der Plural von Status ist *Stati*" — gibt es nicht. Eine Stunde
  vorher hatte sie dieselbe Frage richtig beantwortet. Sie schwankt
  von Lauf zu Lauf und klingt dabei immer gleich sicher.
- „*der Virus* ist die medizinische Fachsprache" — genau umgekehrt.
  Duden: im medizinischen Sinn *das Virus*, beim Computer *der Virus*.
  Dazu erfand sie, *das Virus* sage man in Österreich und der Schweiz.
- telc B1, Sprechteil: sie ließ die *Kontaktaufnahme* weg und erfand
  einen dritten Teil dazu. Wer sich danach vorbereitet, merkt es erst
  am Prüfungstag.

Also `ergebnis.json` nach jedem Lauf durchlesen, nicht nur die Ampel
anschauen. Was auffällt, kommt als neue Frage dazu — so wächst der
Prüfstand mit.

## Prüfungsfragen sind die heikelsten

Nummer 27 bis 30 prüfen genau das. Nummer 30 ist eine Falle: Preis und
Termin eines Prüfungszentrums kann Amanda nicht wissen. Sie muss das
sagen und auf telc.net verweisen, statt eine Zahl zu erfinden.
