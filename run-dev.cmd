@echo off
set ASTRO_TELEMETRY_DISABLED=1
cd /d "%~dp0"
npm run dev -- --host 127.0.0.1 --port 4321 > astro-dev.log 2> astro-dev.err.log
