// Real Softy LLC clients, grouped by sector. Logos live at
// /public/clients/<slug>.png (transparent). `logo: false` → no file yet, the
// name renders as a typeset wordmark instead of a broken image.
//
// NOTE: public display of some clients (security agencies, banks, ministries)
// is shown with the client's permission.

export type ClientSector = "government" | "bank" | "telecom" | "enterprise";

export interface Client {
  name: string;
  sector: ClientSector;
  slug: string;
  logo?: boolean;
}

export const CLIENTS: Client[] = [
  // ── Davlat sektori ──
  { name: "Kadastr agentligi", sector: "government", slug: "kadastr", logo: true },
  { name: "Kiberxavfsizlik markazi", sector: "government", slug: "cybersec", logo: true },
  { name: "IIV", sector: "government", slug: "iiv", logo: true },
  { name: "O'zarxiv agentligi", sector: "government", slug: "ozarxiv", logo: true },
  { name: "Ekologiya vazirligi", sector: "government", slug: "ekologiya", logo: true },
  { name: "Transport vazirligi", sector: "government", slug: "transport", logo: true },
  { name: "Elektron auksionlar", sector: "government", slug: "auksion" },
  { name: "Digital Generation", sector: "government", slug: "digitalgen", logo: true },
  // ── Bank va moliya ──
  { name: "NBU", sector: "bank", slug: "nbu", logo: true },
  { name: "Asakabank", sector: "bank", slug: "asakabank", logo: true },
  { name: "Xalq banki", sector: "bank", slug: "xalqbank", logo: true },
  { name: "BRB", sector: "bank", slug: "brb", logo: true },
  // ── Telekom ──
  { name: "Beeline", sector: "telecom", slug: "beeline", logo: true },
  { name: "Ucell", sector: "telecom", slug: "ucell", logo: true },
  // ── Korxonalar ──
  { name: "SamAuto", sector: "enterprise", slug: "samauto", logo: true },
  { name: "BYD", sector: "enterprise", slug: "byd", logo: true },
];

export const SECTOR_ORDER: ClientSector[] = ["government", "bank", "telecom", "enterprise"];
