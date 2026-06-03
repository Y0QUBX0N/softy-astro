// Official vendor partners (Softy LLC is an authorised supplier/reseller).
// Logos render from /public/vendors/<slug>.svg. When a clean logo file is not
// yet available, set `logo: false` and a typeset wordmark is shown instead —
// never a broken image.
export type VendorCategory = "cloud" | "security" | "design" | "data" | "dev";

export interface Vendor {
  slug: string; // file at /vendors/<slug>.svg
  name: string; // accessible label / alt text / wordmark fallback
  category: VendorCategory;
  logo?: boolean; // false → render the name as a wordmark (no logo file yet)
}

export const VENDORS: Vendor[] = [
  // ── Cloud & productivity ──
  { slug: "microsoft", name: "Microsoft", category: "cloud" },
  { slug: "googlecloud", name: "Google Cloud", category: "cloud" },
  { slug: "zoom", name: "Zoom", category: "cloud" },
  { slug: "bitrix24", name: "Bitrix24", category: "cloud" },
  { slug: "clickup", name: "ClickUp", category: "cloud" },
  // ── Design & engineering ──
  { slug: "adobe", name: "Adobe", category: "design" },
  { slug: "autodesk", name: "Autodesk", category: "design" },
  { slug: "nanocad", name: "nanoCAD", category: "design", logo: false },
  { slug: "lirafem", name: "LIRA-FEM", category: "design", logo: false },
  { slug: "ideastatica", name: "IDEA StatiCa", category: "design" },
  { slug: "indorsoft", name: "IndorSoft", category: "design" },
  // ── Cybersecurity ──
  { slug: "kaspersky", name: "Kaspersky", category: "security" },
  { slug: "bitdefender", name: "Bitdefender", category: "security" },
  { slug: "eset", name: "ESET", category: "security" },
  { slug: "drweb", name: "Dr.Web", category: "security", logo: false },
  { slug: "fortinet", name: "Fortinet", category: "security" },
  { slug: "paloaltonetworks", name: "Palo Alto Networks", category: "security" },
  { slug: "falcongaze", name: "Falcongaze", category: "security" },
  { slug: "vamsoft", name: "Vamsoft", category: "security", logo: false },
  { slug: "gfi", name: "GFI Software", category: "security" },
  { slug: "ssl", name: "SSL Certificates", category: "security" },
  // ── Data, backup & infrastructure ──
  { slug: "veeam", name: "Veeam", category: "data" },
  { slug: "ibm", name: "IBM", category: "data" },
  // ── Developer & specialist tools ──
  { slug: "jetbrains", name: "JetBrains", category: "dev" },
  { slug: "passware", name: "Passware", category: "dev" },
  { slug: "myq", name: "MyQ", category: "dev" },
];
