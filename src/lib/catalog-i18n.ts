// Catalog product copy — localized.
//
// The Uzbek source lives on each Product in catalog.ts (canonical). This file
// overlays the other five languages. `productCopy(slug, lang)` merges the
// overlay onto the Uzbek base, so a missing entry never renders blank — it
// falls back to Uzbek. Platform tags (os[]) are universal and stay in catalog.ts.
//
// NOTE: kk / ky / tg translations are AI-authored — recommended to have a
// native speaker proofread before a hard launch.

import type { Lang } from "./i18n";
import { PRODUCTS } from "./catalog";

export interface ProductCopy {
  tagline: string;
  summary: string;
  features: string[];
  audience?: string;
}

type Overlay = Record<string, ProductCopy>;

/* ═══════════════════════════ RUSSIAN ═══════════════════════════ */
const ru: Overlay = {
  microsoft: {
    tagline: "Мировой стандарт корпоративной продуктивности — Word, Excel, Teams, Outlook и облачные сервисы.",
    summary:
      "Microsoft 365 — полноценная платформа продуктивности для бизнеса: документы и таблицы, видеоконференции, корпоративная почта, OneDrive, SharePoint и Teams. Softy LLC поставляет корпоративные лицензии напрямую от вендора, интегрирует с Azure AD и обеспечивает постоянную техническую поддержку.",
    features: [
      "Приложения Office: Word, Excel, PowerPoint, Outlook",
      "Microsoft Teams — коммуникации и совместная работа",
      "Облачное хранилище OneDrive и SharePoint",
      "Корпоративная почта + Exchange Online",
      "Центр безопасности и многофакторная аутентификация",
      "Администрирование на уровне организации",
    ],
    audience: "Бизнес и государственные организации, учебные заведения",
  },
  adobe: {
    tagline: "Photoshop, Illustrator, Premiere Pro и другие стандарты креатива — в одной подписке.",
    summary:
      "Adobe Creative Cloud — самый зрелый набор инструментов для дизайна, видео, фотографии и веб-разработки. Поставляем корпоративные и учебные лицензии официально, управляем командными подписками.",
    features: [
      "20+ креативных приложений (Photoshop, Illustrator, Premiere, After Effects)",
      "Adobe Express + Firefly AI",
      "100 ГБ облачного хранилища и Adobe Fonts",
      "Командные библиотеки (Creative Cloud Libraries)",
      "Корпоративные и учебные скидки",
      "Интеграция с Adobe Stock",
    ],
    audience: "Дизайн-студии, отделы маркетинга, команды видеопродакшна",
  },
  bitrix24: {
    tagline: "Всё в одном месте: CRM, задачи, документы и коммуникации — единая платформа.",
    summary:
      "Bitrix24 объединяет продажи (CRM), управление проектами, корпоративный портал, внутренние коммуникации и документооборот на одной платформе. Доступно облачное или собственное (on-premise) размещение. Softy поставляет, настраивает и адаптирует под бизнес-процессы.",
    features: [
      "CRM и воронка продаж",
      "Управление проектами и задачами (Kanban, Гант)",
      "Корпоративный портал и внутренний чат",
      "Документооборот и подпись",
      "Конструктор сайтов и интернет-магазина",
      "Облачное или on-premise размещение",
    ],
    audience: "Растущие компании, команды продаж и маркетинга",
  },
  zoom: {
    tagline: "Мировой лидер видеовстреч, телефонии, чата и онлайн-конференций.",
    summary:
      "Zoom Workplace — единая платформа коммуникаций для удалённых и гибридных команд: HD-видеовстречи, облачная телефония Zoom Phone, Zoom Team Chat, вебинары и Zoom Rooms. Softy LLC как официальный партнёр Zoom оформляет корпоративные лицензии, интегрирует с Microsoft 365 / Google Workspace и помогает с настройкой.",
    features: [
      "HD-видеовстречи (1000+ участников)",
      "Zoom Phone — облачная корпоративная телефония",
      "Zoom Team Chat и Whiteboard",
      "Вебинары и Events (Webinar / Sessions)",
      "Zoom Rooms — оснащение переговорных",
      "AI Companion (резюме и расшифровка) — опционально",
    ],
    audience: "Корпоративные команды, образование, здравоохранение, госсектор",
  },
  clickup: {
    tagline: "Одно приложение — для задач, документов, расписания и целей.",
    summary:
      "ClickUp — гибкая платформа управления проектами. Команда выстраивает свои бизнес-процессы в настраиваемых представлениях (List, Board, Calendar, Timeline). Мы оформляем корпоративные подписки и проводим онбординг.",
    features: [
      "Задачи, подзадачи и зависимости",
      "Представления Kanban, Гант, список и календарь",
      "Цели (OKR) и учёт времени",
      "Docs и Whiteboards",
      "Автоматизация (no-code)",
      "1000+ интеграций",
    ],
    audience: "Технологические стартапы, команды маркетинга и продукта",
  },
  kaspersky: {
    tagline: "Мировой лидер в защите конечных устройств — многоуровневая защита для бизнеса.",
    summary:
      "Kaspersky Endpoint Security for Business — защита профессионального уровня для сети компании, серверов и рабочих станций сотрудников. Централизованная консоль управления, обнаружение угроз на основе машинного обучения и возможности EDR.",
    features: [
      "Многоуровневая защита от вредоносного ПО",
      "Централизованная консоль (Security Center)",
      "Endpoint Detection & Response (EDR)",
      "Безопасный веб-шлюз и фильтр электронной почты",
      "Управление мобильными устройствами (MDM)",
      "Защита от программ-вымогателей и эксплойтов",
    ],
    audience: "Средний и крупный бизнес, государственные организации",
  },
  bitdefender: {
    tagline: "Защита конечных устройств с наивысшей точностью в независимых тестах.",
    summary:
      "Bitdefender GravityZone — решение, неизменно занимающее первые места в рейтингах AV-TEST и AV-Comparatives. Лёгкий агент, мощное машинное обучение и минимальная нагрузка на систему. Охватывает серверы, рабочие станции и персональные компьютеры.",
    features: [
      "Обнаружение 0-day угроз на основе AI/ML",
      "Ransomware Remediation (автоматическое восстановление)",
      "Network Attack Defense",
      "Защита контейнеров и Cloud Workload",
      "Patch Management",
      "Защита email и веба",
    ],
    audience: "SMB и корпоративные клиенты",
  },
  eset: {
    tagline: "Лёгкий агент, мощная защита — 30+ лет экспертизы в кибербезопасности.",
    summary:
      "ESET PROTECT — единая платформа безопасности для бизнеса от ведущей словацкой компании в области кибербезопасности. Доступны облачная или on-premise консоль, EDR/XDR и модули шифрования конфиденциальных данных.",
    features: [
      "ESET LiveGuard (sandboxing) — анализ угроз",
      "Endpoint Detection & Response (EDR)",
      "Модуль Full Disk Encryption",
      "Защита email и веба",
      "Облачная или on-premise консоль управления",
      "Одна из самых низких нагрузок на систему",
    ],
    audience: "SMB, здравоохранение, образование, госсектор",
  },
  drweb: {
    tagline: "Проверенная, сертифицированная многоуровневая антивирусная защита для рынка СНГ.",
    summary:
      "Dr.Web Enterprise Security Suite — централизованная антивирусная защита серверов, рабочих станций и мобильных устройств. Отличается проактивными технологиями, низкой нагрузкой на систему и соответствием нормативам СНГ.",
    features: [
      "Многоуровневая антивирусная и анти-ransomware защита",
      "Централизованное управление (Control Center)",
      "Dr.Web Preventive Protection (проактивная защита)",
      "Фильтрация email и веб-трафика",
      "Серверы, рабочие станции и мобильные устройства",
      "Нормативы и сертификаты СНГ",
    ],
    audience: "Госорганы, бизнес, клиенты на рынке СНГ",
  },
  autodesk: {
    tagline: "Промышленный стандарт проектирования, BIM, механики и анимации.",
    summary:
      "Решения Autodesk — для строительства, машиностроения, геодезии и креативных индустрий. AutoCAD (2D/3D), Revit (BIM), Inventor (механика), 3ds Max и Maya (визуализация, анимация). Доступны корпоративные и учебные лицензии.",
    features: [
      "AutoCAD — 2D/3D проектирование",
      "Revit — BIM и архитектура",
      "Inventor — машиностроительные конструкции",
      "3ds Max, Maya — визуализация и анимация",
      "Civil 3D — проектирование дорог и инфраструктуры",
      "Облачная совместная работа (BIM 360, Autodesk Construction Cloud)",
    ],
    audience: "Архитектурные бюро, строительные и машиностроительные компании",
  },
  ideastatica: {
    tagline: "Проектирование и проверка стальных и бетонных узлов за секунды.",
    summary:
      "IDEA StatiCa — специализированное ПО для инженеров-конструкторов. Анализирует стальные и бетонные узлы (connections), сварные швы, анкерные болты и элементы в соответствии со стандартами Eurocode/AISC/CSA.",
    features: [
      "Анализ стальных узлов и сварных швов",
      "Проектирование бетонных узлов и деталей",
      "Стандарты Eurocode, AISC, AS, SP, CSA",
      "Интеграция с Revit, Tekla, Advance Steel",
      "Прямой экспорт из BIM-модели",
      "Автоматические чертежи и отчёты",
    ],
    audience: "Инженеры-конструкторы, проектные строительные бюро",
  },
  indorsoft: {
    tagline: "Надёжное решение для проектирования дорог и инфраструктуры на рынке СНГ.",
    summary:
      "Продукты ИндорСофт (IndorCAD, IndorRoad, IndorTrafficPro) — для проектирования дорог, улиц, трамвайных путей и городской инфраструктуры. Полностью соответствуют нормативам СНГ (ГОСТ, СП, ШНК).",
    features: [
      "IndorCAD — проектирование дорог и улиц",
      "IndorRoad — проекты капитального ремонта",
      "IndorTrafficPro — моделирование дорожного движения",
      "Нормативы и стандарты СНГ",
      "Полная совместимость с AutoCAD",
      "Интеграция с ГИС и геодезией",
    ],
    audience: "Дорожно-строительные организации, транспортное планирование",
  },
  fortinet: {
    tagline: "Лидер Gartner Magic Quadrant — мировой лидер сетевой безопасности.",
    summary:
      "Fortinet FortiGate — межсетевой экран нового поколения (NGFW), SD-WAN и защищённый Wi-Fi. Максимальная производительность за счёт специальных чипов SoC4/SoC5. Централизованное управление через FortiManager и FortiAnalyzer.",
    features: [
      "Next-Gen Firewall (NGFW) + IPS",
      "SD-WAN и SASE",
      "FortiSwitch + FortiAP (защищённый Wi-Fi)",
      "Централизованное управление FortiManager",
      "Zero Trust Network Access",
      "Threat Intelligence (FortiGuard Labs)",
    ],
    audience: "Корпоративные сети, ISP, государственные организации",
  },
  paloaltonetworks: {
    tagline: "Одна из самых инновационных компаний в кибербезопасности.",
    summary:
      "Palo Alto Networks — межсетевые экраны нового поколения (PA-Series), облачная безопасность (Prisma Cloud), SASE (Prisma Access) и XDR (Cortex). Технология App-ID точно классифицирует тысячи приложений.",
    features: [
      "NGFW на базе PAN-OS",
      "Технологии App-ID, User-ID, Content-ID",
      "Prisma Cloud — облачная безопасность",
      "Prisma Access — SASE",
      "Cortex XDR/XSIAM — расширенная аналитика",
      "WildFire — облачная песочница",
    ],
    audience: "Крупные корпоративные и международные компании",
  },
  falcongaze: {
    tagline: "Предотвращение утечек корпоративных данных — DLP-решение.",
    summary:
      "Falcongaze SecureTower — система Data Loss Prevention (DLP). Контролирует email, мессенджеры, USB, облачные сервисы и печать. Выявляет внутренние угрозы и формирует отчёты об активности сотрудников.",
    features: [
      "Контроль email, IM, социальных сетей",
      "USB, принтеры и облачные сервисы",
      "Скриншоты и история клавиатуры",
      "Аналитика внутренних угроз (UEBA)",
      "Автоматическая блокировка и оповещения",
      "Отчётность и аудит",
    ],
    audience: "Финансы, здравоохранение, госсектор и организации с конфиденциальными данными",
  },
  gfi: {
    tagline: "Доступная и удобная сетевая безопасность и почтовый сервер для SMB.",
    summary:
      "Портфель GFI Software — KerioControl (UTM firewall), KerioConnect (почтовый сервер), LanGuard (сканер уязвимостей) и Archiver. Оптимизирован для малого и среднего бизнеса по доступным ценам.",
    features: [
      "KerioControl — UTM firewall + VPN",
      "KerioConnect — корпоративный почтовый сервер",
      "LanGuard — сканер уязвимостей и патчинг",
      "Archiver — архивирование почты",
      "Быстрая установка, удобный интерфейс",
      "Лицензирование под SMB",
    ],
    audience: "Малый и средний бизнес (SMB)",
  },
  ssl: {
    tagline: "DigiCert, Sectigo, GlobalSign — официальные SSL/TLS-сертификаты.",
    summary:
      "Официальные SSL/TLS-сертификаты для безопасности вашего сайта и сервисов. Варианты DV (Domain Validated), OV (Organization Validated) и EV (Extended Validation). Wildcard и Multi-Domain (SAN) сертификаты.",
    features: [
      "Single, Wildcard и Multi-Domain (SAN)",
      "Уровни валидации DV, OV, EV",
      "Сертификаты DigiCert, Sectigo, GlobalSign",
      "Сертификаты Code Signing",
      "Гарантия $1.75M+",
      "Помощь с установкой и настройкой",
    ],
    audience: "Веб-сайты, e-commerce, государственные порталы, корпоративные системы",
  },
  veeam: {
    tagline: "Решение №1 для резервного копирования и восстановления — лидер рейтингов Gartner.",
    summary:
      "Veeam Backup & Replication — ведущая платформа для резервного копирования виртуальных, физических, NAS и облачных (AWS, Azure, GCP, Microsoft 365) нагрузок. Быстрое восстановление, защищённые от вымогателей резервные копии и immutable repository.",
    features: [
      "Резервное копирование VMware, Hyper-V, Nutanix AHV",
      "Microsoft 365 (Exchange, OneDrive, SharePoint, Teams)",
      "Физические серверы и рабочие станции",
      "Облачные нагрузки (AWS, Azure, GCP)",
      "Instant Recovery — восстановление за минуты",
      "Immutable backup (защита от вымогателей)",
    ],
    audience: "Корпоративный IT, дата-центры, MSP",
  },
  ibm: {
    tagline: "Корпоративная инфраструктура и ПО для крупных предприятий.",
    summary:
      "Решения IBM — IBM Spectrum Protect (резервное копирование), IBM Cloud Pak (контейнерная платформа), IBM Db2 (база данных), IBM Watson (AI). Превосходная надёжность и масштабируемость для крупного бизнеса.",
    features: [
      "IBM Spectrum Protect — корпоративное резервное копирование",
      "IBM Cloud Pak — на базе Red Hat OpenShift",
      "Db2 — база данных",
      "IBM Watson — платформа AI",
      "Стратегия Hybrid Cloud",
      "Поддержка Mainframe и Power Systems",
    ],
    audience: "Крупные корпоративные и государственные организации",
  },
  jetbrains: {
    tagline: "IntelliJ IDEA, PyCharm, WebStorm — промышленный стандарт для разработчиков.",
    summary:
      "IDE от JetBrains — отдельная среда под каждый язык: IntelliJ IDEA (Java/Kotlin), PyCharm (Python), WebStorm (JS/TS), Rider (.NET), GoLand, PhpStorm. Интеграция с JetBrains AI Assistant и командные лицензии.",
    features: [
      "IntelliJ IDEA, PyCharm, WebStorm, Rider",
      "GoLand, PhpStorm, RubyMine, CLion",
      "Kotlin и JetBrains AI Assistant",
      "TeamCity — CI/CD",
      "YouTrack — баг-трекинг",
      "Корпоративные и учебные лицензии",
    ],
    audience: "Разработчики, команды разработки, IT-учебные заведения",
  },
  passware: {
    tagline: "Профессиональные инструменты восстановления паролей и цифровой криминалистики.",
    summary:
      "Passware Kit — ведущее решение в области компьютерной криминалистики и восстановления паролей. Восстановление паролей для 340+ типов файлов, разблокировка дисков FileVault, BitLocker, TrueCrypt, анализ мобильных устройств.",
    features: [
      "Восстановление паролей для 340+ типов файлов",
      "Расшифровка FileVault, BitLocker, VeraCrypt",
      "Поиск паролей через GPU и распределённо",
      "Мобильная криминалистика iOS и Android",
      "Анализ памяти (RAM dump)",
      "Анализ облачных резервных копий",
    ],
    audience: "IT-безопасность, правоохранительные органы, эксперты-криминалисты",
  },
  myq: {
    tagline: "Печать, сканирование и контроль расходов — единая платформа.",
    summary:
      "MyQ Solution — система управления корпоративной печатью. Централизованный контроль принтеров и МФУ, аутентификация пользователей (карта, PIN), отчётность по печати и оптимизация расходов.",
    features: [
      "Централизованное управление принтерами",
      "Аутентификация пользователей (карта, PIN, мобильная)",
      "Отчётность по печати и расходам",
      "Pull printing — безопасная печать",
      "OCR и автоматизация workflow",
      "Мобильная печать (BYOD)",
    ],
    audience: "Крупные офисы, государственные и учебные учреждения",
  },
};

/* ═══════════════════════════ ENGLISH ═══════════════════════════ */
const en: Overlay = {
  microsoft: {
    tagline: "The global standard for enterprise productivity — Word, Excel, Teams, Outlook and cloud services.",
    summary:
      "Microsoft 365 is a complete productivity platform for business: documents and spreadsheets, video conferencing, corporate email, OneDrive, SharePoint and Teams. Softy LLC supplies corporate licenses directly from the vendor, integrates with Azure AD and provides ongoing technical support.",
    features: [
      "Office apps: Word, Excel, PowerPoint, Outlook",
      "Microsoft Teams — communication and collaboration",
      "OneDrive and SharePoint cloud storage",
      "Corporate email + Exchange Online",
      "Security center and Multi-Factor Auth",
      "Organization-wide admin management",
    ],
    audience: "Business and government organizations, educational institutions",
  },
  adobe: {
    tagline: "Photoshop, Illustrator, Premiere Pro and other creative standards — in one subscription.",
    summary:
      "Adobe Creative Cloud is the most mature toolset for design, video, photography and web development. We supply corporate and education licenses officially and manage team subscriptions.",
    features: [
      "20+ creative apps (Photoshop, Illustrator, Premiere, After Effects)",
      "Adobe Express + Firefly AI",
      "100GB cloud storage and Adobe Fonts",
      "Team libraries (Creative Cloud Libraries)",
      "Corporate and education discounts",
      "Adobe Stock integration",
    ],
    audience: "Design studios, marketing departments, video production teams",
  },
  bitrix24: {
    tagline: "Everything in one place: CRM, tasks, documents and communication — a single platform.",
    summary:
      "Bitrix24 brings sales (CRM), project management, the company portal, internal communication and document flow together on one platform. Cloud or on-premise deployment is available. Softy delivers, configures and adapts it to your business processes.",
    features: [
      "CRM and sales funnel",
      "Project and task management (Kanban, Gantt)",
      "Corporate portal and internal chat",
      "Document flow and e-signature",
      "Website and online store builder",
      "Cloud or on-premise deployment",
    ],
    audience: "Growing companies, sales and marketing teams",
  },
  zoom: {
    tagline: "The global leader in video meetings, telephony, chat and online conferencing.",
    summary:
      "Zoom Workplace is a unified communications platform for remote and hybrid teams: HD video meetings, Zoom Phone cloud telephony, Zoom Team Chat, webinars and Zoom Rooms. As an official Zoom partner, Softy LLC handles corporate licensing, integrates with Microsoft 365 / Google Workspace and assists with setup.",
    features: [
      "HD video meetings (1000+ participants)",
      "Zoom Phone — cloud corporate telephony",
      "Zoom Team Chat and Whiteboard",
      "Webinars and Events (Webinar / Sessions)",
      "Zoom Rooms — meeting-room hardware",
      "AI Companion (summary and transcript) — optional",
    ],
    audience: "Corporate teams, education, healthcare, public sector",
  },
  clickup: {
    tagline: "One app — for tasks, documents, scheduling and goals.",
    summary:
      "ClickUp is a flexible project-management platform. Teams organize their workflows in customizable views (List, Board, Calendar, Timeline). We handle corporate subscriptions and run onboarding.",
    features: [
      "Tasks, subtasks and dependencies",
      "Kanban, Gantt, list and calendar views",
      "Goals (OKR) and time tracking",
      "Docs and Whiteboards",
      "Automation (no-code)",
      "1000+ integrations",
    ],
    audience: "Tech startups, marketing and product teams",
  },
  kaspersky: {
    tagline: "The global leader in endpoint security — multi-layered protection for business.",
    summary:
      "Kaspersky Endpoint Security for Business delivers professional-grade protection for the company network, servers and employee workstations. Centralized management console, machine-learning threat detection and EDR capabilities.",
    features: [
      "Multi-layered malware protection",
      "Centralized console (Security Center)",
      "Endpoint Detection & Response (EDR)",
      "Secure web gateway and email filtering",
      "Mobile device management (MDM)",
      "Anti-ransomware and exploit protection",
    ],
    audience: "Mid-size and large business, government organizations",
  },
  bitdefender: {
    tagline: "Endpoint protection with the highest detection accuracy in independent tests.",
    summary:
      "Bitdefender GravityZone consistently ranks at the top of AV-TEST and AV-Comparatives. A lightweight agent, powerful machine learning and minimal system load. Covers servers, workstations and PCs.",
    features: [
      "AI/ML-based 0-day threat detection",
      "Ransomware Remediation (automatic recovery)",
      "Network Attack Defense",
      "Container and Cloud Workload protection",
      "Patch Management",
      "Email and web protection",
    ],
    audience: "SMB and enterprise customers",
  },
  eset: {
    tagline: "Lightweight agent, strong protection — 30+ years of cybersecurity expertise.",
    summary:
      "ESET PROTECT is a unified security platform for business from Slovakia's leading cybersecurity company. Cloud or on-premise console, EDR/XDR and confidential-data encryption modules are available.",
    features: [
      "ESET LiveGuard (sandboxing) threat analysis",
      "Endpoint Detection & Response (EDR)",
      "Full Disk Encryption module",
      "Email and web protection",
      "Cloud or on-premise management console",
      "One of the lowest system footprints",
    ],
    audience: "SMB, healthcare, education, public sector",
  },
  drweb: {
    tagline: "Proven, certified multi-layered antivirus protection for the CIS market.",
    summary:
      "Dr.Web Enterprise Security Suite delivers centralized antivirus protection for servers, workstations, and mobile devices. It stands out with proactive technologies, a low system footprint, and compliance with CIS regulations.",
    features: [
      "Multi-layered antivirus and anti-ransomware protection",
      "Centralized management (Control Center)",
      "Dr.Web Preventive Protection (proactive defense)",
      "Email and web-traffic filtering",
      "Servers, workstations, and mobile devices",
      "CIS regulations and certifications",
    ],
    audience: "Government bodies, business, CIS-market clients",
  },
  autodesk: {
    tagline: "The industry standard for design, BIM, mechanical engineering and animation.",
    summary:
      "Autodesk solutions cover construction, mechanical engineering, surveying and creative industries. AutoCAD (2D/3D), Revit (BIM), Inventor (mechanical), 3ds Max and Maya (visualization, animation). Corporate and education licenses available.",
    features: [
      "AutoCAD — 2D/3D design",
      "Revit — BIM and architecture",
      "Inventor — mechanical engineering",
      "3ds Max, Maya — visualization and animation",
      "Civil 3D — road and infrastructure design",
      "Cloud collaboration (BIM 360, Autodesk Construction Cloud)",
    ],
    audience: "Architecture firms, construction and mechanical-engineering companies",
  },
  ideastatica: {
    tagline: "Design and check steel and concrete connections in seconds.",
    summary:
      "IDEA StatiCa is specialized software for structural engineers. It analyzes steel and concrete connections, welds, anchor bolts and members in accordance with Eurocode/AISC/CSA standards.",
    features: [
      "Steel connection and weld analysis",
      "Concrete connection and detail design",
      "Eurocode, AISC, AS, SP, CSA standards",
      "Integration with Revit, Tekla, Advance Steel",
      "Direct export from the BIM model",
      "Automatic drawings and reports",
    ],
    audience: "Structural engineers, construction design firms",
  },
  indorsoft: {
    tagline: "A trusted road and infrastructure design solution for the CIS market.",
    summary:
      "IndorSoft products (IndorCAD, IndorRoad, IndorTrafficPro) are for designing roads, streets, tram lines and urban infrastructure. Fully compliant with CIS standards (GOST, SP, ShNK).",
    features: [
      "IndorCAD — road and street design",
      "IndorRoad — capital-repair projects",
      "IndorTrafficPro — traffic modeling",
      "CIS norms and standards",
      "Full AutoCAD compatibility",
      "GIS and surveying integration",
    ],
    audience: "Road-construction organizations, transport planning",
  },
  fortinet: {
    tagline: "A Gartner Magic Quadrant Leader — the global leader in network security.",
    summary:
      "Fortinet FortiGate delivers Next-Generation Firewall (NGFW), SD-WAN and secure Wi-Fi. Top performance thanks to purpose-built SoC4/SoC5 chips. Centralized management via FortiManager and FortiAnalyzer.",
    features: [
      "Next-Gen Firewall (NGFW) + IPS",
      "SD-WAN and SASE",
      "FortiSwitch + FortiAP (secure Wi-Fi)",
      "FortiManager centralized management",
      "Zero Trust Network Access",
      "Threat Intelligence (FortiGuard Labs)",
    ],
    audience: "Enterprise networks, ISPs, government organizations",
  },
  paloaltonetworks: {
    tagline: "One of the most innovative companies in cybersecurity.",
    summary:
      "Palo Alto Networks offers Next-Gen Firewalls (PA-Series), cloud security (Prisma Cloud), SASE (Prisma Access) and XDR (Cortex). App-ID technology accurately classifies thousands of applications.",
    features: [
      "NGFW built on PAN-OS",
      "App-ID, User-ID, Content-ID technologies",
      "Prisma Cloud — cloud security",
      "Prisma Access — SASE",
      "Cortex XDR/XSIAM — extended analytics",
      "WildFire — cloud sandbox",
    ],
    audience: "Large enterprise and international companies",
  },
  falcongaze: {
    tagline: "Prevent corporate data leaks — a DLP solution.",
    summary:
      "Falcongaze SecureTower is a Data Loss Prevention (DLP) system. It monitors email, messengers, USB, cloud services and printing. It detects insider threats and reports on employee activity.",
    features: [
      "Email, IM and social-network monitoring",
      "USB, printers and cloud services",
      "Screenshots and keystroke history",
      "Insider-threat analytics (UEBA)",
      "Automatic blocking and alerts",
      "Reporting and auditing",
    ],
    audience: "Finance, healthcare, government and organizations handling confidential data",
  },
  gfi: {
    tagline: "Affordable, convenient network security and mail server for SMBs.",
    summary:
      "The GFI Software portfolio includes KerioControl (UTM firewall), KerioConnect (mail server), LanGuard (vulnerability scanner) and Archiver. Optimized for small and medium business at attractive prices.",
    features: [
      "KerioControl — UTM firewall + VPN",
      "KerioConnect — corporate mail server",
      "LanGuard — vulnerability scanner and patching",
      "Archiver — email archiving",
      "Fast setup, convenient interface",
      "SMB-friendly licensing",
    ],
    audience: "Small and medium business (SMB)",
  },
  ssl: {
    tagline: "DigiCert, Sectigo, GlobalSign — official SSL/TLS certificates.",
    summary:
      "Official SSL/TLS certificates for the security of your website and services. DV (Domain Validated), OV (Organization Validated) and EV (Extended Validation) options. Wildcard and Multi-Domain (SAN) certificates.",
    features: [
      "Single, Wildcard and Multi-Domain (SAN)",
      "DV, OV, EV validation levels",
      "DigiCert, Sectigo, GlobalSign certificates",
      "Code Signing certificates",
      "$1.75M+ warranty",
      "Installation and configuration support",
    ],
    audience: "Websites, e-commerce, government portals, corporate systems",
  },
  veeam: {
    tagline: "The #1 backup and recovery solution — a leader in Gartner rankings.",
    summary:
      "Veeam Backup & Replication is the leading platform for backing up virtual, physical, NAS and cloud (AWS, Azure, GCP, Microsoft 365) workloads. Fast recovery, ransomware-proof backups and an immutable repository.",
    features: [
      "VMware, Hyper-V, Nutanix AHV backup",
      "Microsoft 365 (Exchange, OneDrive, SharePoint, Teams)",
      "Physical servers and workstations",
      "Cloud workloads (AWS, Azure, GCP)",
      "Instant Recovery — restore in minutes",
      "Immutable backup (ransomware protection)",
    ],
    audience: "Enterprise IT, data centers, MSPs",
  },
  ibm: {
    tagline: "Enterprise infrastructure and software for large organizations.",
    summary:
      "IBM solutions include IBM Spectrum Protect (backup), IBM Cloud Pak (container platform), IBM Db2 (database) and IBM Watson (AI). Outstanding robustness and scalability for large business.",
    features: [
      "IBM Spectrum Protect — enterprise backup",
      "IBM Cloud Pak — built on Red Hat OpenShift",
      "Db2 — database",
      "IBM Watson — AI platform",
      "Hybrid Cloud strategy",
      "Mainframe and Power Systems support",
    ],
    audience: "Large corporate and government organizations",
  },
  jetbrains: {
    tagline: "IntelliJ IDEA, PyCharm, WebStorm — the industry standard for developers.",
    summary:
      "JetBrains IDEs provide a dedicated environment for each language: IntelliJ IDEA (Java/Kotlin), PyCharm (Python), WebStorm (JS/TS), Rider (.NET), GoLand, PhpStorm. JetBrains AI Assistant integration and team licenses.",
    features: [
      "IntelliJ IDEA, PyCharm, WebStorm, Rider",
      "GoLand, PhpStorm, RubyMine, CLion",
      "Kotlin and JetBrains AI Assistant",
      "TeamCity — CI/CD",
      "YouTrack — bug tracking",
      "Corporate and education licenses",
    ],
    audience: "Developers, development teams, IT education institutions",
  },
  passware: {
    tagline: "Professional tools for password recovery and digital forensics.",
    summary:
      "Passware Kit is a leading solution for computer forensics and password recovery. Password recovery for 340+ file types, unlocking FileVault, BitLocker and TrueCrypt disks, and mobile-device analysis.",
    features: [
      "Password recovery for 340+ file types",
      "FileVault, BitLocker, VeraCrypt decryption",
      "GPU and distributed password search",
      "iOS and Android mobile forensics",
      "Memory analysis (RAM dump)",
      "Cloud backup analysis",
    ],
    audience: "IT security, law enforcement, forensic experts",
  },
  myq: {
    tagline: "Printing, scanning and cost control — a single platform.",
    summary:
      "MyQ Solution is a corporate print-management system. Centralized control of printers and MFPs, user authentication (card, PIN), print reporting and cost optimization.",
    features: [
      "Centralized printer management",
      "User authentication (card, PIN, mobile)",
      "Print and cost reporting",
      "Pull printing — secure printing",
      "OCR and workflow automation",
      "Mobile printing (BYOD)",
    ],
    audience: "Large offices, government and educational institutions",
  },
};

/* ═══════════════════════════ KAZAKH ═══════════════════════════ */
const kk: Overlay = {
  microsoft: {
    tagline: "Корпоративтік өнімділіктің әлемдік стандарты — Word, Excel, Teams, Outlook және бұлттық сервистер.",
    summary:
      "Microsoft 365 — бизнеске арналған толық өнімділік платформасы: құжаттар мен кестелер, бейнеконференция, корпоративтік пошта, OneDrive, SharePoint және Teams. Softy LLC корпоративтік лицензияларды вендордан тікелей жеткізеді, Azure AD-пен біріктіреді және тұрақты техникалық қолдау көрсетеді.",
    features: [
      "Office қолданбалары: Word, Excel, PowerPoint, Outlook",
      "Microsoft Teams — байланыс және бірлескен жұмыс",
      "OneDrive және SharePoint бұлттық қоймасы",
      "Корпоративтік пошта + Exchange Online",
      "Қауіпсіздік орталығы және көпфакторлы аутентификация",
      "Ұйым деңгейіндегі әкімшілік басқару",
    ],
    audience: "Бизнес және мемлекеттік ұйымдар, оқу орындары",
  },
  adobe: {
    tagline: "Photoshop, Illustrator, Premiere Pro және басқа да креатив стандарттары — бір жазылыммен.",
    summary:
      "Adobe Creative Cloud — дизайн, бейне, фотосурет және веб-әзірлеуге арналған ең жетілген құралдар жиынтығы. Корпоративтік және оқу лицензияларын ресми жеткіземіз, командалық жазылымдарды басқарамыз.",
    features: [
      "20+ креатив қолданба (Photoshop, Illustrator, Premiere, After Effects)",
      "Adobe Express + Firefly AI",
      "100 ГБ бұлттық қойма және Adobe Fonts",
      "Командалық кітапханалар (Creative Cloud Libraries)",
      "Корпоративтік және оқу жеңілдіктері",
      "Adobe Stock интеграциясы",
    ],
    audience: "Дизайн студиялары, маркетинг бөлімдері, бейне продакшн командалары",
  },
  bitrix24: {
    tagline: "Бәрі бір жерде: CRM, тапсырмалар, құжаттар және байланыс — бірыңғай платформа.",
    summary:
      "Bitrix24 — сатылым (CRM), жоба басқару, корпоративтік портал, ішкі байланыс пен құжат айналымын бір платформада біріктіреді. Бұлтта немесе өз серверінде (on-premise) орналастыруға болады. Softy жеткізеді, баптайды және бизнес-процестерге бейімдейді.",
    features: [
      "CRM және сатылым шұңқыры",
      "Жоба мен тапсырма басқару (Kanban, Гант)",
      "Корпоративтік портал және ішкі чат",
      "Құжат айналымы және қолтаңба",
      "Сайт пен онлайн-дүкен құрастырушысы",
      "Бұлттық немесе on-premise орналасу",
    ],
    audience: "Өсіп келе жатқан компаниялар, сатылым мен маркетинг командалары",
  },
  zoom: {
    tagline: "Бейнекездесулер, телефония, чат және онлайн-конференциялардың әлемдік көшбасшысы.",
    summary:
      "Zoom Workplace — қашықтан және гибридті командаларға арналған бірыңғай байланыс платформасы: HD бейнекездесулер, Zoom Phone бұлттық телефониясы, Zoom Team Chat, вебинар және Zoom Rooms. Softy LLC Zoom-ның ресми серіктесі ретінде корпоративтік лицензияларды рәсімдейді, Microsoft 365 / Google Workspace-пен біріктіреді және баптауға көмектеседі.",
    features: [
      "HD бейнекездесулер (1000+ қатысушы)",
      "Zoom Phone — бұлттық корпоративтік телефония",
      "Zoom Team Chat және Whiteboard",
      "Вебинар және Events (Webinar / Sessions)",
      "Zoom Rooms — мәжіліс залы жабдығы",
      "AI Companion (түйін және мәтін) — қосымша",
    ],
    audience: "Корпоративтік командалар, білім беру, денсаулық сақтау, мемлекеттік сектор",
  },
  clickup: {
    tagline: "Бір қолданба — тапсырмалар, құжаттар, кесте және мақсаттар үшін.",
    summary:
      "ClickUp — икемді жоба басқару платформасы. Команда өз бизнес-процестерін бейімделетін көріністерде (List, Board, Calendar, Timeline) ұйымдастырады. Біз корпоративтік жазылымдарды рәсімдеп, онбординг өткіземіз.",
    features: [
      "Тапсырмалар, ішкі тапсырмалар және тәуелділіктер",
      "Kanban, Гант, тізім және күнтізбе көріністері",
      "Мақсаттар (OKR) және уақытты бақылау",
      "Docs және Whiteboards",
      "Автоматтандыру (no-code)",
      "1000+ интеграция",
    ],
    audience: "Технологиялық стартаптар, маркетинг пен өнім командалары",
  },
  kaspersky: {
    tagline: "Соңғы нүкте қауіпсіздігі бойынша әлемдік көшбасшы — бизнеске арналған көп деңгейлі қорғау.",
    summary:
      "Kaspersky Endpoint Security for Business — компания желісі, серверлер мен қызметкерлердің жұмыс станциялары үшін кәсіби деңгейдегі қорғау. Орталықтандырылған басқару консолі, машиналық оқытуға негізделген қауіптерді анықтау және EDR мүмкіндіктері.",
    features: [
      "Зиянды бағдарламалардан көп деңгейлі қорғау",
      "Орталықтандырылған консоль (Security Center)",
      "Endpoint Detection & Response (EDR)",
      "Қауіпсіз веб-шлюз және пошта сүзгісі",
      "Мобильді құрылғыларды басқару (MDM)",
      "Anti-ransomware және эксплойттан қорғау",
    ],
    audience: "Орта және ірі бизнес, мемлекеттік ұйымдар",
  },
  bitdefender: {
    tagline: "Тәуелсіз тесттерде ең жоғары дәлдікке ие соңғы нүкте қорғауы.",
    summary:
      "Bitdefender GravityZone — AV-TEST пен AV-Comparatives рейтингтерінде үнемі алдыңғы орындарда тұратын шешім. Жеңіл агент, қуатты машиналық оқыту және жүйеге ең аз жүктеме. Серверлерді, жұмыс станцияларын және компьютерлерді қамтиды.",
    features: [
      "AI/ML негізінде 0-day қауіптерді анықтау",
      "Ransomware Remediation (автоматты қалпына келтіру)",
      "Network Attack Defense",
      "Контейнер және Cloud Workload қорғауы",
      "Patch Management",
      "Email және веб қорғауы",
    ],
    audience: "SMB және корпоративтік клиенттер",
  },
  eset: {
    tagline: "Жеңіл агент, мықты қорғау — киберқауіпсіздіктегі 30+ жылдық тәжірибе.",
    summary:
      "ESET PROTECT — Словакияның жетекші киберқауіпсіздік компаниясынан бизнеске арналған бірыңғай қауіпсіздік платформасы. Бұлттық немесе on-premise консоль, EDR/XDR және құпия деректерді шифрлау модульдері бар.",
    features: [
      "ESET LiveGuard (sandboxing) қауіп талдауы",
      "Endpoint Detection & Response (EDR)",
      "Full Disk Encryption модулі",
      "Email және веб қорғауы",
      "Бұлттық немесе on-premise басқару консолі",
      "Жүйеге ең аз жүктемелердің бірі",
    ],
    audience: "SMB, денсаулық сақтау, білім беру, мемлекеттік сектор",
  },
  drweb: {
    tagline: "ТМД нарығында сыналған, сертификатталған көп деңгейлі антивирустық қорғаныс.",
    summary:
      "Dr.Web Enterprise Security Suite — серверлерді, жұмыс станцияларын және мобильді құрылғыларды орталықтандырылған антивирустық қорғау. Проактивті технологиялары, жүйеге аз жүктемесі және ТМД нормативтеріне сәйкестігімен ерекшеленеді.",
    features: [
      "Көп деңгейлі антивирустық және анти-ransomware қорғаныс",
      "Орталықтандырылған басқару (Control Center)",
      "Dr.Web Preventive Protection (проактивті қорғаныс)",
      "Email және веб-трафикті сүзу",
      "Серверлер, жұмыс станциялары және мобильді құрылғылар",
      "ТМД нормативтері мен сертификаттары",
    ],
    audience: "Мемлекеттік органдар, бизнес, ТМД нарығының клиенттері",
  },
  autodesk: {
    tagline: "Жобалау, BIM, механика және анимация бойынша өнеркәсіптік стандарт.",
    summary:
      "Autodesk шешімдері — құрылыс, машина жасау, геодезия және креатив салаларына арналған. AutoCAD (2D/3D), Revit (BIM), Inventor (механика), 3ds Max және Maya (визуализация, анимация). Корпоративтік және оқу лицензиялары бар.",
    features: [
      "AutoCAD — 2D/3D жобалау",
      "Revit — BIM және сәулет",
      "Inventor — машина жасау конструкциялары",
      "3ds Max, Maya — визуализация және анимация",
      "Civil 3D — жол және инфрақұрылым жобалау",
      "Бұлттық бірлескен жұмыс (BIM 360, Autodesk Construction Cloud)",
    ],
    audience: "Сәулет бюролары, құрылыс және машина жасау компаниялары",
  },
  ideastatica: {
    tagline: "Болат пен бетон түйіндерін секундтарда жобалау және тексеру.",
    summary:
      "IDEA StatiCa — құрылымдық инженерлерге арналған мамандандырылған бағдарламалық жасақтама. Болат пен бетон түйіндерін, дәнекерлерді, анкерлік болттар мен элементтерді Eurocode/AISC/CSA стандарттарына сәйкес талдайды.",
    features: [
      "Болат түйіндері мен дәнекерлерді талдау",
      "Бетон түйіндері мен бөлшектерін жобалау",
      "Eurocode, AISC, AS, SP, CSA стандарттары",
      "Revit, Tekla, Advance Steel-мен интеграция",
      "BIM моделінен тікелей экспорт",
      "Автоматты сызбалар мен есептер",
    ],
    audience: "Құрылымдық инженерлер, құрылыс жобалау бюролары",
  },
  indorsoft: {
    tagline: "ТМД нарығында жол және инфрақұрылым жобалауға арналған сенімді шешім.",
    summary:
      "ИндорСофт өнімдері (IndorCAD, IndorRoad, IndorTrafficPro) — жолдарды, көшелерді, трамвай жолдарын және қала инфрақұрылымын жобалауға арналған. ТМД нормативтеріне толық сәйкес келеді (ГОСТ, СП, ШНК).",
    features: [
      "IndorCAD — жол және көше жобалау",
      "IndorRoad — күрделі жөндеу жобалары",
      "IndorTrafficPro — жол қозғалысын модельдеу",
      "ТМД нормативтері мен стандарттары",
      "AutoCAD-пен толық үйлесімділік",
      "ГАЖ және геодезия интеграциясы",
    ],
    audience: "Жол құрылысы ұйымдары, көлік жоспарлау",
  },
  fortinet: {
    tagline: "Gartner Magic Quadrant көшбасшысы — желілік қауіпсіздік бойынша әлемдік көшбасшы.",
    summary:
      "Fortinet FortiGate — жаңа буын брандмауэрі (NGFW), SD-WAN және қауіпсіз Wi-Fi. Арнайы SoC4/SoC5 чиптерінің арқасында ең жоғары өнімділік. Орталықтандырылған басқару FortiManager және FortiAnalyzer арқылы.",
    features: [
      "Next-Gen Firewall (NGFW) + IPS",
      "SD-WAN және SASE",
      "FortiSwitch + FortiAP (қауіпсіз Wi-Fi)",
      "FortiManager орталықтандырылған басқару",
      "Zero Trust Network Access",
      "Threat Intelligence (FortiGuard Labs)",
    ],
    audience: "Корпоративтік желілер, ISP, мемлекеттік ұйымдар",
  },
  paloaltonetworks: {
    tagline: "Киберқауіпсіздіктегі ең инновациялық компаниялардың бірі.",
    summary:
      "Palo Alto Networks — жаңа буын брандмауэрлері (PA-Series), бұлттық қауіпсіздік (Prisma Cloud), SASE (Prisma Access) және XDR (Cortex) шешімдері. App-ID технологиясы мыңдаған қолданбаны дәл жіктейді.",
    features: [
      "PAN-OS негізіндегі NGFW",
      "App-ID, User-ID, Content-ID технологиялары",
      "Prisma Cloud — бұлт қауіпсіздігі",
      "Prisma Access — SASE",
      "Cortex XDR/XSIAM — кеңейтілген талдау",
      "WildFire — бұлттық sandbox",
    ],
    audience: "Ірі корпоративтік және халықаралық компаниялар",
  },
  falcongaze: {
    tagline: "Корпоративтік деректердің ағып кетуінің алдын алу — DLP шешімі.",
    summary:
      "Falcongaze SecureTower — Data Loss Prevention (DLP) жүйесі. Email, мессенджер, USB, бұлттық қызметтер мен басып шығаруды бақылайды. Ішкі қауіптерді анықтайды және қызметкерлердің әрекетін есептейді.",
    features: [
      "Email, IM, әлеуметтік желі бақылауы",
      "USB, принтер және бұлттық қызметтер",
      "Скриншот және пернетақта тарихы",
      "Ішкі қауіп аналитикасы (UEBA)",
      "Автоматты бұғаттау және ескерту",
      "Есеп беру және аудит",
    ],
    audience: "Қаржы, денсаулық, мемлекет және құпия деректермен жұмыс істейтін ұйымдар",
  },
  gfi: {
    tagline: "SMB үшін қолжетімді әрі ыңғайлы желілік қауіпсіздік пен пошта сервері.",
    summary:
      "GFI Software портфолиосы — KerioControl (UTM firewall), KerioConnect (пошта сервері), LanGuard (осалдық сканері) және Archiver. Шағын және орта бизнеске оңтайландырылған, қолжетімді бағамен.",
    features: [
      "KerioControl — UTM firewall + VPN",
      "KerioConnect — корпоративтік пошта сервері",
      "LanGuard — осалдық сканері және патч",
      "Archiver — пошта мұрағаттау",
      "Жылдам орнату, ыңғайлы интерфейс",
      "SMB-ге бейімделген лицензиялау",
    ],
    audience: "Шағын және орта бизнес (SMB)",
  },
  ssl: {
    tagline: "DigiCert, Sectigo, GlobalSign — ресми SSL/TLS сертификаттары.",
    summary:
      "Сайтыңыз бен қызметтеріңіздің қауіпсіздігі үшін ресми SSL/TLS сертификаттары. DV (Domain Validated), OV (Organization Validated) және EV (Extended Validation) нұсқалары. Wildcard және Multi-Domain (SAN) сертификаттары.",
    features: [
      "Single, Wildcard және Multi-Domain (SAN)",
      "DV, OV, EV валидация деңгейлері",
      "DigiCert, Sectigo, GlobalSign сертификаттары",
      "Code Signing сертификаттары",
      "$1.75M+ кепілдік",
      "Орнату және баптау көмегі",
    ],
    audience: "Веб-сайттар, e-commerce, мемлекеттік порталдар, корпоративтік жүйелер",
  },
  veeam: {
    tagline: "Сақтық көшіру мен қалпына келтіру бойынша №1 шешім — Gartner рейтингтерінің көшбасшысы.",
    summary:
      "Veeam Backup & Replication — виртуалды, физикалық, NAS және бұлттық (AWS, Azure, GCP, Microsoft 365) жүктемелерді сақтық көшіруге арналған жетекші платформа. Жылдам қалпына келтіру, ransomware-ден қорғалған көшірмелер және immutable repository.",
    features: [
      "VMware, Hyper-V, Nutanix AHV сақтық көшіру",
      "Microsoft 365 (Exchange, OneDrive, SharePoint, Teams)",
      "Физикалық серверлер мен жұмыс станциялары",
      "Бұлттық жүктемелер (AWS, Azure, GCP)",
      "Instant Recovery — минуттарда қалпына келтіру",
      "Immutable backup (ransomware қорғауы)",
    ],
    audience: "Корпоративтік IT, дата-орталықтар, MSP",
  },
  ibm: {
    tagline: "Ірі кәсіпорындарға арналған корпоративтік инфрақұрылым және бағдарламалық жасақтама.",
    summary:
      "IBM шешімдері — IBM Spectrum Protect (сақтық көшіру), IBM Cloud Pak (контейнер платформасы), IBM Db2 (дерекқор), IBM Watson (AI). Ірі бизнеске арналған тамаша сенімділік пен ауқымдылық.",
    features: [
      "IBM Spectrum Protect — корпоративтік сақтық көшіру",
      "IBM Cloud Pak — Red Hat OpenShift негізінде",
      "Db2 — дерекқор",
      "IBM Watson — AI платформасы",
      "Hybrid Cloud стратегиясы",
      "Mainframe және Power Systems қолдауы",
    ],
    audience: "Ірі корпоративтік және мемлекеттік ұйымдар",
  },
  jetbrains: {
    tagline: "IntelliJ IDEA, PyCharm, WebStorm — әзірлеушілерге арналған өнеркәсіптік стандарт.",
    summary:
      "JetBrains IDE-лері — әр тілге арналған жеке IDE: IntelliJ IDEA (Java/Kotlin), PyCharm (Python), WebStorm (JS/TS), Rider (.NET), GoLand, PhpStorm. JetBrains AI Assistant интеграциясы және командалық лицензиялар.",
    features: [
      "IntelliJ IDEA, PyCharm, WebStorm, Rider",
      "GoLand, PhpStorm, RubyMine, CLion",
      "Kotlin және JetBrains AI Assistant",
      "TeamCity — CI/CD",
      "YouTrack — bug tracking",
      "Корпоративтік және оқу лицензиялары",
    ],
    audience: "Әзірлеушілер, әзірлеу командалары, IT оқу орындары",
  },
  passware: {
    tagline: "Құпиясөздерді қалпына келтіру және цифрлық криминалистикаға арналған кәсіби құралдар.",
    summary:
      "Passware Kit — компьютерлік криминалистика мен құпиясөзді қалпына келтіру саласындағы жетекші шешім. 340+ файл түрі үшін құпиясөзді қалпына келтіру, FileVault, BitLocker, TrueCrypt дискілерін ашу, мобильді құрылғыларды талдау.",
    features: [
      "340+ файл түрі үшін құпиясөзді қалпына келтіру",
      "FileVault, BitLocker, VeraCrypt шифрсыздандыру",
      "GPU және үлестірілген құпиясөз іздеу",
      "iOS және Android мобильді криминалистика",
      "Жадты талдау (RAM dump)",
      "Cloud Backup талдауы",
    ],
    audience: "IT қауіпсіздік, құқық қорғау органдары, криминалист сарапшылар",
  },
  myq: {
    tagline: "Басып шығару, сканерлеу және шығынды бақылау — бірыңғай платформа.",
    summary:
      "MyQ Solution — корпоративтік басып шығаруды басқару жүйесі. Принтерлер мен МФУ-ларды орталықтандырылған бақылау, пайдаланушы аутентификациясы (карта, PIN), басып шығару есебі және шығынды оңтайландыру.",
    features: [
      "Орталықтандырылған принтер басқару",
      "Пайдаланушы аутентификациясы (карта, PIN, мобильді)",
      "Басып шығару және шығын есебі",
      "Pull printing — қауіпсіз басып шығару",
      "OCR және workflow автоматтандыру",
      "Мобильді басып шығару (BYOD)",
    ],
    audience: "Ірі офистер, мемлекеттік және оқу мекемелері",
  },
};

/* ═══════════════════════════ KYRGYZ ═══════════════════════════ */
const ky: Overlay = {
  microsoft: {
    tagline: "Корпоративдик майнаптуулуктун дүйнөлүк стандарты — Word, Excel, Teams, Outlook жана булут сервистери.",
    summary:
      "Microsoft 365 — бизнес үчүн толук майнаптуулук платформасы: документтер жана таблицалар, видеоконференция, корпоративдик почта, OneDrive, SharePoint жана Teams. Softy LLC корпоративдик лицензияларды вендордон түздөн-түз жеткирет, Azure AD менен бириктирет жана туруктуу техникалык колдоо көрсөтөт.",
    features: [
      "Office колдонмолору: Word, Excel, PowerPoint, Outlook",
      "Microsoft Teams — байланыш жана биргелешкен иш",
      "OneDrive жана SharePoint булут сактагычы",
      "Корпоративдик почта + Exchange Online",
      "Коопсуздук борбору жана көп факторлуу аутентификация",
      "Уюм деңгээлиндеги администрациялык башкаруу",
    ],
    audience: "Бизнес жана мамлекеттик уюмдар, окуу жайлары",
  },
  adobe: {
    tagline: "Photoshop, Illustrator, Premiere Pro жана башка креатив стандарттары — бир жазылуу менен.",
    summary:
      "Adobe Creative Cloud — дизайн, видео, сүрөт жана веб-иштеп чыгуу үчүн эң жетилген аспаптар топтому. Корпоративдик жана окуу лицензияларын расмий жеткиребиз, командалык жазылууларды башкарабыз.",
    features: [
      "20+ креатив колдонмо (Photoshop, Illustrator, Premiere, After Effects)",
      "Adobe Express + Firefly AI",
      "100 ГБ булут сактагыч жана Adobe Fonts",
      "Командалык китепканалар (Creative Cloud Libraries)",
      "Корпоративдик жана окуу жеңилдиктери",
      "Adobe Stock интеграциясы",
    ],
    audience: "Дизайн студиялары, маркетинг бөлүмдөрү, видео продакшн командалары",
  },
  bitrix24: {
    tagline: "Баары бир жерде: CRM, тапшырмалар, документтер жана байланыш — бирдиктүү платформа.",
    summary:
      "Bitrix24 — сатуу (CRM), долбоор башкаруу, корпоративдик портал, ички байланыш жана документ айланышын бир платформада бириктирет. Булутта же өз серверинде (on-premise) жайгаштырууга болот. Softy жеткирет, ырастайт жана бизнес-процесстерге ылайыкташтырат.",
    features: [
      "CRM жана сатуу воронкасы",
      "Долбоор жана тапшырма башкаруу (Kanban, Гант)",
      "Корпоративдик портал жана ички чат",
      "Документ айланышы жана кол тамга",
      "Сайт жана онлайн-дүкөн куруучу",
      "Булут же on-premise жайгашуу",
    ],
    audience: "Өсүп жаткан компаниялар, сатуу жана маркетинг командалары",
  },
  zoom: {
    tagline: "Видеожолугушуулар, телефония, чат жана онлайн-конференциялардын дүйнөлүк лидери.",
    summary:
      "Zoom Workplace — алыстан жана гибриддик командалар үчүн бирдиктүү байланыш платформасы: HD видеожолугушуулар, Zoom Phone булут телефониясы, Zoom Team Chat, вебинар жана Zoom Rooms. Softy LLC Zoomдун расмий өнөктөшү катары корпоративдик лицензияларды тариздейт, Microsoft 365 / Google Workspace менен бириктирет жана ырастоого жардам берет.",
    features: [
      "HD видеожолугушуулар (1000+ катышуучу)",
      "Zoom Phone — булут корпоративдик телефония",
      "Zoom Team Chat жана Whiteboard",
      "Вебинар жана Events (Webinar / Sessions)",
      "Zoom Rooms — жыйын залынын жабдуусу",
      "AI Companion (корутунду жана текст) — кошумча",
    ],
    audience: "Корпоративдик командалар, билим берүү, саламаттыкты сактоо, мамлекеттик сектор",
  },
  clickup: {
    tagline: "Бир колдонмо — тапшырмалар, документтер, график жана максаттар үчүн.",
    summary:
      "ClickUp — ийкемдүү долбоор башкаруу платформасы. Команда өз бизнес-процесстерин ылайыкташтырылган көрүнүштөрдө (List, Board, Calendar, Timeline) уюштурат. Биз корпоративдик жазылууларды тариздеп, онбординг өткөрөбүз.",
    features: [
      "Тапшырмалар, ички тапшырмалар жана көз карандылыктар",
      "Kanban, Гант, тизме жана календарь көрүнүштөрү",
      "Максаттар (OKR) жана убакытты көзөмөлдөө",
      "Docs жана Whiteboards",
      "Автоматташтыруу (no-code)",
      "1000+ интеграция",
    ],
    audience: "Технологиялык стартаптар, маркетинг жана продукт командалары",
  },
  kaspersky: {
    tagline: "Акыркы чекит коопсуздугу боюнча дүйнөлүк лидер — бизнес үчүн көп катмарлуу коргоо.",
    summary:
      "Kaspersky Endpoint Security for Business — компаниянын тармагы, серверлер жана кызматкерлердин жумушчу станциялары үчүн кесипкөй деңгээлдеги коргоо. Борборлоштурулган башкаруу консолу, машиналык окутууга негизделген коркунучтарды аныктоо жана EDR мүмкүнчүлүктөрү.",
    features: [
      "Зыяндуу программалардан көп катмарлуу коргоо",
      "Борборлоштурулган консоль (Security Center)",
      "Endpoint Detection & Response (EDR)",
      "Коопсуз веб-шлюз жана почта чыпкасы",
      "Мобилдик түзмөктөрдү башкаруу (MDM)",
      "Anti-ransomware жана эксплойттон коргоо",
    ],
    audience: "Орто жана ири бизнес, мамлекеттик уюмдар",
  },
  bitdefender: {
    tagline: "Көз карандысыз тесттерде эң жогорку тактыкка ээ акыркы чекит коргоосу.",
    summary:
      "Bitdefender GravityZone — AV-TEST жана AV-Comparatives рейтингдеринде дайыма алдыңкы орундарда турган чечим. Жеңил агент, күчтүү машиналык окутуу жана системага эң аз жүктөм. Серверлерди, жумушчу станцияларды жана компьютерлерди камтыйт.",
    features: [
      "AI/ML негизинде 0-day коркунучтарды аныктоо",
      "Ransomware Remediation (автоматтык калыбына келтирүү)",
      "Network Attack Defense",
      "Контейнер жана Cloud Workload коргоосу",
      "Patch Management",
      "Email жана веб коргоосу",
    ],
    audience: "SMB жана корпоративдик кардарлар",
  },
  eset: {
    tagline: "Жеңил агент, күчтүү коргоо — киберкоопсуздуктагы 30+ жылдык тажрыйба.",
    summary:
      "ESET PROTECT — Словакиянын алдыңкы киберкоопсуздук компаниясынан бизнес үчүн бирдиктүү коопсуздук платформасы. Булут же on-premise консоль, EDR/XDR жана купуя маалыматтарды шифрлөө модулдары бар.",
    features: [
      "ESET LiveGuard (sandboxing) коркунуч талдоосу",
      "Endpoint Detection & Response (EDR)",
      "Full Disk Encryption модулу",
      "Email жана веб коргоосу",
      "Булут же on-premise башкаруу консолу",
      "Системага эң аз жүктөмдөрдүн бири",
    ],
    audience: "SMB, саламаттыкты сактоо, билим берүү, мамлекеттик сектор",
  },
  drweb: {
    tagline: "КМШ рыногунда сыналган, сертификатталган көп катмарлуу антивирус коргоосу.",
    summary:
      "Dr.Web Enterprise Security Suite — серверлерди, жумушчу станцияларды жана мобилдик түзмөктөрдү борборлоштурулган антивирус коргоо. Проактивдүү технологиялары, системага аз жүктөмү жана КМШ ченемдерине шайкештиги менен айырмаланат.",
    features: [
      "Көп катмарлуу антивирус жана анти-ransomware коргоо",
      "Борборлоштурулган башкаруу (Control Center)",
      "Dr.Web Preventive Protection (проактивдүү коргоо)",
      "Email жана веб-трафикти чыпкалоо",
      "Серверлер, жумушчу станциялар жана мобилдик түзмөктөр",
      "КМШ ченемдери жана сертификаттары",
    ],
    audience: "Мамлекеттик органдар, бизнес, КМШ рыногунун кардарлары",
  },
  autodesk: {
    tagline: "Долбоорлоо, BIM, механика жана анимация боюнча өнөр жай стандарты.",
    summary:
      "Autodesk чечимдери — курулуш, машина куруу, геодезия жана креатив тармактары үчүн. AutoCAD (2D/3D), Revit (BIM), Inventor (механика), 3ds Max жана Maya (визуализация, анимация). Корпоративдик жана окуу лицензиялары бар.",
    features: [
      "AutoCAD — 2D/3D долбоорлоо",
      "Revit — BIM жана архитектура",
      "Inventor — машина куруу конструкциялары",
      "3ds Max, Maya — визуализация жана анимация",
      "Civil 3D — жол жана инфраструктура долбоорлоо",
      "Булут биргелешкен иш (BIM 360, Autodesk Construction Cloud)",
    ],
    audience: "Архитектуралык бюролор, курулуш жана машина куруу компаниялары",
  },
  ideastatica: {
    tagline: "Болот жана бетон түйүндөрүн секунддарда долбоорлоо жана текшерүү.",
    summary:
      "IDEA StatiCa — структуралык инженерлер үчүн адистештирилген программалык камсыздоо. Болот жана бетон түйүндөрүн, ширетүүлөрдү, анкердик болттор менен элементтерди Eurocode/AISC/CSA стандарттарына ылайык талдайт.",
    features: [
      "Болот түйүндөрү жана ширетүүлөрдү талдоо",
      "Бетон түйүндөрү жана бөлүктөрдү долбоорлоо",
      "Eurocode, AISC, AS, SP, CSA стандарттары",
      "Revit, Tekla, Advance Steel менен интеграция",
      "BIM моделинен түз экспорт",
      "Автоматтык сызмалар жана отчёттор",
    ],
    audience: "Структуралык инженерлер, курулуш долбоорлоо бюролору",
  },
  indorsoft: {
    tagline: "КМШ рыногунда жол жана инфраструктура долбоорлоо үчүн ишенимдүү чечим.",
    summary:
      "ИндорСофт продуктулары (IndorCAD, IndorRoad, IndorTrafficPro) — жолдорду, көчөлөрдү, трамвай жолдорун жана шаар инфраструктурасын долбоорлоо үчүн. КМШ нормативдерине толук ылайык келет (ГОСТ, СП, ШНК).",
    features: [
      "IndorCAD — жол жана көчө долбоорлоо",
      "IndorRoad — капиталдык оңдоо долбоорлору",
      "IndorTrafficPro — жол кыймылын моделдөө",
      "КМШ нормативдери жана стандарттары",
      "AutoCAD менен толук шайкештик",
      "ГАЖ жана геодезия интеграциясы",
    ],
    audience: "Жол курулуш уюмдары, транспорт пландоо",
  },
  fortinet: {
    tagline: "Gartner Magic Quadrant лидери — тармак коопсуздугу боюнча дүйнөлүк лидер.",
    summary:
      "Fortinet FortiGate — жаңы муундагы брандмауэр (NGFW), SD-WAN жана коопсуз Wi-Fi. Атайын SoC4/SoC5 чиптеринин эсебинен эң жогорку өндүрүмдүүлүк. Борборлоштурулган башкаруу FortiManager жана FortiAnalyzer аркылуу.",
    features: [
      "Next-Gen Firewall (NGFW) + IPS",
      "SD-WAN жана SASE",
      "FortiSwitch + FortiAP (коопсуз Wi-Fi)",
      "FortiManager борборлоштурулган башкаруу",
      "Zero Trust Network Access",
      "Threat Intelligence (FortiGuard Labs)",
    ],
    audience: "Корпоративдик тармактар, ISP, мамлекеттик уюмдар",
  },
  paloaltonetworks: {
    tagline: "Киберкоопсуздуктагы эң инновациялык компаниялардын бири.",
    summary:
      "Palo Alto Networks — жаңы муундагы брандмауэрлер (PA-Series), булут коопсуздугу (Prisma Cloud), SASE (Prisma Access) жана XDR (Cortex) чечимдери. App-ID технологиясы миңдеген колдонмону так классификациялайт.",
    features: [
      "PAN-OS негизиндеги NGFW",
      "App-ID, User-ID, Content-ID технологиялары",
      "Prisma Cloud — булут коопсуздугу",
      "Prisma Access — SASE",
      "Cortex XDR/XSIAM — кеңейтилген талдоо",
      "WildFire — булут sandbox",
    ],
    audience: "Ири корпоративдик жана эл аралык компаниялар",
  },
  falcongaze: {
    tagline: "Корпоративдик маалыматтардын агып кетишинин алдын алуу — DLP чечими.",
    summary:
      "Falcongaze SecureTower — Data Loss Prevention (DLP) системасы. Email, мессенджер, USB, булут кызматтары жана басып чыгарууну көзөмөлдөйт. Ички коркунучтарды аныктайт жана кызматкерлердин аракетин отчёттойт.",
    features: [
      "Email, IM, социалдык тармак көзөмөлү",
      "USB, принтер жана булут кызматтары",
      "Скриншот жана клавиатура тарыхы",
      "Ички коркунуч аналитикасы (UEBA)",
      "Автоматтык бөгөттөө жана эскертүү",
      "Отчёт жана аудит",
    ],
    audience: "Каржы, саламаттык, мамлекет жана купуя маалымат менен иштеген уюмдар",
  },
  gfi: {
    tagline: "SMB үчүн жеткиликтүү жана ыңгайлуу тармак коопсуздугу жана почта сервери.",
    summary:
      "GFI Software портфолиосу — KerioControl (UTM firewall), KerioConnect (почта сервери), LanGuard (аялуу жерлер сканери) жана Archiver. Чакан жана орто бизнес үчүн оптималдаштырылган, жеткиликтүү баада.",
    features: [
      "KerioControl — UTM firewall + VPN",
      "KerioConnect — корпоративдик почта сервери",
      "LanGuard — аялуу жерлер сканери жана патч",
      "Archiver — почта архивдөө",
      "Тез орнотуу, ыңгайлуу интерфейс",
      "SMB-ге ылайыкташтырылган лицензиялоо",
    ],
    audience: "Чакан жана орто бизнес (SMB)",
  },
  ssl: {
    tagline: "DigiCert, Sectigo, GlobalSign — расмий SSL/TLS сертификаттары.",
    summary:
      "Сайтыңыздын жана кызматтарыңыздын коопсуздугу үчүн расмий SSL/TLS сертификаттары. DV (Domain Validated), OV (Organization Validated) жана EV (Extended Validation) варианттары. Wildcard жана Multi-Domain (SAN) сертификаттары.",
    features: [
      "Single, Wildcard жана Multi-Domain (SAN)",
      "DV, OV, EV валидация деңгээлдери",
      "DigiCert, Sectigo, GlobalSign сертификаттары",
      "Code Signing сертификаттары",
      "$1.75M+ кепилдик",
      "Орнотуу жана конфигурациялоо жардамы",
    ],
    audience: "Веб-сайттар, e-commerce, мамлекеттик порталдар, корпоративдик системалар",
  },
  veeam: {
    tagline: "Камдык көчүрүү жана калыбына келтирүү боюнча №1 чечим — Gartner рейтингдеринин лидери.",
    summary:
      "Veeam Backup & Replication — виртуалдык, физикалык, NAS жана булут (AWS, Azure, GCP, Microsoft 365) жүктөмдөрүн камдык көчүрүү үчүн алдыңкы платформа. Тез калыбына келтирүү, ransomware-ден корголгон көчүрмөлөр жана immutable repository.",
    features: [
      "VMware, Hyper-V, Nutanix AHV камдык көчүрүү",
      "Microsoft 365 (Exchange, OneDrive, SharePoint, Teams)",
      "Физикалык серверлер жана жумушчу станциялар",
      "Булут жүктөмдөрү (AWS, Azure, GCP)",
      "Instant Recovery — мүнөттөрдө калыбына келтирүү",
      "Immutable backup (ransomware коргоосу)",
    ],
    audience: "Корпоративдик IT, дата-борборлор, MSP",
  },
  ibm: {
    tagline: "Ири ишканалар үчүн корпоративдик инфраструктура жана программалык камсыздоо.",
    summary:
      "IBM чечимдери — IBM Spectrum Protect (камдык көчүрүү), IBM Cloud Pak (контейнер платформасы), IBM Db2 (маалымат базасы), IBM Watson (AI). Ири бизнес үчүн эң сонун ишенимдүүлүк жана масштабдуулук.",
    features: [
      "IBM Spectrum Protect — корпоративдик камдык көчүрүү",
      "IBM Cloud Pak — Red Hat OpenShift негизинде",
      "Db2 — маалымат базасы",
      "IBM Watson — AI платформасы",
      "Hybrid Cloud стратегиясы",
      "Mainframe жана Power Systems колдоосу",
    ],
    audience: "Ири корпоративдик жана мамлекеттик уюмдар",
  },
  jetbrains: {
    tagline: "IntelliJ IDEA, PyCharm, WebStorm — иштеп чыгуучулар үчүн өнөр жай стандарты.",
    summary:
      "JetBrains IDE'лери — ар бир тил үчүн өзүнчө IDE: IntelliJ IDEA (Java/Kotlin), PyCharm (Python), WebStorm (JS/TS), Rider (.NET), GoLand, PhpStorm. JetBrains AI Assistant интеграциясы жана командалык лицензиялар.",
    features: [
      "IntelliJ IDEA, PyCharm, WebStorm, Rider",
      "GoLand, PhpStorm, RubyMine, CLion",
      "Kotlin жана JetBrains AI Assistant",
      "TeamCity — CI/CD",
      "YouTrack — bug tracking",
      "Корпоративдик жана окуу лицензиялары",
    ],
    audience: "Иштеп чыгуучулар, иштеп чыгуу командалары, IT окуу жайлары",
  },
  passware: {
    tagline: "Сырсөздөрдү калыбына келтирүү жана санариптик криминалистика үчүн кесипкөй аспаптар.",
    summary:
      "Passware Kit — компьютердик криминалистика жана сырсөздү калыбына келтирүү тармагындагы алдыңкы чечим. 340+ файл түрү үчүн сырсөздү калыбына келтирүү, FileVault, BitLocker, TrueCrypt дисктерин ачуу, мобилдик түзмөктөрдү талдоо.",
    features: [
      "340+ файл түрү үчүн сырсөздү калыбына келтирүү",
      "FileVault, BitLocker, VeraCrypt чечмелөө",
      "GPU жана бөлүштүрүлгөн сырсөз издөө",
      "iOS жана Android мобилдик криминалистика",
      "Эстутумду талдоо (RAM dump)",
      "Cloud Backup талдоо",
    ],
    audience: "IT коопсуздук, укук коргоо органдары, криминалист эксперттер",
  },
  myq: {
    tagline: "Басып чыгаруу, скандөө жана чыгымдарды көзөмөлдөө — бирдиктүү платформа.",
    summary:
      "MyQ Solution — корпоративдик басып чыгарууну башкаруу системасы. Принтерлерди жана МФУларды борборлоштурулган көзөмөл, колдонуучу аутентификациясы (карта, PIN), басып чыгаруу отчёту жана чыгымдарды оптималдаштыруу.",
    features: [
      "Борборлоштурулган принтер башкаруу",
      "Колдонуучу аутентификациясы (карта, PIN, мобилдик)",
      "Басып чыгаруу жана чыгым отчёту",
      "Pull printing — коопсуз басып чыгаруу",
      "OCR жана workflow автоматташтыруу",
      "Мобилдик басып чыгаруу (BYOD)",
    ],
    audience: "Ири офистер, мамлекеттик жана окуу мекемелери",
  },
};

/* ═══════════════════════════ TAJIK ═══════════════════════════ */
const tg: Overlay = {
  microsoft: {
    tagline: "Стандарти ҷаҳонии маҳсулнокии корпоративӣ — Word, Excel, Teams, Outlook ва хидматҳои абрӣ.",
    summary:
      "Microsoft 365 — платформаи пурраи маҳсулнокӣ барои бизнес: ҳуҷҷатҳо ва ҷадвалҳо, видеоконфронс, почтаи корпоративӣ, OneDrive, SharePoint ва Teams. Softy LLC литсензияҳои корпоративиро бевосита аз вендор таъмин мекунад, бо Azure AD муттаҳид месозад ва дастгирии доимии техникӣ медиҳад.",
    features: [
      "Барномаҳои Office: Word, Excel, PowerPoint, Outlook",
      "Microsoft Teams — алоқа ва ҳамкорӣ",
      "Захираи абрии OneDrive ва SharePoint",
      "Почтаи корпоративӣ + Exchange Online",
      "Маркази амният ва аутентификатсияи бисёрфакторӣ",
      "Идоракунии маъмурӣ дар сатҳи ташкилот",
    ],
    audience: "Бизнес ва ташкилотҳои давлатӣ, муассисаҳои таълимӣ",
  },
  adobe: {
    tagline: "Photoshop, Illustrator, Premiere Pro ва дигар стандартҳои креативӣ — бо як обуна.",
    summary:
      "Adobe Creative Cloud — маҷмӯи мукаммалтарини абзорҳо барои дизайн, видео, аккосӣ ва веб-таҳия. Литсензияҳои корпоративӣ ва таълимиро расман таъмин мекунем, обунаҳои дастаҳоро идора мекунем.",
    features: [
      "20+ барномаи креативӣ (Photoshop, Illustrator, Premiere, After Effects)",
      "Adobe Express + Firefly AI",
      "100 ГБ захираи абрӣ ва Adobe Fonts",
      "Китобхонаҳои дастаӣ (Creative Cloud Libraries)",
      "Тахфифҳои корпоративӣ ва таълимӣ",
      "Интегратсияи Adobe Stock",
    ],
    audience: "Студияҳои дизайн, шӯъбаҳои маркетинг, дастаҳои истеҳсоли видео",
  },
  bitrix24: {
    tagline: "Ҳама чиз дар як ҷо: CRM, вазифаҳо, ҳуҷҷатҳо ва алоқа — як платформа.",
    summary:
      "Bitrix24 — фурӯш (CRM), идораи лоиҳа, портали корпоративӣ, алоқаи дохилӣ ва гардиши ҳуҷҷатро дар як платформа муттаҳид мекунад. Ҷойгиркунии абрӣ ё дар сервери худӣ (on-premise) имконпазир аст. Softy таъмин мекунад, танзим мекунад ва ба равандҳои бизнес мутобиқ месозад.",
    features: [
      "CRM ва қифи фурӯш",
      "Идораи лоиҳа ва вазифа (Kanban, Гант)",
      "Портали корпоративӣ ва чати дохилӣ",
      "Гардиши ҳуҷҷат ва имзо",
      "Созандаи сайт ва мағозаи онлайн",
      "Ҷойгиршавии абрӣ ё on-premise",
    ],
    audience: "Ширкатҳои рӯ ба афзоиш, дастаҳои фурӯш ва маркетинг",
  },
  zoom: {
    tagline: "Пешвои ҷаҳонии вохӯриҳои видеоӣ, телефония, чат ва конфронсҳои онлайн.",
    summary:
      "Zoom Workplace — платформаи ягонаи алоқа барои дастаҳои дурдаст ва гибридӣ: вохӯриҳои видеоии HD, телефонияи абрии Zoom Phone, Zoom Team Chat, вебинар ва Zoom Rooms. Softy LLC ҳамчун шарики расмии Zoom литсензияҳои корпоративиро ба расмият медарорад, бо Microsoft 365 / Google Workspace муттаҳид месозад ва дар танзим кӯмак мекунад.",
    features: [
      "Вохӯриҳои видеоии HD (1000+ иштирокчӣ)",
      "Zoom Phone — телефонияи абрии корпоративӣ",
      "Zoom Team Chat ва Whiteboard",
      "Вебинар ва Events (Webinar / Sessions)",
      "Zoom Rooms — таҷҳизоти ҳуҷраи маҷлис",
      "AI Companion (хулоса ва матн) — иловагӣ",
    ],
    audience: "Дастаҳои корпоративӣ, маориф, тандурустӣ, бахши давлатӣ",
  },
  clickup: {
    tagline: "Як барнома — барои вазифаҳо, ҳуҷҷатҳо, ҷадвал ва ҳадафҳо.",
    summary:
      "ClickUp — платформаи чандири идораи лоиҳа. Даста равандҳои бизнеси худро дар намудҳои мутобиқшаванда (List, Board, Calendar, Timeline) ташкил мекунад. Мо обунаҳои корпоративиро ба расмият медарорем ва онбординг мегузаронем.",
    features: [
      "Вазифаҳо, зервазифаҳо ва вобастагиҳо",
      "Намудҳои Kanban, Гант, рӯйхат ва тақвим",
      "Ҳадафҳо (OKR) ва назорати вақт",
      "Docs ва Whiteboards",
      "Автоматизатсия (no-code)",
      "1000+ интегратсия",
    ],
    audience: "Стартапҳои технологӣ, дастаҳои маркетинг ва маҳсулот",
  },
  kaspersky: {
    tagline: "Пешвои ҷаҳонӣ дар амнияти нуқтаи ниҳоӣ — ҳифзи бисёрсатҳа барои бизнес.",
    summary:
      "Kaspersky Endpoint Security for Business — ҳифзи сатҳи касбӣ барои шабакаи ширкат, серверҳо ва истгоҳҳои кории кормандон. Консоли идоракунии марказонидашуда, ошкори таҳдидҳо дар асоси омӯзиши мошинӣ ва имкониятҳои EDR.",
    features: [
      "Ҳифзи бисёрсатҳа аз барномаҳои зараровар",
      "Консоли марказонидашуда (Security Center)",
      "Endpoint Detection & Response (EDR)",
      "Дарвозаи бехатари веб ва филтри почта",
      "Идораи дастгоҳҳои мобилӣ (MDM)",
      "Anti-ransomware ва ҳифз аз эксплойт",
    ],
    audience: "Бизнеси миёна ва калон, ташкилотҳои давлатӣ",
  },
  bitdefender: {
    tagline: "Ҳифзи нуқтаи ниҳоӣ бо баландтарин дақиқӣ дар озмоишҳои мустақил.",
    summary:
      "Bitdefender GravityZone — ҳалле, ки доимо дар ҷойҳои аввали рейтингҳои AV-TEST ва AV-Comparatives меистад. Агенти сабук, омӯзиши мошинии пурқувват ва сарбории ҳадди ақалли система. Серверҳо, истгоҳҳои корӣ ва компютерҳоро фаро мегирад.",
    features: [
      "Ошкори таҳдидҳои 0-day дар асоси AI/ML",
      "Ransomware Remediation (барқарорсозии худкор)",
      "Network Attack Defense",
      "Ҳифзи контейнер ва Cloud Workload",
      "Patch Management",
      "Ҳифзи email ва веб",
    ],
    audience: "Муштариёни SMB ва корпоративӣ",
  },
  eset: {
    tagline: "Агенти сабук, ҳифзи пурқувват — 30+ соли таҷриба дар киберамният.",
    summary:
      "ESET PROTECT — платформаи ягонаи амният барои бизнес аз ширкати пешбари киберамнияти Словакия. Консоли абрӣ ё on-premise, EDR/XDR ва модулҳои рамзгузории маълумоти махфӣ дастрасанд.",
    features: [
      "ESET LiveGuard (sandboxing) таҳлили таҳдид",
      "Endpoint Detection & Response (EDR)",
      "Модули Full Disk Encryption",
      "Ҳифзи email ва веб",
      "Консоли идоракунии абрӣ ё on-premise",
      "Яке аз пасттарин сарбориҳо ба система",
    ],
    audience: "SMB, тандурустӣ, маориф, бахши давлатӣ",
  },
  drweb: {
    tagline: "Ҳимояи зиддивирусии бисёрқабатаи санҷидашуда ва сертификатсияшуда барои бозори ИДМ.",
    summary:
      "Dr.Web Enterprise Security Suite — ҳимояи зиддивирусии марказонидашуда барои серверҳо, мизҳои корӣ ва дастгоҳҳои мобилӣ. Бо технологияҳои фаъолона, сарбории ками система ва мутобиқат бо меъёрҳои ИДМ фарқ мекунад.",
    features: [
      "Ҳимояи зиддивирусӣ ва зидди-ransomware-и бисёрқабата",
      "Идоракунии марказонидашуда (Control Center)",
      "Dr.Web Preventive Protection (ҳимояи фаъолона)",
      "Филтри email ва веб-трафик",
      "Серверҳо, мизҳои корӣ ва дастгоҳҳои мобилӣ",
      "Меъёрҳо ва сертификатҳои ИДМ",
    ],
    audience: "Мақомоти давлатӣ, бизнес, муштариёни бозори ИДМ",
  },
  autodesk: {
    tagline: "Стандарти саноатӣ дар тарроҳӣ, BIM, механика ва аниматсия.",
    summary:
      "Ҳалли Autodesk — барои сохтмон, мошинсозӣ, геодезия ва соҳаҳои креативӣ. AutoCAD (2D/3D), Revit (BIM), Inventor (механика), 3ds Max ва Maya (визуализатсия, аниматсия). Литсензияҳои корпоративӣ ва таълимӣ дастрасанд.",
    features: [
      "AutoCAD — тарроҳии 2D/3D",
      "Revit — BIM ва меъморӣ",
      "Inventor — конструксияҳои мошинсозӣ",
      "3ds Max, Maya — визуализатсия ва аниматсия",
      "Civil 3D — тарроҳии роҳ ва инфрасохтор",
      "Ҳамкории абрӣ (BIM 360, Autodesk Construction Cloud)",
    ],
    audience: "Бюроҳои меъморӣ, ширкатҳои сохтмонӣ ва мошинсозӣ",
  },
  ideastatica: {
    tagline: "Тарроҳӣ ва санҷиши гиреҳҳои пӯлодӣ ва бетонӣ дар сонияҳо.",
    summary:
      "IDEA StatiCa — нармафзори махсус барои муҳандисони сохторӣ. Гиреҳҳои пӯлодӣ ва бетонӣ, кафшерҳо, болтҳои анкерӣ ва унсурҳоро мувофиқи стандартҳои Eurocode/AISC/CSA таҳлил мекунад.",
    features: [
      "Таҳлили гиреҳҳои пӯлодӣ ва кафшерҳо",
      "Тарроҳии гиреҳҳо ва ҷузъиёти бетонӣ",
      "Стандартҳои Eurocode, AISC, AS, SP, CSA",
      "Интегратсия бо Revit, Tekla, Advance Steel",
      "Содироти мустақим аз модели BIM",
      "Нақшаҳо ва ҳисоботҳои худкор",
    ],
    audience: "Муҳандисони сохторӣ, бюроҳои тарроҳии сохтмон",
  },
  indorsoft: {
    tagline: "Ҳалли боэътимод барои тарроҳии роҳ ва инфрасохтор дар бозори ИДМ.",
    summary:
      "Маҳсулоти ИндорСофт (IndorCAD, IndorRoad, IndorTrafficPro) — барои тарроҳии роҳҳо, кӯчаҳо, роҳҳои трамвай ва инфрасохтори шаҳрӣ. Ба меъёрҳои ИДМ комилан мувофиқ аст (ГОСТ, СП, ШНК).",
    features: [
      "IndorCAD — тарроҳии роҳ ва кӯча",
      "IndorRoad — лоиҳаҳои таъмири асосӣ",
      "IndorTrafficPro — моделсозии ҳаракати нақлиёт",
      "Меъёрҳо ва стандартҳои ИДМ",
      "Мутобиқати пурра бо AutoCAD",
      "Интегратсияи ГИС ва геодезия",
    ],
    audience: "Ташкилотҳои роҳсозӣ, банақшагирии нақлиёт",
  },
  fortinet: {
    tagline: "Пешвои Gartner Magic Quadrant — пешвои ҷаҳонии амнияти шабака.",
    summary:
      "Fortinet FortiGate — девораки оташини насли нав (NGFW), SD-WAN ва Wi-Fi-и бехатар. Маҳсулнокии баландтарин ба шарофати чипҳои махсуси SoC4/SoC5. Идоракунии марказонидашуда тавассути FortiManager ва FortiAnalyzer.",
    features: [
      "Next-Gen Firewall (NGFW) + IPS",
      "SD-WAN ва SASE",
      "FortiSwitch + FortiAP (Wi-Fi-и бехатар)",
      "Идоракунии марказонидашудаи FortiManager",
      "Zero Trust Network Access",
      "Threat Intelligence (FortiGuard Labs)",
    ],
    audience: "Шабакаҳои корпоративӣ, ISP, ташкилотҳои давлатӣ",
  },
  paloaltonetworks: {
    tagline: "Яке аз навоваронтарин ширкатҳо дар киберамният.",
    summary:
      "Palo Alto Networks — деворакҳои оташини насли нав (PA-Series), амнияти абрӣ (Prisma Cloud), SASE (Prisma Access) ва XDR (Cortex). Технологияи App-ID ҳазорон барномаро дақиқ тасниф мекунад.",
    features: [
      "NGFW дар асоси PAN-OS",
      "Технологияҳои App-ID, User-ID, Content-ID",
      "Prisma Cloud — амнияти абр",
      "Prisma Access — SASE",
      "Cortex XDR/XSIAM — таҳлили васеъ",
      "WildFire — sandbox-и абрӣ",
    ],
    audience: "Ширкатҳои бузурги корпоративӣ ва байналмилалӣ",
  },
  falcongaze: {
    tagline: "Пешгирии ихроҷи маълумоти корпоративӣ — ҳалли DLP.",
    summary:
      "Falcongaze SecureTower — системаи Data Loss Prevention (DLP). Email, мессенҷер, USB, хидматҳои абрӣ ва чопро назорат мекунад. Таҳдидҳои дохилиро ошкор мекунад ва фаъолияти кормандонро ҳисобот медиҳад.",
    features: [
      "Назорати email, IM, шабакаҳои иҷтимоӣ",
      "USB, принтер ва хидматҳои абрӣ",
      "Скриншот ва таърихи клавиатура",
      "Таҳлили таҳдиди дохилӣ (UEBA)",
      "Манъкунӣ ва огоҳии худкор",
      "Ҳисобот ва аудит",
    ],
    audience: "Молия, тандурустӣ, давлат ва ташкилотҳои дорои маълумоти махфӣ",
  },
  gfi: {
    tagline: "Амнияти шабака ва сервери почтаи дастрас ва қулай барои SMB.",
    summary:
      "Портфели GFI Software — KerioControl (UTM firewall), KerioConnect (сервери почта), LanGuard (сканери осебпазириҳо) ва Archiver. Барои бизнеси хурду миёна оптимизатсияшуда, бо нархҳои дастрас.",
    features: [
      "KerioControl — UTM firewall + VPN",
      "KerioConnect — сервери почтаи корпоративӣ",
      "LanGuard — сканери осебпазириҳо ва патч",
      "Archiver — бойгонии почта",
      "Насби тез, интерфейси қулай",
      "Литсензиякунонии мутобиқ ба SMB",
    ],
    audience: "Бизнеси хурд ва миёна (SMB)",
  },
  ssl: {
    tagline: "DigiCert, Sectigo, GlobalSign — сертификатҳои расмии SSL/TLS.",
    summary:
      "Сертификатҳои расмии SSL/TLS барои амнияти сайт ва хидматҳои шумо. Вариантҳои DV (Domain Validated), OV (Organization Validated) ва EV (Extended Validation). Сертификатҳои Wildcard ва Multi-Domain (SAN).",
    features: [
      "Single, Wildcard ва Multi-Domain (SAN)",
      "Сатҳҳои тасдиқи DV, OV, EV",
      "Сертификатҳои DigiCert, Sectigo, GlobalSign",
      "Сертификатҳои Code Signing",
      "Кафолати $1.75M+",
      "Кӯмак дар насб ва танзим",
    ],
    audience: "Вебсайтҳо, e-commerce, порталҳои давлатӣ, системаҳои корпоративӣ",
  },
  veeam: {
    tagline: "Ҳалли №1 барои нусхабардорӣ ва барқарорсозӣ — пешвои рейтингҳои Gartner.",
    summary:
      "Veeam Backup & Replication — платформаи пешбар барои нусхабардории корҳои виртуалӣ, физикӣ, NAS ва абрӣ (AWS, Azure, GCP, Microsoft 365). Барқарорсозии зуд, нусхаҳои аз ransomware ҳифзшуда ва immutable repository.",
    features: [
      "Нусхабардории VMware, Hyper-V, Nutanix AHV",
      "Microsoft 365 (Exchange, OneDrive, SharePoint, Teams)",
      "Серверҳои физикӣ ва истгоҳҳои корӣ",
      "Корҳои абрӣ (AWS, Azure, GCP)",
      "Instant Recovery — барқарорсозӣ дар дақиқаҳо",
      "Immutable backup (ҳифз аз ransomware)",
    ],
    audience: "IT-и корпоративӣ, марказҳои додаҳо, MSP",
  },
  ibm: {
    tagline: "Инфрасохтор ва нармафзори корпоративӣ барои корхонаҳои бузург.",
    summary:
      "Ҳалли IBM — IBM Spectrum Protect (нусхабардорӣ), IBM Cloud Pak (платформаи контейнер), IBM Db2 (пойгоҳи додаҳо), IBM Watson (AI). Устуворӣ ва миқёспазирии аъло барои бизнеси калон.",
    features: [
      "IBM Spectrum Protect — нусхабардории корпоративӣ",
      "IBM Cloud Pak — дар асоси Red Hat OpenShift",
      "Db2 — пойгоҳи додаҳо",
      "IBM Watson — платформаи AI",
      "Стратегияи Hybrid Cloud",
      "Дастгирии Mainframe ва Power Systems",
    ],
    audience: "Ташкилотҳои бузурги корпоративӣ ва давлатӣ",
  },
  jetbrains: {
    tagline: "IntelliJ IDEA, PyCharm, WebStorm — стандарти саноатӣ барои таҳиягарон.",
    summary:
      "IDE-ҳои JetBrains — барои ҳар забон IDE-и алоҳида: IntelliJ IDEA (Java/Kotlin), PyCharm (Python), WebStorm (JS/TS), Rider (.NET), GoLand, PhpStorm. Интегратсияи JetBrains AI Assistant ва литсензияҳои дастаӣ.",
    features: [
      "IntelliJ IDEA, PyCharm, WebStorm, Rider",
      "GoLand, PhpStorm, RubyMine, CLion",
      "Kotlin ва JetBrains AI Assistant",
      "TeamCity — CI/CD",
      "YouTrack — bug tracking",
      "Литсензияҳои корпоративӣ ва таълимӣ",
    ],
    audience: "Таҳиягарон, дастаҳои таҳия, муассисаҳои таълимии IT",
  },
  passware: {
    tagline: "Абзорҳои касбӣ барои барқарорсозии паролҳо ва криминалистикаи рақамӣ.",
    summary:
      "Passware Kit — ҳалли пешбар дар соҳаи криминалистикаи компютерӣ ва барқарорсозии парол. Барқарорсозии парол барои 340+ намуди файл, кушодани дискҳои FileVault, BitLocker, TrueCrypt, таҳлили дастгоҳҳои мобилӣ.",
    features: [
      "Барқарорсозии парол барои 340+ намуди файл",
      "Рамзкушоии FileVault, BitLocker, VeraCrypt",
      "Ҷустуҷӯи парол тавассути GPU ва тақсимшуда",
      "Криминалистикаи мобилии iOS ва Android",
      "Таҳлили хотира (RAM dump)",
      "Таҳлили Cloud Backup",
    ],
    audience: "Амнияти IT, мақомоти ҳифзи ҳуқуқ, коршиносони криминалист",
  },
  myq: {
    tagline: "Чоп, сканкунӣ ва назорати хароҷот — як платформа.",
    summary:
      "MyQ Solution — системаи идораи чопи корпоративӣ. Назорати марказонидашудаи принтерҳо ва MFP-ҳо, аутентификатсияи корбар (корт, PIN), ҳисоботи чоп ва оптимизатсияи хароҷот.",
    features: [
      "Идоракунии марказонидашудаи принтер",
      "Аутентификатсияи корбар (корт, PIN, мобилӣ)",
      "Ҳисоботи чоп ва хароҷот",
      "Pull printing — чопи бехатар",
      "OCR ва автоматизатсияи workflow",
      "Чопи мобилӣ (BYOD)",
    ],
    audience: "Офисҳои бузург, муассисаҳои давлатӣ ва таълимӣ",
  },
};

/* All six languages. uz is the canonical source on each Product (catalog.ts);
   the five overlays above localize the catalog. */
export const PRODUCT_COPY: Partial<Record<Lang, Overlay>> = { ru, en, kk, ky, tg };

/** Localized product copy, falling back to the Uzbek source for any gap. */
export function productCopy(slug: string, lang: Lang): ProductCopy {
  const base = PRODUCTS.find((p) => p.slug === slug);
  const uz: ProductCopy = base
    ? { tagline: base.tagline, summary: base.summary, features: base.features, audience: base.audience }
    : { tagline: "", summary: "", features: [] };
  if (lang === "uz") return uz;
  const o = PRODUCT_COPY[lang]?.[slug];
  return o ? { tagline: o.tagline, summary: o.summary, features: o.features, audience: o.audience ?? uz.audience } : uz;
}
