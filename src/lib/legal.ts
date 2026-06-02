// Privacy Policy + Terms of Service content, served via /[lang]/privacy/
// and /[lang]/terms/. uz / ru / en authored; kk / ky / tg fall back to ru.
import type { Lang } from "./i18n";

export type LegalKind = "privacy" | "terms";

export interface Section {
  title: string;
  paragraphs: string[];
}

export interface LegalPage {
  title: string;
  subtitle: string;
  effective: string;
  toc: string;
  sections: Section[];
}

/* ─────────────────────────── PRIVACY ─────────────────────────── */

const PRIVACY: Partial<Record<Lang, LegalPage>> = {
  uz: {
    title: "Maxfiylik siyosati",
    subtitle:
      "Sizning shaxsiy ma'lumotlaringizni qanday yig'amiz, ishlatamiz va himoyalaymiz.",
    effective: "Amal qilish sanasi: 2026-yil 1-iyun",
    toc: "Bo'limlar",
    sections: [
      {
        title: "1. Kim biz",
        paragraphs: [
          "Softy LLC (\"biz\", \"bizning\") — O'zbekistonda ro'yxatdan o'tgan rasmiy IT-integrator. Sizning shaxsiy ma'lumotlaringizning nazoratchisi sifatida quyidagi siyosatga rioya qilamiz.",
          "Aloqa: info@softy.uz · +998 (95) 640-04-04 · 81 Kichik Halqa Yo'li, Firdavsiy MFY, Yunusobod, 100084, Toshkent.",
        ],
      },
      {
        title: "2. Qanday ma'lumotlarni yig'amiz",
        paragraphs: [
          "Sayt orqali siz biz bilan bog'lanish formasini to'ldirsangiz, quyidagilarni saqlaymiz: ism, telefon raqami, email manzili (ixtiyoriy), xabar matni, sizning til/sahifa konteksti va IP-manzilingiz.",
          "Sayt foydalanishi va texnik jurnal ma'lumotlari (brauzer turi, sahifa ko'rishlari) statistik maqsadlarda saqlanishi mumkin — siz shaxsan tanilmaysiz.",
        ],
      },
      {
        title: "3. Nima uchun ma'lumot yig'amiz",
        paragraphs: [
          "Sizga javob berish, kerakli litsenziya yoki xizmatni tavsiya qilish, taklif yuborish va keyingi qo'llab-quvvatlash — bizning asosiy maqsadlarimiz.",
          "Marketing maqsadlarida ma'lumotlaringizni siz roziligingizsiz uchinchi tomonlarga sotmaymiz va o'tkazmaymiz.",
        ],
      },
      {
        title: "4. Ma'lumotlarni qancha vaqt saqlaymiz",
        paragraphs: [
          "Forma orqali yuborilgan murojaatlar 24 oygacha saqlanadi, so'ngra avtomatik o'chiriladi yoki anonimlanadi. Buxgalter va shartnoma hujjatlari qonun talab qilgan muddatgacha saqlanadi.",
        ],
      },
      {
        title: "5. Kim ma'lumotlarga kirish huquqiga ega",
        paragraphs: [
          "Faqat Softy LLC vakolatli xodimlari, vendor hamkorlar (taklif tayyorlash uchun zarur bo'lganda) va xizmat ko'rsatuvchi infratuzilma provayderlari (xosting, email).",
          "Barcha tomonlar maxfiylik majburiyatiga rioya qiladi.",
        ],
      },
      {
        title: "6. Cookie va o'xshash texnologiyalar",
        paragraphs: [
          "Sayt ish tilingizni eslab qolish uchun brauzer xotirasidan foydalanadi (localStorage). Bu funksional element bo'lib, analitik yoki marketing maqsadida ishlatilmaydi.",
          "Tashqi analitik (Plausible) yoqilgan bo'lsa, faqat anonimlashtirilgan trafik statistikasi yig'iladi — cookie ishlatilmaydi.",
        ],
      },
      {
        title: "7. Sizning huquqlaringiz",
        paragraphs: [
          "Sizda quyidagi huquqlar mavjud: o'z ma'lumotlaringizga kirish, ularni tuzatish yoki o'chirib tashlash, ishlov berishni cheklash yoki e'tiroz bildirish, ma'lumotlarni boshqa provayderga ko'chirish.",
          "Bu huquqlardan foydalanish uchun bizga info@softy.uz manziliga yozing. 30 kun ichida javob beramiz.",
        ],
      },
      {
        title: "8. Xavfsizlik",
        paragraphs: [
          "Ma'lumotlaringizni himoya qilish uchun shifrlash (HTTPS), kirish nazorati, doimiy zaxiralash va xodimlar mahsuldorligi yo'riqnomalaridan foydalanamiz. Lekin internetda hech narsa 100% xavfsiz emas — biz bu masalada ehtiyotkor va shaffof bo'lamiz.",
        ],
      },
      {
        title: "9. Ushbu siyosatga o'zgartirishlar",
        paragraphs: [
          "Siyosatni vaqti-vaqti bilan yangilab turamiz. Muhim o'zgarishlar haqida sayt orqali xabar beramiz va \"Amal qilish sanasi\"ni yangilaymiz.",
        ],
      },
      {
        title: "10. Aloqa",
        paragraphs: [
          "Maxfiylikka oid har qanday savollar uchun: info@softy.uz yoki +998 (95) 640-04-04.",
        ],
      },
    ],
  },

  ru: {
    title: "Политика конфиденциальности",
    subtitle: "Как мы собираем, используем и защищаем ваши персональные данные.",
    effective: "Дата вступления в силу: 1 июня 2026 г.",
    toc: "Разделы",
    sections: [
      {
        title: "1. Кто мы",
        paragraphs: [
          "Softy LLC («мы») — официальный IT-интегратор, зарегистрированный в Узбекистане. Как контролёр ваших персональных данных мы придерживаемся этой политики.",
          "Контакты: info@softy.uz · +998 (95) 640-04-04 · ул. Кичик Халка Йули, 81, МФЙ Фирдавсий, Юнусабад, 100084, Ташкент.",
        ],
      },
      {
        title: "2. Какие данные мы собираем",
        paragraphs: [
          "При отправке формы обратной связи мы сохраняем: имя, номер телефона, email (по желанию), текст сообщения, язык/страницу контекста и IP-адрес.",
          "Технические данные использования сайта (тип браузера, просмотры страниц) могут сохраняться для статистики — без идентификации вас лично.",
        ],
      },
      {
        title: "3. Зачем мы собираем данные",
        paragraphs: [
          "Чтобы ответить вам, подобрать нужную лицензию или услугу, отправить предложение и оказать дальнейшую поддержку — это наши основные цели.",
          "Мы не продаём и не передаём ваши данные третьим лицам в маркетинговых целях без вашего согласия.",
        ],
      },
      {
        title: "4. Как долго мы храним данные",
        paragraphs: [
          "Обращения, отправленные через форму, хранятся до 24 месяцев, затем автоматически удаляются или анонимизируются. Бухгалтерские и договорные документы хранятся в течение срока, требуемого законом.",
        ],
      },
      {
        title: "5. Кто имеет доступ к данным",
        paragraphs: [
          "Только уполномоченные сотрудники Softy LLC, вендорные партнёры (когда это необходимо для подготовки предложения) и инфраструктурные провайдеры (хостинг, email).",
          "Все стороны соблюдают обязательства по конфиденциальности.",
        ],
      },
      {
        title: "6. Cookies и подобные технологии",
        paragraphs: [
          "Сайт использует браузерное хранилище (localStorage) для запоминания выбранного языка. Это функциональный элемент, не используется в аналитических или маркетинговых целях.",
          "Если включена внешняя аналитика (Plausible), собирается только анонимная статистика — cookies не используются.",
        ],
      },
      {
        title: "7. Ваши права",
        paragraphs: [
          "У вас есть права: доступ к своим данным, их исправление или удаление, ограничение обработки или возражение против неё, перенос данных к другому поставщику.",
          "Для использования этих прав напишите нам на info@softy.uz. Ответим в течение 30 дней.",
        ],
      },
      {
        title: "8. Безопасность",
        paragraphs: [
          "Для защиты ваших данных мы используем шифрование (HTTPS), контроль доступа, регулярное резервное копирование и инструкции по продуктивности для сотрудников. Но в интернете ничто не на 100% безопасно — мы остаёмся осторожными и прозрачными.",
        ],
      },
      {
        title: "9. Изменения этой политики",
        paragraphs: [
          "Мы периодически обновляем политику. О существенных изменениях сообщим через сайт и обновим «Дату вступления в силу».",
        ],
      },
      {
        title: "10. Контакты",
        paragraphs: [
          "По вопросам конфиденциальности: info@softy.uz или +998 (95) 640-04-04.",
        ],
      },
    ],
  },

  en: {
    title: "Privacy Policy",
    subtitle: "How we collect, use and protect your personal data.",
    effective: "Effective date: 1 June 2026",
    toc: "Sections",
    sections: [
      {
        title: "1. Who we are",
        paragraphs: [
          "Softy LLC (\"we\", \"our\") is an official IT integrator registered in Uzbekistan. As the controller of your personal data we follow this policy.",
          "Contact: info@softy.uz · +998 (95) 640-04-04 · 81 Kichik Halqa Yo'li, Firdavsiy MFY, Yunusabad, 100084, Tashkent.",
        ],
      },
      {
        title: "2. What information we collect",
        paragraphs: [
          "When you submit our contact form we store: your name, phone number, email address (optional), message, language/page context, and your IP address.",
          "Technical usage data (browser type, page views) may be retained for analytics — you remain personally unidentified.",
        ],
      },
      {
        title: "3. Why we collect it",
        paragraphs: [
          "To respond to you, recommend the right license or service, send a quote, and provide ongoing support — these are our primary purposes.",
          "We do not sell or share your data with third parties for marketing without your consent.",
        ],
      },
      {
        title: "4. How long we keep it",
        paragraphs: [
          "Inquiries submitted via the form are kept for up to 24 months, then automatically deleted or anonymised. Accounting and contract records are retained for the period required by law.",
        ],
      },
      {
        title: "5. Who has access",
        paragraphs: [
          "Only authorised Softy LLC staff, vendor partners (when needed to prepare a quote), and infrastructure providers (hosting, email).",
          "All parties are bound by confidentiality obligations.",
        ],
      },
      {
        title: "6. Cookies and similar technologies",
        paragraphs: [
          "The site uses browser storage (localStorage) to remember your language preference. This is a functional element, not used for analytics or marketing.",
          "If external analytics (Plausible) is enabled, only anonymous traffic statistics are collected — no cookies are set.",
        ],
      },
      {
        title: "7. Your rights",
        paragraphs: [
          "You have the right to: access your data, correct or erase it, restrict or object to processing, and transfer your data to another provider.",
          "To exercise these rights, email us at info@softy.uz. We will reply within 30 days.",
        ],
      },
      {
        title: "8. Security",
        paragraphs: [
          "We use encryption (HTTPS), access controls, regular backups, and staff guidelines to protect your data. But nothing on the internet is 100% secure — we stay careful and transparent about it.",
        ],
      },
      {
        title: "9. Changes to this policy",
        paragraphs: [
          "We update the policy periodically. Material changes will be announced on the site and the \"Effective date\" will be updated.",
        ],
      },
      {
        title: "10. Contact",
        paragraphs: [
          "For privacy questions: info@softy.uz or +998 (95) 640-04-04.",
        ],
      },
    ],
  },
};

/* ─────────────────────────── TERMS ─────────────────────────── */

const TERMS: Partial<Record<Lang, LegalPage>> = {
  uz: {
    title: "Foydalanish shartlari",
    subtitle:
      "Softy LLC saytidan va xizmatlaridan foydalanish bilan bog'liq huquqiy shartlar.",
    effective: "Amal qilish sanasi: 2026-yil 1-iyun",
    toc: "Bo'limlar",
    sections: [
      {
        title: "1. Ushbu shartnoma haqida",
        paragraphs: [
          "softy.uz saytidan foydalanish orqali siz quyidagi shartlarga rozilik bildirgan bo'lasiz. Agar rozi bo'lmasangiz, iltimos, saytdan foydalanmang.",
        ],
      },
      {
        title: "2. Bizning xizmatlarimiz",
        paragraphs: [
          "Softy LLC dasturiy ta'minot litsenziyalari, obunalar, o'rnatish va texnik yordam ko'rsatadi. Aniq xizmatlar shartlari alohida tijorat kelishuvi orqali rasmiylashtiriladi.",
          "Sayt — bu axborot manbai va aloqa vositasi; bu yerda joylashtirilgan ma'lumotlar tijorat taklifi sifatida tushunilmaydi.",
        ],
      },
      {
        title: "3. Qabul qilinadigan foydalanish",
        paragraphs: [
          "Siz saytdan faqat qonuniy maqsadlarda foydalanishga roziligingizni bildirasiz. Quyidagilar taqiqlanadi: avtomatlashtirilgan parsing/skrapping, xavfsizlikni buzishga urinish, sayt ishlashiga to'sqinlik qilish, soxta ma'lumot yuborish.",
        ],
      },
      {
        title: "4. Intellektual mulk",
        paragraphs: [
          "Sayt va undagi barcha kontent (matn, dizayn, logotiplar, kod) Softy LLC'ga yoki uning litsenzorlariga tegishli. Hamkor vendor logolar nominativ asosda partnyorlik faktini ko'rsatish uchun joylashtirilgan va tegishli huquq egalarining tovar belgilari hisoblanadi.",
          "Yozma roziligimizsiz kontentni nusxalash yoki tijorat maqsadida ishlatish ta'qiqlanadi.",
        ],
      },
      {
        title: "5. Vendor litsenziyalari va uchinchi tomon shartlari",
        paragraphs: [
          "Softy yetkazib beradigan dasturiy ta'minot va xizmatlar tegishli vendorning oxirgi foydalanuvchi litsenziya shartnomasiga (EULA) bo'ysunadi. Litsenziya bo'yicha barcha huquq va majburiyatlar to'g'ridan-to'g'ri sotuvchi/litsenzor va sotib oluvchi o'rtasida.",
          "Softy LLC vendor mahsulotlarining xatosi yoki uzilishi uchun javobgar emas — bu uchun tegishli vendor mas'ul.",
        ],
      },
      {
        title: "6. Kafolatlar va javobgarlikni cheklash",
        paragraphs: [
          "Sayt \"qanday bo'lsa shunday\" asosida taqdim etiladi. Qonun ruxsat bergan maksimal darajada, Softy LLC saytda joylashtirilgan ma'lumotlarning aniqligi yoki to'liqligi uchun kafolat bermaydi.",
          "Softy LLC sayt orqali yetkazilgan bilvosita, tasodifiy yoki natijaviy zararlar uchun javobgar emas. To'g'ridan-to'g'ri javobgarlik miqdori har qanday holatda mijoz tomonidan oxirgi 12 oy ichida to'langan summadan oshmaydi.",
        ],
      },
      {
        title: "7. Maxfiylik",
        paragraphs: [
          "Sizning ma'lumotlaringiz Maxfiylik siyosatiga ko'ra qayta ishlanadi. /privacy/ sahifasiga qarang.",
        ],
      },
      {
        title: "8. Qo'llaniladigan qonun",
        paragraphs: [
          "Ushbu shartnoma O'zbekiston Respublikasi qonunlariga muvofiq tartibga solinadi. Bahslar Toshkent shahrining iqtisodiy sudida ko'riladi.",
        ],
      },
      {
        title: "9. Shartlarga o'zgartirishlar",
        paragraphs: [
          "Biz ushbu shartlarni vaqti-vaqti bilan yangilashimiz mumkin. Yangi versiya saytda e'lon qilinganidan keyin kuchga kiradi.",
        ],
      },
      {
        title: "10. Aloqa",
        paragraphs: [
          "Shartlar bo'yicha savollar uchun: info@softy.uz yoki +998 (95) 640-04-04.",
        ],
      },
    ],
  },

  ru: {
    title: "Условия использования",
    subtitle: "Юридические условия использования сайта и услуг Softy LLC.",
    effective: "Дата вступления в силу: 1 июня 2026 г.",
    toc: "Разделы",
    sections: [
      {
        title: "1. О настоящем соглашении",
        paragraphs: [
          "Используя сайт softy.uz, вы соглашаетесь с настоящими условиями. Если вы не согласны — пожалуйста, не пользуйтесь сайтом.",
        ],
      },
      {
        title: "2. Наши услуги",
        paragraphs: [
          "Softy LLC предоставляет программные лицензии, подписки, установку и техническую поддержку. Конкретные условия услуг оформляются отдельным коммерческим соглашением.",
          "Сайт — это информационный ресурс и канал связи; представленная здесь информация не является коммерческим предложением.",
        ],
      },
      {
        title: "3. Допустимое использование",
        paragraphs: [
          "Вы соглашаетесь использовать сайт только в законных целях. Запрещается: автоматизированный парсинг/скрапинг, попытки взлома безопасности, помехи работе сайта, отправка ложной информации.",
        ],
      },
      {
        title: "4. Интеллектуальная собственность",
        paragraphs: [
          "Сайт и весь его контент (тексты, дизайн, логотипы, код) принадлежат Softy LLC или её лицензиарам. Логотипы вендоров-партнёров размещены номинативно для обозначения партнёрских отношений и являются торговыми знаками соответствующих правообладателей.",
          "Копирование или коммерческое использование контента без нашего письменного согласия запрещено.",
        ],
      },
      {
        title: "5. Вендорные лицензии и условия третьих лиц",
        paragraphs: [
          "Поставляемое Softy ПО и услуги регулируются соответствующими соглашениями вендора с конечным пользователем (EULA). Все права и обязанности по лицензии возникают напрямую между продавцом/лицензиаром и покупателем.",
          "Softy LLC не несёт ответственности за ошибки или сбои продуктов вендоров — за это отвечает соответствующий вендор.",
        ],
      },
      {
        title: "6. Гарантии и ограничение ответственности",
        paragraphs: [
          "Сайт предоставляется «как есть». В максимально допустимой законом степени Softy LLC не гарантирует точность или полноту информации на сайте.",
          "Softy LLC не несёт ответственности за косвенные, случайные или последующие убытки. Размер прямой ответственности в любом случае не превышает суммы, выплаченной клиентом за последние 12 месяцев.",
        ],
      },
      {
        title: "7. Конфиденциальность",
        paragraphs: [
          "Ваши данные обрабатываются согласно Политике конфиденциальности. См. /privacy/.",
        ],
      },
      {
        title: "8. Применимое право",
        paragraphs: [
          "Настоящее соглашение регулируется законодательством Республики Узбекистан. Споры рассматриваются в экономическом суде города Ташкента.",
        ],
      },
      {
        title: "9. Изменения условий",
        paragraphs: [
          "Мы можем периодически обновлять эти условия. Новая редакция вступает в силу после публикации на сайте.",
        ],
      },
      {
        title: "10. Контакты",
        paragraphs: [
          "По вопросам условий: info@softy.uz или +998 (95) 640-04-04.",
        ],
      },
    ],
  },

  en: {
    title: "Terms of Service",
    subtitle: "Legal terms governing the use of the Softy LLC website and services.",
    effective: "Effective date: 1 June 2026",
    toc: "Sections",
    sections: [
      {
        title: "1. About this agreement",
        paragraphs: [
          "By using softy.uz you agree to these terms. If you don't agree, please don't use the site.",
        ],
      },
      {
        title: "2. Our services",
        paragraphs: [
          "Softy LLC provides software licenses, subscriptions, deployment and technical support. Specific service terms are formalised in a separate commercial agreement.",
          "The site is an information resource and contact channel; the information published here is not a commercial offer.",
        ],
      },
      {
        title: "3. Acceptable use",
        paragraphs: [
          "You agree to use the site for lawful purposes only. Prohibited: automated parsing/scraping, attempts to breach security, interfering with site operation, submitting false information.",
        ],
      },
      {
        title: "4. Intellectual property",
        paragraphs: [
          "The site and all its content (text, design, logos, code) belong to Softy LLC or its licensors. Vendor-partner logos are displayed nominatively to indicate partnership relationships and are trademarks of their respective owners.",
          "Copying or commercial use of the content without our written consent is prohibited.",
        ],
      },
      {
        title: "5. Vendor licenses and third-party terms",
        paragraphs: [
          "Software and services supplied by Softy are subject to the relevant vendor's end-user license agreement (EULA). All license rights and obligations arise directly between the seller/licensor and the buyer.",
          "Softy LLC is not responsible for errors or failures of vendor products — the respective vendor is responsible.",
        ],
      },
      {
        title: "6. Warranties and limitation of liability",
        paragraphs: [
          "The site is provided \"as is\". To the maximum extent permitted by law, Softy LLC does not warrant the accuracy or completeness of the information on the site.",
          "Softy LLC is not liable for indirect, incidental or consequential damages. Direct liability in any case shall not exceed the amount paid by the client over the last 12 months.",
        ],
      },
      {
        title: "7. Privacy",
        paragraphs: [
          "Your data is processed according to the Privacy Policy. See /privacy/.",
        ],
      },
      {
        title: "8. Governing law",
        paragraphs: [
          "This agreement is governed by the laws of the Republic of Uzbekistan. Disputes are heard at the Economic Court of Tashkent.",
        ],
      },
      {
        title: "9. Changes to terms",
        paragraphs: [
          "We may update these terms periodically. The new edition becomes effective once published on the site.",
        ],
      },
      {
        title: "10. Contact",
        paragraphs: [
          "For questions about these terms: info@softy.uz or +998 (95) 640-04-04.",
        ],
      },
    ],
  },
};

/* ───────────────────────── footer / banner labels ─────────────────────────── */

export const LEGAL_LABELS: Record<
  Lang,
  { privacy: string; terms: string; cookies: { msg: string; accept: string; learnMore: string } }
> = {
  uz: {
    privacy: "Maxfiylik siyosati",
    terms: "Foydalanish shartlari",
    cookies: {
      msg: "Sayt til tanlovingizni eslab qolish uchun brauzer xotirasidan foydalanadi. Marketing yoki kuzatuv cookie'lari yo'q.",
      accept: "Tushundim",
      learnMore: "Batafsil",
    },
  },
  ru: {
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    cookies: {
      msg: "Сайт использует браузерное хранилище для запоминания выбранного языка. Маркетинговых или отслеживающих cookies нет.",
      accept: "Понятно",
      learnMore: "Подробнее",
    },
  },
  en: {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookies: {
      msg: "We use browser storage to remember your language. No marketing or tracking cookies.",
      accept: "Got it",
      learnMore: "Learn more",
    },
  },
  kk: {
    privacy: "Құпиялылық саясаты",
    terms: "Қолдану шарттары",
    cookies: {
      msg: "Сайт тіл таңдауыңызды есте сақтау үшін браузер жадын пайдаланады. Маркетингтік немесе бақылау cookie файлдары жоқ.",
      accept: "Түсінікті",
      learnMore: "Толығырақ",
    },
  },
  ky: {
    privacy: "Купуялык саясаты",
    terms: "Колдонуу шарттары",
    cookies: {
      msg: "Сайт сиз тандаган тилди эстеп калуу үчүн браузер жадын колдонот. Маркетинг же көзөмөл cookies жок.",
      accept: "Түшүнүктүү",
      learnMore: "Толугураак",
    },
  },
  tg: {
    privacy: "Сиёсати махфият",
    terms: "Шартҳои истифода",
    cookies: {
      msg: "Сайт хотираи браузерро барои дар хотир нигоҳ доштани забони интихобшуда истифода мебарад. Cookie-ҳои маркетингӣ ё пайгирӣ нестанд.",
      accept: "Фаҳмо",
      learnMore: "Муфассал",
    },
  },
};

/* ─────────────────────────── helpers ─────────────────────────── */

export function getLegalPage(kind: LegalKind, lang: Lang): LegalPage {
  const src = kind === "privacy" ? PRIVACY : TERMS;
  // Fall back: requested → ru → en → uz (the most-authored source).
  return src[lang] ?? src.ru ?? src.en ?? (src.uz as LegalPage);
}
