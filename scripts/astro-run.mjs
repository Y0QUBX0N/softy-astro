#!/usr/bin/env node
import { spawn } from "node:child_process";
import { join } from "node:path";

process.env.ASTRO_TELEMETRY_DISABLED = "1";

const args = process.argv.slice(2);
const astroEntrypoint = join(process.cwd(), "node_modules", "astro", "astro.js");

const child = spawn(process.execPath, [astroEntrypoint, ...args], {
  cwd: process.cwd(),
  env: process.env,
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
