// Official vendor partners — rendered as real logos (public/vendors/<slug>.svg).
// Order roughly matches the legacy softy.uz/our-services grid.
export interface Vendor {
  slug: string; // file at /vendors/<slug>.svg
  name: string; // accessible label / alt text
}

export const VENDORS: Vendor[] = [
  { slug: "microsoft", name: "Microsoft" },
  { slug: "zoom", name: "Zoom" },
  { slug: "adobe", name: "Adobe" },
  { slug: "autodesk", name: "Autodesk" },
  { slug: "kaspersky", name: "Kaspersky" },
  { slug: "bitdefender", name: "Bitdefender" },
  { slug: "eset", name: "ESET" },
  { slug: "veeam", name: "Veeam" },
  { slug: "fortinet", name: "Fortinet" },
  { slug: "paloaltonetworks", name: "Palo Alto Networks" },
  { slug: "ibm", name: "IBM" },
  { slug: "jetbrains", name: "JetBrains" },
  { slug: "clickup", name: "ClickUp" },
  { slug: "bitrix24", name: "Bitrix24" },
  { slug: "gfi", name: "GFI Software" },
  { slug: "falcongaze", name: "Falcongaze" },
  { slug: "passware", name: "Passware" },
  { slug: "myq", name: "MyQ" },
  { slug: "ideastatica", name: "IDEA StatiCa" },
  { slug: "indorsoft", name: "IndorSoft" },
  { slug: "ssl", name: "SSL Certificates" },
];
