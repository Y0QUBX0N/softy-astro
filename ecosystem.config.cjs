// PM2 process manifest for the Softy LLC node server.
// Usage:
//   pm2 start ecosystem.config.cjs --env production
//   pm2 startup && pm2 save     # auto-restart on server reboot
//   pm2 logs softy              # tail logs
//
// Runtime secrets (TELEGRAM_*, SMTP_*, LEAD_*) live in ./.env and are loaded
// here so the Astro node server sees them via process.env. After editing .env:
//   pm2 reload softy --update-env
const fs = require("node:fs");
const path = require("node:path");

function loadDotenv() {
  const out = {};
  try {
    const file = path.join(__dirname, ".env");
    if (!fs.existsSync(file)) return out;
    for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (!m || line.trim().startsWith("#")) continue;
      out[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch { /* ignore — site runs fine without secrets (leads → data/leads.jsonl) */ }
  return out;
}

const fileEnv = loadDotenv();

module.exports = {
  apps: [
    {
      name: "softy",
      script: "./dist/server/entry.mjs",
      exec_mode: "fork",          // node adapter is single-process; use "cluster" only after load testing
      instances: 1,
      autorestart: true,
      max_restarts: 12,
      min_uptime: "20s",
      restart_delay: 3000,
      kill_timeout: 5000,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        HOST: "127.0.0.1",        // bind locally — Nginx is the public-facing proxy
        PORT: 4321,
        ...fileEnv,
      },
      env_production: {
        NODE_ENV: "production",
        HOST: "127.0.0.1",
        PORT: 4321,
        ...fileEnv,
      },
      out_file: "./logs/softy.out.log",
      error_file: "./logs/softy.err.log",
      time: true,
    },
  ],
};
