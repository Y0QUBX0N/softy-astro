export const LANGS = ["uz", "ru", "en", "kk", "ky", "tg"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "uz";

export const LANG_META: Record<Lang, { label: string; native: string; flag: string; dir: "ltr" }> = {
  uz: { label: "O'zbekcha", native: "O'zbekcha", flag: "🇺🇿", dir: "ltr" },
  ru: { label: "Русский", native: "Русский", flag: "🇷🇺", dir: "ltr" },
  en: { label: "English", native: "English", flag: "🇬🇧", dir: "ltr" },
  kk: { label: "Қазақша", native: "Қазақша", flag: "🇰🇿", dir: "ltr" },
  ky: { label: "Кыргызча", native: "Кыргызча", flag: "🇰🇬", dir: "ltr" },
  tg: { label: "Тоҷикӣ", native: "Тоҷикӣ", flag: "🇹🇯", dir: "ltr" },
};

export type PageKey = "home" | "services" | "solutions" | "catalog" | "coverage" | "about" | "contact";

export interface Pillar {
  num: string;
  title: string;
  desc: string;
  bullets: [string, string, string];
}
export interface Step {
  num: string;
  title: string;
  desc: string;
}
export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}
export interface EngagementModel {
  name: string;
  desc: string;
  features: string[];
  cta: string;
  tag?: string;
  highlight?: boolean;
}
export interface Country {
  name: string;
  note: string;
}
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}
export interface Faq {
  q: string;
  a: string;
}

export interface Content {
  meta: { title: string; description: string };
  pageMeta: Record<PageKey, { title: string; description: string }>;
  common: { learnMore: string; allServices: string };
  nav: { services: string; solutions: string; catalog: string; coverage: string; about: string; contact: string; cta: string; language: string };
  hero: { eyebrow: string; titleA: string; titleAccent: string; lead: string; ctaPrimary: string; ctaSecondary: string; trust: [string, string, string] };
  vendors: { label: string };
  partners: { eyebrow: string; title: string; sub: string; showAll: string; showLess: string };
  catalog: {
    eyebrow: string;
    title: string;
    sub: string;
    allCategories: string;
    productsLabel: string;
    featuresLabel: string;
    osLabel: string;
    audienceLabel: string;
    ctaQuote: string;
    ctaBack: string;
    partnerOf: string;
    vendorLabel: string;
    productCount: (n: number) => string;
    categories: {
      office: { name: string; desc: string };
      antivirus: { name: string; desc: string };
      design: { name: string; desc: string };
      networkSecurity: { name: string; desc: string };
      backupTools: { name: string; desc: string };
    };
  };
  team?: { eyebrow: string; title: string; members: { name: string; role: string; bio: string }[] };
  values?: { eyebrow: string; title: string; items: { title: string; desc: string }[] };
  problem: { eyebrow: string; title: string; figure: string; figureCaption: string; sub: string };
  pillars: { eyebrow: string; title: string; items: [Pillar, Pillar, Pillar] };
  process: { eyebrow: string; title: string; sub: string; steps: [Step, Step, Step, Step] };
  stats: { eyebrow: string; items: [Stat, Stat, Stat, Stat] };
  engagement: { eyebrow: string; title: string; sub: string; customLabel: string; note: string; models: [EngagementModel, EngagementModel, EngagementModel] };
  coverage: { eyebrow: string; title: string; sub: string; note: string; statLabel: string; countries: Country[] };
  about: { eyebrow: string; title: string; lead: string; body: string[] };
  testimonials: { eyebrow: string; title: string; items: Testimonial[] };
  faq: { eyebrow: string; title: string; items: Faq[] };
  finalCta: { title: string; sub: string; call: string; telegram: string };
  contact: { eyebrow: string; title: string; sub: string; phoneLabel: string; emailLabel: string; tgLabel: string; addrLabel: string; address: string; hours: string; hoursLabel: string; form: { name: string; namePh: string; phone: string; phonePh: string; email: string; emailPh: string; message: string; messagePh: string; submit: string; sending: string; success: string; error: string } };
  footer: { tagline: string; servicesCol: string; companyCol: string; contactCol: string; rights: string };
}

/* ── UZBEK (default) ───────────────────────────────────────── */
const uz: Content = {
  meta: {
    title: "Softy LLC — Rasmiy IT-Integrator | Litsenziyalar MDH bo'ylab",
    description:
      "Barcha operatsion tizimlar uchun rasmiy litsenziyalangan dasturlar, obuna boshqaruvi, o'rnatish va 24/7 texnik yordam. 200+ mijoz. 92% qaytish. Bepul audit oling.",
  },
  pageMeta: {
    home: {
      title: "Softy LLC — Rasmiy IT-Integrator | Litsenziyalar MDH bo'ylab",
      description: "Vendorlardan to'g'ridan-to'g'ri rasmiy dasturiy litsenziyalar, obuna boshqaruvi, o'rnatish va 24/7 yordam. 200+ mijoz, 92% qaytish. Bepul audit oling.",
    },
    services: {
      title: "Xizmatlar — Litsenziya, obuna, o'rnatish | Softy LLC",
      description: "Rasmiy dasturiy litsenziyalar, obunalarni boshqarish, o'rnatish va 24/7 texnik yordam — vendorlardan to'g'ridan-to'g'ri, butun MDH bo'ylab.",
    },
    solutions: {
      title: "Yechimlar — Qanday ishlaymiz | Softy LLC",
      description: "So'rovdan auditgacha, yetkazib berishdan doimiy yordamgacha — Softy'ning isbotlangan, shaffof 4 bosqichli hamkorlik jarayoni.",
    },
    catalog: {
      title: "Katalog — 20+ vendor mahsulotlari | Softy LLC",
      description: "Microsoft, Adobe, Kaspersky, Autodesk, Veeam, Fortinet va boshqa rasmiy vendor mahsulotlari kategoriyalar bo'yicha — antivirus, ofis, dizayn, tarmoq xavfsizligi, zaxira.",
    },
    coverage: {
      title: "MDH qamrovi — 9+ davlat | Softy LLC",
      description: "O'zbekiston, Qozog'iston, Qirg'iziston va boshqa MDH davlatlarida litsenziya, o'rnatish va 24/7 texnik yordam — bir xil sifatda.",
    },
    about: {
      title: "Biz haqimizda — IT-integrator | Softy LLC",
      description: "Softy LLC — rasmiy IT-integrator. 200+ mijoz, 92% qaytish, 9+ davlat. Vendorlardan to'g'ridan-to'g'ri litsenziya, obuna va xizmat.",
    },
    contact: {
      title: "Aloqa — Bepul audit oling | Softy LLC",
      description: "Bepul audit oling — 24 soat ichida javob beramiz. Telefon, Telegram yoki forma orqali bog'laning. Toshkent, MDH bo'ylab.",
    },
  },
  common: { learnMore: "Batafsil", allServices: "Barcha xizmatlar" },
  nav: { services: "Xizmatlar", solutions: "Yechimlar", catalog: "Katalog", coverage: "MDH qamrovi", about: "Biz haqimizda", contact: "Aloqa", cta: "Bepul audit", language: "Til" },
  hero: {
    eyebrow: "Rasmiy IT-Integrator · MDH bo'ylab",
    titleA: "Biznesingiz uchun",
    titleAccent: "to'liq IT-yechimlar.",
    lead: "Bulutli xizmatlar va kiberxavfsizlikdan muhandislik dasturlarigacha — yetakchi jahon vendorlarining rasmiy litsenziyalari. Joriy etamiz va qo'llab-quvvatlaymiz.",
    ctaPrimary: "Bepul audit oling",
    ctaSecondary: "Hamkorlarni ko'rish",
    trust: ["200+ kompaniya bizga ishonadi", "9 davlat", "24/7 yordam"],
  },
  vendors: { label: "Rasmiy hamkorlik — yetakchi vendorlar bilan to'g'ridan-to'g'ri" },
  partners: { eyebrow: "Hamkorlar", title: "Rasmiy vendor hamkorlarimiz", sub: "Yetakchi xalqaro vendorlar bilan to'g'ridan-to'g'ri hamkorlik — har bir litsenziya kafolatlangan va rasmiy.", showAll: "Barcha vendorlarni ko'rsatish", showLess: "Yig'ish" },
  catalog: {
    eyebrow: "Katalog",
    title: "Dasturiy ta'minot mahsulotlari",
    sub: "20+ rasmiy vendor mahsulotlari kategoriyalar bo'yicha — antivirus, ofis, dizayn, tarmoq xavfsizligi va boshqalar.",
    allCategories: "Barcha kategoriyalar",
    productsLabel: "Mahsulotlar",
    featuresLabel: "Asosiy imkoniyatlar",
    osLabel: "Platformalar",
    audienceLabel: "Kim uchun",
    ctaQuote: "Narx so'rash",
    ctaBack: "Katalogga qaytish",
    partnerOf: "Softy LLC — rasmiy hamkor",
    vendorLabel: "Vendor",
    productCount: (n) => (n === 1 ? "1 mahsulot" : `${n} mahsulot`),
    categories: {
      office: { name: "Ofis va biznes", desc: "Microsoft 365, Adobe Creative Cloud, Bitrix24, ClickUp — kundalik biznes operatsiyalari uchun." },
      antivirus: { name: "Antivirus va endpoint", desc: "Kaspersky, Bitdefender, ESET — biznes uchun ko'p qatlamli endpoint himoyasi." },
      design: { name: "Dizayn va muhandislik", desc: "Autodesk, IDEA StatiCa, ИндорСофт — arxitektura, BIM, CAD va vizualizatsiya." },
      networkSecurity: { name: "Tarmoq xavfsizligi", desc: "Fortinet, Palo Alto, GFI, Falcongaze, SSL — NGFW, DLP va tarmoq himoyasi." },
      backupTools: { name: "Zaxira va vositalar", desc: "Veeam, IBM, JetBrains, Passware, MyQ — zaxira, infratuzilma va professional vositalar." },
    },
  },
  team: {
    eyebrow: "Jamoa",
    title: "Softy ortida turgan odamlar",
    members: [
      { name: "Umidjon Fatullayev", role: "Asoschi va Bosh ijrochi direktor", bio: "Softy LLC asoschisi va strategik yo'lboshchi. Kompaniya rivojini boshqaradi, operatsiyalarni yo'lga qo'yadi va mijozlarga eng yaxshi tajribani taqdim etishga e'tibor qaratadi." },
      { name: "Yoqubxon Abdurahimov", role: "Dasturchi-mutaxassis", bio: "Dasturlash va jamoa ishlab chiqishi bo'yicha tajribali mutaxassis. Mijoz integratsiyalarini va texnik yechimlarni amalga oshiradi." },
      { name: "Shoxrux Soloxov", role: "Sotuv menejeri", bio: "Mijozlar bilan ishlash va sotuv bo'yicha mutaxassis. Korxonalarning ehtiyojlarini o'rganib, mos litsenziya va yechimlarni tanlashda yordam beradi." },
    ],
  },
  values: {
    eyebrow: "Qadriyatlar",
    title: "Bizning ish tamoyillarimiz",
    items: [
      { title: "Mijozga sodiqlik", desc: "Har bir mijoz uchun shaxsiy yondashuv. SMB'dan tortib yirik korporatsiyalargacha — biznesingizni o'z biznesimiz kabi qabul qilamiz." },
      { title: "Rasmiy va shaffof", desc: "Faqat vendordan to'g'ridan-to'g'ri kelgan litsenziyalar. Hech qanday yashirin to'lov yoki shubhali kelishuv yo'q." },
      { title: "Texnik mukammallik", desc: "Sertifikatlangan jamoa, vendor partnyorlik dasturlari va doimiy o'rganish — ish sifatining kafolati." },
      { title: "Doimiy yordam", desc: "Sotuvdan keyin ham yo'qolib ketmaymiz. 24/7 texnik yordam, migratsiya va o'qitish — hammasi bir hamkordan." },
    ],
  },
  problem: {
    eyebrow: "Muammo",
    title: "Kompaniyangiz har yili dasturiy ta'minotga keragidan ortiq sarflamoqda.",
    figure: "100+",
    figureCaption: "o'rtacha korxonadagi dastur va obunalar soni",
    sub: "Sabab oddiy — to'g'ri litsenziya, to'g'ri vendordan, to'g'ri shartda. Biz har bir litsenziyangizni, har bir bo'shliqni va har bir ortiqcha xarajatni topamiz.",
  },
  pillars: {
    eyebrow: "Biz nima qilamiz",
    title: "Uchta ustun. Bitta shartnoma.",
    items: [
      {
        num: "01",
        title: "Dasturiy litsenziyalash",
        desc: "Operatsion tizimlardan AI vositalarigacha — vendorlardan to'g'ridan-to'g'ri kelgan rasmiy litsenziyalar. Windows, macOS, Adobe, Autodesk, OpenAI, Anthropic va boshqalar.",
        bullets: ["Barcha asosiy platformalar va vendorlar", "Korporativ va o'quv litsenziyalari", "Vendor kafolati bilan 100% rasmiy"],
      },
      {
        num: "02",
        title: "Obunalarni boshqarish",
        desc: "Bir hisob — 15 ta emas. Oylik va yillik obunalarni rasmiylashtiramiz, optimallashtiramiz va yangilash muddatini nazorat qilamiz.",
        bullets: ["Litsenziya auditi (o'rtacha 20–40% tejov)", "Avtomatik yangilash va konsolidatsiya", "Hajm bo'yicha chegirma muzokaralari"],
      },
      {
        num: "03",
        title: "O'rnatish va 24/7 yordam",
        desc: "Toshkentda joyida yoki butun MDH bo'ylab masofadan o'rnatish, migratsiya va doimiy texnik yordam — SLA bilan kafolatlangan.",
        bullets: ["24–48 soat ichida o'rnatish", "Migratsiya: legacy → cloud, Windows → Mac", "SLA javob vaqti 1 soatgacha"],
      },
    ],
  },
  process: {
    eyebrow: "Qanday ishlaymiz",
    title: "Isbotlangan, shaffof jarayon.",
    sub: "Murojaatdan doimiy yordamgacha — har bir bosqich aniq.",
    steps: [
      { num: "01", title: "So'rov", desc: "Bizga texnik stekingiz qanday ko'rinishini ayting. Bir suhbat yetarli." },
      { num: "02", title: "Audit", desc: "Har bir litsenziyani, har bir bo'shliqni va har bir ortiqcha xarajatni xaritalaymiz." },
      { num: "03", title: "Yetkazib berish", desc: "Muzokara qilamiz, litsenziyalaymiz va o'rnatamiz — siz hech narsani o'ylamaysiz." },
      { num: "04", title: "Qo'llab-quvvatlash", desc: "Nazorat qilamiz, yangilaymiz va javob beramiz. Doimo." },
    ],
  },
  stats: {
    eyebrow: "Raqamlarda",
    items: [
      { value: 200, suffix: "+", label: "Faol mijozlar" },
      { value: 92, suffix: "%", label: "Mijozlar qaytishi (3+ yil)" },
      { value: 26, label: "Rasmiy vendorlar" },
      { value: 24, suffix: "/7", label: "Yordam va kuzatuv" },
    ],
  },
  engagement: {
    eyebrow: "Hamkorlik modellari",
    title: "Biznesingizga mos ishlash usuli.",
    sub: "Biz dastur ishlab chiqarmaymiz — vendorlardan eng yaxshi shartlarda yetkazamiz, o'rnatamiz va qo'llab-quvvatlaymiz. Narx auditdan keyin individual belgilanadi.",
    customLabel: "Kelishiladi",
    note: "Aniq narx audit va litsenziya hajmiga bog'liq",
    models: [
      {
        name: "Litsenziya va o'rnatish",
        desc: "Bir martalik ehtiyoj uchun: kerakli rasmiy litsenziyalarni topamiz, sotib olamiz va o'rnatamiz.",
        features: ["Vendordan to'g'ridan-to'g'ri litsenziya", "O'rnatish va konfiguratsiya", "Migratsiya yordami", "Vendor kafolati"],
        cta: "Taklif olish",
      },
      {
        name: "Obuna boshqaruvi",
        desc: "Barcha obunalaringizni biz boshqaramiz, optimallashtiramiz va yangilaymiz — bir hisobdan.",
        features: ["Litsenziya auditi (20–40% tejov)", "Avtomatik yangilash va konsolidatsiya", "Hajm bo'yicha chegirma", "Shaxsiy menejer"],
        cta: "Bepul audit",
        tag: "Eng mos",
        highlight: true,
      },
      {
        name: "To'liq IT-hamkor",
        desc: "Yirik tashkilotlar uchun: litsenziya, o'rnatish va 24/7 boshqaruv — SLA bilan.",
        features: ["Cheksiz litsenziya va vendorlar", "Individual SLA · joyida muhandis", "Choraklik biznes-tahlil", "Xaridlarni avtomatlashtirish"],
        cta: "Bog'lanish",
      },
    ],
  },
  coverage: {
    eyebrow: "Geografiya",
    title: "Butun MDH bo'ylab xizmat.",
    sub: "Litsenziya, obuna, o'rnatish va texnik yordamni bir xil sifatda — mahalliy to'lov va qo'llab-quvvatlash imkoniyati bilan.",
    note: "Masofadan va joyida xizmat ko'rsatish",
    statLabel: "MDH davlati va o'sib bormoqda",
    countries: [
      { name: "O'zbekiston", note: "Bosh ofis · Toshkent" },
      { name: "Qozog'iston", note: "Masofadan + joyida" },
      { name: "Qirg'iziston", note: "Masofadan + joyida" },
      { name: "Tojikiston", note: "Masofadan" },
      { name: "Turkmaniston", note: "Masofadan" },
      { name: "Ozarbayjon", note: "Masofadan" },
      { name: "Rossiya", note: "Masofadan + hamkorlar" },
      { name: "va boshqalar", note: "So'rov bo'yicha" },
    ],
  },
  about: {
    eyebrow: "Biz haqimizda",
    title: "Sizning to'liq IT-hamkoringiz.",
    lead: "2022-yilda tashkil etilgan Softy LLC — Markaziy Osiyo va MDH bo'ylab biznes, davlat idoralari va tashkilotlar uchun korporativ dasturiy ta'minotni litsenziyalash, o'rnatish va boshqarish bilan shug'ullanuvchi rasmiy IT-integrator.",
    body: [
      "Biz dastur ishlab chiqarmaymiz — yetakchi vendorlar bilan to'g'ridan-to'g'ri hamkorligimiz tufayli mijozlarimiz kafolatlangan mahsulotlarni eng qulay shartlarda oladi. Windowsdan iOSgacha, ofis dasturlaridan AI vositalarigacha — barchasi bir manzildan.",
      "Softy kichik va o'rta korxonalardan tortib yirik tashkilotlargacha bo'lgan bizneslar uchun mo'ljallangan. Har bir mijoz uchun shaxsiy yondashuv va biznes hajmiga moslangan yechimlar — biz uchun standart amaliyot, qoidadan istisno emas.",
      "Bizning vazifamiz oddiy: bitta shartnoma, har bir vendor, hech qanday murosasizlik. Litsenziya auditi orqali ortiqcha xarajatlarni topamiz, o'rnatamiz va doimiy texnik yordam ko'rsatamiz.",
      "Softy ortida — texnologiyaga ishtiyoq bilan qaragan jamoa turadi. Bizning maqsadimiz aniq: har bir mijozning ish jarayonini soddalashtirish, biznesining rivojiga ulush qo'shish va O'zbekistondagi eng yirik va innovatsion IT kompaniyalardan biriga aylanish. Sotuv emas — uzoq muddatli hamkorlik bizning ish modelimizning asosi.",
      "MDH'ning 9+ davlatida 200+ kompaniya bizga ishonadi. 92% mijozlar qaytishi, vendor sertifikatlari va doimiy texnik kompetensiya — bu raqamlar emas, bu sizning ishonchingiz va biznesingizning natijasi.",
    ],
  },
  testimonials: {
    eyebrow: "Fikrlar",
    title: "Aqlli kompaniyalar bizga ishonadi.",
    items: [
      { quote: "Softy bizning litsenziya xarajatlarimizni bir choragda 34% ga kamaytirdi. Endi 12 ta hisob o'rniga bitta hisobni boshqaramiz.", name: "Dilshod Karimov", role: "IT direktor, mid-market logistika", initials: "DK" },
      { quote: "Bepul audit haqiqatan ham bepul edi va birinchi oyda $9,000 dan ortiq ortiqcha xarajatni topdi. Bu juda nodir uchraydi.", name: "Aziza Rahimova", role: "Moliya direktori (CFO), savdo tarmog'i", initials: "AR" },
      { quote: "Windows'dan Mac'ga migratsiya 48 soatda, bironta uzilishsiz amalga oshdi. 24/7 yordam haqiqatan ishlaydi.", name: "Sardor Yusupov", role: "Operatsiyalar boshlig'i, fintech", initials: "SY" },
      { quote: "Bir shartnoma — Microsoft, Adobe va Autodesk. Sotib olish bo'limimiz Softy'ni eng yaxshi qarorimiz deb ataydi.", name: "Nigora Tosheva", role: "Xaridlar yetakchisi, ishlab chiqarish", initials: "NT" },
    ],
  },
  faq: {
    eyebrow: "Savol-javob",
    title: "Ko'p so'raladigan savollar",
    items: [
      { q: "Litsenziyalar haqiqiy va kafolatlanganmi?", a: "Ha. Hammasi vendorlardan to'g'ridan-to'g'ri kelgan, rasmiy ro'yxatdan o'tgan va kafolatlangan." },
      { q: "Qaysi operatsion tizimlarni qo'llab-quvvatlaysiz?", a: "Windows, macOS, Linux, Android, iOS — barcha asosiy platformalar." },
      { q: "MDH qaysi davlatlarida ishlaysiz?", a: "O'zbekiston, Qozog'iston, Qirg'iziston, Tojikiston, Turkmaniston, Ozarbayjon, Rossiya va boshqalar." },
      { q: "To'lov qanday amalga oshiriladi?", a: "Oylik yoki yillik. UZS, RUB, USD da to'lov mumkin — bank transferi, korporativ karta yoki Visa/Mastercard orqali." },
      { q: "O'rnatish va texnik yordamga qancha vaqt ketadi?", a: "O'rnatish odatda 24–48 soat ichida. Texnik yordam 24/7 mavjud, SLA javob vaqti 1 soatgacha." },
      { q: "Bepul audit nima va u qanday ishlaydi?", a: "Sizning hozirgi dasturiy ta'minot xarajatlaringizni ko'rib chiqamiz, ortiqcha xarajatlarni topamiz va kamida 20% tejash imkonini ko'rsatamiz." },
    ],
  },
  finalCta: {
    title: "IT-xarajatlaringizni bugun optimallashtiring.",
    sub: "Bepul audit oling — biznesingiz uchun eng mos yechimni biz bilan toping. 24 soat ichida javob beramiz.",
    call: "Qo'ng'iroq qilish",
    telegram: "Telegram'da yozish",
  },
  contact: {
    eyebrow: "Aloqa",
    title: "Keling, gaplashamiz.",
    sub: "Bepul audit uchun bog'laning — 24 soat ichida javob beramiz.",
    phoneLabel: "Telefon",
    emailLabel: "Email",
    tgLabel: "Telegram",
    addrLabel: "Manzil",
    address: "81 Kichik Halqa Yo'li, Firdavsiy MFY, Yunusobod, 100084, Toshkent",
    hoursLabel: "Ish vaqti",
    hours: "Du–Ju 9:00–19:00 · MDH texnik yordam 24/7",
    form: {
      name: "Ism",
      namePh: "Ismingiz",
      phone: "Telefon",
      phonePh: "+998 ...",
      email: "Email",
      emailPh: "email@kompaniya.uz",
      message: "Xabar",
      messagePh: "Qaysi dastur yoki xizmat kerak?",
      submit: "Bepul audit oling",
      sending: "Yuborilmoqda…",
      success: "Rahmat! So'rovingiz qabul qilindi — 24 soat ichida bog'lanamiz.",
      error: "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring yoki Telegram orqali yozing.",
    },
  },
  footer: {
    tagline: "Sizning to'liq IT-hamkoringiz — dasturdan jihozgacha. Bir shartnoma. Har bir vendor.",
    servicesCol: "Xizmatlar",
    companyCol: "Kompaniya",
    contactCol: "Aloqa",
    rights: "Barcha huquqlar himoyalangan.",
  },
};

/* ── RUSSIAN ───────────────────────────────────────────────── */
const ru: Content = {
  meta: {
    title: "Softy LLC — Официальный IT-интегратор | Лицензии по СНГ",
    description:
      "Официальные лицензии для всех ОС, управление подписками, установка и поддержка 24/7. 200+ клиентов. 92% возврата. Закажите бесплатный аудит.",
  },
  pageMeta: {
    home: {
      title: "Softy LLC — Официальный IT-интегратор | Лицензии по СНГ",
      description: "Официальные лицензии напрямую от вендоров, управление подписками, установка и поддержка 24/7. 200+ клиентов, 92% возврата. Бесплатный аудит.",
    },
    services: {
      title: "Услуги — Лицензии, подписки, установка | Softy LLC",
      description: "Официальные лицензии ПО, управление подписками, установка и поддержка 24/7 — напрямую от вендоров, по всему СНГ.",
    },
    solutions: {
      title: "Решения — Как мы работаем | Softy LLC",
      description: "От запроса до аудита, от поставки до постоянной поддержки — проверенный прозрачный процесс из 4 шагов.",
    },
    catalog: {
      title: "Каталог — 20+ вендорных продуктов | Softy LLC",
      description: "Microsoft, Adobe, Kaspersky, Autodesk, Veeam, Fortinet и другие официальные вендорные продукты по категориям — антивирусы, офис, дизайн, сетевая безопасность, бэкап.",
    },
    coverage: {
      title: "Охват СНГ — 9+ стран | Softy LLC",
      description: "Лицензии, установка и поддержка 24/7 в Узбекистане, Казахстане, Кыргызстане и других странах СНГ — в одинаковом качестве.",
    },
    about: {
      title: "О нас — IT-интегратор | Softy LLC",
      description: "Softy LLC — официальный IT-интегратор. 200+ клиентов, 92% возврата, 9+ стран. Лицензии и услуги напрямую от вендоров.",
    },
    contact: {
      title: "Контакты — Бесплатный аудит | Softy LLC",
      description: "Закажите бесплатный аудит — ответим в течение 24 часов. Телефон, Telegram или форма. Ташкент, по всему СНГ.",
    },
  },
  common: { learnMore: "Подробнее", allServices: "Все услуги" },
  nav: { services: "Услуги", solutions: "Решения", catalog: "Каталог", coverage: "Охват СНГ", about: "О нас", contact: "Контакты", cta: "Бесплатный аудит", language: "Язык" },
  hero: {
    eyebrow: "Официальный IT-интегратор · по СНГ",
    titleA: "Для вашего бизнеса —",
    titleAccent: "полные IT-решения.",
    lead: "От облачных сервисов и кибербезопасности до инженерного ПО — официальные лицензии ведущих мировых вендоров. Внедряем и сопровождаем под ключ.",
    ctaPrimary: "Бесплатный аудит",
    ctaSecondary: "Наши вендоры",
    trust: ["Нам доверяют 200+ компаний", "9 стран", "Поддержка 24/7"],
  },
  vendors: { label: "Официальное партнёрство — напрямую с ведущими вендорами" },
  partners: { eyebrow: "Партнёры", title: "Наши официальные вендор-партнёры", sub: "Прямое партнёрство с ведущими мировыми вендорами — каждая лицензия гарантированная и официальная.", showAll: "Показать всех вендоров", showLess: "Свернуть" },
  catalog: {
    eyebrow: "Каталог",
    title: "Программные продукты",
    sub: "20+ официальных вендорных продуктов по категориям — антивирусы, офис, дизайн, сетевая безопасность и другие.",
    allCategories: "Все категории",
    productsLabel: "Продукты",
    featuresLabel: "Ключевые возможности",
    osLabel: "Платформы",
    audienceLabel: "Для кого",
    ctaQuote: "Запросить цену",
    ctaBack: "Назад в каталог",
    partnerOf: "Softy LLC — официальный партнёр",
    vendorLabel: "Вендор",
    productCount: (n) => (n === 1 ? "1 продукт" : `${n} продукта`),
    categories: {
      office: { name: "Офис и бизнес", desc: "Microsoft 365, Adobe Creative Cloud, Bitrix24, ClickUp — для повседневных бизнес-операций." },
      antivirus: { name: "Антивирус и endpoint", desc: "Kaspersky, Bitdefender, ESET — многоуровневая защита endpoint для бизнеса." },
      design: { name: "Дизайн и инженерия", desc: "Autodesk, IDEA StatiCa, ИндорСофт — архитектура, BIM, CAD и визуализация." },
      networkSecurity: { name: "Сетевая безопасность", desc: "Fortinet, Palo Alto, GFI, Falcongaze, SSL — NGFW, DLP и защита сети." },
      backupTools: { name: "Бэкап и инструменты", desc: "Veeam, IBM, JetBrains, Passware, MyQ — бэкап, инфраструктура и профессиональные инструменты." },
    },
  },
  team: {
    eyebrow: "Команда",
    title: "Люди, стоящие за Softy",
    members: [
      { name: "Умиджон Фатуллаев", role: "Основатель и Генеральный директор", bio: "Основатель и стратегический руководитель Softy LLC. Управляет развитием компании, операциями и фокусируется на лучшем клиентском опыте." },
      { name: "Якубхон Абдурахимов", role: "Разработчик-специалист", bio: "Опытный специалист по программированию и командной разработке. Реализует клиентские интеграции и технические решения." },
      { name: "Шохрух Солохов", role: "Менеджер по продажам", bio: "Специалист по продажам и работе с клиентами. Изучает потребности компаний и помогает подобрать подходящие лицензии и решения." },
    ],
  },
  values: {
    eyebrow: "Ценности",
    title: "Наши принципы работы",
    items: [
      { title: "Преданность клиенту", desc: "Индивидуальный подход к каждому клиенту. От SMB до крупного бизнеса — относимся к вашему делу как к собственному." },
      { title: "Официально и прозрачно", desc: "Только лицензии напрямую от вендора. Никаких скрытых платежей или сомнительных сделок." },
      { title: "Техническое превосходство", desc: "Сертифицированная команда, вендорные партнёрства и постоянное обучение — гарантия качества работы." },
      { title: "Постоянная поддержка", desc: "Не исчезаем после продажи. Поддержка 24/7, миграции и обучение — всё у одного партнёра." },
    ],
  },
  problem: {
    eyebrow: "Проблема",
    title: "Ваша компания ежегодно тратит на ПО больше необходимого.",
    figure: "100+",
    figureCaption: "программ и подписок в средней компании",
    sub: "Причина проста — правильная лицензия, от правильного вендора, на правильных условиях. Мы найдём каждую лицензию, каждый пробел и каждую лишнюю статью расходов.",
  },
  pillars: {
    eyebrow: "Что мы делаем",
    title: "Три столпа. Один договор.",
    items: [
      {
        num: "01",
        title: "Лицензирование ПО",
        desc: "От операционных систем до AI-инструментов — официальные лицензии напрямую от вендоров. Windows, macOS, Adobe, Autodesk, OpenAI, Anthropic и другие.",
        bullets: ["Все основные платформы и вендоры", "Корпоративные и учебные лицензии", "100% официально с гарантией вендора"],
      },
      {
        num: "02",
        title: "Управление подписками",
        desc: "Один счёт вместо пятнадцати. Оформляем, оптимизируем подписки и контролируем сроки продления.",
        bullets: ["Аудит лицензий (экономия 20–40%)", "Автопродление и консолидация", "Переговоры об объёмных скидках"],
      },
      {
        num: "03",
        title: "Установка и поддержка 24/7",
        desc: "Установка на месте в Ташкенте или удалённо по всему СНГ, миграция и постоянная техподдержка — с гарантией SLA.",
        bullets: ["Установка за 24–48 часов", "Миграция: legacy → cloud, Windows → Mac", "Время реакции по SLA до 1 часа"],
      },
    ],
  },
  process: {
    eyebrow: "Как мы работаем",
    title: "Проверенный, прозрачный процесс.",
    sub: "От запроса до постоянной поддержки — каждый шаг понятен.",
    steps: [
      { num: "01", title: "Запрос", desc: "Расскажите, как выглядит ваш технический стек. Одного разговора достаточно." },
      { num: "02", title: "Аудит", desc: "Картируем каждую лицензию, каждый пробел и каждую лишнюю статью расходов." },
      { num: "03", title: "Поставка", desc: "Договариваемся, лицензируем и устанавливаем — вам ни о чём не нужно думать." },
      { num: "04", title: "Поддержка", desc: "Мониторим, продлеваем и отвечаем. Всегда." },
    ],
  },
  stats: {
    eyebrow: "В цифрах",
    items: [
      { value: 200, suffix: "+", label: "Активных клиентов" },
      { value: 92, suffix: "%", label: "Возврат клиентов (3+ года)" },
      { value: 26, label: "Официальных вендоров" },
      { value: 24, suffix: "/7", label: "Поддержка и сопровождение" },
    ],
  },
  engagement: {
    eyebrow: "Модели сотрудничества",
    title: "Способ работы под ваш бизнес.",
    sub: "Мы не производим ПО — поставляем его от вендоров на лучших условиях, устанавливаем и поддерживаем. Цена определяется индивидуально после аудита.",
    customLabel: "Договорная",
    note: "Точная цена зависит от аудита и объёма лицензий",
    models: [
      {
        name: "Лицензия и установка",
        desc: "Для разовой задачи: находим нужные официальные лицензии, закупаем и устанавливаем.",
        features: ["Лицензии напрямую от вендора", "Установка и настройка", "Помощь с миграцией", "Гарантия вендора"],
        cta: "Получить предложение",
      },
      {
        name: "Управление подписками",
        desc: "Мы ведём, оптимизируем и продлеваем все ваши подписки — из одного счёта.",
        features: ["Аудит лицензий (экономия 20–40%)", "Автопродление и консолидация", "Объёмные скидки", "Персональный менеджер"],
        cta: "Бесплатный аудит",
        tag: "Оптимально",
        highlight: true,
      },
      {
        name: "Полный IT-партнёр",
        desc: "Для крупных организаций: лицензии, установка и управление 24/7 — с SLA.",
        features: ["Неограниченные лицензии и вендоры", "Индивидуальный SLA · инженер на месте", "Квартальный бизнес-обзор", "Автоматизация закупок"],
        cta: "Связаться",
      },
    ],
  },
  coverage: {
    eyebrow: "География",
    title: "Сервис по всему СНГ.",
    sub: "Лицензии, подписки, установка и поддержка в одинаковом качестве — с локальной оплатой и сопровождением.",
    note: "Удалённое и выездное обслуживание",
    statLabel: "Стран СНГ и растёт",
    countries: [
      { name: "Узбекистан", note: "Головной офис · Ташкент" },
      { name: "Казахстан", note: "Удалённо + выезд" },
      { name: "Кыргызстан", note: "Удалённо + выезд" },
      { name: "Таджикистан", note: "Удалённо" },
      { name: "Туркменистан", note: "Удалённо" },
      { name: "Азербайджан", note: "Удалённо" },
      { name: "Россия", note: "Удалённо + партнёры" },
      { name: "и другие", note: "По запросу" },
    ],
  },
  about: {
    eyebrow: "О нас",
    title: "Ваш полный IT-партнёр.",
    lead: "Основанная в 2022 году, Softy LLC — официальный IT-интегратор, который занимается лицензированием, установкой и управлением корпоративным ПО для бизнеса, госучреждений и организаций в Центральной Азии и СНГ.",
    body: [
      "Мы не производим ПО — благодаря прямому партнёрству с ведущими вендорами наши клиенты получают гарантированные продукты на лучших условиях. От Windows до iOS, от офисных программ до AI-инструментов — всё из одного места.",
      "Softy ориентирована на бизнес от малых и средних предприятий до крупных организаций. Индивидуальный подход к каждому клиенту и решения, адаптированные под размер бизнеса — наша стандартная практика, а не исключение из правил.",
      "Наша задача проста: один договор, любой вендор, без компромиссов. Через аудит лицензий мы находим лишние расходы, устанавливаем и обеспечиваем постоянную техподдержку.",
      "За Softy стоит команда, увлечённая технологиями. Наша цель ясна: упростить рабочие процессы каждого клиента, внести вклад в развитие его бизнеса и стать одной из крупнейших и самых инновационных IT-компаний Узбекистана. Не продажа — а долгосрочное партнёрство лежит в основе нашей модели работы.",
      "В 9+ странах СНГ нам доверяют 200+ компаний. 92% возврата клиентов, сертификации вендоров и стабильные технические компетенции — это не просто цифры, это результат вашего доверия и роста вашего бизнеса.",
    ],
  },
  testimonials: {
    eyebrow: "Отзывы",
    title: "Умные компании нам доверяют.",
    items: [
      { quote: "Softy снизил наши расходы на лицензии на 34% за квартал. Теперь один счёт вместо двенадцати.", name: "Дильшод Каримов", role: "IT-директор, логистика", initials: "ДК" },
      { quote: "Бесплатный аудит был действительно бесплатным и нашёл лишних расходов на $9,000 в первый месяц. Это редкость.", name: "Азиза Рахимова", role: "CFO, розничная сеть", initials: "АР" },
      { quote: "Миграция с Windows на Mac за 48 часов без единого простоя. Поддержка 24/7 действительно работает.", name: "Сардор Юсупов", role: "Руководитель операций, финтех", initials: "СЮ" },
      { quote: "Один договор — Microsoft, Adobe и Autodesk. Отдел закупок называет Softy лучшим решением.", name: "Нигора Тошева", role: "Руководитель закупок, производство", initials: "НТ" },
    ],
  },
  faq: {
    eyebrow: "Вопросы",
    title: "Часто задаваемые вопросы",
    items: [
      { q: "Лицензии настоящие и с гарантией?", a: "Да. Все поступают напрямую от вендоров, официально зарегистрированы и с гарантией." },
      { q: "Какие ОС вы поддерживаете?", a: "Windows, macOS, Linux, Android, iOS — все основные платформы." },
      { q: "В каких странах СНГ вы работаете?", a: "Узбекистан, Казахстан, Кыргызстан, Таджикистан, Туркменистан, Азербайджан, Россия и другие." },
      { q: "Как происходит оплата?", a: "Помесячно или ежегодно. Оплата в UZS, RUB, USD — банковский перевод, корпоративная карта или Visa/Mastercard." },
      { q: "Сколько занимает установка и поддержка?", a: "Установка обычно за 24–48 часов. Поддержка 24/7, время реакции по SLA до 1 часа." },
      { q: "Что такое бесплатный аудит и как он работает?", a: "Мы анализируем ваши текущие расходы на ПО, находим лишние расходы и показываем экономию минимум 20%." },
    ],
  },
  finalCta: {
    title: "Оптимизируйте IT-расходы уже сегодня.",
    sub: "Закажите бесплатный аудит — найдём лучшее решение для вашего бизнеса. Ответим в течение 24 часов.",
    call: "Позвонить",
    telegram: "Написать в Telegram",
  },
  contact: {
    eyebrow: "Контакты",
    title: "Давайте поговорим.",
    sub: "Свяжитесь для бесплатного аудита — ответим в течение 24 часов.",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    tgLabel: "Telegram",
    addrLabel: "Адрес",
    address: "81 Kichik Halqa Yo'li, махалля Фирдавсий, Юнусабад, 100084, Ташкент",
    hoursLabel: "Часы работы",
    hours: "Пн–Пт 9:00–19:00 · Техподдержка СНГ 24/7",
    form: {
      name: "Имя",
      namePh: "Ваше имя",
      phone: "Телефон",
      phonePh: "+998 ...",
      email: "Email",
      emailPh: "email@company.uz",
      message: "Сообщение",
      messagePh: "Какое ПО или услуга нужны?",
      submit: "Заказать аудит",
      sending: "Отправляется…",
      success: "Спасибо! Запрос принят — свяжемся в течение 24 часов.",
      error: "Произошла ошибка. Попробуйте ещё раз или напишите в Telegram.",
    },
  },
  footer: {
    tagline: "Ваш полный IT-партнёр — от софта до оборудования. Один договор. Любой вендор.",
    servicesCol: "Услуги",
    companyCol: "Компания",
    contactCol: "Контакты",
    rights: "Все права защищены.",
  },
};

/* ── ENGLISH ───────────────────────────────────────────────── */
const en: Content = {
  meta: {
    title: "Softy LLC — Official IT Integrator | Licenses across the CIS",
    description:
      "Official licensed software for every OS, subscription management, deployment and 24/7 support. 200+ clients. 92% retention. Get a free audit.",
  },
  pageMeta: {
    home: {
      title: "Softy LLC — Official IT Integrator | Licenses across the CIS",
      description: "Genuine software licenses direct from vendors, subscription management, deployment and 24/7 support. 200+ clients, 92% retention. Free audit.",
    },
    services: {
      title: "Services — Licensing, subscriptions, deployment | Softy",
      description: "Official software licenses, subscription management, deployment and 24/7 support — direct from vendors, across the CIS.",
    },
    solutions: {
      title: "Solutions — How we work | Softy LLC",
      description: "From inquiry to audit, from delivery to ongoing support — a proven, transparent four-step engagement process.",
    },
    catalog: {
      title: "Catalog — 20+ vendor products | Softy LLC",
      description: "Microsoft, Adobe, Kaspersky, Autodesk, Veeam, Fortinet and other official vendor products organized by category — antivirus, office, design, network security, backup.",
    },
    coverage: {
      title: "CIS Coverage — 9+ countries | Softy LLC",
      description: "Licensing, deployment and 24/7 support in Uzbekistan, Kazakhstan, Kyrgyzstan and other CIS countries — at the same quality.",
    },
    about: {
      title: "About — IT integrator | Softy LLC",
      description: "Softy LLC is an official IT integrator. 200+ clients, 92% retention, 9+ countries. Licenses and services direct from vendors.",
    },
    contact: {
      title: "Contact — Get a free audit | Softy LLC",
      description: "Get a free audit — we reply within 24 hours. Reach us by phone, Telegram or the form. Tashkent, across the CIS.",
    },
  },
  common: { learnMore: "Learn more", allServices: "All services" },
  nav: { services: "Services", solutions: "Solutions", catalog: "Catalog", coverage: "CIS Coverage", about: "About", contact: "Contact", cta: "Free audit", language: "Language" },
  hero: {
    eyebrow: "Official IT Integrator · across the CIS",
    titleA: "For your business —",
    titleAccent: "complete IT solutions.",
    lead: "From cloud and cybersecurity to engineering software — official licenses from leading global vendors. We deploy and support, end to end.",
    ctaPrimary: "Get a free audit",
    ctaSecondary: "See our vendors",
    trust: ["Trusted by 200+ companies", "9 countries", "24/7 support"],
  },
  vendors: { label: "Official partnerships — direct with leading vendors" },
  partners: { eyebrow: "Partners", title: "Our official vendor partners", sub: "Direct partnerships with leading global vendors — every license guaranteed and official.", showAll: "Show all vendors", showLess: "Show less" },
  catalog: {
    eyebrow: "Catalog",
    title: "Software products",
    sub: "20+ official vendor products organized by category — antivirus, office, design, network security and more.",
    allCategories: "All categories",
    productsLabel: "Products",
    featuresLabel: "Key capabilities",
    osLabel: "Platforms",
    audienceLabel: "Best for",
    ctaQuote: "Request a quote",
    ctaBack: "Back to catalog",
    partnerOf: "Softy LLC — an official partner",
    vendorLabel: "Vendor",
    productCount: (n) => (n === 1 ? "1 product" : `${n} products`),
    categories: {
      office: { name: "Office & business", desc: "Microsoft 365, Adobe Creative Cloud, Bitrix24, ClickUp — for everyday business operations." },
      antivirus: { name: "Antivirus & endpoint", desc: "Kaspersky, Bitdefender, ESET — multi-layered endpoint protection for business." },
      design: { name: "Design & engineering", desc: "Autodesk, IDEA StatiCa, IndorSoft — architecture, BIM, CAD and visualization." },
      networkSecurity: { name: "Network security", desc: "Fortinet, Palo Alto, GFI, Falcongaze, SSL — NGFW, DLP and network defense." },
      backupTools: { name: "Backup & tools", desc: "Veeam, IBM, JetBrains, Passware, MyQ — backup, infrastructure and professional tools." },
    },
  },
  team: {
    eyebrow: "Team",
    title: "The people behind Softy",
    members: [
      { name: "Umidjon Fatullayev", role: "Founder & Chief Executive Officer", bio: "Founder and strategic leader of Softy LLC. Drives company growth, operations and an unwavering focus on customer experience." },
      { name: "Yoqubxon Abdurahimov", role: "Software Developer", bio: "Experienced programming and collaborative-development specialist. Delivers client integrations and technical solutions." },
      { name: "Shoxrux Soloxov", role: "Sales Manager", bio: "Sales and client-relations specialist. Understands each company's needs and helps choose the right licenses and solutions." },
    ],
  },
  values: {
    eyebrow: "Values",
    title: "How we work",
    items: [
      { title: "Client devotion", desc: "A tailored approach for every client. From SMB to enterprise — we treat your business as our own." },
      { title: "Official & transparent", desc: "Only licenses delivered directly from vendors. No hidden fees, no shady deals." },
      { title: "Technical excellence", desc: "A certified team, vendor partner programs and continuous learning — a guarantee of quality." },
      { title: "Ongoing support", desc: "We don't disappear after the sale. 24/7 support, migrations and training — all from one partner." },
    ],
  },
  problem: {
    eyebrow: "The problem",
    title: "Your company spends more on software than it needs to.",
    figure: "100+",
    figureCaption: "software products & subscriptions in the average company",
    sub: "The reason is simple — the right license, from the right vendor, on the right terms. We map every license, every gap, and every unnecessary cost.",
  },
  pillars: {
    eyebrow: "What we do",
    title: "Three pillars. One contract.",
    items: [
      {
        num: "01",
        title: "Software licensing",
        desc: "From operating systems to AI tools — genuine licenses direct from vendors. Windows, macOS, Adobe, Autodesk, OpenAI, Anthropic and more.",
        bullets: ["Every major platform and vendor", "Enterprise and education licensing", "100% official with vendor warranty"],
      },
      {
        num: "02",
        title: "Subscription management",
        desc: "One bill instead of fifteen. We handle, optimize, and track renewals across every subscription you run.",
        bullets: ["License audit (20–40% average savings)", "Renewal automation and consolidation", "Volume discount negotiation"],
      },
      {
        num: "03",
        title: "Deployment & 24/7 support",
        desc: "On-site in Tashkent or remote across the CIS, migration and ongoing technical support — backed by an SLA.",
        bullets: ["Deployment within 24–48 hours", "Migration: legacy → cloud, Windows → Mac", "SLA response time up to 1 hour"],
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "A proven, transparent process.",
    sub: "From inquiry to ongoing support — every step is clear.",
    steps: [
      { num: "01", title: "Inquiry", desc: "Tell us what your stack looks like. One conversation is enough." },
      { num: "02", title: "Audit", desc: "We map every license, every gap, and every unnecessary cost." },
      { num: "03", title: "Delivery", desc: "We negotiate, license, and deploy — so you don't have to think about it." },
      { num: "04", title: "Support", desc: "We monitor, renew, and respond. Forever." },
    ],
  },
  stats: {
    eyebrow: "By the numbers",
    items: [
      { value: 200, suffix: "+", label: "Active clients" },
      { value: 92, suffix: "%", label: "Client retention (3+ yrs)" },
      { value: 26, label: "Official vendors" },
      { value: 24, suffix: "/7", label: "Support & maintenance" },
    ],
  },
  engagement: {
    eyebrow: "Engagement models",
    title: "A way of working that fits.",
    sub: "We don't build software — we source it from vendors on the best terms, deploy it, and support it. Pricing is set individually after the audit.",
    customLabel: "Custom",
    note: "Final price depends on the audit and license volume",
    models: [
      {
        name: "Licensing & deployment",
        desc: "For a one-time need: we find the right official licenses, procure them, and deploy.",
        features: ["Licenses direct from the vendor", "Installation and configuration", "Migration assistance", "Vendor warranty"],
        cta: "Get a quote",
      },
      {
        name: "Subscription management",
        desc: "We run, optimize, and renew all your subscriptions — from a single bill.",
        features: ["License audit (20–40% savings)", "Renewal automation & consolidation", "Volume discounts", "Dedicated account manager"],
        cta: "Free audit",
        tag: "Best fit",
        highlight: true,
      },
      {
        name: "Full IT partner",
        desc: "For larger organizations: licensing, deployment, and 24/7 management — with an SLA.",
        features: ["Unlimited licenses and vendors", "Custom SLA · on-site engineer", "Quarterly business reviews", "Procurement automation"],
        cta: "Contact us",
      },
    ],
  },
  coverage: {
    eyebrow: "Geography",
    title: "Service across the CIS.",
    sub: "Licensing, subscriptions, deployment and support at the same quality — with local payment and on-the-ground help.",
    note: "Remote and on-site service",
    statLabel: "CIS countries and growing",
    countries: [
      { name: "Uzbekistan", note: "HQ · Tashkent" },
      { name: "Kazakhstan", note: "Remote + on-site" },
      { name: "Kyrgyzstan", note: "Remote + on-site" },
      { name: "Tajikistan", note: "Remote" },
      { name: "Turkmenistan", note: "Remote" },
      { name: "Azerbaijan", note: "Remote" },
      { name: "Russia", note: "Remote + partners" },
      { name: "and more", note: "On request" },
    ],
  },
  about: {
    eyebrow: "About us",
    title: "Your complete IT partner.",
    lead: "Founded in 2022, Softy LLC is an official IT integrator that licenses, deploys, and operates enterprise software for businesses, government bodies, and institutions across Central Asia and the CIS.",
    body: [
      "We don't build software — through direct partnerships with leading vendors, our clients get guaranteed products on the best terms. From Windows to iOS, from office apps to AI tools, everything from one place.",
      "Softy is built for businesses from small and medium enterprises to large organizations. A tailored approach for every client and solutions matched to your business size — that's our standard practice, not the exception.",
      "Our mission is simple: one contract, every vendor, zero compromises. Through license audits we find the excess costs, deploy, and provide ongoing technical support.",
      "Behind Softy stands a team passionate about technology. Our goal is clear: to simplify every client's work, contribute to their business growth, and become one of Uzbekistan's largest and most innovative IT companies. Not the sale — but a long-term partnership lies at the core of how we work.",
      "Across 9+ CIS countries, 200+ companies trust us. 92% client retention, vendor certifications and steady technical competence — these aren't just numbers, they're the result of your trust and the growth of your business.",
    ],
  },
  testimonials: {
    eyebrow: "Feedback",
    title: "Smart companies trust us.",
    items: [
      { quote: "Softy cut our licensing costs by 34% in a single quarter. We now manage one bill instead of twelve.", name: "Dilshod Karimov", role: "IT Director, logistics", initials: "DK" },
      { quote: "The free audit was actually free and found over $9,000 in excess costs in the first month. That's rare.", name: "Aziza Rahimova", role: "CFO, retail chain", initials: "AR" },
      { quote: "Windows-to-Mac migration in 48 hours with zero downtime. The 24/7 support genuinely works.", name: "Sardor Yusupov", role: "Head of Operations, fintech", initials: "SY" },
      { quote: "One contract for Microsoft, Adobe and Autodesk. Our procurement team calls Softy our best decision.", name: "Nigora Tosheva", role: "Procurement Lead, manufacturing", initials: "NT" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      { q: "Are the licenses genuine and guaranteed?", a: "Yes. Everything comes directly from vendors, officially registered and warrantied." },
      { q: "Which operating systems do you support?", a: "Windows, macOS, Linux, Android, iOS — every major platform." },
      { q: "Which CIS countries do you operate in?", a: "Uzbekistan, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, Azerbaijan, Russia and others." },
      { q: "How does payment work?", a: "Monthly or annual. Pay in UZS, RUB, or USD — via bank transfer, corporate card, or Visa/Mastercard." },
      { q: "How long do deployment and support take?", a: "Deployment is usually within 24–48 hours. Support is available 24/7, with SLA response up to 1 hour." },
      { q: "What is the free audit and how does it work?", a: "We review your current software spend, find the excess costs, and show you at least 20% in savings." },
    ],
  },
  finalCta: {
    title: "Optimize your IT spend today.",
    sub: "Get a free audit — we'll find the best solution for your business. We reply within 24 hours.",
    call: "Call us",
    telegram: "Message on Telegram",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk.",
    sub: "Reach out for a free audit — we reply within 24 hours.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    tgLabel: "Telegram",
    addrLabel: "Address",
    address: "81 Kichik Halqa Yo'li, Firdavsiy MFY, Yunusobod, 100084, Tashkent",
    hoursLabel: "Working hours",
    hours: "Mon–Fri 9:00–19:00 · CIS tech support 24/7",
    form: {
      name: "Name",
      namePh: "Your name",
      phone: "Phone",
      phonePh: "+998 ...",
      email: "Email",
      emailPh: "email@company.uz",
      message: "Message",
      messagePh: "Which software or service do you need?",
      submit: "Get a free audit",
      sending: "Sending…",
      success: "Thank you! Your request is received — we'll be in touch within 24 hours.",
      error: "Something went wrong. Please try again or message us on Telegram.",
    },
  },
  footer: {
    tagline: "Your complete IT partner — from software to equipment. One contract. Every vendor.",
    servicesCol: "Services",
    companyCol: "Company",
    contactCol: "Contact",
    rights: "All rights reserved.",
  },
};

/* ── KAZAKH ────────────────────────────────────────────────── */
const kk: Content = {
  meta: {
    title: "Softy LLC — Ресми IT-интегратор | Лицензиялар ТМД бойынша",
    description:
      "Барлық операциялық жүйелерге ресми лицензияланған бағдарламалар, жазылым басқару, орнату және 24/7 техникалық қолдау. 200+ клиент. 92% қайтару. Тегін аудит алыңыз.",
  },
  pageMeta: {
    home: {
      title: "Softy LLC — Ресми IT-интегратор | Лицензиялар ТМД бойынша",
      description: "Вендорлардан тікелей ресми бағдарламалық лицензиялар, жазылым басқару, орнату және 24/7 қолдау. 200+ клиент, 92% қайтару. Тегін аудит алыңыз.",
    },
    services: {
      title: "Қызметтер — Лицензия, жазылым, орнату | Softy LLC",
      description: "Ресми бағдарламалық лицензиялар, жазылымдарды басқару, орнату және 24/7 техникалық қолдау — вендорлардан тікелей, бүкіл ТМД бойынша.",
    },
    solutions: {
      title: "Шешімдер — Қалай жұмыс істейміз | Softy LLC",
      description: "Сұраныстан аудитке, жеткізуден тұрақты қолдауға дейін — Softy-дің дәлелденген, ашық 4 кезеңді серіктестік үдерісі.",
    },
    catalog: {
      title: "Каталог — 20+ вендор өнімдері | Softy LLC",
      description: "Microsoft, Adobe, Kaspersky, Autodesk, Veeam, Fortinet және басқа ресми вендор өнімдері санаттар бойынша — антивирустар, офис, дизайн, желілік қауіпсіздік, сақтық көшірме.",
    },
    coverage: {
      title: "ТМД қамтуы — 9+ ел | Softy LLC",
      description: "Өзбекстан, Қазақстан, Қырғызстан және басқа ТМД елдерінде лицензия, орнату және 24/7 техникалық қолдау — бірдей сапада.",
    },
    about: {
      title: "Біз туралы — IT-интегратор | Softy LLC",
      description: "Softy LLC — ресми IT-интегратор. 200+ клиент, 92% қайтару, 9+ ел. Вендорлардан тікелей лицензия, жазылым және қызмет.",
    },
    contact: {
      title: "Байланыс — Тегін аудит алыңыз | Softy LLC",
      description: "Тегін аудит алыңыз — 24 сағат ішінде жауап береміз. Телефон, Telegram немесе форма арқылы байланысыңыз. Ташкент, ТМД бойынша.",
    },
  },
  common: { learnMore: "Толығырақ", allServices: "Барлық қызметтер" },
  nav: { services: "Қызметтер", solutions: "Шешімдер", catalog: "Каталог", coverage: "ТМД қамтуы", about: "Біз туралы", contact: "Байланыс", cta: "Тегін аудит", language: "Тіл" },
  hero: {
    eyebrow: "Ресми IT-интегратор · ТМД бойынша",
    titleA: "Бизнесіңіз үшін",
    titleAccent: "толық IT-шешімдер.",
    lead: "Бұлттық қызметтер мен киберқауіпсіздіктен инженерлік бағдарламаларға дейін — жетекші әлемдік вендорлардың ресми лицензиялары. Енгіземіз және қолдаймыз.",
    ctaPrimary: "Тегін аудит алыңыз",
    ctaSecondary: "Серіктестерді көру",
    trust: ["200+ компания бізге сенеді", "9 ел", "24/7 қолдау"],
  },
  vendors: { label: "Ресми серіктестік — жетекші вендорлармен тікелей" },
  partners: { eyebrow: "Серіктестер", title: "Біздің ресми вендор-серіктестеріміз", sub: "Жетекші халықаралық вендорлармен тікелей серіктестік — әр лицензия кепілдендірілген әрі ресми.", showAll: "Барлық вендорларды көрсету", showLess: "Жию" },
  catalog: {
    eyebrow: "Каталог",
    title: "Бағдарламалық өнімдер",
    sub: "20+ ресми вендор өнімі санаттар бойынша — антивирустар, офис, дизайн, желілік қауіпсіздік және басқалар.",
    allCategories: "Барлық санаттар",
    productsLabel: "Өнімдер",
    featuresLabel: "Негізгі мүмкіндіктер",
    osLabel: "Платформалар",
    audienceLabel: "Кімге арналған",
    ctaQuote: "Баға сұрау",
    ctaBack: "Каталогқа қайту",
    partnerOf: "Softy LLC — ресми серіктес",
    vendorLabel: "Вендор",
    productCount: (n) => (n === 1 ? "1 өнім" : `${n} өнім`),
    categories: {
      office: { name: "Офис және бизнес", desc: "Microsoft 365, Adobe Creative Cloud, Bitrix24, ClickUp — күнделікті бизнес операциялары үшін." },
      antivirus: { name: "Антивирус және endpoint", desc: "Kaspersky, Bitdefender, ESET — бизнес үшін көп қабатты endpoint қорғанысы." },
      design: { name: "Дизайн және инженерия", desc: "Autodesk, IDEA StatiCa, ИндорСофт — сәулет, BIM, CAD және визуализация." },
      networkSecurity: { name: "Желілік қауіпсіздік", desc: "Fortinet, Palo Alto, GFI, Falcongaze, SSL — NGFW, DLP және желі қорғанысы." },
      backupTools: { name: "Сақтық көшірме және құралдар", desc: "Veeam, IBM, JetBrains, Passware, MyQ — сақтық көшірме, инфрақұрылым және кәсіби құралдар." },
    },
  },
  team: {
    eyebrow: "Команда",
    title: "Softy-дің артындағы адамдар",
    members: [
      { name: "Үмиджон Фатуллаев", role: "Негізін қалаушы және Бас атқарушы директор", bio: "Softy LLC негізін қалаушы әрі стратегиялық жетекшісі. Компания дамуын басқарады, операцияларды жолға қояды және клиент тәжірибесіне ерекше мән береді." },
      { name: "Якубхон Абдурахимов", role: "Бағдарламашы-маман", bio: "Бағдарламалау және команда дамыту бойынша тәжірибелі маман. Клиент интеграцияларын және техникалық шешімдерді жүзеге асырады." },
      { name: "Шохрух Солохов", role: "Сату менеджері", bio: "Сатылым және клиенттермен жұмыс маманы. Компаниялардың қажеттіліктерін зерттеп, қолайлы лицензиялар мен шешімдерді таңдауға көмектеседі." },
    ],
  },
  values: {
    eyebrow: "Құндылықтар",
    title: "Біздің жұмыс қағидаттарымыз",
    items: [
      { title: "Клиентке адалдық", desc: "Әр клиентке жеке көзқарас. SMB-ден ірі бизнеске дейін — сіздің ісіңізді өзіміздікіндей қабылдаймыз." },
      { title: "Ресми және ашық", desc: "Тек вендордан тікелей келген лицензиялар. Жасырын төлемдер немесе күмәнді келісімдер жоқ." },
      { title: "Техникалық кәсібилік", desc: "Сертификатталған команда, вендор серіктестік бағдарламалары және үздіксіз оқу — сапа кепілі." },
      { title: "Тұрақты қолдау", desc: "Сатудан кейін ғайып болмаймыз. 24/7 қолдау, көшіру және оқыту — бәрі бір серіктестен." },
    ],
  },
  problem: {
    eyebrow: "Мәселе",
    title: "Компанияңыз бағдарламалық қамтамаға жыл сайын қажеттен артық жұмсайды.",
    figure: "100+",
    figureCaption: "орташа компаниядағы бағдарлама мен жазылым саны",
    sub: "Себебі қарапайым — дұрыс лицензия, дұрыс вендордан, дұрыс шартта. Біз әр лицензияңызды, әр олқылықты және әр артық шығынды табамыз.",
  },
  pillars: {
    eyebrow: "Біз не істейміз",
    title: "Үш баған. Бір шарт.",
    items: [
      {
        num: "01",
        title: "Бағдарламалық лицензиялау",
        desc: "Операциялық жүйелерден AI құралдарына дейін — вендорлардан тікелей келген ресми лицензиялар. Windows, macOS, Adobe, Autodesk, OpenAI, Anthropic және басқалар.",
        bullets: ["Барлық негізгі платформалар мен вендорлар", "Корпоративтік және оқу лицензиялары", "Вендор кепілдігімен 100% ресми"],
      },
      {
        num: "02",
        title: "Жазылымдарды басқару",
        desc: "Бір есепшот — 15 емес. Айлық және жылдық жазылымдарды рәсімдейміз, оңтайландырамыз және жаңарту мерзімін бақылаймыз.",
        bullets: ["Лицензия аудиті (орташа 20–40% үнем)", "Автожаңарту және шоғырландыру", "Көлем бойынша жеңілдік келіссөздері"],
      },
      {
        num: "03",
        title: "Орнату және 24/7 қолдау",
        desc: "Ташкентте орнында немесе бүкіл ТМД бойынша қашықтан орнату, көшіру және тұрақты техникалық қолдау — SLA-мен кепілдендірілген.",
        bullets: ["24–48 сағат ішінде орнату", "Көшіру: legacy → cloud, Windows → Mac", "SLA жауап уақыты 1 сағатқа дейін"],
      },
    ],
  },
  process: {
    eyebrow: "Қалай жұмыс істейміз",
    title: "Дәлелденген, ашық үдеріс.",
    sub: "Өтініштен тұрақты қолдауға дейін — әр кезең нақты.",
    steps: [
      { num: "01", title: "Сұраныс", desc: "Бізге техникалық стегіңіз қалай көрінетінін айтыңыз. Бір әңгіме жеткілікті." },
      { num: "02", title: "Аудит", desc: "Әр лицензияны, әр олқылықты және әр артық шығынды картаға түсіреміз." },
      { num: "03", title: "Жеткізу", desc: "Келіссөз жүргіземіз, лицензиялаймыз және орнатамыз — сіз ештеңе ойламайсыз." },
      { num: "04", title: "Қолдау", desc: "Бақылаймыз, жаңартамыз және жауап береміз. Әрдайым." },
    ],
  },
  stats: {
    eyebrow: "Сандармен",
    items: [
      { value: 200, suffix: "+", label: "Белсенді клиенттер" },
      { value: 92, suffix: "%", label: "Клиенттер қайтуы (3+ жыл)" },
      { value: 26, label: "Ресми вендорлар" },
      { value: 24, suffix: "/7", label: "Қолдау және сүйемелдеу" },
    ],
  },
  engagement: {
    eyebrow: "Серіктестік модельдері",
    title: "Бизнесіңізге сай жұмыс тәсілі.",
    sub: "Біз бағдарлама жасамаймыз — вендорлардан ең жақсы шартпен жеткіземіз, орнатамыз және қолдаймыз. Баға аудиттен кейін жеке белгіленеді.",
    customLabel: "Келісіледі",
    note: "Нақты баға аудит пен лицензия көлеміне байланысты",
    models: [
      {
        name: "Лицензия және орнату",
        desc: "Бір реттік қажеттілік үшін: қажетті ресми лицензияларды табамыз, сатып аламыз және орнатамыз.",
        features: ["Вендордан тікелей лицензия", "Орнату және конфигурация", "Көшіру қолдауы", "Вендор кепілдігі"],
        cta: "Ұсыныс алу",
      },
      {
        name: "Жазылым басқару",
        desc: "Барлық жазылымдарыңызды біз басқарамыз, оңтайландырамыз және жаңартамыз — бір есепшоттан.",
        features: ["Лицензия аудиті (20–40% үнем)", "Автожаңарту және шоғырландыру", "Көлем бойынша жеңілдік", "Жеке менеджер"],
        cta: "Тегін аудит",
        tag: "Ең қолайлы",
        highlight: true,
      },
      {
        name: "Толық IT-серіктес",
        desc: "Ірі ұйымдар үшін: лицензия, орнату және 24/7 басқару — SLA-мен.",
        features: ["Шектеусіз лицензия мен вендорлар", "Жеке SLA · орнында инженер", "Тоқсандық бизнес-талдау", "Сатып алуды автоматтандыру"],
        cta: "Байланысу",
      },
    ],
  },
  coverage: {
    eyebrow: "География",
    title: "Бүкіл ТМД бойынша қызмет.",
    sub: "Лицензия, жазылым, орнату және техникалық қолдауды бірдей сапада — жергілікті төлем мен қолдау мүмкіндігімен.",
    note: "Қашықтан және орнында қызмет көрсету",
    statLabel: "ТМД елі және өсіп келеді",
    countries: [
      { name: "Өзбекстан", note: "Бас офис · Ташкент" },
      { name: "Қазақстан", note: "Қашықтан + орнында" },
      { name: "Қырғызстан", note: "Қашықтан + орнында" },
      { name: "Тәжікстан", note: "Қашықтан" },
      { name: "Түрікменстан", note: "Қашықтан" },
      { name: "Әзірбайжан", note: "Қашықтан" },
      { name: "Ресей", note: "Қашықтан + серіктестер" },
      { name: "және басқалар", note: "Сұраныс бойынша" },
    ],
  },
  about: {
    eyebrow: "Біз туралы",
    title: "Сіздің толық IT-серіктесіңіз.",
    lead: "2022 жылы құрылған Softy LLC — Орталық Азия мен ТМД бойынша бизнеске, мемлекеттік мекемелер мен ұйымдарға корпоративтік бағдарламалық қамтаманы лицензиялау, орнату және басқарумен айналысатын ресми IT-интегратор.",
    body: [
      "Біз бағдарлама жасамаймыз — жетекші вендорлармен тікелей серіктестік арқасында клиенттеріміз кепілдендірілген өнімдерді ең қолайлы шартпен алады. Windows-тан iOS-қа, офис бағдарламаларынан AI құралдарына дейін — бәрі бір жерден.",
      "Softy шағын және орта кәсіпорындардан бастап ірі ұйымдарға дейінгі бизнеске бағытталған. Әр клиентке жеке көзқарас және бизнес көлеміне сәйкестендірілген шешімдер — біздің стандартты тәжірибеміз, ережеден ерекшелік емес.",
      "Біздің міндетіміз қарапайым: бір шарт, әр вендор, ешқандай ымырасыздық. Лицензия аудиті арқылы артық шығындарды табамыз, орнатамыз және тұрақты техникалық қолдау көрсетеміз.",
      "Softy-дің артында технологияға қызығушылықпен қарайтын команда тұр. Біздің мақсатымыз айқын: әр клиенттің жұмыс үдерістерін жеңілдету, оның бизнесінің дамуына үлес қосу және Өзбекстандағы ең ірі әрі инновациялық IT-компаниялардың біріне айналу. Сату емес — ұзақ мерзімді серіктестік біздің жұмыс үлгіміздің негізі.",
      "ТМД-ның 9+ елінде 200+ компания бізге сенеді. 92% клиенттер қайтуы, вендор сертификаттары және тұрақты техникалық құзыреттілік — бұл жай сандар емес, бұл сіздің сеніміңіз бен бизнесіңіздің өсуінің нәтижесі.",
    ],
  },
  testimonials: {
    eyebrow: "Пікірлер",
    title: "Ақылды компаниялар бізге сенеді.",
    items: [
      { quote: "Softy біздің лицензия шығынымызды бір тоқсанда 34%-ға қысқартты. Енді 12 есепшоттың орнына біреуін басқарамыз.", name: "Дилшод Каримов", role: "IT директор, орта нарық логистикасы", initials: "DK" },
      { quote: "Тегін аудит шынымен тегін болды және алғашқы айда $9,000-нан астам артық шығынды тапты. Бұл өте сирек кездеседі.", name: "Әзиза Рахимова", role: "Қаржы директоры (CFO), сауда желісі", initials: "AR" },
      { quote: "Windows-тан Mac-қа көшу 48 сағатта, еш үзіліссіз өтті. 24/7 қолдау шынымен жұмыс істейді.", name: "Сардор Юсупов", role: "Операция басшысы, fintech", initials: "SY" },
      { quote: "Бір шарт — Microsoft, Adobe және Autodesk. Сатып алу бөлімі Softy-ді ең жақсы шешіміміз деп атайды.", name: "Нигора Тошева", role: "Сатып алу жетекшісі, өндіріс", initials: "NT" },
    ],
  },
  faq: {
    eyebrow: "Сұрақ-жауап",
    title: "Жиі қойылатын сұрақтар",
    items: [
      { q: "Лицензиялар нақты әрі кепілдендірілген бе?", a: "Иә. Бәрі вендорлардан тікелей келген, ресми тіркелген және кепілдендірілген." },
      { q: "Қандай операциялық жүйелерді қолдайсыздар?", a: "Windows, macOS, Linux, Android, iOS — барлық негізгі платформалар." },
      { q: "ТМД-ның қай елдерінде жұмыс істейсіздер?", a: "Өзбекстан, Қазақстан, Қырғызстан, Тәжікстан, Түрікменстан, Әзірбайжан, Ресей және басқалар." },
      { q: "Төлем қалай жүргізіледі?", a: "Айлық немесе жылдық. UZS, RUB, USD-да төлеуге болады — банк аударымы, корпоративтік карта немесе Visa/Mastercard арқылы." },
      { q: "Орнату мен техникалық қолдауға қанша уақыт кетеді?", a: "Орнату әдетте 24–48 сағат ішінде. Техникалық қолдау 24/7 қолжетімді, SLA жауап уақыты 1 сағатқа дейін." },
      { q: "Тегін аудит дегеніміз не және ол қалай жұмыс істейді?", a: "Сіздің қазіргі бағдарламалық шығындарыңызды қарап шығамыз, артық шығындарды табамыз және кемінде 20% үнемдеу мүмкіндігін көрсетеміз." },
    ],
  },
  finalCta: {
    title: "IT-шығындарыңызды бүгін оңтайландырыңыз.",
    sub: "Тегін аудит алыңыз — бизнесіңізге ең қолайлы шешімді бізбен табыңыз. 24 сағат ішінде жауап береміз.",
    call: "Қоңырау шалу",
    telegram: "Telegram-да жазу",
  },
  contact: {
    eyebrow: "Байланыс",
    title: "Кел, сөйлесейік.",
    sub: "Тегін аудит үшін байланысыңыз — 24 сағат ішінде жауап береміз.",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    tgLabel: "Telegram",
    addrLabel: "Мекенжай",
    address: "81 Кичик Халқа жолы, Фирдавсий МФЙ, Юнусабад, 100084, Ташкент",
    hoursLabel: "Жұмыс уақыты",
    hours: "Дс–Жм 9:00–19:00 · ТМД техникалық қолдау 24/7",
    form: {
      name: "Аты",
      namePh: "Атыңыз",
      phone: "Телефон",
      phonePh: "+998 ...",
      email: "Email",
      emailPh: "email@kompaniya.uz",
      message: "Хабарлама",
      messagePh: "Қандай бағдарлама не қызмет қажет?",
      submit: "Тегін аудит алыңыз",
      sending: "Жіберілуде…",
      success: "Рақмет! Өтінішіңіз қабылданды — 24 сағат ішінде хабарласамыз.",
      error: "Қателік шықты. Қайталап көріңіз немесе Telegram арқылы жазыңыз.",
    },
  },
  footer: {
    tagline: "Сіздің толық IT-серіктесіңіз — бағдарламадан жабдыққа дейін. Бір шарт. Әр вендор.",
    servicesCol: "Қызметтер",
    companyCol: "Компания",
    contactCol: "Байланыс",
    rights: "Барлық құқықтар қорғалған.",
  },
};

/* ── KYRGYZ ────────────────────────────────────────────────── */
const ky: Content = {
  meta: {
    title: "Softy LLC — Расмий IT-интегратор | Лицензиялар КМШ боюнча",
    description:
      "Бардык операциялык системаларга расмий лицензияланган программалар, жазылууну башкаруу, орнотуу жана 24/7 техникалык колдоо. 200+ кардар. 92% кайтуу. Акысыз аудит алыңыз.",
  },
  pageMeta: {
    home: {
      title: "Softy LLC — Расмий IT-интегратор | Лицензиялар КМШ боюнча",
      description: "Вендорлордон түз расмий программалык лицензиялар, жазылууну башкаруу, орнотуу жана 24/7 колдоо. 200+ кардар, 92% кайтуу. Акысыз аудит алыңыз.",
    },
    services: {
      title: "Кызматтар — Лицензия, жазылуу, орнотуу | Softy LLC",
      description: "Расмий программалык лицензиялар, жазылууларды башкаруу, орнотуу жана 24/7 техникалык колдоо — вендорлордон түз, бүт КМШ боюнча.",
    },
    solutions: {
      title: "Чечимдер — Кантип иштейбиз | Softy LLC",
      description: "Суроо-талаптан аудитке, жеткирүүдөн туруктуу колдоого чейин — Softy-дин далилденген, ачык 4 кадамдуу өнөктөштүк процесси.",
    },
    catalog: {
      title: "Каталог — 20+ вендор продуктулары | Softy LLC",
      description: "Microsoft, Adobe, Kaspersky, Autodesk, Veeam, Fortinet жана башка расмий вендор продуктулары категориялар боюнча — антивирустар, офис, дизайн, тармак коопсуздугу, резерв көчүрмө.",
    },
    coverage: {
      title: "КМШ камтуусу — 9+ өлкө | Softy LLC",
      description: "Өзбекстан, Казакстан, Кыргызстан жана башка КМШ өлкөлөрүндө лицензия, орнотуу жана 24/7 техникалык колдоо — бирдей сапатта.",
    },
    about: {
      title: "Биз жөнүндө — IT-интегратор | Softy LLC",
      description: "Softy LLC — расмий IT-интегратор. 200+ кардар, 92% кайтуу, 9+ өлкө. Вендорлордон түз лицензия, жазылуу жана кызмат.",
    },
    contact: {
      title: "Байланыш — Акысыз аудит алыңыз | Softy LLC",
      description: "Акысыз аудит алыңыз — 24 саат ичинде жооп беребиз. Телефон, Telegram же форма аркылуу байланышыңыз. Ташкент, КМШ боюнча.",
    },
  },
  common: { learnMore: "Толугураак", allServices: "Бардык кызматтар" },
  nav: { services: "Кызматтар", solutions: "Чечимдер", catalog: "Каталог", coverage: "КМШ камтуусу", about: "Биз жөнүндө", contact: "Байланыш", cta: "Акысыз аудит", language: "Тил" },
  hero: {
    eyebrow: "Расмий IT-интегратор · КМШ боюнча",
    titleA: "Бизнесиңиз үчүн",
    titleAccent: "толук IT-чечимдер.",
    lead: "Булут кызматтарынан жана киберкоопсуздуктан инженердик программаларга чейин — алдыңкы дүйнөлүк вендорлордун расмий лицензиялары. Киргизебиз жана колдойбуз.",
    ctaPrimary: "Акысыз аудит алыңыз",
    ctaSecondary: "Өнөктөштөрдү көрүү",
    trust: ["200+ компания бизге ишенет", "9 өлкө", "24/7 колдоо"],
  },
  vendors: { label: "Расмий өнөктөштүк — алдыңкы вендорлор менен түз" },
  partners: { eyebrow: "Өнөктөштөр", title: "Биздин расмий вендор-өнөктөштөрүбүз", sub: "Алдыңкы эл аралык вендорлор менен түз өнөктөштүк — ар бир лицензия кепилденген жана расмий.", showAll: "Бардык вендорлорду көрсөтүү", showLess: "Жыйноо" },
  catalog: {
    eyebrow: "Каталог",
    title: "Программалык продуктулар",
    sub: "20+ расмий вендор продукту категориялар боюнча — антивирустар, офис, дизайн, тармак коопсуздугу жана башкалар.",
    allCategories: "Бардык категориялар",
    productsLabel: "Продуктулар",
    featuresLabel: "Негизги мүмкүнчүлүктөр",
    osLabel: "Платформалар",
    audienceLabel: "Кимге арналган",
    ctaQuote: "Баа сурап билүү",
    ctaBack: "Каталогго кайтуу",
    partnerOf: "Softy LLC — расмий өнөктөш",
    vendorLabel: "Вендор",
    productCount: (n) => (n === 1 ? "1 продукт" : `${n} продукт`),
    categories: {
      office: { name: "Офис жана бизнес", desc: "Microsoft 365, Adobe Creative Cloud, Bitrix24, ClickUp — күнүмдүк бизнес операциялары үчүн." },
      antivirus: { name: "Антивирус жана endpoint", desc: "Kaspersky, Bitdefender, ESET — бизнес үчүн көп катмарлуу endpoint коргоо." },
      design: { name: "Дизайн жана инженерия", desc: "Autodesk, IDEA StatiCa, ИндорСофт — архитектура, BIM, CAD жана визуализация." },
      networkSecurity: { name: "Тармак коопсуздугу", desc: "Fortinet, Palo Alto, GFI, Falcongaze, SSL — NGFW, DLP жана тармак коргоо." },
      backupTools: { name: "Резерв жана куралдар", desc: "Veeam, IBM, JetBrains, Passware, MyQ — резерв көчүрмө, инфратүзүм жана кесипкөй куралдар." },
    },
  },
  team: {
    eyebrow: "Команда",
    title: "Softy-нин артындагы адамдар",
    members: [
      { name: "Умижон Фатуллаев", role: "Негиздөөчү жана Башкы аткаруучу директор", bio: "Softy LLC негиздөөчүсү жана стратегиялык жетекчиси. Компания өнүгүүсүн башкарат, операцияларды жолго коёт жана кардар тажрыйбасына өзгөчө көңүл бөлөт." },
      { name: "Якубхон Абдурахимов", role: "Программалоочу-адис", bio: "Программалоо жана команда менен иштөө боюнча тажрыйбалуу адис. Кардар интеграцияларын жана техникалык чечимдерди ишке ашырат." },
      { name: "Шохрух Солохов", role: "Сатуу менеджери", bio: "Сатуу жана кардарлар менен иштөө боюнча адис. Компаниялардын муктаждыктарын изилдеп, ылайыктуу лицензияларды жана чечимдерди тандоого жардам берет." },
    ],
  },
  values: {
    eyebrow: "Баалуулуктар",
    title: "Биздин иш принциптерибиз",
    items: [
      { title: "Кардарга берилгендик", desc: "Ар бир кардар үчүн жеке мамиле. SMB-ден ири бизнеске чейин — сиздин ишиңизди өзүбүздүкүндөй кабылдайбыз." },
      { title: "Расмий жана ачык", desc: "Бир гана вендордон түз келген лицензиялар. Эч кандай жашыруун төлөмдөр же шектүү келишимдер жок." },
      { title: "Техникалык кесипкөйлүк", desc: "Сертификаттан өткөн команда, вендор өнөктөштүк программалары жана дайыма үйрөнүү — сапат кепили." },
      { title: "Туруктуу колдоо", desc: "Сатуудан кийин жоголуп кетпейбиз. 24/7 колдоо, көчүрүү жана үйрөтүү — баары бир өнөктөштөн." },
    ],
  },
  problem: {
    eyebrow: "Көйгөй",
    title: "Компанияңыз программалык камсыздоого жыл сайын керектүүдөн ашык жумшайт.",
    figure: "100+",
    figureCaption: "орточо компаниядагы программа жана жазылуулар саны",
    sub: "Себеби жөнөкөй — туура лицензия, туура вендордон, туура шартта. Биз ар бир лицензияңызды, ар бир боштукту жана ар бир ашык чыгымды табабыз.",
  },
  pillars: {
    eyebrow: "Биз эмне кылабыз",
    title: "Үч мамыча. Бир келишим.",
    items: [
      {
        num: "01",
        title: "Программалык лицензиялоо",
        desc: "Операциялык системалардан AI куралдарына чейин — вендорлордон түз келген расмий лицензиялар. Windows, macOS, Adobe, Autodesk, OpenAI, Anthropic жана башкалар.",
        bullets: ["Бардык негизги платформалар жана вендорлор", "Корпоративдик жана окуу лицензиялары", "Вендор кепилдиги менен 100% расмий"],
      },
      {
        num: "02",
        title: "Жазылууларды башкаруу",
        desc: "Бир эсеп — 15 эмес. Айлык жана жылдык жазылууларды тариздейбиз, оптималдаштырабыз жана жаңыртуу мөөнөтүн көзөмөлдөйбүз.",
        bullets: ["Лицензия аудити (орточо 20–40% үнөм)", "Авто-жаңыртуу жана бириктирүү", "Көлөм боюнча арзандатуу сүйлөшүүлөрү"],
      },
      {
        num: "03",
        title: "Орнотуу жана 24/7 колдоо",
        desc: "Ташкентте жеринде же бүт КМШ боюнча алыстан орнотуу, көчүрүү жана туруктуу техникалык колдоо — SLA менен кепилденген.",
        bullets: ["24–48 саат ичинде орнотуу", "Көчүрүү: legacy → cloud, Windows → Mac", "SLA жооп убактысы 1 саатка чейин"],
      },
    ],
  },
  process: {
    eyebrow: "Кантип иштейбиз",
    title: "Далилденген, ачык процесс.",
    sub: "Кайрылуудан туруктуу колдоого чейин — ар бир кадам так.",
    steps: [
      { num: "01", title: "Суроо-талап", desc: "Бизге техникалык стегиңиз кандай экенин айтыңыз. Бир маек жетиштүү." },
      { num: "02", title: "Аудит", desc: "Ар бир лицензияны, ар бир боштукту жана ар бир ашык чыгымды картага түшүрөбүз." },
      { num: "03", title: "Жеткирүү", desc: "Сүйлөшөбүз, лицензиялайбыз жана орнотобуз — сиз эч нерсе ойлобойсуз." },
      { num: "04", title: "Колдоо", desc: "Көзөмөлдөйбүз, жаңыртабыз жана жооп беребиз. Дайыма." },
    ],
  },
  stats: {
    eyebrow: "Сандарда",
    items: [
      { value: 200, suffix: "+", label: "Активдүү кардарлар" },
      { value: 92, suffix: "%", label: "Кардарлардын кайтуусу (3+ жыл)" },
      { value: 26, label: "Расмий вендорлор" },
      { value: 24, suffix: "/7", label: "Колдоо жана коштоо" },
    ],
  },
  engagement: {
    eyebrow: "Өнөктөштүк моделдери",
    title: "Бизнесиңизге ылайык иштөө ыкмасы.",
    sub: "Биз программа жасабайбыз — вендорлордон эң жакшы шартта жеткиребиз, орнотобуз жана колдойбуз. Баа аудиттен кийин жеке белгиленет.",
    customLabel: "Келишилет",
    note: "Так баа аудитке жана лицензия көлөмүнө байланыштуу",
    models: [
      {
        name: "Лицензия жана орнотуу",
        desc: "Бир жолку муктаждык үчүн: керектүү расмий лицензияларды табабыз, сатып алабыз жана орнотобуз.",
        features: ["Вендордон түз лицензия", "Орнотуу жана конфигурация", "Көчүрүү колдоосу", "Вендор кепилдиги"],
        cta: "Сунуш алуу",
      },
      {
        name: "Жазылуу башкаруу",
        desc: "Бардык жазылууларыңызды биз башкарабыз, оптималдаштырабыз жана жаңыртабыз — бир эсептен.",
        features: ["Лицензия аудити (20–40% үнөм)", "Авто-жаңыртуу жана бириктирүү", "Көлөм боюнча арзандатуу", "Жеке менеджер"],
        cta: "Акысыз аудит",
        tag: "Эң ылайыктуу",
        highlight: true,
      },
      {
        name: "Толук IT-өнөктөш",
        desc: "Ири уюмдар үчүн: лицензия, орнотуу жана 24/7 башкаруу — SLA менен.",
        features: ["Чексиз лицензия жана вендорлор", "Жеке SLA · жеринде инженер", "Чейректик бизнес-талдоо", "Сатып алууну автоматташтыруу"],
        cta: "Байланышуу",
      },
    ],
  },
  coverage: {
    eyebrow: "География",
    title: "Бүт КМШ боюнча кызмат.",
    sub: "Лицензия, жазылуу, орнотуу жана техникалык колдоону бирдей сапатта — жергиликтүү төлөм жана колдоо мүмкүнчүлүгү менен.",
    note: "Алыстан жана жеринде кызмат көрсөтүү",
    statLabel: "КМШ өлкөсү жана өсүүдө",
    countries: [
      { name: "Өзбекстан", note: "Башкы офис · Ташкент" },
      { name: "Казакстан", note: "Алыстан + жеринде" },
      { name: "Кыргызстан", note: "Алыстан + жеринде" },
      { name: "Тажикстан", note: "Алыстан" },
      { name: "Түркмөнстан", note: "Алыстан" },
      { name: "Азербайжан", note: "Алыстан" },
      { name: "Россия", note: "Алыстан + өнөктөштөр" },
      { name: "жана башкалар", note: "Суроо боюнча" },
    ],
  },
  about: {
    eyebrow: "Биз жөнүндө",
    title: "Сиздин толук IT-өнөктөшүңүз.",
    lead: "2022-жылы түзүлгөн Softy LLC — Борбордук Азия жана КМШ боюнча бизнес, мамлекеттик мекемелер жана уюмдар үчүн корпоративдик программалык камсыздоону лицензиялоо, орнотуу жана башкаруу менен алектенген расмий IT-интегратор.",
    body: [
      "Биз программа жасабайбыз — алдыңкы вендорлор менен түз өнөктөштүктүн аркасында кардарларыбыз кепилденген өнүмдөрдү эң ыңгайлуу шартта алышат. Windows-тон iOS-ко, офис программаларынан AI куралдарына чейин — баары бир жерден.",
      "Softy чакан жана орто ишканалардан ири уюмдарга чейинки бизнеске багытталган. Ар бир кардарга жеке мамиле жана бизнес көлөмүнө ылайыкталган чечимдер — биз үчүн стандарттык тажрыйба, эрежеден өзгөчө учур эмес.",
      "Биздин милдетибиз жөнөкөй: бир келишим, ар бир вендор, эч кандай жеңилдик жок. Лицензия аудити аркылуу ашык чыгымдарды табабыз, орнотобуз жана туруктуу техникалык колдоо көрсөтөбүз.",
      "Softy-нин артында технологияга кызыгуу менен караган команда турат. Биздин максатыбыз так: ар бир кардардын иш процесстерин жөнөкөйлөтүү, анын бизнесинин өнүгүшүнө салым кошуу жана Өзбекстандагы эң ири жана инновациялык IT-компаниялардын бирине айлануу. Сатуу эмес — узак мөөнөттүү өнөктөштүк биздин иш моделибиздин негизи.",
      "КМШнын 9+ өлкөсүндө 200+ компания бизге ишенет. 92% кардарлардын кайтуусу, вендор сертификаттары жана туруктуу техникалык компетенциялар — бул жөн эле сандар эмес, бул сиздин ишенимиңиздин жана бизнесиңиздин өсүшүнүн натыйжасы.",
    ],
  },
  testimonials: {
    eyebrow: "Пикирлер",
    title: "Акылдуу компаниялар бизге ишенет.",
    items: [
      { quote: "Softy биздин лицензия чыгымыбызды бир чейректе 34%га кыскартты. Эми 12 эсептин ордуна бирөөнү башкарабыз.", name: "Дилшод Каримов", role: "IT директору, орто рынок логистикасы", initials: "DK" },
      { quote: "Акысыз аудит чындап акысыз болду жана биринчи айда $9,000ден ашык ашык чыгымды тапты. Бул өтө сейрек кездешет.", name: "Азиза Рахимова", role: "Каржы директору (CFO), соода тармагы", initials: "AR" },
      { quote: "Windows-тон Mac-ка көчүү 48 саатта, эч үзгүлтүксүз өттү. 24/7 колдоо чындап иштейт.", name: "Сардор Юсупов", role: "Операция башчысы, fintech", initials: "SY" },
      { quote: "Бир келишим — Microsoft, Adobe жана Autodesk. Сатып алуу бөлүмү Softy-ди эң жакшы чечимибиз деп атайт.", name: "Нигора Тошева", role: "Сатып алуу жетекчиси, өндүрүш", initials: "NT" },
    ],
  },
  faq: {
    eyebrow: "Суроо-жооп",
    title: "Көп берилүүчү суроолор",
    items: [
      { q: "Лицензиялар чыныгыбы жана кепилденгенби?", a: "Ооба. Баары вендорлордон түз келген, расмий катталган жана кепилденген." },
      { q: "Кайсы операциялык системаларды колдойсуздар?", a: "Windows, macOS, Linux, Android, iOS — бардык негизги платформалар." },
      { q: "КМШнын кайсы өлкөлөрүндө иштейсиздер?", a: "Өзбекстан, Казакстан, Кыргызстан, Тажикстан, Түркмөнстан, Азербайжан, Россия жана башкалар." },
      { q: "Төлөм кантип жүргүзүлөт?", a: "Айлык же жылдык. UZS, RUB, USD менен төлөөгө болот — банк которуу, корпоративдик карта же Visa/Mastercard аркылуу." },
      { q: "Орнотуу жана техникалык колдоого канча убакыт кетет?", a: "Орнотуу адатта 24–48 саат ичинде. Техникалык колдоо 24/7 жеткиликтүү, SLA жооп убактысы 1 саатка чейин." },
      { q: "Акысыз аудит деген эмне жана ал кантип иштейт?", a: "Сиздин азыркы программалык чыгымдарыңызды карап чыгабыз, ашык чыгымдарды табабыз жана жок дегенде 20% үнөмдөө мүмкүнчүлүгүн көрсөтөбүз." },
    ],
  },
  finalCta: {
    title: "IT-чыгымдарыңызды бүгүн оптималдаштырыңыз.",
    sub: "Акысыз аудит алыңыз — бизнесиңизге эң ылайыктуу чечимди биз менен табыңыз. 24 саат ичинде жооп беребиз.",
    call: "Чалуу",
    telegram: "Telegram-га жазуу",
  },
  contact: {
    eyebrow: "Байланыш",
    title: "Келиңиз, сүйлөшөлү.",
    sub: "Акысыз аудит үчүн байланышыңыз — 24 саат ичинде жооп беребиз.",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    tgLabel: "Telegram",
    addrLabel: "Дарек",
    address: "81 Кичик Халка жолу, Фирдавсий МФЙ, Юнусабад, 100084, Ташкент",
    hoursLabel: "Иш убактысы",
    hours: "Дш–Жм 9:00–19:00 · КМШ техникалык колдоо 24/7",
    form: {
      name: "Аты",
      namePh: "Атыңыз",
      phone: "Телефон",
      phonePh: "+998 ...",
      email: "Email",
      emailPh: "email@kompaniya.uz",
      message: "Билдирүү",
      messagePh: "Кайсы программа же кызмат керек?",
      submit: "Акысыз аудит алыңыз",
      sending: "Жөнөтүлүүдө…",
      success: "Рахмат! Сурамыңыз кабыл алынды — 24 саат ичинде байланышабыз.",
      error: "Ката кетти. Кайра аракет кылыңыз же Telegram аркылуу жазыңыз.",
    },
  },
  footer: {
    tagline: "Сиздин толук IT-өнөктөшүңүз — программадан жабдыкка чейин. Бир келишим. Ар бир вендор.",
    servicesCol: "Кызматтар",
    companyCol: "Компания",
    contactCol: "Байланыш",
    rights: "Бардык укуктар корголгон.",
  },
};

/* ── TAJIK ─────────────────────────────────────────────────── */
const tg: Content = {
  meta: {
    title: "Softy LLC — Интегратори расмии IT | Литсензияҳо дар ИДМ",
    description:
      "Барномаҳои литсензионии расмӣ барои ҳама системаҳои оператсионӣ, идоракунии обуна, насб ва дастгирии техникии 24/7. 200+ муштарӣ. 92% бозгашт. Аудити ройгон гиред.",
  },
  pageMeta: {
    home: {
      title: "Softy LLC — Интегратори расмии IT | Литсензияҳо дар ИДМ",
      description: "Литсензияҳои барномавии расмӣ мустақиман аз вендорҳо, идоракунии обуна, насб ва дастгирии 24/7. 200+ муштарӣ, 92% бозгашт. Аудити ройгон гиред.",
    },
    services: {
      title: "Хидматҳо — Литсензия, обуна, насб | Softy LLC",
      description: "Литсензияҳои барномавии расмӣ, идоракунии обунаҳо, насб ва дастгирии техникии 24/7 — мустақиман аз вендорҳо, дар саросари ИДМ.",
    },
    solutions: {
      title: "Ҳалҳо — Чӣ тавр кор мекунем | Softy LLC",
      description: "Аз дархост то аудит, аз таҳвил то дастгирии доимӣ — раванди исботшуда ва шаффофи 4-марҳилаии ҳамкории Softy.",
    },
    catalog: {
      title: "Каталог — 20+ маҳсулоти вендорӣ | Softy LLC",
      description: "Microsoft, Adobe, Kaspersky, Autodesk, Veeam, Fortinet ва дигар маҳсулоти расмии вендорӣ аз рӯи категорияҳо — антивирус, офис, дизайн, амнияти шабака, нусхабардорӣ.",
    },
    coverage: {
      title: "Фарогирии ИДМ — 9+ кишвар | Softy LLC",
      description: "Дар Ӯзбекистон, Қазоқистон, Қирғизистон ва дигар кишварҳои ИДМ литсензия, насб ва дастгирии техникии 24/7 — бо сифати яксон.",
    },
    about: {
      title: "Дар бораи мо — Интегратори IT | Softy LLC",
      description: "Softy LLC — интегратори расмии IT. 200+ муштарӣ, 92% бозгашт, 9+ кишвар. Литсензия, обуна ва хидмат мустақиман аз вендорҳо.",
    },
    contact: {
      title: "Тамос — Аудити ройгон гиред | Softy LLC",
      description: "Аудити ройгон гиред — дар тӯли 24 соат ҷавоб медиҳем. Тавассути телефон, Telegram ё форма тамос гиред. Тошканд, дар саросари ИДМ.",
    },
  },
  common: { learnMore: "Муфассал", allServices: "Ҳамаи хидматҳо" },
  nav: { services: "Хидматҳо", solutions: "Ҳалҳо", catalog: "Каталог", coverage: "Фарогирии ИДМ", about: "Дар бораи мо", contact: "Тамос", cta: "Аудити ройгон", language: "Забон" },
  hero: {
    eyebrow: "Интегратори расмии IT · дар саросари ИДМ",
    titleA: "Барои бизнеси шумо —",
    titleAccent: "ҳалҳои мукаммали IT.",
    lead: "Аз хадамоти абрӣ ва амнияти киберӣ то нармафзори муҳандисӣ — литсензияҳои расмии вендорҳои пешбари ҷаҳонӣ. Ҷорӣ мекунем ва дастгирӣ мекунем.",
    ctaPrimary: "Аудити ройгон гиред",
    ctaSecondary: "Шариконро дидан",
    trust: ["200+ ширкат ба мо бовар мекунанд", "9 кишвар", "Дастгирии 24/7"],
  },
  vendors: { label: "Шарикии расмӣ — мустақиман бо вендорҳои пешсаф" },
  partners: { eyebrow: "Шарикон", title: "Шарикони расмии вендории мо", sub: "Шарикии мустақим бо вендорҳои пешбари ҷаҳонӣ — ҳар литсензия кафолатнок ва расмӣ.", showAll: "Ҳамаи вендорҳоро нишон додан", showLess: "Печонидан" },
  catalog: {
    eyebrow: "Каталог",
    title: "Маҳсулоти барномавӣ",
    sub: "20+ маҳсулоти расмии вендорӣ аз рӯи категорияҳо — антивирус, офис, дизайн, амнияти шабака ва дигарон.",
    allCategories: "Ҳамаи категорияҳо",
    productsLabel: "Маҳсулот",
    featuresLabel: "Имкониятҳои асосӣ",
    osLabel: "Платформаҳо",
    audienceLabel: "Барои кӣ",
    ctaQuote: "Дархости нарх",
    ctaBack: "Бозгашт ба каталог",
    partnerOf: "Softy LLC — шарики расмӣ",
    vendorLabel: "Вендор",
    productCount: (n) => (n === 1 ? "1 маҳсулот" : `${n} маҳсулот`),
    categories: {
      office: { name: "Офис ва бизнес", desc: "Microsoft 365, Adobe Creative Cloud, Bitrix24, ClickUp — барои амалиёти ҳаррӯзаи бизнес." },
      antivirus: { name: "Антивирус ва endpoint", desc: "Kaspersky, Bitdefender, ESET — ҳифзи бисёрқабатаи endpoint барои бизнес." },
      design: { name: "Дизайн ва муҳандисӣ", desc: "Autodesk, IDEA StatiCa, ИндорСофт — меъморӣ, BIM, CAD ва тасвирсозӣ." },
      networkSecurity: { name: "Амнияти шабака", desc: "Fortinet, Palo Alto, GFI, Falcongaze, SSL — NGFW, DLP ва ҳифзи шабака." },
      backupTools: { name: "Нусхабардорӣ ва абзорҳо", desc: "Veeam, IBM, JetBrains, Passware, MyQ — нусхабардорӣ, инфрасохтор ва абзорҳои касбӣ." },
    },
  },
  team: {
    eyebrow: "Даста",
    title: "Одамоне, ки дар паси Softy ҳастанд",
    members: [
      { name: "Умидҷон Фатуллаев", role: "Муассис ва Директори Иҷроия", bio: "Муассис ва роҳбари стратегии Softy LLC. Рушди ширкатро идора мекунад, амалиётро ба роҳ мемонад ва ба таҷрибаи беҳтарини муштарӣ диққат медиҳад." },
      { name: "Яқубхон Абдураҳимов", role: "Барномасоз-мутахассис", bio: "Мутахассиси ботаҷрибаи барномасозӣ ва кор бо даста. Интегратсияҳои муштариён ва ҳалли техникиро амалӣ мекунад." },
      { name: "Шоҳрух Солохов", role: "Менеҷери фурӯш", bio: "Мутахассиси фурӯш ва кор бо муштариён. Ниёзҳои ширкатҳоро меомӯзад ва дар интихоби литсензияву ҳалли мувофиқ кӯмак мекунад." },
    ],
  },
  values: {
    eyebrow: "Арзишҳо",
    title: "Принсипҳои кории мо",
    items: [
      { title: "Содиқӣ ба муштарӣ", desc: "Муносибати инфиродӣ барои ҳар муштарӣ. Аз SMB то бизнеси калон — кори шуморо чун кори худ қабул мекунем." },
      { title: "Расмӣ ва шаффоф", desc: "Танҳо литсензияҳои мустақиман аз вендор. Ҳеҷ пардохти пинҳон ё аҳди шубҳанок нест." },
      { title: "Бартарии техникӣ", desc: "Дастаи сертификатнок, барномаҳои шарикии вендорӣ ва омӯзиши доимӣ — кафолати сифат." },
      { title: "Дастгирии доимӣ", desc: "Пас аз фурӯш ғоиб намешавем. Дастгирии 24/7, муҳоҷират ва омӯзиш — ҳамааш аз як шарик." },
    ],
  },
  problem: {
    eyebrow: "Мушкил",
    title: "Ширкати шумо ҳар сол барои нармафзор аз ниёз зиёдтар сарф мекунад.",
    figure: "100+",
    figureCaption: "шумораи барномаву обунаҳо дар ширкати миёна",
    sub: "Сабаб содда аст — литсензияи дуруст, аз вендори дуруст, бо шарти дуруст. Мо ҳар литсензия, ҳар холигоҳ ва ҳар хароҷоти зиёдатиро меёбем.",
  },
  pillars: {
    eyebrow: "Мо чӣ мекунем",
    title: "Се сутун. Як шартнома.",
    items: [
      {
        num: "01",
        title: "Литсензиякунонии барномавӣ",
        desc: "Аз системаҳои оператсионӣ то абзорҳои AI — литсензияҳои расмии мустақиман аз вендорҳо. Windows, macOS, Adobe, Autodesk, OpenAI, Anthropic ва дигарон.",
        bullets: ["Ҳама платформаҳо ва вендорҳои асосӣ", "Литсензияҳои корпоративӣ ва таълимӣ", "Бо кафолати вендор 100% расмӣ"],
      },
      {
        num: "02",
        title: "Идоракунии обунаҳо",
        desc: "Як ҳисоб — на 15-то. Обунаҳои моҳона ва солонаро ба расмият медарорем, беҳина мекунем ва мӯҳлати навсозиро назорат мекунем.",
        bullets: ["Аудити литсензия (миёна 20–40% сарфа)", "Навсозии худкор ва муттаҳидсозӣ", "Гуфтушуниди тахфиф аз рӯи ҳаҷм"],
      },
      {
        num: "03",
        title: "Насб ва дастгирии 24/7",
        desc: "Дар Тошканд дар ҷой ё дар саросари ИДМ аз дур насб, муҳоҷират ва дастгирии доимии техникӣ — бо SLA кафолатнок.",
        bullets: ["Насб дар тӯли 24–48 соат", "Муҳоҷират: legacy → cloud, Windows → Mac", "Вақти ҷавоби SLA то 1 соат"],
      },
    ],
  },
  process: {
    eyebrow: "Чӣ тавр кор мекунем",
    title: "Раванди исботшуда ва шаффоф.",
    sub: "Аз дархост то дастгирии доимӣ — ҳар марҳила равшан.",
    steps: [
      { num: "01", title: "Дархост", desc: "Ба мо гӯед, ки стеки техникии шумо чӣ гуна аст. Як сӯҳбат кофист." },
      { num: "02", title: "Аудит", desc: "Ҳар литсензия, ҳар холигоҳ ва ҳар хароҷоти зиёдатиро харита мекунем." },
      { num: "03", title: "Таҳвил", desc: "Гуфтушунид мекунем, литсензия медиҳем ва насб мекунем — шумо чизе фикр намекунед." },
      { num: "04", title: "Дастгирӣ", desc: "Назорат мекунем, нав мекунем ва ҷавоб медиҳем. Ҳамеша." },
    ],
  },
  stats: {
    eyebrow: "Дар рақамҳо",
    items: [
      { value: 200, suffix: "+", label: "Муштариёни фаъол" },
      { value: 92, suffix: "%", label: "Бозгашти муштариён (3+ сол)" },
      { value: 26, label: "Вендорҳои расмӣ" },
      { value: 24, suffix: "/7", label: "Дастгирӣ ва ҳамроҳӣ" },
    ],
  },
  engagement: {
    eyebrow: "Моделҳои ҳамкорӣ",
    title: "Тарзи кор мувофиқи бизнеси шумо.",
    sub: "Мо барнома намесозем — аз вендорҳо бо беҳтарин шартҳо мерасонем, насб мекунем ва дастгирӣ мекунем. Нарх пас аз аудит ба таври инфиродӣ муайян мешавад.",
    customLabel: "Бо мувофиқа",
    note: "Нархи дақиқ ба аудит ва ҳаҷми литсензия вобаста аст",
    models: [
      {
        name: "Литсензия ва насб",
        desc: "Барои эҳтиёҷи якдафъаина: литсензияҳои расмии заруриро меёбем, мехарем ва насб мекунем.",
        features: ["Литсензия мустақиман аз вендор", "Насб ва танзим", "Дастгирии муҳоҷират", "Кафолати вендор"],
        cta: "Гирифтани таклиф",
      },
      {
        name: "Идоракунии обуна",
        desc: "Ҳама обунаҳои шуморо мо идора мекунем, беҳина мекунем ва нав мекунем — аз як ҳисоб.",
        features: ["Аудити литсензия (20–40% сарфа)", "Навсозии худкор ва муттаҳидсозӣ", "Тахфиф аз рӯи ҳаҷм", "Менеҷери шахсӣ"],
        cta: "Аудити ройгон",
        tag: "Беҳтарин мувофиқ",
        highlight: true,
      },
      {
        name: "Шарики пурраи IT",
        desc: "Барои ташкилотҳои калон: литсензия, насб ва идоракунии 24/7 — бо SLA.",
        features: ["Литсензия ва вендорҳои бемаҳдуд", "SLA-и инфиродӣ · муҳандис дар ҷой", "Таҳлили бизнесии семоҳа", "Автоматикунонии харид"],
        cta: "Тамос",
      },
    ],
  },
  coverage: {
    eyebrow: "Ҷуғрофия",
    title: "Хидмат дар саросари ИДМ.",
    sub: "Литсензия, обуна, насб ва дастгирии техникиро бо сифати яксон — бо имкони пардохт ва дастгирии маҳаллӣ.",
    note: "Хидмат аз дур ва дар ҷой",
    statLabel: "кишвари ИДМ ва рӯ ба афзоиш",
    countries: [
      { name: "Ӯзбекистон", note: "Дафтари марказӣ · Тошканд" },
      { name: "Қазоқистон", note: "Аз дур + дар ҷой" },
      { name: "Қирғизистон", note: "Аз дур + дар ҷой" },
      { name: "Тоҷикистон", note: "Аз дур" },
      { name: "Туркманистон", note: "Аз дур" },
      { name: "Озарбойҷон", note: "Аз дур" },
      { name: "Русия", note: "Аз дур + шарикон" },
      { name: "ва дигарон", note: "Аз рӯи дархост" },
    ],
  },
  about: {
    eyebrow: "Дар бораи мо",
    title: "Шарики пурраи IT-и шумо.",
    lead: "Соли 2022 таъсисёфта, Softy LLC — интегратори расмии IT, ки бо литсензиякунонӣ, насб ва идоракунии таъминоти барномавии корпоративӣ барои бизнес, муассисаҳои давлатӣ ва ташкилотҳо дар саросари Осиёи Марказӣ ва ИДМ машғул аст.",
    body: [
      "Мо барнома намесозем — ба шарофати шарикии мустақим бо вендорҳои пешсаф муштариёни мо маҳсулоти кафолатнокро бо беҳтарин шартҳо мегиранд. Аз Windows то iOS, аз барномаҳои офисӣ то абзорҳои AI — ҳамааш аз як ҷой.",
      "Softy барои бизнес — аз корхонаҳои хурду миёна то ташкилотҳои калон таҳия шудааст. Муносибати инфиродӣ барои ҳар муштарӣ ва ҳалҳои мутобиқшуда ба ҳаҷми бизнес — амалияи стандартии мост, на истисно аз қоида.",
      "Вазифаи мо содда аст: як шартнома, ҳар вендор, ҳеҷ муросо. Тавассути аудити литсензия хароҷоти зиёдатиро меёбем, насб мекунем ва дастгирии доимии техникӣ мерасонем.",
      "Дар паси Softy дастае истодааст, ки ба технология бо шавқ муносибат мекунад. Ҳадафи мо равшан аст: содда кардани раванди кории ҳар муштарӣ, саҳмгузорӣ дар рушди бизнеси ӯ ва табдил ёфтан ба яке аз бузургтарин ва навоваронатарин ширкатҳои IT-и Ӯзбекистон. На фурӯш — балки шарикии дарозмуддат асоси модели кории мост.",
      "Дар 9+ кишвари ИДМ 200+ ширкат ба мо бовар мекунанд. 92% бозгашти муштариён, сертификатҳои вендорӣ ва салоҳияти техникии устувор — ин танҳо рақамҳо нестанд, балки натиҷаи боварии шумо ва рушди бизнеси шумост.",
    ],
  },
  testimonials: {
    eyebrow: "Шарҳҳо",
    title: "Ширкатҳои доно ба мо бовар мекунанд.",
    items: [
      { quote: "Softy хароҷоти литсензияи моро дар як семоҳа 34% коҳиш дод. Акнун ба ҷои 12 ҳисоб якторо идора мекунем.", name: "Дилшод Каримов", role: "Директори IT, логистикаи бозори миёна", initials: "DK" },
      { quote: "Аудити ройгон воқеан ройгон буд ва дар моҳи аввал зиёда аз $9,000 хароҷоти зиёдатиро ёфт. Ин хеле нодир аст.", name: "Азиза Раҳимова", role: "Директори молиявӣ (CFO), шабакаи савдо", initials: "AR" },
      { quote: "Муҳоҷират аз Windows ба Mac дар 48 соат, бидуни ягон танаффус анҷом ёфт. Дастгирии 24/7 воқеан кор мекунад.", name: "Сардор Юсупов", role: "Сардори амалиёт, fintech", initials: "SY" },
      { quote: "Як шартнома — Microsoft, Adobe ва Autodesk. Шуъбаи харидорӣ Softy-ро беҳтарин қарори мо меномад.", name: "Нигора Тошева", role: "Роҳбари харид, истеҳсолот", initials: "NT" },
    ],
  },
  faq: {
    eyebrow: "Савол-ҷавоб",
    title: "Саволҳои зуд-зуд додашаванда",
    items: [
      { q: "Литсензияҳо воқеӣ ва кафолатнок ҳастанд?", a: "Бале. Ҳама мустақиман аз вендорҳо омада, расман ба қайд гирифта шуда ва кафолатнок аст." },
      { q: "Кадом системаҳои оператсиониро дастгирӣ мекунед?", a: "Windows, macOS, Linux, Android, iOS — ҳама платформаҳои асосӣ." },
      { q: "Дар кадом кишварҳои ИДМ кор мекунед?", a: "Ӯзбекистон, Қазоқистон, Қирғизистон, Тоҷикистон, Туркманистон, Озарбойҷон, Русия ва дигарон." },
      { q: "Пардохт чӣ гуна анҷом меёбад?", a: "Моҳона ё солона. Бо UZS, RUB, USD пардохт кардан мумкин — интиқоли бонкӣ, корти корпоративӣ ё Visa/Mastercard." },
      { q: "Насб ва дастгирии техникӣ чӣ қадар вақт мегирад?", a: "Насб одатан дар тӯли 24–48 соат. Дастгирии техникӣ 24/7 дастрас аст, вақти ҷавоби SLA то 1 соат." },
      { q: "Аудити ройгон чист ва чӣ тавр кор мекунад?", a: "Хароҷоти ҳозираи барномавии шуморо аз назар мегузаронем, хароҷоти зиёдатиро меёбем ва имкони камаш 20% сарфаро нишон медиҳем." },
    ],
  },
  finalCta: {
    title: "Хароҷоти IT-и худро имрӯз оптимизатсия кунед.",
    sub: "Аудити ройгон гиред — ҳалли беҳтаринро барои бизнеси худ бо мо ёбед. Дар тӯли 24 соат ҷавоб медиҳем.",
    call: "Занг задан",
    telegram: "Дар Telegram навиштан",
  },
  contact: {
    eyebrow: "Тамос",
    title: "Биёед сӯҳбат кунем.",
    sub: "Барои аудити ройгон тамос гиред — дар тӯли 24 соат ҷавоб медиҳем.",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    tgLabel: "Telegram",
    addrLabel: "Суроға",
    address: "81 Кӯчаи Халқаи Хурд, МФЙ Фирдавсӣ, Юнусобод, 100084, Тошканд",
    hoursLabel: "Соатҳои корӣ",
    hours: "Дш–Ҷм 9:00–19:00 · Дастгирии техникии ИДМ 24/7",
    form: {
      name: "Ном",
      namePh: "Номи шумо",
      phone: "Телефон",
      phonePh: "+998 ...",
      email: "Email",
      emailPh: "email@kompaniya.uz",
      message: "Паём",
      messagePh: "Кадом барнома ё хидмат лозим аст?",
      submit: "Аудити ройгон гиред",
      sending: "Фиристода мешавад…",
      success: "Ташаккур! Дархости шумо қабул шуд — дар тӯли 24 соат тамос мегирем.",
      error: "Хатогӣ рух дод. Лутфан бори дигар кӯшиш кунед ё дар Telegram нависед.",
    },
  },
  footer: {
    tagline: "Шарики пурраи IT-и шумо — аз барнома то таҷҳизот. Як шартнома. Ҳар вендор.",
    servicesCol: "Хидматҳо",
    companyCol: "Ширкат",
    contactCol: "Тамос",
    rights: "Ҳамаи ҳуқуқҳо ҳифз шудаанд.",
  },
};

const dict: Record<Lang, Content> = { uz, ru, en, kk, ky, tg };

export function getContent(lang: Lang): Content {
  return dict[lang] ?? dict[DEFAULT_LANG];
}

export function isLang(value: string | undefined): value is Lang {
  return !!value && (LANGS as readonly string[]).includes(value);
}
