#!/usr/bin/env bash
# Render every slide-*.html to deck/exports/*.png at 1536x1024.
# Requires a Chromium headless shell (path below is the Claude Code cloud env default).
set -euo pipefail
cd "$(dirname "$0")"
CHROME="${CHROME:-/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell}"
mkdir -p exports
for f in slide-*.html; do
  n="${f%.html}"
  "$CHROME" --no-sandbox --disable-gpu --window-size=1536,1024 --hide-scrollbars \
    --virtual-time-budget=6000 --screenshot="exports/$n.png" "file://$PWD/$f"
  echo "rendered exports/$n.png"
done
