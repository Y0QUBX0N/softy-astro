/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1014",
        "ink-2": "#15181F",
        "ink-3": "#1C2029",
        paper: "#FAFAF7",
        "paper-2": "#F1F0EA",
        primary: "#F5F2EC",
        // Body copy — bright enough to read comfortably as primary running text
        // on the dark canvas (≈7:1 contrast) without competing with headings.
        secondary: "#C9CBD2",
        // Labels / captions / low-emphasis. Brightened from the old #8B8B93
        // (which read faint and made the whole site feel thin/small).
        muted: "#9AA0AD",
        accent: "#00D9A3",
        "accent-deep": "#06b08a",
        hairline: "rgba(245,242,236,0.10)",
        "hairline-dark": "rgba(14,16,20,0.12)",
      },
      fontFamily: {
        sans: ['"Inter Tight"', "Inter", "system-ui", "sans-serif"],
        serif: ['"Fraunces"', "Georgia", "serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        eyebrow: "0.12em",
      },
      maxWidth: {
        prose: "480px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [],
};
