# Softy LLC — production deploy guide

This is the canonical reference for putting `softy-astro` on a public server.
The stack: **Astro (hybrid SSG + node API) → PM2 → Nginx → Let's Encrypt SSL**.

> Time estimate end-to-end: **45–60 minutes** on a clean Ubuntu 22.04 VPS.

---

## 1. Prerequisites

- A Linux VPS (Ubuntu 22.04+ recommended) — minimum **1 vCPU / 1 GB RAM**.
- A registered domain pointing **A/AAAA records → server IP**.
  - `softy.uz` and `www.softy.uz`
- SSH access as a non-root user with `sudo`.

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git nginx certbot python3-certbot-nginx ufw rsync
```

---

## 2. Install Node 20

Astro 4 needs Node 18.17+. Use the NodeSource LTS:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v   # → v20.x
npm -v
sudo npm install -g pm2
```

---

## 3. Get the code

```bash
sudo mkdir -p /opt/softy
sudo chown -R "$USER":"$USER" /opt/softy
cd /opt/softy

# Either clone from your git remote …
git clone <your-repo-url> .

# … or upload via rsync from your laptop:
#   rsync -azP --exclude node_modules --exclude dist ./softy-astro/ user@srv:/opt/softy/

npm install
```

---

## 4. Configure environment

```bash
cp .env.example .env
nano .env
```

Fill in:

| Variable | Required? | Notes |
| --- | --- | --- |
| `TELEGRAM_BOT_TOKEN` | strongly recommended | from @BotFather |
| `TELEGRAM_CHAT_ID` | strongly recommended | from @userinfobot or a group |
| `SMTP_HOST/PORT/USER/PASS/FROM` | recommended | any SMTP provider |
| `LEAD_EMAIL_TO` | with SMTP | inbox to receive leads |
| `LEAD_WEBHOOK_URL` | optional | CRM / Zapier / Apps Script |
| `PUBLIC_PLAUSIBLE_DOMAIN` | optional | e.g. `softy.uz` (analytics) |

Leads go to `data/leads.jsonl` even if every channel is empty — nothing is lost.

---

## 5. Build

```bash
npm run build
```

This emits:

- `dist/client/` — static assets (HTML, CSS, JS, images, sitemap)
- `dist/server/entry.mjs` — the Node server that serves API routes

Smoke-test:

```bash
HOST=127.0.0.1 PORT=4321 node ./dist/server/entry.mjs
# in another shell:
curl -I http://127.0.0.1:4321/
curl -s -X POST http://127.0.0.1:4321/api/contact/ \
  -H 'content-type: application/json' \
  -d '{"name":"Deploy test","phone":"+998900000000","message":"hi"}'
# → {"ok":true}
# stop with Ctrl-C
```

---

## 6. Run under PM2

```bash
mkdir -p logs
pm2 start ecosystem.config.cjs --env production
pm2 save
pm2 startup systemd        # follow the printed `sudo` command
pm2 logs softy             # confirm it's serving on 127.0.0.1:4321
```

PM2 will restart `softy` on crash and on reboot. Update workflow later:

```bash
git pull && npm install && npm run build && pm2 reload softy
```

---

## 7. Front it with Nginx + SSL

```bash
sudo cp nginx.conf.example /etc/nginx/sites-available/softy.uz
sudo ln -s /etc/nginx/sites-available/softy.uz /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Get the certificate (Let's Encrypt, free, auto-renews via systemd timer):
sudo certbot --nginx -d softy.uz -d www.softy.uz
```

The Nginx template already includes:

- HTTP → HTTPS redirect
- HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
  `Permissions-Policy`, a tight `Content-Security-Policy`
- gzip for text assets
- 30-day caching for fingerprinted static files
- A per-IP rate-limit zone in front of `/api/contact/`

Reload after each change with `sudo nginx -t && sudo systemctl reload nginx`.

---

## 8. Firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

The Node server stays on `127.0.0.1:4321` (Nginx is the only thing exposed).

---

## 9. Lead-log backup (cron)

```bash
chmod +x scripts/backup-leads.sh
crontab -e
#  m h dom mon dow  command
   5 3 * * *  /opt/softy/scripts/backup-leads.sh >> /var/log/softy-backup.log 2>&1
```

Optional remote shipping — set in env before the cron command:

- `BACKUP_REMOTE="user@backup-host:/srv/softy/"` (rsync)
- `S3_BUCKET="s3://softy-backups"` (requires `aws cli`)

The script gzips a snapshot, ships it off-server, truncates the live file,
and prunes local copies older than 30 days.

---

## 10. Verify

```bash
# HTML
curl -I https://softy.uz/
curl -I https://softy.uz/uz/catalog/

# API
curl -s -X POST https://softy.uz/api/contact/ \
  -H 'content-type: application/json' \
  -d '{"name":"Live test","phone":"+998901112233","message":"live"}' \
# → {"ok":true}

# Security headers
curl -I https://softy.uz/ | grep -iE 'strict-transport|x-frame|x-content|content-security'

# Sitemap
curl -s https://softy.uz/sitemap-index.xml | head
```

You should see `200 OK`, `{"ok":true}`, and every security header
echoed back.

---

## 11. Monitoring (recommended)

| Concern | Free tool |
| --- | --- |
| Uptime | [UptimeRobot](https://uptimerobot.com) — ping `https://softy.uz/` every 5 min |
| Error tracking | [Sentry](https://sentry.io) free tier or [GlitchTip](https://glitchtip.com) self-hosted |
| Privacy-friendly analytics | [Plausible](https://plausible.io) or self-hosted [Umami](https://umami.is) |

Set `PUBLIC_PLAUSIBLE_DOMAIN=softy.uz` in `.env` to switch on the bundled Plausible snippet.

---

## 12. Common operations

```bash
pm2 logs softy --lines 200          # live logs
pm2 monit                           # live CPU/RAM
pm2 reload softy                    # zero-downtime restart
sudo systemctl reload nginx         # apply nginx changes
sudo certbot renew --dry-run        # verify cert auto-renew works
journalctl -u nginx -n 200          # nginx errors
```

You're live. If you change branding or content, just commit, pull,
`npm run build`, and `pm2 reload softy` — Nginx keeps serving without a blip.
