// Official vendor partners (Softy LLC is an authorised supplier/reseller).
// Logos render from /public/vendors/<slug>.<ext> (transparent). All 26 have
// real logos now (21 SVG + 5 PNG).
export type VendorCategory = "cloud" | "security" | "design" | "data" | "dev";

export interface Vendor {
  slug: string; // file at /vendors/<slug>.<ext>
  name: string; // accessible label / alt text
  category: VendorCategory;
  ext?: "svg" | "png"; // logo file extension (default: svg)
}

export const VENDORS: Vendor[] = [
  // ── Cloud & productivity ──
  { slug: "microsoft", name: "Microsoft", category: "cloud" },
  { slug: "googlecloud", name: "Google Cloud", category: "cloud" },
  { slug: "zoom", name: "Zoom", category: "cloud", ext: "png" },
  { slug: "bitrix24", name: "Bitrix24", category: "cloud" },
  { slug: "clickup", name: "ClickUp", category: "cloud" },
  // ── Design & engineering ──
  { slug: "adobe", name: "Adobe", category: "design" },
  { slug: "autodesk", name: "Autodesk", category: "design" },
  { slug: "nanocad", name: "nanoCAD", category: "design" },
  { slug: "lirafem", name: "LIRA-FEM", category: "design", ext: "png" },
  { slug: "ideastatica", name: "IDEA StatiCa", category: "design", ext: "png" },
  { slug: "indorsoft", name: "IndorSoft", category: "design" },
  // ── Cybersecurity ──
  { slug: "kaspersky", name: "Kaspersky", category: "security" },
  { slug: "bitdefender", name: "Bitdefender", category: "security", ext: "png" },
  { slug: "eset", name: "ESET", category: "security" },
  { slug: "drweb", name: "Dr.Web", category: "security" },
  { slug: "fortinet", name: "Fortinet", category: "security" },
  { slug: "paloaltonetworks", name: "Palo Alto Networks", category: "security" },
  { slug: "falcongaze", name: "Falcongaze", category: "security" },
  { slug: "vamsoft", name: "Vamsoft", category: "security", ext: "png" },
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
