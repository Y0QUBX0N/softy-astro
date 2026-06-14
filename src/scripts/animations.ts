import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isDesktop = window.matchMedia("(pointer: fine) and (min-width: 901px)").matches;

// Switch CSS into the JS-driven reveal mode BEFORE paint so the IO can
// drive the animation. If this module never runs, the CSS keyframe still
// fades content in — no content is ever stuck at opacity 0.
document.documentElement.classList.add("js-on");

function ready(fn: () => void) {
  if (document.readyState !== "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
}

ready(() => {
  /* ---------- NAV scroll state ---------- */
  const nav = document.getElementById("nav");
  if (nav) {
    const update = () => {
      const scrolled = window.scrollY > 24;
      nav.dataset.state = scrolled ? "scrolled" : "top";
      nav.classList.toggle("glass", scrolled);
      nav.classList.toggle("border-hairline", scrolled);
      nav.classList.toggle("border-transparent", !scrolled);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ---------- Mobile menu (right-side drawer) ---------- */
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobileMenu");
  const backdrop = document.getElementById("menuBackdrop");
  if (burger && menu) {
    const ICON_MENU =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    const ICON_CLOSE =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    let open = false;
    const setOpen = (o: boolean) => {
      open = o;
      menu.classList.toggle("is-open", o);
      backdrop?.classList.toggle("is-open", o);
      burger.innerHTML = o ? ICON_CLOSE : ICON_MENU;
      burger.setAttribute("aria-expanded", String(o));
      menu.setAttribute("aria-hidden", String(!o));
      document.body.style.overflow = o ? "hidden" : "";
    };
    burger.addEventListener("click", () => setOpen(!open));
    backdrop?.addEventListener("click", () => setOpen(false));
    menu.querySelectorAll("[data-close]").forEach((a) =>
      a.addEventListener("click", () => setOpen(false))
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && open) setOpen(false);
    });
  }

  /* ---------- Hero word reveal ---------- */
  const heroWords = gsap.utils.toArray<HTMLElement>(".hero-word-inner");
  if (heroWords.length && !reduce) {
    gsap.set(heroWords, { yPercent: 110 });
    gsap.to(heroWords, {
      yPercent: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.05,
      delay: 0.15,
    });
  }

  /* ---------- Generic reveals (IntersectionObserver — no GSAP needed) ---------- */
  const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.hero-word)"));
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    reveals.forEach((el) => {
      // Already in view at page load? Reveal immediately.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        el.classList.add("in");
      } else {
        io.observe(el);
      }
    });
  }

  /* ---------- Count-up stats ---------- */
  document.querySelectorAll<HTMLElement>(".count").forEach((el) => {
    const target = Number(el.dataset.count || "0");
    if (reduce) {
      el.textContent = String(target);
      return;
    }
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: target,
          duration: 1.3,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        });
      },
    });
  });

  /* ---------- Infinite marquees ---------- */
  const makeMarquee = (trackId: string, seconds: number) => {
    const track = document.getElementById(trackId);
    if (!track || reduce) return;
    const tween = gsap.to(track, {
      xPercent: -50,
      duration: seconds,
      ease: "none",
      repeat: -1,
    });
    const wrap = track.parentElement;
    wrap?.addEventListener("mouseenter", () => tween.pause());
    wrap?.addEventListener("mouseleave", () => tween.play());
  };
  makeMarquee("tMarqueeTrack", 60);
  makeMarquee("clientsTrack", 55);

  /* ---------- Scroll story ---------- */
  const storyWrap = document.getElementById("storyWrap");
  const storyPin = document.getElementById("storyPin");
  const steps = gsap.utils.toArray<HTMLElement>(".story-step");
  if (storyWrap && storyPin && steps.length) {
    const total = steps.length;
    const numEl = document.getElementById("storyNum");
    const titleEl = document.getElementById("storyTitle");
    const counterEl = document.getElementById("storyCounter");
    const barEl = document.getElementById("storyBar");

    const activate = (i: number) => {
      const s = steps[i];
      if (numEl) numEl.textContent = s.dataset.num || "01";
      if (titleEl) titleEl.textContent = s.dataset.title || "";
      if (counterEl) counterEl.textContent = `0${i + 1} / 0${total}`;
      if (barEl) barEl.style.width = `${((i + 1) / total) * 100}%`;
      steps.forEach((el, idx) => el.classList.toggle("story-active", idx === i));
    };

    // The left visual is pinned with CSS position: sticky (see ScrollStory.astro).
    // Here we only drive the number / title / progress as each step scrolls in.
    steps.forEach((s, i) => {
      ScrollTrigger.create({
        trigger: s,
        start: "top center",
        end: "bottom center",
        onEnter: () => activate(i),
        onEnterBack: () => activate(i),
      });
    });
    activate(0);
  }

  /* ---------- FAQ accordion ---------- */
  const faqList = document.getElementById("faqList");
  if (faqList) {
    const items = Array.from(faqList.querySelectorAll<HTMLElement>(".faq-item"));
    items.forEach((item) => {
      const btn = item.querySelector<HTMLButtonElement>(".faq-q");
      const panel = item.querySelector<HTMLElement>(".faq-a");
      btn?.addEventListener("click", () => {
        const isOpen = item.dataset.open === "true";
        items.forEach((other) => {
          const op = other.querySelector<HTMLElement>(".faq-a");
          other.dataset.open = "false";
          other.querySelector(".faq-q")?.setAttribute("aria-expanded", "false");
          if (op) op.style.gridTemplateRows = "0fr";
        });
        if (!isOpen) {
          item.dataset.open = "true";
          btn.setAttribute("aria-expanded", "true");
          if (panel) panel.style.gridTemplateRows = "1fr";
        }
      });
    });
  }

  /* ---------- Contact form (AJAX → /api/contact) ---------- */
  const form = document.getElementById("contactForm") as HTMLFormElement | null;
  if (form) {
    const success = document.getElementById("formSuccess");
    const errorBox = document.getElementById("formError");
    const errorMsg = document.getElementById("formErrorMsg");
    const submit = document.getElementById("formSubmit") as HTMLButtonElement | null;
    const label = document.getElementById("formSubmitLabel");
    const defaultLabel = label?.dataset.default || label?.textContent || "Send";
    const sendingLabel = form.dataset.sending || "Sending…";
    const errorText = form.dataset.error || "Something went wrong.";

    const show = (el: HTMLElement | null) => el && (el.classList.remove("hidden"), el.classList.add("flex"));
    const hide = (el: HTMLElement | null) => el && (el.classList.add("hidden"), el.classList.remove("flex"));

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      hide(success);
      hide(errorBox);
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const payload = Object.fromEntries(new FormData(form).entries());
      if (submit) submit.disabled = true;
      if (label) label.textContent = sendingLabel;

      try {
        const res = await fetch(form.action, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json().catch(() => ({ ok: res.ok }));
        if (res.ok && data.ok) {
          show(success);
          form.reset();
        } else {
          if (errorMsg) errorMsg.textContent = errorText;
          show(errorBox);
        }
      } catch {
        if (errorMsg) errorMsg.textContent = errorText;
        show(errorBox);
      } finally {
        if (submit) submit.disabled = false;
        if (label) label.textContent = defaultLabel;
      }
    });
  }

  /* ---------- Custom cursor ---------- */
  if (isDesktop) {
    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    if (dot && ring) {
      let mx = window.innerWidth / 2,
        my = window.innerHeight / 2;
      let rx = mx,
        ry = my;
      window.addEventListener("pointermove", (e) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      });
      const loop = () => {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
        requestAnimationFrame(loop);
      };
      loop();
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
        el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
      });
    }
  }

  /* ---------- Magnetic elements (desktop, fine pointer) ---------- */
  // The cursor "pulls" the element toward it — a tactile, high-end touch
  // reserved for primary CTAs and key interactive marks.
  if (isDesktop && !reduce) {
    document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
      const strength = parseFloat(el.dataset.magnetic || "") || 0.3;
      const inner = el.querySelector<HTMLElement>("[data-magnetic-inner]");
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * strength;
        const y = (e.clientY - (r.top + r.height / 2)) * strength;
        el.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
        if (inner) inner.style.transform = `translate(${(x * 0.4).toFixed(2)}px, ${(y * 0.4).toFixed(2)}px)`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
        if (inner) inner.style.transform = "";
      });
    });
  }

  /* ---------- Scroll parallax ---------- */
  // Decorative-only depth: large display figures and the footer wordmark
  // drift at a different rate than the page, so scrolling feels physical.
  if (!reduce && isDesktop) {
    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
      const depth = parseFloat(el.dataset.parallax || "") || 0.12;
      const host = el.closest("section, footer") || el;
      gsap.fromTo(
        el,
        { yPercent: depth * 18 },
        {
          yPercent: -depth * 18,
          ease: "none",
          scrollTrigger: { trigger: host, start: "top bottom", end: "bottom top", scrub: 0.6 },
        },
      );
    });
  }

  /* ---------- Staggered child reveals ---------- */
  // Grids tagged data-stagger cascade their children in, one after another,
  // instead of snapping the whole block at once.
  if (!reduce && "IntersectionObserver" in window) {
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((grid) => {
      const kids = Array.from(grid.children) as HTMLElement[];
      kids.forEach((k, i) => {
        k.style.transitionDelay = `${Math.min(i, 12) * 55}ms`;
      });
      const sio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              grid.classList.add("stagger-in");
              sio.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
      );
      const rect = grid.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) grid.classList.add("stagger-in");
      else sio.observe(grid);
    });
  }

  /* refresh triggers after fonts/layout settle */
  window.addEventListener("load", () => ScrollTrigger.refresh());
});
