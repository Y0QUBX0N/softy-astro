import type { APIRoute } from "astro";
import { appendFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import nodemailer, { type Transporter } from "nodemailer";

// This endpoint must run on the server, not be pre-rendered.
export const prerender = false;

/* ───────────────────────── helpers ───────────────────────── */

interface Lead {
  name: string;
  phone: string;
  email: string;
  message: string;
  lang: string;
  page: string;
}

const MAX = { name: 120, phone: 40, email: 160, message: 4000, lang: 8, page: 60 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Allows +, digits, spaces, (), -. 7–20 meaningful digits.
const PHONE_DIGITS_RE = /\d/g;

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

/* ─────────────────── simple in-memory rate limit ─────────────────── */
// Resets on server restart — adequate for a small marketing site. For
// multi-instance deployments, swap for a shared store (Redis/KV).
const HITS = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_HITS = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const arr = (HITS.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  arr.push(now);
  HITS.set(ip, arr);
  // Opportunistic cleanup so the map can't grow unbounded.
  if (HITS.size > 5000) {
    for (const [k, v] of HITS) {
      if (v.every((t) => now - t >= WINDOW_MS)) HITS.delete(k);
    }
  }
  return arr.length > MAX_HITS;
}

function clientIp(request: Request): string {
  const h = request.headers;
  return (
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "unknown"
  );
}

/* ─────────────────── delivery channels ─────────────────── */

const env = (k: string): string | undefined =>
  process.env[k] ?? (import.meta.env as Record<string, string | undefined>)[k];

function formatMessage(lead: Lead, ip: string): string {
  const at = new Date().toISOString();
  return [
    "🟢 <b>New lead — softy.uz</b>",
    "",
    `<b>Name:</b> ${escapeHtml(lead.name)}`,
    `<b>Phone:</b> ${escapeHtml(lead.phone)}`,
    lead.email ? `<b>Email:</b> ${escapeHtml(lead.email)}` : null,
    lead.message ? `<b>Message:</b> ${escapeHtml(lead.message)}` : null,
    "",
    `<i>${lead.lang.toUpperCase()} · ${escapeHtml(lead.page)} · ${ip} · ${at}</i>`,
  ]
    .filter(Boolean)
    .join("\n");
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c] as string));
}

async function sendTelegram(lead: Lead, ip: string): Promise<boolean> {
  const token = env("TELEGRAM_BOT_TOKEN");
  const chatId = env("TELEGRAM_CHAT_ID");
  if (!token || !chatId) return false;
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatMessage(lead, ip),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function sendWebhook(lead: Lead, ip: string): Promise<boolean> {
  const url = env("LEAD_WEBHOOK_URL");
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...lead, ip, at: new Date().toISOString() }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/* Email transport is created lazily and reused — keeps cold-start fast. */
let _mailer: Transporter | null = null;
function mailer(): Transporter | null {
  if (_mailer) return _mailer;
  const host = env("SMTP_HOST");
  const port = Number(env("SMTP_PORT") || 587);
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  if (!host || !user || !pass) return null;
  _mailer = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
  return _mailer;
}

function formatEmailText(lead: Lead, ip: string): string {
  const at = new Date().toISOString();
  return [
    "New lead — softy.uz",
    "",
    `Name:    ${lead.name}`,
    `Phone:   ${lead.phone}`,
    lead.email ? `Email:   ${lead.email}` : null,
    lead.message ? `\nMessage:\n${lead.message}` : null,
    "",
    `Lang: ${lead.lang.toUpperCase()} · Page: ${lead.page} · IP: ${ip} · ${at}`,
  ]
    .filter(Boolean)
    .join("\n");
}

async function sendEmail(lead: Lead, ip: string): Promise<boolean> {
  const m = mailer();
  const to = env("LEAD_EMAIL_TO") || "info@softy.uz";
  const from = env("SMTP_FROM") || env("SMTP_USER");
  if (!m || !to || !from) return false;
  try {
    await m.sendMail({
      from,
      to,
      replyTo: lead.email || undefined,
      subject: `New lead — ${lead.name}`,
      text: formatEmailText(lead, ip),
    });
    return true;
  } catch (err) {
    console.error("[contact] email send failed:", err);
    return false;
  }
}

async function appendAudit(lead: Lead, ip: string): Promise<boolean> {
  try {
    const file = join(process.cwd(), "data", "leads.jsonl");
    await mkdir(dirname(file), { recursive: true });
    await appendFile(file, JSON.stringify({ ...lead, ip, at: new Date().toISOString() }) + "\n", "utf8");
    return true;
  } catch {
    return false;
  }
}

/* ───────────────────────── handler ───────────────────────── */

export const POST: APIRoute = async ({ request }) => {
  // Accept JSON; tolerate form-encoded as a fallback.
  let raw: Record<string, unknown> = {};
  try {
    const ct = request.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      raw = (await request.json()) as Record<string, unknown>;
    } else {
      const fd = await request.formData();
      fd.forEach((v, k) => (raw[k] = v));
    }
  } catch {
    return json({ ok: false, error: "bad_request" }, 400);
  }

  // Honeypot: real users never fill a hidden field. Pretend success for bots.
  if (clean(raw.company, 100) !== "") {
    return json({ ok: true });
  }

  const ip = clientIp(request);
  if (rateLimited(ip)) {
    return json({ ok: false, error: "rate_limited" }, 429);
  }

  const lead: Lead = {
    name: clean(raw.name, MAX.name),
    phone: clean(raw.phone, MAX.phone),
    email: clean(raw.email, MAX.email),
    message: clean(raw.message, MAX.message),
    lang: clean(raw.lang, MAX.lang) || "uz",
    page: clean(raw.page, MAX.page) || "contact",
  };

  // Validation: name + a reachable contact (phone or email) are required.
  const phoneDigits = (lead.phone.match(PHONE_DIGITS_RE) || []).length;
  const errors: Record<string, string> = {};
  if (lead.name.length < 2) errors.name = "required";
  if (phoneDigits < 7 && !lead.email) errors.phone = "required";
  if (lead.email && !EMAIL_RE.test(lead.email)) errors.email = "invalid";

  if (Object.keys(errors).length) {
    return json({ ok: false, error: "validation", fields: errors }, 422);
  }

  // Deliver through every configured channel; audit log is the safety net.
  const [tg, mail, hook, audit] = await Promise.all([
    sendTelegram(lead, ip),
    sendEmail(lead, ip),
    sendWebhook(lead, ip),
    appendAudit(lead, ip),
  ]);

  // Success if at least one channel accepted the lead.
  if (tg || mail || hook || audit) {
    return json({ ok: true });
  }
  return json({ ok: false, error: "delivery_failed" }, 502);
};

// Astro routes every verb without its own handler here → 405 (POST is handled above).
export const ALL: APIRoute = () => json({ ok: false, error: "method_not_allowed" }, 405);
