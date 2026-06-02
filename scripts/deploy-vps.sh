#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────────────
# Softy LLC — one-shot VPS deploy for Ubuntu 22.04 / 24.04.
# Run as root from INSIDE the cloned repo:
#     sudo bash scripts/deploy-vps.sh
# Re-running is safe (idempotent): it pulls deps, rebuilds, reloads PM2,
# refreshes the Nginx site and (re)tries SSL.
# Override defaults with env vars, e.g.:
#     DOMAIN=softy.uz CERTBOT_EMAIL=info@softy.uz sudo -E bash scripts/deploy-vps.sh
# ──────────────────────────────────────────────────────────────────────────
set -euo pipefail

DOMAIN="${DOMAIN:-softy.uz}"
WWW="${WWW:-www.softy.uz}"
EMAIL="${CERTBOT_EMAIL:-info@softy.uz}"
PORT="${PORT:-4321}"
APP_DIR="$(cd "$(dirname "$0")/.." && pwd)"

log() { printf '\n\033[1;36m▶ %s\033[0m\n' "$*"; }

[ "$(id -u)" -eq 0 ] || { echo "Please run as root:  sudo bash scripts/deploy-vps.sh"; exit 1; }

log "1/8 · System packages"
export DEBIAN_FRONTEND=noninteractive
apt-get update -y
apt-get install -y git nginx certbot python3-certbot-nginx ufw curl ca-certificates

log "2/8 · Node.js 20 + PM2"
if ! command -v node >/dev/null 2>&1 || [ "$(node -p 'process.versions.node.split(".")[0]' 2>/dev/null || echo 0)" -lt 18 ]; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi
node -v
command -v pm2 >/dev/null 2>&1 || npm install -g pm2

log "3/8 · Install dependencies + build"
cd "$APP_DIR"
npm ci
npm run build
mkdir -p logs data
if [ ! -f .env ]; then
  cp .env.example .env
  echo "→ Created .env from template. No secrets yet — leads are saved to data/leads.jsonl."
  echo "  Add TELEGRAM_*/SMTP_* later, then:  pm2 reload softy --update-env"
fi

log "4/8 · PM2 process (softy)"
if pm2 describe softy >/dev/null 2>&1; then
  pm2 reload ecosystem.config.cjs --env production --update-env
else
  pm2 start ecosystem.config.cjs --env production
fi
pm2 save
pm2 startup systemd -u root --hp /root | tail -n 1 | bash || true

log "5/8 · Nginx reverse proxy"
cat > "/etc/nginx/sites-available/${DOMAIN}" <<NGINX
limit_req_zone \$binary_remote_addr zone=softy_contact:10m rate=10r/m;
upstream softy_node { server 127.0.0.1:${PORT} fail_timeout=5s; keepalive 16; }

server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} ${WWW};

    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;

    client_max_body_size 2m;
    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml application/xml;
    gzip_min_length 1024;
    gzip_proxied any;

    location ~* \.(?:css|js|woff2?|ttf|otf|svg|png|jpg|jpeg|webp|avif|ico|gif|mp4)\$ {
        proxy_pass http://softy_node;
        add_header Cache-Control "public, max-age=2592000, immutable";
        proxy_http_version 1.1;
        proxy_set_header Connection "";
    }

    location = /api/contact/ {
        limit_req zone=softy_contact burst=5 nodelay;
        proxy_pass http://softy_node;
        proxy_http_version 1.1;
        proxy_set_header Host              \$host;
        proxy_set_header X-Real-IP         \$remote_addr;
        proxy_set_header X-Forwarded-For   \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_read_timeout 30s;
    }

    location / {
        proxy_pass http://softy_node;
        proxy_http_version 1.1;
        proxy_set_header Host              \$host;
        proxy_set_header X-Real-IP         \$remote_addr;
        proxy_set_header X-Forwarded-For   \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_read_timeout 30s;
    }
}
NGINX
ln -sf "/etc/nginx/sites-available/${DOMAIN}" "/etc/nginx/sites-enabled/${DOMAIN}"
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

log "6/8 · Firewall (ufw)"
ufw allow OpenSSH >/dev/null 2>&1 || true
ufw allow 'Nginx Full' >/dev/null 2>&1 || true
yes | ufw enable >/dev/null 2>&1 || true

log "7/8 · SSL certificate (Let's Encrypt)"
if certbot --nginx -d "${DOMAIN}" -d "${WWW}" --non-interactive --agree-tos -m "${EMAIL}" --redirect; then
  echo "→ SSL provisioned for ${DOMAIN} + ${WWW} ✓"
elif certbot --nginx -d "${DOMAIN}" --non-interactive --agree-tos -m "${EMAIL}" --redirect; then
  echo "→ SSL provisioned for ${DOMAIN} (www skipped — add a www DNS record, then re-run) ✓"
else
  echo "⚠ certbot could not issue a certificate yet."
  echo "  Most likely the DNS A record for ${DOMAIN} does not point to THIS server yet."
  echo "  The site is already live over HTTP. Once DNS resolves to this IP, run:"
  echo "    certbot --nginx -d ${DOMAIN} -d ${WWW} --agree-tos -m ${EMAIL} --redirect"
fi

log "8/8 · Status"
pm2 status || true
echo
echo "Local origin check:"
curl -sI "http://127.0.0.1:${PORT}/" | head -1 || true
echo
echo "✅ Deploy finished. Public site: http://${DOMAIN}/  (https after SSL)."
