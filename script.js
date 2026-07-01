const SUPPORTED_LOCALES = ["cs", "ru", "uk", "en"];
const LOCALE_TAGS = {
  cs: "cs-CZ",
  ru: "ru-RU",
  uk: "uk-UA",
  en: "en-US",
};

function tr(cs, ru, uk, en) {
  return { cs, ru, uk, en };
}

function detectLocale() {
  const candidates = [...(navigator.languages ?? []), navigator.language, document.documentElement.lang];

  for (const candidate of candidates) {
    const base = String(candidate || "")
      .toLowerCase()
      .split("-")[0];

    if (SUPPORTED_LOCALES.includes(base)) {
      return base;
    }
  }

  return "cs";
}

const uiText = {
  metaTitle: tr("Úklid domácnosti Praha", "Уборка дома Прага", "Прибирання дому Прага", "Home cleaning Prague"),
  progressService: tr("1. Výběr služby", "1. Выбор услуги", "1. Вибір послуги", "1. Service selection"),
  progressAddress: tr(
    "2. Adresa a kontaktní údaje",
    "2. Адрес и контактные данные",
    "2. Адреса та контактні дані",
    "2. Address and contact details"
  ),
  progressPayment: tr(
    "3. Výběr způsobu platby",
    "3. Выбор способа оплаты",
    "3. Вибір способу оплати",
    "3. Payment method"
  ),
  pageTitle: tr("Úklid domácnosti Praha", "Уборка дома Прага", "Прибирання дому Прага", "Home cleaning Prague"),
  languageSwitcher: tr("Přepínač jazyka", "Переключатель языка", "Перемикач мови", "Language switcher"),
  customerPerson: tr("Fyzická osoba", "Физическое лицо", "Фізична особа", "Private person"),
  customerCompany: tr("Právnická osoba", "Юридическое лицо", "Юридична особа", "Company"),
  apartmentTitle: tr("Váš byt", "Ваша квартира", "Ваша квартира", "Your apartment"),
  apartmentHelp: tr(
    "Co je součástí úklidu bytu",
    "Что входит в уборку квартиры",
    "Що входить у прибирання квартири",
    "What's included in apartment cleaning"
  ),
  serviceNote: tr(
    "* Kompletní úklid celého bytu, kuchyně, toalety a koupelny",
    "* Полная уборка всей квартиры, кухни, туалета и ванной",
    "* Повне прибирання всієї квартири, кухні, туалету та ванної",
    "* Full cleaning of the entire apartment, kitchen, toilet, and bathroom"
  ),
  kitchen: tr("Kuchyň", "Кухня", "Кухня", "Kitchen"),
  kitchenette: tr("+kk", "+кк", "+кк", "Kitchenette"),
  or: tr("Nebo", "Или", "Або", "Or"),
  privateHouse: tr("Soukromý dům", "Частный дом", "Приватний будинок", "Private house"),
  scheduleTitle: tr(
    "Vyberte si vhodný termín a čas",
    "Выберите подходящую дату и время",
    "Оберіть зручну дату та час",
    "Choose a suitable date and time"
  ),
  previousMonth: tr("Předchozí měsíc", "Предыдущий месяц", "Попередній місяць", "Previous month"),
  nextMonth: tr("Další měsíc", "Следующий месяц", "Наступний місяць", "Next month"),
  today: tr("dnes", "сегодня", "сьогодні", "today"),
  discountEyebrow: tr("Sleva", "Скидка", "Знижка", "Discount"),
  discountHeading: tr(
    "Pravidelný úklid - vyšší sleva",
    "Регулярная уборка - выше скидка",
    "Регулярне прибирання - більша знижка",
    "Recurring cleaning - bigger discount"
  ),
  frequencyWeeklyTitle: tr("Jednou týdně", "Раз в неделю", "Раз на тиждень", "Once a week"),
  frequencyWeeklySubtitle: tr("Nejvyšší sleva", "Максимальная скидка", "Найбільша знижка", "Highest discount"),
  frequencyTwiceTitle: tr("Dvakrát měsíčně", "Дважды в месяц", "Двічі на місяць", "Twice a month"),
  frequencyTwiceSubtitle: tr("Nejoblíbenější", "Самый популярный", "Найпопулярніший", "Most popular"),
  frequencyMonthlyTitle: tr("Jednou měsíčně", "Раз в месяц", "Раз на місяць", "Once a month"),
  frequencyMonthlySubtitle: tr("Flexibilní varianta", "Гибкий вариант", "Гнучкий варіант", "Flexible option"),
  frequencyOnceTitle: tr("Jednorázový úklid", "Разовая уборка", "Разове прибирання", "One-time cleaning"),
  frequencyOnceSubtitle: tr("Bez slevy", "Без скидки", "Без знижки", "No discount"),
  extraServicesTitle: tr("Vyberte si další služby", "Выберите дополнительные услуги", "Оберіть додаткові послуги", "Choose additional services"),
  vacuumTitle: tr(
    "Potřebujete vysavač na objednávku",
    "Нужен пылесос на заказ",
    "Потрібен пилосос на замовлення",
    "Need a vacuum cleaner with the order"
  ),
  vacuumNote: tr("Přivezeme malý vysavač", "Привезём маленький пылесос", "Привеземо маленький пилосос", "We'll bring a compact vacuum cleaner"),
  upholsteryToggle: tr(
    "OBJEDNÁNÍ CHEMICKÉHO ČIŠTĚNÍ NÁBYTKU A KOBERCŮ SOUČASNĚ S ÚKLIDEM",
    "ЗАКАЗ ХИМЧИСТКИ МЕБЕЛИ И КОВРОВ ВМЕСТЕ С УБОРКОЙ",
    "ЗАМОВЛЕННЯ ХІМЧИСТКИ МЕБЛІВ І КИЛИМІВ РАЗОМ ІЗ ПРИБИРАННЯМ",
    "ORDER FURNITURE AND CARPET DRY CLEANING TOGETHER WITH CLEANING"
  ),
  handymanToggle: tr("MUŽ NA HODINU", "МУЖ НА ЧАС", "ЧОЛОВІК НА ГОДИНУ", "HANDYMAN"),
  movingToggle: tr("PŘEVOZ A STĚHOVÁNÍ", "ПЕРЕВОЗКА И ПЕРЕЕЗД", "ПЕРЕВЕЗЕННЯ ТА ПЕРЕЇЗД", "MOVING AND DELIVERY"),
  addressTitle: tr("Zadejte svou adresu", "Укажите свой адрес", "Вкажіть свою адресу", "Enter your address"),
  cityLabel: tr("Vyberte své město", "Выберите свой город", "Оберіть своє місто", "Choose your city"),
  streetLabel: tr("Ulice", "Улица", "Вулиця", "Street"),
  zipLabel: tr("PSČ", "Индекс", "Поштовий індекс", "ZIP code"),
  houseNumberLabel: tr("Číslo popisné", "Номер дома", "Номер будинку", "House number"),
  flatNumberLabel: tr("Číslo bytu", "Номер квартиры", "Номер квартири", "Apartment number"),
  buildingLabel: tr("Budova", "Здание", "Будівля", "Building"),
  entranceLabel: tr("Vstupní číslo", "Код подъезда", "Код під'їзду", "Entrance number"),
  floorLabel: tr("Podlaží", "Этаж", "Поверх", "Floor"),
  doorCodeLabel: tr("Kód k dveřím", "Код к двери", "Код до дверей", "Door code"),
  contactTitle: tr("Kontaktní údaje", "Контактные данные", "Контактні дані", "Contact details"),
  nameLabel: tr("Vaše jméno", "Ваше имя", "Ваше ім'я", "Your name"),
  phoneLabel: tr("Kontaktní telefonní číslo", "Контактный телефон", "Контактний телефон", "Contact phone number"),
  emailLabel: tr("E-mailová adresa", "Электронная почта", "Електронна адреса", "Email address"),
  commentLabel: tr("Doplňující informace k objednávce", "Дополнительная информация к заказу", "Додаткова інформація до замовлення", "Additional order information"),
  paymentTitle: tr("Vyberte platební metodu", "Выберите способ оплаты", "Оберіть спосіб оплати", "Choose a payment method"),
  paymentCash: tr("Hotovost", "Наличными", "Готівка", "Cash"),
  paymentCard: tr("Online kartou / Apple Pay / Google Pay", "Онлайн картой / Apple Pay / Google Pay", "Онлайн карткою / Apple Pay / Google Pay", "Online card / Apple Pay / Google Pay"),
  consentTerms: tr(
    "Podáním objednávky souhlasím s <a href=\"/\">Podmínky používání</a> a <a href=\"/\">se zásadami ochrany osobních údajů</a>",
    "Оформляя заказ, я соглашаюсь с <a href=\"/\">условиями использования</a> и <a href=\"/\">политикой конфиденциальности</a>",
    "Оформлюючи замовлення, я погоджуюся з <a href=\"/\">умовами використання</a> та <a href=\"/\">політикою конфіденційності</a>",
    "By placing an order, I agree to the <a href=\"/\">terms of use</a> and the <a href=\"/\">privacy policy</a>"
  ),
  consentMarketing: tr(
    "Souhlasím s tím, aby správce zpracovával mé osobní údaje pro marketingové účely",
    "Согласен(а), чтобы администратор обрабатывал мои персональные данные в маркетинговых целях",
    "Погоджуюся, щоб адміністратор обробляв мої персональні дані для маркетингових цілей",
    "I agree that the administrator may process my personal data for marketing purposes"
  ),
  orderFor: tr("Objednat za", "Заказать за", "Замовити за", "Order for"),
  summaryNote: tr(
    "Naši partneři mají všechny potřebné čisticí prostředky a jiné vybavení",
    "Наши партнёры имеют все необходимые чистящие средства и другое оборудование",
    "Наші партнери мають усі необхідні мийні засоби та інше обладнання",
    "Our partners bring all required cleaning products and equipment"
  ),
  estimatedTime: tr("Přibližný čas", "Примерное время", "Приблизний час", "Estimated time"),
  promoPlaceholder: tr("Zadejte reklamní kód", "Введите промокод", "Введіть промокод", "Enter promo code"),
  promoNotFound: tr("Kód nebyl nalezen", "Код не найден", "Код не знайдено", "Code not found"),
  apply: tr("Použít", "Применить", "Застосувати", "Apply"),
  referralProgram: tr("Doporučovací program", "Реферальная программа", "Реферальна програма", "Referral program"),
  howItWorks: tr("Jak to funguje?", "Как это работает?", "Як це працює?", "How does it work?"),
  toPay: tr("K platbě:", "К оплате:", "До сплати:", "To pay:"),
  order: tr("Objednat", "Заказать", "Замовити", "Order"),
  propertyApartment: tr("Úklid bytu", "Уборка квартиры", "Прибирання квартири", "Apartment cleaning"),
  propertyHouse: tr("Úklid domu", "Уборка дома", "Прибирання будинку", "House cleaning"),
  summaryKitchenHallway: tr("kuchyně, chodba", "кухня, коридор", "кухня, коридор", "kitchen, hallway"),
  perWindow: tr("okno", "окно", "вікно", "window"),
  fromPrefix: tr("z", "от", "від", "from"),
};

const extrasCatalog = [
  { key: "trouba", label: tr("Vyčistíme troubu", "Почистим духовку", "Почистимо духовку", "Oven cleaning"), price: 349, icon: "🧯" },
  { key: "digestor", label: tr("Vyčistíme digestoř", "Почистим вытяжку", "Почистимо витяжку", "Hood cleaning"), price: 349, icon: "🌬️" },
  { key: "skrinky", label: tr("Vyčistíme kuchyňské skříňky (5 skříněk)", "Почистим кухонные шкафчики (5 шкафчиков)", "Почистимо кухонні шафки (5 шафок)", "Kitchen cabinet cleaning (5 cabinets)"), price: 349, icon: "🧰" },
  { key: "nadobi", label: tr("Umyjeme nádobí", "Помоем посуду", "Помиємо посуд", "Dish washing"), price: 209, icon: "🍽️" },
  { key: "lednice", label: tr("Vyčistíme lednici", "Почистим холодильник", "Почистимо холодильник", "Fridge cleaning"), price: 349, icon: "🧊" },
  { key: "mikrovlnka", label: tr("Umyjeme mikrovlnnou troubu", "Помоем микроволновку", "Помиємо мікрохвильовку", "Microwave cleaning"), price: 250, icon: "📦" },
  { key: "balkon", label: tr("Uklidíme na balkoně", "Уберём на балконе", "Приберемо на балконі", "Balcony cleaning"), price: 225, icon: "🪟" },
  { key: "okna", label: tr("Mytí oken", "Мытьё окон", "Миття вікон", "Window cleaning"), price: 229, icon: "🪟", quantity: true },
  { key: "zehleni", label: tr("Žehlení", "Глажка", "Прасування", "Ironing"), price: 349, icon: "🧺" },
  { key: "zvirata", label: tr("Uklizení podestýlky pro zvířata", "Уборка подстилки для животных", "Прибирання підстилки для тварин", "Pet litter cleaning"), price: 200, icon: "🐈" },
  { key: "hodiny", label: tr("Hodiny navíc", "Дополнительные часы", "Додаткові години", "Extra hours"), price: 349, icon: "🕘" },
  { key: "skrini", label: tr("Uklidit ve skříni", "Убрать в шкафу", "Прибрати в шафі", "Closet organization"), price: 349, icon: "🚪" },
];

const upholsteryCatalog = [
  { key: "sofa2", label: tr("Čištění dvoulůžkové pohovky", "Чистка двухместного дивана", "Чистка двомісного дивана", "Two-seat sofa cleaning"), price: 895, icon: "🛋️" },
  { key: "sofa3", label: tr("Čištění třímístné pohovky", "Чистка трёхместного дивана", "Чистка тримісного дивана", "Three-seat sofa cleaning"), price: 1190, icon: "🛋️" },
  { key: "corner4", label: tr("Čištění rohové sedací soupravy (4 místa)", "Чистка углового дивана (4 места)", "Чистка кутового дивана (4 місця)", "Corner sofa cleaning (4 seats)"), price: 1490, icon: "🪑" },
  { key: "corner6", label: tr("Čištění rohové sedací soupravy (5-6 míst)", "Чистка углового дивана (5-6 мест)", "Чистка кутового дивана (5-6 місць)", "Corner sofa cleaning (5-6 seats)"), price: 1790, icon: "🪑" },
  { key: "corner7", label: tr("Čištění rohové sedací soupravy (7+ míst)", "Чистка углового дивана (7+ мест)", "Чистка кутового дивана (7+ місць)", "Corner sofa cleaning (7+ seats)"), price: 2090, icon: "🪑" },
  { key: "mattress1a", label: tr("Čištění matrací (Jednolůžko z jedné strany)", "Чистка матраса (односпальный с одной стороны)", "Чистка матраца (односпальний з одного боку)", "Mattress cleaning (single-sided single bed)"), price: 615, icon: "🛏️" },
  { key: "mattress1b", label: tr("Čištění matrací (Jednolůžko z obou stran)", "Чистка матраса (односпальный с двух сторон)", "Чистка матраца (односпальний з обох боків)", "Mattress cleaning (double-sided single bed)"), price: 845, icon: "🛏️" },
  { key: "mattress2a", label: tr("Čištění matrací (Dvoulůžko z jedné strany)", "Чистка матраса (двуспальный с одной стороны)", "Чистка матраца (двоспальний з одного боку)", "Mattress cleaning (single-sided double bed)"), price: 1230, icon: "🛏️" },
  { key: "mattress2b", label: tr("Čištění matrací (Dvoulůžko z obou stran)", "Чистка матраса (двуспальный с двух сторон)", "Чистка матраца (двоспальний з обох боків)", "Mattress cleaning (double-sided double bed)"), price: 1690, icon: "🛏️" },
  { key: "koberec", label: tr("Čištění koberců", "Чистка ковров", "Чистка килимів", "Carpet cleaning"), price: 99, icon: "🧶" },
  { key: "krytina", label: tr("Čištění kobercová krytina", "Чистка ковролина", "Чистка килимового покриття", "Carpet flooring cleaning"), price: 95, icon: "🧶" },
  { key: "kreslo", label: tr("Čištění křesla", "Чистка кресла", "Чистка крісла", "Armchair cleaning"), price: 615, icon: "🪑" },
  { key: "office", label: tr("Čištění kancelářských židlí", "Чистка офисных стульев", "Чистка офісних стільців", "Office chair cleaning"), price: 365, icon: "💺" },
  { key: "stolicky", label: tr("Chemické čištění židlí, stoliček", "Химчистка стульев и табуретов", "Хімчистка стільців і табуретів", "Dry cleaning of chairs and stools"), price: 280, icon: "🪑" },
  { key: "postele", label: tr("Čištění čalouněných postelí", "Чистка мягких кроватей", "Чистка м'яких ліжок", "Upholstered bed cleaning"), price: 895, icon: "🛏️" },
  { key: "puf", label: tr("Čištění pufu nebo otomanu (1 místo)", "Чистка пуфа или оттоманки (1 место)", "Чистка пуфа або отоманки (1 місце)", "Pouf or ottoman cleaning (1 seat)"), price: 295, icon: "🧸" },
  { key: "kocarek", label: tr("Čištění čalounění kočárku", "Чистка обивки коляски", "Чистка оббивки візочка", "Stroller upholstery cleaning"), price: null, badge: tr("Cena na dotaz", "Цена по запросу", "Ціна за запитом", "Price on request"), icon: "🌼" },
  { key: "pachy", label: tr("Odstraňovač pachů", "Удаление запахов", "Видалення запахів", "Odor removal"), price: null, note: tr("Dle počtu jednotek nabídka", "По количеству единиц", "Залежно від кількості одиниць", "Quoted by quantity"), icon: "〰️" },
];

const handymanSections = [
  {
    title: tr("Instalatérské služby", "Сантехнические услуги", "Сантехнічні послуги", "Plumbing services"),
    items: [
      { key: "tap", label: tr("Výměna vodovodní baterie", "Замена смесителя", "Заміна змішувача", "Tap replacement"), price: 400, icon: "🚰" },
      { key: "sifon", label: tr("Instalace / výměna sifonu u umyvadla", "Установка / замена сифона у раковины", "Встановлення / заміна сифона біля умивальника", "Sink siphon installation / replacement"), price: 600, icon: "🚿" },
      { key: "washer", label: tr("Instalace pračky", "Установка стиральной машины", "Встановлення пральної машини", "Washing machine installation"), price: 400, icon: "🧺" },
      { key: "dishwasher", label: tr("Instalace myčky nádobí", "Установка посудомоечной машины", "Встановлення посудомийної машини", "Dishwasher installation"), price: 400, icon: "🍽️" },
      { key: "fan", label: tr("Instalace ventilátoru v koupelně", "Установка вентилятора в ванной", "Встановлення вентилятора у ванній", "Bathroom fan installation"), price: 600, icon: "🪭" },
      { key: "bidet", label: tr("Instalace bidetu", "Установка биде", "Встановлення біде", "Bidet installation"), price: 650, icon: "🚽" },
      { key: "sink", label: tr("Instalace umyvadla", "Установка умывальника", "Встановлення умивальника", "Sink installation"), price: 600, icon: "🛁" },
      { key: "toilet", label: tr("Instalace toalety", "Установка унитаза", "Встановлення унітаза", "Toilet installation"), price: 600, icon: "🚽" },
      { key: "urinal", label: tr("Instalace pisoárů", "Установка писсуара", "Встановлення пісуара", "Urinal installation"), price: 550, icon: "🚻" },
      { key: "hoses", label: tr("Výměna / instalace hadic pro vanové baterie, umyvadla, dřezu a umyvadla", "Замена / установка шлангов для ванны, умывальника и мойки", "Заміна / встановлення шлангів для ванни, умивальника та мийки", "Hose replacement / installation for bath, sink, and basin"), price: 350, icon: "🪝" },
      { key: "demolition-plumbing", label: tr("Demontáž (bidet, umyvadlo, WC sedátko, pisoár)", "Демонтаж (биде, умывальник, сиденье унитаза, писсуар)", "Демонтаж (біде, умивальник, сидіння унітаза, пісуар)", "Removal (bidet, sink, toilet seat, urinal)"), price: 400, icon: "❌" },
    ],
  },
  {
    title: tr("Stavební služby", "Строительные услуги", "Будівельні послуги", "Construction services"),
    items: [
      { key: "curtains", label: tr("Instalace záclonových kolejnic", "Установка карнизов для штор", "Встановлення карнизів для штор", "Curtain rail installation"), price: 300, from: true, icon: "🪟" },
      { key: "shelf-mirror", label: tr("Instalace police, zrcadla", "Установка полки, зеркала", "Встановлення полиці, дзеркала", "Shelf or mirror installation"), price: 300, from: true, icon: "🪞" },
      { key: "pictures", label: tr("Instalace závěsných obrazů, tabulí atd.", "Установка картин, досок и т. д.", "Встановлення картин, дощок тощо", "Installing pictures, boards, etc."), price: 250, from: true, icon: "🖼️" },
    ],
  },
  {
    title: tr("Zámečnické služby", "Слесарные услуги", "Слюсарні послуги", "Locksmith services"),
    items: [
      { key: "mail-lock", label: tr("Výměna zámku poštovní schránky", "Замена замка почтового ящика", "Заміна замка поштової скриньки", "Mailbox lock replacement"), price: 250, icon: "📫" },
      { key: "handle", label: tr("Instalace / oprava / výměna dveřních klik", "Установка / ремонт / замена дверных ручек", "Встановлення / ремонт / заміна дверних ручок", "Door handle installation / repair / replacement"), price: 350, icon: "🚪" },
      { key: "lock-cylinder", label: tr("Instalace / výměna vložky zámku dveří", "Установка / замена цилиндра замка двери", "Встановлення / заміна серцевини дверного замка", "Door lock cylinder installation / replacement"), price: 350, icon: "🔒" },
      { key: "door-adjust", label: tr("Oprava a seřízení dveří", "Ремонт и регулировка двери", "Ремонт і регулювання дверей", "Door repair and adjustment"), price: 650, icon: "🚪" },
    ],
  },
  {
    title: tr("Truhlářské služby", "Плотницкие услуги", "Столярні послуги", "Carpentry services"),
    items: [
      { key: "bed-fix", label: tr("Opravy postelí a pohovek", "Ремонт кроватей и диванов", "Ремонт ліжок і диванів", "Bed and sofa repair"), price: 400, from: true, icon: "🛏️" },
      { key: "furniture", label: tr("Montáž nábytku", "Сборка мебели", "Монтаж меблів", "Furniture assembly"), price: 250, from: true, icon: "🪑" },
      { key: "wardrobe", label: tr("Oprava posuvné skříně / lepení zrcadel", "Ремонт шкафа-купе / приклеивание зеркал", "Ремонт шафи-купе / приклеювання дзеркал", "Sliding wardrobe repair / mirror bonding"), price: 650, icon: "🚪" },
      { key: "fridge-door", label: tr("Výměna / instalace / oprava závěsů dveří chladničky", "Замена / установка / ремонт петель двери холодильника", "Заміна / встановлення / ремонт петель дверей холодильника", "Fridge door hinge replacement / installation / repair"), price: 450, icon: "🪛" },
    ],
  },
  {
    title: tr("Elektrotechnické služby", "Электротехнические услуги", "Електротехнічні послуги", "Electrical services"),
    items: [
      { key: "wire", label: tr("Zavedení elektrické přípojky", "Прокладка электрического подключения", "Прокладання електричного підключення", "Electrical connection installation"), price: 500, icon: "⚡" },
      { key: "fuse", label: tr("Výměna pojistek", "Замена предохранителей", "Заміна запобіжників", "Fuse replacement"), price: 500, icon: "🎛️" },
      { key: "bulbs", label: tr("Výměna žárovek, halogenových žárovek a zářivek", "Замена лампочек, галогеновых ламп и светильников", "Заміна лампочок, галогенових ламп і люмінесцентних ламп", "Bulb, halogen, and tube replacement"), price: 300, icon: "💡" },
      { key: "socket", label: tr("Instalace elektrické zásuvky", "Установка электрической розетки", "Встановлення електричної розетки", "Electrical socket installation"), price: 400, icon: "🔌" },
      { key: "led", label: tr("Instalace lustru / LED podsvícení", "Установка люстры / LED подсветки", "Встановлення люстри / LED підсвітки", "Chandelier / LED lighting installation"), price: 500, icon: "🏮" },
      { key: "repair-wire", label: tr("Oprava elektrických přípojek", "Ремонт электрических подключений", "Ремонт електричних підключень", "Electrical connection repair"), price: 450, icon: "🧷" },
      { key: "hob", label: tr("Připojení elektrické varné desky", "Подключение электрической варочной панели", "Підключення електричної варильної поверхні", "Electric cooktop connection"), price: 650, icon: "🎛️" },
      { key: "chandelier-fix", label: tr("Oprava lustru", "Ремонт люстры", "Ремонт люстри", "Chandelier repair"), price: 650, icon: "💡" },
      { key: "diagnostics", label: tr("Elektrická diagnostika", "Электрическая диагностика", "Електрична діагностика", "Electrical diagnostics"), price: 1000, icon: "🧰" },
      { key: "switch", label: tr("Instalace spínače", "Установка выключателя", "Встановлення вимикача", "Switch installation"), price: 400, icon: "🎚️" },
    ],
  },
];

const movingSections = [
  {
    title: tr("Vyberte objednávku služeb", "Выберите заказ услуг", "Оберіть замовлення послуг", "Choose service order"),
    items: [
      { key: "demontaz-nabytku", label: tr("Demontáž nábytku", "Разборка мебели", "Демонтаж меблів", "Furniture dismantling"), price: 500, icon: "🔨" },
      { key: "zbozi50", label: tr("Přeprava zboží do 50 kg", "Перевозка груза до 50 кг", "Перевезення вантажу до 50 кг", "Goods transport up to 50 kg"), price: 1099, note: tr("Vhodné pro přepravu 1 kusu nábytku", "Подходит для перевозки 1 предмета мебели", "Підходить для перевезення 1 одиниці меблів", "Suitable for transporting 1 piece of furniture"), icon: "📦" },
      { key: "move1", label: tr("Stěhování pro 1+1 nebo 1+kk byt", "Переезд для квартиры 1+1 или 1+кк", "Переїзд для квартири 1+1 або 1+кк", "Moving for a 1+1 or 1+kk apartment"), price: 3490, note: tr("Vhodné pro přepravu 5-6 kusů nábytku a 12-14 krabic věcí", "Подходит для перевозки 5-6 предметов мебели и 12-14 коробок вещей", "Підходить для перевезення 5-6 одиниць меблів та 12-14 коробок речей", "Suitable for transporting 5-6 furniture items and 12-14 boxes"), icon: "📦" },
      { key: "delivery-address", label: tr("Dodací adresa", "Адрес доставки", "Адреса доставки", "Delivery address"), price: 0, icon: "🧹" },
      { key: "outside-city", label: tr("Doručení mimo město", "Доставка за город", "Доставка за місто", "Delivery outside the city"), price: 30, icon: "🧹" },
      { key: "half-hour", label: tr("Půl hodiny navíc", "Дополнительные полчаса", "Додаткові пів години", "Extra half hour"), price: 749, icon: "🕘" },
      { key: "stairs", label: tr("Bez výtahu a nad 2. patrem", "Без лифта и выше 2 этажа", "Без ліфта і вище 2 поверху", "No elevator and above the 2nd floor"), price: 500, icon: "🏢" },
      { key: "oversize", label: tr("Nadměrný náklad", "Негабаритный груз", "Негабаритний вантаж", "Oversized cargo"), price: 500, icon: "📦" },
      { key: "move2", label: tr("Stěhování pro 2+1 nebo 2+kk byt", "Переезд для квартиры 2+1 или 2+кк", "Переїзд для квартири 2+1 або 2+кк", "Moving for a 2+1 or 2+kk apartment"), price: 6490, note: tr("Vhodné pro přepravu 8-10 kusů nábytku a 18-20 krabic věcí", "Подходит для перевозки 8-10 предметов мебели и 18-20 коробок вещей", "Підходить для перевезення 8-10 одиниць меблів та 18-20 коробок речей", "Suitable for transporting 8-10 furniture items and 18-20 boxes"), icon: "📦" },
      { key: "move3", label: tr("Stěhování pro 3+1 nebo 3+kk byt", "Переезд для квартиры 3+1 или 3+кк", "Переїзд для квартири 3+1 або 3+кк", "Moving for a 3+1 or 3+kk apartment"), price: 9990, note: tr("Vhodné pro přepravu 14-16 kusů nábytku a 26-28 krabic věcí", "Подходит для перевозки 14-16 предметов мебели и 26-28 коробок вещей", "Підходить для перевезення 14-16 одиниць меблів та 26-28 коробок речей", "Suitable for transporting 14-16 furniture items and 26-28 boxes"), icon: "🚚" },
      { key: "packing", label: tr("Balení", "Упаковка", "Пакування", "Packing"), price: 200, icon: "📥" },
      { key: "waste", label: tr("Likvidace odpadu", "Вывоз мусора", "Вивезення сміття", "Waste disposal"), price: 2500, icon: "🗑️" },
    ],
  },
];

const cityOptions = [
  { value: "prague-1-10", label: tr("Praha 1-10", "Прага 1-10", "Прага 1-10", "Prague 1-10"), surcharge: 0 },
  { value: "benice", label: "Benice", surcharge: 200 },
  { value: "bechovice", label: "Běchovice", surcharge: 250 },
  { value: "cakovice", label: "Čakovice", surcharge: 250 },
  { value: "dablice", label: "Ďáblice", surcharge: 200 },
  { value: "dolni-chabry", label: "Dolní Chabry", surcharge: 250 },
  { value: "kralovice", label: "Královice", surcharge: 300 },
  { value: "kunratice", label: "Kunratice", surcharge: 200 },
  { value: "petrovice", label: "Petrovice", surcharge: 250 },
  { value: "reporyje", label: "Řeporyje", surcharge: 200 },
  { value: "uhrineves", label: "Uhříněves", surcharge: 250 },
  { value: "vinor", label: "Vinoř", surcharge: 300 },
];

const discountCycle = ["-10%", "-20%", "-15%", "-18%", "-13%", "-18%", "-18%"];
const frequencyConfig = [
  { key: "weekly", discount: 15, badge: "-15%", title: uiText.frequencyWeeklyTitle, subtitle: uiText.frequencyWeeklySubtitle },
  { key: "twice-monthly", discount: 10, badge: "-10%", title: uiText.frequencyTwiceTitle, subtitle: uiText.frequencyTwiceSubtitle },
  { key: "monthly", discount: 5, badge: "-5%", title: uiText.frequencyMonthlyTitle, subtitle: uiText.frequencyMonthlySubtitle },
  { key: "once", discount: 0, badge: "🙂", title: uiText.frequencyOnceTitle, subtitle: uiText.frequencyOnceSubtitle, neutral: true },
];

const PROMO_CODES = {
  SLEVA15: { type: "percent", value: 15 },
  CLEAN10: { type: "percent", value: 10 },
  PARTNER50: { type: "fixed", value: 50 },
};

const COMPANY_SURCHARGE = 175;
const HANDYMAN_MIN_ORDER = 1500;

const today = getStartOfDay(new Date());
const calendarMonths = buildCalendarMonths(today);
const initialSelectedDay = calendarMonths[0]?.cells.find((cell) => !cell.empty && !cell.blocked)?.key ?? "";

const state = {
  locale: detectLocale(),
  customerType: "person",
  rooms: 1,
  bathrooms: 2,
  kitchenType: "kitchenette",
  privateHouse: false,
  frequency: "once",
  frequencyDiscount: 0,
  extras: new Set(),
  upholsteryExtras: new Set(),
  handymanExtras: new Set(),
  movingExtras: new Set(),
  windowCount: 0,
  vacuumNeeded: false,
  promo: null,
  promoInvalid: false,
  currentMonth: 0,
  selectedDay: initialSelectedDay,
  selectedTime: "9:00",
  payment: "cash",
  upholsteryOpen: false,
  handymanOpen: false,
  movingOpen: false,
  city: cityOptions[0].value,
};

const allHandymanItems = handymanSections.flatMap((section) => section.items);
const allMovingItems = movingSections.flatMap((section) => section.items);

const progressSteps = [...document.querySelectorAll(".progress-step")];
const progressBar = document.querySelector(".page-progress");
const stepSections = progressSteps
  .map((step) => document.getElementById(step.dataset.target))
  .filter(Boolean);

const localeSwitcher = document.querySelector(".locale-switcher");
const localeButtons = [...document.querySelectorAll(".locale-switcher__button")];
const pageTitle = document.querySelector(".page-title");
const customerPersonButton = document.querySelector('.segment-button[data-customer="person"]');
const customerCompanyButton = document.querySelector('.segment-button[data-customer="company"]');
const apartmentTitle = document.querySelector(".stage-header--spread .stage-title");
const helpLinkText = document.querySelector(".help-link span:last-child");
const serviceNote = document.querySelector(".service-note");
const kitchenText = document.querySelector('.mini-choice[data-kitchen="kitchen"] .mini-choice-text');
const kitchenetteText = document.querySelector('.mini-choice[data-kitchen="kitchenette"] .mini-choice-text');
const kitchenDivider = document.querySelector(".kitchen-divider");
const houseCopy = document.querySelector(".house-copy");
const weekdayRow = document.getElementById("weekday-row");
const monthPrev = document.getElementById("month-prev");
const monthNext = document.getElementById("month-next");
const monthLabel = document.getElementById("month-label");
const calendarGrid = document.getElementById("calendar-grid");
const timeGrid = document.getElementById("time-grid");
const roomsValue = document.getElementById("rooms-value");
const bathroomsValue = document.getElementById("bathrooms-value");
const privateHouseInput = document.getElementById("private-house");
const vacuumInput = document.getElementById("vacuum-needed");
const extrasGrid = document.getElementById("extras-grid");
const upholsteryGrid = document.getElementById("upholstery-grid");
const upholsteryPanel = document.getElementById("upholstery-panel");
const handymanPanel = document.getElementById("handyman-panel");
const movingPanel = document.getElementById("moving-panel");
const upholsteryToggle = document.getElementById("upholstery-toggle");
const handymanToggle = document.getElementById("handyman-toggle");
const movingToggle = document.getElementById("moving-toggle");
const citySelect = document.getElementById("city");
const phoneInput = document.getElementById("phone-input");
const promoForm = document.getElementById("promo-form");
const promoCodeInput = document.getElementById("promo-code");
const summaryTitle = document.getElementById("summary-title");
const summaryDuration = document.getElementById("summary-duration");
const summaryTotalPrice = document.getElementById("summary-total-price");
const summaryOriginalPrice = document.getElementById("summary-original-price");
const summaryNoteText = document.querySelector(".summary-note p");
const summaryOrderButton = document.getElementById("summary-order-button");
const summaryMetaLabel = document.querySelector(".summary-meta span");
const summaryTotalLabel = document.querySelector(".summary-total > span");
const finalOrderButton = document.getElementById("final-order-button");
const finalOrderPrice = document.getElementById("final-order-price");
const finalOrderOriginal = document.getElementById("final-order-original");
const finalOrderLabel = document.querySelector(".final-button__label");
const referralTitle = document.querySelector(".referral-row span");
const referralHint = document.querySelector(".referral-row small");
const promoButton = document.querySelector(".promo-button");
const paymentCards = [...document.querySelectorAll(".payment-card")];
const paymentCardTitles = paymentCards.map((card) => card.querySelector("strong"));
const consentTextNodes = [...document.querySelectorAll(".consent-row > span:last-child")];
const vacuumTitle = document.querySelector(".vacuum-copy strong");
const vacuumNote = document.querySelector(".vacuum-copy small");
const stageTitles = [...document.querySelectorAll(".stage-box .stage-title")];
const frequencyEyebrow = document.querySelector(".stage-eyebrow");
const frequencyHeading = document.querySelector(".stage-heading");
const frequencyCards = [...document.querySelectorAll(".frequency-card")];
const addressTitle = document.querySelector(".form-stage--address .stage-title");
const contactTitle = document.querySelector(".form-stage--contact .stage-title");
const paymentTitle = document.querySelector("#address-section .form-stage:last-of-type .stage-title");
const addressFieldLabels = [...document.querySelectorAll(".form-stage--address .field > span")];
const contactFieldLabels = [...document.querySelectorAll(".form-stage--contact .field > span")];
const addonToggleTitles = {
  upholstery: upholsteryToggle.querySelector(".upholstery-copy"),
  handyman: handymanToggle.querySelector(".upholstery-copy"),
  moving: movingToggle.querySelector(".upholstery-copy"),
};

function currentLocaleTag() {
  return LOCALE_TAGS[state.locale] ?? LOCALE_TAGS.cs;
}

function text(value) {
  if (typeof value === "string") {
    return value;
  }

  return value?.[state.locale] ?? value?.cs ?? "";
}

function capitalize(value) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : value;
}

function formatNumber(value) {
  return new Intl.NumberFormat(currentLocaleTag()).format(Math.round(value)).replace(/\u00A0/g, " ");
}

function formatCurrency(value) {
  return `${formatNumber(value)} Kč`;
}

function getMonthName(year, monthIndex) {
  return capitalize(
    new Intl.DateTimeFormat(currentLocaleTag(), {
      month: "long",
    }).format(new Date(year, monthIndex, 1))
  );
}

function getWeekdayNames() {
  const monday = new Date(Date.UTC(2024, 0, 1));

  return Array.from({ length: 7 }, (_, index) =>
    capitalize(
      new Intl.DateTimeFormat(currentLocaleTag(), { weekday: "long" }).format(
        new Date(monday.getTime() + index * 24 * 60 * 60 * 1000)
      )
    )
  );
}

function getSlavicPluralIndex(value) {
  const mod10 = value % 10;
  const mod100 = value % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return 0;
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return 1;
  }

  return 2;
}

function pluralize(value, forms) {
  if (state.locale === "en") {
    return `${value} ${value === 1 ? forms.en[0] : forms.en[1]}`;
  }

  if (state.locale === "cs") {
    if (value === 1) {
      return `${value} ${forms.cs[0]}`;
    }
    if (value >= 2 && value <= 4) {
      return `${value} ${forms.cs[1]}`;
    }
    return `${value} ${forms.cs[2]}`;
  }

  const localeForms = state.locale === "ru" ? forms.ru : forms.uk;
  return `${value} ${localeForms[getSlavicPluralIndex(value)]}`;
}

function pluralizeRooms(value) {
  return pluralize(value, {
    cs: ["pokoj", "pokoje", "pokojů"],
    ru: ["комната", "комнаты", "комнат"],
    uk: ["кімната", "кімнати", "кімнат"],
    en: ["room", "rooms"],
  });
}

function pluralizeBathrooms(value) {
  return pluralize(value, {
    cs: ["koupelna", "koupelny", "koupelen"],
    ru: ["ванная", "ванные", "ванных"],
    uk: ["ванна кімната", "ванні кімнати", "ванних кімнат"],
    en: ["bathroom", "bathrooms"],
  });
}

function pluralizeWindows(value) {
  return pluralize(value, {
    cs: ["okno", "okna", "oken"],
    ru: ["окно", "окна", "окон"],
    uk: ["вікно", "вікна", "вікон"],
    en: ["window", "windows"],
  });
}

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  const hourLabel = pluralize(hours, {
    cs: ["hodina", "hodiny", "hodin"],
    ru: ["час", "часа", "часов"],
    uk: ["година", "години", "годин"],
    en: ["hour", "hours"],
  });

  if (!rest) {
    return hourLabel;
  }

  const minuteLabel = pluralize(rest, {
    cs: ["minuta", "minuty", "minut"],
    ru: ["минута", "минуты", "минут"],
    uk: ["хвилина", "хвилини", "хвилин"],
    en: ["minute", "minutes"],
  });

  return `${hourLabel} ${minuteLabel}`;
}

function getStartOfDay(date) {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
}

function getMonthKey(year, monthIndex) {
  return `${year}-${String(monthIndex + 1).padStart(2, "0")}`;
}

function isSameDay(left, right) {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
}

function createMonth({ year, monthIndex, todayDate }) {
  const key = getMonthKey(year, monthIndex);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const leadingEmpty = (new Date(year, monthIndex, 1).getDay() + 6) % 7;
  const cells = [];
  let discountIndex = 0;

  for (let index = 0; index < leadingEmpty; index += 1) {
    cells.push({ empty: true, key: `${key}-empty-${index}` });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const currentDate = getStartOfDay(new Date(year, monthIndex, day));
    const todayCell = isSameDay(currentDate, todayDate);

    if (currentDate < todayDate) {
      cells.push({ key: `${key}-${day}`, day, blocked: true, isToday: false });
      continue;
    }

    cells.push({
      key: `${key}-${day}`,
      day,
      isToday: todayCell,
      discount: todayCell ? "" : discountCycle[discountIndex % discountCycle.length],
    });

    if (!todayCell) {
      discountIndex += 1;
    }
  }

  return { key, year, monthIndex, cells };
}

function buildCalendarMonths(startDate, count = 12) {
  return Array.from({ length: count }, (_, offset) => {
    const monthDate = new Date(startDate.getFullYear(), startDate.getMonth() + offset, 1);
    return createMonth({
      year: monthDate.getFullYear(),
      monthIndex: monthDate.getMonth(),
      todayDate: startDate,
    });
  });
}

function formatTime(hour, minute) {
  return `${hour}:${String(minute).padStart(2, "0")}`;
}

const timeOptions = [
  { base: "7:30", choices: ["7:45"] },
  ...Array.from({ length: 13 }, (_, index) => {
    const hour = index + 8;
    return {
      base: formatTime(hour, 0),
      choices: [15, 30, 45].map((minute) => formatTime(hour, minute)),
    };
  }),
];

function getSelectedCity() {
  return cityOptions.find((option) => option.value === state.city) ?? cityOptions[0];
}

function getFirstAvailableDay(monthIndex) {
  const month = calendarMonths[monthIndex];
  return month.cells.find((cell) => !cell.empty && !cell.blocked) ?? null;
}

function ensureSelectedDayForMonth(monthIndex) {
  const month = calendarMonths[monthIndex];
  if (state.selectedDay.startsWith(`${month.key}-`)) {
    return;
  }

  const fallbackDay = getFirstAvailableDay(monthIndex);
  if (fallbackDay) {
    state.selectedDay = fallbackDay.key;
  }
}

function populateCitySelect() {
  citySelect.innerHTML = cityOptions
    .map((option) => {
      const label = text(option.label);
      const suffix = option.surcharge ? ` (+${formatCurrency(option.surcharge)})` : "";
      return `<option value="${option.value}">${label}${suffix}</option>`;
    })
    .join("");

  citySelect.value = state.city;
}

function renderFrequencyCards() {
  frequencyCards.forEach((card, index) => {
    const config = frequencyConfig[index];
    const badge = card.querySelector(".discount-badge");
    const title = card.querySelector("strong");
    const subtitle = card.querySelector("small");
    const active = state.frequency === config.key;

    card.dataset.frequency = config.key;
    card.dataset.discount = String(config.discount);
    card.classList.toggle("selected", active);
    badge.classList.toggle("discount-badge--neutral", Boolean(config.neutral));
    badge.textContent = config.badge;
    title.textContent = text(config.title);
    subtitle.textContent = text(config.subtitle);
  });
}

function createPriceMarkup(item) {
  if (item.price === null) {
    return item.badge ? `<span class="service-card__price">${text(item.badge)}</span>` : "";
  }

  if (item.from) {
    return `<span class="service-card__price">${text(uiText.fromPrefix)} ${formatCurrency(item.price)}</span>`;
  }

  if (item.quantity) {
    return `<span class="service-card__price">${formatCurrency(item.price)} / ${text(uiText.perWindow)}</span>`;
  }

  return `<span class="service-card__price">${formatCurrency(item.price)}</span>`;
}

function createWindowCounterMarkup(selected) {
  if (!selected) {
    return "";
  }

  return `
    <div class="service-card__counter">
      <button class="service-card__counter-btn" type="button" data-window-action="decrease" aria-label="-">-</button>
      <span class="service-card__counter-value">${pluralizeWindows(state.windowCount)}</span>
      <button class="service-card__counter-btn" type="button" data-window-action="increase" aria-label="+">+</button>
    </div>
  `;
}

function createServiceCardMarkup(item, selectedSet, groupName) {
  const selected = selectedSet.has(item.key);
  const noteMarkup = item.note ? `<small class="service-card__note">${text(item.note)}</small>` : "";
  const quantityCounter = item.quantity ? createWindowCounterMarkup(selected) : "";

  return `
    <article
      class="service-card${selected ? " selected" : ""}${item.quantity ? " service-card--quantity" : ""}"
      role="button"
      tabindex="0"
      aria-pressed="${selected}"
      data-card-key="${item.key}"
      data-card-group="${groupName}"
    >
      <span class="service-card__icon">${item.icon}</span>
      <span class="service-card__title">${text(item.label)}</span>
      ${noteMarkup}
      ${quantityCounter}
      ${createPriceMarkup(item)}
    </article>
  `;
}

function renderServiceCards(target, items, selectedSet, groupName) {
  target.innerHTML = items.map((item) => createServiceCardMarkup(item, selectedSet, groupName)).join("");
}

function renderGroupedCatalog(target, sections, selectedSet, groupName) {
  target.innerHTML = `
    ${sections
      .map(
        (section) => `
          <section class="service-group">
            <h3 class="service-group__title">${text(section.title)}</h3>
            <div class="service-cards">
              ${section.items.map((item) => createServiceCardMarkup(item, selectedSet, groupName)).join("")}
            </div>
          </section>
        `
      )
      .join("")}
  `;
}

function renderCalendar() {
  const activeMonth = calendarMonths[state.currentMonth];

  monthLabel.textContent = getMonthName(activeMonth.year, activeMonth.monthIndex);
  monthPrev.disabled = state.currentMonth === 0;
  monthNext.disabled = state.currentMonth === calendarMonths.length - 1;

  calendarGrid.innerHTML = activeMonth.cells
    .map((item) => {
      if (item.empty) {
        return `<span class="calendar-empty" aria-hidden="true"></span>`;
      }

      if (item.blocked) {
        return `
          <button class="calendar-cell calendar-cell--blocked" type="button" disabled>
            <span class="calendar-card">
              <small>&nbsp;</small>
              <strong>${item.day}</strong>
            </span>
          </button>
        `;
      }

      const cellClasses = [
        "calendar-cell",
        item.discount ? "calendar-cell--discount" : "",
        item.isToday ? "calendar-cell--today" : "",
        state.selectedDay === item.key ? "selected" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return `
        <button class="${cellClasses}" type="button" data-day-key="${item.key}">
          <span class="calendar-card">
            <small>${item.isToday ? text(uiText.today) : item.discount || "&nbsp;"}</small>
            <strong>${item.day}</strong>
          </span>
        </button>
      `;
    })
    .join("");
}

function slotContainsTime(slot, time) {
  return time === slot.base || slot.choices.includes(time);
}

function getMinuteLabel(time) {
  return `:${time.split(":")[1]}`;
}

function renderTimeSlots() {
  timeGrid.innerHTML = timeOptions
    .map((slot) => {
      const selected = slotContainsTime(slot, state.selectedTime) ? " selected" : "";
      const selectedMinute =
        slotContainsTime(slot, state.selectedTime) && state.selectedTime !== slot.base
          ? `<span class="time-slot__selected-minute">${getMinuteLabel(state.selectedTime)}</span>`
          : "";
      const minuteChoices = slot.choices
        .map((time) => {
          const minuteSelected = state.selectedTime === time ? " selected" : "";
          return `
            <button class="time-minute${minuteSelected}" type="button" data-time="${time}">
              ${getMinuteLabel(time)}
            </button>
          `;
        })
        .join("");

      return `
        <div class="time-slot-wrap">
          <button class="time-slot${selected}" type="button" data-time="${slot.base}">
            <span class="time-slot__label">${slot.base}</span>
            ${selectedMinute}
          </button>
          <div class="time-slot-minutes">
            ${minuteChoices}
          </div>
        </div>
      `;
    })
    .join("");
}

function getSelectedPrice(items, selectedSet) {
  return items.reduce((sum, item) => {
    if (!selectedSet.has(item.key) || item.price === null) {
      return sum;
    }

    if (item.quantity) {
      return sum + item.price * state.windowCount;
    }

    return sum + item.price;
  }, 0);
}

function getBasePrice() {
  return 1049 + (state.rooms - 1) * 290 + (state.bathrooms - 1) * 359 - (state.kitchenType === "kitchenette" ? 50 : 0);
}

function getHouseMultiplier() {
  return state.privateHouse ? 1.2 : 1;
}

function getPromoDiscount(subtotal) {
  if (!state.promo) {
    return 0;
  }

  if (state.promo.type === "percent") {
    return subtotal * (state.promo.value / 100);
  }

  return state.promo.value;
}

function getHandymanCharge() {
  const selectedPrice = getSelectedPrice(allHandymanItems, state.handymanExtras);
  return selectedPrice > 0 ? Math.max(selectedPrice, HANDYMAN_MIN_ORDER) : 0;
}

function getMovingCharge() {
  return getSelectedPrice(allMovingItems, state.movingExtras);
}

function getDurationMinutes() {
  let minutes = 180 + (state.rooms - 1) * 45 + (state.bathrooms - 1) * 50;

  if (state.privateHouse) {
    minutes += 35;
  }

  if (state.vacuumNeeded) {
    minutes += 10;
  }

  if (state.extras.has("hodiny")) {
    minutes += 60;
  }

  minutes += state.extras.size * 12;

  if (state.extras.has("okna") && state.windowCount > 1) {
    minutes += (state.windowCount - 1) * 10;
  }

  minutes += state.upholsteryExtras.size * 18;
  minutes += state.handymanExtras.size * 24;
  minutes += state.movingExtras.size * 20;

  return minutes;
}

function getTotals() {
  const extrasPrice = getSelectedPrice(extrasCatalog, state.extras);
  const upholsteryPrice = getSelectedPrice(upholsteryCatalog, state.upholsteryExtras);
  const handymanPrice = getHandymanCharge();
  const movingPrice = getMovingCharge();
  const vacuumPrice = state.vacuumNeeded ? 200 : 0;
  const citySurcharge = getSelectedCity().surcharge;
  const companySurcharge = state.customerType === "company" ? COMPANY_SURCHARGE : 0;
  const original =
    (getBasePrice() + extrasPrice + upholsteryPrice + vacuumPrice) * getHouseMultiplier() +
    citySurcharge +
    companySurcharge +
    handymanPrice +
    movingPrice;
  const frequencyDiscount = original * (state.frequencyDiscount / 100);
  const subtotal = original - frequencyDiscount;
  const promoDiscount = Math.min(getPromoDiscount(subtotal), subtotal);
  const total = subtotal - promoDiscount;

  return {
    original: Math.round(original),
    total: Math.round(total),
  };
}

function buildSummaryTitle(totalOriginal) {
  const propertyType = state.privateHouse ? text(uiText.propertyHouse) : text(uiText.propertyApartment);
  return `${propertyType}: ${pluralizeRooms(state.rooms)}, ${pluralizeBathrooms(state.bathrooms)}, ${text(
    uiText.summaryKitchenHallway
  )} ${formatCurrency(totalOriginal)}`;
}

function renderSummary() {
  const totals = getTotals();

  summaryTitle.textContent = buildSummaryTitle(totals.original);
  summaryNoteText.textContent = text(uiText.summaryNote);
  summaryDuration.textContent = formatDuration(getDurationMinutes());
  summaryTotalPrice.textContent = formatCurrency(totals.total);
  finalOrderPrice.textContent = formatCurrency(totals.total);

  if (totals.total !== totals.original) {
    summaryOriginalPrice.textContent = formatCurrency(totals.original);
    finalOrderOriginal.textContent = formatCurrency(totals.original);
    summaryOriginalPrice.style.display = "";
    finalOrderOriginal.style.display = "";
  } else {
    summaryOriginalPrice.style.display = "none";
    finalOrderOriginal.style.display = "none";
  }
}

function renderCounts() {
  roomsValue.textContent = pluralizeRooms(state.rooms);
  bathroomsValue.textContent = pluralizeBathrooms(state.bathrooms);
}

function renderKitchenChoices() {
  document.querySelectorAll(".mini-choice").forEach((item) => {
    const selected = item.dataset.kitchen === state.kitchenType;
    item.classList.toggle("selected", selected);
    const input = item.querySelector("input");
    if (input) {
      input.checked = selected;
    }
  });
}

function renderAccordions() {
  const accordionState = [
    { toggle: upholsteryToggle, panel: upholsteryPanel, open: state.upholsteryOpen },
    { toggle: handymanToggle, panel: handymanPanel, open: state.handymanOpen },
    { toggle: movingToggle, panel: movingPanel, open: state.movingOpen },
  ];

  accordionState.forEach(({ toggle, panel, open }) => {
    toggle.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
  });
}

function updateActiveStep() {
  const nearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
  const focusLine = progressBar.offsetHeight + 56;
  let activeId = stepSections[0]?.id;

  stepSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= focusLine && rect.bottom > focusLine) {
      activeId = section.id;
    }
  });

  if (nearBottom && stepSections.length) {
    activeId = stepSections[stepSections.length - 1].id;
  }

  progressSteps.forEach((step) => {
    step.classList.toggle("active", step.dataset.target === activeId);
  });
}

function renderStaticTranslations() {
  document.documentElement.lang = state.locale;
  document.title = text(uiText.metaTitle);

  progressSteps[0].querySelector("span").textContent = text(uiText.progressService);
  progressSteps[1].querySelector("span").textContent = text(uiText.progressAddress);
  progressSteps[2].querySelector("span").textContent = text(uiText.progressPayment);

  localeSwitcher.setAttribute("aria-label", text(uiText.languageSwitcher));
  localeButtons.forEach((button) => {
    const active = button.dataset.locale === state.locale;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  pageTitle.textContent = text(uiText.pageTitle);
  customerPersonButton.textContent = text(uiText.customerPerson);
  customerCompanyButton.textContent = text(uiText.customerCompany);
  apartmentTitle.textContent = text(uiText.apartmentTitle);
  helpLinkText.textContent = text(uiText.apartmentHelp);
  serviceNote.textContent = text(uiText.serviceNote);
  kitchenText.textContent = text(uiText.kitchen);
  kitchenetteText.textContent = text(uiText.kitchenette);
  kitchenDivider.textContent = text(uiText.or);
  houseCopy.textContent = text(uiText.privateHouse);

  stageTitles[1].textContent = text(uiText.scheduleTitle);
  frequencyEyebrow.textContent = text(uiText.discountEyebrow);
  frequencyHeading.textContent = text(uiText.discountHeading);
  stageTitles[2].textContent = text(uiText.extraServicesTitle);

  vacuumTitle.textContent = text(uiText.vacuumTitle);
  vacuumNote.textContent = text(uiText.vacuumNote);
  addonToggleTitles.upholstery.textContent = text(uiText.upholsteryToggle);
  addonToggleTitles.handyman.textContent = text(uiText.handymanToggle);
  addonToggleTitles.moving.textContent = text(uiText.movingToggle);

  addressTitle.textContent = text(uiText.addressTitle);
  contactTitle.textContent = text(uiText.contactTitle);
  paymentTitle.textContent = text(uiText.paymentTitle);

  const translatedAddressLabels = [
    text(uiText.cityLabel),
    text(uiText.streetLabel),
    text(uiText.zipLabel),
    text(uiText.houseNumberLabel),
    text(uiText.flatNumberLabel),
    text(uiText.buildingLabel),
    text(uiText.entranceLabel),
    text(uiText.floorLabel),
    text(uiText.doorCodeLabel),
  ];

  addressFieldLabels.forEach((labelNode, index) => {
    labelNode.textContent = translatedAddressLabels[index] ?? "";
  });

  const translatedContactLabels = [
    text(uiText.nameLabel),
    text(uiText.phoneLabel),
    text(uiText.emailLabel),
    text(uiText.commentLabel),
  ];

  contactFieldLabels.forEach((labelNode, index) => {
    labelNode.textContent = translatedContactLabels[index] ?? "";
  });

  paymentCardTitles[0].textContent = text(uiText.paymentCash);
  paymentCardTitles[1].textContent = text(uiText.paymentCard);
  consentTextNodes[0].innerHTML = text(uiText.consentTerms);
  consentTextNodes[1].textContent = text(uiText.consentMarketing);
  finalOrderLabel.textContent = text(uiText.orderFor);
  summaryMetaLabel.textContent = text(uiText.estimatedTime);
  promoCodeInput.placeholder = state.promoInvalid ? text(uiText.promoNotFound) : text(uiText.promoPlaceholder);
  promoButton.textContent = text(uiText.apply);
  referralTitle.textContent = text(uiText.referralProgram);
  referralHint.textContent = text(uiText.howItWorks);
  summaryTotalLabel.textContent = text(uiText.toPay);
  summaryOrderButton.textContent = text(uiText.order);

  monthPrev.setAttribute("aria-label", text(uiText.previousMonth));
  monthNext.setAttribute("aria-label", text(uiText.nextMonth));

  [...weekdayRow.children].forEach((node, index) => {
    node.textContent = getWeekdayNames()[index];
  });
}

function renderGroupedPanels() {
  renderGroupedCatalog(handymanPanel, handymanSections, state.handymanExtras, "handyman");
  renderGroupedCatalog(movingPanel, movingSections, state.movingExtras, "moving");
}

function renderAll() {
  renderStaticTranslations();
  populateCitySelect();
  renderCounts();
  renderKitchenChoices();
  renderFrequencyCards();
  renderCalendar();
  renderTimeSlots();
  renderServiceCards(extrasGrid, extrasCatalog, state.extras, "extras");
  renderServiceCards(upholsteryGrid, upholsteryCatalog, state.upholsteryExtras, "upholstery");
  renderGroupedPanels();
  renderAccordions();
  renderSummary();
  updateActiveStep();
}

function setMonth(monthIndex) {
  state.currentMonth = Math.max(0, Math.min(monthIndex, calendarMonths.length - 1));
  ensureSelectedDayForMonth(state.currentMonth);
  renderAll();
}

function normalizePhoneDigits(value) {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("420")) {
    digits = digits.slice(3);
  }

  return digits.slice(0, 9);
}

function formatPhoneInput(value) {
  const digits = normalizePhoneDigits(value);
  return digits.replace(/(\d{3})(?=\d)/g, "$1 ").trim();
}

function getSelectedSetByGroup(groupName) {
  if (groupName === "upholstery") {
    return state.upholsteryExtras;
  }

  if (groupName === "handyman") {
    return state.handymanExtras;
  }

  if (groupName === "moving") {
    return state.movingExtras;
  }

  return state.extras;
}

function toggleServiceCard(card) {
  const key = card.dataset.cardKey;
  const groupName = card.dataset.cardGroup;
  const selectedSet = getSelectedSetByGroup(groupName);

  if (key === "okna" && groupName === "extras") {
    if (!selectedSet.has(key)) {
      selectedSet.add(key);
      state.windowCount = 1;
      renderAll();
    }
    return;
  }

  if (selectedSet.has(key)) {
    selectedSet.delete(key);
  } else {
    selectedSet.add(key);
  }

  renderAll();
}

document.querySelectorAll(".segment-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.customerType = button.dataset.customer;

    document.querySelectorAll(".segment-button").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });

    renderAll();
  });
});

localeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.locale = button.dataset.locale;
    renderAll();
  });
});

document.querySelectorAll(".counter-controls").forEach((control) => {
  control.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) {
      return;
    }

    const key = control.dataset.counter;
    const direction = actionButton.dataset.action === "increase" ? 1 : -1;
    state[key] = Math.max(1, state[key] + direction);
    renderAll();
  });
});

document.querySelectorAll(".mini-choice").forEach((choice) => {
  choice.addEventListener("click", () => {
    state.kitchenType = choice.dataset.kitchen;
    renderAll();
  });
});

privateHouseInput.addEventListener("change", () => {
  state.privateHouse = privateHouseInput.checked;
  renderAll();
});

vacuumInput.addEventListener("change", () => {
  state.vacuumNeeded = vacuumInput.checked;
  renderAll();
});

citySelect.addEventListener("change", () => {
  state.city = citySelect.value;
  renderAll();
});

phoneInput.addEventListener("input", () => {
  phoneInput.value = formatPhoneInput(phoneInput.value);
});

document.addEventListener("click", (event) => {
  const windowAction = event.target.closest("[data-window-action]");
  if (windowAction) {
    const direction = windowAction.dataset.windowAction === "increase" ? 1 : -1;
    state.windowCount = Math.max(0, state.windowCount + direction);

    if (state.windowCount === 0) {
      state.extras.delete("okna");
    } else {
      state.extras.add("okna");
    }

    renderAll();
    return;
  }

  const card = event.target.closest(".service-card");
  if (card) {
    toggleServiceCard(card);
    return;
  }

  const dayButton = event.target.closest("[data-day-key]");
  if (dayButton) {
    state.selectedDay = dayButton.dataset.dayKey;
    renderAll();
    return;
  }

  const timeButton = event.target.closest("[data-time]");
  if (timeButton) {
    state.selectedTime = timeButton.dataset.time;
    renderAll();
  }
});

document.addEventListener("keydown", (event) => {
  const card = event.target.closest(".service-card");
  if (!card) {
    return;
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleServiceCard(card);
  }
});

frequencyCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const config = frequencyConfig[index];
    state.frequency = config.key;
    state.frequencyDiscount = config.discount;
    renderAll();
  });
});

paymentCards.forEach((card) => {
  card.addEventListener("click", () => {
    paymentCards.forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
    state.payment = card.dataset.payment;
  });
});

[
  { toggle: upholsteryToggle, key: "upholsteryOpen" },
  { toggle: handymanToggle, key: "handymanOpen" },
  { toggle: movingToggle, key: "movingOpen" },
].forEach(({ toggle, key }) => {
  toggle.addEventListener("click", () => {
    state[key] = !state[key];
    renderAll();
  });
});

promoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const code = promoCodeInput.value.trim().toUpperCase();

  if (!code) {
    state.promo = null;
    state.promoInvalid = false;
    renderAll();
    return;
  }

  state.promo = PROMO_CODES[code] ?? null;

  if (!state.promo) {
    state.promoInvalid = true;
    promoCodeInput.value = "";
  } else {
    state.promoInvalid = false;
  }

  renderAll();
});

progressSteps.forEach((step) => {
  step.addEventListener("click", () => {
    const target = document.getElementById(step.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

monthPrev.addEventListener("click", () => {
  setMonth(state.currentMonth - 1);
});

monthNext.addEventListener("click", () => {
  setMonth(state.currentMonth + 1);
});

summaryOrderButton.addEventListener("click", () => {
  document.getElementById("payment-section").scrollIntoView({ behavior: "smooth", block: "start" });
});

finalOrderButton.addEventListener("click", () => {
  finalOrderPrice.textContent = formatCurrency(getTotals().total);
});

window.addEventListener("scroll", updateActiveStep, { passive: true });
window.addEventListener("resize", updateActiveStep);

renderAll();
