import { useEffect, useRef } from "react";

const NODES = [
  "Microsoft", "Adobe", "OpenAI", "Anthropic", "Autodesk", "Google Cloud",
  "AWS", "JetBrains", "Atlassian", "Kaspersky", "Figma", "GitHub",
  "SAP", "Notion", "Cursor", "Oracle",
];

interface P {
  x: number; y: number; vx: number; vy: number;
  bx: number; by: number; label: string; r: number; key: boolean;
}

export default function HeroConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let pts: P[] = [];
    const mouse = { x: 0, y: 0, tx: 0, ty: 0, active: false };
    let raf = 0;
    let running = true;

    const seed = () => {
      pts = NODES.map((label, i) => {
        const a = (i / NODES.length) * Math.PI * 2 + i * 0.6;
        const rad = 0.18 + (i % 4) * 0.13;
        const bx = 0.5 + Math.cos(a) * rad * (0.9 + (i % 3) * 0.18);
        const by = 0.5 + Math.sin(a) * rad * (0.9 + (i % 2) * 0.22);
        return {
          x: bx, y: by, bx, by,
          vx: (Math.random() - 0.5) * 0.00018,
          vy: (Math.random() - 0.5) * 0.00018,
          label, r: i % 5 === 0 ? 3 : 1.8,
          key: i < 6,
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      mouse.x = w / 2; mouse.y = h / 2; mouse.tx = w / 2; mouse.ty = h / 2;
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; mouse.tx = w / 2; mouse.ty = h / 2; };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      const screen = pts.map((p) => {
        if (!reduce) {
          p.bx += p.vx; p.by += p.vy;
          if (p.bx < 0.08 || p.bx > 0.92) p.vx *= -1;
          if (p.by < 0.08 || p.by > 0.92) p.vy *= -1;
        }
        const px = p.bx * w;
        const py = p.by * h;
        const dx = px - mouse.x;
        const dy = py - mouse.y;
        const dist = Math.hypot(dx, dy);
        const pull = Math.max(0, 1 - dist / 260);
        const ox = mouse.active ? (dx / (dist || 1)) * pull * 14 : 0;
        const oy = mouse.active ? (dy / (dist || 1)) * pull * 14 : 0;
        return { p, x: px + ox, y: py + oy, pull };
      });

      // links
      for (let i = 0; i < screen.length; i++) {
        for (let j = i + 1; j < screen.length; j++) {
          const a = screen[i], b = screen[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 150) {
            const alpha = (1 - d / 150) * 0.22 + Math.max(a.pull, b.pull) * 0.4;
            ctx.strokeStyle = `rgba(0,217,163,${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes + labels
      ctx.font = "500 12px 'IBM Plex Mono', monospace";
      ctx.textBaseline = "middle";
      for (const s of screen) {
        const glow = 0.5 + s.pull * 0.5;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.p.r + s.pull * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,217,163,${glow})`;
        ctx.fill();
        if (s.p.key || s.pull > 0.2) {
          ctx.fillStyle = `rgba(245,242,236,${0.35 + s.pull * 0.55})`;
          ctx.fillText(s.p.label, s.x + 10, s.y);
        }
      }
      raf = requestAnimationFrame(draw);
    };

    seed();
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running && !raf) draw();
        else { cancelAnimationFrame(raf); raf = 0; }
      },
      { threshold: 0 }
    );
    io.observe(canvas);
    draw();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
