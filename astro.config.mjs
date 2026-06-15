import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://softy.uz",
  trailingSlash: "always",
  // Hybrid: every page stays static (SSG). Only routes that opt out with
  // `export const prerender = false` (e.g. /api/contact) are server-rendered.
  output: "hybrid",
  adapter: node({ mode: "standalone" }),
  // Note: i18n routing is handled manually via [lang] dynamic paths +
  // getStaticPaths. Astro's built-in `i18n` block was removed because
  // @astrojs/sitemap 3.7 mishandles it in hybrid mode; nothing else needs it.
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    sitemap({
      // Exclude /api/, the 404, and the bare root "/" (which 302-redirects to
      // /ru/ — a redirect URL must not sit in the sitemap, or Search Console
      // flags it "redirect page, not indexed"). All locale homepages (/uz/,
      // /ru/, …) are real 200 pages and stay in.
      filter: (page) =>
        !page.includes("/api/") &&
        !page.endsWith("/404/") &&
        page !== "https://softy.uz/",
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
  // Hide the floating dev toolbar so the local preview reads like
  // the production site. (It never shipped to prod anyway.)
  devToolbar: { enabled: false },
});
