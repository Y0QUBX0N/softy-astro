// Real Softy LLC clients, grouped by sector. Logos live at
// /public/clients/<slug>.<ext> (transparent). All 16 have logos.
//
// NOTE: shown with the clients' permission.

export type ClientSector = "government" | "bank" | "telecom" | "enterprise";

export interface Client {
  name: string;
  sector: ClientSector;
  slug: string;
  ext?: "png" | "svg"; // logo file extension (default: png)
}

export const CLIENTS: Client[] = [
  // ── Davlat sektori ──
  { name: "Kadastr agentligi", sector: "government", slug: "kadastr" },
  { name: "Kiberxavfsizlik markazi", sector: "government", slug: "cybersec" },
  { name: "IIV", sector: "government", slug: "iiv" },
  { name: "O'zarxiv agentligi", sector: "government", slug: "ozarxiv" },
  { name: "Ekologiya vazirligi", sector: "government", slug: "ekologiya" },
  { name: "Transport vazirligi", sector: "government", slug: "transport", ext: "svg" },
  { name: "Elektron auksionlar", sector: "government", slug: "auksion", ext: "svg" },
  { name: "Digital Generation", sector: "government", slug: "digitalgen" },
  // ── Bank va moliya ──
  { name: "NBU", sector: "bank", slug: "nbu" },
  { name: "Asakabank", sector: "bank", slug: "asakabank" },
  { name: "Xalq banki", sector: "bank", slug: "xalqbank", ext: "svg" },
  { name: "BRB", sector: "bank", slug: "brb", ext: "svg" },
  // ── Telekom ──
  { name: "Beeline", sector: "telecom", slug: "beeline", ext: "svg" },
  { name: "Ucell", sector: "telecom", slug: "ucell", ext: "svg" },
  // ── Korxonalar ──
  { name: "SamAuto", sector: "enterprise", slug: "samauto" },
  { name: "BYD", sector: "enterprise", slug: "byd", ext: "svg" },
];

export const SECTOR_ORDER: ClientSector[] = ["government", "bank", "telecom", "enterprise"];
