// PM2 process manifest for the Softy LLC node server.
// Usage:
//   pm2 start ecosystem.config.cjs --env production
//   pm2 startup && pm2 save     # auto-restart on server reboot
//   pm2 logs softy              # tail logs
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
      },
      env_production: {
        NODE_ENV: "production",
        HOST: "127.0.0.1",
        PORT: 4321,
      },
      out_file: "./logs/softy.out.log",
      error_file: "./logs/softy.err.log",
      time: true,
    },
  ],
};
