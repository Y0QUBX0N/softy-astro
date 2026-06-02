import type { Lang, PageKey } from "./i18n";

export interface NavItem {
  key: Exclude<PageKey, "home">;
  slug: string;
}

// Header navigation (home is reached via the logo).
export const NAV_ITEMS: NavItem[] = [
  { key: "catalog", slug: "catalog" },
  { key: "services", slug: "services" },
  { key: "solutions", slug: "solutions" },
  { key: "coverage", slug: "coverage" },
  { key: "about", slug: "about" },
  { key: "contact", slug: "contact" },
];

export const PAGE_SLUGS: Record<PageKey, string> = {
  home: "",
  catalog: "catalog",
  services: "services",
  solutions: "solutions",
  coverage: "coverage",
  about: "about",
  contact: "contact",
};

export function pageUrl(lang: Lang, page: PageKey): string {
  const slug = PAGE_SLUGS[page];
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}
