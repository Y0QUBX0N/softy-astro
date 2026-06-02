#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────
# Softy LLC — daily backup for data/leads.jsonl
# Rotates the live audit log and ships a date-stamped copy off-server.
#
# Install:
#   chmod +x scripts/backup-leads.sh
#   crontab -e
#     5 3 * * *  /opt/softy/scripts/backup-leads.sh >> /var/log/softy-backup.log 2>&1
# ─────────────────────────────────────────────────────────────────────
set -euo pipefail

APP_DIR="${APP_DIR:-/opt/softy}"
SRC="$APP_DIR/data/leads.jsonl"
BACKUP_DIR="${BACKUP_DIR:-$APP_DIR/data/backups}"
KEEP_DAYS="${KEEP_DAYS:-30}"
REMOTE="${BACKUP_REMOTE:-}"            # e.g. "user@backup-host:/srv/softy/"
S3_BUCKET="${S3_BUCKET:-}"             # e.g. "s3://softy-backups" (requires aws cli)

mkdir -p "$BACKUP_DIR"

STAMP="$(date -u +%Y-%m-%d_%H%M%S)"
DEST="$BACKUP_DIR/leads-$STAMP.jsonl.gz"

if [[ ! -s "$SRC" ]]; then
  echo "[$STAMP] No leads to back up (file empty or missing): $SRC"
  exit 0
fi

# Snapshot + compress
gzip -c "$SRC" > "$DEST"
SIZE="$(du -h "$DEST" | cut -f1)"
echo "[$STAMP] Snapshot $DEST ($SIZE)"

# Rotate the live file: empty it so audit grows fresh for the next day.
# (Pre-rotation snapshot already saved above.)
: > "$SRC"

# Ship off-server if configured
if [[ -n "$REMOTE" ]]; then
  rsync -az --partial "$DEST" "$REMOTE" && echo "[$STAMP] rsynced to $REMOTE"
fi
if [[ -n "$S3_BUCKET" ]] && command -v aws >/dev/null 2>&1; then
  aws s3 cp "$DEST" "$S3_BUCKET/" && echo "[$STAMP] uploaded to $S3_BUCKET"
fi

# Local retention
find "$BACKUP_DIR" -name 'leads-*.jsonl.gz' -mtime "+$KEEP_DAYS" -delete
echo "[$STAMP] Old backups pruned (>${KEEP_DAYS}d)"
