import { useEffect, useRef } from "react";

/**
 * Hero background "constellation".
 *
 * Pure Canvas 2D + requestAnimationFrame — no three.js / p5 / any library.
 * 26 vendor names sit as faint "stars"; near stars link with thin lines into
 * a shifting geometric mesh. Everything drifts slowly and is repelled by the
 * cursor. Colours come from CSS custom properties so they are easy to swap:
 *   --c-accent  (dots + lines)   default #00D9A3
 *   --c-label   (label text)     default #F5F2EC
 *
 * Mounted with client:idle so it never blocks the hero's first paint.
 */
const NAMES = [
  "Microsoft", "Google Cloud", "Zoom", "Bitrix24", "ClickUp", "Adobe", "Autodesk",
  "nanoCAD", "LIRA-FEM", "IDEA StatiCa", "IndorSoft", "Kaspersky", "Bitdefender",
  "ESET", "Dr.Web", "Fortinet", "Palo Alto Networks", "Falcongaze", "Vamsoft",
  "GFI Software", "SSL Certificates", "Veeam", "IBM", "JetBrains", "Passware", "MyQ",
];

const CONNECT_DIST = 160; // px — link two stars closer than this
const MOUSE_RADIUS = 260; // px — cursor influence radius
const REPULSION = 14; // px — max push away from cursor
const BASE_SPEED = 0.0002; // normalized units / frame
const MIN = 0.08; // drift bounds (normalized)
const MAX = 0.92;

function hexToRgb(hex: string, fallback: [number, number, number]): [number, number, number] {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
  if (!m) return fallback;
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
}

type Star = {
  hx: number; hy: number; // "home" position (normalized), drifts autonomously
  vx: number; vy: number; // drift velocity (normalized / frame)
  ox: number; oy: number; // current repulsion offset (px), eased
  r: number; // dot radius (px)
  always: boolean; // label always shown?
  la: number; // label alpha, eased 0..1
  glow: number; // cursor-proximity glow, eased 0..1
};

export default function HeroConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cs = getComputedStyle(canvas);
    const [ar, ag, ab] = hexToRgb(cs.getPropertyValue("--c-accent"), [0, 217, 163]);
    const [lr, lg, lb] = hexToRgb(cs.getPropertyValue("--c-label"), [245, 242, 236]);
    const accent = (a: number) => `rgba(${ar},${ag},${ab},${a})`;
    const label = (a: number) => `rgba(${lr},${lg},${lb},${a})`;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    const N = NAMES.length;
    const stars: Star[] = [];

    // Radial / spiral scatter from the centre, with a little jitter so it
    // never reads as a perfect ring. Normalized coords; screen mapping (x*w,
    // y*h) naturally stretches it across the wide hero.
    const cx = 0.5;
    const cy = 0.45;
    for (let i = 0; i < N; i++) {
      const angle = (i / N) * Math.PI * 2 + i * 0.6 + (Math.random() - 0.5) * 0.5;
      const radius = 0.16 + (i % 4) * 0.12 + (Math.random() - 0.5) * 0.05;
      const x = Math.min(MAX, Math.max(MIN, cx + Math.cos(angle) * radius));
      const y = Math.min(MAX, Math.max(MIN, cy + Math.sin(angle) * radius));
      stars.push({
        hx: x, hy: y,
        vx: (Math.random() - 0.5) * 2 * BASE_SPEED,
        vy: (Math.random() - 0.5) * 2 * BASE_SPEED,
        ox: 0, oy: 0,
        r: i % 5 === 0 ? 3 : 1.8,
        always: i < 6,
        la: i < 6 ? 1 : 0,
        glow: 0,
      });
    }

    // Cursor (canvas-relative px). tx/ty = raw target, mx/my = eased.
    let tx = -9999;
    let ty = -9999;
    let mx = -9999;
    let my = -9999;
    let inside = false;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      if (inside) {
        mx += (tx - mx) * 0.08;
        my += (ty - my) * 0.08;
      }

      // ── update ──
      for (const s of stars) {
        if (!reduce) {
          s.hx += s.vx;
          s.hy += s.vy;
          if (s.hx <= MIN || s.hx >= MAX) s.vx *= -1;
          if (s.hy <= MIN || s.hy >= MAX) s.vy *= -1;
          s.hx = Math.min(MAX, Math.max(MIN, s.hx));
          s.hy = Math.min(MAX, Math.max(MIN, s.hy));
        }
        let pushX = 0;
        let pushY = 0;
        let near = 0;
        if (inside && !reduce) {
          const dx = s.hx * w - mx;
          const dy = s.hy * h - my;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE_RADIUS && d > 0.01) {
            const force = 1 - d / MOUSE_RADIUS;
            pushX = (dx / d) * force * REPULSION;
            pushY = (dy / d) * force * REPULSION;
            near = force;
          }
        }
        s.ox += (pushX - s.ox) * 0.1;
        s.oy += (pushY - s.oy) * 0.1;
        s.glow += (near - s.glow) * 0.1;
        const wantLabel = s.always || near > 0.18 ? 1 : 0;
        s.la += (wantLabel - s.la) * 0.12;
      }

      // ── links ──
      ctx.lineWidth = 0.7;
      for (let i = 0; i < N; i++) {
        const a = stars[i];
        const ax = a.hx * w + a.ox;
        const ay = a.hy * h + a.oy;
        for (let j = i + 1; j < N; j++) {
          const b = stars[j];
          const bx = b.hx * w + b.ox;
          const by = b.hy * h + b.oy;
          const d = Math.hypot(ax - bx, ay - by);
          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 0.22 + Math.max(a.glow, b.glow) * 0.4;
            ctx.strokeStyle = accent(Math.min(0.7, alpha));
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }

      // ── stars + labels ──
      // Labels only on tablet+ — on a phone the cursor radius covers most of
      // the narrow canvas and the names would crowd the headline. There the
      // dot/line mesh alone stays as quiet ambient texture.
      const showLabels = w >= 768;
      ctx.font = "12px 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.textBaseline = "middle";
      for (let i = 0; i < N; i++) {
        const s = stars[i];
        const sx = s.hx * w + s.ox;
        const sy = s.hy * h + s.oy;
        ctx.fillStyle = accent(0.5 + s.glow * 0.5);
        ctx.beginPath();
        ctx.arc(sx, sy, s.r + s.glow * 1.6, 0, Math.PI * 2);
        ctx.fill();
        if (showLabels && s.la > 0.01) {
          ctx.fillStyle = label(s.la * (0.5 + s.glow * 0.5));
          ctx.fillText(NAMES[i], sx + s.r + 7, sy);
        }
      }
    };

    // ── rAF loop, paused when off-screen ──
    let raf = 0;
    let running = false;
    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    if (reduce) draw(); // static single frame, no loop / no interaction

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
      if (mx < -9000) {
        mx = tx;
        my = ty;
      } // first move: snap, don't sweep in from the corner
      inside = tx >= 0 && tx <= w && ty >= 0 && ty <= h;
    };
    const onLeave = () => {
      inside = false;
    };
    const onResize = () => {
      resize();
      if (reduce) draw();
    };

    if (!reduce) {
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseleave", onLeave);
    }
    window.addEventListener("resize", onResize);

    // Pause the loop whenever the hero scrolls out of view.
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting;
        if (visible && !reduce) start();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />;
}
