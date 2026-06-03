// Real Softy LLC clients, grouped by sector for the homepage trust wall.
// `logo` is set true only once a clean, permitted logo file exists at
// /public/clients/<slug>.svg — otherwise the name renders as a typeset card.
//
// NOTE: public display of some clients (security agencies, banks, ministries)
// may require their consent / brand-usage approval. Keep here only the
// organisations Softy is authorised to show publicly.

export type ClientSector = "government" | "bank" | "telecom" | "enterprise";

export interface Client {
  name: string;
  sector: ClientSector;
  slug: string;
  logo?: boolean;
}

export const CLIENTS: Client[] = [
  // ── Davlat sektori ──
  { name: "Kadastr agentligi", sector: "government", slug: "kadastr" },
  { name: "Kiberxavfsizlik markazi", sector: "government", slug: "cybersec" },
  { name: "IIV", sector: "government", slug: "iiv" },
  { name: "O'zarxiv agentligi", sector: "government", slug: "ozarxiv" },
  { name: "Ekologiya vazirligi", sector: "government", slug: "ekologiya" },
  { name: "Transport vazirligi", sector: "government", slug: "transport" },
  { name: "Elektron auksionlar", sector: "government", slug: "auksion" },
  { name: "Digital Generation", sector: "government", slug: "digitalgen" },
  // ── Bank va moliya ──
  { name: "NBU", sector: "bank", slug: "nbu" },
  { name: "Asakabank", sector: "bank", slug: "asakabank" },
  { name: "Xalq banki", sector: "bank", slug: "xalqbank" },
  { name: "BRB", sector: "bank", slug: "brb" },
  // ── Telekom ──
  { name: "Beeline", sector: "telecom", slug: "beeline" },
  { name: "Ucell", sector: "telecom", slug: "ucell" },
  // ── Korxonalar ──
  { name: "SamAuto", sector: "enterprise", slug: "samauto" },
  { name: "BYD", sector: "enterprise", slug: "byd" },
];

export const SECTOR_ORDER: ClientSector[] = ["government", "bank", "telecom", "enterprise"];
