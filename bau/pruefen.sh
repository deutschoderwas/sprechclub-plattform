#!/bin/bash
# ============================================================
#  bau/pruefen.sh — einmal alles durchsehen, bevor gepusht wird
#
#  Ruft der Reihe nach:
#    1. pruef-lektionen.js  — die 72 Kurslektionen: alle acht
#       Bausteine da, Mindestmengen erfuellt, jede Uebung loesbar
#    2. mach-lehrplan.js    — baut lehrplan.js neu und prueft dabei
#       jeden einzelnen Verweis gegen die vorhandenen Daten
#    3. pruef-seiten.js     — die Lektionsseiten im Katalog
#
#  Endet mit 1, wenn irgendwo etwas Schweres gefunden wurde.
#
#  Aufruf:  bash bau/pruefen.sh
# ============================================================
cd "$(dirname "$0")/.." || exit 1
fehler=0

echo "=============================================="
echo " 1. Kurslektionen"
echo "=============================================="
node bau/pruef-lektionen.js || fehler=1

echo
echo "=============================================="
echo " 2. Lehrplan neu bauen und Verweise pruefen"
echo "=============================================="
node bau/mach-lehrplan.js | tail -8
grep -q "Alle Verweise gefunden" <(node bau/mach-lehrplan.js) || { echo "  ACHTUNG: es fehlen Verweise"; fehler=1; }

echo
echo "=============================================="
echo " 3. Lektionsseiten"
echo "=============================================="
node bau/pruef-seiten.js | tail -14

echo
if [ "$fehler" = "0" ]; then
  echo "Nichts Schweres gefunden."
else
  echo "Es gibt schwere Funde — bitte oben nachsehen."
fi
exit "$fehler"
