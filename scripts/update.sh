#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────────────
# Softy LLC — quick update. Run on the VPS after new code is pushed to GitHub:
#     cd /opt/softy && bash scripts/update.sh
#
# Pulls the latest code, rebuilds, and zero-downtime reloads the server.
# The server always ends up exactly matching GitHub's main branch.
# .env and data/ are gitignored, so they are never touched.
# ──────────────────────────────────────────────────────────────────────────
set -euo pipefail
cd "$(dirname "$0")/.."

echo "▶ 1/4 · Fetching latest from GitHub…"
git fetch origin
git reset --hard origin/main

echo "▶ 2/4 · Installing dependencies…"
npm install --no-audit --no-fund

echo "▶ 3/4 · Building…"
npm run build

echo "▶ 4/4 · Reloading server (zero downtime)…"
pm2 reload softy --update-env

echo
echo "✅ Updated. Live: https://softy.uz/"
