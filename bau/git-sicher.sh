#!/bin/bash
# ============================================================
#  git-sicher.sh — git ueber die Bruecke, ohne Sperren zu hinterlassen
#
#  Aufruf:  bash bau/git-sicher.sh status
#           bash bau/git-sicher.sh commit -F _tmp/msg.txt
#
#  Warum es das gibt: Ueber die Verbindung zu Julias Mac darf ich
#  Dateien anlegen, aber nicht loeschen. Git legt bei JEDEM Befehl
#  eine Sperrdatei an (.git/index.lock) und raeumt sie danach selbst
#  weg — das Wegraeumen scheitert hier. Schon ein "git status" laesst
#  also eine Sperre zurueck, und die blockiert Julias naechsten
#  Commit in GitHub Desktop.
#
#  Deshalb: vorher aufraeumen, git laufen lassen, hinterher wieder
#  aufraeumen. Verschoben wird nach _to_delete/ mit Zeitstempel im
#  Namen, damit sich zwei Sperren nie gegenseitig ueberschreiben.
# ============================================================
set -o pipefail
cd "$(dirname "$0")/.." || exit 1

raeumen() {
  local n gefunden=0
  n=$(date +%s%N)
  mkdir -p _to_delete
  while IFS= read -r f; do
    [ -n "$f" ] || continue
    mv "$f" "_to_delete/gitsperre-$n-$(basename "$f")" 2>/dev/null && gefunden=$((gefunden+1))
  done < <(find .git -name "*.lock" 2>/dev/null)
  echo "$gefunden"
}

vorher=$(raeumen)
[ "$vorher" -gt 0 ] && echo "[git-sicher] $vorher alte Sperre(n) vorher beiseitegeraeumt."

git "$@" 2>&1 | grep -v "unable to unlink\|^warning: unable to"
ergebnis=${PIPESTATUS[0]}

nachher=$(raeumen)
[ "$nachher" -gt 0 ] && echo "[git-sicher] $nachher neue Sperre(n) hinterher beiseitegeraeumt."

uebrig=$(find .git -name "*.lock" 2>/dev/null | wc -l | tr -d ' ')
if [ "$uebrig" != "0" ]; then
  echo "[git-sicher] ACHTUNG: $uebrig Sperre(n) liegen noch da:"
  find .git -name "*.lock" 2>/dev/null | sed 's/^/    /'
else
  echo "[git-sicher] Sperren: 0"
fi
exit "$ergebnis"
