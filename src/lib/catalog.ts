// Catalog: categories → products → product detail.
// Product copy is authored in Uzbek (the primary market language).
// Vendor logos live at /public/vendors/<vendor>.<ext> (svg or png).
import { VENDORS } from "./vendors";

export const CATEGORY_SLUGS = [
  "office",
  "antivirus",
  "design",
  "network-security",
  "backup-tools",
] as const;
export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export interface Category {
  slug: CategorySlug;
  /** i18n key under content.catalog.categories.{key}.{name|desc} */
  key: "office" | "antivirus" | "design" | "networkSecurity" | "backupTools";
  productSlugs: string[]; // mirrors PRODUCTS index for quick filtering
}

export interface Product {
  slug: string;          // URL slug + matches /vendors/<slug>.svg
  vendor: string;        // vendor display name
  name: string;          // product / product family name
  category: CategorySlug;
  tagline: string;       // one-line value prop (uz)
  summary: string;       // 2–3 sentences (uz)
  features: string[];    // 4–6 bullets (uz)
  os: string[];          // platform tags
  audience?: string;     // who it suits (uz)
}

export const PRODUCTS: Product[] = [
  /* ─────────────── OFFICE & COLLABORATION ─────────────── */
  {
    slug: "microsoft",
    vendor: "Microsoft",
    name: "Microsoft 365 & Office",
    category: "office",
    tagline: "Korporativ samaradorlik uchun jahon standarti — Word, Excel, Teams, Outlook va bulutli yechimlar.",
    summary:
      "Microsoft 365 — biznes uchun to'liq mahsuldorlik platformasi: hujjat va elektron jadval, video-konferensiya, korporativ pochta, OneDrive, SharePoint va Teams. Softy LLC korporativ litsenziyalarni vendordan to'g'ridan-to'g'ri yetkazib beradi, Azure AD bilan integratsiya qiladi va doimiy texnik yordam ko'rsatadi.",
    features: [
      "Office ilovalari: Word, Excel, PowerPoint, Outlook",
      "Microsoft Teams — kommunikatsiya va kollaboratsiya",
      "OneDrive va SharePoint bulutli xotira",
      "Korporativ pochta + Exchange Online",
      "Xavfsizlik markazi va Multi-Factor Auth",
      "Tashkilot bo'yicha admin boshqaruvi",
    ],
    os: ["Windows", "macOS", "iOS", "Android", "Web"],
    audience: "Biznes va davlat tashkilotlari, ta'lim muassasalari",
  },
  {
    slug: "adobe",
    vendor: "Adobe",
    name: "Adobe Creative Cloud",
    category: "office",
    tagline: "Photoshop, Illustrator, Premiere Pro va boshqa kreativ standartlar — bir obuna bilan.",
    summary:
      "Adobe Creative Cloud — dizayn, video, fotosurat va veb-ishlab chiqish uchun jahonning eng yetuk vositalar to'plami. Korporativ va o'quv litsenziyalarni rasmiy yetkazib beramiz, jamoa obunalarini boshqaramiz.",
    features: [
      "20+ kreativ ilova (Photoshop, Illustrator, Premiere, After Effects)",
      "Adobe Express + Firefly AI",
      "100GB bulutli xotira va Adobe Fonts",
      "Jamoa kutubxonalari (Creative Cloud Libraries)",
      "Korporativ va o'quv chegirmalari",
      "Adobe Stock integratsiyasi",
    ],
    os: ["Windows", "macOS", "iOS", "Android"],
    audience: "Dizayn studiyalari, marketing bo'limlari, video prodakshn jamoalari",
  },
  {
    slug: "bitrix24",
    vendor: "Bitrix24",
    name: "Bitrix24 CRM & Collaboration",
    category: "office",
    tagline: "Hammasi bir joyda: CRM, vazifalar, hujjatlar va kommunikatsiya — bir platforma.",
    summary:
      "Bitrix24 — savdo (CRM), loyiha boshqaruvi, kompaniya portali, ichki kommunikatsiya va hujjat aylanishini bir platformada birlashtiradi. Bulutli yoki o'z serverda joylashtirish (on-premise) mumkin. Softy yetkazadi, sozlaydi va biznes jarayonlariga moslaydi.",
    features: [
      "CRM va savdo voronkasi",
      "Loyiha va vazifa boshqaruvi (Kanban, Gantt)",
      "Korporativ portal va ichki chat",
      "Hujjat aylanishi va imzo",
      "Saytlar va onlayn-do'kon konstruktori",
      "Bulutli yoki on-premise joylashuv",
    ],
    os: ["Web", "Windows", "macOS", "iOS", "Android"],
    audience: "O'sayotgan kompaniyalar, savdo va marketing jamoalari",
  },
  {
    slug: "zoom",
    vendor: "Zoom",
    name: "Zoom Workplace",
    category: "office",
    tagline: "Video uchrashuvlar, telefoniya, chat va onlayn-konferensiyalar uchun jahon yetakchisi.",
    summary:
      "Zoom Workplace — masofadan va hibrid jamoalar uchun yagona kommunikatsiya platformasi: HD video uchrashuvlar, Zoom Phone bulutli telefoniya, Zoom Team Chat, vebinar va Zoom Rooms. Softy LLC Zoomning rasmiy hamkori sifatida korporativ litsenziyalarni rasmiylashtiradi, Microsoft 365 / Google Workspace bilan integratsiya qiladi va sozlash bo'yicha yordam beradi.",
    features: [
      "HD video uchrashuvlar (1000+ ishtirokchi)",
      "Zoom Phone — bulutli korporativ telefoniya",
      "Zoom Team Chat va Whiteboard",
      "Vebinar va Events (Webinar / Sessions)",
      "Zoom Rooms — yig'ilishlar zali jihozi",
      "AI Companion (xulosa va matn) — qo'shimcha",
    ],
    os: ["Windows", "macOS", "Linux", "iOS", "Android", "Web"],
    audience: "Korporativ jamoalar, ta'lim, sog'liqni saqlash, davlat sektori",
  },
  {
    slug: "clickup",
    vendor: "ClickUp",
    name: "ClickUp",
    category: "office",
    tagline: "Bitta ilova — vazifalar, hujjatlar, jadval va maqsadlar uchun.",
    summary:
      "ClickUp — moslashuvchan loyiha boshqaruvi platformasi. Jamoa o'z biznes-jarayonlarini moslashtirilgan ko'rinishlarda (List, Board, Calendar, Timeline) tashkil etadi. Biz korporativ obunalarni rasmiylashtiramiz va onboarding o'tkazamiz.",
    features: [
      "Vazifalar, kichik vazifalar va bog'liqliklar",
      "Kanban, Gantt, ro'yxat va kalendar ko'rinishlari",
      "Maqsadlar (OKR) va vaqt nazorati",
      "Docs va Whiteboards",
      "Avtomatlashtirish (no-code)",
      "1000+ integratsiya",
    ],
    os: ["Web", "Windows", "macOS", "iOS", "Android"],
    audience: "Texnologik startaplar, marketing va mahsulot jamoalari",
  },

  /* ─────────────── ANTIVIRUS & ENDPOINT ─────────────── */
  {
    slug: "kaspersky",
    vendor: "Kaspersky",
    name: "Kaspersky Endpoint Security",
    category: "antivirus",
    tagline: "Endpoint xavfsizligi bo'yicha jahon yetakchisi — biznes uchun ko'p qatlamli himoya.",
    summary:
      "Kaspersky Endpoint Security for Business — kompaniya tarmog'i, server va xodimlar ish stantsiyalari uchun professional darajadagi himoya. Markazlashgan boshqaruv konsoli, mashina o'rganishga asoslangan tahdidlarni aniqlash va EDR imkoniyatlari.",
    features: [
      "Zararli dasturlardan ko'p qatlamli himoya",
      "Markazlashgan konsol (Security Center)",
      "Endpoint Detection & Response (EDR)",
      "Xavfsiz veb-shlyuz va elektron pochta filtri",
      "Mobil qurilmalarni boshqarish (MDM)",
      "Anti-ransomware va eksploit himoyasi",
    ],
    os: ["Windows", "macOS", "Linux", "iOS", "Android"],
    audience: "O'rta va yirik biznes, davlat tashkilotlari",
  },
  {
    slug: "bitdefender",
    vendor: "Bitdefender",
    name: "Bitdefender GravityZone",
    category: "antivirus",
    tagline: "Mustaqil testlarda eng yuqori aniqlik darajasiga ega bo'lgan endpoint himoya.",
    summary:
      "Bitdefender GravityZone — AV-TEST va AV-Comparatives reytinglarida doimo birinchilar qatorida turuvchi yechim. Yengil agent, kuchli mashina o'rganish va minimal tizim yuklamasi. Servis, server va shaxsiy kompyuterlarni qamrab oladi.",
    features: [
      "AI/ML asosida 0-day tahdidlarni aniqlash",
      "Ransomware Remediation (avtomatik tiklash)",
      "Network Attack Defense",
      "Konteyner va Cloud Workload himoyasi",
      "Patch Management",
      "Email va veb himoyasi",
    ],
    os: ["Windows", "macOS", "Linux", "iOS", "Android"],
    audience: "SMB va korporativ mijozlar",
  },
  {
    slug: "eset",
    vendor: "ESET",
    name: "ESET PROTECT",
    category: "antivirus",
    tagline: "Yengil agent, kuchli himoya — 30+ yillik kiberxavfsizlik ekspertizasi.",
    summary:
      "ESET PROTECT — Slovakiyaning yetakchi kiberxavfsizlik kompaniyasidan biznes uchun yagona xavfsizlik platformasi. Bulutli yoki on-premise konsol, EDR/XDR va sirli ma'lumotlarni shifrlash modullari mavjud.",
    features: [
      "ESET LiveGuard (sandboxing) tahdid tahlili",
      "Endpoint Detection & Response (EDR)",
      "Full Disk Encryption modul",
      "Email va veb himoyasi",
      "Bulutli yoki on-premise boshqaruv konsoli",
      "Eng past tizim yuklamalaridan biri",
    ],
    os: ["Windows", "macOS", "Linux", "iOS", "Android"],
    audience: "SMB, sog'liqni saqlash, ta'lim, davlat sektori",
  },
  {
    slug: "drweb",
    vendor: "Dr.Web",
    name: "Dr.Web Enterprise Security Suite",
    category: "antivirus",
    tagline: "MDH bozorida sinovdan o'tgan, sertifikatlangan ko'p qatlamli antivirus himoyasi.",
    summary:
      "Dr.Web Enterprise Security Suite — server, ish stansiyalari va mobil qurilmalar uchun markazlashgan antivirus himoyasi. Proaktiv texnologiyalar, kichik tizim yuklamasi va MDH normativlariga muvofiqligi bilan ajralib turadi.",
    features: [
      "Ko'p qatlamli antivirus va anti-ransomware himoyasi",
      "Markazlashgan boshqaruv (Control Center)",
      "Dr.Web Preventive Protection (proaktiv himoya)",
      "Email va veb-trafik filtri",
      "Server, ish stansiyasi va mobil qurilmalar",
      "MDH normativlari va sertifikatlari",
    ],
    os: ["Windows", "macOS", "Linux", "Android"],
    audience: "Davlat tashkilotlari, biznes, MDH bozori mijozlari",
  },

  /* ─────────────── DESIGN & ENGINEERING ─────────────── */
  {
    slug: "autodesk",
    vendor: "Autodesk",
    name: "Autodesk AutoCAD, Revit, Inventor",
    category: "design",
    tagline: "Loyihalash, BIM, mexanika va animatsiya bo'yicha sanoat standarti.",
    summary:
      "Autodesk yechimlari — qurilish, mashinasozlik, geodeziya va kreativ industriyalar uchun. AutoCAD (2D/3D), Revit (BIM), Inventor (mexanika), 3ds Max va Maya (vizualizatsiya, animatsiya). Korporativ va o'quv litsenziyalari mavjud.",
    features: [
      "AutoCAD — 2D/3D loyihalash",
      "Revit — BIM va arxitektura",
      "Inventor — mashinasozlik konstruksiyalari",
      "3ds Max, Maya — vizualizatsiya va animatsiya",
      "Civil 3D — yo'l va infratuzilma loyihalashi",
      "Bulutli hamkorlik (BIM 360, Autodesk Construction Cloud)",
    ],
    os: ["Windows", "macOS"],
    audience: "Arxitekturaviy byurolar, qurilish, mashinasozlik kompaniyalari",
  },
  {
    slug: "ideastatica",
    vendor: "IDEA StatiCa",
    name: "IDEA StatiCa Connection & Member",
    category: "design",
    tagline: "Po'lat va beton tugunlarini sekundlar ichida loyihalash va tekshirish.",
    summary:
      "IDEA StatiCa — strukturaviy injenerlar uchun ixtisoslashgan dasturiy ta'minot. Po'lat va beton tugunlar (connections), payvandlar, anker boltlari va a'zolarni Eurocode/AISC/CSA standartlariga muvofiq tahlil qiladi.",
    features: [
      "Po'lat tugun va payvandlarini tahlil qilish",
      "Beton tugun va detallarni loyihalash",
      "Eurocode, AISC, AS, SP, CSA standartlari",
      "Revit, Tekla, Advance Steel bilan integratsiya",
      "BIM modeldan to'g'ridan-to'g'ri eksport",
      "Avtomatik chizmalar va hisobot",
    ],
    os: ["Windows"],
    audience: "Strukturaviy injenerlar, qurilish loyihalash byurolari",
  },
  {
    slug: "indorsoft",
    vendor: "ИндорСофт",
    name: "ИндорСофт IndorCAD",
    category: "design",
    tagline: "Yo'l va infratuzilma loyihalash uchun MDH bozorida ishonchli yechim.",
    summary:
      "ИндорСофт mahsulotlari (IndorCAD, IndorRoad, IndorTrafficPro) — yo'l, ko'cha, tramvay yo'llari va shahar infratuzilmasini loyihalash uchun. MDH normativlariga to'liq mos keladi (GOST, SP, ShNK).",
    features: [
      "IndorCAD — yo'l va ko'cha loyihalash",
      "IndorRoad — kapital ta'mir loyihalari",
      "IndorTrafficPro — yo'l harakati modellashtirish",
      "MDH normativlari va standartlari",
      "AutoCAD bilan to'liq muvofiqlik",
      "GIS va geodeziya integratsiyasi",
    ],
    os: ["Windows"],
    audience: "Yo'l qurilishi tashkilotlari, transport rejalashtirish",
  },

  /* ─────────────── NETWORK & SECURITY ─────────────── */
  {
    slug: "fortinet",
    vendor: "Fortinet",
    name: "FortiGate Next-Gen Firewall",
    category: "network-security",
    tagline: "Gartner Magic Quadrant Leader — tarmoq xavfsizligi bo'yicha jahon yetakchisi.",
    summary:
      "Fortinet FortiGate — Next-Generation Firewall (NGFW), SD-WAN va xavfsiz Wi-Fi. Maxsus SoC4/SoC5 chiplari hisobiga eng yuqori unumdorlik. Markazlashgan boshqaruv FortiManager va FortiAnalyzer orqali.",
    features: [
      "Next-Gen Firewall (NGFW) + IPS",
      "SD-WAN va SASE",
      "FortiSwitch + FortiAP (xavfsiz Wi-Fi)",
      "FortiManager markazlashgan boshqaruv",
      "Zero Trust Network Access",
      "Threat Intelligence (FortiGuard Labs)",
    ],
    os: ["Hardware appliance", "Virtual", "Cloud"],
    audience: "Korporativ tarmoqlar, ISP, davlat tashkilotlari",
  },
  {
    slug: "paloaltonetworks",
    vendor: "Palo Alto Networks",
    name: "Palo Alto NGFW & Prisma",
    category: "network-security",
    tagline: "Kiberxavfsizlik bo'yicha eng innovatsion kompaniyalardan biri.",
    summary:
      "Palo Alto Networks — Next-Gen Firewall (PA-Series), bulutli xavfsizlik (Prisma Cloud), SASE (Prisma Access) va XDR (Cortex) yechimlari. App-ID texnologiyasi minglab ilovalarni aniq tasniflaydi.",
    features: [
      "PAN-OS asosida NGFW",
      "App-ID, User-ID, Content-ID texnologiyalari",
      "Prisma Cloud — bulut xavfsizligi",
      "Prisma Access — SASE",
      "Cortex XDR/XSIAM — kengaytirilgan tahlil",
      "WildFire — bulutli sandbox",
    ],
    os: ["Hardware appliance", "Virtual", "Cloud-native"],
    audience: "Yirik korporativ va xalqaro kompaniyalar",
  },
  {
    slug: "falcongaze",
    vendor: "Falcongaze",
    name: "SecureTower DLP",
    category: "network-security",
    tagline: "Korporativ ma'lumotlar sizib chiqishining oldini olish — DLP yechimi.",
    summary:
      "Falcongaze SecureTower — Data Loss Prevention (DLP) tizimi. Email, messenger, USB, bulut xizmatlari va chop etishni nazorat qiladi. Ichki tahdidlarni aniqlaydi va xodimlar faoliyatini hisobotlaydi.",
    features: [
      "Email, IM, ijtimoiy tarmoq nazorati",
      "USB, printer va bulutli xizmatlar",
      "Skrinshot va klavyatura tarixi",
      "Ichki tahdid analitikasi (UEBA)",
      "Avtomatik bloklash va ogohlantirish",
      "Hisobot va auditing",
    ],
    os: ["Windows Server", "Endpoint agents"],
    audience: "Moliya, sog'liq, davlat va konfidensial ma'lumotlar bilan ishlovchi tashkilotlar",
  },
  {
    slug: "gfi",
    vendor: "GFI Software",
    name: "GFI KerioControl & Mail",
    category: "network-security",
    tagline: "SMB uchun arzon va qulay tarmoq xavfsizligi va pochta serveri.",
    summary:
      "GFI Software portfolio — KerioControl (UTM firewall), KerioConnect (pochta serveri), LanGuard (zaifliklar skanyer) va Archiver. Kichik va o'rta biznes uchun optimallashtirilgan, qulay narxlarda.",
    features: [
      "KerioControl — UTM firewall + VPN",
      "KerioConnect — korporativ pochta serveri",
      "LanGuard — zaifliklar skaneri va patch",
      "Archiver — pochta arxivlash",
      "Tez o'rnatish, qulay interfeys",
      "SMB uchun moslangan litsenziyalash",
    ],
    os: ["Windows", "Linux", "Virtual appliance"],
    audience: "Kichik va o'rta biznes (SMB)",
  },
  {
    slug: "ssl",
    vendor: "SSL Certificates",
    name: "SSL/TLS sertifikatlari",
    category: "network-security",
    tagline: "DigiCert, Sectigo, GlobalSign — rasmiy SSL/TLS sertifikatlari.",
    summary:
      "Saytingiz va xizmatlaringizning xavfsizligi uchun rasmiy SSL/TLS sertifikatlari. DV (Domain Validated), OV (Organization Validated) va EV (Extended Validation) variantlari. Wildcard va Multi-Domain (SAN) sertifikatlar.",
    features: [
      "Single, Wildcard va Multi-Domain (SAN)",
      "DV, OV, EV validatsiya darajalari",
      "DigiCert, Sectigo, GlobalSign sertifikatlari",
      "Code Signing sertifikatlari",
      "$1.75M+ kafolat",
      "O'rnatish va konfiguratsiya yordami",
    ],
    os: ["Universal", "Any server"],
    audience: "Veb-saytlar, e-commerce, davlat portallar, korporativ tizimlar",
  },

  /* ─────────────── BACKUP & TOOLS ─────────────── */
  {
    slug: "veeam",
    vendor: "Veeam",
    name: "Veeam Backup & Replication",
    category: "backup-tools",
    tagline: "Zaxira va tiklash bo'yicha #1 yechim — Gartner reytinglari bo'yicha yetakchi.",
    summary:
      "Veeam Backup & Replication — virtualizatsiya, fizik server, NAS va bulutli (AWS, Azure, GCP, Microsoft 365) ish yuklarini zaxiralash uchun yetakchi platforma. Tezkor tiklash, ransomware-proof zaxiralar va immutable repository.",
    features: [
      "VMware, Hyper-V, Nutanix AHV zaxiralash",
      "Microsoft 365 (Exchange, OneDrive, SharePoint, Teams)",
      "Fizik server va workstation",
      "Bulutli ish yuklari (AWS, Azure, GCP)",
      "Instant Recovery — daqiqalarda tiklash",
      "Immutable backup (ransomware himoyasi)",
    ],
    os: ["Windows", "Linux server"],
    audience: "Korporativ IT, data center, MSP",
  },
  {
    slug: "ibm",
    vendor: "IBM",
    name: "IBM Spectrum & Cloud",
    category: "backup-tools",
    tagline: "Yirik korxonalar uchun korporativ infratuzilma va dasturiy ta'minot.",
    summary:
      "IBM yechimlari — IBM Spectrum Protect (zaxira), IBM Cloud Pak (konteyner platformasi), IBM Db2 (ma'lumotlar bazasi), IBM Watson (AI). Yirik biznes uchun mukammal mustahkamlik va kengayuvchanlik.",
    features: [
      "IBM Spectrum Protect — korporativ zaxira",
      "IBM Cloud Pak — Red Hat OpenShift asosida",
      "Db2 — ma'lumotlar bazasi",
      "IBM Watson — AI platformasi",
      "Hybrid Cloud strategiya",
      "Mainframe va Power Systems qo'llab-quvvatlash",
    ],
    os: ["Windows", "Linux", "AIX", "Cloud"],
    audience: "Yirik korporativ va davlat tashkilotlari",
  },
  {
    slug: "jetbrains",
    vendor: "JetBrains",
    name: "JetBrains IDE va vositalar",
    category: "backup-tools",
    tagline: "IntelliJ IDEA, PyCharm, WebStorm — dasturchilar uchun sanoat standarti.",
    summary:
      "JetBrains IDE'lari — har bir til uchun maxsus IDE: IntelliJ IDEA (Java/Kotlin), PyCharm (Python), WebStorm (JS/TS), Rider (.NET), GoLand, PhpStorm. JetBrains AI Assistant integratsiyasi va jamoa litsenziyalari.",
    features: [
      "IntelliJ IDEA, PyCharm, WebStorm, Rider",
      "GoLand, PhpStorm, RubyMine, CLion",
      "Kotlin va JetBrains AI Assistant",
      "TeamCity — CI/CD",
      "YouTrack — bug tracking",
      "Korporativ va o'quv litsenziyalari",
    ],
    os: ["Windows", "macOS", "Linux"],
    audience: "Dasturchilar, dasturlash jamoalari, IT-ta'lim muassasalari",
  },
  {
    slug: "passware",
    vendor: "Passware",
    name: "Passware Kit Forensic",
    category: "backup-tools",
    tagline: "Parollarni tiklash va digital forensic uchun professional vositalar.",
    summary:
      "Passware Kit — kompyuter forensikasi va parollarni tiklash sohasida yetakchi yechim. 340+ fayl turlari uchun parol tiklash, FileVault, BitLocker, TrueCrypt disklarini ochish, mobil qurilmalarni tahlil qilish.",
    features: [
      "340+ fayl turlari uchun parol tiklash",
      "FileVault, BitLocker, VeraCrypt deshifratsiya",
      "GPU va distributed parol qidirish",
      "iOS va Android mobil forenzika",
      "Memory tahlili (RAM dump)",
      "Cloud Backup tahlili",
    ],
    os: ["Windows"],
    audience: "IT xavfsizlik, huquq-tartibot organlari, forensic ekspertlar",
  },
  {
    slug: "myq",
    vendor: "MyQ",
    name: "MyQ Print Management",
    category: "backup-tools",
    tagline: "Chop etish, skanerlash va xarajatlarni nazorat qilish — bir platforma.",
    summary:
      "MyQ Solution — korporativ chop etish boshqaruvi tizimi. Printerlar va MFP'larni markazlashgan nazorat, foydalanuvchi autentifikatsiyasi (karta, PIN), chop etish hisoboti va xarajatlarni optimallashtirish.",
    features: [
      "Markazlashgan printer boshqaruvi",
      "Foydalanuvchi autentifikatsiyasi (karta, PIN, mobil)",
      "Chop etish hisoboti va xarajat",
      "Pull printing — xavfsiz chop etish",
      "OCR va workflow avtomatlashtirish",
      "Mobil chop etish (BYOD)",
    ],
    os: ["Windows server"],
    audience: "Yirik ofislar, davlat va ta'lim muassasalari",
  },
];

export const CATEGORIES: Category[] = [
  { slug: "office",           key: "office",           productSlugs: PRODUCTS.filter(p => p.category === "office").map(p => p.slug) },
  { slug: "antivirus",        key: "antivirus",        productSlugs: PRODUCTS.filter(p => p.category === "antivirus").map(p => p.slug) },
  { slug: "design",           key: "design",           productSlugs: PRODUCTS.filter(p => p.category === "design").map(p => p.slug) },
  { slug: "network-security", key: "networkSecurity",  productSlugs: PRODUCTS.filter(p => p.category === "network-security").map(p => p.slug) },
  { slug: "backup-tools",     key: "backupTools",      productSlugs: PRODUCTS.filter(p => p.category === "backup-tools").map(p => p.slug) },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function productsByCategory(slug: CategorySlug): Product[] {
  return PRODUCTS.filter(p => p.category === slug);
}

// Vendor logo path with the right extension (most are svg, a few are png).
const VENDOR_EXT = new Map(VENDORS.map((v) => [v.slug, v.ext ?? "svg"]));
export function productLogo(slug: string): string {
  return `/vendors/${slug}.${VENDOR_EXT.get(slug) ?? "svg"}`;
}
